const { response } = require('express');
const UEnderecos = require('../model/Usuarios_Enderecos');

class UsuariosEnderecos {
    
    async createEndereco(req, res){
        const task = new UEnderecos(req.body);
        await task
        .save()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filtraEnderecos(req, res){
        await UEnderecos.find({ usuario_id: {'$in': req.params.id} })
        .sort({titulo: 1})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async deleteEndereco(req, res){
        await UEnderecos.findByIdAndDelete({ _id: {'$in': req.params.id}})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

}

module.exports = new UsuariosEnderecos();