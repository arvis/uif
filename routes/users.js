var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('models', { title: 'Models' });
});

module.exports = router;
