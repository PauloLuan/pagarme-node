'use strict';

var request = require('request');
var should = require('should');
var utils = require('./utils');

var validCreditCard = utils.validCreditCard;

describe('Testing Transaction EndPoints', function () {

    it('testing /transaction/credit/', function (done) {
        this.timeout(0);
        request.post(utils.url + 'transaction/credit/',
            { form: validCreditCard },

            function (error, response, body) {
                var json_body = JSON.parse(body);
                should(error).not.be.ok;
                response["statusCode"].should.equal(200);
                json_body.should.have.property('status');
                json_body["status"].should.be.equal('paid');
                json_body["amount"].should.be.equal(validCreditCard.amount);
                done();
            }
        );
    });

    it('testing /transaction/boleto/', function (done) {
        this.timeout(0);
        request.post(utils.url + 'transaction/boleto/',
            { form: validCreditCard },

            function (error, response, body) {
                var json_body = JSON.parse(body);
                should(error).not.be.ok;
                response["statusCode"].should.equal(200);
                json_body.should.have.property('status');
                json_body["status"].should.be.equal('waiting_payment');
                json_body["amount"].should.be.equal(validCreditCard.amount);
                done();
            }
        );
    });

    it('testing /transaction/refund/', function (done) {
        this.timeout(0);
        request.post(utils.url + 'transaction/refund/',
            { form: utils.validCreditCard },

            function (error, response, body) {
                response.statusCode.should.equal(200);
                done();
            }
        );
    });

});
