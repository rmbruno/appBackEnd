const mongoose = require("mongoose");
const EnderecosClientes = mongoose.Schema;

const endereco_usuarios = new EnderecosClientes({
    usuario_id: {type: String, required: true},
    titulo: {type: String, required: true},
    estado: {type: String, required: true},
    cidade: {type: String, required: true},
    endereco: {type: String, required: true},
    numero: {type: String, required: true},
    bairro: {type: String, required: true}
});

module.exports = mongoose.model('usuarios_enderecos', endereco_usuarios)