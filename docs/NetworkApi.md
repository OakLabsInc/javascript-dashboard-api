# dashboard.NetworkApi

All URIs are relative to *https://dashboard.oak.host/api/v5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addWiFi**](NetworkApi.md#addWiFi) | **POST** /machine/{dashboardMachine}/network/AddWiFi | Add Wifi
[**forgetWiFi**](NetworkApi.md#forgetWiFi) | **POST** /machine/{dashboardMachine}/network/ForgetWiFi | Forget Wifi
[**listKnownWiFiNetworks**](NetworkApi.md#listKnownWiFiNetworks) | **GET** /machine/{dashboardMachine}/network/ListKnownWiFiNetworks | List Known Wifi Networks
[**networkInfo**](NetworkApi.md#networkInfo) | **GET** /machine/{dashboardMachine}/network/info | Info
[**wiFiScan**](NetworkApi.md#wiFiScan) | **GET** /machine/{dashboardMachine}/network/WiFiScan | Wifi Scan


<a name="addWiFi"></a>
# **addWiFi**
> Object addWiFi(body, dashboardMachine)

Add Wifi

Adds or overwrites configuration for connecting to a specific WiFi network. The host will then attempt to connect to the network whenever it is available. These settings are persisted until &#x60;ForgetWifi&#x60; is used.

### Example
```javascript
var dashboard = require('@oaklabs/dashboard-api');
var defaultClient = dashboard.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new dashboard.NetworkApi();

var body = new dashboard.WifiConfiguration(); // WifiConfiguration | 

var dashboardMachine = "dashboardMachine_example"; // String | 

apiInstance.addWiFi(body, dashboardMachine).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**WifiConfiguration**](WifiConfiguration.md)|  | 
 **dashboardMachine** | **String**|  | 

### Return type

**Object**

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="forgetWiFi"></a>
# **forgetWiFi**
> Object forgetWiFi(body, dashboardMachine)

Forget Wifi

Removes stored WiFi configuration.

### Example
```javascript
var dashboard = require('@oaklabs/dashboard-api');
var defaultClient = dashboard.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new dashboard.NetworkApi();

var body = new dashboard.ForgetWifiRequest(); // ForgetWifiRequest | 

var dashboardMachine = "dashboardMachine_example"; // String | 

apiInstance.forgetWiFi(body, dashboardMachine).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ForgetWifiRequest**](ForgetWifiRequest.md)|  | 
 **dashboardMachine** | **String**|  | 

### Return type

**Object**

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listKnownWiFiNetworks"></a>
# **listKnownWiFiNetworks**
> Object listKnownWiFiNetworks(dashboardMachine)

List Known Wifi Networks

Lists the WiFi network configurations that are available to this host.

### Example
```javascript
var dashboard = require('@oaklabs/dashboard-api');
var defaultClient = dashboard.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new dashboard.NetworkApi();

var dashboardMachine = "dashboardMachine_example"; // String | 

apiInstance.listKnownWiFiNetworks(dashboardMachine).then(function(data) {
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

<a name="networkInfo"></a>
# **networkInfo**
> Object networkInfo(dashboardMachine)

Info

Shows network information for all Ethernet and WiFi devices, including current network addresses and MAC addresses.

### Example
```javascript
var dashboard = require('@oaklabs/dashboard-api');
var defaultClient = dashboard.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new dashboard.NetworkApi();

var dashboardMachine = "dashboardMachine_example"; // String | 

apiInstance.networkInfo(dashboardMachine).then(function(data) {
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

<a name="wiFiScan"></a>
# **wiFiScan**
> Object wiFiScan(dashboardMachine)

Wifi Scan

Lists visible WiFi networks using the first available WiFi interface

### Example
```javascript
var dashboard = require('@oaklabs/dashboard-api');
var defaultClient = dashboard.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new dashboard.NetworkApi();

var dashboardMachine = "dashboardMachine_example"; // String | 

apiInstance.wiFiScan(dashboardMachine).then(function(data) {
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

