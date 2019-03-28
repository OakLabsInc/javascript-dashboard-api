# dashboard.AuthApi

All URIs are relative to *https://dashboard.oak.host/api/v5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**jwtValidate**](AuthApi.md#jwtValidate) | **GET** /auth/jwt/validate | Verify Bearer Token
[**login**](AuthApi.md#login) | **POST** /auth/email/json | Login


<a name="jwtValidate"></a>
# **jwtValidate**
> JwtVerifyResponse jwtValidate()

Verify Bearer Token

### Example
```javascript
var dashboard = require('@oaklabs/dashboard-api');
var defaultClient = dashboard.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new dashboard.AuthApi();
apiInstance.jwtValidate().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**JwtVerifyResponse**](JwtVerifyResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="login"></a>
# **login**
> AuthenticationResponse login(email, password)

Login



### Example
```javascript
var dashboard = require('@oaklabs/dashboard-api');

var apiInstance = new dashboard.AuthApi();

var email = "email_example"; // String | Full email address

var password = "password_example"; // String | 

apiInstance.login(email, password).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| Full email address | 
 **password** | **String**|  | 

### Return type

[**AuthenticationResponse**](AuthenticationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

