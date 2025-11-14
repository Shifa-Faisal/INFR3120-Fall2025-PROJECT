var express = require('express');
var router = express.Router();

/* GET home page. */
// 127.0.0.1 (/)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Media/list', {title: 'Media'});
});

/* GET Add page. */
router.get('/media/add',function(req, res, next) {
  res.render('Media/add', { title: 'Add Review' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET contact us page. */
router.get('/contactus', function(req, res, next)  {
  res.render('contactus', { title: 'Contact us' });
});

module.exports = router;

