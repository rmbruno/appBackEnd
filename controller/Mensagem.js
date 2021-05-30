const { response } = require('express');
const MSgModel = require('../model/Mensagem');

class MsgController {
    
    async createMsg(req, res){
        const task = new MSgModel(req.body);
        await task
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async filtraMsg(req, res){
        await MSgModel.find({ idSala: {'$in': req.params.idA}})
        .sort('data')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filtraSala(req, res){
        await MSgModel.find({ idAtivo: {'$in': req.params.idA}})
        .distinct('idSala')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

}

module.exports = new MsgController();