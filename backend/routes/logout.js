const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    sameSite: 'strict',
  });

  res.status(200).send('Logged out successfully');
});

module.exports = router;
