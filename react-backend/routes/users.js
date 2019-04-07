var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {
      id: 1,
      username: 'samsepiol'
    },
    {
      id: 2,
      username: 'D0loresH@ze'
  }]);
});

module.exports = router;
