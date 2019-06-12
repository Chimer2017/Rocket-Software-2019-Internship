var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/users/user-test', function(req, res) {
    res.send("This was processed on the user routes page.")
});

module.exports = router;