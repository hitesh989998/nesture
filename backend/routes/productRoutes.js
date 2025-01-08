const express = require('express');
const router = express.Router();
const productRoutesHandler = require('../controllers/productRoutesHandler');
const uploadProductConfig = require('../middlewares/multerConfigProducts');

router
  .route('/')
  .get(productRoutesHandler.getAllProducts)
  .post(
    uploadProductConfig.single('image_url'),
    productRoutesHandler.createProduct
  );

router
  .route('/:id')
  .get(productRoutesHandler.getProductById)
  .put(
    uploadProductConfig.single('image_url'),
    productRoutesHandler.updateProduct
  )
  .delete(productRoutesHandler.deleteProduct);

module.exports = router;
