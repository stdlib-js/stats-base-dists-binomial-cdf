"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var o=n(function(j,f){
var q=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),N=require('@stdlib/math-base-special-betainc/dist'),u=require('@stdlib/math-base-assert-is-nan/dist'),g=require('@stdlib/math-base-special-floor/dist'),y=require('@stdlib/constants-float64-pinf/dist');function I(e,r,t){return u(e)||u(r)||u(t)||t<0||t>1||!q(r)||r===y?NaN:e<0?0:e>=r?1:(e=g(e+1e-7),N(t,e+1,r-e,!0,!0))}f.exports=I
});var c=n(function(k,v){
var d=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),l=require('@stdlib/utils-constant-function/dist'),F=require('@stdlib/math-base-special-betainc/dist'),a=require('@stdlib/math-base-assert-is-nan/dist'),b=require('@stdlib/math-base-special-floor/dist'),P=require('@stdlib/constants-float64-pinf/dist');function m(e,r){if(a(e)||a(r)||r<0||r>1||!d(e)||e===P)return l(NaN);return t;function t(i){return a(i)?NaN:i<0?0:i>=e?1:(i=b(i+1e-7),F(r,i+1,e-i,!0,!0))}}v.exports=m
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),s=o(),R=c();O(s,"factory",R);module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
