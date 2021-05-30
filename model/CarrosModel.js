const mongoose = require('../config/db_conect');
const CarSchema = mongoose.Schema;

const carros = new CarSchema({
    id_concessionaria: {type: String, required: true},
    nome_concessionaria: {type: String, required: true},
    cidade_concessionaria: {type: String, required: true},
    descricao: {type: String, required: true},
    modelo: {type: String, required: true},
    marca: {type: String, required: true},
    estado: {type: String, required: true},
    ano: {type: String, required: true},
    cor: {type: String, required: true},
    km: {type: String, required: true},
    detalhes: {det: [{type: String, required: true}]},
    unico_dono: {type: Boolean, default: true},
    valor: {type: String, required: true},
    tipo: {type: String, required: true},
    metodo_compra: {type: String, required: true},
    imagem_principal: {type: String, required: true},
    imagem_slide: {img: [{type: String}]},
    status: {type: Boolean, default: true}
});

module.exports = mongoose.model('conc_carros', carros)