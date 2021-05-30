const mongoose = require('../config/db_conect');
const prodAdicionaisSchema = mongoose.Schema;

const delivery_lancheria_produtos_adicionais = new prodAdicionaisSchema({
    produto_id: {type: String, required: true},
    ativo: {type: Boolean, default: true},
    checked: {type: Boolean, default: false},
    promocao: {type: Boolean, default: false},
    nome: {type: String, required: true},
    valor: {type: String, required: true},
    valor_promocao: {type: String}
});

module.exports = mongoose.model('delivery_lancheria_produtos_adicionais', delivery_lancheria_produtos_adicionais)