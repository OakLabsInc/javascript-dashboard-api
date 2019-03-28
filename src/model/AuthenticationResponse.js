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
    define(['ApiClient', 'model/UserCustomClaims'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserCustomClaims'));
  } else {
    // Browser globals (root is window)
    if (!root.dashboard) {
      root.dashboard = {};
    }
    root.dashboard.AuthenticationResponse = factory(root.dashboard.ApiClient, root.dashboard.UserCustomClaims);
  }
}(this, function(ApiClient, UserCustomClaims) {
  'use strict';




  /**
   * The AuthenticationResponse model module.
   * @module model/AuthenticationResponse
   * @version 5.0.0
   */

  /**
   * Constructs a new <code>AuthenticationResponse</code>.
   * @alias module:model/AuthenticationResponse
   * @class
   * @param uid {String} Firebase User ID
   * @param email {String} Email address
   * @param displayName {String} Friendly display name
   * @param customClaims {Object.<String, module:model/UserCustomClaims>} Dashboard specific user metadata
   * @param firebaseToken {String} Firebase Authentication token, to be used in future firebase requests
   * @param bearerToken {String} JWT Bearer Token to use for future API requests
   * @param metadata {Object} 
   */
  var exports = function(uid, email, displayName, customClaims, firebaseToken, bearerToken, metadata) {
    var _this = this;

    _this['uid'] = uid;
    _this['email'] = email;
    _this['displayName'] = displayName;
    _this['customClaims'] = customClaims;
    _this['firebaseToken'] = firebaseToken;
    _this['bearerToken'] = bearerToken;
    _this['metadata'] = metadata;
  };

  /**
   * Constructs a <code>AuthenticationResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AuthenticationResponse} obj Optional instance to populate.
   * @return {module:model/AuthenticationResponse} The populated <code>AuthenticationResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('uid')) {
        obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('displayName')) {
        obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
      }
      if (data.hasOwnProperty('customClaims')) {
        obj['customClaims'] = ApiClient.convertToType(data['customClaims'], {'String': UserCustomClaims});
      }
      if (data.hasOwnProperty('firebaseToken')) {
        obj['firebaseToken'] = ApiClient.convertToType(data['firebaseToken'], 'String');
      }
      if (data.hasOwnProperty('bearerToken')) {
        obj['bearerToken'] = ApiClient.convertToType(data['bearerToken'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
      }
    }
    return obj;
  }

  /**
   * Firebase User ID
   * @member {String} uid
   */
  exports.prototype['uid'] = undefined;
  /**
   * Email address
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * Friendly display name
   * @member {String} displayName
   */
  exports.prototype['displayName'] = undefined;
  /**
   * Dashboard specific user metadata
   * @member {Object.<String, module:model/UserCustomClaims>} customClaims
   */
  exports.prototype['customClaims'] = undefined;
  /**
   * Firebase Authentication token, to be used in future firebase requests
   * @member {String} firebaseToken
   */
  exports.prototype['firebaseToken'] = undefined;
  /**
   * JWT Bearer Token to use for future API requests
   * @member {String} bearerToken
   */
  exports.prototype['bearerToken'] = undefined;
  /**
   * @member {Object} metadata
   */
  exports.prototype['metadata'] = undefined;



  return exports;
}));


