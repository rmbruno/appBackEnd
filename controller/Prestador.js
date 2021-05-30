const { response } = require('express');
const PrestadorModel = require('../model/Prestador');
const HrModel = require('../model/HorariosDisponiveisModel');
const AvaliacaoModel = require('../model/AvaliacaoModel');

class PrestadorController {
    
    async createPrestador(req, res){
        const task = new PrestadorModel(req.body);
        await task
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async filtraPrestadorAll(req, res){
        await PrestadorModel.find({ativo: true})
        .sort({nota: 1})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filtraPrestadorCidade(req, res){
        await PrestadorModel.find({ativo: true, cidade: req.params.cidade})
        .sort({nome: 1})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filtraPrestadorCategoria(req, res){
        await PrestadorModel.find({ativo: true, categoria: req.params.categoria})
        .sort('nota')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filtraPrestadorCidadeCategoria(req, res){
        await PrestadorModel.find({ativo: true, cidade: req.params.cidade, categoria: req.params.categoria})
        .sort('nota')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filtraPrestadorCidadeDistinct(req, res){
        await PrestadorModel.find({ativo: true})
        .distinct('cidade')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filtraPrestadorCategoriaDistinct(req, res){
        await PrestadorModel.find({ativo: true, cidade: req.params.cidade})
        .distinct('categoria')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filtraPrestadorDetalhes(req, res){
        await PrestadorModel.find({_id: req.params.id})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    async filtraAvaliacao(req, res){
        await AvaliacaoModel.find({id_prestador: req.params.id})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    async filtraHorarios(req, res){
        await HrModel.find({id_prestador: req.params.id})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

}

module.exports = new PrestadorController();