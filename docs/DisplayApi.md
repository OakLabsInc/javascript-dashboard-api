# dashboard.DisplayApi

All URIs are relative to *https://dashboard.oak.host/api/v5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**displayConfigure**](DisplayApi.md#displayConfigure) | **POST** /machine/{dashboardMachine}/display/configure | Configure
[**displayConfigureGlobal**](DisplayApi.md#displayConfigureGlobal) | **POST** /machine/{dashboardMachine}/display/configureGlobal | Configure Global
[**displayInfo**](DisplayApi.md#displayInfo) | **GET** /machine/{dashboardMachine}/display/info | Info


<a name="displayConfigure"></a>
# **displayConfigure**
> Object displayConfigure(body, dashboardMachine)

Configure

Applies configuration to a specific display

### Example
```javascript
var dashboard = require('@oaklabs/dashboard-api');
var defaultClient = dashboard.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new dashboard.DisplayApi();

var body = "body_example"; // String | 

var dashboardMachine = "dashboardMachine_example"; // String | 

apiInstance.displayConfigure(body, dashboardMachine).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **String**|  | 
 **dashboardMachine** | **String**|  | 

### Return type

**Object**

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="displayConfigureGlobal"></a>
# **displayConfigureGlobal**
> Object displayConfigureGlobal(body, dashboardMachine)

Configure Global

Applies configuration that affects all displays

### Example
```javascript
var dashboard = require('@oaklabs/dashboard-api');
var defaultClient = dashboard.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new dashboard.DisplayApi();

var body = new dashboard.DisplayGlobalConfiguration(); // DisplayGlobalConfiguration | 

var dashboardMachine = "dashboardMachine_example"; // String | 

apiInstance.displayConfigureGlobal(body, dashboardMachine).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DisplayGlobalConfiguration**](DisplayGlobalConfiguration.md)|  | 
 **dashboardMachine** | **String**|  | 

### Return type

**Object**

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="displayInfo"></a>
# **displayInfo**
> Object displayInfo(dashboardMachine)

Info

Lists displays, current configuration and supported configurations

### Example
```javascript
var dashboard = require('@oaklabs/dashboard-api');
var defaultClient = dashboard.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new dashboard.DisplayApi();

var dashboardMachine = "dashboardMachine_example"; // String | 

apiInstance.displayInfo(dashboardMachine).then(function(data) {
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

