const express = require('express');
const router = express.Router();
const chartsHandlerFunctions = require('../controllers/userStatsHandler');

router.get('/user-stats', chartsHandlerFunctions.getUserStats);

router.get(
  '/product-categories',
  chartsHandlerFunctions.productCategoriesStats
);

router.get('/price-stats', chartsHandlerFunctions.productPriceStats);
module.exports = router;
