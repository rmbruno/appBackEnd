const { response } = require('express');
const Pedidos = require('./Model');

class DeliveryPedido {
    
    async createPedido(req, res){
        const task = new Pedidos(req.body);
        await task
        .save()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filtraPedidosClientes(req, res){
        await Pedidos.find({ cliente_id: {'$in': req.params.id}, status: {'$ne': 'Finalizado'}})
        .sort({data: 1})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filtraPedidosAguardandoLojas(req, res){
        await Pedidos.find({ loja_id: {'$in': req.params.id}, data: {'$in': req.params.data}, status: {'$in': 'Aguardando confirmação do pedido'}})
        .sort({data: 1})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    
    async filtraPedidosProducaoLojas(req, res){
        await Pedidos.find({ loja_id: {'$in': req.params.id}, status: {'$in': 'Pedido aceito, em produção...'}})
        .sort({data: 1})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    
    async filtraPedidosEmTransporteLojas(req, res){
        await Pedidos.find({ loja_id: {'$in': req.params.id}, status: {'$in': 'Pedido saiu para entrega...'}})
        .sort({data: 1})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    
    async filtraPedidosAguardandoClienteLojas(req, res){
        await Pedidos.find({ loja_id: {'$in': req.params.id}, status: {'$in': 'Aguardando cliente buscar...'}})
        .sort({data: 1})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    
    async filtraPedidosFinalizadoLojas(req, res){
        await Pedidos.find({ loja_id: {'$in': req.params.id}, data: {'$in': req.params.data}, status: {'$in': 'Pedido finalizado.'}})
        .sort({data: 1})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filtraPedidosAguardandoDetalhes(req, res){
        await Pedidos.find({ _id: {'$in': req.params.id}})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    
    async filtraPedidosFinalizadoDatasLojas(req, res){
        await Pedidos.find({ loja_id: {'$in': req.params.id}, status: {'$in': 'Pedido finalizado.'}})
        .distinct('data')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    
    async filtraPedidosVendaDataLojas(req, res){
        await Pedidos.find({ loja_id: {'$in': req.params.id}, data: {'$in': req.params.data}, status: {'$in': 'Pedido finalizado.'}})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    
    async filtraPedidosVendaMesLojas(req, res){
        await Pedidos.find({ loja_id: {'$in': req.params.id}, mes: {'$in': req.params.data}, status: {'$in': 'Pedido finalizado.'}})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    
    async filtraValorTotalRelatorios(req, res){
        await Pedidos.aggregate(
        [
            {
                $group: {loja_id: req.params.id, total: {$sum: 1}}
            }
        ])
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async atualizaPedido(req, res){
        await Pedidos.findByIdAndUpdate(
            { _id: req.params.id},
            {'$set': req.body},
            )
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

}

module.exports = new DeliveryPedido();