'use strict';

var express = require('express');
var router = express.Router();
var request = require('request');
var async = require('async');

var utils = require('../utils/utils.js');
var keys = require('../utils/keys.json');

var api_url = "https://api.pagar.me/1/plans";

router.post('/', function (req, res) {
    var params = req.body;
    return res.send('it works');
});

router.post('/subscriptions/', function (req, res) {
    var params = req.body;
    return res.send('it works');
});

router.post('/subscriptions/cancel', function (req, res) {
    var params = req.body;
    return res.send('it works');
});

module.exports = router;