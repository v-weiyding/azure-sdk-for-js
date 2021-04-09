let nock = require('nock');

module.exports.hash = "be9407693a5cc4c9ef72c849f680f7ba";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/common/discovery/instance')
  .query(true)
  .reply(200, {"tenant_discovery_endpoint":"https://login.microsoftonline.com/organizations/v2.0/.well-known/openid-configuration","api-version":"1.1","metadata":[{"preferred_network":"login.microsoftonline.com","preferred_cache":"login.windows.net","aliases":["login.microsoftonline.com","login.windows.net","login.microsoft.com","sts.windows.net"]},{"preferred_network":"login.partner.microsoftonline.cn","preferred_cache":"login.partner.microsoftonline.cn","aliases":["login.partner.microsoftonline.cn","login.chinacloudapi.cn"]},{"preferred_network":"login.microsoftonline.de","preferred_cache":"login.microsoftonline.de","aliases":["login.microsoftonline.de"]},{"preferred_network":"login.microsoftonline.us","preferred_cache":"login.microsoftonline.us","aliases":["login.microsoftonline.us","login.usgovcloudapi.net"]},{"preferred_network":"login-us.microsoftonline.com","preferred_cache":"login-us.microsoftonline.com","aliases":["login-us.microsoftonline.com"]}]}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Length',
  '957',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  'c59e0b35-e1fb-4c0e-bcd7-fd9667016100',
  'x-ms-ests-server',
  '2.1.11562.10 - EUS ProdSlices',
  'Set-Cookie',
  'fpc=fpc;; expires=Mon, 03-May-2021 04:36:47 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=esctx; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Sat, 03 Apr 2021 04:36:46 GMT'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/organizations/v2.0/.well-known/openid-configuration')
  .reply(200, {"token_endpoint":"https://login.microsoftonline.com/organizations/oauth2/v2.0/token","token_endpoint_auth_methods_supported":["client_secret_post","private_key_jwt","client_secret_basic"],"jwks_uri":"https://login.microsoftonline.com/organizations/discovery/v2.0/keys","response_modes_supported":["query","fragment","form_post"],"subject_types_supported":["pairwise"],"id_token_signing_alg_values_supported":["RS256"],"response_types_supported":["code","id_token","code id_token","id_token token"],"scopes_supported":["openid","profile","email","offline_access"],"issuer":"https://login.microsoftonline.com/{tenantid}/v2.0","request_uri_parameter_supported":false,"userinfo_endpoint":"https://graph.microsoft.com/oidc/userinfo","authorization_endpoint":"https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize","device_authorization_endpoint":"https://login.microsoftonline.com/organizations/oauth2/v2.0/devicecode","http_logout_supported":true,"frontchannel_logout_supported":true,"end_session_endpoint":"https://login.microsoftonline.com/organizations/oauth2/v2.0/logout","claims_supported":["sub","iss","cloud_instance_name","cloud_instance_host_name","cloud_graph_host_name","msgraph_host","aud","exp","iat","auth_time","acr","nonce","preferred_username","name","tid","ver","at_hash","c_hash","email"],"tenant_region_scope":null,"cloud_instance_name":"microsoftonline.com","cloud_graph_host_name":"graph.windows.net","msgraph_host":"graph.microsoft.com","rbac_url":"https://pas.windows.net"}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Length',
  '1510',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '2372ef92-a4ad-416d-ad5e-11bddde56500',
  'x-ms-ests-server',
  '2.1.11562.10 - NCUS ProdSlices',
  'Set-Cookie',
  'fpc=fpc;; expires=Mon, 03-May-2021 04:36:47 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=esctx; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Sat, 03 Apr 2021 04:36:47 GMT'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/organizations/oauth2/v2.0/devicecode', "scope=https%3A%2F%2Fvault.azure.net%2F.default%20openid%20profile%20offline_access&client_id=04b07795-8ddb-461a-bbee-02f9e1bf7b46")
  .reply(200, {"user_code":"USER_CODE","device_code":"DEVICE_CODE","verification_uri":"https://microsoft.com/devicelogin","expires_in":900,"interval":5,"message":"To sign in, use a web browser to open the page https://microsoft.com/devicelogin and enter the code USER_CODE to authenticate."}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '473',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  'dcc40d9a-da00-4016-87c2-2a8240a16f00',
  'x-ms-ests-server',
  '2.1.11562.10 - NCUS ProdSlices',
  'x-ms-clitelem',
  '1,0,0,,',
  'Set-Cookie',
  'fpc=fpc;; expires=Mon, 03-May-2021 04:36:48 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=esctx; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Sat, 03 Apr 2021 04:36:47 GMT'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/organizations/oauth2/v2.0/token', "scope=https%3A%2F%2Fvault.azure.net%2F.default%20openid%20profile%20offline_access&client_id=04b07795-8ddb-461a-bbee-02f9e1bf7b46&grant_type=device_code&device_code=DEVICE_CODE&client-request-id=client-request-id&client_info=1")
  .reply(400, {"error":"authorization_pending","error_description":"AADSTS70016: OAuth 2.0 device flow error. Authorization is pending. Continue polling.\r\nTrace ID: d7d0d7f1-1578-456c-a891-e7c160fdaf00\r\nCorrelation ID: c66e5bd7-aaae-46cb-b773-e1f3bf944ab5\r\nTimestamp: 2021-04-03 04:36:53Z","error_codes":[70016],"timestamp":"2021-04-03 04:36:53Z","trace_id":"d7d0d7f1-1578-456c-a891-e7c160fdaf00","correlation_id":"c66e5bd7-aaae-46cb-b773-e1f3bf944ab5","error_uri":"https://login.microsoftonline.com/error?code=70016"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '510',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  'd7d0d7f1-1578-456c-a891-e7c160fdaf00',
  'x-ms-ests-server',
  '2.1.11562.10 - EUS ProdSlices',
  'x-ms-clitelem',
  '1,70016,0,,',
  'Set-Cookie',
  'fpc=fpc;; expires=Mon, 03-May-2021 04:36:53 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Sat, 03 Apr 2021 04:36:52 GMT'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/organizations/oauth2/v2.0/token', "scope=https%3A%2F%2Fvault.azure.net%2F.default%20openid%20profile%20offline_access&client_id=04b07795-8ddb-461a-bbee-02f9e1bf7b46&grant_type=device_code&device_code=DEVICE_CODE&client-request-id=client-request-id&client_info=1")
  .reply(400, {"error":"authorization_pending","error_description":"AADSTS70016: OAuth 2.0 device flow error. Authorization is pending. Continue polling.\r\nTrace ID: 5a05f5cf-ef33-4bc4-89cf-49ef3097aa00\r\nCorrelation ID: c66e5bd7-aaae-46cb-b773-e1f3bf944ab5\r\nTimestamp: 2021-04-03 04:36:58Z","error_codes":[70016],"timestamp":"2021-04-03 04:36:58Z","trace_id":"5a05f5cf-ef33-4bc4-89cf-49ef3097aa00","correlation_id":"c66e5bd7-aaae-46cb-b773-e1f3bf944ab5","error_uri":"https://login.microsoftonline.com/error?code=70016"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '510',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '5a05f5cf-ef33-4bc4-89cf-49ef3097aa00',
  'x-ms-ests-server',
  '2.1.11562.10 - WUS2 ProdSlices',
  'x-ms-clitelem',
  '1,70016,0,,',
  'Set-Cookie',
  'fpc=fpc;; expires=Mon, 03-May-2021 04:36:58 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Sat, 03 Apr 2021 04:36:57 GMT'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/organizations/oauth2/v2.0/token', "scope=https%3A%2F%2Fvault.azure.net%2F.default%20openid%20profile%20offline_access&client_id=04b07795-8ddb-461a-bbee-02f9e1bf7b46&grant_type=device_code&device_code=DEVICE_CODE&client-request-id=client-request-id&client_info=1")
  .reply(200, {"token_type":"Bearer","scope":"https://vault.azure.net/user_impersonation https://vault.azure.net/.default","expires_in":3599,"ext_expires_in":3599,"access_token":"access_token","refresh_token":"refresh_token","foci":"1","id_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImtpZCJ9.eyJhdWQiOiJhdWQiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vMTIzNDU2NzgtMTIzNC0xMjM0LTEyMzQtMTIzNDU2Nzg5MDEyL3YyLjAiLCJpYXQiOjE2MTUzMzcxNjMsIm5iZiI6MTYxNTMzNzE2MywiZXhwIjoxNjE1MzQxMDYzLCJhaW8iOiJhaW8iLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9pZHAvIiwibmFtZSI6IkRhbmllbCBSb2Ryw61ndWV6Iiwib2lkIjoib2lkIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiZGFucm9kcmlAbWljcm9zb2Z0LmNvbSIsInJoIjoicmguIiwic3ViIjoic3ViIiwidGlkIjoiMTIzNDU2NzgtMTIzNC0xMjM0LTEyMzQtMTIzNDU2Nzg5MDEyIiwidXRpIjoidXRpIiwidmVyIjoiMi4wIn0=.bm9faWRlYV93aGF0c190aGlz","client_info":"eyJ1aWQiOiIwMDAwMDAwMC0wMDAwLTAwMDAtY2Q5Mi04YTMwZTc2MmE4MmEiLCJ1dGlkIjoiOTE4ODA0MGQtNmM2Ny00YzViLWIxMTItMzZhMzA0YjY2ZGFkIn0"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '4757',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '578c071b-39ac-473d-a9da-6281de6fa100',
  'x-ms-ests-server',
  '2.1.11562.10 - SCUS ProdSlices',
  'x-ms-clitelem',
  '1,0,0,,',
  'Set-Cookie',
  'fpc=fpc;; expires=Mon, 03-May-2021 04:37:03 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Sat, 03 Apr 2021 04:37:02 GMT'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/common/discovery/instance')
  .query(true)
  .reply(200, {"tenant_discovery_endpoint":"https://login.microsoftonline.com/organizations/v2.0/.well-known/openid-configuration","api-version":"1.1","metadata":[{"preferred_network":"login.microsoftonline.com","preferred_cache":"login.windows.net","aliases":["login.microsoftonline.com","login.windows.net","login.microsoft.com","sts.windows.net"]},{"preferred_network":"login.partner.microsoftonline.cn","preferred_cache":"login.partner.microsoftonline.cn","aliases":["login.partner.microsoftonline.cn","login.chinacloudapi.cn"]},{"preferred_network":"login.microsoftonline.de","preferred_cache":"login.microsoftonline.de","aliases":["login.microsoftonline.de"]},{"preferred_network":"login.microsoftonline.us","preferred_cache":"login.microsoftonline.us","aliases":["login.microsoftonline.us","login.usgovcloudapi.net"]},{"preferred_network":"login-us.microsoftonline.com","preferred_cache":"login-us.microsoftonline.com","aliases":["login-us.microsoftonline.com"]}]}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Length',
  '957',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  'a4890c09-c43c-4feb-a448-7889c0337e00',
  'x-ms-ests-server',
  '2.1.11562.10 - NCUS ProdSlices',
  'Set-Cookie',
  'fpc=fpc;; expires=Mon, 03-May-2021 04:37:03 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=esctx; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Sat, 03 Apr 2021 04:37:02 GMT'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/organizations/v2.0/.well-known/openid-configuration')
  .reply(200, {"token_endpoint":"https://login.microsoftonline.com/organizations/oauth2/v2.0/token","token_endpoint_auth_methods_supported":["client_secret_post","private_key_jwt","client_secret_basic"],"jwks_uri":"https://login.microsoftonline.com/organizations/discovery/v2.0/keys","response_modes_supported":["query","fragment","form_post"],"subject_types_supported":["pairwise"],"id_token_signing_alg_values_supported":["RS256"],"response_types_supported":["code","id_token","code id_token","id_token token"],"scopes_supported":["openid","profile","email","offline_access"],"issuer":"https://login.microsoftonline.com/{tenantid}/v2.0","request_uri_parameter_supported":false,"userinfo_endpoint":"https://graph.microsoft.com/oidc/userinfo","authorization_endpoint":"https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize","device_authorization_endpoint":"https://login.microsoftonline.com/organizations/oauth2/v2.0/devicecode","http_logout_supported":true,"frontchannel_logout_supported":true,"end_session_endpoint":"https://login.microsoftonline.com/organizations/oauth2/v2.0/logout","claims_supported":["sub","iss","cloud_instance_name","cloud_instance_host_name","cloud_graph_host_name","msgraph_host","aud","exp","iat","auth_time","acr","nonce","preferred_username","name","tid","ver","at_hash","c_hash","email"],"tenant_region_scope":null,"cloud_instance_name":"microsoftonline.com","cloud_graph_host_name":"graph.windows.net","msgraph_host":"graph.microsoft.com","rbac_url":"https://pas.windows.net"}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Length',
  '1510',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '8d5b7d32-ab5b-483e-a40a-9f2d03d99100',
  'x-ms-ests-server',
  '2.1.11562.10 - EUS ProdSlices',
  'Set-Cookie',
  'fpc=fpc;; expires=Mon, 03-May-2021 04:37:04 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=esctx; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Sat, 03 Apr 2021 04:37:03 GMT'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/organizations/oauth2/v2.0/devicecode', "scope=https%3A%2F%2Fvault.azure.net%2F.default%20openid%20profile%20offline_access&client_id=04b07795-8ddb-461a-bbee-02f9e1bf7b46")
  .reply(200, {"user_code":"USER_CODE","device_code":"DEVICE_CODE","verification_uri":"https://microsoft.com/devicelogin","expires_in":900,"interval":5,"message":"To sign in, use a web browser to open the page https://microsoft.com/devicelogin and enter the code USER_CODE to authenticate."}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '473',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  'aac7f597-772e-48fe-ac05-04cefa900900',
  'x-ms-ests-server',
  '2.1.11562.10 - NCUS ProdSlices',
  'x-ms-clitelem',
  '1,0,0,,',
  'Set-Cookie',
  'fpc=fpc;; expires=Mon, 03-May-2021 04:37:04 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=esctx; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Sat, 03 Apr 2021 04:37:03 GMT'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/organizations/oauth2/v2.0/token', "scope=https%3A%2F%2Fvault.azure.net%2F.default%20openid%20profile%20offline_access&client_id=04b07795-8ddb-461a-bbee-02f9e1bf7b46&grant_type=device_code&device_code=DEVICE_CODE&client-request-id=client-request-id&client_info=1")
  .reply(400, {"error":"authorization_pending","error_description":"AADSTS70016: OAuth 2.0 device flow error. Authorization is pending. Continue polling.\r\nTrace ID: 9f72d1bd-0962-4134-88e8-645ef75a2200\r\nCorrelation ID: 5e0974e2-8e4a-4e7c-835c-03aadb5d2c3d\r\nTimestamp: 2021-04-03 04:37:10Z","error_codes":[70016],"timestamp":"2021-04-03 04:37:10Z","trace_id":"9f72d1bd-0962-4134-88e8-645ef75a2200","correlation_id":"5e0974e2-8e4a-4e7c-835c-03aadb5d2c3d","error_uri":"https://login.microsoftonline.com/error?code=70016"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '510',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '9f72d1bd-0962-4134-88e8-645ef75a2200',
  'x-ms-ests-server',
  '2.1.11622.19 - WUS2 ProdSlices',
  'x-ms-clitelem',
  '1,70016,0,,',
  'Set-Cookie',
  'fpc=fpc;; expires=Mon, 03-May-2021 04:37:10 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Sat, 03 Apr 2021 04:37:09 GMT'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/organizations/oauth2/v2.0/token', "scope=https%3A%2F%2Fvault.azure.net%2F.default%20openid%20profile%20offline_access&client_id=04b07795-8ddb-461a-bbee-02f9e1bf7b46&grant_type=device_code&device_code=DEVICE_CODE&client-request-id=client-request-id&client_info=1")
  .reply(400, {"error":"authorization_pending","error_description":"AADSTS70016: OAuth 2.0 device flow error. Authorization is pending. Continue polling.\r\nTrace ID: ba2bf36a-e2dd-43cb-ba01-e22dedfa3501\r\nCorrelation ID: 5e0974e2-8e4a-4e7c-835c-03aadb5d2c3d\r\nTimestamp: 2021-04-03 04:37:15Z","error_codes":[70016],"timestamp":"2021-04-03 04:37:15Z","trace_id":"ba2bf36a-e2dd-43cb-ba01-e22dedfa3501","correlation_id":"5e0974e2-8e4a-4e7c-835c-03aadb5d2c3d","error_uri":"https://login.microsoftonline.com/error?code=70016"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '510',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  'ba2bf36a-e2dd-43cb-ba01-e22dedfa3501',
  'x-ms-ests-server',
  '2.1.11562.10 - NCUS ProdSlices',
  'x-ms-clitelem',
  '1,70016,0,,',
  'Set-Cookie',
  'fpc=fpc;; expires=Mon, 03-May-2021 04:37:15 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Sat, 03 Apr 2021 04:37:14 GMT'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/organizations/oauth2/v2.0/token', "scope=https%3A%2F%2Fvault.azure.net%2F.default%20openid%20profile%20offline_access&client_id=04b07795-8ddb-461a-bbee-02f9e1bf7b46&grant_type=device_code&device_code=DEVICE_CODE&client-request-id=client-request-id&client_info=1")
  .reply(400, {"error":"authorization_pending","error_description":"AADSTS70016: OAuth 2.0 device flow error. Authorization is pending. Continue polling.\r\nTrace ID: 65e29d76-9ca4-4545-8aa8-cdfc14659f00\r\nCorrelation ID: 5e0974e2-8e4a-4e7c-835c-03aadb5d2c3d\r\nTimestamp: 2021-04-03 04:37:20Z","error_codes":[70016],"timestamp":"2021-04-03 04:37:20Z","trace_id":"65e29d76-9ca4-4545-8aa8-cdfc14659f00","correlation_id":"5e0974e2-8e4a-4e7c-835c-03aadb5d2c3d","error_uri":"https://login.microsoftonline.com/error?code=70016"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '510',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '65e29d76-9ca4-4545-8aa8-cdfc14659f00',
  'x-ms-ests-server',
  '2.1.11562.10 - WUS2 ProdSlices',
  'x-ms-clitelem',
  '1,70016,0,,',
  'Set-Cookie',
  'fpc=fpc;; expires=Mon, 03-May-2021 04:37:20 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Sat, 03 Apr 2021 04:37:20 GMT'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/organizations/oauth2/v2.0/token', "scope=https%3A%2F%2Fvault.azure.net%2F.default%20openid%20profile%20offline_access&client_id=04b07795-8ddb-461a-bbee-02f9e1bf7b46&grant_type=device_code&device_code=DEVICE_CODE&client-request-id=client-request-id&client_info=1")
  .reply(200, {"token_type":"Bearer","scope":"https://vault.azure.net/user_impersonation https://vault.azure.net/.default","expires_in":3599,"ext_expires_in":3599,"access_token":"access_token","refresh_token":"refresh_token","foci":"1","id_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImtpZCJ9.eyJhdWQiOiJhdWQiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vMTIzNDU2NzgtMTIzNC0xMjM0LTEyMzQtMTIzNDU2Nzg5MDEyL3YyLjAiLCJpYXQiOjE2MTUzMzcxNjMsIm5iZiI6MTYxNTMzNzE2MywiZXhwIjoxNjE1MzQxMDYzLCJhaW8iOiJhaW8iLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9pZHAvIiwibmFtZSI6IkRhbmllbCBSb2Ryw61ndWV6Iiwib2lkIjoib2lkIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiZGFucm9kcmlAbWljcm9zb2Z0LmNvbSIsInJoIjoicmguIiwic3ViIjoic3ViIiwidGlkIjoiMTIzNDU2NzgtMTIzNC0xMjM0LTEyMzQtMTIzNDU2Nzg5MDEyIiwidXRpIjoidXRpIiwidmVyIjoiMi4wIn0=.bm9faWRlYV93aGF0c190aGlz","client_info":"eyJ1aWQiOiIwMDAwMDAwMC0wMDAwLTAwMDAtY2Q5Mi04YTMwZTc2MmE4MmEiLCJ1dGlkIjoiOTE4ODA0MGQtNmM2Ny00YzViLWIxMTItMzZhMzA0YjY2ZGFkIn0"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '4757',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '113b5f01-954d-4fb5-ab8f-2b5ee6560d00',
  'x-ms-ests-server',
  '2.1.11562.10 - NCUS ProdSlices',
  'x-ms-clitelem',
  '1,0,0,,',
  'Set-Cookie',
  'fpc=fpc;; expires=Mon, 03-May-2021 04:37:25 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Sat, 03 Apr 2021 04:37:25 GMT'
]);
