const { response } = require('express');
const concModel = require('../model/ConcessionariaModel');
const carModel = require('../model/CarrosModel');

class concController {
    
    async createConc(req, res){
        const task = new concModel(req.body);
        await task
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async filterConcAll(req, res){
        await concModel.find({ativo: {'$in': req.params.ativo}})
        .sort('nome')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filterConcCidade(req, res){
        await concModel.find({ativo: {'$in': req.params.ativo}, cidade: {'$in': req.params.cidade}})
        .sort('nome')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filterDetalhes(req, res){
        await concModel.find({_id: {'$in': req.params.id}})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    
    async queryCarroConc(req, res){
        const {page = 1, limit = 20} = req.query;

        await carModel.find({status: {'$in': req.params.status}, id_concessionaria: {'$in': req.params.id}})
        .limit(limit*1).skip((page-1)*limit)
        .sort('descricao')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    async queryCarroConcMarca(req, res){
        await carModel.find({status: {'$in': req.params.status}, id_concessionaria: {'$in': req.params.id}, marca: {'$in': req.params.marca}})
        .sort('descricao')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    async queryCarroConcModelo(req, res){
        await carModel.find({status: {'$in': req.params.status}, id_concessionaria: {'$in': req.params.id}, modelo: {'$in': req.params.modelo}})
        .sort('descricao')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    async queryCarroConcAno(req, res){
        await carModel.find({status: {'$in': req.params.status}, id_concessionaria: {'$in': req.params.id}, ano: {'$in': req.params.ano}})
        .sort('descricao')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    async queryCarroConcMM(req, res){
        await carModel.find({status: {'$in': req.params.status}, id_concessionaria: {'$in': req.params.id}, marca: {'$in': req.params.marca}, modelo: {'$in': req.params.modelo}})
        .sort('descricao')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    async queryCarroConcMA(req, res){
        await carModel.find({status: {'$in': req.params.status}, id_concessionaria: {'$in': req.params.id}, marca: {'$in': req.params.marca}, ano: {'$in': req.params.ano}})
        .sort('descricao')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    async queryCarroConcMoA(req, res){
        await carModel.find({status: {'$in': req.params.status}, id_concessionaria: {'$in': req.params.id}, modelo: {'$in': req.params.modelo}, ano: {'$in': req.params.ano}})
        .sort('descricao')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    async queryCarroConcTodos(req, res){
        await carModel.find({status: {'$in': req.params.status}, id_concessionaria: {'$in': req.params.id}, marca: {'$in': req.params.marca}, modelo: {'$in': req.params.modelo}, ano: {'$in': req.params.ano}})
        .sort('descricao')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filterCarroConcMarcas(req, res){
        await carModel.find({status: {'$in': req.params.status}, id_concessionaria: {'$in': req.params.id}})
        .distinct('marca')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filterCarroConcModeloMarcas(req, res){
        await carModel.find({status: {'$in': req.params.status}, id_concessionaria: {'$in': req.params.id}, marca: {'$in': req.params.marca}})
        .distinct('modelo')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    async filterCarroConcModelos(req, res){
        await carModel.find({status: {'$in': req.params.status}, id_concessionaria: {'$in': req.params.id}})
        .distinct('modelo')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    
    async filterCarroConcAnos(req, res){
        await carModel.find({status: {'$in': req.params.status}, id_concessionaria: {'$in': req.params.id}})
        .distinct('ano')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    async filterCarroConcAnosMarca(req, res){
        await carModel.find({status: {'$in': req.params.status}, id_concessionaria: {'$in': req.params.id}, marca: {'$in': req.params.marca}})
        .distinct('ano')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    async filterCarroConcAnosModelo(req, res){
        await carModel.find({status: {'$in': req.params.status}, id_concessionaria: {'$in': req.params.id}, modelo: {'$in': req.params.modelo}})
        .distinct('ano')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    async filterCarroConcAnosTodos(req, res){
        await carModel.find({status: {'$in': req.params.status}, id_concessionaria: {'$in': req.params.id}, modelo: {'$in': req.params.modelo}, marca: {'$in': req.params.marca}})
        .distinct('ano')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

}

module.exports = new concController();