const { response } = require('express');
const ProdutoModel = require('../model/ProdutoModel');

class ProdutoController {
    
    async createProdutos(req, res){
        const task = new ProdutoModel(req.body);
        await task
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async filterProdutos(req, res){
        await ProdutoModel.find({ idloja: {'$in': req.params.idloja}})
        .sort('nome')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filterProdutosU(req, res){
        await ProdutoModel.find({ _id: {'$in': req.params.idProd}})
        .sort('nome')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

}

module.exports = new ProdutoController();