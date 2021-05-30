const mongoose = require('../config/db_conect');
const VLojasSchema = mongoose.Schema;

const vlojas = new VLojasSchema({
    nome: {type: String, required: true},
    cnpj: {type: String, required: true},
    usuario: {type: String, required: true},
    senha: {type: String, required: true},
    email: {type: String, required: true},
    estado: {type: String, required: true},
    cidade: {type: String, required: true},
    endereco: {type: String, required: true},
    numero: {type: String, required: true},
    bairro: {type: String, required: true},
    imagem: {type: String, required: true},
    tel1: {type: String, required: true},
    tel2: {type: String},
    atendimento1: {type: String, required: true},
    atendimento2: {type: String, required: true},
    ativo: {type: Boolean, default: true},
    aberto: {type: Boolean, default: true},              
});

module.exports = mongoose.model('vestuario_lojas', vlojas)