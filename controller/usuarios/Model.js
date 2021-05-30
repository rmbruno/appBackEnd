const mongoose = require("mongoose");
const UserScheema = mongoose.Schema;

const usuarios = new UserScheema({
    nome: {type: String, required: true},
    usuario: {type: String},
    email: {type: String, required: true},
    senha: {type: String, required: true},
    telefone: {type: String, required: true},
    estado: {type: String},
    cidade: {type: String},
    bairro: {type: String},
    endereco: {type: String},
    numero: {type: String},
    tipo: {type: String},
    tipo_servico: {type: String}, 
    imagem: {type: String},
    rating: {type: String, default: '0'},
    ativo: {type: Boolean, default: true},
    tutoServicos: {type: Boolean, default: false},
});

module.exports = mongoose.model('usuarios', usuarios);