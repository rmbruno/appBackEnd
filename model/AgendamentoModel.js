const mongoose = require('../config/db_conect');
const UserScheema = mongoose.Schema;

const prestador_agendamento = new UserScheema({
    id_prestador: {type: String, required: true},
    nome_prestador: {type: String, required: true},
    catg_prestador: {type: String, required: true},
    nome_cliente: {type: String, required: true},
    id_cliente: {type: String, required: true},
    tel_cliente: {type: String, required: true},
    detalhe_servico: {type: String, required: true},
    data1: {type: Date},
    data: {type: String, required: true},
    hora: {type: String, required: true},
    status: {type: String},
    ativo: {type: Boolean, default: true},
});

module.exports = mongoose.model('prestador_agendamentos', prestador_agendamento)