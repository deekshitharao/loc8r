var express = require('express');
var router = express.Router();

/* GET home page. */
var ctrlMain=require('C:/loc8r/app-server/controller/main.js') ;
router.get('/',ctrlMain.index);

module.exports = router;
