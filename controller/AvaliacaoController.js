const { response } = require('express');
const Avaliacao = require('../model/AvaliacaoModel');

class AvController {
    
    async createAv(req, res){
        const task = new Avaliacao(req.body);
        await task
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async FilterAvPrestador(req, res){
        await Avaliacao.find({ id_prestador: {'$in': req.params.id}})
        .sort('data')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    
}

module.exports = new AvController();