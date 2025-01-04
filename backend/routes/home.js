const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('This is nesture backend server');
});

module.exports = router;
