var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('products', { biggest_seller: 'red tractor' });
});

module.exports = router;
