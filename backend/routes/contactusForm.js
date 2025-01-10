const express = require('express');
const router = express.Router();
const contactus = require('../controllers/contactusHandler');

router.post('/', contactus.contactusHandler);

module.exports = router;
