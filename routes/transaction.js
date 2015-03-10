'use strict';

var express = require('express');
var router = express.Router();

router.post('/credit', function(req, res){
	var params = req.body;
	return res.send('it works');
});

router.post('/boleto', function(req, res){
	var params = req.body;
	return res.send('it works');
});

router.post('/refund', function(req, res){
	var params = req.body;
	return res.send('it works');
});

module.exports = router;