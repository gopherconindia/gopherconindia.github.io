//! Copyright (c) Microsoft Corporation. All rights reserved.
var __extends=this&&this.__extends||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])
function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i}
!function(e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).OneDrive=e()}((function(){return function e(t,r,i){function n(a,s){if(!r[a]){if(!t[a]){var u="function"==typeof require&&require
if(!s&&u)return u(a,!0)
if(o)return o(a,!0)
var l=new Error("Cannot find module '"+a+"'")
throw l.code="MODULE_NOT_FOUND",l}var d=r[a]={exports:{}}
t[a][0].call(d.exports,(function(e){return n(t[a][1][e]||e)}),d,d.exports,e,t,r,i)}return r[a].exports}for(var o="function"==typeof require&&require,a=0;a<i.length;a++)n(i[a])
return n}({1:[function(e,t,r){!function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function e(){}e.SDK_VERSION="js-v"+(e.SDK_VERSION_NUMBER="7.2")
e.TYPE_BOOLEAN="boolean"
e.TYPE_FUNCTION="function"
e.TYPE_OBJECT="object"
e.TYPE_STRING="string"
e.TYPE_NUMBER="number"
e.VROOM_URL="https://api.onedrive.com/v1.0/"
e.VROOM_ENDPOINT_HINT="api.onedrive.com"
e.GRAPH_URL="https://graph.microsoft.com/v1.0/"
e.NONCE_LENGTH=5
e.CUSTOMER_TID="9188040d-6c67-4c5b-b112-36a304b66dad"
e.DEFAULT_QUERY_ITEM_PARAMETER="select=id"
return e}()
t.default=r}(0,r)},{}],2:[function(e,t,r){t.exports=function(e,t,r,i){"use strict"
var n=function(){function e(){}e.open=function(e){r.default.open(e)}
e.save=function(e){r.default.save(e)}
return e}()
i.onAuth()
return n}(0,0,e("./OneDriveApp"),e("./controllers/Oauth"))},{"./OneDriveApp":3,"./controllers/Oauth":7}],3:[function(e,t,r){!function(e,t,r,i,n,o,a,s){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var u=function(){function e(){}e.open=function(t){if(e.isReady()){t||r.throwError(new o.default(i.default.unknown,"missing picker options")).exposeToPublic()
n.default.logMessage("open started")
new a.default(t).launchInvoker().then((function(){e.reset()}))}}
e.save=function(t){if(e.isReady()){t||r.throwError(new o.default(i.default.unknown,"missing saver options"))
n.default.logMessage("save started")
new s.default(t).launchInvoker().then((function(){e.reset()}))}}
e.reset=function(){e.checked=!1}
e.isReady=function(){return!e.checked&&(e.checked=!0)}
e.checked=!1
return e}()
t.default=u}(0,r,e("./utilities/ErrorHandler"),e("./models/ErrorType"),e("./utilities/Logging"),e("./models/OneDriveSdkError"),e("./controllers/Picker"),e("./controllers/Saver"))},{"./controllers/Picker":8,"./controllers/Saver":10,"./models/ErrorType":13,"./models/OneDriveSdkError":16,"./utilities/ErrorHandler":26,"./utilities/Logging":27}],4:[function(e,t,r){!function(e,t,r,i,n,o,a,s,u,l,d){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
function c(e,t,r){var o=f(e,t.apiEndpointUrl)
r&&(o=u.appendToPath(o,"?"+r))
var a=new l.default({url:o,clientId:t.clientId,method:l.default.HTTP_GET,apiEndpoint:t.apiEndpoint,headers:{Authorization:"bearer "+t.accessToken}})
n.default.logMessage("performing GET on item with id: "+e.id)
return new d.Promise((function(e,t){a.start((function(t,r){var i=JSON.parse(t.responseText)
e(i)}),(function(e,r,n){t({errorCode:i.default[i.default.webRequestFailure],message:"HTTP error status: "+r})}))}))}t.getItem=c
t.getItems=function(e,t,r){for(var i=[],o={webUrl:null,value:[]},a=0,s=e.value;a<s.length;a++){var u=s[a]
i.push(c(u,t,r))}return d.Promise.all(i).then((function(e){o.value=e
return o}),(function(e){n.default.logError("Received ajax error.",e)
return e}))}
function p(e,t,r){var o=u.appendToPath(f(e,t.apiEndpointUrl),s.format("{0}.createLink",t.apiActionNamingSpace)),a=new l.default({url:o,clientId:t.clientId,method:l.default.HTTP_POST,apiEndpoint:t.apiEndpoint,headers:{Authorization:"bearer "+t.accessToken},json:JSON.stringify(r)})
return new d.Promise((function(t,r){a.start((function(r,i,a){n.default.logMessage(s.format("POST createLink succeeded via path {0}",o))
e.permissions=[JSON.parse(r.responseText)]
t(e)}),(function(e,t,a){n.default.logMessage(s.format("POST createLink failed via path {0}",o))
r({errorCode:i.default[i.default.webRequestFailure],message:t})}))}))}t.shareItem=p
t.shareItems=function(e,t,r){for(var i=[],o={webUrl:null,value:[]},a=0,s=e.value;a<s.length;a++){var u=s[a]
i.push(p(u,t,r))}return d.Promise.all(i).then((function(e){o.value=e
return o}),(function(e){n.default.logError("Received sharing error.",e)
return e}))}
t.saveItemByFormUpload=function(e,t,r,o,c){var p=null
return new d.Promise((function(d,h){window.File&&r instanceof window.File?p=new FileReader:h(new a.default(i.default.unsupportedFeature,"FileReader is not supported in this browser"))
p.onerror=function(e){n.default.logError("failed to read or upload the file",e)
h(new a.default(i.default.fileReaderFailure,"failed to read or upload the file, see console log for details"))}
p.onload=function(r){var n=u.appendToPath(f(e,o.apiEndpointUrl),"children('"+t.name+"')/content"),p={}
p["@name.conflictBehavior"]=t["@name.conflictBehavior"]
var v={}
v.Authorization="bearer "+o.accessToken
v["Content-Type"]="multipart/form-data"
var m=new l.default({url:u.appendQueryStrings(n,p),clientId:o.clientId,headers:v,apiEndpoint:o.apiEndpoint}),g=r.target.result
m.upload(g,(function(e,t){d({webUrl:null,value:[JSON.parse(e.responseText)]})}),(function(e,t,r){h(new a.default(i.default.webRequestFailure,s.format("file uploading failed by form uplaod with HTTP status: {0}",t)))}),(function(e,t){c(t.progressPercentage)}))}
p.readAsArrayBuffer(r)}))}
t.saveItemByUriUpload=function(e,t,n,p){if(p.apiEndpoint===r.default.filesV2||p.apiEndpoint===r.default.graph_odb)return new d.Promise((function(e,t){t(new a.default(i.default.unsupportedFeature,"URL upload not supported for OneDrive business"))}))
var h,v=u.appendToPath(f(e,p.apiEndpointUrl),"children"),m={Prefer:"respond-async"}
m.Authorization="bearer "+p.accessToken
t[(h=p.apiEndpoint,h===r.default.graph_odb||h===r.default.graph_odc?"@microsoft.graph.sourceUrl":"@content.sourceUrl")]=n
t.file={}
var g,y,_=new l.default({url:v,clientId:p.clientId,method:l.default.HTTP_POST,headers:m,json:JSON.stringify(t),apiEndpoint:p.apiEndpoint})
return u.isPathDataUrl(n)?(y=_,new d.Promise((function(e,t){y.start((function(r,n){if(200===n||201===n){var u={webUrl:null,value:[o.deserializeJSON(r.responseText)]}
e(u)}else t(new a.default(i.default.webRequestFailure,s.format("file uploading failed by data uri with HTTP status: {0}",n)))}),(function(e,r,n){t(new a.default(i.default.webRequestFailure,s.format("file uploading failed with HTTP status: {0}",r)))}))}))):u.isPathFullUrl(n)?(g=_,new d.Promise((function(e,t){g.start((function(r,n){if(202===n){var o=r.getResponseHeader("Location")
o||t({errorCode:i.default.badResponse,message:"missing 'Location' header on response"})
e(o)}else t(new a.default(i.default.webRequestFailure,s.format("create upload by url job failed with HTTP status: {0}",n)))}),(function(e,r,n){t(new a.default(i.default.webRequestFailure,s.format("create upload by url job failed with HTTP status: {0}",r)))}))}))).then((function(e){return(t=e,new d.Promise((function(e,r){!function n(u,c){if(!u--){c*=2
u=5}(p=t,f=new l.default({url:p,method:l.default.HTTP_GET}),new d.Promise((function(e,t){f.start((function(r,n){switch(n){case 202:case 200:var u=o.deserializeJSON(r.responseText)
e(u)
break
default:t(new a.default(i.default.webRequestFailure,s.format("polling upload job failed with HTTP status: {0}",n)))}}),(function(e,r,n){t(new a.default(i.default.webRequestFailure,s.format("polling upload job failed with HTTP status: {0}",r)))}))}))).then((function(t){t.resourceId?e(t.resourceId):c<=18e5?setTimeout(n(u,c),c):r(new a.default(i.default.webRequestFailure,"polling the uploading job takes too much time"))}))
var p,f}(5,100)}))).then((function(e){return c({id:e},p).then((function(e){var t={webUrl:null,value:[e]}
return d.Promise.resolve(t)}))}))
var t})):void 0}
t.getUserTenantUrl=function(e){var t=u.appendQueryString(u.appendToPath(e.apiEndpointUrl,"me"),"$select","mySite"),r={}
r.Authorization="bearer "+e.accessToken
r.Accept="application/json"
var n=new l.default({url:t,clientId:e.clientId,method:l.default.HTTP_GET,headers:r,apiEndpoint:e.apiEndpoint})
return new d.Promise((function(e,t){n.start((function(r,n){var u=o.deserializeJSON(r.responseText)
u.mySite?e(u.mySite):t(new a.default(i.default.badResponse,s.format("Cannot find the personal tenant url, response text: {0}",r.responseText)))}),(function(e,r,n){t(new a.default(i.default.webRequestFailure,s.format("graph/me request failed, status code: '{0}', response text: '{1}'",l.default.statusCodeToString(r),e.responseText)))}))}))}
function f(e,t){var r
r=e.parentReference&&e.parentReference.driveId?u.appendToPath("drives",e.parentReference.driveId):"drive"
r=u.appendToPath(r,"root"===e.id?"root":"items/"+e.id)
return u.appendToPath(t,r)}}(0,r,e("../models/ApiEndpoint"),e("../models/ErrorType"),e("../utilities/Logging"),e("../utilities/ObjectUtilities"),e("../models/OneDriveSdkError"),e("../utilities/StringUtilities"),e("../utilities/UrlUtilities"),e("../utilities/XHR"),e("es6-promise"))},{"../models/ApiEndpoint":11,"../models/ErrorType":13,"../models/OneDriveSdkError":16,"../utilities/Logging":27,"../utilities/ObjectUtilities":28,"../utilities/StringUtilities":30,"../utilities/UrlUtilities":32,"../utilities/XHR":33,"es6-promise":34}],5:[function(e,t,r){!function(e,t,r,i,n,o,a,s,u,l,d,c,p,f,h,v,m){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var g=function(){function e(e){this.invokerOptions=e
this.popup=new f.default}e.prototype.launchInvoker=function(){var e=this,t=this.invokerOptions
return this.launch().catch((function(e){u.default.logError("Failed due to unknown error: ",e)
t.error(e)})).then((function(){e.cleanPopupAndIFrame()}))}
e.prototype.launch=function(e){var t=this
return this.buildOauthPromise(e).then((function(e){return e&&"cancel"===e.type?e:t.buildPickerUI(e)})).then((function(e){var r=t.invokerOptions
e.type||a.throwError(new c.default(s.default.badResponse,v.format("received bad response from picker UX: {0}",JSON.stringify(e)))).exposeToPublic()
if("switch"===e.type)return t.launch(!0)
if("success"===e.type){for(var i=[],u=!1,l=0,d=e.items;l<d.length;l++){var p=d[l]
p.driveItem&&!u&&(u=!0)
i.push(p)}var f={webUrl:null,value:i},m=void 0
if(!r.needAPICall()||u&&"rps"===r.accessToken.toLowerCase())m=h.Promise.resolve(f)
else{t.apiRequestConfig=t.buildApiConfig()
m=t.makeApiRequest(f)}return m.then((function(e){t.oauthResponse&&(e.accessToken=t.oauthResponse.accessToken)
t.apiRequestConfig?e.apiEndpoint=t.apiRequestConfig.apiEndpointUrl:t.loginHint&&t.loginHint.endpointHint===o.default.aad&&(e.apiEndpoint=n.default.GRAPH_URL)
r.success(e)
return e}))}if("cancel"===e.type){r.cancel()
return h.Promise.resolve({webUrl:null,value:null})}}))}
e.prototype.buildOauthPromise=function(e){return e||this.invokerOptions.needOauth()?d.auth(d.buildOauthConfig(this.invokerOptions,e),this.popup):h.Promise.resolve(null)}
e.prototype.buildPickerUI=function(e){var t,n=this
if(e){this.oauthResponse=e
t=l.updateLoginHint(this.invokerOptions.clientId,this.oauthResponse.idToken,this.invokerOptions)}else{this.invokerOptions.endpointHint!==o.default.msa&&this.invokerOptions.endpointHint!==o.default.tenant&&a.throwError(new c.default(s.default.optionsError,"must specify the endpointHint in advanced options as 'api.onedrive.com' for customer picker or the url for business picker/tenant")).exposeToPublic()
var u=this.invokerOptions.endpointHint===o.default.msa
t={loginHint:null,timeStamp:null,apiEndpoint:u?r.default.msa:r.default.filesV2,endpointHint:u?o.default.msa:o.default.tenant,isConsumerAccount:u}}return((this.loginHint=t).apiEndpoint===r.default.graph_odb?i.getUserTenantUrl(this.buildApiConfig()):h.Promise.resolve(void 0)).then((function(e){n.pickerUX=p.generatePickerUX(t.apiEndpoint,t.endpointHint===o.default.tenant?n.invokerOptions.siteUrl:e)
var r=n.buildPickerUXConfig(n.invokerOptions)
n.invokerOptions.navEntryLocation&&(r.entryLocation=n.invokerOptions.navEntryLocation)
n.invokerOptions.navSourceTypes&&(r.sourceTypes=n.invokerOptions.navSourceTypes)
n.invokerOptions.linkType&&(r.linkType=n.invokerOptions.linkType)
r.trapFocus=n.invokerOptions.trapFocus
return n.pickerUX.invokePickerUX(r,n.popup)}))}
e.prototype.getApiRequestConfig=function(){return this.apiRequestConfig}
e.prototype.buildApiConfig=function(){this.loginHint||a.throwError(new c.default(s.default.internalError,"missing loginHint when trying to build API request")).exposeToPublic()
this.oauthResponse||this.invokerOptions.accessToken||a.throwError(new c.default(s.default.internalError,"missing access token when trying to build API request")).exposeToPublic()
var e=null,t=null
switch(this.loginHint.apiEndpoint){case r.default.graph_odb:case r.default.graph_odc:e=n.default.GRAPH_URL
t="microsoft.graph"
break
case r.default.msa:e=n.default.VROOM_URL
t="action"
break
case r.default.filesV2:e=m.appendToPath(this.invokerOptions.siteUrl,"_api/v2.0/")
t="action"
break
default:a.throwError(new c.default(s.default.internalError,"apiEndpoint in loginHint is not correct"))}return{accessToken:this.oauthResponse?this.oauthResponse.accessToken:this.invokerOptions.accessToken,apiEndpoint:this.loginHint.apiEndpoint,apiEndpointUrl:e,apiActionNamingSpace:t,clientId:this.invokerOptions.clientId}}
e.prototype.cleanPopupAndIFrame=function(){this.popup&&this.popup.close()
this.pickerUX&&this.pickerUX.removeIFrame()}
return e}()
t.default=g}(0,r,e("../models/ApiEndpoint"),e("./ApiRequest"),e("../Constants"),e("../models/DomainHint"),e("../utilities/ErrorHandler"),e("../models/ErrorType"),e("../utilities/Logging"),e("./LoginCache"),e("./Oauth"),e("../models/OneDriveSdkError"),e("./PickerUX"),e("../utilities/Popup"),e("es6-promise"),e("../utilities/StringUtilities"),e("../utilities/UrlUtilities"))},{"../Constants":1,"../models/ApiEndpoint":11,"../models/DomainHint":12,"../models/ErrorType":13,"../models/OneDriveSdkError":16,"../utilities/ErrorHandler":26,"../utilities/Logging":27,"../utilities/Popup":29,"../utilities/StringUtilities":30,"../utilities/UrlUtilities":32,"./ApiRequest":4,"./LoginCache":6,"./Oauth":7,"./PickerUX":9,"es6-promise":34}],6:[function(e,t,r){!function(e,t,r,i,n,o,a,s,u,l){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var d="preferred_username",c="odsdkLoginHint"
t.getLoginHint=function(e){e||a.throwError(new u.default(s.default.optionsError,"invoker option is not defined!"))
var t=(i.getCacheItem(c)||{})["od7-"+e.clientId]
return t?e.endpointHint!==t.endpointHint||e.loginHint&&e.loginHint!==t.loginHint?null:t:null}
t.loginHintExpired=function(){var e=i.getCacheItem(c)
return 36e5<(new Date).getTime()-e.timeStamp}
t.updateLoginHint=function(e,t,a){var s,u,l,d
switch(a.endpointHint){case o.default.aad:var p=this.parseIdToken(t)
s=p.preferredUserName
if(p.tid===n.default.CUSTOMER_TID){l=r.default.graph_odc
d=!0}else{l=r.default.graph_odb
d=!1}u=o.default.aad
break
case o.default.msa:l=r.default.msa
u=o.default.msa
s=a.loginHint
d=!0
break
case o.default.tenant:l=r.default.filesV2
u=o.default.tenant
s=a.loginHint
d=!1}var f={apiEndpoint:l,loginHint:s,endpointHint:u,timeStamp:(new Date).getTime(),isConsumerAccount:d},h=i.getCacheItem(c)||{}
h["od7-"+e]=f
i.setCacheItem(c,h)
return f}
t.parseIdToken=function(e){e||a.throwError(new u.default(s.default.badResponse,"id_token is missing in oauth response"))
var t=e.split(".")[1].replace("-","+").replace("_","/"),r=l.deserializeJSON(atob(t))
r.tid||a.throwError(new u.default(s.default.badResponse,"tid is missing in id_token response"))
r[d]||a.throwError(new u.default(s.default.badResponse,"preferred_username is missing in id_token response"))
return{tid:r.tid,preferredUserName:r[d]}}}(0,r,e("../models/ApiEndpoint"),e("../utilities/Cache"),e("../Constants"),e("../models/DomainHint"),e("../utilities/ErrorHandler"),e("../models/ErrorType"),e("../models/OneDriveSdkError"),e("../utilities/ObjectUtilities"))},{"../Constants":1,"../models/ApiEndpoint":11,"../models/DomainHint":12,"../models/ErrorType":13,"../models/OneDriveSdkError":16,"../utilities/Cache":22,"../utilities/ErrorHandler":26,"../utilities/ObjectUtilities":28}],7:[function(e,t,r){!function(e,t,r,i,n,o,a,s,u,l,d,c){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var p="access_token",f="error",h="oauth",v="state",m="[OneDriveSDK-OauthResponse]"
t.onAuth=function(){n.onDocumentReady((function(){var e=c.readCurrentUrlParameters();(e[h]||(e[f]||e[p])&&e[v])&&window.opener&&g(e,new r.default(window.opener))}))}
function g(e,t){n.displayOverlay()
e[h]?function(e){var t,r,i,n,s
switch(e.endpoint){case u.default.AAD:t=(s=e,c.appendQueryStrings("https://login.microsoftonline.com/common/oauth2/authorize",{redirect_uri:s.redirectUri,client_id:s.clientId,response_type:"token",state:s.state,resource:s.origin}))
break
case u.default.AADv2:t=(i="profile openid https://graph.microsoft.com/User.Read "+(r=e).scopes.map((function(e){return"https://graph.microsoft.com/"+e})).join(" "),n=c.appendQueryStrings("https://login.microsoftonline.com/common/oauth2/v2.0/authorize",{redirect_uri:r.redirectUri,client_id:r.clientId,scope:i,response_mode:"fragment",state:r.state,nonce:c.generateNonce()}),n+="&response_type=id_token+token")
break
case u.default.MSA:t=function(e){for(var t=!1,r=0,i=e.scopes;r<i.length;r++){var n=i[r]
t=t||1<n.toLowerCase().indexOf("readwrite")}return c.appendQueryStrings("https://login.live.com/oauth20_authorize.srf",{redirect_uri:e.redirectUri,client_id:e.clientId,response_type:"token",state:e.state,scope:"onedrive."+(t?"readwrite":"readonly")})}(e)
break
default:o.throwError(new l.default(a.default.badResponse,"received bad oauth endpoint, endpoint value is: "+e.endpoint))}if(e.switchAccount)t=c.appendQueryString(t,"prompt","select_account")
else if(e.loginHint){t=c.appendQueryString(t,"login_hint",e.loginHint)
t=c.appendQueryString(t,"domain_hint",e.isConsumerAccount?"consumers":"organizations")}c.redirect(t)}(JSON.parse(e[h])):e[f]?y((i=e,{type:"error",error:new l.default(a.default.badResponse,i.error_description),state:i[v]}),t):e[p]&&y({type:"success",accessToken:(r=e)[p],idToken:r.id_token,state:r[v]},t)
var r,i}t.handleOauth=g
function y(e,t){if(e.state){var r=e.state.split("_")
2!==r.length&&o.throwError(new l.default(a.default.badResponse,"received bad state parameter from Oauth endpoint, state received: "+e.state)).exposeToPublic()
var i=r[0]
t?t.send(m+JSON.stringify(e),i):o.throwError(new l.default(a.default.popupOpen,"opener is not defined")).exposeToPublic()}else o.throwError(new l.default(a.default.badResponse,"missing state parameter from Oauth redirect")).exposeToPublic()}t.auth=function(e,t){var r=document.location.origin+"_"+c.generateNonce()
e.state=r
return new d.Promise((function(i,o){var s=n.onMessage((function(e){if(e.data&&0===e.data.indexOf(m)){var u=JSON.parse(e.data.substring(27))
if(u.state===r&&e.source===t.getPopupWindow()){n.removeMessageListener(s)
if("error"===u.type||u.error){var d=a.default[u.error.errorCode]
o(new l.default(d,u.error.message))}else i(u)}else o(new l.default(a.default.popupOpen,"Another popup is already opened."))}}))
return t.openPopup(c.appendQueryString(e.redirectUri,h,JSON.stringify(e))).then((function(){i({type:"cancel",state:r})}))}))}
t.buildOauthConfig=function(e,t){var r
switch(e.endpointHint){case i.default.aad:r=u.default.AADv2
break
case i.default.msa:r=u.default.MSA
break
case i.default.tenant:r=u.default.AAD}var n=e.scopes.map((function(t){return t+(-1<t.indexOf("Files.")&&e.needSharePointPermission?".All":"")})),o={clientId:e.clientId,endpoint:r,scopes:n,origin:window.location.origin,redirectUri:e.redirectUri,switchAccount:t},a=s.getLoginHint(e)
if(e.loginHint){o.loginHint=e.loginHint
o.isConsumerAccount=e.isConsumerAccount}else if(a){o.loginHint=a.loginHint
o.isConsumerAccount=a.isConsumerAccount}return o}}(0,r,e("../utilities/Channel"),e("../models/DomainHint"),e("../utilities/DomUtilities"),e("../utilities/ErrorHandler"),e("../models/ErrorType"),e("./LoginCache"),e("../models/OauthEndpoint"),e("../models/OneDriveSdkError"),e("es6-promise"),e("../utilities/UrlUtilities"))},{"../models/DomainHint":12,"../models/ErrorType":13,"../models/OauthEndpoint":15,"../models/OneDriveSdkError":16,"../utilities/Channel":24,"../utilities/DomUtilities":25,"../utilities/ErrorHandler":26,"../utilities/UrlUtilities":32,"./LoginCache":6,"es6-promise":34}],8:[function(e,t,r){!function(e,t,r,i,n,o,a,s,u,l,d){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var c=function(e){__extends(t,e)
function t(t){var r=a.shallowClone(t),i=new s.default(r)
return e.call(this,i)||this}t.prototype.buildPickerUXConfig=function(e){return{applicationId:e.clientId,accessLevel:t.ACCESS_LEVEL,filter:e.filter,id:d.generateNonce(),navEnabled:e.navEnabled,origin:window.location.origin,parentDiv:e.parentDiv,redirectUri:e.redirectUri,selectionMode:e.multiSelect?"multiple":"single",viewType:t.VIEW_TYPE}}
t.prototype.makeApiRequest=function(e){if(this.invokerOptions.action===u.default.share)return this.shareItems(e)
var t=this.invokerOptions.action===u.default.download
return this.queryItems(e,t)}
t.prototype.queryItems=function(e,t){var r=this.invokerOptions.queryParameters||n.default.DEFAULT_QUERY_ITEM_PARAMETER
t&&(r=l.format("{0}{1}{2}",r,-1===r.indexOf("select")?"&select=":",","name,size,@content.downloadUrl"))
return i.getItems(e,this.getApiRequestConfig(),r)}
t.prototype.shareItems=function(e){var t=this,r=this.invokerOptions.createLinkParameters||this.getDefaultSharingConfig()
return i.getItems(e,this.getApiRequestConfig()).then((function(e){return i.shareItems(e,t.getApiRequestConfig(),r)}))}
t.prototype.getDefaultSharingConfig=function(){var e={type:"view"}
if(this.getApiRequestConfig().apiEndpoint===r.default.graph_odc||this.getApiRequestConfig().apiEndpoint===r.default.msa)return e
e.scope="organization"
return e}
t.ACCESS_LEVEL="read"
t.VIEW_TYPE="files"
return t}(o.default)
t.default=c}(0,r,e("../models/ApiEndpoint"),e("./ApiRequest"),e("../Constants"),e("./Invoker"),e("../utilities/ObjectUtilities"),e("../models/PickerOptions"),e("../models/PickerActionType"),e("../utilities/StringUtilities"),e("../utilities/UrlUtilities"))},{"../Constants":1,"../models/ApiEndpoint":11,"../models/PickerActionType":17,"../models/PickerOptions":18,"../utilities/ObjectUtilities":28,"../utilities/StringUtilities":30,"../utilities/UrlUtilities":32,"./ApiRequest":4,"./Invoker":5}],9:[function(e,t,r){!function(e,t,r,i,n,o,a,s,u,l,d,c){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var p="[OneDrive-FromPicker]"
t.generatePickerUX=function(e,t){return new f(e,t)}
var f=function(){function e(e,t){if(e===r.default.graph_odc||e===r.default.msa)this.url=l.appendQueryStrings("https://onedrive.live.com/",{v:"2"})
else if(e===r.default.graph_odb||e===r.default.filesV2){t||o.throwError(new u.default(a.default.optionsError,"the site url must be specified")).exposeToPublic()
l.validateUrlProtocol(t,["HTTPS"])
e===r.default.graph_odb&&(t=l.appendToPath(t,"_layouts/onedrive.aspx"))
this.url=l.appendQueryString(t,"p","2")}}e.prototype.invokePickerUX=function(e,t){var r=this
return new d.Promise((function(o,a){var u=n.onMessage((function(a){var s=r.url.split("/"),l=new i.default(r.iframe?r.iframe.contentWindow:t.getPopupWindow())
if(a.origin===s[0]+"//"+s[2]){var d=""+(a.data||"")
if(0===d.indexOf(p)&&a.source===l.getReceiver()){var c=JSON.parse(d.substring(21)),f=c.pickerId,h=c.conversationId,v=c.type
if(f===e.id)if("initialize"===v)l.send("[OneDrive-ToPicker]"+JSON.stringify({pickerId:f,conversationId:h,type:"activate"}),a.origin)
else{o(c)
n.removeMessageListener(u)}}}})),d={aid:e.applicationId,a:e.accessLevel,id:e.id,l:e.linkType,ln:e.navEnabled,s:e.selectionMode,f:e.filter,v:e.viewType,ru:e.redirectUri,o:e.origin,sdk:c.default.SDK_VERSION_NUMBER,e:e.entryLocation,st:e.sourceTypes,sn:!e.parentDiv,ss:!e.parentDiv,tf:e.trapFocus},f=l.appendQueryString(r.url,"picker",JSON.stringify(d))
s.default.logMessage("invoke picker with url: "+f)
if(!e.parentDiv)return t.openPopup(f).then((function(){o({type:"cancel"})}))
t.close()
var h=document.createElement("iframe")
h.id="odpicker"+(new Date).getTime()
h.style.position="relative"
h.style.width="100%"
h.style.height="100%"
h.src=f
e.parentDiv.appendChild(h)
r.iframe=h}))}
e.prototype.removeIFrame=function(){if(this.iframe){this.iframe.parentNode.removeChild(this.iframe)
this.iframe=null}}
return e}()
t.default=f}(0,r,e("../models/ApiEndpoint"),e("../utilities/Channel"),e("../utilities/DomUtilities"),e("../utilities/ErrorHandler"),e("../models/ErrorType"),e("../utilities/Logging"),e("../models/OneDriveSdkError"),e("../utilities/UrlUtilities"),e("es6-promise"),e("../Constants"))},{"../Constants":1,"../models/ApiEndpoint":11,"../models/ErrorType":13,"../models/OneDriveSdkError":16,"../utilities/Channel":24,"../utilities/DomUtilities":25,"../utilities/ErrorHandler":26,"../utilities/Logging":27,"../utilities/UrlUtilities":32,"es6-promise":34}],10:[function(e,t,r){!function(e,t,r,i,n,o,a,s,u,l){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var d=function(e){__extends(t,e)
function t(t){var r=o.shallowClone(t),i=new s.default(r)
return e.call(this,i)||this}t.prototype.buildPickerUXConfig=function(e){return{applicationId:e.clientId,accessLevel:"readwrite",id:l.generateNonce(),navEnabled:e.navEnabled,filter:e.filter,origin:window.location.origin,parentDiv:e.parentDiv,redirectUri:e.redirectUri,selectionMode:"single",viewType:"folders"}}
t.prototype.makeApiRequest=function(e){var t=this.invokerOptions
if(this.invokerOptions.action===a.default.query){var n=this.invokerOptions.queryParameters||i.default.DEFAULT_QUERY_ITEM_PARAMETER
return r.getItems(e,this.apiRequestConfig,n)}if(t.uploadType===u.default.dataUrl||t.uploadType===u.default.url){var o={name:t.fileName}
return r.saveItemByUriUpload(e.value[0],o,t.sourceUri,this.apiRequestConfig)}if(t.uploadType===u.default.form){o={name:t.fileName,"@name.conflictBehavior":t.nameConflictBehavior}
return r.saveItemByFormUpload(e.value[0],o,t.fileInput,this.apiRequestConfig,t.progress)}}
return t}(n.default)
t.default=d}(0,r,e("./ApiRequest"),e("../Constants"),e("./Invoker"),e("../utilities/ObjectUtilities"),e("../models/SaverActionType"),e("../models/SaverOptions"),e("../models/UploadType"),e("../utilities/UrlUtilities"))},{"../Constants":1,"../models/SaverActionType":19,"../models/SaverOptions":20,"../models/UploadType":21,"../utilities/ObjectUtilities":28,"../utilities/UrlUtilities":32,"./ApiRequest":4,"./Invoker":5}],11:[function(e,t,r){!function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r
!function(e){e[e.filesV2=0]="filesV2"
e[e.graph_odc=1]="graph_odc"
e[e.graph_odb=2]="graph_odb"
e[e.msa=3]="msa"}(r||(r={}))
t.default=r}(0,r)},{}],12:[function(e,t,r){!function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r
!function(e){e[e.aad=0]="aad"
e[e.msa=1]="msa"
e[e.tenant=2]="tenant"}(r||(r={}))
t.default=r}(0,r)},{}],13:[function(e,t,r){!function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r
!function(e){e[e.badResponse=0]="badResponse"
e[e.fileReaderFailure=1]="fileReaderFailure"
e[e.popupOpen=2]="popupOpen"
e[e.unknown=3]="unknown"
e[e.unsupportedFeature=4]="unsupportedFeature"
e[e.webRequestFailure=5]="webRequestFailure"
e[e.internalError=6]="internalError"
e[e.optionsError=7]="optionsError"
e[e.typeError=8]="typeError"
e[e.popupClosed=9]="popupClosed"}(r||(r={}))
t.default=r}(0,r)},{}],14:[function(e,t,r){!function(e,t,r,i,n,o,a,s,u,l,d,c){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var p=new RegExp("^[a-fA-F\\d]{8}-([a-fA-F\\d]{4}-){3}[a-fA-F\\d]{12}$"),f=function(){function e(t){this.navEnabled=!0
this.needSharePointPermission=!0
this.clientId=d.validateType(t.clientId,i.default.TYPE_STRING)
var o=d.validateCallback(t.cancel,!0)
this.cancel=function(){s.default.logMessage("user cancelled operation")
o&&r.invokeAppCallback(o,!0)}
var a=d.validateCallback(t.error,!0)
this.error=function(e){if(!a)throw e
r.invokeAppCallback(a,!0,e)}
this.parseAdvancedOptions(t)
this.redirectUri=this.redirectUri||c.trimUrlQuery(window.location.href)
this.endpointHint=this.endpointHint||n.default.aad
e.checkClientId(this.clientId)}e.checkClientId=function(e){e?p.test(e)?s.default.logMessage("parsed client id: "+e):o.throwError(new u.default(a.default.unknown,l.format("invalid format for client id '{0}' - AAD: 32 characters (HEX) GUID",e))):o.throwError(new u.default(a.default.unknown,"client id is missing in options"))}
e.prototype.needOauth=function(){return this.needAPICall()&&!this.accessToken||this.endpointHint===n.default.aad}
e.prototype.parseAdvancedOptions=function(e){if(e.advanced){if(e.advanced.redirectUri){c.validateRedirectUrlHost(e.advanced.redirectUri)
this.redirectUri=e.advanced.redirectUri}if(e.advanced.queryParameters){var t=c.readUrlParameters("?"+e.advanced.queryParameters)
for(var r in t)"select"!==r.toLowerCase()&&"expand"!==r.toLowerCase()&&o.throwError(new u.default(a.default.optionsError,l.format("unexpected query key: {0} is found in advanced.queryParameters",r)))
var s=t.select,p=t.expand
s&&p?this.queryParameters=l.format("expand={0}&select={1}",p,s):p?this.queryParameters=l.format("expand={0}",p):s&&"select="+s.split(",").sort().join(",")!==i.default.DEFAULT_QUERY_ITEM_PARAMETER&&(this.queryParameters=l.format("select={0}",s))}if(e.advanced.endpointHint){if(e.advanced.endpointHint.toLowerCase()===i.default.VROOM_ENDPOINT_HINT){this.endpointHint=n.default.msa
void 0===e.advanced.isConsumerAccount&&(this.isConsumerAccount=!0)}else{var f=d.validateType(e.advanced.endpointHint,"string",!1)
c.validateUrlProtocol(f)
this.endpointHint=n.default.tenant
void 0===e.advanced.isConsumerAccount&&(this.isConsumerAccount=!1)
this.siteUrl=f}e.advanced.accessToken&&(this.accessToken=e.advanced.accessToken)}if(e.advanced.iframeParentDiv){e.advanced.iframeParentDiv.nodeName&&"div"===e.advanced.iframeParentDiv.nodeName.toLowerCase()||o.throwError(new u.default(a.default.optionsError,"the iframe's parent div element is not a DOM object")).exposeToPublic()
this.parentDiv=e.advanced.iframeParentDiv}e.advanced.scopes&&("string"==typeof e.advanced.scopes?this.scopes=[e.advanced.scopes]:e.advanced.scopes instanceof Array&&(this.scopes=e.advanced.scopes))
this.linkType=e.advanced.linkType
this.parseNavigationOptions(e.advanced.navigation)
this.loginHint=e.advanced.loginHint
this.trapFocus=e.advanced.trapFocus
"boolean"==typeof e.advanced.isConsumerAccount&&(this.isConsumerAccount=e.advanced.isConsumerAccount)
this.filter=e.advanced.filter}}
e.prototype.parseNavigationOptions=function(e){if(e){var t=e.entryLocation
if(t){if(t.sharePoint){var r=t.sharePoint,i=r.sitePath,n=r.listPath
i&&c.validateUrlProtocol(i,["HTTPS"])
n&&c.validateUrlProtocol(n,["HTTPS"])}this.navEntryLocation=t}var o=e.sourceTypes instanceof Array?e.sourceTypes:e.sourceTypes?[e.sourceTypes]:null
if(o){this.needSharePointPermission=!(1===o.length&&"onedrive"===o[0].toLowerCase())
this.navSourceTypes=o}this.navEnabled=!e.disable}}
return e}()
t.default=f}(0,r,e("../utilities/CallbackInvoker"),e("../Constants"),e("./DomainHint"),e("../utilities/ErrorHandler"),e("./ErrorType"),e("../utilities/Logging"),e("./OneDriveSdkError"),e("../utilities/StringUtilities"),e("../utilities/TypeValidators"),e("../utilities/UrlUtilities"))},{"../Constants":1,"../utilities/CallbackInvoker":23,"../utilities/ErrorHandler":26,"../utilities/Logging":27,"../utilities/StringUtilities":30,"../utilities/TypeValidators":31,"../utilities/UrlUtilities":32,"./DomainHint":12,"./ErrorType":13,"./OneDriveSdkError":16}],15:[function(e,t,r){!function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r
!function(e){e[e.AAD=0]="AAD"
e[e.AADv2=1]="AADv2"
e[e.MSA=2]="MSA"}(r||(r={}))
t.default=r}(0,r)},{}],16:[function(e,t,r){!function(e,t,r,i){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n=function(e){__extends(t,e)
function t(t,i){var n=e.call(this,i)||this
n.errorCode=r.default[t]
n.message=i
return n}t.prototype.toString=function(){return i.format("[OneDriveSDK Error] errorType: {0}, message: {1}",this.errorCode,this.message)}
return t}(Error)
t.default=n}(0,r,e("../models/ErrorType"),e("../utilities/StringUtilities"))},{"../models/ErrorType":13,"../utilities/StringUtilities":30}],17:[function(e,t,r){!function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r
!function(e){e[e.download=0]="download"
e[e.query=1]="query"
e[e.share=2]="share"}(r||(r={}))
t.default=r}(0,r)},{}],18:[function(e,t,r){!function(e,t,r,i,n,o,a,s){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var u=function(e){__extends(t,e)
function t(t){var n=e.call(this,t)||this,u=s.validateCallback(t.success,!1)
n.success=function(e){o.default.logMessage("picker operation succeeded")
r.invokeAppCallback(u,!0,e)}
n.multiSelect=s.validateType(t.multiSelect,i.default.TYPE_BOOLEAN,!0,!1)
var l=s.validateType(t.action,i.default.TYPE_STRING,!0,a.default[a.default.query])
n.action=a.default[l]
t.advanced&&(n.createLinkParameters=t.advanced.createLinkParameters)
n.scopes||(n.scopes=[n.action===a.default.share?"Files.ReadWrite":"Files.Read"])
return n}t.prototype.needAPICall=function(){return!!this.queryParameters||this.action!==a.default.query}
return t}(n.default)
t.default=u}(0,r,e("../utilities/CallbackInvoker"),e("../Constants"),e("./InvokerOptions"),e("../utilities/Logging"),e("./PickerActionType"),e("../utilities/TypeValidators"))},{"../Constants":1,"../utilities/CallbackInvoker":23,"../utilities/Logging":27,"../utilities/TypeValidators":31,"./InvokerOptions":14,"./PickerActionType":17}],19:[function(e,t,r){!function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r
!function(e){e[e.save=0]="save"
e[e.query=1]="query"}(r||(r={}))
t.default=r}(0,r)},{}],20:[function(e,t,r){!function(e,t,r,i,n,o,a,s,u,l,d,c,p,f,h){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var v=function(e){__extends(t,e)
function t(t){var n=e.call(this,t)||this,o=p.validateCallback(t.success,!1)
n.success=function(e){u.default.logMessage("saver operation succeeded")
r.invokeAppCallback(o,!0,e)}
var a=p.validateCallback(t.progress,!0)
n.progress=function(e){u.default.logMessage(c.format("upload progress: {0}%",e))
a&&r.invokeAppCallback(a,!1,e)}
var s=p.validateType(t.action,i.default.TYPE_STRING,!0,d.default[d.default.query])
n.action=d.default[s]
n.action===d.default.save&&n._setFileInfo(t)
n.nameConflictBehavior=p.validateType(t.nameConflictBehavior,i.default.TYPE_STRING,!0,"rename")
n.scopes||(n.scopes=["Files.ReadWrite"])
return n}t.prototype.needAPICall=function(){return!!this.queryParameters||this.action===d.default.save}
t.prototype._setFileInfo=function(e){e.sourceInputElementId&&e.sourceUri&&o.throwError(new l.default(a.default.optionsError,"sourceUri and sourceInputElementId are provided, only one is required."))
this.sourceInputElementId=e.sourceInputElementId
this.sourceUri=e.sourceUri
var t=p.validateType(e.fileName,i.default.TYPE_STRING,!0,null)
if(this.sourceUri){if(h.isPathFullUrl(this.sourceUri)){this.uploadType=f.default.url
this.fileName=t||h.getFileNameFromUrl(this.sourceUri)
this.fileName||o.throwError(new l.default(a.default.optionsError,"must supply a file name or a URL that ends with a file name"))}else if(h.isPathDataUrl(this.sourceUri)){this.uploadType=f.default.dataUrl
this.fileName=t
this.fileName||o.throwError(new l.default(a.default.optionsError,"must supply a file name for data URL uploads"))}}else if(this.sourceInputElementId){this.uploadType=f.default.form
this.fileInput=n.getFileInput(this.sourceInputElementId)
this.fileName=t||this.fileInput.name}else o.throwError(new l.default(a.default.optionsError,"please specified one type of resource to save"))}
return t}(s.default)
t.default=v}(0,r,e("../utilities/CallbackInvoker"),e("../Constants"),e("../utilities/DomUtilities"),e("../utilities/ErrorHandler"),e("./ErrorType"),e("./InvokerOptions"),e("../utilities/Logging"),e("./OneDriveSdkError"),e("./SaverActionType"),e("../utilities/StringUtilities"),e("../utilities/TypeValidators"),e("./UploadType"),e("../utilities/UrlUtilities"))},{"../Constants":1,"../utilities/CallbackInvoker":23,"../utilities/DomUtilities":25,"../utilities/ErrorHandler":26,"../utilities/Logging":27,"../utilities/StringUtilities":30,"../utilities/TypeValidators":31,"../utilities/UrlUtilities":32,"./ErrorType":13,"./InvokerOptions":14,"./OneDriveSdkError":16,"./SaverActionType":19,"./UploadType":21}],21:[function(e,t,r){!function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r
!function(e){e[e.dataUrl=0]="dataUrl"
e[e.form=1]="form"
e[e.url=2]="url"}(r||(r={}))
t.default=r}(0,r)},{}],22:[function(e,t,r){!function(e,t,r,i,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var o="odpickerv7cache"
t.getCacheItem=function(e){return a()[e]}
t.setCacheItem=function(e,t){var r=a()
r[e]=t
s(r)}
t.removeCacheItem=function(e){var t=a(),r=t[e]
delete t[e]
s(t)
return r}
function a(){if(Storage){var e=localStorage.getItem(o)
return JSON.parse(e||"{}")}i.throwError(new n.default(r.default.unsupportedFeature,"cache based on Storage is not supported in this browser"))}function s(e){Storage?localStorage.setItem(o,JSON.stringify(e)):i.throwError(new n.default(r.default.unsupportedFeature,"cache based on Storage is not supported in this browser"))}}(0,r,e("../models/ErrorType"),e("./ErrorHandler"),e("../models/OneDriveSdkError"))},{"../models/ErrorType":13,"../models/OneDriveSdkError":16,"./ErrorHandler":26}],23:[function(e,t,r){!function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.invokeAppCallback=function(e,t){for(var i=[],n=2;n<arguments.length;n++)i[n-2]=arguments[n]
typeof e===r.default.TYPE_FUNCTION&&e.apply(null,i)}
t.invokeCallbackAsynchronous=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r]
window.setTimeout((function(){e.apply(null,t)}),0)}}(0,r,e("../Constants"))},{"../Constants":1}],24:[function(e,t,r){!function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function e(e){this.receiver=e}e.prototype.send=function(e,t){this.receiver&&this.receiver.postMessage(e,t)}
e.prototype.getReceiver=function(){return this.receiver}
return e}()
t.default=r}(0,r)},{}],25:[function(e,t,r){!function(e,t,r,i,n,o){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var a={}
function s(e){return document.getElementById(e)}t.getElementById=s
function u(e){"interactive"===document.readyState||"complete"===document.readyState?e():document.addEventListener("DOMContentLoaded",e,!1)}t.onDocumentReady=u
t.onMessage=function(e){var t=o.generateNonce()+"_"+(new Date).getMilliseconds()
window.addEventListener("message",e)
a[t]=e
return t}
t.removeMessageListener=function(e){var t=a[e]
t&&window.removeEventListener("message",t)}
t.getFileInput=function(e){var t=s(e)
if(t instanceof HTMLInputElement){"file"!==t.type&&r.throwError(new n.default(i.default.optionsError,"input elemenet must be of type 'file'"))
if(!t.value){r.throwError(new n.default(i.default.optionsError,"please a file to upload"))
return null}var o=t.files
o&&window.FileReader||r.throwError(new n.default(i.default.unsupportedFeature,"browser does not support Files API"))
1!==o.length&&r.throwError(new n.default(i.default.unsupportedFeature,"can not upload more than one file at a time"))
var a=o[0]
a||r.throwError(new n.default(i.default.optionsError,"missing file input"))
if(104857600<a.size){r.throwError(new n.default(i.default.optionsError,"the user has selected a file larger than 100 MB"))
return null}return a}r.throwError(new n.default(i.default.unknown,"element was not an instance of an HTMLInputElement"))}
t.displayOverlay=function(){var e=document.createElement("div")
e.id="od-overlay"
e.style.cssText=["position: fixed","width: 100%","height: 100%","top: 0px","left: 0px","background-color: white","opacity: 1","z-index: 10000","min-width: 40px","min-height: 40px"].join(";")
var t=document.createElement("img")
t.id="od-spinner"
t.src="https://p.sfx.ms/common/spinner_grey_40_transparent.gif"
t.style.cssText=["position: absolute","margin: auto","top: 0","left: 0","right: 0","bottom: 0"].join(";")
e.appendChild(t)
var r=document.createElement("style")
r.type="text/css"
r.innerHTML="body { visibility: hidden !important; }"
document.head.appendChild(r)
u((function(){var t=document.body
null!==t?t.insertBefore(e,t.firstChild):document.createElement("body").appendChild(e)
document.head.removeChild(r)}))}}(0,r,e("./ErrorHandler"),e("../models/ErrorType"),e("../models/OneDriveSdkError"),e("./UrlUtilities"))},{"../models/ErrorType":13,"../models/OneDriveSdkError":16,"./ErrorHandler":26,"./UrlUtilities":32}],26:[function(e,t,r){!function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var i=[]
t.registerErrorObserver=function(e){i.push(e)}
t.throwError=function(e){if(e.errorCode!==r.default[r.default.unknown]){for(var t=0,n=i;t<n.length;t++)(0,n[t])(e)
return{exposeToPublic:function(){throw e}}}throw e}}(0,r,e("../models/ErrorType"))},{"../models/ErrorType":13}],27:[function(e,t,r){!function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function e(){}e.logError=function(t){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i]
e._log(t,!0,r)}
e.logMessage=function(t){e._log(t,!1)}
e._log=function(t,r){for(var i=[],n=2;n<arguments.length;n++)i[n-2]=arguments[n];(r||e.loggingEnabled||window.onedrive_enable_logging)&&console.log("[OneDriveSDK] "+t,i)}
e.loggingEnabled=!1
return e}()
t.default=r}(0,r)},{}],28:[function(e,t,r){!function(e,t,r,i){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.shallowClone=function(e){if(typeof e!==r.default.TYPE_OBJECT||!e)return null
var t={}
for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])
return t}
t.deserializeJSON=function(e){var t=null
try{t=JSON.parse(e)}catch(e){i.default.logError("deserialization error"+e)}typeof t===r.default.TYPE_OBJECT&&null!==t||(t={})
return t}
t.serializeJSON=function(e){return JSON.stringify(e)}}(0,r,e("../Constants"),e("./Logging"))},{"../Constants":1,"./Logging":27}],29:[function(e,t,r){!function(e,t,r,i,n,o,a){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.POPUP_PINGER_INTERVAL=500
var s=function(){function e(){}e.getCurrentPopup=function(){return e._currentPopup||new e}
e.setCurrentPopup=function(t){e._currentPopup=t}
e.createPopupFeatures=function(){var e=window.screenX+Math.max(window.outerWidth-1024,0)/2
return["width=1024","height=650","top="+(window.screenY+Math.max(window.outerHeight-650,0)/2),"left="+e,"status=no","resizable=yes","toolbar=no","menubar=no","scrollbars=yes"].join(",")}
e.prototype.close=function(){if(e.getCurrentPopup().isPopupOpen()){e.getCurrentPopup()._popup.close()
e.setCurrentPopup(null)}}
e.prototype.openPopup=function(s){var u=this
a.validateUrlProtocol(s)
if(e.getCurrentPopup().isPopupOpen()){n.default.logMessage("leaving current url: "+this._url)
this._url=s
e.getCurrentPopup().getPopupWindow().location.href=s}else{this._url=s
this._popup=window.open(s,"_blank",e.createPopupFeatures())
this._popup?this._popup.focus():r.throwError(new o.default(i.default.popupOpen,"popup window is disconnected")).exposeToPublic()
e.setCurrentPopup(this)}return new Promise((function(e,r){var i=setInterval((function(){if(!u.isPopupOpen()){window.clearInterval(i)
e()}}),t.POPUP_PINGER_INTERVAL)}))}
e.prototype.getPopupWindow=function(){return this._popup}
e.prototype.getCurrentUrl=function(){return this._url}
e.prototype.isPopupOpen=function(){return!!this._popup&&!this._popup.closed}
return e}()
t.default=s}(0,r,e("./ErrorHandler"),e("../models/ErrorType"),e("./Logging"),e("../models/OneDriveSdkError"),e("../utilities/UrlUtilities"))},{"../models/ErrorType":13,"../models/OneDriveSdkError":16,"../utilities/UrlUtilities":32,"./ErrorHandler":26,"./Logging":27}],30:[function(e,t,r){!function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=/[\{\}]/g,i=/\{\d+\}/g
t.format=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
return e.replace(i,(function(e){var i=t[e.replace(r,"")]
null===i&&(i="")
return i}))}}(0,r)},{}],31:[function(e,t,r){!function(e,t,r,i,n,o,a,s,u){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.validateType=function(e,t,r,l,d){void 0===r&&(r=!1)
if(void 0===e){if(r){if(void 0!==l){o.default.logMessage("applying default value: "+l)
return l}}else i.throwError(new s.default(n.default.typeError,"object was missing and not optional"))
return null}var c=typeof e
if(c!==t){i.throwError(new s.default(n.default.typeError,u.format("expected object type: '{0}', actual object type: '{1}'",t,c)))
return null}if(!function(e,t){if(!Array.isArray(t))return!0
for(var r in t)if(e===t[r])return!0
return!1}(e,d)){i.throwError(new s.default(n.default.typeError,u.format("object does not match any valid values {0}",a.serializeJSON(d))))
return null}return e}
t.validateCallback=function(e,t){void 0===t&&(t=!1)
if(void 0===e){t||i.throwError(new s.default(n.default.typeError,"function was missing and not optional"))
return null}var o=typeof e
o!==r.default.TYPE_FUNCTION&&i.throwError(new s.default(n.default.typeError,u.format("expected function type: function | string, actual type: {0}",o)))
return e}}(0,r,e("../Constants"),e("./ErrorHandler"),e("../models/ErrorType"),e("./Logging"),e("./ObjectUtilities"),e("../models/OneDriveSdkError"),e("./StringUtilities"))},{"../Constants":1,"../models/ErrorType":13,"../models/OneDriveSdkError":16,"./ErrorHandler":26,"./Logging":27,"./ObjectUtilities":28,"./StringUtilities":30}],32:[function(e,t,r){!function(e,t,r,i,n,o,a){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
function s(e,t){return e+("/"!==e.charAt(e.length-1)?"/":"")+t}t.appendToPath=s
t.appendQueryString=function(e,t,r){return u(e,((i={})[t]=r,i))
var i}
function u(e,t,r){if(!t||0===Object.keys(t).length)return e
r?e+="#":-1===e.indexOf("?")?e+="?":"&"!==e.charAt(e.length-1)&&(e+="&")
var i=""
for(var n in t)i+=(i.length?"&":"")+a.format("{0}={1}",encodeURIComponent(n),encodeURIComponent(t[n]))
return e+i}t.appendQueryStrings=u
t.readCurrentUrlParameters=function(){return l(window.location.href)}
function l(e){var t={},r=e.indexOf("?")+1,i=e.indexOf("#")+1
if(0<r){var n=r<i?i-1:e.length
p(e.substring(r,n),t)}0<i&&p(e.substring(i),t)
return t}t.readUrlParameters=l
t.redirect=function(e){c(e)
window.location.replace(e)}
function d(e){var t=["?","#"]
for(var r in t){var i=e.indexOf(t[r])
0<i&&(e=e.substring(0,i))}return e}t.trimUrlQuery=d
t.getFileNameFromUrl=function(e){var t=d(e)
return t.substr(t.lastIndexOf("/")+1)}
t.getOrigin=function(e){return s(e.replace(/^((\w+:)?\/\/[^\/]+\/?).*$/,"$1"),"")}
t.isPathFullUrl=function(e){return 0===e.indexOf("https://")||0===e.indexOf("http://")}
t.isPathDataUrl=function(e){return 0===e.indexOf("data:")}
t.generateNonce=function(){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t="",i=0;i<r.default.NONCE_LENGTH;i++)t+=e.charAt(Math.floor(62*Math.random()))
return t}
function c(e,t){for(var r=0,s=t=t||["HTTP","HTTPS"];r<s.length;r++){var u=s[r]
if(0===e.toUpperCase().indexOf(u))return}i.throwError(new o.default(n.default.optionsError,a.format("uri {0} does not match protocol(s): "+t,e))).exposeToPublic()}t.validateUrlProtocol=c
t.validateRedirectUrlHost=function(e){c(e);-1<e.indexOf("://")?e.split("/")[2]!==window.location.host&&i.throwError(new o.default(n.default.optionsError,"redirect uri is not in the same domain as picker sdk")).exposeToPublic():i.throwError(new o.default(n.default.optionsError,"redirect uri is not an absolute url")).exposeToPublic()}
function p(e,t){for(var r=e.split("&"),i=0;i<r.length;i++){var n=r[i],o=n.indexOf("=")
if(-1!==o){var a=n.substr(0,o),s=n.substr(o+1)
t[a]=decodeURIComponent(s)}}}t.deserializeParameters=p}(0,r,e("../Constants"),e("./ErrorHandler"),e("../models/ErrorType"),e("../models/OneDriveSdkError"),e("./StringUtilities"))},{"../Constants":1,"../models/ErrorType":13,"../models/OneDriveSdkError":16,"./ErrorHandler":26,"./StringUtilities":30}],33:[function(e,t,r){!function(e,t,r,i,n,o,a,s,u){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var l=new RegExp("^([a-fA-F0-9]){16}$"),d=function(){function e(e){this._url=e.url
this._json=e.json
this._headers=e.headers||{}
this._method=e.method
this._clientId=e.clientId
this._apiEndpoint=e.apiEndpoint||r.default.msa
n.registerErrorObserver(this._abortRequest)}e.statusCodeToString=function(e){switch(e){case-1:return"EXCEPTION"
case-2:return"TIMEOUT"
case-3:return"REQUEST ABORTED"
default:return e.toString()}}
e.prototype.start=function(t,r){var i=this
try{this._successCallback=t
this._failureCallback=r
this._request=new XMLHttpRequest
this._request.ontimeout=this._onTimeout
this._request.onload=function(){var e=i._request.status
e<400&&0<e?i._callSuccessCallback(e):i._callFailureCallback(e)}
this._method||(this._method=this._json?e.HTTP_POST:e.HTTP_GET)
this._request.open(this._method,this._url,!0)
this._request.timeout=3e4
this._setHeaders()
a.default.logMessage("starting request to: "+this._url)
this._request.send(this._json)}catch(t){this._callFailureCallback(-1,t)}}
e.prototype.upload=function(t,r,i,n){var o=this
try{this._successCallback=r
this._progressCallback=n
this._failureCallback=i
this._request=new XMLHttpRequest
this._request.ontimeout=this._onTimeout
this._method=e.HTTP_PUT
this._request.open(this._method,this._url,!0)
this._setHeaders()
this._request.onload=function(e){o._completed=!0
var t=o._request.status
200===t||201===t||202===t?o._callSuccessCallback(t):o._callFailureCallback(t,e)}
this._request.onerror=function(e){o._completed=!0
o._callFailureCallback(o._request.status,e)}
this._request.upload.onprogress=function(e){if(e.lengthComputable){var t={bytesTransferred:e.loaded,totalBytes:e.total,progressPercentage:0===e.total?0:e.loaded/e.total*100}
o._callProgressCallback(t)}}
a.default.logMessage("starting upload to: "+this._url)
this._request.send(t)}catch(t){this._callFailureCallback(-1,t)}}
e.prototype._callSuccessCallback=function(t){a.default.logMessage("calling xhr success callback, status: "+e.statusCodeToString(t))
this._successCallback(this._request,t,this._url)}
e.prototype._callFailureCallback=function(t,r){a.default.logError("calling xhr failure callback, status: "+e.statusCodeToString(t),this._request,r)
this._failureCallback(this._request,t,-2===t)}
e.prototype._callProgressCallback=function(e){a.default.logMessage("calling xhr upload progress callback")
this._progressCallback(this._request,e)}
e.prototype._abortRequest=function(){if(this&&!this._completed){this._completed=!0
if(this._request)try{this._request.abort()}catch(e){}this._callFailureCallback(-3)}}
e.prototype._onTimeout=function(){if(!this._completed){this._completed=!0
this._callFailureCallback(-2)}}
e.prototype._setHeaders=function(){for(var t in this._headers)this._request.setRequestHeader(t,this._headers[t])
if(this._clientId){var a=this._clientId
l.test(this._clientId)&&(a="0x"+this._clientId)
this._request.setRequestHeader("Application","0x"+a)}var d=u.format("{0}={1}","SDK-Version",i.default.SDK_VERSION)
switch(this._apiEndpoint){case r.default.graph_odb:case r.default.filesV2:this._request.setRequestHeader("X-ClientService-ClientTag",d)
break
case r.default.graph_odc:case r.default.msa:this._request.setRequestHeader("X-RequestStats",d)
break
default:n.throwError(new s.default(o.default.internalError,"invalid API endpoint: "+this._apiEndpoint))}this._method===e.HTTP_POST&&this._request.setRequestHeader("Content-Type",this._json?"application/json":"text/plain")}
e.HTTP_GET="GET"
e.HTTP_POST="POST"
e.HTTP_PUT="PUT"
return e}()
t.default=d}(0,r,e("../models/ApiEndpoint"),e("../Constants"),e("./ErrorHandler"),e("../models/ErrorType"),e("./Logging"),e("../models/OneDriveSdkError"),e("./StringUtilities"))},{"../Constants":1,"../models/ApiEndpoint":11,"../models/ErrorType":13,"../models/OneDriveSdkError":16,"./ErrorHandler":26,"./Logging":27,"./StringUtilities":30}],34:[function(e,t,r){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   3.3.1
 */
i=function(){"use strict"
function t(e){return"function"==typeof e}var r=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},i=0,n=void 0,o=void 0,a=function(e,t){f[i]=e
f[i+1]=t
2===(i+=2)&&(o?o(h):v())},s="undefined"!=typeof window?window:void 0,u=s||{},l=u.MutationObserver||u.WebKitMutationObserver,d="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),c="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel
function p(){var e=setTimeout
return function(){return e(h,1)}}var f=new Array(1e3)
function h(){for(var e=0;e<i;e+=2){(0,f[e])(f[e+1])
f[e]=void 0
f[e+1]=void 0}i=0}var v=void 0
v=d?function(){return process.nextTick(h)}:l?function(){var e=0,t=new l(h),r=document.createTextNode("")
t.observe(r,{characterData:!0})
return function(){r.data=e=++e%2}}():c?function(){var e=new MessageChannel
e.port1.onmessage=h
return function(){return e.port2.postMessage(0)}}():void 0===s&&"function"==typeof e?function(){try{var t=e("vertx")
n=t.runOnLoop||t.runOnContext
return function(){n(h)}}catch(t){return p()}}():p()
function m(e,t){var r=arguments,i=this,n=new this.constructor(_)
void 0===n[y]&&q(n)
var o,s=i._state
s?(o=r[s-1],a((function(){return D(s,n,o,i._result)}))):A(i,n,e,t)
return n}function g(e){if(e&&"object"==typeof e&&e.constructor===this)return e
var t=new this(_)
O(t,e)
return t}var y=Math.random().toString(36).substring(16)
function _(){}var E=void 0,w=1,T=2,b=new R
function P(e){try{return e.then}catch(e){b.error=e
return b}}function k(e,r,i){r.constructor===e.constructor&&i===m&&r.constructor.resolve===g?(s=e,(u=r)._state===w?C(s,u._result):u._state===T?S(s,u._result):A(u,void 0,(function(e){return O(s,e)}),(function(e){return S(s,e)}))):i===b?S(e,b.error):void 0===i?C(e,r):t(i)?(n=r,o=i,a((function(e){var t=!1,r=function(e,t,r,i){try{e.call(t,r,i)}catch(e){return e}}(o,n,(function(r){if(!t){t=!0
n!==r?O(e,r):C(e,r)}}),(function(r){if(!t){t=!0
S(e,r)}}),e._label)
if(!t&&r){t=!0
S(e,r)}}),e)):C(e,r)
var n,o,s,u}function O(e,t){e===t?S(e,new TypeError("You cannot resolve a promise with itself")):"function"==typeof(r=t)||"object"==typeof r&&null!==r?k(e,t,P(t)):C(e,t)
var r}function U(e){e._onerror&&e._onerror(e._result)
I(e)}function C(e,t){if(e._state===E){e._result=t
e._state=w
0!==e._subscribers.length&&a(I,e)}}function S(e,t){if(e._state===E){e._state=T
e._result=t
a(U,e)}}function A(e,t,r,i){var n=e._subscribers,o=n.length
e._onerror=null
n[o]=t
n[o+w]=r
n[o+T]=i
0===o&&e._state&&a(I,e)}function I(e){var t=e._subscribers,r=e._state
if(0!==t.length){for(var i=void 0,n=void 0,o=e._result,a=0;a<t.length;a+=3){i=t[a]
n=t[a+r]
i?D(r,i,n,o):n(o)}e._subscribers.length=0}}function R(){this.error=null}var H=new R
function D(e,r,i,n){var o=t(i),a=void 0,s=void 0,u=void 0,l=void 0
if(o){if((a=function(e,t){try{return e(t)}catch(e){H.error=e
return H}}(i,n))===H){l=!0
s=a.error
a=null}else u=!0
if(r===a){S(r,new TypeError("A promises callback cannot return that same promise."))
return}}else{a=n
u=!0}r._state!==E||(o&&u?O(r,a):l?S(r,s):e===w?C(r,a):e===T&&S(r,a))}var M=0
function q(e){e[y]=M++
e._state=void 0
e._result=void 0
e._subscribers=[]}function L(e,t){this._instanceConstructor=e
this.promise=new e(_)
this.promise[y]||q(this.promise)
if(r(t)){this._input=t
this.length=t.length
this._remaining=t.length
this._result=new Array(this.length)
if(0===this.length)C(this.promise,this._result)
else{this.length=this.length||0
this._enumerate()
0===this._remaining&&C(this.promise,this._result)}}else S(this.promise,new Error("Array Methods must be provided an Array"))}L.prototype._enumerate=function(){for(var e=this.length,t=this._input,r=0;this._state===E&&r<e;r++)this._eachEntry(t[r],r)}
L.prototype._eachEntry=function(e,t){var r=this._instanceConstructor,i=r.resolve
if(i===g){var n=P(e)
if(n===m&&e._state!==E)this._settledAt(e._state,t,e._result)
else if("function"!=typeof n){this._remaining--
this._result[t]=e}else if(r===x){var o=new r(_)
k(o,e,n)
this._willSettleAt(o,t)}else this._willSettleAt(new r((function(t){return t(e)})),t)}else this._willSettleAt(i(e),t)}
L.prototype._settledAt=function(e,t,r){var i=this.promise
if(i._state===E){this._remaining--
e===T?S(i,r):this._result[t]=r}0===this._remaining&&C(i,this._result)}
L.prototype._willSettleAt=function(e,t){var r=this
A(e,void 0,(function(e){return r._settledAt(w,t,e)}),(function(e){return r._settledAt(T,t,e)}))}
function x(e){this[y]=M++
this._result=this._state=void 0
this._subscribers=[]
if(_!==e){"function"!=typeof e&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}()
this instanceof x?function(e,t){try{t((function(t){O(e,t)}),(function(t){S(e,t)}))}catch(t){S(e,t)}}(this,e):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}()}}x.all=function(e){return new L(this,e).promise}
x.race=function(e){var t=this
return r(e)?new t((function(r,i){for(var n=e.length,o=0;o<n;o++)t.resolve(e[o]).then(r,i)})):new t((function(e,t){return t(new TypeError("You must pass an array to race."))}))}
x.resolve=g
x.reject=function(e){var t=new this(_)
S(t,e)
return t}
x._setScheduler=function(e){o=e}
x._setAsap=function(e){a=e}
x._asap=a
x.prototype={constructor:x,then:m,catch:function(e){return this.then(null,e)}}
function N(){var e=void 0
if("undefined"!=typeof global)e=global
else if("undefined"!=typeof self)e=self
else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise
if(t){var r=null
try{r=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===r&&!t.cast)return}e.Promise=x}N()
x.polyfill=N
return x.Promise=x},"object"==typeof r&&void 0!==t?t.exports=i():this.ES6Promise=i()
var i},{}]},{},[2])(2)}))

//# sourceMappingURL=OneDriveSDK.map