var util = require('../utils/cms-utils');
var express = require('express');
var router = express.Router();

//auth
router.use(function(req,res,next){
	//console.log(req.path);
	let loggedin=false;
	if(req.path==='/login'){
		if(loggedin)
			res.redirect('/cms/');
		else
			next();
	}else{
		if(loggedin)
			next();
		else
			res.redirect('/cms/login');
	}
	next();
});

router.get('/', function(req, res, next) {
  res.render('backend/pages/test', util.gen_data({ pagename: 'Panel' }));
});
router.get('/test2', function(req, res, next) {
  res.render('backend/pages/index2', util.gen_data({ pagename: 'Panel' }));
});
router.get('/login', function(req, res, next) {
  res.render('backend/login', util.gen_data({ pagename: 'login' }));
});


module.exports = router;
