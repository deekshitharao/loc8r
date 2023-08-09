var express = require('express');
var router = express.Router();

/* GET home page. */
var ctrlLocations=require('../controller/locations') ;
var ctrlothers=require('../controller/others') ;

router.get('/',ctrlLocations.homelist);
router.get('/location',ctrlLocations.LocationInfo);
router.get('/location/review/new',ctrlLocations.addReview);

router.get('/about',ctrlothers.about);
router.get('/signin',ctrlothers.signin);
 

module.exports = router;
