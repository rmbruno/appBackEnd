const { response } = require('express');
const DeliveryPizzariaProd = require('../model/delivery_pizzaria_produtos');

class DeliveryPizzariaProdutos {
    
    async createProdPizzaria(req, res){
        const task = new DeliveryPizzariaProd(req.body);
        await task
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async filtraProd(req, res){
        await DeliveryPizzariaProd.find({ loja_id: {'$in': req.params.id}, categoria: {'$in': req.params.categoria}, ativo: 'true'})
        .sort('nome')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filtraProdDetalhes(req, res){
        await DeliveryPizzariaProd.find({ _id: {'$in': req.params.id}})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filtraProdCategoria(req, res){
        await DeliveryPizzariaProd.find({ loja_id: {'$in': req.params.id}, ativo: 'true'})
        .distinct('categoria')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

}

module.exports = new DeliveryPizzariaProdutos();