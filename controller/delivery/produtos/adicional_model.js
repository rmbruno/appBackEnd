const mongoose = require("mongoose");
const CreateAdicional = mongoose.Schema;

const adicional = new CreateAdicional({
    idProd: {type: String, required: true},
    nome: {type: String, required: true},
    valorA: {type: Number, required: true},
    ativo: {type: Boolean, default: true},
    checked: {type: Boolean, default: false},
});

module.exports = mongoose.model('delivery_produtos_adicionais', adicional)