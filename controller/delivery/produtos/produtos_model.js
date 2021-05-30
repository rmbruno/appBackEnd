const mongoose = require("mongoose");
const prodSchema = mongoose.Schema;

const delivery_produtos = new prodSchema({
    loja_id: {type: String, required: true},
    ativo: {type: Boolean, default: true},
    promocao: {type: Boolean, default: false},
    nome: {type: String, required: true},
    detalhes: {type: String, required: true},
    categoria: {type: String, required: true},
    thumb: {type: String, required: true},
    valor: {type: Number, required: true},
    valor_promocao: {type: Number},
    qtde_e: {type: Number},
    ativa_estoque: {type: Boolean},
    fatias: {type: Number},
    cm: {type: Number},
    sabores_qtde: {type: Number},
    opcao: [{nome: {type: String}, ativo: {type: Boolean, default: true}}],
    sabores: [{nome: {type: String}, valorS: {type: Number}, ativo: {type: Boolean, default: true}}],
    adicionais: [{nome: {type: String, required: true}, valorA: {type: Number, required: true}, ativo: {type: Boolean, default: true}, checked: {type: Boolean, default: false}}],
    paes: [{nome: {type: String, required: true}, detalhes: {type: String}, valorP: {type: Number, default: 0}, ativo: {type: Boolean, default: true}}]
});

module.exports = mongoose.model('delivery_produtos', delivery_produtos)