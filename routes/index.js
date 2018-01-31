var express = require('express');
var router = express.Router();

var con = require('../controllers/myController');
//router.get('/', con.indexFunction);
router.get('/find', con.myFunction);

module.exports = router;
