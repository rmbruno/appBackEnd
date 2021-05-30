const { response } = require('express');
const DeliveryPizzariaPedidos = require('../model/delivery_pizzaria_pedidos');

class DeliveryPizzariaPedido {
    
    async createPedido(req, res){
        const task = new DeliveryPizzariaPedidos(req.body);
        await task
        .save()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filtraNPedido(req, res){
        await DeliveryPizzariaPedidos.find({ loja_id: {'$in': req.params.id}, cliente_id: {'$in': req.params.idc}, status: 'Aguardando cliente finalizar pedido'})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

}

module.exports = new DeliveryPizzariaPedido();