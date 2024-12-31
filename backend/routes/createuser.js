var express = require('express')
var router = express.Router()
var createUser = require('../controllers/createUserHandler')

router.route('/').post(createUser);

module.exports = router