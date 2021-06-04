var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', page: 'home' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me', page: 'about' });
});

router.get('/contactme', function(req, res, next) {
  res.render('index', { title: 'Contact me', page: 'contactme' });
});

router.get('/project', function(req, res, next) {
  res.render('index', { title: 'Contact me', page: 'project' });
});

router.get('/service', function(req, res, next) {
  res.render('index', { title: 'Contact me', page: 'service' });
});

module.exports = router;
