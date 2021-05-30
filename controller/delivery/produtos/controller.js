const { response } = require('express');
const DeliveryProdutosModel = require('./produtos_model');
const AdicionalModel = require('./adicional_model');
const DeliveryPizzariaSab = require('./pizzaria_sabores');

class DeliveryProd {
    
    async createProd(req, res){
        const task = new DeliveryProdutosModel(req.body);
        await task
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }
    async updateProduto(req, res){
        await DeliveryProdutosModel.findByIdAndUpdate(
            { _id: req.params.id},
            {'$set': req.body}
            )
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filtraProd(req, res){
        await DeliveryProdutosModel.find({ loja_id: {'$in': req.params.id}, categoria: {'$in': req.params.categoria}, ativo: 'true'})
        .sort('nome')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    async filtraProdAll(req, res){
        await DeliveryProdutosModel.find({ loja_id: {'$in': req.params.id}, ativo: 'true'})
        .sort('nome')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filtraProdDetalhes(req, res){
        await DeliveryProdutosModel.find({ _id: {'$in': req.params.id}})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filtraProdCategoria(req, res){
        await DeliveryProdutosModel.find({ loja_id: {'$in': req.params.id}, ativo: 'true'})
        .distinct('categoria')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }


    //ADICIONAIS

    async createAdicional(req, res){
        const task = new AdicionalModel(req.body);
        await task
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async filterAdicional(req, res){
        await AdicionalModel.find({ idProd: {'$in': req.params.id}})
        .sort('nome')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    //SABORES PIZZARIA
    async createSabor(req, res){
        const task = new DeliveryPizzariaSab(req.body);
        await task
        .save()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    
    async updateSabor(req, res){
        await DeliveryPizzariaSab.findByIdAndUpdate(
            { id: req.params.id},
            {'$set': req.body}
            )
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filtraSaboresCategoria(req, res){
        await DeliveryPizzariaSab.find({ loja_id: {'$in': req.params.id}, categoria: {'$in': req.params.categoria}, ativo: 'true'})
        .sort('nome')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async FiltraSaboresAll(req, res){
        await DeliveryPizzariaSab.find({ loja_id: {'$in': req.params.id}})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filtraSaboresCategoriaDistinct(req, res){
        await DeliveryPizzariaSab.find({ loja_id: {'$in': req.params.id}, ativo: 'true'})
        .distinct('categoria')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

}

module.exports = new DeliveryProd();