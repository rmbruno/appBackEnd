const mongoose = require("mongoose");
const Avaliacoes_Schema = mongoose.Schema;

const avaliacoes = new Avaliacoes_Schema({
    pedido_id: {type: String, required: true},
    loja_id: {type: String, required: true},
    loja_nome: {type: String, required: true},
    cliente_id: {type: String, required: true},
    cliente_nome: {type: String, required: true},
    data: {type: String, required: true},
    observacao: {type: String, required: true},
    nota: {type: Number, required: true},
});

module.exports = mongoose.model('delivery_avaliacoes', avaliacoes);