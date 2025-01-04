const express = require('express');
const router = express.Router();
const addProduct = require('../controllers/addProductHandler');

router.route('/').post(addProduct);

module.exports = router;
