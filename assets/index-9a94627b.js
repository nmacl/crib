function t3(e,B){for(var t=0;t<B.length;t++){const C=B[t];if(typeof C!="string"&&!Array.isArray(C)){for(const n in C)if(n!=="default"&&!(n in e)){const r=Object.getOwnPropertyDescriptor(C,n);r&&Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:()=>C[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const B=document.createElement("link").relList;if(B&&B.supports&&B.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))C(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&C(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function C(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();function C3(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Hg(e){if(e.__esModule)return e;var B=e.default;if(typeof B=="function"){var t=function C(){if(this instanceof C){var n=[null];n.push.apply(n,arguments);var r=Function.bind.apply(B,n);return new r}return B.apply(this,arguments)};t.prototype=B.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach(function(C){var n=Object.getOwnPropertyDescriptor(e,C);Object.defineProperty(t,C,n.get?n:{enumerable:!0,get:function(){return e[C]}})}),t}var yi={},n3={get exports(){return yi},set exports(e){yi=e}},hl={},O={},r3={get exports(){return O},set exports(e){O=e}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ls=Symbol.for("react.element"),i3=Symbol.for("react.portal"),s3=Symbol.for("react.fragment"),a3=Symbol.for("react.strict_mode"),o3=Symbol.for("react.profiler"),l3=Symbol.for("react.provider"),c3=Symbol.for("react.context"),u3=Symbol.for("react.forward_ref"),f3=Symbol.for("react.suspense"),d3=Symbol.for("react.memo"),h3=Symbol.for("react.lazy"),A2=Symbol.iterator;function p3(e){return e===null||typeof e!="object"?null:(e=A2&&e[A2]||e["@@iterator"],typeof e=="function"?e:null)}var xg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gg=Object.assign,Kg={};function Er(e,B,t){this.props=e,this.context=B,this.refs=Kg,this.updater=t||xg}Er.prototype.isReactComponent={};Er.prototype.setState=function(e,B){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,B,"setState")};Er.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ug(){}Ug.prototype=Er.prototype;function Vd(e,B,t){this.props=e,this.context=B,this.refs=Kg,this.updater=t||xg}var Wd=Vd.prototype=new Ug;Wd.constructor=Vd;Gg(Wd,Er.prototype);Wd.isPureReactComponent=!0;var y2=Array.isArray,Qg=Object.prototype.hasOwnProperty,jd={current:null},Jg={key:!0,ref:!0,__self:!0,__source:!0};function Vg(e,B,t){var C,n={},r=null,i=null;if(B!=null)for(C in B.ref!==void 0&&(i=B.ref),B.key!==void 0&&(r=""+B.key),B)Qg.call(B,C)&&!Jg.hasOwnProperty(C)&&(n[C]=B[C]);var s=arguments.length-2;if(s===1)n.children=t;else if(1<s){for(var a=Array(s),o=0;o<s;o++)a[o]=arguments[o+2];n.children=a}if(e&&e.defaultProps)for(C in s=e.defaultProps,s)n[C]===void 0&&(n[C]=s[C]);return{$$typeof:ls,type:e,key:r,ref:i,props:n,_owner:jd.current}}function m3(e,B){return{$$typeof:ls,type:e.type,key:B,ref:e.ref,props:e.props,_owner:e._owner}}function Yd(e){return typeof e=="object"&&e!==null&&e.$$typeof===ls}function g3(e){var B={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return B[t]})}var E2=/\/+/g;function gc(e,B){return typeof e=="object"&&e!==null&&e.key!=null?g3(""+e.key):B.toString(36)}function Ha(e,B,t,C,n){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(r){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case ls:case i3:i=!0}}if(i)return i=e,n=n(i),e=C===""?"."+gc(i,0):C,y2(n)?(t="",e!=null&&(t=e.replace(E2,"$&/")+"/"),Ha(n,B,t,"",function(o){return o})):n!=null&&(Yd(n)&&(n=m3(n,t+(!n.key||i&&i.key===n.key?"":(""+n.key).replace(E2,"$&/")+"/")+e)),B.push(n)),1;if(i=0,C=C===""?".":C+":",y2(e))for(var s=0;s<e.length;s++){r=e[s];var a=C+gc(r,s);i+=Ha(r,B,t,a,n)}else if(a=p3(e),typeof a=="function")for(e=a.call(e),s=0;!(r=e.next()).done;)r=r.value,a=C+gc(r,s++),i+=Ha(r,B,t,a,n);else if(r==="object")throw B=String(e),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return i}function Ws(e,B,t){if(e==null)return e;var C=[],n=0;return Ha(e,C,"","",function(r){return B.call(t,r,n++)}),C}function v3(e){if(e._status===-1){var B=e._result;B=B(),B.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=B)}if(e._status===1)return e._result.default;throw e._result}var ie={current:null},xa={transition:null},A3={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:xa,ReactCurrentOwner:jd};Z.Children={map:Ws,forEach:function(e,B,t){Ws(e,function(){B.apply(this,arguments)},t)},count:function(e){var B=0;return Ws(e,function(){B++}),B},toArray:function(e){return Ws(e,function(B){return B})||[]},only:function(e){if(!Yd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Z.Component=Er;Z.Fragment=s3;Z.Profiler=o3;Z.PureComponent=Vd;Z.StrictMode=a3;Z.Suspense=f3;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A3;Z.cloneElement=function(e,B,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var C=Gg({},e.props),n=e.key,r=e.ref,i=e._owner;if(B!=null){if(B.ref!==void 0&&(r=B.ref,i=jd.current),B.key!==void 0&&(n=""+B.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in B)Qg.call(B,a)&&!Jg.hasOwnProperty(a)&&(C[a]=B[a]===void 0&&s!==void 0?s[a]:B[a])}var a=arguments.length-2;if(a===1)C.children=t;else if(1<a){s=Array(a);for(var o=0;o<a;o++)s[o]=arguments[o+2];C.children=s}return{$$typeof:ls,type:e.type,key:n,ref:r,props:C,_owner:i}};Z.createContext=function(e){return e={$$typeof:c3,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:l3,_context:e},e.Consumer=e};Z.createElement=Vg;Z.createFactory=function(e){var B=Vg.bind(null,e);return B.type=e,B};Z.createRef=function(){return{current:null}};Z.forwardRef=function(e){return{$$typeof:u3,render:e}};Z.isValidElement=Yd;Z.lazy=function(e){return{$$typeof:h3,_payload:{_status:-1,_result:e},_init:v3}};Z.memo=function(e,B){return{$$typeof:d3,type:e,compare:B===void 0?null:B}};Z.startTransition=function(e){var B=xa.transition;xa.transition={};try{e()}finally{xa.transition=B}};Z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Z.useCallback=function(e,B){return ie.current.useCallback(e,B)};Z.useContext=function(e){return ie.current.useContext(e)};Z.useDebugValue=function(){};Z.useDeferredValue=function(e){return ie.current.useDeferredValue(e)};Z.useEffect=function(e,B){return ie.current.useEffect(e,B)};Z.useId=function(){return ie.current.useId()};Z.useImperativeHandle=function(e,B,t){return ie.current.useImperativeHandle(e,B,t)};Z.useInsertionEffect=function(e,B){return ie.current.useInsertionEffect(e,B)};Z.useLayoutEffect=function(e,B){return ie.current.useLayoutEffect(e,B)};Z.useMemo=function(e,B){return ie.current.useMemo(e,B)};Z.useReducer=function(e,B,t){return ie.current.useReducer(e,B,t)};Z.useRef=function(e){return ie.current.useRef(e)};Z.useState=function(e){return ie.current.useState(e)};Z.useSyncExternalStore=function(e,B,t){return ie.current.useSyncExternalStore(e,B,t)};Z.useTransition=function(){return ie.current.useTransition()};Z.version="18.2.0";(function(e){e.exports=Z})(r3);const rr=C3(O),y3=t3({__proto__:null,default:rr},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E3=O,S3=Symbol.for("react.element"),I3=Symbol.for("react.fragment"),b3=Object.prototype.hasOwnProperty,w3=E3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,D3={key:!0,ref:!0,__self:!0,__source:!0};function Wg(e,B,t){var C,n={},r=null,i=null;t!==void 0&&(r=""+t),B.key!==void 0&&(r=""+B.key),B.ref!==void 0&&(i=B.ref);for(C in B)b3.call(B,C)&&!D3.hasOwnProperty(C)&&(n[C]=B[C]);if(e&&e.defaultProps)for(C in B=e.defaultProps,B)n[C]===void 0&&(n[C]=B[C]);return{$$typeof:S3,type:e,key:r,ref:i,props:n,_owner:w3.current}}hl.Fragment=I3;hl.jsx=Wg;hl.jsxs=Wg;(function(e){e.exports=hl})(n3);const ro=yi.Fragment,D=yi.jsx,q=yi.jsxs;var Lu={},Hu={},P3={get exports(){return Hu},set exports(e){Hu=e}},Re={},xu={},R3={get exports(){return xu},set exports(e){xu=e}},jg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function B(N,G){var x=N.length;N.push(G);B:for(;0<x;){var eB=x-1>>>1,$=N[eB];if(0<n($,G))N[eB]=G,N[x]=$,x=eB;else break B}}function t(N){return N.length===0?null:N[0]}function C(N){if(N.length===0)return null;var G=N[0],x=N.pop();if(x!==G){N[0]=x;B:for(var eB=0,$=N.length,QB=$>>>1;eB<QB;){var z=2*(eB+1)-1,JB=N[z],Be=z+1,it=N[Be];if(0>n(JB,x))Be<$&&0>n(it,JB)?(N[eB]=it,N[Be]=x,eB=Be):(N[eB]=JB,N[z]=x,eB=z);else if(Be<$&&0>n(it,x))N[eB]=it,N[Be]=x,eB=Be;else break B}}return G}function n(N,G){var x=N.sortIndex-G.sortIndex;return x!==0?x:N.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var a=[],o=[],l=1,c=null,u=3,m=!1,f=!1,g=!1,p=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var G=t(o);G!==null;){if(G.callback===null)C(o);else if(G.startTime<=N)C(o),G.sortIndex=G.expirationTime,B(a,G);else break;G=t(o)}}function A(N){if(g=!1,v(N),!f)if(t(a)!==null)f=!0,DB(E);else{var G=t(o);G!==null&&vB(A,G.startTime-N)}}function E(N,G){f=!1,g&&(g=!1,d(y),y=-1),m=!0;var x=u;try{for(v(G),c=t(a);c!==null&&(!(c.expirationTime>G)||N&&!V());){var eB=c.callback;if(typeof eB=="function"){c.callback=null,u=c.priorityLevel;var $=eB(c.expirationTime<=G);G=e.unstable_now(),typeof $=="function"?c.callback=$:c===t(a)&&C(a),v(G)}else C(a);c=t(a)}if(c!==null)var QB=!0;else{var z=t(o);z!==null&&vB(A,z.startTime-G),QB=!1}return QB}finally{c=null,u=x,m=!1}}var w=!1,S=null,y=-1,I=5,M=-1;function V(){return!(e.unstable_now()-M<I)}function tB(){if(S!==null){var N=e.unstable_now();M=N;var G=!0;try{G=S(!0,N)}finally{G?LB():(w=!1,S=null)}}else w=!1}var LB;if(typeof h=="function")LB=function(){h(tB)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,lB=rt.port2;rt.port1.onmessage=tB,LB=function(){lB.postMessage(null)}}else LB=function(){p(tB,0)};function DB(N){S=N,w||(w=!0,LB())}function vB(N,G){y=p(function(){N(e.unstable_now())},G)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){f||m||(f=!0,DB(E))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return u},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(N){switch(u){case 1:case 2:case 3:var G=3;break;default:G=u}var x=u;u=G;try{return N()}finally{u=x}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,G){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var x=u;u=N;try{return G()}finally{u=x}},e.unstable_scheduleCallback=function(N,G,x){var eB=e.unstable_now();switch(typeof x=="object"&&x!==null?(x=x.delay,x=typeof x=="number"&&0<x?eB+x:eB):x=eB,N){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=x+$,N={id:l++,callback:G,priorityLevel:N,startTime:x,expirationTime:$,sortIndex:-1},x>eB?(N.sortIndex=x,B(o,N),t(a)===null&&N===t(o)&&(g?(d(y),y=-1):g=!0,vB(A,x-eB))):(N.sortIndex=$,B(a,N),f||m||(f=!0,DB(E))),N},e.unstable_shouldYield=V,e.unstable_wrapCallback=function(N){var G=u;return function(){var x=u;u=G;try{return N.apply(this,arguments)}finally{u=x}}}})(jg);(function(e){e.exports=jg})(R3);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg=O,Pe=xu;function b(e){for(var B="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)B+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+B+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xg=new Set,Ei={};function mn(e,B){ir(e,B),ir(e+"Capture",B)}function ir(e,B){for(Ei[e]=B,e=0;e<B.length;e++)Xg.add(B[e])}var Tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gu=Object.prototype.hasOwnProperty,N3=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,S2={},I2={};function F3(e){return Gu.call(I2,e)?!0:Gu.call(S2,e)?!1:N3.test(e)?I2[e]=!0:(S2[e]=!0,!1)}function O3(e,B,t,C){if(t!==null&&t.type===0)return!1;switch(typeof B){case"function":case"symbol":return!0;case"boolean":return C?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function k3(e,B,t,C){if(B===null||typeof B>"u"||O3(e,B,t,C))return!0;if(C)return!1;if(t!==null)switch(t.type){case 3:return!B;case 4:return B===!1;case 5:return isNaN(B);case 6:return isNaN(B)||1>B}return!1}function se(e,B,t,C,n,r,i){this.acceptsBooleans=B===2||B===3||B===4,this.attributeName=C,this.attributeNamespace=n,this.mustUseProperty=t,this.propertyName=e,this.type=B,this.sanitizeURL=r,this.removeEmptyString=i}var jB={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){jB[e]=new se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var B=e[0];jB[B]=new se(B,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){jB[e]=new se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){jB[e]=new se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){jB[e]=new se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){jB[e]=new se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){jB[e]=new se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){jB[e]=new se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){jB[e]=new se(e,5,!1,e.toLowerCase(),null,!1,!1)});var Xd=/[\-:]([a-z])/g;function Zd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var B=e.replace(Xd,Zd);jB[B]=new se(B,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var B=e.replace(Xd,Zd);jB[B]=new se(B,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var B=e.replace(Xd,Zd);jB[B]=new se(B,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){jB[e]=new se(e,1,!1,e.toLowerCase(),null,!1,!1)});jB.xlinkHref=new se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){jB[e]=new se(e,1,!1,e.toLowerCase(),null,!0,!0)});function qd(e,B,t,C){var n=jB.hasOwnProperty(B)?jB[B]:null;(n!==null?n.type!==0:C||!(2<B.length)||B[0]!=="o"&&B[0]!=="O"||B[1]!=="n"&&B[1]!=="N")&&(k3(B,t,n,C)&&(t=null),C||n===null?F3(B)&&(t===null?e.removeAttribute(B):e.setAttribute(B,""+t)):n.mustUseProperty?e[n.propertyName]=t===null?n.type===3?!1:"":t:(B=n.attributeName,C=n.attributeNamespace,t===null?e.removeAttribute(B):(n=n.type,t=n===3||n===4&&t===!0?"":""+t,C?e.setAttributeNS(C,B,t):e.setAttribute(B,t))))}var Jt=Yg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,js=Symbol.for("react.element"),Fn=Symbol.for("react.portal"),On=Symbol.for("react.fragment"),zd=Symbol.for("react.strict_mode"),Ku=Symbol.for("react.profiler"),Zg=Symbol.for("react.provider"),qg=Symbol.for("react.context"),_d=Symbol.for("react.forward_ref"),Uu=Symbol.for("react.suspense"),Qu=Symbol.for("react.suspense_list"),$d=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),zg=Symbol.for("react.offscreen"),b2=Symbol.iterator;function Tr(e){return e===null||typeof e!="object"?null:(e=b2&&e[b2]||e["@@iterator"],typeof e=="function"?e:null)}var EB=Object.assign,vc;function _r(e){if(vc===void 0)try{throw Error()}catch(t){var B=t.stack.trim().match(/\n( *(at )?)/);vc=B&&B[1]||""}return`
`+vc+e}var Ac=!1;function yc(e,B){if(!e||Ac)return"";Ac=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(B)if(B=function(){throw Error()},Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(o){var C=o}Reflect.construct(e,[],B)}else{try{B.call()}catch(o){C=o}e.call(B.prototype)}else{try{throw Error()}catch(o){C=o}e()}}catch(o){if(o&&C&&typeof o.stack=="string"){for(var n=o.stack.split(`
`),r=C.stack.split(`
`),i=n.length-1,s=r.length-1;1<=i&&0<=s&&n[i]!==r[s];)s--;for(;1<=i&&0<=s;i--,s--)if(n[i]!==r[s]){if(i!==1||s!==1)do if(i--,s--,0>s||n[i]!==r[s]){var a=`
`+n[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=s);break}}}finally{Ac=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?_r(e):""}function T3(e){switch(e.tag){case 5:return _r(e.type);case 16:return _r("Lazy");case 13:return _r("Suspense");case 19:return _r("SuspenseList");case 0:case 2:case 15:return e=yc(e.type,!1),e;case 11:return e=yc(e.type.render,!1),e;case 1:return e=yc(e.type,!0),e;default:return""}}function Ju(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case On:return"Fragment";case Fn:return"Portal";case Ku:return"Profiler";case zd:return"StrictMode";case Uu:return"Suspense";case Qu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case qg:return(e.displayName||"Context")+".Consumer";case Zg:return(e._context.displayName||"Context")+".Provider";case _d:var B=e.render;return e=e.displayName,e||(e=B.displayName||B.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $d:return B=e.displayName||null,B!==null?B:Ju(e.type)||"Memo";case _t:B=e._payload,e=e._init;try{return Ju(e(B))}catch{}}return null}function M3(e){var B=e.type;switch(e.tag){case 24:return"Cache";case 9:return(B.displayName||"Context")+".Consumer";case 10:return(B._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=B.render,e=e.displayName||e.name||"",B.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return B;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ju(B);case 8:return B===zd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof B=="function")return B.displayName||B.name||null;if(typeof B=="string")return B}return null}function SC(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _g(e){var B=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(B==="checkbox"||B==="radio")}function L3(e){var B=_g(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,B),C=""+e[B];if(!e.hasOwnProperty(B)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var n=t.get,r=t.set;return Object.defineProperty(e,B,{configurable:!0,get:function(){return n.call(this)},set:function(i){C=""+i,r.call(this,i)}}),Object.defineProperty(e,B,{enumerable:t.enumerable}),{getValue:function(){return C},setValue:function(i){C=""+i},stopTracking:function(){e._valueTracker=null,delete e[B]}}}}function Ys(e){e._valueTracker||(e._valueTracker=L3(e))}function $g(e){if(!e)return!1;var B=e._valueTracker;if(!B)return!0;var t=B.getValue(),C="";return e&&(C=_g(e)?e.checked?"true":"false":e.value),e=C,e!==t?(B.setValue(e),!0):!1}function io(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Vu(e,B){var t=B.checked;return EB({},B,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function w2(e,B){var t=B.defaultValue==null?"":B.defaultValue,C=B.checked!=null?B.checked:B.defaultChecked;t=SC(B.value!=null?B.value:t),e._wrapperState={initialChecked:C,initialValue:t,controlled:B.type==="checkbox"||B.type==="radio"?B.checked!=null:B.value!=null}}function Bv(e,B){B=B.checked,B!=null&&qd(e,"checked",B,!1)}function Wu(e,B){Bv(e,B);var t=SC(B.value),C=B.type;if(t!=null)C==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(C==="submit"||C==="reset"){e.removeAttribute("value");return}B.hasOwnProperty("value")?ju(e,B.type,t):B.hasOwnProperty("defaultValue")&&ju(e,B.type,SC(B.defaultValue)),B.checked==null&&B.defaultChecked!=null&&(e.defaultChecked=!!B.defaultChecked)}function D2(e,B,t){if(B.hasOwnProperty("value")||B.hasOwnProperty("defaultValue")){var C=B.type;if(!(C!=="submit"&&C!=="reset"||B.value!==void 0&&B.value!==null))return;B=""+e._wrapperState.initialValue,t||B===e.value||(e.value=B),e.defaultValue=B}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ju(e,B,t){(B!=="number"||io(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var $r=Array.isArray;function Yn(e,B,t,C){if(e=e.options,B){B={};for(var n=0;n<t.length;n++)B["$"+t[n]]=!0;for(t=0;t<e.length;t++)n=B.hasOwnProperty("$"+e[t].value),e[t].selected!==n&&(e[t].selected=n),n&&C&&(e[t].defaultSelected=!0)}else{for(t=""+SC(t),B=null,n=0;n<e.length;n++){if(e[n].value===t){e[n].selected=!0,C&&(e[n].defaultSelected=!0);return}B!==null||e[n].disabled||(B=e[n])}B!==null&&(B.selected=!0)}}function Yu(e,B){if(B.dangerouslySetInnerHTML!=null)throw Error(b(91));return EB({},B,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function P2(e,B){var t=B.value;if(t==null){if(t=B.children,B=B.defaultValue,t!=null){if(B!=null)throw Error(b(92));if($r(t)){if(1<t.length)throw Error(b(93));t=t[0]}B=t}B==null&&(B=""),t=B}e._wrapperState={initialValue:SC(t)}}function ev(e,B){var t=SC(B.value),C=SC(B.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),B.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),C!=null&&(e.defaultValue=""+C)}function R2(e){var B=e.textContent;B===e._wrapperState.initialValue&&B!==""&&B!==null&&(e.value=B)}function tv(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xu(e,B){return e==null||e==="http://www.w3.org/1999/xhtml"?tv(B):e==="http://www.w3.org/2000/svg"&&B==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xs,Cv=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(B,t,C,n){MSApp.execUnsafeLocalFunction(function(){return e(B,t,C,n)})}:e}(function(e,B){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=B;else{for(Xs=Xs||document.createElement("div"),Xs.innerHTML="<svg>"+B.valueOf().toString()+"</svg>",B=Xs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;B.firstChild;)e.appendChild(B.firstChild)}});function Si(e,B){if(B){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=B;return}}e.textContent=B}var ni={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},H3=["Webkit","ms","Moz","O"];Object.keys(ni).forEach(function(e){H3.forEach(function(B){B=B+e.charAt(0).toUpperCase()+e.substring(1),ni[B]=ni[e]})});function nv(e,B,t){return B==null||typeof B=="boolean"||B===""?"":t||typeof B!="number"||B===0||ni.hasOwnProperty(e)&&ni[e]?(""+B).trim():B+"px"}function rv(e,B){e=e.style;for(var t in B)if(B.hasOwnProperty(t)){var C=t.indexOf("--")===0,n=nv(t,B[t],C);t==="float"&&(t="cssFloat"),C?e.setProperty(t,n):e[t]=n}}var x3=EB({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zu(e,B){if(B){if(x3[e]&&(B.children!=null||B.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(B.dangerouslySetInnerHTML!=null){if(B.children!=null)throw Error(b(60));if(typeof B.dangerouslySetInnerHTML!="object"||!("__html"in B.dangerouslySetInnerHTML))throw Error(b(61))}if(B.style!=null&&typeof B.style!="object")throw Error(b(62))}}function qu(e,B){if(e.indexOf("-")===-1)return typeof B.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zu=null;function B1(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _u=null,Xn=null,Zn=null;function N2(e){if(e=fs(e)){if(typeof _u!="function")throw Error(b(280));var B=e.stateNode;B&&(B=Al(B),_u(e.stateNode,e.type,B))}}function iv(e){Xn?Zn?Zn.push(e):Zn=[e]:Xn=e}function sv(){if(Xn){var e=Xn,B=Zn;if(Zn=Xn=null,N2(e),B)for(e=0;e<B.length;e++)N2(B[e])}}function av(e,B){return e(B)}function ov(){}var Ec=!1;function lv(e,B,t){if(Ec)return e(B,t);Ec=!0;try{return av(e,B,t)}finally{Ec=!1,(Xn!==null||Zn!==null)&&(ov(),sv())}}function Ii(e,B){var t=e.stateNode;if(t===null)return null;var C=Al(t);if(C===null)return null;t=C[B];B:switch(B){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(C=!C.disabled)||(e=e.type,C=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!C;break B;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(b(231,B,typeof t));return t}var $u=!1;if(Tt)try{var Mr={};Object.defineProperty(Mr,"passive",{get:function(){$u=!0}}),window.addEventListener("test",Mr,Mr),window.removeEventListener("test",Mr,Mr)}catch{$u=!1}function G3(e,B,t,C,n,r,i,s,a){var o=Array.prototype.slice.call(arguments,3);try{B.apply(t,o)}catch(l){this.onError(l)}}var ri=!1,so=null,ao=!1,Bf=null,K3={onError:function(e){ri=!0,so=e}};function U3(e,B,t,C,n,r,i,s,a){ri=!1,so=null,G3.apply(K3,arguments)}function Q3(e,B,t,C,n,r,i,s,a){if(U3.apply(this,arguments),ri){if(ri){var o=so;ri=!1,so=null}else throw Error(b(198));ao||(ao=!0,Bf=o)}}function gn(e){var B=e,t=e;if(e.alternate)for(;B.return;)B=B.return;else{e=B;do B=e,B.flags&4098&&(t=B.return),e=B.return;while(e)}return B.tag===3?t:null}function cv(e){if(e.tag===13){var B=e.memoizedState;if(B===null&&(e=e.alternate,e!==null&&(B=e.memoizedState)),B!==null)return B.dehydrated}return null}function F2(e){if(gn(e)!==e)throw Error(b(188))}function J3(e){var B=e.alternate;if(!B){if(B=gn(e),B===null)throw Error(b(188));return B!==e?null:e}for(var t=e,C=B;;){var n=t.return;if(n===null)break;var r=n.alternate;if(r===null){if(C=n.return,C!==null){t=C;continue}break}if(n.child===r.child){for(r=n.child;r;){if(r===t)return F2(n),e;if(r===C)return F2(n),B;r=r.sibling}throw Error(b(188))}if(t.return!==C.return)t=n,C=r;else{for(var i=!1,s=n.child;s;){if(s===t){i=!0,t=n,C=r;break}if(s===C){i=!0,C=n,t=r;break}s=s.sibling}if(!i){for(s=r.child;s;){if(s===t){i=!0,t=r,C=n;break}if(s===C){i=!0,C=r,t=n;break}s=s.sibling}if(!i)throw Error(b(189))}}if(t.alternate!==C)throw Error(b(190))}if(t.tag!==3)throw Error(b(188));return t.stateNode.current===t?e:B}function uv(e){return e=J3(e),e!==null?fv(e):null}function fv(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var B=fv(e);if(B!==null)return B;e=e.sibling}return null}var dv=Pe.unstable_scheduleCallback,O2=Pe.unstable_cancelCallback,V3=Pe.unstable_shouldYield,W3=Pe.unstable_requestPaint,PB=Pe.unstable_now,j3=Pe.unstable_getCurrentPriorityLevel,e1=Pe.unstable_ImmediatePriority,hv=Pe.unstable_UserBlockingPriority,oo=Pe.unstable_NormalPriority,Y3=Pe.unstable_LowPriority,pv=Pe.unstable_IdlePriority,pl=null,ut=null;function X3(e){if(ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(pl,e,void 0,(e.current.flags&128)===128)}catch{}}var $e=Math.clz32?Math.clz32:z3,Z3=Math.log,q3=Math.LN2;function z3(e){return e>>>=0,e===0?32:31-(Z3(e)/q3|0)|0}var Zs=64,qs=4194304;function Bi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function lo(e,B){var t=e.pendingLanes;if(t===0)return 0;var C=0,n=e.suspendedLanes,r=e.pingedLanes,i=t&268435455;if(i!==0){var s=i&~n;s!==0?C=Bi(s):(r&=i,r!==0&&(C=Bi(r)))}else i=t&~n,i!==0?C=Bi(i):r!==0&&(C=Bi(r));if(C===0)return 0;if(B!==0&&B!==C&&!(B&n)&&(n=C&-C,r=B&-B,n>=r||n===16&&(r&4194240)!==0))return B;if(C&4&&(C|=t&16),B=e.entangledLanes,B!==0)for(e=e.entanglements,B&=C;0<B;)t=31-$e(B),n=1<<t,C|=e[t],B&=~n;return C}function _3(e,B){switch(e){case 1:case 2:case 4:return B+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return B+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $3(e,B){for(var t=e.suspendedLanes,C=e.pingedLanes,n=e.expirationTimes,r=e.pendingLanes;0<r;){var i=31-$e(r),s=1<<i,a=n[i];a===-1?(!(s&t)||s&C)&&(n[i]=_3(s,B)):a<=B&&(e.expiredLanes|=s),r&=~s}}function ef(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function mv(){var e=Zs;return Zs<<=1,!(Zs&4194240)&&(Zs=64),e}function Sc(e){for(var B=[],t=0;31>t;t++)B.push(e);return B}function cs(e,B,t){e.pendingLanes|=B,B!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,B=31-$e(B),e[B]=t}function BP(e,B){var t=e.pendingLanes&~B;e.pendingLanes=B,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=B,e.mutableReadLanes&=B,e.entangledLanes&=B,B=e.entanglements;var C=e.eventTimes;for(e=e.expirationTimes;0<t;){var n=31-$e(t),r=1<<n;B[n]=0,C[n]=-1,e[n]=-1,t&=~r}}function t1(e,B){var t=e.entangledLanes|=B;for(e=e.entanglements;t;){var C=31-$e(t),n=1<<C;n&B|e[C]&B&&(e[C]|=B),t&=~n}}var CB=0;function gv(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var vv,C1,Av,yv,Ev,tf=!1,zs=[],oC=null,lC=null,cC=null,bi=new Map,wi=new Map,BC=[],eP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function k2(e,B){switch(e){case"focusin":case"focusout":oC=null;break;case"dragenter":case"dragleave":lC=null;break;case"mouseover":case"mouseout":cC=null;break;case"pointerover":case"pointerout":bi.delete(B.pointerId);break;case"gotpointercapture":case"lostpointercapture":wi.delete(B.pointerId)}}function Lr(e,B,t,C,n,r){return e===null||e.nativeEvent!==r?(e={blockedOn:B,domEventName:t,eventSystemFlags:C,nativeEvent:r,targetContainers:[n]},B!==null&&(B=fs(B),B!==null&&C1(B)),e):(e.eventSystemFlags|=C,B=e.targetContainers,n!==null&&B.indexOf(n)===-1&&B.push(n),e)}function tP(e,B,t,C,n){switch(B){case"focusin":return oC=Lr(oC,e,B,t,C,n),!0;case"dragenter":return lC=Lr(lC,e,B,t,C,n),!0;case"mouseover":return cC=Lr(cC,e,B,t,C,n),!0;case"pointerover":var r=n.pointerId;return bi.set(r,Lr(bi.get(r)||null,e,B,t,C,n)),!0;case"gotpointercapture":return r=n.pointerId,wi.set(r,Lr(wi.get(r)||null,e,B,t,C,n)),!0}return!1}function Sv(e){var B=KC(e.target);if(B!==null){var t=gn(B);if(t!==null){if(B=t.tag,B===13){if(B=cv(t),B!==null){e.blockedOn=B,Ev(e.priority,function(){Av(t)});return}}else if(B===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ga(e){if(e.blockedOn!==null)return!1;for(var B=e.targetContainers;0<B.length;){var t=Cf(e.domEventName,e.eventSystemFlags,B[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var C=new t.constructor(t.type,t);zu=C,t.target.dispatchEvent(C),zu=null}else return B=fs(t),B!==null&&C1(B),e.blockedOn=t,!1;B.shift()}return!0}function T2(e,B,t){Ga(e)&&t.delete(B)}function CP(){tf=!1,oC!==null&&Ga(oC)&&(oC=null),lC!==null&&Ga(lC)&&(lC=null),cC!==null&&Ga(cC)&&(cC=null),bi.forEach(T2),wi.forEach(T2)}function Hr(e,B){e.blockedOn===B&&(e.blockedOn=null,tf||(tf=!0,Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority,CP)))}function Di(e){function B(n){return Hr(n,e)}if(0<zs.length){Hr(zs[0],e);for(var t=1;t<zs.length;t++){var C=zs[t];C.blockedOn===e&&(C.blockedOn=null)}}for(oC!==null&&Hr(oC,e),lC!==null&&Hr(lC,e),cC!==null&&Hr(cC,e),bi.forEach(B),wi.forEach(B),t=0;t<BC.length;t++)C=BC[t],C.blockedOn===e&&(C.blockedOn=null);for(;0<BC.length&&(t=BC[0],t.blockedOn===null);)Sv(t),t.blockedOn===null&&BC.shift()}var qn=Jt.ReactCurrentBatchConfig,co=!0;function nP(e,B,t,C){var n=CB,r=qn.transition;qn.transition=null;try{CB=1,n1(e,B,t,C)}finally{CB=n,qn.transition=r}}function rP(e,B,t,C){var n=CB,r=qn.transition;qn.transition=null;try{CB=4,n1(e,B,t,C)}finally{CB=n,qn.transition=r}}function n1(e,B,t,C){if(co){var n=Cf(e,B,t,C);if(n===null)kc(e,B,C,uo,t),k2(e,C);else if(tP(n,e,B,t,C))C.stopPropagation();else if(k2(e,C),B&4&&-1<eP.indexOf(e)){for(;n!==null;){var r=fs(n);if(r!==null&&vv(r),r=Cf(e,B,t,C),r===null&&kc(e,B,C,uo,t),r===n)break;n=r}n!==null&&C.stopPropagation()}else kc(e,B,C,null,t)}}var uo=null;function Cf(e,B,t,C){if(uo=null,e=B1(C),e=KC(e),e!==null)if(B=gn(e),B===null)e=null;else if(t=B.tag,t===13){if(e=cv(B),e!==null)return e;e=null}else if(t===3){if(B.stateNode.current.memoizedState.isDehydrated)return B.tag===3?B.stateNode.containerInfo:null;e=null}else B!==e&&(e=null);return uo=e,null}function Iv(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j3()){case e1:return 1;case hv:return 4;case oo:case Y3:return 16;case pv:return 536870912;default:return 16}default:return 16}}var iC=null,r1=null,Ka=null;function bv(){if(Ka)return Ka;var e,B=r1,t=B.length,C,n="value"in iC?iC.value:iC.textContent,r=n.length;for(e=0;e<t&&B[e]===n[e];e++);var i=t-e;for(C=1;C<=i&&B[t-C]===n[r-C];C++);return Ka=n.slice(e,1<C?1-C:void 0)}function Ua(e){var B=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&B===13&&(e=13)):e=B,e===10&&(e=13),32<=e||e===13?e:0}function _s(){return!0}function M2(){return!1}function Ne(e){function B(t,C,n,r,i){this._reactName=t,this._targetInst=n,this.type=C,this.nativeEvent=r,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(r):r[s]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?_s:M2,this.isPropagationStopped=M2,this}return EB(B.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=_s)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=_s)},persist:function(){},isPersistent:_s}),B}var Sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},i1=Ne(Sr),us=EB({},Sr,{view:0,detail:0}),iP=Ne(us),Ic,bc,xr,ml=EB({},us,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:s1,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xr&&(xr&&e.type==="mousemove"?(Ic=e.screenX-xr.screenX,bc=e.screenY-xr.screenY):bc=Ic=0,xr=e),Ic)},movementY:function(e){return"movementY"in e?e.movementY:bc}}),L2=Ne(ml),sP=EB({},ml,{dataTransfer:0}),aP=Ne(sP),oP=EB({},us,{relatedTarget:0}),wc=Ne(oP),lP=EB({},Sr,{animationName:0,elapsedTime:0,pseudoElement:0}),cP=Ne(lP),uP=EB({},Sr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fP=Ne(uP),dP=EB({},Sr,{data:0}),H2=Ne(dP),hP={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gP(e){var B=this.nativeEvent;return B.getModifierState?B.getModifierState(e):(e=mP[e])?!!B[e]:!1}function s1(){return gP}var vP=EB({},us,{key:function(e){if(e.key){var B=hP[e.key]||e.key;if(B!=="Unidentified")return B}return e.type==="keypress"?(e=Ua(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pP[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:s1,charCode:function(e){return e.type==="keypress"?Ua(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ua(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),AP=Ne(vP),yP=EB({},ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),x2=Ne(yP),EP=EB({},us,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:s1}),SP=Ne(EP),IP=EB({},Sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),bP=Ne(IP),wP=EB({},ml,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),DP=Ne(wP),PP=[9,13,27,32],a1=Tt&&"CompositionEvent"in window,ii=null;Tt&&"documentMode"in document&&(ii=document.documentMode);var RP=Tt&&"TextEvent"in window&&!ii,wv=Tt&&(!a1||ii&&8<ii&&11>=ii),G2=String.fromCharCode(32),K2=!1;function Dv(e,B){switch(e){case"keyup":return PP.indexOf(B.keyCode)!==-1;case"keydown":return B.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kn=!1;function NP(e,B){switch(e){case"compositionend":return Pv(B);case"keypress":return B.which!==32?null:(K2=!0,G2);case"textInput":return e=B.data,e===G2&&K2?null:e;default:return null}}function FP(e,B){if(kn)return e==="compositionend"||!a1&&Dv(e,B)?(e=bv(),Ka=r1=iC=null,kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(B.ctrlKey||B.altKey||B.metaKey)||B.ctrlKey&&B.altKey){if(B.char&&1<B.char.length)return B.char;if(B.which)return String.fromCharCode(B.which)}return null;case"compositionend":return wv&&B.locale!=="ko"?null:B.data;default:return null}}var OP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function U2(e){var B=e&&e.nodeName&&e.nodeName.toLowerCase();return B==="input"?!!OP[e.type]:B==="textarea"}function Rv(e,B,t,C){iv(C),B=fo(B,"onChange"),0<B.length&&(t=new i1("onChange","change",null,t,C),e.push({event:t,listeners:B}))}var si=null,Pi=null;function kP(e){Kv(e,0)}function gl(e){var B=Ln(e);if($g(B))return e}function TP(e,B){if(e==="change")return B}var Nv=!1;if(Tt){var Dc;if(Tt){var Pc="oninput"in document;if(!Pc){var Q2=document.createElement("div");Q2.setAttribute("oninput","return;"),Pc=typeof Q2.oninput=="function"}Dc=Pc}else Dc=!1;Nv=Dc&&(!document.documentMode||9<document.documentMode)}function J2(){si&&(si.detachEvent("onpropertychange",Fv),Pi=si=null)}function Fv(e){if(e.propertyName==="value"&&gl(Pi)){var B=[];Rv(B,Pi,e,B1(e)),lv(kP,B)}}function MP(e,B,t){e==="focusin"?(J2(),si=B,Pi=t,si.attachEvent("onpropertychange",Fv)):e==="focusout"&&J2()}function LP(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gl(Pi)}function HP(e,B){if(e==="click")return gl(B)}function xP(e,B){if(e==="input"||e==="change")return gl(B)}function GP(e,B){return e===B&&(e!==0||1/e===1/B)||e!==e&&B!==B}var Ct=typeof Object.is=="function"?Object.is:GP;function Ri(e,B){if(Ct(e,B))return!0;if(typeof e!="object"||e===null||typeof B!="object"||B===null)return!1;var t=Object.keys(e),C=Object.keys(B);if(t.length!==C.length)return!1;for(C=0;C<t.length;C++){var n=t[C];if(!Gu.call(B,n)||!Ct(e[n],B[n]))return!1}return!0}function V2(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function W2(e,B){var t=V2(e);e=0;for(var C;t;){if(t.nodeType===3){if(C=e+t.textContent.length,e<=B&&C>=B)return{node:t,offset:B-e};e=C}B:{for(;t;){if(t.nextSibling){t=t.nextSibling;break B}t=t.parentNode}t=void 0}t=V2(t)}}function Ov(e,B){return e&&B?e===B?!0:e&&e.nodeType===3?!1:B&&B.nodeType===3?Ov(e,B.parentNode):"contains"in e?e.contains(B):e.compareDocumentPosition?!!(e.compareDocumentPosition(B)&16):!1:!1}function kv(){for(var e=window,B=io();B instanceof e.HTMLIFrameElement;){try{var t=typeof B.contentWindow.location.href=="string"}catch{t=!1}if(t)e=B.contentWindow;else break;B=io(e.document)}return B}function o1(e){var B=e&&e.nodeName&&e.nodeName.toLowerCase();return B&&(B==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||B==="textarea"||e.contentEditable==="true")}function KP(e){var B=kv(),t=e.focusedElem,C=e.selectionRange;if(B!==t&&t&&t.ownerDocument&&Ov(t.ownerDocument.documentElement,t)){if(C!==null&&o1(t)){if(B=C.start,e=C.end,e===void 0&&(e=B),"selectionStart"in t)t.selectionStart=B,t.selectionEnd=Math.min(e,t.value.length);else if(e=(B=t.ownerDocument||document)&&B.defaultView||window,e.getSelection){e=e.getSelection();var n=t.textContent.length,r=Math.min(C.start,n);C=C.end===void 0?r:Math.min(C.end,n),!e.extend&&r>C&&(n=C,C=r,r=n),n=W2(t,r);var i=W2(t,C);n&&i&&(e.rangeCount!==1||e.anchorNode!==n.node||e.anchorOffset!==n.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(B=B.createRange(),B.setStart(n.node,n.offset),e.removeAllRanges(),r>C?(e.addRange(B),e.extend(i.node,i.offset)):(B.setEnd(i.node,i.offset),e.addRange(B)))}}for(B=[],e=t;e=e.parentNode;)e.nodeType===1&&B.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<B.length;t++)e=B[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var UP=Tt&&"documentMode"in document&&11>=document.documentMode,Tn=null,nf=null,ai=null,rf=!1;function j2(e,B,t){var C=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;rf||Tn==null||Tn!==io(C)||(C=Tn,"selectionStart"in C&&o1(C)?C={start:C.selectionStart,end:C.selectionEnd}:(C=(C.ownerDocument&&C.ownerDocument.defaultView||window).getSelection(),C={anchorNode:C.anchorNode,anchorOffset:C.anchorOffset,focusNode:C.focusNode,focusOffset:C.focusOffset}),ai&&Ri(ai,C)||(ai=C,C=fo(nf,"onSelect"),0<C.length&&(B=new i1("onSelect","select",null,B,t),e.push({event:B,listeners:C}),B.target=Tn)))}function $s(e,B){var t={};return t[e.toLowerCase()]=B.toLowerCase(),t["Webkit"+e]="webkit"+B,t["Moz"+e]="moz"+B,t}var Mn={animationend:$s("Animation","AnimationEnd"),animationiteration:$s("Animation","AnimationIteration"),animationstart:$s("Animation","AnimationStart"),transitionend:$s("Transition","TransitionEnd")},Rc={},Tv={};Tt&&(Tv=document.createElement("div").style,"AnimationEvent"in window||(delete Mn.animationend.animation,delete Mn.animationiteration.animation,delete Mn.animationstart.animation),"TransitionEvent"in window||delete Mn.transitionend.transition);function vl(e){if(Rc[e])return Rc[e];if(!Mn[e])return e;var B=Mn[e],t;for(t in B)if(B.hasOwnProperty(t)&&t in Tv)return Rc[e]=B[t];return e}var Mv=vl("animationend"),Lv=vl("animationiteration"),Hv=vl("animationstart"),xv=vl("transitionend"),Gv=new Map,Y2="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function OC(e,B){Gv.set(e,B),mn(B,[e])}for(var Nc=0;Nc<Y2.length;Nc++){var Fc=Y2[Nc],QP=Fc.toLowerCase(),JP=Fc[0].toUpperCase()+Fc.slice(1);OC(QP,"on"+JP)}OC(Mv,"onAnimationEnd");OC(Lv,"onAnimationIteration");OC(Hv,"onAnimationStart");OC("dblclick","onDoubleClick");OC("focusin","onFocus");OC("focusout","onBlur");OC(xv,"onTransitionEnd");ir("onMouseEnter",["mouseout","mouseover"]);ir("onMouseLeave",["mouseout","mouseover"]);ir("onPointerEnter",["pointerout","pointerover"]);ir("onPointerLeave",["pointerout","pointerover"]);mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VP=new Set("cancel close invalid load scroll toggle".split(" ").concat(ei));function X2(e,B,t){var C=e.type||"unknown-event";e.currentTarget=t,Q3(C,B,void 0,e),e.currentTarget=null}function Kv(e,B){B=(B&4)!==0;for(var t=0;t<e.length;t++){var C=e[t],n=C.event;C=C.listeners;B:{var r=void 0;if(B)for(var i=C.length-1;0<=i;i--){var s=C[i],a=s.instance,o=s.currentTarget;if(s=s.listener,a!==r&&n.isPropagationStopped())break B;X2(n,s,o),r=a}else for(i=0;i<C.length;i++){if(s=C[i],a=s.instance,o=s.currentTarget,s=s.listener,a!==r&&n.isPropagationStopped())break B;X2(n,s,o),r=a}}}if(ao)throw e=Bf,ao=!1,Bf=null,e}function uB(e,B){var t=B[cf];t===void 0&&(t=B[cf]=new Set);var C=e+"__bubble";t.has(C)||(Uv(B,e,2,!1),t.add(C))}function Oc(e,B,t){var C=0;B&&(C|=4),Uv(t,e,C,B)}var Ba="_reactListening"+Math.random().toString(36).slice(2);function Ni(e){if(!e[Ba]){e[Ba]=!0,Xg.forEach(function(t){t!=="selectionchange"&&(VP.has(t)||Oc(t,!1,e),Oc(t,!0,e))});var B=e.nodeType===9?e:e.ownerDocument;B===null||B[Ba]||(B[Ba]=!0,Oc("selectionchange",!1,B))}}function Uv(e,B,t,C){switch(Iv(B)){case 1:var n=nP;break;case 4:n=rP;break;default:n=n1}t=n.bind(null,B,t,e),n=void 0,!$u||B!=="touchstart"&&B!=="touchmove"&&B!=="wheel"||(n=!0),C?n!==void 0?e.addEventListener(B,t,{capture:!0,passive:n}):e.addEventListener(B,t,!0):n!==void 0?e.addEventListener(B,t,{passive:n}):e.addEventListener(B,t,!1)}function kc(e,B,t,C,n){var r=C;if(!(B&1)&&!(B&2)&&C!==null)B:for(;;){if(C===null)return;var i=C.tag;if(i===3||i===4){var s=C.stateNode.containerInfo;if(s===n||s.nodeType===8&&s.parentNode===n)break;if(i===4)for(i=C.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===n||a.nodeType===8&&a.parentNode===n))return;i=i.return}for(;s!==null;){if(i=KC(s),i===null)return;if(a=i.tag,a===5||a===6){C=r=i;continue B}s=s.parentNode}}C=C.return}lv(function(){var o=r,l=B1(t),c=[];B:{var u=Gv.get(e);if(u!==void 0){var m=i1,f=e;switch(e){case"keypress":if(Ua(t)===0)break B;case"keydown":case"keyup":m=AP;break;case"focusin":f="focus",m=wc;break;case"focusout":f="blur",m=wc;break;case"beforeblur":case"afterblur":m=wc;break;case"click":if(t.button===2)break B;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=L2;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=aP;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=SP;break;case Mv:case Lv:case Hv:m=cP;break;case xv:m=bP;break;case"scroll":m=iP;break;case"wheel":m=DP;break;case"copy":case"cut":case"paste":m=fP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=x2}var g=(B&4)!==0,p=!g&&e==="scroll",d=g?u!==null?u+"Capture":null:u;g=[];for(var h=o,v;h!==null;){v=h;var A=v.stateNode;if(v.tag===5&&A!==null&&(v=A,d!==null&&(A=Ii(h,d),A!=null&&g.push(Fi(h,A,v)))),p)break;h=h.return}0<g.length&&(u=new m(u,f,null,t,l),c.push({event:u,listeners:g}))}}if(!(B&7)){B:{if(u=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",u&&t!==zu&&(f=t.relatedTarget||t.fromElement)&&(KC(f)||f[Mt]))break B;if((m||u)&&(u=l.window===l?l:(u=l.ownerDocument)?u.defaultView||u.parentWindow:window,m?(f=t.relatedTarget||t.toElement,m=o,f=f?KC(f):null,f!==null&&(p=gn(f),f!==p||f.tag!==5&&f.tag!==6)&&(f=null)):(m=null,f=o),m!==f)){if(g=L2,A="onMouseLeave",d="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(g=x2,A="onPointerLeave",d="onPointerEnter",h="pointer"),p=m==null?u:Ln(m),v=f==null?u:Ln(f),u=new g(A,h+"leave",m,t,l),u.target=p,u.relatedTarget=v,A=null,KC(l)===o&&(g=new g(d,h+"enter",f,t,l),g.target=v,g.relatedTarget=p,A=g),p=A,m&&f)e:{for(g=m,d=f,h=0,v=g;v;v=bn(v))h++;for(v=0,A=d;A;A=bn(A))v++;for(;0<h-v;)g=bn(g),h--;for(;0<v-h;)d=bn(d),v--;for(;h--;){if(g===d||d!==null&&g===d.alternate)break e;g=bn(g),d=bn(d)}g=null}else g=null;m!==null&&Z2(c,u,m,g,!1),f!==null&&p!==null&&Z2(c,p,f,g,!0)}}B:{if(u=o?Ln(o):window,m=u.nodeName&&u.nodeName.toLowerCase(),m==="select"||m==="input"&&u.type==="file")var E=TP;else if(U2(u))if(Nv)E=xP;else{E=LP;var w=MP}else(m=u.nodeName)&&m.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(E=HP);if(E&&(E=E(e,o))){Rv(c,E,t,l);break B}w&&w(e,u,o),e==="focusout"&&(w=u._wrapperState)&&w.controlled&&u.type==="number"&&ju(u,"number",u.value)}switch(w=o?Ln(o):window,e){case"focusin":(U2(w)||w.contentEditable==="true")&&(Tn=w,nf=o,ai=null);break;case"focusout":ai=nf=Tn=null;break;case"mousedown":rf=!0;break;case"contextmenu":case"mouseup":case"dragend":rf=!1,j2(c,t,l);break;case"selectionchange":if(UP)break;case"keydown":case"keyup":j2(c,t,l)}var S;if(a1)B:{switch(e){case"compositionstart":var y="onCompositionStart";break B;case"compositionend":y="onCompositionEnd";break B;case"compositionupdate":y="onCompositionUpdate";break B}y=void 0}else kn?Dv(e,t)&&(y="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(y="onCompositionStart");y&&(wv&&t.locale!=="ko"&&(kn||y!=="onCompositionStart"?y==="onCompositionEnd"&&kn&&(S=bv()):(iC=l,r1="value"in iC?iC.value:iC.textContent,kn=!0)),w=fo(o,y),0<w.length&&(y=new H2(y,e,null,t,l),c.push({event:y,listeners:w}),S?y.data=S:(S=Pv(t),S!==null&&(y.data=S)))),(S=RP?NP(e,t):FP(e,t))&&(o=fo(o,"onBeforeInput"),0<o.length&&(l=new H2("onBeforeInput","beforeinput",null,t,l),c.push({event:l,listeners:o}),l.data=S))}Kv(c,B)})}function Fi(e,B,t){return{instance:e,listener:B,currentTarget:t}}function fo(e,B){for(var t=B+"Capture",C=[];e!==null;){var n=e,r=n.stateNode;n.tag===5&&r!==null&&(n=r,r=Ii(e,t),r!=null&&C.unshift(Fi(e,r,n)),r=Ii(e,B),r!=null&&C.push(Fi(e,r,n))),e=e.return}return C}function bn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Z2(e,B,t,C,n){for(var r=B._reactName,i=[];t!==null&&t!==C;){var s=t,a=s.alternate,o=s.stateNode;if(a!==null&&a===C)break;s.tag===5&&o!==null&&(s=o,n?(a=Ii(t,r),a!=null&&i.unshift(Fi(t,a,s))):n||(a=Ii(t,r),a!=null&&i.push(Fi(t,a,s)))),t=t.return}i.length!==0&&e.push({event:B,listeners:i})}var WP=/\r\n?/g,jP=/\u0000|\uFFFD/g;function q2(e){return(typeof e=="string"?e:""+e).replace(WP,`
`).replace(jP,"")}function ea(e,B,t){if(B=q2(B),q2(e)!==B&&t)throw Error(b(425))}function ho(){}var sf=null,af=null;function of(e,B){return e==="textarea"||e==="noscript"||typeof B.children=="string"||typeof B.children=="number"||typeof B.dangerouslySetInnerHTML=="object"&&B.dangerouslySetInnerHTML!==null&&B.dangerouslySetInnerHTML.__html!=null}var lf=typeof setTimeout=="function"?setTimeout:void 0,YP=typeof clearTimeout=="function"?clearTimeout:void 0,z2=typeof Promise=="function"?Promise:void 0,XP=typeof queueMicrotask=="function"?queueMicrotask:typeof z2<"u"?function(e){return z2.resolve(null).then(e).catch(ZP)}:lf;function ZP(e){setTimeout(function(){throw e})}function Tc(e,B){var t=B,C=0;do{var n=t.nextSibling;if(e.removeChild(t),n&&n.nodeType===8)if(t=n.data,t==="/$"){if(C===0){e.removeChild(n),Di(B);return}C--}else t!=="$"&&t!=="$?"&&t!=="$!"||C++;t=n}while(t);Di(B)}function uC(e){for(;e!=null;e=e.nextSibling){var B=e.nodeType;if(B===1||B===3)break;if(B===8){if(B=e.data,B==="$"||B==="$!"||B==="$?")break;if(B==="/$")return null}}return e}function _2(e){e=e.previousSibling;for(var B=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(B===0)return e;B--}else t==="/$"&&B++}e=e.previousSibling}return null}var Ir=Math.random().toString(36).slice(2),lt="__reactFiber$"+Ir,Oi="__reactProps$"+Ir,Mt="__reactContainer$"+Ir,cf="__reactEvents$"+Ir,qP="__reactListeners$"+Ir,zP="__reactHandles$"+Ir;function KC(e){var B=e[lt];if(B)return B;for(var t=e.parentNode;t;){if(B=t[Mt]||t[lt]){if(t=B.alternate,B.child!==null||t!==null&&t.child!==null)for(e=_2(e);e!==null;){if(t=e[lt])return t;e=_2(e)}return B}e=t,t=e.parentNode}return null}function fs(e){return e=e[lt]||e[Mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ln(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function Al(e){return e[Oi]||null}var uf=[],Hn=-1;function kC(e){return{current:e}}function hB(e){0>Hn||(e.current=uf[Hn],uf[Hn]=null,Hn--)}function oB(e,B){Hn++,uf[Hn]=e.current,e.current=B}var IC={},_B=kC(IC),he=kC(!1),en=IC;function sr(e,B){var t=e.type.contextTypes;if(!t)return IC;var C=e.stateNode;if(C&&C.__reactInternalMemoizedUnmaskedChildContext===B)return C.__reactInternalMemoizedMaskedChildContext;var n={},r;for(r in t)n[r]=B[r];return C&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=B,e.__reactInternalMemoizedMaskedChildContext=n),n}function pe(e){return e=e.childContextTypes,e!=null}function po(){hB(he),hB(_B)}function $2(e,B,t){if(_B.current!==IC)throw Error(b(168));oB(_B,B),oB(he,t)}function Qv(e,B,t){var C=e.stateNode;if(B=B.childContextTypes,typeof C.getChildContext!="function")return t;C=C.getChildContext();for(var n in C)if(!(n in B))throw Error(b(108,M3(e)||"Unknown",n));return EB({},t,C)}function mo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||IC,en=_B.current,oB(_B,e),oB(he,he.current),!0}function Bp(e,B,t){var C=e.stateNode;if(!C)throw Error(b(169));t?(e=Qv(e,B,en),C.__reactInternalMemoizedMergedChildContext=e,hB(he),hB(_B),oB(_B,e)):hB(he),oB(he,t)}var It=null,yl=!1,Mc=!1;function Jv(e){It===null?It=[e]:It.push(e)}function _P(e){yl=!0,Jv(e)}function TC(){if(!Mc&&It!==null){Mc=!0;var e=0,B=CB;try{var t=It;for(CB=1;e<t.length;e++){var C=t[e];do C=C(!0);while(C!==null)}It=null,yl=!1}catch(n){throw It!==null&&(It=It.slice(e+1)),dv(e1,TC),n}finally{CB=B,Mc=!1}}return null}var xn=[],Gn=0,go=null,vo=0,Te=[],Me=0,tn=null,wt=1,Dt="";function LC(e,B){xn[Gn++]=vo,xn[Gn++]=go,go=e,vo=B}function Vv(e,B,t){Te[Me++]=wt,Te[Me++]=Dt,Te[Me++]=tn,tn=e;var C=wt;e=Dt;var n=32-$e(C)-1;C&=~(1<<n),t+=1;var r=32-$e(B)+n;if(30<r){var i=n-n%5;r=(C&(1<<i)-1).toString(32),C>>=i,n-=i,wt=1<<32-$e(B)+n|t<<n|C,Dt=r+e}else wt=1<<r|t<<n|C,Dt=e}function l1(e){e.return!==null&&(LC(e,1),Vv(e,1,0))}function c1(e){for(;e===go;)go=xn[--Gn],xn[Gn]=null,vo=xn[--Gn],xn[Gn]=null;for(;e===tn;)tn=Te[--Me],Te[Me]=null,Dt=Te[--Me],Te[Me]=null,wt=Te[--Me],Te[Me]=null}var be=null,Ie=null,mB=!1,Ye=null;function Wv(e,B){var t=He(5,null,null,0);t.elementType="DELETED",t.stateNode=B,t.return=e,B=e.deletions,B===null?(e.deletions=[t],e.flags|=16):B.push(t)}function ep(e,B){switch(e.tag){case 5:var t=e.type;return B=B.nodeType!==1||t.toLowerCase()!==B.nodeName.toLowerCase()?null:B,B!==null?(e.stateNode=B,be=e,Ie=uC(B.firstChild),!0):!1;case 6:return B=e.pendingProps===""||B.nodeType!==3?null:B,B!==null?(e.stateNode=B,be=e,Ie=null,!0):!1;case 13:return B=B.nodeType!==8?null:B,B!==null?(t=tn!==null?{id:wt,overflow:Dt}:null,e.memoizedState={dehydrated:B,treeContext:t,retryLane:1073741824},t=He(18,null,null,0),t.stateNode=B,t.return=e,e.child=t,be=e,Ie=null,!0):!1;default:return!1}}function ff(e){return(e.mode&1)!==0&&(e.flags&128)===0}function df(e){if(mB){var B=Ie;if(B){var t=B;if(!ep(e,B)){if(ff(e))throw Error(b(418));B=uC(t.nextSibling);var C=be;B&&ep(e,B)?Wv(C,t):(e.flags=e.flags&-4097|2,mB=!1,be=e)}}else{if(ff(e))throw Error(b(418));e.flags=e.flags&-4097|2,mB=!1,be=e}}}function tp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;be=e}function ta(e){if(e!==be)return!1;if(!mB)return tp(e),mB=!0,!1;var B;if((B=e.tag!==3)&&!(B=e.tag!==5)&&(B=e.type,B=B!=="head"&&B!=="body"&&!of(e.type,e.memoizedProps)),B&&(B=Ie)){if(ff(e))throw jv(),Error(b(418));for(;B;)Wv(e,B),B=uC(B.nextSibling)}if(tp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));B:{for(e=e.nextSibling,B=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(B===0){Ie=uC(e.nextSibling);break B}B--}else t!=="$"&&t!=="$!"&&t!=="$?"||B++}e=e.nextSibling}Ie=null}}else Ie=be?uC(e.stateNode.nextSibling):null;return!0}function jv(){for(var e=Ie;e;)e=uC(e.nextSibling)}function ar(){Ie=be=null,mB=!1}function u1(e){Ye===null?Ye=[e]:Ye.push(e)}var $P=Jt.ReactCurrentBatchConfig;function We(e,B){if(e&&e.defaultProps){B=EB({},B),e=e.defaultProps;for(var t in e)B[t]===void 0&&(B[t]=e[t]);return B}return B}var Ao=kC(null),yo=null,Kn=null,f1=null;function d1(){f1=Kn=yo=null}function h1(e){var B=Ao.current;hB(Ao),e._currentValue=B}function hf(e,B,t){for(;e!==null;){var C=e.alternate;if((e.childLanes&B)!==B?(e.childLanes|=B,C!==null&&(C.childLanes|=B)):C!==null&&(C.childLanes&B)!==B&&(C.childLanes|=B),e===t)break;e=e.return}}function zn(e,B){yo=e,f1=Kn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&B&&(fe=!0),e.firstContext=null)}function Ke(e){var B=e._currentValue;if(f1!==e)if(e={context:e,memoizedValue:B,next:null},Kn===null){if(yo===null)throw Error(b(308));Kn=e,yo.dependencies={lanes:0,firstContext:e}}else Kn=Kn.next=e;return B}var UC=null;function p1(e){UC===null?UC=[e]:UC.push(e)}function Yv(e,B,t,C){var n=B.interleaved;return n===null?(t.next=t,p1(B)):(t.next=n.next,n.next=t),B.interleaved=t,Lt(e,C)}function Lt(e,B){e.lanes|=B;var t=e.alternate;for(t!==null&&(t.lanes|=B),t=e,e=e.return;e!==null;)e.childLanes|=B,t=e.alternate,t!==null&&(t.childLanes|=B),t=e,e=e.return;return t.tag===3?t.stateNode:null}var $t=!1;function m1(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xv(e,B){e=e.updateQueue,B.updateQueue===e&&(B.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ft(e,B){return{eventTime:e,lane:B,tag:0,payload:null,callback:null,next:null}}function fC(e,B,t){var C=e.updateQueue;if(C===null)return null;if(C=C.shared,_&2){var n=C.pending;return n===null?B.next=B:(B.next=n.next,n.next=B),C.pending=B,Lt(e,t)}return n=C.interleaved,n===null?(B.next=B,p1(C)):(B.next=n.next,n.next=B),C.interleaved=B,Lt(e,t)}function Qa(e,B,t){if(B=B.updateQueue,B!==null&&(B=B.shared,(t&4194240)!==0)){var C=B.lanes;C&=e.pendingLanes,t|=C,B.lanes=t,t1(e,t)}}function Cp(e,B){var t=e.updateQueue,C=e.alternate;if(C!==null&&(C=C.updateQueue,t===C)){var n=null,r=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};r===null?n=r=i:r=r.next=i,t=t.next}while(t!==null);r===null?n=r=B:r=r.next=B}else n=r=B;t={baseState:C.baseState,firstBaseUpdate:n,lastBaseUpdate:r,shared:C.shared,effects:C.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=B:e.next=B,t.lastBaseUpdate=B}function Eo(e,B,t,C){var n=e.updateQueue;$t=!1;var r=n.firstBaseUpdate,i=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var a=s,o=a.next;a.next=null,i===null?r=o:i.next=o,i=a;var l=e.alternate;l!==null&&(l=l.updateQueue,s=l.lastBaseUpdate,s!==i&&(s===null?l.firstBaseUpdate=o:s.next=o,l.lastBaseUpdate=a))}if(r!==null){var c=n.baseState;i=0,l=o=a=null,s=r;do{var u=s.lane,m=s.eventTime;if((C&u)===u){l!==null&&(l=l.next={eventTime:m,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});B:{var f=e,g=s;switch(u=B,m=t,g.tag){case 1:if(f=g.payload,typeof f=="function"){c=f.call(m,c,u);break B}c=f;break B;case 3:f.flags=f.flags&-65537|128;case 0:if(f=g.payload,u=typeof f=="function"?f.call(m,c,u):f,u==null)break B;c=EB({},c,u);break B;case 2:$t=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,u=n.effects,u===null?n.effects=[s]:u.push(s))}else m={eventTime:m,lane:u,tag:s.tag,payload:s.payload,callback:s.callback,next:null},l===null?(o=l=m,a=c):l=l.next=m,i|=u;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;u=s,s=u.next,u.next=null,n.lastBaseUpdate=u,n.shared.pending=null}}while(1);if(l===null&&(a=c),n.baseState=a,n.firstBaseUpdate=o,n.lastBaseUpdate=l,B=n.shared.interleaved,B!==null){n=B;do i|=n.lane,n=n.next;while(n!==B)}else r===null&&(n.shared.lanes=0);nn|=i,e.lanes=i,e.memoizedState=c}}function np(e,B,t){if(e=B.effects,B.effects=null,e!==null)for(B=0;B<e.length;B++){var C=e[B],n=C.callback;if(n!==null){if(C.callback=null,C=t,typeof n!="function")throw Error(b(191,n));n.call(C)}}}var Zv=new Yg.Component().refs;function pf(e,B,t,C){B=e.memoizedState,t=t(C,B),t=t==null?B:EB({},B,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var El={isMounted:function(e){return(e=e._reactInternals)?gn(e)===e:!1},enqueueSetState:function(e,B,t){e=e._reactInternals;var C=re(),n=hC(e),r=Ft(C,n);r.payload=B,t!=null&&(r.callback=t),B=fC(e,r,n),B!==null&&(Bt(B,e,n,C),Qa(B,e,n))},enqueueReplaceState:function(e,B,t){e=e._reactInternals;var C=re(),n=hC(e),r=Ft(C,n);r.tag=1,r.payload=B,t!=null&&(r.callback=t),B=fC(e,r,n),B!==null&&(Bt(B,e,n,C),Qa(B,e,n))},enqueueForceUpdate:function(e,B){e=e._reactInternals;var t=re(),C=hC(e),n=Ft(t,C);n.tag=2,B!=null&&(n.callback=B),B=fC(e,n,C),B!==null&&(Bt(B,e,C,t),Qa(B,e,C))}};function rp(e,B,t,C,n,r,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(C,r,i):B.prototype&&B.prototype.isPureReactComponent?!Ri(t,C)||!Ri(n,r):!0}function qv(e,B,t){var C=!1,n=IC,r=B.contextType;return typeof r=="object"&&r!==null?r=Ke(r):(n=pe(B)?en:_B.current,C=B.contextTypes,r=(C=C!=null)?sr(e,n):IC),B=new B(t,r),e.memoizedState=B.state!==null&&B.state!==void 0?B.state:null,B.updater=El,e.stateNode=B,B._reactInternals=e,C&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),B}function ip(e,B,t,C){e=B.state,typeof B.componentWillReceiveProps=="function"&&B.componentWillReceiveProps(t,C),typeof B.UNSAFE_componentWillReceiveProps=="function"&&B.UNSAFE_componentWillReceiveProps(t,C),B.state!==e&&El.enqueueReplaceState(B,B.state,null)}function mf(e,B,t,C){var n=e.stateNode;n.props=t,n.state=e.memoizedState,n.refs=Zv,m1(e);var r=B.contextType;typeof r=="object"&&r!==null?n.context=Ke(r):(r=pe(B)?en:_B.current,n.context=sr(e,r)),n.state=e.memoizedState,r=B.getDerivedStateFromProps,typeof r=="function"&&(pf(e,B,r,t),n.state=e.memoizedState),typeof B.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(B=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),B!==n.state&&El.enqueueReplaceState(n,n.state,null),Eo(e,t,n,C),n.state=e.memoizedState),typeof n.componentDidMount=="function"&&(e.flags|=4194308)}function Gr(e,B,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(b(309));var C=t.stateNode}if(!C)throw Error(b(147,e));var n=C,r=""+e;return B!==null&&B.ref!==null&&typeof B.ref=="function"&&B.ref._stringRef===r?B.ref:(B=function(i){var s=n.refs;s===Zv&&(s=n.refs={}),i===null?delete s[r]:s[r]=i},B._stringRef=r,B)}if(typeof e!="string")throw Error(b(284));if(!t._owner)throw Error(b(290,e))}return e}function Ca(e,B){throw e=Object.prototype.toString.call(B),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":e))}function sp(e){var B=e._init;return B(e._payload)}function zv(e){function B(d,h){if(e){var v=d.deletions;v===null?(d.deletions=[h],d.flags|=16):v.push(h)}}function t(d,h){if(!e)return null;for(;h!==null;)B(d,h),h=h.sibling;return null}function C(d,h){for(d=new Map;h!==null;)h.key!==null?d.set(h.key,h):d.set(h.index,h),h=h.sibling;return d}function n(d,h){return d=pC(d,h),d.index=0,d.sibling=null,d}function r(d,h,v){return d.index=v,e?(v=d.alternate,v!==null?(v=v.index,v<h?(d.flags|=2,h):v):(d.flags|=2,h)):(d.flags|=1048576,h)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,h,v,A){return h===null||h.tag!==6?(h=Qc(v,d.mode,A),h.return=d,h):(h=n(h,v),h.return=d,h)}function a(d,h,v,A){var E=v.type;return E===On?l(d,h,v.props.children,A,v.key):h!==null&&(h.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===_t&&sp(E)===h.type)?(A=n(h,v.props),A.ref=Gr(d,h,v),A.return=d,A):(A=Xa(v.type,v.key,v.props,null,d.mode,A),A.ref=Gr(d,h,v),A.return=d,A)}function o(d,h,v,A){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=Jc(v,d.mode,A),h.return=d,h):(h=n(h,v.children||[]),h.return=d,h)}function l(d,h,v,A,E){return h===null||h.tag!==7?(h=_C(v,d.mode,A,E),h.return=d,h):(h=n(h,v),h.return=d,h)}function c(d,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Qc(""+h,d.mode,v),h.return=d,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case js:return v=Xa(h.type,h.key,h.props,null,d.mode,v),v.ref=Gr(d,null,h),v.return=d,v;case Fn:return h=Jc(h,d.mode,v),h.return=d,h;case _t:var A=h._init;return c(d,A(h._payload),v)}if($r(h)||Tr(h))return h=_C(h,d.mode,v,null),h.return=d,h;Ca(d,h)}return null}function u(d,h,v,A){var E=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return E!==null?null:s(d,h,""+v,A);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case js:return v.key===E?a(d,h,v,A):null;case Fn:return v.key===E?o(d,h,v,A):null;case _t:return E=v._init,u(d,h,E(v._payload),A)}if($r(v)||Tr(v))return E!==null?null:l(d,h,v,A,null);Ca(d,v)}return null}function m(d,h,v,A,E){if(typeof A=="string"&&A!==""||typeof A=="number")return d=d.get(v)||null,s(h,d,""+A,E);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case js:return d=d.get(A.key===null?v:A.key)||null,a(h,d,A,E);case Fn:return d=d.get(A.key===null?v:A.key)||null,o(h,d,A,E);case _t:var w=A._init;return m(d,h,v,w(A._payload),E)}if($r(A)||Tr(A))return d=d.get(v)||null,l(h,d,A,E,null);Ca(h,A)}return null}function f(d,h,v,A){for(var E=null,w=null,S=h,y=h=0,I=null;S!==null&&y<v.length;y++){S.index>y?(I=S,S=null):I=S.sibling;var M=u(d,S,v[y],A);if(M===null){S===null&&(S=I);break}e&&S&&M.alternate===null&&B(d,S),h=r(M,h,y),w===null?E=M:w.sibling=M,w=M,S=I}if(y===v.length)return t(d,S),mB&&LC(d,y),E;if(S===null){for(;y<v.length;y++)S=c(d,v[y],A),S!==null&&(h=r(S,h,y),w===null?E=S:w.sibling=S,w=S);return mB&&LC(d,y),E}for(S=C(d,S);y<v.length;y++)I=m(S,d,y,v[y],A),I!==null&&(e&&I.alternate!==null&&S.delete(I.key===null?y:I.key),h=r(I,h,y),w===null?E=I:w.sibling=I,w=I);return e&&S.forEach(function(V){return B(d,V)}),mB&&LC(d,y),E}function g(d,h,v,A){var E=Tr(v);if(typeof E!="function")throw Error(b(150));if(v=E.call(v),v==null)throw Error(b(151));for(var w=E=null,S=h,y=h=0,I=null,M=v.next();S!==null&&!M.done;y++,M=v.next()){S.index>y?(I=S,S=null):I=S.sibling;var V=u(d,S,M.value,A);if(V===null){S===null&&(S=I);break}e&&S&&V.alternate===null&&B(d,S),h=r(V,h,y),w===null?E=V:w.sibling=V,w=V,S=I}if(M.done)return t(d,S),mB&&LC(d,y),E;if(S===null){for(;!M.done;y++,M=v.next())M=c(d,M.value,A),M!==null&&(h=r(M,h,y),w===null?E=M:w.sibling=M,w=M);return mB&&LC(d,y),E}for(S=C(d,S);!M.done;y++,M=v.next())M=m(S,d,y,M.value,A),M!==null&&(e&&M.alternate!==null&&S.delete(M.key===null?y:M.key),h=r(M,h,y),w===null?E=M:w.sibling=M,w=M);return e&&S.forEach(function(tB){return B(d,tB)}),mB&&LC(d,y),E}function p(d,h,v,A){if(typeof v=="object"&&v!==null&&v.type===On&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case js:B:{for(var E=v.key,w=h;w!==null;){if(w.key===E){if(E=v.type,E===On){if(w.tag===7){t(d,w.sibling),h=n(w,v.props.children),h.return=d,d=h;break B}}else if(w.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===_t&&sp(E)===w.type){t(d,w.sibling),h=n(w,v.props),h.ref=Gr(d,w,v),h.return=d,d=h;break B}t(d,w);break}else B(d,w);w=w.sibling}v.type===On?(h=_C(v.props.children,d.mode,A,v.key),h.return=d,d=h):(A=Xa(v.type,v.key,v.props,null,d.mode,A),A.ref=Gr(d,h,v),A.return=d,d=A)}return i(d);case Fn:B:{for(w=v.key;h!==null;){if(h.key===w)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){t(d,h.sibling),h=n(h,v.children||[]),h.return=d,d=h;break B}else{t(d,h);break}else B(d,h);h=h.sibling}h=Jc(v,d.mode,A),h.return=d,d=h}return i(d);case _t:return w=v._init,p(d,h,w(v._payload),A)}if($r(v))return f(d,h,v,A);if(Tr(v))return g(d,h,v,A);Ca(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(t(d,h.sibling),h=n(h,v),h.return=d,d=h):(t(d,h),h=Qc(v,d.mode,A),h.return=d,d=h),i(d)):t(d,h)}return p}var or=zv(!0),_v=zv(!1),ds={},ft=kC(ds),ki=kC(ds),Ti=kC(ds);function QC(e){if(e===ds)throw Error(b(174));return e}function g1(e,B){switch(oB(Ti,B),oB(ki,e),oB(ft,ds),e=B.nodeType,e){case 9:case 11:B=(B=B.documentElement)?B.namespaceURI:Xu(null,"");break;default:e=e===8?B.parentNode:B,B=e.namespaceURI||null,e=e.tagName,B=Xu(B,e)}hB(ft),oB(ft,B)}function lr(){hB(ft),hB(ki),hB(Ti)}function $v(e){QC(Ti.current);var B=QC(ft.current),t=Xu(B,e.type);B!==t&&(oB(ki,e),oB(ft,t))}function v1(e){ki.current===e&&(hB(ft),hB(ki))}var AB=kC(0);function So(e){for(var B=e;B!==null;){if(B.tag===13){var t=B.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return B}else if(B.tag===19&&B.memoizedProps.revealOrder!==void 0){if(B.flags&128)return B}else if(B.child!==null){B.child.return=B,B=B.child;continue}if(B===e)break;for(;B.sibling===null;){if(B.return===null||B.return===e)return null;B=B.return}B.sibling.return=B.return,B=B.sibling}return null}var Lc=[];function A1(){for(var e=0;e<Lc.length;e++)Lc[e]._workInProgressVersionPrimary=null;Lc.length=0}var Ja=Jt.ReactCurrentDispatcher,Hc=Jt.ReactCurrentBatchConfig,Cn=0,yB=null,FB=null,xB=null,Io=!1,oi=!1,Mi=0,BR=0;function XB(){throw Error(b(321))}function y1(e,B){if(B===null)return!1;for(var t=0;t<B.length&&t<e.length;t++)if(!Ct(e[t],B[t]))return!1;return!0}function E1(e,B,t,C,n,r){if(Cn=r,yB=B,B.memoizedState=null,B.updateQueue=null,B.lanes=0,Ja.current=e===null||e.memoizedState===null?nR:rR,e=t(C,n),oi){r=0;do{if(oi=!1,Mi=0,25<=r)throw Error(b(301));r+=1,xB=FB=null,B.updateQueue=null,Ja.current=iR,e=t(C,n)}while(oi)}if(Ja.current=bo,B=FB!==null&&FB.next!==null,Cn=0,xB=FB=yB=null,Io=!1,B)throw Error(b(300));return e}function S1(){var e=Mi!==0;return Mi=0,e}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xB===null?yB.memoizedState=xB=e:xB=xB.next=e,xB}function Ue(){if(FB===null){var e=yB.alternate;e=e!==null?e.memoizedState:null}else e=FB.next;var B=xB===null?yB.memoizedState:xB.next;if(B!==null)xB=B,FB=e;else{if(e===null)throw Error(b(310));FB=e,e={memoizedState:FB.memoizedState,baseState:FB.baseState,baseQueue:FB.baseQueue,queue:FB.queue,next:null},xB===null?yB.memoizedState=xB=e:xB=xB.next=e}return xB}function Li(e,B){return typeof B=="function"?B(e):B}function xc(e){var B=Ue(),t=B.queue;if(t===null)throw Error(b(311));t.lastRenderedReducer=e;var C=FB,n=C.baseQueue,r=t.pending;if(r!==null){if(n!==null){var i=n.next;n.next=r.next,r.next=i}C.baseQueue=n=r,t.pending=null}if(n!==null){r=n.next,C=C.baseState;var s=i=null,a=null,o=r;do{var l=o.lane;if((Cn&l)===l)a!==null&&(a=a.next={lane:0,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null}),C=o.hasEagerState?o.eagerState:e(C,o.action);else{var c={lane:l,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null};a===null?(s=a=c,i=C):a=a.next=c,yB.lanes|=l,nn|=l}o=o.next}while(o!==null&&o!==r);a===null?i=C:a.next=s,Ct(C,B.memoizedState)||(fe=!0),B.memoizedState=C,B.baseState=i,B.baseQueue=a,t.lastRenderedState=C}if(e=t.interleaved,e!==null){n=e;do r=n.lane,yB.lanes|=r,nn|=r,n=n.next;while(n!==e)}else n===null&&(t.lanes=0);return[B.memoizedState,t.dispatch]}function Gc(e){var B=Ue(),t=B.queue;if(t===null)throw Error(b(311));t.lastRenderedReducer=e;var C=t.dispatch,n=t.pending,r=B.memoizedState;if(n!==null){t.pending=null;var i=n=n.next;do r=e(r,i.action),i=i.next;while(i!==n);Ct(r,B.memoizedState)||(fe=!0),B.memoizedState=r,B.baseQueue===null&&(B.baseState=r),t.lastRenderedState=r}return[r,C]}function BA(){}function eA(e,B){var t=yB,C=Ue(),n=B(),r=!Ct(C.memoizedState,n);if(r&&(C.memoizedState=n,fe=!0),C=C.queue,I1(nA.bind(null,t,C,e),[e]),C.getSnapshot!==B||r||xB!==null&&xB.memoizedState.tag&1){if(t.flags|=2048,Hi(9,CA.bind(null,t,C,n,B),void 0,null),UB===null)throw Error(b(349));Cn&30||tA(t,B,n)}return n}function tA(e,B,t){e.flags|=16384,e={getSnapshot:B,value:t},B=yB.updateQueue,B===null?(B={lastEffect:null,stores:null},yB.updateQueue=B,B.stores=[e]):(t=B.stores,t===null?B.stores=[e]:t.push(e))}function CA(e,B,t,C){B.value=t,B.getSnapshot=C,rA(B)&&iA(e)}function nA(e,B,t){return t(function(){rA(B)&&iA(e)})}function rA(e){var B=e.getSnapshot;e=e.value;try{var t=B();return!Ct(e,t)}catch{return!0}}function iA(e){var B=Lt(e,1);B!==null&&Bt(B,e,1,-1)}function ap(e){var B=ot();return typeof e=="function"&&(e=e()),B.memoizedState=B.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:e},B.queue=e,e=e.dispatch=CR.bind(null,yB,e),[B.memoizedState,e]}function Hi(e,B,t,C){return e={tag:e,create:B,destroy:t,deps:C,next:null},B=yB.updateQueue,B===null?(B={lastEffect:null,stores:null},yB.updateQueue=B,B.lastEffect=e.next=e):(t=B.lastEffect,t===null?B.lastEffect=e.next=e:(C=t.next,t.next=e,e.next=C,B.lastEffect=e)),e}function sA(){return Ue().memoizedState}function Va(e,B,t,C){var n=ot();yB.flags|=e,n.memoizedState=Hi(1|B,t,void 0,C===void 0?null:C)}function Sl(e,B,t,C){var n=Ue();C=C===void 0?null:C;var r=void 0;if(FB!==null){var i=FB.memoizedState;if(r=i.destroy,C!==null&&y1(C,i.deps)){n.memoizedState=Hi(B,t,r,C);return}}yB.flags|=e,n.memoizedState=Hi(1|B,t,r,C)}function op(e,B){return Va(8390656,8,e,B)}function I1(e,B){return Sl(2048,8,e,B)}function aA(e,B){return Sl(4,2,e,B)}function oA(e,B){return Sl(4,4,e,B)}function lA(e,B){if(typeof B=="function")return e=e(),B(e),function(){B(null)};if(B!=null)return e=e(),B.current=e,function(){B.current=null}}function cA(e,B,t){return t=t!=null?t.concat([e]):null,Sl(4,4,lA.bind(null,B,e),t)}function b1(){}function uA(e,B){var t=Ue();B=B===void 0?null:B;var C=t.memoizedState;return C!==null&&B!==null&&y1(B,C[1])?C[0]:(t.memoizedState=[e,B],e)}function fA(e,B){var t=Ue();B=B===void 0?null:B;var C=t.memoizedState;return C!==null&&B!==null&&y1(B,C[1])?C[0]:(e=e(),t.memoizedState=[e,B],e)}function dA(e,B,t){return Cn&21?(Ct(t,B)||(t=mv(),yB.lanes|=t,nn|=t,e.baseState=!0),B):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=t)}function eR(e,B){var t=CB;CB=t!==0&&4>t?t:4,e(!0);var C=Hc.transition;Hc.transition={};try{e(!1),B()}finally{CB=t,Hc.transition=C}}function hA(){return Ue().memoizedState}function tR(e,B,t){var C=hC(e);if(t={lane:C,action:t,hasEagerState:!1,eagerState:null,next:null},pA(e))mA(B,t);else if(t=Yv(e,B,t,C),t!==null){var n=re();Bt(t,e,C,n),gA(t,B,C)}}function CR(e,B,t){var C=hC(e),n={lane:C,action:t,hasEagerState:!1,eagerState:null,next:null};if(pA(e))mA(B,n);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=B.lastRenderedReducer,r!==null))try{var i=B.lastRenderedState,s=r(i,t);if(n.hasEagerState=!0,n.eagerState=s,Ct(s,i)){var a=B.interleaved;a===null?(n.next=n,p1(B)):(n.next=a.next,a.next=n),B.interleaved=n;return}}catch{}finally{}t=Yv(e,B,n,C),t!==null&&(n=re(),Bt(t,e,C,n),gA(t,B,C))}}function pA(e){var B=e.alternate;return e===yB||B!==null&&B===yB}function mA(e,B){oi=Io=!0;var t=e.pending;t===null?B.next=B:(B.next=t.next,t.next=B),e.pending=B}function gA(e,B,t){if(t&4194240){var C=B.lanes;C&=e.pendingLanes,t|=C,B.lanes=t,t1(e,t)}}var bo={readContext:Ke,useCallback:XB,useContext:XB,useEffect:XB,useImperativeHandle:XB,useInsertionEffect:XB,useLayoutEffect:XB,useMemo:XB,useReducer:XB,useRef:XB,useState:XB,useDebugValue:XB,useDeferredValue:XB,useTransition:XB,useMutableSource:XB,useSyncExternalStore:XB,useId:XB,unstable_isNewReconciler:!1},nR={readContext:Ke,useCallback:function(e,B){return ot().memoizedState=[e,B===void 0?null:B],e},useContext:Ke,useEffect:op,useImperativeHandle:function(e,B,t){return t=t!=null?t.concat([e]):null,Va(4194308,4,lA.bind(null,B,e),t)},useLayoutEffect:function(e,B){return Va(4194308,4,e,B)},useInsertionEffect:function(e,B){return Va(4,2,e,B)},useMemo:function(e,B){var t=ot();return B=B===void 0?null:B,e=e(),t.memoizedState=[e,B],e},useReducer:function(e,B,t){var C=ot();return B=t!==void 0?t(B):B,C.memoizedState=C.baseState=B,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:B},C.queue=e,e=e.dispatch=tR.bind(null,yB,e),[C.memoizedState,e]},useRef:function(e){var B=ot();return e={current:e},B.memoizedState=e},useState:ap,useDebugValue:b1,useDeferredValue:function(e){return ot().memoizedState=e},useTransition:function(){var e=ap(!1),B=e[0];return e=eR.bind(null,e[1]),ot().memoizedState=e,[B,e]},useMutableSource:function(){},useSyncExternalStore:function(e,B,t){var C=yB,n=ot();if(mB){if(t===void 0)throw Error(b(407));t=t()}else{if(t=B(),UB===null)throw Error(b(349));Cn&30||tA(C,B,t)}n.memoizedState=t;var r={value:t,getSnapshot:B};return n.queue=r,op(nA.bind(null,C,r,e),[e]),C.flags|=2048,Hi(9,CA.bind(null,C,r,t,B),void 0,null),t},useId:function(){var e=ot(),B=UB.identifierPrefix;if(mB){var t=Dt,C=wt;t=(C&~(1<<32-$e(C)-1)).toString(32)+t,B=":"+B+"R"+t,t=Mi++,0<t&&(B+="H"+t.toString(32)),B+=":"}else t=BR++,B=":"+B+"r"+t.toString(32)+":";return e.memoizedState=B},unstable_isNewReconciler:!1},rR={readContext:Ke,useCallback:uA,useContext:Ke,useEffect:I1,useImperativeHandle:cA,useInsertionEffect:aA,useLayoutEffect:oA,useMemo:fA,useReducer:xc,useRef:sA,useState:function(){return xc(Li)},useDebugValue:b1,useDeferredValue:function(e){var B=Ue();return dA(B,FB.memoizedState,e)},useTransition:function(){var e=xc(Li)[0],B=Ue().memoizedState;return[e,B]},useMutableSource:BA,useSyncExternalStore:eA,useId:hA,unstable_isNewReconciler:!1},iR={readContext:Ke,useCallback:uA,useContext:Ke,useEffect:I1,useImperativeHandle:cA,useInsertionEffect:aA,useLayoutEffect:oA,useMemo:fA,useReducer:Gc,useRef:sA,useState:function(){return Gc(Li)},useDebugValue:b1,useDeferredValue:function(e){var B=Ue();return FB===null?B.memoizedState=e:dA(B,FB.memoizedState,e)},useTransition:function(){var e=Gc(Li)[0],B=Ue().memoizedState;return[e,B]},useMutableSource:BA,useSyncExternalStore:eA,useId:hA,unstable_isNewReconciler:!1};function cr(e,B){try{var t="",C=B;do t+=T3(C),C=C.return;while(C);var n=t}catch(r){n=`
Error generating stack: `+r.message+`
`+r.stack}return{value:e,source:B,stack:n,digest:null}}function Kc(e,B,t){return{value:e,source:null,stack:t??null,digest:B??null}}function gf(e,B){try{console.error(B.value)}catch(t){setTimeout(function(){throw t})}}var sR=typeof WeakMap=="function"?WeakMap:Map;function vA(e,B,t){t=Ft(-1,t),t.tag=3,t.payload={element:null};var C=B.value;return t.callback=function(){Do||(Do=!0,Pf=C),gf(e,B)},t}function AA(e,B,t){t=Ft(-1,t),t.tag=3;var C=e.type.getDerivedStateFromError;if(typeof C=="function"){var n=B.value;t.payload=function(){return C(n)},t.callback=function(){gf(e,B)}}var r=e.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){gf(e,B),typeof C!="function"&&(dC===null?dC=new Set([this]):dC.add(this));var i=B.stack;this.componentDidCatch(B.value,{componentStack:i!==null?i:""})}),t}function lp(e,B,t){var C=e.pingCache;if(C===null){C=e.pingCache=new sR;var n=new Set;C.set(B,n)}else n=C.get(B),n===void 0&&(n=new Set,C.set(B,n));n.has(t)||(n.add(t),e=yR.bind(null,e,B,t),B.then(e,e))}function cp(e){do{var B;if((B=e.tag===13)&&(B=e.memoizedState,B=B!==null?B.dehydrated!==null:!0),B)return e;e=e.return}while(e!==null);return null}function up(e,B,t,C,n){return e.mode&1?(e.flags|=65536,e.lanes=n,e):(e===B?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(B=Ft(-1,1),B.tag=2,fC(t,B,1))),t.lanes|=1),e)}var aR=Jt.ReactCurrentOwner,fe=!1;function te(e,B,t,C){B.child=e===null?_v(B,null,t,C):or(B,e.child,t,C)}function fp(e,B,t,C,n){t=t.render;var r=B.ref;return zn(B,n),C=E1(e,B,t,C,r,n),t=S1(),e!==null&&!fe?(B.updateQueue=e.updateQueue,B.flags&=-2053,e.lanes&=~n,Ht(e,B,n)):(mB&&t&&l1(B),B.flags|=1,te(e,B,C,n),B.child)}function dp(e,B,t,C,n){if(e===null){var r=t.type;return typeof r=="function"&&!k1(r)&&r.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(B.tag=15,B.type=r,yA(e,B,r,C,n)):(e=Xa(t.type,null,C,B,B.mode,n),e.ref=B.ref,e.return=B,B.child=e)}if(r=e.child,!(e.lanes&n)){var i=r.memoizedProps;if(t=t.compare,t=t!==null?t:Ri,t(i,C)&&e.ref===B.ref)return Ht(e,B,n)}return B.flags|=1,e=pC(r,C),e.ref=B.ref,e.return=B,B.child=e}function yA(e,B,t,C,n){if(e!==null){var r=e.memoizedProps;if(Ri(r,C)&&e.ref===B.ref)if(fe=!1,B.pendingProps=C=r,(e.lanes&n)!==0)e.flags&131072&&(fe=!0);else return B.lanes=e.lanes,Ht(e,B,n)}return vf(e,B,t,C,n)}function EA(e,B,t){var C=B.pendingProps,n=C.children,r=e!==null?e.memoizedState:null;if(C.mode==="hidden")if(!(B.mode&1))B.memoizedState={baseLanes:0,cachePool:null,transitions:null},oB(Qn,Se),Se|=t;else{if(!(t&1073741824))return e=r!==null?r.baseLanes|t:t,B.lanes=B.childLanes=1073741824,B.memoizedState={baseLanes:e,cachePool:null,transitions:null},B.updateQueue=null,oB(Qn,Se),Se|=e,null;B.memoizedState={baseLanes:0,cachePool:null,transitions:null},C=r!==null?r.baseLanes:t,oB(Qn,Se),Se|=C}else r!==null?(C=r.baseLanes|t,B.memoizedState=null):C=t,oB(Qn,Se),Se|=C;return te(e,B,n,t),B.child}function SA(e,B){var t=B.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(B.flags|=512,B.flags|=2097152)}function vf(e,B,t,C,n){var r=pe(t)?en:_B.current;return r=sr(B,r),zn(B,n),t=E1(e,B,t,C,r,n),C=S1(),e!==null&&!fe?(B.updateQueue=e.updateQueue,B.flags&=-2053,e.lanes&=~n,Ht(e,B,n)):(mB&&C&&l1(B),B.flags|=1,te(e,B,t,n),B.child)}function hp(e,B,t,C,n){if(pe(t)){var r=!0;mo(B)}else r=!1;if(zn(B,n),B.stateNode===null)Wa(e,B),qv(B,t,C),mf(B,t,C,n),C=!0;else if(e===null){var i=B.stateNode,s=B.memoizedProps;i.props=s;var a=i.context,o=t.contextType;typeof o=="object"&&o!==null?o=Ke(o):(o=pe(t)?en:_B.current,o=sr(B,o));var l=t.getDerivedStateFromProps,c=typeof l=="function"||typeof i.getSnapshotBeforeUpdate=="function";c||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==C||a!==o)&&ip(B,i,C,o),$t=!1;var u=B.memoizedState;i.state=u,Eo(B,C,i,n),a=B.memoizedState,s!==C||u!==a||he.current||$t?(typeof l=="function"&&(pf(B,t,l,C),a=B.memoizedState),(s=$t||rp(B,t,s,C,u,a,o))?(c||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(B.flags|=4194308)):(typeof i.componentDidMount=="function"&&(B.flags|=4194308),B.memoizedProps=C,B.memoizedState=a),i.props=C,i.state=a,i.context=o,C=s):(typeof i.componentDidMount=="function"&&(B.flags|=4194308),C=!1)}else{i=B.stateNode,Xv(e,B),s=B.memoizedProps,o=B.type===B.elementType?s:We(B.type,s),i.props=o,c=B.pendingProps,u=i.context,a=t.contextType,typeof a=="object"&&a!==null?a=Ke(a):(a=pe(t)?en:_B.current,a=sr(B,a));var m=t.getDerivedStateFromProps;(l=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==c||u!==a)&&ip(B,i,C,a),$t=!1,u=B.memoizedState,i.state=u,Eo(B,C,i,n);var f=B.memoizedState;s!==c||u!==f||he.current||$t?(typeof m=="function"&&(pf(B,t,m,C),f=B.memoizedState),(o=$t||rp(B,t,o,C,u,f,a)||!1)?(l||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(C,f,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(C,f,a)),typeof i.componentDidUpdate=="function"&&(B.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(B.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(B.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(B.flags|=1024),B.memoizedProps=C,B.memoizedState=f),i.props=C,i.state=f,i.context=a,C=o):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(B.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(B.flags|=1024),C=!1)}return Af(e,B,t,C,r,n)}function Af(e,B,t,C,n,r){SA(e,B);var i=(B.flags&128)!==0;if(!C&&!i)return n&&Bp(B,t,!1),Ht(e,B,r);C=B.stateNode,aR.current=B;var s=i&&typeof t.getDerivedStateFromError!="function"?null:C.render();return B.flags|=1,e!==null&&i?(B.child=or(B,e.child,null,r),B.child=or(B,null,s,r)):te(e,B,s,r),B.memoizedState=C.state,n&&Bp(B,t,!0),B.child}function IA(e){var B=e.stateNode;B.pendingContext?$2(e,B.pendingContext,B.pendingContext!==B.context):B.context&&$2(e,B.context,!1),g1(e,B.containerInfo)}function pp(e,B,t,C,n){return ar(),u1(n),B.flags|=256,te(e,B,t,C),B.child}var yf={dehydrated:null,treeContext:null,retryLane:0};function Ef(e){return{baseLanes:e,cachePool:null,transitions:null}}function bA(e,B,t){var C=B.pendingProps,n=AB.current,r=!1,i=(B.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(n&2)!==0),s?(r=!0,B.flags&=-129):(e===null||e.memoizedState!==null)&&(n|=1),oB(AB,n&1),e===null)return df(B),e=B.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(B.mode&1?e.data==="$!"?B.lanes=8:B.lanes=1073741824:B.lanes=1,null):(i=C.children,e=C.fallback,r?(C=B.mode,r=B.child,i={mode:"hidden",children:i},!(C&1)&&r!==null?(r.childLanes=0,r.pendingProps=i):r=wl(i,C,0,null),e=_C(e,C,t,null),r.return=B,e.return=B,r.sibling=e,B.child=r,B.child.memoizedState=Ef(t),B.memoizedState=yf,e):w1(B,i));if(n=e.memoizedState,n!==null&&(s=n.dehydrated,s!==null))return oR(e,B,i,C,s,n,t);if(r){r=C.fallback,i=B.mode,n=e.child,s=n.sibling;var a={mode:"hidden",children:C.children};return!(i&1)&&B.child!==n?(C=B.child,C.childLanes=0,C.pendingProps=a,B.deletions=null):(C=pC(n,a),C.subtreeFlags=n.subtreeFlags&14680064),s!==null?r=pC(s,r):(r=_C(r,i,t,null),r.flags|=2),r.return=B,C.return=B,C.sibling=r,B.child=C,C=r,r=B.child,i=e.child.memoizedState,i=i===null?Ef(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},r.memoizedState=i,r.childLanes=e.childLanes&~t,B.memoizedState=yf,C}return r=e.child,e=r.sibling,C=pC(r,{mode:"visible",children:C.children}),!(B.mode&1)&&(C.lanes=t),C.return=B,C.sibling=null,e!==null&&(t=B.deletions,t===null?(B.deletions=[e],B.flags|=16):t.push(e)),B.child=C,B.memoizedState=null,C}function w1(e,B){return B=wl({mode:"visible",children:B},e.mode,0,null),B.return=e,e.child=B}function na(e,B,t,C){return C!==null&&u1(C),or(B,e.child,null,t),e=w1(B,B.pendingProps.children),e.flags|=2,B.memoizedState=null,e}function oR(e,B,t,C,n,r,i){if(t)return B.flags&256?(B.flags&=-257,C=Kc(Error(b(422))),na(e,B,i,C)):B.memoizedState!==null?(B.child=e.child,B.flags|=128,null):(r=C.fallback,n=B.mode,C=wl({mode:"visible",children:C.children},n,0,null),r=_C(r,n,i,null),r.flags|=2,C.return=B,r.return=B,C.sibling=r,B.child=C,B.mode&1&&or(B,e.child,null,i),B.child.memoizedState=Ef(i),B.memoizedState=yf,r);if(!(B.mode&1))return na(e,B,i,null);if(n.data==="$!"){if(C=n.nextSibling&&n.nextSibling.dataset,C)var s=C.dgst;return C=s,r=Error(b(419)),C=Kc(r,C,void 0),na(e,B,i,C)}if(s=(i&e.childLanes)!==0,fe||s){if(C=UB,C!==null){switch(i&-i){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:n=0}n=n&(C.suspendedLanes|i)?0:n,n!==0&&n!==r.retryLane&&(r.retryLane=n,Lt(e,n),Bt(C,e,n,-1))}return O1(),C=Kc(Error(b(421))),na(e,B,i,C)}return n.data==="$?"?(B.flags|=128,B.child=e.child,B=ER.bind(null,e),n._reactRetry=B,null):(e=r.treeContext,Ie=uC(n.nextSibling),be=B,mB=!0,Ye=null,e!==null&&(Te[Me++]=wt,Te[Me++]=Dt,Te[Me++]=tn,wt=e.id,Dt=e.overflow,tn=B),B=w1(B,C.children),B.flags|=4096,B)}function mp(e,B,t){e.lanes|=B;var C=e.alternate;C!==null&&(C.lanes|=B),hf(e.return,B,t)}function Uc(e,B,t,C,n){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:B,rendering:null,renderingStartTime:0,last:C,tail:t,tailMode:n}:(r.isBackwards=B,r.rendering=null,r.renderingStartTime=0,r.last=C,r.tail=t,r.tailMode=n)}function wA(e,B,t){var C=B.pendingProps,n=C.revealOrder,r=C.tail;if(te(e,B,C.children,t),C=AB.current,C&2)C=C&1|2,B.flags|=128;else{if(e!==null&&e.flags&128)B:for(e=B.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mp(e,t,B);else if(e.tag===19)mp(e,t,B);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===B)break B;for(;e.sibling===null;){if(e.return===null||e.return===B)break B;e=e.return}e.sibling.return=e.return,e=e.sibling}C&=1}if(oB(AB,C),!(B.mode&1))B.memoizedState=null;else switch(n){case"forwards":for(t=B.child,n=null;t!==null;)e=t.alternate,e!==null&&So(e)===null&&(n=t),t=t.sibling;t=n,t===null?(n=B.child,B.child=null):(n=t.sibling,t.sibling=null),Uc(B,!1,n,t,r);break;case"backwards":for(t=null,n=B.child,B.child=null;n!==null;){if(e=n.alternate,e!==null&&So(e)===null){B.child=n;break}e=n.sibling,n.sibling=t,t=n,n=e}Uc(B,!0,t,null,r);break;case"together":Uc(B,!1,null,null,void 0);break;default:B.memoizedState=null}return B.child}function Wa(e,B){!(B.mode&1)&&e!==null&&(e.alternate=null,B.alternate=null,B.flags|=2)}function Ht(e,B,t){if(e!==null&&(B.dependencies=e.dependencies),nn|=B.lanes,!(t&B.childLanes))return null;if(e!==null&&B.child!==e.child)throw Error(b(153));if(B.child!==null){for(e=B.child,t=pC(e,e.pendingProps),B.child=t,t.return=B;e.sibling!==null;)e=e.sibling,t=t.sibling=pC(e,e.pendingProps),t.return=B;t.sibling=null}return B.child}function lR(e,B,t){switch(B.tag){case 3:IA(B),ar();break;case 5:$v(B);break;case 1:pe(B.type)&&mo(B);break;case 4:g1(B,B.stateNode.containerInfo);break;case 10:var C=B.type._context,n=B.memoizedProps.value;oB(Ao,C._currentValue),C._currentValue=n;break;case 13:if(C=B.memoizedState,C!==null)return C.dehydrated!==null?(oB(AB,AB.current&1),B.flags|=128,null):t&B.child.childLanes?bA(e,B,t):(oB(AB,AB.current&1),e=Ht(e,B,t),e!==null?e.sibling:null);oB(AB,AB.current&1);break;case 19:if(C=(t&B.childLanes)!==0,e.flags&128){if(C)return wA(e,B,t);B.flags|=128}if(n=B.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),oB(AB,AB.current),C)break;return null;case 22:case 23:return B.lanes=0,EA(e,B,t)}return Ht(e,B,t)}var DA,Sf,PA,RA;DA=function(e,B){for(var t=B.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===B)break;for(;t.sibling===null;){if(t.return===null||t.return===B)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Sf=function(){};PA=function(e,B,t,C){var n=e.memoizedProps;if(n!==C){e=B.stateNode,QC(ft.current);var r=null;switch(t){case"input":n=Vu(e,n),C=Vu(e,C),r=[];break;case"select":n=EB({},n,{value:void 0}),C=EB({},C,{value:void 0}),r=[];break;case"textarea":n=Yu(e,n),C=Yu(e,C),r=[];break;default:typeof n.onClick!="function"&&typeof C.onClick=="function"&&(e.onclick=ho)}Zu(t,C);var i;t=null;for(o in n)if(!C.hasOwnProperty(o)&&n.hasOwnProperty(o)&&n[o]!=null)if(o==="style"){var s=n[o];for(i in s)s.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else o!=="dangerouslySetInnerHTML"&&o!=="children"&&o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ei.hasOwnProperty(o)?r||(r=[]):(r=r||[]).push(o,null));for(o in C){var a=C[o];if(s=n!=null?n[o]:void 0,C.hasOwnProperty(o)&&a!==s&&(a!=null||s!=null))if(o==="style")if(s){for(i in s)!s.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in a)a.hasOwnProperty(i)&&s[i]!==a[i]&&(t||(t={}),t[i]=a[i])}else t||(r||(r=[]),r.push(o,t)),t=a;else o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(r=r||[]).push(o,a)):o==="children"?typeof a!="string"&&typeof a!="number"||(r=r||[]).push(o,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&(Ei.hasOwnProperty(o)?(a!=null&&o==="onScroll"&&uB("scroll",e),r||s===a||(r=[])):(r=r||[]).push(o,a))}t&&(r=r||[]).push("style",t);var o=r;(B.updateQueue=o)&&(B.flags|=4)}};RA=function(e,B,t,C){t!==C&&(B.flags|=4)};function Kr(e,B){if(!mB)switch(e.tailMode){case"hidden":B=e.tail;for(var t=null;B!==null;)B.alternate!==null&&(t=B),B=B.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var C=null;t!==null;)t.alternate!==null&&(C=t),t=t.sibling;C===null?B||e.tail===null?e.tail=null:e.tail.sibling=null:C.sibling=null}}function ZB(e){var B=e.alternate!==null&&e.alternate.child===e.child,t=0,C=0;if(B)for(var n=e.child;n!==null;)t|=n.lanes|n.childLanes,C|=n.subtreeFlags&14680064,C|=n.flags&14680064,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)t|=n.lanes|n.childLanes,C|=n.subtreeFlags,C|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=C,e.childLanes=t,B}function cR(e,B,t){var C=B.pendingProps;switch(c1(B),B.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ZB(B),null;case 1:return pe(B.type)&&po(),ZB(B),null;case 3:return C=B.stateNode,lr(),hB(he),hB(_B),A1(),C.pendingContext&&(C.context=C.pendingContext,C.pendingContext=null),(e===null||e.child===null)&&(ta(B)?B.flags|=4:e===null||e.memoizedState.isDehydrated&&!(B.flags&256)||(B.flags|=1024,Ye!==null&&(Ff(Ye),Ye=null))),Sf(e,B),ZB(B),null;case 5:v1(B);var n=QC(Ti.current);if(t=B.type,e!==null&&B.stateNode!=null)PA(e,B,t,C,n),e.ref!==B.ref&&(B.flags|=512,B.flags|=2097152);else{if(!C){if(B.stateNode===null)throw Error(b(166));return ZB(B),null}if(e=QC(ft.current),ta(B)){C=B.stateNode,t=B.type;var r=B.memoizedProps;switch(C[lt]=B,C[Oi]=r,e=(B.mode&1)!==0,t){case"dialog":uB("cancel",C),uB("close",C);break;case"iframe":case"object":case"embed":uB("load",C);break;case"video":case"audio":for(n=0;n<ei.length;n++)uB(ei[n],C);break;case"source":uB("error",C);break;case"img":case"image":case"link":uB("error",C),uB("load",C);break;case"details":uB("toggle",C);break;case"input":w2(C,r),uB("invalid",C);break;case"select":C._wrapperState={wasMultiple:!!r.multiple},uB("invalid",C);break;case"textarea":P2(C,r),uB("invalid",C)}Zu(t,r),n=null;for(var i in r)if(r.hasOwnProperty(i)){var s=r[i];i==="children"?typeof s=="string"?C.textContent!==s&&(r.suppressHydrationWarning!==!0&&ea(C.textContent,s,e),n=["children",s]):typeof s=="number"&&C.textContent!==""+s&&(r.suppressHydrationWarning!==!0&&ea(C.textContent,s,e),n=["children",""+s]):Ei.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&uB("scroll",C)}switch(t){case"input":Ys(C),D2(C,r,!0);break;case"textarea":Ys(C),R2(C);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(C.onclick=ho)}C=n,B.updateQueue=C,C!==null&&(B.flags|=4)}else{i=n.nodeType===9?n:n.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=tv(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof C.is=="string"?e=i.createElement(t,{is:C.is}):(e=i.createElement(t),t==="select"&&(i=e,C.multiple?i.multiple=!0:C.size&&(i.size=C.size))):e=i.createElementNS(e,t),e[lt]=B,e[Oi]=C,DA(e,B,!1,!1),B.stateNode=e;B:{switch(i=qu(t,C),t){case"dialog":uB("cancel",e),uB("close",e),n=C;break;case"iframe":case"object":case"embed":uB("load",e),n=C;break;case"video":case"audio":for(n=0;n<ei.length;n++)uB(ei[n],e);n=C;break;case"source":uB("error",e),n=C;break;case"img":case"image":case"link":uB("error",e),uB("load",e),n=C;break;case"details":uB("toggle",e),n=C;break;case"input":w2(e,C),n=Vu(e,C),uB("invalid",e);break;case"option":n=C;break;case"select":e._wrapperState={wasMultiple:!!C.multiple},n=EB({},C,{value:void 0}),uB("invalid",e);break;case"textarea":P2(e,C),n=Yu(e,C),uB("invalid",e);break;default:n=C}Zu(t,n),s=n;for(r in s)if(s.hasOwnProperty(r)){var a=s[r];r==="style"?rv(e,a):r==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Cv(e,a)):r==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&Si(e,a):typeof a=="number"&&Si(e,""+a):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(Ei.hasOwnProperty(r)?a!=null&&r==="onScroll"&&uB("scroll",e):a!=null&&qd(e,r,a,i))}switch(t){case"input":Ys(e),D2(e,C,!1);break;case"textarea":Ys(e),R2(e);break;case"option":C.value!=null&&e.setAttribute("value",""+SC(C.value));break;case"select":e.multiple=!!C.multiple,r=C.value,r!=null?Yn(e,!!C.multiple,r,!1):C.defaultValue!=null&&Yn(e,!!C.multiple,C.defaultValue,!0);break;default:typeof n.onClick=="function"&&(e.onclick=ho)}switch(t){case"button":case"input":case"select":case"textarea":C=!!C.autoFocus;break B;case"img":C=!0;break B;default:C=!1}}C&&(B.flags|=4)}B.ref!==null&&(B.flags|=512,B.flags|=2097152)}return ZB(B),null;case 6:if(e&&B.stateNode!=null)RA(e,B,e.memoizedProps,C);else{if(typeof C!="string"&&B.stateNode===null)throw Error(b(166));if(t=QC(Ti.current),QC(ft.current),ta(B)){if(C=B.stateNode,t=B.memoizedProps,C[lt]=B,(r=C.nodeValue!==t)&&(e=be,e!==null))switch(e.tag){case 3:ea(C.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ea(C.nodeValue,t,(e.mode&1)!==0)}r&&(B.flags|=4)}else C=(t.nodeType===9?t:t.ownerDocument).createTextNode(C),C[lt]=B,B.stateNode=C}return ZB(B),null;case 13:if(hB(AB),C=B.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(mB&&Ie!==null&&B.mode&1&&!(B.flags&128))jv(),ar(),B.flags|=98560,r=!1;else if(r=ta(B),C!==null&&C.dehydrated!==null){if(e===null){if(!r)throw Error(b(318));if(r=B.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(b(317));r[lt]=B}else ar(),!(B.flags&128)&&(B.memoizedState=null),B.flags|=4;ZB(B),r=!1}else Ye!==null&&(Ff(Ye),Ye=null),r=!0;if(!r)return B.flags&65536?B:null}return B.flags&128?(B.lanes=t,B):(C=C!==null,C!==(e!==null&&e.memoizedState!==null)&&C&&(B.child.flags|=8192,B.mode&1&&(e===null||AB.current&1?TB===0&&(TB=3):O1())),B.updateQueue!==null&&(B.flags|=4),ZB(B),null);case 4:return lr(),Sf(e,B),e===null&&Ni(B.stateNode.containerInfo),ZB(B),null;case 10:return h1(B.type._context),ZB(B),null;case 17:return pe(B.type)&&po(),ZB(B),null;case 19:if(hB(AB),r=B.memoizedState,r===null)return ZB(B),null;if(C=(B.flags&128)!==0,i=r.rendering,i===null)if(C)Kr(r,!1);else{if(TB!==0||e!==null&&e.flags&128)for(e=B.child;e!==null;){if(i=So(e),i!==null){for(B.flags|=128,Kr(r,!1),C=i.updateQueue,C!==null&&(B.updateQueue=C,B.flags|=4),B.subtreeFlags=0,C=t,t=B.child;t!==null;)r=t,e=C,r.flags&=14680066,i=r.alternate,i===null?(r.childLanes=0,r.lanes=e,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=i.childLanes,r.lanes=i.lanes,r.child=i.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=i.memoizedProps,r.memoizedState=i.memoizedState,r.updateQueue=i.updateQueue,r.type=i.type,e=i.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return oB(AB,AB.current&1|2),B.child}e=e.sibling}r.tail!==null&&PB()>ur&&(B.flags|=128,C=!0,Kr(r,!1),B.lanes=4194304)}else{if(!C)if(e=So(i),e!==null){if(B.flags|=128,C=!0,t=e.updateQueue,t!==null&&(B.updateQueue=t,B.flags|=4),Kr(r,!0),r.tail===null&&r.tailMode==="hidden"&&!i.alternate&&!mB)return ZB(B),null}else 2*PB()-r.renderingStartTime>ur&&t!==1073741824&&(B.flags|=128,C=!0,Kr(r,!1),B.lanes=4194304);r.isBackwards?(i.sibling=B.child,B.child=i):(t=r.last,t!==null?t.sibling=i:B.child=i,r.last=i)}return r.tail!==null?(B=r.tail,r.rendering=B,r.tail=B.sibling,r.renderingStartTime=PB(),B.sibling=null,t=AB.current,oB(AB,C?t&1|2:t&1),B):(ZB(B),null);case 22:case 23:return F1(),C=B.memoizedState!==null,e!==null&&e.memoizedState!==null!==C&&(B.flags|=8192),C&&B.mode&1?Se&1073741824&&(ZB(B),B.subtreeFlags&6&&(B.flags|=8192)):ZB(B),null;case 24:return null;case 25:return null}throw Error(b(156,B.tag))}function uR(e,B){switch(c1(B),B.tag){case 1:return pe(B.type)&&po(),e=B.flags,e&65536?(B.flags=e&-65537|128,B):null;case 3:return lr(),hB(he),hB(_B),A1(),e=B.flags,e&65536&&!(e&128)?(B.flags=e&-65537|128,B):null;case 5:return v1(B),null;case 13:if(hB(AB),e=B.memoizedState,e!==null&&e.dehydrated!==null){if(B.alternate===null)throw Error(b(340));ar()}return e=B.flags,e&65536?(B.flags=e&-65537|128,B):null;case 19:return hB(AB),null;case 4:return lr(),null;case 10:return h1(B.type._context),null;case 22:case 23:return F1(),null;case 24:return null;default:return null}}var ra=!1,qB=!1,fR=typeof WeakSet=="function"?WeakSet:Set,T=null;function Un(e,B){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(C){SB(e,B,C)}else t.current=null}function If(e,B,t){try{t()}catch(C){SB(e,B,C)}}var gp=!1;function dR(e,B){if(sf=co,e=kv(),o1(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else B:{t=(t=e.ownerDocument)&&t.defaultView||window;var C=t.getSelection&&t.getSelection();if(C&&C.rangeCount!==0){t=C.anchorNode;var n=C.anchorOffset,r=C.focusNode;C=C.focusOffset;try{t.nodeType,r.nodeType}catch{t=null;break B}var i=0,s=-1,a=-1,o=0,l=0,c=e,u=null;e:for(;;){for(var m;c!==t||n!==0&&c.nodeType!==3||(s=i+n),c!==r||C!==0&&c.nodeType!==3||(a=i+C),c.nodeType===3&&(i+=c.nodeValue.length),(m=c.firstChild)!==null;)u=c,c=m;for(;;){if(c===e)break e;if(u===t&&++o===n&&(s=i),u===r&&++l===C&&(a=i),(m=c.nextSibling)!==null)break;c=u,u=c.parentNode}c=m}t=s===-1||a===-1?null:{start:s,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(af={focusedElem:e,selectionRange:t},co=!1,T=B;T!==null;)if(B=T,e=B.child,(B.subtreeFlags&1028)!==0&&e!==null)e.return=B,T=e;else for(;T!==null;){B=T;try{var f=B.alternate;if(B.flags&1024)switch(B.tag){case 0:case 11:case 15:break;case 1:if(f!==null){var g=f.memoizedProps,p=f.memoizedState,d=B.stateNode,h=d.getSnapshotBeforeUpdate(B.elementType===B.type?g:We(B.type,g),p);d.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=B.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(A){SB(B,B.return,A)}if(e=B.sibling,e!==null){e.return=B.return,T=e;break}T=B.return}return f=gp,gp=!1,f}function li(e,B,t){var C=B.updateQueue;if(C=C!==null?C.lastEffect:null,C!==null){var n=C=C.next;do{if((n.tag&e)===e){var r=n.destroy;n.destroy=void 0,r!==void 0&&If(B,t,r)}n=n.next}while(n!==C)}}function Il(e,B){if(B=B.updateQueue,B=B!==null?B.lastEffect:null,B!==null){var t=B=B.next;do{if((t.tag&e)===e){var C=t.create;t.destroy=C()}t=t.next}while(t!==B)}}function bf(e){var B=e.ref;if(B!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof B=="function"?B(e):B.current=e}}function NA(e){var B=e.alternate;B!==null&&(e.alternate=null,NA(B)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(B=e.stateNode,B!==null&&(delete B[lt],delete B[Oi],delete B[cf],delete B[qP],delete B[zP])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function FA(e){return e.tag===5||e.tag===3||e.tag===4}function vp(e){B:for(;;){for(;e.sibling===null;){if(e.return===null||FA(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue B;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wf(e,B,t){var C=e.tag;if(C===5||C===6)e=e.stateNode,B?t.nodeType===8?t.parentNode.insertBefore(e,B):t.insertBefore(e,B):(t.nodeType===8?(B=t.parentNode,B.insertBefore(e,t)):(B=t,B.appendChild(e)),t=t._reactRootContainer,t!=null||B.onclick!==null||(B.onclick=ho));else if(C!==4&&(e=e.child,e!==null))for(wf(e,B,t),e=e.sibling;e!==null;)wf(e,B,t),e=e.sibling}function Df(e,B,t){var C=e.tag;if(C===5||C===6)e=e.stateNode,B?t.insertBefore(e,B):t.appendChild(e);else if(C!==4&&(e=e.child,e!==null))for(Df(e,B,t),e=e.sibling;e!==null;)Df(e,B,t),e=e.sibling}var VB=null,je=!1;function Xt(e,B,t){for(t=t.child;t!==null;)OA(e,B,t),t=t.sibling}function OA(e,B,t){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(pl,t)}catch{}switch(t.tag){case 5:qB||Un(t,B);case 6:var C=VB,n=je;VB=null,Xt(e,B,t),VB=C,je=n,VB!==null&&(je?(e=VB,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):VB.removeChild(t.stateNode));break;case 18:VB!==null&&(je?(e=VB,t=t.stateNode,e.nodeType===8?Tc(e.parentNode,t):e.nodeType===1&&Tc(e,t),Di(e)):Tc(VB,t.stateNode));break;case 4:C=VB,n=je,VB=t.stateNode.containerInfo,je=!0,Xt(e,B,t),VB=C,je=n;break;case 0:case 11:case 14:case 15:if(!qB&&(C=t.updateQueue,C!==null&&(C=C.lastEffect,C!==null))){n=C=C.next;do{var r=n,i=r.destroy;r=r.tag,i!==void 0&&(r&2||r&4)&&If(t,B,i),n=n.next}while(n!==C)}Xt(e,B,t);break;case 1:if(!qB&&(Un(t,B),C=t.stateNode,typeof C.componentWillUnmount=="function"))try{C.props=t.memoizedProps,C.state=t.memoizedState,C.componentWillUnmount()}catch(s){SB(t,B,s)}Xt(e,B,t);break;case 21:Xt(e,B,t);break;case 22:t.mode&1?(qB=(C=qB)||t.memoizedState!==null,Xt(e,B,t),qB=C):Xt(e,B,t);break;default:Xt(e,B,t)}}function Ap(e){var B=e.updateQueue;if(B!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new fR),B.forEach(function(C){var n=SR.bind(null,e,C);t.has(C)||(t.add(C),C.then(n,n))})}}function Je(e,B){var t=B.deletions;if(t!==null)for(var C=0;C<t.length;C++){var n=t[C];try{var r=e,i=B,s=i;B:for(;s!==null;){switch(s.tag){case 5:VB=s.stateNode,je=!1;break B;case 3:VB=s.stateNode.containerInfo,je=!0;break B;case 4:VB=s.stateNode.containerInfo,je=!0;break B}s=s.return}if(VB===null)throw Error(b(160));OA(r,i,n),VB=null,je=!1;var a=n.alternate;a!==null&&(a.return=null),n.return=null}catch(o){SB(n,B,o)}}if(B.subtreeFlags&12854)for(B=B.child;B!==null;)kA(B,e),B=B.sibling}function kA(e,B){var t=e.alternate,C=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Je(B,e),st(e),C&4){try{li(3,e,e.return),Il(3,e)}catch(g){SB(e,e.return,g)}try{li(5,e,e.return)}catch(g){SB(e,e.return,g)}}break;case 1:Je(B,e),st(e),C&512&&t!==null&&Un(t,t.return);break;case 5:if(Je(B,e),st(e),C&512&&t!==null&&Un(t,t.return),e.flags&32){var n=e.stateNode;try{Si(n,"")}catch(g){SB(e,e.return,g)}}if(C&4&&(n=e.stateNode,n!=null)){var r=e.memoizedProps,i=t!==null?t.memoizedProps:r,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&r.type==="radio"&&r.name!=null&&Bv(n,r),qu(s,i);var o=qu(s,r);for(i=0;i<a.length;i+=2){var l=a[i],c=a[i+1];l==="style"?rv(n,c):l==="dangerouslySetInnerHTML"?Cv(n,c):l==="children"?Si(n,c):qd(n,l,c,o)}switch(s){case"input":Wu(n,r);break;case"textarea":ev(n,r);break;case"select":var u=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!r.multiple;var m=r.value;m!=null?Yn(n,!!r.multiple,m,!1):u!==!!r.multiple&&(r.defaultValue!=null?Yn(n,!!r.multiple,r.defaultValue,!0):Yn(n,!!r.multiple,r.multiple?[]:"",!1))}n[Oi]=r}catch(g){SB(e,e.return,g)}}break;case 6:if(Je(B,e),st(e),C&4){if(e.stateNode===null)throw Error(b(162));n=e.stateNode,r=e.memoizedProps;try{n.nodeValue=r}catch(g){SB(e,e.return,g)}}break;case 3:if(Je(B,e),st(e),C&4&&t!==null&&t.memoizedState.isDehydrated)try{Di(B.containerInfo)}catch(g){SB(e,e.return,g)}break;case 4:Je(B,e),st(e);break;case 13:Je(B,e),st(e),n=e.child,n.flags&8192&&(r=n.memoizedState!==null,n.stateNode.isHidden=r,!r||n.alternate!==null&&n.alternate.memoizedState!==null||(R1=PB())),C&4&&Ap(e);break;case 22:if(l=t!==null&&t.memoizedState!==null,e.mode&1?(qB=(o=qB)||l,Je(B,e),qB=o):Je(B,e),st(e),C&8192){if(o=e.memoizedState!==null,(e.stateNode.isHidden=o)&&!l&&e.mode&1)for(T=e,l=e.child;l!==null;){for(c=T=l;T!==null;){switch(u=T,m=u.child,u.tag){case 0:case 11:case 14:case 15:li(4,u,u.return);break;case 1:Un(u,u.return);var f=u.stateNode;if(typeof f.componentWillUnmount=="function"){C=u,t=u.return;try{B=C,f.props=B.memoizedProps,f.state=B.memoizedState,f.componentWillUnmount()}catch(g){SB(C,t,g)}}break;case 5:Un(u,u.return);break;case 22:if(u.memoizedState!==null){Ep(c);continue}}m!==null?(m.return=u,T=m):Ep(c)}l=l.sibling}B:for(l=null,c=e;;){if(c.tag===5){if(l===null){l=c;try{n=c.stateNode,o?(r=n.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(s=c.stateNode,a=c.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=nv("display",i))}catch(g){SB(e,e.return,g)}}}else if(c.tag===6){if(l===null)try{c.stateNode.nodeValue=o?"":c.memoizedProps}catch(g){SB(e,e.return,g)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break B;for(;c.sibling===null;){if(c.return===null||c.return===e)break B;l===c&&(l=null),c=c.return}l===c&&(l=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Je(B,e),st(e),C&4&&Ap(e);break;case 21:break;default:Je(B,e),st(e)}}function st(e){var B=e.flags;if(B&2){try{B:{for(var t=e.return;t!==null;){if(FA(t)){var C=t;break B}t=t.return}throw Error(b(160))}switch(C.tag){case 5:var n=C.stateNode;C.flags&32&&(Si(n,""),C.flags&=-33);var r=vp(e);Df(e,r,n);break;case 3:case 4:var i=C.stateNode.containerInfo,s=vp(e);wf(e,s,i);break;default:throw Error(b(161))}}catch(a){SB(e,e.return,a)}e.flags&=-3}B&4096&&(e.flags&=-4097)}function hR(e,B,t){T=e,TA(e)}function TA(e,B,t){for(var C=(e.mode&1)!==0;T!==null;){var n=T,r=n.child;if(n.tag===22&&C){var i=n.memoizedState!==null||ra;if(!i){var s=n.alternate,a=s!==null&&s.memoizedState!==null||qB;s=ra;var o=qB;if(ra=i,(qB=a)&&!o)for(T=n;T!==null;)i=T,a=i.child,i.tag===22&&i.memoizedState!==null?Sp(n):a!==null?(a.return=i,T=a):Sp(n);for(;r!==null;)T=r,TA(r),r=r.sibling;T=n,ra=s,qB=o}yp(e)}else n.subtreeFlags&8772&&r!==null?(r.return=n,T=r):yp(e)}}function yp(e){for(;T!==null;){var B=T;if(B.flags&8772){var t=B.alternate;try{if(B.flags&8772)switch(B.tag){case 0:case 11:case 15:qB||Il(5,B);break;case 1:var C=B.stateNode;if(B.flags&4&&!qB)if(t===null)C.componentDidMount();else{var n=B.elementType===B.type?t.memoizedProps:We(B.type,t.memoizedProps);C.componentDidUpdate(n,t.memoizedState,C.__reactInternalSnapshotBeforeUpdate)}var r=B.updateQueue;r!==null&&np(B,r,C);break;case 3:var i=B.updateQueue;if(i!==null){if(t=null,B.child!==null)switch(B.child.tag){case 5:t=B.child.stateNode;break;case 1:t=B.child.stateNode}np(B,i,t)}break;case 5:var s=B.stateNode;if(t===null&&B.flags&4){t=s;var a=B.memoizedProps;switch(B.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(B.memoizedState===null){var o=B.alternate;if(o!==null){var l=o.memoizedState;if(l!==null){var c=l.dehydrated;c!==null&&Di(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}qB||B.flags&512&&bf(B)}catch(u){SB(B,B.return,u)}}if(B===e){T=null;break}if(t=B.sibling,t!==null){t.return=B.return,T=t;break}T=B.return}}function Ep(e){for(;T!==null;){var B=T;if(B===e){T=null;break}var t=B.sibling;if(t!==null){t.return=B.return,T=t;break}T=B.return}}function Sp(e){for(;T!==null;){var B=T;try{switch(B.tag){case 0:case 11:case 15:var t=B.return;try{Il(4,B)}catch(a){SB(B,t,a)}break;case 1:var C=B.stateNode;if(typeof C.componentDidMount=="function"){var n=B.return;try{C.componentDidMount()}catch(a){SB(B,n,a)}}var r=B.return;try{bf(B)}catch(a){SB(B,r,a)}break;case 5:var i=B.return;try{bf(B)}catch(a){SB(B,i,a)}}}catch(a){SB(B,B.return,a)}if(B===e){T=null;break}var s=B.sibling;if(s!==null){s.return=B.return,T=s;break}T=B.return}}var pR=Math.ceil,wo=Jt.ReactCurrentDispatcher,D1=Jt.ReactCurrentOwner,xe=Jt.ReactCurrentBatchConfig,_=0,UB=null,RB=null,WB=0,Se=0,Qn=kC(0),TB=0,xi=null,nn=0,bl=0,P1=0,ci=null,ue=null,R1=0,ur=1/0,St=null,Do=!1,Pf=null,dC=null,ia=!1,sC=null,Po=0,ui=0,Rf=null,ja=-1,Ya=0;function re(){return _&6?PB():ja!==-1?ja:ja=PB()}function hC(e){return e.mode&1?_&2&&WB!==0?WB&-WB:$P.transition!==null?(Ya===0&&(Ya=mv()),Ya):(e=CB,e!==0||(e=window.event,e=e===void 0?16:Iv(e.type)),e):1}function Bt(e,B,t,C){if(50<ui)throw ui=0,Rf=null,Error(b(185));cs(e,t,C),(!(_&2)||e!==UB)&&(e===UB&&(!(_&2)&&(bl|=t),TB===4&&eC(e,WB)),me(e,C),t===1&&_===0&&!(B.mode&1)&&(ur=PB()+500,yl&&TC()))}function me(e,B){var t=e.callbackNode;$3(e,B);var C=lo(e,e===UB?WB:0);if(C===0)t!==null&&O2(t),e.callbackNode=null,e.callbackPriority=0;else if(B=C&-C,e.callbackPriority!==B){if(t!=null&&O2(t),B===1)e.tag===0?_P(Ip.bind(null,e)):Jv(Ip.bind(null,e)),XP(function(){!(_&6)&&TC()}),t=null;else{switch(gv(C)){case 1:t=e1;break;case 4:t=hv;break;case 16:t=oo;break;case 536870912:t=pv;break;default:t=oo}t=QA(t,MA.bind(null,e))}e.callbackPriority=B,e.callbackNode=t}}function MA(e,B){if(ja=-1,Ya=0,_&6)throw Error(b(327));var t=e.callbackNode;if(_n()&&e.callbackNode!==t)return null;var C=lo(e,e===UB?WB:0);if(C===0)return null;if(C&30||C&e.expiredLanes||B)B=Ro(e,C);else{B=C;var n=_;_|=2;var r=HA();(UB!==e||WB!==B)&&(St=null,ur=PB()+500,zC(e,B));do try{vR();break}catch(s){LA(e,s)}while(1);d1(),wo.current=r,_=n,RB!==null?B=0:(UB=null,WB=0,B=TB)}if(B!==0){if(B===2&&(n=ef(e),n!==0&&(C=n,B=Nf(e,n))),B===1)throw t=xi,zC(e,0),eC(e,C),me(e,PB()),t;if(B===6)eC(e,C);else{if(n=e.current.alternate,!(C&30)&&!mR(n)&&(B=Ro(e,C),B===2&&(r=ef(e),r!==0&&(C=r,B=Nf(e,r))),B===1))throw t=xi,zC(e,0),eC(e,C),me(e,PB()),t;switch(e.finishedWork=n,e.finishedLanes=C,B){case 0:case 1:throw Error(b(345));case 2:HC(e,ue,St);break;case 3:if(eC(e,C),(C&130023424)===C&&(B=R1+500-PB(),10<B)){if(lo(e,0)!==0)break;if(n=e.suspendedLanes,(n&C)!==C){re(),e.pingedLanes|=e.suspendedLanes&n;break}e.timeoutHandle=lf(HC.bind(null,e,ue,St),B);break}HC(e,ue,St);break;case 4:if(eC(e,C),(C&4194240)===C)break;for(B=e.eventTimes,n=-1;0<C;){var i=31-$e(C);r=1<<i,i=B[i],i>n&&(n=i),C&=~r}if(C=n,C=PB()-C,C=(120>C?120:480>C?480:1080>C?1080:1920>C?1920:3e3>C?3e3:4320>C?4320:1960*pR(C/1960))-C,10<C){e.timeoutHandle=lf(HC.bind(null,e,ue,St),C);break}HC(e,ue,St);break;case 5:HC(e,ue,St);break;default:throw Error(b(329))}}}return me(e,PB()),e.callbackNode===t?MA.bind(null,e):null}function Nf(e,B){var t=ci;return e.current.memoizedState.isDehydrated&&(zC(e,B).flags|=256),e=Ro(e,B),e!==2&&(B=ue,ue=t,B!==null&&Ff(B)),e}function Ff(e){ue===null?ue=e:ue.push.apply(ue,e)}function mR(e){for(var B=e;;){if(B.flags&16384){var t=B.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var C=0;C<t.length;C++){var n=t[C],r=n.getSnapshot;n=n.value;try{if(!Ct(r(),n))return!1}catch{return!1}}}if(t=B.child,B.subtreeFlags&16384&&t!==null)t.return=B,B=t;else{if(B===e)break;for(;B.sibling===null;){if(B.return===null||B.return===e)return!0;B=B.return}B.sibling.return=B.return,B=B.sibling}}return!0}function eC(e,B){for(B&=~P1,B&=~bl,e.suspendedLanes|=B,e.pingedLanes&=~B,e=e.expirationTimes;0<B;){var t=31-$e(B),C=1<<t;e[t]=-1,B&=~C}}function Ip(e){if(_&6)throw Error(b(327));_n();var B=lo(e,0);if(!(B&1))return me(e,PB()),null;var t=Ro(e,B);if(e.tag!==0&&t===2){var C=ef(e);C!==0&&(B=C,t=Nf(e,C))}if(t===1)throw t=xi,zC(e,0),eC(e,B),me(e,PB()),t;if(t===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=B,HC(e,ue,St),me(e,PB()),null}function N1(e,B){var t=_;_|=1;try{return e(B)}finally{_=t,_===0&&(ur=PB()+500,yl&&TC())}}function rn(e){sC!==null&&sC.tag===0&&!(_&6)&&_n();var B=_;_|=1;var t=xe.transition,C=CB;try{if(xe.transition=null,CB=1,e)return e()}finally{CB=C,xe.transition=t,_=B,!(_&6)&&TC()}}function F1(){Se=Qn.current,hB(Qn)}function zC(e,B){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,YP(t)),RB!==null)for(t=RB.return;t!==null;){var C=t;switch(c1(C),C.tag){case 1:C=C.type.childContextTypes,C!=null&&po();break;case 3:lr(),hB(he),hB(_B),A1();break;case 5:v1(C);break;case 4:lr();break;case 13:hB(AB);break;case 19:hB(AB);break;case 10:h1(C.type._context);break;case 22:case 23:F1()}t=t.return}if(UB=e,RB=e=pC(e.current,null),WB=Se=B,TB=0,xi=null,P1=bl=nn=0,ue=ci=null,UC!==null){for(B=0;B<UC.length;B++)if(t=UC[B],C=t.interleaved,C!==null){t.interleaved=null;var n=C.next,r=t.pending;if(r!==null){var i=r.next;r.next=n,C.next=i}t.pending=C}UC=null}return e}function LA(e,B){do{var t=RB;try{if(d1(),Ja.current=bo,Io){for(var C=yB.memoizedState;C!==null;){var n=C.queue;n!==null&&(n.pending=null),C=C.next}Io=!1}if(Cn=0,xB=FB=yB=null,oi=!1,Mi=0,D1.current=null,t===null||t.return===null){TB=1,xi=B,RB=null;break}B:{var r=e,i=t.return,s=t,a=B;if(B=WB,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var o=a,l=s,c=l.tag;if(!(l.mode&1)&&(c===0||c===11||c===15)){var u=l.alternate;u?(l.updateQueue=u.updateQueue,l.memoizedState=u.memoizedState,l.lanes=u.lanes):(l.updateQueue=null,l.memoizedState=null)}var m=cp(i);if(m!==null){m.flags&=-257,up(m,i,s,r,B),m.mode&1&&lp(r,o,B),B=m,a=o;var f=B.updateQueue;if(f===null){var g=new Set;g.add(a),B.updateQueue=g}else f.add(a);break B}else{if(!(B&1)){lp(r,o,B),O1();break B}a=Error(b(426))}}else if(mB&&s.mode&1){var p=cp(i);if(p!==null){!(p.flags&65536)&&(p.flags|=256),up(p,i,s,r,B),u1(cr(a,s));break B}}r=a=cr(a,s),TB!==4&&(TB=2),ci===null?ci=[r]:ci.push(r),r=i;do{switch(r.tag){case 3:r.flags|=65536,B&=-B,r.lanes|=B;var d=vA(r,a,B);Cp(r,d);break B;case 1:s=a;var h=r.type,v=r.stateNode;if(!(r.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(dC===null||!dC.has(v)))){r.flags|=65536,B&=-B,r.lanes|=B;var A=AA(r,s,B);Cp(r,A);break B}}r=r.return}while(r!==null)}GA(t)}catch(E){B=E,RB===t&&t!==null&&(RB=t=t.return);continue}break}while(1)}function HA(){var e=wo.current;return wo.current=bo,e===null?bo:e}function O1(){(TB===0||TB===3||TB===2)&&(TB=4),UB===null||!(nn&268435455)&&!(bl&268435455)||eC(UB,WB)}function Ro(e,B){var t=_;_|=2;var C=HA();(UB!==e||WB!==B)&&(St=null,zC(e,B));do try{gR();break}catch(n){LA(e,n)}while(1);if(d1(),_=t,wo.current=C,RB!==null)throw Error(b(261));return UB=null,WB=0,TB}function gR(){for(;RB!==null;)xA(RB)}function vR(){for(;RB!==null&&!V3();)xA(RB)}function xA(e){var B=UA(e.alternate,e,Se);e.memoizedProps=e.pendingProps,B===null?GA(e):RB=B,D1.current=null}function GA(e){var B=e;do{var t=B.alternate;if(e=B.return,B.flags&32768){if(t=uR(t,B),t!==null){t.flags&=32767,RB=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{TB=6,RB=null;return}}else if(t=cR(t,B,Se),t!==null){RB=t;return}if(B=B.sibling,B!==null){RB=B;return}RB=B=e}while(B!==null);TB===0&&(TB=5)}function HC(e,B,t){var C=CB,n=xe.transition;try{xe.transition=null,CB=1,AR(e,B,t,C)}finally{xe.transition=n,CB=C}return null}function AR(e,B,t,C){do _n();while(sC!==null);if(_&6)throw Error(b(327));t=e.finishedWork;var n=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var r=t.lanes|t.childLanes;if(BP(e,r),e===UB&&(RB=UB=null,WB=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ia||(ia=!0,QA(oo,function(){return _n(),null})),r=(t.flags&15990)!==0,t.subtreeFlags&15990||r){r=xe.transition,xe.transition=null;var i=CB;CB=1;var s=_;_|=4,D1.current=null,dR(e,t),kA(t,e),KP(af),co=!!sf,af=sf=null,e.current=t,hR(t),W3(),_=s,CB=i,xe.transition=r}else e.current=t;if(ia&&(ia=!1,sC=e,Po=n),r=e.pendingLanes,r===0&&(dC=null),X3(t.stateNode),me(e,PB()),B!==null)for(C=e.onRecoverableError,t=0;t<B.length;t++)n=B[t],C(n.value,{componentStack:n.stack,digest:n.digest});if(Do)throw Do=!1,e=Pf,Pf=null,e;return Po&1&&e.tag!==0&&_n(),r=e.pendingLanes,r&1?e===Rf?ui++:(ui=0,Rf=e):ui=0,TC(),null}function _n(){if(sC!==null){var e=gv(Po),B=xe.transition,t=CB;try{if(xe.transition=null,CB=16>e?16:e,sC===null)var C=!1;else{if(e=sC,sC=null,Po=0,_&6)throw Error(b(331));var n=_;for(_|=4,T=e.current;T!==null;){var r=T,i=r.child;if(T.flags&16){var s=r.deletions;if(s!==null){for(var a=0;a<s.length;a++){var o=s[a];for(T=o;T!==null;){var l=T;switch(l.tag){case 0:case 11:case 15:li(8,l,r)}var c=l.child;if(c!==null)c.return=l,T=c;else for(;T!==null;){l=T;var u=l.sibling,m=l.return;if(NA(l),l===o){T=null;break}if(u!==null){u.return=m,T=u;break}T=m}}}var f=r.alternate;if(f!==null){var g=f.child;if(g!==null){f.child=null;do{var p=g.sibling;g.sibling=null,g=p}while(g!==null)}}T=r}}if(r.subtreeFlags&2064&&i!==null)i.return=r,T=i;else B:for(;T!==null;){if(r=T,r.flags&2048)switch(r.tag){case 0:case 11:case 15:li(9,r,r.return)}var d=r.sibling;if(d!==null){d.return=r.return,T=d;break B}T=r.return}}var h=e.current;for(T=h;T!==null;){i=T;var v=i.child;if(i.subtreeFlags&2064&&v!==null)v.return=i,T=v;else B:for(i=h;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Il(9,s)}}catch(E){SB(s,s.return,E)}if(s===i){T=null;break B}var A=s.sibling;if(A!==null){A.return=s.return,T=A;break B}T=s.return}}if(_=n,TC(),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(pl,e)}catch{}C=!0}return C}finally{CB=t,xe.transition=B}}return!1}function bp(e,B,t){B=cr(t,B),B=vA(e,B,1),e=fC(e,B,1),B=re(),e!==null&&(cs(e,1,B),me(e,B))}function SB(e,B,t){if(e.tag===3)bp(e,e,t);else for(;B!==null;){if(B.tag===3){bp(B,e,t);break}else if(B.tag===1){var C=B.stateNode;if(typeof B.type.getDerivedStateFromError=="function"||typeof C.componentDidCatch=="function"&&(dC===null||!dC.has(C))){e=cr(t,e),e=AA(B,e,1),B=fC(B,e,1),e=re(),B!==null&&(cs(B,1,e),me(B,e));break}}B=B.return}}function yR(e,B,t){var C=e.pingCache;C!==null&&C.delete(B),B=re(),e.pingedLanes|=e.suspendedLanes&t,UB===e&&(WB&t)===t&&(TB===4||TB===3&&(WB&130023424)===WB&&500>PB()-R1?zC(e,0):P1|=t),me(e,B)}function KA(e,B){B===0&&(e.mode&1?(B=qs,qs<<=1,!(qs&130023424)&&(qs=4194304)):B=1);var t=re();e=Lt(e,B),e!==null&&(cs(e,B,t),me(e,t))}function ER(e){var B=e.memoizedState,t=0;B!==null&&(t=B.retryLane),KA(e,t)}function SR(e,B){var t=0;switch(e.tag){case 13:var C=e.stateNode,n=e.memoizedState;n!==null&&(t=n.retryLane);break;case 19:C=e.stateNode;break;default:throw Error(b(314))}C!==null&&C.delete(B),KA(e,t)}var UA;UA=function(e,B,t){if(e!==null)if(e.memoizedProps!==B.pendingProps||he.current)fe=!0;else{if(!(e.lanes&t)&&!(B.flags&128))return fe=!1,lR(e,B,t);fe=!!(e.flags&131072)}else fe=!1,mB&&B.flags&1048576&&Vv(B,vo,B.index);switch(B.lanes=0,B.tag){case 2:var C=B.type;Wa(e,B),e=B.pendingProps;var n=sr(B,_B.current);zn(B,t),n=E1(null,B,C,e,n,t);var r=S1();return B.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(B.tag=1,B.memoizedState=null,B.updateQueue=null,pe(C)?(r=!0,mo(B)):r=!1,B.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,m1(B),n.updater=El,B.stateNode=n,n._reactInternals=B,mf(B,C,e,t),B=Af(null,B,C,!0,r,t)):(B.tag=0,mB&&r&&l1(B),te(null,B,n,t),B=B.child),B;case 16:C=B.elementType;B:{switch(Wa(e,B),e=B.pendingProps,n=C._init,C=n(C._payload),B.type=C,n=B.tag=bR(C),e=We(C,e),n){case 0:B=vf(null,B,C,e,t);break B;case 1:B=hp(null,B,C,e,t);break B;case 11:B=fp(null,B,C,e,t);break B;case 14:B=dp(null,B,C,We(C.type,e),t);break B}throw Error(b(306,C,""))}return B;case 0:return C=B.type,n=B.pendingProps,n=B.elementType===C?n:We(C,n),vf(e,B,C,n,t);case 1:return C=B.type,n=B.pendingProps,n=B.elementType===C?n:We(C,n),hp(e,B,C,n,t);case 3:B:{if(IA(B),e===null)throw Error(b(387));C=B.pendingProps,r=B.memoizedState,n=r.element,Xv(e,B),Eo(B,C,null,t);var i=B.memoizedState;if(C=i.element,r.isDehydrated)if(r={element:C,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},B.updateQueue.baseState=r,B.memoizedState=r,B.flags&256){n=cr(Error(b(423)),B),B=pp(e,B,C,t,n);break B}else if(C!==n){n=cr(Error(b(424)),B),B=pp(e,B,C,t,n);break B}else for(Ie=uC(B.stateNode.containerInfo.firstChild),be=B,mB=!0,Ye=null,t=_v(B,null,C,t),B.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ar(),C===n){B=Ht(e,B,t);break B}te(e,B,C,t)}B=B.child}return B;case 5:return $v(B),e===null&&df(B),C=B.type,n=B.pendingProps,r=e!==null?e.memoizedProps:null,i=n.children,of(C,n)?i=null:r!==null&&of(C,r)&&(B.flags|=32),SA(e,B),te(e,B,i,t),B.child;case 6:return e===null&&df(B),null;case 13:return bA(e,B,t);case 4:return g1(B,B.stateNode.containerInfo),C=B.pendingProps,e===null?B.child=or(B,null,C,t):te(e,B,C,t),B.child;case 11:return C=B.type,n=B.pendingProps,n=B.elementType===C?n:We(C,n),fp(e,B,C,n,t);case 7:return te(e,B,B.pendingProps,t),B.child;case 8:return te(e,B,B.pendingProps.children,t),B.child;case 12:return te(e,B,B.pendingProps.children,t),B.child;case 10:B:{if(C=B.type._context,n=B.pendingProps,r=B.memoizedProps,i=n.value,oB(Ao,C._currentValue),C._currentValue=i,r!==null)if(Ct(r.value,i)){if(r.children===n.children&&!he.current){B=Ht(e,B,t);break B}}else for(r=B.child,r!==null&&(r.return=B);r!==null;){var s=r.dependencies;if(s!==null){i=r.child;for(var a=s.firstContext;a!==null;){if(a.context===C){if(r.tag===1){a=Ft(-1,t&-t),a.tag=2;var o=r.updateQueue;if(o!==null){o=o.shared;var l=o.pending;l===null?a.next=a:(a.next=l.next,l.next=a),o.pending=a}}r.lanes|=t,a=r.alternate,a!==null&&(a.lanes|=t),hf(r.return,t,B),s.lanes|=t;break}a=a.next}}else if(r.tag===10)i=r.type===B.type?null:r.child;else if(r.tag===18){if(i=r.return,i===null)throw Error(b(341));i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),hf(i,t,B),i=r.sibling}else i=r.child;if(i!==null)i.return=r;else for(i=r;i!==null;){if(i===B){i=null;break}if(r=i.sibling,r!==null){r.return=i.return,i=r;break}i=i.return}r=i}te(e,B,n.children,t),B=B.child}return B;case 9:return n=B.type,C=B.pendingProps.children,zn(B,t),n=Ke(n),C=C(n),B.flags|=1,te(e,B,C,t),B.child;case 14:return C=B.type,n=We(C,B.pendingProps),n=We(C.type,n),dp(e,B,C,n,t);case 15:return yA(e,B,B.type,B.pendingProps,t);case 17:return C=B.type,n=B.pendingProps,n=B.elementType===C?n:We(C,n),Wa(e,B),B.tag=1,pe(C)?(e=!0,mo(B)):e=!1,zn(B,t),qv(B,C,n),mf(B,C,n,t),Af(null,B,C,!0,e,t);case 19:return wA(e,B,t);case 22:return EA(e,B,t)}throw Error(b(156,B.tag))};function QA(e,B){return dv(e,B)}function IR(e,B,t,C){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=B,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=C,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function He(e,B,t,C){return new IR(e,B,t,C)}function k1(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bR(e){if(typeof e=="function")return k1(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_d)return 11;if(e===$d)return 14}return 2}function pC(e,B){var t=e.alternate;return t===null?(t=He(e.tag,B,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=B,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,B=e.dependencies,t.dependencies=B===null?null:{lanes:B.lanes,firstContext:B.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Xa(e,B,t,C,n,r){var i=2;if(C=e,typeof e=="function")k1(e)&&(i=1);else if(typeof e=="string")i=5;else B:switch(e){case On:return _C(t.children,n,r,B);case zd:i=8,n|=8;break;case Ku:return e=He(12,t,B,n|2),e.elementType=Ku,e.lanes=r,e;case Uu:return e=He(13,t,B,n),e.elementType=Uu,e.lanes=r,e;case Qu:return e=He(19,t,B,n),e.elementType=Qu,e.lanes=r,e;case zg:return wl(t,n,r,B);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Zg:i=10;break B;case qg:i=9;break B;case _d:i=11;break B;case $d:i=14;break B;case _t:i=16,C=null;break B}throw Error(b(130,e==null?e:typeof e,""))}return B=He(i,t,B,n),B.elementType=e,B.type=C,B.lanes=r,B}function _C(e,B,t,C){return e=He(7,e,C,B),e.lanes=t,e}function wl(e,B,t,C){return e=He(22,e,C,B),e.elementType=zg,e.lanes=t,e.stateNode={isHidden:!1},e}function Qc(e,B,t){return e=He(6,e,null,B),e.lanes=t,e}function Jc(e,B,t){return B=He(4,e.children!==null?e.children:[],e.key,B),B.lanes=t,B.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},B}function wR(e,B,t,C,n){this.tag=B,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sc(0),this.expirationTimes=Sc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sc(0),this.identifierPrefix=C,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}function T1(e,B,t,C,n,r,i,s,a){return e=new wR(e,B,t,s,a),B===1?(B=1,r===!0&&(B|=8)):B=0,r=He(3,null,null,B),e.current=r,r.stateNode=e,r.memoizedState={element:C,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},m1(r),e}function DR(e,B,t){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fn,key:C==null?null:""+C,children:e,containerInfo:B,implementation:t}}function JA(e){if(!e)return IC;e=e._reactInternals;B:{if(gn(e)!==e||e.tag!==1)throw Error(b(170));var B=e;do{switch(B.tag){case 3:B=B.stateNode.context;break B;case 1:if(pe(B.type)){B=B.stateNode.__reactInternalMemoizedMergedChildContext;break B}}B=B.return}while(B!==null);throw Error(b(171))}if(e.tag===1){var t=e.type;if(pe(t))return Qv(e,t,B)}return B}function VA(e,B,t,C,n,r,i,s,a){return e=T1(t,C,!0,e,n,r,i,s,a),e.context=JA(null),t=e.current,C=re(),n=hC(t),r=Ft(C,n),r.callback=B??null,fC(t,r,n),e.current.lanes=n,cs(e,n,C),me(e,C),e}function Dl(e,B,t,C){var n=B.current,r=re(),i=hC(n);return t=JA(t),B.context===null?B.context=t:B.pendingContext=t,B=Ft(r,i),B.payload={element:e},C=C===void 0?null:C,C!==null&&(B.callback=C),e=fC(n,B,i),e!==null&&(Bt(e,n,i,r),Qa(e,n,i)),i}function No(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wp(e,B){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<B?t:B}}function M1(e,B){wp(e,B),(e=e.alternate)&&wp(e,B)}function PR(){return null}var WA=typeof reportError=="function"?reportError:function(e){console.error(e)};function L1(e){this._internalRoot=e}Pl.prototype.render=L1.prototype.render=function(e){var B=this._internalRoot;if(B===null)throw Error(b(409));Dl(e,B,null,null)};Pl.prototype.unmount=L1.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var B=e.containerInfo;rn(function(){Dl(null,e,null,null)}),B[Mt]=null}};function Pl(e){this._internalRoot=e}Pl.prototype.unstable_scheduleHydration=function(e){if(e){var B=yv();e={blockedOn:null,target:e,priority:B};for(var t=0;t<BC.length&&B!==0&&B<BC[t].priority;t++);BC.splice(t,0,e),t===0&&Sv(e)}};function H1(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Rl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Dp(){}function RR(e,B,t,C,n){if(n){if(typeof C=="function"){var r=C;C=function(){var o=No(i);r.call(o)}}var i=VA(B,C,e,0,null,!1,!1,"",Dp);return e._reactRootContainer=i,e[Mt]=i.current,Ni(e.nodeType===8?e.parentNode:e),rn(),i}for(;n=e.lastChild;)e.removeChild(n);if(typeof C=="function"){var s=C;C=function(){var o=No(a);s.call(o)}}var a=T1(e,0,!1,null,null,!1,!1,"",Dp);return e._reactRootContainer=a,e[Mt]=a.current,Ni(e.nodeType===8?e.parentNode:e),rn(function(){Dl(B,a,t,C)}),a}function Nl(e,B,t,C,n){var r=t._reactRootContainer;if(r){var i=r;if(typeof n=="function"){var s=n;n=function(){var a=No(i);s.call(a)}}Dl(B,i,e,n)}else i=RR(t,B,e,n,C);return No(i)}vv=function(e){switch(e.tag){case 3:var B=e.stateNode;if(B.current.memoizedState.isDehydrated){var t=Bi(B.pendingLanes);t!==0&&(t1(B,t|1),me(B,PB()),!(_&6)&&(ur=PB()+500,TC()))}break;case 13:rn(function(){var C=Lt(e,1);if(C!==null){var n=re();Bt(C,e,1,n)}}),M1(e,1)}};C1=function(e){if(e.tag===13){var B=Lt(e,134217728);if(B!==null){var t=re();Bt(B,e,134217728,t)}M1(e,134217728)}};Av=function(e){if(e.tag===13){var B=hC(e),t=Lt(e,B);if(t!==null){var C=re();Bt(t,e,B,C)}M1(e,B)}};yv=function(){return CB};Ev=function(e,B){var t=CB;try{return CB=e,B()}finally{CB=t}};_u=function(e,B,t){switch(B){case"input":if(Wu(e,t),B=t.name,t.type==="radio"&&B!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+B)+'][type="radio"]'),B=0;B<t.length;B++){var C=t[B];if(C!==e&&C.form===e.form){var n=Al(C);if(!n)throw Error(b(90));$g(C),Wu(C,n)}}}break;case"textarea":ev(e,t);break;case"select":B=t.value,B!=null&&Yn(e,!!t.multiple,B,!1)}};av=N1;ov=rn;var NR={usingClientEntryPoint:!1,Events:[fs,Ln,Al,iv,sv,N1]},Ur={findFiberByHostInstance:KC,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},FR={bundleType:Ur.bundleType,version:Ur.version,rendererPackageName:Ur.rendererPackageName,rendererConfig:Ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=uv(e),e===null?null:e.stateNode},findFiberByHostInstance:Ur.findFiberByHostInstance||PR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sa.isDisabled&&sa.supportsFiber)try{pl=sa.inject(FR),ut=sa}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NR;Re.createPortal=function(e,B){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!H1(B))throw Error(b(200));return DR(e,B,null,t)};Re.createRoot=function(e,B){if(!H1(e))throw Error(b(299));var t=!1,C="",n=WA;return B!=null&&(B.unstable_strictMode===!0&&(t=!0),B.identifierPrefix!==void 0&&(C=B.identifierPrefix),B.onRecoverableError!==void 0&&(n=B.onRecoverableError)),B=T1(e,1,!1,null,null,t,!1,C,n),e[Mt]=B.current,Ni(e.nodeType===8?e.parentNode:e),new L1(B)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var B=e._reactInternals;if(B===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=uv(B),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return rn(e)};Re.hydrate=function(e,B,t){if(!Rl(B))throw Error(b(200));return Nl(null,e,B,!0,t)};Re.hydrateRoot=function(e,B,t){if(!H1(e))throw Error(b(405));var C=t!=null&&t.hydratedSources||null,n=!1,r="",i=WA;if(t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),B=VA(B,null,e,1,t??null,n,!1,r,i),e[Mt]=B.current,Ni(e),C)for(e=0;e<C.length;e++)t=C[e],n=t._getVersion,n=n(t._source),B.mutableSourceEagerHydrationData==null?B.mutableSourceEagerHydrationData=[t,n]:B.mutableSourceEagerHydrationData.push(t,n);return new Pl(B)};Re.render=function(e,B,t){if(!Rl(B))throw Error(b(200));return Nl(null,e,B,!1,t)};Re.unmountComponentAtNode=function(e){if(!Rl(e))throw Error(b(40));return e._reactRootContainer?(rn(function(){Nl(null,null,e,!1,function(){e._reactRootContainer=null,e[Mt]=null})}),!0):!1};Re.unstable_batchedUpdates=N1;Re.unstable_renderSubtreeIntoContainer=function(e,B,t,C){if(!Rl(t))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return Nl(e,B,t,!1,C)};Re.version="18.2.0-next-9e3b772b8-20220608";(function(e){function B(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(B)}catch(t){console.error(t)}}B(),e.exports=Re})(P3);var Pp=Hu;Lu.createRoot=Pp.createRoot,Lu.hydrateRoot=Pp.hydrateRoot;/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gi(){return Gi=Object.assign?Object.assign.bind():function(e){for(var B=1;B<arguments.length;B++){var t=arguments[B];for(var C in t)Object.prototype.hasOwnProperty.call(t,C)&&(e[C]=t[C])}return e},Gi.apply(this,arguments)}var JC;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(JC||(JC={}));const Rp="popstate";function OR(e){e===void 0&&(e={});function B(C,n){let{pathname:r,search:i,hash:s}=C.location;return Of("",{pathname:r,search:i,hash:s},n.state&&n.state.usr||null,n.state&&n.state.key||"default")}function t(C,n){return typeof n=="string"?n:Fo(n)}return TR(B,t,null,e)}function et(e,B){if(e===!1||e===null||typeof e>"u")throw new Error(B)}function kR(){return Math.random().toString(36).substr(2,8)}function Np(e,B){return{usr:e.state,key:e.key,idx:B}}function Of(e,B,t,C){return t===void 0&&(t=null),Gi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof B=="string"?Fl(B):B,{state:t,key:B&&B.key||C||kR()})}function Fo(e){let{pathname:B="/",search:t="",hash:C=""}=e;return t&&t!=="?"&&(B+=t.charAt(0)==="?"?t:"?"+t),C&&C!=="#"&&(B+=C.charAt(0)==="#"?C:"#"+C),B}function Fl(e){let B={};if(e){let t=e.indexOf("#");t>=0&&(B.hash=e.substr(t),e=e.substr(0,t));let C=e.indexOf("?");C>=0&&(B.search=e.substr(C),e=e.substr(0,C)),e&&(B.pathname=e)}return B}function TR(e,B,t,C){C===void 0&&(C={});let{window:n=document.defaultView,v5Compat:r=!1}=C,i=n.history,s=JC.Pop,a=null,o=l();o==null&&(o=0,i.replaceState(Gi({},i.state,{idx:o}),""));function l(){return(i.state||{idx:null}).idx}function c(){s=JC.Pop;let p=l(),d=p==null?null:p-o;o=p,a&&a({action:s,location:g.location,delta:d})}function u(p,d){s=JC.Push;let h=Of(g.location,p,d);t&&t(h,p),o=l()+1;let v=Np(h,o),A=g.createHref(h);try{i.pushState(v,"",A)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;n.location.assign(A)}r&&a&&a({action:s,location:g.location,delta:1})}function m(p,d){s=JC.Replace;let h=Of(g.location,p,d);t&&t(h,p),o=l();let v=Np(h,o),A=g.createHref(h);i.replaceState(v,"",A),r&&a&&a({action:s,location:g.location,delta:0})}function f(p){let d=n.location.origin!=="null"?n.location.origin:n.location.href,h=typeof p=="string"?p:Fo(p);return et(d,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,d)}let g={get action(){return s},get location(){return e(n,i)},listen(p){if(a)throw new Error("A history only accepts one active listener");return n.addEventListener(Rp,c),a=p,()=>{n.removeEventListener(Rp,c),a=null}},createHref(p){return B(n,p)},createURL:f,encodeLocation(p){let d=f(p);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:u,replace:m,go(p){return i.go(p)}};return g}var Fp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Fp||(Fp={}));function jA(e,B){if(B==="/")return e;if(!e.toLowerCase().startsWith(B.toLowerCase()))return null;let t=B.endsWith("/")?B.length-1:B.length,C=e.charAt(t);return C&&C!=="/"?null:e.slice(t)||"/"}function MR(e,B){B===void 0&&(B="/");let{pathname:t,search:C="",hash:n=""}=typeof e=="string"?Fl(e):e;return{pathname:t?t.startsWith("/")?t:LR(t,B):B,search:HR(C),hash:xR(n)}}function LR(e,B){let t=B.replace(/\/+$/,"").split("/");return e.split("/").forEach(n=>{n===".."?t.length>1&&t.pop():n!=="."&&t.push(n)}),t.length>1?t.join("/"):"/"}function Vc(e,B,t,C){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+B+"` field ["+JSON.stringify(C)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function YA(e){return e.filter((B,t)=>t===0||B.route.path&&B.route.path.length>0)}function XA(e,B,t,C){C===void 0&&(C=!1);let n;typeof e=="string"?n=Fl(e):(n=Gi({},e),et(!n.pathname||!n.pathname.includes("?"),Vc("?","pathname","search",n)),et(!n.pathname||!n.pathname.includes("#"),Vc("#","pathname","hash",n)),et(!n.search||!n.search.includes("#"),Vc("#","search","hash",n)));let r=e===""||n.pathname==="",i=r?"/":n.pathname,s;if(C||i==null)s=t;else{let c=B.length-1;if(i.startsWith("..")){let u=i.split("/");for(;u[0]==="..";)u.shift(),c-=1;n.pathname=u.join("/")}s=c>=0?B[c]:"/"}let a=MR(n,s),o=i&&i!=="/"&&i.endsWith("/"),l=(r||i===".")&&t.endsWith("/");return!a.pathname.endsWith("/")&&(o||l)&&(a.pathname+="/"),a}const ZA=e=>e.join("/").replace(/\/\/+/g,"/"),HR=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,xR=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,GR=["post","put","patch","delete"];[...GR];/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kf(){return kf=Object.assign?Object.assign.bind():function(e){for(var B=1;B<arguments.length;B++){var t=arguments[B];for(var C in t)Object.prototype.hasOwnProperty.call(t,C)&&(e[C]=t[C])}return e},kf.apply(this,arguments)}const qA=O.createContext(null),hs=O.createContext(null),x1=O.createContext(null),Ol=O.createContext({outlet:null,matches:[],isDataRoute:!1});function KR(e,B){let{relative:t}=B===void 0?{}:B;kl()||et(!1);let{basename:C,navigator:n}=O.useContext(hs),{hash:r,pathname:i,search:s}=_A(e,{relative:t}),a=i;return C!=="/"&&(a=i==="/"?C:ZA([C,i])),n.createHref({pathname:a,search:s,hash:r})}function kl(){return O.useContext(x1)!=null}function G1(){return kl()||et(!1),O.useContext(x1).location}function zA(e){O.useContext(hs).static||O.useLayoutEffect(e)}function UR(){let{isDataRoute:e}=O.useContext(Ol);return e?jR():QR()}function QR(){kl()||et(!1);let e=O.useContext(qA),{basename:B,navigator:t}=O.useContext(hs),{matches:C}=O.useContext(Ol),{pathname:n}=G1(),r=JSON.stringify(YA(C).map(a=>a.pathnameBase)),i=O.useRef(!1);return zA(()=>{i.current=!0}),O.useCallback(function(a,o){if(o===void 0&&(o={}),!i.current)return;if(typeof a=="number"){t.go(a);return}let l=XA(a,JSON.parse(r),n,o.relative==="path");e==null&&B!=="/"&&(l.pathname=l.pathname==="/"?B:ZA([B,l.pathname])),(o.replace?t.replace:t.push)(l,o.state,o)},[B,t,r,n,e])}function _A(e,B){let{relative:t}=B===void 0?{}:B,{matches:C}=O.useContext(Ol),{pathname:n}=G1(),r=JSON.stringify(YA(C).map(i=>i.pathnameBase));return O.useMemo(()=>XA(e,JSON.parse(r),n,t==="path"),[e,r,n,t])}var Tf;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(Tf||(Tf={}));var Mf;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(Mf||(Mf={}));function JR(e){let B=O.useContext(qA);return B||et(!1),B}function VR(e){let B=O.useContext(Ol);return B||et(!1),B}function WR(e){let B=VR(),t=B.matches[B.matches.length-1];return t.route.id||et(!1),t.route.id}function jR(){let{router:e}=JR(Tf.UseNavigateStable),B=WR(Mf.UseNavigateStable),t=O.useRef(!1);return zA(()=>{t.current=!0}),O.useCallback(function(n,r){r===void 0&&(r={}),t.current&&(typeof n=="number"?e.navigate(n):e.navigate(n,kf({fromRouteId:B},r)))},[e,B])}function YR(e){let{basename:B="/",children:t=null,location:C,navigationType:n=JC.Pop,navigator:r,static:i=!1}=e;kl()&&et(!1);let s=B.replace(/^\/*/,"/"),a=O.useMemo(()=>({basename:s,navigator:r,static:i}),[s,r,i]);typeof C=="string"&&(C=Fl(C));let{pathname:o="/",search:l="",hash:c="",state:u=null,key:m="default"}=C,f=O.useMemo(()=>{let g=jA(o,s);return g==null?null:{location:{pathname:g,search:l,hash:c,state:u,key:m},navigationType:n}},[s,o,l,c,u,m,n]);return f==null?null:O.createElement(hs.Provider,{value:a},O.createElement(x1.Provider,{children:t,value:f}))}var Op;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Op||(Op={}));new Promise(()=>{});/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lf(){return Lf=Object.assign?Object.assign.bind():function(e){for(var B=1;B<arguments.length;B++){var t=arguments[B];for(var C in t)Object.prototype.hasOwnProperty.call(t,C)&&(e[C]=t[C])}return e},Lf.apply(this,arguments)}function XR(e,B){if(e==null)return{};var t={},C=Object.keys(e),n,r;for(r=0;r<C.length;r++)n=C[r],!(B.indexOf(n)>=0)&&(t[n]=e[n]);return t}function ZR(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function qR(e,B){return e.button===0&&(!B||B==="_self")&&!ZR(e)}const zR=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],_R="startTransition",kp=y3[_R];function $R(e){let{basename:B,children:t,future:C,window:n}=e,r=O.useRef();r.current==null&&(r.current=OR({window:n,v5Compat:!0}));let i=r.current,[s,a]=O.useState({action:i.action,location:i.location}),{v7_startTransition:o}=C||{},l=O.useCallback(c=>{o&&kp?kp(()=>a(c)):a(c)},[a,o]);return O.useLayoutEffect(()=>i.listen(l),[i,l]),O.createElement(YR,{basename:B,children:t,location:s.location,navigationType:s.action,navigator:i})}const BN=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",eN=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tN=O.forwardRef(function(B,t){let{onClick:C,relative:n,reloadDocument:r,replace:i,state:s,target:a,to:o,preventScrollReset:l}=B,c=XR(B,zR),{basename:u}=O.useContext(hs),m,f=!1;if(typeof o=="string"&&eN.test(o)&&(m=o,BN))try{let h=new URL(window.location.href),v=o.startsWith("//")?new URL(h.protocol+o):new URL(o),A=jA(v.pathname,u);v.origin===h.origin&&A!=null?o=A+v.search+v.hash:f=!0}catch{}let g=KR(o,{relative:n}),p=CN(o,{replace:i,state:s,target:a,preventScrollReset:l,relative:n});function d(h){C&&C(h),h.defaultPrevented||p(h)}return O.createElement("a",Lf({},c,{href:m||g,onClick:f||r?C:d,ref:t,target:a}))});var Tp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Tp||(Tp={}));var Mp;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Mp||(Mp={}));function CN(e,B){let{target:t,replace:C,state:n,preventScrollReset:r,relative:i}=B===void 0?{}:B,s=UR(),a=G1(),o=_A(e,{relative:i});return O.useCallback(l=>{if(qR(l,t)){l.preventDefault();let c=C!==void 0?C:Fo(a)===Fo(o);s(e,{replace:c,state:n,preventScrollReset:r,relative:i})}},[a,s,o,C,n,t,e,r,i])}const Lp={waves:"#F3F4F3","dark-waves":"#9E9A98",grainy:"#AC8B5D",bland:"#917E7A","dark-bland":"#3A3743"},nN=[15,30,45,60,75],rN=1e3;function $A(){document.querySelectorAll(".circle").forEach((B,t)=>{const C=10*Math.sin(Date.now()/rN+t);B.style.transform=`translateY(${C+110}px)`}),requestAnimationFrame($A)}$A();const Qr=({color:e,position:B})=>D("div",{className:"circle",style:{width:"50px",height:"50px",borderRadius:"50%",background:`radial-gradient(circle, ${Lp[e]}, ${Lp[e]})`,position:"absolute",left:nN[B]+"%",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0), 0 12px 20px 0 rgba(0, 0, 0, 0.5)"}}),iN=()=>q("div",{style:{position:"relative"},children:[D(Qr,{color:"waves",position:0}),D(Qr,{color:"dark-waves",position:1}),D(Qr,{color:"grainy",position:2}),D(Qr,{color:"bland",position:3}),D(Qr,{color:"dark-bland",position:4})]});/**
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
 */const By={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const P=function(e,B){if(!e)throw br(B)},br=function(e){return new Error("Firebase Database ("+By.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
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
 */const ey=function(e){const B=[];let t=0;for(let C=0;C<e.length;C++){let n=e.charCodeAt(C);n<128?B[t++]=n:n<2048?(B[t++]=n>>6|192,B[t++]=n&63|128):(n&64512)===55296&&C+1<e.length&&(e.charCodeAt(C+1)&64512)===56320?(n=65536+((n&1023)<<10)+(e.charCodeAt(++C)&1023),B[t++]=n>>18|240,B[t++]=n>>12&63|128,B[t++]=n>>6&63|128,B[t++]=n&63|128):(B[t++]=n>>12|224,B[t++]=n>>6&63|128,B[t++]=n&63|128)}return B},sN=function(e){const B=[];let t=0,C=0;for(;t<e.length;){const n=e[t++];if(n<128)B[C++]=String.fromCharCode(n);else if(n>191&&n<224){const r=e[t++];B[C++]=String.fromCharCode((n&31)<<6|r&63)}else if(n>239&&n<365){const r=e[t++],i=e[t++],s=e[t++],a=((n&7)<<18|(r&63)<<12|(i&63)<<6|s&63)-65536;B[C++]=String.fromCharCode(55296+(a>>10)),B[C++]=String.fromCharCode(56320+(a&1023))}else{const r=e[t++],i=e[t++];B[C++]=String.fromCharCode((n&15)<<12|(r&63)<<6|i&63)}}return B.join("")},K1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,B){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=B?this.byteToCharMapWebSafe_:this.byteToCharMap_,C=[];for(let n=0;n<e.length;n+=3){const r=e[n],i=n+1<e.length,s=i?e[n+1]:0,a=n+2<e.length,o=a?e[n+2]:0,l=r>>2,c=(r&3)<<4|s>>4;let u=(s&15)<<2|o>>6,m=o&63;a||(m=64,i||(u=64)),C.push(t[l],t[c],t[u],t[m])}return C.join("")},encodeString(e,B){return this.HAS_NATIVE_SUPPORT&&!B?btoa(e):this.encodeByteArray(ey(e),B)},decodeString(e,B){return this.HAS_NATIVE_SUPPORT&&!B?atob(e):sN(this.decodeStringToByteArray(e,B))},decodeStringToByteArray(e,B){this.init_();const t=B?this.charToByteMapWebSafe_:this.charToByteMap_,C=[];for(let n=0;n<e.length;){const r=t[e.charAt(n++)],s=n<e.length?t[e.charAt(n)]:0;++n;const o=n<e.length?t[e.charAt(n)]:64;++n;const c=n<e.length?t[e.charAt(n)]:64;if(++n,r==null||s==null||o==null||c==null)throw new aN;const u=r<<2|s>>4;if(C.push(u),o!==64){const m=s<<4&240|o>>2;if(C.push(m),c!==64){const f=o<<6&192|c;C.push(f)}}}return C},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class aN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ty=function(e){const B=ey(e);return K1.encodeByteArray(B,!0)},Oo=function(e){return ty(e).replace(/\./g,"")},ko=function(e){try{return K1.decodeString(e,!0)}catch(B){console.error("base64Decode failed: ",B)}return null};/**
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
 */function oN(e){return Cy(void 0,e)}function Cy(e,B){if(!(B instanceof Object))return B;switch(B.constructor){case Date:const t=B;return new Date(t.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return B}for(const t in B)!B.hasOwnProperty(t)||!lN(t)||(e[t]=Cy(e[t],B[t]));return e}function lN(e){return e!=="__proto__"}/**
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
 */function cN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const uN=()=>cN().__FIREBASE_DEFAULTS__,fN=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},dN=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const B=e&&ko(e[1]);return B&&JSON.parse(B)},U1=()=>{try{return uN()||fN()||dN()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ny=e=>{var B,t;return(t=(B=U1())===null||B===void 0?void 0:B.emulatorHosts)===null||t===void 0?void 0:t[e]},hN=e=>{const B=ny(e);if(!B)return;const t=B.lastIndexOf(":");if(t<=0||t+1===B.length)throw new Error(`Invalid host ${B} with no separate hostname and port!`);const C=parseInt(B.substring(t+1),10);return B[0]==="["?[B.substring(1,t-1),C]:[B.substring(0,t),C]},ry=()=>{var e;return(e=U1())===null||e===void 0?void 0:e.config},iy=e=>{var B;return(B=U1())===null||B===void 0?void 0:B[`_${e}`]};/**
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
 */class Tl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((B,t)=>{this.resolve=B,this.reject=t})}wrapCallback(B){return(t,C)=>{t?this.reject(t):this.resolve(C),typeof B=="function"&&(this.promise.catch(()=>{}),B.length===1?B(t):B(t,C))}}}/**
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
 */function pN(e,B){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},C=B||"demo-project",n=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${C}`,aud:C,iat:n,exp:n+3600,auth_time:n,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),s="";return[Oo(JSON.stringify(t)),Oo(JSON.stringify(i)),s].join(".")}/**
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
 */function $B(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Q1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($B())}function sy(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function ay(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mN(){const e=$B();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function oy(){return By.NODE_ADMIN===!0}function ly(){try{return typeof indexedDB=="object"}catch{return!1}}function cy(){return new Promise((e,B)=>{try{let t=!0;const C="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(C);n.onsuccess=()=>{n.result.close(),t||self.indexedDB.deleteDatabase(C),e(!0)},n.onupgradeneeded=()=>{t=!1},n.onerror=()=>{var r;B(((r=n.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){B(t)}})}function gN(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const vN="FirebaseError";class yt extends Error{constructor(B,t,C){super(t),this.code=B,this.customData=C,this.name=vN,Object.setPrototypeOf(this,yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vn.prototype.create)}}class vn{constructor(B,t,C){this.service=B,this.serviceName=t,this.errors=C}create(B,...t){const C=t[0]||{},n=`${this.service}/${B}`,r=this.errors[B],i=r?AN(r,C):"Error",s=`${this.serviceName}: ${i} (${n}).`;return new yt(n,s,C)}}function AN(e,B){return e.replace(yN,(t,C)=>{const n=B[C];return n!=null?String(n):`<${C}?>`})}const yN=/\{\$([^}]+)}/g;/**
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
 */function Ki(e){return JSON.parse(e)}function OB(e){return JSON.stringify(e)}/**
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
 */const uy=function(e){let B={},t={},C={},n="";try{const r=e.split(".");B=Ki(ko(r[0])||""),t=Ki(ko(r[1])||""),n=r[2],C=t.d||{},delete t.d}catch{}return{header:B,claims:t,data:C,signature:n}},EN=function(e){const B=uy(e),t=B.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},SN=function(e){const B=uy(e).claims;return typeof B=="object"&&B.admin===!0};/**
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
 */function Vt(e,B){return Object.prototype.hasOwnProperty.call(e,B)}function fr(e,B){if(Object.prototype.hasOwnProperty.call(e,B))return e[B]}function Hf(e){for(const B in e)if(Object.prototype.hasOwnProperty.call(e,B))return!1;return!0}function To(e,B,t){const C={};for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(C[n]=B.call(t,e[n],n,e));return C}function Ui(e,B){if(e===B)return!0;const t=Object.keys(e),C=Object.keys(B);for(const n of t){if(!C.includes(n))return!1;const r=e[n],i=B[n];if(Hp(r)&&Hp(i)){if(!Ui(r,i))return!1}else if(r!==i)return!1}for(const n of C)if(!t.includes(n))return!1;return!0}function Hp(e){return e!==null&&typeof e=="object"}/**
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
 */function wr(e){const B=[];for(const[t,C]of Object.entries(e))Array.isArray(C)?C.forEach(n=>{B.push(encodeURIComponent(t)+"="+encodeURIComponent(n))}):B.push(encodeURIComponent(t)+"="+encodeURIComponent(C));return B.length?"&"+B.join("&"):""}/**
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
 */class IN{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let B=1;B<this.blockSize;++B)this.pad_[B]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(B,t){t||(t=0);const C=this.W_;if(typeof B=="string")for(let c=0;c<16;c++)C[c]=B.charCodeAt(t)<<24|B.charCodeAt(t+1)<<16|B.charCodeAt(t+2)<<8|B.charCodeAt(t+3),t+=4;else for(let c=0;c<16;c++)C[c]=B[t]<<24|B[t+1]<<16|B[t+2]<<8|B[t+3],t+=4;for(let c=16;c<80;c++){const u=C[c-3]^C[c-8]^C[c-14]^C[c-16];C[c]=(u<<1|u>>>31)&4294967295}let n=this.chain_[0],r=this.chain_[1],i=this.chain_[2],s=this.chain_[3],a=this.chain_[4],o,l;for(let c=0;c<80;c++){c<40?c<20?(o=s^r&(i^s),l=1518500249):(o=r^i^s,l=1859775393):c<60?(o=r&i|s&(r|i),l=2400959708):(o=r^i^s,l=3395469782);const u=(n<<5|n>>>27)+o+a+l+C[c]&4294967295;a=s,s=i,i=(r<<30|r>>>2)&4294967295,r=n,n=u}this.chain_[0]=this.chain_[0]+n&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+i&4294967295,this.chain_[3]=this.chain_[3]+s&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(B,t){if(B==null)return;t===void 0&&(t=B.length);const C=t-this.blockSize;let n=0;const r=this.buf_;let i=this.inbuf_;for(;n<t;){if(i===0)for(;n<=C;)this.compress_(B,n),n+=this.blockSize;if(typeof B=="string"){for(;n<t;)if(r[i]=B.charCodeAt(n),++i,++n,i===this.blockSize){this.compress_(r),i=0;break}}else for(;n<t;)if(r[i]=B[n],++i,++n,i===this.blockSize){this.compress_(r),i=0;break}}this.inbuf_=i,this.total_+=t}digest(){const B=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let n=this.blockSize-1;n>=56;n--)this.buf_[n]=t&255,t/=256;this.compress_(this.buf_);let C=0;for(let n=0;n<5;n++)for(let r=24;r>=0;r-=8)B[C]=this.chain_[n]>>r&255,++C;return B}}function bN(e,B){const t=new wN(e,B);return t.subscribe.bind(t)}class wN{constructor(B,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{B(this)}).catch(C=>{this.error(C)})}next(B){this.forEachObserver(t=>{t.next(B)})}error(B){this.forEachObserver(t=>{t.error(B)}),this.close(B)}complete(){this.forEachObserver(B=>{B.complete()}),this.close()}subscribe(B,t,C){let n;if(B===void 0&&t===void 0&&C===void 0)throw new Error("Missing Observer.");DN(B,["next","error","complete"])?n=B:n={next:B,error:t,complete:C},n.next===void 0&&(n.next=Wc),n.error===void 0&&(n.error=Wc),n.complete===void 0&&(n.complete=Wc);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch{}}),this.observers.push(n),r}unsubscribeOne(B){this.observers===void 0||this.observers[B]===void 0||(delete this.observers[B],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(B){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,B)}sendOne(B,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[B]!==void 0)try{t(this.observers[B])}catch(C){typeof console<"u"&&console.error&&console.error(C)}})}close(B){this.finalized||(this.finalized=!0,B!==void 0&&(this.finalError=B),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function DN(e,B){if(typeof e!="object"||e===null)return!1;for(const t of B)if(t in e&&typeof e[t]=="function")return!0;return!1}function Wc(){}function J1(e,B){return`${e} failed: ${B} argument `}/**
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
 */const PN=function(e){const B=[];let t=0;for(let C=0;C<e.length;C++){let n=e.charCodeAt(C);if(n>=55296&&n<=56319){const r=n-55296;C++,P(C<e.length,"Surrogate pair missing trail surrogate.");const i=e.charCodeAt(C)-56320;n=65536+(r<<10)+i}n<128?B[t++]=n:n<2048?(B[t++]=n>>6|192,B[t++]=n&63|128):n<65536?(B[t++]=n>>12|224,B[t++]=n>>6&63|128,B[t++]=n&63|128):(B[t++]=n>>18|240,B[t++]=n>>12&63|128,B[t++]=n>>6&63|128,B[t++]=n&63|128)}return B},Ml=function(e){let B=0;for(let t=0;t<e.length;t++){const C=e.charCodeAt(t);C<128?B++:C<2048?B+=2:C>=55296&&C<=56319?(B+=4,t++):B+=3}return B};/**
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
 */const RN=1e3,NN=2,FN=4*60*60*1e3,ON=.5;function xp(e,B=RN,t=NN){const C=B*Math.pow(t,e),n=Math.round(ON*C*(Math.random()-.5)*2);return Math.min(FN,C+n)}/**
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
 */function ye(e){return e&&e._delegate?e._delegate:e}class nt{constructor(B,t,C){this.name=B,this.instanceFactory=t,this.type=C,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(B){return this.instantiationMode=B,this}setMultipleInstances(B){return this.multipleInstances=B,this}setServiceProps(B){return this.serviceProps=B,this}setInstanceCreatedCallback(B){return this.onInstanceCreated=B,this}}/**
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
 */const xC="[DEFAULT]";/**
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
 */class kN{constructor(B,t){this.name=B,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(B){const t=this.normalizeInstanceIdentifier(B);if(!this.instancesDeferred.has(t)){const C=new Tl;if(this.instancesDeferred.set(t,C),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&C.resolve(n)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(B){var t;const C=this.normalizeInstanceIdentifier(B==null?void 0:B.identifier),n=(t=B==null?void 0:B.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(C)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:C})}catch(r){if(n)return null;throw r}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(B){if(B.name!==this.name)throw Error(`Mismatching Component ${B.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=B,!!this.shouldAutoInitialize()){if(MN(B))try{this.getOrInitializeService({instanceIdentifier:xC})}catch{}for(const[t,C]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:n});C.resolve(r)}catch{}}}}clearInstance(B=xC){this.instancesDeferred.delete(B),this.instancesOptions.delete(B),this.instances.delete(B)}async delete(){const B=Array.from(this.instances.values());await Promise.all([...B.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...B.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(B=xC){return this.instances.has(B)}getOptions(B=xC){return this.instancesOptions.get(B)||{}}initialize(B={}){const{options:t={}}=B,C=this.normalizeInstanceIdentifier(B.instanceIdentifier);if(this.isInitialized(C))throw Error(`${this.name}(${C}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:C,options:t});for(const[r,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(r);C===s&&i.resolve(n)}return n}onInit(B,t){var C;const n=this.normalizeInstanceIdentifier(t),r=(C=this.onInitCallbacks.get(n))!==null&&C!==void 0?C:new Set;r.add(B),this.onInitCallbacks.set(n,r);const i=this.instances.get(n);return i&&B(i,n),()=>{r.delete(B)}}invokeOnInitCallbacks(B,t){const C=this.onInitCallbacks.get(t);if(C)for(const n of C)try{n(B,t)}catch{}}getOrInitializeService({instanceIdentifier:B,options:t={}}){let C=this.instances.get(B);if(!C&&this.component&&(C=this.component.instanceFactory(this.container,{instanceIdentifier:TN(B),options:t}),this.instances.set(B,C),this.instancesOptions.set(B,t),this.invokeOnInitCallbacks(C,B),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,B,C)}catch{}return C||null}normalizeInstanceIdentifier(B=xC){return this.component?this.component.multipleInstances?B:xC:B}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function TN(e){return e===xC?void 0:e}function MN(e){return e.instantiationMode==="EAGER"}/**
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
 */class LN{constructor(B){this.name=B,this.providers=new Map}addComponent(B){const t=this.getProvider(B.name);if(t.isComponentSet())throw new Error(`Component ${B.name} has already been registered with ${this.name}`);t.setComponent(B)}addOrOverwriteComponent(B){this.getProvider(B.name).isComponentSet()&&this.providers.delete(B.name),this.addComponent(B)}getProvider(B){if(this.providers.has(B))return this.providers.get(B);const t=new kN(B,this);return this.providers.set(B,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var iB;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(iB||(iB={}));const HN={debug:iB.DEBUG,verbose:iB.VERBOSE,info:iB.INFO,warn:iB.WARN,error:iB.ERROR,silent:iB.SILENT},xN=iB.INFO,GN={[iB.DEBUG]:"log",[iB.VERBOSE]:"log",[iB.INFO]:"info",[iB.WARN]:"warn",[iB.ERROR]:"error"},KN=(e,B,...t)=>{if(B<e.logLevel)return;const C=new Date().toISOString(),n=GN[B];if(n)console[n](`[${C}]  ${e.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${B})`)};class Ll{constructor(B){this.name=B,this._logLevel=xN,this._logHandler=KN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(B){if(!(B in iB))throw new TypeError(`Invalid value "${B}" assigned to \`logLevel\``);this._logLevel=B}setLogLevel(B){this._logLevel=typeof B=="string"?HN[B]:B}get logHandler(){return this._logHandler}set logHandler(B){if(typeof B!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=B}get userLogHandler(){return this._userLogHandler}set userLogHandler(B){this._userLogHandler=B}debug(...B){this._userLogHandler&&this._userLogHandler(this,iB.DEBUG,...B),this._logHandler(this,iB.DEBUG,...B)}log(...B){this._userLogHandler&&this._userLogHandler(this,iB.VERBOSE,...B),this._logHandler(this,iB.VERBOSE,...B)}info(...B){this._userLogHandler&&this._userLogHandler(this,iB.INFO,...B),this._logHandler(this,iB.INFO,...B)}warn(...B){this._userLogHandler&&this._userLogHandler(this,iB.WARN,...B),this._logHandler(this,iB.WARN,...B)}error(...B){this._userLogHandler&&this._userLogHandler(this,iB.ERROR,...B),this._logHandler(this,iB.ERROR,...B)}}const UN=(e,B)=>B.some(t=>e instanceof t);let Gp,Kp;function QN(){return Gp||(Gp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function JN(){return Kp||(Kp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fy=new WeakMap,xf=new WeakMap,dy=new WeakMap,jc=new WeakMap,V1=new WeakMap;function VN(e){const B=new Promise((t,C)=>{const n=()=>{e.removeEventListener("success",r),e.removeEventListener("error",i)},r=()=>{t(mC(e.result)),n()},i=()=>{C(e.error),n()};e.addEventListener("success",r),e.addEventListener("error",i)});return B.then(t=>{t instanceof IDBCursor&&fy.set(t,e)}).catch(()=>{}),V1.set(B,e),B}function WN(e){if(xf.has(e))return;const B=new Promise((t,C)=>{const n=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",i),e.removeEventListener("abort",i)},r=()=>{t(),n()},i=()=>{C(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",r),e.addEventListener("error",i),e.addEventListener("abort",i)});xf.set(e,B)}let Gf={get(e,B,t){if(e instanceof IDBTransaction){if(B==="done")return xf.get(e);if(B==="objectStoreNames")return e.objectStoreNames||dy.get(e);if(B==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return mC(e[B])},set(e,B,t){return e[B]=t,!0},has(e,B){return e instanceof IDBTransaction&&(B==="done"||B==="store")?!0:B in e}};function jN(e){Gf=e(Gf)}function YN(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(B,...t){const C=e.call(Yc(this),B,...t);return dy.set(C,B.sort?B.sort():[B]),mC(C)}:JN().includes(e)?function(...B){return e.apply(Yc(this),B),mC(fy.get(this))}:function(...B){return mC(e.apply(Yc(this),B))}}function XN(e){return typeof e=="function"?YN(e):(e instanceof IDBTransaction&&WN(e),UN(e,QN())?new Proxy(e,Gf):e)}function mC(e){if(e instanceof IDBRequest)return VN(e);if(jc.has(e))return jc.get(e);const B=XN(e);return B!==e&&(jc.set(e,B),V1.set(B,e)),B}const Yc=e=>V1.get(e);function ZN(e,B,{blocked:t,upgrade:C,blocking:n,terminated:r}={}){const i=indexedDB.open(e,B),s=mC(i);return C&&i.addEventListener("upgradeneeded",a=>{C(mC(i.result),a.oldVersion,a.newVersion,mC(i.transaction),a)}),t&&i.addEventListener("blocked",a=>t(a.oldVersion,a.newVersion,a)),s.then(a=>{r&&a.addEventListener("close",()=>r()),n&&a.addEventListener("versionchange",o=>n(o.oldVersion,o.newVersion,o))}).catch(()=>{}),s}const qN=["get","getKey","getAll","getAllKeys","count"],zN=["put","add","delete","clear"],Xc=new Map;function Up(e,B){if(!(e instanceof IDBDatabase&&!(B in e)&&typeof B=="string"))return;if(Xc.get(B))return Xc.get(B);const t=B.replace(/FromIndex$/,""),C=B!==t,n=zN.includes(t);if(!(t in(C?IDBIndex:IDBObjectStore).prototype)||!(n||qN.includes(t)))return;const r=async function(i,...s){const a=this.transaction(i,n?"readwrite":"readonly");let o=a.store;return C&&(o=o.index(s.shift())),(await Promise.all([o[t](...s),n&&a.done]))[0]};return Xc.set(B,r),r}jN(e=>({...e,get:(B,t,C)=>Up(B,t)||e.get(B,t,C),has:(B,t)=>!!Up(B,t)||e.has(B,t)}));/**
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
 */class _N{constructor(B){this.container=B}getPlatformInfoString(){return this.container.getProviders().map(t=>{if($N(t)){const C=t.getImmediate();return`${C.library}/${C.version}`}else return null}).filter(t=>t).join(" ")}}function $N(e){const B=e.getComponent();return(B==null?void 0:B.type)==="VERSION"}const Kf="@firebase/app",Qp="0.9.13";/**
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
 */const sn=new Ll("@firebase/app"),BF="@firebase/app-compat",eF="@firebase/analytics-compat",tF="@firebase/analytics",CF="@firebase/app-check-compat",nF="@firebase/app-check",rF="@firebase/auth",iF="@firebase/auth-compat",sF="@firebase/database",aF="@firebase/database-compat",oF="@firebase/functions",lF="@firebase/functions-compat",cF="@firebase/installations",uF="@firebase/installations-compat",fF="@firebase/messaging",dF="@firebase/messaging-compat",hF="@firebase/performance",pF="@firebase/performance-compat",mF="@firebase/remote-config",gF="@firebase/remote-config-compat",vF="@firebase/storage",AF="@firebase/storage-compat",yF="@firebase/firestore",EF="@firebase/firestore-compat",SF="firebase",IF="9.23.0";/**
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
 */const Uf="[DEFAULT]",bF={[Kf]:"fire-core",[BF]:"fire-core-compat",[tF]:"fire-analytics",[eF]:"fire-analytics-compat",[nF]:"fire-app-check",[CF]:"fire-app-check-compat",[rF]:"fire-auth",[iF]:"fire-auth-compat",[sF]:"fire-rtdb",[aF]:"fire-rtdb-compat",[oF]:"fire-fn",[lF]:"fire-fn-compat",[cF]:"fire-iid",[uF]:"fire-iid-compat",[fF]:"fire-fcm",[dF]:"fire-fcm-compat",[hF]:"fire-perf",[pF]:"fire-perf-compat",[mF]:"fire-rc",[gF]:"fire-rc-compat",[vF]:"fire-gcs",[AF]:"fire-gcs-compat",[yF]:"fire-fst",[EF]:"fire-fst-compat","fire-js":"fire-js",[SF]:"fire-js-all"};/**
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
 */const Mo=new Map,Qf=new Map;function wF(e,B){try{e.container.addComponent(B)}catch(t){sn.debug(`Component ${B.name} failed to register with FirebaseApp ${e.name}`,t)}}function pt(e){const B=e.name;if(Qf.has(B))return sn.debug(`There were multiple attempts to register component ${B}.`),!1;Qf.set(B,e);for(const t of Mo.values())wF(t,e);return!0}function An(e,B){const t=e.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),e.container.getProvider(B)}/**
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
 */const DF={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},gC=new vn("app","Firebase",DF);/**
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
 */class PF{constructor(B,t,C){this._isDeleted=!1,this._options=Object.assign({},B),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=C,this.container.addComponent(new nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(B){this.checkDestroyed(),this._automaticDataCollectionEnabled=B}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(B){this._isDeleted=B}checkDestroyed(){if(this.isDeleted)throw gC.create("app-deleted",{appName:this._name})}}/**
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
 */const Dr=IF;function Hl(e,B={}){let t=e;typeof B!="object"&&(B={name:B});const C=Object.assign({name:Uf,automaticDataCollectionEnabled:!1},B),n=C.name;if(typeof n!="string"||!n)throw gC.create("bad-app-name",{appName:String(n)});if(t||(t=ry()),!t)throw gC.create("no-options");const r=Mo.get(n);if(r){if(Ui(t,r.options)&&Ui(C,r.config))return r;throw gC.create("duplicate-app",{appName:n})}const i=new LN(n);for(const a of Qf.values())i.addComponent(a);const s=new PF(t,C,i);return Mo.set(n,s),s}function W1(e=Uf){const B=Mo.get(e);if(!B&&e===Uf&&ry())return Hl();if(!B)throw gC.create("no-app",{appName:e});return B}function Ge(e,B,t){var C;let n=(C=bF[e])!==null&&C!==void 0?C:e;t&&(n+=`-${t}`);const r=n.match(/\s|\//),i=B.match(/\s|\//);if(r||i){const s=[`Unable to register library "${n}" with version "${B}":`];r&&s.push(`library name "${n}" contains illegal characters (whitespace or "/")`),r&&i&&s.push("and"),i&&s.push(`version name "${B}" contains illegal characters (whitespace or "/")`),sn.warn(s.join(" "));return}pt(new nt(`${n}-version`,()=>({library:n,version:B}),"VERSION"))}/**
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
 */const RF="firebase-heartbeat-database",NF=1,Qi="firebase-heartbeat-store";let Zc=null;function hy(){return Zc||(Zc=ZN(RF,NF,{upgrade:(e,B)=>{switch(B){case 0:e.createObjectStore(Qi)}}}).catch(e=>{throw gC.create("idb-open",{originalErrorMessage:e.message})})),Zc}async function FF(e){try{return await(await hy()).transaction(Qi).objectStore(Qi).get(py(e))}catch(B){if(B instanceof yt)sn.warn(B.message);else{const t=gC.create("idb-get",{originalErrorMessage:B==null?void 0:B.message});sn.warn(t.message)}}}async function Jp(e,B){try{const C=(await hy()).transaction(Qi,"readwrite");await C.objectStore(Qi).put(B,py(e)),await C.done}catch(t){if(t instanceof yt)sn.warn(t.message);else{const C=gC.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});sn.warn(C.message)}}}function py(e){return`${e.name}!${e.options.appId}`}/**
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
 */const OF=1024,kF=30*24*60*60*1e3;class TF{constructor(B){this.container=B,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new LF(t),this._heartbeatsCachePromise=this._storage.read().then(C=>(this._heartbeatsCache=C,C))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),C=Vp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===C||this._heartbeatsCache.heartbeats.some(n=>n.date===C)))return this._heartbeatsCache.heartbeats.push({date:C,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(n=>{const r=new Date(n.date).valueOf();return Date.now()-r<=kF}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const B=Vp(),{heartbeatsToSend:t,unsentEntries:C}=MF(this._heartbeatsCache.heartbeats),n=Oo(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=B,C.length>0?(this._heartbeatsCache.heartbeats=C,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function Vp(){return new Date().toISOString().substring(0,10)}function MF(e,B=OF){const t=[];let C=e.slice();for(const n of e){const r=t.find(i=>i.agent===n.agent);if(r){if(r.dates.push(n.date),Wp(t)>B){r.dates.pop();break}}else if(t.push({agent:n.agent,dates:[n.date]}),Wp(t)>B){t.pop();break}C=C.slice(1)}return{heartbeatsToSend:t,unsentEntries:C}}class LF{constructor(B){this.app=B,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ly()?cy().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await FF(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(B){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Jp(this.app,{lastSentHeartbeatDate:(t=B.lastSentHeartbeatDate)!==null&&t!==void 0?t:n.lastSentHeartbeatDate,heartbeats:B.heartbeats})}else return}async add(B){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Jp(this.app,{lastSentHeartbeatDate:(t=B.lastSentHeartbeatDate)!==null&&t!==void 0?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...B.heartbeats]})}else return}}function Wp(e){return Oo(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function HF(e){pt(new nt("platform-logger",B=>new _N(B),"PRIVATE")),pt(new nt("heartbeat",B=>new TF(B),"PRIVATE")),Ge(Kf,Qp,e),Ge(Kf,Qp,"esm2017"),Ge("fire-js","")}HF("");var xF="firebase",GF="9.23.0";/**
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
 */Ge(xF,GF,"app");const KF=(e,B)=>B.some(t=>e instanceof t);let jp,Yp;function UF(){return jp||(jp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function QF(){return Yp||(Yp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const my=new WeakMap,Jf=new WeakMap,gy=new WeakMap,qc=new WeakMap,j1=new WeakMap;function JF(e){const B=new Promise((t,C)=>{const n=()=>{e.removeEventListener("success",r),e.removeEventListener("error",i)},r=()=>{t(vC(e.result)),n()},i=()=>{C(e.error),n()};e.addEventListener("success",r),e.addEventListener("error",i)});return B.then(t=>{t instanceof IDBCursor&&my.set(t,e)}).catch(()=>{}),j1.set(B,e),B}function VF(e){if(Jf.has(e))return;const B=new Promise((t,C)=>{const n=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",i),e.removeEventListener("abort",i)},r=()=>{t(),n()},i=()=>{C(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",r),e.addEventListener("error",i),e.addEventListener("abort",i)});Jf.set(e,B)}let Vf={get(e,B,t){if(e instanceof IDBTransaction){if(B==="done")return Jf.get(e);if(B==="objectStoreNames")return e.objectStoreNames||gy.get(e);if(B==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return vC(e[B])},set(e,B,t){return e[B]=t,!0},has(e,B){return e instanceof IDBTransaction&&(B==="done"||B==="store")?!0:B in e}};function WF(e){Vf=e(Vf)}function jF(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(B,...t){const C=e.call(zc(this),B,...t);return gy.set(C,B.sort?B.sort():[B]),vC(C)}:QF().includes(e)?function(...B){return e.apply(zc(this),B),vC(my.get(this))}:function(...B){return vC(e.apply(zc(this),B))}}function YF(e){return typeof e=="function"?jF(e):(e instanceof IDBTransaction&&VF(e),KF(e,UF())?new Proxy(e,Vf):e)}function vC(e){if(e instanceof IDBRequest)return JF(e);if(qc.has(e))return qc.get(e);const B=YF(e);return B!==e&&(qc.set(e,B),j1.set(B,e)),B}const zc=e=>j1.get(e);function XF(e,B,{blocked:t,upgrade:C,blocking:n,terminated:r}={}){const i=indexedDB.open(e,B),s=vC(i);return C&&i.addEventListener("upgradeneeded",a=>{C(vC(i.result),a.oldVersion,a.newVersion,vC(i.transaction))}),t&&i.addEventListener("blocked",()=>t()),s.then(a=>{r&&a.addEventListener("close",()=>r()),n&&a.addEventListener("versionchange",()=>n())}).catch(()=>{}),s}const ZF=["get","getKey","getAll","getAllKeys","count"],qF=["put","add","delete","clear"],_c=new Map;function Xp(e,B){if(!(e instanceof IDBDatabase&&!(B in e)&&typeof B=="string"))return;if(_c.get(B))return _c.get(B);const t=B.replace(/FromIndex$/,""),C=B!==t,n=qF.includes(t);if(!(t in(C?IDBIndex:IDBObjectStore).prototype)||!(n||ZF.includes(t)))return;const r=async function(i,...s){const a=this.transaction(i,n?"readwrite":"readonly");let o=a.store;return C&&(o=o.index(s.shift())),(await Promise.all([o[t](...s),n&&a.done]))[0]};return _c.set(B,r),r}WF(e=>({...e,get:(B,t,C)=>Xp(B,t)||e.get(B,t,C),has:(B,t)=>!!Xp(B,t)||e.has(B,t)}));const vy="@firebase/installations",Y1="0.6.4";/**
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
 */const Ay=1e4,yy=`w:${Y1}`,Ey="FIS_v2",zF="https://firebaseinstallations.googleapis.com/v1",_F=60*60*1e3,$F="installations",BO="Installations";/**
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
 */const eO={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},an=new vn($F,BO,eO);function Sy(e){return e instanceof yt&&e.code.includes("request-failed")}/**
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
 */function Iy({projectId:e}){return`${zF}/projects/${e}/installations`}function by(e){return{token:e.token,requestStatus:2,expiresIn:CO(e.expiresIn),creationTime:Date.now()}}async function wy(e,B){const C=(await B.json()).error;return an.create("request-failed",{requestName:e,serverCode:C.code,serverMessage:C.message,serverStatus:C.status})}function Dy({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function tO(e,{refreshToken:B}){const t=Dy(e);return t.append("Authorization",nO(B)),t}async function Py(e){const B=await e();return B.status>=500&&B.status<600?e():B}function CO(e){return Number(e.replace("s","000"))}function nO(e){return`${Ey} ${e}`}/**
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
 */async function rO({appConfig:e,heartbeatServiceProvider:B},{fid:t}){const C=Iy(e),n=Dy(e),r=B.getImmediate({optional:!0});if(r){const o=await r.getHeartbeatsHeader();o&&n.append("x-firebase-client",o)}const i={fid:t,authVersion:Ey,appId:e.appId,sdkVersion:yy},s={method:"POST",headers:n,body:JSON.stringify(i)},a=await Py(()=>fetch(C,s));if(a.ok){const o=await a.json();return{fid:o.fid||t,registrationStatus:2,refreshToken:o.refreshToken,authToken:by(o.authToken)}}else throw await wy("Create Installation",a)}/**
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
 */function Ry(e){return new Promise(B=>{setTimeout(B,e)})}/**
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
 */function iO(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const sO=/^[cdef][\w-]{21}$/,Wf="";function aO(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=oO(e);return sO.test(t)?t:Wf}catch{return Wf}}function oO(e){return iO(e).substr(0,22)}/**
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
 */function xl(e){return`${e.appName}!${e.appId}`}/**
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
 */const Ny=new Map;function Fy(e,B){const t=xl(e);Oy(t,B),lO(t,B)}function Oy(e,B){const t=Ny.get(e);if(t)for(const C of t)C(B)}function lO(e,B){const t=cO();t&&t.postMessage({key:e,fid:B}),uO()}let VC=null;function cO(){return!VC&&"BroadcastChannel"in self&&(VC=new BroadcastChannel("[Firebase] FID Change"),VC.onmessage=e=>{Oy(e.data.key,e.data.fid)}),VC}function uO(){Ny.size===0&&VC&&(VC.close(),VC=null)}/**
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
 */const fO="firebase-installations-database",dO=1,on="firebase-installations-store";let $c=null;function X1(){return $c||($c=XF(fO,dO,{upgrade:(e,B)=>{switch(B){case 0:e.createObjectStore(on)}}})),$c}async function Lo(e,B){const t=xl(e),n=(await X1()).transaction(on,"readwrite"),r=n.objectStore(on),i=await r.get(t);return await r.put(B,t),await n.done,(!i||i.fid!==B.fid)&&Fy(e,B.fid),B}async function ky(e){const B=xl(e),C=(await X1()).transaction(on,"readwrite");await C.objectStore(on).delete(B),await C.done}async function Gl(e,B){const t=xl(e),n=(await X1()).transaction(on,"readwrite"),r=n.objectStore(on),i=await r.get(t),s=B(i);return s===void 0?await r.delete(t):await r.put(s,t),await n.done,s&&(!i||i.fid!==s.fid)&&Fy(e,s.fid),s}/**
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
 */async function Z1(e){let B;const t=await Gl(e.appConfig,C=>{const n=hO(C),r=pO(e,n);return B=r.registrationPromise,r.installationEntry});return t.fid===Wf?{installationEntry:await B}:{installationEntry:t,registrationPromise:B}}function hO(e){const B=e||{fid:aO(),registrationStatus:0};return Ty(B)}function pO(e,B){if(B.registrationStatus===0){if(!navigator.onLine){const n=Promise.reject(an.create("app-offline"));return{installationEntry:B,registrationPromise:n}}const t={fid:B.fid,registrationStatus:1,registrationTime:Date.now()},C=mO(e,t);return{installationEntry:t,registrationPromise:C}}else return B.registrationStatus===1?{installationEntry:B,registrationPromise:gO(e)}:{installationEntry:B}}async function mO(e,B){try{const t=await rO(e,B);return Lo(e.appConfig,t)}catch(t){throw Sy(t)&&t.customData.serverCode===409?await ky(e.appConfig):await Lo(e.appConfig,{fid:B.fid,registrationStatus:0}),t}}async function gO(e){let B=await Zp(e.appConfig);for(;B.registrationStatus===1;)await Ry(100),B=await Zp(e.appConfig);if(B.registrationStatus===0){const{installationEntry:t,registrationPromise:C}=await Z1(e);return C||t}return B}function Zp(e){return Gl(e,B=>{if(!B)throw an.create("installation-not-found");return Ty(B)})}function Ty(e){return vO(e)?{fid:e.fid,registrationStatus:0}:e}function vO(e){return e.registrationStatus===1&&e.registrationTime+Ay<Date.now()}/**
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
 */async function AO({appConfig:e,heartbeatServiceProvider:B},t){const C=yO(e,t),n=tO(e,t),r=B.getImmediate({optional:!0});if(r){const o=await r.getHeartbeatsHeader();o&&n.append("x-firebase-client",o)}const i={installation:{sdkVersion:yy,appId:e.appId}},s={method:"POST",headers:n,body:JSON.stringify(i)},a=await Py(()=>fetch(C,s));if(a.ok){const o=await a.json();return by(o)}else throw await wy("Generate Auth Token",a)}function yO(e,{fid:B}){return`${Iy(e)}/${B}/authTokens:generate`}/**
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
 */async function q1(e,B=!1){let t;const C=await Gl(e.appConfig,r=>{if(!My(r))throw an.create("not-registered");const i=r.authToken;if(!B&&IO(i))return r;if(i.requestStatus===1)return t=EO(e,B),r;{if(!navigator.onLine)throw an.create("app-offline");const s=wO(r);return t=SO(e,s),s}});return t?await t:C.authToken}async function EO(e,B){let t=await qp(e.appConfig);for(;t.authToken.requestStatus===1;)await Ry(100),t=await qp(e.appConfig);const C=t.authToken;return C.requestStatus===0?q1(e,B):C}function qp(e){return Gl(e,B=>{if(!My(B))throw an.create("not-registered");const t=B.authToken;return DO(t)?Object.assign(Object.assign({},B),{authToken:{requestStatus:0}}):B})}async function SO(e,B){try{const t=await AO(e,B),C=Object.assign(Object.assign({},B),{authToken:t});return await Lo(e.appConfig,C),t}catch(t){if(Sy(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await ky(e.appConfig);else{const C=Object.assign(Object.assign({},B),{authToken:{requestStatus:0}});await Lo(e.appConfig,C)}throw t}}function My(e){return e!==void 0&&e.registrationStatus===2}function IO(e){return e.requestStatus===2&&!bO(e)}function bO(e){const B=Date.now();return B<e.creationTime||e.creationTime+e.expiresIn<B+_F}function wO(e){const B={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:B})}function DO(e){return e.requestStatus===1&&e.requestTime+Ay<Date.now()}/**
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
 */async function PO(e){const B=e,{installationEntry:t,registrationPromise:C}=await Z1(B);return C?C.catch(console.error):q1(B).catch(console.error),t.fid}/**
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
 */async function RO(e,B=!1){const t=e;return await NO(t),(await q1(t,B)).token}async function NO(e){const{registrationPromise:B}=await Z1(e);B&&await B}/**
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
 */function FO(e){if(!e||!e.options)throw Bu("App Configuration");if(!e.name)throw Bu("App Name");const B=["projectId","apiKey","appId"];for(const t of B)if(!e.options[t])throw Bu(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Bu(e){return an.create("missing-app-config-values",{valueName:e})}/**
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
 */const Ly="installations",OO="installations-internal",kO=e=>{const B=e.getProvider("app").getImmediate(),t=FO(B),C=An(B,"heartbeat");return{app:B,appConfig:t,heartbeatServiceProvider:C,_delete:()=>Promise.resolve()}},TO=e=>{const B=e.getProvider("app").getImmediate(),t=An(B,Ly).getImmediate();return{getId:()=>PO(t),getToken:n=>RO(t,n)}};function MO(){pt(new nt(Ly,kO,"PUBLIC")),pt(new nt(OO,TO,"PRIVATE"))}MO();Ge(vy,Y1);Ge(vy,Y1,"esm2017");/**
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
 */const Ho="analytics",LO="firebase_id",HO="origin",xO=60*1e3,GO="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",z1="https://www.googletagmanager.com/gtag/js";/**
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
 */const ge=new Ll("@firebase/analytics");/**
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
 */const KO={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},we=new vn("analytics","Analytics",KO);/**
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
 */function UO(e){if(!e.startsWith(z1)){const B=we.create("invalid-gtag-resource",{gtagURL:e});return ge.warn(B.message),""}return e}function Hy(e){return Promise.all(e.map(B=>B.catch(t=>t)))}function QO(e,B){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(e,B)),t}function JO(e,B){const t=QO("firebase-js-sdk-policy",{createScriptURL:UO}),C=document.createElement("script"),n=`${z1}?l=${e}&id=${B}`;C.src=t?t==null?void 0:t.createScriptURL(n):n,C.async=!0,document.head.appendChild(C)}function VO(e){let B=[];return Array.isArray(window[e])?B=window[e]:window[e]=B,B}async function WO(e,B,t,C,n,r){const i=C[n];try{if(i)await B[i];else{const a=(await Hy(t)).find(o=>o.measurementId===n);a&&await B[a.appId]}}catch(s){ge.error(s)}e("config",n,r)}async function jO(e,B,t,C,n){try{let r=[];if(n&&n.send_to){let i=n.send_to;Array.isArray(i)||(i=[i]);const s=await Hy(t);for(const a of i){const o=s.find(c=>c.measurementId===a),l=o&&B[o.appId];if(l)r.push(l);else{r=[];break}}}r.length===0&&(r=Object.values(B)),await Promise.all(r),e("event",C,n||{})}catch(r){ge.error(r)}}function YO(e,B,t,C){async function n(r,...i){try{if(r==="event"){const[s,a]=i;await jO(e,B,t,s,a)}else if(r==="config"){const[s,a]=i;await WO(e,B,t,C,s,a)}else if(r==="consent"){const[s]=i;e("consent","update",s)}else if(r==="get"){const[s,a,o]=i;e("get",s,a,o)}else if(r==="set"){const[s]=i;e("set",s)}else e(r,...i)}catch(s){ge.error(s)}}return n}function XO(e,B,t,C,n){let r=function(...i){window[C].push(arguments)};return window[n]&&typeof window[n]=="function"&&(r=window[n]),window[n]=YO(r,e,B,t),{gtagCore:r,wrappedGtag:window[n]}}function ZO(e){const B=window.document.getElementsByTagName("script");for(const t of Object.values(B))if(t.src&&t.src.includes(z1)&&t.src.includes(e))return t;return null}/**
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
 */const qO=30,zO=1e3;class _O{constructor(B={},t=zO){this.throttleMetadata=B,this.intervalMillis=t}getThrottleMetadata(B){return this.throttleMetadata[B]}setThrottleMetadata(B,t){this.throttleMetadata[B]=t}deleteThrottleMetadata(B){delete this.throttleMetadata[B]}}const xy=new _O;function $O(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Bk(e){var B;const{appId:t,apiKey:C}=e,n={method:"GET",headers:$O(C)},r=GO.replace("{app-id}",t),i=await fetch(r,n);if(i.status!==200&&i.status!==304){let s="";try{const a=await i.json();!((B=a.error)===null||B===void 0)&&B.message&&(s=a.error.message)}catch{}throw we.create("config-fetch-failed",{httpStatus:i.status,responseMessage:s})}return i.json()}async function ek(e,B=xy,t){const{appId:C,apiKey:n,measurementId:r}=e.options;if(!C)throw we.create("no-app-id");if(!n){if(r)return{measurementId:r,appId:C};throw we.create("no-api-key")}const i=B.getThrottleMetadata(C)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new nk;return setTimeout(async()=>{s.abort()},t!==void 0?t:xO),Gy({appId:C,apiKey:n,measurementId:r},i,s,B)}async function Gy(e,{throttleEndTimeMillis:B,backoffCount:t},C,n=xy){var r;const{appId:i,measurementId:s}=e;try{await tk(C,B)}catch(a){if(s)return ge.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${a==null?void 0:a.message}]`),{appId:i,measurementId:s};throw a}try{const a=await Bk(e);return n.deleteThrottleMetadata(i),a}catch(a){const o=a;if(!Ck(o)){if(n.deleteThrottleMetadata(i),s)return ge.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${o==null?void 0:o.message}]`),{appId:i,measurementId:s};throw a}const l=Number((r=o==null?void 0:o.customData)===null||r===void 0?void 0:r.httpStatus)===503?xp(t,n.intervalMillis,qO):xp(t,n.intervalMillis),c={throttleEndTimeMillis:Date.now()+l,backoffCount:t+1};return n.setThrottleMetadata(i,c),ge.debug(`Calling attemptFetch again in ${l} millis`),Gy(e,c,C,n)}}function tk(e,B){return new Promise((t,C)=>{const n=Math.max(B-Date.now(),0),r=setTimeout(t,n);e.addEventListener(()=>{clearTimeout(r),C(we.create("fetch-throttle",{throttleEndTimeMillis:B}))})})}function Ck(e){if(!(e instanceof yt)||!e.customData)return!1;const B=Number(e.customData.httpStatus);return B===429||B===500||B===503||B===504}class nk{constructor(){this.listeners=[]}addEventListener(B){this.listeners.push(B)}abort(){this.listeners.forEach(B=>B())}}async function rk(e,B,t,C,n){if(n&&n.global){e("event",t,C);return}else{const r=await B,i=Object.assign(Object.assign({},C),{send_to:r});e("event",t,i)}}/**
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
 */async function ik(){if(ly())try{await cy()}catch(e){return ge.warn(we.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return ge.warn(we.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function sk(e,B,t,C,n,r,i){var s;const a=ek(e);a.then(m=>{t[m.measurementId]=m.appId,e.options.measurementId&&m.measurementId!==e.options.measurementId&&ge.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>ge.error(m)),B.push(a);const o=ik().then(m=>{if(m)return C.getId()}),[l,c]=await Promise.all([a,o]);ZO(r)||JO(r,l.measurementId),n("js",new Date);const u=(s=i==null?void 0:i.config)!==null&&s!==void 0?s:{};return u[HO]="firebase",u.update=!0,c!=null&&(u[LO]=c),n("config",l.measurementId,u),l.measurementId}/**
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
 */class ak{constructor(B){this.app=B}_delete(){return delete fi[this.app.options.appId],Promise.resolve()}}let fi={},zp=[];const _p={};let eu="dataLayer",ok="gtag",$p,Ky,Bm=!1;function lk(){const e=[];if(sy()&&e.push("This is a browser extension environment."),gN()||e.push("Cookies are not available."),e.length>0){const B=e.map((C,n)=>`(${n+1}) ${C}`).join(" "),t=we.create("invalid-analytics-context",{errorInfo:B});ge.warn(t.message)}}function ck(e,B,t){lk();const C=e.options.appId;if(!C)throw we.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)ge.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw we.create("no-api-key");if(fi[C]!=null)throw we.create("already-exists",{id:C});if(!Bm){VO(eu);const{wrappedGtag:r,gtagCore:i}=XO(fi,zp,_p,eu,ok);Ky=r,$p=i,Bm=!0}return fi[C]=sk(e,zp,_p,B,$p,eu,t),new ak(e)}function _1(e=W1()){e=ye(e);const B=An(e,Ho);return B.isInitialized()?B.getImmediate():uk(e)}function uk(e,B={}){const t=An(e,Ho);if(t.isInitialized()){const n=t.getImmediate();if(Ui(B,t.getOptions()))return n;throw we.create("already-initialized")}return t.initialize({options:B})}function fk(e,B,t,C){e=ye(e),rk(Ky,fi[e.app.options.appId],B,t,C).catch(n=>ge.error(n))}const em="@firebase/analytics",tm="0.10.0";function dk(){pt(new nt(Ho,(B,{options:t})=>{const C=B.getProvider("app").getImmediate(),n=B.getProvider("installations-internal").getImmediate();return ck(C,n,t)},"PUBLIC")),pt(new nt("analytics-internal",e,"PRIVATE")),Ge(em,tm),Ge(em,tm,"esm2017");function e(B){try{const t=B.getProvider(Ho).getImmediate();return{logEvent:(C,n,r)=>fk(t,C,n,r)}}catch(t){throw we.create("interop-component-reg-failed",{reason:t})}}}dk();function $1(e,B){var t={};for(var C in e)Object.prototype.hasOwnProperty.call(e,C)&&B.indexOf(C)<0&&(t[C]=e[C]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,C=Object.getOwnPropertySymbols(e);n<C.length;n++)B.indexOf(C[n])<0&&Object.prototype.propertyIsEnumerable.call(e,C[n])&&(t[C[n]]=e[C[n]]);return t}function Uy(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hk=Uy,Qy=new vn("auth","Firebase",Uy());/**
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
 */const xo=new Ll("@firebase/auth");function pk(e,...B){xo.logLevel<=iB.WARN&&xo.warn(`Auth (${Dr}): ${e}`,...B)}function Za(e,...B){xo.logLevel<=iB.ERROR&&xo.error(`Auth (${Dr}): ${e}`,...B)}/**
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
 */function mt(e,...B){throw Bh(e,...B)}function dt(e,...B){return Bh(e,...B)}function Jy(e,B,t){const C=Object.assign(Object.assign({},hk()),{[B]:t});return new vn("auth","Firebase",C).create(B,{appName:e.name})}function mk(e,B,t){const C=t;if(!(B instanceof C))throw C.name!==B.constructor.name&&mt(e,"argument-error"),Jy(e,"argument-error",`Type of ${B.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Bh(e,...B){if(typeof e!="string"){const t=B[0],C=[...B.slice(1)];return C[0]&&(C[0].appName=e.name),e._errorFactory.create(t,...C)}return Qy.create(e,...B)}function Q(e,B,...t){if(!e)throw Bh(B,...t)}function Pt(e){const B="INTERNAL ASSERTION FAILED: "+e;throw Za(B),new Error(B)}function xt(e,B){e||Pt(B)}/**
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
 */function jf(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function gk(){return Cm()==="http:"||Cm()==="https:"}function Cm(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function vk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gk()||sy()||"connection"in navigator)?navigator.onLine:!0}function Ak(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class ps{constructor(B,t){this.shortDelay=B,this.longDelay=t,xt(t>B,"Short delay should be less than long delay!"),this.isMobile=Q1()||ay()}get(){return vk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function eh(e,B){xt(e.emulator,"Emulator should always be set here");const{url:t}=e.emulator;return B?`${t}${B.startsWith("/")?B.slice(1):B}`:t}/**
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
 */class Vy{static initialize(B,t,C){this.fetchImpl=B,t&&(this.headersImpl=t),C&&(this.responseImpl=C)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const yk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Ek=new ps(3e4,6e4);function Wy(e,B){return e.tenantId&&!B.tenantId?Object.assign(Object.assign({},B),{tenantId:e.tenantId}):B}async function ms(e,B,t,C,n={}){return jy(e,n,async()=>{let r={},i={};C&&(B==="GET"?i=C:r={body:JSON.stringify(C)});const s=wr(Object.assign({key:e.config.apiKey},i)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Vy.fetch()(Yy(e,e.config.apiHost,t,s),Object.assign({method:B,headers:a,referrerPolicy:"no-referrer"},r))})}async function jy(e,B,t){e._canInitEmulator=!1;const C=Object.assign(Object.assign({},yk),B);try{const n=new Ik(e),r=await Promise.race([t(),n.promise]);n.clearNetworkTimeout();const i=await r.json();if("needConfirmation"in i)throw aa(e,"account-exists-with-different-credential",i);if(r.ok&&!("errorMessage"in i))return i;{const s=r.ok?i.errorMessage:i.error.message,[a,o]=s.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw aa(e,"credential-already-in-use",i);if(a==="EMAIL_EXISTS")throw aa(e,"email-already-in-use",i);if(a==="USER_DISABLED")throw aa(e,"user-disabled",i);const l=C[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Jy(e,l,o);mt(e,l)}}catch(n){if(n instanceof yt)throw n;mt(e,"network-request-failed",{message:String(n)})}}async function Sk(e,B,t,C,n={}){const r=await ms(e,B,t,C,n);return"mfaPendingCredential"in r&&mt(e,"multi-factor-auth-required",{_serverResponse:r}),r}function Yy(e,B,t,C){const n=`${B}${t}?${C}`;return e.config.emulator?eh(e.config,n):`${e.config.apiScheme}://${n}`}class Ik{constructor(B){this.auth=B,this.timer=null,this.promise=new Promise((t,C)=>{this.timer=setTimeout(()=>C(dt(this.auth,"network-request-failed")),Ek.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function aa(e,B,t){const C={appName:e.name};t.email&&(C.email=t.email),t.phoneNumber&&(C.phoneNumber=t.phoneNumber);const n=dt(e,B,C);return n.customData._tokenResponse=t,n}/**
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
 */async function bk(e,B){return ms(e,"POST","/v1/accounts:delete",B)}async function wk(e,B){return ms(e,"POST","/v1/accounts:lookup",B)}/**
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
 */function di(e){if(e)try{const B=new Date(Number(e));if(!isNaN(B.getTime()))return B.toUTCString()}catch{}}async function Dk(e,B=!1){const t=ye(e),C=await t.getIdToken(B),n=th(C);Q(n&&n.exp&&n.auth_time&&n.iat,t.auth,"internal-error");const r=typeof n.firebase=="object"?n.firebase:void 0,i=r==null?void 0:r.sign_in_provider;return{claims:n,token:C,authTime:di(tu(n.auth_time)),issuedAtTime:di(tu(n.iat)),expirationTime:di(tu(n.exp)),signInProvider:i||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function tu(e){return Number(e)*1e3}function th(e){const[B,t,C]=e.split(".");if(B===void 0||t===void 0||C===void 0)return Za("JWT malformed, contained fewer than 3 sections"),null;try{const n=ko(t);return n?JSON.parse(n):(Za("Failed to decode base64 JWT payload"),null)}catch(n){return Za("Caught error parsing JWT payload as JSON",n==null?void 0:n.toString()),null}}function Pk(e){const B=th(e);return Q(B,"internal-error"),Q(typeof B.exp<"u","internal-error"),Q(typeof B.iat<"u","internal-error"),Number(B.exp)-Number(B.iat)}/**
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
 */async function Ji(e,B,t=!1){if(t)return B;try{return await B}catch(C){throw C instanceof yt&&Rk(C)&&e.auth.currentUser===e&&await e.auth.signOut(),C}}function Rk({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class Nk{constructor(B){this.user=B,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(B){var t;if(B){const C=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),C}else{this.errorBackoff=3e4;const n=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,n)}}schedule(B=!1){if(!this.isRunning)return;const t=this.getInterval(B);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(B){(B==null?void 0:B.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Xy{constructor(B,t){this.createdAt=B,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=di(this.lastLoginAt),this.creationTime=di(this.createdAt)}_copy(B){this.createdAt=B.createdAt,this.lastLoginAt=B.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Go(e){var B;const t=e.auth,C=await e.getIdToken(),n=await Ji(e,wk(t,{idToken:C}));Q(n==null?void 0:n.users.length,t,"internal-error");const r=n.users[0];e._notifyReloadListener(r);const i=!((B=r.providerUserInfo)===null||B===void 0)&&B.length?kk(r.providerUserInfo):[],s=Ok(e.providerData,i),a=e.isAnonymous,o=!(e.email&&r.passwordHash)&&!(s!=null&&s.length),l=a?o:!1,c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new Xy(r.createdAt,r.lastLoginAt),isAnonymous:l};Object.assign(e,c)}async function Fk(e){const B=ye(e);await Go(B),await B.auth._persistUserIfCurrent(B),B.auth._notifyListenersIfCurrent(B)}function Ok(e,B){return[...e.filter(C=>!B.some(n=>n.providerId===C.providerId)),...B]}function kk(e){return e.map(B=>{var{providerId:t}=B,C=$1(B,["providerId"]);return{providerId:t,uid:C.rawId||"",displayName:C.displayName||null,email:C.email||null,phoneNumber:C.phoneNumber||null,photoURL:C.photoUrl||null}})}/**
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
 */async function Tk(e,B){const t=await jy(e,{},async()=>{const C=wr({grant_type:"refresh_token",refresh_token:B}).slice(1),{tokenApiHost:n,apiKey:r}=e.config,i=Yy(e,n,"/v1/token",`key=${r}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",Vy.fetch()(i,{method:"POST",headers:s,body:C})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class Vi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(B){Q(B.idToken,"internal-error"),Q(typeof B.idToken<"u","internal-error"),Q(typeof B.refreshToken<"u","internal-error");const t="expiresIn"in B&&typeof B.expiresIn<"u"?Number(B.expiresIn):Pk(B.idToken);this.updateTokensAndExpiration(B.idToken,B.refreshToken,t)}async getToken(B,t=!1){return Q(!this.accessToken||this.refreshToken,B,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(B,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(B,t){const{accessToken:C,refreshToken:n,expiresIn:r}=await Tk(B,t);this.updateTokensAndExpiration(C,n,Number(r))}updateTokensAndExpiration(B,t,C){this.refreshToken=t||null,this.accessToken=B||null,this.expirationTime=Date.now()+C*1e3}static fromJSON(B,t){const{refreshToken:C,accessToken:n,expirationTime:r}=t,i=new Vi;return C&&(Q(typeof C=="string","internal-error",{appName:B}),i.refreshToken=C),n&&(Q(typeof n=="string","internal-error",{appName:B}),i.accessToken=n),r&&(Q(typeof r=="number","internal-error",{appName:B}),i.expirationTime=r),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(B){this.accessToken=B.accessToken,this.refreshToken=B.refreshToken,this.expirationTime=B.expirationTime}_clone(){return Object.assign(new Vi,this.toJSON())}_performRefresh(){return Pt("not implemented")}}/**
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
 */function Zt(e,B){Q(typeof e=="string"||typeof e>"u","internal-error",{appName:B})}class $C{constructor(B){var{uid:t,auth:C,stsTokenManager:n}=B,r=$1(B,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Nk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=C,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Xy(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(B){const t=await Ji(this,this.stsTokenManager.getToken(this.auth,B));return Q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(B){return Dk(this,B)}reload(){return Fk(this)}_assign(B){this!==B&&(Q(this.uid===B.uid,this.auth,"internal-error"),this.displayName=B.displayName,this.photoURL=B.photoURL,this.email=B.email,this.emailVerified=B.emailVerified,this.phoneNumber=B.phoneNumber,this.isAnonymous=B.isAnonymous,this.tenantId=B.tenantId,this.providerData=B.providerData.map(t=>Object.assign({},t)),this.metadata._copy(B.metadata),this.stsTokenManager._assign(B.stsTokenManager))}_clone(B){const t=new $C(Object.assign(Object.assign({},this),{auth:B,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(B){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=B,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(B){this.reloadListener?this.reloadListener(B):this.reloadUserInfo=B}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(B,t=!1){let C=!1;B.idToken&&B.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(B),C=!0),t&&await Go(this),await this.auth._persistUserIfCurrent(this),C&&this.auth._notifyListenersIfCurrent(this)}async delete(){const B=await this.getIdToken();return await Ji(this,bk(this.auth,{idToken:B})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(B=>Object.assign({},B)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(B,t){var C,n,r,i,s,a,o,l;const c=(C=t.displayName)!==null&&C!==void 0?C:void 0,u=(n=t.email)!==null&&n!==void 0?n:void 0,m=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,f=(i=t.photoURL)!==null&&i!==void 0?i:void 0,g=(s=t.tenantId)!==null&&s!==void 0?s:void 0,p=(a=t._redirectEventId)!==null&&a!==void 0?a:void 0,d=(o=t.createdAt)!==null&&o!==void 0?o:void 0,h=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:v,emailVerified:A,isAnonymous:E,providerData:w,stsTokenManager:S}=t;Q(v&&S,B,"internal-error");const y=Vi.fromJSON(this.name,S);Q(typeof v=="string",B,"internal-error"),Zt(c,B.name),Zt(u,B.name),Q(typeof A=="boolean",B,"internal-error"),Q(typeof E=="boolean",B,"internal-error"),Zt(m,B.name),Zt(f,B.name),Zt(g,B.name),Zt(p,B.name),Zt(d,B.name),Zt(h,B.name);const I=new $C({uid:v,auth:B,email:u,emailVerified:A,displayName:c,isAnonymous:E,photoURL:f,phoneNumber:m,tenantId:g,stsTokenManager:y,createdAt:d,lastLoginAt:h});return w&&Array.isArray(w)&&(I.providerData=w.map(M=>Object.assign({},M))),p&&(I._redirectEventId=p),I}static async _fromIdTokenResponse(B,t,C=!1){const n=new Vi;n.updateFromServerResponse(t);const r=new $C({uid:t.localId,auth:B,stsTokenManager:n,isAnonymous:C});return await Go(r),r}}/**
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
 */const nm=new Map;function Rt(e){xt(e instanceof Function,"Expected a class definition");let B=nm.get(e);return B?(xt(B instanceof e,"Instance stored in cache mismatched with class"),B):(B=new e,nm.set(e,B),B)}/**
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
 */class Zy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(B,t){this.storage[B]=t}async _get(B){const t=this.storage[B];return t===void 0?null:t}async _remove(B){delete this.storage[B]}_addListener(B,t){}_removeListener(B,t){}}Zy.type="NONE";const rm=Zy;/**
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
 */function qa(e,B,t){return`firebase:${e}:${B}:${t}`}class $n{constructor(B,t,C){this.persistence=B,this.auth=t,this.userKey=C;const{config:n,name:r}=this.auth;this.fullUserKey=qa(this.userKey,n.apiKey,r),this.fullPersistenceKey=qa("persistence",n.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(B){return this.persistence._set(this.fullUserKey,B.toJSON())}async getCurrentUser(){const B=await this.persistence._get(this.fullUserKey);return B?$C._fromJSON(this.auth,B):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(B){if(this.persistence===B)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=B,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(B,t,C="authUser"){if(!t.length)return new $n(Rt(rm),B,C);const n=(await Promise.all(t.map(async o=>{if(await o._isAvailable())return o}))).filter(o=>o);let r=n[0]||Rt(rm);const i=qa(C,B.config.apiKey,B.name);let s=null;for(const o of t)try{const l=await o._get(i);if(l){const c=$C._fromJSON(B,l);o!==r&&(s=c),r=o;break}}catch{}const a=n.filter(o=>o._shouldAllowMigration);return!r._shouldAllowMigration||!a.length?new $n(r,B,C):(r=a[0],s&&await r._set(i,s.toJSON()),await Promise.all(t.map(async o=>{if(o!==r)try{await o._remove(i)}catch{}})),new $n(r,B,C))}}/**
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
 */function im(e){const B=e.toLowerCase();if(B.includes("opera/")||B.includes("opr/")||B.includes("opios/"))return"Opera";if(_y(B))return"IEMobile";if(B.includes("msie")||B.includes("trident/"))return"IE";if(B.includes("edge/"))return"Edge";if(qy(B))return"Firefox";if(B.includes("silk/"))return"Silk";if(BE(B))return"Blackberry";if(eE(B))return"Webos";if(Ch(B))return"Safari";if((B.includes("chrome/")||zy(B))&&!B.includes("edge/"))return"Chrome";if($y(B))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,C=e.match(t);if((C==null?void 0:C.length)===2)return C[1]}return"Other"}function qy(e=$B()){return/firefox\//i.test(e)}function Ch(e=$B()){const B=e.toLowerCase();return B.includes("safari/")&&!B.includes("chrome/")&&!B.includes("crios/")&&!B.includes("android")}function zy(e=$B()){return/crios\//i.test(e)}function _y(e=$B()){return/iemobile/i.test(e)}function $y(e=$B()){return/android/i.test(e)}function BE(e=$B()){return/blackberry/i.test(e)}function eE(e=$B()){return/webos/i.test(e)}function Kl(e=$B()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Mk(e=$B()){var B;return Kl(e)&&!!(!((B=window.navigator)===null||B===void 0)&&B.standalone)}function Lk(){return mN()&&document.documentMode===10}function tE(e=$B()){return Kl(e)||$y(e)||eE(e)||BE(e)||/windows phone/i.test(e)||_y(e)}function Hk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function CE(e,B=[]){let t;switch(e){case"Browser":t=im($B());break;case"Worker":t=`${im($B())}-${e}`;break;default:t=e}const C=B.length?B.join(","):"FirebaseCore-web";return`${t}/JsCore/${Dr}/${C}`}async function nE(e,B){return ms(e,"GET","/v2/recaptchaConfig",Wy(e,B))}function sm(e){return e!==void 0&&e.enterprise!==void 0}class rE{constructor(B){if(this.siteKey="",this.emailPasswordEnabled=!1,B.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=B.recaptchaKey.split("/")[3],this.emailPasswordEnabled=B.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
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
 */function xk(){var e,B;return(B=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&B!==void 0?B:document}function iE(e){return new Promise((B,t)=>{const C=document.createElement("script");C.setAttribute("src",e),C.onload=B,C.onerror=n=>{const r=dt("internal-error");r.customData=n,t(r)},C.type="text/javascript",C.charset="UTF-8",xk().appendChild(C)})}function Gk(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const Kk="https://www.google.com/recaptcha/enterprise.js?render=",Uk="recaptcha-enterprise",Qk="NO_RECAPTCHA";class Jk{constructor(B){this.type=Uk,this.auth=gs(B)}async verify(B="verify",t=!1){async function C(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(i,s)=>{nE(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)s(new Error("recaptcha Enterprise site key undefined"));else{const o=new rE(a);return r.tenantId==null?r._agentRecaptchaConfig=o:r._tenantRecaptchaConfigs[r.tenantId]=o,i(o.siteKey)}}).catch(a=>{s(a)})})}function n(r,i,s){const a=window.grecaptcha;sm(a)?a.enterprise.ready(()=>{a.enterprise.execute(r,{action:B}).then(o=>{i(o)}).catch(()=>{i(Qk)})}):s(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,i)=>{C(this.auth).then(s=>{if(!t&&sm(window.grecaptcha))n(s,r,i);else{if(typeof window>"u"){i(new Error("RecaptchaVerifier is only supported in browser"));return}iE(Kk+s).then(()=>{n(s,r,i)}).catch(a=>{i(a)})}}).catch(s=>{i(s)})})}}/**
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
 */class Vk{constructor(B){this.auth=B,this.queue=[]}pushCallback(B,t){const C=r=>new Promise((i,s)=>{try{const a=B(r);i(a)}catch(a){s(a)}});C.onAbort=t,this.queue.push(C);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(B){if(this.auth.currentUser===B)return;const t=[];try{for(const C of this.queue)await C(B),C.onAbort&&t.push(C.onAbort)}catch(C){t.reverse();for(const n of t)try{n()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:C==null?void 0:C.message})}}}/**
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
 */class Wk{constructor(B,t,C,n){this.app=B,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=C,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new am(this),this.idTokenSubscription=new am(this),this.beforeStateQueue=new Vk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=B.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(B,t){return t&&(this._popupRedirectResolver=Rt(t)),this._initializationPromise=this.queue(async()=>{var C,n;if(!this._deleted&&(this.persistenceManager=await $n.create(this,B),!this._deleted)){if(!((C=this._popupRedirectResolver)===null||C===void 0)&&C._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((n=this.currentUser)===null||n===void 0?void 0:n.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const B=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!B)){if(this.currentUser&&B&&this.currentUser.uid===B.uid){this._currentUser._assign(B),await this.currentUser.getIdToken();return}await this._updateCurrentUser(B,!0)}}async initializeCurrentUser(B){var t;const C=await this.assertedPersistence.getCurrentUser();let n=C,r=!1;if(B&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,s=n==null?void 0:n._redirectEventId,a=await this.tryRedirectSignIn(B);(!i||i===s)&&(a!=null&&a.user)&&(n=a.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(i){n=C,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(B){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,B,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(B){try{await Go(B)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(B)}useDeviceLanguage(){this.languageCode=Ak()}async _delete(){this._deleted=!0}async updateCurrentUser(B){const t=B?ye(B):null;return t&&Q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(B,t=!1){if(!this._deleted)return B&&Q(this.tenantId===B.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(B),this.queue(async()=>{await this.directlySetCurrentUser(B),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(B){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Rt(B))})}async initializeRecaptchaConfig(){const B=await nE(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new rE(B);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new Jk(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(B){this._errorFactory=new vn("auth","Firebase",B())}onAuthStateChanged(B,t,C){return this.registerStateListener(this.authStateSubscription,B,t,C)}beforeAuthStateChanged(B,t){return this.beforeStateQueue.pushCallback(B,t)}onIdTokenChanged(B,t,C){return this.registerStateListener(this.idTokenSubscription,B,t,C)}toJSON(){var B;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(B=this._currentUser)===null||B===void 0?void 0:B.toJSON()}}async _setRedirectUser(B,t){const C=await this.getOrInitRedirectPersistenceManager(t);return B===null?C.removeCurrentUser():C.setCurrentUser(B)}async getOrInitRedirectPersistenceManager(B){if(!this.redirectPersistenceManager){const t=B&&Rt(B)||this._popupRedirectResolver;Q(t,this,"argument-error"),this.redirectPersistenceManager=await $n.create(this,[Rt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(B){var t,C;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===B?this._currentUser:((C=this.redirectUser)===null||C===void 0?void 0:C._redirectEventId)===B?this.redirectUser:null}async _persistUserIfCurrent(B){if(B===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(B))}_notifyListenersIfCurrent(B){B===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var B,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const C=(t=(B=this.currentUser)===null||B===void 0?void 0:B.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==C&&(this.lastNotifiedUid=C,this.authStateSubscription.next(this.currentUser))}registerStateListener(B,t,C,n){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return Q(i,this,"internal-error"),i.then(()=>r(this.currentUser)),typeof t=="function"?B.addObserver(t,C,n):B.addObserver(t)}async directlySetCurrentUser(B){this.currentUser&&this.currentUser!==B&&this._currentUser._stopProactiveRefresh(),B&&this.isProactiveRefreshEnabled&&B._startProactiveRefresh(),this.currentUser=B,B?await this.assertedPersistence.setCurrentUser(B):await this.assertedPersistence.removeCurrentUser()}queue(B){return this.operations=this.operations.then(B,B),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(B){!B||this.frameworks.includes(B)||(this.frameworks.push(B),this.frameworks.sort(),this.clientVersion=CE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var B;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const C=await((B=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||B===void 0?void 0:B.getHeartbeatsHeader());C&&(t["X-Firebase-Client"]=C);const n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"]=n),t}async _getAppCheckToken(){var B;const t=await((B=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||B===void 0?void 0:B.getToken());return t!=null&&t.error&&pk(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function gs(e){return ye(e)}class am{constructor(B){this.auth=B,this.observer=null,this.addObserver=bN(t=>this.observer=t)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function jk(e,B){const t=An(e,"auth");if(t.isInitialized()){const n=t.getImmediate(),r=t.getOptions();if(Ui(r,B??{}))return n;mt(n,"already-initialized")}return t.initialize({options:B})}function Yk(e,B){const t=(B==null?void 0:B.persistence)||[],C=(Array.isArray(t)?t:[t]).map(Rt);B!=null&&B.errorMap&&e._updateErrorMap(B.errorMap),e._initializeWithPersistence(C,B==null?void 0:B.popupRedirectResolver)}function Xk(e,B,t){const C=gs(e);Q(C._canInitEmulator,C,"emulator-config-failed"),Q(/^https?:\/\//.test(B),C,"invalid-emulator-scheme");const n=!!(t!=null&&t.disableWarnings),r=sE(B),{host:i,port:s}=Zk(B),a=s===null?"":`:${s}`;C.config.emulator={url:`${r}//${i}${a}/`},C.settings.appVerificationDisabledForTesting=!0,C.emulatorConfig=Object.freeze({host:i,port:s,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:n})}),n||qk()}function sE(e){const B=e.indexOf(":");return B<0?"":e.substr(0,B+1)}function Zk(e){const B=sE(e),t=/(\/\/)?([^?#/]+)/.exec(e.substr(B.length));if(!t)return{host:"",port:null};const C=t[2].split("@").pop()||"",n=/^(\[[^\]]+\])(:|$)/.exec(C);if(n){const r=n[1];return{host:r,port:om(C.substr(r.length+1))}}else{const[r,i]=C.split(":");return{host:r,port:om(i)}}}function om(e){if(!e)return null;const B=Number(e);return isNaN(B)?null:B}function qk(){function e(){const B=document.createElement("p"),t=B.style;B.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",B.classList.add("firebase-emulator-warning"),document.body.appendChild(B)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class aE{constructor(B,t){this.providerId=B,this.signInMethod=t}toJSON(){return Pt("not implemented")}_getIdTokenResponse(B){return Pt("not implemented")}_linkToIdToken(B,t){return Pt("not implemented")}_getReauthenticationResolver(B){return Pt("not implemented")}}/**
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
 */async function Br(e,B){return Sk(e,"POST","/v1/accounts:signInWithIdp",Wy(e,B))}/**
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
 */const zk="http://localhost";class ln extends aE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(B){const t=new ln(B.providerId,B.signInMethod);return B.idToken||B.accessToken?(B.idToken&&(t.idToken=B.idToken),B.accessToken&&(t.accessToken=B.accessToken),B.nonce&&!B.pendingToken&&(t.nonce=B.nonce),B.pendingToken&&(t.pendingToken=B.pendingToken)):B.oauthToken&&B.oauthTokenSecret?(t.accessToken=B.oauthToken,t.secret=B.oauthTokenSecret):mt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(B){const t=typeof B=="string"?JSON.parse(B):B,{providerId:C,signInMethod:n}=t,r=$1(t,["providerId","signInMethod"]);if(!C||!n)return null;const i=new ln(C,n);return i.idToken=r.idToken||void 0,i.accessToken=r.accessToken||void 0,i.secret=r.secret,i.nonce=r.nonce,i.pendingToken=r.pendingToken||null,i}_getIdTokenResponse(B){const t=this.buildRequest();return Br(B,t)}_linkToIdToken(B,t){const C=this.buildRequest();return C.idToken=t,Br(B,C)}_getReauthenticationResolver(B){const t=this.buildRequest();return t.autoCreate=!1,Br(B,t)}buildRequest(){const B={requestUri:zk,returnSecureToken:!0};if(this.pendingToken)B.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),B.postBody=wr(t)}return B}}/**
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
 */class nh{constructor(B){this.providerId=B,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(B){this.defaultLanguageCode=B}setCustomParameters(B){return this.customParameters=B,this}getCustomParameters(){return this.customParameters}}/**
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
 */class vs extends nh{constructor(){super(...arguments),this.scopes=[]}addScope(B){return this.scopes.includes(B)||this.scopes.push(B),this}getScopes(){return[...this.scopes]}}/**
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
 */class tC extends vs{constructor(){super("facebook.com")}static credential(B){return ln._fromParams({providerId:tC.PROVIDER_ID,signInMethod:tC.FACEBOOK_SIGN_IN_METHOD,accessToken:B})}static credentialFromResult(B){return tC.credentialFromTaggedObject(B)}static credentialFromError(B){return tC.credentialFromTaggedObject(B.customData||{})}static credentialFromTaggedObject({_tokenResponse:B}){if(!B||!("oauthAccessToken"in B)||!B.oauthAccessToken)return null;try{return tC.credential(B.oauthAccessToken)}catch{return null}}}tC.FACEBOOK_SIGN_IN_METHOD="facebook.com";tC.PROVIDER_ID="facebook.com";/**
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
 */class Le extends vs{constructor(){super("google.com"),this.addScope("profile")}static credential(B,t){return ln._fromParams({providerId:Le.PROVIDER_ID,signInMethod:Le.GOOGLE_SIGN_IN_METHOD,idToken:B,accessToken:t})}static credentialFromResult(B){return Le.credentialFromTaggedObject(B)}static credentialFromError(B){return Le.credentialFromTaggedObject(B.customData||{})}static credentialFromTaggedObject({_tokenResponse:B}){if(!B)return null;const{oauthIdToken:t,oauthAccessToken:C}=B;if(!t&&!C)return null;try{return Le.credential(t,C)}catch{return null}}}Le.GOOGLE_SIGN_IN_METHOD="google.com";Le.PROVIDER_ID="google.com";/**
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
 */class CC extends vs{constructor(){super("github.com")}static credential(B){return ln._fromParams({providerId:CC.PROVIDER_ID,signInMethod:CC.GITHUB_SIGN_IN_METHOD,accessToken:B})}static credentialFromResult(B){return CC.credentialFromTaggedObject(B)}static credentialFromError(B){return CC.credentialFromTaggedObject(B.customData||{})}static credentialFromTaggedObject({_tokenResponse:B}){if(!B||!("oauthAccessToken"in B)||!B.oauthAccessToken)return null;try{return CC.credential(B.oauthAccessToken)}catch{return null}}}CC.GITHUB_SIGN_IN_METHOD="github.com";CC.PROVIDER_ID="github.com";/**
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
 */class nC extends vs{constructor(){super("twitter.com")}static credential(B,t){return ln._fromParams({providerId:nC.PROVIDER_ID,signInMethod:nC.TWITTER_SIGN_IN_METHOD,oauthToken:B,oauthTokenSecret:t})}static credentialFromResult(B){return nC.credentialFromTaggedObject(B)}static credentialFromError(B){return nC.credentialFromTaggedObject(B.customData||{})}static credentialFromTaggedObject({_tokenResponse:B}){if(!B)return null;const{oauthAccessToken:t,oauthTokenSecret:C}=B;if(!t||!C)return null;try{return nC.credential(t,C)}catch{return null}}}nC.TWITTER_SIGN_IN_METHOD="twitter.com";nC.PROVIDER_ID="twitter.com";/**
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
 */class dr{constructor(B){this.user=B.user,this.providerId=B.providerId,this._tokenResponse=B._tokenResponse,this.operationType=B.operationType}static async _fromIdTokenResponse(B,t,C,n=!1){const r=await $C._fromIdTokenResponse(B,C,n),i=lm(C);return new dr({user:r,providerId:i,_tokenResponse:C,operationType:t})}static async _forOperation(B,t,C){await B._updateTokensIfNecessary(C,!0);const n=lm(C);return new dr({user:B,providerId:n,_tokenResponse:C,operationType:t})}}function lm(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Ko extends yt{constructor(B,t,C,n){var r;super(t.code,t.message),this.operationType=C,this.user=n,Object.setPrototypeOf(this,Ko.prototype),this.customData={appName:B.name,tenantId:(r=B.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:C}}static _fromErrorAndOperation(B,t,C,n){return new Ko(B,t,C,n)}}function oE(e,B,t,C){return(B==="reauthenticate"?t._getReauthenticationResolver(e):t._getIdTokenResponse(e)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ko._fromErrorAndOperation(e,r,B,C):r})}async function _k(e,B,t=!1){const C=await Ji(e,B._linkToIdToken(e.auth,await e.getIdToken()),t);return dr._forOperation(e,"link",C)}/**
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
 */async function $k(e,B,t=!1){const{auth:C}=e,n="reauthenticate";try{const r=await Ji(e,oE(C,n,B,e),t);Q(r.idToken,C,"internal-error");const i=th(r.idToken);Q(i,C,"internal-error");const{sub:s}=i;return Q(e.uid===s,C,"user-mismatch"),dr._forOperation(e,n,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&mt(C,"user-mismatch"),r}}/**
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
 */async function BT(e,B,t=!1){const C="signIn",n=await oE(e,C,B),r=await dr._fromIdTokenResponse(e,C,n);return t||await e._updateCurrentUser(r.user),r}function eT(e,B,t,C){return ye(e).onIdTokenChanged(B,t,C)}function tT(e,B,t){return ye(e).beforeAuthStateChanged(B,t)}const Uo="__sak";/**
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
 */class lE{constructor(B,t){this.storageRetriever=B,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Uo,"1"),this.storage.removeItem(Uo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(B,t){return this.storage.setItem(B,JSON.stringify(t)),Promise.resolve()}_get(B){const t=this.storage.getItem(B);return Promise.resolve(t?JSON.parse(t):null)}_remove(B){return this.storage.removeItem(B),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function CT(){const e=$B();return Ch(e)||Kl(e)}const nT=1e3,rT=10;class cE extends lE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(B,t)=>this.onStorageEvent(B,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=CT()&&Hk(),this.fallbackToPolling=tE(),this._shouldAllowMigration=!0}forAllChangedKeys(B){for(const t of Object.keys(this.listeners)){const C=this.storage.getItem(t),n=this.localCache[t];C!==n&&B(t,n,C)}}onStorageEvent(B,t=!1){if(!B.key){this.forAllChangedKeys((i,s,a)=>{this.notifyListeners(i,a)});return}const C=B.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(C);if(B.newValue!==i)B.newValue!==null?this.storage.setItem(C,B.newValue):this.storage.removeItem(C);else if(this.localCache[C]===B.newValue&&!t)return}const n=()=>{const i=this.storage.getItem(C);!t&&this.localCache[C]===i||this.notifyListeners(C,i)},r=this.storage.getItem(C);Lk()&&r!==B.newValue&&B.newValue!==B.oldValue?setTimeout(n,rT):n()}notifyListeners(B,t){this.localCache[B]=t;const C=this.listeners[B];if(C)for(const n of Array.from(C))n(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((B,t,C)=>{this.onStorageEvent(new StorageEvent("storage",{key:B,oldValue:t,newValue:C}),!0)})},nT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(B,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[B]||(this.listeners[B]=new Set,this.localCache[B]=this.storage.getItem(B)),this.listeners[B].add(t)}_removeListener(B,t){this.listeners[B]&&(this.listeners[B].delete(t),this.listeners[B].size===0&&delete this.listeners[B]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(B,t){await super._set(B,t),this.localCache[B]=JSON.stringify(t)}async _get(B){const t=await super._get(B);return this.localCache[B]=JSON.stringify(t),t}async _remove(B){await super._remove(B),delete this.localCache[B]}}cE.type="LOCAL";const iT=cE;/**
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
 */class uE extends lE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(B,t){}_removeListener(B,t){}}uE.type="SESSION";const fE=uE;/**
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
 */function sT(e){return Promise.all(e.map(async B=>{try{return{fulfilled:!0,value:await B}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ul{constructor(B){this.eventTarget=B,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(B){const t=this.receivers.find(n=>n.isListeningto(B));if(t)return t;const C=new Ul(B);return this.receivers.push(C),C}isListeningto(B){return this.eventTarget===B}async handleEvent(B){const t=B,{eventId:C,eventType:n,data:r}=t.data,i=this.handlersMap[n];if(!(i!=null&&i.size))return;t.ports[0].postMessage({status:"ack",eventId:C,eventType:n});const s=Array.from(i).map(async o=>o(t.origin,r)),a=await sT(s);t.ports[0].postMessage({status:"done",eventId:C,eventType:n,response:a})}_subscribe(B,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[B]||(this.handlersMap[B]=new Set),this.handlersMap[B].add(t)}_unsubscribe(B,t){this.handlersMap[B]&&t&&this.handlersMap[B].delete(t),(!t||this.handlersMap[B].size===0)&&delete this.handlersMap[B],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ul.receivers=[];/**
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
 */function rh(e="",B=10){let t="";for(let C=0;C<B;C++)t+=Math.floor(Math.random()*10);return e+t}/**
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
 */class aT{constructor(B){this.target=B,this.handlers=new Set}removeMessageHandler(B){B.messageChannel&&(B.messageChannel.port1.removeEventListener("message",B.onMessage),B.messageChannel.port1.close()),this.handlers.delete(B)}async _send(B,t,C=50){const n=typeof MessageChannel<"u"?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let r,i;return new Promise((s,a)=>{const o=rh("",20);n.port1.start();const l=setTimeout(()=>{a(new Error("unsupported_event"))},C);i={messageChannel:n,onMessage(c){const u=c;if(u.data.eventId===o)switch(u.data.status){case"ack":clearTimeout(l),r=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),s(u.data.response);break;default:clearTimeout(l),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(i),n.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:B,eventId:o,data:t},[n.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
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
 */function ht(){return window}function oT(e){ht().location.href=e}/**
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
 */function dE(){return typeof ht().WorkerGlobalScope<"u"&&typeof ht().importScripts=="function"}async function lT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cT(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function uT(){return dE()?self:null}/**
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
 */const hE="firebaseLocalStorageDb",fT=1,Qo="firebaseLocalStorage",pE="fbase_key";class As{constructor(B){this.request=B}toPromise(){return new Promise((B,t)=>{this.request.addEventListener("success",()=>{B(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ql(e,B){return e.transaction([Qo],B?"readwrite":"readonly").objectStore(Qo)}function dT(){const e=indexedDB.deleteDatabase(hE);return new As(e).toPromise()}function Yf(){const e=indexedDB.open(hE,fT);return new Promise((B,t)=>{e.addEventListener("error",()=>{t(e.error)}),e.addEventListener("upgradeneeded",()=>{const C=e.result;try{C.createObjectStore(Qo,{keyPath:pE})}catch(n){t(n)}}),e.addEventListener("success",async()=>{const C=e.result;C.objectStoreNames.contains(Qo)?B(C):(C.close(),await dT(),B(await Yf()))})})}async function cm(e,B,t){const C=Ql(e,!0).put({[pE]:B,value:t});return new As(C).toPromise()}async function hT(e,B){const t=Ql(e,!1).get(B),C=await new As(t).toPromise();return C===void 0?null:C.value}function um(e,B){const t=Ql(e,!0).delete(B);return new As(t).toPromise()}const pT=800,mT=3;class mE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yf(),this.db)}async _withRetries(B){let t=0;for(;;)try{const C=await this._openDb();return await B(C)}catch(C){if(t++>mT)throw C;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ul._getInstance(uT()),this.receiver._subscribe("keyChanged",async(B,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(B,t)=>["keyChanged"])}async initializeSender(){var B,t;if(this.activeServiceWorker=await lT(),!this.activeServiceWorker)return;this.sender=new aT(this.activeServiceWorker);const C=await this.sender._send("ping",{},800);C&&!((B=C[0])===null||B===void 0)&&B.fulfilled&&!((t=C[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(B){if(!(!this.sender||!this.activeServiceWorker||cT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:B},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const B=await Yf();return await cm(B,Uo,"1"),await um(B,Uo),!0}catch{}return!1}async _withPendingWrite(B){this.pendingWrites++;try{await B()}finally{this.pendingWrites--}}async _set(B,t){return this._withPendingWrite(async()=>(await this._withRetries(C=>cm(C,B,t)),this.localCache[B]=t,this.notifyServiceWorker(B)))}async _get(B){const t=await this._withRetries(C=>hT(C,B));return this.localCache[B]=t,t}async _remove(B){return this._withPendingWrite(async()=>(await this._withRetries(t=>um(t,B)),delete this.localCache[B],this.notifyServiceWorker(B)))}async _poll(){const B=await this._withRetries(n=>{const r=Ql(n,!1).getAll();return new As(r).toPromise()});if(!B)return[];if(this.pendingWrites!==0)return[];const t=[],C=new Set;for(const{fbase_key:n,value:r}of B)C.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(r)&&(this.notifyListeners(n,r),t.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!C.has(n)&&(this.notifyListeners(n,null),t.push(n));return t}notifyListeners(B,t){this.localCache[B]=t;const C=this.listeners[B];if(C)for(const n of Array.from(C))n(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(B,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[B]||(this.listeners[B]=new Set,this._get(B)),this.listeners[B].add(t)}_removeListener(B,t){this.listeners[B]&&(this.listeners[B].delete(t),this.listeners[B].size===0&&delete this.listeners[B]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mE.type="LOCAL";const gT=mE;new ps(3e4,6e4);/**
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
 */function gE(e,B){return B?Rt(B):(Q(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class ih extends aE{constructor(B){super("custom","custom"),this.params=B}_getIdTokenResponse(B){return Br(B,this._buildIdpRequest())}_linkToIdToken(B,t){return Br(B,this._buildIdpRequest(t))}_getReauthenticationResolver(B){return Br(B,this._buildIdpRequest())}_buildIdpRequest(B){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return B&&(t.idToken=B),t}}function vT(e){return BT(e.auth,new ih(e),e.bypassAuthState)}function AT(e){const{auth:B,user:t}=e;return Q(t,B,"internal-error"),$k(t,new ih(e),e.bypassAuthState)}async function yT(e){const{auth:B,user:t}=e;return Q(t,B,"internal-error"),_k(t,new ih(e),e.bypassAuthState)}/**
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
 */class vE{constructor(B,t,C,n,r=!1){this.auth=B,this.resolver=C,this.user=n,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(B,t)=>{this.pendingPromise={resolve:B,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(C){this.reject(C)}})}async onAuthEvent(B){const{urlResponse:t,sessionId:C,postBody:n,tenantId:r,error:i,type:s}=B;if(i){this.reject(i);return}const a={auth:this.auth,requestUri:t,sessionId:C,tenantId:r||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(o){this.reject(o)}}onError(B){this.reject(B)}getIdpTask(B){switch(B){case"signInViaPopup":case"signInViaRedirect":return vT;case"linkViaPopup":case"linkViaRedirect":return yT;case"reauthViaPopup":case"reauthViaRedirect":return AT;default:mt(this.auth,"internal-error")}}resolve(B){xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(B),this.unregisterAndCleanUp()}reject(B){xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(B),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ET=new ps(2e3,1e4);async function ST(e,B,t){const C=gs(e);mk(e,B,nh);const n=gE(C,t);return new WC(C,"signInViaPopup",B,n).executeNotNull()}class WC extends vE{constructor(B,t,C,n,r){super(B,t,n,r),this.provider=C,this.authWindow=null,this.pollId=null,WC.currentPopupAction&&WC.currentPopupAction.cancel(),WC.currentPopupAction=this}async executeNotNull(){const B=await this.execute();return Q(B,this.auth,"internal-error"),B}async onExecution(){xt(this.filter.length===1,"Popup operations only handle one event");const B=rh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],B),this.authWindow.associatedEvent=B,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var B;return((B=this.authWindow)===null||B===void 0?void 0:B.associatedEvent)||null}cancel(){this.reject(dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,WC.currentPopupAction=null}pollUserCancellation(){const B=()=>{var t,C;if(!((C=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||C===void 0)&&C.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(B,ET.get())};B()}}WC.currentPopupAction=null;/**
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
 */const IT="pendingRedirect",za=new Map;class bT extends vE{constructor(B,t,C=!1){super(B,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,C),this.eventId=null}async execute(){let B=za.get(this.auth._key());if(!B){try{const C=await wT(this.resolver,this.auth)?await super.execute():null;B=()=>Promise.resolve(C)}catch(t){B=()=>Promise.reject(t)}za.set(this.auth._key(),B)}return this.bypassAuthState||za.set(this.auth._key(),()=>Promise.resolve(null)),B()}async onAuthEvent(B){if(B.type==="signInViaRedirect")return super.onAuthEvent(B);if(B.type==="unknown"){this.resolve(null);return}if(B.eventId){const t=await this.auth._redirectUserForId(B.eventId);if(t)return this.user=t,super.onAuthEvent(B);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wT(e,B){const t=RT(B),C=PT(e);if(!await C._isAvailable())return!1;const n=await C._get(t)==="true";return await C._remove(t),n}function DT(e,B){za.set(e._key(),B)}function PT(e){return Rt(e._redirectPersistence)}function RT(e){return qa(IT,e.config.apiKey,e.name)}async function NT(e,B,t=!1){const C=gs(e),n=gE(C,B),i=await new bT(C,n,t).execute();return i&&!t&&(delete i.user._redirectEventId,await C._persistUserIfCurrent(i.user),await C._setRedirectUser(null,B)),i}/**
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
 */const FT=10*60*1e3;class OT{constructor(B){this.auth=B,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(B){this.consumers.add(B),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,B)&&(this.sendToConsumer(this.queuedRedirectEvent,B),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(B){this.consumers.delete(B)}onEvent(B){if(this.hasEventBeenHandled(B))return!1;let t=!1;return this.consumers.forEach(C=>{this.isEventForConsumer(B,C)&&(t=!0,this.sendToConsumer(B,C),this.saveEventToCache(B))}),this.hasHandledPotentialRedirect||!kT(B)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=B,t=!0)),t}sendToConsumer(B,t){var C;if(B.error&&!AE(B)){const n=((C=B.error.code)===null||C===void 0?void 0:C.split("auth/")[1])||"internal-error";t.onError(dt(this.auth,n))}else t.onAuthEvent(B)}isEventForConsumer(B,t){const C=t.eventId===null||!!B.eventId&&B.eventId===t.eventId;return t.filter.includes(B.type)&&C}hasEventBeenHandled(B){return Date.now()-this.lastProcessedEventTime>=FT&&this.cachedEventUids.clear(),this.cachedEventUids.has(fm(B))}saveEventToCache(B){this.cachedEventUids.add(fm(B)),this.lastProcessedEventTime=Date.now()}}function fm(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(B=>B).join("-")}function AE({type:e,error:B}){return e==="unknown"&&(B==null?void 0:B.code)==="auth/no-auth-event"}function kT(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return AE(e);default:return!1}}/**
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
 */async function TT(e,B={}){return ms(e,"GET","/v1/projects",B)}/**
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
 */const MT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,LT=/^https?/;async function HT(e){if(e.config.emulator)return;const{authorizedDomains:B}=await TT(e);for(const t of B)try{if(xT(t))return}catch{}mt(e,"unauthorized-domain")}function xT(e){const B=jf(),{protocol:t,hostname:C}=new URL(B);if(e.startsWith("chrome-extension://")){const i=new URL(e);return i.hostname===""&&C===""?t==="chrome-extension:"&&e.replace("chrome-extension://","")===B.replace("chrome-extension://",""):t==="chrome-extension:"&&i.hostname===C}if(!LT.test(t))return!1;if(MT.test(e))return C===e;const n=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+n+"|"+n+")$","i").test(C)}/**
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
 */const GT=new ps(3e4,6e4);function dm(){const e=ht().___jsl;if(e!=null&&e.H){for(const B of Object.keys(e.H))if(e.H[B].r=e.H[B].r||[],e.H[B].L=e.H[B].L||[],e.H[B].r=[...e.H[B].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}function KT(e){return new Promise((B,t)=>{var C,n,r;function i(){dm(),gapi.load("gapi.iframes",{callback:()=>{B(gapi.iframes.getContext())},ontimeout:()=>{dm(),t(dt(e,"network-request-failed"))},timeout:GT.get()})}if(!((n=(C=ht().gapi)===null||C===void 0?void 0:C.iframes)===null||n===void 0)&&n.Iframe)B(gapi.iframes.getContext());else if(!((r=ht().gapi)===null||r===void 0)&&r.load)i();else{const s=Gk("iframefcb");return ht()[s]=()=>{gapi.load?i():t(dt(e,"network-request-failed"))},iE(`https://apis.google.com/js/api.js?onload=${s}`).catch(a=>t(a))}}).catch(B=>{throw _a=null,B})}let _a=null;function UT(e){return _a=_a||KT(e),_a}/**
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
 */const QT=new ps(5e3,15e3),JT="__/auth/iframe",VT="emulator/auth/iframe",WT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function YT(e){const B=e.config;Q(B.authDomain,e,"auth-domain-config-required");const t=B.emulator?eh(B,VT):`https://${e.config.authDomain}/${JT}`,C={apiKey:B.apiKey,appName:e.name,v:Dr},n=jT.get(e.config.apiHost);n&&(C.eid=n);const r=e._getFrameworks();return r.length&&(C.fw=r.join(",")),`${t}?${wr(C).slice(1)}`}async function XT(e){const B=await UT(e),t=ht().gapi;return Q(t,e,"internal-error"),B.open({where:document.body,url:YT(e),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WT,dontclear:!0},C=>new Promise(async(n,r)=>{await C.restyle({setHideOnLeave:!1});const i=dt(e,"network-request-failed"),s=ht().setTimeout(()=>{r(i)},QT.get());function a(){ht().clearTimeout(s),n(C)}C.ping(a).then(a,()=>{r(i)})}))}/**
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
 */const ZT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qT=500,zT=600,_T="_blank",$T="http://localhost";class hm{constructor(B){this.window=B,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BM(e,B,t,C=qT,n=zT){const r=Math.max((window.screen.availHeight-n)/2,0).toString(),i=Math.max((window.screen.availWidth-C)/2,0).toString();let s="";const a=Object.assign(Object.assign({},ZT),{width:C.toString(),height:n.toString(),top:r,left:i}),o=$B().toLowerCase();t&&(s=zy(o)?_T:t),qy(o)&&(B=B||$T,a.scrollbars="yes");const l=Object.entries(a).reduce((u,[m,f])=>`${u}${m}=${f},`,"");if(Mk(o)&&s!=="_self")return eM(B||"",s),new hm(null);const c=window.open(B||"",s,l);Q(c,e,"popup-blocked");try{c.focus()}catch{}return new hm(c)}function eM(e,B){const t=document.createElement("a");t.href=e,t.target=B;const C=document.createEvent("MouseEvent");C.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(C)}/**
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
 */const tM="__/auth/handler",CM="emulator/auth/handler",nM=encodeURIComponent("fac");async function pm(e,B,t,C,n,r){Q(e.config.authDomain,e,"auth-domain-config-required"),Q(e.config.apiKey,e,"invalid-api-key");const i={apiKey:e.config.apiKey,appName:e.name,authType:t,redirectUrl:C,v:Dr,eventId:n};if(B instanceof nh){B.setDefaultLanguage(e.languageCode),i.providerId=B.providerId||"",Hf(B.getCustomParameters())||(i.customParameters=JSON.stringify(B.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))i[l]=c}if(B instanceof vs){const l=B.getScopes().filter(c=>c!=="");l.length>0&&(i.scopes=l.join(","))}e.tenantId&&(i.tid=e.tenantId);const s=i;for(const l of Object.keys(s))s[l]===void 0&&delete s[l];const a=await e._getAppCheckToken(),o=a?`#${nM}=${encodeURIComponent(a)}`:"";return`${rM(e)}?${wr(s).slice(1)}${o}`}function rM({config:e}){return e.emulator?eh(e,CM):`https://${e.authDomain}/${tM}`}/**
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
 */const Cu="webStorageSupport";class iM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fE,this._completeRedirectFn=NT,this._overrideRedirectResult=DT}async _openPopup(B,t,C,n){var r;xt((r=this.eventManagers[B._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const i=await pm(B,t,C,jf(),n);return BM(B,i,rh())}async _openRedirect(B,t,C,n){await this._originValidation(B);const r=await pm(B,t,C,jf(),n);return oT(r),new Promise(()=>{})}_initialize(B){const t=B._key();if(this.eventManagers[t]){const{manager:n,promise:r}=this.eventManagers[t];return n?Promise.resolve(n):(xt(r,"If manager is not set, promise should be"),r)}const C=this.initAndGetManager(B);return this.eventManagers[t]={promise:C},C.catch(()=>{delete this.eventManagers[t]}),C}async initAndGetManager(B){const t=await XT(B),C=new OT(B);return t.register("authEvent",n=>(Q(n==null?void 0:n.authEvent,B,"invalid-auth-event"),{status:C.onEvent(n.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[B._key()]={manager:C},this.iframes[B._key()]=t,C}_isIframeWebStorageSupported(B,t){this.iframes[B._key()].send(Cu,{type:Cu},n=>{var r;const i=(r=n==null?void 0:n[0])===null||r===void 0?void 0:r[Cu];i!==void 0&&t(!!i),mt(B,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(B){const t=B._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=HT(B)),this.originValidationPromises[t]}get _shouldInitProactively(){return tE()||Ch()||Kl()}}const sM=iM;var mm="@firebase/auth",gm="0.23.2";/**
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
 */class aM{constructor(B){this.auth=B,this.internalListeners=new Map}getUid(){var B;return this.assertAuthConfigured(),((B=this.auth.currentUser)===null||B===void 0?void 0:B.uid)||null}async getToken(B){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(B)}:null}addAuthTokenListener(B){if(this.assertAuthConfigured(),this.internalListeners.has(B))return;const t=this.auth.onIdTokenChanged(C=>{B((C==null?void 0:C.stsTokenManager.accessToken)||null)});this.internalListeners.set(B,t),this.updateProactiveRefresh()}removeAuthTokenListener(B){this.assertAuthConfigured();const t=this.internalListeners.get(B);t&&(this.internalListeners.delete(B),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function oM(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function lM(e){pt(new nt("auth",(B,{options:t})=>{const C=B.getProvider("app").getImmediate(),n=B.getProvider("heartbeat"),r=B.getProvider("app-check-internal"),{apiKey:i,authDomain:s}=C.options;Q(i&&!i.includes(":"),"invalid-api-key",{appName:C.name});const a={apiKey:i,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:CE(e)},o=new Wk(C,n,r,a);return Yk(o,t),o},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((B,t,C)=>{B.getProvider("auth-internal").initialize()})),pt(new nt("auth-internal",B=>{const t=gs(B.getProvider("auth").getImmediate());return(C=>new aM(C))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ge(mm,gm,oM(e)),Ge(mm,gm,"esm2017")}/**
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
 */const cM=5*60,uM=iy("authIdTokenMaxAge")||cM;let vm=null;const fM=e=>async B=>{const t=B&&await B.getIdTokenResult(),C=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(C&&C>uM)return;const n=t==null?void 0:t.token;vm!==n&&(vm=n,await fetch(e,{method:n?"POST":"DELETE",headers:n?{Authorization:`Bearer ${n}`}:{}}))};function yE(e=W1()){const B=An(e,"auth");if(B.isInitialized())return B.getImmediate();const t=jk(e,{popupRedirectResolver:sM,persistence:[gT,iT,fE]}),C=iy("authTokenSyncURL");if(C){const r=fM(C);tT(t,r,()=>r(t.currentUser)),eT(t,i=>r(i))}const n=ny("auth");return n&&Xk(t,`http://${n}`),t}lM("Browser");const Am="@firebase/database",ym="0.14.4";/**
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
 */let EE="";function dM(e){EE=e}/**
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
 */class hM{constructor(B){this.domStorage_=B,this.prefix_="firebase:"}set(B,t){t==null?this.domStorage_.removeItem(this.prefixedName_(B)):this.domStorage_.setItem(this.prefixedName_(B),OB(t))}get(B){const t=this.domStorage_.getItem(this.prefixedName_(B));return t==null?null:Ki(t)}remove(B){this.domStorage_.removeItem(this.prefixedName_(B))}prefixedName_(B){return this.prefix_+B}toString(){return this.domStorage_.toString()}}/**
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
 */class pM{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(B,t){t==null?delete this.cache_[B]:this.cache_[B]=t}get(B){return Vt(this.cache_,B)?this.cache_[B]:null}remove(B){delete this.cache_[B]}}/**
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
 */const SE=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const B=window[e];return B.setItem("firebase:sentinel","cache"),B.removeItem("firebase:sentinel"),new hM(B)}}catch{}return new pM},jC=SE("localStorage"),Xf=SE("sessionStorage");/**
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
 */const er=new Ll("@firebase/database"),mM=function(){let e=1;return function(){return e++}}(),IE=function(e){const B=PN(e),t=new IN;t.update(B);const C=t.digest();return K1.encodeByteArray(C)},ys=function(...e){let B="";for(let t=0;t<e.length;t++){const C=e[t];Array.isArray(C)||C&&typeof C=="object"&&typeof C.length=="number"?B+=ys.apply(null,C):typeof C=="object"?B+=OB(C):B+=C,B+=" "}return B};let Bn=null,Em=!0;const gM=function(e,B){P(!B||e===!0||e===!1,"Can't turn on custom loggers persistently."),e===!0?(er.logLevel=iB.VERBOSE,Bn=er.log.bind(er),B&&Xf.set("logging_enabled",!0)):typeof e=="function"?Bn=e:(Bn=null,Xf.remove("logging_enabled"))},zB=function(...e){if(Em===!0&&(Em=!1,Bn===null&&Xf.get("logging_enabled")===!0&&gM(!0)),Bn){const B=ys.apply(null,e);Bn(B)}},Es=function(e){return function(...B){zB(e,...B)}},Zf=function(...e){const B="FIREBASE INTERNAL ERROR: "+ys(...e);er.error(B)},Gt=function(...e){const B=`FIREBASE FATAL ERROR: ${ys(...e)}`;throw er.error(B),new Error(B)},ve=function(...e){const B="FIREBASE WARNING: "+ys(...e);er.warn(B)},vM=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ve("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},bE=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},AM=function(e){if(document.readyState==="complete")e();else{let B=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}B||(B=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},hr="[MIN_NAME]",cn="[MAX_NAME]",Pr=function(e,B){if(e===B)return 0;if(e===hr||B===cn)return-1;if(B===hr||e===cn)return 1;{const t=Sm(e),C=Sm(B);return t!==null?C!==null?t-C===0?e.length-B.length:t-C:-1:C!==null?1:e<B?-1:1}},yM=function(e,B){return e===B?0:e<B?-1:1},Jr=function(e,B){if(B&&e in B)return B[e];throw new Error("Missing required key ("+e+") in object: "+OB(B))},sh=function(e){if(typeof e!="object"||e===null)return OB(e);const B=[];for(const C in e)B.push(C);B.sort();let t="{";for(let C=0;C<B.length;C++)C!==0&&(t+=","),t+=OB(B[C]),t+=":",t+=sh(e[B[C]]);return t+="}",t},wE=function(e,B){const t=e.length;if(t<=B)return[e];const C=[];for(let n=0;n<t;n+=B)n+B>t?C.push(e.substring(n,t)):C.push(e.substring(n,n+B));return C};function Ae(e,B){for(const t in e)e.hasOwnProperty(t)&&B(t,e[t])}const DE=function(e){P(!bE(e),"Invalid JSON number");const B=11,t=52,C=(1<<B-1)-1;let n,r,i,s,a;e===0?(r=0,i=0,n=1/e===-1/0?1:0):(n=e<0,e=Math.abs(e),e>=Math.pow(2,1-C)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),C),r=s+C,i=Math.round(e*Math.pow(2,t-s)-Math.pow(2,t))):(r=0,i=Math.round(e/Math.pow(2,1-C-t))));const o=[];for(a=t;a;a-=1)o.push(i%2?1:0),i=Math.floor(i/2);for(a=B;a;a-=1)o.push(r%2?1:0),r=Math.floor(r/2);o.push(n?1:0),o.reverse();const l=o.join("");let c="";for(a=0;a<64;a+=8){let u=parseInt(l.substr(a,8),2).toString(16);u.length===1&&(u="0"+u),c=c+u}return c.toLowerCase()},EM=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},SM=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function IM(e,B){let t="Unknown Error";e==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":e==="permission_denied"?t="Client doesn't have permission to access the desired data.":e==="unavailable"&&(t="The service is unavailable");const C=new Error(e+" at "+B._path.toString()+": "+t);return C.code=e.toUpperCase(),C}const bM=new RegExp("^-?(0*)\\d{1,10}$"),wM=-2147483648,DM=2147483647,Sm=function(e){if(bM.test(e)){const B=Number(e);if(B>=wM&&B<=DM)return B}return null},Rr=function(e){try{e()}catch(B){setTimeout(()=>{const t=B.stack||"";throw ve("Exception was thrown by user callback.",t),B},Math.floor(0))}},PM=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},hi=function(e,B){const t=setTimeout(e,B);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class RM{constructor(B,t){this.appName_=B,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(C=>this.appCheck=C)}getToken(B){return this.appCheck?this.appCheck.getToken(B):new Promise((t,C)=>{setTimeout(()=>{this.appCheck?this.getToken(B).then(t,C):t(null)},0)})}addTokenChangeListener(B){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(C=>C.addTokenListener(B))}notifyForInvalidToken(){ve(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class NM{constructor(B,t,C){this.appName_=B,this.firebaseOptions_=t,this.authProvider_=C,this.auth_=null,this.auth_=C.getImmediate({optional:!0}),this.auth_||C.onInit(n=>this.auth_=n)}getToken(B){return this.auth_?this.auth_.getToken(B).catch(t=>t&&t.code==="auth/token-not-initialized"?(zB("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,C)=>{setTimeout(()=>{this.auth_?this.getToken(B).then(t,C):t(null)},0)})}addTokenChangeListener(B){this.auth_?this.auth_.addAuthTokenListener(B):this.authProvider_.get().then(t=>t.addAuthTokenListener(B))}removeTokenChangeListener(B){this.authProvider_.get().then(t=>t.removeAuthTokenListener(B))}notifyForInvalidToken(){let B='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?B+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?B+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':B+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ve(B)}}class tr{constructor(B){this.accessToken=B}getToken(B){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(B){B(this.accessToken)}removeTokenChangeListener(B){}notifyForInvalidToken(){}}tr.OWNER="owner";/**
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
 */const ah="5",PE="v",RE="s",NE="r",FE="f",OE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,kE="ls",TE="p",qf="ac",ME="websocket",LE="long_polling";/**
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
 */class HE{constructor(B,t,C,n,r=!1,i="",s=!1,a=!1){this.secure=t,this.namespace=C,this.webSocketOnly=n,this.nodeAdmin=r,this.persistenceKey=i,this.includeNamespaceInQueryParams=s,this.isUsingEmulator=a,this._host=B.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=jC.get("host:"+B)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(B){B!==this.internalHost&&(this.internalHost=B,this.isCacheableHost()&&jC.set("host:"+this._host,this.internalHost))}toString(){let B=this.toURLString();return this.persistenceKey&&(B+="<"+this.persistenceKey+">"),B}toURLString(){const B=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${B}${this.host}/${t}`}}function FM(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function xE(e,B,t){P(typeof B=="string","typeof type must == string"),P(typeof t=="object","typeof params must == object");let C;if(B===ME)C=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(B===LE)C=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+B);FM(e)&&(t.ns=e.namespace);const n=[];return Ae(t,(r,i)=>{n.push(r+"="+i)}),C+n.join("&")}/**
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
 */class OM{constructor(){this.counters_={}}incrementCounter(B,t=1){Vt(this.counters_,B)||(this.counters_[B]=0),this.counters_[B]+=t}get(){return oN(this.counters_)}}/**
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
 */const nu={},ru={};function oh(e){const B=e.toString();return nu[B]||(nu[B]=new OM),nu[B]}function kM(e,B){const t=e.toString();return ru[t]||(ru[t]=B()),ru[t]}/**
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
 */class TM{constructor(B){this.onMessage_=B,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(B,t){this.closeAfterResponse=B,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(B,t){for(this.pendingResponses[B]=t;this.pendingResponses[this.currentResponseNum];){const C=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let n=0;n<C.length;++n)C[n]&&Rr(()=>{this.onMessage_(C[n])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Im="start",MM="close",LM="pLPCommand",HM="pRTLPCB",GE="id",KE="pw",UE="ser",xM="cb",GM="seg",KM="ts",UM="d",QM="dframe",QE=1870,JE=30,JM=QE-JE,VM=25e3,WM=3e4;class Jn{constructor(B,t,C,n,r,i,s){this.connId=B,this.repoInfo=t,this.applicationId=C,this.appCheckToken=n,this.authToken=r,this.transportSessionId=i,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Es(B),this.stats_=oh(t),this.urlFn=a=>(this.appCheckToken&&(a[qf]=this.appCheckToken),xE(t,LE,a))}open(B,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new TM(B),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(WM)),AM(()=>{if(this.isClosed_)return;this.scriptTagHolder=new lh((...r)=>{const[i,s,a,o,l]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,i===Im)this.id=s,this.password=a;else if(i===MM)s?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(s,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+i)},(...r)=>{const[i,s]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(i,s)},()=>{this.onClosed_()},this.urlFn);const C={};C[Im]="t",C[UE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(C[xM]=this.scriptTagHolder.uniqueCallbackIdentifier),C[PE]=ah,this.transportSessionId&&(C[RE]=this.transportSessionId),this.lastSessionId&&(C[kE]=this.lastSessionId),this.applicationId&&(C[TE]=this.applicationId),this.appCheckToken&&(C[qf]=this.appCheckToken),typeof location<"u"&&location.hostname&&OE.test(location.hostname)&&(C[NE]=FE);const n=this.urlFn(C);this.log_("Connecting via long-poll to "+n),this.scriptTagHolder.addTag(n,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Jn.forceAllow_=!0}static forceDisallow(){Jn.forceDisallow_=!0}static isAvailable(){return Jn.forceAllow_?!0:!Jn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!EM()&&!SM()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(B){const t=OB(B);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const C=ty(t),n=wE(C,JM);for(let r=0;r<n.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,n.length,n[r]),this.curSegmentNum++}addDisconnectPingFrame(B,t){this.myDisconnFrame=document.createElement("iframe");const C={};C[QM]="t",C[GE]=B,C[KE]=t,this.myDisconnFrame.src=this.urlFn(C),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(B){const t=OB(B).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class lh{constructor(B,t,C,n){this.onDisconnect=C,this.urlFn=n,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=mM(),window[LM+this.uniqueCallbackIdentifier]=B,window[HM+this.uniqueCallbackIdentifier]=t,this.myIFrame=lh.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const i="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(s){zB("frame writing exception"),s.stack&&zB(s.stack),zB(s)}}}static createIFrame_(){const B=document.createElement("iframe");if(B.style.display="none",document.body){document.body.appendChild(B);try{B.contentWindow.document||zB("No IE domain setting required")}catch{const C=document.domain;B.src="javascript:void((function(){document.open();document.domain='"+C+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return B.contentDocument?B.doc=B.contentDocument:B.contentWindow?B.doc=B.contentWindow.document:B.document&&(B.doc=B.document),B}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const B=this.onDisconnect;B&&(this.onDisconnect=null,B())}startLongPoll(B,t){for(this.myID=B,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const B={};B[GE]=this.myID,B[KE]=this.myPW,B[UE]=this.currentSerial;let t=this.urlFn(B),C="",n=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+JE+C.length<=QE;){const i=this.pendingSegs.shift();C=C+"&"+GM+n+"="+i.seg+"&"+KM+n+"="+i.ts+"&"+UM+n+"="+i.d,n++}return t=t+C,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(B,t,C){this.pendingSegs.push({seg:B,ts:t,d:C}),this.alive&&this.newRequest_()}addLongPollTag_(B,t){this.outstandingRequests.add(t);const C=()=>{this.outstandingRequests.delete(t),this.newRequest_()},n=setTimeout(C,Math.floor(VM)),r=()=>{clearTimeout(n),C()};this.addTag(B,r)}addTag(B,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const C=this.myIFrame.doc.createElement("script");C.type="text/javascript",C.async=!0,C.src=B,C.onload=C.onreadystatechange=function(){const n=C.readyState;(!n||n==="loaded"||n==="complete")&&(C.onload=C.onreadystatechange=null,C.parentNode&&C.parentNode.removeChild(C),t())},C.onerror=()=>{zB("Long-poll script failed to load: "+B),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(C)}catch{}},Math.floor(1))}}/**
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
 */const jM=16384,YM=45e3;let Jo=null;typeof MozWebSocket<"u"?Jo=MozWebSocket:typeof WebSocket<"u"&&(Jo=WebSocket);class Xe{constructor(B,t,C,n,r,i,s){this.connId=B,this.applicationId=C,this.appCheckToken=n,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Es(this.connId),this.stats_=oh(t),this.connURL=Xe.connectionURL_(t,i,s,n,C),this.nodeAdmin=t.nodeAdmin}static connectionURL_(B,t,C,n,r){const i={};return i[PE]=ah,typeof location<"u"&&location.hostname&&OE.test(location.hostname)&&(i[NE]=FE),t&&(i[RE]=t),C&&(i[kE]=C),n&&(i[qf]=n),r&&(i[TE]=r),xE(B,ME,i)}open(B,t){this.onDisconnect=t,this.onMessage=B,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,jC.set("previous_websocket_failure",!0);try{let C;oy(),this.mySock=new Jo(this.connURL,[],C)}catch(C){this.log_("Error instantiating WebSocket.");const n=C.message||C.data;n&&this.log_(n),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=C=>{this.handleIncomingFrame(C)},this.mySock.onerror=C=>{this.log_("WebSocket error.  Closing connection.");const n=C.message||C.data;n&&this.log_(n),this.onClosed_()}}start(){}static forceDisallow(){Xe.forceDisallow_=!0}static isAvailable(){let B=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,C=navigator.userAgent.match(t);C&&C.length>1&&parseFloat(C[1])<4.4&&(B=!0)}return!B&&Jo!==null&&!Xe.forceDisallow_}static previouslyFailed(){return jC.isInMemoryStorage||jC.get("previous_websocket_failure")===!0}markConnectionHealthy(){jC.remove("previous_websocket_failure")}appendFrame_(B){if(this.frames.push(B),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const C=Ki(t);this.onMessage(C)}}handleNewFrameCount_(B){this.totalFrames=B,this.frames=[]}extractFrameCount_(B){if(P(this.frames===null,"We already have a frame buffer"),B.length<=6){const t=Number(B);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),B}handleIncomingFrame(B){if(this.mySock===null)return;const t=B.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const C=this.extractFrameCount_(t);C!==null&&this.appendFrame_(C)}}send(B){this.resetKeepAlive();const t=OB(B);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const C=wE(t,jM);C.length>1&&this.sendString_(String(C.length));for(let n=0;n<C.length;n++)this.sendString_(C[n])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(YM))}sendString_(B){try{this.mySock.send(B)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Xe.responsesRequiredToBeHealthy=2;Xe.healthyTimeout=3e4;/**
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
 */class Wi{constructor(B){this.initTransports_(B)}static get ALL_TRANSPORTS(){return[Jn,Xe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(B){const t=Xe&&Xe.isAvailable();let C=t&&!Xe.previouslyFailed();if(B.webSocketOnly&&(t||ve("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),C=!0),C)this.transports_=[Xe];else{const n=this.transports_=[];for(const r of Wi.ALL_TRANSPORTS)r&&r.isAvailable()&&n.push(r);Wi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Wi.globalTransportInitialized_=!1;/**
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
 */const XM=6e4,ZM=5e3,qM=10*1024,zM=100*1024,iu="t",bm="d",_M="s",wm="r",$M="e",Dm="o",Pm="a",Rm="n",Nm="p",B6="h";class e6{constructor(B,t,C,n,r,i,s,a,o,l){this.id=B,this.repoInfo_=t,this.applicationId_=C,this.appCheckToken_=n,this.authToken_=r,this.onMessage_=i,this.onReady_=s,this.onDisconnect_=a,this.onKill_=o,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Es("c:"+this.id+":"),this.transportManager_=new Wi(t),this.log_("Connection created"),this.start_()}start_(){const B=this.transportManager_.initialTransport();this.conn_=new B(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=B.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),C=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,C)},Math.floor(0));const n=B.healthyTimeout||0;n>0&&(this.healthyTimeout_=hi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>zM?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>qM?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(n)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(B){return t=>{B===this.conn_?this.onConnectionLost_(t):B===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(B){return t=>{this.state_!==2&&(B===this.rx_?this.onPrimaryMessageReceived_(t):B===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(B){const t={t:"d",d:B};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(B){if(iu in B){const t=B[iu];t===Pm?this.upgradeIfSecondaryHealthy_():t===wm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Dm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(B){const t=Jr("t",B),C=Jr("d",B);if(t==="c")this.onSecondaryControl_(C);else if(t==="d")this.pendingDataMessages.push(C);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Nm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Pm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Rm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(B){const t=Jr("t",B),C=Jr("d",B);t==="c"?this.onControl_(C):t==="d"&&this.onDataMessage_(C)}onDataMessage_(B){this.onPrimaryResponse_(),this.onMessage_(B)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(B){const t=Jr(iu,B);if(bm in B){const C=B[bm];if(t===B6){const n=Object.assign({},C);this.repoInfo_.isUsingEmulator&&(n.h=this.repoInfo_.host),this.onHandshake_(n)}else if(t===Rm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let n=0;n<this.pendingDataMessages.length;++n)this.onDataMessage_(this.pendingDataMessages[n]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===_M?this.onConnectionShutdown_(C):t===wm?this.onReset_(C):t===$M?Zf("Server Error: "+C):t===Dm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Zf("Unknown control packet command: "+t)}}onHandshake_(B){const t=B.ts,C=B.v,n=B.h;this.sessionId=B.s,this.repoInfo_.host=n,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),ah!==C&&ve("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const B=this.transportManager_.upgradeTransport();B&&this.startUpgrade_(B)}startUpgrade_(B){this.secondaryConn_=new B(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=B.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),C=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,C),hi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(XM))}onReset_(B){this.log_("Reset packet received.  New host: "+B),this.repoInfo_.host=B,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(B,t){this.log_("Realtime connection established."),this.conn_=B,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):hi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ZM))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Nm,d:{}}}))}onSecondaryConnectionLost_(){const B=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===B||this.rx_===B)&&this.close()}onConnectionLost_(B){this.conn_=null,!B&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(jC.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(B){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(B),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(B){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(B)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class VE{put(B,t,C,n){}merge(B,t,C,n){}refreshAuthToken(B){}refreshAppCheckToken(B){}onDisconnectPut(B,t,C){}onDisconnectMerge(B,t,C){}onDisconnectCancel(B,t){}reportStats(B){}}/**
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
 */class WE{constructor(B){this.allowedEvents_=B,this.listeners_={},P(Array.isArray(B)&&B.length>0,"Requires a non-empty array")}trigger(B,...t){if(Array.isArray(this.listeners_[B])){const C=[...this.listeners_[B]];for(let n=0;n<C.length;n++)C[n].callback.apply(C[n].context,t)}}on(B,t,C){this.validateEventType_(B),this.listeners_[B]=this.listeners_[B]||[],this.listeners_[B].push({callback:t,context:C});const n=this.getInitialEvent(B);n&&t.apply(C,n)}off(B,t,C){this.validateEventType_(B);const n=this.listeners_[B]||[];for(let r=0;r<n.length;r++)if(n[r].callback===t&&(!C||C===n[r].context)){n.splice(r,1);return}}validateEventType_(B){P(this.allowedEvents_.find(t=>t===B),"Unknown event: "+B)}}/**
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
 */class Vo extends WE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Q1()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Vo}getInitialEvent(B){return P(B==="online","Unknown event type: "+B),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Fm=32,Om=768;class sB{constructor(B,t){if(t===void 0){this.pieces_=B.split("/");let C=0;for(let n=0;n<this.pieces_.length;n++)this.pieces_[n].length>0&&(this.pieces_[C]=this.pieces_[n],C++);this.pieces_.length=C,this.pieceNum_=0}else this.pieces_=B,this.pieceNum_=t}toString(){let B="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(B+="/"+this.pieces_[t]);return B||"/"}}function BB(){return new sB("")}function X(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function bC(e){return e.pieces_.length-e.pieceNum_}function aB(e){let B=e.pieceNum_;return B<e.pieces_.length&&B++,new sB(e.pieces_,B)}function jE(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function t6(e){let B="";for(let t=e.pieceNum_;t<e.pieces_.length;t++)e.pieces_[t]!==""&&(B+="/"+encodeURIComponent(String(e.pieces_[t])));return B||"/"}function YE(e,B=0){return e.pieces_.slice(e.pieceNum_+B)}function XE(e){if(e.pieceNum_>=e.pieces_.length)return null;const B=[];for(let t=e.pieceNum_;t<e.pieces_.length-1;t++)B.push(e.pieces_[t]);return new sB(B,0)}function kB(e,B){const t=[];for(let C=e.pieceNum_;C<e.pieces_.length;C++)t.push(e.pieces_[C]);if(B instanceof sB)for(let C=B.pieceNum_;C<B.pieces_.length;C++)t.push(B.pieces_[C]);else{const C=B.split("/");for(let n=0;n<C.length;n++)C[n].length>0&&t.push(C[n])}return new sB(t,0)}function Y(e){return e.pieceNum_>=e.pieces_.length}function ne(e,B){const t=X(e),C=X(B);if(t===null)return B;if(t===C)return ne(aB(e),aB(B));throw new Error("INTERNAL ERROR: innerPath ("+B+") is not within outerPath ("+e+")")}function ZE(e,B){if(bC(e)!==bC(B))return!1;for(let t=e.pieceNum_,C=B.pieceNum_;t<=e.pieces_.length;t++,C++)if(e.pieces_[t]!==B.pieces_[C])return!1;return!0}function Ze(e,B){let t=e.pieceNum_,C=B.pieceNum_;if(bC(e)>bC(B))return!1;for(;t<e.pieces_.length;){if(e.pieces_[t]!==B.pieces_[C])return!1;++t,++C}return!0}class C6{constructor(B,t){this.errorPrefix_=t,this.parts_=YE(B,0),this.byteLength_=Math.max(1,this.parts_.length);for(let C=0;C<this.parts_.length;C++)this.byteLength_+=Ml(this.parts_[C]);qE(this)}}function n6(e,B){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(B),e.byteLength_+=Ml(B),qE(e)}function r6(e){const B=e.parts_.pop();e.byteLength_-=Ml(B),e.parts_.length>0&&(e.byteLength_-=1)}function qE(e){if(e.byteLength_>Om)throw new Error(e.errorPrefix_+"has a key path longer than "+Om+" bytes ("+e.byteLength_+").");if(e.parts_.length>Fm)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Fm+") or object contains a cycle "+GC(e))}function GC(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
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
 */class ch extends WE{constructor(){super(["visible"]);let B,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",B="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",B="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",B="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",B="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const C=!document[B];C!==this.visible_&&(this.visible_=C,this.trigger("visible",C))},!1)}static getInstance(){return new ch}getInitialEvent(B){return P(B==="visible","Unknown event type: "+B),[this.visible_]}}/**
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
 */const Vr=1e3,i6=60*5*1e3,km=30*1e3,s6=1.3,a6=3e4,o6="server_kill",Tm=3;class Ot extends VE{constructor(B,t,C,n,r,i,s,a){if(super(),this.repoInfo_=B,this.applicationId_=t,this.onDataUpdate_=C,this.onConnectStatus_=n,this.onServerInfoUpdate_=r,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.authOverride_=a,this.id=Ot.nextPersistentConnectionId_++,this.log_=Es("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Vr,this.maxReconnectDelay_=i6,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!oy())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ch.getInstance().on("visible",this.onVisible_,this),B.host.indexOf("fblocal")===-1&&Vo.getInstance().on("online",this.onOnline_,this)}sendRequest(B,t,C){const n=++this.requestNumber_,r={r:n,a:B,b:t};this.log_(OB(r)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),C&&(this.requestCBHash_[n]=C)}get(B){this.initConnection_();const t=new Tl,n={action:"g",request:{p:B._path.toString(),q:B._queryObject},onComplete:i=>{const s=i.d;i.s==="ok"?t.resolve(s):t.reject(s)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(B,t,C,n){this.initConnection_();const r=B._queryIdentifier,i=B._path.toString();this.log_("Listen called for "+i+" "+r),this.listens.has(i)||this.listens.set(i,new Map),P(B._queryParams.isDefault()||!B._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(i).has(r),"listen() called twice for same path/queryId.");const s={onComplete:n,hashFn:t,query:B,tag:C};this.listens.get(i).set(r,s),this.connected_&&this.sendListen_(s)}sendGet_(B){const t=this.outstandingGets_[B];this.sendRequest("g",t.request,C=>{delete this.outstandingGets_[B],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(C)})}sendListen_(B){const t=B.query,C=t._path.toString(),n=t._queryIdentifier;this.log_("Listen on "+C+" for "+n);const r={p:C},i="q";B.tag&&(r.q=t._queryObject,r.t=B.tag),r.h=B.hashFn(),this.sendRequest(i,r,s=>{const a=s.d,o=s.s;Ot.warnOnListenWarnings_(a,t),(this.listens.get(C)&&this.listens.get(C).get(n))===B&&(this.log_("listen response",s),o!=="ok"&&this.removeListen_(C,n),B.onComplete&&B.onComplete(o,a))})}static warnOnListenWarnings_(B,t){if(B&&typeof B=="object"&&Vt(B,"w")){const C=fr(B,"w");if(Array.isArray(C)&&~C.indexOf("no_index")){const n='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ve(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${n} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(B){this.authToken_=B,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(B)}reduceReconnectDelayIfAdminCredential_(B){(B&&B.length===40||SN(B))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=km)}refreshAppCheckToken(B){this.appCheckToken_=B,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const B=this.authToken_,t=EN(B)?"auth":"gauth",C={cred:B};this.authOverride_===null?C.noauth=!0:typeof this.authOverride_=="object"&&(C.authvar=this.authOverride_),this.sendRequest(t,C,n=>{const r=n.s,i=n.d||"error";this.authToken_===B&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,i))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},B=>{const t=B.s,C=B.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,C)})}unlisten(B,t){const C=B._path.toString(),n=B._queryIdentifier;this.log_("Unlisten called for "+C+" "+n),P(B._queryParams.isDefault()||!B._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(C,n)&&this.connected_&&this.sendUnlisten_(C,n,B._queryObject,t)}sendUnlisten_(B,t,C,n){this.log_("Unlisten on "+B+" for "+t);const r={p:B},i="n";n&&(r.q=C,r.t=n),this.sendRequest(i,r)}onDisconnectPut(B,t,C){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",B,t,C):this.onDisconnectRequestQueue_.push({pathString:B,action:"o",data:t,onComplete:C})}onDisconnectMerge(B,t,C){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",B,t,C):this.onDisconnectRequestQueue_.push({pathString:B,action:"om",data:t,onComplete:C})}onDisconnectCancel(B,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",B,null,t):this.onDisconnectRequestQueue_.push({pathString:B,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(B,t,C,n){const r={p:t,d:C};this.log_("onDisconnect "+B,r),this.sendRequest(B,r,i=>{n&&setTimeout(()=>{n(i.s,i.d)},Math.floor(0))})}put(B,t,C,n){this.putInternal("p",B,t,C,n)}merge(B,t,C,n){this.putInternal("m",B,t,C,n)}putInternal(B,t,C,n,r){this.initConnection_();const i={p:t,d:C};r!==void 0&&(i.h=r),this.outstandingPuts_.push({action:B,request:i,onComplete:n}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+t)}sendPut_(B){const t=this.outstandingPuts_[B].action,C=this.outstandingPuts_[B].request,n=this.outstandingPuts_[B].onComplete;this.outstandingPuts_[B].queued=this.connected_,this.sendRequest(t,C,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[B],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),n&&n(r.s,r.d)})}reportStats(B){if(this.connected_){const t={c:B};this.log_("reportStats",t),this.sendRequest("s",t,C=>{if(C.s!=="ok"){const r=C.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(B){if("r"in B){this.log_("from server: "+OB(B));const t=B.r,C=this.requestCBHash_[t];C&&(delete this.requestCBHash_[t],C(B.b))}else{if("error"in B)throw"A server-side error has occurred: "+B.error;"a"in B&&this.onDataPush_(B.a,B.b)}}onDataPush_(B,t){this.log_("handleServerMessage",B,t),B==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):B==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):B==="c"?this.onListenRevoked_(t.p,t.q):B==="ac"?this.onAuthRevoked_(t.s,t.d):B==="apc"?this.onAppCheckRevoked_(t.s,t.d):B==="sd"?this.onSecurityDebugPacket_(t):Zf("Unrecognized action received from server: "+OB(B)+`
Are you using the latest client?`)}onReady_(B,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(B),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(B){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(B))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(B){B&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Vr,this.realtime_||this.scheduleConnect_(0)),this.visible_=B}onOnline_(B){B?(this.log_("Browser went online."),this.reconnectDelay_=Vr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>a6&&(this.reconnectDelay_=Vr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const B=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-B);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*s6)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const B=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),C=this.onRealtimeDisconnect_.bind(this),n=this.id+":"+Ot.nextConnectionId_++,r=this.lastSessionId;let i=!1,s=null;const a=function(){s?s.close():(i=!0,C())},o=function(c){P(s,"sendRequest call when we're not connected not allowed."),s.sendRequest(c)};this.realtime_={close:a,sendRequest:o};const l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,u]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);i?zB("getToken() completed but was canceled"):(zB("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=u&&u.token,s=new e6(n,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,B,t,C,m=>{ve(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(o6)},r))}catch(c){this.log_("Failed to get token: "+c),i||(this.repoInfo_.nodeAdmin&&ve(c),a())}}}interrupt(B){zB("Interrupting connection for reason: "+B),this.interruptReasons_[B]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(B){zB("Resuming connection for reason: "+B),delete this.interruptReasons_[B],Hf(this.interruptReasons_)&&(this.reconnectDelay_=Vr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(B){const t=B-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let B=0;B<this.outstandingPuts_.length;B++){const t=this.outstandingPuts_[B];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[B],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(B,t){let C;t?C=t.map(r=>sh(r)).join("$"):C="default";const n=this.removeListen_(B,C);n&&n.onComplete&&n.onComplete("permission_denied")}removeListen_(B,t){const C=new sB(B).toString();let n;if(this.listens.has(C)){const r=this.listens.get(C);n=r.get(t),r.delete(t),r.size===0&&this.listens.delete(C)}else n=void 0;return n}onAuthRevoked_(B,t){zB("Auth token revoked: "+B+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(B==="invalid_token"||B==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Tm&&(this.reconnectDelay_=km,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(B,t){zB("App check token revoked: "+B+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(B==="invalid_token"||B==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Tm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(B){this.securityDebugCallback_?this.securityDebugCallback_(B):"msg"in B&&console.log("FIREBASE: "+B.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const B of this.listens.values())for(const t of B.values())this.sendListen_(t);for(let B=0;B<this.outstandingPuts_.length;B++)this.outstandingPuts_[B]&&this.sendPut_(B);for(;this.onDisconnectRequestQueue_.length;){const B=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(B.action,B.pathString,B.data,B.onComplete)}for(let B=0;B<this.outstandingGets_.length;B++)this.outstandingGets_[B]&&this.sendGet_(B)}sendConnectStats_(){const B={};let t="js";B["sdk."+t+"."+EE.replace(/\./g,"-")]=1,Q1()?B["framework.cordova"]=1:ay()&&(B["framework.reactnative"]=1),this.reportStats(B)}shouldReconnect_(){const B=Vo.getInstance().currentlyOnline();return Hf(this.interruptReasons_)&&B}}Ot.nextPersistentConnectionId_=0;Ot.nextConnectionId_=0;/**
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
 */class j{constructor(B,t){this.name=B,this.node=t}static Wrap(B,t){return new j(B,t)}}/**
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
 */class Jl{getCompare(){return this.compare.bind(this)}indexedValueChanged(B,t){const C=new j(hr,B),n=new j(hr,t);return this.compare(C,n)!==0}minPost(){return j.MIN}}/**
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
 */let oa;class zE extends Jl{static get __EMPTY_NODE(){return oa}static set __EMPTY_NODE(B){oa=B}compare(B,t){return Pr(B.name,t.name)}isDefinedOn(B){throw br("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(B,t){return!1}minPost(){return j.MIN}maxPost(){return new j(cn,oa)}makePost(B,t){return P(typeof B=="string","KeyIndex indexValue must always be a string."),new j(B,oa)}toString(){return".key"}}const Cr=new zE;/**
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
 */class la{constructor(B,t,C,n,r=null){this.isReverse_=n,this.resultGenerator_=r,this.nodeStack_=[];let i=1;for(;!B.isEmpty();)if(B=B,i=t?C(B.key,t):1,n&&(i*=-1),i<0)this.isReverse_?B=B.left:B=B.right;else if(i===0){this.nodeStack_.push(B);break}else this.nodeStack_.push(B),this.isReverse_?B=B.right:B=B.left}getNext(){if(this.nodeStack_.length===0)return null;let B=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(B.key,B.value):t={key:B.key,value:B.value},this.isReverse_)for(B=B.left;!B.isEmpty();)this.nodeStack_.push(B),B=B.right;else for(B=B.right;!B.isEmpty();)this.nodeStack_.push(B),B=B.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const B=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(B.key,B.value):{key:B.key,value:B.value}}}class GB{constructor(B,t,C,n,r){this.key=B,this.value=t,this.color=C??GB.RED,this.left=n??de.EMPTY_NODE,this.right=r??de.EMPTY_NODE}copy(B,t,C,n,r){return new GB(B??this.key,t??this.value,C??this.color,n??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(B){return this.left.inorderTraversal(B)||!!B(this.key,this.value)||this.right.inorderTraversal(B)}reverseTraversal(B){return this.right.reverseTraversal(B)||B(this.key,this.value)||this.left.reverseTraversal(B)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(B,t,C){let n=this;const r=C(B,n.key);return r<0?n=n.copy(null,null,null,n.left.insert(B,t,C),null):r===0?n=n.copy(null,t,null,null,null):n=n.copy(null,null,null,null,n.right.insert(B,t,C)),n.fixUp_()}removeMin_(){if(this.left.isEmpty())return de.EMPTY_NODE;let B=this;return!B.left.isRed_()&&!B.left.left.isRed_()&&(B=B.moveRedLeft_()),B=B.copy(null,null,null,B.left.removeMin_(),null),B.fixUp_()}remove(B,t){let C,n;if(C=this,t(B,C.key)<0)!C.left.isEmpty()&&!C.left.isRed_()&&!C.left.left.isRed_()&&(C=C.moveRedLeft_()),C=C.copy(null,null,null,C.left.remove(B,t),null);else{if(C.left.isRed_()&&(C=C.rotateRight_()),!C.right.isEmpty()&&!C.right.isRed_()&&!C.right.left.isRed_()&&(C=C.moveRedRight_()),t(B,C.key)===0){if(C.right.isEmpty())return de.EMPTY_NODE;n=C.right.min_(),C=C.copy(n.key,n.value,null,null,C.right.removeMin_())}C=C.copy(null,null,null,null,C.right.remove(B,t))}return C.fixUp_()}isRed_(){return this.color}fixUp_(){let B=this;return B.right.isRed_()&&!B.left.isRed_()&&(B=B.rotateLeft_()),B.left.isRed_()&&B.left.left.isRed_()&&(B=B.rotateRight_()),B.left.isRed_()&&B.right.isRed_()&&(B=B.colorFlip_()),B}moveRedLeft_(){let B=this.colorFlip_();return B.right.left.isRed_()&&(B=B.copy(null,null,null,null,B.right.rotateRight_()),B=B.rotateLeft_(),B=B.colorFlip_()),B}moveRedRight_(){let B=this.colorFlip_();return B.left.left.isRed_()&&(B=B.rotateRight_(),B=B.colorFlip_()),B}rotateLeft_(){const B=this.copy(null,null,GB.RED,null,this.right.left);return this.right.copy(null,null,this.color,B,null)}rotateRight_(){const B=this.copy(null,null,GB.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,B)}colorFlip_(){const B=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,B,t)}checkMaxDepth_(){const B=this.check_();return Math.pow(2,B)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const B=this.left.check_();if(B!==this.right.check_())throw new Error("Black depths differ");return B+(this.isRed_()?0:1)}}GB.RED=!0;GB.BLACK=!1;class l6{copy(B,t,C,n,r){return this}insert(B,t,C){return new GB(B,t,null)}remove(B,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(B){return!1}reverseTraversal(B){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class de{constructor(B,t=de.EMPTY_NODE){this.comparator_=B,this.root_=t}insert(B,t){return new de(this.comparator_,this.root_.insert(B,t,this.comparator_).copy(null,null,GB.BLACK,null,null))}remove(B){return new de(this.comparator_,this.root_.remove(B,this.comparator_).copy(null,null,GB.BLACK,null,null))}get(B){let t,C=this.root_;for(;!C.isEmpty();){if(t=this.comparator_(B,C.key),t===0)return C.value;t<0?C=C.left:t>0&&(C=C.right)}return null}getPredecessorKey(B){let t,C=this.root_,n=null;for(;!C.isEmpty();)if(t=this.comparator_(B,C.key),t===0){if(C.left.isEmpty())return n?n.key:null;for(C=C.left;!C.right.isEmpty();)C=C.right;return C.key}else t<0?C=C.left:t>0&&(n=C,C=C.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(B){return this.root_.inorderTraversal(B)}reverseTraversal(B){return this.root_.reverseTraversal(B)}getIterator(B){return new la(this.root_,null,this.comparator_,!1,B)}getIteratorFrom(B,t){return new la(this.root_,B,this.comparator_,!1,t)}getReverseIteratorFrom(B,t){return new la(this.root_,B,this.comparator_,!0,t)}getReverseIterator(B){return new la(this.root_,null,this.comparator_,!0,B)}}de.EMPTY_NODE=new l6;/**
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
 */function c6(e,B){return Pr(e.name,B.name)}function uh(e,B){return Pr(e,B)}/**
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
 */let zf;function u6(e){zf=e}const _E=function(e){return typeof e=="number"?"number:"+DE(e):"string:"+e},$E=function(e){if(e.isLeafNode()){const B=e.val();P(typeof B=="string"||typeof B=="number"||typeof B=="object"&&Vt(B,".sv"),"Priority must be a string or number.")}else P(e===zf||e.isEmpty(),"priority of unexpected type.");P(e===zf||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Mm;class HB{constructor(B,t=HB.__childrenNodeConstructor.EMPTY_NODE){this.value_=B,this.priorityNode_=t,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),$E(this.priorityNode_)}static set __childrenNodeConstructor(B){Mm=B}static get __childrenNodeConstructor(){return Mm}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(B){return new HB(this.value_,B)}getImmediateChild(B){return B===".priority"?this.priorityNode_:HB.__childrenNodeConstructor.EMPTY_NODE}getChild(B){return Y(B)?this:X(B)===".priority"?this.priorityNode_:HB.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(B,t){return null}updateImmediateChild(B,t){return B===".priority"?this.updatePriority(t):t.isEmpty()&&B!==".priority"?this:HB.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(B,t).updatePriority(this.priorityNode_)}updateChild(B,t){const C=X(B);return C===null?t:t.isEmpty()&&C!==".priority"?this:(P(C!==".priority"||bC(B)===1,".priority must be the last token in a path"),this.updateImmediateChild(C,HB.__childrenNodeConstructor.EMPTY_NODE.updateChild(aB(B),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(B,t){return!1}val(B){return B&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let B="";this.priorityNode_.isEmpty()||(B+="priority:"+_E(this.priorityNode_.val())+":");const t=typeof this.value_;B+=t+":",t==="number"?B+=DE(this.value_):B+=this.value_,this.lazyHash_=IE(B)}return this.lazyHash_}getValue(){return this.value_}compareTo(B){return B===HB.__childrenNodeConstructor.EMPTY_NODE?1:B instanceof HB.__childrenNodeConstructor?-1:(P(B.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(B))}compareToLeafNode_(B){const t=typeof B.value_,C=typeof this.value_,n=HB.VALUE_TYPE_ORDER.indexOf(t),r=HB.VALUE_TYPE_ORDER.indexOf(C);return P(n>=0,"Unknown leaf type: "+t),P(r>=0,"Unknown leaf type: "+C),n===r?C==="object"?0:this.value_<B.value_?-1:this.value_===B.value_?0:1:r-n}withIndex(){return this}isIndexed(){return!0}equals(B){if(B===this)return!0;if(B.isLeafNode()){const t=B;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}HB.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let BS,eS;function f6(e){BS=e}function d6(e){eS=e}class h6 extends Jl{compare(B,t){const C=B.node.getPriority(),n=t.node.getPriority(),r=C.compareTo(n);return r===0?Pr(B.name,t.name):r}isDefinedOn(B){return!B.getPriority().isEmpty()}indexedValueChanged(B,t){return!B.getPriority().equals(t.getPriority())}minPost(){return j.MIN}maxPost(){return new j(cn,new HB("[PRIORITY-POST]",eS))}makePost(B,t){const C=BS(B);return new j(t,new HB("[PRIORITY-POST]",C))}toString(){return".priority"}}const bB=new h6;/**
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
 */const p6=Math.log(2);class m6{constructor(B){const t=r=>parseInt(Math.log(r)/p6,10),C=r=>parseInt(Array(r+1).join("1"),2);this.count=t(B+1),this.current_=this.count-1;const n=C(this.count);this.bits_=B+1&n}nextBitIsOne(){const B=!(this.bits_&1<<this.current_);return this.current_--,B}}const Wo=function(e,B,t,C){e.sort(B);const n=function(a,o){const l=o-a;let c,u;if(l===0)return null;if(l===1)return c=e[a],u=t?t(c):c,new GB(u,c.node,GB.BLACK,null,null);{const m=parseInt(l/2,10)+a,f=n(a,m),g=n(m+1,o);return c=e[m],u=t?t(c):c,new GB(u,c.node,GB.BLACK,f,g)}},r=function(a){let o=null,l=null,c=e.length;const u=function(f,g){const p=c-f,d=c;c-=f;const h=n(p+1,d),v=e[p],A=t?t(v):v;m(new GB(A,v.node,g,null,h))},m=function(f){o?(o.left=f,o=f):(l=f,o=f)};for(let f=0;f<a.count;++f){const g=a.nextBitIsOne(),p=Math.pow(2,a.count-(f+1));g?u(p,GB.BLACK):(u(p,GB.BLACK),u(p,GB.RED))}return l},i=new m6(e.length),s=r(i);return new de(C||B,s)};/**
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
 */let su;const wn={};class Nt{constructor(B,t){this.indexes_=B,this.indexSet_=t}static get Default(){return P(wn&&bB,"ChildrenNode.ts has not been loaded"),su=su||new Nt({".priority":wn},{".priority":bB}),su}get(B){const t=fr(this.indexes_,B);if(!t)throw new Error("No index defined for "+B);return t instanceof de?t:null}hasIndex(B){return Vt(this.indexSet_,B.toString())}addIndex(B,t){P(B!==Cr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const C=[];let n=!1;const r=t.getIterator(j.Wrap);let i=r.getNext();for(;i;)n=n||B.isDefinedOn(i.node),C.push(i),i=r.getNext();let s;n?s=Wo(C,B.getCompare()):s=wn;const a=B.toString(),o=Object.assign({},this.indexSet_);o[a]=B;const l=Object.assign({},this.indexes_);return l[a]=s,new Nt(l,o)}addToIndexes(B,t){const C=To(this.indexes_,(n,r)=>{const i=fr(this.indexSet_,r);if(P(i,"Missing index implementation for "+r),n===wn)if(i.isDefinedOn(B.node)){const s=[],a=t.getIterator(j.Wrap);let o=a.getNext();for(;o;)o.name!==B.name&&s.push(o),o=a.getNext();return s.push(B),Wo(s,i.getCompare())}else return wn;else{const s=t.get(B.name);let a=n;return s&&(a=a.remove(new j(B.name,s))),a.insert(B,B.node)}});return new Nt(C,this.indexSet_)}removeFromIndexes(B,t){const C=To(this.indexes_,n=>{if(n===wn)return n;{const r=t.get(B.name);return r?n.remove(new j(B.name,r)):n}});return new Nt(C,this.indexSet_)}}/**
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
 */let Wr;class K{constructor(B,t,C){this.children_=B,this.priorityNode_=t,this.indexMap_=C,this.lazyHash_=null,this.priorityNode_&&$E(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Wr||(Wr=new K(new de(uh),null,Nt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Wr}updatePriority(B){return this.children_.isEmpty()?this:new K(this.children_,B,this.indexMap_)}getImmediateChild(B){if(B===".priority")return this.getPriority();{const t=this.children_.get(B);return t===null?Wr:t}}getChild(B){const t=X(B);return t===null?this:this.getImmediateChild(t).getChild(aB(B))}hasChild(B){return this.children_.get(B)!==null}updateImmediateChild(B,t){if(P(t,"We should always be passing snapshot nodes"),B===".priority")return this.updatePriority(t);{const C=new j(B,t);let n,r;t.isEmpty()?(n=this.children_.remove(B),r=this.indexMap_.removeFromIndexes(C,this.children_)):(n=this.children_.insert(B,t),r=this.indexMap_.addToIndexes(C,this.children_));const i=n.isEmpty()?Wr:this.priorityNode_;return new K(n,i,r)}}updateChild(B,t){const C=X(B);if(C===null)return t;{P(X(B)!==".priority"||bC(B)===1,".priority must be the last token in a path");const n=this.getImmediateChild(C).updateChild(aB(B),t);return this.updateImmediateChild(C,n)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(B){if(this.isEmpty())return null;const t={};let C=0,n=0,r=!0;if(this.forEachChild(bB,(i,s)=>{t[i]=s.val(B),C++,r&&K.INTEGER_REGEXP_.test(i)?n=Math.max(n,Number(i)):r=!1}),!B&&r&&n<2*C){const i=[];for(const s in t)i[s]=t[s];return i}else return B&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let B="";this.getPriority().isEmpty()||(B+="priority:"+_E(this.getPriority().val())+":"),this.forEachChild(bB,(t,C)=>{const n=C.hash();n!==""&&(B+=":"+t+":"+n)}),this.lazyHash_=B===""?"":IE(B)}return this.lazyHash_}getPredecessorChildName(B,t,C){const n=this.resolveIndex_(C);if(n){const r=n.getPredecessorKey(new j(B,t));return r?r.name:null}else return this.children_.getPredecessorKey(B)}getFirstChildName(B){const t=this.resolveIndex_(B);if(t){const C=t.minKey();return C&&C.name}else return this.children_.minKey()}getFirstChild(B){const t=this.getFirstChildName(B);return t?new j(t,this.children_.get(t)):null}getLastChildName(B){const t=this.resolveIndex_(B);if(t){const C=t.maxKey();return C&&C.name}else return this.children_.maxKey()}getLastChild(B){const t=this.getLastChildName(B);return t?new j(t,this.children_.get(t)):null}forEachChild(B,t){const C=this.resolveIndex_(B);return C?C.inorderTraversal(n=>t(n.name,n.node)):this.children_.inorderTraversal(t)}getIterator(B){return this.getIteratorFrom(B.minPost(),B)}getIteratorFrom(B,t){const C=this.resolveIndex_(t);if(C)return C.getIteratorFrom(B,n=>n);{const n=this.children_.getIteratorFrom(B.name,j.Wrap);let r=n.peek();for(;r!=null&&t.compare(r,B)<0;)n.getNext(),r=n.peek();return n}}getReverseIterator(B){return this.getReverseIteratorFrom(B.maxPost(),B)}getReverseIteratorFrom(B,t){const C=this.resolveIndex_(t);if(C)return C.getReverseIteratorFrom(B,n=>n);{const n=this.children_.getReverseIteratorFrom(B.name,j.Wrap);let r=n.peek();for(;r!=null&&t.compare(r,B)>0;)n.getNext(),r=n.peek();return n}}compareTo(B){return this.isEmpty()?B.isEmpty()?0:-1:B.isLeafNode()||B.isEmpty()?1:B===Ss?-1:0}withIndex(B){if(B===Cr||this.indexMap_.hasIndex(B))return this;{const t=this.indexMap_.addIndex(B,this.children_);return new K(this.children_,this.priorityNode_,t)}}isIndexed(B){return B===Cr||this.indexMap_.hasIndex(B)}equals(B){if(B===this)return!0;if(B.isLeafNode())return!1;{const t=B;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const C=this.getIterator(bB),n=t.getIterator(bB);let r=C.getNext(),i=n.getNext();for(;r&&i;){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=C.getNext(),i=n.getNext()}return r===null&&i===null}else return!1;else return!1}}resolveIndex_(B){return B===Cr?null:this.indexMap_.get(B.toString())}}K.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class g6 extends K{constructor(){super(new de(uh),K.EMPTY_NODE,Nt.Default)}compareTo(B){return B===this?0:1}equals(B){return B===this}getPriority(){return this}getImmediateChild(B){return K.EMPTY_NODE}isEmpty(){return!1}}const Ss=new g6;Object.defineProperties(j,{MIN:{value:new j(hr,K.EMPTY_NODE)},MAX:{value:new j(cn,Ss)}});zE.__EMPTY_NODE=K.EMPTY_NODE;HB.__childrenNodeConstructor=K;u6(Ss);d6(Ss);/**
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
 */const v6=!0;function KB(e,B=null){if(e===null)return K.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(B=e[".priority"]),P(B===null||typeof B=="string"||typeof B=="number"||typeof B=="object"&&".sv"in B,"Invalid priority type found: "+typeof B),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const t=e;return new HB(t,KB(B))}if(!(e instanceof Array)&&v6){const t=[];let C=!1;if(Ae(e,(i,s)=>{if(i.substring(0,1)!=="."){const a=KB(s);a.isEmpty()||(C=C||!a.getPriority().isEmpty(),t.push(new j(i,a)))}}),t.length===0)return K.EMPTY_NODE;const r=Wo(t,c6,i=>i.name,uh);if(C){const i=Wo(t,bB.getCompare());return new K(r,KB(B),new Nt({".priority":i},{".priority":bB}))}else return new K(r,KB(B),Nt.Default)}else{let t=K.EMPTY_NODE;return Ae(e,(C,n)=>{if(Vt(e,C)&&C.substring(0,1)!=="."){const r=KB(n);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(C,r))}}),t.updatePriority(KB(B))}}f6(KB);/**
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
 */class A6 extends Jl{constructor(B){super(),this.indexPath_=B,P(!Y(B)&&X(B)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(B){return B.getChild(this.indexPath_)}isDefinedOn(B){return!B.getChild(this.indexPath_).isEmpty()}compare(B,t){const C=this.extractChild(B.node),n=this.extractChild(t.node),r=C.compareTo(n);return r===0?Pr(B.name,t.name):r}makePost(B,t){const C=KB(B),n=K.EMPTY_NODE.updateChild(this.indexPath_,C);return new j(t,n)}maxPost(){const B=K.EMPTY_NODE.updateChild(this.indexPath_,Ss);return new j(cn,B)}toString(){return YE(this.indexPath_,0).join("/")}}/**
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
 */class y6 extends Jl{compare(B,t){const C=B.node.compareTo(t.node);return C===0?Pr(B.name,t.name):C}isDefinedOn(B){return!0}indexedValueChanged(B,t){return!B.equals(t)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(B,t){const C=KB(B);return new j(t,C)}toString(){return".value"}}const E6=new y6;/**
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
 */function tS(e){return{type:"value",snapshotNode:e}}function pr(e,B){return{type:"child_added",snapshotNode:B,childName:e}}function ji(e,B){return{type:"child_removed",snapshotNode:B,childName:e}}function Yi(e,B,t){return{type:"child_changed",snapshotNode:B,childName:e,oldSnap:t}}function S6(e,B){return{type:"child_moved",snapshotNode:B,childName:e}}/**
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
 */class fh{constructor(B){this.index_=B}updateChild(B,t,C,n,r,i){P(B.isIndexed(this.index_),"A node must be indexed if only a child is updated");const s=B.getImmediateChild(t);return s.getChild(n).equals(C.getChild(n))&&s.isEmpty()===C.isEmpty()||(i!=null&&(C.isEmpty()?B.hasChild(t)?i.trackChildChange(ji(t,s)):P(B.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):s.isEmpty()?i.trackChildChange(pr(t,C)):i.trackChildChange(Yi(t,C,s))),B.isLeafNode()&&C.isEmpty())?B:B.updateImmediateChild(t,C).withIndex(this.index_)}updateFullNode(B,t,C){return C!=null&&(B.isLeafNode()||B.forEachChild(bB,(n,r)=>{t.hasChild(n)||C.trackChildChange(ji(n,r))}),t.isLeafNode()||t.forEachChild(bB,(n,r)=>{if(B.hasChild(n)){const i=B.getImmediateChild(n);i.equals(r)||C.trackChildChange(Yi(n,r,i))}else C.trackChildChange(pr(n,r))})),t.withIndex(this.index_)}updatePriority(B,t){return B.isEmpty()?K.EMPTY_NODE:B.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Xi{constructor(B){this.indexedFilter_=new fh(B.getIndex()),this.index_=B.getIndex(),this.startPost_=Xi.getStartPost_(B),this.endPost_=Xi.getEndPost_(B),this.startIsInclusive_=!B.startAfterSet_,this.endIsInclusive_=!B.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(B){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),B)<=0:this.index_.compare(this.getStartPost(),B)<0,C=this.endIsInclusive_?this.index_.compare(B,this.getEndPost())<=0:this.index_.compare(B,this.getEndPost())<0;return t&&C}updateChild(B,t,C,n,r,i){return this.matches(new j(t,C))||(C=K.EMPTY_NODE),this.indexedFilter_.updateChild(B,t,C,n,r,i)}updateFullNode(B,t,C){t.isLeafNode()&&(t=K.EMPTY_NODE);let n=t.withIndex(this.index_);n=n.updatePriority(K.EMPTY_NODE);const r=this;return t.forEachChild(bB,(i,s)=>{r.matches(new j(i,s))||(n=n.updateImmediateChild(i,K.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(B,n,C)}updatePriority(B,t){return B}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(B){if(B.hasStart()){const t=B.getIndexStartName();return B.getIndex().makePost(B.getIndexStartValue(),t)}else return B.getIndex().minPost()}static getEndPost_(B){if(B.hasEnd()){const t=B.getIndexEndName();return B.getIndex().makePost(B.getIndexEndValue(),t)}else return B.getIndex().maxPost()}}/**
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
 */class I6{constructor(B){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const C=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?C<=0:C<0},this.withinEndPost=t=>{const C=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?C<=0:C<0},this.rangedFilter_=new Xi(B),this.index_=B.getIndex(),this.limit_=B.getLimit(),this.reverse_=!B.isViewFromLeft(),this.startIsInclusive_=!B.startAfterSet_,this.endIsInclusive_=!B.endBeforeSet_}updateChild(B,t,C,n,r,i){return this.rangedFilter_.matches(new j(t,C))||(C=K.EMPTY_NODE),B.getImmediateChild(t).equals(C)?B:B.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(B,t,C,n,r,i):this.fullLimitUpdateChild_(B,t,C,r,i)}updateFullNode(B,t,C){let n;if(t.isLeafNode()||t.isEmpty())n=K.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){n=K.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let i=0;for(;r.hasNext()&&i<this.limit_;){const s=r.getNext();if(this.withinDirectionalStart(s))if(this.withinDirectionalEnd(s))n=n.updateImmediateChild(s.name,s.node),i++;else break;else continue}}else{n=t.withIndex(this.index_),n=n.updatePriority(K.EMPTY_NODE);let r;this.reverse_?r=n.getReverseIterator(this.index_):r=n.getIterator(this.index_);let i=0;for(;r.hasNext();){const s=r.getNext();i<this.limit_&&this.withinDirectionalStart(s)&&this.withinDirectionalEnd(s)?i++:n=n.updateImmediateChild(s.name,K.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(B,n,C)}updatePriority(B,t){return B}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(B,t,C,n,r){let i;if(this.reverse_){const c=this.index_.getCompare();i=(u,m)=>c(m,u)}else i=this.index_.getCompare();const s=B;P(s.numChildren()===this.limit_,"");const a=new j(t,C),o=this.reverse_?s.getFirstChild(this.index_):s.getLastChild(this.index_),l=this.rangedFilter_.matches(a);if(s.hasChild(t)){const c=s.getImmediateChild(t);let u=n.getChildAfterChild(this.index_,o,this.reverse_);for(;u!=null&&(u.name===t||s.hasChild(u.name));)u=n.getChildAfterChild(this.index_,u,this.reverse_);const m=u==null?1:i(u,a);if(l&&!C.isEmpty()&&m>=0)return r!=null&&r.trackChildChange(Yi(t,C,c)),s.updateImmediateChild(t,C);{r!=null&&r.trackChildChange(ji(t,c));const g=s.updateImmediateChild(t,K.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(r!=null&&r.trackChildChange(pr(u.name,u.node)),g.updateImmediateChild(u.name,u.node)):g}}else return C.isEmpty()?B:l&&i(o,a)>=0?(r!=null&&(r.trackChildChange(ji(o.name,o.node)),r.trackChildChange(pr(t,C))),s.updateImmediateChild(t,C).updateImmediateChild(o.name,K.EMPTY_NODE)):B}}/**
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
 */class dh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=bB}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:hr}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:cn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===bB}copy(){const B=new dh;return B.limitSet_=this.limitSet_,B.limit_=this.limit_,B.startSet_=this.startSet_,B.startAfterSet_=this.startAfterSet_,B.indexStartValue_=this.indexStartValue_,B.startNameSet_=this.startNameSet_,B.indexStartName_=this.indexStartName_,B.endSet_=this.endSet_,B.endBeforeSet_=this.endBeforeSet_,B.indexEndValue_=this.indexEndValue_,B.endNameSet_=this.endNameSet_,B.indexEndName_=this.indexEndName_,B.index_=this.index_,B.viewFrom_=this.viewFrom_,B}}function b6(e){return e.loadsAllData()?new fh(e.getIndex()):e.hasLimit()?new I6(e):new Xi(e)}function Lm(e){const B={};if(e.isDefault())return B;let t;if(e.index_===bB?t="$priority":e.index_===E6?t="$value":e.index_===Cr?t="$key":(P(e.index_ instanceof A6,"Unrecognized index type!"),t=e.index_.toString()),B.orderBy=OB(t),e.startSet_){const C=e.startAfterSet_?"startAfter":"startAt";B[C]=OB(e.indexStartValue_),e.startNameSet_&&(B[C]+=","+OB(e.indexStartName_))}if(e.endSet_){const C=e.endBeforeSet_?"endBefore":"endAt";B[C]=OB(e.indexEndValue_),e.endNameSet_&&(B[C]+=","+OB(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?B.limitToFirst=e.limit_:B.limitToLast=e.limit_),B}function Hm(e){const B={};if(e.startSet_&&(B.sp=e.indexStartValue_,e.startNameSet_&&(B.sn=e.indexStartName_),B.sin=!e.startAfterSet_),e.endSet_&&(B.ep=e.indexEndValue_,e.endNameSet_&&(B.en=e.indexEndName_),B.ein=!e.endBeforeSet_),e.limitSet_){B.l=e.limit_;let t=e.viewFrom_;t===""&&(e.isViewFromLeft()?t="l":t="r"),B.vf=t}return e.index_!==bB&&(B.i=e.index_.toString()),B}/**
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
 */class jo extends VE{constructor(B,t,C,n){super(),this.repoInfo_=B,this.onDataUpdate_=t,this.authTokenProvider_=C,this.appCheckTokenProvider_=n,this.log_=Es("p:rest:"),this.listens_={}}reportStats(B){throw new Error("Method not implemented.")}static getListenId_(B,t){return t!==void 0?"tag$"+t:(P(B._queryParams.isDefault(),"should have a tag if it's not a default query."),B._path.toString())}listen(B,t,C,n){const r=B._path.toString();this.log_("Listen called for "+r+" "+B._queryIdentifier);const i=jo.getListenId_(B,C),s={};this.listens_[i]=s;const a=Lm(B._queryParams);this.restRequest_(r+".json",a,(o,l)=>{let c=l;if(o===404&&(c=null,o=null),o===null&&this.onDataUpdate_(r,c,!1,C),fr(this.listens_,i)===s){let u;o?o===401?u="permission_denied":u="rest_error:"+o:u="ok",n(u,null)}})}unlisten(B,t){const C=jo.getListenId_(B,t);delete this.listens_[C]}get(B){const t=Lm(B._queryParams),C=B._path.toString(),n=new Tl;return this.restRequest_(C+".json",t,(r,i)=>{let s=i;r===404&&(s=null,r=null),r===null?(this.onDataUpdate_(C,s,!1,null),n.resolve(s)):n.reject(new Error(s))}),n.promise}refreshAuthToken(B){}restRequest_(B,t={},C){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([n,r])=>{n&&n.accessToken&&(t.auth=n.accessToken),r&&r.token&&(t.ac=r.token);const i=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+B+"?ns="+this.repoInfo_.namespace+wr(t);this.log_("Sending REST request for "+i);const s=new XMLHttpRequest;s.onreadystatechange=()=>{if(C&&s.readyState===4){this.log_("REST Response for "+i+" received. status:",s.status,"response:",s.responseText);let a=null;if(s.status>=200&&s.status<300){try{a=Ki(s.responseText)}catch{ve("Failed to parse JSON response for "+i+": "+s.responseText)}C(null,a)}else s.status!==401&&s.status!==404&&ve("Got unsuccessful REST response for "+i+" Status: "+s.status),C(s.status);C=null}},s.open("GET",i,!0),s.send()})}}/**
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
 */class w6{constructor(){this.rootNode_=K.EMPTY_NODE}getNode(B){return this.rootNode_.getChild(B)}updateSnapshot(B,t){this.rootNode_=this.rootNode_.updateChild(B,t)}}/**
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
 */function Yo(){return{value:null,children:new Map}}function CS(e,B,t){if(Y(B))e.value=t,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(B,t);else{const C=X(B);e.children.has(C)||e.children.set(C,Yo());const n=e.children.get(C);B=aB(B),CS(n,B,t)}}function _f(e,B,t){e.value!==null?t(B,e.value):D6(e,(C,n)=>{const r=new sB(B.toString()+"/"+C);_f(n,r,t)})}function D6(e,B){e.children.forEach((t,C)=>{B(C,t)})}/**
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
 */class P6{constructor(B){this.collection_=B,this.last_=null}get(){const B=this.collection_.get(),t=Object.assign({},B);return this.last_&&Ae(this.last_,(C,n)=>{t[C]=t[C]-n}),this.last_=B,t}}/**
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
 */const xm=10*1e3,R6=30*1e3,N6=5*60*1e3;class F6{constructor(B,t){this.server_=t,this.statsToReport_={},this.statsListener_=new P6(B);const C=xm+(R6-xm)*Math.random();hi(this.reportStats_.bind(this),Math.floor(C))}reportStats_(){const B=this.statsListener_.get(),t={};let C=!1;Ae(B,(n,r)=>{r>0&&Vt(this.statsToReport_,n)&&(t[n]=r,C=!0)}),C&&this.server_.reportStats(t),hi(this.reportStats_.bind(this),Math.floor(Math.random()*2*N6))}}/**
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
 */var qe;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(qe||(qe={}));function nS(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function hh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ph(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
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
 */class Xo{constructor(B,t,C){this.path=B,this.affectedTree=t,this.revert=C,this.type=qe.ACK_USER_WRITE,this.source=nS()}operationForChild(B){if(Y(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new sB(B));return new Xo(BB(),t,this.revert)}}else return P(X(this.path)===B,"operationForChild called for unrelated child."),new Xo(aB(this.path),this.affectedTree,this.revert)}}/**
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
 */class Zi{constructor(B,t){this.source=B,this.path=t,this.type=qe.LISTEN_COMPLETE}operationForChild(B){return Y(this.path)?new Zi(this.source,BB()):new Zi(this.source,aB(this.path))}}/**
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
 */class un{constructor(B,t,C){this.source=B,this.path=t,this.snap=C,this.type=qe.OVERWRITE}operationForChild(B){return Y(this.path)?new un(this.source,BB(),this.snap.getImmediateChild(B)):new un(this.source,aB(this.path),this.snap)}}/**
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
 */class qi{constructor(B,t,C){this.source=B,this.path=t,this.children=C,this.type=qe.MERGE}operationForChild(B){if(Y(this.path)){const t=this.children.subtree(new sB(B));return t.isEmpty()?null:t.value?new un(this.source,BB(),t.value):new qi(this.source,BB(),t)}else return P(X(this.path)===B,"Can't get a merge for a child not on the path of the operation"),new qi(this.source,aB(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class wC{constructor(B,t,C){this.node_=B,this.fullyInitialized_=t,this.filtered_=C}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(B){if(Y(B))return this.isFullyInitialized()&&!this.filtered_;const t=X(B);return this.isCompleteForChild(t)}isCompleteForChild(B){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(B)}getNode(){return this.node_}}/**
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
 */class O6{constructor(B){this.query_=B,this.index_=this.query_._queryParams.getIndex()}}function k6(e,B,t,C){const n=[],r=[];return B.forEach(i=>{i.type==="child_changed"&&e.index_.indexedValueChanged(i.oldSnap,i.snapshotNode)&&r.push(S6(i.childName,i.snapshotNode))}),jr(e,n,"child_removed",B,C,t),jr(e,n,"child_added",B,C,t),jr(e,n,"child_moved",r,C,t),jr(e,n,"child_changed",B,C,t),jr(e,n,"value",B,C,t),n}function jr(e,B,t,C,n,r){const i=C.filter(s=>s.type===t);i.sort((s,a)=>M6(e,s,a)),i.forEach(s=>{const a=T6(e,s,r);n.forEach(o=>{o.respondsTo(s.type)&&B.push(o.createEvent(a,e.query_))})})}function T6(e,B,t){return B.type==="value"||B.type==="child_removed"||(B.prevName=t.getPredecessorChildName(B.childName,B.snapshotNode,e.index_)),B}function M6(e,B,t){if(B.childName==null||t.childName==null)throw br("Should only compare child_ events.");const C=new j(B.childName,B.snapshotNode),n=new j(t.childName,t.snapshotNode);return e.index_.compare(C,n)}/**
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
 */function Vl(e,B){return{eventCache:e,serverCache:B}}function pi(e,B,t,C){return Vl(new wC(B,t,C),e.serverCache)}function rS(e,B,t,C){return Vl(e.eventCache,new wC(B,t,C))}function Zo(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function fn(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
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
 */let au;const L6=()=>(au||(au=new de(yM)),au);class fB{constructor(B,t=L6()){this.value=B,this.children=t}static fromObject(B){let t=new fB(null);return Ae(B,(C,n)=>{t=t.set(new sB(C),n)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(B,t){if(this.value!=null&&t(this.value))return{path:BB(),value:this.value};if(Y(B))return null;{const C=X(B),n=this.children.get(C);if(n!==null){const r=n.findRootMostMatchingPathAndValue(aB(B),t);return r!=null?{path:kB(new sB(C),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(B){return this.findRootMostMatchingPathAndValue(B,()=>!0)}subtree(B){if(Y(B))return this;{const t=X(B),C=this.children.get(t);return C!==null?C.subtree(aB(B)):new fB(null)}}set(B,t){if(Y(B))return new fB(t,this.children);{const C=X(B),r=(this.children.get(C)||new fB(null)).set(aB(B),t),i=this.children.insert(C,r);return new fB(this.value,i)}}remove(B){if(Y(B))return this.children.isEmpty()?new fB(null):new fB(null,this.children);{const t=X(B),C=this.children.get(t);if(C){const n=C.remove(aB(B));let r;return n.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,n),this.value===null&&r.isEmpty()?new fB(null):new fB(this.value,r)}else return this}}get(B){if(Y(B))return this.value;{const t=X(B),C=this.children.get(t);return C?C.get(aB(B)):null}}setTree(B,t){if(Y(B))return t;{const C=X(B),r=(this.children.get(C)||new fB(null)).setTree(aB(B),t);let i;return r.isEmpty()?i=this.children.remove(C):i=this.children.insert(C,r),new fB(this.value,i)}}fold(B){return this.fold_(BB(),B)}fold_(B,t){const C={};return this.children.inorderTraversal((n,r)=>{C[n]=r.fold_(kB(B,n),t)}),t(B,this.value,C)}findOnPath(B,t){return this.findOnPath_(B,BB(),t)}findOnPath_(B,t,C){const n=this.value?C(t,this.value):!1;if(n)return n;if(Y(B))return null;{const r=X(B),i=this.children.get(r);return i?i.findOnPath_(aB(B),kB(t,r),C):null}}foreachOnPath(B,t){return this.foreachOnPath_(B,BB(),t)}foreachOnPath_(B,t,C){if(Y(B))return this;{this.value&&C(t,this.value);const n=X(B),r=this.children.get(n);return r?r.foreachOnPath_(aB(B),kB(t,n),C):new fB(null)}}foreach(B){this.foreach_(BB(),B)}foreach_(B,t){this.children.inorderTraversal((C,n)=>{n.foreach_(kB(B,C),t)}),this.value&&t(B,this.value)}foreachChild(B){this.children.inorderTraversal((t,C)=>{C.value&&B(t,C.value)})}}/**
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
 */class tt{constructor(B){this.writeTree_=B}static empty(){return new tt(new fB(null))}}function mi(e,B,t){if(Y(B))return new tt(new fB(t));{const C=e.writeTree_.findRootMostValueAndPath(B);if(C!=null){const n=C.path;let r=C.value;const i=ne(n,B);return r=r.updateChild(i,t),new tt(e.writeTree_.set(n,r))}else{const n=new fB(t),r=e.writeTree_.setTree(B,n);return new tt(r)}}}function Gm(e,B,t){let C=e;return Ae(t,(n,r)=>{C=mi(C,kB(B,n),r)}),C}function Km(e,B){if(Y(B))return tt.empty();{const t=e.writeTree_.setTree(B,new fB(null));return new tt(t)}}function $f(e,B){return yn(e,B)!=null}function yn(e,B){const t=e.writeTree_.findRootMostValueAndPath(B);return t!=null?e.writeTree_.get(t.path).getChild(ne(t.path,B)):null}function Um(e){const B=[],t=e.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(bB,(C,n)=>{B.push(new j(C,n))}):e.writeTree_.children.inorderTraversal((C,n)=>{n.value!=null&&B.push(new j(C,n.value))}),B}function AC(e,B){if(Y(B))return e;{const t=yn(e,B);return t!=null?new tt(new fB(t)):new tt(e.writeTree_.subtree(B))}}function Bd(e){return e.writeTree_.isEmpty()}function mr(e,B){return iS(BB(),e.writeTree_,B)}function iS(e,B,t){if(B.value!=null)return t.updateChild(e,B.value);{let C=null;return B.children.inorderTraversal((n,r)=>{n===".priority"?(P(r.value!==null,"Priority writes must always be leaf nodes"),C=r.value):t=iS(kB(e,n),r,t)}),!t.getChild(e).isEmpty()&&C!==null&&(t=t.updateChild(kB(e,".priority"),C)),t}}/**
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
 */function Wl(e,B){return lS(B,e)}function H6(e,B,t,C,n){P(C>e.lastWriteId,"Stacking an older write on top of newer ones"),n===void 0&&(n=!0),e.allWrites.push({path:B,snap:t,writeId:C,visible:n}),n&&(e.visibleWrites=mi(e.visibleWrites,B,t)),e.lastWriteId=C}function x6(e,B){for(let t=0;t<e.allWrites.length;t++){const C=e.allWrites[t];if(C.writeId===B)return C}return null}function G6(e,B){const t=e.allWrites.findIndex(s=>s.writeId===B);P(t>=0,"removeWrite called with nonexistent writeId.");const C=e.allWrites[t];e.allWrites.splice(t,1);let n=C.visible,r=!1,i=e.allWrites.length-1;for(;n&&i>=0;){const s=e.allWrites[i];s.visible&&(i>=t&&K6(s,C.path)?n=!1:Ze(C.path,s.path)&&(r=!0)),i--}if(n){if(r)return U6(e),!0;if(C.snap)e.visibleWrites=Km(e.visibleWrites,C.path);else{const s=C.children;Ae(s,a=>{e.visibleWrites=Km(e.visibleWrites,kB(C.path,a))})}return!0}else return!1}function K6(e,B){if(e.snap)return Ze(e.path,B);for(const t in e.children)if(e.children.hasOwnProperty(t)&&Ze(kB(e.path,t),B))return!0;return!1}function U6(e){e.visibleWrites=sS(e.allWrites,Q6,BB()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Q6(e){return e.visible}function sS(e,B,t){let C=tt.empty();for(let n=0;n<e.length;++n){const r=e[n];if(B(r)){const i=r.path;let s;if(r.snap)Ze(t,i)?(s=ne(t,i),C=mi(C,s,r.snap)):Ze(i,t)&&(s=ne(i,t),C=mi(C,BB(),r.snap.getChild(s)));else if(r.children){if(Ze(t,i))s=ne(t,i),C=Gm(C,s,r.children);else if(Ze(i,t))if(s=ne(i,t),Y(s))C=Gm(C,BB(),r.children);else{const a=fr(r.children,X(s));if(a){const o=a.getChild(aB(s));C=mi(C,BB(),o)}}}else throw br("WriteRecord should have .snap or .children")}}return C}function aS(e,B,t,C,n){if(!C&&!n){const r=yn(e.visibleWrites,B);if(r!=null)return r;{const i=AC(e.visibleWrites,B);if(Bd(i))return t;if(t==null&&!$f(i,BB()))return null;{const s=t||K.EMPTY_NODE;return mr(i,s)}}}else{const r=AC(e.visibleWrites,B);if(!n&&Bd(r))return t;if(!n&&t==null&&!$f(r,BB()))return null;{const i=function(o){return(o.visible||n)&&(!C||!~C.indexOf(o.writeId))&&(Ze(o.path,B)||Ze(B,o.path))},s=sS(e.allWrites,i,B),a=t||K.EMPTY_NODE;return mr(s,a)}}}function J6(e,B,t){let C=K.EMPTY_NODE;const n=yn(e.visibleWrites,B);if(n)return n.isLeafNode()||n.forEachChild(bB,(r,i)=>{C=C.updateImmediateChild(r,i)}),C;if(t){const r=AC(e.visibleWrites,B);return t.forEachChild(bB,(i,s)=>{const a=mr(AC(r,new sB(i)),s);C=C.updateImmediateChild(i,a)}),Um(r).forEach(i=>{C=C.updateImmediateChild(i.name,i.node)}),C}else{const r=AC(e.visibleWrites,B);return Um(r).forEach(i=>{C=C.updateImmediateChild(i.name,i.node)}),C}}function V6(e,B,t,C,n){P(C||n,"Either existingEventSnap or existingServerSnap must exist");const r=kB(B,t);if($f(e.visibleWrites,r))return null;{const i=AC(e.visibleWrites,r);return Bd(i)?n.getChild(t):mr(i,n.getChild(t))}}function W6(e,B,t,C){const n=kB(B,t),r=yn(e.visibleWrites,n);if(r!=null)return r;if(C.isCompleteForChild(t)){const i=AC(e.visibleWrites,n);return mr(i,C.getNode().getImmediateChild(t))}else return null}function j6(e,B){return yn(e.visibleWrites,B)}function Y6(e,B,t,C,n,r,i){let s;const a=AC(e.visibleWrites,B),o=yn(a,BB());if(o!=null)s=o;else if(t!=null)s=mr(a,t);else return[];if(s=s.withIndex(i),!s.isEmpty()&&!s.isLeafNode()){const l=[],c=i.getCompare(),u=r?s.getReverseIteratorFrom(C,i):s.getIteratorFrom(C,i);let m=u.getNext();for(;m&&l.length<n;)c(m,C)!==0&&l.push(m),m=u.getNext();return l}else return[]}function X6(){return{visibleWrites:tt.empty(),allWrites:[],lastWriteId:-1}}function qo(e,B,t,C){return aS(e.writeTree,e.treePath,B,t,C)}function mh(e,B){return J6(e.writeTree,e.treePath,B)}function Qm(e,B,t,C){return V6(e.writeTree,e.treePath,B,t,C)}function zo(e,B){return j6(e.writeTree,kB(e.treePath,B))}function Z6(e,B,t,C,n,r){return Y6(e.writeTree,e.treePath,B,t,C,n,r)}function gh(e,B,t){return W6(e.writeTree,e.treePath,B,t)}function oS(e,B){return lS(kB(e.treePath,B),e.writeTree)}function lS(e,B){return{treePath:e,writeTree:B}}/**
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
 */class q6{constructor(){this.changeMap=new Map}trackChildChange(B){const t=B.type,C=B.childName;P(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),P(C!==".priority","Only non-priority child changes can be tracked.");const n=this.changeMap.get(C);if(n){const r=n.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(C,Yi(C,B.snapshotNode,n.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(C);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(C,ji(C,n.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(C,pr(C,B.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(C,Yi(C,B.snapshotNode,n.oldSnap));else throw br("Illegal combination of changes: "+B+" occurred after "+n)}else this.changeMap.set(C,B)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class z6{getCompleteChild(B){return null}getChildAfterChild(B,t,C){return null}}const cS=new z6;class vh{constructor(B,t,C=null){this.writes_=B,this.viewCache_=t,this.optCompleteServerCache_=C}getCompleteChild(B){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(B))return t.getNode().getImmediateChild(B);{const C=this.optCompleteServerCache_!=null?new wC(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return gh(this.writes_,B,C)}}getChildAfterChild(B,t,C){const n=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:fn(this.viewCache_),r=Z6(this.writes_,n,t,1,C,B);return r.length===0?null:r[0]}}/**
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
 */function _6(e){return{filter:e}}function $6(e,B){P(B.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),P(B.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function BL(e,B,t,C,n){const r=new q6;let i,s;if(t.type===qe.OVERWRITE){const o=t;o.source.fromUser?i=ed(e,B,o.path,o.snap,C,n,r):(P(o.source.fromServer,"Unknown source."),s=o.source.tagged||B.serverCache.isFiltered()&&!Y(o.path),i=_o(e,B,o.path,o.snap,C,n,s,r))}else if(t.type===qe.MERGE){const o=t;o.source.fromUser?i=tL(e,B,o.path,o.children,C,n,r):(P(o.source.fromServer,"Unknown source."),s=o.source.tagged||B.serverCache.isFiltered(),i=td(e,B,o.path,o.children,C,n,s,r))}else if(t.type===qe.ACK_USER_WRITE){const o=t;o.revert?i=rL(e,B,o.path,C,n,r):i=CL(e,B,o.path,o.affectedTree,C,n,r)}else if(t.type===qe.LISTEN_COMPLETE)i=nL(e,B,t.path,C,r);else throw br("Unknown operation type: "+t.type);const a=r.getChanges();return eL(B,i,a),{viewCache:i,changes:a}}function eL(e,B,t){const C=B.eventCache;if(C.isFullyInitialized()){const n=C.getNode().isLeafNode()||C.getNode().isEmpty(),r=Zo(e);(t.length>0||!e.eventCache.isFullyInitialized()||n&&!C.getNode().equals(r)||!C.getNode().getPriority().equals(r.getPriority()))&&t.push(tS(Zo(B)))}}function uS(e,B,t,C,n,r){const i=B.eventCache;if(zo(C,t)!=null)return B;{let s,a;if(Y(t))if(P(B.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),B.serverCache.isFiltered()){const o=fn(B),l=o instanceof K?o:K.EMPTY_NODE,c=mh(C,l);s=e.filter.updateFullNode(B.eventCache.getNode(),c,r)}else{const o=qo(C,fn(B));s=e.filter.updateFullNode(B.eventCache.getNode(),o,r)}else{const o=X(t);if(o===".priority"){P(bC(t)===1,"Can't have a priority with additional path components");const l=i.getNode();a=B.serverCache.getNode();const c=Qm(C,t,l,a);c!=null?s=e.filter.updatePriority(l,c):s=i.getNode()}else{const l=aB(t);let c;if(i.isCompleteForChild(o)){a=B.serverCache.getNode();const u=Qm(C,t,i.getNode(),a);u!=null?c=i.getNode().getImmediateChild(o).updateChild(l,u):c=i.getNode().getImmediateChild(o)}else c=gh(C,o,B.serverCache);c!=null?s=e.filter.updateChild(i.getNode(),o,c,l,n,r):s=i.getNode()}}return pi(B,s,i.isFullyInitialized()||Y(t),e.filter.filtersNodes())}}function _o(e,B,t,C,n,r,i,s){const a=B.serverCache;let o;const l=i?e.filter:e.filter.getIndexedFilter();if(Y(t))o=l.updateFullNode(a.getNode(),C,null);else if(l.filtersNodes()&&!a.isFiltered()){const m=a.getNode().updateChild(t,C);o=l.updateFullNode(a.getNode(),m,null)}else{const m=X(t);if(!a.isCompleteForPath(t)&&bC(t)>1)return B;const f=aB(t),p=a.getNode().getImmediateChild(m).updateChild(f,C);m===".priority"?o=l.updatePriority(a.getNode(),p):o=l.updateChild(a.getNode(),m,p,f,cS,null)}const c=rS(B,o,a.isFullyInitialized()||Y(t),l.filtersNodes()),u=new vh(n,c,r);return uS(e,c,t,n,u,s)}function ed(e,B,t,C,n,r,i){const s=B.eventCache;let a,o;const l=new vh(n,B,r);if(Y(t))o=e.filter.updateFullNode(B.eventCache.getNode(),C,i),a=pi(B,o,!0,e.filter.filtersNodes());else{const c=X(t);if(c===".priority")o=e.filter.updatePriority(B.eventCache.getNode(),C),a=pi(B,o,s.isFullyInitialized(),s.isFiltered());else{const u=aB(t),m=s.getNode().getImmediateChild(c);let f;if(Y(u))f=C;else{const g=l.getCompleteChild(c);g!=null?jE(u)===".priority"&&g.getChild(XE(u)).isEmpty()?f=g:f=g.updateChild(u,C):f=K.EMPTY_NODE}if(m.equals(f))a=B;else{const g=e.filter.updateChild(s.getNode(),c,f,u,l,i);a=pi(B,g,s.isFullyInitialized(),e.filter.filtersNodes())}}}return a}function Jm(e,B){return e.eventCache.isCompleteForChild(B)}function tL(e,B,t,C,n,r,i){let s=B;return C.foreach((a,o)=>{const l=kB(t,a);Jm(B,X(l))&&(s=ed(e,s,l,o,n,r,i))}),C.foreach((a,o)=>{const l=kB(t,a);Jm(B,X(l))||(s=ed(e,s,l,o,n,r,i))}),s}function Vm(e,B,t){return t.foreach((C,n)=>{B=B.updateChild(C,n)}),B}function td(e,B,t,C,n,r,i,s){if(B.serverCache.getNode().isEmpty()&&!B.serverCache.isFullyInitialized())return B;let a=B,o;Y(t)?o=C:o=new fB(null).setTree(t,C);const l=B.serverCache.getNode();return o.children.inorderTraversal((c,u)=>{if(l.hasChild(c)){const m=B.serverCache.getNode().getImmediateChild(c),f=Vm(e,m,u);a=_o(e,a,new sB(c),f,n,r,i,s)}}),o.children.inorderTraversal((c,u)=>{const m=!B.serverCache.isCompleteForChild(c)&&u.value===null;if(!l.hasChild(c)&&!m){const f=B.serverCache.getNode().getImmediateChild(c),g=Vm(e,f,u);a=_o(e,a,new sB(c),g,n,r,i,s)}}),a}function CL(e,B,t,C,n,r,i){if(zo(n,t)!=null)return B;const s=B.serverCache.isFiltered(),a=B.serverCache;if(C.value!=null){if(Y(t)&&a.isFullyInitialized()||a.isCompleteForPath(t))return _o(e,B,t,a.getNode().getChild(t),n,r,s,i);if(Y(t)){let o=new fB(null);return a.getNode().forEachChild(Cr,(l,c)=>{o=o.set(new sB(l),c)}),td(e,B,t,o,n,r,s,i)}else return B}else{let o=new fB(null);return C.foreach((l,c)=>{const u=kB(t,l);a.isCompleteForPath(u)&&(o=o.set(l,a.getNode().getChild(u)))}),td(e,B,t,o,n,r,s,i)}}function nL(e,B,t,C,n){const r=B.serverCache,i=rS(B,r.getNode(),r.isFullyInitialized()||Y(t),r.isFiltered());return uS(e,i,t,C,cS,n)}function rL(e,B,t,C,n,r){let i;if(zo(C,t)!=null)return B;{const s=new vh(C,B,n),a=B.eventCache.getNode();let o;if(Y(t)||X(t)===".priority"){let l;if(B.serverCache.isFullyInitialized())l=qo(C,fn(B));else{const c=B.serverCache.getNode();P(c instanceof K,"serverChildren would be complete if leaf node"),l=mh(C,c)}l=l,o=e.filter.updateFullNode(a,l,r)}else{const l=X(t);let c=gh(C,l,B.serverCache);c==null&&B.serverCache.isCompleteForChild(l)&&(c=a.getImmediateChild(l)),c!=null?o=e.filter.updateChild(a,l,c,aB(t),s,r):B.eventCache.getNode().hasChild(l)?o=e.filter.updateChild(a,l,K.EMPTY_NODE,aB(t),s,r):o=a,o.isEmpty()&&B.serverCache.isFullyInitialized()&&(i=qo(C,fn(B)),i.isLeafNode()&&(o=e.filter.updateFullNode(o,i,r)))}return i=B.serverCache.isFullyInitialized()||zo(C,BB())!=null,pi(B,o,i,e.filter.filtersNodes())}}/**
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
 */class iL{constructor(B,t){this.query_=B,this.eventRegistrations_=[];const C=this.query_._queryParams,n=new fh(C.getIndex()),r=b6(C);this.processor_=_6(r);const i=t.serverCache,s=t.eventCache,a=n.updateFullNode(K.EMPTY_NODE,i.getNode(),null),o=r.updateFullNode(K.EMPTY_NODE,s.getNode(),null),l=new wC(a,i.isFullyInitialized(),n.filtersNodes()),c=new wC(o,s.isFullyInitialized(),r.filtersNodes());this.viewCache_=Vl(c,l),this.eventGenerator_=new O6(this.query_)}get query(){return this.query_}}function sL(e){return e.viewCache_.serverCache.getNode()}function aL(e){return Zo(e.viewCache_)}function oL(e,B){const t=fn(e.viewCache_);return t&&(e.query._queryParams.loadsAllData()||!Y(B)&&!t.getImmediateChild(X(B)).isEmpty())?t.getChild(B):null}function Wm(e){return e.eventRegistrations_.length===0}function lL(e,B){e.eventRegistrations_.push(B)}function jm(e,B,t){const C=[];if(t){P(B==null,"A cancel should cancel all event registrations.");const n=e.query._path;e.eventRegistrations_.forEach(r=>{const i=r.createCancelEvent(t,n);i&&C.push(i)})}if(B){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(!i.matches(B))n.push(i);else if(B.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}e.eventRegistrations_=n}else e.eventRegistrations_=[];return C}function Ym(e,B,t,C){B.type===qe.MERGE&&B.source.queryId!==null&&(P(fn(e.viewCache_),"We should always have a full cache before handling merges"),P(Zo(e.viewCache_),"Missing event cache, even though we have a server cache"));const n=e.viewCache_,r=BL(e.processor_,n,B,t,C);return $6(e.processor_,r.viewCache),P(r.viewCache.serverCache.isFullyInitialized()||!n.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=r.viewCache,fS(e,r.changes,r.viewCache.eventCache.getNode(),null)}function cL(e,B){const t=e.viewCache_.eventCache,C=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(bB,(r,i)=>{C.push(pr(r,i))}),t.isFullyInitialized()&&C.push(tS(t.getNode())),fS(e,C,t.getNode(),B)}function fS(e,B,t,C){const n=C?[C]:e.eventRegistrations_;return k6(e.eventGenerator_,B,t,n)}/**
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
 */let $o;class dS{constructor(){this.views=new Map}}function uL(e){P(!$o,"__referenceConstructor has already been defined"),$o=e}function fL(){return P($o,"Reference.ts has not been loaded"),$o}function dL(e){return e.views.size===0}function Ah(e,B,t,C){const n=B.source.queryId;if(n!==null){const r=e.views.get(n);return P(r!=null,"SyncTree gave us an op for an invalid query."),Ym(r,B,t,C)}else{let r=[];for(const i of e.views.values())r=r.concat(Ym(i,B,t,C));return r}}function hS(e,B,t,C,n){const r=B._queryIdentifier,i=e.views.get(r);if(!i){let s=qo(t,n?C:null),a=!1;s?a=!0:C instanceof K?(s=mh(t,C),a=!1):(s=K.EMPTY_NODE,a=!1);const o=Vl(new wC(s,a,!1),new wC(C,n,!1));return new iL(B,o)}return i}function hL(e,B,t,C,n,r){const i=hS(e,B,C,n,r);return e.views.has(B._queryIdentifier)||e.views.set(B._queryIdentifier,i),lL(i,t),cL(i,t)}function pL(e,B,t,C){const n=B._queryIdentifier,r=[];let i=[];const s=DC(e);if(n==="default")for(const[a,o]of e.views.entries())i=i.concat(jm(o,t,C)),Wm(o)&&(e.views.delete(a),o.query._queryParams.loadsAllData()||r.push(o.query));else{const a=e.views.get(n);a&&(i=i.concat(jm(a,t,C)),Wm(a)&&(e.views.delete(n),a.query._queryParams.loadsAllData()||r.push(a.query)))}return s&&!DC(e)&&r.push(new(fL())(B._repo,B._path)),{removed:r,events:i}}function pS(e){const B=[];for(const t of e.views.values())t.query._queryParams.loadsAllData()||B.push(t);return B}function yC(e,B){let t=null;for(const C of e.views.values())t=t||oL(C,B);return t}function mS(e,B){if(B._queryParams.loadsAllData())return jl(e);{const C=B._queryIdentifier;return e.views.get(C)}}function gS(e,B){return mS(e,B)!=null}function DC(e){return jl(e)!=null}function jl(e){for(const B of e.views.values())if(B.query._queryParams.loadsAllData())return B;return null}/**
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
 */let Bl;function mL(e){P(!Bl,"__referenceConstructor has already been defined"),Bl=e}function gL(){return P(Bl,"Reference.ts has not been loaded"),Bl}let vL=1;class Xm{constructor(B){this.listenProvider_=B,this.syncPointTree_=new fB(null),this.pendingWriteTree_=X6(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function vS(e,B,t,C,n){return H6(e.pendingWriteTree_,B,t,C,n),n?bs(e,new un(nS(),B,t)):[]}function YC(e,B,t=!1){const C=x6(e.pendingWriteTree_,B);if(G6(e.pendingWriteTree_,B)){let r=new fB(null);return C.snap!=null?r=r.set(BB(),!0):Ae(C.children,i=>{r=r.set(new sB(i),!0)}),bs(e,new Xo(C.path,r,t))}else return[]}function Is(e,B,t){return bs(e,new un(hh(),B,t))}function AL(e,B,t){const C=fB.fromObject(t);return bs(e,new qi(hh(),B,C))}function yL(e,B){return bs(e,new Zi(hh(),B))}function EL(e,B,t){const C=Eh(e,t);if(C){const n=Sh(C),r=n.path,i=n.queryId,s=ne(r,B),a=new Zi(ph(i),s);return Ih(e,r,a)}else return[]}function AS(e,B,t,C,n=!1){const r=B._path,i=e.syncPointTree_.get(r);let s=[];if(i&&(B._queryIdentifier==="default"||gS(i,B))){const a=pL(i,B,t,C);dL(i)&&(e.syncPointTree_=e.syncPointTree_.remove(r));const o=a.removed;if(s=a.events,!n){const l=o.findIndex(u=>u._queryParams.loadsAllData())!==-1,c=e.syncPointTree_.findOnPath(r,(u,m)=>DC(m));if(l&&!c){const u=e.syncPointTree_.subtree(r);if(!u.isEmpty()){const m=wL(u);for(let f=0;f<m.length;++f){const g=m[f],p=g.query,d=IS(e,g);e.listenProvider_.startListening(gi(p),zi(e,p),d.hashFn,d.onComplete)}}}!c&&o.length>0&&!C&&(l?e.listenProvider_.stopListening(gi(B),null):o.forEach(u=>{const m=e.queryToTagMap.get(Yl(u));e.listenProvider_.stopListening(gi(u),m)}))}DL(e,o)}return s}function yS(e,B,t,C){const n=Eh(e,C);if(n!=null){const r=Sh(n),i=r.path,s=r.queryId,a=ne(i,B),o=new un(ph(s),a,t);return Ih(e,i,o)}else return[]}function SL(e,B,t,C){const n=Eh(e,C);if(n){const r=Sh(n),i=r.path,s=r.queryId,a=ne(i,B),o=fB.fromObject(t),l=new qi(ph(s),a,o);return Ih(e,i,l)}else return[]}function IL(e,B,t,C=!1){const n=B._path;let r=null,i=!1;e.syncPointTree_.foreachOnPath(n,(u,m)=>{const f=ne(u,n);r=r||yC(m,f),i=i||DC(m)});let s=e.syncPointTree_.get(n);s?(i=i||DC(s),r=r||yC(s,BB())):(s=new dS,e.syncPointTree_=e.syncPointTree_.set(n,s));let a;r!=null?a=!0:(a=!1,r=K.EMPTY_NODE,e.syncPointTree_.subtree(n).foreachChild((m,f)=>{const g=yC(f,BB());g&&(r=r.updateImmediateChild(m,g))}));const o=gS(s,B);if(!o&&!B._queryParams.loadsAllData()){const u=Yl(B);P(!e.queryToTagMap.has(u),"View does not exist, but we have a tag");const m=PL();e.queryToTagMap.set(u,m),e.tagToQueryMap.set(m,u)}const l=Wl(e.pendingWriteTree_,n);let c=hL(s,B,t,l,r,a);if(!o&&!i&&!C){const u=mS(s,B);c=c.concat(RL(e,B,u))}return c}function yh(e,B,t){const n=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(B,(i,s)=>{const a=ne(i,B),o=yC(s,a);if(o)return o});return aS(n,B,r,t,!0)}function bL(e,B){const t=B._path;let C=null;e.syncPointTree_.foreachOnPath(t,(o,l)=>{const c=ne(o,t);C=C||yC(l,c)});let n=e.syncPointTree_.get(t);n?C=C||yC(n,BB()):(n=new dS,e.syncPointTree_=e.syncPointTree_.set(t,n));const r=C!=null,i=r?new wC(C,!0,!1):null,s=Wl(e.pendingWriteTree_,B._path),a=hS(n,B,s,r?i.getNode():K.EMPTY_NODE,r);return aL(a)}function bs(e,B){return ES(B,e.syncPointTree_,null,Wl(e.pendingWriteTree_,BB()))}function ES(e,B,t,C){if(Y(e.path))return SS(e,B,t,C);{const n=B.get(BB());t==null&&n!=null&&(t=yC(n,BB()));let r=[];const i=X(e.path),s=e.operationForChild(i),a=B.children.get(i);if(a&&s){const o=t?t.getImmediateChild(i):null,l=oS(C,i);r=r.concat(ES(s,a,o,l))}return n&&(r=r.concat(Ah(n,e,C,t))),r}}function SS(e,B,t,C){const n=B.get(BB());t==null&&n!=null&&(t=yC(n,BB()));let r=[];return B.children.inorderTraversal((i,s)=>{const a=t?t.getImmediateChild(i):null,o=oS(C,i),l=e.operationForChild(i);l&&(r=r.concat(SS(l,s,a,o)))}),n&&(r=r.concat(Ah(n,e,C,t))),r}function IS(e,B){const t=B.query,C=zi(e,t);return{hashFn:()=>(sL(B)||K.EMPTY_NODE).hash(),onComplete:n=>{if(n==="ok")return C?EL(e,t._path,C):yL(e,t._path);{const r=IM(n,t);return AS(e,t,null,r)}}}}function zi(e,B){const t=Yl(B);return e.queryToTagMap.get(t)}function Yl(e){return e._path.toString()+"$"+e._queryIdentifier}function Eh(e,B){return e.tagToQueryMap.get(B)}function Sh(e){const B=e.indexOf("$");return P(B!==-1&&B<e.length-1,"Bad queryKey."),{queryId:e.substr(B+1),path:new sB(e.substr(0,B))}}function Ih(e,B,t){const C=e.syncPointTree_.get(B);P(C,"Missing sync point for query tag that we're tracking");const n=Wl(e.pendingWriteTree_,B);return Ah(C,t,n,null)}function wL(e){return e.fold((B,t,C)=>{if(t&&DC(t))return[jl(t)];{let n=[];return t&&(n=pS(t)),Ae(C,(r,i)=>{n=n.concat(i)}),n}})}function gi(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(gL())(e._repo,e._path):e}function DL(e,B){for(let t=0;t<B.length;++t){const C=B[t];if(!C._queryParams.loadsAllData()){const n=Yl(C),r=e.queryToTagMap.get(n);e.queryToTagMap.delete(n),e.tagToQueryMap.delete(r)}}}function PL(){return vL++}function RL(e,B,t){const C=B._path,n=zi(e,B),r=IS(e,t),i=e.listenProvider_.startListening(gi(B),n,r.hashFn,r.onComplete),s=e.syncPointTree_.subtree(C);if(n)P(!DC(s.value),"If we're adding a query, it shouldn't be shadowed");else{const a=s.fold((o,l,c)=>{if(!Y(o)&&l&&DC(l))return[jl(l).query];{let u=[];return l&&(u=u.concat(pS(l).map(m=>m.query))),Ae(c,(m,f)=>{u=u.concat(f)}),u}});for(let o=0;o<a.length;++o){const l=a[o];e.listenProvider_.stopListening(gi(l),zi(e,l))}}return i}/**
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
 */class bh{constructor(B){this.node_=B}getImmediateChild(B){const t=this.node_.getImmediateChild(B);return new bh(t)}node(){return this.node_}}class wh{constructor(B,t){this.syncTree_=B,this.path_=t}getImmediateChild(B){const t=kB(this.path_,B);return new wh(this.syncTree_,t)}node(){return yh(this.syncTree_,this.path_)}}const NL=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},Zm=function(e,B,t){if(!e||typeof e!="object")return e;if(P(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return FL(e[".sv"],B,t);if(typeof e[".sv"]=="object")return OL(e[".sv"],B);P(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},FL=function(e,B,t){switch(e){case"timestamp":return t.timestamp;default:P(!1,"Unexpected server value: "+e)}},OL=function(e,B,t){e.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const C=e.increment;typeof C!="number"&&P(!1,"Unexpected increment value: "+C);const n=B.node();if(P(n!==null&&typeof n<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!n.isLeafNode())return C;const i=n.getValue();return typeof i!="number"?C:i+C},kL=function(e,B,t,C){return Dh(B,new wh(t,e),C)},bS=function(e,B,t){return Dh(e,new bh(B),t)};function Dh(e,B,t){const C=e.getPriority().val(),n=Zm(C,B.getImmediateChild(".priority"),t);let r;if(e.isLeafNode()){const i=e,s=Zm(i.getValue(),B,t);return s!==i.getValue()||n!==i.getPriority().val()?new HB(s,KB(n)):e}else{const i=e;return r=i,n!==i.getPriority().val()&&(r=r.updatePriority(new HB(n))),i.forEachChild(bB,(s,a)=>{const o=Dh(a,B.getImmediateChild(s),t);o!==a&&(r=r.updateImmediateChild(s,o))}),r}}/**
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
 */class Ph{constructor(B="",t=null,C={children:{},childCount:0}){this.name=B,this.parent=t,this.node=C}}function Rh(e,B){let t=B instanceof sB?B:new sB(B),C=e,n=X(t);for(;n!==null;){const r=fr(C.node.children,n)||{children:{},childCount:0};C=new Ph(n,C,r),t=aB(t),n=X(t)}return C}function Nr(e){return e.node.value}function wS(e,B){e.node.value=B,Cd(e)}function DS(e){return e.node.childCount>0}function TL(e){return Nr(e)===void 0&&!DS(e)}function Xl(e,B){Ae(e.node.children,(t,C)=>{B(new Ph(t,e,C))})}function PS(e,B,t,C){t&&!C&&B(e),Xl(e,n=>{PS(n,B,!0,C)}),t&&C&&B(e)}function ML(e,B,t){let C=t?e:e.parent;for(;C!==null;){if(B(C))return!0;C=C.parent}return!1}function ws(e){return new sB(e.parent===null?e.name:ws(e.parent)+"/"+e.name)}function Cd(e){e.parent!==null&&LL(e.parent,e.name,e)}function LL(e,B,t){const C=TL(t),n=Vt(e.node.children,B);C&&n?(delete e.node.children[B],e.node.childCount--,Cd(e)):!C&&!n&&(e.node.children[B]=t.node,e.node.childCount++,Cd(e))}/**
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
 */const HL=/[\[\].#$\/\u0000-\u001F\u007F]/,xL=/[\[\].#$\u0000-\u001F\u007F]/,ou=10*1024*1024,RS=function(e){return typeof e=="string"&&e.length!==0&&!HL.test(e)},NS=function(e){return typeof e=="string"&&e.length!==0&&!xL.test(e)},GL=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),NS(e)},KL=function(e,B,t,C){C&&B===void 0||Nh(J1(e,"value"),B,t)},Nh=function(e,B,t){const C=t instanceof sB?new C6(t,e):t;if(B===void 0)throw new Error(e+"contains undefined "+GC(C));if(typeof B=="function")throw new Error(e+"contains a function "+GC(C)+" with contents = "+B.toString());if(bE(B))throw new Error(e+"contains "+B.toString()+" "+GC(C));if(typeof B=="string"&&B.length>ou/3&&Ml(B)>ou)throw new Error(e+"contains a string greater than "+ou+" utf8 bytes "+GC(C)+" ('"+B.substring(0,50)+"...')");if(B&&typeof B=="object"){let n=!1,r=!1;if(Ae(B,(i,s)=>{if(i===".value")n=!0;else if(i!==".priority"&&i!==".sv"&&(r=!0,!RS(i)))throw new Error(e+" contains an invalid key ("+i+") "+GC(C)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);n6(C,i),Nh(e,s,C),r6(C)}),n&&r)throw new Error(e+' contains ".value" child '+GC(C)+" in addition to actual children.")}},FS=function(e,B,t,C){if(!(C&&t===void 0)&&!NS(t))throw new Error(J1(e,B)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},UL=function(e,B,t,C){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),FS(e,B,t,C)},QL=function(e,B){if(X(B)===".info")throw new Error(e+" failed = Can't modify data under /.info/")},JL=function(e,B){const t=B.path.toString();if(typeof B.repoInfo.host!="string"||B.repoInfo.host.length===0||!RS(B.repoInfo.namespace)&&B.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!GL(t))throw new Error(J1(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class VL{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function OS(e,B){let t=null;for(let C=0;C<B.length;C++){const n=B[C],r=n.getPath();t!==null&&!ZE(r,t.path)&&(e.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(n)}t&&e.eventLists_.push(t)}function gt(e,B,t){OS(e,t),WL(e,C=>Ze(C,B)||Ze(B,C))}function WL(e,B){e.recursionDepth_++;let t=!0;for(let C=0;C<e.eventLists_.length;C++){const n=e.eventLists_[C];if(n){const r=n.path;B(r)?(jL(e.eventLists_[C]),e.eventLists_[C]=null):t=!1}}t&&(e.eventLists_=[]),e.recursionDepth_--}function jL(e){for(let B=0;B<e.events.length;B++){const t=e.events[B];if(t!==null){e.events[B]=null;const C=t.getEventRunner();Bn&&zB("event: "+t.toString()),Rr(C)}}}/**
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
 */const YL="repo_interrupt",XL=25;class ZL{constructor(B,t,C,n){this.repoInfo_=B,this.forceRestClient_=t,this.authTokenProvider_=C,this.appCheckProvider_=n,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new VL,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Yo(),this.transactionQueueTree_=new Ph,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function qL(e,B,t){if(e.stats_=oh(e.repoInfo_),e.forceRestClient_||PM())e.server_=new jo(e.repoInfo_,(C,n,r,i)=>{qm(e,C,n,r,i)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>zm(e,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{OB(t)}catch(C){throw new Error("Invalid authOverride provided: "+C)}}e.persistentConnection_=new Ot(e.repoInfo_,B,(C,n,r,i)=>{qm(e,C,n,r,i)},C=>{zm(e,C)},C=>{_L(e,C)},e.authTokenProvider_,e.appCheckProvider_,t),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(C=>{e.server_.refreshAuthToken(C)}),e.appCheckProvider_.addTokenChangeListener(C=>{e.server_.refreshAppCheckToken(C.token)}),e.statsReporter_=kM(e.repoInfo_,()=>new F6(e.stats_,e.server_)),e.infoData_=new w6,e.infoSyncTree_=new Xm({startListening:(C,n,r,i)=>{let s=[];const a=e.infoData_.getNode(C._path);return a.isEmpty()||(s=Is(e.infoSyncTree_,C._path,a),setTimeout(()=>{i("ok")},0)),s},stopListening:()=>{}}),Oh(e,"connected",!1),e.serverSyncTree_=new Xm({startListening:(C,n,r,i)=>(e.server_.listen(C,r,n,(s,a)=>{const o=i(s,a);gt(e.eventQueue_,C._path,o)}),[]),stopListening:(C,n)=>{e.server_.unlisten(C,n)}})}function zL(e){const t=e.infoData_.getNode(new sB(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Fh(e){return NL({timestamp:zL(e)})}function qm(e,B,t,C,n){e.dataUpdateCount++;const r=new sB(B);t=e.interceptServerDataCallback_?e.interceptServerDataCallback_(B,t):t;let i=[];if(n)if(C){const a=To(t,o=>KB(o));i=SL(e.serverSyncTree_,r,a,n)}else{const a=KB(t);i=yS(e.serverSyncTree_,r,a,n)}else if(C){const a=To(t,o=>KB(o));i=AL(e.serverSyncTree_,r,a)}else{const a=KB(t);i=Is(e.serverSyncTree_,r,a)}let s=r;i.length>0&&(s=ql(e,r)),gt(e.eventQueue_,s,i)}function zm(e,B){Oh(e,"connected",B),B===!1&&eH(e)}function _L(e,B){Ae(B,(t,C)=>{Oh(e,t,C)})}function Oh(e,B,t){const C=new sB("/.info/"+B),n=KB(t);e.infoData_.updateSnapshot(C,n);const r=Is(e.infoSyncTree_,C,n);gt(e.eventQueue_,C,r)}function kS(e){return e.nextWriteId_++}function $L(e,B,t){const C=bL(e.serverSyncTree_,B);return C!=null?Promise.resolve(C):e.server_.get(B).then(n=>{const r=KB(n).withIndex(B._queryParams.getIndex());IL(e.serverSyncTree_,B,t,!0);let i;if(B._queryParams.loadsAllData())i=Is(e.serverSyncTree_,B._path,r);else{const s=zi(e.serverSyncTree_,B);i=yS(e.serverSyncTree_,B._path,r,s)}return gt(e.eventQueue_,B._path,i),AS(e.serverSyncTree_,B,t,null,!0),r},n=>(Zl(e,"get for query "+OB(B)+" failed: "+n),Promise.reject(new Error(n))))}function BH(e,B,t,C,n){Zl(e,"set",{path:B.toString(),value:t,priority:C});const r=Fh(e),i=KB(t,C),s=yh(e.serverSyncTree_,B),a=bS(i,s,r),o=kS(e),l=vS(e.serverSyncTree_,B,a,o,!0);OS(e.eventQueue_,l),e.server_.put(B.toString(),i.val(!0),(u,m)=>{const f=u==="ok";f||ve("set at "+B+" failed: "+u);const g=YC(e.serverSyncTree_,o,!f);gt(e.eventQueue_,B,g),CH(e,n,u,m)});const c=xS(e,B);ql(e,c),gt(e.eventQueue_,c,[])}function eH(e){Zl(e,"onDisconnectEvents");const B=Fh(e),t=Yo();_f(e.onDisconnect_,BB(),(n,r)=>{const i=kL(n,r,e.serverSyncTree_,B);CS(t,n,i)});let C=[];_f(t,BB(),(n,r)=>{C=C.concat(Is(e.serverSyncTree_,n,r));const i=xS(e,n);ql(e,i)}),e.onDisconnect_=Yo(),gt(e.eventQueue_,BB(),C)}function tH(e){e.persistentConnection_&&e.persistentConnection_.interrupt(YL)}function Zl(e,...B){let t="";e.persistentConnection_&&(t=e.persistentConnection_.id+":"),zB(t,...B)}function CH(e,B,t,C){B&&Rr(()=>{if(t==="ok")B(null);else{const n=(t||"error").toUpperCase();let r=n;C&&(r+=": "+C);const i=new Error(r);i.code=n,B(i)}})}function TS(e,B,t){return yh(e.serverSyncTree_,B,t)||K.EMPTY_NODE}function kh(e,B=e.transactionQueueTree_){if(B||zl(e,B),Nr(B)){const t=LS(e,B);P(t.length>0,"Sending zero length transaction queue"),t.every(n=>n.status===0)&&nH(e,ws(B),t)}else DS(B)&&Xl(B,t=>{kh(e,t)})}function nH(e,B,t){const C=t.map(o=>o.currentWriteId),n=TS(e,B,C);let r=n;const i=n.hash();for(let o=0;o<t.length;o++){const l=t[o];P(l.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),l.status=1,l.retryCount++;const c=ne(B,l.path);r=r.updateChild(c,l.currentOutputSnapshotRaw)}const s=r.val(!0),a=B;e.server_.put(a.toString(),s,o=>{Zl(e,"transaction put response",{path:a.toString(),status:o});let l=[];if(o==="ok"){const c=[];for(let u=0;u<t.length;u++)t[u].status=2,l=l.concat(YC(e.serverSyncTree_,t[u].currentWriteId)),t[u].onComplete&&c.push(()=>t[u].onComplete(null,!0,t[u].currentOutputSnapshotResolved)),t[u].unwatcher();zl(e,Rh(e.transactionQueueTree_,B)),kh(e,e.transactionQueueTree_),gt(e.eventQueue_,B,l);for(let u=0;u<c.length;u++)Rr(c[u])}else{if(o==="datastale")for(let c=0;c<t.length;c++)t[c].status===3?t[c].status=4:t[c].status=0;else{ve("transaction at "+a.toString()+" failed: "+o);for(let c=0;c<t.length;c++)t[c].status=4,t[c].abortReason=o}ql(e,B)}},i)}function ql(e,B){const t=MS(e,B),C=ws(t),n=LS(e,t);return rH(e,n,C),C}function rH(e,B,t){if(B.length===0)return;const C=[];let n=[];const i=B.filter(s=>s.status===0).map(s=>s.currentWriteId);for(let s=0;s<B.length;s++){const a=B[s],o=ne(t,a.path);let l=!1,c;if(P(o!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)l=!0,c=a.abortReason,n=n.concat(YC(e.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=XL)l=!0,c="maxretry",n=n.concat(YC(e.serverSyncTree_,a.currentWriteId,!0));else{const u=TS(e,a.path,i);a.currentInputSnapshot=u;const m=B[s].update(u.val());if(m!==void 0){Nh("transaction failed: Data returned ",m,a.path);let f=KB(m);typeof m=="object"&&m!=null&&Vt(m,".priority")||(f=f.updatePriority(u.getPriority()));const p=a.currentWriteId,d=Fh(e),h=bS(f,u,d);a.currentOutputSnapshotRaw=f,a.currentOutputSnapshotResolved=h,a.currentWriteId=kS(e),i.splice(i.indexOf(p),1),n=n.concat(vS(e.serverSyncTree_,a.path,h,a.currentWriteId,a.applyLocally)),n=n.concat(YC(e.serverSyncTree_,p,!0))}else l=!0,c="nodata",n=n.concat(YC(e.serverSyncTree_,a.currentWriteId,!0))}gt(e.eventQueue_,t,n),n=[],l&&(B[s].status=2,function(u){setTimeout(u,Math.floor(0))}(B[s].unwatcher),B[s].onComplete&&(c==="nodata"?C.push(()=>B[s].onComplete(null,!1,B[s].currentInputSnapshot)):C.push(()=>B[s].onComplete(new Error(c),!1,null))))}zl(e,e.transactionQueueTree_);for(let s=0;s<C.length;s++)Rr(C[s]);kh(e,e.transactionQueueTree_)}function MS(e,B){let t,C=e.transactionQueueTree_;for(t=X(B);t!==null&&Nr(C)===void 0;)C=Rh(C,t),B=aB(B),t=X(B);return C}function LS(e,B){const t=[];return HS(e,B,t),t.sort((C,n)=>C.order-n.order),t}function HS(e,B,t){const C=Nr(B);if(C)for(let n=0;n<C.length;n++)t.push(C[n]);Xl(B,n=>{HS(e,n,t)})}function zl(e,B){const t=Nr(B);if(t){let C=0;for(let n=0;n<t.length;n++)t[n].status!==2&&(t[C]=t[n],C++);t.length=C,wS(B,t.length>0?t:void 0)}Xl(B,C=>{zl(e,C)})}function xS(e,B){const t=ws(MS(e,B)),C=Rh(e.transactionQueueTree_,B);return ML(C,n=>{lu(e,n)}),lu(e,C),PS(C,n=>{lu(e,n)}),t}function lu(e,B){const t=Nr(B);if(t){const C=[];let n=[],r=-1;for(let i=0;i<t.length;i++)t[i].status===3||(t[i].status===1?(P(r===i-1,"All SENT items should be at beginning of queue."),r=i,t[i].status=3,t[i].abortReason="set"):(P(t[i].status===0,"Unexpected transaction status in abort"),t[i].unwatcher(),n=n.concat(YC(e.serverSyncTree_,t[i].currentWriteId,!0)),t[i].onComplete&&C.push(t[i].onComplete.bind(null,new Error("set"),!1,null))));r===-1?wS(B,void 0):t.length=r+1,gt(e.eventQueue_,ws(B),n);for(let i=0;i<C.length;i++)Rr(C[i])}}/**
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
 */function iH(e){let B="";const t=e.split("/");for(let C=0;C<t.length;C++)if(t[C].length>0){let n=t[C];try{n=decodeURIComponent(n.replace(/\+/g," "))}catch{}B+="/"+n}return B}function sH(e){const B={};e.charAt(0)==="?"&&(e=e.substring(1));for(const t of e.split("&")){if(t.length===0)continue;const C=t.split("=");C.length===2?B[decodeURIComponent(C[0])]=decodeURIComponent(C[1]):ve(`Invalid query segment '${t}' in query '${e}'`)}return B}const _m=function(e,B){const t=aH(e),C=t.namespace;t.domain==="firebase.com"&&Gt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!C||C==="undefined")&&t.domain!=="localhost"&&Gt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||vM();const n=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new HE(t.host,t.secure,C,n,B,"",C!==t.subdomain),path:new sB(t.pathString)}},aH=function(e){let B="",t="",C="",n="",r="",i=!0,s="https",a=443;if(typeof e=="string"){let o=e.indexOf("//");o>=0&&(s=e.substring(0,o-1),e=e.substring(o+2));let l=e.indexOf("/");l===-1&&(l=e.length);let c=e.indexOf("?");c===-1&&(c=e.length),B=e.substring(0,Math.min(l,c)),l<c&&(n=iH(e.substring(l,c)));const u=sH(e.substring(Math.min(e.length,c)));o=B.indexOf(":"),o>=0?(i=s==="https"||s==="wss",a=parseInt(B.substring(o+1),10)):o=B.length;const m=B.slice(0,o);if(m.toLowerCase()==="localhost")t="localhost";else if(m.split(".").length<=2)t=m;else{const f=B.indexOf(".");C=B.substring(0,f).toLowerCase(),t=B.substring(f+1),r=C}"ns"in u&&(r=u.ns)}return{host:B,port:a,domain:t,subdomain:C,secure:i,scheme:s,pathString:n,namespace:r}};/**
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
 */class oH{constructor(B,t,C,n){this.eventType=B,this.eventRegistration=t,this.snapshot=C,this.prevName=n}getPath(){const B=this.snapshot.ref;return this.eventType==="value"?B._path:B.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+OB(this.snapshot.exportVal())}}class lH{constructor(B,t,C){this.eventRegistration=B,this.error=t,this.path=C}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class cH{constructor(B,t){this.snapshotCallback=B,this.cancelCallback=t}onValue(B,t){this.snapshotCallback.call(null,B,t)}onCancel(B){return P(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,B)}get hasCancelCallback(){return!!this.cancelCallback}matches(B){return this.snapshotCallback===B.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===B.snapshotCallback.userCallback&&this.snapshotCallback.context===B.snapshotCallback.context}}/**
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
 */class Th{constructor(B,t,C,n){this._repo=B,this._path=t,this._queryParams=C,this._orderByCalled=n}get key(){return Y(this._path)?null:jE(this._path)}get ref(){return new Wt(this._repo,this._path)}get _queryIdentifier(){const B=Hm(this._queryParams),t=sh(B);return t==="{}"?"default":t}get _queryObject(){return Hm(this._queryParams)}isEqual(B){if(B=ye(B),!(B instanceof Th))return!1;const t=this._repo===B._repo,C=ZE(this._path,B._path),n=this._queryIdentifier===B._queryIdentifier;return t&&C&&n}toJSON(){return this.toString()}toString(){return this._repo.toString()+t6(this._path)}}class Wt extends Th{constructor(B,t){super(B,t,new dh,!1)}get parent(){const B=XE(this._path);return B===null?null:new Wt(this._repo,B)}get root(){let B=this;for(;B.parent!==null;)B=B.parent;return B}}class _i{constructor(B,t,C){this._node=B,this.ref=t,this._index=C}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(B){const t=new sB(B),C=nd(this.ref,B);return new _i(this._node.getChild(t),C,bB)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(B){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(C,n)=>B(new _i(n,nd(this.ref,C),bB)))}hasChild(B){const t=new sB(B);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function el(e,B){return e=ye(e),e._checkNotDeleted("ref"),B!==void 0?nd(e._root,B):e._root}function nd(e,B){return e=ye(e),X(e._path)===null?UL("child","path",B,!1):FS("child","path",B,!1),new Wt(e._repo,kB(e._path,B))}function rd(e,B){e=ye(e),QL("set",e._path),KL("set",B,e._path,!1);const t=new Tl;return BH(e._repo,e._path,B,null,t.wrapCallback(()=>{})),t.promise}function $i(e){e=ye(e);const B=new cH(()=>{}),t=new Mh(B);return $L(e._repo,e,t).then(C=>new _i(C,new Wt(e._repo,e._path),e._queryParams.getIndex()))}class Mh{constructor(B){this.callbackContext=B}respondsTo(B){return B==="value"}createEvent(B,t){const C=t._queryParams.getIndex();return new oH("value",this,new _i(B.snapshotNode,new Wt(t._repo,t._path),C))}getEventRunner(B){return B.getEventType()==="cancel"?()=>this.callbackContext.onCancel(B.error):()=>this.callbackContext.onValue(B.snapshot,null)}createCancelEvent(B,t){return this.callbackContext.hasCancelCallback?new lH(this,B,t):null}matches(B){return B instanceof Mh?!B.callbackContext||!this.callbackContext?!0:B.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}uL(Wt);mL(Wt);/**
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
 */const uH="FIREBASE_DATABASE_EMULATOR_HOST",id={};let fH=!1;function dH(e,B,t,C){e.repoInfo_=new HE(`${B}:${t}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),C&&(e.authTokenProvider_=C)}function hH(e,B,t,C,n){let r=C||e.options.databaseURL;r===void 0&&(e.options.projectId||Gt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),zB("Using default host for project ",e.options.projectId),r=`${e.options.projectId}-default-rtdb.firebaseio.com`);let i=_m(r,n),s=i.repoInfo,a,o;typeof process<"u"&&process.env&&(o=process.env[uH]),o?(a=!0,r=`http://${o}?ns=${s.namespace}`,i=_m(r,n),s=i.repoInfo):a=!i.repoInfo.secure;const l=n&&a?new tr(tr.OWNER):new NM(e.name,e.options,B);JL("Invalid Firebase Database URL",i),Y(i.path)||Gt("Database URL must point to the root of a Firebase Database (not including a child path).");const c=mH(s,e,l,new RM(e.name,t));return new gH(c,e)}function pH(e,B){const t=id[B];(!t||t[e.key]!==e)&&Gt(`Database ${B}(${e.repoInfo_}) has already been deleted.`),tH(e),delete t[e.key]}function mH(e,B,t,C){let n=id[B.name];n||(n={},id[B.name]=n);let r=n[e.toURLString()];return r&&Gt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new ZL(e,fH,t,C),n[e.toURLString()]=r,r}class gH{constructor(B,t){this._repoInternal=B,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(qL(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Wt(this._repo,BB())),this._rootInternal}_delete(){return this._rootInternal!==null&&(pH(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(B){this._rootInternal===null&&Gt("Cannot call "+B+" on a deleted database.")}}function _l(e=W1(),B){const t=An(e,"database").getImmediate({identifier:B});if(!t._instanceStarted){const C=hN("database");C&&vH(t,...C)}return t}function vH(e,B,t,C={}){e=ye(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&Gt("Cannot call useEmulator() after instance has already been initialized.");const n=e._repoInternal;let r;if(n.repoInfo_.nodeAdmin)C.mockUserToken&&Gt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new tr(tr.OWNER);else if(C.mockUserToken){const i=typeof C.mockUserToken=="string"?C.mockUserToken:pN(C.mockUserToken,e.app.options.projectId);r=new tr(i)}dH(n,B,t,r)}/**
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
 `+m+s("^")}return" "+a(u)+o}).join(`
`)}toString(){let B=this.showSourceCode();return B&&(B=`

`+B+`
`),this.name+": "+this.message+B}};var Gh=il;il.default=il;var Ds={};Ds.isClean=Symbol("isClean");Ds.my=Symbol("my");const d0={colon:": ",indent:"    ",beforeDecl:`
`,beforeRule:`
`,beforeOpen:" ",beforeClose:`
`,beforeComment:`
`,after:`
`,emptyBody:"",commentLeft:" ",commentRight:" ",semicolon:!1};function hV(e){return e[0].toUpperCase()+e.slice(1)}let od=class{constructor(B){this.builder=B}stringify(B,t){if(!this[B.type])throw new Error("Unknown AST node type "+B.type+". Maybe you need to change PostCSS stringifier.");this[B.type](B,t)}document(B){this.body(B)}root(B){this.body(B),B.raws.after&&this.builder(B.raws.after)}comment(B){let t=this.raw(B,"left","commentLeft"),C=this.raw(B,"right","commentRight");this.builder("/*"+t+B.text+C+"*/",B)}decl(B,t){let C=this.raw(B,"between","colon"),n=B.prop+C+this.rawValue(B,"value");B.important&&(n+=B.raws.important||" !important"),t&&(n+=";"),this.builder(n,B)}rule(B){this.block(B,this.rawValue(B,"selector")),B.raws.ownSemicolon&&this.builder(B.raws.ownSemicolon,B,"end")}atrule(B,t){let C="@"+B.name,n=B.params?this.rawValue(B,"params"):"";if(typeof B.raws.afterName<"u"?C+=B.raws.afterName:n&&(C+=" "),B.nodes)this.block(B,C+n);else{let r=(B.raws.between||"")+(t?";":"");this.builder(C+n+r,B)}}body(B){let t=B.nodes.length-1;for(;t>0&&B.nodes[t].type==="comment";)t-=1;let C=this.raw(B,"semicolon");for(let n=0;n<B.nodes.length;n++){let r=B.nodes[n],i=this.raw(r,"before");i&&this.builder(i),this.stringify(r,t!==n||C)}}block(B,t){let C=this.raw(B,"between","beforeOpen");this.builder(t+C+"{",B,"start");let n;B.nodes&&B.nodes.length?(this.body(B),n=this.raw(B,"after")):n=this.raw(B,"after","emptyBody"),n&&this.builder(n),this.builder("}",B,"end")}raw(B,t,C){let n;if(C||(C=t),t&&(n=B.raws[t],typeof n<"u"))return n;let r=B.parent;if(C==="before"&&(!r||r.type==="root"&&r.first===B||r&&r.type==="document"))return"";if(!r)return d0[C];let i=B.root();if(i.rawCache||(i.rawCache={}),typeof i.rawCache[C]<"u")return i.rawCache[C];if(C==="before"||C==="after")return this.beforeAfter(B,C);{let s="raw"+hV(C);this[s]?n=this[s](i,B):i.walk(a=>{if(n=a.raws[t],typeof n<"u")return!1})}return typeof n>"u"&&(n=d0[C]),i.rawCache[C]=n,n}rawSemicolon(B){let t;return B.walk(C=>{if(C.nodes&&C.nodes.length&&C.last.type==="decl"&&(t=C.raws.semicolon,typeof t<"u"))return!1}),t}rawEmptyBody(B){let t;return B.walk(C=>{if(C.nodes&&C.nodes.length===0&&(t=C.raws.after,typeof t<"u"))return!1}),t}rawIndent(B){if(B.raws.indent)return B.raws.indent;let t;return B.walk(C=>{let n=C.parent;if(n&&n!==B&&n.parent&&n.parent===B&&typeof C.raws.before<"u"){let r=C.raws.before.split(`
`);return t=r[r.length-1],t=t.replace(/\S/g,""),!1}}),t}rawBeforeComment(B,t){let C;return B.walkComments(n=>{if(typeof n.raws.before<"u")return C=n.raws.before,C.includes(`
`)&&(C=C.replace(/[^\n]+$/,"")),!1}),typeof C>"u"?C=this.raw(t,null,"beforeDecl"):C&&(C=C.replace(/\S/g,"")),C}rawBeforeDecl(B,t){let C;return B.walkDecls(n=>{if(typeof n.raws.before<"u")return C=n.raws.before,C.includes(`
`)&&(C=C.replace(/[^\n]+$/,"")),!1}),typeof C>"u"?C=this.raw(t,null,"beforeRule"):C&&(C=C.replace(/\S/g,"")),C}rawBeforeRule(B){let t;return B.walk(C=>{if(C.nodes&&(C.parent!==B||B.first!==C)&&typeof C.raws.before<"u")return t=C.raws.before,t.includes(`
`)&&(t=t.replace(/[^\n]+$/,"")),!1}),t&&(t=t.replace(/\S/g,"")),t}rawBeforeClose(B){let t;return B.walk(C=>{if(C.nodes&&C.nodes.length>0&&typeof C.raws.after<"u")return t=C.raws.after,t.includes(`
`)&&(t=t.replace(/[^\n]+$/,"")),!1}),t&&(t=t.replace(/\S/g,"")),t}rawBeforeOpen(B){let t;return B.walk(C=>{if(C.type!=="decl"&&(t=C.raws.between,typeof t<"u"))return!1}),t}rawColon(B){let t;return B.walkDecls(C=>{if(typeof C.raws.between<"u")return t=C.raws.between.replace(/[^\s:]/g,""),!1}),t}beforeAfter(B,t){let C;B.type==="decl"?C=this.raw(B,null,"beforeDecl"):B.type==="comment"?C=this.raw(B,null,"beforeComment"):t==="before"?C=this.raw(B,null,"beforeRule"):C=this.raw(B,null,"beforeClose");let n=B.parent,r=0;for(;n&&n.type!=="root";)r+=1,n=n.parent;if(C.includes(`
`)){let i=this.raw(B,null,"indent");if(i.length)for(let s=0;s<r;s++)C+=i}return C}rawValue(B,t){let C=B[t],n=B.raws[t];return n&&n.value===C?n.raw:C}};var pb=od;od.default=od;let pV=pb;function ld(e,B){new pV(B).stringify(e)}var ec=ld;ld.default=ld;let{isClean:pa,my:mV}=Ds,gV=Gh,vV=pb,AV=ec;function cd(e,B){let t=new e.constructor;for(let C in e){if(!Object.prototype.hasOwnProperty.call(e,C)||C==="proxyCache")continue;let n=e[C],r=typeof n;C==="parent"&&r==="object"?B&&(t[C]=B):C==="source"?t[C]=n:Array.isArray(n)?t[C]=n.map(i=>cd(i,t)):(r==="object"&&n!==null&&(n=cd(n)),t[C]=n)}return t}let ud=class{constructor(B={}){this.raws={},this[pa]=!1,this[mV]=!0;for(let t in B)if(t==="nodes"){this.nodes=[];for(let C of B[t])typeof C.clone=="function"?this.append(C.clone()):this.append(C)}else this[t]=B[t]}error(B,t={}){if(this.source){let{start:C,end:n}=this.rangeBy(t);return this.source.input.error(B,{line:C.line,column:C.column},{line:n.line,column:n.column},t)}return new gV(B)}warn(B,t,C){let n={node:this};for(let r in C)n[r]=C[r];return B.warn(t,n)}remove(){return this.parent&&this.parent.removeChild(this),this.parent=void 0,this}toString(B=AV){B.stringify&&(B=B.stringify);let t="";return B(this,C=>{t+=C}),t}assign(B={}){for(let t in B)this[t]=B[t];return this}clone(B={}){let t=cd(this);for(let C in B)t[C]=B[C];return t}cloneBefore(B={}){let t=this.clone(B);return this.parent.insertBefore(this,t),t}cloneAfter(B={}){let t=this.clone(B);return this.parent.insertAfter(this,t),t}replaceWith(...B){if(this.parent){let t=this,C=!1;for(let n of B)n===this?C=!0:C?(this.parent.insertAfter(t,n),t=n):this.parent.insertBefore(t,n);C||this.remove()}return this}next(){if(!this.parent)return;let B=this.parent.index(this);return this.parent.nodes[B+1]}prev(){if(!this.parent)return;let B=this.parent.index(this);return this.parent.nodes[B-1]}before(B){return this.parent.insertBefore(this,B),this}after(B){return this.parent.insertAfter(this,B),this}root(){let B=this;for(;B.parent&&B.parent.type!=="document";)B=B.parent;return B}raw(B,t){return new vV().raw(this,B,t)}cleanRaws(B){delete this.raws.before,delete this.raws.after,B||delete this.raws.between}toJSON(B,t){let C={},n=t==null;t=t||new Map;let r=0;for(let i in this){if(!Object.prototype.hasOwnProperty.call(this,i)||i==="parent"||i==="proxyCache")continue;let s=this[i];if(Array.isArray(s))C[i]=s.map(a=>typeof a=="object"&&a.toJSON?a.toJSON(null,t):a);else if(typeof s=="object"&&s.toJSON)C[i]=s.toJSON(null,t);else if(i==="source"){let a=t.get(s.input);a==null&&(a=r,t.set(s.input,r),r++),C[i]={inputId:a,start:s.start,end:s.end}}else C[i]=s}return n&&(C.inputs=[...t.keys()].map(i=>i.toJSON())),C}positionInside(B){let t=this.toString(),C=this.source.start.column,n=this.source.start.line;for(let r=0;r<B;r++)t[r]===`
`?(C=1,n+=1):C+=1;return{line:n,column:C}}positionBy(B){let t=this.source.start;if(B.index)t=this.positionInside(B.index);else if(B.word){let C=this.toString().indexOf(B.word);C!==-1&&(t=this.positionInside(C))}return t}rangeBy(B){let t={line:this.source.start.line,column:this.source.start.column},C=this.source.end?{line:this.source.end.line,column:this.source.end.column+1}:{line:t.line,column:t.column+1};if(B.word){let n=this.toString().indexOf(B.word);n!==-1&&(t=this.positionInside(n),C=this.positionInside(n+B.word.length))}else B.start?t={line:B.start.line,column:B.start.column}:B.index&&(t=this.positionInside(B.index)),B.end?C={line:B.end.line,column:B.end.column}:B.endIndex?C=this.positionInside(B.endIndex):B.index&&(C=this.positionInside(B.index+1));return(C.line<t.line||C.line===t.line&&C.column<=t.column)&&(C={line:t.line,column:t.column+1}),{start:t,end:C}}getProxyProcessor(){return{set(B,t,C){return B[t]===C||(B[t]=C,(t==="prop"||t==="value"||t==="name"||t==="params"||t==="important"||t==="text")&&B.markDirty()),!0},get(B,t){return t==="proxyOf"?B:t==="root"?()=>B.root().toProxy():B[t]}}}toProxy(){return this.proxyCache||(this.proxyCache=new Proxy(this,this.getProxyProcessor())),this.proxyCache}addToError(B){if(B.postcssNode=this,B.stack&&this.source&&/\n\s{4}at /.test(B.stack)){let t=this.source;B.stack=B.stack.replace(/\n\s{4}at /,`$&${t.input.from}:${t.start.line}:${t.start.column}$&`)}return B}markDirty(){if(this[pa]){this[pa]=!1;let B=this;for(;B=B.parent;)B[pa]=!1}}get proxyOf(){return this}};var tc=ud;ud.default=ud;let yV=tc,fd=class extends yV{constructor(B){B&&typeof B.value<"u"&&typeof B.value!="string"&&(B={...B,value:String(B.value)}),super(B),this.type="decl"}get variable(){return this.prop.startsWith("--")||this.prop[0]==="$"}};var Cc=fd;fd.default=fd;let EV="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",SV=(e,B=21)=>(t=B)=>{let C="",n=t;for(;n--;)C+=e[Math.random()*e.length|0];return C},IV=(e=21)=>{let B="",t=e;for(;t--;)B+=EV[Math.random()*64|0];return B};const bV=Object.freeze(Object.defineProperty({__proto__:null,customAlphabet:SV,nanoid:IV},Symbol.toStringTag,{value:"Module"})),wV=Hg(bV);let{SourceMapConsumer:h0,SourceMapGenerator:p0}=Qe,{existsSync:DV,readFileSync:PV}=Qe,{dirname:pu,join:RV}=Qe;function NV(e){return Buffer?Buffer.from(e,"base64").toString():window.atob(e)}let dd=class{constructor(B,t){if(t.map===!1)return;this.loadAnnotation(B),this.inline=this.startWith(this.annotation,"data:");let C=t.map?t.map.prev:void 0,n=this.loadMap(t.from,C);!this.mapFile&&t.from&&(this.mapFile=t.from),this.mapFile&&(this.root=pu(this.mapFile)),n&&(this.text=n)}consumer(){return this.consumerCache||(this.consumerCache=new h0(this.text)),this.consumerCache}withContent(){return!!(this.consumer().sourcesContent&&this.consumer().sourcesContent.length>0)}startWith(B,t){return B?B.substr(0,t.length)===t:!1}getAnnotationURL(B){return B.replace(/^\/\*\s*# sourceMappingURL=/,"").trim()}loadAnnotation(B){let t=B.match(/\/\*\s*# sourceMappingURL=/gm);if(!t)return;let C=B.lastIndexOf(t.pop()),n=B.indexOf("*/",C);C>-1&&n>-1&&(this.annotation=this.getAnnotationURL(B.substring(C,n)))}decodeInline(B){let t=/^data:application\/json;charset=utf-?8;base64,/,C=/^data:application\/json;base64,/,n=/^data:application\/json;charset=utf-?8,/,r=/^data:application\/json,/;if(n.test(B)||r.test(B))return decodeURIComponent(B.substr(RegExp.lastMatch.length));if(t.test(B)||C.test(B))return NV(B.substr(RegExp.lastMatch.length));let i=B.match(/data:application\/json;([^,]+),/)[1];throw new Error("Unsupported source map encoding "+i)}loadFile(B){if(this.root=pu(B),DV(B))return this.mapFile=B,PV(B,"utf-8").toString().trim()}loadMap(B,t){if(t===!1)return!1;if(t){if(typeof t=="string")return t;if(typeof t=="function"){let C=t(B);if(C){let n=this.loadFile(C);if(!n)throw new Error("Unable to load previous source map: "+C.toString());return n}}else{if(t instanceof h0)return p0.fromSourceMap(t).toString();if(t instanceof p0)return t.toString();if(this.isMap(t))return JSON.stringify(t);throw new Error("Unsupported previous source map format: "+t.toString())}}else{if(this.inline)return this.decodeInline(this.annotation);if(this.annotation){let C=this.annotation;return B&&(C=RV(pu(B),C)),this.loadFile(C)}}}isMap(B){return typeof B!="object"?!1:typeof B.mappings=="string"||typeof B._mappings=="string"||Array.isArray(B.sections)}};var mb=dd;dd.default=dd;let{SourceMapConsumer:FV,SourceMapGenerator:OV}=Qe,{fileURLToPath:m0,pathToFileURL:ma}=Qe,{resolve:hd,isAbsolute:pd}=Qe,{nanoid:kV}=wV,mu=Qe,g0=Gh,TV=mb,gu=Symbol("fromOffsetCache"),MV=Boolean(FV&&OV),v0=Boolean(hd&&pd),sl=class{constructor(B,t={}){if(B===null||typeof B>"u"||typeof B=="object"&&!B.toString)throw new Error(`PostCSS received ${B} instead of CSS string`);if(this.css=B.toString(),this.css[0]==="\uFEFF"||this.css[0]==="￾"?(this.hasBOM=!0,this.css=this.css.slice(1)):this.hasBOM=!1,t.from&&(!v0||/^\w+:\/\//.test(t.from)||pd(t.from)?this.file=t.from:this.file=hd(t.from)),v0&&MV){let C=new TV(this.css,t);if(C.text){this.map=C;let n=C.consumer().file;!this.file&&n&&(this.file=this.mapResolve(n))}}this.file||(this.id="<input css "+kV(6)+">"),this.map&&(this.map.file=this.from)}fromOffset(B){let t,C;if(this[gu])C=this[gu];else{let r=this.css.split(`
`);C=new Array(r.length);let i=0;for(let s=0,a=r.length;s<a;s++)C[s]=i,i+=r[s].length+1;this[gu]=C}t=C[C.length-1];let n=0;if(B>=t)n=C.length-1;else{let r=C.length-2,i;for(;n<r;)if(i=n+(r-n>>1),B<C[i])r=i-1;else if(B>=C[i+1])n=i+1;else{n=i;break}}return{line:n+1,col:B-C[n]+1}}error(B,t,C,n={}){let r,i,s;if(t&&typeof t=="object"){let o=t,l=C;if(typeof o.offset=="number"){let c=this.fromOffset(o.offset);t=c.line,C=c.col}else t=o.line,C=o.column;if(typeof l.offset=="number"){let c=this.fromOffset(l.offset);i=c.line,s=c.col}else i=l.line,s=l.column}else if(!C){let o=this.fromOffset(t);t=o.line,C=o.col}let a=this.origin(t,C,i,s);return a?r=new g0(B,a.endLine===void 0?a.line:{line:a.line,column:a.column},a.endLine===void 0?a.column:{line:a.endLine,column:a.endColumn},a.source,a.file,n.plugin):r=new g0(B,i===void 0?t:{line:t,column:C},i===void 0?C:{line:i,column:s},this.css,this.file,n.plugin),r.input={line:t,column:C,endLine:i,endColumn:s,source:this.css},this.file&&(ma&&(r.input.url=ma(this.file).toString()),r.input.file=this.file),r}origin(B,t,C,n){if(!this.map)return!1;let r=this.map.consumer(),i=r.originalPositionFor({line:B,column:t});if(!i.source)return!1;let s;typeof C=="number"&&(s=r.originalPositionFor({line:C,column:n}));let a;pd(i.source)?a=ma(i.source):a=new URL(i.source,this.map.consumer().sourceRoot||ma(this.map.mapFile));let o={url:a.toString(),line:i.line,column:i.column,endLine:s&&s.line,endColumn:s&&s.column};if(a.protocol==="file:")if(m0)o.file=m0(a);else throw new Error("file: protocol is not available in this PostCSS build");let l=r.sourceContentFor(i.source);return l&&(o.source=l),o}mapResolve(B){return/^\w+:\/\//.test(B)?B:hd(this.map.consumer().sourceRoot||this.map.root||".",B)}get from(){return this.file||this.id}toJSON(){let B={};for(let t of["hasBOM","css","file","id"])this[t]!=null&&(B[t]=this[t]);return this.map&&(B.map={...this.map},B.map.consumerCache&&(B.map.consumerCache=void 0)),B}};var nc=sl;sl.default=sl;mu&&mu.registerInput&&mu.registerInput(sl);let{SourceMapConsumer:gb,SourceMapGenerator:Bo}=Qe,{dirname:eo,resolve:vb,relative:Ab,sep:yb}=Qe,{pathToFileURL:A0}=Qe,LV=nc,HV=Boolean(gb&&Bo),xV=Boolean(eo&&vb&&Ab&&yb),GV=class{constructor(B,t,C,n){this.stringify=B,this.mapOpts=C.map||{},this.root=t,this.opts=C,this.css=n,this.usesFileUrls=!this.mapOpts.from&&this.mapOpts.absolute}isMap(){return typeof this.opts.map<"u"?!!this.opts.map:this.previous().length>0}previous(){if(!this.previousMaps)if(this.previousMaps=[],this.root)this.root.walk(B=>{if(B.source&&B.source.input.map){let t=B.source.input.map;this.previousMaps.includes(t)||this.previousMaps.push(t)}});else{let B=new LV(this.css,this.opts);B.map&&this.previousMaps.push(B.map)}return this.previousMaps}isInline(){if(typeof this.mapOpts.inline<"u")return this.mapOpts.inline;let B=this.mapOpts.annotation;return typeof B<"u"&&B!==!0?!1:this.previous().length?this.previous().some(t=>t.inline):!0}isSourcesContent(){return typeof this.mapOpts.sourcesContent<"u"?this.mapOpts.sourcesContent:this.previous().length?this.previous().some(B=>B.withContent()):!0}clearAnnotation(){if(this.mapOpts.annotation!==!1)if(this.root){let B;for(let t=this.root.nodes.length-1;t>=0;t--)B=this.root.nodes[t],B.type==="comment"&&B.text.indexOf("# sourceMappingURL=")===0&&this.root.removeChild(t)}else this.css&&(this.css=this.css.replace(/(\n)?\/\*#[\S\s]*?\*\/$/gm,""))}setSourcesContent(){let B={};if(this.root)this.root.walk(t=>{if(t.source){let C=t.source.input.from;if(C&&!B[C]){B[C]=!0;let n=this.usesFileUrls?this.toFileUrl(C):this.toUrl(this.path(C));this.map.setSourceContent(n,t.source.input.css)}}});else if(this.css){let t=this.opts.from?this.toUrl(this.path(this.opts.from)):"<no source>";this.map.setSourceContent(t,this.css)}}applyPrevMaps(){for(let B of this.previous()){let t=this.toUrl(this.path(B.file)),C=B.root||eo(B.file),n;this.mapOpts.sourcesContent===!1?(n=new gb(B.text),n.sourcesContent&&(n.sourcesContent=n.sourcesContent.map(()=>null))):n=B.consumer(),this.map.applySourceMap(n,t,this.toUrl(this.path(C)))}}isAnnotation(){return this.isInline()?!0:typeof this.mapOpts.annotation<"u"?this.mapOpts.annotation:this.previous().length?this.previous().some(B=>B.annotation):!0}toBase64(B){return Buffer?Buffer.from(B).toString("base64"):window.btoa(unescape(encodeURIComponent(B)))}addAnnotation(){let B;this.isInline()?B="data:application/json;base64,"+this.toBase64(this.map.toString()):typeof this.mapOpts.annotation=="string"?B=this.mapOpts.annotation:typeof this.mapOpts.annotation=="function"?B=this.mapOpts.annotation(this.opts.to,this.root):B=this.outputFile()+".map";let t=`
`;this.css.includes(`\r
`)&&(t=`\r
`),this.css+=t+"/*# sourceMappingURL="+B+" */"}outputFile(){return this.opts.to?this.path(this.opts.to):this.opts.from?this.path(this.opts.from):"to.css"}generateMap(){if(this.root)this.generateString();else if(this.previous().length===1){let B=this.previous()[0].consumer();B.file=this.outputFile(),this.map=Bo.fromSourceMap(B)}else this.map=new Bo({file:this.outputFile()}),this.map.addMapping({source:this.opts.from?this.toUrl(this.path(this.opts.from)):"<no source>",generated:{line:1,column:0},original:{line:1,column:0}});return this.isSourcesContent()&&this.setSourcesContent(),this.root&&this.previous().length>0&&this.applyPrevMaps(),this.isAnnotation()&&this.addAnnotation(),this.isInline()?[this.css]:[this.css,this.map]}path(B){if(B.indexOf("<")===0||/^\w+:\/\//.test(B)||this.mapOpts.absolute)return B;let t=this.opts.to?eo(this.opts.to):".";return typeof this.mapOpts.annotation=="string"&&(t=eo(vb(t,this.mapOpts.annotation))),B=Ab(t,B),B}toUrl(B){return yb==="\\"&&(B=B.replace(/\\/g,"/")),encodeURI(B).replace(/[#?]/g,encodeURIComponent)}toFileUrl(B){if(A0)return A0(B).toString();throw new Error("`map.absolute` option is not available in this PostCSS build")}sourcePath(B){return this.mapOpts.from?this.toUrl(this.mapOpts.from):this.usesFileUrls?this.toFileUrl(B.source.input.from):this.toUrl(this.path(B.source.input.from))}generateString(){this.css="",this.map=new Bo({file:this.outputFile()});let B=1,t=1,C="<no source>",n={source:"",generated:{line:0,column:0},original:{line:0,column:0}},r,i;this.stringify(this.root,(s,a,o)=>{if(this.css+=s,a&&o!=="end"&&(n.generated.line=B,n.generated.column=t-1,a.source&&a.source.start?(n.source=this.sourcePath(a),n.original.line=a.source.start.line,n.original.column=a.source.start.column-1,this.map.addMapping(n)):(n.source=C,n.original.line=1,n.original.column=0,this.map.addMapping(n))),r=s.match(/\n/g),r?(B+=r.length,i=s.lastIndexOf(`
`),t=s.length-i):t+=s.length,a&&o!=="start"){let l=a.parent||{raws:{}};(!(a.type==="decl"||a.type==="atrule"&&!a.nodes)||a!==l.last||l.raws.semicolon)&&(a.source&&a.source.end?(n.source=this.sourcePath(a),n.original.line=a.source.end.line,n.original.column=a.source.end.column-1,n.generated.line=B,n.generated.column=t-2,this.map.addMapping(n)):(n.source=C,n.original.line=1,n.original.column=0,n.generated.line=B,n.generated.column=t-1,this.map.addMapping(n)))}})}generate(){if(this.clearAnnotation(),xV&&HV&&this.isMap())return this.generateMap();{let B="";return this.stringify(this.root,t=>{B+=t}),[B]}}};var Eb=GV;let KV=tc,md=class extends KV{constructor(B){super(B),this.type="comment"}};var rc=md;md.default=md;let{isClean:Sb,my:Ib}=Ds,bb=Cc,wb=rc,UV=tc,Db,Kh,Uh,Pb;function Rb(e){return e.map(B=>(B.nodes&&(B.nodes=Rb(B.nodes)),delete B.source,B))}function Nb(e){if(e[Sb]=!1,e.proxyOf.nodes)for(let B of e.proxyOf.nodes)Nb(B)}let vt=class extends UV{push(B){return B.parent=this,this.proxyOf.nodes.push(B),this}each(B){if(!this.proxyOf.nodes)return;let t=this.getIterator(),C,n;for(;this.indexes[t]<this.proxyOf.nodes.length&&(C=this.indexes[t],n=B(this.proxyOf.nodes[C],C),n!==!1);)this.indexes[t]+=1;return delete this.indexes[t],n}walk(B){return this.each((t,C)=>{let n;try{n=B(t,C)}catch(r){throw t.addToError(r)}return n!==!1&&t.walk&&(n=t.walk(B)),n})}walkDecls(B,t){return t?B instanceof RegExp?this.walk((C,n)=>{if(C.type==="decl"&&B.test(C.prop))return t(C,n)}):this.walk((C,n)=>{if(C.type==="decl"&&C.prop===B)return t(C,n)}):(t=B,this.walk((C,n)=>{if(C.type==="decl")return t(C,n)}))}walkRules(B,t){return t?B instanceof RegExp?this.walk((C,n)=>{if(C.type==="rule"&&B.test(C.selector))return t(C,n)}):this.walk((C,n)=>{if(C.type==="rule"&&C.selector===B)return t(C,n)}):(t=B,this.walk((C,n)=>{if(C.type==="rule")return t(C,n)}))}walkAtRules(B,t){return t?B instanceof RegExp?this.walk((C,n)=>{if(C.type==="atrule"&&B.test(C.name))return t(C,n)}):this.walk((C,n)=>{if(C.type==="atrule"&&C.name===B)return t(C,n)}):(t=B,this.walk((C,n)=>{if(C.type==="atrule")return t(C,n)}))}walkComments(B){return this.walk((t,C)=>{if(t.type==="comment")return B(t,C)})}append(...B){for(let t of B){let C=this.normalize(t,this.last);for(let n of C)this.proxyOf.nodes.push(n)}return this.markDirty(),this}prepend(...B){B=B.reverse();for(let t of B){let C=this.normalize(t,this.first,"prepend").reverse();for(let n of C)this.proxyOf.nodes.unshift(n);for(let n in this.indexes)this.indexes[n]=this.indexes[n]+C.length}return this.markDirty(),this}cleanRaws(B){if(super.cleanRaws(B),this.nodes)for(let t of this.nodes)t.cleanRaws(B)}insertBefore(B,t){let C=this.index(B),n=C===0?"prepend":!1,r=this.normalize(t,this.proxyOf.nodes[C],n).reverse();C=this.index(B);for(let s of r)this.proxyOf.nodes.splice(C,0,s);let i;for(let s in this.indexes)i=this.indexes[s],C<=i&&(this.indexes[s]=i+r.length);return this.markDirty(),this}insertAfter(B,t){let C=this.index(B),n=this.normalize(t,this.proxyOf.nodes[C]).reverse();C=this.index(B);for(let i of n)this.proxyOf.nodes.splice(C+1,0,i);let r;for(let i in this.indexes)r=this.indexes[i],C<r&&(this.indexes[i]=r+n.length);return this.markDirty(),this}removeChild(B){B=this.index(B),this.proxyOf.nodes[B].parent=void 0,this.proxyOf.nodes.splice(B,1);let t;for(let C in this.indexes)t=this.indexes[C],t>=B&&(this.indexes[C]=t-1);return this.markDirty(),this}removeAll(){for(let B of this.proxyOf.nodes)B.parent=void 0;return this.proxyOf.nodes=[],this.markDirty(),this}replaceValues(B,t,C){return C||(C=t,t={}),this.walkDecls(n=>{t.props&&!t.props.includes(n.prop)||t.fast&&!n.value.includes(t.fast)||(n.value=n.value.replace(B,C))}),this.markDirty(),this}every(B){return this.nodes.every(B)}some(B){return this.nodes.some(B)}index(B){return typeof B=="number"?B:(B.proxyOf&&(B=B.proxyOf),this.proxyOf.nodes.indexOf(B))}get first(){if(this.proxyOf.nodes)return this.proxyOf.nodes[0]}get last(){if(this.proxyOf.nodes)return this.proxyOf.nodes[this.proxyOf.nodes.length-1]}normalize(B,t){if(typeof B=="string")B=Rb(Db(B).nodes);else if(Array.isArray(B)){B=B.slice(0);for(let n of B)n.parent&&n.parent.removeChild(n,"ignore")}else if(B.type==="root"&&this.type!=="document"){B=B.nodes.slice(0);for(let n of B)n.parent&&n.parent.removeChild(n,"ignore")}else if(B.type)B=[B];else if(B.prop){if(typeof B.value>"u")throw new Error("Value field is missed in node creation");typeof B.value!="string"&&(B.value=String(B.value)),B=[new bb(B)]}else if(B.selector)B=[new Kh(B)];else if(B.name)B=[new Uh(B)];else if(B.text)B=[new wb(B)];else throw new Error("Unknown node type in node creation");return B.map(n=>(n[Ib]||vt.rebuild(n),n=n.proxyOf,n.parent&&n.parent.removeChild(n),n[Sb]&&Nb(n),typeof n.raws.before>"u"&&t&&typeof t.raws.before<"u"&&(n.raws.before=t.raws.before.replace(/\S/g,"")),n.parent=this.proxyOf,n))}getProxyProcessor(){return{set(B,t,C){return B[t]===C||(B[t]=C,(t==="name"||t==="params"||t==="selector")&&B.markDirty()),!0},get(B,t){return t==="proxyOf"?B:B[t]?t==="each"||typeof t=="string"&&t.startsWith("walk")?(...C)=>B[t](...C.map(n=>typeof n=="function"?(r,i)=>n(r.toProxy(),i):n)):t==="every"||t==="some"?C=>B[t]((n,...r)=>C(n.toProxy(),...r)):t==="root"?()=>B.root().toProxy():t==="nodes"?B.nodes.map(C=>C.toProxy()):t==="first"||t==="last"?B[t].toProxy():B[t]:B[t]}}}getIterator(){this.lastEach||(this.lastEach=0),this.indexes||(this.indexes={}),this.lastEach+=1;let B=this.lastEach;return this.indexes[B]=0,B}};vt.registerParse=e=>{Db=e};vt.registerRule=e=>{Kh=e};vt.registerAtRule=e=>{Uh=e};vt.registerRoot=e=>{Pb=e};var Sn=vt;vt.default=vt;vt.rebuild=e=>{e.type==="atrule"?Object.setPrototypeOf(e,Uh.prototype):e.type==="rule"?Object.setPrototypeOf(e,Kh.prototype):e.type==="decl"?Object.setPrototypeOf(e,bb.prototype):e.type==="comment"?Object.setPrototypeOf(e,wb.prototype):e.type==="root"&&Object.setPrototypeOf(e,Pb.prototype),e[Ib]=!0,e.nodes&&e.nodes.forEach(B=>{vt.rebuild(B)})};let QV=Sn,Fb,Ob,Bs=class extends QV{constructor(B){super({type:"document",...B}),this.nodes||(this.nodes=[])}toResult(B={}){return new Fb(new Ob,this,B).stringify()}};Bs.registerLazyResult=e=>{Fb=e};Bs.registerProcessor=e=>{Ob=e};var Qh=Bs;Bs.default=Bs;let gd=class{constructor(B,t={}){if(this.type="warning",this.text=B,t.node&&t.node.source){let C=t.node.rangeBy(t);this.line=C.start.line,this.column=C.start.column,this.endLine=C.end.line,this.endColumn=C.end.column}for(let C in t)this[C]=t[C]}toString(){return this.node?this.node.error(this.text,{plugin:this.plugin,index:this.index,word:this.word}).message:this.plugin?this.plugin+": "+this.text:this.text}};var kb=gd;gd.default=gd;let JV=kb,vd=class{constructor(B,t,C){this.processor=B,this.messages=[],this.root=t,this.opts=C,this.css=void 0,this.map=void 0}toString(){return this.css}warn(B,t={}){t.plugin||this.lastPlugin&&this.lastPlugin.postcssPlugin&&(t.plugin=this.lastPlugin.postcssPlugin);let C=new JV(B,t);return this.messages.push(C),C}warnings(){return this.messages.filter(B=>B.type==="warning")}get content(){return this.css}};var Jh=vd;vd.default=vd;const vu="'".charCodeAt(0),y0='"'.charCodeAt(0),ga="\\".charCodeAt(0),E0="/".charCodeAt(0),va=`
`.charCodeAt(0),Xr=" ".charCodeAt(0),Aa="\f".charCodeAt(0),ya="	".charCodeAt(0),Ea="\r".charCodeAt(0),VV="[".charCodeAt(0),WV="]".charCodeAt(0),jV="(".charCodeAt(0),YV=")".charCodeAt(0),XV="{".charCodeAt(0),ZV="}".charCodeAt(0),qV=";".charCodeAt(0),zV="*".charCodeAt(0),_V=":".charCodeAt(0),$V="@".charCodeAt(0),Sa=/[\t\n\f\r "#'()/;[\\\]{}]/g,Ia=/[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,BW=/.[\n"'(/\\]/,S0=/[\da-f]/i;var eW=function(B,t={}){let C=B.css.valueOf(),n=t.ignoreErrors,r,i,s,a,o,l,c,u,m,f,g=C.length,p=0,d=[],h=[];function v(){return p}function A(y){throw B.error("Unclosed "+y,p)}function E(){return h.length===0&&p>=g}function w(y){if(h.length)return h.pop();if(p>=g)return;let I=y?y.ignoreUnclosed:!1;switch(r=C.charCodeAt(p),r){case va:case Xr:case ya:case Ea:case Aa:{i=p;do i+=1,r=C.charCodeAt(i);while(r===Xr||r===va||r===ya||r===Ea||r===Aa);f=["space",C.slice(p,i)],p=i-1;break}case VV:case WV:case XV:case ZV:case _V:case qV:case YV:{let M=String.fromCharCode(r);f=[M,M,p];break}case jV:{if(u=d.length?d.pop()[1]:"",m=C.charCodeAt(p+1),u==="url"&&m!==vu&&m!==y0&&m!==Xr&&m!==va&&m!==ya&&m!==Aa&&m!==Ea){i=p;do{if(l=!1,i=C.indexOf(")",i+1),i===-1)if(n||I){i=p;break}else A("bracket");for(c=i;C.charCodeAt(c-1)===ga;)c-=1,l=!l}while(l);f=["brackets",C.slice(p,i+1),p,i],p=i}else i=C.indexOf(")",p+1),a=C.slice(p,i+1),i===-1||BW.test(a)?f=["(","(",p]:(f=["brackets",a,p,i],p=i);break}case vu:case y0:{s=r===vu?"'":'"',i=p;do{if(l=!1,i=C.indexOf(s,i+1),i===-1)if(n||I){i=p+1;break}else A("string");for(c=i;C.charCodeAt(c-1)===ga;)c-=1,l=!l}while(l);f=["string",C.slice(p,i+1),p,i],p=i;break}case $V:{Sa.lastIndex=p+1,Sa.test(C),Sa.lastIndex===0?i=C.length-1:i=Sa.lastIndex-2,f=["at-word",C.slice(p,i+1),p,i],p=i;break}case ga:{for(i=p,o=!0;C.charCodeAt(i+1)===ga;)i+=1,o=!o;if(r=C.charCodeAt(i+1),o&&r!==E0&&r!==Xr&&r!==va&&r!==ya&&r!==Ea&&r!==Aa&&(i+=1,S0.test(C.charAt(i)))){for(;S0.test(C.charAt(i+1));)i+=1;C.charCodeAt(i+1)===Xr&&(i+=1)}f=["word",C.slice(p,i+1),p,i],p=i;break}default:{r===E0&&C.charCodeAt(p+1)===zV?(i=C.indexOf("*/",p+2)+1,i===0&&(n||I?i=C.length:A("comment")),f=["comment",C.slice(p,i+1),p,i],p=i):(Ia.lastIndex=p+1,Ia.test(C),Ia.lastIndex===0?i=C.length-1:i=Ia.lastIndex-2,f=["word",C.slice(p,i+1),p,i],d.push(f),p=i);break}}return p++,f}function S(y){h.push(y)}return{back:S,nextToken:w,endOfFile:E,position:v}};let Tb=Sn,al=class extends Tb{constructor(B){super(B),this.type="atrule"}append(...B){return this.proxyOf.nodes||(this.nodes=[]),super.append(...B)}prepend(...B){return this.proxyOf.nodes||(this.nodes=[]),super.prepend(...B)}};var Vh=al;al.default=al;Tb.registerAtRule(al);let Mb=Sn,Lb,Hb,gr=class extends Mb{constructor(B){super(B),this.type="root",this.nodes||(this.nodes=[])}removeChild(B,t){let C=this.index(B);return!t&&C===0&&this.nodes.length>1&&(this.nodes[1].raws.before=this.nodes[C].raws.before),super.removeChild(B)}normalize(B,t,C){let n=super.normalize(B);if(t){if(C==="prepend")this.nodes.length>1?t.raws.before=this.nodes[1].raws.before:delete t.raws.before;else if(this.first!==t)for(let r of n)r.raws.before=t.raws.before}return n}toResult(B={}){return new Lb(new Hb,this,B).stringify()}};gr.registerLazyResult=e=>{Lb=e};gr.registerProcessor=e=>{Hb=e};var Ps=gr;gr.default=gr;Mb.registerRoot(gr);let es={split(e,B,t){let C=[],n="",r=!1,i=0,s=!1,a="",o=!1;for(let l of e)o?o=!1:l==="\\"?o=!0:s?l===a&&(s=!1):l==='"'||l==="'"?(s=!0,a=l):l==="("?i+=1:l===")"?i>0&&(i-=1):i===0&&B.includes(l)&&(r=!0),r?(n!==""&&C.push(n.trim()),n="",r=!1):n+=l;return(t||n!=="")&&C.push(n.trim()),C},space(e){let B=[" ",`
`,"	"];return es.split(e,B)},comma(e){return es.split(e,[","],!0)}};var xb=es;es.default=es;let Gb=Sn,tW=xb,ol=class extends Gb{constructor(B){super(B),this.type="rule",this.nodes||(this.nodes=[])}get selectors(){return tW.comma(this.selector)}set selectors(B){let t=this.selector?this.selector.match(/,\s*/):null,C=t?t[0]:","+this.raw("between","beforeOpen");this.selector=B.join(C)}};var Wh=ol;ol.default=ol;Gb.registerRule(ol);let CW=Cc,nW=eW,rW=rc,iW=Vh,sW=Ps,I0=Wh;const b0={empty:!0,space:!0};function aW(e){for(let B=e.length-1;B>=0;B--){let t=e[B],C=t[3]||t[2];if(C)return C}}let oW=class{constructor(B){this.input=B,this.root=new sW,this.current=this.root,this.spaces="",this.semicolon=!1,this.customProperty=!1,this.createTokenizer(),this.root.source={input:B,start:{offset:0,line:1,column:1}}}createTokenizer(){this.tokenizer=nW(this.input)}parse(){let B;for(;!this.tokenizer.endOfFile();)switch(B=this.tokenizer.nextToken(),B[0]){case"space":this.spaces+=B[1];break;case";":this.freeSemicolon(B);break;case"}":this.end(B);break;case"comment":this.comment(B);break;case"at-word":this.atrule(B);break;case"{":this.emptyRule(B);break;default:this.other(B);break}this.endFile()}comment(B){let t=new rW;this.init(t,B[2]),t.source.end=this.getPosition(B[3]||B[2]);let C=B[1].slice(2,-2);if(/^\s*$/.test(C))t.text="",t.raws.left=C,t.raws.right="";else{let n=C.match(/^(\s*)([^]*\S)(\s*)$/);t.text=n[2],t.raws.left=n[1],t.raws.right=n[3]}}emptyRule(B){let t=new I0;this.init(t,B[2]),t.selector="",t.raws.between="",this.current=t}other(B){let t=!1,C=null,n=!1,r=null,i=[],s=B[1].startsWith("--"),a=[],o=B;for(;o;){if(C=o[0],a.push(o),C==="("||C==="[")r||(r=o),i.push(C==="("?")":"]");else if(s&&n&&C==="{")r||(r=o),i.push("}");else if(i.length===0)if(C===";")if(n){this.decl(a,s);return}else break;else if(C==="{"){this.rule(a);return}else if(C==="}"){this.tokenizer.back(a.pop()),t=!0;break}else C===":"&&(n=!0);else C===i[i.length-1]&&(i.pop(),i.length===0&&(r=null));o=this.tokenizer.nextToken()}if(this.tokenizer.endOfFile()&&(t=!0),i.length>0&&this.unclosedBracket(r),t&&n){if(!s)for(;a.length&&(o=a[a.length-1][0],!(o!=="space"&&o!=="comment"));)this.tokenizer.back(a.pop());this.decl(a,s)}else this.unknownWord(a)}rule(B){B.pop();let t=new I0;this.init(t,B[0][2]),t.raws.between=this.spacesAndCommentsFromEnd(B),this.raw(t,"selector",B),this.current=t}decl(B,t){let C=new CW;this.init(C,B[0][2]);let n=B[B.length-1];for(n[0]===";"&&(this.semicolon=!0,B.pop()),C.source.end=this.getPosition(n[3]||n[2]||aW(B));B[0][0]!=="word";)B.length===1&&this.unknownWord(B),C.raws.before+=B.shift()[1];for(C.source.start=this.getPosition(B[0][2]),C.prop="";B.length;){let o=B[0][0];if(o===":"||o==="space"||o==="comment")break;C.prop+=B.shift()[1]}C.raws.between="";let r;for(;B.length;)if(r=B.shift(),r[0]===":"){C.raws.between+=r[1];break}else r[0]==="word"&&/\w/.test(r[1])&&this.unknownWord([r]),C.raws.between+=r[1];(C.prop[0]==="_"||C.prop[0]==="*")&&(C.raws.before+=C.prop[0],C.prop=C.prop.slice(1));let i=[],s;for(;B.length&&(s=B[0][0],!(s!=="space"&&s!=="comment"));)i.push(B.shift());this.precheckMissedSemicolon(B);for(let o=B.length-1;o>=0;o--){if(r=B[o],r[1].toLowerCase()==="!important"){C.important=!0;let l=this.stringFrom(B,o);l=this.spacesFromEnd(B)+l,l!==" !important"&&(C.raws.important=l);break}else if(r[1].toLowerCase()==="important"){let l=B.slice(0),c="";for(let u=o;u>0;u--){let m=l[u][0];if(c.trim().indexOf("!")===0&&m!=="space")break;c=l.pop()[1]+c}c.trim().indexOf("!")===0&&(C.important=!0,C.raws.important=c,B=l)}if(r[0]!=="space"&&r[0]!=="comment")break}B.some(o=>o[0]!=="space"&&o[0]!=="comment")&&(C.raws.between+=i.map(o=>o[1]).join(""),i=[]),this.raw(C,"value",i.concat(B),t),C.value.includes(":")&&!t&&this.checkMissedSemicolon(B)}atrule(B){let t=new iW;t.name=B[1].slice(1),t.name===""&&this.unnamedAtrule(t,B),this.init(t,B[2]);let C,n,r,i=!1,s=!1,a=[],o=[];for(;!this.tokenizer.endOfFile();){if(B=this.tokenizer.nextToken(),C=B[0],C==="("||C==="["?o.push(C==="("?")":"]"):C==="{"&&o.length>0?o.push("}"):C===o[o.length-1]&&o.pop(),o.length===0)if(C===";"){t.source.end=this.getPosition(B[2]),this.semicolon=!0;break}else if(C==="{"){s=!0;break}else if(C==="}"){if(a.length>0){for(r=a.length-1,n=a[r];n&&n[0]==="space";)n=a[--r];n&&(t.source.end=this.getPosition(n[3]||n[2]))}this.end(B);break}else a.push(B);else a.push(B);if(this.tokenizer.endOfFile()){i=!0;break}}t.raws.between=this.spacesAndCommentsFromEnd(a),a.length?(t.raws.afterName=this.spacesAndCommentsFromStart(a),this.raw(t,"params",a),i&&(B=a[a.length-1],t.source.end=this.getPosition(B[3]||B[2]),this.spaces=t.raws.between,t.raws.between="")):(t.raws.afterName="",t.params=""),s&&(t.nodes=[],this.current=t)}end(B){this.current.nodes&&this.current.nodes.length&&(this.current.raws.semicolon=this.semicolon),this.semicolon=!1,this.current.raws.after=(this.current.raws.after||"")+this.spaces,this.spaces="",this.current.parent?(this.current.source.end=this.getPosition(B[2]),this.current=this.current.parent):this.unexpectedClose(B)}endFile(){this.current.parent&&this.unclosedBlock(),this.current.nodes&&this.current.nodes.length&&(this.current.raws.semicolon=this.semicolon),this.current.raws.after=(this.current.raws.after||"")+this.spaces}freeSemicolon(B){if(this.spaces+=B[1],this.current.nodes){let t=this.current.nodes[this.current.nodes.length-1];t&&t.type==="rule"&&!t.raws.ownSemicolon&&(t.raws.ownSemicolon=this.spaces,this.spaces="")}}getPosition(B){let t=this.input.fromOffset(B);return{offset:B,line:t.line,column:t.col}}init(B,t){this.current.push(B),B.source={start:this.getPosition(t),input:this.input},B.raws.before=this.spaces,this.spaces="",B.type!=="comment"&&(this.semicolon=!1)}raw(B,t,C,n){let r,i,s=C.length,a="",o=!0,l,c;for(let u=0;u<s;u+=1)r=C[u],i=r[0],i==="space"&&u===s-1&&!n?o=!1:i==="comment"?(c=C[u-1]?C[u-1][0]:"empty",l=C[u+1]?C[u+1][0]:"empty",!b0[c]&&!b0[l]?a.slice(-1)===","?o=!1:a+=r[1]:o=!1):a+=r[1];if(!o){let u=C.reduce((m,f)=>m+f[1],"");B.raws[t]={value:a,raw:u}}B[t]=a}spacesAndCommentsFromEnd(B){let t,C="";for(;B.length&&(t=B[B.length-1][0],!(t!=="space"&&t!=="comment"));)C=B.pop()[1]+C;return C}spacesAndCommentsFromStart(B){let t,C="";for(;B.length&&(t=B[0][0],!(t!=="space"&&t!=="comment"));)C+=B.shift()[1];return C}spacesFromEnd(B){let t,C="";for(;B.length&&(t=B[B.length-1][0],t==="space");)C=B.pop()[1]+C;return C}stringFrom(B,t){let C="";for(let n=t;n<B.length;n++)C+=B[n][1];return B.splice(t,B.length-t),C}colon(B){let t=0,C,n,r;for(let[i,s]of B.entries()){if(C=s,n=C[0],n==="("&&(t+=1),n===")"&&(t-=1),t===0&&n===":")if(!r)this.doubleColon(C);else{if(r[0]==="word"&&r[1]==="progid")continue;return i}r=C}return!1}unclosedBracket(B){throw this.input.error("Unclosed bracket",{offset:B[2]},{offset:B[2]+1})}unknownWord(B){throw this.input.error("Unknown word",{offset:B[0][2]},{offset:B[0][2]+B[0][1].length})}unexpectedClose(B){throw this.input.error("Unexpected }",{offset:B[2]},{offset:B[2]+1})}unclosedBlock(){let B=this.current.source.start;throw this.input.error("Unclosed block",B.line,B.column)}doubleColon(B){throw this.input.error("Double colon",{offset:B[2]},{offset:B[2]+B[1].length})}unnamedAtrule(B,t){throw this.input.error("At-rule without name",{offset:t[2]},{offset:t[2]+t[1].length})}precheckMissedSemicolon(){}checkMissedSemicolon(B){let t=this.colon(B);if(t===!1)return;let C=0,n;for(let r=t-1;r>=0&&(n=B[r],!(n[0]!=="space"&&(C+=1,C===2)));r--);throw this.input.error("Missed semicolon",n[0]==="word"?n[3]+1:n[2])}};var lW=oW;let cW=Sn,uW=lW,fW=nc;function ll(e,B){let t=new fW(e,B),C=new uW(t);try{C.parse()}catch(n){throw n}return C.root}var jh=ll;ll.default=ll;cW.registerParse(ll);let{isClean:at,my:dW}=Ds,hW=Eb,pW=ec,mW=Sn,gW=Qh,w0=Jh,vW=jh,AW=Ps;const yW={document:"Document",root:"Root",atrule:"AtRule",rule:"Rule",decl:"Declaration",comment:"Comment"},EW={postcssPlugin:!0,prepare:!0,Once:!0,Document:!0,Root:!0,Declaration:!0,Rule:!0,AtRule:!0,Comment:!0,DeclarationExit:!0,RuleExit:!0,AtRuleExit:!0,CommentExit:!0,RootExit:!0,DocumentExit:!0,OnceExit:!0},SW={postcssPlugin:!0,prepare:!0,Once:!0},vr=0;function Zr(e){return typeof e=="object"&&typeof e.then=="function"}function Kb(e){let B=!1,t=yW[e.type];return e.type==="decl"?B=e.prop.toLowerCase():e.type==="atrule"&&(B=e.name.toLowerCase()),B&&e.append?[t,t+"-"+B,vr,t+"Exit",t+"Exit-"+B]:B?[t,t+"-"+B,t+"Exit",t+"Exit-"+B]:e.append?[t,vr,t+"Exit"]:[t,t+"Exit"]}function D0(e){let B;return e.type==="document"?B=["Document",vr,"DocumentExit"]:e.type==="root"?B=["Root",vr,"RootExit"]:B=Kb(e),{node:e,events:B,eventIndex:0,visitors:[],visitorIndex:0,iterator:0}}function Ad(e){return e[at]=!1,e.nodes&&e.nodes.forEach(B=>Ad(B)),e}let yd={},dn=class{constructor(B,t,C){this.stringified=!1,this.processed=!1;let n;if(typeof t=="object"&&t!==null&&(t.type==="root"||t.type==="document"))n=Ad(t);else if(t instanceof dn||t instanceof w0)n=Ad(t.root),t.map&&(typeof C.map>"u"&&(C.map={}),C.map.inline||(C.map.inline=!1),C.map.prev=t.map);else{let r=vW;C.syntax&&(r=C.syntax.parse),C.parser&&(r=C.parser),r.parse&&(r=r.parse);try{n=r(t,C)}catch(i){this.processed=!0,this.error=i}n&&!n[dW]&&mW.rebuild(n)}this.result=new w0(B,n,C),this.helpers={...yd,result:this.result,postcss:yd},this.plugins=this.processor.plugins.map(r=>typeof r=="object"&&r.prepare?{...r,...r.prepare(this.result)}:r)}get[Symbol.toStringTag](){return"LazyResult"}get processor(){return this.result.processor}get opts(){return this.result.opts}get css(){return this.stringify().css}get content(){return this.stringify().content}get map(){return this.stringify().map}get root(){return this.sync().root}get messages(){return this.sync().messages}warnings(){return this.sync().warnings()}toString(){return this.css}then(B,t){return this.async().then(B,t)}catch(B){return this.async().catch(B)}finally(B){return this.async().then(B,B)}async(){return this.error?Promise.reject(this.error):this.processed?Promise.resolve(this.result):(this.processing||(this.processing=this.runAsync()),this.processing)}sync(){if(this.error)throw this.error;if(this.processed)return this.result;if(this.processed=!0,this.processing)throw this.getAsyncError();for(let B of this.plugins){let t=this.runOnRoot(B);if(Zr(t))throw this.getAsyncError()}if(this.prepareVisitors(),this.hasListener){let B=this.result.root;for(;!B[at];)B[at]=!0,this.walkSync(B);if(this.listeners.OnceExit)if(B.type==="document")for(let t of B.nodes)this.visitSync(this.listeners.OnceExit,t);else this.visitSync(this.listeners.OnceExit,B)}return this.result}stringify(){if(this.error)throw this.error;if(this.stringified)return this.result;this.stringified=!0,this.sync();let B=this.result.opts,t=pW;B.syntax&&(t=B.syntax.stringify),B.stringifier&&(t=B.stringifier),t.stringify&&(t=t.stringify);let n=new hW(t,this.result.root,this.result.opts).generate();return this.result.css=n[0],this.result.map=n[1],this.result}walkSync(B){B[at]=!0;let t=Kb(B);for(let C of t)if(C===vr)B.nodes&&B.each(n=>{n[at]||this.walkSync(n)});else{let n=this.listeners[C];if(n&&this.visitSync(n,B.toProxy()))return}}visitSync(B,t){for(let[C,n]of B){this.result.lastPlugin=C;let r;try{r=n(t,this.helpers)}catch(i){throw this.handleError(i,t.proxyOf)}if(t.type!=="root"&&t.type!=="document"&&!t.parent)return!0;if(Zr(r))throw this.getAsyncError()}}runOnRoot(B){this.result.lastPlugin=B;try{if(typeof B=="object"&&B.Once){if(this.result.root.type==="document"){let t=this.result.root.nodes.map(C=>B.Once(C,this.helpers));return Zr(t[0])?Promise.all(t):t}return B.Once(this.result.root,this.helpers)}else if(typeof B=="function")return B(this.result.root,this.result)}catch(t){throw this.handleError(t)}}getAsyncError(){throw new Error("Use process(css).then(cb) to work with async plugins")}handleError(B,t){let C=this.result.lastPlugin;try{t&&t.addToError(B),this.error=B,B.name==="CssSyntaxError"&&!B.plugin?(B.plugin=C.postcssPlugin,B.setMessage()):C.postcssVersion}catch(n){console&&console.error&&console.error(n)}return B}async runAsync(){this.plugin=0;for(let B=0;B<this.plugins.length;B++){let t=this.plugins[B],C=this.runOnRoot(t);if(Zr(C))try{await C}catch(n){throw this.handleError(n)}}if(this.prepareVisitors(),this.hasListener){let B=this.result.root;for(;!B[at];){B[at]=!0;let t=[D0(B)];for(;t.length>0;){let C=this.visitTick(t);if(Zr(C))try{await C}catch(n){let r=t[t.length-1].node;throw this.handleError(n,r)}}}if(this.listeners.OnceExit)for(let[t,C]of this.listeners.OnceExit){this.result.lastPlugin=t;try{if(B.type==="document"){let n=B.nodes.map(r=>C(r,this.helpers));await Promise.all(n)}else await C(B,this.helpers)}catch(n){throw this.handleError(n)}}}return this.processed=!0,this.stringify()}prepareVisitors(){this.listeners={};let B=(t,C,n)=>{this.listeners[C]||(this.listeners[C]=[]),this.listeners[C].push([t,n])};for(let t of this.plugins)if(typeof t=="object")for(let C in t){if(!EW[C]&&/^[A-Z]/.test(C))throw new Error(`Unknown event ${C} in ${t.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);if(!SW[C])if(typeof t[C]=="object")for(let n in t[C])n==="*"?B(t,C,t[C][n]):B(t,C+"-"+n.toLowerCase(),t[C][n]);else typeof t[C]=="function"&&B(t,C,t[C])}this.hasListener=Object.keys(this.listeners).length>0}visitTick(B){let t=B[B.length-1],{node:C,visitors:n}=t;if(C.type!=="root"&&C.type!=="document"&&!C.parent){B.pop();return}if(n.length>0&&t.visitorIndex<n.length){let[i,s]=n[t.visitorIndex];t.visitorIndex+=1,t.visitorIndex===n.length&&(t.visitors=[],t.visitorIndex=0),this.result.lastPlugin=i;try{return s(C.toProxy(),this.helpers)}catch(a){throw this.handleError(a,C)}}if(t.iterator!==0){let i=t.iterator,s;for(;s=C.nodes[C.indexes[i]];)if(C.indexes[i]+=1,!s[at]){s[at]=!0,B.push(D0(s));return}t.iterator=0,delete C.indexes[i]}let r=t.events;for(;t.eventIndex<r.length;){let i=r[t.eventIndex];if(t.eventIndex+=1,i===vr){C.nodes&&C.nodes.length&&(C[at]=!0,t.iterator=C.getIterator());return}else if(this.listeners[i]){t.visitors=this.listeners[i];return}}B.pop()}};dn.registerPostcss=e=>{yd=e};var Ub=dn;dn.default=dn;AW.registerLazyResult(dn);gW.registerLazyResult(dn);let IW=Eb,bW=ec,wW=jh;const DW=Jh;let Ed=class{constructor(B,t,C){t=t.toString(),this.stringified=!1,this._processor=B,this._css=t,this._opts=C,this._map=void 0;let n,r=bW;this.result=new DW(this._processor,n,this._opts),this.result.css=t;let i=this;Object.defineProperty(this.result,"root",{get(){return i.root}});let s=new IW(r,n,this._opts,t);if(s.isMap()){let[a,o]=s.generate();a&&(this.result.css=a),o&&(this.result.map=o)}}get[Symbol.toStringTag](){return"NoWorkResult"}get processor(){return this.result.processor}get opts(){return this.result.opts}get css(){return this.result.css}get content(){return this.result.css}get map(){return this.result.map}get root(){if(this._root)return this._root;let B,t=wW;try{B=t(this._css,this._opts)}catch(C){this.error=C}if(this.error)throw this.error;return this._root=B,B}get messages(){return[]}warnings(){return[]}toString(){return this._css}then(B,t){return this.async().then(B,t)}catch(B){return this.async().catch(B)}finally(B){return this.async().then(B,B)}async(){return this.error?Promise.reject(this.error):Promise.resolve(this.result)}sync(){if(this.error)throw this.error;return this.result}};var PW=Ed;Ed.default=Ed;let RW=PW,NW=Ub,FW=Qh,OW=Ps,ts=class{constructor(B=[]){this.version="8.4.21",this.plugins=this.normalize(B)}use(B){return this.plugins=this.plugins.concat(this.normalize([B])),this}process(B,t={}){return this.plugins.length===0&&typeof t.parser>"u"&&typeof t.stringifier>"u"&&typeof t.syntax>"u"?new RW(this,B,t):new NW(this,B,t)}normalize(B){let t=[];for(let C of B)if(C.postcss===!0?C=C():C.postcss&&(C=C.postcss),typeof C=="object"&&Array.isArray(C.plugins))t=t.concat(C.plugins);else if(typeof C=="object"&&C.postcssPlugin)t.push(C);else if(typeof C=="function")t.push(C);else if(!(typeof C=="object"&&(C.parse||C.stringify)))throw new Error(C+" is not a PostCSS plugin");return t}};var kW=ts;ts.default=ts;OW.registerProcessor(ts);FW.registerProcessor(ts);let TW=Cc,MW=mb,LW=rc,HW=Vh,xW=nc,GW=Ps,KW=Wh;function Cs(e,B){if(Array.isArray(e))return e.map(n=>Cs(n));let{inputs:t,...C}=e;if(t){B=[];for(let n of t){let r={...n,__proto__:xW.prototype};r.map&&(r.map={...r.map,__proto__:MW.prototype}),B.push(r)}}if(C.nodes&&(C.nodes=e.nodes.map(n=>Cs(n,B))),C.source){let{inputId:n,...r}=C.source;C.source=r,n!=null&&(C.source.input=B[n])}if(C.type==="root")return new GW(C);if(C.type==="decl")return new TW(C);if(C.type==="rule")return new KW(C);if(C.type==="comment")return new LW(C);if(C.type==="atrule")return new HW(C);throw new Error("Unknown node type: "+e.type)}var UW=Cs;Cs.default=Cs;let QW=Gh,Qb=Cc,JW=Ub,VW=Sn,Yh=kW,WW=ec,jW=UW,Jb=Qh,YW=kb,Vb=rc,Wb=Vh,XW=Jh,ZW=nc,qW=jh,zW=xb,jb=Wh,Yb=Ps,_W=tc;function nB(...e){return e.length===1&&Array.isArray(e[0])&&(e=e[0]),new Yh(e)}nB.plugin=function(B,t){let C=!1;function n(...i){console&&console.warn&&!C&&(C=!0,console.warn(B+`: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`),{}.LANG&&{}.LANG.startsWith("cn")&&console.warn(B+`: 里面 postcss.plugin 被弃用. 迁移指南:
https://www.w3ctech.com/topic/2226`));let s=t(...i);return s.postcssPlugin=B,s.postcssVersion=new Yh().version,s}let r;return Object.defineProperty(n,"postcss",{get(){return r||(r=n()),r}}),n.process=function(i,s,a){return nB([n(a)]).process(i,s)},n};nB.stringify=WW;nB.parse=qW;nB.fromJSON=jW;nB.list=zW;nB.comment=e=>new Vb(e);nB.atRule=e=>new Wb(e);nB.decl=e=>new Qb(e);nB.rule=e=>new jb(e);nB.root=e=>new Yb(e);nB.document=e=>new Jb(e);nB.CssSyntaxError=QW;nB.Declaration=Qb;nB.Container=VW;nB.Processor=Yh;nB.Document=Jb;nB.Comment=Vb;nB.Warning=YW;nB.AtRule=Wb;nB.Result=XW;nB.Input=ZW;nB.Rule=jb;nB.Root=Yb;nB.Node=_W;JW.registerPostcss(nB);var Rs=nB;nB.default=nB;let{list:Sd}=Rs;gB.error=function(e){let B=new Error(e);throw B.autoprefixer=!0,B};gB.uniq=function(e){return[...new Set(e)]};gB.removeNote=function(e){return e.includes(" ")?e.split(" ")[0]:e};gB.escapeRegexp=function(e){return e.replace(/[$()*+-.?[\\\]^{|}]/g,"\\$&")};gB.regexp=function(e,B=!0){return B&&(e=this.escapeRegexp(e)),new RegExp(`(^|[\\s,(])(${e}($|[\\s(,]))`,"gi")};gB.editList=function(e,B){let t=Sd.comma(e),C=B(t,[]);if(t===C)return e;let n=e.match(/,\s*/);return n=n?n[0]:", ",C.join(n)};gB.splitSelector=function(e){return Sd.comma(e).map(B=>Sd.space(B).map(t=>t.split(/(?=\.|#)/g)))};gB.isPureNumber=function(e){return typeof e=="number"?!0:typeof e=="string"?/^[0-9]+$/.test(e):!1};let $W=ZS,P0=En.agents,Bj=gB,ej=class{static prefixes(){if(this.prefixesCache)return this.prefixesCache;this.prefixesCache=[];for(let B in P0)this.prefixesCache.push(`-${P0[B].prefix}-`);return this.prefixesCache=Bj.uniq(this.prefixesCache).sort((B,t)=>t.length-B.length),this.prefixesCache}static withPrefix(B){return this.prefixesRegexp||(this.prefixesRegexp=new RegExp(this.prefixes().join("|"))),this.prefixesRegexp.test(B)}constructor(B,t,C,n){this.data=B,this.options=C||{},this.browserslistOpts=n||{},this.selected=this.parse(t)}parse(B){let t={};for(let C in this.browserslistOpts)t[C]=this.browserslistOpts[C];return t.path=this.options.from,$W(B,t)}prefix(B){let[t,C]=B.split(" "),n=this.data[t],r=n.prefix_exceptions&&n.prefix_exceptions[C];return r||(r=n.prefix),`-${r}-`}isSelected(B){return this.selected.includes(B)}};var Xh=ej,Xb={prefix(e){let B=e.match(/^(-\w+-)/);return B?B[0]:""},unprefixed(e){return e.replace(/^-\w+-/,"")}};let tj=Xh,R0=Xb,Cj=gB;function Id(e,B){let t=new e.constructor;for(let C of Object.keys(e||{})){let n=e[C];C==="parent"&&typeof n=="object"?B&&(t[C]=B):C==="source"||C===null?t[C]=n:Array.isArray(n)?t[C]=n.map(r=>Id(r,t)):C!=="_autoprefixerPrefix"&&C!=="_autoprefixerValues"&&C!=="proxyCache"&&(typeof n=="object"&&n!==null&&(n=Id(n,t)),t[C]=n)}return t}let Zb=class{static hack(B){return this.hacks||(this.hacks={}),B.names.map(t=>(this.hacks[t]=B,this.hacks[t]))}static load(B,t,C){let n=this.hacks&&this.hacks[B];return n?new n(B,t,C):new this(B,t,C)}static clone(B,t){let C=Id(B);for(let n in t)C[n]=t[n];return C}constructor(B,t,C){this.prefixes=t,this.name=B,this.all=C}parentPrefix(B){let t;return typeof B._autoprefixerPrefix<"u"?t=B._autoprefixerPrefix:B.type==="decl"&&B.prop[0]==="-"?t=R0.prefix(B.prop):B.type==="root"?t=!1:B.type==="rule"&&B.selector.includes(":-")&&/:(-\w+-)/.test(B.selector)?t=B.selector.match(/:(-\w+-)/)[1]:B.type==="atrule"&&B.name[0]==="-"?t=R0.prefix(B.name):t=this.parentPrefix(B.parent),tj.prefixes().includes(t)||(t=!1),B._autoprefixerPrefix=t,B._autoprefixerPrefix}process(B,t){if(!this.check(B))return;let C=this.parentPrefix(B),n=this.prefixes.filter(i=>!C||C===Cj.removeNote(i)),r=[];for(let i of n)this.add(B,i,r.concat([i]),t)&&r.push(i);return r}clone(B,t){return Zb.clone(B,t)}};var Zh=Zb;let nj=Zh,rj=Xh,N0=gB,ij=class extends nj{check(){return!0}prefixed(B,t){return t+B}normalize(B){return B}otherPrefixes(B,t){for(let C of rj.prefixes())if(C!==t&&B.includes(C))return B.replace(/var\([^)]+\)/,"").includes(C);return!1}set(B,t){return B.prop=this.prefixed(B.prop,t),B}needCascade(B){return B._autoprefixerCascade||(B._autoprefixerCascade=this.all.options.cascade!==!1&&B.raw("before").includes(`
`)),B._autoprefixerCascade}maxPrefixed(B,t){if(t._autoprefixerMax)return t._autoprefixerMax;let C=0;for(let n of B)n=N0.removeNote(n),n.length>C&&(C=n.length);return t._autoprefixerMax=C,t._autoprefixerMax}calcBefore(B,t,C=""){let r=this.maxPrefixed(B,t)-N0.removeNote(C).length,i=t.raw("before");return r>0&&(i+=Array(r).fill(" ").join("")),i}restoreBefore(B){let t=B.raw("before").split(`
`),C=t[t.length-1];this.all.group(B).up(n=>{let r=n.raw("before").split(`
`),i=r[r.length-1];i.length<C.length&&(C=i)}),t[t.length-1]=C,B.raws.before=t.join(`
`)}insert(B,t,C){let n=this.set(this.clone(B),t);if(!(!n||B.parent.some(i=>i.prop===n.prop&&i.value===n.value)))return this.needCascade(B)&&(n.raws.before=this.calcBefore(C,B,t)),B.parent.insertBefore(B,n)}isAlready(B,t){let C=this.all.group(B).up(n=>n.prop===t);return C||(C=this.all.group(B).down(n=>n.prop===t)),C}add(B,t,C,n){let r=this.prefixed(B.prop,t);if(!(this.isAlready(B,r)||this.otherPrefixes(B.value,t)))return this.insert(B,t,C,n)}process(B,t){if(!this.needCascade(B)){super.process(B,t);return}let C=super.process(B,t);!C||!C.length||(this.restoreBefore(B),B.raws.before=this.calcBefore(C,B))}old(B,t){return[this.prefixed(B,t)]}};var U=ij,F0={},sj={get exports(){return F0},set exports(e){F0=e}};/**
 * @license Fraction.js v4.2.0 05/03/2022
 * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2021, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/(function(e,B){(function(t){var C=2e3,n={s:1,n:0,d:1};function r(f,g){if(isNaN(f=parseInt(f,10)))throw m.InvalidParameter;return f*g}function i(f,g){if(g===0)throw m.DivisionByZero;var p=Object.create(m.prototype);p.s=f<0?-1:1,f=f<0?-f:f;var d=u(f,g);return p.n=f/d,p.d=g/d,p}function s(f){for(var g={},p=f,d=2,h=4;h<=p;){for(;p%d===0;)p/=d,g[d]=(g[d]||0)+1;h+=1+2*d++}return p!==f?p>1&&(g[p]=(g[p]||0)+1):g[f]=(g[f]||0)+1,g}var a=function(f,g){var p=0,d=1,h=1,v=0,A=0,E=0,w=1,S=1,y=0,I=1,M=1,V=1,tB=1e7,LB;if(f!=null)if(g!==void 0){if(p=f,d=g,h=p*d,p%1!==0||d%1!==0)throw m.NonIntegerParameter}else switch(typeof f){case"object":{if("d"in f&&"n"in f)p=f.n,d=f.d,"s"in f&&(p*=f.s);else if(0 in f)p=f[0],1 in f&&(d=f[1]);else throw m.InvalidParameter;h=p*d;break}case"number":{if(f<0&&(h=f,f=-f),f%1===0)p=f;else if(f>0){for(f>=1&&(S=Math.pow(10,Math.floor(1+Math.log(f)/Math.LN10)),f/=S);I<=tB&&V<=tB;)if(LB=(y+M)/(I+V),f===LB){I+V<=tB?(p=y+M,d=I+V):V>I?(p=M,d=V):(p=y,d=I);break}else f>LB?(y+=M,I+=V):(M+=y,V+=I),I>tB?(p=M,d=V):(p=y,d=I);p*=S}else(isNaN(f)||isNaN(g))&&(d=p=NaN);break}case"string":{if(I=f.match(/\d+|./g),I===null)throw m.InvalidParameter;if(I[y]==="-"?(h=-1,y++):I[y]==="+"&&y++,I.length===y+1?A=r(I[y++],h):I[y+1]==="."||I[y]==="."?(I[y]!=="."&&(v=r(I[y++],h)),y++,(y+1===I.length||I[y+1]==="("&&I[y+3]===")"||I[y+1]==="'"&&I[y+3]==="'")&&(A=r(I[y],h),w=Math.pow(10,I[y].length),y++),(I[y]==="("&&I[y+2]===")"||I[y]==="'"&&I[y+2]==="'")&&(E=r(I[y+1],h),S=Math.pow(10,I[y+1].length)-1,y+=3)):I[y+1]==="/"||I[y+1]===":"?(A=r(I[y],h),w=r(I[y+2],1),y+=3):I[y+3]==="/"&&I[y+1]===" "&&(v=r(I[y],h),A=r(I[y+2],h),w=r(I[y+4],1),y+=5),I.length<=y){d=w*S,h=p=E+d*v+S*A;break}}default:throw m.InvalidParameter}if(d===0)throw m.DivisionByZero;n.s=h<0?-1:1,n.n=Math.abs(p),n.d=Math.abs(d)};function o(f,g,p){for(var d=1;g>0;f=f*f%p,g>>=1)g&1&&(d=d*f%p);return d}function l(f,g){for(;g%2===0;g/=2);for(;g%5===0;g/=5);if(g===1)return 0;for(var p=10%g,d=1;p!==1;d++)if(p=p*10%g,d>C)return 0;return d}function c(f,g,p){for(var d=1,h=o(10,p,g),v=0;v<300;v++){if(d===h)return v;d=d*10%g,h=h*10%g}return 0}function u(f,g){if(!f)return g;if(!g)return f;for(;;){if(f%=g,!f)return g;if(g%=f,!g)return f}}function m(f,g){if(a(f,g),this instanceof m)f=u(n.d,n.n),this.s=n.s,this.n=n.n/f,this.d=n.d/f;else return i(n.s*n.n,n.d)}m.DivisionByZero=new Error("Division by Zero"),m.InvalidParameter=new Error("Invalid argument"),m.NonIntegerParameter=new Error("Parameters must be integer"),m.prototype={s:1,n:0,d:1,abs:function(){return i(this.n,this.d)},neg:function(){return i(-this.s*this.n,this.d)},add:function(f,g){return a(f,g),i(this.s*this.n*n.d+n.s*this.d*n.n,this.d*n.d)},sub:function(f,g){return a(f,g),i(this.s*this.n*n.d-n.s*this.d*n.n,this.d*n.d)},mul:function(f,g){return a(f,g),i(this.s*n.s*this.n*n.n,this.d*n.d)},div:function(f,g){return a(f,g),i(this.s*n.s*this.n*n.d,this.d*n.n)},clone:function(){return i(this.s*this.n,this.d)},mod:function(f,g){if(isNaN(this.n)||isNaN(this.d))return new m(NaN);if(f===void 0)return i(this.s*this.n%this.d,1);if(a(f,g),n.n===0&&this.d===0)throw m.DivisionByZero;return i(this.s*(n.d*this.n)%(n.n*this.d),n.d*this.d)},gcd:function(f,g){return a(f,g),i(u(n.n,this.n)*u(n.d,this.d),n.d*this.d)},lcm:function(f,g){return a(f,g),n.n===0&&this.n===0?i(0,1):i(n.n*this.n,u(n.n,this.n)*u(n.d,this.d))},ceil:function(f){return f=Math.pow(10,f||0),isNaN(this.n)||isNaN(this.d)?new m(NaN):i(Math.ceil(f*this.s*this.n/this.d),f)},floor:function(f){return f=Math.pow(10,f||0),isNaN(this.n)||isNaN(this.d)?new m(NaN):i(Math.floor(f*this.s*this.n/this.d),f)},round:function(f){return f=Math.pow(10,f||0),isNaN(this.n)||isNaN(this.d)?new m(NaN):i(Math.round(f*this.s*this.n/this.d),f)},inverse:function(){return i(this.s*this.d,this.n)},pow:function(f,g){if(a(f,g),n.d===1)return n.s<0?i(Math.pow(this.s*this.d,n.n),Math.pow(this.n,n.n)):i(Math.pow(this.s*this.n,n.n),Math.pow(this.d,n.n));if(this.s<0)return null;var p=s(this.n),d=s(this.d),h=1,v=1;for(var A in p)if(A!=="1"){if(A==="0"){h=0;break}if(p[A]*=n.n,p[A]%n.d===0)p[A]/=n.d;else return null;h*=Math.pow(A,p[A])}for(var A in d)if(A!=="1"){if(d[A]*=n.n,d[A]%n.d===0)d[A]/=n.d;else return null;v*=Math.pow(A,d[A])}return n.s<0?i(v,h):i(h,v)},equals:function(f,g){return a(f,g),this.s*this.n*n.d===n.s*n.n*this.d},compare:function(f,g){a(f,g);var p=this.s*this.n*n.d-n.s*n.n*this.d;return(0<p)-(p<0)},simplify:function(f){if(isNaN(this.n)||isNaN(this.d))return this;f=f||.001;for(var g=this.abs(),p=g.toContinued(),d=1;d<p.length;d++){for(var h=i(p[d-1],1),v=d-2;v>=0;v--)h=h.inverse().add(p[v]);if(h.sub(g).abs().valueOf()<f)return h.mul(this.s)}return this},divisible:function(f,g){return a(f,g),!(!(n.n*this.d)||this.n*n.d%(n.n*this.d))},valueOf:function(){return this.s*this.n/this.d},toFraction:function(f){var g,p="",d=this.n,h=this.d;return this.s<0&&(p+="-"),h===1?p+=d:(f&&(g=Math.floor(d/h))>0&&(p+=g,p+=" ",d%=h),p+=d,p+="/",p+=h),p},toLatex:function(f){var g,p="",d=this.n,h=this.d;return this.s<0&&(p+="-"),h===1?p+=d:(f&&(g=Math.floor(d/h))>0&&(p+=g,d%=h),p+="\\frac{",p+=d,p+="}{",p+=h,p+="}"),p},toContinued:function(){var f,g=this.n,p=this.d,d=[];if(isNaN(g)||isNaN(p))return d;do d.push(Math.floor(g/p)),f=g%p,g=p,p=f;while(g!==1);return d},toString:function(f){var g=this.n,p=this.d;if(isNaN(g)||isNaN(p))return"NaN";f=f||15;var d=l(g,p),h=c(g,p,d),v=this.s<0?"-":"";if(v+=g/p|0,g%=p,g*=10,g&&(v+="."),d){for(var A=h;A--;)v+=g/p|0,g%=p,g*=10;v+="(";for(var A=d;A--;)v+=g/p|0,g%=p,g*=10;v+=")"}else for(var A=f;g&&A--;)v+=g/p|0,g%=p,g*=10;return v}},Object.defineProperty(m,"__esModule",{value:!0}),m.default=m,m.Fraction=m,e.exports=m})()})(sj);var Au="(".charCodeAt(0),yu=")".charCodeAt(0),ba="'".charCodeAt(0),Eu='"'.charCodeAt(0),Su="\\".charCodeAt(0),Pn="/".charCodeAt(0),Iu=",".charCodeAt(0),bu=":".charCodeAt(0),wa="*".charCodeAt(0),aj="u".charCodeAt(0),oj="U".charCodeAt(0),lj="+".charCodeAt(0),cj=/^[a-f0-9?-]+$/i,uj=function(e){for(var B=[],t=e,C,n,r,i,s,a,o,l,c=0,u=t.charCodeAt(c),m=t.length,f=[{nodes:B}],g=0,p,d="",h="",v="";c<m;)if(u<=32){C=c;do C+=1,u=t.charCodeAt(C);while(u<=32);i=t.slice(c,C),r=B[B.length-1],u===yu&&g?v=i:r&&r.type==="div"?(r.after=i,r.sourceEndIndex+=i.length):u===Iu||u===bu||u===Pn&&t.charCodeAt(C+1)!==wa&&(!p||p&&p.type==="function"&&p.value!=="calc")?h=i:B.push({type:"space",sourceIndex:c,sourceEndIndex:C,value:i}),c=C}else if(u===ba||u===Eu){C=c,n=u===ba?"'":'"',i={type:"string",sourceIndex:c,quote:n};do if(s=!1,C=t.indexOf(n,C+1),~C)for(a=C;t.charCodeAt(a-1)===Su;)a-=1,s=!s;else t+=n,C=t.length-1,i.unclosed=!0;while(s);i.value=t.slice(c+1,C),i.sourceEndIndex=i.unclosed?C:C+1,B.push(i),c=C+1,u=t.charCodeAt(c)}else if(u===Pn&&t.charCodeAt(c+1)===wa)C=t.indexOf("*/",c),i={type:"comment",sourceIndex:c,sourceEndIndex:C+2},C===-1&&(i.unclosed=!0,C=t.length,i.sourceEndIndex=C),i.value=t.slice(c+2,C),B.push(i),c=C+2,u=t.charCodeAt(c);else if((u===Pn||u===wa)&&p&&p.type==="function"&&p.value==="calc")i=t[c],B.push({type:"word",sourceIndex:c-h.length,sourceEndIndex:c+i.length,value:i}),c+=1,u=t.charCodeAt(c);else if(u===Pn||u===Iu||u===bu)i=t[c],B.push({type:"div",sourceIndex:c-h.length,sourceEndIndex:c+i.length,value:i,before:h,after:""}),h="",c+=1,u=t.charCodeAt(c);else if(Au===u){C=c;do C+=1,u=t.charCodeAt(C);while(u<=32);if(l=c,i={type:"function",sourceIndex:c-d.length,value:d,before:t.slice(l+1,C)},c=C,d==="url"&&u!==ba&&u!==Eu){C-=1;do if(s=!1,C=t.indexOf(")",C+1),~C)for(a=C;t.charCodeAt(a-1)===Su;)a-=1,s=!s;else t+=")",C=t.length-1,i.unclosed=!0;while(s);o=C;do o-=1,u=t.charCodeAt(o);while(u<=32);l<o?(c!==o+1?i.nodes=[{type:"word",sourceIndex:c,sourceEndIndex:o+1,value:t.slice(c,o+1)}]:i.nodes=[],i.unclosed&&o+1!==C?(i.after="",i.nodes.push({type:"space",sourceIndex:o+1,sourceEndIndex:C,value:t.slice(o+1,C)})):(i.after=t.slice(o+1,C),i.sourceEndIndex=C)):(i.after="",i.nodes=[]),c=C+1,i.sourceEndIndex=i.unclosed?C:c,u=t.charCodeAt(c),B.push(i)}else g+=1,i.after="",i.sourceEndIndex=c+1,B.push(i),f.push(i),B=i.nodes=[],p=i;d=""}else if(yu===u&&g)c+=1,u=t.charCodeAt(c),p.after=v,p.sourceEndIndex+=v.length,v="",g-=1,f[f.length-1].sourceEndIndex=c,f.pop(),p=f[g],B=p.nodes;else{C=c;do u===Su&&(C+=1),C+=1,u=t.charCodeAt(C);while(C<m&&!(u<=32||u===ba||u===Eu||u===Iu||u===bu||u===Pn||u===Au||u===wa&&p&&p.type==="function"&&p.value==="calc"||u===Pn&&p.type==="function"&&p.value==="calc"||u===yu&&g));i=t.slice(c,C),Au===u?d=i:(aj===i.charCodeAt(0)||oj===i.charCodeAt(0))&&lj===i.charCodeAt(1)&&cj.test(i.slice(2))?B.push({type:"unicode-range",sourceIndex:c,sourceEndIndex:C,value:i}):B.push({type:"word",sourceIndex:c,sourceEndIndex:C,value:i}),c=C}for(c=f.length-1;c;c-=1)f[c].unclosed=!0,f[c].sourceEndIndex=t.length;return f[0].nodes},fj=function e(B,t,C){var n,r,i,s;for(n=0,r=B.length;n<r;n+=1)i=B[n],C||(s=t(i,n,B)),s!==!1&&i.type==="function"&&Array.isArray(i.nodes)&&e(i.nodes,t,C),C&&t(i,n,B)};function O0(e,B){var t=e.type,C=e.value,n,r;return B&&(r=B(e))!==void 0?r:t==="word"||t==="space"?C:t==="string"?(n=e.quote||"",n+C+(e.unclosed?"":n)):t==="comment"?"/*"+C+(e.unclosed?"":"*/"):t==="div"?(e.before||"")+C+(e.after||""):Array.isArray(e.nodes)?(n=qb(e.nodes,B),t!=="function"?n:C+"("+(e.before||"")+n+(e.after||"")+(e.unclosed?"":")")):C}function qb(e,B){var t,C;if(Array.isArray(e)){for(t="",C=e.length-1;~C;C-=1)t=O0(e[C],B)+t;return t}return O0(e,B)}var dj=qb,wu,k0;function hj(){if(k0)return wu;k0=1;var e="-".charCodeAt(0),B="+".charCodeAt(0),t=".".charCodeAt(0),C="e".charCodeAt(0),n="E".charCodeAt(0);function r(i){var s=i.charCodeAt(0),a;if(s===B||s===e){if(a=i.charCodeAt(1),a>=48&&a<=57)return!0;var o=i.charCodeAt(2);return a===t&&o>=48&&o<=57}return s===t?(a=i.charCodeAt(1),a>=48&&a<=57):s>=48&&s<=57}return wu=function(i){var s=0,a=i.length,o,l,c;if(a===0||!r(i))return!1;for(o=i.charCodeAt(s),(o===B||o===e)&&s++;s<a&&(o=i.charCodeAt(s),!(o<48||o>57));)s+=1;if(o=i.charCodeAt(s),l=i.charCodeAt(s+1),o===t&&l>=48&&l<=57)for(s+=2;s<a&&(o=i.charCodeAt(s),!(o<48||o>57));)s+=1;if(o=i.charCodeAt(s),l=i.charCodeAt(s+1),c=i.charCodeAt(s+2),(o===C||o===n)&&(l>=48&&l<=57||(l===B||l===e)&&c>=48&&c<=57))for(s+=l===B||l===e?3:2;s<a&&(o=i.charCodeAt(s),!(o<48||o>57));)s+=1;return{number:i.slice(0,s),unit:i.slice(s)}},wu}var pj=uj,zb=fj,_b=dj;function PC(e){return this instanceof PC?(this.nodes=pj(e),this):new PC(e)}PC.prototype.toString=function(){return Array.isArray(this.nodes)?_b(this.nodes):""};PC.prototype.walk=function(e,B){return zb(this.nodes,e,B),this};PC.unit=hj();PC.walk=zb;PC.stringify=_b;var qh=PC;let mj=gB,gj=class{constructor(B,t,C,n){this.unprefixed=B,this.prefixed=t,this.string=C||t,this.regexp=n||mj.regexp(t)}check(B){return B.includes(this.string)?!!B.match(this.regexp):!1}};var Ns=gj;let vj=Zh,Aj=Ns,yj=Xb,Ej=gB,Sj=class extends vj{static save(B,t){let C=t.prop,n=[];for(let r in t._autoprefixerValues){let i=t._autoprefixerValues[r];if(i===t.value)continue;let s,a=yj.prefix(C);if(a==="-pie-")continue;if(a===r){s=t.value=i,n.push(s);continue}let o=B.prefixed(C,r),l=t.parent;if(!l.every(f=>f.prop!==o)){n.push(s);continue}let c=i.replace(/\s+/," ");if(l.some(f=>f.prop===t.prop&&f.value.replace(/\s+/," ")===c)){n.push(s);continue}let m=this.clone(t,{value:i});s=t.parent.insertBefore(t,m),n.push(s)}return n}check(B){let t=B.value;return t.includes(this.name)?!!t.match(this.regexp()):!1}regexp(){return this.regexpCache||(this.regexpCache=Ej.regexp(this.name))}replace(B,t){return B.replace(this.regexp(),`$1${t}$2`)}value(B){return B.raws.value&&B.raws.value.value===B.value?B.raws.value.raw:B.value}add(B,t){B._autoprefixerValues||(B._autoprefixerValues={});let C=B._autoprefixerValues[t]||this.value(B),n;do if(n=C,C=this.replace(C,t),C===!1)return;while(C!==n);B._autoprefixerValues[t]=C}old(B){return new Aj(this.name,B+this.name)}};var Et=Sj,wB={};let De=qh,Ar=Rs.list,T0=gB.uniq,Ij=gB.escapeRegexp,bd=gB.splitSelector;function M0(e){return e&&e.length===2&&e[0]==="span"&&parseInt(e[1],10)>0?[!1,parseInt(e[1],10)]:e&&e.length===1&&parseInt(e[0],10)>0?[parseInt(e[0],10),!1]:[!1,!1]}wB.translate=bj;function bj(e,B,t){let C=e[B],n=e[t];if(!C)return[!1,!1];let[r,i]=M0(C),[s,a]=M0(n);return r&&!n?[r,!1]:i&&s?[s-i,i]:r&&a?[r,a]:r&&s?[r,s-r]:[!1,!1]}wB.parse=wj;function wj(e){let B=De(e.value),t=[],C=0;t[C]=[];for(let n of B.nodes)n.type==="div"?(C+=1,t[C]=[]):n.type==="word"&&t[C].push(n.value);return t}wB.insertDecl=Dj;function Dj(e,B,t){t&&!e.parent.some(C=>C.prop===`-ms-${B}`)&&e.cloneBefore({prop:`-ms-${B}`,value:t.toString()})}wB.prefixTrackProp=Pj;function Pj({prop:e,prefix:B}){return B+e.replace("template-","")}function Rj({nodes:e},{gap:B}){let{count:t,size:C}=e.reduce((n,r)=>(r.type==="div"&&r.value===","?n.key="size":n[n.key].push(De.stringify(r)),n),{key:"count",size:[],count:[]});if(B){C=C.filter(r=>r.trim());let n=[];for(let r=1;r<=t;r++)C.forEach((i,s)=>{(s>0||r>1)&&n.push(B),n.push(i)});return n.join(" ")}return`(${C.join("")})[${t.join("")}]`}wB.prefixTrackValue=wd;function wd({value:e,gap:B}){let t=De(e).nodes.reduce((C,n)=>n.type==="function"&&n.value==="repeat"?C.concat({type:"word",value:Rj(n,{gap:B})}):B&&n.type==="space"?C.concat({type:"space",value:" "},{type:"word",value:B},n):C.concat(n),[]);return De.stringify(t)}let Nj=/^\.+$/;function L0(e,B){return{start:e,end:B,span:B-e}}function Fj(e){return e.trim().split(/\s+/g)}wB.parseGridAreas=zh;function zh({rows:e,gap:B}){return e.reduce((t,C,n)=>(B.row&&(n*=2),C.trim()===""||Fj(C).forEach((r,i)=>{if(!Nj.test(r))if(B.column&&(i*=2),typeof t[r]>"u")t[r]={column:L0(i+1,i+2),row:L0(n+1,n+2)};else{let{column:s,row:a}=t[r];s.start=Math.min(s.start,i+1),s.end=Math.max(s.end,i+2),s.span=s.end-s.start,a.start=Math.min(a.start,n+1),a.end=Math.max(a.end,n+2),a.span=a.end-a.start}}),t),{})}function Oj(e){return e.type==="word"&&/^\[.+]$/.test(e.value)}function H0(e){return e.areas.length>e.rows.length&&e.rows.push("auto"),e}wB.parseTemplate=_h;function _h({decl:e,gap:B}){let t=De(e.value).nodes.reduce((C,n)=>{let{type:r,value:i}=n;return Oj(n)||r==="space"||(r==="string"&&(C=H0(C),C.areas.push(i)),(r==="word"||r==="function")&&C[C.key].push(De.stringify(n)),r==="div"&&i==="/"&&(C.key="columns",C=H0(C))),C},{key:"rows",columns:[],rows:[],areas:[]});return{areas:zh({rows:t.areas,gap:B}),columns:wd({value:t.columns.join(" "),gap:B.column}),rows:wd({value:t.rows.join(" "),gap:B.row})}}function Da(e,B=!1,t=!1){let C=[{prop:"-ms-grid-row",value:String(e.row.start)}];return(e.row.span>1||B)&&C.push({prop:"-ms-grid-row-span",value:String(e.row.span)}),C.push({prop:"-ms-grid-column",value:String(e.column.start)}),(e.column.span>1||t)&&C.push({prop:"-ms-grid-column-span",value:String(e.column.span)}),C}function ns(e){return e.type==="atrule"&&e.name==="media"?e:e.parent?ns(e.parent):!1}function x0(e,B){return e=e.map(t=>{let C=Ar.space(t),n=Ar.comma(t);return C.length>n.length&&(t=C.slice(-1).join("")),t}),e.map(t=>B.map((n,r)=>`${r===0?"":" "}${n} > ${t}`))}function G0(e,B){return e.selectors.some(t=>B.selectors.includes(t))}function kj(e){let B=[];return e.walkDecls(/grid-template(-areas)?$/,t=>{let C=t.parent,n=ns(C),r=ic(t),i=$b(t,r),{areas:s}=_h({decl:t,gap:i||r}),a=Object.keys(s);if(a.length===0)return!0;let o=B.reduce((l,{allAreas:c},u)=>c&&a.some(f=>c.includes(f))?u:l,null);if(o!==null){let{allAreas:l,rules:c}=B[o],u=c.some(g=>g.hasDuplicates===!1&&G0(g,C)),m=!1,f=c.reduce((g,p)=>!p.params&&G0(p,C)?(m=!0,p.duplicateAreaNames):(m||a.forEach(d=>{p.areas[d]&&g.push(d)}),T0(g)),[]);c.forEach(g=>{a.forEach(p=>{let d=g.areas[p];d&&d.row.span!==s[p].row.span&&(s[p].row.updateSpan=!0),d&&d.column.span!==s[p].column.span&&(s[p].column.updateSpan=!0)})}),B[o].allAreas=T0([...l,...a]),B[o].rules.push({hasDuplicates:!u,params:n.params,selectors:C.selectors,node:C,duplicateAreaNames:f,areas:s})}else B.push({allAreas:a,areasCount:0,rules:[{hasDuplicates:!1,duplicateRules:[],params:n.params,selectors:C.selectors,node:C,duplicateAreaNames:[],areas:s}]})}),B}wB.insertAreas=Tj;function Tj(e,B){let t=kj(e);if(t.length===0)return;let C={};e.walkDecls("grid-area",n=>{let r=n.parent,i=r.first.prop==="-ms-grid-row",s=ns(r);if(B(n))return;let a=e.index(s||r),o=n.value,l=t.filter(p=>p.allAreas.includes(o))[0];if(!l)return!0;let c=l.allAreas[l.allAreas.length-1],u=Ar.space(r.selector),m=Ar.comma(r.selector),f=u.length>1&&u.length>m.length;if(i)return!1;C[c]||(C[c]={});let g=!1;for(let p of l.rules){let d=p.areas[o],h=p.duplicateAreaNames.includes(o);if(!d){let v=C[c].lastRule,A;v?A=e.index(v):A=-1,a>A&&(C[c].lastRule=s||r);continue}if(p.params&&!C[c][p.params]&&(C[c][p.params]=[]),(!p.hasDuplicates||!h)&&!p.params)Da(d,!1,!1).reverse().forEach(v=>r.prepend(Object.assign(v,{raws:{between:n.raws.between}}))),C[c].lastRule=r,g=!0;else if(p.hasDuplicates&&!p.params&&!f){let v=r.clone();v.removeAll(),Da(d,d.row.updateSpan,d.column.updateSpan).reverse().forEach(A=>v.prepend(Object.assign(A,{raws:{between:n.raws.between}}))),v.selectors=x0(v.selectors,p.selectors),C[c].lastRule&&C[c].lastRule.after(v),C[c].lastRule=v,g=!0}else if(p.hasDuplicates&&!p.params&&f&&r.selector.includes(p.selectors[0]))r.walkDecls(/-ms-grid-(row|column)/,v=>v.remove()),Da(d,d.row.updateSpan,d.column.updateSpan).reverse().forEach(v=>r.prepend(Object.assign(v,{raws:{between:n.raws.between}})));else if(p.params){let v=r.clone();v.removeAll(),Da(d,d.row.updateSpan,d.column.updateSpan).reverse().forEach(A=>v.prepend(Object.assign(A,{raws:{between:n.raws.between}}))),p.hasDuplicates&&h&&(v.selectors=x0(v.selectors,p.selectors)),v.raws=p.node.raws,e.index(p.node.parent)>a?p.node.parent.append(v):C[c][p.params].push(v),g||(C[c].lastRule=s||r)}}}),Object.keys(C).forEach(n=>{let r=C[n],i=r.lastRule;Object.keys(r).reverse().filter(s=>s!=="lastRule").forEach(s=>{r[s].length>0&&i&&(i.after({name:"media",params:s}),i.next().append(r[s]))})})}wB.warnMissedAreas=Mj;function Mj(e,B,t){let C=Object.keys(e);B.root().walkDecls("grid-area",n=>{C=C.filter(r=>r!==n.value)}),C.length>0&&B.warn(t,"Can not find grid areas: "+C.join(", "))}wB.warnTemplateSelectorNotFound=Lj;function Lj(e,B){let t=e.parent,C=e.root(),n=!1,r=Ar.space(t.selector).filter(i=>i!==">").slice(0,-1);if(r.length>0){let i=!1,s=null;C.walkDecls(/grid-template(-areas)?$/,a=>{let o=a.parent,l=o.selectors,{areas:c}=_h({decl:a,gap:ic(a)}),u=c[e.value];for(let m of l){if(i)break;i=Ar.space(m).filter(g=>g!==">").every((g,p)=>g===r[p])}if(i||!u)return!0;s||(s=o.selector),s&&s!==o.selector&&(n=!0)}),!i&&n&&e.warn(B,`Autoprefixer cannot find a grid-template containing the duplicate grid-area "${e.value}" with full selector matching: ${r.join(" ")}`)}}wB.warnIfGridRowColumnExists=Hj;function Hj(e,B){let t=e.parent,C=[];t.walkDecls(/^grid-(row|column)/,n=>{!n.prop.endsWith("-end")&&!n.value.startsWith("span")&&!n.prop.endsWith("-gap")&&C.push(n)}),C.length>0&&C.forEach(n=>{n.warn(B,`You already have a grid-area declaration present in the rule. You should use either grid-area or ${n.prop}, not both`)})}wB.getGridGap=ic;function ic(e){let B={},t=/^(grid-)?((row|column)-)?gap$/;return e.parent.walkDecls(t,({prop:C,value:n})=>{if(/^(grid-)?gap$/.test(C)){let[r,,i]=De(n).nodes;B.row=r&&De.stringify(r),B.column=i?De.stringify(i):B.row}/^(grid-)?row-gap$/.test(C)&&(B.row=n),/^(grid-)?column-gap$/.test(C)&&(B.column=n)}),B}function K0(e){if(!e)return[];let B=De(e),t,C;return B.walk(n=>{n.type==="word"&&/min|max/g.test(n.value)?t=n.value:n.value.includes("px")&&(C=parseInt(n.value.replace(/\D/g,"")))}),[t,C]}function xj(e,B){let t,C=bd(e),n=bd(B);if(C[0].length<n[0].length)return!1;if(C[0].length>n[0].length){let r=C[0].reduce((i,[s],a)=>{let o=n[0][0][0];return s===o?a:!1},!1);r&&(t=n[0].every((i,s)=>i.every((a,o)=>C[0].slice(r)[s][o]===a)))}else t=n.some(r=>r.every((i,s)=>i.every((a,o)=>C[0][s][o]===a)));return t}wB.inheritGridGap=$b;function $b(e,B){let t=e.parent,C=ns(t),n=t.root(),r=bd(t.selector);if(Object.keys(B).length>0)return!1;let[i]=K0(C.params),s=r[0],a=Ij(s[s.length-1][0]),o=new RegExp(`(${a}$)|(${a}[,.])`),l;return n.walkRules(o,c=>{let u;if(t.toString()===c.toString())return!1;if(c.walkDecls("grid-gap",f=>u=ic(f)),!u||Object.keys(u).length===0||!xj(t.selector,c.selector))return!0;let m=ns(c);if(m){if(K0(m.params)[0]===i)return l=u,!0}else return l=u,!0}),l&&Object.keys(l).length>0?l:!1}wB.warnGridGap=Gj;function Gj({gap:e,hasColumns:B,decl:t,result:C}){let n=e.row&&e.column;!B&&(n||e.column&&!e.row)&&(delete e.column,t.warn(C,"Can not implement grid-gap without grid-template-columns"))}function U0(e){return De(e).nodes.reduce((t,C)=>{if(C.type==="function"&&C.value==="repeat"){let n="count",[r,i]=C.nodes.reduce((s,a)=>a.type==="word"&&n==="count"?(s[0]=Math.abs(parseInt(a.value)),s):a.type==="div"&&a.value===","?(n="value",s):(n==="value"&&(s[1]+=De.stringify(a)),s),[0,""]);if(r)for(let s=0;s<r;s++)t.push(i);return t}return C.type==="space"?t:t.concat(De.stringify(C))},[])}wB.autoplaceGridItems=Kj;function Kj(e,B,t,C="row"){let{parent:n}=e,r=n.nodes.find(u=>u.prop==="grid-template-rows"),i=U0(r.value),s=U0(e.value),a=i.map((u,m)=>Array.from({length:s.length},(f,g)=>g+m*s.length+1).join(" ")),o=zh({rows:a,gap:t}),l=Object.keys(o),c=l.map(u=>o[u]);C.includes("column")&&(c=c.sort((u,m)=>u.column.start-m.column.start)),c.reverse().forEach((u,m)=>{let{column:f,row:g}=u,p=n.selectors.map(h=>h+` > *:nth-child(${l.length-m})`).join(", "),d=n.clone().removeAll();d.selector=p,d.append({prop:"-ms-grid-row",value:g.start}),d.append({prop:"-ms-grid-column",value:f.start}),n.after(d)})}let Q0=qh,Uj=Et,Qj=wB.insertAreas;const Jj=/(^|[^-])linear-gradient\(\s*(top|left|right|bottom)/i,Vj=/(^|[^-])radial-gradient\(\s*\d+(\w*|%)\s+\d+(\w*|%)\s*,/i,Wj=/(!\s*)?autoprefixer:\s*ignore\s+next/i,jj=/(!\s*)?autoprefixer\s*grid:\s*(on|off|(no-)?autoplace)/i,Yj=["width","height","min-width","max-width","min-height","max-height","inline-size","min-inline-size","max-inline-size","block-size","min-block-size","max-block-size"];function Du(e){return e.parent.some(B=>B.prop==="grid-template"||B.prop==="grid-template-areas")}function Xj(e){let B=e.parent.some(C=>C.prop==="grid-template-rows"),t=e.parent.some(C=>C.prop==="grid-template-columns");return B&&t}let Zj=class{constructor(B){this.prefixes=B}add(B,t){let C=this.prefixes.add["@resolution"],n=this.prefixes.add["@keyframes"],r=this.prefixes.add["@viewport"],i=this.prefixes.add["@supports"];B.walkAtRules(l=>{if(l.name==="keyframes"){if(!this.disabled(l,t))return n&&n.process(l)}else if(l.name==="viewport"){if(!this.disabled(l,t))return r&&r.process(l)}else if(l.name==="supports"){if(this.prefixes.options.supports!==!1&&!this.disabled(l,t))return i.process(l)}else if(l.name==="media"&&l.params.includes("-resolution")&&!this.disabled(l,t))return C&&C.process(l)}),B.walkRules(l=>{if(!this.disabled(l,t))return this.prefixes.add.selectors.map(c=>c.process(l,t))});function s(l){return l.parent.nodes.some(c=>{if(c.type!=="decl")return!1;let u=c.prop==="display"&&/(inline-)?grid/.test(c.value),m=c.prop.startsWith("grid-template"),f=/^grid-([A-z]+-)?gap/.test(c.prop);return u||m||f})}function a(l){return l.parent.some(c=>c.prop==="display"&&/(inline-)?flex/.test(c.value))}let o=this.gridStatus(B,t)&&this.prefixes.add["grid-area"]&&this.prefixes.add["grid-area"].prefixes;return B.walkDecls(l=>{if(this.disabledDecl(l,t))return;let c=l.parent,u=l.prop,m=l.value;if(u==="color-adjust")c.every(g=>g.prop!=="print-color-adjust")&&t.warn("Replace color-adjust to print-color-adjust. The color-adjust shorthand is currently deprecated.",{node:l});else if(u==="grid-row-span"){t.warn("grid-row-span is not part of final Grid Layout. Use grid-row.",{node:l});return}else if(u==="grid-column-span"){t.warn("grid-column-span is not part of final Grid Layout. Use grid-column.",{node:l});return}else if(u==="display"&&m==="box"){t.warn("You should write display: flex by final spec instead of display: box",{node:l});return}else if(u==="text-emphasis-position")(m==="under"||m==="over")&&t.warn("You should use 2 values for text-emphasis-position For example, `under left` instead of just `under`.",{node:l});else if(/^(align|justify|place)-(items|content)$/.test(u)&&a(l))(m==="start"||m==="end")&&t.warn(`${m} value has mixed support, consider using flex-${m} instead`,{node:l});else if(u==="text-decoration-skip"&&m==="ink")t.warn("Replace text-decoration-skip: ink to text-decoration-skip-ink: auto, because spec had been changed",{node:l});else{if(o&&this.gridStatus(l,t))if(l.value==="subgrid"&&t.warn("IE does not support subgrid",{node:l}),/^(align|justify|place)-items$/.test(u)&&s(l)){let g=u.replace("-items","-self");t.warn(`IE does not support ${u} on grid containers. Try using ${g} on child elements instead: ${l.parent.selector} > * { ${g}: ${l.value} }`,{node:l})}else if(/^(align|justify|place)-content$/.test(u)&&s(l))t.warn(`IE does not support ${l.prop} on grid containers`,{node:l});else if(u==="display"&&l.value==="contents"){t.warn("Please do not use display: contents; if you have grid setting enabled",{node:l});return}else if(l.prop==="grid-gap"){let g=this.gridStatus(l,t);g==="autoplace"&&!Xj(l)&&!Du(l)?t.warn("grid-gap only works if grid-template(-areas) is being used or both rows and columns have been declared and cells have not been manually placed inside the explicit grid",{node:l}):(g===!0||g==="no-autoplace")&&!Du(l)&&t.warn("grid-gap only works if grid-template(-areas) is being used",{node:l})}else if(u==="grid-auto-columns"){t.warn("grid-auto-columns is not supported by IE",{node:l});return}else if(u==="grid-auto-rows"){t.warn("grid-auto-rows is not supported by IE",{node:l});return}else if(u==="grid-auto-flow"){let g=c.some(d=>d.prop==="grid-template-rows"),p=c.some(d=>d.prop==="grid-template-columns");Du(l)?t.warn("grid-auto-flow is not supported by IE",{node:l}):m.includes("dense")?t.warn("grid-auto-flow: dense is not supported by IE",{node:l}):!g&&!p&&t.warn("grid-auto-flow works only if grid-template-rows and grid-template-columns are present in the same rule",{node:l});return}else if(m.includes("auto-fit")){t.warn("auto-fit value is not supported by IE",{node:l,word:"auto-fit"});return}else if(m.includes("auto-fill")){t.warn("auto-fill value is not supported by IE",{node:l,word:"auto-fill"});return}else u.startsWith("grid-template")&&m.includes("[")&&t.warn("Autoprefixer currently does not support line names. Try using grid-template-areas instead.",{node:l,word:"["});if(m.includes("radial-gradient"))if(Vj.test(l.value))t.warn("Gradient has outdated direction syntax. New syntax is like `closest-side at 0 0` instead of `0 0, closest-side`.",{node:l});else{let g=Q0(m);for(let p of g.nodes)if(p.type==="function"&&p.value==="radial-gradient")for(let d of p.nodes)d.type==="word"&&(d.value==="cover"?t.warn("Gradient has outdated direction syntax. Replace `cover` to `farthest-corner`.",{node:l}):d.value==="contain"&&t.warn("Gradient has outdated direction syntax. Replace `contain` to `closest-side`.",{node:l}))}m.includes("linear-gradient")&&Jj.test(m)&&t.warn("Gradient has outdated direction syntax. New syntax is like `to left` instead of `right`.",{node:l})}Yj.includes(l.prop)&&(l.value.includes("-fill-available")||(l.value.includes("fill-available")?t.warn("Replace fill-available to stretch, because spec had been changed",{node:l}):l.value.includes("fill")&&Q0(m).nodes.some(p=>p.type==="word"&&p.value==="fill")&&t.warn("Replace fill to stretch, because spec had been changed",{node:l})));let f;if(l.prop==="transition"||l.prop==="transition-property")return this.prefixes.transition.add(l,t);if(l.prop==="align-self"){if(this.displayType(l)!=="grid"&&this.prefixes.options.flexbox!==!1&&(f=this.prefixes.add["align-self"],f&&f.prefixes&&f.process(l)),this.gridStatus(l,t)!==!1&&(f=this.prefixes.add["grid-row-align"],f&&f.prefixes))return f.process(l,t)}else if(l.prop==="justify-self"){if(this.gridStatus(l,t)!==!1&&(f=this.prefixes.add["grid-column-align"],f&&f.prefixes))return f.process(l,t)}else if(l.prop==="place-self"){if(f=this.prefixes.add["place-self"],f&&f.prefixes&&this.gridStatus(l,t)!==!1)return f.process(l,t)}else if(f=this.prefixes.add[l.prop],f&&f.prefixes)return f.process(l,t)}),this.gridStatus(B,t)&&Qj(B,this.disabled),B.walkDecls(l=>{if(this.disabledValue(l,t))return;let c=this.prefixes.unprefixed(l.prop),u=this.prefixes.values("add",c);if(Array.isArray(u))for(let m of u)m.process&&m.process(l,t);Uj.save(this.prefixes,l)})}remove(B,t){let C=this.prefixes.remove["@resolution"];B.walkAtRules((n,r)=>{this.prefixes.remove[`@${n.name}`]?this.disabled(n,t)||n.parent.removeChild(r):n.name==="media"&&n.params.includes("-resolution")&&C&&C.clean(n)});for(let n of this.prefixes.remove.selectors)B.walkRules((r,i)=>{n.check(r)&&(this.disabled(r,t)||r.parent.removeChild(i))});return B.walkDecls((n,r)=>{if(this.disabled(n,t))return;let i=n.parent,s=this.prefixes.unprefixed(n.prop);if((n.prop==="transition"||n.prop==="transition-property")&&this.prefixes.transition.remove(n),this.prefixes.remove[n.prop]&&this.prefixes.remove[n.prop].remove){let a=this.prefixes.group(n).down(o=>this.prefixes.normalize(o.prop)===s);if(s==="flex-flow"&&(a=!0),n.prop==="-webkit-box-orient"){let o={"flex-direction":!0,"flex-flow":!0};if(!n.parent.some(l=>o[l.prop]))return}if(a&&!this.withHackValue(n)){n.raw("before").includes(`
`)&&this.reduceSpaces(n),i.removeChild(r);return}}for(let a of this.prefixes.values("remove",s)){if(!a.check||!a.check(n.value))continue;if(s=a.unprefixed,this.prefixes.group(n).down(l=>l.value.includes(s))){i.removeChild(r);return}}})}withHackValue(B){return B.prop==="-webkit-background-clip"&&B.value==="text"}disabledValue(B,t){return this.gridStatus(B,t)===!1&&B.type==="decl"&&B.prop==="display"&&B.value.includes("grid")||this.prefixes.options.flexbox===!1&&B.type==="decl"&&B.prop==="display"&&B.value.includes("flex")||B.type==="decl"&&B.prop==="content"?!0:this.disabled(B,t)}disabledDecl(B,t){if(this.gridStatus(B,t)===!1&&B.type==="decl"&&(B.prop.includes("grid")||B.prop==="justify-items"))return!0;if(this.prefixes.options.flexbox===!1&&B.type==="decl"){let C=["order","justify-content","align-items","align-content"];if(B.prop.includes("flex")||C.includes(B.prop))return!0}return this.disabled(B,t)}disabled(B,t){if(!B)return!1;if(B._autoprefixerDisabled!==void 0)return B._autoprefixerDisabled;if(B.parent){let n=B.prev();if(n&&n.type==="comment"&&Wj.test(n.text))return B._autoprefixerDisabled=!0,B._autoprefixerSelfDisabled=!0,!0}let C=null;if(B.nodes){let n;B.each(r=>{r.type==="comment"&&/(!\s*)?autoprefixer:\s*(off|on)/i.test(r.text)&&(typeof n<"u"?t.warn("Second Autoprefixer control comment was ignored. Autoprefixer applies control comment to whole block, not to next rules.",{node:r}):n=/on/i.test(r.text))}),n!==void 0&&(C=!n)}if(!B.nodes||C===null)if(B.parent){let n=this.disabled(B.parent,t);B.parent._autoprefixerSelfDisabled===!0?C=!1:C=n}else C=!1;return B._autoprefixerDisabled=C,C}reduceSpaces(B){let t=!1;if(this.prefixes.group(B).up(()=>(t=!0,!0)),t)return;let C=B.raw("before").split(`
`),n=C[C.length-1].length,r=!1;this.prefixes.group(B).down(i=>{C=i.raw("before").split(`
`);let s=C.length-1;C[s].length>n&&(r===!1&&(r=C[s].length-n),C[s]=C[s].slice(0,-r),i.raws.before=C.join(`
`))})}displayType(B){for(let t of B.parent.nodes)if(t.prop==="display"){if(t.value.includes("flex"))return"flex";if(t.value.includes("grid"))return"grid"}return!1}gridStatus(B,t){if(!B)return!1;if(B._autoprefixerGridStatus!==void 0)return B._autoprefixerGridStatus;let C=null;if(B.nodes){let n;B.each(r=>{if(r.type==="comment"&&jj.test(r.text)){let i=/:\s*autoplace/i.test(r.text),s=/no-autoplace/i.test(r.text);typeof n<"u"?t.warn("Second Autoprefixer grid control comment was ignored. Autoprefixer applies control comments to the whole block, not to the next rules.",{node:r}):i?n="autoplace":s?n=!0:n=/on/i.test(r.text)}}),n!==void 0&&(C=n)}if(B.type==="atrule"&&B.name==="supports"){let n=B.params;n.includes("grid")&&n.includes("auto")&&(C=!1)}if(!B.nodes||C===null)if(B.parent){let n=this.gridStatus(B.parent,t);B.parent._autoprefixerSelfDisabled===!0?C=!1:C=n}else typeof this.prefixes.options.grid<"u"?C=this.prefixes.options.grid:typeof{}.AUTOPREFIXER_GRID<"u"?{}.AUTOPREFIXER_GRID==="autoplace"?C="autoplace":C=!0:C=!1;return B._autoprefixerGridStatus=C,C}};var qj=Zj;let zj=hI,{feature:_j}=En,J0=_j(zj);for(let e in J0.stats){let B=J0.stats[e];for(let t in B)B[t]}let $j=class{constructor(B,t){this.prefix=t,this.prefixed=B.prefixed(this.prefix),this.regexp=B.regexp(this.prefix),this.prefixeds=B.possible().map(C=>[B.prefixed(C),B.regexp(C)]),this.unprefixed=B.name,this.nameRegexp=B.regexp()}isHack(B){let t=B.parent.index(B)+1,C=B.parent.nodes;for(;t<C.length;){let n=C[t].selector;if(!n)return!0;if(n.includes(this.unprefixed)&&n.match(this.nameRegexp))return!1;let r=!1;for(let[i,s]of this.prefixeds)if(n.includes(i)&&n.match(s)){r=!0;break}if(!r)return!0;t+=1}return!0}check(B){return!(!B.selector.includes(this.prefixed)||!B.selector.match(this.regexp)||this.isHack(B))}};var B7=$j;let{list:e7}=Rs,t7=B7,C7=Zh,n7=Xh,r7=gB,i7=class extends C7{constructor(B,t,C){super(B,t,C),this.regexpCache=new Map}check(B){return B.selector.includes(this.name)?!!B.selector.match(this.regexp()):!1}prefixed(B){return this.name.replace(/^(\W*)/,`$1${B}`)}regexp(B){if(!this.regexpCache.has(B)){let t=B?this.prefixed(B):this.name;this.regexpCache.set(B,new RegExp(`(^|[^:"'=])${r7.escapeRegexp(t)}`,"gi"))}return this.regexpCache.get(B)}possible(){return n7.prefixes()}prefixeds(B){if(B._autoprefixerPrefixeds){if(B._autoprefixerPrefixeds[this.name])return B._autoprefixerPrefixeds}else B._autoprefixerPrefixeds={};let t={};if(B.selector.includes(",")){let n=e7.comma(B.selector).filter(r=>r.includes(this.name));for(let r of this.possible())t[r]=n.map(i=>this.replace(i,r)).join(", ")}else for(let C of this.possible())t[C]=this.replace(B.selector,C);return B._autoprefixerPrefixeds[this.name]=t,B._autoprefixerPrefixeds}already(B,t,C){let n=B.parent.index(B)-1;for(;n>=0;){let r=B.parent.nodes[n];if(r.type!=="rule")return!1;let i=!1;for(let s in t[this.name]){let a=t[this.name][s];if(r.selector===a){if(C===s)return!0;i=!0;break}}if(!i)return!1;n-=1}return!1}replace(B,t){return B.replace(this.regexp(),`$1${this.prefixed(t)}`)}add(B,t){let C=this.prefixeds(B);if(this.already(B,C,t))return;let n=this.clone(B,{selector:C[this.name][t]});B.parent.insertBefore(B,n)}old(B){return new t7(this,B)}};var Fr=i7;let s7=Fr;class Bw extends s7{prefixed(B){return B==="-webkit-"?":-webkit-full-screen":B==="-moz-"?":-moz-full-screen":`:${B}fullscreen`}}Bw.names=[":fullscreen"];var a7=Bw;let o7=Fr;class ew extends o7{possible(){return super.possible().concat(["-moz- old","-ms- old"])}prefixed(B){return B==="-webkit-"?"::-webkit-input-placeholder":B==="-ms-"?"::-ms-input-placeholder":B==="-ms- old"?":-ms-input-placeholder":B==="-moz- old"?":-moz-placeholder":`::${B}placeholder`}}ew.names=["::placeholder"];var l7=ew;let c7=Fr;class tw extends c7{prefixed(B){return B==="-ms-"?":-ms-input-placeholder":`:${B}placeholder-shown`}}tw.names=[":placeholder-shown"];var u7=tw;let f7=Fr,d7=gB;class Cw extends f7{constructor(B,t,C){super(B,t,C),this.prefixes&&(this.prefixes=d7.uniq(this.prefixes.map(()=>"-webkit-")))}prefixed(B){return B==="-webkit-"?"::-webkit-file-upload-button":`::${B}file-selector-button`}}Cw.names=["::file-selector-button"];var h7=Cw,Fe=function(e){let B;return e==="-webkit- 2009"||e==="-moz-"?B=2009:e==="-ms-"?B=2012:e==="-webkit-"&&(B="final"),e==="-webkit- 2009"&&(e="-webkit-"),[B,e]};let V0=Rs.list,W0=Fe,p7=U,sc=class extends p7{prefixed(B,t){let C;return[C,t]=W0(t),C===2009?t+"box-flex":super.prefixed(B,t)}normalize(){return"flex"}set(B,t){let C=W0(t)[0];if(C===2009)return B.value=V0.space(B.value)[0],B.value=sc.oldValues[B.value]||B.value,super.set(B,t);if(C===2012){let n=V0.space(B.value);n.length===3&&n[2]==="0"&&(B.value=n.slice(0,2).concat("0px").join(" "))}return super.set(B,t)}};sc.names=["flex","box-flex"];sc.oldValues={auto:"1",none:"0"};var m7=sc;let j0=Fe,g7=U;class nw extends g7{prefixed(B,t){let C;return[C,t]=j0(t),C===2009?t+"box-ordinal-group":C===2012?t+"flex-order":super.prefixed(B,t)}normalize(){return"order"}set(B,t){return j0(t)[0]===2009&&/\d/.test(B.value)?(B.value=(parseInt(B.value)+1).toString(),super.set(B,t)):super.set(B,t)}}nw.names=["order","flex-order","box-ordinal-group"];var v7=nw;let A7=U;class rw extends A7{check(B){let t=B.value;return!t.toLowerCase().includes("alpha(")&&!t.includes("DXImageTransform.Microsoft")&&!t.includes("data:image/svg+xml")}}rw.names=["filter"];var y7=rw;let E7=U,{isPureNumber:S7}=gB;class iw extends E7{insert(B,t,C,n){if(t!=="-ms-")return super.insert(B,t,C);let r=this.clone(B),i=B.prop.replace(/end$/,"start"),s=t+B.prop.replace(/end$/,"span");if(!B.parent.some(a=>a.prop===s)){if(r.prop=s,B.value.includes("span"))r.value=B.value.replace(/span\s/i,"");else{let a;if(B.parent.walkDecls(i,o=>{a=o}),a)if(S7(a.value)){let o=Number(B.value)-Number(a.value)+"";r.value=o}else return;else B.warn(n,`Can not prefix ${B.prop} (${i} is not found)`)}B.cloneBefore(r)}}}iw.names=["grid-row-end","grid-column-end"];var I7=iw;let b7=U;class sw extends b7{check(B){return!B.value.split(/\s+/).some(t=>{let C=t.toLowerCase();return C==="reverse"||C==="alternate-reverse"})}}sw.names=["animation","animation-direction"];var w7=sw;let D7=Fe,P7=U;class aw extends P7{insert(B,t,C){let n;if([n,t]=D7(t),n!==2009)return super.insert(B,t,C);let r=B.value.split(/\s+/).filter(c=>c!=="wrap"&&c!=="nowrap"&&"wrap-reverse");if(r.length===0||B.parent.some(c=>c.prop===t+"box-orient"||c.prop===t+"box-direction"))return;let s=r[0],a=s.includes("row")?"horizontal":"vertical",o=s.includes("reverse")?"reverse":"normal",l=this.clone(B);return l.prop=t+"box-orient",l.value=a,this.needCascade(B)&&(l.raws.before=this.calcBefore(C,B,t)),B.parent.insertBefore(B,l),l=this.clone(B),l.prop=t+"box-direction",l.value=o,this.needCascade(B)&&(l.raws.before=this.calcBefore(C,B,t)),B.parent.insertBefore(B,l)}}aw.names=["flex-flow","box-direction","box-orient"];var R7=aw;let N7=Fe,F7=U;class ow extends F7{normalize(){return"flex"}prefixed(B,t){let C;return[C,t]=N7(t),C===2009?t+"box-flex":C===2012?t+"flex-positive":super.prefixed(B,t)}}ow.names=["flex-grow","flex-positive"];var O7=ow;let k7=Fe,T7=U;class lw extends T7{set(B,t){if(k7(t)[0]!==2009)return super.set(B,t)}}lw.names=["flex-wrap"];var M7=lw;let L7=U,Rn=wB;class cw extends L7{insert(B,t,C,n){if(t!=="-ms-")return super.insert(B,t,C);let r=Rn.parse(B),[i,s]=Rn.translate(r,0,2),[a,o]=Rn.translate(r,1,3);[["grid-row",i],["grid-row-span",s],["grid-column",a],["grid-column-span",o]].forEach(([l,c])=>{Rn.insertDecl(B,l,c)}),Rn.warnTemplateSelectorNotFound(B,n),Rn.warnIfGridRowColumnExists(B,n)}}cw.names=["grid-area"];var H7=cw;let x7=U,qr=wB;class uw extends x7{insert(B,t,C){if(t!=="-ms-")return super.insert(B,t,C);if(B.parent.some(i=>i.prop==="-ms-grid-row-align"))return;let[[n,r]]=qr.parse(B);r?(qr.insertDecl(B,"grid-row-align",n),qr.insertDecl(B,"grid-column-align",r)):(qr.insertDecl(B,"grid-row-align",n),qr.insertDecl(B,"grid-column-align",n))}}uw.names=["place-self"];var G7=uw;let K7=U;class fw extends K7{check(B){let t=B.value;return!t.includes("/")&&!t.includes("span")}normalize(B){return B.replace("-start","")}prefixed(B,t){let C=super.prefixed(B,t);return t==="-ms-"&&(C=C.replace("-start","")),C}}fw.names=["grid-row-start","grid-column-start"];var U7=fw;let Y0=Fe,Q7=U;class Fs extends Q7{check(B){return B.parent&&!B.parent.some(t=>t.prop&&t.prop.startsWith("grid-"))}prefixed(B,t){let C;return[C,t]=Y0(t),C===2012?t+"flex-item-align":super.prefixed(B,t)}normalize(){return"align-self"}set(B,t){let C=Y0(t)[0];if(C===2012)return B.value=Fs.oldValues[B.value]||B.value,super.set(B,t);if(C==="final")return super.set(B,t)}}Fs.names=["align-self","flex-item-align"];Fs.oldValues={"flex-end":"end","flex-start":"start"};var J7=Fs;let V7=U,W7=gB;class dw extends V7{constructor(B,t,C){super(B,t,C),this.prefixes&&(this.prefixes=W7.uniq(this.prefixes.map(n=>n==="-ms-"?"-webkit-":n)))}}dw.names=["appearance"];var j7=dw;let X0=Fe,Y7=U;class hw extends Y7{normalize(){return"flex-basis"}prefixed(B,t){let C;return[C,t]=X0(t),C===2012?t+"flex-preferred-size":super.prefixed(B,t)}set(B,t){let C;if([C,t]=X0(t),C===2012||C==="final")return super.set(B,t)}}hw.names=["flex-basis","flex-preferred-size"];var X7=hw;let Z7=U;class pw extends Z7{normalize(){return this.name.replace("box-image","border")}prefixed(B,t){let C=super.prefixed(B,t);return t==="-webkit-"&&(C=C.replace("border","box-image")),C}}pw.names=["mask-border","mask-border-source","mask-border-slice","mask-border-width","mask-border-outset","mask-border-repeat","mask-box-image","mask-box-image-source","mask-box-image-slice","mask-box-image-width","mask-box-image-outset","mask-box-image-repeat"];var q7=pw;let z7=U;class kt extends z7{insert(B,t,C){let n=B.prop==="mask-composite",r;n?r=B.value.split(","):r=B.value.match(kt.regexp)||[],r=r.map(o=>o.trim()).filter(o=>o);let i=r.length,s;if(i&&(s=this.clone(B),s.value=r.map(o=>kt.oldValues[o]||o).join(", "),r.includes("intersect")&&(s.value+=", xor"),s.prop=t+"mask-composite"),n)return i?(this.needCascade(B)&&(s.raws.before=this.calcBefore(C,B,t)),B.parent.insertBefore(B,s)):void 0;let a=this.clone(B);return a.prop=t+a.prop,i&&(a.value=a.value.replace(kt.regexp,"")),this.needCascade(B)&&(a.raws.before=this.calcBefore(C,B,t)),B.parent.insertBefore(B,a),i?(this.needCascade(B)&&(s.raws.before=this.calcBefore(C,B,t)),B.parent.insertBefore(B,s)):B}}kt.names=["mask","mask-composite"];kt.oldValues={add:"source-over",subtract:"source-out",intersect:"source-in",exclude:"xor"};kt.regexp=new RegExp(`\\s+(${Object.keys(kt.oldValues).join("|")})\\b(?!\\))\\s*(?=[,])`,"ig");var _7=kt;let Z0=Fe,$7=U;class Os extends $7{prefixed(B,t){let C;return[C,t]=Z0(t),C===2009?t+"box-align":C===2012?t+"flex-align":super.prefixed(B,t)}normalize(){return"align-items"}set(B,t){let C=Z0(t)[0];return(C===2009||C===2012)&&(B.value=Os.oldValues[B.value]||B.value),super.set(B,t)}}Os.names=["align-items","flex-align","box-align"];Os.oldValues={"flex-end":"end","flex-start":"start"};var BY=Os;let eY=U;class mw extends eY{set(B,t){return t==="-ms-"&&B.value==="contain"&&(B.value="element"),super.set(B,t)}insert(B,t,C){if(!(B.value==="all"&&t==="-ms-"))return super.insert(B,t,C)}}mw.names=["user-select"];var tY=mw;let q0=Fe,CY=U;class gw extends CY{normalize(){return"flex-shrink"}prefixed(B,t){let C;return[C,t]=q0(t),C===2012?t+"flex-negative":super.prefixed(B,t)}set(B,t){let C;if([C,t]=q0(t),C===2012||C==="final")return super.set(B,t)}}gw.names=["flex-shrink","flex-negative"];var nY=gw;let rY=U;class vw extends rY{prefixed(B,t){return`${t}column-${B}`}normalize(B){return B.includes("inside")?"break-inside":B.includes("before")?"break-before":"break-after"}set(B,t){return(B.prop==="break-inside"&&B.value==="avoid-column"||B.value==="avoid-page")&&(B.value="avoid"),super.set(B,t)}insert(B,t,C){if(B.prop!=="break-inside")return super.insert(B,t,C);if(!(/region/i.test(B.value)||/page/i.test(B.value)))return super.insert(B,t,C)}}vw.names=["break-inside","page-break-inside","column-break-inside","break-before","page-break-before","column-break-before","break-after","page-break-after","column-break-after"];var iY=vw;let sY=U;class ks extends sY{insert(B,t,C){if(t==="-ms-"){let n=this.set(this.clone(B),t);this.needCascade(B)&&(n.raws.before=this.calcBefore(C,B,t));let r="ltr";return B.parent.nodes.forEach(i=>{i.prop==="direction"&&(i.value==="rtl"||i.value==="ltr")&&(r=i.value)}),n.value=ks.msValues[r][B.value]||B.value,B.parent.insertBefore(B,n)}return super.insert(B,t,C)}}ks.names=["writing-mode"];ks.msValues={ltr:{"horizontal-tb":"lr-tb","vertical-rl":"tb-rl","vertical-lr":"tb-lr"},rtl:{"horizontal-tb":"rl-tb","vertical-rl":"bt-rl","vertical-lr":"bt-lr"}};var aY=ks;let oY=U;class Aw extends oY{set(B,t){return B.value=B.value.replace(/\s+fill(\s)/,"$1"),super.set(B,t)}}Aw.names=["border-image"];var lY=Aw;let z0=Fe,cY=U;class Ts extends cY{prefixed(B,t){let C;return[C,t]=z0(t),C===2012?t+"flex-line-pack":super.prefixed(B,t)}normalize(){return"align-content"}set(B,t){let C=z0(t)[0];if(C===2012)return B.value=Ts.oldValues[B.value]||B.value,super.set(B,t);if(C==="final")return super.set(B,t)}}Ts.names=["align-content","flex-line-pack"];Ts.oldValues={"flex-end":"end","flex-start":"start","space-between":"justify","space-around":"distribute"};var uY=Ts;let fY=U;class ze extends fY{prefixed(B,t){return t==="-moz-"?t+(ze.toMozilla[B]||B):super.prefixed(B,t)}normalize(B){return ze.toNormal[B]||B}}ze.names=["border-radius"];ze.toMozilla={};ze.toNormal={};for(let e of["top","bottom"])for(let B of["left","right"]){let t=`border-${e}-${B}-radius`,C=`border-radius-${e}${B}`;ze.names.push(t),ze.names.push(C),ze.toMozilla[t]=C,ze.toNormal[C]=t}var dY=ze;let hY=U;class yw extends hY{prefixed(B,t){return B.includes("-start")?t+B.replace("-block-start","-before"):t+B.replace("-block-end","-after")}normalize(B){return B.includes("-before")?B.replace("-before","-block-start"):B.replace("-after","-block-end")}}yw.names=["border-block-start","border-block-end","margin-block-start","margin-block-end","padding-block-start","padding-block-end","border-before","border-after","margin-before","margin-after","padding-before","padding-after"];var pY=yw;let mY=U,{parseTemplate:gY,warnMissedAreas:vY,getGridGap:AY,warnGridGap:yY,inheritGridGap:EY}=wB;class Ew extends mY{insert(B,t,C,n){if(t!=="-ms-")return super.insert(B,t,C);if(B.parent.some(m=>m.prop==="-ms-grid-rows"))return;let r=AY(B),i=EY(B,r),{rows:s,columns:a,areas:o}=gY({decl:B,gap:i||r}),l=Object.keys(o).length>0,c=Boolean(s),u=Boolean(a);return yY({gap:r,hasColumns:u,decl:B,result:n}),vY(o,B,n),(c&&u||l)&&B.cloneBefore({prop:"-ms-grid-rows",value:s,raws:{}}),u&&B.cloneBefore({prop:"-ms-grid-columns",value:a,raws:{}}),B}}Ew.names=["grid-template"];var SY=Ew;let IY=U;class Sw extends IY{prefixed(B,t){return t+B.replace("-inline","")}normalize(B){return B.replace(/(margin|padding|border)-(start|end)/,"$1-inline-$2")}}Sw.names=["border-inline-start","border-inline-end","margin-inline-start","margin-inline-end","padding-inline-start","padding-inline-end","border-start","border-end","margin-start","margin-end","padding-start","padding-end"];var bY=Sw;let wY=U;class Iw extends wY{check(B){return!B.value.includes("flex-")&&B.value!=="baseline"}prefixed(B,t){return t+"grid-row-align"}normalize(){return"align-self"}}Iw.names=["grid-row-align"];var DY=Iw;let PY=U;class Ms extends PY{keyframeParents(B){let{parent:t}=B;for(;t;){if(t.type==="atrule"&&t.name==="keyframes")return!0;({parent:t}=t)}return!1}contain3d(B){if(B.prop==="transform-origin")return!1;for(let t of Ms.functions3d)if(B.value.includes(`${t}(`))return!0;return!1}set(B,t){return B=super.set(B,t),t==="-ms-"&&(B.value=B.value.replace(/rotatez/gi,"rotate")),B}insert(B,t,C){if(t==="-ms-"){if(!this.contain3d(B)&&!this.keyframeParents(B))return super.insert(B,t,C)}else if(t==="-o-"){if(!this.contain3d(B))return super.insert(B,t,C)}else return super.insert(B,t,C)}}Ms.names=["transform","transform-origin"];Ms.functions3d=["matrix3d","translate3d","translateZ","scale3d","scaleZ","rotate3d","rotateX","rotateY","perspective"];var RY=Ms;let _0=Fe,NY=U;class bw extends NY{normalize(){return"flex-direction"}insert(B,t,C){let n;if([n,t]=_0(t),n!==2009)return super.insert(B,t,C);if(B.parent.some(l=>l.prop===t+"box-orient"||l.prop===t+"box-direction"))return;let i=B.value,s,a;i==="inherit"||i==="initial"||i==="unset"?(s=i,a=i):(s=i.includes("row")?"horizontal":"vertical",a=i.includes("reverse")?"reverse":"normal");let o=this.clone(B);return o.prop=t+"box-orient",o.value=s,this.needCascade(B)&&(o.raws.before=this.calcBefore(C,B,t)),B.parent.insertBefore(B,o),o=this.clone(B),o.prop=t+"box-direction",o.value=a,this.needCascade(B)&&(o.raws.before=this.calcBefore(C,B,t)),B.parent.insertBefore(B,o)}old(B,t){let C;return[C,t]=_0(t),C===2009?[t+"box-orient",t+"box-direction"]:super.old(B,t)}}bw.names=["flex-direction","box-direction","box-orient"];var FY=bw;let OY=U;class ww extends OY{check(B){return B.value==="pixelated"}prefixed(B,t){return t==="-ms-"?"-ms-interpolation-mode":super.prefixed(B,t)}set(B,t){return t!=="-ms-"?super.set(B,t):(B.prop="-ms-interpolation-mode",B.value="nearest-neighbor",B)}normalize(){return"image-rendering"}process(B,t){return super.process(B,t)}}ww.names=["image-rendering","interpolation-mode"];var kY=ww;let TY=U,MY=gB;class Dw extends TY{constructor(B,t,C){super(B,t,C),this.prefixes&&(this.prefixes=MY.uniq(this.prefixes.map(n=>n==="-ms-"?"-webkit-":n)))}}Dw.names=["backdrop-filter"];var LY=Dw;let HY=U,xY=gB;class Pw extends HY{constructor(B,t,C){super(B,t,C),this.prefixes&&(this.prefixes=xY.uniq(this.prefixes.map(n=>n==="-ms-"?"-webkit-":n)))}check(B){return B.value.toLowerCase()==="text"}}Pw.names=["background-clip"];var GY=Pw;let KY=U;const UY=["none","underline","overline","line-through","blink","inherit","initial","unset"];class Rw extends KY{check(B){return B.value.split(/\s+/).some(t=>!UY.includes(t))}}Rw.names=["text-decoration"];var QY=Rw;let $0=Fe,JY=U;class Ls extends JY{prefixed(B,t){let C;return[C,t]=$0(t),C===2009?t+"box-pack":C===2012?t+"flex-pack":super.prefixed(B,t)}normalize(){return"justify-content"}set(B,t){let C=$0(t)[0];if(C===2009||C===2012){let n=Ls.oldValues[B.value]||B.value;if(B.value=n,C!==2009||n!=="distribute")return super.set(B,t)}else if(C==="final")return super.set(B,t)}}Ls.names=["justify-content","flex-pack","box-pack"];Ls.oldValues={"flex-end":"end","flex-start":"start","space-between":"justify","space-around":"distribute"};var VY=Ls;let WY=U;class Nw extends WY{set(B,t){let C=B.value.toLowerCase();return t==="-webkit-"&&!C.includes(" ")&&C!=="contain"&&C!=="cover"&&(B.value=B.value+" "+B.value),super.set(B,t)}}Nw.names=["background-size"];var jY=Nw;let YY=U,Pu=wB;class Fw extends YY{insert(B,t,C){if(t!=="-ms-")return super.insert(B,t,C);let n=Pu.parse(B),[r,i]=Pu.translate(n,0,1);n[0]&&n[0].includes("span")&&(i=n[0].join("").replace(/\D/g,"")),[[B.prop,r],[`${B.prop}-span`,i]].forEach(([a,o])=>{Pu.insertDecl(B,a,o)})}}Fw.names=["grid-row","grid-column"];var XY=Fw;let ZY=U,{prefixTrackProp:Bg,prefixTrackValue:qY,autoplaceGridItems:zY,getGridGap:_Y,inheritGridGap:$Y}=wB,BX=qj;class Ow extends ZY{prefixed(B,t){return t==="-ms-"?Bg({prop:B,prefix:t}):super.prefixed(B,t)}normalize(B){return B.replace(/^grid-(rows|columns)/,"grid-template-$1")}insert(B,t,C,n){if(t!=="-ms-")return super.insert(B,t,C);let{parent:r,prop:i,value:s}=B,a=i.includes("rows"),o=i.includes("columns"),l=r.some(h=>h.prop==="grid-template"||h.prop==="grid-template-areas");if(l&&a)return!1;let c=new BX({options:{}}),u=c.gridStatus(r,n),m=_Y(B);m=$Y(B,m)||m;let f=a?m.row:m.column;(u==="no-autoplace"||u===!0)&&!l&&(f=null);let g=qY({value:s,gap:f});B.cloneBefore({prop:Bg({prop:i,prefix:t}),value:g});let p=r.nodes.find(h=>h.prop==="grid-auto-flow"),d="row";if(p&&!c.disabled(p,n)&&(d=p.value.trim()),u==="autoplace"){let h=r.nodes.find(A=>A.prop==="grid-template-rows");if(!h&&l)return;if(!h&&!l){B.warn(n,"Autoplacement does not work without grid-template-rows property");return}!r.nodes.find(A=>A.prop==="grid-template-columns")&&!l&&B.warn(n,"Autoplacement does not work without grid-template-columns property"),o&&!l&&zY(B,n,m,d)}}}Ow.names=["grid-template-rows","grid-template-columns","grid-rows","grid-columns"];var eX=Ow;let tX=U;class kw extends tX{check(B){return!B.value.includes("flex-")&&B.value!=="baseline"}prefixed(B,t){return t+"grid-column-align"}normalize(){return"justify-self"}}kw.names=["grid-column-align"];var CX=kw;let nX=U;class Tw extends nX{prefixed(B,t){return t==="-moz-"?"color-adjust":t+"print-color-adjust"}normalize(){return"print-color-adjust"}}Tw.names=["print-color-adjust","color-adjust"];var rX=Tw;let iX=U;class Mw extends iX{prefixed(B,t){return t+"scroll-chaining"}normalize(){return"overscroll-behavior"}set(B,t){return B.value==="auto"?B.value="chained":(B.value==="none"||B.value==="contain")&&(B.value="none"),super.set(B,t)}}Mw.names=["overscroll-behavior","scroll-chaining"];var sX=Mw;let aX=U,{parseGridAreas:oX,warnMissedAreas:lX,prefixTrackProp:cX,prefixTrackValue:eg,getGridGap:uX,warnGridGap:fX,inheritGridGap:dX}=wB;function hX(e){return e.trim().slice(1,-1).split(/["']\s*["']?/g)}class Lw extends aX{insert(B,t,C,n){if(t!=="-ms-")return super.insert(B,t,C);let r=!1,i=!1,s=B.parent,a=uX(B);a=dX(B,a)||a,s.walkDecls(/-ms-grid-rows/,c=>c.remove()),s.walkDecls(/grid-template-(rows|columns)/,c=>{if(c.prop==="grid-template-rows"){i=!0;let{prop:u,value:m}=c;c.cloneBefore({prop:cX({prop:u,prefix:t}),value:eg({value:m,gap:a.row})})}else r=!0});let o=hX(B.value);r&&!i&&a.row&&o.length>1&&B.cloneBefore({prop:"-ms-grid-rows",value:eg({value:`repeat(${o.length}, auto)`,gap:a.row}),raws:{}}),fX({gap:a,hasColumns:r,decl:B,result:n});let l=oX({rows:o,gap:a});return lX(l,B,n),B}}Lw.names=["grid-template-areas"];var pX=Lw;let mX=U;class Hw extends mX{set(B,t){return t==="-webkit-"&&(B.value=B.value.replace(/\s*(right|left)\s*/i,"")),super.set(B,t)}}Hw.names=["text-emphasis-position"];var gX=Hw;let vX=U;class xw extends vX{set(B,t){return B.prop==="text-decoration-skip-ink"&&B.value==="auto"?(B.prop=t+"text-decoration-skip",B.value="ink",B):super.set(B,t)}}xw.names=["text-decoration-skip-ink","text-decoration-skip"];var AX=xw,yX={wrap:Gw,limit:Kw,validate:Uw,test:$h,curry:EX,name:Qw};function Gw(e,B,t){var C=B-e;return((t-e)%C+C)%C+e}function Kw(e,B,t){return Math.max(e,Math.min(B,t))}function Uw(e,B,t,C,n){if(!$h(e,B,t,C,n))throw new Error(t+" is outside of range ["+e+","+B+")");return t}function $h(e,B,t,C,n){return!(t<e||t>B||n&&t===B||C&&t===e)}function Qw(e,B,t,C){return(t?"(":"[")+e+","+B+(C?")":"]")}function EX(e,B,t,C){var n=Qw.bind(null,e,B,t,C);return{wrap:Gw.bind(null,e,B),limit:Kw.bind(null,e,B),validate:function(r){return Uw(e,B,r,t,C)},test:function(r){return $h(e,B,r,t,C)},toString:n,name:n}}let Ru=qh,SX=yX,IX=Ns,bX=Et,wX=gB,tg=/top|left|right|bottom/gi;class EC extends bX{replace(B,t){let C=Ru(B);for(let n of C.nodes){let r=this.name;if(n.type==="function"&&n.value===r)if(n.nodes=this.newDirection(n.nodes),n.nodes=this.normalize(n.nodes,r),t==="-webkit- old"){if(!this.oldWebkit(n))return!1}else n.nodes=this.convertDirection(n.nodes),n.value=t+n.value}return C.toString()}replaceFirst(B,...t){return t.map(n=>n===" "?{type:"space",value:n}:{type:"word",value:n}).concat(B.slice(1))}normalizeUnit(B,t){return`${parseFloat(B)/t*360}deg`}normalize(B,t){if(!B[0])return B;if(/-?\d+(.\d+)?grad/.test(B[0].value))B[0].value=this.normalizeUnit(B[0].value,400);else if(/-?\d+(.\d+)?rad/.test(B[0].value))B[0].value=this.normalizeUnit(B[0].value,2*Math.PI);else if(/-?\d+(.\d+)?turn/.test(B[0].value))B[0].value=this.normalizeUnit(B[0].value,1);else if(B[0].value.includes("deg")){let C=parseFloat(B[0].value);C=SX.wrap(0,360,C),B[0].value=`${C}deg`}if(t==="linear-gradient"||t==="repeating-linear-gradient"){let C=B[0].value;C==="0deg"||C==="0"?B=this.replaceFirst(B,"to"," ","top"):C==="90deg"?B=this.replaceFirst(B,"to"," ","right"):C==="180deg"?B=this.replaceFirst(B,"to"," ","bottom"):C==="270deg"&&(B=this.replaceFirst(B,"to"," ","left"))}return B}newDirection(B){if(B[0].value==="to"||(tg.lastIndex=0,!tg.test(B[0].value)))return B;B.unshift({type:"word",value:"to"},{type:"space",value:" "});for(let t=2;t<B.length&&B[t].type!=="div";t++)B[t].type==="word"&&(B[t].value=this.revertDirection(B[t].value));return B}isRadial(B){let t="before";for(let C of B)if(t==="before"&&C.type==="space")t="at";else if(t==="at"&&C.value==="at")t="after";else{if(t==="after"&&C.type==="space")return!0;if(C.type==="div")break;t="before"}return!1}convertDirection(B){return B.length>0&&(B[0].value==="to"?this.fixDirection(B):B[0].value.includes("deg")?this.fixAngle(B):this.isRadial(B)&&this.fixRadial(B)),B}fixDirection(B){B.splice(0,2);for(let t of B){if(t.type==="div")break;t.type==="word"&&(t.value=this.revertDirection(t.value))}}fixAngle(B){let t=B[0].value;t=parseFloat(t),t=Math.abs(450-t)%360,t=this.roundFloat(t,3),B[0].value=`${t}deg`}fixRadial(B){let t=[],C=[],n,r,i,s,a;for(s=0;s<B.length-2;s++)if(n=B[s],r=B[s+1],i=B[s+2],n.type==="space"&&r.value==="at"&&i.type==="space"){a=s+3;break}else t.push(n);let o;for(s=a;s<B.length;s++)if(B[s].type==="div"){o=B[s];break}else C.push(B[s]);B.splice(0,s,...C,o,...t)}revertDirection(B){return EC.directions[B.toLowerCase()]||B}roundFloat(B,t){return parseFloat(B.toFixed(t))}oldWebkit(B){let{nodes:t}=B,C=Ru.stringify(B.nodes);if(this.name!=="linear-gradient"||t[0]&&t[0].value.includes("deg")||C.includes("px")||C.includes("-corner")||C.includes("-side"))return!1;let n=[[]];for(let r of t)n[n.length-1].push(r),r.type==="div"&&r.value===","&&n.push([]);this.oldDirection(n),this.colorStops(n),B.nodes=[];for(let r of n)B.nodes=B.nodes.concat(r);return B.nodes.unshift({type:"word",value:"linear"},this.cloneDiv(B.nodes)),B.value="-webkit-gradient",!0}oldDirection(B){let t=this.cloneDiv(B[0]);if(B[0][0].value!=="to")return B.unshift([{type:"word",value:EC.oldDirections.bottom},t]);{let C=[];for(let r of B[0].slice(2))r.type==="word"&&C.push(r.value.toLowerCase());C=C.join(" ");let n=EC.oldDirections[C]||C;return B[0]=[{type:"word",value:n},t],B[0]}}cloneDiv(B){for(let t of B)if(t.type==="div"&&t.value===",")return t;return{type:"div",value:",",after:" "}}colorStops(B){let t=[];for(let C=0;C<B.length;C++){let n,r=B[C],i;if(C===0)continue;let s=Ru.stringify(r[0]);r[1]&&r[1].type==="word"?n=r[1].value:r[2]&&r[2].type==="word"&&(n=r[2].value);let a;C===1&&(!n||n==="0%")?a=`from(${s})`:C===B.length-1&&(!n||n==="100%")?a=`to(${s})`:n?a=`color-stop(${n}, ${s})`:a=`color-stop(${s})`;let o=r[r.length-1];B[C]=[{type:"word",value:a}],o.type==="div"&&o.value===","&&(i=B[C].push(o)),t.push(i)}return t}old(B){if(B==="-webkit-"){let t;this.name==="linear-gradient"?t="linear":this.name==="repeating-linear-gradient"?t="repeating-linear":this.name==="repeating-radial-gradient"?t="repeating-radial":t="radial";let C="-gradient",n=wX.regexp(`-webkit-(${t}-gradient|gradient\\(\\s*${t})`,!1);return new IX(this.name,B+this.name,C,n)}else return super.old(B)}add(B,t){let C=B.prop;if(C.includes("mask")){if(t==="-webkit-"||t==="-webkit- old")return super.add(B,t)}else if(C==="list-style"||C==="list-style-image"||C==="content"){if(t==="-webkit-"||t==="-webkit- old")return super.add(B,t)}else return super.add(B,t)}}EC.names=["linear-gradient","repeating-linear-gradient","radial-gradient","repeating-radial-gradient"];EC.directions={top:"bottom",left:"right",bottom:"top",right:"left"};EC.oldDirections={top:"left bottom, left top",left:"right top, left top",bottom:"left top, left bottom",right:"left top, right top","top right":"left bottom, right top","top left":"right bottom, left top","right top":"left bottom, right top","right bottom":"left top, right bottom","bottom right":"left top, right bottom","bottom left":"right top, left bottom","left top":"right bottom, left top","left bottom":"right top, left bottom"};var DX=EC;let PX=Ns,RX=Et;function Cg(e){return new RegExp(`(^|[\\s,(])(${e}($|[\\s),]))`,"gi")}class Jw extends RX{regexp(){return this.regexpCache||(this.regexpCache=Cg(this.name)),this.regexpCache}isStretch(){return this.name==="stretch"||this.name==="fill"||this.name==="fill-available"}replace(B,t){return t==="-moz-"&&this.isStretch()?B.replace(this.regexp(),"$1-moz-available$3"):t==="-webkit-"&&this.isStretch()?B.replace(this.regexp(),"$1-webkit-fill-available$3"):super.replace(B,t)}old(B){let t=B+this.name;return this.isStretch()&&(B==="-moz-"?t="-moz-available":B==="-webkit-"&&(t="-webkit-fill-available")),new PX(this.name,t,t,Cg(t))}add(B,t){if(!(B.prop.includes("grid")&&t!=="-webkit-"))return super.add(B,t)}}Jw.names=["max-content","min-content","fit-content","fill","fill-available","stretch"];var NX=Jw;let ng=Ns,FX=Et;class Vw extends FX{replace(B,t){return t==="-webkit-"?B.replace(this.regexp(),"$1-webkit-optimize-contrast"):t==="-moz-"?B.replace(this.regexp(),"$1-moz-crisp-edges"):super.replace(B,t)}old(B){return B==="-webkit-"?new ng(this.name,"-webkit-optimize-contrast"):B==="-moz-"?new ng(this.name,"-moz-crisp-edges"):super.old(B)}}Vw.names=["pixelated"];var OX=Vw;let kX=Et;class Ww extends kX{replace(B,t){let C=super.replace(B,t);return t==="-webkit-"&&(C=C.replace(/("[^"]+"|'[^']+')(\s+\d+\w)/gi,"url($1)$2")),C}}Ww.names=["image-set"];var TX=Ww;let MX=Rs.list,LX=Et;class jw extends LX{replace(B,t){return MX.space(B).map(C=>{if(C.slice(0,+this.name.length+1)!==this.name+"(")return C;let n=C.lastIndexOf(")"),r=C.slice(n+1),i=C.slice(this.name.length+1,n);if(t==="-webkit-"){let s=i.match(/\d*.?\d+%?/);s?(i=i.slice(s[0].length).trim(),i+=`, ${s[0]}`):i+=", 0.5"}return t+this.name+"("+i+")"+r}).join(" ")}}jw.names=["cross-fade"];var HX=jw;let xX=Fe,GX=Ns,KX=Et;class Yw extends KX{constructor(B,t){super(B,t),B==="display-flex"&&(this.name="flex")}check(B){return B.prop==="display"&&B.value===this.name}prefixed(B){let t,C;return[t,B]=xX(B),t===2009?this.name==="flex"?C="box":C="inline-box":t===2012?this.name==="flex"?C="flexbox":C="inline-flexbox":t==="final"&&(C=this.name),B+C}replace(B,t){return this.prefixed(t)}old(B){let t=this.prefixed(B);if(t)return new GX(this.name,t)}}Yw.names=["display-flex","inline-flex"];var UX=Yw;let QX=Et;class Xw extends QX{constructor(B,t){super(B,t),B==="display-grid"&&(this.name="grid")}check(B){return B.prop==="display"&&B.value===this.name}}Xw.names=["display-grid","inline-grid"];var JX=Xw;let VX=Et;class Zw extends VX{constructor(B,t){super(B,t),B==="filter-function"&&(this.name="filter")}}Zw.names=["filter","filter-function"];var WX=Zw;let jX=Fr,YX=gB;class qw extends jX{constructor(B,t,C){super(B,t,C),this.prefixes&&(this.prefixes=YX.uniq(this.prefixes.map(()=>"-webkit-")))}prefixed(B){return B==="-webkit-"?":-webkit-autofill":`:${B}autofill`}}qw.names=[":autofill"];var XX=qw;let J=U,Hs=Fr,MC=Et,ZX=a7,qX=l7,zX=u7,_X=h7,$X=m7,BZ=v7,eZ=y7,tZ=I7,CZ=w7,nZ=R7,rZ=O7,iZ=M7,sZ=H7,aZ=G7,oZ=U7,lZ=J7,cZ=j7,uZ=X7,fZ=q7,dZ=_7,hZ=BY,pZ=tY,mZ=nY,gZ=iY,vZ=aY,AZ=lY,yZ=uY,EZ=dY,SZ=pY,IZ=SY,bZ=bY,wZ=DY,DZ=RY,PZ=FY,RZ=kY,NZ=LY,FZ=GY,OZ=QY,kZ=VY,TZ=jY,MZ=XY,LZ=eX,HZ=CX,xZ=rX,GZ=sX,KZ=pX,UZ=gX,QZ=AX,JZ=DX,VZ=NX,WZ=OX,jZ=TX,YZ=HX,XZ=UX,ZZ=JX,qZ=WX,zZ=XX;Hs.hack(zZ);Hs.hack(ZX);Hs.hack(qX);Hs.hack(zX);Hs.hack(_X);J.hack($X);J.hack(BZ);J.hack(eZ);J.hack(tZ);J.hack(CZ);J.hack(nZ);J.hack(rZ);J.hack(iZ);J.hack(sZ);J.hack(aZ);J.hack(oZ);J.hack(lZ);J.hack(cZ);J.hack(uZ);J.hack(fZ);J.hack(dZ);J.hack(hZ);J.hack(pZ);J.hack(mZ);J.hack(gZ);J.hack(vZ);J.hack(AZ);J.hack(yZ);J.hack(EZ);J.hack(SZ);J.hack(IZ);J.hack(bZ);J.hack(wZ);J.hack(DZ);J.hack(PZ);J.hack(RZ);J.hack(NZ);J.hack(FZ);J.hack(OZ);J.hack(kZ);J.hack(TZ);J.hack(MZ);J.hack(LZ);J.hack(HZ);J.hack(GZ);J.hack(KZ);J.hack(xZ);J.hack(UZ);J.hack(QZ);MC.hack(JZ);MC.hack(VZ);MC.hack(WZ);MC.hack(jZ);MC.hack(YZ);MC.hack(XZ);MC.hack(ZZ);MC.hack(qZ);let _Z=En.feature;function zw(e,B){return e=e.split(" "),B=B.split(" "),e[0]>B[0]?1:e[0]<B[0]?-1:Math.sign(parseFloat(e[1])-parseFloat(B[1]))}function F(e,B,t){e=_Z(e),t||([t,B]=[B,{}]);let C=B.match||/\sx($|\s)/,n=[];for(let r in e.stats){let i=e.stats[r];for(let s in i)i[s].match(C)&&n.push(r+" "+s)}t(n.sort(zw))}let Dd={};function R(e,B){for(let t of e)Dd[t]=Object.assign({},B)}function to(e,B){for(let t of e)Dd[t].browsers=Dd[t].browsers.concat(B.browsers).sort(zw)}let $Z=eI;F($Z,e=>R(["border-radius","border-top-left-radius","border-top-right-radius","border-bottom-right-radius","border-bottom-left-radius"],{mistakes:["-khtml-","-ms-","-o-"],feature:"border-radius",browsers:e}));let Bq=oI;F(Bq,e=>R(["box-shadow"],{mistakes:["-khtml-"],feature:"css-boxshadow",browsers:e}));let eq=CI;F(eq,e=>R(["animation","animation-name","animation-duration","animation-delay","animation-direction","animation-fill-mode","animation-iteration-count","animation-play-state","animation-timing-function","@keyframes"],{mistakes:["-khtml-","-ms-"],feature:"css-animation",browsers:e}));let tq=GI;F(tq,e=>R(["transition","transition-property","transition-duration","transition-delay","transition-timing-function"],{mistakes:["-khtml-","-ms-"],browsers:e,feature:"css-transitions"}));let Cq=cb;F(Cq,e=>R(["transform","transform-origin"],{feature:"transforms2d",browsers:e}));let _w=ub;F(_w,e=>(R(["perspective","perspective-origin"],{feature:"transforms3d",browsers:e}),R(["transform-style"],{mistakes:["-ms-","-o-"],browsers:e,feature:"transforms3d"})));F(_w,{match:/y\sx|y\s#2/},e=>R(["backface-visibility"],{mistakes:["-ms-","-o-"],feature:"transforms3d",browsers:e}));let $w=vI;F($w,{match:/y\sx/},e=>R(["linear-gradient","repeating-linear-gradient","radial-gradient","repeating-radial-gradient"],{props:["background","background-image","border-image","mask","list-style","list-style-image","content","mask-image"],mistakes:["-ms-"],feature:"css-gradients",browsers:e}));F($w,{match:/a\sx/},e=>(e=e.map(B=>/firefox|op/.test(B)?B:`${B} old`),to(["linear-gradient","repeating-linear-gradient","radial-gradient","repeating-radial-gradient"],{feature:"css-gradients",browsers:e})));let nq=QI;F(nq,e=>R(["box-sizing"],{feature:"css3-boxsizing",browsers:e}));let rq=gI;F(rq,e=>R(["filter"],{feature:"css-filters",browsers:e}));let iq=mI;F(iq,e=>R(["filter-function"],{props:["background","background-image","border-image","mask","list-style","list-style-image","content","mask-image"],feature:"css-filter-function",browsers:e}));let sq=sI;F(sq,{match:/y\sx|y\s#2/},e=>R(["backdrop-filter"],{feature:"css-backdrop-filter",browsers:e}));let aq=dI;F(aq,e=>R(["element"],{props:["background","background-image","border-image","mask","list-style","list-style-image","content","mask-image"],feature:"css-element-function",browsers:e}));let oq=nb;F(oq,e=>{R(["columns","column-width","column-gap","column-rule","column-rule-color","column-rule-width","column-count","column-rule-style","column-span","column-fill"],{feature:"multicolumn",browsers:e});let B=e.filter(t=>!/firefox/.test(t));R(["break-before","break-after","break-inside"],{feature:"multicolumn",browsers:B})});let lq=fb;F(lq,e=>R(["user-select"],{mistakes:["-khtml-"],feature:"user-select-none",browsers:e}));let BD=jI;F(BD,{match:/a\sx/},e=>{e=e.map(B=>/ie|firefox/.test(B)?B:`${B} 2009`),R(["display-flex","inline-flex"],{props:["display"],feature:"flexbox",browsers:e}),R(["flex","flex-grow","flex-shrink","flex-basis"],{feature:"flexbox",browsers:e}),R(["flex-direction","flex-wrap","flex-flow","justify-content","order","align-items","align-self","align-content"],{feature:"flexbox",browsers:e})});F(BD,{match:/y\sx/},e=>{to(["display-flex","inline-flex"],{feature:"flexbox",browsers:e}),to(["flex","flex-grow","flex-shrink","flex-basis"],{feature:"flexbox",browsers:e}),to(["flex-direction","flex-wrap","flex-flow","justify-content","order","align-items","align-self","align-content"],{feature:"flexbox",browsers:e})});let cq=tI;F(cq,e=>R(["calc"],{props:["*"],feature:"calc",browsers:e}));let uq=$S;F(uq,e=>R(["background-origin","background-size"],{feature:"background-img-opts",browsers:e}));let fq=_S;F(fq,e=>R(["background-clip"],{feature:"background-clip-text",browsers:e}));let dq=YI;F(dq,e=>R(["font-feature-settings","font-variant-ligatures","font-language-override"],{feature:"font-feature",browsers:e}));let hq=XI;F(hq,e=>R(["font-kerning"],{feature:"font-kerning",browsers:e}));let pq=BI;F(pq,e=>R(["border-image"],{feature:"border-image",browsers:e}));let mq=OI;F(mq,e=>R(["::selection"],{selector:!0,feature:"css-selection",browsers:e}));let gq=PI;F(gq,e=>{R(["::placeholder"],{selector:!0,feature:"css-placeholder",browsers:e.concat(["ie 10 old","ie 11 old","firefox 18 old"])})});let vq=DI;F(vq,e=>{R([":placeholder-shown"],{selector:!0,feature:"css-placeholder-shown",browsers:e})});let Aq=yI;F(Aq,e=>R(["hyphens"],{feature:"css-hyphens",browsers:e}));let eD=ZI;F(eD,e=>R([":fullscreen"],{selector:!0,feature:"fullscreen",browsers:e}));F(eD,{match:/x(\s#2|$)/},e=>R(["::backdrop"],{selector:!0,feature:"fullscreen",browsers:e}));let yq=pI;F(yq,e=>R(["::file-selector-button"],{selector:!0,feature:"file-selector-button",browsers:e}));let Eq=iI;F(Eq,e=>R([":autofill"],{selector:!0,feature:"css-autofill",browsers:e}));let Sq=WI;F(Sq,e=>R(["tab-size"],{feature:"css3-tabsize",browsers:e}));let B2=qI,ac=["width","min-width","max-width","height","min-height","max-height","inline-size","min-inline-size","max-inline-size","block-size","min-block-size","max-block-size","grid","grid-template","grid-template-rows","grid-template-columns","grid-auto-columns","grid-auto-rows"];F(B2,e=>R(["max-content","min-content"],{props:ac,feature:"intrinsic-width",browsers:e}));F(B2,{match:/x|\s#4/},e=>R(["fill","fill-available"],{props:ac,feature:"intrinsic-width",browsers:e}));F(B2,{match:/x|\s#5/},e=>R(["fit-content"],{props:ac,feature:"intrinsic-width",browsers:e}));let Iq=KI;F(Iq,e=>R(["stretch"],{props:ac,feature:"css-width-stretch",browsers:e}));let bq=VI;F(bq,e=>R(["zoom-in","zoom-out"],{props:["cursor"],feature:"css3-cursors-newer",browsers:e}));let wq=JI;F(wq,e=>R(["grab","grabbing"],{props:["cursor"],feature:"css3-cursors-grab",browsers:e}));let Dq=MI;F(Dq,e=>R(["sticky"],{props:["position"],feature:"css-sticky",browsers:e}));let Pq=ib;F(Pq,e=>R(["touch-action"],{feature:"pointer",browsers:e}));let Rq=sb;F(Rq,{match:/x.*#[235]/},e=>R(["text-decoration-skip","text-decoration-skip-ink"],{feature:"text-decoration",browsers:e}));let Nq=tb;F(Nq,e=>R(["text-decoration"],{feature:"text-decoration",browsers:e}));let Fq=Bb;F(Fq,e=>R(["text-decoration-color"],{feature:"text-decoration",browsers:e}));let Oq=eb;F(Oq,e=>R(["text-decoration-line"],{feature:"text-decoration",browsers:e}));let kq=Cb;F(kq,e=>R(["text-decoration-style"],{feature:"text-decoration",browsers:e}));let Tq=lb;F(Tq,e=>R(["text-size-adjust"],{feature:"text-size-adjust",browsers:e}));let Mq=II;F(Mq,e=>{R(["mask-clip","mask-composite","mask-image","mask-origin","mask-repeat","mask-border-repeat","mask-border-source"],{feature:"css-masks",browsers:e}),R(["mask","mask-position","mask-size","mask-border","mask-border-outset","mask-border-width","mask-border-slice"],{feature:"css-masks",browsers:e})});let Lq=lI;F(Lq,e=>R(["clip-path"],{feature:"css-clip-path",browsers:e}));let Hq=aI;F(Hq,e=>R(["box-decoration-break"],{feature:"css-boxdecorationbreak",browsers:e}));let xq=rb;F(xq,e=>R(["object-fit","object-position"],{feature:"object-fit",browsers:e}));let Gq=kI;F(Gq,e=>R(["shape-margin","shape-outside","shape-image-threshold"],{feature:"css-shapes",browsers:e}));let Kq=ob;F(Kq,e=>R(["text-overflow"],{feature:"text-overflow",browsers:e}));let Uq=fI;F(Uq,e=>R(["@viewport"],{feature:"css-deviceadaptation",browsers:e}));let Qq=bI;F(Qq,{match:/( x($| )|a #2)/},e=>R(["@resolution"],{feature:"css-media-resolution",browsers:e}));let Jq=LI;F(Jq,e=>R(["text-align-last"],{feature:"css-text-align-last",browsers:e}));let tD=cI;F(tD,{match:/y x|a x #1/},e=>R(["pixelated"],{props:["image-rendering"],feature:"css-crisp-edges",browsers:e}));F(tD,{match:/a x #2/},e=>R(["image-rendering"],{feature:"css-crisp-edges",browsers:e}));let CD=SI;F(CD,e=>R(["border-inline-start","border-inline-end","margin-inline-start","margin-inline-end","padding-inline-start","padding-inline-end"],{feature:"css-logical-props",browsers:e}));F(CD,{match:/x\s#2/},e=>R(["border-block-start","border-block-end","margin-block-start","margin-block-end","padding-block-start","padding-block-end"],{feature:"css-logical-props",browsers:e}));let Vq=rI;F(Vq,{match:/#2|x/},e=>R(["appearance"],{feature:"css-appearance",browsers:e}));let Wq=TI;F(Wq,e=>R(["scroll-snap-type","scroll-snap-coordinate","scroll-snap-destination","scroll-snap-points-x","scroll-snap-points-y"],{feature:"css-snappoints",browsers:e}));let jq=FI;F(jq,e=>R(["flow-into","flow-from","region-fragment"],{feature:"css-regions",browsers:e}));let Yq=EI;F(Yq,e=>R(["image-set"],{props:["background","background-image","border-image","cursor","mask","mask-image","list-style","list-style-image","content"],feature:"css-image-set",browsers:e}));let Xq=UI;F(Xq,{match:/a|x/},e=>R(["writing-mode"],{feature:"css-writing-mode",browsers:e}));let Zq=uI;F(Zq,e=>R(["cross-fade"],{props:["background","background-image","border-image","mask","list-style","list-style-image","content","mask-image"],feature:"css-cross-fade",browsers:e}));let qq=NI;F(qq,e=>R([":read-only",":read-write"],{selector:!0,feature:"css-read-only-write",browsers:e}));let zq=ab;F(zq,e=>R(["text-emphasis","text-emphasis-position","text-emphasis-style","text-emphasis-color"],{feature:"text-emphasis",browsers:e}));let nD=AI;F(nD,e=>{R(["display-grid","inline-grid"],{props:["display"],feature:"css-grid",browsers:e}),R(["grid-template-columns","grid-template-rows","grid-row-start","grid-column-start","grid-row-end","grid-column-end","grid-row","grid-column","grid-area","grid-template","grid-template-areas","place-self"],{feature:"css-grid",browsers:e})});F(nD,{match:/a x/},e=>R(["grid-column-align","grid-row-align"],{feature:"css-grid",browsers:e}));let _q=xI;F(_q,e=>R(["text-spacing"],{feature:"css-text-spacing",browsers:e}));let $q=nI;F($q,e=>R([":any-link"],{selector:!0,feature:"css-any-link",browsers:e}));let Bz=_I;F(Bz,e=>R(["isolate"],{props:["unicode-bidi"],feature:"css-unicode-bidi",browsers:e}));let ez=$I;F(ez,e=>R(["plaintext"],{props:["unicode-bidi"],feature:"css-unicode-bidi",browsers:e}));let tz=zI;F(tz,{match:/y x/},e=>R(["isolate-override"],{props:["unicode-bidi"],feature:"css-unicode-bidi",browsers:e}));let Cz=wI;F(Cz,{match:/a #1/},e=>R(["overscroll-behavior"],{feature:"css-overscroll-behavior",browsers:e}));let nz=HI;F(nz,e=>R(["text-orientation"],{feature:"css-text-orientation",browsers:e}));let rz=RI;F(rz,e=>R(["print-color-adjust","color-adjust"],{feature:"css-print-color-adjust",browsers:e}));let iz=ZS;iz.defaults;function rg(e,B){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(e);B&&(C=C.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,C)}return t}function k(e){for(var B=1;B<arguments.length;B++){var t=arguments[B]!=null?arguments[B]:{};B%2?rg(Object(t),!0).forEach(function(C){MB(e,C,t[C])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):rg(Object(t)).forEach(function(C){Object.defineProperty(e,C,Object.getOwnPropertyDescriptor(t,C))})}return e}function cl(e){return cl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(B){return typeof B}:function(B){return B&&typeof Symbol=="function"&&B.constructor===Symbol&&B!==Symbol.prototype?"symbol":typeof B},cl(e)}function sz(e,B){if(!(e instanceof B))throw new TypeError("Cannot call a class as a function")}function ig(e,B){for(var t=0;t<B.length;t++){var C=B[t];C.enumerable=C.enumerable||!1,C.configurable=!0,"value"in C&&(C.writable=!0),Object.defineProperty(e,C.key,C)}}function az(e,B,t){return B&&ig(e.prototype,B),t&&ig(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function MB(e,B,t){return B in e?Object.defineProperty(e,B,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[B]=t,e}function e2(e,B){return lz(e)||uz(e,B)||rD(e,B)||dz()}function xs(e){return oz(e)||cz(e)||rD(e)||fz()}function oz(e){if(Array.isArray(e))return Pd(e)}function lz(e){if(Array.isArray(e))return e}function cz(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function uz(e,B){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var C=[],n=!0,r=!1,i,s;try{for(t=t.call(e);!(n=(i=t.next()).done)&&(C.push(i.value),!(B&&C.length===B));n=!0);}catch(a){r=!0,s=a}finally{try{!n&&t.return!=null&&t.return()}finally{if(r)throw s}}return C}}function rD(e,B){if(e){if(typeof e=="string")return Pd(e,B);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Pd(e,B)}}function Pd(e,B){(B==null||B>e.length)&&(B=e.length);for(var t=0,C=new Array(B);t<B;t++)C[t]=e[t];return C}function fz(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dz(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var sg=function(){},t2={},iD={},sD=null,aD={mark:sg,measure:sg};try{typeof window<"u"&&(t2=window),typeof document<"u"&&(iD=document),typeof MutationObserver<"u"&&(sD=MutationObserver),typeof performance<"u"&&(aD=performance)}catch{}var hz=t2.navigator||{},ag=hz.userAgent,og=ag===void 0?"":ag,RC=t2,pB=iD,lg=sD,Pa=aD;RC.document;var jt=!!pB.documentElement&&!!pB.head&&typeof pB.addEventListener=="function"&&typeof pB.createElement=="function",oD=~og.indexOf("MSIE")||~og.indexOf("Trident/"),Ra,Na,Fa,Oa,ka,Kt="___FONT_AWESOME___",Rd=16,lD="fa",cD="svg-inline--fa",hn="data-fa-i2svg",Nd="data-fa-pseudo-element",pz="data-fa-pseudo-element-pending",C2="data-prefix",n2="data-icon",cg="fontawesome-i2svg",mz="async",gz=["HTML","HEAD","STYLE","SCRIPT"],uD=function(){try{return!0}catch{return!1}}(),dB="classic",IB="sharp",r2=[dB,IB];function Gs(e){return new Proxy(e,{get:function(t,C){return C in t?t[C]:t[dB]}})}var rs=Gs((Ra={},MB(Ra,dB,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),MB(Ra,IB,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Ra)),is=Gs((Na={},MB(Na,dB,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),MB(Na,IB,{solid:"fass",regular:"fasr",light:"fasl"}),Na)),ss=Gs((Fa={},MB(Fa,dB,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),MB(Fa,IB,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Fa)),vz=Gs((Oa={},MB(Oa,dB,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),MB(Oa,IB,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Oa)),Az=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,fD="fa-layers-text",yz=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ez=Gs((ka={},MB(ka,dB,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),MB(ka,IB,{900:"fass",400:"fasr",300:"fasl"}),ka)),dD=[1,2,3,4,5,6,7,8,9,10],Sz=dD.concat([11,12,13,14,15,16,17,18,19,20]),Iz=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ZC={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},as=new Set;Object.keys(is[dB]).map(as.add.bind(as));Object.keys(is[IB]).map(as.add.bind(as));var bz=[].concat(r2,xs(as),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ZC.GROUP,ZC.SWAP_OPACITY,ZC.PRIMARY,ZC.SECONDARY]).concat(dD.map(function(e){return"".concat(e,"x")})).concat(Sz.map(function(e){return"w-".concat(e)})),vi=RC.FontAwesomeConfig||{};function wz(e){var B=pB.querySelector("script["+e+"]");if(B)return B.getAttribute(e)}function Dz(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(pB&&typeof pB.querySelector=="function"){var Pz=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Pz.forEach(function(e){var B=e2(e,2),t=B[0],C=B[1],n=Dz(wz(t));n!=null&&(vi[C]=n)})}var hD={styleDefault:"solid",familyDefault:"classic",cssPrefix:lD,replacementClass:cD,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};vi.familyPrefix&&(vi.cssPrefix=vi.familyPrefix);var yr=k(k({},hD),vi);yr.autoReplaceSvg||(yr.observeMutations=!1);var L={};Object.keys(hD).forEach(function(e){Object.defineProperty(L,e,{enumerable:!0,set:function(t){yr[e]=t,Ai.forEach(function(C){return C(L)})},get:function(){return yr[e]}})});Object.defineProperty(L,"familyPrefix",{enumerable:!0,set:function(B){yr.cssPrefix=B,Ai.forEach(function(t){return t(L)})},get:function(){return yr.cssPrefix}});RC.FontAwesomeConfig=L;var Ai=[];function Rz(e){return Ai.push(e),function(){Ai.splice(Ai.indexOf(e),1)}}var qt=Rd,ct={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Nz(e){if(!(!e||!jt)){var B=pB.createElement("style");B.setAttribute("type","text/css"),B.innerHTML=e;for(var t=pB.head.childNodes,C=null,n=t.length-1;n>-1;n--){var r=t[n],i=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(C=r)}return pB.head.insertBefore(B,C),e}}var Fz="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function os(){for(var e=12,B="";e-- >0;)B+=Fz[Math.random()*62|0];return B}function Or(e){for(var B=[],t=(e||[]).length>>>0;t--;)B[t]=e[t];return B}function i2(e){return e.classList?Or(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(B){return B})}function pD(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Oz(e){return Object.keys(e||{}).reduce(function(B,t){return B+"".concat(t,'="').concat(pD(e[t]),'" ')},"").trim()}function oc(e){return Object.keys(e||{}).reduce(function(B,t){return B+"".concat(t,": ").concat(e[t].trim(),";")},"")}function s2(e){return e.size!==ct.size||e.x!==ct.x||e.y!==ct.y||e.rotate!==ct.rotate||e.flipX||e.flipY}function kz(e){var B=e.transform,t=e.containerWidth,C=e.iconWidth,n={transform:"translate(".concat(t/2," 256)")},r="translate(".concat(B.x*32,", ").concat(B.y*32,") "),i="scale(".concat(B.size/16*(B.flipX?-1:1),", ").concat(B.size/16*(B.flipY?-1:1),") "),s="rotate(".concat(B.rotate," 0 0)"),a={transform:"".concat(r," ").concat(i," ").concat(s)},o={transform:"translate(".concat(C/2*-1," -256)")};return{outer:n,inner:a,path:o}}function Tz(e){var B=e.transform,t=e.width,C=t===void 0?Rd:t,n=e.height,r=n===void 0?Rd:n,i=e.startCentered,s=i===void 0?!1:i,a="";return s&&oD?a+="translate(".concat(B.x/qt-C/2,"em, ").concat(B.y/qt-r/2,"em) "):s?a+="translate(calc(-50% + ".concat(B.x/qt,"em), calc(-50% + ").concat(B.y/qt,"em)) "):a+="translate(".concat(B.x/qt,"em, ").concat(B.y/qt,"em) "),a+="scale(".concat(B.size/qt*(B.flipX?-1:1),", ").concat(B.size/qt*(B.flipY?-1:1),") "),a+="rotate(".concat(B.rotate,"deg) "),a}var Mz=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function mD(){var e=lD,B=cD,t=L.cssPrefix,C=L.replacementClass,n=Mz;if(t!==e||C!==B){var r=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(B),"g");n=n.replace(r,".".concat(t,"-")).replace(i,"--".concat(t,"-")).replace(s,".".concat(C))}return n}var ug=!1;function Nu(){L.autoAddCss&&!ug&&(Nz(mD()),ug=!0)}var Lz={mixout:function(){return{dom:{css:mD,insertCss:Nu}}},hooks:function(){return{beforeDOMElementCreation:function(){Nu()},beforeI2svg:function(){Nu()}}}},Ut=RC||{};Ut[Kt]||(Ut[Kt]={});Ut[Kt].styles||(Ut[Kt].styles={});Ut[Kt].hooks||(Ut[Kt].hooks={});Ut[Kt].shims||(Ut[Kt].shims=[]);var _e=Ut[Kt],gD=[],Hz=function e(){pB.removeEventListener("DOMContentLoaded",e),ul=1,gD.map(function(B){return B()})},ul=!1;jt&&(ul=(pB.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(pB.readyState),ul||pB.addEventListener("DOMContentLoaded",Hz));function xz(e){jt&&(ul?setTimeout(e,0):gD.push(e))}function Ks(e){var B=e.tag,t=e.attributes,C=t===void 0?{}:t,n=e.children,r=n===void 0?[]:n;return typeof e=="string"?pD(e):"<".concat(B," ").concat(Oz(C),">").concat(r.map(Ks).join(""),"</").concat(B,">")}function fg(e,B,t){if(e&&e[B]&&e[B][t])return{prefix:B,iconName:t,icon:e[B][t]}}var Gz=function(B,t){return function(C,n,r,i){return B.call(t,C,n,r,i)}},Fu=function(B,t,C,n){var r=Object.keys(B),i=r.length,s=n!==void 0?Gz(t,n):t,a,o,l;for(C===void 0?(a=1,l=B[r[0]]):(a=0,l=C);a<i;a++)o=r[a],l=s(l,B[o],o,B);return l};function Kz(e){for(var B=[],t=0,C=e.length;t<C;){var n=e.charCodeAt(t++);if(n>=55296&&n<=56319&&t<C){var r=e.charCodeAt(t++);(r&64512)==56320?B.push(((n&1023)<<10)+(r&1023)+65536):(B.push(n),t--)}else B.push(n)}return B}function Fd(e){var B=Kz(e);return B.length===1?B[0].toString(16):null}function Uz(e,B){var t=e.length,C=e.charCodeAt(B),n;return C>=55296&&C<=56319&&t>B+1&&(n=e.charCodeAt(B+1),n>=56320&&n<=57343)?(C-55296)*1024+n-56320+65536:C}function dg(e){return Object.keys(e).reduce(function(B,t){var C=e[t],n=!!C.icon;return n?B[C.iconName]=C.icon:B[t]=C,B},{})}function Od(e,B){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},C=t.skipHooks,n=C===void 0?!1:C,r=dg(B);typeof _e.hooks.addPack=="function"&&!n?_e.hooks.addPack(e,dg(B)):_e.styles[e]=k(k({},_e.styles[e]||{}),r),e==="fas"&&Od("fa",B)}var Ta,Ma,La,Vn=_e.styles,Qz=_e.shims,Jz=(Ta={},MB(Ta,dB,Object.values(ss[dB])),MB(Ta,IB,Object.values(ss[IB])),Ta),a2=null,vD={},AD={},yD={},ED={},SD={},Vz=(Ma={},MB(Ma,dB,Object.keys(rs[dB])),MB(Ma,IB,Object.keys(rs[IB])),Ma);function Wz(e){return~bz.indexOf(e)}function jz(e,B){var t=B.split("-"),C=t[0],n=t.slice(1).join("-");return C===e&&n!==""&&!Wz(n)?n:null}var ID=function(){var B=function(r){return Fu(Vn,function(i,s,a){return i[a]=Fu(s,r,{}),i},{})};vD=B(function(n,r,i){if(r[3]&&(n[r[3]]=i),r[2]){var s=r[2].filter(function(a){return typeof a=="number"});s.forEach(function(a){n[a.toString(16)]=i})}return n}),AD=B(function(n,r,i){if(n[i]=i,r[2]){var s=r[2].filter(function(a){return typeof a=="string"});s.forEach(function(a){n[a]=i})}return n}),SD=B(function(n,r,i){var s=r[2];return n[i]=i,s.forEach(function(a){n[a]=i}),n});var t="far"in Vn||L.autoFetchSvg,C=Fu(Qz,function(n,r){var i=r[0],s=r[1],a=r[2];return s==="far"&&!t&&(s="fas"),typeof i=="string"&&(n.names[i]={prefix:s,iconName:a}),typeof i=="number"&&(n.unicodes[i.toString(16)]={prefix:s,iconName:a}),n},{names:{},unicodes:{}});yD=C.names,ED=C.unicodes,a2=lc(L.styleDefault,{family:L.familyDefault})};Rz(function(e){a2=lc(e.styleDefault,{family:L.familyDefault})});ID();function o2(e,B){return(vD[e]||{})[B]}function Yz(e,B){return(AD[e]||{})[B]}function qC(e,B){return(SD[e]||{})[B]}function bD(e){return yD[e]||{prefix:null,iconName:null}}function Xz(e){var B=ED[e],t=o2("fas",e);return B||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function NC(){return a2}var l2=function(){return{prefix:null,iconName:null,rest:[]}};function lc(e){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=B.family,C=t===void 0?dB:t,n=rs[C][e],r=is[C][e]||is[C][n],i=e in _e.styles?e:null;return r||i||null}var hg=(La={},MB(La,dB,Object.keys(ss[dB])),MB(La,IB,Object.keys(ss[IB])),La);function cc(e){var B,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},C=t.skipLookups,n=C===void 0?!1:C,r=(B={},MB(B,dB,"".concat(L.cssPrefix,"-").concat(dB)),MB(B,IB,"".concat(L.cssPrefix,"-").concat(IB)),B),i=null,s=dB;(e.includes(r[dB])||e.some(function(o){return hg[dB].includes(o)}))&&(s=dB),(e.includes(r[IB])||e.some(function(o){return hg[IB].includes(o)}))&&(s=IB);var a=e.reduce(function(o,l){var c=jz(L.cssPrefix,l);if(Vn[l]?(l=Jz[s].includes(l)?vz[s][l]:l,i=l,o.prefix=l):Vz[s].indexOf(l)>-1?(i=l,o.prefix=lc(l,{family:s})):c?o.iconName=c:l!==L.replacementClass&&l!==r[dB]&&l!==r[IB]&&o.rest.push(l),!n&&o.prefix&&o.iconName){var u=i==="fa"?bD(o.iconName):{},m=qC(o.prefix,o.iconName);u.prefix&&(i=null),o.iconName=u.iconName||m||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!Vn.far&&Vn.fas&&!L.autoFetchSvg&&(o.prefix="fas")}return o},l2());return(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(a.prefix="fad"),!a.prefix&&s===IB&&(Vn.fass||L.autoFetchSvg)&&(a.prefix="fass",a.iconName=qC(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||i==="fa")&&(a.prefix=NC()||"fas"),a}var Zz=function(){function e(){sz(this,e),this.definitions={}}return az(e,[{key:"add",value:function(){for(var t=this,C=arguments.length,n=new Array(C),r=0;r<C;r++)n[r]=arguments[r];var i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){t.definitions[s]=k(k({},t.definitions[s]||{}),i[s]),Od(s,i[s]);var a=ss[dB][s];a&&Od(a,i[s]),ID()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,C){var n=C.prefix&&C.iconName&&C.icon?{0:C}:C;return Object.keys(n).map(function(r){var i=n[r],s=i.prefix,a=i.iconName,o=i.icon,l=o[2];t[s]||(t[s]={}),l.length>0&&l.forEach(function(c){typeof c=="string"&&(t[s][c]=o)}),t[s][a]=o}),t}}]),e}(),pg=[],Wn={},nr={},qz=Object.keys(nr);function zz(e,B){var t=B.mixoutsTo;return pg=e,Wn={},Object.keys(nr).forEach(function(C){qz.indexOf(C)===-1&&delete nr[C]}),pg.forEach(function(C){var n=C.mixout?C.mixout():{};if(Object.keys(n).forEach(function(i){typeof n[i]=="function"&&(t[i]=n[i]),cl(n[i])==="object"&&Object.keys(n[i]).forEach(function(s){t[i]||(t[i]={}),t[i][s]=n[i][s]})}),C.hooks){var r=C.hooks();Object.keys(r).forEach(function(i){Wn[i]||(Wn[i]=[]),Wn[i].push(r[i])})}C.provides&&C.provides(nr)}),t}function kd(e,B){for(var t=arguments.length,C=new Array(t>2?t-2:0),n=2;n<t;n++)C[n-2]=arguments[n];var r=Wn[e]||[];return r.forEach(function(i){B=i.apply(null,[B].concat(C))}),B}function pn(e){for(var B=arguments.length,t=new Array(B>1?B-1:0),C=1;C<B;C++)t[C-1]=arguments[C];var n=Wn[e]||[];n.forEach(function(r){r.apply(null,t)})}function Qt(){var e=arguments[0],B=Array.prototype.slice.call(arguments,1);return nr[e]?nr[e].apply(null,B):void 0}function Td(e){e.prefix==="fa"&&(e.prefix="fas");var B=e.iconName,t=e.prefix||NC();if(B)return B=qC(t,B)||B,fg(wD.definitions,t,B)||fg(_e.styles,t,B)}var wD=new Zz,_z=function(){L.autoReplaceSvg=!1,L.observeMutations=!1,pn("noAuto")},$z={i2svg:function(){var B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return jt?(pn("beforeI2svg",B),Qt("pseudoElements2svg",B),Qt("i2svg",B)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=B.autoReplaceSvgRoot;L.autoReplaceSvg===!1&&(L.autoReplaceSvg=!0),L.observeMutations=!0,xz(function(){e9({autoReplaceSvgRoot:t}),pn("watch",B)})}},B9={icon:function(B){if(B===null)return null;if(cl(B)==="object"&&B.prefix&&B.iconName)return{prefix:B.prefix,iconName:qC(B.prefix,B.iconName)||B.iconName};if(Array.isArray(B)&&B.length===2){var t=B[1].indexOf("fa-")===0?B[1].slice(3):B[1],C=lc(B[0]);return{prefix:C,iconName:qC(C,t)||t}}if(typeof B=="string"&&(B.indexOf("".concat(L.cssPrefix,"-"))>-1||B.match(Az))){var n=cc(B.split(" "),{skipLookups:!0});return{prefix:n.prefix||NC(),iconName:qC(n.prefix,n.iconName)||n.iconName}}if(typeof B=="string"){var r=NC();return{prefix:r,iconName:qC(r,B)||B}}}},Oe={noAuto:_z,config:L,dom:$z,parse:B9,library:wD,findIconDefinition:Td,toHtml:Ks},e9=function(){var B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=B.autoReplaceSvgRoot,C=t===void 0?pB:t;(Object.keys(_e.styles).length>0||L.autoFetchSvg)&&jt&&L.autoReplaceSvg&&Oe.dom.i2svg({node:C})};function uc(e,B){return Object.defineProperty(e,"abstract",{get:B}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(C){return Ks(C)})}}),Object.defineProperty(e,"node",{get:function(){if(jt){var C=pB.createElement("div");return C.innerHTML=e.html,C.children}}}),e}function t9(e){var B=e.children,t=e.main,C=e.mask,n=e.attributes,r=e.styles,i=e.transform;if(s2(i)&&t.found&&!C.found){var s=t.width,a=t.height,o={x:s/a/2,y:.5};n.style=oc(k(k({},r),{},{"transform-origin":"".concat(o.x+i.x/16,"em ").concat(o.y+i.y/16,"em")}))}return[{tag:"svg",attributes:n,children:B}]}function C9(e){var B=e.prefix,t=e.iconName,C=e.children,n=e.attributes,r=e.symbol,i=r===!0?"".concat(B,"-").concat(L.cssPrefix,"-").concat(t):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:k(k({},n),{},{id:i}),children:C}]}]}function c2(e){var B=e.icons,t=B.main,C=B.mask,n=e.prefix,r=e.iconName,i=e.transform,s=e.symbol,a=e.title,o=e.maskId,l=e.titleId,c=e.extra,u=e.watchable,m=u===void 0?!1:u,f=C.found?C:t,g=f.width,p=f.height,d=n==="fak",h=[L.replacementClass,r?"".concat(L.cssPrefix,"-").concat(r):""].filter(function(I){return c.classes.indexOf(I)===-1}).filter(function(I){return I!==""||!!I}).concat(c.classes).join(" "),v={children:[],attributes:k(k({},c.attributes),{},{"data-prefix":n,"data-icon":r,class:h,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(p)})},A=d&&!~c.classes.indexOf("fa-fw")?{width:"".concat(g/p*16*.0625,"em")}:{};m&&(v.attributes[hn]=""),a&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(l||os())},children:[a]}),delete v.attributes.title);var E=k(k({},v),{},{prefix:n,iconName:r,main:t,mask:C,maskId:o,transform:i,symbol:s,styles:k(k({},A),c.styles)}),w=C.found&&t.found?Qt("generateAbstractMask",E)||{children:[],attributes:{}}:Qt("generateAbstractIcon",E)||{children:[],attributes:{}},S=w.children,y=w.attributes;return E.children=S,E.attributes=y,s?C9(E):t9(E)}function mg(e){var B=e.content,t=e.width,C=e.height,n=e.transform,r=e.title,i=e.extra,s=e.watchable,a=s===void 0?!1:s,o=k(k(k({},i.attributes),r?{title:r}:{}),{},{class:i.classes.join(" ")});a&&(o[hn]="");var l=k({},i.styles);s2(n)&&(l.transform=Tz({transform:n,startCentered:!0,width:t,height:C}),l["-webkit-transform"]=l.transform);var c=oc(l);c.length>0&&(o.style=c);var u=[];return u.push({tag:"span",attributes:o,children:[B]}),r&&u.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),u}function n9(e){var B=e.content,t=e.title,C=e.extra,n=k(k(k({},C.attributes),t?{title:t}:{}),{},{class:C.classes.join(" ")}),r=oc(C.styles);r.length>0&&(n.style=r);var i=[];return i.push({tag:"span",attributes:n,children:[B]}),t&&i.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),i}var Ou=_e.styles;function Md(e){var B=e[0],t=e[1],C=e.slice(4),n=e2(C,1),r=n[0],i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(L.cssPrefix,"-").concat(ZC.GROUP)},children:[{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(ZC.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(ZC.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:B,height:t,icon:i}}var r9={found:!1,width:512,height:512};function i9(e,B){!uD&&!L.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(B,'" is missing.'))}function Ld(e,B){var t=B;return B==="fa"&&L.styleDefault!==null&&(B=NC()),new Promise(function(C,n){if(Qt("missingIconAbstract"),t==="fa"){var r=bD(e)||{};e=r.iconName||e,B=r.prefix||B}if(e&&B&&Ou[B]&&Ou[B][e]){var i=Ou[B][e];return C(Md(i))}i9(e,B),C(k(k({},r9),{},{icon:L.showMissingIcons&&e?Qt("missingIconAbstract")||{}:{}}))})}var gg=function(){},Hd=L.measurePerformance&&Pa&&Pa.mark&&Pa.measure?Pa:{mark:gg,measure:gg},Ci='FA "6.4.0"',s9=function(B){return Hd.mark("".concat(Ci," ").concat(B," begins")),function(){return DD(B)}},DD=function(B){Hd.mark("".concat(Ci," ").concat(B," ends")),Hd.measure("".concat(Ci," ").concat(B),"".concat(Ci," ").concat(B," begins"),"".concat(Ci," ").concat(B," ends"))},u2={begin:s9,end:DD},Co=function(){};function vg(e){var B=e.getAttribute?e.getAttribute(hn):null;return typeof B=="string"}function a9(e){var B=e.getAttribute?e.getAttribute(C2):null,t=e.getAttribute?e.getAttribute(n2):null;return B&&t}function o9(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(L.replacementClass)}function l9(){if(L.autoReplaceSvg===!0)return no.replace;var e=no[L.autoReplaceSvg];return e||no.replace}function c9(e){return pB.createElementNS("http://www.w3.org/2000/svg",e)}function u9(e){return pB.createElement(e)}function PD(e){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=B.ceFn,C=t===void 0?e.tag==="svg"?c9:u9:t;if(typeof e=="string")return pB.createTextNode(e);var n=C(e.tag);Object.keys(e.attributes||[]).forEach(function(i){n.setAttribute(i,e.attributes[i])});var r=e.children||[];return r.forEach(function(i){n.appendChild(PD(i,{ceFn:C}))}),n}function f9(e){var B=" ".concat(e.outerHTML," ");return B="".concat(B,"Font Awesome fontawesome.com "),B}var no={replace:function(B){var t=B[0];if(t.parentNode)if(B[1].forEach(function(n){t.parentNode.insertBefore(PD(n),t)}),t.getAttribute(hn)===null&&L.keepOriginalSource){var C=pB.createComment(f9(t));t.parentNode.replaceChild(C,t)}else t.remove()},nest:function(B){var t=B[0],C=B[1];if(~i2(t).indexOf(L.replacementClass))return no.replace(B);var n=new RegExp("".concat(L.cssPrefix,"-.*"));if(delete C[0].attributes.id,C[0].attributes.class){var r=C[0].attributes.class.split(" ").reduce(function(s,a){return a===L.replacementClass||a.match(n)?s.toSvg.push(a):s.toNode.push(a),s},{toNode:[],toSvg:[]});C[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",r.toNode.join(" "))}var i=C.map(function(s){return Ks(s)}).join(`
`);t.setAttribute(hn,""),t.innerHTML=i}};function Ag(e){e()}function RD(e,B){var t=typeof B=="function"?B:Co;if(e.length===0)t();else{var C=Ag;L.mutateApproach===mz&&(C=RC.requestAnimationFrame||Ag),C(function(){var n=l9(),r=u2.begin("mutate");e.map(n),r(),t()})}}var f2=!1;function ND(){f2=!0}function xd(){f2=!1}var fl=null;function yg(e){if(lg&&L.observeMutations){var B=e.treeCallback,t=B===void 0?Co:B,C=e.nodeCallback,n=C===void 0?Co:C,r=e.pseudoElementsCallback,i=r===void 0?Co:r,s=e.observeMutationsRoot,a=s===void 0?pB:s;fl=new lg(function(o){if(!f2){var l=NC();Or(o).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!vg(c.addedNodes[0])&&(L.searchPseudoElements&&i(c.target),t(c.target)),c.type==="attributes"&&c.target.parentNode&&L.searchPseudoElements&&i(c.target.parentNode),c.type==="attributes"&&vg(c.target)&&~Iz.indexOf(c.attributeName))if(c.attributeName==="class"&&a9(c.target)){var u=cc(i2(c.target)),m=u.prefix,f=u.iconName;c.target.setAttribute(C2,m||l),f&&c.target.setAttribute(n2,f)}else o9(c.target)&&n(c.target)})}}),jt&&fl.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function d9(){fl&&fl.disconnect()}function h9(e){var B=e.getAttribute("style"),t=[];return B&&(t=B.split(";").reduce(function(C,n){var r=n.split(":"),i=r[0],s=r.slice(1);return i&&s.length>0&&(C[i]=s.join(":").trim()),C},{})),t}function p9(e){var B=e.getAttribute("data-prefix"),t=e.getAttribute("data-icon"),C=e.innerText!==void 0?e.innerText.trim():"",n=cc(i2(e));return n.prefix||(n.prefix=NC()),B&&t&&(n.prefix=B,n.iconName=t),n.iconName&&n.prefix||(n.prefix&&C.length>0&&(n.iconName=Yz(n.prefix,e.innerText)||o2(n.prefix,Fd(e.innerText))),!n.iconName&&L.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=e.firstChild.data)),n}function m9(e){var B=Or(e.attributes).reduce(function(n,r){return n.name!=="class"&&n.name!=="style"&&(n[r.name]=r.value),n},{}),t=e.getAttribute("title"),C=e.getAttribute("data-fa-title-id");return L.autoA11y&&(t?B["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(C||os()):(B["aria-hidden"]="true",B.focusable="false")),B}function g9(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ct,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Eg(e){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=p9(e),C=t.iconName,n=t.prefix,r=t.rest,i=m9(e),s=kd("parseNodeAttributes",{},e),a=B.styleParser?h9(e):[];return k({iconName:C,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:n,transform:ct,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:a,attributes:i}},s)}var v9=_e.styles;function FD(e){var B=L.autoReplaceSvg==="nest"?Eg(e,{styleParser:!1}):Eg(e);return~B.extra.classes.indexOf(fD)?Qt("generateLayersText",e,B):Qt("generateSvgReplacementMutation",e,B)}var FC=new Set;r2.map(function(e){FC.add("fa-".concat(e))});Object.keys(rs[dB]).map(FC.add.bind(FC));Object.keys(rs[IB]).map(FC.add.bind(FC));FC=xs(FC);function Sg(e){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!jt)return Promise.resolve();var t=pB.documentElement.classList,C=function(c){return t.add("".concat(cg,"-").concat(c))},n=function(c){return t.remove("".concat(cg,"-").concat(c))},r=L.autoFetchSvg?FC:r2.map(function(l){return"fa-".concat(l)}).concat(Object.keys(v9));r.includes("fa")||r.push("fa");var i=[".".concat(fD,":not([").concat(hn,"])")].concat(r.map(function(l){return".".concat(l,":not([").concat(hn,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=Or(e.querySelectorAll(i))}catch{}if(s.length>0)C("pending"),n("complete");else return Promise.resolve();var a=u2.begin("onTree"),o=s.reduce(function(l,c){try{var u=FD(c);u&&l.push(u)}catch(m){uD||m.name==="MissingIcon"&&console.error(m)}return l},[]);return new Promise(function(l,c){Promise.all(o).then(function(u){RD(u,function(){C("active"),C("complete"),n("pending"),typeof B=="function"&&B(),a(),l()})}).catch(function(u){a(),c(u)})})}function A9(e){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;FD(e).then(function(t){t&&RD([t],B)})}function y9(e){return function(B){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},C=(B||{}).icon?B:Td(B||{}),n=t.mask;return n&&(n=(n||{}).icon?n:Td(n||{})),e(C,k(k({},t),{},{mask:n}))}}var E9=function(B){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},C=t.transform,n=C===void 0?ct:C,r=t.symbol,i=r===void 0?!1:r,s=t.mask,a=s===void 0?null:s,o=t.maskId,l=o===void 0?null:o,c=t.title,u=c===void 0?null:c,m=t.titleId,f=m===void 0?null:m,g=t.classes,p=g===void 0?[]:g,d=t.attributes,h=d===void 0?{}:d,v=t.styles,A=v===void 0?{}:v;if(B){var E=B.prefix,w=B.iconName,S=B.icon;return uc(k({type:"icon"},B),function(){return pn("beforeDOMElementCreation",{iconDefinition:B,params:t}),L.autoA11y&&(u?h["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(f||os()):(h["aria-hidden"]="true",h.focusable="false")),c2({icons:{main:Md(S),mask:a?Md(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:w,transform:k(k({},ct),n),symbol:i,title:u,maskId:l,titleId:f,extra:{attributes:h,styles:A,classes:p}})})}},S9={mixout:function(){return{icon:y9(E9)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=Sg,t.nodeCallback=A9,t}}},provides:function(B){B.i2svg=function(t){var C=t.node,n=C===void 0?pB:C,r=t.callback,i=r===void 0?function(){}:r;return Sg(n,i)},B.generateSvgReplacementMutation=function(t,C){var n=C.iconName,r=C.title,i=C.titleId,s=C.prefix,a=C.transform,o=C.symbol,l=C.mask,c=C.maskId,u=C.extra;return new Promise(function(m,f){Promise.all([Ld(n,s),l.iconName?Ld(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(g){var p=e2(g,2),d=p[0],h=p[1];m([t,c2({icons:{main:d,mask:h},prefix:s,iconName:n,transform:a,symbol:o,maskId:c,title:r,titleId:i,extra:u,watchable:!0})])}).catch(f)})},B.generateAbstractIcon=function(t){var C=t.children,n=t.attributes,r=t.main,i=t.transform,s=t.styles,a=oc(s);a.length>0&&(n.style=a);var o;return s2(i)&&(o=Qt("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),C.push(o||r.icon),{children:C,attributes:n}}}},I9={mixout:function(){return{layer:function(t){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=C.classes,r=n===void 0?[]:n;return uc({type:"layer"},function(){pn("beforeDOMElementCreation",{assembler:t,params:C});var i=[];return t(function(s){Array.isArray(s)?s.map(function(a){i=i.concat(a.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(L.cssPrefix,"-layers")].concat(xs(r)).join(" ")},children:i}]})}}}},b9={mixout:function(){return{counter:function(t){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=C.title,r=n===void 0?null:n,i=C.classes,s=i===void 0?[]:i,a=C.attributes,o=a===void 0?{}:a,l=C.styles,c=l===void 0?{}:l;return uc({type:"counter",content:t},function(){return pn("beforeDOMElementCreation",{content:t,params:C}),n9({content:t.toString(),title:r,extra:{attributes:o,styles:c,classes:["".concat(L.cssPrefix,"-layers-counter")].concat(xs(s))}})})}}}},w9={mixout:function(){return{text:function(t){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=C.transform,r=n===void 0?ct:n,i=C.title,s=i===void 0?null:i,a=C.classes,o=a===void 0?[]:a,l=C.attributes,c=l===void 0?{}:l,u=C.styles,m=u===void 0?{}:u;return uc({type:"text",content:t},function(){return pn("beforeDOMElementCreation",{content:t,params:C}),mg({content:t,transform:k(k({},ct),r),title:s,extra:{attributes:c,styles:m,classes:["".concat(L.cssPrefix,"-layers-text")].concat(xs(o))}})})}}},provides:function(B){B.generateLayersText=function(t,C){var n=C.title,r=C.transform,i=C.extra,s=null,a=null;if(oD){var o=parseInt(getComputedStyle(t).fontSize,10),l=t.getBoundingClientRect();s=l.width/o,a=l.height/o}return L.autoA11y&&!n&&(i.attributes["aria-hidden"]="true"),Promise.resolve([t,mg({content:t.innerHTML,width:s,height:a,transform:r,title:n,extra:i,watchable:!0})])}}},D9=new RegExp('"',"ug"),Ig=[1105920,1112319];function P9(e){var B=e.replace(D9,""),t=Uz(B,0),C=t>=Ig[0]&&t<=Ig[1],n=B.length===2?B[0]===B[1]:!1;return{value:Fd(n?B[0]:B),isSecondary:C||n}}function bg(e,B){var t="".concat(pz).concat(B.replace(":","-"));return new Promise(function(C,n){if(e.getAttribute(t)!==null)return C();var r=Or(e.children),i=r.filter(function(S){return S.getAttribute(Nd)===B})[0],s=RC.getComputedStyle(e,B),a=s.getPropertyValue("font-family").match(yz),o=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(i&&!a)return e.removeChild(i),C();if(a&&l!=="none"&&l!==""){var c=s.getPropertyValue("content"),u=~["Sharp"].indexOf(a[2])?IB:dB,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(a[2])?is[u][a[2].toLowerCase()]:Ez[u][o],f=P9(c),g=f.value,p=f.isSecondary,d=a[0].startsWith("FontAwesome"),h=o2(m,g),v=h;if(d){var A=Xz(g);A.iconName&&A.prefix&&(h=A.iconName,m=A.prefix)}if(h&&!p&&(!i||i.getAttribute(C2)!==m||i.getAttribute(n2)!==v)){e.setAttribute(t,v),i&&e.removeChild(i);var E=g9(),w=E.extra;w.attributes[Nd]=B,Ld(h,m).then(function(S){var y=c2(k(k({},E),{},{icons:{main:S,mask:l2()},prefix:m,iconName:v,extra:w,watchable:!0})),I=pB.createElement("svg");B==="::before"?e.insertBefore(I,e.firstChild):e.appendChild(I),I.outerHTML=y.map(function(M){return Ks(M)}).join(`
`),e.removeAttribute(t),C()}).catch(n)}else C()}else C()})}function R9(e){return Promise.all([bg(e,"::before"),bg(e,"::after")])}function N9(e){return e.parentNode!==document.head&&!~gz.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Nd)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function wg(e){if(jt)return new Promise(function(B,t){var C=Or(e.querySelectorAll("*")).filter(N9).map(R9),n=u2.begin("searchPseudoElements");ND(),Promise.all(C).then(function(){n(),xd(),B()}).catch(function(){n(),xd(),t()})})}var F9={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=wg,t}}},provides:function(B){B.pseudoElements2svg=function(t){var C=t.node,n=C===void 0?pB:C;L.searchPseudoElements&&wg(n)}}},Dg=!1,O9={mixout:function(){return{dom:{unwatch:function(){ND(),Dg=!0}}}},hooks:function(){return{bootstrap:function(){yg(kd("mutationObserverCallbacks",{}))},noAuto:function(){d9()},watch:function(t){var C=t.observeMutationsRoot;Dg?xd():yg(kd("mutationObserverCallbacks",{observeMutationsRoot:C}))}}}},Pg=function(B){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return B.toLowerCase().split(" ").reduce(function(C,n){var r=n.toLowerCase().split("-"),i=r[0],s=r.slice(1).join("-");if(i&&s==="h")return C.flipX=!0,C;if(i&&s==="v")return C.flipY=!0,C;if(s=parseFloat(s),isNaN(s))return C;switch(i){case"grow":C.size=C.size+s;break;case"shrink":C.size=C.size-s;break;case"left":C.x=C.x-s;break;case"right":C.x=C.x+s;break;case"up":C.y=C.y-s;break;case"down":C.y=C.y+s;break;case"rotate":C.rotate=C.rotate+s;break}return C},t)},k9={mixout:function(){return{parse:{transform:function(t){return Pg(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,C){var n=C.getAttribute("data-fa-transform");return n&&(t.transform=Pg(n)),t}}},provides:function(B){B.generateAbstractTransformGrouping=function(t){var C=t.main,n=t.transform,r=t.containerWidth,i=t.iconWidth,s={transform:"translate(".concat(r/2," 256)")},a="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),l="rotate(".concat(n.rotate," 0 0)"),c={transform:"".concat(a," ").concat(o," ").concat(l)},u={transform:"translate(".concat(i/2*-1," -256)")},m={outer:s,inner:c,path:u};return{tag:"g",attributes:k({},m.outer),children:[{tag:"g",attributes:k({},m.inner),children:[{tag:C.icon.tag,children:C.icon.children,attributes:k(k({},C.icon.attributes),m.path)}]}]}}}},ku={x:0,y:0,width:"100%",height:"100%"};function Rg(e){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||B)&&(e.attributes.fill="black"),e}function T9(e){return e.tag==="g"?e.children:[e]}var M9={hooks:function(){return{parseNodeAttributes:function(t,C){var n=C.getAttribute("data-fa-mask"),r=n?cc(n.split(" ").map(function(i){return i.trim()})):l2();return r.prefix||(r.prefix=NC()),t.mask=r,t.maskId=C.getAttribute("data-fa-mask-id"),t}}},provides:function(B){B.generateAbstractMask=function(t){var C=t.children,n=t.attributes,r=t.main,i=t.mask,s=t.maskId,a=t.transform,o=r.width,l=r.icon,c=i.width,u=i.icon,m=kz({transform:a,containerWidth:c,iconWidth:o}),f={tag:"rect",attributes:k(k({},ku),{},{fill:"white"})},g=l.children?{children:l.children.map(Rg)}:{},p={tag:"g",attributes:k({},m.inner),children:[Rg(k({tag:l.tag,attributes:k(k({},l.attributes),m.path)},g))]},d={tag:"g",attributes:k({},m.outer),children:[p]},h="mask-".concat(s||os()),v="clip-".concat(s||os()),A={tag:"mask",attributes:k(k({},ku),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[f,d]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:T9(u)},A]};return C.push(E,{tag:"rect",attributes:k({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(h,")")},ku)}),{children:C,attributes:n}}}},L9={provides:function(B){var t=!1;RC.matchMedia&&(t=RC.matchMedia("(prefers-reduced-motion: reduce)").matches),B.missingIconAbstract=function(){var C=[],n={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};C.push({tag:"path",attributes:k(k({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=k(k({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:k(k({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||s.children.push({tag:"animate",attributes:k(k({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:k(k({},i),{},{values:"1;0;1;1;0;1;"})}),C.push(s),C.push({tag:"path",attributes:k(k({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:k(k({},i),{},{values:"1;0;0;0;0;1;"})}]}),t||C.push({tag:"path",attributes:k(k({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:k(k({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:C}}}},H9={hooks:function(){return{parseNodeAttributes:function(t,C){var n=C.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},x9=[Lz,S9,I9,b9,w9,F9,O9,k9,M9,L9,H9];zz(x9,{mixoutsTo:Oe});Oe.noAuto;Oe.config;Oe.library;Oe.dom;var Gd=Oe.parse;Oe.findIconDefinition;Oe.toHtml;var G9=Oe.icon;Oe.layer;Oe.text;Oe.counter;var K9={prefix:"fas",iconName:"bath",icon:[512,512,[128705,"bathtub"],"f2cd","M96 77.3c0-7.3 5.9-13.3 13.3-13.3c3.5 0 6.9 1.4 9.4 3.9l14.9 14.9C130 91.8 128 101.7 128 112c0 19.9 7.2 38 19.2 52c-5.3 9.2-4 21.1 3.8 29c9.4 9.4 24.6 9.4 33.9 0L289 89c9.4-9.4 9.4-24.6 0-33.9c-7.9-7.9-19.8-9.1-29-3.8C246 39.2 227.9 32 208 32c-10.3 0-20.2 2-29.2 5.5L163.9 22.6C149.4 8.1 129.7 0 109.3 0C66.6 0 32 34.6 32 77.3V256c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H96V77.3zM32 352v16c0 28.4 12.4 54 32 71.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V464H384v16c0 17.7 14.3 32 32 32s32-14.3 32-32V439.6c19.6-17.6 32-43.1 32-71.6V352H32z"]},Ng={prefix:"fas",iconName:"ruler",icon:[512,512,[128207],"f545","M177.9 494.1c-18.7 18.7-49.1 18.7-67.9 0L17.9 401.9c-18.7-18.7-18.7-49.1 0-67.9l50.7-50.7 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 50.7-50.7c18.7-18.7 49.1-18.7 67.9 0l92.1 92.1c18.7 18.7 18.7 49.1 0 67.9L177.9 494.1z"]},U9={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},Q9=U9,J9={prefix:"fas",iconName:"bed",icon:[640,512,[128716],"f236","M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"]},V9={prefix:"fas",iconName:"building",icon:[384,512,[127970,61687],"f1ad","M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"]},Fg={prefix:"fas",iconName:"calendar",icon:[448,512,[128197,128198],"f133","M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"]},W9={prefix:"fas",iconName:"dollar-sign",icon:[320,512,[128178,61781,"dollar","usd"],"24","M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"]},W={},j9={get exports(){return W},set exports(e){W=e}},Y9="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",X9=Y9,Z9=X9;function OD(){}function kD(){}kD.resetWarningCache=OD;var q9=function(){function e(C,n,r,i,s,a){if(a!==Z9){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}e.isRequired=e;function B(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:B,element:e,elementType:e,instanceOf:B,node:e,objectOf:B,oneOf:B,oneOfType:B,shape:B,exact:B,checkPropTypes:kD,resetWarningCache:OD};return t.PropTypes=t,t};j9.exports=q9();function Og(e,B){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(e);B&&(C=C.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,C)}return t}function aC(e){for(var B=1;B<arguments.length;B++){var t=arguments[B]!=null?arguments[B]:{};B%2?Og(Object(t),!0).forEach(function(C){jn(e,C,t[C])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Og(Object(t)).forEach(function(C){Object.defineProperty(e,C,Object.getOwnPropertyDescriptor(t,C))})}return e}function dl(e){return dl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(B){return typeof B}:function(B){return B&&typeof Symbol=="function"&&B.constructor===Symbol&&B!==Symbol.prototype?"symbol":typeof B},dl(e)}function jn(e,B,t){return B in e?Object.defineProperty(e,B,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[B]=t,e}function z9(e,B){if(e==null)return{};var t={},C=Object.keys(e),n,r;for(r=0;r<C.length;r++)n=C[r],!(B.indexOf(n)>=0)&&(t[n]=e[n]);return t}function _9(e,B){if(e==null)return{};var t=z9(e,B),C,n;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)C=r[n],!(B.indexOf(C)>=0)&&Object.prototype.propertyIsEnumerable.call(e,C)&&(t[C]=e[C])}return t}function Kd(e){return $9(e)||B_(e)||e_(e)||t_()}function $9(e){if(Array.isArray(e))return Ud(e)}function B_(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function e_(e,B){if(e){if(typeof e=="string")return Ud(e,B);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ud(e,B)}}function Ud(e,B){(B==null||B>e.length)&&(B=e.length);for(var t=0,C=new Array(B);t<B;t++)C[t]=e[t];return C}function t_(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C_(e){var B,t=e.beat,C=e.fade,n=e.beatFade,r=e.bounce,i=e.shake,s=e.flash,a=e.spin,o=e.spinPulse,l=e.spinReverse,c=e.pulse,u=e.fixedWidth,m=e.inverse,f=e.border,g=e.listItem,p=e.flip,d=e.size,h=e.rotation,v=e.pull,A=(B={"fa-beat":t,"fa-fade":C,"fa-beat-fade":n,"fa-bounce":r,"fa-shake":i,"fa-flash":s,"fa-spin":a,"fa-spin-reverse":l,"fa-spin-pulse":o,"fa-pulse":c,"fa-fw":u,"fa-inverse":m,"fa-border":f,"fa-li":g,"fa-flip":p===!0,"fa-flip-horizontal":p==="horizontal"||p==="both","fa-flip-vertical":p==="vertical"||p==="both"},jn(B,"fa-".concat(d),typeof d<"u"&&d!==null),jn(B,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),jn(B,"fa-pull-".concat(v),typeof v<"u"&&v!==null),jn(B,"fa-swap-opacity",e.swapOpacity),B);return Object.keys(A).map(function(E){return A[E]?E:null}).filter(function(E){return E})}function n_(e){return e=e-0,e===e}function TD(e){return n_(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(B,t){return t?t.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var r_=["style"];function i_(e){return e.charAt(0).toUpperCase()+e.slice(1)}function s_(e){return e.split(";").map(function(B){return B.trim()}).filter(function(B){return B}).reduce(function(B,t){var C=t.indexOf(":"),n=TD(t.slice(0,C)),r=t.slice(C+1).trim();return n.startsWith("webkit")?B[i_(n)]=r:B[n]=r,B},{})}function MD(e,B){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof B=="string")return B;var C=(B.children||[]).map(function(a){return MD(e,a)}),n=Object.keys(B.attributes||{}).reduce(function(a,o){var l=B.attributes[o];switch(o){case"class":a.attrs.className=l,delete B.attributes.class;break;case"style":a.attrs.style=s_(l);break;default:o.indexOf("aria-")===0||o.indexOf("data-")===0?a.attrs[o.toLowerCase()]=l:a.attrs[TD(o)]=l}return a},{attrs:{}}),r=t.style,i=r===void 0?{}:r,s=_9(t,r_);return n.attrs.style=aC(aC({},n.attrs.style),i),e.apply(void 0,[B.tag,aC(aC({},n.attrs),s)].concat(Kd(C)))}var LD=!1;try{LD=!0}catch{}function a_(){if(!LD&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function kg(e){if(e&&dl(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Gd.icon)return Gd.icon(e);if(e===null)return null;if(e&&dl(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Tu(e,B){return Array.isArray(B)&&B.length>0||!Array.isArray(B)&&B?jn({},e,B):{}}var Us=rr.forwardRef(function(e,B){var t=e.icon,C=e.mask,n=e.symbol,r=e.className,i=e.title,s=e.titleId,a=e.maskId,o=kg(t),l=Tu("classes",[].concat(Kd(C_(e)),Kd(r.split(" ")))),c=Tu("transform",typeof e.transform=="string"?Gd.transform(e.transform):e.transform),u=Tu("mask",kg(C)),m=G9(o,aC(aC(aC(aC({},l),c),u),{},{symbol:n,title:i,titleId:s,maskId:a}));if(!m)return a_("Could not find icon",o),null;var f=m.abstract,g={ref:B};return Object.keys(e).forEach(function(p){Us.defaultProps.hasOwnProperty(p)||(g[p]=e[p])}),o_(f[0],g)});Us.displayName="FontAwesomeIcon";Us.propTypes={beat:W.bool,border:W.bool,beatFade:W.bool,bounce:W.bool,className:W.string,fade:W.bool,flash:W.bool,mask:W.oneOfType([W.object,W.array,W.string]),maskId:W.string,fixedWidth:W.bool,inverse:W.bool,flip:W.oneOf([!0,!1,"horizontal","vertical","both"]),icon:W.oneOfType([W.object,W.array,W.string]),listItem:W.bool,pull:W.oneOf(["right","left"]),pulse:W.bool,rotation:W.oneOf([0,90,180,270]),shake:W.bool,size:W.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:W.bool,spinPulse:W.bool,spinReverse:W.bool,symbol:W.oneOfType([W.bool,W.string]),title:W.string,titleId:W.string,transform:W.oneOfType([W.string,W.object]),swapOpacity:W.bool};Us.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var o_=MD.bind(null,rr.createElement);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var rB=function(){return rB=Object.assign||function(B){for(var t,C=1,n=arguments.length;C<n;C++){t=arguments[C];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(B[r]=t[r])}return B},rB.apply(this,arguments)};function l_(e,B){var t={};for(var C in e)Object.prototype.hasOwnProperty.call(e,C)&&B.indexOf(C)<0&&(t[C]=e[C]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,C=Object.getOwnPropertySymbols(e);n<C.length;n++)B.indexOf(C[n])<0&&Object.prototype.propertyIsEnumerable.call(e,C[n])&&(t[C[n]]=e[C[n]]);return t}function Ee(e,B,t){if(t||arguments.length===2)for(var C=0,n=B.length,r;C<n;C++)(r||!(C in B))&&(r||(r=Array.prototype.slice.call(B,0,C)),r[C]=B[C]);return e.concat(r||B)}var At=function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},c_={k:1e3,m:1e6,b:1e9},u_=function(e,B){B===void 0&&(B=".");var t=new RegExp("(\\d+("+At(B)+"\\d*)?)([kmb])$","i"),C=e.match(t);if(C){var n=C[1],r=C[3],i=c_[r.toLowerCase()];return Number(n.replace(B,"."))*i}},f_=function(e,B){B===void 0&&(B=",");var t=new RegExp(At(B),"g");return e.replace(t,"")},d_=function(e,B){var t=At(B.join("")),C=new RegExp("[^\\d"+t+"]","gi");return e.replace(C,"")},Mu=function(e){var B=e.value,t=e.groupSeparator,C=t===void 0?",":t,n=e.decimalSeparator,r=n===void 0?".":n,i=e.allowDecimals,s=i===void 0?!0:i,a=e.decimalsLimit,o=a===void 0?2:a,l=e.allowNegativeValue,c=l===void 0?!0:l,u=e.disableAbbreviations,m=u===void 0?!1:u,f=e.prefix,g=f===void 0?"":f,p=e.transformRawValue,d=p===void 0?function(x){return x}:p,h=d(B);if(h==="-")return h;var v=m?[]:["k","m","b"],A=new RegExp("((^|\\D)-\\d)|(-"+At(g)+")"),E=A.test(h),w=RegExp("(\\d+)-?"+At(g)).exec(B)||[],S=w[0],y=w[1],I=g?S?h.replace(S,"").concat(y):h.replace(g,""):h,M=f_(I,C),V=d_(M,Ee([C,r],v)),tB=V;if(!m){if(v.some(function(x){return x===V.toLowerCase().replace(r,"")}))return"";var LB=u_(V,r);LB&&(tB=String(LB))}var rt=E&&c?"-":"";if(r&&tB.includes(r)){var lB=V.split(r),DB=lB[0],vB=lB[1],N=o&&vB?vB.slice(0,o):vB,G=s?""+r+N:"";return""+rt+DB+G}return""+rt+tB},h_=function(e,B,t){if(t&&e.length>1){if(e.includes(B)){var C=e.split(B),n=C[0],r=C[1];if(r.length>t)return""+n+B+r.slice(0,t)}var i=e.length>t?new RegExp("(\\d+)(\\d{"+t+"})"):new RegExp("(\\d)(\\d+)"),s=e.match(i);if(s){var n=s[1],r=s[2];return""+n+B+r}}return e},HD=function(e,B){var t=B.groupSeparator,C=t===void 0?",":t,n=B.decimalSeparator,r=n===void 0?".":n,i=new RegExp("\\d([^"+At(C)+At(r)+"0-9]+)"),s=e.match(i);return s?s[1]:void 0},zr=function(e){var B=e.value,t=e.decimalSeparator,C=e.intlConfig,n=e.decimalScale,r=e.prefix,i=r===void 0?"":r,s=e.suffix,a=s===void 0?"":s;if(B===""||B===void 0)return"";if(B==="-")return"-";var o=new RegExp("^\\d?-"+(i?At(i)+"?":"")+"\\d").test(B),l=t!=="."?p_(B,t,o):B,c={minimumFractionDigits:n||0,maximumFractionDigits:20},u=C?new Intl.NumberFormat(C.locale,C.currency?rB(rB({},c),{style:"currency",currency:C.currency}):c):new Intl.NumberFormat(void 0,c),m=u.formatToParts(Number(l)),f=m_(m,e),g=HD(f,rB({},e)),p=B.slice(-1)===t?t:"",d=l.match(RegExp("\\d+\\.(\\d+)"))||[],h=d[1];return n===void 0&&h&&t&&(f.includes(t)?f=f.replace(RegExp("(\\d+)("+At(t)+")(\\d+)","g"),"$1$2"+h):g&&!a?f=f.replace(g,""+t+h+g):f=""+f+t+h),a&&p?""+f+p+a:g&&p?f.replace(g,""+p+g):g&&a?f.replace(g,""+p+a):[f,p,a].join("")},p_=function(e,B,t){var C=e;return B&&B!=="."&&(C=C.replace(RegExp(At(B),"g"),"."),t&&B==="-"&&(C="-"+C.slice(1))),C},m_=function(e,B){var t=B.prefix,C=B.groupSeparator,n=B.decimalSeparator,r=B.decimalScale,i=B.disableGroupSeparators,s=i===void 0?!1:i;return e.reduce(function(a,o,l){var c=o.type,u=o.value;return l===0&&t?c==="minusSign"?[u,t]:c==="currency"?Ee(Ee([],a),[t]):[t,u]:c==="currency"?t?a:Ee(Ee([],a),[u]):c==="group"?s?a:Ee(Ee([],a),[C!==void 0?C:u]):c==="decimal"?r!==void 0&&r===0?a:Ee(Ee([],a),[n!==void 0?n:u]):c==="fraction"?Ee(Ee([],a),[r!==void 0?u.slice(0,r):u]):Ee(Ee([],a),[u])},[""]).join("")},g_={currencySymbol:"",groupSeparator:"",decimalSeparator:"",prefix:"",suffix:""},v_=function(e){var B=e||{},t=B.locale,C=B.currency,n=t?new Intl.NumberFormat(t,C?{currency:C,style:"currency"}:void 0):new Intl.NumberFormat;return n.formatToParts(1000.1).reduce(function(r,i,s){return i.type==="currency"?s===0?rB(rB({},r),{currencySymbol:i.value,prefix:i.value}):rB(rB({},r),{currencySymbol:i.value,suffix:i.value}):i.type==="group"?rB(rB({},r),{groupSeparator:i.value}):i.type==="decimal"?rB(rB({},r),{decimalSeparator:i.value}):r},g_)},Tg=function(e){return RegExp(/\d/,"gi").test(e)},A_=function(e,B,t){if(B===void 0&&(B="."),t===void 0||e===""||e===void 0)return e;if(!e.match(/\d/g))return"";var C=e.split(B),n=C[0],r=C[1];if(t===0)return n;var i=r||"";if(i.length<t)for(;i.length<t;)i+="0";else i=i.slice(0,t);return""+n+B+i},y_=function(e){var B=e.selectionStart,t=e.value,C=e.lastKeyStroke,n=e.stateValue,r=e.groupSeparator,i=B,s=t;if(n&&i){var a=t.split("");return C==="Backspace"&&n[i]===r&&(a.splice(i-1,1),i-=1),C==="Delete"&&n[i]===r&&(a.splice(i,1),i+=1),s=a.join(""),{modifiedValue:s,cursorPosition:i}}return{modifiedValue:s,cursorPosition:B}},Qd=O.forwardRef(function(e,B){var t=e.allowDecimals,C=t===void 0?!0:t,n=e.allowNegativeValue,r=n===void 0?!0:n,i=e.id,s=e.name,a=e.className,o=e.customInput,l=e.decimalsLimit,c=e.defaultValue,u=e.disabled,m=u===void 0?!1:u,f=e.maxLength,g=e.value,p=e.onValueChange,d=e.fixedDecimalLength,h=e.placeholder,v=e.decimalScale,A=e.prefix,E=e.suffix,w=e.intlConfig,S=e.step,y=e.min,I=e.max,M=e.disableGroupSeparators,V=M===void 0?!1:M,tB=e.disableAbbreviations,LB=tB===void 0?!1:tB,rt=e.decimalSeparator,lB=e.groupSeparator,DB=e.onChange,vB=e.onFocus,N=e.onBlur,G=e.onKeyDown,x=e.onKeyUp,eB=e.transformRawValue,$=l_(e,["allowDecimals","allowNegativeValue","id","name","className","customInput","decimalsLimit","defaultValue","disabled","maxLength","value","onValueChange","fixedDecimalLength","placeholder","decimalScale","prefix","suffix","intlConfig","step","min","max","disableGroupSeparators","disableAbbreviations","decimalSeparator","groupSeparator","onChange","onFocus","onBlur","onKeyDown","onKeyUp","transformRawValue"]);if(rt&&Tg(rt))throw new Error("decimalSeparator cannot be a number");if(lB&&Tg(lB))throw new Error("groupSeparator cannot be a number");var QB=O.useMemo(function(){return v_(w)},[w]),z=rt||QB.decimalSeparator||"",JB=lB||QB.groupSeparator||"";if(z&&JB&&z===JB&&V===!1)throw new Error("decimalSeparator cannot be the same as groupSeparator");var Be={decimalSeparator:z,groupSeparator:JB,disableGroupSeparators:V,intlConfig:w,prefix:A||QB.prefix,suffix:E},it={decimalSeparator:z,groupSeparator:JB,allowDecimals:C,decimalsLimit:l||d||2,allowNegativeValue:r,disableAbbreviations:LB,prefix:A||QB.prefix,transformRawValue:eB},fc=c!=null?zr(rB(rB({},Be),{decimalScale:v,value:String(c)})):g!=null?zr(rB(rB({},Be),{decimalScale:v,value:String(g)})):"",Qs=O.useState(fc),YB=Qs[0],In=Qs[1],dc=O.useState(!1),kr=dc[0],JD=dc[1],d2=O.useState(0),hc=d2[0],pc=d2[1],h2=O.useState(0),p2=h2[0],VD=h2[1],m2=O.useState(null),WD=m2[0],jD=m2[1],Yt=O.useRef(null);O.useImperativeHandle(B,function(){return Yt.current});var g2=function(NB,ae){JD(!0);var ee=y_({selectionStart:ae,value:NB,lastKeyStroke:WD,stateValue:YB,groupSeparator:JB}),oe=ee.modifiedValue,le=ee.cursorPosition,ke=Mu(rB({value:oe},it));if(!(f&&ke.replace(/-/g,"").length>f)){if(ke===""||ke==="-"||ke===z){p&&p(void 0,s,{float:null,formatted:"",value:""}),In(ke),pc(1);return}var Js=z?ke.replace(z,"."):ke,B3=parseFloat(Js),mc=zr(rB({value:ke},Be));if(le!=null){var Vs=le+(mc.length-NB.length);Vs=Vs<=0?A?A.length:0:Vs,pc(Vs),VD(p2+1)}if(In(mc),p){var e3={float:B3,formatted:mc,value:ke};p(ke,s,e3)}}},YD=function(NB){var ae=NB.target,ee=ae.value,oe=ae.selectionStart;g2(ee,oe),DB&&DB(NB)},XD=function(NB){return vB&&vB(NB),YB?YB.length:0},ZD=function(NB){var ae=NB.target.value,ee=Mu(rB({value:ae},it));if(ee==="-"||ee===z||!ee){In(""),N&&N(NB);return}var oe=h_(ee,z,d),le=A_(oe,z,v!==void 0?v:d),ke=parseFloat(le.replace(z,".")),Js=zr(rB(rB({},Be),{value:le}));p&&p(le,s,{float:ke,formatted:Js,value:le}),In(Js),N&&N(NB)},qD=function(NB){var ae=NB.key;if(jD(ae),S&&(ae==="ArrowUp"||ae==="ArrowDown")){NB.preventDefault(),pc(YB.length);var ee=parseFloat(g!=null?String(g).replace(z,"."):Mu(rB({value:YB},it)))||0,oe=ae==="ArrowUp"?ee+S:ee-S;if(y!==void 0&&oe<y||I!==void 0&&oe>I)return;var le=String(S).includes(".")?Number(String(S).split(".")[1].length):void 0;g2(String(le?oe.toFixed(le):oe).replace(".",z))}G&&G(NB)},zD=function(NB){var ae=NB.key,ee=NB.currentTarget.selectionStart;if(ae!=="ArrowUp"&&ae!=="ArrowDown"&&YB!=="-"){var oe=HD(YB,{groupSeparator:JB,decimalSeparator:z});if(oe&&ee&&ee>YB.length-oe.length&&Yt.current){var le=YB.length-oe.length;Yt.current.setSelectionRange(le,le)}}x&&x(NB)};O.useEffect(function(){kr&&YB!=="-"&&Yt.current&&document.activeElement===Yt.current&&Yt.current.setSelectionRange(hc,hc)},[YB,hc,Yt,kr,p2]);var _D=function(){return g!=null&&YB!=="-"&&(!z||YB!==z)?zr(rB(rB({},Be),{decimalScale:kr?void 0:v,value:String(g)})):YB},v2=rB({type:"text",inputMode:"decimal",id:i,name:s,className:a,onChange:YD,onBlur:ZD,onFocus:XD,onKeyDown:qD,onKeyUp:zD,placeholder:h,disabled:m,value:_D(),ref:Yt},$);if(o){var $D=o;return rr.createElement($D,rB({},v2))}return rr.createElement("input",rB({},v2))});Qd.displayName="CurrencyInput";const E_={databaseURL:"https://criblytics-default-rtdb.firebaseio.com/",apiKey:"AIzaSyCRv3YXcKBp4caX4SLDf9tOM_jf6-PgKWc",authDomain:"criblytics.firebaseapp.com",projectId:"criblytics",storageBucket:"criblytics.appspot.com",messagingSenderId:"109707951445",appId:"1:109707951445:web:120d9a55b9851e13bd03dc",measurementId:"G-VH1N6MR0RG"},xD=Hl(E_);_1(xD);_l(xD);const GD=_l(),S_=(e,B,t="animate__")=>new Promise((C,n)=>{const r=`${t}${B}`,i=document.getElementById(e);if(!i){n(`Element with ID '${e}' not found.`);return}i.classList.add(`${t}animated`,r);function s(a){a.stopPropagation(),i.classList.remove(`${t}animated`,r),i.style.display="none",C("Animation ended")}i.addEventListener("animationend",s,{once:!0})});function I_(e){return S_("search","fadeOut"),console.log(e.listing_id),D("div",{children:D(b_,{listing_id:e.listing_id})})}const b_=e=>{const B=e.listing_id,[t,C]=O.useState({}),[n,r]=O.useState(!1),[i,s]=O.useState(!1),a=()=>{r(!n)},o=()=>{s(!i)};O.useEffect(()=>{const c=el(GD,"properties/"+B);$i(c).then(u=>{u.exists()?C(u.val()):console.log("No data available")}).catch(u=>{console.error(u)})},[]);const l=()=>{window.location.reload()};return q("div",{children:[q("h2",{className:"hover:text-emerald-400 text-3xl my-8 text-emerald-100 cursor-pointer",onClick:a,children:[D("span",{className:`triangle ${n?"open":""}`}),"Key Metrics"]}),n&&D("div",{children:D(D_,{snap:t,listing_id:B})}),q("h2",{className:"hover:text-slate-400 text-3xl my-8 text-slate-100 cursor-pointer",onClick:o,children:[D("span",{className:`triangle ${i?"open":""}`}),"Property Details"]}),i&&q("ul",{className:"flex flex-wrap overflow-auto max-w-lg text-2xl font-medium",children:[Object.entries(t.prop_common).map(([c,u])=>R_(c,u)),D(w_,{snap:t})]}),D("button",{onClick:l,className:"hover:bg-slate-700 rounded-2xl shadow-2xl text-2xl text-dark-waves bg-gradient-to-r bg-slate-500",children:"Home"})]})},w_=e=>{const[B,t]=O.useState([]),[C,n]=O.useState(0),[r,i]=O.useState(!0);O.useEffect(()=>{let o=e.snap;o&&o.photos&&o.photos.length>0&&(t(o.photos),i(!1))},[]);const s=()=>{n(o=>(o-1+B.length)%B.length)},a=()=>{n(o=>(o+1)%B.length)};return D(ro,{children:D("div",{className:"border-2 border-grainy justify-center flex-wrap flex",children:r?D("div",{style:{display:"none"},children:B.map((o,l)=>D("img",{src:o.href,alt:`Property ${l+1}`},l))}):q(ro,{children:[D("img",{src:B[C].href,className:"p-8 w-full h-96 rounded-2xl shadow-lg",alt:`Property ${C+1}`}),q("div",{className:"flex justify-center my-4 rounded-xl",children:[D("button",{className:"mr-4 bg-grainy rounded-xl shadow-xl",onClick:s,disabled:B.length===1,children:"Previous"}),D("button",{className:"bg-grainy rounded-xl shadow-xl",onClick:a,disabled:B.length===1,children:"Next"})]})]})})})},D_=e=>{let B=e.snap,t=e.listing_id;const C=el(GD,"properties/"+t+"/rental/");async function n(lB,DB){let G=(await(await fetch(lB,DB)).json()).data.home_search.results;const x=Object.entries(G).map(([eB,$])=>{const{products:QB,...z}=$;return[eB,z]});console.log(x),rd(C,x)}O.useEffect(()=>{console.log(B.prop_common.price+"price"),(async()=>{$i(C).then(DB=>{let vB=null;if(DB.exists())vB=DB.val();else{console.log("No data available");try{let x=B.prop_common.bed,eB=B.prop_common.bath,$=B.prop_common.sqft,QB=B.address.city,z=B.address.state;const JB=Math.max(1,x-1),Be=x,it=Math.max(1,eB-1),fc=eB+1,Qs=Math.max(500,$-750),YB=$+750,In=`https://us-real-estate.p.rapidapi.com/v2/for-rent?city=${QB}&state_code=${z}&limit=42&offset=0&beds_min=${JB}&beds_max=${Be}&baths_min=${it}&baths_max=${fc}&expand_search_radius=25&home_size_min=${Qs}&home_size_max=${YB}`;n(In,{method:"GET",headers:{"X-RapidAPI-Key":"2661057b61msh8e6271d7a1763b6p12ffb0jsnc06db3ad292e","X-RapidAPI-Host":"us-real-estate.p.rapidapi.com"}}),vB=$i(C).then(kr=>{vB=kr.val()})}catch(x){console.error(x)}}let N=0,G=vB.length;Object.entries(vB).map(([x,eB])=>{eB[0];const $=eB[1];let QB=0,z=0,JB=0;$.list_price!==null&&(JB=$.list_price),$.list_price_min!==null&&(QB=$.list_price_min),$.list_price_max!==null&&(z=$.list_price_max),QB==null&&(QB=0),z==null&&(z=0),JB==null&&(JB=(QB+z)/2),N=N+JB}),N=N/G,N=Math.floor(N),i(N),console.log(r+"rent")}).catch(DB=>{console.error(DB)})})()},[]);const[r,i]=O.useState(0),[s,a]=O.useState(B.prop_common.price),[o,l]=O.useState(20),[c,u]=O.useState("6.0"),[m,f]=O.useState(30),g=s,p=o/100*g,d=g-p,v=parseFloat(c)/100/12,A=m*12,E=v===0||v===void 0||v===""?0:d*v*Math.pow(1+v,A)/(Math.pow(1+v,A)-1),w=parseFloat(String(r).replace(/[^0-9.-]+/g,"")),S=12,y=w*S,[I,M]=O.useState(0),V=y-E*S-I*S,tB=lB=>parseFloat(lB.replace(/[^0-9.-]+/g,""));return D(ro,{children:q("div",{className:"max-w-sm mx-auto",children:[q("div",{className:"p-2",children:[D("div",{className:"grid grid-cols-2 gap-4",children:D("div",{className:"col-span-2",children:D("div",{className:"text-grainy text-2xl font-medium",children:q("div",{className:"flex items-center mb-4",children:[D("span",{className:"w-1/2",children:"List Price: "}),D("div",{className:"w-1/2 overflow-auto font-medium",children:D(Qd,{prefix:"$",name:"priceInput",id:"priceInput","data-number-to-fixed":"2","data-number-stepfactor":"100",value:s,placeholder:"",onChange:lB=>{let DB=lB.target.value,vB=tB(DB);a(isNaN(vB)?0:vB)},allowDecimals:!0,decimalsLimit:"2",disableAbbreviations:!0})})]})})})}),D("div",{className:"grid grid-cols-2 gap-4",children:D("div",{className:"col-span-2",children:D("div",{className:"text-bland text-2xl font-medium",children:q("div",{className:"flex items-center mb-4",children:[D("span",{className:"w-1/2",children:"Rent Estimate: "}),D("div",{className:"w-1/2 overflow-auto font-medium",children:D(Qd,{prefix:"$",name:"priceInput",id:"priceInput","data-number-to-fixed":"2","data-number-stepfactor":"100",value:r,placeholder:"",onChange:lB=>{let DB=lB.target.value,vB=tB(DB);i(isNaN(vB)?0:vB)},allowDecimals:!0,decimalsLimit:"2",disableAbbreviations:!0})})]})})})})]}),q("div",{className:"grid grid-cols-2 gap-4",children:[D("div",{className:"col-span-1",children:q("div",{className:"mb-4",children:[q("label",{htmlFor:"downpaymentSlider",className:"text-lg font-medium",children:["Downpayment:",D("br",{})," ",o,"%"]}),D("input",{type:"range",id:"downpaymentSlider",className:"w-full",min:0,max:100,value:o,onChange:lB=>l(parseInt(lB.target.value))})]})}),D("div",{className:"col-span-1",children:q("div",{className:"mb-4",children:[q("label",{className:"font-medium",children:["Loan Term: ",D("br",{}),m," years"]}),D("input",{type:"range",min:15,max:30,className:"w-full",value:m,onChange:lB=>f(parseInt(lB.target.value))})]})})]}),q("div",{className:"grid grid-cols-3 gap-4",children:[D("div",{className:"col-span-1",children:q("div",{className:"mb-4",children:[D("label",{htmlFor:"interestRateInput",className:"font-medium",children:"Interest Rate (%)"}),D("input",{type:"text",id:"interestRateInput",className:"w-full px-2 py-1 rounded border border-gray-300",value:c,onChange:lB=>{const DB=lB.target.value;u(DB)}})]})}),D("div",{className:"col-span-1",children:q("div",{className:"mb-4",children:[D("label",{htmlFor:"monthlyPayment",className:"font-medium",children:"Monthly Payment"}),D("input",{type:"text",id:"monthlyPayment",className:"w-full px-2 py-1 rounded border border-gray-300",value:isNaN(E+I)?"-":(E+I).toLocaleString("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}),readOnly:!0})]})}),D("div",{className:"col-span-1",children:q("div",{className:"mb-4",children:[D("label",{htmlFor:"totalExpensesInput",className:"font-medium",children:"Monthly Expenses"}),D("input",{type:"number",id:"totalExpensesInput",className:"w-full px-2 py-1 rounded border border-gray-300",value:I===0||I===null?0:I,onChange:lB=>M(parseFloat(lB.target.value))})]})})]}),D("div",{className:"flex items-center justify-center",children:D("div",{className:"text-3xl font-medium m-4 p-6 shadow-2xl border-1 rounded-xl bg-slate-800 hover:bg-slate-900",children:q("label",{className:`text-3xl font-medium ${V>=0?"text-green-600":"text-red-600"}`,children:["Annual Income: ",isNaN(V)?"-":V.toLocaleString("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2})]})})})]})})},P_={baths:K9,beds:J9,lot_sqft:Ng,sold_date:Fg,sold_price:W9,sqft:Ng,stories:V9,type:Q9,year_built:Fg},R_=(e,B)=>{const t=P_[e];if(t==null)return;let C=B;return(e==="sold_date"||e==="year_built")&&(C=new Date(B).getFullYear().toString()),e==="sold_price"&&(C=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(B),C=C.substring(1,C.length)),e==="lot_sqft"&&(C="Lot size "+C+" sqft"),e==="sqft"&&(C=C+" sqft"),e==="sold_date"&&(C="Last sold "+C),e==="year_built"&&(C="Built in "+C),e==="type"&&(C=C.replace("_"," "),C=C.charAt(0).toUpperCase()+C.slice(1)),e==="stories"&&(C="Stories "+C),q("li",{className:"text-waves my-4 w-1/2",children:[D(Us,{icon:t})," ",C]},e)},N_={databaseURL:"https://criblytics-default-rtdb.firebaseio.com/",apiKey:"AIzaSyCRv3YXcKBp4caX4SLDf9tOM_jf6-PgKWc",authDomain:"criblytics.firebaseapp.com",projectId:"criblytics",storageBucket:"criblytics.appspot.com",messagingSenderId:"109707951445",appId:"1:109707951445:web:120d9a55b9851e13bd03dc",measurementId:"G-VH1N6MR0RG"},KD=Hl(N_);_1(KD);const Mg=_l(KD),F_=new Le;F_.setCustomParameters({prompt:"select_account"});yE();const O_=["AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];function k_(e){const[B,t]=O.useState(""),[C,n]=O.useState(""),[r,i]=O.useState(""),[s,a]=O.useState("false"),[o,l]=O.useState("0"),[c,u]=O.useState(!1),m=()=>{if(e.login){console.log("City: "+B),console.log("State: "+C),console.log("Address: "+r),console.log();let d=e.user,h=d.uid,v=d.email,A=d.displayName;console.log(d),console.log(h),console.log(v),console.log(A),g(B,C,r)}else alert("Please login before continuing")};O.useEffect(()=>{a(!1)});const f={method:"GET",headers:{"X-RapidAPI-Key":"2661057b61msh8e6271d7a1763b6p12ffb0jsnc06db3ad292e","X-RapidAPI-Host":"us-real-estate.p.rapidapi.com"}},g=(p,d,h)=>{if(document.getElementById("search"),p===""||d===""||h==="")alert("Invalid input");else{const v=`${h} ${p} ${d}`,A=encodeURIComponent(v);console.log(A);const E=`https://us-real-estate.p.rapidapi.com/location/suggest?input=${A}`;fetch(E,f).then(w=>w.json()).then(w=>{const S=w.data[0].property_id;console.log(S),l(S);const y=el(Mg,"properties/"+S);$i(y).then(M=>{if(M.exists()){console.log("Already exists"),u(!0);return}else{console.log("No data available");const V=`https://us-real-estate.p.rapidapi.com/v2/property-detail?property_id=${S}`;fetch(V,f).then(tB=>tB.json()).then(tB=>{console.log(tB);let LB=tB.data.property_detail;delete LB.product_attributes,rd(y,LB),u(!0)}).catch(tB=>console.error(tB))}}).catch(M=>{console.error(M)});const I=el(Mg,"users/"+e.user.uid+"/history/");$i(I).then(M=>{let V=M.val()||[];V.includes(S)?console.log("listing_id already exists in user history."):(V.push(S),rd(I,V).then(()=>{console.log("Successfully updated user history.")}).catch(tB=>{console.error("Error updating user history:",tB)}))}).catch(M=>{console.error("Error fetching user history:",M)})}).catch(w=>console.error(w))}};return q(ro,{children:[q("div",{id:"search",children:[q("div",{className:"p-4 flex content-center justify-center text-center",children:[q("div",{className:"w-1/2 mr-2",children:[D("label",{className:"text-3xl block text-grainy mb-2",children:"City"}),D("input",{className:"px-2 py-2 bg-dark-waves rounded-lg text-dark-bland w-full",type:"text",value:B,onChange:p=>t(p.target.value)})]}),q("div",{className:"w-1/2",children:[D("label",{className:"text-3xl block text-grainy mb-2",children:"State"}),q("select",{className:"px-2 py-3 bg-dark-waves rounded-lg text-dark-bland w-4/5",value:C,onChange:p=>n(p.target.value),children:[D("option",{value:"",children:"Select a state"}),O_.map(p=>D("option",{value:p,children:p},p))]})]})]}),q("div",{className:"p-4 flex flex-col items-center",children:[D("label",{className:"text-3xl block text-grainy mb-2",children:"Address"}),D("div",{className:"w-3/5 mr-2 flex",children:D("input",{className:"px-2 py-2 bg-dark-waves rounded-lg text-dark-bland w-full",type:"text",value:r,onChange:p=>i(p.target.value)})})]}),D("button",{id:"search",onClick:m,className:"active:shadow-none shadow-2xl active:from-black active:to-black focus:bg-black w-1/3 rounded-xl text-wave duration-200 ease-in-out transition my-8 bg-gradient-to-l from-grainy to-bland ",children:"Search"}),D("img",{id:"picture",src:""}),D("div",{id:"details"}),D("div",{id:"description"})]}),c&&D(I_,{listing_id:o})]})}let Lg=0;function T_(){const e=["home","rental","investment"];return D("div",{className:"",children:q(tN,{to:"/About",children:[q("h1",{className:"mx-20 sm:text-5xl text-4xl font-extrabold leading-tighter tracking-tighter mb-24",children:["Crib",D("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-grainy to-bland",children:"lytics."})]}),q("p",{className:"text-2xl text-waves mb-8",children:["Find your dream ",D("span",{className:["#6EE7B7","#FFD166","#06D6A0"][Lg],children:e[Lg]})]})]})})}const M_=({user:e,auth:B,db:t})=>q("div",{className:"flex content-center justify-center gap-16 mt-8 border-b-2 border-grainy pb-6",children:[D("img",{className:" rounded-xl h-16 w-16",src:e.photoURL,alt:""}),D("button",{className:" hover:border-red-500 hover:border-3 p-16 rounded-2xl button signout bg-transparent font-bold py-2 px-4 text-2xl text-waves",onClick:()=>B.signOut(),children:"Sign out"})]});const L_={databaseURL:"https://criblytics-default-rtdb.firebaseio.com/",apiKey:"AIzaSyCRv3YXcKBp4caX4SLDf9tOM_jf6-PgKWc",authDomain:"criblytics.firebaseapp.com",projectId:"criblytics",storageBucket:"criblytics.appspot.com",messagingSenderId:"109707951445",appId:"1:109707951445:web:120d9a55b9851e13bd03dc",measurementId:"G-VH1N6MR0RG"},UD=Hl(L_);_1(UD);const H_=_l(UD),QD=new Le;QD.setCustomParameters({prompt:"select_account"});const Jd=yE();function x_(){async function e(B,t){var C;try{const n=await ST(B,t),i=Le.credentialFromResult(n).accessToken,s=n.user;console.log(s)}catch(n){n.code,n.message,(C=n.customData)!=null&&C.email,Le.credentialFromError(n)}}return D("button",{id:"signIn",onClick:()=>e(Jd,QD),className:"px-8 py-4  bg-bland text-3xl font-bold bg-transparent hover:border-green-500 text-wavesfont-semibold hover:text-white rounded-xl",children:"Sign in"})}function G_(){const[e,B]=O.useState(null);O.useState(!1),O.useEffect(()=>{Jd.onAuthStateChanged(n=>{B(n)})},[]);const[t,C]=O.useState(100);return q("div",{children:[q("div",{className:"mt-8 ",children:[D(iN,{}),D(T_,{}),D("section",{children:e?D(M_,{auth:Jd,user:e,db:H_}):D(x_,{})}),D("div",{className:"mt-4 text-xl text-center max-w-l",children:e?D(k_,{user:e,login:!0}):null})]}),D(K_,{indicatorPosition:t})]})}function K_({indicatorPosition:e}){return D("div",{className:"mx-auto w-72 h-8 bg-gradient-to-r from-red-500 to-green-500 mb-6 rounded-lg shadow-2xl"})}function U_(){return console.log({}.DATABASE_URL),D("div",{children:D(G_,{})})}const Q_=Lu.createRoot(document.getElementById("root"));Q_.render(D(rr.StrictMode,{children:D($R,{children:D(U_,{})})}));