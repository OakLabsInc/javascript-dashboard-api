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
    instance = new dashboard.AudioApi();
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

  describe('AudioApi', function() {
    describe('audioConfigure', function() {
      it('should call audioConfigure successfully', function(done) {
        //uncomment below and update the code to test audioConfigure
        //instance.audioConfigure(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('audioInfo', function() {
      it('should call audioInfo successfully', function(done) {
        //uncomment below and update the code to test audioInfo
        //instance.audioInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));