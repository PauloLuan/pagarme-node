'use strict';

var express = require('express');
var router = express.Router();
var request = require('request');
var async = require('async');

var utils = require('../utils/utils.js');
var keys = require('../utils/keys.json');

var api_url = 'https://api.pagar.me/1/transactions/';

router.post('/credit', function (req, res) {
	var params = req.body;
	params = utils.validateCreditCardData(params);

	utils.getKeyForTransaction(params, function(card_hash){
		params.card_hash = card_hash;

		request.post({ url: api_url, form: params }, function (error, response, body) {
			return res.send(body);
		});
	});
});

router.post('/boleto', function (req, res) {
	var params = req.body;

	params = utils.validateBillData(params);

	request.post({ url: api_url, form: params }, function (error, response, body) {
		return res.send(body);
	});
});

router.post('/refund', function (req, res) {
	var params = req.body;
	var id = params.id;

	if(id) {
		var url = api_url + id + "/refund/";
		params.api_key = keys.api_key;

		request.post({ url: url, form: params }, function (error, response, body) {
			return res.send(body);
		});
	}
	else {
		var error = {
			"errors": [
			{
				"type": "missing_parameters",
				"parameter_name": "id",
				"message": "coloque o id na requisição"
			}],
			"url": "/transactions/refund",
			"method": "post"
		}

		return res.send(JSON.stringify(error));
	}
});

module.exports = router;