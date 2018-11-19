const commentModel = require('../model/comment')
const articleModel = require('../model/article')
const jwt = require('jsonwebtoken')
require('dotenv').config()

class Controller{

    static readComment(req,res){
        commentModel.find({
            articleId: req.body.articleId
        })
        .populate('userId')
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send(err)
        })
    }

    static add (req, res){
        let data = jwt.verify(req.body.token, process.env.JWT_SECRET)
        commentModel.create({
            word: req.body.word,
            userId: data._id,
            articleId: req.body.id
        })
        .then(data => {
            res.send(data)
            
        })
        .catch(err => {
            res.status(500).send(err)
        })
    }

    static delete(req,res){
       commentModel.deleteOne({
           _id: req.body.commentId
       })
       .then(data => {
           res.send(data)
       })
       .catch(err => {
           res.status(500).send(err)
       })
    }
}

module.exports = Controller