'use strict';

var request = require('request');
var should = require('should');
var utils = require('./utils');

describe('Testing Plans EndPoints', function () {

    it('testing /plan/', function (done) {
        this.timeout(0);
        createPlan(done);
    });

    /*it('testing /plan/subscriptions/', function (done) {
        this.timeout(0);
        createSubscription(done);
    });

    it('testing /plan/subscriptions/cancel/', function (done) {
        this.timeout(0);
        cancelSubscription(done);
    });*/

});

var createPlan = function(done){
    request.post(utils.url + 'plan/',
        { form: utils.planData },

        function (error, response, body) {
            response.statusCode.should.equal(200);
            var json = JSON.parse(body);
            console.log("Created plan! ", json.id);
            createSubscription(json, done);
        }
    );
}

var createSubscription = function(json, done) {
    var params = utils.subscribeTest;
    params.plan_id = json.id;

    request.post(utils.url + 'plan/subscriptions/',
        { form: params },

        function (error, response, body) {
            response.statusCode.should.equal(200);

            var json = JSON.parse(body);
            console.log("Created Subscription! ", json.id);
            cancelSubscription(json, done);
        }
    );
}

var cancelSubscription = function(json, done) {
    request.post(utils.url + 'plan/subscriptions/cancel',
        { form: utils.subscribeTest },

        function (error, response, body) {
            response.statusCode.should.equal(200);
            var response_json = JSON.parse(body);
            response_json.status.should.equal('canceled');
            console.log("Canceled Subscription! ", response_json.id);
            done();
        }
    );
}