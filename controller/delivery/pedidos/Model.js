const mongoose = require("mongoose");
const PedidosLancheria = mongoose.Schema;

const delivery_pedidos = new PedidosLancheria({
    loja_id: {type: String, required: true},
    loja_nome: {type: String, required: true},
    cliente_id: {type: String, required: true},
    cliente_nome: {type: String, required: true},
    endereco_cliente: {type: String},
    status: {type: String, default: 'Aguardando confirmação do pedido'},
    data: {type: String},
    mes: {type: String},
    ano: {type: String},
    hora: {type: String},
    forma_pagamento: {type: String},
    valor_pagamento: {type: Number, default: 0},
    troco_pagamento: {type: Number, default: 0},
    tipo_cartao: {type: String},
    desconto: {type: Number, default: 0},
    observacao: {type: String},
    valor_entrega: {type: Number, default: 0},
    entrega: {type: Boolean, default: false},
    total: {type: Number},
    produtos: [{adicionais: {type: String}, opcao: {type: String}, pao: {type: String}, sabores: {type: String}, borda: {type: String}, idProduto: {type: String}, nomeProduto: {type: String}, qtde: {type: Number}, preferencia: {type: String}, valorTotal: {type: Number}}]
});

module.exports = mongoose.model('delivery_pedidos', delivery_pedidos);