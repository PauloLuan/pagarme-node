'use strict';

var express = require('express');
var router = express.Router();
var request = require('request');
var async = require('async');

var keys = require('../utils/keys.json');
var utils = require('../utils/utils.js');

var api_url = 'https://api.pagar.me/1/transactions/';

router.post('/credit', function (req, res) {
	var params = req.body;
	params.api_key = keys.api_key;

	validateCreditCardData(params);

	/*async.waterfall([
        function(next){
            next(null, 'card_hash de teste');
        },
        function(card_hash, next){
            console.log(card_hash)
            next();
        }
    ], function (err, result) {});*/

	getKeyForTransaction(params, function(card_hash){
		params.card_hash = card_hash;

		request.post({ url: api_url, form: params }, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				return res.send(body);
			}
		});
	})
});

router.post('/boleto', function (req, res) {
	var params = req.body;
	validateBillData(params);

	return res.send('it works');
});

router.post('/refund', function (req, res) {
	var params = req.body;
	return res.send('it works');
});



var validateCreditCardData = function(data) {};
var validateBillData = function(data) {};

/*
	TODO: armazenar os dados da chave pública, pois aparentemente é o
    mesmo a cada requisição.
*/
var getKeyForTransaction = function(params, callback) {
	var key_url = api_url + 'card_hash_key';

	request.get({ url: key_url, form: params }, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			var body_json = JSON.parse(body);
			var card_hash = utils.generateCardHash(body_json, params);
			callback(card_hash);
		} else {
			callback(null);
		}
	});
}


module.exports = router;