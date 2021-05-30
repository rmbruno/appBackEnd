const mongoose = require("mongoose");
const Avaliacoes_Schema = mongoose.Schema;

const avaliacoes = new Avaliacoes_Schema({
    usuario: {type: String, required: true},
    nome: {type: String, required: true},
    logo: {type: String, required: true},
    avaliacao: {type: Number, required: true},
    email: {type: String, required: true},
    cnpj: {type: String, required: true},
    senha: {type: String, required: true},
    endereco: {type: String, required: true},
    bairro: {type: String, required: true},
    cidade: {type: String, required: true},
    estado: {type: String, required: true},
    telefone: {type: String, required: true},
    valor_entrega: {type: Number},
    tempo_entrega: {type: String, required: true},
    vencimento: {type: String},
    ativo: {type: Boolean, default: true},
    created: {type: Date, default: Date.now()},
    categoria: {type: String, required: true},
    aberto: {type: Boolean, default: false},
    tempo_entrega: {type: String, required: true},
    valor_entrega: {type: String, required: true},
    promocao: {type: Boolean, default: false},
    permite_buscar: {type: Boolean, default: true},
    entrega_gratis: {type: Boolean, default: false},
    entrega_gratis_valor: {type: Number, default: 0},
    hora_abertura: {type: String},
    dia_folga: {type: String},
});

module.exports = mongoose.model('delivery_lojas', avaliacoes);