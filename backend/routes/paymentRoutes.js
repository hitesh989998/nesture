const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// Route to create payment intent
router.post('/create-payment-intent', paymentController.createPaymentIntent);

module.exports = router;
