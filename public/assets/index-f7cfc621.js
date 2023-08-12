function c3(e,B){for(var t=0;t<B.length;t++){const C=B[t];if(typeof C!="string"&&!Array.isArray(C)){for(const n in C)if(n!=="default"&&!(n in e)){const r=Object.getOwnPropertyDescriptor(C,n);r&&Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:()=>C[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const B=document.createElement("link").relList;if(B&&B.supports&&B.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))C(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&C(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function C(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();function u3(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Wg(e){if(e.__esModule)return e;var B=e.default;if(typeof B=="function"){var t=function C(){if(this instanceof C){var n=[null];n.push.apply(n,arguments);var r=Function.bind.apply(B,n);return new r}return B.apply(this,arguments)};t.prototype=B.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach(function(C){var n=Object.getOwnPropertyDescriptor(e,C);Object.defineProperty(t,C,n.get?n:{enumerable:!0,get:function(){return e[C]}})}),t}var bi={},f3={get exports(){return bi},set exports(e){bi=e}},yl={},S={},d3={get exports(){return S},set exports(e){S=e}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hs=Symbol.for("react.element"),h3=Symbol.for("react.portal"),p3=Symbol.for("react.fragment"),m3=Symbol.for("react.strict_mode"),g3=Symbol.for("react.profiler"),v3=Symbol.for("react.provider"),A3=Symbol.for("react.context"),y3=Symbol.for("react.forward_ref"),E3=Symbol.for("react.suspense"),S3=Symbol.for("react.memo"),I3=Symbol.for("react.lazy"),w2=Symbol.iterator;function b3(e){return e===null||typeof e!="object"?null:(e=w2&&e[w2]||e["@@iterator"],typeof e=="function"?e:null)}var jg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yg=Object.assign,Xg={};function Ir(e,B,t){this.props=e,this.context=B,this.refs=Xg,this.updater=t||jg}Ir.prototype.isReactComponent={};Ir.prototype.setState=function(e,B){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,B,"setState")};Ir.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zg(){}Zg.prototype=Ir.prototype;function Zd(e,B,t){this.props=e,this.context=B,this.refs=Xg,this.updater=t||jg}var qd=Zd.prototype=new Zg;qd.constructor=Zd;Yg(qd,Ir.prototype);qd.isPureReactComponent=!0;var D2=Array.isArray,qg=Object.prototype.hasOwnProperty,zd={current:null},zg={key:!0,ref:!0,__self:!0,__source:!0};function _g(e,B,t){var C,n={},r=null,i=null;if(B!=null)for(C in B.ref!==void 0&&(i=B.ref),B.key!==void 0&&(r=""+B.key),B)qg.call(B,C)&&!zg.hasOwnProperty(C)&&(n[C]=B[C]);var s=arguments.length-2;if(s===1)n.children=t;else if(1<s){for(var a=Array(s),o=0;o<s;o++)a[o]=arguments[o+2];n.children=a}if(e&&e.defaultProps)for(C in s=e.defaultProps,s)n[C]===void 0&&(n[C]=s[C]);return{$$typeof:hs,type:e,key:r,ref:i,props:n,_owner:zd.current}}function w3(e,B){return{$$typeof:hs,type:e.type,key:B,ref:e.ref,props:e.props,_owner:e._owner}}function _d(e){return typeof e=="object"&&e!==null&&e.$$typeof===hs}function D3(e){var B={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return B[t]})}var P2=/\/+/g;function Sc(e,B){return typeof e=="object"&&e!==null&&e.key!=null?D3(""+e.key):B.toString(36)}function Qa(e,B,t,C,n){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(r){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case hs:case h3:i=!0}}if(i)return i=e,n=n(i),e=C===""?"."+Sc(i,0):C,D2(n)?(t="",e!=null&&(t=e.replace(P2,"$&/")+"/"),Qa(n,B,t,"",function(o){return o})):n!=null&&(_d(n)&&(n=w3(n,t+(!n.key||i&&i.key===n.key?"":(""+n.key).replace(P2,"$&/")+"/")+e)),B.push(n)),1;if(i=0,C=C===""?".":C+":",D2(e))for(var s=0;s<e.length;s++){r=e[s];var a=C+Sc(r,s);i+=Qa(r,B,t,a,n)}else if(a=b3(e),typeof a=="function")for(e=a.call(e),s=0;!(r=e.next()).done;)r=r.value,a=C+Sc(r,s++),i+=Qa(r,B,t,a,n);else if(r==="object")throw B=String(e),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return i}function qs(e,B,t){if(e==null)return e;var C=[],n=0;return Qa(e,C,"","",function(r){return B.call(t,r,n++)}),C}function P3(e){if(e._status===-1){var B=e._result;B=B(),B.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=B)}if(e._status===1)return e._result.default;throw e._result}var se={current:null},Ja={transition:null},R3={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:Ja,ReactCurrentOwner:zd};q.Children={map:qs,forEach:function(e,B,t){qs(e,function(){B.apply(this,arguments)},t)},count:function(e){var B=0;return qs(e,function(){B++}),B},toArray:function(e){return qs(e,function(B){return B})||[]},only:function(e){if(!_d(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};q.Component=Ir;q.Fragment=p3;q.Profiler=g3;q.PureComponent=Zd;q.StrictMode=m3;q.Suspense=E3;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R3;q.cloneElement=function(e,B,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var C=Yg({},e.props),n=e.key,r=e.ref,i=e._owner;if(B!=null){if(B.ref!==void 0&&(r=B.ref,i=zd.current),B.key!==void 0&&(n=""+B.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in B)qg.call(B,a)&&!zg.hasOwnProperty(a)&&(C[a]=B[a]===void 0&&s!==void 0?s[a]:B[a])}var a=arguments.length-2;if(a===1)C.children=t;else if(1<a){s=Array(a);for(var o=0;o<a;o++)s[o]=arguments[o+2];C.children=s}return{$$typeof:hs,type:e.type,key:n,ref:r,props:C,_owner:i}};q.createContext=function(e){return e={$$typeof:A3,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:v3,_context:e},e.Consumer=e};q.createElement=_g;q.createFactory=function(e){var B=_g.bind(null,e);return B.type=e,B};q.createRef=function(){return{current:null}};q.forwardRef=function(e){return{$$typeof:y3,render:e}};q.isValidElement=_d;q.lazy=function(e){return{$$typeof:I3,_payload:{_status:-1,_result:e},_init:P3}};q.memo=function(e,B){return{$$typeof:S3,type:e,compare:B===void 0?null:B}};q.startTransition=function(e){var B=Ja.transition;Ja.transition={};try{e()}finally{Ja.transition=B}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(e,B){return se.current.useCallback(e,B)};q.useContext=function(e){return se.current.useContext(e)};q.useDebugValue=function(){};q.useDeferredValue=function(e){return se.current.useDeferredValue(e)};q.useEffect=function(e,B){return se.current.useEffect(e,B)};q.useId=function(){return se.current.useId()};q.useImperativeHandle=function(e,B,t){return se.current.useImperativeHandle(e,B,t)};q.useInsertionEffect=function(e,B){return se.current.useInsertionEffect(e,B)};q.useLayoutEffect=function(e,B){return se.current.useLayoutEffect(e,B)};q.useMemo=function(e,B){return se.current.useMemo(e,B)};q.useReducer=function(e,B,t){return se.current.useReducer(e,B,t)};q.useRef=function(e){return se.current.useRef(e)};q.useState=function(e){return se.current.useState(e)};q.useSyncExternalStore=function(e,B,t){return se.current.useSyncExternalStore(e,B,t)};q.useTransition=function(){return se.current.useTransition()};q.version="18.2.0";(function(e){e.exports=q})(d3);const sr=u3(S),N3=c3({__proto__:null,default:sr},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F3=S,O3=Symbol.for("react.element"),k3=Symbol.for("react.fragment"),T3=Object.prototype.hasOwnProperty,M3=F3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,L3={key:!0,ref:!0,__self:!0,__source:!0};function $g(e,B,t){var C,n={},r=null,i=null;t!==void 0&&(r=""+t),B.key!==void 0&&(r=""+B.key),B.ref!==void 0&&(i=B.ref);for(C in B)T3.call(B,C)&&!L3.hasOwnProperty(C)&&(n[C]=B[C]);if(e&&e.defaultProps)for(C in B=e.defaultProps,B)n[C]===void 0&&(n[C]=B[C]);return{$$typeof:O3,type:e,key:r,ref:i,props:n,_owner:M3.current}}yl.Fragment=k3;yl.jsx=$g;yl.jsxs=$g;(function(e){e.exports=yl})(f3);const lo=bi.Fragment,P=bi.jsx,X=bi.jsxs;var Uu={},Qu={},x3={get exports(){return Qu},set exports(e){Qu=e}},Ne={},Ju={},H3={get exports(){return Ju},set exports(e){Ju=e}},Bv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function B(F,G){var H=F.length;F.push(G);B:for(;0<H;){var eB=H-1>>>1,$=F[eB];if(0<n($,G))F[eB]=G,F[H]=$,H=eB;else break B}}function t(F){return F.length===0?null:F[0]}function C(F){if(F.length===0)return null;var G=F[0],H=F.pop();if(H!==G){F[0]=H;B:for(var eB=0,$=F.length,JB=$>>>1;eB<JB;){var z=2*(eB+1)-1,VB=F[z],ee=z+1,it=F[ee];if(0>n(VB,H))ee<$&&0>n(it,VB)?(F[eB]=it,F[ee]=H,eB=ee):(F[eB]=VB,F[z]=H,eB=z);else if(ee<$&&0>n(it,H))F[eB]=it,F[ee]=H,eB=ee;else break B}}return G}function n(F,G){var H=F.sortIndex-G.sortIndex;return H!==0?H:F.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var a=[],o=[],l=1,c=null,u=3,g=!1,f=!1,m=!1,p=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(F){for(var G=t(o);G!==null;){if(G.callback===null)C(o);else if(G.startTime<=F)C(o),G.sortIndex=G.expirationTime,B(a,G);else break;G=t(o)}}function A(F){if(m=!1,v(F),!f)if(t(a)!==null)f=!0,DB(E);else{var G=t(o);G!==null&&vB(A,G.startTime-F)}}function E(F,G){f=!1,m&&(m=!1,d(y),y=-1),g=!0;var H=u;try{for(v(G),c=t(a);c!==null&&(!(c.expirationTime>G)||F&&!V());){var eB=c.callback;if(typeof eB=="function"){c.callback=null,u=c.priorityLevel;var $=eB(c.expirationTime<=G);G=e.unstable_now(),typeof $=="function"?c.callback=$:c===t(a)&&C(a),v(G)}else C(a);c=t(a)}if(c!==null)var JB=!0;else{var z=t(o);z!==null&&vB(A,z.startTime-G),JB=!1}return JB}finally{c=null,u=H,g=!1}}var D=!1,I=null,y=-1,b=5,M=-1;function V(){return!(e.unstable_now()-M<b)}function tB(){if(I!==null){var F=e.unstable_now();M=F;var G=!0;try{G=I(!0,F)}finally{G?xB():(D=!1,I=null)}}else D=!1}var xB;if(typeof h=="function")xB=function(){h(tB)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,lB=rt.port2;rt.port1.onmessage=tB,xB=function(){lB.postMessage(null)}}else xB=function(){p(tB,0)};function DB(F){I=F,D||(D=!0,xB())}function vB(F,G){y=p(function(){F(e.unstable_now())},G)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){f||g||(f=!0,DB(E))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return u},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(F){switch(u){case 1:case 2:case 3:var G=3;break;default:G=u}var H=u;u=G;try{return F()}finally{u=H}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,G){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var H=u;u=F;try{return G()}finally{u=H}},e.unstable_scheduleCallback=function(F,G,H){var eB=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?eB+H:eB):H=eB,F){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=H+$,F={id:l++,callback:G,priorityLevel:F,startTime:H,expirationTime:$,sortIndex:-1},H>eB?(F.sortIndex=H,B(o,F),t(a)===null&&F===t(o)&&(m?(d(y),y=-1):m=!0,vB(A,H-eB))):(F.sortIndex=$,B(a,F),f||g||(f=!0,DB(E))),F},e.unstable_shouldYield=V,e.unstable_wrapCallback=function(F){var G=u;return function(){var H=u;u=G;try{return F.apply(this,arguments)}finally{u=H}}}})(Bv);(function(e){e.exports=Bv})(H3);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ev=S,Re=Ju;function w(e){for(var B="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)B+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+B+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tv=new Set,wi={};function gn(e,B){ar(e,B),ar(e+"Capture",B)}function ar(e,B){for(wi[e]=B,e=0;e<B.length;e++)tv.add(B[e])}var Tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vu=Object.prototype.hasOwnProperty,G3=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,R2={},N2={};function K3(e){return Vu.call(N2,e)?!0:Vu.call(R2,e)?!1:G3.test(e)?N2[e]=!0:(R2[e]=!0,!1)}function U3(e,B,t,C){if(t!==null&&t.type===0)return!1;switch(typeof B){case"function":case"symbol":return!0;case"boolean":return C?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Q3(e,B,t,C){if(B===null||typeof B>"u"||U3(e,B,t,C))return!0;if(C)return!1;if(t!==null)switch(t.type){case 3:return!B;case 4:return B===!1;case 5:return isNaN(B);case 6:return isNaN(B)||1>B}return!1}function ae(e,B,t,C,n,r,i){this.acceptsBooleans=B===2||B===3||B===4,this.attributeName=C,this.attributeNamespace=n,this.mustUseProperty=t,this.propertyName=e,this.type=B,this.sanitizeURL=r,this.removeEmptyString=i}var YB={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){YB[e]=new ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var B=e[0];YB[B]=new ae(B,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){YB[e]=new ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){YB[e]=new ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){YB[e]=new ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){YB[e]=new ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){YB[e]=new ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){YB[e]=new ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){YB[e]=new ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var $d=/[\-:]([a-z])/g;function B1(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var B=e.replace($d,B1);YB[B]=new ae(B,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var B=e.replace($d,B1);YB[B]=new ae(B,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var B=e.replace($d,B1);YB[B]=new ae(B,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){YB[e]=new ae(e,1,!1,e.toLowerCase(),null,!1,!1)});YB.xlinkHref=new ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){YB[e]=new ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function e1(e,B,t,C){var n=YB.hasOwnProperty(B)?YB[B]:null;(n!==null?n.type!==0:C||!(2<B.length)||B[0]!=="o"&&B[0]!=="O"||B[1]!=="n"&&B[1]!=="N")&&(Q3(B,t,n,C)&&(t=null),C||n===null?K3(B)&&(t===null?e.removeAttribute(B):e.setAttribute(B,""+t)):n.mustUseProperty?e[n.propertyName]=t===null?n.type===3?!1:"":t:(B=n.attributeName,C=n.attributeNamespace,t===null?e.removeAttribute(B):(n=n.type,t=n===3||n===4&&t===!0?"":""+t,C?e.setAttributeNS(C,B,t):e.setAttribute(B,t))))}var Jt=ev.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zs=Symbol.for("react.element"),kn=Symbol.for("react.portal"),Tn=Symbol.for("react.fragment"),t1=Symbol.for("react.strict_mode"),Wu=Symbol.for("react.profiler"),Cv=Symbol.for("react.provider"),nv=Symbol.for("react.context"),C1=Symbol.for("react.forward_ref"),ju=Symbol.for("react.suspense"),Yu=Symbol.for("react.suspense_list"),n1=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),rv=Symbol.for("react.offscreen"),F2=Symbol.iterator;function Hr(e){return e===null||typeof e!="object"?null:(e=F2&&e[F2]||e["@@iterator"],typeof e=="function"?e:null)}var EB=Object.assign,Ic;function ti(e){if(Ic===void 0)try{throw Error()}catch(t){var B=t.stack.trim().match(/\n( *(at )?)/);Ic=B&&B[1]||""}return`
`+Ic+e}var bc=!1;function wc(e,B){if(!e||bc)return"";bc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(B)if(B=function(){throw Error()},Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(o){var C=o}Reflect.construct(e,[],B)}else{try{B.call()}catch(o){C=o}e.call(B.prototype)}else{try{throw Error()}catch(o){C=o}e()}}catch(o){if(o&&C&&typeof o.stack=="string"){for(var n=o.stack.split(`
`),r=C.stack.split(`
`),i=n.length-1,s=r.length-1;1<=i&&0<=s&&n[i]!==r[s];)s--;for(;1<=i&&0<=s;i--,s--)if(n[i]!==r[s]){if(i!==1||s!==1)do if(i--,s--,0>s||n[i]!==r[s]){var a=`
`+n[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=s);break}}}finally{bc=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?ti(e):""}function J3(e){switch(e.tag){case 5:return ti(e.type);case 16:return ti("Lazy");case 13:return ti("Suspense");case 19:return ti("SuspenseList");case 0:case 2:case 15:return e=wc(e.type,!1),e;case 11:return e=wc(e.type.render,!1),e;case 1:return e=wc(e.type,!0),e;default:return""}}function Xu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Tn:return"Fragment";case kn:return"Portal";case Wu:return"Profiler";case t1:return"StrictMode";case ju:return"Suspense";case Yu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case nv:return(e.displayName||"Context")+".Consumer";case Cv:return(e._context.displayName||"Context")+".Provider";case C1:var B=e.render;return e=e.displayName,e||(e=B.displayName||B.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case n1:return B=e.displayName||null,B!==null?B:Xu(e.type)||"Memo";case _t:B=e._payload,e=e._init;try{return Xu(e(B))}catch{}}return null}function V3(e){var B=e.type;switch(e.tag){case 24:return"Cache";case 9:return(B.displayName||"Context")+".Consumer";case 10:return(B._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=B.render,e=e.displayName||e.name||"",B.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return B;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xu(B);case 8:return B===t1?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof B=="function")return B.displayName||B.name||null;if(typeof B=="string")return B}return null}function bC(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function iv(e){var B=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(B==="checkbox"||B==="radio")}function W3(e){var B=iv(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,B),C=""+e[B];if(!e.hasOwnProperty(B)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var n=t.get,r=t.set;return Object.defineProperty(e,B,{configurable:!0,get:function(){return n.call(this)},set:function(i){C=""+i,r.call(this,i)}}),Object.defineProperty(e,B,{enumerable:t.enumerable}),{getValue:function(){return C},setValue:function(i){C=""+i},stopTracking:function(){e._valueTracker=null,delete e[B]}}}}function _s(e){e._valueTracker||(e._valueTracker=W3(e))}function sv(e){if(!e)return!1;var B=e._valueTracker;if(!B)return!0;var t=B.getValue(),C="";return e&&(C=iv(e)?e.checked?"true":"false":e.value),e=C,e!==t?(B.setValue(e),!0):!1}function co(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zu(e,B){var t=B.checked;return EB({},B,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function O2(e,B){var t=B.defaultValue==null?"":B.defaultValue,C=B.checked!=null?B.checked:B.defaultChecked;t=bC(B.value!=null?B.value:t),e._wrapperState={initialChecked:C,initialValue:t,controlled:B.type==="checkbox"||B.type==="radio"?B.checked!=null:B.value!=null}}function av(e,B){B=B.checked,B!=null&&e1(e,"checked",B,!1)}function qu(e,B){av(e,B);var t=bC(B.value),C=B.type;if(t!=null)C==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(C==="submit"||C==="reset"){e.removeAttribute("value");return}B.hasOwnProperty("value")?zu(e,B.type,t):B.hasOwnProperty("defaultValue")&&zu(e,B.type,bC(B.defaultValue)),B.checked==null&&B.defaultChecked!=null&&(e.defaultChecked=!!B.defaultChecked)}function k2(e,B,t){if(B.hasOwnProperty("value")||B.hasOwnProperty("defaultValue")){var C=B.type;if(!(C!=="submit"&&C!=="reset"||B.value!==void 0&&B.value!==null))return;B=""+e._wrapperState.initialValue,t||B===e.value||(e.value=B),e.defaultValue=B}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function zu(e,B,t){(B!=="number"||co(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Ci=Array.isArray;function Zn(e,B,t,C){if(e=e.options,B){B={};for(var n=0;n<t.length;n++)B["$"+t[n]]=!0;for(t=0;t<e.length;t++)n=B.hasOwnProperty("$"+e[t].value),e[t].selected!==n&&(e[t].selected=n),n&&C&&(e[t].defaultSelected=!0)}else{for(t=""+bC(t),B=null,n=0;n<e.length;n++){if(e[n].value===t){e[n].selected=!0,C&&(e[n].defaultSelected=!0);return}B!==null||e[n].disabled||(B=e[n])}B!==null&&(B.selected=!0)}}function _u(e,B){if(B.dangerouslySetInnerHTML!=null)throw Error(w(91));return EB({},B,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function T2(e,B){var t=B.value;if(t==null){if(t=B.children,B=B.defaultValue,t!=null){if(B!=null)throw Error(w(92));if(Ci(t)){if(1<t.length)throw Error(w(93));t=t[0]}B=t}B==null&&(B=""),t=B}e._wrapperState={initialValue:bC(t)}}function ov(e,B){var t=bC(B.value),C=bC(B.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),B.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),C!=null&&(e.defaultValue=""+C)}function M2(e){var B=e.textContent;B===e._wrapperState.initialValue&&B!==""&&B!==null&&(e.value=B)}function lv(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $u(e,B){return e==null||e==="http://www.w3.org/1999/xhtml"?lv(B):e==="http://www.w3.org/2000/svg"&&B==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $s,cv=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(B,t,C,n){MSApp.execUnsafeLocalFunction(function(){return e(B,t,C,n)})}:e}(function(e,B){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=B;else{for($s=$s||document.createElement("div"),$s.innerHTML="<svg>"+B.valueOf().toString()+"</svg>",B=$s.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;B.firstChild;)e.appendChild(B.firstChild)}});function Di(e,B){if(B){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=B;return}}e.textContent=B}var ai={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},j3=["Webkit","ms","Moz","O"];Object.keys(ai).forEach(function(e){j3.forEach(function(B){B=B+e.charAt(0).toUpperCase()+e.substring(1),ai[B]=ai[e]})});function uv(e,B,t){return B==null||typeof B=="boolean"||B===""?"":t||typeof B!="number"||B===0||ai.hasOwnProperty(e)&&ai[e]?(""+B).trim():B+"px"}function fv(e,B){e=e.style;for(var t in B)if(B.hasOwnProperty(t)){var C=t.indexOf("--")===0,n=uv(t,B[t],C);t==="float"&&(t="cssFloat"),C?e.setProperty(t,n):e[t]=n}}var Y3=EB({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bf(e,B){if(B){if(Y3[e]&&(B.children!=null||B.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(B.dangerouslySetInnerHTML!=null){if(B.children!=null)throw Error(w(60));if(typeof B.dangerouslySetInnerHTML!="object"||!("__html"in B.dangerouslySetInnerHTML))throw Error(w(61))}if(B.style!=null&&typeof B.style!="object")throw Error(w(62))}}function ef(e,B){if(e.indexOf("-")===-1)return typeof B.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tf=null;function r1(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cf=null,qn=null,zn=null;function L2(e){if(e=gs(e)){if(typeof Cf!="function")throw Error(w(280));var B=e.stateNode;B&&(B=wl(B),Cf(e.stateNode,e.type,B))}}function dv(e){qn?zn?zn.push(e):zn=[e]:qn=e}function hv(){if(qn){var e=qn,B=zn;if(zn=qn=null,L2(e),B)for(e=0;e<B.length;e++)L2(B[e])}}function pv(e,B){return e(B)}function mv(){}var Dc=!1;function gv(e,B,t){if(Dc)return e(B,t);Dc=!0;try{return pv(e,B,t)}finally{Dc=!1,(qn!==null||zn!==null)&&(mv(),hv())}}function Pi(e,B){var t=e.stateNode;if(t===null)return null;var C=wl(t);if(C===null)return null;t=C[B];B:switch(B){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(C=!C.disabled)||(e=e.type,C=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!C;break B;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(w(231,B,typeof t));return t}var nf=!1;if(Tt)try{var Gr={};Object.defineProperty(Gr,"passive",{get:function(){nf=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{nf=!1}function X3(e,B,t,C,n,r,i,s,a){var o=Array.prototype.slice.call(arguments,3);try{B.apply(t,o)}catch(l){this.onError(l)}}var oi=!1,uo=null,fo=!1,rf=null,Z3={onError:function(e){oi=!0,uo=e}};function q3(e,B,t,C,n,r,i,s,a){oi=!1,uo=null,X3.apply(Z3,arguments)}function z3(e,B,t,C,n,r,i,s,a){if(q3.apply(this,arguments),oi){if(oi){var o=uo;oi=!1,uo=null}else throw Error(w(198));fo||(fo=!0,rf=o)}}function vn(e){var B=e,t=e;if(e.alternate)for(;B.return;)B=B.return;else{e=B;do B=e,B.flags&4098&&(t=B.return),e=B.return;while(e)}return B.tag===3?t:null}function vv(e){if(e.tag===13){var B=e.memoizedState;if(B===null&&(e=e.alternate,e!==null&&(B=e.memoizedState)),B!==null)return B.dehydrated}return null}function x2(e){if(vn(e)!==e)throw Error(w(188))}function _3(e){var B=e.alternate;if(!B){if(B=vn(e),B===null)throw Error(w(188));return B!==e?null:e}for(var t=e,C=B;;){var n=t.return;if(n===null)break;var r=n.alternate;if(r===null){if(C=n.return,C!==null){t=C;continue}break}if(n.child===r.child){for(r=n.child;r;){if(r===t)return x2(n),e;if(r===C)return x2(n),B;r=r.sibling}throw Error(w(188))}if(t.return!==C.return)t=n,C=r;else{for(var i=!1,s=n.child;s;){if(s===t){i=!0,t=n,C=r;break}if(s===C){i=!0,C=n,t=r;break}s=s.sibling}if(!i){for(s=r.child;s;){if(s===t){i=!0,t=r,C=n;break}if(s===C){i=!0,C=r,t=n;break}s=s.sibling}if(!i)throw Error(w(189))}}if(t.alternate!==C)throw Error(w(190))}if(t.tag!==3)throw Error(w(188));return t.stateNode.current===t?e:B}function Av(e){return e=_3(e),e!==null?yv(e):null}function yv(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var B=yv(e);if(B!==null)return B;e=e.sibling}return null}var Ev=Re.unstable_scheduleCallback,H2=Re.unstable_cancelCallback,$3=Re.unstable_shouldYield,BP=Re.unstable_requestPaint,PB=Re.unstable_now,eP=Re.unstable_getCurrentPriorityLevel,i1=Re.unstable_ImmediatePriority,Sv=Re.unstable_UserBlockingPriority,ho=Re.unstable_NormalPriority,tP=Re.unstable_LowPriority,Iv=Re.unstable_IdlePriority,El=null,ut=null;function CP(e){if(ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(El,e,void 0,(e.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:iP,nP=Math.log,rP=Math.LN2;function iP(e){return e>>>=0,e===0?32:31-(nP(e)/rP|0)|0}var Ba=64,ea=4194304;function ni(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function po(e,B){var t=e.pendingLanes;if(t===0)return 0;var C=0,n=e.suspendedLanes,r=e.pingedLanes,i=t&268435455;if(i!==0){var s=i&~n;s!==0?C=ni(s):(r&=i,r!==0&&(C=ni(r)))}else i=t&~n,i!==0?C=ni(i):r!==0&&(C=ni(r));if(C===0)return 0;if(B!==0&&B!==C&&!(B&n)&&(n=C&-C,r=B&-B,n>=r||n===16&&(r&4194240)!==0))return B;if(C&4&&(C|=t&16),B=e.entangledLanes,B!==0)for(e=e.entanglements,B&=C;0<B;)t=31-Bt(B),n=1<<t,C|=e[t],B&=~n;return C}function sP(e,B){switch(e){case 1:case 2:case 4:return B+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return B+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function aP(e,B){for(var t=e.suspendedLanes,C=e.pingedLanes,n=e.expirationTimes,r=e.pendingLanes;0<r;){var i=31-Bt(r),s=1<<i,a=n[i];a===-1?(!(s&t)||s&C)&&(n[i]=sP(s,B)):a<=B&&(e.expiredLanes|=s),r&=~s}}function sf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bv(){var e=Ba;return Ba<<=1,!(Ba&4194240)&&(Ba=64),e}function Pc(e){for(var B=[],t=0;31>t;t++)B.push(e);return B}function ps(e,B,t){e.pendingLanes|=B,B!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,B=31-Bt(B),e[B]=t}function oP(e,B){var t=e.pendingLanes&~B;e.pendingLanes=B,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=B,e.mutableReadLanes&=B,e.entangledLanes&=B,B=e.entanglements;var C=e.eventTimes;for(e=e.expirationTimes;0<t;){var n=31-Bt(t),r=1<<n;B[n]=0,C[n]=-1,e[n]=-1,t&=~r}}function s1(e,B){var t=e.entangledLanes|=B;for(e=e.entanglements;t;){var C=31-Bt(t),n=1<<C;n&B|e[C]&B&&(e[C]|=B),t&=~n}}var CB=0;function wv(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Dv,a1,Pv,Rv,Nv,af=!1,ta=[],lC=null,cC=null,uC=null,Ri=new Map,Ni=new Map,BC=[],lP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function G2(e,B){switch(e){case"focusin":case"focusout":lC=null;break;case"dragenter":case"dragleave":cC=null;break;case"mouseover":case"mouseout":uC=null;break;case"pointerover":case"pointerout":Ri.delete(B.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ni.delete(B.pointerId)}}function Kr(e,B,t,C,n,r){return e===null||e.nativeEvent!==r?(e={blockedOn:B,domEventName:t,eventSystemFlags:C,nativeEvent:r,targetContainers:[n]},B!==null&&(B=gs(B),B!==null&&a1(B)),e):(e.eventSystemFlags|=C,B=e.targetContainers,n!==null&&B.indexOf(n)===-1&&B.push(n),e)}function cP(e,B,t,C,n){switch(B){case"focusin":return lC=Kr(lC,e,B,t,C,n),!0;case"dragenter":return cC=Kr(cC,e,B,t,C,n),!0;case"mouseover":return uC=Kr(uC,e,B,t,C,n),!0;case"pointerover":var r=n.pointerId;return Ri.set(r,Kr(Ri.get(r)||null,e,B,t,C,n)),!0;case"gotpointercapture":return r=n.pointerId,Ni.set(r,Kr(Ni.get(r)||null,e,B,t,C,n)),!0}return!1}function Fv(e){var B=QC(e.target);if(B!==null){var t=vn(B);if(t!==null){if(B=t.tag,B===13){if(B=vv(t),B!==null){e.blockedOn=B,Nv(e.priority,function(){Pv(t)});return}}else if(B===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Va(e){if(e.blockedOn!==null)return!1;for(var B=e.targetContainers;0<B.length;){var t=of(e.domEventName,e.eventSystemFlags,B[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var C=new t.constructor(t.type,t);tf=C,t.target.dispatchEvent(C),tf=null}else return B=gs(t),B!==null&&a1(B),e.blockedOn=t,!1;B.shift()}return!0}function K2(e,B,t){Va(e)&&t.delete(B)}function uP(){af=!1,lC!==null&&Va(lC)&&(lC=null),cC!==null&&Va(cC)&&(cC=null),uC!==null&&Va(uC)&&(uC=null),Ri.forEach(K2),Ni.forEach(K2)}function Ur(e,B){e.blockedOn===B&&(e.blockedOn=null,af||(af=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,uP)))}function Fi(e){function B(n){return Ur(n,e)}if(0<ta.length){Ur(ta[0],e);for(var t=1;t<ta.length;t++){var C=ta[t];C.blockedOn===e&&(C.blockedOn=null)}}for(lC!==null&&Ur(lC,e),cC!==null&&Ur(cC,e),uC!==null&&Ur(uC,e),Ri.forEach(B),Ni.forEach(B),t=0;t<BC.length;t++)C=BC[t],C.blockedOn===e&&(C.blockedOn=null);for(;0<BC.length&&(t=BC[0],t.blockedOn===null);)Fv(t),t.blockedOn===null&&BC.shift()}var _n=Jt.ReactCurrentBatchConfig,mo=!0;function fP(e,B,t,C){var n=CB,r=_n.transition;_n.transition=null;try{CB=1,o1(e,B,t,C)}finally{CB=n,_n.transition=r}}function dP(e,B,t,C){var n=CB,r=_n.transition;_n.transition=null;try{CB=4,o1(e,B,t,C)}finally{CB=n,_n.transition=r}}function o1(e,B,t,C){if(mo){var n=of(e,B,t,C);if(n===null)Hc(e,B,C,go,t),G2(e,C);else if(cP(n,e,B,t,C))C.stopPropagation();else if(G2(e,C),B&4&&-1<lP.indexOf(e)){for(;n!==null;){var r=gs(n);if(r!==null&&Dv(r),r=of(e,B,t,C),r===null&&Hc(e,B,C,go,t),r===n)break;n=r}n!==null&&C.stopPropagation()}else Hc(e,B,C,null,t)}}var go=null;function of(e,B,t,C){if(go=null,e=r1(C),e=QC(e),e!==null)if(B=vn(e),B===null)e=null;else if(t=B.tag,t===13){if(e=vv(B),e!==null)return e;e=null}else if(t===3){if(B.stateNode.current.memoizedState.isDehydrated)return B.tag===3?B.stateNode.containerInfo:null;e=null}else B!==e&&(e=null);return go=e,null}function Ov(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(eP()){case i1:return 1;case Sv:return 4;case ho:case tP:return 16;case Iv:return 536870912;default:return 16}default:return 16}}var iC=null,l1=null,Wa=null;function kv(){if(Wa)return Wa;var e,B=l1,t=B.length,C,n="value"in iC?iC.value:iC.textContent,r=n.length;for(e=0;e<t&&B[e]===n[e];e++);var i=t-e;for(C=1;C<=i&&B[t-C]===n[r-C];C++);return Wa=n.slice(e,1<C?1-C:void 0)}function ja(e){var B=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&B===13&&(e=13)):e=B,e===10&&(e=13),32<=e||e===13?e:0}function Ca(){return!0}function U2(){return!1}function Fe(e){function B(t,C,n,r,i){this._reactName=t,this._targetInst=n,this.type=C,this.nativeEvent=r,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(r):r[s]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Ca:U2,this.isPropagationStopped=U2,this}return EB(B.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ca)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ca)},persist:function(){},isPersistent:Ca}),B}var br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},c1=Fe(br),ms=EB({},br,{view:0,detail:0}),hP=Fe(ms),Rc,Nc,Qr,Sl=EB({},ms,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:u1,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qr&&(Qr&&e.type==="mousemove"?(Rc=e.screenX-Qr.screenX,Nc=e.screenY-Qr.screenY):Nc=Rc=0,Qr=e),Rc)},movementY:function(e){return"movementY"in e?e.movementY:Nc}}),Q2=Fe(Sl),pP=EB({},Sl,{dataTransfer:0}),mP=Fe(pP),gP=EB({},ms,{relatedTarget:0}),Fc=Fe(gP),vP=EB({},br,{animationName:0,elapsedTime:0,pseudoElement:0}),AP=Fe(vP),yP=EB({},br,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),EP=Fe(yP),SP=EB({},br,{data:0}),J2=Fe(SP),IP={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function DP(e){var B=this.nativeEvent;return B.getModifierState?B.getModifierState(e):(e=wP[e])?!!B[e]:!1}function u1(){return DP}var PP=EB({},ms,{key:function(e){if(e.key){var B=IP[e.key]||e.key;if(B!=="Unidentified")return B}return e.type==="keypress"?(e=ja(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bP[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:u1,charCode:function(e){return e.type==="keypress"?ja(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ja(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),RP=Fe(PP),NP=EB({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),V2=Fe(NP),FP=EB({},ms,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:u1}),OP=Fe(FP),kP=EB({},br,{propertyName:0,elapsedTime:0,pseudoElement:0}),TP=Fe(kP),MP=EB({},Sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),LP=Fe(MP),xP=[9,13,27,32],f1=Tt&&"CompositionEvent"in window,li=null;Tt&&"documentMode"in document&&(li=document.documentMode);var HP=Tt&&"TextEvent"in window&&!li,Tv=Tt&&(!f1||li&&8<li&&11>=li),W2=String.fromCharCode(32),j2=!1;function Mv(e,B){switch(e){case"keyup":return xP.indexOf(B.keyCode)!==-1;case"keydown":return B.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mn=!1;function GP(e,B){switch(e){case"compositionend":return Lv(B);case"keypress":return B.which!==32?null:(j2=!0,W2);case"textInput":return e=B.data,e===W2&&j2?null:e;default:return null}}function KP(e,B){if(Mn)return e==="compositionend"||!f1&&Mv(e,B)?(e=kv(),Wa=l1=iC=null,Mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(B.ctrlKey||B.altKey||B.metaKey)||B.ctrlKey&&B.altKey){if(B.char&&1<B.char.length)return B.char;if(B.which)return String.fromCharCode(B.which)}return null;case"compositionend":return Tv&&B.locale!=="ko"?null:B.data;default:return null}}var UP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Y2(e){var B=e&&e.nodeName&&e.nodeName.toLowerCase();return B==="input"?!!UP[e.type]:B==="textarea"}function xv(e,B,t,C){dv(C),B=vo(B,"onChange"),0<B.length&&(t=new c1("onChange","change",null,t,C),e.push({event:t,listeners:B}))}var ci=null,Oi=null;function QP(e){Xv(e,0)}function Il(e){var B=Hn(e);if(sv(B))return e}function JP(e,B){if(e==="change")return B}var Hv=!1;if(Tt){var Oc;if(Tt){var kc="oninput"in document;if(!kc){var X2=document.createElement("div");X2.setAttribute("oninput","return;"),kc=typeof X2.oninput=="function"}Oc=kc}else Oc=!1;Hv=Oc&&(!document.documentMode||9<document.documentMode)}function Z2(){ci&&(ci.detachEvent("onpropertychange",Gv),Oi=ci=null)}function Gv(e){if(e.propertyName==="value"&&Il(Oi)){var B=[];xv(B,Oi,e,r1(e)),gv(QP,B)}}function VP(e,B,t){e==="focusin"?(Z2(),ci=B,Oi=t,ci.attachEvent("onpropertychange",Gv)):e==="focusout"&&Z2()}function WP(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Il(Oi)}function jP(e,B){if(e==="click")return Il(B)}function YP(e,B){if(e==="input"||e==="change")return Il(B)}function XP(e,B){return e===B&&(e!==0||1/e===1/B)||e!==e&&B!==B}var Ct=typeof Object.is=="function"?Object.is:XP;function ki(e,B){if(Ct(e,B))return!0;if(typeof e!="object"||e===null||typeof B!="object"||B===null)return!1;var t=Object.keys(e),C=Object.keys(B);if(t.length!==C.length)return!1;for(C=0;C<t.length;C++){var n=t[C];if(!Vu.call(B,n)||!Ct(e[n],B[n]))return!1}return!0}function q2(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function z2(e,B){var t=q2(e);e=0;for(var C;t;){if(t.nodeType===3){if(C=e+t.textContent.length,e<=B&&C>=B)return{node:t,offset:B-e};e=C}B:{for(;t;){if(t.nextSibling){t=t.nextSibling;break B}t=t.parentNode}t=void 0}t=q2(t)}}function Kv(e,B){return e&&B?e===B?!0:e&&e.nodeType===3?!1:B&&B.nodeType===3?Kv(e,B.parentNode):"contains"in e?e.contains(B):e.compareDocumentPosition?!!(e.compareDocumentPosition(B)&16):!1:!1}function Uv(){for(var e=window,B=co();B instanceof e.HTMLIFrameElement;){try{var t=typeof B.contentWindow.location.href=="string"}catch{t=!1}if(t)e=B.contentWindow;else break;B=co(e.document)}return B}function d1(e){var B=e&&e.nodeName&&e.nodeName.toLowerCase();return B&&(B==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||B==="textarea"||e.contentEditable==="true")}function ZP(e){var B=Uv(),t=e.focusedElem,C=e.selectionRange;if(B!==t&&t&&t.ownerDocument&&Kv(t.ownerDocument.documentElement,t)){if(C!==null&&d1(t)){if(B=C.start,e=C.end,e===void 0&&(e=B),"selectionStart"in t)t.selectionStart=B,t.selectionEnd=Math.min(e,t.value.length);else if(e=(B=t.ownerDocument||document)&&B.defaultView||window,e.getSelection){e=e.getSelection();var n=t.textContent.length,r=Math.min(C.start,n);C=C.end===void 0?r:Math.min(C.end,n),!e.extend&&r>C&&(n=C,C=r,r=n),n=z2(t,r);var i=z2(t,C);n&&i&&(e.rangeCount!==1||e.anchorNode!==n.node||e.anchorOffset!==n.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(B=B.createRange(),B.setStart(n.node,n.offset),e.removeAllRanges(),r>C?(e.addRange(B),e.extend(i.node,i.offset)):(B.setEnd(i.node,i.offset),e.addRange(B)))}}for(B=[],e=t;e=e.parentNode;)e.nodeType===1&&B.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<B.length;t++)e=B[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var qP=Tt&&"documentMode"in document&&11>=document.documentMode,Ln=null,lf=null,ui=null,cf=!1;function _2(e,B,t){var C=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;cf||Ln==null||Ln!==co(C)||(C=Ln,"selectionStart"in C&&d1(C)?C={start:C.selectionStart,end:C.selectionEnd}:(C=(C.ownerDocument&&C.ownerDocument.defaultView||window).getSelection(),C={anchorNode:C.anchorNode,anchorOffset:C.anchorOffset,focusNode:C.focusNode,focusOffset:C.focusOffset}),ui&&ki(ui,C)||(ui=C,C=vo(lf,"onSelect"),0<C.length&&(B=new c1("onSelect","select",null,B,t),e.push({event:B,listeners:C}),B.target=Ln)))}function na(e,B){var t={};return t[e.toLowerCase()]=B.toLowerCase(),t["Webkit"+e]="webkit"+B,t["Moz"+e]="moz"+B,t}var xn={animationend:na("Animation","AnimationEnd"),animationiteration:na("Animation","AnimationIteration"),animationstart:na("Animation","AnimationStart"),transitionend:na("Transition","TransitionEnd")},Tc={},Qv={};Tt&&(Qv=document.createElement("div").style,"AnimationEvent"in window||(delete xn.animationend.animation,delete xn.animationiteration.animation,delete xn.animationstart.animation),"TransitionEvent"in window||delete xn.transitionend.transition);function bl(e){if(Tc[e])return Tc[e];if(!xn[e])return e;var B=xn[e],t;for(t in B)if(B.hasOwnProperty(t)&&t in Qv)return Tc[e]=B[t];return e}var Jv=bl("animationend"),Vv=bl("animationiteration"),Wv=bl("animationstart"),jv=bl("transitionend"),Yv=new Map,$2="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function TC(e,B){Yv.set(e,B),gn(B,[e])}for(var Mc=0;Mc<$2.length;Mc++){var Lc=$2[Mc],zP=Lc.toLowerCase(),_P=Lc[0].toUpperCase()+Lc.slice(1);TC(zP,"on"+_P)}TC(Jv,"onAnimationEnd");TC(Vv,"onAnimationIteration");TC(Wv,"onAnimationStart");TC("dblclick","onDoubleClick");TC("focusin","onFocus");TC("focusout","onBlur");TC(jv,"onTransitionEnd");ar("onMouseEnter",["mouseout","mouseover"]);ar("onMouseLeave",["mouseout","mouseover"]);ar("onPointerEnter",["pointerout","pointerover"]);ar("onPointerLeave",["pointerout","pointerover"]);gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ri="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$P=new Set("cancel close invalid load scroll toggle".split(" ").concat(ri));function Bp(e,B,t){var C=e.type||"unknown-event";e.currentTarget=t,z3(C,B,void 0,e),e.currentTarget=null}function Xv(e,B){B=(B&4)!==0;for(var t=0;t<e.length;t++){var C=e[t],n=C.event;C=C.listeners;B:{var r=void 0;if(B)for(var i=C.length-1;0<=i;i--){var s=C[i],a=s.instance,o=s.currentTarget;if(s=s.listener,a!==r&&n.isPropagationStopped())break B;Bp(n,s,o),r=a}else for(i=0;i<C.length;i++){if(s=C[i],a=s.instance,o=s.currentTarget,s=s.listener,a!==r&&n.isPropagationStopped())break B;Bp(n,s,o),r=a}}}if(fo)throw e=rf,fo=!1,rf=null,e}function uB(e,B){var t=B[pf];t===void 0&&(t=B[pf]=new Set);var C=e+"__bubble";t.has(C)||(Zv(B,e,2,!1),t.add(C))}function xc(e,B,t){var C=0;B&&(C|=4),Zv(t,e,C,B)}var ra="_reactListening"+Math.random().toString(36).slice(2);function Ti(e){if(!e[ra]){e[ra]=!0,tv.forEach(function(t){t!=="selectionchange"&&($P.has(t)||xc(t,!1,e),xc(t,!0,e))});var B=e.nodeType===9?e:e.ownerDocument;B===null||B[ra]||(B[ra]=!0,xc("selectionchange",!1,B))}}function Zv(e,B,t,C){switch(Ov(B)){case 1:var n=fP;break;case 4:n=dP;break;default:n=o1}t=n.bind(null,B,t,e),n=void 0,!nf||B!=="touchstart"&&B!=="touchmove"&&B!=="wheel"||(n=!0),C?n!==void 0?e.addEventListener(B,t,{capture:!0,passive:n}):e.addEventListener(B,t,!0):n!==void 0?e.addEventListener(B,t,{passive:n}):e.addEventListener(B,t,!1)}function Hc(e,B,t,C,n){var r=C;if(!(B&1)&&!(B&2)&&C!==null)B:for(;;){if(C===null)return;var i=C.tag;if(i===3||i===4){var s=C.stateNode.containerInfo;if(s===n||s.nodeType===8&&s.parentNode===n)break;if(i===4)for(i=C.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===n||a.nodeType===8&&a.parentNode===n))return;i=i.return}for(;s!==null;){if(i=QC(s),i===null)return;if(a=i.tag,a===5||a===6){C=r=i;continue B}s=s.parentNode}}C=C.return}gv(function(){var o=r,l=r1(t),c=[];B:{var u=Yv.get(e);if(u!==void 0){var g=c1,f=e;switch(e){case"keypress":if(ja(t)===0)break B;case"keydown":case"keyup":g=RP;break;case"focusin":f="focus",g=Fc;break;case"focusout":f="blur",g=Fc;break;case"beforeblur":case"afterblur":g=Fc;break;case"click":if(t.button===2)break B;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Q2;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=mP;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=OP;break;case Jv:case Vv:case Wv:g=AP;break;case jv:g=TP;break;case"scroll":g=hP;break;case"wheel":g=LP;break;case"copy":case"cut":case"paste":g=EP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=V2}var m=(B&4)!==0,p=!m&&e==="scroll",d=m?u!==null?u+"Capture":null:u;m=[];for(var h=o,v;h!==null;){v=h;var A=v.stateNode;if(v.tag===5&&A!==null&&(v=A,d!==null&&(A=Pi(h,d),A!=null&&m.push(Mi(h,A,v)))),p)break;h=h.return}0<m.length&&(u=new g(u,f,null,t,l),c.push({event:u,listeners:m}))}}if(!(B&7)){B:{if(u=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",u&&t!==tf&&(f=t.relatedTarget||t.fromElement)&&(QC(f)||f[Mt]))break B;if((g||u)&&(u=l.window===l?l:(u=l.ownerDocument)?u.defaultView||u.parentWindow:window,g?(f=t.relatedTarget||t.toElement,g=o,f=f?QC(f):null,f!==null&&(p=vn(f),f!==p||f.tag!==5&&f.tag!==6)&&(f=null)):(g=null,f=o),g!==f)){if(m=Q2,A="onMouseLeave",d="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(m=V2,A="onPointerLeave",d="onPointerEnter",h="pointer"),p=g==null?u:Hn(g),v=f==null?u:Hn(f),u=new m(A,h+"leave",g,t,l),u.target=p,u.relatedTarget=v,A=null,QC(l)===o&&(m=new m(d,h+"enter",f,t,l),m.target=v,m.relatedTarget=p,A=m),p=A,g&&f)e:{for(m=g,d=f,h=0,v=m;v;v=Dn(v))h++;for(v=0,A=d;A;A=Dn(A))v++;for(;0<h-v;)m=Dn(m),h--;for(;0<v-h;)d=Dn(d),v--;for(;h--;){if(m===d||d!==null&&m===d.alternate)break e;m=Dn(m),d=Dn(d)}m=null}else m=null;g!==null&&ep(c,u,g,m,!1),f!==null&&p!==null&&ep(c,p,f,m,!0)}}B:{if(u=o?Hn(o):window,g=u.nodeName&&u.nodeName.toLowerCase(),g==="select"||g==="input"&&u.type==="file")var E=JP;else if(Y2(u))if(Hv)E=YP;else{E=WP;var D=VP}else(g=u.nodeName)&&g.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(E=jP);if(E&&(E=E(e,o))){xv(c,E,t,l);break B}D&&D(e,u,o),e==="focusout"&&(D=u._wrapperState)&&D.controlled&&u.type==="number"&&zu(u,"number",u.value)}switch(D=o?Hn(o):window,e){case"focusin":(Y2(D)||D.contentEditable==="true")&&(Ln=D,lf=o,ui=null);break;case"focusout":ui=lf=Ln=null;break;case"mousedown":cf=!0;break;case"contextmenu":case"mouseup":case"dragend":cf=!1,_2(c,t,l);break;case"selectionchange":if(qP)break;case"keydown":case"keyup":_2(c,t,l)}var I;if(f1)B:{switch(e){case"compositionstart":var y="onCompositionStart";break B;case"compositionend":y="onCompositionEnd";break B;case"compositionupdate":y="onCompositionUpdate";break B}y=void 0}else Mn?Mv(e,t)&&(y="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(y="onCompositionStart");y&&(Tv&&t.locale!=="ko"&&(Mn||y!=="onCompositionStart"?y==="onCompositionEnd"&&Mn&&(I=kv()):(iC=l,l1="value"in iC?iC.value:iC.textContent,Mn=!0)),D=vo(o,y),0<D.length&&(y=new J2(y,e,null,t,l),c.push({event:y,listeners:D}),I?y.data=I:(I=Lv(t),I!==null&&(y.data=I)))),(I=HP?GP(e,t):KP(e,t))&&(o=vo(o,"onBeforeInput"),0<o.length&&(l=new J2("onBeforeInput","beforeinput",null,t,l),c.push({event:l,listeners:o}),l.data=I))}Xv(c,B)})}function Mi(e,B,t){return{instance:e,listener:B,currentTarget:t}}function vo(e,B){for(var t=B+"Capture",C=[];e!==null;){var n=e,r=n.stateNode;n.tag===5&&r!==null&&(n=r,r=Pi(e,t),r!=null&&C.unshift(Mi(e,r,n)),r=Pi(e,B),r!=null&&C.push(Mi(e,r,n))),e=e.return}return C}function Dn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ep(e,B,t,C,n){for(var r=B._reactName,i=[];t!==null&&t!==C;){var s=t,a=s.alternate,o=s.stateNode;if(a!==null&&a===C)break;s.tag===5&&o!==null&&(s=o,n?(a=Pi(t,r),a!=null&&i.unshift(Mi(t,a,s))):n||(a=Pi(t,r),a!=null&&i.push(Mi(t,a,s)))),t=t.return}i.length!==0&&e.push({event:B,listeners:i})}var BR=/\r\n?/g,eR=/\u0000|\uFFFD/g;function tp(e){return(typeof e=="string"?e:""+e).replace(BR,`
`).replace(eR,"")}function ia(e,B,t){if(B=tp(B),tp(e)!==B&&t)throw Error(w(425))}function Ao(){}var uf=null,ff=null;function df(e,B){return e==="textarea"||e==="noscript"||typeof B.children=="string"||typeof B.children=="number"||typeof B.dangerouslySetInnerHTML=="object"&&B.dangerouslySetInnerHTML!==null&&B.dangerouslySetInnerHTML.__html!=null}var hf=typeof setTimeout=="function"?setTimeout:void 0,tR=typeof clearTimeout=="function"?clearTimeout:void 0,Cp=typeof Promise=="function"?Promise:void 0,CR=typeof queueMicrotask=="function"?queueMicrotask:typeof Cp<"u"?function(e){return Cp.resolve(null).then(e).catch(nR)}:hf;function nR(e){setTimeout(function(){throw e})}function Gc(e,B){var t=B,C=0;do{var n=t.nextSibling;if(e.removeChild(t),n&&n.nodeType===8)if(t=n.data,t==="/$"){if(C===0){e.removeChild(n),Fi(B);return}C--}else t!=="$"&&t!=="$?"&&t!=="$!"||C++;t=n}while(t);Fi(B)}function fC(e){for(;e!=null;e=e.nextSibling){var B=e.nodeType;if(B===1||B===3)break;if(B===8){if(B=e.data,B==="$"||B==="$!"||B==="$?")break;if(B==="/$")return null}}return e}function np(e){e=e.previousSibling;for(var B=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(B===0)return e;B--}else t==="/$"&&B++}e=e.previousSibling}return null}var wr=Math.random().toString(36).slice(2),lt="__reactFiber$"+wr,Li="__reactProps$"+wr,Mt="__reactContainer$"+wr,pf="__reactEvents$"+wr,rR="__reactListeners$"+wr,iR="__reactHandles$"+wr;function QC(e){var B=e[lt];if(B)return B;for(var t=e.parentNode;t;){if(B=t[Mt]||t[lt]){if(t=B.alternate,B.child!==null||t!==null&&t.child!==null)for(e=np(e);e!==null;){if(t=e[lt])return t;e=np(e)}return B}e=t,t=e.parentNode}return null}function gs(e){return e=e[lt]||e[Mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Hn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function wl(e){return e[Li]||null}var mf=[],Gn=-1;function MC(e){return{current:e}}function hB(e){0>Gn||(e.current=mf[Gn],mf[Gn]=null,Gn--)}function oB(e,B){Gn++,mf[Gn]=e.current,e.current=B}var wC={},$B=MC(wC),pe=MC(!1),tn=wC;function or(e,B){var t=e.type.contextTypes;if(!t)return wC;var C=e.stateNode;if(C&&C.__reactInternalMemoizedUnmaskedChildContext===B)return C.__reactInternalMemoizedMaskedChildContext;var n={},r;for(r in t)n[r]=B[r];return C&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=B,e.__reactInternalMemoizedMaskedChildContext=n),n}function me(e){return e=e.childContextTypes,e!=null}function yo(){hB(pe),hB($B)}function rp(e,B,t){if($B.current!==wC)throw Error(w(168));oB($B,B),oB(pe,t)}function qv(e,B,t){var C=e.stateNode;if(B=B.childContextTypes,typeof C.getChildContext!="function")return t;C=C.getChildContext();for(var n in C)if(!(n in B))throw Error(w(108,V3(e)||"Unknown",n));return EB({},t,C)}function Eo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wC,tn=$B.current,oB($B,e),oB(pe,pe.current),!0}function ip(e,B,t){var C=e.stateNode;if(!C)throw Error(w(169));t?(e=qv(e,B,tn),C.__reactInternalMemoizedMergedChildContext=e,hB(pe),hB($B),oB($B,e)):hB(pe),oB(pe,t)}var It=null,Dl=!1,Kc=!1;function zv(e){It===null?It=[e]:It.push(e)}function sR(e){Dl=!0,zv(e)}function LC(){if(!Kc&&It!==null){Kc=!0;var e=0,B=CB;try{var t=It;for(CB=1;e<t.length;e++){var C=t[e];do C=C(!0);while(C!==null)}It=null,Dl=!1}catch(n){throw It!==null&&(It=It.slice(e+1)),Ev(i1,LC),n}finally{CB=B,Kc=!1}}return null}var Kn=[],Un=0,So=null,Io=0,Me=[],Le=0,Cn=null,wt=1,Dt="";function HC(e,B){Kn[Un++]=Io,Kn[Un++]=So,So=e,Io=B}function _v(e,B,t){Me[Le++]=wt,Me[Le++]=Dt,Me[Le++]=Cn,Cn=e;var C=wt;e=Dt;var n=32-Bt(C)-1;C&=~(1<<n),t+=1;var r=32-Bt(B)+n;if(30<r){var i=n-n%5;r=(C&(1<<i)-1).toString(32),C>>=i,n-=i,wt=1<<32-Bt(B)+n|t<<n|C,Dt=r+e}else wt=1<<r|t<<n|C,Dt=e}function h1(e){e.return!==null&&(HC(e,1),_v(e,1,0))}function p1(e){for(;e===So;)So=Kn[--Un],Kn[Un]=null,Io=Kn[--Un],Kn[Un]=null;for(;e===Cn;)Cn=Me[--Le],Me[Le]=null,Dt=Me[--Le],Me[Le]=null,wt=Me[--Le],Me[Le]=null}var we=null,be=null,mB=!1,Xe=null;function $v(e,B){var t=He(5,null,null,0);t.elementType="DELETED",t.stateNode=B,t.return=e,B=e.deletions,B===null?(e.deletions=[t],e.flags|=16):B.push(t)}function sp(e,B){switch(e.tag){case 5:var t=e.type;return B=B.nodeType!==1||t.toLowerCase()!==B.nodeName.toLowerCase()?null:B,B!==null?(e.stateNode=B,we=e,be=fC(B.firstChild),!0):!1;case 6:return B=e.pendingProps===""||B.nodeType!==3?null:B,B!==null?(e.stateNode=B,we=e,be=null,!0):!1;case 13:return B=B.nodeType!==8?null:B,B!==null?(t=Cn!==null?{id:wt,overflow:Dt}:null,e.memoizedState={dehydrated:B,treeContext:t,retryLane:1073741824},t=He(18,null,null,0),t.stateNode=B,t.return=e,e.child=t,we=e,be=null,!0):!1;default:return!1}}function gf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function vf(e){if(mB){var B=be;if(B){var t=B;if(!sp(e,B)){if(gf(e))throw Error(w(418));B=fC(t.nextSibling);var C=we;B&&sp(e,B)?$v(C,t):(e.flags=e.flags&-4097|2,mB=!1,we=e)}}else{if(gf(e))throw Error(w(418));e.flags=e.flags&-4097|2,mB=!1,we=e}}}function ap(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function sa(e){if(e!==we)return!1;if(!mB)return ap(e),mB=!0,!1;var B;if((B=e.tag!==3)&&!(B=e.tag!==5)&&(B=e.type,B=B!=="head"&&B!=="body"&&!df(e.type,e.memoizedProps)),B&&(B=be)){if(gf(e))throw BA(),Error(w(418));for(;B;)$v(e,B),B=fC(B.nextSibling)}if(ap(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));B:{for(e=e.nextSibling,B=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(B===0){be=fC(e.nextSibling);break B}B--}else t!=="$"&&t!=="$!"&&t!=="$?"||B++}e=e.nextSibling}be=null}}else be=we?fC(e.stateNode.nextSibling):null;return!0}function BA(){for(var e=be;e;)e=fC(e.nextSibling)}function lr(){be=we=null,mB=!1}function m1(e){Xe===null?Xe=[e]:Xe.push(e)}var aR=Jt.ReactCurrentBatchConfig;function je(e,B){if(e&&e.defaultProps){B=EB({},B),e=e.defaultProps;for(var t in e)B[t]===void 0&&(B[t]=e[t]);return B}return B}var bo=MC(null),wo=null,Qn=null,g1=null;function v1(){g1=Qn=wo=null}function A1(e){var B=bo.current;hB(bo),e._currentValue=B}function Af(e,B,t){for(;e!==null;){var C=e.alternate;if((e.childLanes&B)!==B?(e.childLanes|=B,C!==null&&(C.childLanes|=B)):C!==null&&(C.childLanes&B)!==B&&(C.childLanes|=B),e===t)break;e=e.return}}function $n(e,B){wo=e,g1=Qn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&B&&(de=!0),e.firstContext=null)}function Ue(e){var B=e._currentValue;if(g1!==e)if(e={context:e,memoizedValue:B,next:null},Qn===null){if(wo===null)throw Error(w(308));Qn=e,wo.dependencies={lanes:0,firstContext:e}}else Qn=Qn.next=e;return B}var JC=null;function y1(e){JC===null?JC=[e]:JC.push(e)}function eA(e,B,t,C){var n=B.interleaved;return n===null?(t.next=t,y1(B)):(t.next=n.next,n.next=t),B.interleaved=t,Lt(e,C)}function Lt(e,B){e.lanes|=B;var t=e.alternate;for(t!==null&&(t.lanes|=B),t=e,e=e.return;e!==null;)e.childLanes|=B,t=e.alternate,t!==null&&(t.childLanes|=B),t=e,e=e.return;return t.tag===3?t.stateNode:null}var $t=!1;function E1(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tA(e,B){e=e.updateQueue,B.updateQueue===e&&(B.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ft(e,B){return{eventTime:e,lane:B,tag:0,payload:null,callback:null,next:null}}function dC(e,B,t){var C=e.updateQueue;if(C===null)return null;if(C=C.shared,_&2){var n=C.pending;return n===null?B.next=B:(B.next=n.next,n.next=B),C.pending=B,Lt(e,t)}return n=C.interleaved,n===null?(B.next=B,y1(C)):(B.next=n.next,n.next=B),C.interleaved=B,Lt(e,t)}function Ya(e,B,t){if(B=B.updateQueue,B!==null&&(B=B.shared,(t&4194240)!==0)){var C=B.lanes;C&=e.pendingLanes,t|=C,B.lanes=t,s1(e,t)}}function op(e,B){var t=e.updateQueue,C=e.alternate;if(C!==null&&(C=C.updateQueue,t===C)){var n=null,r=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};r===null?n=r=i:r=r.next=i,t=t.next}while(t!==null);r===null?n=r=B:r=r.next=B}else n=r=B;t={baseState:C.baseState,firstBaseUpdate:n,lastBaseUpdate:r,shared:C.shared,effects:C.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=B:e.next=B,t.lastBaseUpdate=B}function Do(e,B,t,C){var n=e.updateQueue;$t=!1;var r=n.firstBaseUpdate,i=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var a=s,o=a.next;a.next=null,i===null?r=o:i.next=o,i=a;var l=e.alternate;l!==null&&(l=l.updateQueue,s=l.lastBaseUpdate,s!==i&&(s===null?l.firstBaseUpdate=o:s.next=o,l.lastBaseUpdate=a))}if(r!==null){var c=n.baseState;i=0,l=o=a=null,s=r;do{var u=s.lane,g=s.eventTime;if((C&u)===u){l!==null&&(l=l.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});B:{var f=e,m=s;switch(u=B,g=t,m.tag){case 1:if(f=m.payload,typeof f=="function"){c=f.call(g,c,u);break B}c=f;break B;case 3:f.flags=f.flags&-65537|128;case 0:if(f=m.payload,u=typeof f=="function"?f.call(g,c,u):f,u==null)break B;c=EB({},c,u);break B;case 2:$t=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,u=n.effects,u===null?n.effects=[s]:u.push(s))}else g={eventTime:g,lane:u,tag:s.tag,payload:s.payload,callback:s.callback,next:null},l===null?(o=l=g,a=c):l=l.next=g,i|=u;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;u=s,s=u.next,u.next=null,n.lastBaseUpdate=u,n.shared.pending=null}}while(1);if(l===null&&(a=c),n.baseState=a,n.firstBaseUpdate=o,n.lastBaseUpdate=l,B=n.shared.interleaved,B!==null){n=B;do i|=n.lane,n=n.next;while(n!==B)}else r===null&&(n.shared.lanes=0);rn|=i,e.lanes=i,e.memoizedState=c}}function lp(e,B,t){if(e=B.effects,B.effects=null,e!==null)for(B=0;B<e.length;B++){var C=e[B],n=C.callback;if(n!==null){if(C.callback=null,C=t,typeof n!="function")throw Error(w(191,n));n.call(C)}}}var CA=new ev.Component().refs;function yf(e,B,t,C){B=e.memoizedState,t=t(C,B),t=t==null?B:EB({},B,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Pl={isMounted:function(e){return(e=e._reactInternals)?vn(e)===e:!1},enqueueSetState:function(e,B,t){e=e._reactInternals;var C=ie(),n=pC(e),r=Ft(C,n);r.payload=B,t!=null&&(r.callback=t),B=dC(e,r,n),B!==null&&(et(B,e,n,C),Ya(B,e,n))},enqueueReplaceState:function(e,B,t){e=e._reactInternals;var C=ie(),n=pC(e),r=Ft(C,n);r.tag=1,r.payload=B,t!=null&&(r.callback=t),B=dC(e,r,n),B!==null&&(et(B,e,n,C),Ya(B,e,n))},enqueueForceUpdate:function(e,B){e=e._reactInternals;var t=ie(),C=pC(e),n=Ft(t,C);n.tag=2,B!=null&&(n.callback=B),B=dC(e,n,C),B!==null&&(et(B,e,C,t),Ya(B,e,C))}};function cp(e,B,t,C,n,r,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(C,r,i):B.prototype&&B.prototype.isPureReactComponent?!ki(t,C)||!ki(n,r):!0}function nA(e,B,t){var C=!1,n=wC,r=B.contextType;return typeof r=="object"&&r!==null?r=Ue(r):(n=me(B)?tn:$B.current,C=B.contextTypes,r=(C=C!=null)?or(e,n):wC),B=new B(t,r),e.memoizedState=B.state!==null&&B.state!==void 0?B.state:null,B.updater=Pl,e.stateNode=B,B._reactInternals=e,C&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),B}function up(e,B,t,C){e=B.state,typeof B.componentWillReceiveProps=="function"&&B.componentWillReceiveProps(t,C),typeof B.UNSAFE_componentWillReceiveProps=="function"&&B.UNSAFE_componentWillReceiveProps(t,C),B.state!==e&&Pl.enqueueReplaceState(B,B.state,null)}function Ef(e,B,t,C){var n=e.stateNode;n.props=t,n.state=e.memoizedState,n.refs=CA,E1(e);var r=B.contextType;typeof r=="object"&&r!==null?n.context=Ue(r):(r=me(B)?tn:$B.current,n.context=or(e,r)),n.state=e.memoizedState,r=B.getDerivedStateFromProps,typeof r=="function"&&(yf(e,B,r,t),n.state=e.memoizedState),typeof B.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(B=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),B!==n.state&&Pl.enqueueReplaceState(n,n.state,null),Do(e,t,n,C),n.state=e.memoizedState),typeof n.componentDidMount=="function"&&(e.flags|=4194308)}function Jr(e,B,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(w(309));var C=t.stateNode}if(!C)throw Error(w(147,e));var n=C,r=""+e;return B!==null&&B.ref!==null&&typeof B.ref=="function"&&B.ref._stringRef===r?B.ref:(B=function(i){var s=n.refs;s===CA&&(s=n.refs={}),i===null?delete s[r]:s[r]=i},B._stringRef=r,B)}if(typeof e!="string")throw Error(w(284));if(!t._owner)throw Error(w(290,e))}return e}function aa(e,B){throw e=Object.prototype.toString.call(B),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":e))}function fp(e){var B=e._init;return B(e._payload)}function rA(e){function B(d,h){if(e){var v=d.deletions;v===null?(d.deletions=[h],d.flags|=16):v.push(h)}}function t(d,h){if(!e)return null;for(;h!==null;)B(d,h),h=h.sibling;return null}function C(d,h){for(d=new Map;h!==null;)h.key!==null?d.set(h.key,h):d.set(h.index,h),h=h.sibling;return d}function n(d,h){return d=mC(d,h),d.index=0,d.sibling=null,d}function r(d,h,v){return d.index=v,e?(v=d.alternate,v!==null?(v=v.index,v<h?(d.flags|=2,h):v):(d.flags|=2,h)):(d.flags|=1048576,h)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,h,v,A){return h===null||h.tag!==6?(h=Yc(v,d.mode,A),h.return=d,h):(h=n(h,v),h.return=d,h)}function a(d,h,v,A){var E=v.type;return E===Tn?l(d,h,v.props.children,A,v.key):h!==null&&(h.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===_t&&fp(E)===h.type)?(A=n(h,v.props),A.ref=Jr(d,h,v),A.return=d,A):(A=$a(v.type,v.key,v.props,null,d.mode,A),A.ref=Jr(d,h,v),A.return=d,A)}function o(d,h,v,A){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=Xc(v,d.mode,A),h.return=d,h):(h=n(h,v.children||[]),h.return=d,h)}function l(d,h,v,A,E){return h===null||h.tag!==7?(h=$C(v,d.mode,A,E),h.return=d,h):(h=n(h,v),h.return=d,h)}function c(d,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Yc(""+h,d.mode,v),h.return=d,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case zs:return v=$a(h.type,h.key,h.props,null,d.mode,v),v.ref=Jr(d,null,h),v.return=d,v;case kn:return h=Xc(h,d.mode,v),h.return=d,h;case _t:var A=h._init;return c(d,A(h._payload),v)}if(Ci(h)||Hr(h))return h=$C(h,d.mode,v,null),h.return=d,h;aa(d,h)}return null}function u(d,h,v,A){var E=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return E!==null?null:s(d,h,""+v,A);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case zs:return v.key===E?a(d,h,v,A):null;case kn:return v.key===E?o(d,h,v,A):null;case _t:return E=v._init,u(d,h,E(v._payload),A)}if(Ci(v)||Hr(v))return E!==null?null:l(d,h,v,A,null);aa(d,v)}return null}function g(d,h,v,A,E){if(typeof A=="string"&&A!==""||typeof A=="number")return d=d.get(v)||null,s(h,d,""+A,E);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case zs:return d=d.get(A.key===null?v:A.key)||null,a(h,d,A,E);case kn:return d=d.get(A.key===null?v:A.key)||null,o(h,d,A,E);case _t:var D=A._init;return g(d,h,v,D(A._payload),E)}if(Ci(A)||Hr(A))return d=d.get(v)||null,l(h,d,A,E,null);aa(h,A)}return null}function f(d,h,v,A){for(var E=null,D=null,I=h,y=h=0,b=null;I!==null&&y<v.length;y++){I.index>y?(b=I,I=null):b=I.sibling;var M=u(d,I,v[y],A);if(M===null){I===null&&(I=b);break}e&&I&&M.alternate===null&&B(d,I),h=r(M,h,y),D===null?E=M:D.sibling=M,D=M,I=b}if(y===v.length)return t(d,I),mB&&HC(d,y),E;if(I===null){for(;y<v.length;y++)I=c(d,v[y],A),I!==null&&(h=r(I,h,y),D===null?E=I:D.sibling=I,D=I);return mB&&HC(d,y),E}for(I=C(d,I);y<v.length;y++)b=g(I,d,y,v[y],A),b!==null&&(e&&b.alternate!==null&&I.delete(b.key===null?y:b.key),h=r(b,h,y),D===null?E=b:D.sibling=b,D=b);return e&&I.forEach(function(V){return B(d,V)}),mB&&HC(d,y),E}function m(d,h,v,A){var E=Hr(v);if(typeof E!="function")throw Error(w(150));if(v=E.call(v),v==null)throw Error(w(151));for(var D=E=null,I=h,y=h=0,b=null,M=v.next();I!==null&&!M.done;y++,M=v.next()){I.index>y?(b=I,I=null):b=I.sibling;var V=u(d,I,M.value,A);if(V===null){I===null&&(I=b);break}e&&I&&V.alternate===null&&B(d,I),h=r(V,h,y),D===null?E=V:D.sibling=V,D=V,I=b}if(M.done)return t(d,I),mB&&HC(d,y),E;if(I===null){for(;!M.done;y++,M=v.next())M=c(d,M.value,A),M!==null&&(h=r(M,h,y),D===null?E=M:D.sibling=M,D=M);return mB&&HC(d,y),E}for(I=C(d,I);!M.done;y++,M=v.next())M=g(I,d,y,M.value,A),M!==null&&(e&&M.alternate!==null&&I.delete(M.key===null?y:M.key),h=r(M,h,y),D===null?E=M:D.sibling=M,D=M);return e&&I.forEach(function(tB){return B(d,tB)}),mB&&HC(d,y),E}function p(d,h,v,A){if(typeof v=="object"&&v!==null&&v.type===Tn&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case zs:B:{for(var E=v.key,D=h;D!==null;){if(D.key===E){if(E=v.type,E===Tn){if(D.tag===7){t(d,D.sibling),h=n(D,v.props.children),h.return=d,d=h;break B}}else if(D.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===_t&&fp(E)===D.type){t(d,D.sibling),h=n(D,v.props),h.ref=Jr(d,D,v),h.return=d,d=h;break B}t(d,D);break}else B(d,D);D=D.sibling}v.type===Tn?(h=$C(v.props.children,d.mode,A,v.key),h.return=d,d=h):(A=$a(v.type,v.key,v.props,null,d.mode,A),A.ref=Jr(d,h,v),A.return=d,d=A)}return i(d);case kn:B:{for(D=v.key;h!==null;){if(h.key===D)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){t(d,h.sibling),h=n(h,v.children||[]),h.return=d,d=h;break B}else{t(d,h);break}else B(d,h);h=h.sibling}h=Xc(v,d.mode,A),h.return=d,d=h}return i(d);case _t:return D=v._init,p(d,h,D(v._payload),A)}if(Ci(v))return f(d,h,v,A);if(Hr(v))return m(d,h,v,A);aa(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(t(d,h.sibling),h=n(h,v),h.return=d,d=h):(t(d,h),h=Yc(v,d.mode,A),h.return=d,d=h),i(d)):t(d,h)}return p}var cr=rA(!0),iA=rA(!1),vs={},ft=MC(vs),xi=MC(vs),Hi=MC(vs);function VC(e){if(e===vs)throw Error(w(174));return e}function S1(e,B){switch(oB(Hi,B),oB(xi,e),oB(ft,vs),e=B.nodeType,e){case 9:case 11:B=(B=B.documentElement)?B.namespaceURI:$u(null,"");break;default:e=e===8?B.parentNode:B,B=e.namespaceURI||null,e=e.tagName,B=$u(B,e)}hB(ft),oB(ft,B)}function ur(){hB(ft),hB(xi),hB(Hi)}function sA(e){VC(Hi.current);var B=VC(ft.current),t=$u(B,e.type);B!==t&&(oB(xi,e),oB(ft,t))}function I1(e){xi.current===e&&(hB(ft),hB(xi))}var AB=MC(0);function Po(e){for(var B=e;B!==null;){if(B.tag===13){var t=B.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return B}else if(B.tag===19&&B.memoizedProps.revealOrder!==void 0){if(B.flags&128)return B}else if(B.child!==null){B.child.return=B,B=B.child;continue}if(B===e)break;for(;B.sibling===null;){if(B.return===null||B.return===e)return null;B=B.return}B.sibling.return=B.return,B=B.sibling}return null}var Uc=[];function b1(){for(var e=0;e<Uc.length;e++)Uc[e]._workInProgressVersionPrimary=null;Uc.length=0}var Xa=Jt.ReactCurrentDispatcher,Qc=Jt.ReactCurrentBatchConfig,nn=0,yB=null,OB=null,GB=null,Ro=!1,fi=!1,Gi=0,oR=0;function ZB(){throw Error(w(321))}function w1(e,B){if(B===null)return!1;for(var t=0;t<B.length&&t<e.length;t++)if(!Ct(e[t],B[t]))return!1;return!0}function D1(e,B,t,C,n,r){if(nn=r,yB=B,B.memoizedState=null,B.updateQueue=null,B.lanes=0,Xa.current=e===null||e.memoizedState===null?fR:dR,e=t(C,n),fi){r=0;do{if(fi=!1,Gi=0,25<=r)throw Error(w(301));r+=1,GB=OB=null,B.updateQueue=null,Xa.current=hR,e=t(C,n)}while(fi)}if(Xa.current=No,B=OB!==null&&OB.next!==null,nn=0,GB=OB=yB=null,Ro=!1,B)throw Error(w(300));return e}function P1(){var e=Gi!==0;return Gi=0,e}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return GB===null?yB.memoizedState=GB=e:GB=GB.next=e,GB}function Qe(){if(OB===null){var e=yB.alternate;e=e!==null?e.memoizedState:null}else e=OB.next;var B=GB===null?yB.memoizedState:GB.next;if(B!==null)GB=B,OB=e;else{if(e===null)throw Error(w(310));OB=e,e={memoizedState:OB.memoizedState,baseState:OB.baseState,baseQueue:OB.baseQueue,queue:OB.queue,next:null},GB===null?yB.memoizedState=GB=e:GB=GB.next=e}return GB}function Ki(e,B){return typeof B=="function"?B(e):B}function Jc(e){var B=Qe(),t=B.queue;if(t===null)throw Error(w(311));t.lastRenderedReducer=e;var C=OB,n=C.baseQueue,r=t.pending;if(r!==null){if(n!==null){var i=n.next;n.next=r.next,r.next=i}C.baseQueue=n=r,t.pending=null}if(n!==null){r=n.next,C=C.baseState;var s=i=null,a=null,o=r;do{var l=o.lane;if((nn&l)===l)a!==null&&(a=a.next={lane:0,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null}),C=o.hasEagerState?o.eagerState:e(C,o.action);else{var c={lane:l,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null};a===null?(s=a=c,i=C):a=a.next=c,yB.lanes|=l,rn|=l}o=o.next}while(o!==null&&o!==r);a===null?i=C:a.next=s,Ct(C,B.memoizedState)||(de=!0),B.memoizedState=C,B.baseState=i,B.baseQueue=a,t.lastRenderedState=C}if(e=t.interleaved,e!==null){n=e;do r=n.lane,yB.lanes|=r,rn|=r,n=n.next;while(n!==e)}else n===null&&(t.lanes=0);return[B.memoizedState,t.dispatch]}function Vc(e){var B=Qe(),t=B.queue;if(t===null)throw Error(w(311));t.lastRenderedReducer=e;var C=t.dispatch,n=t.pending,r=B.memoizedState;if(n!==null){t.pending=null;var i=n=n.next;do r=e(r,i.action),i=i.next;while(i!==n);Ct(r,B.memoizedState)||(de=!0),B.memoizedState=r,B.baseQueue===null&&(B.baseState=r),t.lastRenderedState=r}return[r,C]}function aA(){}function oA(e,B){var t=yB,C=Qe(),n=B(),r=!Ct(C.memoizedState,n);if(r&&(C.memoizedState=n,de=!0),C=C.queue,R1(uA.bind(null,t,C,e),[e]),C.getSnapshot!==B||r||GB!==null&&GB.memoizedState.tag&1){if(t.flags|=2048,Ui(9,cA.bind(null,t,C,n,B),void 0,null),QB===null)throw Error(w(349));nn&30||lA(t,B,n)}return n}function lA(e,B,t){e.flags|=16384,e={getSnapshot:B,value:t},B=yB.updateQueue,B===null?(B={lastEffect:null,stores:null},yB.updateQueue=B,B.stores=[e]):(t=B.stores,t===null?B.stores=[e]:t.push(e))}function cA(e,B,t,C){B.value=t,B.getSnapshot=C,fA(B)&&dA(e)}function uA(e,B,t){return t(function(){fA(B)&&dA(e)})}function fA(e){var B=e.getSnapshot;e=e.value;try{var t=B();return!Ct(e,t)}catch{return!0}}function dA(e){var B=Lt(e,1);B!==null&&et(B,e,1,-1)}function dp(e){var B=ot();return typeof e=="function"&&(e=e()),B.memoizedState=B.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:e},B.queue=e,e=e.dispatch=uR.bind(null,yB,e),[B.memoizedState,e]}function Ui(e,B,t,C){return e={tag:e,create:B,destroy:t,deps:C,next:null},B=yB.updateQueue,B===null?(B={lastEffect:null,stores:null},yB.updateQueue=B,B.lastEffect=e.next=e):(t=B.lastEffect,t===null?B.lastEffect=e.next=e:(C=t.next,t.next=e,e.next=C,B.lastEffect=e)),e}function hA(){return Qe().memoizedState}function Za(e,B,t,C){var n=ot();yB.flags|=e,n.memoizedState=Ui(1|B,t,void 0,C===void 0?null:C)}function Rl(e,B,t,C){var n=Qe();C=C===void 0?null:C;var r=void 0;if(OB!==null){var i=OB.memoizedState;if(r=i.destroy,C!==null&&w1(C,i.deps)){n.memoizedState=Ui(B,t,r,C);return}}yB.flags|=e,n.memoizedState=Ui(1|B,t,r,C)}function hp(e,B){return Za(8390656,8,e,B)}function R1(e,B){return Rl(2048,8,e,B)}function pA(e,B){return Rl(4,2,e,B)}function mA(e,B){return Rl(4,4,e,B)}function gA(e,B){if(typeof B=="function")return e=e(),B(e),function(){B(null)};if(B!=null)return e=e(),B.current=e,function(){B.current=null}}function vA(e,B,t){return t=t!=null?t.concat([e]):null,Rl(4,4,gA.bind(null,B,e),t)}function N1(){}function AA(e,B){var t=Qe();B=B===void 0?null:B;var C=t.memoizedState;return C!==null&&B!==null&&w1(B,C[1])?C[0]:(t.memoizedState=[e,B],e)}function yA(e,B){var t=Qe();B=B===void 0?null:B;var C=t.memoizedState;return C!==null&&B!==null&&w1(B,C[1])?C[0]:(e=e(),t.memoizedState=[e,B],e)}function EA(e,B,t){return nn&21?(Ct(t,B)||(t=bv(),yB.lanes|=t,rn|=t,e.baseState=!0),B):(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=t)}function lR(e,B){var t=CB;CB=t!==0&&4>t?t:4,e(!0);var C=Qc.transition;Qc.transition={};try{e(!1),B()}finally{CB=t,Qc.transition=C}}function SA(){return Qe().memoizedState}function cR(e,B,t){var C=pC(e);if(t={lane:C,action:t,hasEagerState:!1,eagerState:null,next:null},IA(e))bA(B,t);else if(t=eA(e,B,t,C),t!==null){var n=ie();et(t,e,C,n),wA(t,B,C)}}function uR(e,B,t){var C=pC(e),n={lane:C,action:t,hasEagerState:!1,eagerState:null,next:null};if(IA(e))bA(B,n);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=B.lastRenderedReducer,r!==null))try{var i=B.lastRenderedState,s=r(i,t);if(n.hasEagerState=!0,n.eagerState=s,Ct(s,i)){var a=B.interleaved;a===null?(n.next=n,y1(B)):(n.next=a.next,a.next=n),B.interleaved=n;return}}catch{}finally{}t=eA(e,B,n,C),t!==null&&(n=ie(),et(t,e,C,n),wA(t,B,C))}}function IA(e){var B=e.alternate;return e===yB||B!==null&&B===yB}function bA(e,B){fi=Ro=!0;var t=e.pending;t===null?B.next=B:(B.next=t.next,t.next=B),e.pending=B}function wA(e,B,t){if(t&4194240){var C=B.lanes;C&=e.pendingLanes,t|=C,B.lanes=t,s1(e,t)}}var No={readContext:Ue,useCallback:ZB,useContext:ZB,useEffect:ZB,useImperativeHandle:ZB,useInsertionEffect:ZB,useLayoutEffect:ZB,useMemo:ZB,useReducer:ZB,useRef:ZB,useState:ZB,useDebugValue:ZB,useDeferredValue:ZB,useTransition:ZB,useMutableSource:ZB,useSyncExternalStore:ZB,useId:ZB,unstable_isNewReconciler:!1},fR={readContext:Ue,useCallback:function(e,B){return ot().memoizedState=[e,B===void 0?null:B],e},useContext:Ue,useEffect:hp,useImperativeHandle:function(e,B,t){return t=t!=null?t.concat([e]):null,Za(4194308,4,gA.bind(null,B,e),t)},useLayoutEffect:function(e,B){return Za(4194308,4,e,B)},useInsertionEffect:function(e,B){return Za(4,2,e,B)},useMemo:function(e,B){var t=ot();return B=B===void 0?null:B,e=e(),t.memoizedState=[e,B],e},useReducer:function(e,B,t){var C=ot();return B=t!==void 0?t(B):B,C.memoizedState=C.baseState=B,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:B},C.queue=e,e=e.dispatch=cR.bind(null,yB,e),[C.memoizedState,e]},useRef:function(e){var B=ot();return e={current:e},B.memoizedState=e},useState:dp,useDebugValue:N1,useDeferredValue:function(e){return ot().memoizedState=e},useTransition:function(){var e=dp(!1),B=e[0];return e=lR.bind(null,e[1]),ot().memoizedState=e,[B,e]},useMutableSource:function(){},useSyncExternalStore:function(e,B,t){var C=yB,n=ot();if(mB){if(t===void 0)throw Error(w(407));t=t()}else{if(t=B(),QB===null)throw Error(w(349));nn&30||lA(C,B,t)}n.memoizedState=t;var r={value:t,getSnapshot:B};return n.queue=r,hp(uA.bind(null,C,r,e),[e]),C.flags|=2048,Ui(9,cA.bind(null,C,r,t,B),void 0,null),t},useId:function(){var e=ot(),B=QB.identifierPrefix;if(mB){var t=Dt,C=wt;t=(C&~(1<<32-Bt(C)-1)).toString(32)+t,B=":"+B+"R"+t,t=Gi++,0<t&&(B+="H"+t.toString(32)),B+=":"}else t=oR++,B=":"+B+"r"+t.toString(32)+":";return e.memoizedState=B},unstable_isNewReconciler:!1},dR={readContext:Ue,useCallback:AA,useContext:Ue,useEffect:R1,useImperativeHandle:vA,useInsertionEffect:pA,useLayoutEffect:mA,useMemo:yA,useReducer:Jc,useRef:hA,useState:function(){return Jc(Ki)},useDebugValue:N1,useDeferredValue:function(e){var B=Qe();return EA(B,OB.memoizedState,e)},useTransition:function(){var e=Jc(Ki)[0],B=Qe().memoizedState;return[e,B]},useMutableSource:aA,useSyncExternalStore:oA,useId:SA,unstable_isNewReconciler:!1},hR={readContext:Ue,useCallback:AA,useContext:Ue,useEffect:R1,useImperativeHandle:vA,useInsertionEffect:pA,useLayoutEffect:mA,useMemo:yA,useReducer:Vc,useRef:hA,useState:function(){return Vc(Ki)},useDebugValue:N1,useDeferredValue:function(e){var B=Qe();return OB===null?B.memoizedState=e:EA(B,OB.memoizedState,e)},useTransition:function(){var e=Vc(Ki)[0],B=Qe().memoizedState;return[e,B]},useMutableSource:aA,useSyncExternalStore:oA,useId:SA,unstable_isNewReconciler:!1};function fr(e,B){try{var t="",C=B;do t+=J3(C),C=C.return;while(C);var n=t}catch(r){n=`
Error generating stack: `+r.message+`
`+r.stack}return{value:e,source:B,stack:n,digest:null}}function Wc(e,B,t){return{value:e,source:null,stack:t??null,digest:B??null}}function Sf(e,B){try{console.error(B.value)}catch(t){setTimeout(function(){throw t})}}var pR=typeof WeakMap=="function"?WeakMap:Map;function DA(e,B,t){t=Ft(-1,t),t.tag=3,t.payload={element:null};var C=B.value;return t.callback=function(){Oo||(Oo=!0,kf=C),Sf(e,B)},t}function PA(e,B,t){t=Ft(-1,t),t.tag=3;var C=e.type.getDerivedStateFromError;if(typeof C=="function"){var n=B.value;t.payload=function(){return C(n)},t.callback=function(){Sf(e,B)}}var r=e.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){Sf(e,B),typeof C!="function"&&(hC===null?hC=new Set([this]):hC.add(this));var i=B.stack;this.componentDidCatch(B.value,{componentStack:i!==null?i:""})}),t}function pp(e,B,t){var C=e.pingCache;if(C===null){C=e.pingCache=new pR;var n=new Set;C.set(B,n)}else n=C.get(B),n===void 0&&(n=new Set,C.set(B,n));n.has(t)||(n.add(t),e=NR.bind(null,e,B,t),B.then(e,e))}function mp(e){do{var B;if((B=e.tag===13)&&(B=e.memoizedState,B=B!==null?B.dehydrated!==null:!0),B)return e;e=e.return}while(e!==null);return null}function gp(e,B,t,C,n){return e.mode&1?(e.flags|=65536,e.lanes=n,e):(e===B?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(B=Ft(-1,1),B.tag=2,dC(t,B,1))),t.lanes|=1),e)}var mR=Jt.ReactCurrentOwner,de=!1;function Ce(e,B,t,C){B.child=e===null?iA(B,null,t,C):cr(B,e.child,t,C)}function vp(e,B,t,C,n){t=t.render;var r=B.ref;return $n(B,n),C=D1(e,B,t,C,r,n),t=P1(),e!==null&&!de?(B.updateQueue=e.updateQueue,B.flags&=-2053,e.lanes&=~n,xt(e,B,n)):(mB&&t&&h1(B),B.flags|=1,Ce(e,B,C,n),B.child)}function Ap(e,B,t,C,n){if(e===null){var r=t.type;return typeof r=="function"&&!H1(r)&&r.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(B.tag=15,B.type=r,RA(e,B,r,C,n)):(e=$a(t.type,null,C,B,B.mode,n),e.ref=B.ref,e.return=B,B.child=e)}if(r=e.child,!(e.lanes&n)){var i=r.memoizedProps;if(t=t.compare,t=t!==null?t:ki,t(i,C)&&e.ref===B.ref)return xt(e,B,n)}return B.flags|=1,e=mC(r,C),e.ref=B.ref,e.return=B,B.child=e}function RA(e,B,t,C,n){if(e!==null){var r=e.memoizedProps;if(ki(r,C)&&e.ref===B.ref)if(de=!1,B.pendingProps=C=r,(e.lanes&n)!==0)e.flags&131072&&(de=!0);else return B.lanes=e.lanes,xt(e,B,n)}return If(e,B,t,C,n)}function NA(e,B,t){var C=B.pendingProps,n=C.children,r=e!==null?e.memoizedState:null;if(C.mode==="hidden")if(!(B.mode&1))B.memoizedState={baseLanes:0,cachePool:null,transitions:null},oB(Vn,Ie),Ie|=t;else{if(!(t&1073741824))return e=r!==null?r.baseLanes|t:t,B.lanes=B.childLanes=1073741824,B.memoizedState={baseLanes:e,cachePool:null,transitions:null},B.updateQueue=null,oB(Vn,Ie),Ie|=e,null;B.memoizedState={baseLanes:0,cachePool:null,transitions:null},C=r!==null?r.baseLanes:t,oB(Vn,Ie),Ie|=C}else r!==null?(C=r.baseLanes|t,B.memoizedState=null):C=t,oB(Vn,Ie),Ie|=C;return Ce(e,B,n,t),B.child}function FA(e,B){var t=B.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(B.flags|=512,B.flags|=2097152)}function If(e,B,t,C,n){var r=me(t)?tn:$B.current;return r=or(B,r),$n(B,n),t=D1(e,B,t,C,r,n),C=P1(),e!==null&&!de?(B.updateQueue=e.updateQueue,B.flags&=-2053,e.lanes&=~n,xt(e,B,n)):(mB&&C&&h1(B),B.flags|=1,Ce(e,B,t,n),B.child)}function yp(e,B,t,C,n){if(me(t)){var r=!0;Eo(B)}else r=!1;if($n(B,n),B.stateNode===null)qa(e,B),nA(B,t,C),Ef(B,t,C,n),C=!0;else if(e===null){var i=B.stateNode,s=B.memoizedProps;i.props=s;var a=i.context,o=t.contextType;typeof o=="object"&&o!==null?o=Ue(o):(o=me(t)?tn:$B.current,o=or(B,o));var l=t.getDerivedStateFromProps,c=typeof l=="function"||typeof i.getSnapshotBeforeUpdate=="function";c||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==C||a!==o)&&up(B,i,C,o),$t=!1;var u=B.memoizedState;i.state=u,Do(B,C,i,n),a=B.memoizedState,s!==C||u!==a||pe.current||$t?(typeof l=="function"&&(yf(B,t,l,C),a=B.memoizedState),(s=$t||cp(B,t,s,C,u,a,o))?(c||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(B.flags|=4194308)):(typeof i.componentDidMount=="function"&&(B.flags|=4194308),B.memoizedProps=C,B.memoizedState=a),i.props=C,i.state=a,i.context=o,C=s):(typeof i.componentDidMount=="function"&&(B.flags|=4194308),C=!1)}else{i=B.stateNode,tA(e,B),s=B.memoizedProps,o=B.type===B.elementType?s:je(B.type,s),i.props=o,c=B.pendingProps,u=i.context,a=t.contextType,typeof a=="object"&&a!==null?a=Ue(a):(a=me(t)?tn:$B.current,a=or(B,a));var g=t.getDerivedStateFromProps;(l=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==c||u!==a)&&up(B,i,C,a),$t=!1,u=B.memoizedState,i.state=u,Do(B,C,i,n);var f=B.memoizedState;s!==c||u!==f||pe.current||$t?(typeof g=="function"&&(yf(B,t,g,C),f=B.memoizedState),(o=$t||cp(B,t,o,C,u,f,a)||!1)?(l||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(C,f,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(C,f,a)),typeof i.componentDidUpdate=="function"&&(B.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(B.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(B.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(B.flags|=1024),B.memoizedProps=C,B.memoizedState=f),i.props=C,i.state=f,i.context=a,C=o):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(B.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(B.flags|=1024),C=!1)}return bf(e,B,t,C,r,n)}function bf(e,B,t,C,n,r){FA(e,B);var i=(B.flags&128)!==0;if(!C&&!i)return n&&ip(B,t,!1),xt(e,B,r);C=B.stateNode,mR.current=B;var s=i&&typeof t.getDerivedStateFromError!="function"?null:C.render();return B.flags|=1,e!==null&&i?(B.child=cr(B,e.child,null,r),B.child=cr(B,null,s,r)):Ce(e,B,s,r),B.memoizedState=C.state,n&&ip(B,t,!0),B.child}function OA(e){var B=e.stateNode;B.pendingContext?rp(e,B.pendingContext,B.pendingContext!==B.context):B.context&&rp(e,B.context,!1),S1(e,B.containerInfo)}function Ep(e,B,t,C,n){return lr(),m1(n),B.flags|=256,Ce(e,B,t,C),B.child}var wf={dehydrated:null,treeContext:null,retryLane:0};function Df(e){return{baseLanes:e,cachePool:null,transitions:null}}function kA(e,B,t){var C=B.pendingProps,n=AB.current,r=!1,i=(B.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(n&2)!==0),s?(r=!0,B.flags&=-129):(e===null||e.memoizedState!==null)&&(n|=1),oB(AB,n&1),e===null)return vf(B),e=B.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(B.mode&1?e.data==="$!"?B.lanes=8:B.lanes=1073741824:B.lanes=1,null):(i=C.children,e=C.fallback,r?(C=B.mode,r=B.child,i={mode:"hidden",children:i},!(C&1)&&r!==null?(r.childLanes=0,r.pendingProps=i):r=Ol(i,C,0,null),e=$C(e,C,t,null),r.return=B,e.return=B,r.sibling=e,B.child=r,B.child.memoizedState=Df(t),B.memoizedState=wf,e):F1(B,i));if(n=e.memoizedState,n!==null&&(s=n.dehydrated,s!==null))return gR(e,B,i,C,s,n,t);if(r){r=C.fallback,i=B.mode,n=e.child,s=n.sibling;var a={mode:"hidden",children:C.children};return!(i&1)&&B.child!==n?(C=B.child,C.childLanes=0,C.pendingProps=a,B.deletions=null):(C=mC(n,a),C.subtreeFlags=n.subtreeFlags&14680064),s!==null?r=mC(s,r):(r=$C(r,i,t,null),r.flags|=2),r.return=B,C.return=B,C.sibling=r,B.child=C,C=r,r=B.child,i=e.child.memoizedState,i=i===null?Df(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},r.memoizedState=i,r.childLanes=e.childLanes&~t,B.memoizedState=wf,C}return r=e.child,e=r.sibling,C=mC(r,{mode:"visible",children:C.children}),!(B.mode&1)&&(C.lanes=t),C.return=B,C.sibling=null,e!==null&&(t=B.deletions,t===null?(B.deletions=[e],B.flags|=16):t.push(e)),B.child=C,B.memoizedState=null,C}function F1(e,B){return B=Ol({mode:"visible",children:B},e.mode,0,null),B.return=e,e.child=B}function oa(e,B,t,C){return C!==null&&m1(C),cr(B,e.child,null,t),e=F1(B,B.pendingProps.children),e.flags|=2,B.memoizedState=null,e}function gR(e,B,t,C,n,r,i){if(t)return B.flags&256?(B.flags&=-257,C=Wc(Error(w(422))),oa(e,B,i,C)):B.memoizedState!==null?(B.child=e.child,B.flags|=128,null):(r=C.fallback,n=B.mode,C=Ol({mode:"visible",children:C.children},n,0,null),r=$C(r,n,i,null),r.flags|=2,C.return=B,r.return=B,C.sibling=r,B.child=C,B.mode&1&&cr(B,e.child,null,i),B.child.memoizedState=Df(i),B.memoizedState=wf,r);if(!(B.mode&1))return oa(e,B,i,null);if(n.data==="$!"){if(C=n.nextSibling&&n.nextSibling.dataset,C)var s=C.dgst;return C=s,r=Error(w(419)),C=Wc(r,C,void 0),oa(e,B,i,C)}if(s=(i&e.childLanes)!==0,de||s){if(C=QB,C!==null){switch(i&-i){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:n=0}n=n&(C.suspendedLanes|i)?0:n,n!==0&&n!==r.retryLane&&(r.retryLane=n,Lt(e,n),et(C,e,n,-1))}return x1(),C=Wc(Error(w(421))),oa(e,B,i,C)}return n.data==="$?"?(B.flags|=128,B.child=e.child,B=FR.bind(null,e),n._reactRetry=B,null):(e=r.treeContext,be=fC(n.nextSibling),we=B,mB=!0,Xe=null,e!==null&&(Me[Le++]=wt,Me[Le++]=Dt,Me[Le++]=Cn,wt=e.id,Dt=e.overflow,Cn=B),B=F1(B,C.children),B.flags|=4096,B)}function Sp(e,B,t){e.lanes|=B;var C=e.alternate;C!==null&&(C.lanes|=B),Af(e.return,B,t)}function jc(e,B,t,C,n){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:B,rendering:null,renderingStartTime:0,last:C,tail:t,tailMode:n}:(r.isBackwards=B,r.rendering=null,r.renderingStartTime=0,r.last=C,r.tail=t,r.tailMode=n)}function TA(e,B,t){var C=B.pendingProps,n=C.revealOrder,r=C.tail;if(Ce(e,B,C.children,t),C=AB.current,C&2)C=C&1|2,B.flags|=128;else{if(e!==null&&e.flags&128)B:for(e=B.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sp(e,t,B);else if(e.tag===19)Sp(e,t,B);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===B)break B;for(;e.sibling===null;){if(e.return===null||e.return===B)break B;e=e.return}e.sibling.return=e.return,e=e.sibling}C&=1}if(oB(AB,C),!(B.mode&1))B.memoizedState=null;else switch(n){case"forwards":for(t=B.child,n=null;t!==null;)e=t.alternate,e!==null&&Po(e)===null&&(n=t),t=t.sibling;t=n,t===null?(n=B.child,B.child=null):(n=t.sibling,t.sibling=null),jc(B,!1,n,t,r);break;case"backwards":for(t=null,n=B.child,B.child=null;n!==null;){if(e=n.alternate,e!==null&&Po(e)===null){B.child=n;break}e=n.sibling,n.sibling=t,t=n,n=e}jc(B,!0,t,null,r);break;case"together":jc(B,!1,null,null,void 0);break;default:B.memoizedState=null}return B.child}function qa(e,B){!(B.mode&1)&&e!==null&&(e.alternate=null,B.alternate=null,B.flags|=2)}function xt(e,B,t){if(e!==null&&(B.dependencies=e.dependencies),rn|=B.lanes,!(t&B.childLanes))return null;if(e!==null&&B.child!==e.child)throw Error(w(153));if(B.child!==null){for(e=B.child,t=mC(e,e.pendingProps),B.child=t,t.return=B;e.sibling!==null;)e=e.sibling,t=t.sibling=mC(e,e.pendingProps),t.return=B;t.sibling=null}return B.child}function vR(e,B,t){switch(B.tag){case 3:OA(B),lr();break;case 5:sA(B);break;case 1:me(B.type)&&Eo(B);break;case 4:S1(B,B.stateNode.containerInfo);break;case 10:var C=B.type._context,n=B.memoizedProps.value;oB(bo,C._currentValue),C._currentValue=n;break;case 13:if(C=B.memoizedState,C!==null)return C.dehydrated!==null?(oB(AB,AB.current&1),B.flags|=128,null):t&B.child.childLanes?kA(e,B,t):(oB(AB,AB.current&1),e=xt(e,B,t),e!==null?e.sibling:null);oB(AB,AB.current&1);break;case 19:if(C=(t&B.childLanes)!==0,e.flags&128){if(C)return TA(e,B,t);B.flags|=128}if(n=B.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),oB(AB,AB.current),C)break;return null;case 22:case 23:return B.lanes=0,NA(e,B,t)}return xt(e,B,t)}var MA,Pf,LA,xA;MA=function(e,B){for(var t=B.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===B)break;for(;t.sibling===null;){if(t.return===null||t.return===B)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Pf=function(){};LA=function(e,B,t,C){var n=e.memoizedProps;if(n!==C){e=B.stateNode,VC(ft.current);var r=null;switch(t){case"input":n=Zu(e,n),C=Zu(e,C),r=[];break;case"select":n=EB({},n,{value:void 0}),C=EB({},C,{value:void 0}),r=[];break;case"textarea":n=_u(e,n),C=_u(e,C),r=[];break;default:typeof n.onClick!="function"&&typeof C.onClick=="function"&&(e.onclick=Ao)}Bf(t,C);var i;t=null;for(o in n)if(!C.hasOwnProperty(o)&&n.hasOwnProperty(o)&&n[o]!=null)if(o==="style"){var s=n[o];for(i in s)s.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else o!=="dangerouslySetInnerHTML"&&o!=="children"&&o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(wi.hasOwnProperty(o)?r||(r=[]):(r=r||[]).push(o,null));for(o in C){var a=C[o];if(s=n!=null?n[o]:void 0,C.hasOwnProperty(o)&&a!==s&&(a!=null||s!=null))if(o==="style")if(s){for(i in s)!s.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in a)a.hasOwnProperty(i)&&s[i]!==a[i]&&(t||(t={}),t[i]=a[i])}else t||(r||(r=[]),r.push(o,t)),t=a;else o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(r=r||[]).push(o,a)):o==="children"?typeof a!="string"&&typeof a!="number"||(r=r||[]).push(o,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&(wi.hasOwnProperty(o)?(a!=null&&o==="onScroll"&&uB("scroll",e),r||s===a||(r=[])):(r=r||[]).push(o,a))}t&&(r=r||[]).push("style",t);var o=r;(B.updateQueue=o)&&(B.flags|=4)}};xA=function(e,B,t,C){t!==C&&(B.flags|=4)};function Vr(e,B){if(!mB)switch(e.tailMode){case"hidden":B=e.tail;for(var t=null;B!==null;)B.alternate!==null&&(t=B),B=B.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var C=null;t!==null;)t.alternate!==null&&(C=t),t=t.sibling;C===null?B||e.tail===null?e.tail=null:e.tail.sibling=null:C.sibling=null}}function qB(e){var B=e.alternate!==null&&e.alternate.child===e.child,t=0,C=0;if(B)for(var n=e.child;n!==null;)t|=n.lanes|n.childLanes,C|=n.subtreeFlags&14680064,C|=n.flags&14680064,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)t|=n.lanes|n.childLanes,C|=n.subtreeFlags,C|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=C,e.childLanes=t,B}function AR(e,B,t){var C=B.pendingProps;switch(p1(B),B.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qB(B),null;case 1:return me(B.type)&&yo(),qB(B),null;case 3:return C=B.stateNode,ur(),hB(pe),hB($B),b1(),C.pendingContext&&(C.context=C.pendingContext,C.pendingContext=null),(e===null||e.child===null)&&(sa(B)?B.flags|=4:e===null||e.memoizedState.isDehydrated&&!(B.flags&256)||(B.flags|=1024,Xe!==null&&(Lf(Xe),Xe=null))),Pf(e,B),qB(B),null;case 5:I1(B);var n=VC(Hi.current);if(t=B.type,e!==null&&B.stateNode!=null)LA(e,B,t,C,n),e.ref!==B.ref&&(B.flags|=512,B.flags|=2097152);else{if(!C){if(B.stateNode===null)throw Error(w(166));return qB(B),null}if(e=VC(ft.current),sa(B)){C=B.stateNode,t=B.type;var r=B.memoizedProps;switch(C[lt]=B,C[Li]=r,e=(B.mode&1)!==0,t){case"dialog":uB("cancel",C),uB("close",C);break;case"iframe":case"object":case"embed":uB("load",C);break;case"video":case"audio":for(n=0;n<ri.length;n++)uB(ri[n],C);break;case"source":uB("error",C);break;case"img":case"image":case"link":uB("error",C),uB("load",C);break;case"details":uB("toggle",C);break;case"input":O2(C,r),uB("invalid",C);break;case"select":C._wrapperState={wasMultiple:!!r.multiple},uB("invalid",C);break;case"textarea":T2(C,r),uB("invalid",C)}Bf(t,r),n=null;for(var i in r)if(r.hasOwnProperty(i)){var s=r[i];i==="children"?typeof s=="string"?C.textContent!==s&&(r.suppressHydrationWarning!==!0&&ia(C.textContent,s,e),n=["children",s]):typeof s=="number"&&C.textContent!==""+s&&(r.suppressHydrationWarning!==!0&&ia(C.textContent,s,e),n=["children",""+s]):wi.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&uB("scroll",C)}switch(t){case"input":_s(C),k2(C,r,!0);break;case"textarea":_s(C),M2(C);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(C.onclick=Ao)}C=n,B.updateQueue=C,C!==null&&(B.flags|=4)}else{i=n.nodeType===9?n:n.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=lv(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof C.is=="string"?e=i.createElement(t,{is:C.is}):(e=i.createElement(t),t==="select"&&(i=e,C.multiple?i.multiple=!0:C.size&&(i.size=C.size))):e=i.createElementNS(e,t),e[lt]=B,e[Li]=C,MA(e,B,!1,!1),B.stateNode=e;B:{switch(i=ef(t,C),t){case"dialog":uB("cancel",e),uB("close",e),n=C;break;case"iframe":case"object":case"embed":uB("load",e),n=C;break;case"video":case"audio":for(n=0;n<ri.length;n++)uB(ri[n],e);n=C;break;case"source":uB("error",e),n=C;break;case"img":case"image":case"link":uB("error",e),uB("load",e),n=C;break;case"details":uB("toggle",e),n=C;break;case"input":O2(e,C),n=Zu(e,C),uB("invalid",e);break;case"option":n=C;break;case"select":e._wrapperState={wasMultiple:!!C.multiple},n=EB({},C,{value:void 0}),uB("invalid",e);break;case"textarea":T2(e,C),n=_u(e,C),uB("invalid",e);break;default:n=C}Bf(t,n),s=n;for(r in s)if(s.hasOwnProperty(r)){var a=s[r];r==="style"?fv(e,a):r==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&cv(e,a)):r==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&Di(e,a):typeof a=="number"&&Di(e,""+a):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(wi.hasOwnProperty(r)?a!=null&&r==="onScroll"&&uB("scroll",e):a!=null&&e1(e,r,a,i))}switch(t){case"input":_s(e),k2(e,C,!1);break;case"textarea":_s(e),M2(e);break;case"option":C.value!=null&&e.setAttribute("value",""+bC(C.value));break;case"select":e.multiple=!!C.multiple,r=C.value,r!=null?Zn(e,!!C.multiple,r,!1):C.defaultValue!=null&&Zn(e,!!C.multiple,C.defaultValue,!0);break;default:typeof n.onClick=="function"&&(e.onclick=Ao)}switch(t){case"button":case"input":case"select":case"textarea":C=!!C.autoFocus;break B;case"img":C=!0;break B;default:C=!1}}C&&(B.flags|=4)}B.ref!==null&&(B.flags|=512,B.flags|=2097152)}return qB(B),null;case 6:if(e&&B.stateNode!=null)xA(e,B,e.memoizedProps,C);else{if(typeof C!="string"&&B.stateNode===null)throw Error(w(166));if(t=VC(Hi.current),VC(ft.current),sa(B)){if(C=B.stateNode,t=B.memoizedProps,C[lt]=B,(r=C.nodeValue!==t)&&(e=we,e!==null))switch(e.tag){case 3:ia(C.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ia(C.nodeValue,t,(e.mode&1)!==0)}r&&(B.flags|=4)}else C=(t.nodeType===9?t:t.ownerDocument).createTextNode(C),C[lt]=B,B.stateNode=C}return qB(B),null;case 13:if(hB(AB),C=B.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(mB&&be!==null&&B.mode&1&&!(B.flags&128))BA(),lr(),B.flags|=98560,r=!1;else if(r=sa(B),C!==null&&C.dehydrated!==null){if(e===null){if(!r)throw Error(w(318));if(r=B.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(w(317));r[lt]=B}else lr(),!(B.flags&128)&&(B.memoizedState=null),B.flags|=4;qB(B),r=!1}else Xe!==null&&(Lf(Xe),Xe=null),r=!0;if(!r)return B.flags&65536?B:null}return B.flags&128?(B.lanes=t,B):(C=C!==null,C!==(e!==null&&e.memoizedState!==null)&&C&&(B.child.flags|=8192,B.mode&1&&(e===null||AB.current&1?MB===0&&(MB=3):x1())),B.updateQueue!==null&&(B.flags|=4),qB(B),null);case 4:return ur(),Pf(e,B),e===null&&Ti(B.stateNode.containerInfo),qB(B),null;case 10:return A1(B.type._context),qB(B),null;case 17:return me(B.type)&&yo(),qB(B),null;case 19:if(hB(AB),r=B.memoizedState,r===null)return qB(B),null;if(C=(B.flags&128)!==0,i=r.rendering,i===null)if(C)Vr(r,!1);else{if(MB!==0||e!==null&&e.flags&128)for(e=B.child;e!==null;){if(i=Po(e),i!==null){for(B.flags|=128,Vr(r,!1),C=i.updateQueue,C!==null&&(B.updateQueue=C,B.flags|=4),B.subtreeFlags=0,C=t,t=B.child;t!==null;)r=t,e=C,r.flags&=14680066,i=r.alternate,i===null?(r.childLanes=0,r.lanes=e,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=i.childLanes,r.lanes=i.lanes,r.child=i.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=i.memoizedProps,r.memoizedState=i.memoizedState,r.updateQueue=i.updateQueue,r.type=i.type,e=i.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return oB(AB,AB.current&1|2),B.child}e=e.sibling}r.tail!==null&&PB()>dr&&(B.flags|=128,C=!0,Vr(r,!1),B.lanes=4194304)}else{if(!C)if(e=Po(i),e!==null){if(B.flags|=128,C=!0,t=e.updateQueue,t!==null&&(B.updateQueue=t,B.flags|=4),Vr(r,!0),r.tail===null&&r.tailMode==="hidden"&&!i.alternate&&!mB)return qB(B),null}else 2*PB()-r.renderingStartTime>dr&&t!==1073741824&&(B.flags|=128,C=!0,Vr(r,!1),B.lanes=4194304);r.isBackwards?(i.sibling=B.child,B.child=i):(t=r.last,t!==null?t.sibling=i:B.child=i,r.last=i)}return r.tail!==null?(B=r.tail,r.rendering=B,r.tail=B.sibling,r.renderingStartTime=PB(),B.sibling=null,t=AB.current,oB(AB,C?t&1|2:t&1),B):(qB(B),null);case 22:case 23:return L1(),C=B.memoizedState!==null,e!==null&&e.memoizedState!==null!==C&&(B.flags|=8192),C&&B.mode&1?Ie&1073741824&&(qB(B),B.subtreeFlags&6&&(B.flags|=8192)):qB(B),null;case 24:return null;case 25:return null}throw Error(w(156,B.tag))}function yR(e,B){switch(p1(B),B.tag){case 1:return me(B.type)&&yo(),e=B.flags,e&65536?(B.flags=e&-65537|128,B):null;case 3:return ur(),hB(pe),hB($B),b1(),e=B.flags,e&65536&&!(e&128)?(B.flags=e&-65537|128,B):null;case 5:return I1(B),null;case 13:if(hB(AB),e=B.memoizedState,e!==null&&e.dehydrated!==null){if(B.alternate===null)throw Error(w(340));lr()}return e=B.flags,e&65536?(B.flags=e&-65537|128,B):null;case 19:return hB(AB),null;case 4:return ur(),null;case 10:return A1(B.type._context),null;case 22:case 23:return L1(),null;case 24:return null;default:return null}}var la=!1,zB=!1,ER=typeof WeakSet=="function"?WeakSet:Set,T=null;function Jn(e,B){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(C){SB(e,B,C)}else t.current=null}function Rf(e,B,t){try{t()}catch(C){SB(e,B,C)}}var Ip=!1;function SR(e,B){if(uf=mo,e=Uv(),d1(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else B:{t=(t=e.ownerDocument)&&t.defaultView||window;var C=t.getSelection&&t.getSelection();if(C&&C.rangeCount!==0){t=C.anchorNode;var n=C.anchorOffset,r=C.focusNode;C=C.focusOffset;try{t.nodeType,r.nodeType}catch{t=null;break B}var i=0,s=-1,a=-1,o=0,l=0,c=e,u=null;e:for(;;){for(var g;c!==t||n!==0&&c.nodeType!==3||(s=i+n),c!==r||C!==0&&c.nodeType!==3||(a=i+C),c.nodeType===3&&(i+=c.nodeValue.length),(g=c.firstChild)!==null;)u=c,c=g;for(;;){if(c===e)break e;if(u===t&&++o===n&&(s=i),u===r&&++l===C&&(a=i),(g=c.nextSibling)!==null)break;c=u,u=c.parentNode}c=g}t=s===-1||a===-1?null:{start:s,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(ff={focusedElem:e,selectionRange:t},mo=!1,T=B;T!==null;)if(B=T,e=B.child,(B.subtreeFlags&1028)!==0&&e!==null)e.return=B,T=e;else for(;T!==null;){B=T;try{var f=B.alternate;if(B.flags&1024)switch(B.tag){case 0:case 11:case 15:break;case 1:if(f!==null){var m=f.memoizedProps,p=f.memoizedState,d=B.stateNode,h=d.getSnapshotBeforeUpdate(B.elementType===B.type?m:je(B.type,m),p);d.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=B.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(A){SB(B,B.return,A)}if(e=B.sibling,e!==null){e.return=B.return,T=e;break}T=B.return}return f=Ip,Ip=!1,f}function di(e,B,t){var C=B.updateQueue;if(C=C!==null?C.lastEffect:null,C!==null){var n=C=C.next;do{if((n.tag&e)===e){var r=n.destroy;n.destroy=void 0,r!==void 0&&Rf(B,t,r)}n=n.next}while(n!==C)}}function Nl(e,B){if(B=B.updateQueue,B=B!==null?B.lastEffect:null,B!==null){var t=B=B.next;do{if((t.tag&e)===e){var C=t.create;t.destroy=C()}t=t.next}while(t!==B)}}function Nf(e){var B=e.ref;if(B!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof B=="function"?B(e):B.current=e}}function HA(e){var B=e.alternate;B!==null&&(e.alternate=null,HA(B)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(B=e.stateNode,B!==null&&(delete B[lt],delete B[Li],delete B[pf],delete B[rR],delete B[iR])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function GA(e){return e.tag===5||e.tag===3||e.tag===4}function bp(e){B:for(;;){for(;e.sibling===null;){if(e.return===null||GA(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue B;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ff(e,B,t){var C=e.tag;if(C===5||C===6)e=e.stateNode,B?t.nodeType===8?t.parentNode.insertBefore(e,B):t.insertBefore(e,B):(t.nodeType===8?(B=t.parentNode,B.insertBefore(e,t)):(B=t,B.appendChild(e)),t=t._reactRootContainer,t!=null||B.onclick!==null||(B.onclick=Ao));else if(C!==4&&(e=e.child,e!==null))for(Ff(e,B,t),e=e.sibling;e!==null;)Ff(e,B,t),e=e.sibling}function Of(e,B,t){var C=e.tag;if(C===5||C===6)e=e.stateNode,B?t.insertBefore(e,B):t.appendChild(e);else if(C!==4&&(e=e.child,e!==null))for(Of(e,B,t),e=e.sibling;e!==null;)Of(e,B,t),e=e.sibling}var WB=null,Ye=!1;function Xt(e,B,t){for(t=t.child;t!==null;)KA(e,B,t),t=t.sibling}function KA(e,B,t){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(El,t)}catch{}switch(t.tag){case 5:zB||Jn(t,B);case 6:var C=WB,n=Ye;WB=null,Xt(e,B,t),WB=C,Ye=n,WB!==null&&(Ye?(e=WB,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):WB.removeChild(t.stateNode));break;case 18:WB!==null&&(Ye?(e=WB,t=t.stateNode,e.nodeType===8?Gc(e.parentNode,t):e.nodeType===1&&Gc(e,t),Fi(e)):Gc(WB,t.stateNode));break;case 4:C=WB,n=Ye,WB=t.stateNode.containerInfo,Ye=!0,Xt(e,B,t),WB=C,Ye=n;break;case 0:case 11:case 14:case 15:if(!zB&&(C=t.updateQueue,C!==null&&(C=C.lastEffect,C!==null))){n=C=C.next;do{var r=n,i=r.destroy;r=r.tag,i!==void 0&&(r&2||r&4)&&Rf(t,B,i),n=n.next}while(n!==C)}Xt(e,B,t);break;case 1:if(!zB&&(Jn(t,B),C=t.stateNode,typeof C.componentWillUnmount=="function"))try{C.props=t.memoizedProps,C.state=t.memoizedState,C.componentWillUnmount()}catch(s){SB(t,B,s)}Xt(e,B,t);break;case 21:Xt(e,B,t);break;case 22:t.mode&1?(zB=(C=zB)||t.memoizedState!==null,Xt(e,B,t),zB=C):Xt(e,B,t);break;default:Xt(e,B,t)}}function wp(e){var B=e.updateQueue;if(B!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new ER),B.forEach(function(C){var n=OR.bind(null,e,C);t.has(C)||(t.add(C),C.then(n,n))})}}function Ve(e,B){var t=B.deletions;if(t!==null)for(var C=0;C<t.length;C++){var n=t[C];try{var r=e,i=B,s=i;B:for(;s!==null;){switch(s.tag){case 5:WB=s.stateNode,Ye=!1;break B;case 3:WB=s.stateNode.containerInfo,Ye=!0;break B;case 4:WB=s.stateNode.containerInfo,Ye=!0;break B}s=s.return}if(WB===null)throw Error(w(160));KA(r,i,n),WB=null,Ye=!1;var a=n.alternate;a!==null&&(a.return=null),n.return=null}catch(o){SB(n,B,o)}}if(B.subtreeFlags&12854)for(B=B.child;B!==null;)UA(B,e),B=B.sibling}function UA(e,B){var t=e.alternate,C=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ve(B,e),st(e),C&4){try{di(3,e,e.return),Nl(3,e)}catch(m){SB(e,e.return,m)}try{di(5,e,e.return)}catch(m){SB(e,e.return,m)}}break;case 1:Ve(B,e),st(e),C&512&&t!==null&&Jn(t,t.return);break;case 5:if(Ve(B,e),st(e),C&512&&t!==null&&Jn(t,t.return),e.flags&32){var n=e.stateNode;try{Di(n,"")}catch(m){SB(e,e.return,m)}}if(C&4&&(n=e.stateNode,n!=null)){var r=e.memoizedProps,i=t!==null?t.memoizedProps:r,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&r.type==="radio"&&r.name!=null&&av(n,r),ef(s,i);var o=ef(s,r);for(i=0;i<a.length;i+=2){var l=a[i],c=a[i+1];l==="style"?fv(n,c):l==="dangerouslySetInnerHTML"?cv(n,c):l==="children"?Di(n,c):e1(n,l,c,o)}switch(s){case"input":qu(n,r);break;case"textarea":ov(n,r);break;case"select":var u=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!r.multiple;var g=r.value;g!=null?Zn(n,!!r.multiple,g,!1):u!==!!r.multiple&&(r.defaultValue!=null?Zn(n,!!r.multiple,r.defaultValue,!0):Zn(n,!!r.multiple,r.multiple?[]:"",!1))}n[Li]=r}catch(m){SB(e,e.return,m)}}break;case 6:if(Ve(B,e),st(e),C&4){if(e.stateNode===null)throw Error(w(162));n=e.stateNode,r=e.memoizedProps;try{n.nodeValue=r}catch(m){SB(e,e.return,m)}}break;case 3:if(Ve(B,e),st(e),C&4&&t!==null&&t.memoizedState.isDehydrated)try{Fi(B.containerInfo)}catch(m){SB(e,e.return,m)}break;case 4:Ve(B,e),st(e);break;case 13:Ve(B,e),st(e),n=e.child,n.flags&8192&&(r=n.memoizedState!==null,n.stateNode.isHidden=r,!r||n.alternate!==null&&n.alternate.memoizedState!==null||(T1=PB())),C&4&&wp(e);break;case 22:if(l=t!==null&&t.memoizedState!==null,e.mode&1?(zB=(o=zB)||l,Ve(B,e),zB=o):Ve(B,e),st(e),C&8192){if(o=e.memoizedState!==null,(e.stateNode.isHidden=o)&&!l&&e.mode&1)for(T=e,l=e.child;l!==null;){for(c=T=l;T!==null;){switch(u=T,g=u.child,u.tag){case 0:case 11:case 14:case 15:di(4,u,u.return);break;case 1:Jn(u,u.return);var f=u.stateNode;if(typeof f.componentWillUnmount=="function"){C=u,t=u.return;try{B=C,f.props=B.memoizedProps,f.state=B.memoizedState,f.componentWillUnmount()}catch(m){SB(C,t,m)}}break;case 5:Jn(u,u.return);break;case 22:if(u.memoizedState!==null){Pp(c);continue}}g!==null?(g.return=u,T=g):Pp(c)}l=l.sibling}B:for(l=null,c=e;;){if(c.tag===5){if(l===null){l=c;try{n=c.stateNode,o?(r=n.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(s=c.stateNode,a=c.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=uv("display",i))}catch(m){SB(e,e.return,m)}}}else if(c.tag===6){if(l===null)try{c.stateNode.nodeValue=o?"":c.memoizedProps}catch(m){SB(e,e.return,m)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break B;for(;c.sibling===null;){if(c.return===null||c.return===e)break B;l===c&&(l=null),c=c.return}l===c&&(l=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Ve(B,e),st(e),C&4&&wp(e);break;case 21:break;default:Ve(B,e),st(e)}}function st(e){var B=e.flags;if(B&2){try{B:{for(var t=e.return;t!==null;){if(GA(t)){var C=t;break B}t=t.return}throw Error(w(160))}switch(C.tag){case 5:var n=C.stateNode;C.flags&32&&(Di(n,""),C.flags&=-33);var r=bp(e);Of(e,r,n);break;case 3:case 4:var i=C.stateNode.containerInfo,s=bp(e);Ff(e,s,i);break;default:throw Error(w(161))}}catch(a){SB(e,e.return,a)}e.flags&=-3}B&4096&&(e.flags&=-4097)}function IR(e,B,t){T=e,QA(e)}function QA(e,B,t){for(var C=(e.mode&1)!==0;T!==null;){var n=T,r=n.child;if(n.tag===22&&C){var i=n.memoizedState!==null||la;if(!i){var s=n.alternate,a=s!==null&&s.memoizedState!==null||zB;s=la;var o=zB;if(la=i,(zB=a)&&!o)for(T=n;T!==null;)i=T,a=i.child,i.tag===22&&i.memoizedState!==null?Rp(n):a!==null?(a.return=i,T=a):Rp(n);for(;r!==null;)T=r,QA(r),r=r.sibling;T=n,la=s,zB=o}Dp(e)}else n.subtreeFlags&8772&&r!==null?(r.return=n,T=r):Dp(e)}}function Dp(e){for(;T!==null;){var B=T;if(B.flags&8772){var t=B.alternate;try{if(B.flags&8772)switch(B.tag){case 0:case 11:case 15:zB||Nl(5,B);break;case 1:var C=B.stateNode;if(B.flags&4&&!zB)if(t===null)C.componentDidMount();else{var n=B.elementType===B.type?t.memoizedProps:je(B.type,t.memoizedProps);C.componentDidUpdate(n,t.memoizedState,C.__reactInternalSnapshotBeforeUpdate)}var r=B.updateQueue;r!==null&&lp(B,r,C);break;case 3:var i=B.updateQueue;if(i!==null){if(t=null,B.child!==null)switch(B.child.tag){case 5:t=B.child.stateNode;break;case 1:t=B.child.stateNode}lp(B,i,t)}break;case 5:var s=B.stateNode;if(t===null&&B.flags&4){t=s;var a=B.memoizedProps;switch(B.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(B.memoizedState===null){var o=B.alternate;if(o!==null){var l=o.memoizedState;if(l!==null){var c=l.dehydrated;c!==null&&Fi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}zB||B.flags&512&&Nf(B)}catch(u){SB(B,B.return,u)}}if(B===e){T=null;break}if(t=B.sibling,t!==null){t.return=B.return,T=t;break}T=B.return}}function Pp(e){for(;T!==null;){var B=T;if(B===e){T=null;break}var t=B.sibling;if(t!==null){t.return=B.return,T=t;break}T=B.return}}function Rp(e){for(;T!==null;){var B=T;try{switch(B.tag){case 0:case 11:case 15:var t=B.return;try{Nl(4,B)}catch(a){SB(B,t,a)}break;case 1:var C=B.stateNode;if(typeof C.componentDidMount=="function"){var n=B.return;try{C.componentDidMount()}catch(a){SB(B,n,a)}}var r=B.return;try{Nf(B)}catch(a){SB(B,r,a)}break;case 5:var i=B.return;try{Nf(B)}catch(a){SB(B,i,a)}}}catch(a){SB(B,B.return,a)}if(B===e){T=null;break}var s=B.sibling;if(s!==null){s.return=B.return,T=s;break}T=B.return}}var bR=Math.ceil,Fo=Jt.ReactCurrentDispatcher,O1=Jt.ReactCurrentOwner,Ge=Jt.ReactCurrentBatchConfig,_=0,QB=null,RB=null,jB=0,Ie=0,Vn=MC(0),MB=0,Qi=null,rn=0,Fl=0,k1=0,hi=null,fe=null,T1=0,dr=1/0,St=null,Oo=!1,kf=null,hC=null,ca=!1,sC=null,ko=0,pi=0,Tf=null,za=-1,_a=0;function ie(){return _&6?PB():za!==-1?za:za=PB()}function pC(e){return e.mode&1?_&2&&jB!==0?jB&-jB:aR.transition!==null?(_a===0&&(_a=bv()),_a):(e=CB,e!==0||(e=window.event,e=e===void 0?16:Ov(e.type)),e):1}function et(e,B,t,C){if(50<pi)throw pi=0,Tf=null,Error(w(185));ps(e,t,C),(!(_&2)||e!==QB)&&(e===QB&&(!(_&2)&&(Fl|=t),MB===4&&eC(e,jB)),ge(e,C),t===1&&_===0&&!(B.mode&1)&&(dr=PB()+500,Dl&&LC()))}function ge(e,B){var t=e.callbackNode;aP(e,B);var C=po(e,e===QB?jB:0);if(C===0)t!==null&&H2(t),e.callbackNode=null,e.callbackPriority=0;else if(B=C&-C,e.callbackPriority!==B){if(t!=null&&H2(t),B===1)e.tag===0?sR(Np.bind(null,e)):zv(Np.bind(null,e)),CR(function(){!(_&6)&&LC()}),t=null;else{switch(wv(C)){case 1:t=i1;break;case 4:t=Sv;break;case 16:t=ho;break;case 536870912:t=Iv;break;default:t=ho}t=qA(t,JA.bind(null,e))}e.callbackPriority=B,e.callbackNode=t}}function JA(e,B){if(za=-1,_a=0,_&6)throw Error(w(327));var t=e.callbackNode;if(Br()&&e.callbackNode!==t)return null;var C=po(e,e===QB?jB:0);if(C===0)return null;if(C&30||C&e.expiredLanes||B)B=To(e,C);else{B=C;var n=_;_|=2;var r=WA();(QB!==e||jB!==B)&&(St=null,dr=PB()+500,_C(e,B));do try{PR();break}catch(s){VA(e,s)}while(1);v1(),Fo.current=r,_=n,RB!==null?B=0:(QB=null,jB=0,B=MB)}if(B!==0){if(B===2&&(n=sf(e),n!==0&&(C=n,B=Mf(e,n))),B===1)throw t=Qi,_C(e,0),eC(e,C),ge(e,PB()),t;if(B===6)eC(e,C);else{if(n=e.current.alternate,!(C&30)&&!wR(n)&&(B=To(e,C),B===2&&(r=sf(e),r!==0&&(C=r,B=Mf(e,r))),B===1))throw t=Qi,_C(e,0),eC(e,C),ge(e,PB()),t;switch(e.finishedWork=n,e.finishedLanes=C,B){case 0:case 1:throw Error(w(345));case 2:GC(e,fe,St);break;case 3:if(eC(e,C),(C&130023424)===C&&(B=T1+500-PB(),10<B)){if(po(e,0)!==0)break;if(n=e.suspendedLanes,(n&C)!==C){ie(),e.pingedLanes|=e.suspendedLanes&n;break}e.timeoutHandle=hf(GC.bind(null,e,fe,St),B);break}GC(e,fe,St);break;case 4:if(eC(e,C),(C&4194240)===C)break;for(B=e.eventTimes,n=-1;0<C;){var i=31-Bt(C);r=1<<i,i=B[i],i>n&&(n=i),C&=~r}if(C=n,C=PB()-C,C=(120>C?120:480>C?480:1080>C?1080:1920>C?1920:3e3>C?3e3:4320>C?4320:1960*bR(C/1960))-C,10<C){e.timeoutHandle=hf(GC.bind(null,e,fe,St),C);break}GC(e,fe,St);break;case 5:GC(e,fe,St);break;default:throw Error(w(329))}}}return ge(e,PB()),e.callbackNode===t?JA.bind(null,e):null}function Mf(e,B){var t=hi;return e.current.memoizedState.isDehydrated&&(_C(e,B).flags|=256),e=To(e,B),e!==2&&(B=fe,fe=t,B!==null&&Lf(B)),e}function Lf(e){fe===null?fe=e:fe.push.apply(fe,e)}function wR(e){for(var B=e;;){if(B.flags&16384){var t=B.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var C=0;C<t.length;C++){var n=t[C],r=n.getSnapshot;n=n.value;try{if(!Ct(r(),n))return!1}catch{return!1}}}if(t=B.child,B.subtreeFlags&16384&&t!==null)t.return=B,B=t;else{if(B===e)break;for(;B.sibling===null;){if(B.return===null||B.return===e)return!0;B=B.return}B.sibling.return=B.return,B=B.sibling}}return!0}function eC(e,B){for(B&=~k1,B&=~Fl,e.suspendedLanes|=B,e.pingedLanes&=~B,e=e.expirationTimes;0<B;){var t=31-Bt(B),C=1<<t;e[t]=-1,B&=~C}}function Np(e){if(_&6)throw Error(w(327));Br();var B=po(e,0);if(!(B&1))return ge(e,PB()),null;var t=To(e,B);if(e.tag!==0&&t===2){var C=sf(e);C!==0&&(B=C,t=Mf(e,C))}if(t===1)throw t=Qi,_C(e,0),eC(e,B),ge(e,PB()),t;if(t===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=B,GC(e,fe,St),ge(e,PB()),null}function M1(e,B){var t=_;_|=1;try{return e(B)}finally{_=t,_===0&&(dr=PB()+500,Dl&&LC())}}function sn(e){sC!==null&&sC.tag===0&&!(_&6)&&Br();var B=_;_|=1;var t=Ge.transition,C=CB;try{if(Ge.transition=null,CB=1,e)return e()}finally{CB=C,Ge.transition=t,_=B,!(_&6)&&LC()}}function L1(){Ie=Vn.current,hB(Vn)}function _C(e,B){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,tR(t)),RB!==null)for(t=RB.return;t!==null;){var C=t;switch(p1(C),C.tag){case 1:C=C.type.childContextTypes,C!=null&&yo();break;case 3:ur(),hB(pe),hB($B),b1();break;case 5:I1(C);break;case 4:ur();break;case 13:hB(AB);break;case 19:hB(AB);break;case 10:A1(C.type._context);break;case 22:case 23:L1()}t=t.return}if(QB=e,RB=e=mC(e.current,null),jB=Ie=B,MB=0,Qi=null,k1=Fl=rn=0,fe=hi=null,JC!==null){for(B=0;B<JC.length;B++)if(t=JC[B],C=t.interleaved,C!==null){t.interleaved=null;var n=C.next,r=t.pending;if(r!==null){var i=r.next;r.next=n,C.next=i}t.pending=C}JC=null}return e}function VA(e,B){do{var t=RB;try{if(v1(),Xa.current=No,Ro){for(var C=yB.memoizedState;C!==null;){var n=C.queue;n!==null&&(n.pending=null),C=C.next}Ro=!1}if(nn=0,GB=OB=yB=null,fi=!1,Gi=0,O1.current=null,t===null||t.return===null){MB=1,Qi=B,RB=null;break}B:{var r=e,i=t.return,s=t,a=B;if(B=jB,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var o=a,l=s,c=l.tag;if(!(l.mode&1)&&(c===0||c===11||c===15)){var u=l.alternate;u?(l.updateQueue=u.updateQueue,l.memoizedState=u.memoizedState,l.lanes=u.lanes):(l.updateQueue=null,l.memoizedState=null)}var g=mp(i);if(g!==null){g.flags&=-257,gp(g,i,s,r,B),g.mode&1&&pp(r,o,B),B=g,a=o;var f=B.updateQueue;if(f===null){var m=new Set;m.add(a),B.updateQueue=m}else f.add(a);break B}else{if(!(B&1)){pp(r,o,B),x1();break B}a=Error(w(426))}}else if(mB&&s.mode&1){var p=mp(i);if(p!==null){!(p.flags&65536)&&(p.flags|=256),gp(p,i,s,r,B),m1(fr(a,s));break B}}r=a=fr(a,s),MB!==4&&(MB=2),hi===null?hi=[r]:hi.push(r),r=i;do{switch(r.tag){case 3:r.flags|=65536,B&=-B,r.lanes|=B;var d=DA(r,a,B);op(r,d);break B;case 1:s=a;var h=r.type,v=r.stateNode;if(!(r.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(hC===null||!hC.has(v)))){r.flags|=65536,B&=-B,r.lanes|=B;var A=PA(r,s,B);op(r,A);break B}}r=r.return}while(r!==null)}YA(t)}catch(E){B=E,RB===t&&t!==null&&(RB=t=t.return);continue}break}while(1)}function WA(){var e=Fo.current;return Fo.current=No,e===null?No:e}function x1(){(MB===0||MB===3||MB===2)&&(MB=4),QB===null||!(rn&268435455)&&!(Fl&268435455)||eC(QB,jB)}function To(e,B){var t=_;_|=2;var C=WA();(QB!==e||jB!==B)&&(St=null,_C(e,B));do try{DR();break}catch(n){VA(e,n)}while(1);if(v1(),_=t,Fo.current=C,RB!==null)throw Error(w(261));return QB=null,jB=0,MB}function DR(){for(;RB!==null;)jA(RB)}function PR(){for(;RB!==null&&!$3();)jA(RB)}function jA(e){var B=ZA(e.alternate,e,Ie);e.memoizedProps=e.pendingProps,B===null?YA(e):RB=B,O1.current=null}function YA(e){var B=e;do{var t=B.alternate;if(e=B.return,B.flags&32768){if(t=yR(t,B),t!==null){t.flags&=32767,RB=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{MB=6,RB=null;return}}else if(t=AR(t,B,Ie),t!==null){RB=t;return}if(B=B.sibling,B!==null){RB=B;return}RB=B=e}while(B!==null);MB===0&&(MB=5)}function GC(e,B,t){var C=CB,n=Ge.transition;try{Ge.transition=null,CB=1,RR(e,B,t,C)}finally{Ge.transition=n,CB=C}return null}function RR(e,B,t,C){do Br();while(sC!==null);if(_&6)throw Error(w(327));t=e.finishedWork;var n=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var r=t.lanes|t.childLanes;if(oP(e,r),e===QB&&(RB=QB=null,jB=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ca||(ca=!0,qA(ho,function(){return Br(),null})),r=(t.flags&15990)!==0,t.subtreeFlags&15990||r){r=Ge.transition,Ge.transition=null;var i=CB;CB=1;var s=_;_|=4,O1.current=null,SR(e,t),UA(t,e),ZP(ff),mo=!!uf,ff=uf=null,e.current=t,IR(t),BP(),_=s,CB=i,Ge.transition=r}else e.current=t;if(ca&&(ca=!1,sC=e,ko=n),r=e.pendingLanes,r===0&&(hC=null),CP(t.stateNode),ge(e,PB()),B!==null)for(C=e.onRecoverableError,t=0;t<B.length;t++)n=B[t],C(n.value,{componentStack:n.stack,digest:n.digest});if(Oo)throw Oo=!1,e=kf,kf=null,e;return ko&1&&e.tag!==0&&Br(),r=e.pendingLanes,r&1?e===Tf?pi++:(pi=0,Tf=e):pi=0,LC(),null}function Br(){if(sC!==null){var e=wv(ko),B=Ge.transition,t=CB;try{if(Ge.transition=null,CB=16>e?16:e,sC===null)var C=!1;else{if(e=sC,sC=null,ko=0,_&6)throw Error(w(331));var n=_;for(_|=4,T=e.current;T!==null;){var r=T,i=r.child;if(T.flags&16){var s=r.deletions;if(s!==null){for(var a=0;a<s.length;a++){var o=s[a];for(T=o;T!==null;){var l=T;switch(l.tag){case 0:case 11:case 15:di(8,l,r)}var c=l.child;if(c!==null)c.return=l,T=c;else for(;T!==null;){l=T;var u=l.sibling,g=l.return;if(HA(l),l===o){T=null;break}if(u!==null){u.return=g,T=u;break}T=g}}}var f=r.alternate;if(f!==null){var m=f.child;if(m!==null){f.child=null;do{var p=m.sibling;m.sibling=null,m=p}while(m!==null)}}T=r}}if(r.subtreeFlags&2064&&i!==null)i.return=r,T=i;else B:for(;T!==null;){if(r=T,r.flags&2048)switch(r.tag){case 0:case 11:case 15:di(9,r,r.return)}var d=r.sibling;if(d!==null){d.return=r.return,T=d;break B}T=r.return}}var h=e.current;for(T=h;T!==null;){i=T;var v=i.child;if(i.subtreeFlags&2064&&v!==null)v.return=i,T=v;else B:for(i=h;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Nl(9,s)}}catch(E){SB(s,s.return,E)}if(s===i){T=null;break B}var A=s.sibling;if(A!==null){A.return=s.return,T=A;break B}T=s.return}}if(_=n,LC(),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(El,e)}catch{}C=!0}return C}finally{CB=t,Ge.transition=B}}return!1}function Fp(e,B,t){B=fr(t,B),B=DA(e,B,1),e=dC(e,B,1),B=ie(),e!==null&&(ps(e,1,B),ge(e,B))}function SB(e,B,t){if(e.tag===3)Fp(e,e,t);else for(;B!==null;){if(B.tag===3){Fp(B,e,t);break}else if(B.tag===1){var C=B.stateNode;if(typeof B.type.getDerivedStateFromError=="function"||typeof C.componentDidCatch=="function"&&(hC===null||!hC.has(C))){e=fr(t,e),e=PA(B,e,1),B=dC(B,e,1),e=ie(),B!==null&&(ps(B,1,e),ge(B,e));break}}B=B.return}}function NR(e,B,t){var C=e.pingCache;C!==null&&C.delete(B),B=ie(),e.pingedLanes|=e.suspendedLanes&t,QB===e&&(jB&t)===t&&(MB===4||MB===3&&(jB&130023424)===jB&&500>PB()-T1?_C(e,0):k1|=t),ge(e,B)}function XA(e,B){B===0&&(e.mode&1?(B=ea,ea<<=1,!(ea&130023424)&&(ea=4194304)):B=1);var t=ie();e=Lt(e,B),e!==null&&(ps(e,B,t),ge(e,t))}function FR(e){var B=e.memoizedState,t=0;B!==null&&(t=B.retryLane),XA(e,t)}function OR(e,B){var t=0;switch(e.tag){case 13:var C=e.stateNode,n=e.memoizedState;n!==null&&(t=n.retryLane);break;case 19:C=e.stateNode;break;default:throw Error(w(314))}C!==null&&C.delete(B),XA(e,t)}var ZA;ZA=function(e,B,t){if(e!==null)if(e.memoizedProps!==B.pendingProps||pe.current)de=!0;else{if(!(e.lanes&t)&&!(B.flags&128))return de=!1,vR(e,B,t);de=!!(e.flags&131072)}else de=!1,mB&&B.flags&1048576&&_v(B,Io,B.index);switch(B.lanes=0,B.tag){case 2:var C=B.type;qa(e,B),e=B.pendingProps;var n=or(B,$B.current);$n(B,t),n=D1(null,B,C,e,n,t);var r=P1();return B.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(B.tag=1,B.memoizedState=null,B.updateQueue=null,me(C)?(r=!0,Eo(B)):r=!1,B.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,E1(B),n.updater=Pl,B.stateNode=n,n._reactInternals=B,Ef(B,C,e,t),B=bf(null,B,C,!0,r,t)):(B.tag=0,mB&&r&&h1(B),Ce(null,B,n,t),B=B.child),B;case 16:C=B.elementType;B:{switch(qa(e,B),e=B.pendingProps,n=C._init,C=n(C._payload),B.type=C,n=B.tag=TR(C),e=je(C,e),n){case 0:B=If(null,B,C,e,t);break B;case 1:B=yp(null,B,C,e,t);break B;case 11:B=vp(null,B,C,e,t);break B;case 14:B=Ap(null,B,C,je(C.type,e),t);break B}throw Error(w(306,C,""))}return B;case 0:return C=B.type,n=B.pendingProps,n=B.elementType===C?n:je(C,n),If(e,B,C,n,t);case 1:return C=B.type,n=B.pendingProps,n=B.elementType===C?n:je(C,n),yp(e,B,C,n,t);case 3:B:{if(OA(B),e===null)throw Error(w(387));C=B.pendingProps,r=B.memoizedState,n=r.element,tA(e,B),Do(B,C,null,t);var i=B.memoizedState;if(C=i.element,r.isDehydrated)if(r={element:C,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},B.updateQueue.baseState=r,B.memoizedState=r,B.flags&256){n=fr(Error(w(423)),B),B=Ep(e,B,C,t,n);break B}else if(C!==n){n=fr(Error(w(424)),B),B=Ep(e,B,C,t,n);break B}else for(be=fC(B.stateNode.containerInfo.firstChild),we=B,mB=!0,Xe=null,t=iA(B,null,C,t),B.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(lr(),C===n){B=xt(e,B,t);break B}Ce(e,B,C,t)}B=B.child}return B;case 5:return sA(B),e===null&&vf(B),C=B.type,n=B.pendingProps,r=e!==null?e.memoizedProps:null,i=n.children,df(C,n)?i=null:r!==null&&df(C,r)&&(B.flags|=32),FA(e,B),Ce(e,B,i,t),B.child;case 6:return e===null&&vf(B),null;case 13:return kA(e,B,t);case 4:return S1(B,B.stateNode.containerInfo),C=B.pendingProps,e===null?B.child=cr(B,null,C,t):Ce(e,B,C,t),B.child;case 11:return C=B.type,n=B.pendingProps,n=B.elementType===C?n:je(C,n),vp(e,B,C,n,t);case 7:return Ce(e,B,B.pendingProps,t),B.child;case 8:return Ce(e,B,B.pendingProps.children,t),B.child;case 12:return Ce(e,B,B.pendingProps.children,t),B.child;case 10:B:{if(C=B.type._context,n=B.pendingProps,r=B.memoizedProps,i=n.value,oB(bo,C._currentValue),C._currentValue=i,r!==null)if(Ct(r.value,i)){if(r.children===n.children&&!pe.current){B=xt(e,B,t);break B}}else for(r=B.child,r!==null&&(r.return=B);r!==null;){var s=r.dependencies;if(s!==null){i=r.child;for(var a=s.firstContext;a!==null;){if(a.context===C){if(r.tag===1){a=Ft(-1,t&-t),a.tag=2;var o=r.updateQueue;if(o!==null){o=o.shared;var l=o.pending;l===null?a.next=a:(a.next=l.next,l.next=a),o.pending=a}}r.lanes|=t,a=r.alternate,a!==null&&(a.lanes|=t),Af(r.return,t,B),s.lanes|=t;break}a=a.next}}else if(r.tag===10)i=r.type===B.type?null:r.child;else if(r.tag===18){if(i=r.return,i===null)throw Error(w(341));i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),Af(i,t,B),i=r.sibling}else i=r.child;if(i!==null)i.return=r;else for(i=r;i!==null;){if(i===B){i=null;break}if(r=i.sibling,r!==null){r.return=i.return,i=r;break}i=i.return}r=i}Ce(e,B,n.children,t),B=B.child}return B;case 9:return n=B.type,C=B.pendingProps.children,$n(B,t),n=Ue(n),C=C(n),B.flags|=1,Ce(e,B,C,t),B.child;case 14:return C=B.type,n=je(C,B.pendingProps),n=je(C.type,n),Ap(e,B,C,n,t);case 15:return RA(e,B,B.type,B.pendingProps,t);case 17:return C=B.type,n=B.pendingProps,n=B.elementType===C?n:je(C,n),qa(e,B),B.tag=1,me(C)?(e=!0,Eo(B)):e=!1,$n(B,t),nA(B,C,n),Ef(B,C,n,t),bf(null,B,C,!0,e,t);case 19:return TA(e,B,t);case 22:return NA(e,B,t)}throw Error(w(156,B.tag))};function qA(e,B){return Ev(e,B)}function kR(e,B,t,C){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=B,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=C,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function He(e,B,t,C){return new kR(e,B,t,C)}function H1(e){return e=e.prototype,!(!e||!e.isReactComponent)}function TR(e){if(typeof e=="function")return H1(e)?1:0;if(e!=null){if(e=e.$$typeof,e===C1)return 11;if(e===n1)return 14}return 2}function mC(e,B){var t=e.alternate;return t===null?(t=He(e.tag,B,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=B,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,B=e.dependencies,t.dependencies=B===null?null:{lanes:B.lanes,firstContext:B.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function $a(e,B,t,C,n,r){var i=2;if(C=e,typeof e=="function")H1(e)&&(i=1);else if(typeof e=="string")i=5;else B:switch(e){case Tn:return $C(t.children,n,r,B);case t1:i=8,n|=8;break;case Wu:return e=He(12,t,B,n|2),e.elementType=Wu,e.lanes=r,e;case ju:return e=He(13,t,B,n),e.elementType=ju,e.lanes=r,e;case Yu:return e=He(19,t,B,n),e.elementType=Yu,e.lanes=r,e;case rv:return Ol(t,n,r,B);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Cv:i=10;break B;case nv:i=9;break B;case C1:i=11;break B;case n1:i=14;break B;case _t:i=16,C=null;break B}throw Error(w(130,e==null?e:typeof e,""))}return B=He(i,t,B,n),B.elementType=e,B.type=C,B.lanes=r,B}function $C(e,B,t,C){return e=He(7,e,C,B),e.lanes=t,e}function Ol(e,B,t,C){return e=He(22,e,C,B),e.elementType=rv,e.lanes=t,e.stateNode={isHidden:!1},e}function Yc(e,B,t){return e=He(6,e,null,B),e.lanes=t,e}function Xc(e,B,t){return B=He(4,e.children!==null?e.children:[],e.key,B),B.lanes=t,B.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},B}function MR(e,B,t,C,n){this.tag=B,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pc(0),this.expirationTimes=Pc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pc(0),this.identifierPrefix=C,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}function G1(e,B,t,C,n,r,i,s,a){return e=new MR(e,B,t,s,a),B===1?(B=1,r===!0&&(B|=8)):B=0,r=He(3,null,null,B),e.current=r,r.stateNode=e,r.memoizedState={element:C,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},E1(r),e}function LR(e,B,t){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kn,key:C==null?null:""+C,children:e,containerInfo:B,implementation:t}}function zA(e){if(!e)return wC;e=e._reactInternals;B:{if(vn(e)!==e||e.tag!==1)throw Error(w(170));var B=e;do{switch(B.tag){case 3:B=B.stateNode.context;break B;case 1:if(me(B.type)){B=B.stateNode.__reactInternalMemoizedMergedChildContext;break B}}B=B.return}while(B!==null);throw Error(w(171))}if(e.tag===1){var t=e.type;if(me(t))return qv(e,t,B)}return B}function _A(e,B,t,C,n,r,i,s,a){return e=G1(t,C,!0,e,n,r,i,s,a),e.context=zA(null),t=e.current,C=ie(),n=pC(t),r=Ft(C,n),r.callback=B??null,dC(t,r,n),e.current.lanes=n,ps(e,n,C),ge(e,C),e}function kl(e,B,t,C){var n=B.current,r=ie(),i=pC(n);return t=zA(t),B.context===null?B.context=t:B.pendingContext=t,B=Ft(r,i),B.payload={element:e},C=C===void 0?null:C,C!==null&&(B.callback=C),e=dC(n,B,i),e!==null&&(et(e,n,i,r),Ya(e,n,i)),i}function Mo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Op(e,B){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<B?t:B}}function K1(e,B){Op(e,B),(e=e.alternate)&&Op(e,B)}function xR(){return null}var $A=typeof reportError=="function"?reportError:function(e){console.error(e)};function U1(e){this._internalRoot=e}Tl.prototype.render=U1.prototype.render=function(e){var B=this._internalRoot;if(B===null)throw Error(w(409));kl(e,B,null,null)};Tl.prototype.unmount=U1.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var B=e.containerInfo;sn(function(){kl(null,e,null,null)}),B[Mt]=null}};function Tl(e){this._internalRoot=e}Tl.prototype.unstable_scheduleHydration=function(e){if(e){var B=Rv();e={blockedOn:null,target:e,priority:B};for(var t=0;t<BC.length&&B!==0&&B<BC[t].priority;t++);BC.splice(t,0,e),t===0&&Fv(e)}};function Q1(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function kp(){}function HR(e,B,t,C,n){if(n){if(typeof C=="function"){var r=C;C=function(){var o=Mo(i);r.call(o)}}var i=_A(B,C,e,0,null,!1,!1,"",kp);return e._reactRootContainer=i,e[Mt]=i.current,Ti(e.nodeType===8?e.parentNode:e),sn(),i}for(;n=e.lastChild;)e.removeChild(n);if(typeof C=="function"){var s=C;C=function(){var o=Mo(a);s.call(o)}}var a=G1(e,0,!1,null,null,!1,!1,"",kp);return e._reactRootContainer=a,e[Mt]=a.current,Ti(e.nodeType===8?e.parentNode:e),sn(function(){kl(B,a,t,C)}),a}function Ll(e,B,t,C,n){var r=t._reactRootContainer;if(r){var i=r;if(typeof n=="function"){var s=n;n=function(){var a=Mo(i);s.call(a)}}kl(B,i,e,n)}else i=HR(t,B,e,n,C);return Mo(i)}Dv=function(e){switch(e.tag){case 3:var B=e.stateNode;if(B.current.memoizedState.isDehydrated){var t=ni(B.pendingLanes);t!==0&&(s1(B,t|1),ge(B,PB()),!(_&6)&&(dr=PB()+500,LC()))}break;case 13:sn(function(){var C=Lt(e,1);if(C!==null){var n=ie();et(C,e,1,n)}}),K1(e,1)}};a1=function(e){if(e.tag===13){var B=Lt(e,134217728);if(B!==null){var t=ie();et(B,e,134217728,t)}K1(e,134217728)}};Pv=function(e){if(e.tag===13){var B=pC(e),t=Lt(e,B);if(t!==null){var C=ie();et(t,e,B,C)}K1(e,B)}};Rv=function(){return CB};Nv=function(e,B){var t=CB;try{return CB=e,B()}finally{CB=t}};Cf=function(e,B,t){switch(B){case"input":if(qu(e,t),B=t.name,t.type==="radio"&&B!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+B)+'][type="radio"]'),B=0;B<t.length;B++){var C=t[B];if(C!==e&&C.form===e.form){var n=wl(C);if(!n)throw Error(w(90));sv(C),qu(C,n)}}}break;case"textarea":ov(e,t);break;case"select":B=t.value,B!=null&&Zn(e,!!t.multiple,B,!1)}};pv=M1;mv=sn;var GR={usingClientEntryPoint:!1,Events:[gs,Hn,wl,dv,hv,M1]},Wr={findFiberByHostInstance:QC,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},KR={bundleType:Wr.bundleType,version:Wr.version,rendererPackageName:Wr.rendererPackageName,rendererConfig:Wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Av(e),e===null?null:e.stateNode},findFiberByHostInstance:Wr.findFiberByHostInstance||xR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ua=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ua.isDisabled&&ua.supportsFiber)try{El=ua.inject(KR),ut=ua}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GR;Ne.createPortal=function(e,B){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Q1(B))throw Error(w(200));return LR(e,B,null,t)};Ne.createRoot=function(e,B){if(!Q1(e))throw Error(w(299));var t=!1,C="",n=$A;return B!=null&&(B.unstable_strictMode===!0&&(t=!0),B.identifierPrefix!==void 0&&(C=B.identifierPrefix),B.onRecoverableError!==void 0&&(n=B.onRecoverableError)),B=G1(e,1,!1,null,null,t,!1,C,n),e[Mt]=B.current,Ti(e.nodeType===8?e.parentNode:e),new U1(B)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var B=e._reactInternals;if(B===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Av(B),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return sn(e)};Ne.hydrate=function(e,B,t){if(!Ml(B))throw Error(w(200));return Ll(null,e,B,!0,t)};Ne.hydrateRoot=function(e,B,t){if(!Q1(e))throw Error(w(405));var C=t!=null&&t.hydratedSources||null,n=!1,r="",i=$A;if(t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),B=_A(B,null,e,1,t??null,n,!1,r,i),e[Mt]=B.current,Ti(e),C)for(e=0;e<C.length;e++)t=C[e],n=t._getVersion,n=n(t._source),B.mutableSourceEagerHydrationData==null?B.mutableSourceEagerHydrationData=[t,n]:B.mutableSourceEagerHydrationData.push(t,n);return new Tl(B)};Ne.render=function(e,B,t){if(!Ml(B))throw Error(w(200));return Ll(null,e,B,!1,t)};Ne.unmountComponentAtNode=function(e){if(!Ml(e))throw Error(w(40));return e._reactRootContainer?(sn(function(){Ll(null,null,e,!1,function(){e._reactRootContainer=null,e[Mt]=null})}),!0):!1};Ne.unstable_batchedUpdates=M1;Ne.unstable_renderSubtreeIntoContainer=function(e,B,t,C){if(!Ml(t))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Ll(e,B,t,!1,C)};Ne.version="18.2.0-next-9e3b772b8-20220608";(function(e){function B(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(B)}catch(t){console.error(t)}}B(),e.exports=Ne})(x3);var Tp=Qu;Uu.createRoot=Tp.createRoot,Uu.hydrateRoot=Tp.hydrateRoot;/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ji(){return Ji=Object.assign?Object.assign.bind():function(e){for(var B=1;B<arguments.length;B++){var t=arguments[B];for(var C in t)Object.prototype.hasOwnProperty.call(t,C)&&(e[C]=t[C])}return e},Ji.apply(this,arguments)}var aC;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(aC||(aC={}));const Mp="popstate";function UR(e){e===void 0&&(e={});function B(C,n){let{pathname:r,search:i,hash:s}=C.location;return xf("",{pathname:r,search:i,hash:s},n.state&&n.state.usr||null,n.state&&n.state.key||"default")}function t(C,n){return typeof n=="string"?n:Lo(n)}return JR(B,t,null,e)}function NB(e,B){if(e===!1||e===null||typeof e>"u")throw new Error(B)}function J1(e,B){if(!e){typeof console<"u"&&console.warn(B);try{throw new Error(B)}catch{}}}function QR(){return Math.random().toString(36).substr(2,8)}function Lp(e,B){return{usr:e.state,key:e.key,idx:B}}function xf(e,B,t,C){return t===void 0&&(t=null),Ji({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof B=="string"?Dr(B):B,{state:t,key:B&&B.key||C||QR()})}function Lo(e){let{pathname:B="/",search:t="",hash:C=""}=e;return t&&t!=="?"&&(B+=t.charAt(0)==="?"?t:"?"+t),C&&C!=="#"&&(B+=C.charAt(0)==="#"?C:"#"+C),B}function Dr(e){let B={};if(e){let t=e.indexOf("#");t>=0&&(B.hash=e.substr(t),e=e.substr(0,t));let C=e.indexOf("?");C>=0&&(B.search=e.substr(C),e=e.substr(0,C)),e&&(B.pathname=e)}return B}function JR(e,B,t,C){C===void 0&&(C={});let{window:n=document.defaultView,v5Compat:r=!1}=C,i=n.history,s=aC.Pop,a=null,o=l();o==null&&(o=0,i.replaceState(Ji({},i.state,{idx:o}),""));function l(){return(i.state||{idx:null}).idx}function c(){s=aC.Pop;let p=l(),d=p==null?null:p-o;o=p,a&&a({action:s,location:m.location,delta:d})}function u(p,d){s=aC.Push;let h=xf(m.location,p,d);t&&t(h,p),o=l()+1;let v=Lp(h,o),A=m.createHref(h);try{i.pushState(v,"",A)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;n.location.assign(A)}r&&a&&a({action:s,location:m.location,delta:1})}function g(p,d){s=aC.Replace;let h=xf(m.location,p,d);t&&t(h,p),o=l();let v=Lp(h,o),A=m.createHref(h);i.replaceState(v,"",A),r&&a&&a({action:s,location:m.location,delta:0})}function f(p){let d=n.location.origin!=="null"?n.location.origin:n.location.href,h=typeof p=="string"?p:Lo(p);return NB(d,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,d)}let m={get action(){return s},get location(){return e(n,i)},listen(p){if(a)throw new Error("A history only accepts one active listener");return n.addEventListener(Mp,c),a=p,()=>{n.removeEventListener(Mp,c),a=null}},createHref(p){return B(n,p)},createURL:f,encodeLocation(p){let d=f(p);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:u,replace:g,go(p){return i.go(p)}};return m}var xp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(xp||(xp={}));function VR(e,B,t){t===void 0&&(t="/");let C=typeof B=="string"?Dr(B):B,n=V1(C.pathname||"/",t);if(n==null)return null;let r=By(e);WR(r);let i=null;for(let s=0;i==null&&s<r.length;++s)i=BN(r[s],CN(n));return i}function By(e,B,t,C){B===void 0&&(B=[]),t===void 0&&(t=[]),C===void 0&&(C="");let n=(r,i,s)=>{let a={relativePath:s===void 0?r.path||"":s,caseSensitive:r.caseSensitive===!0,childrenIndex:i,route:r};a.relativePath.startsWith("/")&&(NB(a.relativePath.startsWith(C),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+C+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(C.length));let o=gC([C,a.relativePath]),l=t.concat(a);r.children&&r.children.length>0&&(NB(r.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+o+'".')),By(r.children,B,l,o)),!(r.path==null&&!r.index)&&B.push({path:o,score:_R(o,r.index),routesMeta:l})};return e.forEach((r,i)=>{var s;if(r.path===""||!((s=r.path)!=null&&s.includes("?")))n(r,i);else for(let a of ey(r.path))n(r,i,a)}),B}function ey(e){let B=e.split("/");if(B.length===0)return[];let[t,...C]=B,n=t.endsWith("?"),r=t.replace(/\?$/,"");if(C.length===0)return n?[r,""]:[r];let i=ey(C.join("/")),s=[];return s.push(...i.map(a=>a===""?r:[r,a].join("/"))),n&&s.push(...i),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function WR(e){e.sort((B,t)=>B.score!==t.score?t.score-B.score:$R(B.routesMeta.map(C=>C.childrenIndex),t.routesMeta.map(C=>C.childrenIndex)))}const jR=/^:\w+$/,YR=3,XR=2,ZR=1,qR=10,zR=-2,Hp=e=>e==="*";function _R(e,B){let t=e.split("/"),C=t.length;return t.some(Hp)&&(C+=zR),B&&(C+=XR),t.filter(n=>!Hp(n)).reduce((n,r)=>n+(jR.test(r)?YR:r===""?ZR:qR),C)}function $R(e,B){return e.length===B.length&&e.slice(0,-1).every((C,n)=>C===B[n])?e[e.length-1]-B[B.length-1]:0}function BN(e,B){let{routesMeta:t}=e,C={},n="/",r=[];for(let i=0;i<t.length;++i){let s=t[i],a=i===t.length-1,o=n==="/"?B:B.slice(n.length)||"/",l=eN({path:s.relativePath,caseSensitive:s.caseSensitive,end:a},o);if(!l)return null;Object.assign(C,l.params);let c=s.route;r.push({params:C,pathname:gC([n,l.pathname]),pathnameBase:sN(gC([n,l.pathnameBase])),route:c}),l.pathnameBase!=="/"&&(n=gC([n,l.pathnameBase]))}return r}function eN(e,B){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,C]=tN(e.path,e.caseSensitive,e.end),n=B.match(t);if(!n)return null;let r=n[0],i=r.replace(/(.)\/+$/,"$1"),s=n.slice(1);return{params:C.reduce((o,l,c)=>{if(l==="*"){let u=s[c]||"";i=r.slice(0,r.length-u.length).replace(/(.)\/+$/,"$1")}return o[l]=nN(s[c]||"",l),o},{}),pathname:r,pathnameBase:i,pattern:e}}function tN(e,B,t){B===void 0&&(B=!1),t===void 0&&(t=!0),J1(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let C=[],n="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(i,s)=>(C.push(s),"/([^\\/]+)"));return e.endsWith("*")?(C.push("*"),n+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?n+="\\/*$":e!==""&&e!=="/"&&(n+="(?:(?=\\/|$))"),[new RegExp(n,B?void 0:"i"),C]}function CN(e){try{return decodeURI(e)}catch(B){return J1(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+B+").")),e}}function nN(e,B){try{return decodeURIComponent(e)}catch(t){return J1(!1,'The value for the URL param "'+B+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+t+").")),e}}function V1(e,B){if(B==="/")return e;if(!e.toLowerCase().startsWith(B.toLowerCase()))return null;let t=B.endsWith("/")?B.length-1:B.length,C=e.charAt(t);return C&&C!=="/"?null:e.slice(t)||"/"}function rN(e,B){B===void 0&&(B="/");let{pathname:t,search:C="",hash:n=""}=typeof e=="string"?Dr(e):e;return{pathname:t?t.startsWith("/")?t:iN(t,B):B,search:aN(C),hash:oN(n)}}function iN(e,B){let t=B.replace(/\/+$/,"").split("/");return e.split("/").forEach(n=>{n===".."?t.length>1&&t.pop():n!=="."&&t.push(n)}),t.length>1?t.join("/"):"/"}function Zc(e,B,t,C){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+B+"` field ["+JSON.stringify(C)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ty(e){return e.filter((B,t)=>t===0||B.route.path&&B.route.path.length>0)}function Cy(e,B,t,C){C===void 0&&(C=!1);let n;typeof e=="string"?n=Dr(e):(n=Ji({},e),NB(!n.pathname||!n.pathname.includes("?"),Zc("?","pathname","search",n)),NB(!n.pathname||!n.pathname.includes("#"),Zc("#","pathname","hash",n)),NB(!n.search||!n.search.includes("#"),Zc("#","search","hash",n)));let r=e===""||n.pathname==="",i=r?"/":n.pathname,s;if(C||i==null)s=t;else{let c=B.length-1;if(i.startsWith("..")){let u=i.split("/");for(;u[0]==="..";)u.shift(),c-=1;n.pathname=u.join("/")}s=c>=0?B[c]:"/"}let a=rN(n,s),o=i&&i!=="/"&&i.endsWith("/"),l=(r||i===".")&&t.endsWith("/");return!a.pathname.endsWith("/")&&(o||l)&&(a.pathname+="/"),a}const gC=e=>e.join("/").replace(/\/\/+/g,"/"),sN=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),aN=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,oN=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function lN(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const cN=["post","put","patch","delete"];[...cN];/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xo(){return xo=Object.assign?Object.assign.bind():function(e){for(var B=1;B<arguments.length;B++){var t=arguments[B];for(var C in t)Object.prototype.hasOwnProperty.call(t,C)&&(e[C]=t[C])}return e},xo.apply(this,arguments)}const W1=S.createContext(null),uN=S.createContext(null),Pr=S.createContext(null),xl=S.createContext(null),An=S.createContext({outlet:null,matches:[],isDataRoute:!1}),ny=S.createContext(null);function fN(e,B){let{relative:t}=B===void 0?{}:B;As()||NB(!1);let{basename:C,navigator:n}=S.useContext(Pr),{hash:r,pathname:i,search:s}=iy(e,{relative:t}),a=i;return C!=="/"&&(a=i==="/"?C:gC([C,i])),n.createHref({pathname:a,search:s,hash:r})}function As(){return S.useContext(xl)!=null}function Hl(){return As()||NB(!1),S.useContext(xl).location}function ry(e){S.useContext(Pr).static||S.useLayoutEffect(e)}function dN(){let{isDataRoute:e}=S.useContext(An);return e?DN():hN()}function hN(){As()||NB(!1);let e=S.useContext(W1),{basename:B,navigator:t}=S.useContext(Pr),{matches:C}=S.useContext(An),{pathname:n}=Hl(),r=JSON.stringify(ty(C).map(a=>a.pathnameBase)),i=S.useRef(!1);return ry(()=>{i.current=!0}),S.useCallback(function(a,o){if(o===void 0&&(o={}),!i.current)return;if(typeof a=="number"){t.go(a);return}let l=Cy(a,JSON.parse(r),n,o.relative==="path");e==null&&B!=="/"&&(l.pathname=l.pathname==="/"?B:gC([B,l.pathname])),(o.replace?t.replace:t.push)(l,o.state,o)},[B,t,r,n,e])}function iy(e,B){let{relative:t}=B===void 0?{}:B,{matches:C}=S.useContext(An),{pathname:n}=Hl(),r=JSON.stringify(ty(C).map(i=>i.pathnameBase));return S.useMemo(()=>Cy(e,JSON.parse(r),n,t==="path"),[e,r,n,t])}function pN(e,B){return mN(e,B)}function mN(e,B,t){As()||NB(!1);let{navigator:C}=S.useContext(Pr),{matches:n}=S.useContext(An),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let s=r?r.pathnameBase:"/";r&&r.route;let a=Hl(),o;if(B){var l;let m=typeof B=="string"?Dr(B):B;s==="/"||(l=m.pathname)!=null&&l.startsWith(s)||NB(!1),o=m}else o=a;let c=o.pathname||"/",u=s==="/"?c:c.slice(s.length)||"/",g=VR(e,{pathname:u}),f=EN(g&&g.map(m=>Object.assign({},m,{params:Object.assign({},i,m.params),pathname:gC([s,C.encodeLocation?C.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?s:gC([s,C.encodeLocation?C.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),n,t);return B&&f?S.createElement(xl.Provider,{value:{location:xo({pathname:"/",search:"",hash:"",state:null,key:"default"},o),navigationType:aC.Pop}},f):f}function gN(){let e=wN(),B=lN(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,n={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},r=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},B),t?S.createElement("pre",{style:n},t):null,r)}const vN=S.createElement(gN,null);class AN extends S.Component{constructor(B){super(B),this.state={location:B.location,revalidation:B.revalidation,error:B.error}}static getDerivedStateFromError(B){return{error:B}}static getDerivedStateFromProps(B,t){return t.location!==B.location||t.revalidation!=="idle"&&B.revalidation==="idle"?{error:B.error,location:B.location,revalidation:B.revalidation}:{error:B.error||t.error,location:t.location,revalidation:B.revalidation||t.revalidation}}componentDidCatch(B,t){console.error("React Router caught the following error during render",B,t)}render(){return this.state.error?S.createElement(An.Provider,{value:this.props.routeContext},S.createElement(ny.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function yN(e){let{routeContext:B,match:t,children:C}=e,n=S.useContext(W1);return n&&n.static&&n.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=t.route.id),S.createElement(An.Provider,{value:B},C)}function EN(e,B,t){var C;if(B===void 0&&(B=[]),t===void 0&&(t=null),e==null){var n;if((n=t)!=null&&n.errors)e=t.matches;else return null}let r=e,i=(C=t)==null?void 0:C.errors;if(i!=null){let s=r.findIndex(a=>a.route.id&&(i==null?void 0:i[a.route.id]));s>=0||NB(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,a,o)=>{let l=a.route.id?i==null?void 0:i[a.route.id]:null,c=null;t&&(c=a.route.errorElement||vN);let u=B.concat(r.slice(0,o+1)),g=()=>{let f;return l?f=c:a.route.Component?f=S.createElement(a.route.Component,null):a.route.element?f=a.route.element:f=s,S.createElement(yN,{match:a,routeContext:{outlet:s,matches:u,isDataRoute:t!=null},children:f})};return t&&(a.route.ErrorBoundary||a.route.errorElement||o===0)?S.createElement(AN,{location:t.location,revalidation:t.revalidation,component:c,error:l,children:g(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):g()},null)}var Hf;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(Hf||(Hf={}));var Vi;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(Vi||(Vi={}));function SN(e){let B=S.useContext(W1);return B||NB(!1),B}function IN(e){let B=S.useContext(uN);return B||NB(!1),B}function bN(e){let B=S.useContext(An);return B||NB(!1),B}function sy(e){let B=bN(),t=B.matches[B.matches.length-1];return t.route.id||NB(!1),t.route.id}function wN(){var e;let B=S.useContext(ny),t=IN(Vi.UseRouteError),C=sy(Vi.UseRouteError);return B||((e=t.errors)==null?void 0:e[C])}function DN(){let{router:e}=SN(Hf.UseNavigateStable),B=sy(Vi.UseNavigateStable),t=S.useRef(!1);return ry(()=>{t.current=!0}),S.useCallback(function(n,r){r===void 0&&(r={}),t.current&&(typeof n=="number"?e.navigate(n):e.navigate(n,xo({fromRouteId:B},r)))},[e,B])}function Gf(e){NB(!1)}function PN(e){let{basename:B="/",children:t=null,location:C,navigationType:n=aC.Pop,navigator:r,static:i=!1}=e;As()&&NB(!1);let s=B.replace(/^\/*/,"/"),a=S.useMemo(()=>({basename:s,navigator:r,static:i}),[s,r,i]);typeof C=="string"&&(C=Dr(C));let{pathname:o="/",search:l="",hash:c="",state:u=null,key:g="default"}=C,f=S.useMemo(()=>{let m=V1(o,s);return m==null?null:{location:{pathname:m,search:l,hash:c,state:u,key:g},navigationType:n}},[s,o,l,c,u,g,n]);return f==null?null:S.createElement(Pr.Provider,{value:a},S.createElement(xl.Provider,{children:t,value:f}))}function RN(e){let{children:B,location:t}=e;return pN(Kf(B),t)}var Gp;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Gp||(Gp={}));new Promise(()=>{});function Kf(e,B){B===void 0&&(B=[]);let t=[];return S.Children.forEach(e,(C,n)=>{if(!S.isValidElement(C))return;let r=[...B,n];if(C.type===S.Fragment){t.push.apply(t,Kf(C.props.children,r));return}C.type!==Gf&&NB(!1),!C.props.index||!C.props.children||NB(!1);let i={id:C.props.id||r.join("-"),caseSensitive:C.props.caseSensitive,element:C.props.element,Component:C.props.Component,index:C.props.index,path:C.props.path,loader:C.props.loader,action:C.props.action,errorElement:C.props.errorElement,ErrorBoundary:C.props.ErrorBoundary,hasErrorBoundary:C.props.ErrorBoundary!=null||C.props.errorElement!=null,shouldRevalidate:C.props.shouldRevalidate,handle:C.props.handle,lazy:C.props.lazy};C.props.children&&(i.children=Kf(C.props.children,r)),t.push(i)}),t}/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Uf(){return Uf=Object.assign?Object.assign.bind():function(e){for(var B=1;B<arguments.length;B++){var t=arguments[B];for(var C in t)Object.prototype.hasOwnProperty.call(t,C)&&(e[C]=t[C])}return e},Uf.apply(this,arguments)}function NN(e,B){if(e==null)return{};var t={},C=Object.keys(e),n,r;for(r=0;r<C.length;r++)n=C[r],!(B.indexOf(n)>=0)&&(t[n]=e[n]);return t}function FN(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ON(e,B){return e.button===0&&(!B||B==="_self")&&!FN(e)}const kN=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],TN="startTransition",Kp=N3[TN];function MN(e){let{basename:B,children:t,future:C,window:n}=e,r=S.useRef();r.current==null&&(r.current=UR({window:n,v5Compat:!0}));let i=r.current,[s,a]=S.useState({action:i.action,location:i.location}),{v7_startTransition:o}=C||{},l=S.useCallback(c=>{o&&Kp?Kp(()=>a(c)):a(c)},[a,o]);return S.useLayoutEffect(()=>i.listen(l),[i,l]),S.createElement(PN,{basename:B,children:t,location:s.location,navigationType:s.action,navigator:i})}const LN=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",xN=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,HN=S.forwardRef(function(B,t){let{onClick:C,relative:n,reloadDocument:r,replace:i,state:s,target:a,to:o,preventScrollReset:l}=B,c=NN(B,kN),{basename:u}=S.useContext(Pr),g,f=!1;if(typeof o=="string"&&xN.test(o)&&(g=o,LN))try{let h=new URL(window.location.href),v=o.startsWith("//")?new URL(h.protocol+o):new URL(o),A=V1(v.pathname,u);v.origin===h.origin&&A!=null?o=A+v.search+v.hash:f=!0}catch{}let m=fN(o,{relative:n}),p=GN(o,{replace:i,state:s,target:a,preventScrollReset:l,relative:n});function d(h){C&&C(h),h.defaultPrevented||p(h)}return S.createElement("a",Uf({},c,{href:g||m,onClick:f||r?C:d,ref:t,target:a}))});var Up;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Up||(Up={}));var Qp;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Qp||(Qp={}));function GN(e,B){let{target:t,replace:C,state:n,preventScrollReset:r,relative:i}=B===void 0?{}:B,s=dN(),a=Hl(),o=iy(e,{relative:i});return S.useCallback(l=>{if(ON(l,t)){l.preventDefault();let c=C!==void 0?C:Lo(a)===Lo(o);s(e,{replace:c,state:n,preventScrollReset:r,relative:i})}},[a,s,o,C,n,t,e,r,i])}const KN=()=>X("div",{children:[P("h1",{children:"About Page"}),P("p",{children:"This is the about page for our website."})]}),Jp={waves:"#F3F4F3","dark-waves":"#9E9A98",grainy:"#AC8B5D",bland:"#917E7A","dark-bland":"#3A3743"},UN=[15,30,45,60,75],QN=1e3;function ay(){document.querySelectorAll(".circle").forEach((B,t)=>{const C=10*Math.sin(Date.now()/QN+t);B.style.transform=`translateY(${C+110}px)`}),requestAnimationFrame(ay)}ay();const jr=({color:e,position:B})=>P("div",{className:"circle",style:{width:"50px",height:"50px",borderRadius:"50%",background:`radial-gradient(circle, ${Jp[e]}, ${Jp[e]})`,position:"absolute",left:UN[B]+"%",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0), 0 12px 20px 0 rgba(0, 0, 0, 0.5)"}}),JN=()=>X("div",{style:{position:"relative"},children:[P(jr,{color:"waves",position:0}),P(jr,{color:"dark-waves",position:1}),P(jr,{color:"grainy",position:2}),P(jr,{color:"bland",position:3}),P(jr,{color:"dark-bland",position:4})]});/**
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
 */const oy={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const R=function(e,B){if(!e)throw Rr(B)},Rr=function(e){return new Error("Firebase Database ("+oy.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
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
 */const ly=function(e){const B=[];let t=0;for(let C=0;C<e.length;C++){let n=e.charCodeAt(C);n<128?B[t++]=n:n<2048?(B[t++]=n>>6|192,B[t++]=n&63|128):(n&64512)===55296&&C+1<e.length&&(e.charCodeAt(C+1)&64512)===56320?(n=65536+((n&1023)<<10)+(e.charCodeAt(++C)&1023),B[t++]=n>>18|240,B[t++]=n>>12&63|128,B[t++]=n>>6&63|128,B[t++]=n&63|128):(B[t++]=n>>12|224,B[t++]=n>>6&63|128,B[t++]=n&63|128)}return B},VN=function(e){const B=[];let t=0,C=0;for(;t<e.length;){const n=e[t++];if(n<128)B[C++]=String.fromCharCode(n);else if(n>191&&n<224){const r=e[t++];B[C++]=String.fromCharCode((n&31)<<6|r&63)}else if(n>239&&n<365){const r=e[t++],i=e[t++],s=e[t++],a=((n&7)<<18|(r&63)<<12|(i&63)<<6|s&63)-65536;B[C++]=String.fromCharCode(55296+(a>>10)),B[C++]=String.fromCharCode(56320+(a&1023))}else{const r=e[t++],i=e[t++];B[C++]=String.fromCharCode((n&15)<<12|(r&63)<<6|i&63)}}return B.join("")},j1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,B){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=B?this.byteToCharMapWebSafe_:this.byteToCharMap_,C=[];for(let n=0;n<e.length;n+=3){const r=e[n],i=n+1<e.length,s=i?e[n+1]:0,a=n+2<e.length,o=a?e[n+2]:0,l=r>>2,c=(r&3)<<4|s>>4;let u=(s&15)<<2|o>>6,g=o&63;a||(g=64,i||(u=64)),C.push(t[l],t[c],t[u],t[g])}return C.join("")},encodeString(e,B){return this.HAS_NATIVE_SUPPORT&&!B?btoa(e):this.encodeByteArray(ly(e),B)},decodeString(e,B){return this.HAS_NATIVE_SUPPORT&&!B?atob(e):VN(this.decodeStringToByteArray(e,B))},decodeStringToByteArray(e,B){this.init_();const t=B?this.charToByteMapWebSafe_:this.charToByteMap_,C=[];for(let n=0;n<e.length;){const r=t[e.charAt(n++)],s=n<e.length?t[e.charAt(n)]:0;++n;const o=n<e.length?t[e.charAt(n)]:64;++n;const c=n<e.length?t[e.charAt(n)]:64;if(++n,r==null||s==null||o==null||c==null)throw new WN;const u=r<<2|s>>4;if(C.push(u),o!==64){const g=s<<4&240|o>>2;if(C.push(g),c!==64){const f=o<<6&192|c;C.push(f)}}}return C},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class WN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cy=function(e){const B=ly(e);return j1.encodeByteArray(B,!0)},Ho=function(e){return cy(e).replace(/\./g,"")},Go=function(e){try{return j1.decodeString(e,!0)}catch(B){console.error("base64Decode failed: ",B)}return null};/**
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
 */function jN(e){return uy(void 0,e)}function uy(e,B){if(!(B instanceof Object))return B;switch(B.constructor){case Date:const t=B;return new Date(t.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return B}for(const t in B)!B.hasOwnProperty(t)||!YN(t)||(e[t]=uy(e[t],B[t]));return e}function YN(e){return e!=="__proto__"}/**
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
 */function XN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ZN=()=>XN().__FIREBASE_DEFAULTS__,qN=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},zN=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const B=e&&Go(e[1]);return B&&JSON.parse(B)},Y1=()=>{try{return ZN()||qN()||zN()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},fy=e=>{var B,t;return(t=(B=Y1())===null||B===void 0?void 0:B.emulatorHosts)===null||t===void 0?void 0:t[e]},_N=e=>{const B=fy(e);if(!B)return;const t=B.lastIndexOf(":");if(t<=0||t+1===B.length)throw new Error(`Invalid host ${B} with no separate hostname and port!`);const C=parseInt(B.substring(t+1),10);return B[0]==="["?[B.substring(1,t-1),C]:[B.substring(0,t),C]},dy=()=>{var e;return(e=Y1())===null||e===void 0?void 0:e.config},hy=e=>{var B;return(B=Y1())===null||B===void 0?void 0:B[`_${e}`]};/**
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
 */class Gl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((B,t)=>{this.resolve=B,this.reject=t})}wrapCallback(B){return(t,C)=>{t?this.reject(t):this.resolve(C),typeof B=="function"&&(this.promise.catch(()=>{}),B.length===1?B(t):B(t,C))}}}/**
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
 */function $N(e,B){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},C=B||"demo-project",n=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${C}`,aud:C,iat:n,exp:n+3600,auth_time:n,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),s="";return[Ho(JSON.stringify(t)),Ho(JSON.stringify(i)),s].join(".")}/**
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
 */function Be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function X1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function py(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function my(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function BF(){const e=Be();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function gy(){return oy.NODE_ADMIN===!0}function vy(){try{return typeof indexedDB=="object"}catch{return!1}}function Ay(){return new Promise((e,B)=>{try{let t=!0;const C="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(C);n.onsuccess=()=>{n.result.close(),t||self.indexedDB.deleteDatabase(C),e(!0)},n.onupgradeneeded=()=>{t=!1},n.onerror=()=>{var r;B(((r=n.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){B(t)}})}function eF(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const tF="FirebaseError";class yt extends Error{constructor(B,t,C){super(t),this.code=B,this.customData=C,this.name=tF,Object.setPrototypeOf(this,yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yn.prototype.create)}}class yn{constructor(B,t,C){this.service=B,this.serviceName=t,this.errors=C}create(B,...t){const C=t[0]||{},n=`${this.service}/${B}`,r=this.errors[B],i=r?CF(r,C):"Error",s=`${this.serviceName}: ${i} (${n}).`;return new yt(n,s,C)}}function CF(e,B){return e.replace(nF,(t,C)=>{const n=B[C];return n!=null?String(n):`<${C}?>`})}const nF=/\{\$([^}]+)}/g;/**
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
 */function Wi(e){return JSON.parse(e)}function kB(e){return JSON.stringify(e)}/**
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
 */const yy=function(e){let B={},t={},C={},n="";try{const r=e.split(".");B=Wi(Go(r[0])||""),t=Wi(Go(r[1])||""),n=r[2],C=t.d||{},delete t.d}catch{}return{header:B,claims:t,data:C,signature:n}},rF=function(e){const B=yy(e),t=B.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},iF=function(e){const B=yy(e).claims;return typeof B=="object"&&B.admin===!0};/**
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
 */function Vt(e,B){return Object.prototype.hasOwnProperty.call(e,B)}function hr(e,B){if(Object.prototype.hasOwnProperty.call(e,B))return e[B]}function Qf(e){for(const B in e)if(Object.prototype.hasOwnProperty.call(e,B))return!1;return!0}function Ko(e,B,t){const C={};for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(C[n]=B.call(t,e[n],n,e));return C}function ji(e,B){if(e===B)return!0;const t=Object.keys(e),C=Object.keys(B);for(const n of t){if(!C.includes(n))return!1;const r=e[n],i=B[n];if(Vp(r)&&Vp(i)){if(!ji(r,i))return!1}else if(r!==i)return!1}for(const n of C)if(!t.includes(n))return!1;return!0}function Vp(e){return e!==null&&typeof e=="object"}/**
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
 */function Nr(e){const B=[];for(const[t,C]of Object.entries(e))Array.isArray(C)?C.forEach(n=>{B.push(encodeURIComponent(t)+"="+encodeURIComponent(n))}):B.push(encodeURIComponent(t)+"="+encodeURIComponent(C));return B.length?"&"+B.join("&"):""}/**
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
 */class sF{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let B=1;B<this.blockSize;++B)this.pad_[B]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(B,t){t||(t=0);const C=this.W_;if(typeof B=="string")for(let c=0;c<16;c++)C[c]=B.charCodeAt(t)<<24|B.charCodeAt(t+1)<<16|B.charCodeAt(t+2)<<8|B.charCodeAt(t+3),t+=4;else for(let c=0;c<16;c++)C[c]=B[t]<<24|B[t+1]<<16|B[t+2]<<8|B[t+3],t+=4;for(let c=16;c<80;c++){const u=C[c-3]^C[c-8]^C[c-14]^C[c-16];C[c]=(u<<1|u>>>31)&4294967295}let n=this.chain_[0],r=this.chain_[1],i=this.chain_[2],s=this.chain_[3],a=this.chain_[4],o,l;for(let c=0;c<80;c++){c<40?c<20?(o=s^r&(i^s),l=1518500249):(o=r^i^s,l=1859775393):c<60?(o=r&i|s&(r|i),l=2400959708):(o=r^i^s,l=3395469782);const u=(n<<5|n>>>27)+o+a+l+C[c]&4294967295;a=s,s=i,i=(r<<30|r>>>2)&4294967295,r=n,n=u}this.chain_[0]=this.chain_[0]+n&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+i&4294967295,this.chain_[3]=this.chain_[3]+s&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(B,t){if(B==null)return;t===void 0&&(t=B.length);const C=t-this.blockSize;let n=0;const r=this.buf_;let i=this.inbuf_;for(;n<t;){if(i===0)for(;n<=C;)this.compress_(B,n),n+=this.blockSize;if(typeof B=="string"){for(;n<t;)if(r[i]=B.charCodeAt(n),++i,++n,i===this.blockSize){this.compress_(r),i=0;break}}else for(;n<t;)if(r[i]=B[n],++i,++n,i===this.blockSize){this.compress_(r),i=0;break}}this.inbuf_=i,this.total_+=t}digest(){const B=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let n=this.blockSize-1;n>=56;n--)this.buf_[n]=t&255,t/=256;this.compress_(this.buf_);let C=0;for(let n=0;n<5;n++)for(let r=24;r>=0;r-=8)B[C]=this.chain_[n]>>r&255,++C;return B}}function aF(e,B){const t=new oF(e,B);return t.subscribe.bind(t)}class oF{constructor(B,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{B(this)}).catch(C=>{this.error(C)})}next(B){this.forEachObserver(t=>{t.next(B)})}error(B){this.forEachObserver(t=>{t.error(B)}),this.close(B)}complete(){this.forEachObserver(B=>{B.complete()}),this.close()}subscribe(B,t,C){let n;if(B===void 0&&t===void 0&&C===void 0)throw new Error("Missing Observer.");lF(B,["next","error","complete"])?n=B:n={next:B,error:t,complete:C},n.next===void 0&&(n.next=qc),n.error===void 0&&(n.error=qc),n.complete===void 0&&(n.complete=qc);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch{}}),this.observers.push(n),r}unsubscribeOne(B){this.observers===void 0||this.observers[B]===void 0||(delete this.observers[B],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(B){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,B)}sendOne(B,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[B]!==void 0)try{t(this.observers[B])}catch(C){typeof console<"u"&&console.error&&console.error(C)}})}close(B){this.finalized||(this.finalized=!0,B!==void 0&&(this.finalError=B),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lF(e,B){if(typeof e!="object"||e===null)return!1;for(const t of B)if(t in e&&typeof e[t]=="function")return!0;return!1}function qc(){}function Z1(e,B){return`${e} failed: ${B} argument `}/**
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
 */const cF=function(e){const B=[];let t=0;for(let C=0;C<e.length;C++){let n=e.charCodeAt(C);if(n>=55296&&n<=56319){const r=n-55296;C++,R(C<e.length,"Surrogate pair missing trail surrogate.");const i=e.charCodeAt(C)-56320;n=65536+(r<<10)+i}n<128?B[t++]=n:n<2048?(B[t++]=n>>6|192,B[t++]=n&63|128):n<65536?(B[t++]=n>>12|224,B[t++]=n>>6&63|128,B[t++]=n&63|128):(B[t++]=n>>18|240,B[t++]=n>>12&63|128,B[t++]=n>>6&63|128,B[t++]=n&63|128)}return B},Kl=function(e){let B=0;for(let t=0;t<e.length;t++){const C=e.charCodeAt(t);C<128?B++:C<2048?B+=2:C>=55296&&C<=56319?(B+=4,t++):B+=3}return B};/**
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
 */const uF=1e3,fF=2,dF=4*60*60*1e3,hF=.5;function Wp(e,B=uF,t=fF){const C=B*Math.pow(t,e),n=Math.round(hF*C*(Math.random()-.5)*2);return Math.min(dF,C+n)}/**
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
 */function Ee(e){return e&&e._delegate?e._delegate:e}class nt{constructor(B,t,C){this.name=B,this.instanceFactory=t,this.type=C,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(B){return this.instantiationMode=B,this}setMultipleInstances(B){return this.multipleInstances=B,this}setServiceProps(B){return this.serviceProps=B,this}setInstanceCreatedCallback(B){return this.onInstanceCreated=B,this}}/**
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
 */const KC="[DEFAULT]";/**
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
 */class pF{constructor(B,t){this.name=B,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(B){const t=this.normalizeInstanceIdentifier(B);if(!this.instancesDeferred.has(t)){const C=new Gl;if(this.instancesDeferred.set(t,C),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&C.resolve(n)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(B){var t;const C=this.normalizeInstanceIdentifier(B==null?void 0:B.identifier),n=(t=B==null?void 0:B.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(C)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:C})}catch(r){if(n)return null;throw r}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(B){if(B.name!==this.name)throw Error(`Mismatching Component ${B.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=B,!!this.shouldAutoInitialize()){if(gF(B))try{this.getOrInitializeService({instanceIdentifier:KC})}catch{}for(const[t,C]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:n});C.resolve(r)}catch{}}}}clearInstance(B=KC){this.instancesDeferred.delete(B),this.instancesOptions.delete(B),this.instances.delete(B)}async delete(){const B=Array.from(this.instances.values());await Promise.all([...B.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...B.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(B=KC){return this.instances.has(B)}getOptions(B=KC){return this.instancesOptions.get(B)||{}}initialize(B={}){const{options:t={}}=B,C=this.normalizeInstanceIdentifier(B.instanceIdentifier);if(this.isInitialized(C))throw Error(`${this.name}(${C}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:C,options:t});for(const[r,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(r);C===s&&i.resolve(n)}return n}onInit(B,t){var C;const n=this.normalizeInstanceIdentifier(t),r=(C=this.onInitCallbacks.get(n))!==null&&C!==void 0?C:new Set;r.add(B),this.onInitCallbacks.set(n,r);const i=this.instances.get(n);return i&&B(i,n),()=>{r.delete(B)}}invokeOnInitCallbacks(B,t){const C=this.onInitCallbacks.get(t);if(C)for(const n of C)try{n(B,t)}catch{}}getOrInitializeService({instanceIdentifier:B,options:t={}}){let C=this.instances.get(B);if(!C&&this.component&&(C=this.component.instanceFactory(this.container,{instanceIdentifier:mF(B),options:t}),this.instances.set(B,C),this.instancesOptions.set(B,t),this.invokeOnInitCallbacks(C,B),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,B,C)}catch{}return C||null}normalizeInstanceIdentifier(B=KC){return this.component?this.component.multipleInstances?B:KC:B}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mF(e){return e===KC?void 0:e}function gF(e){return e.instantiationMode==="EAGER"}/**
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
 */class vF{constructor(B){this.name=B,this.providers=new Map}addComponent(B){const t=this.getProvider(B.name);if(t.isComponentSet())throw new Error(`Component ${B.name} has already been registered with ${this.name}`);t.setComponent(B)}addOrOverwriteComponent(B){this.getProvider(B.name).isComponentSet()&&this.providers.delete(B.name),this.addComponent(B)}getProvider(B){if(this.providers.has(B))return this.providers.get(B);const t=new pF(B,this);return this.providers.set(B,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var iB;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(iB||(iB={}));const AF={debug:iB.DEBUG,verbose:iB.VERBOSE,info:iB.INFO,warn:iB.WARN,error:iB.ERROR,silent:iB.SILENT},yF=iB.INFO,EF={[iB.DEBUG]:"log",[iB.VERBOSE]:"log",[iB.INFO]:"info",[iB.WARN]:"warn",[iB.ERROR]:"error"},SF=(e,B,...t)=>{if(B<e.logLevel)return;const C=new Date().toISOString(),n=EF[B];if(n)console[n](`[${C}]  ${e.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${B})`)};class Ul{constructor(B){this.name=B,this._logLevel=yF,this._logHandler=SF,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(B){if(!(B in iB))throw new TypeError(`Invalid value "${B}" assigned to \`logLevel\``);this._logLevel=B}setLogLevel(B){this._logLevel=typeof B=="string"?AF[B]:B}get logHandler(){return this._logHandler}set logHandler(B){if(typeof B!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=B}get userLogHandler(){return this._userLogHandler}set userLogHandler(B){this._userLogHandler=B}debug(...B){this._userLogHandler&&this._userLogHandler(this,iB.DEBUG,...B),this._logHandler(this,iB.DEBUG,...B)}log(...B){this._userLogHandler&&this._userLogHandler(this,iB.VERBOSE,...B),this._logHandler(this,iB.VERBOSE,...B)}info(...B){this._userLogHandler&&this._userLogHandler(this,iB.INFO,...B),this._logHandler(this,iB.INFO,...B)}warn(...B){this._userLogHandler&&this._userLogHandler(this,iB.WARN,...B),this._logHandler(this,iB.WARN,...B)}error(...B){this._userLogHandler&&this._userLogHandler(this,iB.ERROR,...B),this._logHandler(this,iB.ERROR,...B)}}const IF=(e,B)=>B.some(t=>e instanceof t);let jp,Yp;function bF(){return jp||(jp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wF(){return Yp||(Yp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ey=new WeakMap,Jf=new WeakMap,Sy=new WeakMap,zc=new WeakMap,q1=new WeakMap;function DF(e){const B=new Promise((t,C)=>{const n=()=>{e.removeEventListener("success",r),e.removeEventListener("error",i)},r=()=>{t(vC(e.result)),n()},i=()=>{C(e.error),n()};e.addEventListener("success",r),e.addEventListener("error",i)});return B.then(t=>{t instanceof IDBCursor&&Ey.set(t,e)}).catch(()=>{}),q1.set(B,e),B}function PF(e){if(Jf.has(e))return;const B=new Promise((t,C)=>{const n=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",i),e.removeEventListener("abort",i)},r=()=>{t(),n()},i=()=>{C(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",r),e.addEventListener("error",i),e.addEventListener("abort",i)});Jf.set(e,B)}let Vf={get(e,B,t){if(e instanceof IDBTransaction){if(B==="done")return Jf.get(e);if(B==="objectStoreNames")return e.objectStoreNames||Sy.get(e);if(B==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return vC(e[B])},set(e,B,t){return e[B]=t,!0},has(e,B){return e instanceof IDBTransaction&&(B==="done"||B==="store")?!0:B in e}};function RF(e){Vf=e(Vf)}function NF(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(B,...t){const C=e.call(_c(this),B,...t);return Sy.set(C,B.sort?B.sort():[B]),vC(C)}:wF().includes(e)?function(...B){return e.apply(_c(this),B),vC(Ey.get(this))}:function(...B){return vC(e.apply(_c(this),B))}}function FF(e){return typeof e=="function"?NF(e):(e instanceof IDBTransaction&&PF(e),IF(e,bF())?new Proxy(e,Vf):e)}function vC(e){if(e instanceof IDBRequest)return DF(e);if(zc.has(e))return zc.get(e);const B=FF(e);return B!==e&&(zc.set(e,B),q1.set(B,e)),B}const _c=e=>q1.get(e);function OF(e,B,{blocked:t,upgrade:C,blocking:n,terminated:r}={}){const i=indexedDB.open(e,B),s=vC(i);return C&&i.addEventListener("upgradeneeded",a=>{C(vC(i.result),a.oldVersion,a.newVersion,vC(i.transaction),a)}),t&&i.addEventListener("blocked",a=>t(a.oldVersion,a.newVersion,a)),s.then(a=>{r&&a.addEventListener("close",()=>r()),n&&a.addEventListener("versionchange",o=>n(o.oldVersion,o.newVersion,o))}).catch(()=>{}),s}const kF=["get","getKey","getAll","getAllKeys","count"],TF=["put","add","delete","clear"],$c=new Map;function Xp(e,B){if(!(e instanceof IDBDatabase&&!(B in e)&&typeof B=="string"))return;if($c.get(B))return $c.get(B);const t=B.replace(/FromIndex$/,""),C=B!==t,n=TF.includes(t);if(!(t in(C?IDBIndex:IDBObjectStore).prototype)||!(n||kF.includes(t)))return;const r=async function(i,...s){const a=this.transaction(i,n?"readwrite":"readonly");let o=a.store;return C&&(o=o.index(s.shift())),(await Promise.all([o[t](...s),n&&a.done]))[0]};return $c.set(B,r),r}RF(e=>({...e,get:(B,t,C)=>Xp(B,t)||e.get(B,t,C),has:(B,t)=>!!Xp(B,t)||e.has(B,t)}));/**
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
 */class MF{constructor(B){this.container=B}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(LF(t)){const C=t.getImmediate();return`${C.library}/${C.version}`}else return null}).filter(t=>t).join(" ")}}function LF(e){const B=e.getComponent();return(B==null?void 0:B.type)==="VERSION"}const Wf="@firebase/app",Zp="0.9.13";/**
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
 */const an=new Ul("@firebase/app"),xF="@firebase/app-compat",HF="@firebase/analytics-compat",GF="@firebase/analytics",KF="@firebase/app-check-compat",UF="@firebase/app-check",QF="@firebase/auth",JF="@firebase/auth-compat",VF="@firebase/database",WF="@firebase/database-compat",jF="@firebase/functions",YF="@firebase/functions-compat",XF="@firebase/installations",ZF="@firebase/installations-compat",qF="@firebase/messaging",zF="@firebase/messaging-compat",_F="@firebase/performance",$F="@firebase/performance-compat",BO="@firebase/remote-config",eO="@firebase/remote-config-compat",tO="@firebase/storage",CO="@firebase/storage-compat",nO="@firebase/firestore",rO="@firebase/firestore-compat",iO="firebase",sO="9.23.0";/**
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
 */const jf="[DEFAULT]",aO={[Wf]:"fire-core",[xF]:"fire-core-compat",[GF]:"fire-analytics",[HF]:"fire-analytics-compat",[UF]:"fire-app-check",[KF]:"fire-app-check-compat",[QF]:"fire-auth",[JF]:"fire-auth-compat",[VF]:"fire-rtdb",[WF]:"fire-rtdb-compat",[jF]:"fire-fn",[YF]:"fire-fn-compat",[XF]:"fire-iid",[ZF]:"fire-iid-compat",[qF]:"fire-fcm",[zF]:"fire-fcm-compat",[_F]:"fire-perf",[$F]:"fire-perf-compat",[BO]:"fire-rc",[eO]:"fire-rc-compat",[tO]:"fire-gcs",[CO]:"fire-gcs-compat",[nO]:"fire-fst",[rO]:"fire-fst-compat","fire-js":"fire-js",[iO]:"fire-js-all"};/**
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
 */const Uo=new Map,Yf=new Map;function oO(e,B){try{e.container.addComponent(B)}catch(t){an.debug(`Component ${B.name} failed to register with FirebaseApp ${e.name}`,t)}}function pt(e){const B=e.name;if(Yf.has(B))return an.debug(`There were multiple attempts to register component ${B}.`),!1;Yf.set(B,e);for(const t of Uo.values())oO(t,e);return!0}function En(e,B){const t=e.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),e.container.getProvider(B)}/**
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
 */const lO={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},AC=new yn("app","Firebase",lO);/**
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
 */class cO{constructor(B,t,C){this._isDeleted=!1,this._options=Object.assign({},B),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=C,this.container.addComponent(new nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(B){this.checkDestroyed(),this._automaticDataCollectionEnabled=B}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(B){this._isDeleted=B}checkDestroyed(){if(this.isDeleted)throw AC.create("app-deleted",{appName:this._name})}}/**
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
 */const Fr=sO;function Ql(e,B={}){let t=e;typeof B!="object"&&(B={name:B});const C=Object.assign({name:jf,automaticDataCollectionEnabled:!1},B),n=C.name;if(typeof n!="string"||!n)throw AC.create("bad-app-name",{appName:String(n)});if(t||(t=dy()),!t)throw AC.create("no-options");const r=Uo.get(n);if(r){if(ji(t,r.options)&&ji(C,r.config))return r;throw AC.create("duplicate-app",{appName:n})}const i=new vF(n);for(const a of Yf.values())i.addComponent(a);const s=new cO(t,C,i);return Uo.set(n,s),s}function z1(e=jf){const B=Uo.get(e);if(!B&&e===jf&&dy())return Ql();if(!B)throw AC.create("no-app",{appName:e});return B}function Ke(e,B,t){var C;let n=(C=aO[e])!==null&&C!==void 0?C:e;t&&(n+=`-${t}`);const r=n.match(/\s|\//),i=B.match(/\s|\//);if(r||i){const s=[`Unable to register library "${n}" with version "${B}":`];r&&s.push(`library name "${n}" contains illegal characters (whitespace or "/")`),r&&i&&s.push("and"),i&&s.push(`version name "${B}" contains illegal characters (whitespace or "/")`),an.warn(s.join(" "));return}pt(new nt(`${n}-version`,()=>({library:n,version:B}),"VERSION"))}/**
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
 */const uO="firebase-heartbeat-database",fO=1,Yi="firebase-heartbeat-store";let Bu=null;function Iy(){return Bu||(Bu=OF(uO,fO,{upgrade:(e,B)=>{switch(B){case 0:e.createObjectStore(Yi)}}}).catch(e=>{throw AC.create("idb-open",{originalErrorMessage:e.message})})),Bu}async function dO(e){try{return await(await Iy()).transaction(Yi).objectStore(Yi).get(by(e))}catch(B){if(B instanceof yt)an.warn(B.message);else{const t=AC.create("idb-get",{originalErrorMessage:B==null?void 0:B.message});an.warn(t.message)}}}async function qp(e,B){try{const C=(await Iy()).transaction(Yi,"readwrite");await C.objectStore(Yi).put(B,by(e)),await C.done}catch(t){if(t instanceof yt)an.warn(t.message);else{const C=AC.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});an.warn(C.message)}}}function by(e){return`${e.name}!${e.options.appId}`}/**
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
 */const hO=1024,pO=30*24*60*60*1e3;class mO{constructor(B){this.container=B,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new vO(t),this._heartbeatsCachePromise=this._storage.read().then(C=>(this._heartbeatsCache=C,C))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),C=zp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===C||this._heartbeatsCache.heartbeats.some(n=>n.date===C)))return this._heartbeatsCache.heartbeats.push({date:C,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(n=>{const r=new Date(n.date).valueOf();return Date.now()-r<=pO}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const B=zp(),{heartbeatsToSend:t,unsentEntries:C}=gO(this._heartbeatsCache.heartbeats),n=Ho(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=B,C.length>0?(this._heartbeatsCache.heartbeats=C,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function zp(){return new Date().toISOString().substring(0,10)}function gO(e,B=hO){const t=[];let C=e.slice();for(const n of e){const r=t.find(i=>i.agent===n.agent);if(r){if(r.dates.push(n.date),_p(t)>B){r.dates.pop();break}}else if(t.push({agent:n.agent,dates:[n.date]}),_p(t)>B){t.pop();break}C=C.slice(1)}return{heartbeatsToSend:t,unsentEntries:C}}class vO{constructor(B){this.app=B,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vy()?Ay().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await dO(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(B){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return qp(this.app,{lastSentHeartbeatDate:(t=B.lastSentHeartbeatDate)!==null&&t!==void 0?t:n.lastSentHeartbeatDate,heartbeats:B.heartbeats})}else return}async add(B){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return qp(this.app,{lastSentHeartbeatDate:(t=B.lastSentHeartbeatDate)!==null&&t!==void 0?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...B.heartbeats]})}else return}}function _p(e){return Ho(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function AO(e){pt(new nt("platform-logger",B=>new MF(B),"PRIVATE")),pt(new nt("heartbeat",B=>new mO(B),"PRIVATE")),Ke(Wf,Zp,e),Ke(Wf,Zp,"esm2017"),Ke("fire-js","")}AO("");var yO="firebase",EO="9.23.0";/**
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
 */Ke(yO,EO,"app");const SO=(e,B)=>B.some(t=>e instanceof t);let $p,Bm;function IO(){return $p||($p=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bO(){return Bm||(Bm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wy=new WeakMap,Xf=new WeakMap,Dy=new WeakMap,eu=new WeakMap,_1=new WeakMap;function wO(e){const B=new Promise((t,C)=>{const n=()=>{e.removeEventListener("success",r),e.removeEventListener("error",i)},r=()=>{t(yC(e.result)),n()},i=()=>{C(e.error),n()};e.addEventListener("success",r),e.addEventListener("error",i)});return B.then(t=>{t instanceof IDBCursor&&wy.set(t,e)}).catch(()=>{}),_1.set(B,e),B}function DO(e){if(Xf.has(e))return;const B=new Promise((t,C)=>{const n=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",i),e.removeEventListener("abort",i)},r=()=>{t(),n()},i=()=>{C(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",r),e.addEventListener("error",i),e.addEventListener("abort",i)});Xf.set(e,B)}let Zf={get(e,B,t){if(e instanceof IDBTransaction){if(B==="done")return Xf.get(e);if(B==="objectStoreNames")return e.objectStoreNames||Dy.get(e);if(B==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return yC(e[B])},set(e,B,t){return e[B]=t,!0},has(e,B){return e instanceof IDBTransaction&&(B==="done"||B==="store")?!0:B in e}};function PO(e){Zf=e(Zf)}function RO(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(B,...t){const C=e.call(tu(this),B,...t);return Dy.set(C,B.sort?B.sort():[B]),yC(C)}:bO().includes(e)?function(...B){return e.apply(tu(this),B),yC(wy.get(this))}:function(...B){return yC(e.apply(tu(this),B))}}function NO(e){return typeof e=="function"?RO(e):(e instanceof IDBTransaction&&DO(e),SO(e,IO())?new Proxy(e,Zf):e)}function yC(e){if(e instanceof IDBRequest)return wO(e);if(eu.has(e))return eu.get(e);const B=NO(e);return B!==e&&(eu.set(e,B),_1.set(B,e)),B}const tu=e=>_1.get(e);function FO(e,B,{blocked:t,upgrade:C,blocking:n,terminated:r}={}){const i=indexedDB.open(e,B),s=yC(i);return C&&i.addEventListener("upgradeneeded",a=>{C(yC(i.result),a.oldVersion,a.newVersion,yC(i.transaction))}),t&&i.addEventListener("blocked",()=>t()),s.then(a=>{r&&a.addEventListener("close",()=>r()),n&&a.addEventListener("versionchange",()=>n())}).catch(()=>{}),s}const OO=["get","getKey","getAll","getAllKeys","count"],kO=["put","add","delete","clear"],Cu=new Map;function em(e,B){if(!(e instanceof IDBDatabase&&!(B in e)&&typeof B=="string"))return;if(Cu.get(B))return Cu.get(B);const t=B.replace(/FromIndex$/,""),C=B!==t,n=kO.includes(t);if(!(t in(C?IDBIndex:IDBObjectStore).prototype)||!(n||OO.includes(t)))return;const r=async function(i,...s){const a=this.transaction(i,n?"readwrite":"readonly");let o=a.store;return C&&(o=o.index(s.shift())),(await Promise.all([o[t](...s),n&&a.done]))[0]};return Cu.set(B,r),r}PO(e=>({...e,get:(B,t,C)=>em(B,t)||e.get(B,t,C),has:(B,t)=>!!em(B,t)||e.has(B,t)}));const Py="@firebase/installations",$1="0.6.4";/**
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
 */const Ry=1e4,Ny=`w:${$1}`,Fy="FIS_v2",TO="https://firebaseinstallations.googleapis.com/v1",MO=60*60*1e3,LO="installations",xO="Installations";/**
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
 */const HO={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},on=new yn(LO,xO,HO);function Oy(e){return e instanceof yt&&e.code.includes("request-failed")}/**
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
 */function ky({projectId:e}){return`${TO}/projects/${e}/installations`}function Ty(e){return{token:e.token,requestStatus:2,expiresIn:KO(e.expiresIn),creationTime:Date.now()}}async function My(e,B){const C=(await B.json()).error;return on.create("request-failed",{requestName:e,serverCode:C.code,serverMessage:C.message,serverStatus:C.status})}function Ly({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function GO(e,{refreshToken:B}){const t=Ly(e);return t.append("Authorization",UO(B)),t}async function xy(e){const B=await e();return B.status>=500&&B.status<600?e():B}function KO(e){return Number(e.replace("s","000"))}function UO(e){return`${Fy} ${e}`}/**
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
 */async function QO({appConfig:e,heartbeatServiceProvider:B},{fid:t}){const C=ky(e),n=Ly(e),r=B.getImmediate({optional:!0});if(r){const o=await r.getHeartbeatsHeader();o&&n.append("x-firebase-client",o)}const i={fid:t,authVersion:Fy,appId:e.appId,sdkVersion:Ny},s={method:"POST",headers:n,body:JSON.stringify(i)},a=await xy(()=>fetch(C,s));if(a.ok){const o=await a.json();return{fid:o.fid||t,registrationStatus:2,refreshToken:o.refreshToken,authToken:Ty(o.authToken)}}else throw await My("Create Installation",a)}/**
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
 */function Hy(e){return new Promise(B=>{setTimeout(B,e)})}/**
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
 */function JO(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const VO=/^[cdef][\w-]{21}$/,qf="";function WO(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=jO(e);return VO.test(t)?t:qf}catch{return qf}}function jO(e){return JO(e).substr(0,22)}/**
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
 */function Jl(e){return`${e.appName}!${e.appId}`}/**
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
 */const Gy=new Map;function Ky(e,B){const t=Jl(e);Uy(t,B),YO(t,B)}function Uy(e,B){const t=Gy.get(e);if(t)for(const C of t)C(B)}function YO(e,B){const t=XO();t&&t.postMessage({key:e,fid:B}),ZO()}let WC=null;function XO(){return!WC&&"BroadcastChannel"in self&&(WC=new BroadcastChannel("[Firebase] FID Change"),WC.onmessage=e=>{Uy(e.data.key,e.data.fid)}),WC}function ZO(){Gy.size===0&&WC&&(WC.close(),WC=null)}/**
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
 */const qO="firebase-installations-database",zO=1,ln="firebase-installations-store";let nu=null;function Bh(){return nu||(nu=FO(qO,zO,{upgrade:(e,B)=>{switch(B){case 0:e.createObjectStore(ln)}}})),nu}async function Qo(e,B){const t=Jl(e),n=(await Bh()).transaction(ln,"readwrite"),r=n.objectStore(ln),i=await r.get(t);return await r.put(B,t),await n.done,(!i||i.fid!==B.fid)&&Ky(e,B.fid),B}async function Qy(e){const B=Jl(e),C=(await Bh()).transaction(ln,"readwrite");await C.objectStore(ln).delete(B),await C.done}async function Vl(e,B){const t=Jl(e),n=(await Bh()).transaction(ln,"readwrite"),r=n.objectStore(ln),i=await r.get(t),s=B(i);return s===void 0?await r.delete(t):await r.put(s,t),await n.done,s&&(!i||i.fid!==s.fid)&&Ky(e,s.fid),s}/**
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
 */async function eh(e){let B;const t=await Vl(e.appConfig,C=>{const n=_O(C),r=$O(e,n);return B=r.registrationPromise,r.installationEntry});return t.fid===qf?{installationEntry:await B}:{installationEntry:t,registrationPromise:B}}function _O(e){const B=e||{fid:WO(),registrationStatus:0};return Jy(B)}function $O(e,B){if(B.registrationStatus===0){if(!navigator.onLine){const n=Promise.reject(on.create("app-offline"));return{installationEntry:B,registrationPromise:n}}const t={fid:B.fid,registrationStatus:1,registrationTime:Date.now()},C=Bk(e,t);return{installationEntry:t,registrationPromise:C}}else return B.registrationStatus===1?{installationEntry:B,registrationPromise:ek(e)}:{installationEntry:B}}async function Bk(e,B){try{const t=await QO(e,B);return Qo(e.appConfig,t)}catch(t){throw Oy(t)&&t.customData.serverCode===409?await Qy(e.appConfig):await Qo(e.appConfig,{fid:B.fid,registrationStatus:0}),t}}async function ek(e){let B=await tm(e.appConfig);for(;B.registrationStatus===1;)await Hy(100),B=await tm(e.appConfig);if(B.registrationStatus===0){const{installationEntry:t,registrationPromise:C}=await eh(e);return C||t}return B}function tm(e){return Vl(e,B=>{if(!B)throw on.create("installation-not-found");return Jy(B)})}function Jy(e){return tk(e)?{fid:e.fid,registrationStatus:0}:e}function tk(e){return e.registrationStatus===1&&e.registrationTime+Ry<Date.now()}/**
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
 */async function Ck({appConfig:e,heartbeatServiceProvider:B},t){const C=nk(e,t),n=GO(e,t),r=B.getImmediate({optional:!0});if(r){const o=await r.getHeartbeatsHeader();o&&n.append("x-firebase-client",o)}const i={installation:{sdkVersion:Ny,appId:e.appId}},s={method:"POST",headers:n,body:JSON.stringify(i)},a=await xy(()=>fetch(C,s));if(a.ok){const o=await a.json();return Ty(o)}else throw await My("Generate Auth Token",a)}function nk(e,{fid:B}){return`${ky(e)}/${B}/authTokens:generate`}/**
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
 */async function th(e,B=!1){let t;const C=await Vl(e.appConfig,r=>{if(!Vy(r))throw on.create("not-registered");const i=r.authToken;if(!B&&sk(i))return r;if(i.requestStatus===1)return t=rk(e,B),r;{if(!navigator.onLine)throw on.create("app-offline");const s=ok(r);return t=ik(e,s),s}});return t?await t:C.authToken}async function rk(e,B){let t=await Cm(e.appConfig);for(;t.authToken.requestStatus===1;)await Hy(100),t=await Cm(e.appConfig);const C=t.authToken;return C.requestStatus===0?th(e,B):C}function Cm(e){return Vl(e,B=>{if(!Vy(B))throw on.create("not-registered");const t=B.authToken;return lk(t)?Object.assign(Object.assign({},B),{authToken:{requestStatus:0}}):B})}async function ik(e,B){try{const t=await Ck(e,B),C=Object.assign(Object.assign({},B),{authToken:t});return await Qo(e.appConfig,C),t}catch(t){if(Oy(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Qy(e.appConfig);else{const C=Object.assign(Object.assign({},B),{authToken:{requestStatus:0}});await Qo(e.appConfig,C)}throw t}}function Vy(e){return e!==void 0&&e.registrationStatus===2}function sk(e){return e.requestStatus===2&&!ak(e)}function ak(e){const B=Date.now();return B<e.creationTime||e.creationTime+e.expiresIn<B+MO}function ok(e){const B={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:B})}function lk(e){return e.requestStatus===1&&e.requestTime+Ry<Date.now()}/**
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
 */async function ck(e){const B=e,{installationEntry:t,registrationPromise:C}=await eh(B);return C?C.catch(console.error):th(B).catch(console.error),t.fid}/**
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
 */async function uk(e,B=!1){const t=e;return await fk(t),(await th(t,B)).token}async function fk(e){const{registrationPromise:B}=await eh(e);B&&await B}/**
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
 */function dk(e){if(!e||!e.options)throw ru("App Configuration");if(!e.name)throw ru("App Name");const B=["projectId","apiKey","appId"];for(const t of B)if(!e.options[t])throw ru(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function ru(e){return on.create("missing-app-config-values",{valueName:e})}/**
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
 */const Wy="installations",hk="installations-internal",pk=e=>{const B=e.getProvider("app").getImmediate(),t=dk(B),C=En(B,"heartbeat");return{app:B,appConfig:t,heartbeatServiceProvider:C,_delete:()=>Promise.resolve()}},mk=e=>{const B=e.getProvider("app").getImmediate(),t=En(B,Wy).getImmediate();return{getId:()=>ck(t),getToken:n=>uk(t,n)}};function gk(){pt(new nt(Wy,pk,"PUBLIC")),pt(new nt(hk,mk,"PRIVATE"))}gk();Ke(Py,$1);Ke(Py,$1,"esm2017");/**
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
 */const Jo="analytics",vk="firebase_id",Ak="origin",yk=60*1e3,Ek="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ch="https://www.googletagmanager.com/gtag/js";/**
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
 */const ve=new Ul("@firebase/analytics");/**
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
 */const Sk={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},De=new yn("analytics","Analytics",Sk);/**
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
 */function Ik(e){if(!e.startsWith(Ch)){const B=De.create("invalid-gtag-resource",{gtagURL:e});return ve.warn(B.message),""}return e}function jy(e){return Promise.all(e.map(B=>B.catch(t=>t)))}function bk(e,B){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(e,B)),t}function wk(e,B){const t=bk("firebase-js-sdk-policy",{createScriptURL:Ik}),C=document.createElement("script"),n=`${Ch}?l=${e}&id=${B}`;C.src=t?t==null?void 0:t.createScriptURL(n):n,C.async=!0,document.head.appendChild(C)}function Dk(e){let B=[];return Array.isArray(window[e])?B=window[e]:window[e]=B,B}async function Pk(e,B,t,C,n,r){const i=C[n];try{if(i)await B[i];else{const a=(await jy(t)).find(o=>o.measurementId===n);a&&await B[a.appId]}}catch(s){ve.error(s)}e("config",n,r)}async function Rk(e,B,t,C,n){try{let r=[];if(n&&n.send_to){let i=n.send_to;Array.isArray(i)||(i=[i]);const s=await jy(t);for(const a of i){const o=s.find(c=>c.measurementId===a),l=o&&B[o.appId];if(l)r.push(l);else{r=[];break}}}r.length===0&&(r=Object.values(B)),await Promise.all(r),e("event",C,n||{})}catch(r){ve.error(r)}}function Nk(e,B,t,C){async function n(r,...i){try{if(r==="event"){const[s,a]=i;await Rk(e,B,t,s,a)}else if(r==="config"){const[s,a]=i;await Pk(e,B,t,C,s,a)}else if(r==="consent"){const[s]=i;e("consent","update",s)}else if(r==="get"){const[s,a,o]=i;e("get",s,a,o)}else if(r==="set"){const[s]=i;e("set",s)}else e(r,...i)}catch(s){ve.error(s)}}return n}function Fk(e,B,t,C,n){let r=function(...i){window[C].push(arguments)};return window[n]&&typeof window[n]=="function"&&(r=window[n]),window[n]=Nk(r,e,B,t),{gtagCore:r,wrappedGtag:window[n]}}function Ok(e){const B=window.document.getElementsByTagName("script");for(const t of Object.values(B))if(t.src&&t.src.includes(Ch)&&t.src.includes(e))return t;return null}/**
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
 */const kk=30,Tk=1e3;class Mk{constructor(B={},t=Tk){this.throttleMetadata=B,this.intervalMillis=t}getThrottleMetadata(B){return this.throttleMetadata[B]}setThrottleMetadata(B,t){this.throttleMetadata[B]=t}deleteThrottleMetadata(B){delete this.throttleMetadata[B]}}const Yy=new Mk;function Lk(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function xk(e){var B;const{appId:t,apiKey:C}=e,n={method:"GET",headers:Lk(C)},r=Ek.replace("{app-id}",t),i=await fetch(r,n);if(i.status!==200&&i.status!==304){let s="";try{const a=await i.json();!((B=a.error)===null||B===void 0)&&B.message&&(s=a.error.message)}catch{}throw De.create("config-fetch-failed",{httpStatus:i.status,responseMessage:s})}return i.json()}async function Hk(e,B=Yy,t){const{appId:C,apiKey:n,measurementId:r}=e.options;if(!C)throw De.create("no-app-id");if(!n){if(r)return{measurementId:r,appId:C};throw De.create("no-api-key")}const i=B.getThrottleMetadata(C)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new Uk;return setTimeout(async()=>{s.abort()},t!==void 0?t:yk),Xy({appId:C,apiKey:n,measurementId:r},i,s,B)}async function Xy(e,{throttleEndTimeMillis:B,backoffCount:t},C,n=Yy){var r;const{appId:i,measurementId:s}=e;try{await Gk(C,B)}catch(a){if(s)return ve.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${a==null?void 0:a.message}]`),{appId:i,measurementId:s};throw a}try{const a=await xk(e);return n.deleteThrottleMetadata(i),a}catch(a){const o=a;if(!Kk(o)){if(n.deleteThrottleMetadata(i),s)return ve.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${o==null?void 0:o.message}]`),{appId:i,measurementId:s};throw a}const l=Number((r=o==null?void 0:o.customData)===null||r===void 0?void 0:r.httpStatus)===503?Wp(t,n.intervalMillis,kk):Wp(t,n.intervalMillis),c={throttleEndTimeMillis:Date.now()+l,backoffCount:t+1};return n.setThrottleMetadata(i,c),ve.debug(`Calling attemptFetch again in ${l} millis`),Xy(e,c,C,n)}}function Gk(e,B){return new Promise((t,C)=>{const n=Math.max(B-Date.now(),0),r=setTimeout(t,n);e.addEventListener(()=>{clearTimeout(r),C(De.create("fetch-throttle",{throttleEndTimeMillis:B}))})})}function Kk(e){if(!(e instanceof yt)||!e.customData)return!1;const B=Number(e.customData.httpStatus);return B===429||B===500||B===503||B===504}class Uk{constructor(){this.listeners=[]}addEventListener(B){this.listeners.push(B)}abort(){this.listeners.forEach(B=>B())}}async function Qk(e,B,t,C,n){if(n&&n.global){e("event",t,C);return}else{const r=await B,i=Object.assign(Object.assign({},C),{send_to:r});e("event",t,i)}}/**
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
 */async function Jk(){if(vy())try{await Ay()}catch(e){return ve.warn(De.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return ve.warn(De.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Vk(e,B,t,C,n,r,i){var s;const a=Hk(e);a.then(g=>{t[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&ve.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>ve.error(g)),B.push(a);const o=Jk().then(g=>{if(g)return C.getId()}),[l,c]=await Promise.all([a,o]);Ok(r)||wk(r,l.measurementId),n("js",new Date);const u=(s=i==null?void 0:i.config)!==null&&s!==void 0?s:{};return u[Ak]="firebase",u.update=!0,c!=null&&(u[vk]=c),n("config",l.measurementId,u),l.measurementId}/**
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
 */class Wk{constructor(B){this.app=B}_delete(){return delete mi[this.app.options.appId],Promise.resolve()}}let mi={},nm=[];const rm={};let iu="dataLayer",jk="gtag",im,Zy,sm=!1;function Yk(){const e=[];if(py()&&e.push("This is a browser extension environment."),eF()||e.push("Cookies are not available."),e.length>0){const B=e.map((C,n)=>`(${n+1}) ${C}`).join(" "),t=De.create("invalid-analytics-context",{errorInfo:B});ve.warn(t.message)}}function Xk(e,B,t){Yk();const C=e.options.appId;if(!C)throw De.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)ve.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw De.create("no-api-key");if(mi[C]!=null)throw De.create("already-exists",{id:C});if(!sm){Dk(iu);const{wrappedGtag:r,gtagCore:i}=Fk(mi,nm,rm,iu,jk);Zy=r,im=i,sm=!0}return mi[C]=Vk(e,nm,rm,B,im,iu,t),new Wk(e)}function nh(e=z1()){e=Ee(e);const B=En(e,Jo);return B.isInitialized()?B.getImmediate():Zk(e)}function Zk(e,B={}){const t=En(e,Jo);if(t.isInitialized()){const n=t.getImmediate();if(ji(B,t.getOptions()))return n;throw De.create("already-initialized")}return t.initialize({options:B})}function qk(e,B,t,C){e=Ee(e),Qk(Zy,mi[e.app.options.appId],B,t,C).catch(n=>ve.error(n))}const am="@firebase/analytics",om="0.10.0";function zk(){pt(new nt(Jo,(B,{options:t})=>{const C=B.getProvider("app").getImmediate(),n=B.getProvider("installations-internal").getImmediate();return Xk(C,n,t)},"PUBLIC")),pt(new nt("analytics-internal",e,"PRIVATE")),Ke(am,om),Ke(am,om,"esm2017");function e(B){try{const t=B.getProvider(Jo).getImmediate();return{logEvent:(C,n,r)=>qk(t,C,n,r)}}catch(t){throw De.create("interop-component-reg-failed",{reason:t})}}}zk();function rh(e,B){var t={};for(var C in e)Object.prototype.hasOwnProperty.call(e,C)&&B.indexOf(C)<0&&(t[C]=e[C]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,C=Object.getOwnPropertySymbols(e);n<C.length;n++)B.indexOf(C[n])<0&&Object.prototype.propertyIsEnumerable.call(e,C[n])&&(t[C[n]]=e[C[n]]);return t}function qy(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _k=qy,zy=new yn("auth","Firebase",qy());/**
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
 */const Vo=new Ul("@firebase/auth");function $k(e,...B){Vo.logLevel<=iB.WARN&&Vo.warn(`Auth (${Fr}): ${e}`,...B)}function Bo(e,...B){Vo.logLevel<=iB.ERROR&&Vo.error(`Auth (${Fr}): ${e}`,...B)}/**
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
 */function mt(e,...B){throw ih(e,...B)}function dt(e,...B){return ih(e,...B)}function _y(e,B,t){const C=Object.assign(Object.assign({},_k()),{[B]:t});return new yn("auth","Firebase",C).create(B,{appName:e.name})}function BT(e,B,t){const C=t;if(!(B instanceof C))throw C.name!==B.constructor.name&&mt(e,"argument-error"),_y(e,"argument-error",`Type of ${B.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ih(e,...B){if(typeof e!="string"){const t=B[0],C=[...B.slice(1)];return C[0]&&(C[0].appName=e.name),e._errorFactory.create(t,...C)}return zy.create(e,...B)}function Q(e,B,...t){if(!e)throw ih(B,...t)}function Pt(e){const B="INTERNAL ASSERTION FAILED: "+e;throw Bo(B),new Error(B)}function Ht(e,B){e||Pt(B)}/**
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
 */function zf(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function eT(){return lm()==="http:"||lm()==="https:"}function lm(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function tT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eT()||py()||"connection"in navigator)?navigator.onLine:!0}function CT(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class ys{constructor(B,t){this.shortDelay=B,this.longDelay=t,Ht(t>B,"Short delay should be less than long delay!"),this.isMobile=X1()||my()}get(){return tT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function sh(e,B){Ht(e.emulator,"Emulator should always be set here");const{url:t}=e.emulator;return B?`${t}${B.startsWith("/")?B.slice(1):B}`:t}/**
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
 */class $y{static initialize(B,t,C){this.fetchImpl=B,t&&(this.headersImpl=t),C&&(this.responseImpl=C)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const nT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const rT=new ys(3e4,6e4);function BE(e,B){return e.tenantId&&!B.tenantId?Object.assign(Object.assign({},B),{tenantId:e.tenantId}):B}async function Es(e,B,t,C,n={}){return eE(e,n,async()=>{let r={},i={};C&&(B==="GET"?i=C:r={body:JSON.stringify(C)});const s=Nr(Object.assign({key:e.config.apiKey},i)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),$y.fetch()(tE(e,e.config.apiHost,t,s),Object.assign({method:B,headers:a,referrerPolicy:"no-referrer"},r))})}async function eE(e,B,t){e._canInitEmulator=!1;const C=Object.assign(Object.assign({},nT),B);try{const n=new sT(e),r=await Promise.race([t(),n.promise]);n.clearNetworkTimeout();const i=await r.json();if("needConfirmation"in i)throw fa(e,"account-exists-with-different-credential",i);if(r.ok&&!("errorMessage"in i))return i;{const s=r.ok?i.errorMessage:i.error.message,[a,o]=s.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw fa(e,"credential-already-in-use",i);if(a==="EMAIL_EXISTS")throw fa(e,"email-already-in-use",i);if(a==="USER_DISABLED")throw fa(e,"user-disabled",i);const l=C[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw _y(e,l,o);mt(e,l)}}catch(n){if(n instanceof yt)throw n;mt(e,"network-request-failed",{message:String(n)})}}async function iT(e,B,t,C,n={}){const r=await Es(e,B,t,C,n);return"mfaPendingCredential"in r&&mt(e,"multi-factor-auth-required",{_serverResponse:r}),r}function tE(e,B,t,C){const n=`${B}${t}?${C}`;return e.config.emulator?sh(e.config,n):`${e.config.apiScheme}://${n}`}class sT{constructor(B){this.auth=B,this.timer=null,this.promise=new Promise((t,C)=>{this.timer=setTimeout(()=>C(dt(this.auth,"network-request-failed")),rT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fa(e,B,t){const C={appName:e.name};t.email&&(C.email=t.email),t.phoneNumber&&(C.phoneNumber=t.phoneNumber);const n=dt(e,B,C);return n.customData._tokenResponse=t,n}/**
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
 */async function aT(e,B){return Es(e,"POST","/v1/accounts:delete",B)}async function oT(e,B){return Es(e,"POST","/v1/accounts:lookup",B)}/**
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
 */function gi(e){if(e)try{const B=new Date(Number(e));if(!isNaN(B.getTime()))return B.toUTCString()}catch{}}async function lT(e,B=!1){const t=Ee(e),C=await t.getIdToken(B),n=ah(C);Q(n&&n.exp&&n.auth_time&&n.iat,t.auth,"internal-error");const r=typeof n.firebase=="object"?n.firebase:void 0,i=r==null?void 0:r.sign_in_provider;return{claims:n,token:C,authTime:gi(su(n.auth_time)),issuedAtTime:gi(su(n.iat)),expirationTime:gi(su(n.exp)),signInProvider:i||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function su(e){return Number(e)*1e3}function ah(e){const[B,t,C]=e.split(".");if(B===void 0||t===void 0||C===void 0)return Bo("JWT malformed, contained fewer than 3 sections"),null;try{const n=Go(t);return n?JSON.parse(n):(Bo("Failed to decode base64 JWT payload"),null)}catch(n){return Bo("Caught error parsing JWT payload as JSON",n==null?void 0:n.toString()),null}}function cT(e){const B=ah(e);return Q(B,"internal-error"),Q(typeof B.exp<"u","internal-error"),Q(typeof B.iat<"u","internal-error"),Number(B.exp)-Number(B.iat)}/**
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
 */async function Xi(e,B,t=!1){if(t)return B;try{return await B}catch(C){throw C instanceof yt&&uT(C)&&e.auth.currentUser===e&&await e.auth.signOut(),C}}function uT({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class fT{constructor(B){this.user=B,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(B){var t;if(B){const C=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),C}else{this.errorBackoff=3e4;const n=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,n)}}schedule(B=!1){if(!this.isRunning)return;const t=this.getInterval(B);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(B){(B==null?void 0:B.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class CE{constructor(B,t){this.createdAt=B,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=gi(this.lastLoginAt),this.creationTime=gi(this.createdAt)}_copy(B){this.createdAt=B.createdAt,this.lastLoginAt=B.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Wo(e){var B;const t=e.auth,C=await e.getIdToken(),n=await Xi(e,oT(t,{idToken:C}));Q(n==null?void 0:n.users.length,t,"internal-error");const r=n.users[0];e._notifyReloadListener(r);const i=!((B=r.providerUserInfo)===null||B===void 0)&&B.length?pT(r.providerUserInfo):[],s=hT(e.providerData,i),a=e.isAnonymous,o=!(e.email&&r.passwordHash)&&!(s!=null&&s.length),l=a?o:!1,c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new CE(r.createdAt,r.lastLoginAt),isAnonymous:l};Object.assign(e,c)}async function dT(e){const B=Ee(e);await Wo(B),await B.auth._persistUserIfCurrent(B),B.auth._notifyListenersIfCurrent(B)}function hT(e,B){return[...e.filter(C=>!B.some(n=>n.providerId===C.providerId)),...B]}function pT(e){return e.map(B=>{var{providerId:t}=B,C=rh(B,["providerId"]);return{providerId:t,uid:C.rawId||"",displayName:C.displayName||null,email:C.email||null,phoneNumber:C.phoneNumber||null,photoURL:C.photoUrl||null}})}/**
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
 */async function mT(e,B){const t=await eE(e,{},async()=>{const C=Nr({grant_type:"refresh_token",refresh_token:B}).slice(1),{tokenApiHost:n,apiKey:r}=e.config,i=tE(e,n,"/v1/token",`key=${r}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",$y.fetch()(i,{method:"POST",headers:s,body:C})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class Zi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(B){Q(B.idToken,"internal-error"),Q(typeof B.idToken<"u","internal-error"),Q(typeof B.refreshToken<"u","internal-error");const t="expiresIn"in B&&typeof B.expiresIn<"u"?Number(B.expiresIn):cT(B.idToken);this.updateTokensAndExpiration(B.idToken,B.refreshToken,t)}async getToken(B,t=!1){return Q(!this.accessToken||this.refreshToken,B,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(B,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(B,t){const{accessToken:C,refreshToken:n,expiresIn:r}=await mT(B,t);this.updateTokensAndExpiration(C,n,Number(r))}updateTokensAndExpiration(B,t,C){this.refreshToken=t||null,this.accessToken=B||null,this.expirationTime=Date.now()+C*1e3}static fromJSON(B,t){const{refreshToken:C,accessToken:n,expirationTime:r}=t,i=new Zi;return C&&(Q(typeof C=="string","internal-error",{appName:B}),i.refreshToken=C),n&&(Q(typeof n=="string","internal-error",{appName:B}),i.accessToken=n),r&&(Q(typeof r=="number","internal-error",{appName:B}),i.expirationTime=r),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(B){this.accessToken=B.accessToken,this.refreshToken=B.refreshToken,this.expirationTime=B.expirationTime}_clone(){return Object.assign(new Zi,this.toJSON())}_performRefresh(){return Pt("not implemented")}}/**
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
 */function Zt(e,B){Q(typeof e=="string"||typeof e>"u","internal-error",{appName:B})}class Bn{constructor(B){var{uid:t,auth:C,stsTokenManager:n}=B,r=rh(B,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=C,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new CE(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(B){const t=await Xi(this,this.stsTokenManager.getToken(this.auth,B));return Q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(B){return lT(this,B)}reload(){return dT(this)}_assign(B){this!==B&&(Q(this.uid===B.uid,this.auth,"internal-error"),this.displayName=B.displayName,this.photoURL=B.photoURL,this.email=B.email,this.emailVerified=B.emailVerified,this.phoneNumber=B.phoneNumber,this.isAnonymous=B.isAnonymous,this.tenantId=B.tenantId,this.providerData=B.providerData.map(t=>Object.assign({},t)),this.metadata._copy(B.metadata),this.stsTokenManager._assign(B.stsTokenManager))}_clone(B){const t=new Bn(Object.assign(Object.assign({},this),{auth:B,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(B){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=B,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(B){this.reloadListener?this.reloadListener(B):this.reloadUserInfo=B}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(B,t=!1){let C=!1;B.idToken&&B.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(B),C=!0),t&&await Wo(this),await this.auth._persistUserIfCurrent(this),C&&this.auth._notifyListenersIfCurrent(this)}async delete(){const B=await this.getIdToken();return await Xi(this,aT(this.auth,{idToken:B})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(B=>Object.assign({},B)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(B,t){var C,n,r,i,s,a,o,l;const c=(C=t.displayName)!==null&&C!==void 0?C:void 0,u=(n=t.email)!==null&&n!==void 0?n:void 0,g=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,f=(i=t.photoURL)!==null&&i!==void 0?i:void 0,m=(s=t.tenantId)!==null&&s!==void 0?s:void 0,p=(a=t._redirectEventId)!==null&&a!==void 0?a:void 0,d=(o=t.createdAt)!==null&&o!==void 0?o:void 0,h=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:v,emailVerified:A,isAnonymous:E,providerData:D,stsTokenManager:I}=t;Q(v&&I,B,"internal-error");const y=Zi.fromJSON(this.name,I);Q(typeof v=="string",B,"internal-error"),Zt(c,B.name),Zt(u,B.name),Q(typeof A=="boolean",B,"internal-error"),Q(typeof E=="boolean",B,"internal-error"),Zt(g,B.name),Zt(f,B.name),Zt(m,B.name),Zt(p,B.name),Zt(d,B.name),Zt(h,B.name);const b=new Bn({uid:v,auth:B,email:u,emailVerified:A,displayName:c,isAnonymous:E,photoURL:f,phoneNumber:g,tenantId:m,stsTokenManager:y,createdAt:d,lastLoginAt:h});return D&&Array.isArray(D)&&(b.providerData=D.map(M=>Object.assign({},M))),p&&(b._redirectEventId=p),b}static async _fromIdTokenResponse(B,t,C=!1){const n=new Zi;n.updateFromServerResponse(t);const r=new Bn({uid:t.localId,auth:B,stsTokenManager:n,isAnonymous:C});return await Wo(r),r}}/**
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
 */const cm=new Map;function Rt(e){Ht(e instanceof Function,"Expected a class definition");let B=cm.get(e);return B?(Ht(B instanceof e,"Instance stored in cache mismatched with class"),B):(B=new e,cm.set(e,B),B)}/**
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
 */class nE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(B,t){this.storage[B]=t}async _get(B){const t=this.storage[B];return t===void 0?null:t}async _remove(B){delete this.storage[B]}_addListener(B,t){}_removeListener(B,t){}}nE.type="NONE";const um=nE;/**
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
 */function eo(e,B,t){return`firebase:${e}:${B}:${t}`}class er{constructor(B,t,C){this.persistence=B,this.auth=t,this.userKey=C;const{config:n,name:r}=this.auth;this.fullUserKey=eo(this.userKey,n.apiKey,r),this.fullPersistenceKey=eo("persistence",n.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(B){return this.persistence._set(this.fullUserKey,B.toJSON())}async getCurrentUser(){const B=await this.persistence._get(this.fullUserKey);return B?Bn._fromJSON(this.auth,B):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(B){if(this.persistence===B)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=B,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(B,t,C="authUser"){if(!t.length)return new er(Rt(um),B,C);const n=(await Promise.all(t.map(async o=>{if(await o._isAvailable())return o}))).filter(o=>o);let r=n[0]||Rt(um);const i=eo(C,B.config.apiKey,B.name);let s=null;for(const o of t)try{const l=await o._get(i);if(l){const c=Bn._fromJSON(B,l);o!==r&&(s=c),r=o;break}}catch{}const a=n.filter(o=>o._shouldAllowMigration);return!r._shouldAllowMigration||!a.length?new er(r,B,C):(r=a[0],s&&await r._set(i,s.toJSON()),await Promise.all(t.map(async o=>{if(o!==r)try{await o._remove(i)}catch{}})),new er(r,B,C))}}/**
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
 */function fm(e){const B=e.toLowerCase();if(B.includes("opera/")||B.includes("opr/")||B.includes("opios/"))return"Opera";if(sE(B))return"IEMobile";if(B.includes("msie")||B.includes("trident/"))return"IE";if(B.includes("edge/"))return"Edge";if(rE(B))return"Firefox";if(B.includes("silk/"))return"Silk";if(oE(B))return"Blackberry";if(lE(B))return"Webos";if(oh(B))return"Safari";if((B.includes("chrome/")||iE(B))&&!B.includes("edge/"))return"Chrome";if(aE(B))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,C=e.match(t);if((C==null?void 0:C.length)===2)return C[1]}return"Other"}function rE(e=Be()){return/firefox\//i.test(e)}function oh(e=Be()){const B=e.toLowerCase();return B.includes("safari/")&&!B.includes("chrome/")&&!B.includes("crios/")&&!B.includes("android")}function iE(e=Be()){return/crios\//i.test(e)}function sE(e=Be()){return/iemobile/i.test(e)}function aE(e=Be()){return/android/i.test(e)}function oE(e=Be()){return/blackberry/i.test(e)}function lE(e=Be()){return/webos/i.test(e)}function Wl(e=Be()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function gT(e=Be()){var B;return Wl(e)&&!!(!((B=window.navigator)===null||B===void 0)&&B.standalone)}function vT(){return BF()&&document.documentMode===10}function cE(e=Be()){return Wl(e)||aE(e)||lE(e)||oE(e)||/windows phone/i.test(e)||sE(e)}function AT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function uE(e,B=[]){let t;switch(e){case"Browser":t=fm(Be());break;case"Worker":t=`${fm(Be())}-${e}`;break;default:t=e}const C=B.length?B.join(","):"FirebaseCore-web";return`${t}/JsCore/${Fr}/${C}`}async function fE(e,B){return Es(e,"GET","/v2/recaptchaConfig",BE(e,B))}function dm(e){return e!==void 0&&e.enterprise!==void 0}class dE{constructor(B){if(this.siteKey="",this.emailPasswordEnabled=!1,B.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=B.recaptchaKey.split("/")[3],this.emailPasswordEnabled=B.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
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
 */function yT(){var e,B;return(B=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&B!==void 0?B:document}function hE(e){return new Promise((B,t)=>{const C=document.createElement("script");C.setAttribute("src",e),C.onload=B,C.onerror=n=>{const r=dt("internal-error");r.customData=n,t(r)},C.type="text/javascript",C.charset="UTF-8",yT().appendChild(C)})}function ET(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const ST="https://www.google.com/recaptcha/enterprise.js?render=",IT="recaptcha-enterprise",bT="NO_RECAPTCHA";class wT{constructor(B){this.type=IT,this.auth=Ss(B)}async verify(B="verify",t=!1){async function C(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(i,s)=>{fE(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)s(new Error("recaptcha Enterprise site key undefined"));else{const o=new dE(a);return r.tenantId==null?r._agentRecaptchaConfig=o:r._tenantRecaptchaConfigs[r.tenantId]=o,i(o.siteKey)}}).catch(a=>{s(a)})})}function n(r,i,s){const a=window.grecaptcha;dm(a)?a.enterprise.ready(()=>{a.enterprise.execute(r,{action:B}).then(o=>{i(o)}).catch(()=>{i(bT)})}):s(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,i)=>{C(this.auth).then(s=>{if(!t&&dm(window.grecaptcha))n(s,r,i);else{if(typeof window>"u"){i(new Error("RecaptchaVerifier is only supported in browser"));return}hE(ST+s).then(()=>{n(s,r,i)}).catch(a=>{i(a)})}}).catch(s=>{i(s)})})}}/**
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
 */class DT{constructor(B){this.auth=B,this.queue=[]}pushCallback(B,t){const C=r=>new Promise((i,s)=>{try{const a=B(r);i(a)}catch(a){s(a)}});C.onAbort=t,this.queue.push(C);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(B){if(this.auth.currentUser===B)return;const t=[];try{for(const C of this.queue)await C(B),C.onAbort&&t.push(C.onAbort)}catch(C){t.reverse();for(const n of t)try{n()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:C==null?void 0:C.message})}}}/**
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
 */class PT{constructor(B,t,C,n){this.app=B,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=C,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hm(this),this.idTokenSubscription=new hm(this),this.beforeStateQueue=new DT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=B.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(B,t){return t&&(this._popupRedirectResolver=Rt(t)),this._initializationPromise=this.queue(async()=>{var C,n;if(!this._deleted&&(this.persistenceManager=await er.create(this,B),!this._deleted)){if(!((C=this._popupRedirectResolver)===null||C===void 0)&&C._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((n=this.currentUser)===null||n===void 0?void 0:n.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const B=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!B)){if(this.currentUser&&B&&this.currentUser.uid===B.uid){this._currentUser._assign(B),await this.currentUser.getIdToken();return}await this._updateCurrentUser(B,!0)}}async initializeCurrentUser(B){var t;const C=await this.assertedPersistence.getCurrentUser();let n=C,r=!1;if(B&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,s=n==null?void 0:n._redirectEventId,a=await this.tryRedirectSignIn(B);(!i||i===s)&&(a!=null&&a.user)&&(n=a.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(i){n=C,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(B){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,B,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(B){try{await Wo(B)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(B)}useDeviceLanguage(){this.languageCode=CT()}async _delete(){this._deleted=!0}async updateCurrentUser(B){const t=B?Ee(B):null;return t&&Q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(B,t=!1){if(!this._deleted)return B&&Q(this.tenantId===B.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(B),this.queue(async()=>{await this.directlySetCurrentUser(B),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(B){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Rt(B))})}async initializeRecaptchaConfig(){const B=await fE(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new dE(B);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new wT(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(B){this._errorFactory=new yn("auth","Firebase",B())}onAuthStateChanged(B,t,C){return this.registerStateListener(this.authStateSubscription,B,t,C)}beforeAuthStateChanged(B,t){return this.beforeStateQueue.pushCallback(B,t)}onIdTokenChanged(B,t,C){return this.registerStateListener(this.idTokenSubscription,B,t,C)}toJSON(){var B;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(B=this._currentUser)===null||B===void 0?void 0:B.toJSON()}}async _setRedirectUser(B,t){const C=await this.getOrInitRedirectPersistenceManager(t);return B===null?C.removeCurrentUser():C.setCurrentUser(B)}async getOrInitRedirectPersistenceManager(B){if(!this.redirectPersistenceManager){const t=B&&Rt(B)||this._popupRedirectResolver;Q(t,this,"argument-error"),this.redirectPersistenceManager=await er.create(this,[Rt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(B){var t,C;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===B?this._currentUser:((C=this.redirectUser)===null||C===void 0?void 0:C._redirectEventId)===B?this.redirectUser:null}async _persistUserIfCurrent(B){if(B===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(B))}_notifyListenersIfCurrent(B){B===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var B,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const C=(t=(B=this.currentUser)===null||B===void 0?void 0:B.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==C&&(this.lastNotifiedUid=C,this.authStateSubscription.next(this.currentUser))}registerStateListener(B,t,C,n){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return Q(i,this,"internal-error"),i.then(()=>r(this.currentUser)),typeof t=="function"?B.addObserver(t,C,n):B.addObserver(t)}async directlySetCurrentUser(B){this.currentUser&&this.currentUser!==B&&this._currentUser._stopProactiveRefresh(),B&&this.isProactiveRefreshEnabled&&B._startProactiveRefresh(),this.currentUser=B,B?await this.assertedPersistence.setCurrentUser(B):await this.assertedPersistence.removeCurrentUser()}queue(B){return this.operations=this.operations.then(B,B),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(B){!B||this.frameworks.includes(B)||(this.frameworks.push(B),this.frameworks.sort(),this.clientVersion=uE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var B;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const C=await((B=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||B===void 0?void 0:B.getHeartbeatsHeader());C&&(t["X-Firebase-Client"]=C);const n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"]=n),t}async _getAppCheckToken(){var B;const t=await((B=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||B===void 0?void 0:B.getToken());return t!=null&&t.error&&$k(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ss(e){return Ee(e)}class hm{constructor(B){this.auth=B,this.observer=null,this.addObserver=aF(t=>this.observer=t)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function RT(e,B){const t=En(e,"auth");if(t.isInitialized()){const n=t.getImmediate(),r=t.getOptions();if(ji(r,B??{}))return n;mt(n,"already-initialized")}return t.initialize({options:B})}function NT(e,B){const t=(B==null?void 0:B.persistence)||[],C=(Array.isArray(t)?t:[t]).map(Rt);B!=null&&B.errorMap&&e._updateErrorMap(B.errorMap),e._initializeWithPersistence(C,B==null?void 0:B.popupRedirectResolver)}function FT(e,B,t){const C=Ss(e);Q(C._canInitEmulator,C,"emulator-config-failed"),Q(/^https?:\/\//.test(B),C,"invalid-emulator-scheme");const n=!!(t!=null&&t.disableWarnings),r=pE(B),{host:i,port:s}=OT(B),a=s===null?"":`:${s}`;C.config.emulator={url:`${r}//${i}${a}/`},C.settings.appVerificationDisabledForTesting=!0,C.emulatorConfig=Object.freeze({host:i,port:s,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:n})}),n||kT()}function pE(e){const B=e.indexOf(":");return B<0?"":e.substr(0,B+1)}function OT(e){const B=pE(e),t=/(\/\/)?([^?#/]+)/.exec(e.substr(B.length));if(!t)return{host:"",port:null};const C=t[2].split("@").pop()||"",n=/^(\[[^\]]+\])(:|$)/.exec(C);if(n){const r=n[1];return{host:r,port:pm(C.substr(r.length+1))}}else{const[r,i]=C.split(":");return{host:r,port:pm(i)}}}function pm(e){if(!e)return null;const B=Number(e);return isNaN(B)?null:B}function kT(){function e(){const B=document.createElement("p"),t=B.style;B.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",B.classList.add("firebase-emulator-warning"),document.body.appendChild(B)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class mE{constructor(B,t){this.providerId=B,this.signInMethod=t}toJSON(){return Pt("not implemented")}_getIdTokenResponse(B){return Pt("not implemented")}_linkToIdToken(B,t){return Pt("not implemented")}_getReauthenticationResolver(B){return Pt("not implemented")}}/**
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
 */async function tr(e,B){return iT(e,"POST","/v1/accounts:signInWithIdp",BE(e,B))}/**
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
 */const TT="http://localhost";class cn extends mE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(B){const t=new cn(B.providerId,B.signInMethod);return B.idToken||B.accessToken?(B.idToken&&(t.idToken=B.idToken),B.accessToken&&(t.accessToken=B.accessToken),B.nonce&&!B.pendingToken&&(t.nonce=B.nonce),B.pendingToken&&(t.pendingToken=B.pendingToken)):B.oauthToken&&B.oauthTokenSecret?(t.accessToken=B.oauthToken,t.secret=B.oauthTokenSecret):mt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(B){const t=typeof B=="string"?JSON.parse(B):B,{providerId:C,signInMethod:n}=t,r=rh(t,["providerId","signInMethod"]);if(!C||!n)return null;const i=new cn(C,n);return i.idToken=r.idToken||void 0,i.accessToken=r.accessToken||void 0,i.secret=r.secret,i.nonce=r.nonce,i.pendingToken=r.pendingToken||null,i}_getIdTokenResponse(B){const t=this.buildRequest();return tr(B,t)}_linkToIdToken(B,t){const C=this.buildRequest();return C.idToken=t,tr(B,C)}_getReauthenticationResolver(B){const t=this.buildRequest();return t.autoCreate=!1,tr(B,t)}buildRequest(){const B={requestUri:TT,returnSecureToken:!0};if(this.pendingToken)B.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),B.postBody=Nr(t)}return B}}/**
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
 */class lh{constructor(B){this.providerId=B,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(B){this.defaultLanguageCode=B}setCustomParameters(B){return this.customParameters=B,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Is extends lh{constructor(){super(...arguments),this.scopes=[]}addScope(B){return this.scopes.includes(B)||this.scopes.push(B),this}getScopes(){return[...this.scopes]}}/**
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
 */class tC extends Is{constructor(){super("facebook.com")}static credential(B){return cn._fromParams({providerId:tC.PROVIDER_ID,signInMethod:tC.FACEBOOK_SIGN_IN_METHOD,accessToken:B})}static credentialFromResult(B){return tC.credentialFromTaggedObject(B)}static credentialFromError(B){return tC.credentialFromTaggedObject(B.customData||{})}static credentialFromTaggedObject({_tokenResponse:B}){if(!B||!("oauthAccessToken"in B)||!B.oauthAccessToken)return null;try{return tC.credential(B.oauthAccessToken)}catch{return null}}}tC.FACEBOOK_SIGN_IN_METHOD="facebook.com";tC.PROVIDER_ID="facebook.com";/**
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
 */class xe extends Is{constructor(){super("google.com"),this.addScope("profile")}static credential(B,t){return cn._fromParams({providerId:xe.PROVIDER_ID,signInMethod:xe.GOOGLE_SIGN_IN_METHOD,idToken:B,accessToken:t})}static credentialFromResult(B){return xe.credentialFromTaggedObject(B)}static credentialFromError(B){return xe.credentialFromTaggedObject(B.customData||{})}static credentialFromTaggedObject({_tokenResponse:B}){if(!B)return null;const{oauthIdToken:t,oauthAccessToken:C}=B;if(!t&&!C)return null;try{return xe.credential(t,C)}catch{return null}}}xe.GOOGLE_SIGN_IN_METHOD="google.com";xe.PROVIDER_ID="google.com";/**
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
 */class CC extends Is{constructor(){super("github.com")}static credential(B){return cn._fromParams({providerId:CC.PROVIDER_ID,signInMethod:CC.GITHUB_SIGN_IN_METHOD,accessToken:B})}static credentialFromResult(B){return CC.credentialFromTaggedObject(B)}static credentialFromError(B){return CC.credentialFromTaggedObject(B.customData||{})}static credentialFromTaggedObject({_tokenResponse:B}){if(!B||!("oauthAccessToken"in B)||!B.oauthAccessToken)return null;try{return CC.credential(B.oauthAccessToken)}catch{return null}}}CC.GITHUB_SIGN_IN_METHOD="github.com";CC.PROVIDER_ID="github.com";/**
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
 */class nC extends Is{constructor(){super("twitter.com")}static credential(B,t){return cn._fromParams({providerId:nC.PROVIDER_ID,signInMethod:nC.TWITTER_SIGN_IN_METHOD,oauthToken:B,oauthTokenSecret:t})}static credentialFromResult(B){return nC.credentialFromTaggedObject(B)}static credentialFromError(B){return nC.credentialFromTaggedObject(B.customData||{})}static credentialFromTaggedObject({_tokenResponse:B}){if(!B)return null;const{oauthAccessToken:t,oauthTokenSecret:C}=B;if(!t||!C)return null;try{return nC.credential(t,C)}catch{return null}}}nC.TWITTER_SIGN_IN_METHOD="twitter.com";nC.PROVIDER_ID="twitter.com";/**
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
 */class pr{constructor(B){this.user=B.user,this.providerId=B.providerId,this._tokenResponse=B._tokenResponse,this.operationType=B.operationType}static async _fromIdTokenResponse(B,t,C,n=!1){const r=await Bn._fromIdTokenResponse(B,C,n),i=mm(C);return new pr({user:r,providerId:i,_tokenResponse:C,operationType:t})}static async _forOperation(B,t,C){await B._updateTokensIfNecessary(C,!0);const n=mm(C);return new pr({user:B,providerId:n,_tokenResponse:C,operationType:t})}}function mm(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class jo extends yt{constructor(B,t,C,n){var r;super(t.code,t.message),this.operationType=C,this.user=n,Object.setPrototypeOf(this,jo.prototype),this.customData={appName:B.name,tenantId:(r=B.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:C}}static _fromErrorAndOperation(B,t,C,n){return new jo(B,t,C,n)}}function gE(e,B,t,C){return(B==="reauthenticate"?t._getReauthenticationResolver(e):t._getIdTokenResponse(e)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?jo._fromErrorAndOperation(e,r,B,C):r})}async function MT(e,B,t=!1){const C=await Xi(e,B._linkToIdToken(e.auth,await e.getIdToken()),t);return pr._forOperation(e,"link",C)}/**
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
 */async function LT(e,B,t=!1){const{auth:C}=e,n="reauthenticate";try{const r=await Xi(e,gE(C,n,B,e),t);Q(r.idToken,C,"internal-error");const i=ah(r.idToken);Q(i,C,"internal-error");const{sub:s}=i;return Q(e.uid===s,C,"user-mismatch"),pr._forOperation(e,n,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&mt(C,"user-mismatch"),r}}/**
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
 */async function xT(e,B,t=!1){const C="signIn",n=await gE(e,C,B),r=await pr._fromIdTokenResponse(e,C,n);return t||await e._updateCurrentUser(r.user),r}function HT(e,B,t,C){return Ee(e).onIdTokenChanged(B,t,C)}function GT(e,B,t){return Ee(e).beforeAuthStateChanged(B,t)}const Yo="__sak";/**
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
 */class vE{constructor(B,t){this.storageRetriever=B,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Yo,"1"),this.storage.removeItem(Yo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(B,t){return this.storage.setItem(B,JSON.stringify(t)),Promise.resolve()}_get(B){const t=this.storage.getItem(B);return Promise.resolve(t?JSON.parse(t):null)}_remove(B){return this.storage.removeItem(B),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function KT(){const e=Be();return oh(e)||Wl(e)}const UT=1e3,QT=10;class AE extends vE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(B,t)=>this.onStorageEvent(B,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=KT()&&AT(),this.fallbackToPolling=cE(),this._shouldAllowMigration=!0}forAllChangedKeys(B){for(const t of Object.keys(this.listeners)){const C=this.storage.getItem(t),n=this.localCache[t];C!==n&&B(t,n,C)}}onStorageEvent(B,t=!1){if(!B.key){this.forAllChangedKeys((i,s,a)=>{this.notifyListeners(i,a)});return}const C=B.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(C);if(B.newValue!==i)B.newValue!==null?this.storage.setItem(C,B.newValue):this.storage.removeItem(C);else if(this.localCache[C]===B.newValue&&!t)return}const n=()=>{const i=this.storage.getItem(C);!t&&this.localCache[C]===i||this.notifyListeners(C,i)},r=this.storage.getItem(C);vT()&&r!==B.newValue&&B.newValue!==B.oldValue?setTimeout(n,QT):n()}notifyListeners(B,t){this.localCache[B]=t;const C=this.listeners[B];if(C)for(const n of Array.from(C))n(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((B,t,C)=>{this.onStorageEvent(new StorageEvent("storage",{key:B,oldValue:t,newValue:C}),!0)})},UT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(B,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[B]||(this.listeners[B]=new Set,this.localCache[B]=this.storage.getItem(B)),this.listeners[B].add(t)}_removeListener(B,t){this.listeners[B]&&(this.listeners[B].delete(t),this.listeners[B].size===0&&delete this.listeners[B]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(B,t){await super._set(B,t),this.localCache[B]=JSON.stringify(t)}async _get(B){const t=await super._get(B);return this.localCache[B]=JSON.stringify(t),t}async _remove(B){await super._remove(B),delete this.localCache[B]}}AE.type="LOCAL";const JT=AE;/**
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
 */class yE extends vE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(B,t){}_removeListener(B,t){}}yE.type="SESSION";const EE=yE;/**
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
 */function VT(e){return Promise.all(e.map(async B=>{try{return{fulfilled:!0,value:await B}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class jl{constructor(B){this.eventTarget=B,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(B){const t=this.receivers.find(n=>n.isListeningto(B));if(t)return t;const C=new jl(B);return this.receivers.push(C),C}isListeningto(B){return this.eventTarget===B}async handleEvent(B){const t=B,{eventId:C,eventType:n,data:r}=t.data,i=this.handlersMap[n];if(!(i!=null&&i.size))return;t.ports[0].postMessage({status:"ack",eventId:C,eventType:n});const s=Array.from(i).map(async o=>o(t.origin,r)),a=await VT(s);t.ports[0].postMessage({status:"done",eventId:C,eventType:n,response:a})}_subscribe(B,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[B]||(this.handlersMap[B]=new Set),this.handlersMap[B].add(t)}_unsubscribe(B,t){this.handlersMap[B]&&t&&this.handlersMap[B].delete(t),(!t||this.handlersMap[B].size===0)&&delete this.handlersMap[B],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jl.receivers=[];/**
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
 */function ch(e="",B=10){let t="";for(let C=0;C<B;C++)t+=Math.floor(Math.random()*10);return e+t}/**
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
 */class WT{constructor(B){this.target=B,this.handlers=new Set}removeMessageHandler(B){B.messageChannel&&(B.messageChannel.port1.removeEventListener("message",B.onMessage),B.messageChannel.port1.close()),this.handlers.delete(B)}async _send(B,t,C=50){const n=typeof MessageChannel<"u"?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let r,i;return new Promise((s,a)=>{const o=ch("",20);n.port1.start();const l=setTimeout(()=>{a(new Error("unsupported_event"))},C);i={messageChannel:n,onMessage(c){const u=c;if(u.data.eventId===o)switch(u.data.status){case"ack":clearTimeout(l),r=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),s(u.data.response);break;default:clearTimeout(l),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(i),n.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:B,eventId:o,data:t},[n.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
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
 */function ht(){return window}function jT(e){ht().location.href=e}/**
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
 */function SE(){return typeof ht().WorkerGlobalScope<"u"&&typeof ht().importScripts=="function"}async function YT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function XT(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function ZT(){return SE()?self:null}/**
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
 */const IE="firebaseLocalStorageDb",qT=1,Xo="firebaseLocalStorage",bE="fbase_key";class bs{constructor(B){this.request=B}toPromise(){return new Promise((B,t)=>{this.request.addEventListener("success",()=>{B(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Yl(e,B){return e.transaction([Xo],B?"readwrite":"readonly").objectStore(Xo)}function zT(){const e=indexedDB.deleteDatabase(IE);return new bs(e).toPromise()}function _f(){const e=indexedDB.open(IE,qT);return new Promise((B,t)=>{e.addEventListener("error",()=>{t(e.error)}),e.addEventListener("upgradeneeded",()=>{const C=e.result;try{C.createObjectStore(Xo,{keyPath:bE})}catch(n){t(n)}}),e.addEventListener("success",async()=>{const C=e.result;C.objectStoreNames.contains(Xo)?B(C):(C.close(),await zT(),B(await _f()))})})}async function gm(e,B,t){const C=Yl(e,!0).put({[bE]:B,value:t});return new bs(C).toPromise()}async function _T(e,B){const t=Yl(e,!1).get(B),C=await new bs(t).toPromise();return C===void 0?null:C.value}function vm(e,B){const t=Yl(e,!0).delete(B);return new bs(t).toPromise()}const $T=800,BM=3;class wE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _f(),this.db)}async _withRetries(B){let t=0;for(;;)try{const C=await this._openDb();return await B(C)}catch(C){if(t++>BM)throw C;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return SE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jl._getInstance(ZT()),this.receiver._subscribe("keyChanged",async(B,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(B,t)=>["keyChanged"])}async initializeSender(){var B,t;if(this.activeServiceWorker=await YT(),!this.activeServiceWorker)return;this.sender=new WT(this.activeServiceWorker);const C=await this.sender._send("ping",{},800);C&&!((B=C[0])===null||B===void 0)&&B.fulfilled&&!((t=C[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(B){if(!(!this.sender||!this.activeServiceWorker||XT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:B},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const B=await _f();return await gm(B,Yo,"1"),await vm(B,Yo),!0}catch{}return!1}async _withPendingWrite(B){this.pendingWrites++;try{await B()}finally{this.pendingWrites--}}async _set(B,t){return this._withPendingWrite(async()=>(await this._withRetries(C=>gm(C,B,t)),this.localCache[B]=t,this.notifyServiceWorker(B)))}async _get(B){const t=await this._withRetries(C=>_T(C,B));return this.localCache[B]=t,t}async _remove(B){return this._withPendingWrite(async()=>(await this._withRetries(t=>vm(t,B)),delete this.localCache[B],this.notifyServiceWorker(B)))}async _poll(){const B=await this._withRetries(n=>{const r=Yl(n,!1).getAll();return new bs(r).toPromise()});if(!B)return[];if(this.pendingWrites!==0)return[];const t=[],C=new Set;for(const{fbase_key:n,value:r}of B)C.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(r)&&(this.notifyListeners(n,r),t.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!C.has(n)&&(this.notifyListeners(n,null),t.push(n));return t}notifyListeners(B,t){this.localCache[B]=t;const C=this.listeners[B];if(C)for(const n of Array.from(C))n(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$T)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(B,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[B]||(this.listeners[B]=new Set,this._get(B)),this.listeners[B].add(t)}_removeListener(B,t){this.listeners[B]&&(this.listeners[B].delete(t),this.listeners[B].size===0&&delete this.listeners[B]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wE.type="LOCAL";const eM=wE;new ys(3e4,6e4);/**
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
 */function DE(e,B){return B?Rt(B):(Q(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class uh extends mE{constructor(B){super("custom","custom"),this.params=B}_getIdTokenResponse(B){return tr(B,this._buildIdpRequest())}_linkToIdToken(B,t){return tr(B,this._buildIdpRequest(t))}_getReauthenticationResolver(B){return tr(B,this._buildIdpRequest())}_buildIdpRequest(B){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return B&&(t.idToken=B),t}}function tM(e){return xT(e.auth,new uh(e),e.bypassAuthState)}function CM(e){const{auth:B,user:t}=e;return Q(t,B,"internal-error"),LT(t,new uh(e),e.bypassAuthState)}async function nM(e){const{auth:B,user:t}=e;return Q(t,B,"internal-error"),MT(t,new uh(e),e.bypassAuthState)}/**
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
 */class PE{constructor(B,t,C,n,r=!1){this.auth=B,this.resolver=C,this.user=n,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(B,t)=>{this.pendingPromise={resolve:B,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(C){this.reject(C)}})}async onAuthEvent(B){const{urlResponse:t,sessionId:C,postBody:n,tenantId:r,error:i,type:s}=B;if(i){this.reject(i);return}const a={auth:this.auth,requestUri:t,sessionId:C,tenantId:r||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(o){this.reject(o)}}onError(B){this.reject(B)}getIdpTask(B){switch(B){case"signInViaPopup":case"signInViaRedirect":return tM;case"linkViaPopup":case"linkViaRedirect":return nM;case"reauthViaPopup":case"reauthViaRedirect":return CM;default:mt(this.auth,"internal-error")}}resolve(B){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(B),this.unregisterAndCleanUp()}reject(B){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(B),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rM=new ys(2e3,1e4);async function iM(e,B,t){const C=Ss(e);BT(e,B,lh);const n=DE(C,t);return new jC(C,"signInViaPopup",B,n).executeNotNull()}class jC extends PE{constructor(B,t,C,n,r){super(B,t,n,r),this.provider=C,this.authWindow=null,this.pollId=null,jC.currentPopupAction&&jC.currentPopupAction.cancel(),jC.currentPopupAction=this}async executeNotNull(){const B=await this.execute();return Q(B,this.auth,"internal-error"),B}async onExecution(){Ht(this.filter.length===1,"Popup operations only handle one event");const B=ch();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],B),this.authWindow.associatedEvent=B,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var B;return((B=this.authWindow)===null||B===void 0?void 0:B.associatedEvent)||null}cancel(){this.reject(dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jC.currentPopupAction=null}pollUserCancellation(){const B=()=>{var t,C;if(!((C=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||C===void 0)&&C.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(B,rM.get())};B()}}jC.currentPopupAction=null;/**
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
 */const sM="pendingRedirect",to=new Map;class aM extends PE{constructor(B,t,C=!1){super(B,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,C),this.eventId=null}async execute(){let B=to.get(this.auth._key());if(!B){try{const C=await oM(this.resolver,this.auth)?await super.execute():null;B=()=>Promise.resolve(C)}catch(t){B=()=>Promise.reject(t)}to.set(this.auth._key(),B)}return this.bypassAuthState||to.set(this.auth._key(),()=>Promise.resolve(null)),B()}async onAuthEvent(B){if(B.type==="signInViaRedirect")return super.onAuthEvent(B);if(B.type==="unknown"){this.resolve(null);return}if(B.eventId){const t=await this.auth._redirectUserForId(B.eventId);if(t)return this.user=t,super.onAuthEvent(B);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oM(e,B){const t=uM(B),C=cM(e);if(!await C._isAvailable())return!1;const n=await C._get(t)==="true";return await C._remove(t),n}function lM(e,B){to.set(e._key(),B)}function cM(e){return Rt(e._redirectPersistence)}function uM(e){return eo(sM,e.config.apiKey,e.name)}async function fM(e,B,t=!1){const C=Ss(e),n=DE(C,B),i=await new aM(C,n,t).execute();return i&&!t&&(delete i.user._redirectEventId,await C._persistUserIfCurrent(i.user),await C._setRedirectUser(null,B)),i}/**
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
 */const dM=10*60*1e3;class hM{constructor(B){this.auth=B,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(B){this.consumers.add(B),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,B)&&(this.sendToConsumer(this.queuedRedirectEvent,B),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(B){this.consumers.delete(B)}onEvent(B){if(this.hasEventBeenHandled(B))return!1;let t=!1;return this.consumers.forEach(C=>{this.isEventForConsumer(B,C)&&(t=!0,this.sendToConsumer(B,C),this.saveEventToCache(B))}),this.hasHandledPotentialRedirect||!pM(B)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=B,t=!0)),t}sendToConsumer(B,t){var C;if(B.error&&!RE(B)){const n=((C=B.error.code)===null||C===void 0?void 0:C.split("auth/")[1])||"internal-error";t.onError(dt(this.auth,n))}else t.onAuthEvent(B)}isEventForConsumer(B,t){const C=t.eventId===null||!!B.eventId&&B.eventId===t.eventId;return t.filter.includes(B.type)&&C}hasEventBeenHandled(B){return Date.now()-this.lastProcessedEventTime>=dM&&this.cachedEventUids.clear(),this.cachedEventUids.has(Am(B))}saveEventToCache(B){this.cachedEventUids.add(Am(B)),this.lastProcessedEventTime=Date.now()}}function Am(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(B=>B).join("-")}function RE({type:e,error:B}){return e==="unknown"&&(B==null?void 0:B.code)==="auth/no-auth-event"}function pM(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return RE(e);default:return!1}}/**
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
 */async function mM(e,B={}){return Es(e,"GET","/v1/projects",B)}/**
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
 */const gM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vM=/^https?/;async function AM(e){if(e.config.emulator)return;const{authorizedDomains:B}=await mM(e);for(const t of B)try{if(yM(t))return}catch{}mt(e,"unauthorized-domain")}function yM(e){const B=zf(),{protocol:t,hostname:C}=new URL(B);if(e.startsWith("chrome-extension://")){const i=new URL(e);return i.hostname===""&&C===""?t==="chrome-extension:"&&e.replace("chrome-extension://","")===B.replace("chrome-extension://",""):t==="chrome-extension:"&&i.hostname===C}if(!vM.test(t))return!1;if(gM.test(e))return C===e;const n=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+n+"|"+n+")$","i").test(C)}/**
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
 */const EM=new ys(3e4,6e4);function ym(){const e=ht().___jsl;if(e!=null&&e.H){for(const B of Object.keys(e.H))if(e.H[B].r=e.H[B].r||[],e.H[B].L=e.H[B].L||[],e.H[B].r=[...e.H[B].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}function SM(e){return new Promise((B,t)=>{var C,n,r;function i(){ym(),gapi.load("gapi.iframes",{callback:()=>{B(gapi.iframes.getContext())},ontimeout:()=>{ym(),t(dt(e,"network-request-failed"))},timeout:EM.get()})}if(!((n=(C=ht().gapi)===null||C===void 0?void 0:C.iframes)===null||n===void 0)&&n.Iframe)B(gapi.iframes.getContext());else if(!((r=ht().gapi)===null||r===void 0)&&r.load)i();else{const s=ET("iframefcb");return ht()[s]=()=>{gapi.load?i():t(dt(e,"network-request-failed"))},hE(`https://apis.google.com/js/api.js?onload=${s}`).catch(a=>t(a))}}).catch(B=>{throw Co=null,B})}let Co=null;function IM(e){return Co=Co||SM(e),Co}/**
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
 */const bM=new ys(5e3,15e3),wM="__/auth/iframe",DM="emulator/auth/iframe",PM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},RM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NM(e){const B=e.config;Q(B.authDomain,e,"auth-domain-config-required");const t=B.emulator?sh(B,DM):`https://${e.config.authDomain}/${wM}`,C={apiKey:B.apiKey,appName:e.name,v:Fr},n=RM.get(e.config.apiHost);n&&(C.eid=n);const r=e._getFrameworks();return r.length&&(C.fw=r.join(",")),`${t}?${Nr(C).slice(1)}`}async function FM(e){const B=await IM(e),t=ht().gapi;return Q(t,e,"internal-error"),B.open({where:document.body,url:NM(e),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:PM,dontclear:!0},C=>new Promise(async(n,r)=>{await C.restyle({setHideOnLeave:!1});const i=dt(e,"network-request-failed"),s=ht().setTimeout(()=>{r(i)},bM.get());function a(){ht().clearTimeout(s),n(C)}C.ping(a).then(a,()=>{r(i)})}))}/**
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
 */const OM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kM=500,TM=600,MM="_blank",LM="http://localhost";class Em{constructor(B){this.window=B,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xM(e,B,t,C=kM,n=TM){const r=Math.max((window.screen.availHeight-n)/2,0).toString(),i=Math.max((window.screen.availWidth-C)/2,0).toString();let s="";const a=Object.assign(Object.assign({},OM),{width:C.toString(),height:n.toString(),top:r,left:i}),o=Be().toLowerCase();t&&(s=iE(o)?MM:t),rE(o)&&(B=B||LM,a.scrollbars="yes");const l=Object.entries(a).reduce((u,[g,f])=>`${u}${g}=${f},`,"");if(gT(o)&&s!=="_self")return HM(B||"",s),new Em(null);const c=window.open(B||"",s,l);Q(c,e,"popup-blocked");try{c.focus()}catch{}return new Em(c)}function HM(e,B){const t=document.createElement("a");t.href=e,t.target=B;const C=document.createEvent("MouseEvent");C.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(C)}/**
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
 */const GM="__/auth/handler",KM="emulator/auth/handler",UM=encodeURIComponent("fac");async function Sm(e,B,t,C,n,r){Q(e.config.authDomain,e,"auth-domain-config-required"),Q(e.config.apiKey,e,"invalid-api-key");const i={apiKey:e.config.apiKey,appName:e.name,authType:t,redirectUrl:C,v:Fr,eventId:n};if(B instanceof lh){B.setDefaultLanguage(e.languageCode),i.providerId=B.providerId||"",Qf(B.getCustomParameters())||(i.customParameters=JSON.stringify(B.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))i[l]=c}if(B instanceof Is){const l=B.getScopes().filter(c=>c!=="");l.length>0&&(i.scopes=l.join(","))}e.tenantId&&(i.tid=e.tenantId);const s=i;for(const l of Object.keys(s))s[l]===void 0&&delete s[l];const a=await e._getAppCheckToken(),o=a?`#${UM}=${encodeURIComponent(a)}`:"";return`${QM(e)}?${Nr(s).slice(1)}${o}`}function QM({config:e}){return e.emulator?sh(e,KM):`https://${e.authDomain}/${GM}`}/**
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
 */const au="webStorageSupport";class JM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=EE,this._completeRedirectFn=fM,this._overrideRedirectResult=lM}async _openPopup(B,t,C,n){var r;Ht((r=this.eventManagers[B._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const i=await Sm(B,t,C,zf(),n);return xM(B,i,ch())}async _openRedirect(B,t,C,n){await this._originValidation(B);const r=await Sm(B,t,C,zf(),n);return jT(r),new Promise(()=>{})}_initialize(B){const t=B._key();if(this.eventManagers[t]){const{manager:n,promise:r}=this.eventManagers[t];return n?Promise.resolve(n):(Ht(r,"If manager is not set, promise should be"),r)}const C=this.initAndGetManager(B);return this.eventManagers[t]={promise:C},C.catch(()=>{delete this.eventManagers[t]}),C}async initAndGetManager(B){const t=await FM(B),C=new hM(B);return t.register("authEvent",n=>(Q(n==null?void 0:n.authEvent,B,"invalid-auth-event"),{status:C.onEvent(n.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[B._key()]={manager:C},this.iframes[B._key()]=t,C}_isIframeWebStorageSupported(B,t){this.iframes[B._key()].send(au,{type:au},n=>{var r;const i=(r=n==null?void 0:n[0])===null||r===void 0?void 0:r[au];i!==void 0&&t(!!i),mt(B,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(B){const t=B._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=AM(B)),this.originValidationPromises[t]}get _shouldInitProactively(){return cE()||oh()||Wl()}}const VM=JM;var Im="@firebase/auth",bm="0.23.2";/**
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
 */class WM{constructor(B){this.auth=B,this.internalListeners=new Map}getUid(){var B;return this.assertAuthConfigured(),((B=this.auth.currentUser)===null||B===void 0?void 0:B.uid)||null}async getToken(B){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(B)}:null}addAuthTokenListener(B){if(this.assertAuthConfigured(),this.internalListeners.has(B))return;const t=this.auth.onIdTokenChanged(C=>{B((C==null?void 0:C.stsTokenManager.accessToken)||null)});this.internalListeners.set(B,t),this.updateProactiveRefresh()}removeAuthTokenListener(B){this.assertAuthConfigured();const t=this.internalListeners.get(B);t&&(this.internalListeners.delete(B),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function jM(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function YM(e){pt(new nt("auth",(B,{options:t})=>{const C=B.getProvider("app").getImmediate(),n=B.getProvider("heartbeat"),r=B.getProvider("app-check-internal"),{apiKey:i,authDomain:s}=C.options;Q(i&&!i.includes(":"),"invalid-api-key",{appName:C.name});const a={apiKey:i,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uE(e)},o=new PT(C,n,r,a);return NT(o,t),o},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((B,t,C)=>{B.getProvider("auth-internal").initialize()})),pt(new nt("auth-internal",B=>{const t=Ss(B.getProvider("auth").getImmediate());return(C=>new WM(C))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ke(Im,bm,jM(e)),Ke(Im,bm,"esm2017")}/**
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
 */const XM=5*60,ZM=hy("authIdTokenMaxAge")||XM;let wm=null;const qM=e=>async B=>{const t=B&&await B.getIdTokenResult(),C=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(C&&C>ZM)return;const n=t==null?void 0:t.token;wm!==n&&(wm=n,await fetch(e,{method:n?"POST":"DELETE",headers:n?{Authorization:`Bearer ${n}`}:{}}))};function NE(e=z1()){const B=En(e,"auth");if(B.isInitialized())return B.getImmediate();const t=RT(e,{popupRedirectResolver:VM,persistence:[eM,JT,EE]}),C=hy("authTokenSyncURL");if(C){const r=qM(C);GT(t,r,()=>r(t.currentUser)),HT(t,i=>r(i))}const n=fy("auth");return n&&FT(t,`http://${n}`),t}YM("Browser");const Dm="@firebase/database",Pm="0.14.4";/**
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
 */let FE="";function zM(e){FE=e}/**
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
 */class _M{constructor(B){this.domStorage_=B,this.prefix_="firebase:"}set(B,t){t==null?this.domStorage_.removeItem(this.prefixedName_(B)):this.domStorage_.setItem(this.prefixedName_(B),kB(t))}get(B){const t=this.domStorage_.getItem(this.prefixedName_(B));return t==null?null:Wi(t)}remove(B){this.domStorage_.removeItem(this.prefixedName_(B))}prefixedName_(B){return this.prefix_+B}toString(){return this.domStorage_.toString()}}/**
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
 */class $M{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(B,t){t==null?delete this.cache_[B]:this.cache_[B]=t}get(B){return Vt(this.cache_,B)?this.cache_[B]:null}remove(B){delete this.cache_[B]}}/**
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
 */const OE=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const B=window[e];return B.setItem("firebase:sentinel","cache"),B.removeItem("firebase:sentinel"),new _M(B)}}catch{}return new $M},YC=OE("localStorage"),$f=OE("sessionStorage");/**
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
 */const Cr=new Ul("@firebase/database"),B6=function(){let e=1;return function(){return e++}}(),kE=function(e){const B=cF(e),t=new sF;t.update(B);const C=t.digest();return j1.encodeByteArray(C)},ws=function(...e){let B="";for(let t=0;t<e.length;t++){const C=e[t];Array.isArray(C)||C&&typeof C=="object"&&typeof C.length=="number"?B+=ws.apply(null,C):typeof C=="object"?B+=kB(C):B+=C,B+=" "}return B};let en=null,Rm=!0;const e6=function(e,B){R(!B||e===!0||e===!1,"Can't turn on custom loggers persistently."),e===!0?(Cr.logLevel=iB.VERBOSE,en=Cr.log.bind(Cr),B&&$f.set("logging_enabled",!0)):typeof e=="function"?en=e:(en=null,$f.remove("logging_enabled"))},_B=function(...e){if(Rm===!0&&(Rm=!1,en===null&&$f.get("logging_enabled")===!0&&e6(!0)),en){const B=ws.apply(null,e);en(B)}},Ds=function(e){return function(...B){_B(e,...B)}},Bd=function(...e){const B="FIREBASE INTERNAL ERROR: "+ws(...e);Cr.error(B)},Gt=function(...e){const B=`FIREBASE FATAL ERROR: ${ws(...e)}`;throw Cr.error(B),new Error(B)},Ae=function(...e){const B="FIREBASE WARNING: "+ws(...e);Cr.warn(B)},t6=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ae("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},TE=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},C6=function(e){if(document.readyState==="complete")e();else{let B=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}B||(B=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},mr="[MIN_NAME]",un="[MAX_NAME]",Or=function(e,B){if(e===B)return 0;if(e===mr||B===un)return-1;if(B===mr||e===un)return 1;{const t=Nm(e),C=Nm(B);return t!==null?C!==null?t-C===0?e.length-B.length:t-C:-1:C!==null?1:e<B?-1:1}},n6=function(e,B){return e===B?0:e<B?-1:1},Yr=function(e,B){if(B&&e in B)return B[e];throw new Error("Missing required key ("+e+") in object: "+kB(B))},fh=function(e){if(typeof e!="object"||e===null)return kB(e);const B=[];for(const C in e)B.push(C);B.sort();let t="{";for(let C=0;C<B.length;C++)C!==0&&(t+=","),t+=kB(B[C]),t+=":",t+=fh(e[B[C]]);return t+="}",t},ME=function(e,B){const t=e.length;if(t<=B)return[e];const C=[];for(let n=0;n<t;n+=B)n+B>t?C.push(e.substring(n,t)):C.push(e.substring(n,n+B));return C};function ye(e,B){for(const t in e)e.hasOwnProperty(t)&&B(t,e[t])}const LE=function(e){R(!TE(e),"Invalid JSON number");const B=11,t=52,C=(1<<B-1)-1;let n,r,i,s,a;e===0?(r=0,i=0,n=1/e===-1/0?1:0):(n=e<0,e=Math.abs(e),e>=Math.pow(2,1-C)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),C),r=s+C,i=Math.round(e*Math.pow(2,t-s)-Math.pow(2,t))):(r=0,i=Math.round(e/Math.pow(2,1-C-t))));const o=[];for(a=t;a;a-=1)o.push(i%2?1:0),i=Math.floor(i/2);for(a=B;a;a-=1)o.push(r%2?1:0),r=Math.floor(r/2);o.push(n?1:0),o.reverse();const l=o.join("");let c="";for(a=0;a<64;a+=8){let u=parseInt(l.substr(a,8),2).toString(16);u.length===1&&(u="0"+u),c=c+u}return c.toLowerCase()},r6=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},i6=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function s6(e,B){let t="Unknown Error";e==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":e==="permission_denied"?t="Client doesn't have permission to access the desired data.":e==="unavailable"&&(t="The service is unavailable");const C=new Error(e+" at "+B._path.toString()+": "+t);return C.code=e.toUpperCase(),C}const a6=new RegExp("^-?(0*)\\d{1,10}$"),o6=-2147483648,l6=2147483647,Nm=function(e){if(a6.test(e)){const B=Number(e);if(B>=o6&&B<=l6)return B}return null},kr=function(e){try{e()}catch(B){setTimeout(()=>{const t=B.stack||"";throw Ae("Exception was thrown by user callback.",t),B},Math.floor(0))}},c6=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},vi=function(e,B){const t=setTimeout(e,B);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class u6{constructor(B,t){this.appName_=B,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(C=>this.appCheck=C)}getToken(B){return this.appCheck?this.appCheck.getToken(B):new Promise((t,C)=>{setTimeout(()=>{this.appCheck?this.getToken(B).then(t,C):t(null)},0)})}addTokenChangeListener(B){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(C=>C.addTokenListener(B))}notifyForInvalidToken(){Ae(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class f6{constructor(B,t,C){this.appName_=B,this.firebaseOptions_=t,this.authProvider_=C,this.auth_=null,this.auth_=C.getImmediate({optional:!0}),this.auth_||C.onInit(n=>this.auth_=n)}getToken(B){return this.auth_?this.auth_.getToken(B).catch(t=>t&&t.code==="auth/token-not-initialized"?(_B("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,C)=>{setTimeout(()=>{this.auth_?this.getToken(B).then(t,C):t(null)},0)})}addTokenChangeListener(B){this.auth_?this.auth_.addAuthTokenListener(B):this.authProvider_.get().then(t=>t.addAuthTokenListener(B))}removeTokenChangeListener(B){this.authProvider_.get().then(t=>t.removeAuthTokenListener(B))}notifyForInvalidToken(){let B='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?B+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?B+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':B+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ae(B)}}class nr{constructor(B){this.accessToken=B}getToken(B){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(B){B(this.accessToken)}removeTokenChangeListener(B){}notifyForInvalidToken(){}}nr.OWNER="owner";/**
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
 */const dh="5",xE="v",HE="s",GE="r",KE="f",UE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,QE="ls",JE="p",ed="ac",VE="websocket",WE="long_polling";/**
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
 */class jE{constructor(B,t,C,n,r=!1,i="",s=!1,a=!1){this.secure=t,this.namespace=C,this.webSocketOnly=n,this.nodeAdmin=r,this.persistenceKey=i,this.includeNamespaceInQueryParams=s,this.isUsingEmulator=a,this._host=B.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=YC.get("host:"+B)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(B){B!==this.internalHost&&(this.internalHost=B,this.isCacheableHost()&&YC.set("host:"+this._host,this.internalHost))}toString(){let B=this.toURLString();return this.persistenceKey&&(B+="<"+this.persistenceKey+">"),B}toURLString(){const B=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${B}${this.host}/${t}`}}function d6(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function YE(e,B,t){R(typeof B=="string","typeof type must == string"),R(typeof t=="object","typeof params must == object");let C;if(B===VE)C=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(B===WE)C=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+B);d6(e)&&(t.ns=e.namespace);const n=[];return ye(t,(r,i)=>{n.push(r+"="+i)}),C+n.join("&")}/**
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
 */class h6{constructor(){this.counters_={}}incrementCounter(B,t=1){Vt(this.counters_,B)||(this.counters_[B]=0),this.counters_[B]+=t}get(){return jN(this.counters_)}}/**
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
 */const ou={},lu={};function hh(e){const B=e.toString();return ou[B]||(ou[B]=new h6),ou[B]}function p6(e,B){const t=e.toString();return lu[t]||(lu[t]=B()),lu[t]}/**
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
 */class m6{constructor(B){this.onMessage_=B,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(B,t){this.closeAfterResponse=B,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(B,t){for(this.pendingResponses[B]=t;this.pendingResponses[this.currentResponseNum];){const C=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let n=0;n<C.length;++n)C[n]&&kr(()=>{this.onMessage_(C[n])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Fm="start",g6="close",v6="pLPCommand",A6="pRTLPCB",XE="id",ZE="pw",qE="ser",y6="cb",E6="seg",S6="ts",I6="d",b6="dframe",zE=1870,_E=30,w6=zE-_E,D6=25e3,P6=3e4;class Wn{constructor(B,t,C,n,r,i,s){this.connId=B,this.repoInfo=t,this.applicationId=C,this.appCheckToken=n,this.authToken=r,this.transportSessionId=i,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ds(B),this.stats_=hh(t),this.urlFn=a=>(this.appCheckToken&&(a[ed]=this.appCheckToken),YE(t,WE,a))}open(B,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new m6(B),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(P6)),C6(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ph((...r)=>{const[i,s,a,o,l]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,i===Fm)this.id=s,this.password=a;else if(i===g6)s?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(s,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+i)},(...r)=>{const[i,s]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(i,s)},()=>{this.onClosed_()},this.urlFn);const C={};C[Fm]="t",C[qE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(C[y6]=this.scriptTagHolder.uniqueCallbackIdentifier),C[xE]=dh,this.transportSessionId&&(C[HE]=this.transportSessionId),this.lastSessionId&&(C[QE]=this.lastSessionId),this.applicationId&&(C[JE]=this.applicationId),this.appCheckToken&&(C[ed]=this.appCheckToken),typeof location<"u"&&location.hostname&&UE.test(location.hostname)&&(C[GE]=KE);const n=this.urlFn(C);this.log_("Connecting via long-poll to "+n),this.scriptTagHolder.addTag(n,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Wn.forceAllow_=!0}static forceDisallow(){Wn.forceDisallow_=!0}static isAvailable(){return Wn.forceAllow_?!0:!Wn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!r6()&&!i6()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(B){const t=kB(B);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const C=cy(t),n=ME(C,w6);for(let r=0;r<n.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,n.length,n[r]),this.curSegmentNum++}addDisconnectPingFrame(B,t){this.myDisconnFrame=document.createElement("iframe");const C={};C[b6]="t",C[XE]=B,C[ZE]=t,this.myDisconnFrame.src=this.urlFn(C),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(B){const t=kB(B).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class ph{constructor(B,t,C,n){this.onDisconnect=C,this.urlFn=n,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=B6(),window[v6+this.uniqueCallbackIdentifier]=B,window[A6+this.uniqueCallbackIdentifier]=t,this.myIFrame=ph.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const i="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(s){_B("frame writing exception"),s.stack&&_B(s.stack),_B(s)}}}static createIFrame_(){const B=document.createElement("iframe");if(B.style.display="none",document.body){document.body.appendChild(B);try{B.contentWindow.document||_B("No IE domain setting required")}catch{const C=document.domain;B.src="javascript:void((function(){document.open();document.domain='"+C+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return B.contentDocument?B.doc=B.contentDocument:B.contentWindow?B.doc=B.contentWindow.document:B.document&&(B.doc=B.document),B}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const B=this.onDisconnect;B&&(this.onDisconnect=null,B())}startLongPoll(B,t){for(this.myID=B,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const B={};B[XE]=this.myID,B[ZE]=this.myPW,B[qE]=this.currentSerial;let t=this.urlFn(B),C="",n=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+_E+C.length<=zE;){const i=this.pendingSegs.shift();C=C+"&"+E6+n+"="+i.seg+"&"+S6+n+"="+i.ts+"&"+I6+n+"="+i.d,n++}return t=t+C,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(B,t,C){this.pendingSegs.push({seg:B,ts:t,d:C}),this.alive&&this.newRequest_()}addLongPollTag_(B,t){this.outstandingRequests.add(t);const C=()=>{this.outstandingRequests.delete(t),this.newRequest_()},n=setTimeout(C,Math.floor(D6)),r=()=>{clearTimeout(n),C()};this.addTag(B,r)}addTag(B,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const C=this.myIFrame.doc.createElement("script");C.type="text/javascript",C.async=!0,C.src=B,C.onload=C.onreadystatechange=function(){const n=C.readyState;(!n||n==="loaded"||n==="complete")&&(C.onload=C.onreadystatechange=null,C.parentNode&&C.parentNode.removeChild(C),t())},C.onerror=()=>{_B("Long-poll script failed to load: "+B),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(C)}catch{}},Math.floor(1))}}/**
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
 */const R6=16384,N6=45e3;let Zo=null;typeof MozWebSocket<"u"?Zo=MozWebSocket:typeof WebSocket<"u"&&(Zo=WebSocket);class Ze{constructor(B,t,C,n,r,i,s){this.connId=B,this.applicationId=C,this.appCheckToken=n,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ds(this.connId),this.stats_=hh(t),this.connURL=Ze.connectionURL_(t,i,s,n,C),this.nodeAdmin=t.nodeAdmin}static connectionURL_(B,t,C,n,r){const i={};return i[xE]=dh,typeof location<"u"&&location.hostname&&UE.test(location.hostname)&&(i[GE]=KE),t&&(i[HE]=t),C&&(i[QE]=C),n&&(i[ed]=n),r&&(i[JE]=r),YE(B,VE,i)}open(B,t){this.onDisconnect=t,this.onMessage=B,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,YC.set("previous_websocket_failure",!0);try{let C;gy(),this.mySock=new Zo(this.connURL,[],C)}catch(C){this.log_("Error instantiating WebSocket.");const n=C.message||C.data;n&&this.log_(n),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=C=>{this.handleIncomingFrame(C)},this.mySock.onerror=C=>{this.log_("WebSocket error.  Closing connection.");const n=C.message||C.data;n&&this.log_(n),this.onClosed_()}}start(){}static forceDisallow(){Ze.forceDisallow_=!0}static isAvailable(){let B=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,C=navigator.userAgent.match(t);C&&C.length>1&&parseFloat(C[1])<4.4&&(B=!0)}return!B&&Zo!==null&&!Ze.forceDisallow_}static previouslyFailed(){return YC.isInMemoryStorage||YC.get("previous_websocket_failure")===!0}markConnectionHealthy(){YC.remove("previous_websocket_failure")}appendFrame_(B){if(this.frames.push(B),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const C=Wi(t);this.onMessage(C)}}handleNewFrameCount_(B){this.totalFrames=B,this.frames=[]}extractFrameCount_(B){if(R(this.frames===null,"We already have a frame buffer"),B.length<=6){const t=Number(B);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),B}handleIncomingFrame(B){if(this.mySock===null)return;const t=B.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const C=this.extractFrameCount_(t);C!==null&&this.appendFrame_(C)}}send(B){this.resetKeepAlive();const t=kB(B);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const C=ME(t,R6);C.length>1&&this.sendString_(String(C.length));for(let n=0;n<C.length;n++)this.sendString_(C[n])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(N6))}sendString_(B){try{this.mySock.send(B)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ze.responsesRequiredToBeHealthy=2;Ze.healthyTimeout=3e4;/**
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
 */class qi{constructor(B){this.initTransports_(B)}static get ALL_TRANSPORTS(){return[Wn,Ze]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(B){const t=Ze&&Ze.isAvailable();let C=t&&!Ze.previouslyFailed();if(B.webSocketOnly&&(t||Ae("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),C=!0),C)this.transports_=[Ze];else{const n=this.transports_=[];for(const r of qi.ALL_TRANSPORTS)r&&r.isAvailable()&&n.push(r);qi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}qi.globalTransportInitialized_=!1;/**
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
 */const F6=6e4,O6=5e3,k6=10*1024,T6=100*1024,cu="t",Om="d",M6="s",km="r",L6="e",Tm="o",Mm="a",Lm="n",xm="p",x6="h";class H6{constructor(B,t,C,n,r,i,s,a,o,l){this.id=B,this.repoInfo_=t,this.applicationId_=C,this.appCheckToken_=n,this.authToken_=r,this.onMessage_=i,this.onReady_=s,this.onDisconnect_=a,this.onKill_=o,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ds("c:"+this.id+":"),this.transportManager_=new qi(t),this.log_("Connection created"),this.start_()}start_(){const B=this.transportManager_.initialTransport();this.conn_=new B(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=B.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),C=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,C)},Math.floor(0));const n=B.healthyTimeout||0;n>0&&(this.healthyTimeout_=vi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>T6?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>k6?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(n)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(B){return t=>{B===this.conn_?this.onConnectionLost_(t):B===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(B){return t=>{this.state_!==2&&(B===this.rx_?this.onPrimaryMessageReceived_(t):B===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(B){const t={t:"d",d:B};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(B){if(cu in B){const t=B[cu];t===Mm?this.upgradeIfSecondaryHealthy_():t===km?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Tm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(B){const t=Yr("t",B),C=Yr("d",B);if(t==="c")this.onSecondaryControl_(C);else if(t==="d")this.pendingDataMessages.push(C);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:xm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Mm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Lm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(B){const t=Yr("t",B),C=Yr("d",B);t==="c"?this.onControl_(C):t==="d"&&this.onDataMessage_(C)}onDataMessage_(B){this.onPrimaryResponse_(),this.onMessage_(B)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(B){const t=Yr(cu,B);if(Om in B){const C=B[Om];if(t===x6){const n=Object.assign({},C);this.repoInfo_.isUsingEmulator&&(n.h=this.repoInfo_.host),this.onHandshake_(n)}else if(t===Lm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let n=0;n<this.pendingDataMessages.length;++n)this.onDataMessage_(this.pendingDataMessages[n]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===M6?this.onConnectionShutdown_(C):t===km?this.onReset_(C):t===L6?Bd("Server Error: "+C):t===Tm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Bd("Unknown control packet command: "+t)}}onHandshake_(B){const t=B.ts,C=B.v,n=B.h;this.sessionId=B.s,this.repoInfo_.host=n,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),dh!==C&&Ae("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const B=this.transportManager_.upgradeTransport();B&&this.startUpgrade_(B)}startUpgrade_(B){this.secondaryConn_=new B(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=B.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),C=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,C),vi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(F6))}onReset_(B){this.log_("Reset packet received.  New host: "+B),this.repoInfo_.host=B,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(B,t){this.log_("Realtime connection established."),this.conn_=B,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):vi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(O6))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:xm,d:{}}}))}onSecondaryConnectionLost_(){const B=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===B||this.rx_===B)&&this.close()}onConnectionLost_(B){this.conn_=null,!B&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(YC.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(B){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(B),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(B){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(B)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class $E{put(B,t,C,n){}merge(B,t,C,n){}refreshAuthToken(B){}refreshAppCheckToken(B){}onDisconnectPut(B,t,C){}onDisconnectMerge(B,t,C){}onDisconnectCancel(B,t){}reportStats(B){}}/**
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
 */class BS{constructor(B){this.allowedEvents_=B,this.listeners_={},R(Array.isArray(B)&&B.length>0,"Requires a non-empty array")}trigger(B,...t){if(Array.isArray(this.listeners_[B])){const C=[...this.listeners_[B]];for(let n=0;n<C.length;n++)C[n].callback.apply(C[n].context,t)}}on(B,t,C){this.validateEventType_(B),this.listeners_[B]=this.listeners_[B]||[],this.listeners_[B].push({callback:t,context:C});const n=this.getInitialEvent(B);n&&t.apply(C,n)}off(B,t,C){this.validateEventType_(B);const n=this.listeners_[B]||[];for(let r=0;r<n.length;r++)if(n[r].callback===t&&(!C||C===n[r].context)){n.splice(r,1);return}}validateEventType_(B){R(this.allowedEvents_.find(t=>t===B),"Unknown event: "+B)}}/**
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
 */class qo extends BS{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!X1()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new qo}getInitialEvent(B){return R(B==="online","Unknown event type: "+B),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Hm=32,Gm=768;class sB{constructor(B,t){if(t===void 0){this.pieces_=B.split("/");let C=0;for(let n=0;n<this.pieces_.length;n++)this.pieces_[n].length>0&&(this.pieces_[C]=this.pieces_[n],C++);this.pieces_.length=C,this.pieceNum_=0}else this.pieces_=B,this.pieceNum_=t}toString(){let B="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(B+="/"+this.pieces_[t]);return B||"/"}}function BB(){return new sB("")}function Z(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function DC(e){return e.pieces_.length-e.pieceNum_}function aB(e){let B=e.pieceNum_;return B<e.pieces_.length&&B++,new sB(e.pieces_,B)}function eS(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function G6(e){let B="";for(let t=e.pieceNum_;t<e.pieces_.length;t++)e.pieces_[t]!==""&&(B+="/"+encodeURIComponent(String(e.pieces_[t])));return B||"/"}function tS(e,B=0){return e.pieces_.slice(e.pieceNum_+B)}function CS(e){if(e.pieceNum_>=e.pieces_.length)return null;const B=[];for(let t=e.pieceNum_;t<e.pieces_.length-1;t++)B.push(e.pieces_[t]);return new sB(B,0)}function TB(e,B){const t=[];for(let C=e.pieceNum_;C<e.pieces_.length;C++)t.push(e.pieces_[C]);if(B instanceof sB)for(let C=B.pieceNum_;C<B.pieces_.length;C++)t.push(B.pieces_[C]);else{const C=B.split("/");for(let n=0;n<C.length;n++)C[n].length>0&&t.push(C[n])}return new sB(t,0)}function Y(e){return e.pieceNum_>=e.pieces_.length}function re(e,B){const t=Z(e),C=Z(B);if(t===null)return B;if(t===C)return re(aB(e),aB(B));throw new Error("INTERNAL ERROR: innerPath ("+B+") is not within outerPath ("+e+")")}function nS(e,B){if(DC(e)!==DC(B))return!1;for(let t=e.pieceNum_,C=B.pieceNum_;t<=e.pieces_.length;t++,C++)if(e.pieces_[t]!==B.pieces_[C])return!1;return!0}function qe(e,B){let t=e.pieceNum_,C=B.pieceNum_;if(DC(e)>DC(B))return!1;for(;t<e.pieces_.length;){if(e.pieces_[t]!==B.pieces_[C])return!1;++t,++C}return!0}class K6{constructor(B,t){this.errorPrefix_=t,this.parts_=tS(B,0),this.byteLength_=Math.max(1,this.parts_.length);for(let C=0;C<this.parts_.length;C++)this.byteLength_+=Kl(this.parts_[C]);rS(this)}}function U6(e,B){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(B),e.byteLength_+=Kl(B),rS(e)}function Q6(e){const B=e.parts_.pop();e.byteLength_-=Kl(B),e.parts_.length>0&&(e.byteLength_-=1)}function rS(e){if(e.byteLength_>Gm)throw new Error(e.errorPrefix_+"has a key path longer than "+Gm+" bytes ("+e.byteLength_+").");if(e.parts_.length>Hm)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Hm+") or object contains a cycle "+UC(e))}function UC(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
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
 */class mh extends BS{constructor(){super(["visible"]);let B,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",B="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",B="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",B="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",B="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const C=!document[B];C!==this.visible_&&(this.visible_=C,this.trigger("visible",C))},!1)}static getInstance(){return new mh}getInitialEvent(B){return R(B==="visible","Unknown event type: "+B),[this.visible_]}}/**
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
 */const Xr=1e3,J6=60*5*1e3,Km=30*1e3,V6=1.3,W6=3e4,j6="server_kill",Um=3;class Ot extends $E{constructor(B,t,C,n,r,i,s,a){if(super(),this.repoInfo_=B,this.applicationId_=t,this.onDataUpdate_=C,this.onConnectStatus_=n,this.onServerInfoUpdate_=r,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.authOverride_=a,this.id=Ot.nextPersistentConnectionId_++,this.log_=Ds("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Xr,this.maxReconnectDelay_=J6,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!gy())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");mh.getInstance().on("visible",this.onVisible_,this),B.host.indexOf("fblocal")===-1&&qo.getInstance().on("online",this.onOnline_,this)}sendRequest(B,t,C){const n=++this.requestNumber_,r={r:n,a:B,b:t};this.log_(kB(r)),R(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),C&&(this.requestCBHash_[n]=C)}get(B){this.initConnection_();const t=new Gl,n={action:"g",request:{p:B._path.toString(),q:B._queryObject},onComplete:i=>{const s=i.d;i.s==="ok"?t.resolve(s):t.reject(s)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(B,t,C,n){this.initConnection_();const r=B._queryIdentifier,i=B._path.toString();this.log_("Listen called for "+i+" "+r),this.listens.has(i)||this.listens.set(i,new Map),R(B._queryParams.isDefault()||!B._queryParams.loadsAllData(),"listen() called for non-default but complete query"),R(!this.listens.get(i).has(r),"listen() called twice for same path/queryId.");const s={onComplete:n,hashFn:t,query:B,tag:C};this.listens.get(i).set(r,s),this.connected_&&this.sendListen_(s)}sendGet_(B){const t=this.outstandingGets_[B];this.sendRequest("g",t.request,C=>{delete this.outstandingGets_[B],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(C)})}sendListen_(B){const t=B.query,C=t._path.toString(),n=t._queryIdentifier;this.log_("Listen on "+C+" for "+n);const r={p:C},i="q";B.tag&&(r.q=t._queryObject,r.t=B.tag),r.h=B.hashFn(),this.sendRequest(i,r,s=>{const a=s.d,o=s.s;Ot.warnOnListenWarnings_(a,t),(this.listens.get(C)&&this.listens.get(C).get(n))===B&&(this.log_("listen response",s),o!=="ok"&&this.removeListen_(C,n),B.onComplete&&B.onComplete(o,a))})}static warnOnListenWarnings_(B,t){if(B&&typeof B=="object"&&Vt(B,"w")){const C=hr(B,"w");if(Array.isArray(C)&&~C.indexOf("no_index")){const n='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Ae(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${n} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(B){this.authToken_=B,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(B)}reduceReconnectDelayIfAdminCredential_(B){(B&&B.length===40||iF(B))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Km)}refreshAppCheckToken(B){this.appCheckToken_=B,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const B=this.authToken_,t=rF(B)?"auth":"gauth",C={cred:B};this.authOverride_===null?C.noauth=!0:typeof this.authOverride_=="object"&&(C.authvar=this.authOverride_),this.sendRequest(t,C,n=>{const r=n.s,i=n.d||"error";this.authToken_===B&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,i))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},B=>{const t=B.s,C=B.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,C)})}unlisten(B,t){const C=B._path.toString(),n=B._queryIdentifier;this.log_("Unlisten called for "+C+" "+n),R(B._queryParams.isDefault()||!B._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(C,n)&&this.connected_&&this.sendUnlisten_(C,n,B._queryObject,t)}sendUnlisten_(B,t,C,n){this.log_("Unlisten on "+B+" for "+t);const r={p:B},i="n";n&&(r.q=C,r.t=n),this.sendRequest(i,r)}onDisconnectPut(B,t,C){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",B,t,C):this.onDisconnectRequestQueue_.push({pathString:B,action:"o",data:t,onComplete:C})}onDisconnectMerge(B,t,C){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",B,t,C):this.onDisconnectRequestQueue_.push({pathString:B,action:"om",data:t,onComplete:C})}onDisconnectCancel(B,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",B,null,t):this.onDisconnectRequestQueue_.push({pathString:B,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(B,t,C,n){const r={p:t,d:C};this.log_("onDisconnect "+B,r),this.sendRequest(B,r,i=>{n&&setTimeout(()=>{n(i.s,i.d)},Math.floor(0))})}put(B,t,C,n){this.putInternal("p",B,t,C,n)}merge(B,t,C,n){this.putInternal("m",B,t,C,n)}putInternal(B,t,C,n,r){this.initConnection_();const i={p:t,d:C};r!==void 0&&(i.h=r),this.outstandingPuts_.push({action:B,request:i,onComplete:n}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+t)}sendPut_(B){const t=this.outstandingPuts_[B].action,C=this.outstandingPuts_[B].request,n=this.outstandingPuts_[B].onComplete;this.outstandingPuts_[B].queued=this.connected_,this.sendRequest(t,C,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[B],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),n&&n(r.s,r.d)})}reportStats(B){if(this.connected_){const t={c:B};this.log_("reportStats",t),this.sendRequest("s",t,C=>{if(C.s!=="ok"){const r=C.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(B){if("r"in B){this.log_("from server: "+kB(B));const t=B.r,C=this.requestCBHash_[t];C&&(delete this.requestCBHash_[t],C(B.b))}else{if("error"in B)throw"A server-side error has occurred: "+B.error;"a"in B&&this.onDataPush_(B.a,B.b)}}onDataPush_(B,t){this.log_("handleServerMessage",B,t),B==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):B==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):B==="c"?this.onListenRevoked_(t.p,t.q):B==="ac"?this.onAuthRevoked_(t.s,t.d):B==="apc"?this.onAppCheckRevoked_(t.s,t.d):B==="sd"?this.onSecurityDebugPacket_(t):Bd("Unrecognized action received from server: "+kB(B)+`
Are you using the latest client?`)}onReady_(B,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(B),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(B){R(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(B))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(B){B&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Xr,this.realtime_||this.scheduleConnect_(0)),this.visible_=B}onOnline_(B){B?(this.log_("Browser went online."),this.reconnectDelay_=Xr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>W6&&(this.reconnectDelay_=Xr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const B=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-B);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*V6)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const B=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),C=this.onRealtimeDisconnect_.bind(this),n=this.id+":"+Ot.nextConnectionId_++,r=this.lastSessionId;let i=!1,s=null;const a=function(){s?s.close():(i=!0,C())},o=function(c){R(s,"sendRequest call when we're not connected not allowed."),s.sendRequest(c)};this.realtime_={close:a,sendRequest:o};const l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,u]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);i?_B("getToken() completed but was canceled"):(_B("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=u&&u.token,s=new H6(n,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,B,t,C,g=>{Ae(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(j6)},r))}catch(c){this.log_("Failed to get token: "+c),i||(this.repoInfo_.nodeAdmin&&Ae(c),a())}}}interrupt(B){_B("Interrupting connection for reason: "+B),this.interruptReasons_[B]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(B){_B("Resuming connection for reason: "+B),delete this.interruptReasons_[B],Qf(this.interruptReasons_)&&(this.reconnectDelay_=Xr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(B){const t=B-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let B=0;B<this.outstandingPuts_.length;B++){const t=this.outstandingPuts_[B];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[B],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(B,t){let C;t?C=t.map(r=>fh(r)).join("$"):C="default";const n=this.removeListen_(B,C);n&&n.onComplete&&n.onComplete("permission_denied")}removeListen_(B,t){const C=new sB(B).toString();let n;if(this.listens.has(C)){const r=this.listens.get(C);n=r.get(t),r.delete(t),r.size===0&&this.listens.delete(C)}else n=void 0;return n}onAuthRevoked_(B,t){_B("Auth token revoked: "+B+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(B==="invalid_token"||B==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Um&&(this.reconnectDelay_=Km,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(B,t){_B("App check token revoked: "+B+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(B==="invalid_token"||B==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Um&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(B){this.securityDebugCallback_?this.securityDebugCallback_(B):"msg"in B&&console.log("FIREBASE: "+B.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const B of this.listens.values())for(const t of B.values())this.sendListen_(t);for(let B=0;B<this.outstandingPuts_.length;B++)this.outstandingPuts_[B]&&this.sendPut_(B);for(;this.onDisconnectRequestQueue_.length;){const B=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(B.action,B.pathString,B.data,B.onComplete)}for(let B=0;B<this.outstandingGets_.length;B++)this.outstandingGets_[B]&&this.sendGet_(B)}sendConnectStats_(){const B={};let t="js";B["sdk."+t+"."+FE.replace(/\./g,"-")]=1,X1()?B["framework.cordova"]=1:my()&&(B["framework.reactnative"]=1),this.reportStats(B)}shouldReconnect_(){const B=qo.getInstance().currentlyOnline();return Qf(this.interruptReasons_)&&B}}Ot.nextPersistentConnectionId_=0;Ot.nextConnectionId_=0;/**
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
 */class Xl{getCompare(){return this.compare.bind(this)}indexedValueChanged(B,t){const C=new j(mr,B),n=new j(mr,t);return this.compare(C,n)!==0}minPost(){return j.MIN}}/**
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
 */let da;class iS extends Xl{static get __EMPTY_NODE(){return da}static set __EMPTY_NODE(B){da=B}compare(B,t){return Or(B.name,t.name)}isDefinedOn(B){throw Rr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(B,t){return!1}minPost(){return j.MIN}maxPost(){return new j(un,da)}makePost(B,t){return R(typeof B=="string","KeyIndex indexValue must always be a string."),new j(B,da)}toString(){return".key"}}const rr=new iS;/**
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
 */class ha{constructor(B,t,C,n,r=null){this.isReverse_=n,this.resultGenerator_=r,this.nodeStack_=[];let i=1;for(;!B.isEmpty();)if(B=B,i=t?C(B.key,t):1,n&&(i*=-1),i<0)this.isReverse_?B=B.left:B=B.right;else if(i===0){this.nodeStack_.push(B);break}else this.nodeStack_.push(B),this.isReverse_?B=B.right:B=B.left}getNext(){if(this.nodeStack_.length===0)return null;let B=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(B.key,B.value):t={key:B.key,value:B.value},this.isReverse_)for(B=B.left;!B.isEmpty();)this.nodeStack_.push(B),B=B.right;else for(B=B.right;!B.isEmpty();)this.nodeStack_.push(B),B=B.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const B=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(B.key,B.value):{key:B.key,value:B.value}}}class KB{constructor(B,t,C,n,r){this.key=B,this.value=t,this.color=C??KB.RED,this.left=n??he.EMPTY_NODE,this.right=r??he.EMPTY_NODE}copy(B,t,C,n,r){return new KB(B??this.key,t??this.value,C??this.color,n??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(B){return this.left.inorderTraversal(B)||!!B(this.key,this.value)||this.right.inorderTraversal(B)}reverseTraversal(B){return this.right.reverseTraversal(B)||B(this.key,this.value)||this.left.reverseTraversal(B)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(B,t,C){let n=this;const r=C(B,n.key);return r<0?n=n.copy(null,null,null,n.left.insert(B,t,C),null):r===0?n=n.copy(null,t,null,null,null):n=n.copy(null,null,null,null,n.right.insert(B,t,C)),n.fixUp_()}removeMin_(){if(this.left.isEmpty())return he.EMPTY_NODE;let B=this;return!B.left.isRed_()&&!B.left.left.isRed_()&&(B=B.moveRedLeft_()),B=B.copy(null,null,null,B.left.removeMin_(),null),B.fixUp_()}remove(B,t){let C,n;if(C=this,t(B,C.key)<0)!C.left.isEmpty()&&!C.left.isRed_()&&!C.left.left.isRed_()&&(C=C.moveRedLeft_()),C=C.copy(null,null,null,C.left.remove(B,t),null);else{if(C.left.isRed_()&&(C=C.rotateRight_()),!C.right.isEmpty()&&!C.right.isRed_()&&!C.right.left.isRed_()&&(C=C.moveRedRight_()),t(B,C.key)===0){if(C.right.isEmpty())return he.EMPTY_NODE;n=C.right.min_(),C=C.copy(n.key,n.value,null,null,C.right.removeMin_())}C=C.copy(null,null,null,null,C.right.remove(B,t))}return C.fixUp_()}isRed_(){return this.color}fixUp_(){let B=this;return B.right.isRed_()&&!B.left.isRed_()&&(B=B.rotateLeft_()),B.left.isRed_()&&B.left.left.isRed_()&&(B=B.rotateRight_()),B.left.isRed_()&&B.right.isRed_()&&(B=B.colorFlip_()),B}moveRedLeft_(){let B=this.colorFlip_();return B.right.left.isRed_()&&(B=B.copy(null,null,null,null,B.right.rotateRight_()),B=B.rotateLeft_(),B=B.colorFlip_()),B}moveRedRight_(){let B=this.colorFlip_();return B.left.left.isRed_()&&(B=B.rotateRight_(),B=B.colorFlip_()),B}rotateLeft_(){const B=this.copy(null,null,KB.RED,null,this.right.left);return this.right.copy(null,null,this.color,B,null)}rotateRight_(){const B=this.copy(null,null,KB.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,B)}colorFlip_(){const B=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,B,t)}checkMaxDepth_(){const B=this.check_();return Math.pow(2,B)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const B=this.left.check_();if(B!==this.right.check_())throw new Error("Black depths differ");return B+(this.isRed_()?0:1)}}KB.RED=!0;KB.BLACK=!1;class Y6{copy(B,t,C,n,r){return this}insert(B,t,C){return new KB(B,t,null)}remove(B,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(B){return!1}reverseTraversal(B){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class he{constructor(B,t=he.EMPTY_NODE){this.comparator_=B,this.root_=t}insert(B,t){return new he(this.comparator_,this.root_.insert(B,t,this.comparator_).copy(null,null,KB.BLACK,null,null))}remove(B){return new he(this.comparator_,this.root_.remove(B,this.comparator_).copy(null,null,KB.BLACK,null,null))}get(B){let t,C=this.root_;for(;!C.isEmpty();){if(t=this.comparator_(B,C.key),t===0)return C.value;t<0?C=C.left:t>0&&(C=C.right)}return null}getPredecessorKey(B){let t,C=this.root_,n=null;for(;!C.isEmpty();)if(t=this.comparator_(B,C.key),t===0){if(C.left.isEmpty())return n?n.key:null;for(C=C.left;!C.right.isEmpty();)C=C.right;return C.key}else t<0?C=C.left:t>0&&(n=C,C=C.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(B){return this.root_.inorderTraversal(B)}reverseTraversal(B){return this.root_.reverseTraversal(B)}getIterator(B){return new ha(this.root_,null,this.comparator_,!1,B)}getIteratorFrom(B,t){return new ha(this.root_,B,this.comparator_,!1,t)}getReverseIteratorFrom(B,t){return new ha(this.root_,B,this.comparator_,!0,t)}getReverseIterator(B){return new ha(this.root_,null,this.comparator_,!0,B)}}he.EMPTY_NODE=new Y6;/**
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
 */function X6(e,B){return Or(e.name,B.name)}function gh(e,B){return Or(e,B)}/**
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
 */let td;function Z6(e){td=e}const sS=function(e){return typeof e=="number"?"number:"+LE(e):"string:"+e},aS=function(e){if(e.isLeafNode()){const B=e.val();R(typeof B=="string"||typeof B=="number"||typeof B=="object"&&Vt(B,".sv"),"Priority must be a string or number.")}else R(e===td||e.isEmpty(),"priority of unexpected type.");R(e===td||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Qm;class HB{constructor(B,t=HB.__childrenNodeConstructor.EMPTY_NODE){this.value_=B,this.priorityNode_=t,this.lazyHash_=null,R(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),aS(this.priorityNode_)}static set __childrenNodeConstructor(B){Qm=B}static get __childrenNodeConstructor(){return Qm}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(B){return new HB(this.value_,B)}getImmediateChild(B){return B===".priority"?this.priorityNode_:HB.__childrenNodeConstructor.EMPTY_NODE}getChild(B){return Y(B)?this:Z(B)===".priority"?this.priorityNode_:HB.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(B,t){return null}updateImmediateChild(B,t){return B===".priority"?this.updatePriority(t):t.isEmpty()&&B!==".priority"?this:HB.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(B,t).updatePriority(this.priorityNode_)}updateChild(B,t){const C=Z(B);return C===null?t:t.isEmpty()&&C!==".priority"?this:(R(C!==".priority"||DC(B)===1,".priority must be the last token in a path"),this.updateImmediateChild(C,HB.__childrenNodeConstructor.EMPTY_NODE.updateChild(aB(B),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(B,t){return!1}val(B){return B&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let B="";this.priorityNode_.isEmpty()||(B+="priority:"+sS(this.priorityNode_.val())+":");const t=typeof this.value_;B+=t+":",t==="number"?B+=LE(this.value_):B+=this.value_,this.lazyHash_=kE(B)}return this.lazyHash_}getValue(){return this.value_}compareTo(B){return B===HB.__childrenNodeConstructor.EMPTY_NODE?1:B instanceof HB.__childrenNodeConstructor?-1:(R(B.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(B))}compareToLeafNode_(B){const t=typeof B.value_,C=typeof this.value_,n=HB.VALUE_TYPE_ORDER.indexOf(t),r=HB.VALUE_TYPE_ORDER.indexOf(C);return R(n>=0,"Unknown leaf type: "+t),R(r>=0,"Unknown leaf type: "+C),n===r?C==="object"?0:this.value_<B.value_?-1:this.value_===B.value_?0:1:r-n}withIndex(){return this}isIndexed(){return!0}equals(B){if(B===this)return!0;if(B.isLeafNode()){const t=B;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}HB.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let oS,lS;function q6(e){oS=e}function z6(e){lS=e}class _6 extends Xl{compare(B,t){const C=B.node.getPriority(),n=t.node.getPriority(),r=C.compareTo(n);return r===0?Or(B.name,t.name):r}isDefinedOn(B){return!B.getPriority().isEmpty()}indexedValueChanged(B,t){return!B.getPriority().equals(t.getPriority())}minPost(){return j.MIN}maxPost(){return new j(un,new HB("[PRIORITY-POST]",lS))}makePost(B,t){const C=oS(B);return new j(t,new HB("[PRIORITY-POST]",C))}toString(){return".priority"}}const bB=new _6;/**
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
 */const $6=Math.log(2);class BL{constructor(B){const t=r=>parseInt(Math.log(r)/$6,10),C=r=>parseInt(Array(r+1).join("1"),2);this.count=t(B+1),this.current_=this.count-1;const n=C(this.count);this.bits_=B+1&n}nextBitIsOne(){const B=!(this.bits_&1<<this.current_);return this.current_--,B}}const zo=function(e,B,t,C){e.sort(B);const n=function(a,o){const l=o-a;let c,u;if(l===0)return null;if(l===1)return c=e[a],u=t?t(c):c,new KB(u,c.node,KB.BLACK,null,null);{const g=parseInt(l/2,10)+a,f=n(a,g),m=n(g+1,o);return c=e[g],u=t?t(c):c,new KB(u,c.node,KB.BLACK,f,m)}},r=function(a){let o=null,l=null,c=e.length;const u=function(f,m){const p=c-f,d=c;c-=f;const h=n(p+1,d),v=e[p],A=t?t(v):v;g(new KB(A,v.node,m,null,h))},g=function(f){o?(o.left=f,o=f):(l=f,o=f)};for(let f=0;f<a.count;++f){const m=a.nextBitIsOne(),p=Math.pow(2,a.count-(f+1));m?u(p,KB.BLACK):(u(p,KB.BLACK),u(p,KB.RED))}return l},i=new BL(e.length),s=r(i);return new he(C||B,s)};/**
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
 */let uu;const Pn={};class Nt{constructor(B,t){this.indexes_=B,this.indexSet_=t}static get Default(){return R(Pn&&bB,"ChildrenNode.ts has not been loaded"),uu=uu||new Nt({".priority":Pn},{".priority":bB}),uu}get(B){const t=hr(this.indexes_,B);if(!t)throw new Error("No index defined for "+B);return t instanceof he?t:null}hasIndex(B){return Vt(this.indexSet_,B.toString())}addIndex(B,t){R(B!==rr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const C=[];let n=!1;const r=t.getIterator(j.Wrap);let i=r.getNext();for(;i;)n=n||B.isDefinedOn(i.node),C.push(i),i=r.getNext();let s;n?s=zo(C,B.getCompare()):s=Pn;const a=B.toString(),o=Object.assign({},this.indexSet_);o[a]=B;const l=Object.assign({},this.indexes_);return l[a]=s,new Nt(l,o)}addToIndexes(B,t){const C=Ko(this.indexes_,(n,r)=>{const i=hr(this.indexSet_,r);if(R(i,"Missing index implementation for "+r),n===Pn)if(i.isDefinedOn(B.node)){const s=[],a=t.getIterator(j.Wrap);let o=a.getNext();for(;o;)o.name!==B.name&&s.push(o),o=a.getNext();return s.push(B),zo(s,i.getCompare())}else return Pn;else{const s=t.get(B.name);let a=n;return s&&(a=a.remove(new j(B.name,s))),a.insert(B,B.node)}});return new Nt(C,this.indexSet_)}removeFromIndexes(B,t){const C=Ko(this.indexes_,n=>{if(n===Pn)return n;{const r=t.get(B.name);return r?n.remove(new j(B.name,r)):n}});return new Nt(C,this.indexSet_)}}/**
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
 */let Zr;class K{constructor(B,t,C){this.children_=B,this.priorityNode_=t,this.indexMap_=C,this.lazyHash_=null,this.priorityNode_&&aS(this.priorityNode_),this.children_.isEmpty()&&R(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Zr||(Zr=new K(new he(gh),null,Nt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Zr}updatePriority(B){return this.children_.isEmpty()?this:new K(this.children_,B,this.indexMap_)}getImmediateChild(B){if(B===".priority")return this.getPriority();{const t=this.children_.get(B);return t===null?Zr:t}}getChild(B){const t=Z(B);return t===null?this:this.getImmediateChild(t).getChild(aB(B))}hasChild(B){return this.children_.get(B)!==null}updateImmediateChild(B,t){if(R(t,"We should always be passing snapshot nodes"),B===".priority")return this.updatePriority(t);{const C=new j(B,t);let n,r;t.isEmpty()?(n=this.children_.remove(B),r=this.indexMap_.removeFromIndexes(C,this.children_)):(n=this.children_.insert(B,t),r=this.indexMap_.addToIndexes(C,this.children_));const i=n.isEmpty()?Zr:this.priorityNode_;return new K(n,i,r)}}updateChild(B,t){const C=Z(B);if(C===null)return t;{R(Z(B)!==".priority"||DC(B)===1,".priority must be the last token in a path");const n=this.getImmediateChild(C).updateChild(aB(B),t);return this.updateImmediateChild(C,n)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(B){if(this.isEmpty())return null;const t={};let C=0,n=0,r=!0;if(this.forEachChild(bB,(i,s)=>{t[i]=s.val(B),C++,r&&K.INTEGER_REGEXP_.test(i)?n=Math.max(n,Number(i)):r=!1}),!B&&r&&n<2*C){const i=[];for(const s in t)i[s]=t[s];return i}else return B&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let B="";this.getPriority().isEmpty()||(B+="priority:"+sS(this.getPriority().val())+":"),this.forEachChild(bB,(t,C)=>{const n=C.hash();n!==""&&(B+=":"+t+":"+n)}),this.lazyHash_=B===""?"":kE(B)}return this.lazyHash_}getPredecessorChildName(B,t,C){const n=this.resolveIndex_(C);if(n){const r=n.getPredecessorKey(new j(B,t));return r?r.name:null}else return this.children_.getPredecessorKey(B)}getFirstChildName(B){const t=this.resolveIndex_(B);if(t){const C=t.minKey();return C&&C.name}else return this.children_.minKey()}getFirstChild(B){const t=this.getFirstChildName(B);return t?new j(t,this.children_.get(t)):null}getLastChildName(B){const t=this.resolveIndex_(B);if(t){const C=t.maxKey();return C&&C.name}else return this.children_.maxKey()}getLastChild(B){const t=this.getLastChildName(B);return t?new j(t,this.children_.get(t)):null}forEachChild(B,t){const C=this.resolveIndex_(B);return C?C.inorderTraversal(n=>t(n.name,n.node)):this.children_.inorderTraversal(t)}getIterator(B){return this.getIteratorFrom(B.minPost(),B)}getIteratorFrom(B,t){const C=this.resolveIndex_(t);if(C)return C.getIteratorFrom(B,n=>n);{const n=this.children_.getIteratorFrom(B.name,j.Wrap);let r=n.peek();for(;r!=null&&t.compare(r,B)<0;)n.getNext(),r=n.peek();return n}}getReverseIterator(B){return this.getReverseIteratorFrom(B.maxPost(),B)}getReverseIteratorFrom(B,t){const C=this.resolveIndex_(t);if(C)return C.getReverseIteratorFrom(B,n=>n);{const n=this.children_.getReverseIteratorFrom(B.name,j.Wrap);let r=n.peek();for(;r!=null&&t.compare(r,B)>0;)n.getNext(),r=n.peek();return n}}compareTo(B){return this.isEmpty()?B.isEmpty()?0:-1:B.isLeafNode()||B.isEmpty()?1:B===Ps?-1:0}withIndex(B){if(B===rr||this.indexMap_.hasIndex(B))return this;{const t=this.indexMap_.addIndex(B,this.children_);return new K(this.children_,this.priorityNode_,t)}}isIndexed(B){return B===rr||this.indexMap_.hasIndex(B)}equals(B){if(B===this)return!0;if(B.isLeafNode())return!1;{const t=B;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const C=this.getIterator(bB),n=t.getIterator(bB);let r=C.getNext(),i=n.getNext();for(;r&&i;){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=C.getNext(),i=n.getNext()}return r===null&&i===null}else return!1;else return!1}}resolveIndex_(B){return B===rr?null:this.indexMap_.get(B.toString())}}K.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class eL extends K{constructor(){super(new he(gh),K.EMPTY_NODE,Nt.Default)}compareTo(B){return B===this?0:1}equals(B){return B===this}getPriority(){return this}getImmediateChild(B){return K.EMPTY_NODE}isEmpty(){return!1}}const Ps=new eL;Object.defineProperties(j,{MIN:{value:new j(mr,K.EMPTY_NODE)},MAX:{value:new j(un,Ps)}});iS.__EMPTY_NODE=K.EMPTY_NODE;HB.__childrenNodeConstructor=K;Z6(Ps);z6(Ps);/**
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
 */const tL=!0;function UB(e,B=null){if(e===null)return K.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(B=e[".priority"]),R(B===null||typeof B=="string"||typeof B=="number"||typeof B=="object"&&".sv"in B,"Invalid priority type found: "+typeof B),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const t=e;return new HB(t,UB(B))}if(!(e instanceof Array)&&tL){const t=[];let C=!1;if(ye(e,(i,s)=>{if(i.substring(0,1)!=="."){const a=UB(s);a.isEmpty()||(C=C||!a.getPriority().isEmpty(),t.push(new j(i,a)))}}),t.length===0)return K.EMPTY_NODE;const r=zo(t,X6,i=>i.name,gh);if(C){const i=zo(t,bB.getCompare());return new K(r,UB(B),new Nt({".priority":i},{".priority":bB}))}else return new K(r,UB(B),Nt.Default)}else{let t=K.EMPTY_NODE;return ye(e,(C,n)=>{if(Vt(e,C)&&C.substring(0,1)!=="."){const r=UB(n);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(C,r))}}),t.updatePriority(UB(B))}}q6(UB);/**
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
 */class CL extends Xl{constructor(B){super(),this.indexPath_=B,R(!Y(B)&&Z(B)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(B){return B.getChild(this.indexPath_)}isDefinedOn(B){return!B.getChild(this.indexPath_).isEmpty()}compare(B,t){const C=this.extractChild(B.node),n=this.extractChild(t.node),r=C.compareTo(n);return r===0?Or(B.name,t.name):r}makePost(B,t){const C=UB(B),n=K.EMPTY_NODE.updateChild(this.indexPath_,C);return new j(t,n)}maxPost(){const B=K.EMPTY_NODE.updateChild(this.indexPath_,Ps);return new j(un,B)}toString(){return tS(this.indexPath_,0).join("/")}}/**
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
 */class nL extends Xl{compare(B,t){const C=B.node.compareTo(t.node);return C===0?Or(B.name,t.name):C}isDefinedOn(B){return!0}indexedValueChanged(B,t){return!B.equals(t)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(B,t){const C=UB(B);return new j(t,C)}toString(){return".value"}}const rL=new nL;/**
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
 */function cS(e){return{type:"value",snapshotNode:e}}function gr(e,B){return{type:"child_added",snapshotNode:B,childName:e}}function zi(e,B){return{type:"child_removed",snapshotNode:B,childName:e}}function _i(e,B,t){return{type:"child_changed",snapshotNode:B,childName:e,oldSnap:t}}function iL(e,B){return{type:"child_moved",snapshotNode:B,childName:e}}/**
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
 */class vh{constructor(B){this.index_=B}updateChild(B,t,C,n,r,i){R(B.isIndexed(this.index_),"A node must be indexed if only a child is updated");const s=B.getImmediateChild(t);return s.getChild(n).equals(C.getChild(n))&&s.isEmpty()===C.isEmpty()||(i!=null&&(C.isEmpty()?B.hasChild(t)?i.trackChildChange(zi(t,s)):R(B.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):s.isEmpty()?i.trackChildChange(gr(t,C)):i.trackChildChange(_i(t,C,s))),B.isLeafNode()&&C.isEmpty())?B:B.updateImmediateChild(t,C).withIndex(this.index_)}updateFullNode(B,t,C){return C!=null&&(B.isLeafNode()||B.forEachChild(bB,(n,r)=>{t.hasChild(n)||C.trackChildChange(zi(n,r))}),t.isLeafNode()||t.forEachChild(bB,(n,r)=>{if(B.hasChild(n)){const i=B.getImmediateChild(n);i.equals(r)||C.trackChildChange(_i(n,r,i))}else C.trackChildChange(gr(n,r))})),t.withIndex(this.index_)}updatePriority(B,t){return B.isEmpty()?K.EMPTY_NODE:B.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class $i{constructor(B){this.indexedFilter_=new vh(B.getIndex()),this.index_=B.getIndex(),this.startPost_=$i.getStartPost_(B),this.endPost_=$i.getEndPost_(B),this.startIsInclusive_=!B.startAfterSet_,this.endIsInclusive_=!B.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(B){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),B)<=0:this.index_.compare(this.getStartPost(),B)<0,C=this.endIsInclusive_?this.index_.compare(B,this.getEndPost())<=0:this.index_.compare(B,this.getEndPost())<0;return t&&C}updateChild(B,t,C,n,r,i){return this.matches(new j(t,C))||(C=K.EMPTY_NODE),this.indexedFilter_.updateChild(B,t,C,n,r,i)}updateFullNode(B,t,C){t.isLeafNode()&&(t=K.EMPTY_NODE);let n=t.withIndex(this.index_);n=n.updatePriority(K.EMPTY_NODE);const r=this;return t.forEachChild(bB,(i,s)=>{r.matches(new j(i,s))||(n=n.updateImmediateChild(i,K.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(B,n,C)}updatePriority(B,t){return B}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(B){if(B.hasStart()){const t=B.getIndexStartName();return B.getIndex().makePost(B.getIndexStartValue(),t)}else return B.getIndex().minPost()}static getEndPost_(B){if(B.hasEnd()){const t=B.getIndexEndName();return B.getIndex().makePost(B.getIndexEndValue(),t)}else return B.getIndex().maxPost()}}/**
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
 */class sL{constructor(B){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const C=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?C<=0:C<0},this.withinEndPost=t=>{const C=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?C<=0:C<0},this.rangedFilter_=new $i(B),this.index_=B.getIndex(),this.limit_=B.getLimit(),this.reverse_=!B.isViewFromLeft(),this.startIsInclusive_=!B.startAfterSet_,this.endIsInclusive_=!B.endBeforeSet_}updateChild(B,t,C,n,r,i){return this.rangedFilter_.matches(new j(t,C))||(C=K.EMPTY_NODE),B.getImmediateChild(t).equals(C)?B:B.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(B,t,C,n,r,i):this.fullLimitUpdateChild_(B,t,C,r,i)}updateFullNode(B,t,C){let n;if(t.isLeafNode()||t.isEmpty())n=K.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){n=K.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let i=0;for(;r.hasNext()&&i<this.limit_;){const s=r.getNext();if(this.withinDirectionalStart(s))if(this.withinDirectionalEnd(s))n=n.updateImmediateChild(s.name,s.node),i++;else break;else continue}}else{n=t.withIndex(this.index_),n=n.updatePriority(K.EMPTY_NODE);let r;this.reverse_?r=n.getReverseIterator(this.index_):r=n.getIterator(this.index_);let i=0;for(;r.hasNext();){const s=r.getNext();i<this.limit_&&this.withinDirectionalStart(s)&&this.withinDirectionalEnd(s)?i++:n=n.updateImmediateChild(s.name,K.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(B,n,C)}updatePriority(B,t){return B}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(B,t,C,n,r){let i;if(this.reverse_){const c=this.index_.getCompare();i=(u,g)=>c(g,u)}else i=this.index_.getCompare();const s=B;R(s.numChildren()===this.limit_,"");const a=new j(t,C),o=this.reverse_?s.getFirstChild(this.index_):s.getLastChild(this.index_),l=this.rangedFilter_.matches(a);if(s.hasChild(t)){const c=s.getImmediateChild(t);let u=n.getChildAfterChild(this.index_,o,this.reverse_);for(;u!=null&&(u.name===t||s.hasChild(u.name));)u=n.getChildAfterChild(this.index_,u,this.reverse_);const g=u==null?1:i(u,a);if(l&&!C.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(_i(t,C,c)),s.updateImmediateChild(t,C);{r!=null&&r.trackChildChange(zi(t,c));const m=s.updateImmediateChild(t,K.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(r!=null&&r.trackChildChange(gr(u.name,u.node)),m.updateImmediateChild(u.name,u.node)):m}}else return C.isEmpty()?B:l&&i(o,a)>=0?(r!=null&&(r.trackChildChange(zi(o.name,o.node)),r.trackChildChange(gr(t,C))),s.updateImmediateChild(t,C).updateImmediateChild(o.name,K.EMPTY_NODE)):B}}/**
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
 */class Ah{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=bB}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return R(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return R(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:mr}hasEnd(){return this.endSet_}getIndexEndValue(){return R(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return R(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:un}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return R(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===bB}copy(){const B=new Ah;return B.limitSet_=this.limitSet_,B.limit_=this.limit_,B.startSet_=this.startSet_,B.startAfterSet_=this.startAfterSet_,B.indexStartValue_=this.indexStartValue_,B.startNameSet_=this.startNameSet_,B.indexStartName_=this.indexStartName_,B.endSet_=this.endSet_,B.endBeforeSet_=this.endBeforeSet_,B.indexEndValue_=this.indexEndValue_,B.endNameSet_=this.endNameSet_,B.indexEndName_=this.indexEndName_,B.index_=this.index_,B.viewFrom_=this.viewFrom_,B}}function aL(e){return e.loadsAllData()?new vh(e.getIndex()):e.hasLimit()?new sL(e):new $i(e)}function Jm(e){const B={};if(e.isDefault())return B;let t;if(e.index_===bB?t="$priority":e.index_===rL?t="$value":e.index_===rr?t="$key":(R(e.index_ instanceof CL,"Unrecognized index type!"),t=e.index_.toString()),B.orderBy=kB(t),e.startSet_){const C=e.startAfterSet_?"startAfter":"startAt";B[C]=kB(e.indexStartValue_),e.startNameSet_&&(B[C]+=","+kB(e.indexStartName_))}if(e.endSet_){const C=e.endBeforeSet_?"endBefore":"endAt";B[C]=kB(e.indexEndValue_),e.endNameSet_&&(B[C]+=","+kB(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?B.limitToFirst=e.limit_:B.limitToLast=e.limit_),B}function Vm(e){const B={};if(e.startSet_&&(B.sp=e.indexStartValue_,e.startNameSet_&&(B.sn=e.indexStartName_),B.sin=!e.startAfterSet_),e.endSet_&&(B.ep=e.indexEndValue_,e.endNameSet_&&(B.en=e.indexEndName_),B.ein=!e.endBeforeSet_),e.limitSet_){B.l=e.limit_;let t=e.viewFrom_;t===""&&(e.isViewFromLeft()?t="l":t="r"),B.vf=t}return e.index_!==bB&&(B.i=e.index_.toString()),B}/**
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
 */class _o extends $E{constructor(B,t,C,n){super(),this.repoInfo_=B,this.onDataUpdate_=t,this.authTokenProvider_=C,this.appCheckTokenProvider_=n,this.log_=Ds("p:rest:"),this.listens_={}}reportStats(B){throw new Error("Method not implemented.")}static getListenId_(B,t){return t!==void 0?"tag$"+t:(R(B._queryParams.isDefault(),"should have a tag if it's not a default query."),B._path.toString())}listen(B,t,C,n){const r=B._path.toString();this.log_("Listen called for "+r+" "+B._queryIdentifier);const i=_o.getListenId_(B,C),s={};this.listens_[i]=s;const a=Jm(B._queryParams);this.restRequest_(r+".json",a,(o,l)=>{let c=l;if(o===404&&(c=null,o=null),o===null&&this.onDataUpdate_(r,c,!1,C),hr(this.listens_,i)===s){let u;o?o===401?u="permission_denied":u="rest_error:"+o:u="ok",n(u,null)}})}unlisten(B,t){const C=_o.getListenId_(B,t);delete this.listens_[C]}get(B){const t=Jm(B._queryParams),C=B._path.toString(),n=new Gl;return this.restRequest_(C+".json",t,(r,i)=>{let s=i;r===404&&(s=null,r=null),r===null?(this.onDataUpdate_(C,s,!1,null),n.resolve(s)):n.reject(new Error(s))}),n.promise}refreshAuthToken(B){}restRequest_(B,t={},C){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([n,r])=>{n&&n.accessToken&&(t.auth=n.accessToken),r&&r.token&&(t.ac=r.token);const i=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+B+"?ns="+this.repoInfo_.namespace+Nr(t);this.log_("Sending REST request for "+i);const s=new XMLHttpRequest;s.onreadystatechange=()=>{if(C&&s.readyState===4){this.log_("REST Response for "+i+" received. status:",s.status,"response:",s.responseText);let a=null;if(s.status>=200&&s.status<300){try{a=Wi(s.responseText)}catch{Ae("Failed to parse JSON response for "+i+": "+s.responseText)}C(null,a)}else s.status!==401&&s.status!==404&&Ae("Got unsuccessful REST response for "+i+" Status: "+s.status),C(s.status);C=null}},s.open("GET",i,!0),s.send()})}}/**
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
 */class oL{constructor(){this.rootNode_=K.EMPTY_NODE}getNode(B){return this.rootNode_.getChild(B)}updateSnapshot(B,t){this.rootNode_=this.rootNode_.updateChild(B,t)}}/**
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
 */function $o(){return{value:null,children:new Map}}function uS(e,B,t){if(Y(B))e.value=t,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(B,t);else{const C=Z(B);e.children.has(C)||e.children.set(C,$o());const n=e.children.get(C);B=aB(B),uS(n,B,t)}}function Cd(e,B,t){e.value!==null?t(B,e.value):lL(e,(C,n)=>{const r=new sB(B.toString()+"/"+C);Cd(n,r,t)})}function lL(e,B){e.children.forEach((t,C)=>{B(C,t)})}/**
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
 */class cL{constructor(B){this.collection_=B,this.last_=null}get(){const B=this.collection_.get(),t=Object.assign({},B);return this.last_&&ye(this.last_,(C,n)=>{t[C]=t[C]-n}),this.last_=B,t}}/**
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
 */const Wm=10*1e3,uL=30*1e3,fL=5*60*1e3;class dL{constructor(B,t){this.server_=t,this.statsToReport_={},this.statsListener_=new cL(B);const C=Wm+(uL-Wm)*Math.random();vi(this.reportStats_.bind(this),Math.floor(C))}reportStats_(){const B=this.statsListener_.get(),t={};let C=!1;ye(B,(n,r)=>{r>0&&Vt(this.statsToReport_,n)&&(t[n]=r,C=!0)}),C&&this.server_.reportStats(t),vi(this.reportStats_.bind(this),Math.floor(Math.random()*2*fL))}}/**
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
 */var ze;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ze||(ze={}));function fS(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function yh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Eh(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
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
 */class Bl{constructor(B,t,C){this.path=B,this.affectedTree=t,this.revert=C,this.type=ze.ACK_USER_WRITE,this.source=fS()}operationForChild(B){if(Y(this.path)){if(this.affectedTree.value!=null)return R(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new sB(B));return new Bl(BB(),t,this.revert)}}else return R(Z(this.path)===B,"operationForChild called for unrelated child."),new Bl(aB(this.path),this.affectedTree,this.revert)}}/**
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
 */class Bs{constructor(B,t){this.source=B,this.path=t,this.type=ze.LISTEN_COMPLETE}operationForChild(B){return Y(this.path)?new Bs(this.source,BB()):new Bs(this.source,aB(this.path))}}/**
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
 */class fn{constructor(B,t,C){this.source=B,this.path=t,this.snap=C,this.type=ze.OVERWRITE}operationForChild(B){return Y(this.path)?new fn(this.source,BB(),this.snap.getImmediateChild(B)):new fn(this.source,aB(this.path),this.snap)}}/**
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
 */class es{constructor(B,t,C){this.source=B,this.path=t,this.children=C,this.type=ze.MERGE}operationForChild(B){if(Y(this.path)){const t=this.children.subtree(new sB(B));return t.isEmpty()?null:t.value?new fn(this.source,BB(),t.value):new es(this.source,BB(),t)}else return R(Z(this.path)===B,"Can't get a merge for a child not on the path of the operation"),new es(this.source,aB(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class PC{constructor(B,t,C){this.node_=B,this.fullyInitialized_=t,this.filtered_=C}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(B){if(Y(B))return this.isFullyInitialized()&&!this.filtered_;const t=Z(B);return this.isCompleteForChild(t)}isCompleteForChild(B){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(B)}getNode(){return this.node_}}/**
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
 */class hL{constructor(B){this.query_=B,this.index_=this.query_._queryParams.getIndex()}}function pL(e,B,t,C){const n=[],r=[];return B.forEach(i=>{i.type==="child_changed"&&e.index_.indexedValueChanged(i.oldSnap,i.snapshotNode)&&r.push(iL(i.childName,i.snapshotNode))}),qr(e,n,"child_removed",B,C,t),qr(e,n,"child_added",B,C,t),qr(e,n,"child_moved",r,C,t),qr(e,n,"child_changed",B,C,t),qr(e,n,"value",B,C,t),n}function qr(e,B,t,C,n,r){const i=C.filter(s=>s.type===t);i.sort((s,a)=>gL(e,s,a)),i.forEach(s=>{const a=mL(e,s,r);n.forEach(o=>{o.respondsTo(s.type)&&B.push(o.createEvent(a,e.query_))})})}function mL(e,B,t){return B.type==="value"||B.type==="child_removed"||(B.prevName=t.getPredecessorChildName(B.childName,B.snapshotNode,e.index_)),B}function gL(e,B,t){if(B.childName==null||t.childName==null)throw Rr("Should only compare child_ events.");const C=new j(B.childName,B.snapshotNode),n=new j(t.childName,t.snapshotNode);return e.index_.compare(C,n)}/**
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
 */function Zl(e,B){return{eventCache:e,serverCache:B}}function Ai(e,B,t,C){return Zl(new PC(B,t,C),e.serverCache)}function dS(e,B,t,C){return Zl(e.eventCache,new PC(B,t,C))}function el(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function dn(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
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
 */let fu;const vL=()=>(fu||(fu=new he(n6)),fu);class fB{constructor(B,t=vL()){this.value=B,this.children=t}static fromObject(B){let t=new fB(null);return ye(B,(C,n)=>{t=t.set(new sB(C),n)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(B,t){if(this.value!=null&&t(this.value))return{path:BB(),value:this.value};if(Y(B))return null;{const C=Z(B),n=this.children.get(C);if(n!==null){const r=n.findRootMostMatchingPathAndValue(aB(B),t);return r!=null?{path:TB(new sB(C),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(B){return this.findRootMostMatchingPathAndValue(B,()=>!0)}subtree(B){if(Y(B))return this;{const t=Z(B),C=this.children.get(t);return C!==null?C.subtree(aB(B)):new fB(null)}}set(B,t){if(Y(B))return new fB(t,this.children);{const C=Z(B),r=(this.children.get(C)||new fB(null)).set(aB(B),t),i=this.children.insert(C,r);return new fB(this.value,i)}}remove(B){if(Y(B))return this.children.isEmpty()?new fB(null):new fB(null,this.children);{const t=Z(B),C=this.children.get(t);if(C){const n=C.remove(aB(B));let r;return n.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,n),this.value===null&&r.isEmpty()?new fB(null):new fB(this.value,r)}else return this}}get(B){if(Y(B))return this.value;{const t=Z(B),C=this.children.get(t);return C?C.get(aB(B)):null}}setTree(B,t){if(Y(B))return t;{const C=Z(B),r=(this.children.get(C)||new fB(null)).setTree(aB(B),t);let i;return r.isEmpty()?i=this.children.remove(C):i=this.children.insert(C,r),new fB(this.value,i)}}fold(B){return this.fold_(BB(),B)}fold_(B,t){const C={};return this.children.inorderTraversal((n,r)=>{C[n]=r.fold_(TB(B,n),t)}),t(B,this.value,C)}findOnPath(B,t){return this.findOnPath_(B,BB(),t)}findOnPath_(B,t,C){const n=this.value?C(t,this.value):!1;if(n)return n;if(Y(B))return null;{const r=Z(B),i=this.children.get(r);return i?i.findOnPath_(aB(B),TB(t,r),C):null}}foreachOnPath(B,t){return this.foreachOnPath_(B,BB(),t)}foreachOnPath_(B,t,C){if(Y(B))return this;{this.value&&C(t,this.value);const n=Z(B),r=this.children.get(n);return r?r.foreachOnPath_(aB(B),TB(t,n),C):new fB(null)}}foreach(B){this.foreach_(BB(),B)}foreach_(B,t){this.children.inorderTraversal((C,n)=>{n.foreach_(TB(B,C),t)}),this.value&&t(B,this.value)}foreachChild(B){this.children.inorderTraversal((t,C)=>{C.value&&B(t,C.value)})}}/**
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
 */class tt{constructor(B){this.writeTree_=B}static empty(){return new tt(new fB(null))}}function yi(e,B,t){if(Y(B))return new tt(new fB(t));{const C=e.writeTree_.findRootMostValueAndPath(B);if(C!=null){const n=C.path;let r=C.value;const i=re(n,B);return r=r.updateChild(i,t),new tt(e.writeTree_.set(n,r))}else{const n=new fB(t),r=e.writeTree_.setTree(B,n);return new tt(r)}}}function jm(e,B,t){let C=e;return ye(t,(n,r)=>{C=yi(C,TB(B,n),r)}),C}function Ym(e,B){if(Y(B))return tt.empty();{const t=e.writeTree_.setTree(B,new fB(null));return new tt(t)}}function nd(e,B){return Sn(e,B)!=null}function Sn(e,B){const t=e.writeTree_.findRootMostValueAndPath(B);return t!=null?e.writeTree_.get(t.path).getChild(re(t.path,B)):null}function Xm(e){const B=[],t=e.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(bB,(C,n)=>{B.push(new j(C,n))}):e.writeTree_.children.inorderTraversal((C,n)=>{n.value!=null&&B.push(new j(C,n.value))}),B}function EC(e,B){if(Y(B))return e;{const t=Sn(e,B);return t!=null?new tt(new fB(t)):new tt(e.writeTree_.subtree(B))}}function rd(e){return e.writeTree_.isEmpty()}function vr(e,B){return hS(BB(),e.writeTree_,B)}function hS(e,B,t){if(B.value!=null)return t.updateChild(e,B.value);{let C=null;return B.children.inorderTraversal((n,r)=>{n===".priority"?(R(r.value!==null,"Priority writes must always be leaf nodes"),C=r.value):t=hS(TB(e,n),r,t)}),!t.getChild(e).isEmpty()&&C!==null&&(t=t.updateChild(TB(e,".priority"),C)),t}}/**
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
 */function ql(e,B){return vS(B,e)}function AL(e,B,t,C,n){R(C>e.lastWriteId,"Stacking an older write on top of newer ones"),n===void 0&&(n=!0),e.allWrites.push({path:B,snap:t,writeId:C,visible:n}),n&&(e.visibleWrites=yi(e.visibleWrites,B,t)),e.lastWriteId=C}function yL(e,B){for(let t=0;t<e.allWrites.length;t++){const C=e.allWrites[t];if(C.writeId===B)return C}return null}function EL(e,B){const t=e.allWrites.findIndex(s=>s.writeId===B);R(t>=0,"removeWrite called with nonexistent writeId.");const C=e.allWrites[t];e.allWrites.splice(t,1);let n=C.visible,r=!1,i=e.allWrites.length-1;for(;n&&i>=0;){const s=e.allWrites[i];s.visible&&(i>=t&&SL(s,C.path)?n=!1:qe(C.path,s.path)&&(r=!0)),i--}if(n){if(r)return IL(e),!0;if(C.snap)e.visibleWrites=Ym(e.visibleWrites,C.path);else{const s=C.children;ye(s,a=>{e.visibleWrites=Ym(e.visibleWrites,TB(C.path,a))})}return!0}else return!1}function SL(e,B){if(e.snap)return qe(e.path,B);for(const t in e.children)if(e.children.hasOwnProperty(t)&&qe(TB(e.path,t),B))return!0;return!1}function IL(e){e.visibleWrites=pS(e.allWrites,bL,BB()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function bL(e){return e.visible}function pS(e,B,t){let C=tt.empty();for(let n=0;n<e.length;++n){const r=e[n];if(B(r)){const i=r.path;let s;if(r.snap)qe(t,i)?(s=re(t,i),C=yi(C,s,r.snap)):qe(i,t)&&(s=re(i,t),C=yi(C,BB(),r.snap.getChild(s)));else if(r.children){if(qe(t,i))s=re(t,i),C=jm(C,s,r.children);else if(qe(i,t))if(s=re(i,t),Y(s))C=jm(C,BB(),r.children);else{const a=hr(r.children,Z(s));if(a){const o=a.getChild(aB(s));C=yi(C,BB(),o)}}}else throw Rr("WriteRecord should have .snap or .children")}}return C}function mS(e,B,t,C,n){if(!C&&!n){const r=Sn(e.visibleWrites,B);if(r!=null)return r;{const i=EC(e.visibleWrites,B);if(rd(i))return t;if(t==null&&!nd(i,BB()))return null;{const s=t||K.EMPTY_NODE;return vr(i,s)}}}else{const r=EC(e.visibleWrites,B);if(!n&&rd(r))return t;if(!n&&t==null&&!nd(r,BB()))return null;{const i=function(o){return(o.visible||n)&&(!C||!~C.indexOf(o.writeId))&&(qe(o.path,B)||qe(B,o.path))},s=pS(e.allWrites,i,B),a=t||K.EMPTY_NODE;return vr(s,a)}}}function wL(e,B,t){let C=K.EMPTY_NODE;const n=Sn(e.visibleWrites,B);if(n)return n.isLeafNode()||n.forEachChild(bB,(r,i)=>{C=C.updateImmediateChild(r,i)}),C;if(t){const r=EC(e.visibleWrites,B);return t.forEachChild(bB,(i,s)=>{const a=vr(EC(r,new sB(i)),s);C=C.updateImmediateChild(i,a)}),Xm(r).forEach(i=>{C=C.updateImmediateChild(i.name,i.node)}),C}else{const r=EC(e.visibleWrites,B);return Xm(r).forEach(i=>{C=C.updateImmediateChild(i.name,i.node)}),C}}function DL(e,B,t,C,n){R(C||n,"Either existingEventSnap or existingServerSnap must exist");const r=TB(B,t);if(nd(e.visibleWrites,r))return null;{const i=EC(e.visibleWrites,r);return rd(i)?n.getChild(t):vr(i,n.getChild(t))}}function PL(e,B,t,C){const n=TB(B,t),r=Sn(e.visibleWrites,n);if(r!=null)return r;if(C.isCompleteForChild(t)){const i=EC(e.visibleWrites,n);return vr(i,C.getNode().getImmediateChild(t))}else return null}function RL(e,B){return Sn(e.visibleWrites,B)}function NL(e,B,t,C,n,r,i){let s;const a=EC(e.visibleWrites,B),o=Sn(a,BB());if(o!=null)s=o;else if(t!=null)s=vr(a,t);else return[];if(s=s.withIndex(i),!s.isEmpty()&&!s.isLeafNode()){const l=[],c=i.getCompare(),u=r?s.getReverseIteratorFrom(C,i):s.getIteratorFrom(C,i);let g=u.getNext();for(;g&&l.length<n;)c(g,C)!==0&&l.push(g),g=u.getNext();return l}else return[]}function FL(){return{visibleWrites:tt.empty(),allWrites:[],lastWriteId:-1}}function tl(e,B,t,C){return mS(e.writeTree,e.treePath,B,t,C)}function Sh(e,B){return wL(e.writeTree,e.treePath,B)}function Zm(e,B,t,C){return DL(e.writeTree,e.treePath,B,t,C)}function Cl(e,B){return RL(e.writeTree,TB(e.treePath,B))}function OL(e,B,t,C,n,r){return NL(e.writeTree,e.treePath,B,t,C,n,r)}function Ih(e,B,t){return PL(e.writeTree,e.treePath,B,t)}function gS(e,B){return vS(TB(e.treePath,B),e.writeTree)}function vS(e,B){return{treePath:e,writeTree:B}}/**
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
 */class kL{constructor(){this.changeMap=new Map}trackChildChange(B){const t=B.type,C=B.childName;R(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),R(C!==".priority","Only non-priority child changes can be tracked.");const n=this.changeMap.get(C);if(n){const r=n.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(C,_i(C,B.snapshotNode,n.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(C);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(C,zi(C,n.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(C,gr(C,B.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(C,_i(C,B.snapshotNode,n.oldSnap));else throw Rr("Illegal combination of changes: "+B+" occurred after "+n)}else this.changeMap.set(C,B)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class TL{getCompleteChild(B){return null}getChildAfterChild(B,t,C){return null}}const AS=new TL;class bh{constructor(B,t,C=null){this.writes_=B,this.viewCache_=t,this.optCompleteServerCache_=C}getCompleteChild(B){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(B))return t.getNode().getImmediateChild(B);{const C=this.optCompleteServerCache_!=null?new PC(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ih(this.writes_,B,C)}}getChildAfterChild(B,t,C){const n=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:dn(this.viewCache_),r=OL(this.writes_,n,t,1,C,B);return r.length===0?null:r[0]}}/**
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
 */function ML(e){return{filter:e}}function LL(e,B){R(B.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),R(B.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function xL(e,B,t,C,n){const r=new kL;let i,s;if(t.type===ze.OVERWRITE){const o=t;o.source.fromUser?i=id(e,B,o.path,o.snap,C,n,r):(R(o.source.fromServer,"Unknown source."),s=o.source.tagged||B.serverCache.isFiltered()&&!Y(o.path),i=nl(e,B,o.path,o.snap,C,n,s,r))}else if(t.type===ze.MERGE){const o=t;o.source.fromUser?i=GL(e,B,o.path,o.children,C,n,r):(R(o.source.fromServer,"Unknown source."),s=o.source.tagged||B.serverCache.isFiltered(),i=sd(e,B,o.path,o.children,C,n,s,r))}else if(t.type===ze.ACK_USER_WRITE){const o=t;o.revert?i=QL(e,B,o.path,C,n,r):i=KL(e,B,o.path,o.affectedTree,C,n,r)}else if(t.type===ze.LISTEN_COMPLETE)i=UL(e,B,t.path,C,r);else throw Rr("Unknown operation type: "+t.type);const a=r.getChanges();return HL(B,i,a),{viewCache:i,changes:a}}function HL(e,B,t){const C=B.eventCache;if(C.isFullyInitialized()){const n=C.getNode().isLeafNode()||C.getNode().isEmpty(),r=el(e);(t.length>0||!e.eventCache.isFullyInitialized()||n&&!C.getNode().equals(r)||!C.getNode().getPriority().equals(r.getPriority()))&&t.push(cS(el(B)))}}function yS(e,B,t,C,n,r){const i=B.eventCache;if(Cl(C,t)!=null)return B;{let s,a;if(Y(t))if(R(B.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),B.serverCache.isFiltered()){const o=dn(B),l=o instanceof K?o:K.EMPTY_NODE,c=Sh(C,l);s=e.filter.updateFullNode(B.eventCache.getNode(),c,r)}else{const o=tl(C,dn(B));s=e.filter.updateFullNode(B.eventCache.getNode(),o,r)}else{const o=Z(t);if(o===".priority"){R(DC(t)===1,"Can't have a priority with additional path components");const l=i.getNode();a=B.serverCache.getNode();const c=Zm(C,t,l,a);c!=null?s=e.filter.updatePriority(l,c):s=i.getNode()}else{const l=aB(t);let c;if(i.isCompleteForChild(o)){a=B.serverCache.getNode();const u=Zm(C,t,i.getNode(),a);u!=null?c=i.getNode().getImmediateChild(o).updateChild(l,u):c=i.getNode().getImmediateChild(o)}else c=Ih(C,o,B.serverCache);c!=null?s=e.filter.updateChild(i.getNode(),o,c,l,n,r):s=i.getNode()}}return Ai(B,s,i.isFullyInitialized()||Y(t),e.filter.filtersNodes())}}function nl(e,B,t,C,n,r,i,s){const a=B.serverCache;let o;const l=i?e.filter:e.filter.getIndexedFilter();if(Y(t))o=l.updateFullNode(a.getNode(),C,null);else if(l.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(t,C);o=l.updateFullNode(a.getNode(),g,null)}else{const g=Z(t);if(!a.isCompleteForPath(t)&&DC(t)>1)return B;const f=aB(t),p=a.getNode().getImmediateChild(g).updateChild(f,C);g===".priority"?o=l.updatePriority(a.getNode(),p):o=l.updateChild(a.getNode(),g,p,f,AS,null)}const c=dS(B,o,a.isFullyInitialized()||Y(t),l.filtersNodes()),u=new bh(n,c,r);return yS(e,c,t,n,u,s)}function id(e,B,t,C,n,r,i){const s=B.eventCache;let a,o;const l=new bh(n,B,r);if(Y(t))o=e.filter.updateFullNode(B.eventCache.getNode(),C,i),a=Ai(B,o,!0,e.filter.filtersNodes());else{const c=Z(t);if(c===".priority")o=e.filter.updatePriority(B.eventCache.getNode(),C),a=Ai(B,o,s.isFullyInitialized(),s.isFiltered());else{const u=aB(t),g=s.getNode().getImmediateChild(c);let f;if(Y(u))f=C;else{const m=l.getCompleteChild(c);m!=null?eS(u)===".priority"&&m.getChild(CS(u)).isEmpty()?f=m:f=m.updateChild(u,C):f=K.EMPTY_NODE}if(g.equals(f))a=B;else{const m=e.filter.updateChild(s.getNode(),c,f,u,l,i);a=Ai(B,m,s.isFullyInitialized(),e.filter.filtersNodes())}}}return a}function qm(e,B){return e.eventCache.isCompleteForChild(B)}function GL(e,B,t,C,n,r,i){let s=B;return C.foreach((a,o)=>{const l=TB(t,a);qm(B,Z(l))&&(s=id(e,s,l,o,n,r,i))}),C.foreach((a,o)=>{const l=TB(t,a);qm(B,Z(l))||(s=id(e,s,l,o,n,r,i))}),s}function zm(e,B,t){return t.foreach((C,n)=>{B=B.updateChild(C,n)}),B}function sd(e,B,t,C,n,r,i,s){if(B.serverCache.getNode().isEmpty()&&!B.serverCache.isFullyInitialized())return B;let a=B,o;Y(t)?o=C:o=new fB(null).setTree(t,C);const l=B.serverCache.getNode();return o.children.inorderTraversal((c,u)=>{if(l.hasChild(c)){const g=B.serverCache.getNode().getImmediateChild(c),f=zm(e,g,u);a=nl(e,a,new sB(c),f,n,r,i,s)}}),o.children.inorderTraversal((c,u)=>{const g=!B.serverCache.isCompleteForChild(c)&&u.value===null;if(!l.hasChild(c)&&!g){const f=B.serverCache.getNode().getImmediateChild(c),m=zm(e,f,u);a=nl(e,a,new sB(c),m,n,r,i,s)}}),a}function KL(e,B,t,C,n,r,i){if(Cl(n,t)!=null)return B;const s=B.serverCache.isFiltered(),a=B.serverCache;if(C.value!=null){if(Y(t)&&a.isFullyInitialized()||a.isCompleteForPath(t))return nl(e,B,t,a.getNode().getChild(t),n,r,s,i);if(Y(t)){let o=new fB(null);return a.getNode().forEachChild(rr,(l,c)=>{o=o.set(new sB(l),c)}),sd(e,B,t,o,n,r,s,i)}else return B}else{let o=new fB(null);return C.foreach((l,c)=>{const u=TB(t,l);a.isCompleteForPath(u)&&(o=o.set(l,a.getNode().getChild(u)))}),sd(e,B,t,o,n,r,s,i)}}function UL(e,B,t,C,n){const r=B.serverCache,i=dS(B,r.getNode(),r.isFullyInitialized()||Y(t),r.isFiltered());return yS(e,i,t,C,AS,n)}function QL(e,B,t,C,n,r){let i;if(Cl(C,t)!=null)return B;{const s=new bh(C,B,n),a=B.eventCache.getNode();let o;if(Y(t)||Z(t)===".priority"){let l;if(B.serverCache.isFullyInitialized())l=tl(C,dn(B));else{const c=B.serverCache.getNode();R(c instanceof K,"serverChildren would be complete if leaf node"),l=Sh(C,c)}l=l,o=e.filter.updateFullNode(a,l,r)}else{const l=Z(t);let c=Ih(C,l,B.serverCache);c==null&&B.serverCache.isCompleteForChild(l)&&(c=a.getImmediateChild(l)),c!=null?o=e.filter.updateChild(a,l,c,aB(t),s,r):B.eventCache.getNode().hasChild(l)?o=e.filter.updateChild(a,l,K.EMPTY_NODE,aB(t),s,r):o=a,o.isEmpty()&&B.serverCache.isFullyInitialized()&&(i=tl(C,dn(B)),i.isLeafNode()&&(o=e.filter.updateFullNode(o,i,r)))}return i=B.serverCache.isFullyInitialized()||Cl(C,BB())!=null,Ai(B,o,i,e.filter.filtersNodes())}}/**
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
 */class JL{constructor(B,t){this.query_=B,this.eventRegistrations_=[];const C=this.query_._queryParams,n=new vh(C.getIndex()),r=aL(C);this.processor_=ML(r);const i=t.serverCache,s=t.eventCache,a=n.updateFullNode(K.EMPTY_NODE,i.getNode(),null),o=r.updateFullNode(K.EMPTY_NODE,s.getNode(),null),l=new PC(a,i.isFullyInitialized(),n.filtersNodes()),c=new PC(o,s.isFullyInitialized(),r.filtersNodes());this.viewCache_=Zl(c,l),this.eventGenerator_=new hL(this.query_)}get query(){return this.query_}}function VL(e){return e.viewCache_.serverCache.getNode()}function WL(e){return el(e.viewCache_)}function jL(e,B){const t=dn(e.viewCache_);return t&&(e.query._queryParams.loadsAllData()||!Y(B)&&!t.getImmediateChild(Z(B)).isEmpty())?t.getChild(B):null}function _m(e){return e.eventRegistrations_.length===0}function YL(e,B){e.eventRegistrations_.push(B)}function $m(e,B,t){const C=[];if(t){R(B==null,"A cancel should cancel all event registrations.");const n=e.query._path;e.eventRegistrations_.forEach(r=>{const i=r.createCancelEvent(t,n);i&&C.push(i)})}if(B){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(!i.matches(B))n.push(i);else if(B.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}e.eventRegistrations_=n}else e.eventRegistrations_=[];return C}function B0(e,B,t,C){B.type===ze.MERGE&&B.source.queryId!==null&&(R(dn(e.viewCache_),"We should always have a full cache before handling merges"),R(el(e.viewCache_),"Missing event cache, even though we have a server cache"));const n=e.viewCache_,r=xL(e.processor_,n,B,t,C);return LL(e.processor_,r.viewCache),R(r.viewCache.serverCache.isFullyInitialized()||!n.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=r.viewCache,ES(e,r.changes,r.viewCache.eventCache.getNode(),null)}function XL(e,B){const t=e.viewCache_.eventCache,C=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(bB,(r,i)=>{C.push(gr(r,i))}),t.isFullyInitialized()&&C.push(cS(t.getNode())),ES(e,C,t.getNode(),B)}function ES(e,B,t,C){const n=C?[C]:e.eventRegistrations_;return pL(e.eventGenerator_,B,t,n)}/**
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
 */let rl;class SS{constructor(){this.views=new Map}}function ZL(e){R(!rl,"__referenceConstructor has already been defined"),rl=e}function qL(){return R(rl,"Reference.ts has not been loaded"),rl}function zL(e){return e.views.size===0}function wh(e,B,t,C){const n=B.source.queryId;if(n!==null){const r=e.views.get(n);return R(r!=null,"SyncTree gave us an op for an invalid query."),B0(r,B,t,C)}else{let r=[];for(const i of e.views.values())r=r.concat(B0(i,B,t,C));return r}}function IS(e,B,t,C,n){const r=B._queryIdentifier,i=e.views.get(r);if(!i){let s=tl(t,n?C:null),a=!1;s?a=!0:C instanceof K?(s=Sh(t,C),a=!1):(s=K.EMPTY_NODE,a=!1);const o=Zl(new PC(s,a,!1),new PC(C,n,!1));return new JL(B,o)}return i}function _L(e,B,t,C,n,r){const i=IS(e,B,C,n,r);return e.views.has(B._queryIdentifier)||e.views.set(B._queryIdentifier,i),YL(i,t),XL(i,t)}function $L(e,B,t,C){const n=B._queryIdentifier,r=[];let i=[];const s=RC(e);if(n==="default")for(const[a,o]of e.views.entries())i=i.concat($m(o,t,C)),_m(o)&&(e.views.delete(a),o.query._queryParams.loadsAllData()||r.push(o.query));else{const a=e.views.get(n);a&&(i=i.concat($m(a,t,C)),_m(a)&&(e.views.delete(n),a.query._queryParams.loadsAllData()||r.push(a.query)))}return s&&!RC(e)&&r.push(new(qL())(B._repo,B._path)),{removed:r,events:i}}function bS(e){const B=[];for(const t of e.views.values())t.query._queryParams.loadsAllData()||B.push(t);return B}function SC(e,B){let t=null;for(const C of e.views.values())t=t||jL(C,B);return t}function wS(e,B){if(B._queryParams.loadsAllData())return zl(e);{const C=B._queryIdentifier;return e.views.get(C)}}function DS(e,B){return wS(e,B)!=null}function RC(e){return zl(e)!=null}function zl(e){for(const B of e.views.values())if(B.query._queryParams.loadsAllData())return B;return null}/**
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
 */let il;function Bx(e){R(!il,"__referenceConstructor has already been defined"),il=e}function ex(){return R(il,"Reference.ts has not been loaded"),il}let tx=1;class e0{constructor(B){this.listenProvider_=B,this.syncPointTree_=new fB(null),this.pendingWriteTree_=FL(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function PS(e,B,t,C,n){return AL(e.pendingWriteTree_,B,t,C,n),n?Ns(e,new fn(fS(),B,t)):[]}function XC(e,B,t=!1){const C=yL(e.pendingWriteTree_,B);if(EL(e.pendingWriteTree_,B)){let r=new fB(null);return C.snap!=null?r=r.set(BB(),!0):ye(C.children,i=>{r=r.set(new sB(i),!0)}),Ns(e,new Bl(C.path,r,t))}else return[]}function Rs(e,B,t){return Ns(e,new fn(yh(),B,t))}function Cx(e,B,t){const C=fB.fromObject(t);return Ns(e,new es(yh(),B,C))}function nx(e,B){return Ns(e,new Bs(yh(),B))}function rx(e,B,t){const C=Ph(e,t);if(C){const n=Rh(C),r=n.path,i=n.queryId,s=re(r,B),a=new Bs(Eh(i),s);return Nh(e,r,a)}else return[]}function RS(e,B,t,C,n=!1){const r=B._path,i=e.syncPointTree_.get(r);let s=[];if(i&&(B._queryIdentifier==="default"||DS(i,B))){const a=$L(i,B,t,C);zL(i)&&(e.syncPointTree_=e.syncPointTree_.remove(r));const o=a.removed;if(s=a.events,!n){const l=o.findIndex(u=>u._queryParams.loadsAllData())!==-1,c=e.syncPointTree_.findOnPath(r,(u,g)=>RC(g));if(l&&!c){const u=e.syncPointTree_.subtree(r);if(!u.isEmpty()){const g=ox(u);for(let f=0;f<g.length;++f){const m=g[f],p=m.query,d=kS(e,m);e.listenProvider_.startListening(Ei(p),ts(e,p),d.hashFn,d.onComplete)}}}!c&&o.length>0&&!C&&(l?e.listenProvider_.stopListening(Ei(B),null):o.forEach(u=>{const g=e.queryToTagMap.get(_l(u));e.listenProvider_.stopListening(Ei(u),g)}))}lx(e,o)}return s}function NS(e,B,t,C){const n=Ph(e,C);if(n!=null){const r=Rh(n),i=r.path,s=r.queryId,a=re(i,B),o=new fn(Eh(s),a,t);return Nh(e,i,o)}else return[]}function ix(e,B,t,C){const n=Ph(e,C);if(n){const r=Rh(n),i=r.path,s=r.queryId,a=re(i,B),o=fB.fromObject(t),l=new es(Eh(s),a,o);return Nh(e,i,l)}else return[]}function sx(e,B,t,C=!1){const n=B._path;let r=null,i=!1;e.syncPointTree_.foreachOnPath(n,(u,g)=>{const f=re(u,n);r=r||SC(g,f),i=i||RC(g)});let s=e.syncPointTree_.get(n);s?(i=i||RC(s),r=r||SC(s,BB())):(s=new SS,e.syncPointTree_=e.syncPointTree_.set(n,s));let a;r!=null?a=!0:(a=!1,r=K.EMPTY_NODE,e.syncPointTree_.subtree(n).foreachChild((g,f)=>{const m=SC(f,BB());m&&(r=r.updateImmediateChild(g,m))}));const o=DS(s,B);if(!o&&!B._queryParams.loadsAllData()){const u=_l(B);R(!e.queryToTagMap.has(u),"View does not exist, but we have a tag");const g=cx();e.queryToTagMap.set(u,g),e.tagToQueryMap.set(g,u)}const l=ql(e.pendingWriteTree_,n);let c=_L(s,B,t,l,r,a);if(!o&&!i&&!C){const u=wS(s,B);c=c.concat(ux(e,B,u))}return c}function Dh(e,B,t){const n=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(B,(i,s)=>{const a=re(i,B),o=SC(s,a);if(o)return o});return mS(n,B,r,t,!0)}function ax(e,B){const t=B._path;let C=null;e.syncPointTree_.foreachOnPath(t,(o,l)=>{const c=re(o,t);C=C||SC(l,c)});let n=e.syncPointTree_.get(t);n?C=C||SC(n,BB()):(n=new SS,e.syncPointTree_=e.syncPointTree_.set(t,n));const r=C!=null,i=r?new PC(C,!0,!1):null,s=ql(e.pendingWriteTree_,B._path),a=IS(n,B,s,r?i.getNode():K.EMPTY_NODE,r);return WL(a)}function Ns(e,B){return FS(B,e.syncPointTree_,null,ql(e.pendingWriteTree_,BB()))}function FS(e,B,t,C){if(Y(e.path))return OS(e,B,t,C);{const n=B.get(BB());t==null&&n!=null&&(t=SC(n,BB()));let r=[];const i=Z(e.path),s=e.operationForChild(i),a=B.children.get(i);if(a&&s){const o=t?t.getImmediateChild(i):null,l=gS(C,i);r=r.concat(FS(s,a,o,l))}return n&&(r=r.concat(wh(n,e,C,t))),r}}function OS(e,B,t,C){const n=B.get(BB());t==null&&n!=null&&(t=SC(n,BB()));let r=[];return B.children.inorderTraversal((i,s)=>{const a=t?t.getImmediateChild(i):null,o=gS(C,i),l=e.operationForChild(i);l&&(r=r.concat(OS(l,s,a,o)))}),n&&(r=r.concat(wh(n,e,C,t))),r}function kS(e,B){const t=B.query,C=ts(e,t);return{hashFn:()=>(VL(B)||K.EMPTY_NODE).hash(),onComplete:n=>{if(n==="ok")return C?rx(e,t._path,C):nx(e,t._path);{const r=s6(n,t);return RS(e,t,null,r)}}}}function ts(e,B){const t=_l(B);return e.queryToTagMap.get(t)}function _l(e){return e._path.toString()+"$"+e._queryIdentifier}function Ph(e,B){return e.tagToQueryMap.get(B)}function Rh(e){const B=e.indexOf("$");return R(B!==-1&&B<e.length-1,"Bad queryKey."),{queryId:e.substr(B+1),path:new sB(e.substr(0,B))}}function Nh(e,B,t){const C=e.syncPointTree_.get(B);R(C,"Missing sync point for query tag that we're tracking");const n=ql(e.pendingWriteTree_,B);return wh(C,t,n,null)}function ox(e){return e.fold((B,t,C)=>{if(t&&RC(t))return[zl(t)];{let n=[];return t&&(n=bS(t)),ye(C,(r,i)=>{n=n.concat(i)}),n}})}function Ei(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(ex())(e._repo,e._path):e}function lx(e,B){for(let t=0;t<B.length;++t){const C=B[t];if(!C._queryParams.loadsAllData()){const n=_l(C),r=e.queryToTagMap.get(n);e.queryToTagMap.delete(n),e.tagToQueryMap.delete(r)}}}function cx(){return tx++}function ux(e,B,t){const C=B._path,n=ts(e,B),r=kS(e,t),i=e.listenProvider_.startListening(Ei(B),n,r.hashFn,r.onComplete),s=e.syncPointTree_.subtree(C);if(n)R(!RC(s.value),"If we're adding a query, it shouldn't be shadowed");else{const a=s.fold((o,l,c)=>{if(!Y(o)&&l&&RC(l))return[zl(l).query];{let u=[];return l&&(u=u.concat(bS(l).map(g=>g.query))),ye(c,(g,f)=>{u=u.concat(f)}),u}});for(let o=0;o<a.length;++o){const l=a[o];e.listenProvider_.stopListening(Ei(l),ts(e,l))}}return i}/**
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
 */class Fh{constructor(B){this.node_=B}getImmediateChild(B){const t=this.node_.getImmediateChild(B);return new Fh(t)}node(){return this.node_}}class Oh{constructor(B,t){this.syncTree_=B,this.path_=t}getImmediateChild(B){const t=TB(this.path_,B);return new Oh(this.syncTree_,t)}node(){return Dh(this.syncTree_,this.path_)}}const fx=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},t0=function(e,B,t){if(!e||typeof e!="object")return e;if(R(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return dx(e[".sv"],B,t);if(typeof e[".sv"]=="object")return hx(e[".sv"],B);R(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},dx=function(e,B,t){switch(e){case"timestamp":return t.timestamp;default:R(!1,"Unexpected server value: "+e)}},hx=function(e,B,t){e.hasOwnProperty("increment")||R(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const C=e.increment;typeof C!="number"&&R(!1,"Unexpected increment value: "+C);const n=B.node();if(R(n!==null&&typeof n<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!n.isLeafNode())return C;const i=n.getValue();return typeof i!="number"?C:i+C},px=function(e,B,t,C){return kh(B,new Oh(t,e),C)},TS=function(e,B,t){return kh(e,new Fh(B),t)};function kh(e,B,t){const C=e.getPriority().val(),n=t0(C,B.getImmediateChild(".priority"),t);let r;if(e.isLeafNode()){const i=e,s=t0(i.getValue(),B,t);return s!==i.getValue()||n!==i.getPriority().val()?new HB(s,UB(n)):e}else{const i=e;return r=i,n!==i.getPriority().val()&&(r=r.updatePriority(new HB(n))),i.forEachChild(bB,(s,a)=>{const o=kh(a,B.getImmediateChild(s),t);o!==a&&(r=r.updateImmediateChild(s,o))}),r}}/**
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
 */class Th{constructor(B="",t=null,C={children:{},childCount:0}){this.name=B,this.parent=t,this.node=C}}function Mh(e,B){let t=B instanceof sB?B:new sB(B),C=e,n=Z(t);for(;n!==null;){const r=hr(C.node.children,n)||{children:{},childCount:0};C=new Th(n,C,r),t=aB(t),n=Z(t)}return C}function Tr(e){return e.node.value}function MS(e,B){e.node.value=B,ad(e)}function LS(e){return e.node.childCount>0}function mx(e){return Tr(e)===void 0&&!LS(e)}function $l(e,B){ye(e.node.children,(t,C)=>{B(new Th(t,e,C))})}function xS(e,B,t,C){t&&!C&&B(e),$l(e,n=>{xS(n,B,!0,C)}),t&&C&&B(e)}function gx(e,B,t){let C=t?e:e.parent;for(;C!==null;){if(B(C))return!0;C=C.parent}return!1}function Fs(e){return new sB(e.parent===null?e.name:Fs(e.parent)+"/"+e.name)}function ad(e){e.parent!==null&&vx(e.parent,e.name,e)}function vx(e,B,t){const C=mx(t),n=Vt(e.node.children,B);C&&n?(delete e.node.children[B],e.node.childCount--,ad(e)):!C&&!n&&(e.node.children[B]=t.node,e.node.childCount++,ad(e))}/**
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
 */const Ax=/[\[\].#$\/\u0000-\u001F\u007F]/,yx=/[\[\].#$\u0000-\u001F\u007F]/,du=10*1024*1024,HS=function(e){return typeof e=="string"&&e.length!==0&&!Ax.test(e)},GS=function(e){return typeof e=="string"&&e.length!==0&&!yx.test(e)},Ex=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),GS(e)},Sx=function(e,B,t,C){C&&B===void 0||Lh(Z1(e,"value"),B,t)},Lh=function(e,B,t){const C=t instanceof sB?new K6(t,e):t;if(B===void 0)throw new Error(e+"contains undefined "+UC(C));if(typeof B=="function")throw new Error(e+"contains a function "+UC(C)+" with contents = "+B.toString());if(TE(B))throw new Error(e+"contains "+B.toString()+" "+UC(C));if(typeof B=="string"&&B.length>du/3&&Kl(B)>du)throw new Error(e+"contains a string greater than "+du+" utf8 bytes "+UC(C)+" ('"+B.substring(0,50)+"...')");if(B&&typeof B=="object"){let n=!1,r=!1;if(ye(B,(i,s)=>{if(i===".value")n=!0;else if(i!==".priority"&&i!==".sv"&&(r=!0,!HS(i)))throw new Error(e+" contains an invalid key ("+i+") "+UC(C)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);U6(C,i),Lh(e,s,C),Q6(C)}),n&&r)throw new Error(e+' contains ".value" child '+UC(C)+" in addition to actual children.")}},KS=function(e,B,t,C){if(!(C&&t===void 0)&&!GS(t))throw new Error(Z1(e,B)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Ix=function(e,B,t,C){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),KS(e,B,t,C)},bx=function(e,B){if(Z(B)===".info")throw new Error(e+" failed = Can't modify data under /.info/")},wx=function(e,B){const t=B.path.toString();if(typeof B.repoInfo.host!="string"||B.repoInfo.host.length===0||!HS(B.repoInfo.namespace)&&B.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Ex(t))throw new Error(Z1(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Dx{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function US(e,B){let t=null;for(let C=0;C<B.length;C++){const n=B[C],r=n.getPath();t!==null&&!nS(r,t.path)&&(e.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(n)}t&&e.eventLists_.push(t)}function gt(e,B,t){US(e,t),Px(e,C=>qe(C,B)||qe(B,C))}function Px(e,B){e.recursionDepth_++;let t=!0;for(let C=0;C<e.eventLists_.length;C++){const n=e.eventLists_[C];if(n){const r=n.path;B(r)?(Rx(e.eventLists_[C]),e.eventLists_[C]=null):t=!1}}t&&(e.eventLists_=[]),e.recursionDepth_--}function Rx(e){for(let B=0;B<e.events.length;B++){const t=e.events[B];if(t!==null){e.events[B]=null;const C=t.getEventRunner();en&&_B("event: "+t.toString()),kr(C)}}}/**
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
 */const Nx="repo_interrupt",Fx=25;class Ox{constructor(B,t,C,n){this.repoInfo_=B,this.forceRestClient_=t,this.authTokenProvider_=C,this.appCheckProvider_=n,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Dx,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=$o(),this.transactionQueueTree_=new Th,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function kx(e,B,t){if(e.stats_=hh(e.repoInfo_),e.forceRestClient_||c6())e.server_=new _o(e.repoInfo_,(C,n,r,i)=>{C0(e,C,n,r,i)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>n0(e,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{kB(t)}catch(C){throw new Error("Invalid authOverride provided: "+C)}}e.persistentConnection_=new Ot(e.repoInfo_,B,(C,n,r,i)=>{C0(e,C,n,r,i)},C=>{n0(e,C)},C=>{Mx(e,C)},e.authTokenProvider_,e.appCheckProvider_,t),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(C=>{e.server_.refreshAuthToken(C)}),e.appCheckProvider_.addTokenChangeListener(C=>{e.server_.refreshAppCheckToken(C.token)}),e.statsReporter_=p6(e.repoInfo_,()=>new dL(e.stats_,e.server_)),e.infoData_=new oL,e.infoSyncTree_=new e0({startListening:(C,n,r,i)=>{let s=[];const a=e.infoData_.getNode(C._path);return a.isEmpty()||(s=Rs(e.infoSyncTree_,C._path,a),setTimeout(()=>{i("ok")},0)),s},stopListening:()=>{}}),Hh(e,"connected",!1),e.serverSyncTree_=new e0({startListening:(C,n,r,i)=>(e.server_.listen(C,r,n,(s,a)=>{const o=i(s,a);gt(e.eventQueue_,C._path,o)}),[]),stopListening:(C,n)=>{e.server_.unlisten(C,n)}})}function Tx(e){const t=e.infoData_.getNode(new sB(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function xh(e){return fx({timestamp:Tx(e)})}function C0(e,B,t,C,n){e.dataUpdateCount++;const r=new sB(B);t=e.interceptServerDataCallback_?e.interceptServerDataCallback_(B,t):t;let i=[];if(n)if(C){const a=Ko(t,o=>UB(o));i=ix(e.serverSyncTree_,r,a,n)}else{const a=UB(t);i=NS(e.serverSyncTree_,r,a,n)}else if(C){const a=Ko(t,o=>UB(o));i=Cx(e.serverSyncTree_,r,a)}else{const a=UB(t);i=Rs(e.serverSyncTree_,r,a)}let s=r;i.length>0&&(s=ec(e,r)),gt(e.eventQueue_,s,i)}function n0(e,B){Hh(e,"connected",B),B===!1&&Hx(e)}function Mx(e,B){ye(B,(t,C)=>{Hh(e,t,C)})}function Hh(e,B,t){const C=new sB("/.info/"+B),n=UB(t);e.infoData_.updateSnapshot(C,n);const r=Rs(e.infoSyncTree_,C,n);gt(e.eventQueue_,C,r)}function QS(e){return e.nextWriteId_++}function Lx(e,B,t){const C=ax(e.serverSyncTree_,B);return C!=null?Promise.resolve(C):e.server_.get(B).then(n=>{const r=UB(n).withIndex(B._queryParams.getIndex());sx(e.serverSyncTree_,B,t,!0);let i;if(B._queryParams.loadsAllData())i=Rs(e.serverSyncTree_,B._path,r);else{const s=ts(e.serverSyncTree_,B);i=NS(e.serverSyncTree_,B._path,r,s)}return gt(e.eventQueue_,B._path,i),RS(e.serverSyncTree_,B,t,null,!0),r},n=>(Bc(e,"get for query "+kB(B)+" failed: "+n),Promise.reject(new Error(n))))}function xx(e,B,t,C,n){Bc(e,"set",{path:B.toString(),value:t,priority:C});const r=xh(e),i=UB(t,C),s=Dh(e.serverSyncTree_,B),a=TS(i,s,r),o=QS(e),l=PS(e.serverSyncTree_,B,a,o,!0);US(e.eventQueue_,l),e.server_.put(B.toString(),i.val(!0),(u,g)=>{const f=u==="ok";f||Ae("set at "+B+" failed: "+u);const m=XC(e.serverSyncTree_,o,!f);gt(e.eventQueue_,B,m),Kx(e,n,u,g)});const c=YS(e,B);ec(e,c),gt(e.eventQueue_,c,[])}function Hx(e){Bc(e,"onDisconnectEvents");const B=xh(e),t=$o();Cd(e.onDisconnect_,BB(),(n,r)=>{const i=px(n,r,e.serverSyncTree_,B);uS(t,n,i)});let C=[];Cd(t,BB(),(n,r)=>{C=C.concat(Rs(e.serverSyncTree_,n,r));const i=YS(e,n);ec(e,i)}),e.onDisconnect_=$o(),gt(e.eventQueue_,BB(),C)}function Gx(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Nx)}function Bc(e,...B){let t="";e.persistentConnection_&&(t=e.persistentConnection_.id+":"),_B(t,...B)}function Kx(e,B,t,C){B&&kr(()=>{if(t==="ok")B(null);else{const n=(t||"error").toUpperCase();let r=n;C&&(r+=": "+C);const i=new Error(r);i.code=n,B(i)}})}function JS(e,B,t){return Dh(e.serverSyncTree_,B,t)||K.EMPTY_NODE}function Gh(e,B=e.transactionQueueTree_){if(B||tc(e,B),Tr(B)){const t=WS(e,B);R(t.length>0,"Sending zero length transaction queue"),t.every(n=>n.status===0)&&Ux(e,Fs(B),t)}else LS(B)&&$l(B,t=>{Gh(e,t)})}function Ux(e,B,t){const C=t.map(o=>o.currentWriteId),n=JS(e,B,C);let r=n;const i=n.hash();for(let o=0;o<t.length;o++){const l=t[o];R(l.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),l.status=1,l.retryCount++;const c=re(B,l.path);r=r.updateChild(c,l.currentOutputSnapshotRaw)}const s=r.val(!0),a=B;e.server_.put(a.toString(),s,o=>{Bc(e,"transaction put response",{path:a.toString(),status:o});let l=[];if(o==="ok"){const c=[];for(let u=0;u<t.length;u++)t[u].status=2,l=l.concat(XC(e.serverSyncTree_,t[u].currentWriteId)),t[u].onComplete&&c.push(()=>t[u].onComplete(null,!0,t[u].currentOutputSnapshotResolved)),t[u].unwatcher();tc(e,Mh(e.transactionQueueTree_,B)),Gh(e,e.transactionQueueTree_),gt(e.eventQueue_,B,l);for(let u=0;u<c.length;u++)kr(c[u])}else{if(o==="datastale")for(let c=0;c<t.length;c++)t[c].status===3?t[c].status=4:t[c].status=0;else{Ae("transaction at "+a.toString()+" failed: "+o);for(let c=0;c<t.length;c++)t[c].status=4,t[c].abortReason=o}ec(e,B)}},i)}function ec(e,B){const t=VS(e,B),C=Fs(t),n=WS(e,t);return Qx(e,n,C),C}function Qx(e,B,t){if(B.length===0)return;const C=[];let n=[];const i=B.filter(s=>s.status===0).map(s=>s.currentWriteId);for(let s=0;s<B.length;s++){const a=B[s],o=re(t,a.path);let l=!1,c;if(R(o!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)l=!0,c=a.abortReason,n=n.concat(XC(e.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Fx)l=!0,c="maxretry",n=n.concat(XC(e.serverSyncTree_,a.currentWriteId,!0));else{const u=JS(e,a.path,i);a.currentInputSnapshot=u;const g=B[s].update(u.val());if(g!==void 0){Lh("transaction failed: Data returned ",g,a.path);let f=UB(g);typeof g=="object"&&g!=null&&Vt(g,".priority")||(f=f.updatePriority(u.getPriority()));const p=a.currentWriteId,d=xh(e),h=TS(f,u,d);a.currentOutputSnapshotRaw=f,a.currentOutputSnapshotResolved=h,a.currentWriteId=QS(e),i.splice(i.indexOf(p),1),n=n.concat(PS(e.serverSyncTree_,a.path,h,a.currentWriteId,a.applyLocally)),n=n.concat(XC(e.serverSyncTree_,p,!0))}else l=!0,c="nodata",n=n.concat(XC(e.serverSyncTree_,a.currentWriteId,!0))}gt(e.eventQueue_,t,n),n=[],l&&(B[s].status=2,function(u){setTimeout(u,Math.floor(0))}(B[s].unwatcher),B[s].onComplete&&(c==="nodata"?C.push(()=>B[s].onComplete(null,!1,B[s].currentInputSnapshot)):C.push(()=>B[s].onComplete(new Error(c),!1,null))))}tc(e,e.transactionQueueTree_);for(let s=0;s<C.length;s++)kr(C[s]);Gh(e,e.transactionQueueTree_)}function VS(e,B){let t,C=e.transactionQueueTree_;for(t=Z(B);t!==null&&Tr(C)===void 0;)C=Mh(C,t),B=aB(B),t=Z(B);return C}function WS(e,B){const t=[];return jS(e,B,t),t.sort((C,n)=>C.order-n.order),t}function jS(e,B,t){const C=Tr(B);if(C)for(let n=0;n<C.length;n++)t.push(C[n]);$l(B,n=>{jS(e,n,t)})}function tc(e,B){const t=Tr(B);if(t){let C=0;for(let n=0;n<t.length;n++)t[n].status!==2&&(t[C]=t[n],C++);t.length=C,MS(B,t.length>0?t:void 0)}$l(B,C=>{tc(e,C)})}function YS(e,B){const t=Fs(VS(e,B)),C=Mh(e.transactionQueueTree_,B);return gx(C,n=>{hu(e,n)}),hu(e,C),xS(C,n=>{hu(e,n)}),t}function hu(e,B){const t=Tr(B);if(t){const C=[];let n=[],r=-1;for(let i=0;i<t.length;i++)t[i].status===3||(t[i].status===1?(R(r===i-1,"All SENT items should be at beginning of queue."),r=i,t[i].status=3,t[i].abortReason="set"):(R(t[i].status===0,"Unexpected transaction status in abort"),t[i].unwatcher(),n=n.concat(XC(e.serverSyncTree_,t[i].currentWriteId,!0)),t[i].onComplete&&C.push(t[i].onComplete.bind(null,new Error("set"),!1,null))));r===-1?MS(B,void 0):t.length=r+1,gt(e.eventQueue_,Fs(B),n);for(let i=0;i<C.length;i++)kr(C[i])}}/**
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
 */function Jx(e){let B="";const t=e.split("/");for(let C=0;C<t.length;C++)if(t[C].length>0){let n=t[C];try{n=decodeURIComponent(n.replace(/\+/g," "))}catch{}B+="/"+n}return B}function Vx(e){const B={};e.charAt(0)==="?"&&(e=e.substring(1));for(const t of e.split("&")){if(t.length===0)continue;const C=t.split("=");C.length===2?B[decodeURIComponent(C[0])]=decodeURIComponent(C[1]):Ae(`Invalid query segment '${t}' in query '${e}'`)}return B}const r0=function(e,B){const t=Wx(e),C=t.namespace;t.domain==="firebase.com"&&Gt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!C||C==="undefined")&&t.domain!=="localhost"&&Gt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||t6();const n=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new jE(t.host,t.secure,C,n,B,"",C!==t.subdomain),path:new sB(t.pathString)}},Wx=function(e){let B="",t="",C="",n="",r="",i=!0,s="https",a=443;if(typeof e=="string"){let o=e.indexOf("//");o>=0&&(s=e.substring(0,o-1),e=e.substring(o+2));let l=e.indexOf("/");l===-1&&(l=e.length);let c=e.indexOf("?");c===-1&&(c=e.length),B=e.substring(0,Math.min(l,c)),l<c&&(n=Jx(e.substring(l,c)));const u=Vx(e.substring(Math.min(e.length,c)));o=B.indexOf(":"),o>=0?(i=s==="https"||s==="wss",a=parseInt(B.substring(o+1),10)):o=B.length;const g=B.slice(0,o);if(g.toLowerCase()==="localhost")t="localhost";else if(g.split(".").length<=2)t=g;else{const f=B.indexOf(".");C=B.substring(0,f).toLowerCase(),t=B.substring(f+1),r=C}"ns"in u&&(r=u.ns)}return{host:B,port:a,domain:t,subdomain:C,secure:i,scheme:s,pathString:n,namespace:r}};/**
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
 */class jx{constructor(B,t,C,n){this.eventType=B,this.eventRegistration=t,this.snapshot=C,this.prevName=n}getPath(){const B=this.snapshot.ref;return this.eventType==="value"?B._path:B.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+kB(this.snapshot.exportVal())}}class Yx{constructor(B,t,C){this.eventRegistration=B,this.error=t,this.path=C}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Xx{constructor(B,t){this.snapshotCallback=B,this.cancelCallback=t}onValue(B,t){this.snapshotCallback.call(null,B,t)}onCancel(B){return R(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,B)}get hasCancelCallback(){return!!this.cancelCallback}matches(B){return this.snapshotCallback===B.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===B.snapshotCallback.userCallback&&this.snapshotCallback.context===B.snapshotCallback.context}}/**
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
 */class Kh{constructor(B,t,C,n){this._repo=B,this._path=t,this._queryParams=C,this._orderByCalled=n}get key(){return Y(this._path)?null:eS(this._path)}get ref(){return new Wt(this._repo,this._path)}get _queryIdentifier(){const B=Vm(this._queryParams),t=fh(B);return t==="{}"?"default":t}get _queryObject(){return Vm(this._queryParams)}isEqual(B){if(B=Ee(B),!(B instanceof Kh))return!1;const t=this._repo===B._repo,C=nS(this._path,B._path),n=this._queryIdentifier===B._queryIdentifier;return t&&C&&n}toJSON(){return this.toString()}toString(){return this._repo.toString()+G6(this._path)}}class Wt extends Kh{constructor(B,t){super(B,t,new Ah,!1)}get parent(){const B=CS(this._path);return B===null?null:new Wt(this._repo,B)}get root(){let B=this;for(;B.parent!==null;)B=B.parent;return B}}class Cs{constructor(B,t,C){this._node=B,this.ref=t,this._index=C}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(B){const t=new sB(B),C=od(this.ref,B);return new Cs(this._node.getChild(t),C,bB)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(B){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(C,n)=>B(new Cs(n,od(this.ref,C),bB)))}hasChild(B){const t=new sB(B);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function sl(e,B){return e=Ee(e),e._checkNotDeleted("ref"),B!==void 0?od(e._root,B):e._root}function od(e,B){return e=Ee(e),Z(e._path)===null?Ix("child","path",B,!1):KS("child","path",B,!1),new Wt(e._repo,TB(e._path,B))}function ld(e,B){e=Ee(e),bx("set",e._path),Sx("set",B,e._path,!1);const t=new Gl;return xx(e._repo,e._path,B,null,t.wrapCallback(()=>{})),t.promise}function ns(e){e=Ee(e);const B=new Xx(()=>{}),t=new Uh(B);return Lx(e._repo,e,t).then(C=>new Cs(C,new Wt(e._repo,e._path),e._queryParams.getIndex()))}class Uh{constructor(B){this.callbackContext=B}respondsTo(B){return B==="value"}createEvent(B,t){const C=t._queryParams.getIndex();return new jx("value",this,new Cs(B.snapshotNode,new Wt(t._repo,t._path),C))}getEventRunner(B){return B.getEventType()==="cancel"?()=>this.callbackContext.onCancel(B.error):()=>this.callbackContext.onValue(B.snapshot,null)}createCancelEvent(B,t){return this.callbackContext.hasCancelCallback?new Yx(this,B,t):null}matches(B){return B instanceof Uh?!B.callbackContext||!this.callbackContext?!0:B.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}ZL(Wt);Bx(Wt);/**
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
 */const Zx="FIREBASE_DATABASE_EMULATOR_HOST",cd={};let qx=!1;function zx(e,B,t,C){e.repoInfo_=new jE(`${B}:${t}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),C&&(e.authTokenProvider_=C)}function _x(e,B,t,C,n){let r=C||e.options.databaseURL;r===void 0&&(e.options.projectId||Gt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),_B("Using default host for project ",e.options.projectId),r=`${e.options.projectId}-default-rtdb.firebaseio.com`);let i=r0(r,n),s=i.repoInfo,a,o;typeof process<"u"&&process.env&&(o=process.env[Zx]),o?(a=!0,r=`http://${o}?ns=${s.namespace}`,i=r0(r,n),s=i.repoInfo):a=!i.repoInfo.secure;const l=n&&a?new nr(nr.OWNER):new f6(e.name,e.options,B);wx("Invalid Firebase Database URL",i),Y(i.path)||Gt("Database URL must point to the root of a Firebase Database (not including a child path).");const c=BH(s,e,l,new u6(e.name,t));return new eH(c,e)}function $x(e,B){const t=cd[B];(!t||t[e.key]!==e)&&Gt(`Database ${B}(${e.repoInfo_}) has already been deleted.`),Gx(e),delete t[e.key]}function BH(e,B,t,C){let n=cd[B.name];n||(n={},cd[B.name]=n);let r=n[e.toURLString()];return r&&Gt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Ox(e,qx,t,C),n[e.toURLString()]=r,r}class eH{constructor(B,t){this._repoInternal=B,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(kx(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Wt(this._repo,BB())),this._rootInternal}_delete(){return this._rootInternal!==null&&($x(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(B){this._rootInternal===null&&Gt("Cannot call "+B+" on a deleted database.")}}function Cc(e=z1(),B){const t=En(e,"database").getImmediate({identifier:B});if(!t._instanceStarted){const C=_N("database");C&&tH(t,...C)}return t}function tH(e,B,t,C={}){e=Ee(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&Gt("Cannot call useEmulator() after instance has already been initialized.");const n=e._repoInternal;let r;if(n.repoInfo_.nodeAdmin)C.mockUserToken&&Gt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new nr(nr.OWNER);else if(C.mockUserToken){const i=typeof C.mockUserToken=="string"?C.mockUserToken:$N(C.mockUserToken,e.app.options.projectId);r=new nr(i)}zx(n,B,t,r)}/**
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
 `+g+s("^")}return" "+a(u)+o}).join(`
`)}toString(){let B=this.showSourceCode();return B&&(B=`

`+B+`
`),this.name+": "+this.message+B}};var Wh=ul;ul.default=ul;var Os={};Os.isClean=Symbol("isClean");Os.my=Symbol("my");const y0={colon:": ",indent:"    ",beforeDecl:`
`,beforeRule:`
`,beforeOpen:" ",beforeClose:`
`,beforeComment:`
`,after:`
`,emptyBody:"",commentLeft:" ",commentRight:" ",semicolon:!1};function _V(e){return e[0].toUpperCase()+e.slice(1)}let dd=class{constructor(B){this.builder=B}stringify(B,t){if(!this[B.type])throw new Error("Unknown AST node type "+B.type+". Maybe you need to change PostCSS stringifier.");this[B.type](B,t)}document(B){this.body(B)}root(B){this.body(B),B.raws.after&&this.builder(B.raws.after)}comment(B){let t=this.raw(B,"left","commentLeft"),C=this.raw(B,"right","commentRight");this.builder("/*"+t+B.text+C+"*/",B)}decl(B,t){let C=this.raw(B,"between","colon"),n=B.prop+C+this.rawValue(B,"value");B.important&&(n+=B.raws.important||" !important"),t&&(n+=";"),this.builder(n,B)}rule(B){this.block(B,this.rawValue(B,"selector")),B.raws.ownSemicolon&&this.builder(B.raws.ownSemicolon,B,"end")}atrule(B,t){let C="@"+B.name,n=B.params?this.rawValue(B,"params"):"";if(typeof B.raws.afterName<"u"?C+=B.raws.afterName:n&&(C+=" "),B.nodes)this.block(B,C+n);else{let r=(B.raws.between||"")+(t?";":"");this.builder(C+n+r,B)}}body(B){let t=B.nodes.length-1;for(;t>0&&B.nodes[t].type==="comment";)t-=1;let C=this.raw(B,"semicolon");for(let n=0;n<B.nodes.length;n++){let r=B.nodes[n],i=this.raw(r,"before");i&&this.builder(i),this.stringify(r,t!==n||C)}}block(B,t){let C=this.raw(B,"between","beforeOpen");this.builder(t+C+"{",B,"start");let n;B.nodes&&B.nodes.length?(this.body(B),n=this.raw(B,"after")):n=this.raw(B,"after","emptyBody"),n&&this.builder(n),this.builder("}",B,"end")}raw(B,t,C){let n;if(C||(C=t),t&&(n=B.raws[t],typeof n<"u"))return n;let r=B.parent;if(C==="before"&&(!r||r.type==="root"&&r.first===B||r&&r.type==="document"))return"";if(!r)return y0[C];let i=B.root();if(i.rawCache||(i.rawCache={}),typeof i.rawCache[C]<"u")return i.rawCache[C];if(C==="before"||C==="after")return this.beforeAfter(B,C);{let s="raw"+_V(C);this[s]?n=this[s](i,B):i.walk(a=>{if(n=a.raws[t],typeof n<"u")return!1})}return typeof n>"u"&&(n=y0[C]),i.rawCache[C]=n,n}rawSemicolon(B){let t;return B.walk(C=>{if(C.nodes&&C.nodes.length&&C.last.type==="decl"&&(t=C.raws.semicolon,typeof t<"u"))return!1}),t}rawEmptyBody(B){let t;return B.walk(C=>{if(C.nodes&&C.nodes.length===0&&(t=C.raws.after,typeof t<"u"))return!1}),t}rawIndent(B){if(B.raws.indent)return B.raws.indent;let t;return B.walk(C=>{let n=C.parent;if(n&&n!==B&&n.parent&&n.parent===B&&typeof C.raws.before<"u"){let r=C.raws.before.split(`
`);return t=r[r.length-1],t=t.replace(/\S/g,""),!1}}),t}rawBeforeComment(B,t){let C;return B.walkComments(n=>{if(typeof n.raws.before<"u")return C=n.raws.before,C.includes(`
`)&&(C=C.replace(/[^\n]+$/,"")),!1}),typeof C>"u"?C=this.raw(t,null,"beforeDecl"):C&&(C=C.replace(/\S/g,"")),C}rawBeforeDecl(B,t){let C;return B.walkDecls(n=>{if(typeof n.raws.before<"u")return C=n.raws.before,C.includes(`
`)&&(C=C.replace(/[^\n]+$/,"")),!1}),typeof C>"u"?C=this.raw(t,null,"beforeRule"):C&&(C=C.replace(/\S/g,"")),C}rawBeforeRule(B){let t;return B.walk(C=>{if(C.nodes&&(C.parent!==B||B.first!==C)&&typeof C.raws.before<"u")return t=C.raws.before,t.includes(`
`)&&(t=t.replace(/[^\n]+$/,"")),!1}),t&&(t=t.replace(/\S/g,"")),t}rawBeforeClose(B){let t;return B.walk(C=>{if(C.nodes&&C.nodes.length>0&&typeof C.raws.after<"u")return t=C.raws.after,t.includes(`
`)&&(t=t.replace(/[^\n]+$/,"")),!1}),t&&(t=t.replace(/\S/g,"")),t}rawBeforeOpen(B){let t;return B.walk(C=>{if(C.type!=="decl"&&(t=C.raws.between,typeof t<"u"))return!1}),t}rawColon(B){let t;return B.walkDecls(C=>{if(typeof C.raws.between<"u")return t=C.raws.between.replace(/[^\s:]/g,""),!1}),t}beforeAfter(B,t){let C;B.type==="decl"?C=this.raw(B,null,"beforeDecl"):B.type==="comment"?C=this.raw(B,null,"beforeComment"):t==="before"?C=this.raw(B,null,"beforeRule"):C=this.raw(B,null,"beforeClose");let n=B.parent,r=0;for(;n&&n.type!=="root";)r+=1,n=n.parent;if(C.includes(`
`)){let i=this.raw(B,null,"indent");if(i.length)for(let s=0;s<r;s++)C+=i}return C}rawValue(B,t){let C=B[t],n=B.raws[t];return n&&n.value===C?n.raw:C}};var bb=dd;dd.default=dd;let $V=bb;function hd(e,B){new $V(B).stringify(e)}var ic=hd;hd.default=hd;let{isClean:ya,my:BW}=Os,eW=Wh,tW=bb,CW=ic;function pd(e,B){let t=new e.constructor;for(let C in e){if(!Object.prototype.hasOwnProperty.call(e,C)||C==="proxyCache")continue;let n=e[C],r=typeof n;C==="parent"&&r==="object"?B&&(t[C]=B):C==="source"?t[C]=n:Array.isArray(n)?t[C]=n.map(i=>pd(i,t)):(r==="object"&&n!==null&&(n=pd(n)),t[C]=n)}return t}let md=class{constructor(B={}){this.raws={},this[ya]=!1,this[BW]=!0;for(let t in B)if(t==="nodes"){this.nodes=[];for(let C of B[t])typeof C.clone=="function"?this.append(C.clone()):this.append(C)}else this[t]=B[t]}error(B,t={}){if(this.source){let{start:C,end:n}=this.rangeBy(t);return this.source.input.error(B,{line:C.line,column:C.column},{line:n.line,column:n.column},t)}return new eW(B)}warn(B,t,C){let n={node:this};for(let r in C)n[r]=C[r];return B.warn(t,n)}remove(){return this.parent&&this.parent.removeChild(this),this.parent=void 0,this}toString(B=CW){B.stringify&&(B=B.stringify);let t="";return B(this,C=>{t+=C}),t}assign(B={}){for(let t in B)this[t]=B[t];return this}clone(B={}){let t=pd(this);for(let C in B)t[C]=B[C];return t}cloneBefore(B={}){let t=this.clone(B);return this.parent.insertBefore(this,t),t}cloneAfter(B={}){let t=this.clone(B);return this.parent.insertAfter(this,t),t}replaceWith(...B){if(this.parent){let t=this,C=!1;for(let n of B)n===this?C=!0:C?(this.parent.insertAfter(t,n),t=n):this.parent.insertBefore(t,n);C||this.remove()}return this}next(){if(!this.parent)return;let B=this.parent.index(this);return this.parent.nodes[B+1]}prev(){if(!this.parent)return;let B=this.parent.index(this);return this.parent.nodes[B-1]}before(B){return this.parent.insertBefore(this,B),this}after(B){return this.parent.insertAfter(this,B),this}root(){let B=this;for(;B.parent&&B.parent.type!=="document";)B=B.parent;return B}raw(B,t){return new tW().raw(this,B,t)}cleanRaws(B){delete this.raws.before,delete this.raws.after,B||delete this.raws.between}toJSON(B,t){let C={},n=t==null;t=t||new Map;let r=0;for(let i in this){if(!Object.prototype.hasOwnProperty.call(this,i)||i==="parent"||i==="proxyCache")continue;let s=this[i];if(Array.isArray(s))C[i]=s.map(a=>typeof a=="object"&&a.toJSON?a.toJSON(null,t):a);else if(typeof s=="object"&&s.toJSON)C[i]=s.toJSON(null,t);else if(i==="source"){let a=t.get(s.input);a==null&&(a=r,t.set(s.input,r),r++),C[i]={inputId:a,start:s.start,end:s.end}}else C[i]=s}return n&&(C.inputs=[...t.keys()].map(i=>i.toJSON())),C}positionInside(B){let t=this.toString(),C=this.source.start.column,n=this.source.start.line;for(let r=0;r<B;r++)t[r]===`
`?(C=1,n+=1):C+=1;return{line:n,column:C}}positionBy(B){let t=this.source.start;if(B.index)t=this.positionInside(B.index);else if(B.word){let C=this.toString().indexOf(B.word);C!==-1&&(t=this.positionInside(C))}return t}rangeBy(B){let t={line:this.source.start.line,column:this.source.start.column},C=this.source.end?{line:this.source.end.line,column:this.source.end.column+1}:{line:t.line,column:t.column+1};if(B.word){let n=this.toString().indexOf(B.word);n!==-1&&(t=this.positionInside(n),C=this.positionInside(n+B.word.length))}else B.start?t={line:B.start.line,column:B.start.column}:B.index&&(t=this.positionInside(B.index)),B.end?C={line:B.end.line,column:B.end.column}:B.endIndex?C=this.positionInside(B.endIndex):B.index&&(C=this.positionInside(B.index+1));return(C.line<t.line||C.line===t.line&&C.column<=t.column)&&(C={line:t.line,column:t.column+1}),{start:t,end:C}}getProxyProcessor(){return{set(B,t,C){return B[t]===C||(B[t]=C,(t==="prop"||t==="value"||t==="name"||t==="params"||t==="important"||t==="text")&&B.markDirty()),!0},get(B,t){return t==="proxyOf"?B:t==="root"?()=>B.root().toProxy():B[t]}}}toProxy(){return this.proxyCache||(this.proxyCache=new Proxy(this,this.getProxyProcessor())),this.proxyCache}addToError(B){if(B.postcssNode=this,B.stack&&this.source&&/\n\s{4}at /.test(B.stack)){let t=this.source;B.stack=B.stack.replace(/\n\s{4}at /,`$&${t.input.from}:${t.start.line}:${t.start.column}$&`)}return B}markDirty(){if(this[ya]){this[ya]=!1;let B=this;for(;B=B.parent;)B[ya]=!1}}get proxyOf(){return this}};var sc=md;md.default=md;let nW=sc,gd=class extends nW{constructor(B){B&&typeof B.value<"u"&&typeof B.value!="string"&&(B={...B,value:String(B.value)}),super(B),this.type="decl"}get variable(){return this.prop.startsWith("--")||this.prop[0]==="$"}};var ac=gd;gd.default=gd;let rW="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",iW=(e,B=21)=>(t=B)=>{let C="",n=t;for(;n--;)C+=e[Math.random()*e.length|0];return C},sW=(e=21)=>{let B="",t=e;for(;t--;)B+=rW[Math.random()*64|0];return B};const aW=Object.freeze(Object.defineProperty({__proto__:null,customAlphabet:iW,nanoid:sW},Symbol.toStringTag,{value:"Module"})),oW=Wg(aW);let{SourceMapConsumer:E0,SourceMapGenerator:S0}=Je,{existsSync:lW,readFileSync:cW}=Je,{dirname:yu,join:uW}=Je;function fW(e){return Buffer?Buffer.from(e,"base64").toString():window.atob(e)}let vd=class{constructor(B,t){if(t.map===!1)return;this.loadAnnotation(B),this.inline=this.startWith(this.annotation,"data:");let C=t.map?t.map.prev:void 0,n=this.loadMap(t.from,C);!this.mapFile&&t.from&&(this.mapFile=t.from),this.mapFile&&(this.root=yu(this.mapFile)),n&&(this.text=n)}consumer(){return this.consumerCache||(this.consumerCache=new E0(this.text)),this.consumerCache}withContent(){return!!(this.consumer().sourcesContent&&this.consumer().sourcesContent.length>0)}startWith(B,t){return B?B.substr(0,t.length)===t:!1}getAnnotationURL(B){return B.replace(/^\/\*\s*# sourceMappingURL=/,"").trim()}loadAnnotation(B){let t=B.match(/\/\*\s*# sourceMappingURL=/gm);if(!t)return;let C=B.lastIndexOf(t.pop()),n=B.indexOf("*/",C);C>-1&&n>-1&&(this.annotation=this.getAnnotationURL(B.substring(C,n)))}decodeInline(B){let t=/^data:application\/json;charset=utf-?8;base64,/,C=/^data:application\/json;base64,/,n=/^data:application\/json;charset=utf-?8,/,r=/^data:application\/json,/;if(n.test(B)||r.test(B))return decodeURIComponent(B.substr(RegExp.lastMatch.length));if(t.test(B)||C.test(B))return fW(B.substr(RegExp.lastMatch.length));let i=B.match(/data:application\/json;([^,]+),/)[1];throw new Error("Unsupported source map encoding "+i)}loadFile(B){if(this.root=yu(B),lW(B))return this.mapFile=B,cW(B,"utf-8").toString().trim()}loadMap(B,t){if(t===!1)return!1;if(t){if(typeof t=="string")return t;if(typeof t=="function"){let C=t(B);if(C){let n=this.loadFile(C);if(!n)throw new Error("Unable to load previous source map: "+C.toString());return n}}else{if(t instanceof E0)return S0.fromSourceMap(t).toString();if(t instanceof S0)return t.toString();if(this.isMap(t))return JSON.stringify(t);throw new Error("Unsupported previous source map format: "+t.toString())}}else{if(this.inline)return this.decodeInline(this.annotation);if(this.annotation){let C=this.annotation;return B&&(C=uW(yu(B),C)),this.loadFile(C)}}}isMap(B){return typeof B!="object"?!1:typeof B.mappings=="string"||typeof B._mappings=="string"||Array.isArray(B.sections)}};var wb=vd;vd.default=vd;let{SourceMapConsumer:dW,SourceMapGenerator:hW}=Je,{fileURLToPath:I0,pathToFileURL:Ea}=Je,{resolve:Ad,isAbsolute:yd}=Je,{nanoid:pW}=oW,Eu=Je,b0=Wh,mW=wb,Su=Symbol("fromOffsetCache"),gW=Boolean(dW&&hW),w0=Boolean(Ad&&yd),fl=class{constructor(B,t={}){if(B===null||typeof B>"u"||typeof B=="object"&&!B.toString)throw new Error(`PostCSS received ${B} instead of CSS string`);if(this.css=B.toString(),this.css[0]==="\uFEFF"||this.css[0]==="￾"?(this.hasBOM=!0,this.css=this.css.slice(1)):this.hasBOM=!1,t.from&&(!w0||/^\w+:\/\//.test(t.from)||yd(t.from)?this.file=t.from:this.file=Ad(t.from)),w0&&gW){let C=new mW(this.css,t);if(C.text){this.map=C;let n=C.consumer().file;!this.file&&n&&(this.file=this.mapResolve(n))}}this.file||(this.id="<input css "+pW(6)+">"),this.map&&(this.map.file=this.from)}fromOffset(B){let t,C;if(this[Su])C=this[Su];else{let r=this.css.split(`
`);C=new Array(r.length);let i=0;for(let s=0,a=r.length;s<a;s++)C[s]=i,i+=r[s].length+1;this[Su]=C}t=C[C.length-1];let n=0;if(B>=t)n=C.length-1;else{let r=C.length-2,i;for(;n<r;)if(i=n+(r-n>>1),B<C[i])r=i-1;else if(B>=C[i+1])n=i+1;else{n=i;break}}return{line:n+1,col:B-C[n]+1}}error(B,t,C,n={}){let r,i,s;if(t&&typeof t=="object"){let o=t,l=C;if(typeof o.offset=="number"){let c=this.fromOffset(o.offset);t=c.line,C=c.col}else t=o.line,C=o.column;if(typeof l.offset=="number"){let c=this.fromOffset(l.offset);i=c.line,s=c.col}else i=l.line,s=l.column}else if(!C){let o=this.fromOffset(t);t=o.line,C=o.col}let a=this.origin(t,C,i,s);return a?r=new b0(B,a.endLine===void 0?a.line:{line:a.line,column:a.column},a.endLine===void 0?a.column:{line:a.endLine,column:a.endColumn},a.source,a.file,n.plugin):r=new b0(B,i===void 0?t:{line:t,column:C},i===void 0?C:{line:i,column:s},this.css,this.file,n.plugin),r.input={line:t,column:C,endLine:i,endColumn:s,source:this.css},this.file&&(Ea&&(r.input.url=Ea(this.file).toString()),r.input.file=this.file),r}origin(B,t,C,n){if(!this.map)return!1;let r=this.map.consumer(),i=r.originalPositionFor({line:B,column:t});if(!i.source)return!1;let s;typeof C=="number"&&(s=r.originalPositionFor({line:C,column:n}));let a;yd(i.source)?a=Ea(i.source):a=new URL(i.source,this.map.consumer().sourceRoot||Ea(this.map.mapFile));let o={url:a.toString(),line:i.line,column:i.column,endLine:s&&s.line,endColumn:s&&s.column};if(a.protocol==="file:")if(I0)o.file=I0(a);else throw new Error("file: protocol is not available in this PostCSS build");let l=r.sourceContentFor(i.source);return l&&(o.source=l),o}mapResolve(B){return/^\w+:\/\//.test(B)?B:Ad(this.map.consumer().sourceRoot||this.map.root||".",B)}get from(){return this.file||this.id}toJSON(){let B={};for(let t of["hasBOM","css","file","id"])this[t]!=null&&(B[t]=this[t]);return this.map&&(B.map={...this.map},B.map.consumerCache&&(B.map.consumerCache=void 0)),B}};var oc=fl;fl.default=fl;Eu&&Eu.registerInput&&Eu.registerInput(fl);let{SourceMapConsumer:Db,SourceMapGenerator:ro}=Je,{dirname:io,resolve:Pb,relative:Rb,sep:Nb}=Je,{pathToFileURL:D0}=Je,vW=oc,AW=Boolean(Db&&ro),yW=Boolean(io&&Pb&&Rb&&Nb),EW=class{constructor(B,t,C,n){this.stringify=B,this.mapOpts=C.map||{},this.root=t,this.opts=C,this.css=n,this.usesFileUrls=!this.mapOpts.from&&this.mapOpts.absolute}isMap(){return typeof this.opts.map<"u"?!!this.opts.map:this.previous().length>0}previous(){if(!this.previousMaps)if(this.previousMaps=[],this.root)this.root.walk(B=>{if(B.source&&B.source.input.map){let t=B.source.input.map;this.previousMaps.includes(t)||this.previousMaps.push(t)}});else{let B=new vW(this.css,this.opts);B.map&&this.previousMaps.push(B.map)}return this.previousMaps}isInline(){if(typeof this.mapOpts.inline<"u")return this.mapOpts.inline;let B=this.mapOpts.annotation;return typeof B<"u"&&B!==!0?!1:this.previous().length?this.previous().some(t=>t.inline):!0}isSourcesContent(){return typeof this.mapOpts.sourcesContent<"u"?this.mapOpts.sourcesContent:this.previous().length?this.previous().some(B=>B.withContent()):!0}clearAnnotation(){if(this.mapOpts.annotation!==!1)if(this.root){let B;for(let t=this.root.nodes.length-1;t>=0;t--)B=this.root.nodes[t],B.type==="comment"&&B.text.indexOf("# sourceMappingURL=")===0&&this.root.removeChild(t)}else this.css&&(this.css=this.css.replace(/(\n)?\/\*#[\S\s]*?\*\/$/gm,""))}setSourcesContent(){let B={};if(this.root)this.root.walk(t=>{if(t.source){let C=t.source.input.from;if(C&&!B[C]){B[C]=!0;let n=this.usesFileUrls?this.toFileUrl(C):this.toUrl(this.path(C));this.map.setSourceContent(n,t.source.input.css)}}});else if(this.css){let t=this.opts.from?this.toUrl(this.path(this.opts.from)):"<no source>";this.map.setSourceContent(t,this.css)}}applyPrevMaps(){for(let B of this.previous()){let t=this.toUrl(this.path(B.file)),C=B.root||io(B.file),n;this.mapOpts.sourcesContent===!1?(n=new Db(B.text),n.sourcesContent&&(n.sourcesContent=n.sourcesContent.map(()=>null))):n=B.consumer(),this.map.applySourceMap(n,t,this.toUrl(this.path(C)))}}isAnnotation(){return this.isInline()?!0:typeof this.mapOpts.annotation<"u"?this.mapOpts.annotation:this.previous().length?this.previous().some(B=>B.annotation):!0}toBase64(B){return Buffer?Buffer.from(B).toString("base64"):window.btoa(unescape(encodeURIComponent(B)))}addAnnotation(){let B;this.isInline()?B="data:application/json;base64,"+this.toBase64(this.map.toString()):typeof this.mapOpts.annotation=="string"?B=this.mapOpts.annotation:typeof this.mapOpts.annotation=="function"?B=this.mapOpts.annotation(this.opts.to,this.root):B=this.outputFile()+".map";let t=`
`;this.css.includes(`\r
`)&&(t=`\r
`),this.css+=t+"/*# sourceMappingURL="+B+" */"}outputFile(){return this.opts.to?this.path(this.opts.to):this.opts.from?this.path(this.opts.from):"to.css"}generateMap(){if(this.root)this.generateString();else if(this.previous().length===1){let B=this.previous()[0].consumer();B.file=this.outputFile(),this.map=ro.fromSourceMap(B)}else this.map=new ro({file:this.outputFile()}),this.map.addMapping({source:this.opts.from?this.toUrl(this.path(this.opts.from)):"<no source>",generated:{line:1,column:0},original:{line:1,column:0}});return this.isSourcesContent()&&this.setSourcesContent(),this.root&&this.previous().length>0&&this.applyPrevMaps(),this.isAnnotation()&&this.addAnnotation(),this.isInline()?[this.css]:[this.css,this.map]}path(B){if(B.indexOf("<")===0||/^\w+:\/\//.test(B)||this.mapOpts.absolute)return B;let t=this.opts.to?io(this.opts.to):".";return typeof this.mapOpts.annotation=="string"&&(t=io(Pb(t,this.mapOpts.annotation))),B=Rb(t,B),B}toUrl(B){return Nb==="\\"&&(B=B.replace(/\\/g,"/")),encodeURI(B).replace(/[#?]/g,encodeURIComponent)}toFileUrl(B){if(D0)return D0(B).toString();throw new Error("`map.absolute` option is not available in this PostCSS build")}sourcePath(B){return this.mapOpts.from?this.toUrl(this.mapOpts.from):this.usesFileUrls?this.toFileUrl(B.source.input.from):this.toUrl(this.path(B.source.input.from))}generateString(){this.css="",this.map=new ro({file:this.outputFile()});let B=1,t=1,C="<no source>",n={source:"",generated:{line:0,column:0},original:{line:0,column:0}},r,i;this.stringify(this.root,(s,a,o)=>{if(this.css+=s,a&&o!=="end"&&(n.generated.line=B,n.generated.column=t-1,a.source&&a.source.start?(n.source=this.sourcePath(a),n.original.line=a.source.start.line,n.original.column=a.source.start.column-1,this.map.addMapping(n)):(n.source=C,n.original.line=1,n.original.column=0,this.map.addMapping(n))),r=s.match(/\n/g),r?(B+=r.length,i=s.lastIndexOf(`
`),t=s.length-i):t+=s.length,a&&o!=="start"){let l=a.parent||{raws:{}};(!(a.type==="decl"||a.type==="atrule"&&!a.nodes)||a!==l.last||l.raws.semicolon)&&(a.source&&a.source.end?(n.source=this.sourcePath(a),n.original.line=a.source.end.line,n.original.column=a.source.end.column-1,n.generated.line=B,n.generated.column=t-2,this.map.addMapping(n)):(n.source=C,n.original.line=1,n.original.column=0,n.generated.line=B,n.generated.column=t-1,this.map.addMapping(n)))}})}generate(){if(this.clearAnnotation(),yW&&AW&&this.isMap())return this.generateMap();{let B="";return this.stringify(this.root,t=>{B+=t}),[B]}}};var Fb=EW;let SW=sc,Ed=class extends SW{constructor(B){super(B),this.type="comment"}};var lc=Ed;Ed.default=Ed;let{isClean:Ob,my:kb}=Os,Tb=ac,Mb=lc,IW=sc,Lb,jh,Yh,xb;function Hb(e){return e.map(B=>(B.nodes&&(B.nodes=Hb(B.nodes)),delete B.source,B))}function Gb(e){if(e[Ob]=!1,e.proxyOf.nodes)for(let B of e.proxyOf.nodes)Gb(B)}let vt=class extends IW{push(B){return B.parent=this,this.proxyOf.nodes.push(B),this}each(B){if(!this.proxyOf.nodes)return;let t=this.getIterator(),C,n;for(;this.indexes[t]<this.proxyOf.nodes.length&&(C=this.indexes[t],n=B(this.proxyOf.nodes[C],C),n!==!1);)this.indexes[t]+=1;return delete this.indexes[t],n}walk(B){return this.each((t,C)=>{let n;try{n=B(t,C)}catch(r){throw t.addToError(r)}return n!==!1&&t.walk&&(n=t.walk(B)),n})}walkDecls(B,t){return t?B instanceof RegExp?this.walk((C,n)=>{if(C.type==="decl"&&B.test(C.prop))return t(C,n)}):this.walk((C,n)=>{if(C.type==="decl"&&C.prop===B)return t(C,n)}):(t=B,this.walk((C,n)=>{if(C.type==="decl")return t(C,n)}))}walkRules(B,t){return t?B instanceof RegExp?this.walk((C,n)=>{if(C.type==="rule"&&B.test(C.selector))return t(C,n)}):this.walk((C,n)=>{if(C.type==="rule"&&C.selector===B)return t(C,n)}):(t=B,this.walk((C,n)=>{if(C.type==="rule")return t(C,n)}))}walkAtRules(B,t){return t?B instanceof RegExp?this.walk((C,n)=>{if(C.type==="atrule"&&B.test(C.name))return t(C,n)}):this.walk((C,n)=>{if(C.type==="atrule"&&C.name===B)return t(C,n)}):(t=B,this.walk((C,n)=>{if(C.type==="atrule")return t(C,n)}))}walkComments(B){return this.walk((t,C)=>{if(t.type==="comment")return B(t,C)})}append(...B){for(let t of B){let C=this.normalize(t,this.last);for(let n of C)this.proxyOf.nodes.push(n)}return this.markDirty(),this}prepend(...B){B=B.reverse();for(let t of B){let C=this.normalize(t,this.first,"prepend").reverse();for(let n of C)this.proxyOf.nodes.unshift(n);for(let n in this.indexes)this.indexes[n]=this.indexes[n]+C.length}return this.markDirty(),this}cleanRaws(B){if(super.cleanRaws(B),this.nodes)for(let t of this.nodes)t.cleanRaws(B)}insertBefore(B,t){let C=this.index(B),n=C===0?"prepend":!1,r=this.normalize(t,this.proxyOf.nodes[C],n).reverse();C=this.index(B);for(let s of r)this.proxyOf.nodes.splice(C,0,s);let i;for(let s in this.indexes)i=this.indexes[s],C<=i&&(this.indexes[s]=i+r.length);return this.markDirty(),this}insertAfter(B,t){let C=this.index(B),n=this.normalize(t,this.proxyOf.nodes[C]).reverse();C=this.index(B);for(let i of n)this.proxyOf.nodes.splice(C+1,0,i);let r;for(let i in this.indexes)r=this.indexes[i],C<r&&(this.indexes[i]=r+n.length);return this.markDirty(),this}removeChild(B){B=this.index(B),this.proxyOf.nodes[B].parent=void 0,this.proxyOf.nodes.splice(B,1);let t;for(let C in this.indexes)t=this.indexes[C],t>=B&&(this.indexes[C]=t-1);return this.markDirty(),this}removeAll(){for(let B of this.proxyOf.nodes)B.parent=void 0;return this.proxyOf.nodes=[],this.markDirty(),this}replaceValues(B,t,C){return C||(C=t,t={}),this.walkDecls(n=>{t.props&&!t.props.includes(n.prop)||t.fast&&!n.value.includes(t.fast)||(n.value=n.value.replace(B,C))}),this.markDirty(),this}every(B){return this.nodes.every(B)}some(B){return this.nodes.some(B)}index(B){return typeof B=="number"?B:(B.proxyOf&&(B=B.proxyOf),this.proxyOf.nodes.indexOf(B))}get first(){if(this.proxyOf.nodes)return this.proxyOf.nodes[0]}get last(){if(this.proxyOf.nodes)return this.proxyOf.nodes[this.proxyOf.nodes.length-1]}normalize(B,t){if(typeof B=="string")B=Hb(Lb(B).nodes);else if(Array.isArray(B)){B=B.slice(0);for(let n of B)n.parent&&n.parent.removeChild(n,"ignore")}else if(B.type==="root"&&this.type!=="document"){B=B.nodes.slice(0);for(let n of B)n.parent&&n.parent.removeChild(n,"ignore")}else if(B.type)B=[B];else if(B.prop){if(typeof B.value>"u")throw new Error("Value field is missed in node creation");typeof B.value!="string"&&(B.value=String(B.value)),B=[new Tb(B)]}else if(B.selector)B=[new jh(B)];else if(B.name)B=[new Yh(B)];else if(B.text)B=[new Mb(B)];else throw new Error("Unknown node type in node creation");return B.map(n=>(n[kb]||vt.rebuild(n),n=n.proxyOf,n.parent&&n.parent.removeChild(n),n[Ob]&&Gb(n),typeof n.raws.before>"u"&&t&&typeof t.raws.before<"u"&&(n.raws.before=t.raws.before.replace(/\S/g,"")),n.parent=this.proxyOf,n))}getProxyProcessor(){return{set(B,t,C){return B[t]===C||(B[t]=C,(t==="name"||t==="params"||t==="selector")&&B.markDirty()),!0},get(B,t){return t==="proxyOf"?B:B[t]?t==="each"||typeof t=="string"&&t.startsWith("walk")?(...C)=>B[t](...C.map(n=>typeof n=="function"?(r,i)=>n(r.toProxy(),i):n)):t==="every"||t==="some"?C=>B[t]((n,...r)=>C(n.toProxy(),...r)):t==="root"?()=>B.root().toProxy():t==="nodes"?B.nodes.map(C=>C.toProxy()):t==="first"||t==="last"?B[t].toProxy():B[t]:B[t]}}}getIterator(){this.lastEach||(this.lastEach=0),this.indexes||(this.indexes={}),this.lastEach+=1;let B=this.lastEach;return this.indexes[B]=0,B}};vt.registerParse=e=>{Lb=e};vt.registerRule=e=>{jh=e};vt.registerAtRule=e=>{Yh=e};vt.registerRoot=e=>{xb=e};var bn=vt;vt.default=vt;vt.rebuild=e=>{e.type==="atrule"?Object.setPrototypeOf(e,Yh.prototype):e.type==="rule"?Object.setPrototypeOf(e,jh.prototype):e.type==="decl"?Object.setPrototypeOf(e,Tb.prototype):e.type==="comment"?Object.setPrototypeOf(e,Mb.prototype):e.type==="root"&&Object.setPrototypeOf(e,xb.prototype),e[kb]=!0,e.nodes&&e.nodes.forEach(B=>{vt.rebuild(B)})};let bW=bn,Kb,Ub,rs=class extends bW{constructor(B){super({type:"document",...B}),this.nodes||(this.nodes=[])}toResult(B={}){return new Kb(new Ub,this,B).stringify()}};rs.registerLazyResult=e=>{Kb=e};rs.registerProcessor=e=>{Ub=e};var Xh=rs;rs.default=rs;let Sd=class{constructor(B,t={}){if(this.type="warning",this.text=B,t.node&&t.node.source){let C=t.node.rangeBy(t);this.line=C.start.line,this.column=C.start.column,this.endLine=C.end.line,this.endColumn=C.end.column}for(let C in t)this[C]=t[C]}toString(){return this.node?this.node.error(this.text,{plugin:this.plugin,index:this.index,word:this.word}).message:this.plugin?this.plugin+": "+this.text:this.text}};var Qb=Sd;Sd.default=Sd;let wW=Qb,Id=class{constructor(B,t,C){this.processor=B,this.messages=[],this.root=t,this.opts=C,this.css=void 0,this.map=void 0}toString(){return this.css}warn(B,t={}){t.plugin||this.lastPlugin&&this.lastPlugin.postcssPlugin&&(t.plugin=this.lastPlugin.postcssPlugin);let C=new wW(B,t);return this.messages.push(C),C}warnings(){return this.messages.filter(B=>B.type==="warning")}get content(){return this.css}};var Zh=Id;Id.default=Id;const Iu="'".charCodeAt(0),P0='"'.charCodeAt(0),Sa="\\".charCodeAt(0),R0="/".charCodeAt(0),Ia=`
`.charCodeAt(0),_r=" ".charCodeAt(0),ba="\f".charCodeAt(0),wa="	".charCodeAt(0),Da="\r".charCodeAt(0),DW="[".charCodeAt(0),PW="]".charCodeAt(0),RW="(".charCodeAt(0),NW=")".charCodeAt(0),FW="{".charCodeAt(0),OW="}".charCodeAt(0),kW=";".charCodeAt(0),TW="*".charCodeAt(0),MW=":".charCodeAt(0),LW="@".charCodeAt(0),Pa=/[\t\n\f\r "#'()/;[\\\]{}]/g,Ra=/[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,xW=/.[\n"'(/\\]/,N0=/[\da-f]/i;var HW=function(B,t={}){let C=B.css.valueOf(),n=t.ignoreErrors,r,i,s,a,o,l,c,u,g,f,m=C.length,p=0,d=[],h=[];function v(){return p}function A(y){throw B.error("Unclosed "+y,p)}function E(){return h.length===0&&p>=m}function D(y){if(h.length)return h.pop();if(p>=m)return;let b=y?y.ignoreUnclosed:!1;switch(r=C.charCodeAt(p),r){case Ia:case _r:case wa:case Da:case ba:{i=p;do i+=1,r=C.charCodeAt(i);while(r===_r||r===Ia||r===wa||r===Da||r===ba);f=["space",C.slice(p,i)],p=i-1;break}case DW:case PW:case FW:case OW:case MW:case kW:case NW:{let M=String.fromCharCode(r);f=[M,M,p];break}case RW:{if(u=d.length?d.pop()[1]:"",g=C.charCodeAt(p+1),u==="url"&&g!==Iu&&g!==P0&&g!==_r&&g!==Ia&&g!==wa&&g!==ba&&g!==Da){i=p;do{if(l=!1,i=C.indexOf(")",i+1),i===-1)if(n||b){i=p;break}else A("bracket");for(c=i;C.charCodeAt(c-1)===Sa;)c-=1,l=!l}while(l);f=["brackets",C.slice(p,i+1),p,i],p=i}else i=C.indexOf(")",p+1),a=C.slice(p,i+1),i===-1||xW.test(a)?f=["(","(",p]:(f=["brackets",a,p,i],p=i);break}case Iu:case P0:{s=r===Iu?"'":'"',i=p;do{if(l=!1,i=C.indexOf(s,i+1),i===-1)if(n||b){i=p+1;break}else A("string");for(c=i;C.charCodeAt(c-1)===Sa;)c-=1,l=!l}while(l);f=["string",C.slice(p,i+1),p,i],p=i;break}case LW:{Pa.lastIndex=p+1,Pa.test(C),Pa.lastIndex===0?i=C.length-1:i=Pa.lastIndex-2,f=["at-word",C.slice(p,i+1),p,i],p=i;break}case Sa:{for(i=p,o=!0;C.charCodeAt(i+1)===Sa;)i+=1,o=!o;if(r=C.charCodeAt(i+1),o&&r!==R0&&r!==_r&&r!==Ia&&r!==wa&&r!==Da&&r!==ba&&(i+=1,N0.test(C.charAt(i)))){for(;N0.test(C.charAt(i+1));)i+=1;C.charCodeAt(i+1)===_r&&(i+=1)}f=["word",C.slice(p,i+1),p,i],p=i;break}default:{r===R0&&C.charCodeAt(p+1)===TW?(i=C.indexOf("*/",p+2)+1,i===0&&(n||b?i=C.length:A("comment")),f=["comment",C.slice(p,i+1),p,i],p=i):(Ra.lastIndex=p+1,Ra.test(C),Ra.lastIndex===0?i=C.length-1:i=Ra.lastIndex-2,f=["word",C.slice(p,i+1),p,i],d.push(f),p=i);break}}return p++,f}function I(y){h.push(y)}return{back:I,nextToken:D,endOfFile:E,position:v}};let Jb=bn,dl=class extends Jb{constructor(B){super(B),this.type="atrule"}append(...B){return this.proxyOf.nodes||(this.nodes=[]),super.append(...B)}prepend(...B){return this.proxyOf.nodes||(this.nodes=[]),super.prepend(...B)}};var qh=dl;dl.default=dl;Jb.registerAtRule(dl);let Vb=bn,Wb,jb,Ar=class extends Vb{constructor(B){super(B),this.type="root",this.nodes||(this.nodes=[])}removeChild(B,t){let C=this.index(B);return!t&&C===0&&this.nodes.length>1&&(this.nodes[1].raws.before=this.nodes[C].raws.before),super.removeChild(B)}normalize(B,t,C){let n=super.normalize(B);if(t){if(C==="prepend")this.nodes.length>1?t.raws.before=this.nodes[1].raws.before:delete t.raws.before;else if(this.first!==t)for(let r of n)r.raws.before=t.raws.before}return n}toResult(B={}){return new Wb(new jb,this,B).stringify()}};Ar.registerLazyResult=e=>{Wb=e};Ar.registerProcessor=e=>{jb=e};var ks=Ar;Ar.default=Ar;Vb.registerRoot(Ar);let is={split(e,B,t){let C=[],n="",r=!1,i=0,s=!1,a="",o=!1;for(let l of e)o?o=!1:l==="\\"?o=!0:s?l===a&&(s=!1):l==='"'||l==="'"?(s=!0,a=l):l==="("?i+=1:l===")"?i>0&&(i-=1):i===0&&B.includes(l)&&(r=!0),r?(n!==""&&C.push(n.trim()),n="",r=!1):n+=l;return(t||n!=="")&&C.push(n.trim()),C},space(e){let B=[" ",`
`,"	"];return is.split(e,B)},comma(e){return is.split(e,[","],!0)}};var Yb=is;is.default=is;let Xb=bn,GW=Yb,hl=class extends Xb{constructor(B){super(B),this.type="rule",this.nodes||(this.nodes=[])}get selectors(){return GW.comma(this.selector)}set selectors(B){let t=this.selector?this.selector.match(/,\s*/):null,C=t?t[0]:","+this.raw("between","beforeOpen");this.selector=B.join(C)}};var zh=hl;hl.default=hl;Xb.registerRule(hl);let KW=ac,UW=HW,QW=lc,JW=qh,VW=ks,F0=zh;const O0={empty:!0,space:!0};function WW(e){for(let B=e.length-1;B>=0;B--){let t=e[B],C=t[3]||t[2];if(C)return C}}let jW=class{constructor(B){this.input=B,this.root=new VW,this.current=this.root,this.spaces="",this.semicolon=!1,this.customProperty=!1,this.createTokenizer(),this.root.source={input:B,start:{offset:0,line:1,column:1}}}createTokenizer(){this.tokenizer=UW(this.input)}parse(){let B;for(;!this.tokenizer.endOfFile();)switch(B=this.tokenizer.nextToken(),B[0]){case"space":this.spaces+=B[1];break;case";":this.freeSemicolon(B);break;case"}":this.end(B);break;case"comment":this.comment(B);break;case"at-word":this.atrule(B);break;case"{":this.emptyRule(B);break;default:this.other(B);break}this.endFile()}comment(B){let t=new QW;this.init(t,B[2]),t.source.end=this.getPosition(B[3]||B[2]);let C=B[1].slice(2,-2);if(/^\s*$/.test(C))t.text="",t.raws.left=C,t.raws.right="";else{let n=C.match(/^(\s*)([^]*\S)(\s*)$/);t.text=n[2],t.raws.left=n[1],t.raws.right=n[3]}}emptyRule(B){let t=new F0;this.init(t,B[2]),t.selector="",t.raws.between="",this.current=t}other(B){let t=!1,C=null,n=!1,r=null,i=[],s=B[1].startsWith("--"),a=[],o=B;for(;o;){if(C=o[0],a.push(o),C==="("||C==="[")r||(r=o),i.push(C==="("?")":"]");else if(s&&n&&C==="{")r||(r=o),i.push("}");else if(i.length===0)if(C===";")if(n){this.decl(a,s);return}else break;else if(C==="{"){this.rule(a);return}else if(C==="}"){this.tokenizer.back(a.pop()),t=!0;break}else C===":"&&(n=!0);else C===i[i.length-1]&&(i.pop(),i.length===0&&(r=null));o=this.tokenizer.nextToken()}if(this.tokenizer.endOfFile()&&(t=!0),i.length>0&&this.unclosedBracket(r),t&&n){if(!s)for(;a.length&&(o=a[a.length-1][0],!(o!=="space"&&o!=="comment"));)this.tokenizer.back(a.pop());this.decl(a,s)}else this.unknownWord(a)}rule(B){B.pop();let t=new F0;this.init(t,B[0][2]),t.raws.between=this.spacesAndCommentsFromEnd(B),this.raw(t,"selector",B),this.current=t}decl(B,t){let C=new KW;this.init(C,B[0][2]);let n=B[B.length-1];for(n[0]===";"&&(this.semicolon=!0,B.pop()),C.source.end=this.getPosition(n[3]||n[2]||WW(B));B[0][0]!=="word";)B.length===1&&this.unknownWord(B),C.raws.before+=B.shift()[1];for(C.source.start=this.getPosition(B[0][2]),C.prop="";B.length;){let o=B[0][0];if(o===":"||o==="space"||o==="comment")break;C.prop+=B.shift()[1]}C.raws.between="";let r;for(;B.length;)if(r=B.shift(),r[0]===":"){C.raws.between+=r[1];break}else r[0]==="word"&&/\w/.test(r[1])&&this.unknownWord([r]),C.raws.between+=r[1];(C.prop[0]==="_"||C.prop[0]==="*")&&(C.raws.before+=C.prop[0],C.prop=C.prop.slice(1));let i=[],s;for(;B.length&&(s=B[0][0],!(s!=="space"&&s!=="comment"));)i.push(B.shift());this.precheckMissedSemicolon(B);for(let o=B.length-1;o>=0;o--){if(r=B[o],r[1].toLowerCase()==="!important"){C.important=!0;let l=this.stringFrom(B,o);l=this.spacesFromEnd(B)+l,l!==" !important"&&(C.raws.important=l);break}else if(r[1].toLowerCase()==="important"){let l=B.slice(0),c="";for(let u=o;u>0;u--){let g=l[u][0];if(c.trim().indexOf("!")===0&&g!=="space")break;c=l.pop()[1]+c}c.trim().indexOf("!")===0&&(C.important=!0,C.raws.important=c,B=l)}if(r[0]!=="space"&&r[0]!=="comment")break}B.some(o=>o[0]!=="space"&&o[0]!=="comment")&&(C.raws.between+=i.map(o=>o[1]).join(""),i=[]),this.raw(C,"value",i.concat(B),t),C.value.includes(":")&&!t&&this.checkMissedSemicolon(B)}atrule(B){let t=new JW;t.name=B[1].slice(1),t.name===""&&this.unnamedAtrule(t,B),this.init(t,B[2]);let C,n,r,i=!1,s=!1,a=[],o=[];for(;!this.tokenizer.endOfFile();){if(B=this.tokenizer.nextToken(),C=B[0],C==="("||C==="["?o.push(C==="("?")":"]"):C==="{"&&o.length>0?o.push("}"):C===o[o.length-1]&&o.pop(),o.length===0)if(C===";"){t.source.end=this.getPosition(B[2]),this.semicolon=!0;break}else if(C==="{"){s=!0;break}else if(C==="}"){if(a.length>0){for(r=a.length-1,n=a[r];n&&n[0]==="space";)n=a[--r];n&&(t.source.end=this.getPosition(n[3]||n[2]))}this.end(B);break}else a.push(B);else a.push(B);if(this.tokenizer.endOfFile()){i=!0;break}}t.raws.between=this.spacesAndCommentsFromEnd(a),a.length?(t.raws.afterName=this.spacesAndCommentsFromStart(a),this.raw(t,"params",a),i&&(B=a[a.length-1],t.source.end=this.getPosition(B[3]||B[2]),this.spaces=t.raws.between,t.raws.between="")):(t.raws.afterName="",t.params=""),s&&(t.nodes=[],this.current=t)}end(B){this.current.nodes&&this.current.nodes.length&&(this.current.raws.semicolon=this.semicolon),this.semicolon=!1,this.current.raws.after=(this.current.raws.after||"")+this.spaces,this.spaces="",this.current.parent?(this.current.source.end=this.getPosition(B[2]),this.current=this.current.parent):this.unexpectedClose(B)}endFile(){this.current.parent&&this.unclosedBlock(),this.current.nodes&&this.current.nodes.length&&(this.current.raws.semicolon=this.semicolon),this.current.raws.after=(this.current.raws.after||"")+this.spaces}freeSemicolon(B){if(this.spaces+=B[1],this.current.nodes){let t=this.current.nodes[this.current.nodes.length-1];t&&t.type==="rule"&&!t.raws.ownSemicolon&&(t.raws.ownSemicolon=this.spaces,this.spaces="")}}getPosition(B){let t=this.input.fromOffset(B);return{offset:B,line:t.line,column:t.col}}init(B,t){this.current.push(B),B.source={start:this.getPosition(t),input:this.input},B.raws.before=this.spaces,this.spaces="",B.type!=="comment"&&(this.semicolon=!1)}raw(B,t,C,n){let r,i,s=C.length,a="",o=!0,l,c;for(let u=0;u<s;u+=1)r=C[u],i=r[0],i==="space"&&u===s-1&&!n?o=!1:i==="comment"?(c=C[u-1]?C[u-1][0]:"empty",l=C[u+1]?C[u+1][0]:"empty",!O0[c]&&!O0[l]?a.slice(-1)===","?o=!1:a+=r[1]:o=!1):a+=r[1];if(!o){let u=C.reduce((g,f)=>g+f[1],"");B.raws[t]={value:a,raw:u}}B[t]=a}spacesAndCommentsFromEnd(B){let t,C="";for(;B.length&&(t=B[B.length-1][0],!(t!=="space"&&t!=="comment"));)C=B.pop()[1]+C;return C}spacesAndCommentsFromStart(B){let t,C="";for(;B.length&&(t=B[0][0],!(t!=="space"&&t!=="comment"));)C+=B.shift()[1];return C}spacesFromEnd(B){let t,C="";for(;B.length&&(t=B[B.length-1][0],t==="space");)C=B.pop()[1]+C;return C}stringFrom(B,t){let C="";for(let n=t;n<B.length;n++)C+=B[n][1];return B.splice(t,B.length-t),C}colon(B){let t=0,C,n,r;for(let[i,s]of B.entries()){if(C=s,n=C[0],n==="("&&(t+=1),n===")"&&(t-=1),t===0&&n===":")if(!r)this.doubleColon(C);else{if(r[0]==="word"&&r[1]==="progid")continue;return i}r=C}return!1}unclosedBracket(B){throw this.input.error("Unclosed bracket",{offset:B[2]},{offset:B[2]+1})}unknownWord(B){throw this.input.error("Unknown word",{offset:B[0][2]},{offset:B[0][2]+B[0][1].length})}unexpectedClose(B){throw this.input.error("Unexpected }",{offset:B[2]},{offset:B[2]+1})}unclosedBlock(){let B=this.current.source.start;throw this.input.error("Unclosed block",B.line,B.column)}doubleColon(B){throw this.input.error("Double colon",{offset:B[2]},{offset:B[2]+B[1].length})}unnamedAtrule(B,t){throw this.input.error("At-rule without name",{offset:t[2]},{offset:t[2]+t[1].length})}precheckMissedSemicolon(){}checkMissedSemicolon(B){let t=this.colon(B);if(t===!1)return;let C=0,n;for(let r=t-1;r>=0&&(n=B[r],!(n[0]!=="space"&&(C+=1,C===2)));r--);throw this.input.error("Missed semicolon",n[0]==="word"?n[3]+1:n[2])}};var YW=jW;let XW=bn,ZW=YW,qW=oc;function pl(e,B){let t=new qW(e,B),C=new ZW(t);try{C.parse()}catch(n){throw n}return C.root}var _h=pl;pl.default=pl;XW.registerParse(pl);let{isClean:at,my:zW}=Os,_W=Fb,$W=ic,Bj=bn,ej=Xh,k0=Zh,tj=_h,Cj=ks;const nj={document:"Document",root:"Root",atrule:"AtRule",rule:"Rule",decl:"Declaration",comment:"Comment"},rj={postcssPlugin:!0,prepare:!0,Once:!0,Document:!0,Root:!0,Declaration:!0,Rule:!0,AtRule:!0,Comment:!0,DeclarationExit:!0,RuleExit:!0,AtRuleExit:!0,CommentExit:!0,RootExit:!0,DocumentExit:!0,OnceExit:!0},ij={postcssPlugin:!0,prepare:!0,Once:!0},yr=0;function $r(e){return typeof e=="object"&&typeof e.then=="function"}function Zb(e){let B=!1,t=nj[e.type];return e.type==="decl"?B=e.prop.toLowerCase():e.type==="atrule"&&(B=e.name.toLowerCase()),B&&e.append?[t,t+"-"+B,yr,t+"Exit",t+"Exit-"+B]:B?[t,t+"-"+B,t+"Exit",t+"Exit-"+B]:e.append?[t,yr,t+"Exit"]:[t,t+"Exit"]}function T0(e){let B;return e.type==="document"?B=["Document",yr,"DocumentExit"]:e.type==="root"?B=["Root",yr,"RootExit"]:B=Zb(e),{node:e,events:B,eventIndex:0,visitors:[],visitorIndex:0,iterator:0}}function bd(e){return e[at]=!1,e.nodes&&e.nodes.forEach(B=>bd(B)),e}let wd={},hn=class{constructor(B,t,C){this.stringified=!1,this.processed=!1;let n;if(typeof t=="object"&&t!==null&&(t.type==="root"||t.type==="document"))n=bd(t);else if(t instanceof hn||t instanceof k0)n=bd(t.root),t.map&&(typeof C.map>"u"&&(C.map={}),C.map.inline||(C.map.inline=!1),C.map.prev=t.map);else{let r=tj;C.syntax&&(r=C.syntax.parse),C.parser&&(r=C.parser),r.parse&&(r=r.parse);try{n=r(t,C)}catch(i){this.processed=!0,this.error=i}n&&!n[zW]&&Bj.rebuild(n)}this.result=new k0(B,n,C),this.helpers={...wd,result:this.result,postcss:wd},this.plugins=this.processor.plugins.map(r=>typeof r=="object"&&r.prepare?{...r,...r.prepare(this.result)}:r)}get[Symbol.toStringTag](){return"LazyResult"}get processor(){return this.result.processor}get opts(){return this.result.opts}get css(){return this.stringify().css}get content(){return this.stringify().content}get map(){return this.stringify().map}get root(){return this.sync().root}get messages(){return this.sync().messages}warnings(){return this.sync().warnings()}toString(){return this.css}then(B,t){return this.async().then(B,t)}catch(B){return this.async().catch(B)}finally(B){return this.async().then(B,B)}async(){return this.error?Promise.reject(this.error):this.processed?Promise.resolve(this.result):(this.processing||(this.processing=this.runAsync()),this.processing)}sync(){if(this.error)throw this.error;if(this.processed)return this.result;if(this.processed=!0,this.processing)throw this.getAsyncError();for(let B of this.plugins){let t=this.runOnRoot(B);if($r(t))throw this.getAsyncError()}if(this.prepareVisitors(),this.hasListener){let B=this.result.root;for(;!B[at];)B[at]=!0,this.walkSync(B);if(this.listeners.OnceExit)if(B.type==="document")for(let t of B.nodes)this.visitSync(this.listeners.OnceExit,t);else this.visitSync(this.listeners.OnceExit,B)}return this.result}stringify(){if(this.error)throw this.error;if(this.stringified)return this.result;this.stringified=!0,this.sync();let B=this.result.opts,t=$W;B.syntax&&(t=B.syntax.stringify),B.stringifier&&(t=B.stringifier),t.stringify&&(t=t.stringify);let n=new _W(t,this.result.root,this.result.opts).generate();return this.result.css=n[0],this.result.map=n[1],this.result}walkSync(B){B[at]=!0;let t=Zb(B);for(let C of t)if(C===yr)B.nodes&&B.each(n=>{n[at]||this.walkSync(n)});else{let n=this.listeners[C];if(n&&this.visitSync(n,B.toProxy()))return}}visitSync(B,t){for(let[C,n]of B){this.result.lastPlugin=C;let r;try{r=n(t,this.helpers)}catch(i){throw this.handleError(i,t.proxyOf)}if(t.type!=="root"&&t.type!=="document"&&!t.parent)return!0;if($r(r))throw this.getAsyncError()}}runOnRoot(B){this.result.lastPlugin=B;try{if(typeof B=="object"&&B.Once){if(this.result.root.type==="document"){let t=this.result.root.nodes.map(C=>B.Once(C,this.helpers));return $r(t[0])?Promise.all(t):t}return B.Once(this.result.root,this.helpers)}else if(typeof B=="function")return B(this.result.root,this.result)}catch(t){throw this.handleError(t)}}getAsyncError(){throw new Error("Use process(css).then(cb) to work with async plugins")}handleError(B,t){let C=this.result.lastPlugin;try{t&&t.addToError(B),this.error=B,B.name==="CssSyntaxError"&&!B.plugin?(B.plugin=C.postcssPlugin,B.setMessage()):C.postcssVersion}catch(n){console&&console.error&&console.error(n)}return B}async runAsync(){this.plugin=0;for(let B=0;B<this.plugins.length;B++){let t=this.plugins[B],C=this.runOnRoot(t);if($r(C))try{await C}catch(n){throw this.handleError(n)}}if(this.prepareVisitors(),this.hasListener){let B=this.result.root;for(;!B[at];){B[at]=!0;let t=[T0(B)];for(;t.length>0;){let C=this.visitTick(t);if($r(C))try{await C}catch(n){let r=t[t.length-1].node;throw this.handleError(n,r)}}}if(this.listeners.OnceExit)for(let[t,C]of this.listeners.OnceExit){this.result.lastPlugin=t;try{if(B.type==="document"){let n=B.nodes.map(r=>C(r,this.helpers));await Promise.all(n)}else await C(B,this.helpers)}catch(n){throw this.handleError(n)}}}return this.processed=!0,this.stringify()}prepareVisitors(){this.listeners={};let B=(t,C,n)=>{this.listeners[C]||(this.listeners[C]=[]),this.listeners[C].push([t,n])};for(let t of this.plugins)if(typeof t=="object")for(let C in t){if(!rj[C]&&/^[A-Z]/.test(C))throw new Error(`Unknown event ${C} in ${t.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);if(!ij[C])if(typeof t[C]=="object")for(let n in t[C])n==="*"?B(t,C,t[C][n]):B(t,C+"-"+n.toLowerCase(),t[C][n]);else typeof t[C]=="function"&&B(t,C,t[C])}this.hasListener=Object.keys(this.listeners).length>0}visitTick(B){let t=B[B.length-1],{node:C,visitors:n}=t;if(C.type!=="root"&&C.type!=="document"&&!C.parent){B.pop();return}if(n.length>0&&t.visitorIndex<n.length){let[i,s]=n[t.visitorIndex];t.visitorIndex+=1,t.visitorIndex===n.length&&(t.visitors=[],t.visitorIndex=0),this.result.lastPlugin=i;try{return s(C.toProxy(),this.helpers)}catch(a){throw this.handleError(a,C)}}if(t.iterator!==0){let i=t.iterator,s;for(;s=C.nodes[C.indexes[i]];)if(C.indexes[i]+=1,!s[at]){s[at]=!0,B.push(T0(s));return}t.iterator=0,delete C.indexes[i]}let r=t.events;for(;t.eventIndex<r.length;){let i=r[t.eventIndex];if(t.eventIndex+=1,i===yr){C.nodes&&C.nodes.length&&(C[at]=!0,t.iterator=C.getIterator());return}else if(this.listeners[i]){t.visitors=this.listeners[i];return}}B.pop()}};hn.registerPostcss=e=>{wd=e};var qb=hn;hn.default=hn;Cj.registerLazyResult(hn);ej.registerLazyResult(hn);let sj=Fb,aj=ic,oj=_h;const lj=Zh;let Dd=class{constructor(B,t,C){t=t.toString(),this.stringified=!1,this._processor=B,this._css=t,this._opts=C,this._map=void 0;let n,r=aj;this.result=new lj(this._processor,n,this._opts),this.result.css=t;let i=this;Object.defineProperty(this.result,"root",{get(){return i.root}});let s=new sj(r,n,this._opts,t);if(s.isMap()){let[a,o]=s.generate();a&&(this.result.css=a),o&&(this.result.map=o)}}get[Symbol.toStringTag](){return"NoWorkResult"}get processor(){return this.result.processor}get opts(){return this.result.opts}get css(){return this.result.css}get content(){return this.result.css}get map(){return this.result.map}get root(){if(this._root)return this._root;let B,t=oj;try{B=t(this._css,this._opts)}catch(C){this.error=C}if(this.error)throw this.error;return this._root=B,B}get messages(){return[]}warnings(){return[]}toString(){return this._css}then(B,t){return this.async().then(B,t)}catch(B){return this.async().catch(B)}finally(B){return this.async().then(B,B)}async(){return this.error?Promise.reject(this.error):Promise.resolve(this.result)}sync(){if(this.error)throw this.error;return this.result}};var cj=Dd;Dd.default=Dd;let uj=cj,fj=qb,dj=Xh,hj=ks,ss=class{constructor(B=[]){this.version="8.4.21",this.plugins=this.normalize(B)}use(B){return this.plugins=this.plugins.concat(this.normalize([B])),this}process(B,t={}){return this.plugins.length===0&&typeof t.parser>"u"&&typeof t.stringifier>"u"&&typeof t.syntax>"u"?new uj(this,B,t):new fj(this,B,t)}normalize(B){let t=[];for(let C of B)if(C.postcss===!0?C=C():C.postcss&&(C=C.postcss),typeof C=="object"&&Array.isArray(C.plugins))t=t.concat(C.plugins);else if(typeof C=="object"&&C.postcssPlugin)t.push(C);else if(typeof C=="function")t.push(C);else if(!(typeof C=="object"&&(C.parse||C.stringify)))throw new Error(C+" is not a PostCSS plugin");return t}};var pj=ss;ss.default=ss;hj.registerProcessor(ss);dj.registerProcessor(ss);let mj=ac,gj=wb,vj=lc,Aj=qh,yj=oc,Ej=ks,Sj=zh;function as(e,B){if(Array.isArray(e))return e.map(n=>as(n));let{inputs:t,...C}=e;if(t){B=[];for(let n of t){let r={...n,__proto__:yj.prototype};r.map&&(r.map={...r.map,__proto__:gj.prototype}),B.push(r)}}if(C.nodes&&(C.nodes=e.nodes.map(n=>as(n,B))),C.source){let{inputId:n,...r}=C.source;C.source=r,n!=null&&(C.source.input=B[n])}if(C.type==="root")return new Ej(C);if(C.type==="decl")return new mj(C);if(C.type==="rule")return new Sj(C);if(C.type==="comment")return new vj(C);if(C.type==="atrule")return new Aj(C);throw new Error("Unknown node type: "+e.type)}var Ij=as;as.default=as;let bj=Wh,zb=ac,wj=qb,Dj=bn,$h=pj,Pj=ic,Rj=Ij,_b=Xh,Nj=Qb,$b=lc,Bw=qh,Fj=Zh,Oj=oc,kj=_h,Tj=Yb,ew=zh,tw=ks,Mj=sc;function nB(...e){return e.length===1&&Array.isArray(e[0])&&(e=e[0]),new $h(e)}nB.plugin=function(B,t){let C=!1;function n(...i){console&&console.warn&&!C&&(C=!0,console.warn(B+`: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`),{}.LANG&&{}.LANG.startsWith("cn")&&console.warn(B+`: 里面 postcss.plugin 被弃用. 迁移指南:
https://www.w3ctech.com/topic/2226`));let s=t(...i);return s.postcssPlugin=B,s.postcssVersion=new $h().version,s}let r;return Object.defineProperty(n,"postcss",{get(){return r||(r=n()),r}}),n.process=function(i,s,a){return nB([n(a)]).process(i,s)},n};nB.stringify=Pj;nB.parse=kj;nB.fromJSON=Rj;nB.list=Tj;nB.comment=e=>new $b(e);nB.atRule=e=>new Bw(e);nB.decl=e=>new zb(e);nB.rule=e=>new ew(e);nB.root=e=>new tw(e);nB.document=e=>new _b(e);nB.CssSyntaxError=bj;nB.Declaration=zb;nB.Container=Dj;nB.Processor=$h;nB.Document=_b;nB.Comment=$b;nB.Warning=Nj;nB.AtRule=Bw;nB.Result=Fj;nB.Input=Oj;nB.Rule=ew;nB.Root=tw;nB.Node=Mj;wj.registerPostcss(nB);var Ts=nB;nB.default=nB;let{list:Pd}=Ts;gB.error=function(e){let B=new Error(e);throw B.autoprefixer=!0,B};gB.uniq=function(e){return[...new Set(e)]};gB.removeNote=function(e){return e.includes(" ")?e.split(" ")[0]:e};gB.escapeRegexp=function(e){return e.replace(/[$()*+-.?[\\\]^{|}]/g,"\\$&")};gB.regexp=function(e,B=!0){return B&&(e=this.escapeRegexp(e)),new RegExp(`(^|[\\s,(])(${e}($|[\\s(,]))`,"gi")};gB.editList=function(e,B){let t=Pd.comma(e),C=B(t,[]);if(t===C)return e;let n=e.match(/,\s*/);return n=n?n[0]:", ",C.join(n)};gB.splitSelector=function(e){return Pd.comma(e).map(B=>Pd.space(B).map(t=>t.split(/(?=\.|#)/g)))};gB.isPureNumber=function(e){return typeof e=="number"?!0:typeof e=="string"?/^[0-9]+$/.test(e):!1};let Lj=nI,M0=In.agents,xj=gB,Hj=class{static prefixes(){if(this.prefixesCache)return this.prefixesCache;this.prefixesCache=[];for(let B in M0)this.prefixesCache.push(`-${M0[B].prefix}-`);return this.prefixesCache=xj.uniq(this.prefixesCache).sort((B,t)=>t.length-B.length),this.prefixesCache}static withPrefix(B){return this.prefixesRegexp||(this.prefixesRegexp=new RegExp(this.prefixes().join("|"))),this.prefixesRegexp.test(B)}constructor(B,t,C,n){this.data=B,this.options=C||{},this.browserslistOpts=n||{},this.selected=this.parse(t)}parse(B){let t={};for(let C in this.browserslistOpts)t[C]=this.browserslistOpts[C];return t.path=this.options.from,Lj(B,t)}prefix(B){let[t,C]=B.split(" "),n=this.data[t],r=n.prefix_exceptions&&n.prefix_exceptions[C];return r||(r=n.prefix),`-${r}-`}isSelected(B){return this.selected.includes(B)}};var B2=Hj,Cw={prefix(e){let B=e.match(/^(-\w+-)/);return B?B[0]:""},unprefixed(e){return e.replace(/^-\w+-/,"")}};let Gj=B2,L0=Cw,Kj=gB;function Rd(e,B){let t=new e.constructor;for(let C of Object.keys(e||{})){let n=e[C];C==="parent"&&typeof n=="object"?B&&(t[C]=B):C==="source"||C===null?t[C]=n:Array.isArray(n)?t[C]=n.map(r=>Rd(r,t)):C!=="_autoprefixerPrefix"&&C!=="_autoprefixerValues"&&C!=="proxyCache"&&(typeof n=="object"&&n!==null&&(n=Rd(n,t)),t[C]=n)}return t}let nw=class{static hack(B){return this.hacks||(this.hacks={}),B.names.map(t=>(this.hacks[t]=B,this.hacks[t]))}static load(B,t,C){let n=this.hacks&&this.hacks[B];return n?new n(B,t,C):new this(B,t,C)}static clone(B,t){let C=Rd(B);for(let n in t)C[n]=t[n];return C}constructor(B,t,C){this.prefixes=t,this.name=B,this.all=C}parentPrefix(B){let t;return typeof B._autoprefixerPrefix<"u"?t=B._autoprefixerPrefix:B.type==="decl"&&B.prop[0]==="-"?t=L0.prefix(B.prop):B.type==="root"?t=!1:B.type==="rule"&&B.selector.includes(":-")&&/:(-\w+-)/.test(B.selector)?t=B.selector.match(/:(-\w+-)/)[1]:B.type==="atrule"&&B.name[0]==="-"?t=L0.prefix(B.name):t=this.parentPrefix(B.parent),Gj.prefixes().includes(t)||(t=!1),B._autoprefixerPrefix=t,B._autoprefixerPrefix}process(B,t){if(!this.check(B))return;let C=this.parentPrefix(B),n=this.prefixes.filter(i=>!C||C===Kj.removeNote(i)),r=[];for(let i of n)this.add(B,i,r.concat([i]),t)&&r.push(i);return r}clone(B,t){return nw.clone(B,t)}};var e2=nw;let Uj=e2,Qj=B2,x0=gB,Jj=class extends Uj{check(){return!0}prefixed(B,t){return t+B}normalize(B){return B}otherPrefixes(B,t){for(let C of Qj.prefixes())if(C!==t&&B.includes(C))return B.replace(/var\([^)]+\)/,"").includes(C);return!1}set(B,t){return B.prop=this.prefixed(B.prop,t),B}needCascade(B){return B._autoprefixerCascade||(B._autoprefixerCascade=this.all.options.cascade!==!1&&B.raw("before").includes(`
`)),B._autoprefixerCascade}maxPrefixed(B,t){if(t._autoprefixerMax)return t._autoprefixerMax;let C=0;for(let n of B)n=x0.removeNote(n),n.length>C&&(C=n.length);return t._autoprefixerMax=C,t._autoprefixerMax}calcBefore(B,t,C=""){let r=this.maxPrefixed(B,t)-x0.removeNote(C).length,i=t.raw("before");return r>0&&(i+=Array(r).fill(" ").join("")),i}restoreBefore(B){let t=B.raw("before").split(`
`),C=t[t.length-1];this.all.group(B).up(n=>{let r=n.raw("before").split(`
`),i=r[r.length-1];i.length<C.length&&(C=i)}),t[t.length-1]=C,B.raws.before=t.join(`
`)}insert(B,t,C){let n=this.set(this.clone(B),t);if(!(!n||B.parent.some(i=>i.prop===n.prop&&i.value===n.value)))return this.needCascade(B)&&(n.raws.before=this.calcBefore(C,B,t)),B.parent.insertBefore(B,n)}isAlready(B,t){let C=this.all.group(B).up(n=>n.prop===t);return C||(C=this.all.group(B).down(n=>n.prop===t)),C}add(B,t,C,n){let r=this.prefixed(B.prop,t);if(!(this.isAlready(B,r)||this.otherPrefixes(B.value,t)))return this.insert(B,t,C,n)}process(B,t){if(!this.needCascade(B)){super.process(B,t);return}let C=super.process(B,t);!C||!C.length||(this.restoreBefore(B),B.raws.before=this.calcBefore(C,B))}old(B,t){return[this.prefixed(B,t)]}};var U=Jj,H0={},Vj={get exports(){return H0},set exports(e){H0=e}};/**
 * @license Fraction.js v4.2.0 05/03/2022
 * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2021, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/(function(e,B){(function(t){var C=2e3,n={s:1,n:0,d:1};function r(f,m){if(isNaN(f=parseInt(f,10)))throw g.InvalidParameter;return f*m}function i(f,m){if(m===0)throw g.DivisionByZero;var p=Object.create(g.prototype);p.s=f<0?-1:1,f=f<0?-f:f;var d=u(f,m);return p.n=f/d,p.d=m/d,p}function s(f){for(var m={},p=f,d=2,h=4;h<=p;){for(;p%d===0;)p/=d,m[d]=(m[d]||0)+1;h+=1+2*d++}return p!==f?p>1&&(m[p]=(m[p]||0)+1):m[f]=(m[f]||0)+1,m}var a=function(f,m){var p=0,d=1,h=1,v=0,A=0,E=0,D=1,I=1,y=0,b=1,M=1,V=1,tB=1e7,xB;if(f!=null)if(m!==void 0){if(p=f,d=m,h=p*d,p%1!==0||d%1!==0)throw g.NonIntegerParameter}else switch(typeof f){case"object":{if("d"in f&&"n"in f)p=f.n,d=f.d,"s"in f&&(p*=f.s);else if(0 in f)p=f[0],1 in f&&(d=f[1]);else throw g.InvalidParameter;h=p*d;break}case"number":{if(f<0&&(h=f,f=-f),f%1===0)p=f;else if(f>0){for(f>=1&&(I=Math.pow(10,Math.floor(1+Math.log(f)/Math.LN10)),f/=I);b<=tB&&V<=tB;)if(xB=(y+M)/(b+V),f===xB){b+V<=tB?(p=y+M,d=b+V):V>b?(p=M,d=V):(p=y,d=b);break}else f>xB?(y+=M,b+=V):(M+=y,V+=b),b>tB?(p=M,d=V):(p=y,d=b);p*=I}else(isNaN(f)||isNaN(m))&&(d=p=NaN);break}case"string":{if(b=f.match(/\d+|./g),b===null)throw g.InvalidParameter;if(b[y]==="-"?(h=-1,y++):b[y]==="+"&&y++,b.length===y+1?A=r(b[y++],h):b[y+1]==="."||b[y]==="."?(b[y]!=="."&&(v=r(b[y++],h)),y++,(y+1===b.length||b[y+1]==="("&&b[y+3]===")"||b[y+1]==="'"&&b[y+3]==="'")&&(A=r(b[y],h),D=Math.pow(10,b[y].length),y++),(b[y]==="("&&b[y+2]===")"||b[y]==="'"&&b[y+2]==="'")&&(E=r(b[y+1],h),I=Math.pow(10,b[y+1].length)-1,y+=3)):b[y+1]==="/"||b[y+1]===":"?(A=r(b[y],h),D=r(b[y+2],1),y+=3):b[y+3]==="/"&&b[y+1]===" "&&(v=r(b[y],h),A=r(b[y+2],h),D=r(b[y+4],1),y+=5),b.length<=y){d=D*I,h=p=E+d*v+I*A;break}}default:throw g.InvalidParameter}if(d===0)throw g.DivisionByZero;n.s=h<0?-1:1,n.n=Math.abs(p),n.d=Math.abs(d)};function o(f,m,p){for(var d=1;m>0;f=f*f%p,m>>=1)m&1&&(d=d*f%p);return d}function l(f,m){for(;m%2===0;m/=2);for(;m%5===0;m/=5);if(m===1)return 0;for(var p=10%m,d=1;p!==1;d++)if(p=p*10%m,d>C)return 0;return d}function c(f,m,p){for(var d=1,h=o(10,p,m),v=0;v<300;v++){if(d===h)return v;d=d*10%m,h=h*10%m}return 0}function u(f,m){if(!f)return m;if(!m)return f;for(;;){if(f%=m,!f)return m;if(m%=f,!m)return f}}function g(f,m){if(a(f,m),this instanceof g)f=u(n.d,n.n),this.s=n.s,this.n=n.n/f,this.d=n.d/f;else return i(n.s*n.n,n.d)}g.DivisionByZero=new Error("Division by Zero"),g.InvalidParameter=new Error("Invalid argument"),g.NonIntegerParameter=new Error("Parameters must be integer"),g.prototype={s:1,n:0,d:1,abs:function(){return i(this.n,this.d)},neg:function(){return i(-this.s*this.n,this.d)},add:function(f,m){return a(f,m),i(this.s*this.n*n.d+n.s*this.d*n.n,this.d*n.d)},sub:function(f,m){return a(f,m),i(this.s*this.n*n.d-n.s*this.d*n.n,this.d*n.d)},mul:function(f,m){return a(f,m),i(this.s*n.s*this.n*n.n,this.d*n.d)},div:function(f,m){return a(f,m),i(this.s*n.s*this.n*n.d,this.d*n.n)},clone:function(){return i(this.s*this.n,this.d)},mod:function(f,m){if(isNaN(this.n)||isNaN(this.d))return new g(NaN);if(f===void 0)return i(this.s*this.n%this.d,1);if(a(f,m),n.n===0&&this.d===0)throw g.DivisionByZero;return i(this.s*(n.d*this.n)%(n.n*this.d),n.d*this.d)},gcd:function(f,m){return a(f,m),i(u(n.n,this.n)*u(n.d,this.d),n.d*this.d)},lcm:function(f,m){return a(f,m),n.n===0&&this.n===0?i(0,1):i(n.n*this.n,u(n.n,this.n)*u(n.d,this.d))},ceil:function(f){return f=Math.pow(10,f||0),isNaN(this.n)||isNaN(this.d)?new g(NaN):i(Math.ceil(f*this.s*this.n/this.d),f)},floor:function(f){return f=Math.pow(10,f||0),isNaN(this.n)||isNaN(this.d)?new g(NaN):i(Math.floor(f*this.s*this.n/this.d),f)},round:function(f){return f=Math.pow(10,f||0),isNaN(this.n)||isNaN(this.d)?new g(NaN):i(Math.round(f*this.s*this.n/this.d),f)},inverse:function(){return i(this.s*this.d,this.n)},pow:function(f,m){if(a(f,m),n.d===1)return n.s<0?i(Math.pow(this.s*this.d,n.n),Math.pow(this.n,n.n)):i(Math.pow(this.s*this.n,n.n),Math.pow(this.d,n.n));if(this.s<0)return null;var p=s(this.n),d=s(this.d),h=1,v=1;for(var A in p)if(A!=="1"){if(A==="0"){h=0;break}if(p[A]*=n.n,p[A]%n.d===0)p[A]/=n.d;else return null;h*=Math.pow(A,p[A])}for(var A in d)if(A!=="1"){if(d[A]*=n.n,d[A]%n.d===0)d[A]/=n.d;else return null;v*=Math.pow(A,d[A])}return n.s<0?i(v,h):i(h,v)},equals:function(f,m){return a(f,m),this.s*this.n*n.d===n.s*n.n*this.d},compare:function(f,m){a(f,m);var p=this.s*this.n*n.d-n.s*n.n*this.d;return(0<p)-(p<0)},simplify:function(f){if(isNaN(this.n)||isNaN(this.d))return this;f=f||.001;for(var m=this.abs(),p=m.toContinued(),d=1;d<p.length;d++){for(var h=i(p[d-1],1),v=d-2;v>=0;v--)h=h.inverse().add(p[v]);if(h.sub(m).abs().valueOf()<f)return h.mul(this.s)}return this},divisible:function(f,m){return a(f,m),!(!(n.n*this.d)||this.n*n.d%(n.n*this.d))},valueOf:function(){return this.s*this.n/this.d},toFraction:function(f){var m,p="",d=this.n,h=this.d;return this.s<0&&(p+="-"),h===1?p+=d:(f&&(m=Math.floor(d/h))>0&&(p+=m,p+=" ",d%=h),p+=d,p+="/",p+=h),p},toLatex:function(f){var m,p="",d=this.n,h=this.d;return this.s<0&&(p+="-"),h===1?p+=d:(f&&(m=Math.floor(d/h))>0&&(p+=m,d%=h),p+="\\frac{",p+=d,p+="}{",p+=h,p+="}"),p},toContinued:function(){var f,m=this.n,p=this.d,d=[];if(isNaN(m)||isNaN(p))return d;do d.push(Math.floor(m/p)),f=m%p,m=p,p=f;while(m!==1);return d},toString:function(f){var m=this.n,p=this.d;if(isNaN(m)||isNaN(p))return"NaN";f=f||15;var d=l(m,p),h=c(m,p,d),v=this.s<0?"-":"";if(v+=m/p|0,m%=p,m*=10,m&&(v+="."),d){for(var A=h;A--;)v+=m/p|0,m%=p,m*=10;v+="(";for(var A=d;A--;)v+=m/p|0,m%=p,m*=10;v+=")"}else for(var A=f;m&&A--;)v+=m/p|0,m%=p,m*=10;return v}},Object.defineProperty(g,"__esModule",{value:!0}),g.default=g,g.Fraction=g,e.exports=g})()})(Vj);var bu="(".charCodeAt(0),wu=")".charCodeAt(0),Na="'".charCodeAt(0),Du='"'.charCodeAt(0),Pu="\\".charCodeAt(0),Nn="/".charCodeAt(0),Ru=",".charCodeAt(0),Nu=":".charCodeAt(0),Fa="*".charCodeAt(0),Wj="u".charCodeAt(0),jj="U".charCodeAt(0),Yj="+".charCodeAt(0),Xj=/^[a-f0-9?-]+$/i,Zj=function(e){for(var B=[],t=e,C,n,r,i,s,a,o,l,c=0,u=t.charCodeAt(c),g=t.length,f=[{nodes:B}],m=0,p,d="",h="",v="";c<g;)if(u<=32){C=c;do C+=1,u=t.charCodeAt(C);while(u<=32);i=t.slice(c,C),r=B[B.length-1],u===wu&&m?v=i:r&&r.type==="div"?(r.after=i,r.sourceEndIndex+=i.length):u===Ru||u===Nu||u===Nn&&t.charCodeAt(C+1)!==Fa&&(!p||p&&p.type==="function"&&p.value!=="calc")?h=i:B.push({type:"space",sourceIndex:c,sourceEndIndex:C,value:i}),c=C}else if(u===Na||u===Du){C=c,n=u===Na?"'":'"',i={type:"string",sourceIndex:c,quote:n};do if(s=!1,C=t.indexOf(n,C+1),~C)for(a=C;t.charCodeAt(a-1)===Pu;)a-=1,s=!s;else t+=n,C=t.length-1,i.unclosed=!0;while(s);i.value=t.slice(c+1,C),i.sourceEndIndex=i.unclosed?C:C+1,B.push(i),c=C+1,u=t.charCodeAt(c)}else if(u===Nn&&t.charCodeAt(c+1)===Fa)C=t.indexOf("*/",c),i={type:"comment",sourceIndex:c,sourceEndIndex:C+2},C===-1&&(i.unclosed=!0,C=t.length,i.sourceEndIndex=C),i.value=t.slice(c+2,C),B.push(i),c=C+2,u=t.charCodeAt(c);else if((u===Nn||u===Fa)&&p&&p.type==="function"&&p.value==="calc")i=t[c],B.push({type:"word",sourceIndex:c-h.length,sourceEndIndex:c+i.length,value:i}),c+=1,u=t.charCodeAt(c);else if(u===Nn||u===Ru||u===Nu)i=t[c],B.push({type:"div",sourceIndex:c-h.length,sourceEndIndex:c+i.length,value:i,before:h,after:""}),h="",c+=1,u=t.charCodeAt(c);else if(bu===u){C=c;do C+=1,u=t.charCodeAt(C);while(u<=32);if(l=c,i={type:"function",sourceIndex:c-d.length,value:d,before:t.slice(l+1,C)},c=C,d==="url"&&u!==Na&&u!==Du){C-=1;do if(s=!1,C=t.indexOf(")",C+1),~C)for(a=C;t.charCodeAt(a-1)===Pu;)a-=1,s=!s;else t+=")",C=t.length-1,i.unclosed=!0;while(s);o=C;do o-=1,u=t.charCodeAt(o);while(u<=32);l<o?(c!==o+1?i.nodes=[{type:"word",sourceIndex:c,sourceEndIndex:o+1,value:t.slice(c,o+1)}]:i.nodes=[],i.unclosed&&o+1!==C?(i.after="",i.nodes.push({type:"space",sourceIndex:o+1,sourceEndIndex:C,value:t.slice(o+1,C)})):(i.after=t.slice(o+1,C),i.sourceEndIndex=C)):(i.after="",i.nodes=[]),c=C+1,i.sourceEndIndex=i.unclosed?C:c,u=t.charCodeAt(c),B.push(i)}else m+=1,i.after="",i.sourceEndIndex=c+1,B.push(i),f.push(i),B=i.nodes=[],p=i;d=""}else if(wu===u&&m)c+=1,u=t.charCodeAt(c),p.after=v,p.sourceEndIndex+=v.length,v="",m-=1,f[f.length-1].sourceEndIndex=c,f.pop(),p=f[m],B=p.nodes;else{C=c;do u===Pu&&(C+=1),C+=1,u=t.charCodeAt(C);while(C<g&&!(u<=32||u===Na||u===Du||u===Ru||u===Nu||u===Nn||u===bu||u===Fa&&p&&p.type==="function"&&p.value==="calc"||u===Nn&&p.type==="function"&&p.value==="calc"||u===wu&&m));i=t.slice(c,C),bu===u?d=i:(Wj===i.charCodeAt(0)||jj===i.charCodeAt(0))&&Yj===i.charCodeAt(1)&&Xj.test(i.slice(2))?B.push({type:"unicode-range",sourceIndex:c,sourceEndIndex:C,value:i}):B.push({type:"word",sourceIndex:c,sourceEndIndex:C,value:i}),c=C}for(c=f.length-1;c;c-=1)f[c].unclosed=!0,f[c].sourceEndIndex=t.length;return f[0].nodes},qj=function e(B,t,C){var n,r,i,s;for(n=0,r=B.length;n<r;n+=1)i=B[n],C||(s=t(i,n,B)),s!==!1&&i.type==="function"&&Array.isArray(i.nodes)&&e(i.nodes,t,C),C&&t(i,n,B)};function G0(e,B){var t=e.type,C=e.value,n,r;return B&&(r=B(e))!==void 0?r:t==="word"||t==="space"?C:t==="string"?(n=e.quote||"",n+C+(e.unclosed?"":n)):t==="comment"?"/*"+C+(e.unclosed?"":"*/"):t==="div"?(e.before||"")+C+(e.after||""):Array.isArray(e.nodes)?(n=rw(e.nodes,B),t!=="function"?n:C+"("+(e.before||"")+n+(e.after||"")+(e.unclosed?"":")")):C}function rw(e,B){var t,C;if(Array.isArray(e)){for(t="",C=e.length-1;~C;C-=1)t=G0(e[C],B)+t;return t}return G0(e,B)}var zj=rw,Fu,K0;function _j(){if(K0)return Fu;K0=1;var e="-".charCodeAt(0),B="+".charCodeAt(0),t=".".charCodeAt(0),C="e".charCodeAt(0),n="E".charCodeAt(0);function r(i){var s=i.charCodeAt(0),a;if(s===B||s===e){if(a=i.charCodeAt(1),a>=48&&a<=57)return!0;var o=i.charCodeAt(2);return a===t&&o>=48&&o<=57}return s===t?(a=i.charCodeAt(1),a>=48&&a<=57):s>=48&&s<=57}return Fu=function(i){var s=0,a=i.length,o,l,c;if(a===0||!r(i))return!1;for(o=i.charCodeAt(s),(o===B||o===e)&&s++;s<a&&(o=i.charCodeAt(s),!(o<48||o>57));)s+=1;if(o=i.charCodeAt(s),l=i.charCodeAt(s+1),o===t&&l>=48&&l<=57)for(s+=2;s<a&&(o=i.charCodeAt(s),!(o<48||o>57));)s+=1;if(o=i.charCodeAt(s),l=i.charCodeAt(s+1),c=i.charCodeAt(s+2),(o===C||o===n)&&(l>=48&&l<=57||(l===B||l===e)&&c>=48&&c<=57))for(s+=l===B||l===e?3:2;s<a&&(o=i.charCodeAt(s),!(o<48||o>57));)s+=1;return{number:i.slice(0,s),unit:i.slice(s)}},Fu}var $j=Zj,iw=qj,sw=zj;function NC(e){return this instanceof NC?(this.nodes=$j(e),this):new NC(e)}NC.prototype.toString=function(){return Array.isArray(this.nodes)?sw(this.nodes):""};NC.prototype.walk=function(e,B){return iw(this.nodes,e,B),this};NC.unit=_j();NC.walk=iw;NC.stringify=sw;var t2=NC;let B7=gB,e7=class{constructor(B,t,C,n){this.unprefixed=B,this.prefixed=t,this.string=C||t,this.regexp=n||B7.regexp(t)}check(B){return B.includes(this.string)?!!B.match(this.regexp):!1}};var Ms=e7;let t7=e2,C7=Ms,n7=Cw,r7=gB,i7=class extends t7{static save(B,t){let C=t.prop,n=[];for(let r in t._autoprefixerValues){let i=t._autoprefixerValues[r];if(i===t.value)continue;let s,a=n7.prefix(C);if(a==="-pie-")continue;if(a===r){s=t.value=i,n.push(s);continue}let o=B.prefixed(C,r),l=t.parent;if(!l.every(f=>f.prop!==o)){n.push(s);continue}let c=i.replace(/\s+/," ");if(l.some(f=>f.prop===t.prop&&f.value.replace(/\s+/," ")===c)){n.push(s);continue}let g=this.clone(t,{value:i});s=t.parent.insertBefore(t,g),n.push(s)}return n}check(B){let t=B.value;return t.includes(this.name)?!!t.match(this.regexp()):!1}regexp(){return this.regexpCache||(this.regexpCache=r7.regexp(this.name))}replace(B,t){return B.replace(this.regexp(),`$1${t}$2`)}value(B){return B.raws.value&&B.raws.value.value===B.value?B.raws.value.raw:B.value}add(B,t){B._autoprefixerValues||(B._autoprefixerValues={});let C=B._autoprefixerValues[t]||this.value(B),n;do if(n=C,C=this.replace(C,t),C===!1)return;while(C!==n);B._autoprefixerValues[t]=C}old(B){return new C7(this.name,B+this.name)}};var Et=i7,wB={};let Pe=t2,Er=Ts.list,U0=gB.uniq,s7=gB.escapeRegexp,Nd=gB.splitSelector;function Q0(e){return e&&e.length===2&&e[0]==="span"&&parseInt(e[1],10)>0?[!1,parseInt(e[1],10)]:e&&e.length===1&&parseInt(e[0],10)>0?[parseInt(e[0],10),!1]:[!1,!1]}wB.translate=a7;function a7(e,B,t){let C=e[B],n=e[t];if(!C)return[!1,!1];let[r,i]=Q0(C),[s,a]=Q0(n);return r&&!n?[r,!1]:i&&s?[s-i,i]:r&&a?[r,a]:r&&s?[r,s-r]:[!1,!1]}wB.parse=o7;function o7(e){let B=Pe(e.value),t=[],C=0;t[C]=[];for(let n of B.nodes)n.type==="div"?(C+=1,t[C]=[]):n.type==="word"&&t[C].push(n.value);return t}wB.insertDecl=l7;function l7(e,B,t){t&&!e.parent.some(C=>C.prop===`-ms-${B}`)&&e.cloneBefore({prop:`-ms-${B}`,value:t.toString()})}wB.prefixTrackProp=c7;function c7({prop:e,prefix:B}){return B+e.replace("template-","")}function u7({nodes:e},{gap:B}){let{count:t,size:C}=e.reduce((n,r)=>(r.type==="div"&&r.value===","?n.key="size":n[n.key].push(Pe.stringify(r)),n),{key:"count",size:[],count:[]});if(B){C=C.filter(r=>r.trim());let n=[];for(let r=1;r<=t;r++)C.forEach((i,s)=>{(s>0||r>1)&&n.push(B),n.push(i)});return n.join(" ")}return`(${C.join("")})[${t.join("")}]`}wB.prefixTrackValue=Fd;function Fd({value:e,gap:B}){let t=Pe(e).nodes.reduce((C,n)=>n.type==="function"&&n.value==="repeat"?C.concat({type:"word",value:u7(n,{gap:B})}):B&&n.type==="space"?C.concat({type:"space",value:" "},{type:"word",value:B},n):C.concat(n),[]);return Pe.stringify(t)}let f7=/^\.+$/;function J0(e,B){return{start:e,end:B,span:B-e}}function d7(e){return e.trim().split(/\s+/g)}wB.parseGridAreas=C2;function C2({rows:e,gap:B}){return e.reduce((t,C,n)=>(B.row&&(n*=2),C.trim()===""||d7(C).forEach((r,i)=>{if(!f7.test(r))if(B.column&&(i*=2),typeof t[r]>"u")t[r]={column:J0(i+1,i+2),row:J0(n+1,n+2)};else{let{column:s,row:a}=t[r];s.start=Math.min(s.start,i+1),s.end=Math.max(s.end,i+2),s.span=s.end-s.start,a.start=Math.min(a.start,n+1),a.end=Math.max(a.end,n+2),a.span=a.end-a.start}}),t),{})}function h7(e){return e.type==="word"&&/^\[.+]$/.test(e.value)}function V0(e){return e.areas.length>e.rows.length&&e.rows.push("auto"),e}wB.parseTemplate=n2;function n2({decl:e,gap:B}){let t=Pe(e.value).nodes.reduce((C,n)=>{let{type:r,value:i}=n;return h7(n)||r==="space"||(r==="string"&&(C=V0(C),C.areas.push(i)),(r==="word"||r==="function")&&C[C.key].push(Pe.stringify(n)),r==="div"&&i==="/"&&(C.key="columns",C=V0(C))),C},{key:"rows",columns:[],rows:[],areas:[]});return{areas:C2({rows:t.areas,gap:B}),columns:Fd({value:t.columns.join(" "),gap:B.column}),rows:Fd({value:t.rows.join(" "),gap:B.row})}}function Oa(e,B=!1,t=!1){let C=[{prop:"-ms-grid-row",value:String(e.row.start)}];return(e.row.span>1||B)&&C.push({prop:"-ms-grid-row-span",value:String(e.row.span)}),C.push({prop:"-ms-grid-column",value:String(e.column.start)}),(e.column.span>1||t)&&C.push({prop:"-ms-grid-column-span",value:String(e.column.span)}),C}function os(e){return e.type==="atrule"&&e.name==="media"?e:e.parent?os(e.parent):!1}function W0(e,B){return e=e.map(t=>{let C=Er.space(t),n=Er.comma(t);return C.length>n.length&&(t=C.slice(-1).join("")),t}),e.map(t=>B.map((n,r)=>`${r===0?"":" "}${n} > ${t}`))}function j0(e,B){return e.selectors.some(t=>B.selectors.includes(t))}function p7(e){let B=[];return e.walkDecls(/grid-template(-areas)?$/,t=>{let C=t.parent,n=os(C),r=cc(t),i=aw(t,r),{areas:s}=n2({decl:t,gap:i||r}),a=Object.keys(s);if(a.length===0)return!0;let o=B.reduce((l,{allAreas:c},u)=>c&&a.some(f=>c.includes(f))?u:l,null);if(o!==null){let{allAreas:l,rules:c}=B[o],u=c.some(m=>m.hasDuplicates===!1&&j0(m,C)),g=!1,f=c.reduce((m,p)=>!p.params&&j0(p,C)?(g=!0,p.duplicateAreaNames):(g||a.forEach(d=>{p.areas[d]&&m.push(d)}),U0(m)),[]);c.forEach(m=>{a.forEach(p=>{let d=m.areas[p];d&&d.row.span!==s[p].row.span&&(s[p].row.updateSpan=!0),d&&d.column.span!==s[p].column.span&&(s[p].column.updateSpan=!0)})}),B[o].allAreas=U0([...l,...a]),B[o].rules.push({hasDuplicates:!u,params:n.params,selectors:C.selectors,node:C,duplicateAreaNames:f,areas:s})}else B.push({allAreas:a,areasCount:0,rules:[{hasDuplicates:!1,duplicateRules:[],params:n.params,selectors:C.selectors,node:C,duplicateAreaNames:[],areas:s}]})}),B}wB.insertAreas=m7;function m7(e,B){let t=p7(e);if(t.length===0)return;let C={};e.walkDecls("grid-area",n=>{let r=n.parent,i=r.first.prop==="-ms-grid-row",s=os(r);if(B(n))return;let a=e.index(s||r),o=n.value,l=t.filter(p=>p.allAreas.includes(o))[0];if(!l)return!0;let c=l.allAreas[l.allAreas.length-1],u=Er.space(r.selector),g=Er.comma(r.selector),f=u.length>1&&u.length>g.length;if(i)return!1;C[c]||(C[c]={});let m=!1;for(let p of l.rules){let d=p.areas[o],h=p.duplicateAreaNames.includes(o);if(!d){let v=C[c].lastRule,A;v?A=e.index(v):A=-1,a>A&&(C[c].lastRule=s||r);continue}if(p.params&&!C[c][p.params]&&(C[c][p.params]=[]),(!p.hasDuplicates||!h)&&!p.params)Oa(d,!1,!1).reverse().forEach(v=>r.prepend(Object.assign(v,{raws:{between:n.raws.between}}))),C[c].lastRule=r,m=!0;else if(p.hasDuplicates&&!p.params&&!f){let v=r.clone();v.removeAll(),Oa(d,d.row.updateSpan,d.column.updateSpan).reverse().forEach(A=>v.prepend(Object.assign(A,{raws:{between:n.raws.between}}))),v.selectors=W0(v.selectors,p.selectors),C[c].lastRule&&C[c].lastRule.after(v),C[c].lastRule=v,m=!0}else if(p.hasDuplicates&&!p.params&&f&&r.selector.includes(p.selectors[0]))r.walkDecls(/-ms-grid-(row|column)/,v=>v.remove()),Oa(d,d.row.updateSpan,d.column.updateSpan).reverse().forEach(v=>r.prepend(Object.assign(v,{raws:{between:n.raws.between}})));else if(p.params){let v=r.clone();v.removeAll(),Oa(d,d.row.updateSpan,d.column.updateSpan).reverse().forEach(A=>v.prepend(Object.assign(A,{raws:{between:n.raws.between}}))),p.hasDuplicates&&h&&(v.selectors=W0(v.selectors,p.selectors)),v.raws=p.node.raws,e.index(p.node.parent)>a?p.node.parent.append(v):C[c][p.params].push(v),m||(C[c].lastRule=s||r)}}}),Object.keys(C).forEach(n=>{let r=C[n],i=r.lastRule;Object.keys(r).reverse().filter(s=>s!=="lastRule").forEach(s=>{r[s].length>0&&i&&(i.after({name:"media",params:s}),i.next().append(r[s]))})})}wB.warnMissedAreas=g7;function g7(e,B,t){let C=Object.keys(e);B.root().walkDecls("grid-area",n=>{C=C.filter(r=>r!==n.value)}),C.length>0&&B.warn(t,"Can not find grid areas: "+C.join(", "))}wB.warnTemplateSelectorNotFound=v7;function v7(e,B){let t=e.parent,C=e.root(),n=!1,r=Er.space(t.selector).filter(i=>i!==">").slice(0,-1);if(r.length>0){let i=!1,s=null;C.walkDecls(/grid-template(-areas)?$/,a=>{let o=a.parent,l=o.selectors,{areas:c}=n2({decl:a,gap:cc(a)}),u=c[e.value];for(let g of l){if(i)break;i=Er.space(g).filter(m=>m!==">").every((m,p)=>m===r[p])}if(i||!u)return!0;s||(s=o.selector),s&&s!==o.selector&&(n=!0)}),!i&&n&&e.warn(B,`Autoprefixer cannot find a grid-template containing the duplicate grid-area "${e.value}" with full selector matching: ${r.join(" ")}`)}}wB.warnIfGridRowColumnExists=A7;function A7(e,B){let t=e.parent,C=[];t.walkDecls(/^grid-(row|column)/,n=>{!n.prop.endsWith("-end")&&!n.value.startsWith("span")&&!n.prop.endsWith("-gap")&&C.push(n)}),C.length>0&&C.forEach(n=>{n.warn(B,`You already have a grid-area declaration present in the rule. You should use either grid-area or ${n.prop}, not both`)})}wB.getGridGap=cc;function cc(e){let B={},t=/^(grid-)?((row|column)-)?gap$/;return e.parent.walkDecls(t,({prop:C,value:n})=>{if(/^(grid-)?gap$/.test(C)){let[r,,i]=Pe(n).nodes;B.row=r&&Pe.stringify(r),B.column=i?Pe.stringify(i):B.row}/^(grid-)?row-gap$/.test(C)&&(B.row=n),/^(grid-)?column-gap$/.test(C)&&(B.column=n)}),B}function Y0(e){if(!e)return[];let B=Pe(e),t,C;return B.walk(n=>{n.type==="word"&&/min|max/g.test(n.value)?t=n.value:n.value.includes("px")&&(C=parseInt(n.value.replace(/\D/g,"")))}),[t,C]}function y7(e,B){let t,C=Nd(e),n=Nd(B);if(C[0].length<n[0].length)return!1;if(C[0].length>n[0].length){let r=C[0].reduce((i,[s],a)=>{let o=n[0][0][0];return s===o?a:!1},!1);r&&(t=n[0].every((i,s)=>i.every((a,o)=>C[0].slice(r)[s][o]===a)))}else t=n.some(r=>r.every((i,s)=>i.every((a,o)=>C[0][s][o]===a)));return t}wB.inheritGridGap=aw;function aw(e,B){let t=e.parent,C=os(t),n=t.root(),r=Nd(t.selector);if(Object.keys(B).length>0)return!1;let[i]=Y0(C.params),s=r[0],a=s7(s[s.length-1][0]),o=new RegExp(`(${a}$)|(${a}[,.])`),l;return n.walkRules(o,c=>{let u;if(t.toString()===c.toString())return!1;if(c.walkDecls("grid-gap",f=>u=cc(f)),!u||Object.keys(u).length===0||!y7(t.selector,c.selector))return!0;let g=os(c);if(g){if(Y0(g.params)[0]===i)return l=u,!0}else return l=u,!0}),l&&Object.keys(l).length>0?l:!1}wB.warnGridGap=E7;function E7({gap:e,hasColumns:B,decl:t,result:C}){let n=e.row&&e.column;!B&&(n||e.column&&!e.row)&&(delete e.column,t.warn(C,"Can not implement grid-gap without grid-template-columns"))}function X0(e){return Pe(e).nodes.reduce((t,C)=>{if(C.type==="function"&&C.value==="repeat"){let n="count",[r,i]=C.nodes.reduce((s,a)=>a.type==="word"&&n==="count"?(s[0]=Math.abs(parseInt(a.value)),s):a.type==="div"&&a.value===","?(n="value",s):(n==="value"&&(s[1]+=Pe.stringify(a)),s),[0,""]);if(r)for(let s=0;s<r;s++)t.push(i);return t}return C.type==="space"?t:t.concat(Pe.stringify(C))},[])}wB.autoplaceGridItems=S7;function S7(e,B,t,C="row"){let{parent:n}=e,r=n.nodes.find(u=>u.prop==="grid-template-rows"),i=X0(r.value),s=X0(e.value),a=i.map((u,g)=>Array.from({length:s.length},(f,m)=>m+g*s.length+1).join(" ")),o=C2({rows:a,gap:t}),l=Object.keys(o),c=l.map(u=>o[u]);C.includes("column")&&(c=c.sort((u,g)=>u.column.start-g.column.start)),c.reverse().forEach((u,g)=>{let{column:f,row:m}=u,p=n.selectors.map(h=>h+` > *:nth-child(${l.length-g})`).join(", "),d=n.clone().removeAll();d.selector=p,d.append({prop:"-ms-grid-row",value:m.start}),d.append({prop:"-ms-grid-column",value:f.start}),n.after(d)})}let Z0=t2,I7=Et,b7=wB.insertAreas;const w7=/(^|[^-])linear-gradient\(\s*(top|left|right|bottom)/i,D7=/(^|[^-])radial-gradient\(\s*\d+(\w*|%)\s+\d+(\w*|%)\s*,/i,P7=/(!\s*)?autoprefixer:\s*ignore\s+next/i,R7=/(!\s*)?autoprefixer\s*grid:\s*(on|off|(no-)?autoplace)/i,N7=["width","height","min-width","max-width","min-height","max-height","inline-size","min-inline-size","max-inline-size","block-size","min-block-size","max-block-size"];function Ou(e){return e.parent.some(B=>B.prop==="grid-template"||B.prop==="grid-template-areas")}function F7(e){let B=e.parent.some(C=>C.prop==="grid-template-rows"),t=e.parent.some(C=>C.prop==="grid-template-columns");return B&&t}let O7=class{constructor(B){this.prefixes=B}add(B,t){let C=this.prefixes.add["@resolution"],n=this.prefixes.add["@keyframes"],r=this.prefixes.add["@viewport"],i=this.prefixes.add["@supports"];B.walkAtRules(l=>{if(l.name==="keyframes"){if(!this.disabled(l,t))return n&&n.process(l)}else if(l.name==="viewport"){if(!this.disabled(l,t))return r&&r.process(l)}else if(l.name==="supports"){if(this.prefixes.options.supports!==!1&&!this.disabled(l,t))return i.process(l)}else if(l.name==="media"&&l.params.includes("-resolution")&&!this.disabled(l,t))return C&&C.process(l)}),B.walkRules(l=>{if(!this.disabled(l,t))return this.prefixes.add.selectors.map(c=>c.process(l,t))});function s(l){return l.parent.nodes.some(c=>{if(c.type!=="decl")return!1;let u=c.prop==="display"&&/(inline-)?grid/.test(c.value),g=c.prop.startsWith("grid-template"),f=/^grid-([A-z]+-)?gap/.test(c.prop);return u||g||f})}function a(l){return l.parent.some(c=>c.prop==="display"&&/(inline-)?flex/.test(c.value))}let o=this.gridStatus(B,t)&&this.prefixes.add["grid-area"]&&this.prefixes.add["grid-area"].prefixes;return B.walkDecls(l=>{if(this.disabledDecl(l,t))return;let c=l.parent,u=l.prop,g=l.value;if(u==="color-adjust")c.every(m=>m.prop!=="print-color-adjust")&&t.warn("Replace color-adjust to print-color-adjust. The color-adjust shorthand is currently deprecated.",{node:l});else if(u==="grid-row-span"){t.warn("grid-row-span is not part of final Grid Layout. Use grid-row.",{node:l});return}else if(u==="grid-column-span"){t.warn("grid-column-span is not part of final Grid Layout. Use grid-column.",{node:l});return}else if(u==="display"&&g==="box"){t.warn("You should write display: flex by final spec instead of display: box",{node:l});return}else if(u==="text-emphasis-position")(g==="under"||g==="over")&&t.warn("You should use 2 values for text-emphasis-position For example, `under left` instead of just `under`.",{node:l});else if(/^(align|justify|place)-(items|content)$/.test(u)&&a(l))(g==="start"||g==="end")&&t.warn(`${g} value has mixed support, consider using flex-${g} instead`,{node:l});else if(u==="text-decoration-skip"&&g==="ink")t.warn("Replace text-decoration-skip: ink to text-decoration-skip-ink: auto, because spec had been changed",{node:l});else{if(o&&this.gridStatus(l,t))if(l.value==="subgrid"&&t.warn("IE does not support subgrid",{node:l}),/^(align|justify|place)-items$/.test(u)&&s(l)){let m=u.replace("-items","-self");t.warn(`IE does not support ${u} on grid containers. Try using ${m} on child elements instead: ${l.parent.selector} > * { ${m}: ${l.value} }`,{node:l})}else if(/^(align|justify|place)-content$/.test(u)&&s(l))t.warn(`IE does not support ${l.prop} on grid containers`,{node:l});else if(u==="display"&&l.value==="contents"){t.warn("Please do not use display: contents; if you have grid setting enabled",{node:l});return}else if(l.prop==="grid-gap"){let m=this.gridStatus(l,t);m==="autoplace"&&!F7(l)&&!Ou(l)?t.warn("grid-gap only works if grid-template(-areas) is being used or both rows and columns have been declared and cells have not been manually placed inside the explicit grid",{node:l}):(m===!0||m==="no-autoplace")&&!Ou(l)&&t.warn("grid-gap only works if grid-template(-areas) is being used",{node:l})}else if(u==="grid-auto-columns"){t.warn("grid-auto-columns is not supported by IE",{node:l});return}else if(u==="grid-auto-rows"){t.warn("grid-auto-rows is not supported by IE",{node:l});return}else if(u==="grid-auto-flow"){let m=c.some(d=>d.prop==="grid-template-rows"),p=c.some(d=>d.prop==="grid-template-columns");Ou(l)?t.warn("grid-auto-flow is not supported by IE",{node:l}):g.includes("dense")?t.warn("grid-auto-flow: dense is not supported by IE",{node:l}):!m&&!p&&t.warn("grid-auto-flow works only if grid-template-rows and grid-template-columns are present in the same rule",{node:l});return}else if(g.includes("auto-fit")){t.warn("auto-fit value is not supported by IE",{node:l,word:"auto-fit"});return}else if(g.includes("auto-fill")){t.warn("auto-fill value is not supported by IE",{node:l,word:"auto-fill"});return}else u.startsWith("grid-template")&&g.includes("[")&&t.warn("Autoprefixer currently does not support line names. Try using grid-template-areas instead.",{node:l,word:"["});if(g.includes("radial-gradient"))if(D7.test(l.value))t.warn("Gradient has outdated direction syntax. New syntax is like `closest-side at 0 0` instead of `0 0, closest-side`.",{node:l});else{let m=Z0(g);for(let p of m.nodes)if(p.type==="function"&&p.value==="radial-gradient")for(let d of p.nodes)d.type==="word"&&(d.value==="cover"?t.warn("Gradient has outdated direction syntax. Replace `cover` to `farthest-corner`.",{node:l}):d.value==="contain"&&t.warn("Gradient has outdated direction syntax. Replace `contain` to `closest-side`.",{node:l}))}g.includes("linear-gradient")&&w7.test(g)&&t.warn("Gradient has outdated direction syntax. New syntax is like `to left` instead of `right`.",{node:l})}N7.includes(l.prop)&&(l.value.includes("-fill-available")||(l.value.includes("fill-available")?t.warn("Replace fill-available to stretch, because spec had been changed",{node:l}):l.value.includes("fill")&&Z0(g).nodes.some(p=>p.type==="word"&&p.value==="fill")&&t.warn("Replace fill to stretch, because spec had been changed",{node:l})));let f;if(l.prop==="transition"||l.prop==="transition-property")return this.prefixes.transition.add(l,t);if(l.prop==="align-self"){if(this.displayType(l)!=="grid"&&this.prefixes.options.flexbox!==!1&&(f=this.prefixes.add["align-self"],f&&f.prefixes&&f.process(l)),this.gridStatus(l,t)!==!1&&(f=this.prefixes.add["grid-row-align"],f&&f.prefixes))return f.process(l,t)}else if(l.prop==="justify-self"){if(this.gridStatus(l,t)!==!1&&(f=this.prefixes.add["grid-column-align"],f&&f.prefixes))return f.process(l,t)}else if(l.prop==="place-self"){if(f=this.prefixes.add["place-self"],f&&f.prefixes&&this.gridStatus(l,t)!==!1)return f.process(l,t)}else if(f=this.prefixes.add[l.prop],f&&f.prefixes)return f.process(l,t)}),this.gridStatus(B,t)&&b7(B,this.disabled),B.walkDecls(l=>{if(this.disabledValue(l,t))return;let c=this.prefixes.unprefixed(l.prop),u=this.prefixes.values("add",c);if(Array.isArray(u))for(let g of u)g.process&&g.process(l,t);I7.save(this.prefixes,l)})}remove(B,t){let C=this.prefixes.remove["@resolution"];B.walkAtRules((n,r)=>{this.prefixes.remove[`@${n.name}`]?this.disabled(n,t)||n.parent.removeChild(r):n.name==="media"&&n.params.includes("-resolution")&&C&&C.clean(n)});for(let n of this.prefixes.remove.selectors)B.walkRules((r,i)=>{n.check(r)&&(this.disabled(r,t)||r.parent.removeChild(i))});return B.walkDecls((n,r)=>{if(this.disabled(n,t))return;let i=n.parent,s=this.prefixes.unprefixed(n.prop);if((n.prop==="transition"||n.prop==="transition-property")&&this.prefixes.transition.remove(n),this.prefixes.remove[n.prop]&&this.prefixes.remove[n.prop].remove){let a=this.prefixes.group(n).down(o=>this.prefixes.normalize(o.prop)===s);if(s==="flex-flow"&&(a=!0),n.prop==="-webkit-box-orient"){let o={"flex-direction":!0,"flex-flow":!0};if(!n.parent.some(l=>o[l.prop]))return}if(a&&!this.withHackValue(n)){n.raw("before").includes(`
`)&&this.reduceSpaces(n),i.removeChild(r);return}}for(let a of this.prefixes.values("remove",s)){if(!a.check||!a.check(n.value))continue;if(s=a.unprefixed,this.prefixes.group(n).down(l=>l.value.includes(s))){i.removeChild(r);return}}})}withHackValue(B){return B.prop==="-webkit-background-clip"&&B.value==="text"}disabledValue(B,t){return this.gridStatus(B,t)===!1&&B.type==="decl"&&B.prop==="display"&&B.value.includes("grid")||this.prefixes.options.flexbox===!1&&B.type==="decl"&&B.prop==="display"&&B.value.includes("flex")||B.type==="decl"&&B.prop==="content"?!0:this.disabled(B,t)}disabledDecl(B,t){if(this.gridStatus(B,t)===!1&&B.type==="decl"&&(B.prop.includes("grid")||B.prop==="justify-items"))return!0;if(this.prefixes.options.flexbox===!1&&B.type==="decl"){let C=["order","justify-content","align-items","align-content"];if(B.prop.includes("flex")||C.includes(B.prop))return!0}return this.disabled(B,t)}disabled(B,t){if(!B)return!1;if(B._autoprefixerDisabled!==void 0)return B._autoprefixerDisabled;if(B.parent){let n=B.prev();if(n&&n.type==="comment"&&P7.test(n.text))return B._autoprefixerDisabled=!0,B._autoprefixerSelfDisabled=!0,!0}let C=null;if(B.nodes){let n;B.each(r=>{r.type==="comment"&&/(!\s*)?autoprefixer:\s*(off|on)/i.test(r.text)&&(typeof n<"u"?t.warn("Second Autoprefixer control comment was ignored. Autoprefixer applies control comment to whole block, not to next rules.",{node:r}):n=/on/i.test(r.text))}),n!==void 0&&(C=!n)}if(!B.nodes||C===null)if(B.parent){let n=this.disabled(B.parent,t);B.parent._autoprefixerSelfDisabled===!0?C=!1:C=n}else C=!1;return B._autoprefixerDisabled=C,C}reduceSpaces(B){let t=!1;if(this.prefixes.group(B).up(()=>(t=!0,!0)),t)return;let C=B.raw("before").split(`
`),n=C[C.length-1].length,r=!1;this.prefixes.group(B).down(i=>{C=i.raw("before").split(`
`);let s=C.length-1;C[s].length>n&&(r===!1&&(r=C[s].length-n),C[s]=C[s].slice(0,-r),i.raws.before=C.join(`
`))})}displayType(B){for(let t of B.parent.nodes)if(t.prop==="display"){if(t.value.includes("flex"))return"flex";if(t.value.includes("grid"))return"grid"}return!1}gridStatus(B,t){if(!B)return!1;if(B._autoprefixerGridStatus!==void 0)return B._autoprefixerGridStatus;let C=null;if(B.nodes){let n;B.each(r=>{if(r.type==="comment"&&R7.test(r.text)){let i=/:\s*autoplace/i.test(r.text),s=/no-autoplace/i.test(r.text);typeof n<"u"?t.warn("Second Autoprefixer grid control comment was ignored. Autoprefixer applies control comments to the whole block, not to the next rules.",{node:r}):i?n="autoplace":s?n=!0:n=/on/i.test(r.text)}}),n!==void 0&&(C=n)}if(B.type==="atrule"&&B.name==="supports"){let n=B.params;n.includes("grid")&&n.includes("auto")&&(C=!1)}if(!B.nodes||C===null)if(B.parent){let n=this.gridStatus(B.parent,t);B.parent._autoprefixerSelfDisabled===!0?C=!1:C=n}else typeof this.prefixes.options.grid<"u"?C=this.prefixes.options.grid:typeof{}.AUTOPREFIXER_GRID<"u"?{}.AUTOPREFIXER_GRID==="autoplace"?C="autoplace":C=!0:C=!1;return B._autoprefixerGridStatus=C,C}};var k7=O7;let T7=II,{feature:M7}=In,q0=M7(T7);for(let e in q0.stats){let B=q0.stats[e];for(let t in B)B[t]}let L7=class{constructor(B,t){this.prefix=t,this.prefixed=B.prefixed(this.prefix),this.regexp=B.regexp(this.prefix),this.prefixeds=B.possible().map(C=>[B.prefixed(C),B.regexp(C)]),this.unprefixed=B.name,this.nameRegexp=B.regexp()}isHack(B){let t=B.parent.index(B)+1,C=B.parent.nodes;for(;t<C.length;){let n=C[t].selector;if(!n)return!0;if(n.includes(this.unprefixed)&&n.match(this.nameRegexp))return!1;let r=!1;for(let[i,s]of this.prefixeds)if(n.includes(i)&&n.match(s)){r=!0;break}if(!r)return!0;t+=1}return!0}check(B){return!(!B.selector.includes(this.prefixed)||!B.selector.match(this.regexp)||this.isHack(B))}};var x7=L7;let{list:H7}=Ts,G7=x7,K7=e2,U7=B2,Q7=gB,J7=class extends K7{constructor(B,t,C){super(B,t,C),this.regexpCache=new Map}check(B){return B.selector.includes(this.name)?!!B.selector.match(this.regexp()):!1}prefixed(B){return this.name.replace(/^(\W*)/,`$1${B}`)}regexp(B){if(!this.regexpCache.has(B)){let t=B?this.prefixed(B):this.name;this.regexpCache.set(B,new RegExp(`(^|[^:"'=])${Q7.escapeRegexp(t)}`,"gi"))}return this.regexpCache.get(B)}possible(){return U7.prefixes()}prefixeds(B){if(B._autoprefixerPrefixeds){if(B._autoprefixerPrefixeds[this.name])return B._autoprefixerPrefixeds}else B._autoprefixerPrefixeds={};let t={};if(B.selector.includes(",")){let n=H7.comma(B.selector).filter(r=>r.includes(this.name));for(let r of this.possible())t[r]=n.map(i=>this.replace(i,r)).join(", ")}else for(let C of this.possible())t[C]=this.replace(B.selector,C);return B._autoprefixerPrefixeds[this.name]=t,B._autoprefixerPrefixeds}already(B,t,C){let n=B.parent.index(B)-1;for(;n>=0;){let r=B.parent.nodes[n];if(r.type!=="rule")return!1;let i=!1;for(let s in t[this.name]){let a=t[this.name][s];if(r.selector===a){if(C===s)return!0;i=!0;break}}if(!i)return!1;n-=1}return!1}replace(B,t){return B.replace(this.regexp(),`$1${this.prefixed(t)}`)}add(B,t){let C=this.prefixeds(B);if(this.already(B,C,t))return;let n=this.clone(B,{selector:C[this.name][t]});B.parent.insertBefore(B,n)}old(B){return new G7(this,B)}};var Mr=J7;let V7=Mr;class ow extends V7{prefixed(B){return B==="-webkit-"?":-webkit-full-screen":B==="-moz-"?":-moz-full-screen":`:${B}fullscreen`}}ow.names=[":fullscreen"];var W7=ow;let j7=Mr;class lw extends j7{possible(){return super.possible().concat(["-moz- old","-ms- old"])}prefixed(B){return B==="-webkit-"?"::-webkit-input-placeholder":B==="-ms-"?"::-ms-input-placeholder":B==="-ms- old"?":-ms-input-placeholder":B==="-moz- old"?":-moz-placeholder":`::${B}placeholder`}}lw.names=["::placeholder"];var Y7=lw;let X7=Mr;class cw extends X7{prefixed(B){return B==="-ms-"?":-ms-input-placeholder":`:${B}placeholder-shown`}}cw.names=[":placeholder-shown"];var Z7=cw;let q7=Mr,z7=gB;class uw extends q7{constructor(B,t,C){super(B,t,C),this.prefixes&&(this.prefixes=z7.uniq(this.prefixes.map(()=>"-webkit-")))}prefixed(B){return B==="-webkit-"?"::-webkit-file-upload-button":`::${B}file-selector-button`}}uw.names=["::file-selector-button"];var _7=uw,Oe=function(e){let B;return e==="-webkit- 2009"||e==="-moz-"?B=2009:e==="-ms-"?B=2012:e==="-webkit-"&&(B="final"),e==="-webkit- 2009"&&(e="-webkit-"),[B,e]};let z0=Ts.list,_0=Oe,$7=U,uc=class extends $7{prefixed(B,t){let C;return[C,t]=_0(t),C===2009?t+"box-flex":super.prefixed(B,t)}normalize(){return"flex"}set(B,t){let C=_0(t)[0];if(C===2009)return B.value=z0.space(B.value)[0],B.value=uc.oldValues[B.value]||B.value,super.set(B,t);if(C===2012){let n=z0.space(B.value);n.length===3&&n[2]==="0"&&(B.value=n.slice(0,2).concat("0px").join(" "))}return super.set(B,t)}};uc.names=["flex","box-flex"];uc.oldValues={auto:"1",none:"0"};var BY=uc;let $0=Oe,eY=U;class fw extends eY{prefixed(B,t){let C;return[C,t]=$0(t),C===2009?t+"box-ordinal-group":C===2012?t+"flex-order":super.prefixed(B,t)}normalize(){return"order"}set(B,t){return $0(t)[0]===2009&&/\d/.test(B.value)?(B.value=(parseInt(B.value)+1).toString(),super.set(B,t)):super.set(B,t)}}fw.names=["order","flex-order","box-ordinal-group"];var tY=fw;let CY=U;class dw extends CY{check(B){let t=B.value;return!t.toLowerCase().includes("alpha(")&&!t.includes("DXImageTransform.Microsoft")&&!t.includes("data:image/svg+xml")}}dw.names=["filter"];var nY=dw;let rY=U,{isPureNumber:iY}=gB;class hw extends rY{insert(B,t,C,n){if(t!=="-ms-")return super.insert(B,t,C);let r=this.clone(B),i=B.prop.replace(/end$/,"start"),s=t+B.prop.replace(/end$/,"span");if(!B.parent.some(a=>a.prop===s)){if(r.prop=s,B.value.includes("span"))r.value=B.value.replace(/span\s/i,"");else{let a;if(B.parent.walkDecls(i,o=>{a=o}),a)if(iY(a.value)){let o=Number(B.value)-Number(a.value)+"";r.value=o}else return;else B.warn(n,`Can not prefix ${B.prop} (${i} is not found)`)}B.cloneBefore(r)}}}hw.names=["grid-row-end","grid-column-end"];var sY=hw;let aY=U;class pw extends aY{check(B){return!B.value.split(/\s+/).some(t=>{let C=t.toLowerCase();return C==="reverse"||C==="alternate-reverse"})}}pw.names=["animation","animation-direction"];var oY=pw;let lY=Oe,cY=U;class mw extends cY{insert(B,t,C){let n;if([n,t]=lY(t),n!==2009)return super.insert(B,t,C);let r=B.value.split(/\s+/).filter(c=>c!=="wrap"&&c!=="nowrap"&&"wrap-reverse");if(r.length===0||B.parent.some(c=>c.prop===t+"box-orient"||c.prop===t+"box-direction"))return;let s=r[0],a=s.includes("row")?"horizontal":"vertical",o=s.includes("reverse")?"reverse":"normal",l=this.clone(B);return l.prop=t+"box-orient",l.value=a,this.needCascade(B)&&(l.raws.before=this.calcBefore(C,B,t)),B.parent.insertBefore(B,l),l=this.clone(B),l.prop=t+"box-direction",l.value=o,this.needCascade(B)&&(l.raws.before=this.calcBefore(C,B,t)),B.parent.insertBefore(B,l)}}mw.names=["flex-flow","box-direction","box-orient"];var uY=mw;let fY=Oe,dY=U;class gw extends dY{normalize(){return"flex"}prefixed(B,t){let C;return[C,t]=fY(t),C===2009?t+"box-flex":C===2012?t+"flex-positive":super.prefixed(B,t)}}gw.names=["flex-grow","flex-positive"];var hY=gw;let pY=Oe,mY=U;class vw extends mY{set(B,t){if(pY(t)[0]!==2009)return super.set(B,t)}}vw.names=["flex-wrap"];var gY=vw;let vY=U,Fn=wB;class Aw extends vY{insert(B,t,C,n){if(t!=="-ms-")return super.insert(B,t,C);let r=Fn.parse(B),[i,s]=Fn.translate(r,0,2),[a,o]=Fn.translate(r,1,3);[["grid-row",i],["grid-row-span",s],["grid-column",a],["grid-column-span",o]].forEach(([l,c])=>{Fn.insertDecl(B,l,c)}),Fn.warnTemplateSelectorNotFound(B,n),Fn.warnIfGridRowColumnExists(B,n)}}Aw.names=["grid-area"];var AY=Aw;let yY=U,Bi=wB;class yw extends yY{insert(B,t,C){if(t!=="-ms-")return super.insert(B,t,C);if(B.parent.some(i=>i.prop==="-ms-grid-row-align"))return;let[[n,r]]=Bi.parse(B);r?(Bi.insertDecl(B,"grid-row-align",n),Bi.insertDecl(B,"grid-column-align",r)):(Bi.insertDecl(B,"grid-row-align",n),Bi.insertDecl(B,"grid-column-align",n))}}yw.names=["place-self"];var EY=yw;let SY=U;class Ew extends SY{check(B){let t=B.value;return!t.includes("/")&&!t.includes("span")}normalize(B){return B.replace("-start","")}prefixed(B,t){let C=super.prefixed(B,t);return t==="-ms-"&&(C=C.replace("-start","")),C}}Ew.names=["grid-row-start","grid-column-start"];var IY=Ew;let Bg=Oe,bY=U;class Ls extends bY{check(B){return B.parent&&!B.parent.some(t=>t.prop&&t.prop.startsWith("grid-"))}prefixed(B,t){let C;return[C,t]=Bg(t),C===2012?t+"flex-item-align":super.prefixed(B,t)}normalize(){return"align-self"}set(B,t){let C=Bg(t)[0];if(C===2012)return B.value=Ls.oldValues[B.value]||B.value,super.set(B,t);if(C==="final")return super.set(B,t)}}Ls.names=["align-self","flex-item-align"];Ls.oldValues={"flex-end":"end","flex-start":"start"};var wY=Ls;let DY=U,PY=gB;class Sw extends DY{constructor(B,t,C){super(B,t,C),this.prefixes&&(this.prefixes=PY.uniq(this.prefixes.map(n=>n==="-ms-"?"-webkit-":n)))}}Sw.names=["appearance"];var RY=Sw;let eg=Oe,NY=U;class Iw extends NY{normalize(){return"flex-basis"}prefixed(B,t){let C;return[C,t]=eg(t),C===2012?t+"flex-preferred-size":super.prefixed(B,t)}set(B,t){let C;if([C,t]=eg(t),C===2012||C==="final")return super.set(B,t)}}Iw.names=["flex-basis","flex-preferred-size"];var FY=Iw;let OY=U;class bw extends OY{normalize(){return this.name.replace("box-image","border")}prefixed(B,t){let C=super.prefixed(B,t);return t==="-webkit-"&&(C=C.replace("border","box-image")),C}}bw.names=["mask-border","mask-border-source","mask-border-slice","mask-border-width","mask-border-outset","mask-border-repeat","mask-box-image","mask-box-image-source","mask-box-image-slice","mask-box-image-width","mask-box-image-outset","mask-box-image-repeat"];var kY=bw;let TY=U;class kt extends TY{insert(B,t,C){let n=B.prop==="mask-composite",r;n?r=B.value.split(","):r=B.value.match(kt.regexp)||[],r=r.map(o=>o.trim()).filter(o=>o);let i=r.length,s;if(i&&(s=this.clone(B),s.value=r.map(o=>kt.oldValues[o]||o).join(", "),r.includes("intersect")&&(s.value+=", xor"),s.prop=t+"mask-composite"),n)return i?(this.needCascade(B)&&(s.raws.before=this.calcBefore(C,B,t)),B.parent.insertBefore(B,s)):void 0;let a=this.clone(B);return a.prop=t+a.prop,i&&(a.value=a.value.replace(kt.regexp,"")),this.needCascade(B)&&(a.raws.before=this.calcBefore(C,B,t)),B.parent.insertBefore(B,a),i?(this.needCascade(B)&&(s.raws.before=this.calcBefore(C,B,t)),B.parent.insertBefore(B,s)):B}}kt.names=["mask","mask-composite"];kt.oldValues={add:"source-over",subtract:"source-out",intersect:"source-in",exclude:"xor"};kt.regexp=new RegExp(`\\s+(${Object.keys(kt.oldValues).join("|")})\\b(?!\\))\\s*(?=[,])`,"ig");var MY=kt;let tg=Oe,LY=U;class xs extends LY{prefixed(B,t){let C;return[C,t]=tg(t),C===2009?t+"box-align":C===2012?t+"flex-align":super.prefixed(B,t)}normalize(){return"align-items"}set(B,t){let C=tg(t)[0];return(C===2009||C===2012)&&(B.value=xs.oldValues[B.value]||B.value),super.set(B,t)}}xs.names=["align-items","flex-align","box-align"];xs.oldValues={"flex-end":"end","flex-start":"start"};var xY=xs;let HY=U;class ww extends HY{set(B,t){return t==="-ms-"&&B.value==="contain"&&(B.value="element"),super.set(B,t)}insert(B,t,C){if(!(B.value==="all"&&t==="-ms-"))return super.insert(B,t,C)}}ww.names=["user-select"];var GY=ww;let Cg=Oe,KY=U;class Dw extends KY{normalize(){return"flex-shrink"}prefixed(B,t){let C;return[C,t]=Cg(t),C===2012?t+"flex-negative":super.prefixed(B,t)}set(B,t){let C;if([C,t]=Cg(t),C===2012||C==="final")return super.set(B,t)}}Dw.names=["flex-shrink","flex-negative"];var UY=Dw;let QY=U;class Pw extends QY{prefixed(B,t){return`${t}column-${B}`}normalize(B){return B.includes("inside")?"break-inside":B.includes("before")?"break-before":"break-after"}set(B,t){return(B.prop==="break-inside"&&B.value==="avoid-column"||B.value==="avoid-page")&&(B.value="avoid"),super.set(B,t)}insert(B,t,C){if(B.prop!=="break-inside")return super.insert(B,t,C);if(!(/region/i.test(B.value)||/page/i.test(B.value)))return super.insert(B,t,C)}}Pw.names=["break-inside","page-break-inside","column-break-inside","break-before","page-break-before","column-break-before","break-after","page-break-after","column-break-after"];var JY=Pw;let VY=U;class Hs extends VY{insert(B,t,C){if(t==="-ms-"){let n=this.set(this.clone(B),t);this.needCascade(B)&&(n.raws.before=this.calcBefore(C,B,t));let r="ltr";return B.parent.nodes.forEach(i=>{i.prop==="direction"&&(i.value==="rtl"||i.value==="ltr")&&(r=i.value)}),n.value=Hs.msValues[r][B.value]||B.value,B.parent.insertBefore(B,n)}return super.insert(B,t,C)}}Hs.names=["writing-mode"];Hs.msValues={ltr:{"horizontal-tb":"lr-tb","vertical-rl":"tb-rl","vertical-lr":"tb-lr"},rtl:{"horizontal-tb":"rl-tb","vertical-rl":"bt-rl","vertical-lr":"bt-lr"}};var WY=Hs;let jY=U;class Rw extends jY{set(B,t){return B.value=B.value.replace(/\s+fill(\s)/,"$1"),super.set(B,t)}}Rw.names=["border-image"];var YY=Rw;let ng=Oe,XY=U;class Gs extends XY{prefixed(B,t){let C;return[C,t]=ng(t),C===2012?t+"flex-line-pack":super.prefixed(B,t)}normalize(){return"align-content"}set(B,t){let C=ng(t)[0];if(C===2012)return B.value=Gs.oldValues[B.value]||B.value,super.set(B,t);if(C==="final")return super.set(B,t)}}Gs.names=["align-content","flex-line-pack"];Gs.oldValues={"flex-end":"end","flex-start":"start","space-between":"justify","space-around":"distribute"};var ZY=Gs;let qY=U;class _e extends qY{prefixed(B,t){return t==="-moz-"?t+(_e.toMozilla[B]||B):super.prefixed(B,t)}normalize(B){return _e.toNormal[B]||B}}_e.names=["border-radius"];_e.toMozilla={};_e.toNormal={};for(let e of["top","bottom"])for(let B of["left","right"]){let t=`border-${e}-${B}-radius`,C=`border-radius-${e}${B}`;_e.names.push(t),_e.names.push(C),_e.toMozilla[t]=C,_e.toNormal[C]=t}var zY=_e;let _Y=U;class Nw extends _Y{prefixed(B,t){return B.includes("-start")?t+B.replace("-block-start","-before"):t+B.replace("-block-end","-after")}normalize(B){return B.includes("-before")?B.replace("-before","-block-start"):B.replace("-after","-block-end")}}Nw.names=["border-block-start","border-block-end","margin-block-start","margin-block-end","padding-block-start","padding-block-end","border-before","border-after","margin-before","margin-after","padding-before","padding-after"];var $Y=Nw;let BX=U,{parseTemplate:eX,warnMissedAreas:tX,getGridGap:CX,warnGridGap:nX,inheritGridGap:rX}=wB;class Fw extends BX{insert(B,t,C,n){if(t!=="-ms-")return super.insert(B,t,C);if(B.parent.some(g=>g.prop==="-ms-grid-rows"))return;let r=CX(B),i=rX(B,r),{rows:s,columns:a,areas:o}=eX({decl:B,gap:i||r}),l=Object.keys(o).length>0,c=Boolean(s),u=Boolean(a);return nX({gap:r,hasColumns:u,decl:B,result:n}),tX(o,B,n),(c&&u||l)&&B.cloneBefore({prop:"-ms-grid-rows",value:s,raws:{}}),u&&B.cloneBefore({prop:"-ms-grid-columns",value:a,raws:{}}),B}}Fw.names=["grid-template"];var iX=Fw;let sX=U;class Ow extends sX{prefixed(B,t){return t+B.replace("-inline","")}normalize(B){return B.replace(/(margin|padding|border)-(start|end)/,"$1-inline-$2")}}Ow.names=["border-inline-start","border-inline-end","margin-inline-start","margin-inline-end","padding-inline-start","padding-inline-end","border-start","border-end","margin-start","margin-end","padding-start","padding-end"];var aX=Ow;let oX=U;class kw extends oX{check(B){return!B.value.includes("flex-")&&B.value!=="baseline"}prefixed(B,t){return t+"grid-row-align"}normalize(){return"align-self"}}kw.names=["grid-row-align"];var lX=kw;let cX=U;class Ks extends cX{keyframeParents(B){let{parent:t}=B;for(;t;){if(t.type==="atrule"&&t.name==="keyframes")return!0;({parent:t}=t)}return!1}contain3d(B){if(B.prop==="transform-origin")return!1;for(let t of Ks.functions3d)if(B.value.includes(`${t}(`))return!0;return!1}set(B,t){return B=super.set(B,t),t==="-ms-"&&(B.value=B.value.replace(/rotatez/gi,"rotate")),B}insert(B,t,C){if(t==="-ms-"){if(!this.contain3d(B)&&!this.keyframeParents(B))return super.insert(B,t,C)}else if(t==="-o-"){if(!this.contain3d(B))return super.insert(B,t,C)}else return super.insert(B,t,C)}}Ks.names=["transform","transform-origin"];Ks.functions3d=["matrix3d","translate3d","translateZ","scale3d","scaleZ","rotate3d","rotateX","rotateY","perspective"];var uX=Ks;let rg=Oe,fX=U;class Tw extends fX{normalize(){return"flex-direction"}insert(B,t,C){let n;if([n,t]=rg(t),n!==2009)return super.insert(B,t,C);if(B.parent.some(l=>l.prop===t+"box-orient"||l.prop===t+"box-direction"))return;let i=B.value,s,a;i==="inherit"||i==="initial"||i==="unset"?(s=i,a=i):(s=i.includes("row")?"horizontal":"vertical",a=i.includes("reverse")?"reverse":"normal");let o=this.clone(B);return o.prop=t+"box-orient",o.value=s,this.needCascade(B)&&(o.raws.before=this.calcBefore(C,B,t)),B.parent.insertBefore(B,o),o=this.clone(B),o.prop=t+"box-direction",o.value=a,this.needCascade(B)&&(o.raws.before=this.calcBefore(C,B,t)),B.parent.insertBefore(B,o)}old(B,t){let C;return[C,t]=rg(t),C===2009?[t+"box-orient",t+"box-direction"]:super.old(B,t)}}Tw.names=["flex-direction","box-direction","box-orient"];var dX=Tw;let hX=U;class Mw extends hX{check(B){return B.value==="pixelated"}prefixed(B,t){return t==="-ms-"?"-ms-interpolation-mode":super.prefixed(B,t)}set(B,t){return t!=="-ms-"?super.set(B,t):(B.prop="-ms-interpolation-mode",B.value="nearest-neighbor",B)}normalize(){return"image-rendering"}process(B,t){return super.process(B,t)}}Mw.names=["image-rendering","interpolation-mode"];var pX=Mw;let mX=U,gX=gB;class Lw extends mX{constructor(B,t,C){super(B,t,C),this.prefixes&&(this.prefixes=gX.uniq(this.prefixes.map(n=>n==="-ms-"?"-webkit-":n)))}}Lw.names=["backdrop-filter"];var vX=Lw;let AX=U,yX=gB;class xw extends AX{constructor(B,t,C){super(B,t,C),this.prefixes&&(this.prefixes=yX.uniq(this.prefixes.map(n=>n==="-ms-"?"-webkit-":n)))}check(B){return B.value.toLowerCase()==="text"}}xw.names=["background-clip"];var EX=xw;let SX=U;const IX=["none","underline","overline","line-through","blink","inherit","initial","unset"];class Hw extends SX{check(B){return B.value.split(/\s+/).some(t=>!IX.includes(t))}}Hw.names=["text-decoration"];var bX=Hw;let ig=Oe,wX=U;class Us extends wX{prefixed(B,t){let C;return[C,t]=ig(t),C===2009?t+"box-pack":C===2012?t+"flex-pack":super.prefixed(B,t)}normalize(){return"justify-content"}set(B,t){let C=ig(t)[0];if(C===2009||C===2012){let n=Us.oldValues[B.value]||B.value;if(B.value=n,C!==2009||n!=="distribute")return super.set(B,t)}else if(C==="final")return super.set(B,t)}}Us.names=["justify-content","flex-pack","box-pack"];Us.oldValues={"flex-end":"end","flex-start":"start","space-between":"justify","space-around":"distribute"};var DX=Us;let PX=U;class Gw extends PX{set(B,t){let C=B.value.toLowerCase();return t==="-webkit-"&&!C.includes(" ")&&C!=="contain"&&C!=="cover"&&(B.value=B.value+" "+B.value),super.set(B,t)}}Gw.names=["background-size"];var RX=Gw;let NX=U,ku=wB;class Kw extends NX{insert(B,t,C){if(t!=="-ms-")return super.insert(B,t,C);let n=ku.parse(B),[r,i]=ku.translate(n,0,1);n[0]&&n[0].includes("span")&&(i=n[0].join("").replace(/\D/g,"")),[[B.prop,r],[`${B.prop}-span`,i]].forEach(([a,o])=>{ku.insertDecl(B,a,o)})}}Kw.names=["grid-row","grid-column"];var FX=Kw;let OX=U,{prefixTrackProp:sg,prefixTrackValue:kX,autoplaceGridItems:TX,getGridGap:MX,inheritGridGap:LX}=wB,xX=k7;class Uw extends OX{prefixed(B,t){return t==="-ms-"?sg({prop:B,prefix:t}):super.prefixed(B,t)}normalize(B){return B.replace(/^grid-(rows|columns)/,"grid-template-$1")}insert(B,t,C,n){if(t!=="-ms-")return super.insert(B,t,C);let{parent:r,prop:i,value:s}=B,a=i.includes("rows"),o=i.includes("columns"),l=r.some(h=>h.prop==="grid-template"||h.prop==="grid-template-areas");if(l&&a)return!1;let c=new xX({options:{}}),u=c.gridStatus(r,n),g=MX(B);g=LX(B,g)||g;let f=a?g.row:g.column;(u==="no-autoplace"||u===!0)&&!l&&(f=null);let m=kX({value:s,gap:f});B.cloneBefore({prop:sg({prop:i,prefix:t}),value:m});let p=r.nodes.find(h=>h.prop==="grid-auto-flow"),d="row";if(p&&!c.disabled(p,n)&&(d=p.value.trim()),u==="autoplace"){let h=r.nodes.find(A=>A.prop==="grid-template-rows");if(!h&&l)return;if(!h&&!l){B.warn(n,"Autoplacement does not work without grid-template-rows property");return}!r.nodes.find(A=>A.prop==="grid-template-columns")&&!l&&B.warn(n,"Autoplacement does not work without grid-template-columns property"),o&&!l&&TX(B,n,g,d)}}}Uw.names=["grid-template-rows","grid-template-columns","grid-rows","grid-columns"];var HX=Uw;let GX=U;class Qw extends GX{check(B){return!B.value.includes("flex-")&&B.value!=="baseline"}prefixed(B,t){return t+"grid-column-align"}normalize(){return"justify-self"}}Qw.names=["grid-column-align"];var KX=Qw;let UX=U;class Jw extends UX{prefixed(B,t){return t==="-moz-"?"color-adjust":t+"print-color-adjust"}normalize(){return"print-color-adjust"}}Jw.names=["print-color-adjust","color-adjust"];var QX=Jw;let JX=U;class Vw extends JX{prefixed(B,t){return t+"scroll-chaining"}normalize(){return"overscroll-behavior"}set(B,t){return B.value==="auto"?B.value="chained":(B.value==="none"||B.value==="contain")&&(B.value="none"),super.set(B,t)}}Vw.names=["overscroll-behavior","scroll-chaining"];var VX=Vw;let WX=U,{parseGridAreas:jX,warnMissedAreas:YX,prefixTrackProp:XX,prefixTrackValue:ag,getGridGap:ZX,warnGridGap:qX,inheritGridGap:zX}=wB;function _X(e){return e.trim().slice(1,-1).split(/["']\s*["']?/g)}class Ww extends WX{insert(B,t,C,n){if(t!=="-ms-")return super.insert(B,t,C);let r=!1,i=!1,s=B.parent,a=ZX(B);a=zX(B,a)||a,s.walkDecls(/-ms-grid-rows/,c=>c.remove()),s.walkDecls(/grid-template-(rows|columns)/,c=>{if(c.prop==="grid-template-rows"){i=!0;let{prop:u,value:g}=c;c.cloneBefore({prop:XX({prop:u,prefix:t}),value:ag({value:g,gap:a.row})})}else r=!0});let o=_X(B.value);r&&!i&&a.row&&o.length>1&&B.cloneBefore({prop:"-ms-grid-rows",value:ag({value:`repeat(${o.length}, auto)`,gap:a.row}),raws:{}}),qX({gap:a,hasColumns:r,decl:B,result:n});let l=jX({rows:o,gap:a});return YX(l,B,n),B}}Ww.names=["grid-template-areas"];var $X=Ww;let BZ=U;class jw extends BZ{set(B,t){return t==="-webkit-"&&(B.value=B.value.replace(/\s*(right|left)\s*/i,"")),super.set(B,t)}}jw.names=["text-emphasis-position"];var eZ=jw;let tZ=U;class Yw extends tZ{set(B,t){return B.prop==="text-decoration-skip-ink"&&B.value==="auto"?(B.prop=t+"text-decoration-skip",B.value="ink",B):super.set(B,t)}}Yw.names=["text-decoration-skip-ink","text-decoration-skip"];var CZ=Yw,nZ={wrap:Xw,limit:Zw,validate:qw,test:r2,curry:rZ,name:zw};function Xw(e,B,t){var C=B-e;return((t-e)%C+C)%C+e}function Zw(e,B,t){return Math.max(e,Math.min(B,t))}function qw(e,B,t,C,n){if(!r2(e,B,t,C,n))throw new Error(t+" is outside of range ["+e+","+B+")");return t}function r2(e,B,t,C,n){return!(t<e||t>B||n&&t===B||C&&t===e)}function zw(e,B,t,C){return(t?"(":"[")+e+","+B+(C?")":"]")}function rZ(e,B,t,C){var n=zw.bind(null,e,B,t,C);return{wrap:Xw.bind(null,e,B),limit:Zw.bind(null,e,B),validate:function(r){return qw(e,B,r,t,C)},test:function(r){return r2(e,B,r,t,C)},toString:n,name:n}}let Tu=t2,iZ=nZ,sZ=Ms,aZ=Et,oZ=gB,og=/top|left|right|bottom/gi;class IC extends aZ{replace(B,t){let C=Tu(B);for(let n of C.nodes){let r=this.name;if(n.type==="function"&&n.value===r)if(n.nodes=this.newDirection(n.nodes),n.nodes=this.normalize(n.nodes,r),t==="-webkit- old"){if(!this.oldWebkit(n))return!1}else n.nodes=this.convertDirection(n.nodes),n.value=t+n.value}return C.toString()}replaceFirst(B,...t){return t.map(n=>n===" "?{type:"space",value:n}:{type:"word",value:n}).concat(B.slice(1))}normalizeUnit(B,t){return`${parseFloat(B)/t*360}deg`}normalize(B,t){if(!B[0])return B;if(/-?\d+(.\d+)?grad/.test(B[0].value))B[0].value=this.normalizeUnit(B[0].value,400);else if(/-?\d+(.\d+)?rad/.test(B[0].value))B[0].value=this.normalizeUnit(B[0].value,2*Math.PI);else if(/-?\d+(.\d+)?turn/.test(B[0].value))B[0].value=this.normalizeUnit(B[0].value,1);else if(B[0].value.includes("deg")){let C=parseFloat(B[0].value);C=iZ.wrap(0,360,C),B[0].value=`${C}deg`}if(t==="linear-gradient"||t==="repeating-linear-gradient"){let C=B[0].value;C==="0deg"||C==="0"?B=this.replaceFirst(B,"to"," ","top"):C==="90deg"?B=this.replaceFirst(B,"to"," ","right"):C==="180deg"?B=this.replaceFirst(B,"to"," ","bottom"):C==="270deg"&&(B=this.replaceFirst(B,"to"," ","left"))}return B}newDirection(B){if(B[0].value==="to"||(og.lastIndex=0,!og.test(B[0].value)))return B;B.unshift({type:"word",value:"to"},{type:"space",value:" "});for(let t=2;t<B.length&&B[t].type!=="div";t++)B[t].type==="word"&&(B[t].value=this.revertDirection(B[t].value));return B}isRadial(B){let t="before";for(let C of B)if(t==="before"&&C.type==="space")t="at";else if(t==="at"&&C.value==="at")t="after";else{if(t==="after"&&C.type==="space")return!0;if(C.type==="div")break;t="before"}return!1}convertDirection(B){return B.length>0&&(B[0].value==="to"?this.fixDirection(B):B[0].value.includes("deg")?this.fixAngle(B):this.isRadial(B)&&this.fixRadial(B)),B}fixDirection(B){B.splice(0,2);for(let t of B){if(t.type==="div")break;t.type==="word"&&(t.value=this.revertDirection(t.value))}}fixAngle(B){let t=B[0].value;t=parseFloat(t),t=Math.abs(450-t)%360,t=this.roundFloat(t,3),B[0].value=`${t}deg`}fixRadial(B){let t=[],C=[],n,r,i,s,a;for(s=0;s<B.length-2;s++)if(n=B[s],r=B[s+1],i=B[s+2],n.type==="space"&&r.value==="at"&&i.type==="space"){a=s+3;break}else t.push(n);let o;for(s=a;s<B.length;s++)if(B[s].type==="div"){o=B[s];break}else C.push(B[s]);B.splice(0,s,...C,o,...t)}revertDirection(B){return IC.directions[B.toLowerCase()]||B}roundFloat(B,t){return parseFloat(B.toFixed(t))}oldWebkit(B){let{nodes:t}=B,C=Tu.stringify(B.nodes);if(this.name!=="linear-gradient"||t[0]&&t[0].value.includes("deg")||C.includes("px")||C.includes("-corner")||C.includes("-side"))return!1;let n=[[]];for(let r of t)n[n.length-1].push(r),r.type==="div"&&r.value===","&&n.push([]);this.oldDirection(n),this.colorStops(n),B.nodes=[];for(let r of n)B.nodes=B.nodes.concat(r);return B.nodes.unshift({type:"word",value:"linear"},this.cloneDiv(B.nodes)),B.value="-webkit-gradient",!0}oldDirection(B){let t=this.cloneDiv(B[0]);if(B[0][0].value!=="to")return B.unshift([{type:"word",value:IC.oldDirections.bottom},t]);{let C=[];for(let r of B[0].slice(2))r.type==="word"&&C.push(r.value.toLowerCase());C=C.join(" ");let n=IC.oldDirections[C]||C;return B[0]=[{type:"word",value:n},t],B[0]}}cloneDiv(B){for(let t of B)if(t.type==="div"&&t.value===",")return t;return{type:"div",value:",",after:" "}}colorStops(B){let t=[];for(let C=0;C<B.length;C++){let n,r=B[C],i;if(C===0)continue;let s=Tu.stringify(r[0]);r[1]&&r[1].type==="word"?n=r[1].value:r[2]&&r[2].type==="word"&&(n=r[2].value);let a;C===1&&(!n||n==="0%")?a=`from(${s})`:C===B.length-1&&(!n||n==="100%")?a=`to(${s})`:n?a=`color-stop(${n}, ${s})`:a=`color-stop(${s})`;let o=r[r.length-1];B[C]=[{type:"word",value:a}],o.type==="div"&&o.value===","&&(i=B[C].push(o)),t.push(i)}return t}old(B){if(B==="-webkit-"){let t;this.name==="linear-gradient"?t="linear":this.name==="repeating-linear-gradient"?t="repeating-linear":this.name==="repeating-radial-gradient"?t="repeating-radial":t="radial";let C="-gradient",n=oZ.regexp(`-webkit-(${t}-gradient|gradient\\(\\s*${t})`,!1);return new sZ(this.name,B+this.name,C,n)}else return super.old(B)}add(B,t){let C=B.prop;if(C.includes("mask")){if(t==="-webkit-"||t==="-webkit- old")return super.add(B,t)}else if(C==="list-style"||C==="list-style-image"||C==="content"){if(t==="-webkit-"||t==="-webkit- old")return super.add(B,t)}else return super.add(B,t)}}IC.names=["linear-gradient","repeating-linear-gradient","radial-gradient","repeating-radial-gradient"];IC.directions={top:"bottom",left:"right",bottom:"top",right:"left"};IC.oldDirections={top:"left bottom, left top",left:"right top, left top",bottom:"left top, left bottom",right:"left top, right top","top right":"left bottom, right top","top left":"right bottom, left top","right top":"left bottom, right top","right bottom":"left top, right bottom","bottom right":"left top, right bottom","bottom left":"right top, left bottom","left top":"right bottom, left top","left bottom":"right top, left bottom"};var lZ=IC;let cZ=Ms,uZ=Et;function lg(e){return new RegExp(`(^|[\\s,(])(${e}($|[\\s),]))`,"gi")}class _w extends uZ{regexp(){return this.regexpCache||(this.regexpCache=lg(this.name)),this.regexpCache}isStretch(){return this.name==="stretch"||this.name==="fill"||this.name==="fill-available"}replace(B,t){return t==="-moz-"&&this.isStretch()?B.replace(this.regexp(),"$1-moz-available$3"):t==="-webkit-"&&this.isStretch()?B.replace(this.regexp(),"$1-webkit-fill-available$3"):super.replace(B,t)}old(B){let t=B+this.name;return this.isStretch()&&(B==="-moz-"?t="-moz-available":B==="-webkit-"&&(t="-webkit-fill-available")),new cZ(this.name,t,t,lg(t))}add(B,t){if(!(B.prop.includes("grid")&&t!=="-webkit-"))return super.add(B,t)}}_w.names=["max-content","min-content","fit-content","fill","fill-available","stretch"];var fZ=_w;let cg=Ms,dZ=Et;class $w extends dZ{replace(B,t){return t==="-webkit-"?B.replace(this.regexp(),"$1-webkit-optimize-contrast"):t==="-moz-"?B.replace(this.regexp(),"$1-moz-crisp-edges"):super.replace(B,t)}old(B){return B==="-webkit-"?new cg(this.name,"-webkit-optimize-contrast"):B==="-moz-"?new cg(this.name,"-moz-crisp-edges"):super.old(B)}}$w.names=["pixelated"];var hZ=$w;let pZ=Et;class BD extends pZ{replace(B,t){let C=super.replace(B,t);return t==="-webkit-"&&(C=C.replace(/("[^"]+"|'[^']+')(\s+\d+\w)/gi,"url($1)$2")),C}}BD.names=["image-set"];var mZ=BD;let gZ=Ts.list,vZ=Et;class eD extends vZ{replace(B,t){return gZ.space(B).map(C=>{if(C.slice(0,+this.name.length+1)!==this.name+"(")return C;let n=C.lastIndexOf(")"),r=C.slice(n+1),i=C.slice(this.name.length+1,n);if(t==="-webkit-"){let s=i.match(/\d*.?\d+%?/);s?(i=i.slice(s[0].length).trim(),i+=`, ${s[0]}`):i+=", 0.5"}return t+this.name+"("+i+")"+r}).join(" ")}}eD.names=["cross-fade"];var AZ=eD;let yZ=Oe,EZ=Ms,SZ=Et;class tD extends SZ{constructor(B,t){super(B,t),B==="display-flex"&&(this.name="flex")}check(B){return B.prop==="display"&&B.value===this.name}prefixed(B){let t,C;return[t,B]=yZ(B),t===2009?this.name==="flex"?C="box":C="inline-box":t===2012?this.name==="flex"?C="flexbox":C="inline-flexbox":t==="final"&&(C=this.name),B+C}replace(B,t){return this.prefixed(t)}old(B){let t=this.prefixed(B);if(t)return new EZ(this.name,t)}}tD.names=["display-flex","inline-flex"];var IZ=tD;let bZ=Et;class CD extends bZ{constructor(B,t){super(B,t),B==="display-grid"&&(this.name="grid")}check(B){return B.prop==="display"&&B.value===this.name}}CD.names=["display-grid","inline-grid"];var wZ=CD;let DZ=Et;class nD extends DZ{constructor(B,t){super(B,t),B==="filter-function"&&(this.name="filter")}}nD.names=["filter","filter-function"];var PZ=nD;let RZ=Mr,NZ=gB;class rD extends RZ{constructor(B,t,C){super(B,t,C),this.prefixes&&(this.prefixes=NZ.uniq(this.prefixes.map(()=>"-webkit-")))}prefixed(B){return B==="-webkit-"?":-webkit-autofill":`:${B}autofill`}}rD.names=[":autofill"];var FZ=rD;let J=U,Qs=Mr,xC=Et,OZ=W7,kZ=Y7,TZ=Z7,MZ=_7,LZ=BY,xZ=tY,HZ=nY,GZ=sY,KZ=oY,UZ=uY,QZ=hY,JZ=gY,VZ=AY,WZ=EY,jZ=IY,YZ=wY,XZ=RY,ZZ=FY,qZ=kY,zZ=MY,_Z=xY,$Z=GY,Bq=UY,eq=JY,tq=WY,Cq=YY,nq=ZY,rq=zY,iq=$Y,sq=iX,aq=aX,oq=lX,lq=uX,cq=dX,uq=pX,fq=vX,dq=EX,hq=bX,pq=DX,mq=RX,gq=FX,vq=HX,Aq=KX,yq=QX,Eq=VX,Sq=$X,Iq=eZ,bq=CZ,wq=lZ,Dq=fZ,Pq=hZ,Rq=mZ,Nq=AZ,Fq=IZ,Oq=wZ,kq=PZ,Tq=FZ;Qs.hack(Tq);Qs.hack(OZ);Qs.hack(kZ);Qs.hack(TZ);Qs.hack(MZ);J.hack(LZ);J.hack(xZ);J.hack(HZ);J.hack(GZ);J.hack(KZ);J.hack(UZ);J.hack(QZ);J.hack(JZ);J.hack(VZ);J.hack(WZ);J.hack(jZ);J.hack(YZ);J.hack(XZ);J.hack(ZZ);J.hack(qZ);J.hack(zZ);J.hack(_Z);J.hack($Z);J.hack(Bq);J.hack(eq);J.hack(tq);J.hack(Cq);J.hack(nq);J.hack(rq);J.hack(iq);J.hack(sq);J.hack(aq);J.hack(oq);J.hack(lq);J.hack(cq);J.hack(uq);J.hack(fq);J.hack(dq);J.hack(hq);J.hack(pq);J.hack(mq);J.hack(gq);J.hack(vq);J.hack(Aq);J.hack(Eq);J.hack(Sq);J.hack(yq);J.hack(Iq);J.hack(bq);xC.hack(wq);xC.hack(Dq);xC.hack(Pq);xC.hack(Rq);xC.hack(Nq);xC.hack(Fq);xC.hack(Oq);xC.hack(kq);let Mq=In.feature;function iD(e,B){return e=e.split(" "),B=B.split(" "),e[0]>B[0]?1:e[0]<B[0]?-1:Math.sign(parseFloat(e[1])-parseFloat(B[1]))}function O(e,B,t){e=Mq(e),t||([t,B]=[B,{}]);let C=B.match||/\sx($|\s)/,n=[];for(let r in e.stats){let i=e.stats[r];for(let s in i)i[s].match(C)&&n.push(r+" "+s)}t(n.sort(iD))}let Od={};function N(e,B){for(let t of e)Od[t]=Object.assign({},B)}function so(e,B){for(let t of e)Od[t].browsers=Od[t].browsers.concat(B.browsers).sort(iD)}let Lq=lI;O(Lq,e=>N(["border-radius","border-top-left-radius","border-top-right-radius","border-bottom-right-radius","border-bottom-left-radius"],{mistakes:["-khtml-","-ms-","-o-"],feature:"border-radius",browsers:e}));let xq=gI;O(xq,e=>N(["box-shadow"],{mistakes:["-khtml-"],feature:"css-boxshadow",browsers:e}));let Hq=uI;O(Hq,e=>N(["animation","animation-name","animation-duration","animation-delay","animation-direction","animation-fill-mode","animation-iteration-count","animation-play-state","animation-timing-function","@keyframes"],{mistakes:["-khtml-","-ms-"],feature:"css-animation",browsers:e}));let Gq=XI;O(Gq,e=>N(["transition","transition-property","transition-duration","transition-delay","transition-timing-function"],{mistakes:["-khtml-","-ms-"],browsers:e,feature:"css-transitions"}));let Kq=Ab;O(Kq,e=>N(["transform","transform-origin"],{feature:"transforms2d",browsers:e}));let sD=yb;O(sD,e=>(N(["perspective","perspective-origin"],{feature:"transforms3d",browsers:e}),N(["transform-style"],{mistakes:["-ms-","-o-"],browsers:e,feature:"transforms3d"})));O(sD,{match:/y\sx|y\s#2/},e=>N(["backface-visibility"],{mistakes:["-ms-","-o-"],feature:"transforms3d",browsers:e}));let aD=PI;O(aD,{match:/y\sx/},e=>N(["linear-gradient","repeating-linear-gradient","radial-gradient","repeating-radial-gradient"],{props:["background","background-image","border-image","mask","list-style","list-style-image","content","mask-image"],mistakes:["-ms-"],feature:"css-gradients",browsers:e}));O(aD,{match:/a\sx/},e=>(e=e.map(B=>/firefox|op/.test(B)?B:`${B} old`),so(["linear-gradient","repeating-linear-gradient","radial-gradient","repeating-radial-gradient"],{feature:"css-gradients",browsers:e})));let Uq=zI;O(Uq,e=>N(["box-sizing"],{feature:"css3-boxsizing",browsers:e}));let Qq=DI;O(Qq,e=>N(["filter"],{feature:"css-filters",browsers:e}));let Jq=wI;O(Jq,e=>N(["filter-function"],{props:["background","background-image","border-image","mask","list-style","list-style-image","content","mask-image"],feature:"css-filter-function",browsers:e}));let Vq=pI;O(Vq,{match:/y\sx|y\s#2/},e=>N(["backdrop-filter"],{feature:"css-backdrop-filter",browsers:e}));let Wq=SI;O(Wq,e=>N(["element"],{props:["background","background-image","border-image","mask","list-style","list-style-image","content","mask-image"],feature:"css-element-function",browsers:e}));let jq=fb;O(jq,e=>{N(["columns","column-width","column-gap","column-rule","column-rule-color","column-rule-width","column-count","column-rule-style","column-span","column-fill"],{feature:"multicolumn",browsers:e});let B=e.filter(t=>!/firefox/.test(t));N(["break-before","break-after","break-inside"],{feature:"multicolumn",browsers:B})});let Yq=Eb;O(Yq,e=>N(["user-select"],{mistakes:["-khtml-"],feature:"user-select-none",browsers:e}));let oD=eb;O(oD,{match:/a\sx/},e=>{e=e.map(B=>/ie|firefox/.test(B)?B:`${B} 2009`),N(["display-flex","inline-flex"],{props:["display"],feature:"flexbox",browsers:e}),N(["flex","flex-grow","flex-shrink","flex-basis"],{feature:"flexbox",browsers:e}),N(["flex-direction","flex-wrap","flex-flow","justify-content","order","align-items","align-self","align-content"],{feature:"flexbox",browsers:e})});O(oD,{match:/y\sx/},e=>{so(["display-flex","inline-flex"],{feature:"flexbox",browsers:e}),so(["flex","flex-grow","flex-shrink","flex-basis"],{feature:"flexbox",browsers:e}),so(["flex-direction","flex-wrap","flex-flow","justify-content","order","align-items","align-self","align-content"],{feature:"flexbox",browsers:e})});let Xq=cI;O(Xq,e=>N(["calc"],{props:["*"],feature:"calc",browsers:e}));let Zq=aI;O(Zq,e=>N(["background-origin","background-size"],{feature:"background-img-opts",browsers:e}));let qq=sI;O(qq,e=>N(["background-clip"],{feature:"background-clip-text",browsers:e}));let zq=tb;O(zq,e=>N(["font-feature-settings","font-variant-ligatures","font-language-override"],{feature:"font-feature",browsers:e}));let _q=Cb;O(_q,e=>N(["font-kerning"],{feature:"font-kerning",browsers:e}));let $q=oI;O($q,e=>N(["border-image"],{feature:"border-image",browsers:e}));let Bz=UI;O(Bz,e=>N(["::selection"],{selector:!0,feature:"css-selection",browsers:e}));let ez=xI;O(ez,e=>{N(["::placeholder"],{selector:!0,feature:"css-placeholder",browsers:e.concat(["ie 10 old","ie 11 old","firefox 18 old"])})});let tz=LI;O(tz,e=>{N([":placeholder-shown"],{selector:!0,feature:"css-placeholder-shown",browsers:e})});let Cz=NI;O(Cz,e=>N(["hyphens"],{feature:"css-hyphens",browsers:e}));let lD=nb;O(lD,e=>N([":fullscreen"],{selector:!0,feature:"fullscreen",browsers:e}));O(lD,{match:/x(\s#2|$)/},e=>N(["::backdrop"],{selector:!0,feature:"fullscreen",browsers:e}));let nz=bI;O(nz,e=>N(["::file-selector-button"],{selector:!0,feature:"file-selector-button",browsers:e}));let rz=hI;O(rz,e=>N([":autofill"],{selector:!0,feature:"css-autofill",browsers:e}));let iz=Bb;O(iz,e=>N(["tab-size"],{feature:"css3-tabsize",browsers:e}));let i2=rb,fc=["width","min-width","max-width","height","min-height","max-height","inline-size","min-inline-size","max-inline-size","block-size","min-block-size","max-block-size","grid","grid-template","grid-template-rows","grid-template-columns","grid-auto-columns","grid-auto-rows"];O(i2,e=>N(["max-content","min-content"],{props:fc,feature:"intrinsic-width",browsers:e}));O(i2,{match:/x|\s#4/},e=>N(["fill","fill-available"],{props:fc,feature:"intrinsic-width",browsers:e}));O(i2,{match:/x|\s#5/},e=>N(["fit-content"],{props:fc,feature:"intrinsic-width",browsers:e}));let sz=ZI;O(sz,e=>N(["stretch"],{props:fc,feature:"css-width-stretch",browsers:e}));let az=$I;O(az,e=>N(["zoom-in","zoom-out"],{props:["cursor"],feature:"css3-cursors-newer",browsers:e}));let oz=_I;O(oz,e=>N(["grab","grabbing"],{props:["cursor"],feature:"css3-cursors-grab",browsers:e}));let lz=VI;O(lz,e=>N(["sticky"],{props:["position"],feature:"css-sticky",browsers:e}));let cz=hb;O(cz,e=>N(["touch-action"],{feature:"pointer",browsers:e}));let uz=pb;O(uz,{match:/x.*#[235]/},e=>N(["text-decoration-skip","text-decoration-skip-ink"],{feature:"text-decoration",browsers:e}));let fz=cb;O(fz,e=>N(["text-decoration"],{feature:"text-decoration",browsers:e}));let dz=ob;O(dz,e=>N(["text-decoration-color"],{feature:"text-decoration",browsers:e}));let hz=lb;O(hz,e=>N(["text-decoration-line"],{feature:"text-decoration",browsers:e}));let pz=ub;O(pz,e=>N(["text-decoration-style"],{feature:"text-decoration",browsers:e}));let mz=vb;O(mz,e=>N(["text-size-adjust"],{feature:"text-size-adjust",browsers:e}));let gz=kI;O(gz,e=>{N(["mask-clip","mask-composite","mask-image","mask-origin","mask-repeat","mask-border-repeat","mask-border-source"],{feature:"css-masks",browsers:e}),N(["mask","mask-position","mask-size","mask-border","mask-border-outset","mask-border-width","mask-border-slice"],{feature:"css-masks",browsers:e})});let vz=vI;O(vz,e=>N(["clip-path"],{feature:"css-clip-path",browsers:e}));let Az=mI;O(Az,e=>N(["box-decoration-break"],{feature:"css-boxdecorationbreak",browsers:e}));let yz=db;O(yz,e=>N(["object-fit","object-position"],{feature:"object-fit",browsers:e}));let Ez=QI;O(Ez,e=>N(["shape-margin","shape-outside","shape-image-threshold"],{feature:"css-shapes",browsers:e}));let Sz=gb;O(Sz,e=>N(["text-overflow"],{feature:"text-overflow",browsers:e}));let Iz=EI;O(Iz,e=>N(["@viewport"],{feature:"css-deviceadaptation",browsers:e}));let bz=TI;O(bz,{match:/( x($| )|a #2)/},e=>N(["@resolution"],{feature:"css-media-resolution",browsers:e}));let wz=WI;O(wz,e=>N(["text-align-last"],{feature:"css-text-align-last",browsers:e}));let cD=AI;O(cD,{match:/y x|a x #1/},e=>N(["pixelated"],{props:["image-rendering"],feature:"css-crisp-edges",browsers:e}));O(cD,{match:/a x #2/},e=>N(["image-rendering"],{feature:"css-crisp-edges",browsers:e}));let uD=OI;O(uD,e=>N(["border-inline-start","border-inline-end","margin-inline-start","margin-inline-end","padding-inline-start","padding-inline-end"],{feature:"css-logical-props",browsers:e}));O(uD,{match:/x\s#2/},e=>N(["border-block-start","border-block-end","margin-block-start","margin-block-end","padding-block-start","padding-block-end"],{feature:"css-logical-props",browsers:e}));let Dz=dI;O(Dz,{match:/#2|x/},e=>N(["appearance"],{feature:"css-appearance",browsers:e}));let Pz=JI;O(Pz,e=>N(["scroll-snap-type","scroll-snap-coordinate","scroll-snap-destination","scroll-snap-points-x","scroll-snap-points-y"],{feature:"css-snappoints",browsers:e}));let Rz=KI;O(Rz,e=>N(["flow-into","flow-from","region-fragment"],{feature:"css-regions",browsers:e}));let Nz=FI;O(Nz,e=>N(["image-set"],{props:["background","background-image","border-image","cursor","mask","mask-image","list-style","list-style-image","content"],feature:"css-image-set",browsers:e}));let Fz=qI;O(Fz,{match:/a|x/},e=>N(["writing-mode"],{feature:"css-writing-mode",browsers:e}));let Oz=yI;O(Oz,e=>N(["cross-fade"],{props:["background","background-image","border-image","mask","list-style","list-style-image","content","mask-image"],feature:"css-cross-fade",browsers:e}));let kz=GI;O(kz,e=>N([":read-only",":read-write"],{selector:!0,feature:"css-read-only-write",browsers:e}));let Tz=mb;O(Tz,e=>N(["text-emphasis","text-emphasis-position","text-emphasis-style","text-emphasis-color"],{feature:"text-emphasis",browsers:e}));let fD=RI;O(fD,e=>{N(["display-grid","inline-grid"],{props:["display"],feature:"css-grid",browsers:e}),N(["grid-template-columns","grid-template-rows","grid-row-start","grid-column-start","grid-row-end","grid-column-end","grid-row","grid-column","grid-area","grid-template","grid-template-areas","place-self"],{feature:"css-grid",browsers:e})});O(fD,{match:/a x/},e=>N(["grid-column-align","grid-row-align"],{feature:"css-grid",browsers:e}));let Mz=YI;O(Mz,e=>N(["text-spacing"],{feature:"css-text-spacing",browsers:e}));let Lz=fI;O(Lz,e=>N([":any-link"],{selector:!0,feature:"css-any-link",browsers:e}));let xz=sb;O(xz,e=>N(["isolate"],{props:["unicode-bidi"],feature:"css-unicode-bidi",browsers:e}));let Hz=ab;O(Hz,e=>N(["plaintext"],{props:["unicode-bidi"],feature:"css-unicode-bidi",browsers:e}));let Gz=ib;O(Gz,{match:/y x/},e=>N(["isolate-override"],{props:["unicode-bidi"],feature:"css-unicode-bidi",browsers:e}));let Kz=MI;O(Kz,{match:/a #1/},e=>N(["overscroll-behavior"],{feature:"css-overscroll-behavior",browsers:e}));let Uz=jI;O(Uz,e=>N(["text-orientation"],{feature:"css-text-orientation",browsers:e}));let Qz=HI;O(Qz,e=>N(["print-color-adjust","color-adjust"],{feature:"css-print-color-adjust",browsers:e}));let Jz=nI;Jz.defaults;function ug(e,B){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(e);B&&(C=C.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,C)}return t}function k(e){for(var B=1;B<arguments.length;B++){var t=arguments[B]!=null?arguments[B]:{};B%2?ug(Object(t),!0).forEach(function(C){LB(e,C,t[C])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ug(Object(t)).forEach(function(C){Object.defineProperty(e,C,Object.getOwnPropertyDescriptor(t,C))})}return e}function ml(e){return ml=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(B){return typeof B}:function(B){return B&&typeof Symbol=="function"&&B.constructor===Symbol&&B!==Symbol.prototype?"symbol":typeof B},ml(e)}function Vz(e,B){if(!(e instanceof B))throw new TypeError("Cannot call a class as a function")}function fg(e,B){for(var t=0;t<B.length;t++){var C=B[t];C.enumerable=C.enumerable||!1,C.configurable=!0,"value"in C&&(C.writable=!0),Object.defineProperty(e,C.key,C)}}function Wz(e,B,t){return B&&fg(e.prototype,B),t&&fg(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function LB(e,B,t){return B in e?Object.defineProperty(e,B,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[B]=t,e}function s2(e,B){return Yz(e)||Zz(e,B)||dD(e,B)||zz()}function Js(e){return jz(e)||Xz(e)||dD(e)||qz()}function jz(e){if(Array.isArray(e))return kd(e)}function Yz(e){if(Array.isArray(e))return e}function Xz(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Zz(e,B){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var C=[],n=!0,r=!1,i,s;try{for(t=t.call(e);!(n=(i=t.next()).done)&&(C.push(i.value),!(B&&C.length===B));n=!0);}catch(a){r=!0,s=a}finally{try{!n&&t.return!=null&&t.return()}finally{if(r)throw s}}return C}}function dD(e,B){if(e){if(typeof e=="string")return kd(e,B);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return kd(e,B)}}function kd(e,B){(B==null||B>e.length)&&(B=e.length);for(var t=0,C=new Array(B);t<B;t++)C[t]=e[t];return C}function qz(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zz(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var dg=function(){},a2={},hD={},pD=null,mD={mark:dg,measure:dg};try{typeof window<"u"&&(a2=window),typeof document<"u"&&(hD=document),typeof MutationObserver<"u"&&(pD=MutationObserver),typeof performance<"u"&&(mD=performance)}catch{}var _z=a2.navigator||{},hg=_z.userAgent,pg=hg===void 0?"":hg,FC=a2,pB=hD,mg=pD,ka=mD;FC.document;var jt=!!pB.documentElement&&!!pB.head&&typeof pB.addEventListener=="function"&&typeof pB.createElement=="function",gD=~pg.indexOf("MSIE")||~pg.indexOf("Trident/"),Ta,Ma,La,xa,Ha,Kt="___FONT_AWESOME___",Td=16,vD="fa",AD="svg-inline--fa",pn="data-fa-i2svg",Md="data-fa-pseudo-element",$z="data-fa-pseudo-element-pending",o2="data-prefix",l2="data-icon",gg="fontawesome-i2svg",B9="async",e9=["HTML","HEAD","STYLE","SCRIPT"],yD=function(){try{return!0}catch{return!1}}(),dB="classic",IB="sharp",c2=[dB,IB];function Vs(e){return new Proxy(e,{get:function(t,C){return C in t?t[C]:t[dB]}})}var ls=Vs((Ta={},LB(Ta,dB,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),LB(Ta,IB,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Ta)),cs=Vs((Ma={},LB(Ma,dB,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),LB(Ma,IB,{solid:"fass",regular:"fasr",light:"fasl"}),Ma)),us=Vs((La={},LB(La,dB,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),LB(La,IB,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),La)),t9=Vs((xa={},LB(xa,dB,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),LB(xa,IB,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),xa)),C9=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,ED="fa-layers-text",n9=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,r9=Vs((Ha={},LB(Ha,dB,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),LB(Ha,IB,{900:"fass",400:"fasr",300:"fasl"}),Ha)),SD=[1,2,3,4,5,6,7,8,9,10],i9=SD.concat([11,12,13,14,15,16,17,18,19,20]),s9=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],qC={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},fs=new Set;Object.keys(cs[dB]).map(fs.add.bind(fs));Object.keys(cs[IB]).map(fs.add.bind(fs));var a9=[].concat(c2,Js(fs),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",qC.GROUP,qC.SWAP_OPACITY,qC.PRIMARY,qC.SECONDARY]).concat(SD.map(function(e){return"".concat(e,"x")})).concat(i9.map(function(e){return"w-".concat(e)})),Si=FC.FontAwesomeConfig||{};function o9(e){var B=pB.querySelector("script["+e+"]");if(B)return B.getAttribute(e)}function l9(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(pB&&typeof pB.querySelector=="function"){var c9=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];c9.forEach(function(e){var B=s2(e,2),t=B[0],C=B[1],n=l9(o9(t));n!=null&&(Si[C]=n)})}var ID={styleDefault:"solid",familyDefault:"classic",cssPrefix:vD,replacementClass:AD,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Si.familyPrefix&&(Si.cssPrefix=Si.familyPrefix);var Sr=k(k({},ID),Si);Sr.autoReplaceSvg||(Sr.observeMutations=!1);var L={};Object.keys(ID).forEach(function(e){Object.defineProperty(L,e,{enumerable:!0,set:function(t){Sr[e]=t,Ii.forEach(function(C){return C(L)})},get:function(){return Sr[e]}})});Object.defineProperty(L,"familyPrefix",{enumerable:!0,set:function(B){Sr.cssPrefix=B,Ii.forEach(function(t){return t(L)})},get:function(){return Sr.cssPrefix}});FC.FontAwesomeConfig=L;var Ii=[];function u9(e){return Ii.push(e),function(){Ii.splice(Ii.indexOf(e),1)}}var qt=Td,ct={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function f9(e){if(!(!e||!jt)){var B=pB.createElement("style");B.setAttribute("type","text/css"),B.innerHTML=e;for(var t=pB.head.childNodes,C=null,n=t.length-1;n>-1;n--){var r=t[n],i=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(C=r)}return pB.head.insertBefore(B,C),e}}var d9="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ds(){for(var e=12,B="";e-- >0;)B+=d9[Math.random()*62|0];return B}function Lr(e){for(var B=[],t=(e||[]).length>>>0;t--;)B[t]=e[t];return B}function u2(e){return e.classList?Lr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(B){return B})}function bD(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function h9(e){return Object.keys(e||{}).reduce(function(B,t){return B+"".concat(t,'="').concat(bD(e[t]),'" ')},"").trim()}function dc(e){return Object.keys(e||{}).reduce(function(B,t){return B+"".concat(t,": ").concat(e[t].trim(),";")},"")}function f2(e){return e.size!==ct.size||e.x!==ct.x||e.y!==ct.y||e.rotate!==ct.rotate||e.flipX||e.flipY}function p9(e){var B=e.transform,t=e.containerWidth,C=e.iconWidth,n={transform:"translate(".concat(t/2," 256)")},r="translate(".concat(B.x*32,", ").concat(B.y*32,") "),i="scale(".concat(B.size/16*(B.flipX?-1:1),", ").concat(B.size/16*(B.flipY?-1:1),") "),s="rotate(".concat(B.rotate," 0 0)"),a={transform:"".concat(r," ").concat(i," ").concat(s)},o={transform:"translate(".concat(C/2*-1," -256)")};return{outer:n,inner:a,path:o}}function m9(e){var B=e.transform,t=e.width,C=t===void 0?Td:t,n=e.height,r=n===void 0?Td:n,i=e.startCentered,s=i===void 0?!1:i,a="";return s&&gD?a+="translate(".concat(B.x/qt-C/2,"em, ").concat(B.y/qt-r/2,"em) "):s?a+="translate(calc(-50% + ".concat(B.x/qt,"em), calc(-50% + ").concat(B.y/qt,"em)) "):a+="translate(".concat(B.x/qt,"em, ").concat(B.y/qt,"em) "),a+="scale(".concat(B.size/qt*(B.flipX?-1:1),", ").concat(B.size/qt*(B.flipY?-1:1),") "),a+="rotate(".concat(B.rotate,"deg) "),a}var g9=`:root, :host {
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
}`;function wD(){var e=vD,B=AD,t=L.cssPrefix,C=L.replacementClass,n=g9;if(t!==e||C!==B){var r=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(B),"g");n=n.replace(r,".".concat(t,"-")).replace(i,"--".concat(t,"-")).replace(s,".".concat(C))}return n}var vg=!1;function Mu(){L.autoAddCss&&!vg&&(f9(wD()),vg=!0)}var v9={mixout:function(){return{dom:{css:wD,insertCss:Mu}}},hooks:function(){return{beforeDOMElementCreation:function(){Mu()},beforeI2svg:function(){Mu()}}}},Ut=FC||{};Ut[Kt]||(Ut[Kt]={});Ut[Kt].styles||(Ut[Kt].styles={});Ut[Kt].hooks||(Ut[Kt].hooks={});Ut[Kt].shims||(Ut[Kt].shims=[]);var $e=Ut[Kt],DD=[],A9=function e(){pB.removeEventListener("DOMContentLoaded",e),gl=1,DD.map(function(B){return B()})},gl=!1;jt&&(gl=(pB.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(pB.readyState),gl||pB.addEventListener("DOMContentLoaded",A9));function y9(e){jt&&(gl?setTimeout(e,0):DD.push(e))}function Ws(e){var B=e.tag,t=e.attributes,C=t===void 0?{}:t,n=e.children,r=n===void 0?[]:n;return typeof e=="string"?bD(e):"<".concat(B," ").concat(h9(C),">").concat(r.map(Ws).join(""),"</").concat(B,">")}function Ag(e,B,t){if(e&&e[B]&&e[B][t])return{prefix:B,iconName:t,icon:e[B][t]}}var E9=function(B,t){return function(C,n,r,i){return B.call(t,C,n,r,i)}},Lu=function(B,t,C,n){var r=Object.keys(B),i=r.length,s=n!==void 0?E9(t,n):t,a,o,l;for(C===void 0?(a=1,l=B[r[0]]):(a=0,l=C);a<i;a++)o=r[a],l=s(l,B[o],o,B);return l};function S9(e){for(var B=[],t=0,C=e.length;t<C;){var n=e.charCodeAt(t++);if(n>=55296&&n<=56319&&t<C){var r=e.charCodeAt(t++);(r&64512)==56320?B.push(((n&1023)<<10)+(r&1023)+65536):(B.push(n),t--)}else B.push(n)}return B}function Ld(e){var B=S9(e);return B.length===1?B[0].toString(16):null}function I9(e,B){var t=e.length,C=e.charCodeAt(B),n;return C>=55296&&C<=56319&&t>B+1&&(n=e.charCodeAt(B+1),n>=56320&&n<=57343)?(C-55296)*1024+n-56320+65536:C}function yg(e){return Object.keys(e).reduce(function(B,t){var C=e[t],n=!!C.icon;return n?B[C.iconName]=C.icon:B[t]=C,B},{})}function xd(e,B){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},C=t.skipHooks,n=C===void 0?!1:C,r=yg(B);typeof $e.hooks.addPack=="function"&&!n?$e.hooks.addPack(e,yg(B)):$e.styles[e]=k(k({},$e.styles[e]||{}),r),e==="fas"&&xd("fa",B)}var Ga,Ka,Ua,jn=$e.styles,b9=$e.shims,w9=(Ga={},LB(Ga,dB,Object.values(us[dB])),LB(Ga,IB,Object.values(us[IB])),Ga),d2=null,PD={},RD={},ND={},FD={},OD={},D9=(Ka={},LB(Ka,dB,Object.keys(ls[dB])),LB(Ka,IB,Object.keys(ls[IB])),Ka);function P9(e){return~a9.indexOf(e)}function R9(e,B){var t=B.split("-"),C=t[0],n=t.slice(1).join("-");return C===e&&n!==""&&!P9(n)?n:null}var kD=function(){var B=function(r){return Lu(jn,function(i,s,a){return i[a]=Lu(s,r,{}),i},{})};PD=B(function(n,r,i){if(r[3]&&(n[r[3]]=i),r[2]){var s=r[2].filter(function(a){return typeof a=="number"});s.forEach(function(a){n[a.toString(16)]=i})}return n}),RD=B(function(n,r,i){if(n[i]=i,r[2]){var s=r[2].filter(function(a){return typeof a=="string"});s.forEach(function(a){n[a]=i})}return n}),OD=B(function(n,r,i){var s=r[2];return n[i]=i,s.forEach(function(a){n[a]=i}),n});var t="far"in jn||L.autoFetchSvg,C=Lu(b9,function(n,r){var i=r[0],s=r[1],a=r[2];return s==="far"&&!t&&(s="fas"),typeof i=="string"&&(n.names[i]={prefix:s,iconName:a}),typeof i=="number"&&(n.unicodes[i.toString(16)]={prefix:s,iconName:a}),n},{names:{},unicodes:{}});ND=C.names,FD=C.unicodes,d2=hc(L.styleDefault,{family:L.familyDefault})};u9(function(e){d2=hc(e.styleDefault,{family:L.familyDefault})});kD();function h2(e,B){return(PD[e]||{})[B]}function N9(e,B){return(RD[e]||{})[B]}function zC(e,B){return(OD[e]||{})[B]}function TD(e){return ND[e]||{prefix:null,iconName:null}}function F9(e){var B=FD[e],t=h2("fas",e);return B||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function OC(){return d2}var p2=function(){return{prefix:null,iconName:null,rest:[]}};function hc(e){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=B.family,C=t===void 0?dB:t,n=ls[C][e],r=cs[C][e]||cs[C][n],i=e in $e.styles?e:null;return r||i||null}var Eg=(Ua={},LB(Ua,dB,Object.keys(us[dB])),LB(Ua,IB,Object.keys(us[IB])),Ua);function pc(e){var B,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},C=t.skipLookups,n=C===void 0?!1:C,r=(B={},LB(B,dB,"".concat(L.cssPrefix,"-").concat(dB)),LB(B,IB,"".concat(L.cssPrefix,"-").concat(IB)),B),i=null,s=dB;(e.includes(r[dB])||e.some(function(o){return Eg[dB].includes(o)}))&&(s=dB),(e.includes(r[IB])||e.some(function(o){return Eg[IB].includes(o)}))&&(s=IB);var a=e.reduce(function(o,l){var c=R9(L.cssPrefix,l);if(jn[l]?(l=w9[s].includes(l)?t9[s][l]:l,i=l,o.prefix=l):D9[s].indexOf(l)>-1?(i=l,o.prefix=hc(l,{family:s})):c?o.iconName=c:l!==L.replacementClass&&l!==r[dB]&&l!==r[IB]&&o.rest.push(l),!n&&o.prefix&&o.iconName){var u=i==="fa"?TD(o.iconName):{},g=zC(o.prefix,o.iconName);u.prefix&&(i=null),o.iconName=u.iconName||g||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!jn.far&&jn.fas&&!L.autoFetchSvg&&(o.prefix="fas")}return o},p2());return(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(a.prefix="fad"),!a.prefix&&s===IB&&(jn.fass||L.autoFetchSvg)&&(a.prefix="fass",a.iconName=zC(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||i==="fa")&&(a.prefix=OC()||"fas"),a}var O9=function(){function e(){Vz(this,e),this.definitions={}}return Wz(e,[{key:"add",value:function(){for(var t=this,C=arguments.length,n=new Array(C),r=0;r<C;r++)n[r]=arguments[r];var i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){t.definitions[s]=k(k({},t.definitions[s]||{}),i[s]),xd(s,i[s]);var a=us[dB][s];a&&xd(a,i[s]),kD()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,C){var n=C.prefix&&C.iconName&&C.icon?{0:C}:C;return Object.keys(n).map(function(r){var i=n[r],s=i.prefix,a=i.iconName,o=i.icon,l=o[2];t[s]||(t[s]={}),l.length>0&&l.forEach(function(c){typeof c=="string"&&(t[s][c]=o)}),t[s][a]=o}),t}}]),e}(),Sg=[],Yn={},ir={},k9=Object.keys(ir);function T9(e,B){var t=B.mixoutsTo;return Sg=e,Yn={},Object.keys(ir).forEach(function(C){k9.indexOf(C)===-1&&delete ir[C]}),Sg.forEach(function(C){var n=C.mixout?C.mixout():{};if(Object.keys(n).forEach(function(i){typeof n[i]=="function"&&(t[i]=n[i]),ml(n[i])==="object"&&Object.keys(n[i]).forEach(function(s){t[i]||(t[i]={}),t[i][s]=n[i][s]})}),C.hooks){var r=C.hooks();Object.keys(r).forEach(function(i){Yn[i]||(Yn[i]=[]),Yn[i].push(r[i])})}C.provides&&C.provides(ir)}),t}function Hd(e,B){for(var t=arguments.length,C=new Array(t>2?t-2:0),n=2;n<t;n++)C[n-2]=arguments[n];var r=Yn[e]||[];return r.forEach(function(i){B=i.apply(null,[B].concat(C))}),B}function mn(e){for(var B=arguments.length,t=new Array(B>1?B-1:0),C=1;C<B;C++)t[C-1]=arguments[C];var n=Yn[e]||[];n.forEach(function(r){r.apply(null,t)})}function Qt(){var e=arguments[0],B=Array.prototype.slice.call(arguments,1);return ir[e]?ir[e].apply(null,B):void 0}function Gd(e){e.prefix==="fa"&&(e.prefix="fas");var B=e.iconName,t=e.prefix||OC();if(B)return B=zC(t,B)||B,Ag(MD.definitions,t,B)||Ag($e.styles,t,B)}var MD=new O9,M9=function(){L.autoReplaceSvg=!1,L.observeMutations=!1,mn("noAuto")},L9={i2svg:function(){var B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return jt?(mn("beforeI2svg",B),Qt("pseudoElements2svg",B),Qt("i2svg",B)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=B.autoReplaceSvgRoot;L.autoReplaceSvg===!1&&(L.autoReplaceSvg=!0),L.observeMutations=!0,y9(function(){H9({autoReplaceSvgRoot:t}),mn("watch",B)})}},x9={icon:function(B){if(B===null)return null;if(ml(B)==="object"&&B.prefix&&B.iconName)return{prefix:B.prefix,iconName:zC(B.prefix,B.iconName)||B.iconName};if(Array.isArray(B)&&B.length===2){var t=B[1].indexOf("fa-")===0?B[1].slice(3):B[1],C=hc(B[0]);return{prefix:C,iconName:zC(C,t)||t}}if(typeof B=="string"&&(B.indexOf("".concat(L.cssPrefix,"-"))>-1||B.match(C9))){var n=pc(B.split(" "),{skipLookups:!0});return{prefix:n.prefix||OC(),iconName:zC(n.prefix,n.iconName)||n.iconName}}if(typeof B=="string"){var r=OC();return{prefix:r,iconName:zC(r,B)||B}}}},ke={noAuto:M9,config:L,dom:L9,parse:x9,library:MD,findIconDefinition:Gd,toHtml:Ws},H9=function(){var B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=B.autoReplaceSvgRoot,C=t===void 0?pB:t;(Object.keys($e.styles).length>0||L.autoFetchSvg)&&jt&&L.autoReplaceSvg&&ke.dom.i2svg({node:C})};function mc(e,B){return Object.defineProperty(e,"abstract",{get:B}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(C){return Ws(C)})}}),Object.defineProperty(e,"node",{get:function(){if(jt){var C=pB.createElement("div");return C.innerHTML=e.html,C.children}}}),e}function G9(e){var B=e.children,t=e.main,C=e.mask,n=e.attributes,r=e.styles,i=e.transform;if(f2(i)&&t.found&&!C.found){var s=t.width,a=t.height,o={x:s/a/2,y:.5};n.style=dc(k(k({},r),{},{"transform-origin":"".concat(o.x+i.x/16,"em ").concat(o.y+i.y/16,"em")}))}return[{tag:"svg",attributes:n,children:B}]}function K9(e){var B=e.prefix,t=e.iconName,C=e.children,n=e.attributes,r=e.symbol,i=r===!0?"".concat(B,"-").concat(L.cssPrefix,"-").concat(t):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:k(k({},n),{},{id:i}),children:C}]}]}function m2(e){var B=e.icons,t=B.main,C=B.mask,n=e.prefix,r=e.iconName,i=e.transform,s=e.symbol,a=e.title,o=e.maskId,l=e.titleId,c=e.extra,u=e.watchable,g=u===void 0?!1:u,f=C.found?C:t,m=f.width,p=f.height,d=n==="fak",h=[L.replacementClass,r?"".concat(L.cssPrefix,"-").concat(r):""].filter(function(b){return c.classes.indexOf(b)===-1}).filter(function(b){return b!==""||!!b}).concat(c.classes).join(" "),v={children:[],attributes:k(k({},c.attributes),{},{"data-prefix":n,"data-icon":r,class:h,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(p)})},A=d&&!~c.classes.indexOf("fa-fw")?{width:"".concat(m/p*16*.0625,"em")}:{};g&&(v.attributes[pn]=""),a&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(l||ds())},children:[a]}),delete v.attributes.title);var E=k(k({},v),{},{prefix:n,iconName:r,main:t,mask:C,maskId:o,transform:i,symbol:s,styles:k(k({},A),c.styles)}),D=C.found&&t.found?Qt("generateAbstractMask",E)||{children:[],attributes:{}}:Qt("generateAbstractIcon",E)||{children:[],attributes:{}},I=D.children,y=D.attributes;return E.children=I,E.attributes=y,s?K9(E):G9(E)}function Ig(e){var B=e.content,t=e.width,C=e.height,n=e.transform,r=e.title,i=e.extra,s=e.watchable,a=s===void 0?!1:s,o=k(k(k({},i.attributes),r?{title:r}:{}),{},{class:i.classes.join(" ")});a&&(o[pn]="");var l=k({},i.styles);f2(n)&&(l.transform=m9({transform:n,startCentered:!0,width:t,height:C}),l["-webkit-transform"]=l.transform);var c=dc(l);c.length>0&&(o.style=c);var u=[];return u.push({tag:"span",attributes:o,children:[B]}),r&&u.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),u}function U9(e){var B=e.content,t=e.title,C=e.extra,n=k(k(k({},C.attributes),t?{title:t}:{}),{},{class:C.classes.join(" ")}),r=dc(C.styles);r.length>0&&(n.style=r);var i=[];return i.push({tag:"span",attributes:n,children:[B]}),t&&i.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),i}var xu=$e.styles;function Kd(e){var B=e[0],t=e[1],C=e.slice(4),n=s2(C,1),r=n[0],i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(L.cssPrefix,"-").concat(qC.GROUP)},children:[{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(qC.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(qC.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:B,height:t,icon:i}}var Q9={found:!1,width:512,height:512};function J9(e,B){!yD&&!L.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(B,'" is missing.'))}function Ud(e,B){var t=B;return B==="fa"&&L.styleDefault!==null&&(B=OC()),new Promise(function(C,n){if(Qt("missingIconAbstract"),t==="fa"){var r=TD(e)||{};e=r.iconName||e,B=r.prefix||B}if(e&&B&&xu[B]&&xu[B][e]){var i=xu[B][e];return C(Kd(i))}J9(e,B),C(k(k({},Q9),{},{icon:L.showMissingIcons&&e?Qt("missingIconAbstract")||{}:{}}))})}var bg=function(){},Qd=L.measurePerformance&&ka&&ka.mark&&ka.measure?ka:{mark:bg,measure:bg},si='FA "6.4.0"',V9=function(B){return Qd.mark("".concat(si," ").concat(B," begins")),function(){return LD(B)}},LD=function(B){Qd.mark("".concat(si," ").concat(B," ends")),Qd.measure("".concat(si," ").concat(B),"".concat(si," ").concat(B," begins"),"".concat(si," ").concat(B," ends"))},g2={begin:V9,end:LD},ao=function(){};function wg(e){var B=e.getAttribute?e.getAttribute(pn):null;return typeof B=="string"}function W9(e){var B=e.getAttribute?e.getAttribute(o2):null,t=e.getAttribute?e.getAttribute(l2):null;return B&&t}function j9(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(L.replacementClass)}function Y9(){if(L.autoReplaceSvg===!0)return oo.replace;var e=oo[L.autoReplaceSvg];return e||oo.replace}function X9(e){return pB.createElementNS("http://www.w3.org/2000/svg",e)}function Z9(e){return pB.createElement(e)}function xD(e){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=B.ceFn,C=t===void 0?e.tag==="svg"?X9:Z9:t;if(typeof e=="string")return pB.createTextNode(e);var n=C(e.tag);Object.keys(e.attributes||[]).forEach(function(i){n.setAttribute(i,e.attributes[i])});var r=e.children||[];return r.forEach(function(i){n.appendChild(xD(i,{ceFn:C}))}),n}function q9(e){var B=" ".concat(e.outerHTML," ");return B="".concat(B,"Font Awesome fontawesome.com "),B}var oo={replace:function(B){var t=B[0];if(t.parentNode)if(B[1].forEach(function(n){t.parentNode.insertBefore(xD(n),t)}),t.getAttribute(pn)===null&&L.keepOriginalSource){var C=pB.createComment(q9(t));t.parentNode.replaceChild(C,t)}else t.remove()},nest:function(B){var t=B[0],C=B[1];if(~u2(t).indexOf(L.replacementClass))return oo.replace(B);var n=new RegExp("".concat(L.cssPrefix,"-.*"));if(delete C[0].attributes.id,C[0].attributes.class){var r=C[0].attributes.class.split(" ").reduce(function(s,a){return a===L.replacementClass||a.match(n)?s.toSvg.push(a):s.toNode.push(a),s},{toNode:[],toSvg:[]});C[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",r.toNode.join(" "))}var i=C.map(function(s){return Ws(s)}).join(`
`);t.setAttribute(pn,""),t.innerHTML=i}};function Dg(e){e()}function HD(e,B){var t=typeof B=="function"?B:ao;if(e.length===0)t();else{var C=Dg;L.mutateApproach===B9&&(C=FC.requestAnimationFrame||Dg),C(function(){var n=Y9(),r=g2.begin("mutate");e.map(n),r(),t()})}}var v2=!1;function GD(){v2=!0}function Jd(){v2=!1}var vl=null;function Pg(e){if(mg&&L.observeMutations){var B=e.treeCallback,t=B===void 0?ao:B,C=e.nodeCallback,n=C===void 0?ao:C,r=e.pseudoElementsCallback,i=r===void 0?ao:r,s=e.observeMutationsRoot,a=s===void 0?pB:s;vl=new mg(function(o){if(!v2){var l=OC();Lr(o).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!wg(c.addedNodes[0])&&(L.searchPseudoElements&&i(c.target),t(c.target)),c.type==="attributes"&&c.target.parentNode&&L.searchPseudoElements&&i(c.target.parentNode),c.type==="attributes"&&wg(c.target)&&~s9.indexOf(c.attributeName))if(c.attributeName==="class"&&W9(c.target)){var u=pc(u2(c.target)),g=u.prefix,f=u.iconName;c.target.setAttribute(o2,g||l),f&&c.target.setAttribute(l2,f)}else j9(c.target)&&n(c.target)})}}),jt&&vl.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function z9(){vl&&vl.disconnect()}function _9(e){var B=e.getAttribute("style"),t=[];return B&&(t=B.split(";").reduce(function(C,n){var r=n.split(":"),i=r[0],s=r.slice(1);return i&&s.length>0&&(C[i]=s.join(":").trim()),C},{})),t}function $9(e){var B=e.getAttribute("data-prefix"),t=e.getAttribute("data-icon"),C=e.innerText!==void 0?e.innerText.trim():"",n=pc(u2(e));return n.prefix||(n.prefix=OC()),B&&t&&(n.prefix=B,n.iconName=t),n.iconName&&n.prefix||(n.prefix&&C.length>0&&(n.iconName=N9(n.prefix,e.innerText)||h2(n.prefix,Ld(e.innerText))),!n.iconName&&L.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=e.firstChild.data)),n}function B_(e){var B=Lr(e.attributes).reduce(function(n,r){return n.name!=="class"&&n.name!=="style"&&(n[r.name]=r.value),n},{}),t=e.getAttribute("title"),C=e.getAttribute("data-fa-title-id");return L.autoA11y&&(t?B["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(C||ds()):(B["aria-hidden"]="true",B.focusable="false")),B}function e_(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ct,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Rg(e){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=$9(e),C=t.iconName,n=t.prefix,r=t.rest,i=B_(e),s=Hd("parseNodeAttributes",{},e),a=B.styleParser?_9(e):[];return k({iconName:C,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:n,transform:ct,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:a,attributes:i}},s)}var t_=$e.styles;function KD(e){var B=L.autoReplaceSvg==="nest"?Rg(e,{styleParser:!1}):Rg(e);return~B.extra.classes.indexOf(ED)?Qt("generateLayersText",e,B):Qt("generateSvgReplacementMutation",e,B)}var kC=new Set;c2.map(function(e){kC.add("fa-".concat(e))});Object.keys(ls[dB]).map(kC.add.bind(kC));Object.keys(ls[IB]).map(kC.add.bind(kC));kC=Js(kC);function Ng(e){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!jt)return Promise.resolve();var t=pB.documentElement.classList,C=function(c){return t.add("".concat(gg,"-").concat(c))},n=function(c){return t.remove("".concat(gg,"-").concat(c))},r=L.autoFetchSvg?kC:c2.map(function(l){return"fa-".concat(l)}).concat(Object.keys(t_));r.includes("fa")||r.push("fa");var i=[".".concat(ED,":not([").concat(pn,"])")].concat(r.map(function(l){return".".concat(l,":not([").concat(pn,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=Lr(e.querySelectorAll(i))}catch{}if(s.length>0)C("pending"),n("complete");else return Promise.resolve();var a=g2.begin("onTree"),o=s.reduce(function(l,c){try{var u=KD(c);u&&l.push(u)}catch(g){yD||g.name==="MissingIcon"&&console.error(g)}return l},[]);return new Promise(function(l,c){Promise.all(o).then(function(u){HD(u,function(){C("active"),C("complete"),n("pending"),typeof B=="function"&&B(),a(),l()})}).catch(function(u){a(),c(u)})})}function C_(e){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;KD(e).then(function(t){t&&HD([t],B)})}function n_(e){return function(B){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},C=(B||{}).icon?B:Gd(B||{}),n=t.mask;return n&&(n=(n||{}).icon?n:Gd(n||{})),e(C,k(k({},t),{},{mask:n}))}}var r_=function(B){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},C=t.transform,n=C===void 0?ct:C,r=t.symbol,i=r===void 0?!1:r,s=t.mask,a=s===void 0?null:s,o=t.maskId,l=o===void 0?null:o,c=t.title,u=c===void 0?null:c,g=t.titleId,f=g===void 0?null:g,m=t.classes,p=m===void 0?[]:m,d=t.attributes,h=d===void 0?{}:d,v=t.styles,A=v===void 0?{}:v;if(B){var E=B.prefix,D=B.iconName,I=B.icon;return mc(k({type:"icon"},B),function(){return mn("beforeDOMElementCreation",{iconDefinition:B,params:t}),L.autoA11y&&(u?h["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(f||ds()):(h["aria-hidden"]="true",h.focusable="false")),m2({icons:{main:Kd(I),mask:a?Kd(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:D,transform:k(k({},ct),n),symbol:i,title:u,maskId:l,titleId:f,extra:{attributes:h,styles:A,classes:p}})})}},i_={mixout:function(){return{icon:n_(r_)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=Ng,t.nodeCallback=C_,t}}},provides:function(B){B.i2svg=function(t){var C=t.node,n=C===void 0?pB:C,r=t.callback,i=r===void 0?function(){}:r;return Ng(n,i)},B.generateSvgReplacementMutation=function(t,C){var n=C.iconName,r=C.title,i=C.titleId,s=C.prefix,a=C.transform,o=C.symbol,l=C.mask,c=C.maskId,u=C.extra;return new Promise(function(g,f){Promise.all([Ud(n,s),l.iconName?Ud(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(m){var p=s2(m,2),d=p[0],h=p[1];g([t,m2({icons:{main:d,mask:h},prefix:s,iconName:n,transform:a,symbol:o,maskId:c,title:r,titleId:i,extra:u,watchable:!0})])}).catch(f)})},B.generateAbstractIcon=function(t){var C=t.children,n=t.attributes,r=t.main,i=t.transform,s=t.styles,a=dc(s);a.length>0&&(n.style=a);var o;return f2(i)&&(o=Qt("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),C.push(o||r.icon),{children:C,attributes:n}}}},s_={mixout:function(){return{layer:function(t){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=C.classes,r=n===void 0?[]:n;return mc({type:"layer"},function(){mn("beforeDOMElementCreation",{assembler:t,params:C});var i=[];return t(function(s){Array.isArray(s)?s.map(function(a){i=i.concat(a.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(L.cssPrefix,"-layers")].concat(Js(r)).join(" ")},children:i}]})}}}},a_={mixout:function(){return{counter:function(t){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=C.title,r=n===void 0?null:n,i=C.classes,s=i===void 0?[]:i,a=C.attributes,o=a===void 0?{}:a,l=C.styles,c=l===void 0?{}:l;return mc({type:"counter",content:t},function(){return mn("beforeDOMElementCreation",{content:t,params:C}),U9({content:t.toString(),title:r,extra:{attributes:o,styles:c,classes:["".concat(L.cssPrefix,"-layers-counter")].concat(Js(s))}})})}}}},o_={mixout:function(){return{text:function(t){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=C.transform,r=n===void 0?ct:n,i=C.title,s=i===void 0?null:i,a=C.classes,o=a===void 0?[]:a,l=C.attributes,c=l===void 0?{}:l,u=C.styles,g=u===void 0?{}:u;return mc({type:"text",content:t},function(){return mn("beforeDOMElementCreation",{content:t,params:C}),Ig({content:t,transform:k(k({},ct),r),title:s,extra:{attributes:c,styles:g,classes:["".concat(L.cssPrefix,"-layers-text")].concat(Js(o))}})})}}},provides:function(B){B.generateLayersText=function(t,C){var n=C.title,r=C.transform,i=C.extra,s=null,a=null;if(gD){var o=parseInt(getComputedStyle(t).fontSize,10),l=t.getBoundingClientRect();s=l.width/o,a=l.height/o}return L.autoA11y&&!n&&(i.attributes["aria-hidden"]="true"),Promise.resolve([t,Ig({content:t.innerHTML,width:s,height:a,transform:r,title:n,extra:i,watchable:!0})])}}},l_=new RegExp('"',"ug"),Fg=[1105920,1112319];function c_(e){var B=e.replace(l_,""),t=I9(B,0),C=t>=Fg[0]&&t<=Fg[1],n=B.length===2?B[0]===B[1]:!1;return{value:Ld(n?B[0]:B),isSecondary:C||n}}function Og(e,B){var t="".concat($z).concat(B.replace(":","-"));return new Promise(function(C,n){if(e.getAttribute(t)!==null)return C();var r=Lr(e.children),i=r.filter(function(I){return I.getAttribute(Md)===B})[0],s=FC.getComputedStyle(e,B),a=s.getPropertyValue("font-family").match(n9),o=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(i&&!a)return e.removeChild(i),C();if(a&&l!=="none"&&l!==""){var c=s.getPropertyValue("content"),u=~["Sharp"].indexOf(a[2])?IB:dB,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(a[2])?cs[u][a[2].toLowerCase()]:r9[u][o],f=c_(c),m=f.value,p=f.isSecondary,d=a[0].startsWith("FontAwesome"),h=h2(g,m),v=h;if(d){var A=F9(m);A.iconName&&A.prefix&&(h=A.iconName,g=A.prefix)}if(h&&!p&&(!i||i.getAttribute(o2)!==g||i.getAttribute(l2)!==v)){e.setAttribute(t,v),i&&e.removeChild(i);var E=e_(),D=E.extra;D.attributes[Md]=B,Ud(h,g).then(function(I){var y=m2(k(k({},E),{},{icons:{main:I,mask:p2()},prefix:g,iconName:v,extra:D,watchable:!0})),b=pB.createElement("svg");B==="::before"?e.insertBefore(b,e.firstChild):e.appendChild(b),b.outerHTML=y.map(function(M){return Ws(M)}).join(`
`),e.removeAttribute(t),C()}).catch(n)}else C()}else C()})}function u_(e){return Promise.all([Og(e,"::before"),Og(e,"::after")])}function f_(e){return e.parentNode!==document.head&&!~e9.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Md)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function kg(e){if(jt)return new Promise(function(B,t){var C=Lr(e.querySelectorAll("*")).filter(f_).map(u_),n=g2.begin("searchPseudoElements");GD(),Promise.all(C).then(function(){n(),Jd(),B()}).catch(function(){n(),Jd(),t()})})}var d_={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=kg,t}}},provides:function(B){B.pseudoElements2svg=function(t){var C=t.node,n=C===void 0?pB:C;L.searchPseudoElements&&kg(n)}}},Tg=!1,h_={mixout:function(){return{dom:{unwatch:function(){GD(),Tg=!0}}}},hooks:function(){return{bootstrap:function(){Pg(Hd("mutationObserverCallbacks",{}))},noAuto:function(){z9()},watch:function(t){var C=t.observeMutationsRoot;Tg?Jd():Pg(Hd("mutationObserverCallbacks",{observeMutationsRoot:C}))}}}},Mg=function(B){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return B.toLowerCase().split(" ").reduce(function(C,n){var r=n.toLowerCase().split("-"),i=r[0],s=r.slice(1).join("-");if(i&&s==="h")return C.flipX=!0,C;if(i&&s==="v")return C.flipY=!0,C;if(s=parseFloat(s),isNaN(s))return C;switch(i){case"grow":C.size=C.size+s;break;case"shrink":C.size=C.size-s;break;case"left":C.x=C.x-s;break;case"right":C.x=C.x+s;break;case"up":C.y=C.y-s;break;case"down":C.y=C.y+s;break;case"rotate":C.rotate=C.rotate+s;break}return C},t)},p_={mixout:function(){return{parse:{transform:function(t){return Mg(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,C){var n=C.getAttribute("data-fa-transform");return n&&(t.transform=Mg(n)),t}}},provides:function(B){B.generateAbstractTransformGrouping=function(t){var C=t.main,n=t.transform,r=t.containerWidth,i=t.iconWidth,s={transform:"translate(".concat(r/2," 256)")},a="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),l="rotate(".concat(n.rotate," 0 0)"),c={transform:"".concat(a," ").concat(o," ").concat(l)},u={transform:"translate(".concat(i/2*-1," -256)")},g={outer:s,inner:c,path:u};return{tag:"g",attributes:k({},g.outer),children:[{tag:"g",attributes:k({},g.inner),children:[{tag:C.icon.tag,children:C.icon.children,attributes:k(k({},C.icon.attributes),g.path)}]}]}}}},Hu={x:0,y:0,width:"100%",height:"100%"};function Lg(e){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||B)&&(e.attributes.fill="black"),e}function m_(e){return e.tag==="g"?e.children:[e]}var g_={hooks:function(){return{parseNodeAttributes:function(t,C){var n=C.getAttribute("data-fa-mask"),r=n?pc(n.split(" ").map(function(i){return i.trim()})):p2();return r.prefix||(r.prefix=OC()),t.mask=r,t.maskId=C.getAttribute("data-fa-mask-id"),t}}},provides:function(B){B.generateAbstractMask=function(t){var C=t.children,n=t.attributes,r=t.main,i=t.mask,s=t.maskId,a=t.transform,o=r.width,l=r.icon,c=i.width,u=i.icon,g=p9({transform:a,containerWidth:c,iconWidth:o}),f={tag:"rect",attributes:k(k({},Hu),{},{fill:"white"})},m=l.children?{children:l.children.map(Lg)}:{},p={tag:"g",attributes:k({},g.inner),children:[Lg(k({tag:l.tag,attributes:k(k({},l.attributes),g.path)},m))]},d={tag:"g",attributes:k({},g.outer),children:[p]},h="mask-".concat(s||ds()),v="clip-".concat(s||ds()),A={tag:"mask",attributes:k(k({},Hu),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[f,d]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:m_(u)},A]};return C.push(E,{tag:"rect",attributes:k({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(h,")")},Hu)}),{children:C,attributes:n}}}},v_={provides:function(B){var t=!1;FC.matchMedia&&(t=FC.matchMedia("(prefers-reduced-motion: reduce)").matches),B.missingIconAbstract=function(){var C=[],n={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};C.push({tag:"path",attributes:k(k({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=k(k({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:k(k({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||s.children.push({tag:"animate",attributes:k(k({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:k(k({},i),{},{values:"1;0;1;1;0;1;"})}),C.push(s),C.push({tag:"path",attributes:k(k({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:k(k({},i),{},{values:"1;0;0;0;0;1;"})}]}),t||C.push({tag:"path",attributes:k(k({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:k(k({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:C}}}},A_={hooks:function(){return{parseNodeAttributes:function(t,C){var n=C.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},y_=[v9,i_,s_,a_,o_,d_,h_,p_,g_,v_,A_];T9(y_,{mixoutsTo:ke});ke.noAuto;ke.config;ke.library;ke.dom;var Vd=ke.parse;ke.findIconDefinition;ke.toHtml;var E_=ke.icon;ke.layer;ke.text;ke.counter;var S_={prefix:"fas",iconName:"bath",icon:[512,512,[128705,"bathtub"],"f2cd","M96 77.3c0-7.3 5.9-13.3 13.3-13.3c3.5 0 6.9 1.4 9.4 3.9l14.9 14.9C130 91.8 128 101.7 128 112c0 19.9 7.2 38 19.2 52c-5.3 9.2-4 21.1 3.8 29c9.4 9.4 24.6 9.4 33.9 0L289 89c9.4-9.4 9.4-24.6 0-33.9c-7.9-7.9-19.8-9.1-29-3.8C246 39.2 227.9 32 208 32c-10.3 0-20.2 2-29.2 5.5L163.9 22.6C149.4 8.1 129.7 0 109.3 0C66.6 0 32 34.6 32 77.3V256c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H96V77.3zM32 352v16c0 28.4 12.4 54 32 71.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V464H384v16c0 17.7 14.3 32 32 32s32-14.3 32-32V439.6c19.6-17.6 32-43.1 32-71.6V352H32z"]},xg={prefix:"fas",iconName:"ruler",icon:[512,512,[128207],"f545","M177.9 494.1c-18.7 18.7-49.1 18.7-67.9 0L17.9 401.9c-18.7-18.7-18.7-49.1 0-67.9l50.7-50.7 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 50.7-50.7c18.7-18.7 49.1-18.7 67.9 0l92.1 92.1c18.7 18.7 18.7 49.1 0 67.9L177.9 494.1z"]},I_={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},b_=I_,w_={prefix:"fas",iconName:"bed",icon:[640,512,[128716],"f236","M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"]},D_={prefix:"fas",iconName:"building",icon:[384,512,[127970,61687],"f1ad","M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"]},Hg={prefix:"fas",iconName:"calendar",icon:[448,512,[128197,128198],"f133","M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"]},P_={prefix:"fas",iconName:"dollar-sign",icon:[320,512,[128178,61781,"dollar","usd"],"24","M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"]},W={},R_={get exports(){return W},set exports(e){W=e}},N_="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",F_=N_,O_=F_;function UD(){}function QD(){}QD.resetWarningCache=UD;var k_=function(){function e(C,n,r,i,s,a){if(a!==O_){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}e.isRequired=e;function B(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:B,element:e,elementType:e,instanceOf:B,node:e,objectOf:B,oneOf:B,oneOfType:B,shape:B,exact:B,checkPropTypes:QD,resetWarningCache:UD};return t.PropTypes=t,t};R_.exports=k_();function Gg(e,B){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(e);B&&(C=C.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,C)}return t}function oC(e){for(var B=1;B<arguments.length;B++){var t=arguments[B]!=null?arguments[B]:{};B%2?Gg(Object(t),!0).forEach(function(C){Xn(e,C,t[C])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Gg(Object(t)).forEach(function(C){Object.defineProperty(e,C,Object.getOwnPropertyDescriptor(t,C))})}return e}function Al(e){return Al=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(B){return typeof B}:function(B){return B&&typeof Symbol=="function"&&B.constructor===Symbol&&B!==Symbol.prototype?"symbol":typeof B},Al(e)}function Xn(e,B,t){return B in e?Object.defineProperty(e,B,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[B]=t,e}function T_(e,B){if(e==null)return{};var t={},C=Object.keys(e),n,r;for(r=0;r<C.length;r++)n=C[r],!(B.indexOf(n)>=0)&&(t[n]=e[n]);return t}function M_(e,B){if(e==null)return{};var t=T_(e,B),C,n;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)C=r[n],!(B.indexOf(C)>=0)&&Object.prototype.propertyIsEnumerable.call(e,C)&&(t[C]=e[C])}return t}function Wd(e){return L_(e)||x_(e)||H_(e)||G_()}function L_(e){if(Array.isArray(e))return jd(e)}function x_(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function H_(e,B){if(e){if(typeof e=="string")return jd(e,B);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return jd(e,B)}}function jd(e,B){(B==null||B>e.length)&&(B=e.length);for(var t=0,C=new Array(B);t<B;t++)C[t]=e[t];return C}function G_(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K_(e){var B,t=e.beat,C=e.fade,n=e.beatFade,r=e.bounce,i=e.shake,s=e.flash,a=e.spin,o=e.spinPulse,l=e.spinReverse,c=e.pulse,u=e.fixedWidth,g=e.inverse,f=e.border,m=e.listItem,p=e.flip,d=e.size,h=e.rotation,v=e.pull,A=(B={"fa-beat":t,"fa-fade":C,"fa-beat-fade":n,"fa-bounce":r,"fa-shake":i,"fa-flash":s,"fa-spin":a,"fa-spin-reverse":l,"fa-spin-pulse":o,"fa-pulse":c,"fa-fw":u,"fa-inverse":g,"fa-border":f,"fa-li":m,"fa-flip":p===!0,"fa-flip-horizontal":p==="horizontal"||p==="both","fa-flip-vertical":p==="vertical"||p==="both"},Xn(B,"fa-".concat(d),typeof d<"u"&&d!==null),Xn(B,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),Xn(B,"fa-pull-".concat(v),typeof v<"u"&&v!==null),Xn(B,"fa-swap-opacity",e.swapOpacity),B);return Object.keys(A).map(function(E){return A[E]?E:null}).filter(function(E){return E})}function U_(e){return e=e-0,e===e}function JD(e){return U_(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(B,t){return t?t.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Q_=["style"];function J_(e){return e.charAt(0).toUpperCase()+e.slice(1)}function V_(e){return e.split(";").map(function(B){return B.trim()}).filter(function(B){return B}).reduce(function(B,t){var C=t.indexOf(":"),n=JD(t.slice(0,C)),r=t.slice(C+1).trim();return n.startsWith("webkit")?B[J_(n)]=r:B[n]=r,B},{})}function VD(e,B){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof B=="string")return B;var C=(B.children||[]).map(function(a){return VD(e,a)}),n=Object.keys(B.attributes||{}).reduce(function(a,o){var l=B.attributes[o];switch(o){case"class":a.attrs.className=l,delete B.attributes.class;break;case"style":a.attrs.style=V_(l);break;default:o.indexOf("aria-")===0||o.indexOf("data-")===0?a.attrs[o.toLowerCase()]=l:a.attrs[JD(o)]=l}return a},{attrs:{}}),r=t.style,i=r===void 0?{}:r,s=M_(t,Q_);return n.attrs.style=oC(oC({},n.attrs.style),i),e.apply(void 0,[B.tag,oC(oC({},n.attrs),s)].concat(Wd(C)))}var WD=!1;try{WD=!0}catch{}function W_(){if(!WD&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Kg(e){if(e&&Al(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Vd.icon)return Vd.icon(e);if(e===null)return null;if(e&&Al(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Gu(e,B){return Array.isArray(B)&&B.length>0||!Array.isArray(B)&&B?Xn({},e,B):{}}var js=sr.forwardRef(function(e,B){var t=e.icon,C=e.mask,n=e.symbol,r=e.className,i=e.title,s=e.titleId,a=e.maskId,o=Kg(t),l=Gu("classes",[].concat(Wd(K_(e)),Wd(r.split(" ")))),c=Gu("transform",typeof e.transform=="string"?Vd.transform(e.transform):e.transform),u=Gu("mask",Kg(C)),g=E_(o,oC(oC(oC(oC({},l),c),u),{},{symbol:n,title:i,titleId:s,maskId:a}));if(!g)return W_("Could not find icon",o),null;var f=g.abstract,m={ref:B};return Object.keys(e).forEach(function(p){js.defaultProps.hasOwnProperty(p)||(m[p]=e[p])}),j_(f[0],m)});js.displayName="FontAwesomeIcon";js.propTypes={beat:W.bool,border:W.bool,beatFade:W.bool,bounce:W.bool,className:W.string,fade:W.bool,flash:W.bool,mask:W.oneOfType([W.object,W.array,W.string]),maskId:W.string,fixedWidth:W.bool,inverse:W.bool,flip:W.oneOf([!0,!1,"horizontal","vertical","both"]),icon:W.oneOfType([W.object,W.array,W.string]),listItem:W.bool,pull:W.oneOf(["right","left"]),pulse:W.bool,rotation:W.oneOf([0,90,180,270]),shake:W.bool,size:W.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:W.bool,spinPulse:W.bool,spinReverse:W.bool,symbol:W.oneOfType([W.bool,W.string]),title:W.string,titleId:W.string,transform:W.oneOfType([W.string,W.object]),swapOpacity:W.bool};js.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var j_=VD.bind(null,sr.createElement);/*! *****************************************************************************
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
***************************************************************************** */var rB=function(){return rB=Object.assign||function(B){for(var t,C=1,n=arguments.length;C<n;C++){t=arguments[C];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(B[r]=t[r])}return B},rB.apply(this,arguments)};function Y_(e,B){var t={};for(var C in e)Object.prototype.hasOwnProperty.call(e,C)&&B.indexOf(C)<0&&(t[C]=e[C]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,C=Object.getOwnPropertySymbols(e);n<C.length;n++)B.indexOf(C[n])<0&&Object.prototype.propertyIsEnumerable.call(e,C[n])&&(t[C[n]]=e[C[n]]);return t}function Se(e,B,t){if(t||arguments.length===2)for(var C=0,n=B.length,r;C<n;C++)(r||!(C in B))&&(r||(r=Array.prototype.slice.call(B,0,C)),r[C]=B[C]);return e.concat(r||B)}var At=function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},X_={k:1e3,m:1e6,b:1e9},Z_=function(e,B){B===void 0&&(B=".");var t=new RegExp("(\\d+("+At(B)+"\\d*)?)([kmb])$","i"),C=e.match(t);if(C){var n=C[1],r=C[3],i=X_[r.toLowerCase()];return Number(n.replace(B,"."))*i}},q_=function(e,B){B===void 0&&(B=",");var t=new RegExp(At(B),"g");return e.replace(t,"")},z_=function(e,B){var t=At(B.join("")),C=new RegExp("[^\\d"+t+"]","gi");return e.replace(C,"")},Ku=function(e){var B=e.value,t=e.groupSeparator,C=t===void 0?",":t,n=e.decimalSeparator,r=n===void 0?".":n,i=e.allowDecimals,s=i===void 0?!0:i,a=e.decimalsLimit,o=a===void 0?2:a,l=e.allowNegativeValue,c=l===void 0?!0:l,u=e.disableAbbreviations,g=u===void 0?!1:u,f=e.prefix,m=f===void 0?"":f,p=e.transformRawValue,d=p===void 0?function(H){return H}:p,h=d(B);if(h==="-")return h;var v=g?[]:["k","m","b"],A=new RegExp("((^|\\D)-\\d)|(-"+At(m)+")"),E=A.test(h),D=RegExp("(\\d+)-?"+At(m)).exec(B)||[],I=D[0],y=D[1],b=m?I?h.replace(I,"").concat(y):h.replace(m,""):h,M=q_(b,C),V=z_(M,Se([C,r],v)),tB=V;if(!g){if(v.some(function(H){return H===V.toLowerCase().replace(r,"")}))return"";var xB=Z_(V,r);xB&&(tB=String(xB))}var rt=E&&c?"-":"";if(r&&tB.includes(r)){var lB=V.split(r),DB=lB[0],vB=lB[1],F=o&&vB?vB.slice(0,o):vB,G=s?""+r+F:"";return""+rt+DB+G}return""+rt+tB},__=function(e,B,t){if(t&&e.length>1){if(e.includes(B)){var C=e.split(B),n=C[0],r=C[1];if(r.length>t)return""+n+B+r.slice(0,t)}var i=e.length>t?new RegExp("(\\d+)(\\d{"+t+"})"):new RegExp("(\\d)(\\d+)"),s=e.match(i);if(s){var n=s[1],r=s[2];return""+n+B+r}}return e},jD=function(e,B){var t=B.groupSeparator,C=t===void 0?",":t,n=B.decimalSeparator,r=n===void 0?".":n,i=new RegExp("\\d([^"+At(C)+At(r)+"0-9]+)"),s=e.match(i);return s?s[1]:void 0},ei=function(e){var B=e.value,t=e.decimalSeparator,C=e.intlConfig,n=e.decimalScale,r=e.prefix,i=r===void 0?"":r,s=e.suffix,a=s===void 0?"":s;if(B===""||B===void 0)return"";if(B==="-")return"-";var o=new RegExp("^\\d?-"+(i?At(i)+"?":"")+"\\d").test(B),l=t!=="."?$_(B,t,o):B,c={minimumFractionDigits:n||0,maximumFractionDigits:20},u=C?new Intl.NumberFormat(C.locale,C.currency?rB(rB({},c),{style:"currency",currency:C.currency}):c):new Intl.NumberFormat(void 0,c),g=u.formatToParts(Number(l)),f=B$(g,e),m=jD(f,rB({},e)),p=B.slice(-1)===t?t:"",d=l.match(RegExp("\\d+\\.(\\d+)"))||[],h=d[1];return n===void 0&&h&&t&&(f.includes(t)?f=f.replace(RegExp("(\\d+)("+At(t)+")(\\d+)","g"),"$1$2"+h):m&&!a?f=f.replace(m,""+t+h+m):f=""+f+t+h),a&&p?""+f+p+a:m&&p?f.replace(m,""+p+m):m&&a?f.replace(m,""+p+a):[f,p,a].join("")},$_=function(e,B,t){var C=e;return B&&B!=="."&&(C=C.replace(RegExp(At(B),"g"),"."),t&&B==="-"&&(C="-"+C.slice(1))),C},B$=function(e,B){var t=B.prefix,C=B.groupSeparator,n=B.decimalSeparator,r=B.decimalScale,i=B.disableGroupSeparators,s=i===void 0?!1:i;return e.reduce(function(a,o,l){var c=o.type,u=o.value;return l===0&&t?c==="minusSign"?[u,t]:c==="currency"?Se(Se([],a),[t]):[t,u]:c==="currency"?t?a:Se(Se([],a),[u]):c==="group"?s?a:Se(Se([],a),[C!==void 0?C:u]):c==="decimal"?r!==void 0&&r===0?a:Se(Se([],a),[n!==void 0?n:u]):c==="fraction"?Se(Se([],a),[r!==void 0?u.slice(0,r):u]):Se(Se([],a),[u])},[""]).join("")},e$={currencySymbol:"",groupSeparator:"",decimalSeparator:"",prefix:"",suffix:""},t$=function(e){var B=e||{},t=B.locale,C=B.currency,n=t?new Intl.NumberFormat(t,C?{currency:C,style:"currency"}:void 0):new Intl.NumberFormat;return n.formatToParts(1000.1).reduce(function(r,i,s){return i.type==="currency"?s===0?rB(rB({},r),{currencySymbol:i.value,prefix:i.value}):rB(rB({},r),{currencySymbol:i.value,suffix:i.value}):i.type==="group"?rB(rB({},r),{groupSeparator:i.value}):i.type==="decimal"?rB(rB({},r),{decimalSeparator:i.value}):r},e$)},Ug=function(e){return RegExp(/\d/,"gi").test(e)},C$=function(e,B,t){if(B===void 0&&(B="."),t===void 0||e===""||e===void 0)return e;if(!e.match(/\d/g))return"";var C=e.split(B),n=C[0],r=C[1];if(t===0)return n;var i=r||"";if(i.length<t)for(;i.length<t;)i+="0";else i=i.slice(0,t);return""+n+B+i},n$=function(e){var B=e.selectionStart,t=e.value,C=e.lastKeyStroke,n=e.stateValue,r=e.groupSeparator,i=B,s=t;if(n&&i){var a=t.split("");return C==="Backspace"&&n[i]===r&&(a.splice(i-1,1),i-=1),C==="Delete"&&n[i]===r&&(a.splice(i,1),i+=1),s=a.join(""),{modifiedValue:s,cursorPosition:i}}return{modifiedValue:s,cursorPosition:B}},Yd=S.forwardRef(function(e,B){var t=e.allowDecimals,C=t===void 0?!0:t,n=e.allowNegativeValue,r=n===void 0?!0:n,i=e.id,s=e.name,a=e.className,o=e.customInput,l=e.decimalsLimit,c=e.defaultValue,u=e.disabled,g=u===void 0?!1:u,f=e.maxLength,m=e.value,p=e.onValueChange,d=e.fixedDecimalLength,h=e.placeholder,v=e.decimalScale,A=e.prefix,E=e.suffix,D=e.intlConfig,I=e.step,y=e.min,b=e.max,M=e.disableGroupSeparators,V=M===void 0?!1:M,tB=e.disableAbbreviations,xB=tB===void 0?!1:tB,rt=e.decimalSeparator,lB=e.groupSeparator,DB=e.onChange,vB=e.onFocus,F=e.onBlur,G=e.onKeyDown,H=e.onKeyUp,eB=e.transformRawValue,$=Y_(e,["allowDecimals","allowNegativeValue","id","name","className","customInput","decimalsLimit","defaultValue","disabled","maxLength","value","onValueChange","fixedDecimalLength","placeholder","decimalScale","prefix","suffix","intlConfig","step","min","max","disableGroupSeparators","disableAbbreviations","decimalSeparator","groupSeparator","onChange","onFocus","onBlur","onKeyDown","onKeyUp","transformRawValue"]);if(rt&&Ug(rt))throw new Error("decimalSeparator cannot be a number");if(lB&&Ug(lB))throw new Error("groupSeparator cannot be a number");var JB=S.useMemo(function(){return t$(D)},[D]),z=rt||JB.decimalSeparator||"",VB=lB||JB.groupSeparator||"";if(z&&VB&&z===VB&&V===!1)throw new Error("decimalSeparator cannot be the same as groupSeparator");var ee={decimalSeparator:z,groupSeparator:VB,disableGroupSeparators:V,intlConfig:D,prefix:A||JB.prefix,suffix:E},it={decimalSeparator:z,groupSeparator:VB,allowDecimals:C,decimalsLimit:l||d||2,allowNegativeValue:r,disableAbbreviations:xB,prefix:A||JB.prefix,transformRawValue:eB},gc=c!=null?ei(rB(rB({},ee),{decimalScale:v,value:String(c)})):m!=null?ei(rB(rB({},ee),{decimalScale:v,value:String(m)})):"",Ys=S.useState(gc),XB=Ys[0],wn=Ys[1],vc=S.useState(!1),xr=vc[0],_D=vc[1],A2=S.useState(0),Ac=A2[0],yc=A2[1],y2=S.useState(0),E2=y2[0],$D=y2[1],S2=S.useState(null),B3=S2[0],e3=S2[1],Yt=S.useRef(null);S.useImperativeHandle(B,function(){return Yt.current});var I2=function(FB,oe){_D(!0);var te=n$({selectionStart:oe,value:FB,lastKeyStroke:B3,stateValue:XB,groupSeparator:VB}),le=te.modifiedValue,ce=te.cursorPosition,Te=Ku(rB({value:le},it));if(!(f&&Te.replace(/-/g,"").length>f)){if(Te===""||Te==="-"||Te===z){p&&p(void 0,s,{float:null,formatted:"",value:""}),wn(Te),yc(1);return}var Xs=z?Te.replace(z,"."):Te,o3=parseFloat(Xs),Ec=ei(rB({value:Te},ee));if(ce!=null){var Zs=ce+(Ec.length-FB.length);Zs=Zs<=0?A?A.length:0:Zs,yc(Zs),$D(E2+1)}if(wn(Ec),p){var l3={float:o3,formatted:Ec,value:Te};p(Te,s,l3)}}},t3=function(FB){var oe=FB.target,te=oe.value,le=oe.selectionStart;I2(te,le),DB&&DB(FB)},C3=function(FB){return vB&&vB(FB),XB?XB.length:0},n3=function(FB){var oe=FB.target.value,te=Ku(rB({value:oe},it));if(te==="-"||te===z||!te){wn(""),F&&F(FB);return}var le=__(te,z,d),ce=C$(le,z,v!==void 0?v:d),Te=parseFloat(ce.replace(z,".")),Xs=ei(rB(rB({},ee),{value:ce}));p&&p(ce,s,{float:Te,formatted:Xs,value:ce}),wn(Xs),F&&F(FB)},r3=function(FB){var oe=FB.key;if(e3(oe),I&&(oe==="ArrowUp"||oe==="ArrowDown")){FB.preventDefault(),yc(XB.length);var te=parseFloat(m!=null?String(m).replace(z,"."):Ku(rB({value:XB},it)))||0,le=oe==="ArrowUp"?te+I:te-I;if(y!==void 0&&le<y||b!==void 0&&le>b)return;var ce=String(I).includes(".")?Number(String(I).split(".")[1].length):void 0;I2(String(ce?le.toFixed(ce):le).replace(".",z))}G&&G(FB)},i3=function(FB){var oe=FB.key,te=FB.currentTarget.selectionStart;if(oe!=="ArrowUp"&&oe!=="ArrowDown"&&XB!=="-"){var le=jD(XB,{groupSeparator:VB,decimalSeparator:z});if(le&&te&&te>XB.length-le.length&&Yt.current){var ce=XB.length-le.length;Yt.current.setSelectionRange(ce,ce)}}H&&H(FB)};S.useEffect(function(){xr&&XB!=="-"&&Yt.current&&document.activeElement===Yt.current&&Yt.current.setSelectionRange(Ac,Ac)},[XB,Ac,Yt,xr,E2]);var s3=function(){return m!=null&&XB!=="-"&&(!z||XB!==z)?ei(rB(rB({},ee),{decimalScale:xr?void 0:v,value:String(m)})):XB},b2=rB({type:"text",inputMode:"decimal",id:i,name:s,className:a,onChange:t3,onBlur:n3,onFocus:C3,onKeyDown:r3,onKeyUp:i3,placeholder:h,disabled:g,value:s3(),ref:Yt},$);if(o){var a3=o;return sr.createElement(a3,rB({},b2))}return sr.createElement("input",rB({},b2))});Yd.displayName="CurrencyInput";const r$={databaseURL:"https://criblytics-default-rtdb.firebaseio.com/",apiKey:"AIzaSyCRv3YXcKBp4caX4SLDf9tOM_jf6-PgKWc",authDomain:"criblytics.firebaseapp.com",projectId:"criblytics",storageBucket:"criblytics.appspot.com",messagingSenderId:"109707951445",appId:"1:109707951445:web:120d9a55b9851e13bd03dc",measurementId:"G-VH1N6MR0RG"},YD=Ql(r$);nh(YD);Cc(YD);const XD=Cc(),i$=(e,B,t="animate__")=>new Promise((C,n)=>{const r=`${t}${B}`,i=document.getElementById(e);if(!i){n(`Element with ID '${e}' not found.`);return}i.classList.add(`${t}animated`,r);function s(a){a.stopPropagation(),i.classList.remove(`${t}animated`,r),i.style.display="none",C("Animation ended")}i.addEventListener("animationend",s,{once:!0})});function s$(e){return i$("search","fadeOut"),console.log(e.listing_id),P("div",{children:P(a$,{listing_id:e.listing_id})})}const a$=e=>{const B=e.listing_id,[t,C]=S.useState({}),[n,r]=S.useState(!1),[i,s]=S.useState(!1),a=()=>{r(!n)},o=()=>{s(!i)};S.useEffect(()=>{const c=sl(XD,"properties/"+B);ns(c).then(u=>{u.exists()?C(u.val()):console.log("No data available")}).catch(u=>{console.error(u)})},[]);const l=()=>{window.location.reload()};return X("div",{children:[X("h2",{className:"hover:text-emerald-400 text-3xl my-8 text-emerald-100 cursor-pointer",onClick:a,children:[P("span",{className:`triangle ${n?"open":""}`}),"Key Metrics"]}),n&&P("div",{children:P(l$,{snap:t,listing_id:B})}),X("h2",{className:"hover:text-slate-400 text-3xl my-8 text-slate-100 cursor-pointer",onClick:o,children:[P("span",{className:`triangle ${i?"open":""}`}),"Property Details"]}),i&&X("ul",{className:"flex flex-wrap overflow-auto max-w-lg text-2xl font-medium",children:[Object.entries(t.prop_common).map(([c,u])=>u$(c,u)),P(o$,{snap:t})]}),P("button",{onClick:l,className:"hover:bg-slate-700 rounded-2xl shadow-2xl text-2xl text-dark-waves bg-gradient-to-r bg-slate-500",children:"Home"})]})},o$=e=>{const[B,t]=S.useState([]),[C,n]=S.useState(0),[r,i]=S.useState(!0);S.useEffect(()=>{let o=e.snap;o&&o.photos&&o.photos.length>0&&(t(o.photos),i(!1))},[]);const s=()=>{n(o=>(o-1+B.length)%B.length)},a=()=>{n(o=>(o+1)%B.length)};return P(lo,{children:P("div",{className:"border-2 border-grainy justify-center flex-wrap flex",children:r?P("div",{style:{display:"none"},children:B.map((o,l)=>P("img",{src:o.href,alt:`Property ${l+1}`},l))}):X(lo,{children:[P("img",{src:B[C].href,className:"p-8 w-full h-96 rounded-2xl shadow-lg",alt:`Property ${C+1}`}),X("div",{className:"flex justify-center my-4 rounded-xl",children:[P("button",{className:"mr-4 bg-grainy rounded-xl shadow-xl",onClick:s,disabled:B.length===1,children:"Previous"}),P("button",{className:"bg-grainy rounded-xl shadow-xl",onClick:a,disabled:B.length===1,children:"Next"})]})]})})})},l$=e=>{let B=e.snap,t=e.listing_id;const C=sl(XD,"properties/"+t+"/rental/");async function n(lB,DB){let G=(await(await fetch(lB,DB)).json()).data.home_search.results;const H=Object.entries(G).map(([eB,$])=>{const{products:JB,...z}=$;return[eB,z]});console.log(H),ld(C,H)}S.useEffect(()=>{console.log(B.prop_common.price+"price"),(async()=>{ns(C).then(DB=>{let vB=null;if(DB.exists())vB=DB.val();else{console.log("No data available");try{let H=B.prop_common.bed,eB=B.prop_common.bath,$=B.prop_common.sqft,JB=B.address.city,z=B.address.state;const VB=Math.max(1,H-1),ee=H,it=Math.max(1,eB-1),gc=eB+1,Ys=Math.max(500,$-750),XB=$+750,wn=`https://us-real-estate.p.rapidapi.com/v2/for-rent?city=${JB}&state_code=${z}&limit=42&offset=0&beds_min=${VB}&beds_max=${ee}&baths_min=${it}&baths_max=${gc}&expand_search_radius=25&home_size_min=${Ys}&home_size_max=${XB}`;n(wn,{method:"GET",headers:{"X-RapidAPI-Key":"2661057b61msh8e6271d7a1763b6p12ffb0jsnc06db3ad292e","X-RapidAPI-Host":"us-real-estate.p.rapidapi.com"}}),vB=ns(C).then(xr=>{vB=xr.val()})}catch(H){console.error(H)}}let F=0,G=vB.length;Object.entries(vB).map(([H,eB])=>{eB[0];const $=eB[1];let JB=0,z=0,VB=0;$.list_price!==null&&(VB=$.list_price),$.list_price_min!==null&&(JB=$.list_price_min),$.list_price_max!==null&&(z=$.list_price_max),JB==null&&(JB=0),z==null&&(z=0),VB==null&&(VB=(JB+z)/2),F=F+VB}),F=F/G,F=Math.floor(F),i(F),console.log(r+"rent")}).catch(DB=>{console.error(DB)})})()},[]);const[r,i]=S.useState(0),[s,a]=S.useState(B.prop_common.price),[o,l]=S.useState(20),[c,u]=S.useState("6.0"),[g,f]=S.useState(30),m=s,p=o/100*m,d=m-p,v=parseFloat(c)/100/12,A=g*12,E=v===0||v===void 0||v===""?0:d*v*Math.pow(1+v,A)/(Math.pow(1+v,A)-1),D=parseFloat(String(r).replace(/[^0-9.-]+/g,"")),I=12,y=D*I,[b,M]=S.useState(0),V=y-E*I-b*I,tB=lB=>parseFloat(lB.replace(/[^0-9.-]+/g,""));return P(lo,{children:X("div",{className:"max-w-sm mx-auto",children:[X("div",{className:"p-2",children:[P("div",{className:"grid grid-cols-2 gap-4",children:P("div",{className:"col-span-2",children:P("div",{className:"text-grainy text-2xl font-medium",children:X("div",{className:"flex items-center mb-4",children:[P("span",{className:"w-1/2",children:"List Price: "}),P("div",{className:"w-1/2 overflow-auto font-medium",children:P(Yd,{prefix:"$",name:"priceInput",id:"priceInput","data-number-to-fixed":"2","data-number-stepfactor":"100",value:s,placeholder:"",onChange:lB=>{let DB=lB.target.value,vB=tB(DB);a(isNaN(vB)?0:vB)},allowDecimals:!0,decimalsLimit:"2",disableAbbreviations:!0})})]})})})}),P("div",{className:"grid grid-cols-2 gap-4",children:P("div",{className:"col-span-2",children:P("div",{className:"text-bland text-2xl font-medium",children:X("div",{className:"flex items-center mb-4",children:[P("span",{className:"w-1/2",children:"Rent Estimate: "}),P("div",{className:"w-1/2 overflow-auto font-medium",children:P(Yd,{prefix:"$",name:"priceInput",id:"priceInput","data-number-to-fixed":"2","data-number-stepfactor":"100",value:r,placeholder:"",onChange:lB=>{let DB=lB.target.value,vB=tB(DB);i(isNaN(vB)?0:vB)},allowDecimals:!0,decimalsLimit:"2",disableAbbreviations:!0})})]})})})})]}),X("div",{className:"grid grid-cols-2 gap-4",children:[P("div",{className:"col-span-1",children:X("div",{className:"mb-4",children:[X("label",{htmlFor:"downpaymentSlider",className:"text-lg font-medium",children:["Downpayment:",P("br",{})," ",o,"%"]}),P("input",{type:"range",id:"downpaymentSlider",className:"w-full",min:0,max:100,value:o,onChange:lB=>l(parseInt(lB.target.value))})]})}),P("div",{className:"col-span-1",children:X("div",{className:"mb-4",children:[X("label",{className:"font-medium",children:["Loan Term: ",P("br",{}),g," years"]}),P("input",{type:"range",min:15,max:30,className:"w-full",value:g,onChange:lB=>f(parseInt(lB.target.value))})]})})]}),X("div",{className:"grid grid-cols-3 gap-4",children:[P("div",{className:"col-span-1",children:X("div",{className:"mb-4",children:[P("label",{htmlFor:"interestRateInput",className:"font-medium",children:"Interest Rate (%)"}),P("input",{type:"text",id:"interestRateInput",className:"w-full px-2 py-1 rounded border border-gray-300",value:c,onChange:lB=>{const DB=lB.target.value;u(DB)}})]})}),P("div",{className:"col-span-1",children:X("div",{className:"mb-4",children:[P("label",{htmlFor:"monthlyPayment",className:"font-medium",children:"Monthly Payment"}),P("input",{type:"text",id:"monthlyPayment",className:"w-full px-2 py-1 rounded border border-gray-300",value:isNaN(E+b)?"-":(E+b).toLocaleString("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}),readOnly:!0})]})}),P("div",{className:"col-span-1",children:X("div",{className:"mb-4",children:[P("label",{htmlFor:"totalExpensesInput",className:"font-medium",children:"Monthly Expenses"}),P("input",{type:"number",id:"totalExpensesInput",className:"w-full px-2 py-1 rounded border border-gray-300",value:b===0||b===null?0:b,onChange:lB=>M(parseFloat(lB.target.value))})]})})]}),P("div",{className:"flex items-center justify-center",children:P("div",{className:"text-3xl font-medium m-4 p-6 shadow-2xl border-1 rounded-xl bg-slate-800 hover:bg-slate-900",children:X("label",{className:`text-3xl font-medium ${V>=0?"text-green-600":"text-red-600"}`,children:["Annual Income: ",isNaN(V)?"-":V.toLocaleString("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2})]})})})]})})},c$={baths:S_,beds:w_,lot_sqft:xg,sold_date:Hg,sold_price:P_,sqft:xg,stories:D_,type:b_,year_built:Hg},u$=(e,B)=>{const t=c$[e];if(t==null)return;let C=B;return(e==="sold_date"||e==="year_built")&&(C=new Date(B).getFullYear().toString()),e==="sold_price"&&(C=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(B),C=C.substring(1,C.length)),e==="lot_sqft"&&(C="Lot size "+C+" sqft"),e==="sqft"&&(C=C+" sqft"),e==="sold_date"&&(C="Last sold "+C),e==="year_built"&&(C="Built in "+C),e==="type"&&(C=C.replace("_"," "),C=C.charAt(0).toUpperCase()+C.slice(1)),e==="stories"&&(C="Stories "+C),X("li",{className:"text-waves my-4 w-1/2",children:[P(js,{icon:t})," ",C]},e)},f$={databaseURL:"https://criblytics-default-rtdb.firebaseio.com/",apiKey:"AIzaSyCRv3YXcKBp4caX4SLDf9tOM_jf6-PgKWc",authDomain:"criblytics.firebaseapp.com",projectId:"criblytics",storageBucket:"criblytics.appspot.com",messagingSenderId:"109707951445",appId:"1:109707951445:web:120d9a55b9851e13bd03dc",measurementId:"G-VH1N6MR0RG"},ZD=Ql(f$);nh(ZD);const Qg=Cc(ZD),d$=new xe;d$.setCustomParameters({prompt:"select_account"});NE();const h$=["AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];function Jg(e){const[B,t]=S.useState(""),[C,n]=S.useState(""),[r,i]=S.useState(""),[s,a]=S.useState("false"),[o,l]=S.useState("0"),[c,u]=S.useState(!1),g=()=>{if(e.login){console.log("City: "+B),console.log("State: "+C),console.log("Address: "+r),console.log();let d=e.user,h=d.uid,v=d.email,A=d.displayName;console.log(d),console.log(h),console.log(v),console.log(A),m(B,C,r)}else alert("Please login before continuing")};S.useEffect(()=>{a(!1)});const f={method:"GET",headers:{"X-RapidAPI-Key":"2661057b61msh8e6271d7a1763b6p12ffb0jsnc06db3ad292e","X-RapidAPI-Host":"us-real-estate.p.rapidapi.com"}},m=(p,d,h)=>{if(document.getElementById("search"),p===""||d===""||h==="")alert("Invalid input");else{const v=`${h} ${p} ${d}`,A=encodeURIComponent(v);console.log(A);const E=`https://us-real-estate.p.rapidapi.com/location/suggest?input=${A}`;fetch(E,f).then(D=>D.json()).then(D=>{const I=D.data[0].property_id;console.log(I),l(I);const y=sl(Qg,"properties/"+I);ns(y).then(M=>{if(M.exists()){console.log("Already exists"),u(!0);return}else{console.log("No data available");const V=`https://us-real-estate.p.rapidapi.com/v2/property-detail?property_id=${I}`;fetch(V,f).then(tB=>tB.json()).then(tB=>{console.log(tB);let xB=tB.data.property_detail;delete xB.product_attributes,ld(y,xB),u(!0)}).catch(tB=>console.error(tB))}}).catch(M=>{console.error(M)});const b=sl(Qg,"users/"+e.user.uid+"/history/");ns(b).then(M=>{let V=M.val()||[];V.includes(I)?console.log("listing_id already exists in user history."):(V.push(I),ld(b,V).then(()=>{console.log("Successfully updated user history.")}).catch(tB=>{console.error("Error updating user history:",tB)}))}).catch(M=>{console.error("Error fetching user history:",M)})}).catch(D=>console.error(D))}};return X(lo,{children:[X("div",{id:"search",children:[X("div",{className:"p-4 flex content-center justify-center text-center",children:[X("div",{className:"w-1/2 mr-2",children:[P("label",{className:"text-3xl block text-grainy mb-2",children:"City"}),P("input",{className:"px-2 py-2 bg-dark-waves rounded-lg text-dark-bland w-full",type:"text",value:B,onChange:p=>t(p.target.value)})]}),X("div",{className:"w-1/2",children:[P("label",{className:"text-3xl block text-grainy mb-2",children:"State"}),X("select",{className:"px-2 py-3 bg-dark-waves rounded-lg text-dark-bland w-4/5",value:C,onChange:p=>n(p.target.value),children:[P("option",{value:"",children:"Select a state"}),h$.map(p=>P("option",{value:p,children:p},p))]})]})]}),X("div",{className:"p-4 flex flex-col items-center",children:[P("label",{className:"text-3xl block text-grainy mb-2",children:"Address"}),P("div",{className:"w-3/5 mr-2 flex",children:P("input",{className:"px-2 py-2 bg-dark-waves rounded-lg text-dark-bland w-full",type:"text",value:r,onChange:p=>i(p.target.value)})})]}),P("button",{id:"search",onClick:g,className:"active:shadow-none shadow-2xl active:from-black active:to-black focus:bg-black w-1/3 rounded-xl text-wave duration-200 ease-in-out transition my-8 bg-gradient-to-l from-grainy to-bland ",children:"Search"}),P("img",{id:"picture",src:""}),P("div",{id:"details"}),P("div",{id:"description"})]}),c&&P(s$,{listing_id:o})]})}let Vg=0;function p$(){const e=["home","rental","investment"];return P("div",{className:"",children:X(HN,{to:"/About",children:[X("h1",{className:"mx-20 sm:text-5xl text-4xl font-extrabold leading-tighter tracking-tighter mb-24",children:["Crib",P("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-grainy to-bland",children:"lytics."})]}),X("p",{className:"text-2xl text-waves mb-8",children:["Find your dream ",P("span",{className:["#6EE7B7","#FFD166","#06D6A0"][Vg],children:e[Vg]})]})]})})}const m$=({user:e,auth:B,db:t})=>X("div",{className:"flex content-center justify-center gap-16 mt-8 border-b-2 border-grainy pb-6",children:[P("img",{className:" rounded-xl h-16 w-16",src:e.photoURL,alt:""}),P("button",{className:" hover:border-red-500 hover:border-3 p-16 rounded-2xl button signout bg-transparent font-bold py-2 px-4 text-2xl text-waves",onClick:()=>B.signOut(),children:"Sign out"})]});const g$={databaseURL:"https://criblytics-default-rtdb.firebaseio.com/",apiKey:"AIzaSyCRv3YXcKBp4caX4SLDf9tOM_jf6-PgKWc",authDomain:"criblytics.firebaseapp.com",projectId:"criblytics",storageBucket:"criblytics.appspot.com",messagingSenderId:"109707951445",appId:"1:109707951445:web:120d9a55b9851e13bd03dc",measurementId:"G-VH1N6MR0RG"},qD=Ql(g$);nh(qD);const v$=Cc(qD),zD=new xe;zD.setCustomParameters({prompt:"select_account"});const Xd=NE();function A$(){async function e(B,t){var C;try{const n=await iM(B,t),i=xe.credentialFromResult(n).accessToken,s=n.user;console.log(s)}catch(n){n.code,n.message,(C=n.customData)!=null&&C.email,xe.credentialFromError(n)}}return P("button",{id:"signIn",onClick:()=>e(Xd,zD),className:"px-8 py-4  bg-bland text-3xl font-bold bg-transparent hover:border-green-500 text-wavesfont-semibold hover:text-white rounded-xl",children:"Sign in"})}function y$(){const[e,B]=S.useState(null);return S.useEffect(()=>{Xd.onAuthStateChanged(t=>{B(t)})},[]),P("div",{children:X("div",{className:"mt-8 ",children:[P(JN,{}),P(p$,{}),P("section",{children:e?P(m$,{auth:Xd,user:e,db:v$}):P(A$,{})}),P("div",{className:"mt-4 text-xl text-center max-w-l",children:e?P(Jg,{user:e,login:!0}):P(Jg,{user:e,login:!1})})]})})}function E$(){return P("div",{children:X(RN,{children:[P(Gf,{path:"/",element:P(y$,{})}),P(Gf,{path:"/about",element:P(KN,{})})]})})}const S$=Uu.createRoot(document.getElementById("root"));S$.render(P(sr.StrictMode,{children:P(MN,{children:P(E$,{})})}));