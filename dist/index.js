"use strict";var n=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var o=n(function(j,f){
var q=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),N=require('@stdlib/math-base-special-betainc/dist'),u=require('@stdlib/math-base-assert-is-nan/dist'),g=require('@stdlib/math-base-special-floor/dist'),y=require('@stdlib/constants-float64-pinf/dist');function I(r,e,i){return u(r)||u(e)||u(i)||i<0||i>1||!q(e)||e===y?NaN:r<0?0:r>=e?1:(r=g(r+1e-7),N(i,r+1,e-r,!0,!0))}f.exports=I
});var c=n(function(k,v){
var d=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),l=require('@stdlib/utils-constant-function/dist'),F=require('@stdlib/math-base-special-betainc/dist'),a=require('@stdlib/math-base-assert-is-nan/dist'),b=require('@stdlib/math-base-special-floor/dist'),P=require('@stdlib/constants-float64-pinf/dist');function m(r,e){if(a(r)||a(e)||e<0||e>1||!d(r)||r===P)return l(NaN);return i;function i(t){return a(t)?NaN:t<0?0:t>=r?1:(t=b(t+1e-7),F(e,t+1,r-t,!0,!0))}}v.exports=m
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),s=o(),R=c();O(s,"factory",R);module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
