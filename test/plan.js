'use strict';

var request = require('request');
var should = require('should');
var utils = require('./utils');

describe('Testing Plans EndPoints', function () {

    it('testing /plan/', function (done) {
        this.timeout(0);
        request.post(utils.url + 'plan/',
            { form: utils.validCreditCard },

            function (error, response, body) {
                response.statusCode.should.equal(200);
                done();
            }
        );
    });

    it('testing /plan/subscriptions/', function (done) {
        this.timeout(0);
        request.post(utils.url + 'plan/subscriptions/',
            { form: utils.validCreditCard },

            function (error, response, body) {
                response.statusCode.should.equal(200);
                done();
            }
        );
    });

    it('testing /plan/subscriptions/cancel/', function (done) {
        this.timeout(0);
        request.post(utils.url + 'plan/subscriptions/cancel',
            { form: utils.validCreditCard },

            function (error, response, body) {
                response.statusCode.should.equal(200);
                done();
            }
        );
    });

});
