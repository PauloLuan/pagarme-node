'use strict';

var request = require('supertest');
var should = require('should');
var assert = require('assert');
var async = require('async');
var utils = require('./utils');

describe('Testing Plans EndPoints', function() {

	it('testing /plan/', function(done) {
		request(utils.url).post('/transaction/credit/')
		.send(utils.creditCardTest)
		.expect(200, 'it works')
		.end(function(err, res){
			if(err) {
				done(err);
			} else {
				done();
			}
		});
	});

	it('testing /plan/subscriptions/', function(done) {
		request(utils.url).post('/transaction/boleto/')
		.send(utils.creditCardTest)
		.expect(200, 'it works')
		.end(function(err, res){
			if(err) {
				done(err);
			} else {
				done();
			}
		});
	});

	it('testing /plan/subscriptions/cancel', function(done) {
		request(utils.url).post('/transaction/refund/')
		.send(utils.creditCardTest)
		.expect(200, 'it works')
		.end(function(err, res){
			if(err) {
				done(err);
			} else {
				done();
			}
		});
	});
});
