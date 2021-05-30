const mongoose = require('../config/db_conect');
const UserScheema = mongoose.Schema;

const prestador_horarios = new UserScheema({
    id_prestador: {type: String, required: true},
    horarios: {hr: [{type: String, required: true}]},
    dia: {type: String, required: true}
});

module.exports = mongoose.model('prestador_hr', prestador_horarios)