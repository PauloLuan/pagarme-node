'use strict';

var express = require('express');
var router = express.Router();

router.post('/', function(req, res){
	var params = req.body;
	return res.send('it works');
});

router.post('/subscriptions/', function(req, res){
	var params = req.body;
	return res.send('it works');
});

router.post('/subscriptions/cancel', function(req, res){
	var params = req.body;
	return res.send('it works');
});

module.exports = router;