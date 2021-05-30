const mongoose = require('../config/db_conect');
const ImovSchema = mongoose.Schema;

const imoveis = new ImovSchema({
    imob_id: {type: String, required: true},
    data_adc: {type: Date},
    descricao: {type: String, required: true},
    thumb: {type: String, required: true},
    cidade: {type: String, required: true},
    estado: {type: String, required: true},
    endereco: {type: String, required: true},
    numero: {type: String, required: true},
    bairro: {type: String, required: true},
    imagem_slide: {img: [{type: String}]},
    valor: {type: String, required: true},
    terreno: {type: String, required: true},
    quarto: {type: String, required: true},
    sala: {type: String},
    banheiro: {type: String},
    cozinha: {type: String},
    garagem: {type: String},
    churrasqueira: {type: Boolean, default: false},
    lareira: {type: Boolean, default: false},
    ativo: {type: Boolean, default: true},
    tipo: {type: String, required: true},
    tipo_ca: {type: String, required: true},
    ref: {type: String, required: true},
    condominio: {type: String, default: ''},
    iptu: {type: String, default: ''},
});

module.exports = mongoose.model('imobiliarias_imoveis', imoveis)