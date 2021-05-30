const mongoose = require('../config/db_conect');
const ConcSchema = mongoose.Schema;

const concessionaria = new ConcSchema({
    nome: {type: String, required: true},
    imagem: {type: String, required: true},
    usuario: {type: String, required: true},
    senha: {type: String, required: true},
    cnpj: {type: String, required: true},
    cidade: {type: String, required: true},
    estado: {type: String, required: true},
    endereco: {type: String, required: true},
    numero: {type: String, required: true},
    telefone: {type: String, required: true},
    telefone2: {type: String},
    whatsapp: {type: String},
    facebook: {type: String},
    instagram: {type: String},
    ativo: {type: Boolean, default: true}
});

module.exports = mongoose.model('concessionarias', concessionaria)