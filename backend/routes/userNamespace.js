const express = require('express');
const router = express.Router();
const dashboardUser = require('../controllers/userHandler');
router.route('/').get((req, res) => {
  res.status(200).send('This is user route');
});

router.route('/dashboard').get(dashboardUser);

module.exports = router;
