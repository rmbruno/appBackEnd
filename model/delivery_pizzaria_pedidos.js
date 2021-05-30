const mongoose = require("mongoose");
const PedidosPizzaria = mongoose.Schema;

const delivery_pizzarias_pedidos = new PedidosPizzaria({
    loja_id: {type: String, required: true},
    loja_nome: {type: String, required: true},
    cliente_id: {type: String, required: true},
    cliente_nome: {type: String, required: true},
    endereco_cliente: {type: String},
    status: {type: String, default: 'Aguardando confirmação da lancheria'},
    data: {type: String},
    hora: {type: String},
    forma_pagamento: {type: String},
    valor_pagamento: {type: String},
    troco_pagamento: {type: String},
    tipo_cartao: {type: String},
    desconto: {type: String},
    observacao: {type: String},
    valor_entrega: {type: String},
    entrega: {type: String},
    total: {type: String},
    produtos: [{sabores: {type: String}, borda: {type: String}, idProduto: {type: String}, nomeProduto: {type: String}, qtde: {type: Number}, preferencia: {type: String}, valorTotal: {type: String}}]
});

module.exports = mongoose.model('delivery_pizzarias_pedidos', delivery_pizzarias_pedidos)