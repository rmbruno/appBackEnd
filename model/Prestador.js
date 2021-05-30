const mongoose = require('../config/db_conect');
const PrestadorSchema = mongoose.Schema;

const prestador = new PrestadorSchema({
    nome: {type: String, required: true},
    email: {type: String, required: true},
    senha: {type: String, required: true},
    imagem: {type: String, default: 'https://www.usenabis.store/imageDev/user.png'},
    categoria: {type: String, required: true},
    mp: [{type: String, required: true}],
    tipo: {type: String, required: true},
    documento: {type: String, required: true},
    cidade: {type: String, required: true},
    estado: {type: String, required: true},
    endereco: {type: String, required: true},
    numero: {type: String, required: true},
    bairro: {type: String, required: true},
    tel: {type: String, required: true},
    ativo: {type: Boolean, default: true},
    nota: {type: String, default: '0'}
});

module.exports = mongoose.model('prestador', prestador)