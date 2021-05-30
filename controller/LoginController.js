const { response } = require('express');
const LoginModel = require('../model/LoginModel');

class LoginController {
    
    async createLogin(req, res){
        const task = new LoginModel(req.body);
        await task
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async filterLogin(req, res){
        await LoginModel.find({ token: {'$in': req.params.token}})
        .sort('email')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async deleteLogin(req, res){
        await LoginModel.deleteOne({email: {'$in' : req.params.email}})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

}

module.exports = new LoginController();