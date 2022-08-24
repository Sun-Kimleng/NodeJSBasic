var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const blogs = [
    {title: 'title 1', snippet:'Hello world Number One'},
    {title: 'title 2', snippet:'Hello world Number Two'},
    {title: 'title 3', snippet:'Hello world Number Three'}
  ];
  res.render('index', { title: 'Home', blogs });
});

router.get('/about', (req, res, next)=>{
  res.render('about', {title: 'About'})
});
module.exports = router;
