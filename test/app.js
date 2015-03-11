'use strict';

var request = require('request');
var should = require('should');
var utils = require('./utils');

describe('app', function () {
    it('should be a Function', function () {
        var app = require('../app');
        app.should.be.an.instanceOf(Function);
    });

    it(utils.url + ' should be 200', function (done) {
        request(utils.url, function (error, response, body) {
            response.statusCode.should.equal(200);
            done();
        });
    });
})