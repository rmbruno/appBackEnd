const mongoose = require('../config/db_conect');
const PedidosLancheria = mongoose.Schema;

const delivery_lancheria_pedidos = new PedidosLancheria({
    loja_id: {type: String, required: true},
    loja_nome: {type: String, required: true},
    cliente_id: {type: String, required: true},
    cliente_nome: {type: String, required: true},
    endereco_cliente: {type: String},
    status: {type: String, default: 'Aguardando confirmação do pedido'},
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
    produtos: [{adicionais: {type: String}, sabores: {type: String}, borda: {type: String}, idProduto: {type: String}, nomeProduto: {type: String}, qtde: {type: Number}, preferencia: {type: String}, valorTotal: {type: String}}]
});

module.exports = mongoose.model('delivery_lancheria_pedidos', delivery_lancheria_pedidos)