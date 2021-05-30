const mongoose = require('../config/db_conect');
const VLojasProdSchema = mongoose.Schema;

const vlojaprod = new VLojasProdSchema({
    idLoja: {type: String, required: true},
    nome:{type: String, required: true},
    descricao:{type: String, required: true},
    thumb:{type: String},
    imagens: [{type: String}],
    valor: {type: String},
    categoria: {type: String},
    subcategoria: {type: String},
    tipo: {type: String},
    ativo: {type: Boolean, default: true},
    grade: [{tam: {type: String}, cor: {type: String}, qtde: {type: String}}],
    favoritos: {type: Boolean, default: true},
    maisVendido: {type: Boolean, default: false}              
});

module.exports = mongoose.model('vlojas_produtos', vlojaprod)