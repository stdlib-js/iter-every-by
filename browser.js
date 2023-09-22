// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function i(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function a(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function s(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!i(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=a(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=a(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===c.call(e.specifier)?c.call(t):o.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function l(e){return"string"==typeof e}var p=Math.abs,u=String.prototype.toLowerCase,f=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,h=/e-(\d)$/,w=/^(\d+)$/,b=/^(\d+)e/,y=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function E(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,v,"e"),t=g.call(t,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=g.call(t,d,"e+0$1"),t=g.call(t,h,"e-0$1"),e.alternate&&(t=g.call(t,w,"$1."),t=g.call(t,b,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===f.call(e.specifier)?f.call(t):u.call(t)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function x(e,r,t){var i=r-e.length;return i<0?e:e=t?e+_(i):_(i)+e}var k=String.fromCharCode,S=isNaN,j=Array.isArray;function V(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,i,n,o,c,p,u,f;if(!j(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",p=1,u=0;u<e.length;u++)if(l(i=e[u]))c+=i;else{if(r=void 0!==i.precision,!(i=V(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,S(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,S(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=s(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!S(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=S(o)?String(i.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=E(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=a(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=x(i.arg,i.width,i.padRight)),c+=i.arg||"",p+=1}return c}var A=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,t,i,n;for(t=[],n=0,i=A.exec(e);i;)(r=e.slice(n,A.lastIndex-i[0].length)).length&&t.push(r),t.push($(i)),n=A.lastIndex,i=A.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function I(e){return"string"==typeof e}function C(e){var r,t,i;if(!I(e))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=F(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return T.apply(null,t)}var R,O=Object.prototype,Z=O.toString,P=O.__defineGetter__,G=O.__defineSetter__,L=O.__lookupGetter__,W=O.__lookupSetter__;R=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===Z.call(e))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Z.call(t))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(L.call(e,r)||W.call(e,r)?(i=e.__proto__,e.__proto__=O,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(e,r,t.get),o&&G&&G.call(e,r,t.set),e};var B=R;function U(e,r,t){B(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function N(e){return"boolean"==typeof e}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return X&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString,H=Object.prototype.hasOwnProperty,q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"",J=M()?function(e){var r,t,i,n,a;if(null==e)return z.call(e);t=e[D],a=D,r=null!=(n=e)&&H.call(n,a);try{e[D]=void 0}catch(r){return z.call(e)}return i=z.call(e),r?e[D]=t:delete e[D],i}:function(e){return z.call(e)},K=Boolean,Q=Boolean.prototype.toString,Y=M();function ee(e){return"object"==typeof e&&(e instanceof K||(Y?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===J(e)))}function re(e){return N(e)||ee(e)}function te(e){return"number"==typeof e}function ie(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function ne(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+ie(n):ie(n)+e,i&&(e="-"+e)),e}U(re,"isPrimitive",N),U(re,"isObject",ee);var ae=String.prototype.toLowerCase,oe=String.prototype.toUpperCase;function ce(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!te(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=ne(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=ne(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===oe.call(e.specifier)?oe.call(t):ae.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function se(e){return"string"==typeof e}var le=Math.abs,pe=String.prototype.toLowerCase,ue=String.prototype.toUpperCase,fe=String.prototype.replace,ge=/e\+(\d)$/,de=/e-(\d)$/,he=/^(\d+)$/,we=/^(\d+)e/,be=/\.0$/,ye=/\.0*e/,ve=/(\..*[^0])0*e/;function me(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!te(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":le(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=fe.call(t,ve,"$1e"),t=fe.call(t,ye,"e"),t=fe.call(t,be,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=fe.call(t,ge,"e+0$1"),t=fe.call(t,de,"e-0$1"),e.alternate&&(t=fe.call(t,he,"$1."),t=fe.call(t,we,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===ue.call(e.specifier)?ue.call(t):pe.call(t)}function Ee(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function _e(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Ee(i):Ee(i)+e}var xe=String.fromCharCode,ke=isNaN,Se=Array.isArray;function je(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Ve(e){var r,t,i,n,a,o,c,s,l;if(!Se(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(se(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=je(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,ke(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,ke(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=ce(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!ke(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=ke(a)?String(i.arg):xe(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=me(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=ne(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=_e(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Te=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ae(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function $e(e){var r,t,i,n;for(t=[],n=0,i=Te.exec(e);i;)(r=e.slice(n,Te.lastIndex-i[0].length)).length&&t.push(r),t.push(Ae(i)),n=Te.lastIndex,i=Te.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Fe(e){return"string"==typeof e}function Ie(e){var r,t,i;if(!Fe(e))throw new TypeError(Ie("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=$e(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return Ve.apply(null,t)}function Ce(){return new Function("return this;")()}var Re="object"==typeof self?self:null,Oe="object"==typeof window?window:null,Ze="object"==typeof globalThis?globalThis:null,Pe=function(e){if(arguments.length){if(!N(e))throw new TypeError(Ie("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Ce()}if(Ze)return Ze;if(Re)return Re;if(Oe)return Oe;throw new Error("unexpected error. Unable to resolve global object.")}(),Ge=Pe.document&&Pe.document.childNodes,Le=Int8Array,We="function"==typeof Object.defineProperty?Object.defineProperty:null,Be=Object.defineProperty;function Ue(e){return"number"==typeof e}function Ne(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Xe(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+Ne(n):Ne(n)+e,i&&(e="-"+e)),e}var Me=String.prototype.toLowerCase,ze=String.prototype.toUpperCase;function He(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!Ue(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=Xe(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=Xe(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===ze.call(e.specifier)?ze.call(t):Me.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function qe(e){return"string"==typeof e}var De=Math.abs,Je=String.prototype.toLowerCase,Ke=String.prototype.toUpperCase,Qe=String.prototype.replace,Ye=/e\+(\d)$/,er=/e-(\d)$/,rr=/^(\d+)$/,tr=/^(\d+)e/,ir=/\.0$/,nr=/\.0*e/,ar=/(\..*[^0])0*e/;function or(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!Ue(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":De(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=Qe.call(t,ar,"$1e"),t=Qe.call(t,nr,"e"),t=Qe.call(t,ir,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Qe.call(t,Ye,"e+0$1"),t=Qe.call(t,er,"e-0$1"),e.alternate&&(t=Qe.call(t,rr,"$1."),t=Qe.call(t,tr,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Ke.call(e.specifier)?Ke.call(t):Je.call(t)}function cr(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function sr(e,r,t){var i=r-e.length;return i<0?e:e=t?e+cr(i):cr(i)+e}var lr=String.fromCharCode,pr=isNaN,ur=Array.isArray;function fr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function gr(e){var r,t,i,n,a,o,c,s,l;if(!ur(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(qe(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=fr(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,pr(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,pr(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=He(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!pr(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=pr(a)?String(i.arg):lr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=or(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Xe(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=sr(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var dr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function hr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function wr(e){var r,t,i,n;for(t=[],n=0,i=dr.exec(e);i;)(r=e.slice(n,dr.lastIndex-i[0].length)).length&&t.push(r),t.push(hr(i)),n=dr.lastIndex,i=dr.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function br(e){return"string"==typeof e}function yr(e){var r,t,i;if(!br(e))throw new TypeError(yr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=wr(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return gr.apply(null,t)}var vr,mr=Object.prototype,Er=mr.toString,_r=mr.__defineGetter__,xr=mr.__defineSetter__,kr=mr.__lookupGetter__,Sr=mr.__lookupSetter__;vr=function(){try{return We({},"x",{}),!0}catch(e){return!1}}()?Be:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===Er.call(e))throw new TypeError(yr("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Er.call(t))throw new TypeError(yr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(kr.call(e,r)||Sr.call(e,r)?(i=e.__proto__,e.__proto__=mr,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&_r&&_r.call(e,r,t.get),o&&xr&&xr.call(e,r,t.set),e};var jr=vr;function Vr(e,r,t){jr(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Tr(){return/^\s*function\s*([^(]*)/i}var Ar=/^\s*function\s*([^(]*)/i;Vr(Tr,"REGEXP",Ar);var $r=Array.isArray?Array.isArray:function(e){return"[object Array]"===J(e)};function Fr(e){return null!==e&&"object"==typeof e}function Ir(e){var r,t,i,n;if(("Object"===(t=J(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(i=e.constructor).name)return i.name;if(r=Ar.exec(i.toString()))return r[1]}return Fr(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}Vr(Fr,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(yr("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,i;if(!$r(r))return!1;if(0===(t=r.length))return!1;for(i=0;i<t;i++)if(!1===e(r[i]))return!1;return!0}}(Fr));var Cr="function"==typeof e||"object"==typeof Le||"function"==typeof Ge?function(e){return Ir(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?Ir(e).toLowerCase():r};function Rr(e){return"function"===Cr(e)}function Or(){var e,r=arguments,t=r[0],i="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)i+="&arg[]="+encodeURIComponent(r[e]);return i}return function(e,r,t){var i,n,a,o;if(o=typeof(a=e),null===a||"object"!==o&&"function"!==o||!Rr(a.next))throw new TypeError(Or("0Op3v,IA",e));if(!Rr(r))throw new TypeError(Or("0Op2H,G6",r));for(n=-1;;){if(n+=1,(i=e.next()).done)return!0;if(!r.call(t,i.value,n))return!1}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).iterEveryBy=r();
//# sourceMappingURL=browser.js.map
