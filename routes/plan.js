'use strict';

var express = require('express');
var router = express.Router();

router.post('/', function(req, res){
	var params = req.body;
	var id = params.notification_house_id;
});

router.post('/subscriptions/', function(req, res){
	var params = req.body;
	var id = params.notification_house_id;
});

router.post('/subscriptions/cancel', function(req, res){
	var params = req.body;
	var id = params.notification_house_id;
});

module.exports = router;