var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/presenter/:mode', function(req, res) {
  res.render('presenter', { title: 'Coding-Live', mode: req.params.mode});
});

module.exports = router;
