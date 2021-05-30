const { response } = require('express');
const DeliveryLojas = require('./lojas_model');

class LojasDelivery {

    async createLoja(req, res){
        const task = new DeliveryLojas(req.body);
        await task
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }
    async updateInfo(req, res){
        await DeliveryLojas.findByIdAndUpdate(
            { id: req.params.id},
            {'$set': req.body}
            )
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    async updateAberto(req, res){
        await DeliveryLojas.findByIdAndUpdate(
            { _id: req.params.id},
            {'$set': req.body}
            )
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    async updateBusca(req, res){
        await DeliveryLojas.findByIdAndUpdate(
            { _id: req.params.id},
            {'$set': req.body}
            )
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filterDeliveryLogin(req, res){
        await DeliveryLojas.find({ usuario: {'$in': req.params.usuario}, senha: req.params.senha, ativo: true})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    
    async filterLoja(req, res){
        await DeliveryLojas.find({ ativo: 'true', cidade: {'$in': req.params.cidade}})
        .sort('nome')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    
    async filterLojaDetalhes(req, res){
        await DeliveryLojas.find({ _id: {'$in': req.params.id}})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    
    async filterLojaCategoria(req, res){
        await DeliveryLojas.find({ ativo: 'true', cidade: req.params.cidade, categoria: req.params.cat})
        .sort('nome')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

}

module.exports = new LojasDelivery();