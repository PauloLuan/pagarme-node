'use strict';

// import the moongoose helper utilities
var request = require('supertest');
var assert = require('assert')
var app = require('../app').app;
var url = 'http://localhost:3000';

describe('app', function(){
  it('should be an object', function(){
    assert(typeof app, 'object');
  })

  it('should be 200', function(done){
    request(url)
      .get('/')
      .expect(200, done);
  })
})