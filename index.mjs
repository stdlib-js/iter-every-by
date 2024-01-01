// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function s(s,i,n){var a,o;if(!t(s))throw new TypeError(r("invalid argument. First argument must be an iterator. Value: `%s`.",s));if(!e(i))throw new TypeError(r("invalid argument. Second argument must be a function. Value: `%s`.",i));for(o=-1;;){if(o+=1,(a=s.next()).done)return!0;if(!i.call(n,a.value,o))return!1}}export{s as default};
//# sourceMappingURL=index.mjs.map
