const { response } = require('express');
const carModel = require('../model/CarrosModel');

class carController {
    
    async createCarro(req, res){
        const task = new carModel(req.body);
        await task
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async filterCarroBusca(req, res){
        await carModel.find({ modelo: {'$regex': req.params.modelo}})
        .sort('descricao')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    
    async filterCarroCidadeBusca(req, res){
        await carModel.find()
        .distinct('cidade_concessionaria')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filterCarroModeloBusca(req, res){
        await carModel.find()
        .distinct('modelo')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filterCarroModeloBuscaCidade(req, res){
        await carModel.find({cidade_concessionaria: {'$in': req.params.cidade}})
        .distinct('modelo')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filterCarroModeloBuscaCidadeMarca(req, res){
        await carModel.find({cidade_concessionaria: {'$in': req.params.cidade}, marca: {'$in': req.params.marca}})
        .distinct('modelo')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    
    async filterCarroModeloBuscaMarca(req, res){
        await carModel.find({ marca: {'$in': req.params.marca}})
        .distinct('modelo')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filterCarroMarcaBusca(req, res){
        await carModel.find()
        .distinct('marca')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filterCarroMarcaBuscaCidade(req, res){
        await carModel.find({ cidade_concessionaria: {'$in': req.params.cidade}})
        .distinct('marca')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    //QUERY CARROS

    async filterCarrosSemCampos(req, res){
        await carModel.find()
        .sort('descricao')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    async filterCarrosCidade(req, res){
        await carModel.find({cidade_concessionaria: {'$in': req.params.cidade}})
        .sort('descricao')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    async filterCarrosMarca(req, res){
        await carModel.find({marca: {'$in': req.params.marca}})
        .sort('descricao')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    async filterCarrosModelo(req, res){
        await carModel.find({modelo: {'$in': req.params.modelo}})
        .sort('descricao')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    async filterCarrosMarcaModelo(req, res){
        await carModel.find({modelo: {'$in': req.params.modelo}, marca: {'$in': req.params.marca}})
        .sort('descricao')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    async filterCarrosCidadeModelo(req, res){
        await carModel.find({modelo: {'$in': req.params.modelo}, cidade_concessionaria: {'$in': req.params.cidade}})
        .sort('descricao')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    async filterCarrosCidadeMarca(req, res){
        await carModel.find({marca: {'$in': req.params.marca}, cidade_concessionaria: {'$in': req.params.cidade}})
        .sort('descricao')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    async filterCarrosTodosA(req, res){
        await carModel.find({cidade_concessionaria: {'$in': req.params.cidade}, marca: {'$in': req.params.marca}, modelo: {'$in': req.params.modelo}})
        .sort('descricao')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    //QUERY CARRO DETALHES
    async filterCarrosDetail(req, res){
        await carModel.find({_id: {'$in': req.params.id}})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

}

module.exports = new carController();