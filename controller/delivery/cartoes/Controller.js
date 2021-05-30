const { response } = require('express');
const DeliveryMP = require('./Model');

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
    async updateMPagamentos(req, res){
        await DeliveryMP.findByIdAndUpdate({ _id: req.params.id}, {'$set': req.body})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    async deleteMPagamentos(req, res){
        await DeliveryMP.findByIdAndDelete({ _id: req.params.id})
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