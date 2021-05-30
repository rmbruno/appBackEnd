const mongoose = require('../config/db_conect');
const UserScheema = mongoose.Schema;

const servicos_prestador = new UserScheema({
    id_prestador: {type: String, required: true},
    nome_servico: {type: String, required: true},
    valor_servico: {type: Number},
});

module.exports = mongoose.model('prestador_srvc', servicos_prestador)