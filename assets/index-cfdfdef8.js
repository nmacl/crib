(function(){const B=document.createElement("link").relList;if(B&&B.supports&&B.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))C(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&C(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function C(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const C of document.querySelectorAll('link[rel="modulepreload"]'))t(C);new MutationObserver(C=>{for(const n of C)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function B(C){const n={};return C.integrity&&(n.integrity=C.integrity),C.referrerpolicy&&(n.referrerPolicy=C.referrerpolicy),C.crossorigin==="use-credentials"?n.credentials="include":C.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(C){if(C.ep)return;C.ep=!0;const n=B(C);fetch(C.href,n)}})();function tD(e,B){for(var t=0;t<B.length;t++){const C=B[t];if(typeof C!="string"&&!Array.isArray(C)){for(const n in C)if(n!=="default"&&!(n in e)){const r=Object.getOwnPropertyDescriptor(C,n);r&&Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:()=>C[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const C of document.querySelectorAll('link[rel="modulepreload"]'))t(C);new MutationObserver(C=>{for(const n of C)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function B(C){const n={};return C.integrity&&(n.integrity=C.integrity),C.referrerpolicy&&(n.referrerPolicy=C.referrerpolicy),C.crossorigin==="use-credentials"?n.credentials="include":C.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(C){if(C.ep)return;C.ep=!0;const n=B(C);fetch(C.href,n)}})();function CD(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Mg(e){if(e.__esModule)return e;var B=e.default;if(typeof B=="function"){var t=function C(){if(this instanceof C){var n=[null];n.push.apply(n,arguments);var r=Function.bind.apply(B,n);return new r}return B.apply(this,arguments)};t.prototype=B.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach(function(C){var n=Object.getOwnPropertyDescriptor(e,C);Object.defineProperty(t,C,n.get?n:{enumerable:!0,get:function(){return e[C]}})}),t}var bi={},nD={get exports(){return bi},set exports(e){bi=e}},dl={},O={},rD={get exports(){return O},set exports(e){O=e}},q={};/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var as=Symbol.for("react.element"),iD=Symbol.for("react.portal"),sD=Symbol.for("react.fragment"),aD=Symbol.for("react.strict_mode"),oD=Symbol.for("react.profiler"),lD=Symbol.for("react.provider"),cD=Symbol.for("react.context"),uD=Symbol.for("react.forward_ref"),dD=Symbol.for("react.suspense"),hD=Symbol.for("react.memo"),fD=Symbol.for("react.lazy"),g2=Symbol.iterator;function pD(e){return e===null||typeof e!="object"?null:(e=g2&&e[g2]||e["@@iterator"],typeof e=="function"?e:null)}var Lg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tg=Object.assign,Gg={};function vr(e,B,t){this.props=e,this.context=B,this.refs=Gg,this.updater=t||Lg}vr.prototype.isReactComponent={};vr.prototype.setState=function(e,B){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,B,"setState")};vr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function xg(){}xg.prototype=vr.prototype;function xd(e,B,t){this.props=e,this.context=B,this.refs=Gg,this.updater=t||Lg}var Kd=xd.prototype=new xg;Kd.constructor=xd;Tg(Kd,vr.prototype);Kd.isPureReactComponent=!0;var b2=Array.isArray,Kg=Object.prototype.hasOwnProperty,Qd={current:null},Qg={key:!0,ref:!0,__self:!0,__source:!0};function Jg(e,B,t){var C,n={},r=null,i=null;if(B!=null)for(C in B.ref!==void 0&&(i=B.ref),B.key!==void 0&&(r=""+B.key),B)Kg.call(B,C)&&!Qg.hasOwnProperty(C)&&(n[C]=B[C]);var s=arguments.length-2;if(s===1)n.children=t;else if(1<s){for(var a=Array(s),o=0;o<s;o++)a[o]=arguments[o+2];n.children=a}if(e&&e.defaultProps)for(C in s=e.defaultProps,s)n[C]===void 0&&(n[C]=s[C]);return{$$typeof:as,type:e,key:r,ref:i,props:n,_owner:Qd.current}}function mD(e,B){return{$$typeof:as,type:e.type,key:B,ref:e.ref,props:e.props,_owner:e._owner}}function Jd(e){return typeof e=="object"&&e!==null&&e.$$typeof===as}function gD(e){var B={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return B[t]})}var A2=/\/+/g;function pc(e,B){return typeof e=="object"&&e!==null&&e.key!=null?gD(""+e.key):B.toString(36)}function Ma(e,B,t,C,n){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(r){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case as:case iD:i=!0}}if(i)return i=e,n=n(i),e=C===""?"."+pc(i,0):C,b2(n)?(t="",e!=null&&(t=e.replace(A2,"$&/")+"/"),Ma(n,B,t,"",function(o){return o})):n!=null&&(Jd(n)&&(n=mD(n,t+(!n.key||i&&i.key===n.key?"":(""+n.key).replace(A2,"$&/")+"/")+e)),B.push(n)),1;if(i=0,C=C===""?".":C+":",b2(e))for(var s=0;s<e.length;s++){r=e[s];var a=C+pc(r,s);i+=Ma(r,B,t,a,n)}else if(a=pD(e),typeof a=="function")for(e=a.call(e),s=0;!(r=e.next()).done;)r=r.value,a=C+pc(r,s++),i+=Ma(r,B,t,a,n);else if(r==="object")throw B=String(e),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return i}function Us(e,B,t){if(e==null)return e;var C=[],n=0;return Ma(e,C,"","",function(r){return B.call(t,r,n++)}),C}function bD(e){if(e._status===-1){var B=e._result;B=B(),B.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=B)}if(e._status===1)return e._result.default;throw e._result}var Ce={current:null},La={transition:null},AD={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:La,ReactCurrentOwner:Qd};q.Children={map:Us,forEach:function(e,B,t){Us(e,function(){B.apply(this,arguments)},t)},count:function(e){var B=0;return Us(e,function(){B++}),B},toArray:function(e){return Us(e,function(B){return B})||[]},only:function(e){if(!Jd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};q.Component=vr;q.Fragment=sD;q.Profiler=oD;q.PureComponent=xd;q.StrictMode=aD;q.Suspense=dD;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AD;q.cloneElement=function(e,B,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var C=Tg({},e.props),n=e.key,r=e.ref,i=e._owner;if(B!=null){if(B.ref!==void 0&&(r=B.ref,i=Qd.current),B.key!==void 0&&(n=""+B.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in B)Kg.call(B,a)&&!Qg.hasOwnProperty(a)&&(C[a]=B[a]===void 0&&s!==void 0?s[a]:B[a])}var a=arguments.length-2;if(a===1)C.children=t;else if(1<a){s=Array(a);for(var o=0;o<a;o++)s[o]=arguments[o+2];C.children=s}return{$$typeof:as,type:e.type,key:n,ref:r,props:C,_owner:i}};q.createContext=function(e){return e={$$typeof:cD,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:lD,_context:e},e.Consumer=e};q.createElement=Jg;q.createFactory=function(e){var B=Jg.bind(null,e);return B.type=e,B};q.createRef=function(){return{current:null}};q.forwardRef=function(e){return{$$typeof:uD,render:e}};q.isValidElement=Jd;q.lazy=function(e){return{$$typeof:fD,_payload:{_status:-1,_result:e},_init:bD}};q.memo=function(e,B){return{$$typeof:hD,type:e,compare:B===void 0?null:B}};q.startTransition=function(e){var B=La.transition;La.transition={};try{e()}finally{La.transition=B}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(e,B){return Ce.current.useCallback(e,B)};q.useContext=function(e){return Ce.current.useContext(e)};q.useDebugValue=function(){};q.useDeferredValue=function(e){return Ce.current.useDeferredValue(e)};q.useEffect=function(e,B){return Ce.current.useEffect(e,B)};q.useId=function(){return Ce.current.useId()};q.useImperativeHandle=function(e,B,t){return Ce.current.useImperativeHandle(e,B,t)};q.useInsertionEffect=function(e,B){return Ce.current.useInsertionEffect(e,B)};q.useLayoutEffect=function(e,B){return Ce.current.useLayoutEffect(e,B)};q.useMemo=function(e,B){return Ce.current.useMemo(e,B)};q.useReducer=function(e,B,t){return Ce.current.useReducer(e,B,t)};q.useRef=function(e){return Ce.current.useRef(e)};q.useState=function(e){return Ce.current.useState(e)};q.useSyncExternalStore=function(e,B,t){return Ce.current.useSyncExternalStore(e,B,t)};q.useTransition=function(){return Ce.current.useTransition()};q.version="18.2.0";(function(e){e.exports=q})(rD);const nr=CD(O),vD=tD({__proto__:null,default:nr},[O]);/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var yD=O,ED=Symbol.for("react.element"),ID=Symbol.for("react.fragment"),SD=Object.prototype.hasOwnProperty,wD=yD.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,DD={key:!0,ref:!0,__self:!0,__source:!0};function Ug(e,B,t){var C,n={},r=null,i=null;t!==void 0&&(r=""+t),B.key!==void 0&&(r=""+B.key),B.ref!==void 0&&(i=B.ref);for(C in B)SD.call(B,C)&&!DD.hasOwnProperty(C)&&(n[C]=B[C]);if(e&&e.defaultProps)for(C in B=e.defaultProps,B)n[C]===void 0&&(n[C]=B[C]);return{$$typeof:ED,type:e,key:r,ref:i,props:n,_owner:wD.current}}dl.Fragment=ID;dl.jsx=Ug;dl.jsxs=Ug;(function(e){e.exports=dl})(nD);const Co=bi.Fragment,D=bi.jsx,z=bi.jsxs;var Hu={},Mu={},kD={get exports(){return Mu},set exports(e){Mu=e}},ke={},Lu={},PD={get exports(){return Lu},set exports(e){Lu=e}},Vg={};/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/(function(e){function B(P,G){var x=P.length;P.push(G);B:for(;0<x;){var eB=x-1>>>1,yB=P[eB];if(0<n(yB,G))P[eB]=G,P[x]=yB,x=eB;else break B}}function t(P){return P.length===0?null:P[0]}function C(P){if(P.length===0)return null;var G=P[0],x=P.pop();if(x!==G){P[0]=x;B:for(var eB=0,yB=P.length,Ue=yB>>>1;eB<Ue;){var sB=2*(eB+1)-1,Oe=P[sB],zB=sB+1,it=P[zB];if(0>n(Oe,x))zB<yB&&0>n(it,Oe)?(P[eB]=it,P[zB]=x,eB=zB):(P[eB]=Oe,P[sB]=x,eB=sB);else if(zB<yB&&0>n(it,x))P[eB]=it,P[zB]=x,eB=zB;else break B}}return G}function n(P,G){var x=P.sortIndex-G.sortIndex;return x!==0?x:P.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var a=[],o=[],c=1,l=null,u=3,m=!1,d=!1,f=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(P){for(var G=t(o);G!==null;){if(G.callback===null)C(o);else if(G.startTime<=P)C(o),G.sortIndex=G.expirationTime,B(a,G);else break;G=t(o)}}function A(P){if(f=!1,b(P),!d)if(t(a)!==null)d=!0,VB(y);else{var G=t(o);G!==null&&MB(A,G.startTime-P)}}function y(P,G){d=!1,f&&(f=!1,h(v),v=-1),m=!0;var x=u;try{for(b(G),l=t(a);l!==null&&(!(l.expirationTime>G)||P&&!j());){var eB=l.callback;if(typeof eB=="function"){l.callback=null,u=l.priorityLevel;var yB=eB(l.expirationTime<=G);G=e.unstable_now(),typeof yB=="function"?l.callback=yB:l===t(a)&&C(a),b(G)}else C(a);l=t(a)}if(l!==null)var Ue=!0;else{var sB=t(o);sB!==null&&MB(A,sB.startTime-G),Ue=!1}return Ue}finally{l=null,u=x,m=!1}}var I=!1,E=null,v=-1,w=5,M=-1;function j(){return!(e.unstable_now()-M<w)}function Q(){if(E!==null){var P=e.unstable_now();M=P;var G=!0;try{G=E(!0,P)}finally{G?BB():(I=!1,E=null)}}else I=!1}var BB;if(typeof p=="function")BB=function(){p(Q)};else if(typeof MessageChannel<"u"){var lB=new MessageChannel,be=lB.port2;lB.port1.onmessage=Q,BB=function(){be.postMessage(null)}}else BB=function(){g(Q,0)};function VB(P){E=P,I||(I=!0,BB())}function MB(P,G){v=g(function(){P(e.unstable_now())},G)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){d||m||(d=!0,VB(y))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return u},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(P){switch(u){case 1:case 2:case 3:var G=3;break;default:G=u}var x=u;u=G;try{return P()}finally{u=x}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,G){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var x=u;u=P;try{return G()}finally{u=x}},e.unstable_scheduleCallback=function(P,G,x){var eB=e.unstable_now();switch(typeof x=="object"&&x!==null?(x=x.delay,x=typeof x=="number"&&0<x?eB+x:eB):x=eB,P){case 1:var yB=-1;break;case 2:yB=250;break;case 5:yB=1073741823;break;case 4:yB=1e4;break;default:yB=5e3}return yB=x+yB,P={id:c++,callback:G,priorityLevel:P,startTime:x,expirationTime:yB,sortIndex:-1},x>eB?(P.sortIndex=x,B(o,P),t(a)===null&&P===t(o)&&(f?(h(v),v=-1):f=!0,MB(A,x-eB))):(P.sortIndex=yB,B(a,P),d||m||(d=!0,VB(y))),P},e.unstable_shouldYield=j,e.unstable_wrapCallback=function(P){var G=u;return function(){var x=u;u=G;try{return P.apply(this,arguments)}finally{u=x}}}})(Vg);(function(e){e.exports=Vg})(PD);/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Wg=O,De=Lu;function S(e){for(var B="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)B+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+B+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jg=new Set,Ai={};function mn(e,B){rr(e,B),rr(e+"Capture",B)}function rr(e,B){for(Ai[e]=B,e=0;e<B.length;e++)jg.add(B[e])}var Ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tu=Object.prototype.hasOwnProperty,ND=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v2={},y2={};function FD(e){return Tu.call(y2,e)?!0:Tu.call(v2,e)?!1:ND.test(e)?y2[e]=!0:(v2[e]=!0,!1)}function OD(e,B,t,C){if(t!==null&&t.type===0)return!1;switch(typeof B){case"function":case"symbol":return!0;case"boolean":return C?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function RD(e,B,t,C){if(B===null||typeof B>"u"||OD(e,B,t,C))return!0;if(C)return!1;if(t!==null)switch(t.type){case 3:return!B;case 4:return B===!1;case 5:return isNaN(B);case 6:return isNaN(B)||1>B}return!1}function ne(e,B,t,C,n,r,i){this.acceptsBooleans=B===2||B===3||B===4,this.attributeName=C,this.attributeNamespace=n,this.mustUseProperty=t,this.propertyName=e,this.type=B,this.sanitizeURL=r,this.removeEmptyString=i}var UB={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){UB[e]=new ne(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var B=e[0];UB[B]=new ne(B,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){UB[e]=new ne(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){UB[e]=new ne(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){UB[e]=new ne(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){UB[e]=new ne(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){UB[e]=new ne(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){UB[e]=new ne(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){UB[e]=new ne(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ud=/[\-:]([a-z])/g;function Vd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var B=e.replace(Ud,Vd);UB[B]=new ne(B,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var B=e.replace(Ud,Vd);UB[B]=new ne(B,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var B=e.replace(Ud,Vd);UB[B]=new ne(B,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){UB[e]=new ne(e,1,!1,e.toLowerCase(),null,!1,!1)});UB.xlinkHref=new ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){UB[e]=new ne(e,1,!1,e.toLowerCase(),null,!0,!0)});function Wd(e,B,t,C){var n=UB.hasOwnProperty(B)?UB[B]:null;(n!==null?n.type!==0:C||!(2<B.length)||B[0]!=="o"&&B[0]!=="O"||B[1]!=="n"&&B[1]!=="N")&&(RD(B,t,n,C)&&(t=null),C||n===null?FD(B)&&(t===null?e.removeAttribute(B):e.setAttribute(B,""+t)):n.mustUseProperty?e[n.propertyName]=t===null?n.type===3?!1:"":t:(B=n.attributeName,C=n.attributeNamespace,t===null?e.removeAttribute(B):(n=n.type,t=n===3||n===4&&t===!0?"":""+t,C?e.setAttributeNS(C,B,t):e.setAttribute(B,t))))}var Ut=Wg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vs=Symbol.for("react.element"),Nn=Symbol.for("react.portal"),Fn=Symbol.for("react.fragment"),jd=Symbol.for("react.strict_mode"),Gu=Symbol.for("react.profiler"),Yg=Symbol.for("react.provider"),Xg=Symbol.for("react.context"),Yd=Symbol.for("react.forward_ref"),xu=Symbol.for("react.suspense"),Ku=Symbol.for("react.suspense_list"),Xd=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),Zg=Symbol.for("react.offscreen"),E2=Symbol.iterator;function Or(e){return e===null||typeof e!="object"?null:(e=E2&&e[E2]||e["@@iterator"],typeof e=="function"?e:null)}var vB=Object.assign,mc;function qr(e){if(mc===void 0)try{throw Error()}catch(t){var B=t.stack.trim().match(/\n( *(at )?)/);mc=B&&B[1]||""}return`
`+mc+e}var gc=!1;function bc(e,B){if(!e||gc)return"";gc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(B)if(B=function(){throw Error()},Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(o){var C=o}Reflect.construct(e,[],B)}else{try{B.call()}catch(o){C=o}e.call(B.prototype)}else{try{throw Error()}catch(o){C=o}e()}}catch(o){if(o&&C&&typeof o.stack=="string"){for(var n=o.stack.split(`
`),r=C.stack.split(`
`),i=n.length-1,s=r.length-1;1<=i&&0<=s&&n[i]!==r[s];)s--;for(;1<=i&&0<=s;i--,s--)if(n[i]!==r[s]){if(i!==1||s!==1)do if(i--,s--,0>s||n[i]!==r[s]){var a=`
`+n[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=s);break}}}finally{gc=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?qr(e):""}function HD(e){switch(e.tag){case 5:return qr(e.type);case 16:return qr("Lazy");case 13:return qr("Suspense");case 19:return qr("SuspenseList");case 0:case 2:case 15:return e=bc(e.type,!1),e;case 11:return e=bc(e.type.render,!1),e;case 1:return e=bc(e.type,!0),e;default:return""}}function Qu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Fn:return"Fragment";case Nn:return"Portal";case Gu:return"Profiler";case jd:return"StrictMode";case xu:return"Suspense";case Ku:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xg:return(e.displayName||"Context")+".Consumer";case Yg:return(e._context.displayName||"Context")+".Provider";case Yd:var B=e.render;return e=e.displayName,e||(e=B.displayName||B.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xd:return B=e.displayName||null,B!==null?B:Qu(e.type)||"Memo";case _t:B=e._payload,e=e._init;try{return Qu(e(B))}catch{}}return null}function MD(e){var B=e.type;switch(e.tag){case 24:return"Cache";case 9:return(B.displayName||"Context")+".Consumer";case 10:return(B._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=B.render,e=e.displayName||e.name||"",B.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return B;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qu(B);case 8:return B===jd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof B=="function")return B.displayName||B.name||null;if(typeof B=="string")return B}return null}function EC(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qg(e){var B=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(B==="checkbox"||B==="radio")}function LD(e){var B=qg(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,B),C=""+e[B];if(!e.hasOwnProperty(B)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var n=t.get,r=t.set;return Object.defineProperty(e,B,{configurable:!0,get:function(){return n.call(this)},set:function(i){C=""+i,r.call(this,i)}}),Object.defineProperty(e,B,{enumerable:t.enumerable}),{getValue:function(){return C},setValue:function(i){C=""+i},stopTracking:function(){e._valueTracker=null,delete e[B]}}}}function Ws(e){e._valueTracker||(e._valueTracker=LD(e))}function zg(e){if(!e)return!1;var B=e._valueTracker;if(!B)return!0;var t=B.getValue(),C="";return e&&(C=qg(e)?e.checked?"true":"false":e.value),e=C,e!==t?(B.setValue(e),!0):!1}function no(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ju(e,B){var t=B.checked;return vB({},B,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function I2(e,B){var t=B.defaultValue==null?"":B.defaultValue,C=B.checked!=null?B.checked:B.defaultChecked;t=EC(B.value!=null?B.value:t),e._wrapperState={initialChecked:C,initialValue:t,controlled:B.type==="checkbox"||B.type==="radio"?B.checked!=null:B.value!=null}}function _g(e,B){B=B.checked,B!=null&&Wd(e,"checked",B,!1)}function Uu(e,B){_g(e,B);var t=EC(B.value),C=B.type;if(t!=null)C==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(C==="submit"||C==="reset"){e.removeAttribute("value");return}B.hasOwnProperty("value")?Vu(e,B.type,t):B.hasOwnProperty("defaultValue")&&Vu(e,B.type,EC(B.defaultValue)),B.checked==null&&B.defaultChecked!=null&&(e.defaultChecked=!!B.defaultChecked)}function S2(e,B,t){if(B.hasOwnProperty("value")||B.hasOwnProperty("defaultValue")){var C=B.type;if(!(C!=="submit"&&C!=="reset"||B.value!==void 0&&B.value!==null))return;B=""+e._wrapperState.initialValue,t||B===e.value||(e.value=B),e.defaultValue=B}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Vu(e,B,t){(B!=="number"||no(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var zr=Array.isArray;function jn(e,B,t,C){if(e=e.options,B){B={};for(var n=0;n<t.length;n++)B["$"+t[n]]=!0;for(t=0;t<e.length;t++)n=B.hasOwnProperty("$"+e[t].value),e[t].selected!==n&&(e[t].selected=n),n&&C&&(e[t].defaultSelected=!0)}else{for(t=""+EC(t),B=null,n=0;n<e.length;n++){if(e[n].value===t){e[n].selected=!0,C&&(e[n].defaultSelected=!0);return}B!==null||e[n].disabled||(B=e[n])}B!==null&&(B.selected=!0)}}function Wu(e,B){if(B.dangerouslySetInnerHTML!=null)throw Error(S(91));return vB({},B,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function w2(e,B){var t=B.value;if(t==null){if(t=B.children,B=B.defaultValue,t!=null){if(B!=null)throw Error(S(92));if(zr(t)){if(1<t.length)throw Error(S(93));t=t[0]}B=t}B==null&&(B=""),t=B}e._wrapperState={initialValue:EC(t)}}function $g(e,B){var t=EC(B.value),C=EC(B.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),B.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),C!=null&&(e.defaultValue=""+C)}function D2(e){var B=e.textContent;B===e._wrapperState.initialValue&&B!==""&&B!==null&&(e.value=B)}function Bb(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ju(e,B){return e==null||e==="http://www.w3.org/1999/xhtml"?Bb(B):e==="http://www.w3.org/2000/svg"&&B==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var js,eb=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(B,t,C,n){MSApp.execUnsafeLocalFunction(function(){return e(B,t,C,n)})}:e}(function(e,B){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=B;else{for(js=js||document.createElement("div"),js.innerHTML="<svg>"+B.valueOf().toString()+"</svg>",B=js.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;B.firstChild;)e.appendChild(B.firstChild)}});function vi(e,B){if(B){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=B;return}}e.textContent=B}var ti={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},TD=["Webkit","ms","Moz","O"];Object.keys(ti).forEach(function(e){TD.forEach(function(B){B=B+e.charAt(0).toUpperCase()+e.substring(1),ti[B]=ti[e]})});function tb(e,B,t){return B==null||typeof B=="boolean"||B===""?"":t||typeof B!="number"||B===0||ti.hasOwnProperty(e)&&ti[e]?(""+B).trim():B+"px"}function Cb(e,B){e=e.style;for(var t in B)if(B.hasOwnProperty(t)){var C=t.indexOf("--")===0,n=tb(t,B[t],C);t==="float"&&(t="cssFloat"),C?e.setProperty(t,n):e[t]=n}}var GD=vB({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yu(e,B){if(B){if(GD[e]&&(B.children!=null||B.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(B.dangerouslySetInnerHTML!=null){if(B.children!=null)throw Error(S(60));if(typeof B.dangerouslySetInnerHTML!="object"||!("__html"in B.dangerouslySetInnerHTML))throw Error(S(61))}if(B.style!=null&&typeof B.style!="object")throw Error(S(62))}}function Xu(e,B){if(e.indexOf("-")===-1)return typeof B.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zu=null;function Zd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qu=null,Yn=null,Xn=null;function k2(e){if(e=cs(e)){if(typeof qu!="function")throw Error(S(280));var B=e.stateNode;B&&(B=gl(B),qu(e.stateNode,e.type,B))}}function nb(e){Yn?Xn?Xn.push(e):Xn=[e]:Yn=e}function rb(){if(Yn){var e=Yn,B=Xn;if(Xn=Yn=null,k2(e),B)for(e=0;e<B.length;e++)k2(B[e])}}function ib(e,B){return e(B)}function sb(){}var Ac=!1;function ab(e,B,t){if(Ac)return e(B,t);Ac=!0;try{return ib(e,B,t)}finally{Ac=!1,(Yn!==null||Xn!==null)&&(sb(),rb())}}function yi(e,B){var t=e.stateNode;if(t===null)return null;var C=gl(t);if(C===null)return null;t=C[B];B:switch(B){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(C=!C.disabled)||(e=e.type,C=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!C;break B;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(S(231,B,typeof t));return t}var zu=!1;if(Ht)try{var Rr={};Object.defineProperty(Rr,"passive",{get:function(){zu=!0}}),window.addEventListener("test",Rr,Rr),window.removeEventListener("test",Rr,Rr)}catch{zu=!1}function xD(e,B,t,C,n,r,i,s,a){var o=Array.prototype.slice.call(arguments,3);try{B.apply(t,o)}catch(c){this.onError(c)}}var Ci=!1,ro=null,io=!1,_u=null,KD={onError:function(e){Ci=!0,ro=e}};function QD(e,B,t,C,n,r,i,s,a){Ci=!1,ro=null,xD.apply(KD,arguments)}function JD(e,B,t,C,n,r,i,s,a){if(QD.apply(this,arguments),Ci){if(Ci){var o=ro;Ci=!1,ro=null}else throw Error(S(198));io||(io=!0,_u=o)}}function gn(e){var B=e,t=e;if(e.alternate)for(;B.return;)B=B.return;else{e=B;do B=e,B.flags&4098&&(t=B.return),e=B.return;while(e)}return B.tag===3?t:null}function ob(e){if(e.tag===13){var B=e.memoizedState;if(B===null&&(e=e.alternate,e!==null&&(B=e.memoizedState)),B!==null)return B.dehydrated}return null}function P2(e){if(gn(e)!==e)throw Error(S(188))}function UD(e){var B=e.alternate;if(!B){if(B=gn(e),B===null)throw Error(S(188));return B!==e?null:e}for(var t=e,C=B;;){var n=t.return;if(n===null)break;var r=n.alternate;if(r===null){if(C=n.return,C!==null){t=C;continue}break}if(n.child===r.child){for(r=n.child;r;){if(r===t)return P2(n),e;if(r===C)return P2(n),B;r=r.sibling}throw Error(S(188))}if(t.return!==C.return)t=n,C=r;else{for(var i=!1,s=n.child;s;){if(s===t){i=!0,t=n,C=r;break}if(s===C){i=!0,C=n,t=r;break}s=s.sibling}if(!i){for(s=r.child;s;){if(s===t){i=!0,t=r,C=n;break}if(s===C){i=!0,C=r,t=n;break}s=s.sibling}if(!i)throw Error(S(189))}}if(t.alternate!==C)throw Error(S(190))}if(t.tag!==3)throw Error(S(188));return t.stateNode.current===t?e:B}function lb(e){return e=UD(e),e!==null?cb(e):null}function cb(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var B=cb(e);if(B!==null)return B;e=e.sibling}return null}var ub=De.unstable_scheduleCallback,N2=De.unstable_cancelCallback,VD=De.unstable_shouldYield,WD=De.unstable_requestPaint,DB=De.unstable_now,jD=De.unstable_getCurrentPriorityLevel,qd=De.unstable_ImmediatePriority,db=De.unstable_UserBlockingPriority,so=De.unstable_NormalPriority,YD=De.unstable_LowPriority,hb=De.unstable_IdlePriority,hl=null,ut=null;function XD(e){if(ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(hl,e,void 0,(e.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:zD,ZD=Math.log,qD=Math.LN2;function zD(e){return e>>>=0,e===0?32:31-(ZD(e)/qD|0)|0}var Ys=64,Xs=4194304;function _r(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ao(e,B){var t=e.pendingLanes;if(t===0)return 0;var C=0,n=e.suspendedLanes,r=e.pingedLanes,i=t&268435455;if(i!==0){var s=i&~n;s!==0?C=_r(s):(r&=i,r!==0&&(C=_r(r)))}else i=t&~n,i!==0?C=_r(i):r!==0&&(C=_r(r));if(C===0)return 0;if(B!==0&&B!==C&&!(B&n)&&(n=C&-C,r=B&-B,n>=r||n===16&&(r&4194240)!==0))return B;if(C&4&&(C|=t&16),B=e.entangledLanes,B!==0)for(e=e.entanglements,B&=C;0<B;)t=31-Bt(B),n=1<<t,C|=e[t],B&=~n;return C}function _D(e,B){switch(e){case 1:case 2:case 4:return B+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return B+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $D(e,B){for(var t=e.suspendedLanes,C=e.pingedLanes,n=e.expirationTimes,r=e.pendingLanes;0<r;){var i=31-Bt(r),s=1<<i,a=n[i];a===-1?(!(s&t)||s&C)&&(n[i]=_D(s,B)):a<=B&&(e.expiredLanes|=s),r&=~s}}function $u(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fb(){var e=Ys;return Ys<<=1,!(Ys&4194240)&&(Ys=64),e}function vc(e){for(var B=[],t=0;31>t;t++)B.push(e);return B}function os(e,B,t){e.pendingLanes|=B,B!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,B=31-Bt(B),e[B]=t}function Bk(e,B){var t=e.pendingLanes&~B;e.pendingLanes=B,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=B,e.mutableReadLanes&=B,e.entangledLanes&=B,B=e.entanglements;var C=e.eventTimes;for(e=e.expirationTimes;0<t;){var n=31-Bt(t),r=1<<n;B[n]=0,C[n]=-1,e[n]=-1,t&=~r}}function zd(e,B){var t=e.entangledLanes|=B;for(e=e.entanglements;t;){var C=31-Bt(t),n=1<<C;n&B|e[C]&B&&(e[C]|=B),t&=~n}}var tB=0;function pb(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var mb,_d,gb,bb,Ab,B1=!1,Zs=[],oC=null,lC=null,cC=null,Ei=new Map,Ii=new Map,BC=[],ek="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function F2(e,B){switch(e){case"focusin":case"focusout":oC=null;break;case"dragenter":case"dragleave":lC=null;break;case"mouseover":case"mouseout":cC=null;break;case"pointerover":case"pointerout":Ei.delete(B.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ii.delete(B.pointerId)}}function Hr(e,B,t,C,n,r){return e===null||e.nativeEvent!==r?(e={blockedOn:B,domEventName:t,eventSystemFlags:C,nativeEvent:r,targetContainers:[n]},B!==null&&(B=cs(B),B!==null&&_d(B)),e):(e.eventSystemFlags|=C,B=e.targetContainers,n!==null&&B.indexOf(n)===-1&&B.push(n),e)}function tk(e,B,t,C,n){switch(B){case"focusin":return oC=Hr(oC,e,B,t,C,n),!0;case"dragenter":return lC=Hr(lC,e,B,t,C,n),!0;case"mouseover":return cC=Hr(cC,e,B,t,C,n),!0;case"pointerover":var r=n.pointerId;return Ei.set(r,Hr(Ei.get(r)||null,e,B,t,C,n)),!0;case"gotpointercapture":return r=n.pointerId,Ii.set(r,Hr(Ii.get(r)||null,e,B,t,C,n)),!0}return!1}function vb(e){var B=KC(e.target);if(B!==null){var t=gn(B);if(t!==null){if(B=t.tag,B===13){if(B=ob(t),B!==null){e.blockedOn=B,Ab(e.priority,function(){gb(t)});return}}else if(B===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ta(e){if(e.blockedOn!==null)return!1;for(var B=e.targetContainers;0<B.length;){var t=e1(e.domEventName,e.eventSystemFlags,B[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var C=new t.constructor(t.type,t);Zu=C,t.target.dispatchEvent(C),Zu=null}else return B=cs(t),B!==null&&_d(B),e.blockedOn=t,!1;B.shift()}return!0}function O2(e,B,t){Ta(e)&&t.delete(B)}function Ck(){B1=!1,oC!==null&&Ta(oC)&&(oC=null),lC!==null&&Ta(lC)&&(lC=null),cC!==null&&Ta(cC)&&(cC=null),Ei.forEach(O2),Ii.forEach(O2)}function Mr(e,B){e.blockedOn===B&&(e.blockedOn=null,B1||(B1=!0,De.unstable_scheduleCallback(De.unstable_NormalPriority,Ck)))}function Si(e){function B(n){return Mr(n,e)}if(0<Zs.length){Mr(Zs[0],e);for(var t=1;t<Zs.length;t++){var C=Zs[t];C.blockedOn===e&&(C.blockedOn=null)}}for(oC!==null&&Mr(oC,e),lC!==null&&Mr(lC,e),cC!==null&&Mr(cC,e),Ei.forEach(B),Ii.forEach(B),t=0;t<BC.length;t++)C=BC[t],C.blockedOn===e&&(C.blockedOn=null);for(;0<BC.length&&(t=BC[0],t.blockedOn===null);)vb(t),t.blockedOn===null&&BC.shift()}var Zn=Ut.ReactCurrentBatchConfig,oo=!0;function nk(e,B,t,C){var n=tB,r=Zn.transition;Zn.transition=null;try{tB=1,$d(e,B,t,C)}finally{tB=n,Zn.transition=r}}function rk(e,B,t,C){var n=tB,r=Zn.transition;Zn.transition=null;try{tB=4,$d(e,B,t,C)}finally{tB=n,Zn.transition=r}}function $d(e,B,t,C){if(oo){var n=e1(e,B,t,C);if(n===null)Fc(e,B,C,lo,t),F2(e,C);else if(tk(n,e,B,t,C))C.stopPropagation();else if(F2(e,C),B&4&&-1<ek.indexOf(e)){for(;n!==null;){var r=cs(n);if(r!==null&&mb(r),r=e1(e,B,t,C),r===null&&Fc(e,B,C,lo,t),r===n)break;n=r}n!==null&&C.stopPropagation()}else Fc(e,B,C,null,t)}}var lo=null;function e1(e,B,t,C){if(lo=null,e=Zd(C),e=KC(e),e!==null)if(B=gn(e),B===null)e=null;else if(t=B.tag,t===13){if(e=ob(B),e!==null)return e;e=null}else if(t===3){if(B.stateNode.current.memoizedState.isDehydrated)return B.tag===3?B.stateNode.containerInfo:null;e=null}else B!==e&&(e=null);return lo=e,null}function yb(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jD()){case qd:return 1;case db:return 4;case so:case YD:return 16;case hb:return 536870912;default:return 16}default:return 16}}var iC=null,Bh=null,Ga=null;function Eb(){if(Ga)return Ga;var e,B=Bh,t=B.length,C,n="value"in iC?iC.value:iC.textContent,r=n.length;for(e=0;e<t&&B[e]===n[e];e++);var i=t-e;for(C=1;C<=i&&B[t-C]===n[r-C];C++);return Ga=n.slice(e,1<C?1-C:void 0)}function xa(e){var B=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&B===13&&(e=13)):e=B,e===10&&(e=13),32<=e||e===13?e:0}function qs(){return!0}function R2(){return!1}function Pe(e){function B(t,C,n,r,i){this._reactName=t,this._targetInst=n,this.type=C,this.nativeEvent=r,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(r):r[s]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?qs:R2,this.isPropagationStopped=R2,this}return vB(B.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=qs)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=qs)},persist:function(){},isPersistent:qs}),B}var yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eh=Pe(yr),ls=vB({},yr,{view:0,detail:0}),ik=Pe(ls),yc,Ec,Lr,fl=vB({},ls,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:th,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lr&&(Lr&&e.type==="mousemove"?(yc=e.screenX-Lr.screenX,Ec=e.screenY-Lr.screenY):Ec=yc=0,Lr=e),yc)},movementY:function(e){return"movementY"in e?e.movementY:Ec}}),H2=Pe(fl),sk=vB({},fl,{dataTransfer:0}),ak=Pe(sk),ok=vB({},ls,{relatedTarget:0}),Ic=Pe(ok),lk=vB({},yr,{animationName:0,elapsedTime:0,pseudoElement:0}),ck=Pe(lk),uk=vB({},yr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dk=Pe(uk),hk=vB({},yr,{data:0}),M2=Pe(hk),fk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gk(e){var B=this.nativeEvent;return B.getModifierState?B.getModifierState(e):(e=mk[e])?!!B[e]:!1}function th(){return gk}var bk=vB({},ls,{key:function(e){if(e.key){var B=fk[e.key]||e.key;if(B!=="Unidentified")return B}return e.type==="keypress"?(e=xa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pk[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:th,charCode:function(e){return e.type==="keypress"?xa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ak=Pe(bk),vk=vB({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),L2=Pe(vk),yk=vB({},ls,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:th}),Ek=Pe(yk),Ik=vB({},yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sk=Pe(Ik),wk=vB({},fl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dk=Pe(wk),kk=[9,13,27,32],Ch=Ht&&"CompositionEvent"in window,ni=null;Ht&&"documentMode"in document&&(ni=document.documentMode);var Pk=Ht&&"TextEvent"in window&&!ni,Ib=Ht&&(!Ch||ni&&8<ni&&11>=ni),T2=String.fromCharCode(32),G2=!1;function Sb(e,B){switch(e){case"keyup":return kk.indexOf(B.keyCode)!==-1;case"keydown":return B.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wb(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var On=!1;function Nk(e,B){switch(e){case"compositionend":return wb(B);case"keypress":return B.which!==32?null:(G2=!0,T2);case"textInput":return e=B.data,e===T2&&G2?null:e;default:return null}}function Fk(e,B){if(On)return e==="compositionend"||!Ch&&Sb(e,B)?(e=Eb(),Ga=Bh=iC=null,On=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(B.ctrlKey||B.altKey||B.metaKey)||B.ctrlKey&&B.altKey){if(B.char&&1<B.char.length)return B.char;if(B.which)return String.fromCharCode(B.which)}return null;case"compositionend":return Ib&&B.locale!=="ko"?null:B.data;default:return null}}var Ok={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function x2(e){var B=e&&e.nodeName&&e.nodeName.toLowerCase();return B==="input"?!!Ok[e.type]:B==="textarea"}function Db(e,B,t,C){nb(C),B=co(B,"onChange"),0<B.length&&(t=new eh("onChange","change",null,t,C),e.push({event:t,listeners:B}))}var ri=null,wi=null;function Rk(e){Gb(e,0)}function pl(e){var B=Mn(e);if(zg(B))return e}function Hk(e,B){if(e==="change")return B}var kb=!1;if(Ht){var Sc;if(Ht){var wc="oninput"in document;if(!wc){var K2=document.createElement("div");K2.setAttribute("oninput","return;"),wc=typeof K2.oninput=="function"}Sc=wc}else Sc=!1;kb=Sc&&(!document.documentMode||9<document.documentMode)}function Q2(){ri&&(ri.detachEvent("onpropertychange",Pb),wi=ri=null)}function Pb(e){if(e.propertyName==="value"&&pl(wi)){var B=[];Db(B,wi,e,Zd(e)),ab(Rk,B)}}function Mk(e,B,t){e==="focusin"?(Q2(),ri=B,wi=t,ri.attachEvent("onpropertychange",Pb)):e==="focusout"&&Q2()}function Lk(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pl(wi)}function Tk(e,B){if(e==="click")return pl(B)}function Gk(e,B){if(e==="input"||e==="change")return pl(B)}function xk(e,B){return e===B&&(e!==0||1/e===1/B)||e!==e&&B!==B}var nt=typeof Object.is=="function"?Object.is:xk;function Di(e,B){if(nt(e,B))return!0;if(typeof e!="object"||e===null||typeof B!="object"||B===null)return!1;var t=Object.keys(e),C=Object.keys(B);if(t.length!==C.length)return!1;for(C=0;C<t.length;C++){var n=t[C];if(!Tu.call(B,n)||!nt(e[n],B[n]))return!1}return!0}function J2(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function U2(e,B){var t=J2(e);e=0;for(var C;t;){if(t.nodeType===3){if(C=e+t.textContent.length,e<=B&&C>=B)return{node:t,offset:B-e};e=C}B:{for(;t;){if(t.nextSibling){t=t.nextSibling;break B}t=t.parentNode}t=void 0}t=J2(t)}}function Nb(e,B){return e&&B?e===B?!0:e&&e.nodeType===3?!1:B&&B.nodeType===3?Nb(e,B.parentNode):"contains"in e?e.contains(B):e.compareDocumentPosition?!!(e.compareDocumentPosition(B)&16):!1:!1}function Fb(){for(var e=window,B=no();B instanceof e.HTMLIFrameElement;){try{var t=typeof B.contentWindow.location.href=="string"}catch{t=!1}if(t)e=B.contentWindow;else break;B=no(e.document)}return B}function nh(e){var B=e&&e.nodeName&&e.nodeName.toLowerCase();return B&&(B==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||B==="textarea"||e.contentEditable==="true")}function Kk(e){var B=Fb(),t=e.focusedElem,C=e.selectionRange;if(B!==t&&t&&t.ownerDocument&&Nb(t.ownerDocument.documentElement,t)){if(C!==null&&nh(t)){if(B=C.start,e=C.end,e===void 0&&(e=B),"selectionStart"in t)t.selectionStart=B,t.selectionEnd=Math.min(e,t.value.length);else if(e=(B=t.ownerDocument||document)&&B.defaultView||window,e.getSelection){e=e.getSelection();var n=t.textContent.length,r=Math.min(C.start,n);C=C.end===void 0?r:Math.min(C.end,n),!e.extend&&r>C&&(n=C,C=r,r=n),n=U2(t,r);var i=U2(t,C);n&&i&&(e.rangeCount!==1||e.anchorNode!==n.node||e.anchorOffset!==n.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(B=B.createRange(),B.setStart(n.node,n.offset),e.removeAllRanges(),r>C?(e.addRange(B),e.extend(i.node,i.offset)):(B.setEnd(i.node,i.offset),e.addRange(B)))}}for(B=[],e=t;e=e.parentNode;)e.nodeType===1&&B.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<B.length;t++)e=B[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qk=Ht&&"documentMode"in document&&11>=document.documentMode,Rn=null,t1=null,ii=null,C1=!1;function V2(e,B,t){var C=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;C1||Rn==null||Rn!==no(C)||(C=Rn,"selectionStart"in C&&nh(C)?C={start:C.selectionStart,end:C.selectionEnd}:(C=(C.ownerDocument&&C.ownerDocument.defaultView||window).getSelection(),C={anchorNode:C.anchorNode,anchorOffset:C.anchorOffset,focusNode:C.focusNode,focusOffset:C.focusOffset}),ii&&Di(ii,C)||(ii=C,C=co(t1,"onSelect"),0<C.length&&(B=new eh("onSelect","select",null,B,t),e.push({event:B,listeners:C}),B.target=Rn)))}function zs(e,B){var t={};return t[e.toLowerCase()]=B.toLowerCase(),t["Webkit"+e]="webkit"+B,t["Moz"+e]="moz"+B,t}var Hn={animationend:zs("Animation","AnimationEnd"),animationiteration:zs("Animation","AnimationIteration"),animationstart:zs("Animation","AnimationStart"),transitionend:zs("Transition","TransitionEnd")},Dc={},Ob={};Ht&&(Ob=document.createElement("div").style,"AnimationEvent"in window||(delete Hn.animationend.animation,delete Hn.animationiteration.animation,delete Hn.animationstart.animation),"TransitionEvent"in window||delete Hn.transitionend.transition);function ml(e){if(Dc[e])return Dc[e];if(!Hn[e])return e;var B=Hn[e],t;for(t in B)if(B.hasOwnProperty(t)&&t in Ob)return Dc[e]=B[t];return e}var Rb=ml("animationend"),Hb=ml("animationiteration"),Mb=ml("animationstart"),Lb=ml("transitionend"),Tb=new Map,W2="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function OC(e,B){Tb.set(e,B),mn(B,[e])}for(var kc=0;kc<W2.length;kc++){var Pc=W2[kc],Jk=Pc.toLowerCase(),Uk=Pc[0].toUpperCase()+Pc.slice(1);OC(Jk,"on"+Uk)}OC(Rb,"onAnimationEnd");OC(Hb,"onAnimationIteration");OC(Mb,"onAnimationStart");OC("dblclick","onDoubleClick");OC("focusin","onFocus");OC("focusout","onBlur");OC(Lb,"onTransitionEnd");rr("onMouseEnter",["mouseout","mouseover"]);rr("onMouseLeave",["mouseout","mouseover"]);rr("onPointerEnter",["pointerout","pointerover"]);rr("onPointerLeave",["pointerout","pointerover"]);mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vk=new Set("cancel close invalid load scroll toggle".split(" ").concat($r));function j2(e,B,t){var C=e.type||"unknown-event";e.currentTarget=t,JD(C,B,void 0,e),e.currentTarget=null}function Gb(e,B){B=(B&4)!==0;for(var t=0;t<e.length;t++){var C=e[t],n=C.event;C=C.listeners;B:{var r=void 0;if(B)for(var i=C.length-1;0<=i;i--){var s=C[i],a=s.instance,o=s.currentTarget;if(s=s.listener,a!==r&&n.isPropagationStopped())break B;j2(n,s,o),r=a}else for(i=0;i<C.length;i++){if(s=C[i],a=s.instance,o=s.currentTarget,s=s.listener,a!==r&&n.isPropagationStopped())break B;j2(n,s,o),r=a}}}if(io)throw e=_u,io=!1,_u=null,e}function uB(e,B){var t=B[a1];t===void 0&&(t=B[a1]=new Set);var C=e+"__bubble";t.has(C)||(xb(B,e,2,!1),t.add(C))}function Nc(e,B,t){var C=0;B&&(C|=4),xb(t,e,C,B)}var _s="_reactListening"+Math.random().toString(36).slice(2);function ki(e){if(!e[_s]){e[_s]=!0,jg.forEach(function(t){t!=="selectionchange"&&(Vk.has(t)||Nc(t,!1,e),Nc(t,!0,e))});var B=e.nodeType===9?e:e.ownerDocument;B===null||B[_s]||(B[_s]=!0,Nc("selectionchange",!1,B))}}function xb(e,B,t,C){switch(yb(B)){case 1:var n=nk;break;case 4:n=rk;break;default:n=$d}t=n.bind(null,B,t,e),n=void 0,!zu||B!=="touchstart"&&B!=="touchmove"&&B!=="wheel"||(n=!0),C?n!==void 0?e.addEventListener(B,t,{capture:!0,passive:n}):e.addEventListener(B,t,!0):n!==void 0?e.addEventListener(B,t,{passive:n}):e.addEventListener(B,t,!1)}function Fc(e,B,t,C,n){var r=C;if(!(B&1)&&!(B&2)&&C!==null)B:for(;;){if(C===null)return;var i=C.tag;if(i===3||i===4){var s=C.stateNode.containerInfo;if(s===n||s.nodeType===8&&s.parentNode===n)break;if(i===4)for(i=C.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===n||a.nodeType===8&&a.parentNode===n))return;i=i.return}for(;s!==null;){if(i=KC(s),i===null)return;if(a=i.tag,a===5||a===6){C=r=i;continue B}s=s.parentNode}}C=C.return}ab(function(){var o=r,c=Zd(t),l=[];B:{var u=Tb.get(e);if(u!==void 0){var m=eh,d=e;switch(e){case"keypress":if(xa(t)===0)break B;case"keydown":case"keyup":m=Ak;break;case"focusin":d="focus",m=Ic;break;case"focusout":d="blur",m=Ic;break;case"beforeblur":case"afterblur":m=Ic;break;case"click":if(t.button===2)break B;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=H2;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=ak;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Ek;break;case Rb:case Hb:case Mb:m=ck;break;case Lb:m=Sk;break;case"scroll":m=ik;break;case"wheel":m=Dk;break;case"copy":case"cut":case"paste":m=dk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=L2}var f=(B&4)!==0,g=!f&&e==="scroll",h=f?u!==null?u+"Capture":null:u;f=[];for(var p=o,b;p!==null;){b=p;var A=b.stateNode;if(b.tag===5&&A!==null&&(b=A,h!==null&&(A=yi(p,h),A!=null&&f.push(Pi(p,A,b)))),g)break;p=p.return}0<f.length&&(u=new m(u,d,null,t,c),l.push({event:u,listeners:f}))}}if(!(B&7)){B:{if(u=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",u&&t!==Zu&&(d=t.relatedTarget||t.fromElement)&&(KC(d)||d[Mt]))break B;if((m||u)&&(u=c.window===c?c:(u=c.ownerDocument)?u.defaultView||u.parentWindow:window,m?(d=t.relatedTarget||t.toElement,m=o,d=d?KC(d):null,d!==null&&(g=gn(d),d!==g||d.tag!==5&&d.tag!==6)&&(d=null)):(m=null,d=o),m!==d)){if(f=H2,A="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(f=L2,A="onPointerLeave",h="onPointerEnter",p="pointer"),g=m==null?u:Mn(m),b=d==null?u:Mn(d),u=new f(A,p+"leave",m,t,c),u.target=g,u.relatedTarget=b,A=null,KC(c)===o&&(f=new f(h,p+"enter",d,t,c),f.target=b,f.relatedTarget=g,A=f),g=A,m&&d)e:{for(f=m,h=d,p=0,b=f;b;b=In(b))p++;for(b=0,A=h;A;A=In(A))b++;for(;0<p-b;)f=In(f),p--;for(;0<b-p;)h=In(h),b--;for(;p--;){if(f===h||h!==null&&f===h.alternate)break e;f=In(f),h=In(h)}f=null}else f=null;m!==null&&Y2(l,u,m,f,!1),d!==null&&g!==null&&Y2(l,g,d,f,!0)}}B:{if(u=o?Mn(o):window,m=u.nodeName&&u.nodeName.toLowerCase(),m==="select"||m==="input"&&u.type==="file")var y=Hk;else if(x2(u))if(kb)y=Gk;else{y=Lk;var I=Mk}else(m=u.nodeName)&&m.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(y=Tk);if(y&&(y=y(e,o))){Db(l,y,t,c);break B}I&&I(e,u,o),e==="focusout"&&(I=u._wrapperState)&&I.controlled&&u.type==="number"&&Vu(u,"number",u.value)}switch(I=o?Mn(o):window,e){case"focusin":(x2(I)||I.contentEditable==="true")&&(Rn=I,t1=o,ii=null);break;case"focusout":ii=t1=Rn=null;break;case"mousedown":C1=!0;break;case"contextmenu":case"mouseup":case"dragend":C1=!1,V2(l,t,c);break;case"selectionchange":if(Qk)break;case"keydown":case"keyup":V2(l,t,c)}var E;if(Ch)B:{switch(e){case"compositionstart":var v="onCompositionStart";break B;case"compositionend":v="onCompositionEnd";break B;case"compositionupdate":v="onCompositionUpdate";break B}v=void 0}else On?Sb(e,t)&&(v="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(v="onCompositionStart");v&&(Ib&&t.locale!=="ko"&&(On||v!=="onCompositionStart"?v==="onCompositionEnd"&&On&&(E=Eb()):(iC=c,Bh="value"in iC?iC.value:iC.textContent,On=!0)),I=co(o,v),0<I.length&&(v=new M2(v,e,null,t,c),l.push({event:v,listeners:I}),E?v.data=E:(E=wb(t),E!==null&&(v.data=E)))),(E=Pk?Nk(e,t):Fk(e,t))&&(o=co(o,"onBeforeInput"),0<o.length&&(c=new M2("onBeforeInput","beforeinput",null,t,c),l.push({event:c,listeners:o}),c.data=E))}Gb(l,B)})}function Pi(e,B,t){return{instance:e,listener:B,currentTarget:t}}function co(e,B){for(var t=B+"Capture",C=[];e!==null;){var n=e,r=n.stateNode;n.tag===5&&r!==null&&(n=r,r=yi(e,t),r!=null&&C.unshift(Pi(e,r,n)),r=yi(e,B),r!=null&&C.push(Pi(e,r,n))),e=e.return}return C}function In(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Y2(e,B,t,C,n){for(var r=B._reactName,i=[];t!==null&&t!==C;){var s=t,a=s.alternate,o=s.stateNode;if(a!==null&&a===C)break;s.tag===5&&o!==null&&(s=o,n?(a=yi(t,r),a!=null&&i.unshift(Pi(t,a,s))):n||(a=yi(t,r),a!=null&&i.push(Pi(t,a,s)))),t=t.return}i.length!==0&&e.push({event:B,listeners:i})}var Wk=/\r\n?/g,jk=/\u0000|\uFFFD/g;function X2(e){return(typeof e=="string"?e:""+e).replace(Wk,`
`).replace(jk,"")}function $s(e,B,t){if(B=X2(B),X2(e)!==B&&t)throw Error(S(425))}function uo(){}var n1=null,r1=null;function i1(e,B){return e==="textarea"||e==="noscript"||typeof B.children=="string"||typeof B.children=="number"||typeof B.dangerouslySetInnerHTML=="object"&&B.dangerouslySetInnerHTML!==null&&B.dangerouslySetInnerHTML.__html!=null}var s1=typeof setTimeout=="function"?setTimeout:void 0,Yk=typeof clearTimeout=="function"?clearTimeout:void 0,Z2=typeof Promise=="function"?Promise:void 0,Xk=typeof queueMicrotask=="function"?queueMicrotask:typeof Z2<"u"?function(e){return Z2.resolve(null).then(e).catch(Zk)}:s1;function Zk(e){setTimeout(function(){throw e})}function Oc(e,B){var t=B,C=0;do{var n=t.nextSibling;if(e.removeChild(t),n&&n.nodeType===8)if(t=n.data,t==="/$"){if(C===0){e.removeChild(n),Si(B);return}C--}else t!=="$"&&t!=="$?"&&t!=="$!"||C++;t=n}while(t);Si(B)}function uC(e){for(;e!=null;e=e.nextSibling){var B=e.nodeType;if(B===1||B===3)break;if(B===8){if(B=e.data,B==="$"||B==="$!"||B==="$?")break;if(B==="/$")return null}}return e}function q2(e){e=e.previousSibling;for(var B=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(B===0)return e;B--}else t==="/$"&&B++}e=e.previousSibling}return null}var Er=Math.random().toString(36).slice(2),lt="__reactFiber$"+Er,Ni="__reactProps$"+Er,Mt="__reactContainer$"+Er,a1="__reactEvents$"+Er,qk="__reactListeners$"+Er,zk="__reactHandles$"+Er;function KC(e){var B=e[lt];if(B)return B;for(var t=e.parentNode;t;){if(B=t[Mt]||t[lt]){if(t=B.alternate,B.child!==null||t!==null&&t.child!==null)for(e=q2(e);e!==null;){if(t=e[lt])return t;e=q2(e)}return B}e=t,t=e.parentNode}return null}function cs(e){return e=e[lt]||e[Mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function gl(e){return e[Ni]||null}var o1=[],Ln=-1;function RC(e){return{current:e}}function fB(e){0>Ln||(e.current=o1[Ln],o1[Ln]=null,Ln--)}function oB(e,B){Ln++,o1[Ln]=e.current,e.current=B}var IC={},ZB=RC(IC),ue=RC(!1),en=IC;function ir(e,B){var t=e.type.contextTypes;if(!t)return IC;var C=e.stateNode;if(C&&C.__reactInternalMemoizedUnmaskedChildContext===B)return C.__reactInternalMemoizedMaskedChildContext;var n={},r;for(r in t)n[r]=B[r];return C&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=B,e.__reactInternalMemoizedMaskedChildContext=n),n}function de(e){return e=e.childContextTypes,e!=null}function ho(){fB(ue),fB(ZB)}function z2(e,B,t){if(ZB.current!==IC)throw Error(S(168));oB(ZB,B),oB(ue,t)}function Kb(e,B,t){var C=e.stateNode;if(B=B.childContextTypes,typeof C.getChildContext!="function")return t;C=C.getChildContext();for(var n in C)if(!(n in B))throw Error(S(108,MD(e)||"Unknown",n));return vB({},t,C)}function fo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||IC,en=ZB.current,oB(ZB,e),oB(ue,ue.current),!0}function _2(e,B,t){var C=e.stateNode;if(!C)throw Error(S(169));t?(e=Kb(e,B,en),C.__reactInternalMemoizedMergedChildContext=e,fB(ue),fB(ZB),oB(ZB,e)):fB(ue),oB(ue,t)}var It=null,bl=!1,Rc=!1;function Qb(e){It===null?It=[e]:It.push(e)}function _k(e){bl=!0,Qb(e)}function HC(){if(!Rc&&It!==null){Rc=!0;var e=0,B=tB;try{var t=It;for(tB=1;e<t.length;e++){var C=t[e];do C=C(!0);while(C!==null)}It=null,bl=!1}catch(n){throw It!==null&&(It=It.slice(e+1)),ub(qd,HC),n}finally{tB=B,Rc=!1}}return null}var Tn=[],Gn=0,po=null,mo=0,He=[],Me=0,tn=null,wt=1,Dt="";function LC(e,B){Tn[Gn++]=mo,Tn[Gn++]=po,po=e,mo=B}function Jb(e,B,t){He[Me++]=wt,He[Me++]=Dt,He[Me++]=tn,tn=e;var C=wt;e=Dt;var n=32-Bt(C)-1;C&=~(1<<n),t+=1;var r=32-Bt(B)+n;if(30<r){var i=n-n%5;r=(C&(1<<i)-1).toString(32),C>>=i,n-=i,wt=1<<32-Bt(B)+n|t<<n|C,Dt=r+e}else wt=1<<r|t<<n|C,Dt=e}function rh(e){e.return!==null&&(LC(e,1),Jb(e,1,0))}function ih(e){for(;e===po;)po=Tn[--Gn],Tn[Gn]=null,mo=Tn[--Gn],Tn[Gn]=null;for(;e===tn;)tn=He[--Me],He[Me]=null,Dt=He[--Me],He[Me]=null,wt=He[--Me],He[Me]=null}var Ie=null,Ee=null,mB=!1,Xe=null;function Ub(e,B){var t=Te(5,null,null,0);t.elementType="DELETED",t.stateNode=B,t.return=e,B=e.deletions,B===null?(e.deletions=[t],e.flags|=16):B.push(t)}function $2(e,B){switch(e.tag){case 5:var t=e.type;return B=B.nodeType!==1||t.toLowerCase()!==B.nodeName.toLowerCase()?null:B,B!==null?(e.stateNode=B,Ie=e,Ee=uC(B.firstChild),!0):!1;case 6:return B=e.pendingProps===""||B.nodeType!==3?null:B,B!==null?(e.stateNode=B,Ie=e,Ee=null,!0):!1;case 13:return B=B.nodeType!==8?null:B,B!==null?(t=tn!==null?{id:wt,overflow:Dt}:null,e.memoizedState={dehydrated:B,treeContext:t,retryLane:1073741824},t=Te(18,null,null,0),t.stateNode=B,t.return=e,e.child=t,Ie=e,Ee=null,!0):!1;default:return!1}}function l1(e){return(e.mode&1)!==0&&(e.flags&128)===0}function c1(e){if(mB){var B=Ee;if(B){var t=B;if(!$2(e,B)){if(l1(e))throw Error(S(418));B=uC(t.nextSibling);var C=Ie;B&&$2(e,B)?Ub(C,t):(e.flags=e.flags&-4097|2,mB=!1,Ie=e)}}else{if(l1(e))throw Error(S(418));e.flags=e.flags&-4097|2,mB=!1,Ie=e}}}function Bp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ie=e}function Ba(e){if(e!==Ie)return!1;if(!mB)return Bp(e),mB=!0,!1;var B;if((B=e.tag!==3)&&!(B=e.tag!==5)&&(B=e.type,B=B!=="head"&&B!=="body"&&!i1(e.type,e.memoizedProps)),B&&(B=Ee)){if(l1(e))throw Vb(),Error(S(418));for(;B;)Ub(e,B),B=uC(B.nextSibling)}if(Bp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));B:{for(e=e.nextSibling,B=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(B===0){Ee=uC(e.nextSibling);break B}B--}else t!=="$"&&t!=="$!"&&t!=="$?"||B++}e=e.nextSibling}Ee=null}}else Ee=Ie?uC(e.stateNode.nextSibling):null;return!0}function Vb(){for(var e=Ee;e;)e=uC(e.nextSibling)}function sr(){Ee=Ie=null,mB=!1}function sh(e){Xe===null?Xe=[e]:Xe.push(e)}var $k=Ut.ReactCurrentBatchConfig;function je(e,B){if(e&&e.defaultProps){B=vB({},B),e=e.defaultProps;for(var t in e)B[t]===void 0&&(B[t]=e[t]);return B}return B}var go=RC(null),bo=null,xn=null,ah=null;function oh(){ah=xn=bo=null}function lh(e){var B=go.current;fB(go),e._currentValue=B}function u1(e,B,t){for(;e!==null;){var C=e.alternate;if((e.childLanes&B)!==B?(e.childLanes|=B,C!==null&&(C.childLanes|=B)):C!==null&&(C.childLanes&B)!==B&&(C.childLanes|=B),e===t)break;e=e.return}}function qn(e,B){bo=e,ah=xn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&B&&(le=!0),e.firstContext=null)}function Ke(e){var B=e._currentValue;if(ah!==e)if(e={context:e,memoizedValue:B,next:null},xn===null){if(bo===null)throw Error(S(308));xn=e,bo.dependencies={lanes:0,firstContext:e}}else xn=xn.next=e;return B}var QC=null;function ch(e){QC===null?QC=[e]:QC.push(e)}function Wb(e,B,t,C){var n=B.interleaved;return n===null?(t.next=t,ch(B)):(t.next=n.next,n.next=t),B.interleaved=t,Lt(e,C)}function Lt(e,B){e.lanes|=B;var t=e.alternate;for(t!==null&&(t.lanes|=B),t=e,e=e.return;e!==null;)e.childLanes|=B,t=e.alternate,t!==null&&(t.childLanes|=B),t=e,e=e.return;return t.tag===3?t.stateNode:null}var $t=!1;function uh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jb(e,B){e=e.updateQueue,B.updateQueue===e&&(B.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ft(e,B){return{eventTime:e,lane:B,tag:0,payload:null,callback:null,next:null}}function dC(e,B,t){var C=e.updateQueue;if(C===null)return null;if(C=C.shared,_&2){var n=C.pending;return n===null?B.next=B:(B.next=n.next,n.next=B),C.pending=B,Lt(e,t)}return n=C.interleaved,n===null?(B.next=B,ch(C)):(B.next=n.next,n.next=B),C.interleaved=B,Lt(e,t)}function Ka(e,B,t){if(B=B.updateQueue,B!==null&&(B=B.shared,(t&4194240)!==0)){var C=B.lanes;C&=e.pendingLanes,t|=C,B.lanes=t,zd(e,t)}}function ep(e,B){var t=e.updateQueue,C=e.alternate;if(C!==null&&(C=C.updateQueue,t===C)){var n=null,r=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};r===null?n=r=i:r=r.next=i,t=t.next}while(t!==null);r===null?n=r=B:r=r.next=B}else n=r=B;t={baseState:C.baseState,firstBaseUpdate:n,lastBaseUpdate:r,shared:C.shared,effects:C.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=B:e.next=B,t.lastBaseUpdate=B}function Ao(e,B,t,C){var n=e.updateQueue;$t=!1;var r=n.firstBaseUpdate,i=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var a=s,o=a.next;a.next=null,i===null?r=o:i.next=o,i=a;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==i&&(s===null?c.firstBaseUpdate=o:s.next=o,c.lastBaseUpdate=a))}if(r!==null){var l=n.baseState;i=0,c=o=a=null,s=r;do{var u=s.lane,m=s.eventTime;if((C&u)===u){c!==null&&(c=c.next={eventTime:m,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});B:{var d=e,f=s;switch(u=B,m=t,f.tag){case 1:if(d=f.payload,typeof d=="function"){l=d.call(m,l,u);break B}l=d;break B;case 3:d.flags=d.flags&-65537|128;case 0:if(d=f.payload,u=typeof d=="function"?d.call(m,l,u):d,u==null)break B;l=vB({},l,u);break B;case 2:$t=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,u=n.effects,u===null?n.effects=[s]:u.push(s))}else m={eventTime:m,lane:u,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(o=c=m,a=l):c=c.next=m,i|=u;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;u=s,s=u.next,u.next=null,n.lastBaseUpdate=u,n.shared.pending=null}}while(1);if(c===null&&(a=l),n.baseState=a,n.firstBaseUpdate=o,n.lastBaseUpdate=c,B=n.shared.interleaved,B!==null){n=B;do i|=n.lane,n=n.next;while(n!==B)}else r===null&&(n.shared.lanes=0);nn|=i,e.lanes=i,e.memoizedState=l}}function tp(e,B,t){if(e=B.effects,B.effects=null,e!==null)for(B=0;B<e.length;B++){var C=e[B],n=C.callback;if(n!==null){if(C.callback=null,C=t,typeof n!="function")throw Error(S(191,n));n.call(C)}}}var Yb=new Wg.Component().refs;function d1(e,B,t,C){B=e.memoizedState,t=t(C,B),t=t==null?B:vB({},B,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Al={isMounted:function(e){return(e=e._reactInternals)?gn(e)===e:!1},enqueueSetState:function(e,B,t){e=e._reactInternals;var C=te(),n=fC(e),r=Ft(C,n);r.payload=B,t!=null&&(r.callback=t),B=dC(e,r,n),B!==null&&(et(B,e,n,C),Ka(B,e,n))},enqueueReplaceState:function(e,B,t){e=e._reactInternals;var C=te(),n=fC(e),r=Ft(C,n);r.tag=1,r.payload=B,t!=null&&(r.callback=t),B=dC(e,r,n),B!==null&&(et(B,e,n,C),Ka(B,e,n))},enqueueForceUpdate:function(e,B){e=e._reactInternals;var t=te(),C=fC(e),n=Ft(t,C);n.tag=2,B!=null&&(n.callback=B),B=dC(e,n,C),B!==null&&(et(B,e,C,t),Ka(B,e,C))}};function Cp(e,B,t,C,n,r,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(C,r,i):B.prototype&&B.prototype.isPureReactComponent?!Di(t,C)||!Di(n,r):!0}function Xb(e,B,t){var C=!1,n=IC,r=B.contextType;return typeof r=="object"&&r!==null?r=Ke(r):(n=de(B)?en:ZB.current,C=B.contextTypes,r=(C=C!=null)?ir(e,n):IC),B=new B(t,r),e.memoizedState=B.state!==null&&B.state!==void 0?B.state:null,B.updater=Al,e.stateNode=B,B._reactInternals=e,C&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),B}function np(e,B,t,C){e=B.state,typeof B.componentWillReceiveProps=="function"&&B.componentWillReceiveProps(t,C),typeof B.UNSAFE_componentWillReceiveProps=="function"&&B.UNSAFE_componentWillReceiveProps(t,C),B.state!==e&&Al.enqueueReplaceState(B,B.state,null)}function h1(e,B,t,C){var n=e.stateNode;n.props=t,n.state=e.memoizedState,n.refs=Yb,uh(e);var r=B.contextType;typeof r=="object"&&r!==null?n.context=Ke(r):(r=de(B)?en:ZB.current,n.context=ir(e,r)),n.state=e.memoizedState,r=B.getDerivedStateFromProps,typeof r=="function"&&(d1(e,B,r,t),n.state=e.memoizedState),typeof B.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(B=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),B!==n.state&&Al.enqueueReplaceState(n,n.state,null),Ao(e,t,n,C),n.state=e.memoizedState),typeof n.componentDidMount=="function"&&(e.flags|=4194308)}function Tr(e,B,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(S(309));var C=t.stateNode}if(!C)throw Error(S(147,e));var n=C,r=""+e;return B!==null&&B.ref!==null&&typeof B.ref=="function"&&B.ref._stringRef===r?B.ref:(B=function(i){var s=n.refs;s===Yb&&(s=n.refs={}),i===null?delete s[r]:s[r]=i},B._stringRef=r,B)}if(typeof e!="string")throw Error(S(284));if(!t._owner)throw Error(S(290,e))}return e}function ea(e,B){throw e=Object.prototype.toString.call(B),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":e))}function rp(e){var B=e._init;return B(e._payload)}function Zb(e){function B(h,p){if(e){var b=h.deletions;b===null?(h.deletions=[p],h.flags|=16):b.push(p)}}function t(h,p){if(!e)return null;for(;p!==null;)B(h,p),p=p.sibling;return null}function C(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function n(h,p){return h=pC(h,p),h.index=0,h.sibling=null,h}function r(h,p,b){return h.index=b,e?(b=h.alternate,b!==null?(b=b.index,b<p?(h.flags|=2,p):b):(h.flags|=2,p)):(h.flags|=1048576,p)}function i(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,p,b,A){return p===null||p.tag!==6?(p=Kc(b,h.mode,A),p.return=h,p):(p=n(p,b),p.return=h,p)}function a(h,p,b,A){var y=b.type;return y===Fn?c(h,p,b.props.children,A,b.key):p!==null&&(p.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===_t&&rp(y)===p.type)?(A=n(p,b.props),A.ref=Tr(h,p,b),A.return=h,A):(A=ja(b.type,b.key,b.props,null,h.mode,A),A.ref=Tr(h,p,b),A.return=h,A)}function o(h,p,b,A){return p===null||p.tag!==4||p.stateNode.containerInfo!==b.containerInfo||p.stateNode.implementation!==b.implementation?(p=Qc(b,h.mode,A),p.return=h,p):(p=n(p,b.children||[]),p.return=h,p)}function c(h,p,b,A,y){return p===null||p.tag!==7?(p=_C(b,h.mode,A,y),p.return=h,p):(p=n(p,b),p.return=h,p)}function l(h,p,b){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Kc(""+p,h.mode,b),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Vs:return b=ja(p.type,p.key,p.props,null,h.mode,b),b.ref=Tr(h,null,p),b.return=h,b;case Nn:return p=Qc(p,h.mode,b),p.return=h,p;case _t:var A=p._init;return l(h,A(p._payload),b)}if(zr(p)||Or(p))return p=_C(p,h.mode,b,null),p.return=h,p;ea(h,p)}return null}function u(h,p,b,A){var y=p!==null?p.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return y!==null?null:s(h,p,""+b,A);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Vs:return b.key===y?a(h,p,b,A):null;case Nn:return b.key===y?o(h,p,b,A):null;case _t:return y=b._init,u(h,p,y(b._payload),A)}if(zr(b)||Or(b))return y!==null?null:c(h,p,b,A,null);ea(h,b)}return null}function m(h,p,b,A,y){if(typeof A=="string"&&A!==""||typeof A=="number")return h=h.get(b)||null,s(p,h,""+A,y);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Vs:return h=h.get(A.key===null?b:A.key)||null,a(p,h,A,y);case Nn:return h=h.get(A.key===null?b:A.key)||null,o(p,h,A,y);case _t:var I=A._init;return m(h,p,b,I(A._payload),y)}if(zr(A)||Or(A))return h=h.get(b)||null,c(p,h,A,y,null);ea(p,A)}return null}function d(h,p,b,A){for(var y=null,I=null,E=p,v=p=0,w=null;E!==null&&v<b.length;v++){E.index>v?(w=E,E=null):w=E.sibling;var M=u(h,E,b[v],A);if(M===null){E===null&&(E=w);break}e&&E&&M.alternate===null&&B(h,E),p=r(M,p,v),I===null?y=M:I.sibling=M,I=M,E=w}if(v===b.length)return t(h,E),mB&&LC(h,v),y;if(E===null){for(;v<b.length;v++)E=l(h,b[v],A),E!==null&&(p=r(E,p,v),I===null?y=E:I.sibling=E,I=E);return mB&&LC(h,v),y}for(E=C(h,E);v<b.length;v++)w=m(E,h,v,b[v],A),w!==null&&(e&&w.alternate!==null&&E.delete(w.key===null?v:w.key),p=r(w,p,v),I===null?y=w:I.sibling=w,I=w);return e&&E.forEach(function(j){return B(h,j)}),mB&&LC(h,v),y}function f(h,p,b,A){var y=Or(b);if(typeof y!="function")throw Error(S(150));if(b=y.call(b),b==null)throw Error(S(151));for(var I=y=null,E=p,v=p=0,w=null,M=b.next();E!==null&&!M.done;v++,M=b.next()){E.index>v?(w=E,E=null):w=E.sibling;var j=u(h,E,M.value,A);if(j===null){E===null&&(E=w);break}e&&E&&j.alternate===null&&B(h,E),p=r(j,p,v),I===null?y=j:I.sibling=j,I=j,E=w}if(M.done)return t(h,E),mB&&LC(h,v),y;if(E===null){for(;!M.done;v++,M=b.next())M=l(h,M.value,A),M!==null&&(p=r(M,p,v),I===null?y=M:I.sibling=M,I=M);return mB&&LC(h,v),y}for(E=C(h,E);!M.done;v++,M=b.next())M=m(E,h,v,M.value,A),M!==null&&(e&&M.alternate!==null&&E.delete(M.key===null?v:M.key),p=r(M,p,v),I===null?y=M:I.sibling=M,I=M);return e&&E.forEach(function(Q){return B(h,Q)}),mB&&LC(h,v),y}function g(h,p,b,A){if(typeof b=="object"&&b!==null&&b.type===Fn&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Vs:B:{for(var y=b.key,I=p;I!==null;){if(I.key===y){if(y=b.type,y===Fn){if(I.tag===7){t(h,I.sibling),p=n(I,b.props.children),p.return=h,h=p;break B}}else if(I.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===_t&&rp(y)===I.type){t(h,I.sibling),p=n(I,b.props),p.ref=Tr(h,I,b),p.return=h,h=p;break B}t(h,I);break}else B(h,I);I=I.sibling}b.type===Fn?(p=_C(b.props.children,h.mode,A,b.key),p.return=h,h=p):(A=ja(b.type,b.key,b.props,null,h.mode,A),A.ref=Tr(h,p,b),A.return=h,h=A)}return i(h);case Nn:B:{for(I=b.key;p!==null;){if(p.key===I)if(p.tag===4&&p.stateNode.containerInfo===b.containerInfo&&p.stateNode.implementation===b.implementation){t(h,p.sibling),p=n(p,b.children||[]),p.return=h,h=p;break B}else{t(h,p);break}else B(h,p);p=p.sibling}p=Qc(b,h.mode,A),p.return=h,h=p}return i(h);case _t:return I=b._init,g(h,p,I(b._payload),A)}if(zr(b))return d(h,p,b,A);if(Or(b))return f(h,p,b,A);ea(h,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,p!==null&&p.tag===6?(t(h,p.sibling),p=n(p,b),p.return=h,h=p):(t(h,p),p=Kc(b,h.mode,A),p.return=h,h=p),i(h)):t(h,p)}return g}var ar=Zb(!0),qb=Zb(!1),us={},dt=RC(us),Fi=RC(us),Oi=RC(us);function JC(e){if(e===us)throw Error(S(174));return e}function dh(e,B){switch(oB(Oi,B),oB(Fi,e),oB(dt,us),e=B.nodeType,e){case 9:case 11:B=(B=B.documentElement)?B.namespaceURI:ju(null,"");break;default:e=e===8?B.parentNode:B,B=e.namespaceURI||null,e=e.tagName,B=ju(B,e)}fB(dt),oB(dt,B)}function or(){fB(dt),fB(Fi),fB(Oi)}function zb(e){JC(Oi.current);var B=JC(dt.current),t=ju(B,e.type);B!==t&&(oB(Fi,e),oB(dt,t))}function hh(e){Fi.current===e&&(fB(dt),fB(Fi))}var bB=RC(0);function vo(e){for(var B=e;B!==null;){if(B.tag===13){var t=B.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return B}else if(B.tag===19&&B.memoizedProps.revealOrder!==void 0){if(B.flags&128)return B}else if(B.child!==null){B.child.return=B,B=B.child;continue}if(B===e)break;for(;B.sibling===null;){if(B.return===null||B.return===e)return null;B=B.return}B.sibling.return=B.return,B=B.sibling}return null}var Hc=[];function fh(){for(var e=0;e<Hc.length;e++)Hc[e]._workInProgressVersionPrimary=null;Hc.length=0}var Qa=Ut.ReactCurrentDispatcher,Mc=Ut.ReactCurrentBatchConfig,Cn=0,AB=null,NB=null,TB=null,yo=!1,si=!1,Ri=0,BP=0;function WB(){throw Error(S(321))}function ph(e,B){if(B===null)return!1;for(var t=0;t<B.length&&t<e.length;t++)if(!nt(e[t],B[t]))return!1;return!0}function mh(e,B,t,C,n,r){if(Cn=r,AB=B,B.memoizedState=null,B.updateQueue=null,B.lanes=0,Qa.current=e===null||e.memoizedState===null?nP:rP,e=t(C,n),si){r=0;do{if(si=!1,Ri=0,25<=r)throw Error(S(301));r+=1,TB=NB=null,B.updateQueue=null,Qa.current=iP,e=t(C,n)}while(si)}if(Qa.current=Eo,B=NB!==null&&NB.next!==null,Cn=0,TB=NB=AB=null,yo=!1,B)throw Error(S(300));return e}function gh(){var e=Ri!==0;return Ri=0,e}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return TB===null?AB.memoizedState=TB=e:TB=TB.next=e,TB}function Qe(){if(NB===null){var e=AB.alternate;e=e!==null?e.memoizedState:null}else e=NB.next;var B=TB===null?AB.memoizedState:TB.next;if(B!==null)TB=B,NB=e;else{if(e===null)throw Error(S(310));NB=e,e={memoizedState:NB.memoizedState,baseState:NB.baseState,baseQueue:NB.baseQueue,queue:NB.queue,next:null},TB===null?AB.memoizedState=TB=e:TB=TB.next=e}return TB}function Hi(e,B){return typeof B=="function"?B(e):B}function Lc(e){var B=Qe(),t=B.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var C=NB,n=C.baseQueue,r=t.pending;if(r!==null){if(n!==null){var i=n.next;n.next=r.next,r.next=i}C.baseQueue=n=r,t.pending=null}if(n!==null){r=n.next,C=C.baseState;var s=i=null,a=null,o=r;do{var c=o.lane;if((Cn&c)===c)a!==null&&(a=a.next={lane:0,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null}),C=o.hasEagerState?o.eagerState:e(C,o.action);else{var l={lane:c,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null};a===null?(s=a=l,i=C):a=a.next=l,AB.lanes|=c,nn|=c}o=o.next}while(o!==null&&o!==r);a===null?i=C:a.next=s,nt(C,B.memoizedState)||(le=!0),B.memoizedState=C,B.baseState=i,B.baseQueue=a,t.lastRenderedState=C}if(e=t.interleaved,e!==null){n=e;do r=n.lane,AB.lanes|=r,nn|=r,n=n.next;while(n!==e)}else n===null&&(t.lanes=0);return[B.memoizedState,t.dispatch]}function Tc(e){var B=Qe(),t=B.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var C=t.dispatch,n=t.pending,r=B.memoizedState;if(n!==null){t.pending=null;var i=n=n.next;do r=e(r,i.action),i=i.next;while(i!==n);nt(r,B.memoizedState)||(le=!0),B.memoizedState=r,B.baseQueue===null&&(B.baseState=r),t.lastRenderedState=r}return[r,C]}function _b(){}function $b(e,B){var t=AB,C=Qe(),n=B(),r=!nt(C.memoizedState,n);if(r&&(C.memoizedState=n,le=!0),C=C.queue,bh(tA.bind(null,t,C,e),[e]),C.getSnapshot!==B||r||TB!==null&&TB.memoizedState.tag&1){if(t.flags|=2048,Mi(9,eA.bind(null,t,C,n,B),void 0,null),KB===null)throw Error(S(349));Cn&30||BA(t,B,n)}return n}function BA(e,B,t){e.flags|=16384,e={getSnapshot:B,value:t},B=AB.updateQueue,B===null?(B={lastEffect:null,stores:null},AB.updateQueue=B,B.stores=[e]):(t=B.stores,t===null?B.stores=[e]:t.push(e))}function eA(e,B,t,C){B.value=t,B.getSnapshot=C,CA(B)&&nA(e)}function tA(e,B,t){return t(function(){CA(B)&&nA(e)})}function CA(e){var B=e.getSnapshot;e=e.value;try{var t=B();return!nt(e,t)}catch{return!0}}function nA(e){var B=Lt(e,1);B!==null&&et(B,e,1,-1)}function ip(e){var B=ot();return typeof e=="function"&&(e=e()),B.memoizedState=B.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:e},B.queue=e,e=e.dispatch=CP.bind(null,AB,e),[B.memoizedState,e]}function Mi(e,B,t,C){return e={tag:e,create:B,destroy:t,deps:C,next:null},B=AB.updateQueue,B===null?(B={lastEffect:null,stores:null},AB.updateQueue=B,B.lastEffect=e.next=e):(t=B.lastEffect,t===null?B.lastEffect=e.next=e:(C=t.next,t.next=e,e.next=C,B.lastEffect=e)),e}function rA(){return Qe().memoizedState}function Ja(e,B,t,C){var n=ot();AB.flags|=e,n.memoizedState=Mi(1|B,t,void 0,C===void 0?null:C)}function vl(e,B,t,C){var n=Qe();C=C===void 0?null:C;var r=void 0;if(NB!==null){var i=NB.memoizedState;if(r=i.destroy,C!==null&&ph(C,i.deps)){n.memoizedState=Mi(B,t,r,C);return}}AB.flags|=e,n.memoizedState=Mi(1|B,t,r,C)}function sp(e,B){return Ja(8390656,8,e,B)}function bh(e,B){return vl(2048,8,e,B)}function iA(e,B){return vl(4,2,e,B)}function sA(e,B){return vl(4,4,e,B)}function aA(e,B){if(typeof B=="function")return e=e(),B(e),function(){B(null)};if(B!=null)return e=e(),B.current=e,function(){B.current=null}}function oA(e,B,t){return t=t!=null?t.concat([e]):null,vl(4,4,aA.bind(null,B,e),t)}function Ah(){}function lA(e,B){var t=Qe();B=B===void 0?null:B;var C=t.memoizedState;return C!==null&&B!==null&&ph(B,C[1])?C[0]:(t.memoizedState=[e,B],e)}function cA(e,B){var t=Qe();B=B===void 0?null:B;var C=t.memoizedState;return C!==null&&B!==null&&ph(B,C[1])?C[0]:(e=e(),t.memoizedState=[e,B],e)}function uA(e,B,t){return Cn&21?(nt(t,B)||(t=fb(),AB.lanes|=t,nn|=t,e.baseState=!0),B):(e.baseState&&(e.baseState=!1,le=!0),e.memoizedState=t)}function eP(e,B){var t=tB;tB=t!==0&&4>t?t:4,e(!0);var C=Mc.transition;Mc.transition={};try{e(!1),B()}finally{tB=t,Mc.transition=C}}function dA(){return Qe().memoizedState}function tP(e,B,t){var C=fC(e);if(t={lane:C,action:t,hasEagerState:!1,eagerState:null,next:null},hA(e))fA(B,t);else if(t=Wb(e,B,t,C),t!==null){var n=te();et(t,e,C,n),pA(t,B,C)}}function CP(e,B,t){var C=fC(e),n={lane:C,action:t,hasEagerState:!1,eagerState:null,next:null};if(hA(e))fA(B,n);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=B.lastRenderedReducer,r!==null))try{var i=B.lastRenderedState,s=r(i,t);if(n.hasEagerState=!0,n.eagerState=s,nt(s,i)){var a=B.interleaved;a===null?(n.next=n,ch(B)):(n.next=a.next,a.next=n),B.interleaved=n;return}}catch{}finally{}t=Wb(e,B,n,C),t!==null&&(n=te(),et(t,e,C,n),pA(t,B,C))}}function hA(e){var B=e.alternate;return e===AB||B!==null&&B===AB}function fA(e,B){si=yo=!0;var t=e.pending;t===null?B.next=B:(B.next=t.next,t.next=B),e.pending=B}function pA(e,B,t){if(t&4194240){var C=B.lanes;C&=e.pendingLanes,t|=C,B.lanes=t,zd(e,t)}}var Eo={readContext:Ke,useCallback:WB,useContext:WB,useEffect:WB,useImperativeHandle:WB,useInsertionEffect:WB,useLayoutEffect:WB,useMemo:WB,useReducer:WB,useRef:WB,useState:WB,useDebugValue:WB,useDeferredValue:WB,useTransition:WB,useMutableSource:WB,useSyncExternalStore:WB,useId:WB,unstable_isNewReconciler:!1},nP={readContext:Ke,useCallback:function(e,B){return ot().memoizedState=[e,B===void 0?null:B],e},useContext:Ke,useEffect:sp,useImperativeHandle:function(e,B,t){return t=t!=null?t.concat([e]):null,Ja(4194308,4,aA.bind(null,B,e),t)},useLayoutEffect:function(e,B){return Ja(4194308,4,e,B)},useInsertionEffect:function(e,B){return Ja(4,2,e,B)},useMemo:function(e,B){var t=ot();return B=B===void 0?null:B,e=e(),t.memoizedState=[e,B],e},useReducer:function(e,B,t){var C=ot();return B=t!==void 0?t(B):B,C.memoizedState=C.baseState=B,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:B},C.queue=e,e=e.dispatch=tP.bind(null,AB,e),[C.memoizedState,e]},useRef:function(e){var B=ot();return e={current:e},B.memoizedState=e},useState:ip,useDebugValue:Ah,useDeferredValue:function(e){return ot().memoizedState=e},useTransition:function(){var e=ip(!1),B=e[0];return e=eP.bind(null,e[1]),ot().memoizedState=e,[B,e]},useMutableSource:function(){},useSyncExternalStore:function(e,B,t){var C=AB,n=ot();if(mB){if(t===void 0)throw Error(S(407));t=t()}else{if(t=B(),KB===null)throw Error(S(349));Cn&30||BA(C,B,t)}n.memoizedState=t;var r={value:t,getSnapshot:B};return n.queue=r,sp(tA.bind(null,C,r,e),[e]),C.flags|=2048,Mi(9,eA.bind(null,C,r,t,B),void 0,null),t},useId:function(){var e=ot(),B=KB.identifierPrefix;if(mB){var t=Dt,C=wt;t=(C&~(1<<32-Bt(C)-1)).toString(32)+t,B=":"+B+"R"+t,t=Ri++,0<t&&(B+="H"+t.toString(32)),B+=":"}else t=BP++,B=":"+B+"r"+t.toString(32)+":";return e.memoizedState=B},unstable_isNewReconciler:!1},rP={readContext:Ke,useCallback:lA,useContext:Ke,useEffect:bh,useImperativeHandle:oA,useInsertionEffect:iA,useLayoutEffect:sA,useMemo:cA,useReducer:Lc,useRef:rA,useState:function(){return Lc(Hi)},useDebugValue:Ah,useDeferredValue:function(e){var B=Qe();return uA(B,NB.memoizedState,e)},useTransition:function(){var e=Lc(Hi)[0],B=Qe().memoizedState;return[e,B]},useMutableSource:_b,useSyncExternalStore:$b,useId:dA,unstable_isNewReconciler:!1},iP={readContext:Ke,useCallback:lA,useContext:Ke,useEffect:bh,useImperativeHandle:oA,useInsertionEffect:iA,useLayoutEffect:sA,useMemo:cA,useReducer:Tc,useRef:rA,useState:function(){return Tc(Hi)},useDebugValue:Ah,useDeferredValue:function(e){var B=Qe();return NB===null?B.memoizedState=e:uA(B,NB.memoizedState,e)},useTransition:function(){var e=Tc(Hi)[0],B=Qe().memoizedState;return[e,B]},useMutableSource:_b,useSyncExternalStore:$b,useId:dA,unstable_isNewReconciler:!1};function lr(e,B){try{var t="",C=B;do t+=HD(C),C=C.return;while(C);var n=t}catch(r){n=`
Error generating stack: `+r.message+`
`+r.stack}return{value:e,source:B,stack:n,digest:null}}function Gc(e,B,t){return{value:e,source:null,stack:t??null,digest:B??null}}function f1(e,B){try{console.error(B.value)}catch(t){setTimeout(function(){throw t})}}var sP=typeof WeakMap=="function"?WeakMap:Map;function mA(e,B,t){t=Ft(-1,t),t.tag=3,t.payload={element:null};var C=B.value;return t.callback=function(){So||(So=!0,I1=C),f1(e,B)},t}function gA(e,B,t){t=Ft(-1,t),t.tag=3;var C=e.type.getDerivedStateFromError;if(typeof C=="function"){var n=B.value;t.payload=function(){return C(n)},t.callback=function(){f1(e,B)}}var r=e.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){f1(e,B),typeof C!="function"&&(hC===null?hC=new Set([this]):hC.add(this));var i=B.stack;this.componentDidCatch(B.value,{componentStack:i!==null?i:""})}),t}function ap(e,B,t){var C=e.pingCache;if(C===null){C=e.pingCache=new sP;var n=new Set;C.set(B,n)}else n=C.get(B),n===void 0&&(n=new Set,C.set(B,n));n.has(t)||(n.add(t),e=vP.bind(null,e,B,t),B.then(e,e))}function op(e){do{var B;if((B=e.tag===13)&&(B=e.memoizedState,B=B!==null?B.dehydrated!==null:!0),B)return e;e=e.return}while(e!==null);return null}function lp(e,B,t,C,n){return e.mode&1?(e.flags|=65536,e.lanes=n,e):(e===B?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(B=Ft(-1,1),B.tag=2,dC(t,B,1))),t.lanes|=1),e)}var aP=Ut.ReactCurrentOwner,le=!1;function $B(e,B,t,C){B.child=e===null?qb(B,null,t,C):ar(B,e.child,t,C)}function cp(e,B,t,C,n){t=t.render;var r=B.ref;return qn(B,n),C=mh(e,B,t,C,r,n),t=gh(),e!==null&&!le?(B.updateQueue=e.updateQueue,B.flags&=-2053,e.lanes&=~n,Tt(e,B,n)):(mB&&t&&rh(B),B.flags|=1,$B(e,B,C,n),B.child)}function up(e,B,t,C,n){if(e===null){var r=t.type;return typeof r=="function"&&!kh(r)&&r.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(B.tag=15,B.type=r,bA(e,B,r,C,n)):(e=ja(t.type,null,C,B,B.mode,n),e.ref=B.ref,e.return=B,B.child=e)}if(r=e.child,!(e.lanes&n)){var i=r.memoizedProps;if(t=t.compare,t=t!==null?t:Di,t(i,C)&&e.ref===B.ref)return Tt(e,B,n)}return B.flags|=1,e=pC(r,C),e.ref=B.ref,e.return=B,B.child=e}function bA(e,B,t,C,n){if(e!==null){var r=e.memoizedProps;if(Di(r,C)&&e.ref===B.ref)if(le=!1,B.pendingProps=C=r,(e.lanes&n)!==0)e.flags&131072&&(le=!0);else return B.lanes=e.lanes,Tt(e,B,n)}return p1(e,B,t,C,n)}function AA(e,B,t){var C=B.pendingProps,n=C.children,r=e!==null?e.memoizedState:null;if(C.mode==="hidden")if(!(B.mode&1))B.memoizedState={baseLanes:0,cachePool:null,transitions:null},oB(Qn,ye),ye|=t;else{if(!(t&1073741824))return e=r!==null?r.baseLanes|t:t,B.lanes=B.childLanes=1073741824,B.memoizedState={baseLanes:e,cachePool:null,transitions:null},B.updateQueue=null,oB(Qn,ye),ye|=e,null;B.memoizedState={baseLanes:0,cachePool:null,transitions:null},C=r!==null?r.baseLanes:t,oB(Qn,ye),ye|=C}else r!==null?(C=r.baseLanes|t,B.memoizedState=null):C=t,oB(Qn,ye),ye|=C;return $B(e,B,n,t),B.child}function vA(e,B){var t=B.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(B.flags|=512,B.flags|=2097152)}function p1(e,B,t,C,n){var r=de(t)?en:ZB.current;return r=ir(B,r),qn(B,n),t=mh(e,B,t,C,r,n),C=gh(),e!==null&&!le?(B.updateQueue=e.updateQueue,B.flags&=-2053,e.lanes&=~n,Tt(e,B,n)):(mB&&C&&rh(B),B.flags|=1,$B(e,B,t,n),B.child)}function dp(e,B,t,C,n){if(de(t)){var r=!0;fo(B)}else r=!1;if(qn(B,n),B.stateNode===null)Ua(e,B),Xb(B,t,C),h1(B,t,C,n),C=!0;else if(e===null){var i=B.stateNode,s=B.memoizedProps;i.props=s;var a=i.context,o=t.contextType;typeof o=="object"&&o!==null?o=Ke(o):(o=de(t)?en:ZB.current,o=ir(B,o));var c=t.getDerivedStateFromProps,l=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function";l||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==C||a!==o)&&np(B,i,C,o),$t=!1;var u=B.memoizedState;i.state=u,Ao(B,C,i,n),a=B.memoizedState,s!==C||u!==a||ue.current||$t?(typeof c=="function"&&(d1(B,t,c,C),a=B.memoizedState),(s=$t||Cp(B,t,s,C,u,a,o))?(l||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(B.flags|=4194308)):(typeof i.componentDidMount=="function"&&(B.flags|=4194308),B.memoizedProps=C,B.memoizedState=a),i.props=C,i.state=a,i.context=o,C=s):(typeof i.componentDidMount=="function"&&(B.flags|=4194308),C=!1)}else{i=B.stateNode,jb(e,B),s=B.memoizedProps,o=B.type===B.elementType?s:je(B.type,s),i.props=o,l=B.pendingProps,u=i.context,a=t.contextType,typeof a=="object"&&a!==null?a=Ke(a):(a=de(t)?en:ZB.current,a=ir(B,a));var m=t.getDerivedStateFromProps;(c=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==l||u!==a)&&np(B,i,C,a),$t=!1,u=B.memoizedState,i.state=u,Ao(B,C,i,n);var d=B.memoizedState;s!==l||u!==d||ue.current||$t?(typeof m=="function"&&(d1(B,t,m,C),d=B.memoizedState),(o=$t||Cp(B,t,o,C,u,d,a)||!1)?(c||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(C,d,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(C,d,a)),typeof i.componentDidUpdate=="function"&&(B.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(B.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(B.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(B.flags|=1024),B.memoizedProps=C,B.memoizedState=d),i.props=C,i.state=d,i.context=a,C=o):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(B.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(B.flags|=1024),C=!1)}return m1(e,B,t,C,r,n)}function m1(e,B,t,C,n,r){vA(e,B);var i=(B.flags&128)!==0;if(!C&&!i)return n&&_2(B,t,!1),Tt(e,B,r);C=B.stateNode,aP.current=B;var s=i&&typeof t.getDerivedStateFromError!="function"?null:C.render();return B.flags|=1,e!==null&&i?(B.child=ar(B,e.child,null,r),B.child=ar(B,null,s,r)):$B(e,B,s,r),B.memoizedState=C.state,n&&_2(B,t,!0),B.child}function yA(e){var B=e.stateNode;B.pendingContext?z2(e,B.pendingContext,B.pendingContext!==B.context):B.context&&z2(e,B.context,!1),dh(e,B.containerInfo)}function hp(e,B,t,C,n){return sr(),sh(n),B.flags|=256,$B(e,B,t,C),B.child}var g1={dehydrated:null,treeContext:null,retryLane:0};function b1(e){return{baseLanes:e,cachePool:null,transitions:null}}function EA(e,B,t){var C=B.pendingProps,n=bB.current,r=!1,i=(B.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(n&2)!==0),s?(r=!0,B.flags&=-129):(e===null||e.memoizedState!==null)&&(n|=1),oB(bB,n&1),e===null)return c1(B),e=B.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(B.mode&1?e.data==="$!"?B.lanes=8:B.lanes=1073741824:B.lanes=1,null):(i=C.children,e=C.fallback,r?(C=B.mode,r=B.child,i={mode:"hidden",children:i},!(C&1)&&r!==null?(r.childLanes=0,r.pendingProps=i):r=Il(i,C,0,null),e=_C(e,C,t,null),r.return=B,e.return=B,r.sibling=e,B.child=r,B.child.memoizedState=b1(t),B.memoizedState=g1,e):vh(B,i));if(n=e.memoizedState,n!==null&&(s=n.dehydrated,s!==null))return oP(e,B,i,C,s,n,t);if(r){r=C.fallback,i=B.mode,n=e.child,s=n.sibling;var a={mode:"hidden",children:C.children};return!(i&1)&&B.child!==n?(C=B.child,C.childLanes=0,C.pendingProps=a,B.deletions=null):(C=pC(n,a),C.subtreeFlags=n.subtreeFlags&14680064),s!==null?r=pC(s,r):(r=_C(r,i,t,null),r.flags|=2),r.return=B,C.return=B,C.sibling=r,B.child=C,C=r,r=B.child,i=e.child.memoizedState,i=i===null?b1(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},r.memoizedState=i,r.childLanes=e.childLanes&~t,B.memoizedState=g1,C}return r=e.child,e=r.sibling,C=pC(r,{mode:"visible",children:C.children}),!(B.mode&1)&&(C.lanes=t),C.return=B,C.sibling=null,e!==null&&(t=B.deletions,t===null?(B.deletions=[e],B.flags|=16):t.push(e)),B.child=C,B.memoizedState=null,C}function vh(e,B){return B=Il({mode:"visible",children:B},e.mode,0,null),B.return=e,e.child=B}function ta(e,B,t,C){return C!==null&&sh(C),ar(B,e.child,null,t),e=vh(B,B.pendingProps.children),e.flags|=2,B.memoizedState=null,e}function oP(e,B,t,C,n,r,i){if(t)return B.flags&256?(B.flags&=-257,C=Gc(Error(S(422))),ta(e,B,i,C)):B.memoizedState!==null?(B.child=e.child,B.flags|=128,null):(r=C.fallback,n=B.mode,C=Il({mode:"visible",children:C.children},n,0,null),r=_C(r,n,i,null),r.flags|=2,C.return=B,r.return=B,C.sibling=r,B.child=C,B.mode&1&&ar(B,e.child,null,i),B.child.memoizedState=b1(i),B.memoizedState=g1,r);if(!(B.mode&1))return ta(e,B,i,null);if(n.data==="$!"){if(C=n.nextSibling&&n.nextSibling.dataset,C)var s=C.dgst;return C=s,r=Error(S(419)),C=Gc(r,C,void 0),ta(e,B,i,C)}if(s=(i&e.childLanes)!==0,le||s){if(C=KB,C!==null){switch(i&-i){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:n=0}n=n&(C.suspendedLanes|i)?0:n,n!==0&&n!==r.retryLane&&(r.retryLane=n,Lt(e,n),et(C,e,n,-1))}return Dh(),C=Gc(Error(S(421))),ta(e,B,i,C)}return n.data==="$?"?(B.flags|=128,B.child=e.child,B=yP.bind(null,e),n._reactRetry=B,null):(e=r.treeContext,Ee=uC(n.nextSibling),Ie=B,mB=!0,Xe=null,e!==null&&(He[Me++]=wt,He[Me++]=Dt,He[Me++]=tn,wt=e.id,Dt=e.overflow,tn=B),B=vh(B,C.children),B.flags|=4096,B)}function fp(e,B,t){e.lanes|=B;var C=e.alternate;C!==null&&(C.lanes|=B),u1(e.return,B,t)}function xc(e,B,t,C,n){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:B,rendering:null,renderingStartTime:0,last:C,tail:t,tailMode:n}:(r.isBackwards=B,r.rendering=null,r.renderingStartTime=0,r.last=C,r.tail=t,r.tailMode=n)}function IA(e,B,t){var C=B.pendingProps,n=C.revealOrder,r=C.tail;if($B(e,B,C.children,t),C=bB.current,C&2)C=C&1|2,B.flags|=128;else{if(e!==null&&e.flags&128)B:for(e=B.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fp(e,t,B);else if(e.tag===19)fp(e,t,B);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===B)break B;for(;e.sibling===null;){if(e.return===null||e.return===B)break B;e=e.return}e.sibling.return=e.return,e=e.sibling}C&=1}if(oB(bB,C),!(B.mode&1))B.memoizedState=null;else switch(n){case"forwards":for(t=B.child,n=null;t!==null;)e=t.alternate,e!==null&&vo(e)===null&&(n=t),t=t.sibling;t=n,t===null?(n=B.child,B.child=null):(n=t.sibling,t.sibling=null),xc(B,!1,n,t,r);break;case"backwards":for(t=null,n=B.child,B.child=null;n!==null;){if(e=n.alternate,e!==null&&vo(e)===null){B.child=n;break}e=n.sibling,n.sibling=t,t=n,n=e}xc(B,!0,t,null,r);break;case"together":xc(B,!1,null,null,void 0);break;default:B.memoizedState=null}return B.child}function Ua(e,B){!(B.mode&1)&&e!==null&&(e.alternate=null,B.alternate=null,B.flags|=2)}function Tt(e,B,t){if(e!==null&&(B.dependencies=e.dependencies),nn|=B.lanes,!(t&B.childLanes))return null;if(e!==null&&B.child!==e.child)throw Error(S(153));if(B.child!==null){for(e=B.child,t=pC(e,e.pendingProps),B.child=t,t.return=B;e.sibling!==null;)e=e.sibling,t=t.sibling=pC(e,e.pendingProps),t.return=B;t.sibling=null}return B.child}function lP(e,B,t){switch(B.tag){case 3:yA(B),sr();break;case 5:zb(B);break;case 1:de(B.type)&&fo(B);break;case 4:dh(B,B.stateNode.containerInfo);break;case 10:var C=B.type._context,n=B.memoizedProps.value;oB(go,C._currentValue),C._currentValue=n;break;case 13:if(C=B.memoizedState,C!==null)return C.dehydrated!==null?(oB(bB,bB.current&1),B.flags|=128,null):t&B.child.childLanes?EA(e,B,t):(oB(bB,bB.current&1),e=Tt(e,B,t),e!==null?e.sibling:null);oB(bB,bB.current&1);break;case 19:if(C=(t&B.childLanes)!==0,e.flags&128){if(C)return IA(e,B,t);B.flags|=128}if(n=B.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),oB(bB,bB.current),C)break;return null;case 22:case 23:return B.lanes=0,AA(e,B,t)}return Tt(e,B,t)}var SA,A1,wA,DA;SA=function(e,B){for(var t=B.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===B)break;for(;t.sibling===null;){if(t.return===null||t.return===B)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};A1=function(){};wA=function(e,B,t,C){var n=e.memoizedProps;if(n!==C){e=B.stateNode,JC(dt.current);var r=null;switch(t){case"input":n=Ju(e,n),C=Ju(e,C),r=[];break;case"select":n=vB({},n,{value:void 0}),C=vB({},C,{value:void 0}),r=[];break;case"textarea":n=Wu(e,n),C=Wu(e,C),r=[];break;default:typeof n.onClick!="function"&&typeof C.onClick=="function"&&(e.onclick=uo)}Yu(t,C);var i;t=null;for(o in n)if(!C.hasOwnProperty(o)&&n.hasOwnProperty(o)&&n[o]!=null)if(o==="style"){var s=n[o];for(i in s)s.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else o!=="dangerouslySetInnerHTML"&&o!=="children"&&o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ai.hasOwnProperty(o)?r||(r=[]):(r=r||[]).push(o,null));for(o in C){var a=C[o];if(s=n!=null?n[o]:void 0,C.hasOwnProperty(o)&&a!==s&&(a!=null||s!=null))if(o==="style")if(s){for(i in s)!s.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in a)a.hasOwnProperty(i)&&s[i]!==a[i]&&(t||(t={}),t[i]=a[i])}else t||(r||(r=[]),r.push(o,t)),t=a;else o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(r=r||[]).push(o,a)):o==="children"?typeof a!="string"&&typeof a!="number"||(r=r||[]).push(o,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&(Ai.hasOwnProperty(o)?(a!=null&&o==="onScroll"&&uB("scroll",e),r||s===a||(r=[])):(r=r||[]).push(o,a))}t&&(r=r||[]).push("style",t);var o=r;(B.updateQueue=o)&&(B.flags|=4)}};DA=function(e,B,t,C){t!==C&&(B.flags|=4)};function Gr(e,B){if(!mB)switch(e.tailMode){case"hidden":B=e.tail;for(var t=null;B!==null;)B.alternate!==null&&(t=B),B=B.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var C=null;t!==null;)t.alternate!==null&&(C=t),t=t.sibling;C===null?B||e.tail===null?e.tail=null:e.tail.sibling=null:C.sibling=null}}function jB(e){var B=e.alternate!==null&&e.alternate.child===e.child,t=0,C=0;if(B)for(var n=e.child;n!==null;)t|=n.lanes|n.childLanes,C|=n.subtreeFlags&14680064,C|=n.flags&14680064,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)t|=n.lanes|n.childLanes,C|=n.subtreeFlags,C|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=C,e.childLanes=t,B}function cP(e,B,t){var C=B.pendingProps;switch(ih(B),B.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jB(B),null;case 1:return de(B.type)&&ho(),jB(B),null;case 3:return C=B.stateNode,or(),fB(ue),fB(ZB),fh(),C.pendingContext&&(C.context=C.pendingContext,C.pendingContext=null),(e===null||e.child===null)&&(Ba(B)?B.flags|=4:e===null||e.memoizedState.isDehydrated&&!(B.flags&256)||(B.flags|=1024,Xe!==null&&(D1(Xe),Xe=null))),A1(e,B),jB(B),null;case 5:hh(B);var n=JC(Oi.current);if(t=B.type,e!==null&&B.stateNode!=null)wA(e,B,t,C,n),e.ref!==B.ref&&(B.flags|=512,B.flags|=2097152);else{if(!C){if(B.stateNode===null)throw Error(S(166));return jB(B),null}if(e=JC(dt.current),Ba(B)){C=B.stateNode,t=B.type;var r=B.memoizedProps;switch(C[lt]=B,C[Ni]=r,e=(B.mode&1)!==0,t){case"dialog":uB("cancel",C),uB("close",C);break;case"iframe":case"object":case"embed":uB("load",C);break;case"video":case"audio":for(n=0;n<$r.length;n++)uB($r[n],C);break;case"source":uB("error",C);break;case"img":case"image":case"link":uB("error",C),uB("load",C);break;case"details":uB("toggle",C);break;case"input":I2(C,r),uB("invalid",C);break;case"select":C._wrapperState={wasMultiple:!!r.multiple},uB("invalid",C);break;case"textarea":w2(C,r),uB("invalid",C)}Yu(t,r),n=null;for(var i in r)if(r.hasOwnProperty(i)){var s=r[i];i==="children"?typeof s=="string"?C.textContent!==s&&(r.suppressHydrationWarning!==!0&&$s(C.textContent,s,e),n=["children",s]):typeof s=="number"&&C.textContent!==""+s&&(r.suppressHydrationWarning!==!0&&$s(C.textContent,s,e),n=["children",""+s]):Ai.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&uB("scroll",C)}switch(t){case"input":Ws(C),S2(C,r,!0);break;case"textarea":Ws(C),D2(C);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(C.onclick=uo)}C=n,B.updateQueue=C,C!==null&&(B.flags|=4)}else{i=n.nodeType===9?n:n.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bb(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof C.is=="string"?e=i.createElement(t,{is:C.is}):(e=i.createElement(t),t==="select"&&(i=e,C.multiple?i.multiple=!0:C.size&&(i.size=C.size))):e=i.createElementNS(e,t),e[lt]=B,e[Ni]=C,SA(e,B,!1,!1),B.stateNode=e;B:{switch(i=Xu(t,C),t){case"dialog":uB("cancel",e),uB("close",e),n=C;break;case"iframe":case"object":case"embed":uB("load",e),n=C;break;case"video":case"audio":for(n=0;n<$r.length;n++)uB($r[n],e);n=C;break;case"source":uB("error",e),n=C;break;case"img":case"image":case"link":uB("error",e),uB("load",e),n=C;break;case"details":uB("toggle",e),n=C;break;case"input":I2(e,C),n=Ju(e,C),uB("invalid",e);break;case"option":n=C;break;case"select":e._wrapperState={wasMultiple:!!C.multiple},n=vB({},C,{value:void 0}),uB("invalid",e);break;case"textarea":w2(e,C),n=Wu(e,C),uB("invalid",e);break;default:n=C}Yu(t,n),s=n;for(r in s)if(s.hasOwnProperty(r)){var a=s[r];r==="style"?Cb(e,a):r==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&eb(e,a)):r==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&vi(e,a):typeof a=="number"&&vi(e,""+a):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(Ai.hasOwnProperty(r)?a!=null&&r==="onScroll"&&uB("scroll",e):a!=null&&Wd(e,r,a,i))}switch(t){case"input":Ws(e),S2(e,C,!1);break;case"textarea":Ws(e),D2(e);break;case"option":C.value!=null&&e.setAttribute("value",""+EC(C.value));break;case"select":e.multiple=!!C.multiple,r=C.value,r!=null?jn(e,!!C.multiple,r,!1):C.defaultValue!=null&&jn(e,!!C.multiple,C.defaultValue,!0);break;default:typeof n.onClick=="function"&&(e.onclick=uo)}switch(t){case"button":case"input":case"select":case"textarea":C=!!C.autoFocus;break B;case"img":C=!0;break B;default:C=!1}}C&&(B.flags|=4)}B.ref!==null&&(B.flags|=512,B.flags|=2097152)}return jB(B),null;case 6:if(e&&B.stateNode!=null)DA(e,B,e.memoizedProps,C);else{if(typeof C!="string"&&B.stateNode===null)throw Error(S(166));if(t=JC(Oi.current),JC(dt.current),Ba(B)){if(C=B.stateNode,t=B.memoizedProps,C[lt]=B,(r=C.nodeValue!==t)&&(e=Ie,e!==null))switch(e.tag){case 3:$s(C.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&$s(C.nodeValue,t,(e.mode&1)!==0)}r&&(B.flags|=4)}else C=(t.nodeType===9?t:t.ownerDocument).createTextNode(C),C[lt]=B,B.stateNode=C}return jB(B),null;case 13:if(fB(bB),C=B.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(mB&&Ee!==null&&B.mode&1&&!(B.flags&128))Vb(),sr(),B.flags|=98560,r=!1;else if(r=Ba(B),C!==null&&C.dehydrated!==null){if(e===null){if(!r)throw Error(S(318));if(r=B.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(S(317));r[lt]=B}else sr(),!(B.flags&128)&&(B.memoizedState=null),B.flags|=4;jB(B),r=!1}else Xe!==null&&(D1(Xe),Xe=null),r=!0;if(!r)return B.flags&65536?B:null}return B.flags&128?(B.lanes=t,B):(C=C!==null,C!==(e!==null&&e.memoizedState!==null)&&C&&(B.child.flags|=8192,B.mode&1&&(e===null||bB.current&1?RB===0&&(RB=3):Dh())),B.updateQueue!==null&&(B.flags|=4),jB(B),null);case 4:return or(),A1(e,B),e===null&&ki(B.stateNode.containerInfo),jB(B),null;case 10:return lh(B.type._context),jB(B),null;case 17:return de(B.type)&&ho(),jB(B),null;case 19:if(fB(bB),r=B.memoizedState,r===null)return jB(B),null;if(C=(B.flags&128)!==0,i=r.rendering,i===null)if(C)Gr(r,!1);else{if(RB!==0||e!==null&&e.flags&128)for(e=B.child;e!==null;){if(i=vo(e),i!==null){for(B.flags|=128,Gr(r,!1),C=i.updateQueue,C!==null&&(B.updateQueue=C,B.flags|=4),B.subtreeFlags=0,C=t,t=B.child;t!==null;)r=t,e=C,r.flags&=14680066,i=r.alternate,i===null?(r.childLanes=0,r.lanes=e,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=i.childLanes,r.lanes=i.lanes,r.child=i.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=i.memoizedProps,r.memoizedState=i.memoizedState,r.updateQueue=i.updateQueue,r.type=i.type,e=i.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return oB(bB,bB.current&1|2),B.child}e=e.sibling}r.tail!==null&&DB()>cr&&(B.flags|=128,C=!0,Gr(r,!1),B.lanes=4194304)}else{if(!C)if(e=vo(i),e!==null){if(B.flags|=128,C=!0,t=e.updateQueue,t!==null&&(B.updateQueue=t,B.flags|=4),Gr(r,!0),r.tail===null&&r.tailMode==="hidden"&&!i.alternate&&!mB)return jB(B),null}else 2*DB()-r.renderingStartTime>cr&&t!==1073741824&&(B.flags|=128,C=!0,Gr(r,!1),B.lanes=4194304);r.isBackwards?(i.sibling=B.child,B.child=i):(t=r.last,t!==null?t.sibling=i:B.child=i,r.last=i)}return r.tail!==null?(B=r.tail,r.rendering=B,r.tail=B.sibling,r.renderingStartTime=DB(),B.sibling=null,t=bB.current,oB(bB,C?t&1|2:t&1),B):(jB(B),null);case 22:case 23:return wh(),C=B.memoizedState!==null,e!==null&&e.memoizedState!==null!==C&&(B.flags|=8192),C&&B.mode&1?ye&1073741824&&(jB(B),B.subtreeFlags&6&&(B.flags|=8192)):jB(B),null;case 24:return null;case 25:return null}throw Error(S(156,B.tag))}function uP(e,B){switch(ih(B),B.tag){case 1:return de(B.type)&&ho(),e=B.flags,e&65536?(B.flags=e&-65537|128,B):null;case 3:return or(),fB(ue),fB(ZB),fh(),e=B.flags,e&65536&&!(e&128)?(B.flags=e&-65537|128,B):null;case 5:return hh(B),null;case 13:if(fB(bB),e=B.memoizedState,e!==null&&e.dehydrated!==null){if(B.alternate===null)throw Error(S(340));sr()}return e=B.flags,e&65536?(B.flags=e&-65537|128,B):null;case 19:return fB(bB),null;case 4:return or(),null;case 10:return lh(B.type._context),null;case 22:case 23:return wh(),null;case 24:return null;default:return null}}var Ca=!1,YB=!1,dP=typeof WeakSet=="function"?WeakSet:Set,H=null;function Kn(e,B){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(C){EB(e,B,C)}else t.current=null}function kA(e,B,t){try{t()}catch(C){EB(e,B,C)}}var pp=!1;function hP(e,B){if(n1=oo,e=Fb(),nh(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else B:{t=(t=e.ownerDocument)&&t.defaultView||window;var C=t.getSelection&&t.getSelection();if(C&&C.rangeCount!==0){t=C.anchorNode;var n=C.anchorOffset,r=C.focusNode;C=C.focusOffset;try{t.nodeType,r.nodeType}catch{t=null;break B}var i=0,s=-1,a=-1,o=0,c=0,l=e,u=null;e:for(;;){for(var m;l!==t||n!==0&&l.nodeType!==3||(s=i+n),l!==r||C!==0&&l.nodeType!==3||(a=i+C),l.nodeType===3&&(i+=l.nodeValue.length),(m=l.firstChild)!==null;)u=l,l=m;for(;;){if(l===e)break e;if(u===t&&++o===n&&(s=i),u===r&&++c===C&&(a=i),(m=l.nextSibling)!==null)break;l=u,u=l.parentNode}l=m}t=s===-1||a===-1?null:{start:s,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(r1={focusedElem:e,selectionRange:t},oo=!1,H=B;H!==null;)if(B=H,e=B.child,(B.subtreeFlags&1028)!==0&&e!==null)e.return=B,H=e;else for(;H!==null;){B=H;try{var d=B.alternate;if(B.flags&1024)switch(B.tag){case 0:case 11:case 15:break;case 1:if(d!==null){var f=d.memoizedProps,g=d.memoizedState,h=B.stateNode,p=h.getSnapshotBeforeUpdate(B.elementType===B.type?f:je(B.type,f),g);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var b=B.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(A){EB(B,B.return,A)}if(e=B.sibling,e!==null){e.return=B.return,H=e;break}H=B.return}return d=pp,pp=!1,d}function ai(e,B,t){var C=B.updateQueue;if(C=C!==null?C.lastEffect:null,C!==null){var n=C=C.next;do{if((n.tag&e)===e){var r=n.destroy;n.destroy=void 0,r!==void 0&&kA(B,t,r)}n=n.next}while(n!==C)}}function yl(e,B){if(B=B.updateQueue,B=B!==null?B.lastEffect:null,B!==null){var t=B=B.next;do{if((t.tag&e)===e){var C=t.create;t.destroy=C()}t=t.next}while(t!==B)}}function v1(e){var B=e.ref;if(B!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof B=="function"?B(e):B.current=e}}function PA(e){var B=e.alternate;B!==null&&(e.alternate=null,PA(B)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(B=e.stateNode,B!==null&&(delete B[lt],delete B[Ni],delete B[a1],delete B[qk],delete B[zk])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function NA(e){return e.tag===5||e.tag===3||e.tag===4}function mp(e){B:for(;;){for(;e.sibling===null;){if(e.return===null||NA(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue B;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function y1(e,B,t){var C=e.tag;if(C===5||C===6)e=e.stateNode,B?t.nodeType===8?t.parentNode.insertBefore(e,B):t.insertBefore(e,B):(t.nodeType===8?(B=t.parentNode,B.insertBefore(e,t)):(B=t,B.appendChild(e)),t=t._reactRootContainer,t!=null||B.onclick!==null||(B.onclick=uo));else if(C!==4&&(e=e.child,e!==null))for(y1(e,B,t),e=e.sibling;e!==null;)y1(e,B,t),e=e.sibling}function E1(e,B,t){var C=e.tag;if(C===5||C===6)e=e.stateNode,B?t.insertBefore(e,B):t.appendChild(e);else if(C!==4&&(e=e.child,e!==null))for(E1(e,B,t),e=e.sibling;e!==null;)E1(e,B,t),e=e.sibling}var QB=null,Ye=!1;function Xt(e,B,t){for(t=t.child;t!==null;)FA(e,B,t),t=t.sibling}function FA(e,B,t){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(hl,t)}catch{}switch(t.tag){case 5:YB||Kn(t,B);case 6:var C=QB,n=Ye;QB=null,Xt(e,B,t),QB=C,Ye=n,QB!==null&&(Ye?(e=QB,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):QB.removeChild(t.stateNode));break;case 18:QB!==null&&(Ye?(e=QB,t=t.stateNode,e.nodeType===8?Oc(e.parentNode,t):e.nodeType===1&&Oc(e,t),Si(e)):Oc(QB,t.stateNode));break;case 4:C=QB,n=Ye,QB=t.stateNode.containerInfo,Ye=!0,Xt(e,B,t),QB=C,Ye=n;break;case 0:case 11:case 14:case 15:if(!YB&&(C=t.updateQueue,C!==null&&(C=C.lastEffect,C!==null))){n=C=C.next;do{var r=n,i=r.destroy;r=r.tag,i!==void 0&&(r&2||r&4)&&kA(t,B,i),n=n.next}while(n!==C)}Xt(e,B,t);break;case 1:if(!YB&&(Kn(t,B),C=t.stateNode,typeof C.componentWillUnmount=="function"))try{C.props=t.memoizedProps,C.state=t.memoizedState,C.componentWillUnmount()}catch(s){EB(t,B,s)}Xt(e,B,t);break;case 21:Xt(e,B,t);break;case 22:t.mode&1?(YB=(C=YB)||t.memoizedState!==null,Xt(e,B,t),YB=C):Xt(e,B,t);break;default:Xt(e,B,t)}}function gp(e){var B=e.updateQueue;if(B!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new dP),B.forEach(function(C){var n=EP.bind(null,e,C);t.has(C)||(t.add(C),C.then(n,n))})}}function Ve(e,B){var t=B.deletions;if(t!==null)for(var C=0;C<t.length;C++){var n=t[C];try{var r=e,i=B,s=i;B:for(;s!==null;){switch(s.tag){case 5:QB=s.stateNode,Ye=!1;break B;case 3:QB=s.stateNode.containerInfo,Ye=!0;break B;case 4:QB=s.stateNode.containerInfo,Ye=!0;break B}s=s.return}if(QB===null)throw Error(S(160));FA(r,i,n),QB=null,Ye=!1;var a=n.alternate;a!==null&&(a.return=null),n.return=null}catch(o){EB(n,B,o)}}if(B.subtreeFlags&12854)for(B=B.child;B!==null;)OA(B,e),B=B.sibling}function OA(e,B){var t=e.alternate,C=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ve(B,e),st(e),C&4){try{ai(3,e,e.return),yl(3,e)}catch(f){EB(e,e.return,f)}try{ai(5,e,e.return)}catch(f){EB(e,e.return,f)}}break;case 1:Ve(B,e),st(e),C&512&&t!==null&&Kn(t,t.return);break;case 5:if(Ve(B,e),st(e),C&512&&t!==null&&Kn(t,t.return),e.flags&32){var n=e.stateNode;try{vi(n,"")}catch(f){EB(e,e.return,f)}}if(C&4&&(n=e.stateNode,n!=null)){var r=e.memoizedProps,i=t!==null?t.memoizedProps:r,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&r.type==="radio"&&r.name!=null&&_g(n,r),Xu(s,i);var o=Xu(s,r);for(i=0;i<a.length;i+=2){var c=a[i],l=a[i+1];c==="style"?Cb(n,l):c==="dangerouslySetInnerHTML"?eb(n,l):c==="children"?vi(n,l):Wd(n,c,l,o)}switch(s){case"input":Uu(n,r);break;case"textarea":$g(n,r);break;case"select":var u=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!r.multiple;var m=r.value;m!=null?jn(n,!!r.multiple,m,!1):u!==!!r.multiple&&(r.defaultValue!=null?jn(n,!!r.multiple,r.defaultValue,!0):jn(n,!!r.multiple,r.multiple?[]:"",!1))}n[Ni]=r}catch(f){EB(e,e.return,f)}}break;case 6:if(Ve(B,e),st(e),C&4){if(e.stateNode===null)throw Error(S(162));n=e.stateNode,r=e.memoizedProps;try{n.nodeValue=r}catch(f){EB(e,e.return,f)}}break;case 3:if(Ve(B,e),st(e),C&4&&t!==null&&t.memoizedState.isDehydrated)try{Si(B.containerInfo)}catch(f){EB(e,e.return,f)}break;case 4:Ve(B,e),st(e);break;case 13:Ve(B,e),st(e),n=e.child,n.flags&8192&&(r=n.memoizedState!==null,n.stateNode.isHidden=r,!r||n.alternate!==null&&n.alternate.memoizedState!==null||(Ih=DB())),C&4&&gp(e);break;case 22:if(c=t!==null&&t.memoizedState!==null,e.mode&1?(YB=(o=YB)||c,Ve(B,e),YB=o):Ve(B,e),st(e),C&8192){if(o=e.memoizedState!==null,(e.stateNode.isHidden=o)&&!c&&e.mode&1)for(H=e,c=e.child;c!==null;){for(l=H=c;H!==null;){switch(u=H,m=u.child,u.tag){case 0:case 11:case 14:case 15:ai(4,u,u.return);break;case 1:Kn(u,u.return);var d=u.stateNode;if(typeof d.componentWillUnmount=="function"){C=u,t=u.return;try{B=C,d.props=B.memoizedProps,d.state=B.memoizedState,d.componentWillUnmount()}catch(f){EB(C,t,f)}}break;case 5:Kn(u,u.return);break;case 22:if(u.memoizedState!==null){Ap(l);continue}}m!==null?(m.return=u,H=m):Ap(l)}c=c.sibling}B:for(c=null,l=e;;){if(l.tag===5){if(c===null){c=l;try{n=l.stateNode,o?(r=n.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(s=l.stateNode,a=l.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=tb("display",i))}catch(f){EB(e,e.return,f)}}}else if(l.tag===6){if(c===null)try{l.stateNode.nodeValue=o?"":l.memoizedProps}catch(f){EB(e,e.return,f)}}else if((l.tag!==22&&l.tag!==23||l.memoizedState===null||l===e)&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break B;for(;l.sibling===null;){if(l.return===null||l.return===e)break B;c===l&&(c=null),l=l.return}c===l&&(c=null),l.sibling.return=l.return,l=l.sibling}}break;case 19:Ve(B,e),st(e),C&4&&gp(e);break;case 21:break;default:Ve(B,e),st(e)}}function st(e){var B=e.flags;if(B&2){try{B:{for(var t=e.return;t!==null;){if(NA(t)){var C=t;break B}t=t.return}throw Error(S(160))}switch(C.tag){case 5:var n=C.stateNode;C.flags&32&&(vi(n,""),C.flags&=-33);var r=mp(e);E1(e,r,n);break;case 3:case 4:var i=C.stateNode.containerInfo,s=mp(e);y1(e,s,i);break;default:throw Error(S(161))}}catch(a){EB(e,e.return,a)}e.flags&=-3}B&4096&&(e.flags&=-4097)}function fP(e,B,t){H=e,RA(e)}function RA(e,B,t){for(var C=(e.mode&1)!==0;H!==null;){var n=H,r=n.child;if(n.tag===22&&C){var i=n.memoizedState!==null||Ca;if(!i){var s=n.alternate,a=s!==null&&s.memoizedState!==null||YB;s=Ca;var o=YB;if(Ca=i,(YB=a)&&!o)for(H=n;H!==null;)i=H,a=i.child,i.tag===22&&i.memoizedState!==null?vp(n):a!==null?(a.return=i,H=a):vp(n);for(;r!==null;)H=r,RA(r),r=r.sibling;H=n,Ca=s,YB=o}bp(e)}else n.subtreeFlags&8772&&r!==null?(r.return=n,H=r):bp(e)}}function bp(e){for(;H!==null;){var B=H;if(B.flags&8772){var t=B.alternate;try{if(B.flags&8772)switch(B.tag){case 0:case 11:case 15:YB||yl(5,B);break;case 1:var C=B.stateNode;if(B.flags&4&&!YB)if(t===null)C.componentDidMount();else{var n=B.elementType===B.type?t.memoizedProps:je(B.type,t.memoizedProps);C.componentDidUpdate(n,t.memoizedState,C.__reactInternalSnapshotBeforeUpdate)}var r=B.updateQueue;r!==null&&tp(B,r,C);break;case 3:var i=B.updateQueue;if(i!==null){if(t=null,B.child!==null)switch(B.child.tag){case 5:t=B.child.stateNode;break;case 1:t=B.child.stateNode}tp(B,i,t)}break;case 5:var s=B.stateNode;if(t===null&&B.flags&4){t=s;var a=B.memoizedProps;switch(B.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(B.memoizedState===null){var o=B.alternate;if(o!==null){var c=o.memoizedState;if(c!==null){var l=c.dehydrated;l!==null&&Si(l)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}YB||B.flags&512&&v1(B)}catch(u){EB(B,B.return,u)}}if(B===e){H=null;break}if(t=B.sibling,t!==null){t.return=B.return,H=t;break}H=B.return}}function Ap(e){for(;H!==null;){var B=H;if(B===e){H=null;break}var t=B.sibling;if(t!==null){t.return=B.return,H=t;break}H=B.return}}function vp(e){for(;H!==null;){var B=H;try{switch(B.tag){case 0:case 11:case 15:var t=B.return;try{yl(4,B)}catch(a){EB(B,t,a)}break;case 1:var C=B.stateNode;if(typeof C.componentDidMount=="function"){var n=B.return;try{C.componentDidMount()}catch(a){EB(B,n,a)}}var r=B.return;try{v1(B)}catch(a){EB(B,r,a)}break;case 5:var i=B.return;try{v1(B)}catch(a){EB(B,i,a)}}}catch(a){EB(B,B.return,a)}if(B===e){H=null;break}var s=B.sibling;if(s!==null){s.return=B.return,H=s;break}H=B.return}}var pP=Math.ceil,Io=Ut.ReactCurrentDispatcher,yh=Ut.ReactCurrentOwner,Ge=Ut.ReactCurrentBatchConfig,_=0,KB=null,kB=null,JB=0,ye=0,Qn=RC(0),RB=0,Li=null,nn=0,El=0,Eh=0,oi=null,oe=null,Ih=0,cr=1/0,Et=null,So=!1,I1=null,hC=null,na=!1,sC=null,wo=0,li=0,S1=null,Va=-1,Wa=0;function te(){return _&6?DB():Va!==-1?Va:Va=DB()}function fC(e){return e.mode&1?_&2&&JB!==0?JB&-JB:$k.transition!==null?(Wa===0&&(Wa=fb()),Wa):(e=tB,e!==0||(e=window.event,e=e===void 0?16:yb(e.type)),e):1}function et(e,B,t,C){if(50<li)throw li=0,S1=null,Error(S(185));os(e,t,C),(!(_&2)||e!==KB)&&(e===KB&&(!(_&2)&&(El|=t),RB===4&&eC(e,JB)),he(e,C),t===1&&_===0&&!(B.mode&1)&&(cr=DB()+500,bl&&HC()))}function he(e,B){var t=e.callbackNode;$D(e,B);var C=ao(e,e===KB?JB:0);if(C===0)t!==null&&N2(t),e.callbackNode=null,e.callbackPriority=0;else if(B=C&-C,e.callbackPriority!==B){if(t!=null&&N2(t),B===1)e.tag===0?_k(yp.bind(null,e)):Qb(yp.bind(null,e)),Xk(function(){!(_&6)&&HC()}),t=null;else{switch(pb(C)){case 1:t=qd;break;case 4:t=db;break;case 16:t=so;break;case 536870912:t=hb;break;default:t=so}t=QA(t,HA.bind(null,e))}e.callbackPriority=B,e.callbackNode=t}}function HA(e,B){if(Va=-1,Wa=0,_&6)throw Error(S(327));var t=e.callbackNode;if(zn()&&e.callbackNode!==t)return null;var C=ao(e,e===KB?JB:0);if(C===0)return null;if(C&30||C&e.expiredLanes||B)B=Do(e,C);else{B=C;var n=_;_|=2;var r=LA();(KB!==e||JB!==B)&&(Et=null,cr=DB()+500,zC(e,B));do try{bP();break}catch(s){MA(e,s)}while(1);oh(),Io.current=r,_=n,kB!==null?B=0:(KB=null,JB=0,B=RB)}if(B!==0){if(B===2&&(n=$u(e),n!==0&&(C=n,B=w1(e,n))),B===1)throw t=Li,zC(e,0),eC(e,C),he(e,DB()),t;if(B===6)eC(e,C);else{if(n=e.current.alternate,!(C&30)&&!mP(n)&&(B=Do(e,C),B===2&&(r=$u(e),r!==0&&(C=r,B=w1(e,r))),B===1))throw t=Li,zC(e,0),eC(e,C),he(e,DB()),t;switch(e.finishedWork=n,e.finishedLanes=C,B){case 0:case 1:throw Error(S(345));case 2:TC(e,oe,Et);break;case 3:if(eC(e,C),(C&130023424)===C&&(B=Ih+500-DB(),10<B)){if(ao(e,0)!==0)break;if(n=e.suspendedLanes,(n&C)!==C){te(),e.pingedLanes|=e.suspendedLanes&n;break}e.timeoutHandle=s1(TC.bind(null,e,oe,Et),B);break}TC(e,oe,Et);break;case 4:if(eC(e,C),(C&4194240)===C)break;for(B=e.eventTimes,n=-1;0<C;){var i=31-Bt(C);r=1<<i,i=B[i],i>n&&(n=i),C&=~r}if(C=n,C=DB()-C,C=(120>C?120:480>C?480:1080>C?1080:1920>C?1920:3e3>C?3e3:4320>C?4320:1960*pP(C/1960))-C,10<C){e.timeoutHandle=s1(TC.bind(null,e,oe,Et),C);break}TC(e,oe,Et);break;case 5:TC(e,oe,Et);break;default:throw Error(S(329))}}}return he(e,DB()),e.callbackNode===t?HA.bind(null,e):null}function w1(e,B){var t=oi;return e.current.memoizedState.isDehydrated&&(zC(e,B).flags|=256),e=Do(e,B),e!==2&&(B=oe,oe=t,B!==null&&D1(B)),e}function D1(e){oe===null?oe=e:oe.push.apply(oe,e)}function mP(e){for(var B=e;;){if(B.flags&16384){var t=B.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var C=0;C<t.length;C++){var n=t[C],r=n.getSnapshot;n=n.value;try{if(!nt(r(),n))return!1}catch{return!1}}}if(t=B.child,B.subtreeFlags&16384&&t!==null)t.return=B,B=t;else{if(B===e)break;for(;B.sibling===null;){if(B.return===null||B.return===e)return!0;B=B.return}B.sibling.return=B.return,B=B.sibling}}return!0}function eC(e,B){for(B&=~Eh,B&=~El,e.suspendedLanes|=B,e.pingedLanes&=~B,e=e.expirationTimes;0<B;){var t=31-Bt(B),C=1<<t;e[t]=-1,B&=~C}}function yp(e){if(_&6)throw Error(S(327));zn();var B=ao(e,0);if(!(B&1))return he(e,DB()),null;var t=Do(e,B);if(e.tag!==0&&t===2){var C=$u(e);C!==0&&(B=C,t=w1(e,C))}if(t===1)throw t=Li,zC(e,0),eC(e,B),he(e,DB()),t;if(t===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=B,TC(e,oe,Et),he(e,DB()),null}function Sh(e,B){var t=_;_|=1;try{return e(B)}finally{_=t,_===0&&(cr=DB()+500,bl&&HC())}}function rn(e){sC!==null&&sC.tag===0&&!(_&6)&&zn();var B=_;_|=1;var t=Ge.transition,C=tB;try{if(Ge.transition=null,tB=1,e)return e()}finally{tB=C,Ge.transition=t,_=B,!(_&6)&&HC()}}function wh(){ye=Qn.current,fB(Qn)}function zC(e,B){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Yk(t)),kB!==null)for(t=kB.return;t!==null;){var C=t;switch(ih(C),C.tag){case 1:C=C.type.childContextTypes,C!=null&&ho();break;case 3:or(),fB(ue),fB(ZB),fh();break;case 5:hh(C);break;case 4:or();break;case 13:fB(bB);break;case 19:fB(bB);break;case 10:lh(C.type._context);break;case 22:case 23:wh()}t=t.return}if(KB=e,kB=e=pC(e.current,null),JB=ye=B,RB=0,Li=null,Eh=El=nn=0,oe=oi=null,QC!==null){for(B=0;B<QC.length;B++)if(t=QC[B],C=t.interleaved,C!==null){t.interleaved=null;var n=C.next,r=t.pending;if(r!==null){var i=r.next;r.next=n,C.next=i}t.pending=C}QC=null}return e}function MA(e,B){do{var t=kB;try{if(oh(),Qa.current=Eo,yo){for(var C=AB.memoizedState;C!==null;){var n=C.queue;n!==null&&(n.pending=null),C=C.next}yo=!1}if(Cn=0,TB=NB=AB=null,si=!1,Ri=0,yh.current=null,t===null||t.return===null){RB=1,Li=B,kB=null;break}B:{var r=e,i=t.return,s=t,a=B;if(B=JB,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var o=a,c=s,l=c.tag;if(!(c.mode&1)&&(l===0||l===11||l===15)){var u=c.alternate;u?(c.updateQueue=u.updateQueue,c.memoizedState=u.memoizedState,c.lanes=u.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=op(i);if(m!==null){m.flags&=-257,lp(m,i,s,r,B),m.mode&1&&ap(r,o,B),B=m,a=o;var d=B.updateQueue;if(d===null){var f=new Set;f.add(a),B.updateQueue=f}else d.add(a);break B}else{if(!(B&1)){ap(r,o,B),Dh();break B}a=Error(S(426))}}else if(mB&&s.mode&1){var g=op(i);if(g!==null){!(g.flags&65536)&&(g.flags|=256),lp(g,i,s,r,B),sh(lr(a,s));break B}}r=a=lr(a,s),RB!==4&&(RB=2),oi===null?oi=[r]:oi.push(r),r=i;do{switch(r.tag){case 3:r.flags|=65536,B&=-B,r.lanes|=B;var h=mA(r,a,B);ep(r,h);break B;case 1:s=a;var p=r.type,b=r.stateNode;if(!(r.flags&128)&&(typeof p.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(hC===null||!hC.has(b)))){r.flags|=65536,B&=-B,r.lanes|=B;var A=gA(r,s,B);ep(r,A);break B}}r=r.return}while(r!==null)}GA(t)}catch(y){B=y,kB===t&&t!==null&&(kB=t=t.return);continue}break}while(1)}function LA(){var e=Io.current;return Io.current=Eo,e===null?Eo:e}function Dh(){(RB===0||RB===3||RB===2)&&(RB=4),KB===null||!(nn&268435455)&&!(El&268435455)||eC(KB,JB)}function Do(e,B){var t=_;_|=2;var C=LA();(KB!==e||JB!==B)&&(Et=null,zC(e,B));do try{gP();break}catch(n){MA(e,n)}while(1);if(oh(),_=t,Io.current=C,kB!==null)throw Error(S(261));return KB=null,JB=0,RB}function gP(){for(;kB!==null;)TA(kB)}function bP(){for(;kB!==null&&!VD();)TA(kB)}function TA(e){var B=KA(e.alternate,e,ye);e.memoizedProps=e.pendingProps,B===null?GA(e):kB=B,yh.current=null}function GA(e){var B=e;do{var t=B.alternate;if(e=B.return,B.flags&32768){if(t=uP(t,B),t!==null){t.flags&=32767,kB=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{RB=6,kB=null;return}}else if(t=cP(t,B,ye),t!==null){kB=t;return}if(B=B.sibling,B!==null){kB=B;return}kB=B=e}while(B!==null);RB===0&&(RB=5)}function TC(e,B,t){var C=tB,n=Ge.transition;try{Ge.transition=null,tB=1,AP(e,B,t,C)}finally{Ge.transition=n,tB=C}return null}function AP(e,B,t,C){do zn();while(sC!==null);if(_&6)throw Error(S(327));t=e.finishedWork;var n=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var r=t.lanes|t.childLanes;if(Bk(e,r),e===KB&&(kB=KB=null,JB=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||na||(na=!0,QA(so,function(){return zn(),null})),r=(t.flags&15990)!==0,t.subtreeFlags&15990||r){r=Ge.transition,Ge.transition=null;var i=tB;tB=1;var s=_;_|=4,yh.current=null,hP(e,t),OA(t,e),Kk(r1),oo=!!n1,r1=n1=null,e.current=t,fP(t),WD(),_=s,tB=i,Ge.transition=r}else e.current=t;if(na&&(na=!1,sC=e,wo=n),r=e.pendingLanes,r===0&&(hC=null),XD(t.stateNode),he(e,DB()),B!==null)for(C=e.onRecoverableError,t=0;t<B.length;t++)n=B[t],C(n.value,{componentStack:n.stack,digest:n.digest});if(So)throw So=!1,e=I1,I1=null,e;return wo&1&&e.tag!==0&&zn(),r=e.pendingLanes,r&1?e===S1?li++:(li=0,S1=e):li=0,HC(),null}function zn(){if(sC!==null){var e=pb(wo),B=Ge.transition,t=tB;try{if(Ge.transition=null,tB=16>e?16:e,sC===null)var C=!1;else{if(e=sC,sC=null,wo=0,_&6)throw Error(S(331));var n=_;for(_|=4,H=e.current;H!==null;){var r=H,i=r.child;if(H.flags&16){var s=r.deletions;if(s!==null){for(var a=0;a<s.length;a++){var o=s[a];for(H=o;H!==null;){var c=H;switch(c.tag){case 0:case 11:case 15:ai(8,c,r)}var l=c.child;if(l!==null)l.return=c,H=l;else for(;H!==null;){c=H;var u=c.sibling,m=c.return;if(PA(c),c===o){H=null;break}if(u!==null){u.return=m,H=u;break}H=m}}}var d=r.alternate;if(d!==null){var f=d.child;if(f!==null){d.child=null;do{var g=f.sibling;f.sibling=null,f=g}while(f!==null)}}H=r}}if(r.subtreeFlags&2064&&i!==null)i.return=r,H=i;else B:for(;H!==null;){if(r=H,r.flags&2048)switch(r.tag){case 0:case 11:case 15:ai(9,r,r.return)}var h=r.sibling;if(h!==null){h.return=r.return,H=h;break B}H=r.return}}var p=e.current;for(H=p;H!==null;){i=H;var b=i.child;if(i.subtreeFlags&2064&&b!==null)b.return=i,H=b;else B:for(i=p;H!==null;){if(s=H,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:yl(9,s)}}catch(y){EB(s,s.return,y)}if(s===i){H=null;break B}var A=s.sibling;if(A!==null){A.return=s.return,H=A;break B}H=s.return}}if(_=n,HC(),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(hl,e)}catch{}C=!0}return C}finally{tB=t,Ge.transition=B}}return!1}function Ep(e,B,t){B=lr(t,B),B=mA(e,B,1),e=dC(e,B,1),B=te(),e!==null&&(os(e,1,B),he(e,B))}function EB(e,B,t){if(e.tag===3)Ep(e,e,t);else for(;B!==null;){if(B.tag===3){Ep(B,e,t);break}else if(B.tag===1){var C=B.stateNode;if(typeof B.type.getDerivedStateFromError=="function"||typeof C.componentDidCatch=="function"&&(hC===null||!hC.has(C))){e=lr(t,e),e=gA(B,e,1),B=dC(B,e,1),e=te(),B!==null&&(os(B,1,e),he(B,e));break}}B=B.return}}function vP(e,B,t){var C=e.pingCache;C!==null&&C.delete(B),B=te(),e.pingedLanes|=e.suspendedLanes&t,KB===e&&(JB&t)===t&&(RB===4||RB===3&&(JB&130023424)===JB&&500>DB()-Ih?zC(e,0):Eh|=t),he(e,B)}function xA(e,B){B===0&&(e.mode&1?(B=Xs,Xs<<=1,!(Xs&130023424)&&(Xs=4194304)):B=1);var t=te();e=Lt(e,B),e!==null&&(os(e,B,t),he(e,t))}function yP(e){var B=e.memoizedState,t=0;B!==null&&(t=B.retryLane),xA(e,t)}function EP(e,B){var t=0;switch(e.tag){case 13:var C=e.stateNode,n=e.memoizedState;n!==null&&(t=n.retryLane);break;case 19:C=e.stateNode;break;default:throw Error(S(314))}C!==null&&C.delete(B),xA(e,t)}var KA;KA=function(e,B,t){if(e!==null)if(e.memoizedProps!==B.pendingProps||ue.current)le=!0;else{if(!(e.lanes&t)&&!(B.flags&128))return le=!1,lP(e,B,t);le=!!(e.flags&131072)}else le=!1,mB&&B.flags&1048576&&Jb(B,mo,B.index);switch(B.lanes=0,B.tag){case 2:var C=B.type;Ua(e,B),e=B.pendingProps;var n=ir(B,ZB.current);qn(B,t),n=mh(null,B,C,e,n,t);var r=gh();return B.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(B.tag=1,B.memoizedState=null,B.updateQueue=null,de(C)?(r=!0,fo(B)):r=!1,B.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,uh(B),n.updater=Al,B.stateNode=n,n._reactInternals=B,h1(B,C,e,t),B=m1(null,B,C,!0,r,t)):(B.tag=0,mB&&r&&rh(B),$B(null,B,n,t),B=B.child),B;case 16:C=B.elementType;B:{switch(Ua(e,B),e=B.pendingProps,n=C._init,C=n(C._payload),B.type=C,n=B.tag=SP(C),e=je(C,e),n){case 0:B=p1(null,B,C,e,t);break B;case 1:B=dp(null,B,C,e,t);break B;case 11:B=cp(null,B,C,e,t);break B;case 14:B=up(null,B,C,je(C.type,e),t);break B}throw Error(S(306,C,""))}return B;case 0:return C=B.type,n=B.pendingProps,n=B.elementType===C?n:je(C,n),p1(e,B,C,n,t);case 1:return C=B.type,n=B.pendingProps,n=B.elementType===C?n:je(C,n),dp(e,B,C,n,t);case 3:B:{if(yA(B),e===null)throw Error(S(387));C=B.pendingProps,r=B.memoizedState,n=r.element,jb(e,B),Ao(B,C,null,t);var i=B.memoizedState;if(C=i.element,r.isDehydrated)if(r={element:C,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},B.updateQueue.baseState=r,B.memoizedState=r,B.flags&256){n=lr(Error(S(423)),B),B=hp(e,B,C,t,n);break B}else if(C!==n){n=lr(Error(S(424)),B),B=hp(e,B,C,t,n);break B}else for(Ee=uC(B.stateNode.containerInfo.firstChild),Ie=B,mB=!0,Xe=null,t=qb(B,null,C,t),B.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(sr(),C===n){B=Tt(e,B,t);break B}$B(e,B,C,t)}B=B.child}return B;case 5:return zb(B),e===null&&c1(B),C=B.type,n=B.pendingProps,r=e!==null?e.memoizedProps:null,i=n.children,i1(C,n)?i=null:r!==null&&i1(C,r)&&(B.flags|=32),vA(e,B),$B(e,B,i,t),B.child;case 6:return e===null&&c1(B),null;case 13:return EA(e,B,t);case 4:return dh(B,B.stateNode.containerInfo),C=B.pendingProps,e===null?B.child=ar(B,null,C,t):$B(e,B,C,t),B.child;case 11:return C=B.type,n=B.pendingProps,n=B.elementType===C?n:je(C,n),cp(e,B,C,n,t);case 7:return $B(e,B,B.pendingProps,t),B.child;case 8:return $B(e,B,B.pendingProps.children,t),B.child;case 12:return $B(e,B,B.pendingProps.children,t),B.child;case 10:B:{if(C=B.type._context,n=B.pendingProps,r=B.memoizedProps,i=n.value,oB(go,C._currentValue),C._currentValue=i,r!==null)if(nt(r.value,i)){if(r.children===n.children&&!ue.current){B=Tt(e,B,t);break B}}else for(r=B.child,r!==null&&(r.return=B);r!==null;){var s=r.dependencies;if(s!==null){i=r.child;for(var a=s.firstContext;a!==null;){if(a.context===C){if(r.tag===1){a=Ft(-1,t&-t),a.tag=2;var o=r.updateQueue;if(o!==null){o=o.shared;var c=o.pending;c===null?a.next=a:(a.next=c.next,c.next=a),o.pending=a}}r.lanes|=t,a=r.alternate,a!==null&&(a.lanes|=t),u1(r.return,t,B),s.lanes|=t;break}a=a.next}}else if(r.tag===10)i=r.type===B.type?null:r.child;else if(r.tag===18){if(i=r.return,i===null)throw Error(S(341));i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),u1(i,t,B),i=r.sibling}else i=r.child;if(i!==null)i.return=r;else for(i=r;i!==null;){if(i===B){i=null;break}if(r=i.sibling,r!==null){r.return=i.return,i=r;break}i=i.return}r=i}$B(e,B,n.children,t),B=B.child}return B;case 9:return n=B.type,C=B.pendingProps.children,qn(B,t),n=Ke(n),C=C(n),B.flags|=1,$B(e,B,C,t),B.child;case 14:return C=B.type,n=je(C,B.pendingProps),n=je(C.type,n),up(e,B,C,n,t);case 15:return bA(e,B,B.type,B.pendingProps,t);case 17:return C=B.type,n=B.pendingProps,n=B.elementType===C?n:je(C,n),Ua(e,B),B.tag=1,de(C)?(e=!0,fo(B)):e=!1,qn(B,t),Xb(B,C,n),h1(B,C,n,t),m1(null,B,C,!0,e,t);case 19:return IA(e,B,t);case 22:return AA(e,B,t)}throw Error(S(156,B.tag))};function QA(e,B){return ub(e,B)}function IP(e,B,t,C){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=B,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=C,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,B,t,C){return new IP(e,B,t,C)}function kh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function SP(e){if(typeof e=="function")return kh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Yd)return 11;if(e===Xd)return 14}return 2}function pC(e,B){var t=e.alternate;return t===null?(t=Te(e.tag,B,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=B,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,B=e.dependencies,t.dependencies=B===null?null:{lanes:B.lanes,firstContext:B.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function ja(e,B,t,C,n,r){var i=2;if(C=e,typeof e=="function")kh(e)&&(i=1);else if(typeof e=="string")i=5;else B:switch(e){case Fn:return _C(t.children,n,r,B);case jd:i=8,n|=8;break;case Gu:return e=Te(12,t,B,n|2),e.elementType=Gu,e.lanes=r,e;case xu:return e=Te(13,t,B,n),e.elementType=xu,e.lanes=r,e;case Ku:return e=Te(19,t,B,n),e.elementType=Ku,e.lanes=r,e;case Zg:return Il(t,n,r,B);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Yg:i=10;break B;case Xg:i=9;break B;case Yd:i=11;break B;case Xd:i=14;break B;case _t:i=16,C=null;break B}throw Error(S(130,e==null?e:typeof e,""))}return B=Te(i,t,B,n),B.elementType=e,B.type=C,B.lanes=r,B}function _C(e,B,t,C){return e=Te(7,e,C,B),e.lanes=t,e}function Il(e,B,t,C){return e=Te(22,e,C,B),e.elementType=Zg,e.lanes=t,e.stateNode={isHidden:!1},e}function Kc(e,B,t){return e=Te(6,e,null,B),e.lanes=t,e}function Qc(e,B,t){return B=Te(4,e.children!==null?e.children:[],e.key,B),B.lanes=t,B.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},B}function wP(e,B,t,C,n){this.tag=B,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vc(0),this.expirationTimes=vc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vc(0),this.identifierPrefix=C,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}function Ph(e,B,t,C,n,r,i,s,a){return e=new wP(e,B,t,s,a),B===1?(B=1,r===!0&&(B|=8)):B=0,r=Te(3,null,null,B),e.current=r,r.stateNode=e,r.memoizedState={element:C,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},uh(r),e}function DP(e,B,t){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Nn,key:C==null?null:""+C,children:e,containerInfo:B,implementation:t}}function JA(e){if(!e)return IC;e=e._reactInternals;B:{if(gn(e)!==e||e.tag!==1)throw Error(S(170));var B=e;do{switch(B.tag){case 3:B=B.stateNode.context;break B;case 1:if(de(B.type)){B=B.stateNode.__reactInternalMemoizedMergedChildContext;break B}}B=B.return}while(B!==null);throw Error(S(171))}if(e.tag===1){var t=e.type;if(de(t))return Kb(e,t,B)}return B}function UA(e,B,t,C,n,r,i,s,a){return e=Ph(t,C,!0,e,n,r,i,s,a),e.context=JA(null),t=e.current,C=te(),n=fC(t),r=Ft(C,n),r.callback=B??null,dC(t,r,n),e.current.lanes=n,os(e,n,C),he(e,C),e}function Sl(e,B,t,C){var n=B.current,r=te(),i=fC(n);return t=JA(t),B.context===null?B.context=t:B.pendingContext=t,B=Ft(r,i),B.payload={element:e},C=C===void 0?null:C,C!==null&&(B.callback=C),e=dC(n,B,i),e!==null&&(et(e,n,i,r),Ka(e,n,i)),i}function ko(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ip(e,B){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<B?t:B}}function Nh(e,B){Ip(e,B),(e=e.alternate)&&Ip(e,B)}function kP(){return null}var VA=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fh(e){this._internalRoot=e}wl.prototype.render=Fh.prototype.render=function(e){var B=this._internalRoot;if(B===null)throw Error(S(409));Sl(e,B,null,null)};wl.prototype.unmount=Fh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var B=e.containerInfo;rn(function(){Sl(null,e,null,null)}),B[Mt]=null}};function wl(e){this._internalRoot=e}wl.prototype.unstable_scheduleHydration=function(e){if(e){var B=bb();e={blockedOn:null,target:e,priority:B};for(var t=0;t<BC.length&&B!==0&&B<BC[t].priority;t++);BC.splice(t,0,e),t===0&&vb(e)}};function Oh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Dl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Sp(){}function PP(e,B,t,C,n){if(n){if(typeof C=="function"){var r=C;C=function(){var o=ko(i);r.call(o)}}var i=UA(B,C,e,0,null,!1,!1,"",Sp);return e._reactRootContainer=i,e[Mt]=i.current,ki(e.nodeType===8?e.parentNode:e),rn(),i}for(;n=e.lastChild;)e.removeChild(n);if(typeof C=="function"){var s=C;C=function(){var o=ko(a);s.call(o)}}var a=Ph(e,0,!1,null,null,!1,!1,"",Sp);return e._reactRootContainer=a,e[Mt]=a.current,ki(e.nodeType===8?e.parentNode:e),rn(function(){Sl(B,a,t,C)}),a}function kl(e,B,t,C,n){var r=t._reactRootContainer;if(r){var i=r;if(typeof n=="function"){var s=n;n=function(){var a=ko(i);s.call(a)}}Sl(B,i,e,n)}else i=PP(t,B,e,n,C);return ko(i)}mb=function(e){switch(e.tag){case 3:var B=e.stateNode;if(B.current.memoizedState.isDehydrated){var t=_r(B.pendingLanes);t!==0&&(zd(B,t|1),he(B,DB()),!(_&6)&&(cr=DB()+500,HC()))}break;case 13:rn(function(){var C=Lt(e,1);if(C!==null){var n=te();et(C,e,1,n)}}),Nh(e,1)}};_d=function(e){if(e.tag===13){var B=Lt(e,134217728);if(B!==null){var t=te();et(B,e,134217728,t)}Nh(e,134217728)}};gb=function(e){if(e.tag===13){var B=fC(e),t=Lt(e,B);if(t!==null){var C=te();et(t,e,B,C)}Nh(e,B)}};bb=function(){return tB};Ab=function(e,B){var t=tB;try{return tB=e,B()}finally{tB=t}};qu=function(e,B,t){switch(B){case"input":if(Uu(e,t),B=t.name,t.type==="radio"&&B!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+B)+'][type="radio"]'),B=0;B<t.length;B++){var C=t[B];if(C!==e&&C.form===e.form){var n=gl(C);if(!n)throw Error(S(90));zg(C),Uu(C,n)}}}break;case"textarea":$g(e,t);break;case"select":B=t.value,B!=null&&jn(e,!!t.multiple,B,!1)}};ib=Sh;sb=rn;var NP={usingClientEntryPoint:!1,Events:[cs,Mn,gl,nb,rb,Sh]},xr={findFiberByHostInstance:KC,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},FP={bundleType:xr.bundleType,version:xr.version,rendererPackageName:xr.rendererPackageName,rendererConfig:xr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ut.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=lb(e),e===null?null:e.stateNode},findFiberByHostInstance:xr.findFiberByHostInstance||kP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ra.isDisabled&&ra.supportsFiber)try{hl=ra.inject(FP),ut=ra}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NP;ke.createPortal=function(e,B){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oh(B))throw Error(S(200));return DP(e,B,null,t)};ke.createRoot=function(e,B){if(!Oh(e))throw Error(S(299));var t=!1,C="",n=VA;return B!=null&&(B.unstable_strictMode===!0&&(t=!0),B.identifierPrefix!==void 0&&(C=B.identifierPrefix),B.onRecoverableError!==void 0&&(n=B.onRecoverableError)),B=Ph(e,1,!1,null,null,t,!1,C,n),e[Mt]=B.current,ki(e.nodeType===8?e.parentNode:e),new Fh(B)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var B=e._reactInternals;if(B===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=lb(B),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return rn(e)};ke.hydrate=function(e,B,t){if(!Dl(B))throw Error(S(200));return kl(null,e,B,!0,t)};ke.hydrateRoot=function(e,B,t){if(!Oh(e))throw Error(S(405));var C=t!=null&&t.hydratedSources||null,n=!1,r="",i=VA;if(t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),B=UA(B,null,e,1,t??null,n,!1,r,i),e[Mt]=B.current,ki(e),C)for(e=0;e<C.length;e++)t=C[e],n=t._getVersion,n=n(t._source),B.mutableSourceEagerHydrationData==null?B.mutableSourceEagerHydrationData=[t,n]:B.mutableSourceEagerHydrationData.push(t,n);return new wl(B)};ke.render=function(e,B,t){if(!Dl(B))throw Error(S(200));return kl(null,e,B,!1,t)};ke.unmountComponentAtNode=function(e){if(!Dl(e))throw Error(S(40));return e._reactRootContainer?(rn(function(){kl(null,null,e,!1,function(){e._reactRootContainer=null,e[Mt]=null})}),!0):!1};ke.unstable_batchedUpdates=Sh;ke.unstable_renderSubtreeIntoContainer=function(e,B,t,C){if(!Dl(t))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return kl(e,B,t,!1,C)};ke.version="18.2.0-next-9e3b772b8-20220608";(function(e){function B(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(B)}catch(t){console.error(t)}}B(),e.exports=ke})(kD);var wp=Mu;Hu.createRoot=wp.createRoot,Hu.hydrateRoot=wp.hydrateRoot;/**
* @remix-run/router v1.7.2
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/function Ti(){return Ti=Object.assign?Object.assign.bind():function(e){for(var B=1;B<arguments.length;B++){var t=arguments[B];for(var C in t)Object.prototype.hasOwnProperty.call(t,C)&&(e[C]=t[C])}return e},Ti.apply(this,arguments)}var UC;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(UC||(UC={}));const Dp="popstate";function OP(e){e===void 0&&(e={});function B(C,n){let{pathname:r,search:i,hash:s}=C.location;return k1("",{pathname:r,search:i,hash:s},n.state&&n.state.usr||null,n.state&&n.state.key||"default")}function t(C,n){return typeof n=="string"?n:Po(n)}return HP(B,t,null,e)}function tt(e,B){if(e===!1||e===null||typeof e>"u")throw new Error(B)}function RP(){return Math.random().toString(36).substr(2,8)}function kp(e,B){return{usr:e.state,key:e.key,idx:B}}function k1(e,B,t,C){return t===void 0&&(t=null),Ti({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof B=="string"?Pl(B):B,{state:t,key:B&&B.key||C||RP()})}function Po(e){let{pathname:B="/",search:t="",hash:C=""}=e;return t&&t!=="?"&&(B+=t.charAt(0)==="?"?t:"?"+t),C&&C!=="#"&&(B+=C.charAt(0)==="#"?C:"#"+C),B}function Pl(e){let B={};if(e){let t=e.indexOf("#");t>=0&&(B.hash=e.substr(t),e=e.substr(0,t));let C=e.indexOf("?");C>=0&&(B.search=e.substr(C),e=e.substr(0,C)),e&&(B.pathname=e)}return B}function HP(e,B,t,C){C===void 0&&(C={});let{window:n=document.defaultView,v5Compat:r=!1}=C,i=n.history,s=UC.Pop,a=null,o=c();o==null&&(o=0,i.replaceState(Ti({},i.state,{idx:o}),""));function c(){return(i.state||{idx:null}).idx}function l(){s=UC.Pop;let g=c(),h=g==null?null:g-o;o=g,a&&a({action:s,location:f.location,delta:h})}function u(g,h){s=UC.Push;let p=k1(f.location,g,h);t&&t(p,g),o=c()+1;let b=kp(p,o),A=f.createHref(p);try{i.pushState(b,"",A)}catch(y){if(y instanceof DOMException&&y.name==="DataCloneError")throw y;n.location.assign(A)}r&&a&&a({action:s,location:f.location,delta:1})}function m(g,h){s=UC.Replace;let p=k1(f.location,g,h);t&&t(p,g),o=c();let b=kp(p,o),A=f.createHref(p);i.replaceState(b,"",A),r&&a&&a({action:s,location:f.location,delta:0})}function d(g){let h=n.location.origin!=="null"?n.location.origin:n.location.href,p=typeof g=="string"?g:Po(g);return tt(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let f={get action(){return s},get location(){return e(n,i)},listen(g){if(a)throw new Error("A history only accepts one active listener");return n.addEventListener(Dp,l),a=g,()=>{n.removeEventListener(Dp,l),a=null}},createHref(g){return B(n,g)},createURL:d,encodeLocation(g){let h=d(g);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:u,replace:m,go(g){return i.go(g)}};return f}var Pp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Pp||(Pp={}));function WA(e,B){if(B==="/")return e;if(!e.toLowerCase().startsWith(B.toLowerCase()))return null;let t=B.endsWith("/")?B.length-1:B.length,C=e.charAt(t);return C&&C!=="/"?null:e.slice(t)||"/"}function MP(e,B){B===void 0&&(B="/");let{pathname:t,search:C="",hash:n=""}=typeof e=="string"?Pl(e):e;return{pathname:t?t.startsWith("/")?t:LP(t,B):B,search:TP(C),hash:GP(n)}}function LP(e,B){let t=B.replace(/\/+$/,"").split("/");return e.split("/").forEach(C=>{C===".."?t.length>1&&t.pop():C!=="."&&t.push(C)}),t.length>1?t.join("/"):"/"}function Jc(e,B,t,C){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+B+"` field ["+JSON.stringify(C)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function jA(e){return e.filter((B,t)=>t===0||B.route.path&&B.route.path.length>0)}function YA(e,B,t,C){C===void 0&&(C=!1);let n;typeof e=="string"?n=Pl(e):(n=Ti({},e),tt(!n.pathname||!n.pathname.includes("?"),Jc("?","pathname","search",n)),tt(!n.pathname||!n.pathname.includes("#"),Jc("#","pathname","hash",n)),tt(!n.search||!n.search.includes("#"),Jc("#","search","hash",n)));let r=e===""||n.pathname==="",i=r?"/":n.pathname,s;if(C||i==null)s=t;else{let l=B.length-1;if(i.startsWith("..")){let u=i.split("/");for(;u[0]==="..";)u.shift(),l-=1;n.pathname=u.join("/")}s=l>=0?B[l]:"/"}let a=MP(n,s),o=i&&i!=="/"&&i.endsWith("/"),c=(r||i===".")&&t.endsWith("/");return!a.pathname.endsWith("/")&&(o||c)&&(a.pathname+="/"),a}const XA=e=>e.join("/").replace(/\/\/+/g,"/"),TP=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,GP=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;/**
* React Router v6.14.2
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/function P1(){return P1=Object.assign?Object.assign.bind():function(e){for(var B=1;B<arguments.length;B++){var t=arguments[B];for(var C in t)Object.prototype.hasOwnProperty.call(t,C)&&(e[C]=t[C])}return e},P1.apply(this,arguments)}const ZA=O.createContext(null),ds=O.createContext(null),Rh=O.createContext(null),Nl=O.createContext({outlet:null,matches:[],isDataRoute:!1});function xP(e,B){let{relative:t}=B===void 0?{}:B;Fl()||tt(!1);let{basename:C,navigator:n}=O.useContext(ds),{hash:r,pathname:i,search:s}=zA(e,{relative:t}),a=i;return C!=="/"&&(a=i==="/"?C:XA([C,i])),n.createHref({pathname:a,search:s,hash:r})}function Fl(){return O.useContext(Rh)!=null}function Hh(){return Fl()||tt(!1),O.useContext(Rh).location}function qA(e){O.useContext(ds).static||O.useLayoutEffect(e)}function KP(){let{isDataRoute:e}=O.useContext(Nl);return e?WP():QP()}function QP(){Fl()||tt(!1);let e=O.useContext(ZA),{basename:B,navigator:t}=O.useContext(ds),{matches:C}=O.useContext(Nl),{pathname:n}=Hh(),r=JSON.stringify(jA(C).map(s=>s.pathnameBase)),i=O.useRef(!1);return qA(()=>{i.current=!0}),O.useCallback(function(s,a){if(a===void 0&&(a={}),!i.current)return;if(typeof s=="number"){t.go(s);return}let o=YA(s,JSON.parse(r),n,a.relative==="path");e==null&&B!=="/"&&(o.pathname=o.pathname==="/"?B:XA([B,o.pathname])),(a.replace?t.replace:t.push)(o,a.state,a)},[B,t,r,n,e])}function zA(e,B){let{relative:t}=B===void 0?{}:B,{matches:C}=O.useContext(Nl),{pathname:n}=Hh(),r=JSON.stringify(jA(C).map(i=>i.pathnameBase));return O.useMemo(()=>YA(e,JSON.parse(r),n,t==="path"),[e,r,n,t])}var N1;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(N1||(N1={}));var F1;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(F1||(F1={}));function JP(e){let B=O.useContext(ZA);return B||tt(!1),B}function UP(e){let B=O.useContext(Nl);return B||tt(!1),B}function VP(e){let B=UP(),t=B.matches[B.matches.length-1];return t.route.id||tt(!1),t.route.id}function WP(){let{router:e}=JP(N1.UseNavigateStable),B=VP(F1.UseNavigateStable),t=O.useRef(!1);return qA(()=>{t.current=!0}),O.useCallback(function(C,n){n===void 0&&(n={}),t.current&&(typeof C=="number"?e.navigate(C):e.navigate(C,P1({fromRouteId:B},n)))},[e,B])}function jP(e){let{basename:B="/",children:t=null,location:C,navigationType:n=UC.Pop,navigator:r,static:i=!1}=e;Fl()&&tt(!1);let s=B.replace(/^\/*/,"/"),a=O.useMemo(()=>({basename:s,navigator:r,static:i}),[s,r,i]);typeof C=="string"&&(C=Pl(C));let{pathname:o="/",search:c="",hash:l="",state:u=null,key:m="default"}=C,d=O.useMemo(()=>{let f=WA(o,s);return f==null?null:{location:{pathname:f,search:c,hash:l,state:u,key:m},navigationType:n}},[s,o,c,l,u,m,n]);return d==null?null:O.createElement(ds.Provider,{value:a},O.createElement(Rh.Provider,{children:t,value:d}))}var Np;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Np||(Np={}));new Promise(()=>{});/**
* React Router DOM v6.14.2
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/function O1(){return O1=Object.assign?Object.assign.bind():function(e){for(var B=1;B<arguments.length;B++){var t=arguments[B];for(var C in t)Object.prototype.hasOwnProperty.call(t,C)&&(e[C]=t[C])}return e},O1.apply(this,arguments)}function YP(e,B){if(e==null)return{};var t={},C=Object.keys(e),n,r;for(r=0;r<C.length;r++)n=C[r],!(B.indexOf(n)>=0)&&(t[n]=e[n]);return t}function XP(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ZP(e,B){return e.button===0&&(!B||B==="_self")&&!XP(e)}const qP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],zP="startTransition",Fp=vD[zP];function _P(e){let{basename:B,children:t,future:C,window:n}=e,r=O.useRef();r.current==null&&(r.current=OP({window:n,v5Compat:!0}));let i=r.current,[s,a]=O.useState({action:i.action,location:i.location}),{v7_startTransition:o}=C||{},c=O.useCallback(l=>{o&&Fp?Fp(()=>a(l)):a(l)},[a,o]);return O.useLayoutEffect(()=>i.listen(c),[i,c]),O.createElement(jP,{basename:B,children:t,location:s.location,navigationType:s.action,navigator:i})}const $P=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",BN=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,eN=O.forwardRef(function(e,B){let{onClick:t,relative:C,reloadDocument:n,replace:r,state:i,target:s,to:a,preventScrollReset:o}=e,c=YP(e,qP),{basename:l}=O.useContext(ds),u,m=!1;if(typeof a=="string"&&BN.test(a)&&(u=a,$P))try{let h=new URL(window.location.href),p=a.startsWith("//")?new URL(h.protocol+a):new URL(a),b=WA(p.pathname,l);p.origin===h.origin&&b!=null?a=b+p.search+p.hash:m=!0}catch{}let d=xP(a,{relative:C}),f=tN(a,{replace:r,state:i,target:s,preventScrollReset:o,relative:C});function g(h){t&&t(h),h.defaultPrevented||f(h)}return O.createElement("a",O1({},c,{href:u||d,onClick:m||n?t:g,ref:B,target:s}))});var Op;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Op||(Op={}));var Rp;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Rp||(Rp={}));function tN(e,B){let{target:t,replace:C,state:n,preventScrollReset:r,relative:i}=B===void 0?{}:B,s=KP(),a=Hh(),o=zA(e,{relative:i});return O.useCallback(c=>{if(ZP(c,t)){c.preventDefault();let l=C!==void 0?C:Po(a)===Po(o);s(e,{replace:l,state:n,preventScrollReset:r,relative:i})}},[a,s,o,C,n,t,e,r,i])}const Hp={waves:"#F3F4F3","dark-waves":"#9E9A98",grainy:"#AC8B5D",bland:"#917E7A","dark-bland":"#3A3743"},CN=[15,30,45,60,75],nN=1e3;function _A(){document.querySelectorAll(".circle").forEach((e,B)=>{const t=10*Math.sin(Date.now()/nN+B);e.style.transform=`translateY(${t+110}px)`}),requestAnimationFrame(_A)}_A();const Kr=({color:e,position:B})=>D("div",{className:"circle",style:{width:"50px",height:"50px",borderRadius:"50%",background:`radial-gradient(circle, ${Hp[e]}, ${Hp[e]})`,position:"absolute",left:CN[B]+"%",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0), 0 12px 20px 0 rgba(0, 0, 0, 0.5)"}}),rN=()=>z("div",{style:{position:"relative"},children:[D(Kr,{color:"waves",position:0}),D(Kr,{color:"dark-waves",position:1}),D(Kr,{color:"grainy",position:2}),D(Kr,{color:"bland",position:3}),D(Kr,{color:"dark-bland",position:4})]});/**
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
*/const $A={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
*/const k=function(e,B){if(!e)throw Ir(B)},Ir=function(e){return new Error("Firebase Database ("+$A.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
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
*/const Bv=function(e){const B=[];let t=0;for(let C=0;C<e.length;C++){let n=e.charCodeAt(C);n<128?B[t++]=n:n<2048?(B[t++]=n>>6|192,B[t++]=n&63|128):(n&64512)===55296&&C+1<e.length&&(e.charCodeAt(C+1)&64512)===56320?(n=65536+((n&1023)<<10)+(e.charCodeAt(++C)&1023),B[t++]=n>>18|240,B[t++]=n>>12&63|128,B[t++]=n>>6&63|128,B[t++]=n&63|128):(B[t++]=n>>12|224,B[t++]=n>>6&63|128,B[t++]=n&63|128)}return B},iN=function(e){const B=[];let t=0,C=0;for(;t<e.length;){const n=e[t++];if(n<128)B[C++]=String.fromCharCode(n);else if(n>191&&n<224){const r=e[t++];B[C++]=String.fromCharCode((n&31)<<6|r&63)}else if(n>239&&n<365){const r=e[t++],i=e[t++],s=e[t++],a=((n&7)<<18|(r&63)<<12|(i&63)<<6|s&63)-65536;B[C++]=String.fromCharCode(55296+(a>>10)),B[C++]=String.fromCharCode(56320+(a&1023))}else{const r=e[t++],i=e[t++];B[C++]=String.fromCharCode((n&15)<<12|(r&63)<<6|i&63)}}return B.join("")},Mh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,B){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=B?this.byteToCharMapWebSafe_:this.byteToCharMap_,C=[];for(let n=0;n<e.length;n+=3){const r=e[n],i=n+1<e.length,s=i?e[n+1]:0,a=n+2<e.length,o=a?e[n+2]:0,c=r>>2,l=(r&3)<<4|s>>4;let u=(s&15)<<2|o>>6,m=o&63;a||(m=64,i||(u=64)),C.push(t[c],t[l],t[u],t[m])}return C.join("")},encodeString(e,B){return this.HAS_NATIVE_SUPPORT&&!B?btoa(e):this.encodeByteArray(Bv(e),B)},decodeString(e,B){return this.HAS_NATIVE_SUPPORT&&!B?atob(e):iN(this.decodeStringToByteArray(e,B))},decodeStringToByteArray(e,B){this.init_();const t=B?this.charToByteMapWebSafe_:this.charToByteMap_,C=[];for(let n=0;n<e.length;){const r=t[e.charAt(n++)],i=n<e.length?t[e.charAt(n)]:0;++n;const s=n<e.length?t[e.charAt(n)]:64;++n;const a=n<e.length?t[e.charAt(n)]:64;if(++n,r==null||i==null||s==null||a==null)throw new sN;const o=r<<2|i>>4;if(C.push(o),s!==64){const c=i<<4&240|s>>2;if(C.push(c),a!==64){const l=s<<6&192|a;C.push(l)}}}return C},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class sN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ev=function(e){const B=Bv(e);return Mh.encodeByteArray(B,!0)},No=function(e){return ev(e).replace(/\./g,"")},Fo=function(e){try{return Mh.decodeString(e,!0)}catch(B){console.error("base64Decode failed: ",B)}return null};/**
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
*/function aN(e){return tv(void 0,e)}function tv(e,B){if(!(B instanceof Object))return B;switch(B.constructor){case Date:const t=B;return new Date(t.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return B}for(const t in B)!B.hasOwnProperty(t)||!oN(t)||(e[t]=tv(e[t],B[t]));return e}function oN(e){return e!=="__proto__"}/**
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
*/function lN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
*/const cN=()=>lN().__FIREBASE_DEFAULTS__,uN=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},dN=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const B=e&&Fo(e[1]);return B&&JSON.parse(B)},Lh=()=>{try{return cN()||uN()||dN()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Cv=e=>{var B,t;return(t=(B=Lh())===null||B===void 0?void 0:B.emulatorHosts)===null||t===void 0?void 0:t[e]},hN=e=>{const B=Cv(e);if(!B)return;const t=B.lastIndexOf(":");if(t<=0||t+1===B.length)throw new Error(`Invalid host ${B} with no separate hostname and port!`);const C=parseInt(B.substring(t+1),10);return B[0]==="["?[B.substring(1,t-1),C]:[B.substring(0,t),C]},nv=()=>{var e;return(e=Lh())===null||e===void 0?void 0:e.config},rv=e=>{var B;return(B=Lh())===null||B===void 0?void 0:B[`_${e}`]};/**
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
*/class Ol{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((B,t)=>{this.resolve=B,this.reject=t})}wrapCallback(B){return(t,C)=>{t?this.reject(t):this.resolve(C),typeof B=="function"&&(this.promise.catch(()=>{}),B.length===1?B(t):B(t,C))}}}/**
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
*/function fN(e,B){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},C=B||"demo-project",n=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${C}`,aud:C,iat:n,exp:n+3600,auth_time:n,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),s="";return[No(JSON.stringify(t)),No(JSON.stringify(i)),s].join(".")}/**
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
*/function qB(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Th(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qB())}function iv(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function sv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pN(){const e=qB();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function av(){return $A.NODE_ADMIN===!0}function ov(){try{return typeof indexedDB=="object"}catch{return!1}}function lv(){return new Promise((e,B)=>{try{let t=!0;const C="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(C);n.onsuccess=()=>{n.result.close(),t||self.indexedDB.deleteDatabase(C),e(!0)},n.onupgradeneeded=()=>{t=!1},n.onerror=()=>{var r;B(((r=n.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){B(t)}})}function mN(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
*/const gN="FirebaseError";class vt extends Error{constructor(B,t,C){super(t),this.code=B,this.customData=C,this.name=gN,Object.setPrototypeOf(this,vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bn.prototype.create)}}class bn{constructor(B,t,C){this.service=B,this.serviceName=t,this.errors=C}create(B,...t){const C=t[0]||{},n=`${this.service}/${B}`,r=this.errors[B],i=r?bN(r,C):"Error",s=`${this.serviceName}: ${i} (${n}).`;return new vt(n,s,C)}}function bN(e,B){return e.replace(AN,(t,C)=>{const n=B[C];return n!=null?String(n):`<${C}?>`})}const AN=/\{\$([^}]+)}/g;/**
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
*/function Gi(e){return JSON.parse(e)}function FB(e){return JSON.stringify(e)}/**
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
*/const cv=function(e){let B={},t={},C={},n="";try{const r=e.split(".");B=Gi(Fo(r[0])||""),t=Gi(Fo(r[1])||""),n=r[2],C=t.d||{},delete t.d}catch{}return{header:B,claims:t,data:C,signature:n}},vN=function(e){const B=cv(e),t=B.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},yN=function(e){const B=cv(e).claims;return typeof B=="object"&&B.admin===!0};/**
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
*/function Vt(e,B){return Object.prototype.hasOwnProperty.call(e,B)}function ur(e,B){if(Object.prototype.hasOwnProperty.call(e,B))return e[B]}function R1(e){for(const B in e)if(Object.prototype.hasOwnProperty.call(e,B))return!1;return!0}function Oo(e,B,t){const C={};for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(C[n]=B.call(t,e[n],n,e));return C}function xi(e,B){if(e===B)return!0;const t=Object.keys(e),C=Object.keys(B);for(const n of t){if(!C.includes(n))return!1;const r=e[n],i=B[n];if(Mp(r)&&Mp(i)){if(!xi(r,i))return!1}else if(r!==i)return!1}for(const n of C)if(!t.includes(n))return!1;return!0}function Mp(e){return e!==null&&typeof e=="object"}/**
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
*/function Sr(e){const B=[];for(const[t,C]of Object.entries(e))Array.isArray(C)?C.forEach(n=>{B.push(encodeURIComponent(t)+"="+encodeURIComponent(n))}):B.push(encodeURIComponent(t)+"="+encodeURIComponent(C));return B.length?"&"+B.join("&"):""}/**
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
*/class EN{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let B=1;B<this.blockSize;++B)this.pad_[B]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(B,t){t||(t=0);const C=this.W_;if(typeof B=="string")for(let l=0;l<16;l++)C[l]=B.charCodeAt(t)<<24|B.charCodeAt(t+1)<<16|B.charCodeAt(t+2)<<8|B.charCodeAt(t+3),t+=4;else for(let l=0;l<16;l++)C[l]=B[t]<<24|B[t+1]<<16|B[t+2]<<8|B[t+3],t+=4;for(let l=16;l<80;l++){const u=C[l-3]^C[l-8]^C[l-14]^C[l-16];C[l]=(u<<1|u>>>31)&4294967295}let n=this.chain_[0],r=this.chain_[1],i=this.chain_[2],s=this.chain_[3],a=this.chain_[4],o,c;for(let l=0;l<80;l++){l<40?l<20?(o=s^r&(i^s),c=1518500249):(o=r^i^s,c=1859775393):l<60?(o=r&i|s&(r|i),c=2400959708):(o=r^i^s,c=3395469782);const u=(n<<5|n>>>27)+o+a+c+C[l]&4294967295;a=s,s=i,i=(r<<30|r>>>2)&4294967295,r=n,n=u}this.chain_[0]=this.chain_[0]+n&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+i&4294967295,this.chain_[3]=this.chain_[3]+s&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(B,t){if(B==null)return;t===void 0&&(t=B.length);const C=t-this.blockSize;let n=0;const r=this.buf_;let i=this.inbuf_;for(;n<t;){if(i===0)for(;n<=C;)this.compress_(B,n),n+=this.blockSize;if(typeof B=="string"){for(;n<t;)if(r[i]=B.charCodeAt(n),++i,++n,i===this.blockSize){this.compress_(r),i=0;break}}else for(;n<t;)if(r[i]=B[n],++i,++n,i===this.blockSize){this.compress_(r),i=0;break}}this.inbuf_=i,this.total_+=t}digest(){const B=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let n=this.blockSize-1;n>=56;n--)this.buf_[n]=t&255,t/=256;this.compress_(this.buf_);let C=0;for(let n=0;n<5;n++)for(let r=24;r>=0;r-=8)B[C]=this.chain_[n]>>r&255,++C;return B}}function IN(e,B){const t=new SN(e,B);return t.subscribe.bind(t)}class SN{constructor(B,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{B(this)}).catch(C=>{this.error(C)})}next(B){this.forEachObserver(t=>{t.next(B)})}error(B){this.forEachObserver(t=>{t.error(B)}),this.close(B)}complete(){this.forEachObserver(B=>{B.complete()}),this.close()}subscribe(B,t,C){let n;if(B===void 0&&t===void 0&&C===void 0)throw new Error("Missing Observer.");wN(B,["next","error","complete"])?n=B:n={next:B,error:t,complete:C},n.next===void 0&&(n.next=Uc),n.error===void 0&&(n.error=Uc),n.complete===void 0&&(n.complete=Uc);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch{}}),this.observers.push(n),r}unsubscribeOne(B){this.observers===void 0||this.observers[B]===void 0||(delete this.observers[B],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(B){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,B)}sendOne(B,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[B]!==void 0)try{t(this.observers[B])}catch(C){typeof console<"u"&&console.error&&console.error(C)}})}close(B){this.finalized||(this.finalized=!0,B!==void 0&&(this.finalError=B),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wN(e,B){if(typeof e!="object"||e===null)return!1;for(const t of B)if(t in e&&typeof e[t]=="function")return!0;return!1}function Uc(){}function Gh(e,B){return`${e} failed: ${B} argument `}/**
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
*/const DN=function(e){const B=[];let t=0;for(let C=0;C<e.length;C++){let n=e.charCodeAt(C);if(n>=55296&&n<=56319){const r=n-55296;C++,k(C<e.length,"Surrogate pair missing trail surrogate.");const i=e.charCodeAt(C)-56320;n=65536+(r<<10)+i}n<128?B[t++]=n:n<2048?(B[t++]=n>>6|192,B[t++]=n&63|128):n<65536?(B[t++]=n>>12|224,B[t++]=n>>6&63|128,B[t++]=n&63|128):(B[t++]=n>>18|240,B[t++]=n>>12&63|128,B[t++]=n>>6&63|128,B[t++]=n&63|128)}return B},Rl=function(e){let B=0;for(let t=0;t<e.length;t++){const C=e.charCodeAt(t);C<128?B++:C<2048?B+=2:C>=55296&&C<=56319?(B+=4,t++):B+=3}return B};/**
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
*/const kN=1e3,PN=2,NN=4*60*60*1e3,FN=.5;function Lp(e,B=kN,t=PN){const C=B*Math.pow(t,e),n=Math.round(FN*C*(Math.random()-.5)*2);return Math.min(NN,C+n)}/**
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
*/function ge(e){return e&&e._delegate?e._delegate:e}class rt{constructor(B,t,C){this.name=B,this.instanceFactory=t,this.type=C,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(B){return this.instantiationMode=B,this}setMultipleInstances(B){return this.multipleInstances=B,this}setServiceProps(B){return this.serviceProps=B,this}setInstanceCreatedCallback(B){return this.onInstanceCreated=B,this}}/**
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
*/const GC="[DEFAULT]";/**
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
*/class ON{constructor(B,t){this.name=B,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(B){const t=this.normalizeInstanceIdentifier(B);if(!this.instancesDeferred.has(t)){const C=new Ol;if(this.instancesDeferred.set(t,C),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&C.resolve(n)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(B){var t;const C=this.normalizeInstanceIdentifier(B==null?void 0:B.identifier),n=(t=B==null?void 0:B.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(C)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:C})}catch(r){if(n)return null;throw r}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(B){if(B.name!==this.name)throw Error(`Mismatching Component ${B.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=B,!!this.shouldAutoInitialize()){if(HN(B))try{this.getOrInitializeService({instanceIdentifier:GC})}catch{}for(const[t,C]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:n});C.resolve(r)}catch{}}}}clearInstance(B=GC){this.instancesDeferred.delete(B),this.instancesOptions.delete(B),this.instances.delete(B)}async delete(){const B=Array.from(this.instances.values());await Promise.all([...B.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...B.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(B=GC){return this.instances.has(B)}getOptions(B=GC){return this.instancesOptions.get(B)||{}}initialize(B={}){const{options:t={}}=B,C=this.normalizeInstanceIdentifier(B.instanceIdentifier);if(this.isInitialized(C))throw Error(`${this.name}(${C}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:C,options:t});for(const[r,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(r);C===s&&i.resolve(n)}return n}onInit(B,t){var C;const n=this.normalizeInstanceIdentifier(t),r=(C=this.onInitCallbacks.get(n))!==null&&C!==void 0?C:new Set;r.add(B),this.onInitCallbacks.set(n,r);const i=this.instances.get(n);return i&&B(i,n),()=>{r.delete(B)}}invokeOnInitCallbacks(B,t){const C=this.onInitCallbacks.get(t);if(C)for(const n of C)try{n(B,t)}catch{}}getOrInitializeService({instanceIdentifier:B,options:t={}}){let C=this.instances.get(B);if(!C&&this.component&&(C=this.component.instanceFactory(this.container,{instanceIdentifier:RN(B),options:t}),this.instances.set(B,C),this.instancesOptions.set(B,t),this.invokeOnInitCallbacks(C,B),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,B,C)}catch{}return C||null}normalizeInstanceIdentifier(B=GC){return this.component?this.component.multipleInstances?B:GC:B}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RN(e){return e===GC?void 0:e}function HN(e){return e.instantiationMode==="EAGER"}/**
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
*/class MN{constructor(B){this.name=B,this.providers=new Map}addComponent(B){const t=this.getProvider(B.name);if(t.isComponentSet())throw new Error(`Component ${B.name} has already been registered with ${this.name}`);t.setComponent(B)}addOrOverwriteComponent(B){this.getProvider(B.name).isComponentSet()&&this.providers.delete(B.name),this.addComponent(B)}getProvider(B){if(this.providers.has(B))return this.providers.get(B);const t=new ON(B,this);return this.providers.set(B,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
*/var rB;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(rB||(rB={}));const LN={debug:rB.DEBUG,verbose:rB.VERBOSE,info:rB.INFO,warn:rB.WARN,error:rB.ERROR,silent:rB.SILENT},TN=rB.INFO,GN={[rB.DEBUG]:"log",[rB.VERBOSE]:"log",[rB.INFO]:"info",[rB.WARN]:"warn",[rB.ERROR]:"error"},xN=(e,B,...t)=>{if(B<e.logLevel)return;const C=new Date().toISOString(),n=GN[B];if(n)console[n](`[${C}]  ${e.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${B})`)};class Hl{constructor(B){this.name=B,this._logLevel=TN,this._logHandler=xN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(B){if(!(B in rB))throw new TypeError(`Invalid value "${B}" assigned to \`logLevel\``);this._logLevel=B}setLogLevel(B){this._logLevel=typeof B=="string"?LN[B]:B}get logHandler(){return this._logHandler}set logHandler(B){if(typeof B!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=B}get userLogHandler(){return this._userLogHandler}set userLogHandler(B){this._userLogHandler=B}debug(...B){this._userLogHandler&&this._userLogHandler(this,rB.DEBUG,...B),this._logHandler(this,rB.DEBUG,...B)}log(...B){this._userLogHandler&&this._userLogHandler(this,rB.VERBOSE,...B),this._logHandler(this,rB.VERBOSE,...B)}info(...B){this._userLogHandler&&this._userLogHandler(this,rB.INFO,...B),this._logHandler(this,rB.INFO,...B)}warn(...B){this._userLogHandler&&this._userLogHandler(this,rB.WARN,...B),this._logHandler(this,rB.WARN,...B)}error(...B){this._userLogHandler&&this._userLogHandler(this,rB.ERROR,...B),this._logHandler(this,rB.ERROR,...B)}}const KN=(e,B)=>B.some(t=>e instanceof t);let Tp,Gp;function QN(){return Tp||(Tp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function JN(){return Gp||(Gp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uv=new WeakMap,H1=new WeakMap,dv=new WeakMap,Vc=new WeakMap,xh=new WeakMap;function UN(e){const B=new Promise((t,C)=>{const n=()=>{e.removeEventListener("success",r),e.removeEventListener("error",i)},r=()=>{t(mC(e.result)),n()},i=()=>{C(e.error),n()};e.addEventListener("success",r),e.addEventListener("error",i)});return B.then(t=>{t instanceof IDBCursor&&uv.set(t,e)}).catch(()=>{}),xh.set(B,e),B}function VN(e){if(H1.has(e))return;const B=new Promise((t,C)=>{const n=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",i),e.removeEventListener("abort",i)},r=()=>{t(),n()},i=()=>{C(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",r),e.addEventListener("error",i),e.addEventListener("abort",i)});H1.set(e,B)}let M1={get(e,B,t){if(e instanceof IDBTransaction){if(B==="done")return H1.get(e);if(B==="objectStoreNames")return e.objectStoreNames||dv.get(e);if(B==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return mC(e[B])},set(e,B,t){return e[B]=t,!0},has(e,B){return e instanceof IDBTransaction&&(B==="done"||B==="store")?!0:B in e}};function WN(e){M1=e(M1)}function jN(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(B,...t){const C=e.call(Wc(this),B,...t);return dv.set(C,B.sort?B.sort():[B]),mC(C)}:JN().includes(e)?function(...B){return e.apply(Wc(this),B),mC(uv.get(this))}:function(...B){return mC(e.apply(Wc(this),B))}}function YN(e){return typeof e=="function"?jN(e):(e instanceof IDBTransaction&&VN(e),KN(e,QN())?new Proxy(e,M1):e)}function mC(e){if(e instanceof IDBRequest)return UN(e);if(Vc.has(e))return Vc.get(e);const B=YN(e);return B!==e&&(Vc.set(e,B),xh.set(B,e)),B}const Wc=e=>xh.get(e);function XN(e,B,{blocked:t,upgrade:C,blocking:n,terminated:r}={}){const i=indexedDB.open(e,B),s=mC(i);return C&&i.addEventListener("upgradeneeded",a=>{C(mC(i.result),a.oldVersion,a.newVersion,mC(i.transaction),a)}),t&&i.addEventListener("blocked",a=>t(a.oldVersion,a.newVersion,a)),s.then(a=>{r&&a.addEventListener("close",()=>r()),n&&a.addEventListener("versionchange",o=>n(o.oldVersion,o.newVersion,o))}).catch(()=>{}),s}const ZN=["get","getKey","getAll","getAllKeys","count"],qN=["put","add","delete","clear"],jc=new Map;function xp(e,B){if(!(e instanceof IDBDatabase&&!(B in e)&&typeof B=="string"))return;if(jc.get(B))return jc.get(B);const t=B.replace(/FromIndex$/,""),C=B!==t,n=qN.includes(t);if(!(t in(C?IDBIndex:IDBObjectStore).prototype)||!(n||ZN.includes(t)))return;const r=async function(i,...s){const a=this.transaction(i,n?"readwrite":"readonly");let o=a.store;return C&&(o=o.index(s.shift())),(await Promise.all([o[t](...s),n&&a.done]))[0]};return jc.set(B,r),r}WN(e=>({...e,get:(B,t,C)=>xp(B,t)||e.get(B,t,C),has:(B,t)=>!!xp(B,t)||e.has(B,t)}));/**
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
*/class zN{constructor(B){this.container=B}getPlatformInfoString(){return this.container.getProviders().map(B=>{if(_N(B)){const t=B.getImmediate();return`${t.library}/${t.version}`}else return null}).filter(B=>B).join(" ")}}function _N(e){const B=e.getComponent();return(B==null?void 0:B.type)==="VERSION"}const L1="@firebase/app",Kp="0.9.13";/**
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
*/const sn=new Hl("@firebase/app"),$N="@firebase/app-compat",BF="@firebase/analytics-compat",eF="@firebase/analytics",tF="@firebase/app-check-compat",CF="@firebase/app-check",nF="@firebase/auth",rF="@firebase/auth-compat",iF="@firebase/database",sF="@firebase/database-compat",aF="@firebase/functions",oF="@firebase/functions-compat",lF="@firebase/installations",cF="@firebase/installations-compat",uF="@firebase/messaging",dF="@firebase/messaging-compat",hF="@firebase/performance",fF="@firebase/performance-compat",pF="@firebase/remote-config",mF="@firebase/remote-config-compat",gF="@firebase/storage",bF="@firebase/storage-compat",AF="@firebase/firestore",vF="@firebase/firestore-compat",yF="firebase",EF="9.23.0";/**
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
*/const T1="[DEFAULT]",IF={[L1]:"fire-core",[$N]:"fire-core-compat",[eF]:"fire-analytics",[BF]:"fire-analytics-compat",[CF]:"fire-app-check",[tF]:"fire-app-check-compat",[nF]:"fire-auth",[rF]:"fire-auth-compat",[iF]:"fire-rtdb",[sF]:"fire-rtdb-compat",[aF]:"fire-fn",[oF]:"fire-fn-compat",[lF]:"fire-iid",[cF]:"fire-iid-compat",[uF]:"fire-fcm",[dF]:"fire-fcm-compat",[hF]:"fire-perf",[fF]:"fire-perf-compat",[pF]:"fire-rc",[mF]:"fire-rc-compat",[gF]:"fire-gcs",[bF]:"fire-gcs-compat",[AF]:"fire-fst",[vF]:"fire-fst-compat","fire-js":"fire-js",[yF]:"fire-js-all"};/**
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
*/const Ro=new Map,G1=new Map;function SF(e,B){try{e.container.addComponent(B)}catch(t){sn.debug(`Component ${B.name} failed to register with FirebaseApp ${e.name}`,t)}}function pt(e){const B=e.name;if(G1.has(B))return sn.debug(`There were multiple attempts to register component ${B}.`),!1;G1.set(B,e);for(const t of Ro.values())SF(t,e);return!0}function An(e,B){const t=e.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),e.container.getProvider(B)}/**
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
*/const wF={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},gC=new bn("app","Firebase",wF);/**
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
*/class DF{constructor(B,t,C){this._isDeleted=!1,this._options=Object.assign({},B),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=C,this.container.addComponent(new rt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(B){this.checkDestroyed(),this._automaticDataCollectionEnabled=B}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(B){this._isDeleted=B}checkDestroyed(){if(this.isDeleted)throw gC.create("app-deleted",{appName:this._name})}}/**
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
*/const wr=EF;function Ml(e,B={}){let t=e;typeof B!="object"&&(B={name:B});const C=Object.assign({name:T1,automaticDataCollectionEnabled:!1},B),n=C.name;if(typeof n!="string"||!n)throw gC.create("bad-app-name",{appName:String(n)});if(t||(t=nv()),!t)throw gC.create("no-options");const r=Ro.get(n);if(r){if(xi(t,r.options)&&xi(C,r.config))return r;throw gC.create("duplicate-app",{appName:n})}const i=new MN(n);for(const a of G1.values())i.addComponent(a);const s=new DF(t,C,i);return Ro.set(n,s),s}function Kh(e=T1){const B=Ro.get(e);if(!B&&e===T1&&nv())return Ml();if(!B)throw gC.create("no-app",{appName:e});return B}function xe(e,B,t){var C;let n=(C=IF[e])!==null&&C!==void 0?C:e;t&&(n+=`-${t}`);const r=n.match(/\s|\//),i=B.match(/\s|\//);if(r||i){const s=[`Unable to register library "${n}" with version "${B}":`];r&&s.push(`library name "${n}" contains illegal characters (whitespace or "/")`),r&&i&&s.push("and"),i&&s.push(`version name "${B}" contains illegal characters (whitespace or "/")`),sn.warn(s.join(" "));return}pt(new rt(`${n}-version`,()=>({library:n,version:B}),"VERSION"))}/**
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
*/const kF="firebase-heartbeat-database",PF=1,Ki="firebase-heartbeat-store";let Yc=null;function hv(){return Yc||(Yc=XN(kF,PF,{upgrade:(e,B)=>{switch(B){case 0:e.createObjectStore(Ki)}}}).catch(e=>{throw gC.create("idb-open",{originalErrorMessage:e.message})})),Yc}async function NF(e){try{return await(await hv()).transaction(Ki).objectStore(Ki).get(fv(e))}catch(B){if(B instanceof vt)sn.warn(B.message);else{const t=gC.create("idb-get",{originalErrorMessage:B==null?void 0:B.message});sn.warn(t.message)}}}async function Qp(e,B){try{const t=(await hv()).transaction(Ki,"readwrite");await t.objectStore(Ki).put(B,fv(e)),await t.done}catch(t){if(t instanceof vt)sn.warn(t.message);else{const C=gC.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});sn.warn(C.message)}}}function fv(e){return`${e.name}!${e.options.appId}`}/**
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
*/const FF=1024,OF=30*24*60*60*1e3;class RF{constructor(B){this.container=B,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new MF(t),this._heartbeatsCachePromise=this._storage.read().then(C=>(this._heartbeatsCache=C,C))}async triggerHeartbeat(){const B=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Jp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(C=>C.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:B}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(C=>{const n=new Date(C.date).valueOf();return Date.now()-n<=OF}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const B=Jp(),{heartbeatsToSend:t,unsentEntries:C}=HF(this._heartbeatsCache.heartbeats),n=No(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=B,C.length>0?(this._heartbeatsCache.heartbeats=C,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function Jp(){return new Date().toISOString().substring(0,10)}function HF(e,B=FF){const t=[];let C=e.slice();for(const n of e){const r=t.find(i=>i.agent===n.agent);if(r){if(r.dates.push(n.date),Up(t)>B){r.dates.pop();break}}else if(t.push({agent:n.agent,dates:[n.date]}),Up(t)>B){t.pop();break}C=C.slice(1)}return{heartbeatsToSend:t,unsentEntries:C}}class MF{constructor(B){this.app=B,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ov()?lv().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await NF(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(B){var t;if(await this._canUseIndexedDBPromise){const C=await this.read();return Qp(this.app,{lastSentHeartbeatDate:(t=B.lastSentHeartbeatDate)!==null&&t!==void 0?t:C.lastSentHeartbeatDate,heartbeats:B.heartbeats})}else return}async add(B){var t;if(await this._canUseIndexedDBPromise){const C=await this.read();return Qp(this.app,{lastSentHeartbeatDate:(t=B.lastSentHeartbeatDate)!==null&&t!==void 0?t:C.lastSentHeartbeatDate,heartbeats:[...C.heartbeats,...B.heartbeats]})}else return}}function Up(e){return No(JSON.stringify({version:2,heartbeats:e})).length}/**
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
*/function LF(e){pt(new rt("platform-logger",B=>new zN(B),"PRIVATE")),pt(new rt("heartbeat",B=>new RF(B),"PRIVATE")),xe(L1,Kp,e),xe(L1,Kp,"esm2017"),xe("fire-js","")}LF("");var TF="firebase",GF="9.23.0";/**
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
*/xe(TF,GF,"app");const xF=(e,B)=>B.some(t=>e instanceof t);let Vp,Wp;function KF(){return Vp||(Vp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function QF(){return Wp||(Wp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pv=new WeakMap,x1=new WeakMap,mv=new WeakMap,Xc=new WeakMap,Qh=new WeakMap;function JF(e){const B=new Promise((t,C)=>{const n=()=>{e.removeEventListener("success",r),e.removeEventListener("error",i)},r=()=>{t(bC(e.result)),n()},i=()=>{C(e.error),n()};e.addEventListener("success",r),e.addEventListener("error",i)});return B.then(t=>{t instanceof IDBCursor&&pv.set(t,e)}).catch(()=>{}),Qh.set(B,e),B}function UF(e){if(x1.has(e))return;const B=new Promise((t,C)=>{const n=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",i),e.removeEventListener("abort",i)},r=()=>{t(),n()},i=()=>{C(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",r),e.addEventListener("error",i),e.addEventListener("abort",i)});x1.set(e,B)}let K1={get(e,B,t){if(e instanceof IDBTransaction){if(B==="done")return x1.get(e);if(B==="objectStoreNames")return e.objectStoreNames||mv.get(e);if(B==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return bC(e[B])},set(e,B,t){return e[B]=t,!0},has(e,B){return e instanceof IDBTransaction&&(B==="done"||B==="store")?!0:B in e}};function VF(e){K1=e(K1)}function WF(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(B,...t){const C=e.call(Zc(this),B,...t);return mv.set(C,B.sort?B.sort():[B]),bC(C)}:QF().includes(e)?function(...B){return e.apply(Zc(this),B),bC(pv.get(this))}:function(...B){return bC(e.apply(Zc(this),B))}}function jF(e){return typeof e=="function"?WF(e):(e instanceof IDBTransaction&&UF(e),xF(e,KF())?new Proxy(e,K1):e)}function bC(e){if(e instanceof IDBRequest)return JF(e);if(Xc.has(e))return Xc.get(e);const B=jF(e);return B!==e&&(Xc.set(e,B),Qh.set(B,e)),B}const Zc=e=>Qh.get(e);function YF(e,B,{blocked:t,upgrade:C,blocking:n,terminated:r}={}){const i=indexedDB.open(e,B),s=bC(i);return C&&i.addEventListener("upgradeneeded",a=>{C(bC(i.result),a.oldVersion,a.newVersion,bC(i.transaction))}),t&&i.addEventListener("blocked",()=>t()),s.then(a=>{r&&a.addEventListener("close",()=>r()),n&&a.addEventListener("versionchange",()=>n())}).catch(()=>{}),s}const XF=["get","getKey","getAll","getAllKeys","count"],ZF=["put","add","delete","clear"],qc=new Map;function jp(e,B){if(!(e instanceof IDBDatabase&&!(B in e)&&typeof B=="string"))return;if(qc.get(B))return qc.get(B);const t=B.replace(/FromIndex$/,""),C=B!==t,n=ZF.includes(t);if(!(t in(C?IDBIndex:IDBObjectStore).prototype)||!(n||XF.includes(t)))return;const r=async function(i,...s){const a=this.transaction(i,n?"readwrite":"readonly");let o=a.store;return C&&(o=o.index(s.shift())),(await Promise.all([o[t](...s),n&&a.done]))[0]};return qc.set(B,r),r}VF(e=>({...e,get:(B,t,C)=>jp(B,t)||e.get(B,t,C),has:(B,t)=>!!jp(B,t)||e.has(B,t)}));const gv="@firebase/installations",Jh="0.6.4";/**
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
*/const bv=1e4,Av=`w:${Jh}`,vv="FIS_v2",qF="https://firebaseinstallations.googleapis.com/v1",zF=60*60*1e3,_F="installations",$F="Installations";/**
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
*/const BO={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},an=new bn(_F,$F,BO);function yv(e){return e instanceof vt&&e.code.includes("request-failed")}/**
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
*/function Ev({projectId:e}){return`${qF}/projects/${e}/installations`}function Iv(e){return{token:e.token,requestStatus:2,expiresIn:tO(e.expiresIn),creationTime:Date.now()}}async function Sv(e,B){const t=(await B.json()).error;return an.create("request-failed",{requestName:e,serverCode:t.code,serverMessage:t.message,serverStatus:t.status})}function wv({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function eO(e,{refreshToken:B}){const t=wv(e);return t.append("Authorization",CO(B)),t}async function Dv(e){const B=await e();return B.status>=500&&B.status<600?e():B}function tO(e){return Number(e.replace("s","000"))}function CO(e){return`${vv} ${e}`}/**
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
*/async function nO({appConfig:e,heartbeatServiceProvider:B},{fid:t}){const C=Ev(e),n=wv(e),r=B.getImmediate({optional:!0});if(r){const o=await r.getHeartbeatsHeader();o&&n.append("x-firebase-client",o)}const i={fid:t,authVersion:vv,appId:e.appId,sdkVersion:Av},s={method:"POST",headers:n,body:JSON.stringify(i)},a=await Dv(()=>fetch(C,s));if(a.ok){const o=await a.json();return{fid:o.fid||t,registrationStatus:2,refreshToken:o.refreshToken,authToken:Iv(o.authToken)}}else throw await Sv("Create Installation",a)}/**
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
*/function kv(e){return new Promise(B=>{setTimeout(B,e)})}/**
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
*/function rO(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
*/const iO=/^[cdef][\w-]{21}$/,Q1="";function sO(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const B=aO(e);return iO.test(B)?B:Q1}catch{return Q1}}function aO(e){return rO(e).substr(0,22)}/**
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
*/function Ll(e){return`${e.appName}!${e.appId}`}/**
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
*/const Pv=new Map;function Nv(e,B){const t=Ll(e);Fv(t,B),oO(t,B)}function Fv(e,B){const t=Pv.get(e);if(t)for(const C of t)C(B)}function oO(e,B){const t=lO();t&&t.postMessage({key:e,fid:B}),cO()}let VC=null;function lO(){return!VC&&"BroadcastChannel"in self&&(VC=new BroadcastChannel("[Firebase] FID Change"),VC.onmessage=e=>{Fv(e.data.key,e.data.fid)}),VC}function cO(){Pv.size===0&&VC&&(VC.close(),VC=null)}/**
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
*/const uO="firebase-installations-database",dO=1,on="firebase-installations-store";let zc=null;function Uh(){return zc||(zc=YF(uO,dO,{upgrade:(e,B)=>{switch(B){case 0:e.createObjectStore(on)}}})),zc}async function Ho(e,B){const t=Ll(e),C=(await Uh()).transaction(on,"readwrite"),n=C.objectStore(on),r=await n.get(t);return await n.put(B,t),await C.done,(!r||r.fid!==B.fid)&&Nv(e,B.fid),B}async function Ov(e){const B=Ll(e),t=(await Uh()).transaction(on,"readwrite");await t.objectStore(on).delete(B),await t.done}async function Tl(e,B){const t=Ll(e),C=(await Uh()).transaction(on,"readwrite"),n=C.objectStore(on),r=await n.get(t),i=B(r);return i===void 0?await n.delete(t):await n.put(i,t),await C.done,i&&(!r||r.fid!==i.fid)&&Nv(e,i.fid),i}/**
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
*/async function Vh(e){let B;const t=await Tl(e.appConfig,C=>{const n=hO(C),r=fO(e,n);return B=r.registrationPromise,r.installationEntry});return t.fid===Q1?{installationEntry:await B}:{installationEntry:t,registrationPromise:B}}function hO(e){const B=e||{fid:sO(),registrationStatus:0};return Rv(B)}function fO(e,B){if(B.registrationStatus===0){if(!navigator.onLine){const n=Promise.reject(an.create("app-offline"));return{installationEntry:B,registrationPromise:n}}const t={fid:B.fid,registrationStatus:1,registrationTime:Date.now()},C=pO(e,t);return{installationEntry:t,registrationPromise:C}}else return B.registrationStatus===1?{installationEntry:B,registrationPromise:mO(e)}:{installationEntry:B}}async function pO(e,B){try{const t=await nO(e,B);return Ho(e.appConfig,t)}catch(t){throw yv(t)&&t.customData.serverCode===409?await Ov(e.appConfig):await Ho(e.appConfig,{fid:B.fid,registrationStatus:0}),t}}async function mO(e){let B=await Yp(e.appConfig);for(;B.registrationStatus===1;)await kv(100),B=await Yp(e.appConfig);if(B.registrationStatus===0){const{installationEntry:t,registrationPromise:C}=await Vh(e);return C||t}return B}function Yp(e){return Tl(e,B=>{if(!B)throw an.create("installation-not-found");return Rv(B)})}function Rv(e){return gO(e)?{fid:e.fid,registrationStatus:0}:e}function gO(e){return e.registrationStatus===1&&e.registrationTime+bv<Date.now()}/**
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
*/async function bO({appConfig:e,heartbeatServiceProvider:B},t){const C=AO(e,t),n=eO(e,t),r=B.getImmediate({optional:!0});if(r){const o=await r.getHeartbeatsHeader();o&&n.append("x-firebase-client",o)}const i={installation:{sdkVersion:Av,appId:e.appId}},s={method:"POST",headers:n,body:JSON.stringify(i)},a=await Dv(()=>fetch(C,s));if(a.ok){const o=await a.json();return Iv(o)}else throw await Sv("Generate Auth Token",a)}function AO(e,{fid:B}){return`${Ev(e)}/${B}/authTokens:generate`}/**
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
*/async function Wh(e,B=!1){let t;const C=await Tl(e.appConfig,n=>{if(!Hv(n))throw an.create("not-registered");const r=n.authToken;if(!B&&EO(r))return n;if(r.requestStatus===1)return t=vO(e,B),n;{if(!navigator.onLine)throw an.create("app-offline");const i=SO(n);return t=yO(e,i),i}});return t?await t:C.authToken}async function vO(e,B){let t=await Xp(e.appConfig);for(;t.authToken.requestStatus===1;)await kv(100),t=await Xp(e.appConfig);const C=t.authToken;return C.requestStatus===0?Wh(e,B):C}function Xp(e){return Tl(e,B=>{if(!Hv(B))throw an.create("not-registered");const t=B.authToken;return wO(t)?Object.assign(Object.assign({},B),{authToken:{requestStatus:0}}):B})}async function yO(e,B){try{const t=await bO(e,B),C=Object.assign(Object.assign({},B),{authToken:t});return await Ho(e.appConfig,C),t}catch(t){if(yv(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Ov(e.appConfig);else{const C=Object.assign(Object.assign({},B),{authToken:{requestStatus:0}});await Ho(e.appConfig,C)}throw t}}function Hv(e){return e!==void 0&&e.registrationStatus===2}function EO(e){return e.requestStatus===2&&!IO(e)}function IO(e){const B=Date.now();return B<e.creationTime||e.creationTime+e.expiresIn<B+zF}function SO(e){const B={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:B})}function wO(e){return e.requestStatus===1&&e.requestTime+bv<Date.now()}/**
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
*/async function DO(e){const B=e,{installationEntry:t,registrationPromise:C}=await Vh(B);return C?C.catch(console.error):Wh(B).catch(console.error),t.fid}/**
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
*/async function kO(e,B=!1){const t=e;return await PO(t),(await Wh(t,B)).token}async function PO(e){const{registrationPromise:B}=await Vh(e);B&&await B}/**
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
*/function NO(e){if(!e||!e.options)throw _c("App Configuration");if(!e.name)throw _c("App Name");const B=["projectId","apiKey","appId"];for(const t of B)if(!e.options[t])throw _c(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function _c(e){return an.create("missing-app-config-values",{valueName:e})}/**
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
*/const Mv="installations",FO="installations-internal",OO=e=>{const B=e.getProvider("app").getImmediate(),t=NO(B),C=An(B,"heartbeat");return{app:B,appConfig:t,heartbeatServiceProvider:C,_delete:()=>Promise.resolve()}},RO=e=>{const B=e.getProvider("app").getImmediate(),t=An(B,Mv).getImmediate();return{getId:()=>DO(t),getToken:C=>kO(t,C)}};function HO(){pt(new rt(Mv,OO,"PUBLIC")),pt(new rt(FO,RO,"PRIVATE"))}HO();xe(gv,Jh);xe(gv,Jh,"esm2017");/**
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
*/const Mo="analytics",MO="firebase_id",LO="origin",TO=60*1e3,GO="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",jh="https://www.googletagmanager.com/gtag/js";/**
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
*/const fe=new Hl("@firebase/analytics");/**
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
*/const xO={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Se=new bn("analytics","Analytics",xO);/**
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
*/function KO(e){if(!e.startsWith(jh)){const B=Se.create("invalid-gtag-resource",{gtagURL:e});return fe.warn(B.message),""}return e}function Lv(e){return Promise.all(e.map(B=>B.catch(t=>t)))}function QO(e,B){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(e,B)),t}function JO(e,B){const t=QO("firebase-js-sdk-policy",{createScriptURL:KO}),C=document.createElement("script"),n=`${jh}?l=${e}&id=${B}`;C.src=t?t==null?void 0:t.createScriptURL(n):n,C.async=!0,document.head.appendChild(C)}function UO(e){let B=[];return Array.isArray(window[e])?B=window[e]:window[e]=B,B}async function VO(e,B,t,C,n,r){const i=C[n];try{if(i)await B[i];else{const s=(await Lv(t)).find(a=>a.measurementId===n);s&&await B[s.appId]}}catch(s){fe.error(s)}e("config",n,r)}async function WO(e,B,t,C,n){try{let r=[];if(n&&n.send_to){let i=n.send_to;Array.isArray(i)||(i=[i]);const s=await Lv(t);for(const a of i){const o=s.find(l=>l.measurementId===a),c=o&&B[o.appId];if(c)r.push(c);else{r=[];break}}}r.length===0&&(r=Object.values(B)),await Promise.all(r),e("event",C,n||{})}catch(r){fe.error(r)}}function jO(e,B,t,C){async function n(r,...i){try{if(r==="event"){const[s,a]=i;await WO(e,B,t,s,a)}else if(r==="config"){const[s,a]=i;await VO(e,B,t,C,s,a)}else if(r==="consent"){const[s]=i;e("consent","update",s)}else if(r==="get"){const[s,a,o]=i;e("get",s,a,o)}else if(r==="set"){const[s]=i;e("set",s)}else e(r,...i)}catch(s){fe.error(s)}}return n}function YO(e,B,t,C,n){let r=function(...i){window[C].push(arguments)};return window[n]&&typeof window[n]=="function"&&(r=window[n]),window[n]=jO(r,e,B,t),{gtagCore:r,wrappedGtag:window[n]}}function XO(e){const B=window.document.getElementsByTagName("script");for(const t of Object.values(B))if(t.src&&t.src.includes(jh)&&t.src.includes(e))return t;return null}/**
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
*/const ZO=30,qO=1e3;class zO{constructor(B={},t=qO){this.throttleMetadata=B,this.intervalMillis=t}getThrottleMetadata(B){return this.throttleMetadata[B]}setThrottleMetadata(B,t){this.throttleMetadata[B]=t}deleteThrottleMetadata(B){delete this.throttleMetadata[B]}}const Tv=new zO;function _O(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function $O(e){var B;const{appId:t,apiKey:C}=e,n={method:"GET",headers:_O(C)},r=GO.replace("{app-id}",t),i=await fetch(r,n);if(i.status!==200&&i.status!==304){let s="";try{const a=await i.json();!((B=a.error)===null||B===void 0)&&B.message&&(s=a.error.message)}catch{}throw Se.create("config-fetch-failed",{httpStatus:i.status,responseMessage:s})}return i.json()}async function B6(e,B=Tv,t){const{appId:C,apiKey:n,measurementId:r}=e.options;if(!C)throw Se.create("no-app-id");if(!n){if(r)return{measurementId:r,appId:C};throw Se.create("no-api-key")}const i=B.getThrottleMetadata(C)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new C6;return setTimeout(async()=>{s.abort()},t!==void 0?t:TO),Gv({appId:C,apiKey:n,measurementId:r},i,s,B)}async function Gv(e,{throttleEndTimeMillis:B,backoffCount:t},C,n=Tv){var r;const{appId:i,measurementId:s}=e;try{await e6(C,B)}catch(a){if(s)return fe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${a==null?void 0:a.message}]`),{appId:i,measurementId:s};throw a}try{const a=await $O(e);return n.deleteThrottleMetadata(i),a}catch(a){const o=a;if(!t6(o)){if(n.deleteThrottleMetadata(i),s)return fe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${o==null?void 0:o.message}]`),{appId:i,measurementId:s};throw a}const c=Number((r=o==null?void 0:o.customData)===null||r===void 0?void 0:r.httpStatus)===503?Lp(t,n.intervalMillis,ZO):Lp(t,n.intervalMillis),l={throttleEndTimeMillis:Date.now()+c,backoffCount:t+1};return n.setThrottleMetadata(i,l),fe.debug(`Calling attemptFetch again in ${c} millis`),Gv(e,l,C,n)}}function e6(e,B){return new Promise((t,C)=>{const n=Math.max(B-Date.now(),0),r=setTimeout(t,n);e.addEventListener(()=>{clearTimeout(r),C(Se.create("fetch-throttle",{throttleEndTimeMillis:B}))})})}function t6(e){if(!(e instanceof vt)||!e.customData)return!1;const B=Number(e.customData.httpStatus);return B===429||B===500||B===503||B===504}class C6{constructor(){this.listeners=[]}addEventListener(B){this.listeners.push(B)}abort(){this.listeners.forEach(B=>B())}}async function n6(e,B,t,C,n){if(n&&n.global){e("event",t,C);return}else{const r=await B,i=Object.assign(Object.assign({},C),{send_to:r});e("event",t,i)}}/**
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
*/async function r6(){if(ov())try{await lv()}catch(e){return fe.warn(Se.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return fe.warn(Se.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function i6(e,B,t,C,n,r,i){var s;const a=B6(e);a.then(m=>{t[m.measurementId]=m.appId,e.options.measurementId&&m.measurementId!==e.options.measurementId&&fe.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>fe.error(m)),B.push(a);const o=r6().then(m=>{if(m)return C.getId()}),[c,l]=await Promise.all([a,o]);XO(r)||JO(r,c.measurementId),n("js",new Date);const u=(s=i==null?void 0:i.config)!==null&&s!==void 0?s:{};return u[LO]="firebase",u.update=!0,l!=null&&(u[MO]=l),n("config",c.measurementId,u),c.measurementId}/**
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
*/class s6{constructor(B){this.app=B}_delete(){return delete ci[this.app.options.appId],Promise.resolve()}}let ci={},Zp=[];const qp={};let $c="dataLayer",a6="gtag",zp,xv,_p=!1;function o6(){const e=[];if(iv()&&e.push("This is a browser extension environment."),mN()||e.push("Cookies are not available."),e.length>0){const B=e.map((C,n)=>`(${n+1}) ${C}`).join(" "),t=Se.create("invalid-analytics-context",{errorInfo:B});fe.warn(t.message)}}function l6(e,B,t){o6();const C=e.options.appId;if(!C)throw Se.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)fe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Se.create("no-api-key");if(ci[C]!=null)throw Se.create("already-exists",{id:C});if(!_p){UO($c);const{wrappedGtag:n,gtagCore:r}=YO(ci,Zp,qp,$c,a6);xv=n,zp=r,_p=!0}return ci[C]=i6(e,Zp,qp,B,zp,$c,t),new s6(e)}function Yh(e=Kh()){e=ge(e);const B=An(e,Mo);return B.isInitialized()?B.getImmediate():c6(e)}function c6(e,B={}){const t=An(e,Mo);if(t.isInitialized()){const C=t.getImmediate();if(xi(B,t.getOptions()))return C;throw Se.create("already-initialized")}return t.initialize({options:B})}function u6(e,B,t,C){e=ge(e),n6(xv,ci[e.app.options.appId],B,t,C).catch(n=>fe.error(n))}const $p="@firebase/analytics",Bm="0.10.0";function d6(){pt(new rt(Mo,(B,{options:t})=>{const C=B.getProvider("app").getImmediate(),n=B.getProvider("installations-internal").getImmediate();return l6(C,n,t)},"PUBLIC")),pt(new rt("analytics-internal",e,"PRIVATE")),xe($p,Bm),xe($p,Bm,"esm2017");function e(B){try{const t=B.getProvider(Mo).getImmediate();return{logEvent:(C,n,r)=>u6(t,C,n,r)}}catch(t){throw Se.create("interop-component-reg-failed",{reason:t})}}}d6();function Xh(e,B){var t={};for(var C in e)Object.prototype.hasOwnProperty.call(e,C)&&B.indexOf(C)<0&&(t[C]=e[C]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,C=Object.getOwnPropertySymbols(e);n<C.length;n++)B.indexOf(C[n])<0&&Object.prototype.propertyIsEnumerable.call(e,C[n])&&(t[C[n]]=e[C[n]]);return t}function Kv(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const h6=Kv,Qv=new bn("auth","Firebase",Kv());/**
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
*/const Lo=new Hl("@firebase/auth");function f6(e,...B){Lo.logLevel<=rB.WARN&&Lo.warn(`Auth (${wr}): ${e}`,...B)}function Ya(e,...B){Lo.logLevel<=rB.ERROR&&Lo.error(`Auth (${wr}): ${e}`,...B)}/**
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
*/function mt(e,...B){throw Zh(e,...B)}function ht(e,...B){return Zh(e,...B)}function Jv(e,B,t){const C=Object.assign(Object.assign({},h6()),{[B]:t});return new bn("auth","Firebase",C).create(B,{appName:e.name})}function p6(e,B,t){const C=t;if(!(B instanceof C))throw C.name!==B.constructor.name&&mt(e,"argument-error"),Jv(e,"argument-error",`Type of ${B.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Zh(e,...B){if(typeof e!="string"){const t=B[0],C=[...B.slice(1)];return C[0]&&(C[0].appName=e.name),e._errorFactory.create(t,...C)}return Qv.create(e,...B)}function U(e,B,...t){if(!e)throw Zh(B,...t)}function kt(e){const B="INTERNAL ASSERTION FAILED: "+e;throw Ya(B),new Error(B)}function Gt(e,B){e||kt(B)}/**
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
*/function J1(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function m6(){return em()==="http:"||em()==="https:"}function em(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
*/function g6(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(m6()||iv()||"connection"in navigator)?navigator.onLine:!0}function b6(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
*/class hs{constructor(B,t){this.shortDelay=B,this.longDelay=t,Gt(t>B,"Short delay should be less than long delay!"),this.isMobile=Th()||sv()}get(){return g6()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
*/function qh(e,B){Gt(e.emulator,"Emulator should always be set here");const{url:t}=e.emulator;return B?`${t}${B.startsWith("/")?B.slice(1):B}`:t}/**
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
*/class Uv{static initialize(B,t,C){this.fetchImpl=B,t&&(this.headersImpl=t),C&&(this.responseImpl=C)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
*/const A6={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
*/const v6=new hs(3e4,6e4);function Vv(e,B){return e.tenantId&&!B.tenantId?Object.assign(Object.assign({},B),{tenantId:e.tenantId}):B}async function fs(e,B,t,C,n={}){return Wv(e,n,async()=>{let r={},i={};C&&(B==="GET"?i=C:r={body:JSON.stringify(C)});const s=Sr(Object.assign({key:e.config.apiKey},i)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Uv.fetch()(jv(e,e.config.apiHost,t,s),Object.assign({method:B,headers:a,referrerPolicy:"no-referrer"},r))})}async function Wv(e,B,t){e._canInitEmulator=!1;const C=Object.assign(Object.assign({},A6),B);try{const n=new E6(e),r=await Promise.race([t(),n.promise]);n.clearNetworkTimeout();const i=await r.json();if("needConfirmation"in i)throw ia(e,"account-exists-with-different-credential",i);if(r.ok&&!("errorMessage"in i))return i;{const s=r.ok?i.errorMessage:i.error.message,[a,o]=s.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw ia(e,"credential-already-in-use",i);if(a==="EMAIL_EXISTS")throw ia(e,"email-already-in-use",i);if(a==="USER_DISABLED")throw ia(e,"user-disabled",i);const c=C[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Jv(e,c,o);mt(e,c)}}catch(n){if(n instanceof vt)throw n;mt(e,"network-request-failed",{message:String(n)})}}async function y6(e,B,t,C,n={}){const r=await fs(e,B,t,C,n);return"mfaPendingCredential"in r&&mt(e,"multi-factor-auth-required",{_serverResponse:r}),r}function jv(e,B,t,C){const n=`${B}${t}?${C}`;return e.config.emulator?qh(e.config,n):`${e.config.apiScheme}://${n}`}class E6{constructor(B){this.auth=B,this.timer=null,this.promise=new Promise((t,C)=>{this.timer=setTimeout(()=>C(ht(this.auth,"network-request-failed")),v6.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ia(e,B,t){const C={appName:e.name};t.email&&(C.email=t.email),t.phoneNumber&&(C.phoneNumber=t.phoneNumber);const n=ht(e,B,C);return n.customData._tokenResponse=t,n}/**
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
*/async function I6(e,B){return fs(e,"POST","/v1/accounts:delete",B)}async function S6(e,B){return fs(e,"POST","/v1/accounts:lookup",B)}/**
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
*/function ui(e){if(e)try{const B=new Date(Number(e));if(!isNaN(B.getTime()))return B.toUTCString()}catch{}}async function w6(e,B=!1){const t=ge(e),C=await t.getIdToken(B),n=zh(C);U(n&&n.exp&&n.auth_time&&n.iat,t.auth,"internal-error");const r=typeof n.firebase=="object"?n.firebase:void 0,i=r==null?void 0:r.sign_in_provider;return{claims:n,token:C,authTime:ui(Bu(n.auth_time)),issuedAtTime:ui(Bu(n.iat)),expirationTime:ui(Bu(n.exp)),signInProvider:i||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Bu(e){return Number(e)*1e3}function zh(e){const[B,t,C]=e.split(".");if(B===void 0||t===void 0||C===void 0)return Ya("JWT malformed, contained fewer than 3 sections"),null;try{const n=Fo(t);return n?JSON.parse(n):(Ya("Failed to decode base64 JWT payload"),null)}catch(n){return Ya("Caught error parsing JWT payload as JSON",n==null?void 0:n.toString()),null}}function D6(e){const B=zh(e);return U(B,"internal-error"),U(typeof B.exp<"u","internal-error"),U(typeof B.iat<"u","internal-error"),Number(B.exp)-Number(B.iat)}/**
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
*/async function Qi(e,B,t=!1){if(t)return B;try{return await B}catch(C){throw C instanceof vt&&k6(C)&&e.auth.currentUser===e&&await e.auth.signOut(),C}}function k6({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
*/class P6{constructor(B){this.user=B,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(B){var t;if(B){const C=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),C}else{this.errorBackoff=3e4;const C=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,C)}}schedule(B=!1){if(!this.isRunning)return;const t=this.getInterval(B);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(B){(B==null?void 0:B.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
*/class Yv{constructor(B,t){this.createdAt=B,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ui(this.lastLoginAt),this.creationTime=ui(this.createdAt)}_copy(B){this.createdAt=B.createdAt,this.lastLoginAt=B.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
*/async function To(e){var B;const t=e.auth,C=await e.getIdToken(),n=await Qi(e,S6(t,{idToken:C}));U(n==null?void 0:n.users.length,t,"internal-error");const r=n.users[0];e._notifyReloadListener(r);const i=!((B=r.providerUserInfo)===null||B===void 0)&&B.length?O6(r.providerUserInfo):[],s=F6(e.providerData,i),a=e.isAnonymous,o=!(e.email&&r.passwordHash)&&!(s!=null&&s.length),c=a?o:!1,l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new Yv(r.createdAt,r.lastLoginAt),isAnonymous:c};Object.assign(e,l)}async function N6(e){const B=ge(e);await To(B),await B.auth._persistUserIfCurrent(B),B.auth._notifyListenersIfCurrent(B)}function F6(e,B){return[...e.filter(t=>!B.some(C=>C.providerId===t.providerId)),...B]}function O6(e){return e.map(B=>{var{providerId:t}=B,C=Xh(B,["providerId"]);return{providerId:t,uid:C.rawId||"",displayName:C.displayName||null,email:C.email||null,phoneNumber:C.phoneNumber||null,photoURL:C.photoUrl||null}})}/**
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
*/async function R6(e,B){const t=await Wv(e,{},async()=>{const C=Sr({grant_type:"refresh_token",refresh_token:B}).slice(1),{tokenApiHost:n,apiKey:r}=e.config,i=jv(e,n,"/v1/token",`key=${r}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",Uv.fetch()(i,{method:"POST",headers:s,body:C})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
*/class Ji{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(B){U(B.idToken,"internal-error"),U(typeof B.idToken<"u","internal-error"),U(typeof B.refreshToken<"u","internal-error");const t="expiresIn"in B&&typeof B.expiresIn<"u"?Number(B.expiresIn):D6(B.idToken);this.updateTokensAndExpiration(B.idToken,B.refreshToken,t)}async getToken(B,t=!1){return U(!this.accessToken||this.refreshToken,B,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(B,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(B,t){const{accessToken:C,refreshToken:n,expiresIn:r}=await R6(B,t);this.updateTokensAndExpiration(C,n,Number(r))}updateTokensAndExpiration(B,t,C){this.refreshToken=t||null,this.accessToken=B||null,this.expirationTime=Date.now()+C*1e3}static fromJSON(B,t){const{refreshToken:C,accessToken:n,expirationTime:r}=t,i=new Ji;return C&&(U(typeof C=="string","internal-error",{appName:B}),i.refreshToken=C),n&&(U(typeof n=="string","internal-error",{appName:B}),i.accessToken=n),r&&(U(typeof r=="number","internal-error",{appName:B}),i.expirationTime=r),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(B){this.accessToken=B.accessToken,this.refreshToken=B.refreshToken,this.expirationTime=B.expirationTime}_clone(){return Object.assign(new Ji,this.toJSON())}_performRefresh(){return kt("not implemented")}}/**
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
*/function Zt(e,B){U(typeof e=="string"||typeof e>"u","internal-error",{appName:B})}class $C{constructor(B){var{uid:t,auth:C,stsTokenManager:n}=B,r=Xh(B,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new P6(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=C,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Yv(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(B){const t=await Qi(this,this.stsTokenManager.getToken(this.auth,B));return U(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(B){return w6(this,B)}reload(){return N6(this)}_assign(B){this!==B&&(U(this.uid===B.uid,this.auth,"internal-error"),this.displayName=B.displayName,this.photoURL=B.photoURL,this.email=B.email,this.emailVerified=B.emailVerified,this.phoneNumber=B.phoneNumber,this.isAnonymous=B.isAnonymous,this.tenantId=B.tenantId,this.providerData=B.providerData.map(t=>Object.assign({},t)),this.metadata._copy(B.metadata),this.stsTokenManager._assign(B.stsTokenManager))}_clone(B){const t=new $C(Object.assign(Object.assign({},this),{auth:B,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(B){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=B,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(B){this.reloadListener?this.reloadListener(B):this.reloadUserInfo=B}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(B,t=!1){let C=!1;B.idToken&&B.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(B),C=!0),t&&await To(this),await this.auth._persistUserIfCurrent(this),C&&this.auth._notifyListenersIfCurrent(this)}async delete(){const B=await this.getIdToken();return await Qi(this,I6(this.auth,{idToken:B})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(B=>Object.assign({},B)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(B,t){var C,n,r,i,s,a,o,c;const l=(C=t.displayName)!==null&&C!==void 0?C:void 0,u=(n=t.email)!==null&&n!==void 0?n:void 0,m=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,d=(i=t.photoURL)!==null&&i!==void 0?i:void 0,f=(s=t.tenantId)!==null&&s!==void 0?s:void 0,g=(a=t._redirectEventId)!==null&&a!==void 0?a:void 0,h=(o=t.createdAt)!==null&&o!==void 0?o:void 0,p=(c=t.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:b,emailVerified:A,isAnonymous:y,providerData:I,stsTokenManager:E}=t;U(b&&E,B,"internal-error");const v=Ji.fromJSON(this.name,E);U(typeof b=="string",B,"internal-error"),Zt(l,B.name),Zt(u,B.name),U(typeof A=="boolean",B,"internal-error"),U(typeof y=="boolean",B,"internal-error"),Zt(m,B.name),Zt(d,B.name),Zt(f,B.name),Zt(g,B.name),Zt(h,B.name),Zt(p,B.name);const w=new $C({uid:b,auth:B,email:u,emailVerified:A,displayName:l,isAnonymous:y,photoURL:d,phoneNumber:m,tenantId:f,stsTokenManager:v,createdAt:h,lastLoginAt:p});return I&&Array.isArray(I)&&(w.providerData=I.map(M=>Object.assign({},M))),g&&(w._redirectEventId=g),w}static async _fromIdTokenResponse(B,t,C=!1){const n=new Ji;n.updateFromServerResponse(t);const r=new $C({uid:t.localId,auth:B,stsTokenManager:n,isAnonymous:C});return await To(r),r}}/**
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
*/const tm=new Map;function Pt(e){Gt(e instanceof Function,"Expected a class definition");let B=tm.get(e);return B?(Gt(B instanceof e,"Instance stored in cache mismatched with class"),B):(B=new e,tm.set(e,B),B)}/**
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
*/class Xv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(B,t){this.storage[B]=t}async _get(B){const t=this.storage[B];return t===void 0?null:t}async _remove(B){delete this.storage[B]}_addListener(B,t){}_removeListener(B,t){}}Xv.type="NONE";const Cm=Xv;/**
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
*/function Xa(e,B,t){return`firebase:${e}:${B}:${t}`}class _n{constructor(B,t,C){this.persistence=B,this.auth=t,this.userKey=C;const{config:n,name:r}=this.auth;this.fullUserKey=Xa(this.userKey,n.apiKey,r),this.fullPersistenceKey=Xa("persistence",n.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(B){return this.persistence._set(this.fullUserKey,B.toJSON())}async getCurrentUser(){const B=await this.persistence._get(this.fullUserKey);return B?$C._fromJSON(this.auth,B):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(B){if(this.persistence===B)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=B,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(B,t,C="authUser"){if(!t.length)return new _n(Pt(Cm),B,C);const n=(await Promise.all(t.map(async o=>{if(await o._isAvailable())return o}))).filter(o=>o);let r=n[0]||Pt(Cm);const i=Xa(C,B.config.apiKey,B.name);let s=null;for(const o of t)try{const c=await o._get(i);if(c){const l=$C._fromJSON(B,c);o!==r&&(s=l),r=o;break}}catch{}const a=n.filter(o=>o._shouldAllowMigration);return!r._shouldAllowMigration||!a.length?new _n(r,B,C):(r=a[0],s&&await r._set(i,s.toJSON()),await Promise.all(t.map(async o=>{if(o!==r)try{await o._remove(i)}catch{}})),new _n(r,B,C))}}/**
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
*/function nm(e){const B=e.toLowerCase();if(B.includes("opera/")||B.includes("opr/")||B.includes("opios/"))return"Opera";if(zv(B))return"IEMobile";if(B.includes("msie")||B.includes("trident/"))return"IE";if(B.includes("edge/"))return"Edge";if(Zv(B))return"Firefox";if(B.includes("silk/"))return"Silk";if($v(B))return"Blackberry";if(By(B))return"Webos";if(_h(B))return"Safari";if((B.includes("chrome/")||qv(B))&&!B.includes("edge/"))return"Chrome";if(_v(B))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,C=e.match(t);if((C==null?void 0:C.length)===2)return C[1]}return"Other"}function Zv(e=qB()){return/firefox\//i.test(e)}function _h(e=qB()){const B=e.toLowerCase();return B.includes("safari/")&&!B.includes("chrome/")&&!B.includes("crios/")&&!B.includes("android")}function qv(e=qB()){return/crios\//i.test(e)}function zv(e=qB()){return/iemobile/i.test(e)}function _v(e=qB()){return/android/i.test(e)}function $v(e=qB()){return/blackberry/i.test(e)}function By(e=qB()){return/webos/i.test(e)}function Gl(e=qB()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function H6(e=qB()){var B;return Gl(e)&&!!(!((B=window.navigator)===null||B===void 0)&&B.standalone)}function M6(){return pN()&&document.documentMode===10}function ey(e=qB()){return Gl(e)||_v(e)||By(e)||$v(e)||/windows phone/i.test(e)||zv(e)}function L6(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
*/function ty(e,B=[]){let t;switch(e){case"Browser":t=nm(qB());break;case"Worker":t=`${nm(qB())}-${e}`;break;default:t=e}const C=B.length?B.join(","):"FirebaseCore-web";return`${t}/JsCore/${wr}/${C}`}async function Cy(e,B){return fs(e,"GET","/v2/recaptchaConfig",Vv(e,B))}function rm(e){return e!==void 0&&e.enterprise!==void 0}class ny{constructor(B){if(this.siteKey="",this.emailPasswordEnabled=!1,B.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=B.recaptchaKey.split("/")[3],this.emailPasswordEnabled=B.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
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
*/function T6(){var e,B;return(B=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&B!==void 0?B:document}function ry(e){return new Promise((B,t)=>{const C=document.createElement("script");C.setAttribute("src",e),C.onload=B,C.onerror=n=>{const r=ht("internal-error");r.customData=n,t(r)},C.type="text/javascript",C.charset="UTF-8",T6().appendChild(C)})}function G6(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const x6="https://www.google.com/recaptcha/enterprise.js?render=",K6="recaptcha-enterprise",Q6="NO_RECAPTCHA";class J6{constructor(B){this.type=K6,this.auth=ps(B)}async verify(B="verify",t=!1){async function C(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(i,s)=>{Cy(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)s(new Error("recaptcha Enterprise site key undefined"));else{const o=new ny(a);return r.tenantId==null?r._agentRecaptchaConfig=o:r._tenantRecaptchaConfigs[r.tenantId]=o,i(o.siteKey)}}).catch(a=>{s(a)})})}function n(r,i,s){const a=window.grecaptcha;rm(a)?a.enterprise.ready(()=>{a.enterprise.execute(r,{action:B}).then(o=>{i(o)}).catch(()=>{i(Q6)})}):s(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,i)=>{C(this.auth).then(s=>{if(!t&&rm(window.grecaptcha))n(s,r,i);else{if(typeof window>"u"){i(new Error("RecaptchaVerifier is only supported in browser"));return}ry(x6+s).then(()=>{n(s,r,i)}).catch(a=>{i(a)})}}).catch(s=>{i(s)})})}}/**
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
*/class U6{constructor(B){this.auth=B,this.queue=[]}pushCallback(B,t){const C=r=>new Promise((i,s)=>{try{const a=B(r);i(a)}catch(a){s(a)}});C.onAbort=t,this.queue.push(C);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(B){if(this.auth.currentUser===B)return;const t=[];try{for(const C of this.queue)await C(B),C.onAbort&&t.push(C.onAbort)}catch(C){t.reverse();for(const n of t)try{n()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:C==null?void 0:C.message})}}}/**
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
*/class V6{constructor(B,t,C,n){this.app=B,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=C,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new im(this),this.idTokenSubscription=new im(this),this.beforeStateQueue=new U6(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=B.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(B,t){return t&&(this._popupRedirectResolver=Pt(t)),this._initializationPromise=this.queue(async()=>{var C,n;if(!this._deleted&&(this.persistenceManager=await _n.create(this,B),!this._deleted)){if(!((C=this._popupRedirectResolver)===null||C===void 0)&&C._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((n=this.currentUser)===null||n===void 0?void 0:n.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const B=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!B)){if(this.currentUser&&B&&this.currentUser.uid===B.uid){this._currentUser._assign(B),await this.currentUser.getIdToken();return}await this._updateCurrentUser(B,!0)}}async initializeCurrentUser(B){var t;const C=await this.assertedPersistence.getCurrentUser();let n=C,r=!1;if(B&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,s=n==null?void 0:n._redirectEventId,a=await this.tryRedirectSignIn(B);(!i||i===s)&&a!=null&&a.user&&(n=a.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(i){n=C,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(B){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,B,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(B){try{await To(B)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(B)}useDeviceLanguage(){this.languageCode=b6()}async _delete(){this._deleted=!0}async updateCurrentUser(B){const t=B?ge(B):null;return t&&U(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(B,t=!1){if(!this._deleted)return B&&U(this.tenantId===B.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(B),this.queue(async()=>{await this.directlySetCurrentUser(B),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(B){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Pt(B))})}async initializeRecaptchaConfig(){const B=await Cy(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new ny(B);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new J6(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(B){this._errorFactory=new bn("auth","Firebase",B())}onAuthStateChanged(B,t,C){return this.registerStateListener(this.authStateSubscription,B,t,C)}beforeAuthStateChanged(B,t){return this.beforeStateQueue.pushCallback(B,t)}onIdTokenChanged(B,t,C){return this.registerStateListener(this.idTokenSubscription,B,t,C)}toJSON(){var B;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(B=this._currentUser)===null||B===void 0?void 0:B.toJSON()}}async _setRedirectUser(B,t){const C=await this.getOrInitRedirectPersistenceManager(t);return B===null?C.removeCurrentUser():C.setCurrentUser(B)}async getOrInitRedirectPersistenceManager(B){if(!this.redirectPersistenceManager){const t=B&&Pt(B)||this._popupRedirectResolver;U(t,this,"argument-error"),this.redirectPersistenceManager=await _n.create(this,[Pt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(B){var t,C;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===B?this._currentUser:((C=this.redirectUser)===null||C===void 0?void 0:C._redirectEventId)===B?this.redirectUser:null}async _persistUserIfCurrent(B){if(B===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(B))}_notifyListenersIfCurrent(B){B===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var B,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const C=(t=(B=this.currentUser)===null||B===void 0?void 0:B.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==C&&(this.lastNotifiedUid=C,this.authStateSubscription.next(this.currentUser))}registerStateListener(B,t,C,n){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return U(i,this,"internal-error"),i.then(()=>r(this.currentUser)),typeof t=="function"?B.addObserver(t,C,n):B.addObserver(t)}async directlySetCurrentUser(B){this.currentUser&&this.currentUser!==B&&this._currentUser._stopProactiveRefresh(),B&&this.isProactiveRefreshEnabled&&B._startProactiveRefresh(),this.currentUser=B,B?await this.assertedPersistence.setCurrentUser(B):await this.assertedPersistence.removeCurrentUser()}queue(B){return this.operations=this.operations.then(B,B),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(B){!B||this.frameworks.includes(B)||(this.frameworks.push(B),this.frameworks.sort(),this.clientVersion=ty(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var B;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const C=await((B=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||B===void 0?void 0:B.getHeartbeatsHeader());C&&(t["X-Firebase-Client"]=C);const n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"]=n),t}async _getAppCheckToken(){var B;const t=await((B=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||B===void 0?void 0:B.getToken());return t!=null&&t.error&&f6(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ps(e){return ge(e)}class im{constructor(B){this.auth=B,this.observer=null,this.addObserver=IN(t=>this.observer=t)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
*/function W6(e,B){const t=An(e,"auth");if(t.isInitialized()){const C=t.getImmediate(),n=t.getOptions();if(xi(n,B??{}))return C;mt(C,"already-initialized")}return t.initialize({options:B})}function j6(e,B){const t=(B==null?void 0:B.persistence)||[],C=(Array.isArray(t)?t:[t]).map(Pt);B!=null&&B.errorMap&&e._updateErrorMap(B.errorMap),e._initializeWithPersistence(C,B==null?void 0:B.popupRedirectResolver)}function Y6(e,B,t){const C=ps(e);U(C._canInitEmulator,C,"emulator-config-failed"),U(/^https?:\/\//.test(B),C,"invalid-emulator-scheme");const n=!!(t!=null&&t.disableWarnings),r=iy(B),{host:i,port:s}=X6(B),a=s===null?"":`:${s}`;C.config.emulator={url:`${r}//${i}${a}/`},C.settings.appVerificationDisabledForTesting=!0,C.emulatorConfig=Object.freeze({host:i,port:s,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:n})}),n||Z6()}function iy(e){const B=e.indexOf(":");return B<0?"":e.substr(0,B+1)}function X6(e){const B=iy(e),t=/(\/\/)?([^?#/]+)/.exec(e.substr(B.length));if(!t)return{host:"",port:null};const C=t[2].split("@").pop()||"",n=/^(\[[^\]]+\])(:|$)/.exec(C);if(n){const r=n[1];return{host:r,port:sm(C.substr(r.length+1))}}else{const[r,i]=C.split(":");return{host:r,port:sm(i)}}}function sm(e){if(!e)return null;const B=Number(e);return isNaN(B)?null:B}function Z6(){function e(){const B=document.createElement("p"),t=B.style;B.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",B.classList.add("firebase-emulator-warning"),document.body.appendChild(B)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
*/class sy{constructor(B,t){this.providerId=B,this.signInMethod=t}toJSON(){return kt("not implemented")}_getIdTokenResponse(B){return kt("not implemented")}_linkToIdToken(B,t){return kt("not implemented")}_getReauthenticationResolver(B){return kt("not implemented")}}/**
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
*/async function $n(e,B){return y6(e,"POST","/v1/accounts:signInWithIdp",Vv(e,B))}/**
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
*/const q6="http://localhost";class ln extends sy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(B){const t=new ln(B.providerId,B.signInMethod);return B.idToken||B.accessToken?(B.idToken&&(t.idToken=B.idToken),B.accessToken&&(t.accessToken=B.accessToken),B.nonce&&!B.pendingToken&&(t.nonce=B.nonce),B.pendingToken&&(t.pendingToken=B.pendingToken)):B.oauthToken&&B.oauthTokenSecret?(t.accessToken=B.oauthToken,t.secret=B.oauthTokenSecret):mt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(B){const t=typeof B=="string"?JSON.parse(B):B,{providerId:C,signInMethod:n}=t,r=Xh(t,["providerId","signInMethod"]);if(!C||!n)return null;const i=new ln(C,n);return i.idToken=r.idToken||void 0,i.accessToken=r.accessToken||void 0,i.secret=r.secret,i.nonce=r.nonce,i.pendingToken=r.pendingToken||null,i}_getIdTokenResponse(B){const t=this.buildRequest();return $n(B,t)}_linkToIdToken(B,t){const C=this.buildRequest();return C.idToken=t,$n(B,C)}_getReauthenticationResolver(B){const t=this.buildRequest();return t.autoCreate=!1,$n(B,t)}buildRequest(){const B={requestUri:q6,returnSecureToken:!0};if(this.pendingToken)B.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),B.postBody=Sr(t)}return B}}/**
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
*/class $h{constructor(B){this.providerId=B,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(B){this.defaultLanguageCode=B}setCustomParameters(B){return this.customParameters=B,this}getCustomParameters(){return this.customParameters}}/**
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
*/class ms extends $h{constructor(){super(...arguments),this.scopes=[]}addScope(B){return this.scopes.includes(B)||this.scopes.push(B),this}getScopes(){return[...this.scopes]}}/**
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
*/class tC extends ms{constructor(){super("facebook.com")}static credential(B){return ln._fromParams({providerId:tC.PROVIDER_ID,signInMethod:tC.FACEBOOK_SIGN_IN_METHOD,accessToken:B})}static credentialFromResult(B){return tC.credentialFromTaggedObject(B)}static credentialFromError(B){return tC.credentialFromTaggedObject(B.customData||{})}static credentialFromTaggedObject({_tokenResponse:B}){if(!B||!("oauthAccessToken"in B)||!B.oauthAccessToken)return null;try{return tC.credential(B.oauthAccessToken)}catch{return null}}}tC.FACEBOOK_SIGN_IN_METHOD="facebook.com";tC.PROVIDER_ID="facebook.com";/**
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
*/class Le extends ms{constructor(){super("google.com"),this.addScope("profile")}static credential(B,t){return ln._fromParams({providerId:Le.PROVIDER_ID,signInMethod:Le.GOOGLE_SIGN_IN_METHOD,idToken:B,accessToken:t})}static credentialFromResult(B){return Le.credentialFromTaggedObject(B)}static credentialFromError(B){return Le.credentialFromTaggedObject(B.customData||{})}static credentialFromTaggedObject({_tokenResponse:B}){if(!B)return null;const{oauthIdToken:t,oauthAccessToken:C}=B;if(!t&&!C)return null;try{return Le.credential(t,C)}catch{return null}}}Le.GOOGLE_SIGN_IN_METHOD="google.com";Le.PROVIDER_ID="google.com";/**
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
*/class CC extends ms{constructor(){super("github.com")}static credential(B){return ln._fromParams({providerId:CC.PROVIDER_ID,signInMethod:CC.GITHUB_SIGN_IN_METHOD,accessToken:B})}static credentialFromResult(B){return CC.credentialFromTaggedObject(B)}static credentialFromError(B){return CC.credentialFromTaggedObject(B.customData||{})}static credentialFromTaggedObject({_tokenResponse:B}){if(!B||!("oauthAccessToken"in B)||!B.oauthAccessToken)return null;try{return CC.credential(B.oauthAccessToken)}catch{return null}}}CC.GITHUB_SIGN_IN_METHOD="github.com";CC.PROVIDER_ID="github.com";/**
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
*/class nC extends ms{constructor(){super("twitter.com")}static credential(B,t){return ln._fromParams({providerId:nC.PROVIDER_ID,signInMethod:nC.TWITTER_SIGN_IN_METHOD,oauthToken:B,oauthTokenSecret:t})}static credentialFromResult(B){return nC.credentialFromTaggedObject(B)}static credentialFromError(B){return nC.credentialFromTaggedObject(B.customData||{})}static credentialFromTaggedObject({_tokenResponse:B}){if(!B)return null;const{oauthAccessToken:t,oauthTokenSecret:C}=B;if(!t||!C)return null;try{return nC.credential(t,C)}catch{return null}}}nC.TWITTER_SIGN_IN_METHOD="twitter.com";nC.PROVIDER_ID="twitter.com";/**
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
*/class dr{constructor(B){this.user=B.user,this.providerId=B.providerId,this._tokenResponse=B._tokenResponse,this.operationType=B.operationType}static async _fromIdTokenResponse(B,t,C,n=!1){const r=await $C._fromIdTokenResponse(B,C,n),i=am(C);return new dr({user:r,providerId:i,_tokenResponse:C,operationType:t})}static async _forOperation(B,t,C){await B._updateTokensIfNecessary(C,!0);const n=am(C);return new dr({user:B,providerId:n,_tokenResponse:C,operationType:t})}}function am(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
*/class Go extends vt{constructor(B,t,C,n){var r;super(t.code,t.message),this.operationType=C,this.user=n,Object.setPrototypeOf(this,Go.prototype),this.customData={appName:B.name,tenantId:(r=B.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:C}}static _fromErrorAndOperation(B,t,C,n){return new Go(B,t,C,n)}}function ay(e,B,t,C){return(B==="reauthenticate"?t._getReauthenticationResolver(e):t._getIdTokenResponse(e)).catch(n=>{throw n.code==="auth/multi-factor-auth-required"?Go._fromErrorAndOperation(e,n,B,C):n})}async function z6(e,B,t=!1){const C=await Qi(e,B._linkToIdToken(e.auth,await e.getIdToken()),t);return dr._forOperation(e,"link",C)}/**
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
*/async function _6(e,B,t=!1){const{auth:C}=e,n="reauthenticate";try{const r=await Qi(e,ay(C,n,B,e),t);U(r.idToken,C,"internal-error");const i=zh(r.idToken);U(i,C,"internal-error");const{sub:s}=i;return U(e.uid===s,C,"user-mismatch"),dr._forOperation(e,n,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&mt(C,"user-mismatch"),r}}/**
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
*/async function $6(e,B,t=!1){const C="signIn",n=await ay(e,C,B),r=await dr._fromIdTokenResponse(e,C,n);return t||await e._updateCurrentUser(r.user),r}function BR(e,B,t,C){return ge(e).onIdTokenChanged(B,t,C)}function eR(e,B,t){return ge(e).beforeAuthStateChanged(B,t)}const xo="__sak";/**
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
*/class oy{constructor(B,t){this.storageRetriever=B,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(xo,"1"),this.storage.removeItem(xo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(B,t){return this.storage.setItem(B,JSON.stringify(t)),Promise.resolve()}_get(B){const t=this.storage.getItem(B);return Promise.resolve(t?JSON.parse(t):null)}_remove(B){return this.storage.removeItem(B),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
*/function tR(){const e=qB();return _h(e)||Gl(e)}const CR=1e3,nR=10;class ly extends oy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(B,t)=>this.onStorageEvent(B,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=tR()&&L6(),this.fallbackToPolling=ey(),this._shouldAllowMigration=!0}forAllChangedKeys(B){for(const t of Object.keys(this.listeners)){const C=this.storage.getItem(t),n=this.localCache[t];C!==n&&B(t,n,C)}}onStorageEvent(B,t=!1){if(!B.key){this.forAllChangedKeys((i,s,a)=>{this.notifyListeners(i,a)});return}const C=B.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(C);if(B.newValue!==i)B.newValue!==null?this.storage.setItem(C,B.newValue):this.storage.removeItem(C);else if(this.localCache[C]===B.newValue&&!t)return}const n=()=>{const i=this.storage.getItem(C);!t&&this.localCache[C]===i||this.notifyListeners(C,i)},r=this.storage.getItem(C);M6()&&r!==B.newValue&&B.newValue!==B.oldValue?setTimeout(n,nR):n()}notifyListeners(B,t){this.localCache[B]=t;const C=this.listeners[B];if(C)for(const n of Array.from(C))n(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((B,t,C)=>{this.onStorageEvent(new StorageEvent("storage",{key:B,oldValue:t,newValue:C}),!0)})},CR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(B,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[B]||(this.listeners[B]=new Set,this.localCache[B]=this.storage.getItem(B)),this.listeners[B].add(t)}_removeListener(B,t){this.listeners[B]&&(this.listeners[B].delete(t),this.listeners[B].size===0&&delete this.listeners[B]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(B,t){await super._set(B,t),this.localCache[B]=JSON.stringify(t)}async _get(B){const t=await super._get(B);return this.localCache[B]=JSON.stringify(t),t}async _remove(B){await super._remove(B),delete this.localCache[B]}}ly.type="LOCAL";const rR=ly;/**
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
*/class cy extends oy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(B,t){}_removeListener(B,t){}}cy.type="SESSION";const uy=cy;/**
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
*/function iR(e){return Promise.all(e.map(async B=>{try{return{fulfilled:!0,value:await B}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
*/class xl{constructor(B){this.eventTarget=B,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(B){const t=this.receivers.find(n=>n.isListeningto(B));if(t)return t;const C=new xl(B);return this.receivers.push(C),C}isListeningto(B){return this.eventTarget===B}async handleEvent(B){const t=B,{eventId:C,eventType:n,data:r}=t.data,i=this.handlersMap[n];if(!(i!=null&&i.size))return;t.ports[0].postMessage({status:"ack",eventId:C,eventType:n});const s=Array.from(i).map(async o=>o(t.origin,r)),a=await iR(s);t.ports[0].postMessage({status:"done",eventId:C,eventType:n,response:a})}_subscribe(B,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[B]||(this.handlersMap[B]=new Set),this.handlersMap[B].add(t)}_unsubscribe(B,t){this.handlersMap[B]&&t&&this.handlersMap[B].delete(t),(!t||this.handlersMap[B].size===0)&&delete this.handlersMap[B],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xl.receivers=[];/**
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
*/function Bf(e="",B=10){let t="";for(let C=0;C<B;C++)t+=Math.floor(Math.random()*10);return e+t}/**
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
*/class sR{constructor(B){this.target=B,this.handlers=new Set}removeMessageHandler(B){B.messageChannel&&(B.messageChannel.port1.removeEventListener("message",B.onMessage),B.messageChannel.port1.close()),this.handlers.delete(B)}async _send(B,t,C=50){const n=typeof MessageChannel<"u"?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let r,i;return new Promise((s,a)=>{const o=Bf("",20);n.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},C);i={messageChannel:n,onMessage(l){const u=l;if(u.data.eventId===o)switch(u.data.status){case"ack":clearTimeout(c),r=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),s(u.data.response);break;default:clearTimeout(c),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(i),n.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:B,eventId:o,data:t},[n.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
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
*/function ft(){return window}function aR(e){ft().location.href=e}/**
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
*/function dy(){return typeof ft().WorkerGlobalScope<"u"&&typeof ft().importScripts=="function"}async function oR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lR(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function cR(){return dy()?self:null}/**
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
*/const hy="firebaseLocalStorageDb",uR=1,Ko="firebaseLocalStorage",fy="fbase_key";class gs{constructor(B){this.request=B}toPromise(){return new Promise((B,t)=>{this.request.addEventListener("success",()=>{B(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Kl(e,B){return e.transaction([Ko],B?"readwrite":"readonly").objectStore(Ko)}function dR(){const e=indexedDB.deleteDatabase(hy);return new gs(e).toPromise()}function U1(){const e=indexedDB.open(hy,uR);return new Promise((B,t)=>{e.addEventListener("error",()=>{t(e.error)}),e.addEventListener("upgradeneeded",()=>{const C=e.result;try{C.createObjectStore(Ko,{keyPath:fy})}catch(n){t(n)}}),e.addEventListener("success",async()=>{const C=e.result;C.objectStoreNames.contains(Ko)?B(C):(C.close(),await dR(),B(await U1()))})})}async function om(e,B,t){const C=Kl(e,!0).put({[fy]:B,value:t});return new gs(C).toPromise()}async function hR(e,B){const t=Kl(e,!1).get(B),C=await new gs(t).toPromise();return C===void 0?null:C.value}function lm(e,B){const t=Kl(e,!0).delete(B);return new gs(t).toPromise()}const fR=800,pR=3;class py{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await U1(),this.db)}async _withRetries(B){let t=0;for(;;)try{const C=await this._openDb();return await B(C)}catch(C){if(t++>pR)throw C;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xl._getInstance(cR()),this.receiver._subscribe("keyChanged",async(B,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(B,t)=>["keyChanged"])}async initializeSender(){var B,t;if(this.activeServiceWorker=await oR(),!this.activeServiceWorker)return;this.sender=new sR(this.activeServiceWorker);const C=await this.sender._send("ping",{},800);C&&!((B=C[0])===null||B===void 0)&&B.fulfilled&&!((t=C[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(B){if(!(!this.sender||!this.activeServiceWorker||lR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:B},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const B=await U1();return await om(B,xo,"1"),await lm(B,xo),!0}catch{}return!1}async _withPendingWrite(B){this.pendingWrites++;try{await B()}finally{this.pendingWrites--}}async _set(B,t){return this._withPendingWrite(async()=>(await this._withRetries(C=>om(C,B,t)),this.localCache[B]=t,this.notifyServiceWorker(B)))}async _get(B){const t=await this._withRetries(C=>hR(C,B));return this.localCache[B]=t,t}async _remove(B){return this._withPendingWrite(async()=>(await this._withRetries(t=>lm(t,B)),delete this.localCache[B],this.notifyServiceWorker(B)))}async _poll(){const B=await this._withRetries(n=>{const r=Kl(n,!1).getAll();return new gs(r).toPromise()});if(!B)return[];if(this.pendingWrites!==0)return[];const t=[],C=new Set;for(const{fbase_key:n,value:r}of B)C.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(r)&&(this.notifyListeners(n,r),t.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!C.has(n)&&(this.notifyListeners(n,null),t.push(n));return t}notifyListeners(B,t){this.localCache[B]=t;const C=this.listeners[B];if(C)for(const n of Array.from(C))n(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(B,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[B]||(this.listeners[B]=new Set,this._get(B)),this.listeners[B].add(t)}_removeListener(B,t){this.listeners[B]&&(this.listeners[B].delete(t),this.listeners[B].size===0&&delete this.listeners[B]),Object.keys(this.listeners).length===0&&this.stopPolling()}}py.type="LOCAL";const mR=py;new hs(3e4,6e4);/**
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
*/function my(e,B){return B?Pt(B):(U(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
*/class ef extends sy{constructor(B){super("custom","custom"),this.params=B}_getIdTokenResponse(B){return $n(B,this._buildIdpRequest())}_linkToIdToken(B,t){return $n(B,this._buildIdpRequest(t))}_getReauthenticationResolver(B){return $n(B,this._buildIdpRequest())}_buildIdpRequest(B){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return B&&(t.idToken=B),t}}function gR(e){return $6(e.auth,new ef(e),e.bypassAuthState)}function bR(e){const{auth:B,user:t}=e;return U(t,B,"internal-error"),_6(t,new ef(e),e.bypassAuthState)}async function AR(e){const{auth:B,user:t}=e;return U(t,B,"internal-error"),z6(t,new ef(e),e.bypassAuthState)}/**
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
*/class gy{constructor(B,t,C,n,r=!1){this.auth=B,this.resolver=C,this.user=n,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(B,t)=>{this.pendingPromise={resolve:B,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(C){this.reject(C)}})}async onAuthEvent(B){const{urlResponse:t,sessionId:C,postBody:n,tenantId:r,error:i,type:s}=B;if(i){this.reject(i);return}const a={auth:this.auth,requestUri:t,sessionId:C,tenantId:r||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(o){this.reject(o)}}onError(B){this.reject(B)}getIdpTask(B){switch(B){case"signInViaPopup":case"signInViaRedirect":return gR;case"linkViaPopup":case"linkViaRedirect":return AR;case"reauthViaPopup":case"reauthViaRedirect":return bR;default:mt(this.auth,"internal-error")}}resolve(B){Gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(B),this.unregisterAndCleanUp()}reject(B){Gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(B),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
*/const vR=new hs(2e3,1e4);async function yR(e,B,t){const C=ps(e);p6(e,B,$h);const n=my(C,t);return new WC(C,"signInViaPopup",B,n).executeNotNull()}class WC extends gy{constructor(B,t,C,n,r){super(B,t,n,r),this.provider=C,this.authWindow=null,this.pollId=null,WC.currentPopupAction&&WC.currentPopupAction.cancel(),WC.currentPopupAction=this}async executeNotNull(){const B=await this.execute();return U(B,this.auth,"internal-error"),B}async onExecution(){Gt(this.filter.length===1,"Popup operations only handle one event");const B=Bf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],B),this.authWindow.associatedEvent=B,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var B;return((B=this.authWindow)===null||B===void 0?void 0:B.associatedEvent)||null}cancel(){this.reject(ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,WC.currentPopupAction=null}pollUserCancellation(){const B=()=>{var t,C;if(!((C=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||C===void 0)&&C.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(B,vR.get())};B()}}WC.currentPopupAction=null;/**
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
*/const ER="pendingRedirect",Za=new Map;class IR extends gy{constructor(B,t,C=!1){super(B,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,C),this.eventId=null}async execute(){let B=Za.get(this.auth._key());if(!B){try{const t=await SR(this.resolver,this.auth)?await super.execute():null;B=()=>Promise.resolve(t)}catch(t){B=()=>Promise.reject(t)}Za.set(this.auth._key(),B)}return this.bypassAuthState||Za.set(this.auth._key(),()=>Promise.resolve(null)),B()}async onAuthEvent(B){if(B.type==="signInViaRedirect")return super.onAuthEvent(B);if(B.type==="unknown"){this.resolve(null);return}if(B.eventId){const t=await this.auth._redirectUserForId(B.eventId);if(t)return this.user=t,super.onAuthEvent(B);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function SR(e,B){const t=kR(B),C=DR(e);if(!await C._isAvailable())return!1;const n=await C._get(t)==="true";return await C._remove(t),n}function wR(e,B){Za.set(e._key(),B)}function DR(e){return Pt(e._redirectPersistence)}function kR(e){return Xa(ER,e.config.apiKey,e.name)}async function PR(e,B,t=!1){const C=ps(e),n=my(C,B),r=await new IR(C,n,t).execute();return r&&!t&&(delete r.user._redirectEventId,await C._persistUserIfCurrent(r.user),await C._setRedirectUser(null,B)),r}/**
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
*/const NR=10*60*1e3;class FR{constructor(B){this.auth=B,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(B){this.consumers.add(B),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,B)&&(this.sendToConsumer(this.queuedRedirectEvent,B),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(B){this.consumers.delete(B)}onEvent(B){if(this.hasEventBeenHandled(B))return!1;let t=!1;return this.consumers.forEach(C=>{this.isEventForConsumer(B,C)&&(t=!0,this.sendToConsumer(B,C),this.saveEventToCache(B))}),this.hasHandledPotentialRedirect||!OR(B)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=B,t=!0)),t}sendToConsumer(B,t){var C;if(B.error&&!by(B)){const n=((C=B.error.code)===null||C===void 0?void 0:C.split("auth/")[1])||"internal-error";t.onError(ht(this.auth,n))}else t.onAuthEvent(B)}isEventForConsumer(B,t){const C=t.eventId===null||!!B.eventId&&B.eventId===t.eventId;return t.filter.includes(B.type)&&C}hasEventBeenHandled(B){return Date.now()-this.lastProcessedEventTime>=NR&&this.cachedEventUids.clear(),this.cachedEventUids.has(cm(B))}saveEventToCache(B){this.cachedEventUids.add(cm(B)),this.lastProcessedEventTime=Date.now()}}function cm(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(B=>B).join("-")}function by({type:e,error:B}){return e==="unknown"&&(B==null?void 0:B.code)==="auth/no-auth-event"}function OR(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return by(e);default:return!1}}/**
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
*/async function RR(e,B={}){return fs(e,"GET","/v1/projects",B)}/**
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
*/const HR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,MR=/^https?/;async function LR(e){if(e.config.emulator)return;const{authorizedDomains:B}=await RR(e);for(const t of B)try{if(TR(t))return}catch{}mt(e,"unauthorized-domain")}function TR(e){const B=J1(),{protocol:t,hostname:C}=new URL(B);if(e.startsWith("chrome-extension://")){const r=new URL(e);return r.hostname===""&&C===""?t==="chrome-extension:"&&e.replace("chrome-extension://","")===B.replace("chrome-extension://",""):t==="chrome-extension:"&&r.hostname===C}if(!MR.test(t))return!1;if(HR.test(e))return C===e;const n=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+n+"|"+n+")$","i").test(C)}/**
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
*/const GR=new hs(3e4,6e4);function um(){const e=ft().___jsl;if(e!=null&&e.H){for(const B of Object.keys(e.H))if(e.H[B].r=e.H[B].r||[],e.H[B].L=e.H[B].L||[],e.H[B].r=[...e.H[B].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}function xR(e){return new Promise((B,t)=>{var C,n,r;function i(){um(),gapi.load("gapi.iframes",{callback:()=>{B(gapi.iframes.getContext())},ontimeout:()=>{um(),t(ht(e,"network-request-failed"))},timeout:GR.get()})}if(!((n=(C=ft().gapi)===null||C===void 0?void 0:C.iframes)===null||n===void 0)&&n.Iframe)B(gapi.iframes.getContext());else if(!((r=ft().gapi)===null||r===void 0)&&r.load)i();else{const s=G6("iframefcb");return ft()[s]=()=>{gapi.load?i():t(ht(e,"network-request-failed"))},ry(`https://apis.google.com/js/api.js?onload=${s}`).catch(a=>t(a))}}).catch(B=>{throw qa=null,B})}let qa=null;function KR(e){return qa=qa||xR(e),qa}/**
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
*/const QR=new hs(5e3,15e3),JR="__/auth/iframe",UR="emulator/auth/iframe",VR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jR(e){const B=e.config;U(B.authDomain,e,"auth-domain-config-required");const t=B.emulator?qh(B,UR):`https://${e.config.authDomain}/${JR}`,C={apiKey:B.apiKey,appName:e.name,v:wr},n=WR.get(e.config.apiHost);n&&(C.eid=n);const r=e._getFrameworks();return r.length&&(C.fw=r.join(",")),`${t}?${Sr(C).slice(1)}`}async function YR(e){const B=await KR(e),t=ft().gapi;return U(t,e,"internal-error"),B.open({where:document.body,url:jR(e),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:VR,dontclear:!0},C=>new Promise(async(n,r)=>{await C.restyle({setHideOnLeave:!1});const i=ht(e,"network-request-failed"),s=ft().setTimeout(()=>{r(i)},QR.get());function a(){ft().clearTimeout(s),n(C)}C.ping(a).then(a,()=>{r(i)})}))}/**
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
*/const XR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZR=500,qR=600,zR="_blank",_R="http://localhost";class dm{constructor(B){this.window=B,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $R(e,B,t,C=ZR,n=qR){const r=Math.max((window.screen.availHeight-n)/2,0).toString(),i=Math.max((window.screen.availWidth-C)/2,0).toString();let s="";const a=Object.assign(Object.assign({},XR),{width:C.toString(),height:n.toString(),top:r,left:i}),o=qB().toLowerCase();t&&(s=qv(o)?zR:t),Zv(o)&&(B=B||_R,a.scrollbars="yes");const c=Object.entries(a).reduce((u,[m,d])=>`${u}${m}=${d},`,"");if(H6(o)&&s!=="_self")return B4(B||"",s),new dm(null);const l=window.open(B||"",s,c);U(l,e,"popup-blocked");try{l.focus()}catch{}return new dm(l)}function B4(e,B){const t=document.createElement("a");t.href=e,t.target=B;const C=document.createEvent("MouseEvent");C.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(C)}/**
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
*/const e4="__/auth/handler",t4="emulator/auth/handler",C4=encodeURIComponent("fac");async function hm(e,B,t,C,n,r){U(e.config.authDomain,e,"auth-domain-config-required"),U(e.config.apiKey,e,"invalid-api-key");const i={apiKey:e.config.apiKey,appName:e.name,authType:t,redirectUrl:C,v:wr,eventId:n};if(B instanceof $h){B.setDefaultLanguage(e.languageCode),i.providerId=B.providerId||"",R1(B.getCustomParameters())||(i.customParameters=JSON.stringify(B.getCustomParameters()));for(const[c,l]of Object.entries(r||{}))i[c]=l}if(B instanceof ms){const c=B.getScopes().filter(l=>l!=="");c.length>0&&(i.scopes=c.join(","))}e.tenantId&&(i.tid=e.tenantId);const s=i;for(const c of Object.keys(s))s[c]===void 0&&delete s[c];const a=await e._getAppCheckToken(),o=a?`#${C4}=${encodeURIComponent(a)}`:"";return`${n4(e)}?${Sr(s).slice(1)}${o}`}function n4({config:e}){return e.emulator?qh(e,t4):`https://${e.authDomain}/${e4}`}/**
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
*/const eu="webStorageSupport";class r4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=uy,this._completeRedirectFn=PR,this._overrideRedirectResult=wR}async _openPopup(B,t,C,n){var r;Gt((r=this.eventManagers[B._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const i=await hm(B,t,C,J1(),n);return $R(B,i,Bf())}async _openRedirect(B,t,C,n){await this._originValidation(B);const r=await hm(B,t,C,J1(),n);return aR(r),new Promise(()=>{})}_initialize(B){const t=B._key();if(this.eventManagers[t]){const{manager:n,promise:r}=this.eventManagers[t];return n?Promise.resolve(n):(Gt(r,"If manager is not set, promise should be"),r)}const C=this.initAndGetManager(B);return this.eventManagers[t]={promise:C},C.catch(()=>{delete this.eventManagers[t]}),C}async initAndGetManager(B){const t=await YR(B),C=new FR(B);return t.register("authEvent",n=>(U(n==null?void 0:n.authEvent,B,"invalid-auth-event"),{status:C.onEvent(n.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[B._key()]={manager:C},this.iframes[B._key()]=t,C}_isIframeWebStorageSupported(B,t){this.iframes[B._key()].send(eu,{type:eu},C=>{var n;const r=(n=C==null?void 0:C[0])===null||n===void 0?void 0:n[eu];r!==void 0&&t(!!r),mt(B,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(B){const t=B._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=LR(B)),this.originValidationPromises[t]}get _shouldInitProactively(){return ey()||_h()||Gl()}}const i4=r4;var fm="@firebase/auth",pm="0.23.2";/**
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
*/class s4{constructor(B){this.auth=B,this.internalListeners=new Map}getUid(){var B;return this.assertAuthConfigured(),((B=this.auth.currentUser)===null||B===void 0?void 0:B.uid)||null}async getToken(B){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(B)}:null}addAuthTokenListener(B){if(this.assertAuthConfigured(),this.internalListeners.has(B))return;const t=this.auth.onIdTokenChanged(C=>{B((C==null?void 0:C.stsTokenManager.accessToken)||null)});this.internalListeners.set(B,t),this.updateProactiveRefresh()}removeAuthTokenListener(B){this.assertAuthConfigured();const t=this.internalListeners.get(B);t&&(this.internalListeners.delete(B),t(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
*/function a4(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function o4(e){pt(new rt("auth",(B,{options:t})=>{const C=B.getProvider("app").getImmediate(),n=B.getProvider("heartbeat"),r=B.getProvider("app-check-internal"),{apiKey:i,authDomain:s}=C.options;U(i&&!i.includes(":"),"invalid-api-key",{appName:C.name});const a={apiKey:i,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ty(e)},o=new V6(C,n,r,a);return j6(o,t),o},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((B,t,C)=>{B.getProvider("auth-internal").initialize()})),pt(new rt("auth-internal",B=>{const t=ps(B.getProvider("auth").getImmediate());return(C=>new s4(C))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),xe(fm,pm,a4(e)),xe(fm,pm,"esm2017")}/**
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
*/const l4=5*60,c4=rv("authIdTokenMaxAge")||l4;let mm=null;const u4=e=>async B=>{const t=B&&await B.getIdTokenResult(),C=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(C&&C>c4)return;const n=t==null?void 0:t.token;mm!==n&&(mm=n,await fetch(e,{method:n?"POST":"DELETE",headers:n?{Authorization:`Bearer ${n}`}:{}}))};function Ay(e=Kh()){const B=An(e,"auth");if(B.isInitialized())return B.getImmediate();const t=W6(e,{popupRedirectResolver:i4,persistence:[mR,rR,uy]}),C=rv("authTokenSyncURL");if(C){const r=u4(C);eR(t,r,()=>r(t.currentUser)),BR(t,i=>r(i))}const n=Cv("auth");return n&&Y6(t,`http://${n}`),t}o4("Browser");const gm="@firebase/database",bm="0.14.4";/**
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
*/let vy="";function d4(e){vy=e}/**
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
*/class h4{constructor(B){this.domStorage_=B,this.prefix_="firebase:"}set(B,t){t==null?this.domStorage_.removeItem(this.prefixedName_(B)):this.domStorage_.setItem(this.prefixedName_(B),FB(t))}get(B){const t=this.domStorage_.getItem(this.prefixedName_(B));return t==null?null:Gi(t)}remove(B){this.domStorage_.removeItem(this.prefixedName_(B))}prefixedName_(B){return this.prefix_+B}toString(){return this.domStorage_.toString()}}/**
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
*/class f4{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(B,t){t==null?delete this.cache_[B]:this.cache_[B]=t}get(B){return Vt(this.cache_,B)?this.cache_[B]:null}remove(B){delete this.cache_[B]}}/**
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
*/const yy=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const B=window[e];return B.setItem("firebase:sentinel","cache"),B.removeItem("firebase:sentinel"),new h4(B)}}catch{}return new f4},jC=yy("localStorage"),V1=yy("sessionStorage");/**
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
*/const Br=new Hl("@firebase/database"),p4=function(){let e=1;return function(){return e++}}(),Ey=function(e){const B=DN(e),t=new EN;t.update(B);const C=t.digest();return Mh.encodeByteArray(C)},bs=function(...e){let B="";for(let t=0;t<e.length;t++){const C=e[t];Array.isArray(C)||C&&typeof C=="object"&&typeof C.length=="number"?B+=bs.apply(null,C):typeof C=="object"?B+=FB(C):B+=C,B+=" "}return B};let Bn=null,Am=!0;const m4=function(e,B){k(!B||e===!0||e===!1,"Can't turn on custom loggers persistently."),e===!0?(Br.logLevel=rB.VERBOSE,Bn=Br.log.bind(Br),B&&V1.set("logging_enabled",!0)):typeof e=="function"?Bn=e:(Bn=null,V1.remove("logging_enabled"))},XB=function(...e){if(Am===!0&&(Am=!1,Bn===null&&V1.get("logging_enabled")===!0&&m4(!0)),Bn){const B=bs.apply(null,e);Bn(B)}},As=function(e){return function(...B){XB(e,...B)}},W1=function(...e){const B="FIREBASE INTERNAL ERROR: "+bs(...e);Br.error(B)},xt=function(...e){const B=`FIREBASE FATAL ERROR: ${bs(...e)}`;throw Br.error(B),new Error(B)},pe=function(...e){const B="FIREBASE WARNING: "+bs(...e);Br.warn(B)},g4=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&pe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Iy=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},b4=function(e){if(document.readyState==="complete")e();else{let B=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}B||(B=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},hr="[MIN_NAME]",cn="[MAX_NAME]",Dr=function(e,B){if(e===B)return 0;if(e===hr||B===cn)return-1;if(B===hr||e===cn)return 1;{const t=vm(e),C=vm(B);return t!==null?C!==null?t-C===0?e.length-B.length:t-C:-1:C!==null?1:e<B?-1:1}},A4=function(e,B){return e===B?0:e<B?-1:1},Qr=function(e,B){if(B&&e in B)return B[e];throw new Error("Missing required key ("+e+") in object: "+FB(B))},tf=function(e){if(typeof e!="object"||e===null)return FB(e);const B=[];for(const C in e)B.push(C);B.sort();let t="{";for(let C=0;C<B.length;C++)C!==0&&(t+=","),t+=FB(B[C]),t+=":",t+=tf(e[B[C]]);return t+="}",t},Sy=function(e,B){const t=e.length;if(t<=B)return[e];const C=[];for(let n=0;n<t;n+=B)n+B>t?C.push(e.substring(n,t)):C.push(e.substring(n,n+B));return C};function me(e,B){for(const t in e)e.hasOwnProperty(t)&&B(t,e[t])}const wy=function(e){k(!Iy(e),"Invalid JSON number");const B=11,t=52,C=(1<<B-1)-1;let n,r,i,s,a;e===0?(r=0,i=0,n=1/e===-1/0?1:0):(n=e<0,e=Math.abs(e),e>=Math.pow(2,1-C)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),C),r=s+C,i=Math.round(e*Math.pow(2,t-s)-Math.pow(2,t))):(r=0,i=Math.round(e/Math.pow(2,1-C-t))));const o=[];for(a=t;a;a-=1)o.push(i%2?1:0),i=Math.floor(i/2);for(a=B;a;a-=1)o.push(r%2?1:0),r=Math.floor(r/2);o.push(n?1:0),o.reverse();const c=o.join("");let l="";for(a=0;a<64;a+=8){let u=parseInt(c.substr(a,8),2).toString(16);u.length===1&&(u="0"+u),l=l+u}return l.toLowerCase()},v4=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},y4=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function E4(e,B){let t="Unknown Error";e==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":e==="permission_denied"?t="Client doesn't have permission to access the desired data.":e==="unavailable"&&(t="The service is unavailable");const C=new Error(e+" at "+B._path.toString()+": "+t);return C.code=e.toUpperCase(),C}const I4=new RegExp("^-?(0*)\\d{1,10}$"),S4=-2147483648,w4=2147483647,vm=function(e){if(I4.test(e)){const B=Number(e);if(B>=S4&&B<=w4)return B}return null},kr=function(e){try{e()}catch(B){setTimeout(()=>{const t=B.stack||"";throw pe("Exception was thrown by user callback.",t),B},Math.floor(0))}},D4=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},di=function(e,B){const t=setTimeout(e,B);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
*/class k4{constructor(B,t){this.appName_=B,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(C=>this.appCheck=C)}getToken(B){return this.appCheck?this.appCheck.getToken(B):new Promise((t,C)=>{setTimeout(()=>{this.appCheck?this.getToken(B).then(t,C):t(null)},0)})}addTokenChangeListener(B){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(C=>C.addTokenListener(B))}notifyForInvalidToken(){pe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
*/class P4{constructor(B,t,C){this.appName_=B,this.firebaseOptions_=t,this.authProvider_=C,this.auth_=null,this.auth_=C.getImmediate({optional:!0}),this.auth_||C.onInit(n=>this.auth_=n)}getToken(B){return this.auth_?this.auth_.getToken(B).catch(t=>t&&t.code==="auth/token-not-initialized"?(XB("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,C)=>{setTimeout(()=>{this.auth_?this.getToken(B).then(t,C):t(null)},0)})}addTokenChangeListener(B){this.auth_?this.auth_.addAuthTokenListener(B):this.authProvider_.get().then(t=>t.addAuthTokenListener(B))}removeTokenChangeListener(B){this.authProvider_.get().then(t=>t.removeAuthTokenListener(B))}notifyForInvalidToken(){let B='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?B+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?B+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':B+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',pe(B)}}class er{constructor(B){this.accessToken=B}getToken(B){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(B){B(this.accessToken)}removeTokenChangeListener(B){}notifyForInvalidToken(){}}er.OWNER="owner";/**
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
*/const Cf="5",Dy="v",ky="s",Py="r",Ny="f",Fy=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Oy="ls",Ry="p",j1="ac",Hy="websocket",My="long_polling";/**
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
*/class Ly{constructor(B,t,C,n,r=!1,i="",s=!1,a=!1){this.secure=t,this.namespace=C,this.webSocketOnly=n,this.nodeAdmin=r,this.persistenceKey=i,this.includeNamespaceInQueryParams=s,this.isUsingEmulator=a,this._host=B.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=jC.get("host:"+B)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(B){B!==this.internalHost&&(this.internalHost=B,this.isCacheableHost()&&jC.set("host:"+this._host,this.internalHost))}toString(){let B=this.toURLString();return this.persistenceKey&&(B+="<"+this.persistenceKey+">"),B}toURLString(){const B=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${B}${this.host}/${t}`}}function N4(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function Ty(e,B,t){k(typeof B=="string","typeof type must == string"),k(typeof t=="object","typeof params must == object");let C;if(B===Hy)C=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(B===My)C=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+B);N4(e)&&(t.ns=e.namespace);const n=[];return me(t,(r,i)=>{n.push(r+"="+i)}),C+n.join("&")}/**
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
*/class F4{constructor(){this.counters_={}}incrementCounter(B,t=1){Vt(this.counters_,B)||(this.counters_[B]=0),this.counters_[B]+=t}get(){return aN(this.counters_)}}/**
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
*/const tu={},Cu={};function nf(e){const B=e.toString();return tu[B]||(tu[B]=new F4),tu[B]}function O4(e,B){const t=e.toString();return Cu[t]||(Cu[t]=B()),Cu[t]}/**
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
*/class R4{constructor(B){this.onMessage_=B,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(B,t){this.closeAfterResponse=B,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(B,t){for(this.pendingResponses[B]=t;this.pendingResponses[this.currentResponseNum];){const C=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let n=0;n<C.length;++n)C[n]&&kr(()=>{this.onMessage_(C[n])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
*/const ym="start",H4="close",M4="pLPCommand",L4="pRTLPCB",Gy="id",xy="pw",Ky="ser",T4="cb",G4="seg",x4="ts",K4="d",Q4="dframe",Qy=1870,Jy=30,J4=Qy-Jy,U4=25e3,V4=3e4;class Jn{constructor(B,t,C,n,r,i,s){this.connId=B,this.repoInfo=t,this.applicationId=C,this.appCheckToken=n,this.authToken=r,this.transportSessionId=i,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=As(B),this.stats_=nf(t),this.urlFn=a=>(this.appCheckToken&&(a[j1]=this.appCheckToken),Ty(t,My,a))}open(B,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new R4(B),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(V4)),b4(()=>{if(this.isClosed_)return;this.scriptTagHolder=new rf((...r)=>{const[i,s,a,o,c]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,i===ym)this.id=s,this.password=a;else if(i===H4)s?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(s,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+i)},(...r)=>{const[i,s]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(i,s)},()=>{this.onClosed_()},this.urlFn);const C={};C[ym]="t",C[Ky]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(C[T4]=this.scriptTagHolder.uniqueCallbackIdentifier),C[Dy]=Cf,this.transportSessionId&&(C[ky]=this.transportSessionId),this.lastSessionId&&(C[Oy]=this.lastSessionId),this.applicationId&&(C[Ry]=this.applicationId),this.appCheckToken&&(C[j1]=this.appCheckToken),typeof location<"u"&&location.hostname&&Fy.test(location.hostname)&&(C[Py]=Ny);const n=this.urlFn(C);this.log_("Connecting via long-poll to "+n),this.scriptTagHolder.addTag(n,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Jn.forceAllow_=!0}static forceDisallow(){Jn.forceDisallow_=!0}static isAvailable(){return Jn.forceAllow_?!0:!Jn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!v4()&&!y4()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(B){const t=FB(B);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const C=ev(t),n=Sy(C,J4);for(let r=0;r<n.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,n.length,n[r]),this.curSegmentNum++}addDisconnectPingFrame(B,t){this.myDisconnFrame=document.createElement("iframe");const C={};C[Q4]="t",C[Gy]=B,C[xy]=t,this.myDisconnFrame.src=this.urlFn(C),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(B){const t=FB(B).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class rf{constructor(B,t,C,n){this.onDisconnect=C,this.urlFn=n,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=p4(),window[M4+this.uniqueCallbackIdentifier]=B,window[L4+this.uniqueCallbackIdentifier]=t,this.myIFrame=rf.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const i="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(s){XB("frame writing exception"),s.stack&&XB(s.stack),XB(s)}}}static createIFrame_(){const B=document.createElement("iframe");if(B.style.display="none",document.body){document.body.appendChild(B);try{B.contentWindow.document||XB("No IE domain setting required")}catch{const t=document.domain;B.src="javascript:void((function(){document.open();document.domain='"+t+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return B.contentDocument?B.doc=B.contentDocument:B.contentWindow?B.doc=B.contentWindow.document:B.document&&(B.doc=B.document),B}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const B=this.onDisconnect;B&&(this.onDisconnect=null,B())}startLongPoll(B,t){for(this.myID=B,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const B={};B[Gy]=this.myID,B[xy]=this.myPW,B[Ky]=this.currentSerial;let t=this.urlFn(B),C="",n=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Jy+C.length<=Qy;){const r=this.pendingSegs.shift();C=C+"&"+G4+n+"="+r.seg+"&"+x4+n+"="+r.ts+"&"+K4+n+"="+r.d,n++}return t=t+C,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(B,t,C){this.pendingSegs.push({seg:B,ts:t,d:C}),this.alive&&this.newRequest_()}addLongPollTag_(B,t){this.outstandingRequests.add(t);const C=()=>{this.outstandingRequests.delete(t),this.newRequest_()},n=setTimeout(C,Math.floor(U4)),r=()=>{clearTimeout(n),C()};this.addTag(B,r)}addTag(B,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const C=this.myIFrame.doc.createElement("script");C.type="text/javascript",C.async=!0,C.src=B,C.onload=C.onreadystatechange=function(){const n=C.readyState;(!n||n==="loaded"||n==="complete")&&(C.onload=C.onreadystatechange=null,C.parentNode&&C.parentNode.removeChild(C),t())},C.onerror=()=>{XB("Long-poll script failed to load: "+B),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(C)}catch{}},Math.floor(1))}}/**
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
*/const W4=16384,j4=45e3;let Qo=null;typeof MozWebSocket<"u"?Qo=MozWebSocket:typeof WebSocket<"u"&&(Qo=WebSocket);class Ze{constructor(B,t,C,n,r,i,s){this.connId=B,this.applicationId=C,this.appCheckToken=n,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=As(this.connId),this.stats_=nf(t),this.connURL=Ze.connectionURL_(t,i,s,n,C),this.nodeAdmin=t.nodeAdmin}static connectionURL_(B,t,C,n,r){const i={};return i[Dy]=Cf,typeof location<"u"&&location.hostname&&Fy.test(location.hostname)&&(i[Py]=Ny),t&&(i[ky]=t),C&&(i[Oy]=C),n&&(i[j1]=n),r&&(i[Ry]=r),Ty(B,Hy,i)}open(B,t){this.onDisconnect=t,this.onMessage=B,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,jC.set("previous_websocket_failure",!0);try{let C;av(),this.mySock=new Qo(this.connURL,[],C)}catch(C){this.log_("Error instantiating WebSocket.");const n=C.message||C.data;n&&this.log_(n),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=C=>{this.handleIncomingFrame(C)},this.mySock.onerror=C=>{this.log_("WebSocket error.  Closing connection.");const n=C.message||C.data;n&&this.log_(n),this.onClosed_()}}start(){}static forceDisallow(){Ze.forceDisallow_=!0}static isAvailable(){let B=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,C=navigator.userAgent.match(t);C&&C.length>1&&parseFloat(C[1])<4.4&&(B=!0)}return!B&&Qo!==null&&!Ze.forceDisallow_}static previouslyFailed(){return jC.isInMemoryStorage||jC.get("previous_websocket_failure")===!0}markConnectionHealthy(){jC.remove("previous_websocket_failure")}appendFrame_(B){if(this.frames.push(B),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const C=Gi(t);this.onMessage(C)}}handleNewFrameCount_(B){this.totalFrames=B,this.frames=[]}extractFrameCount_(B){if(k(this.frames===null,"We already have a frame buffer"),B.length<=6){const t=Number(B);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),B}handleIncomingFrame(B){if(this.mySock===null)return;const t=B.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const C=this.extractFrameCount_(t);C!==null&&this.appendFrame_(C)}}send(B){this.resetKeepAlive();const t=FB(B);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const C=Sy(t,W4);C.length>1&&this.sendString_(String(C.length));for(let n=0;n<C.length;n++)this.sendString_(C[n])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(j4))}sendString_(B){try{this.mySock.send(B)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ze.responsesRequiredToBeHealthy=2;Ze.healthyTimeout=3e4;/**
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
*/class Ui{constructor(B){this.initTransports_(B)}static get ALL_TRANSPORTS(){return[Jn,Ze]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(B){const t=Ze&&Ze.isAvailable();let C=t&&!Ze.previouslyFailed();if(B.webSocketOnly&&(t||pe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),C=!0),C)this.transports_=[Ze];else{const n=this.transports_=[];for(const r of Ui.ALL_TRANSPORTS)r&&r.isAvailable()&&n.push(r);Ui.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ui.globalTransportInitialized_=!1;/**
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
*/const Y4=6e4,X4=5e3,Z4=10*1024,q4=100*1024,nu="t",Em="d",z4="s",Im="r",_4="e",Sm="o",wm="a",Dm="n",km="p",$4="h";class BH{constructor(B,t,C,n,r,i,s,a,o,c){this.id=B,this.repoInfo_=t,this.applicationId_=C,this.appCheckToken_=n,this.authToken_=r,this.onMessage_=i,this.onReady_=s,this.onDisconnect_=a,this.onKill_=o,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=As("c:"+this.id+":"),this.transportManager_=new Ui(t),this.log_("Connection created"),this.start_()}start_(){const B=this.transportManager_.initialTransport();this.conn_=new B(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=B.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),C=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,C)},Math.floor(0));const n=B.healthyTimeout||0;n>0&&(this.healthyTimeout_=di(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>q4?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Z4?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(n)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(B){return t=>{B===this.conn_?this.onConnectionLost_(t):B===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(B){return t=>{this.state_!==2&&(B===this.rx_?this.onPrimaryMessageReceived_(t):B===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(B){const t={t:"d",d:B};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(B){if(nu in B){const t=B[nu];t===wm?this.upgradeIfSecondaryHealthy_():t===Im?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Sm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(B){const t=Qr("t",B),C=Qr("d",B);if(t==="c")this.onSecondaryControl_(C);else if(t==="d")this.pendingDataMessages.push(C);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:km,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:wm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Dm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(B){const t=Qr("t",B),C=Qr("d",B);t==="c"?this.onControl_(C):t==="d"&&this.onDataMessage_(C)}onDataMessage_(B){this.onPrimaryResponse_(),this.onMessage_(B)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(B){const t=Qr(nu,B);if(Em in B){const C=B[Em];if(t===$4){const n=Object.assign({},C);this.repoInfo_.isUsingEmulator&&(n.h=this.repoInfo_.host),this.onHandshake_(n)}else if(t===Dm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let n=0;n<this.pendingDataMessages.length;++n)this.onDataMessage_(this.pendingDataMessages[n]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===z4?this.onConnectionShutdown_(C):t===Im?this.onReset_(C):t===_4?W1("Server Error: "+C):t===Sm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):W1("Unknown control packet command: "+t)}}onHandshake_(B){const t=B.ts,C=B.v,n=B.h;this.sessionId=B.s,this.repoInfo_.host=n,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Cf!==C&&pe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const B=this.transportManager_.upgradeTransport();B&&this.startUpgrade_(B)}startUpgrade_(B){this.secondaryConn_=new B(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=B.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),C=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,C),di(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Y4))}onReset_(B){this.log_("Reset packet received.  New host: "+B),this.repoInfo_.host=B,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(B,t){this.log_("Realtime connection established."),this.conn_=B,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):di(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(X4))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:km,d:{}}}))}onSecondaryConnectionLost_(){const B=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===B||this.rx_===B)&&this.close()}onConnectionLost_(B){this.conn_=null,!B&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(jC.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(B){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(B),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(B){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(B)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
*/class Uy{put(B,t,C,n){}merge(B,t,C,n){}refreshAuthToken(B){}refreshAppCheckToken(B){}onDisconnectPut(B,t,C){}onDisconnectMerge(B,t,C){}onDisconnectCancel(B,t){}reportStats(B){}}/**
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
*/class Vy{constructor(B){this.allowedEvents_=B,this.listeners_={},k(Array.isArray(B)&&B.length>0,"Requires a non-empty array")}trigger(B,...t){if(Array.isArray(this.listeners_[B])){const C=[...this.listeners_[B]];for(let n=0;n<C.length;n++)C[n].callback.apply(C[n].context,t)}}on(B,t,C){this.validateEventType_(B),this.listeners_[B]=this.listeners_[B]||[],this.listeners_[B].push({callback:t,context:C});const n=this.getInitialEvent(B);n&&t.apply(C,n)}off(B,t,C){this.validateEventType_(B);const n=this.listeners_[B]||[];for(let r=0;r<n.length;r++)if(n[r].callback===t&&(!C||C===n[r].context)){n.splice(r,1);return}}validateEventType_(B){k(this.allowedEvents_.find(t=>t===B),"Unknown event: "+B)}}/**
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
*/class Jo extends Vy{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Th()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Jo}getInitialEvent(B){return k(B==="online","Unknown event type: "+B),[this.online_]}currentlyOnline(){return this.online_}}/**
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
*/const Pm=32,Nm=768;class iB{constructor(B,t){if(t===void 0){this.pieces_=B.split("/");let C=0;for(let n=0;n<this.pieces_.length;n++)this.pieces_[n].length>0&&(this.pieces_[C]=this.pieces_[n],C++);this.pieces_.length=C,this.pieceNum_=0}else this.pieces_=B,this.pieceNum_=t}toString(){let B="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(B+="/"+this.pieces_[t]);return B||"/"}}function $(){return new iB("")}function Z(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function SC(e){return e.pieces_.length-e.pieceNum_}function aB(e){let B=e.pieceNum_;return B<e.pieces_.length&&B++,new iB(e.pieces_,B)}function Wy(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function eH(e){let B="";for(let t=e.pieceNum_;t<e.pieces_.length;t++)e.pieces_[t]!==""&&(B+="/"+encodeURIComponent(String(e.pieces_[t])));return B||"/"}function jy(e,B=0){return e.pieces_.slice(e.pieceNum_+B)}function Yy(e){if(e.pieceNum_>=e.pieces_.length)return null;const B=[];for(let t=e.pieceNum_;t<e.pieces_.length-1;t++)B.push(e.pieces_[t]);return new iB(B,0)}function OB(e,B){const t=[];for(let C=e.pieceNum_;C<e.pieces_.length;C++)t.push(e.pieces_[C]);if(B instanceof iB)for(let C=B.pieceNum_;C<B.pieces_.length;C++)t.push(B.pieces_[C]);else{const C=B.split("/");for(let n=0;n<C.length;n++)C[n].length>0&&t.push(C[n])}return new iB(t,0)}function X(e){return e.pieceNum_>=e.pieces_.length}function ee(e,B){const t=Z(e),C=Z(B);if(t===null)return B;if(t===C)return ee(aB(e),aB(B));throw new Error("INTERNAL ERROR: innerPath ("+B+") is not within outerPath ("+e+")")}function Xy(e,B){if(SC(e)!==SC(B))return!1;for(let t=e.pieceNum_,C=B.pieceNum_;t<=e.pieces_.length;t++,C++)if(e.pieces_[t]!==B.pieces_[C])return!1;return!0}function qe(e,B){let t=e.pieceNum_,C=B.pieceNum_;if(SC(e)>SC(B))return!1;for(;t<e.pieces_.length;){if(e.pieces_[t]!==B.pieces_[C])return!1;++t,++C}return!0}class tH{constructor(B,t){this.errorPrefix_=t,this.parts_=jy(B,0),this.byteLength_=Math.max(1,this.parts_.length);for(let C=0;C<this.parts_.length;C++)this.byteLength_+=Rl(this.parts_[C]);Zy(this)}}function CH(e,B){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(B),e.byteLength_+=Rl(B),Zy(e)}function nH(e){const B=e.parts_.pop();e.byteLength_-=Rl(B),e.parts_.length>0&&(e.byteLength_-=1)}function Zy(e){if(e.byteLength_>Nm)throw new Error(e.errorPrefix_+"has a key path longer than "+Nm+" bytes ("+e.byteLength_+").");if(e.parts_.length>Pm)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Pm+") or object contains a cycle "+xC(e))}function xC(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
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
*/class sf extends Vy{constructor(){super(["visible"]);let B,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",B="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",B="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",B="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",B="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const C=!document[B];C!==this.visible_&&(this.visible_=C,this.trigger("visible",C))},!1)}static getInstance(){return new sf}getInitialEvent(B){return k(B==="visible","Unknown event type: "+B),[this.visible_]}}/**
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
*/const Jr=1e3,rH=60*5*1e3,Fm=30*1e3,iH=1.3,sH=3e4,aH="server_kill",Om=3;class Ot extends Uy{constructor(B,t,C,n,r,i,s,a){if(super(),this.repoInfo_=B,this.applicationId_=t,this.onDataUpdate_=C,this.onConnectStatus_=n,this.onServerInfoUpdate_=r,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.authOverride_=a,this.id=Ot.nextPersistentConnectionId_++,this.log_=As("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Jr,this.maxReconnectDelay_=rH,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!av())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");sf.getInstance().on("visible",this.onVisible_,this),B.host.indexOf("fblocal")===-1&&Jo.getInstance().on("online",this.onOnline_,this)}sendRequest(B,t,C){const n=++this.requestNumber_,r={r:n,a:B,b:t};this.log_(FB(r)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),C&&(this.requestCBHash_[n]=C)}get(B){this.initConnection_();const t=new Ol,C={action:"g",request:{p:B._path.toString(),q:B._queryObject},onComplete:r=>{const i=r.d;r.s==="ok"?t.resolve(i):t.reject(i)}};this.outstandingGets_.push(C),this.outstandingGetCount_++;const n=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(n),t.promise}listen(B,t,C,n){this.initConnection_();const r=B._queryIdentifier,i=B._path.toString();this.log_("Listen called for "+i+" "+r),this.listens.has(i)||this.listens.set(i,new Map),k(B._queryParams.isDefault()||!B._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(i).has(r),"listen() called twice for same path/queryId.");const s={onComplete:n,hashFn:t,query:B,tag:C};this.listens.get(i).set(r,s),this.connected_&&this.sendListen_(s)}sendGet_(B){const t=this.outstandingGets_[B];this.sendRequest("g",t.request,C=>{delete this.outstandingGets_[B],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(C)})}sendListen_(B){const t=B.query,C=t._path.toString(),n=t._queryIdentifier;this.log_("Listen on "+C+" for "+n);const r={p:C},i="q";B.tag&&(r.q=t._queryObject,r.t=B.tag),r.h=B.hashFn(),this.sendRequest(i,r,s=>{const a=s.d,o=s.s;Ot.warnOnListenWarnings_(a,t),(this.listens.get(C)&&this.listens.get(C).get(n))===B&&(this.log_("listen response",s),o!=="ok"&&this.removeListen_(C,n),B.onComplete&&B.onComplete(o,a))})}static warnOnListenWarnings_(B,t){if(B&&typeof B=="object"&&Vt(B,"w")){const C=ur(B,"w");if(Array.isArray(C)&&~C.indexOf("no_index")){const n='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();pe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${n} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(B){this.authToken_=B,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(B)}reduceReconnectDelayIfAdminCredential_(B){(B&&B.length===40||yN(B))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Fm)}refreshAppCheckToken(B){this.appCheckToken_=B,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const B=this.authToken_,t=vN(B)?"auth":"gauth",C={cred:B};this.authOverride_===null?C.noauth=!0:typeof this.authOverride_=="object"&&(C.authvar=this.authOverride_),this.sendRequest(t,C,n=>{const r=n.s,i=n.d||"error";this.authToken_===B&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,i))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},B=>{const t=B.s,C=B.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,C)})}unlisten(B,t){const C=B._path.toString(),n=B._queryIdentifier;this.log_("Unlisten called for "+C+" "+n),k(B._queryParams.isDefault()||!B._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(C,n)&&this.connected_&&this.sendUnlisten_(C,n,B._queryObject,t)}sendUnlisten_(B,t,C,n){this.log_("Unlisten on "+B+" for "+t);const r={p:B},i="n";n&&(r.q=C,r.t=n),this.sendRequest(i,r)}onDisconnectPut(B,t,C){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",B,t,C):this.onDisconnectRequestQueue_.push({pathString:B,action:"o",data:t,onComplete:C})}onDisconnectMerge(B,t,C){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",B,t,C):this.onDisconnectRequestQueue_.push({pathString:B,action:"om",data:t,onComplete:C})}onDisconnectCancel(B,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",B,null,t):this.onDisconnectRequestQueue_.push({pathString:B,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(B,t,C,n){const r={p:t,d:C};this.log_("onDisconnect "+B,r),this.sendRequest(B,r,i=>{n&&setTimeout(()=>{n(i.s,i.d)},Math.floor(0))})}put(B,t,C,n){this.putInternal("p",B,t,C,n)}merge(B,t,C,n){this.putInternal("m",B,t,C,n)}putInternal(B,t,C,n,r){this.initConnection_();const i={p:t,d:C};r!==void 0&&(i.h=r),this.outstandingPuts_.push({action:B,request:i,onComplete:n}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+t)}sendPut_(B){const t=this.outstandingPuts_[B].action,C=this.outstandingPuts_[B].request,n=this.outstandingPuts_[B].onComplete;this.outstandingPuts_[B].queued=this.connected_,this.sendRequest(t,C,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[B],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),n&&n(r.s,r.d)})}reportStats(B){if(this.connected_){const t={c:B};this.log_("reportStats",t),this.sendRequest("s",t,C=>{if(C.s!=="ok"){const n=C.d;this.log_("reportStats","Error sending stats: "+n)}})}}onDataMessage_(B){if("r"in B){this.log_("from server: "+FB(B));const t=B.r,C=this.requestCBHash_[t];C&&(delete this.requestCBHash_[t],C(B.b))}else{if("error"in B)throw"A server-side error has occurred: "+B.error;"a"in B&&this.onDataPush_(B.a,B.b)}}onDataPush_(B,t){this.log_("handleServerMessage",B,t),B==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):B==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):B==="c"?this.onListenRevoked_(t.p,t.q):B==="ac"?this.onAuthRevoked_(t.s,t.d):B==="apc"?this.onAppCheckRevoked_(t.s,t.d):B==="sd"?this.onSecurityDebugPacket_(t):W1("Unrecognized action received from server: "+FB(B)+`
Are you using the latest client?`)}onReady_(B,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(B),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(B){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(B))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(B){B&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Jr,this.realtime_||this.scheduleConnect_(0)),this.visible_=B}onOnline_(B){B?(this.log_("Browser went online."),this.reconnectDelay_=Jr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>sH&&(this.reconnectDelay_=Jr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const B=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-B);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*iH)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const B=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),C=this.onRealtimeDisconnect_.bind(this),n=this.id+":"+Ot.nextConnectionId_++,r=this.lastSessionId;let i=!1,s=null;const a=function(){s?s.close():(i=!0,C())},o=function(l){k(s,"sendRequest call when we're not connected not allowed."),s.sendRequest(l)};this.realtime_={close:a,sendRequest:o};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[l,u]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);i?XB("getToken() completed but was canceled"):(XB("getToken() completed. Creating connection."),this.authToken_=l&&l.accessToken,this.appCheckToken_=u&&u.token,s=new BH(n,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,B,t,C,m=>{pe(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(aH)},r))}catch(l){this.log_("Failed to get token: "+l),i||(this.repoInfo_.nodeAdmin&&pe(l),a())}}}interrupt(B){XB("Interrupting connection for reason: "+B),this.interruptReasons_[B]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(B){XB("Resuming connection for reason: "+B),delete this.interruptReasons_[B],R1(this.interruptReasons_)&&(this.reconnectDelay_=Jr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(B){const t=B-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let B=0;B<this.outstandingPuts_.length;B++){const t=this.outstandingPuts_[B];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[B],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(B,t){let C;t?C=t.map(r=>tf(r)).join("$"):C="default";const n=this.removeListen_(B,C);n&&n.onComplete&&n.onComplete("permission_denied")}removeListen_(B,t){const C=new iB(B).toString();let n;if(this.listens.has(C)){const r=this.listens.get(C);n=r.get(t),r.delete(t),r.size===0&&this.listens.delete(C)}else n=void 0;return n}onAuthRevoked_(B,t){XB("Auth token revoked: "+B+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(B==="invalid_token"||B==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Om&&(this.reconnectDelay_=Fm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(B,t){XB("App check token revoked: "+B+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(B==="invalid_token"||B==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Om&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(B){this.securityDebugCallback_?this.securityDebugCallback_(B):"msg"in B&&console.log("FIREBASE: "+B.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const B of this.listens.values())for(const t of B.values())this.sendListen_(t);for(let B=0;B<this.outstandingPuts_.length;B++)this.outstandingPuts_[B]&&this.sendPut_(B);for(;this.onDisconnectRequestQueue_.length;){const B=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(B.action,B.pathString,B.data,B.onComplete)}for(let B=0;B<this.outstandingGets_.length;B++)this.outstandingGets_[B]&&this.sendGet_(B)}sendConnectStats_(){const B={};let t="js";B["sdk."+t+"."+vy.replace(/\./g,"-")]=1,Th()?B["framework.cordova"]=1:sv()&&(B["framework.reactnative"]=1),this.reportStats(B)}shouldReconnect_(){const B=Jo.getInstance().currentlyOnline();return R1(this.interruptReasons_)&&B}}Ot.nextPersistentConnectionId_=0;Ot.nextConnectionId_=0;/**
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
*/class Y{constructor(B,t){this.name=B,this.node=t}static Wrap(B,t){return new Y(B,t)}}/**
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
*/class Ql{getCompare(){return this.compare.bind(this)}indexedValueChanged(B,t){const C=new Y(hr,B),n=new Y(hr,t);return this.compare(C,n)!==0}minPost(){return Y.MIN}}/**
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
*/let sa;class qy extends Ql{static get __EMPTY_NODE(){return sa}static set __EMPTY_NODE(B){sa=B}compare(B,t){return Dr(B.name,t.name)}isDefinedOn(B){throw Ir("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(B,t){return!1}minPost(){return Y.MIN}maxPost(){return new Y(cn,sa)}makePost(B,t){return k(typeof B=="string","KeyIndex indexValue must always be a string."),new Y(B,sa)}toString(){return".key"}}const tr=new qy;/**
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
*/class aa{constructor(B,t,C,n,r=null){this.isReverse_=n,this.resultGenerator_=r,this.nodeStack_=[];let i=1;for(;!B.isEmpty();)if(B=B,i=t?C(B.key,t):1,n&&(i*=-1),i<0)this.isReverse_?B=B.left:B=B.right;else if(i===0){this.nodeStack_.push(B);break}else this.nodeStack_.push(B),this.isReverse_?B=B.right:B=B.left}getNext(){if(this.nodeStack_.length===0)return null;let B=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(B.key,B.value):t={key:B.key,value:B.value},this.isReverse_)for(B=B.left;!B.isEmpty();)this.nodeStack_.push(B),B=B.right;else for(B=B.right;!B.isEmpty();)this.nodeStack_.push(B),B=B.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const B=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(B.key,B.value):{key:B.key,value:B.value}}}class GB{constructor(B,t,C,n,r){this.key=B,this.value=t,this.color=C??GB.RED,this.left=n??ce.EMPTY_NODE,this.right=r??ce.EMPTY_NODE}copy(B,t,C,n,r){return new GB(B??this.key,t??this.value,C??this.color,n??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(B){return this.left.inorderTraversal(B)||!!B(this.key,this.value)||this.right.inorderTraversal(B)}reverseTraversal(B){return this.right.reverseTraversal(B)||B(this.key,this.value)||this.left.reverseTraversal(B)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(B,t,C){let n=this;const r=C(B,n.key);return r<0?n=n.copy(null,null,null,n.left.insert(B,t,C),null):r===0?n=n.copy(null,t,null,null,null):n=n.copy(null,null,null,null,n.right.insert(B,t,C)),n.fixUp_()}removeMin_(){if(this.left.isEmpty())return ce.EMPTY_NODE;let B=this;return!B.left.isRed_()&&!B.left.left.isRed_()&&(B=B.moveRedLeft_()),B=B.copy(null,null,null,B.left.removeMin_(),null),B.fixUp_()}remove(B,t){let C,n;if(C=this,t(B,C.key)<0)!C.left.isEmpty()&&!C.left.isRed_()&&!C.left.left.isRed_()&&(C=C.moveRedLeft_()),C=C.copy(null,null,null,C.left.remove(B,t),null);else{if(C.left.isRed_()&&(C=C.rotateRight_()),!C.right.isEmpty()&&!C.right.isRed_()&&!C.right.left.isRed_()&&(C=C.moveRedRight_()),t(B,C.key)===0){if(C.right.isEmpty())return ce.EMPTY_NODE;n=C.right.min_(),C=C.copy(n.key,n.value,null,null,C.right.removeMin_())}C=C.copy(null,null,null,null,C.right.remove(B,t))}return C.fixUp_()}isRed_(){return this.color}fixUp_(){let B=this;return B.right.isRed_()&&!B.left.isRed_()&&(B=B.rotateLeft_()),B.left.isRed_()&&B.left.left.isRed_()&&(B=B.rotateRight_()),B.left.isRed_()&&B.right.isRed_()&&(B=B.colorFlip_()),B}moveRedLeft_(){let B=this.colorFlip_();return B.right.left.isRed_()&&(B=B.copy(null,null,null,null,B.right.rotateRight_()),B=B.rotateLeft_(),B=B.colorFlip_()),B}moveRedRight_(){let B=this.colorFlip_();return B.left.left.isRed_()&&(B=B.rotateRight_(),B=B.colorFlip_()),B}rotateLeft_(){const B=this.copy(null,null,GB.RED,null,this.right.left);return this.right.copy(null,null,this.color,B,null)}rotateRight_(){const B=this.copy(null,null,GB.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,B)}colorFlip_(){const B=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,B,t)}checkMaxDepth_(){const B=this.check_();return Math.pow(2,B)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const B=this.left.check_();if(B!==this.right.check_())throw new Error("Black depths differ");return B+(this.isRed_()?0:1)}}GB.RED=!0;GB.BLACK=!1;class oH{copy(B,t,C,n,r){return this}insert(B,t,C){return new GB(B,t,null)}remove(B,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(B){return!1}reverseTraversal(B){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ce{constructor(B,t=ce.EMPTY_NODE){this.comparator_=B,this.root_=t}insert(B,t){return new ce(this.comparator_,this.root_.insert(B,t,this.comparator_).copy(null,null,GB.BLACK,null,null))}remove(B){return new ce(this.comparator_,this.root_.remove(B,this.comparator_).copy(null,null,GB.BLACK,null,null))}get(B){let t,C=this.root_;for(;!C.isEmpty();){if(t=this.comparator_(B,C.key),t===0)return C.value;t<0?C=C.left:t>0&&(C=C.right)}return null}getPredecessorKey(B){let t,C=this.root_,n=null;for(;!C.isEmpty();)if(t=this.comparator_(B,C.key),t===0){if(C.left.isEmpty())return n?n.key:null;for(C=C.left;!C.right.isEmpty();)C=C.right;return C.key}else t<0?C=C.left:t>0&&(n=C,C=C.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(B){return this.root_.inorderTraversal(B)}reverseTraversal(B){return this.root_.reverseTraversal(B)}getIterator(B){return new aa(this.root_,null,this.comparator_,!1,B)}getIteratorFrom(B,t){return new aa(this.root_,B,this.comparator_,!1,t)}getReverseIteratorFrom(B,t){return new aa(this.root_,B,this.comparator_,!0,t)}getReverseIterator(B){return new aa(this.root_,null,this.comparator_,!0,B)}}ce.EMPTY_NODE=new oH;/**
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
*/function lH(e,B){return Dr(e.name,B.name)}function af(e,B){return Dr(e,B)}/**
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
*/let Y1;function cH(e){Y1=e}const zy=function(e){return typeof e=="number"?"number:"+wy(e):"string:"+e},_y=function(e){if(e.isLeafNode()){const B=e.val();k(typeof B=="string"||typeof B=="number"||typeof B=="object"&&Vt(B,".sv"),"Priority must be a string or number.")}else k(e===Y1||e.isEmpty(),"priority of unexpected type.");k(e===Y1||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
*/let Rm;class LB{constructor(B,t=LB.__childrenNodeConstructor.EMPTY_NODE){this.value_=B,this.priorityNode_=t,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),_y(this.priorityNode_)}static set __childrenNodeConstructor(B){Rm=B}static get __childrenNodeConstructor(){return Rm}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(B){return new LB(this.value_,B)}getImmediateChild(B){return B===".priority"?this.priorityNode_:LB.__childrenNodeConstructor.EMPTY_NODE}getChild(B){return X(B)?this:Z(B)===".priority"?this.priorityNode_:LB.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(B,t){return null}updateImmediateChild(B,t){return B===".priority"?this.updatePriority(t):t.isEmpty()&&B!==".priority"?this:LB.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(B,t).updatePriority(this.priorityNode_)}updateChild(B,t){const C=Z(B);return C===null?t:t.isEmpty()&&C!==".priority"?this:(k(C!==".priority"||SC(B)===1,".priority must be the last token in a path"),this.updateImmediateChild(C,LB.__childrenNodeConstructor.EMPTY_NODE.updateChild(aB(B),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(B,t){return!1}val(B){return B&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let B="";this.priorityNode_.isEmpty()||(B+="priority:"+zy(this.priorityNode_.val())+":");const t=typeof this.value_;B+=t+":",t==="number"?B+=wy(this.value_):B+=this.value_,this.lazyHash_=Ey(B)}return this.lazyHash_}getValue(){return this.value_}compareTo(B){return B===LB.__childrenNodeConstructor.EMPTY_NODE?1:B instanceof LB.__childrenNodeConstructor?-1:(k(B.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(B))}compareToLeafNode_(B){const t=typeof B.value_,C=typeof this.value_,n=LB.VALUE_TYPE_ORDER.indexOf(t),r=LB.VALUE_TYPE_ORDER.indexOf(C);return k(n>=0,"Unknown leaf type: "+t),k(r>=0,"Unknown leaf type: "+C),n===r?C==="object"?0:this.value_<B.value_?-1:this.value_===B.value_?0:1:r-n}withIndex(){return this}isIndexed(){return!0}equals(B){if(B===this)return!0;if(B.isLeafNode()){const t=B;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}LB.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
*/let $y,BE;function uH(e){$y=e}function dH(e){BE=e}class hH extends Ql{compare(B,t){const C=B.node.getPriority(),n=t.node.getPriority(),r=C.compareTo(n);return r===0?Dr(B.name,t.name):r}isDefinedOn(B){return!B.getPriority().isEmpty()}indexedValueChanged(B,t){return!B.getPriority().equals(t.getPriority())}minPost(){return Y.MIN}maxPost(){return new Y(cn,new LB("[PRIORITY-POST]",BE))}makePost(B,t){const C=$y(B);return new Y(t,new LB("[PRIORITY-POST]",C))}toString(){return".priority"}}const SB=new hH;/**
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
*/const fH=Math.log(2);class pH{constructor(B){const t=r=>parseInt(Math.log(r)/fH,10),C=r=>parseInt(Array(r+1).join("1"),2);this.count=t(B+1),this.current_=this.count-1;const n=C(this.count);this.bits_=B+1&n}nextBitIsOne(){const B=!(this.bits_&1<<this.current_);return this.current_--,B}}const Uo=function(e,B,t,C){e.sort(B);const n=function(a,o){const c=o-a;let l,u;if(c===0)return null;if(c===1)return l=e[a],u=t?t(l):l,new GB(u,l.node,GB.BLACK,null,null);{const m=parseInt(c/2,10)+a,d=n(a,m),f=n(m+1,o);return l=e[m],u=t?t(l):l,new GB(u,l.node,GB.BLACK,d,f)}},r=function(a){let o=null,c=null,l=e.length;const u=function(d,f){const g=l-d,h=l;l-=d;const p=n(g+1,h),b=e[g],A=t?t(b):b;m(new GB(A,b.node,f,null,p))},m=function(d){o?(o.left=d,o=d):(c=d,o=d)};for(let d=0;d<a.count;++d){const f=a.nextBitIsOne(),g=Math.pow(2,a.count-(d+1));f?u(g,GB.BLACK):(u(g,GB.BLACK),u(g,GB.RED))}return c},i=new pH(e.length),s=r(i);return new ce(C||B,s)};/**
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
*/let ru;const Sn={};class Nt{constructor(B,t){this.indexes_=B,this.indexSet_=t}static get Default(){return k(Sn&&SB,"ChildrenNode.ts has not been loaded"),ru=ru||new Nt({".priority":Sn},{".priority":SB}),ru}get(B){const t=ur(this.indexes_,B);if(!t)throw new Error("No index defined for "+B);return t instanceof ce?t:null}hasIndex(B){return Vt(this.indexSet_,B.toString())}addIndex(B,t){k(B!==tr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const C=[];let n=!1;const r=t.getIterator(Y.Wrap);let i=r.getNext();for(;i;)n=n||B.isDefinedOn(i.node),C.push(i),i=r.getNext();let s;n?s=Uo(C,B.getCompare()):s=Sn;const a=B.toString(),o=Object.assign({},this.indexSet_);o[a]=B;const c=Object.assign({},this.indexes_);return c[a]=s,new Nt(c,o)}addToIndexes(B,t){const C=Oo(this.indexes_,(n,r)=>{const i=ur(this.indexSet_,r);if(k(i,"Missing index implementation for "+r),n===Sn)if(i.isDefinedOn(B.node)){const s=[],a=t.getIterator(Y.Wrap);let o=a.getNext();for(;o;)o.name!==B.name&&s.push(o),o=a.getNext();return s.push(B),Uo(s,i.getCompare())}else return Sn;else{const s=t.get(B.name);let a=n;return s&&(a=a.remove(new Y(B.name,s))),a.insert(B,B.node)}});return new Nt(C,this.indexSet_)}removeFromIndexes(B,t){const C=Oo(this.indexes_,n=>{if(n===Sn)return n;{const r=t.get(B.name);return r?n.remove(new Y(B.name,r)):n}});return new Nt(C,this.indexSet_)}}/**
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
*/let Ur;class K{constructor(B,t,C){this.children_=B,this.priorityNode_=t,this.indexMap_=C,this.lazyHash_=null,this.priorityNode_&&_y(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ur||(Ur=new K(new ce(af),null,Nt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ur}updatePriority(B){return this.children_.isEmpty()?this:new K(this.children_,B,this.indexMap_)}getImmediateChild(B){if(B===".priority")return this.getPriority();{const t=this.children_.get(B);return t===null?Ur:t}}getChild(B){const t=Z(B);return t===null?this:this.getImmediateChild(t).getChild(aB(B))}hasChild(B){return this.children_.get(B)!==null}updateImmediateChild(B,t){if(k(t,"We should always be passing snapshot nodes"),B===".priority")return this.updatePriority(t);{const C=new Y(B,t);let n,r;t.isEmpty()?(n=this.children_.remove(B),r=this.indexMap_.removeFromIndexes(C,this.children_)):(n=this.children_.insert(B,t),r=this.indexMap_.addToIndexes(C,this.children_));const i=n.isEmpty()?Ur:this.priorityNode_;return new K(n,i,r)}}updateChild(B,t){const C=Z(B);if(C===null)return t;{k(Z(B)!==".priority"||SC(B)===1,".priority must be the last token in a path");const n=this.getImmediateChild(C).updateChild(aB(B),t);return this.updateImmediateChild(C,n)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(B){if(this.isEmpty())return null;const t={};let C=0,n=0,r=!0;if(this.forEachChild(SB,(i,s)=>{t[i]=s.val(B),C++,r&&K.INTEGER_REGEXP_.test(i)?n=Math.max(n,Number(i)):r=!1}),!B&&r&&n<2*C){const i=[];for(const s in t)i[s]=t[s];return i}else return B&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let B="";this.getPriority().isEmpty()||(B+="priority:"+zy(this.getPriority().val())+":"),this.forEachChild(SB,(t,C)=>{const n=C.hash();n!==""&&(B+=":"+t+":"+n)}),this.lazyHash_=B===""?"":Ey(B)}return this.lazyHash_}getPredecessorChildName(B,t,C){const n=this.resolveIndex_(C);if(n){const r=n.getPredecessorKey(new Y(B,t));return r?r.name:null}else return this.children_.getPredecessorKey(B)}getFirstChildName(B){const t=this.resolveIndex_(B);if(t){const C=t.minKey();return C&&C.name}else return this.children_.minKey()}getFirstChild(B){const t=this.getFirstChildName(B);return t?new Y(t,this.children_.get(t)):null}getLastChildName(B){const t=this.resolveIndex_(B);if(t){const C=t.maxKey();return C&&C.name}else return this.children_.maxKey()}getLastChild(B){const t=this.getLastChildName(B);return t?new Y(t,this.children_.get(t)):null}forEachChild(B,t){const C=this.resolveIndex_(B);return C?C.inorderTraversal(n=>t(n.name,n.node)):this.children_.inorderTraversal(t)}getIterator(B){return this.getIteratorFrom(B.minPost(),B)}getIteratorFrom(B,t){const C=this.resolveIndex_(t);if(C)return C.getIteratorFrom(B,n=>n);{const n=this.children_.getIteratorFrom(B.name,Y.Wrap);let r=n.peek();for(;r!=null&&t.compare(r,B)<0;)n.getNext(),r=n.peek();return n}}getReverseIterator(B){return this.getReverseIteratorFrom(B.maxPost(),B)}getReverseIteratorFrom(B,t){const C=this.resolveIndex_(t);if(C)return C.getReverseIteratorFrom(B,n=>n);{const n=this.children_.getReverseIteratorFrom(B.name,Y.Wrap);let r=n.peek();for(;r!=null&&t.compare(r,B)>0;)n.getNext(),r=n.peek();return n}}compareTo(B){return this.isEmpty()?B.isEmpty()?0:-1:B.isLeafNode()||B.isEmpty()?1:B===vs?-1:0}withIndex(B){if(B===tr||this.indexMap_.hasIndex(B))return this;{const t=this.indexMap_.addIndex(B,this.children_);return new K(this.children_,this.priorityNode_,t)}}isIndexed(B){return B===tr||this.indexMap_.hasIndex(B)}equals(B){if(B===this)return!0;if(B.isLeafNode())return!1;{const t=B;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const C=this.getIterator(SB),n=t.getIterator(SB);let r=C.getNext(),i=n.getNext();for(;r&&i;){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=C.getNext(),i=n.getNext()}return r===null&&i===null}else return!1;else return!1}}resolveIndex_(B){return B===tr?null:this.indexMap_.get(B.toString())}}K.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class mH extends K{constructor(){super(new ce(af),K.EMPTY_NODE,Nt.Default)}compareTo(B){return B===this?0:1}equals(B){return B===this}getPriority(){return this}getImmediateChild(B){return K.EMPTY_NODE}isEmpty(){return!1}}const vs=new mH;Object.defineProperties(Y,{MIN:{value:new Y(hr,K.EMPTY_NODE)},MAX:{value:new Y(cn,vs)}});qy.__EMPTY_NODE=K.EMPTY_NODE;LB.__childrenNodeConstructor=K;cH(vs);dH(vs);/**
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
*/const gH=!0;function xB(e,B=null){if(e===null)return K.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(B=e[".priority"]),k(B===null||typeof B=="string"||typeof B=="number"||typeof B=="object"&&".sv"in B,"Invalid priority type found: "+typeof B),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const t=e;return new LB(t,xB(B))}if(!(e instanceof Array)&&gH){const t=[];let C=!1;if(me(e,(r,i)=>{if(r.substring(0,1)!=="."){const s=xB(i);s.isEmpty()||(C=C||!s.getPriority().isEmpty(),t.push(new Y(r,s)))}}),t.length===0)return K.EMPTY_NODE;const n=Uo(t,lH,r=>r.name,af);if(C){const r=Uo(t,SB.getCompare());return new K(n,xB(B),new Nt({".priority":r},{".priority":SB}))}else return new K(n,xB(B),Nt.Default)}else{let t=K.EMPTY_NODE;return me(e,(C,n)=>{if(Vt(e,C)&&C.substring(0,1)!=="."){const r=xB(n);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(C,r))}}),t.updatePriority(xB(B))}}uH(xB);/**
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
*/class bH extends Ql{constructor(B){super(),this.indexPath_=B,k(!X(B)&&Z(B)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(B){return B.getChild(this.indexPath_)}isDefinedOn(B){return!B.getChild(this.indexPath_).isEmpty()}compare(B,t){const C=this.extractChild(B.node),n=this.extractChild(t.node),r=C.compareTo(n);return r===0?Dr(B.name,t.name):r}makePost(B,t){const C=xB(B),n=K.EMPTY_NODE.updateChild(this.indexPath_,C);return new Y(t,n)}maxPost(){const B=K.EMPTY_NODE.updateChild(this.indexPath_,vs);return new Y(cn,B)}toString(){return jy(this.indexPath_,0).join("/")}}/**
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
*/class AH extends Ql{compare(B,t){const C=B.node.compareTo(t.node);return C===0?Dr(B.name,t.name):C}isDefinedOn(B){return!0}indexedValueChanged(B,t){return!B.equals(t)}minPost(){return Y.MIN}maxPost(){return Y.MAX}makePost(B,t){const C=xB(B);return new Y(t,C)}toString(){return".value"}}const vH=new AH;/**
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
*/function eE(e){return{type:"value",snapshotNode:e}}function fr(e,B){return{type:"child_added",snapshotNode:B,childName:e}}function Vi(e,B){return{type:"child_removed",snapshotNode:B,childName:e}}function Wi(e,B,t){return{type:"child_changed",snapshotNode:B,childName:e,oldSnap:t}}function yH(e,B){return{type:"child_moved",snapshotNode:B,childName:e}}/**
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
*/class of{constructor(B){this.index_=B}updateChild(B,t,C,n,r,i){k(B.isIndexed(this.index_),"A node must be indexed if only a child is updated");const s=B.getImmediateChild(t);return s.getChild(n).equals(C.getChild(n))&&s.isEmpty()===C.isEmpty()||(i!=null&&(C.isEmpty()?B.hasChild(t)?i.trackChildChange(Vi(t,s)):k(B.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):s.isEmpty()?i.trackChildChange(fr(t,C)):i.trackChildChange(Wi(t,C,s))),B.isLeafNode()&&C.isEmpty())?B:B.updateImmediateChild(t,C).withIndex(this.index_)}updateFullNode(B,t,C){return C!=null&&(B.isLeafNode()||B.forEachChild(SB,(n,r)=>{t.hasChild(n)||C.trackChildChange(Vi(n,r))}),t.isLeafNode()||t.forEachChild(SB,(n,r)=>{if(B.hasChild(n)){const i=B.getImmediateChild(n);i.equals(r)||C.trackChildChange(Wi(n,r,i))}else C.trackChildChange(fr(n,r))})),t.withIndex(this.index_)}updatePriority(B,t){return B.isEmpty()?K.EMPTY_NODE:B.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
*/class ji{constructor(B){this.indexedFilter_=new of(B.getIndex()),this.index_=B.getIndex(),this.startPost_=ji.getStartPost_(B),this.endPost_=ji.getEndPost_(B),this.startIsInclusive_=!B.startAfterSet_,this.endIsInclusive_=!B.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(B){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),B)<=0:this.index_.compare(this.getStartPost(),B)<0,C=this.endIsInclusive_?this.index_.compare(B,this.getEndPost())<=0:this.index_.compare(B,this.getEndPost())<0;return t&&C}updateChild(B,t,C,n,r,i){return this.matches(new Y(t,C))||(C=K.EMPTY_NODE),this.indexedFilter_.updateChild(B,t,C,n,r,i)}updateFullNode(B,t,C){t.isLeafNode()&&(t=K.EMPTY_NODE);let n=t.withIndex(this.index_);n=n.updatePriority(K.EMPTY_NODE);const r=this;return t.forEachChild(SB,(i,s)=>{r.matches(new Y(i,s))||(n=n.updateImmediateChild(i,K.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(B,n,C)}updatePriority(B,t){return B}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(B){if(B.hasStart()){const t=B.getIndexStartName();return B.getIndex().makePost(B.getIndexStartValue(),t)}else return B.getIndex().minPost()}static getEndPost_(B){if(B.hasEnd()){const t=B.getIndexEndName();return B.getIndex().makePost(B.getIndexEndValue(),t)}else return B.getIndex().maxPost()}}/**
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
*/class EH{constructor(B){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const C=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?C<=0:C<0},this.withinEndPost=t=>{const C=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?C<=0:C<0},this.rangedFilter_=new ji(B),this.index_=B.getIndex(),this.limit_=B.getLimit(),this.reverse_=!B.isViewFromLeft(),this.startIsInclusive_=!B.startAfterSet_,this.endIsInclusive_=!B.endBeforeSet_}updateChild(B,t,C,n,r,i){return this.rangedFilter_.matches(new Y(t,C))||(C=K.EMPTY_NODE),B.getImmediateChild(t).equals(C)?B:B.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(B,t,C,n,r,i):this.fullLimitUpdateChild_(B,t,C,r,i)}updateFullNode(B,t,C){let n;if(t.isLeafNode()||t.isEmpty())n=K.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){n=K.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let i=0;for(;r.hasNext()&&i<this.limit_;){const s=r.getNext();if(this.withinDirectionalStart(s))if(this.withinDirectionalEnd(s))n=n.updateImmediateChild(s.name,s.node),i++;else break;else continue}}else{n=t.withIndex(this.index_),n=n.updatePriority(K.EMPTY_NODE);let r;this.reverse_?r=n.getReverseIterator(this.index_):r=n.getIterator(this.index_);let i=0;for(;r.hasNext();){const s=r.getNext();i<this.limit_&&this.withinDirectionalStart(s)&&this.withinDirectionalEnd(s)?i++:n=n.updateImmediateChild(s.name,K.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(B,n,C)}updatePriority(B,t){return B}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(B,t,C,n,r){let i;if(this.reverse_){const l=this.index_.getCompare();i=(u,m)=>l(m,u)}else i=this.index_.getCompare();const s=B;k(s.numChildren()===this.limit_,"");const a=new Y(t,C),o=this.reverse_?s.getFirstChild(this.index_):s.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(s.hasChild(t)){const l=s.getImmediateChild(t);let u=n.getChildAfterChild(this.index_,o,this.reverse_);for(;u!=null&&(u.name===t||s.hasChild(u.name));)u=n.getChildAfterChild(this.index_,u,this.reverse_);const m=u==null?1:i(u,a);if(c&&!C.isEmpty()&&m>=0)return r!=null&&r.trackChildChange(Wi(t,C,l)),s.updateImmediateChild(t,C);{r!=null&&r.trackChildChange(Vi(t,l));const d=s.updateImmediateChild(t,K.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(r!=null&&r.trackChildChange(fr(u.name,u.node)),d.updateImmediateChild(u.name,u.node)):d}}else return C.isEmpty()?B:c&&i(o,a)>=0?(r!=null&&(r.trackChildChange(Vi(o.name,o.node)),r.trackChildChange(fr(t,C))),s.updateImmediateChild(t,C).updateImmediateChild(o.name,K.EMPTY_NODE)):B}}/**
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
*/class lf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=SB}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:hr}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:cn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===SB}copy(){const B=new lf;return B.limitSet_=this.limitSet_,B.limit_=this.limit_,B.startSet_=this.startSet_,B.startAfterSet_=this.startAfterSet_,B.indexStartValue_=this.indexStartValue_,B.startNameSet_=this.startNameSet_,B.indexStartName_=this.indexStartName_,B.endSet_=this.endSet_,B.endBeforeSet_=this.endBeforeSet_,B.indexEndValue_=this.indexEndValue_,B.endNameSet_=this.endNameSet_,B.indexEndName_=this.indexEndName_,B.index_=this.index_,B.viewFrom_=this.viewFrom_,B}}function IH(e){return e.loadsAllData()?new of(e.getIndex()):e.hasLimit()?new EH(e):new ji(e)}function Hm(e){const B={};if(e.isDefault())return B;let t;if(e.index_===SB?t="$priority":e.index_===vH?t="$value":e.index_===tr?t="$key":(k(e.index_ instanceof bH,"Unrecognized index type!"),t=e.index_.toString()),B.orderBy=FB(t),e.startSet_){const C=e.startAfterSet_?"startAfter":"startAt";B[C]=FB(e.indexStartValue_),e.startNameSet_&&(B[C]+=","+FB(e.indexStartName_))}if(e.endSet_){const C=e.endBeforeSet_?"endBefore":"endAt";B[C]=FB(e.indexEndValue_),e.endNameSet_&&(B[C]+=","+FB(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?B.limitToFirst=e.limit_:B.limitToLast=e.limit_),B}function Mm(e){const B={};if(e.startSet_&&(B.sp=e.indexStartValue_,e.startNameSet_&&(B.sn=e.indexStartName_),B.sin=!e.startAfterSet_),e.endSet_&&(B.ep=e.indexEndValue_,e.endNameSet_&&(B.en=e.indexEndName_),B.ein=!e.endBeforeSet_),e.limitSet_){B.l=e.limit_;let t=e.viewFrom_;t===""&&(e.isViewFromLeft()?t="l":t="r"),B.vf=t}return e.index_!==SB&&(B.i=e.index_.toString()),B}/**
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
*/class Vo extends Uy{constructor(B,t,C,n){super(),this.repoInfo_=B,this.onDataUpdate_=t,this.authTokenProvider_=C,this.appCheckTokenProvider_=n,this.log_=As("p:rest:"),this.listens_={}}reportStats(B){throw new Error("Method not implemented.")}static getListenId_(B,t){return t!==void 0?"tag$"+t:(k(B._queryParams.isDefault(),"should have a tag if it's not a default query."),B._path.toString())}listen(B,t,C,n){const r=B._path.toString();this.log_("Listen called for "+r+" "+B._queryIdentifier);const i=Vo.getListenId_(B,C),s={};this.listens_[i]=s;const a=Hm(B._queryParams);this.restRequest_(r+".json",a,(o,c)=>{let l=c;if(o===404&&(l=null,o=null),o===null&&this.onDataUpdate_(r,l,!1,C),ur(this.listens_,i)===s){let u;o?o===401?u="permission_denied":u="rest_error:"+o:u="ok",n(u,null)}})}unlisten(B,t){const C=Vo.getListenId_(B,t);delete this.listens_[C]}get(B){const t=Hm(B._queryParams),C=B._path.toString(),n=new Ol;return this.restRequest_(C+".json",t,(r,i)=>{let s=i;r===404&&(s=null,r=null),r===null?(this.onDataUpdate_(C,s,!1,null),n.resolve(s)):n.reject(new Error(s))}),n.promise}refreshAuthToken(B){}restRequest_(B,t={},C){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([n,r])=>{n&&n.accessToken&&(t.auth=n.accessToken),r&&r.token&&(t.ac=r.token);const i=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+B+"?ns="+this.repoInfo_.namespace+Sr(t);this.log_("Sending REST request for "+i);const s=new XMLHttpRequest;s.onreadystatechange=()=>{if(C&&s.readyState===4){this.log_("REST Response for "+i+" received. status:",s.status,"response:",s.responseText);let a=null;if(s.status>=200&&s.status<300){try{a=Gi(s.responseText)}catch{pe("Failed to parse JSON response for "+i+": "+s.responseText)}C(null,a)}else s.status!==401&&s.status!==404&&pe("Got unsuccessful REST response for "+i+" Status: "+s.status),C(s.status);C=null}},s.open("GET",i,!0),s.send()})}}/**
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
*/class SH{constructor(){this.rootNode_=K.EMPTY_NODE}getNode(B){return this.rootNode_.getChild(B)}updateSnapshot(B,t){this.rootNode_=this.rootNode_.updateChild(B,t)}}/**
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
*/function Wo(){return{value:null,children:new Map}}function tE(e,B,t){if(X(B))e.value=t,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(B,t);else{const C=Z(B);e.children.has(C)||e.children.set(C,Wo());const n=e.children.get(C);B=aB(B),tE(n,B,t)}}function X1(e,B,t){e.value!==null?t(B,e.value):wH(e,(C,n)=>{const r=new iB(B.toString()+"/"+C);X1(n,r,t)})}function wH(e,B){e.children.forEach((t,C)=>{B(C,t)})}/**
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
*/class DH{constructor(B){this.collection_=B,this.last_=null}get(){const B=this.collection_.get(),t=Object.assign({},B);return this.last_&&me(this.last_,(C,n)=>{t[C]=t[C]-n}),this.last_=B,t}}/**
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
*/const Lm=10*1e3,kH=30*1e3,PH=5*60*1e3;class NH{constructor(B,t){this.server_=t,this.statsToReport_={},this.statsListener_=new DH(B);const C=Lm+(kH-Lm)*Math.random();di(this.reportStats_.bind(this),Math.floor(C))}reportStats_(){const B=this.statsListener_.get(),t={};let C=!1;me(B,(n,r)=>{r>0&&Vt(this.statsToReport_,n)&&(t[n]=r,C=!0)}),C&&this.server_.reportStats(t),di(this.reportStats_.bind(this),Math.floor(Math.random()*2*PH))}}/**
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
*/var ze;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ze||(ze={}));function CE(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function cf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function uf(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
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
*/class jo{constructor(B,t,C){this.path=B,this.affectedTree=t,this.revert=C,this.type=ze.ACK_USER_WRITE,this.source=CE()}operationForChild(B){if(X(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new iB(B));return new jo($(),t,this.revert)}}else return k(Z(this.path)===B,"operationForChild called for unrelated child."),new jo(aB(this.path),this.affectedTree,this.revert)}}/**
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
*/class Yi{constructor(B,t){this.source=B,this.path=t,this.type=ze.LISTEN_COMPLETE}operationForChild(B){return X(this.path)?new Yi(this.source,$()):new Yi(this.source,aB(this.path))}}/**
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
*/class un{constructor(B,t,C){this.source=B,this.path=t,this.snap=C,this.type=ze.OVERWRITE}operationForChild(B){return X(this.path)?new un(this.source,$(),this.snap.getImmediateChild(B)):new un(this.source,aB(this.path),this.snap)}}/**
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
*/class Xi{constructor(B,t,C){this.source=B,this.path=t,this.children=C,this.type=ze.MERGE}operationForChild(B){if(X(this.path)){const t=this.children.subtree(new iB(B));return t.isEmpty()?null:t.value?new un(this.source,$(),t.value):new Xi(this.source,$(),t)}else return k(Z(this.path)===B,"Can't get a merge for a child not on the path of the operation"),new Xi(this.source,aB(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
*/class wC{constructor(B,t,C){this.node_=B,this.fullyInitialized_=t,this.filtered_=C}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(B){if(X(B))return this.isFullyInitialized()&&!this.filtered_;const t=Z(B);return this.isCompleteForChild(t)}isCompleteForChild(B){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(B)}getNode(){return this.node_}}/**
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
*/class FH{constructor(B){this.query_=B,this.index_=this.query_._queryParams.getIndex()}}function OH(e,B,t,C){const n=[],r=[];return B.forEach(i=>{i.type==="child_changed"&&e.index_.indexedValueChanged(i.oldSnap,i.snapshotNode)&&r.push(yH(i.childName,i.snapshotNode))}),Vr(e,n,"child_removed",B,C,t),Vr(e,n,"child_added",B,C,t),Vr(e,n,"child_moved",r,C,t),Vr(e,n,"child_changed",B,C,t),Vr(e,n,"value",B,C,t),n}function Vr(e,B,t,C,n,r){const i=C.filter(s=>s.type===t);i.sort((s,a)=>HH(e,s,a)),i.forEach(s=>{const a=RH(e,s,r);n.forEach(o=>{o.respondsTo(s.type)&&B.push(o.createEvent(a,e.query_))})})}function RH(e,B,t){return B.type==="value"||B.type==="child_removed"||(B.prevName=t.getPredecessorChildName(B.childName,B.snapshotNode,e.index_)),B}function HH(e,B,t){if(B.childName==null||t.childName==null)throw Ir("Should only compare child_ events.");const C=new Y(B.childName,B.snapshotNode),n=new Y(t.childName,t.snapshotNode);return e.index_.compare(C,n)}/**
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
*/function Jl(e,B){return{eventCache:e,serverCache:B}}function hi(e,B,t,C){return Jl(new wC(B,t,C),e.serverCache)}function nE(e,B,t,C){return Jl(e.eventCache,new wC(B,t,C))}function Yo(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function dn(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
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
*/let iu;const MH=()=>(iu||(iu=new ce(A4)),iu);class dB{constructor(B,t=MH()){this.value=B,this.children=t}static fromObject(B){let t=new dB(null);return me(B,(C,n)=>{t=t.set(new iB(C),n)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(B,t){if(this.value!=null&&t(this.value))return{path:$(),value:this.value};if(X(B))return null;{const C=Z(B),n=this.children.get(C);if(n!==null){const r=n.findRootMostMatchingPathAndValue(aB(B),t);return r!=null?{path:OB(new iB(C),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(B){return this.findRootMostMatchingPathAndValue(B,()=>!0)}subtree(B){if(X(B))return this;{const t=Z(B),C=this.children.get(t);return C!==null?C.subtree(aB(B)):new dB(null)}}set(B,t){if(X(B))return new dB(t,this.children);{const C=Z(B),n=(this.children.get(C)||new dB(null)).set(aB(B),t),r=this.children.insert(C,n);return new dB(this.value,r)}}remove(B){if(X(B))return this.children.isEmpty()?new dB(null):new dB(null,this.children);{const t=Z(B),C=this.children.get(t);if(C){const n=C.remove(aB(B));let r;return n.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,n),this.value===null&&r.isEmpty()?new dB(null):new dB(this.value,r)}else return this}}get(B){if(X(B))return this.value;{const t=Z(B),C=this.children.get(t);return C?C.get(aB(B)):null}}setTree(B,t){if(X(B))return t;{const C=Z(B),n=(this.children.get(C)||new dB(null)).setTree(aB(B),t);let r;return n.isEmpty()?r=this.children.remove(C):r=this.children.insert(C,n),new dB(this.value,r)}}fold(B){return this.fold_($(),B)}fold_(B,t){const C={};return this.children.inorderTraversal((n,r)=>{C[n]=r.fold_(OB(B,n),t)}),t(B,this.value,C)}findOnPath(B,t){return this.findOnPath_(B,$(),t)}findOnPath_(B,t,C){const n=this.value?C(t,this.value):!1;if(n)return n;if(X(B))return null;{const r=Z(B),i=this.children.get(r);return i?i.findOnPath_(aB(B),OB(t,r),C):null}}foreachOnPath(B,t){return this.foreachOnPath_(B,$(),t)}foreachOnPath_(B,t,C){if(X(B))return this;{this.value&&C(t,this.value);const n=Z(B),r=this.children.get(n);return r?r.foreachOnPath_(aB(B),OB(t,n),C):new dB(null)}}foreach(B){this.foreach_($(),B)}foreach_(B,t){this.children.inorderTraversal((C,n)=>{n.foreach_(OB(B,C),t)}),this.value&&t(B,this.value)}foreachChild(B){this.children.inorderTraversal((t,C)=>{C.value&&B(t,C.value)})}}/**
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
*/class Ct{constructor(B){this.writeTree_=B}static empty(){return new Ct(new dB(null))}}function fi(e,B,t){if(X(B))return new Ct(new dB(t));{const C=e.writeTree_.findRootMostValueAndPath(B);if(C!=null){const n=C.path;let r=C.value;const i=ee(n,B);return r=r.updateChild(i,t),new Ct(e.writeTree_.set(n,r))}else{const n=new dB(t),r=e.writeTree_.setTree(B,n);return new Ct(r)}}}function Tm(e,B,t){let C=e;return me(t,(n,r)=>{C=fi(C,OB(B,n),r)}),C}function Gm(e,B){if(X(B))return Ct.empty();{const t=e.writeTree_.setTree(B,new dB(null));return new Ct(t)}}function Z1(e,B){return vn(e,B)!=null}function vn(e,B){const t=e.writeTree_.findRootMostValueAndPath(B);return t!=null?e.writeTree_.get(t.path).getChild(ee(t.path,B)):null}function xm(e){const B=[],t=e.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(SB,(C,n)=>{B.push(new Y(C,n))}):e.writeTree_.children.inorderTraversal((C,n)=>{n.value!=null&&B.push(new Y(C,n.value))}),B}function AC(e,B){if(X(B))return e;{const t=vn(e,B);return t!=null?new Ct(new dB(t)):new Ct(e.writeTree_.subtree(B))}}function q1(e){return e.writeTree_.isEmpty()}function pr(e,B){return rE($(),e.writeTree_,B)}function rE(e,B,t){if(B.value!=null)return t.updateChild(e,B.value);{let C=null;return B.children.inorderTraversal((n,r)=>{n===".priority"?(k(r.value!==null,"Priority writes must always be leaf nodes"),C=r.value):t=rE(OB(e,n),r,t)}),!t.getChild(e).isEmpty()&&C!==null&&(t=t.updateChild(OB(e,".priority"),C)),t}}/**
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
*/function Ul(e,B){return oE(B,e)}function LH(e,B,t,C,n){k(C>e.lastWriteId,"Stacking an older write on top of newer ones"),n===void 0&&(n=!0),e.allWrites.push({path:B,snap:t,writeId:C,visible:n}),n&&(e.visibleWrites=fi(e.visibleWrites,B,t)),e.lastWriteId=C}function TH(e,B){for(let t=0;t<e.allWrites.length;t++){const C=e.allWrites[t];if(C.writeId===B)return C}return null}function GH(e,B){const t=e.allWrites.findIndex(s=>s.writeId===B);k(t>=0,"removeWrite called with nonexistent writeId.");const C=e.allWrites[t];e.allWrites.splice(t,1);let n=C.visible,r=!1,i=e.allWrites.length-1;for(;n&&i>=0;){const s=e.allWrites[i];s.visible&&(i>=t&&xH(s,C.path)?n=!1:qe(C.path,s.path)&&(r=!0)),i--}if(n){if(r)return KH(e),!0;if(C.snap)e.visibleWrites=Gm(e.visibleWrites,C.path);else{const s=C.children;me(s,a=>{e.visibleWrites=Gm(e.visibleWrites,OB(C.path,a))})}return!0}else return!1}function xH(e,B){if(e.snap)return qe(e.path,B);for(const t in e.children)if(e.children.hasOwnProperty(t)&&qe(OB(e.path,t),B))return!0;return!1}function KH(e){e.visibleWrites=iE(e.allWrites,QH,$()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function QH(e){return e.visible}function iE(e,B,t){let C=Ct.empty();for(let n=0;n<e.length;++n){const r=e[n];if(B(r)){const i=r.path;let s;if(r.snap)qe(t,i)?(s=ee(t,i),C=fi(C,s,r.snap)):qe(i,t)&&(s=ee(i,t),C=fi(C,$(),r.snap.getChild(s)));else if(r.children){if(qe(t,i))s=ee(t,i),C=Tm(C,s,r.children);else if(qe(i,t))if(s=ee(i,t),X(s))C=Tm(C,$(),r.children);else{const a=ur(r.children,Z(s));if(a){const o=a.getChild(aB(s));C=fi(C,$(),o)}}}else throw Ir("WriteRecord should have .snap or .children")}}return C}function sE(e,B,t,C,n){if(!C&&!n){const r=vn(e.visibleWrites,B);if(r!=null)return r;{const i=AC(e.visibleWrites,B);if(q1(i))return t;if(t==null&&!Z1(i,$()))return null;{const s=t||K.EMPTY_NODE;return pr(i,s)}}}else{const r=AC(e.visibleWrites,B);if(!n&&q1(r))return t;if(!n&&t==null&&!Z1(r,$()))return null;{const i=function(o){return(o.visible||n)&&(!C||!~C.indexOf(o.writeId))&&(qe(o.path,B)||qe(B,o.path))},s=iE(e.allWrites,i,B),a=t||K.EMPTY_NODE;return pr(s,a)}}}function JH(e,B,t){let C=K.EMPTY_NODE;const n=vn(e.visibleWrites,B);if(n)return n.isLeafNode()||n.forEachChild(SB,(r,i)=>{C=C.updateImmediateChild(r,i)}),C;if(t){const r=AC(e.visibleWrites,B);return t.forEachChild(SB,(i,s)=>{const a=pr(AC(r,new iB(i)),s);C=C.updateImmediateChild(i,a)}),xm(r).forEach(i=>{C=C.updateImmediateChild(i.name,i.node)}),C}else{const r=AC(e.visibleWrites,B);return xm(r).forEach(i=>{C=C.updateImmediateChild(i.name,i.node)}),C}}function UH(e,B,t,C,n){k(C||n,"Either existingEventSnap or existingServerSnap must exist");const r=OB(B,t);if(Z1(e.visibleWrites,r))return null;{const i=AC(e.visibleWrites,r);return q1(i)?n.getChild(t):pr(i,n.getChild(t))}}function VH(e,B,t,C){const n=OB(B,t),r=vn(e.visibleWrites,n);if(r!=null)return r;if(C.isCompleteForChild(t)){const i=AC(e.visibleWrites,n);return pr(i,C.getNode().getImmediateChild(t))}else return null}function WH(e,B){return vn(e.visibleWrites,B)}function jH(e,B,t,C,n,r,i){let s;const a=AC(e.visibleWrites,B),o=vn(a,$());if(o!=null)s=o;else if(t!=null)s=pr(a,t);else return[];if(s=s.withIndex(i),!s.isEmpty()&&!s.isLeafNode()){const c=[],l=i.getCompare(),u=r?s.getReverseIteratorFrom(C,i):s.getIteratorFrom(C,i);let m=u.getNext();for(;m&&c.length<n;)l(m,C)!==0&&c.push(m),m=u.getNext();return c}else return[]}function YH(){return{visibleWrites:Ct.empty(),allWrites:[],lastWriteId:-1}}function Xo(e,B,t,C){return sE(e.writeTree,e.treePath,B,t,C)}function df(e,B){return JH(e.writeTree,e.treePath,B)}function Km(e,B,t,C){return UH(e.writeTree,e.treePath,B,t,C)}function Zo(e,B){return WH(e.writeTree,OB(e.treePath,B))}function XH(e,B,t,C,n,r){return jH(e.writeTree,e.treePath,B,t,C,n,r)}function hf(e,B,t){return VH(e.writeTree,e.treePath,B,t)}function aE(e,B){return oE(OB(e.treePath,B),e.writeTree)}function oE(e,B){return{treePath:e,writeTree:B}}/**
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
*/class ZH{constructor(){this.changeMap=new Map}trackChildChange(B){const t=B.type,C=B.childName;k(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),k(C!==".priority","Only non-priority child changes can be tracked.");const n=this.changeMap.get(C);if(n){const r=n.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(C,Wi(C,B.snapshotNode,n.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(C);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(C,Vi(C,n.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(C,fr(C,B.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(C,Wi(C,B.snapshotNode,n.oldSnap));else throw Ir("Illegal combination of changes: "+B+" occurred after "+n)}else this.changeMap.set(C,B)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
*/class qH{getCompleteChild(B){return null}getChildAfterChild(B,t,C){return null}}const lE=new qH;class ff{constructor(B,t,C=null){this.writes_=B,this.viewCache_=t,this.optCompleteServerCache_=C}getCompleteChild(B){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(B))return t.getNode().getImmediateChild(B);{const C=this.optCompleteServerCache_!=null?new wC(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return hf(this.writes_,B,C)}}getChildAfterChild(B,t,C){const n=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:dn(this.viewCache_),r=XH(this.writes_,n,t,1,C,B);return r.length===0?null:r[0]}}/**
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
*/function zH(e){return{filter:e}}function _H(e,B){k(B.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),k(B.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function $H(e,B,t,C,n){const r=new ZH;let i,s;if(t.type===ze.OVERWRITE){const o=t;o.source.fromUser?i=z1(e,B,o.path,o.snap,C,n,r):(k(o.source.fromServer,"Unknown source."),s=o.source.tagged||B.serverCache.isFiltered()&&!X(o.path),i=qo(e,B,o.path,o.snap,C,n,s,r))}else if(t.type===ze.MERGE){const o=t;o.source.fromUser?i=eM(e,B,o.path,o.children,C,n,r):(k(o.source.fromServer,"Unknown source."),s=o.source.tagged||B.serverCache.isFiltered(),i=_1(e,B,o.path,o.children,C,n,s,r))}else if(t.type===ze.ACK_USER_WRITE){const o=t;o.revert?i=nM(e,B,o.path,C,n,r):i=tM(e,B,o.path,o.affectedTree,C,n,r)}else if(t.type===ze.LISTEN_COMPLETE)i=CM(e,B,t.path,C,r);else throw Ir("Unknown operation type: "+t.type);const a=r.getChanges();return BM(B,i,a),{viewCache:i,changes:a}}function BM(e,B,t){const C=B.eventCache;if(C.isFullyInitialized()){const n=C.getNode().isLeafNode()||C.getNode().isEmpty(),r=Yo(e);(t.length>0||!e.eventCache.isFullyInitialized()||n&&!C.getNode().equals(r)||!C.getNode().getPriority().equals(r.getPriority()))&&t.push(eE(Yo(B)))}}function cE(e,B,t,C,n,r){const i=B.eventCache;if(Zo(C,t)!=null)return B;{let s,a;if(X(t))if(k(B.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),B.serverCache.isFiltered()){const o=dn(B),c=o instanceof K?o:K.EMPTY_NODE,l=df(C,c);s=e.filter.updateFullNode(B.eventCache.getNode(),l,r)}else{const o=Xo(C,dn(B));s=e.filter.updateFullNode(B.eventCache.getNode(),o,r)}else{const o=Z(t);if(o===".priority"){k(SC(t)===1,"Can't have a priority with additional path components");const c=i.getNode();a=B.serverCache.getNode();const l=Km(C,t,c,a);l!=null?s=e.filter.updatePriority(c,l):s=i.getNode()}else{const c=aB(t);let l;if(i.isCompleteForChild(o)){a=B.serverCache.getNode();const u=Km(C,t,i.getNode(),a);u!=null?l=i.getNode().getImmediateChild(o).updateChild(c,u):l=i.getNode().getImmediateChild(o)}else l=hf(C,o,B.serverCache);l!=null?s=e.filter.updateChild(i.getNode(),o,l,c,n,r):s=i.getNode()}}return hi(B,s,i.isFullyInitialized()||X(t),e.filter.filtersNodes())}}function qo(e,B,t,C,n,r,i,s){const a=B.serverCache;let o;const c=i?e.filter:e.filter.getIndexedFilter();if(X(t))o=c.updateFullNode(a.getNode(),C,null);else if(c.filtersNodes()&&!a.isFiltered()){const m=a.getNode().updateChild(t,C);o=c.updateFullNode(a.getNode(),m,null)}else{const m=Z(t);if(!a.isCompleteForPath(t)&&SC(t)>1)return B;const d=aB(t),f=a.getNode().getImmediateChild(m).updateChild(d,C);m===".priority"?o=c.updatePriority(a.getNode(),f):o=c.updateChild(a.getNode(),m,f,d,lE,null)}const l=nE(B,o,a.isFullyInitialized()||X(t),c.filtersNodes()),u=new ff(n,l,r);return cE(e,l,t,n,u,s)}function z1(e,B,t,C,n,r,i){const s=B.eventCache;let a,o;const c=new ff(n,B,r);if(X(t))o=e.filter.updateFullNode(B.eventCache.getNode(),C,i),a=hi(B,o,!0,e.filter.filtersNodes());else{const l=Z(t);if(l===".priority")o=e.filter.updatePriority(B.eventCache.getNode(),C),a=hi(B,o,s.isFullyInitialized(),s.isFiltered());else{const u=aB(t),m=s.getNode().getImmediateChild(l);let d;if(X(u))d=C;else{const f=c.getCompleteChild(l);f!=null?Wy(u)===".priority"&&f.getChild(Yy(u)).isEmpty()?d=f:d=f.updateChild(u,C):d=K.EMPTY_NODE}if(m.equals(d))a=B;else{const f=e.filter.updateChild(s.getNode(),l,d,u,c,i);a=hi(B,f,s.isFullyInitialized(),e.filter.filtersNodes())}}}return a}function Qm(e,B){return e.eventCache.isCompleteForChild(B)}function eM(e,B,t,C,n,r,i){let s=B;return C.foreach((a,o)=>{const c=OB(t,a);Qm(B,Z(c))&&(s=z1(e,s,c,o,n,r,i))}),C.foreach((a,o)=>{const c=OB(t,a);Qm(B,Z(c))||(s=z1(e,s,c,o,n,r,i))}),s}function Jm(e,B,t){return t.foreach((C,n)=>{B=B.updateChild(C,n)}),B}function _1(e,B,t,C,n,r,i,s){if(B.serverCache.getNode().isEmpty()&&!B.serverCache.isFullyInitialized())return B;let a=B,o;X(t)?o=C:o=new dB(null).setTree(t,C);const c=B.serverCache.getNode();return o.children.inorderTraversal((l,u)=>{if(c.hasChild(l)){const m=B.serverCache.getNode().getImmediateChild(l),d=Jm(e,m,u);a=qo(e,a,new iB(l),d,n,r,i,s)}}),o.children.inorderTraversal((l,u)=>{const m=!B.serverCache.isCompleteForChild(l)&&u.value===null;if(!c.hasChild(l)&&!m){const d=B.serverCache.getNode().getImmediateChild(l),f=Jm(e,d,u);a=qo(e,a,new iB(l),f,n,r,i,s)}}),a}function tM(e,B,t,C,n,r,i){if(Zo(n,t)!=null)return B;const s=B.serverCache.isFiltered(),a=B.serverCache;if(C.value!=null){if(X(t)&&a.isFullyInitialized()||a.isCompleteForPath(t))return qo(e,B,t,a.getNode().getChild(t),n,r,s,i);if(X(t)){let o=new dB(null);return a.getNode().forEachChild(tr,(c,l)=>{o=o.set(new iB(c),l)}),_1(e,B,t,o,n,r,s,i)}else return B}else{let o=new dB(null);return C.foreach((c,l)=>{const u=OB(t,c);a.isCompleteForPath(u)&&(o=o.set(c,a.getNode().getChild(u)))}),_1(e,B,t,o,n,r,s,i)}}function CM(e,B,t,C,n){const r=B.serverCache,i=nE(B,r.getNode(),r.isFullyInitialized()||X(t),r.isFiltered());return cE(e,i,t,C,lE,n)}function nM(e,B,t,C,n,r){let i;if(Zo(C,t)!=null)return B;{const s=new ff(C,B,n),a=B.eventCache.getNode();let o;if(X(t)||Z(t)===".priority"){let c;if(B.serverCache.isFullyInitialized())c=Xo(C,dn(B));else{const l=B.serverCache.getNode();k(l instanceof K,"serverChildren would be complete if leaf node"),c=df(C,l)}c=c,o=e.filter.updateFullNode(a,c,r)}else{const c=Z(t);let l=hf(C,c,B.serverCache);l==null&&B.serverCache.isCompleteForChild(c)&&(l=a.getImmediateChild(c)),l!=null?o=e.filter.updateChild(a,c,l,aB(t),s,r):B.eventCache.getNode().hasChild(c)?o=e.filter.updateChild(a,c,K.EMPTY_NODE,aB(t),s,r):o=a,o.isEmpty()&&B.serverCache.isFullyInitialized()&&(i=Xo(C,dn(B)),i.isLeafNode()&&(o=e.filter.updateFullNode(o,i,r)))}return i=B.serverCache.isFullyInitialized()||Zo(C,$())!=null,hi(B,o,i,e.filter.filtersNodes())}}/**
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
*/class rM{constructor(B,t){this.query_=B,this.eventRegistrations_=[];const C=this.query_._queryParams,n=new of(C.getIndex()),r=IH(C);this.processor_=zH(r);const i=t.serverCache,s=t.eventCache,a=n.updateFullNode(K.EMPTY_NODE,i.getNode(),null),o=r.updateFullNode(K.EMPTY_NODE,s.getNode(),null),c=new wC(a,i.isFullyInitialized(),n.filtersNodes()),l=new wC(o,s.isFullyInitialized(),r.filtersNodes());this.viewCache_=Jl(l,c),this.eventGenerator_=new FH(this.query_)}get query(){return this.query_}}function iM(e){return e.viewCache_.serverCache.getNode()}function sM(e){return Yo(e.viewCache_)}function aM(e,B){const t=dn(e.viewCache_);return t&&(e.query._queryParams.loadsAllData()||!X(B)&&!t.getImmediateChild(Z(B)).isEmpty())?t.getChild(B):null}function Um(e){return e.eventRegistrations_.length===0}function oM(e,B){e.eventRegistrations_.push(B)}function Vm(e,B,t){const C=[];if(t){k(B==null,"A cancel should cancel all event registrations.");const n=e.query._path;e.eventRegistrations_.forEach(r=>{const i=r.createCancelEvent(t,n);i&&C.push(i)})}if(B){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(!i.matches(B))n.push(i);else if(B.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}e.eventRegistrations_=n}else e.eventRegistrations_=[];return C}function Wm(e,B,t,C){B.type===ze.MERGE&&B.source.queryId!==null&&(k(dn(e.viewCache_),"We should always have a full cache before handling merges"),k(Yo(e.viewCache_),"Missing event cache, even though we have a server cache"));const n=e.viewCache_,r=$H(e.processor_,n,B,t,C);return _H(e.processor_,r.viewCache),k(r.viewCache.serverCache.isFullyInitialized()||!n.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=r.viewCache,uE(e,r.changes,r.viewCache.eventCache.getNode(),null)}function lM(e,B){const t=e.viewCache_.eventCache,C=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(SB,(n,r)=>{C.push(fr(n,r))}),t.isFullyInitialized()&&C.push(eE(t.getNode())),uE(e,C,t.getNode(),B)}function uE(e,B,t,C){const n=C?[C]:e.eventRegistrations_;return OH(e.eventGenerator_,B,t,n)}/**
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
*/let zo;class dE{constructor(){this.views=new Map}}function cM(e){k(!zo,"__referenceConstructor has already been defined"),zo=e}function uM(){return k(zo,"Reference.ts has not been loaded"),zo}function dM(e){return e.views.size===0}function pf(e,B,t,C){const n=B.source.queryId;if(n!==null){const r=e.views.get(n);return k(r!=null,"SyncTree gave us an op for an invalid query."),Wm(r,B,t,C)}else{let r=[];for(const i of e.views.values())r=r.concat(Wm(i,B,t,C));return r}}function hE(e,B,t,C,n){const r=B._queryIdentifier,i=e.views.get(r);if(!i){let s=Xo(t,n?C:null),a=!1;s?a=!0:C instanceof K?(s=df(t,C),a=!1):(s=K.EMPTY_NODE,a=!1);const o=Jl(new wC(s,a,!1),new wC(C,n,!1));return new rM(B,o)}return i}function hM(e,B,t,C,n,r){const i=hE(e,B,C,n,r);return e.views.has(B._queryIdentifier)||e.views.set(B._queryIdentifier,i),oM(i,t),lM(i,t)}function fM(e,B,t,C){const n=B._queryIdentifier,r=[];let i=[];const s=DC(e);if(n==="default")for(const[a,o]of e.views.entries())i=i.concat(Vm(o,t,C)),Um(o)&&(e.views.delete(a),o.query._queryParams.loadsAllData()||r.push(o.query));else{const a=e.views.get(n);a&&(i=i.concat(Vm(a,t,C)),Um(a)&&(e.views.delete(n),a.query._queryParams.loadsAllData()||r.push(a.query)))}return s&&!DC(e)&&r.push(new(uM())(B._repo,B._path)),{removed:r,events:i}}function fE(e){const B=[];for(const t of e.views.values())t.query._queryParams.loadsAllData()||B.push(t);return B}function vC(e,B){let t=null;for(const C of e.views.values())t=t||aM(C,B);return t}function pE(e,B){if(B._queryParams.loadsAllData())return Vl(e);{const t=B._queryIdentifier;return e.views.get(t)}}function mE(e,B){return pE(e,B)!=null}function DC(e){return Vl(e)!=null}function Vl(e){for(const B of e.views.values())if(B.query._queryParams.loadsAllData())return B;return null}/**
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
*/let _o;function pM(e){k(!_o,"__referenceConstructor has already been defined"),_o=e}function mM(){return k(_o,"Reference.ts has not been loaded"),_o}let gM=1;class jm{constructor(B){this.listenProvider_=B,this.syncPointTree_=new dB(null),this.pendingWriteTree_=YH(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function gE(e,B,t,C,n){return LH(e.pendingWriteTree_,B,t,C,n),n?Es(e,new un(CE(),B,t)):[]}function YC(e,B,t=!1){const C=TH(e.pendingWriteTree_,B);if(GH(e.pendingWriteTree_,B)){let n=new dB(null);return C.snap!=null?n=n.set($(),!0):me(C.children,r=>{n=n.set(new iB(r),!0)}),Es(e,new jo(C.path,n,t))}else return[]}function ys(e,B,t){return Es(e,new un(cf(),B,t))}function bM(e,B,t){const C=dB.fromObject(t);return Es(e,new Xi(cf(),B,C))}function AM(e,B){return Es(e,new Yi(cf(),B))}function vM(e,B,t){const C=gf(e,t);if(C){const n=bf(C),r=n.path,i=n.queryId,s=ee(r,B),a=new Yi(uf(i),s);return Af(e,r,a)}else return[]}function bE(e,B,t,C,n=!1){const r=B._path,i=e.syncPointTree_.get(r);let s=[];if(i&&(B._queryIdentifier==="default"||mE(i,B))){const a=fM(i,B,t,C);dM(i)&&(e.syncPointTree_=e.syncPointTree_.remove(r));const o=a.removed;if(s=a.events,!n){const c=o.findIndex(u=>u._queryParams.loadsAllData())!==-1,l=e.syncPointTree_.findOnPath(r,(u,m)=>DC(m));if(c&&!l){const u=e.syncPointTree_.subtree(r);if(!u.isEmpty()){const m=SM(u);for(let d=0;d<m.length;++d){const f=m[d],g=f.query,h=EE(e,f);e.listenProvider_.startListening(pi(g),Zi(e,g),h.hashFn,h.onComplete)}}}!l&&o.length>0&&!C&&(c?e.listenProvider_.stopListening(pi(B),null):o.forEach(u=>{const m=e.queryToTagMap.get(Wl(u));e.listenProvider_.stopListening(pi(u),m)}))}wM(e,o)}return s}function AE(e,B,t,C){const n=gf(e,C);if(n!=null){const r=bf(n),i=r.path,s=r.queryId,a=ee(i,B),o=new un(uf(s),a,t);return Af(e,i,o)}else return[]}function yM(e,B,t,C){const n=gf(e,C);if(n){const r=bf(n),i=r.path,s=r.queryId,a=ee(i,B),o=dB.fromObject(t),c=new Xi(uf(s),a,o);return Af(e,i,c)}else return[]}function EM(e,B,t,C=!1){const n=B._path;let r=null,i=!1;e.syncPointTree_.foreachOnPath(n,(u,m)=>{const d=ee(u,n);r=r||vC(m,d),i=i||DC(m)});let s=e.syncPointTree_.get(n);s?(i=i||DC(s),r=r||vC(s,$())):(s=new dE,e.syncPointTree_=e.syncPointTree_.set(n,s));let a;r!=null?a=!0:(a=!1,r=K.EMPTY_NODE,e.syncPointTree_.subtree(n).foreachChild((u,m)=>{const d=vC(m,$());d&&(r=r.updateImmediateChild(u,d))}));const o=mE(s,B);if(!o&&!B._queryParams.loadsAllData()){const u=Wl(B);k(!e.queryToTagMap.has(u),"View does not exist, but we have a tag");const m=DM();e.queryToTagMap.set(u,m),e.tagToQueryMap.set(m,u)}const c=Ul(e.pendingWriteTree_,n);let l=hM(s,B,t,c,r,a);if(!o&&!i&&!C){const u=pE(s,B);l=l.concat(kM(e,B,u))}return l}function mf(e,B,t){const C=e.pendingWriteTree_,n=e.syncPointTree_.findOnPath(B,(r,i)=>{const s=ee(r,B),a=vC(i,s);if(a)return a});return sE(C,B,n,t,!0)}function IM(e,B){const t=B._path;let C=null;e.syncPointTree_.foreachOnPath(t,(o,c)=>{const l=ee(o,t);C=C||vC(c,l)});let n=e.syncPointTree_.get(t);n?C=C||vC(n,$()):(n=new dE,e.syncPointTree_=e.syncPointTree_.set(t,n));const r=C!=null,i=r?new wC(C,!0,!1):null,s=Ul(e.pendingWriteTree_,B._path),a=hE(n,B,s,r?i.getNode():K.EMPTY_NODE,r);return sM(a)}function Es(e,B){return vE(B,e.syncPointTree_,null,Ul(e.pendingWriteTree_,$()))}function vE(e,B,t,C){if(X(e.path))return yE(e,B,t,C);{const n=B.get($());t==null&&n!=null&&(t=vC(n,$()));let r=[];const i=Z(e.path),s=e.operationForChild(i),a=B.children.get(i);if(a&&s){const o=t?t.getImmediateChild(i):null,c=aE(C,i);r=r.concat(vE(s,a,o,c))}return n&&(r=r.concat(pf(n,e,C,t))),r}}function yE(e,B,t,C){const n=B.get($());t==null&&n!=null&&(t=vC(n,$()));let r=[];return B.children.inorderTraversal((i,s)=>{const a=t?t.getImmediateChild(i):null,o=aE(C,i),c=e.operationForChild(i);c&&(r=r.concat(yE(c,s,a,o)))}),n&&(r=r.concat(pf(n,e,C,t))),r}function EE(e,B){const t=B.query,C=Zi(e,t);return{hashFn:()=>(iM(B)||K.EMPTY_NODE).hash(),onComplete:n=>{if(n==="ok")return C?vM(e,t._path,C):AM(e,t._path);{const r=E4(n,t);return bE(e,t,null,r)}}}}function Zi(e,B){const t=Wl(B);return e.queryToTagMap.get(t)}function Wl(e){return e._path.toString()+"$"+e._queryIdentifier}function gf(e,B){return e.tagToQueryMap.get(B)}function bf(e){const B=e.indexOf("$");return k(B!==-1&&B<e.length-1,"Bad queryKey."),{queryId:e.substr(B+1),path:new iB(e.substr(0,B))}}function Af(e,B,t){const C=e.syncPointTree_.get(B);k(C,"Missing sync point for query tag that we're tracking");const n=Ul(e.pendingWriteTree_,B);return pf(C,t,n,null)}function SM(e){return e.fold((B,t,C)=>{if(t&&DC(t))return[Vl(t)];{let n=[];return t&&(n=fE(t)),me(C,(r,i)=>{n=n.concat(i)}),n}})}function pi(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(mM())(e._repo,e._path):e}function wM(e,B){for(let t=0;t<B.length;++t){const C=B[t];if(!C._queryParams.loadsAllData()){const n=Wl(C),r=e.queryToTagMap.get(n);e.queryToTagMap.delete(n),e.tagToQueryMap.delete(r)}}}function DM(){return gM++}function kM(e,B,t){const C=B._path,n=Zi(e,B),r=EE(e,t),i=e.listenProvider_.startListening(pi(B),n,r.hashFn,r.onComplete),s=e.syncPointTree_.subtree(C);if(n)k(!DC(s.value),"If we're adding a query, it shouldn't be shadowed");else{const a=s.fold((o,c,l)=>{if(!X(o)&&c&&DC(c))return[Vl(c).query];{let u=[];return c&&(u=u.concat(fE(c).map(m=>m.query))),me(l,(m,d)=>{u=u.concat(d)}),u}});for(let o=0;o<a.length;++o){const c=a[o];e.listenProvider_.stopListening(pi(c),Zi(e,c))}}return i}/**
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
*/class vf{constructor(B){this.node_=B}getImmediateChild(B){const t=this.node_.getImmediateChild(B);return new vf(t)}node(){return this.node_}}class yf{constructor(B,t){this.syncTree_=B,this.path_=t}getImmediateChild(B){const t=OB(this.path_,B);return new yf(this.syncTree_,t)}node(){return mf(this.syncTree_,this.path_)}}const PM=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},Ym=function(e,B,t){if(!e||typeof e!="object")return e;if(k(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return NM(e[".sv"],B,t);if(typeof e[".sv"]=="object")return FM(e[".sv"],B);k(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},NM=function(e,B,t){switch(e){case"timestamp":return t.timestamp;default:k(!1,"Unexpected server value: "+e)}},FM=function(e,B,t){e.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const C=e.increment;typeof C!="number"&&k(!1,"Unexpected increment value: "+C);const n=B.node();if(k(n!==null&&typeof n<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!n.isLeafNode())return C;const r=n.getValue();return typeof r!="number"?C:r+C},OM=function(e,B,t,C){return Ef(B,new yf(t,e),C)},IE=function(e,B,t){return Ef(e,new vf(B),t)};function Ef(e,B,t){const C=e.getPriority().val(),n=Ym(C,B.getImmediateChild(".priority"),t);let r;if(e.isLeafNode()){const i=e,s=Ym(i.getValue(),B,t);return s!==i.getValue()||n!==i.getPriority().val()?new LB(s,xB(n)):e}else{const i=e;return r=i,n!==i.getPriority().val()&&(r=r.updatePriority(new LB(n))),i.forEachChild(SB,(s,a)=>{const o=Ef(a,B.getImmediateChild(s),t);o!==a&&(r=r.updateImmediateChild(s,o))}),r}}/**
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
*/class If{constructor(B="",t=null,C={children:{},childCount:0}){this.name=B,this.parent=t,this.node=C}}function Sf(e,B){let t=B instanceof iB?B:new iB(B),C=e,n=Z(t);for(;n!==null;){const r=ur(C.node.children,n)||{children:{},childCount:0};C=new If(n,C,r),t=aB(t),n=Z(t)}return C}function Pr(e){return e.node.value}function SE(e,B){e.node.value=B,$1(e)}function wE(e){return e.node.childCount>0}function RM(e){return Pr(e)===void 0&&!wE(e)}function jl(e,B){me(e.node.children,(t,C)=>{B(new If(t,e,C))})}function DE(e,B,t,C){t&&!C&&B(e),jl(e,n=>{DE(n,B,!0,C)}),t&&C&&B(e)}function HM(e,B,t){let C=t?e:e.parent;for(;C!==null;){if(B(C))return!0;C=C.parent}return!1}function Is(e){return new iB(e.parent===null?e.name:Is(e.parent)+"/"+e.name)}function $1(e){e.parent!==null&&MM(e.parent,e.name,e)}function MM(e,B,t){const C=RM(t),n=Vt(e.node.children,B);C&&n?(delete e.node.children[B],e.node.childCount--,$1(e)):!C&&!n&&(e.node.children[B]=t.node,e.node.childCount++,$1(e))}/**
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
*/const LM=/[\[\].#$\/\u0000-\u001F\u007F]/,TM=/[\[\].#$\u0000-\u001F\u007F]/,su=10*1024*1024,kE=function(e){return typeof e=="string"&&e.length!==0&&!LM.test(e)},PE=function(e){return typeof e=="string"&&e.length!==0&&!TM.test(e)},GM=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),PE(e)},xM=function(e,B,t,C){C&&B===void 0||wf(Gh(e,"value"),B,t)},wf=function(e,B,t){const C=t instanceof iB?new tH(t,e):t;if(B===void 0)throw new Error(e+"contains undefined "+xC(C));if(typeof B=="function")throw new Error(e+"contains a function "+xC(C)+" with contents = "+B.toString());if(Iy(B))throw new Error(e+"contains "+B.toString()+" "+xC(C));if(typeof B=="string"&&B.length>su/3&&Rl(B)>su)throw new Error(e+"contains a string greater than "+su+" utf8 bytes "+xC(C)+" ('"+B.substring(0,50)+"...')");if(B&&typeof B=="object"){let n=!1,r=!1;if(me(B,(i,s)=>{if(i===".value")n=!0;else if(i!==".priority"&&i!==".sv"&&(r=!0,!kE(i)))throw new Error(e+" contains an invalid key ("+i+") "+xC(C)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);CH(C,i),wf(e,s,C),nH(C)}),n&&r)throw new Error(e+' contains ".value" child '+xC(C)+" in addition to actual children.")}},NE=function(e,B,t,C){if(!(C&&t===void 0)&&!PE(t))throw new Error(Gh(e,B)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},KM=function(e,B,t,C){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),NE(e,B,t,C)},QM=function(e,B){if(Z(B)===".info")throw new Error(e+" failed = Can't modify data under /.info/")},JM=function(e,B){const t=B.path.toString();if(typeof B.repoInfo.host!="string"||B.repoInfo.host.length===0||!kE(B.repoInfo.namespace)&&B.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!GM(t))throw new Error(Gh(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
*/class UM{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function FE(e,B){let t=null;for(let C=0;C<B.length;C++){const n=B[C],r=n.getPath();t!==null&&!Xy(r,t.path)&&(e.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(n)}t&&e.eventLists_.push(t)}function gt(e,B,t){FE(e,t),VM(e,C=>qe(C,B)||qe(B,C))}function VM(e,B){e.recursionDepth_++;let t=!0;for(let C=0;C<e.eventLists_.length;C++){const n=e.eventLists_[C];if(n){const r=n.path;B(r)?(WM(e.eventLists_[C]),e.eventLists_[C]=null):t=!1}}t&&(e.eventLists_=[]),e.recursionDepth_--}function WM(e){for(let B=0;B<e.events.length;B++){const t=e.events[B];if(t!==null){e.events[B]=null;const C=t.getEventRunner();Bn&&XB("event: "+t.toString()),kr(C)}}}/**
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
*/const jM="repo_interrupt",YM=25;class XM{constructor(B,t,C,n){this.repoInfo_=B,this.forceRestClient_=t,this.authTokenProvider_=C,this.appCheckProvider_=n,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new UM,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Wo(),this.transactionQueueTree_=new If,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ZM(e,B,t){if(e.stats_=nf(e.repoInfo_),e.forceRestClient_||D4())e.server_=new Vo(e.repoInfo_,(C,n,r,i)=>{Xm(e,C,n,r,i)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>Zm(e,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{FB(t)}catch(C){throw new Error("Invalid authOverride provided: "+C)}}e.persistentConnection_=new Ot(e.repoInfo_,B,(C,n,r,i)=>{Xm(e,C,n,r,i)},C=>{Zm(e,C)},C=>{zM(e,C)},e.authTokenProvider_,e.appCheckProvider_,t),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(C=>{e.server_.refreshAuthToken(C)}),e.appCheckProvider_.addTokenChangeListener(C=>{e.server_.refreshAppCheckToken(C.token)}),e.statsReporter_=O4(e.repoInfo_,()=>new NH(e.stats_,e.server_)),e.infoData_=new SH,e.infoSyncTree_=new jm({startListening:(C,n,r,i)=>{let s=[];const a=e.infoData_.getNode(C._path);return a.isEmpty()||(s=ys(e.infoSyncTree_,C._path,a),setTimeout(()=>{i("ok")},0)),s},stopListening:()=>{}}),kf(e,"connected",!1),e.serverSyncTree_=new jm({startListening:(C,n,r,i)=>(e.server_.listen(C,r,n,(s,a)=>{const o=i(s,a);gt(e.eventQueue_,C._path,o)}),[]),stopListening:(C,n)=>{e.server_.unlisten(C,n)}})}function qM(e){const B=e.infoData_.getNode(new iB(".info/serverTimeOffset")).val()||0;return new Date().getTime()+B}function Df(e){return PM({timestamp:qM(e)})}function Xm(e,B,t,C,n){e.dataUpdateCount++;const r=new iB(B);t=e.interceptServerDataCallback_?e.interceptServerDataCallback_(B,t):t;let i=[];if(n)if(C){const a=Oo(t,o=>xB(o));i=yM(e.serverSyncTree_,r,a,n)}else{const a=xB(t);i=AE(e.serverSyncTree_,r,a,n)}else if(C){const a=Oo(t,o=>xB(o));i=bM(e.serverSyncTree_,r,a)}else{const a=xB(t);i=ys(e.serverSyncTree_,r,a)}let s=r;i.length>0&&(s=Xl(e,r)),gt(e.eventQueue_,s,i)}function Zm(e,B){kf(e,"connected",B),B===!1&&BL(e)}function zM(e,B){me(B,(t,C)=>{kf(e,t,C)})}function kf(e,B,t){const C=new iB("/.info/"+B),n=xB(t);e.infoData_.updateSnapshot(C,n);const r=ys(e.infoSyncTree_,C,n);gt(e.eventQueue_,C,r)}function OE(e){return e.nextWriteId_++}function _M(e,B,t){const C=IM(e.serverSyncTree_,B);return C!=null?Promise.resolve(C):e.server_.get(B).then(n=>{const r=xB(n).withIndex(B._queryParams.getIndex());EM(e.serverSyncTree_,B,t,!0);let i;if(B._queryParams.loadsAllData())i=ys(e.serverSyncTree_,B._path,r);else{const s=Zi(e.serverSyncTree_,B);i=AE(e.serverSyncTree_,B._path,r,s)}return gt(e.eventQueue_,B._path,i),bE(e.serverSyncTree_,B,t,null,!0),r},n=>(Yl(e,"get for query "+FB(B)+" failed: "+n),Promise.reject(new Error(n))))}function $M(e,B,t,C,n){Yl(e,"set",{path:B.toString(),value:t,priority:C});const r=Df(e),i=xB(t,C),s=mf(e.serverSyncTree_,B),a=IE(i,s,r),o=OE(e),c=gE(e.serverSyncTree_,B,a,o,!0);FE(e.eventQueue_,c),e.server_.put(B.toString(),i.val(!0),(u,m)=>{const d=u==="ok";d||pe("set at "+B+" failed: "+u);const f=YC(e.serverSyncTree_,o,!d);gt(e.eventQueue_,B,f),tL(e,n,u,m)});const l=TE(e,B);Xl(e,l),gt(e.eventQueue_,l,[])}function BL(e){Yl(e,"onDisconnectEvents");const B=Df(e),t=Wo();X1(e.onDisconnect_,$(),(n,r)=>{const i=OM(n,r,e.serverSyncTree_,B);tE(t,n,i)});let C=[];X1(t,$(),(n,r)=>{C=C.concat(ys(e.serverSyncTree_,n,r));const i=TE(e,n);Xl(e,i)}),e.onDisconnect_=Wo(),gt(e.eventQueue_,$(),C)}function eL(e){e.persistentConnection_&&e.persistentConnection_.interrupt(jM)}function Yl(e,...B){let t="";e.persistentConnection_&&(t=e.persistentConnection_.id+":"),XB(t,...B)}function tL(e,B,t,C){B&&kr(()=>{if(t==="ok")B(null);else{const n=(t||"error").toUpperCase();let r=n;C&&(r+=": "+C);const i=new Error(r);i.code=n,B(i)}})}function RE(e,B,t){return mf(e.serverSyncTree_,B,t)||K.EMPTY_NODE}function Pf(e,B=e.transactionQueueTree_){if(B||Zl(e,B),Pr(B)){const t=ME(e,B);k(t.length>0,"Sending zero length transaction queue"),t.every(C=>C.status===0)&&CL(e,Is(B),t)}else wE(B)&&jl(B,t=>{Pf(e,t)})}function CL(e,B,t){const C=t.map(o=>o.currentWriteId),n=RE(e,B,C);let r=n;const i=n.hash();for(let o=0;o<t.length;o++){const c=t[o];k(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const l=ee(B,c.path);r=r.updateChild(l,c.currentOutputSnapshotRaw)}const s=r.val(!0),a=B;e.server_.put(a.toString(),s,o=>{Yl(e,"transaction put response",{path:a.toString(),status:o});let c=[];if(o==="ok"){const l=[];for(let u=0;u<t.length;u++)t[u].status=2,c=c.concat(YC(e.serverSyncTree_,t[u].currentWriteId)),t[u].onComplete&&l.push(()=>t[u].onComplete(null,!0,t[u].currentOutputSnapshotResolved)),t[u].unwatcher();Zl(e,Sf(e.transactionQueueTree_,B)),Pf(e,e.transactionQueueTree_),gt(e.eventQueue_,B,c);for(let u=0;u<l.length;u++)kr(l[u])}else{if(o==="datastale")for(let l=0;l<t.length;l++)t[l].status===3?t[l].status=4:t[l].status=0;else{pe("transaction at "+a.toString()+" failed: "+o);for(let l=0;l<t.length;l++)t[l].status=4,t[l].abortReason=o}Xl(e,B)}},i)}function Xl(e,B){const t=HE(e,B),C=Is(t),n=ME(e,t);return nL(e,n,C),C}function nL(e,B,t){if(B.length===0)return;const C=[];let n=[];const r=B.filter(i=>i.status===0).map(i=>i.currentWriteId);for(let i=0;i<B.length;i++){const s=B[i],a=ee(t,s.path);let o=!1,c;if(k(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),s.status===4)o=!0,c=s.abortReason,n=n.concat(YC(e.serverSyncTree_,s.currentWriteId,!0));else if(s.status===0)if(s.retryCount>=YM)o=!0,c="maxretry",n=n.concat(YC(e.serverSyncTree_,s.currentWriteId,!0));else{const l=RE(e,s.path,r);s.currentInputSnapshot=l;const u=B[i].update(l.val());if(u!==void 0){wf("transaction failed: Data returned ",u,s.path);let m=xB(u);typeof u=="object"&&u!=null&&Vt(u,".priority")||(m=m.updatePriority(l.getPriority()));const d=s.currentWriteId,f=Df(e),g=IE(m,l,f);s.currentOutputSnapshotRaw=m,s.currentOutputSnapshotResolved=g,s.currentWriteId=OE(e),r.splice(r.indexOf(d),1),n=n.concat(gE(e.serverSyncTree_,s.path,g,s.currentWriteId,s.applyLocally)),n=n.concat(YC(e.serverSyncTree_,d,!0))}else o=!0,c="nodata",n=n.concat(YC(e.serverSyncTree_,s.currentWriteId,!0))}gt(e.eventQueue_,t,n),n=[],o&&(B[i].status=2,function(l){setTimeout(l,Math.floor(0))}(B[i].unwatcher),B[i].onComplete&&(c==="nodata"?C.push(()=>B[i].onComplete(null,!1,B[i].currentInputSnapshot)):C.push(()=>B[i].onComplete(new Error(c),!1,null))))}Zl(e,e.transactionQueueTree_);for(let i=0;i<C.length;i++)kr(C[i]);Pf(e,e.transactionQueueTree_)}function HE(e,B){let t,C=e.transactionQueueTree_;for(t=Z(B);t!==null&&Pr(C)===void 0;)C=Sf(C,t),B=aB(B),t=Z(B);return C}function ME(e,B){const t=[];return LE(e,B,t),t.sort((C,n)=>C.order-n.order),t}function LE(e,B,t){const C=Pr(B);if(C)for(let n=0;n<C.length;n++)t.push(C[n]);jl(B,n=>{LE(e,n,t)})}function Zl(e,B){const t=Pr(B);if(t){let C=0;for(let n=0;n<t.length;n++)t[n].status!==2&&(t[C]=t[n],C++);t.length=C,SE(B,t.length>0?t:void 0)}jl(B,C=>{Zl(e,C)})}function TE(e,B){const t=Is(HE(e,B)),C=Sf(e.transactionQueueTree_,B);return HM(C,n=>{au(e,n)}),au(e,C),DE(C,n=>{au(e,n)}),t}function au(e,B){const t=Pr(B);if(t){const C=[];let n=[],r=-1;for(let i=0;i<t.length;i++)t[i].status===3||(t[i].status===1?(k(r===i-1,"All SENT items should be at beginning of queue."),r=i,t[i].status=3,t[i].abortReason="set"):(k(t[i].status===0,"Unexpected transaction status in abort"),t[i].unwatcher(),n=n.concat(YC(e.serverSyncTree_,t[i].currentWriteId,!0)),t[i].onComplete&&C.push(t[i].onComplete.bind(null,new Error("set"),!1,null))));r===-1?SE(B,void 0):t.length=r+1,gt(e.eventQueue_,Is(B),n);for(let i=0;i<C.length;i++)kr(C[i])}}/**
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
*/function rL(e){let B="";const t=e.split("/");for(let C=0;C<t.length;C++)if(t[C].length>0){let n=t[C];try{n=decodeURIComponent(n.replace(/\+/g," "))}catch{}B+="/"+n}return B}function iL(e){const B={};e.charAt(0)==="?"&&(e=e.substring(1));for(const t of e.split("&")){if(t.length===0)continue;const C=t.split("=");C.length===2?B[decodeURIComponent(C[0])]=decodeURIComponent(C[1]):pe(`Invalid query segment '${t}' in query '${e}'`)}return B}const qm=function(e,B){const t=sL(e),C=t.namespace;t.domain==="firebase.com"&&xt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!C||C==="undefined")&&t.domain!=="localhost"&&xt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||g4();const n=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Ly(t.host,t.secure,C,n,B,"",C!==t.subdomain),path:new iB(t.pathString)}},sL=function(e){let B="",t="",C="",n="",r="",i=!0,s="https",a=443;if(typeof e=="string"){let o=e.indexOf("//");o>=0&&(s=e.substring(0,o-1),e=e.substring(o+2));let c=e.indexOf("/");c===-1&&(c=e.length);let l=e.indexOf("?");l===-1&&(l=e.length),B=e.substring(0,Math.min(c,l)),c<l&&(n=rL(e.substring(c,l)));const u=iL(e.substring(Math.min(e.length,l)));o=B.indexOf(":"),o>=0?(i=s==="https"||s==="wss",a=parseInt(B.substring(o+1),10)):o=B.length;const m=B.slice(0,o);if(m.toLowerCase()==="localhost")t="localhost";else if(m.split(".").length<=2)t=m;else{const d=B.indexOf(".");C=B.substring(0,d).toLowerCase(),t=B.substring(d+1),r=C}"ns"in u&&(r=u.ns)}return{host:B,port:a,domain:t,subdomain:C,secure:i,scheme:s,pathString:n,namespace:r}};/**
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
*/class aL{constructor(B,t,C,n){this.eventType=B,this.eventRegistration=t,this.snapshot=C,this.prevName=n}getPath(){const B=this.snapshot.ref;return this.eventType==="value"?B._path:B.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+FB(this.snapshot.exportVal())}}class oL{constructor(B,t,C){this.eventRegistration=B,this.error=t,this.path=C}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
*/class lL{constructor(B,t){this.snapshotCallback=B,this.cancelCallback=t}onValue(B,t){this.snapshotCallback.call(null,B,t)}onCancel(B){return k(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,B)}get hasCancelCallback(){return!!this.cancelCallback}matches(B){return this.snapshotCallback===B.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===B.snapshotCallback.userCallback&&this.snapshotCallback.context===B.snapshotCallback.context}}/**
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
*/class Nf{constructor(B,t,C,n){this._repo=B,this._path=t,this._queryParams=C,this._orderByCalled=n}get key(){return X(this._path)?null:Wy(this._path)}get ref(){return new Wt(this._repo,this._path)}get _queryIdentifier(){const B=Mm(this._queryParams),t=tf(B);return t==="{}"?"default":t}get _queryObject(){return Mm(this._queryParams)}isEqual(B){if(B=ge(B),!(B instanceof Nf))return!1;const t=this._repo===B._repo,C=Xy(this._path,B._path),n=this._queryIdentifier===B._queryIdentifier;return t&&C&&n}toJSON(){return this.toString()}toString(){return this._repo.toString()+eH(this._path)}}class Wt extends Nf{constructor(B,t){super(B,t,new lf,!1)}get parent(){const B=Yy(this._path);return B===null?null:new Wt(this._repo,B)}get root(){let B=this;for(;B.parent!==null;)B=B.parent;return B}}class qi{constructor(B,t,C){this._node=B,this.ref=t,this._index=C}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(B){const t=new iB(B),C=Bd(this.ref,B);return new qi(this._node.getChild(t),C,SB)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(B){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(t,C)=>B(new qi(C,Bd(this.ref,t),SB)))}hasChild(B){const t=new iB(B);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function $o(e,B){return e=ge(e),e._checkNotDeleted("ref"),B!==void 0?Bd(e._root,B):e._root}function Bd(e,B){return e=ge(e),Z(e._path)===null?KM("child","path",B,!1):NE("child","path",B,!1),new Wt(e._repo,OB(e._path,B))}function ed(e,B){e=ge(e),QM("set",e._path),xM("set",B,e._path,!1);const t=new Ol;return $M(e._repo,e._path,B,null,t.wrapCallback(()=>{})),t.promise}function zi(e){e=ge(e);const B=new lL(()=>{}),t=new Ff(B);return _M(e._repo,e,t).then(C=>new qi(C,new Wt(e._repo,e._path),e._queryParams.getIndex()))}class Ff{constructor(B){this.callbackContext=B}respondsTo(B){return B==="value"}createEvent(B,t){const C=t._queryParams.getIndex();return new aL("value",this,new qi(B.snapshotNode,new Wt(t._repo,t._path),C))}getEventRunner(B){return B.getEventType()==="cancel"?()=>this.callbackContext.onCancel(B.error):()=>this.callbackContext.onValue(B.snapshot,null)}createCancelEvent(B,t){return this.callbackContext.hasCancelCallback?new oL(this,B,t):null}matches(B){return B instanceof Ff?!B.callbackContext||!this.callbackContext?!0:B.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}cM(Wt);pM(Wt);/**
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
*/const cL="FIREBASE_DATABASE_EMULATOR_HOST",td={};let uL=!1;function dL(e,B,t,C){e.repoInfo_=new Ly(`${B}:${t}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),C&&(e.authTokenProvider_=C)}function hL(e,B,t,C,n){let r=C||e.options.databaseURL;r===void 0&&(e.options.projectId||xt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),XB("Using default host for project ",e.options.projectId),r=`${e.options.projectId}-default-rtdb.firebaseio.com`);let i=qm(r,n),s=i.repoInfo,a,o;typeof process<"u"&&process.env&&(o=process.env[cL]),o?(a=!0,r=`http://${o}?ns=${s.namespace}`,i=qm(r,n),s=i.repoInfo):a=!i.repoInfo.secure;const c=n&&a?new er(er.OWNER):new P4(e.name,e.options,B);JM("Invalid Firebase Database URL",i),X(i.path)||xt("Database URL must point to the root of a Firebase Database (not including a child path).");const l=pL(s,e,c,new k4(e.name,t));return new mL(l,e)}function fL(e,B){const t=td[B];(!t||t[e.key]!==e)&&xt(`Database ${B}(${e.repoInfo_}) has already been deleted.`),eL(e),delete t[e.key]}function pL(e,B,t,C){let n=td[B.name];n||(n={},td[B.name]=n);let r=n[e.toURLString()];return r&&xt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new XM(e,uL,t,C),n[e.toURLString()]=r,r}class mL{constructor(B,t){this._repoInternal=B,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ZM(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Wt(this._repo,$())),this._rootInternal}_delete(){return this._rootInternal!==null&&(fL(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(B){this._rootInternal===null&&xt("Cannot call "+B+" on a deleted database.")}}function ql(e=Kh(),B){const t=An(e,"database").getImmediate({identifier:B});if(!t._instanceStarted){const C=hN("database");C&&gL(t,...C)}return t}function gL(e,B,t,C={}){e=ge(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&xt("Cannot call useEmulator() after instance has already been initialized.");const n=e._repoInternal;let r;if(n.repoInfo_.nodeAdmin)C.mockUserToken&&xt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new er(er.OWNER);else if(C.mockUserToken){const i=typeof C.mockUserToken=="string"?C.mockUserToken:fN(C.mockUserToken,e.app.options.projectId);r=new er(i)}dL(n,B,t,r)}/**
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
 `+u+i("^")}return" "+s(l)+a}).join(`
`)}toString(){let e=this.showSourceCode();return e&&(e=`

`+e+`
`),this.name+": "+this.message+e}};var Mf=nl;nl.default=nl;var Ss={};Ss.isClean=Symbol("isClean");Ss.my=Symbol("my");const u0={colon:": ",indent:"    ",beforeDecl:`
`,beforeRule:`
`,beforeOpen:" ",beforeClose:`
`,beforeComment:`
`,after:`
`,emptyBody:"",commentLeft:" ",commentRight:" ",semicolon:!1};function hV(e){return e[0].toUpperCase()+e.slice(1)}let rd=class{constructor(e){this.builder=e}stringify(e,B){if(!this[e.type])throw new Error("Unknown AST node type "+e.type+". Maybe you need to change PostCSS stringifier.");this[e.type](e,B)}document(e){this.body(e)}root(e){this.body(e),e.raws.after&&this.builder(e.raws.after)}comment(e){let B=this.raw(e,"left","commentLeft"),t=this.raw(e,"right","commentRight");this.builder("/*"+B+e.text+t+"*/",e)}decl(e,B){let t=this.raw(e,"between","colon"),C=e.prop+t+this.rawValue(e,"value");e.important&&(C+=e.raws.important||" !important"),B&&(C+=";"),this.builder(C,e)}rule(e){this.block(e,this.rawValue(e,"selector")),e.raws.ownSemicolon&&this.builder(e.raws.ownSemicolon,e,"end")}atrule(e,B){let t="@"+e.name,C=e.params?this.rawValue(e,"params"):"";if(typeof e.raws.afterName<"u"?t+=e.raws.afterName:C&&(t+=" "),e.nodes)this.block(e,t+C);else{let n=(e.raws.between||"")+(B?";":"");this.builder(t+C+n,e)}}body(e){let B=e.nodes.length-1;for(;B>0&&e.nodes[B].type==="comment";)B-=1;let t=this.raw(e,"semicolon");for(let C=0;C<e.nodes.length;C++){let n=e.nodes[C],r=this.raw(n,"before");r&&this.builder(r),this.stringify(n,B!==C||t)}}block(e,B){let t=this.raw(e,"between","beforeOpen");this.builder(B+t+"{",e,"start");let C;e.nodes&&e.nodes.length?(this.body(e),C=this.raw(e,"after")):C=this.raw(e,"after","emptyBody"),C&&this.builder(C),this.builder("}",e,"end")}raw(e,B,t){let C;if(t||(t=B),B&&(C=e.raws[B],typeof C<"u"))return C;let n=e.parent;if(t==="before"&&(!n||n.type==="root"&&n.first===e||n&&n.type==="document"))return"";if(!n)return u0[t];let r=e.root();if(r.rawCache||(r.rawCache={}),typeof r.rawCache[t]<"u")return r.rawCache[t];if(t==="before"||t==="after")return this.beforeAfter(e,t);{let i="raw"+hV(t);this[i]?C=this[i](r,e):r.walk(s=>{if(C=s.raws[B],typeof C<"u")return!1})}return typeof C>"u"&&(C=u0[t]),r.rawCache[t]=C,C}rawSemicolon(e){let B;return e.walk(t=>{if(t.nodes&&t.nodes.length&&t.last.type==="decl"&&(B=t.raws.semicolon,typeof B<"u"))return!1}),B}rawEmptyBody(e){let B;return e.walk(t=>{if(t.nodes&&t.nodes.length===0&&(B=t.raws.after,typeof B<"u"))return!1}),B}rawIndent(e){if(e.raws.indent)return e.raws.indent;let B;return e.walk(t=>{let C=t.parent;if(C&&C!==e&&C.parent&&C.parent===e&&typeof t.raws.before<"u"){let n=t.raws.before.split(`
`);return B=n[n.length-1],B=B.replace(/\S/g,""),!1}}),B}rawBeforeComment(e,B){let t;return e.walkComments(C=>{if(typeof C.raws.before<"u")return t=C.raws.before,t.includes(`
`)&&(t=t.replace(/[^\n]+$/,"")),!1}),typeof t>"u"?t=this.raw(B,null,"beforeDecl"):t&&(t=t.replace(/\S/g,"")),t}rawBeforeDecl(e,B){let t;return e.walkDecls(C=>{if(typeof C.raws.before<"u")return t=C.raws.before,t.includes(`
`)&&(t=t.replace(/[^\n]+$/,"")),!1}),typeof t>"u"?t=this.raw(B,null,"beforeRule"):t&&(t=t.replace(/\S/g,"")),t}rawBeforeRule(e){let B;return e.walk(t=>{if(t.nodes&&(t.parent!==e||e.first!==t)&&typeof t.raws.before<"u")return B=t.raws.before,B.includes(`
`)&&(B=B.replace(/[^\n]+$/,"")),!1}),B&&(B=B.replace(/\S/g,"")),B}rawBeforeClose(e){let B;return e.walk(t=>{if(t.nodes&&t.nodes.length>0&&typeof t.raws.after<"u")return B=t.raws.after,B.includes(`
`)&&(B=B.replace(/[^\n]+$/,"")),!1}),B&&(B=B.replace(/\S/g,"")),B}rawBeforeOpen(e){let B;return e.walk(t=>{if(t.type!=="decl"&&(B=t.raws.between,typeof B<"u"))return!1}),B}rawColon(e){let B;return e.walkDecls(t=>{if(typeof t.raws.between<"u")return B=t.raws.between.replace(/[^\s:]/g,""),!1}),B}beforeAfter(e,B){let t;e.type==="decl"?t=this.raw(e,null,"beforeDecl"):e.type==="comment"?t=this.raw(e,null,"beforeComment"):B==="before"?t=this.raw(e,null,"beforeRule"):t=this.raw(e,null,"beforeClose");let C=e.parent,n=0;for(;C&&C.type!=="root";)n+=1,C=C.parent;if(t.includes(`
`)){let r=this.raw(e,null,"indent");if(r.length)for(let i=0;i<n;i++)t+=r}return t}rawValue(e,B){let t=e[B],C=e.raws[B];return C&&C.value===t?C.raw:t}};var fS=rd;rd.default=rd;let fV=fS;function id(e,B){new fV(B).stringify(e)}var $l=id;id.default=id;let{isClean:ha,my:pV}=Ss,mV=Mf,gV=fS,bV=$l;function sd(e,B){let t=new e.constructor;for(let C in e){if(!Object.prototype.hasOwnProperty.call(e,C)||C==="proxyCache")continue;let n=e[C],r=typeof n;C==="parent"&&r==="object"?B&&(t[C]=B):C==="source"?t[C]=n:Array.isArray(n)?t[C]=n.map(i=>sd(i,t)):(r==="object"&&n!==null&&(n=sd(n)),t[C]=n)}return t}let ad=class{constructor(e={}){this.raws={},this[ha]=!1,this[pV]=!0;for(let B in e)if(B==="nodes"){this.nodes=[];for(let t of e[B])typeof t.clone=="function"?this.append(t.clone()):this.append(t)}else this[B]=e[B]}error(e,B={}){if(this.source){let{start:t,end:C}=this.rangeBy(B);return this.source.input.error(e,{line:t.line,column:t.column},{line:C.line,column:C.column},B)}return new mV(e)}warn(e,B,t){let C={node:this};for(let n in t)C[n]=t[n];return e.warn(B,C)}remove(){return this.parent&&this.parent.removeChild(this),this.parent=void 0,this}toString(e=bV){e.stringify&&(e=e.stringify);let B="";return e(this,t=>{B+=t}),B}assign(e={}){for(let B in e)this[B]=e[B];return this}clone(e={}){let B=sd(this);for(let t in e)B[t]=e[t];return B}cloneBefore(e={}){let B=this.clone(e);return this.parent.insertBefore(this,B),B}cloneAfter(e={}){let B=this.clone(e);return this.parent.insertAfter(this,B),B}replaceWith(...e){if(this.parent){let B=this,t=!1;for(let C of e)C===this?t=!0:t?(this.parent.insertAfter(B,C),B=C):this.parent.insertBefore(B,C);t||this.remove()}return this}next(){if(!this.parent)return;let e=this.parent.index(this);return this.parent.nodes[e+1]}prev(){if(!this.parent)return;let e=this.parent.index(this);return this.parent.nodes[e-1]}before(e){return this.parent.insertBefore(this,e),this}after(e){return this.parent.insertAfter(this,e),this}root(){let e=this;for(;e.parent&&e.parent.type!=="document";)e=e.parent;return e}raw(e,B){return new gV().raw(this,e,B)}cleanRaws(e){delete this.raws.before,delete this.raws.after,e||delete this.raws.between}toJSON(e,B){let t={},C=B==null;B=B||new Map;let n=0;for(let r in this){if(!Object.prototype.hasOwnProperty.call(this,r)||r==="parent"||r==="proxyCache")continue;let i=this[r];if(Array.isArray(i))t[r]=i.map(s=>typeof s=="object"&&s.toJSON?s.toJSON(null,B):s);else if(typeof i=="object"&&i.toJSON)t[r]=i.toJSON(null,B);else if(r==="source"){let s=B.get(i.input);s==null&&(s=n,B.set(i.input,n),n++),t[r]={inputId:s,start:i.start,end:i.end}}else t[r]=i}return C&&(t.inputs=[...B.keys()].map(r=>r.toJSON())),t}positionInside(e){let B=this.toString(),t=this.source.start.column,C=this.source.start.line;for(let n=0;n<e;n++)B[n]===`
`?(t=1,C+=1):t+=1;return{line:C,column:t}}positionBy(e){let B=this.source.start;if(e.index)B=this.positionInside(e.index);else if(e.word){let t=this.toString().indexOf(e.word);t!==-1&&(B=this.positionInside(t))}return B}rangeBy(e){let B={line:this.source.start.line,column:this.source.start.column},t=this.source.end?{line:this.source.end.line,column:this.source.end.column+1}:{line:B.line,column:B.column+1};if(e.word){let C=this.toString().indexOf(e.word);C!==-1&&(B=this.positionInside(C),t=this.positionInside(C+e.word.length))}else e.start?B={line:e.start.line,column:e.start.column}:e.index&&(B=this.positionInside(e.index)),e.end?t={line:e.end.line,column:e.end.column}:e.endIndex?t=this.positionInside(e.endIndex):e.index&&(t=this.positionInside(e.index+1));return(t.line<B.line||t.line===B.line&&t.column<=B.column)&&(t={line:B.line,column:B.column+1}),{start:B,end:t}}getProxyProcessor(){return{set(e,B,t){return e[B]===t||(e[B]=t,(B==="prop"||B==="value"||B==="name"||B==="params"||B==="important"||B==="text")&&e.markDirty()),!0},get(e,B){return B==="proxyOf"?e:B==="root"?()=>e.root().toProxy():e[B]}}}toProxy(){return this.proxyCache||(this.proxyCache=new Proxy(this,this.getProxyProcessor())),this.proxyCache}addToError(e){if(e.postcssNode=this,e.stack&&this.source&&/\n\s{4}at /.test(e.stack)){let B=this.source;e.stack=e.stack.replace(/\n\s{4}at /,`$&${B.input.from}:${B.start.line}:${B.start.column}$&`)}return e}markDirty(){if(this[ha]){this[ha]=!1;let e=this;for(;e=e.parent;)e[ha]=!1}}get proxyOf(){return this}};var Bc=ad;ad.default=ad;let AV=Bc,od=class extends AV{constructor(e){e&&typeof e.value<"u"&&typeof e.value!="string"&&(e={...e,value:String(e.value)}),super(e),this.type="decl"}get variable(){return this.prop.startsWith("--")||this.prop[0]==="$"}};var ec=od;od.default=od;let vV="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",yV=(e,B=21)=>(t=B)=>{let C="",n=t;for(;n--;)C+=e[Math.random()*e.length|0];return C},EV=(e=21)=>{let B="",t=e;for(;t--;)B+=vV[Math.random()*64|0];return B};const IV=Object.freeze(Object.defineProperty({__proto__:null,customAlphabet:yV,nanoid:EV},Symbol.toStringTag,{value:"Module"})),SV=Mg(IV);let{SourceMapConsumer:d0,SourceMapGenerator:h0}=Je,{existsSync:wV,readFileSync:DV}=Je,{dirname:hu,join:kV}=Je;function PV(e){return Buffer?Buffer.from(e,"base64").toString():window.atob(e)}let ld=class{constructor(e,B){if(B.map===!1)return;this.loadAnnotation(e),this.inline=this.startWith(this.annotation,"data:");let t=B.map?B.map.prev:void 0,C=this.loadMap(B.from,t);!this.mapFile&&B.from&&(this.mapFile=B.from),this.mapFile&&(this.root=hu(this.mapFile)),C&&(this.text=C)}consumer(){return this.consumerCache||(this.consumerCache=new d0(this.text)),this.consumerCache}withContent(){return!!(this.consumer().sourcesContent&&this.consumer().sourcesContent.length>0)}startWith(e,B){return e?e.substr(0,B.length)===B:!1}getAnnotationURL(e){return e.replace(/^\/\*\s*# sourceMappingURL=/,"").trim()}loadAnnotation(e){let B=e.match(/\/\*\s*# sourceMappingURL=/gm);if(!B)return;let t=e.lastIndexOf(B.pop()),C=e.indexOf("*/",t);t>-1&&C>-1&&(this.annotation=this.getAnnotationURL(e.substring(t,C)))}decodeInline(e){let B=/^data:application\/json;charset=utf-?8;base64,/,t=/^data:application\/json;base64,/,C=/^data:application\/json;charset=utf-?8,/,n=/^data:application\/json,/;if(C.test(e)||n.test(e))return decodeURIComponent(e.substr(RegExp.lastMatch.length));if(B.test(e)||t.test(e))return PV(e.substr(RegExp.lastMatch.length));let r=e.match(/data:application\/json;([^,]+),/)[1];throw new Error("Unsupported source map encoding "+r)}loadFile(e){if(this.root=hu(e),wV(e))return this.mapFile=e,DV(e,"utf-8").toString().trim()}loadMap(e,B){if(B===!1)return!1;if(B){if(typeof B=="string")return B;if(typeof B=="function"){let t=B(e);if(t){let C=this.loadFile(t);if(!C)throw new Error("Unable to load previous source map: "+t.toString());return C}}else{if(B instanceof d0)return h0.fromSourceMap(B).toString();if(B instanceof h0)return B.toString();if(this.isMap(B))return JSON.stringify(B);throw new Error("Unsupported previous source map format: "+B.toString())}}else{if(this.inline)return this.decodeInline(this.annotation);if(this.annotation){let t=this.annotation;return e&&(t=kV(hu(e),t)),this.loadFile(t)}}}isMap(e){return typeof e!="object"?!1:typeof e.mappings=="string"||typeof e._mappings=="string"||Array.isArray(e.sections)}};var pS=ld;ld.default=ld;let{SourceMapConsumer:NV,SourceMapGenerator:FV}=Je,{fileURLToPath:f0,pathToFileURL:fa}=Je,{resolve:cd,isAbsolute:ud}=Je,{nanoid:OV}=SV,fu=Je,p0=Mf,RV=pS,pu=Symbol("fromOffsetCache"),HV=Boolean(NV&&FV),m0=Boolean(cd&&ud),rl=class{constructor(e,B={}){if(e===null||typeof e>"u"||typeof e=="object"&&!e.toString)throw new Error(`PostCSS received ${e} instead of CSS string`);if(this.css=e.toString(),this.css[0]==="\uFEFF"||this.css[0]==="￾"?(this.hasBOM=!0,this.css=this.css.slice(1)):this.hasBOM=!1,B.from&&(!m0||/^\w+:\/\//.test(B.from)||ud(B.from)?this.file=B.from:this.file=cd(B.from)),m0&&HV){let t=new RV(this.css,B);if(t.text){this.map=t;let C=t.consumer().file;!this.file&&C&&(this.file=this.mapResolve(C))}}this.file||(this.id="<input css "+OV(6)+">"),this.map&&(this.map.file=this.from)}fromOffset(e){let B,t;if(this[pu])t=this[pu];else{let n=this.css.split(`
`);t=new Array(n.length);let r=0;for(let i=0,s=n.length;i<s;i++)t[i]=r,r+=n[i].length+1;this[pu]=t}B=t[t.length-1];let C=0;if(e>=B)C=t.length-1;else{let n=t.length-2,r;for(;C<n;)if(r=C+(n-C>>1),e<t[r])n=r-1;else if(e>=t[r+1])C=r+1;else{C=r;break}}return{line:C+1,col:e-t[C]+1}}error(e,B,t,C={}){let n,r,i;if(B&&typeof B=="object"){let a=B,o=t;if(typeof a.offset=="number"){let c=this.fromOffset(a.offset);B=c.line,t=c.col}else B=a.line,t=a.column;if(typeof o.offset=="number"){let c=this.fromOffset(o.offset);r=c.line,i=c.col}else r=o.line,i=o.column}else if(!t){let a=this.fromOffset(B);B=a.line,t=a.col}let s=this.origin(B,t,r,i);return s?n=new p0(e,s.endLine===void 0?s.line:{line:s.line,column:s.column},s.endLine===void 0?s.column:{line:s.endLine,column:s.endColumn},s.source,s.file,C.plugin):n=new p0(e,r===void 0?B:{line:B,column:t},r===void 0?t:{line:r,column:i},this.css,this.file,C.plugin),n.input={line:B,column:t,endLine:r,endColumn:i,source:this.css},this.file&&(fa&&(n.input.url=fa(this.file).toString()),n.input.file=this.file),n}origin(e,B,t,C){if(!this.map)return!1;let n=this.map.consumer(),r=n.originalPositionFor({line:e,column:B});if(!r.source)return!1;let i;typeof t=="number"&&(i=n.originalPositionFor({line:t,column:C}));let s;ud(r.source)?s=fa(r.source):s=new URL(r.source,this.map.consumer().sourceRoot||fa(this.map.mapFile));let a={url:s.toString(),line:r.line,column:r.column,endLine:i&&i.line,endColumn:i&&i.column};if(s.protocol==="file:")if(f0)a.file=f0(s);else throw new Error("file: protocol is not available in this PostCSS build");let o=n.sourceContentFor(r.source);return o&&(a.source=o),a}mapResolve(e){return/^\w+:\/\//.test(e)?e:cd(this.map.consumer().sourceRoot||this.map.root||".",e)}get from(){return this.file||this.id}toJSON(){let e={};for(let B of["hasBOM","css","file","id"])this[B]!=null&&(e[B]=this[B]);return this.map&&(e.map={...this.map},e.map.consumerCache&&(e.map.consumerCache=void 0)),e}};var tc=rl;rl.default=rl;fu&&fu.registerInput&&fu.registerInput(rl);let{SourceMapConsumer:mS,SourceMapGenerator:_a}=Je,{dirname:$a,resolve:gS,relative:bS,sep:AS}=Je,{pathToFileURL:g0}=Je,MV=tc,LV=Boolean(mS&&_a),TV=Boolean($a&&gS&&bS&&AS),GV=class{constructor(e,B,t,C){this.stringify=e,this.mapOpts=t.map||{},this.root=B,this.opts=t,this.css=C,this.usesFileUrls=!this.mapOpts.from&&this.mapOpts.absolute}isMap(){return typeof this.opts.map<"u"?!!this.opts.map:this.previous().length>0}previous(){if(!this.previousMaps)if(this.previousMaps=[],this.root)this.root.walk(e=>{if(e.source&&e.source.input.map){let B=e.source.input.map;this.previousMaps.includes(B)||this.previousMaps.push(B)}});else{let e=new MV(this.css,this.opts);e.map&&this.previousMaps.push(e.map)}return this.previousMaps}isInline(){if(typeof this.mapOpts.inline<"u")return this.mapOpts.inline;let e=this.mapOpts.annotation;return typeof e<"u"&&e!==!0?!1:this.previous().length?this.previous().some(B=>B.inline):!0}isSourcesContent(){return typeof this.mapOpts.sourcesContent<"u"?this.mapOpts.sourcesContent:this.previous().length?this.previous().some(e=>e.withContent()):!0}clearAnnotation(){if(this.mapOpts.annotation!==!1)if(this.root){let e;for(let B=this.root.nodes.length-1;B>=0;B--)e=this.root.nodes[B],e.type==="comment"&&e.text.indexOf("# sourceMappingURL=")===0&&this.root.removeChild(B)}else this.css&&(this.css=this.css.replace(/(\n)?\/\*#[\S\s]*?\*\/$/gm,""))}setSourcesContent(){let e={};if(this.root)this.root.walk(B=>{if(B.source){let t=B.source.input.from;if(t&&!e[t]){e[t]=!0;let C=this.usesFileUrls?this.toFileUrl(t):this.toUrl(this.path(t));this.map.setSourceContent(C,B.source.input.css)}}});else if(this.css){let B=this.opts.from?this.toUrl(this.path(this.opts.from)):"<no source>";this.map.setSourceContent(B,this.css)}}applyPrevMaps(){for(let e of this.previous()){let B=this.toUrl(this.path(e.file)),t=e.root||$a(e.file),C;this.mapOpts.sourcesContent===!1?(C=new mS(e.text),C.sourcesContent&&(C.sourcesContent=C.sourcesContent.map(()=>null))):C=e.consumer(),this.map.applySourceMap(C,B,this.toUrl(this.path(t)))}}isAnnotation(){return this.isInline()?!0:typeof this.mapOpts.annotation<"u"?this.mapOpts.annotation:this.previous().length?this.previous().some(e=>e.annotation):!0}toBase64(e){return Buffer?Buffer.from(e).toString("base64"):window.btoa(unescape(encodeURIComponent(e)))}addAnnotation(){let e;this.isInline()?e="data:application/json;base64,"+this.toBase64(this.map.toString()):typeof this.mapOpts.annotation=="string"?e=this.mapOpts.annotation:typeof this.mapOpts.annotation=="function"?e=this.mapOpts.annotation(this.opts.to,this.root):e=this.outputFile()+".map";let B=`
`;this.css.includes(`\r
`)&&(B=`\r
`),this.css+=B+"/*# sourceMappingURL="+e+" */"}outputFile(){return this.opts.to?this.path(this.opts.to):this.opts.from?this.path(this.opts.from):"to.css"}generateMap(){if(this.root)this.generateString();else if(this.previous().length===1){let e=this.previous()[0].consumer();e.file=this.outputFile(),this.map=_a.fromSourceMap(e)}else this.map=new _a({file:this.outputFile()}),this.map.addMapping({source:this.opts.from?this.toUrl(this.path(this.opts.from)):"<no source>",generated:{line:1,column:0},original:{line:1,column:0}});return this.isSourcesContent()&&this.setSourcesContent(),this.root&&this.previous().length>0&&this.applyPrevMaps(),this.isAnnotation()&&this.addAnnotation(),this.isInline()?[this.css]:[this.css,this.map]}path(e){if(e.indexOf("<")===0||/^\w+:\/\//.test(e)||this.mapOpts.absolute)return e;let B=this.opts.to?$a(this.opts.to):".";return typeof this.mapOpts.annotation=="string"&&(B=$a(gS(B,this.mapOpts.annotation))),e=bS(B,e),e}toUrl(e){return AS==="\\"&&(e=e.replace(/\\/g,"/")),encodeURI(e).replace(/[#?]/g,encodeURIComponent)}toFileUrl(e){if(g0)return g0(e).toString();throw new Error("`map.absolute` option is not available in this PostCSS build")}sourcePath(e){return this.mapOpts.from?this.toUrl(this.mapOpts.from):this.usesFileUrls?this.toFileUrl(e.source.input.from):this.toUrl(this.path(e.source.input.from))}generateString(){this.css="",this.map=new _a({file:this.outputFile()});let e=1,B=1,t="<no source>",C={source:"",generated:{line:0,column:0},original:{line:0,column:0}},n,r;this.stringify(this.root,(i,s,a)=>{if(this.css+=i,s&&a!=="end"&&(C.generated.line=e,C.generated.column=B-1,s.source&&s.source.start?(C.source=this.sourcePath(s),C.original.line=s.source.start.line,C.original.column=s.source.start.column-1,this.map.addMapping(C)):(C.source=t,C.original.line=1,C.original.column=0,this.map.addMapping(C))),n=i.match(/\n/g),n?(e+=n.length,r=i.lastIndexOf(`
`),B=i.length-r):B+=i.length,s&&a!=="start"){let o=s.parent||{raws:{}};(!(s.type==="decl"||s.type==="atrule"&&!s.nodes)||s!==o.last||o.raws.semicolon)&&(s.source&&s.source.end?(C.source=this.sourcePath(s),C.original.line=s.source.end.line,C.original.column=s.source.end.column-1,C.generated.line=e,C.generated.column=B-2,this.map.addMapping(C)):(C.source=t,C.original.line=1,C.original.column=0,C.generated.line=e,C.generated.column=B-1,this.map.addMapping(C)))}})}generate(){if(this.clearAnnotation(),TV&&LV&&this.isMap())return this.generateMap();{let e="";return this.stringify(this.root,B=>{e+=B}),[e]}}};var vS=GV;let xV=Bc,dd=class extends xV{constructor(e){super(e),this.type="comment"}};var Cc=dd;dd.default=dd;let{isClean:yS,my:ES}=Ss,IS=ec,SS=Cc,KV=Bc,wS,Lf,Tf,DS;function kS(e){return e.map(B=>(B.nodes&&(B.nodes=kS(B.nodes)),delete B.source,B))}function PS(e){if(e[yS]=!1,e.proxyOf.nodes)for(let B of e.proxyOf.nodes)PS(B)}let bt=class extends KV{push(e){return e.parent=this,this.proxyOf.nodes.push(e),this}each(e){if(!this.proxyOf.nodes)return;let B=this.getIterator(),t,C;for(;this.indexes[B]<this.proxyOf.nodes.length&&(t=this.indexes[B],C=e(this.proxyOf.nodes[t],t),C!==!1);)this.indexes[B]+=1;return delete this.indexes[B],C}walk(e){return this.each((B,t)=>{let C;try{C=e(B,t)}catch(n){throw B.addToError(n)}return C!==!1&&B.walk&&(C=B.walk(e)),C})}walkDecls(e,B){return B?e instanceof RegExp?this.walk((t,C)=>{if(t.type==="decl"&&e.test(t.prop))return B(t,C)}):this.walk((t,C)=>{if(t.type==="decl"&&t.prop===e)return B(t,C)}):(B=e,this.walk((t,C)=>{if(t.type==="decl")return B(t,C)}))}walkRules(e,B){return B?e instanceof RegExp?this.walk((t,C)=>{if(t.type==="rule"&&e.test(t.selector))return B(t,C)}):this.walk((t,C)=>{if(t.type==="rule"&&t.selector===e)return B(t,C)}):(B=e,this.walk((t,C)=>{if(t.type==="rule")return B(t,C)}))}walkAtRules(e,B){return B?e instanceof RegExp?this.walk((t,C)=>{if(t.type==="atrule"&&e.test(t.name))return B(t,C)}):this.walk((t,C)=>{if(t.type==="atrule"&&t.name===e)return B(t,C)}):(B=e,this.walk((t,C)=>{if(t.type==="atrule")return B(t,C)}))}walkComments(e){return this.walk((B,t)=>{if(B.type==="comment")return e(B,t)})}append(...e){for(let B of e){let t=this.normalize(B,this.last);for(let C of t)this.proxyOf.nodes.push(C)}return this.markDirty(),this}prepend(...e){e=e.reverse();for(let B of e){let t=this.normalize(B,this.first,"prepend").reverse();for(let C of t)this.proxyOf.nodes.unshift(C);for(let C in this.indexes)this.indexes[C]=this.indexes[C]+t.length}return this.markDirty(),this}cleanRaws(e){if(super.cleanRaws(e),this.nodes)for(let B of this.nodes)B.cleanRaws(e)}insertBefore(e,B){let t=this.index(e),C=t===0?"prepend":!1,n=this.normalize(B,this.proxyOf.nodes[t],C).reverse();t=this.index(e);for(let i of n)this.proxyOf.nodes.splice(t,0,i);let r;for(let i in this.indexes)r=this.indexes[i],t<=r&&(this.indexes[i]=r+n.length);return this.markDirty(),this}insertAfter(e,B){let t=this.index(e),C=this.normalize(B,this.proxyOf.nodes[t]).reverse();t=this.index(e);for(let r of C)this.proxyOf.nodes.splice(t+1,0,r);let n;for(let r in this.indexes)n=this.indexes[r],t<n&&(this.indexes[r]=n+C.length);return this.markDirty(),this}removeChild(e){e=this.index(e),this.proxyOf.nodes[e].parent=void 0,this.proxyOf.nodes.splice(e,1);let B;for(let t in this.indexes)B=this.indexes[t],B>=e&&(this.indexes[t]=B-1);return this.markDirty(),this}removeAll(){for(let e of this.proxyOf.nodes)e.parent=void 0;return this.proxyOf.nodes=[],this.markDirty(),this}replaceValues(e,B,t){return t||(t=B,B={}),this.walkDecls(C=>{B.props&&!B.props.includes(C.prop)||B.fast&&!C.value.includes(B.fast)||(C.value=C.value.replace(e,t))}),this.markDirty(),this}every(e){return this.nodes.every(e)}some(e){return this.nodes.some(e)}index(e){return typeof e=="number"?e:(e.proxyOf&&(e=e.proxyOf),this.proxyOf.nodes.indexOf(e))}get first(){if(this.proxyOf.nodes)return this.proxyOf.nodes[0]}get last(){if(this.proxyOf.nodes)return this.proxyOf.nodes[this.proxyOf.nodes.length-1]}normalize(e,B){if(typeof e=="string")e=kS(wS(e).nodes);else if(Array.isArray(e)){e=e.slice(0);for(let t of e)t.parent&&t.parent.removeChild(t,"ignore")}else if(e.type==="root"&&this.type!=="document"){e=e.nodes.slice(0);for(let t of e)t.parent&&t.parent.removeChild(t,"ignore")}else if(e.type)e=[e];else if(e.prop){if(typeof e.value>"u")throw new Error("Value field is missed in node creation");typeof e.value!="string"&&(e.value=String(e.value)),e=[new IS(e)]}else if(e.selector)e=[new Lf(e)];else if(e.name)e=[new Tf(e)];else if(e.text)e=[new SS(e)];else throw new Error("Unknown node type in node creation");return e.map(t=>(t[ES]||bt.rebuild(t),t=t.proxyOf,t.parent&&t.parent.removeChild(t),t[yS]&&PS(t),typeof t.raws.before>"u"&&B&&typeof B.raws.before<"u"&&(t.raws.before=B.raws.before.replace(/\S/g,"")),t.parent=this.proxyOf,t))}getProxyProcessor(){return{set(e,B,t){return e[B]===t||(e[B]=t,(B==="name"||B==="params"||B==="selector")&&e.markDirty()),!0},get(e,B){return B==="proxyOf"?e:e[B]?B==="each"||typeof B=="string"&&B.startsWith("walk")?(...t)=>e[B](...t.map(C=>typeof C=="function"?(n,r)=>C(n.toProxy(),r):C)):B==="every"||B==="some"?t=>e[B]((C,...n)=>t(C.toProxy(),...n)):B==="root"?()=>e.root().toProxy():B==="nodes"?e.nodes.map(t=>t.toProxy()):B==="first"||B==="last"?e[B].toProxy():e[B]:e[B]}}}getIterator(){this.lastEach||(this.lastEach=0),this.indexes||(this.indexes={}),this.lastEach+=1;let e=this.lastEach;return this.indexes[e]=0,e}};bt.registerParse=e=>{wS=e};bt.registerRule=e=>{Lf=e};bt.registerAtRule=e=>{Tf=e};bt.registerRoot=e=>{DS=e};var En=bt;bt.default=bt;bt.rebuild=e=>{e.type==="atrule"?Object.setPrototypeOf(e,Tf.prototype):e.type==="rule"?Object.setPrototypeOf(e,Lf.prototype):e.type==="decl"?Object.setPrototypeOf(e,IS.prototype):e.type==="comment"?Object.setPrototypeOf(e,SS.prototype):e.type==="root"&&Object.setPrototypeOf(e,DS.prototype),e[ES]=!0,e.nodes&&e.nodes.forEach(B=>{bt.rebuild(B)})};let QV=En,NS,FS,_i=class extends QV{constructor(e){super({type:"document",...e}),this.nodes||(this.nodes=[])}toResult(e={}){return new NS(new FS,this,e).stringify()}};_i.registerLazyResult=e=>{NS=e};_i.registerProcessor=e=>{FS=e};var Gf=_i;_i.default=_i;let hd=class{constructor(e,B={}){if(this.type="warning",this.text=e,B.node&&B.node.source){let t=B.node.rangeBy(B);this.line=t.start.line,this.column=t.start.column,this.endLine=t.end.line,this.endColumn=t.end.column}for(let t in B)this[t]=B[t]}toString(){return this.node?this.node.error(this.text,{plugin:this.plugin,index:this.index,word:this.word}).message:this.plugin?this.plugin+": "+this.text:this.text}};var OS=hd;hd.default=hd;let JV=OS,fd=class{constructor(e,B,t){this.processor=e,this.messages=[],this.root=B,this.opts=t,this.css=void 0,this.map=void 0}toString(){return this.css}warn(e,B={}){B.plugin||this.lastPlugin&&this.lastPlugin.postcssPlugin&&(B.plugin=this.lastPlugin.postcssPlugin);let t=new JV(e,B);return this.messages.push(t),t}warnings(){return this.messages.filter(e=>e.type==="warning")}get content(){return this.css}};var xf=fd;fd.default=fd;const mu="'".charCodeAt(0),b0='"'.charCodeAt(0),pa="\\".charCodeAt(0),A0="/".charCodeAt(0),ma=`
`.charCodeAt(0),jr=" ".charCodeAt(0),ga="\f".charCodeAt(0),ba="	".charCodeAt(0),Aa="\r".charCodeAt(0),UV="[".charCodeAt(0),VV="]".charCodeAt(0),WV="(".charCodeAt(0),jV=")".charCodeAt(0),YV="{".charCodeAt(0),XV="}".charCodeAt(0),ZV=";".charCodeAt(0),qV="*".charCodeAt(0),zV=":".charCodeAt(0),_V="@".charCodeAt(0),va=/[\t\n\f\r "#'()/;[\\\]{}]/g,ya=/[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,$V=/.[\n"'(/\\]/,v0=/[\da-f]/i;var BW=function(e,B={}){let t=e.css.valueOf(),C=B.ignoreErrors,n,r,i,s,a,o,c,l,u,m,d=t.length,f=0,g=[],h=[];function p(){return f}function b(E){throw e.error("Unclosed "+E,f)}function A(){return h.length===0&&f>=d}function y(E){if(h.length)return h.pop();if(f>=d)return;let v=E?E.ignoreUnclosed:!1;switch(n=t.charCodeAt(f),n){case ma:case jr:case ba:case Aa:case ga:{r=f;do r+=1,n=t.charCodeAt(r);while(n===jr||n===ma||n===ba||n===Aa||n===ga);m=["space",t.slice(f,r)],f=r-1;break}case UV:case VV:case YV:case XV:case zV:case ZV:case jV:{let w=String.fromCharCode(n);m=[w,w,f];break}case WV:{if(l=g.length?g.pop()[1]:"",u=t.charCodeAt(f+1),l==="url"&&u!==mu&&u!==b0&&u!==jr&&u!==ma&&u!==ba&&u!==ga&&u!==Aa){r=f;do{if(o=!1,r=t.indexOf(")",r+1),r===-1)if(C||v){r=f;break}else b("bracket");for(c=r;t.charCodeAt(c-1)===pa;)c-=1,o=!o}while(o);m=["brackets",t.slice(f,r+1),f,r],f=r}else r=t.indexOf(")",f+1),s=t.slice(f,r+1),r===-1||$V.test(s)?m=["(","(",f]:(m=["brackets",s,f,r],f=r);break}case mu:case b0:{i=n===mu?"'":'"',r=f;do{if(o=!1,r=t.indexOf(i,r+1),r===-1)if(C||v){r=f+1;break}else b("string");for(c=r;t.charCodeAt(c-1)===pa;)c-=1,o=!o}while(o);m=["string",t.slice(f,r+1),f,r],f=r;break}case _V:{va.lastIndex=f+1,va.test(t),va.lastIndex===0?r=t.length-1:r=va.lastIndex-2,m=["at-word",t.slice(f,r+1),f,r],f=r;break}case pa:{for(r=f,a=!0;t.charCodeAt(r+1)===pa;)r+=1,a=!a;if(n=t.charCodeAt(r+1),a&&n!==A0&&n!==jr&&n!==ma&&n!==ba&&n!==Aa&&n!==ga&&(r+=1,v0.test(t.charAt(r)))){for(;v0.test(t.charAt(r+1));)r+=1;t.charCodeAt(r+1)===jr&&(r+=1)}m=["word",t.slice(f,r+1),f,r],f=r;break}default:{n===A0&&t.charCodeAt(f+1)===qV?(r=t.indexOf("*/",f+2)+1,r===0&&(C||v?r=t.length:b("comment")),m=["comment",t.slice(f,r+1),f,r],f=r):(ya.lastIndex=f+1,ya.test(t),ya.lastIndex===0?r=t.length-1:r=ya.lastIndex-2,m=["word",t.slice(f,r+1),f,r],g.push(m),f=r);break}}return f++,m}function I(E){h.push(E)}return{back:I,nextToken:y,endOfFile:A,position:p}};let RS=En,il=class extends RS{constructor(e){super(e),this.type="atrule"}append(...e){return this.proxyOf.nodes||(this.nodes=[]),super.append(...e)}prepend(...e){return this.proxyOf.nodes||(this.nodes=[]),super.prepend(...e)}};var Kf=il;il.default=il;RS.registerAtRule(il);let HS=En,MS,LS,mr=class extends HS{constructor(e){super(e),this.type="root",this.nodes||(this.nodes=[])}removeChild(e,B){let t=this.index(e);return!B&&t===0&&this.nodes.length>1&&(this.nodes[1].raws.before=this.nodes[t].raws.before),super.removeChild(e)}normalize(e,B,t){let C=super.normalize(e);if(B){if(t==="prepend")this.nodes.length>1?B.raws.before=this.nodes[1].raws.before:delete B.raws.before;else if(this.first!==B)for(let n of C)n.raws.before=B.raws.before}return C}toResult(e={}){return new MS(new LS,this,e).stringify()}};mr.registerLazyResult=e=>{MS=e};mr.registerProcessor=e=>{LS=e};var ws=mr;mr.default=mr;HS.registerRoot(mr);let $i={split(e,B,t){let C=[],n="",r=!1,i=0,s=!1,a="",o=!1;for(let c of e)o?o=!1:c==="\\"?o=!0:s?c===a&&(s=!1):c==='"'||c==="'"?(s=!0,a=c):c==="("?i+=1:c===")"?i>0&&(i-=1):i===0&&B.includes(c)&&(r=!0),r?(n!==""&&C.push(n.trim()),n="",r=!1):n+=c;return(t||n!=="")&&C.push(n.trim()),C},space(e){let B=[" ",`
`,"	"];return $i.split(e,B)},comma(e){return $i.split(e,[","],!0)}};var TS=$i;$i.default=$i;let GS=En,eW=TS,sl=class extends GS{constructor(e){super(e),this.type="rule",this.nodes||(this.nodes=[])}get selectors(){return eW.comma(this.selector)}set selectors(e){let B=this.selector?this.selector.match(/,\s*/):null,t=B?B[0]:","+this.raw("between","beforeOpen");this.selector=e.join(t)}};var Qf=sl;sl.default=sl;GS.registerRule(sl);let tW=ec,CW=BW,nW=Cc,rW=Kf,iW=ws,y0=Qf;const E0={empty:!0,space:!0};function sW(e){for(let B=e.length-1;B>=0;B--){let t=e[B],C=t[3]||t[2];if(C)return C}}let aW=class{constructor(e){this.input=e,this.root=new iW,this.current=this.root,this.spaces="",this.semicolon=!1,this.customProperty=!1,this.createTokenizer(),this.root.source={input:e,start:{offset:0,line:1,column:1}}}createTokenizer(){this.tokenizer=CW(this.input)}parse(){let e;for(;!this.tokenizer.endOfFile();)switch(e=this.tokenizer.nextToken(),e[0]){case"space":this.spaces+=e[1];break;case";":this.freeSemicolon(e);break;case"}":this.end(e);break;case"comment":this.comment(e);break;case"at-word":this.atrule(e);break;case"{":this.emptyRule(e);break;default:this.other(e);break}this.endFile()}comment(e){let B=new nW;this.init(B,e[2]),B.source.end=this.getPosition(e[3]||e[2]);let t=e[1].slice(2,-2);if(/^\s*$/.test(t))B.text="",B.raws.left=t,B.raws.right="";else{let C=t.match(/^(\s*)([^]*\S)(\s*)$/);B.text=C[2],B.raws.left=C[1],B.raws.right=C[3]}}emptyRule(e){let B=new y0;this.init(B,e[2]),B.selector="",B.raws.between="",this.current=B}other(e){let B=!1,t=null,C=!1,n=null,r=[],i=e[1].startsWith("--"),s=[],a=e;for(;a;){if(t=a[0],s.push(a),t==="("||t==="[")n||(n=a),r.push(t==="("?")":"]");else if(i&&C&&t==="{")n||(n=a),r.push("}");else if(r.length===0)if(t===";")if(C){this.decl(s,i);return}else break;else if(t==="{"){this.rule(s);return}else if(t==="}"){this.tokenizer.back(s.pop()),B=!0;break}else t===":"&&(C=!0);else t===r[r.length-1]&&(r.pop(),r.length===0&&(n=null));a=this.tokenizer.nextToken()}if(this.tokenizer.endOfFile()&&(B=!0),r.length>0&&this.unclosedBracket(n),B&&C){if(!i)for(;s.length&&(a=s[s.length-1][0],!(a!=="space"&&a!=="comment"));)this.tokenizer.back(s.pop());this.decl(s,i)}else this.unknownWord(s)}rule(e){e.pop();let B=new y0;this.init(B,e[0][2]),B.raws.between=this.spacesAndCommentsFromEnd(e),this.raw(B,"selector",e),this.current=B}decl(e,B){let t=new tW;this.init(t,e[0][2]);let C=e[e.length-1];for(C[0]===";"&&(this.semicolon=!0,e.pop()),t.source.end=this.getPosition(C[3]||C[2]||sW(e));e[0][0]!=="word";)e.length===1&&this.unknownWord(e),t.raws.before+=e.shift()[1];for(t.source.start=this.getPosition(e[0][2]),t.prop="";e.length;){let s=e[0][0];if(s===":"||s==="space"||s==="comment")break;t.prop+=e.shift()[1]}t.raws.between="";let n;for(;e.length;)if(n=e.shift(),n[0]===":"){t.raws.between+=n[1];break}else n[0]==="word"&&/\w/.test(n[1])&&this.unknownWord([n]),t.raws.between+=n[1];(t.prop[0]==="_"||t.prop[0]==="*")&&(t.raws.before+=t.prop[0],t.prop=t.prop.slice(1));let r=[],i;for(;e.length&&(i=e[0][0],!(i!=="space"&&i!=="comment"));)r.push(e.shift());this.precheckMissedSemicolon(e);for(let s=e.length-1;s>=0;s--){if(n=e[s],n[1].toLowerCase()==="!important"){t.important=!0;let a=this.stringFrom(e,s);a=this.spacesFromEnd(e)+a,a!==" !important"&&(t.raws.important=a);break}else if(n[1].toLowerCase()==="important"){let a=e.slice(0),o="";for(let c=s;c>0;c--){let l=a[c][0];if(o.trim().indexOf("!")===0&&l!=="space")break;o=a.pop()[1]+o}o.trim().indexOf("!")===0&&(t.important=!0,t.raws.important=o,e=a)}if(n[0]!=="space"&&n[0]!=="comment")break}e.some(s=>s[0]!=="space"&&s[0]!=="comment")&&(t.raws.between+=r.map(s=>s[1]).join(""),r=[]),this.raw(t,"value",r.concat(e),B),t.value.includes(":")&&!B&&this.checkMissedSemicolon(e)}atrule(e){let B=new rW;B.name=e[1].slice(1),B.name===""&&this.unnamedAtrule(B,e),this.init(B,e[2]);let t,C,n,r=!1,i=!1,s=[],a=[];for(;!this.tokenizer.endOfFile();){if(e=this.tokenizer.nextToken(),t=e[0],t==="("||t==="["?a.push(t==="("?")":"]"):t==="{"&&a.length>0?a.push("}"):t===a[a.length-1]&&a.pop(),a.length===0)if(t===";"){B.source.end=this.getPosition(e[2]),this.semicolon=!0;break}else if(t==="{"){i=!0;break}else if(t==="}"){if(s.length>0){for(n=s.length-1,C=s[n];C&&C[0]==="space";)C=s[--n];C&&(B.source.end=this.getPosition(C[3]||C[2]))}this.end(e);break}else s.push(e);else s.push(e);if(this.tokenizer.endOfFile()){r=!0;break}}B.raws.between=this.spacesAndCommentsFromEnd(s),s.length?(B.raws.afterName=this.spacesAndCommentsFromStart(s),this.raw(B,"params",s),r&&(e=s[s.length-1],B.source.end=this.getPosition(e[3]||e[2]),this.spaces=B.raws.between,B.raws.between="")):(B.raws.afterName="",B.params=""),i&&(B.nodes=[],this.current=B)}end(e){this.current.nodes&&this.current.nodes.length&&(this.current.raws.semicolon=this.semicolon),this.semicolon=!1,this.current.raws.after=(this.current.raws.after||"")+this.spaces,this.spaces="",this.current.parent?(this.current.source.end=this.getPosition(e[2]),this.current=this.current.parent):this.unexpectedClose(e)}endFile(){this.current.parent&&this.unclosedBlock(),this.current.nodes&&this.current.nodes.length&&(this.current.raws.semicolon=this.semicolon),this.current.raws.after=(this.current.raws.after||"")+this.spaces}freeSemicolon(e){if(this.spaces+=e[1],this.current.nodes){let B=this.current.nodes[this.current.nodes.length-1];B&&B.type==="rule"&&!B.raws.ownSemicolon&&(B.raws.ownSemicolon=this.spaces,this.spaces="")}}getPosition(e){let B=this.input.fromOffset(e);return{offset:e,line:B.line,column:B.col}}init(e,B){this.current.push(e),e.source={start:this.getPosition(B),input:this.input},e.raws.before=this.spaces,this.spaces="",e.type!=="comment"&&(this.semicolon=!1)}raw(e,B,t,C){let n,r,i=t.length,s="",a=!0,o,c;for(let l=0;l<i;l+=1)n=t[l],r=n[0],r==="space"&&l===i-1&&!C?a=!1:r==="comment"?(c=t[l-1]?t[l-1][0]:"empty",o=t[l+1]?t[l+1][0]:"empty",!E0[c]&&!E0[o]?s.slice(-1)===","?a=!1:s+=n[1]:a=!1):s+=n[1];if(!a){let l=t.reduce((u,m)=>u+m[1],"");e.raws[B]={value:s,raw:l}}e[B]=s}spacesAndCommentsFromEnd(e){let B,t="";for(;e.length&&(B=e[e.length-1][0],!(B!=="space"&&B!=="comment"));)t=e.pop()[1]+t;return t}spacesAndCommentsFromStart(e){let B,t="";for(;e.length&&(B=e[0][0],!(B!=="space"&&B!=="comment"));)t+=e.shift()[1];return t}spacesFromEnd(e){let B,t="";for(;e.length&&(B=e[e.length-1][0],B==="space");)t=e.pop()[1]+t;return t}stringFrom(e,B){let t="";for(let C=B;C<e.length;C++)t+=e[C][1];return e.splice(B,e.length-B),t}colon(e){let B=0,t,C,n;for(let[r,i]of e.entries()){if(t=i,C=t[0],C==="("&&(B+=1),C===")"&&(B-=1),B===0&&C===":")if(!n)this.doubleColon(t);else{if(n[0]==="word"&&n[1]==="progid")continue;return r}n=t}return!1}unclosedBracket(e){throw this.input.error("Unclosed bracket",{offset:e[2]},{offset:e[2]+1})}unknownWord(e){throw this.input.error("Unknown word",{offset:e[0][2]},{offset:e[0][2]+e[0][1].length})}unexpectedClose(e){throw this.input.error("Unexpected }",{offset:e[2]},{offset:e[2]+1})}unclosedBlock(){let e=this.current.source.start;throw this.input.error("Unclosed block",e.line,e.column)}doubleColon(e){throw this.input.error("Double colon",{offset:e[2]},{offset:e[2]+e[1].length})}unnamedAtrule(e,B){throw this.input.error("At-rule without name",{offset:B[2]},{offset:B[2]+B[1].length})}precheckMissedSemicolon(){}checkMissedSemicolon(e){let B=this.colon(e);if(B===!1)return;let t=0,C;for(let n=B-1;n>=0&&(C=e[n],!(C[0]!=="space"&&(t+=1,t===2)));n--);throw this.input.error("Missed semicolon",C[0]==="word"?C[3]+1:C[2])}};var oW=aW;let lW=En,cW=oW,uW=tc;function al(e,B){let t=new uW(e,B),C=new cW(t);try{C.parse()}catch(n){throw n}return C.root}var Jf=al;al.default=al;lW.registerParse(al);let{isClean:at,my:dW}=Ss,hW=vS,fW=$l,pW=En,mW=Gf,I0=xf,gW=Jf,bW=ws;const AW={document:"Document",root:"Root",atrule:"AtRule",rule:"Rule",decl:"Declaration",comment:"Comment"},vW={postcssPlugin:!0,prepare:!0,Once:!0,Document:!0,Root:!0,Declaration:!0,Rule:!0,AtRule:!0,Comment:!0,DeclarationExit:!0,RuleExit:!0,AtRuleExit:!0,CommentExit:!0,RootExit:!0,DocumentExit:!0,OnceExit:!0},yW={postcssPlugin:!0,prepare:!0,Once:!0},gr=0;function Yr(e){return typeof e=="object"&&typeof e.then=="function"}function xS(e){let B=!1,t=AW[e.type];return e.type==="decl"?B=e.prop.toLowerCase():e.type==="atrule"&&(B=e.name.toLowerCase()),B&&e.append?[t,t+"-"+B,gr,t+"Exit",t+"Exit-"+B]:B?[t,t+"-"+B,t+"Exit",t+"Exit-"+B]:e.append?[t,gr,t+"Exit"]:[t,t+"Exit"]}function S0(e){let B;return e.type==="document"?B=["Document",gr,"DocumentExit"]:e.type==="root"?B=["Root",gr,"RootExit"]:B=xS(e),{node:e,events:B,eventIndex:0,visitors:[],visitorIndex:0,iterator:0}}function pd(e){return e[at]=!1,e.nodes&&e.nodes.forEach(B=>pd(B)),e}let md={},hn=class{constructor(e,B,t){this.stringified=!1,this.processed=!1;let C;if(typeof B=="object"&&B!==null&&(B.type==="root"||B.type==="document"))C=pd(B);else if(B instanceof hn||B instanceof I0)C=pd(B.root),B.map&&(typeof t.map>"u"&&(t.map={}),t.map.inline||(t.map.inline=!1),t.map.prev=B.map);else{let n=gW;t.syntax&&(n=t.syntax.parse),t.parser&&(n=t.parser),n.parse&&(n=n.parse);try{C=n(B,t)}catch(r){this.processed=!0,this.error=r}C&&!C[dW]&&pW.rebuild(C)}this.result=new I0(e,C,t),this.helpers={...md,result:this.result,postcss:md},this.plugins=this.processor.plugins.map(n=>typeof n=="object"&&n.prepare?{...n,...n.prepare(this.result)}:n)}get[Symbol.toStringTag](){return"LazyResult"}get processor(){return this.result.processor}get opts(){return this.result.opts}get css(){return this.stringify().css}get content(){return this.stringify().content}get map(){return this.stringify().map}get root(){return this.sync().root}get messages(){return this.sync().messages}warnings(){return this.sync().warnings()}toString(){return this.css}then(e,B){return this.async().then(e,B)}catch(e){return this.async().catch(e)}finally(e){return this.async().then(e,e)}async(){return this.error?Promise.reject(this.error):this.processed?Promise.resolve(this.result):(this.processing||(this.processing=this.runAsync()),this.processing)}sync(){if(this.error)throw this.error;if(this.processed)return this.result;if(this.processed=!0,this.processing)throw this.getAsyncError();for(let e of this.plugins){let B=this.runOnRoot(e);if(Yr(B))throw this.getAsyncError()}if(this.prepareVisitors(),this.hasListener){let e=this.result.root;for(;!e[at];)e[at]=!0,this.walkSync(e);if(this.listeners.OnceExit)if(e.type==="document")for(let B of e.nodes)this.visitSync(this.listeners.OnceExit,B);else this.visitSync(this.listeners.OnceExit,e)}return this.result}stringify(){if(this.error)throw this.error;if(this.stringified)return this.result;this.stringified=!0,this.sync();let e=this.result.opts,B=fW;e.syntax&&(B=e.syntax.stringify),e.stringifier&&(B=e.stringifier),B.stringify&&(B=B.stringify);let t=new hW(B,this.result.root,this.result.opts).generate();return this.result.css=t[0],this.result.map=t[1],this.result}walkSync(e){e[at]=!0;let B=xS(e);for(let t of B)if(t===gr)e.nodes&&e.each(C=>{C[at]||this.walkSync(C)});else{let C=this.listeners[t];if(C&&this.visitSync(C,e.toProxy()))return}}visitSync(e,B){for(let[t,C]of e){this.result.lastPlugin=t;let n;try{n=C(B,this.helpers)}catch(r){throw this.handleError(r,B.proxyOf)}if(B.type!=="root"&&B.type!=="document"&&!B.parent)return!0;if(Yr(n))throw this.getAsyncError()}}runOnRoot(e){this.result.lastPlugin=e;try{if(typeof e=="object"&&e.Once){if(this.result.root.type==="document"){let B=this.result.root.nodes.map(t=>e.Once(t,this.helpers));return Yr(B[0])?Promise.all(B):B}return e.Once(this.result.root,this.helpers)}else if(typeof e=="function")return e(this.result.root,this.result)}catch(B){throw this.handleError(B)}}getAsyncError(){throw new Error("Use process(css).then(cb) to work with async plugins")}handleError(e,B){let t=this.result.lastPlugin;try{B&&B.addToError(e),this.error=e,e.name==="CssSyntaxError"&&!e.plugin?(e.plugin=t.postcssPlugin,e.setMessage()):t.postcssVersion}catch(C){console&&console.error&&console.error(C)}return e}async runAsync(){this.plugin=0;for(let e=0;e<this.plugins.length;e++){let B=this.plugins[e],t=this.runOnRoot(B);if(Yr(t))try{await t}catch(C){throw this.handleError(C)}}if(this.prepareVisitors(),this.hasListener){let e=this.result.root;for(;!e[at];){e[at]=!0;let B=[S0(e)];for(;B.length>0;){let t=this.visitTick(B);if(Yr(t))try{await t}catch(C){let n=B[B.length-1].node;throw this.handleError(C,n)}}}if(this.listeners.OnceExit)for(let[B,t]of this.listeners.OnceExit){this.result.lastPlugin=B;try{if(e.type==="document"){let C=e.nodes.map(n=>t(n,this.helpers));await Promise.all(C)}else await t(e,this.helpers)}catch(C){throw this.handleError(C)}}}return this.processed=!0,this.stringify()}prepareVisitors(){this.listeners={};let e=(B,t,C)=>{this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push([B,C])};for(let B of this.plugins)if(typeof B=="object")for(let t in B){if(!vW[t]&&/^[A-Z]/.test(t))throw new Error(`Unknown event ${t} in ${B.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);if(!yW[t])if(typeof B[t]=="object")for(let C in B[t])C==="*"?e(B,t,B[t][C]):e(B,t+"-"+C.toLowerCase(),B[t][C]);else typeof B[t]=="function"&&e(B,t,B[t])}this.hasListener=Object.keys(this.listeners).length>0}visitTick(e){let B=e[e.length-1],{node:t,visitors:C}=B;if(t.type!=="root"&&t.type!=="document"&&!t.parent){e.pop();return}if(C.length>0&&B.visitorIndex<C.length){let[r,i]=C[B.visitorIndex];B.visitorIndex+=1,B.visitorIndex===C.length&&(B.visitors=[],B.visitorIndex=0),this.result.lastPlugin=r;try{return i(t.toProxy(),this.helpers)}catch(s){throw this.handleError(s,t)}}if(B.iterator!==0){let r=B.iterator,i;for(;i=t.nodes[t.indexes[r]];)if(t.indexes[r]+=1,!i[at]){i[at]=!0,e.push(S0(i));return}B.iterator=0,delete t.indexes[r]}let n=B.events;for(;B.eventIndex<n.length;){let r=n[B.eventIndex];if(B.eventIndex+=1,r===gr){t.nodes&&t.nodes.length&&(t[at]=!0,B.iterator=t.getIterator());return}else if(this.listeners[r]){B.visitors=this.listeners[r];return}}e.pop()}};hn.registerPostcss=e=>{md=e};var KS=hn;hn.default=hn;bW.registerLazyResult(hn);mW.registerLazyResult(hn);let EW=vS,IW=$l,SW=Jf;const wW=xf;let gd=class{constructor(e,B,t){B=B.toString(),this.stringified=!1,this._processor=e,this._css=B,this._opts=t,this._map=void 0;let C,n=IW;this.result=new wW(this._processor,C,this._opts),this.result.css=B;let r=this;Object.defineProperty(this.result,"root",{get(){return r.root}});let i=new EW(n,C,this._opts,B);if(i.isMap()){let[s,a]=i.generate();s&&(this.result.css=s),a&&(this.result.map=a)}}get[Symbol.toStringTag](){return"NoWorkResult"}get processor(){return this.result.processor}get opts(){return this.result.opts}get css(){return this.result.css}get content(){return this.result.css}get map(){return this.result.map}get root(){if(this._root)return this._root;let e,B=SW;try{e=B(this._css,this._opts)}catch(t){this.error=t}if(this.error)throw this.error;return this._root=e,e}get messages(){return[]}warnings(){return[]}toString(){return this._css}then(e,B){return this.async().then(e,B)}catch(e){return this.async().catch(e)}finally(e){return this.async().then(e,e)}async(){return this.error?Promise.reject(this.error):Promise.resolve(this.result)}sync(){if(this.error)throw this.error;return this.result}};var DW=gd;gd.default=gd;let kW=DW,PW=KS,NW=Gf,FW=ws,Bs=class{constructor(e=[]){this.version="8.4.21",this.plugins=this.normalize(e)}use(e){return this.plugins=this.plugins.concat(this.normalize([e])),this}process(e,B={}){return this.plugins.length===0&&typeof B.parser>"u"&&typeof B.stringifier>"u"&&typeof B.syntax>"u"?new kW(this,e,B):new PW(this,e,B)}normalize(e){let B=[];for(let t of e)if(t.postcss===!0?t=t():t.postcss&&(t=t.postcss),typeof t=="object"&&Array.isArray(t.plugins))B=B.concat(t.plugins);else if(typeof t=="object"&&t.postcssPlugin)B.push(t);else if(typeof t=="function")B.push(t);else if(!(typeof t=="object"&&(t.parse||t.stringify)))throw new Error(t+" is not a PostCSS plugin");return B}};var OW=Bs;Bs.default=Bs;FW.registerProcessor(Bs);NW.registerProcessor(Bs);let RW=ec,HW=pS,MW=Cc,LW=Kf,TW=tc,GW=ws,xW=Qf;function es(e,B){if(Array.isArray(e))return e.map(n=>es(n));let{inputs:t,...C}=e;if(t){B=[];for(let n of t){let r={...n,__proto__:TW.prototype};r.map&&(r.map={...r.map,__proto__:HW.prototype}),B.push(r)}}if(C.nodes&&(C.nodes=e.nodes.map(n=>es(n,B))),C.source){let{inputId:n,...r}=C.source;C.source=r,n!=null&&(C.source.input=B[n])}if(C.type==="root")return new GW(C);if(C.type==="decl")return new RW(C);if(C.type==="rule")return new xW(C);if(C.type==="comment")return new MW(C);if(C.type==="atrule")return new LW(C);throw new Error("Unknown node type: "+e.type)}var KW=es;es.default=es;let QW=Mf,QS=ec,JW=KS,UW=En,Uf=OW,VW=$l,WW=KW,JS=Gf,jW=OS,US=Cc,VS=Kf,YW=xf,XW=tc,ZW=Jf,qW=TS,WS=Qf,jS=ws,zW=Bc;function CB(...e){return e.length===1&&Array.isArray(e[0])&&(e=e[0]),new Uf(e)}CB.plugin=function(e,B){let t=!1;function C(...r){console&&console.warn&&!t&&(t=!0,console.warn(e+`: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`),{}.LANG&&{}.LANG.startsWith("cn")&&console.warn(e+`: 里面 postcss.plugin 被弃用. 迁移指南:
https://www.w3ctech.com/topic/2226`));let i=B(...r);return i.postcssPlugin=e,i.postcssVersion=new Uf().version,i}let n;return Object.defineProperty(C,"postcss",{get(){return n||(n=C()),n}}),C.process=function(r,i,s){return CB([C(s)]).process(r,i)},C};CB.stringify=VW;CB.parse=ZW;CB.fromJSON=WW;CB.list=qW;CB.comment=e=>new US(e);CB.atRule=e=>new VS(e);CB.decl=e=>new QS(e);CB.rule=e=>new WS(e);CB.root=e=>new jS(e);CB.document=e=>new JS(e);CB.CssSyntaxError=QW;CB.Declaration=QS;CB.Container=UW;CB.Processor=Uf;CB.Document=JS;CB.Comment=US;CB.Warning=jW;CB.AtRule=VS;CB.Result=YW;CB.Input=XW;CB.Rule=WS;CB.Root=jS;CB.Node=zW;JW.registerPostcss(CB);var Ds=CB;CB.default=CB;let{list:bd}=Ds;gB.error=function(e){let B=new Error(e);throw B.autoprefixer=!0,B};gB.uniq=function(e){return[...new Set(e)]};gB.removeNote=function(e){return e.includes(" ")?e.split(" ")[0]:e};gB.escapeRegexp=function(e){return e.replace(/[$()*+-.?[\\\]^{|}]/g,"\\$&")};gB.regexp=function(e,B=!0){return B&&(e=this.escapeRegexp(e)),new RegExp(`(^|[\\s,(])(${e}($|[\\s(,]))`,"gi")};gB.editList=function(e,B){let t=bd.comma(e),C=B(t,[]);if(t===C)return e;let n=e.match(/,\s*/);return n=n?n[0]:", ",C.join(n)};gB.splitSelector=function(e){return bd.comma(e).map(B=>bd.space(B).map(t=>t.split(/(?=\.|#)/g)))};gB.isPureNumber=function(e){return typeof e=="number"?!0:typeof e=="string"?/^[0-9]+$/.test(e):!1};let _W=XE,w0=yn.agents,$W=gB,Bj=class{static prefixes(){if(this.prefixesCache)return this.prefixesCache;this.prefixesCache=[];for(let e in w0)this.prefixesCache.push(`-${w0[e].prefix}-`);return this.prefixesCache=$W.uniq(this.prefixesCache).sort((e,B)=>B.length-e.length),this.prefixesCache}static withPrefix(e){return this.prefixesRegexp||(this.prefixesRegexp=new RegExp(this.prefixes().join("|"))),this.prefixesRegexp.test(e)}constructor(e,B,t,C){this.data=e,this.options=t||{},this.browserslistOpts=C||{},this.selected=this.parse(B)}parse(e){let B={};for(let t in this.browserslistOpts)B[t]=this.browserslistOpts[t];return B.path=this.options.from,_W(e,B)}prefix(e){let[B,t]=e.split(" "),C=this.data[B],n=C.prefix_exceptions&&C.prefix_exceptions[t];return n||(n=C.prefix),`-${n}-`}isSelected(e){return this.selected.includes(e)}};var Vf=Bj,YS={prefix(e){let B=e.match(/^(-\w+-)/);return B?B[0]:""},unprefixed(e){return e.replace(/^-\w+-/,"")}};let ej=Vf,D0=YS,tj=gB;function Ad(e,B){let t=new e.constructor;for(let C of Object.keys(e||{})){let n=e[C];C==="parent"&&typeof n=="object"?B&&(t[C]=B):C==="source"||C===null?t[C]=n:Array.isArray(n)?t[C]=n.map(r=>Ad(r,t)):C!=="_autoprefixerPrefix"&&C!=="_autoprefixerValues"&&C!=="proxyCache"&&(typeof n=="object"&&n!==null&&(n=Ad(n,t)),t[C]=n)}return t}let XS=class{static hack(e){return this.hacks||(this.hacks={}),e.names.map(B=>(this.hacks[B]=e,this.hacks[B]))}static load(e,B,t){let C=this.hacks&&this.hacks[e];return C?new C(e,B,t):new this(e,B,t)}static clone(e,B){let t=Ad(e);for(let C in B)t[C]=B[C];return t}constructor(e,B,t){this.prefixes=B,this.name=e,this.all=t}parentPrefix(e){let B;return typeof e._autoprefixerPrefix<"u"?B=e._autoprefixerPrefix:e.type==="decl"&&e.prop[0]==="-"?B=D0.prefix(e.prop):e.type==="root"?B=!1:e.type==="rule"&&e.selector.includes(":-")&&/:(-\w+-)/.test(e.selector)?B=e.selector.match(/:(-\w+-)/)[1]:e.type==="atrule"&&e.name[0]==="-"?B=D0.prefix(e.name):B=this.parentPrefix(e.parent),ej.prefixes().includes(B)||(B=!1),e._autoprefixerPrefix=B,e._autoprefixerPrefix}process(e,B){if(!this.check(e))return;let t=this.parentPrefix(e),C=this.prefixes.filter(r=>!t||t===tj.removeNote(r)),n=[];for(let r of C)this.add(e,r,n.concat([r]),B)&&n.push(r);return n}clone(e,B){return XS.clone(e,B)}};var Wf=XS;let Cj=Wf,nj=Vf,k0=gB,rj=class extends Cj{check(){return!0}prefixed(e,B){return B+e}normalize(e){return e}otherPrefixes(e,B){for(let t of nj.prefixes())if(t!==B&&e.includes(t))return e.replace(/var\([^)]+\)/,"").includes(t);return!1}set(e,B){return e.prop=this.prefixed(e.prop,B),e}needCascade(e){return e._autoprefixerCascade||(e._autoprefixerCascade=this.all.options.cascade!==!1&&e.raw("before").includes(`
`)),e._autoprefixerCascade}maxPrefixed(e,B){if(B._autoprefixerMax)return B._autoprefixerMax;let t=0;for(let C of e)C=k0.removeNote(C),C.length>t&&(t=C.length);return B._autoprefixerMax=t,B._autoprefixerMax}calcBefore(e,B,t=""){let C=this.maxPrefixed(e,B)-k0.removeNote(t).length,n=B.raw("before");return C>0&&(n+=Array(C).fill(" ").join("")),n}restoreBefore(e){let B=e.raw("before").split(`
`),t=B[B.length-1];this.all.group(e).up(C=>{let n=C.raw("before").split(`
`),r=n[n.length-1];r.length<t.length&&(t=r)}),B[B.length-1]=t,e.raws.before=B.join(`
`)}insert(e,B,t){let C=this.set(this.clone(e),B);if(!(!C||e.parent.some(n=>n.prop===C.prop&&n.value===C.value)))return this.needCascade(e)&&(C.raws.before=this.calcBefore(t,e,B)),e.parent.insertBefore(e,C)}isAlready(e,B){let t=this.all.group(e).up(C=>C.prop===B);return t||(t=this.all.group(e).down(C=>C.prop===B)),t}add(e,B,t,C){let n=this.prefixed(e.prop,B);if(!(this.isAlready(e,n)||this.otherPrefixes(e.value,B)))return this.insert(e,B,t,C)}process(e,B){if(!this.needCascade(e)){super.process(e,B);return}let t=super.process(e,B);!t||!t.length||(this.restoreBefore(e),e.raws.before=this.calcBefore(t,e))}old(e,B){return[this.prefixed(e,B)]}};var J=rj,P0={},ij={get exports(){return P0},set exports(e){P0=e}};/**
* @license Fraction.js v4.2.0 05/03/2022
* https://www.xarg.org/2014/03/rational-numbers-in-javascript/
*
* Copyright (c) 2021, Robert Eisele (robert@xarg.org)
* Dual licensed under the MIT or GPL Version 2 licenses.
**/(function(e,B){(function(t){var C=2e3,n={s:1,n:0,d:1};function r(d,f){if(isNaN(d=parseInt(d,10)))throw m.InvalidParameter;return d*f}function i(d,f){if(f===0)throw m.DivisionByZero;var g=Object.create(m.prototype);g.s=d<0?-1:1,d=d<0?-d:d;var h=u(d,f);return g.n=d/h,g.d=f/h,g}function s(d){for(var f={},g=d,h=2,p=4;p<=g;){for(;g%h===0;)g/=h,f[h]=(f[h]||0)+1;p+=1+2*h++}return g!==d?g>1&&(f[g]=(f[g]||0)+1):f[d]=(f[d]||0)+1,f}var a=function(d,f){var g=0,h=1,p=1,b=0,A=0,y=0,I=1,E=1,v=0,w=1,M=1,j=1,Q=1e7,BB;if(d!=null)if(f!==void 0){if(g=d,h=f,p=g*h,g%1!==0||h%1!==0)throw m.NonIntegerParameter}else switch(typeof d){case"object":{if("d"in d&&"n"in d)g=d.n,h=d.d,"s"in d&&(g*=d.s);else if(0 in d)g=d[0],1 in d&&(h=d[1]);else throw m.InvalidParameter;p=g*h;break}case"number":{if(d<0&&(p=d,d=-d),d%1===0)g=d;else if(d>0){for(d>=1&&(E=Math.pow(10,Math.floor(1+Math.log(d)/Math.LN10)),d/=E);w<=Q&&j<=Q;)if(BB=(v+M)/(w+j),d===BB){w+j<=Q?(g=v+M,h=w+j):j>w?(g=M,h=j):(g=v,h=w);break}else d>BB?(v+=M,w+=j):(M+=v,j+=w),w>Q?(g=M,h=j):(g=v,h=w);g*=E}else(isNaN(d)||isNaN(f))&&(h=g=NaN);break}case"string":{if(w=d.match(/\d+|./g),w===null)throw m.InvalidParameter;if(w[v]==="-"?(p=-1,v++):w[v]==="+"&&v++,w.length===v+1?A=r(w[v++],p):w[v+1]==="."||w[v]==="."?(w[v]!=="."&&(b=r(w[v++],p)),v++,(v+1===w.length||w[v+1]==="("&&w[v+3]===")"||w[v+1]==="'"&&w[v+3]==="'")&&(A=r(w[v],p),I=Math.pow(10,w[v].length),v++),(w[v]==="("&&w[v+2]===")"||w[v]==="'"&&w[v+2]==="'")&&(y=r(w[v+1],p),E=Math.pow(10,w[v+1].length)-1,v+=3)):w[v+1]==="/"||w[v+1]===":"?(A=r(w[v],p),I=r(w[v+2],1),v+=3):w[v+3]==="/"&&w[v+1]===" "&&(b=r(w[v],p),A=r(w[v+2],p),I=r(w[v+4],1),v+=5),w.length<=v){h=I*E,p=g=y+h*b+E*A;break}}default:throw m.InvalidParameter}if(h===0)throw m.DivisionByZero;n.s=p<0?-1:1,n.n=Math.abs(g),n.d=Math.abs(h)};function o(d,f,g){for(var h=1;f>0;d=d*d%g,f>>=1)f&1&&(h=h*d%g);return h}function c(d,f){for(;f%2===0;f/=2);for(;f%5===0;f/=5);if(f===1)return 0;for(var g=10%f,h=1;g!==1;h++)if(g=g*10%f,h>C)return 0;return h}function l(d,f,g){for(var h=1,p=o(10,g,f),b=0;b<300;b++){if(h===p)return b;h=h*10%f,p=p*10%f}return 0}function u(d,f){if(!d)return f;if(!f)return d;for(;;){if(d%=f,!d)return f;if(f%=d,!f)return d}}function m(d,f){if(a(d,f),this instanceof m)d=u(n.d,n.n),this.s=n.s,this.n=n.n/d,this.d=n.d/d;else return i(n.s*n.n,n.d)}m.DivisionByZero=new Error("Division by Zero"),m.InvalidParameter=new Error("Invalid argument"),m.NonIntegerParameter=new Error("Parameters must be integer"),m.prototype={s:1,n:0,d:1,abs:function(){return i(this.n,this.d)},neg:function(){return i(-this.s*this.n,this.d)},add:function(d,f){return a(d,f),i(this.s*this.n*n.d+n.s*this.d*n.n,this.d*n.d)},sub:function(d,f){return a(d,f),i(this.s*this.n*n.d-n.s*this.d*n.n,this.d*n.d)},mul:function(d,f){return a(d,f),i(this.s*n.s*this.n*n.n,this.d*n.d)},div:function(d,f){return a(d,f),i(this.s*n.s*this.n*n.d,this.d*n.n)},clone:function(){return i(this.s*this.n,this.d)},mod:function(d,f){if(isNaN(this.n)||isNaN(this.d))return new m(NaN);if(d===void 0)return i(this.s*this.n%this.d,1);if(a(d,f),n.n===0&&this.d===0)throw m.DivisionByZero;return i(this.s*(n.d*this.n)%(n.n*this.d),n.d*this.d)},gcd:function(d,f){return a(d,f),i(u(n.n,this.n)*u(n.d,this.d),n.d*this.d)},lcm:function(d,f){return a(d,f),n.n===0&&this.n===0?i(0,1):i(n.n*this.n,u(n.n,this.n)*u(n.d,this.d))},ceil:function(d){return d=Math.pow(10,d||0),isNaN(this.n)||isNaN(this.d)?new m(NaN):i(Math.ceil(d*this.s*this.n/this.d),d)},floor:function(d){return d=Math.pow(10,d||0),isNaN(this.n)||isNaN(this.d)?new m(NaN):i(Math.floor(d*this.s*this.n/this.d),d)},round:function(d){return d=Math.pow(10,d||0),isNaN(this.n)||isNaN(this.d)?new m(NaN):i(Math.round(d*this.s*this.n/this.d),d)},inverse:function(){return i(this.s*this.d,this.n)},pow:function(d,f){if(a(d,f),n.d===1)return n.s<0?i(Math.pow(this.s*this.d,n.n),Math.pow(this.n,n.n)):i(Math.pow(this.s*this.n,n.n),Math.pow(this.d,n.n));if(this.s<0)return null;var g=s(this.n),h=s(this.d),p=1,b=1;for(var A in g)if(A!=="1"){if(A==="0"){p=0;break}if(g[A]*=n.n,g[A]%n.d===0)g[A]/=n.d;else return null;p*=Math.pow(A,g[A])}for(var A in h)if(A!=="1"){if(h[A]*=n.n,h[A]%n.d===0)h[A]/=n.d;else return null;b*=Math.pow(A,h[A])}return n.s<0?i(b,p):i(p,b)},equals:function(d,f){return a(d,f),this.s*this.n*n.d===n.s*n.n*this.d},compare:function(d,f){a(d,f);var g=this.s*this.n*n.d-n.s*n.n*this.d;return(0<g)-(g<0)},simplify:function(d){if(isNaN(this.n)||isNaN(this.d))return this;d=d||.001;for(var f=this.abs(),g=f.toContinued(),h=1;h<g.length;h++){for(var p=i(g[h-1],1),b=h-2;b>=0;b--)p=p.inverse().add(g[b]);if(p.sub(f).abs().valueOf()<d)return p.mul(this.s)}return this},divisible:function(d,f){return a(d,f),!(!(n.n*this.d)||this.n*n.d%(n.n*this.d))},valueOf:function(){return this.s*this.n/this.d},toFraction:function(d){var f,g="",h=this.n,p=this.d;return this.s<0&&(g+="-"),p===1?g+=h:(d&&(f=Math.floor(h/p))>0&&(g+=f,g+=" ",h%=p),g+=h,g+="/",g+=p),g},toLatex:function(d){var f,g="",h=this.n,p=this.d;return this.s<0&&(g+="-"),p===1?g+=h:(d&&(f=Math.floor(h/p))>0&&(g+=f,h%=p),g+="\\frac{",g+=h,g+="}{",g+=p,g+="}"),g},toContinued:function(){var d,f=this.n,g=this.d,h=[];if(isNaN(f)||isNaN(g))return h;do h.push(Math.floor(f/g)),d=f%g,f=g,g=d;while(f!==1);return h},toString:function(d){var f=this.n,g=this.d;if(isNaN(f)||isNaN(g))return"NaN";d=d||15;var h=c(f,g),p=l(f,g,h),b=this.s<0?"-":"";if(b+=f/g|0,f%=g,f*=10,f&&(b+="."),h){for(var A=p;A--;)b+=f/g|0,f%=g,f*=10;b+="(";for(var A=h;A--;)b+=f/g|0,f%=g,f*=10;b+=")"}else for(var A=d;f&&A--;)b+=f/g|0,f%=g,f*=10;return b}},Object.defineProperty(m,"__esModule",{value:!0}),m.default=m,m.Fraction=m,e.exports=m})()})(ij);var gu="(".charCodeAt(0),bu=")".charCodeAt(0),Ea="'".charCodeAt(0),Au='"'.charCodeAt(0),vu="\\".charCodeAt(0),Dn="/".charCodeAt(0),yu=",".charCodeAt(0),Eu=":".charCodeAt(0),Ia="*".charCodeAt(0),sj="u".charCodeAt(0),aj="U".charCodeAt(0),oj="+".charCodeAt(0),lj=/^[a-f0-9?-]+$/i,cj=function(e){for(var B=[],t=e,C,n,r,i,s,a,o,c,l=0,u=t.charCodeAt(l),m=t.length,d=[{nodes:B}],f=0,g,h="",p="",b="";l<m;)if(u<=32){C=l;do C+=1,u=t.charCodeAt(C);while(u<=32);i=t.slice(l,C),r=B[B.length-1],u===bu&&f?b=i:r&&r.type==="div"?(r.after=i,r.sourceEndIndex+=i.length):u===yu||u===Eu||u===Dn&&t.charCodeAt(C+1)!==Ia&&(!g||g&&g.type==="function"&&g.value!=="calc")?p=i:B.push({type:"space",sourceIndex:l,sourceEndIndex:C,value:i}),l=C}else if(u===Ea||u===Au){C=l,n=u===Ea?"'":'"',i={type:"string",sourceIndex:l,quote:n};do if(s=!1,C=t.indexOf(n,C+1),~C)for(a=C;t.charCodeAt(a-1)===vu;)a-=1,s=!s;else t+=n,C=t.length-1,i.unclosed=!0;while(s);i.value=t.slice(l+1,C),i.sourceEndIndex=i.unclosed?C:C+1,B.push(i),l=C+1,u=t.charCodeAt(l)}else if(u===Dn&&t.charCodeAt(l+1)===Ia)C=t.indexOf("*/",l),i={type:"comment",sourceIndex:l,sourceEndIndex:C+2},C===-1&&(i.unclosed=!0,C=t.length,i.sourceEndIndex=C),i.value=t.slice(l+2,C),B.push(i),l=C+2,u=t.charCodeAt(l);else if((u===Dn||u===Ia)&&g&&g.type==="function"&&g.value==="calc")i=t[l],B.push({type:"word",sourceIndex:l-p.length,sourceEndIndex:l+i.length,value:i}),l+=1,u=t.charCodeAt(l);else if(u===Dn||u===yu||u===Eu)i=t[l],B.push({type:"div",sourceIndex:l-p.length,sourceEndIndex:l+i.length,value:i,before:p,after:""}),p="",l+=1,u=t.charCodeAt(l);else if(gu===u){C=l;do C+=1,u=t.charCodeAt(C);while(u<=32);if(c=l,i={type:"function",sourceIndex:l-h.length,value:h,before:t.slice(c+1,C)},l=C,h==="url"&&u!==Ea&&u!==Au){C-=1;do if(s=!1,C=t.indexOf(")",C+1),~C)for(a=C;t.charCodeAt(a-1)===vu;)a-=1,s=!s;else t+=")",C=t.length-1,i.unclosed=!0;while(s);o=C;do o-=1,u=t.charCodeAt(o);while(u<=32);c<o?(l!==o+1?i.nodes=[{type:"word",sourceIndex:l,sourceEndIndex:o+1,value:t.slice(l,o+1)}]:i.nodes=[],i.unclosed&&o+1!==C?(i.after="",i.nodes.push({type:"space",sourceIndex:o+1,sourceEndIndex:C,value:t.slice(o+1,C)})):(i.after=t.slice(o+1,C),i.sourceEndIndex=C)):(i.after="",i.nodes=[]),l=C+1,i.sourceEndIndex=i.unclosed?C:l,u=t.charCodeAt(l),B.push(i)}else f+=1,i.after="",i.sourceEndIndex=l+1,B.push(i),d.push(i),B=i.nodes=[],g=i;h=""}else if(bu===u&&f)l+=1,u=t.charCodeAt(l),g.after=b,g.sourceEndIndex+=b.length,b="",f-=1,d[d.length-1].sourceEndIndex=l,d.pop(),g=d[f],B=g.nodes;else{C=l;do u===vu&&(C+=1),C+=1,u=t.charCodeAt(C);while(C<m&&!(u<=32||u===Ea||u===Au||u===yu||u===Eu||u===Dn||u===gu||u===Ia&&g&&g.type==="function"&&g.value==="calc"||u===Dn&&g.type==="function"&&g.value==="calc"||u===bu&&f));i=t.slice(l,C),gu===u?h=i:(sj===i.charCodeAt(0)||aj===i.charCodeAt(0))&&oj===i.charCodeAt(1)&&lj.test(i.slice(2))?B.push({type:"unicode-range",sourceIndex:l,sourceEndIndex:C,value:i}):B.push({type:"word",sourceIndex:l,sourceEndIndex:C,value:i}),l=C}for(l=d.length-1;l;l-=1)d[l].unclosed=!0,d[l].sourceEndIndex=t.length;return d[0].nodes},uj=function e(B,t,C){var n,r,i,s;for(n=0,r=B.length;n<r;n+=1)i=B[n],C||(s=t(i,n,B)),s!==!1&&i.type==="function"&&Array.isArray(i.nodes)&&e(i.nodes,t,C),C&&t(i,n,B)};function N0(e,B){var t=e.type,C=e.value,n,r;return B&&(r=B(e))!==void 0?r:t==="word"||t==="space"?C:t==="string"?(n=e.quote||"",n+C+(e.unclosed?"":n)):t==="comment"?"/*"+C+(e.unclosed?"":"*/"):t==="div"?(e.before||"")+C+(e.after||""):Array.isArray(e.nodes)?(n=ZS(e.nodes,B),t!=="function"?n:C+"("+(e.before||"")+n+(e.after||"")+(e.unclosed?"":")")):C}function ZS(e,B){var t,C;if(Array.isArray(e)){for(t="",C=e.length-1;~C;C-=1)t=N0(e[C],B)+t;return t}return N0(e,B)}var dj=ZS,Iu,F0;function hj(){if(F0)return Iu;F0=1;var e="-".charCodeAt(0),B="+".charCodeAt(0),t=".".charCodeAt(0),C="e".charCodeAt(0),n="E".charCodeAt(0);function r(i){var s=i.charCodeAt(0),a;if(s===B||s===e){if(a=i.charCodeAt(1),a>=48&&a<=57)return!0;var o=i.charCodeAt(2);return a===t&&o>=48&&o<=57}return s===t?(a=i.charCodeAt(1),a>=48&&a<=57):s>=48&&s<=57}return Iu=function(i){var s=0,a=i.length,o,c,l;if(a===0||!r(i))return!1;for(o=i.charCodeAt(s),(o===B||o===e)&&s++;s<a&&(o=i.charCodeAt(s),!(o<48||o>57));)s+=1;if(o=i.charCodeAt(s),c=i.charCodeAt(s+1),o===t&&c>=48&&c<=57)for(s+=2;s<a&&(o=i.charCodeAt(s),!(o<48||o>57));)s+=1;if(o=i.charCodeAt(s),c=i.charCodeAt(s+1),l=i.charCodeAt(s+2),(o===C||o===n)&&(c>=48&&c<=57||(c===B||c===e)&&l>=48&&l<=57))for(s+=c===B||c===e?3:2;s<a&&(o=i.charCodeAt(s),!(o<48||o>57));)s+=1;return{number:i.slice(0,s),unit:i.slice(s)}},Iu}var fj=cj,qS=uj,zS=dj;function kC(e){return this instanceof kC?(this.nodes=fj(e),this):new kC(e)}kC.prototype.toString=function(){return Array.isArray(this.nodes)?zS(this.nodes):""};kC.prototype.walk=function(e,B){return qS(this.nodes,e,B),this};kC.unit=hj();kC.walk=qS;kC.stringify=zS;var jf=kC;let pj=gB,mj=class{constructor(e,B,t,C){this.unprefixed=e,this.prefixed=B,this.string=t||B,this.regexp=C||pj.regexp(B)}check(e){return e.includes(this.string)?!!e.match(this.regexp):!1}};var ks=mj;let gj=Wf,bj=ks,Aj=YS,vj=gB,yj=class extends gj{static save(e,B){let t=B.prop,C=[];for(let n in B._autoprefixerValues){let r=B._autoprefixerValues[n];if(r===B.value)continue;let i,s=Aj.prefix(t);if(s==="-pie-")continue;if(s===n){i=B.value=r,C.push(i);continue}let a=e.prefixed(t,n),o=B.parent;if(!o.every(u=>u.prop!==a)){C.push(i);continue}let c=r.replace(/\s+/," ");if(o.some(u=>u.prop===B.prop&&u.value.replace(/\s+/," ")===c)){C.push(i);continue}let l=this.clone(B,{value:r});i=B.parent.insertBefore(B,l),C.push(i)}return C}check(e){let B=e.value;return B.includes(this.name)?!!B.match(this.regexp()):!1}regexp(){return this.regexpCache||(this.regexpCache=vj.regexp(this.name))}replace(e,B){return e.replace(this.regexp(),`$1${B}$2`)}value(e){return e.raws.value&&e.raws.value.value===e.value?e.raws.value.raw:e.value}add(e,B){e._autoprefixerValues||(e._autoprefixerValues={});let t=e._autoprefixerValues[B]||this.value(e),C;do if(C=t,t=this.replace(t,B),t===!1)return;while(t!==C);e._autoprefixerValues[B]=t}old(e){return new bj(this.name,e+this.name)}};var yt=yj,wB={};let we=jf,br=Ds.list,O0=gB.uniq,Ej=gB.escapeRegexp,vd=gB.splitSelector;function R0(e){return e&&e.length===2&&e[0]==="span"&&parseInt(e[1],10)>0?[!1,parseInt(e[1],10)]:e&&e.length===1&&parseInt(e[0],10)>0?[parseInt(e[0],10),!1]:[!1,!1]}wB.translate=Ij;function Ij(e,B,t){let C=e[B],n=e[t];if(!C)return[!1,!1];let[r,i]=R0(C),[s,a]=R0(n);return r&&!n?[r,!1]:i&&s?[s-i,i]:r&&a?[r,a]:r&&s?[r,s-r]:[!1,!1]}wB.parse=Sj;function Sj(e){let B=we(e.value),t=[],C=0;t[C]=[];for(let n of B.nodes)n.type==="div"?(C+=1,t[C]=[]):n.type==="word"&&t[C].push(n.value);return t}wB.insertDecl=wj;function wj(e,B,t){t&&!e.parent.some(C=>C.prop===`-ms-${B}`)&&e.cloneBefore({prop:`-ms-${B}`,value:t.toString()})}wB.prefixTrackProp=Dj;function Dj({prop:e,prefix:B}){return B+e.replace("template-","")}function kj({nodes:e},{gap:B}){let{count:t,size:C}=e.reduce((n,r)=>(r.type==="div"&&r.value===","?n.key="size":n[n.key].push(we.stringify(r)),n),{key:"count",size:[],count:[]});if(B){C=C.filter(r=>r.trim());let n=[];for(let r=1;r<=t;r++)C.forEach((i,s)=>{(s>0||r>1)&&n.push(B),n.push(i)});return n.join(" ")}return`(${C.join("")})[${t.join("")}]`}wB.prefixTrackValue=yd;function yd({value:e,gap:B}){let t=we(e).nodes.reduce((C,n)=>n.type==="function"&&n.value==="repeat"?C.concat({type:"word",value:kj(n,{gap:B})}):B&&n.type==="space"?C.concat({type:"space",value:" "},{type:"word",value:B},n):C.concat(n),[]);return we.stringify(t)}let Pj=/^\.+$/;function H0(e,B){return{start:e,end:B,span:B-e}}function Nj(e){return e.trim().split(/\s+/g)}wB.parseGridAreas=Yf;function Yf({rows:e,gap:B}){return e.reduce((t,C,n)=>(B.row&&(n*=2),C.trim()===""||Nj(C).forEach((r,i)=>{if(!Pj.test(r))if(B.column&&(i*=2),typeof t[r]>"u")t[r]={column:H0(i+1,i+2),row:H0(n+1,n+2)};else{let{column:s,row:a}=t[r];s.start=Math.min(s.start,i+1),s.end=Math.max(s.end,i+2),s.span=s.end-s.start,a.start=Math.min(a.start,n+1),a.end=Math.max(a.end,n+2),a.span=a.end-a.start}}),t),{})}function Fj(e){return e.type==="word"&&/^\[.+]$/.test(e.value)}function M0(e){return e.areas.length>e.rows.length&&e.rows.push("auto"),e}wB.parseTemplate=Xf;function Xf({decl:e,gap:B}){let t=we(e.value).nodes.reduce((C,n)=>{let{type:r,value:i}=n;return Fj(n)||r==="space"||(r==="string"&&(C=M0(C),C.areas.push(i)),(r==="word"||r==="function")&&C[C.key].push(we.stringify(n)),r==="div"&&i==="/"&&(C.key="columns",C=M0(C))),C},{key:"rows",columns:[],rows:[],areas:[]});return{areas:Yf({rows:t.areas,gap:B}),columns:yd({value:t.columns.join(" "),gap:B.column}),rows:yd({value:t.rows.join(" "),gap:B.row})}}function Sa(e,B=!1,t=!1){let C=[{prop:"-ms-grid-row",value:String(e.row.start)}];return(e.row.span>1||B)&&C.push({prop:"-ms-grid-row-span",value:String(e.row.span)}),C.push({prop:"-ms-grid-column",value:String(e.column.start)}),(e.column.span>1||t)&&C.push({prop:"-ms-grid-column-span",value:String(e.column.span)}),C}function ts(e){return e.type==="atrule"&&e.name==="media"?e:e.parent?ts(e.parent):!1}function L0(e,B){return e=e.map(t=>{let C=br.space(t),n=br.comma(t);return C.length>n.length&&(t=C.slice(-1).join("")),t}),e.map(t=>B.map((C,n)=>`${n===0?"":" "}${C} > ${t}`))}function T0(e,B){return e.selectors.some(t=>B.selectors.includes(t))}function Oj(e){let B=[];return e.walkDecls(/grid-template(-areas)?$/,t=>{let C=t.parent,n=ts(C),r=nc(t),i=_S(t,r),{areas:s}=Xf({decl:t,gap:i||r}),a=Object.keys(s);if(a.length===0)return!0;let o=B.reduce((c,{allAreas:l},u)=>l&&a.some(m=>l.includes(m))?u:c,null);if(o!==null){let{allAreas:c,rules:l}=B[o],u=l.some(f=>f.hasDuplicates===!1&&T0(f,C)),m=!1,d=l.reduce((f,g)=>!g.params&&T0(g,C)?(m=!0,g.duplicateAreaNames):(m||a.forEach(h=>{g.areas[h]&&f.push(h)}),O0(f)),[]);l.forEach(f=>{a.forEach(g=>{let h=f.areas[g];h&&h.row.span!==s[g].row.span&&(s[g].row.updateSpan=!0),h&&h.column.span!==s[g].column.span&&(s[g].column.updateSpan=!0)})}),B[o].allAreas=O0([...c,...a]),B[o].rules.push({hasDuplicates:!u,params:n.params,selectors:C.selectors,node:C,duplicateAreaNames:d,areas:s})}else B.push({allAreas:a,areasCount:0,rules:[{hasDuplicates:!1,duplicateRules:[],params:n.params,selectors:C.selectors,node:C,duplicateAreaNames:[],areas:s}]})}),B}wB.insertAreas=Rj;function Rj(e,B){let t=Oj(e);if(t.length===0)return;let C={};e.walkDecls("grid-area",n=>{let r=n.parent,i=r.first.prop==="-ms-grid-row",s=ts(r);if(B(n))return;let a=e.index(s||r),o=n.value,c=t.filter(g=>g.allAreas.includes(o))[0];if(!c)return!0;let l=c.allAreas[c.allAreas.length-1],u=br.space(r.selector),m=br.comma(r.selector),d=u.length>1&&u.length>m.length;if(i)return!1;C[l]||(C[l]={});let f=!1;for(let g of c.rules){let h=g.areas[o],p=g.duplicateAreaNames.includes(o);if(!h){let b=C[l].lastRule,A;b?A=e.index(b):A=-1,a>A&&(C[l].lastRule=s||r);continue}if(g.params&&!C[l][g.params]&&(C[l][g.params]=[]),(!g.hasDuplicates||!p)&&!g.params)Sa(h,!1,!1).reverse().forEach(b=>r.prepend(Object.assign(b,{raws:{between:n.raws.between}}))),C[l].lastRule=r,f=!0;else if(g.hasDuplicates&&!g.params&&!d){let b=r.clone();b.removeAll(),Sa(h,h.row.updateSpan,h.column.updateSpan).reverse().forEach(A=>b.prepend(Object.assign(A,{raws:{between:n.raws.between}}))),b.selectors=L0(b.selectors,g.selectors),C[l].lastRule&&C[l].lastRule.after(b),C[l].lastRule=b,f=!0}else if(g.hasDuplicates&&!g.params&&d&&r.selector.includes(g.selectors[0]))r.walkDecls(/-ms-grid-(row|column)/,b=>b.remove()),Sa(h,h.row.updateSpan,h.column.updateSpan).reverse().forEach(b=>r.prepend(Object.assign(b,{raws:{between:n.raws.between}})));else if(g.params){let b=r.clone();b.removeAll(),Sa(h,h.row.updateSpan,h.column.updateSpan).reverse().forEach(A=>b.prepend(Object.assign(A,{raws:{between:n.raws.between}}))),g.hasDuplicates&&p&&(b.selectors=L0(b.selectors,g.selectors)),b.raws=g.node.raws,e.index(g.node.parent)>a?g.node.parent.append(b):C[l][g.params].push(b),f||(C[l].lastRule=s||r)}}}),Object.keys(C).forEach(n=>{let r=C[n],i=r.lastRule;Object.keys(r).reverse().filter(s=>s!=="lastRule").forEach(s=>{r[s].length>0&&i&&(i.after({name:"media",params:s}),i.next().append(r[s]))})})}wB.warnMissedAreas=Hj;function Hj(e,B,t){let C=Object.keys(e);B.root().walkDecls("grid-area",n=>{C=C.filter(r=>r!==n.value)}),C.length>0&&B.warn(t,"Can not find grid areas: "+C.join(", "))}wB.warnTemplateSelectorNotFound=Mj;function Mj(e,B){let t=e.parent,C=e.root(),n=!1,r=br.space(t.selector).filter(i=>i!==">").slice(0,-1);if(r.length>0){let i=!1,s=null;C.walkDecls(/grid-template(-areas)?$/,a=>{let o=a.parent,c=o.selectors,{areas:l}=Xf({decl:a,gap:nc(a)}),u=l[e.value];for(let m of c){if(i)break;i=br.space(m).filter(d=>d!==">").every((d,f)=>d===r[f])}if(i||!u)return!0;s||(s=o.selector),s&&s!==o.selector&&(n=!0)}),!i&&n&&e.warn(B,`Autoprefixer cannot find a grid-template containing the duplicate grid-area "${e.value}" with full selector matching: ${r.join(" ")}`)}}wB.warnIfGridRowColumnExists=Lj;function Lj(e,B){let t=e.parent,C=[];t.walkDecls(/^grid-(row|column)/,n=>{!n.prop.endsWith("-end")&&!n.value.startsWith("span")&&!n.prop.endsWith("-gap")&&C.push(n)}),C.length>0&&C.forEach(n=>{n.warn(B,`You already have a grid-area declaration present in the rule. You should use either grid-area or ${n.prop}, not both`)})}wB.getGridGap=nc;function nc(e){let B={},t=/^(grid-)?((row|column)-)?gap$/;return e.parent.walkDecls(t,({prop:C,value:n})=>{if(/^(grid-)?gap$/.test(C)){let[r,,i]=we(n).nodes;B.row=r&&we.stringify(r),B.column=i?we.stringify(i):B.row}/^(grid-)?row-gap$/.test(C)&&(B.row=n),/^(grid-)?column-gap$/.test(C)&&(B.column=n)}),B}function G0(e){if(!e)return[];let B=we(e),t,C;return B.walk(n=>{n.type==="word"&&/min|max/g.test(n.value)?t=n.value:n.value.includes("px")&&(C=parseInt(n.value.replace(/\D/g,"")))}),[t,C]}function Tj(e,B){let t,C=vd(e),n=vd(B);if(C[0].length<n[0].length)return!1;if(C[0].length>n[0].length){let r=C[0].reduce((i,[s],a)=>{let o=n[0][0][0];return s===o?a:!1},!1);r&&(t=n[0].every((i,s)=>i.every((a,o)=>C[0].slice(r)[s][o]===a)))}else t=n.some(r=>r.every((i,s)=>i.every((a,o)=>C[0][s][o]===a)));return t}wB.inheritGridGap=_S;function _S(e,B){let t=e.parent,C=ts(t),n=t.root(),r=vd(t.selector);if(Object.keys(B).length>0)return!1;let[i]=G0(C.params),s=r[0],a=Ej(s[s.length-1][0]),o=new RegExp(`(${a}$)|(${a}[,.])`),c;return n.walkRules(o,l=>{let u;if(t.toString()===l.toString())return!1;if(l.walkDecls("grid-gap",d=>u=nc(d)),!u||Object.keys(u).length===0||!Tj(t.selector,l.selector))return!0;let m=ts(l);if(m){if(G0(m.params)[0]===i)return c=u,!0}else return c=u,!0}),c&&Object.keys(c).length>0?c:!1}wB.warnGridGap=Gj;function Gj({gap:e,hasColumns:B,decl:t,result:C}){let n=e.row&&e.column;!B&&(n||e.column&&!e.row)&&(delete e.column,t.warn(C,"Can not implement grid-gap without grid-template-columns"))}function x0(e){return we(e).nodes.reduce((B,t)=>{if(t.type==="function"&&t.value==="repeat"){let C="count",[n,r]=t.nodes.reduce((i,s)=>s.type==="word"&&C==="count"?(i[0]=Math.abs(parseInt(s.value)),i):s.type==="div"&&s.value===","?(C="value",i):(C==="value"&&(i[1]+=we.stringify(s)),i),[0,""]);if(n)for(let i=0;i<n;i++)B.push(r);return B}return t.type==="space"?B:B.concat(we.stringify(t))},[])}wB.autoplaceGridItems=xj;function xj(e,B,t,C="row"){let{parent:n}=e,r=n.nodes.find(u=>u.prop==="grid-template-rows"),i=x0(r.value),s=x0(e.value),a=i.map((u,m)=>Array.from({length:s.length},(d,f)=>f+m*s.length+1).join(" ")),o=Yf({rows:a,gap:t}),c=Object.keys(o),l=c.map(u=>o[u]);C.includes("column")&&(l=l.sort((u,m)=>u.column.start-m.column.start)),l.reverse().forEach((u,m)=>{let{column:d,row:f}=u,g=n.selectors.map(p=>p+` > *:nth-child(${c.length-m})`).join(", "),h=n.clone().removeAll();h.selector=g,h.append({prop:"-ms-grid-row",value:f.start}),h.append({prop:"-ms-grid-column",value:d.start}),n.after(h)})}let K0=jf,Kj=yt,Qj=wB.insertAreas;const Jj=/(^|[^-])linear-gradient\(\s*(top|left|right|bottom)/i,Uj=/(^|[^-])radial-gradient\(\s*\d+(\w*|%)\s+\d+(\w*|%)\s*,/i,Vj=/(!\s*)?autoprefixer:\s*ignore\s+next/i,Wj=/(!\s*)?autoprefixer\s*grid:\s*(on|off|(no-)?autoplace)/i,jj=["width","height","min-width","max-width","min-height","max-height","inline-size","min-inline-size","max-inline-size","block-size","min-block-size","max-block-size"];function Su(e){return e.parent.some(B=>B.prop==="grid-template"||B.prop==="grid-template-areas")}function Yj(e){let B=e.parent.some(C=>C.prop==="grid-template-rows"),t=e.parent.some(C=>C.prop==="grid-template-columns");return B&&t}let Xj=class{constructor(e){this.prefixes=e}add(e,B){let t=this.prefixes.add["@resolution"],C=this.prefixes.add["@keyframes"],n=this.prefixes.add["@viewport"],r=this.prefixes.add["@supports"];e.walkAtRules(o=>{if(o.name==="keyframes"){if(!this.disabled(o,B))return C&&C.process(o)}else if(o.name==="viewport"){if(!this.disabled(o,B))return n&&n.process(o)}else if(o.name==="supports"){if(this.prefixes.options.supports!==!1&&!this.disabled(o,B))return r.process(o)}else if(o.name==="media"&&o.params.includes("-resolution")&&!this.disabled(o,B))return t&&t.process(o)}),e.walkRules(o=>{if(!this.disabled(o,B))return this.prefixes.add.selectors.map(c=>c.process(o,B))});function i(o){return o.parent.nodes.some(c=>{if(c.type!=="decl")return!1;let l=c.prop==="display"&&/(inline-)?grid/.test(c.value),u=c.prop.startsWith("grid-template"),m=/^grid-([A-z]+-)?gap/.test(c.prop);return l||u||m})}function s(o){return o.parent.some(c=>c.prop==="display"&&/(inline-)?flex/.test(c.value))}let a=this.gridStatus(e,B)&&this.prefixes.add["grid-area"]&&this.prefixes.add["grid-area"].prefixes;return e.walkDecls(o=>{if(this.disabledDecl(o,B))return;let c=o.parent,l=o.prop,u=o.value;if(l==="color-adjust")c.every(d=>d.prop!=="print-color-adjust")&&B.warn("Replace color-adjust to print-color-adjust. The color-adjust shorthand is currently deprecated.",{node:o});else if(l==="grid-row-span"){B.warn("grid-row-span is not part of final Grid Layout. Use grid-row.",{node:o});return}else if(l==="grid-column-span"){B.warn("grid-column-span is not part of final Grid Layout. Use grid-column.",{node:o});return}else if(l==="display"&&u==="box"){B.warn("You should write display: flex by final spec instead of display: box",{node:o});return}else if(l==="text-emphasis-position")(u==="under"||u==="over")&&B.warn("You should use 2 values for text-emphasis-position For example, `under left` instead of just `under`.",{node:o});else if(/^(align|justify|place)-(items|content)$/.test(l)&&s(o))(u==="start"||u==="end")&&B.warn(`${u} value has mixed support, consider using flex-${u} instead`,{node:o});else if(l==="text-decoration-skip"&&u==="ink")B.warn("Replace text-decoration-skip: ink to text-decoration-skip-ink: auto, because spec had been changed",{node:o});else{if(a&&this.gridStatus(o,B))if(o.value==="subgrid"&&B.warn("IE does not support subgrid",{node:o}),/^(align|justify|place)-items$/.test(l)&&i(o)){let d=l.replace("-items","-self");B.warn(`IE does not support ${l} on grid containers. Try using ${d} on child elements instead: ${o.parent.selector} > * { ${d}: ${o.value} }`,{node:o})}else if(/^(align|justify|place)-content$/.test(l)&&i(o))B.warn(`IE does not support ${o.prop} on grid containers`,{node:o});else if(l==="display"&&o.value==="contents"){B.warn("Please do not use display: contents; if you have grid setting enabled",{node:o});return}else if(o.prop==="grid-gap"){let d=this.gridStatus(o,B);d==="autoplace"&&!Yj(o)&&!Su(o)?B.warn("grid-gap only works if grid-template(-areas) is being used or both rows and columns have been declared and cells have not been manually placed inside the explicit grid",{node:o}):(d===!0||d==="no-autoplace")&&!Su(o)&&B.warn("grid-gap only works if grid-template(-areas) is being used",{node:o})}else if(l==="grid-auto-columns"){B.warn("grid-auto-columns is not supported by IE",{node:o});return}else if(l==="grid-auto-rows"){B.warn("grid-auto-rows is not supported by IE",{node:o});return}else if(l==="grid-auto-flow"){let d=c.some(g=>g.prop==="grid-template-rows"),f=c.some(g=>g.prop==="grid-template-columns");Su(o)?B.warn("grid-auto-flow is not supported by IE",{node:o}):u.includes("dense")?B.warn("grid-auto-flow: dense is not supported by IE",{node:o}):!d&&!f&&B.warn("grid-auto-flow works only if grid-template-rows and grid-template-columns are present in the same rule",{node:o});return}else if(u.includes("auto-fit")){B.warn("auto-fit value is not supported by IE",{node:o,word:"auto-fit"});return}else if(u.includes("auto-fill")){B.warn("auto-fill value is not supported by IE",{node:o,word:"auto-fill"});return}else l.startsWith("grid-template")&&u.includes("[")&&B.warn("Autoprefixer currently does not support line names. Try using grid-template-areas instead.",{node:o,word:"["});if(u.includes("radial-gradient"))if(Uj.test(o.value))B.warn("Gradient has outdated direction syntax. New syntax is like `closest-side at 0 0` instead of `0 0, closest-side`.",{node:o});else{let d=K0(u);for(let f of d.nodes)if(f.type==="function"&&f.value==="radial-gradient")for(let g of f.nodes)g.type==="word"&&(g.value==="cover"?B.warn("Gradient has outdated direction syntax. Replace `cover` to `farthest-corner`.",{node:o}):g.value==="contain"&&B.warn("Gradient has outdated direction syntax. Replace `contain` to `closest-side`.",{node:o}))}u.includes("linear-gradient")&&Jj.test(u)&&B.warn("Gradient has outdated direction syntax. New syntax is like `to left` instead of `right`.",{node:o})}jj.includes(o.prop)&&(o.value.includes("-fill-available")||(o.value.includes("fill-available")?B.warn("Replace fill-available to stretch, because spec had been changed",{node:o}):o.value.includes("fill")&&K0(u).nodes.some(d=>d.type==="word"&&d.value==="fill")&&B.warn("Replace fill to stretch, because spec had been changed",{node:o})));let m;if(o.prop==="transition"||o.prop==="transition-property")return this.prefixes.transition.add(o,B);if(o.prop==="align-self"){if(this.displayType(o)!=="grid"&&this.prefixes.options.flexbox!==!1&&(m=this.prefixes.add["align-self"],m&&m.prefixes&&m.process(o)),this.gridStatus(o,B)!==!1&&(m=this.prefixes.add["grid-row-align"],m&&m.prefixes))return m.process(o,B)}else if(o.prop==="justify-self"){if(this.gridStatus(o,B)!==!1&&(m=this.prefixes.add["grid-column-align"],m&&m.prefixes))return m.process(o,B)}else if(o.prop==="place-self"){if(m=this.prefixes.add["place-self"],m&&m.prefixes&&this.gridStatus(o,B)!==!1)return m.process(o,B)}else if(m=this.prefixes.add[o.prop],m&&m.prefixes)return m.process(o,B)}),this.gridStatus(e,B)&&Qj(e,this.disabled),e.walkDecls(o=>{if(this.disabledValue(o,B))return;let c=this.prefixes.unprefixed(o.prop),l=this.prefixes.values("add",c);if(Array.isArray(l))for(let u of l)u.process&&u.process(o,B);Kj.save(this.prefixes,o)})}remove(e,B){let t=this.prefixes.remove["@resolution"];e.walkAtRules((C,n)=>{this.prefixes.remove[`@${C.name}`]?this.disabled(C,B)||C.parent.removeChild(n):C.name==="media"&&C.params.includes("-resolution")&&t&&t.clean(C)});for(let C of this.prefixes.remove.selectors)e.walkRules((n,r)=>{C.check(n)&&(this.disabled(n,B)||n.parent.removeChild(r))});return e.walkDecls((C,n)=>{if(this.disabled(C,B))return;let r=C.parent,i=this.prefixes.unprefixed(C.prop);if((C.prop==="transition"||C.prop==="transition-property")&&this.prefixes.transition.remove(C),this.prefixes.remove[C.prop]&&this.prefixes.remove[C.prop].remove){let s=this.prefixes.group(C).down(a=>this.prefixes.normalize(a.prop)===i);if(i==="flex-flow"&&(s=!0),C.prop==="-webkit-box-orient"){let a={"flex-direction":!0,"flex-flow":!0};if(!C.parent.some(o=>a[o.prop]))return}if(s&&!this.withHackValue(C)){C.raw("before").includes(`
`)&&this.reduceSpaces(C),r.removeChild(n);return}}for(let s of this.prefixes.values("remove",i))if(!(!s.check||!s.check(C.value))&&(i=s.unprefixed,this.prefixes.group(C).down(a=>a.value.includes(i)))){r.removeChild(n);return}})}withHackValue(e){return e.prop==="-webkit-background-clip"&&e.value==="text"}disabledValue(e,B){return this.gridStatus(e,B)===!1&&e.type==="decl"&&e.prop==="display"&&e.value.includes("grid")||this.prefixes.options.flexbox===!1&&e.type==="decl"&&e.prop==="display"&&e.value.includes("flex")||e.type==="decl"&&e.prop==="content"?!0:this.disabled(e,B)}disabledDecl(e,B){if(this.gridStatus(e,B)===!1&&e.type==="decl"&&(e.prop.includes("grid")||e.prop==="justify-items"))return!0;if(this.prefixes.options.flexbox===!1&&e.type==="decl"){let t=["order","justify-content","align-items","align-content"];if(e.prop.includes("flex")||t.includes(e.prop))return!0}return this.disabled(e,B)}disabled(e,B){if(!e)return!1;if(e._autoprefixerDisabled!==void 0)return e._autoprefixerDisabled;if(e.parent){let C=e.prev();if(C&&C.type==="comment"&&Vj.test(C.text))return e._autoprefixerDisabled=!0,e._autoprefixerSelfDisabled=!0,!0}let t=null;if(e.nodes){let C;e.each(n=>{n.type==="comment"&&/(!\s*)?autoprefixer:\s*(off|on)/i.test(n.text)&&(typeof C<"u"?B.warn("Second Autoprefixer control comment was ignored. Autoprefixer applies control comment to whole block, not to next rules.",{node:n}):C=/on/i.test(n.text))}),C!==void 0&&(t=!C)}if(!e.nodes||t===null)if(e.parent){let C=this.disabled(e.parent,B);e.parent._autoprefixerSelfDisabled===!0?t=!1:t=C}else t=!1;return e._autoprefixerDisabled=t,t}reduceSpaces(e){let B=!1;if(this.prefixes.group(e).up(()=>(B=!0,!0)),B)return;let t=e.raw("before").split(`
`),C=t[t.length-1].length,n=!1;this.prefixes.group(e).down(r=>{t=r.raw("before").split(`
`);let i=t.length-1;t[i].length>C&&(n===!1&&(n=t[i].length-C),t[i]=t[i].slice(0,-n),r.raws.before=t.join(`
`))})}displayType(e){for(let B of e.parent.nodes)if(B.prop==="display"){if(B.value.includes("flex"))return"flex";if(B.value.includes("grid"))return"grid"}return!1}gridStatus(e,B){if(!e)return!1;if(e._autoprefixerGridStatus!==void 0)return e._autoprefixerGridStatus;let t=null;if(e.nodes){let C;e.each(n=>{if(n.type==="comment"&&Wj.test(n.text)){let r=/:\s*autoplace/i.test(n.text),i=/no-autoplace/i.test(n.text);typeof C<"u"?B.warn("Second Autoprefixer grid control comment was ignored. Autoprefixer applies control comments to the whole block, not to the next rules.",{node:n}):r?C="autoplace":i?C=!0:C=/on/i.test(n.text)}}),C!==void 0&&(t=C)}if(e.type==="atrule"&&e.name==="supports"){let C=e.params;C.includes("grid")&&C.includes("auto")&&(t=!1)}if(!e.nodes||t===null)if(e.parent){let C=this.gridStatus(e.parent,B);e.parent._autoprefixerSelfDisabled===!0?t=!1:t=C}else typeof this.prefixes.options.grid<"u"?t=this.prefixes.options.grid:typeof{}.AUTOPREFIXER_GRID<"u"?{}.AUTOPREFIXER_GRID==="autoplace"?t="autoplace":t=!0:t=!1;return e._autoprefixerGridStatus=t,t}};var Zj=Xj;let qj=hI,{feature:zj}=yn,Q0=zj(qj);for(let e in Q0.stats){let B=Q0.stats[e];for(let t in B)B[t]}let _j=class{constructor(e,B){this.prefix=B,this.prefixed=e.prefixed(this.prefix),this.regexp=e.regexp(this.prefix),this.prefixeds=e.possible().map(t=>[e.prefixed(t),e.regexp(t)]),this.unprefixed=e.name,this.nameRegexp=e.regexp()}isHack(e){let B=e.parent.index(e)+1,t=e.parent.nodes;for(;B<t.length;){let C=t[B].selector;if(!C)return!0;if(C.includes(this.unprefixed)&&C.match(this.nameRegexp))return!1;let n=!1;for(let[r,i]of this.prefixeds)if(C.includes(r)&&C.match(i)){n=!0;break}if(!n)return!0;B+=1}return!0}check(e){return!(!e.selector.includes(this.prefixed)||!e.selector.match(this.regexp)||this.isHack(e))}};var $j=_j;let{list:B7}=Ds,e7=$j,t7=Wf,C7=Vf,n7=gB,r7=class extends t7{constructor(e,B,t){super(e,B,t),this.regexpCache=new Map}check(e){return e.selector.includes(this.name)?!!e.selector.match(this.regexp()):!1}prefixed(e){return this.name.replace(/^(\W*)/,`$1${e}`)}regexp(e){if(!this.regexpCache.has(e)){let B=e?this.prefixed(e):this.name;this.regexpCache.set(e,new RegExp(`(^|[^:"'=])${n7.escapeRegexp(B)}`,"gi"))}return this.regexpCache.get(e)}possible(){return C7.prefixes()}prefixeds(e){if(e._autoprefixerPrefixeds){if(e._autoprefixerPrefixeds[this.name])return e._autoprefixerPrefixeds}else e._autoprefixerPrefixeds={};let B={};if(e.selector.includes(",")){let t=B7.comma(e.selector).filter(C=>C.includes(this.name));for(let C of this.possible())B[C]=t.map(n=>this.replace(n,C)).join(", ")}else for(let t of this.possible())B[t]=this.replace(e.selector,t);return e._autoprefixerPrefixeds[this.name]=B,e._autoprefixerPrefixeds}already(e,B,t){let C=e.parent.index(e)-1;for(;C>=0;){let n=e.parent.nodes[C];if(n.type!=="rule")return!1;let r=!1;for(let i in B[this.name]){let s=B[this.name][i];if(n.selector===s){if(t===i)return!0;r=!0;break}}if(!r)return!1;C-=1}return!1}replace(e,B){return e.replace(this.regexp(),`$1${this.prefixed(B)}`)}add(e,B){let t=this.prefixeds(e);if(this.already(e,t,B))return;let C=this.clone(e,{selector:t[this.name][B]});e.parent.insertBefore(e,C)}old(e){return new e7(this,e)}};var Nr=r7;let i7=Nr;class $S extends i7{prefixed(B){return B==="-webkit-"?":-webkit-full-screen":B==="-moz-"?":-moz-full-screen":`:${B}fullscreen`}}$S.names=[":fullscreen"];var s7=$S;let a7=Nr;class B3 extends a7{possible(){return super.possible().concat(["-moz- old","-ms- old"])}prefixed(B){return B==="-webkit-"?"::-webkit-input-placeholder":B==="-ms-"?"::-ms-input-placeholder":B==="-ms- old"?":-ms-input-placeholder":B==="-moz- old"?":-moz-placeholder":`::${B}placeholder`}}B3.names=["::placeholder"];var o7=B3;let l7=Nr;class e3 extends l7{prefixed(B){return B==="-ms-"?":-ms-input-placeholder":`:${B}placeholder-shown`}}e3.names=[":placeholder-shown"];var c7=e3;let u7=Nr,d7=gB;class t3 extends u7{constructor(B,t,C){super(B,t,C),this.prefixes&&(this.prefixes=d7.uniq(this.prefixes.map(()=>"-webkit-")))}prefixed(B){return B==="-webkit-"?"::-webkit-file-upload-button":`::${B}file-selector-button`}}t3.names=["::file-selector-button"];var h7=t3,Ne=function(e){let B;return e==="-webkit- 2009"||e==="-moz-"?B=2009:e==="-ms-"?B=2012:e==="-webkit-"&&(B="final"),e==="-webkit- 2009"&&(e="-webkit-"),[B,e]};let J0=Ds.list,U0=Ne,f7=J,rc=class extends f7{prefixed(e,B){let t;return[t,B]=U0(B),t===2009?B+"box-flex":super.prefixed(e,B)}normalize(){return"flex"}set(e,B){let t=U0(B)[0];if(t===2009)return e.value=J0.space(e.value)[0],e.value=rc.oldValues[e.value]||e.value,super.set(e,B);if(t===2012){let C=J0.space(e.value);C.length===3&&C[2]==="0"&&(e.value=C.slice(0,2).concat("0px").join(" "))}return super.set(e,B)}};rc.names=["flex","box-flex"];rc.oldValues={auto:"1",none:"0"};var p7=rc;let V0=Ne,m7=J;class C3 extends m7{prefixed(B,t){let C;return[C,t]=V0(t),C===2009?t+"box-ordinal-group":C===2012?t+"flex-order":super.prefixed(B,t)}normalize(){return"order"}set(B,t){return V0(t)[0]===2009&&/\d/.test(B.value)?(B.value=(parseInt(B.value)+1).toString(),super.set(B,t)):super.set(B,t)}}C3.names=["order","flex-order","box-ordinal-group"];var g7=C3;let b7=J;class n3 extends b7{check(B){let t=B.value;return!t.toLowerCase().includes("alpha(")&&!t.includes("DXImageTransform.Microsoft")&&!t.includes("data:image/svg+xml")}}n3.names=["filter"];var A7=n3;let v7=J,{isPureNumber:y7}=gB;class r3 extends v7{insert(B,t,C,n){if(t!=="-ms-")return super.insert(B,t,C);let r=this.clone(B),i=B.prop.replace(/end$/,"start"),s=t+B.prop.replace(/end$/,"span");if(!B.parent.some(a=>a.prop===s)){if(r.prop=s,B.value.includes("span"))r.value=B.value.replace(/span\s/i,"");else{let a;if(B.parent.walkDecls(i,o=>{a=o}),a)if(y7(a.value)){let o=Number(B.value)-Number(a.value)+"";r.value=o}else return;else B.warn(n,`Can not prefix ${B.prop} (${i} is not found)`)}B.cloneBefore(r)}}}r3.names=["grid-row-end","grid-column-end"];var E7=r3;let I7=J;class i3 extends I7{check(B){return!B.value.split(/\s+/).some(t=>{let C=t.toLowerCase();return C==="reverse"||C==="alternate-reverse"})}}i3.names=["animation","animation-direction"];var S7=i3;let w7=Ne,D7=J;class s3 extends D7{insert(B,t,C){let n;if([n,t]=w7(t),n!==2009)return super.insert(B,t,C);let r=B.value.split(/\s+/).filter(c=>c!=="wrap"&&c!=="nowrap"&&"wrap-reverse");if(r.length===0||B.parent.some(c=>c.prop===t+"box-orient"||c.prop===t+"box-direction"))return;let i=r[0],s=i.includes("row")?"horizontal":"vertical",a=i.includes("reverse")?"reverse":"normal",o=this.clone(B);return o.prop=t+"box-orient",o.value=s,this.needCascade(B)&&(o.raws.before=this.calcBefore(C,B,t)),B.parent.insertBefore(B,o),o=this.clone(B),o.prop=t+"box-direction",o.value=a,this.needCascade(B)&&(o.raws.before=this.calcBefore(C,B,t)),B.parent.insertBefore(B,o)}}s3.names=["flex-flow","box-direction","box-orient"];var k7=s3;let P7=Ne,N7=J;class a3 extends N7{normalize(){return"flex"}prefixed(B,t){let C;return[C,t]=P7(t),C===2009?t+"box-flex":C===2012?t+"flex-positive":super.prefixed(B,t)}}a3.names=["flex-grow","flex-positive"];var F7=a3;let O7=Ne,R7=J;class o3 extends R7{set(B,t){if(O7(t)[0]!==2009)return super.set(B,t)}}o3.names=["flex-wrap"];var H7=o3;let M7=J,kn=wB;class l3 extends M7{insert(B,t,C,n){if(t!=="-ms-")return super.insert(B,t,C);let r=kn.parse(B),[i,s]=kn.translate(r,0,2),[a,o]=kn.translate(r,1,3);[["grid-row",i],["grid-row-span",s],["grid-column",a],["grid-column-span",o]].forEach(([c,l])=>{kn.insertDecl(B,c,l)}),kn.warnTemplateSelectorNotFound(B,n),kn.warnIfGridRowColumnExists(B,n)}}l3.names=["grid-area"];var L7=l3;let T7=J,Xr=wB;class c3 extends T7{insert(B,t,C){if(t!=="-ms-")return super.insert(B,t,C);if(B.parent.some(i=>i.prop==="-ms-grid-row-align"))return;let[[n,r]]=Xr.parse(B);r?(Xr.insertDecl(B,"grid-row-align",n),Xr.insertDecl(B,"grid-column-align",r)):(Xr.insertDecl(B,"grid-row-align",n),Xr.insertDecl(B,"grid-column-align",n))}}c3.names=["place-self"];var G7=c3;let x7=J;class u3 extends x7{check(B){let t=B.value;return!t.includes("/")&&!t.includes("span")}normalize(B){return B.replace("-start","")}prefixed(B,t){let C=super.prefixed(B,t);return t==="-ms-"&&(C=C.replace("-start","")),C}}u3.names=["grid-row-start","grid-column-start"];var K7=u3;let W0=Ne,Q7=J;class Ps extends Q7{check(B){return B.parent&&!B.parent.some(t=>t.prop&&t.prop.startsWith("grid-"))}prefixed(B,t){let C;return[C,t]=W0(t),C===2012?t+"flex-item-align":super.prefixed(B,t)}normalize(){return"align-self"}set(B,t){let C=W0(t)[0];if(C===2012)return B.value=Ps.oldValues[B.value]||B.value,super.set(B,t);if(C==="final")return super.set(B,t)}}Ps.names=["align-self","flex-item-align"];Ps.oldValues={"flex-end":"end","flex-start":"start"};var J7=Ps;let U7=J,V7=gB;class d3 extends U7{constructor(B,t,C){super(B,t,C),this.prefixes&&(this.prefixes=V7.uniq(this.prefixes.map(n=>n==="-ms-"?"-webkit-":n)))}}d3.names=["appearance"];var W7=d3;let j0=Ne,j7=J;class h3 extends j7{normalize(){return"flex-basis"}prefixed(B,t){let C;return[C,t]=j0(t),C===2012?t+"flex-preferred-size":super.prefixed(B,t)}set(B,t){let C;if([C,t]=j0(t),C===2012||C==="final")return super.set(B,t)}}h3.names=["flex-basis","flex-preferred-size"];var Y7=h3;let X7=J;class f3 extends X7{normalize(){return this.name.replace("box-image","border")}prefixed(B,t){let C=super.prefixed(B,t);return t==="-webkit-"&&(C=C.replace("border","box-image")),C}}f3.names=["mask-border","mask-border-source","mask-border-slice","mask-border-width","mask-border-outset","mask-border-repeat","mask-box-image","mask-box-image-source","mask-box-image-slice","mask-box-image-width","mask-box-image-outset","mask-box-image-repeat"];var Z7=f3;let q7=J;class Rt extends q7{insert(B,t,C){let n=B.prop==="mask-composite",r;n?r=B.value.split(","):r=B.value.match(Rt.regexp)||[],r=r.map(o=>o.trim()).filter(o=>o);let i=r.length,s;if(i&&(s=this.clone(B),s.value=r.map(o=>Rt.oldValues[o]||o).join(", "),r.includes("intersect")&&(s.value+=", xor"),s.prop=t+"mask-composite"),n)return i?(this.needCascade(B)&&(s.raws.before=this.calcBefore(C,B,t)),B.parent.insertBefore(B,s)):void 0;let a=this.clone(B);return a.prop=t+a.prop,i&&(a.value=a.value.replace(Rt.regexp,"")),this.needCascade(B)&&(a.raws.before=this.calcBefore(C,B,t)),B.parent.insertBefore(B,a),i?(this.needCascade(B)&&(s.raws.before=this.calcBefore(C,B,t)),B.parent.insertBefore(B,s)):B}}Rt.names=["mask","mask-composite"];Rt.oldValues={add:"source-over",subtract:"source-out",intersect:"source-in",exclude:"xor"};Rt.regexp=new RegExp(`\\s+(${Object.keys(Rt.oldValues).join("|")})\\b(?!\\))\\s*(?=[,])`,"ig");var z7=Rt;let Y0=Ne,_7=J;class Ns extends _7{prefixed(B,t){let C;return[C,t]=Y0(t),C===2009?t+"box-align":C===2012?t+"flex-align":super.prefixed(B,t)}normalize(){return"align-items"}set(B,t){let C=Y0(t)[0];return(C===2009||C===2012)&&(B.value=Ns.oldValues[B.value]||B.value),super.set(B,t)}}Ns.names=["align-items","flex-align","box-align"];Ns.oldValues={"flex-end":"end","flex-start":"start"};var $7=Ns;let BY=J;class p3 extends BY{set(B,t){return t==="-ms-"&&B.value==="contain"&&(B.value="element"),super.set(B,t)}insert(B,t,C){if(!(B.value==="all"&&t==="-ms-"))return super.insert(B,t,C)}}p3.names=["user-select"];var eY=p3;let X0=Ne,tY=J;class m3 extends tY{normalize(){return"flex-shrink"}prefixed(B,t){let C;return[C,t]=X0(t),C===2012?t+"flex-negative":super.prefixed(B,t)}set(B,t){let C;if([C,t]=X0(t),C===2012||C==="final")return super.set(B,t)}}m3.names=["flex-shrink","flex-negative"];var CY=m3;let nY=J;class g3 extends nY{prefixed(B,t){return`${t}column-${B}`}normalize(B){return B.includes("inside")?"break-inside":B.includes("before")?"break-before":"break-after"}set(B,t){return(B.prop==="break-inside"&&B.value==="avoid-column"||B.value==="avoid-page")&&(B.value="avoid"),super.set(B,t)}insert(B,t,C){if(B.prop!=="break-inside")return super.insert(B,t,C);if(!(/region/i.test(B.value)||/page/i.test(B.value)))return super.insert(B,t,C)}}g3.names=["break-inside","page-break-inside","column-break-inside","break-before","page-break-before","column-break-before","break-after","page-break-after","column-break-after"];var rY=g3;let iY=J;class Fs extends iY{insert(B,t,C){if(t==="-ms-"){let n=this.set(this.clone(B),t);this.needCascade(B)&&(n.raws.before=this.calcBefore(C,B,t));let r="ltr";return B.parent.nodes.forEach(i=>{i.prop==="direction"&&(i.value==="rtl"||i.value==="ltr")&&(r=i.value)}),n.value=Fs.msValues[r][B.value]||B.value,B.parent.insertBefore(B,n)}return super.insert(B,t,C)}}Fs.names=["writing-mode"];Fs.msValues={ltr:{"horizontal-tb":"lr-tb","vertical-rl":"tb-rl","vertical-lr":"tb-lr"},rtl:{"horizontal-tb":"rl-tb","vertical-rl":"bt-rl","vertical-lr":"bt-lr"}};var sY=Fs;let aY=J;class b3 extends aY{set(B,t){return B.value=B.value.replace(/\s+fill(\s)/,"$1"),super.set(B,t)}}b3.names=["border-image"];var oY=b3;let Z0=Ne,lY=J;class Os extends lY{prefixed(B,t){let C;return[C,t]=Z0(t),C===2012?t+"flex-line-pack":super.prefixed(B,t)}normalize(){return"align-content"}set(B,t){let C=Z0(t)[0];if(C===2012)return B.value=Os.oldValues[B.value]||B.value,super.set(B,t);if(C==="final")return super.set(B,t)}}Os.names=["align-content","flex-line-pack"];Os.oldValues={"flex-end":"end","flex-start":"start","space-between":"justify","space-around":"distribute"};var cY=Os;let uY=J;class _e extends uY{prefixed(B,t){return t==="-moz-"?t+(_e.toMozilla[B]||B):super.prefixed(B,t)}normalize(B){return _e.toNormal[B]||B}}_e.names=["border-radius"];_e.toMozilla={};_e.toNormal={};for(let e of["top","bottom"])for(let B of["left","right"]){let t=`border-${e}-${B}-radius`,C=`border-radius-${e}${B}`;_e.names.push(t),_e.names.push(C),_e.toMozilla[t]=C,_e.toNormal[C]=t}var dY=_e;let hY=J;class A3 extends hY{prefixed(B,t){return B.includes("-start")?t+B.replace("-block-start","-before"):t+B.replace("-block-end","-after")}normalize(B){return B.includes("-before")?B.replace("-before","-block-start"):B.replace("-after","-block-end")}}A3.names=["border-block-start","border-block-end","margin-block-start","margin-block-end","padding-block-start","padding-block-end","border-before","border-after","margin-before","margin-after","padding-before","padding-after"];var fY=A3;let pY=J,{parseTemplate:mY,warnMissedAreas:gY,getGridGap:bY,warnGridGap:AY,inheritGridGap:vY}=wB;class v3 extends pY{insert(B,t,C,n){if(t!=="-ms-")return super.insert(B,t,C);if(B.parent.some(m=>m.prop==="-ms-grid-rows"))return;let r=bY(B),i=vY(B,r),{rows:s,columns:a,areas:o}=mY({decl:B,gap:i||r}),c=Object.keys(o).length>0,l=Boolean(s),u=Boolean(a);return AY({gap:r,hasColumns:u,decl:B,result:n}),gY(o,B,n),(l&&u||c)&&B.cloneBefore({prop:"-ms-grid-rows",value:s,raws:{}}),u&&B.cloneBefore({prop:"-ms-grid-columns",value:a,raws:{}}),B}}v3.names=["grid-template"];var yY=v3;let EY=J;class y3 extends EY{prefixed(B,t){return t+B.replace("-inline","")}normalize(B){return B.replace(/(margin|padding|border)-(start|end)/,"$1-inline-$2")}}y3.names=["border-inline-start","border-inline-end","margin-inline-start","margin-inline-end","padding-inline-start","padding-inline-end","border-start","border-end","margin-start","margin-end","padding-start","padding-end"];var IY=y3;let SY=J;class E3 extends SY{check(B){return!B.value.includes("flex-")&&B.value!=="baseline"}prefixed(B,t){return t+"grid-row-align"}normalize(){return"align-self"}}E3.names=["grid-row-align"];var wY=E3;let DY=J;class Rs extends DY{keyframeParents(B){let{parent:t}=B;for(;t;){if(t.type==="atrule"&&t.name==="keyframes")return!0;({parent:t}=t)}return!1}contain3d(B){if(B.prop==="transform-origin")return!1;for(let t of Rs.functions3d)if(B.value.includes(`${t}(`))return!0;return!1}set(B,t){return B=super.set(B,t),t==="-ms-"&&(B.value=B.value.replace(/rotatez/gi,"rotate")),B}insert(B,t,C){if(t==="-ms-"){if(!this.contain3d(B)&&!this.keyframeParents(B))return super.insert(B,t,C)}else if(t==="-o-"){if(!this.contain3d(B))return super.insert(B,t,C)}else return super.insert(B,t,C)}}Rs.names=["transform","transform-origin"];Rs.functions3d=["matrix3d","translate3d","translateZ","scale3d","scaleZ","rotate3d","rotateX","rotateY","perspective"];var kY=Rs;let q0=Ne,PY=J;class I3 extends PY{normalize(){return"flex-direction"}insert(B,t,C){let n;if([n,t]=q0(t),n!==2009)return super.insert(B,t,C);if(B.parent.some(o=>o.prop===t+"box-orient"||o.prop===t+"box-direction"))return;let r=B.value,i,s;r==="inherit"||r==="initial"||r==="unset"?(i=r,s=r):(i=r.includes("row")?"horizontal":"vertical",s=r.includes("reverse")?"reverse":"normal");let a=this.clone(B);return a.prop=t+"box-orient",a.value=i,this.needCascade(B)&&(a.raws.before=this.calcBefore(C,B,t)),B.parent.insertBefore(B,a),a=this.clone(B),a.prop=t+"box-direction",a.value=s,this.needCascade(B)&&(a.raws.before=this.calcBefore(C,B,t)),B.parent.insertBefore(B,a)}old(B,t){let C;return[C,t]=q0(t),C===2009?[t+"box-orient",t+"box-direction"]:super.old(B,t)}}I3.names=["flex-direction","box-direction","box-orient"];var NY=I3;let FY=J;class S3 extends FY{check(B){return B.value==="pixelated"}prefixed(B,t){return t==="-ms-"?"-ms-interpolation-mode":super.prefixed(B,t)}set(B,t){return t!=="-ms-"?super.set(B,t):(B.prop="-ms-interpolation-mode",B.value="nearest-neighbor",B)}normalize(){return"image-rendering"}process(B,t){return super.process(B,t)}}S3.names=["image-rendering","interpolation-mode"];var OY=S3;let RY=J,HY=gB;class w3 extends RY{constructor(B,t,C){super(B,t,C),this.prefixes&&(this.prefixes=HY.uniq(this.prefixes.map(n=>n==="-ms-"?"-webkit-":n)))}}w3.names=["backdrop-filter"];var MY=w3;let LY=J,TY=gB;class D3 extends LY{constructor(B,t,C){super(B,t,C),this.prefixes&&(this.prefixes=TY.uniq(this.prefixes.map(n=>n==="-ms-"?"-webkit-":n)))}check(B){return B.value.toLowerCase()==="text"}}D3.names=["background-clip"];var GY=D3;let xY=J;const KY=["none","underline","overline","line-through","blink","inherit","initial","unset"];class k3 extends xY{check(B){return B.value.split(/\s+/).some(t=>!KY.includes(t))}}k3.names=["text-decoration"];var QY=k3;let z0=Ne,JY=J;class Hs extends JY{prefixed(B,t){let C;return[C,t]=z0(t),C===2009?t+"box-pack":C===2012?t+"flex-pack":super.prefixed(B,t)}normalize(){return"justify-content"}set(B,t){let C=z0(t)[0];if(C===2009||C===2012){let n=Hs.oldValues[B.value]||B.value;if(B.value=n,C!==2009||n!=="distribute")return super.set(B,t)}else if(C==="final")return super.set(B,t)}}Hs.names=["justify-content","flex-pack","box-pack"];Hs.oldValues={"flex-end":"end","flex-start":"start","space-between":"justify","space-around":"distribute"};var UY=Hs;let VY=J;class P3 extends VY{set(B,t){let C=B.value.toLowerCase();return t==="-webkit-"&&!C.includes(" ")&&C!=="contain"&&C!=="cover"&&(B.value=B.value+" "+B.value),super.set(B,t)}}P3.names=["background-size"];var WY=P3;let jY=J,wu=wB;class N3 extends jY{insert(B,t,C){if(t!=="-ms-")return super.insert(B,t,C);let n=wu.parse(B),[r,i]=wu.translate(n,0,1);n[0]&&n[0].includes("span")&&(i=n[0].join("").replace(/\D/g,"")),[[B.prop,r],[`${B.prop}-span`,i]].forEach(([s,a])=>{wu.insertDecl(B,s,a)})}}N3.names=["grid-row","grid-column"];var YY=N3;let XY=J,{prefixTrackProp:_0,prefixTrackValue:ZY,autoplaceGridItems:qY,getGridGap:zY,inheritGridGap:_Y}=wB,$Y=Zj;class F3 extends XY{prefixed(B,t){return t==="-ms-"?_0({prop:B,prefix:t}):super.prefixed(B,t)}normalize(B){return B.replace(/^grid-(rows|columns)/,"grid-template-$1")}insert(B,t,C,n){if(t!=="-ms-")return super.insert(B,t,C);let{parent:r,prop:i,value:s}=B,a=i.includes("rows"),o=i.includes("columns"),c=r.some(p=>p.prop==="grid-template"||p.prop==="grid-template-areas");if(c&&a)return!1;let l=new $Y({options:{}}),u=l.gridStatus(r,n),m=zY(B);m=_Y(B,m)||m;let d=a?m.row:m.column;(u==="no-autoplace"||u===!0)&&!c&&(d=null);let f=ZY({value:s,gap:d});B.cloneBefore({prop:_0({prop:i,prefix:t}),value:f});let g=r.nodes.find(p=>p.prop==="grid-auto-flow"),h="row";if(g&&!l.disabled(g,n)&&(h=g.value.trim()),u==="autoplace"){let p=r.nodes.find(b=>b.prop==="grid-template-rows");if(!p&&c)return;if(!p&&!c){B.warn(n,"Autoplacement does not work without grid-template-rows property");return}!r.nodes.find(b=>b.prop==="grid-template-columns")&&!c&&B.warn(n,"Autoplacement does not work without grid-template-columns property"),o&&!c&&qY(B,n,m,h)}}}F3.names=["grid-template-rows","grid-template-columns","grid-rows","grid-columns"];var BX=F3;let eX=J;class O3 extends eX{check(B){return!B.value.includes("flex-")&&B.value!=="baseline"}prefixed(B,t){return t+"grid-column-align"}normalize(){return"justify-self"}}O3.names=["grid-column-align"];var tX=O3;let CX=J;class R3 extends CX{prefixed(B,t){return t==="-moz-"?"color-adjust":t+"print-color-adjust"}normalize(){return"print-color-adjust"}}R3.names=["print-color-adjust","color-adjust"];var nX=R3;let rX=J;class H3 extends rX{prefixed(B,t){return t+"scroll-chaining"}normalize(){return"overscroll-behavior"}set(B,t){return B.value==="auto"?B.value="chained":(B.value==="none"||B.value==="contain")&&(B.value="none"),super.set(B,t)}}H3.names=["overscroll-behavior","scroll-chaining"];var iX=H3;let sX=J,{parseGridAreas:aX,warnMissedAreas:oX,prefixTrackProp:lX,prefixTrackValue:$0,getGridGap:cX,warnGridGap:uX,inheritGridGap:dX}=wB;function hX(e){return e.trim().slice(1,-1).split(/["']\s*["']?/g)}class M3 extends sX{insert(B,t,C,n){if(t!=="-ms-")return super.insert(B,t,C);let r=!1,i=!1,s=B.parent,a=cX(B);a=dX(B,a)||a,s.walkDecls(/-ms-grid-rows/,l=>l.remove()),s.walkDecls(/grid-template-(rows|columns)/,l=>{if(l.prop==="grid-template-rows"){i=!0;let{prop:u,value:m}=l;l.cloneBefore({prop:lX({prop:u,prefix:t}),value:$0({value:m,gap:a.row})})}else r=!0});let o=hX(B.value);r&&!i&&a.row&&o.length>1&&B.cloneBefore({prop:"-ms-grid-rows",value:$0({value:`repeat(${o.length}, auto)`,gap:a.row}),raws:{}}),uX({gap:a,hasColumns:r,decl:B,result:n});let c=aX({rows:o,gap:a});return oX(c,B,n),B}}M3.names=["grid-template-areas"];var fX=M3;let pX=J;class L3 extends pX{set(B,t){return t==="-webkit-"&&(B.value=B.value.replace(/\s*(right|left)\s*/i,"")),super.set(B,t)}}L3.names=["text-emphasis-position"];var mX=L3;let gX=J;class T3 extends gX{set(B,t){return B.prop==="text-decoration-skip-ink"&&B.value==="auto"?(B.prop=t+"text-decoration-skip",B.value="ink",B):super.set(B,t)}}T3.names=["text-decoration-skip-ink","text-decoration-skip"];var bX=T3,AX={wrap:G3,limit:x3,validate:K3,test:Zf,curry:vX,name:Q3};function G3(e,B,t){var C=B-e;return((t-e)%C+C)%C+e}function x3(e,B,t){return Math.max(e,Math.min(B,t))}function K3(e,B,t,C,n){if(!Zf(e,B,t,C,n))throw new Error(t+" is outside of range ["+e+","+B+")");return t}function Zf(e,B,t,C,n){return!(t<e||t>B||n&&t===B||C&&t===e)}function Q3(e,B,t,C){return(t?"(":"[")+e+","+B+(C?")":"]")}function vX(e,B,t,C){var n=Q3.bind(null,e,B,t,C);return{wrap:G3.bind(null,e,B),limit:x3.bind(null,e,B),validate:function(r){return K3(e,B,r,t,C)},test:function(r){return Zf(e,B,r,t,C)},toString:n,name:n}}let Du=jf,yX=AX,EX=ks,IX=yt,SX=gB,Bg=/top|left|right|bottom/gi;class yC extends IX{replace(B,t){let C=Du(B);for(let n of C.nodes){let r=this.name;if(n.type==="function"&&n.value===r)if(n.nodes=this.newDirection(n.nodes),n.nodes=this.normalize(n.nodes,r),t==="-webkit- old"){if(!this.oldWebkit(n))return!1}else n.nodes=this.convertDirection(n.nodes),n.value=t+n.value}return C.toString()}replaceFirst(B,...t){return t.map(C=>C===" "?{type:"space",value:C}:{type:"word",value:C}).concat(B.slice(1))}normalizeUnit(B,t){return`${parseFloat(B)/t*360}deg`}normalize(B,t){if(!B[0])return B;if(/-?\d+(.\d+)?grad/.test(B[0].value))B[0].value=this.normalizeUnit(B[0].value,400);else if(/-?\d+(.\d+)?rad/.test(B[0].value))B[0].value=this.normalizeUnit(B[0].value,2*Math.PI);else if(/-?\d+(.\d+)?turn/.test(B[0].value))B[0].value=this.normalizeUnit(B[0].value,1);else if(B[0].value.includes("deg")){let C=parseFloat(B[0].value);C=yX.wrap(0,360,C),B[0].value=`${C}deg`}if(t==="linear-gradient"||t==="repeating-linear-gradient"){let C=B[0].value;C==="0deg"||C==="0"?B=this.replaceFirst(B,"to"," ","top"):C==="90deg"?B=this.replaceFirst(B,"to"," ","right"):C==="180deg"?B=this.replaceFirst(B,"to"," ","bottom"):C==="270deg"&&(B=this.replaceFirst(B,"to"," ","left"))}return B}newDirection(B){if(B[0].value==="to"||(Bg.lastIndex=0,!Bg.test(B[0].value)))return B;B.unshift({type:"word",value:"to"},{type:"space",value:" "});for(let t=2;t<B.length&&B[t].type!=="div";t++)B[t].type==="word"&&(B[t].value=this.revertDirection(B[t].value));return B}isRadial(B){let t="before";for(let C of B)if(t==="before"&&C.type==="space")t="at";else if(t==="at"&&C.value==="at")t="after";else{if(t==="after"&&C.type==="space")return!0;if(C.type==="div")break;t="before"}return!1}convertDirection(B){return B.length>0&&(B[0].value==="to"?this.fixDirection(B):B[0].value.includes("deg")?this.fixAngle(B):this.isRadial(B)&&this.fixRadial(B)),B}fixDirection(B){B.splice(0,2);for(let t of B){if(t.type==="div")break;t.type==="word"&&(t.value=this.revertDirection(t.value))}}fixAngle(B){let t=B[0].value;t=parseFloat(t),t=Math.abs(450-t)%360,t=this.roundFloat(t,3),B[0].value=`${t}deg`}fixRadial(B){let t=[],C=[],n,r,i,s,a;for(s=0;s<B.length-2;s++)if(n=B[s],r=B[s+1],i=B[s+2],n.type==="space"&&r.value==="at"&&i.type==="space"){a=s+3;break}else t.push(n);let o;for(s=a;s<B.length;s++)if(B[s].type==="div"){o=B[s];break}else C.push(B[s]);B.splice(0,s,...C,o,...t)}revertDirection(B){return yC.directions[B.toLowerCase()]||B}roundFloat(B,t){return parseFloat(B.toFixed(t))}oldWebkit(B){let{nodes:t}=B,C=Du.stringify(B.nodes);if(this.name!=="linear-gradient"||t[0]&&t[0].value.includes("deg")||C.includes("px")||C.includes("-corner")||C.includes("-side"))return!1;let n=[[]];for(let r of t)n[n.length-1].push(r),r.type==="div"&&r.value===","&&n.push([]);this.oldDirection(n),this.colorStops(n),B.nodes=[];for(let r of n)B.nodes=B.nodes.concat(r);return B.nodes.unshift({type:"word",value:"linear"},this.cloneDiv(B.nodes)),B.value="-webkit-gradient",!0}oldDirection(B){let t=this.cloneDiv(B[0]);if(B[0][0].value!=="to")return B.unshift([{type:"word",value:yC.oldDirections.bottom},t]);{let C=[];for(let r of B[0].slice(2))r.type==="word"&&C.push(r.value.toLowerCase());C=C.join(" ");let n=yC.oldDirections[C]||C;return B[0]=[{type:"word",value:n},t],B[0]}}cloneDiv(B){for(let t of B)if(t.type==="div"&&t.value===",")return t;return{type:"div",value:",",after:" "}}colorStops(B){let t=[];for(let C=0;C<B.length;C++){let n,r=B[C],i;if(C===0)continue;let s=Du.stringify(r[0]);r[1]&&r[1].type==="word"?n=r[1].value:r[2]&&r[2].type==="word"&&(n=r[2].value);let a;C===1&&(!n||n==="0%")?a=`from(${s})`:C===B.length-1&&(!n||n==="100%")?a=`to(${s})`:n?a=`color-stop(${n}, ${s})`:a=`color-stop(${s})`;let o=r[r.length-1];B[C]=[{type:"word",value:a}],o.type==="div"&&o.value===","&&(i=B[C].push(o)),t.push(i)}return t}old(B){if(B==="-webkit-"){let t;this.name==="linear-gradient"?t="linear":this.name==="repeating-linear-gradient"?t="repeating-linear":this.name==="repeating-radial-gradient"?t="repeating-radial":t="radial";let C="-gradient",n=SX.regexp(`-webkit-(${t}-gradient|gradient\\(\\s*${t})`,!1);return new EX(this.name,B+this.name,C,n)}else return super.old(B)}add(B,t){let C=B.prop;if(C.includes("mask")){if(t==="-webkit-"||t==="-webkit- old")return super.add(B,t)}else if(C==="list-style"||C==="list-style-image"||C==="content"){if(t==="-webkit-"||t==="-webkit- old")return super.add(B,t)}else return super.add(B,t)}}yC.names=["linear-gradient","repeating-linear-gradient","radial-gradient","repeating-radial-gradient"];yC.directions={top:"bottom",left:"right",bottom:"top",right:"left"};yC.oldDirections={top:"left bottom, left top",left:"right top, left top",bottom:"left top, left bottom",right:"left top, right top","top right":"left bottom, right top","top left":"right bottom, left top","right top":"left bottom, right top","right bottom":"left top, right bottom","bottom right":"left top, right bottom","bottom left":"right top, left bottom","left top":"right bottom, left top","left bottom":"right top, left bottom"};var wX=yC;let DX=ks,kX=yt;function eg(e){return new RegExp(`(^|[\\s,(])(${e}($|[\\s),]))`,"gi")}class J3 extends kX{regexp(){return this.regexpCache||(this.regexpCache=eg(this.name)),this.regexpCache}isStretch(){return this.name==="stretch"||this.name==="fill"||this.name==="fill-available"}replace(B,t){return t==="-moz-"&&this.isStretch()?B.replace(this.regexp(),"$1-moz-available$3"):t==="-webkit-"&&this.isStretch()?B.replace(this.regexp(),"$1-webkit-fill-available$3"):super.replace(B,t)}old(B){let t=B+this.name;return this.isStretch()&&(B==="-moz-"?t="-moz-available":B==="-webkit-"&&(t="-webkit-fill-available")),new DX(this.name,t,t,eg(t))}add(B,t){if(!(B.prop.includes("grid")&&t!=="-webkit-"))return super.add(B,t)}}J3.names=["max-content","min-content","fit-content","fill","fill-available","stretch"];var PX=J3;let tg=ks,NX=yt;class U3 extends NX{replace(B,t){return t==="-webkit-"?B.replace(this.regexp(),"$1-webkit-optimize-contrast"):t==="-moz-"?B.replace(this.regexp(),"$1-moz-crisp-edges"):super.replace(B,t)}old(B){return B==="-webkit-"?new tg(this.name,"-webkit-optimize-contrast"):B==="-moz-"?new tg(this.name,"-moz-crisp-edges"):super.old(B)}}U3.names=["pixelated"];var FX=U3;let OX=yt;class V3 extends OX{replace(B,t){let C=super.replace(B,t);return t==="-webkit-"&&(C=C.replace(/("[^"]+"|'[^']+')(\s+\d+\w)/gi,"url($1)$2")),C}}V3.names=["image-set"];var RX=V3;let HX=Ds.list,MX=yt;class W3 extends MX{replace(B,t){return HX.space(B).map(C=>{if(C.slice(0,+this.name.length+1)!==this.name+"(")return C;let n=C.lastIndexOf(")"),r=C.slice(n+1),i=C.slice(this.name.length+1,n);if(t==="-webkit-"){let s=i.match(/\d*.?\d+%?/);s?(i=i.slice(s[0].length).trim(),i+=`, ${s[0]}`):i+=", 0.5"}return t+this.name+"("+i+")"+r}).join(" ")}}W3.names=["cross-fade"];var LX=W3;let TX=Ne,GX=ks,xX=yt;class j3 extends xX{constructor(B,t){super(B,t),B==="display-flex"&&(this.name="flex")}check(B){return B.prop==="display"&&B.value===this.name}prefixed(B){let t,C;return[t,B]=TX(B),t===2009?this.name==="flex"?C="box":C="inline-box":t===2012?this.name==="flex"?C="flexbox":C="inline-flexbox":t==="final"&&(C=this.name),B+C}replace(B,t){return this.prefixed(t)}old(B){let t=this.prefixed(B);if(t)return new GX(this.name,t)}}j3.names=["display-flex","inline-flex"];var KX=j3;let QX=yt;class Y3 extends QX{constructor(B,t){super(B,t),B==="display-grid"&&(this.name="grid")}check(B){return B.prop==="display"&&B.value===this.name}}Y3.names=["display-grid","inline-grid"];var JX=Y3;let UX=yt;class X3 extends UX{constructor(B,t){super(B,t),B==="filter-function"&&(this.name="filter")}}X3.names=["filter","filter-function"];var VX=X3;let WX=Nr,jX=gB;class Z3 extends WX{constructor(B,t,C){super(B,t,C),this.prefixes&&(this.prefixes=jX.uniq(this.prefixes.map(()=>"-webkit-")))}prefixed(B){return B==="-webkit-"?":-webkit-autofill":`:${B}autofill`}}Z3.names=[":autofill"];var YX=Z3;let V=J,Ms=Nr,MC=yt,XX=s7,ZX=o7,qX=c7,zX=h7,_X=p7,$X=g7,BZ=A7,eZ=E7,tZ=S7,CZ=k7,nZ=F7,rZ=H7,iZ=L7,sZ=G7,aZ=K7,oZ=J7,lZ=W7,cZ=Y7,uZ=Z7,dZ=z7,hZ=$7,fZ=eY,pZ=CY,mZ=rY,gZ=sY,bZ=oY,AZ=cY,vZ=dY,yZ=fY,EZ=yY,IZ=IY,SZ=wY,wZ=kY,DZ=NY,kZ=OY,PZ=MY,NZ=GY,FZ=QY,OZ=UY,RZ=WY,HZ=YY,MZ=BX,LZ=tX,TZ=nX,GZ=iX,xZ=fX,KZ=mX,QZ=bX,JZ=wX,UZ=PX,VZ=FX,WZ=RX,jZ=LX,YZ=KX,XZ=JX,ZZ=VX,qZ=YX;Ms.hack(qZ);Ms.hack(XX);Ms.hack(ZX);Ms.hack(qX);Ms.hack(zX);V.hack(_X);V.hack($X);V.hack(BZ);V.hack(eZ);V.hack(tZ);V.hack(CZ);V.hack(nZ);V.hack(rZ);V.hack(iZ);V.hack(sZ);V.hack(aZ);V.hack(oZ);V.hack(lZ);V.hack(cZ);V.hack(uZ);V.hack(dZ);V.hack(hZ);V.hack(fZ);V.hack(pZ);V.hack(mZ);V.hack(gZ);V.hack(bZ);V.hack(AZ);V.hack(vZ);V.hack(yZ);V.hack(EZ);V.hack(IZ);V.hack(SZ);V.hack(wZ);V.hack(DZ);V.hack(kZ);V.hack(PZ);V.hack(NZ);V.hack(FZ);V.hack(OZ);V.hack(RZ);V.hack(HZ);V.hack(MZ);V.hack(LZ);V.hack(GZ);V.hack(xZ);V.hack(TZ);V.hack(KZ);V.hack(QZ);MC.hack(JZ);MC.hack(UZ);MC.hack(VZ);MC.hack(WZ);MC.hack(jZ);MC.hack(YZ);MC.hack(XZ);MC.hack(ZZ);let zZ=yn.feature;function q3(e,B){return e=e.split(" "),B=B.split(" "),e[0]>B[0]?1:e[0]<B[0]?-1:Math.sign(parseFloat(e[1])-parseFloat(B[1]))}function F(e,B,t){e=zZ(e),t||([t,B]=[B,{}]);let C=B.match||/\sx($|\s)/,n=[];for(let r in e.stats){let i=e.stats[r];for(let s in i)i[s].match(C)&&n.push(r+" "+s)}t(n.sort(q3))}let Ed={};function N(e,B){for(let t of e)Ed[t]=Object.assign({},B)}function Bo(e,B){for(let t of e)Ed[t].browsers=Ed[t].browsers.concat(B.browsers).sort(q3)}let _Z=BI;F(_Z,e=>N(["border-radius","border-top-left-radius","border-top-right-radius","border-bottom-right-radius","border-bottom-left-radius"],{mistakes:["-khtml-","-ms-","-o-"],feature:"border-radius",browsers:e}));let $Z=aI;F($Z,e=>N(["box-shadow"],{mistakes:["-khtml-"],feature:"css-boxshadow",browsers:e}));let Bq=tI;F(Bq,e=>N(["animation","animation-name","animation-duration","animation-delay","animation-direction","animation-fill-mode","animation-iteration-count","animation-play-state","animation-timing-function","@keyframes"],{mistakes:["-khtml-","-ms-"],feature:"css-animation",browsers:e}));let eq=GI;F(eq,e=>N(["transition","transition-property","transition-duration","transition-delay","transition-timing-function"],{mistakes:["-khtml-","-ms-"],browsers:e,feature:"css-transitions"}));let tq=lS;F(tq,e=>N(["transform","transform-origin"],{feature:"transforms2d",browsers:e}));let z3=cS;F(z3,e=>(N(["perspective","perspective-origin"],{feature:"transforms3d",browsers:e}),N(["transform-style"],{mistakes:["-ms-","-o-"],browsers:e,feature:"transforms3d"})));F(z3,{match:/y\sx|y\s#2/},e=>N(["backface-visibility"],{mistakes:["-ms-","-o-"],feature:"transforms3d",browsers:e}));let _3=gI;F(_3,{match:/y\sx/},e=>N(["linear-gradient","repeating-linear-gradient","radial-gradient","repeating-radial-gradient"],{props:["background","background-image","border-image","mask","list-style","list-style-image","content","mask-image"],mistakes:["-ms-"],feature:"css-gradients",browsers:e}));F(_3,{match:/a\sx/},e=>(e=e.map(B=>/firefox|op/.test(B)?B:`${B} old`),Bo(["linear-gradient","repeating-linear-gradient","radial-gradient","repeating-radial-gradient"],{feature:"css-gradients",browsers:e})));let Cq=QI;F(Cq,e=>N(["box-sizing"],{feature:"css3-boxsizing",browsers:e}));let nq=mI;F(nq,e=>N(["filter"],{feature:"css-filters",browsers:e}));let rq=pI;F(rq,e=>N(["filter-function"],{props:["background","background-image","border-image","mask","list-style","list-style-image","content","mask-image"],feature:"css-filter-function",browsers:e}));let iq=iI;F(iq,{match:/y\sx|y\s#2/},e=>N(["backdrop-filter"],{feature:"css-backdrop-filter",browsers:e}));let sq=dI;F(sq,e=>N(["element"],{props:["background","background-image","border-image","mask","list-style","list-style-image","content","mask-image"],feature:"css-element-function",browsers:e}));let aq=CS;F(aq,e=>{N(["columns","column-width","column-gap","column-rule","column-rule-color","column-rule-width","column-count","column-rule-style","column-span","column-fill"],{feature:"multicolumn",browsers:e});let B=e.filter(t=>!/firefox/.test(t));N(["break-before","break-after","break-inside"],{feature:"multicolumn",browsers:B})});let oq=uS;F(oq,e=>N(["user-select"],{mistakes:["-khtml-"],feature:"user-select-none",browsers:e}));let $3=WI;F($3,{match:/a\sx/},e=>{e=e.map(B=>/ie|firefox/.test(B)?B:`${B} 2009`),N(["display-flex","inline-flex"],{props:["display"],feature:"flexbox",browsers:e}),N(["flex","flex-grow","flex-shrink","flex-basis"],{feature:"flexbox",browsers:e}),N(["flex-direction","flex-wrap","flex-flow","justify-content","order","align-items","align-self","align-content"],{feature:"flexbox",browsers:e})});F($3,{match:/y\sx/},e=>{Bo(["display-flex","inline-flex"],{feature:"flexbox",browsers:e}),Bo(["flex","flex-grow","flex-shrink","flex-basis"],{feature:"flexbox",browsers:e}),Bo(["flex-direction","flex-wrap","flex-flow","justify-content","order","align-items","align-self","align-content"],{feature:"flexbox",browsers:e})});let lq=eI;F(lq,e=>N(["calc"],{props:["*"],feature:"calc",browsers:e}));let cq=_E;F(cq,e=>N(["background-origin","background-size"],{feature:"background-img-opts",browsers:e}));let uq=zE;F(uq,e=>N(["background-clip"],{feature:"background-clip-text",browsers:e}));let dq=jI;F(dq,e=>N(["font-feature-settings","font-variant-ligatures","font-language-override"],{feature:"font-feature",browsers:e}));let hq=YI;F(hq,e=>N(["font-kerning"],{feature:"font-kerning",browsers:e}));let fq=$E;F(fq,e=>N(["border-image"],{feature:"border-image",browsers:e}));let pq=FI;F(pq,e=>N(["::selection"],{selector:!0,feature:"css-selection",browsers:e}));let mq=DI;F(mq,e=>{N(["::placeholder"],{selector:!0,feature:"css-placeholder",browsers:e.concat(["ie 10 old","ie 11 old","firefox 18 old"])})});let gq=wI;F(gq,e=>{N([":placeholder-shown"],{selector:!0,feature:"css-placeholder-shown",browsers:e})});let bq=AI;F(bq,e=>N(["hyphens"],{feature:"css-hyphens",browsers:e}));let Bw=XI;F(Bw,e=>N([":fullscreen"],{selector:!0,feature:"fullscreen",browsers:e}));F(Bw,{match:/x(\s#2|$)/},e=>N(["::backdrop"],{selector:!0,feature:"fullscreen",browsers:e}));let Aq=fI;F(Aq,e=>N(["::file-selector-button"],{selector:!0,feature:"file-selector-button",browsers:e}));let vq=rI;F(vq,e=>N([":autofill"],{selector:!0,feature:"css-autofill",browsers:e}));let yq=VI;F(yq,e=>N(["tab-size"],{feature:"css3-tabsize",browsers:e}));let qf=ZI,ic=["width","min-width","max-width","height","min-height","max-height","inline-size","min-inline-size","max-inline-size","block-size","min-block-size","max-block-size","grid","grid-template","grid-template-rows","grid-template-columns","grid-auto-columns","grid-auto-rows"];F(qf,e=>N(["max-content","min-content"],{props:ic,feature:"intrinsic-width",browsers:e}));F(qf,{match:/x|\s#4/},e=>N(["fill","fill-available"],{props:ic,feature:"intrinsic-width",browsers:e}));F(qf,{match:/x|\s#5/},e=>N(["fit-content"],{props:ic,feature:"intrinsic-width",browsers:e}));let Eq=xI;F(Eq,e=>N(["stretch"],{props:ic,feature:"css-width-stretch",browsers:e}));let Iq=UI;F(Iq,e=>N(["zoom-in","zoom-out"],{props:["cursor"],feature:"css3-cursors-newer",browsers:e}));let Sq=JI;F(Sq,e=>N(["grab","grabbing"],{props:["cursor"],feature:"css3-cursors-grab",browsers:e}));let wq=HI;F(wq,e=>N(["sticky"],{props:["position"],feature:"css-sticky",browsers:e}));let Dq=rS;F(Dq,e=>N(["touch-action"],{feature:"pointer",browsers:e}));let kq=iS;F(kq,{match:/x.*#[235]/},e=>N(["text-decoration-skip","text-decoration-skip-ink"],{feature:"text-decoration",browsers:e}));let Pq=eS;F(Pq,e=>N(["text-decoration"],{feature:"text-decoration",browsers:e}));let Nq=$I;F(Nq,e=>N(["text-decoration-color"],{feature:"text-decoration",browsers:e}));let Fq=BS;F(Fq,e=>N(["text-decoration-line"],{feature:"text-decoration",browsers:e}));let Oq=tS;F(Oq,e=>N(["text-decoration-style"],{feature:"text-decoration",browsers:e}));let Rq=oS;F(Rq,e=>N(["text-size-adjust"],{feature:"text-size-adjust",browsers:e}));let Hq=EI;F(Hq,e=>{N(["mask-clip","mask-composite","mask-image","mask-origin","mask-repeat","mask-border-repeat","mask-border-source"],{feature:"css-masks",browsers:e}),N(["mask","mask-position","mask-size","mask-border","mask-border-outset","mask-border-width","mask-border-slice"],{feature:"css-masks",browsers:e})});let Mq=oI;F(Mq,e=>N(["clip-path"],{feature:"css-clip-path",browsers:e}));let Lq=sI;F(Lq,e=>N(["box-decoration-break"],{feature:"css-boxdecorationbreak",browsers:e}));let Tq=nS;F(Tq,e=>N(["object-fit","object-position"],{feature:"object-fit",browsers:e}));let Gq=OI;F(Gq,e=>N(["shape-margin","shape-outside","shape-image-threshold"],{feature:"css-shapes",browsers:e}));let xq=aS;F(xq,e=>N(["text-overflow"],{feature:"text-overflow",browsers:e}));let Kq=uI;F(Kq,e=>N(["@viewport"],{feature:"css-deviceadaptation",browsers:e}));let Qq=II;F(Qq,{match:/( x($| )|a #2)/},e=>N(["@resolution"],{feature:"css-media-resolution",browsers:e}));let Jq=MI;F(Jq,e=>N(["text-align-last"],{feature:"css-text-align-last",browsers:e}));let ew=lI;F(ew,{match:/y x|a x #1/},e=>N(["pixelated"],{props:["image-rendering"],feature:"css-crisp-edges",browsers:e}));F(ew,{match:/a x #2/},e=>N(["image-rendering"],{feature:"css-crisp-edges",browsers:e}));let tw=yI;F(tw,e=>N(["border-inline-start","border-inline-end","margin-inline-start","margin-inline-end","padding-inline-start","padding-inline-end"],{feature:"css-logical-props",browsers:e}));F(tw,{match:/x\s#2/},e=>N(["border-block-start","border-block-end","margin-block-start","margin-block-end","padding-block-start","padding-block-end"],{feature:"css-logical-props",browsers:e}));let Uq=nI;F(Uq,{match:/#2|x/},e=>N(["appearance"],{feature:"css-appearance",browsers:e}));let Vq=RI;F(Vq,e=>N(["scroll-snap-type","scroll-snap-coordinate","scroll-snap-destination","scroll-snap-points-x","scroll-snap-points-y"],{feature:"css-snappoints",browsers:e}));let Wq=NI;F(Wq,e=>N(["flow-into","flow-from","region-fragment"],{feature:"css-regions",browsers:e}));let jq=vI;F(jq,e=>N(["image-set"],{props:["background","background-image","border-image","cursor","mask","mask-image","list-style","list-style-image","content"],feature:"css-image-set",browsers:e}));let Yq=KI;F(Yq,{match:/a|x/},e=>N(["writing-mode"],{feature:"css-writing-mode",browsers:e}));let Xq=cI;F(Xq,e=>N(["cross-fade"],{props:["background","background-image","border-image","mask","list-style","list-style-image","content","mask-image"],feature:"css-cross-fade",browsers:e}));let Zq=PI;F(Zq,e=>N([":read-only",":read-write"],{selector:!0,feature:"css-read-only-write",browsers:e}));let qq=sS;F(qq,e=>N(["text-emphasis","text-emphasis-position","text-emphasis-style","text-emphasis-color"],{feature:"text-emphasis",browsers:e}));let Cw=bI;F(Cw,e=>{N(["display-grid","inline-grid"],{props:["display"],feature:"css-grid",browsers:e}),N(["grid-template-columns","grid-template-rows","grid-row-start","grid-column-start","grid-row-end","grid-column-end","grid-row","grid-column","grid-area","grid-template","grid-template-areas","place-self"],{feature:"css-grid",browsers:e})});F(Cw,{match:/a x/},e=>N(["grid-column-align","grid-row-align"],{feature:"css-grid",browsers:e}));let zq=TI;F(zq,e=>N(["text-spacing"],{feature:"css-text-spacing",browsers:e}));let _q=CI;F(_q,e=>N([":any-link"],{selector:!0,feature:"css-any-link",browsers:e}));let $q=zI;F($q,e=>N(["isolate"],{props:["unicode-bidi"],feature:"css-unicode-bidi",browsers:e}));let Bz=_I;F(Bz,e=>N(["plaintext"],{props:["unicode-bidi"],feature:"css-unicode-bidi",browsers:e}));let ez=qI;F(ez,{match:/y x/},e=>N(["isolate-override"],{props:["unicode-bidi"],feature:"css-unicode-bidi",browsers:e}));let tz=SI;F(tz,{match:/a #1/},e=>N(["overscroll-behavior"],{feature:"css-overscroll-behavior",browsers:e}));let Cz=LI;F(Cz,e=>N(["text-orientation"],{feature:"css-text-orientation",browsers:e}));let nz=kI;F(nz,e=>N(["print-color-adjust","color-adjust"],{feature:"css-print-color-adjust",browsers:e}));let rz=XE;rz.defaults;function Cg(e,B){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(e);B&&(C=C.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,C)}return t}function R(e){for(var B=1;B<arguments.length;B++){var t=arguments[B]!=null?arguments[B]:{};B%2?Cg(Object(t),!0).forEach(function(C){HB(e,C,t[C])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Cg(Object(t)).forEach(function(C){Object.defineProperty(e,C,Object.getOwnPropertyDescriptor(t,C))})}return e}function ol(e){return ol=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(B){return typeof B}:function(B){return B&&typeof Symbol=="function"&&B.constructor===Symbol&&B!==Symbol.prototype?"symbol":typeof B},ol(e)}function iz(e,B){if(!(e instanceof B))throw new TypeError("Cannot call a class as a function")}function ng(e,B){for(var t=0;t<B.length;t++){var C=B[t];C.enumerable=C.enumerable||!1,C.configurable=!0,"value"in C&&(C.writable=!0),Object.defineProperty(e,C.key,C)}}function sz(e,B,t){return B&&ng(e.prototype,B),t&&ng(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function HB(e,B,t){return B in e?Object.defineProperty(e,B,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[B]=t,e}function zf(e,B){return oz(e)||cz(e,B)||nw(e,B)||dz()}function Ls(e){return az(e)||lz(e)||nw(e)||uz()}function az(e){if(Array.isArray(e))return Id(e)}function oz(e){if(Array.isArray(e))return e}function lz(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function cz(e,B){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var C=[],n=!0,r=!1,i,s;try{for(t=t.call(e);!(n=(i=t.next()).done)&&(C.push(i.value),!(B&&C.length===B));n=!0);}catch(a){r=!0,s=a}finally{try{!n&&t.return!=null&&t.return()}finally{if(r)throw s}}return C}}function nw(e,B){if(e){if(typeof e=="string")return Id(e,B);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Id(e,B)}}function Id(e,B){(B==null||B>e.length)&&(B=e.length);for(var t=0,C=new Array(B);t<B;t++)C[t]=e[t];return C}function uz(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dz(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var rg=function(){},_f={},rw={},iw=null,sw={mark:rg,measure:rg};try{typeof window<"u"&&(_f=window),typeof document<"u"&&(rw=document),typeof MutationObserver<"u"&&(iw=MutationObserver),typeof performance<"u"&&(sw=performance)}catch{}var hz=_f.navigator||{},ig=hz.userAgent,sg=ig===void 0?"":ig,PC=_f,pB=rw,ag=iw,wa=sw;PC.document;var jt=!!pB.documentElement&&!!pB.head&&typeof pB.addEventListener=="function"&&typeof pB.createElement=="function",aw=~sg.indexOf("MSIE")||~sg.indexOf("Trident/"),Da,ka,Pa,Na,Fa,Kt="___FONT_AWESOME___",Sd=16,ow="fa",lw="svg-inline--fa",fn="data-fa-i2svg",wd="data-fa-pseudo-element",fz="data-fa-pseudo-element-pending",$f="data-prefix",B2="data-icon",og="fontawesome-i2svg",pz="async",mz=["HTML","HEAD","STYLE","SCRIPT"],cw=function(){try{return!0}catch{return!1}}(),hB="classic",IB="sharp",e2=[hB,IB];function Ts(e){return new Proxy(e,{get:function(B,t){return t in B?B[t]:B[hB]}})}var Cs=Ts((Da={},HB(Da,hB,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),HB(Da,IB,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Da)),ns=Ts((ka={},HB(ka,hB,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),HB(ka,IB,{solid:"fass",regular:"fasr",light:"fasl"}),ka)),rs=Ts((Pa={},HB(Pa,hB,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),HB(Pa,IB,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Pa)),gz=Ts((Na={},HB(Na,hB,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),HB(Na,IB,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Na)),bz=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,uw="fa-layers-text",Az=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,vz=Ts((Fa={},HB(Fa,hB,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),HB(Fa,IB,{900:"fass",400:"fasr",300:"fasl"}),Fa)),dw=[1,2,3,4,5,6,7,8,9,10],yz=dw.concat([11,12,13,14,15,16,17,18,19,20]),Ez=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ZC={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},is=new Set;Object.keys(ns[hB]).map(is.add.bind(is));Object.keys(ns[IB]).map(is.add.bind(is));var Iz=[].concat(e2,Ls(is),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ZC.GROUP,ZC.SWAP_OPACITY,ZC.PRIMARY,ZC.SECONDARY]).concat(dw.map(function(e){return"".concat(e,"x")})).concat(yz.map(function(e){return"w-".concat(e)})),mi=PC.FontAwesomeConfig||{};function Sz(e){var B=pB.querySelector("script["+e+"]");if(B)return B.getAttribute(e)}function wz(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(pB&&typeof pB.querySelector=="function"){var Dz=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Dz.forEach(function(e){var B=zf(e,2),t=B[0],C=B[1],n=wz(Sz(t));n!=null&&(mi[C]=n)})}var hw={styleDefault:"solid",familyDefault:"classic",cssPrefix:ow,replacementClass:lw,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};mi.familyPrefix&&(mi.cssPrefix=mi.familyPrefix);var Ar=R(R({},hw),mi);Ar.autoReplaceSvg||(Ar.observeMutations=!1);var L={};Object.keys(hw).forEach(function(e){Object.defineProperty(L,e,{enumerable:!0,set:function(B){Ar[e]=B,gi.forEach(function(t){return t(L)})},get:function(){return Ar[e]}})});Object.defineProperty(L,"familyPrefix",{enumerable:!0,set:function(e){Ar.cssPrefix=e,gi.forEach(function(B){return B(L)})},get:function(){return Ar.cssPrefix}});PC.FontAwesomeConfig=L;var gi=[];function kz(e){return gi.push(e),function(){gi.splice(gi.indexOf(e),1)}}var qt=Sd,ct={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Pz(e){if(!(!e||!jt)){var B=pB.createElement("style");B.setAttribute("type","text/css"),B.innerHTML=e;for(var t=pB.head.childNodes,C=null,n=t.length-1;n>-1;n--){var r=t[n],i=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(C=r)}return pB.head.insertBefore(B,C),e}}var Nz="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ss(){for(var e=12,B="";e-- >0;)B+=Nz[Math.random()*62|0];return B}function Fr(e){for(var B=[],t=(e||[]).length>>>0;t--;)B[t]=e[t];return B}function t2(e){return e.classList?Fr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(B){return B})}function fw(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Fz(e){return Object.keys(e||{}).reduce(function(B,t){return B+"".concat(t,'="').concat(fw(e[t]),'" ')},"").trim()}function sc(e){return Object.keys(e||{}).reduce(function(B,t){return B+"".concat(t,": ").concat(e[t].trim(),";")},"")}function C2(e){return e.size!==ct.size||e.x!==ct.x||e.y!==ct.y||e.rotate!==ct.rotate||e.flipX||e.flipY}function Oz(e){var B=e.transform,t=e.containerWidth,C=e.iconWidth,n={transform:"translate(".concat(t/2," 256)")},r="translate(".concat(B.x*32,", ").concat(B.y*32,") "),i="scale(".concat(B.size/16*(B.flipX?-1:1),", ").concat(B.size/16*(B.flipY?-1:1),") "),s="rotate(".concat(B.rotate," 0 0)"),a={transform:"".concat(r," ").concat(i," ").concat(s)},o={transform:"translate(".concat(C/2*-1," -256)")};return{outer:n,inner:a,path:o}}function Rz(e){var B=e.transform,t=e.width,C=t===void 0?Sd:t,n=e.height,r=n===void 0?Sd:n,i=e.startCentered,s=i===void 0?!1:i,a="";return s&&aw?a+="translate(".concat(B.x/qt-C/2,"em, ").concat(B.y/qt-r/2,"em) "):s?a+="translate(calc(-50% + ".concat(B.x/qt,"em), calc(-50% + ").concat(B.y/qt,"em)) "):a+="translate(".concat(B.x/qt,"em, ").concat(B.y/qt,"em) "),a+="scale(".concat(B.size/qt*(B.flipX?-1:1),", ").concat(B.size/qt*(B.flipY?-1:1),") "),a+="rotate(".concat(B.rotate,"deg) "),a}var Hz=`:root, :host {
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
}`;function pw(){var e=ow,B=lw,t=L.cssPrefix,C=L.replacementClass,n=Hz;if(t!==e||C!==B){var r=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(B),"g");n=n.replace(r,".".concat(t,"-")).replace(i,"--".concat(t,"-")).replace(s,".".concat(C))}return n}var lg=!1;function ku(){L.autoAddCss&&!lg&&(Pz(pw()),lg=!0)}var Mz={mixout:function(){return{dom:{css:pw,insertCss:ku}}},hooks:function(){return{beforeDOMElementCreation:function(){ku()},beforeI2svg:function(){ku()}}}},Qt=PC||{};Qt[Kt]||(Qt[Kt]={});Qt[Kt].styles||(Qt[Kt].styles={});Qt[Kt].hooks||(Qt[Kt].hooks={});Qt[Kt].shims||(Qt[Kt].shims=[]);var $e=Qt[Kt],mw=[],Lz=function e(){pB.removeEventListener("DOMContentLoaded",e),ll=1,mw.map(function(B){return B()})},ll=!1;jt&&(ll=(pB.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(pB.readyState),ll||pB.addEventListener("DOMContentLoaded",Lz));function Tz(e){jt&&(ll?setTimeout(e,0):mw.push(e))}function Gs(e){var B=e.tag,t=e.attributes,C=t===void 0?{}:t,n=e.children,r=n===void 0?[]:n;return typeof e=="string"?fw(e):"<".concat(B," ").concat(Fz(C),">").concat(r.map(Gs).join(""),"</").concat(B,">")}function cg(e,B,t){if(e&&e[B]&&e[B][t])return{prefix:B,iconName:t,icon:e[B][t]}}var Gz=function(e,B){return function(t,C,n,r){return e.call(B,t,C,n,r)}},Pu=function(e,B,t,C){var n=Object.keys(e),r=n.length,i=C!==void 0?Gz(B,C):B,s,a,o;for(t===void 0?(s=1,o=e[n[0]]):(s=0,o=t);s<r;s++)a=n[s],o=i(o,e[a],a,e);return o};function xz(e){for(var B=[],t=0,C=e.length;t<C;){var n=e.charCodeAt(t++);if(n>=55296&&n<=56319&&t<C){var r=e.charCodeAt(t++);(r&64512)==56320?B.push(((n&1023)<<10)+(r&1023)+65536):(B.push(n),t--)}else B.push(n)}return B}function gw(e){var B=xz(e);return B.length===1?B[0].toString(16):null}function Kz(e,B){var t=e.length,C=e.charCodeAt(B),n;return C>=55296&&C<=56319&&t>B+1&&(n=e.charCodeAt(B+1),n>=56320&&n<=57343)?(C-55296)*1024+n-56320+65536:C}function ug(e){return Object.keys(e).reduce(function(B,t){var C=e[t],n=!!C.icon;return n?B[C.iconName]=C.icon:B[t]=C,B},{})}function Dd(e,B){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},C=t.skipHooks,n=C===void 0?!1:C,r=ug(B);typeof $e.hooks.addPack=="function"&&!n?$e.hooks.addPack(e,ug(B)):$e.styles[e]=R(R({},$e.styles[e]||{}),r),e==="fas"&&Dd("fa",B)}var Oa,Ra,Ha,Un=$e.styles,Qz=$e.shims,Jz=(Oa={},HB(Oa,hB,Object.values(rs[hB])),HB(Oa,IB,Object.values(rs[IB])),Oa),n2=null,bw={},Aw={},vw={},yw={},Ew={},Uz=(Ra={},HB(Ra,hB,Object.keys(Cs[hB])),HB(Ra,IB,Object.keys(Cs[IB])),Ra);function Vz(e){return~Iz.indexOf(e)}function Wz(e,B){var t=B.split("-"),C=t[0],n=t.slice(1).join("-");return C===e&&n!==""&&!Vz(n)?n:null}var Iw=function(){var e=function(C){return Pu(Un,function(n,r,i){return n[i]=Pu(r,C,{}),n},{})};bw=e(function(C,n,r){if(n[3]&&(C[n[3]]=r),n[2]){var i=n[2].filter(function(s){return typeof s=="number"});i.forEach(function(s){C[s.toString(16)]=r})}return C}),Aw=e(function(C,n,r){if(C[r]=r,n[2]){var i=n[2].filter(function(s){return typeof s=="string"});i.forEach(function(s){C[s]=r})}return C}),Ew=e(function(C,n,r){var i=n[2];return C[r]=r,i.forEach(function(s){C[s]=r}),C});var B="far"in Un||L.autoFetchSvg,t=Pu(Qz,function(C,n){var r=n[0],i=n[1],s=n[2];return i==="far"&&!B&&(i="fas"),typeof r=="string"&&(C.names[r]={prefix:i,iconName:s}),typeof r=="number"&&(C.unicodes[r.toString(16)]={prefix:i,iconName:s}),C},{names:{},unicodes:{}});vw=t.names,yw=t.unicodes,n2=ac(L.styleDefault,{family:L.familyDefault})};kz(function(e){n2=ac(e.styleDefault,{family:L.familyDefault})});Iw();function r2(e,B){return(bw[e]||{})[B]}function jz(e,B){return(Aw[e]||{})[B]}function qC(e,B){return(Ew[e]||{})[B]}function Sw(e){return vw[e]||{prefix:null,iconName:null}}function Yz(e){var B=yw[e],t=r2("fas",e);return B||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function NC(){return n2}var i2=function(){return{prefix:null,iconName:null,rest:[]}};function ac(e){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=B.family,C=t===void 0?hB:t,n=Cs[C][e],r=ns[C][e]||ns[C][n],i=e in $e.styles?e:null;return r||i||null}var dg=(Ha={},HB(Ha,hB,Object.keys(rs[hB])),HB(Ha,IB,Object.keys(rs[IB])),Ha);function oc(e){var B,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},C=t.skipLookups,n=C===void 0?!1:C,r=(B={},HB(B,hB,"".concat(L.cssPrefix,"-").concat(hB)),HB(B,IB,"".concat(L.cssPrefix,"-").concat(IB)),B),i=null,s=hB;(e.includes(r[hB])||e.some(function(o){return dg[hB].includes(o)}))&&(s=hB),(e.includes(r[IB])||e.some(function(o){return dg[IB].includes(o)}))&&(s=IB);var a=e.reduce(function(o,c){var l=Wz(L.cssPrefix,c);if(Un[c]?(c=Jz[s].includes(c)?gz[s][c]:c,i=c,o.prefix=c):Uz[s].indexOf(c)>-1?(i=c,o.prefix=ac(c,{family:s})):l?o.iconName=l:c!==L.replacementClass&&c!==r[hB]&&c!==r[IB]&&o.rest.push(c),!n&&o.prefix&&o.iconName){var u=i==="fa"?Sw(o.iconName):{},m=qC(o.prefix,o.iconName);u.prefix&&(i=null),o.iconName=u.iconName||m||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!Un.far&&Un.fas&&!L.autoFetchSvg&&(o.prefix="fas")}return o},i2());return(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(a.prefix="fad"),!a.prefix&&s===IB&&(Un.fass||L.autoFetchSvg)&&(a.prefix="fass",a.iconName=qC(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||i==="fa")&&(a.prefix=NC()||"fas"),a}var Xz=function(){function e(){iz(this,e),this.definitions={}}return sz(e,[{key:"add",value:function(){for(var B=this,t=arguments.length,C=new Array(t),n=0;n<t;n++)C[n]=arguments[n];var r=C.reduce(this._pullDefinitions,{});Object.keys(r).forEach(function(i){B.definitions[i]=R(R({},B.definitions[i]||{}),r[i]),Dd(i,r[i]);var s=rs[hB][i];s&&Dd(s,r[i]),Iw()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(B,t){var C=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(C).map(function(n){var r=C[n],i=r.prefix,s=r.iconName,a=r.icon,o=a[2];B[i]||(B[i]={}),o.length>0&&o.forEach(function(c){typeof c=="string"&&(B[i][c]=a)}),B[i][s]=a}),B}}]),e}(),hg=[],Vn={},Cr={},Zz=Object.keys(Cr);function qz(e,B){var t=B.mixoutsTo;return hg=e,Vn={},Object.keys(Cr).forEach(function(C){Zz.indexOf(C)===-1&&delete Cr[C]}),hg.forEach(function(C){var n=C.mixout?C.mixout():{};if(Object.keys(n).forEach(function(i){typeof n[i]=="function"&&(t[i]=n[i]),ol(n[i])==="object"&&Object.keys(n[i]).forEach(function(s){t[i]||(t[i]={}),t[i][s]=n[i][s]})}),C.hooks){var r=C.hooks();Object.keys(r).forEach(function(i){Vn[i]||(Vn[i]=[]),Vn[i].push(r[i])})}C.provides&&C.provides(Cr)}),t}function kd(e,B){for(var t=arguments.length,C=new Array(t>2?t-2:0),n=2;n<t;n++)C[n-2]=arguments[n];var r=Vn[e]||[];return r.forEach(function(i){B=i.apply(null,[B].concat(C))}),B}function pn(e){for(var B=arguments.length,t=new Array(B>1?B-1:0),C=1;C<B;C++)t[C-1]=arguments[C];var n=Vn[e]||[];n.forEach(function(r){r.apply(null,t)})}function Jt(){var e=arguments[0],B=Array.prototype.slice.call(arguments,1);return Cr[e]?Cr[e].apply(null,B):void 0}function Pd(e){e.prefix==="fa"&&(e.prefix="fas");var B=e.iconName,t=e.prefix||NC();if(B)return B=qC(t,B)||B,cg(ww.definitions,t,B)||cg($e.styles,t,B)}var ww=new Xz,zz=function(){L.autoReplaceSvg=!1,L.observeMutations=!1,pn("noAuto")},_z={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return jt?(pn("beforeI2svg",e),Jt("pseudoElements2svg",e),Jt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},B=e.autoReplaceSvgRoot;L.autoReplaceSvg===!1&&(L.autoReplaceSvg=!0),L.observeMutations=!0,Tz(function(){B9({autoReplaceSvgRoot:B}),pn("watch",e)})}},$z={icon:function(e){if(e===null)return null;if(ol(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:qC(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var B=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],t=ac(e[0]);return{prefix:t,iconName:qC(t,B)||B}}if(typeof e=="string"&&(e.indexOf("".concat(L.cssPrefix,"-"))>-1||e.match(bz))){var C=oc(e.split(" "),{skipLookups:!0});return{prefix:C.prefix||NC(),iconName:qC(C.prefix,C.iconName)||C.iconName}}if(typeof e=="string"){var n=NC();return{prefix:n,iconName:qC(n,e)||e}}}},Fe={noAuto:zz,config:L,dom:_z,parse:$z,library:ww,findIconDefinition:Pd,toHtml:Gs},B9=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},B=e.autoReplaceSvgRoot,t=B===void 0?pB:B;(Object.keys($e.styles).length>0||L.autoFetchSvg)&&jt&&L.autoReplaceSvg&&Fe.dom.i2svg({node:t})};function lc(e,B){return Object.defineProperty(e,"abstract",{get:B}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(t){return Gs(t)})}}),Object.defineProperty(e,"node",{get:function(){if(jt){var t=pB.createElement("div");return t.innerHTML=e.html,t.children}}}),e}function e9(e){var B=e.children,t=e.main,C=e.mask,n=e.attributes,r=e.styles,i=e.transform;if(C2(i)&&t.found&&!C.found){var s=t.width,a=t.height,o={x:s/a/2,y:.5};n.style=sc(R(R({},r),{},{"transform-origin":"".concat(o.x+i.x/16,"em ").concat(o.y+i.y/16,"em")}))}return[{tag:"svg",attributes:n,children:B}]}function t9(e){var B=e.prefix,t=e.iconName,C=e.children,n=e.attributes,r=e.symbol,i=r===!0?"".concat(B,"-").concat(L.cssPrefix,"-").concat(t):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:R(R({},n),{},{id:i}),children:C}]}]}function s2(e){var B=e.icons,t=B.main,C=B.mask,n=e.prefix,r=e.iconName,i=e.transform,s=e.symbol,a=e.title,o=e.maskId,c=e.titleId,l=e.extra,u=e.watchable,m=u===void 0?!1:u,d=C.found?C:t,f=d.width,g=d.height,h=n==="fak",p=[L.replacementClass,r?"".concat(L.cssPrefix,"-").concat(r):""].filter(function(w){return l.classes.indexOf(w)===-1}).filter(function(w){return w!==""||!!w}).concat(l.classes).join(" "),b={children:[],attributes:R(R({},l.attributes),{},{"data-prefix":n,"data-icon":r,class:p,role:l.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(f," ").concat(g)})},A=h&&!~l.classes.indexOf("fa-fw")?{width:"".concat(f/g*16*.0625,"em")}:{};m&&(b.attributes[fn]=""),a&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(c||ss())},children:[a]}),delete b.attributes.title);var y=R(R({},b),{},{prefix:n,iconName:r,main:t,mask:C,maskId:o,transform:i,symbol:s,styles:R(R({},A),l.styles)}),I=C.found&&t.found?Jt("generateAbstractMask",y)||{children:[],attributes:{}}:Jt("generateAbstractIcon",y)||{children:[],attributes:{}},E=I.children,v=I.attributes;return y.children=E,y.attributes=v,s?t9(y):e9(y)}function fg(e){var B=e.content,t=e.width,C=e.height,n=e.transform,r=e.title,i=e.extra,s=e.watchable,a=s===void 0?!1:s,o=R(R(R({},i.attributes),r?{title:r}:{}),{},{class:i.classes.join(" ")});a&&(o[fn]="");var c=R({},i.styles);C2(n)&&(c.transform=Rz({transform:n,startCentered:!0,width:t,height:C}),c["-webkit-transform"]=c.transform);var l=sc(c);l.length>0&&(o.style=l);var u=[];return u.push({tag:"span",attributes:o,children:[B]}),r&&u.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),u}function C9(e){var B=e.content,t=e.title,C=e.extra,n=R(R(R({},C.attributes),t?{title:t}:{}),{},{class:C.classes.join(" ")}),r=sc(C.styles);r.length>0&&(n.style=r);var i=[];return i.push({tag:"span",attributes:n,children:[B]}),t&&i.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),i}var Nu=$e.styles;function Nd(e){var B=e[0],t=e[1],C=e.slice(4),n=zf(C,1),r=n[0],i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(L.cssPrefix,"-").concat(ZC.GROUP)},children:[{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(ZC.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(ZC.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:B,height:t,icon:i}}var n9={found:!1,width:512,height:512};function r9(e,B){!cw&&!L.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(B,'" is missing.'))}function Fd(e,B){var t=B;return B==="fa"&&L.styleDefault!==null&&(B=NC()),new Promise(function(C,n){if(Jt("missingIconAbstract"),t==="fa"){var r=Sw(e)||{};e=r.iconName||e,B=r.prefix||B}if(e&&B&&Nu[B]&&Nu[B][e]){var i=Nu[B][e];return C(Nd(i))}r9(e,B),C(R(R({},n9),{},{icon:L.showMissingIcons&&e?Jt("missingIconAbstract")||{}:{}}))})}var pg=function(){},Od=L.measurePerformance&&wa&&wa.mark&&wa.measure?wa:{mark:pg,measure:pg},ei='FA "6.4.0"',i9=function(e){return Od.mark("".concat(ei," ").concat(e," begins")),function(){return Dw(e)}},Dw=function(e){Od.mark("".concat(ei," ").concat(e," ends")),Od.measure("".concat(ei," ").concat(e),"".concat(ei," ").concat(e," begins"),"".concat(ei," ").concat(e," ends"))},a2={begin:i9,end:Dw},eo=function(){};function mg(e){var B=e.getAttribute?e.getAttribute(fn):null;return typeof B=="string"}function s9(e){var B=e.getAttribute?e.getAttribute($f):null,t=e.getAttribute?e.getAttribute(B2):null;return B&&t}function a9(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(L.replacementClass)}function o9(){if(L.autoReplaceSvg===!0)return to.replace;var e=to[L.autoReplaceSvg];return e||to.replace}function l9(e){return pB.createElementNS("http://www.w3.org/2000/svg",e)}function c9(e){return pB.createElement(e)}function kw(e){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=B.ceFn,C=t===void 0?e.tag==="svg"?l9:c9:t;if(typeof e=="string")return pB.createTextNode(e);var n=C(e.tag);Object.keys(e.attributes||[]).forEach(function(i){n.setAttribute(i,e.attributes[i])});var r=e.children||[];return r.forEach(function(i){n.appendChild(kw(i,{ceFn:C}))}),n}function u9(e){var B=" ".concat(e.outerHTML," ");return B="".concat(B,"Font Awesome fontawesome.com "),B}var to={replace:function(e){var B=e[0];if(B.parentNode)if(e[1].forEach(function(C){B.parentNode.insertBefore(kw(C),B)}),B.getAttribute(fn)===null&&L.keepOriginalSource){var t=pB.createComment(u9(B));B.parentNode.replaceChild(t,B)}else B.remove()},nest:function(e){var B=e[0],t=e[1];if(~t2(B).indexOf(L.replacementClass))return to.replace(e);var C=new RegExp("".concat(L.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){var n=t[0].attributes.class.split(" ").reduce(function(i,s){return s===L.replacementClass||s.match(C)?i.toSvg.push(s):i.toNode.push(s),i},{toNode:[],toSvg:[]});t[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?B.removeAttribute("class"):B.setAttribute("class",n.toNode.join(" "))}var r=t.map(function(i){return Gs(i)}).join(`
`);B.setAttribute(fn,""),B.innerHTML=r}};function gg(e){e()}function Pw(e,B){var t=typeof B=="function"?B:eo;if(e.length===0)t();else{var C=gg;L.mutateApproach===pz&&(C=PC.requestAnimationFrame||gg),C(function(){var n=o9(),r=a2.begin("mutate");e.map(n),r(),t()})}}var o2=!1;function Nw(){o2=!0}function Rd(){o2=!1}var cl=null;function bg(e){if(ag&&L.observeMutations){var B=e.treeCallback,t=B===void 0?eo:B,C=e.nodeCallback,n=C===void 0?eo:C,r=e.pseudoElementsCallback,i=r===void 0?eo:r,s=e.observeMutationsRoot,a=s===void 0?pB:s;cl=new ag(function(o){if(!o2){var c=NC();Fr(o).forEach(function(l){if(l.type==="childList"&&l.addedNodes.length>0&&!mg(l.addedNodes[0])&&(L.searchPseudoElements&&i(l.target),t(l.target)),l.type==="attributes"&&l.target.parentNode&&L.searchPseudoElements&&i(l.target.parentNode),l.type==="attributes"&&mg(l.target)&&~Ez.indexOf(l.attributeName))if(l.attributeName==="class"&&s9(l.target)){var u=oc(t2(l.target)),m=u.prefix,d=u.iconName;l.target.setAttribute($f,m||c),d&&l.target.setAttribute(B2,d)}else a9(l.target)&&n(l.target)})}}),jt&&cl.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function d9(){cl&&cl.disconnect()}function h9(e){var B=e.getAttribute("style"),t=[];return B&&(t=B.split(";").reduce(function(C,n){var r=n.split(":"),i=r[0],s=r.slice(1);return i&&s.length>0&&(C[i]=s.join(":").trim()),C},{})),t}function f9(e){var B=e.getAttribute("data-prefix"),t=e.getAttribute("data-icon"),C=e.innerText!==void 0?e.innerText.trim():"",n=oc(t2(e));return n.prefix||(n.prefix=NC()),B&&t&&(n.prefix=B,n.iconName=t),n.iconName&&n.prefix||(n.prefix&&C.length>0&&(n.iconName=jz(n.prefix,e.innerText)||r2(n.prefix,gw(e.innerText))),!n.iconName&&L.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=e.firstChild.data)),n}function p9(e){var B=Fr(e.attributes).reduce(function(n,r){return n.name!=="class"&&n.name!=="style"&&(n[r.name]=r.value),n},{}),t=e.getAttribute("title"),C=e.getAttribute("data-fa-title-id");return L.autoA11y&&(t?B["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(C||ss()):(B["aria-hidden"]="true",B.focusable="false")),B}function m9(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ct,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ag(e){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=f9(e),C=t.iconName,n=t.prefix,r=t.rest,i=p9(e),s=kd("parseNodeAttributes",{},e),a=B.styleParser?h9(e):[];return R({iconName:C,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:n,transform:ct,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:a,attributes:i}},s)}var g9=$e.styles;function Fw(e){var B=L.autoReplaceSvg==="nest"?Ag(e,{styleParser:!1}):Ag(e);return~B.extra.classes.indexOf(uw)?Jt("generateLayersText",e,B):Jt("generateSvgReplacementMutation",e,B)}var FC=new Set;e2.map(function(e){FC.add("fa-".concat(e))});Object.keys(Cs[hB]).map(FC.add.bind(FC));Object.keys(Cs[IB]).map(FC.add.bind(FC));FC=Ls(FC);function vg(e){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!jt)return Promise.resolve();var t=pB.documentElement.classList,C=function(c){return t.add("".concat(og,"-").concat(c))},n=function(c){return t.remove("".concat(og,"-").concat(c))},r=L.autoFetchSvg?FC:e2.map(function(c){return"fa-".concat(c)}).concat(Object.keys(g9));r.includes("fa")||r.push("fa");var i=[".".concat(uw,":not([").concat(fn,"])")].concat(r.map(function(c){return".".concat(c,":not([").concat(fn,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=Fr(e.querySelectorAll(i))}catch{}if(s.length>0)C("pending"),n("complete");else return Promise.resolve();var a=a2.begin("onTree"),o=s.reduce(function(c,l){try{var u=Fw(l);u&&c.push(u)}catch(m){cw||m.name==="MissingIcon"&&console.error(m)}return c},[]);return new Promise(function(c,l){Promise.all(o).then(function(u){Pw(u,function(){C("active"),C("complete"),n("pending"),typeof B=="function"&&B(),a(),c()})}).catch(function(u){a(),l(u)})})}function b9(e){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Fw(e).then(function(t){t&&Pw([t],B)})}function A9(e){return function(B){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},C=(B||{}).icon?B:Pd(B||{}),n=t.mask;return n&&(n=(n||{}).icon?n:Pd(n||{})),e(C,R(R({},t),{},{mask:n}))}}var v9=function(e){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=B.transform,C=t===void 0?ct:t,n=B.symbol,r=n===void 0?!1:n,i=B.mask,s=i===void 0?null:i,a=B.maskId,o=a===void 0?null:a,c=B.title,l=c===void 0?null:c,u=B.titleId,m=u===void 0?null:u,d=B.classes,f=d===void 0?[]:d,g=B.attributes,h=g===void 0?{}:g,p=B.styles,b=p===void 0?{}:p;if(e){var A=e.prefix,y=e.iconName,I=e.icon;return lc(R({type:"icon"},e),function(){return pn("beforeDOMElementCreation",{iconDefinition:e,params:B}),L.autoA11y&&(l?h["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(m||ss()):(h["aria-hidden"]="true",h.focusable="false")),s2({icons:{main:Nd(I),mask:s?Nd(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:y,transform:R(R({},ct),C),symbol:r,title:l,maskId:o,titleId:m,extra:{attributes:h,styles:b,classes:f}})})}},y9={mixout:function(){return{icon:A9(v9)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=vg,e.nodeCallback=b9,e}}},provides:function(e){e.i2svg=function(B){var t=B.node,C=t===void 0?pB:t,n=B.callback,r=n===void 0?function(){}:n;return vg(C,r)},e.generateSvgReplacementMutation=function(B,t){var C=t.iconName,n=t.title,r=t.titleId,i=t.prefix,s=t.transform,a=t.symbol,o=t.mask,c=t.maskId,l=t.extra;return new Promise(function(u,m){Promise.all([Fd(C,i),o.iconName?Fd(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(d){var f=zf(d,2),g=f[0],h=f[1];u([B,s2({icons:{main:g,mask:h},prefix:i,iconName:C,transform:s,symbol:a,maskId:c,title:n,titleId:r,extra:l,watchable:!0})])}).catch(m)})},e.generateAbstractIcon=function(B){var t=B.children,C=B.attributes,n=B.main,r=B.transform,i=B.styles,s=sc(i);s.length>0&&(C.style=s);var a;return C2(r)&&(a=Jt("generateAbstractTransformGrouping",{main:n,transform:r,containerWidth:n.width,iconWidth:n.width})),t.push(a||n.icon),{children:t,attributes:C}}}},E9={mixout:function(){return{layer:function(e){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=B.classes,C=t===void 0?[]:t;return lc({type:"layer"},function(){pn("beforeDOMElementCreation",{assembler:e,params:B});var n=[];return e(function(r){Array.isArray(r)?r.map(function(i){n=n.concat(i.abstract)}):n=n.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(L.cssPrefix,"-layers")].concat(Ls(C)).join(" ")},children:n}]})}}}},I9={mixout:function(){return{counter:function(e){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=B.title,C=t===void 0?null:t,n=B.classes,r=n===void 0?[]:n,i=B.attributes,s=i===void 0?{}:i,a=B.styles,o=a===void 0?{}:a;return lc({type:"counter",content:e},function(){return pn("beforeDOMElementCreation",{content:e,params:B}),C9({content:e.toString(),title:C,extra:{attributes:s,styles:o,classes:["".concat(L.cssPrefix,"-layers-counter")].concat(Ls(r))}})})}}}},S9={mixout:function(){return{text:function(e){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=B.transform,C=t===void 0?ct:t,n=B.title,r=n===void 0?null:n,i=B.classes,s=i===void 0?[]:i,a=B.attributes,o=a===void 0?{}:a,c=B.styles,l=c===void 0?{}:c;return lc({type:"text",content:e},function(){return pn("beforeDOMElementCreation",{content:e,params:B}),fg({content:e,transform:R(R({},ct),C),title:r,extra:{attributes:o,styles:l,classes:["".concat(L.cssPrefix,"-layers-text")].concat(Ls(s))}})})}}},provides:function(e){e.generateLayersText=function(B,t){var C=t.title,n=t.transform,r=t.extra,i=null,s=null;if(aw){var a=parseInt(getComputedStyle(B).fontSize,10),o=B.getBoundingClientRect();i=o.width/a,s=o.height/a}return L.autoA11y&&!C&&(r.attributes["aria-hidden"]="true"),Promise.resolve([B,fg({content:B.innerHTML,width:i,height:s,transform:n,title:C,extra:r,watchable:!0})])}}},w9=new RegExp('"',"ug"),yg=[1105920,1112319];function D9(e){var B=e.replace(w9,""),t=Kz(B,0),C=t>=yg[0]&&t<=yg[1],n=B.length===2?B[0]===B[1]:!1;return{value:gw(n?B[0]:B),isSecondary:C||n}}function Eg(e,B){var t="".concat(fz).concat(B.replace(":","-"));return new Promise(function(C,n){if(e.getAttribute(t)!==null)return C();var r=Fr(e.children),i=r.filter(function(E){return E.getAttribute(wd)===B})[0],s=PC.getComputedStyle(e,B),a=s.getPropertyValue("font-family").match(Az),o=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(i&&!a)return e.removeChild(i),C();if(a&&c!=="none"&&c!==""){var l=s.getPropertyValue("content"),u=~["Sharp"].indexOf(a[2])?IB:hB,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(a[2])?ns[u][a[2].toLowerCase()]:vz[u][o],d=D9(l),f=d.value,g=d.isSecondary,h=a[0].startsWith("FontAwesome"),p=r2(m,f),b=p;if(h){var A=Yz(f);A.iconName&&A.prefix&&(p=A.iconName,m=A.prefix)}if(p&&!g&&(!i||i.getAttribute($f)!==m||i.getAttribute(B2)!==b)){e.setAttribute(t,b),i&&e.removeChild(i);var y=m9(),I=y.extra;I.attributes[wd]=B,Fd(p,m).then(function(E){var v=s2(R(R({},y),{},{icons:{main:E,mask:i2()},prefix:m,iconName:b,extra:I,watchable:!0})),w=pB.createElement("svg");B==="::before"?e.insertBefore(w,e.firstChild):e.appendChild(w),w.outerHTML=v.map(function(M){return Gs(M)}).join(`
`),e.removeAttribute(t),C()}).catch(n)}else C()}else C()})}function k9(e){return Promise.all([Eg(e,"::before"),Eg(e,"::after")])}function P9(e){return e.parentNode!==document.head&&!~mz.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(wd)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ig(e){if(jt)return new Promise(function(B,t){var C=Fr(e.querySelectorAll("*")).filter(P9).map(k9),n=a2.begin("searchPseudoElements");Nw(),Promise.all(C).then(function(){n(),Rd(),B()}).catch(function(){n(),Rd(),t()})})}var N9={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Ig,e}}},provides:function(e){e.pseudoElements2svg=function(B){var t=B.node,C=t===void 0?pB:t;L.searchPseudoElements&&Ig(C)}}},Sg=!1,F9={mixout:function(){return{dom:{unwatch:function(){Nw(),Sg=!0}}}},hooks:function(){return{bootstrap:function(){bg(kd("mutationObserverCallbacks",{}))},noAuto:function(){d9()},watch:function(e){var B=e.observeMutationsRoot;Sg?Rd():bg(kd("mutationObserverCallbacks",{observeMutationsRoot:B}))}}}},wg=function(e){var B={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(t,C){var n=C.toLowerCase().split("-"),r=n[0],i=n.slice(1).join("-");if(r&&i==="h")return t.flipX=!0,t;if(r&&i==="v")return t.flipY=!0,t;if(i=parseFloat(i),isNaN(i))return t;switch(r){case"grow":t.size=t.size+i;break;case"shrink":t.size=t.size-i;break;case"left":t.x=t.x-i;break;case"right":t.x=t.x+i;break;case"up":t.y=t.y-i;break;case"down":t.y=t.y+i;break;case"rotate":t.rotate=t.rotate+i;break}return t},B)},O9={mixout:function(){return{parse:{transform:function(e){return wg(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,B){var t=B.getAttribute("data-fa-transform");return t&&(e.transform=wg(t)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(B){var t=B.main,C=B.transform,n=B.containerWidth,r=B.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(C.x*32,", ").concat(C.y*32,") "),a="scale(".concat(C.size/16*(C.flipX?-1:1),", ").concat(C.size/16*(C.flipY?-1:1),") "),o="rotate(".concat(C.rotate," 0 0)"),c={transform:"".concat(s," ").concat(a," ").concat(o)},l={transform:"translate(".concat(r/2*-1," -256)")},u={outer:i,inner:c,path:l};return{tag:"g",attributes:R({},u.outer),children:[{tag:"g",attributes:R({},u.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:R(R({},t.icon.attributes),u.path)}]}]}}}},Fu={x:0,y:0,width:"100%",height:"100%"};function Dg(e){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||B)&&(e.attributes.fill="black"),e}function R9(e){return e.tag==="g"?e.children:[e]}var H9={hooks:function(){return{parseNodeAttributes:function(e,B){var t=B.getAttribute("data-fa-mask"),C=t?oc(t.split(" ").map(function(n){return n.trim()})):i2();return C.prefix||(C.prefix=NC()),e.mask=C,e.maskId=B.getAttribute("data-fa-mask-id"),e}}},provides:function(e){e.generateAbstractMask=function(B){var t=B.children,C=B.attributes,n=B.main,r=B.mask,i=B.maskId,s=B.transform,a=n.width,o=n.icon,c=r.width,l=r.icon,u=Oz({transform:s,containerWidth:c,iconWidth:a}),m={tag:"rect",attributes:R(R({},Fu),{},{fill:"white"})},d=o.children?{children:o.children.map(Dg)}:{},f={tag:"g",attributes:R({},u.inner),children:[Dg(R({tag:o.tag,attributes:R(R({},o.attributes),u.path)},d))]},g={tag:"g",attributes:R({},u.outer),children:[f]},h="mask-".concat(i||ss()),p="clip-".concat(i||ss()),b={tag:"mask",attributes:R(R({},Fu),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,g]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:p},children:R9(l)},b]};return t.push(A,{tag:"rect",attributes:R({fill:"currentColor","clip-path":"url(#".concat(p,")"),mask:"url(#".concat(h,")")},Fu)}),{children:t,attributes:C}}}},M9={provides:function(e){var B=!1;PC.matchMedia&&(B=PC.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var t=[],C={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:R(R({},C),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var r=R(R({},n),{},{attributeName:"opacity"}),i={tag:"circle",attributes:R(R({},C),{},{cx:"256",cy:"364",r:"28"}),children:[]};return B||i.children.push({tag:"animate",attributes:R(R({},n),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:R(R({},r),{},{values:"1;0;1;1;0;1;"})}),t.push(i),t.push({tag:"path",attributes:R(R({},C),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:B?[]:[{tag:"animate",attributes:R(R({},r),{},{values:"1;0;0;0;0;1;"})}]}),B||t.push({tag:"path",attributes:R(R({},C),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:R(R({},r),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},L9={hooks:function(){return{parseNodeAttributes:function(e,B){var t=B.getAttribute("data-fa-symbol"),C=t===null?!1:t===""?!0:t;return e.symbol=C,e}}}},T9=[Mz,y9,E9,I9,S9,N9,F9,O9,H9,M9,L9];qz(T9,{mixoutsTo:Fe});Fe.noAuto;Fe.config;Fe.library;Fe.dom;var Hd=Fe.parse;Fe.findIconDefinition;Fe.toHtml;var G9=Fe.icon;Fe.layer;Fe.text;Fe.counter;var x9={prefix:"fas",iconName:"bath",icon:[512,512,[128705,"bathtub"],"f2cd","M96 77.3c0-7.3 5.9-13.3 13.3-13.3c3.5 0 6.9 1.4 9.4 3.9l14.9 14.9C130 91.8 128 101.7 128 112c0 19.9 7.2 38 19.2 52c-5.3 9.2-4 21.1 3.8 29c9.4 9.4 24.6 9.4 33.9 0L289 89c9.4-9.4 9.4-24.6 0-33.9c-7.9-7.9-19.8-9.1-29-3.8C246 39.2 227.9 32 208 32c-10.3 0-20.2 2-29.2 5.5L163.9 22.6C149.4 8.1 129.7 0 109.3 0C66.6 0 32 34.6 32 77.3V256c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H96V77.3zM32 352v16c0 28.4 12.4 54 32 71.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V464H384v16c0 17.7 14.3 32 32 32s32-14.3 32-32V439.6c19.6-17.6 32-43.1 32-71.6V352H32z"]},kg={prefix:"fas",iconName:"ruler",icon:[512,512,[128207],"f545","M177.9 494.1c-18.7 18.7-49.1 18.7-67.9 0L17.9 401.9c-18.7-18.7-18.7-49.1 0-67.9l50.7-50.7 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 50.7-50.7c18.7-18.7 49.1-18.7 67.9 0l92.1 92.1c18.7 18.7 18.7 49.1 0 67.9L177.9 494.1z"]},K9={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},Q9=K9,J9={prefix:"fas",iconName:"bed",icon:[640,512,[128716],"f236","M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"]},U9={prefix:"fas",iconName:"building",icon:[384,512,[127970,61687],"f1ad","M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"]},Pg={prefix:"fas",iconName:"calendar",icon:[448,512,[128197,128198],"f133","M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"]},V9={prefix:"fas",iconName:"dollar-sign",icon:[320,512,[128178,61781,"dollar","usd"],"24","M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"]},W={},W9={get exports(){return W},set exports(e){W=e}},j9="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Y9=j9,X9=Y9;function Ow(){}function Rw(){}Rw.resetWarningCache=Ow;var Z9=function(){function e(C,n,r,i,s,a){if(a!==X9){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}e.isRequired=e;function B(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:B,element:e,elementType:e,instanceOf:B,node:e,objectOf:B,oneOf:B,oneOfType:B,shape:B,exact:B,checkPropTypes:Rw,resetWarningCache:Ow};return t.PropTypes=t,t};W9.exports=Z9();function Ng(e,B){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(e);B&&(C=C.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,C)}return t}function aC(e){for(var B=1;B<arguments.length;B++){var t=arguments[B]!=null?arguments[B]:{};B%2?Ng(Object(t),!0).forEach(function(C){Wn(e,C,t[C])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ng(Object(t)).forEach(function(C){Object.defineProperty(e,C,Object.getOwnPropertyDescriptor(t,C))})}return e}function ul(e){return ul=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(B){return typeof B}:function(B){return B&&typeof Symbol=="function"&&B.constructor===Symbol&&B!==Symbol.prototype?"symbol":typeof B},ul(e)}function Wn(e,B,t){return B in e?Object.defineProperty(e,B,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[B]=t,e}function q9(e,B){if(e==null)return{};var t={},C=Object.keys(e),n,r;for(r=0;r<C.length;r++)n=C[r],!(B.indexOf(n)>=0)&&(t[n]=e[n]);return t}function z9(e,B){if(e==null)return{};var t=q9(e,B),C,n;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)C=r[n],!(B.indexOf(C)>=0)&&Object.prototype.propertyIsEnumerable.call(e,C)&&(t[C]=e[C])}return t}function Md(e){return _9(e)||$9(e)||B_(e)||e_()}function _9(e){if(Array.isArray(e))return Ld(e)}function $9(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function B_(e,B){if(e){if(typeof e=="string")return Ld(e,B);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ld(e,B)}}function Ld(e,B){(B==null||B>e.length)&&(B=e.length);for(var t=0,C=new Array(B);t<B;t++)C[t]=e[t];return C}function e_(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t_(e){var B,t=e.beat,C=e.fade,n=e.beatFade,r=e.bounce,i=e.shake,s=e.flash,a=e.spin,o=e.spinPulse,c=e.spinReverse,l=e.pulse,u=e.fixedWidth,m=e.inverse,d=e.border,f=e.listItem,g=e.flip,h=e.size,p=e.rotation,b=e.pull,A=(B={"fa-beat":t,"fa-fade":C,"fa-beat-fade":n,"fa-bounce":r,"fa-shake":i,"fa-flash":s,"fa-spin":a,"fa-spin-reverse":c,"fa-spin-pulse":o,"fa-pulse":l,"fa-fw":u,"fa-inverse":m,"fa-border":d,"fa-li":f,"fa-flip":g===!0,"fa-flip-horizontal":g==="horizontal"||g==="both","fa-flip-vertical":g==="vertical"||g==="both"},Wn(B,"fa-".concat(h),typeof h<"u"&&h!==null),Wn(B,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),Wn(B,"fa-pull-".concat(b),typeof b<"u"&&b!==null),Wn(B,"fa-swap-opacity",e.swapOpacity),B);return Object.keys(A).map(function(y){return A[y]?y:null}).filter(function(y){return y})}function C_(e){return e=e-0,e===e}function Hw(e){return C_(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(B,t){return t?t.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var n_=["style"];function r_(e){return e.charAt(0).toUpperCase()+e.slice(1)}function i_(e){return e.split(";").map(function(B){return B.trim()}).filter(function(B){return B}).reduce(function(B,t){var C=t.indexOf(":"),n=Hw(t.slice(0,C)),r=t.slice(C+1).trim();return n.startsWith("webkit")?B[r_(n)]=r:B[n]=r,B},{})}function Mw(e,B){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof B=="string")return B;var C=(B.children||[]).map(function(a){return Mw(e,a)}),n=Object.keys(B.attributes||{}).reduce(function(a,o){var c=B.attributes[o];switch(o){case"class":a.attrs.className=c,delete B.attributes.class;break;case"style":a.attrs.style=i_(c);break;default:o.indexOf("aria-")===0||o.indexOf("data-")===0?a.attrs[o.toLowerCase()]=c:a.attrs[Hw(o)]=c}return a},{attrs:{}}),r=t.style,i=r===void 0?{}:r,s=z9(t,n_);return n.attrs.style=aC(aC({},n.attrs.style),i),e.apply(void 0,[B.tag,aC(aC({},n.attrs),s)].concat(Md(C)))}var Lw=!1;try{Lw=!0}catch{}function s_(){if(!Lw&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Fg(e){if(e&&ul(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Hd.icon)return Hd.icon(e);if(e===null)return null;if(e&&ul(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Ou(e,B){return Array.isArray(B)&&B.length>0||!Array.isArray(B)&&B?Wn({},e,B):{}}var xs=nr.forwardRef(function(e,B){var t=e.icon,C=e.mask,n=e.symbol,r=e.className,i=e.title,s=e.titleId,a=e.maskId,o=Fg(t),c=Ou("classes",[].concat(Md(t_(e)),Md(r.split(" ")))),l=Ou("transform",typeof e.transform=="string"?Hd.transform(e.transform):e.transform),u=Ou("mask",Fg(C)),m=G9(o,aC(aC(aC(aC({},c),l),u),{},{symbol:n,title:i,titleId:s,maskId:a}));if(!m)return s_("Could not find icon",o),null;var d=m.abstract,f={ref:B};return Object.keys(e).forEach(function(g){xs.defaultProps.hasOwnProperty(g)||(f[g]=e[g])}),a_(d[0],f)});xs.displayName="FontAwesomeIcon";xs.propTypes={beat:W.bool,border:W.bool,beatFade:W.bool,bounce:W.bool,className:W.string,fade:W.bool,flash:W.bool,mask:W.oneOfType([W.object,W.array,W.string]),maskId:W.string,fixedWidth:W.bool,inverse:W.bool,flip:W.oneOf([!0,!1,"horizontal","vertical","both"]),icon:W.oneOfType([W.object,W.array,W.string]),listItem:W.bool,pull:W.oneOf(["right","left"]),pulse:W.bool,rotation:W.oneOf([0,90,180,270]),shake:W.bool,size:W.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:W.bool,spinPulse:W.bool,spinReverse:W.bool,symbol:W.oneOfType([W.bool,W.string]),title:W.string,titleId:W.string,transform:W.oneOfType([W.string,W.object]),swapOpacity:W.bool};xs.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var a_=Mw.bind(null,nr.createElement);/*! *****************************************************************************
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
***************************************************************************** */var nB=function(){return nB=Object.assign||function(e){for(var B,t=1,C=arguments.length;t<C;t++){B=arguments[t];for(var n in B)Object.prototype.hasOwnProperty.call(B,n)&&(e[n]=B[n])}return e},nB.apply(this,arguments)};function o_(e,B){var t={};for(var C in e)Object.prototype.hasOwnProperty.call(e,C)&&B.indexOf(C)<0&&(t[C]=e[C]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,C=Object.getOwnPropertySymbols(e);n<C.length;n++)B.indexOf(C[n])<0&&Object.prototype.propertyIsEnumerable.call(e,C[n])&&(t[C[n]]=e[C[n]]);return t}function ve(e,B,t){if(t||arguments.length===2)for(var C=0,n=B.length,r;C<n;C++)(r||!(C in B))&&(r||(r=Array.prototype.slice.call(B,0,C)),r[C]=B[C]);return e.concat(r||B)}var At=function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},l_={k:1e3,m:1e6,b:1e9},c_=function(e,B){B===void 0&&(B=".");var t=new RegExp("(\\d+("+At(B)+"\\d*)?)([kmb])$","i"),C=e.match(t);if(C){var n=C[1],r=C[3],i=l_[r.toLowerCase()];return Number(n.replace(B,"."))*i}},u_=function(e,B){B===void 0&&(B=",");var t=new RegExp(At(B),"g");return e.replace(t,"")},d_=function(e,B){var t=At(B.join("")),C=new RegExp("[^\\d"+t+"]","gi");return e.replace(C,"")},Ru=function(e){var B=e.value,t=e.groupSeparator,C=t===void 0?",":t,n=e.decimalSeparator,r=n===void 0?".":n,i=e.allowDecimals,s=i===void 0?!0:i,a=e.decimalsLimit,o=a===void 0?2:a,c=e.allowNegativeValue,l=c===void 0?!0:c,u=e.disableAbbreviations,m=u===void 0?!1:u,d=e.prefix,f=d===void 0?"":d,g=e.transformRawValue,h=g===void 0?function(x){return x}:g,p=h(B);if(p==="-")return p;var b=m?[]:["k","m","b"],A=new RegExp("((^|\\D)-\\d)|(-"+At(f)+")"),y=A.test(p),I=RegExp("(\\d+)-?"+At(f)).exec(B)||[],E=I[0],v=I[1],w=f?E?p.replace(E,"").concat(v):p.replace(f,""):p,M=u_(w,C),j=d_(M,ve([C,r],b)),Q=j;if(!m){if(b.some(function(x){return x===j.toLowerCase().replace(r,"")}))return"";var BB=c_(j,r);BB&&(Q=String(BB))}var lB=y&&l?"-":"";if(r&&Q.includes(r)){var be=j.split(r),VB=be[0],MB=be[1],P=o&&MB?MB.slice(0,o):MB,G=s?""+r+P:"";return""+lB+VB+G}return""+lB+Q},h_=function(e,B,t){if(t&&e.length>1){if(e.includes(B)){var C=e.split(B),n=C[0],r=C[1];if(r.length>t)return""+n+B+r.slice(0,t)}var i=e.length>t?new RegExp("(\\d+)(\\d{"+t+"})"):new RegExp("(\\d)(\\d+)"),s=e.match(i);if(s){var n=s[1],r=s[2];return""+n+B+r}}return e},Tw=function(e,B){var t=B.groupSeparator,C=t===void 0?",":t,n=B.decimalSeparator,r=n===void 0?".":n,i=new RegExp("\\d([^"+At(C)+At(r)+"0-9]+)"),s=e.match(i);return s?s[1]:void 0},Zr=function(e){var B=e.value,t=e.decimalSeparator,C=e.intlConfig,n=e.decimalScale,r=e.prefix,i=r===void 0?"":r,s=e.suffix,a=s===void 0?"":s;if(B===""||B===void 0)return"";if(B==="-")return"-";var o=new RegExp("^\\d?-"+(i?At(i)+"?":"")+"\\d").test(B),c=t!=="."?f_(B,t,o):B,l={minimumFractionDigits:n||0,maximumFractionDigits:20},u=C?new Intl.NumberFormat(C.locale,C.currency?nB(nB({},l),{style:"currency",currency:C.currency}):l):new Intl.NumberFormat(void 0,l),m=u.formatToParts(Number(c)),d=p_(m,e),f=Tw(d,nB({},e)),g=B.slice(-1)===t?t:"",h=c.match(RegExp("\\d+\\.(\\d+)"))||[],p=h[1];return n===void 0&&p&&t&&(d.includes(t)?d=d.replace(RegExp("(\\d+)("+At(t)+")(\\d+)","g"),"$1$2"+p):f&&!a?d=d.replace(f,""+t+p+f):d=""+d+t+p),a&&g?""+d+g+a:f&&g?d.replace(f,""+g+f):f&&a?d.replace(f,""+g+a):[d,g,a].join("")},f_=function(e,B,t){var C=e;return B&&B!=="."&&(C=C.replace(RegExp(At(B),"g"),"."),t&&B==="-"&&(C="-"+C.slice(1))),C},p_=function(e,B){var t=B.prefix,C=B.groupSeparator,n=B.decimalSeparator,r=B.decimalScale,i=B.disableGroupSeparators,s=i===void 0?!1:i;return e.reduce(function(a,o,c){var l=o.type,u=o.value;return c===0&&t?l==="minusSign"?[u,t]:l==="currency"?ve(ve([],a),[t]):[t,u]:l==="currency"?t?a:ve(ve([],a),[u]):l==="group"?s?a:ve(ve([],a),[C!==void 0?C:u]):l==="decimal"?r!==void 0&&r===0?a:ve(ve([],a),[n!==void 0?n:u]):l==="fraction"?ve(ve([],a),[r!==void 0?u.slice(0,r):u]):ve(ve([],a),[u])},[""]).join("")},m_={currencySymbol:"",groupSeparator:"",decimalSeparator:"",prefix:"",suffix:""},g_=function(e){var B=e||{},t=B.locale,C=B.currency,n=t?new Intl.NumberFormat(t,C?{currency:C,style:"currency"}:void 0):new Intl.NumberFormat;return n.formatToParts(1000.1).reduce(function(r,i,s){return i.type==="currency"?s===0?nB(nB({},r),{currencySymbol:i.value,prefix:i.value}):nB(nB({},r),{currencySymbol:i.value,suffix:i.value}):i.type==="group"?nB(nB({},r),{groupSeparator:i.value}):i.type==="decimal"?nB(nB({},r),{decimalSeparator:i.value}):r},m_)},Og=function(e){return RegExp(/\d/,"gi").test(e)},b_=function(e,B,t){if(B===void 0&&(B="."),t===void 0||e===""||e===void 0)return e;if(!e.match(/\d/g))return"";var C=e.split(B),n=C[0],r=C[1];if(t===0)return n;var i=r||"";if(i.length<t)for(;i.length<t;)i+="0";else i=i.slice(0,t);return""+n+B+i},A_=function(e){var B=e.selectionStart,t=e.value,C=e.lastKeyStroke,n=e.stateValue,r=e.groupSeparator,i=B,s=t;if(n&&i){var a=t.split("");return C==="Backspace"&&n[i]===r&&(a.splice(i-1,1),i-=1),C==="Delete"&&n[i]===r&&(a.splice(i,1),i+=1),s=a.join(""),{modifiedValue:s,cursorPosition:i}}return{modifiedValue:s,cursorPosition:B}},Td=O.forwardRef(function(e,B){var t=e.allowDecimals,C=t===void 0?!0:t,n=e.allowNegativeValue,r=n===void 0?!0:n,i=e.id,s=e.name,a=e.className,o=e.customInput,c=e.decimalsLimit,l=e.defaultValue,u=e.disabled,m=u===void 0?!1:u,d=e.maxLength,f=e.value,g=e.onValueChange,h=e.fixedDecimalLength,p=e.placeholder,b=e.decimalScale,A=e.prefix,y=e.suffix,I=e.intlConfig,E=e.step,v=e.min,w=e.max,M=e.disableGroupSeparators,j=M===void 0?!1:M,Q=e.disableAbbreviations,BB=Q===void 0?!1:Q,lB=e.decimalSeparator,be=e.groupSeparator,VB=e.onChange,MB=e.onFocus,P=e.onBlur,G=e.onKeyDown,x=e.onKeyUp,eB=e.transformRawValue,yB=o_(e,["allowDecimals","allowNegativeValue","id","name","className","customInput","decimalsLimit","defaultValue","disabled","maxLength","value","onValueChange","fixedDecimalLength","placeholder","decimalScale","prefix","suffix","intlConfig","step","min","max","disableGroupSeparators","disableAbbreviations","decimalSeparator","groupSeparator","onChange","onFocus","onBlur","onKeyDown","onKeyUp","transformRawValue"]);if(lB&&Og(lB))throw new Error("decimalSeparator cannot be a number");if(be&&Og(be))throw new Error("groupSeparator cannot be a number");var Ue=O.useMemo(function(){return g_(I)},[I]),sB=lB||Ue.decimalSeparator||"",Oe=be||Ue.groupSeparator||"";if(sB&&Oe&&sB===Oe&&j===!1)throw new Error("decimalSeparator cannot be the same as groupSeparator");var zB={decimalSeparator:sB,groupSeparator:Oe,disableGroupSeparators:j,intlConfig:I,prefix:A||Ue.prefix,suffix:y},it={decimalSeparator:sB,groupSeparator:Oe,allowDecimals:C,decimalsLimit:c||h||2,allowNegativeValue:r,disableAbbreviations:BB,prefix:A||Ue.prefix,transformRawValue:eB},cc=l!=null?Zr(nB(nB({},zB),{decimalScale:b,value:String(l)})):f!=null?Zr(nB(nB({},zB),{decimalScale:b,value:String(f)})):"",l2=O.useState(cc),re=l2[0],Ks=l2[1],c2=O.useState(!1),uc=c2[0],Uw=c2[1],u2=O.useState(0),dc=u2[0],hc=u2[1],d2=O.useState(0),h2=d2[0],Vw=d2[1],f2=O.useState(null),Ww=f2[0],jw=f2[1],Yt=O.useRef(null);O.useImperativeHandle(B,function(){return Yt.current});var p2=function(PB,ie){Uw(!0);var _B=A_({selectionStart:ie,value:PB,lastKeyStroke:Ww,stateValue:re,groupSeparator:Oe}),se=_B.modifiedValue,Ae=_B.cursorPosition,Re=Ru(nB({value:se},it));if(!(d&&Re.replace(/-/g,"").length>d)){if(Re===""||Re==="-"||Re===sB){g&&g(void 0,s,{float:null,formatted:"",value:""}),Ks(Re),hc(1);return}var Qs=sB?Re.replace(sB,"."):Re,BD=parseFloat(Qs),fc=Zr(nB({value:Re},zB));if(Ae!=null){var Js=Ae+(fc.length-PB.length);Js=Js<=0?A?A.length:0:Js,hc(Js),Vw(h2+1)}if(Ks(fc),g){var eD={float:BD,formatted:fc,value:Re};g(Re,s,eD)}}},Yw=function(PB){var ie=PB.target,_B=ie.value,se=ie.selectionStart;p2(_B,se),VB&&VB(PB)},Xw=function(PB){return MB&&MB(PB),re?re.length:0},Zw=function(PB){var ie=PB.target.value,_B=Ru(nB({value:ie},it));if(_B==="-"||_B===sB||!_B){Ks(""),P&&P(PB);return}var se=h_(_B,sB,h),Ae=b_(se,sB,b!==void 0?b:h),Re=parseFloat(Ae.replace(sB,".")),Qs=Zr(nB(nB({},zB),{value:Ae}));g&&g(Ae,s,{float:Re,formatted:Qs,value:Ae}),Ks(Qs),P&&P(PB)},qw=function(PB){var ie=PB.key;if(jw(ie),E&&(ie==="ArrowUp"||ie==="ArrowDown")){PB.preventDefault(),hc(re.length);var _B=parseFloat(f!=null?String(f).replace(sB,"."):Ru(nB({value:re},it)))||0,se=ie==="ArrowUp"?_B+E:_B-E;if(v!==void 0&&se<v||w!==void 0&&se>w)return;var Ae=String(E).includes(".")?Number(String(E).split(".")[1].length):void 0;p2(String(Ae?se.toFixed(Ae):se).replace(".",sB))}G&&G(PB)},zw=function(PB){var ie=PB.key,_B=PB.currentTarget.selectionStart;if(ie!=="ArrowUp"&&ie!=="ArrowDown"&&re!=="-"){var se=Tw(re,{groupSeparator:Oe,decimalSeparator:sB});if(se&&_B&&_B>re.length-se.length&&Yt.current){var Ae=re.length-se.length;Yt.current.setSelectionRange(Ae,Ae)}}x&&x(PB)};O.useEffect(function(){uc&&re!=="-"&&Yt.current&&document.activeElement===Yt.current&&Yt.current.setSelectionRange(dc,dc)},[re,dc,Yt,uc,h2]);var _w=function(){return f!=null&&re!=="-"&&(!sB||re!==sB)?Zr(nB(nB({},zB),{decimalScale:uc?void 0:b,value:String(f)})):re},m2=nB({type:"text",inputMode:"decimal",id:i,name:s,className:a,onChange:Yw,onBlur:Zw,onFocus:Xw,onKeyDown:qw,onKeyUp:zw,placeholder:p,disabled:m,value:_w(),ref:Yt},yB);if(o){var $w=o;return nr.createElement($w,nB({},m2))}return nr.createElement("input",nB({},m2))});Td.displayName="CurrencyInput";const v_={databaseURL:"https://criblytics-default-rtdb.firebaseio.com/",apiKey:"AIzaSyCRv3YXcKBp4caX4SLDf9tOM_jf6-PgKWc",authDomain:"criblytics.firebaseapp.com",projectId:"criblytics",storageBucket:"criblytics.appspot.com",messagingSenderId:"109707951445",appId:"1:109707951445:web:120d9a55b9851e13bd03dc",measurementId:"G-VH1N6MR0RG"},Gw=Ml(v_);Yh(Gw);ql(Gw);const xw=ql(),y_=(e,B,t="animate__")=>new Promise((C,n)=>{const r=`${t}${B}`,i=document.getElementById(e);if(!i){n(`Element with ID '${e}' not found.`);return}i.classList.add(`${t}animated`,r);function s(a){a.stopPropagation(),i.classList.remove(`${t}animated`,r),i.style.display="none",C("Animation ended")}i.addEventListener("animationend",s,{once:!0})});function E_(e){return y_("search","fadeOut"),console.log(e.listing_id),D("div",{children:D(I_,{listing_id:e.listing_id})})}const I_=e=>{const B=e.listing_id,[t,C]=O.useState({}),[n,r]=O.useState(!1),[i,s]=O.useState(!1),a=()=>{r(!n)},o=()=>{s(!i)};O.useEffect(()=>{const l=$o(xw,"properties/"+B);zi(l).then(u=>{u.exists()?C(u.val()):console.log("No data available")}).catch(u=>{console.error(u)})},[]);const c=()=>{window.location.reload()};return z("div",{children:[z("h2",{className:"hover:text-emerald-400 text-3xl my-8 text-emerald-100 cursor-pointer",onClick:a,children:[D("span",{className:`triangle ${n?"open":""}`}),"Key Metrics"]}),n&&D("div",{children:D(w_,{snap:t,listing_id:B})}),z("h2",{className:"hover:text-slate-400 text-3xl my-8 text-slate-100 cursor-pointer",onClick:o,children:[D("span",{className:`triangle ${i?"open":""}`}),"Property Details"]}),i&&z("ul",{className:"flex flex-wrap overflow-auto max-w-lg text-2xl font-medium",children:[Object.entries(t.prop_common).map(([l,u])=>k_(l,u)),D(S_,{snap:t})]}),D("button",{onClick:c,className:"hover:bg-slate-700 rounded-2xl shadow-2xl text-2xl text-dark-waves bg-gradient-to-r bg-slate-500",children:"Home"})]})},S_=e=>{const[B,t]=O.useState([]),[C,n]=O.useState(0),[r,i]=O.useState(!0);O.useEffect(()=>{let o=e.snap;o&&o.photos&&o.photos.length>0&&(t(o.photos),i(!1))},[]);const s=()=>{n(o=>(o-1+B.length)%B.length)},a=()=>{n(o=>(o+1)%B.length)};return D(Co,{children:D("div",{className:"border-2 border-grainy justify-center flex-wrap flex",children:r?D("div",{style:{display:"none"},children:B.map((o,c)=>D("img",{src:o.href,alt:`Property ${c+1}`},c))}):z(Co,{children:[D("img",{src:B[C].href,className:"p-8 w-full h-96 rounded-2xl shadow-lg",alt:`Property ${C+1}`}),z("div",{className:"flex justify-center my-4 rounded-xl",children:[D("button",{className:"mr-4 bg-grainy rounded-xl shadow-xl",onClick:s,disabled:B.length===1,children:"Previous"}),D("button",{className:"bg-grainy rounded-xl shadow-xl",onClick:a,disabled:B.length===1,children:"Next"})]})]})})})},w_=e=>{let B=e.snap,t=e.listing_id;const C=$o(xw,"properties/"+t+"/rental/");async function n(Q,BB){let lB=(await(await fetch(Q,BB)).json()).data.home_search.results;const be=Object.entries(lB).map(([VB,MB])=>{const{products:P,...G}=MB;return[VB,G]});console.log(be),ed(C,be)}O.useEffect(()=>{console.log(B.prop_common.price+"price"),(async()=>zi(C).then(Q=>{let BB=null;if(Q.exists())BB=Q.val();else{console.log("No data available");try{let VB=B.prop_common.bed,MB=B.prop_common.bath,P=B.prop_common.sqft,G=B.address.city,x=B.address.state;const eB=Math.max(1,VB-1),yB=VB,Ue=Math.max(1,MB-1),sB=MB+1,Oe=Math.max(500,P-750),zB=P+750,it=`https://us-real-estate.p.rapidapi.com/v2/for-rent?city=${G}&state_code=${x}&limit=42&offset=0&beds_min=${eB}&beds_max=${yB}&baths_min=${Ue}&baths_max=${sB}&expand_search_radius=25&home_size_min=${Oe}&home_size_max=${zB}`;n(it,{method:"GET",headers:{"X-RapidAPI-Key":"2661057b61msh8e6271d7a1763b6p12ffb0jsnc06db3ad292e","X-RapidAPI-Host":"us-real-estate.p.rapidapi.com"}}),BB=zi(C).then(cc=>{BB=cc.val()})}catch(VB){console.error(VB)}}let lB=0,be=BB.length;Object.entries(BB).map(([VB,MB])=>{MB[0];const P=MB[1];let G=0,x=0,eB=0;P.list_price!==null&&(eB=P.list_price),P.list_price_min!==null&&(G=P.list_price_min),P.list_price_max!==null&&(x=P.list_price_max),G==null&&(G=0),x==null&&(x=0),eB==null&&(eB=(G+x)/2),lB=lB+eB}),lB=lB/be,lB=Math.floor(lB),i(lB),console.log(r+"rent")}).catch(Q=>{console.error(Q)}))()},[]);const[r,i]=O.useState(0),[s,a]=O.useState(B.prop_common.price),[o,c]=O.useState(20),[l,u]=O.useState("6.0"),[m,d]=O.useState(30),f=s,g=o/100*f,h=f-g,p=parseFloat(l)/100/12,b=m*12,A=p===0||p===void 0||p===""?0:h*p*Math.pow(1+p,b)/(Math.pow(1+p,b)-1),y=parseFloat(String(r).replace(/[^0-9.-]+/g,"")),I=12,E=y*I,[v,w]=O.useState(0),M=E-A*I-v*I,j=Q=>parseFloat(Q.replace(/[^0-9.-]+/g,""));return D(Co,{children:z("div",{className:"max-w-sm mx-auto",children:[z("div",{className:"p-2",children:[D("div",{className:"grid grid-cols-2 gap-4",children:D("div",{className:"col-span-2",children:D("div",{className:"text-grainy text-2xl font-medium",children:z("div",{className:"flex items-center mb-4",children:[D("span",{className:"w-1/2",children:"List Price: "}),D("div",{className:"w-1/2 overflow-auto font-medium",children:D(Td,{prefix:"$",name:"priceInput",id:"priceInput","data-number-to-fixed":"2","data-number-stepfactor":"100",value:s,placeholder:"",onChange:Q=>{let BB=Q.target.value,lB=j(BB);a(isNaN(lB)?0:lB)},allowDecimals:!0,decimalsLimit:"2",disableAbbreviations:!0})})]})})})}),D("div",{className:"grid grid-cols-2 gap-4",children:D("div",{className:"col-span-2",children:D("div",{className:"text-bland text-2xl font-medium",children:z("div",{className:"flex items-center mb-4",children:[D("span",{className:"w-1/2",children:"Rent Estimate: "}),D("div",{className:"w-1/2 overflow-auto font-medium",children:D(Td,{prefix:"$",name:"priceInput",id:"priceInput","data-number-to-fixed":"2","data-number-stepfactor":"100",value:r,placeholder:"",onChange:Q=>{let BB=Q.target.value,lB=j(BB);i(isNaN(lB)?0:lB)},allowDecimals:!0,decimalsLimit:"2",disableAbbreviations:!0})})]})})})})]}),z("div",{className:"grid grid-cols-2 gap-4",children:[D("div",{className:"col-span-1",children:z("div",{className:"mb-4",children:[z("label",{htmlFor:"downpaymentSlider",className:"text-lg font-medium",children:["Downpayment:",D("br",{})," ",o,"%"]}),D("input",{type:"range",id:"downpaymentSlider",className:"w-full",min:0,max:100,value:o,onChange:Q=>c(parseInt(Q.target.value))})]})}),D("div",{className:"col-span-1",children:z("div",{className:"mb-4",children:[z("label",{className:"font-medium",children:["Loan Term: ",D("br",{}),m," years"]}),D("input",{type:"range",min:15,max:30,className:"w-full",value:m,onChange:Q=>d(parseInt(Q.target.value))})]})})]}),z("div",{className:"grid grid-cols-3 gap-4",children:[D("div",{className:"col-span-1",children:z("div",{className:"mb-4",children:[D("label",{htmlFor:"interestRateInput",className:"font-medium",children:"Interest Rate (%)"}),D("input",{type:"text",id:"interestRateInput",className:"w-full px-2 py-1 rounded border border-gray-300",value:l,onChange:Q=>{const BB=Q.target.value;u(BB)}})]})}),D("div",{className:"col-span-1",children:z("div",{className:"mb-4",children:[D("label",{htmlFor:"monthlyPayment",className:"font-medium",children:"Monthly Payment"}),D("input",{type:"text",id:"monthlyPayment",className:"w-full px-2 py-1 rounded border border-gray-300",value:isNaN(A+v)?"-":(A+v).toLocaleString("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}),readOnly:!0})]})}),D("div",{className:"col-span-1",children:z("div",{className:"mb-4",children:[D("label",{htmlFor:"totalExpensesInput",className:"font-medium",children:"Monthly Expenses"}),D("input",{type:"number",id:"totalExpensesInput",className:"w-full px-2 py-1 rounded border border-gray-300",value:v===0||v===null?0:v,onChange:Q=>w(parseFloat(Q.target.value))})]})})]}),D("div",{className:"flex items-center justify-center",children:D("div",{className:"text-3xl font-medium m-4 p-6 shadow-2xl border-1 rounded-xl bg-slate-800 hover:bg-slate-900",children:z("label",{className:`text-3xl font-medium ${M>=0?"text-green-600":"text-red-600"}`,children:["Annual Income: ",isNaN(M)?"-":M.toLocaleString("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2})]})})})]})})},D_={baths:x9,beds:J9,lot_sqft:kg,sold_date:Pg,sold_price:V9,sqft:kg,stories:U9,type:Q9,year_built:Pg},k_=(e,B)=>{const t=D_[e];if(t==null)return;let C=B;return(e==="sold_date"||e==="year_built")&&(C=new Date(B).getFullYear().toString()),e==="sold_price"&&(C=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(B),C=C.substring(1,C.length)),e==="lot_sqft"&&(C="Lot size "+C+" sqft"),e==="sqft"&&(C=C+" sqft"),e==="sold_date"&&(C="Last sold "+C),e==="year_built"&&(C="Built in "+C),e==="type"&&(C=C.replace("_"," "),C=C.charAt(0).toUpperCase()+C.slice(1)),e==="stories"&&(C="Stories "+C),z("li",{className:"text-waves my-4 w-1/2",children:[D(xs,{icon:t})," ",C]},e)},P_={databaseURL:"https://criblytics-default-rtdb.firebaseio.com/",apiKey:"AIzaSyCRv3YXcKBp4caX4SLDf9tOM_jf6-PgKWc",authDomain:"criblytics.firebaseapp.com",projectId:"criblytics",storageBucket:"criblytics.appspot.com",messagingSenderId:"109707951445",appId:"1:109707951445:web:120d9a55b9851e13bd03dc",measurementId:"G-VH1N6MR0RG"},Kw=Ml(P_);Yh(Kw);const Rg=ql(Kw),N_=new Le;N_.setCustomParameters({prompt:"select_account"});Ay();const F_=["AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];function O_(e){const[B,t]=O.useState(""),[C,n]=O.useState(""),[r,i]=O.useState(""),[s,a]=O.useState("false"),[o,c]=O.useState("0"),[l,u]=O.useState(!1),m=()=>{if(e.login){console.log("City: "+B),console.log("State: "+C),console.log("Address: "+r),console.log();let g=e.user,h=g.uid,p=g.email,b=g.displayName;console.log(g),console.log(h),console.log(p),console.log(b),f(B,C,r)}else alert("Please login before continuing")};O.useEffect(()=>{a(!1)});const d={method:"GET",headers:{"X-RapidAPI-Key":"2661057b61msh8e6271d7a1763b6p12ffb0jsnc06db3ad292e","X-RapidAPI-Host":"us-real-estate.p.rapidapi.com"}},f=(g,h,p)=>{if(document.getElementById("search"),g===""||h===""||p==="")alert("Invalid input");else{const b=`${p} ${g} ${h}`,A=encodeURIComponent(b);console.log(A);const y=`https://us-real-estate.p.rapidapi.com/location/suggest?input=${A}`;fetch(y,d).then(I=>I.json()).then(I=>{const E=I.data[0].property_id;console.log(E),c(E);const v=$o(Rg,"properties/"+E);zi(v).then(M=>{if(M.exists()){console.log("Already exists"),u(!0);return}else{console.log("No data available");const j=`https://us-real-estate.p.rapidapi.com/v2/property-detail?property_id=${E}`;fetch(j,d).then(Q=>Q.json()).then(Q=>{console.log(Q);let BB=Q.data.property_detail;delete BB.product_attributes,ed(v,BB),u(!0)}).catch(Q=>console.error(Q))}}).catch(M=>{console.error(M)});const w=$o(Rg,"users/"+e.user.uid+"/history/");zi(w).then(M=>{let j=M.val()||[];j.includes(E)?console.log("listing_id already exists in user history."):(j.push(E),ed(w,j).then(()=>{console.log("Successfully updated user history.")}).catch(Q=>{console.error("Error updating user history:",Q)}))}).catch(M=>{console.error("Error fetching user history:",M)})}).catch(I=>console.error(I))}};return z(Co,{children:[z("div",{id:"search",children:[z("div",{className:"p-4 flex content-center justify-center text-center",children:[z("div",{className:"w-1/2 mr-2",children:[D("label",{className:"text-3xl block text-grainy mb-2",children:"City"}),D("input",{className:"px-2 py-2 bg-dark-waves rounded-lg text-dark-bland w-full",type:"text",value:B,onChange:g=>t(g.target.value)})]}),z("div",{className:"w-1/2",children:[D("label",{className:"text-3xl block text-grainy mb-2",children:"State"}),z("select",{className:"px-2 py-3 bg-dark-waves rounded-lg text-dark-bland w-4/5",value:C,onChange:g=>n(g.target.value),children:[D("option",{value:"",children:"Select a state"}),F_.map(g=>D("option",{value:g,children:g},g))]})]})]}),z("div",{className:"p-4 flex flex-col items-center",children:[D("label",{className:"text-3xl block text-grainy mb-2",children:"Address"}),D("div",{className:"w-3/5 mr-2 flex",children:D("input",{className:"px-2 py-2 bg-dark-waves rounded-lg text-dark-bland w-full",type:"text",value:r,onChange:g=>i(g.target.value)})})]}),D("button",{id:"search",onClick:m,className:"active:shadow-none shadow-2xl active:from-black active:to-black focus:bg-black w-1/3 rounded-xl text-wave duration-200 ease-in-out transition my-8 bg-gradient-to-l from-grainy to-bland ",children:"Search"}),D("img",{id:"picture",src:""}),D("div",{id:"details"}),D("div",{id:"description"})]}),l&&D(E_,{listing_id:o})]})}let Hg=0;function R_(){const e=["home","rental","investment"];return D("div",{className:"",children:z(eN,{to:"/About",children:[z("h1",{className:"mx-20 sm:text-5xl text-4xl font-extrabold leading-tighter tracking-tighter mb-24",children:["Crib",D("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-grainy to-bland",children:"lytics."})]}),z("p",{className:"text-2xl text-waves mb-8",children:["Find your dream ",D("span",{className:["#6EE7B7","#FFD166","#06D6A0"][Hg],children:e[Hg]})]})]})})}const H_=({user:e,auth:B,db:t})=>z("div",{className:"flex content-center justify-center gap-16 mt-8 border-b-2 border-grainy pb-6",children:[D("img",{className:" rounded-xl h-16 w-16",src:e.photoURL,alt:""}),D("button",{className:" hover:border-red-500 hover:border-3 p-16 rounded-2xl button signout bg-transparent font-bold py-2 px-4 text-2xl text-waves",onClick:()=>B.signOut(),children:"Sign out"})]}),M_={databaseURL:"https://criblytics-default-rtdb.firebaseio.com/",apiKey:"AIzaSyCRv3YXcKBp4caX4SLDf9tOM_jf6-PgKWc",authDomain:"criblytics.firebaseapp.com",projectId:"criblytics",storageBucket:"criblytics.appspot.com",messagingSenderId:"109707951445",appId:"1:109707951445:web:120d9a55b9851e13bd03dc",measurementId:"G-VH1N6MR0RG"},Qw=Ml(M_);Yh(Qw);const L_=ql(Qw),Jw=new Le;Jw.setCustomParameters({prompt:"select_account"});const Gd=Ay();function T_(){async function e(B,t){var C;try{const n=await yR(B,t),r=Le.credentialFromResult(n).accessToken,i=n.user;console.log(i)}catch(n){n.code,n.message,(C=n.customData)!=null&&C.email,Le.credentialFromError(n)}}return D("button",{id:"signIn",onClick:()=>e(Gd,Jw),className:"px-8 py-4  bg-bland text-3xl font-bold bg-transparent hover:border-green-500 text-wavesfont-semibold hover:text-white rounded-xl",children:"Sign in"})}function G_(){const[e,B]=O.useState(null);O.useState(!1),O.useEffect(()=>{Gd.onAuthStateChanged(n=>{B(n)})},[]);const[t,C]=O.useState(100);return z("div",{children:[z("div",{className:"mt-8 ",children:[D(rN,{}),D(R_,{}),D("section",{children:e?D(H_,{auth:Gd,user:e,db:L_}):D(T_,{})}),D("div",{className:"mt-4 text-xl text-center max-w-l",children:e?D(O_,{user:e,login:!0}):null})]}),D(x_,{indicatorPosition:t})]})}function x_({indicatorPosition:e}){return D("div",{className:"mx-auto w-72 h-8 bg-gradient-to-r from-red-500 to-green-500 mb-6 rounded-lg shadow-2xl"})}function K_(){return console.log({}.DATABASE_URL),D("div",{children:D(G_,{})})}const Q_=Hu.createRoot(document.getElementById("root"));Q_.render(D(nr.StrictMode,{children:D(_P,{children:D(K_,{})})}));