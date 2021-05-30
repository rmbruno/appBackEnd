const { response } = require('express');
const VLojas = require('../model/VLojasModel');
const VLojasProd = require('../model/VLojasProd');

class VLojasController {
    
    async createVLoja(req, res){
        const task = new VLojas(req.body);
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
        await VLojas.find({ ativo: {'$in': req.params.ativo}})
        .distinct('cidade')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filterLojasAll(req, res){
        await VLojas.find({ ativo: {'$in': req.params.ativo}})
        .sort('nome')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    async filterLojasCidade(req, res){
        await VLojas.find({ ativo: {'$in': req.params.ativo}, cidade: {'$in': req.params.cidade}})
        .sort('nome')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    
    async filterLojaDetail(req, res){
        await VLojas.find({ ativo: {'$in': req.params.ativo}, _id: {'$in': req.params.id}})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    /* async adicionaProdutos(req, res){
        await VLojas.findOneAndUpdate({ _id: req.params.id}, 
            { 
               '$push': {
                    catalogo: req.body 
                }
            }
        )
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filtraProdDetailBKP(req, res){
        await VLojas.aggregate([{'$group': {descricao: '$catalogo.grade.tam'}}])
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }*/

    //PRODUTOS
    async createProdutos(req, res){
        const task = new VLojasProd(req.body);
        await task
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async filtraProdFav(req, res){
        await VLojasProd.find({ ativo: req.params.ativo, idLoja: {'$in': req.params.idl}, favoritos: req.params.fav})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    async filtraProdMaisVendidos(req, res){
        await VLojasProd.find({ ativo: req.params.ativo, idLoja: {'$in': req.params.idl}, maisVendido: req.params.mv})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    
    async filtraProdLoja(req, res){
        await VLojasProd.find({idLoja: {'$in': req.params.idl}})
        .sort('descricao')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filtraProdDetail(req, res){
        await VLojasProd.find({_id: {'$in': req.params.idp}})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filtraRelacionados(req, res){
        await VLojasProd.find({ativo: req.params.ativo, idLoja: {'$in': req.params.id}, categoria: req.params.cat, subcategoria: req.params.subc})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async setAtualizaosDados(req, res){
        await VLojas.findOneAndUpdate({ _id: req.params.id}, 
            { 
               $set: {
                    catalogo: req.body
                }
            }
        )
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

}

module.exports = new VLojasController();