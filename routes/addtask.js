var express = require('express');
var router = express.Router();

/* GET this page. */
router.get('/', function(req, res, next) {
  res.render('addtask', { title: 'New task' });
});

module.exports = router;
