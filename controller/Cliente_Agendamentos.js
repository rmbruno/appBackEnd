const { response } = require('express');
const ClienteAgendamentos = require('../model/Cliente_Agendamentos');

class AgController {
    
    async createAg(req, res){
        const task = new ClienteAgendamentos(req.body);
        await task
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async filterAgPrestador(req, res){
        await AgModel.find({ id_prestador: {'$in': req.params.id}})
        .sort('data')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filterAgClientes(req, res){
        await AgModel.find({id_cliente: req.params.id, $or: [{status: req.params.st1}, {status: req.params.st2}]})
        .sort({data: -1})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filterAgClientesFinalizados(req, res){
        await AgModel.find({id_cliente: req.params.id, status: 'Finalizado'})
        .sort({data: -1})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filterAgClientesCancelados(req, res){
        await AgModel.find({id_cliente: req.params.id, status: 'Cancelado'})
        .sort({data: -1})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filterHoraServicos(req, res){
        await AgModel.find({ data: req.params.data, hora: req.params.hora, status: {'$ne': req.params.status}})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filterHoraServicosDt(req, res){
        await AgModel.find({ data: req.params.data, status: {'$ne': req.params.status}})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

}

module.exports = new AgController();