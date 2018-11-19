var express = require('express');
var router = express.Router();
const Controller = require('../controller/commentController')
const isLogin = require('../middlewares/isLogin')

router.post('/add',isLogin, Controller.add)
router.delete('/delete', Controller.delete)
router.post('/read',Controller.readComment)

module.exports = router