const { response } = require('express');
const DeliveryProdutosModel = require('../model/delivery_lancheria_produtos');

class DeliveryProdLancherias {
    
    async createProdLancheria(req, res){
        const task = new DeliveryProdutosModel(req.body);
        await task
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async filtraProdLancheria(req, res){
        await DeliveryProdutosModel.find({ loja_id: {'$in': req.params.id}, categoria: {'$in': req.params.categoria}, ativo: 'true'})
        .sort('nome')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filtraProdLancheriaDetalhes(req, res){
        await DeliveryProdutosModel.find({ _id: {'$in': req.params.id}})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filtraProdCategoria(req, res){
        await DeliveryProdutosModel.find({ loja_id: {'$in': req.params.id}, ativo: 'true'})
        .distinct('categoria')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

}

module.exports = new DeliveryProdLancherias();