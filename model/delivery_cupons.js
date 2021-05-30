const mongoose = require("mongoose");
const CuponsDelivery = mongoose.Schema;

const delivery_cupons = new CuponsDelivery({
    loja_id: {type: String, required: true},
    vencimento_data: {type: String, required: true},
    vencimento_hora: {type: String, required: true},
    nome: {type: String, required: true},
    valor: {type: String, required: true},
    tipo: {type: String, default: 'valor'}
});

module.exports = mongoose.model('delivery_cupons', delivery_cupons)