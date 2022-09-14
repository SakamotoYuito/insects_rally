(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4444:function(a,b,c){"use strict";c.d(b,{BH:function(){return n},L:function(){return j},LL:function(){return w},ZR:function(){return v},"b$":function(){return r},eu:function(){return u},hl:function(){return t},m9:function(){return K},ne:function(){return G},pd:function(){return F},ru:function(){return q},tV:function(){return k},uI:function(){return p},vZ:function(){return B},w1:function(){return s},xO:function(){return D},xb:function(){return A},"z$":function(){return o},zd:function(){return E}});/* unused harmony exports CONSTANTS, MAX_VALUE_MILLIS, RANDOM_FACTOR, Sha1, areCookiesEnabled, assert, assertionError, async, base64, base64Encode, calculateBackoffMillis, contains, createMockUserToken, decode, deepCopy, deepExtend, errorPrefix, getGlobal, isAdmin, isBrowser, isElectron, isNode, isNodeSdk, isSafari, isUWP, isValidFormat, isValidTimestamp, issuedAtTime, jsonEval, map, ordinal, promiseWithTimeout, safeGet, stringLength, stringToByteArray, stringify, uuidv4, validateArgCount, validateCallback, validateContextObject, validateNamespace */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */ let d={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},e=function(a){return Error("Firebase Database ("+d.SDK_VERSION+") INTERNAL ASSERT FAILED: "+a)},f=function(a){let b=[],c=0;for(let d=0;d<a.length;d++){let e=a.charCodeAt(d);e<128?b[c++]=e:e<2048?(b[c++]=e>>6|192,b[c++]=63&e|128):(64512&e)==55296&&d+1<a.length&&(64512&a.charCodeAt(d+1))==56320?(e=65536+((1023&e)<<10)+(1023&a.charCodeAt(++d)),b[c++]=e>>18|240,b[c++]=e>>12&63|128,b[c++]=e>>6&63|128,b[c++]=63&e|128):(b[c++]=e>>12|224,b[c++]=e>>6&63|128,b[c++]=63&e|128)}return b},g=function(a){let b=[],c=0,d=0;for(;c<a.length;){let e=a[c++];if(e<128)b[d++]=String.fromCharCode(e);else if(e>191&&e<224){let f=a[c++];b[d++]=String.fromCharCode((31&e)<<6|63&f)}else if(e>239&&e<365){let g=a[c++],h=a[c++],i=a[c++],j=((7&e)<<18|(63&g)<<12|(63&h)<<6|63&i)-65536;b[d++]=String.fromCharCode(55296+(j>>10)),b[d++]=String.fromCharCode(56320+(1023&j))}else{let k=a[c++],l=a[c++];b[d++]=String.fromCharCode((15&e)<<12|(63&k)<<6|63&l)}}return b.join("")},h={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(a,b){if(!Array.isArray(a))throw Error("encodeByteArray takes an array as a parameter");this.init_();let c=b?this.byteToCharMapWebSafe_:this.byteToCharMap_,d=[];for(let e=0;e<a.length;e+=3){let f=a[e],g=e+1<a.length,h=g?a[e+1]:0,i=e+2<a.length,j=i?a[e+2]:0,k=f>>2,l=(3&f)<<4|h>>4,m=(15&h)<<2|j>>6,n=63&j;i||(n=64,g||(m=64)),d.push(c[k],c[l],c[m],c[n])}return d.join("")},encodeString(a,b){return this.HAS_NATIVE_SUPPORT&&!b?btoa(a):this.encodeByteArray(f(a),b)},decodeString(a,b){return this.HAS_NATIVE_SUPPORT&&!b?atob(a):g(this.decodeStringToByteArray(a,b))},decodeStringToByteArray(a,b){this.init_();let c=b?this.charToByteMapWebSafe_:this.charToByteMap_,d=[];for(let e=0;e<a.length;){let f=c[a.charAt(e++)],g=e<a.length,h=g?c[a.charAt(e)]:0;++e;let i=e<a.length,j=i?c[a.charAt(e)]:64;++e;let k=e<a.length,l=k?c[a.charAt(e)]:64;if(++e,null==f||null==h||null==j||null==l)throw Error();let m=f<<2|h>>4;if(d.push(m),64!==j){let n=h<<4&240|j>>2;if(d.push(n),64!==l){let o=j<<6&192|l;d.push(o)}}}return d},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let a=0;a<this.ENCODED_VALS.length;a++)this.byteToCharMap_[a]=this.ENCODED_VALS.charAt(a),this.charToByteMap_[this.byteToCharMap_[a]]=a,this.byteToCharMapWebSafe_[a]=this.ENCODED_VALS_WEBSAFE.charAt(a),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[a]]=a,a>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(a)]=a,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(a)]=a)}}},i=function(a){let b=f(a);return h.encodeByteArray(b,!0)},j=function(a){return i(a).replace(/\./g,"")},k=function(a){try{return h.decodeString(a,!0)}catch(b){console.error("base64Decode failed: ",b)}return null};function l(a,b){if(!(b instanceof Object))return b;switch(b.constructor){case Date:let c=b;return new Date(c.getTime());case Object:void 0===a&&(a={});break;case Array:a=[];break;default:return b}for(let d in b)b.hasOwnProperty(d)&&m(d)&&(a[d]=l(a[d],b[d]));return a}function m(a){return"__proto__"!==a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class n{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((a,b)=>{this.resolve=a,this.reject=b})}wrapCallback(a){return(b,c)=>{b?this.reject(b):this.resolve(c),"function"==typeof a&&(this.promise.catch(()=>{}),1===a.length?a(b):a(b,c))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */ function o(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function p(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(o())}function q(){let a="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof a&& void 0!==a.id}function r(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function s(){let a=o();return a.indexOf("MSIE ")>=0||a.indexOf("Trident/")>=0}function t(){return"object"==typeof indexedDB}function u(){return new Promise((a,b)=>{try{let c=!0,d="validate-browser-context-for-indexeddb-analytics-module",e=self.indexedDB.open(d);e.onsuccess=()=>{e.result.close(),c||self.indexedDB.deleteDatabase(d),a(!0)},e.onupgradeneeded=()=>{c=!1},e.onerror=()=>{var a;b((null===(a=e.error)|| void 0===a?void 0:a.message)||"")}}catch(f){b(f)}})}class v extends Error{constructor(a,b,c){super(b),this.code=a,this.customData=c,this.name="FirebaseError",Object.setPrototypeOf(this,v.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,w.prototype.create)}}class w{constructor(a,b,c){this.service=a,this.serviceName=b,this.errors=c}create(a,...b){let c=b[0]||{},d=`${this.service}/${a}`,e=this.errors[a],f=e?x(e,c):"Error",g=`${this.serviceName}: ${f} (${d}).`,h=new v(d,g,c);return h}}function x(a,b){return a.replace(y,(a,c)=>{let d=b[c];return null!=d?String(d):`<${c}?>`})}let y=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */ function z(a){return JSON.parse(a)}function A(a){for(let b in a)if(Object.prototype.hasOwnProperty.call(a,b))return!1;return!0}function B(a,b){if(a===b)return!0;let c=Object.keys(a),d=Object.keys(b);for(let e of c){if(!d.includes(e))return!1;let f=a[e],g=b[e];if(C(f)&&C(g)){if(!B(f,g))return!1}else if(f!==g)return!1}for(let h of d)if(!c.includes(h))return!1;return!0}function C(a){return null!==a&&"object"==typeof a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */ function D(a){let b=[];for(let[c,d]of Object.entries(a))Array.isArray(d)?d.forEach(a=>{b.push(encodeURIComponent(c)+"="+encodeURIComponent(a))}):b.push(encodeURIComponent(c)+"="+encodeURIComponent(d));return b.length?"&"+b.join("&"):""}function E(a){let b={},c=a.replace(/^\?/,"").split("&");return c.forEach(a=>{if(a){let[c,d]=a.split("=");b[decodeURIComponent(c)]=decodeURIComponent(d)}}),b}function F(a){let b=a.indexOf("?");if(!b)return"";let c=a.indexOf("#",b);return a.substring(b,c>0?c:void 0)}function G(a,b){let c=new H(a,b);return c.subscribe.bind(c)}class H{constructor(a,b){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=b,this.task.then(()=>{a(this)}).catch(a=>{this.error(a)})}next(a){this.forEachObserver(b=>{b.next(a)})}error(a){this.forEachObserver(b=>{b.error(a)}),this.close(a)}complete(){this.forEachObserver(a=>{a.complete()}),this.close()}subscribe(a,b,c){let d;if(void 0===a&& void 0===b&& void 0===c)throw Error("Missing Observer.");void 0===(d=I(a,["next","error","complete"])?a:{next:a,error:b,complete:c}).next&&(d.next=J),void 0===d.error&&(d.error=J),void 0===d.complete&&(d.complete=J);let e=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?d.error(this.finalError):d.complete()}catch(a){}}),this.observers.push(d),e}unsubscribeOne(a){void 0!==this.observers&& void 0!==this.observers[a]&&(delete this.observers[a],this.observerCount-=1,0===this.observerCount&& void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(a){if(!this.finalized)for(let b=0;b<this.observers.length;b++)this.sendOne(b,a)}sendOne(a,b){this.task.then(()=>{if(void 0!==this.observers&& void 0!==this.observers[a])try{b(this.observers[a])}catch(c){"undefined"!=typeof console&&console.error&&console.error(c)}})}close(a){!this.finalized&&(this.finalized=!0,void 0!==a&&(this.finalError=a),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function I(a,b){if("object"!=typeof a||null===a)return!1;for(let c of b)if(c in a&&"function"==typeof a[c])return!0;return!1}function J(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function K(a){return a&&a._delegate?a._delegate:a}},9669:function(a,b,c){a.exports=c(1609)},5448:function(a,b,c){"use strict";var d=c(4867),e=c(6026),f=c(4372),g=c(5327),h=c(4097),i=c(4109),j=c(7985),k=c(7874),l=c(723),m=c(644),n=c(205);a.exports=function(a){return new Promise(function(b,c){var o,p=a.data,q=a.headers,r=a.responseType;function s(){a.cancelToken&&a.cancelToken.unsubscribe(o),a.signal&&a.signal.removeEventListener("abort",o)}d.isFormData(p)&&d.isStandardBrowserEnv()&&delete q["Content-Type"];var t=new XMLHttpRequest;if(a.auth){var u=a.auth.username||"",v=a.auth.password?unescape(encodeURIComponent(a.auth.password)):"";q.Authorization="Basic "+btoa(u+":"+v)}var w=h(a.baseURL,a.url);function x(){if(t){var d="getAllResponseHeaders"in t?i(t.getAllResponseHeaders()):null,f={data:r&&"text"!==r&&"json"!==r?t.response:t.responseText,status:t.status,statusText:t.statusText,headers:d,config:a,request:t};e(function(a){b(a),s()},function(a){c(a),s()},f),t=null}}if(t.open(a.method.toUpperCase(),g(w,a.params,a.paramsSerializer),!0),t.timeout=a.timeout,"onloadend"in t?t.onloadend=x:t.onreadystatechange=function(){t&&4===t.readyState&&(0!==t.status||t.responseURL&&0===t.responseURL.indexOf("file:"))&&setTimeout(x)},t.onabort=function(){t&&(c(new l("Request aborted",l.ECONNABORTED,a,t)),t=null)},t.onerror=function(){c(new l("Network Error",l.ERR_NETWORK,a,t,t)),t=null},t.ontimeout=function(){var b=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded",d=a.transitional||k;a.timeoutErrorMessage&&(b=a.timeoutErrorMessage),c(new l(b,d.clarifyTimeoutError?l.ETIMEDOUT:l.ECONNABORTED,a,t)),t=null},d.isStandardBrowserEnv()){var y=(a.withCredentials||j(w))&&a.xsrfCookieName?f.read(a.xsrfCookieName):void 0;y&&(q[a.xsrfHeaderName]=y)}"setRequestHeader"in t&&d.forEach(q,function(a,b){void 0===p&&"content-type"===b.toLowerCase()?delete q[b]:t.setRequestHeader(b,a)}),d.isUndefined(a.withCredentials)||(t.withCredentials=!!a.withCredentials),r&&"json"!==r&&(t.responseType=a.responseType),"function"==typeof a.onDownloadProgress&&t.addEventListener("progress",a.onDownloadProgress),"function"==typeof a.onUploadProgress&&t.upload&&t.upload.addEventListener("progress",a.onUploadProgress),(a.cancelToken||a.signal)&&(o=function(a){t&&(c(!a||a&&a.type?new m:a),t.abort(),t=null)},a.cancelToken&&a.cancelToken.subscribe(o),a.signal&&(a.signal.aborted?o():a.signal.addEventListener("abort",o))),p||(p=null);var z=n(w);if(z&& -1===["http","https","file"].indexOf(z)){c(new l("Unsupported protocol "+z+":",l.ERR_BAD_REQUEST,a));return}t.send(p)})}},1609:function(a,b,c){"use strict";var d=c(4867),e=c(1849),f=c(321),g=c(7185),h=c(5546);function i(a){var b=new f(a),c=e(f.prototype.request,b);return d.extend(c,f.prototype,b),d.extend(c,b),c.create=function(b){return i(g(a,b))},c}var j=i(h);j.Axios=f,j.CanceledError=c(644),j.CancelToken=c(4972),j.isCancel=c(6502),j.VERSION=c(7288).version,j.toFormData=c(7675),j.AxiosError=c(723),j.Cancel=j.CanceledError,j.all=function(a){return Promise.all(a)},j.spread=c(8713),j.isAxiosError=c(6268),a.exports=j,a.exports.default=j},4972:function(a,b,c){"use strict";var d=c(644);function e(a){if("function"!=typeof a)throw TypeError("executor must be a function.");this.promise=new Promise(function(a){b=a});var b,c=this;this.promise.then(function(a){if(c._listeners){var b,d=c._listeners.length;for(b=0;b<d;b++)c._listeners[b](a);c._listeners=null}}),this.promise.then=function(a){var b,d=new Promise(function(a){c.subscribe(a),b=a}).then(a);return d.cancel=function(){c.unsubscribe(b)},d},a(function(a){!c.reason&&(c.reason=new d(a),b(c.reason))})}e.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},e.prototype.subscribe=function(a){if(this.reason){a(this.reason);return}this._listeners?this._listeners.push(a):this._listeners=[a]},e.prototype.unsubscribe=function(a){if(this._listeners){var b=this._listeners.indexOf(a);-1!==b&&this._listeners.splice(b,1)}},e.source=function(){var a;return{token:new e(function(b){a=b}),cancel:a}},a.exports=e},644:function(a,b,c){"use strict";var d=c(723),e=c(4867);function f(a){d.call(this,null==a?"canceled":a,d.ERR_CANCELED),this.name="CanceledError"}e.inherits(f,d,{__CANCEL__:!0}),a.exports=f},6502:function(a){"use strict";a.exports=function(a){return!!(a&&a.__CANCEL__)}},321:function(a,b,c){"use strict";var d=c(4867),e=c(5327),f=c(782),g=c(3572),h=c(7185),i=c(4097),j=c(4875),k=j.validators;function l(a){this.defaults=a,this.interceptors={request:new f,response:new f}}l.prototype.request=function(a,b){"string"==typeof a?(b=b||{}).url=a:b=a||{},(b=h(this.defaults,b)).method?b.method=b.method.toLowerCase():this.defaults.method?b.method=this.defaults.method.toLowerCase():b.method="get";var c,d=b.transitional;void 0!==d&&j.assertOptions(d,{silentJSONParsing:k.transitional(k.boolean),forcedJSONParsing:k.transitional(k.boolean),clarifyTimeoutError:k.transitional(k.boolean)},!1);var e=[],f=!0;this.interceptors.request.forEach(function(a){("function"!=typeof a.runWhen|| !1!==a.runWhen(b))&&(f=f&&a.synchronous,e.unshift(a.fulfilled,a.rejected))});var i=[];if(this.interceptors.response.forEach(function(a){i.push(a.fulfilled,a.rejected)}),!f){var l=[g,void 0];for(Array.prototype.unshift.apply(l,e),l=l.concat(i),c=Promise.resolve(b);l.length;)c=c.then(l.shift(),l.shift());return c}for(var m=b;e.length;){var n=e.shift(),o=e.shift();try{m=n(m)}catch(p){o(p);break}}try{c=g(m)}catch(q){return Promise.reject(q)}for(;i.length;)c=c.then(i.shift(),i.shift());return c},l.prototype.getUri=function(a){a=h(this.defaults,a);var b=i(a.baseURL,a.url);return e(b,a.params,a.paramsSerializer)},d.forEach(["delete","get","head","options"],function(a){l.prototype[a]=function(b,c){return this.request(h(c||{},{method:a,url:b,data:(c||{}).data}))}}),d.forEach(["post","put","patch"],function(a){function b(b){return function(c,d,e){return this.request(h(e||{},{method:a,headers:b?{"Content-Type":"multipart/form-data"}:{},url:c,data:d}))}}l.prototype[a]=b(),l.prototype[a+"Form"]=b(!0)}),a.exports=l},723:function(a,b,c){"use strict";var d=c(4867);function e(a,b,c,d,e){Error.call(this),this.message=a,this.name="AxiosError",b&&(this.code=b),c&&(this.config=c),d&&(this.request=d),e&&(this.response=e)}d.inherits(e,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var f=e.prototype,g={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(a){g[a]={value:a}}),Object.defineProperties(e,g),Object.defineProperty(f,"isAxiosError",{value:!0}),e.from=function(a,b,c,g,h,i){var j=Object.create(f);return d.toFlatObject(a,j,function(a){return a!==Error.prototype}),e.call(j,a.message,b,c,g,h),j.name=a.name,i&&Object.assign(j,i),j},a.exports=e},782:function(a,b,c){"use strict";var d=c(4867);function e(){this.handlers=[]}e.prototype.use=function(a,b,c){return this.handlers.push({fulfilled:a,rejected:b,synchronous:!!c&&c.synchronous,runWhen:c?c.runWhen:null}),this.handlers.length-1},e.prototype.eject=function(a){this.handlers[a]&&(this.handlers[a]=null)},e.prototype.forEach=function(a){d.forEach(this.handlers,function(b){null!==b&&a(b)})},a.exports=e},4097:function(a,b,c){"use strict";var d=c(1793),e=c(7303);a.exports=function(a,b){return a&&!d(b)?e(a,b):b}},3572:function(a,b,c){"use strict";var d=c(4867),e=c(8527),f=c(6502),g=c(5546),h=c(644);function i(a){if(a.cancelToken&&a.cancelToken.throwIfRequested(),a.signal&&a.signal.aborted)throw new h}a.exports=function(a){return i(a),a.headers=a.headers||{},a.data=e.call(a,a.data,a.headers,a.transformRequest),a.headers=d.merge(a.headers.common||{},a.headers[a.method]||{},a.headers),d.forEach(["delete","get","head","post","put","patch","common"],function(b){delete a.headers[b]}),(a.adapter||g.adapter)(a).then(function(b){return i(a),b.data=e.call(a,b.data,b.headers,a.transformResponse),b},function(b){return!f(b)&&(i(a),b&&b.response&&(b.response.data=e.call(a,b.response.data,b.response.headers,a.transformResponse))),Promise.reject(b)})}},7185:function(a,b,c){"use strict";var d=c(4867);a.exports=function(a,b){b=b||{};var c={};function e(a,b){return d.isPlainObject(a)&&d.isPlainObject(b)?d.merge(a,b):d.isPlainObject(b)?d.merge({},b):d.isArray(b)?b.slice():b}function f(c){return d.isUndefined(b[c])?d.isUndefined(a[c])?void 0:e(void 0,a[c]):e(a[c],b[c])}function g(a){if(!d.isUndefined(b[a]))return e(void 0,b[a])}function h(c){return d.isUndefined(b[c])?d.isUndefined(a[c])?void 0:e(void 0,a[c]):e(void 0,b[c])}function i(c){return c in b?e(a[c],b[c]):c in a?e(void 0,a[c]):void 0}var j={url:g,method:g,data:g,baseURL:h,transformRequest:h,transformResponse:h,paramsSerializer:h,timeout:h,timeoutMessage:h,withCredentials:h,adapter:h,responseType:h,xsrfCookieName:h,xsrfHeaderName:h,onUploadProgress:h,onDownloadProgress:h,decompress:h,maxContentLength:h,maxBodyLength:h,beforeRedirect:h,transport:h,httpAgent:h,httpsAgent:h,cancelToken:h,socketPath:h,responseEncoding:h,validateStatus:i};return d.forEach(Object.keys(a).concat(Object.keys(b)),function(a){var b=j[a]||f,e=b(a);d.isUndefined(e)&&b!==i||(c[a]=e)}),c}},6026:function(a,b,c){"use strict";var d=c(723);a.exports=function(a,b,c){var e=c.config.validateStatus;!c.status||!e||e(c.status)?a(c):b(new d("Request failed with status code "+c.status,[d.ERR_BAD_REQUEST,d.ERR_BAD_RESPONSE][Math.floor(c.status/100)-4],c.config,c.request,c))}},8527:function(a,b,c){"use strict";var d=c(4867),e=c(5546);a.exports=function(a,b,c){var f=this||e;return d.forEach(c,function(c){a=c.call(f,a,b)}),a}},5546:function(a,b,c){"use strict";var d=c(3454),e=c(4867),f=c(6016),g=c(723),h=c(7874),i=c(7675),j={"Content-Type":"application/x-www-form-urlencoded"};function k(a,b){!e.isUndefined(a)&&e.isUndefined(a["Content-Type"])&&(a["Content-Type"]=b)}var l,m={transitional:h,adapter:("undefined"!=typeof XMLHttpRequest?l=c(5448):void 0!==d&&"[object process]"===Object.prototype.toString.call(d)&&(l=c(5448)),l),transformRequest:[function(a,b){if(f(b,"Accept"),f(b,"Content-Type"),e.isFormData(a)||e.isArrayBuffer(a)||e.isBuffer(a)||e.isStream(a)||e.isFile(a)||e.isBlob(a))return a;if(e.isArrayBufferView(a))return a.buffer;if(e.isURLSearchParams(a))return k(b,"application/x-www-form-urlencoded;charset=utf-8"),a.toString();var c,d=e.isObject(a),g=b&&b["Content-Type"];if((c=e.isFileList(a))||d&&"multipart/form-data"===g){var h=this.env&&this.env.FormData;return i(c?{"files[]":a}:a,h&&new h)}return d||"application/json"===g?(k(b,"application/json"),function(a,b,c){if(e.isString(a))try{return(0,JSON.parse)(a),e.trim(a)}catch(d){if("SyntaxError"!==d.name)throw d}return(0,JSON.stringify)(a)}(a)):a}],transformResponse:[function(a){var b=this.transitional||m.transitional,c=b&&b.silentJSONParsing,d=b&&b.forcedJSONParsing,f=!c&&"json"===this.responseType;if(f||d&&e.isString(a)&&a.length)try{return JSON.parse(a)}catch(h){if(f){if("SyntaxError"===h.name)throw g.from(h,g.ERR_BAD_RESPONSE,this,null,this.response);throw h}}return a}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:c(1623)},validateStatus:function(a){return a>=200&&a<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};e.forEach(["delete","get","head"],function(a){m.headers[a]={}}),e.forEach(["post","put","patch"],function(a){m.headers[a]=e.merge(j)}),a.exports=m},7874:function(a){"use strict";a.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},7288:function(a){a.exports={version:"0.27.2"}},1849:function(a){"use strict";a.exports=function(a,b){return function(){for(var c=Array(arguments.length),d=0;d<c.length;d++)c[d]=arguments[d];return a.apply(b,c)}}},5327:function(a,b,c){"use strict";var d=c(4867);function e(a){return encodeURIComponent(a).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}a.exports=function(a,b,c){if(!b)return a;if(c)f=c(b);else if(d.isURLSearchParams(b))f=b.toString();else{var f,g=[];d.forEach(b,function(a,b){null!=a&&(d.isArray(a)?b+="[]":a=[a],d.forEach(a,function(a){d.isDate(a)?a=a.toISOString():d.isObject(a)&&(a=JSON.stringify(a)),g.push(e(b)+"="+e(a))}))}),f=g.join("&")}if(f){var h=a.indexOf("#");-1!==h&&(a=a.slice(0,h)),a+=(-1===a.indexOf("?")?"?":"&")+f}return a}},7303:function(a){"use strict";a.exports=function(a,b){return b?a.replace(/\/+$/,"")+"/"+b.replace(/^\/+/,""):a}},4372:function(a,b,c){"use strict";var d=c(4867);a.exports=d.isStandardBrowserEnv()?{write:function(a,b,c,e,f,g){var h=[];h.push(a+"="+encodeURIComponent(b)),d.isNumber(c)&&h.push("expires="+new Date(c).toGMTString()),d.isString(e)&&h.push("path="+e),d.isString(f)&&h.push("domain="+f),!0===g&&h.push("secure"),document.cookie=h.join("; ")},read:function(a){var b=document.cookie.match(RegExp("(^|;\\s*)("+a+")=([^;]*)"));return b?decodeURIComponent(b[3]):null},remove:function(a){this.write(a,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},1793:function(a){"use strict";a.exports=function(a){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(a)}},6268:function(a,b,c){"use strict";var d=c(4867);a.exports=function(a){return d.isObject(a)&& !0===a.isAxiosError}},7985:function(a,b,c){"use strict";var d=c(4867);a.exports=d.isStandardBrowserEnv()?function(){var a,b=/(msie|trident)/i.test(navigator.userAgent),c=document.createElement("a");function e(a){var d=a;return b&&(c.setAttribute("href",d),d=c.href),c.setAttribute("href",d),{href:c.href,protocol:c.protocol?c.protocol.replace(/:$/,""):"",host:c.host,search:c.search?c.search.replace(/^\?/,""):"",hash:c.hash?c.hash.replace(/^#/,""):"",hostname:c.hostname,port:c.port,pathname:"/"===c.pathname.charAt(0)?c.pathname:"/"+c.pathname}}return a=e(window.location.href),function(b){var c=d.isString(b)?e(b):b;return c.protocol===a.protocol&&c.host===a.host}}():function(){return!0}},6016:function(a,b,c){"use strict";var d=c(4867);a.exports=function(a,b){d.forEach(a,function(c,d){d!==b&&d.toUpperCase()===b.toUpperCase()&&(a[b]=c,delete a[d])})}},1623:function(a){a.exports=null},4109:function(a,b,c){"use strict";var d=c(4867),e=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];a.exports=function(a){var b,c,f,g={};return a&&d.forEach(a.split("\n"),function(a){f=a.indexOf(":"),b=d.trim(a.substr(0,f)).toLowerCase(),c=d.trim(a.substr(f+1)),b&& !(g[b]&&e.indexOf(b)>=0)&&("set-cookie"===b?g[b]=(g[b]?g[b]:[]).concat([c]):g[b]=g[b]?g[b]+", "+c:c)}),g}},205:function(a){"use strict";a.exports=function(a){var b=/^([-+\w]{1,25})(:?\/\/|:)/.exec(a);return b&&b[1]||""}},8713:function(a){"use strict";a.exports=function(a){return function(b){return a.apply(null,b)}}},7675:function(a,b,c){"use strict";var d=c(1876).Buffer,e=c(4867);a.exports=function(a,b){b=b||new FormData;var c=[];function f(a){return null===a?"":e.isDate(a)?a.toISOString():e.isArrayBuffer(a)||e.isTypedArray(a)?"function"==typeof Blob?new Blob([a]):d.from(a):a}function g(a,d){if(e.isPlainObject(a)||e.isArray(a)){if(-1!==c.indexOf(a))throw Error("Circular reference detected in "+d);c.push(a),e.forEach(a,function(a,c){if(!e.isUndefined(a)){var h,i=d?d+"."+c:c;if(a&&!d&&"object"==typeof a){if(e.endsWith(c,"{}"))a=JSON.stringify(a);else if(e.endsWith(c,"[]")&&(h=e.toArray(a))){h.forEach(function(a){e.isUndefined(a)||b.append(i,f(a))});return}}g(a,i)}}),c.pop()}else b.append(d,f(a))}return g(a),b}},4875:function(a,b,c){"use strict";var d=c(7288).version,e=c(723),f={};["object","boolean","number","function","string","symbol"].forEach(function(a,b){f[a]=function(c){return typeof c===a||"a"+(b<1?"n ":" ")+a}});var g={};f.transitional=function(a,b,c){function f(a,b){return"[Axios v"+d+"] Transitional option '"+a+"'"+b+(c?". "+c:"")}return function(c,d,h){if(!1===a)throw new e(f(d," has been removed"+(b?" in "+b:"")),e.ERR_DEPRECATED);return b&&!g[d]&&(g[d]=!0,console.warn(f(d," has been deprecated since v"+b+" and will be removed in the near future"))),!a||a(c,d,h)}},a.exports={assertOptions:function(a,b,c){if("object"!=typeof a)throw new e("options must be an object",e.ERR_BAD_OPTION_VALUE);for(var d=Object.keys(a),f=d.length;f-- >0;){var g=d[f],h=b[g];if(h){var i=a[g],j=void 0===i||h(i,g,a);if(!0!==j)throw new e("option "+g+" must be "+j,e.ERR_BAD_OPTION_VALUE);continue}if(!0!==c)throw new e("Unknown option "+g,e.ERR_BAD_OPTION)}},validators:f}},4867:function(a,b,c){"use strict";var d,e=c(1849),f=Object.prototype.toString,g=(d=Object.create(null),function(a){var b=f.call(a);return d[b]||(d[b]=b.slice(8,-1).toLowerCase())});function h(a){return a=a.toLowerCase(),function(b){return g(b)===a}}function i(a){return Array.isArray(a)}function j(a){return void 0===a}var k=h("ArrayBuffer");function l(a){return null!==a&&"object"==typeof a}function m(a){if("object"!==g(a))return!1;var b=Object.getPrototypeOf(a);return null===b||b===Object.prototype}var n=h("Date"),o=h("File"),p=h("Blob"),q=h("FileList");function r(a){return"[object Function]"===f.call(a)}var s=h("URLSearchParams");function t(a,b){if(null!=a){if("object"!=typeof a&&(a=[a]),i(a))for(var c=0,d=a.length;c<d;c++)b.call(null,a[c],c,a);else for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&b.call(null,a[e],e,a)}}function u(){var a={};function b(b,c){m(a[c])&&m(b)?a[c]=u(a[c],b):m(b)?a[c]=u({},b):i(b)?a[c]=b.slice():a[c]=b}for(var c=0,d=arguments.length;c<d;c++)t(arguments[c],b);return a}var v,w=(v="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(a){return v&&a instanceof v});a.exports={isArray:i,isArrayBuffer:k,isBuffer:function(a){return null!==a&&!j(a)&&null!==a.constructor&&!j(a.constructor)&&"function"==typeof a.constructor.isBuffer&&a.constructor.isBuffer(a)},isFormData:function(a){var b="[object FormData]";return a&&("function"==typeof FormData&&a instanceof FormData||f.call(a)===b||r(a.toString)&&a.toString()===b)},isArrayBufferView:function(a){var b;return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(a):a&&a.buffer&&k(a.buffer)},isString:function(a){return"string"==typeof a},isNumber:function(a){return"number"==typeof a},isObject:l,isPlainObject:m,isUndefined:j,isDate:n,isFile:o,isBlob:p,isFunction:r,isStream:function(a){return l(a)&&r(a.pipe)},isURLSearchParams:s,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:t,merge:u,extend:function(a,b,c){return t(b,function(b,d){c&&"function"==typeof b?a[d]=e(b,c):a[d]=b}),a},trim:function(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")},stripBOM:function(a){return 65279===a.charCodeAt(0)&&(a=a.slice(1)),a},inherits:function(a,b,c,d){a.prototype=Object.create(b.prototype,d),a.prototype.constructor=a,c&&Object.assign(a.prototype,c)},toFlatObject:function(a,b,c){var d,e,f,g={};b=b||{};do{for(e=(d=Object.getOwnPropertyNames(a)).length;e-- >0;)g[f=d[e]]||(b[f]=a[f],g[f]=!0);a=Object.getPrototypeOf(a)}while(a&&(!c||c(a,b))&&a!==Object.prototype);return b},kindOf:g,kindOfTest:h,endsWith:function(a,b,c){a=String(a),(void 0===c||c>a.length)&&(c=a.length),c-=b.length;var d=a.indexOf(b,c);return -1!==d&&d===c},toArray:function(a){if(!a)return null;var b=a.length;if(j(b))return null;for(var c=Array(b);b-- >0;)c[b]=a[b];return c},isTypedArray:w,isFileList:q}},68:function(a,b,c){"use strict";c.d(b,{Xb:function(){return a8},v0:function(){return cm},Aj:function(){return ba},e5:function(){return a9},w7:function(){return bb}});var d,e=c(4444),f=c(5816),g=function(a,b){return(g=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(a[c]=b[c])})(a,b)},h=function(){return(h=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,arguments)};function i(a,b){var c={};for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,d=Object.getOwnPropertySymbols(a);e<d.length;e++)0>b.indexOf(d[e])&&Object.prototype.propertyIsEnumerable.call(a,d[e])&&(c[d[e]]=a[d[e]]);return c}function j(a){return this instanceof j?(this.v=a,this):new j(a)}var k=c(3333),l=c(8463);function m(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let n=m,o=new e.LL("auth","Firebase",m()),p=new k.Yd("@firebase/auth");function q(a,...b){p.logLevel<=k.in.ERROR&&p.error(`Auth (${f.Jn}): ${a}`,...b)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function r(a,...b){throw v(a,...b)}function s(a,...b){return v(a,...b)}function t(a,b,c){let d=Object.assign(Object.assign({},n()),{[b]:c}),f=new e.LL("auth","Firebase",d);return f.create(b,{appName:a.name})}function u(a,b,c){let d=c;if(!(b instanceof d))throw d.name!==b.constructor.name&&r(a,"argument-error"),t(a,"argument-error",`Type of ${b.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function v(a,...b){if("string"!=typeof a){let c=b[0],d=[...b.slice(1)];return d[0]&&(d[0].appName=a.name),a._errorFactory.create(c,...d)}return o.create(a,...b)}function w(a,b,...c){if(!a)throw v(b,...c)}function x(a){let b="INTERNAL ASSERTION FAILED: "+a;throw q(b),Error(b)}function y(a,b){a||x(b)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let z=new Map;function A(a){y(a instanceof Function,"Expected a class definition");let b=z.get(a);return b?(y(b instanceof a,"Instance stored in cache mismatched with class"),b):(b=new a,z.set(a,b),b)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function B(){var a;return"undefined"!=typeof self&&(null===(a=self.location)|| void 0===a?void 0:a.href)||""}function C(){var a;return"undefined"!=typeof self&&(null===(a=self.location)|| void 0===a?void 0:a.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A structure to help pick between a range of long and short delay durations
 * depending on the current environment. In general, the long delay is used for
 * mobile environments whereas short delays are used for desktop environments.
 */ class D{constructor(a,b){this.shortDelay=a,this.longDelay=b,y(b>a,"Short delay should be less than long delay!"),this.isMobile=(0,e.uI)()||(0,e.b$)()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===C()||"https:"===C()||(0,e.ru)()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function E(a,b){y(a.emulator,"Emulator should always be set here");let{url:c}=a.emulator;return b?`${c}${b.startsWith("/")?b.slice(1):b}`:c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class F{static initialize(a,b,c){this.fetchImpl=a,b&&(this.headersImpl=b),c&&(this.responseImpl=c)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void x("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void x("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void x("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Map from errors returned by the server to errors to developer visible errors
 */ let G={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},H=new D(3e4,6e4);function I(a,b){return a.tenantId&&!b.tenantId?Object.assign(Object.assign({},b),{tenantId:a.tenantId}):b}async function J(a,b,c,d,f={}){return K(a,f,async()=>{let f={},g={};d&&("GET"===b?g=d:f={body:JSON.stringify(d)});let h=(0,e.xO)(Object.assign({key:a.config.apiKey},g)).slice(1),i=await a._getAdditionalHeaders();return i["Content-Type"]="application/json",a.languageCode&&(i["X-Firebase-Locale"]=a.languageCode),F.fetch()(M(a,a.config.apiHost,c,h),Object.assign({method:b,headers:i,referrerPolicy:"no-referrer"},f))})}async function K(a,b,c){a._canInitEmulator=!1;let d=Object.assign(Object.assign({},G),b);try{let f=new N(a),g=await Promise.race([c(),f.promise]);f.clearNetworkTimeout();let h=await g.json();if("needConfirmation"in h)throw O(a,"account-exists-with-different-credential",h);if(g.ok&&!("errorMessage"in h))return h;{let i=g.ok?h.errorMessage:h.error.message,[j,k]=i.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===j)throw O(a,"credential-already-in-use",h);if("EMAIL_EXISTS"===j)throw O(a,"email-already-in-use",h);if("USER_DISABLED"===j)throw O(a,"user-disabled",h);let l=d[j]||j.toLowerCase().replace(/[_\s]+/g,"-");if(k)throw t(a,l,k);r(a,l)}}catch(m){if(m instanceof e.ZR)throw m;r(a,"network-request-failed")}}async function L(a,b,c,d,e={}){let f=await J(a,b,c,d,e);return"mfaPendingCredential"in f&&r(a,"multi-factor-auth-required",{_serverResponse:f}),f}function M(a,b,c,d){let e=`${b}${c}?${d}`;return a.config.emulator?E(a.config,e):`${a.config.apiScheme}://${e}`}class N{constructor(a){this.auth=a,this.timer=null,this.promise=new Promise((a,b)=>{this.timer=setTimeout(()=>b(s(this.auth,"network-request-failed")),H.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function O(a,b,c){let d={appName:a.name};c.email&&(d.email=c.email),c.phoneNumber&&(d.phoneNumber=c.phoneNumber);let e=s(a,b,d);return e.customData._tokenResponse=c,e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function P(a,b){return J(a,"POST","/v1/accounts:delete",b)}async function Q(a,b){return J(a,"POST","/v1/accounts:lookup",b)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function R(a){if(a)try{let b=new Date(Number(a));if(!isNaN(b.getTime()))return b.toUTCString()}catch(c){}}async function S(a,b=!1){let c=(0,e.m9)(a),d=await c.getIdToken(b),f=U(d);w(f&&f.exp&&f.auth_time&&f.iat,c.auth,"internal-error");let g="object"==typeof f.firebase?f.firebase:void 0,h=null==g?void 0:g.sign_in_provider;return{claims:f,token:d,authTime:R(T(f.auth_time)),issuedAtTime:R(T(f.iat)),expirationTime:R(T(f.exp)),signInProvider:h||null,signInSecondFactor:(null==g?void 0:g.sign_in_second_factor)||null}}function T(a){return 1e3*Number(a)}function U(a){var b;let[c,d,f]=a.split(".");if(void 0===c|| void 0===d|| void 0===f)return q("JWT malformed, contained fewer than 3 sections"),null;try{let g=(0,e.tV)(d);if(!g)return q("Failed to decode base64 JWT payload"),null;return JSON.parse(g)}catch(h){return q("Caught error parsing JWT payload as JSON",null===(b=h)|| void 0===b?void 0:b.toString()),null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function V(a,b,c=!1){if(c)return b;try{return await b}catch(d){throw d instanceof e.ZR&&W(d)&&a.auth.currentUser===a&&await a.auth.signOut(),d}}function W({code:a}){return"auth/user-disabled"===a||"auth/user-token-expired"===a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class X{constructor(a,b){this.createdAt=a,this.lastLoginAt=b,this._initializeTime()}_initializeTime(){this.lastSignInTime=R(this.lastLoginAt),this.creationTime=R(this.createdAt)}_copy(a){this.createdAt=a.createdAt,this.lastLoginAt=a.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Y(a){var b;let c=a.auth,d=await a.getIdToken(),e=await V(a,Q(c,{idToken:d}));w(null==e?void 0:e.users.length,c,"internal-error");let f=e.users[0];a._notifyReloadListener(f);let g=(null===(b=f.providerUserInfo)|| void 0===b?void 0:b.length)?_(f.providerUserInfo):[],h=$(a.providerData,g),i=a.isAnonymous,j=!(a.email&&f.passwordHash)&&!(null==h?void 0:h.length),k={uid:f.localId,displayName:f.displayName||null,photoURL:f.photoUrl||null,email:f.email||null,emailVerified:f.emailVerified||!1,phoneNumber:f.phoneNumber||null,tenantId:f.tenantId||null,providerData:h,metadata:new X(f.createdAt,f.lastLoginAt),isAnonymous:!!i&&j};Object.assign(a,k)}async function Z(a){let b=(0,e.m9)(a);await Y(b),await b.auth._persistUserIfCurrent(b),b.auth._notifyListenersIfCurrent(b)}function $(a,b){let c=a.filter(a=>!b.some(b=>b.providerId===a.providerId));return[...c,...b]}function _(a){return a.map(a=>{var{providerId:b}=a,c=i(a,["providerId"]);return{providerId:b,uid:c.rawId||"",displayName:c.displayName||null,email:c.email||null,phoneNumber:c.phoneNumber||null,photoURL:c.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function aa(a,b){let c=await K(a,{},async()=>{let c=(0,e.xO)({grant_type:"refresh_token",refresh_token:b}).slice(1),{tokenApiHost:d,apiKey:f}=a.config,g=M(a,d,"/v1/token",`key=${f}`),h=await a._getAdditionalHeaders();return h["Content-Type"]="application/x-www-form-urlencoded",F.fetch()(g,{method:"POST",headers:h,body:c})});return{accessToken:c.access_token,expiresIn:c.expires_in,refreshToken:c.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * We need to mark this class as internal explicitly to exclude it in the public typings, because
 * it references AuthInternal which has a circular dependency with UserInternal.
 *
 * @internal
 */ class ab{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(a){w(a.idToken,"internal-error"),w(void 0!==a.idToken,"internal-error"),w(void 0!==a.refreshToken,"internal-error");let b="expiresIn"in a&& void 0!==a.expiresIn?Number(a.expiresIn):function(a){let b=U(a);return w(b,"internal-error"),w(void 0!==b.exp,"internal-error"),w(void 0!==b.iat,"internal-error"),Number(b.exp)-Number(b.iat)}(a.idToken);this.updateTokensAndExpiration(a.idToken,a.refreshToken,b)}async getToken(a,b=!1){return(w(!this.accessToken||this.refreshToken,a,"user-token-expired"),b||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(a,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(a,b){let{accessToken:c,refreshToken:d,expiresIn:e}=await aa(a,b);this.updateTokensAndExpiration(c,d,Number(e))}updateTokensAndExpiration(a,b,c){this.refreshToken=b||null,this.accessToken=a||null,this.expirationTime=Date.now()+1e3*c}static fromJSON(a,b){let{refreshToken:c,accessToken:d,expirationTime:e}=b,f=new ab;return c&&(w("string"==typeof c,"internal-error",{appName:a}),f.refreshToken=c),d&&(w("string"==typeof d,"internal-error",{appName:a}),f.accessToken=d),e&&(w("number"==typeof e,"internal-error",{appName:a}),f.expirationTime=e),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(a){this.accessToken=a.accessToken,this.refreshToken=a.refreshToken,this.expirationTime=a.expirationTime}_clone(){return Object.assign(new ab,this.toJSON())}_performRefresh(){return x("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ac(a,b){w("string"==typeof a|| void 0===a,"internal-error",{appName:b})}class ad{constructor(a){var{uid:b,auth:c,stsTokenManager:d}=a,e=i(a,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(a){this.user=a,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){!this.isRunning&&(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(a){var b;if(a){let c=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),c}{this.errorBackoff=3e4;let d=null!==(b=this.user.stsTokenManager.expirationTime)&& void 0!==b?b:0,e=d-Date.now()-3e5;return Math.max(0,e)}}schedule(a=!1){if(!this.isRunning)return;let b=this.getInterval(a);this.timerId=setTimeout(async()=>{await this.iteration()},b)}async iteration(){var a;try{await this.user.getIdToken(!0)}catch(b){(null===(a=b)|| void 0===a?void 0:a.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=b,this.auth=c,this.stsTokenManager=d,this.accessToken=d.accessToken,this.displayName=e.displayName||null,this.email=e.email||null,this.emailVerified=e.emailVerified||!1,this.phoneNumber=e.phoneNumber||null,this.photoURL=e.photoURL||null,this.isAnonymous=e.isAnonymous||!1,this.tenantId=e.tenantId||null,this.providerData=e.providerData?[...e.providerData]:[],this.metadata=new X(e.createdAt||void 0,e.lastLoginAt||void 0)}async getIdToken(a){let b=await V(this,this.stsTokenManager.getToken(this.auth,a));return w(b,this.auth,"internal-error"),this.accessToken!==b&&(this.accessToken=b,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),b}getIdTokenResult(a){return S(this,a)}reload(){return Z(this)}_assign(a){this!==a&&(w(this.uid===a.uid,this.auth,"internal-error"),this.displayName=a.displayName,this.photoURL=a.photoURL,this.email=a.email,this.emailVerified=a.emailVerified,this.phoneNumber=a.phoneNumber,this.isAnonymous=a.isAnonymous,this.tenantId=a.tenantId,this.providerData=a.providerData.map(a=>Object.assign({},a)),this.metadata._copy(a.metadata),this.stsTokenManager._assign(a.stsTokenManager))}_clone(a){return new ad(Object.assign(Object.assign({},this),{auth:a,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(a){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=a,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(a){this.reloadListener?this.reloadListener(a):this.reloadUserInfo=a}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(a,b=!1){let c=!1;a.idToken&&a.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(a),c=!0),b&&await Y(this),await this.auth._persistUserIfCurrent(this),c&&this.auth._notifyListenersIfCurrent(this)}async delete(){let a=await this.getIdToken();return await V(this,P(this.auth,{idToken:a})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(a=>Object.assign({},a)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(a,b){var c,d,e,f,g,h,i,j;let k=null!==(c=b.displayName)&& void 0!==c?c:void 0,l=null!==(d=b.email)&& void 0!==d?d:void 0,m=null!==(e=b.phoneNumber)&& void 0!==e?e:void 0,n=null!==(f=b.photoURL)&& void 0!==f?f:void 0,o=null!==(g=b.tenantId)&& void 0!==g?g:void 0,p=null!==(h=b._redirectEventId)&& void 0!==h?h:void 0,q=null!==(i=b.createdAt)&& void 0!==i?i:void 0,r=null!==(j=b.lastLoginAt)&& void 0!==j?j:void 0,{uid:s,emailVerified:t,isAnonymous:u,providerData:v,stsTokenManager:x}=b;w(s&&x,a,"internal-error");let y=ab.fromJSON(this.name,x);w("string"==typeof s,a,"internal-error"),ac(k,a.name),ac(l,a.name),w("boolean"==typeof t,a,"internal-error"),w("boolean"==typeof u,a,"internal-error"),ac(m,a.name),ac(n,a.name),ac(o,a.name),ac(p,a.name),ac(q,a.name),ac(r,a.name);let z=new ad({uid:s,auth:a,email:l,emailVerified:t,displayName:k,isAnonymous:u,photoURL:n,phoneNumber:m,tenantId:o,stsTokenManager:y,createdAt:q,lastLoginAt:r});return v&&Array.isArray(v)&&(z.providerData=v.map(a=>Object.assign({},a))),p&&(z._redirectEventId=p),z}static async _fromIdTokenResponse(a,b,c=!1){let d=new ab;d.updateFromServerResponse(b);let e=new ad({uid:b.localId,auth:a,stsTokenManager:d,isAnonymous:c});return await Y(e),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ae{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(a,b){this.storage[a]=b}async _get(a){let b=this.storage[a];return void 0===b?null:b}async _remove(a){delete this.storage[a]}_addListener(a,b){}_removeListener(a,b){}}ae.type="NONE";let af=ae;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ag(a,b,c){return`firebase:${a}:${b}:${c}`}class ah{constructor(a,b,c){this.persistence=a,this.auth=b,this.userKey=c;let{config:d,name:e}=this.auth;this.fullUserKey=ag(this.userKey,d.apiKey,e),this.fullPersistenceKey=ag("persistence",d.apiKey,e),this.boundEventHandler=b._onStorageEvent.bind(b),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(a){return this.persistence._set(this.fullUserKey,a.toJSON())}async getCurrentUser(){let a=await this.persistence._get(this.fullUserKey);return a?ad._fromJSON(this.auth,a):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(a){if(this.persistence===a)return;let b=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=a,b)return this.setCurrentUser(b)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(a,b,c="authUser"){if(!b.length)return new ah(A(af),a,c);let d=(await Promise.all(b.map(async a=>{if(await a._isAvailable())return a}))).filter(a=>a),e=d[0]||A(af),f=ag(c,a.config.apiKey,a.name),g=null;for(let h of b)try{let i=await h._get(f);if(i){let j=ad._fromJSON(a,i);h!==e&&(g=j),e=h;break}}catch(k){}let l=d.filter(a=>a._shouldAllowMigration);return e._shouldAllowMigration&&l.length&&(e=l[0],g&&await e._set(f,g.toJSON()),await Promise.all(b.map(async a=>{if(a!==e)try{await a._remove(f)}catch(b){}}))),new ah(e,a,c)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Determine the browser for the purposes of reporting usage to the API
 */ function ai(a){let b=a.toLowerCase();if(b.includes("opera/")||b.includes("opr/")||b.includes("opios/"))return"Opera";if(am(b))return"IEMobile";if(b.includes("msie")||b.includes("trident/"))return"IE";{if(b.includes("edge/"))return"Edge";if(aj(b))return"Firefox";if(b.includes("silk/"))return"Silk";if(ao(b))return"Blackberry";if(ap(b))return"Webos";if(ak(b))return"Safari";if((b.includes("chrome/")||al(b))&&!b.includes("edge/"))return"Chrome";if(an(b))return"Android";let c=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,d=a.match(c);if((null==d?void 0:d.length)===2)return d[1]}return"Other"}function aj(a=(0,e.z$)()){return/firefox\//i.test(a)}function ak(a=(0,e.z$)()){let b=a.toLowerCase();return b.includes("safari/")&&!b.includes("chrome/")&&!b.includes("crios/")&&!b.includes("android")}function al(a=(0,e.z$)()){return/crios\//i.test(a)}function am(a=(0,e.z$)()){return/iemobile/i.test(a)}function an(a=(0,e.z$)()){return/android/i.test(a)}function ao(a=(0,e.z$)()){return/blackberry/i.test(a)}function ap(a=(0,e.z$)()){return/webos/i.test(a)}function aq(a=(0,e.z$)()){return/iphone|ipad|ipod/i.test(a)||/macintosh/i.test(a)&&/mobile/i.test(a)}function ar(a=(0,e.z$)()){return aq(a)||an(a)||ap(a)||ao(a)||/windows phone/i.test(a)||am(a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /*
 * Determine the SDK version string
 */ function as(a,b=[]){let c;switch(a){case"Browser":c=ai((0,e.z$)());break;case"Worker":c=`${ai((0,e.z$)())}-${a}`;break;default:c=a}let d=b.length?b.join(","):"FirebaseCore-web";return`${c}/JsCore/${f.Jn}/${d}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class at{constructor(a,b,c){this.app=a,this.heartbeatServiceProvider=b,this.config=c,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new av(this),this.idTokenSubscription=new av(this),this.beforeStateQueue=new /**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(a){this.auth=a,this.queue=[]}pushCallback(a,b){let c=b=>new Promise((c,d)=>{try{let e=a(b);c(e)}catch(f){d(f)}});c.onAbort=b,this.queue.push(c);let d=this.queue.length-1;return()=>{this.queue[d]=()=>Promise.resolve()}}async runMiddleware(a){var b;if(this.auth.currentUser===a)return;let c=[];try{for(let d of this.queue)await d(a),d.onAbort&&c.push(d.onAbort)}catch(e){for(let f of(c.reverse(),c))try{f()}catch(g){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(b=e)|| void 0===b?void 0:b.message})}}}(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=o,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=a.name,this.clientVersion=c.sdkClientVersion}_initializeWithPersistence(a,b){return b&&(this._popupRedirectResolver=A(b)),this._initializationPromise=this.queue(async()=>{var c,d;if(!this._deleted&&(this.persistenceManager=await ah.create(this,a),!this._deleted)){if(null===(c=this._popupRedirectResolver)|| void 0===c?void 0:c._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(b),this.lastNotifiedUid=(null===(d=this.currentUser)|| void 0===d?void 0:d.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let a=await this.assertedPersistence.getCurrentUser();if(this.currentUser||a){if(this.currentUser&&a&&this.currentUser.uid===a.uid){this._currentUser._assign(a),await this.currentUser.getIdToken();return}await this._updateCurrentUser(a,!0)}}async initializeCurrentUser(a){var b;let c=await this.assertedPersistence.getCurrentUser(),d=c,e=!1;if(a&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let f=null===(b=this.redirectUser)|| void 0===b?void 0:b._redirectEventId,g=null==d?void 0:d._redirectEventId,h=await this.tryRedirectSignIn(a);(!f||f===g)&&(null==h?void 0:h.user)&&(d=h.user,e=!0)}if(!d)return this.directlySetCurrentUser(null);if(!d._redirectEventId){if(e)try{await this.beforeStateQueue.runMiddleware(d)}catch(i){d=c,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return d?this.reloadAndSetCurrentUserOrClear(d):this.directlySetCurrentUser(null)}return(w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===d._redirectEventId)?this.directlySetCurrentUser(d):this.reloadAndSetCurrentUserOrClear(d)}async tryRedirectSignIn(a){let b=null;try{b=await this._popupRedirectResolver._completeRedirectFn(this,a,!0)}catch(c){await this._setRedirectUser(null)}return b}async reloadAndSetCurrentUserOrClear(a){var b;try{await Y(a)}catch(c){if((null===(b=c)|| void 0===b?void 0:b.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(a)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let a=navigator;return a.languages&&a.languages[0]||a.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(a){let b=a?(0,e.m9)(a):null;return b&&w(b.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(b&&b._clone(this))}async _updateCurrentUser(a,b=!1){if(!this._deleted)return a&&w(this.tenantId===a.tenantId,this,"tenant-id-mismatch"),b||await this.beforeStateQueue.runMiddleware(a),this.queue(async()=>{await this.directlySetCurrentUser(a),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(a){return this.queue(async()=>{await this.assertedPersistence.setPersistence(A(a))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(a){this._errorFactory=new e.LL("auth","Firebase",a())}onAuthStateChanged(a,b,c){return this.registerStateListener(this.authStateSubscription,a,b,c)}beforeAuthStateChanged(a,b){return this.beforeStateQueue.pushCallback(a,b)}onIdTokenChanged(a,b,c){return this.registerStateListener(this.idTokenSubscription,a,b,c)}toJSON(){var a;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(a=this._currentUser)|| void 0===a?void 0:a.toJSON()}}async _setRedirectUser(a,b){let c=await this.getOrInitRedirectPersistenceManager(b);return null===a?c.removeCurrentUser():c.setCurrentUser(a)}async getOrInitRedirectPersistenceManager(a){if(!this.redirectPersistenceManager){let b=a&&A(a)||this._popupRedirectResolver;w(b,this,"argument-error"),this.redirectPersistenceManager=await ah.create(this,[A(b._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(a){var b,c;return(this._isInitialized&&await this.queue(async()=>{}),(null===(b=this._currentUser)|| void 0===b?void 0:b._redirectEventId)===a)?this._currentUser:(null===(c=this.redirectUser)|| void 0===c?void 0:c._redirectEventId)===a?this.redirectUser:null}async _persistUserIfCurrent(a){if(a===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(a))}_notifyListenersIfCurrent(a){a===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var a,b;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let c=null!==(b=null===(a=this.currentUser)|| void 0===a?void 0:a.uid)&& void 0!==b?b:null;this.lastNotifiedUid!==c&&(this.lastNotifiedUid=c,this.authStateSubscription.next(this.currentUser))}registerStateListener(a,b,c,d){if(this._deleted)return()=>{};let e="function"==typeof b?b:b.next.bind(b),f=this._isInitialized?Promise.resolve():this._initializationPromise;return(w(f,this,"internal-error"),f.then(()=>e(this.currentUser)),"function"==typeof b)?a.addObserver(b,c,d):a.addObserver(b)}async directlySetCurrentUser(a){this.currentUser&&this.currentUser!==a&&this._currentUser._stopProactiveRefresh(),a&&this.isProactiveRefreshEnabled&&a._startProactiveRefresh(),this.currentUser=a,a?await this.assertedPersistence.setCurrentUser(a):await this.assertedPersistence.removeCurrentUser()}queue(a){return this.operations=this.operations.then(a,a),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(a){!(!a||this.frameworks.includes(a))&&(this.frameworks.push(a),this.frameworks.sort(),this.clientVersion=as(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var a;let b={"X-Client-Version":this.clientVersion};this.app.options.appId&&(b["X-Firebase-gmpid"]=this.app.options.appId);let c=await (null===(a=this.heartbeatServiceProvider.getImmediate({optional:!0}))|| void 0===a?void 0:a.getHeartbeatsHeader());return c&&(b["X-Firebase-Client"]=c),b}}function au(a){return(0,e.m9)(a)}class av{constructor(a){this.auth=a,this.observer=null,this.addObserver=(0,e.ne)(a=>this.observer=a)}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function aw(a){if(!a)return null;let b=Number(a);return isNaN(b)?null:b}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Interface that represents the credentials returned by an {@link AuthProvider}.
 *
 * @remarks
 * Implementations specify the details about each auth provider's credential requirements.
 *
 * @public
 */ class ax{constructor(a,b){this.providerId=a,this.signInMethod=b}toJSON(){return x("not implemented")}_getIdTokenResponse(a){return x("not implemented")}_linkToIdToken(a,b){return x("not implemented")}_getReauthenticationResolver(a){return x("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ay(a,b){return J(a,"POST","/v1/accounts:resetPassword",I(a,b))}async function az(a,b){return J(a,"POST","/v1/accounts:update",b)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function aA(a,b){return L(a,"POST","/v1/accounts:signInWithPassword",I(a,b))}async function aB(a,b){return J(a,"POST","/v1/accounts:sendOobCode",I(a,b))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function aC(a,b){return L(a,"POST","/v1/accounts:signInWithEmailLink",I(a,b))}async function aD(a,b){return L(a,"POST","/v1/accounts:signInWithEmailLink",I(a,b))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Interface that represents the credentials returned by {@link EmailAuthProvider} for
 * {@link ProviderId}.PASSWORD
 *
 * @remarks
 * Covers both {@link SignInMethod}.EMAIL_PASSWORD and
 * {@link SignInMethod}.EMAIL_LINK.
 *
 * @public
 */ class aE extends ax{constructor(a,b,c,d=null){super("password",c),this._email=a,this._password=b,this._tenantId=d}static _fromEmailAndPassword(a,b){return new aE(a,b,"password")}static _fromEmailAndCode(a,b,c=null){return new aE(a,b,"emailLink",c)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(a){let b="string"==typeof a?JSON.parse(a):a;if((null==b?void 0:b.email)&&(null==b?void 0:b.password)){if("password"===b.signInMethod)return this._fromEmailAndPassword(b.email,b.password);if("emailLink"===b.signInMethod)return this._fromEmailAndCode(b.email,b.password,b.tenantId)}return null}async _getIdTokenResponse(a){switch(this.signInMethod){case"password":return aA(a,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return aC(a,{email:this._email,oobCode:this._password});default:r(a,"internal-error")}}async _linkToIdToken(a,b){switch(this.signInMethod){case"password":return az(a,{idToken:b,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return aD(a,{idToken:b,email:this._email,oobCode:this._password});default:r(a,"internal-error")}}_getReauthenticationResolver(a){return this._getIdTokenResponse(a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function aF(a,b){return L(a,"POST","/v1/accounts:signInWithIdp",I(a,b))}class aG extends ax{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(a){let b=new aG(a.providerId,a.signInMethod);return a.idToken||a.accessToken?(a.idToken&&(b.idToken=a.idToken),a.accessToken&&(b.accessToken=a.accessToken),a.nonce&&!a.pendingToken&&(b.nonce=a.nonce),a.pendingToken&&(b.pendingToken=a.pendingToken)):a.oauthToken&&a.oauthTokenSecret?(b.accessToken=a.oauthToken,b.secret=a.oauthTokenSecret):r("argument-error"),b}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(a){let b="string"==typeof a?JSON.parse(a):a,{providerId:c,signInMethod:d}=b,e=i(b,["providerId","signInMethod"]);if(!c||!d)return null;let f=new aG(c,d);return f.idToken=e.idToken||void 0,f.accessToken=e.accessToken||void 0,f.secret=e.secret,f.nonce=e.nonce,f.pendingToken=e.pendingToken||null,f}_getIdTokenResponse(a){let b=this.buildRequest();return aF(a,b)}_linkToIdToken(a,b){let c=this.buildRequest();return c.idToken=b,aF(a,c)}_getReauthenticationResolver(a){let b=this.buildRequest();return b.autoCreate=!1,aF(a,b)}buildRequest(){let a={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)a.pendingToken=this.pendingToken;else{let b={};this.idToken&&(b.id_token=this.idToken),this.accessToken&&(b.access_token=this.accessToken),this.secret&&(b.oauth_token_secret=this.secret),b.providerId=this.providerId,this.nonce&&!this.pendingToken&&(b.nonce=this.nonce),a.postBody=(0,e.xO)(b)}return a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function aH(a,b){return J(a,"POST","/v1/accounts:sendVerificationCode",I(a,b))}async function aI(a,b){return L(a,"POST","/v1/accounts:signInWithPhoneNumber",I(a,b))}async function aJ(a,b){let c=await L(a,"POST","/v1/accounts:signInWithPhoneNumber",I(a,b));if(c.temporaryProof)throw O(a,"account-exists-with-different-credential",c);return c}let aK={USER_NOT_FOUND:"user-not-found"};async function aL(a,b){let c=Object.assign(Object.assign({},b),{operation:"REAUTH"});return L(a,"POST","/v1/accounts:signInWithPhoneNumber",I(a,c),aK)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents the credentials returned by {@link PhoneAuthProvider}.
 *
 * @public
 */ class aM extends ax{constructor(a){super("phone","phone"),this.params=a}static _fromVerification(a,b){return new aM({verificationId:a,verificationCode:b})}static _fromTokenResponse(a,b){return new aM({phoneNumber:a,temporaryProof:b})}_getIdTokenResponse(a){return aI(a,this._makeVerificationRequest())}_linkToIdToken(a,b){return aJ(a,Object.assign({idToken:b},this._makeVerificationRequest()))}_getReauthenticationResolver(a){return aL(a,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:a,phoneNumber:b,verificationId:c,verificationCode:d}=this.params;return a&&b?{temporaryProof:a,phoneNumber:b}:{sessionInfo:c,code:d}}toJSON(){let a={providerId:this.providerId};return this.params.phoneNumber&&(a.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(a.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(a.verificationCode=this.params.verificationCode),this.params.verificationId&&(a.verificationId=this.params.verificationId),a}static fromJSON(a){"string"==typeof a&&(a=JSON.parse(a));let{verificationId:b,verificationCode:c,phoneNumber:d,temporaryProof:e}=a;return c||b||d||e?new aM({verificationId:b,verificationCode:c,phoneNumber:d,temporaryProof:e}):null}}class aN{constructor(a){var b,c,d,f,g,h;let i=(0,e.zd)((0,e.pd)(a)),j=null!==(b=i.apiKey)&& void 0!==b?b:null,k=null!==(c=i.oobCode)&& void 0!==c?c:null,l=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Maps the mode string in action code URL to Action Code Info operation.
 *
 * @param mode
 */ function(a){switch(a){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(d=i.mode)&& void 0!==d?d:null);w(j&&k&&l,"argument-error"),this.apiKey=j,this.operation=l,this.code=k,this.continueUrl=null!==(f=i.continueUrl)&& void 0!==f?f:null,this.languageCode=null!==(g=i.languageCode)&& void 0!==g?g:null,this.tenantId=null!==(h=i.tenantId)&& void 0!==h?h:null}static parseLink(a){let b=function(a){let b=(0,e.zd)((0,e.pd)(a)).link,c=b?(0,e.zd)((0,e.pd)(b)).deep_link_id:null,d=(0,e.zd)((0,e.pd)(a)).deep_link_id,f=d?(0,e.zd)((0,e.pd)(d)).link:null;return f||d||c||b||a}(a);try{return new aN(b)}catch(c){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating {@link EmailAuthCredential}.
 *
 * @public
 */ class aO{constructor(){this.providerId=aO.PROVIDER_ID}static credential(a,b){return aE._fromEmailAndPassword(a,b)}static credentialWithLink(a,b){let c=aN.parseLink(b);return w(c,"argument-error"),aE._fromEmailAndCode(a,c.code,c.tenantId)}}aO.PROVIDER_ID="password",aO.EMAIL_PASSWORD_SIGN_IN_METHOD="password",aO.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The base class for all Federated providers (OAuth (including OIDC), SAML).
 *
 * This class is not meant to be instantiated directly.
 *
 * @public
 */ class aP{constructor(a){this.providerId=a,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(a){this.defaultLanguageCode=a}setCustomParameters(a){return this.customParameters=a,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Common code to all OAuth providers. This is separate from the
 * {@link OAuthProvider} so that child providers (like
 * {@link GoogleAuthProvider}) don't inherit the `credential` instance method.
 * Instead, they rely on a static `credential` method.
 */ class aQ extends aP{constructor(){super(...arguments),this.scopes=[]}addScope(a){return this.scopes.includes(a)||this.scopes.push(a),this}getScopes(){return[...this.scopes]}}class aR extends null{static credentialFromJSON(a){let b="string"==typeof a?JSON.parse(a):a;return w("providerId"in b&&"signInMethod"in b,"argument-error"),aG._fromParams(b)}credential(a){return this._credential(Object.assign(Object.assign({},a),{nonce:a.rawNonce}))}_credential(a){return w(a.idToken||a.accessToken,"argument-error"),aG._fromParams(Object.assign(Object.assign({},a),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(a){return aR.oauthCredentialFromTaggedObject(a)}static credentialFromError(a){return aR.oauthCredentialFromTaggedObject(a.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;let{oauthIdToken:b,oauthAccessToken:c,oauthTokenSecret:d,pendingToken:e,nonce:f,providerId:g}=a;if(!c&&!d&&!b&&!e||!g)return null;try{return new aR(g)._credential({idToken:b,accessToken:c,nonce:f,pendingToken:e})}catch(h){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.FACEBOOK.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new FacebookAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('user_birthday');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Facebook Access Token.
 *   const credential = FacebookAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new FacebookAuthProvider();
 * provider.addScope('user_birthday');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Facebook Access Token.
 * const credential = FacebookAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 *
 * @public
 */ class aS extends aQ{constructor(){super("facebook.com")}static credential(a){return aG._fromParams({providerId:aS.PROVIDER_ID,signInMethod:aS.FACEBOOK_SIGN_IN_METHOD,accessToken:a})}static credentialFromResult(a){return aS.credentialFromTaggedObject(a)}static credentialFromError(a){return aS.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a||!("oauthAccessToken"in a)||!a.oauthAccessToken)return null;try{return aS.credential(a.oauthAccessToken)}catch(b){return null}}}aS.FACEBOOK_SIGN_IN_METHOD="facebook.com",aS.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating an an {@link OAuthCredential} for {@link ProviderId}.GOOGLE.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new GoogleAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('profile');
 * provider.addScope('email');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Google Access Token.
 *   const credential = GoogleAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new GoogleAuthProvider();
 * provider.addScope('profile');
 * provider.addScope('email');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Google Access Token.
 * const credential = GoogleAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 *
 * @public
 */ class aT extends aQ{constructor(){super("google.com"),this.addScope("profile")}static credential(a,b){return aG._fromParams({providerId:aT.PROVIDER_ID,signInMethod:aT.GOOGLE_SIGN_IN_METHOD,idToken:a,accessToken:b})}static credentialFromResult(a){return aT.credentialFromTaggedObject(a)}static credentialFromError(a){return aT.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;let{oauthIdToken:b,oauthAccessToken:c}=a;if(!b&&!c)return null;try{return aT.credential(b,c)}catch(d){return null}}}aT.GOOGLE_SIGN_IN_METHOD="google.com",aT.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.GITHUB.
 *
 * @remarks
 * GitHub requires an OAuth 2.0 redirect, so you can either handle the redirect directly, or use
 * the {@link signInWithPopup} handler:
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new GithubAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('repo');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Github Access Token.
 *   const credential = GithubAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new GithubAuthProvider();
 * provider.addScope('repo');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Github Access Token.
 * const credential = GithubAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 * @public
 */ class aU extends aQ{constructor(){super("github.com")}static credential(a){return aG._fromParams({providerId:aU.PROVIDER_ID,signInMethod:aU.GITHUB_SIGN_IN_METHOD,accessToken:a})}static credentialFromResult(a){return aU.credentialFromTaggedObject(a)}static credentialFromError(a){return aU.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a||!("oauthAccessToken"in a)||!a.oauthAccessToken)return null;try{return aU.credential(a.oauthAccessToken)}catch(b){return null}}}aU.GITHUB_SIGN_IN_METHOD="github.com",aU.PROVIDER_ID="github.com";class aV extends null{constructor(a,b){super(a,a),this.pendingToken=b}_getIdTokenResponse(a){let b=this.buildRequest();return aF(a,b)}_linkToIdToken(a,b){let c=this.buildRequest();return c.idToken=b,aF(a,c)}_getReauthenticationResolver(a){let b=this.buildRequest();return b.autoCreate=!1,aF(a,b)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(a){let b="string"==typeof a?JSON.parse(a):a,{providerId:c,signInMethod:d,pendingToken:e}=b;return c&&d&&e&&c===d?new aV(c,e):null}static _create(a,b){return new aV(a,b)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}}class aW extends null{constructor(a){w(a.startsWith("saml."),"argument-error"),super(a)}static credentialFromResult(a){return aW.samlCredentialFromTaggedObject(a)}static credentialFromError(a){return aW.samlCredentialFromTaggedObject(a.customData||{})}static credentialFromJSON(a){let b=aV.fromJSON(a);return w(b,"argument-error"),b}static samlCredentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;let{pendingToken:b,providerId:c}=a;if(!b||!c)return null;try{return aV._create(c,b)}catch(d){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.TWITTER.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new TwitterAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Twitter Access Token and Secret.
 *   const credential = TwitterAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 *   const secret = credential.secret;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new TwitterAuthProvider();
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Twitter Access Token and Secret.
 * const credential = TwitterAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * const secret = credential.secret;
 * ```
 *
 * @public
 */ class aX extends aQ{constructor(){super("twitter.com")}static credential(a,b){return aG._fromParams({providerId:aX.PROVIDER_ID,signInMethod:aX.TWITTER_SIGN_IN_METHOD,oauthToken:a,oauthTokenSecret:b})}static credentialFromResult(a){return aX.credentialFromTaggedObject(a)}static credentialFromError(a){return aX.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;let{oauthAccessToken:b,oauthTokenSecret:c}=a;if(!b||!c)return null;try{return aX.credential(b,c)}catch(d){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function aY(a,b){return L(a,"POST","/v1/accounts:signUp",I(a,b))}aX.TWITTER_SIGN_IN_METHOD="twitter.com",aX.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aZ{constructor(a){this.user=a.user,this.providerId=a.providerId,this._tokenResponse=a._tokenResponse,this.operationType=a.operationType}static async _fromIdTokenResponse(a,b,c,d=!1){let e=await ad._fromIdTokenResponse(a,c,d),f=a$(c),g=new aZ({user:e,providerId:f,_tokenResponse:c,operationType:b});return g}static async _forOperation(a,b,c){await a._updateTokensIfNecessary(c,!0);let d=a$(c);return new aZ({user:a,providerId:d,_tokenResponse:c,operationType:b})}}function a$(a){return a.providerId?a.providerId:"phoneNumber"in a?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class a_ extends e.ZR{constructor(a,b,c,d){var e;super(b.code,b.message),this.operationType=c,this.user=d,Object.setPrototypeOf(this,a_.prototype),this.customData={appName:a.name,tenantId:null!==(e=a.tenantId)&& void 0!==e?e:void 0,_serverResponse:b.customData._serverResponse,operationType:c}}static _fromErrorAndOperation(a,b,c,d){return new a_(a,b,c,d)}}function a0(a,b,c,d){let e="reauthenticate"===b?c._getReauthenticationResolver(a):c._getIdTokenResponse(a);return e.catch(c=>{if("auth/multi-factor-auth-required"===c.code)throw a_._fromErrorAndOperation(a,c,b,d);throw c})}async function a1(a,b,c=!1){let d=await V(a,b._linkToIdToken(a.auth,await a.getIdToken()),c);return aZ._forOperation(a,"link",d)}async function a2(a,b,c){var d;await Y(b);let e=(d=b.providerData,new Set(d.map(({providerId:a})=>a).filter(a=>!!a)));w(e.has(c)===a,b.auth,!1===a?"provider-already-linked":"no-such-provider")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function a3(a,b,c=!1){var d;let{auth:e}=a,f="reauthenticate";try{let g=await V(a,a0(e,f,b,a),c);w(g.idToken,e,"internal-error");let h=U(g.idToken);w(h,e,"internal-error");let{sub:i}=h;return w(a.uid===i,e,"user-mismatch"),aZ._forOperation(a,f,g)}catch(j){throw(null===(d=j)|| void 0===d?void 0:d.code)==="auth/user-not-found"&&r(e,"user-mismatch"),j}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function a4(a,b,c=!1){let d="signIn",e=await a0(a,d,b),f=await aZ._fromIdTokenResponse(a,d,e);return c||await a._updateCurrentUser(f.user),f}async function a5(a,b){return a4(au(a),b)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class a6{constructor(a,b){this.factorId=a,this.uid=b.mfaEnrollmentId,this.enrollmentTime=new Date(b.enrolledAt).toUTCString(),this.displayName=b.displayName}static _fromServerResponse(a,b){return"phoneInfo"in b?a7._fromServerResponse(a,b):r(a,"internal-error")}}class a7 extends null{constructor(a){super("phone",a),this.phoneNumber=a.phoneInfo}static _fromServerResponse(a,b){return new a7(b)}}async function a8(a,b,c){let d=au(a),e=await aY(d,{returnSecureToken:!0,email:b,password:c}),f=await aZ._fromIdTokenResponse(d,"signIn",e);return await d._updateCurrentUser(f.user),f}function a9(a,b,c){return a5((0,e.m9)(a),aO.credential(b,c))}function ba(a,b,c,d){return(0,e.m9)(a).onAuthStateChanged(b,c,d)}function bb(a){return(0,e.m9)(a).signOut()}class bc{constructor(a,b){this.type=a,this.credential=b}static _fromIdtoken(a){return new bc("enroll",a)}static _fromMfaPendingCredential(a){return new bc("signin",a)}toJSON(){let a="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[a]:this.credential}}}static fromJSON(a){var b,c;if(null==a?void 0:a.multiFactorSession){if(null===(b=a.multiFactorSession)|| void 0===b?void 0:b.pendingCredential)return bc._fromMfaPendingCredential(a.multiFactorSession.pendingCredential);if(null===(c=a.multiFactorSession)|| void 0===c?void 0:c.idToken)return bc._fromIdtoken(a.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bd{constructor(a,b,c){this.session=a,this.hints=b,this.signInResolver=c}static _fromError(a,b){let c=au(a),d=b.customData._serverResponse,e=(d.mfaInfo||[]).map(a=>a6._fromServerResponse(c,a));w(d.mfaPendingCredential,c,"internal-error");let f=bc._fromMfaPendingCredential(d.mfaPendingCredential);return new bd(f,e,async a=>{let e=await a._process(c,f);delete d.mfaInfo,delete d.mfaPendingCredential;let g=Object.assign(Object.assign({},d),{idToken:e.idToken,refreshToken:e.refreshToken});switch(b.operationType){case"signIn":let h=await aZ._fromIdTokenResponse(c,b.operationType,g);return await c._updateCurrentUser(h.user),h;case"reauthenticate":return w(b.user,c,"internal-error"),aZ._forOperation(b.user,b.operationType,g);default:r(c,"internal-error")}})}async resolveSignIn(a){return this.signInResolver(a)}}class be{constructor(a){this.user=a,this.enrolledFactors=[],a._onReload(b=>{b.mfaInfo&&(this.enrolledFactors=b.mfaInfo.map(b=>a6._fromServerResponse(a.auth,b)))})}static _fromUser(a){return new be(a)}async getSession(){return bc._fromIdtoken(await this.user.getIdToken())}async enroll(a,b){let c=await this.getSession(),d=await V(this.user,a._process(this.user.auth,c,b));return await this.user._updateTokensIfNecessary(d),this.user.reload()}async unenroll(a){var b,c,d;let e="string"==typeof a?a:a.uid,f=await this.user.getIdToken(),g=await V(this.user,(c=this.user.auth,J(c,"POST","/v2/accounts/mfaEnrollment:withdraw",I(c,d={idToken:f,mfaEnrollmentId:e}))));this.enrolledFactors=this.enrolledFactors.filter(({uid:a})=>a!==e),await this.user._updateTokensIfNecessary(g);try{await this.user.reload()}catch(h){if((null===(b=h)|| void 0===b?void 0:b.code)!=="auth/user-token-expired")throw h}}}new WeakMap;let bf="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // There are two different browser persistence types: local and session.
// Both have the same implementation but use a different underlying storage
// object.
class bg{constructor(a,b){this.storageRetriever=a,this.type=b}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(bf,"1"),this.storage.removeItem(bf),Promise.resolve(!0)}catch(a){return Promise.resolve(!1)}}_set(a,b){return this.storage.setItem(a,JSON.stringify(b)),Promise.resolve()}_get(a){let b=this.storage.getItem(a);return Promise.resolve(b?JSON.parse(b):null)}_remove(a){return this.storage.removeItem(a),Promise.resolve()}get storage(){return this.storageRetriever()}}class bh extends bg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(a,b)=>this.onStorageEvent(a,b),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(){let a=(0,e.z$)();return ak(a)||aq(a)}()&&function(){try{return!!(window&&window!==window.top)}catch(a){return!1}}(),this.fallbackToPolling=ar(),this._shouldAllowMigration=!0}forAllChangedKeys(a){for(let b of Object.keys(this.listeners)){let c=this.storage.getItem(b),d=this.localCache[b];c!==d&&a(b,d,c)}}onStorageEvent(a,b=!1){if(!a.key){this.forAllChangedKeys((a,b,c)=>{this.notifyListeners(a,c)});return}let c=a.key;if(b?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let d=this.storage.getItem(c);if(a.newValue!==d)null!==a.newValue?this.storage.setItem(c,a.newValue):this.storage.removeItem(c);else if(this.localCache[c]===a.newValue&&!b)return}let f=()=>{let a=this.storage.getItem(c);(b||this.localCache[c]!==a)&&this.notifyListeners(c,a)},g=this.storage.getItem(c);(0,e.w1)()&&10===document.documentMode&&g!==a.newValue&&a.newValue!==a.oldValue?setTimeout(f,10):f()}notifyListeners(a,b){this.localCache[a]=b;let c=this.listeners[a];if(c)for(let d of Array.from(c))d(b?JSON.parse(b):b)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((a,b,c)=>{this.onStorageEvent(new StorageEvent("storage",{key:a,oldValue:b,newValue:c}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(a,b){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[a]||(this.listeners[a]=new Set,this.localCache[a]=this.storage.getItem(a)),this.listeners[a].add(b)}_removeListener(a,b){this.listeners[a]&&(this.listeners[a].delete(b),0===this.listeners[a].size&&delete this.listeners[a]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(a,b){await super._set(a,b),this.localCache[a]=JSON.stringify(b)}async _get(a){let b=await super._get(a);return this.localCache[a]=JSON.stringify(b),b}async _remove(a){await super._remove(a),delete this.localCache[a]}}bh.type="LOCAL";let bi=bh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bj extends bg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(a,b){}_removeListener(a,b){}}bj.type="SESSION";let bk=bj;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Interface class for receiving messages.
 *
 */ class bl{constructor(a){this.eventTarget=a,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(a){let b=this.receivers.find(b=>b.isListeningto(a));if(b)return b;let c=new bl(a);return this.receivers.push(c),c}isListeningto(a){return this.eventTarget===a}async handleEvent(a){var b;let c=a,{eventId:d,eventType:e,data:f}=c.data,g=this.handlersMap[e];if(!(null==g?void 0:g.size))return;c.ports[0].postMessage({status:"ack",eventId:d,eventType:e});let h=Array.from(g).map(async a=>a(c.origin,f)),i=await Promise.all((b=h).map(async a=>{try{let b=await a;return{fulfilled:!0,value:b}}catch(c){return{fulfilled:!1,reason:c}}}));c.ports[0].postMessage({status:"done",eventId:d,eventType:e,response:i})}_subscribe(a,b){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[a]||(this.handlersMap[a]=new Set),this.handlersMap[a].add(b)}_unsubscribe(a,b){this.handlersMap[a]&&b&&this.handlersMap[a].delete(b),b&&0!==this.handlersMap[a].size||delete this.handlersMap[a],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function bm(a="",b=10){let c="";for(let d=0;d<b;d++)c+=Math.floor(10*Math.random());return a+c}bl.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Interface for sending messages and waiting for a completion response.
 *
 */ class bn{constructor(a){this.target=a,this.handlers=new Set}removeMessageHandler(a){a.messageChannel&&(a.messageChannel.port1.removeEventListener("message",a.onMessage),a.messageChannel.port1.close()),this.handlers.delete(a)}async _send(a,b,c=50){let d="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!d)throw Error("connection_unavailable");let e,f;return new Promise((g,h)=>{let i=bm("",20);d.port1.start();let j=setTimeout(()=>{h(Error("unsupported_event"))},c);f={messageChannel:d,onMessage(a){let b=a;if(b.data.eventId===i)switch(b.data.status){case"ack":clearTimeout(j),e=setTimeout(()=>{h(Error("timeout"))},3e3);break;case"done":clearTimeout(e),g(b.data.response);break;default:clearTimeout(j),clearTimeout(e),h(Error("invalid_response"))}}},this.handlers.add(f),d.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:a,eventId:i,data:b},[d.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Lazy accessor for window, since the compat layer won't tree shake this out,
 * we need to make sure not to mess with window unless we have to
 */ function bo(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function bp(){return void 0!==bo().WorkerGlobalScope&&"function"==typeof bo().importScripts}async function bq(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let a=await navigator.serviceWorker.ready;return a.active}catch(b){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let br="firebaseLocalStorageDb",bs="firebaseLocalStorage",bt="fbase_key";class bu{constructor(a){this.request=a}toPromise(){return new Promise((a,b)=>{this.request.addEventListener("success",()=>{a(this.request.result)}),this.request.addEventListener("error",()=>{b(this.request.error)})})}}function bv(a,b){return a.transaction([bs],b?"readwrite":"readonly").objectStore(bs)}function bw(){let a=indexedDB.open(br,1);return new Promise((b,c)=>{a.addEventListener("error",()=>{c(a.error)}),a.addEventListener("upgradeneeded",()=>{let b=a.result;try{b.createObjectStore(bs,{keyPath:bt})}catch(d){c(d)}}),a.addEventListener("success",async()=>{let c=a.result;c.objectStoreNames.contains(bs)?b(c):(c.close(),await function(){let a=indexedDB.deleteDatabase(br);return new bu(a).toPromise()}(),b(await bw()))})})}async function bx(a,b,c){let d=bv(a,!0).put({[bt]:b,value:c});return new bu(d).toPromise()}async function by(a,b){let c=bv(a,!1).get(b),d=await new bu(c).toPromise();return void 0===d?null:d.value}function bz(a,b){let c=bv(a,!0).delete(b);return new bu(c).toPromise()}class bA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await bw()),this.db}async _withRetries(a){let b=0;for(;;)try{let c=await this._openDb();return await a(c)}catch(d){if(b++ >3)throw d;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bl._getInstance(bp()?self:null),this.receiver._subscribe("keyChanged",async(a,b)=>{let c=await this._poll();return{keyProcessed:c.includes(b.key)}}),this.receiver._subscribe("ping",async(a,b)=>["keyChanged"])}async initializeSender(){var a,b;if(this.activeServiceWorker=await bq(),!this.activeServiceWorker)return;this.sender=new bn(this.activeServiceWorker);let c=await this.sender._send("ping",{},800);c&&(null===(a=c[0])|| void 0===a?void 0:a.fulfilled)&&(null===(b=c[0])|| void 0===b?void 0:b.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(a){var b;if(this.sender&&this.activeServiceWorker&&((null===(b=null==navigator?void 0:navigator.serviceWorker)|| void 0===b?void 0:b.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:a},this.serviceWorkerReceiverAvailable?800:50)}catch(c){}}async _isAvailable(){try{if(!indexedDB)return!1;let a=await bw();return await bx(a,bf,"1"),await bz(a,bf),!0}catch(b){}return!1}async _withPendingWrite(a){this.pendingWrites++;try{await a()}finally{this.pendingWrites--}}async _set(a,b){return this._withPendingWrite(async()=>(await this._withRetries(c=>bx(c,a,b)),this.localCache[a]=b,this.notifyServiceWorker(a)))}async _get(a){let b=await this._withRetries(b=>by(b,a));return this.localCache[a]=b,b}async _remove(a){return this._withPendingWrite(async()=>(await this._withRetries(b=>bz(b,a)),delete this.localCache[a],this.notifyServiceWorker(a)))}async _poll(){let a=await this._withRetries(a=>{let b=bv(a,!1).getAll();return new bu(b).toPromise()});if(!a||0!==this.pendingWrites)return[];let b=[],c=new Set;for(let{fbase_key:d,value:e}of a)c.add(d),JSON.stringify(this.localCache[d])!==JSON.stringify(e)&&(this.notifyListeners(d,e),b.push(d));for(let f of Object.keys(this.localCache))this.localCache[f]&&!c.has(f)&&(this.notifyListeners(f,null),b.push(f));return b}notifyListeners(a,b){this.localCache[a]=b;let c=this.listeners[a];if(c)for(let d of Array.from(c))d(b)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(a,b){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[a]||(this.listeners[a]=new Set,this._get(a)),this.listeners[a].add(b)}_removeListener(a,b){this.listeners[a]&&(this.listeners[a].delete(b),0===this.listeners[a].size&&delete this.listeners[a]),0===Object.keys(this.listeners).length&&this.stopPolling()}}bA.type="LOCAL";let bB=bA;function bC(a){return`__${a}${Math.floor(1e6*Math.random())}`}class bD{constructor(a,b,c){this.params=c,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};let d="string"==typeof a?document.getElementById(a):a;w(d,"argument-error",{appName:b}),this.container=d,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=bE(50);let{callback:a,"expired-callback":b}=this.params;if(a)try{a(this.responseToken)}catch(c){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,b)try{b()}catch(a){}this.isVisible&&this.execute()},6e4)},500))}checkIfDeleted(){if(this.deleted)throw Error("reCAPTCHA mock was already deleted!")}}function bE(a){let b=[],c="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let d=0;d<a;d++)b.push(c.charAt(Math.floor(Math.random()*c.length)));return b.join("")}bC("rcb"),new D(3e4,6e4);async function bF(a,b,c){var d,e,f,g,h;let i=await c.verify();try{w("string"==typeof i,a,"argument-error"),w("recaptcha"===c.type,a,"argument-error");let j;if(j="string"==typeof b?{phoneNumber:b}:b,"session"in j){let k=j.session;if("phoneNumber"in j){w("enroll"===k.type,a,"internal-error");let l=await (e=a,f={idToken:k.credential,phoneEnrollmentInfo:{phoneNumber:j.phoneNumber,recaptchaToken:i}},J(e,"POST","/v2/accounts/mfaEnrollment:start",I(e,f)));return l.phoneSessionInfo.sessionInfo}{w("signin"===k.type,a,"internal-error");let m=(null===(d=j.multiFactorHint)|| void 0===d?void 0:d.uid)||j.multiFactorUid;w(m,a,"missing-multi-factor-info");let n=await (g=a,h={mfaPendingCredential:k.credential,mfaEnrollmentId:m,phoneSignInInfo:{recaptchaToken:i}},J(g,"POST","/v2/accounts/mfaSignIn:start",I(g,h)));return n.phoneResponseInfo.sessionInfo}}{let{sessionInfo:o}=await aH(a,{phoneNumber:j.phoneNumber,recaptchaToken:i});return o}}finally{c._reset()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating an {@link PhoneAuthCredential}.
 *
 * @example
 * ```javascript
 * // 'recaptcha-container' is the ID of an element in the DOM.
 * const applicationVerifier = new RecaptchaVerifier('recaptcha-container');
 * const provider = new PhoneAuthProvider(auth);
 * const verificationId = await provider.verifyPhoneNumber('+16505550101', applicationVerifier);
 * // Obtain the verificationCode from the user.
 * const phoneCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
 * const userCredential = await signInWithCredential(auth, phoneCredential);
 * ```
 *
 * @public
 */ class bG{constructor(a){this.providerId=bG.PROVIDER_ID,this.auth=au(a)}verifyPhoneNumber(a,b){return bF(this.auth,a,(0,e.m9)(b))}static credential(a,b){return aM._fromVerification(a,b)}static credentialFromResult(a){return bG.credentialFromTaggedObject(a)}static credentialFromError(a){return bG.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;let{phoneNumber:b,temporaryProof:c}=a;return b&&c?aM._fromTokenResponse(b,c):null}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Chooses a popup/redirect resolver to use. This prefers the override (which
 * is directly passed in), and falls back to the property set on the auth
 * object. If neither are available, this function errors w/ an argument error.
 */ function bH(a,b){return b?A(b):(w(a._popupRedirectResolver,a,"argument-error"),a._popupRedirectResolver)}bG.PROVIDER_ID="phone",bG.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bI extends ax{constructor(a){super("custom","custom"),this.params=a}_getIdTokenResponse(a){return aF(a,this._buildIdpRequest())}_linkToIdToken(a,b){return aF(a,this._buildIdpRequest(b))}_getReauthenticationResolver(a){return aF(a,this._buildIdpRequest())}_buildIdpRequest(a){let b={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return a&&(b.idToken=a),b}}function bJ(a){return a4(a.auth,new bI(a),a.bypassAuthState)}function bK(a){let{auth:b,user:c}=a;return w(c,b,"internal-error"),a3(c,new bI(a),a.bypassAuthState)}async function bL(a){let{auth:b,user:c}=a;return w(c,b,"internal-error"),a1(c,new bI(a),a.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Popup event manager. Handles the popup's entire lifecycle; listens to auth
 * events
 */ class bM{constructor(a,b,c,d,e=!1){this.auth=a,this.resolver=c,this.user=d,this.bypassAuthState=e,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(b)?b:[b]}execute(){return new Promise(async(a,b)=>{this.pendingPromise={resolve:a,reject:b};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(c){this.reject(c)}})}async onAuthEvent(a){let{urlResponse:b,sessionId:c,postBody:d,tenantId:e,error:f,type:g}=a;if(f){this.reject(f);return}let h={auth:this.auth,requestUri:b,sessionId:c,tenantId:e||void 0,postBody:d||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(h))}catch(i){this.reject(i)}}onError(a){this.reject(a)}getIdpTask(a){switch(a){case"signInViaPopup":case"signInViaRedirect":return bJ;case"linkViaPopup":case"linkViaRedirect":return bL;case"reauthViaPopup":case"reauthViaRedirect":return bK;default:r(this.auth,"internal-error")}}resolve(a){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(a),this.unregisterAndCleanUp()}reject(a){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(a),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let bN=new D(2e3,1e4);class bO extends bM{constructor(a,b,c,d,e){super(a,b,d,e),this.provider=c,this.authWindow=null,this.pollId=null,bO.currentPopupAction&&bO.currentPopupAction.cancel(),bO.currentPopupAction=this}async executeNotNull(){let a=await this.execute();return w(a,this.auth,"internal-error"),a}async onExecution(){y(1===this.filter.length,"Popup operations only handle one event");let a=bm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],a),this.authWindow.associatedEvent=a,this.resolver._originValidation(this.auth).catch(a=>{this.reject(a)}),this.resolver._isIframeWebStorageSupported(this.auth,a=>{a||this.reject(s(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var a;return(null===(a=this.authWindow)|| void 0===a?void 0:a.associatedEvent)||null}cancel(){this.reject(s(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bO.currentPopupAction=null}pollUserCancellation(){let a=()=>{var b,c;if(null===(c=null===(b=this.authWindow)|| void 0===b?void 0:b.window)|| void 0===c?void 0:c.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(s(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(a,bN.get())};a()}}bO.currentPopupAction=null;let bP=new Map;class bQ extends bM{constructor(a,b,c=!1){super(a,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],b,void 0,c),this.eventId=null}async execute(){let a=bP.get(this.auth._key());if(!a){try{let b=await bR(this.resolver,this.auth),c=b?await super.execute():null;a=()=>Promise.resolve(c)}catch(d){a=()=>Promise.reject(d)}bP.set(this.auth._key(),a)}return this.bypassAuthState||bP.set(this.auth._key(),()=>Promise.resolve(null)),a()}async onAuthEvent(a){if("signInViaRedirect"===a.type)return super.onAuthEvent(a);if("unknown"===a.type){this.resolve(null);return}if(a.eventId){let b=await this.auth._redirectUserForId(a.eventId);if(b)return this.user=b,super.onAuthEvent(a);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bR(a,b){let c=bU(b),d=bT(a);if(!await d._isAvailable())return!1;let e=await d._get(c)==="true";return await d._remove(c),e}async function bS(a,b){return bT(a)._set(bU(b),"true")}function bT(a){return A(a._redirectPersistence)}function bU(a){return ag("pendingRedirect",a.config.apiKey,a.name)}async function bV(a,b,c=!1){let d=au(a),e=bH(d,b),f=new bQ(d,e,c),g=await f.execute();return g&&!c&&(delete g.user._redirectEventId,await d._persistUserIfCurrent(g.user),await d._setRedirectUser(null,b)),g}async function bW(a){let b=bm(`${a.uid}:::`);return a._redirectEventId=b,await a.auth._setRedirectUser(a),await a.auth._persistUserIfCurrent(a),b}class bX{constructor(a){this.auth=a,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(a){this.consumers.add(a),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,a)&&(this.sendToConsumer(this.queuedRedirectEvent,a),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(a){this.consumers.delete(a)}onEvent(a){if(this.hasEventBeenHandled(a))return!1;let b=!1;return this.consumers.forEach(c=>{this.isEventForConsumer(a,c)&&(b=!0,this.sendToConsumer(a,c),this.saveEventToCache(a))}),this.hasHandledPotentialRedirect||!b$(a)||(this.hasHandledPotentialRedirect=!0,b||(this.queuedRedirectEvent=a,b=!0)),b}sendToConsumer(a,b){var c;if(a.error&&!bZ(a)){let d=(null===(c=a.error.code)|| void 0===c?void 0:c.split("auth/")[1])||"internal-error";b.onError(s(this.auth,d))}else b.onAuthEvent(a)}isEventForConsumer(a,b){let c=null===b.eventId|| !!a.eventId&&a.eventId===b.eventId;return b.filter.includes(a.type)&&c}hasEventBeenHandled(a){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(bY(a))}saveEventToCache(a){this.cachedEventUids.add(bY(a)),this.lastProcessedEventTime=Date.now()}}function bY(a){return[a.type,a.eventId,a.sessionId,a.tenantId].filter(a=>a).join("-")}function bZ({type:a,error:b}){return"unknown"===a&&(null==b?void 0:b.code)==="auth/no-auth-event"}function b$(a){switch(a.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bZ(a);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function b_(a,b={}){return J(a,"GET","/v1/projects",b)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let b0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,b1=/^https?/;async function b2(a){if(a.config.emulator)return;let{authorizedDomains:b}=await b_(a);for(let c of b)try{if(b3(c))return}catch(d){}r(a,"unauthorized-domain")}function b3(a){let b=B(),{protocol:c,hostname:d}=new URL(b);if(a.startsWith("chrome-extension://")){let e=new URL(a);return""===e.hostname&&""===d?"chrome-extension:"===c&&a.replace("chrome-extension://","")===b.replace("chrome-extension://",""):"chrome-extension:"===c&&e.hostname===d}if(!b1.test(c))return!1;if(b0.test(a))return d===a;let f=a.replace(/\./g,"\\."),g=RegExp("^(.+\\."+f+"|"+f+")$","i");return g.test(d)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let b4=new D(3e4,6e4);function b5(){let a=bo().___jsl;if(null==a?void 0:a.H){for(let b of Object.keys(a.H))if(a.H[b].r=a.H[b].r||[],a.H[b].L=a.H[b].L||[],a.H[b].r=[...a.H[b].L],a.CP)for(let c=0;c<a.CP.length;c++)a.CP[c]=null}}let b6=null,b7=new D(5e3,15e3),b8={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},b9=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function ca(a){var b,c;let d=await (b=a,b6=b6||(c=b,new Promise((a,b)=>{var d,e,f,g;function h(){b5(),gapi.load("gapi.iframes",{callback:()=>{a(gapi.iframes.getContext())},ontimeout:()=>{b5(),b(s(c,"network-request-failed"))},timeout:b4.get()})}if(null===(e=null===(d=bo().gapi)|| void 0===d?void 0:d.iframes)|| void 0===e?void 0:e.Iframe)a(gapi.iframes.getContext());else if(null===(f=bo().gapi)|| void 0===f?void 0:f.load)h();else{let i=bC("iframefcb");return bo()[i]=()=>{gapi.load?h():b(s(c,"network-request-failed"))},(g=`https://apis.google.com/js/api.js?onload=${i}`,new Promise((a,b)=>{var c,d;let e=document.createElement("script");e.setAttribute("src",g),e.onload=a,e.onerror=a=>{let c=s("internal-error");c.customData=a,b(c)},e.type="text/javascript",e.charset="UTF-8",(null!==(d=null===(c=document.getElementsByTagName("head"))|| void 0===c?void 0:c[0])&& void 0!==d?d:document).appendChild(e)})).catch(a=>b(a))}}).catch(a=>{throw b6=null,a}))),g=bo().gapi;return w(g,a,"internal-error"),d.open({where:document.body,url:function(a){let b=a.config;w(b.authDomain,a,"auth-domain-config-required");let c=b.emulator?E(b,"emulator/auth/iframe"):`https://${a.config.authDomain}/__/auth/iframe`,d={apiKey:b.apiKey,appName:a.name,v:f.Jn},g=b9.get(a.config.apiHost);g&&(d.eid=g);let h=a._getFrameworks();return h.length&&(d.fw=h.join(",")),`${c}?${(0,e.xO)(d).slice(1)}`}(a),messageHandlersFilter:g.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:b8,dontclear:!0},b=>new Promise(async(c,d)=>{await b.restyle({setHideOnLeave:!1});let e=s(a,"network-request-failed"),f=bo().setTimeout(()=>{d(e)},b7.get());function g(){bo().clearTimeout(f),c(b)}b.ping(g).then(g,()=>{d(e)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let cb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class cc{constructor(a){this.window=a,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(a){}}}function cd(a,b,c,d,g,h){w(a.config.authDomain,a,"auth-domain-config-required"),w(a.config.apiKey,a,"invalid-api-key");let i={apiKey:a.config.apiKey,appName:a.name,authType:c,redirectUrl:d,v:f.Jn,eventId:g};if(b instanceof aP)for(let[j,k]of(b.setDefaultLanguage(a.languageCode),i.providerId=b.providerId||"",(0,e.xb)(b.getCustomParameters())||(i.customParameters=JSON.stringify(b.getCustomParameters())),Object.entries(h||{})))i[j]=k;if(b instanceof aQ){let l=b.getScopes().filter(a=>""!==a);l.length>0&&(i.scopes=l.join(","))}a.tenantId&&(i.tid=a.tenantId);let m=i;for(let n of Object.keys(m))void 0===m[n]&&delete m[n];return`${ce(a)}?${(0,e.xO)(m).slice(1)}`}function ce({config:a}){return a.emulator?E(a,"emulator/auth/handler"):`https://${a.authDomain}/__/auth/handler`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The special web storage event
 *
 */ let cf="webStorageSupport",cg=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bk,this._completeRedirectFn=bV,this._overrideRedirectResult=function(a,b){bP.set(a._key(),b)}}async _openPopup(a,b,c,d){var f;y(null===(f=this.eventManagers[a._key()])|| void 0===f?void 0:f.manager,"_initialize() not called before _openPopup()");let g=cd(a,b,c,B(),d);return function(a,b,c,d=500,f=600){let g=Math.max((window.screen.availHeight-f)/2,0).toString(),h=Math.max((window.screen.availWidth-d)/2,0).toString(),i="",j=Object.assign(Object.assign({},cb),{width:d.toString(),height:f.toString(),top:g,left:h}),k=(0,e.z$)().toLowerCase();c&&(i=al(k)?"_blank":c),aj(k)&&(b=b||"http://localhost",j.scrollbars="yes");let l=Object.entries(j).reduce((a,[b,c])=>`${a}${b}=${c},`,"");if(function(a=(0,e.z$)()){var b;return aq(a)&&!!(null===(b=window.navigator)|| void 0===b?void 0:b.standalone)}(k)&&"_self"!==i)return function a(b,c){let d=document.createElement("a");d.href=b,d.target=c;let e=document.createEvent("MouseEvent");e.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),d.dispatchEvent(e)}(b||"",i),new cc(null);let m=window.open(b||"",i,l);w(m,a,"popup-blocked");try{m.focus()}catch(n){}return new cc(m)}(a,g,bm())}async _openRedirect(a,b,c,d){var e;return await this._originValidation(a),e=cd(a,b,c,B(),d),bo().location.href=e,new Promise(()=>{})}_initialize(a){let b=a._key();if(this.eventManagers[b]){let{manager:c,promise:d}=this.eventManagers[b];return c?Promise.resolve(c):(y(d,"If manager is not set, promise should be"),d)}let e=this.initAndGetManager(a);return this.eventManagers[b]={promise:e},e.catch(()=>{delete this.eventManagers[b]}),e}async initAndGetManager(a){let b=await ca(a),c=new bX(a);return b.register("authEvent",b=>{w(null==b?void 0:b.authEvent,a,"invalid-auth-event");let d=c.onEvent(b.authEvent);return{status:d?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[a._key()]={manager:c},this.iframes[a._key()]=b,c}_isIframeWebStorageSupported(a,b){let c=this.iframes[a._key()];c.send(cf,{type:cf},c=>{var d;let e=null===(d=null==c?void 0:c[0])|| void 0===d?void 0:d[cf];void 0!==e&&b(!!e),r(a,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(a){let b=a._key();return this.originValidationPromises[b]||(this.originValidationPromises[b]=b2(a)),this.originValidationPromises[b]}get _shouldInitProactively(){return ar()||ak()||aq()}};class ch{constructor(a){this.factorId=a}_process(a,b,c){switch(b.type){case"enroll":return this._finalizeEnroll(a,b.credential,c);case"signin":return this._finalizeSignIn(a,b.credential);default:return x("unexpected MultiFactorSessionType")}}}class ci extends ch{constructor(a){super("phone"),this.credential=a}static _fromCredential(a){return new ci(a)}_finalizeEnroll(a,b,c){var d,e;return d=a,J(d,"POST","/v2/accounts/mfaEnrollment:finalize",I(d,e={idToken:b,displayName:c,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(a,b){var c,d;return c=a,J(c,"POST","/v2/accounts/mfaSignIn:finalize",I(c,d={mfaPendingCredential:b,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}(class{constructor(){}static assertion(a){return ci._fromCredential(a)}}).FACTOR_ID="phone";var cj="@firebase/auth",ck="0.20.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cl{constructor(a){this.auth=a,this.internalListeners=new Map}getUid(){var a;return this.assertAuthConfigured(),(null===(a=this.auth.currentUser)|| void 0===a?void 0:a.uid)||null}async getToken(a){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let b=await this.auth.currentUser.getIdToken(a);return{accessToken:b}}addAuthTokenListener(a){if(this.assertAuthConfigured(),this.internalListeners.has(a))return;let b=this.auth.onIdTokenChanged(b=>{var c;a((null===(c=b)|| void 0===c?void 0:c.stsTokenManager.accessToken)||null)});this.internalListeners.set(a,b),this.updateProactiveRefresh()}removeAuthTokenListener(a){this.assertAuthConfigured();let b=this.internalListeners.get(a);b&&(this.internalListeners.delete(a),b(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns the Auth instance associated with the provided {@link @firebase/app#FirebaseApp}.
 * If no instance exists, initializes an Auth instance with platform-specific default dependencies.
 *
 * @param app - The Firebase App.
 *
 * @public
 */ function cm(a=(0,f.Mq)()){let b=(0,f.qX)(a,"auth");return b.isInitialized()?b.getImmediate():/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Initializes an {@link Auth} instance with fine-grained control over
 * {@link Dependencies}.
 *
 * @remarks
 *
 * This function allows more control over the {@link Auth} instance than
 * {@link getAuth}. `getAuth` uses platform-specific defaults to supply
 * the {@link Dependencies}. In general, `getAuth` is the easiest way to
 * initialize Auth and works for most use cases. Use `initializeAuth` if you
 * need control over which persistence layer is used, or to minimize bundle
 * size if you're not using either `signInWithPopup` or `signInWithRedirect`.
 *
 * For example, if your app only uses anonymous accounts and you only want
 * accounts saved for the current session, initialize `Auth` with:
 *
 * ```js
 * const auth = initializeAuth(app, {
 *   persistence: browserSessionPersistence,
 *   popupRedirectResolver: undefined,
 * });
 * ```
 *
 * @public
 */ function(a,b){let c=(0,f.qX)(a,"auth");if(c.isInitialized()){let d=c.getImmediate(),g=c.getOptions();if((0,e.vZ)(g,null!=b?b:{}))return d;r(d,"already-initialized")}let h=c.initialize({options:b});return h}(a,{popupRedirectResolver:cg,persistence:[bB,bi,bk]})}d="Browser",(0,f.Xd)(new l.wA("auth",(a,{options:b})=>{let c=a.getProvider("app").getImmediate(),e=a.getProvider("heartbeat"),{apiKey:f,authDomain:g}=c.options;return((a,c)=>{w(f&&!f.includes(":"),"invalid-api-key",{appName:a.name}),w(!(null==g?void 0:g.includes(":")),"argument-error",{appName:a.name});let e={apiKey:f,authDomain:g,clientPlatform:d,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:as(d)},h=new at(a,c,e);return function(a,b){let c=(null==b?void 0:b.persistence)||[],d=(Array.isArray(c)?c:[c]).map(A);(null==b?void 0:b.errorMap)&&a._updateErrorMap(b.errorMap),a._initializeWithPersistence(d,null==b?void 0:b.popupRedirectResolver)}(h,b),h})(c,e)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((a,b,c)=>{let d=a.getProvider("auth-internal");d.initialize()})),(0,f.Xd)(new l.wA("auth-internal",a=>{var b;let c=au(a.getProvider("auth").getImmediate());return b=c,new cl(b)},"PRIVATE").setInstantiationMode("EXPLICIT")),(0,f.KN)(cj,ck,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(a){switch(a){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(d)),(0,f.KN)(cj,ck,"esm2017")},3454:function(a,b,c){"use strict";var d,e;a.exports=(null==(d=c.g.process)?void 0:d.env)&&"object"==typeof(null==(e=c.g.process)?void 0:e.env)?c.g.process:c(7663)},6840:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return c(66)}])},9156:function(a,b,c){"use strict";c.d(b,{E:function(){return l},H:function(){return m}});var d=c(7568),e=c(4051),f=c.n(e),g=c(5893),h=c(7294),i=c(68),j=c(1163),k=(0,h.createContext)({}),l=function(){return(0,h.useContext)(k)},m=function(a){var b=a.children,c=(0,j.useRouter)(),e=(0,i.v0)(),l=(0,h.useState)(null),m=l[0],n=l[1],o="/login"===c.pathname||"/signup"===c.pathname;return(0,h.useEffect)(function(){var a,b=(0,i.Aj)(e,(a=(0,d.Z)(f().mark(function a(b){return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(n(b),a.t0=!b&&!o,!a.t0){a.next=5;break}return a.next=5,c.push("/login");case 5:case"end":return a.stop()}},a)})),function(b){return a.apply(this,arguments)}));return function(){b()}},[]),(0,g.jsx)(k.Provider,{value:{user:m},children:b})}},66:function(a,b,c){"use strict";function d(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}c.r(b),c.d(b,{default:function(){return g}});var e=c(5893);c(472),c(6903),c(8210);var f=c(9156),g=function(a){var b=a.Component,c=a.pageProps;return(0,e.jsx)(f.H,{children:(0,e.jsx)(b,function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},e=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),e.forEach(function(b){d(a,b,c[b])})}return a}({},c))})}},6903:function(a,b,c){"use strict";c.d(b,{f0:function(){return p},aU:function(){return q},T4:function(){return o}});var d=c(7568);function e(a,b){return null!=b&&"undefined"!=typeof Symbol&&b[Symbol.hasInstance]?!!b[Symbol.hasInstance](a):a instanceof b}var f=c(4051),g=c.n(f),h=c(5816);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ (0,h.KN)("firebase","9.9.4","app");var i=c(68),j=c(7294),k=c(1163),l=c(9669),m=c.n(l);(0,h.ZF)({apiKey:"AIzaSyDUyPgNlr4K6cP_R0skzOtnW-BawgdOKE0",authDomain:"insect-rally.firebaseapp.com",projectId:"insect-rally",storageBucket:"insect-rally.appspot.com",messagingSenderId:"635528997469",appId:"1:635528997469:web:4bfbd3f0ebf51e29e8bbb4"});var n=(0,i.v0)(),o=function(){var a,b=(0,k.useRouter)(),c=(0,j.useState)(""),f=c[0],h=c[1],l=(0,j.useState)(null),m=l[0],o=l[1],p=function(a){o(null),h(a.currentTarget.value+"@example.com")},q=(a=(0,d.Z)(g().mark(function a(){return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,(0,i.Xb)(n,f,"123456");case 3:b.push("/"),a.next=9;break;case 6:a.prev=6,a.t0=a.catch(0),e(a.t0,Error)&&(console.log(a.t0.message),o(a.t0.message));case 9:case"end":return a.stop()}},a,null,[[0,6]])})),function(){return a.apply(this,arguments)});return console.log(m),{handleChangeEmail:p,handleCreateUser:q,error:m}},p=function(){var a,b=(0,k.useRouter)(),c=(0,j.useState)(""),f=c[0],h=c[1],l=(0,j.useState)(null),m=l[0],o=l[1],p=function(a){o(null),h(a.currentTarget.value+"@example.com")},q=(a=(0,d.Z)(g().mark(function a(){return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,(0,i.e5)(n,f,"123456");case 3:b.push("/"),a.next=9;break;case 6:a.prev=6,a.t0=a.catch(0),e(a.t0,Error)&&o(a.t0.message);case 9:case"end":return a.stop()}},a,null,[[0,6]])})),function(){return a.apply(this,arguments)});return console.log(m),{handleChangeEmail:p,handleSignInUser:q,error:m}},q=function(){var a,b=(0,k.useRouter)();return a=(0,d.Z)(g().mark(function a(){return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,(0,i.w7)(n);case 3:b.push("/login"),a.next=9;break;case 6:a.prev=6,a.t0=a.catch(0),m().isAxiosError(a.t0)&&(console.log(a.t0.message),b.push("/login"));case 9:case"end":return a.stop()}},a,null,[[0,6]])})),function(){return a.apply(this,arguments)}}},1876:function(a){!function(){var b={449:function(a,b){"use strict";b.byteLength=function(a){var b=i(a),c=b[0],d=b[1];return(c+d)*3/4-d},b.toByteArray=function(a){var b,c,f,g,h,j=i(a),k=j[0],l=j[1],m=new e((g=k,(g+(h=l))*3/4-h)),n=0,o=l>0?k-4:k;for(c=0;c<o;c+=4)b=d[a.charCodeAt(c)]<<18|d[a.charCodeAt(c+1)]<<12|d[a.charCodeAt(c+2)]<<6|d[a.charCodeAt(c+3)],m[n++]=b>>16&255,m[n++]=b>>8&255,m[n++]=255&b;return 2===l&&(b=d[a.charCodeAt(c)]<<2|d[a.charCodeAt(c+1)]>>4,m[n++]=255&b),1===l&&(b=d[a.charCodeAt(c)]<<10|d[a.charCodeAt(c+1)]<<4|d[a.charCodeAt(c+2)]>>2,m[n++]=b>>8&255,m[n++]=255&b),m},b.fromByteArray=function(a){for(var b,d=a.length,e=d%3,f=[],g=0,h=d-e;g<h;g+=16383)f.push(k(a,g,g+16383>h?h:g+16383));return 1===e?f.push(c[(b=a[d-1])>>2]+c[b<<4&63]+"=="):2===e&&f.push(c[(b=(a[d-2]<<8)+a[d-1])>>10]+c[b>>4&63]+c[b<<2&63]+"="),f.join("")};for(var c=[],d=[],e="undefined"!=typeof Uint8Array?Uint8Array:Array,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",g=0,h=f.length;g<h;++g)c[g]=f[g],d[f.charCodeAt(g)]=g;function i(a){var b=a.length;if(b%4>0)throw Error("Invalid string. Length must be a multiple of 4");var c=a.indexOf("=");-1===c&&(c=b);var d=c===b?0:4-c%4;return[c,d]}function j(a){return c[a>>18&63]+c[a>>12&63]+c[a>>6&63]+c[63&a]}function k(a,b,c){for(var d,e=[],f=b;f<c;f+=3)e.push(j(d=(a[f]<<16&16711680)+(a[f+1]<<8&65280)+(255&a[f+2])));return e.join("")}d["-".charCodeAt(0)]=62,d["_".charCodeAt(0)]=63},877:function(a,b,c){"use strict";/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ var d=c(449),e=c(543),f="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function g(a){if(a>2147483647)throw RangeError('The value "'+a+'" is invalid for option "size"');var b=new Uint8Array(a);return Object.setPrototypeOf(b,h.prototype),b}function h(a,b,c){if("number"==typeof a){if("string"==typeof b)throw TypeError('The "string" argument must be of type string. Received type number');return k(a)}return i(a,b,c)}function i(a,b,c){if("string"==typeof a)return l(a,b);if(ArrayBuffer.isView(a))return m(a);if(null==a)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof a);if(S(a,ArrayBuffer)||a&&S(a.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(S(a,SharedArrayBuffer)||a&&S(a.buffer,SharedArrayBuffer)))return n(a,b,c);if("number"==typeof a)throw TypeError('The "value" argument must not be of type number. Received type number');var d=a.valueOf&&a.valueOf();if(null!=d&&d!==a)return h.from(d,b,c);var e=o(a);if(e)return e;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof a[Symbol.toPrimitive])return h.from(a[Symbol.toPrimitive]("string"),b,c);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof a)}function j(a){if("number"!=typeof a)throw TypeError('"size" argument must be of type number');if(a<0)throw RangeError('The value "'+a+'" is invalid for option "size"')}function k(a){return j(a),g(a<0?0:0|p(a))}function l(a,b){if(("string"!=typeof b||""===b)&&(b="utf8"),!h.isEncoding(b))throw TypeError("Unknown encoding: "+b);var c=0|q(a,b),d=g(c),e=d.write(a,b);return e!==c&&(d=d.slice(0,e)),d}function m(a){for(var b=a.length<0?0:0|p(a.length),c=g(b),d=0;d<b;d+=1)c[d]=255&a[d];return c}function n(a,b,c){var d;if(b<0||a.byteLength<b)throw RangeError('"offset" is outside of buffer bounds');if(a.byteLength<b+(c||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(d=void 0===b&& void 0===c?new Uint8Array(a):void 0===c?new Uint8Array(a,b):new Uint8Array(a,b,c),h.prototype),d}function o(a){if(h.isBuffer(a)){var b,c=0|p(a.length),d=g(c);return 0===d.length||a.copy(d,0,0,c),d}if(void 0!==a.length){return"number"!=typeof a.length||(b=a.length,b!=b)?g(0):m(a)}if("Buffer"===a.type&&Array.isArray(a.data))return m(a.data)}function p(a){if(a>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647..toString(16)+" bytes");return 0|a}function q(a,b){if(h.isBuffer(a))return a.length;if(ArrayBuffer.isView(a)||S(a,ArrayBuffer))return a.byteLength;if("string"!=typeof a)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof a);var c=a.length,d=arguments.length>2&& !0===arguments[2];if(!d&&0===c)return 0;for(var e=!1;;)switch(b){case"ascii":case"latin1":case"binary":return c;case"utf8":case"utf-8":return N(a).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*c;case"hex":return c>>>1;case"base64":return Q(a).length;default:if(e)return d?-1:N(a).length;b=(""+b).toLowerCase(),e=!0}}function r(a,b,c){var d=!1;if((void 0===b||b<0)&&(b=0),b>this.length||((void 0===c||c>this.length)&&(c=this.length),c<=0||(c>>>=0)<=(b>>>=0)))return"";for(a||(a="utf8");;)switch(a){case"hex":return F(this,b,c);case"utf8":case"utf-8":return B(this,b,c);case"ascii":return D(this,b,c);case"latin1":case"binary":return E(this,b,c);case"base64":return A(this,b,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return G(this,b,c);default:if(d)throw TypeError("Unknown encoding: "+a);a=(a+"").toLowerCase(),d=!0}}function s(a,b,c){var d=a[b];a[b]=a[c],a[c]=d}function t(a,b,c,d,e){var f;if(0===a.length)return -1;if("string"==typeof c?(d=c,c=0):c>2147483647?c=2147483647:c< -2147483648&&(c=-2147483648),f=c=+c,f!=f&&(c=e?0:a.length-1),c<0&&(c=a.length+c),c>=a.length){if(e)return -1;c=a.length-1}else if(c<0){if(!e)return -1;c=0}if("string"==typeof b&&(b=h.from(b,d)),h.isBuffer(b))return 0===b.length?-1:u(a,b,c,d,e);if("number"==typeof b)return(b&=255,"function"==typeof Uint8Array.prototype.indexOf)?e?Uint8Array.prototype.indexOf.call(a,b,c):Uint8Array.prototype.lastIndexOf.call(a,b,c):u(a,[b],c,d,e);throw TypeError("val must be string, number or Buffer")}function u(a,b,c,d,e){var f,g=1,h=a.length,i=b.length;if(void 0!==d&&("ucs2"===(d=String(d).toLowerCase())||"ucs-2"===d||"utf16le"===d||"utf-16le"===d)){if(a.length<2||b.length<2)return -1;g=2,h/=2,i/=2,c/=2}function j(a,b){return 1===g?a[b]:a.readUInt16BE(b*g)}if(e){var k=-1;for(f=c;f<h;f++)if(j(a,f)===j(b,-1===k?0:f-k)){if(-1===k&&(k=f),f-k+1===i)return k*g}else -1!==k&&(f-=f-k),k=-1}else for(c+i>h&&(c=h-i),f=c;f>=0;f--){for(var l=!0,m=0;m<i;m++)if(j(a,f+m)!==j(b,m)){l=!1;break}if(l)return f}return -1}function v(a,b,c,d){c=Number(c)||0;var e=a.length-c;d?(d=Number(d))>e&&(d=e):d=e;var f=b.length;d>f/2&&(d=f/2);for(var g=0;g<d;++g){var h,i=parseInt(b.substr(2*g,2),16);if(h=i,h!=h)break;a[c+g]=i}return g}function w(a,b,c,d){return R(N(b,a.length-c),a,c,d)}function x(a,b,c,d){return R(O(b),a,c,d)}b.Buffer=h,b.SlowBuffer=function(a){return+a!=a&&(a=0),h.alloc(+a)},b.INSPECT_MAX_BYTES=50,b.kMaxLength=2147483647,h.TYPED_ARRAY_SUPPORT=function(){try{var a=new Uint8Array(1),b={foo:function(){return 42}};return Object.setPrototypeOf(b,Uint8Array.prototype),Object.setPrototypeOf(a,b),42===a.foo()}catch(c){return!1}}(),h.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(h.prototype,"parent",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.buffer}}),Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.byteOffset}}),h.poolSize=8192,h.from=function(a,b,c){return i(a,b,c)},Object.setPrototypeOf(h.prototype,Uint8Array.prototype),Object.setPrototypeOf(h,Uint8Array),h.alloc=function(a,b,c){var d,e,f;return d=a,e=b,f=c,(j(d),d<=0)?g(d):void 0!==e?"string"==typeof f?g(d).fill(e,f):g(d).fill(e):g(d)},h.allocUnsafe=function(a){return k(a)},h.allocUnsafeSlow=function(a){return k(a)};function y(a,b,c,d){return R(Q(b),a,c,d)}function z(a,b,c,d){return R(P(b,a.length-c),a,c,d)}function A(a,b,c){return 0===b&&c===a.length?d.fromByteArray(a):d.fromByteArray(a.slice(b,c))}function B(a,b,c){c=Math.min(a.length,c);for(var d=[],e=b;e<c;){var f,g,h,i,j=a[e],k=null,l=j>239?4:j>223?3:j>191?2:1;if(e+l<=c)switch(l){case 1:j<128&&(k=j);break;case 2:(192&(f=a[e+1]))==128&&(i=(31&j)<<6|63&f)>127&&(k=i);break;case 3:f=a[e+1],g=a[e+2],(192&f)==128&&(192&g)==128&&(i=(15&j)<<12|(63&f)<<6|63&g)>2047&&(i<55296||i>57343)&&(k=i);break;case 4:f=a[e+1],g=a[e+2],h=a[e+3],(192&f)==128&&(192&g)==128&&(192&h)==128&&(i=(15&j)<<18|(63&f)<<12|(63&g)<<6|63&h)>65535&&i<1114112&&(k=i)}null===k?(k=65533,l=1):k>65535&&(k-=65536,d.push(k>>>10&1023|55296),k=56320|1023&k),d.push(k),e+=l}return C(d)}function C(a){var b=a.length;if(b<=4096)return String.fromCharCode.apply(String,a);for(var c="",d=0;d<b;)c+=String.fromCharCode.apply(String,a.slice(d,d+=4096));return c}function D(a,b,c){var d="";c=Math.min(a.length,c);for(var e=b;e<c;++e)d+=String.fromCharCode(127&a[e]);return d}function E(a,b,c){var d="";c=Math.min(a.length,c);for(var e=b;e<c;++e)d+=String.fromCharCode(a[e]);return d}function F(a,b,c){var d=a.length;(!b||b<0)&&(b=0),(!c||c<0||c>d)&&(c=d);for(var e="",f=b;f<c;++f)e+=T[a[f]];return e}function G(a,b,c){for(var d=a.slice(b,c),e="",f=0;f<d.length;f+=2)e+=String.fromCharCode(d[f]+256*d[f+1]);return e}function H(a,b,c){if(a%1!=0||a<0)throw RangeError("offset is not uint");if(a+b>c)throw RangeError("Trying to access beyond buffer length")}function I(a,b,c,d,e,f){if(!h.isBuffer(a))throw TypeError('"buffer" argument must be a Buffer instance');if(b>e||b<f)throw RangeError('"value" argument is out of bounds');if(c+d>a.length)throw RangeError("Index out of range")}function J(a,b,c,d,e,f){if(c+d>a.length||c<0)throw RangeError("Index out of range")}function K(a,b,c,d,f){return b=+b,c>>>=0,f||J(a,b,c,4,34028234663852886e22,-34028234663852886e22),e.write(a,b,c,d,23,4),c+4}function L(a,b,c,d,f){return b=+b,c>>>=0,f||J(a,b,c,8,17976931348623157e292,-17976931348623157e292),e.write(a,b,c,d,52,8),c+8}h.isBuffer=function(a){return null!=a&& !0===a._isBuffer&&a!==h.prototype},h.compare=function(a,b){if(S(a,Uint8Array)&&(a=h.from(a,a.offset,a.byteLength)),S(b,Uint8Array)&&(b=h.from(b,b.offset,b.byteLength)),!h.isBuffer(a)||!h.isBuffer(b))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(a===b)return 0;for(var c=a.length,d=b.length,e=0,f=Math.min(c,d);e<f;++e)if(a[e]!==b[e]){c=a[e],d=b[e];break}return c<d?-1:d<c?1:0},h.isEncoding=function(a){switch(String(a).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},h.concat=function(a,b){if(!Array.isArray(a))throw TypeError('"list" argument must be an Array of Buffers');if(0===a.length)return h.alloc(0);if(void 0===b)for(c=0,b=0;c<a.length;++c)b+=a[c].length;var c,d=h.allocUnsafe(b),e=0;for(c=0;c<a.length;++c){var f=a[c];if(S(f,Uint8Array)&&(f=h.from(f)),!h.isBuffer(f))throw TypeError('"list" argument must be an Array of Buffers');f.copy(d,e),e+=f.length}return d},h.byteLength=q,h.prototype._isBuffer=!0,h.prototype.swap16=function(){var a=this.length;if(a%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var b=0;b<a;b+=2)s(this,b,b+1);return this},h.prototype.swap32=function(){var a=this.length;if(a%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var b=0;b<a;b+=4)s(this,b,b+3),s(this,b+1,b+2);return this},h.prototype.swap64=function(){var a=this.length;if(a%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var b=0;b<a;b+=8)s(this,b,b+7),s(this,b+1,b+6),s(this,b+2,b+5),s(this,b+3,b+4);return this},h.prototype.toString=function(){var a=this.length;return 0===a?"":0===arguments.length?B(this,0,a):r.apply(this,arguments)},h.prototype.toLocaleString=h.prototype.toString,h.prototype.equals=function(a){if(!h.isBuffer(a))throw TypeError("Argument must be a Buffer");return this===a||0===h.compare(this,a)},h.prototype.inspect=function(){var a="",c=b.INSPECT_MAX_BYTES;return a=this.toString("hex",0,c).replace(/(.{2})/g,"$1 ").trim(),this.length>c&&(a+=" ... "),"<Buffer "+a+">"},f&&(h.prototype[f]=h.prototype.inspect),h.prototype.compare=function(a,b,c,d,e){if(S(a,Uint8Array)&&(a=h.from(a,a.offset,a.byteLength)),!h.isBuffer(a))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof a);if(void 0===b&&(b=0),void 0===c&&(c=a?a.length:0),void 0===d&&(d=0),void 0===e&&(e=this.length),b<0||c>a.length||d<0||e>this.length)throw RangeError("out of range index");if(d>=e&&b>=c)return 0;if(d>=e)return -1;if(b>=c)return 1;if(b>>>=0,c>>>=0,d>>>=0,e>>>=0,this===a)return 0;for(var f=e-d,g=c-b,i=Math.min(f,g),j=this.slice(d,e),k=a.slice(b,c),l=0;l<i;++l)if(j[l]!==k[l]){f=j[l],g=k[l];break}return f<g?-1:g<f?1:0},h.prototype.includes=function(a,b,c){return -1!==this.indexOf(a,b,c)},h.prototype.indexOf=function(a,b,c){return t(this,a,b,c,!0)},h.prototype.lastIndexOf=function(a,b,c){return t(this,a,b,c,!1)},h.prototype.write=function(a,b,c,d){if(void 0===b)d="utf8",c=this.length,b=0;else if(void 0===c&&"string"==typeof b)d=b,c=this.length,b=0;else if(isFinite(b))b>>>=0,isFinite(c)?(c>>>=0,void 0===d&&(d="utf8")):(d=c,c=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var e,f,g,h,i=this.length-b;if((void 0===c||c>i)&&(c=i),a.length>0&&(c<0||b<0)||b>this.length)throw RangeError("Attempt to write outside buffer bounds");d||(d="utf8");for(var j=!1;;)switch(d){case"hex":return v(this,a,b,c);case"utf8":case"utf-8":return w(this,a,b,c);case"ascii":return x(this,a,b,c);case"latin1":case"binary":return e=this,f=a,g=b,x(e,f,g,h=c);case"base64":return y(this,a,b,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return z(this,a,b,c);default:if(j)throw TypeError("Unknown encoding: "+d);d=(""+d).toLowerCase(),j=!0}},h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},h.prototype.slice=function(a,b){var c=this.length;a=~~a,b=void 0===b?c:~~b,a<0?(a+=c)<0&&(a=0):a>c&&(a=c),b<0?(b+=c)<0&&(b=0):b>c&&(b=c),b<a&&(b=a);var d=this.subarray(a,b);return Object.setPrototypeOf(d,h.prototype),d},h.prototype.readUIntLE=function(a,b,c){a>>>=0,b>>>=0,c||H(a,b,this.length);for(var d=this[a],e=1,f=0;++f<b&&(e*=256);)d+=this[a+f]*e;return d},h.prototype.readUIntBE=function(a,b,c){a>>>=0,b>>>=0,c||H(a,b,this.length);for(var d=this[a+ --b],e=1;b>0&&(e*=256);)d+=this[a+ --b]*e;return d},h.prototype.readUInt8=function(a,b){return a>>>=0,b||H(a,1,this.length),this[a]},h.prototype.readUInt16LE=function(a,b){return a>>>=0,b||H(a,2,this.length),this[a]|this[a+1]<<8},h.prototype.readUInt16BE=function(a,b){return a>>>=0,b||H(a,2,this.length),this[a]<<8|this[a+1]},h.prototype.readUInt32LE=function(a,b){return a>>>=0,b||H(a,4,this.length),(this[a]|this[a+1]<<8|this[a+2]<<16)+16777216*this[a+3]},h.prototype.readUInt32BE=function(a,b){return a>>>=0,b||H(a,4,this.length),16777216*this[a]+(this[a+1]<<16|this[a+2]<<8|this[a+3])},h.prototype.readIntLE=function(a,b,c){a>>>=0,b>>>=0,c||H(a,b,this.length);for(var d=this[a],e=1,f=0;++f<b&&(e*=256);)d+=this[a+f]*e;return d>=(e*=128)&&(d-=Math.pow(2,8*b)),d},h.prototype.readIntBE=function(a,b,c){a>>>=0,b>>>=0,c||H(a,b,this.length);for(var d=b,e=1,f=this[a+ --d];d>0&&(e*=256);)f+=this[a+ --d]*e;return f>=(e*=128)&&(f-=Math.pow(2,8*b)),f},h.prototype.readInt8=function(a,b){return(a>>>=0,b||H(a,1,this.length),128&this[a])?-((255-this[a]+1)*1):this[a]},h.prototype.readInt16LE=function(a,b){a>>>=0,b||H(a,2,this.length);var c=this[a]|this[a+1]<<8;return 32768&c?4294901760|c:c},h.prototype.readInt16BE=function(a,b){a>>>=0,b||H(a,2,this.length);var c=this[a+1]|this[a]<<8;return 32768&c?4294901760|c:c},h.prototype.readInt32LE=function(a,b){return a>>>=0,b||H(a,4,this.length),this[a]|this[a+1]<<8|this[a+2]<<16|this[a+3]<<24},h.prototype.readInt32BE=function(a,b){return a>>>=0,b||H(a,4,this.length),this[a]<<24|this[a+1]<<16|this[a+2]<<8|this[a+3]},h.prototype.readFloatLE=function(a,b){return a>>>=0,b||H(a,4,this.length),e.read(this,a,!0,23,4)},h.prototype.readFloatBE=function(a,b){return a>>>=0,b||H(a,4,this.length),e.read(this,a,!1,23,4)},h.prototype.readDoubleLE=function(a,b){return a>>>=0,b||H(a,8,this.length),e.read(this,a,!0,52,8)},h.prototype.readDoubleBE=function(a,b){return a>>>=0,b||H(a,8,this.length),e.read(this,a,!1,52,8)},h.prototype.writeUIntLE=function(a,b,c,d){if(a=+a,b>>>=0,c>>>=0,!d){var e=Math.pow(2,8*c)-1;I(this,a,b,c,e,0)}var f=1,g=0;for(this[b]=255&a;++g<c&&(f*=256);)this[b+g]=a/f&255;return b+c},h.prototype.writeUIntBE=function(a,b,c,d){if(a=+a,b>>>=0,c>>>=0,!d){var e=Math.pow(2,8*c)-1;I(this,a,b,c,e,0)}var f=c-1,g=1;for(this[b+f]=255&a;--f>=0&&(g*=256);)this[b+f]=a/g&255;return b+c},h.prototype.writeUInt8=function(a,b,c){return a=+a,b>>>=0,c||I(this,a,b,1,255,0),this[b]=255&a,b+1},h.prototype.writeUInt16LE=function(a,b,c){return a=+a,b>>>=0,c||I(this,a,b,2,65535,0),this[b]=255&a,this[b+1]=a>>>8,b+2},h.prototype.writeUInt16BE=function(a,b,c){return a=+a,b>>>=0,c||I(this,a,b,2,65535,0),this[b]=a>>>8,this[b+1]=255&a,b+2},h.prototype.writeUInt32LE=function(a,b,c){return a=+a,b>>>=0,c||I(this,a,b,4,4294967295,0),this[b+3]=a>>>24,this[b+2]=a>>>16,this[b+1]=a>>>8,this[b]=255&a,b+4},h.prototype.writeUInt32BE=function(a,b,c){return a=+a,b>>>=0,c||I(this,a,b,4,4294967295,0),this[b]=a>>>24,this[b+1]=a>>>16,this[b+2]=a>>>8,this[b+3]=255&a,b+4},h.prototype.writeIntLE=function(a,b,c,d){if(a=+a,b>>>=0,!d){var e=Math.pow(2,8*c-1);I(this,a,b,c,e-1,-e)}var f=0,g=1,h=0;for(this[b]=255&a;++f<c&&(g*=256);)a<0&&0===h&&0!==this[b+f-1]&&(h=1),this[b+f]=(a/g>>0)-h&255;return b+c},h.prototype.writeIntBE=function(a,b,c,d){if(a=+a,b>>>=0,!d){var e=Math.pow(2,8*c-1);I(this,a,b,c,e-1,-e)}var f=c-1,g=1,h=0;for(this[b+f]=255&a;--f>=0&&(g*=256);)a<0&&0===h&&0!==this[b+f+1]&&(h=1),this[b+f]=(a/g>>0)-h&255;return b+c},h.prototype.writeInt8=function(a,b,c){return a=+a,b>>>=0,c||I(this,a,b,1,127,-128),a<0&&(a=255+a+1),this[b]=255&a,b+1},h.prototype.writeInt16LE=function(a,b,c){return a=+a,b>>>=0,c||I(this,a,b,2,32767,-32768),this[b]=255&a,this[b+1]=a>>>8,b+2},h.prototype.writeInt16BE=function(a,b,c){return a=+a,b>>>=0,c||I(this,a,b,2,32767,-32768),this[b]=a>>>8,this[b+1]=255&a,b+2},h.prototype.writeInt32LE=function(a,b,c){return a=+a,b>>>=0,c||I(this,a,b,4,2147483647,-2147483648),this[b]=255&a,this[b+1]=a>>>8,this[b+2]=a>>>16,this[b+3]=a>>>24,b+4},h.prototype.writeInt32BE=function(a,b,c){return a=+a,b>>>=0,c||I(this,a,b,4,2147483647,-2147483648),a<0&&(a=4294967295+a+1),this[b]=a>>>24,this[b+1]=a>>>16,this[b+2]=a>>>8,this[b+3]=255&a,b+4},h.prototype.writeFloatLE=function(a,b,c){return K(this,a,b,!0,c)},h.prototype.writeFloatBE=function(a,b,c){return K(this,a,b,!1,c)},h.prototype.writeDoubleLE=function(a,b,c){return L(this,a,b,!0,c)},h.prototype.writeDoubleBE=function(a,b,c){return L(this,a,b,!1,c)},h.prototype.copy=function(a,b,c,d){if(!h.isBuffer(a))throw TypeError("argument should be a Buffer");if(c||(c=0),d||0===d||(d=this.length),b>=a.length&&(b=a.length),b||(b=0),d>0&&d<c&&(d=c),d===c||0===a.length||0===this.length)return 0;if(b<0)throw RangeError("targetStart out of bounds");if(c<0||c>=this.length)throw RangeError("Index out of range");if(d<0)throw RangeError("sourceEnd out of bounds");d>this.length&&(d=this.length),a.length-b<d-c&&(d=a.length-b+c);var e=d-c;if(this===a&&"function"==typeof Uint8Array.prototype.copyWithin)this.copyWithin(b,c,d);else if(this===a&&c<b&&b<d)for(var f=e-1;f>=0;--f)a[f+b]=this[f+c];else Uint8Array.prototype.set.call(a,this.subarray(c,d),b);return e},h.prototype.fill=function(a,b,c,d){if("string"==typeof a){if("string"==typeof b?(d=b,b=0,c=this.length):"string"==typeof c&&(d=c,c=this.length),void 0!==d&&"string"!=typeof d)throw TypeError("encoding must be a string");if("string"==typeof d&&!h.isEncoding(d))throw TypeError("Unknown encoding: "+d);if(1===a.length){var e,f=a.charCodeAt(0);("utf8"===d&&f<128||"latin1"===d)&&(a=f)}}else"number"==typeof a?a&=255:"boolean"==typeof a&&(a=Number(a));if(b<0||this.length<b||this.length<c)throw RangeError("Out of range index");if(c<=b)return this;if(b>>>=0,c=void 0===c?this.length:c>>>0,a||(a=0),"number"==typeof a)for(e=b;e<c;++e)this[e]=a;else{var g=h.isBuffer(a)?a:h.from(a,d),i=g.length;if(0===i)throw TypeError('The value "'+a+'" is invalid for argument "value"');for(e=0;e<c-b;++e)this[e+b]=g[e%i]}return this};var M=/[^+/0-9A-Za-z-_]/g;function N(a,b){b=b||1/0;for(var c,d=a.length,e=null,f=[],g=0;g<d;++g){if((c=a.charCodeAt(g))>55295&&c<57344){if(!e){if(c>56319||g+1===d){(b-=3)> -1&&f.push(239,191,189);continue}e=c;continue}if(c<56320){(b-=3)> -1&&f.push(239,191,189),e=c;continue}c=(e-55296<<10|c-56320)+65536}else e&&(b-=3)> -1&&f.push(239,191,189);if(e=null,c<128){if((b-=1)<0)break;f.push(c)}else if(c<2048){if((b-=2)<0)break;f.push(c>>6|192,63&c|128)}else if(c<65536){if((b-=3)<0)break;f.push(c>>12|224,c>>6&63|128,63&c|128)}else if(c<1114112){if((b-=4)<0)break;f.push(c>>18|240,c>>12&63|128,c>>6&63|128,63&c|128)}else throw Error("Invalid code point")}return f}function O(a){for(var b=[],c=0;c<a.length;++c)b.push(255&a.charCodeAt(c));return b}function P(a,b){for(var c,d,e,f=[],g=0;g<a.length&&!((b-=2)<0);++g)d=(c=a.charCodeAt(g))>>8,e=c%256,f.push(e),f.push(d);return f}function Q(a){return d.toByteArray(function(a){if((a=(a=a.split("=")[0]).trim().replace(M,"")).length<2)return"";for(;a.length%4!=0;)a+="=";return a}(a))}function R(a,b,c,d){for(var e=0;e<d&&!(e+c>=b.length)&&!(e>=a.length);++e)b[e+c]=a[e];return e}function S(a,b){return a instanceof b||null!=a&&null!=a.constructor&&null!=a.constructor.name&&a.constructor.name===b.name}var T=function(){for(var a="0123456789abcdef",b=Array(256),c=0;c<16;++c)for(var d=16*c,e=0;e<16;++e)b[d+e]=a[c]+a[e];return b}()},543:function(a,b){/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ b.read=function(a,b,c,d,e){var f,g,h=8*e-d-1,i=(1<<h)-1,j=i>>1,k=-7,l=c?e-1:0,m=c?-1:1,n=a[b+l];for(l+=m,f=n&(1<< -k)-1,n>>=-k,k+=h;k>0;f=256*f+a[b+l],l+=m,k-=8);for(g=f&(1<< -k)-1,f>>=-k,k+=d;k>0;g=256*g+a[b+l],l+=m,k-=8);if(0===f)f=1-j;else{if(f===i)return g?NaN:(n?-1:1)*(1/0);g+=Math.pow(2,d),f-=j}return(n?-1:1)*g*Math.pow(2,f-d)},b.write=function(a,b,c,d,e,f){var g,h,i,j=8*f-e-1,k=(1<<j)-1,l=k>>1,m=23===e?5960464477539062e-23:0,n=d?0:f-1,o=d?1:-1,p=b<0||0===b&&1/b<0?1:0;for(isNaN(b=Math.abs(b))||b===1/0?(h=isNaN(b)?1:0,g=k):(g=Math.floor(Math.log(b)/Math.LN2),b*(i=Math.pow(2,-g))<1&&(g--,i*=2),g+l>=1?b+=m/i:b+=m*Math.pow(2,1-l),b*i>=2&&(g++,i/=2),g+l>=k?(h=0,g=k):g+l>=1?(h=(b*i-1)*Math.pow(2,e),g+=l):(h=b*Math.pow(2,l-1)*Math.pow(2,e),g=0));e>=8;a[c+n]=255&h,n+=o,h/=256,e-=8);for(g=g<<e|h,j+=e;j>0;a[c+n]=255&g,n+=o,g/=256,j-=8);a[c+n-o]|=128*p}}},c={};function d(a){var e=c[a];if(void 0!==e)return e.exports;var f=c[a]={exports:{}},g=!0;try{b[a](f,f.exports,d),g=!1}finally{g&&delete c[a]}return f.exports}d.ab="//";var e=d(877);a.exports=e}()},8210:function(){},472:function(){},7663:function(a){!function(){var b={308:function(a){var b,c,d,e=a.exports={};function f(){throw Error("setTimeout has not been defined")}function g(){throw Error("clearTimeout has not been defined")}function h(a){if(b===setTimeout)return setTimeout(a,0);if((b===f||!b)&&setTimeout)return b=setTimeout,setTimeout(a,0);try{return b(a,0)}catch(c){try{return b.call(null,a,0)}catch(d){return b.call(this,a,0)}}}!function(){try{b="function"==typeof setTimeout?setTimeout:f}catch(a){b=f}try{c="function"==typeof clearTimeout?clearTimeout:g}catch(d){c=g}}();var i=[],j=!1,k=-1;function l(){j&&d&&(j=!1,d.length?i=d.concat(i):k=-1,i.length&&m())}function m(){if(!j){var a=h(l);j=!0;for(var b=i.length;b;){for(d=i,i=[];++k<b;)d&&d[k].run();k=-1,b=i.length}d=null,j=!1,function(a){if(c===clearTimeout)return clearTimeout(a);if((c===g||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(a);try{c(a)}catch(b){try{return c.call(null,a)}catch(d){return c.call(this,a)}}}(a)}}function n(a,b){this.fun=a,this.array=b}function o(){}e.nextTick=function(a){var b=Array(arguments.length-1);if(arguments.length>1)for(var c=1;c<arguments.length;c++)b[c-1]=arguments[c];i.push(new n(a,b)),1!==i.length||j||h(m)},n.prototype.run=function(){this.fun.apply(null,this.array)},e.title="browser",e.browser=!0,e.env={},e.argv=[],e.version="",e.versions={},e.on=o,e.addListener=o,e.once=o,e.off=o,e.removeListener=o,e.removeAllListeners=o,e.emit=o,e.prependListener=o,e.prependOnceListener=o,e.listeners=function(a){return[]},e.binding=function(a){throw Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(a){throw Error("process.chdir is not supported")},e.umask=function(){return 0}}},c={};function d(a){var e=c[a];if(void 0!==e)return e.exports;var f=c[a]={exports:{}},g=!0;try{b[a](f,f.exports,d),g=!1}finally{g&&delete c[a]}return f.exports}d.ab="//";var e=d(308);a.exports=e}()},1163:function(a,b,c){a.exports=c(387)},5816:function(a,b,c){"use strict";c.d(b,{Jn:function(){return K},qX:function(){return H},Xd:function(){return G},Mq:function(){return M},ZF:function(){return L},KN:function(){return N}});var d,e=c(8463),f=c(3333),g=c(4444);let h=(a,b)=>b.some(b=>a instanceof b),i,j,k=new WeakMap,l=new WeakMap,m=new WeakMap,n=new WeakMap,o=new WeakMap,p={get(a,b,c){if(a instanceof IDBTransaction){if("done"===b)return l.get(a);if("objectStoreNames"===b)return a.objectStoreNames||m.get(a);if("store"===b)return c.objectStoreNames[1]?void 0:c.objectStore(c.objectStoreNames[0])}return q(a[b])},set(a,b,c){return a[b]=c,!0},has(a,b){return a instanceof IDBTransaction&&("done"===b||"store"===b)||b in a}};function q(a){if(a instanceof IDBRequest)return function(a){let b=new Promise((b,c)=>{let d=()=>{a.removeEventListener("success",e),a.removeEventListener("error",f)},e=()=>{b(q(a.result)),d()},f=()=>{c(a.error),d()};a.addEventListener("success",e),a.addEventListener("error",f)});return b.then(b=>{b instanceof IDBCursor&&k.set(b,a)}).catch(()=>{}),o.set(b,a),b}(a);if(n.has(a))return n.get(a);let b=function(a){if("function"==typeof a){var b;return(b=a)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(j||(j=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey,])).includes(b)?function(...a){return b.apply(r(this),a),q(k.get(this))}:function(...a){return q(b.apply(r(this),a))}:function(a,...c){let d=b.call(r(this),a,...c);return m.set(d,a.sort?a.sort():[a]),q(d)}}return(a instanceof IDBTransaction&&function(a){if(l.has(a))return;let b=new Promise((b,c)=>{let d=()=>{a.removeEventListener("complete",e),a.removeEventListener("error",f),a.removeEventListener("abort",f)},e=()=>{b(),d()},f=()=>{c(a.error||new DOMException("AbortError","AbortError")),d()};a.addEventListener("complete",e),a.addEventListener("error",f),a.addEventListener("abort",f)});l.set(a,b)}(a),h(a,i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction,])))?new Proxy(a,p):a}(a);return b!==a&&(n.set(a,b),o.set(b,a)),b}let r=a=>o.get(a),s=["get","getKey","getAll","getAllKeys","count"],t=["put","add","delete","clear"],u=new Map;function v(a,b){if(!(a instanceof IDBDatabase&&!(b in a)&&"string"==typeof b))return;if(u.get(b))return u.get(b);let c=b.replace(/FromIndex$/,""),d=b!==c,e=t.includes(c);if(!(c in(d?IDBIndex:IDBObjectStore).prototype)||!(e||s.includes(c)))return;let f=async function(a,...b){let f=this.transaction(a,e?"readwrite":"readonly"),g=f.store;return d&&(g=g.index(b.shift())),(await Promise.all([g[c](...b),e&&f.done,]))[0]};return u.set(b,f),f}!function(a){p=a(p)}(a=>({...a,get:(b,c,d)=>v(b,c)||a.get(b,c,d),has:(b,c)=>!!v(b,c)||a.has(b,c)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class w{constructor(a){this.container=a}getPlatformInfoString(){let a=this.container.getProviders();return a.map(a=>{if(!x(a))return null;{let b=a.getImmediate();return`${b.library}/${b.version}`}}).filter(a=>a).join(" ")}}function x(a){let b=a.getComponent();return(null==b?void 0:b.type)==="VERSION"}let y="@firebase/app",z="0.7.32",A=new f.Yd("@firebase/app"),B="[DEFAULT]",C={[y]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},D=new Map,E=new Map;function F(a,b){try{a.container.addComponent(b)}catch(c){A.debug(`Component ${b.name} failed to register with FirebaseApp ${a.name}`,c)}}function G(a){let b=a.name;if(E.has(b))return A.debug(`There were multiple attempts to register component ${b}.`),!1;for(let c of(E.set(b,a),D.values()))F(c,a);return!0}function H(a,b){let c=a.container.getProvider("heartbeat").getImmediate({optional:!0});return c&&c.triggerHeartbeat(),a.container.getProvider(b)}let I=new g.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class J{constructor(a,b,c){this._isDeleted=!1,this._options=Object.assign({},a),this._config=Object.assign({},b),this._name=b.name,this._automaticDataCollectionEnabled=b.automaticDataCollectionEnabled,this._container=c,this.container.addComponent(new e.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(a){this.checkDestroyed(),this._automaticDataCollectionEnabled=a}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(a){this._isDeleted=a}checkDestroyed(){if(this.isDeleted)throw I.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The current SDK version.
 *
 * @public
 */ let K="9.9.4";function L(a,b={}){if("object"!=typeof b){let c=b;b={name:c}}let d=Object.assign({name:B,automaticDataCollectionEnabled:!1},b),f=d.name;if("string"!=typeof f||!f)throw I.create("bad-app-name",{appName:String(f)});let h=D.get(f);if(h){if((0,g.vZ)(a,h.options)&&(0,g.vZ)(d,h.config))return h;throw I.create("duplicate-app",{appName:f})}let i=new e.H0(f);for(let j of E.values())i.addComponent(j);let k=new J(a,d,i);return D.set(f,k),k}function M(a=B){let b=D.get(a);if(!b)throw I.create("no-app",{appName:a});return b}function N(a,b,c){var d;let f=null!==(d=C[a])&& void 0!==d?d:a;c&&(f+=`-${c}`);let g=f.match(/\s|\//),h=b.match(/\s|\//);if(g||h){let i=[`Unable to register library "${f}" with version "${b}":`];g&&i.push(`library name "${f}" contains illegal characters (whitespace or "/")`),g&&h&&i.push("and"),h&&i.push(`version name "${b}" contains illegal characters (whitespace or "/")`),A.warn(i.join(" "));return}G(new e.wA(`${f}-version`,()=>({library:f,version:b}),"VERSION"))}let O="firebase-heartbeat-store",P=null;function Q(){return P||(P=(function(a,b,{blocked:c,upgrade:d,blocking:e,terminated:f}={}){let g=indexedDB.open(a,1),h=q(g);return d&&g.addEventListener("upgradeneeded",a=>{d(q(g.result),a.oldVersion,a.newVersion,q(g.transaction))}),c&&g.addEventListener("blocked",()=>c()),h.then(a=>{f&&a.addEventListener("close",()=>f()),e&&a.addEventListener("versionchange",()=>e())}).catch(()=>{}),h})("firebase-heartbeat-database",1,{upgrade:(a,b)=>{0===b&&a.createObjectStore(O)}}).catch(a=>{throw I.create("idb-open",{originalErrorMessage:a.message})})),P}async function R(a){var b;try{let c=await Q();return c.transaction(O).objectStore(O).get(T(a))}catch(d){if(d instanceof g.ZR)A.warn(d.message);else{let e=I.create("idb-get",{originalErrorMessage:null===(b=d)|| void 0===b?void 0:b.message});A.warn(e.message)}}}async function S(a,b){var c;try{let d=await Q(),e=d.transaction(O,"readwrite"),f=e.objectStore(O);return await f.put(b,T(a)),e.done}catch(h){if(h instanceof g.ZR)A.warn(h.message);else{let i=I.create("idb-set",{originalErrorMessage:null===(c=h)|| void 0===c?void 0:c.message});A.warn(i.message)}}}function T(a){return`${a.name}!${a.options.appId}`}class U{constructor(a){this.container=a,this._heartbeatsCache=null;let b=this.container.getProvider("app").getImmediate();this._storage=new X(b),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){let a=this.container.getProvider("platform-logger").getImmediate(),b=a.getPlatformInfoString(),c=V();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(a=>a.date===c))?void 0:(this._heartbeatsCache.heartbeats.push({date:c,agent:b}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{let b=new Date(a.date).valueOf(),c=Date.now();return c-b<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let a=V(),{heartbeatsToSend:b,unsentEntries:c}=W(this._heartbeatsCache.heartbeats),d=(0,g.L)(JSON.stringify({version:2,heartbeats:b}));return this._heartbeatsCache.lastSentHeartbeatDate=a,c.length>0?(this._heartbeatsCache.heartbeats=c,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),d}}function V(){let a=new Date;return a.toISOString().substring(0,10)}function W(a,b=1024){let c=[],d=a.slice();for(let e of a){let f=c.find(a=>a.agent===e.agent);if(f){if(f.dates.push(e.date),Y(c)>b){f.dates.pop();break}}else if(c.push({agent:e.agent,dates:[e.date]}),Y(c)>b){c.pop();break}d=d.slice(1)}return{heartbeatsToSend:c,unsentEntries:d}}class X{constructor(a){this.app=a,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,g.hl)()&&(0,g.eu)().then(()=>!0).catch(()=>!1)}async read(){let a=await this._canUseIndexedDBPromise;if(!a)return{heartbeats:[]};{let b=await R(this.app);return b||{heartbeats:[]}}}async overwrite(a){var b;let c=await this._canUseIndexedDBPromise;if(c){let d=await this.read();return S(this.app,{lastSentHeartbeatDate:null!==(b=a.lastSentHeartbeatDate)&& void 0!==b?b:d.lastSentHeartbeatDate,heartbeats:a.heartbeats})}}async add(a){var b;let c=await this._canUseIndexedDBPromise;if(c){let d=await this.read();return S(this.app,{lastSentHeartbeatDate:null!==(b=a.lastSentHeartbeatDate)&& void 0!==b?b:d.lastSentHeartbeatDate,heartbeats:[...d.heartbeats,...a.heartbeats]})}}}function Y(a){return(0,g.L)(JSON.stringify({version:2,heartbeats:a})).length}G(new e.wA("platform-logger",a=>new w(a),"PRIVATE")),G(new e.wA("heartbeat",a=>new U(a),"PRIVATE")),N(y,z,""),N(y,z,"esm2017"),N("fire-js","")},8463:function(a,b,c){"use strict";c.d(b,{H0:function(){return j},wA:function(){return e}});var d=c(4444);class e{constructor(a,b,c){this.name=a,this.instanceFactory=b,this.type=c,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(a){return this.instantiationMode=a,this}setMultipleInstances(a){return this.multipleInstances=a,this}setServiceProps(a){return this.serviceProps=a,this}setInstanceCreatedCallback(a){return this.onInstanceCreated=a,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let f="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */ class g{constructor(a,b){this.name=a,this.container=b,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(a){let b=this.normalizeInstanceIdentifier(a);if(!this.instancesDeferred.has(b)){let c=new d.BH;if(this.instancesDeferred.set(b,c),this.isInitialized(b)||this.shouldAutoInitialize())try{let e=this.getOrInitializeService({instanceIdentifier:b});e&&c.resolve(e)}catch(f){}}return this.instancesDeferred.get(b).promise}getImmediate(a){var b;let c=this.normalizeInstanceIdentifier(null==a?void 0:a.identifier),d=null!==(b=null==a?void 0:a.optional)&& void 0!==b&&b;if(this.isInitialized(c)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:c})}catch(e){if(d)return null;throw e}else{if(d)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(a){if(a.name!==this.name)throw Error(`Mismatching Component ${a.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=a,this.shouldAutoInitialize()){if(i(a))try{this.getOrInitializeService({instanceIdentifier:f})}catch(b){}for(let[c,d]of this.instancesDeferred.entries()){let e=this.normalizeInstanceIdentifier(c);try{let g=this.getOrInitializeService({instanceIdentifier:e});d.resolve(g)}catch(h){}}}}clearInstance(a=f){this.instancesDeferred.delete(a),this.instancesOptions.delete(a),this.instances.delete(a)}async delete(){let a=Array.from(this.instances.values());await Promise.all([...a.filter(a=>"INTERNAL"in a).map(a=>a.INTERNAL.delete()),...a.filter(a=>"_delete"in a).map(a=>a._delete())])}isComponentSet(){return null!=this.component}isInitialized(a=f){return this.instances.has(a)}getOptions(a=f){return this.instancesOptions.get(a)||{}}initialize(a={}){let{options:b={}}=a,c=this.normalizeInstanceIdentifier(a.instanceIdentifier);if(this.isInitialized(c))throw Error(`${this.name}(${c}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let d=this.getOrInitializeService({instanceIdentifier:c,options:b});for(let[e,f]of this.instancesDeferred.entries()){let g=this.normalizeInstanceIdentifier(e);c===g&&f.resolve(d)}return d}onInit(a,b){var c;let d=this.normalizeInstanceIdentifier(b),e=null!==(c=this.onInitCallbacks.get(d))&& void 0!==c?c:new Set;e.add(a),this.onInitCallbacks.set(d,e);let f=this.instances.get(d);return f&&a(f,d),()=>{e.delete(a)}}invokeOnInitCallbacks(a,b){let c=this.onInitCallbacks.get(b);if(c)for(let d of c)try{d(a,b)}catch(e){}}getOrInitializeService({instanceIdentifier:a,options:b={}}){let c=this.instances.get(a);if(!c&&this.component&&(c=this.component.instanceFactory(this.container,{instanceIdentifier:h(a),options:b}),this.instances.set(a,c),this.instancesOptions.set(a,b),this.invokeOnInitCallbacks(c,a),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,a,c)}catch(d){}return c||null}normalizeInstanceIdentifier(a=f){return this.component?this.component.multipleInstances?a:f:a}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function h(a){return a===f?void 0:a}function i(a){return"EAGER"===a.instantiationMode}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */ class j{constructor(a){this.name=a,this.providers=new Map}addComponent(a){let b=this.getProvider(a.name);if(b.isComponentSet())throw Error(`Component ${a.name} has already been registered with ${this.name}`);b.setComponent(a)}addOrOverwriteComponent(a){let b=this.getProvider(a.name);b.isComponentSet()&&this.providers.delete(a.name),this.addComponent(a)}getProvider(a){if(this.providers.has(a))return this.providers.get(a);let b=new g(a,this);return this.providers.set(a,b),b}getProviders(){return Array.from(this.providers.values())}}},3333:function(a,b,c){"use strict";var d,e;c.d(b,{Yd:function(){return j},in:function(){return d}});(e=d||(d={}))[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT";let f={debug:d.DEBUG,verbose:d.VERBOSE,info:d.INFO,warn:d.WARN,error:d.ERROR,silent:d.SILENT},g=d.INFO,h={[d.DEBUG]:"log",[d.VERBOSE]:"log",[d.INFO]:"info",[d.WARN]:"warn",[d.ERROR]:"error"},i=(a,b,...c)=>{if(b<a.logLevel)return;let d=new Date().toISOString(),e=h[b];if(e)console[e](`[${d}]  ${a.name}:`,...c);else throw Error(`Attempted to log a message with an invalid logType (value: ${b})`)};class j{constructor(a){this.name=a,this._logLevel=g,this._logHandler=i,this._userLogHandler=null,[].push(this)}get logLevel(){return this._logLevel}set logLevel(a){if(!(a in d))throw TypeError(`Invalid value "${a}" assigned to \`logLevel\``);this._logLevel=a}setLogLevel(a){this._logLevel="string"==typeof a?f[a]:a}get logHandler(){return this._logHandler}set logHandler(a){if("function"!=typeof a)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=a}get userLogHandler(){return this._userLogHandler}set userLogHandler(a){this._userLogHandler=a}debug(...a){this._userLogHandler&&this._userLogHandler(this,d.DEBUG,...a),this._logHandler(this,d.DEBUG,...a)}log(...a){this._userLogHandler&&this._userLogHandler(this,d.VERBOSE,...a),this._logHandler(this,d.VERBOSE,...a)}info(...a){this._userLogHandler&&this._userLogHandler(this,d.INFO,...a),this._logHandler(this,d.INFO,...a)}warn(...a){this._userLogHandler&&this._userLogHandler(this,d.WARN,...a),this._logHandler(this,d.WARN,...a)}error(...a){this._userLogHandler&&this._userLogHandler(this,d.ERROR,...a),this._logHandler(this,d.ERROR,...a)}}},7568:function(a,b,c){"use strict";function d(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(j){c(j);return}h.done?b(i):Promise.resolve(i).then(d,e)}function e(a){return function(){var b=this,c=arguments;return new Promise(function(e,f){var g=a.apply(b,c);function h(a){d(g,e,f,h,i,"next",a)}function i(a){d(g,e,f,h,i,"throw",a)}h(void 0)})}}c.d(b,{Z:function(){return e}})}},function(a){var b=function(b){return a(a.s=b)};a.O(0,[774,179],function(){return b(6840),b(387)}),_N_E=a.O()}])