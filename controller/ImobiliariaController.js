const { response } = require('express');
const ImobModel = require('../model/ImobiliariaModel');

class ImobController {
    
    async createImob(req, res){
        const task = new ImobModel(req.body);
        await task
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async filterCidadeDistinct(req, res){
        await ImobModel.find({ ativo: {'$in': req.params.ativo}})
        .distinct('cidade')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filterImobAll(req, res){
        await ImobModel.find({ ativo: {'$in': req.params.ativo}})
        .sort('nome')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filterImobCidade(req, res){
        await ImobModel.find({ ativo: {'$in': req.params.ativo}, cidade: {'$in': req.params.cidade}})
        .sort('nome')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filterImobDetail(req, res){
        await ImobModel.find({ _id: {'$in': req.params.id}})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

}

module.exports = new ImobController();