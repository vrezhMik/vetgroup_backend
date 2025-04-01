import{gk as ar}from"./strapi-KHJjuXVj.js";var qe={exports:{}},Ke={exports:{}},R={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,u=e?Symbol.for("react.profiler"):60114,o=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,i=e?Symbol.for("react.async_mode"):60111,s=e?Symbol.for("react.concurrent_mode"):60111,p=e?Symbol.for("react.forward_ref"):60112,d=e?Symbol.for("react.suspense"):60113,b=e?Symbol.for("react.suspense_list"):60120,v=e?Symbol.for("react.memo"):60115,h=e?Symbol.for("react.lazy"):60116,T=e?Symbol.for("react.block"):60121,I=e?Symbol.for("react.fundamental"):60117,C=e?Symbol.for("react.responder"):60118,D=e?Symbol.for("react.scope"):60119;function k(y){return typeof y=="string"||typeof y=="function"||y===n||y===s||y===u||y===a||y===d||y===b||typeof y=="object"&&y!==null&&(y.$$typeof===h||y.$$typeof===v||y.$$typeof===o||y.$$typeof===c||y.$$typeof===p||y.$$typeof===I||y.$$typeof===C||y.$$typeof===D||y.$$typeof===T)}function j(y){if(typeof y=="object"&&y!==null){var be=y.$$typeof;switch(be){case r:var oe=y.type;switch(oe){case i:case s:case n:case u:case a:case d:return oe;default:var De=oe&&oe.$$typeof;switch(De){case c:case p:case h:case v:case o:return De;default:return be}}case t:return be}}}var Z=i,pe=s,Q=c,de=o,L=r,H=p,ye=n,he=h,f=v,l=t,E=u,O=a,g=d,w=!1;function m(y){return w||(w=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),P(y)||j(y)===i}function P(y){return j(y)===s}function A(y){return j(y)===c}function _(y){return j(y)===o}function S(y){return typeof y=="object"&&y!==null&&y.$$typeof===r}function $(y){return j(y)===p}function Y(y){return j(y)===n}function F(y){return j(y)===h}function Ve(y){return j(y)===v}function er(y){return j(y)===t}function rr(y){return j(y)===u}function tr(y){return j(y)===a}function nr(y){return j(y)===d}R.AsyncMode=Z,R.ConcurrentMode=pe,R.ContextConsumer=Q,R.ContextProvider=de,R.Element=L,R.ForwardRef=H,R.Fragment=ye,R.Lazy=he,R.Memo=f,R.Portal=l,R.Profiler=E,R.StrictMode=O,R.Suspense=g,R.isAsyncMode=m,R.isConcurrentMode=P,R.isContextConsumer=A,R.isContextProvider=_,R.isElement=S,R.isForwardRef=$,R.isFragment=Y,R.isLazy=F,R.isMemo=Ve,R.isPortal=er,R.isProfiler=rr,R.isStrictMode=tr,R.isSuspense=nr,R.isValidElementType=k,R.typeOf=j})();Ke.exports=R;var Be=Ke.exports;/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var ke=Object.getOwnPropertySymbols,or=Object.prototype.hasOwnProperty,ir=Object.prototype.propertyIsEnumerable;function ur(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function fr(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;var n=Object.getOwnPropertyNames(r).map(function(u){return r[u]});if(n.join("")!=="0123456789")return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach(function(u){a[u]=u}),Object.keys(Object.assign({},a)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var cr=fr()?Object.assign:function(e,r){for(var t,n=ur(e),a,u=1;u<arguments.length;u++){t=Object(arguments[u]);for(var o in t)or.call(t,o)&&(n[o]=t[o]);if(ke){a=ke(t);for(var c=0;c<a.length;c++)ir.call(t,a[c])&&(n[a[c]]=t[a[c]])}}return n},sr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Je=sr,Ge=Function.call.bind(Object.prototype.hasOwnProperty),Ee=function(){};{var lr=Je,we={},vr=Ge;Ee=function(e){var r="Warning: "+e;typeof console<"u"&&console.error(r);try{throw new Error(r)}catch{}}}function Xe(e,r,t,n,a){for(var u in e)if(vr(e,u)){var o;try{if(typeof e[u]!="function"){var c=Error((n||"React class")+": "+t+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[u]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw c.name="Invariant Violation",c}o=e[u](r,u,n,t,null,lr)}catch(s){o=s}if(o&&!(o instanceof Error)&&Ee((n||"React class")+": type specification of "+t+" `"+u+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof o+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),o instanceof Error&&!(o.message in we)){we[o.message]=!0;var i=a?a():"";Ee("Failed "+t+" type: "+o.message+(i??""))}}}Xe.resetWarningCache=function(){we={}};var pr=Xe,dr=Be,yr=cr,N=Je,ge=Ge,Ye=pr,V=function(){};V=function(e){var r="Warning: "+e;typeof console<"u"&&console.error(r);try{throw new Error(r)}catch{}};function ie(){return null}var hr=function(e,r){var t=typeof Symbol=="function"&&Symbol.iterator,n="@@iterator";function a(f){var l=f&&(t&&f[t]||f[n]);if(typeof l=="function")return l}var u="<<anonymous>>",o={array:p("array"),bigint:p("bigint"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:d(),arrayOf:b,element:v(),elementType:h(),instanceOf:T,node:k(),objectOf:C,oneOf:I,oneOfType:D,shape:Z,exact:pe};function c(f,l){return f===l?f!==0||1/f===1/l:f!==f&&l!==l}function i(f,l){this.message=f,this.data=l&&typeof l=="object"?l:{},this.stack=""}i.prototype=Error.prototype;function s(f){var l={},E=0;function O(w,m,P,A,_,S,$){if(A=A||u,S=S||P,$!==N){if(r){var Y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw Y.name="Invariant Violation",Y}else if(typeof console<"u"){var F=A+":"+P;!l[F]&&E<3&&(V("You are manually calling a React.PropTypes validation function for the `"+S+"` prop on `"+A+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),l[F]=!0,E++)}}return m[P]==null?w?m[P]===null?new i("The "+_+" `"+S+"` is marked as required "+("in `"+A+"`, but its value is `null`.")):new i("The "+_+" `"+S+"` is marked as required in "+("`"+A+"`, but its value is `undefined`.")):null:f(m,P,A,_,S)}var g=O.bind(null,!1);return g.isRequired=O.bind(null,!0),g}function p(f){function l(E,O,g,w,m,P){var A=E[O],_=L(A);if(_!==f){var S=H(A);return new i("Invalid "+w+" `"+m+"` of type "+("`"+S+"` supplied to `"+g+"`, expected ")+("`"+f+"`."),{expectedType:f})}return null}return s(l)}function d(){return s(ie)}function b(f){function l(E,O,g,w,m){if(typeof f!="function")return new i("Property `"+m+"` of component `"+g+"` has invalid PropType notation inside arrayOf.");var P=E[O];if(!Array.isArray(P)){var A=L(P);return new i("Invalid "+w+" `"+m+"` of type "+("`"+A+"` supplied to `"+g+"`, expected an array."))}for(var _=0;_<P.length;_++){var S=f(P,_,g,w,m+"["+_+"]",N);if(S instanceof Error)return S}return null}return s(l)}function v(){function f(l,E,O,g,w){var m=l[E];if(!e(m)){var P=L(m);return new i("Invalid "+g+" `"+w+"` of type "+("`"+P+"` supplied to `"+O+"`, expected a single ReactElement."))}return null}return s(f)}function h(){function f(l,E,O,g,w){var m=l[E];if(!dr.isValidElementType(m)){var P=L(m);return new i("Invalid "+g+" `"+w+"` of type "+("`"+P+"` supplied to `"+O+"`, expected a single ReactElement type."))}return null}return s(f)}function T(f){function l(E,O,g,w,m){if(!(E[O]instanceof f)){var P=f.name||u,A=he(E[O]);return new i("Invalid "+w+" `"+m+"` of type "+("`"+A+"` supplied to `"+g+"`, expected ")+("instance of `"+P+"`."))}return null}return s(l)}function I(f){if(!Array.isArray(f))return arguments.length>1?V("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):V("Invalid argument supplied to oneOf, expected an array."),ie;function l(E,O,g,w,m){for(var P=E[O],A=0;A<f.length;A++)if(c(P,f[A]))return null;var _=JSON.stringify(f,function($,Y){var F=H(Y);return F==="symbol"?String(Y):Y});return new i("Invalid "+w+" `"+m+"` of value `"+String(P)+"` "+("supplied to `"+g+"`, expected one of "+_+"."))}return s(l)}function C(f){function l(E,O,g,w,m){if(typeof f!="function")return new i("Property `"+m+"` of component `"+g+"` has invalid PropType notation inside objectOf.");var P=E[O],A=L(P);if(A!=="object")return new i("Invalid "+w+" `"+m+"` of type "+("`"+A+"` supplied to `"+g+"`, expected an object."));for(var _ in P)if(ge(P,_)){var S=f(P,_,g,w,m+"."+_,N);if(S instanceof Error)return S}return null}return s(l)}function D(f){if(!Array.isArray(f))return V("Invalid argument supplied to oneOfType, expected an instance of array."),ie;for(var l=0;l<f.length;l++){var E=f[l];if(typeof E!="function")return V("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+ye(E)+" at index "+l+"."),ie}function O(g,w,m,P,A){for(var _=[],S=0;S<f.length;S++){var $=f[S],Y=$(g,w,m,P,A,N);if(Y==null)return null;Y.data&&ge(Y.data,"expectedType")&&_.push(Y.data.expectedType)}var F=_.length>0?", expected one of type ["+_.join(", ")+"]":"";return new i("Invalid "+P+" `"+A+"` supplied to "+("`"+m+"`"+F+"."))}return s(O)}function k(){function f(l,E,O,g,w){return Q(l[E])?null:new i("Invalid "+g+" `"+w+"` supplied to "+("`"+O+"`, expected a ReactNode."))}return s(f)}function j(f,l,E,O,g){return new i((f||"React class")+": "+l+" type `"+E+"."+O+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+g+"`.")}function Z(f){function l(E,O,g,w,m){var P=E[O],A=L(P);if(A!=="object")return new i("Invalid "+w+" `"+m+"` of type `"+A+"` "+("supplied to `"+g+"`, expected `object`."));for(var _ in f){var S=f[_];if(typeof S!="function")return j(g,w,m,_,H(S));var $=S(P,_,g,w,m+"."+_,N);if($)return $}return null}return s(l)}function pe(f){function l(E,O,g,w,m){var P=E[O],A=L(P);if(A!=="object")return new i("Invalid "+w+" `"+m+"` of type `"+A+"` "+("supplied to `"+g+"`, expected `object`."));var _=yr({},E[O],f);for(var S in _){var $=f[S];if(ge(f,S)&&typeof $!="function")return j(g,w,m,S,H($));if(!$)return new i("Invalid "+w+" `"+m+"` key `"+S+"` supplied to `"+g+"`.\nBad object: "+JSON.stringify(E[O],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(f),null,"  "));var Y=$(P,S,g,w,m+"."+S,N);if(Y)return Y}return null}return s(l)}function Q(f){switch(typeof f){case"number":case"string":case"undefined":return!0;case"boolean":return!f;case"object":if(Array.isArray(f))return f.every(Q);if(f===null||e(f))return!0;var l=a(f);if(l){var E=l.call(f),O;if(l!==f.entries){for(;!(O=E.next()).done;)if(!Q(O.value))return!1}else for(;!(O=E.next()).done;){var g=O.value;if(g&&!Q(g[1]))return!1}}else return!1;return!0;default:return!1}}function de(f,l){return f==="symbol"?!0:l?l["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&l instanceof Symbol:!1}function L(f){var l=typeof f;return Array.isArray(f)?"array":f instanceof RegExp?"object":de(l,f)?"symbol":l}function H(f){if(typeof f>"u"||f===null)return""+f;var l=L(f);if(l==="object"){if(f instanceof Date)return"date";if(f instanceof RegExp)return"regexp"}return l}function ye(f){var l=H(f);switch(l){case"array":case"object":return"an "+l;case"boolean":case"date":case"regexp":return"a "+l;default:return l}}function he(f){return!f.constructor||!f.constructor.name?u:f.constructor.name}return o.checkPropTypes=Ye,o.resetWarningCache=Ye.resetWarningCache,o.PropTypes=o,o};{var br=Be,gr=!0;qe.exports=hr(br.isElement,gr)}var mr=qe.exports;const Rr=ar(mr);function M(e){for(var r=arguments.length,t=Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];{var a=Ar[e],u=a?typeof a=="function"?a.apply(null,t):a:"unknown error nr: "+e;throw Error("[Immer] "+u)}}function W(e){return!!e&&!!e[x]}function J(e){var r;return!!e&&(function(t){if(!t||typeof t!="object")return!1;var n=Object.getPrototypeOf(t);if(n===null)return!0;var a=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return a===Object||typeof a=="function"&&Function.toString.call(a)===Sr}(e)||Array.isArray(e)||!!e[ne]||!!(!((r=e.constructor)===null||r===void 0)&&r[ne])||le(e)||ve(e))}function Cr(e){return W(e)||M(23,e),e[x].t}function G(e,r,t){t===void 0&&(t=!1),X(e)===0?(t?Object.keys:ee)(e).forEach(function(n){t&&typeof n=="symbol"||r(n,e[n],e)}):e.forEach(function(n,a){return r(a,n,e)})}function X(e){var r=e[x];return r?r.i>3?r.i-4:r.i:Array.isArray(e)?1:le(e)?2:ve(e)?3:0}function B(e,r){return X(e)===2?e.has(r):Object.prototype.hasOwnProperty.call(e,r)}function ue(e,r){return X(e)===2?e.get(r):e[r]}function He(e,r,t){var n=X(e);n===2?e.set(r,t):n===3?e.add(t):e[r]=t}function Ze(e,r){return e===r?e!==0||1/e==1/r:e!=e&&r!=r}function le(e){return Er&&e instanceof Map}function ve(e){return wr&&e instanceof Set}function q(e){return e.o||e.t}function Re(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var r=Ne(e);delete r[x];for(var t=ee(r),n=0;n<t.length;n++){var a=t[n],u=r[a];u.writable===!1&&(u.writable=!0,u.configurable=!0),(u.get||u.set)&&(r[a]={configurable:!0,writable:!0,enumerable:u.enumerable,value:e[a]})}return Object.create(Object.getPrototypeOf(e),r)}function Ce(e,r){return r===void 0&&(r=!1),xe(e)||W(e)||!J(e)||(X(e)>1&&(e.set=e.add=e.clear=e.delete=Pr),Object.freeze(e),r&&G(e,function(t,n){return Ce(n,!0)},!0)),e}function Pr(){M(2)}function xe(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function U(e){var r=_e[e];return r||M(18,e),r}function Qe(e,r){_e[e]||(_e[e]=r)}function Ae(){return re||M(0),re}function me(e,r){r&&(U("Patches"),e.u=[],e.s=[],e.v=r)}function fe(e){Se(e),e.p.forEach(Or),e.p=null}function Se(e){e===re&&(re=e.l)}function $e(e){return re={p:[],l:re,h:e,m:!0,_:0}}function Or(e){var r=e[x];r.i===0||r.i===1?r.j():r.g=!0}function Pe(e,r){r._=r.p.length;var t=r.p[0],n=e!==void 0&&e!==t;return r.h.O||U("ES5").S(r,e,n),n?(t[x].P&&(fe(r),M(4)),J(e)&&(e=ce(r,e),r.l||se(r,e)),r.u&&U("Patches").M(t[x].t,e,r.u,r.s)):e=ce(r,t,[]),fe(r),r.u&&r.v(r.u,r.s),e!==Me?e:void 0}function ce(e,r,t){if(xe(r))return r;var n=r[x];if(!n)return G(r,function(c,i){return ze(e,n,r,c,i,t)},!0),r;if(n.A!==e)return r;if(!n.P)return se(e,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var a=n.i===4||n.i===5?n.o=Re(n.k):n.o,u=a,o=!1;n.i===3&&(u=new Set(a),a.clear(),o=!0),G(u,function(c,i){return ze(e,n,a,c,i,t,o)}),se(e,a,!1),t&&e.u&&U("Patches").N(n,t,e.u,e.s)}return n.o}function ze(e,r,t,n,a,u,o){if(a===t&&M(5),W(a)){var c=ce(e,a,u&&r&&r.i!==3&&!B(r.R,n)?u.concat(n):void 0);if(He(t,n,c),!W(c))return;e.m=!1}else o&&t.add(a);if(J(a)&&!xe(a)){if(!e.h.D&&e._<1)return;ce(e,a),r&&r.A.l||se(e,a)}}function se(e,r,t){t===void 0&&(t=!1),!e.l&&e.h.D&&e.m&&Ce(r,t)}function Oe(e,r){var t=e[x];return(t?q(t):e)[r]}function Le(e,r){if(r in e)for(var t=Object.getPrototypeOf(e);t;){var n=Object.getOwnPropertyDescriptor(t,r);if(n)return n;t=Object.getPrototypeOf(t)}}function K(e){e.P||(e.P=!0,e.l&&K(e.l))}function Te(e){e.o||(e.o=Re(e.t))}function je(e,r,t){var n=le(r)?U("MapSet").F(r,t):ve(r)?U("MapSet").T(r,t):e.O?function(a,u){var o=Array.isArray(a),c={i:o?1:0,A:u?u.A:Ae(),P:!1,I:!1,R:{},l:u,t:a,k:null,o:null,j:null,C:!1},i=c,s=ae;o&&(i=[c],s=te);var p=Proxy.revocable(i,s),d=p.revoke,b=p.proxy;return c.k=b,c.j=d,b}(r,t):U("ES5").J(r,t);return(t?t.A:Ae()).p.push(n),n}function Tr(e){return W(e)||M(22,e),function r(t){if(!J(t))return t;var n,a=t[x],u=X(t);if(a){if(!a.P&&(a.i<4||!U("ES5").K(a)))return a.t;a.I=!0,n=Ue(t,u),a.I=!1}else n=Ue(t,u);return G(n,function(o,c){a&&ue(a.t,o)===c||He(n,o,r(c))}),u===3?new Set(n):n}(e)}function Ue(e,r){switch(r){case 2:return new Map(e);case 3:return Array.from(e)}return Re(e)}function xr(){function e(o,c){var i=u[o];return i?i.enumerable=c:u[o]=i={configurable:!0,enumerable:c,get:function(){var s=this[x];return a(s),ae.get(s,o)},set:function(s){var p=this[x];a(p),ae.set(p,o,s)}},i}function r(o){for(var c=o.length-1;c>=0;c--){var i=o[c][x];if(!i.P)switch(i.i){case 5:n(i)&&K(i);break;case 4:t(i)&&K(i)}}}function t(o){for(var c=o.t,i=o.k,s=ee(i),p=s.length-1;p>=0;p--){var d=s[p];if(d!==x){var b=c[d];if(b===void 0&&!B(c,d))return!0;var v=i[d],h=v&&v[x];if(h?h.t!==b:!Ze(v,b))return!0}}var T=!!c[x];return s.length!==ee(c).length+(T?0:1)}function n(o){var c=o.k;if(c.length!==o.t.length)return!0;var i=Object.getOwnPropertyDescriptor(c,c.length-1);if(i&&!i.get)return!0;for(var s=0;s<c.length;s++)if(!c.hasOwnProperty(s))return!0;return!1}function a(o){o.g&&M(3,JSON.stringify(q(o)))}var u={};Qe("ES5",{J:function(o,c){var i=Array.isArray(o),s=function(d,b){if(d){for(var v=Array(b.length),h=0;h<b.length;h++)Object.defineProperty(v,""+h,e(h,!0));return v}var T=Ne(b);delete T[x];for(var I=ee(T),C=0;C<I.length;C++){var D=I[C];T[D]=e(D,d||!!T[D].enumerable)}return Object.create(Object.getPrototypeOf(b),T)}(i,o),p={i:i?5:4,A:c?c.A:Ae(),P:!1,I:!1,R:{},l:c,t:o,k:s,o:null,g:!1,C:!1};return Object.defineProperty(s,x,{value:p,writable:!0}),s},S:function(o,c,i){i?W(c)&&c[x].A===o&&r(o.p):(o.u&&function s(p){if(p&&typeof p=="object"){var d=p[x];if(d){var b=d.t,v=d.k,h=d.R,T=d.i;if(T===4)G(v,function(j){j!==x&&(b[j]!==void 0||B(b,j)?h[j]||s(v[j]):(h[j]=!0,K(d)))}),G(b,function(j){v[j]!==void 0||B(v,j)||(h[j]=!1,K(d))});else if(T===5){if(n(d)&&(K(d),h.length=!0),v.length<b.length)for(var I=v.length;I<b.length;I++)h[I]=!1;else for(var C=b.length;C<v.length;C++)h[C]=!0;for(var D=Math.min(v.length,b.length),k=0;k<D;k++)v.hasOwnProperty(k)||(h[k]=!0),h[k]===void 0&&s(v[k])}}}}(o.p[0]),r(o.p))},K:function(o){return o.i===4?t(o):n(o)}})}function Ir(){function e(n){if(!J(n))return n;if(Array.isArray(n))return n.map(e);if(le(n))return new Map(Array.from(n.entries()).map(function(o){return[o[0],e(o[1])]}));if(ve(n))return new Set(Array.from(n).map(e));var a=Object.create(Object.getPrototypeOf(n));for(var u in n)a[u]=e(n[u]);return B(n,ne)&&(a[ne]=n[ne]),a}function r(n){return W(n)?e(n):n}var t="add";Qe("Patches",{$:function(n,a){return a.forEach(function(u){for(var o=u.path,c=u.op,i=n,s=0;s<o.length-1;s++){var p=X(i),d=o[s];typeof d!="string"&&typeof d!="number"&&(d=""+d),p!==0&&p!==1||d!=="__proto__"&&d!=="constructor"||M(24),typeof i=="function"&&d==="prototype"&&M(24),typeof(i=ue(i,d))!="object"&&M(15,o.join("/"))}var b=X(i),v=e(u.value),h=o[o.length-1];switch(c){case"replace":switch(b){case 2:return i.set(h,v);case 3:M(16);default:return i[h]=v}case t:switch(b){case 1:return h==="-"?i.push(v):i.splice(h,0,v);case 2:return i.set(h,v);case 3:return i.add(v);default:return i[h]=v}case"remove":switch(b){case 1:return i.splice(h,1);case 2:return i.delete(h);case 3:return i.delete(u.value);default:return delete i[h]}default:M(17,c)}}),n},N:function(n,a,u,o){switch(n.i){case 0:case 4:case 2:return function(c,i,s,p){var d=c.t,b=c.o;G(c.R,function(v,h){var T=ue(d,v),I=ue(b,v),C=h?B(d,v)?"replace":t:"remove";if(T!==I||C!=="replace"){var D=i.concat(v);s.push(C==="remove"?{op:C,path:D}:{op:C,path:D,value:I}),p.push(C===t?{op:"remove",path:D}:C==="remove"?{op:t,path:D,value:r(T)}:{op:"replace",path:D,value:r(T)})}})}(n,a,u,o);case 5:case 1:return function(c,i,s,p){var d=c.t,b=c.R,v=c.o;if(v.length<d.length){var h=[v,d];d=h[0],v=h[1];var T=[p,s];s=T[0],p=T[1]}for(var I=0;I<d.length;I++)if(b[I]&&v[I]!==d[I]){var C=i.concat([I]);s.push({op:"replace",path:C,value:r(v[I])}),p.push({op:"replace",path:C,value:r(d[I])})}for(var D=d.length;D<v.length;D++){var k=i.concat([D]);s.push({op:t,path:k,value:r(v[D])})}d.length<v.length&&p.push({op:"replace",path:i.concat(["length"]),value:d.length})}(n,a,u,o);case 3:return function(c,i,s,p){var d=c.t,b=c.o,v=0;d.forEach(function(h){if(!b.has(h)){var T=i.concat([v]);s.push({op:"remove",path:T,value:h}),p.unshift({op:t,path:T,value:h})}v++}),v=0,b.forEach(function(h){if(!d.has(h)){var T=i.concat([v]);s.push({op:t,path:T,value:h}),p.unshift({op:"remove",path:T,value:h})}v++})}(n,a,u,o)}},M:function(n,a,u,o){u.push({op:"replace",path:[],value:a===Me?void 0:a}),o.push({op:"replace",path:[],value:n})}})}var We,re,Ie=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",Er=typeof Map<"u",wr=typeof Set<"u",Fe=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Me=Ie?Symbol.for("immer-nothing"):((We={})["immer-nothing"]=!0,We),ne=Ie?Symbol.for("immer-draftable"):"__$immer_draftable",x=Ie?Symbol.for("immer-state"):"__$immer_state",Ar={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(e){return"Cannot apply patch, path doesn't resolve: "+e},16:'Sets cannot have "replace" patches.',17:function(e){return"Unsupported patch operation: "+e},18:function(e){return"The plugin for '"+e+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+e+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(e){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+e+"'"},22:function(e){return"'current' expects a draft, got: "+e},23:function(e){return"'original' expects a draft, got: "+e},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Sr=""+Object.prototype.constructor,ee=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Ne=Object.getOwnPropertyDescriptors||function(e){var r={};return ee(e).forEach(function(t){r[t]=Object.getOwnPropertyDescriptor(e,t)}),r},_e={},ae={get:function(e,r){if(r===x)return e;var t=q(e);if(!B(t,r))return function(a,u,o){var c,i=Le(u,o);return i?"value"in i?i.value:(c=i.get)===null||c===void 0?void 0:c.call(a.k):void 0}(e,t,r);var n=t[r];return e.I||!J(n)?n:n===Oe(e.t,r)?(Te(e),e.o[r]=je(e.A.h,n,e)):n},has:function(e,r){return r in q(e)},ownKeys:function(e){return Reflect.ownKeys(q(e))},set:function(e,r,t){var n=Le(q(e),r);if(n?.set)return n.set.call(e.k,t),!0;if(!e.P){var a=Oe(q(e),r),u=a?.[x];if(u&&u.t===t)return e.o[r]=t,e.R[r]=!1,!0;if(Ze(t,a)&&(t!==void 0||B(e.t,r)))return!0;Te(e),K(e)}return e.o[r]===t&&(t!==void 0||r in e.o)||Number.isNaN(t)&&Number.isNaN(e.o[r])||(e.o[r]=t,e.R[r]=!0),!0},deleteProperty:function(e,r){return Oe(e.t,r)!==void 0||r in e.t?(e.R[r]=!1,Te(e),K(e)):delete e.R[r],e.o&&delete e.o[r],!0},getOwnPropertyDescriptor:function(e,r){var t=q(e),n=Reflect.getOwnPropertyDescriptor(t,r);return n&&{writable:!0,configurable:e.i!==1||r!=="length",enumerable:n.enumerable,value:t[r]}},defineProperty:function(){M(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){M(12)}},te={};G(ae,function(e,r){te[e]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)}}),te.deleteProperty=function(e,r){return isNaN(parseInt(r))&&M(13),te.set.call(this,e,r,void 0)},te.set=function(e,r,t){return r!=="length"&&isNaN(parseInt(r))&&M(14),ae.set.call(this,e[0],r,t,e[0])};var jr=function(){function e(t){var n=this;this.O=Fe,this.D=!0,this.produce=function(a,u,o){if(typeof a=="function"&&typeof u!="function"){var c=u;u=a;var i=n;return function(T){var I=this;T===void 0&&(T=c);for(var C=arguments.length,D=Array(C>1?C-1:0),k=1;k<C;k++)D[k-1]=arguments[k];return i.produce(T,function(j){var Z;return(Z=u).call.apply(Z,[I,j].concat(D))})}}var s;if(typeof u!="function"&&M(6),o!==void 0&&typeof o!="function"&&M(7),J(a)){var p=$e(n),d=je(n,a,void 0),b=!0;try{s=u(d),b=!1}finally{b?fe(p):Se(p)}return typeof Promise<"u"&&s instanceof Promise?s.then(function(T){return me(p,o),Pe(T,p)},function(T){throw fe(p),T}):(me(p,o),Pe(s,p))}if(!a||typeof a!="object"){if((s=u(a))===void 0&&(s=a),s===Me&&(s=void 0),n.D&&Ce(s,!0),o){var v=[],h=[];U("Patches").M(a,s,v,h),o(v,h)}return s}M(21,a)},this.produceWithPatches=function(a,u){if(typeof a=="function")return function(s){for(var p=arguments.length,d=Array(p>1?p-1:0),b=1;b<p;b++)d[b-1]=arguments[b];return n.produceWithPatches(s,function(v){return a.apply(void 0,[v].concat(d))})};var o,c,i=n.produce(a,u,function(s,p){o=s,c=p});return typeof Promise<"u"&&i instanceof Promise?i.then(function(s){return[s,o,c]}):[i,o,c]},typeof t?.useProxies=="boolean"&&this.setUseProxies(t.useProxies),typeof t?.autoFreeze=="boolean"&&this.setAutoFreeze(t.autoFreeze)}var r=e.prototype;return r.createDraft=function(t){J(t)||M(8),W(t)&&(t=Tr(t));var n=$e(this),a=je(this,t,void 0);return a[x].C=!0,Se(n),a},r.finishDraft=function(t,n){var a=t&&t[x];a&&a.C||M(9),a.I&&M(10);var u=a.A;return me(u,n),Pe(void 0,u)},r.setAutoFreeze=function(t){this.D=t},r.setUseProxies=function(t){t&&!Fe&&M(20),this.O=t},r.applyPatches=function(t,n){var a;for(a=n.length-1;a>=0;a--){var u=n[a];if(u.path.length===0&&u.op==="replace"){t=u.value;break}}a>-1&&(n=n.slice(a+1));var o=U("Patches").$;return W(t)?o(t,n):this.produce(t,function(c){return o(c,n)})},e}(),z=new jr,Mr=z.produce,Dr=z.produceWithPatches.bind(z);z.setAutoFreeze.bind(z);z.setUseProxies.bind(z);var kr=z.applyPatches.bind(z);z.createDraft.bind(z);z.finishDraft.bind(z);export{xr as F,Rr as P,Ir as T,Dr as c,Cr as e,Mr as f,kr as p,W as r,J as t};
