// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var s=t,i=r,n=e;var a=function(t,r,e){var a,o;if(!s(t))throw new TypeError(n("invalid argument. First argument must be an iterator. Value: `%s`.",t));if(!i(r))throw new TypeError(n("invalid argument. Second argument must be a function. Value: `%s`.",r));for(o=-1;;){if(o+=1,(a=t.next()).done)return!0;if(!r.call(e,a.value,o))return!1}};export{a as default};
//# sourceMappingURL=index.mjs.map
