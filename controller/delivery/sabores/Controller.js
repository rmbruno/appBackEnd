const { response } = require('express');
const DeliveryPizzariaSab = require('./Model');

class DeliveryPizzariaSabores {
    
    async createSabor(req, res){
        const task = new DeliveryPizzariaSab(req.body);
        await task
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async filtraSaboresCategoria(req, res){
        await DeliveryPizzariaSab.find({ loja_id: {'$in': req.params.id}, categoria: {'$in': req.params.categoria}, ativo: 'true'})
        .sort('nome')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async FiltraSaboresAll(req, res){
        await DeliveryPizzariaSab.find({ loja_id: {'$in': req.params.id}})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filtraSaboresCategoriaDistinct(req, res){
        await DeliveryPizzariaSab.find({ loja_id: {'$in': req.params.id}, ativo: 'true'})
        .distinct('categoria')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

}

module.exports = new DeliveryPizzariaSabores();