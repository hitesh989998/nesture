const express = require('express');
const router = express.Router();
const productschema = require('../model/productSchema');

router.get('/', (req, res) => {
  res.json('Nesture Backend Server says Hi!');
});

router.get('/allproducts', async (req, res) => {
  try {
    const products = await productschema.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
});

module.exports = router;
