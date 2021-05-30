const { response } = require('express');
const DeliveryAdicionaisModel = require('../model/delivery_lancheria_produtos_adicionais');

class DeliveryProdLancherias {
    
    async createAdicionalProdLancheria(req, res){
        const task = new DeliveryAdicionaisModel(req.body);
        await task
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async filtraAdicionaisProdLancheria(req, res){
        await DeliveryAdicionaisModel.find({ produto_id: {'$in': req.params.id}, ativo: 'true'})
        .sort('nome')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }


}

module.exports = new DeliveryProdLancherias();