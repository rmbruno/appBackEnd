const { response } = require('express');
const AdicionalModel = require('../model/AdicionalModel');

class AdicionalController {
    
    async CreateAdicional(req, res){
        const task = new AdicionalModel(req.body);
        await task
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async filterAdicional(req, res){
        await AdicionalModel.find({ idProd: {'$in': req.params.idProd}})
        .sort('nome')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

}

module.exports = new AdicionalController();