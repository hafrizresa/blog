var express = require('express');
var router = express.Router();
const articleController = require('../controller/articleController')
// const multer = require('../middlewares/multer')
const isLogin = require('../middlewares/isLogin')

const multer = require('multer')
var storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.jpg')
  }
})

var upload = multer({ storage: storage })

router.post('/add',upload.single('img'),articleController.add)
router.delete('/', articleController.delete)
router.put('/update', articleController.update)
router.get('/', articleController.readData)
router.post('/user',isLogin, articleController.readUser)
router.post('/detail', articleController.detailArticle)



module.exports = router