const mongoose = require('../config/db_conect');
const ImobSchema = mongoose.Schema;

const imobilarias = new ImobSchema({
    nome: {type: String, required: true},
    cnpj: {type: String, required: true},
    creci: {type: String, required: true},
    usuario: {type: String, required: true},
    senha: {type: String, required: true},
    estado: {type: String, required: true},
    cidade: {type: String, required: true},
    endereco: {type: String, required: true},
    numero: {type: String, required: true},
    bairro: {type: String, required: true},
    atendimento1: {type: String, required: true},
    atendimento2: {type: String},
    ativo: {type: Boolean, default: false},
    aberto: {type: Boolean, default: false},
    tel1: {type: String},
    tel2: {type: String},
    whatsapp: {type: String},
    imagem: {type: String, required: true}
});

module.exports = mongoose.model('imobiliarias', imobilarias)