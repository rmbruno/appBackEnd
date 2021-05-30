const { response } = require('express');
const ImovModel = require('../model/ImoveisModel');

class ImovController {
    
    async createImov(req, res){
        const task = new ImovModel(req.body);
        await task
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    //TIPO ALUGUEL OU VENDA
    async filterImovTipoAll(req, res){
        await ImovModel.find({ ativo: {'$in': req.params.ativo}, tipo: {'$in': req.params.tipo}})
        .distinct('cidade')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filterImovDetail(req, res){
        await ImovModel.find({ativo: {'$in': req.params.ativo}, _id: {'$in': req.params.id}})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filterImovImobiliaria(req, res){        
        const {page = 1, limit = 150} = req.query;
    
        await ImovModel.find({ativo: {'$in': req.params.ativo}, imob_id: {'$in': req.params.id}})
        .limit(limit*1).skip((page-1)*limit)
        .sort('data_adc')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    async filterImovImobiliaria2(req, res){        
        const {page = 1, limit = 150} = req.query;
    
        await ImovModel.find({ativo: {'$in': req.params.ativo}, imob_id: {'$in': req.params.id}, tipo: {'$in': req.params.tipo}})
        .limit(limit*1).skip((page-1)*limit)
        .sort('data_adc')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    
    async filterImovBairroDistinct(req, res){
        await ImovModel.find({ ativo: {'$in': req.params.ativo}, imob_id: {'$in': req.params.id}, tipo: {'$in': req.params.tipo}})
        .distinct('bairro')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    async filterImovBairro(req, res){
        await ImovModel.find({ativo: {'$in': req.params.ativo}, imob_id: {'$in': req.params.id}, bairro: {'$in': req.params.bairro}, tipo: {'$in': req.params.tipo}})
        .sort('data_adc')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    //FILTRAR IMOVEIS
    
    async filterImovFilter(req, res){
        await ImovModel.find({ativo: {'$in': req.params.ativo}, cidade: {'$in': req.params.cidade}, bairro: {'$in': req.params.bairro}, tipo: {'$in': req.params.tipo}})
        .sort('data_adc')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    async filterCidadeImoveis(req, res){
        await ImovModel.find({ativo: {'$in': req.params.ativo}, tipo: {'$in': req.params.tipo}})
        .distinct('cidade')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    async filterBairroImoveis(req, res){
        await ImovModel.find({ativo: {'$in': req.params.ativo}, cidade: {'$in': req.params.cidade}, tipo: {'$in': req.params.tipo}})
        .distinct('bairro')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    async filterQueryImoveis(req, res){
        await ImovModel.find({ativo: {'$in': req.params.ativo}, tipo: {'$in': req.params.tipo}})
        .sort('data_adc')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    async filterQueryImoveisCidade(req, res){
        await ImovModel.find({ativo: {'$in': req.params.ativo}, cidade: {'$in': req.params.cidade}, tipo: {'$in': req.params.tipo}})
        .sort('data_adc')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    async filterQueryImoveisBairro(req, res){
        await ImovModel.find({ativo: {'$in': req.params.ativo}, cidade: {'$in': req.params.cidade}, bairro: {'$in': req.params.bairro}, tipo: {'$in': req.params.tipo}})
        .sort('data_adc')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }



}

module.exports = new ImovController();