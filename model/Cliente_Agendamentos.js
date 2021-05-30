const mongoose = require('../config/db_conect');
const ClienteAg = mongoose.Schema;

const cliente_agendamentos = new ClienteAg({
    id_cliente: {type: String, required: true},
    nome_cliente: {type: String, required: true},
    categoria: {type: String, required: true},
    sub_categoria: {type: String, required: true},
    tipo: {type: String},
    checados: [{type: String}],
    detalhe_servico: {type: String, required: true},
    detalhe_2: {type: String, required: true},
    periodo: {type: String},
    status: {type: String, default: 'Aguardando pré-orçamentos'},
    data: {type: String},
    hora: {type: String},
    ativo: {type: Boolean, default: true}
});

module.exports = mongoose.model('cliente_agendamentos', cliente_agendamentos)