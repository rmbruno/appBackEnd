const mongoose = require('../config/db_conect');
const FavSchema = mongoose.Schema;

const favoritos = new FavSchema({
    idfav: {type: String, required: true},
    nomefav: {type: String, required: true},
    imgfav: {type: String, required: true},
    tipofav: {type: String, required: true},
    tiposfav: {type: String},
    idcli: {type: String, required: true},
});

module.exports = mongoose.model('favoritos', favoritos);