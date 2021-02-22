var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('users.ejs', { title: 'Users', users: ['Kalle', 'Jessica', 'Ali'] });
});

module.exports = router;
