const express = require('express');
const router = express.Router();
const userRoutesHandler = require('../controllers/userRoutesHandler');

router
  .route('/')
  .get(userRoutesHandler.getAllUsers)
  .post(userRoutesHandler.createUser);

router
  .route('/:id')
  .get(userRoutesHandler.getUserById)
  .put(userRoutesHandler.updateUser)
  .delete(userRoutesHandler.deleteUser);

module.exports = router;
