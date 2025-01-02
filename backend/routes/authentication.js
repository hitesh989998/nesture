const express = require("express");
const router = express.Router();
const authentication = require("../controllers/authenticationHandler");


router.route("/").post(authentication);


module.exports = router;
