"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var a=o(function(w,n){
var v=require('@stdlib/assert-is-iterator-like/dist'),l=require('@stdlib/assert-is-function/dist'),u=require('@stdlib/error-tools-fmtprodmsg/dist');function f(e,r,s){var t,i;if(!v(e))throw new TypeError(u('0Op3v',e));if(!l(r))throw new TypeError(u('0Op2H',r));for(i=-1;;){if(i+=1,t=e.next(),t.done)return!0;if(!r.call(s,t.value,i))return!1}}n.exports=f
});var m=a();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
