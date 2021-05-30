/*const mongoose = require('mongoose');

const url = 'mongodb+srv://rmbruno:25Novembro@cluster0.cklxw.mongodb.net/appservicos?retryWrites=true&w=majority';
//const url = 'mongodb://localhost:27017/todo';

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = mongoose;*/
module.exports = {
    db: {
      uri: "mongodb+srv://rmbruno:25Novembro@cluster0.cklxw.mongodb.net/appservicos?retryWrites=true&w=majority", //place the uri of your mongoDB database here
    },
};  