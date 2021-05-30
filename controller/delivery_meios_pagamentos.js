const { response } = require('express');
const DeliveryMP = require('../model/delivery_meios_pagamentos');

class DeliveryMeiosPagamentos {
    
    async createMPagamentos(req, res){
        const task = new DeliveryMP(req.body);
        await task
        .save()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filtraMPagamentos(req, res){
        await DeliveryMP.find({ loja_id: {'$in': req.params.id}})
        .sort({cartao: 1})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

}

module.exports = new DeliveryMeiosPagamentos();