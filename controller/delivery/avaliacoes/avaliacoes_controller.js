const { response } = require('express');
const Avaliacoes = require('./avaliacoes_model');

class DeliveryAvaliacoes {
    
    async createAvaliacoes(req, res){
        const task = new Avaliacoes(req.body);
        await task
        .save()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filtraAvLojaAll(req, res){
        await Avaliacoes.find({ loja_id: {'$in': req.params.id}})
        .sort({data: -1})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filtraAvLojaLimit(req, res){
        await Avaliacoes.find({ loja_id: {'$in': req.params.id}})
        .sort({data: -1})
        .limit(4)
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

}

module.exports = new DeliveryAvaliacoes();