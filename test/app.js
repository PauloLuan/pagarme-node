'use strict';

var request = require('supertest');
var should = require('should');
var assert = require('assert');
var async = require('async');
var utils = require('./utils');

var app = require('../app').app;

describe('app', function () {
    it('should be an object', function () {
        assert(typeof app, 'object');
    })

    it('should be 200', function (done) {
        request(utils.url)
            .get('/')
            .expect(200, done);
    })
})