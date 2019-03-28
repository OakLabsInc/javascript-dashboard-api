# dashboard.HostApi

All URIs are relative to *https://dashboard.oak.host/api/v5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**hostInfo**](HostApi.md#hostInfo) | **GET** /machine/{dashboardMachine}/host/info | Host information
[**reboot**](HostApi.md#reboot) | **POST** /machine/{dashboardMachine}/host/reboot | Reboot


<a name="hostInfo"></a>
# **hostInfo**
> Object hostInfo(dashboardMachine)

Host information

Basic host information, including hostname, current time and timezone, and software versions

### Example
```javascript
var dashboard = require('@oaklabs/dashboard-api');
var defaultClient = dashboard.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new dashboard.HostApi();

var dashboardMachine = "dashboardMachine_example"; // String | Machine Hostname

apiInstance.hostInfo(dashboardMachine).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardMachine** | **String**| Machine Hostname | 

### Return type

**Object**

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="reboot"></a>
# **reboot**
> Object reboot(dashboardMachine)

Reboot

Enables the provided list of Platform Modules and disables those not listed. Use ListModules to see module_id values.

### Example
```javascript
var dashboard = require('@oaklabs/dashboard-api');
var defaultClient = dashboard.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new dashboard.HostApi();

var dashboardMachine = "dashboardMachine_example"; // String | 

apiInstance.reboot(dashboardMachine).then(function(data) {
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

