const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
const mongoose = require('mongoose')
let token = null
let articleId = null
let env_test = 'BLOG-TEST'
let articleModel = require('../model/article')
let userModel = require('../model/user')
chai.use(chaiHttp)

describe('article testing', function () {
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
                        articleModel.create({
                            title: 'test',
                            body: 'asd',
                            token:token
                        })
                        .then(data => {
                            articleId = data._id
                            done()
                        })
                        .catch(err => {
                            done()
                        })
                        
                    })
            })
    })

    it('update article', function (done) {
        chai
            .request('http://localhost:3000')
            .put('/article/update')
            .send({
                id: articleId,
                body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.            `,
                title: 'Seorang Pelajar Menelan Batu Batassss',
                token: token
            })
            .end(function (err, res) {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                expect(res.body).to.have.an('object')
                done()
            })
    })

    it('read all article', function (done) {
        chai
            .request('http://localhost:3000')
            .get('/article')
            .end(function (err, res) {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                expect(res.body).to.have.an('array')
                done()
            })
    })
    it('delete article', function(done){
        chai
        .request('http://localhost:3000')
        .del('/article')
        .send({
            token: token,
            id: articleId
        })
        .end(function (err, res) {
            expect(err).to.be.null
            expect(res).to.have.status(200)
            expect(res.body).to.have.an('object')
            done()
        })
    })

    after(done => {
        mongoose.connect(`mongodb://localhost:27017/${env_test}`, { useNewUrlParser: true }).then(() => done())

    })
    after(function (done) {
        userModel.remove({})
            .then(() => {
                return articleModel.remove({})
            })
            .then(data => {
                done()
            })
            .catch(err => {
                done()
            })
    })
})