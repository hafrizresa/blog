// const chai = require('chai')
// const chaiHttp = require('chai-http')
// const expect = chai.expect,
// const mongoose = require('mongoose')
// let token = null
// let env_test = 'BLOG-TEST'
// chai.use(chaiHttp)

// describe('article testing', function () {
//     before(done => {
//         mongoose.connect(`mongodb://localhost:27017/${env_test}`, { useNewUrlParser: true }).then(() => done())

//     })
//     before(function (done) {
//         chai
//             .request('http://localhost:3000')
//             .post('/users/register')
//             .send({
//                 name: 'hafriz',
//                 email: 'hafriz@hafriz.hafriz',
//                 password: '12345'
//             })
//             .end(function (err, res) {
//                 chai
//                     .request('http://localhost:3000')
//                     .post('/users/login')
//                     .send({
//                         email: 'hafriz@hafriz.hafriz',
//                         password: '12345'
//                     })
//                     .end(function (err, res) {
//                         token = res.body.token
//                         // console.log(res.body.token)
//                         done()
//                     })
//             })
//     })
//     it('add article', function (done) {
//         let result = new FormData()
//         result.append('title', 'coba testing')
//         result.append('body', 'asd')
//         result.append('token', token)
//         chai
//             .request('http://localhost:3000')
//             .post('/article/add')
//             .set(
//                 'Content-Type', 'multipart/form-data'
//             )
//             .send({
//                 result
//             })

//             .end(function (err, res) {
//                 // expect(err).to.be.null
//                 // expect(res).to.have.status(200)
//                 // expect(res.body).to.have.an('object')
//                 console.log(res.body)
//                 done()
//             })
//     })

//     // it('update article', function (done) {
//     //     chai
//     //         .request('http://localhost:3000')
//     //         .put('/article/update')
//     //         .send({
//     //             id: "5bf195c406d2322a400f7f6c",
//     //             body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.            `,
//     //             title: 'Seorang Pelajar Menelan Batu Batassss',
//     //             token: 'eyJhbGciOiJIUzI1NiJ9.eyJhcnRpY2xlcyI6W10sImZvbGxvd2luZyI6W10sIl9pZCI6IjViZjE4OTMwNDI5MmE4MTlkYzQ0NGIxNiIsIm5hbWUiOiJhc2QiLCJlbWFpbCI6ImFzZEBhc2QuYXNkIiwicGFzc3dvcmQiOiIkMmEkMTAkYjhwcGpRdGcvcDBDR1R3MEJyOENTdVpqd0NUNnhnYldGL2hoWDVaMjRVTWhpVE00c3hwZXkiLCJfX3YiOjB9.lQ7h5DyslaNm_fCWue8WRqe7jpG9OymKpGWoC4hTfms'
//     //         })
//     //         .end(function (err, res) {
//     //             expect(err).to.be.null
//     //             expect(res).to.have.status(200)
//     //             expect(res.body).to.have.an('object')
//     //             done()
//     //         })
//     // })

//     // it('read all article', function (done) {
//     //     chai
//     //         .request('http://localhost:3000')
//     //         .get('/article')
//     //         .end(function (err, res) {
//     //             expect(err).to.be.null
//     //             expect(res).to.have.status(200)
//     //             expect(res.body).to.have.an('array')
//     //             done()
//     //         })
//     // })
// })