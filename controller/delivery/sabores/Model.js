const mongoose = require('mongoose');
const prodSchema = mongoose.Schema;

const delivery_pizzaria_sabores = new prodSchema({
    loja_id: {type: String, required: true},
    ativo: {type: Boolean, default: true},
    categoria: {type: String, required: true},
    sub_categoria: {type: String, required: true},
    nome: {type: String, required: true},
    detalhes: {type: String, required: true},
    acrescimo: {type: String, required: true}
});

module.exports = mongoose.model('delivery_pizzaria_sabores', delivery_pizzaria_sabores)