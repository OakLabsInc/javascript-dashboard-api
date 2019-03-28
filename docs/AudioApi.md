# dashboard.AudioApi

All URIs are relative to *https://dashboard.oak.host/api/v5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**audioConfigure**](AudioApi.md#audioConfigure) | **POST** /machine/{dashboardMachine}/audio/configure | Configure
[**audioInfo**](AudioApi.md#audioInfo) | **GET** /machine/{dashboardMachine}/audio/info | Info


<a name="audioConfigure"></a>
# **audioConfigure**
> Object audioConfigure(body, dashboardMachine)

Configure

Applies configuration to an audio device, i.e. change the volume. Note: Must be between 0 and 100 inclusive 0 is effectively mute and 100 is maximum volume

### Example
```javascript
var dashboard = require('@oaklabs/dashboard-api');
var defaultClient = dashboard.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new dashboard.AudioApi();

var body = new dashboard.AudioRequest(); // AudioRequest | 

var dashboardMachine = "dashboardMachine_example"; // String | 

apiInstance.audioConfigure(body, dashboardMachine).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AudioRequest**](AudioRequest.md)|  | 
 **dashboardMachine** | **String**|  | 

### Return type

**Object**

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="audioInfo"></a>
# **audioInfo**
> Object audioInfo(dashboardMachine)

Info

Lists available mixers which correspond to connected audio devices; also shows the current configuration, i.e. volume and mute settings You may have to guess-and-check to determine which mixer corresponds to the physical device you want to control.

### Example
```javascript
var dashboard = require('@oaklabs/dashboard-api');
var defaultClient = dashboard.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new dashboard.AudioApi();

var dashboardMachine = "dashboardMachine_example"; // String | 

apiInstance.audioInfo(dashboardMachine).then(function(data) {
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

