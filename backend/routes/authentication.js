var express = require('express')
var router = express.Router()
var authentication = require('../controllers/authenticationHandler')


router.route('/').post(authentication);


module.exports = router