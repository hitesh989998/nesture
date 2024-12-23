var express = require('express');
var router = express.Router();

router.get('/', (req,res)=>{
    res.json('This is from express')
})

module.exports = router;