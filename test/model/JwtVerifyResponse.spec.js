/**
 * OakOS Dashboard API
 * The Dashboard API provides a secure way to remotely issue commands to OakOS devices. All endpoints are generated from the [OakOS Platform gRPC API](https://github.com/OakLabsInc/platform-protos) 
 *
 * OpenAPI spec version: 5.0.0
 * Contact: oakos@zivelo.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.dashboard);
  }
}(this, function(expect, dashboard) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new dashboard.JwtVerifyResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('JwtVerifyResponse', function() {
    it('should create an instance of JwtVerifyResponse', function() {
      // uncomment below and update the code to test JwtVerifyResponse
      //var instance = new dashboard.JwtVerifyResponse();
      //expect(instance).to.be.a(dashboard.JwtVerifyResponse);
    });

    it('should have the property uid (base name: "uid")', function() {
      // uncomment below and update the code to test the property uid
      //var instance = new dashboard.JwtVerifyResponse();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new dashboard.JwtVerifyResponse();
      //expect(instance).to.be();
    });

    it('should have the property displayName (base name: "displayName")', function() {
      // uncomment below and update the code to test the property displayName
      //var instance = new dashboard.JwtVerifyResponse();
      //expect(instance).to.be();
    });

    it('should have the property customClaims (base name: "customClaims")', function() {
      // uncomment below and update the code to test the property customClaims
      //var instance = new dashboard.JwtVerifyResponse();
      //expect(instance).to.be();
    });

    it('should have the property iat (base name: "iat")', function() {
      // uncomment below and update the code to test the property iat
      //var instance = new dashboard.JwtVerifyResponse();
      //expect(instance).to.be();
    });

    it('should have the property exp (base name: "exp")', function() {
      // uncomment below and update the code to test the property exp
      //var instance = new dashboard.JwtVerifyResponse();
      //expect(instance).to.be();
    });

    it('should have the property aud (base name: "aud")', function() {
      // uncomment below and update the code to test the property aud
      //var instance = new dashboard.JwtVerifyResponse();
      //expect(instance).to.be();
    });

    it('should have the property iss (base name: "iss")', function() {
      // uncomment below and update the code to test the property iss
      //var instance = new dashboard.JwtVerifyResponse();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new dashboard.JwtVerifyResponse();
      //expect(instance).to.be();
    });

  });

}));
