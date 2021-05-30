const mongoose = require('../config/db_conect');
const MsgSchema = mongoose.Schema;

const mensagens = new MsgSchema({
    idSala: {type: String, required: true},
    idAtivo: {type: String, required: true},
    idPassivo: {type: String, required: true},
    nomePassivo: {type: String, required: true},
    mensagem: {type: String, required: true},
    idparam: {type: String},
    data: {type: Date}
});

module.exports = mongoose.model('chat', mensagens)