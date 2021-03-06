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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.dashboard) {
      root.dashboard = {};
    }
    root.dashboard.WifiConfiguration = factory(root.dashboard.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The WifiConfiguration model module.
   * @module model/WifiConfiguration
   * @version 5.0.0
   */

  /**
   * Constructs a new <code>WifiConfiguration</code>.
   * @alias module:model/WifiConfiguration
   * @class
   * @param ssid {String} 
   * @param passphrase {String} 
   */
  var exports = function(ssid, passphrase) {
    var _this = this;

    _this['ssid'] = ssid;
    _this['passphrase'] = passphrase;
  };

  /**
   * Constructs a <code>WifiConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WifiConfiguration} obj Optional instance to populate.
   * @return {module:model/WifiConfiguration} The populated <code>WifiConfiguration</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ssid')) {
        obj['ssid'] = ApiClient.convertToType(data['ssid'], 'String');
      }
      if (data.hasOwnProperty('passphrase')) {
        obj['passphrase'] = ApiClient.convertToType(data['passphrase'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} ssid
   */
  exports.prototype['ssid'] = undefined;
  /**
   * @member {String} passphrase
   */
  exports.prototype['passphrase'] = undefined;



  return exports;
}));


