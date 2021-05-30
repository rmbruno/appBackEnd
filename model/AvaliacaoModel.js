const mongoose = require('../config/db_conect');
const UserScheema = mongoose.Schema;

const prestador_avaliacao = new UserScheema({
    id_prestador: {type: String, required: true},
    nome_cliente: {type: String, required: true},
    data: {type: String, required: true},
    nota: {type: String, required: true},
    descricao: {type: String, required: true},
    tipo_servico: {type: String, required: true}
});

module.exports = mongoose.model('prestador_av', prestador_avaliacao)