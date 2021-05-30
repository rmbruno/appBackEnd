const mongoose = require('../config/db_conect');
const Schema = mongoose.Schema;

const CreateLoja = new Schema({
    usuario: {type: String, required: true},
    nome: {type: String, required: true},
    logo: {type: String, required: true},
    curtidas: {type: Number, required: true},
    cnpj: {type: String, required: true},
    senha: {type: String, required: true},
    endereco: {type: String, required: true},
    bairro: {type: String, required: true},
    cidade: {type: String, required: true},
    estado: {type: String, required: true},
    telefone: {type: String, required: true},
    valor_entrega: {type: Number},
    tempo_entrega: {type: String, required: true},
    vencimento: {type: Date},
    ativo: {type: Boolean, default: true},
    created: {type: Date, default: Date.now()},
});

module.exports = mongoose.model('lojasdelivery', CreateLoja)