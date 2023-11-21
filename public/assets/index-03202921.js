function h0(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function p0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Mi={},m0={get exports(){return Mi},set exports(t){Mi=t}},sl={},z={},g0={get exports(){return z},set exports(t){z=t}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var as=Symbol.for("react.element"),_0=Symbol.for("react.portal"),y0=Symbol.for("react.fragment"),v0=Symbol.for("react.strict_mode"),w0=Symbol.for("react.profiler"),E0=Symbol.for("react.provider"),S0=Symbol.for("react.context"),I0=Symbol.for("react.forward_ref"),C0=Symbol.for("react.suspense"),T0=Symbol.for("react.memo"),k0=Symbol.for("react.lazy"),Xd=Symbol.iterator;function R0(t){return t===null||typeof t!="object"?null:(t=Xd&&t[Xd]||t["@@iterator"],typeof t=="function"?t:null)}var qp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yp=Object.assign,Qp={};function qr(t,e,n){this.props=t,this.context=e,this.refs=Qp,this.updater=n||qp}qr.prototype.isReactComponent={};qr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};qr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Jp(){}Jp.prototype=qr.prototype;function uc(t,e,n){this.props=t,this.context=e,this.refs=Qp,this.updater=n||qp}var cc=uc.prototype=new Jp;cc.constructor=uc;Yp(cc,qr.prototype);cc.isPureReactComponent=!0;var Zd=Array.isArray,Xp=Object.prototype.hasOwnProperty,dc={current:null},Zp={key:!0,ref:!0,__self:!0,__source:!0};function em(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Xp.call(e,r)&&!Zp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:as,type:t,key:s,ref:o,props:i,_owner:dc.current}}function N0(t,e){return{$$typeof:as,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function fc(t){return typeof t=="object"&&t!==null&&t.$$typeof===as}function A0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ef=/\/+/g;function jl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?A0(""+t.key):e.toString(36)}function qs(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case as:case _0:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+jl(o,0):r,Zd(i)?(n="",t!=null&&(n=t.replace(ef,"$&/")+"/"),qs(i,e,n,"",function(u){return u})):i!=null&&(fc(i)&&(i=N0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ef,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Zd(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+jl(s,l);o+=qs(s,e,n,a,i)}else if(a=R0(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+jl(s,l++),o+=qs(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ns(t,e,n){if(t==null)return t;var r=[],i=0;return qs(t,r,"","",function(s){return e.call(n,s,i++)}),r}function P0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Oe={current:null},Ys={transition:null},x0={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:Ys,ReactCurrentOwner:dc};L.Children={map:Ns,forEach:function(t,e,n){Ns(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ns(t,function(){e++}),e},toArray:function(t){return Ns(t,function(e){return e})||[]},only:function(t){if(!fc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};L.Component=qr;L.Fragment=y0;L.Profiler=w0;L.PureComponent=uc;L.StrictMode=v0;L.Suspense=C0;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x0;L.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Yp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=dc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Xp.call(e,a)&&!Zp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:as,type:t.type,key:i,ref:s,props:r,_owner:o}};L.createContext=function(t){return t={$$typeof:S0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:E0,_context:t},t.Consumer=t};L.createElement=em;L.createFactory=function(t){var e=em.bind(null,t);return e.type=t,e};L.createRef=function(){return{current:null}};L.forwardRef=function(t){return{$$typeof:I0,render:t}};L.isValidElement=fc;L.lazy=function(t){return{$$typeof:k0,_payload:{_status:-1,_result:t},_init:P0}};L.memo=function(t,e){return{$$typeof:T0,type:t,compare:e===void 0?null:e}};L.startTransition=function(t){var e=Ys.transition;Ys.transition={};try{t()}finally{Ys.transition=e}};L.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};L.useCallback=function(t,e){return Oe.current.useCallback(t,e)};L.useContext=function(t){return Oe.current.useContext(t)};L.useDebugValue=function(){};L.useDeferredValue=function(t){return Oe.current.useDeferredValue(t)};L.useEffect=function(t,e){return Oe.current.useEffect(t,e)};L.useId=function(){return Oe.current.useId()};L.useImperativeHandle=function(t,e,n){return Oe.current.useImperativeHandle(t,e,n)};L.useInsertionEffect=function(t,e){return Oe.current.useInsertionEffect(t,e)};L.useLayoutEffect=function(t,e){return Oe.current.useLayoutEffect(t,e)};L.useMemo=function(t,e){return Oe.current.useMemo(t,e)};L.useReducer=function(t,e,n){return Oe.current.useReducer(t,e,n)};L.useRef=function(t){return Oe.current.useRef(t)};L.useState=function(t){return Oe.current.useState(t)};L.useSyncExternalStore=function(t,e,n){return Oe.current.useSyncExternalStore(t,e,n)};L.useTransition=function(){return Oe.current.useTransition()};L.version="18.2.0";(function(t){t.exports=L})(g0);const tm=p0(z),O0=h0({__proto__:null,default:tm},[z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D0=z,b0=Symbol.for("react.element"),L0=Symbol.for("react.fragment"),M0=Object.prototype.hasOwnProperty,F0=D0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,U0={key:!0,ref:!0,__self:!0,__source:!0};function nm(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)M0.call(e,r)&&!U0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:b0,type:t,key:s,ref:o,props:i,_owner:F0.current}}sl.Fragment=L0;sl.jsx=nm;sl.jsxs=nm;(function(t){t.exports=sl})(m0);const B0=Mi.Fragment,P=Mi.jsx,G=Mi.jsxs;var Fa={},Ua={},z0={get exports(){return Ua},set exports(t){Ua=t}},qe={},Ba={},j0={get exports(){return Ba},set exports(t){Ba=t}},rm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,D){var b=A.length;A.push(D);e:for(;0<b;){var se=b-1>>>1,de=A[se];if(0<i(de,D))A[se]=D,A[b]=de,b=se;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var D=A[0],b=A.pop();if(b!==D){A[0]=b;e:for(var se=0,de=A.length,ks=de>>>1;se<ks;){var Nn=2*(se+1)-1,zl=A[Nn],An=Nn+1,Rs=A[An];if(0>i(zl,b))An<de&&0>i(Rs,zl)?(A[se]=Rs,A[An]=b,se=An):(A[se]=zl,A[Nn]=b,se=Nn);else if(An<de&&0>i(Rs,b))A[se]=Rs,A[An]=b,se=An;else break e}}return D}function i(A,D){var b=A.sortIndex-D.sortIndex;return b!==0?b:A.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],c=1,d=null,f=3,_=!1,m=!1,y=!1,I=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(A){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=A)r(u),D.sortIndex=D.expirationTime,e(a,D);else break;D=n(u)}}function w(A){if(y=!1,g(A),!m)if(n(a)!==null)m=!0,Ul(T);else{var D=n(u);D!==null&&Bl(w,D.startTime-A)}}function T(A,D){m=!1,y&&(y=!1,p(R),R=-1),_=!0;var b=f;try{for(g(D),d=n(a);d!==null&&(!(d.expirationTime>D)||A&&!_e());){var se=d.callback;if(typeof se=="function"){d.callback=null,f=d.priorityLevel;var de=se(d.expirationTime<=D);D=t.unstable_now(),typeof de=="function"?d.callback=de:d===n(a)&&r(a),g(D)}else r(a);d=n(a)}if(d!==null)var ks=!0;else{var Nn=n(u);Nn!==null&&Bl(w,Nn.startTime-D),ks=!1}return ks}finally{d=null,f=b,_=!1}}var N=!1,E=null,R=-1,$=5,x=-1;function _e(){return!(t.unstable_now()-x<$)}function be(){if(E!==null){var A=t.unstable_now();x=A;var D=!0;try{D=E(!0,A)}finally{D?Qt():(N=!1,E=null)}}else N=!1}var Qt;if(typeof h=="function")Qt=function(){h(be)};else if(typeof MessageChannel<"u"){var Ts=new MessageChannel,f0=Ts.port2;Ts.port1.onmessage=be,Qt=function(){f0.postMessage(null)}}else Qt=function(){I(be,0)};function Ul(A){E=A,N||(N=!0,Qt())}function Bl(A,D){R=I(function(){A(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){m||_||(m=!0,Ul(T))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(A){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var b=f;f=D;try{return A()}finally{f=b}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,D){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var b=f;f=A;try{return D()}finally{f=b}},t.unstable_scheduleCallback=function(A,D,b){var se=t.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?se+b:se):b=se,A){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=b+de,A={id:c++,callback:D,priorityLevel:A,startTime:b,expirationTime:de,sortIndex:-1},b>se?(A.sortIndex=b,e(u,A),n(a)===null&&A===n(u)&&(y?(p(R),R=-1):y=!0,Bl(w,b-se))):(A.sortIndex=de,e(a,A),m||_||(m=!0,Ul(T))),A},t.unstable_shouldYield=_e,t.unstable_wrapCallback=function(A){var D=f;return function(){var b=f;f=D;try{return A.apply(this,arguments)}finally{f=b}}}})(rm);(function(t){t.exports=rm})(j0);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var im=z,Ge=Ba;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sm=new Set,Fi={};function rr(t,e){Mr(t,e),Mr(t+"Capture",e)}function Mr(t,e){for(Fi[t]=e,t=0;t<e.length;t++)sm.add(e[t])}var $t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),za=Object.prototype.hasOwnProperty,$0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tf={},nf={};function H0(t){return za.call(nf,t)?!0:za.call(tf,t)?!1:$0.test(t)?nf[t]=!0:(tf[t]=!0,!1)}function W0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function V0(t,e,n,r){if(e===null||typeof e>"u"||W0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function De(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ee[t]=new De(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ee[e]=new De(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ee[t]=new De(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ee[t]=new De(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ee[t]=new De(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ee[t]=new De(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ee[t]=new De(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ee[t]=new De(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ee[t]=new De(t,5,!1,t.toLowerCase(),null,!1,!1)});var hc=/[\-:]([a-z])/g;function pc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(hc,pc);Ee[e]=new De(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(hc,pc);Ee[e]=new De(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(hc,pc);Ee[e]=new De(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ee[t]=new De(t,1,!1,t.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ee[t]=new De(t,1,!1,t.toLowerCase(),null,!0,!0)});function mc(t,e,n,r){var i=Ee.hasOwnProperty(e)?Ee[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(V0(e,n,i,r)&&(n=null),r||i===null?H0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var qt=im.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,As=Symbol.for("react.element"),dr=Symbol.for("react.portal"),fr=Symbol.for("react.fragment"),gc=Symbol.for("react.strict_mode"),ja=Symbol.for("react.profiler"),om=Symbol.for("react.provider"),lm=Symbol.for("react.context"),_c=Symbol.for("react.forward_ref"),$a=Symbol.for("react.suspense"),Ha=Symbol.for("react.suspense_list"),yc=Symbol.for("react.memo"),en=Symbol.for("react.lazy"),am=Symbol.for("react.offscreen"),rf=Symbol.iterator;function ii(t){return t===null||typeof t!="object"?null:(t=rf&&t[rf]||t["@@iterator"],typeof t=="function"?t:null)}var re=Object.assign,$l;function yi(t){if($l===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);$l=e&&e[1]||""}return`
`+$l+t}var Hl=!1;function Wl(t,e){if(!t||Hl)return"";Hl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Hl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?yi(t):""}function K0(t){switch(t.tag){case 5:return yi(t.type);case 16:return yi("Lazy");case 13:return yi("Suspense");case 19:return yi("SuspenseList");case 0:case 2:case 15:return t=Wl(t.type,!1),t;case 11:return t=Wl(t.type.render,!1),t;case 1:return t=Wl(t.type,!0),t;default:return""}}function Wa(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case fr:return"Fragment";case dr:return"Portal";case ja:return"Profiler";case gc:return"StrictMode";case $a:return"Suspense";case Ha:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case lm:return(t.displayName||"Context")+".Consumer";case om:return(t._context.displayName||"Context")+".Provider";case _c:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case yc:return e=t.displayName||null,e!==null?e:Wa(t.type)||"Memo";case en:e=t._payload,t=t._init;try{return Wa(t(e))}catch{}}return null}function G0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wa(e);case 8:return e===gc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Sn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function um(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function q0(t){var e=um(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ps(t){t._valueTracker||(t._valueTracker=q0(t))}function cm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=um(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function po(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Va(t,e){var n=e.checked;return re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function sf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Sn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function dm(t,e){e=e.checked,e!=null&&mc(t,"checked",e,!1)}function Ka(t,e){dm(t,e);var n=Sn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ga(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ga(t,e.type,Sn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function of(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ga(t,e,n){(e!=="number"||po(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var vi=Array.isArray;function Tr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Sn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function qa(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function lf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(vi(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Sn(n)}}function fm(t,e){var n=Sn(e.value),r=Sn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function af(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function hm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ya(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?hm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xs,pm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(xs=xs||document.createElement("div"),xs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ui(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Si={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Y0=["Webkit","ms","Moz","O"];Object.keys(Si).forEach(function(t){Y0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Si[e]=Si[t]})});function mm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Si.hasOwnProperty(t)&&Si[t]?(""+e).trim():e+"px"}function gm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=mm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Q0=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qa(t,e){if(e){if(Q0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function Ja(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xa=null;function vc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Za=null,kr=null,Rr=null;function uf(t){if(t=ds(t)){if(typeof Za!="function")throw Error(S(280));var e=t.stateNode;e&&(e=cl(e),Za(t.stateNode,t.type,e))}}function _m(t){kr?Rr?Rr.push(t):Rr=[t]:kr=t}function ym(){if(kr){var t=kr,e=Rr;if(Rr=kr=null,uf(t),e)for(t=0;t<e.length;t++)uf(e[t])}}function vm(t,e){return t(e)}function wm(){}var Vl=!1;function Em(t,e,n){if(Vl)return t(e,n);Vl=!0;try{return vm(t,e,n)}finally{Vl=!1,(kr!==null||Rr!==null)&&(wm(),ym())}}function Bi(t,e){var n=t.stateNode;if(n===null)return null;var r=cl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var eu=!1;if($t)try{var si={};Object.defineProperty(si,"passive",{get:function(){eu=!0}}),window.addEventListener("test",si,si),window.removeEventListener("test",si,si)}catch{eu=!1}function J0(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ii=!1,mo=null,go=!1,tu=null,X0={onError:function(t){Ii=!0,mo=t}};function Z0(t,e,n,r,i,s,o,l,a){Ii=!1,mo=null,J0.apply(X0,arguments)}function ew(t,e,n,r,i,s,o,l,a){if(Z0.apply(this,arguments),Ii){if(Ii){var u=mo;Ii=!1,mo=null}else throw Error(S(198));go||(go=!0,tu=u)}}function ir(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Sm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function cf(t){if(ir(t)!==t)throw Error(S(188))}function tw(t){var e=t.alternate;if(!e){if(e=ir(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return cf(i),t;if(s===r)return cf(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function Im(t){return t=tw(t),t!==null?Cm(t):null}function Cm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Cm(t);if(e!==null)return e;t=t.sibling}return null}var Tm=Ge.unstable_scheduleCallback,df=Ge.unstable_cancelCallback,nw=Ge.unstable_shouldYield,rw=Ge.unstable_requestPaint,oe=Ge.unstable_now,iw=Ge.unstable_getCurrentPriorityLevel,wc=Ge.unstable_ImmediatePriority,km=Ge.unstable_UserBlockingPriority,_o=Ge.unstable_NormalPriority,sw=Ge.unstable_LowPriority,Rm=Ge.unstable_IdlePriority,ol=null,It=null;function ow(t){if(It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(ol,t,void 0,(t.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:uw,lw=Math.log,aw=Math.LN2;function uw(t){return t>>>=0,t===0?32:31-(lw(t)/aw|0)|0}var Os=64,Ds=4194304;function wi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function yo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=wi(l):(s&=o,s!==0&&(r=wi(s)))}else o=n&~i,o!==0?r=wi(o):s!==0&&(r=wi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ht(e),i=1<<n,r|=t[n],e&=~i;return r}function cw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ht(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=cw(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function nu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Nm(){var t=Os;return Os<<=1,!(Os&4194240)&&(Os=64),t}function Kl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function us(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ht(e),t[e]=n}function fw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ht(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ec(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ht(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var W=0;function Am(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Pm,Sc,xm,Om,Dm,ru=!1,bs=[],cn=null,dn=null,fn=null,zi=new Map,ji=new Map,nn=[],hw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ff(t,e){switch(t){case"focusin":case"focusout":cn=null;break;case"dragenter":case"dragleave":dn=null;break;case"mouseover":case"mouseout":fn=null;break;case"pointerover":case"pointerout":zi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ji.delete(e.pointerId)}}function oi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ds(e),e!==null&&Sc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function pw(t,e,n,r,i){switch(e){case"focusin":return cn=oi(cn,t,e,n,r,i),!0;case"dragenter":return dn=oi(dn,t,e,n,r,i),!0;case"mouseover":return fn=oi(fn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return zi.set(s,oi(zi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ji.set(s,oi(ji.get(s)||null,t,e,n,r,i)),!0}return!1}function bm(t){var e=bn(t.target);if(e!==null){var n=ir(e);if(n!==null){if(e=n.tag,e===13){if(e=Sm(n),e!==null){t.blockedOn=e,Dm(t.priority,function(){xm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qs(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=iu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Xa=r,n.target.dispatchEvent(r),Xa=null}else return e=ds(n),e!==null&&Sc(e),t.blockedOn=n,!1;e.shift()}return!0}function hf(t,e,n){Qs(t)&&n.delete(e)}function mw(){ru=!1,cn!==null&&Qs(cn)&&(cn=null),dn!==null&&Qs(dn)&&(dn=null),fn!==null&&Qs(fn)&&(fn=null),zi.forEach(hf),ji.forEach(hf)}function li(t,e){t.blockedOn===e&&(t.blockedOn=null,ru||(ru=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,mw)))}function $i(t){function e(i){return li(i,t)}if(0<bs.length){li(bs[0],t);for(var n=1;n<bs.length;n++){var r=bs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(cn!==null&&li(cn,t),dn!==null&&li(dn,t),fn!==null&&li(fn,t),zi.forEach(e),ji.forEach(e),n=0;n<nn.length;n++)r=nn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<nn.length&&(n=nn[0],n.blockedOn===null);)bm(n),n.blockedOn===null&&nn.shift()}var Nr=qt.ReactCurrentBatchConfig,vo=!0;function gw(t,e,n,r){var i=W,s=Nr.transition;Nr.transition=null;try{W=1,Ic(t,e,n,r)}finally{W=i,Nr.transition=s}}function _w(t,e,n,r){var i=W,s=Nr.transition;Nr.transition=null;try{W=4,Ic(t,e,n,r)}finally{W=i,Nr.transition=s}}function Ic(t,e,n,r){if(vo){var i=iu(t,e,n,r);if(i===null)na(t,e,r,wo,n),ff(t,r);else if(pw(i,t,e,n,r))r.stopPropagation();else if(ff(t,r),e&4&&-1<hw.indexOf(t)){for(;i!==null;){var s=ds(i);if(s!==null&&Pm(s),s=iu(t,e,n,r),s===null&&na(t,e,r,wo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else na(t,e,r,null,n)}}var wo=null;function iu(t,e,n,r){if(wo=null,t=vc(r),t=bn(t),t!==null)if(e=ir(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Sm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return wo=t,null}function Lm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(iw()){case wc:return 1;case km:return 4;case _o:case sw:return 16;case Rm:return 536870912;default:return 16}default:return 16}}var an=null,Cc=null,Js=null;function Mm(){if(Js)return Js;var t,e=Cc,n=e.length,r,i="value"in an?an.value:an.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Js=i.slice(t,1<r?1-r:void 0)}function Xs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ls(){return!0}function pf(){return!1}function Ye(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ls:pf,this.isPropagationStopped=pf,this}return re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ls)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ls)},persist:function(){},isPersistent:Ls}),e}var Yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tc=Ye(Yr),cs=re({},Yr,{view:0,detail:0}),yw=Ye(cs),Gl,ql,ai,ll=re({},cs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ai&&(ai&&t.type==="mousemove"?(Gl=t.screenX-ai.screenX,ql=t.screenY-ai.screenY):ql=Gl=0,ai=t),Gl)},movementY:function(t){return"movementY"in t?t.movementY:ql}}),mf=Ye(ll),vw=re({},ll,{dataTransfer:0}),ww=Ye(vw),Ew=re({},cs,{relatedTarget:0}),Yl=Ye(Ew),Sw=re({},Yr,{animationName:0,elapsedTime:0,pseudoElement:0}),Iw=Ye(Sw),Cw=re({},Yr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Tw=Ye(Cw),kw=re({},Yr,{data:0}),gf=Ye(kw),Rw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Aw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Aw[t])?!!e[t]:!1}function kc(){return Pw}var xw=re({},cs,{key:function(t){if(t.key){var e=Rw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Xs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Nw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kc,charCode:function(t){return t.type==="keypress"?Xs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ow=Ye(xw),Dw=re({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_f=Ye(Dw),bw=re({},cs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kc}),Lw=Ye(bw),Mw=re({},Yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fw=Ye(Mw),Uw=re({},ll,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Bw=Ye(Uw),zw=[9,13,27,32],Rc=$t&&"CompositionEvent"in window,Ci=null;$t&&"documentMode"in document&&(Ci=document.documentMode);var jw=$t&&"TextEvent"in window&&!Ci,Fm=$t&&(!Rc||Ci&&8<Ci&&11>=Ci),yf=String.fromCharCode(32),vf=!1;function Um(t,e){switch(t){case"keyup":return zw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var hr=!1;function $w(t,e){switch(t){case"compositionend":return Bm(e);case"keypress":return e.which!==32?null:(vf=!0,yf);case"textInput":return t=e.data,t===yf&&vf?null:t;default:return null}}function Hw(t,e){if(hr)return t==="compositionend"||!Rc&&Um(t,e)?(t=Mm(),Js=Cc=an=null,hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Fm&&e.locale!=="ko"?null:e.data;default:return null}}var Ww={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ww[t.type]:e==="textarea"}function zm(t,e,n,r){_m(r),e=Eo(e,"onChange"),0<e.length&&(n=new Tc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ti=null,Hi=null;function Vw(t){Jm(t,0)}function al(t){var e=gr(t);if(cm(e))return t}function Kw(t,e){if(t==="change")return e}var jm=!1;if($t){var Ql;if($t){var Jl="oninput"in document;if(!Jl){var Ef=document.createElement("div");Ef.setAttribute("oninput","return;"),Jl=typeof Ef.oninput=="function"}Ql=Jl}else Ql=!1;jm=Ql&&(!document.documentMode||9<document.documentMode)}function Sf(){Ti&&(Ti.detachEvent("onpropertychange",$m),Hi=Ti=null)}function $m(t){if(t.propertyName==="value"&&al(Hi)){var e=[];zm(e,Hi,t,vc(t)),Em(Vw,e)}}function Gw(t,e,n){t==="focusin"?(Sf(),Ti=e,Hi=n,Ti.attachEvent("onpropertychange",$m)):t==="focusout"&&Sf()}function qw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return al(Hi)}function Yw(t,e){if(t==="click")return al(e)}function Qw(t,e){if(t==="input"||t==="change")return al(e)}function Jw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gt=typeof Object.is=="function"?Object.is:Jw;function Wi(t,e){if(gt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!za.call(e,i)||!gt(t[i],e[i]))return!1}return!0}function If(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cf(t,e){var n=If(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=If(n)}}function Hm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Hm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Wm(){for(var t=window,e=po();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=po(t.document)}return e}function Nc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Xw(t){var e=Wm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Hm(n.ownerDocument.documentElement,n)){if(r!==null&&Nc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Cf(n,s);var o=Cf(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Zw=$t&&"documentMode"in document&&11>=document.documentMode,pr=null,su=null,ki=null,ou=!1;function Tf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ou||pr==null||pr!==po(r)||(r=pr,"selectionStart"in r&&Nc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ki&&Wi(ki,r)||(ki=r,r=Eo(su,"onSelect"),0<r.length&&(e=new Tc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=pr)))}function Ms(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var mr={animationend:Ms("Animation","AnimationEnd"),animationiteration:Ms("Animation","AnimationIteration"),animationstart:Ms("Animation","AnimationStart"),transitionend:Ms("Transition","TransitionEnd")},Xl={},Vm={};$t&&(Vm=document.createElement("div").style,"AnimationEvent"in window||(delete mr.animationend.animation,delete mr.animationiteration.animation,delete mr.animationstart.animation),"TransitionEvent"in window||delete mr.transitionend.transition);function ul(t){if(Xl[t])return Xl[t];if(!mr[t])return t;var e=mr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Vm)return Xl[t]=e[n];return t}var Km=ul("animationend"),Gm=ul("animationiteration"),qm=ul("animationstart"),Ym=ul("transitionend"),Qm=new Map,kf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tn(t,e){Qm.set(t,e),rr(e,[t])}for(var Zl=0;Zl<kf.length;Zl++){var ea=kf[Zl],eE=ea.toLowerCase(),tE=ea[0].toUpperCase()+ea.slice(1);Tn(eE,"on"+tE)}Tn(Km,"onAnimationEnd");Tn(Gm,"onAnimationIteration");Tn(qm,"onAnimationStart");Tn("dblclick","onDoubleClick");Tn("focusin","onFocus");Tn("focusout","onBlur");Tn(Ym,"onTransitionEnd");Mr("onMouseEnter",["mouseout","mouseover"]);Mr("onMouseLeave",["mouseout","mouseover"]);Mr("onPointerEnter",["pointerout","pointerover"]);Mr("onPointerLeave",["pointerout","pointerover"]);rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ei));function Rf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,ew(r,e,void 0,t),t.currentTarget=null}function Jm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Rf(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Rf(i,l,u),s=a}}}if(go)throw t=tu,go=!1,tu=null,t}function Y(t,e){var n=e[du];n===void 0&&(n=e[du]=new Set);var r=t+"__bubble";n.has(r)||(Xm(e,t,2,!1),n.add(r))}function ta(t,e,n){var r=0;e&&(r|=4),Xm(n,t,r,e)}var Fs="_reactListening"+Math.random().toString(36).slice(2);function Vi(t){if(!t[Fs]){t[Fs]=!0,sm.forEach(function(n){n!=="selectionchange"&&(nE.has(n)||ta(n,!1,t),ta(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Fs]||(e[Fs]=!0,ta("selectionchange",!1,e))}}function Xm(t,e,n,r){switch(Lm(e)){case 1:var i=gw;break;case 4:i=_w;break;default:i=Ic}n=i.bind(null,e,n,t),i=void 0,!eu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function na(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=bn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Em(function(){var u=s,c=vc(n),d=[];e:{var f=Qm.get(t);if(f!==void 0){var _=Tc,m=t;switch(t){case"keypress":if(Xs(n)===0)break e;case"keydown":case"keyup":_=Ow;break;case"focusin":m="focus",_=Yl;break;case"focusout":m="blur",_=Yl;break;case"beforeblur":case"afterblur":_=Yl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=mf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=ww;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=Lw;break;case Km:case Gm:case qm:_=Iw;break;case Ym:_=Fw;break;case"scroll":_=yw;break;case"wheel":_=Bw;break;case"copy":case"cut":case"paste":_=Tw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=_f}var y=(e&4)!==0,I=!y&&t==="scroll",p=y?f!==null?f+"Capture":null:f;y=[];for(var h=u,g;h!==null;){g=h;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,p!==null&&(w=Bi(h,p),w!=null&&y.push(Ki(h,w,g)))),I)break;h=h.return}0<y.length&&(f=new _(f,m,null,n,c),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",f&&n!==Xa&&(m=n.relatedTarget||n.fromElement)&&(bn(m)||m[Ht]))break e;if((_||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,_?(m=n.relatedTarget||n.toElement,_=u,m=m?bn(m):null,m!==null&&(I=ir(m),m!==I||m.tag!==5&&m.tag!==6)&&(m=null)):(_=null,m=u),_!==m)){if(y=mf,w="onMouseLeave",p="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(y=_f,w="onPointerLeave",p="onPointerEnter",h="pointer"),I=_==null?f:gr(_),g=m==null?f:gr(m),f=new y(w,h+"leave",_,n,c),f.target=I,f.relatedTarget=g,w=null,bn(c)===u&&(y=new y(p,h+"enter",m,n,c),y.target=g,y.relatedTarget=I,w=y),I=w,_&&m)t:{for(y=_,p=m,h=0,g=y;g;g=ur(g))h++;for(g=0,w=p;w;w=ur(w))g++;for(;0<h-g;)y=ur(y),h--;for(;0<g-h;)p=ur(p),g--;for(;h--;){if(y===p||p!==null&&y===p.alternate)break t;y=ur(y),p=ur(p)}y=null}else y=null;_!==null&&Nf(d,f,_,y,!1),m!==null&&I!==null&&Nf(d,I,m,y,!0)}}e:{if(f=u?gr(u):window,_=f.nodeName&&f.nodeName.toLowerCase(),_==="select"||_==="input"&&f.type==="file")var T=Kw;else if(wf(f))if(jm)T=Qw;else{T=qw;var N=Gw}else(_=f.nodeName)&&_.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=Yw);if(T&&(T=T(t,u))){zm(d,T,n,c);break e}N&&N(t,f,u),t==="focusout"&&(N=f._wrapperState)&&N.controlled&&f.type==="number"&&Ga(f,"number",f.value)}switch(N=u?gr(u):window,t){case"focusin":(wf(N)||N.contentEditable==="true")&&(pr=N,su=u,ki=null);break;case"focusout":ki=su=pr=null;break;case"mousedown":ou=!0;break;case"contextmenu":case"mouseup":case"dragend":ou=!1,Tf(d,n,c);break;case"selectionchange":if(Zw)break;case"keydown":case"keyup":Tf(d,n,c)}var E;if(Rc)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else hr?Um(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Fm&&n.locale!=="ko"&&(hr||R!=="onCompositionStart"?R==="onCompositionEnd"&&hr&&(E=Mm()):(an=c,Cc="value"in an?an.value:an.textContent,hr=!0)),N=Eo(u,R),0<N.length&&(R=new gf(R,t,null,n,c),d.push({event:R,listeners:N}),E?R.data=E:(E=Bm(n),E!==null&&(R.data=E)))),(E=jw?$w(t,n):Hw(t,n))&&(u=Eo(u,"onBeforeInput"),0<u.length&&(c=new gf("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=E))}Jm(d,e)})}function Ki(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Eo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Bi(t,n),s!=null&&r.unshift(Ki(t,s,i)),s=Bi(t,e),s!=null&&r.push(Ki(t,s,i))),t=t.return}return r}function ur(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Nf(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Bi(n,s),a!=null&&o.unshift(Ki(n,a,l))):i||(a=Bi(n,s),a!=null&&o.push(Ki(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var rE=/\r\n?/g,iE=/\u0000|\uFFFD/g;function Af(t){return(typeof t=="string"?t:""+t).replace(rE,`
`).replace(iE,"")}function Us(t,e,n){if(e=Af(e),Af(t)!==e&&n)throw Error(S(425))}function So(){}var lu=null,au=null;function uu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var cu=typeof setTimeout=="function"?setTimeout:void 0,sE=typeof clearTimeout=="function"?clearTimeout:void 0,Pf=typeof Promise=="function"?Promise:void 0,oE=typeof queueMicrotask=="function"?queueMicrotask:typeof Pf<"u"?function(t){return Pf.resolve(null).then(t).catch(lE)}:cu;function lE(t){setTimeout(function(){throw t})}function ra(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),$i(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);$i(e)}function hn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function xf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Qr=Math.random().toString(36).slice(2),wt="__reactFiber$"+Qr,Gi="__reactProps$"+Qr,Ht="__reactContainer$"+Qr,du="__reactEvents$"+Qr,aE="__reactListeners$"+Qr,uE="__reactHandles$"+Qr;function bn(t){var e=t[wt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ht]||n[wt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=xf(t);t!==null;){if(n=t[wt])return n;t=xf(t)}return e}t=n,n=t.parentNode}return null}function ds(t){return t=t[wt]||t[Ht],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function gr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function cl(t){return t[Gi]||null}var fu=[],_r=-1;function kn(t){return{current:t}}function X(t){0>_r||(t.current=fu[_r],fu[_r]=null,_r--)}function q(t,e){_r++,fu[_r]=t.current,t.current=e}var In={},Ne=kn(In),Ue=kn(!1),Vn=In;function Fr(t,e){var n=t.type.contextTypes;if(!n)return In;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Be(t){return t=t.childContextTypes,t!=null}function Io(){X(Ue),X(Ne)}function Of(t,e,n){if(Ne.current!==In)throw Error(S(168));q(Ne,e),q(Ue,n)}function Zm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,G0(t)||"Unknown",i));return re({},n,r)}function Co(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||In,Vn=Ne.current,q(Ne,t),q(Ue,Ue.current),!0}function Df(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=Zm(t,e,Vn),r.__reactInternalMemoizedMergedChildContext=t,X(Ue),X(Ne),q(Ne,t)):X(Ue),q(Ue,n)}var Dt=null,dl=!1,ia=!1;function eg(t){Dt===null?Dt=[t]:Dt.push(t)}function cE(t){dl=!0,eg(t)}function Rn(){if(!ia&&Dt!==null){ia=!0;var t=0,e=W;try{var n=Dt;for(W=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Dt=null,dl=!1}catch(i){throw Dt!==null&&(Dt=Dt.slice(t+1)),Tm(wc,Rn),i}finally{W=e,ia=!1}}return null}var yr=[],vr=0,To=null,ko=0,Qe=[],Je=0,Kn=null,bt=1,Lt="";function Pn(t,e){yr[vr++]=ko,yr[vr++]=To,To=t,ko=e}function tg(t,e,n){Qe[Je++]=bt,Qe[Je++]=Lt,Qe[Je++]=Kn,Kn=t;var r=bt;t=Lt;var i=32-ht(r)-1;r&=~(1<<i),n+=1;var s=32-ht(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,bt=1<<32-ht(e)+i|n<<i|r,Lt=s+t}else bt=1<<s|n<<i|r,Lt=t}function Ac(t){t.return!==null&&(Pn(t,1),tg(t,1,0))}function Pc(t){for(;t===To;)To=yr[--vr],yr[vr]=null,ko=yr[--vr],yr[vr]=null;for(;t===Kn;)Kn=Qe[--Je],Qe[Je]=null,Lt=Qe[--Je],Qe[Je]=null,bt=Qe[--Je],Qe[Je]=null}var We=null,He=null,ee=!1,ct=null;function ng(t,e){var n=Ze(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function bf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,We=t,He=hn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,We=t,He=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Kn!==null?{id:bt,overflow:Lt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ze(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,We=t,He=null,!0):!1;default:return!1}}function hu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pu(t){if(ee){var e=He;if(e){var n=e;if(!bf(t,e)){if(hu(t))throw Error(S(418));e=hn(n.nextSibling);var r=We;e&&bf(t,e)?ng(r,n):(t.flags=t.flags&-4097|2,ee=!1,We=t)}}else{if(hu(t))throw Error(S(418));t.flags=t.flags&-4097|2,ee=!1,We=t}}}function Lf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;We=t}function Bs(t){if(t!==We)return!1;if(!ee)return Lf(t),ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!uu(t.type,t.memoizedProps)),e&&(e=He)){if(hu(t))throw rg(),Error(S(418));for(;e;)ng(t,e),e=hn(e.nextSibling)}if(Lf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){He=hn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}He=null}}else He=We?hn(t.stateNode.nextSibling):null;return!0}function rg(){for(var t=He;t;)t=hn(t.nextSibling)}function Ur(){He=We=null,ee=!1}function xc(t){ct===null?ct=[t]:ct.push(t)}var dE=qt.ReactCurrentBatchConfig;function at(t,e){if(t&&t.defaultProps){e=re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ro=kn(null),No=null,wr=null,Oc=null;function Dc(){Oc=wr=No=null}function bc(t){var e=Ro.current;X(Ro),t._currentValue=e}function mu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ar(t,e){No=t,Oc=wr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Me=!0),t.firstContext=null)}function it(t){var e=t._currentValue;if(Oc!==t)if(t={context:t,memoizedValue:e,next:null},wr===null){if(No===null)throw Error(S(308));wr=t,No.dependencies={lanes:0,firstContext:t}}else wr=wr.next=t;return e}var Ln=null;function Lc(t){Ln===null?Ln=[t]:Ln.push(t)}function ig(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Lc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Wt(t,r)}function Wt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var tn=!1;function Mc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Bt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function pn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Wt(t,n)}return i=r.interleaved,i===null?(e.next=e,Lc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Wt(t,n)}function Zs(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ec(t,n)}}function Mf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ao(t,e,n,r){var i=t.updateQueue;tn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var c=t.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(s!==null){var d=i.baseState;o=0,c=u=a=null,l=s;do{var f=l.lane,_=l.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=t,y=l;switch(f=e,_=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){d=m.call(_,d,f);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,f=typeof m=="function"?m.call(_,d,f):m,f==null)break e;d=re({},d,f);break e;case 2:tn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else _={eventTime:_,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=_,a=d):c=c.next=_,o|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);qn|=o,t.lanes=o,t.memoizedState=d}}function Ff(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var og=new im.Component().refs;function gu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var fl={isMounted:function(t){return(t=t._reactInternals)?ir(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=xe(),i=gn(t),s=Bt(r,i);s.payload=e,n!=null&&(s.callback=n),e=pn(t,s,i),e!==null&&(pt(e,t,i,r),Zs(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=xe(),i=gn(t),s=Bt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=pn(t,s,i),e!==null&&(pt(e,t,i,r),Zs(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=xe(),r=gn(t),i=Bt(n,r);i.tag=2,e!=null&&(i.callback=e),e=pn(t,i,r),e!==null&&(pt(e,t,r,n),Zs(e,t,r))}};function Uf(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Wi(n,r)||!Wi(i,s):!0}function lg(t,e,n){var r=!1,i=In,s=e.contextType;return typeof s=="object"&&s!==null?s=it(s):(i=Be(e)?Vn:Ne.current,r=e.contextTypes,s=(r=r!=null)?Fr(t,i):In),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=fl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Bf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&fl.enqueueReplaceState(e,e.state,null)}function _u(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=og,Mc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=it(s):(s=Be(e)?Vn:Ne.current,i.context=Fr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(gu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&fl.enqueueReplaceState(i,i.state,null),Ao(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ui(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===og&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function zs(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function zf(t){var e=t._init;return e(t._payload)}function ag(t){function e(p,h){if(t){var g=p.deletions;g===null?(p.deletions=[h],p.flags|=16):g.push(h)}}function n(p,h){if(!t)return null;for(;h!==null;)e(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=_n(p,h),p.index=0,p.sibling=null,p}function s(p,h,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<h?(p.flags|=2,h):g):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,h,g,w){return h===null||h.tag!==6?(h=da(g,p.mode,w),h.return=p,h):(h=i(h,g),h.return=p,h)}function a(p,h,g,w){var T=g.type;return T===fr?c(p,h,g.props.children,w,g.key):h!==null&&(h.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===en&&zf(T)===h.type)?(w=i(h,g.props),w.ref=ui(p,h,g),w.return=p,w):(w=so(g.type,g.key,g.props,null,p.mode,w),w.ref=ui(p,h,g),w.return=p,w)}function u(p,h,g,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=fa(g,p.mode,w),h.return=p,h):(h=i(h,g.children||[]),h.return=p,h)}function c(p,h,g,w,T){return h===null||h.tag!==7?(h=$n(g,p.mode,w,T),h.return=p,h):(h=i(h,g),h.return=p,h)}function d(p,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=da(""+h,p.mode,g),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case As:return g=so(h.type,h.key,h.props,null,p.mode,g),g.ref=ui(p,null,h),g.return=p,g;case dr:return h=fa(h,p.mode,g),h.return=p,h;case en:var w=h._init;return d(p,w(h._payload),g)}if(vi(h)||ii(h))return h=$n(h,p.mode,g,null),h.return=p,h;zs(p,h)}return null}function f(p,h,g,w){var T=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return T!==null?null:l(p,h,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case As:return g.key===T?a(p,h,g,w):null;case dr:return g.key===T?u(p,h,g,w):null;case en:return T=g._init,f(p,h,T(g._payload),w)}if(vi(g)||ii(g))return T!==null?null:c(p,h,g,w,null);zs(p,g)}return null}function _(p,h,g,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(g)||null,l(h,p,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case As:return p=p.get(w.key===null?g:w.key)||null,a(h,p,w,T);case dr:return p=p.get(w.key===null?g:w.key)||null,u(h,p,w,T);case en:var N=w._init;return _(p,h,g,N(w._payload),T)}if(vi(w)||ii(w))return p=p.get(g)||null,c(h,p,w,T,null);zs(h,w)}return null}function m(p,h,g,w){for(var T=null,N=null,E=h,R=h=0,$=null;E!==null&&R<g.length;R++){E.index>R?($=E,E=null):$=E.sibling;var x=f(p,E,g[R],w);if(x===null){E===null&&(E=$);break}t&&E&&x.alternate===null&&e(p,E),h=s(x,h,R),N===null?T=x:N.sibling=x,N=x,E=$}if(R===g.length)return n(p,E),ee&&Pn(p,R),T;if(E===null){for(;R<g.length;R++)E=d(p,g[R],w),E!==null&&(h=s(E,h,R),N===null?T=E:N.sibling=E,N=E);return ee&&Pn(p,R),T}for(E=r(p,E);R<g.length;R++)$=_(E,p,R,g[R],w),$!==null&&(t&&$.alternate!==null&&E.delete($.key===null?R:$.key),h=s($,h,R),N===null?T=$:N.sibling=$,N=$);return t&&E.forEach(function(_e){return e(p,_e)}),ee&&Pn(p,R),T}function y(p,h,g,w){var T=ii(g);if(typeof T!="function")throw Error(S(150));if(g=T.call(g),g==null)throw Error(S(151));for(var N=T=null,E=h,R=h=0,$=null,x=g.next();E!==null&&!x.done;R++,x=g.next()){E.index>R?($=E,E=null):$=E.sibling;var _e=f(p,E,x.value,w);if(_e===null){E===null&&(E=$);break}t&&E&&_e.alternate===null&&e(p,E),h=s(_e,h,R),N===null?T=_e:N.sibling=_e,N=_e,E=$}if(x.done)return n(p,E),ee&&Pn(p,R),T;if(E===null){for(;!x.done;R++,x=g.next())x=d(p,x.value,w),x!==null&&(h=s(x,h,R),N===null?T=x:N.sibling=x,N=x);return ee&&Pn(p,R),T}for(E=r(p,E);!x.done;R++,x=g.next())x=_(E,p,R,x.value,w),x!==null&&(t&&x.alternate!==null&&E.delete(x.key===null?R:x.key),h=s(x,h,R),N===null?T=x:N.sibling=x,N=x);return t&&E.forEach(function(be){return e(p,be)}),ee&&Pn(p,R),T}function I(p,h,g,w){if(typeof g=="object"&&g!==null&&g.type===fr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case As:e:{for(var T=g.key,N=h;N!==null;){if(N.key===T){if(T=g.type,T===fr){if(N.tag===7){n(p,N.sibling),h=i(N,g.props.children),h.return=p,p=h;break e}}else if(N.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===en&&zf(T)===N.type){n(p,N.sibling),h=i(N,g.props),h.ref=ui(p,N,g),h.return=p,p=h;break e}n(p,N);break}else e(p,N);N=N.sibling}g.type===fr?(h=$n(g.props.children,p.mode,w,g.key),h.return=p,p=h):(w=so(g.type,g.key,g.props,null,p.mode,w),w.ref=ui(p,h,g),w.return=p,p=w)}return o(p);case dr:e:{for(N=g.key;h!==null;){if(h.key===N)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(p,h.sibling),h=i(h,g.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else e(p,h);h=h.sibling}h=fa(g,p.mode,w),h.return=p,p=h}return o(p);case en:return N=g._init,I(p,h,N(g._payload),w)}if(vi(g))return m(p,h,g,w);if(ii(g))return y(p,h,g,w);zs(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,g),h.return=p,p=h):(n(p,h),h=da(g,p.mode,w),h.return=p,p=h),o(p)):n(p,h)}return I}var Br=ag(!0),ug=ag(!1),fs={},Ct=kn(fs),qi=kn(fs),Yi=kn(fs);function Mn(t){if(t===fs)throw Error(S(174));return t}function Fc(t,e){switch(q(Yi,e),q(qi,t),q(Ct,fs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ya(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ya(e,t)}X(Ct),q(Ct,e)}function zr(){X(Ct),X(qi),X(Yi)}function cg(t){Mn(Yi.current);var e=Mn(Ct.current),n=Ya(e,t.type);e!==n&&(q(qi,t),q(Ct,n))}function Uc(t){qi.current===t&&(X(Ct),X(qi))}var te=kn(0);function Po(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var sa=[];function Bc(){for(var t=0;t<sa.length;t++)sa[t]._workInProgressVersionPrimary=null;sa.length=0}var eo=qt.ReactCurrentDispatcher,oa=qt.ReactCurrentBatchConfig,Gn=0,ne=null,ue=null,he=null,xo=!1,Ri=!1,Qi=0,fE=0;function Se(){throw Error(S(321))}function zc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!gt(t[n],e[n]))return!1;return!0}function jc(t,e,n,r,i,s){if(Gn=s,ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,eo.current=t===null||t.memoizedState===null?gE:_E,t=n(r,i),Ri){s=0;do{if(Ri=!1,Qi=0,25<=s)throw Error(S(301));s+=1,he=ue=null,e.updateQueue=null,eo.current=yE,t=n(r,i)}while(Ri)}if(eo.current=Oo,e=ue!==null&&ue.next!==null,Gn=0,he=ue=ne=null,xo=!1,e)throw Error(S(300));return t}function $c(){var t=Qi!==0;return Qi=0,t}function vt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?ne.memoizedState=he=t:he=he.next=t,he}function st(){if(ue===null){var t=ne.alternate;t=t!==null?t.memoizedState:null}else t=ue.next;var e=he===null?ne.memoizedState:he.next;if(e!==null)he=e,ue=t;else{if(t===null)throw Error(S(310));ue=t,t={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},he===null?ne.memoizedState=he=t:he=he.next=t}return he}function Ji(t,e){return typeof e=="function"?e(t):e}function la(t){var e=st(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=ue,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var c=u.lane;if((Gn&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,o=r):a=a.next=d,ne.lanes|=c,qn|=c}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,gt(r,e.memoizedState)||(Me=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ne.lanes|=s,qn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function aa(t){var e=st(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);gt(s,e.memoizedState)||(Me=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function dg(){}function fg(t,e){var n=ne,r=st(),i=e(),s=!gt(r.memoizedState,i);if(s&&(r.memoizedState=i,Me=!0),r=r.queue,Hc(mg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,Xi(9,pg.bind(null,n,r,i,e),void 0,null),ge===null)throw Error(S(349));Gn&30||hg(n,e,i)}return i}function hg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ne.updateQueue,e===null?(e={lastEffect:null,stores:null},ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function pg(t,e,n,r){e.value=n,e.getSnapshot=r,gg(e)&&_g(t)}function mg(t,e,n){return n(function(){gg(e)&&_g(t)})}function gg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!gt(t,n)}catch{return!0}}function _g(t){var e=Wt(t,1);e!==null&&pt(e,t,1,-1)}function jf(t){var e=vt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:t},e.queue=t,t=t.dispatch=mE.bind(null,ne,t),[e.memoizedState,t]}function Xi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ne.updateQueue,e===null?(e={lastEffect:null,stores:null},ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function yg(){return st().memoizedState}function to(t,e,n,r){var i=vt();ne.flags|=t,i.memoizedState=Xi(1|e,n,void 0,r===void 0?null:r)}function hl(t,e,n,r){var i=st();r=r===void 0?null:r;var s=void 0;if(ue!==null){var o=ue.memoizedState;if(s=o.destroy,r!==null&&zc(r,o.deps)){i.memoizedState=Xi(e,n,s,r);return}}ne.flags|=t,i.memoizedState=Xi(1|e,n,s,r)}function $f(t,e){return to(8390656,8,t,e)}function Hc(t,e){return hl(2048,8,t,e)}function vg(t,e){return hl(4,2,t,e)}function wg(t,e){return hl(4,4,t,e)}function Eg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Sg(t,e,n){return n=n!=null?n.concat([t]):null,hl(4,4,Eg.bind(null,e,t),n)}function Wc(){}function Ig(t,e){var n=st();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&zc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Cg(t,e){var n=st();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&zc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Tg(t,e,n){return Gn&21?(gt(n,e)||(n=Nm(),ne.lanes|=n,qn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Me=!0),t.memoizedState=n)}function hE(t,e){var n=W;W=n!==0&&4>n?n:4,t(!0);var r=oa.transition;oa.transition={};try{t(!1),e()}finally{W=n,oa.transition=r}}function kg(){return st().memoizedState}function pE(t,e,n){var r=gn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Rg(t))Ng(e,n);else if(n=ig(t,e,n,r),n!==null){var i=xe();pt(n,t,r,i),Ag(n,e,r)}}function mE(t,e,n){var r=gn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rg(t))Ng(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,gt(l,o)){var a=e.interleaved;a===null?(i.next=i,Lc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=ig(t,e,i,r),n!==null&&(i=xe(),pt(n,t,r,i),Ag(n,e,r))}}function Rg(t){var e=t.alternate;return t===ne||e!==null&&e===ne}function Ng(t,e){Ri=xo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ag(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ec(t,n)}}var Oo={readContext:it,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},gE={readContext:it,useCallback:function(t,e){return vt().memoizedState=[t,e===void 0?null:e],t},useContext:it,useEffect:$f,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,to(4194308,4,Eg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return to(4194308,4,t,e)},useInsertionEffect:function(t,e){return to(4,2,t,e)},useMemo:function(t,e){var n=vt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=vt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=pE.bind(null,ne,t),[r.memoizedState,t]},useRef:function(t){var e=vt();return t={current:t},e.memoizedState=t},useState:jf,useDebugValue:Wc,useDeferredValue:function(t){return vt().memoizedState=t},useTransition:function(){var t=jf(!1),e=t[0];return t=hE.bind(null,t[1]),vt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ne,i=vt();if(ee){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),ge===null)throw Error(S(349));Gn&30||hg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,$f(mg.bind(null,r,s,t),[t]),r.flags|=2048,Xi(9,pg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=vt(),e=ge.identifierPrefix;if(ee){var n=Lt,r=bt;n=(r&~(1<<32-ht(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Qi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=fE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},_E={readContext:it,useCallback:Ig,useContext:it,useEffect:Hc,useImperativeHandle:Sg,useInsertionEffect:vg,useLayoutEffect:wg,useMemo:Cg,useReducer:la,useRef:yg,useState:function(){return la(Ji)},useDebugValue:Wc,useDeferredValue:function(t){var e=st();return Tg(e,ue.memoizedState,t)},useTransition:function(){var t=la(Ji)[0],e=st().memoizedState;return[t,e]},useMutableSource:dg,useSyncExternalStore:fg,useId:kg,unstable_isNewReconciler:!1},yE={readContext:it,useCallback:Ig,useContext:it,useEffect:Hc,useImperativeHandle:Sg,useInsertionEffect:vg,useLayoutEffect:wg,useMemo:Cg,useReducer:aa,useRef:yg,useState:function(){return aa(Ji)},useDebugValue:Wc,useDeferredValue:function(t){var e=st();return ue===null?e.memoizedState=t:Tg(e,ue.memoizedState,t)},useTransition:function(){var t=aa(Ji)[0],e=st().memoizedState;return[t,e]},useMutableSource:dg,useSyncExternalStore:fg,useId:kg,unstable_isNewReconciler:!1};function jr(t,e){try{var n="",r=e;do n+=K0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ua(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function yu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var vE=typeof WeakMap=="function"?WeakMap:Map;function Pg(t,e,n){n=Bt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){bo||(bo=!0,Nu=r),yu(t,e)},n}function xg(t,e,n){n=Bt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){yu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){yu(t,e),typeof r!="function"&&(mn===null?mn=new Set([this]):mn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Hf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new vE;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=DE.bind(null,t,e,n),e.then(t,t))}function Wf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Vf(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Bt(-1,1),e.tag=2,pn(n,e,1))),n.lanes|=1),t)}var wE=qt.ReactCurrentOwner,Me=!1;function Pe(t,e,n,r){e.child=t===null?ug(e,null,n,r):Br(e,t.child,n,r)}function Kf(t,e,n,r,i){n=n.render;var s=e.ref;return Ar(e,i),r=jc(t,e,n,r,s,i),n=$c(),t!==null&&!Me?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Vt(t,e,i)):(ee&&n&&Ac(e),e.flags|=1,Pe(t,e,r,i),e.child)}function Gf(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Xc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Og(t,e,s,r,i)):(t=so(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Wi,n(o,r)&&t.ref===e.ref)return Vt(t,e,i)}return e.flags|=1,t=_n(s,r),t.ref=e.ref,t.return=e,e.child=t}function Og(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Wi(s,r)&&t.ref===e.ref)if(Me=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Me=!0);else return e.lanes=t.lanes,Vt(t,e,i)}return vu(t,e,n,r,i)}function Dg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(Sr,$e),$e|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,q(Sr,$e),$e|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,q(Sr,$e),$e|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,q(Sr,$e),$e|=r;return Pe(t,e,i,n),e.child}function bg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function vu(t,e,n,r,i){var s=Be(n)?Vn:Ne.current;return s=Fr(e,s),Ar(e,i),n=jc(t,e,n,r,s,i),r=$c(),t!==null&&!Me?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Vt(t,e,i)):(ee&&r&&Ac(e),e.flags|=1,Pe(t,e,n,i),e.child)}function qf(t,e,n,r,i){if(Be(n)){var s=!0;Co(e)}else s=!1;if(Ar(e,i),e.stateNode===null)no(t,e),lg(e,n,r),_u(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=it(u):(u=Be(n)?Vn:Ne.current,u=Fr(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Bf(e,o,r,u),tn=!1;var f=e.memoizedState;o.state=f,Ao(e,r,o,i),a=e.memoizedState,l!==r||f!==a||Ue.current||tn?(typeof c=="function"&&(gu(e,n,c,r),a=e.memoizedState),(l=tn||Uf(e,n,l,r,f,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,sg(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:at(e.type,l),o.props=u,d=e.pendingProps,f=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=it(a):(a=Be(n)?Vn:Ne.current,a=Fr(e,a));var _=n.getDerivedStateFromProps;(c=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||f!==a)&&Bf(e,o,r,a),tn=!1,f=e.memoizedState,o.state=f,Ao(e,r,o,i);var m=e.memoizedState;l!==d||f!==m||Ue.current||tn?(typeof _=="function"&&(gu(e,n,_,r),m=e.memoizedState),(u=tn||Uf(e,n,u,r,f,m,a)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=m),o.props=r,o.state=m,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return wu(t,e,n,r,s,i)}function wu(t,e,n,r,i,s){bg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Df(e,n,!1),Vt(t,e,s);r=e.stateNode,wE.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Br(e,t.child,null,s),e.child=Br(e,null,l,s)):Pe(t,e,l,s),e.memoizedState=r.state,i&&Df(e,n,!0),e.child}function Lg(t){var e=t.stateNode;e.pendingContext?Of(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Of(t,e.context,!1),Fc(t,e.containerInfo)}function Yf(t,e,n,r,i){return Ur(),xc(i),e.flags|=256,Pe(t,e,n,r),e.child}var Eu={dehydrated:null,treeContext:null,retryLane:0};function Su(t){return{baseLanes:t,cachePool:null,transitions:null}}function Mg(t,e,n){var r=e.pendingProps,i=te.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),q(te,i&1),t===null)return pu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=gl(o,r,0,null),t=$n(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Su(n),e.memoizedState=Eu,t):Vc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return EE(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=_n(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=_n(l,s):(s=$n(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Su(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Eu,r}return s=t.child,t=s.sibling,r=_n(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Vc(t,e){return e=gl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function js(t,e,n,r){return r!==null&&xc(r),Br(e,t.child,null,n),t=Vc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function EE(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ua(Error(S(422))),js(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=gl({mode:"visible",children:r.children},i,0,null),s=$n(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Br(e,t.child,null,o),e.child.memoizedState=Su(o),e.memoizedState=Eu,s);if(!(e.mode&1))return js(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(S(419)),r=ua(s,r,void 0),js(t,e,o,r)}if(l=(o&t.childLanes)!==0,Me||l){if(r=ge,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Wt(t,i),pt(r,t,i,-1))}return Jc(),r=ua(Error(S(421))),js(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=bE.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,He=hn(i.nextSibling),We=e,ee=!0,ct=null,t!==null&&(Qe[Je++]=bt,Qe[Je++]=Lt,Qe[Je++]=Kn,bt=t.id,Lt=t.overflow,Kn=e),e=Vc(e,r.children),e.flags|=4096,e)}function Qf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),mu(t.return,e,n)}function ca(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Fg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Pe(t,e,r.children,n),r=te.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qf(t,n,e);else if(t.tag===19)Qf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(q(te,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Po(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ca(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Po(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ca(e,!0,n,null,s);break;case"together":ca(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function no(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Vt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),qn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=_n(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_n(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function SE(t,e,n){switch(e.tag){case 3:Lg(e),Ur();break;case 5:cg(e);break;case 1:Be(e.type)&&Co(e);break;case 4:Fc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;q(Ro,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(q(te,te.current&1),e.flags|=128,null):n&e.child.childLanes?Mg(t,e,n):(q(te,te.current&1),t=Vt(t,e,n),t!==null?t.sibling:null);q(te,te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Fg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),q(te,te.current),r)break;return null;case 22:case 23:return e.lanes=0,Dg(t,e,n)}return Vt(t,e,n)}var Ug,Iu,Bg,zg;Ug=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Iu=function(){};Bg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Mn(Ct.current);var s=null;switch(n){case"input":i=Va(t,i),r=Va(t,r),s=[];break;case"select":i=re({},i,{value:void 0}),r=re({},r,{value:void 0}),s=[];break;case"textarea":i=qa(t,i),r=qa(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=So)}Qa(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Fi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Fi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Y("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};zg=function(t,e,n,r){n!==r&&(e.flags|=4)};function ci(t,e){if(!ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ie(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function IE(t,e,n){var r=e.pendingProps;switch(Pc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(e),null;case 1:return Be(e.type)&&Io(),Ie(e),null;case 3:return r=e.stateNode,zr(),X(Ue),X(Ne),Bc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Bs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ct!==null&&(xu(ct),ct=null))),Iu(t,e),Ie(e),null;case 5:Uc(e);var i=Mn(Yi.current);if(n=e.type,t!==null&&e.stateNode!=null)Bg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return Ie(e),null}if(t=Mn(Ct.current),Bs(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[wt]=e,r[Gi]=s,t=(e.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(i=0;i<Ei.length;i++)Y(Ei[i],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":sf(r,s),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Y("invalid",r);break;case"textarea":lf(r,s),Y("invalid",r)}Qa(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Us(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Us(r.textContent,l,t),i=["children",""+l]):Fi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Y("scroll",r)}switch(n){case"input":Ps(r),of(r,s,!0);break;case"textarea":Ps(r),af(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=So)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=hm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[wt]=e,t[Gi]=r,Ug(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ja(n,r),n){case"dialog":Y("cancel",t),Y("close",t),i=r;break;case"iframe":case"object":case"embed":Y("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ei.length;i++)Y(Ei[i],t);i=r;break;case"source":Y("error",t),i=r;break;case"img":case"image":case"link":Y("error",t),Y("load",t),i=r;break;case"details":Y("toggle",t),i=r;break;case"input":sf(t,r),i=Va(t,r),Y("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=re({},r,{value:void 0}),Y("invalid",t);break;case"textarea":lf(t,r),i=qa(t,r),Y("invalid",t);break;default:i=r}Qa(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?gm(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&pm(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Ui(t,a):typeof a=="number"&&Ui(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Fi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&Y("scroll",t):a!=null&&mc(t,s,a,o))}switch(n){case"input":Ps(t),of(t,r,!1);break;case"textarea":Ps(t),af(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Sn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Tr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Tr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=So)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ie(e),null;case 6:if(t&&e.stateNode!=null)zg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=Mn(Yi.current),Mn(Ct.current),Bs(e)){if(r=e.stateNode,n=e.memoizedProps,r[wt]=e,(s=r.nodeValue!==n)&&(t=We,t!==null))switch(t.tag){case 3:Us(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Us(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wt]=e,e.stateNode=r}return Ie(e),null;case 13:if(X(te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ee&&He!==null&&e.mode&1&&!(e.flags&128))rg(),Ur(),e.flags|=98560,s=!1;else if(s=Bs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[wt]=e}else Ur(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ie(e),s=!1}else ct!==null&&(xu(ct),ct=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||te.current&1?ce===0&&(ce=3):Jc())),e.updateQueue!==null&&(e.flags|=4),Ie(e),null);case 4:return zr(),Iu(t,e),t===null&&Vi(e.stateNode.containerInfo),Ie(e),null;case 10:return bc(e.type._context),Ie(e),null;case 17:return Be(e.type)&&Io(),Ie(e),null;case 19:if(X(te),s=e.memoizedState,s===null)return Ie(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ci(s,!1);else{if(ce!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Po(t),o!==null){for(e.flags|=128,ci(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return q(te,te.current&1|2),e.child}t=t.sibling}s.tail!==null&&oe()>$r&&(e.flags|=128,r=!0,ci(s,!1),e.lanes=4194304)}else{if(!r)if(t=Po(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ci(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ee)return Ie(e),null}else 2*oe()-s.renderingStartTime>$r&&n!==1073741824&&(e.flags|=128,r=!0,ci(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=oe(),e.sibling=null,n=te.current,q(te,r?n&1|2:n&1),e):(Ie(e),null);case 22:case 23:return Qc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?$e&1073741824&&(Ie(e),e.subtreeFlags&6&&(e.flags|=8192)):Ie(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function CE(t,e){switch(Pc(e),e.tag){case 1:return Be(e.type)&&Io(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zr(),X(Ue),X(Ne),Bc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Uc(e),null;case 13:if(X(te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));Ur()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return X(te),null;case 4:return zr(),null;case 10:return bc(e.type._context),null;case 22:case 23:return Qc(),null;case 24:return null;default:return null}}var $s=!1,Ce=!1,TE=typeof WeakSet=="function"?WeakSet:Set,k=null;function Er(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(t,e,r)}else n.current=null}function Cu(t,e,n){try{n()}catch(r){ie(t,e,r)}}var Jf=!1;function kE(t,e){if(lu=vo,t=Wm(),Nc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var _;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(_=d.firstChild)!==null;)f=d,d=_;for(;;){if(d===t)break t;if(f===n&&++u===i&&(l=o),f===s&&++c===r&&(a=o),(_=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=_}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(au={focusedElem:t,selectionRange:n},vo=!1,k=e;k!==null;)if(e=k,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,k=t;else for(;k!==null;){e=k;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,I=m.memoizedState,p=e.stateNode,h=p.getSnapshotBeforeUpdate(e.elementType===e.type?y:at(e.type,y),I);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){ie(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,k=t;break}k=e.return}return m=Jf,Jf=!1,m}function Ni(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Cu(e,n,s)}i=i.next}while(i!==r)}}function pl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Tu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function jg(t){var e=t.alternate;e!==null&&(t.alternate=null,jg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[wt],delete e[Gi],delete e[du],delete e[aE],delete e[uE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $g(t){return t.tag===5||t.tag===3||t.tag===4}function Xf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$g(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ku(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=So));else if(r!==4&&(t=t.child,t!==null))for(ku(t,e,n),t=t.sibling;t!==null;)ku(t,e,n),t=t.sibling}function Ru(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ru(t,e,n),t=t.sibling;t!==null;)Ru(t,e,n),t=t.sibling}var ye=null,ut=!1;function Jt(t,e,n){for(n=n.child;n!==null;)Hg(t,e,n),n=n.sibling}function Hg(t,e,n){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(ol,n)}catch{}switch(n.tag){case 5:Ce||Er(n,e);case 6:var r=ye,i=ut;ye=null,Jt(t,e,n),ye=r,ut=i,ye!==null&&(ut?(t=ye,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ye.removeChild(n.stateNode));break;case 18:ye!==null&&(ut?(t=ye,n=n.stateNode,t.nodeType===8?ra(t.parentNode,n):t.nodeType===1&&ra(t,n),$i(t)):ra(ye,n.stateNode));break;case 4:r=ye,i=ut,ye=n.stateNode.containerInfo,ut=!0,Jt(t,e,n),ye=r,ut=i;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Cu(n,e,o),i=i.next}while(i!==r)}Jt(t,e,n);break;case 1:if(!Ce&&(Er(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ie(n,e,l)}Jt(t,e,n);break;case 21:Jt(t,e,n);break;case 22:n.mode&1?(Ce=(r=Ce)||n.memoizedState!==null,Jt(t,e,n),Ce=r):Jt(t,e,n);break;default:Jt(t,e,n)}}function Zf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new TE),e.forEach(function(r){var i=LE.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function lt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ye=l.stateNode,ut=!1;break e;case 3:ye=l.stateNode.containerInfo,ut=!0;break e;case 4:ye=l.stateNode.containerInfo,ut=!0;break e}l=l.return}if(ye===null)throw Error(S(160));Hg(s,o,i),ye=null,ut=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ie(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Wg(e,t),e=e.sibling}function Wg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(lt(e,t),yt(t),r&4){try{Ni(3,t,t.return),pl(3,t)}catch(y){ie(t,t.return,y)}try{Ni(5,t,t.return)}catch(y){ie(t,t.return,y)}}break;case 1:lt(e,t),yt(t),r&512&&n!==null&&Er(n,n.return);break;case 5:if(lt(e,t),yt(t),r&512&&n!==null&&Er(n,n.return),t.flags&32){var i=t.stateNode;try{Ui(i,"")}catch(y){ie(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&dm(i,s),Ja(l,o);var u=Ja(l,s);for(o=0;o<a.length;o+=2){var c=a[o],d=a[o+1];c==="style"?gm(i,d):c==="dangerouslySetInnerHTML"?pm(i,d):c==="children"?Ui(i,d):mc(i,c,d,u)}switch(l){case"input":Ka(i,s);break;case"textarea":fm(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Tr(i,!!s.multiple,_,!1):f!==!!s.multiple&&(s.defaultValue!=null?Tr(i,!!s.multiple,s.defaultValue,!0):Tr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Gi]=s}catch(y){ie(t,t.return,y)}}break;case 6:if(lt(e,t),yt(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){ie(t,t.return,y)}}break;case 3:if(lt(e,t),yt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$i(e.containerInfo)}catch(y){ie(t,t.return,y)}break;case 4:lt(e,t),yt(t);break;case 13:lt(e,t),yt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(qc=oe())),r&4&&Zf(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ce=(u=Ce)||c,lt(e,t),Ce=u):lt(e,t),yt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(k=t,c=t.child;c!==null;){for(d=k=c;k!==null;){switch(f=k,_=f.child,f.tag){case 0:case 11:case 14:case 15:Ni(4,f,f.return);break;case 1:Er(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(y){ie(r,n,y)}}break;case 5:Er(f,f.return);break;case 22:if(f.memoizedState!==null){th(d);continue}}_!==null?(_.return=f,k=_):th(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=mm("display",o))}catch(y){ie(t,t.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){ie(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:lt(e,t),yt(t),r&4&&Zf(t);break;case 21:break;default:lt(e,t),yt(t)}}function yt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($g(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ui(i,""),r.flags&=-33);var s=Xf(t);Ru(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Xf(t);ku(t,l,o);break;default:throw Error(S(161))}}catch(a){ie(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function RE(t,e,n){k=t,Vg(t)}function Vg(t,e,n){for(var r=(t.mode&1)!==0;k!==null;){var i=k,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||$s;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ce;l=$s;var u=Ce;if($s=o,(Ce=a)&&!u)for(k=i;k!==null;)o=k,a=o.child,o.tag===22&&o.memoizedState!==null?nh(i):a!==null?(a.return=o,k=a):nh(i);for(;s!==null;)k=s,Vg(s),s=s.sibling;k=i,$s=l,Ce=u}eh(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,k=s):eh(t)}}function eh(t){for(;k!==null;){var e=k;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ce||pl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ce)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:at(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ff(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ff(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&$i(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Ce||e.flags&512&&Tu(e)}catch(f){ie(e,e.return,f)}}if(e===t){k=null;break}if(n=e.sibling,n!==null){n.return=e.return,k=n;break}k=e.return}}function th(t){for(;k!==null;){var e=k;if(e===t){k=null;break}var n=e.sibling;if(n!==null){n.return=e.return,k=n;break}k=e.return}}function nh(t){for(;k!==null;){var e=k;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{pl(4,e)}catch(a){ie(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ie(e,i,a)}}var s=e.return;try{Tu(e)}catch(a){ie(e,s,a)}break;case 5:var o=e.return;try{Tu(e)}catch(a){ie(e,o,a)}}}catch(a){ie(e,e.return,a)}if(e===t){k=null;break}var l=e.sibling;if(l!==null){l.return=e.return,k=l;break}k=e.return}}var NE=Math.ceil,Do=qt.ReactCurrentDispatcher,Kc=qt.ReactCurrentOwner,tt=qt.ReactCurrentBatchConfig,j=0,ge=null,le=null,we=0,$e=0,Sr=kn(0),ce=0,Zi=null,qn=0,ml=0,Gc=0,Ai=null,Le=null,qc=0,$r=1/0,Ot=null,bo=!1,Nu=null,mn=null,Hs=!1,un=null,Lo=0,Pi=0,Au=null,ro=-1,io=0;function xe(){return j&6?oe():ro!==-1?ro:ro=oe()}function gn(t){return t.mode&1?j&2&&we!==0?we&-we:dE.transition!==null?(io===0&&(io=Nm()),io):(t=W,t!==0||(t=window.event,t=t===void 0?16:Lm(t.type)),t):1}function pt(t,e,n,r){if(50<Pi)throw Pi=0,Au=null,Error(S(185));us(t,n,r),(!(j&2)||t!==ge)&&(t===ge&&(!(j&2)&&(ml|=n),ce===4&&rn(t,we)),ze(t,r),n===1&&j===0&&!(e.mode&1)&&($r=oe()+500,dl&&Rn()))}function ze(t,e){var n=t.callbackNode;dw(t,e);var r=yo(t,t===ge?we:0);if(r===0)n!==null&&df(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&df(n),e===1)t.tag===0?cE(rh.bind(null,t)):eg(rh.bind(null,t)),oE(function(){!(j&6)&&Rn()}),n=null;else{switch(Am(r)){case 1:n=wc;break;case 4:n=km;break;case 16:n=_o;break;case 536870912:n=Rm;break;default:n=_o}n=Zg(n,Kg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Kg(t,e){if(ro=-1,io=0,j&6)throw Error(S(327));var n=t.callbackNode;if(Pr()&&t.callbackNode!==n)return null;var r=yo(t,t===ge?we:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Mo(t,r);else{e=r;var i=j;j|=2;var s=qg();(ge!==t||we!==e)&&(Ot=null,$r=oe()+500,jn(t,e));do try{xE();break}catch(l){Gg(t,l)}while(1);Dc(),Do.current=s,j=i,le!==null?e=0:(ge=null,we=0,e=ce)}if(e!==0){if(e===2&&(i=nu(t),i!==0&&(r=i,e=Pu(t,i))),e===1)throw n=Zi,jn(t,0),rn(t,r),ze(t,oe()),n;if(e===6)rn(t,r);else{if(i=t.current.alternate,!(r&30)&&!AE(i)&&(e=Mo(t,r),e===2&&(s=nu(t),s!==0&&(r=s,e=Pu(t,s))),e===1))throw n=Zi,jn(t,0),rn(t,r),ze(t,oe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:xn(t,Le,Ot);break;case 3:if(rn(t,r),(r&130023424)===r&&(e=qc+500-oe(),10<e)){if(yo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){xe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=cu(xn.bind(null,t,Le,Ot),e);break}xn(t,Le,Ot);break;case 4:if(rn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-ht(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*NE(r/1960))-r,10<r){t.timeoutHandle=cu(xn.bind(null,t,Le,Ot),r);break}xn(t,Le,Ot);break;case 5:xn(t,Le,Ot);break;default:throw Error(S(329))}}}return ze(t,oe()),t.callbackNode===n?Kg.bind(null,t):null}function Pu(t,e){var n=Ai;return t.current.memoizedState.isDehydrated&&(jn(t,e).flags|=256),t=Mo(t,e),t!==2&&(e=Le,Le=n,e!==null&&xu(e)),t}function xu(t){Le===null?Le=t:Le.push.apply(Le,t)}function AE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!gt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function rn(t,e){for(e&=~Gc,e&=~ml,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ht(e),r=1<<n;t[n]=-1,e&=~r}}function rh(t){if(j&6)throw Error(S(327));Pr();var e=yo(t,0);if(!(e&1))return ze(t,oe()),null;var n=Mo(t,e);if(t.tag!==0&&n===2){var r=nu(t);r!==0&&(e=r,n=Pu(t,r))}if(n===1)throw n=Zi,jn(t,0),rn(t,e),ze(t,oe()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,xn(t,Le,Ot),ze(t,oe()),null}function Yc(t,e){var n=j;j|=1;try{return t(e)}finally{j=n,j===0&&($r=oe()+500,dl&&Rn())}}function Yn(t){un!==null&&un.tag===0&&!(j&6)&&Pr();var e=j;j|=1;var n=tt.transition,r=W;try{if(tt.transition=null,W=1,t)return t()}finally{W=r,tt.transition=n,j=e,!(j&6)&&Rn()}}function Qc(){$e=Sr.current,X(Sr)}function jn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,sE(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(Pc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Io();break;case 3:zr(),X(Ue),X(Ne),Bc();break;case 5:Uc(r);break;case 4:zr();break;case 13:X(te);break;case 19:X(te);break;case 10:bc(r.type._context);break;case 22:case 23:Qc()}n=n.return}if(ge=t,le=t=_n(t.current,null),we=$e=e,ce=0,Zi=null,Gc=ml=qn=0,Le=Ai=null,Ln!==null){for(e=0;e<Ln.length;e++)if(n=Ln[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ln=null}return t}function Gg(t,e){do{var n=le;try{if(Dc(),eo.current=Oo,xo){for(var r=ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xo=!1}if(Gn=0,he=ue=ne=null,Ri=!1,Qi=0,Kc.current=null,n===null||n.return===null){ce=1,Zi=e,le=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=we,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var _=Wf(o);if(_!==null){_.flags&=-257,Vf(_,o,l,s,e),_.mode&1&&Hf(s,u,e),e=_,a=u;var m=e.updateQueue;if(m===null){var y=new Set;y.add(a),e.updateQueue=y}else m.add(a);break e}else{if(!(e&1)){Hf(s,u,e),Jc();break e}a=Error(S(426))}}else if(ee&&l.mode&1){var I=Wf(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Vf(I,o,l,s,e),xc(jr(a,l));break e}}s=a=jr(a,l),ce!==4&&(ce=2),Ai===null?Ai=[s]:Ai.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Pg(s,a,e);Mf(s,p);break e;case 1:l=a;var h=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(mn===null||!mn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=xg(s,l,e);Mf(s,w);break e}}s=s.return}while(s!==null)}Qg(n)}catch(T){e=T,le===n&&n!==null&&(le=n=n.return);continue}break}while(1)}function qg(){var t=Do.current;return Do.current=Oo,t===null?Oo:t}function Jc(){(ce===0||ce===3||ce===2)&&(ce=4),ge===null||!(qn&268435455)&&!(ml&268435455)||rn(ge,we)}function Mo(t,e){var n=j;j|=2;var r=qg();(ge!==t||we!==e)&&(Ot=null,jn(t,e));do try{PE();break}catch(i){Gg(t,i)}while(1);if(Dc(),j=n,Do.current=r,le!==null)throw Error(S(261));return ge=null,we=0,ce}function PE(){for(;le!==null;)Yg(le)}function xE(){for(;le!==null&&!nw();)Yg(le)}function Yg(t){var e=Xg(t.alternate,t,$e);t.memoizedProps=t.pendingProps,e===null?Qg(t):le=e,Kc.current=null}function Qg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=CE(n,e),n!==null){n.flags&=32767,le=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ce=6,le=null;return}}else if(n=IE(n,e,$e),n!==null){le=n;return}if(e=e.sibling,e!==null){le=e;return}le=e=t}while(e!==null);ce===0&&(ce=5)}function xn(t,e,n){var r=W,i=tt.transition;try{tt.transition=null,W=1,OE(t,e,n,r)}finally{tt.transition=i,W=r}return null}function OE(t,e,n,r){do Pr();while(un!==null);if(j&6)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(fw(t,s),t===ge&&(le=ge=null,we=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Hs||(Hs=!0,Zg(_o,function(){return Pr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=tt.transition,tt.transition=null;var o=W;W=1;var l=j;j|=4,Kc.current=null,kE(t,n),Wg(n,t),Xw(au),vo=!!lu,au=lu=null,t.current=n,RE(n),rw(),j=l,W=o,tt.transition=s}else t.current=n;if(Hs&&(Hs=!1,un=t,Lo=i),s=t.pendingLanes,s===0&&(mn=null),ow(n.stateNode),ze(t,oe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(bo)throw bo=!1,t=Nu,Nu=null,t;return Lo&1&&t.tag!==0&&Pr(),s=t.pendingLanes,s&1?t===Au?Pi++:(Pi=0,Au=t):Pi=0,Rn(),null}function Pr(){if(un!==null){var t=Am(Lo),e=tt.transition,n=W;try{if(tt.transition=null,W=16>t?16:t,un===null)var r=!1;else{if(t=un,un=null,Lo=0,j&6)throw Error(S(331));var i=j;for(j|=4,k=t.current;k!==null;){var s=k,o=s.child;if(k.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(k=u;k!==null;){var c=k;switch(c.tag){case 0:case 11:case 15:Ni(8,c,s)}var d=c.child;if(d!==null)d.return=c,k=d;else for(;k!==null;){c=k;var f=c.sibling,_=c.return;if(jg(c),c===u){k=null;break}if(f!==null){f.return=_,k=f;break}k=_}}}var m=s.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var I=y.sibling;y.sibling=null,y=I}while(y!==null)}}k=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,k=o;else e:for(;k!==null;){if(s=k,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ni(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,k=p;break e}k=s.return}}var h=t.current;for(k=h;k!==null;){o=k;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,k=g;else e:for(o=h;k!==null;){if(l=k,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:pl(9,l)}}catch(T){ie(l,l.return,T)}if(l===o){k=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,k=w;break e}k=l.return}}if(j=i,Rn(),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(ol,t)}catch{}r=!0}return r}finally{W=n,tt.transition=e}}return!1}function ih(t,e,n){e=jr(n,e),e=Pg(t,e,1),t=pn(t,e,1),e=xe(),t!==null&&(us(t,1,e),ze(t,e))}function ie(t,e,n){if(t.tag===3)ih(t,t,n);else for(;e!==null;){if(e.tag===3){ih(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mn===null||!mn.has(r))){t=jr(n,t),t=xg(e,t,1),e=pn(e,t,1),t=xe(),e!==null&&(us(e,1,t),ze(e,t));break}}e=e.return}}function DE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=xe(),t.pingedLanes|=t.suspendedLanes&n,ge===t&&(we&n)===n&&(ce===4||ce===3&&(we&130023424)===we&&500>oe()-qc?jn(t,0):Gc|=n),ze(t,e)}function Jg(t,e){e===0&&(t.mode&1?(e=Ds,Ds<<=1,!(Ds&130023424)&&(Ds=4194304)):e=1);var n=xe();t=Wt(t,e),t!==null&&(us(t,e,n),ze(t,n))}function bE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Jg(t,n)}function LE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),Jg(t,n)}var Xg;Xg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ue.current)Me=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Me=!1,SE(t,e,n);Me=!!(t.flags&131072)}else Me=!1,ee&&e.flags&1048576&&tg(e,ko,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;no(t,e),t=e.pendingProps;var i=Fr(e,Ne.current);Ar(e,n),i=jc(null,e,r,t,i,n);var s=$c();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Be(r)?(s=!0,Co(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Mc(e),i.updater=fl,e.stateNode=i,i._reactInternals=e,_u(e,r,t,n),e=wu(null,e,r,!0,s,n)):(e.tag=0,ee&&s&&Ac(e),Pe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(no(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=FE(r),t=at(r,t),i){case 0:e=vu(null,e,r,t,n);break e;case 1:e=qf(null,e,r,t,n);break e;case 11:e=Kf(null,e,r,t,n);break e;case 14:e=Gf(null,e,r,at(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),vu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),qf(t,e,r,i,n);case 3:e:{if(Lg(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,sg(t,e),Ao(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=jr(Error(S(423)),e),e=Yf(t,e,r,n,i);break e}else if(r!==i){i=jr(Error(S(424)),e),e=Yf(t,e,r,n,i);break e}else for(He=hn(e.stateNode.containerInfo.firstChild),We=e,ee=!0,ct=null,n=ug(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ur(),r===i){e=Vt(t,e,n);break e}Pe(t,e,r,n)}e=e.child}return e;case 5:return cg(e),t===null&&pu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,uu(r,i)?o=null:s!==null&&uu(r,s)&&(e.flags|=32),bg(t,e),Pe(t,e,o,n),e.child;case 6:return t===null&&pu(e),null;case 13:return Mg(t,e,n);case 4:return Fc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Br(e,null,r,n):Pe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),Kf(t,e,r,i,n);case 7:return Pe(t,e,e.pendingProps,n),e.child;case 8:return Pe(t,e,e.pendingProps.children,n),e.child;case 12:return Pe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,q(Ro,r._currentValue),r._currentValue=o,s!==null)if(gt(s.value,o)){if(s.children===i.children&&!Ue.current){e=Vt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Bt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),mu(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),mu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Pe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ar(e,n),i=it(i),r=r(i),e.flags|=1,Pe(t,e,r,n),e.child;case 14:return r=e.type,i=at(r,e.pendingProps),i=at(r.type,i),Gf(t,e,r,i,n);case 15:return Og(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),no(t,e),e.tag=1,Be(r)?(t=!0,Co(e)):t=!1,Ar(e,n),lg(e,r,i),_u(e,r,i,n),wu(null,e,r,!0,t,n);case 19:return Fg(t,e,n);case 22:return Dg(t,e,n)}throw Error(S(156,e.tag))};function Zg(t,e){return Tm(t,e)}function ME(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(t,e,n,r){return new ME(t,e,n,r)}function Xc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function FE(t){if(typeof t=="function")return Xc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===_c)return 11;if(t===yc)return 14}return 2}function _n(t,e){var n=t.alternate;return n===null?(n=Ze(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function so(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Xc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case fr:return $n(n.children,i,s,e);case gc:o=8,i|=8;break;case ja:return t=Ze(12,n,e,i|2),t.elementType=ja,t.lanes=s,t;case $a:return t=Ze(13,n,e,i),t.elementType=$a,t.lanes=s,t;case Ha:return t=Ze(19,n,e,i),t.elementType=Ha,t.lanes=s,t;case am:return gl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case om:o=10;break e;case lm:o=9;break e;case _c:o=11;break e;case yc:o=14;break e;case en:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=Ze(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function $n(t,e,n,r){return t=Ze(7,t,r,e),t.lanes=n,t}function gl(t,e,n,r){return t=Ze(22,t,r,e),t.elementType=am,t.lanes=n,t.stateNode={isHidden:!1},t}function da(t,e,n){return t=Ze(6,t,null,e),t.lanes=n,t}function fa(t,e,n){return e=Ze(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function UE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kl(0),this.expirationTimes=Kl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Zc(t,e,n,r,i,s,o,l,a){return t=new UE(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ze(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mc(s),t}function BE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:dr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function e_(t){if(!t)return In;t=t._reactInternals;e:{if(ir(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Be(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(Be(n))return Zm(t,n,e)}return e}function t_(t,e,n,r,i,s,o,l,a){return t=Zc(n,r,!0,t,i,s,o,l,a),t.context=e_(null),n=t.current,r=xe(),i=gn(n),s=Bt(r,i),s.callback=e??null,pn(n,s,i),t.current.lanes=i,us(t,i,r),ze(t,r),t}function _l(t,e,n,r){var i=e.current,s=xe(),o=gn(i);return n=e_(n),e.context===null?e.context=n:e.pendingContext=n,e=Bt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=pn(i,e,o),t!==null&&(pt(t,i,o,s),Zs(t,i,o)),o}function Fo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function sh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ed(t,e){sh(t,e),(t=t.alternate)&&sh(t,e)}function zE(){return null}var n_=typeof reportError=="function"?reportError:function(t){console.error(t)};function td(t){this._internalRoot=t}yl.prototype.render=td.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));_l(t,e,null,null)};yl.prototype.unmount=td.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Yn(function(){_l(null,t,null,null)}),e[Ht]=null}};function yl(t){this._internalRoot=t}yl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Om();t={blockedOn:null,target:t,priority:e};for(var n=0;n<nn.length&&e!==0&&e<nn[n].priority;n++);nn.splice(n,0,t),n===0&&bm(t)}};function nd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function vl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function oh(){}function jE(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Fo(o);s.call(u)}}var o=t_(e,r,t,0,null,!1,!1,"",oh);return t._reactRootContainer=o,t[Ht]=o.current,Vi(t.nodeType===8?t.parentNode:t),Yn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Fo(a);l.call(u)}}var a=Zc(t,0,!1,null,null,!1,!1,"",oh);return t._reactRootContainer=a,t[Ht]=a.current,Vi(t.nodeType===8?t.parentNode:t),Yn(function(){_l(e,a,n,r)}),a}function wl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Fo(o);l.call(a)}}_l(e,o,t,i)}else o=jE(n,e,t,i,r);return Fo(o)}Pm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=wi(e.pendingLanes);n!==0&&(Ec(e,n|1),ze(e,oe()),!(j&6)&&($r=oe()+500,Rn()))}break;case 13:Yn(function(){var r=Wt(t,1);if(r!==null){var i=xe();pt(r,t,1,i)}}),ed(t,1)}};Sc=function(t){if(t.tag===13){var e=Wt(t,134217728);if(e!==null){var n=xe();pt(e,t,134217728,n)}ed(t,134217728)}};xm=function(t){if(t.tag===13){var e=gn(t),n=Wt(t,e);if(n!==null){var r=xe();pt(n,t,e,r)}ed(t,e)}};Om=function(){return W};Dm=function(t,e){var n=W;try{return W=t,e()}finally{W=n}};Za=function(t,e,n){switch(e){case"input":if(Ka(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=cl(r);if(!i)throw Error(S(90));cm(r),Ka(r,i)}}}break;case"textarea":fm(t,n);break;case"select":e=n.value,e!=null&&Tr(t,!!n.multiple,e,!1)}};vm=Yc;wm=Yn;var $E={usingClientEntryPoint:!1,Events:[ds,gr,cl,_m,ym,Yc]},di={findFiberByHostInstance:bn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},HE={bundleType:di.bundleType,version:di.version,rendererPackageName:di.rendererPackageName,rendererConfig:di.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Im(t),t===null?null:t.stateNode},findFiberByHostInstance:di.findFiberByHostInstance||zE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ws=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ws.isDisabled&&Ws.supportsFiber)try{ol=Ws.inject(HE),It=Ws}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$E;qe.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nd(e))throw Error(S(200));return BE(t,e,null,n)};qe.createRoot=function(t,e){if(!nd(t))throw Error(S(299));var n=!1,r="",i=n_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Zc(t,1,!1,null,null,n,!1,r,i),t[Ht]=e.current,Vi(t.nodeType===8?t.parentNode:t),new td(e)};qe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=Im(e),t=t===null?null:t.stateNode,t};qe.flushSync=function(t){return Yn(t)};qe.hydrate=function(t,e,n){if(!vl(e))throw Error(S(200));return wl(null,t,e,!0,n)};qe.hydrateRoot=function(t,e,n){if(!nd(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=n_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=t_(e,null,t,1,n??null,i,!1,s,o),t[Ht]=e.current,Vi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new yl(e)};qe.render=function(t,e,n){if(!vl(e))throw Error(S(200));return wl(null,t,e,!1,n)};qe.unmountComponentAtNode=function(t){if(!vl(t))throw Error(S(40));return t._reactRootContainer?(Yn(function(){wl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ht]=null})}),!0):!1};qe.unstable_batchedUpdates=Yc;qe.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!vl(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return wl(t,e,n,!1,r)};qe.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=qe})(z0);var lh=Ua;Fa.createRoot=lh.createRoot,Fa.hydrateRoot=lh.hydrateRoot;/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Uo(){return Uo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Uo.apply(this,arguments)}var Fn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Fn||(Fn={}));const ah="popstate";function WE(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Ou("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:i_(i)}return KE(e,n,null,t)}function r_(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function VE(){return Math.random().toString(36).substr(2,8)}function uh(t,e){return{usr:t.state,key:t.key,idx:e}}function Ou(t,e,n,r){return n===void 0&&(n=null),Uo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?s_(e):e,{state:n,key:e&&e.key||r||VE()})}function i_(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function s_(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function KE(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Fn.Pop,a=null,u=c();u==null&&(u=0,o.replaceState(Uo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){l=Fn.Pop;let I=c(),p=I==null?null:I-u;u=I,a&&a({action:l,location:y.location,delta:p})}function f(I,p){l=Fn.Push;let h=Ou(y.location,I,p);n&&n(h,I),u=c()+1;let g=uh(h,u),w=y.createHref(h);try{o.pushState(g,"",w)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(w)}s&&a&&a({action:l,location:y.location,delta:1})}function _(I,p){l=Fn.Replace;let h=Ou(y.location,I,p);n&&n(h,I),u=c();let g=uh(h,u),w=y.createHref(h);o.replaceState(g,"",w),s&&a&&a({action:l,location:y.location,delta:0})}function m(I){let p=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof I=="string"?I:i_(I);return r_(p,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,p)}let y={get action(){return l},get location(){return t(i,o)},listen(I){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(ah,d),a=I,()=>{i.removeEventListener(ah,d),a=null}},createHref(I){return e(i,I)},createURL:m,encodeLocation(I){let p=m(I);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:f,replace:_,go(I){return o.go(I)}};return y}var ch;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ch||(ch={}));function GE(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const qE=["post","put","patch","delete"];[...qE];/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const YE=z.createContext(null),o_=z.createContext(null);function QE(){return z.useContext(o_)!=null}var dh;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(dh||(dh={}));var fh;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(fh||(fh={}));function JE(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Fn.Pop,navigator:s,static:o=!1}=t;QE()&&r_(!1);let l=e.replace(/^\/*/,"/"),a=z.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=s_(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:_="default"}=r,m=z.useMemo(()=>{let y=GE(u,l);return y==null?null:{location:{pathname:y,search:c,hash:d,state:f,key:_},navigationType:i}},[l,u,c,d,f,_,i]);return m==null?null:z.createElement(YE.Provider,{value:a},z.createElement(o_.Provider,{children:n,value:m}))}var hh;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(hh||(hh={}));new Promise(()=>{});/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const XE="startTransition",ph=O0[XE];function ZE(t){let{basename:e,children:n,future:r,window:i}=t,s=z.useRef();s.current==null&&(s.current=WE({window:i,v5Compat:!0}));let o=s.current,[l,a]=z.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=z.useCallback(d=>{u&&ph?ph(()=>a(d)):a(d)},[a,u]);return z.useLayoutEffect(()=>o.listen(c),[o,c]),z.createElement(JE,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o})}var mh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(mh||(mh={}));var gh;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(gh||(gh={}));const _h={waves:"#F3F4F3","dark-waves":"#9E9A98",grainy:"#AC8B5D",bland:"#917E7A","dark-bland":"#3A3743"},eS=[15,30,45,60,75],tS=1e3;function l_(){document.querySelectorAll(".circle").forEach((e,n)=>{const r=10*Math.sin(Date.now()/tS+n);e.style.transform=`translateY(${r+110}px)`}),requestAnimationFrame(l_)}l_();const fi=({color:t,position:e})=>P("div",{className:"circle",style:{width:"50px",height:"50px",borderRadius:"50%",background:`radial-gradient(circle, ${_h[t]}, ${_h[t]})`,position:"absolute",left:eS[e]+"%",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0), 0 12px 20px 0 rgba(0, 0, 0, 0.5)"}}),nS=()=>G("div",{style:{position:"relative"},children:[P(fi,{color:"waves",position:0}),P(fi,{color:"dark-waves",position:1}),P(fi,{color:"grainy",position:2}),P(fi,{color:"bland",position:3}),P(fi,{color:"dark-bland",position:4})]});/**
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
 */const a_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const C=function(t,e){if(!t)throw Jr(e)},Jr=function(t){return new Error("Firebase Database ("+a_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const u_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},rS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},rd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=s>>2,d=(s&3)<<4|l>>4;let f=(l&15)<<2|u>>6,_=u&63;a||(_=64,o||(f=64)),r.push(n[c],n[d],n[f],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(u_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):rS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||d==null)throw new iS;const f=s<<2|l>>4;if(r.push(f),u!==64){const _=l<<4&240|u>>2;if(r.push(_),d!==64){const m=u<<6&192|d;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class iS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const c_=function(t){const e=u_(t);return rd.encodeByteArray(e,!0)},Bo=function(t){return c_(t).replace(/\./g,"")},zo=function(t){try{return rd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function sS(t){return d_(void 0,t)}function d_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!oS(n)||(t[n]=d_(t[n],e[n]));return t}function oS(t){return t!=="__proto__"}/**
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
 */function lS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const aS=()=>lS().__FIREBASE_DEFAULTS__,uS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&zo(t[1]);return e&&JSON.parse(e)},id=()=>{try{return aS()||uS()||cS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},f_=t=>{var e,n;return(n=(e=id())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},dS=t=>{const e=f_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},h_=()=>{var t;return(t=id())===null||t===void 0?void 0:t.config},p_=t=>{var e;return(e=id())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class sd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function fS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Bo(JSON.stringify(n)),Bo(JSON.stringify(o)),l].join(".")}/**
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
 */function Ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function od(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function m_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function g_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hS(){const t=Ae();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function __(){return a_.NODE_ADMIN===!0}function y_(){try{return typeof indexedDB=="object"}catch{return!1}}function v_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function pS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const mS="FirebaseError";class At extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=mS,Object.setPrototypeOf(this,At.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sr.prototype.create)}}class sr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?gS(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new At(i,l,r)}}function gS(t,e){return t.replace(_S,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const _S=/\{\$([^}]+)}/g;/**
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
 */function es(t){return JSON.parse(t)}function ve(t){return JSON.stringify(t)}/**
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
 */const w_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=es(zo(s[0])||""),n=es(zo(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},yS=function(t){const e=w_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},vS=function(t){const e=w_(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Yt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Hr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Du(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function jo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function ts(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(yh(s)&&yh(o)){if(!ts(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function yh(t){return t!==null&&typeof t=="object"}/**
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
 */function Xr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class wS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=l^s&(o^l),c=1518500249):(u=s^o^l,c=1859775393):d<60?(u=s&o|l&(s|o),c=2400959708):(u=s^o^l,c=3395469782);const f=(i<<5|i>>>27)+u+a+c+r[d]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function ES(t,e){const n=new SS(t,e);return n.subscribe.bind(n)}class SS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");IS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ha),i.error===void 0&&(i.error=ha),i.complete===void 0&&(i.complete=ha);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function IS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ha(){}function CS(t,e){return`${t} failed: ${e} argument `}/**
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
 */const TS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,C(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},El=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const kS=1e3,RS=2,NS=4*60*60*1e3,AS=.5;function vh(t,e=kS,n=RS){const r=e*Math.pow(n,t),i=Math.round(AS*r*(Math.random()-.5)*2);return Math.min(NS,r+i)}/**
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
 */function Pt(t){return t&&t._delegate?t._delegate:t}class _t{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const On="[DEFAULT]";/**
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
 */class PS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new sd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(OS(e))try{this.getOrInitializeService({instanceIdentifier:On})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=On){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=On){return this.instances.has(e)}getOptions(e=On){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=On){return this.component?this.component.multipleInstances?e:On:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xS(t){return t===On?void 0:t}function OS(t){return t.instantiationMode==="EAGER"}/**
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
 */class DS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new PS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var V;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(V||(V={}));const bS={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},LS=V.INFO,MS={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},FS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=MS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sl{constructor(e){this.name=e,this._logLevel=LS,this._logHandler=FS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const US=(t,e)=>e.some(n=>t instanceof n);let wh,Eh;function BS(){return wh||(wh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zS(){return Eh||(Eh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const E_=new WeakMap,bu=new WeakMap,S_=new WeakMap,pa=new WeakMap,ld=new WeakMap;function jS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(yn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&E_.set(n,t)}).catch(()=>{}),ld.set(e,t),e}function $S(t){if(bu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});bu.set(t,e)}let Lu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||S_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function HS(t){Lu=t(Lu)}function WS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ma(this),e,...n);return S_.set(r,e.sort?e.sort():[e]),yn(r)}:zS().includes(t)?function(...e){return t.apply(ma(this),e),yn(E_.get(this))}:function(...e){return yn(t.apply(ma(this),e))}}function VS(t){return typeof t=="function"?WS(t):(t instanceof IDBTransaction&&$S(t),US(t,BS())?new Proxy(t,Lu):t)}function yn(t){if(t instanceof IDBRequest)return jS(t);if(pa.has(t))return pa.get(t);const e=VS(t);return e!==t&&(pa.set(t,e),ld.set(e,t)),e}const ma=t=>ld.get(t);function KS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=yn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(yn(o.result),a.oldVersion,a.newVersion,yn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const GS=["get","getKey","getAll","getAllKeys","count"],qS=["put","add","delete","clear"],ga=new Map;function Sh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ga.get(e))return ga.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=qS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||GS.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return ga.set(e,s),s}HS(t=>({...t,get:(e,n,r)=>Sh(e,n)||t.get(e,n,r),has:(e,n)=>!!Sh(e,n)||t.has(e,n)}));/**
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
 */class YS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(QS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function QS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mu="@firebase/app",Ih="0.9.13";/**
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
 */const Qn=new Sl("@firebase/app"),JS="@firebase/app-compat",XS="@firebase/analytics-compat",ZS="@firebase/analytics",eI="@firebase/app-check-compat",tI="@firebase/app-check",nI="@firebase/auth",rI="@firebase/auth-compat",iI="@firebase/database",sI="@firebase/database-compat",oI="@firebase/functions",lI="@firebase/functions-compat",aI="@firebase/installations",uI="@firebase/installations-compat",cI="@firebase/messaging",dI="@firebase/messaging-compat",fI="@firebase/performance",hI="@firebase/performance-compat",pI="@firebase/remote-config",mI="@firebase/remote-config-compat",gI="@firebase/storage",_I="@firebase/storage-compat",yI="@firebase/firestore",vI="@firebase/firestore-compat",wI="firebase",EI="9.23.0";/**
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
 */const Fu="[DEFAULT]",SI={[Mu]:"fire-core",[JS]:"fire-core-compat",[ZS]:"fire-analytics",[XS]:"fire-analytics-compat",[tI]:"fire-app-check",[eI]:"fire-app-check-compat",[nI]:"fire-auth",[rI]:"fire-auth-compat",[iI]:"fire-rtdb",[sI]:"fire-rtdb-compat",[oI]:"fire-fn",[lI]:"fire-fn-compat",[aI]:"fire-iid",[uI]:"fire-iid-compat",[cI]:"fire-fcm",[dI]:"fire-fcm-compat",[fI]:"fire-perf",[hI]:"fire-perf-compat",[pI]:"fire-rc",[mI]:"fire-rc-compat",[gI]:"fire-gcs",[_I]:"fire-gcs-compat",[yI]:"fire-fst",[vI]:"fire-fst-compat","fire-js":"fire-js",[wI]:"fire-js-all"};/**
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
 */const $o=new Map,Uu=new Map;function II(t,e){try{t.container.addComponent(e)}catch(n){Qn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rt(t){const e=t.name;if(Uu.has(e))return Qn.debug(`There were multiple attempts to register component ${e}.`),!1;Uu.set(e,t);for(const n of $o.values())II(n,t);return!0}function or(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const CI={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},vn=new sr("app","Firebase",CI);/**
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
 */class TI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _t("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vn.create("app-deleted",{appName:this._name})}}/**
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
 */const Zr=EI;function ad(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Fu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw vn.create("bad-app-name",{appName:String(i)});if(n||(n=h_()),!n)throw vn.create("no-options");const s=$o.get(i);if(s){if(ts(n,s.options)&&ts(r,s.config))return s;throw vn.create("duplicate-app",{appName:i})}const o=new DS(i);for(const a of Uu.values())o.addComponent(a);const l=new TI(n,r,o);return $o.set(i,l),l}function ud(t=Fu){const e=$o.get(t);if(!e&&t===Fu&&h_())return ad();if(!e)throw vn.create("no-app",{appName:t});return e}function nt(t,e,n){var r;let i=(r=SI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qn.warn(l.join(" "));return}Rt(new _t(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const kI="firebase-heartbeat-database",RI=1,ns="firebase-heartbeat-store";let _a=null;function I_(){return _a||(_a=KS(kI,RI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ns)}}}).catch(t=>{throw vn.create("idb-open",{originalErrorMessage:t.message})})),_a}async function NI(t){try{return await(await I_()).transaction(ns).objectStore(ns).get(C_(t))}catch(e){if(e instanceof At)Qn.warn(e.message);else{const n=vn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qn.warn(n.message)}}}async function Ch(t,e){try{const r=(await I_()).transaction(ns,"readwrite");await r.objectStore(ns).put(e,C_(t)),await r.done}catch(n){if(n instanceof At)Qn.warn(n.message);else{const r=vn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qn.warn(r.message)}}}function C_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const AI=1024,PI=30*24*60*60*1e3;class xI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new DI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Th();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=PI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Th(),{heartbeatsToSend:n,unsentEntries:r}=OI(this._heartbeatsCache.heartbeats),i=Bo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Th(){return new Date().toISOString().substring(0,10)}function OI(t,e=AI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),kh(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),kh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class DI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return y_()?v_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await NI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ch(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ch(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function kh(t){return Bo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function bI(t){Rt(new _t("platform-logger",e=>new YS(e),"PRIVATE")),Rt(new _t("heartbeat",e=>new xI(e),"PRIVATE")),nt(Mu,Ih,t),nt(Mu,Ih,"esm2017"),nt("fire-js","")}bI("");var LI="firebase",MI="9.23.0";/**
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
 */nt(LI,MI,"app");const FI=(t,e)=>e.some(n=>t instanceof n);let Rh,Nh;function UI(){return Rh||(Rh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BI(){return Nh||(Nh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const T_=new WeakMap,Bu=new WeakMap,k_=new WeakMap,ya=new WeakMap,cd=new WeakMap;function zI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(wn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&T_.set(n,t)}).catch(()=>{}),cd.set(e,t),e}function jI(t){if(Bu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Bu.set(t,e)}let zu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Bu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||k_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $I(t){zu=t(zu)}function HI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(va(this),e,...n);return k_.set(r,e.sort?e.sort():[e]),wn(r)}:BI().includes(t)?function(...e){return t.apply(va(this),e),wn(T_.get(this))}:function(...e){return wn(t.apply(va(this),e))}}function WI(t){return typeof t=="function"?HI(t):(t instanceof IDBTransaction&&jI(t),FI(t,UI())?new Proxy(t,zu):t)}function wn(t){if(t instanceof IDBRequest)return zI(t);if(ya.has(t))return ya.get(t);const e=WI(t);return e!==t&&(ya.set(t,e),cd.set(e,t)),e}const va=t=>cd.get(t);function VI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=wn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(wn(o.result),a.oldVersion,a.newVersion,wn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const KI=["get","getKey","getAll","getAllKeys","count"],GI=["put","add","delete","clear"],wa=new Map;function Ah(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wa.get(e))return wa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=GI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||KI.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return wa.set(e,s),s}$I(t=>({...t,get:(e,n,r)=>Ah(e,n)||t.get(e,n,r),has:(e,n)=>!!Ah(e,n)||t.has(e,n)}));const R_="@firebase/installations",dd="0.6.4";/**
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
 */const N_=1e4,A_=`w:${dd}`,P_="FIS_v2",qI="https://firebaseinstallations.googleapis.com/v1",YI=60*60*1e3,QI="installations",JI="Installations";/**
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
 */const XI={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Jn=new sr(QI,JI,XI);function x_(t){return t instanceof At&&t.code.includes("request-failed")}/**
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
 */function O_({projectId:t}){return`${qI}/projects/${t}/installations`}function D_(t){return{token:t.token,requestStatus:2,expiresIn:eC(t.expiresIn),creationTime:Date.now()}}async function b_(t,e){const r=(await e.json()).error;return Jn.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function L_({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function ZI(t,{refreshToken:e}){const n=L_(t);return n.append("Authorization",tC(e)),n}async function M_(t){const e=await t();return e.status>=500&&e.status<600?t():e}function eC(t){return Number(t.replace("s","000"))}function tC(t){return`${P_} ${t}`}/**
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
 */async function nC({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=O_(t),i=L_(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:P_,appId:t.appId,sdkVersion:A_},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await M_(()=>fetch(r,l));if(a.ok){const u=await a.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:D_(u.authToken)}}else throw await b_("Create Installation",a)}/**
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
 */function F_(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function rC(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const iC=/^[cdef][\w-]{21}$/,ju="";function sC(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=oC(t);return iC.test(n)?n:ju}catch{return ju}}function oC(t){return rC(t).substr(0,22)}/**
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
 */function Il(t){return`${t.appName}!${t.appId}`}/**
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
 */const U_=new Map;function B_(t,e){const n=Il(t);z_(n,e),lC(n,e)}function z_(t,e){const n=U_.get(t);if(n)for(const r of n)r(e)}function lC(t,e){const n=aC();n&&n.postMessage({key:t,fid:e}),uC()}let Un=null;function aC(){return!Un&&"BroadcastChannel"in self&&(Un=new BroadcastChannel("[Firebase] FID Change"),Un.onmessage=t=>{z_(t.data.key,t.data.fid)}),Un}function uC(){U_.size===0&&Un&&(Un.close(),Un=null)}/**
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
 */const cC="firebase-installations-database",dC=1,Xn="firebase-installations-store";let Ea=null;function fd(){return Ea||(Ea=VI(cC,dC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Xn)}}})),Ea}async function Ho(t,e){const n=Il(t),i=(await fd()).transaction(Xn,"readwrite"),s=i.objectStore(Xn),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&B_(t,e.fid),e}async function j_(t){const e=Il(t),r=(await fd()).transaction(Xn,"readwrite");await r.objectStore(Xn).delete(e),await r.done}async function Cl(t,e){const n=Il(t),i=(await fd()).transaction(Xn,"readwrite"),s=i.objectStore(Xn),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&B_(t,l.fid),l}/**
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
 */async function hd(t){let e;const n=await Cl(t.appConfig,r=>{const i=fC(r),s=hC(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===ju?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function fC(t){const e=t||{fid:sC(),registrationStatus:0};return $_(e)}function hC(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Jn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=pC(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:mC(t)}:{installationEntry:e}}async function pC(t,e){try{const n=await nC(t,e);return Ho(t.appConfig,n)}catch(n){throw x_(n)&&n.customData.serverCode===409?await j_(t.appConfig):await Ho(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function mC(t){let e=await Ph(t.appConfig);for(;e.registrationStatus===1;)await F_(100),e=await Ph(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await hd(t);return r||n}return e}function Ph(t){return Cl(t,e=>{if(!e)throw Jn.create("installation-not-found");return $_(e)})}function $_(t){return gC(t)?{fid:t.fid,registrationStatus:0}:t}function gC(t){return t.registrationStatus===1&&t.registrationTime+N_<Date.now()}/**
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
 */async function _C({appConfig:t,heartbeatServiceProvider:e},n){const r=yC(t,n),i=ZI(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:A_,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await M_(()=>fetch(r,l));if(a.ok){const u=await a.json();return D_(u)}else throw await b_("Generate Auth Token",a)}function yC(t,{fid:e}){return`${O_(t)}/${e}/authTokens:generate`}/**
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
 */async function pd(t,e=!1){let n;const r=await Cl(t.appConfig,s=>{if(!H_(s))throw Jn.create("not-registered");const o=s.authToken;if(!e&&EC(o))return s;if(o.requestStatus===1)return n=vC(t,e),s;{if(!navigator.onLine)throw Jn.create("app-offline");const l=IC(s);return n=wC(t,l),l}});return n?await n:r.authToken}async function vC(t,e){let n=await xh(t.appConfig);for(;n.authToken.requestStatus===1;)await F_(100),n=await xh(t.appConfig);const r=n.authToken;return r.requestStatus===0?pd(t,e):r}function xh(t){return Cl(t,e=>{if(!H_(e))throw Jn.create("not-registered");const n=e.authToken;return CC(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function wC(t,e){try{const n=await _C(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Ho(t.appConfig,r),n}catch(n){if(x_(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await j_(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ho(t.appConfig,r)}throw n}}function H_(t){return t!==void 0&&t.registrationStatus===2}function EC(t){return t.requestStatus===2&&!SC(t)}function SC(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+YI}function IC(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function CC(t){return t.requestStatus===1&&t.requestTime+N_<Date.now()}/**
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
 */async function TC(t){const e=t,{installationEntry:n,registrationPromise:r}=await hd(e);return r?r.catch(console.error):pd(e).catch(console.error),n.fid}/**
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
 */async function kC(t,e=!1){const n=t;return await RC(n),(await pd(n,e)).token}async function RC(t){const{registrationPromise:e}=await hd(t);e&&await e}/**
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
 */function NC(t){if(!t||!t.options)throw Sa("App Configuration");if(!t.name)throw Sa("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Sa(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Sa(t){return Jn.create("missing-app-config-values",{valueName:t})}/**
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
 */const W_="installations",AC="installations-internal",PC=t=>{const e=t.getProvider("app").getImmediate(),n=NC(e),r=or(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},xC=t=>{const e=t.getProvider("app").getImmediate(),n=or(e,W_).getImmediate();return{getId:()=>TC(n),getToken:i=>kC(n,i)}};function OC(){Rt(new _t(W_,PC,"PUBLIC")),Rt(new _t(AC,xC,"PRIVATE"))}OC();nt(R_,dd);nt(R_,dd,"esm2017");/**
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
 */const Wo="analytics",DC="firebase_id",bC="origin",LC=60*1e3,MC="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",md="https://www.googletagmanager.com/gtag/js";/**
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
 */const je=new Sl("@firebase/analytics");/**
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
 */const FC={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ve=new sr("analytics","Analytics",FC);/**
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
 */function UC(t){if(!t.startsWith(md)){const e=Ve.create("invalid-gtag-resource",{gtagURL:t});return je.warn(e.message),""}return t}function V_(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function BC(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function zC(t,e){const n=BC("firebase-js-sdk-policy",{createScriptURL:UC}),r=document.createElement("script"),i=`${md}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function jC(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function $C(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const a=(await V_(n)).find(u=>u.measurementId===i);a&&await e[a.appId]}}catch(l){je.error(l)}t("config",i,s)}async function HC(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await V_(n);for(const a of o){const u=l.find(d=>d.measurementId===a),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){je.error(s)}}function WC(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,a]=o;await HC(t,e,n,l,a)}else if(s==="config"){const[l,a]=o;await $C(t,e,n,r,l,a)}else if(s==="consent"){const[l]=o;t("consent","update",l)}else if(s==="get"){const[l,a,u]=o;t("get",l,a,u)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){je.error(l)}}return i}function VC(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=WC(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function KC(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(md)&&n.src.includes(t))return n;return null}/**
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
 */const GC=30,qC=1e3;class YC{constructor(e={},n=qC){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const K_=new YC;function QC(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function JC(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:QC(r)},s=MC.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const a=await o.json();!((e=a.error)===null||e===void 0)&&e.message&&(l=a.error.message)}catch{}throw Ve.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function XC(t,e=K_,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Ve.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ve.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new tT;return setTimeout(async()=>{l.abort()},n!==void 0?n:LC),G_({appId:r,apiKey:i,measurementId:s},o,l,e)}async function G_(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=K_){var s;const{appId:o,measurementId:l}=t;try{await ZC(r,e)}catch(a){if(l)return je.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${a==null?void 0:a.message}]`),{appId:o,measurementId:l};throw a}try{const a=await JC(t);return i.deleteThrottleMetadata(o),a}catch(a){const u=a;if(!eT(u)){if(i.deleteThrottleMetadata(o),l)return je.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw a}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?vh(n,i.intervalMillis,GC):vh(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,d),je.debug(`Calling attemptFetch again in ${c} millis`),G_(t,d,r,i)}}function ZC(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Ve.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function eT(t){if(!(t instanceof At)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class tT{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function nT(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function rT(){if(y_())try{await v_()}catch(t){return je.warn(Ve.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return je.warn(Ve.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function iT(t,e,n,r,i,s,o){var l;const a=XC(t);a.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&je.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>je.error(_)),e.push(a);const u=rT().then(_=>{if(_)return r.getId()}),[c,d]=await Promise.all([a,u]);KC(s)||zC(s,c.measurementId),i("js",new Date);const f=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return f[bC]="firebase",f.update=!0,d!=null&&(f[DC]=d),i("config",c.measurementId,f),c.measurementId}/**
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
 */class sT{constructor(e){this.app=e}_delete(){return delete xi[this.app.options.appId],Promise.resolve()}}let xi={},Oh=[];const Dh={};let Ia="dataLayer",oT="gtag",bh,q_,Lh=!1;function lT(){const t=[];if(m_()&&t.push("This is a browser extension environment."),pS()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ve.create("invalid-analytics-context",{errorInfo:e});je.warn(n.message)}}function aT(t,e,n){lT();const r=t.options.appId;if(!r)throw Ve.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)je.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ve.create("no-api-key");if(xi[r]!=null)throw Ve.create("already-exists",{id:r});if(!Lh){jC(Ia);const{wrappedGtag:s,gtagCore:o}=VC(xi,Oh,Dh,Ia,oT);q_=s,bh=o,Lh=!0}return xi[r]=iT(t,Oh,Dh,e,bh,Ia,n),new sT(t)}function Y_(t=ud()){t=Pt(t);const e=or(t,Wo);return e.isInitialized()?e.getImmediate():uT(t)}function uT(t,e={}){const n=or(t,Wo);if(n.isInitialized()){const i=n.getImmediate();if(ts(e,n.getOptions()))return i;throw Ve.create("already-initialized")}return n.initialize({options:e})}function cT(t,e,n,r){t=Pt(t),nT(q_,xi[t.app.options.appId],e,n,r).catch(i=>je.error(i))}const Mh="@firebase/analytics",Fh="0.10.0";function dT(){Rt(new _t(Wo,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return aT(r,i,n)},"PUBLIC")),Rt(new _t("analytics-internal",t,"PRIVATE")),nt(Mh,Fh),nt(Mh,Fh,"esm2017");function t(e){try{const n=e.getProvider(Wo).getImmediate();return{logEvent:(r,i,s)=>cT(n,r,i,s)}}catch(n){throw Ve.create("interop-component-reg-failed",{reason:n})}}}dT();function gd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Q_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fT=Q_,J_=new sr("auth","Firebase",Q_());/**
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
 */const Vo=new Sl("@firebase/auth");function hT(t,...e){Vo.logLevel<=V.WARN&&Vo.warn(`Auth (${Zr}): ${t}`,...e)}function oo(t,...e){Vo.logLevel<=V.ERROR&&Vo.error(`Auth (${Zr}): ${t}`,...e)}/**
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
 */function Nt(t,...e){throw _d(t,...e)}function Tt(t,...e){return _d(t,...e)}function X_(t,e,n){const r=Object.assign(Object.assign({},fT()),{[e]:n});return new sr("auth","Firebase",r).create(e,{appName:t.name})}function pT(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Nt(t,"argument-error"),X_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _d(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return J_.create(t,...e)}function O(t,e,...n){if(!t)throw _d(e,...n)}function Mt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw oo(e),new Error(e)}function Kt(t,e){t||Mt(e)}/**
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
 */function $u(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function mT(){return Uh()==="http:"||Uh()==="https:"}function Uh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function gT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mT()||m_()||"connection"in navigator)?navigator.onLine:!0}function _T(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class hs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kt(n>e,"Short delay should be less than long delay!"),this.isMobile=od()||g_()}get(){return gT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function yd(t,e){Kt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Z_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const yT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const vT=new hs(3e4,6e4);function ey(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ps(t,e,n,r,i={}){return ty(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Xr(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Z_.fetch()(ny(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function ty(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},yT),e);try{const i=new ET(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Vs(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vs(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Vs(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Vs(t,"user-disabled",o);const c=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw X_(t,c,u);Nt(t,c)}}catch(i){if(i instanceof At)throw i;Nt(t,"network-request-failed",{message:String(i)})}}async function wT(t,e,n,r,i={}){const s=await ps(t,e,n,r,i);return"mfaPendingCredential"in s&&Nt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function ny(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?yd(t.config,i):`${t.config.apiScheme}://${i}`}class ET{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Tt(this.auth,"network-request-failed")),vT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Vs(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Tt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function ST(t,e){return ps(t,"POST","/v1/accounts:delete",e)}async function IT(t,e){return ps(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Oi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function CT(t,e=!1){const n=Pt(t),r=await n.getIdToken(e),i=vd(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Oi(Ca(i.auth_time)),issuedAtTime:Oi(Ca(i.iat)),expirationTime:Oi(Ca(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ca(t){return Number(t)*1e3}function vd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return oo("JWT malformed, contained fewer than 3 sections"),null;try{const i=zo(n);return i?JSON.parse(i):(oo("Failed to decode base64 JWT payload"),null)}catch(i){return oo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function TT(t){const e=vd(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function rs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof At&&kT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function kT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class RT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ry{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Oi(this.lastLoginAt),this.creationTime=Oi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ko(t){var e;const n=t.auth,r=await t.getIdToken(),i=await rs(t,IT(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?PT(s.providerUserInfo):[],l=AT(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),c=a?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new ry(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function NT(t){const e=Pt(t);await Ko(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function AT(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function PT(t){return t.map(e=>{var{providerId:n}=e,r=gd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function xT(t,e){const n=await ty(t,{},async()=>{const r=Xr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=ny(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Z_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class is{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):TT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return O(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await xT(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new is;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new is,this.toJSON())}_performRefresh(){return Mt("not implemented")}}/**
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
 */function Xt(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Hn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=gd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new RT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ry(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await rs(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return CT(this,e)}reload(){return NT(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Hn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ko(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await rs(this,ST(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(l=n.tenantId)!==null&&l!==void 0?l:void 0,I=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:w,isAnonymous:T,providerData:N,stsTokenManager:E}=n;O(g&&E,e,"internal-error");const R=is.fromJSON(this.name,E);O(typeof g=="string",e,"internal-error"),Xt(d,e.name),Xt(f,e.name),O(typeof w=="boolean",e,"internal-error"),O(typeof T=="boolean",e,"internal-error"),Xt(_,e.name),Xt(m,e.name),Xt(y,e.name),Xt(I,e.name),Xt(p,e.name),Xt(h,e.name);const $=new Hn({uid:g,auth:e,email:f,emailVerified:w,displayName:d,isAnonymous:T,photoURL:m,phoneNumber:_,tenantId:y,stsTokenManager:R,createdAt:p,lastLoginAt:h});return N&&Array.isArray(N)&&($.providerData=N.map(x=>Object.assign({},x))),I&&($._redirectEventId=I),$}static async _fromIdTokenResponse(e,n,r=!1){const i=new is;i.updateFromServerResponse(n);const s=new Hn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ko(s),s}}/**
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
 */const Bh=new Map;function Ft(t){Kt(t instanceof Function,"Expected a class definition");let e=Bh.get(t);return e?(Kt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Bh.set(t,e),e)}/**
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
 */class iy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}iy.type="NONE";const zh=iy;/**
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
 */function lo(t,e,n){return`firebase:${t}:${e}:${n}`}class xr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=lo(this.userKey,i.apiKey,s),this.fullPersistenceKey=lo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Hn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new xr(Ft(zh),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ft(zh);const o=lo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Hn._fromJSON(e,c);u!==s&&(l=d),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new xr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new xr(s,e,r))}}/**
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
 */function jh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ly(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(uy(e))return"Blackberry";if(cy(e))return"Webos";if(wd(e))return"Safari";if((e.includes("chrome/")||oy(e))&&!e.includes("edge/"))return"Chrome";if(ay(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sy(t=Ae()){return/firefox\//i.test(t)}function wd(t=Ae()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function oy(t=Ae()){return/crios\//i.test(t)}function ly(t=Ae()){return/iemobile/i.test(t)}function ay(t=Ae()){return/android/i.test(t)}function uy(t=Ae()){return/blackberry/i.test(t)}function cy(t=Ae()){return/webos/i.test(t)}function Tl(t=Ae()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function OT(t=Ae()){var e;return Tl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function DT(){return hS()&&document.documentMode===10}function dy(t=Ae()){return Tl(t)||ay(t)||cy(t)||uy(t)||/windows phone/i.test(t)||ly(t)}function bT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function fy(t,e=[]){let n;switch(t){case"Browser":n=jh(Ae());break;case"Worker":n=`${jh(Ae())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zr}/${r}`}async function hy(t,e){return ps(t,"GET","/v2/recaptchaConfig",ey(t,e))}function $h(t){return t!==void 0&&t.enterprise!==void 0}class py{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function LT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function my(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Tt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",LT().appendChild(r)})}function MT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const FT="https://www.google.com/recaptcha/enterprise.js?render=",UT="recaptcha-enterprise",BT="NO_RECAPTCHA";class zT{constructor(e){this.type=UT,this.auth=ms(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{hy(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new py(a);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;$h(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(BT)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&$h(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}my(FT+l).then(()=>{i(l,s,o)}).catch(a=>{o(a)})}}).catch(l=>{o(l)})})}}/**
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
 */class jT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class $T{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hh(this),this.idTokenSubscription=new Hh(this),this.beforeStateQueue=new jT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=J_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ft(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await xr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ko(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_T()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Pt(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ft(e))})}async initializeRecaptchaConfig(){const e=await hy(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new py(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new zT(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new sr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ft(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await xr.create(this,[Ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return O(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&hT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ms(t){return Pt(t)}class Hh{constructor(e){this.auth=e,this.observer=null,this.addObserver=ES(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function HT(t,e){const n=or(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ts(s,e??{}))return i;Nt(i,"already-initialized")}return n.initialize({options:e})}function WT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ft);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function VT(t,e,n){const r=ms(t);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=gy(e),{host:o,port:l}=KT(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||GT()}function gy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function KT(t){const e=gy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Wh(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Wh(o)}}}function Wh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function GT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class _y{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mt("not implemented")}_getIdTokenResponse(e){return Mt("not implemented")}_linkToIdToken(e,n){return Mt("not implemented")}_getReauthenticationResolver(e){return Mt("not implemented")}}/**
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
 */async function Or(t,e){return wT(t,"POST","/v1/accounts:signInWithIdp",ey(t,e))}/**
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
 */const qT="http://localhost";class Zn extends _y{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Nt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=gd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Zn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Or(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Or(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Or(e,n)}buildRequest(){const e={requestUri:qT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xr(n)}return e}}/**
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
 */class Ed{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class gs extends Ed{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class sn extends gs{constructor(){super("facebook.com")}static credential(e){return Zn._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sn.credential(e.oauthAccessToken)}catch{return null}}}sn.FACEBOOK_SIGN_IN_METHOD="facebook.com";sn.PROVIDER_ID="facebook.com";/**
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
 */class Xe extends gs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Zn._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Xe.credential(n,r)}catch{return null}}}Xe.GOOGLE_SIGN_IN_METHOD="google.com";Xe.PROVIDER_ID="google.com";/**
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
 */class on extends gs{constructor(){super("github.com")}static credential(e){return Zn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return on.credential(e.oauthAccessToken)}catch{return null}}}on.GITHUB_SIGN_IN_METHOD="github.com";on.PROVIDER_ID="github.com";/**
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
 */class ln extends gs{constructor(){super("twitter.com")}static credential(e,n){return Zn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ln.credential(n,r)}catch{return null}}}ln.TWITTER_SIGN_IN_METHOD="twitter.com";ln.PROVIDER_ID="twitter.com";/**
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
 */class Wr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Hn._fromIdTokenResponse(e,r,i),o=Vh(r);return new Wr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Vh(r);return new Wr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Vh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Go extends At{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Go.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Go(e,n,r,i)}}function yy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Go._fromErrorAndOperation(t,s,e,r):s})}async function YT(t,e,n=!1){const r=await rs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Wr._forOperation(t,"link",r)}/**
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
 */async function QT(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await rs(t,yy(r,i,e,t),n);O(s.idToken,r,"internal-error");const o=vd(s.idToken);O(o,r,"internal-error");const{sub:l}=o;return O(t.uid===l,r,"user-mismatch"),Wr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Nt(r,"user-mismatch"),s}}/**
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
 */async function JT(t,e,n=!1){const r="signIn",i=await yy(t,r,e),s=await Wr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function XT(t,e,n,r){return Pt(t).onIdTokenChanged(e,n,r)}function ZT(t,e,n){return Pt(t).beforeAuthStateChanged(e,n)}const qo="__sak";/**
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
 */class vy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qo,"1"),this.storage.removeItem(qo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function e1(){const t=Ae();return wd(t)||Tl(t)}const t1=1e3,n1=10;class wy extends vy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=e1()&&bT(),this.fallbackToPolling=dy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);DT()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,n1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},t1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}wy.type="LOCAL";const r1=wy;/**
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
 */class Ey extends vy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ey.type="SESSION";const Sy=Ey;/**
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
 */function i1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class kl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new kl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await i1(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kl.receivers=[];/**
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
 */function Sd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class s1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=Sd("",20);i.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(f.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function kt(){return window}function o1(t){kt().location.href=t}/**
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
 */function Iy(){return typeof kt().WorkerGlobalScope<"u"&&typeof kt().importScripts=="function"}async function l1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function a1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function u1(){return Iy()?self:null}/**
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
 */const Cy="firebaseLocalStorageDb",c1=1,Yo="firebaseLocalStorage",Ty="fbase_key";class _s{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Rl(t,e){return t.transaction([Yo],e?"readwrite":"readonly").objectStore(Yo)}function d1(){const t=indexedDB.deleteDatabase(Cy);return new _s(t).toPromise()}function Hu(){const t=indexedDB.open(Cy,c1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Yo,{keyPath:Ty})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Yo)?e(r):(r.close(),await d1(),e(await Hu()))})})}async function Kh(t,e,n){const r=Rl(t,!0).put({[Ty]:e,value:n});return new _s(r).toPromise()}async function f1(t,e){const n=Rl(t,!1).get(e),r=await new _s(n).toPromise();return r===void 0?null:r.value}function Gh(t,e){const n=Rl(t,!0).delete(e);return new _s(n).toPromise()}const h1=800,p1=3;class ky{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>p1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Iy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kl._getInstance(u1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await l1(),!this.activeServiceWorker)return;this.sender=new s1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||a1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hu();return await Kh(e,qo,"1"),await Gh(e,qo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>f1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Rl(i,!1).getAll();return new _s(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),h1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ky.type="LOCAL";const m1=ky;new hs(3e4,6e4);/**
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
 */function Ry(t,e){return e?Ft(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Id extends _y{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Or(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Or(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Or(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function g1(t){return JT(t.auth,new Id(t),t.bypassAuthState)}function _1(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),QT(n,new Id(t),t.bypassAuthState)}async function y1(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),YT(n,new Id(t),t.bypassAuthState)}/**
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
 */class Ny{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return g1;case"linkViaPopup":case"linkViaRedirect":return y1;case"reauthViaPopup":case"reauthViaRedirect":return _1;default:Nt(this.auth,"internal-error")}}resolve(e){Kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const v1=new hs(2e3,1e4);async function w1(t,e,n){const r=ms(t);pT(t,e,Ed);const i=Ry(r,n);return new Bn(r,"signInViaPopup",e,i).executeNotNull()}class Bn extends Ny{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Bn.currentPopupAction&&Bn.currentPopupAction.cancel(),Bn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){Kt(this.filter.length===1,"Popup operations only handle one event");const e=Sd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,v1.get())};e()}}Bn.currentPopupAction=null;/**
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
 */const E1="pendingRedirect",ao=new Map;class S1 extends Ny{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ao.get(this.auth._key());if(!e){try{const r=await I1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ao.set(this.auth._key(),e)}return this.bypassAuthState||ao.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function I1(t,e){const n=k1(e),r=T1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function C1(t,e){ao.set(t._key(),e)}function T1(t){return Ft(t._redirectPersistence)}function k1(t){return lo(E1,t.config.apiKey,t.name)}async function R1(t,e,n=!1){const r=ms(t),i=Ry(r,e),o=await new S1(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const N1=10*60*1e3;class A1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!P1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ay(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Tt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=N1&&this.cachedEventUids.clear(),this.cachedEventUids.has(qh(e))}saveEventToCache(e){this.cachedEventUids.add(qh(e)),this.lastProcessedEventTime=Date.now()}}function qh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ay({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function P1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ay(t);default:return!1}}/**
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
 */async function x1(t,e={}){return ps(t,"GET","/v1/projects",e)}/**
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
 */const O1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,D1=/^https?/;async function b1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await x1(t);for(const n of e)try{if(L1(n))return}catch{}Nt(t,"unauthorized-domain")}function L1(t){const e=$u(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!D1.test(n))return!1;if(O1.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const M1=new hs(3e4,6e4);function Yh(){const t=kt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function F1(t){return new Promise((e,n)=>{var r,i,s;function o(){Yh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yh(),n(Tt(t,"network-request-failed"))},timeout:M1.get()})}if(!((i=(r=kt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=kt().gapi)===null||s===void 0)&&s.load)o();else{const l=MT("iframefcb");return kt()[l]=()=>{gapi.load?o():n(Tt(t,"network-request-failed"))},my(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw uo=null,e})}let uo=null;function U1(t){return uo=uo||F1(t),uo}/**
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
 */const B1=new hs(5e3,15e3),z1="__/auth/iframe",j1="emulator/auth/iframe",$1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},H1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function W1(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?yd(e,j1):`https://${t.config.authDomain}/${z1}`,r={apiKey:e.apiKey,appName:t.name,v:Zr},i=H1.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Xr(r).slice(1)}`}async function V1(t){const e=await U1(t),n=kt().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:W1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Tt(t,"network-request-failed"),l=kt().setTimeout(()=>{s(o)},B1.get());function a(){kt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const K1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},G1=500,q1=600,Y1="_blank",Q1="http://localhost";class Qh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function J1(t,e,n,r=G1,i=q1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},K1),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ae().toLowerCase();n&&(l=oy(u)?Y1:n),sy(u)&&(e=e||Q1,a.scrollbars="yes");const c=Object.entries(a).reduce((f,[_,m])=>`${f}${_}=${m},`,"");if(OT(u)&&l!=="_self")return X1(e||"",l),new Qh(null);const d=window.open(e||"",l,c);O(d,t,"popup-blocked");try{d.focus()}catch{}return new Qh(d)}function X1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Z1="__/auth/handler",ek="emulator/auth/handler",tk=encodeURIComponent("fac");async function Jh(t,e,n,r,i,s){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Zr,eventId:i};if(e instanceof Ed){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Du(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof gs){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const c of Object.keys(l))l[c]===void 0&&delete l[c];const a=await t._getAppCheckToken(),u=a?`#${tk}=${encodeURIComponent(a)}`:"";return`${nk(t)}?${Xr(l).slice(1)}${u}`}function nk({config:t}){return t.emulator?yd(t,ek):`https://${t.authDomain}/${Z1}`}/**
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
 */const Ta="webStorageSupport";class rk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sy,this._completeRedirectFn=R1,this._overrideRedirectResult=C1}async _openPopup(e,n,r,i){var s;Kt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Jh(e,n,r,$u(),i);return J1(e,o,Sd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Jh(e,n,r,$u(),i);return o1(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Kt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await V1(e),r=new A1(e);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ta,{type:Ta},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ta];o!==void 0&&n(!!o),Nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=b1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return dy()||wd()||Tl()}}const ik=rk;var Xh="@firebase/auth",Zh="0.23.2";/**
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
 */class sk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ok(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function lk(t){Rt(new _t("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fy(t)},u=new $T(r,i,s,a);return WT(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Rt(new _t("auth-internal",e=>{const n=ms(e.getProvider("auth").getImmediate());return(r=>new sk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nt(Xh,Zh,ok(t)),nt(Xh,Zh,"esm2017")}/**
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
 */const ak=5*60,uk=p_("authIdTokenMaxAge")||ak;let ep=null;const ck=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>uk)return;const i=n==null?void 0:n.token;ep!==i&&(ep=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function dk(t=ud()){const e=or(t,"auth");if(e.isInitialized())return e.getImmediate();const n=HT(t,{popupRedirectResolver:ik,persistence:[m1,r1,Sy]}),r=p_("authTokenSyncURL");if(r){const s=ck(r);ZT(n,s,()=>s(n.currentUser)),XT(n,o=>s(o))}const i=f_("auth");return i&&VT(n,`http://${i}`),n}lk("Browser");const tp="@firebase/database",np="0.14.4";/**
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
 */let Py="";function fk(t){Py=t}/**
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
 */class hk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ve(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:es(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class pk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Yt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const xy=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new hk(e)}}catch{}return new pk},zn=xy("localStorage"),Wu=xy("sessionStorage");/**
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
 */const Dr=new Sl("@firebase/database"),mk=function(){let t=1;return function(){return t++}}(),Oy=function(t){const e=TS(t),n=new wS;n.update(e);const r=n.digest();return rd.encodeByteArray(r)},ys=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ys.apply(null,r):typeof r=="object"?e+=ve(r):e+=r,e+=" "}return e};let Wn=null,rp=!0;const gk=function(t,e){C(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Dr.logLevel=V.VERBOSE,Wn=Dr.log.bind(Dr),e&&Wu.set("logging_enabled",!0)):typeof t=="function"?Wn=t:(Wn=null,Wu.remove("logging_enabled"))},Te=function(...t){if(rp===!0&&(rp=!1,Wn===null&&Wu.get("logging_enabled")===!0&&gk(!0)),Wn){const e=ys.apply(null,t);Wn(e)}},vs=function(t){return function(...e){Te(t,...e)}},Vu=function(...t){const e="FIREBASE INTERNAL ERROR: "+ys(...t);Dr.error(e)},Gt=function(...t){const e=`FIREBASE FATAL ERROR: ${ys(...t)}`;throw Dr.error(e),new Error(e)},Ke=function(...t){const e="FIREBASE WARNING: "+ys(...t);Dr.warn(e)},_k=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ke("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Dy=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},yk=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Vr="[MIN_NAME]",er="[MAX_NAME]",ei=function(t,e){if(t===e)return 0;if(t===Vr||e===er)return-1;if(e===Vr||t===er)return 1;{const n=ip(t),r=ip(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},vk=function(t,e){return t===e?0:t<e?-1:1},hi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ve(e))},Cd=function(t){if(typeof t!="object"||t===null)return ve(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ve(e[r]),n+=":",n+=Cd(t[e[r]]);return n+="}",n},by=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function ot(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Ly=function(t){C(!Dy(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(a=0;a<64;a+=8){let f=parseInt(c.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},wk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ek=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},Sk=new RegExp("^-?(0*)\\d{1,10}$"),Ik=-2147483648,Ck=2147483647,ip=function(t){if(Sk.test(t)){const e=Number(t);if(e>=Ik&&e<=Ck)return e}return null},ws=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ke("Exception was thrown by user callback.",n),e},Math.floor(0))}},Tk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Di=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class kk{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ke(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Rk{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Te("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ke(e)}}class br{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}br.OWNER="owner";/**
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
 */const Td="5",My="v",Fy="s",Uy="r",By="f",zy=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,jy="ls",$y="p",Ku="ac",Hy="websocket",Wy="long_polling";/**
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
 */class Vy{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=zn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&zn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Nk(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Ky(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let r;if(e===Hy)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Wy)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Nk(t)&&(n.ns=t.namespace);const i=[];return ot(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class Ak{constructor(){this.counters_={}}incrementCounter(e,n=1){Yt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return sS(this.counters_)}}/**
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
 */const ka={},Ra={};function kd(t){const e=t.toString();return ka[e]||(ka[e]=new Ak),ka[e]}function Pk(t,e){const n=t.toString();return Ra[n]||(Ra[n]=e()),Ra[n]}/**
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
 */class xk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ws(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const sp="start",Ok="close",Dk="pLPCommand",bk="pRTLPCB",Gy="id",qy="pw",Yy="ser",Lk="cb",Mk="seg",Fk="ts",Uk="d",Bk="dframe",Qy=1870,Jy=30,zk=Qy-Jy,jk=25e3,$k=3e4;class Ir{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=vs(e),this.stats_=kd(n),this.urlFn=a=>(this.appCheckToken&&(a[Ku]=this.appCheckToken),Ky(n,Wy,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new xk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor($k)),yk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Rd((...s)=>{const[o,l,a,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===sp)this.id=l,this.password=a;else if(o===Ok)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[sp]="t",r[Yy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Lk]=this.scriptTagHolder.uniqueCallbackIdentifier),r[My]=Td,this.transportSessionId&&(r[Fy]=this.transportSessionId),this.lastSessionId&&(r[jy]=this.lastSessionId),this.applicationId&&(r[$y]=this.applicationId),this.appCheckToken&&(r[Ku]=this.appCheckToken),typeof location<"u"&&location.hostname&&zy.test(location.hostname)&&(r[Uy]=By);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ir.forceAllow_=!0}static forceDisallow(){Ir.forceDisallow_=!0}static isAvailable(){return Ir.forceAllow_?!0:!Ir.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!wk()&&!Ek()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=c_(n),i=by(r,zk);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Bk]="t",r[Gy]=e,r[qy]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ve(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Rd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=mk(),window[Dk+this.uniqueCallbackIdentifier]=e,window[bk+this.uniqueCallbackIdentifier]=n,this.myIFrame=Rd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Te("frame writing exception"),l.stack&&Te(l.stack),Te(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Te("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Gy]=this.myID,e[qy]=this.myPW,e[Yy]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Jy+r.length<=Qy;){const o=this.pendingSegs.shift();r=r+"&"+Mk+i+"="+o.seg+"&"+Fk+i+"="+o.ts+"&"+Uk+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(jk)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Te("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const Hk=16384,Wk=45e3;let Qo=null;typeof MozWebSocket<"u"?Qo=MozWebSocket:typeof WebSocket<"u"&&(Qo=WebSocket);class dt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=vs(this.connId),this.stats_=kd(n),this.connURL=dt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[My]=Td,typeof location<"u"&&location.hostname&&zy.test(location.hostname)&&(o[Uy]=By),n&&(o[Fy]=n),r&&(o[jy]=r),i&&(o[Ku]=i),s&&(o[$y]=s),Ky(e,Hy,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,zn.set("previous_websocket_failure",!0);try{let r;__(),this.mySock=new Qo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){dt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Qo!==null&&!dt.forceDisallow_}static previouslyFailed(){return zn.isInMemoryStorage||zn.get("previous_websocket_failure")===!0}markConnectionHealthy(){zn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=es(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=by(n,Hk);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Wk))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}dt.responsesRequiredToBeHealthy=2;dt.healthyTimeout=3e4;/**
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
 */class ss{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ir,dt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=dt&&dt.isAvailable();let r=n&&!dt.previouslyFailed();if(e.webSocketOnly&&(n||Ke("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[dt];else{const i=this.transports_=[];for(const s of ss.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ss.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ss.globalTransportInitialized_=!1;/**
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
 */const Vk=6e4,Kk=5e3,Gk=10*1024,qk=100*1024,Na="t",op="d",Yk="s",lp="r",Qk="e",ap="o",up="a",cp="n",dp="p",Jk="h";class Xk{constructor(e,n,r,i,s,o,l,a,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=vs("c:"+this.id+":"),this.transportManager_=new ss(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Di(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>qk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Gk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Na in e){const n=e[Na];n===up?this.upgradeIfSecondaryHealthy_():n===lp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ap&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=hi("t",e),r=hi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:dp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:up,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:cp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=hi("t",e),r=hi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=hi(Na,e);if(op in e){const r=e[op];if(n===Jk){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===cp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Yk?this.onConnectionShutdown_(r):n===lp?this.onReset_(r):n===Qk?Vu("Server Error: "+r):n===ap?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Vu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Td!==r&&Ke("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Di(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Vk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Di(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Kk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:dp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(zn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Xy{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Zy{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Jo extends Zy{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!od()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Jo}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const fp=32,hp=768;class Z{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function K(){return new Z("")}function U(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Cn(t){return t.pieces_.length-t.pieceNum_}function J(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Z(t.pieces_,e)}function ev(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Zk(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function tv(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function nv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Z(e,0)}function me(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Z)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Z(n,0)}function M(t){return t.pieceNum_>=t.pieces_.length}function et(t,e){const n=U(t),r=U(e);if(n===null)return e;if(n===r)return et(J(t),J(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function rv(t,e){if(Cn(t)!==Cn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ft(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Cn(t)>Cn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class eR{constructor(e,n){this.errorPrefix_=n,this.parts_=tv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=El(this.parts_[r]);iv(this)}}function tR(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=El(e),iv(t)}function nR(t){const e=t.parts_.pop();t.byteLength_-=El(e),t.parts_.length>0&&(t.byteLength_-=1)}function iv(t){if(t.byteLength_>hp)throw new Error(t.errorPrefix_+"has a key path longer than "+hp+" bytes ("+t.byteLength_+").");if(t.parts_.length>fp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+fp+") or object contains a cycle "+Dn(t))}function Dn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Nd extends Zy{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Nd}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const pi=1e3,rR=60*5*1e3,pp=30*1e3,iR=1.3,sR=3e4,oR="server_kill",mp=3;class zt extends Xy{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=zt.nextPersistentConnectionId_++,this.log_=vs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=pi,this.maxReconnectDelay_=rR,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!__())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Nd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Jo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ve(s)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new sd,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;zt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Yt(e,"w")){const r=Hr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ke(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||vS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=pp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=yS(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ve(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Vu("Unrecognized action received from server: "+ve(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=pi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=pi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>sR&&(this.reconnectDelay_=pi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*iR)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+zt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(d){C(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Te("getToken() completed but was canceled"):(Te("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,l=new Xk(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Ke(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(oR)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Ke(d),a())}}}interrupt(e){Te("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Te("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Du(this.interruptReasons_)&&(this.reconnectDelay_=pi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Cd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Z(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Te("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=mp&&(this.reconnectDelay_=pp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Te("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=mp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Py.replace(/\./g,"-")]=1,od()?e["framework.cordova"]=1:g_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Jo.getInstance().currentlyOnline();return Du(this.interruptReasons_)&&e}}zt.nextPersistentConnectionId_=0;zt.nextConnectionId_=0;/**
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
 */class B{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new B(e,n)}}/**
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
 */class Nl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new B(Vr,e),i=new B(Vr,n);return this.compare(r,i)!==0}minPost(){return B.MIN}}/**
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
 */let Ks;class sv extends Nl{static get __EMPTY_NODE(){return Ks}static set __EMPTY_NODE(e){Ks=e}compare(e,n){return ei(e.name,n.name)}isDefinedOn(e){throw Jr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return B.MIN}maxPost(){return new B(er,Ks)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new B(e,Ks)}toString(){return".key"}}const Lr=new sv;/**
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
 */class Gs{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class pe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??pe.RED,this.left=i??Fe.EMPTY_NODE,this.right=s??Fe.EMPTY_NODE}copy(e,n,r,i,s){return new pe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Fe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Fe.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}pe.RED=!0;pe.BLACK=!1;class lR{copy(e,n,r,i,s){return this}insert(e,n,r){return new pe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Fe{constructor(e,n=Fe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Fe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,pe.BLACK,null,null))}remove(e){return new Fe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,pe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Gs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Gs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Gs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Gs(this.root_,null,this.comparator_,!0,e)}}Fe.EMPTY_NODE=new lR;/**
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
 */function aR(t,e){return ei(t.name,e.name)}function Ad(t,e){return ei(t,e)}/**
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
 */let Gu;function uR(t){Gu=t}const ov=function(t){return typeof t=="number"?"number:"+Ly(t):"string:"+t},lv=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Yt(e,".sv"),"Priority must be a string or number.")}else C(t===Gu||t.isEmpty(),"priority of unexpected type.");C(t===Gu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let gp;class fe{constructor(e,n=fe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),lv(this.priorityNode_)}static set __childrenNodeConstructor(e){gp=e}static get __childrenNodeConstructor(){return gp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new fe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:fe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return M(e)?this:U(e)===".priority"?this.priorityNode_:fe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:fe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=U(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(C(r!==".priority"||Cn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,fe.__childrenNodeConstructor.EMPTY_NODE.updateChild(J(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ov(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Ly(this.value_):e+=this.value_,this.lazyHash_=Oy(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===fe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof fe.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=fe.VALUE_TYPE_ORDER.indexOf(n),s=fe.VALUE_TYPE_ORDER.indexOf(r);return C(i>=0,"Unknown leaf type: "+n),C(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}fe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let av,uv;function cR(t){av=t}function dR(t){uv=t}class fR extends Nl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ei(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return B.MIN}maxPost(){return new B(er,new fe("[PRIORITY-POST]",uv))}makePost(e,n){const r=av(e);return new B(n,new fe("[PRIORITY-POST]",r))}toString(){return".priority"}}const Re=new fR;/**
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
 */const hR=Math.log(2);class pR{constructor(e){const n=s=>parseInt(Math.log(s)/hR,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Xo=function(t,e,n,r){t.sort(e);const i=function(a,u){const c=u-a;let d,f;if(c===0)return null;if(c===1)return d=t[a],f=n?n(d):d,new pe(f,d.node,pe.BLACK,null,null);{const _=parseInt(c/2,10)+a,m=i(a,_),y=i(_+1,u);return d=t[_],f=n?n(d):d,new pe(f,d.node,pe.BLACK,m,y)}},s=function(a){let u=null,c=null,d=t.length;const f=function(m,y){const I=d-m,p=d;d-=m;const h=i(I+1,p),g=t[I],w=n?n(g):g;_(new pe(w,g.node,y,null,h))},_=function(m){u?(u.left=m,u=m):(c=m,u=m)};for(let m=0;m<a.count;++m){const y=a.nextBitIsOne(),I=Math.pow(2,a.count-(m+1));y?f(I,pe.BLACK):(f(I,pe.BLACK),f(I,pe.RED))}return c},o=new pR(t.length),l=s(o);return new Fe(r||e,l)};/**
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
 */let Aa;const cr={};class Ut{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return C(cr&&Re,"ChildrenNode.ts has not been loaded"),Aa=Aa||new Ut({".priority":cr},{".priority":Re}),Aa}get(e){const n=Hr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Fe?n:null}hasIndex(e){return Yt(this.indexSet_,e.toString())}addIndex(e,n){C(e!==Lr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(B.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Xo(r,e.getCompare()):l=cr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const c=Object.assign({},this.indexes_);return c[a]=l,new Ut(c,u)}addToIndexes(e,n){const r=jo(this.indexes_,(i,s)=>{const o=Hr(this.indexSet_,s);if(C(o,"Missing index implementation for "+s),i===cr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(B.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Xo(l,o.getCompare())}else return cr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new B(e.name,l))),a.insert(e,e.node)}});return new Ut(r,this.indexSet_)}removeFromIndexes(e,n){const r=jo(this.indexes_,i=>{if(i===cr)return i;{const s=n.get(e.name);return s?i.remove(new B(e.name,s)):i}});return new Ut(r,this.indexSet_)}}/**
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
 */let mi;class H{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&lv(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return mi||(mi=new H(new Fe(Ad),null,Ut.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||mi}updatePriority(e){return this.children_.isEmpty()?this:new H(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?mi:n}}getChild(e){const n=U(e);return n===null?this:this.getImmediateChild(n).getChild(J(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new B(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?mi:this.priorityNode_;return new H(i,o,s)}}updateChild(e,n){const r=U(e);if(r===null)return n;{C(U(e)!==".priority"||Cn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(J(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Re,(o,l)=>{n[o]=l.val(e),r++,s&&H.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ov(this.getPriority().val())+":"),this.forEachChild(Re,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Oy(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new B(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new B(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new B(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,B.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,B.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Es?-1:0}withIndex(e){if(e===Lr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new H(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Lr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Re),i=n.getIterator(Re);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Lr?null:this.indexMap_.get(e.toString())}}H.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class mR extends H{constructor(){super(new Fe(Ad),H.EMPTY_NODE,Ut.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return H.EMPTY_NODE}isEmpty(){return!1}}const Es=new mR;Object.defineProperties(B,{MIN:{value:new B(Vr,H.EMPTY_NODE)},MAX:{value:new B(er,Es)}});sv.__EMPTY_NODE=H.EMPTY_NODE;fe.__childrenNodeConstructor=H;uR(Es);dR(Es);/**
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
 */const gR=!0;function ke(t,e=null){if(t===null)return H.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new fe(n,ke(e))}if(!(t instanceof Array)&&gR){const n=[];let r=!1;if(ot(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ke(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new B(o,a)))}}),n.length===0)return H.EMPTY_NODE;const s=Xo(n,aR,o=>o.name,Ad);if(r){const o=Xo(n,Re.getCompare());return new H(s,ke(e),new Ut({".priority":o},{".priority":Re}))}else return new H(s,ke(e),Ut.Default)}else{let n=H.EMPTY_NODE;return ot(t,(r,i)=>{if(Yt(t,r)&&r.substring(0,1)!=="."){const s=ke(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ke(e))}}cR(ke);/**
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
 */class _R extends Nl{constructor(e){super(),this.indexPath_=e,C(!M(e)&&U(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ei(e.name,n.name):s}makePost(e,n){const r=ke(e),i=H.EMPTY_NODE.updateChild(this.indexPath_,r);return new B(n,i)}maxPost(){const e=H.EMPTY_NODE.updateChild(this.indexPath_,Es);return new B(er,e)}toString(){return tv(this.indexPath_,0).join("/")}}/**
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
 */class yR extends Nl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ei(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return B.MIN}maxPost(){return B.MAX}makePost(e,n){const r=ke(e);return new B(n,r)}toString(){return".value"}}const vR=new yR;/**
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
 */function wR(t){return{type:"value",snapshotNode:t}}function ER(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function SR(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function _p(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function IR(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Pd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Re}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Vr}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:er}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Re}copy(){const e=new Pd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function yp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Re?n="$priority":t.index_===vR?n="$value":t.index_===Lr?n="$key":(C(t.index_ instanceof _R,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ve(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ve(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ve(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ve(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ve(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function vp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Re&&(e.i=t.index_.toString()),e}/**
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
 */class Zo extends Xy{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=vs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Zo.getListenId_(e,r),l={};this.listens_[o]=l;const a=yp(e._queryParams);this.restRequest_(s+".json",a,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Hr(this.listens_,o)===l){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=Zo.getListenId_(e,n);delete this.listens_[r]}get(e){const n=yp(e._queryParams),r=e._path.toString(),i=new sd;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Xr(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=es(l.responseText)}catch{Ke("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Ke("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class CR{constructor(){this.rootNode_=H.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function el(){return{value:null,children:new Map}}function cv(t,e,n){if(M(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=U(e);t.children.has(r)||t.children.set(r,el());const i=t.children.get(r);e=J(e),cv(i,e,n)}}function qu(t,e,n){t.value!==null?n(e,t.value):TR(t,(r,i)=>{const s=new Z(e.toString()+"/"+r);qu(i,s,n)})}function TR(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class kR{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ot(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const wp=10*1e3,RR=30*1e3,NR=5*60*1e3;class AR{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new kR(e);const r=wp+(RR-wp)*Math.random();Di(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;ot(e,(i,s)=>{s>0&&Yt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Di(this.reportStats_.bind(this),Math.floor(Math.random()*2*NR))}}/**
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
 */var Et;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Et||(Et={}));function dv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function fv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function hv(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class tl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Et.ACK_USER_WRITE,this.source=dv()}operationForChild(e){if(M(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Z(e));return new tl(K(),n,this.revert)}}else return C(U(this.path)===e,"operationForChild called for unrelated child."),new tl(J(this.path),this.affectedTree,this.revert)}}/**
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
 */class tr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Et.OVERWRITE}operationForChild(e){return M(this.path)?new tr(this.source,K(),this.snap.getImmediateChild(e)):new tr(this.source,J(this.path),this.snap)}}/**
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
 */class os{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Et.MERGE}operationForChild(e){if(M(this.path)){const n=this.children.subtree(new Z(e));return n.isEmpty()?null:n.value?new tr(this.source,K(),n.value):new os(this.source,K(),n)}else return C(U(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new os(this.source,J(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class xd{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(M(e))return this.isFullyInitialized()&&!this.filtered_;const n=U(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function PR(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(IR(o.childName,o.snapshotNode))}),gi(t,i,"child_removed",e,r,n),gi(t,i,"child_added",e,r,n),gi(t,i,"child_moved",s,r,n),gi(t,i,"child_changed",e,r,n),gi(t,i,"value",e,r,n),i}function gi(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>OR(t,l,a)),o.forEach(l=>{const a=xR(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function xR(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function OR(t,e,n){if(e.childName==null||n.childName==null)throw Jr("Should only compare child_ events.");const r=new B(e.childName,e.snapshotNode),i=new B(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function pv(t,e){return{eventCache:t,serverCache:e}}function bi(t,e,n,r){return pv(new xd(e,n,r),t.serverCache)}function mv(t,e,n,r){return pv(t.eventCache,new xd(e,n,r))}function Yu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function nr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Pa;const DR=()=>(Pa||(Pa=new Fe(vk)),Pa);class Q{constructor(e,n=DR()){this.value=e,this.children=n}static fromObject(e){let n=new Q(null);return ot(e,(r,i)=>{n=n.set(new Z(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:K(),value:this.value};if(M(e))return null;{const r=U(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(J(e),n);return s!=null?{path:me(new Z(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(M(e))return this;{const n=U(e),r=this.children.get(n);return r!==null?r.subtree(J(e)):new Q(null)}}set(e,n){if(M(e))return new Q(n,this.children);{const r=U(e),s=(this.children.get(r)||new Q(null)).set(J(e),n),o=this.children.insert(r,s);return new Q(this.value,o)}}remove(e){if(M(e))return this.children.isEmpty()?new Q(null):new Q(null,this.children);{const n=U(e),r=this.children.get(n);if(r){const i=r.remove(J(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Q(null):new Q(this.value,s)}else return this}}get(e){if(M(e))return this.value;{const n=U(e),r=this.children.get(n);return r?r.get(J(e)):null}}setTree(e,n){if(M(e))return n;{const r=U(e),s=(this.children.get(r)||new Q(null)).setTree(J(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Q(this.value,o)}}fold(e){return this.fold_(K(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(me(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,K(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(M(e))return null;{const s=U(e),o=this.children.get(s);return o?o.findOnPath_(J(e),me(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,K(),n)}foreachOnPath_(e,n,r){if(M(e))return this;{this.value&&r(n,this.value);const i=U(e),s=this.children.get(i);return s?s.foreachOnPath_(J(e),me(n,i),r):new Q(null)}}foreach(e){this.foreach_(K(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(me(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class mt{constructor(e){this.writeTree_=e}static empty(){return new mt(new Q(null))}}function Li(t,e,n){if(M(e))return new mt(new Q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=et(i,e);return s=s.updateChild(o,n),new mt(t.writeTree_.set(i,s))}else{const i=new Q(n),s=t.writeTree_.setTree(e,i);return new mt(s)}}}function Ep(t,e,n){let r=t;return ot(n,(i,s)=>{r=Li(r,me(e,i),s)}),r}function Sp(t,e){if(M(e))return mt.empty();{const n=t.writeTree_.setTree(e,new Q(null));return new mt(n)}}function Qu(t,e){return lr(t,e)!=null}function lr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(et(n.path,e)):null}function Ip(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Re,(r,i)=>{e.push(new B(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new B(r,i.value))}),e}function En(t,e){if(M(e))return t;{const n=lr(t,e);return n!=null?new mt(new Q(n)):new mt(t.writeTree_.subtree(e))}}function Ju(t){return t.writeTree_.isEmpty()}function Kr(t,e){return gv(K(),t.writeTree_,e)}function gv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(C(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=gv(me(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(me(t,".priority"),r)),n}}/**
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
 */function _v(t,e){return Sv(e,t)}function bR(t,e,n,r,i){C(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Li(t.visibleWrites,e,n)),t.lastWriteId=r}function LR(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function MR(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&FR(l,r.path)?i=!1:ft(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return UR(t),!0;if(r.snap)t.visibleWrites=Sp(t.visibleWrites,r.path);else{const l=r.children;ot(l,a=>{t.visibleWrites=Sp(t.visibleWrites,me(r.path,a))})}return!0}else return!1}function FR(t,e){if(t.snap)return ft(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ft(me(t.path,n),e))return!0;return!1}function UR(t){t.visibleWrites=yv(t.allWrites,BR,K()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function BR(t){return t.visible}function yv(t,e,n){let r=mt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)ft(n,o)?(l=et(n,o),r=Li(r,l,s.snap)):ft(o,n)&&(l=et(o,n),r=Li(r,K(),s.snap.getChild(l)));else if(s.children){if(ft(n,o))l=et(n,o),r=Ep(r,l,s.children);else if(ft(o,n))if(l=et(o,n),M(l))r=Ep(r,K(),s.children);else{const a=Hr(s.children,U(l));if(a){const u=a.getChild(J(l));r=Li(r,K(),u)}}}else throw Jr("WriteRecord should have .snap or .children")}}return r}function vv(t,e,n,r,i){if(!r&&!i){const s=lr(t.visibleWrites,e);if(s!=null)return s;{const o=En(t.visibleWrites,e);if(Ju(o))return n;if(n==null&&!Qu(o,K()))return null;{const l=n||H.EMPTY_NODE;return Kr(o,l)}}}else{const s=En(t.visibleWrites,e);if(!i&&Ju(s))return n;if(!i&&n==null&&!Qu(s,K()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(ft(u.path,e)||ft(e,u.path))},l=yv(t.allWrites,o,e),a=n||H.EMPTY_NODE;return Kr(l,a)}}}function zR(t,e,n){let r=H.EMPTY_NODE;const i=lr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Re,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=En(t.visibleWrites,e);return n.forEachChild(Re,(o,l)=>{const a=Kr(En(s,new Z(o)),l);r=r.updateImmediateChild(o,a)}),Ip(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=En(t.visibleWrites,e);return Ip(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function jR(t,e,n,r,i){C(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=me(e,n);if(Qu(t.visibleWrites,s))return null;{const o=En(t.visibleWrites,s);return Ju(o)?i.getChild(n):Kr(o,i.getChild(n))}}function $R(t,e,n,r){const i=me(e,n),s=lr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=En(t.visibleWrites,i);return Kr(o,r.getNode().getImmediateChild(n))}else return null}function HR(t,e){return lr(t.visibleWrites,e)}function WR(t,e,n,r,i,s,o){let l;const a=En(t.visibleWrites,e),u=lr(a,K());if(u!=null)l=u;else if(n!=null)l=Kr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const c=[],d=o.getCompare(),f=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let _=f.getNext();for(;_&&c.length<i;)d(_,r)!==0&&c.push(_),_=f.getNext();return c}else return[]}function VR(){return{visibleWrites:mt.empty(),allWrites:[],lastWriteId:-1}}function Xu(t,e,n,r){return vv(t.writeTree,t.treePath,e,n,r)}function wv(t,e){return zR(t.writeTree,t.treePath,e)}function Cp(t,e,n,r){return jR(t.writeTree,t.treePath,e,n,r)}function nl(t,e){return HR(t.writeTree,me(t.treePath,e))}function KR(t,e,n,r,i,s){return WR(t.writeTree,t.treePath,e,n,r,i,s)}function Od(t,e,n){return $R(t.writeTree,t.treePath,e,n)}function Ev(t,e){return Sv(me(t.treePath,e),t.writeTree)}function Sv(t,e){return{treePath:t,writeTree:e}}/**
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
 */class GR{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,_p(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,SR(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ER(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,_p(r,e.snapshotNode,i.oldSnap));else throw Jr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class qR{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Iv=new qR;class Dd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new xd(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Od(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:nr(this.viewCache_),s=KR(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function YR(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function QR(t,e,n,r,i){const s=new GR;let o,l;if(n.type===Et.OVERWRITE){const u=n;u.source.fromUser?o=Zu(t,e,u.path,u.snap,r,i,s):(C(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!M(u.path),o=rl(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===Et.MERGE){const u=n;u.source.fromUser?o=XR(t,e,u.path,u.children,r,i,s):(C(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=ec(t,e,u.path,u.children,r,i,l,s))}else if(n.type===Et.ACK_USER_WRITE){const u=n;u.revert?o=tN(t,e,u.path,r,i,s):o=ZR(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Et.LISTEN_COMPLETE)o=eN(t,e,n.path,r,s);else throw Jr("Unknown operation type: "+n.type);const a=s.getChanges();return JR(e,o,a),{viewCache:o,changes:a}}function JR(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Yu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(wR(Yu(e)))}}function Cv(t,e,n,r,i,s){const o=e.eventCache;if(nl(r,n)!=null)return e;{let l,a;if(M(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=nr(e),c=u instanceof H?u:H.EMPTY_NODE,d=wv(r,c);l=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Xu(r,nr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=U(n);if(u===".priority"){C(Cn(n)===1,"Can't have a priority with additional path components");const c=o.getNode();a=e.serverCache.getNode();const d=Cp(r,n,c,a);d!=null?l=t.filter.updatePriority(c,d):l=o.getNode()}else{const c=J(n);let d;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const f=Cp(r,n,o.getNode(),a);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=Od(r,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,c,i,s):l=o.getNode()}}return bi(e,l,o.isFullyInitialized()||M(n),t.filter.filtersNodes())}}function rl(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(M(n))u=c.updateFullNode(a.getNode(),r,null);else if(c.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,r);u=c.updateFullNode(a.getNode(),_,null)}else{const _=U(n);if(!a.isCompleteForPath(n)&&Cn(n)>1)return e;const m=J(n),I=a.getNode().getImmediateChild(_).updateChild(m,r);_===".priority"?u=c.updatePriority(a.getNode(),I):u=c.updateChild(a.getNode(),_,I,m,Iv,null)}const d=mv(e,u,a.isFullyInitialized()||M(n),c.filtersNodes()),f=new Dd(i,d,s);return Cv(t,d,n,i,f,l)}function Zu(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const c=new Dd(i,e,s);if(M(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=bi(e,u,!0,t.filter.filtersNodes());else{const d=U(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=bi(e,u,l.isFullyInitialized(),l.isFiltered());else{const f=J(n),_=l.getNode().getImmediateChild(d);let m;if(M(f))m=r;else{const y=c.getCompleteChild(d);y!=null?ev(f)===".priority"&&y.getChild(nv(f)).isEmpty()?m=y:m=y.updateChild(f,r):m=H.EMPTY_NODE}if(_.equals(m))a=e;else{const y=t.filter.updateChild(l.getNode(),d,m,f,c,o);a=bi(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Tp(t,e){return t.eventCache.isCompleteForChild(e)}function XR(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const c=me(n,a);Tp(e,U(c))&&(l=Zu(t,l,c,u,i,s,o))}),r.foreach((a,u)=>{const c=me(n,a);Tp(e,U(c))||(l=Zu(t,l,c,u,i,s,o))}),l}function kp(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function ec(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;M(n)?u=r:u=new Q(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),m=kp(t,_,f);a=rl(t,a,new Z(d),m,i,s,o,l)}}),u.children.inorderTraversal((d,f)=>{const _=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!_){const m=e.serverCache.getNode().getImmediateChild(d),y=kp(t,m,f);a=rl(t,a,new Z(d),y,i,s,o,l)}}),a}function ZR(t,e,n,r,i,s,o){if(nl(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(M(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return rl(t,e,n,a.getNode().getChild(n),i,s,l,o);if(M(n)){let u=new Q(null);return a.getNode().forEachChild(Lr,(c,d)=>{u=u.set(new Z(c),d)}),ec(t,e,n,u,i,s,l,o)}else return e}else{let u=new Q(null);return r.foreach((c,d)=>{const f=me(n,c);a.isCompleteForPath(f)&&(u=u.set(c,a.getNode().getChild(f)))}),ec(t,e,n,u,i,s,l,o)}}function eN(t,e,n,r,i){const s=e.serverCache,o=mv(e,s.getNode(),s.isFullyInitialized()||M(n),s.isFiltered());return Cv(t,o,n,r,Iv,i)}function tN(t,e,n,r,i,s){let o;if(nl(r,n)!=null)return e;{const l=new Dd(r,e,i),a=e.eventCache.getNode();let u;if(M(n)||U(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Xu(r,nr(e));else{const d=e.serverCache.getNode();C(d instanceof H,"serverChildren would be complete if leaf node"),c=wv(r,d)}c=c,u=t.filter.updateFullNode(a,c,s)}else{const c=U(n);let d=Od(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=a.getImmediateChild(c)),d!=null?u=t.filter.updateChild(a,c,d,J(n),l,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(a,c,H.EMPTY_NODE,J(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Xu(r,nr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||nl(r,K())!=null,bi(e,u,o,t.filter.filtersNodes())}}function nN(t,e){const n=nr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!M(e)&&!n.getImmediateChild(U(e)).isEmpty())?n.getChild(e):null}function Rp(t,e,n,r){e.type===Et.MERGE&&e.source.queryId!==null&&(C(nr(t.viewCache_),"We should always have a full cache before handling merges"),C(Yu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=QR(t.processor_,i,e,n,r);return YR(t.processor_,s.viewCache),C(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,rN(t,s.changes,s.viewCache.eventCache.getNode(),null)}function rN(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return PR(t.eventGenerator_,e,n,i)}/**
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
 */let Np;function iN(t){C(!Np,"__referenceConstructor has already been defined"),Np=t}function bd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return C(s!=null,"SyncTree gave us an op for an invalid query."),Rp(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Rp(o,e,n,r));return s}}function Ld(t,e){let n=null;for(const r of t.views.values())n=n||nN(r,e);return n}/**
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
 */let Ap;function sN(t){C(!Ap,"__referenceConstructor has already been defined"),Ap=t}class Pp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Q(null),this.pendingWriteTree_=VR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function oN(t,e,n,r,i){return bR(t.pendingWriteTree_,e,n,r,i),i?Pl(t,new tr(dv(),e,n)):[]}function Cr(t,e,n=!1){const r=LR(t.pendingWriteTree_,e);if(MR(t.pendingWriteTree_,e)){let s=new Q(null);return r.snap!=null?s=s.set(K(),!0):ot(r.children,o=>{s=s.set(new Z(o),!0)}),Pl(t,new tl(r.path,s,n))}else return[]}function Al(t,e,n){return Pl(t,new tr(fv(),e,n))}function lN(t,e,n){const r=Q.fromObject(n);return Pl(t,new os(fv(),e,r))}function aN(t,e,n,r){const i=Nv(t,r);if(i!=null){const s=Av(i),o=s.path,l=s.queryId,a=et(o,e),u=new tr(hv(l),a,n);return Pv(t,o,u)}else return[]}function uN(t,e,n,r){const i=Nv(t,r);if(i){const s=Av(i),o=s.path,l=s.queryId,a=et(o,e),u=Q.fromObject(n),c=new os(hv(l),a,u);return Pv(t,o,c)}else return[]}function Tv(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=et(o,e),u=Ld(l,a);if(u)return u});return vv(i,e,s,n,!0)}function Pl(t,e){return kv(e,t.syncPointTree_,null,_v(t.pendingWriteTree_,K()))}function kv(t,e,n,r){if(M(t.path))return Rv(t,e,n,r);{const i=e.get(K());n==null&&i!=null&&(n=Ld(i,K()));let s=[];const o=U(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,c=Ev(r,o);s=s.concat(kv(l,a,u,c))}return i&&(s=s.concat(bd(i,t,r,n))),s}}function Rv(t,e,n,r){const i=e.get(K());n==null&&i!=null&&(n=Ld(i,K()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=Ev(r,o),c=t.operationForChild(o);c&&(s=s.concat(Rv(c,l,a,u)))}),i&&(s=s.concat(bd(i,t,r,n))),s}function Nv(t,e){return t.tagToQueryMap.get(e)}function Av(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Z(t.substr(0,e))}}function Pv(t,e,n){const r=t.syncPointTree_.get(e);C(r,"Missing sync point for query tag that we're tracking");const i=_v(t.pendingWriteTree_,e);return bd(r,n,i,null)}/**
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
 */class Md{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Md(n)}node(){return this.node_}}class Fd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=me(this.path_,e);return new Fd(this.syncTree_,n)}node(){return Tv(this.syncTree_,this.path_)}}const cN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},xp=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return dN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return fN(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},dN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},fN=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&C(!1,"Unexpected increment value: "+r);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},hN=function(t,e,n,r){return Ud(e,new Fd(n,t),r)},pN=function(t,e,n){return Ud(t,new Md(e),n)};function Ud(t,e,n){const r=t.getPriority().val(),i=xp(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=xp(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new fe(l,ke(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new fe(i))),o.forEachChild(Re,(l,a)=>{const u=Ud(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
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
 */class Bd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function zd(t,e){let n=e instanceof Z?e:new Z(e),r=t,i=U(n);for(;i!==null;){const s=Hr(r.node.children,i)||{children:{},childCount:0};r=new Bd(i,r,s),n=J(n),i=U(n)}return r}function ti(t){return t.node.value}function xv(t,e){t.node.value=e,tc(t)}function Ov(t){return t.node.childCount>0}function mN(t){return ti(t)===void 0&&!Ov(t)}function xl(t,e){ot(t.node.children,(n,r)=>{e(new Bd(n,t,r))})}function Dv(t,e,n,r){n&&!r&&e(t),xl(t,i=>{Dv(i,e,!0,r)}),n&&r&&e(t)}function gN(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ss(t){return new Z(t.parent===null?t.name:Ss(t.parent)+"/"+t.name)}function tc(t){t.parent!==null&&_N(t.parent,t.name,t)}function _N(t,e,n){const r=mN(n),i=Yt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,tc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,tc(t))}/**
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
 */const yN=/[\[\].#$\/\u0000-\u001F\u007F]/,vN=/[\[\].#$\u0000-\u001F\u007F]/,xa=10*1024*1024,bv=function(t){return typeof t=="string"&&t.length!==0&&!yN.test(t)},wN=function(t){return typeof t=="string"&&t.length!==0&&!vN.test(t)},EN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),wN(t)},Lv=function(t,e,n){const r=n instanceof Z?new eR(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Dn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Dn(r)+" with contents = "+e.toString());if(Dy(e))throw new Error(t+"contains "+e.toString()+" "+Dn(r));if(typeof e=="string"&&e.length>xa/3&&El(e)>xa)throw new Error(t+"contains a string greater than "+xa+" utf8 bytes "+Dn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(ot(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!bv(o)))throw new Error(t+" contains an invalid key ("+o+") "+Dn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);tR(r,o),Lv(t,l,r),nR(r)}),i&&s)throw new Error(t+' contains ".value" child '+Dn(r)+" in addition to actual children.")}},SN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!bv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!EN(n))throw new Error(CS(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class IN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function CN(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!rv(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function ar(t,e,n){CN(t,n),TN(t,r=>ft(r,e)||ft(e,r))}function TN(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(kN(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function kN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Wn&&Te("event: "+n.toString()),ws(r)}}}/**
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
 */const RN="repo_interrupt",NN=25;class AN{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new IN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=el(),this.transactionQueueTree_=new Bd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function PN(t,e,n){if(t.stats_=kd(t.repoInfo_),t.forceRestClient_||Tk())t.server_=new Zo(t.repoInfo_,(r,i,s,o)=>{Op(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Dp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ve(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new zt(t.repoInfo_,e,(r,i,s,o)=>{Op(t,r,i,s,o)},r=>{Dp(t,r)},r=>{ON(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=Pk(t.repoInfo_,()=>new AR(t.stats_,t.server_)),t.infoData_=new CR,t.infoSyncTree_=new Pp({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Al(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),jd(t,"connected",!1),t.serverSyncTree_=new Pp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);ar(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function xN(t){const n=t.infoData_.getNode(new Z(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Mv(t){return cN({timestamp:xN(t)})}function Op(t,e,n,r,i){t.dataUpdateCount++;const s=new Z(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=jo(n,u=>ke(u));o=uN(t.serverSyncTree_,s,a,i)}else{const a=ke(n);o=aN(t.serverSyncTree_,s,a,i)}else if(r){const a=jo(n,u=>ke(u));o=lN(t.serverSyncTree_,s,a)}else{const a=ke(n);o=Al(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Hd(t,s)),ar(t.eventQueue_,l,o)}function Dp(t,e){jd(t,"connected",e),e===!1&&bN(t)}function ON(t,e){ot(e,(n,r)=>{jd(t,n,r)})}function jd(t,e,n){const r=new Z("/.info/"+e),i=ke(n);t.infoData_.updateSnapshot(r,i);const s=Al(t.infoSyncTree_,r,i);ar(t.eventQueue_,r,s)}function DN(t){return t.nextWriteId_++}function bN(t){Fv(t,"onDisconnectEvents");const e=Mv(t),n=el();qu(t.onDisconnect_,K(),(i,s)=>{const o=hN(i,s,t.serverSyncTree_,e);cv(n,i,o)});let r=[];qu(n,K(),(i,s)=>{r=r.concat(Al(t.serverSyncTree_,i,s));const o=UN(t,i);Hd(t,o)}),t.onDisconnect_=el(),ar(t.eventQueue_,K(),r)}function LN(t){t.persistentConnection_&&t.persistentConnection_.interrupt(RN)}function Fv(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Te(n,...e)}function Uv(t,e,n){return Tv(t.serverSyncTree_,e,n)||H.EMPTY_NODE}function $d(t,e=t.transactionQueueTree_){if(e||Ol(t,e),ti(e)){const n=zv(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&MN(t,Ss(e),n)}else Ov(e)&&xl(e,n=>{$d(t,n)})}function MN(t,e,n){const r=n.map(u=>u.currentWriteId),i=Uv(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];C(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=et(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Fv(t,"transaction put response",{path:a.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(Cr(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Ol(t,zd(t.transactionQueueTree_,e)),$d(t,t.transactionQueueTree_),ar(t.eventQueue_,e,c);for(let f=0;f<d.length;f++)ws(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Ke("transaction at "+a.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Hd(t,e)}},o)}function Hd(t,e){const n=Bv(t,e),r=Ss(n),i=zv(t,n);return FN(t,i,r),r}function FN(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=et(n,a.path);let c=!1,d;if(C(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)c=!0,d=a.abortReason,i=i.concat(Cr(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=NN)c=!0,d="maxretry",i=i.concat(Cr(t.serverSyncTree_,a.currentWriteId,!0));else{const f=Uv(t,a.path,o);a.currentInputSnapshot=f;const _=e[l].update(f.val());if(_!==void 0){Lv("transaction failed: Data returned ",_,a.path);let m=ke(_);typeof _=="object"&&_!=null&&Yt(_,".priority")||(m=m.updatePriority(f.getPriority()));const I=a.currentWriteId,p=Mv(t),h=pN(m,f,p);a.currentOutputSnapshotRaw=m,a.currentOutputSnapshotResolved=h,a.currentWriteId=DN(t),o.splice(o.indexOf(I),1),i=i.concat(oN(t.serverSyncTree_,a.path,h,a.currentWriteId,a.applyLocally)),i=i.concat(Cr(t.serverSyncTree_,I,!0))}else c=!0,d="nodata",i=i.concat(Cr(t.serverSyncTree_,a.currentWriteId,!0))}ar(t.eventQueue_,n,i),i=[],c&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}Ol(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)ws(r[l]);$d(t,t.transactionQueueTree_)}function Bv(t,e){let n,r=t.transactionQueueTree_;for(n=U(e);n!==null&&ti(r)===void 0;)r=zd(r,n),e=J(e),n=U(e);return r}function zv(t,e){const n=[];return jv(t,e,n),n.sort((r,i)=>r.order-i.order),n}function jv(t,e,n){const r=ti(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);xl(e,i=>{jv(t,i,n)})}function Ol(t,e){const n=ti(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,xv(e,n.length>0?n:void 0)}xl(e,r=>{Ol(t,r)})}function UN(t,e){const n=Ss(Bv(t,e)),r=zd(t.transactionQueueTree_,e);return gN(r,i=>{Oa(t,i)}),Oa(t,r),Dv(r,i=>{Oa(t,i)}),n}function Oa(t,e){const n=ti(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Cr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?xv(e,void 0):n.length=s+1,ar(t.eventQueue_,Ss(e),i);for(let o=0;o<r.length;o++)ws(r[o])}}/**
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
 */function BN(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function zN(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ke(`Invalid query segment '${n}' in query '${t}'`)}return e}const bp=function(t,e){const n=jN(t),r=n.namespace;n.domain==="firebase.com"&&Gt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Gt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||_k();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Vy(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Z(n.pathString)}},jN=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=BN(t.substring(c,d)));const f=zN(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");r=e.substring(0,m).toLowerCase(),n=e.substring(m+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */class Wd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return M(this._path)?null:ev(this._path)}get ref(){return new ni(this._repo,this._path)}get _queryIdentifier(){const e=vp(this._queryParams),n=Cd(e);return n==="{}"?"default":n}get _queryObject(){return vp(this._queryParams)}isEqual(e){if(e=Pt(e),!(e instanceof Wd))return!1;const n=this._repo===e._repo,r=rv(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Zk(this._path)}}class ni extends Wd{constructor(e,n){super(e,n,new Pd,!1)}get parent(){const e=nv(this._path);return e===null?null:new ni(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}iN(ni);sN(ni);/**
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
 */const $N="FIREBASE_DATABASE_EMULATOR_HOST",nc={};let HN=!1;function WN(t,e,n,r){t.repoInfo_=new Vy(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function VN(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Gt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Te("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=bp(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[$N]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=bp(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const c=i&&a?new br(br.OWNER):new Rk(t.name,t.options,e);SN("Invalid Firebase Database URL",o),M(o.path)||Gt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=GN(l,t,c,new kk(t.name,n));return new qN(d,t)}function KN(t,e){const n=nc[e];(!n||n[t.key]!==t)&&Gt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),LN(t),delete n[t.key]}function GN(t,e,n,r){let i=nc[e.name];i||(i={},nc[e.name]=i);let s=i[t.toURLString()];return s&&Gt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new AN(t,HN,n,r),i[t.toURLString()]=s,s}class qN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(PN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ni(this._repo,K())),this._rootInternal}_delete(){return this._rootInternal!==null&&(KN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Gt("Cannot call "+e+" on a deleted database.")}}function $v(t=ud(),e){const n=or(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=dS("database");r&&YN(n,...r)}return n}function YN(t,e,n,r={}){t=Pt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Gt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Gt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new br(br.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:fS(r.mockUserToken,t.app.options.projectId);s=new br(o)}WN(i,e,n,s)}/**
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
 */function QN(t){fk(Zr),Rt(new _t("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return VN(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),nt(tp,np,t),nt(tp,np,"esm2017")}zt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};zt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};QN();function Lp(t){const[e,n]=z.useState("");z.useEffect(()=>{t.value!=null&&n(i(t.value))},[t.value]);const r=s=>{let o=s.target.value;o=o.replace(/[^0-9.]/g,""),o!==""&&(o=i(o)),n(o);const l=parseFloat(o.replace(/[$,]/g,""));isNaN(l)||t.onChange(l)},i=s=>parseFloat(s).toLocaleString("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:2});return P("input",{className:"w-3/4 text-2xl rounded-lg p-2",type:"text",value:e,onChange:r,placeholder:t.placeholder})}const JN=({properties:t})=>{const[e,n]=z.useState(0),r=()=>{e<t.length-1?n(d=>d+1):n(0)},i=()=>{e>0?n(d=>d-1):n(t.length-1)};if(!t||t.length===0)return P("p",{children:"No properties available"});const s=t[e];if(!s){alert("Problem retrieving property data");let d=e+1;n(d),console.log(e)}const{address:o={},details:l={},primary_photo:a,rent:u,sold:c}=s;return G("div",{className:"carousel-container",children:[P("button",{onClick:i,className:"text-2xl hover:bg-indigo-500 w-1/2",children:"Prev"}),G("button",{onClick:r,className:"text-2xl hover:bg-indigo-500 w-1/2",children:["Next (",e+1,"/",t.length,")"]}),G("div",{className:"carousel-card",children:[P("h2",{className:"font-bold",children:[o.line,o.city,o.state,o.zipcode].filter(Boolean).join(", ")}),s.list_price&&G("p",{className:"text-emerald-300 font-semibold",children:["Price: ",new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(Math.round(s.list_price))]}),G("p",{className:"font-bold",children:[l.beds&&`${l.beds} bd`,l.baths&&` | ${l.baths} ba`,l.sqft&&` | ${l.sqft} sqft`]}),l.yearBuilt&&G("p",{className:"font-semibold",children:["Year Built: ",l.yearBuilt]})]}),P("div",{className:"carousel-card flex justify-center items-center",children:a&&P("img",{src:a.href,alt:"Primary Property",className:"object-cover h-80 w-3/4 rounded-lg shadow-xl"})}),ZN(c,s.list_price),XN(u,s.list_price),G("h1",{className:"text-xl text-white text-opacity-80 m-4",children:["Estimated Rent: ",new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(Math.round(u))]}),G("h1",{className:"text-xl text-white text-opacity-80 m-4",children:[o.city,"'s Median Home Value  ",new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(Math.round(c))]})]})},XN=(t,e)=>{const r=t*12/e*100;let i=`${r.toFixed(2)}%`,s="";return r<3?s="text-red-500":r>=3&&r<5?s="text-orange-500":r>=5&&r<=7?s="text-yellow-500":r>7&&(s="text-green-500"),G("p",{className:"text-3xl p-4 m-6 shadow-2xl rounded-xl bg-bland text-white",children:["Rent Yield (ROI): ",P("span",{className:`font-bold ${s}`,children:i})]})},ZN=(t,e)=>{const r=t*.75,i=t*(1+.25);let s="market value",o="text-orange-500";return e<r?(s="undervalued",o="text-green-500"):e>i&&(s="overvalued",o="text-red-500"),G("p",{className:"text-3xl p-4 m-6 shadow-2xl rounded-xl bg-indigo-900 text-white",children:["This property is ",P("span",{className:`font-bold ${o}`,children:s})]})},eA=t=>{try{if(!t||Object.keys(t).length===0)throw new Error("No data available to parse.");const{location:{address:e={}}={},description:n={},list_price:r={},primary_photo:i={},rent:s={},sold:o={}}=t;if(!e||!n||!r)throw new Error("Missing critical property information.");const{line:l,city:a,state_code:u,postal_code:c}=e,{beds:d,baths:f,sqft:_,year_built:m}=n;if(!l||!a||!u||!c)throw new Error("Incomplete address information.");if(d===void 0||f===void 0||_===void 0||m===void 0)throw new Error("Incomplete property specifications.");const y={address:{line:l,city:a,state:u,zipcode:c},details:{beds:d,baths:f,sqft:_,yearBuilt:m}};return y.list_price=r,y.primary_photo=i,y.rent=s,y.sold=o,y}catch(e){return console.error("Error parsing property data: ",e),null}},tA=t=>{try{if(!t||Object.keys(t).length===0)throw new Error("No data available to parse.");const{list_price_min:e=0,list_price_max:n=0,list_price:r=0}=t;return{list_price:r,list_price_min:e,list_price_max:n}}catch(e){return console.error("Error parsing rental data: ",e),null}},nA=t=>{try{if(!t||Object.keys(t).length===0)throw new Error("No data available to parse.");const{list_price_min:e=0,list_price_max:n=0,list_price:r=0}=t;return{list_price:r,list_price_min:e,list_price_max:n}}catch(e){return console.error("Error parsing rental data: ",e),null}};function Hv(t,e){return function(){return t.apply(e,arguments)}}const{toString:rA}=Object.prototype,{getPrototypeOf:Vd}=Object,Dl=(t=>e=>{const n=rA.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),xt=t=>(t=t.toLowerCase(),e=>Dl(e)===t),bl=t=>e=>typeof e===t,{isArray:ri}=Array,ls=bl("undefined");function iA(t){return t!==null&&!ls(t)&&t.constructor!==null&&!ls(t.constructor)&&rt(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Wv=xt("ArrayBuffer");function sA(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Wv(t.buffer),e}const oA=bl("string"),rt=bl("function"),Vv=bl("number"),Ll=t=>t!==null&&typeof t=="object",lA=t=>t===!0||t===!1,co=t=>{if(Dl(t)!=="object")return!1;const e=Vd(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},aA=xt("Date"),uA=xt("File"),cA=xt("Blob"),dA=xt("FileList"),fA=t=>Ll(t)&&rt(t.pipe),hA=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||rt(t.append)&&((e=Dl(t))==="formdata"||e==="object"&&rt(t.toString)&&t.toString()==="[object FormData]"))},pA=xt("URLSearchParams"),mA=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Is(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),ri(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let l;for(r=0;r<o;r++)l=s[r],e.call(null,t[l],l,t)}}function Kv(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const Gv=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),qv=t=>!ls(t)&&t!==Gv;function rc(){const{caseless:t}=qv(this)&&this||{},e={},n=(r,i)=>{const s=t&&Kv(e,i)||i;co(e[s])&&co(r)?e[s]=rc(e[s],r):co(r)?e[s]=rc({},r):ri(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Is(arguments[r],n);return e}const gA=(t,e,n,{allOwnKeys:r}={})=>(Is(e,(i,s)=>{n&&rt(i)?t[s]=Hv(i,n):t[s]=i},{allOwnKeys:r}),t),_A=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),yA=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},vA=(t,e,n,r)=>{let i,s,o;const l={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!l[o]&&(e[o]=t[o],l[o]=!0);t=n!==!1&&Vd(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},wA=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},EA=t=>{if(!t)return null;if(ri(t))return t;let e=t.length;if(!Vv(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},SA=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Vd(Uint8Array)),IA=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},CA=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},TA=xt("HTMLFormElement"),kA=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Mp=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),RA=xt("RegExp"),Yv=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Is(n,(i,s)=>{let o;(o=e(i,s,t))!==!1&&(r[s]=o||i)}),Object.defineProperties(t,r)},NA=t=>{Yv(t,(e,n)=>{if(rt(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(rt(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},AA=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return ri(t)?r(t):r(String(t).split(e)),n},PA=()=>{},xA=(t,e)=>(t=+t,Number.isFinite(t)?t:e),Da="abcdefghijklmnopqrstuvwxyz",Fp="0123456789",Qv={DIGIT:Fp,ALPHA:Da,ALPHA_DIGIT:Da+Da.toUpperCase()+Fp},OA=(t=16,e=Qv.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function DA(t){return!!(t&&rt(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const bA=t=>{const e=new Array(10),n=(r,i)=>{if(Ll(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=ri(r)?[]:{};return Is(r,(o,l)=>{const a=n(o,i+1);!ls(a)&&(s[l]=a)}),e[i]=void 0,s}}return r};return n(t,0)},LA=xt("AsyncFunction"),MA=t=>t&&(Ll(t)||rt(t))&&rt(t.then)&&rt(t.catch),v={isArray:ri,isArrayBuffer:Wv,isBuffer:iA,isFormData:hA,isArrayBufferView:sA,isString:oA,isNumber:Vv,isBoolean:lA,isObject:Ll,isPlainObject:co,isUndefined:ls,isDate:aA,isFile:uA,isBlob:cA,isRegExp:RA,isFunction:rt,isStream:fA,isURLSearchParams:pA,isTypedArray:SA,isFileList:dA,forEach:Is,merge:rc,extend:gA,trim:mA,stripBOM:_A,inherits:yA,toFlatObject:vA,kindOf:Dl,kindOfTest:xt,endsWith:wA,toArray:EA,forEachEntry:IA,matchAll:CA,isHTMLForm:TA,hasOwnProperty:Mp,hasOwnProp:Mp,reduceDescriptors:Yv,freezeMethods:NA,toObjectSet:AA,toCamelCase:kA,noop:PA,toFiniteNumber:xA,findKey:Kv,global:Gv,isContextDefined:qv,ALPHABET:Qv,generateString:OA,isSpecCompliantForm:DA,toJSONObject:bA,isAsyncFn:LA,isThenable:MA};function F(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}v.inherits(F,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:v.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Jv=F.prototype,Xv={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Xv[t]={value:t}});Object.defineProperties(F,Xv);Object.defineProperty(Jv,"isAxiosError",{value:!0});F.from=(t,e,n,r,i,s)=>{const o=Object.create(Jv);return v.toFlatObject(t,o,function(a){return a!==Error.prototype},l=>l!=="isAxiosError"),F.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const FA=null;function ic(t){return v.isPlainObject(t)||v.isArray(t)}function Zv(t){return v.endsWith(t,"[]")?t.slice(0,-2):t}function Up(t,e,n){return t?t.concat(e).map(function(i,s){return i=Zv(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function UA(t){return v.isArray(t)&&!t.some(ic)}const BA=v.toFlatObject(v,{},null,function(e){return/^is[A-Z]/.test(e)});function Ml(t,e,n){if(!v.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=v.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,I){return!v.isUndefined(I[y])});const r=n.metaTokens,i=n.visitor||c,s=n.dots,o=n.indexes,a=(n.Blob||typeof Blob<"u"&&Blob)&&v.isSpecCompliantForm(e);if(!v.isFunction(i))throw new TypeError("visitor must be a function");function u(m){if(m===null)return"";if(v.isDate(m))return m.toISOString();if(!a&&v.isBlob(m))throw new F("Blob is not supported. Use a Buffer instead.");return v.isArrayBuffer(m)||v.isTypedArray(m)?a&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function c(m,y,I){let p=m;if(m&&!I&&typeof m=="object"){if(v.endsWith(y,"{}"))y=r?y:y.slice(0,-2),m=JSON.stringify(m);else if(v.isArray(m)&&UA(m)||(v.isFileList(m)||v.endsWith(y,"[]"))&&(p=v.toArray(m)))return y=Zv(y),p.forEach(function(g,w){!(v.isUndefined(g)||g===null)&&e.append(o===!0?Up([y],w,s):o===null?y:y+"[]",u(g))}),!1}return ic(m)?!0:(e.append(Up(I,y,s),u(m)),!1)}const d=[],f=Object.assign(BA,{defaultVisitor:c,convertValue:u,isVisitable:ic});function _(m,y){if(!v.isUndefined(m)){if(d.indexOf(m)!==-1)throw Error("Circular reference detected in "+y.join("."));d.push(m),v.forEach(m,function(p,h){(!(v.isUndefined(p)||p===null)&&i.call(e,p,v.isString(h)?h.trim():h,y,f))===!0&&_(p,y?y.concat(h):[h])}),d.pop()}}if(!v.isObject(t))throw new TypeError("data must be an object");return _(t),e}function Bp(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Kd(t,e){this._pairs=[],t&&Ml(t,this,e)}const e0=Kd.prototype;e0.append=function(e,n){this._pairs.push([e,n])};e0.toString=function(e){const n=e?function(r){return e.call(this,r,Bp)}:Bp;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function zA(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function t0(t,e,n){if(!e)return t;const r=n&&n.encode||zA,i=n&&n.serialize;let s;if(i?s=i(e,n):s=v.isURLSearchParams(e)?e.toString():new Kd(e,n).toString(r),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class jA{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){v.forEach(this.handlers,function(r){r!==null&&e(r)})}}const zp=jA,n0={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},$A=typeof URLSearchParams<"u"?URLSearchParams:Kd,HA=typeof FormData<"u"?FormData:null,WA=typeof Blob<"u"?Blob:null,VA=(()=>{let t;return typeof navigator<"u"&&((t=navigator.product)==="ReactNative"||t==="NativeScript"||t==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),KA=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),St={isBrowser:!0,classes:{URLSearchParams:$A,FormData:HA,Blob:WA},isStandardBrowserEnv:VA,isStandardBrowserWebWorkerEnv:KA,protocols:["http","https","file","blob","url","data"]};function GA(t,e){return Ml(t,new St.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return St.isNode&&v.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function qA(t){return v.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function YA(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function r0(t){function e(n,r,i,s){let o=n[s++];const l=Number.isFinite(+o),a=s>=n.length;return o=!o&&v.isArray(i)?i.length:o,a?(v.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!l):((!i[o]||!v.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&v.isArray(i[o])&&(i[o]=YA(i[o])),!l)}if(v.isFormData(t)&&v.isFunction(t.entries)){const n={};return v.forEachEntry(t,(r,i)=>{e(qA(r),i,n,0)}),n}return null}function QA(t,e,n){if(v.isString(t))try{return(e||JSON.parse)(t),v.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Gd={transitional:n0,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=v.isObject(e);if(s&&v.isHTMLForm(e)&&(e=new FormData(e)),v.isFormData(e))return i&&i?JSON.stringify(r0(e)):e;if(v.isArrayBuffer(e)||v.isBuffer(e)||v.isStream(e)||v.isFile(e)||v.isBlob(e))return e;if(v.isArrayBufferView(e))return e.buffer;if(v.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let l;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return GA(e,this.formSerializer).toString();if((l=v.isFileList(e))||r.indexOf("multipart/form-data")>-1){const a=this.env&&this.env.FormData;return Ml(l?{"files[]":e}:e,a&&new a,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),QA(e)):e}],transformResponse:[function(e){const n=this.transitional||Gd.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(e&&v.isString(e)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(l){if(o)throw l.name==="SyntaxError"?F.from(l,F.ERR_BAD_RESPONSE,this,null,this.response):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:St.classes.FormData,Blob:St.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};v.forEach(["delete","get","head","post","put","patch"],t=>{Gd.headers[t]={}});const qd=Gd,JA=v.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),XA=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||e[n]&&JA[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},jp=Symbol("internals");function _i(t){return t&&String(t).trim().toLowerCase()}function fo(t){return t===!1||t==null?t:v.isArray(t)?t.map(fo):String(t)}function ZA(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const eP=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function ba(t,e,n,r,i){if(v.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!v.isString(e)){if(v.isString(r))return e.indexOf(r)!==-1;if(v.isRegExp(r))return r.test(e)}}function tP(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function nP(t,e){const n=v.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}class Fl{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(l,a,u){const c=_i(a);if(!c)throw new Error("header name must be a non-empty string");const d=v.findKey(i,c);(!d||i[d]===void 0||u===!0||u===void 0&&i[d]!==!1)&&(i[d||a]=fo(l))}const o=(l,a)=>v.forEach(l,(u,c)=>s(u,c,a));return v.isPlainObject(e)||e instanceof this.constructor?o(e,n):v.isString(e)&&(e=e.trim())&&!eP(e)?o(XA(e),n):e!=null&&s(n,e,r),this}get(e,n){if(e=_i(e),e){const r=v.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return ZA(i);if(v.isFunction(n))return n.call(this,i,r);if(v.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=_i(e),e){const r=v.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||ba(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(o){if(o=_i(o),o){const l=v.findKey(r,o);l&&(!n||ba(r,r[l],l,n))&&(delete r[l],i=!0)}}return v.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||ba(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return v.forEach(this,(i,s)=>{const o=v.findKey(r,s);if(o){n[o]=fo(i),delete n[s];return}const l=e?tP(s):String(s).trim();l!==s&&delete n[s],n[l]=fo(i),r[l]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return v.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&v.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[jp]=this[jp]={accessors:{}}).accessors,i=this.prototype;function s(o){const l=_i(o);r[l]||(nP(i,o),r[l]=!0)}return v.isArray(e)?e.forEach(s):s(e),this}}Fl.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);v.reduceDescriptors(Fl.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});v.freezeMethods(Fl);const jt=Fl;function La(t,e){const n=this||qd,r=e||n,i=jt.from(r.headers);let s=r.data;return v.forEach(t,function(l){s=l.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function i0(t){return!!(t&&t.__CANCEL__)}function Cs(t,e,n){F.call(this,t??"canceled",F.ERR_CANCELED,e,n),this.name="CanceledError"}v.inherits(Cs,F,{__CANCEL__:!0});function rP(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new F("Request failed with status code "+n.status,[F.ERR_BAD_REQUEST,F.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const iP=St.isStandardBrowserEnv?function(){return{write:function(n,r,i,s,o,l){const a=[];a.push(n+"="+encodeURIComponent(r)),v.isNumber(i)&&a.push("expires="+new Date(i).toGMTString()),v.isString(s)&&a.push("path="+s),v.isString(o)&&a.push("domain="+o),l===!0&&a.push("secure"),document.cookie=a.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function sP(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function oP(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function s0(t,e){return t&&!sP(e)?oP(t,e):e}const lP=St.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const l=v.isString(o)?i(o):o;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function aP(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function uP(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(a){const u=Date.now(),c=r[s];o||(o=u),n[i]=a,r[i]=u;let d=s,f=0;for(;d!==i;)f+=n[d++],d=d%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),u-o<e)return;const _=c&&u-c;return _?Math.round(f*1e3/_):void 0}}function $p(t,e){let n=0;const r=uP(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,l=s-n,a=r(l),u=s<=o;n=s;const c={loaded:s,total:o,progress:o?s/o:void 0,bytes:l,rate:a||void 0,estimated:a&&o&&u?(o-s)/a:void 0,event:i};c[e?"download":"upload"]=!0,t(c)}}const cP=typeof XMLHttpRequest<"u",dP=cP&&function(t){return new Promise(function(n,r){let i=t.data;const s=jt.from(t.headers).normalize(),o=t.responseType;let l;function a(){t.cancelToken&&t.cancelToken.unsubscribe(l),t.signal&&t.signal.removeEventListener("abort",l)}let u;v.isFormData(i)&&(St.isStandardBrowserEnv||St.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.getContentType(/^\s*multipart\/form-data/)?v.isString(u=s.getContentType())&&s.setContentType(u.replace(/^\s*(multipart\/form-data);+/,"$1")):s.setContentType("multipart/form-data"));let c=new XMLHttpRequest;if(t.auth){const m=t.auth.username||"",y=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.set("Authorization","Basic "+btoa(m+":"+y))}const d=s0(t.baseURL,t.url);c.open(t.method.toUpperCase(),t0(d,t.params,t.paramsSerializer),!0),c.timeout=t.timeout;function f(){if(!c)return;const m=jt.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),I={data:!o||o==="text"||o==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:m,config:t,request:c};rP(function(h){n(h),a()},function(h){r(h),a()},I),c=null}if("onloadend"in c?c.onloadend=f:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(f)},c.onabort=function(){c&&(r(new F("Request aborted",F.ECONNABORTED,t,c)),c=null)},c.onerror=function(){r(new F("Network Error",F.ERR_NETWORK,t,c)),c=null},c.ontimeout=function(){let y=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const I=t.transitional||n0;t.timeoutErrorMessage&&(y=t.timeoutErrorMessage),r(new F(y,I.clarifyTimeoutError?F.ETIMEDOUT:F.ECONNABORTED,t,c)),c=null},St.isStandardBrowserEnv){const m=(t.withCredentials||lP(d))&&t.xsrfCookieName&&iP.read(t.xsrfCookieName);m&&s.set(t.xsrfHeaderName,m)}i===void 0&&s.setContentType(null),"setRequestHeader"in c&&v.forEach(s.toJSON(),function(y,I){c.setRequestHeader(I,y)}),v.isUndefined(t.withCredentials)||(c.withCredentials=!!t.withCredentials),o&&o!=="json"&&(c.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&c.addEventListener("progress",$p(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",$p(t.onUploadProgress)),(t.cancelToken||t.signal)&&(l=m=>{c&&(r(!m||m.type?new Cs(null,t,c):m),c.abort(),c=null)},t.cancelToken&&t.cancelToken.subscribe(l),t.signal&&(t.signal.aborted?l():t.signal.addEventListener("abort",l)));const _=aP(d);if(_&&St.protocols.indexOf(_)===-1){r(new F("Unsupported protocol "+_+":",F.ERR_BAD_REQUEST,t));return}c.send(i||null)})},sc={http:FA,xhr:dP};v.forEach(sc,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Hp=t=>`- ${t}`,fP=t=>v.isFunction(t)||t===null||t===!1,o0={getAdapter:t=>{t=v.isArray(t)?t:[t];const{length:e}=t;let n,r;const i={};for(let s=0;s<e;s++){n=t[s];let o;if(r=n,!fP(n)&&(r=sc[(o=String(n)).toLowerCase()],r===void 0))throw new F(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+s]=r}if(!r){const s=Object.entries(i).map(([l,a])=>`adapter ${l} `+(a===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(Hp).join(`
`):" "+Hp(s[0]):"as no adapter specified";throw new F("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:sc};function Ma(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Cs(null,t)}function Wp(t){return Ma(t),t.headers=jt.from(t.headers),t.data=La.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),o0.getAdapter(t.adapter||qd.adapter)(t).then(function(r){return Ma(t),r.data=La.call(t,t.transformResponse,r),r.headers=jt.from(r.headers),r},function(r){return i0(r)||(Ma(t),r&&r.response&&(r.response.data=La.call(t,t.transformResponse,r.response),r.response.headers=jt.from(r.response.headers))),Promise.reject(r)})}const Vp=t=>t instanceof jt?t.toJSON():t;function Gr(t,e){e=e||{};const n={};function r(u,c,d){return v.isPlainObject(u)&&v.isPlainObject(c)?v.merge.call({caseless:d},u,c):v.isPlainObject(c)?v.merge({},c):v.isArray(c)?c.slice():c}function i(u,c,d){if(v.isUndefined(c)){if(!v.isUndefined(u))return r(void 0,u,d)}else return r(u,c,d)}function s(u,c){if(!v.isUndefined(c))return r(void 0,c)}function o(u,c){if(v.isUndefined(c)){if(!v.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function l(u,c,d){if(d in e)return r(u,c);if(d in t)return r(void 0,u)}const a={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(u,c)=>i(Vp(u),Vp(c),!0)};return v.forEach(Object.keys(Object.assign({},t,e)),function(c){const d=a[c]||i,f=d(t[c],e[c],c);v.isUndefined(f)&&d!==l||(n[c]=f)}),n}const l0="1.5.1",Yd={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Yd[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Kp={};Yd.transitional=function(e,n,r){function i(s,o){return"[Axios v"+l0+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,l)=>{if(e===!1)throw new F(i(o," has been removed"+(n?" in "+n:"")),F.ERR_DEPRECATED);return n&&!Kp[o]&&(Kp[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,l):!0}};function hP(t,e,n){if(typeof t!="object")throw new F("options must be an object",F.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const l=t[s],a=l===void 0||o(l,s,t);if(a!==!0)throw new F("option "+s+" must be "+a,F.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new F("Unknown option "+s,F.ERR_BAD_OPTION)}}const oc={assertOptions:hP,validators:Yd},Zt=oc.validators;class il{constructor(e){this.defaults=e,this.interceptors={request:new zp,response:new zp}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Gr(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&oc.assertOptions(r,{silentJSONParsing:Zt.transitional(Zt.boolean),forcedJSONParsing:Zt.transitional(Zt.boolean),clarifyTimeoutError:Zt.transitional(Zt.boolean)},!1),i!=null&&(v.isFunction(i)?n.paramsSerializer={serialize:i}:oc.assertOptions(i,{encode:Zt.function,serialize:Zt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&v.merge(s.common,s[n.method]);s&&v.forEach(["delete","get","head","post","put","patch","common"],m=>{delete s[m]}),n.headers=jt.concat(o,s);const l=[];let a=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(a=a&&y.synchronous,l.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let c,d=0,f;if(!a){const m=[Wp.bind(this),void 0];for(m.unshift.apply(m,l),m.push.apply(m,u),f=m.length,c=Promise.resolve(n);d<f;)c=c.then(m[d++],m[d++]);return c}f=l.length;let _=n;for(d=0;d<f;){const m=l[d++],y=l[d++];try{_=m(_)}catch(I){y.call(this,I);break}}try{c=Wp.call(this,_)}catch(m){return Promise.reject(m)}for(d=0,f=u.length;d<f;)c=c.then(u[d++],u[d++]);return c}getUri(e){e=Gr(this.defaults,e);const n=s0(e.baseURL,e.url);return t0(n,e.params,e.paramsSerializer)}}v.forEach(["delete","get","head","options"],function(e){il.prototype[e]=function(n,r){return this.request(Gr(r||{},{method:e,url:n,data:(r||{}).data}))}});v.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,l){return this.request(Gr(l||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}il.prototype[e]=n(),il.prototype[e+"Form"]=n(!0)});const ho=il;class Qd{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(l=>{r.subscribe(l),s=l}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,l){r.reason||(r.reason=new Cs(s,o,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new Qd(function(i){e=i}),cancel:e}}}const pP=Qd;function mP(t){return function(n){return t.apply(null,n)}}function gP(t){return v.isObject(t)&&t.isAxiosError===!0}const lc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(lc).forEach(([t,e])=>{lc[e]=t});const _P=lc;function a0(t){const e=new ho(t),n=Hv(ho.prototype.request,e);return v.extend(n,ho.prototype,e,{allOwnKeys:!0}),v.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return a0(Gr(t,i))},n}const ae=a0(qd);ae.Axios=ho;ae.CanceledError=Cs;ae.CancelToken=pP;ae.isCancel=i0;ae.VERSION=l0;ae.toFormData=Ml;ae.AxiosError=F;ae.Cancel=ae.CanceledError;ae.all=function(e){return Promise.all(e)};ae.spread=mP;ae.isAxiosError=gP;ae.mergeConfig=Gr;ae.AxiosHeaders=jt;ae.formToJSON=t=>r0(v.isHTMLForm(t)?new FormData(t):t);ae.getAdapter=o0.getAdapter;ae.HttpStatusCode=_P;ae.default=ae;const Jd=ae,yP=async(t,e,n,r,i,s)=>{const o={method:"GET",url:"https://us-real-estate.p.rapidapi.com/v3/for-sale",params:{state_code:e,city:t,sort:"newest",offset:"0",limit:"200",price_min:i,price_max:s,beds_min:n,beds_max:n,baths_min:r,baths_max:r},headers:{"X-RapidAPI-Key":"2661057b61msh8e6271d7a1763b6p12ffb0jsnc06db3ad292e","X-RapidAPI-Host":"us-real-estate.p.rapidapi.com"}};try{return(await Jd.request(o)).data}catch(l){throw l}},vP=async(t,e,n,r)=>{const i={method:"GET",url:"https://us-real-estate.p.rapidapi.com/v2/for-rent",params:{state_code:e,city:t,sort:"lowest_price",offset:"0",limit:"200",beds_min:n,beds_max:n,baths_min:r,baths_max:r},headers:{"X-RapidAPI-Key":"2661057b61msh8e6271d7a1763b6p12ffb0jsnc06db3ad292e","X-RapidAPI-Host":"us-real-estate.p.rapidapi.com"}};try{const s=await Jd.request(i);return console.log(s.data),s.data}catch(s){throw s}},wP=async(t,e,n,r)=>{const i={method:"GET",url:"https://us-real-estate.p.rapidapi.com/sold-homes",params:{state_code:e,city:t,sort:"sold_date",offset:"0",limit:"200",beds_min:n,beds_max:n,baths_min:r,baths_max:r},headers:{"X-RapidAPI-Key":"2661057b61msh8e6271d7a1763b6p12ffb0jsnc06db3ad292e","X-RapidAPI-Host":"us-real-estate.p.rapidapi.com"}};try{const s=await Jd.request(i);return console.log(s.data),s.data}catch(s){throw s}},EP={databaseURL:"https://criblytics-default-rtdb.firebaseio.com/",apiKey:"AIzaSyCRv3YXcKBp4caX4SLDf9tOM_jf6-PgKWc",authDomain:"criblytics.firebaseapp.com",projectId:"criblytics",storageBucket:"criblytics.appspot.com",messagingSenderId:"109707951445",appId:"1:109707951445:web:120d9a55b9851e13bd03dc",measurementId:"G-VH1N6MR0RG"},u0=ad(EP);Y_(u0);$v(u0);const SP=new Xe;SP.setCustomParameters({prompt:"select_account"});const IP=["AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];function CP(t){const[e,n]=z.useState("Jupiter"),[r,i]=z.useState("FL"),[s,o]=z.useState(3),[l,a]=z.useState(2),[u,c]=z.useState([]),[d,f]=z.useState(0),[_,m]=z.useState(1e6),[y,I]=z.useState(0),[p,h]=z.useState(0);async function g(){try{let E=0,R=0;const $=await vP(e,r,s,l);$.data&&$.data.home_search.results.length>0?(E=w($.data.home_search.results,tA),console.log(`Average rent: ${E}`),I(E)):console.error("No rental data available");const x=await wP(e,r,s,l,d,_);x.data&&x.data.results.length>0?(R=w(x.data.results,nA),console.log(`Average sold: ${R}`),h(R)):console.error("No sold data available");const _e=await yP(e,r,s,l,d,_);_e.data&&_e.data.home_search.results.length>0?_e.data.home_search.results.forEach(be=>{be.rent=E,be.sold=R;const Qt=eA(be);Qt&&c(Ts=>[...Ts,Qt])}):alert("No property data available")}catch(E){console.error("Error fetching data: ",E)}}function w(E,R){let $=0,x=0;return E.forEach(_e=>{const be=R(_e);be&&"list_price"in be&&typeof be.list_price=="number"&&($+=be.list_price,x+=1)}),x>0?$/x:0}const T=()=>{c([]),t.login&&g()},N=(E,R)=>{E==="min"?f(R):E==="max"&&m(R)};return G(B0,{children:[P("div",{id:"search",children:G("div",{className:"p-4 flex content-center justify-center text-center",children:[G("div",{className:"w-1/4",children:[P("label",{className:"text-3xl block text-grainy mb-2",children:"State"}),G("select",{className:"px-2 py-3 text-2xl bg-dark-waves rounded-lg text-dark-bland w-4/5",value:r,onChange:E=>i(E.target.value),children:[P("option",{value:""}),IP.map(E=>P("option",{value:E,children:E},E))]})]}),G("div",{className:"w-1/4 ml-2",children:[P("label",{className:"text-3xl block text-grainy mb-2",children:"City"}),P("input",{className:"px-2 py-2 bg-dark-waves text-2xl rounded-lg text-dark-bland w-full",type:"text",value:e,onChange:E=>n(E.target.value)})]}),G("div",{className:"w-1/4 ml-2",children:[P("label",{className:"text-3xl block text-grainy mb-2",children:"Beds"}),P("select",{className:"text-2xl px-2 py-3 bg-dark-waves rounded-lg text-dark-bland w-4/5",value:s,onChange:E=>o(E.target.value),children:[1,2,3,4,5].map(E=>P("option",{value:E,children:E},E))})]}),G("div",{className:"w-1/4 ml-2",children:[P("label",{className:"text-3xl block text-grainy mb-2",children:"Baths"}),P("select",{className:"px-2 py-3 text-2xl bg-dark-waves rounded-lg text-dark-bland w-4/5",value:l,onChange:E=>a(E.target.value),children:[1,2,3,4,5].map(E=>P("option",{value:E,children:E},E))})]})]})}),G("div",{className:"flex justify-center items-center space-x-2 w-full",children:[" ",G("div",{className:"flex flex-col items-center w-full",children:[" ",P("label",{htmlFor:"price-min-input",className:"mb-1 text-center text-2xl text-bland",children:"Price Minimum"}),P(Lp,{id:"price-min-input",value:d,onChange:E=>N("min",E),className:"form-input w-full",placeholder:"$0.00"})]}),G("div",{className:"flex flex-col items-center w-full",children:[" ",P("label",{htmlFor:"price-max-input",className:"mb-1 text-center text-2xl text-bland",children:"Price Maximum"}),P(Lp,{id:"price-max-input",value:_,onChange:E=>N("max",E),className:"form-input w-full",placeholder:"$200,000"})]})]}),P("button",{id:"search",onClick:T,className:"active:shadow-none shadow-2xl active:from-black active:to-black focus:bg-black w-1/3 rounded-xl text-wave duration-200 ease-in-out transition my-8 bg-gradient-to-l from-grainy to-bland",children:"Search"}),P(JN,{properties:u})]})}let Gp=0;function TP(){const t=["home","rental","investment"];return G("div",{className:"",children:[P("h1",{className:"mx-20 sm:text-5xl text-4xl font-extrabold leading-tighter tracking-tighter mb-24",children:G("a",{href:"#",onClick:()=>window.location.reload(),children:["Crib",P("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-grainy to-bland",children:"lytics."})]})}),G("p",{className:"text-2xl text-waves mb-8",children:["Find your dream ",P("span",{className:["#6EE7B7","#FFD166","#06D6A0"][Gp],children:t[Gp]})]})]})}const kP=({user:t,auth:e,db:n})=>G("div",{className:"flex content-center justify-center gap-16 mt-8 border-b-2 border-grainy pb-6",children:[P("img",{className:" rounded-xl h-16 w-16",src:t.photoURL,alt:""}),P("button",{className:" hover:border-red-500 hover:border-3 p-16 rounded-2xl button signout bg-transparent font-bold py-2 px-4 text-2xl text-waves",onClick:()=>e.signOut(),children:"Sign out"})]});const RP={databaseURL:"https://criblytics-default-rtdb.firebaseio.com/",apiKey:"AIzaSyCRv3YXcKBp4caX4SLDf9tOM_jf6-PgKWc",authDomain:"criblytics.firebaseapp.com",projectId:"criblytics",storageBucket:"criblytics.appspot.com",messagingSenderId:"109707951445",appId:"1:109707951445:web:120d9a55b9851e13bd03dc",measurementId:"G-VH1N6MR0RG"},c0=ad(RP);Y_(c0);const NP=$v(c0),d0=new Xe;d0.setCustomParameters({prompt:"select_account"});const ac=dk();function AP(){async function t(e,n){var r;try{const i=await w1(e,n),o=Xe.credentialFromResult(i).accessToken,l=i.user;console.log(l)}catch(i){i.code,i.message,(r=i.customData)!=null&&r.email,Xe.credentialFromError(i)}}return P("div",{children:P("button",{className:"login-with-google-btn w-64 h-16 font-medium text-md duration-200 transition-shadow shadow-xl hover:outline outline-2 outline-emerald-600",onClick:()=>t(ac,d0),children:"Sign in with Google"})})}function PP(){const[t,e]=z.useState(null);return z.useState(!1),z.useEffect(()=>{ac.onAuthStateChanged(n=>{e(n)})},[]),P("div",{children:G("div",{className:"mt-8 ",children:[P(nS,{}),P(TP,{}),P("section",{children:t?P(kP,{auth:ac,user:t,db:NP}):P(AP,{})}),P("div",{className:"mt-4 text-xl text-center max-w-l",children:t?P(CP,{user:t,login:!0}):null}),t?null:P(xP,{})]})})}function xP(){return P("div",{className:"mt-8 mx-auto max-w-md text-left border-grainy border-2 p-8",children:G("ul",{className:"list-none list-inside space-y-4",children:[P("li",{className:"text-xl leading-snug",children:"Search properties by state, city, price, and filters."}),P("li",{className:"text-xl leading-snug",children:"Analyze rental investment prospects with ease."}),P("li",{className:"text-xl leading-snug",children:"Discover key metrics visually."}),P("li",{className:"text-xl leading-snug",children:"Use mortgage calculator and rental estimates."})]})})}function OP(){return console.log({}.DATABASE_URL),P("div",{children:P(PP,{})})}const DP=Fa.createRoot(document.getElementById("root"));DP.render(P(tm.StrictMode,{children:P(ZE,{children:P(OP,{})})}));
