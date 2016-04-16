var express = require('express');
var router = express.Router();

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', function(req, res, next) {
  res.cookie('user', req.body.user_name);
  res.redirect('/');
});

router.get('/logout', function(req, res, next) {
  res.clearCookie('user');
  res.redirect('/');
});

module.exports = router;
