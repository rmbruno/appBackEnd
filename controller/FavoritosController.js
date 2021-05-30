const { response } = require('express');
const FavModel = require('../model/FavoritosModel');

class FavController {
    
    async createFav(req, res){
        const task = new FavModel(req.body);
        await task
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async filterFav(req, res){
        await FavModel.find({ idcli: {'$in': req.params.id}, idfav: {'$in': req.params.idf}})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filterFavCli(req, res){
        await FavModel.find({ idcli: {'$in': req.params.id}})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async removeFav(req, res){
        await FavModel.deleteOne({ idfav: {'$in': req.params.idf}, idcli: {'$in': req.params.idc}})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

}

module.exports = new FavController();