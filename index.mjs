// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function s(s,i,o){var n,d;if(!r(s))throw new TypeError(e("0Op3v",s));if(!t(i))throw new TypeError(e("0Op2H",i));for(d=-1;;){if(d+=1,(n=s.next()).done)return!0;if(!i.call(o,n.value,d))return!1}}export{s as default};
//# sourceMappingURL=index.mjs.map
