const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
const userModel = require('../model/user')
const mongoose = require('mongoose')
chai.use(chaiHttp)
let token = ''
let env_test = 'BLOG-TEST'

describe('login and register user', function () {

    it('register', function (done) {
        chai
            .request('http://localhost:3000')
            .post('/users/register')
            .send({
                name: 'hafriz',
                email: 'hafriz@hafriz.hafriz',
                password: '12345'
            })
            .end(function (err, res) {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                expect(res.body).to.have.an('object')
                done()
            })
    })

    it('register error duplicate email', function (done) {
        chai
            .request('http://localhost:3000')
            .post('/users/register')
            .send({
                name: 'hafriz',
                email: 'hafriz@hafriz.hafriz',
                password: '12345'
            })
            .end(function (err, res) {
                expect(err).to.be.null
                expect(res).to.have.status(403)
                expect(res.body).to.have.an('object')
                expect(res.body).to.have.property('errMsg')
                done()
            })
    })

    it('login', function (done) {
        chai
            .request('http://localhost:3000')
            .post('/users/login')
            .send({
                email: 'hafriz@hafriz.hafriz',
                password: '12345'
            })
            .end(function (err, res) {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                expect(res.body).to.have.property('token')
                token = res.body.token
                // console.log(res.body.token)
                done()
            })
    })

    it('login wrong password', function (done) {
        chai
            .request('http://localhost:3000')
            .post('/users/login')
            .send({
                email: 'hafriz@hafriz.hafriz',
                password: '123456'
            })
            .end(function (err, res) {
                expect(err).to.be.null
                expect(res).to.have.status(401)
                expect(res.body).to.have.property('errMsg')
                expect(res.body).to.not.have.property('token')
                done()
            })
    })

    it('login wrong email', function (done) {
        chai
            .request('http://localhost:3000')
            .post('/users/login')
            .send({
                email: 'hafriz@hafriz.hafiz',
                password: '123456'
            })
            .end(function (err, res) {
                expect(err).to.be.null
                expect(res).to.have.status(401)
                expect(res.body).to.have.property('errMsg')
                expect(res.body).to.not.have.property('token')
                done()
            })
    })

    it('authorized user', function (done) {
        chai
            .request('http://localhost:3000')
            .post('/article/user')
            .send({
                token: token
            })
            .end(function (err, res) {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                expect(res.body).to.have.an('array')
                done()
            })
    })

    it('unauthorize user', function (done) {
        chai
            .request('http://localhost:3000')
            .post('/article/user')
            .send({
               
            })
            .end(function (err, res) {
                expect(res).to.have.status(500)
                done()
            })
    })

    it('unauthorize user wrong token', function (done) {
        chai
            .request('http://localhost:3000')
            .post('/article/user')
            .send({
                token: 'eyJhbGciJIUzI1NiJ9.eyJhcnRpY2xlcyI6W10sImZvbGxvd2luZyI6W10sIl9pZCI6IjViZjE4OTMwNDI5MmE4MTlkYzQ0NGIxNiIsIm5hbWUiOiJhc2QiLCJlbWFpbCI6ImFzZEBhc2QuYXNkIiwicGFzc3dvcmQiOiIkMmEkMTAkYjhwcGpRdGcvcDBDR1R3MEJyOENTdVpqd0NUNnhnYldGL2hoWDVaMjRVTWhpVE00c3hwZXkiLCJfX3YiOjB9.lQ7h5DyslaNm_fCWue8WRqe7jpG9OymKpGWoC4hTfms'
            })
            .end(function (err, res) {
                expect(res).to.have.status(500)
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