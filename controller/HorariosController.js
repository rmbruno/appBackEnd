const { response } = require('express');
const HrDisponivel = require('../model/HorariosDisponiveisModel');

class HrControler {
    
    async createHora(req, res){
        const task = new HrDisponivel(req.body);
        await task
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async filterHora(req, res){
        await HrDisponivel.find({ id_prestador: {'$in': req.params.id}, dia: req.params.dia})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

}

module.exports = new HrControler();