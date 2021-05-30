const { response } = require('express');
const UserModel = require('../model/UserModel');

class UserController {
    
    async createUsuario(req, res){
        const task = new UserModel(req.body);
        await task
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async updateUsuario(req, res){
        await UserModel.findByIdAndUpdate(
            { _id: req.params._id},
            {'$set': {'endereco': req.params.endereco, 'bairro': req.params.bairro, 'cidade': req.params.cidade, 'estado': req.params.estado}},
            )
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filterUsuario(req, res){
        await UserModel.find({ email: {'$in': req.params.email}, 'senha': req.params.senha})
        .sort('nome')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    //
    async updateTutoServicos(req, res){
        await UserModel.findByIdAndUpdate(
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

module.exports = new UserController();