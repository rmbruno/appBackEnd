const {MongoClient} = require('mongodb');
const express = require('express');
//const server = require('http').createServer(app); 
const cors = require('cors');
const app = express();

const http = require('http').Server(app);

app.use(cors());
//app.use('/delivery', TaskRoutes);

const mongoClient = new MongoClient(
    'mongodb+srv://rmbruno:25Novembro@cluster0.cklxw.mongodb.net/appservicos?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true}
);

var collections = {};

app.get('/pedidos/:id', async (req,res, next) => {
    try{
        let result = await collections.pedidos.find({loja_id: req.params.id}).toArray();
        res.send(result);
    }catch(e){
        res.status(500).send({'message1': e.message})
    }
});

const io = require('socket.io')(http, {cors: {
    "origin": "*",
    "methods": ["GET","POST","PUT", "DELETE"],
    "allowHeaders": [],
    "credentials": true
}})

io.on('connection', (socket,id) => {
    console.log('Usuário: '+ socket.id);
    try {
        let result = collections.pedidos.find({loja_id: id}).toArray();
        if(result){
            socket.emit('retorno', result)
        }
        console.log('conexão com db bem sucedida1')
     } catch (error) {
         console.log('erro na conexão')        
     }
});

app.listen(3001, async () => {
    try {
       await mongoClient.connect();
       collections.pedidos = mongoClient.db('appservicos').collection('delivery_pedidos');
       console.log('conexão com db bem sucedida')
    } catch (error) {
        console.log('erro na conexão')        
    }
})


/*app.use(express.json());
app.use(cors());
app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Acces-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Acces-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

const server = app.listen("3001", () => console.log('server online on port: 3001'));

const socket = require('socket.io');
io = socket(server,{cors: {origin: "*"}});

const TaskRoutes = require('./routes/TaskRoutes');
const { response } = require('express');

app.use('/delivery', TaskRoutes);

const url = 'mongodb+srv://rmbruno:25Novembro@cluster0.cklxw.mongodb.net/appservicos?retryWrites=true&w=majority';
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('mongodb conectado');
    
})

let colections = {};

app.get('/pedidos/:id', async (req,res, next) => {
    try{
        let result = await colections.appservicos.delivery_pedidos.find({loja_id: {'$in': req.params.id}}).toArray();
        res.send(result);
    }catch(e){
        res.status(500).send({'message1': e.message})
    }
})
//Executa assim que usuario se conectar
io.on('connection', socket => {
    console.log('Usuário: '+ socket.id);

    socket.on('chatmsg', data => {
        console.log(data)
        socket.to(data.room).emit('receive_msg',data.content)
    })
    socket.on('joinroom', room => {
        socket.join(room);
        console.log('Usuário Conectado ', room)
    })

    socket.on('disconnect', () => {
        console.log('Usuário desconectado')
    })
});

//const io = socket('/delivery', TaskRoutes);*/
