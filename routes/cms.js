var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('backend/pages/test', { title: 'Panel' });
});
router.get('/test2', function(req, res, next) {
  res.render('backend/pages/index2', { title: 'Panel' });
});
router.get('/login', function(req, res, next) {
  res.render('backend/login', { title: 'login' });
});

module.exports = router;
