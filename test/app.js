'use strict';

var request = require('supertest');
var should = require('should');
var async = require('async');
var utils = require('./utils');

var app = require('../app').app;

describe('app', function() {
	it('should be an object', function() {
		assert(typeof app, 'object');
	})

	it('should be 200', function(done){
		request(url)
		.get('/')
		.should.be.equal(200);
		//.expect(200, done);
		done();
	})
})