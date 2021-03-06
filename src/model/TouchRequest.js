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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/TouchDeviceConfiguration'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TouchDeviceConfiguration'));
  } else {
    // Browser globals (root is window)
    if (!root.dashboard) {
      root.dashboard = {};
    }
    root.dashboard.TouchRequest = factory(root.dashboard.ApiClient, root.dashboard.TouchDeviceConfiguration);
  }
}(this, function(ApiClient, TouchDeviceConfiguration) {
  'use strict';




  /**
   * The TouchRequest model module.
   * @module model/TouchRequest
   * @version 5.0.0
   */

  /**
   * Constructs a new <code>TouchRequest</code>.
   * @alias module:model/TouchRequest
   * @class
   * @param touchDeviceId {String} 
   * @param configuration {module:model/TouchDeviceConfiguration} 
   */
  var exports = function(touchDeviceId, configuration) {
    var _this = this;

    _this['touchDeviceId'] = touchDeviceId;
    _this['configuration'] = configuration;
  };

  /**
   * Constructs a <code>TouchRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TouchRequest} obj Optional instance to populate.
   * @return {module:model/TouchRequest} The populated <code>TouchRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('touchDeviceId')) {
        obj['touchDeviceId'] = ApiClient.convertToType(data['touchDeviceId'], 'String');
      }
      if (data.hasOwnProperty('configuration')) {
        obj['configuration'] = TouchDeviceConfiguration.constructFromObject(data['configuration']);
      }
    }
    return obj;
  }

  /**
   * @member {String} touchDeviceId
   */
  exports.prototype['touchDeviceId'] = undefined;
  /**
   * @member {module:model/TouchDeviceConfiguration} configuration
   */
  exports.prototype['configuration'] = undefined;



  return exports;
}));


