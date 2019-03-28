# dashboard.TouchApi

All URIs are relative to *https://dashboard.oak.host/api/v5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**touchConfigure**](TouchApi.md#touchConfigure) | **POST** /machine/{dashboardMachine}/touch/configure | Configure
[**touchInfo**](TouchApi.md#touchInfo) | **GET** /machine/{dashboardMachine}/touch/info | Info


<a name="touchConfigure"></a>
# **touchConfigure**
> Object touchConfigure(body, dashboardMachine)

Configure

Applies configuration to a specific display  ## &#x60;calibration&#x60; Four space-separated integers representing &#x60;&lt;min-x max-x min-y max-y&gt;&#x60;. Use empty-string to use default calibration.  Note that once calibration is changed it can only be reset to default by rebooting.  It is recommended that you start with extreme values, such as \&quot;0 32768 0 32768\&quot;, and then manually change values one axis at a time until physical touches are aligned as desired.  ## &#x60;rotate&#x60; Rotate the interface relative to its physical upright direction NOT relative to the current rotation or a display&#39;s image.  &#x60;&#x60;&#x60;   NO_ROTATE &#x3D; 0;   LEFT &#x3D; 1;  // turn 90 degrees counter-clockwise   RIGHT &#x3D; 2;  // turn 90 degrees clockwise   INVERTED &#x3D; 3;  // turn 180 degrees &#x60;&#x60;&#x60; 

### Example
```javascript
var dashboard = require('@oaklabs/dashboard-api');
var defaultClient = dashboard.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new dashboard.TouchApi();

var body = "body_example"; // String | 

var dashboardMachine = "dashboardMachine_example"; // String | 

apiInstance.touchConfigure(body, dashboardMachine).then(function(data) {
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

<a name="touchInfo"></a>
# **touchInfo**
> Object touchInfo(dashboardMachine)

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

var apiInstance = new dashboard.TouchApi();

var dashboardMachine = "dashboardMachine_example"; // String | 

apiInstance.touchInfo(dashboardMachine).then(function(data) {
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

