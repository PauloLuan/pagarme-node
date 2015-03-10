'use strict';

var express = require('express');
var router = express.Router();

router.post('/credit', function(req, res){
	var params = req.body;
	var id = params.notification_house_id;
});

router.post('/boleto', function(req, res){
	var params = req.body;
	var id = params.notification_house_id;
});

router.post('/refund', function(req, res){
	var params = req.body;
	var id = params.notification_house_id;
});

module.exports = router;