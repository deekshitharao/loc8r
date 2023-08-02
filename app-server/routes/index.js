var express = require('express');
var router = express.Router();

/* GET home page. */
var ctrlLocations=require('C:/loc8r/app-server/controller/locations.js') ;
var ctrlOthers=require('C:/loc8r/app-server/controller/others.js') ;
router.get('/',ctrlLocations.homelist);
router.get('/location',ctrlLocations.LocationInfo);
router.get('/location/review/new',ctrlLocations.addReview);

router.get('/about',ctrlOthers.about);

module.exports = router;
