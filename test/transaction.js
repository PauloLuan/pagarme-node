"use strict";

var request = require("request");
var should = require("should");
var async = require("async");
var utils = require("./utils");

var validCreditCard = utils.validCreditCard;

var madeCreditTransaction = function(callback) {
    request.post(
        utils.url + "transaction/credit/",
        { form: validCreditCard },
        callback
    );
}

describe("Testing Transaction EndPoints", function () {

    it("testing /transaction/credit/", function (done) {
        this.timeout(0);

        var analysesResult = function (error, response, body) {
            var json_body = JSON.parse(body);
            should(error).not.be.ok;
            response["statusCode"].should.equal(200);
            json_body.should.have.property("status");
            json_body["status"].should.be.equal("paid");
            json_body["amount"].should.be.equal(validCreditCard.amount);
            done();
        }

        madeCreditTransaction(analysesResult);
    });

    it("testing /transaction/boleto/", function (done) {
        this.timeout(0);
        request.post(utils.url + "transaction/boleto/",
            { form: validCreditCard },

            function (error, response, body) {
                var json_body = JSON.parse(body);
                should(error).not.be.ok;
                response["statusCode"].should.equal(200);
                json_body.should.have.property("status");
                json_body["status"].should.be.equal("waiting_payment");
                json_body["amount"].should.be.equal(validCreditCard.amount);
                done();
            }
        );
    });

    it("testing /transaction/refund/", function (done) {
        this.timeout(0);

        var requestRefund = function(card, callback) {
            request.post(
                utils.url + "transaction/refund/",  // url
                { form: card },                     // parameters
                callback                            // callback(error, response, body)
            );
        }

        async.waterfall([

            // cria uma transação
            function(next) {
                console.log("Creating Transaction... ");

                var analysesResult = function (error, response, body) {
                    var json_body = JSON.parse(body);
                    should(error).not.be.ok;
                    response["statusCode"].should.equal(200);
                    json_body.should.have.property("status");
                    json_body["status"].should.be.equal("paid");
                    json_body["amount"].should.be.equal(validCreditCard.amount);

                    next(null, json_body, utils.validCreditCard);
                }

                madeCreditTransaction(analysesResult);

            },

            // cancela a transação
            function(responseData, creditCardData, next) {
                console.log("Canceling Transaction... ", responseData.id);
                creditCardData.id = responseData.id;

                requestRefund(creditCardData, function(error, response, body) {
                    var json_body = JSON.parse(body);

                    should(error).not.be.ok;
                    response["statusCode"].should.equal(200);
                    json_body.should.have.property("status");
                    json_body["status"].should.be.equal("refunded");

                    next(null, creditCardData);
                });
            },

            // tenta cancelar a mesma transação
            function(creditCardData, next) {
                console.log("Trying to cancel the transaction again... ", creditCardData.id);

                requestRefund(creditCardData, function(error, response, body) {
                    var json_body = JSON.parse(body);
                    var message = "Transação já estornada";
                    var type = "action_forbidden";

                    should(error).not.be.ok;
                    json_body["errors"][0]["message"].should.equal(message);
                    json_body["errors"][0]["type"].should.equal(type);

                    next(null, "done");
                });
            }
        ],
        function (err, result) {
            done();
        });
    });

});
