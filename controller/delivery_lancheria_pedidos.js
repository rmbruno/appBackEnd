const { response } = require('express');
const DeliveryLancheriaPedidos = require('../model/delivery_lancheria_pedidos');

class DeliveryLancheriaPedido {
    
    async createPedido(req, res){
        const task = new DeliveryLancheriaPedidos(req.body);
        await task
        .save()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async adcPedidoProd(req, res){
        const task = new DeliveryLancheriaPedidosProd(req.body);
        await task
        .save()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filtraPedidosAguardando(req, res){
        await DeliveryLancheriaPedidos.find({ cliente_id: {'$in': req.params.id}, status: {'$ne': 'Finalizado'}})
        .sort({data: 1})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

}

module.exports = new DeliveryLancheriaPedido();