const mongoose = require('../config/db_conect');
const CreateAdicional = mongoose.Schema;

const adicional = new CreateAdicional({
    idProd: {type: String, required: true},
    nome: {type: String, required: true},
    valorA: {type: Number, required: true},
    ativo: {type: Boolean, default: true},
    checked: {type: Boolean, default: false},
});

module.exports = mongoose.model('CreateAdicional', adicional)