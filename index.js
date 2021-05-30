const express = require('express'),
mongoose = require("mongoose");
//const server = require('http').createServer(app); 
const cors = require('cors');


// Use env port or default
const port = process.env.PORT || 3001;

//establish socket.io connection
const app = express();
app.use(express.json());
app.use(cors());
app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Acces-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Acces-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', true);
    next();
})
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: '*',
    }
});

io.of("/api/socket").on("connection", (socket) => {
  console.log("socket.io: User connected: ", socket.id);

  socket.on("disconnect", () => {
    console.log("socket.io: User disconnected: ", socket.id);
  });
});

//start the server
server.listen(port, () => console.log(`Server now running on port ${port}!`));

const TaskRoutes = require('./routes/TaskRoutes');
const { response } = require('express');

app.use('/delivery', TaskRoutes);

//connect to db
mongoose.connect(process.env.DB_URI || require("./config/db_conect").db.uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  
  const connection = mongoose.connection;
  
  connection.once("open", () => {
    console.log("MongoDB database connected");
  
    console.log("Setting change streams");
    const thoughtChangeStream = connection.collection("delivery_pedidos").watch();
    
    thoughtChangeStream.on("change", (change) => {
      console.log('conectado')
      switch (change.operationType) {
        case "insert":
          const pedido = {
            _id: change.fullDocument._id,
            loja_id: change.fullDocument.loja_id,
            loja_nome: change.fullDocument.loja_nome,
            cliente_id: change.fullDocument.cliente_id,
            cliente_nome: change.fullDocument.cliente_nome,
            endereco_cliente: change.fullDocument.endereco_cliente,
            status: change.fullDocument.status,
            data: change.fullDocument.data,
            hora: change.fullDocument.hora,
            forma_pagamento: change.fullDocument.forma_pagamento,
            valor_pagamento: change.fullDocument.valor_pagamento,
            troco_pagamento: change.fullDocument.troco_pagamento,
            tipo_cartao: change.fullDocument.tipo_cartao,
            desconto: change.fullDocument.desconto,
            observacao: change.fullDocument.observacao,
            valor_entrega: change.fullDocument.valor_entrega,
            entrega: change.fullDocument.entrega,
            total: change.fullDocument.total,
          };
          console.log('insert')
          io.of("/api/socket").emit("novoPedido", pedido);
        break;
  
        case "delete":
            console.log('delete')
            io.of("/api/socket").emit("deletePedido", change.documentKey._id);
        break;

        case "update":
          console.log('update')
          io.of("/api/socket").emit("atualizaPedido", change.documentKey._id);
        break;
      }
    });
  });

//const io = socket('/delivery', TaskRoutes);
