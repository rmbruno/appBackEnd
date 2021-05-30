const mongoose = require("mongoose");
const CreateProduto = mongoose.Schema;

const produtos = new CreateProduto({
    idloja: {type: String, required: true},
    nome: {type: String, required: true},
    imagem: {type: String, required: true},
    descricao: {type: String, required: true},
    valorI: {type: Number, required: true},
    categoria: {type: String, required: true},
    ativo: {type: Boolean, default: true},
});

module.exports = mongoose.model('CreatePodutos', produtos)