# dashboard.ManageApi

All URIs are relative to *https://dashboard.oak.host/api/v5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changeName**](ManageApi.md#changeName) | **POST** /manage/{dashboardMachine}/attribute/name | Change Friendly Name
[**claimComplete**](ManageApi.md#claimComplete) | **GET** /claim/complete/{claimMachine}/{claimCode}/{claimDomain} | Claim Complete
[**claimRemove**](ManageApi.md#claimRemove) | **GET** /claim/remove/{claimMachine}/{claimDomain} | Claim Remove
[**machineInfo**](ManageApi.md#machineInfo) | **GET** /manage/{dashboardMachine} | Machine Info


<a name="changeName"></a>
# **changeName**
> Object changeName(body, dashboardMachine)

Change Friendly Name

Change the &#x60;human_name&#x60; attribute for a machine. If left blank, it will delete the name entirely

### Example
```javascript
var dashboard = require('@oaklabs/dashboard-api');
var defaultClient = dashboard.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new dashboard.ManageApi();

var body = new dashboard.ChangeFriendlyNameRequest(); // ChangeFriendlyNameRequest | 

var dashboardMachine = "dashboardMachine_example"; // String | 

apiInstance.changeName(body, dashboardMachine).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ChangeFriendlyNameRequest**](ChangeFriendlyNameRequest.md)|  | 
 **dashboardMachine** | **String**|  | 

### Return type

**Object**

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="claimComplete"></a>
# **claimComplete**
> Object claimComplete(claimMachine, claimCode, claimDomain)

Claim Complete

Complete a claim for a machine, using the code shown on the Default Application of OakOS

### Example
```javascript
var dashboard = require('@oaklabs/dashboard-api');
var defaultClient = dashboard.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new dashboard.ManageApi();

var claimMachine = "claimMachine_example"; // String | 

var claimCode = "claimCode_example"; // String | 

var claimDomain = "claimDomain_example"; // String | 

apiInstance.claimComplete(claimMachine, claimCode, claimDomain).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **claimMachine** | **String**|  | 
 **claimCode** | **String**|  | 
 **claimDomain** | **String**|  | 

### Return type

**Object**

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="claimRemove"></a>
# **claimRemove**
> Object claimRemove(claimMachine, claimDomain)

Claim Remove

Remove the claim from a machine. This will erase all command history and other attributes, use with caution

### Example
```javascript
var dashboard = require('@oaklabs/dashboard-api');
var defaultClient = dashboard.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new dashboard.ManageApi();

var claimMachine = "claimMachine_example"; // String | 

var claimDomain = "claimDomain_example"; // String | 

apiInstance.claimRemove(claimMachine, claimDomain).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **claimMachine** | **String**|  | 
 **claimDomain** | **String**|  | 

### Return type

**Object**

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="machineInfo"></a>
# **machineInfo**
> Object machineInfo(dashboardMachine)

Machine Info

Get all metadata about a machine

### Example
```javascript
var dashboard = require('@oaklabs/dashboard-api');
var defaultClient = dashboard.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new dashboard.ManageApi();

var dashboardMachine = "dashboardMachine_example"; // String | 

apiInstance.machineInfo(dashboardMachine).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardMachine** | **String**|  | 

### Return type

**Object**

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

