const { response } = require('express');
const srvcModel = require('../model/ServicosModel');

class SrvcController {
    
    async createServico(req, res){
        const task = new srvcModel(req.body);
        await task
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async updateUsuario(req, res){
        await AgModel.findByIdAndUpdate(
            { _id: req.params._id},
            {'$set': {'endereco': req.params.endereco, 'bairro': req.params.bairro, 'cidade': req.params.cidade, 'estado': req.params.estado}},
            )
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filterServico(req, res){
        await srvcModel.find({ id_prestador: {'$in': req.params.id}})
        .sort('nome')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filterPrestador(req, res){
        await UserModel.find({ cidade: {'$in': req.params.cidade}, 'tipo': req.params.tipo})
        .sort('nome')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }


    async filterPrestadorCat(req, res){
        await UserModel.find({ cidade: {'$in': req.params.cidade}, 'tipo': req.params.tipo, 'tipo_servico': req.params.tipo_servico})
        .sort('nome')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filterPrestadorN(req, res){
        await UserModel.find({ cidade: {'$in': req.params.cidade}, 'tipo': req.params.tipo, nome: {'$regex': req.params.nome}})
        .sort('nome')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filterPrestadorId(req, res){
        await UserModel.find({ _id: {'$in': req.params._id}})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

}

module.exports = new SrvcController();