const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
const userModel = require('../model/user')
chai.use(chaiHttp)
const mongoose = require('mongoose')
env_test = 'BLOG-TEST'
let commentId = null
let token = null

describe('comment testing', function () {

    before(done => {
        mongoose.connect(`mongodb://localhost:27017/${env_test}`, { useNewUrlParser: true }).then(() => done())

    })
    before(function (done) {
        chai
        .request('http://localhost:3000')
        .post('/users/register')
        .send({
            name: 'hafriz',
            email: 'hafriz@hafriz.hafriz',
            password: '12345'
        })
        .end(function (err, res) {           
            chai
            .request('http://localhost:3000')
            .post('/users/login')
            .send({
                email: 'hafriz@hafriz.hafriz',
                password: '12345'
            })
            .end(function (err, res) {
                token = res.body.token
                // console.log(res.body.token)
                done()
            })
        })
    })

    it('add comment', function (done) {
        chai
            .request('http://localhost:3000')
            .post('/comment/add')
            .send({
                id: '5bf18a30f675971c483d3f51',
                word: 'asd',
                token: token
            })
            .end(function (err, res) {
                // console.log(res.body)
                commentId = res.body._id
                expect(err).to.be.null
                expect(res).to.have.status(200)
                expect(res.body).to.have.an('object')
                done()
            })
    })

    it('delete comment', function(done){
        chai
        .request('http://localhost:3000')
        .del('/comment/delete')
        .send({
            commentId: commentId
        })
        .end(function(err, res){
            expect(err).to.be.null
            expect(res).to.have.status(200)
            expect(res.body).to.have.an('object')
            done()
        })
    })

    it('read comment', function(done){
        chai
        .request('http://localhost:3000')
        .post('/comment/read')
        .send({
            articleId: '5bf18a30f675971c483d3f51'
        })
        .end(function(err, res){
            expect(err).to.be.null
            expect(res).to.have.status(200)
            expect(res.body).to.have.an('array')
            done()
        })
    })

    after(done => {
        mongoose.connect(`mongodb://localhost:27017/${env_test}`, { useNewUrlParser: true }).then(() => done())

    })

    after(function (done) {
        userModel.remove({})
            .then(() => {
                done()
            })
    })



})
