'use strict';

var express = require('express');
var router = express.Router();
var request = require('request');
var async = require('async');

var utils = require('../utils/utils.js');
var keys = require('../utils/keys.json');

var plan_url = "https://api.pagar.me/1/plans/";
var subscription_url = "https://api.pagar.me/1/subscriptions/";

router.post('/', function (req, res) {
    var params = req.body;
    params = utils.validatePlanData(params);

    request.post({ url: plan_url, form: params }, function (error, response, body) {
        return res.send(body);
    });
});

router.post('/subscriptions/', function (req, res) {
    var params = req.body;
    params = utils.validateSubscriptionData(params);

    utils.getKeyForTransaction(params, function(card_hash){
        params.card_hash = card_hash;

        request.post({ url: subscription_url, form: params }, function (error, response, body) {
            return res.send(body);
        });
    });
});

router.post('/subscriptions/cancel', function (req, res) {
    var params = req.body;
    var id = params.id;

    if(id) {
        var url = subscription_url + id + "/cancel/";
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
                "message": "coloque o id da assinatura na requisição"
            }],
            "url": "/subscriptions/cancel",
            "method": "post"
        }

        return res.send(JSON.stringify(error));
    }
});

router.post('/subscriptions/postback', function (req, res) {
    /*
    TODO: em um ambiente real ele faria alguma modificação no banco,
    indicando o novo status.
    */
    var params = req.body;
    // database.update(params);
    return res.send('Thanks for letting me know! :)');
});


module.exports = router;