# dashboard.AutomaticApi

All URIs are relative to *https://dashboard.oak.host/api/v5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apply**](AutomaticApi.md#apply) | **GET** /machine/{dashboardMachine}/automatic/apply | Apply
[**clear**](AutomaticApi.md#clear) | **GET** /machine/{dashboardMachine}/automatic/clear | Clear
[**generate**](AutomaticApi.md#generate) | **GET** /machine/{dashboardMachine}/automatic/generate | Generate
[**store**](AutomaticApi.md#store) | **POST** /machine/{dashboardMachine}/automatic/store | Store
[**view**](AutomaticApi.md#view) | **GET** /machine/{dashboardMachine}/automatic/view | View


<a name="apply"></a>
# **apply**
> Object apply(dashboardMachine)

Apply

Uses the stored Configuration message to configure the appropriate other services

### Example
```javascript
var dashboard = require('@oaklabs/dashboard-api');
var defaultClient = dashboard.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new dashboard.AutomaticApi();

var dashboardMachine = "dashboardMachine_example"; // String | 

apiInstance.apply(dashboardMachine).then(function(data) {
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

<a name="clear"></a>
# **clear**
> Object clear(dashboardMachine)

Clear

Erases the currently stored Configuration so that no automatic configuration will be done on next Platform start-up.

### Example
```javascript
var dashboard = require('@oaklabs/dashboard-api');
var defaultClient = dashboard.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new dashboard.AutomaticApi();

var dashboardMachine = "dashboardMachine_example"; // String | 

apiInstance.clear(dashboardMachine).then(function(data) {
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

<a name="generate"></a>
# **generate**
> Object generate(dashboardMachine)

Generate

Creates a Configuration message that, when sent to the Store RPC, would lead to automatic configuration resulting in the same settings that are in place when Generate was called

### Example
```javascript
var dashboard = require('@oaklabs/dashboard-api');
var defaultClient = dashboard.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new dashboard.AutomaticApi();

var dashboardMachine = "dashboardMachine_example"; // String | 

apiInstance.generate(dashboardMachine).then(function(data) {
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

<a name="store"></a>
# **store**
> Object store(body, dashboardMachine)

Store

Creates a Configuration message that, when sent to the Store RPC, would lead to automatic configuration resulting in the same settings that are in place when Generate was called

### Example
```javascript
var dashboard = require('@oaklabs/dashboard-api');
var defaultClient = dashboard.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new dashboard.AutomaticApi();

var body = new dashboard.AutomaticStoreRequest(); // AutomaticStoreRequest | 

var dashboardMachine = "dashboardMachine_example"; // String | 

apiInstance.store(body, dashboardMachine).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AutomaticStoreRequest**](AutomaticStoreRequest.md)|  | 
 **dashboardMachine** | **String**|  | 

### Return type

**Object**

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="view"></a>
# **view**
> Object view(dashboardMachine)

View

Exposes the currently stored Configuration

### Example
```javascript
var dashboard = require('@oaklabs/dashboard-api');
var defaultClient = dashboard.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new dashboard.AutomaticApi();

var dashboardMachine = "dashboardMachine_example"; // String | 

apiInstance.view(dashboardMachine).then(function(data) {
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

