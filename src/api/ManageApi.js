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
    define(['ApiClient', 'model/ChangeFriendlyNameRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ChangeFriendlyNameRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.dashboard) {
      root.dashboard = {};
    }
    root.dashboard.ManageApi = factory(root.dashboard.ApiClient, root.dashboard.ChangeFriendlyNameRequest);
  }
}(this, function(ApiClient, ChangeFriendlyNameRequest) {
  'use strict';

  /**
   * Manage service.
   * @module api/ManageApi
   * @version 5.0.0
   */

  /**
   * Constructs a new ManageApi. 
   * @alias module:api/ManageApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Change Friendly Name
     * Change the &#x60;human_name&#x60; attribute for a machine. If left blank, it will delete the name entirely
     * @param {module:model/ChangeFriendlyNameRequest} body 
     * @param {String} dashboardMachine 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    this.changeNameWithHttpInfo = function(body, dashboardMachine) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling changeName");
      }

      // verify the required parameter 'dashboardMachine' is set
      if (dashboardMachine === undefined || dashboardMachine === null) {
        throw new Error("Missing the required parameter 'dashboardMachine' when calling changeName");
      }


      var pathParams = {
        'dashboardMachine': dashboardMachine
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Authorization'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/manage/{dashboardMachine}/attribute/name', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Change Friendly Name
     * Change the &#x60;human_name&#x60; attribute for a machine. If left blank, it will delete the name entirely
     * @param {module:model/ChangeFriendlyNameRequest} body 
     * @param {String} dashboardMachine 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    this.changeName = function(body, dashboardMachine) {
      return this.changeNameWithHttpInfo(body, dashboardMachine)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Claim Complete
     * Complete a claim for a machine, using the code shown on the Default Application of OakOS
     * @param {String} claimMachine 
     * @param {String} claimCode 
     * @param {String} claimDomain 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    this.claimCompleteWithHttpInfo = function(claimMachine, claimCode, claimDomain) {
      var postBody = null;

      // verify the required parameter 'claimMachine' is set
      if (claimMachine === undefined || claimMachine === null) {
        throw new Error("Missing the required parameter 'claimMachine' when calling claimComplete");
      }

      // verify the required parameter 'claimCode' is set
      if (claimCode === undefined || claimCode === null) {
        throw new Error("Missing the required parameter 'claimCode' when calling claimComplete");
      }

      // verify the required parameter 'claimDomain' is set
      if (claimDomain === undefined || claimDomain === null) {
        throw new Error("Missing the required parameter 'claimDomain' when calling claimComplete");
      }


      var pathParams = {
        'claimMachine': claimMachine,
        'claimCode': claimCode,
        'claimDomain': claimDomain
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Authorization'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/claim/complete/{claimMachine}/{claimCode}/{claimDomain}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Claim Complete
     * Complete a claim for a machine, using the code shown on the Default Application of OakOS
     * @param {String} claimMachine 
     * @param {String} claimCode 
     * @param {String} claimDomain 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    this.claimComplete = function(claimMachine, claimCode, claimDomain) {
      return this.claimCompleteWithHttpInfo(claimMachine, claimCode, claimDomain)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Claim Remove
     * Remove the claim from a machine. This will erase all command history and other attributes, use with caution
     * @param {String} claimMachine 
     * @param {String} claimDomain 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    this.claimRemoveWithHttpInfo = function(claimMachine, claimDomain) {
      var postBody = null;

      // verify the required parameter 'claimMachine' is set
      if (claimMachine === undefined || claimMachine === null) {
        throw new Error("Missing the required parameter 'claimMachine' when calling claimRemove");
      }

      // verify the required parameter 'claimDomain' is set
      if (claimDomain === undefined || claimDomain === null) {
        throw new Error("Missing the required parameter 'claimDomain' when calling claimRemove");
      }


      var pathParams = {
        'claimMachine': claimMachine,
        'claimDomain': claimDomain
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Authorization'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/claim/remove/{claimMachine}/{claimDomain}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Claim Remove
     * Remove the claim from a machine. This will erase all command history and other attributes, use with caution
     * @param {String} claimMachine 
     * @param {String} claimDomain 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    this.claimRemove = function(claimMachine, claimDomain) {
      return this.claimRemoveWithHttpInfo(claimMachine, claimDomain)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Machine Info
     * Get all metadata about a machine
     * @param {String} dashboardMachine 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    this.machineInfoWithHttpInfo = function(dashboardMachine) {
      var postBody = null;

      // verify the required parameter 'dashboardMachine' is set
      if (dashboardMachine === undefined || dashboardMachine === null) {
        throw new Error("Missing the required parameter 'dashboardMachine' when calling machineInfo");
      }


      var pathParams = {
        'dashboardMachine': dashboardMachine
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Authorization'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/manage/{dashboardMachine}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Machine Info
     * Get all metadata about a machine
     * @param {String} dashboardMachine 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    this.machineInfo = function(dashboardMachine) {
      return this.machineInfoWithHttpInfo(dashboardMachine)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));