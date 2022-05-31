// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";var s=r,i=t,o=e;var n=function(r,t,e){var n,d;if(!s(r))throw new TypeError(o("0CK48",r));if(!i(t))throw new TypeError(o("0CK2S",t));for(d=-1;;){if(d+=1,(n=r.next()).done)return!0;if(!t.call(e,n.value,d))return!1}};export{n as default};
//# sourceMappingURL=index.mjs.map
