const mongoose = require('../config/db_conect');
const prodSchema = mongoose.Schema;

const delivery_lancheria_produtos = new prodSchema({
    loja_id: {type: String, required: true},
    ativo: {type: Boolean, default: true},
    promocao: {type: Boolean, default: false},
    nome: {type: String, required: true},
    detalhes: {type: String, required: true},
    categoria: {type: String, required: true},
    thumb: {type: String, required: true},
    valor: {type: String, required: true},
    valor_promocao: {type: String},
    rating: {type: String, default: "0"}
});

module.exports = mongoose.model('delivery_lancheria_produtos', delivery_lancheria_produtos)