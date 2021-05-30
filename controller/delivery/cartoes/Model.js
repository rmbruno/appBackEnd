const mongoose = require("mongoose");
const MPDelivery = mongoose.Schema;

const meio_pagamentos_delivery = new MPDelivery({
    loja_id: {type: String, required: true},
    cartao: {type: String, required: true},
});

module.exports = mongoose.model('delivery_meios_pagamentos', meio_pagamentos_delivery)