var express = require('express')
var router = express.Router()
const { body } = require('express-validator');
const authController = require('../controllers/AuthController')

router.get('/login', authController.index);

router.post('/login',
  body('email').isEmail().notEmpty(),
  body('password').notEmpty(),
  authController.authenticate)

module.exports = router;
