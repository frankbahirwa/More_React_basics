const express = require('express')

const router = express.Router()
const controller = require('../controller/userController')

router.get('/form' , controller.getForm)
router.post('/register' , controller.Register)
router.get('/list' , controller.Select)

module.exports = router