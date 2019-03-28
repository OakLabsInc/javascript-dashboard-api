# dashboard.ApplicationApi

All URIs are relative to *https://dashboard.oak.host/api/v5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**factoryReset**](ApplicationApi.md#factoryReset) | **GET** /machine/{dashboardMachine}/application/FactoryReset | Factory Reset
[**install**](ApplicationApi.md#install) | **POST** /machine/{dashboardMachine}/application/install | Install
[**start**](ApplicationApi.md#start) | **GET** /machine/{dashboardMachine}/application/start | Start
[**status**](ApplicationApi.md#status) | **GET** /machine/{dashboardMachine}/application/status | Status
[**stop**](ApplicationApi.md#stop) | **GET** /machine/{dashboardMachine}/application/stop | Stop
[**swapIdleAndLive**](ApplicationApi.md#swapIdleAndLive) | **GET** /machine/{dashboardMachine}/application/SwapIdleAndLive | Swap Idle and Live
[**viewIdle**](ApplicationApi.md#viewIdle) | **GET** /machine/{dashboardMachine}/application/viewIdle | View Idle
[**viewLive**](ApplicationApi.md#viewLive) | **GET** /machine/{dashboardMachine}/application/viewLive | View Live


<a name="factoryReset"></a>
# **factoryReset**
> Object factoryReset(dashboardMachine)

Factory Reset

Erases both the LIVE and IDLE versions and write the default application as both

### Example
```javascript
var dashboard = require('@oaklabs/dashboard-api');
var defaultClient = dashboard.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new dashboard.ApplicationApi();

var dashboardMachine = "dashboardMachine_example"; // String | 

apiInstance.factoryReset(dashboardMachine).then(function(data) {
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

<a name="install"></a>
# **install**
> GenericReponse install(body, dashboardMachine, opts)

Install

Generates a new IDLE version from a given set of Docker tags and credentials, then pulls the necessary Docker images. Status reports are streamed back for each pull. The final message will contain the new docker-compose.yaml just like ViewIdle response.  If any devices matching the globs below are present when an app is installed then they must be present when the app is started: /dev/video* /dev/ttyACM*

### Example
```javascript
var dashboard = require('@oaklabs/dashboard-api');
var defaultClient = dashboard.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new dashboard.ApplicationApi();

var body = new dashboard.InstallRequest(); // InstallRequest | 

var dashboardMachine = "dashboardMachine_example"; // String | 

var opts = { 
  'streaming': true, // Boolean | 
  'timeout': 56 // Number | 
};
apiInstance.install(body, dashboardMachine, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InstallRequest**](InstallRequest.md)|  | 
 **dashboardMachine** | **String**|  | 
 **streaming** | **Boolean**|  | [optional] 
 **timeout** | **Number**|  | [optional] 

### Return type

[**GenericReponse**](GenericReponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="start"></a>
# **start**
> Object start(dashboardMachine)

Start

Starts the LIVE application (if it is not already started)

### Example
```javascript
var dashboard = require('@oaklabs/dashboard-api');
var defaultClient = dashboard.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new dashboard.ApplicationApi();

var dashboardMachine = "dashboardMachine_example"; // String | 

apiInstance.start(dashboardMachine).then(function(data) {
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

<a name="status"></a>
# **status**
> Object status(dashboardMachine)

Status

Shows whether application is running, whether it crashed if it is not running, and the time that it entered its current state.

### Example
```javascript
var dashboard = require('@oaklabs/dashboard-api');
var defaultClient = dashboard.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new dashboard.ApplicationApi();

var dashboardMachine = "dashboardMachine_example"; // String | 

apiInstance.status(dashboardMachine).then(function(data) {
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

<a name="stop"></a>
# **stop**
> Object stop(dashboardMachine)

Stop

Stops the LIVE application (if it is not already stopped)

### Example
```javascript
var dashboard = require('@oaklabs/dashboard-api');
var defaultClient = dashboard.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new dashboard.ApplicationApi();

var dashboardMachine = "dashboardMachine_example"; // String | 

apiInstance.stop(dashboardMachine).then(function(data) {
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

<a name="swapIdleAndLive"></a>
# **swapIdleAndLive**
> Object swapIdleAndLive(dashboardMachine)

Swap Idle and Live

Stops the application (if not already stopped), switches the LIVE and IDLE versions, and then starts the application using the new LIVE version regardless of whether it was running before. This is the last step to DEPLOY an application. It is also used to ROLLBACK.

### Example
```javascript
var dashboard = require('@oaklabs/dashboard-api');
var defaultClient = dashboard.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new dashboard.ApplicationApi();

var dashboardMachine = "dashboardMachine_example"; // String | 

apiInstance.swapIdleAndLive(dashboardMachine).then(function(data) {
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

<a name="viewIdle"></a>
# **viewIdle**
> Object viewIdle(dashboardMachine)

View Idle

Shows the IDLE version docker-compose.yaml

### Example
```javascript
var dashboard = require('@oaklabs/dashboard-api');
var defaultClient = dashboard.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new dashboard.ApplicationApi();

var dashboardMachine = "dashboardMachine_example"; // String | 

apiInstance.viewIdle(dashboardMachine).then(function(data) {
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

<a name="viewLive"></a>
# **viewLive**
> Object viewLive(dashboardMachine)

View Live

Shows the LIVE version docker-compose.yaml

### Example
```javascript
var dashboard = require('@oaklabs/dashboard-api');
var defaultClient = dashboard.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new dashboard.ApplicationApi();

var dashboardMachine = "dashboardMachine_example"; // String | 

apiInstance.viewLive(dashboardMachine).then(function(data) {
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

