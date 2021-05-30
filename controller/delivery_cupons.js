const { response } = require('express');
const CuponsDelivery = require('../model/delivery_cupons');

class DeliveryCupons {
    
    async createCupons(req, res){
        const task = new CuponsDelivery(req.body);
        await task
        .save()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filtraCupons(req, res){
        await CuponsDelivery.find({ loja_id: req.params.id, nome: req.params.nome })
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

}

module.exports = new DeliveryCupons();