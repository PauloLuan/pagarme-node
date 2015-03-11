'use strict';

var express = require('express');
var router = express.Router();
var request = require('request');
var async = require('async');

var utils = require('../utils/utils.js');

var api_url = 'https://api.pagar.me/1/transactions/';

router.post('/credit', function (req, res) {
	var params = req.body;
	params = utils.validateCreditCardData(params);

	utils.getKeyForTransaction(params, function(card_hash){
		params.card_hash = card_hash;

		request.post({ url: api_url, form: params }, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				return res.send(body);
			}
		});
	});
});

router.post('/boleto', function (req, res) {
	var params = req.body;

	params = utils.validateBillData(params);

    request.post({ url: api_url, form: params }, function (error, response, body) {
        console.log(error, response, body);

        if (!error && response.statusCode == 200) {
            return res.send(body);
        }

        return res.send(body);
    });
});

router.post('/refund', function (req, res) {
	var params = req.body;
	return res.send('it works');
});

module.exports = router;