const articleModel = require('../model/article')
const jwt = require('jsonwebtoken')
require('dotenv').config()

class Controller {
    static add(req,res){
        // console.log(req.body)
        if(req.body.token === undefined){
            res.status(401)
            // console.log(req.body)
        } else {
            let data = jwt.verify(req.body.token,process.env.JWT_SECRET)
            let picture = 'http://localhost:3000/' + req.file.filename
            console.log(req.file)
            articleModel.create({
                title: req.body.title,
                body: req.body.body,
                picture: picture,
                userId: data._id
            })
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
        }
    }

    static delete(req,res){
        console.log(req.body.id)
        if(req.body.token === undefined){
            res.status(401).send('unauthorize')
        } else {
            articleModel.deleteOne({
                _id: req.body.id
            })
            .then(data => {

                res.send(data)

            })
            .catch(err => {
                console.log(err)
                res.send(err)
            })
        }
    }

    static update(req,res){
        // console.log(req.body)
        if (req.body.token === undefined){
            res.status(400)
        } else {
            articleModel.updateOne({
                _id: req.body.id
            }, {
                title: req.body.title,
                body:req.body.body
            })
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.status(500).send(err)
            })
        }
    }
    static readData( req,res){
        articleModel.find({})
        .populate('userId')
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        })
    }

    static readUser (req,res){
        let data = jwt.verify(req.body.token,process.env.JWT_SECRET)
        
        articleModel.find({
            userId: data._id
        })
        .populate('userId')
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send(err)
        })
    }

    static detailArticle(req,res){
        articleModel.find({
            _id: req.body.id
        })
        .populate('userId')
        .then(data => {
            // console.log(data)
            res.send(data)
        })
        .catch(err => {
            res.status(500).send(err)
        })

    }
}

module.exports = Controller