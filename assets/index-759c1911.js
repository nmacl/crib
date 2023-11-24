(function(){const B=document.createElement("link").relList;if(B&&B.supports&&B.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function C(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(n){if(n.ep)return;n.ep=!0;const r=C(n);fetch(n.href,r)}})();function CD(e,B){for(var C=0;C<B.length;C++){const t=B[C];if(typeof t!="string"&&!Array.isArray(t)){for(const n in t)if(n!=="default"&&!(n in e)){const r=Object.getOwnPropertyDescriptor(t,n);r&&Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:()=>t[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))C(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&C(r)}).observe(document,{childList:!0,subtree:!0});function B(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function C(t){if(t.ep)return;t.ep=!0;const n=B(t);fetch(t.href,n)}})();function tD(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Mg(e){if(e.__esModule)return e;var B=e.default;if(typeof B=="function"){var C=function t(){if(this instanceof t){var n=[null];n.push.apply(n,arguments);var r=Function.bind.apply(B,n);return new r}return B.apply(this,arguments)};C.prototype=B.prototype}else C={};return Object.defineProperty(C,"__esModule",{value:!0}),Object.keys(e).forEach(function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(C,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})}),C}var bi={},nD={get exports(){return bi},set exports(e){bi=e}},dl={},O={},rD={get exports(){return O},set exports(e){O=e}},q={};/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var as=Symbol.for("react.element"),iD=Symbol.for("react.portal"),sD=Symbol.for("react.fragment"),aD=Symbol.for("react.strict_mode"),oD=Symbol.for("react.profiler"),lD=Symbol.for("react.provider"),cD=Symbol.for("react.context"),uD=Symbol.for("react.forward_ref"),dD=Symbol.for("react.suspense"),fD=Symbol.for("react.memo"),hD=Symbol.for("react.lazy"),g2=Symbol.iterator;function pD(e){return e===null||typeof e!="object"?null:(e=g2&&e[g2]||e["@@iterator"],typeof e=="function"?e:null)}var Lg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tg=Object.assign,Gg={};function vr(e,B,C){this.props=e,this.context=B,this.refs=Gg,this.updater=C||Lg}vr.prototype.isReactComponent={};vr.prototype.setState=function(e,B){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,B,"setState")};vr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function xg(){}xg.prototype=vr.prototype;function xd(e,B,C){this.props=e,this.context=B,this.refs=Gg,this.updater=C||Lg}var Kd=xd.prototype=new xg;Kd.constructor=xd;Tg(Kd,vr.prototype);Kd.isPureReactComponent=!0;var b2=Array.isArray,Kg=Object.prototype.hasOwnProperty,Qd={current:null},Qg={key:!0,ref:!0,__self:!0,__source:!0};function Jg(e,B,C){var t,n={},r=null,i=null;if(B!=null)for(t in B.ref!==void 0&&(i=B.ref),B.key!==void 0&&(r=""+B.key),B)Kg.call(B,t)&&!Qg.hasOwnProperty(t)&&(n[t]=B[t]);var s=arguments.length-2;if(s===1)n.children=C;else if(1<s){for(var a=Array(s),o=0;o<s;o++)a[o]=arguments[o+2];n.children=a}if(e&&e.defaultProps)for(t in s=e.defaultProps,s)n[t]===void 0&&(n[t]=s[t]);return{$$typeof:as,type:e,key:r,ref:i,props:n,_owner:Qd.current}}function mD(e,B){return{$$typeof:as,type:e.type,key:B,ref:e.ref,props:e.props,_owner:e._owner}}function Jd(e){return typeof e=="object"&&e!==null&&e.$$typeof===as}function gD(e){var B={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(C){return B[C]})}var A2=/\/+/g;function pc(e,B){return typeof e=="object"&&e!==null&&e.key!=null?gD(""+e.key):B.toString(36)}function Ma(e,B,C,t,n){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(r){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case as:case iD:i=!0}}if(i)return i=e,n=n(i),e=t===""?"."+pc(i,0):t,b2(n)?(C="",e!=null&&(C=e.replace(A2,"$&/")+"/"),Ma(n,B,C,"",function(o){return o})):n!=null&&(Jd(n)&&(n=mD(n,C+(!n.key||i&&i.key===n.key?"":(""+n.key).replace(A2,"$&/")+"/")+e)),B.push(n)),1;if(i=0,t=t===""?".":t+":",b2(e))for(var s=0;s<e.length;s++){r=e[s];var a=t+pc(r,s);i+=Ma(r,B,C,a,n)}else if(a=pD(e),typeof a=="function")for(e=a.call(e),s=0;!(r=e.next()).done;)r=r.value,a=t+pc(r,s++),i+=Ma(r,B,C,a,n);else if(r==="object")throw B=String(e),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return i}function Us(e,B,C){if(e==null)return e;var t=[],n=0;return Ma(e,t,"","",function(r){return B.call(C,r,n++)}),t}function bD(e){if(e._status===-1){var B=e._result;B=B(),B.then(function(C){(e._status===0||e._status===-1)&&(e._status=1,e._result=C)},function(C){(e._status===0||e._status===-1)&&(e._status=2,e._result=C)}),e._status===-1&&(e._status=0,e._result=B)}if(e._status===1)return e._result.default;throw e._result}var te={current:null},La={transition:null},AD={ReactCurrentDispatcher:te,ReactCurrentBatchConfig:La,ReactCurrentOwner:Qd};q.Children={map:Us,forEach:function(e,B,C){Us(e,function(){B.apply(this,arguments)},C)},count:function(e){var B=0;return Us(e,function(){B++}),B},toArray:function(e){return Us(e,function(B){return B})||[]},only:function(e){if(!Jd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};q.Component=vr;q.Fragment=sD;q.Profiler=oD;q.PureComponent=xd;q.StrictMode=aD;q.Suspense=dD;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AD;q.cloneElement=function(e,B,C){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var t=Tg({},e.props),n=e.key,r=e.ref,i=e._owner;if(B!=null){if(B.ref!==void 0&&(r=B.ref,i=Qd.current),B.key!==void 0&&(n=""+B.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in B)Kg.call(B,a)&&!Qg.hasOwnProperty(a)&&(t[a]=B[a]===void 0&&s!==void 0?s[a]:B[a])}var a=arguments.length-2;if(a===1)t.children=C;else if(1<a){s=Array(a);for(var o=0;o<a;o++)s[o]=arguments[o+2];t.children=s}return{$$typeof:as,type:e.type,key:n,ref:r,props:t,_owner:i}};q.createContext=function(e){return e={$$typeof:cD,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:lD,_context:e},e.Consumer=e};q.createElement=Jg;q.createFactory=function(e){var B=Jg.bind(null,e);return B.type=e,B};q.createRef=function(){return{current:null}};q.forwardRef=function(e){return{$$typeof:uD,render:e}};q.isValidElement=Jd;q.lazy=function(e){return{$$typeof:hD,_payload:{_status:-1,_result:e},_init:bD}};q.memo=function(e,B){return{$$typeof:fD,type:e,compare:B===void 0?null:B}};q.startTransition=function(e){var B=La.transition;La.transition={};try{e()}finally{La.transition=B}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(e,B){return te.current.useCallback(e,B)};q.useContext=function(e){return te.current.useContext(e)};q.useDebugValue=function(){};q.useDeferredValue=function(e){return te.current.useDeferredValue(e)};q.useEffect=function(e,B){return te.current.useEffect(e,B)};q.useId=function(){return te.current.useId()};q.useImperativeHandle=function(e,B,C){return te.current.useImperativeHandle(e,B,C)};q.useInsertionEffect=function(e,B){return te.current.useInsertionEffect(e,B)};q.useLayoutEffect=function(e,B){return te.current.useLayoutEffect(e,B)};q.useMemo=function(e,B){return te.current.useMemo(e,B)};q.useReducer=function(e,B,C){return te.current.useReducer(e,B,C)};q.useRef=function(e){return te.current.useRef(e)};q.useState=function(e){return te.current.useState(e)};q.useSyncExternalStore=function(e,B,C){return te.current.useSyncExternalStore(e,B,C)};q.useTransition=function(){return te.current.useTransition()};q.version="18.2.0";(function(e){e.exports=q})(rD);const nr=tD(O),vD=CD({__proto__:null,default:nr},[O]);/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var yD=O,ED=Symbol.for("react.element"),ID=Symbol.for("react.fragment"),SD=Object.prototype.hasOwnProperty,wD=yD.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,DD={key:!0,ref:!0,__self:!0,__source:!0};function Ug(e,B,C){var t,n={},r=null,i=null;C!==void 0&&(r=""+C),B.key!==void 0&&(r=""+B.key),B.ref!==void 0&&(i=B.ref);for(t in B)SD.call(B,t)&&!DD.hasOwnProperty(t)&&(n[t]=B[t]);if(e&&e.defaultProps)for(t in B=e.defaultProps,B)n[t]===void 0&&(n[t]=B[t]);return{$$typeof:ED,type:e,key:r,ref:i,props:n,_owner:wD.current}}dl.Fragment=ID;dl.jsx=Ug;dl.jsxs=Ug;(function(e){e.exports=dl})(nD);const to=bi.Fragment,D=bi.jsx,z=bi.jsxs;var Hu={},Mu={},kD={get exports(){return Mu},set exports(e){Mu=e}},ke={},Lu={},PD={get exports(){return Lu},set exports(e){Lu=e}},Vg={};/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/(function(e){function B(P,G){var x=P.length;P.push(G);B:for(;0<x;){var eB=x-1>>>1,yB=P[eB];if(0<n(yB,G))P[eB]=G,P[x]=yB,x=eB;else break B}}function C(P){return P.length===0?null:P[0]}function t(P){if(P.length===0)return null;var G=P[0],x=P.pop();if(x!==G){P[0]=x;B:for(var eB=0,yB=P.length,Ue=yB>>>1;eB<Ue;){var sB=2*(eB+1)-1,Oe=P[sB],zB=sB+1,iC=P[zB];if(0>n(Oe,x))zB<yB&&0>n(iC,Oe)?(P[eB]=iC,P[zB]=x,eB=zB):(P[eB]=Oe,P[sB]=x,eB=sB);else if(zB<yB&&0>n(iC,x))P[eB]=iC,P[zB]=x,eB=zB;else break B}}return G}function n(P,G){var x=P.sortIndex-G.sortIndex;return x!==0?x:P.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var a=[],o=[],c=1,l=null,u=3,m=!1,d=!1,h=!1,g=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(P){for(var G=C(o);G!==null;){if(G.callback===null)t(o);else if(G.startTime<=P)t(o),G.sortIndex=G.expirationTime,B(a,G);else break;G=C(o)}}function A(P){if(h=!1,b(P),!d)if(C(a)!==null)d=!0,VB(y);else{var G=C(o);G!==null&&MB(A,G.startTime-P)}}function y(P,G){d=!1,h&&(h=!1,f(v),v=-1),m=!0;var x=u;try{for(b(G),l=C(a);l!==null&&(!(l.expirationTime>G)||P&&!j());){var eB=l.callback;if(typeof eB=="function"){l.callback=null,u=l.priorityLevel;var yB=eB(l.expirationTime<=G);G=e.unstable_now(),typeof yB=="function"?l.callback=yB:l===C(a)&&t(a),b(G)}else t(a);l=C(a)}if(l!==null)var Ue=!0;else{var sB=C(o);sB!==null&&MB(A,sB.startTime-G),Ue=!1}return Ue}finally{l=null,u=x,m=!1}}var I=!1,E=null,v=-1,w=5,M=-1;function j(){return!(e.unstable_now()-M<w)}function Q(){if(E!==null){var P=e.unstable_now();M=P;var G=!0;try{G=E(!0,P)}finally{G?BB():(I=!1,E=null)}}else I=!1}var BB;if(typeof p=="function")BB=function(){p(Q)};else if(typeof MessageChannel<"u"){var lB=new MessageChannel,be=lB.port2;lB.port1.onmessage=Q,BB=function(){be.postMessage(null)}}else BB=function(){g(Q,0)};function VB(P){E=P,I||(I=!0,BB())}function MB(P,G){v=g(function(){P(e.unstable_now())},G)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){d||m||(d=!0,VB(y))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return u},e.unstable_getFirstCallbackNode=function(){return C(a)},e.unstable_next=function(P){switch(u){case 1:case 2:case 3:var G=3;break;default:G=u}var x=u;u=G;try{return P()}finally{u=x}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,G){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var x=u;u=P;try{return G()}finally{u=x}},e.unstable_scheduleCallback=function(P,G,x){var eB=e.unstable_now();switch(typeof x=="object"&&x!==null?(x=x.delay,x=typeof x=="number"&&0<x?eB+x:eB):x=eB,P){case 1:var yB=-1;break;case 2:yB=250;break;case 5:yB=1073741823;break;case 4:yB=1e4;break;default:yB=5e3}return yB=x+yB,P={id:c++,callback:G,priorityLevel:P,startTime:x,expirationTime:yB,sortIndex:-1},x>eB?(P.sortIndex=x,B(o,P),C(a)===null&&P===C(o)&&(h?(f(v),v=-1):h=!0,MB(A,x-eB))):(P.sortIndex=yB,B(a,P),d||m||(d=!0,VB(y))),P},e.unstable_shouldYield=j,e.unstable_wrapCallback=function(P){var G=u;return function(){var x=u;u=G;try{return P.apply(this,arguments)}finally{u=x}}}})(Vg);(function(e){e.exports=Vg})(PD);/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Wg=O,De=Lu;function S(e){for(var B="https://reactjs.org/docs/error-decoder.html?invariant="+e,C=1;C<arguments.length;C++)B+="&args[]="+encodeURIComponent(arguments[C]);return"Minified React error #"+e+"; visit "+B+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jg=new Set,Ai={};function mn(e,B){rr(e,B),rr(e+"Capture",B)}function rr(e,B){for(Ai[e]=B,e=0;e<B.length;e++)jg.add(B[e])}var HC=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tu=Object.prototype.hasOwnProperty,FD=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v2={},y2={};function ND(e){return Tu.call(y2,e)?!0:Tu.call(v2,e)?!1:FD.test(e)?y2[e]=!0:(v2[e]=!0,!1)}function OD(e,B,C,t){if(C!==null&&C.type===0)return!1;switch(typeof B){case"function":case"symbol":return!0;case"boolean":return t?!1:C!==null?!C.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function RD(e,B,C,t){if(B===null||typeof B>"u"||OD(e,B,C,t))return!0;if(t)return!1;if(C!==null)switch(C.type){case 3:return!B;case 4:return B===!1;case 5:return isNaN(B);case 6:return isNaN(B)||1>B}return!1}function ne(e,B,C,t,n,r,i){this.acceptsBooleans=B===2||B===3||B===4,this.attributeName=t,this.attributeNamespace=n,this.mustUseProperty=C,this.propertyName=e,this.type=B,this.sanitizeURL=r,this.removeEmptyString=i}var UB={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){UB[e]=new ne(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var B=e[0];UB[B]=new ne(B,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){UB[e]=new ne(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){UB[e]=new ne(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){UB[e]=new ne(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){UB[e]=new ne(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){UB[e]=new ne(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){UB[e]=new ne(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){UB[e]=new ne(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ud=/[\-:]([a-z])/g;function Vd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var B=e.replace(Ud,Vd);UB[B]=new ne(B,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var B=e.replace(Ud,Vd);UB[B]=new ne(B,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var B=e.replace(Ud,Vd);UB[B]=new ne(B,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){UB[e]=new ne(e,1,!1,e.toLowerCase(),null,!1,!1)});UB.xlinkHref=new ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){UB[e]=new ne(e,1,!1,e.toLowerCase(),null,!0,!0)});function Wd(e,B,C,t){var n=UB.hasOwnProperty(B)?UB[B]:null;(n!==null?n.type!==0:t||!(2<B.length)||B[0]!=="o"&&B[0]!=="O"||B[1]!=="n"&&B[1]!=="N")&&(RD(B,C,n,t)&&(C=null),t||n===null?ND(B)&&(C===null?e.removeAttribute(B):e.setAttribute(B,""+C)):n.mustUseProperty?e[n.propertyName]=C===null?n.type===3?!1:"":C:(B=n.attributeName,t=n.attributeNamespace,C===null?e.removeAttribute(B):(n=n.type,C=n===3||n===4&&C===!0?"":""+C,t?e.setAttributeNS(t,B,C):e.setAttribute(B,C))))}var UC=Wg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vs=Symbol.for("react.element"),Fn=Symbol.for("react.portal"),Nn=Symbol.for("react.fragment"),jd=Symbol.for("react.strict_mode"),Gu=Symbol.for("react.profiler"),Yg=Symbol.for("react.provider"),Xg=Symbol.for("react.context"),Yd=Symbol.for("react.forward_ref"),xu=Symbol.for("react.suspense"),Ku=Symbol.for("react.suspense_list"),Xd=Symbol.for("react.memo"),_C=Symbol.for("react.lazy"),Zg=Symbol.for("react.offscreen"),E2=Symbol.iterator;function Or(e){return e===null||typeof e!="object"?null:(e=E2&&e[E2]||e["@@iterator"],typeof e=="function"?e:null)}var vB=Object.assign,mc;function qr(e){if(mc===void 0)try{throw Error()}catch(C){var B=C.stack.trim().match(/\n( *(at )?)/);mc=B&&B[1]||""}return`
`+mc+e}var gc=!1;function bc(e,B){if(!e||gc)return"";gc=!0;var C=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(B)if(B=function(){throw Error()},Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(o){var t=o}Reflect.construct(e,[],B)}else{try{B.call()}catch(o){t=o}e.call(B.prototype)}else{try{throw Error()}catch(o){t=o}e()}}catch(o){if(o&&t&&typeof o.stack=="string"){for(var n=o.stack.split(`
`),r=t.stack.split(`
`),i=n.length-1,s=r.length-1;1<=i&&0<=s&&n[i]!==r[s];)s--;for(;1<=i&&0<=s;i--,s--)if(n[i]!==r[s]){if(i!==1||s!==1)do if(i--,s--,0>s||n[i]!==r[s]){var a=`
`+n[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=s);break}}}finally{gc=!1,Error.prepareStackTrace=C}return(e=e?e.displayName||e.name:"")?qr(e):""}function HD(e){switch(e.tag){case 5:return qr(e.type);case 16:return qr("Lazy");case 13:return qr("Suspense");case 19:return qr("SuspenseList");case 0:case 2:case 15:return e=bc(e.type,!1),e;case 11:return e=bc(e.type.render,!1),e;case 1:return e=bc(e.type,!0),e;default:return""}}function Qu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Nn:return"Fragment";case Fn:return"Portal";case Gu:return"Profiler";case jd:return"StrictMode";case xu:return"Suspense";case Ku:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xg:return(e.displayName||"Context")+".Consumer";case Yg:return(e._context.displayName||"Context")+".Provider";case Yd:var B=e.render;return e=e.displayName,e||(e=B.displayName||B.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xd:return B=e.displayName||null,B!==null?B:Qu(e.type)||"Memo";case _C:B=e._payload,e=e._init;try{return Qu(e(B))}catch{}}return null}function MD(e){var B=e.type;switch(e.tag){case 24:return"Cache";case 9:return(B.displayName||"Context")+".Consumer";case 10:return(B._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=B.render,e=e.displayName||e.name||"",B.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return B;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qu(B);case 8:return B===jd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof B=="function")return B.displayName||B.name||null;if(typeof B=="string")return B}return null}function Et(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qg(e){var B=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(B==="checkbox"||B==="radio")}function LD(e){var B=qg(e)?"checked":"value",C=Object.getOwnPropertyDescriptor(e.constructor.prototype,B),t=""+e[B];if(!e.hasOwnProperty(B)&&typeof C<"u"&&typeof C.get=="function"&&typeof C.set=="function"){var n=C.get,r=C.set;return Object.defineProperty(e,B,{configurable:!0,get:function(){return n.call(this)},set:function(i){t=""+i,r.call(this,i)}}),Object.defineProperty(e,B,{enumerable:C.enumerable}),{getValue:function(){return t},setValue:function(i){t=""+i},stopTracking:function(){e._valueTracker=null,delete e[B]}}}}function Ws(e){e._valueTracker||(e._valueTracker=LD(e))}function zg(e){if(!e)return!1;var B=e._valueTracker;if(!B)return!0;var C=B.getValue(),t="";return e&&(t=qg(e)?e.checked?"true":"false":e.value),e=t,e!==C?(B.setValue(e),!0):!1}function no(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ju(e,B){var C=B.checked;return vB({},B,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:C??e._wrapperState.initialChecked})}function I2(e,B){var C=B.defaultValue==null?"":B.defaultValue,t=B.checked!=null?B.checked:B.defaultChecked;C=Et(B.value!=null?B.value:C),e._wrapperState={initialChecked:t,initialValue:C,controlled:B.type==="checkbox"||B.type==="radio"?B.checked!=null:B.value!=null}}function _g(e,B){B=B.checked,B!=null&&Wd(e,"checked",B,!1)}function Uu(e,B){_g(e,B);var C=Et(B.value),t=B.type;if(C!=null)t==="number"?(C===0&&e.value===""||e.value!=C)&&(e.value=""+C):e.value!==""+C&&(e.value=""+C);else if(t==="submit"||t==="reset"){e.removeAttribute("value");return}B.hasOwnProperty("value")?Vu(e,B.type,C):B.hasOwnProperty("defaultValue")&&Vu(e,B.type,Et(B.defaultValue)),B.checked==null&&B.defaultChecked!=null&&(e.defaultChecked=!!B.defaultChecked)}function S2(e,B,C){if(B.hasOwnProperty("value")||B.hasOwnProperty("defaultValue")){var t=B.type;if(!(t!=="submit"&&t!=="reset"||B.value!==void 0&&B.value!==null))return;B=""+e._wrapperState.initialValue,C||B===e.value||(e.value=B),e.defaultValue=B}C=e.name,C!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,C!==""&&(e.name=C)}function Vu(e,B,C){(B!=="number"||no(e.ownerDocument)!==e)&&(C==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+C&&(e.defaultValue=""+C))}var zr=Array.isArray;function jn(e,B,C,t){if(e=e.options,B){B={};for(var n=0;n<C.length;n++)B["$"+C[n]]=!0;for(C=0;C<e.length;C++)n=B.hasOwnProperty("$"+e[C].value),e[C].selected!==n&&(e[C].selected=n),n&&t&&(e[C].defaultSelected=!0)}else{for(C=""+Et(C),B=null,n=0;n<e.length;n++){if(e[n].value===C){e[n].selected=!0,t&&(e[n].defaultSelected=!0);return}B!==null||e[n].disabled||(B=e[n])}B!==null&&(B.selected=!0)}}function Wu(e,B){if(B.dangerouslySetInnerHTML!=null)throw Error(S(91));return vB({},B,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function w2(e,B){var C=B.value;if(C==null){if(C=B.children,B=B.defaultValue,C!=null){if(B!=null)throw Error(S(92));if(zr(C)){if(1<C.length)throw Error(S(93));C=C[0]}B=C}B==null&&(B=""),C=B}e._wrapperState={initialValue:Et(C)}}function $g(e,B){var C=Et(B.value),t=Et(B.defaultValue);C!=null&&(C=""+C,C!==e.value&&(e.value=C),B.defaultValue==null&&e.defaultValue!==C&&(e.defaultValue=C)),t!=null&&(e.defaultValue=""+t)}function D2(e){var B=e.textContent;B===e._wrapperState.initialValue&&B!==""&&B!==null&&(e.value=B)}function Bb(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ju(e,B){return e==null||e==="http://www.w3.org/1999/xhtml"?Bb(B):e==="http://www.w3.org/2000/svg"&&B==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var js,eb=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(B,C,t,n){MSApp.execUnsafeLocalFunction(function(){return e(B,C,t,n)})}:e}(function(e,B){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=B;else{for(js=js||document.createElement("div"),js.innerHTML="<svg>"+B.valueOf().toString()+"</svg>",B=js.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;B.firstChild;)e.appendChild(B.firstChild)}});function vi(e,B){if(B){var C=e.firstChild;if(C&&C===e.lastChild&&C.nodeType===3){C.nodeValue=B;return}}e.textContent=B}var Ci={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},TD=["Webkit","ms","Moz","O"];Object.keys(Ci).forEach(function(e){TD.forEach(function(B){B=B+e.charAt(0).toUpperCase()+e.substring(1),Ci[B]=Ci[e]})});function Cb(e,B,C){return B==null||typeof B=="boolean"||B===""?"":C||typeof B!="number"||B===0||Ci.hasOwnProperty(e)&&Ci[e]?(""+B).trim():B+"px"}function tb(e,B){e=e.style;for(var C in B)if(B.hasOwnProperty(C)){var t=C.indexOf("--")===0,n=Cb(C,B[C],t);C==="float"&&(C="cssFloat"),t?e.setProperty(C,n):e[C]=n}}var GD=vB({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yu(e,B){if(B){if(GD[e]&&(B.children!=null||B.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(B.dangerouslySetInnerHTML!=null){if(B.children!=null)throw Error(S(60));if(typeof B.dangerouslySetInnerHTML!="object"||!("__html"in B.dangerouslySetInnerHTML))throw Error(S(61))}if(B.style!=null&&typeof B.style!="object")throw Error(S(62))}}function Xu(e,B){if(e.indexOf("-")===-1)return typeof B.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zu=null;function Zd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qu=null,Yn=null,Xn=null;function k2(e){if(e=cs(e)){if(typeof qu!="function")throw Error(S(280));var B=e.stateNode;B&&(B=gl(B),qu(e.stateNode,e.type,B))}}function nb(e){Yn?Xn?Xn.push(e):Xn=[e]:Yn=e}function rb(){if(Yn){var e=Yn,B=Xn;if(Xn=Yn=null,k2(e),B)for(e=0;e<B.length;e++)k2(B[e])}}function ib(e,B){return e(B)}function sb(){}var Ac=!1;function ab(e,B,C){if(Ac)return e(B,C);Ac=!0;try{return ib(e,B,C)}finally{Ac=!1,(Yn!==null||Xn!==null)&&(sb(),rb())}}function yi(e,B){var C=e.stateNode;if(C===null)return null;var t=gl(C);if(t===null)return null;C=t[B];B:switch(B){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break B;default:e=!1}if(e)return null;if(C&&typeof C!="function")throw Error(S(231,B,typeof C));return C}var zu=!1;if(HC)try{var Rr={};Object.defineProperty(Rr,"passive",{get:function(){zu=!0}}),window.addEventListener("test",Rr,Rr),window.removeEventListener("test",Rr,Rr)}catch{zu=!1}function xD(e,B,C,t,n,r,i,s,a){var o=Array.prototype.slice.call(arguments,3);try{B.apply(C,o)}catch(c){this.onError(c)}}var ti=!1,ro=null,io=!1,_u=null,KD={onError:function(e){ti=!0,ro=e}};function QD(e,B,C,t,n,r,i,s,a){ti=!1,ro=null,xD.apply(KD,arguments)}function JD(e,B,C,t,n,r,i,s,a){if(QD.apply(this,arguments),ti){if(ti){var o=ro;ti=!1,ro=null}else throw Error(S(198));io||(io=!0,_u=o)}}function gn(e){var B=e,C=e;if(e.alternate)for(;B.return;)B=B.return;else{e=B;do B=e,B.flags&4098&&(C=B.return),e=B.return;while(e)}return B.tag===3?C:null}function ob(e){if(e.tag===13){var B=e.memoizedState;if(B===null&&(e=e.alternate,e!==null&&(B=e.memoizedState)),B!==null)return B.dehydrated}return null}function P2(e){if(gn(e)!==e)throw Error(S(188))}function UD(e){var B=e.alternate;if(!B){if(B=gn(e),B===null)throw Error(S(188));return B!==e?null:e}for(var C=e,t=B;;){var n=C.return;if(n===null)break;var r=n.alternate;if(r===null){if(t=n.return,t!==null){C=t;continue}break}if(n.child===r.child){for(r=n.child;r;){if(r===C)return P2(n),e;if(r===t)return P2(n),B;r=r.sibling}throw Error(S(188))}if(C.return!==t.return)C=n,t=r;else{for(var i=!1,s=n.child;s;){if(s===C){i=!0,C=n,t=r;break}if(s===t){i=!0,t=n,C=r;break}s=s.sibling}if(!i){for(s=r.child;s;){if(s===C){i=!0,C=r,t=n;break}if(s===t){i=!0,t=r,C=n;break}s=s.sibling}if(!i)throw Error(S(189))}}if(C.alternate!==t)throw Error(S(190))}if(C.tag!==3)throw Error(S(188));return C.stateNode.current===C?e:B}function lb(e){return e=UD(e),e!==null?cb(e):null}function cb(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var B=cb(e);if(B!==null)return B;e=e.sibling}return null}var ub=De.unstable_scheduleCallback,F2=De.unstable_cancelCallback,VD=De.unstable_shouldYield,WD=De.unstable_requestPaint,DB=De.unstable_now,jD=De.unstable_getCurrentPriorityLevel,qd=De.unstable_ImmediatePriority,db=De.unstable_UserBlockingPriority,so=De.unstable_NormalPriority,YD=De.unstable_LowPriority,fb=De.unstable_IdlePriority,fl=null,uC=null;function XD(e){if(uC&&typeof uC.onCommitFiberRoot=="function")try{uC.onCommitFiberRoot(fl,e,void 0,(e.current.flags&128)===128)}catch{}}var BC=Math.clz32?Math.clz32:zD,ZD=Math.log,qD=Math.LN2;function zD(e){return e>>>=0,e===0?32:31-(ZD(e)/qD|0)|0}var Ys=64,Xs=4194304;function _r(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ao(e,B){var C=e.pendingLanes;if(C===0)return 0;var t=0,n=e.suspendedLanes,r=e.pingedLanes,i=C&268435455;if(i!==0){var s=i&~n;s!==0?t=_r(s):(r&=i,r!==0&&(t=_r(r)))}else i=C&~n,i!==0?t=_r(i):r!==0&&(t=_r(r));if(t===0)return 0;if(B!==0&&B!==t&&!(B&n)&&(n=t&-t,r=B&-B,n>=r||n===16&&(r&4194240)!==0))return B;if(t&4&&(t|=C&16),B=e.entangledLanes,B!==0)for(e=e.entanglements,B&=t;0<B;)C=31-BC(B),n=1<<C,t|=e[C],B&=~n;return t}function _D(e,B){switch(e){case 1:case 2:case 4:return B+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return B+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $D(e,B){for(var C=e.suspendedLanes,t=e.pingedLanes,n=e.expirationTimes,r=e.pendingLanes;0<r;){var i=31-BC(r),s=1<<i,a=n[i];a===-1?(!(s&C)||s&t)&&(n[i]=_D(s,B)):a<=B&&(e.expiredLanes|=s),r&=~s}}function $u(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hb(){var e=Ys;return Ys<<=1,!(Ys&4194240)&&(Ys=64),e}function vc(e){for(var B=[],C=0;31>C;C++)B.push(e);return B}function os(e,B,C){e.pendingLanes|=B,B!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,B=31-BC(B),e[B]=C}function Bk(e,B){var C=e.pendingLanes&~B;e.pendingLanes=B,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=B,e.mutableReadLanes&=B,e.entangledLanes&=B,B=e.entanglements;var t=e.eventTimes;for(e=e.expirationTimes;0<C;){var n=31-BC(C),r=1<<n;B[n]=0,t[n]=-1,e[n]=-1,C&=~r}}function zd(e,B){var C=e.entangledLanes|=B;for(e=e.entanglements;C;){var t=31-BC(C),n=1<<t;n&B|e[t]&B&&(e[t]|=B),C&=~n}}var CB=0;function pb(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var mb,_d,gb,bb,Ab,B1=!1,Zs=[],ot=null,lt=null,ct=null,Ei=new Map,Ii=new Map,Bt=[],ek="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function N2(e,B){switch(e){case"focusin":case"focusout":ot=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":ct=null;break;case"pointerover":case"pointerout":Ei.delete(B.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ii.delete(B.pointerId)}}function Hr(e,B,C,t,n,r){return e===null||e.nativeEvent!==r?(e={blockedOn:B,domEventName:C,eventSystemFlags:t,nativeEvent:r,targetContainers:[n]},B!==null&&(B=cs(B),B!==null&&_d(B)),e):(e.eventSystemFlags|=t,B=e.targetContainers,n!==null&&B.indexOf(n)===-1&&B.push(n),e)}function Ck(e,B,C,t,n){switch(B){case"focusin":return ot=Hr(ot,e,B,C,t,n),!0;case"dragenter":return lt=Hr(lt,e,B,C,t,n),!0;case"mouseover":return ct=Hr(ct,e,B,C,t,n),!0;case"pointerover":var r=n.pointerId;return Ei.set(r,Hr(Ei.get(r)||null,e,B,C,t,n)),!0;case"gotpointercapture":return r=n.pointerId,Ii.set(r,Hr(Ii.get(r)||null,e,B,C,t,n)),!0}return!1}function vb(e){var B=Kt(e.target);if(B!==null){var C=gn(B);if(C!==null){if(B=C.tag,B===13){if(B=ob(C),B!==null){e.blockedOn=B,Ab(e.priority,function(){gb(C)});return}}else if(B===3&&C.stateNode.current.memoizedState.isDehydrated){e.blockedOn=C.tag===3?C.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ta(e){if(e.blockedOn!==null)return!1;for(var B=e.targetContainers;0<B.length;){var C=e1(e.domEventName,e.eventSystemFlags,B[0],e.nativeEvent);if(C===null){C=e.nativeEvent;var t=new C.constructor(C.type,C);Zu=t,C.target.dispatchEvent(t),Zu=null}else return B=cs(C),B!==null&&_d(B),e.blockedOn=C,!1;B.shift()}return!0}function O2(e,B,C){Ta(e)&&C.delete(B)}function tk(){B1=!1,ot!==null&&Ta(ot)&&(ot=null),lt!==null&&Ta(lt)&&(lt=null),ct!==null&&Ta(ct)&&(ct=null),Ei.forEach(O2),Ii.forEach(O2)}function Mr(e,B){e.blockedOn===B&&(e.blockedOn=null,B1||(B1=!0,De.unstable_scheduleCallback(De.unstable_NormalPriority,tk)))}function Si(e){function B(n){return Mr(n,e)}if(0<Zs.length){Mr(Zs[0],e);for(var C=1;C<Zs.length;C++){var t=Zs[C];t.blockedOn===e&&(t.blockedOn=null)}}for(ot!==null&&Mr(ot,e),lt!==null&&Mr(lt,e),ct!==null&&Mr(ct,e),Ei.forEach(B),Ii.forEach(B),C=0;C<Bt.length;C++)t=Bt[C],t.blockedOn===e&&(t.blockedOn=null);for(;0<Bt.length&&(C=Bt[0],C.blockedOn===null);)vb(C),C.blockedOn===null&&Bt.shift()}var Zn=UC.ReactCurrentBatchConfig,oo=!0;function nk(e,B,C,t){var n=CB,r=Zn.transition;Zn.transition=null;try{CB=1,$d(e,B,C,t)}finally{CB=n,Zn.transition=r}}function rk(e,B,C,t){var n=CB,r=Zn.transition;Zn.transition=null;try{CB=4,$d(e,B,C,t)}finally{CB=n,Zn.transition=r}}function $d(e,B,C,t){if(oo){var n=e1(e,B,C,t);if(n===null)Nc(e,B,t,lo,C),N2(e,t);else if(Ck(n,e,B,C,t))t.stopPropagation();else if(N2(e,t),B&4&&-1<ek.indexOf(e)){for(;n!==null;){var r=cs(n);if(r!==null&&mb(r),r=e1(e,B,C,t),r===null&&Nc(e,B,t,lo,C),r===n)break;n=r}n!==null&&t.stopPropagation()}else Nc(e,B,t,null,C)}}var lo=null;function e1(e,B,C,t){if(lo=null,e=Zd(t),e=Kt(e),e!==null)if(B=gn(e),B===null)e=null;else if(C=B.tag,C===13){if(e=ob(B),e!==null)return e;e=null}else if(C===3){if(B.stateNode.current.memoizedState.isDehydrated)return B.tag===3?B.stateNode.containerInfo:null;e=null}else B!==e&&(e=null);return lo=e,null}function yb(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jD()){case qd:return 1;case db:return 4;case so:case YD:return 16;case fb:return 536870912;default:return 16}default:return 16}}var it=null,Bf=null,Ga=null;function Eb(){if(Ga)return Ga;var e,B=Bf,C=B.length,t,n="value"in it?it.value:it.textContent,r=n.length;for(e=0;e<C&&B[e]===n[e];e++);var i=C-e;for(t=1;t<=i&&B[C-t]===n[r-t];t++);return Ga=n.slice(e,1<t?1-t:void 0)}function xa(e){var B=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&B===13&&(e=13)):e=B,e===10&&(e=13),32<=e||e===13?e:0}function qs(){return!0}function R2(){return!1}function Pe(e){function B(C,t,n,r,i){this._reactName=C,this._targetInst=n,this.type=t,this.nativeEvent=r,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(C=e[s],this[s]=C?C(r):r[s]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?qs:R2,this.isPropagationStopped=R2,this}return vB(B.prototype,{preventDefault:function(){this.defaultPrevented=!0;var C=this.nativeEvent;C&&(C.preventDefault?C.preventDefault():typeof C.returnValue!="unknown"&&(C.returnValue=!1),this.isDefaultPrevented=qs)},stopPropagation:function(){var C=this.nativeEvent;C&&(C.stopPropagation?C.stopPropagation():typeof C.cancelBubble!="unknown"&&(C.cancelBubble=!0),this.isPropagationStopped=qs)},persist:function(){},isPersistent:qs}),B}var yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ef=Pe(yr),ls=vB({},yr,{view:0,detail:0}),ik=Pe(ls),yc,Ec,Lr,hl=vB({},ls,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lr&&(Lr&&e.type==="mousemove"?(yc=e.screenX-Lr.screenX,Ec=e.screenY-Lr.screenY):Ec=yc=0,Lr=e),yc)},movementY:function(e){return"movementY"in e?e.movementY:Ec}}),H2=Pe(hl),sk=vB({},hl,{dataTransfer:0}),ak=Pe(sk),ok=vB({},ls,{relatedTarget:0}),Ic=Pe(ok),lk=vB({},yr,{animationName:0,elapsedTime:0,pseudoElement:0}),ck=Pe(lk),uk=vB({},yr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dk=Pe(uk),fk=vB({},yr,{data:0}),M2=Pe(fk),hk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gk(e){var B=this.nativeEvent;return B.getModifierState?B.getModifierState(e):(e=mk[e])?!!B[e]:!1}function Cf(){return gk}var bk=vB({},ls,{key:function(e){if(e.key){var B=hk[e.key]||e.key;if(B!=="Unidentified")return B}return e.type==="keypress"?(e=xa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pk[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cf,charCode:function(e){return e.type==="keypress"?xa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ak=Pe(bk),vk=vB({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),L2=Pe(vk),yk=vB({},ls,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cf}),Ek=Pe(yk),Ik=vB({},yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sk=Pe(Ik),wk=vB({},hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dk=Pe(wk),kk=[9,13,27,32],tf=HC&&"CompositionEvent"in window,ni=null;HC&&"documentMode"in document&&(ni=document.documentMode);var Pk=HC&&"TextEvent"in window&&!ni,Ib=HC&&(!tf||ni&&8<ni&&11>=ni),T2=String.fromCharCode(32),G2=!1;function Sb(e,B){switch(e){case"keyup":return kk.indexOf(B.keyCode)!==-1;case"keydown":return B.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wb(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var On=!1;function Fk(e,B){switch(e){case"compositionend":return wb(B);case"keypress":return B.which!==32?null:(G2=!0,T2);case"textInput":return e=B.data,e===T2&&G2?null:e;default:return null}}function Nk(e,B){if(On)return e==="compositionend"||!tf&&Sb(e,B)?(e=Eb(),Ga=Bf=it=null,On=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(B.ctrlKey||B.altKey||B.metaKey)||B.ctrlKey&&B.altKey){if(B.char&&1<B.char.length)return B.char;if(B.which)return String.fromCharCode(B.which)}return null;case"compositionend":return Ib&&B.locale!=="ko"?null:B.data;default:return null}}var Ok={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function x2(e){var B=e&&e.nodeName&&e.nodeName.toLowerCase();return B==="input"?!!Ok[e.type]:B==="textarea"}function Db(e,B,C,t){nb(t),B=co(B,"onChange"),0<B.length&&(C=new ef("onChange","change",null,C,t),e.push({event:C,listeners:B}))}var ri=null,wi=null;function Rk(e){Gb(e,0)}function pl(e){var B=Mn(e);if(zg(B))return e}function Hk(e,B){if(e==="change")return B}var kb=!1;if(HC){var Sc;if(HC){var wc="oninput"in document;if(!wc){var K2=document.createElement("div");K2.setAttribute("oninput","return;"),wc=typeof K2.oninput=="function"}Sc=wc}else Sc=!1;kb=Sc&&(!document.documentMode||9<document.documentMode)}function Q2(){ri&&(ri.detachEvent("onpropertychange",Pb),wi=ri=null)}function Pb(e){if(e.propertyName==="value"&&pl(wi)){var B=[];Db(B,wi,e,Zd(e)),ab(Rk,B)}}function Mk(e,B,C){e==="focusin"?(Q2(),ri=B,wi=C,ri.attachEvent("onpropertychange",Pb)):e==="focusout"&&Q2()}function Lk(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pl(wi)}function Tk(e,B){if(e==="click")return pl(B)}function Gk(e,B){if(e==="input"||e==="change")return pl(B)}function xk(e,B){return e===B&&(e!==0||1/e===1/B)||e!==e&&B!==B}var nC=typeof Object.is=="function"?Object.is:xk;function Di(e,B){if(nC(e,B))return!0;if(typeof e!="object"||e===null||typeof B!="object"||B===null)return!1;var C=Object.keys(e),t=Object.keys(B);if(C.length!==t.length)return!1;for(t=0;t<C.length;t++){var n=C[t];if(!Tu.call(B,n)||!nC(e[n],B[n]))return!1}return!0}function J2(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function U2(e,B){var C=J2(e);e=0;for(var t;C;){if(C.nodeType===3){if(t=e+C.textContent.length,e<=B&&t>=B)return{node:C,offset:B-e};e=t}B:{for(;C;){if(C.nextSibling){C=C.nextSibling;break B}C=C.parentNode}C=void 0}C=J2(C)}}function Fb(e,B){return e&&B?e===B?!0:e&&e.nodeType===3?!1:B&&B.nodeType===3?Fb(e,B.parentNode):"contains"in e?e.contains(B):e.compareDocumentPosition?!!(e.compareDocumentPosition(B)&16):!1:!1}function Nb(){for(var e=window,B=no();B instanceof e.HTMLIFrameElement;){try{var C=typeof B.contentWindow.location.href=="string"}catch{C=!1}if(C)e=B.contentWindow;else break;B=no(e.document)}return B}function nf(e){var B=e&&e.nodeName&&e.nodeName.toLowerCase();return B&&(B==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||B==="textarea"||e.contentEditable==="true")}function Kk(e){var B=Nb(),C=e.focusedElem,t=e.selectionRange;if(B!==C&&C&&C.ownerDocument&&Fb(C.ownerDocument.documentElement,C)){if(t!==null&&nf(C)){if(B=t.start,e=t.end,e===void 0&&(e=B),"selectionStart"in C)C.selectionStart=B,C.selectionEnd=Math.min(e,C.value.length);else if(e=(B=C.ownerDocument||document)&&B.defaultView||window,e.getSelection){e=e.getSelection();var n=C.textContent.length,r=Math.min(t.start,n);t=t.end===void 0?r:Math.min(t.end,n),!e.extend&&r>t&&(n=t,t=r,r=n),n=U2(C,r);var i=U2(C,t);n&&i&&(e.rangeCount!==1||e.anchorNode!==n.node||e.anchorOffset!==n.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(B=B.createRange(),B.setStart(n.node,n.offset),e.removeAllRanges(),r>t?(e.addRange(B),e.extend(i.node,i.offset)):(B.setEnd(i.node,i.offset),e.addRange(B)))}}for(B=[],e=C;e=e.parentNode;)e.nodeType===1&&B.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<B.length;C++)e=B[C],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qk=HC&&"documentMode"in document&&11>=document.documentMode,Rn=null,C1=null,ii=null,t1=!1;function V2(e,B,C){var t=C.window===C?C.document:C.nodeType===9?C:C.ownerDocument;t1||Rn==null||Rn!==no(t)||(t=Rn,"selectionStart"in t&&nf(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),ii&&Di(ii,t)||(ii=t,t=co(C1,"onSelect"),0<t.length&&(B=new ef("onSelect","select",null,B,C),e.push({event:B,listeners:t}),B.target=Rn)))}function zs(e,B){var C={};return C[e.toLowerCase()]=B.toLowerCase(),C["Webkit"+e]="webkit"+B,C["Moz"+e]="moz"+B,C}var Hn={animationend:zs("Animation","AnimationEnd"),animationiteration:zs("Animation","AnimationIteration"),animationstart:zs("Animation","AnimationStart"),transitionend:zs("Transition","TransitionEnd")},Dc={},Ob={};HC&&(Ob=document.createElement("div").style,"AnimationEvent"in window||(delete Hn.animationend.animation,delete Hn.animationiteration.animation,delete Hn.animationstart.animation),"TransitionEvent"in window||delete Hn.transitionend.transition);function ml(e){if(Dc[e])return Dc[e];if(!Hn[e])return e;var B=Hn[e],C;for(C in B)if(B.hasOwnProperty(C)&&C in Ob)return Dc[e]=B[C];return e}var Rb=ml("animationend"),Hb=ml("animationiteration"),Mb=ml("animationstart"),Lb=ml("transitionend"),Tb=new Map,W2="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ot(e,B){Tb.set(e,B),mn(B,[e])}for(var kc=0;kc<W2.length;kc++){var Pc=W2[kc],Jk=Pc.toLowerCase(),Uk=Pc[0].toUpperCase()+Pc.slice(1);Ot(Jk,"on"+Uk)}Ot(Rb,"onAnimationEnd");Ot(Hb,"onAnimationIteration");Ot(Mb,"onAnimationStart");Ot("dblclick","onDoubleClick");Ot("focusin","onFocus");Ot("focusout","onBlur");Ot(Lb,"onTransitionEnd");rr("onMouseEnter",["mouseout","mouseover"]);rr("onMouseLeave",["mouseout","mouseover"]);rr("onPointerEnter",["pointerout","pointerover"]);rr("onPointerLeave",["pointerout","pointerover"]);mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vk=new Set("cancel close invalid load scroll toggle".split(" ").concat($r));function j2(e,B,C){var t=e.type||"unknown-event";e.currentTarget=C,JD(t,B,void 0,e),e.currentTarget=null}function Gb(e,B){B=(B&4)!==0;for(var C=0;C<e.length;C++){var t=e[C],n=t.event;t=t.listeners;B:{var r=void 0;if(B)for(var i=t.length-1;0<=i;i--){var s=t[i],a=s.instance,o=s.currentTarget;if(s=s.listener,a!==r&&n.isPropagationStopped())break B;j2(n,s,o),r=a}else for(i=0;i<t.length;i++){if(s=t[i],a=s.instance,o=s.currentTarget,s=s.listener,a!==r&&n.isPropagationStopped())break B;j2(n,s,o),r=a}}}if(io)throw e=_u,io=!1,_u=null,e}function uB(e,B){var C=B[a1];C===void 0&&(C=B[a1]=new Set);var t=e+"__bubble";C.has(t)||(xb(B,e,2,!1),C.add(t))}function Fc(e,B,C){var t=0;B&&(t|=4),xb(C,e,t,B)}var _s="_reactListening"+Math.random().toString(36).slice(2);function ki(e){if(!e[_s]){e[_s]=!0,jg.forEach(function(C){C!=="selectionchange"&&(Vk.has(C)||Fc(C,!1,e),Fc(C,!0,e))});var B=e.nodeType===9?e:e.ownerDocument;B===null||B[_s]||(B[_s]=!0,Fc("selectionchange",!1,B))}}function xb(e,B,C,t){switch(yb(B)){case 1:var n=nk;break;case 4:n=rk;break;default:n=$d}C=n.bind(null,B,C,e),n=void 0,!zu||B!=="touchstart"&&B!=="touchmove"&&B!=="wheel"||(n=!0),t?n!==void 0?e.addEventListener(B,C,{capture:!0,passive:n}):e.addEventListener(B,C,!0):n!==void 0?e.addEventListener(B,C,{passive:n}):e.addEventListener(B,C,!1)}function Nc(e,B,C,t,n){var r=t;if(!(B&1)&&!(B&2)&&t!==null)B:for(;;){if(t===null)return;var i=t.tag;if(i===3||i===4){var s=t.stateNode.containerInfo;if(s===n||s.nodeType===8&&s.parentNode===n)break;if(i===4)for(i=t.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===n||a.nodeType===8&&a.parentNode===n))return;i=i.return}for(;s!==null;){if(i=Kt(s),i===null)return;if(a=i.tag,a===5||a===6){t=r=i;continue B}s=s.parentNode}}t=t.return}ab(function(){var o=r,c=Zd(C),l=[];B:{var u=Tb.get(e);if(u!==void 0){var m=ef,d=e;switch(e){case"keypress":if(xa(C)===0)break B;case"keydown":case"keyup":m=Ak;break;case"focusin":d="focus",m=Ic;break;case"focusout":d="blur",m=Ic;break;case"beforeblur":case"afterblur":m=Ic;break;case"click":if(C.button===2)break B;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=H2;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=ak;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Ek;break;case Rb:case Hb:case Mb:m=ck;break;case Lb:m=Sk;break;case"scroll":m=ik;break;case"wheel":m=Dk;break;case"copy":case"cut":case"paste":m=dk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=L2}var h=(B&4)!==0,g=!h&&e==="scroll",f=h?u!==null?u+"Capture":null:u;h=[];for(var p=o,b;p!==null;){b=p;var A=b.stateNode;if(b.tag===5&&A!==null&&(b=A,f!==null&&(A=yi(p,f),A!=null&&h.push(Pi(p,A,b)))),g)break;p=p.return}0<h.length&&(u=new m(u,d,null,C,c),l.push({event:u,listeners:h}))}}if(!(B&7)){B:{if(u=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",u&&C!==Zu&&(d=C.relatedTarget||C.fromElement)&&(Kt(d)||d[MC]))break B;if((m||u)&&(u=c.window===c?c:(u=c.ownerDocument)?u.defaultView||u.parentWindow:window,m?(d=C.relatedTarget||C.toElement,m=o,d=d?Kt(d):null,d!==null&&(g=gn(d),d!==g||d.tag!==5&&d.tag!==6)&&(d=null)):(m=null,d=o),m!==d)){if(h=H2,A="onMouseLeave",f="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(h=L2,A="onPointerLeave",f="onPointerEnter",p="pointer"),g=m==null?u:Mn(m),b=d==null?u:Mn(d),u=new h(A,p+"leave",m,C,c),u.target=g,u.relatedTarget=b,A=null,Kt(c)===o&&(h=new h(f,p+"enter",d,C,c),h.target=b,h.relatedTarget=g,A=h),g=A,m&&d)e:{for(h=m,f=d,p=0,b=h;b;b=In(b))p++;for(b=0,A=f;A;A=In(A))b++;for(;0<p-b;)h=In(h),p--;for(;0<b-p;)f=In(f),b--;for(;p--;){if(h===f||f!==null&&h===f.alternate)break e;h=In(h),f=In(f)}h=null}else h=null;m!==null&&Y2(l,u,m,h,!1),d!==null&&g!==null&&Y2(l,g,d,h,!0)}}B:{if(u=o?Mn(o):window,m=u.nodeName&&u.nodeName.toLowerCase(),m==="select"||m==="input"&&u.type==="file")var y=Hk;else if(x2(u))if(kb)y=Gk;else{y=Lk;var I=Mk}else(m=u.nodeName)&&m.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(y=Tk);if(y&&(y=y(e,o))){Db(l,y,C,c);break B}I&&I(e,u,o),e==="focusout"&&(I=u._wrapperState)&&I.controlled&&u.type==="number"&&Vu(u,"number",u.value)}switch(I=o?Mn(o):window,e){case"focusin":(x2(I)||I.contentEditable==="true")&&(Rn=I,C1=o,ii=null);break;case"focusout":ii=C1=Rn=null;break;case"mousedown":t1=!0;break;case"contextmenu":case"mouseup":case"dragend":t1=!1,V2(l,C,c);break;case"selectionchange":if(Qk)break;case"keydown":case"keyup":V2(l,C,c)}var E;if(tf)B:{switch(e){case"compositionstart":var v="onCompositionStart";break B;case"compositionend":v="onCompositionEnd";break B;case"compositionupdate":v="onCompositionUpdate";break B}v=void 0}else On?Sb(e,C)&&(v="onCompositionEnd"):e==="keydown"&&C.keyCode===229&&(v="onCompositionStart");v&&(Ib&&C.locale!=="ko"&&(On||v!=="onCompositionStart"?v==="onCompositionEnd"&&On&&(E=Eb()):(it=c,Bf="value"in it?it.value:it.textContent,On=!0)),I=co(o,v),0<I.length&&(v=new M2(v,e,null,C,c),l.push({event:v,listeners:I}),E?v.data=E:(E=wb(C),E!==null&&(v.data=E)))),(E=Pk?Fk(e,C):Nk(e,C))&&(o=co(o,"onBeforeInput"),0<o.length&&(c=new M2("onBeforeInput","beforeinput",null,C,c),l.push({event:c,listeners:o}),c.data=E))}Gb(l,B)})}function Pi(e,B,C){return{instance:e,listener:B,currentTarget:C}}function co(e,B){for(var C=B+"Capture",t=[];e!==null;){var n=e,r=n.stateNode;n.tag===5&&r!==null&&(n=r,r=yi(e,C),r!=null&&t.unshift(Pi(e,r,n)),r=yi(e,B),r!=null&&t.push(Pi(e,r,n))),e=e.return}return t}function In(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Y2(e,B,C,t,n){for(var r=B._reactName,i=[];C!==null&&C!==t;){var s=C,a=s.alternate,o=s.stateNode;if(a!==null&&a===t)break;s.tag===5&&o!==null&&(s=o,n?(a=yi(C,r),a!=null&&i.unshift(Pi(C,a,s))):n||(a=yi(C,r),a!=null&&i.push(Pi(C,a,s)))),C=C.return}i.length!==0&&e.push({event:B,listeners:i})}var Wk=/\r\n?/g,jk=/\u0000|\uFFFD/g;function X2(e){return(typeof e=="string"?e:""+e).replace(Wk,`
`).replace(jk,"")}function $s(e,B,C){if(B=X2(B),X2(e)!==B&&C)throw Error(S(425))}function uo(){}var n1=null,r1=null;function i1(e,B){return e==="textarea"||e==="noscript"||typeof B.children=="string"||typeof B.children=="number"||typeof B.dangerouslySetInnerHTML=="object"&&B.dangerouslySetInnerHTML!==null&&B.dangerouslySetInnerHTML.__html!=null}var s1=typeof setTimeout=="function"?setTimeout:void 0,Yk=typeof clearTimeout=="function"?clearTimeout:void 0,Z2=typeof Promise=="function"?Promise:void 0,Xk=typeof queueMicrotask=="function"?queueMicrotask:typeof Z2<"u"?function(e){return Z2.resolve(null).then(e).catch(Zk)}:s1;function Zk(e){setTimeout(function(){throw e})}function Oc(e,B){var C=B,t=0;do{var n=C.nextSibling;if(e.removeChild(C),n&&n.nodeType===8)if(C=n.data,C==="/$"){if(t===0){e.removeChild(n),Si(B);return}t--}else C!=="$"&&C!=="$?"&&C!=="$!"||t++;C=n}while(C);Si(B)}function ut(e){for(;e!=null;e=e.nextSibling){var B=e.nodeType;if(B===1||B===3)break;if(B===8){if(B=e.data,B==="$"||B==="$!"||B==="$?")break;if(B==="/$")return null}}return e}function q2(e){e=e.previousSibling;for(var B=0;e;){if(e.nodeType===8){var C=e.data;if(C==="$"||C==="$!"||C==="$?"){if(B===0)return e;B--}else C==="/$"&&B++}e=e.previousSibling}return null}var Er=Math.random().toString(36).slice(2),lC="__reactFiber$"+Er,Fi="__reactProps$"+Er,MC="__reactContainer$"+Er,a1="__reactEvents$"+Er,qk="__reactListeners$"+Er,zk="__reactHandles$"+Er;function Kt(e){var B=e[lC];if(B)return B;for(var C=e.parentNode;C;){if(B=C[MC]||C[lC]){if(C=B.alternate,B.child!==null||C!==null&&C.child!==null)for(e=q2(e);e!==null;){if(C=e[lC])return C;e=q2(e)}return B}e=C,C=e.parentNode}return null}function cs(e){return e=e[lC]||e[MC],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function gl(e){return e[Fi]||null}var o1=[],Ln=-1;function Rt(e){return{current:e}}function hB(e){0>Ln||(e.current=o1[Ln],o1[Ln]=null,Ln--)}function oB(e,B){Ln++,o1[Ln]=e.current,e.current=B}var It={},ZB=Rt(It),ue=Rt(!1),en=It;function ir(e,B){var C=e.type.contextTypes;if(!C)return It;var t=e.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===B)return t.__reactInternalMemoizedMaskedChildContext;var n={},r;for(r in C)n[r]=B[r];return t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=B,e.__reactInternalMemoizedMaskedChildContext=n),n}function de(e){return e=e.childContextTypes,e!=null}function fo(){hB(ue),hB(ZB)}function z2(e,B,C){if(ZB.current!==It)throw Error(S(168));oB(ZB,B),oB(ue,C)}function Kb(e,B,C){var t=e.stateNode;if(B=B.childContextTypes,typeof t.getChildContext!="function")return C;t=t.getChildContext();for(var n in t)if(!(n in B))throw Error(S(108,MD(e)||"Unknown",n));return vB({},C,t)}function ho(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||It,en=ZB.current,oB(ZB,e),oB(ue,ue.current),!0}function _2(e,B,C){var t=e.stateNode;if(!t)throw Error(S(169));C?(e=Kb(e,B,en),t.__reactInternalMemoizedMergedChildContext=e,hB(ue),hB(ZB),oB(ZB,e)):hB(ue),oB(ue,C)}var IC=null,bl=!1,Rc=!1;function Qb(e){IC===null?IC=[e]:IC.push(e)}function _k(e){bl=!0,Qb(e)}function Ht(){if(!Rc&&IC!==null){Rc=!0;var e=0,B=CB;try{var C=IC;for(CB=1;e<C.length;e++){var t=C[e];do t=t(!0);while(t!==null)}IC=null,bl=!1}catch(n){throw IC!==null&&(IC=IC.slice(e+1)),ub(qd,Ht),n}finally{CB=B,Rc=!1}}return null}var Tn=[],Gn=0,po=null,mo=0,He=[],Me=0,Cn=null,wC=1,DC="";function Lt(e,B){Tn[Gn++]=mo,Tn[Gn++]=po,po=e,mo=B}function Jb(e,B,C){He[Me++]=wC,He[Me++]=DC,He[Me++]=Cn,Cn=e;var t=wC;e=DC;var n=32-BC(t)-1;t&=~(1<<n),C+=1;var r=32-BC(B)+n;if(30<r){var i=n-n%5;r=(t&(1<<i)-1).toString(32),t>>=i,n-=i,wC=1<<32-BC(B)+n|C<<n|t,DC=r+e}else wC=1<<r|C<<n|t,DC=e}function rf(e){e.return!==null&&(Lt(e,1),Jb(e,1,0))}function sf(e){for(;e===po;)po=Tn[--Gn],Tn[Gn]=null,mo=Tn[--Gn],Tn[Gn]=null;for(;e===Cn;)Cn=He[--Me],He[Me]=null,DC=He[--Me],He[Me]=null,wC=He[--Me],He[Me]=null}var Ie=null,Ee=null,mB=!1,Xe=null;function Ub(e,B){var C=Te(5,null,null,0);C.elementType="DELETED",C.stateNode=B,C.return=e,B=e.deletions,B===null?(e.deletions=[C],e.flags|=16):B.push(C)}function $2(e,B){switch(e.tag){case 5:var C=e.type;return B=B.nodeType!==1||C.toLowerCase()!==B.nodeName.toLowerCase()?null:B,B!==null?(e.stateNode=B,Ie=e,Ee=ut(B.firstChild),!0):!1;case 6:return B=e.pendingProps===""||B.nodeType!==3?null:B,B!==null?(e.stateNode=B,Ie=e,Ee=null,!0):!1;case 13:return B=B.nodeType!==8?null:B,B!==null?(C=Cn!==null?{id:wC,overflow:DC}:null,e.memoizedState={dehydrated:B,treeContext:C,retryLane:1073741824},C=Te(18,null,null,0),C.stateNode=B,C.return=e,e.child=C,Ie=e,Ee=null,!0):!1;default:return!1}}function l1(e){return(e.mode&1)!==0&&(e.flags&128)===0}function c1(e){if(mB){var B=Ee;if(B){var C=B;if(!$2(e,B)){if(l1(e))throw Error(S(418));B=ut(C.nextSibling);var t=Ie;B&&$2(e,B)?Ub(t,C):(e.flags=e.flags&-4097|2,mB=!1,Ie=e)}}else{if(l1(e))throw Error(S(418));e.flags=e.flags&-4097|2,mB=!1,Ie=e}}}function Bp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ie=e}function Ba(e){if(e!==Ie)return!1;if(!mB)return Bp(e),mB=!0,!1;var B;if((B=e.tag!==3)&&!(B=e.tag!==5)&&(B=e.type,B=B!=="head"&&B!=="body"&&!i1(e.type,e.memoizedProps)),B&&(B=Ee)){if(l1(e))throw Vb(),Error(S(418));for(;B;)Ub(e,B),B=ut(B.nextSibling)}if(Bp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));B:{for(e=e.nextSibling,B=0;e;){if(e.nodeType===8){var C=e.data;if(C==="/$"){if(B===0){Ee=ut(e.nextSibling);break B}B--}else C!=="$"&&C!=="$!"&&C!=="$?"||B++}e=e.nextSibling}Ee=null}}else Ee=Ie?ut(e.stateNode.nextSibling):null;return!0}function Vb(){for(var e=Ee;e;)e=ut(e.nextSibling)}function sr(){Ee=Ie=null,mB=!1}function af(e){Xe===null?Xe=[e]:Xe.push(e)}var $k=UC.ReactCurrentBatchConfig;function je(e,B){if(e&&e.defaultProps){B=vB({},B),e=e.defaultProps;for(var C in e)B[C]===void 0&&(B[C]=e[C]);return B}return B}var go=Rt(null),bo=null,xn=null,of=null;function lf(){of=xn=bo=null}function cf(e){var B=go.current;hB(go),e._currentValue=B}function u1(e,B,C){for(;e!==null;){var t=e.alternate;if((e.childLanes&B)!==B?(e.childLanes|=B,t!==null&&(t.childLanes|=B)):t!==null&&(t.childLanes&B)!==B&&(t.childLanes|=B),e===C)break;e=e.return}}function qn(e,B){bo=e,of=xn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&B&&(le=!0),e.firstContext=null)}function Ke(e){var B=e._currentValue;if(of!==e)if(e={context:e,memoizedValue:B,next:null},xn===null){if(bo===null)throw Error(S(308));xn=e,bo.dependencies={lanes:0,firstContext:e}}else xn=xn.next=e;return B}var Qt=null;function uf(e){Qt===null?Qt=[e]:Qt.push(e)}function Wb(e,B,C,t){var n=B.interleaved;return n===null?(C.next=C,uf(B)):(C.next=n.next,n.next=C),B.interleaved=C,LC(e,t)}function LC(e,B){e.lanes|=B;var C=e.alternate;for(C!==null&&(C.lanes|=B),C=e,e=e.return;e!==null;)e.childLanes|=B,C=e.alternate,C!==null&&(C.childLanes|=B),C=e,e=e.return;return C.tag===3?C.stateNode:null}var $C=!1;function df(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jb(e,B){e=e.updateQueue,B.updateQueue===e&&(B.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function NC(e,B){return{eventTime:e,lane:B,tag:0,payload:null,callback:null,next:null}}function dt(e,B,C){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,_&2){var n=t.pending;return n===null?B.next=B:(B.next=n.next,n.next=B),t.pending=B,LC(e,C)}return n=t.interleaved,n===null?(B.next=B,uf(t)):(B.next=n.next,n.next=B),t.interleaved=B,LC(e,C)}function Ka(e,B,C){if(B=B.updateQueue,B!==null&&(B=B.shared,(C&4194240)!==0)){var t=B.lanes;t&=e.pendingLanes,C|=t,B.lanes=C,zd(e,C)}}function ep(e,B){var C=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,C===t)){var n=null,r=null;if(C=C.firstBaseUpdate,C!==null){do{var i={eventTime:C.eventTime,lane:C.lane,tag:C.tag,payload:C.payload,callback:C.callback,next:null};r===null?n=r=i:r=r.next=i,C=C.next}while(C!==null);r===null?n=r=B:r=r.next=B}else n=r=B;C={baseState:t.baseState,firstBaseUpdate:n,lastBaseUpdate:r,shared:t.shared,effects:t.effects},e.updateQueue=C;return}e=C.lastBaseUpdate,e===null?C.firstBaseUpdate=B:e.next=B,C.lastBaseUpdate=B}function Ao(e,B,C,t){var n=e.updateQueue;$C=!1;var r=n.firstBaseUpdate,i=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var a=s,o=a.next;a.next=null,i===null?r=o:i.next=o,i=a;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==i&&(s===null?c.firstBaseUpdate=o:s.next=o,c.lastBaseUpdate=a))}if(r!==null){var l=n.baseState;i=0,c=o=a=null,s=r;do{var u=s.lane,m=s.eventTime;if((t&u)===u){c!==null&&(c=c.next={eventTime:m,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});B:{var d=e,h=s;switch(u=B,m=C,h.tag){case 1:if(d=h.payload,typeof d=="function"){l=d.call(m,l,u);break B}l=d;break B;case 3:d.flags=d.flags&-65537|128;case 0:if(d=h.payload,u=typeof d=="function"?d.call(m,l,u):d,u==null)break B;l=vB({},l,u);break B;case 2:$C=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,u=n.effects,u===null?n.effects=[s]:u.push(s))}else m={eventTime:m,lane:u,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(o=c=m,a=l):c=c.next=m,i|=u;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;u=s,s=u.next,u.next=null,n.lastBaseUpdate=u,n.shared.pending=null}}while(1);if(c===null&&(a=l),n.baseState=a,n.firstBaseUpdate=o,n.lastBaseUpdate=c,B=n.shared.interleaved,B!==null){n=B;do i|=n.lane,n=n.next;while(n!==B)}else r===null&&(n.shared.lanes=0);nn|=i,e.lanes=i,e.memoizedState=l}}function Cp(e,B,C){if(e=B.effects,B.effects=null,e!==null)for(B=0;B<e.length;B++){var t=e[B],n=t.callback;if(n!==null){if(t.callback=null,t=C,typeof n!="function")throw Error(S(191,n));n.call(t)}}}var Yb=new Wg.Component().refs;function d1(e,B,C,t){B=e.memoizedState,C=C(t,B),C=C==null?B:vB({},B,C),e.memoizedState=C,e.lanes===0&&(e.updateQueue.baseState=C)}var Al={isMounted:function(e){return(e=e._reactInternals)?gn(e)===e:!1},enqueueSetState:function(e,B,C){e=e._reactInternals;var t=Ce(),n=ht(e),r=NC(t,n);r.payload=B,C!=null&&(r.callback=C),B=dt(e,r,n),B!==null&&(eC(B,e,n,t),Ka(B,e,n))},enqueueReplaceState:function(e,B,C){e=e._reactInternals;var t=Ce(),n=ht(e),r=NC(t,n);r.tag=1,r.payload=B,C!=null&&(r.callback=C),B=dt(e,r,n),B!==null&&(eC(B,e,n,t),Ka(B,e,n))},enqueueForceUpdate:function(e,B){e=e._reactInternals;var C=Ce(),t=ht(e),n=NC(C,t);n.tag=2,B!=null&&(n.callback=B),B=dt(e,n,t),B!==null&&(eC(B,e,t,C),Ka(B,e,t))}};function tp(e,B,C,t,n,r,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,r,i):B.prototype&&B.prototype.isPureReactComponent?!Di(C,t)||!Di(n,r):!0}function Xb(e,B,C){var t=!1,n=It,r=B.contextType;return typeof r=="object"&&r!==null?r=Ke(r):(n=de(B)?en:ZB.current,t=B.contextTypes,r=(t=t!=null)?ir(e,n):It),B=new B(C,r),e.memoizedState=B.state!==null&&B.state!==void 0?B.state:null,B.updater=Al,e.stateNode=B,B._reactInternals=e,t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),B}function np(e,B,C,t){e=B.state,typeof B.componentWillReceiveProps=="function"&&B.componentWillReceiveProps(C,t),typeof B.UNSAFE_componentWillReceiveProps=="function"&&B.UNSAFE_componentWillReceiveProps(C,t),B.state!==e&&Al.enqueueReplaceState(B,B.state,null)}function f1(e,B,C,t){var n=e.stateNode;n.props=C,n.state=e.memoizedState,n.refs=Yb,df(e);var r=B.contextType;typeof r=="object"&&r!==null?n.context=Ke(r):(r=de(B)?en:ZB.current,n.context=ir(e,r)),n.state=e.memoizedState,r=B.getDerivedStateFromProps,typeof r=="function"&&(d1(e,B,r,C),n.state=e.memoizedState),typeof B.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(B=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),B!==n.state&&Al.enqueueReplaceState(n,n.state,null),Ao(e,C,n,t),n.state=e.memoizedState),typeof n.componentDidMount=="function"&&(e.flags|=4194308)}function Tr(e,B,C){if(e=C.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(C._owner){if(C=C._owner,C){if(C.tag!==1)throw Error(S(309));var t=C.stateNode}if(!t)throw Error(S(147,e));var n=t,r=""+e;return B!==null&&B.ref!==null&&typeof B.ref=="function"&&B.ref._stringRef===r?B.ref:(B=function(i){var s=n.refs;s===Yb&&(s=n.refs={}),i===null?delete s[r]:s[r]=i},B._stringRef=r,B)}if(typeof e!="string")throw Error(S(284));if(!C._owner)throw Error(S(290,e))}return e}function ea(e,B){throw e=Object.prototype.toString.call(B),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":e))}function rp(e){var B=e._init;return B(e._payload)}function Zb(e){function B(f,p){if(e){var b=f.deletions;b===null?(f.deletions=[p],f.flags|=16):b.push(p)}}function C(f,p){if(!e)return null;for(;p!==null;)B(f,p),p=p.sibling;return null}function t(f,p){for(f=new Map;p!==null;)p.key!==null?f.set(p.key,p):f.set(p.index,p),p=p.sibling;return f}function n(f,p){return f=pt(f,p),f.index=0,f.sibling=null,f}function r(f,p,b){return f.index=b,e?(b=f.alternate,b!==null?(b=b.index,b<p?(f.flags|=2,p):b):(f.flags|=2,p)):(f.flags|=1048576,p)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,p,b,A){return p===null||p.tag!==6?(p=Kc(b,f.mode,A),p.return=f,p):(p=n(p,b),p.return=f,p)}function a(f,p,b,A){var y=b.type;return y===Nn?c(f,p,b.props.children,A,b.key):p!==null&&(p.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===_C&&rp(y)===p.type)?(A=n(p,b.props),A.ref=Tr(f,p,b),A.return=f,A):(A=ja(b.type,b.key,b.props,null,f.mode,A),A.ref=Tr(f,p,b),A.return=f,A)}function o(f,p,b,A){return p===null||p.tag!==4||p.stateNode.containerInfo!==b.containerInfo||p.stateNode.implementation!==b.implementation?(p=Qc(b,f.mode,A),p.return=f,p):(p=n(p,b.children||[]),p.return=f,p)}function c(f,p,b,A,y){return p===null||p.tag!==7?(p=_t(b,f.mode,A,y),p.return=f,p):(p=n(p,b),p.return=f,p)}function l(f,p,b){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Kc(""+p,f.mode,b),p.return=f,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Vs:return b=ja(p.type,p.key,p.props,null,f.mode,b),b.ref=Tr(f,null,p),b.return=f,b;case Fn:return p=Qc(p,f.mode,b),p.return=f,p;case _C:var A=p._init;return l(f,A(p._payload),b)}if(zr(p)||Or(p))return p=_t(p,f.mode,b,null),p.return=f,p;ea(f,p)}return null}function u(f,p,b,A){var y=p!==null?p.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return y!==null?null:s(f,p,""+b,A);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Vs:return b.key===y?a(f,p,b,A):null;case Fn:return b.key===y?o(f,p,b,A):null;case _C:return y=b._init,u(f,p,y(b._payload),A)}if(zr(b)||Or(b))return y!==null?null:c(f,p,b,A,null);ea(f,b)}return null}function m(f,p,b,A,y){if(typeof A=="string"&&A!==""||typeof A=="number")return f=f.get(b)||null,s(p,f,""+A,y);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Vs:return f=f.get(A.key===null?b:A.key)||null,a(p,f,A,y);case Fn:return f=f.get(A.key===null?b:A.key)||null,o(p,f,A,y);case _C:var I=A._init;return m(f,p,b,I(A._payload),y)}if(zr(A)||Or(A))return f=f.get(b)||null,c(p,f,A,y,null);ea(p,A)}return null}function d(f,p,b,A){for(var y=null,I=null,E=p,v=p=0,w=null;E!==null&&v<b.length;v++){E.index>v?(w=E,E=null):w=E.sibling;var M=u(f,E,b[v],A);if(M===null){E===null&&(E=w);break}e&&E&&M.alternate===null&&B(f,E),p=r(M,p,v),I===null?y=M:I.sibling=M,I=M,E=w}if(v===b.length)return C(f,E),mB&&Lt(f,v),y;if(E===null){for(;v<b.length;v++)E=l(f,b[v],A),E!==null&&(p=r(E,p,v),I===null?y=E:I.sibling=E,I=E);return mB&&Lt(f,v),y}for(E=t(f,E);v<b.length;v++)w=m(E,f,v,b[v],A),w!==null&&(e&&w.alternate!==null&&E.delete(w.key===null?v:w.key),p=r(w,p,v),I===null?y=w:I.sibling=w,I=w);return e&&E.forEach(function(j){return B(f,j)}),mB&&Lt(f,v),y}function h(f,p,b,A){var y=Or(b);if(typeof y!="function")throw Error(S(150));if(b=y.call(b),b==null)throw Error(S(151));for(var I=y=null,E=p,v=p=0,w=null,M=b.next();E!==null&&!M.done;v++,M=b.next()){E.index>v?(w=E,E=null):w=E.sibling;var j=u(f,E,M.value,A);if(j===null){E===null&&(E=w);break}e&&E&&j.alternate===null&&B(f,E),p=r(j,p,v),I===null?y=j:I.sibling=j,I=j,E=w}if(M.done)return C(f,E),mB&&Lt(f,v),y;if(E===null){for(;!M.done;v++,M=b.next())M=l(f,M.value,A),M!==null&&(p=r(M,p,v),I===null?y=M:I.sibling=M,I=M);return mB&&Lt(f,v),y}for(E=t(f,E);!M.done;v++,M=b.next())M=m(E,f,v,M.value,A),M!==null&&(e&&M.alternate!==null&&E.delete(M.key===null?v:M.key),p=r(M,p,v),I===null?y=M:I.sibling=M,I=M);return e&&E.forEach(function(Q){return B(f,Q)}),mB&&Lt(f,v),y}function g(f,p,b,A){if(typeof b=="object"&&b!==null&&b.type===Nn&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Vs:B:{for(var y=b.key,I=p;I!==null;){if(I.key===y){if(y=b.type,y===Nn){if(I.tag===7){C(f,I.sibling),p=n(I,b.props.children),p.return=f,f=p;break B}}else if(I.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===_C&&rp(y)===I.type){C(f,I.sibling),p=n(I,b.props),p.ref=Tr(f,I,b),p.return=f,f=p;break B}C(f,I);break}else B(f,I);I=I.sibling}b.type===Nn?(p=_t(b.props.children,f.mode,A,b.key),p.return=f,f=p):(A=ja(b.type,b.key,b.props,null,f.mode,A),A.ref=Tr(f,p,b),A.return=f,f=A)}return i(f);case Fn:B:{for(I=b.key;p!==null;){if(p.key===I)if(p.tag===4&&p.stateNode.containerInfo===b.containerInfo&&p.stateNode.implementation===b.implementation){C(f,p.sibling),p=n(p,b.children||[]),p.return=f,f=p;break B}else{C(f,p);break}else B(f,p);p=p.sibling}p=Qc(b,f.mode,A),p.return=f,f=p}return i(f);case _C:return I=b._init,g(f,p,I(b._payload),A)}if(zr(b))return d(f,p,b,A);if(Or(b))return h(f,p,b,A);ea(f,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,p!==null&&p.tag===6?(C(f,p.sibling),p=n(p,b),p.return=f,f=p):(C(f,p),p=Kc(b,f.mode,A),p.return=f,f=p),i(f)):C(f,p)}return g}var ar=Zb(!0),qb=Zb(!1),us={},dC=Rt(us),Ni=Rt(us),Oi=Rt(us);function Jt(e){if(e===us)throw Error(S(174));return e}function ff(e,B){switch(oB(Oi,B),oB(Ni,e),oB(dC,us),e=B.nodeType,e){case 9:case 11:B=(B=B.documentElement)?B.namespaceURI:ju(null,"");break;default:e=e===8?B.parentNode:B,B=e.namespaceURI||null,e=e.tagName,B=ju(B,e)}hB(dC),oB(dC,B)}function or(){hB(dC),hB(Ni),hB(Oi)}function zb(e){Jt(Oi.current);var B=Jt(dC.current),C=ju(B,e.type);B!==C&&(oB(Ni,e),oB(dC,C))}function hf(e){Ni.current===e&&(hB(dC),hB(Ni))}var bB=Rt(0);function vo(e){for(var B=e;B!==null;){if(B.tag===13){var C=B.memoizedState;if(C!==null&&(C=C.dehydrated,C===null||C.data==="$?"||C.data==="$!"))return B}else if(B.tag===19&&B.memoizedProps.revealOrder!==void 0){if(B.flags&128)return B}else if(B.child!==null){B.child.return=B,B=B.child;continue}if(B===e)break;for(;B.sibling===null;){if(B.return===null||B.return===e)return null;B=B.return}B.sibling.return=B.return,B=B.sibling}return null}var Hc=[];function pf(){for(var e=0;e<Hc.length;e++)Hc[e]._workInProgressVersionPrimary=null;Hc.length=0}var Qa=UC.ReactCurrentDispatcher,Mc=UC.ReactCurrentBatchConfig,tn=0,AB=null,FB=null,TB=null,yo=!1,si=!1,Ri=0,BP=0;function WB(){throw Error(S(321))}function mf(e,B){if(B===null)return!1;for(var C=0;C<B.length&&C<e.length;C++)if(!nC(e[C],B[C]))return!1;return!0}function gf(e,B,C,t,n,r){if(tn=r,AB=B,B.memoizedState=null,B.updateQueue=null,B.lanes=0,Qa.current=e===null||e.memoizedState===null?nP:rP,e=C(t,n),si){r=0;do{if(si=!1,Ri=0,25<=r)throw Error(S(301));r+=1,TB=FB=null,B.updateQueue=null,Qa.current=iP,e=C(t,n)}while(si)}if(Qa.current=Eo,B=FB!==null&&FB.next!==null,tn=0,TB=FB=AB=null,yo=!1,B)throw Error(S(300));return e}function bf(){var e=Ri!==0;return Ri=0,e}function oC(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return TB===null?AB.memoizedState=TB=e:TB=TB.next=e,TB}function Qe(){if(FB===null){var e=AB.alternate;e=e!==null?e.memoizedState:null}else e=FB.next;var B=TB===null?AB.memoizedState:TB.next;if(B!==null)TB=B,FB=e;else{if(e===null)throw Error(S(310));FB=e,e={memoizedState:FB.memoizedState,baseState:FB.baseState,baseQueue:FB.baseQueue,queue:FB.queue,next:null},TB===null?AB.memoizedState=TB=e:TB=TB.next=e}return TB}function Hi(e,B){return typeof B=="function"?B(e):B}function Lc(e){var B=Qe(),C=B.queue;if(C===null)throw Error(S(311));C.lastRenderedReducer=e;var t=FB,n=t.baseQueue,r=C.pending;if(r!==null){if(n!==null){var i=n.next;n.next=r.next,r.next=i}t.baseQueue=n=r,C.pending=null}if(n!==null){r=n.next,t=t.baseState;var s=i=null,a=null,o=r;do{var c=o.lane;if((tn&c)===c)a!==null&&(a=a.next={lane:0,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null}),t=o.hasEagerState?o.eagerState:e(t,o.action);else{var l={lane:c,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null};a===null?(s=a=l,i=t):a=a.next=l,AB.lanes|=c,nn|=c}o=o.next}while(o!==null&&o!==r);a===null?i=t:a.next=s,nC(t,B.memoizedState)||(le=!0),B.memoizedState=t,B.baseState=i,B.baseQueue=a,C.lastRenderedState=t}if(e=C.interleaved,e!==null){n=e;do r=n.lane,AB.lanes|=r,nn|=r,n=n.next;while(n!==e)}else n===null&&(C.lanes=0);return[B.memoizedState,C.dispatch]}function Tc(e){var B=Qe(),C=B.queue;if(C===null)throw Error(S(311));C.lastRenderedReducer=e;var t=C.dispatch,n=C.pending,r=B.memoizedState;if(n!==null){C.pending=null;var i=n=n.next;do r=e(r,i.action),i=i.next;while(i!==n);nC(r,B.memoizedState)||(le=!0),B.memoizedState=r,B.baseQueue===null&&(B.baseState=r),C.lastRenderedState=r}return[r,t]}function _b(){}function $b(e,B){var C=AB,t=Qe(),n=B(),r=!nC(t.memoizedState,n);if(r&&(t.memoizedState=n,le=!0),t=t.queue,Af(CA.bind(null,C,t,e),[e]),t.getSnapshot!==B||r||TB!==null&&TB.memoizedState.tag&1){if(C.flags|=2048,Mi(9,eA.bind(null,C,t,n,B),void 0,null),KB===null)throw Error(S(349));tn&30||BA(C,B,n)}return n}function BA(e,B,C){e.flags|=16384,e={getSnapshot:B,value:C},B=AB.updateQueue,B===null?(B={lastEffect:null,stores:null},AB.updateQueue=B,B.stores=[e]):(C=B.stores,C===null?B.stores=[e]:C.push(e))}function eA(e,B,C,t){B.value=C,B.getSnapshot=t,tA(B)&&nA(e)}function CA(e,B,C){return C(function(){tA(B)&&nA(e)})}function tA(e){var B=e.getSnapshot;e=e.value;try{var C=B();return!nC(e,C)}catch{return!0}}function nA(e){var B=LC(e,1);B!==null&&eC(B,e,1,-1)}function ip(e){var B=oC();return typeof e=="function"&&(e=e()),B.memoizedState=B.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:e},B.queue=e,e=e.dispatch=tP.bind(null,AB,e),[B.memoizedState,e]}function Mi(e,B,C,t){return e={tag:e,create:B,destroy:C,deps:t,next:null},B=AB.updateQueue,B===null?(B={lastEffect:null,stores:null},AB.updateQueue=B,B.lastEffect=e.next=e):(C=B.lastEffect,C===null?B.lastEffect=e.next=e:(t=C.next,C.next=e,e.next=t,B.lastEffect=e)),e}function rA(){return Qe().memoizedState}function Ja(e,B,C,t){var n=oC();AB.flags|=e,n.memoizedState=Mi(1|B,C,void 0,t===void 0?null:t)}function vl(e,B,C,t){var n=Qe();t=t===void 0?null:t;var r=void 0;if(FB!==null){var i=FB.memoizedState;if(r=i.destroy,t!==null&&mf(t,i.deps)){n.memoizedState=Mi(B,C,r,t);return}}AB.flags|=e,n.memoizedState=Mi(1|B,C,r,t)}function sp(e,B){return Ja(8390656,8,e,B)}function Af(e,B){return vl(2048,8,e,B)}function iA(e,B){return vl(4,2,e,B)}function sA(e,B){return vl(4,4,e,B)}function aA(e,B){if(typeof B=="function")return e=e(),B(e),function(){B(null)};if(B!=null)return e=e(),B.current=e,function(){B.current=null}}function oA(e,B,C){return C=C!=null?C.concat([e]):null,vl(4,4,aA.bind(null,B,e),C)}function vf(){}function lA(e,B){var C=Qe();B=B===void 0?null:B;var t=C.memoizedState;return t!==null&&B!==null&&mf(B,t[1])?t[0]:(C.memoizedState=[e,B],e)}function cA(e,B){var C=Qe();B=B===void 0?null:B;var t=C.memoizedState;return t!==null&&B!==null&&mf(B,t[1])?t[0]:(e=e(),C.memoizedState=[e,B],e)}function uA(e,B,C){return tn&21?(nC(C,B)||(C=hb(),AB.lanes|=C,nn|=C,e.baseState=!0),B):(e.baseState&&(e.baseState=!1,le=!0),e.memoizedState=C)}function eP(e,B){var C=CB;CB=C!==0&&4>C?C:4,e(!0);var t=Mc.transition;Mc.transition={};try{e(!1),B()}finally{CB=C,Mc.transition=t}}function dA(){return Qe().memoizedState}function CP(e,B,C){var t=ht(e);if(C={lane:t,action:C,hasEagerState:!1,eagerState:null,next:null},fA(e))hA(B,C);else if(C=Wb(e,B,C,t),C!==null){var n=Ce();eC(C,e,t,n),pA(C,B,t)}}function tP(e,B,C){var t=ht(e),n={lane:t,action:C,hasEagerState:!1,eagerState:null,next:null};if(fA(e))hA(B,n);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=B.lastRenderedReducer,r!==null))try{var i=B.lastRenderedState,s=r(i,C);if(n.hasEagerState=!0,n.eagerState=s,nC(s,i)){var a=B.interleaved;a===null?(n.next=n,uf(B)):(n.next=a.next,a.next=n),B.interleaved=n;return}}catch{}finally{}C=Wb(e,B,n,t),C!==null&&(n=Ce(),eC(C,e,t,n),pA(C,B,t))}}function fA(e){var B=e.alternate;return e===AB||B!==null&&B===AB}function hA(e,B){si=yo=!0;var C=e.pending;C===null?B.next=B:(B.next=C.next,C.next=B),e.pending=B}function pA(e,B,C){if(C&4194240){var t=B.lanes;t&=e.pendingLanes,C|=t,B.lanes=C,zd(e,C)}}var Eo={readContext:Ke,useCallback:WB,useContext:WB,useEffect:WB,useImperativeHandle:WB,useInsertionEffect:WB,useLayoutEffect:WB,useMemo:WB,useReducer:WB,useRef:WB,useState:WB,useDebugValue:WB,useDeferredValue:WB,useTransition:WB,useMutableSource:WB,useSyncExternalStore:WB,useId:WB,unstable_isNewReconciler:!1},nP={readContext:Ke,useCallback:function(e,B){return oC().memoizedState=[e,B===void 0?null:B],e},useContext:Ke,useEffect:sp,useImperativeHandle:function(e,B,C){return C=C!=null?C.concat([e]):null,Ja(4194308,4,aA.bind(null,B,e),C)},useLayoutEffect:function(e,B){return Ja(4194308,4,e,B)},useInsertionEffect:function(e,B){return Ja(4,2,e,B)},useMemo:function(e,B){var C=oC();return B=B===void 0?null:B,e=e(),C.memoizedState=[e,B],e},useReducer:function(e,B,C){var t=oC();return B=C!==void 0?C(B):B,t.memoizedState=t.baseState=B,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:B},t.queue=e,e=e.dispatch=CP.bind(null,AB,e),[t.memoizedState,e]},useRef:function(e){var B=oC();return e={current:e},B.memoizedState=e},useState:ip,useDebugValue:vf,useDeferredValue:function(e){return oC().memoizedState=e},useTransition:function(){var e=ip(!1),B=e[0];return e=eP.bind(null,e[1]),oC().memoizedState=e,[B,e]},useMutableSource:function(){},useSyncExternalStore:function(e,B,C){var t=AB,n=oC();if(mB){if(C===void 0)throw Error(S(407));C=C()}else{if(C=B(),KB===null)throw Error(S(349));tn&30||BA(t,B,C)}n.memoizedState=C;var r={value:C,getSnapshot:B};return n.queue=r,sp(CA.bind(null,t,r,e),[e]),t.flags|=2048,Mi(9,eA.bind(null,t,r,C,B),void 0,null),C},useId:function(){var e=oC(),B=KB.identifierPrefix;if(mB){var C=DC,t=wC;C=(t&~(1<<32-BC(t)-1)).toString(32)+C,B=":"+B+"R"+C,C=Ri++,0<C&&(B+="H"+C.toString(32)),B+=":"}else C=BP++,B=":"+B+"r"+C.toString(32)+":";return e.memoizedState=B},unstable_isNewReconciler:!1},rP={readContext:Ke,useCallback:lA,useContext:Ke,useEffect:Af,useImperativeHandle:oA,useInsertionEffect:iA,useLayoutEffect:sA,useMemo:cA,useReducer:Lc,useRef:rA,useState:function(){return Lc(Hi)},useDebugValue:vf,useDeferredValue:function(e){var B=Qe();return uA(B,FB.memoizedState,e)},useTransition:function(){var e=Lc(Hi)[0],B=Qe().memoizedState;return[e,B]},useMutableSource:_b,useSyncExternalStore:$b,useId:dA,unstable_isNewReconciler:!1},iP={readContext:Ke,useCallback:lA,useContext:Ke,useEffect:Af,useImperativeHandle:oA,useInsertionEffect:iA,useLayoutEffect:sA,useMemo:cA,useReducer:Tc,useRef:rA,useState:function(){return Tc(Hi)},useDebugValue:vf,useDeferredValue:function(e){var B=Qe();return FB===null?B.memoizedState=e:uA(B,FB.memoizedState,e)},useTransition:function(){var e=Tc(Hi)[0],B=Qe().memoizedState;return[e,B]},useMutableSource:_b,useSyncExternalStore:$b,useId:dA,unstable_isNewReconciler:!1};function lr(e,B){try{var C="",t=B;do C+=HD(t),t=t.return;while(t);var n=C}catch(r){n=`
Error generating stack: `+r.message+`
`+r.stack}return{value:e,source:B,stack:n,digest:null}}function Gc(e,B,C){return{value:e,source:null,stack:C??null,digest:B??null}}function h1(e,B){try{console.error(B.value)}catch(C){setTimeout(function(){throw C})}}var sP=typeof WeakMap=="function"?WeakMap:Map;function mA(e,B,C){C=NC(-1,C),C.tag=3,C.payload={element:null};var t=B.value;return C.callback=function(){So||(So=!0,I1=t),h1(e,B)},C}function gA(e,B,C){C=NC(-1,C),C.tag=3;var t=e.type.getDerivedStateFromError;if(typeof t=="function"){var n=B.value;C.payload=function(){return t(n)},C.callback=function(){h1(e,B)}}var r=e.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(C.callback=function(){h1(e,B),typeof t!="function"&&(ft===null?ft=new Set([this]):ft.add(this));var i=B.stack;this.componentDidCatch(B.value,{componentStack:i!==null?i:""})}),C}function ap(e,B,C){var t=e.pingCache;if(t===null){t=e.pingCache=new sP;var n=new Set;t.set(B,n)}else n=t.get(B),n===void 0&&(n=new Set,t.set(B,n));n.has(C)||(n.add(C),e=vP.bind(null,e,B,C),B.then(e,e))}function op(e){do{var B;if((B=e.tag===13)&&(B=e.memoizedState,B=B!==null?B.dehydrated!==null:!0),B)return e;e=e.return}while(e!==null);return null}function lp(e,B,C,t,n){return e.mode&1?(e.flags|=65536,e.lanes=n,e):(e===B?e.flags|=65536:(e.flags|=128,C.flags|=131072,C.flags&=-52805,C.tag===1&&(C.alternate===null?C.tag=17:(B=NC(-1,1),B.tag=2,dt(C,B,1))),C.lanes|=1),e)}var aP=UC.ReactCurrentOwner,le=!1;function $B(e,B,C,t){B.child=e===null?qb(B,null,C,t):ar(B,e.child,C,t)}function cp(e,B,C,t,n){C=C.render;var r=B.ref;return qn(B,n),t=gf(e,B,C,t,r,n),C=bf(),e!==null&&!le?(B.updateQueue=e.updateQueue,B.flags&=-2053,e.lanes&=~n,TC(e,B,n)):(mB&&C&&rf(B),B.flags|=1,$B(e,B,t,n),B.child)}function up(e,B,C,t,n){if(e===null){var r=C.type;return typeof r=="function"&&!Pf(r)&&r.defaultProps===void 0&&C.compare===null&&C.defaultProps===void 0?(B.tag=15,B.type=r,bA(e,B,r,t,n)):(e=ja(C.type,null,t,B,B.mode,n),e.ref=B.ref,e.return=B,B.child=e)}if(r=e.child,!(e.lanes&n)){var i=r.memoizedProps;if(C=C.compare,C=C!==null?C:Di,C(i,t)&&e.ref===B.ref)return TC(e,B,n)}return B.flags|=1,e=pt(r,t),e.ref=B.ref,e.return=B,B.child=e}function bA(e,B,C,t,n){if(e!==null){var r=e.memoizedProps;if(Di(r,t)&&e.ref===B.ref)if(le=!1,B.pendingProps=t=r,(e.lanes&n)!==0)e.flags&131072&&(le=!0);else return B.lanes=e.lanes,TC(e,B,n)}return p1(e,B,C,t,n)}function AA(e,B,C){var t=B.pendingProps,n=t.children,r=e!==null?e.memoizedState:null;if(t.mode==="hidden")if(!(B.mode&1))B.memoizedState={baseLanes:0,cachePool:null,transitions:null},oB(Qn,ye),ye|=C;else{if(!(C&1073741824))return e=r!==null?r.baseLanes|C:C,B.lanes=B.childLanes=1073741824,B.memoizedState={baseLanes:e,cachePool:null,transitions:null},B.updateQueue=null,oB(Qn,ye),ye|=e,null;B.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=r!==null?r.baseLanes:C,oB(Qn,ye),ye|=t}else r!==null?(t=r.baseLanes|C,B.memoizedState=null):t=C,oB(Qn,ye),ye|=t;return $B(e,B,n,C),B.child}function vA(e,B){var C=B.ref;(e===null&&C!==null||e!==null&&e.ref!==C)&&(B.flags|=512,B.flags|=2097152)}function p1(e,B,C,t,n){var r=de(C)?en:ZB.current;return r=ir(B,r),qn(B,n),C=gf(e,B,C,t,r,n),t=bf(),e!==null&&!le?(B.updateQueue=e.updateQueue,B.flags&=-2053,e.lanes&=~n,TC(e,B,n)):(mB&&t&&rf(B),B.flags|=1,$B(e,B,C,n),B.child)}function dp(e,B,C,t,n){if(de(C)){var r=!0;ho(B)}else r=!1;if(qn(B,n),B.stateNode===null)Ua(e,B),Xb(B,C,t),f1(B,C,t,n),t=!0;else if(e===null){var i=B.stateNode,s=B.memoizedProps;i.props=s;var a=i.context,o=C.contextType;typeof o=="object"&&o!==null?o=Ke(o):(o=de(C)?en:ZB.current,o=ir(B,o));var c=C.getDerivedStateFromProps,l=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function";l||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==t||a!==o)&&np(B,i,t,o),$C=!1;var u=B.memoizedState;i.state=u,Ao(B,t,i,n),a=B.memoizedState,s!==t||u!==a||ue.current||$C?(typeof c=="function"&&(d1(B,C,c,t),a=B.memoizedState),(s=$C||tp(B,C,s,t,u,a,o))?(l||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(B.flags|=4194308)):(typeof i.componentDidMount=="function"&&(B.flags|=4194308),B.memoizedProps=t,B.memoizedState=a),i.props=t,i.state=a,i.context=o,t=s):(typeof i.componentDidMount=="function"&&(B.flags|=4194308),t=!1)}else{i=B.stateNode,jb(e,B),s=B.memoizedProps,o=B.type===B.elementType?s:je(B.type,s),i.props=o,l=B.pendingProps,u=i.context,a=C.contextType,typeof a=="object"&&a!==null?a=Ke(a):(a=de(C)?en:ZB.current,a=ir(B,a));var m=C.getDerivedStateFromProps;(c=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==l||u!==a)&&np(B,i,t,a),$C=!1,u=B.memoizedState,i.state=u,Ao(B,t,i,n);var d=B.memoizedState;s!==l||u!==d||ue.current||$C?(typeof m=="function"&&(d1(B,C,m,t),d=B.memoizedState),(o=$C||tp(B,C,o,t,u,d,a)||!1)?(c||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(t,d,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(t,d,a)),typeof i.componentDidUpdate=="function"&&(B.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(B.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(B.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(B.flags|=1024),B.memoizedProps=t,B.memoizedState=d),i.props=t,i.state=d,i.context=a,t=o):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(B.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(B.flags|=1024),t=!1)}return m1(e,B,C,t,r,n)}function m1(e,B,C,t,n,r){vA(e,B);var i=(B.flags&128)!==0;if(!t&&!i)return n&&_2(B,C,!1),TC(e,B,r);t=B.stateNode,aP.current=B;var s=i&&typeof C.getDerivedStateFromError!="function"?null:t.render();return B.flags|=1,e!==null&&i?(B.child=ar(B,e.child,null,r),B.child=ar(B,null,s,r)):$B(e,B,s,r),B.memoizedState=t.state,n&&_2(B,C,!0),B.child}function yA(e){var B=e.stateNode;B.pendingContext?z2(e,B.pendingContext,B.pendingContext!==B.context):B.context&&z2(e,B.context,!1),ff(e,B.containerInfo)}function fp(e,B,C,t,n){return sr(),af(n),B.flags|=256,$B(e,B,C,t),B.child}var g1={dehydrated:null,treeContext:null,retryLane:0};function b1(e){return{baseLanes:e,cachePool:null,transitions:null}}function EA(e,B,C){var t=B.pendingProps,n=bB.current,r=!1,i=(B.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(n&2)!==0),s?(r=!0,B.flags&=-129):(e===null||e.memoizedState!==null)&&(n|=1),oB(bB,n&1),e===null)return c1(B),e=B.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(B.mode&1?e.data==="$!"?B.lanes=8:B.lanes=1073741824:B.lanes=1,null):(i=t.children,e=t.fallback,r?(t=B.mode,r=B.child,i={mode:"hidden",children:i},!(t&1)&&r!==null?(r.childLanes=0,r.pendingProps=i):r=Il(i,t,0,null),e=_t(e,t,C,null),r.return=B,e.return=B,r.sibling=e,B.child=r,B.child.memoizedState=b1(C),B.memoizedState=g1,e):yf(B,i));if(n=e.memoizedState,n!==null&&(s=n.dehydrated,s!==null))return oP(e,B,i,t,s,n,C);if(r){r=t.fallback,i=B.mode,n=e.child,s=n.sibling;var a={mode:"hidden",children:t.children};return!(i&1)&&B.child!==n?(t=B.child,t.childLanes=0,t.pendingProps=a,B.deletions=null):(t=pt(n,a),t.subtreeFlags=n.subtreeFlags&14680064),s!==null?r=pt(s,r):(r=_t(r,i,C,null),r.flags|=2),r.return=B,t.return=B,t.sibling=r,B.child=t,t=r,r=B.child,i=e.child.memoizedState,i=i===null?b1(C):{baseLanes:i.baseLanes|C,cachePool:null,transitions:i.transitions},r.memoizedState=i,r.childLanes=e.childLanes&~C,B.memoizedState=g1,t}return r=e.child,e=r.sibling,t=pt(r,{mode:"visible",children:t.children}),!(B.mode&1)&&(t.lanes=C),t.return=B,t.sibling=null,e!==null&&(C=B.deletions,C===null?(B.deletions=[e],B.flags|=16):C.push(e)),B.child=t,B.memoizedState=null,t}function yf(e,B){return B=Il({mode:"visible",children:B},e.mode,0,null),B.return=e,e.child=B}function Ca(e,B,C,t){return t!==null&&af(t),ar(B,e.child,null,C),e=yf(B,B.pendingProps.children),e.flags|=2,B.memoizedState=null,e}function oP(e,B,C,t,n,r,i){if(C)return B.flags&256?(B.flags&=-257,t=Gc(Error(S(422))),Ca(e,B,i,t)):B.memoizedState!==null?(B.child=e.child,B.flags|=128,null):(r=t.fallback,n=B.mode,t=Il({mode:"visible",children:t.children},n,0,null),r=_t(r,n,i,null),r.flags|=2,t.return=B,r.return=B,t.sibling=r,B.child=t,B.mode&1&&ar(B,e.child,null,i),B.child.memoizedState=b1(i),B.memoizedState=g1,r);if(!(B.mode&1))return Ca(e,B,i,null);if(n.data==="$!"){if(t=n.nextSibling&&n.nextSibling.dataset,t)var s=t.dgst;return t=s,r=Error(S(419)),t=Gc(r,t,void 0),Ca(e,B,i,t)}if(s=(i&e.childLanes)!==0,le||s){if(t=KB,t!==null){switch(i&-i){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:n=0}n=n&(t.suspendedLanes|i)?0:n,n!==0&&n!==r.retryLane&&(r.retryLane=n,LC(e,n),eC(t,e,n,-1))}return kf(),t=Gc(Error(S(421))),Ca(e,B,i,t)}return n.data==="$?"?(B.flags|=128,B.child=e.child,B=yP.bind(null,e),n._reactRetry=B,null):(e=r.treeContext,Ee=ut(n.nextSibling),Ie=B,mB=!0,Xe=null,e!==null&&(He[Me++]=wC,He[Me++]=DC,He[Me++]=Cn,wC=e.id,DC=e.overflow,Cn=B),B=yf(B,t.children),B.flags|=4096,B)}function hp(e,B,C){e.lanes|=B;var t=e.alternate;t!==null&&(t.lanes|=B),u1(e.return,B,C)}function xc(e,B,C,t,n){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:B,rendering:null,renderingStartTime:0,last:t,tail:C,tailMode:n}:(r.isBackwards=B,r.rendering=null,r.renderingStartTime=0,r.last=t,r.tail=C,r.tailMode=n)}function IA(e,B,C){var t=B.pendingProps,n=t.revealOrder,r=t.tail;if($B(e,B,t.children,C),t=bB.current,t&2)t=t&1|2,B.flags|=128;else{if(e!==null&&e.flags&128)B:for(e=B.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hp(e,C,B);else if(e.tag===19)hp(e,C,B);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===B)break B;for(;e.sibling===null;){if(e.return===null||e.return===B)break B;e=e.return}e.sibling.return=e.return,e=e.sibling}t&=1}if(oB(bB,t),!(B.mode&1))B.memoizedState=null;else switch(n){case"forwards":for(C=B.child,n=null;C!==null;)e=C.alternate,e!==null&&vo(e)===null&&(n=C),C=C.sibling;C=n,C===null?(n=B.child,B.child=null):(n=C.sibling,C.sibling=null),xc(B,!1,n,C,r);break;case"backwards":for(C=null,n=B.child,B.child=null;n!==null;){if(e=n.alternate,e!==null&&vo(e)===null){B.child=n;break}e=n.sibling,n.sibling=C,C=n,n=e}xc(B,!0,C,null,r);break;case"together":xc(B,!1,null,null,void 0);break;default:B.memoizedState=null}return B.child}function Ua(e,B){!(B.mode&1)&&e!==null&&(e.alternate=null,B.alternate=null,B.flags|=2)}function TC(e,B,C){if(e!==null&&(B.dependencies=e.dependencies),nn|=B.lanes,!(C&B.childLanes))return null;if(e!==null&&B.child!==e.child)throw Error(S(153));if(B.child!==null){for(e=B.child,C=pt(e,e.pendingProps),B.child=C,C.return=B;e.sibling!==null;)e=e.sibling,C=C.sibling=pt(e,e.pendingProps),C.return=B;C.sibling=null}return B.child}function lP(e,B,C){switch(B.tag){case 3:yA(B),sr();break;case 5:zb(B);break;case 1:de(B.type)&&ho(B);break;case 4:ff(B,B.stateNode.containerInfo);break;case 10:var t=B.type._context,n=B.memoizedProps.value;oB(go,t._currentValue),t._currentValue=n;break;case 13:if(t=B.memoizedState,t!==null)return t.dehydrated!==null?(oB(bB,bB.current&1),B.flags|=128,null):C&B.child.childLanes?EA(e,B,C):(oB(bB,bB.current&1),e=TC(e,B,C),e!==null?e.sibling:null);oB(bB,bB.current&1);break;case 19:if(t=(C&B.childLanes)!==0,e.flags&128){if(t)return IA(e,B,C);B.flags|=128}if(n=B.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),oB(bB,bB.current),t)break;return null;case 22:case 23:return B.lanes=0,AA(e,B,C)}return TC(e,B,C)}var SA,A1,wA,DA;SA=function(e,B){for(var C=B.child;C!==null;){if(C.tag===5||C.tag===6)e.appendChild(C.stateNode);else if(C.tag!==4&&C.child!==null){C.child.return=C,C=C.child;continue}if(C===B)break;for(;C.sibling===null;){if(C.return===null||C.return===B)return;C=C.return}C.sibling.return=C.return,C=C.sibling}};A1=function(){};wA=function(e,B,C,t){var n=e.memoizedProps;if(n!==t){e=B.stateNode,Jt(dC.current);var r=null;switch(C){case"input":n=Ju(e,n),t=Ju(e,t),r=[];break;case"select":n=vB({},n,{value:void 0}),t=vB({},t,{value:void 0}),r=[];break;case"textarea":n=Wu(e,n),t=Wu(e,t),r=[];break;default:typeof n.onClick!="function"&&typeof t.onClick=="function"&&(e.onclick=uo)}Yu(C,t);var i;C=null;for(o in n)if(!t.hasOwnProperty(o)&&n.hasOwnProperty(o)&&n[o]!=null)if(o==="style"){var s=n[o];for(i in s)s.hasOwnProperty(i)&&(C||(C={}),C[i]="")}else o!=="dangerouslySetInnerHTML"&&o!=="children"&&o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ai.hasOwnProperty(o)?r||(r=[]):(r=r||[]).push(o,null));for(o in t){var a=t[o];if(s=n!=null?n[o]:void 0,t.hasOwnProperty(o)&&a!==s&&(a!=null||s!=null))if(o==="style")if(s){for(i in s)!s.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(C||(C={}),C[i]="");for(i in a)a.hasOwnProperty(i)&&s[i]!==a[i]&&(C||(C={}),C[i]=a[i])}else C||(r||(r=[]),r.push(o,C)),C=a;else o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(r=r||[]).push(o,a)):o==="children"?typeof a!="string"&&typeof a!="number"||(r=r||[]).push(o,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&(Ai.hasOwnProperty(o)?(a!=null&&o==="onScroll"&&uB("scroll",e),r||s===a||(r=[])):(r=r||[]).push(o,a))}C&&(r=r||[]).push("style",C);var o=r;(B.updateQueue=o)&&(B.flags|=4)}};DA=function(e,B,C,t){C!==t&&(B.flags|=4)};function Gr(e,B){if(!mB)switch(e.tailMode){case"hidden":B=e.tail;for(var C=null;B!==null;)B.alternate!==null&&(C=B),B=B.sibling;C===null?e.tail=null:C.sibling=null;break;case"collapsed":C=e.tail;for(var t=null;C!==null;)C.alternate!==null&&(t=C),C=C.sibling;t===null?B||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function jB(e){var B=e.alternate!==null&&e.alternate.child===e.child,C=0,t=0;if(B)for(var n=e.child;n!==null;)C|=n.lanes|n.childLanes,t|=n.subtreeFlags&14680064,t|=n.flags&14680064,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)C|=n.lanes|n.childLanes,t|=n.subtreeFlags,t|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=t,e.childLanes=C,B}function cP(e,B,C){var t=B.pendingProps;switch(sf(B),B.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jB(B),null;case 1:return de(B.type)&&fo(),jB(B),null;case 3:return t=B.stateNode,or(),hB(ue),hB(ZB),pf(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Ba(B)?B.flags|=4:e===null||e.memoizedState.isDehydrated&&!(B.flags&256)||(B.flags|=1024,Xe!==null&&(D1(Xe),Xe=null))),A1(e,B),jB(B),null;case 5:hf(B);var n=Jt(Oi.current);if(C=B.type,e!==null&&B.stateNode!=null)wA(e,B,C,t,n),e.ref!==B.ref&&(B.flags|=512,B.flags|=2097152);else{if(!t){if(B.stateNode===null)throw Error(S(166));return jB(B),null}if(e=Jt(dC.current),Ba(B)){t=B.stateNode,C=B.type;var r=B.memoizedProps;switch(t[lC]=B,t[Fi]=r,e=(B.mode&1)!==0,C){case"dialog":uB("cancel",t),uB("close",t);break;case"iframe":case"object":case"embed":uB("load",t);break;case"video":case"audio":for(n=0;n<$r.length;n++)uB($r[n],t);break;case"source":uB("error",t);break;case"img":case"image":case"link":uB("error",t),uB("load",t);break;case"details":uB("toggle",t);break;case"input":I2(t,r),uB("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!r.multiple},uB("invalid",t);break;case"textarea":w2(t,r),uB("invalid",t)}Yu(C,r),n=null;for(var i in r)if(r.hasOwnProperty(i)){var s=r[i];i==="children"?typeof s=="string"?t.textContent!==s&&(r.suppressHydrationWarning!==!0&&$s(t.textContent,s,e),n=["children",s]):typeof s=="number"&&t.textContent!==""+s&&(r.suppressHydrationWarning!==!0&&$s(t.textContent,s,e),n=["children",""+s]):Ai.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&uB("scroll",t)}switch(C){case"input":Ws(t),S2(t,r,!0);break;case"textarea":Ws(t),D2(t);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(t.onclick=uo)}t=n,B.updateQueue=t,t!==null&&(B.flags|=4)}else{i=n.nodeType===9?n:n.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bb(C)),e==="http://www.w3.org/1999/xhtml"?C==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof t.is=="string"?e=i.createElement(C,{is:t.is}):(e=i.createElement(C),C==="select"&&(i=e,t.multiple?i.multiple=!0:t.size&&(i.size=t.size))):e=i.createElementNS(e,C),e[lC]=B,e[Fi]=t,SA(e,B,!1,!1),B.stateNode=e;B:{switch(i=Xu(C,t),C){case"dialog":uB("cancel",e),uB("close",e),n=t;break;case"iframe":case"object":case"embed":uB("load",e),n=t;break;case"video":case"audio":for(n=0;n<$r.length;n++)uB($r[n],e);n=t;break;case"source":uB("error",e),n=t;break;case"img":case"image":case"link":uB("error",e),uB("load",e),n=t;break;case"details":uB("toggle",e),n=t;break;case"input":I2(e,t),n=Ju(e,t),uB("invalid",e);break;case"option":n=t;break;case"select":e._wrapperState={wasMultiple:!!t.multiple},n=vB({},t,{value:void 0}),uB("invalid",e);break;case"textarea":w2(e,t),n=Wu(e,t),uB("invalid",e);break;default:n=t}Yu(C,n),s=n;for(r in s)if(s.hasOwnProperty(r)){var a=s[r];r==="style"?tb(e,a):r==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&eb(e,a)):r==="children"?typeof a=="string"?(C!=="textarea"||a!=="")&&vi(e,a):typeof a=="number"&&vi(e,""+a):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(Ai.hasOwnProperty(r)?a!=null&&r==="onScroll"&&uB("scroll",e):a!=null&&Wd(e,r,a,i))}switch(C){case"input":Ws(e),S2(e,t,!1);break;case"textarea":Ws(e),D2(e);break;case"option":t.value!=null&&e.setAttribute("value",""+Et(t.value));break;case"select":e.multiple=!!t.multiple,r=t.value,r!=null?jn(e,!!t.multiple,r,!1):t.defaultValue!=null&&jn(e,!!t.multiple,t.defaultValue,!0);break;default:typeof n.onClick=="function"&&(e.onclick=uo)}switch(C){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break B;case"img":t=!0;break B;default:t=!1}}t&&(B.flags|=4)}B.ref!==null&&(B.flags|=512,B.flags|=2097152)}return jB(B),null;case 6:if(e&&B.stateNode!=null)DA(e,B,e.memoizedProps,t);else{if(typeof t!="string"&&B.stateNode===null)throw Error(S(166));if(C=Jt(Oi.current),Jt(dC.current),Ba(B)){if(t=B.stateNode,C=B.memoizedProps,t[lC]=B,(r=t.nodeValue!==C)&&(e=Ie,e!==null))switch(e.tag){case 3:$s(t.nodeValue,C,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&$s(t.nodeValue,C,(e.mode&1)!==0)}r&&(B.flags|=4)}else t=(C.nodeType===9?C:C.ownerDocument).createTextNode(t),t[lC]=B,B.stateNode=t}return jB(B),null;case 13:if(hB(bB),t=B.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(mB&&Ee!==null&&B.mode&1&&!(B.flags&128))Vb(),sr(),B.flags|=98560,r=!1;else if(r=Ba(B),t!==null&&t.dehydrated!==null){if(e===null){if(!r)throw Error(S(318));if(r=B.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(S(317));r[lC]=B}else sr(),!(B.flags&128)&&(B.memoizedState=null),B.flags|=4;jB(B),r=!1}else Xe!==null&&(D1(Xe),Xe=null),r=!0;if(!r)return B.flags&65536?B:null}return B.flags&128?(B.lanes=C,B):(t=t!==null,t!==(e!==null&&e.memoizedState!==null)&&t&&(B.child.flags|=8192,B.mode&1&&(e===null||bB.current&1?RB===0&&(RB=3):kf())),B.updateQueue!==null&&(B.flags|=4),jB(B),null);case 4:return or(),A1(e,B),e===null&&ki(B.stateNode.containerInfo),jB(B),null;case 10:return cf(B.type._context),jB(B),null;case 17:return de(B.type)&&fo(),jB(B),null;case 19:if(hB(bB),r=B.memoizedState,r===null)return jB(B),null;if(t=(B.flags&128)!==0,i=r.rendering,i===null)if(t)Gr(r,!1);else{if(RB!==0||e!==null&&e.flags&128)for(e=B.child;e!==null;){if(i=vo(e),i!==null){for(B.flags|=128,Gr(r,!1),t=i.updateQueue,t!==null&&(B.updateQueue=t,B.flags|=4),B.subtreeFlags=0,t=C,C=B.child;C!==null;)r=C,e=t,r.flags&=14680066,i=r.alternate,i===null?(r.childLanes=0,r.lanes=e,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=i.childLanes,r.lanes=i.lanes,r.child=i.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=i.memoizedProps,r.memoizedState=i.memoizedState,r.updateQueue=i.updateQueue,r.type=i.type,e=i.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),C=C.sibling;return oB(bB,bB.current&1|2),B.child}e=e.sibling}r.tail!==null&&DB()>cr&&(B.flags|=128,t=!0,Gr(r,!1),B.lanes=4194304)}else{if(!t)if(e=vo(i),e!==null){if(B.flags|=128,t=!0,C=e.updateQueue,C!==null&&(B.updateQueue=C,B.flags|=4),Gr(r,!0),r.tail===null&&r.tailMode==="hidden"&&!i.alternate&&!mB)return jB(B),null}else 2*DB()-r.renderingStartTime>cr&&C!==1073741824&&(B.flags|=128,t=!0,Gr(r,!1),B.lanes=4194304);r.isBackwards?(i.sibling=B.child,B.child=i):(C=r.last,C!==null?C.sibling=i:B.child=i,r.last=i)}return r.tail!==null?(B=r.tail,r.rendering=B,r.tail=B.sibling,r.renderingStartTime=DB(),B.sibling=null,C=bB.current,oB(bB,t?C&1|2:C&1),B):(jB(B),null);case 22:case 23:return Df(),t=B.memoizedState!==null,e!==null&&e.memoizedState!==null!==t&&(B.flags|=8192),t&&B.mode&1?ye&1073741824&&(jB(B),B.subtreeFlags&6&&(B.flags|=8192)):jB(B),null;case 24:return null;case 25:return null}throw Error(S(156,B.tag))}function uP(e,B){switch(sf(B),B.tag){case 1:return de(B.type)&&fo(),e=B.flags,e&65536?(B.flags=e&-65537|128,B):null;case 3:return or(),hB(ue),hB(ZB),pf(),e=B.flags,e&65536&&!(e&128)?(B.flags=e&-65537|128,B):null;case 5:return hf(B),null;case 13:if(hB(bB),e=B.memoizedState,e!==null&&e.dehydrated!==null){if(B.alternate===null)throw Error(S(340));sr()}return e=B.flags,e&65536?(B.flags=e&-65537|128,B):null;case 19:return hB(bB),null;case 4:return or(),null;case 10:return cf(B.type._context),null;case 22:case 23:return Df(),null;case 24:return null;default:return null}}var ta=!1,YB=!1,dP=typeof WeakSet=="function"?WeakSet:Set,H=null;function Kn(e,B){var C=e.ref;if(C!==null)if(typeof C=="function")try{C(null)}catch(t){EB(e,B,t)}else C.current=null}function kA(e,B,C){try{C()}catch(t){EB(e,B,t)}}var pp=!1;function fP(e,B){if(n1=oo,e=Nb(),nf(e)){if("selectionStart"in e)var C={start:e.selectionStart,end:e.selectionEnd};else B:{C=(C=e.ownerDocument)&&C.defaultView||window;var t=C.getSelection&&C.getSelection();if(t&&t.rangeCount!==0){C=t.anchorNode;var n=t.anchorOffset,r=t.focusNode;t=t.focusOffset;try{C.nodeType,r.nodeType}catch{C=null;break B}var i=0,s=-1,a=-1,o=0,c=0,l=e,u=null;e:for(;;){for(var m;l!==C||n!==0&&l.nodeType!==3||(s=i+n),l!==r||t!==0&&l.nodeType!==3||(a=i+t),l.nodeType===3&&(i+=l.nodeValue.length),(m=l.firstChild)!==null;)u=l,l=m;for(;;){if(l===e)break e;if(u===C&&++o===n&&(s=i),u===r&&++c===t&&(a=i),(m=l.nextSibling)!==null)break;l=u,u=l.parentNode}l=m}C=s===-1||a===-1?null:{start:s,end:a}}else C=null}C=C||{start:0,end:0}}else C=null;for(r1={focusedElem:e,selectionRange:C},oo=!1,H=B;H!==null;)if(B=H,e=B.child,(B.subtreeFlags&1028)!==0&&e!==null)e.return=B,H=e;else for(;H!==null;){B=H;try{var d=B.alternate;if(B.flags&1024)switch(B.tag){case 0:case 11:case 15:break;case 1:if(d!==null){var h=d.memoizedProps,g=d.memoizedState,f=B.stateNode,p=f.getSnapshotBeforeUpdate(B.elementType===B.type?h:je(B.type,h),g);f.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var b=B.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(A){EB(B,B.return,A)}if(e=B.sibling,e!==null){e.return=B.return,H=e;break}H=B.return}return d=pp,pp=!1,d}function ai(e,B,C){var t=B.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.destroy;n.destroy=void 0,r!==void 0&&kA(B,C,r)}n=n.next}while(n!==t)}}function yl(e,B){if(B=B.updateQueue,B=B!==null?B.lastEffect:null,B!==null){var C=B=B.next;do{if((C.tag&e)===e){var t=C.create;C.destroy=t()}C=C.next}while(C!==B)}}function v1(e){var B=e.ref;if(B!==null){var C=e.stateNode;switch(e.tag){case 5:e=C;break;default:e=C}typeof B=="function"?B(e):B.current=e}}function PA(e){var B=e.alternate;B!==null&&(e.alternate=null,PA(B)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(B=e.stateNode,B!==null&&(delete B[lC],delete B[Fi],delete B[a1],delete B[qk],delete B[zk])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function FA(e){return e.tag===5||e.tag===3||e.tag===4}function mp(e){B:for(;;){for(;e.sibling===null;){if(e.return===null||FA(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue B;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function y1(e,B,C){var t=e.tag;if(t===5||t===6)e=e.stateNode,B?C.nodeType===8?C.parentNode.insertBefore(e,B):C.insertBefore(e,B):(C.nodeType===8?(B=C.parentNode,B.insertBefore(e,C)):(B=C,B.appendChild(e)),C=C._reactRootContainer,C!=null||B.onclick!==null||(B.onclick=uo));else if(t!==4&&(e=e.child,e!==null))for(y1(e,B,C),e=e.sibling;e!==null;)y1(e,B,C),e=e.sibling}function E1(e,B,C){var t=e.tag;if(t===5||t===6)e=e.stateNode,B?C.insertBefore(e,B):C.appendChild(e);else if(t!==4&&(e=e.child,e!==null))for(E1(e,B,C),e=e.sibling;e!==null;)E1(e,B,C),e=e.sibling}var QB=null,Ye=!1;function XC(e,B,C){for(C=C.child;C!==null;)NA(e,B,C),C=C.sibling}function NA(e,B,C){if(uC&&typeof uC.onCommitFiberUnmount=="function")try{uC.onCommitFiberUnmount(fl,C)}catch{}switch(C.tag){case 5:YB||Kn(C,B);case 6:var t=QB,n=Ye;QB=null,XC(e,B,C),QB=t,Ye=n,QB!==null&&(Ye?(e=QB,C=C.stateNode,e.nodeType===8?e.parentNode.removeChild(C):e.removeChild(C)):QB.removeChild(C.stateNode));break;case 18:QB!==null&&(Ye?(e=QB,C=C.stateNode,e.nodeType===8?Oc(e.parentNode,C):e.nodeType===1&&Oc(e,C),Si(e)):Oc(QB,C.stateNode));break;case 4:t=QB,n=Ye,QB=C.stateNode.containerInfo,Ye=!0,XC(e,B,C),QB=t,Ye=n;break;case 0:case 11:case 14:case 15:if(!YB&&(t=C.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){n=t=t.next;do{var r=n,i=r.destroy;r=r.tag,i!==void 0&&(r&2||r&4)&&kA(C,B,i),n=n.next}while(n!==t)}XC(e,B,C);break;case 1:if(!YB&&(Kn(C,B),t=C.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=C.memoizedProps,t.state=C.memoizedState,t.componentWillUnmount()}catch(s){EB(C,B,s)}XC(e,B,C);break;case 21:XC(e,B,C);break;case 22:C.mode&1?(YB=(t=YB)||C.memoizedState!==null,XC(e,B,C),YB=t):XC(e,B,C);break;default:XC(e,B,C)}}function gp(e){var B=e.updateQueue;if(B!==null){e.updateQueue=null;var C=e.stateNode;C===null&&(C=e.stateNode=new dP),B.forEach(function(t){var n=EP.bind(null,e,t);C.has(t)||(C.add(t),t.then(n,n))})}}function Ve(e,B){var C=B.deletions;if(C!==null)for(var t=0;t<C.length;t++){var n=C[t];try{var r=e,i=B,s=i;B:for(;s!==null;){switch(s.tag){case 5:QB=s.stateNode,Ye=!1;break B;case 3:QB=s.stateNode.containerInfo,Ye=!0;break B;case 4:QB=s.stateNode.containerInfo,Ye=!0;break B}s=s.return}if(QB===null)throw Error(S(160));NA(r,i,n),QB=null,Ye=!1;var a=n.alternate;a!==null&&(a.return=null),n.return=null}catch(o){EB(n,B,o)}}if(B.subtreeFlags&12854)for(B=B.child;B!==null;)OA(B,e),B=B.sibling}function OA(e,B){var C=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ve(B,e),sC(e),t&4){try{ai(3,e,e.return),yl(3,e)}catch(h){EB(e,e.return,h)}try{ai(5,e,e.return)}catch(h){EB(e,e.return,h)}}break;case 1:Ve(B,e),sC(e),t&512&&C!==null&&Kn(C,C.return);break;case 5:if(Ve(B,e),sC(e),t&512&&C!==null&&Kn(C,C.return),e.flags&32){var n=e.stateNode;try{vi(n,"")}catch(h){EB(e,e.return,h)}}if(t&4&&(n=e.stateNode,n!=null)){var r=e.memoizedProps,i=C!==null?C.memoizedProps:r,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&r.type==="radio"&&r.name!=null&&_g(n,r),Xu(s,i);var o=Xu(s,r);for(i=0;i<a.length;i+=2){var c=a[i],l=a[i+1];c==="style"?tb(n,l):c==="dangerouslySetInnerHTML"?eb(n,l):c==="children"?vi(n,l):Wd(n,c,l,o)}switch(s){case"input":Uu(n,r);break;case"textarea":$g(n,r);break;case"select":var u=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!r.multiple;var m=r.value;m!=null?jn(n,!!r.multiple,m,!1):u!==!!r.multiple&&(r.defaultValue!=null?jn(n,!!r.multiple,r.defaultValue,!0):jn(n,!!r.multiple,r.multiple?[]:"",!1))}n[Fi]=r}catch(h){EB(e,e.return,h)}}break;case 6:if(Ve(B,e),sC(e),t&4){if(e.stateNode===null)throw Error(S(162));n=e.stateNode,r=e.memoizedProps;try{n.nodeValue=r}catch(h){EB(e,e.return,h)}}break;case 3:if(Ve(B,e),sC(e),t&4&&C!==null&&C.memoizedState.isDehydrated)try{Si(B.containerInfo)}catch(h){EB(e,e.return,h)}break;case 4:Ve(B,e),sC(e);break;case 13:Ve(B,e),sC(e),n=e.child,n.flags&8192&&(r=n.memoizedState!==null,n.stateNode.isHidden=r,!r||n.alternate!==null&&n.alternate.memoizedState!==null||(Sf=DB())),t&4&&gp(e);break;case 22:if(c=C!==null&&C.memoizedState!==null,e.mode&1?(YB=(o=YB)||c,Ve(B,e),YB=o):Ve(B,e),sC(e),t&8192){if(o=e.memoizedState!==null,(e.stateNode.isHidden=o)&&!c&&e.mode&1)for(H=e,c=e.child;c!==null;){for(l=H=c;H!==null;){switch(u=H,m=u.child,u.tag){case 0:case 11:case 14:case 15:ai(4,u,u.return);break;case 1:Kn(u,u.return);var d=u.stateNode;if(typeof d.componentWillUnmount=="function"){t=u,C=u.return;try{B=t,d.props=B.memoizedProps,d.state=B.memoizedState,d.componentWillUnmount()}catch(h){EB(t,C,h)}}break;case 5:Kn(u,u.return);break;case 22:if(u.memoizedState!==null){Ap(l);continue}}m!==null?(m.return=u,H=m):Ap(l)}c=c.sibling}B:for(c=null,l=e;;){if(l.tag===5){if(c===null){c=l;try{n=l.stateNode,o?(r=n.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(s=l.stateNode,a=l.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Cb("display",i))}catch(h){EB(e,e.return,h)}}}else if(l.tag===6){if(c===null)try{l.stateNode.nodeValue=o?"":l.memoizedProps}catch(h){EB(e,e.return,h)}}else if((l.tag!==22&&l.tag!==23||l.memoizedState===null||l===e)&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break B;for(;l.sibling===null;){if(l.return===null||l.return===e)break B;c===l&&(c=null),l=l.return}c===l&&(c=null),l.sibling.return=l.return,l=l.sibling}}break;case 19:Ve(B,e),sC(e),t&4&&gp(e);break;case 21:break;default:Ve(B,e),sC(e)}}function sC(e){var B=e.flags;if(B&2){try{B:{for(var C=e.return;C!==null;){if(FA(C)){var t=C;break B}C=C.return}throw Error(S(160))}switch(t.tag){case 5:var n=t.stateNode;t.flags&32&&(vi(n,""),t.flags&=-33);var r=mp(e);E1(e,r,n);break;case 3:case 4:var i=t.stateNode.containerInfo,s=mp(e);y1(e,s,i);break;default:throw Error(S(161))}}catch(a){EB(e,e.return,a)}e.flags&=-3}B&4096&&(e.flags&=-4097)}function hP(e,B,C){H=e,RA(e)}function RA(e,B,C){for(var t=(e.mode&1)!==0;H!==null;){var n=H,r=n.child;if(n.tag===22&&t){var i=n.memoizedState!==null||ta;if(!i){var s=n.alternate,a=s!==null&&s.memoizedState!==null||YB;s=ta;var o=YB;if(ta=i,(YB=a)&&!o)for(H=n;H!==null;)i=H,a=i.child,i.tag===22&&i.memoizedState!==null?vp(n):a!==null?(a.return=i,H=a):vp(n);for(;r!==null;)H=r,RA(r),r=r.sibling;H=n,ta=s,YB=o}bp(e)}else n.subtreeFlags&8772&&r!==null?(r.return=n,H=r):bp(e)}}function bp(e){for(;H!==null;){var B=H;if(B.flags&8772){var C=B.alternate;try{if(B.flags&8772)switch(B.tag){case 0:case 11:case 15:YB||yl(5,B);break;case 1:var t=B.stateNode;if(B.flags&4&&!YB)if(C===null)t.componentDidMount();else{var n=B.elementType===B.type?C.memoizedProps:je(B.type,C.memoizedProps);t.componentDidUpdate(n,C.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var r=B.updateQueue;r!==null&&Cp(B,r,t);break;case 3:var i=B.updateQueue;if(i!==null){if(C=null,B.child!==null)switch(B.child.tag){case 5:C=B.child.stateNode;break;case 1:C=B.child.stateNode}Cp(B,i,C)}break;case 5:var s=B.stateNode;if(C===null&&B.flags&4){C=s;var a=B.memoizedProps;switch(B.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&C.focus();break;case"img":a.src&&(C.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(B.memoizedState===null){var o=B.alternate;if(o!==null){var c=o.memoizedState;if(c!==null){var l=c.dehydrated;l!==null&&Si(l)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}YB||B.flags&512&&v1(B)}catch(u){EB(B,B.return,u)}}if(B===e){H=null;break}if(C=B.sibling,C!==null){C.return=B.return,H=C;break}H=B.return}}function Ap(e){for(;H!==null;){var B=H;if(B===e){H=null;break}var C=B.sibling;if(C!==null){C.return=B.return,H=C;break}H=B.return}}function vp(e){for(;H!==null;){var B=H;try{switch(B.tag){case 0:case 11:case 15:var C=B.return;try{yl(4,B)}catch(a){EB(B,C,a)}break;case 1:var t=B.stateNode;if(typeof t.componentDidMount=="function"){var n=B.return;try{t.componentDidMount()}catch(a){EB(B,n,a)}}var r=B.return;try{v1(B)}catch(a){EB(B,r,a)}break;case 5:var i=B.return;try{v1(B)}catch(a){EB(B,i,a)}}}catch(a){EB(B,B.return,a)}if(B===e){H=null;break}var s=B.sibling;if(s!==null){s.return=B.return,H=s;break}H=B.return}}var pP=Math.ceil,Io=UC.ReactCurrentDispatcher,Ef=UC.ReactCurrentOwner,Ge=UC.ReactCurrentBatchConfig,_=0,KB=null,kB=null,JB=0,ye=0,Qn=Rt(0),RB=0,Li=null,nn=0,El=0,If=0,oi=null,oe=null,Sf=0,cr=1/0,EC=null,So=!1,I1=null,ft=null,na=!1,st=null,wo=0,li=0,S1=null,Va=-1,Wa=0;function Ce(){return _&6?DB():Va!==-1?Va:Va=DB()}function ht(e){return e.mode&1?_&2&&JB!==0?JB&-JB:$k.transition!==null?(Wa===0&&(Wa=hb()),Wa):(e=CB,e!==0||(e=window.event,e=e===void 0?16:yb(e.type)),e):1}function eC(e,B,C,t){if(50<li)throw li=0,S1=null,Error(S(185));os(e,C,t),(!(_&2)||e!==KB)&&(e===KB&&(!(_&2)&&(El|=C),RB===4&&et(e,JB)),fe(e,t),C===1&&_===0&&!(B.mode&1)&&(cr=DB()+500,bl&&Ht()))}function fe(e,B){var C=e.callbackNode;$D(e,B);var t=ao(e,e===KB?JB:0);if(t===0)C!==null&&F2(C),e.callbackNode=null,e.callbackPriority=0;else if(B=t&-t,e.callbackPriority!==B){if(C!=null&&F2(C),B===1)e.tag===0?_k(yp.bind(null,e)):Qb(yp.bind(null,e)),Xk(function(){!(_&6)&&Ht()}),C=null;else{switch(pb(t)){case 1:C=qd;break;case 4:C=db;break;case 16:C=so;break;case 536870912:C=fb;break;default:C=so}C=QA(C,HA.bind(null,e))}e.callbackPriority=B,e.callbackNode=C}}function HA(e,B){if(Va=-1,Wa=0,_&6)throw Error(S(327));var C=e.callbackNode;if(zn()&&e.callbackNode!==C)return null;var t=ao(e,e===KB?JB:0);if(t===0)return null;if(t&30||t&e.expiredLanes||B)B=Do(e,t);else{B=t;var n=_;_|=2;var r=LA();(KB!==e||JB!==B)&&(EC=null,cr=DB()+500,zt(e,B));do try{bP();break}catch(s){MA(e,s)}while(1);lf(),Io.current=r,_=n,kB!==null?B=0:(KB=null,JB=0,B=RB)}if(B!==0){if(B===2&&(n=$u(e),n!==0&&(t=n,B=w1(e,n))),B===1)throw C=Li,zt(e,0),et(e,t),fe(e,DB()),C;if(B===6)et(e,t);else{if(n=e.current.alternate,!(t&30)&&!mP(n)&&(B=Do(e,t),B===2&&(r=$u(e),r!==0&&(t=r,B=w1(e,r))),B===1))throw C=Li,zt(e,0),et(e,t),fe(e,DB()),C;switch(e.finishedWork=n,e.finishedLanes=t,B){case 0:case 1:throw Error(S(345));case 2:Tt(e,oe,EC);break;case 3:if(et(e,t),(t&130023424)===t&&(B=Sf+500-DB(),10<B)){if(ao(e,0)!==0)break;if(n=e.suspendedLanes,(n&t)!==t){Ce(),e.pingedLanes|=e.suspendedLanes&n;break}e.timeoutHandle=s1(Tt.bind(null,e,oe,EC),B);break}Tt(e,oe,EC);break;case 4:if(et(e,t),(t&4194240)===t)break;for(B=e.eventTimes,n=-1;0<t;){var i=31-BC(t);r=1<<i,i=B[i],i>n&&(n=i),t&=~r}if(t=n,t=DB()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*pP(t/1960))-t,10<t){e.timeoutHandle=s1(Tt.bind(null,e,oe,EC),t);break}Tt(e,oe,EC);break;case 5:Tt(e,oe,EC);break;default:throw Error(S(329))}}}return fe(e,DB()),e.callbackNode===C?HA.bind(null,e):null}function w1(e,B){var C=oi;return e.current.memoizedState.isDehydrated&&(zt(e,B).flags|=256),e=Do(e,B),e!==2&&(B=oe,oe=C,B!==null&&D1(B)),e}function D1(e){oe===null?oe=e:oe.push.apply(oe,e)}function mP(e){for(var B=e;;){if(B.flags&16384){var C=B.updateQueue;if(C!==null&&(C=C.stores,C!==null))for(var t=0;t<C.length;t++){var n=C[t],r=n.getSnapshot;n=n.value;try{if(!nC(r(),n))return!1}catch{return!1}}}if(C=B.child,B.subtreeFlags&16384&&C!==null)C.return=B,B=C;else{if(B===e)break;for(;B.sibling===null;){if(B.return===null||B.return===e)return!0;B=B.return}B.sibling.return=B.return,B=B.sibling}}return!0}function et(e,B){for(B&=~If,B&=~El,e.suspendedLanes|=B,e.pingedLanes&=~B,e=e.expirationTimes;0<B;){var C=31-BC(B),t=1<<C;e[C]=-1,B&=~t}}function yp(e){if(_&6)throw Error(S(327));zn();var B=ao(e,0);if(!(B&1))return fe(e,DB()),null;var C=Do(e,B);if(e.tag!==0&&C===2){var t=$u(e);t!==0&&(B=t,C=w1(e,t))}if(C===1)throw C=Li,zt(e,0),et(e,B),fe(e,DB()),C;if(C===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=B,Tt(e,oe,EC),fe(e,DB()),null}function wf(e,B){var C=_;_|=1;try{return e(B)}finally{_=C,_===0&&(cr=DB()+500,bl&&Ht())}}function rn(e){st!==null&&st.tag===0&&!(_&6)&&zn();var B=_;_|=1;var C=Ge.transition,t=CB;try{if(Ge.transition=null,CB=1,e)return e()}finally{CB=t,Ge.transition=C,_=B,!(_&6)&&Ht()}}function Df(){ye=Qn.current,hB(Qn)}function zt(e,B){e.finishedWork=null,e.finishedLanes=0;var C=e.timeoutHandle;if(C!==-1&&(e.timeoutHandle=-1,Yk(C)),kB!==null)for(C=kB.return;C!==null;){var t=C;switch(sf(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&fo();break;case 3:or(),hB(ue),hB(ZB),pf();break;case 5:hf(t);break;case 4:or();break;case 13:hB(bB);break;case 19:hB(bB);break;case 10:cf(t.type._context);break;case 22:case 23:Df()}C=C.return}if(KB=e,kB=e=pt(e.current,null),JB=ye=B,RB=0,Li=null,If=El=nn=0,oe=oi=null,Qt!==null){for(B=0;B<Qt.length;B++)if(C=Qt[B],t=C.interleaved,t!==null){C.interleaved=null;var n=t.next,r=C.pending;if(r!==null){var i=r.next;r.next=n,t.next=i}C.pending=t}Qt=null}return e}function MA(e,B){do{var C=kB;try{if(lf(),Qa.current=Eo,yo){for(var t=AB.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}yo=!1}if(tn=0,TB=FB=AB=null,si=!1,Ri=0,Ef.current=null,C===null||C.return===null){RB=1,Li=B,kB=null;break}B:{var r=e,i=C.return,s=C,a=B;if(B=JB,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var o=a,c=s,l=c.tag;if(!(c.mode&1)&&(l===0||l===11||l===15)){var u=c.alternate;u?(c.updateQueue=u.updateQueue,c.memoizedState=u.memoizedState,c.lanes=u.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=op(i);if(m!==null){m.flags&=-257,lp(m,i,s,r,B),m.mode&1&&ap(r,o,B),B=m,a=o;var d=B.updateQueue;if(d===null){var h=new Set;h.add(a),B.updateQueue=h}else d.add(a);break B}else{if(!(B&1)){ap(r,o,B),kf();break B}a=Error(S(426))}}else if(mB&&s.mode&1){var g=op(i);if(g!==null){!(g.flags&65536)&&(g.flags|=256),lp(g,i,s,r,B),af(lr(a,s));break B}}r=a=lr(a,s),RB!==4&&(RB=2),oi===null?oi=[r]:oi.push(r),r=i;do{switch(r.tag){case 3:r.flags|=65536,B&=-B,r.lanes|=B;var f=mA(r,a,B);ep(r,f);break B;case 1:s=a;var p=r.type,b=r.stateNode;if(!(r.flags&128)&&(typeof p.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(ft===null||!ft.has(b)))){r.flags|=65536,B&=-B,r.lanes|=B;var A=gA(r,s,B);ep(r,A);break B}}r=r.return}while(r!==null)}GA(C)}catch(y){B=y,kB===C&&C!==null&&(kB=C=C.return);continue}break}while(1)}function LA(){var e=Io.current;return Io.current=Eo,e===null?Eo:e}function kf(){(RB===0||RB===3||RB===2)&&(RB=4),KB===null||!(nn&268435455)&&!(El&268435455)||et(KB,JB)}function Do(e,B){var C=_;_|=2;var t=LA();(KB!==e||JB!==B)&&(EC=null,zt(e,B));do try{gP();break}catch(n){MA(e,n)}while(1);if(lf(),_=C,Io.current=t,kB!==null)throw Error(S(261));return KB=null,JB=0,RB}function gP(){for(;kB!==null;)TA(kB)}function bP(){for(;kB!==null&&!VD();)TA(kB)}function TA(e){var B=KA(e.alternate,e,ye);e.memoizedProps=e.pendingProps,B===null?GA(e):kB=B,Ef.current=null}function GA(e){var B=e;do{var C=B.alternate;if(e=B.return,B.flags&32768){if(C=uP(C,B),C!==null){C.flags&=32767,kB=C;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{RB=6,kB=null;return}}else if(C=cP(C,B,ye),C!==null){kB=C;return}if(B=B.sibling,B!==null){kB=B;return}kB=B=e}while(B!==null);RB===0&&(RB=5)}function Tt(e,B,C){var t=CB,n=Ge.transition;try{Ge.transition=null,CB=1,AP(e,B,C,t)}finally{Ge.transition=n,CB=t}return null}function AP(e,B,C,t){do zn();while(st!==null);if(_&6)throw Error(S(327));C=e.finishedWork;var n=e.finishedLanes;if(C===null)return null;if(e.finishedWork=null,e.finishedLanes=0,C===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var r=C.lanes|C.childLanes;if(Bk(e,r),e===KB&&(kB=KB=null,JB=0),!(C.subtreeFlags&2064)&&!(C.flags&2064)||na||(na=!0,QA(so,function(){return zn(),null})),r=(C.flags&15990)!==0,C.subtreeFlags&15990||r){r=Ge.transition,Ge.transition=null;var i=CB;CB=1;var s=_;_|=4,Ef.current=null,fP(e,C),OA(C,e),Kk(r1),oo=!!n1,r1=n1=null,e.current=C,hP(C),WD(),_=s,CB=i,Ge.transition=r}else e.current=C;if(na&&(na=!1,st=e,wo=n),r=e.pendingLanes,r===0&&(ft=null),XD(C.stateNode),fe(e,DB()),B!==null)for(t=e.onRecoverableError,C=0;C<B.length;C++)n=B[C],t(n.value,{componentStack:n.stack,digest:n.digest});if(So)throw So=!1,e=I1,I1=null,e;return wo&1&&e.tag!==0&&zn(),r=e.pendingLanes,r&1?e===S1?li++:(li=0,S1=e):li=0,Ht(),null}function zn(){if(st!==null){var e=pb(wo),B=Ge.transition,C=CB;try{if(Ge.transition=null,CB=16>e?16:e,st===null)var t=!1;else{if(e=st,st=null,wo=0,_&6)throw Error(S(331));var n=_;for(_|=4,H=e.current;H!==null;){var r=H,i=r.child;if(H.flags&16){var s=r.deletions;if(s!==null){for(var a=0;a<s.length;a++){var o=s[a];for(H=o;H!==null;){var c=H;switch(c.tag){case 0:case 11:case 15:ai(8,c,r)}var l=c.child;if(l!==null)l.return=c,H=l;else for(;H!==null;){c=H;var u=c.sibling,m=c.return;if(PA(c),c===o){H=null;break}if(u!==null){u.return=m,H=u;break}H=m}}}var d=r.alternate;if(d!==null){var h=d.child;if(h!==null){d.child=null;do{var g=h.sibling;h.sibling=null,h=g}while(h!==null)}}H=r}}if(r.subtreeFlags&2064&&i!==null)i.return=r,H=i;else B:for(;H!==null;){if(r=H,r.flags&2048)switch(r.tag){case 0:case 11:case 15:ai(9,r,r.return)}var f=r.sibling;if(f!==null){f.return=r.return,H=f;break B}H=r.return}}var p=e.current;for(H=p;H!==null;){i=H;var b=i.child;if(i.subtreeFlags&2064&&b!==null)b.return=i,H=b;else B:for(i=p;H!==null;){if(s=H,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:yl(9,s)}}catch(y){EB(s,s.return,y)}if(s===i){H=null;break B}var A=s.sibling;if(A!==null){A.return=s.return,H=A;break B}H=s.return}}if(_=n,Ht(),uC&&typeof uC.onPostCommitFiberRoot=="function")try{uC.onPostCommitFiberRoot(fl,e)}catch{}t=!0}return t}finally{CB=C,Ge.transition=B}}return!1}function Ep(e,B,C){B=lr(C,B),B=mA(e,B,1),e=dt(e,B,1),B=Ce(),e!==null&&(os(e,1,B),fe(e,B))}function EB(e,B,C){if(e.tag===3)Ep(e,e,C);else for(;B!==null;){if(B.tag===3){Ep(B,e,C);break}else if(B.tag===1){var t=B.stateNode;if(typeof B.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(ft===null||!ft.has(t))){e=lr(C,e),e=gA(B,e,1),B=dt(B,e,1),e=Ce(),B!==null&&(os(B,1,e),fe(B,e));break}}B=B.return}}function vP(e,B,C){var t=e.pingCache;t!==null&&t.delete(B),B=Ce(),e.pingedLanes|=e.suspendedLanes&C,KB===e&&(JB&C)===C&&(RB===4||RB===3&&(JB&130023424)===JB&&500>DB()-Sf?zt(e,0):If|=C),fe(e,B)}function xA(e,B){B===0&&(e.mode&1?(B=Xs,Xs<<=1,!(Xs&130023424)&&(Xs=4194304)):B=1);var C=Ce();e=LC(e,B),e!==null&&(os(e,B,C),fe(e,C))}function yP(e){var B=e.memoizedState,C=0;B!==null&&(C=B.retryLane),xA(e,C)}function EP(e,B){var C=0;switch(e.tag){case 13:var t=e.stateNode,n=e.memoizedState;n!==null&&(C=n.retryLane);break;case 19:t=e.stateNode;break;default:throw Error(S(314))}t!==null&&t.delete(B),xA(e,C)}var KA;KA=function(e,B,C){if(e!==null)if(e.memoizedProps!==B.pendingProps||ue.current)le=!0;else{if(!(e.lanes&C)&&!(B.flags&128))return le=!1,lP(e,B,C);le=!!(e.flags&131072)}else le=!1,mB&&B.flags&1048576&&Jb(B,mo,B.index);switch(B.lanes=0,B.tag){case 2:var t=B.type;Ua(e,B),e=B.pendingProps;var n=ir(B,ZB.current);qn(B,C),n=gf(null,B,t,e,n,C);var r=bf();return B.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(B.tag=1,B.memoizedState=null,B.updateQueue=null,de(t)?(r=!0,ho(B)):r=!1,B.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,df(B),n.updater=Al,B.stateNode=n,n._reactInternals=B,f1(B,t,e,C),B=m1(null,B,t,!0,r,C)):(B.tag=0,mB&&r&&rf(B),$B(null,B,n,C),B=B.child),B;case 16:t=B.elementType;B:{switch(Ua(e,B),e=B.pendingProps,n=t._init,t=n(t._payload),B.type=t,n=B.tag=SP(t),e=je(t,e),n){case 0:B=p1(null,B,t,e,C);break B;case 1:B=dp(null,B,t,e,C);break B;case 11:B=cp(null,B,t,e,C);break B;case 14:B=up(null,B,t,je(t.type,e),C);break B}throw Error(S(306,t,""))}return B;case 0:return t=B.type,n=B.pendingProps,n=B.elementType===t?n:je(t,n),p1(e,B,t,n,C);case 1:return t=B.type,n=B.pendingProps,n=B.elementType===t?n:je(t,n),dp(e,B,t,n,C);case 3:B:{if(yA(B),e===null)throw Error(S(387));t=B.pendingProps,r=B.memoizedState,n=r.element,jb(e,B),Ao(B,t,null,C);var i=B.memoizedState;if(t=i.element,r.isDehydrated)if(r={element:t,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},B.updateQueue.baseState=r,B.memoizedState=r,B.flags&256){n=lr(Error(S(423)),B),B=fp(e,B,t,C,n);break B}else if(t!==n){n=lr(Error(S(424)),B),B=fp(e,B,t,C,n);break B}else for(Ee=ut(B.stateNode.containerInfo.firstChild),Ie=B,mB=!0,Xe=null,C=qb(B,null,t,C),B.child=C;C;)C.flags=C.flags&-3|4096,C=C.sibling;else{if(sr(),t===n){B=TC(e,B,C);break B}$B(e,B,t,C)}B=B.child}return B;case 5:return zb(B),e===null&&c1(B),t=B.type,n=B.pendingProps,r=e!==null?e.memoizedProps:null,i=n.children,i1(t,n)?i=null:r!==null&&i1(t,r)&&(B.flags|=32),vA(e,B),$B(e,B,i,C),B.child;case 6:return e===null&&c1(B),null;case 13:return EA(e,B,C);case 4:return ff(B,B.stateNode.containerInfo),t=B.pendingProps,e===null?B.child=ar(B,null,t,C):$B(e,B,t,C),B.child;case 11:return t=B.type,n=B.pendingProps,n=B.elementType===t?n:je(t,n),cp(e,B,t,n,C);case 7:return $B(e,B,B.pendingProps,C),B.child;case 8:return $B(e,B,B.pendingProps.children,C),B.child;case 12:return $B(e,B,B.pendingProps.children,C),B.child;case 10:B:{if(t=B.type._context,n=B.pendingProps,r=B.memoizedProps,i=n.value,oB(go,t._currentValue),t._currentValue=i,r!==null)if(nC(r.value,i)){if(r.children===n.children&&!ue.current){B=TC(e,B,C);break B}}else for(r=B.child,r!==null&&(r.return=B);r!==null;){var s=r.dependencies;if(s!==null){i=r.child;for(var a=s.firstContext;a!==null;){if(a.context===t){if(r.tag===1){a=NC(-1,C&-C),a.tag=2;var o=r.updateQueue;if(o!==null){o=o.shared;var c=o.pending;c===null?a.next=a:(a.next=c.next,c.next=a),o.pending=a}}r.lanes|=C,a=r.alternate,a!==null&&(a.lanes|=C),u1(r.return,C,B),s.lanes|=C;break}a=a.next}}else if(r.tag===10)i=r.type===B.type?null:r.child;else if(r.tag===18){if(i=r.return,i===null)throw Error(S(341));i.lanes|=C,s=i.alternate,s!==null&&(s.lanes|=C),u1(i,C,B),i=r.sibling}else i=r.child;if(i!==null)i.return=r;else for(i=r;i!==null;){if(i===B){i=null;break}if(r=i.sibling,r!==null){r.return=i.return,i=r;break}i=i.return}r=i}$B(e,B,n.children,C),B=B.child}return B;case 9:return n=B.type,t=B.pendingProps.children,qn(B,C),n=Ke(n),t=t(n),B.flags|=1,$B(e,B,t,C),B.child;case 14:return t=B.type,n=je(t,B.pendingProps),n=je(t.type,n),up(e,B,t,n,C);case 15:return bA(e,B,B.type,B.pendingProps,C);case 17:return t=B.type,n=B.pendingProps,n=B.elementType===t?n:je(t,n),Ua(e,B),B.tag=1,de(t)?(e=!0,ho(B)):e=!1,qn(B,C),Xb(B,t,n),f1(B,t,n,C),m1(null,B,t,!0,e,C);case 19:return IA(e,B,C);case 22:return AA(e,B,C)}throw Error(S(156,B.tag))};function QA(e,B){return ub(e,B)}function IP(e,B,C,t){this.tag=e,this.key=C,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=B,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,B,C,t){return new IP(e,B,C,t)}function Pf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function SP(e){if(typeof e=="function")return Pf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Yd)return 11;if(e===Xd)return 14}return 2}function pt(e,B){var C=e.alternate;return C===null?(C=Te(e.tag,B,e.key,e.mode),C.elementType=e.elementType,C.type=e.type,C.stateNode=e.stateNode,C.alternate=e,e.alternate=C):(C.pendingProps=B,C.type=e.type,C.flags=0,C.subtreeFlags=0,C.deletions=null),C.flags=e.flags&14680064,C.childLanes=e.childLanes,C.lanes=e.lanes,C.child=e.child,C.memoizedProps=e.memoizedProps,C.memoizedState=e.memoizedState,C.updateQueue=e.updateQueue,B=e.dependencies,C.dependencies=B===null?null:{lanes:B.lanes,firstContext:B.firstContext},C.sibling=e.sibling,C.index=e.index,C.ref=e.ref,C}function ja(e,B,C,t,n,r){var i=2;if(t=e,typeof e=="function")Pf(e)&&(i=1);else if(typeof e=="string")i=5;else B:switch(e){case Nn:return _t(C.children,n,r,B);case jd:i=8,n|=8;break;case Gu:return e=Te(12,C,B,n|2),e.elementType=Gu,e.lanes=r,e;case xu:return e=Te(13,C,B,n),e.elementType=xu,e.lanes=r,e;case Ku:return e=Te(19,C,B,n),e.elementType=Ku,e.lanes=r,e;case Zg:return Il(C,n,r,B);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Yg:i=10;break B;case Xg:i=9;break B;case Yd:i=11;break B;case Xd:i=14;break B;case _C:i=16,t=null;break B}throw Error(S(130,e==null?e:typeof e,""))}return B=Te(i,C,B,n),B.elementType=e,B.type=t,B.lanes=r,B}function _t(e,B,C,t){return e=Te(7,e,t,B),e.lanes=C,e}function Il(e,B,C,t){return e=Te(22,e,t,B),e.elementType=Zg,e.lanes=C,e.stateNode={isHidden:!1},e}function Kc(e,B,C){return e=Te(6,e,null,B),e.lanes=C,e}function Qc(e,B,C){return B=Te(4,e.children!==null?e.children:[],e.key,B),B.lanes=C,B.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},B}function wP(e,B,C,t,n){this.tag=B,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vc(0),this.expirationTimes=vc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vc(0),this.identifierPrefix=t,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}function Ff(e,B,C,t,n,r,i,s,a){return e=new wP(e,B,C,s,a),B===1?(B=1,r===!0&&(B|=8)):B=0,r=Te(3,null,null,B),e.current=r,r.stateNode=e,r.memoizedState={element:t,isDehydrated:C,cache:null,transitions:null,pendingSuspenseBoundaries:null},df(r),e}function DP(e,B,C){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fn,key:t==null?null:""+t,children:e,containerInfo:B,implementation:C}}function JA(e){if(!e)return It;e=e._reactInternals;B:{if(gn(e)!==e||e.tag!==1)throw Error(S(170));var B=e;do{switch(B.tag){case 3:B=B.stateNode.context;break B;case 1:if(de(B.type)){B=B.stateNode.__reactInternalMemoizedMergedChildContext;break B}}B=B.return}while(B!==null);throw Error(S(171))}if(e.tag===1){var C=e.type;if(de(C))return Kb(e,C,B)}return B}function UA(e,B,C,t,n,r,i,s,a){return e=Ff(C,t,!0,e,n,r,i,s,a),e.context=JA(null),C=e.current,t=Ce(),n=ht(C),r=NC(t,n),r.callback=B??null,dt(C,r,n),e.current.lanes=n,os(e,n,t),fe(e,t),e}function Sl(e,B,C,t){var n=B.current,r=Ce(),i=ht(n);return C=JA(C),B.context===null?B.context=C:B.pendingContext=C,B=NC(r,i),B.payload={element:e},t=t===void 0?null:t,t!==null&&(B.callback=t),e=dt(n,B,i),e!==null&&(eC(e,n,i,r),Ka(e,n,i)),i}function ko(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ip(e,B){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var C=e.retryLane;e.retryLane=C!==0&&C<B?C:B}}function Nf(e,B){Ip(e,B),(e=e.alternate)&&Ip(e,B)}function kP(){return null}var VA=typeof reportError=="function"?reportError:function(e){console.error(e)};function Of(e){this._internalRoot=e}wl.prototype.render=Of.prototype.render=function(e){var B=this._internalRoot;if(B===null)throw Error(S(409));Sl(e,B,null,null)};wl.prototype.unmount=Of.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var B=e.containerInfo;rn(function(){Sl(null,e,null,null)}),B[MC]=null}};function wl(e){this._internalRoot=e}wl.prototype.unstable_scheduleHydration=function(e){if(e){var B=bb();e={blockedOn:null,target:e,priority:B};for(var C=0;C<Bt.length&&B!==0&&B<Bt[C].priority;C++);Bt.splice(C,0,e),C===0&&vb(e)}};function Rf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Dl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Sp(){}function PP(e,B,C,t,n){if(n){if(typeof t=="function"){var r=t;t=function(){var o=ko(i);r.call(o)}}var i=UA(B,t,e,0,null,!1,!1,"",Sp);return e._reactRootContainer=i,e[MC]=i.current,ki(e.nodeType===8?e.parentNode:e),rn(),i}for(;n=e.lastChild;)e.removeChild(n);if(typeof t=="function"){var s=t;t=function(){var o=ko(a);s.call(o)}}var a=Ff(e,0,!1,null,null,!1,!1,"",Sp);return e._reactRootContainer=a,e[MC]=a.current,ki(e.nodeType===8?e.parentNode:e),rn(function(){Sl(B,a,C,t)}),a}function kl(e,B,C,t,n){var r=C._reactRootContainer;if(r){var i=r;if(typeof n=="function"){var s=n;n=function(){var a=ko(i);s.call(a)}}Sl(B,i,e,n)}else i=PP(C,B,e,n,t);return ko(i)}mb=function(e){switch(e.tag){case 3:var B=e.stateNode;if(B.current.memoizedState.isDehydrated){var C=_r(B.pendingLanes);C!==0&&(zd(B,C|1),fe(B,DB()),!(_&6)&&(cr=DB()+500,Ht()))}break;case 13:rn(function(){var t=LC(e,1);if(t!==null){var n=Ce();eC(t,e,1,n)}}),Nf(e,1)}};_d=function(e){if(e.tag===13){var B=LC(e,134217728);if(B!==null){var C=Ce();eC(B,e,134217728,C)}Nf(e,134217728)}};gb=function(e){if(e.tag===13){var B=ht(e),C=LC(e,B);if(C!==null){var t=Ce();eC(C,e,B,t)}Nf(e,B)}};bb=function(){return CB};Ab=function(e,B){var C=CB;try{return CB=e,B()}finally{CB=C}};qu=function(e,B,C){switch(B){case"input":if(Uu(e,C),B=C.name,C.type==="radio"&&B!=null){for(C=e;C.parentNode;)C=C.parentNode;for(C=C.querySelectorAll("input[name="+JSON.stringify(""+B)+'][type="radio"]'),B=0;B<C.length;B++){var t=C[B];if(t!==e&&t.form===e.form){var n=gl(t);if(!n)throw Error(S(90));zg(t),Uu(t,n)}}}break;case"textarea":$g(e,C);break;case"select":B=C.value,B!=null&&jn(e,!!C.multiple,B,!1)}};ib=wf;sb=rn;var FP={usingClientEntryPoint:!1,Events:[cs,Mn,gl,nb,rb,wf]},xr={findFiberByHostInstance:Kt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},NP={bundleType:xr.bundleType,version:xr.version,rendererPackageName:xr.rendererPackageName,rendererConfig:xr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:UC.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=lb(e),e===null?null:e.stateNode},findFiberByHostInstance:xr.findFiberByHostInstance||kP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ra.isDisabled&&ra.supportsFiber)try{fl=ra.inject(NP),uC=ra}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=FP;ke.createPortal=function(e,B){var C=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rf(B))throw Error(S(200));return DP(e,B,null,C)};ke.createRoot=function(e,B){if(!Rf(e))throw Error(S(299));var C=!1,t="",n=VA;return B!=null&&(B.unstable_strictMode===!0&&(C=!0),B.identifierPrefix!==void 0&&(t=B.identifierPrefix),B.onRecoverableError!==void 0&&(n=B.onRecoverableError)),B=Ff(e,1,!1,null,null,C,!1,t,n),e[MC]=B.current,ki(e.nodeType===8?e.parentNode:e),new Of(B)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var B=e._reactInternals;if(B===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=lb(B),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return rn(e)};ke.hydrate=function(e,B,C){if(!Dl(B))throw Error(S(200));return kl(null,e,B,!0,C)};ke.hydrateRoot=function(e,B,C){if(!Rf(e))throw Error(S(405));var t=C!=null&&C.hydratedSources||null,n=!1,r="",i=VA;if(C!=null&&(C.unstable_strictMode===!0&&(n=!0),C.identifierPrefix!==void 0&&(r=C.identifierPrefix),C.onRecoverableError!==void 0&&(i=C.onRecoverableError)),B=UA(B,null,e,1,C??null,n,!1,r,i),e[MC]=B.current,ki(e),t)for(e=0;e<t.length;e++)C=t[e],n=C._getVersion,n=n(C._source),B.mutableSourceEagerHydrationData==null?B.mutableSourceEagerHydrationData=[C,n]:B.mutableSourceEagerHydrationData.push(C,n);return new wl(B)};ke.render=function(e,B,C){if(!Dl(B))throw Error(S(200));return kl(null,e,B,!1,C)};ke.unmountComponentAtNode=function(e){if(!Dl(e))throw Error(S(40));return e._reactRootContainer?(rn(function(){kl(null,null,e,!1,function(){e._reactRootContainer=null,e[MC]=null})}),!0):!1};ke.unstable_batchedUpdates=wf;ke.unstable_renderSubtreeIntoContainer=function(e,B,C,t){if(!Dl(C))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return kl(e,B,C,!1,t)};ke.version="18.2.0-next-9e3b772b8-20220608";(function(e){function B(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(B)}catch(C){console.error(C)}}B(),e.exports=ke})(kD);var wp=Mu;Hu.createRoot=wp.createRoot,Hu.hydrateRoot=wp.hydrateRoot;/**
* @remix-run/router v1.7.2
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/function Ti(){return Ti=Object.assign?Object.assign.bind():function(e){for(var B=1;B<arguments.length;B++){var C=arguments[B];for(var t in C)Object.prototype.hasOwnProperty.call(C,t)&&(e[t]=C[t])}return e},Ti.apply(this,arguments)}var Ut;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ut||(Ut={}));const Dp="popstate";function OP(e){e===void 0&&(e={});function B(t,n){let{pathname:r,search:i,hash:s}=t.location;return k1("",{pathname:r,search:i,hash:s},n.state&&n.state.usr||null,n.state&&n.state.key||"default")}function C(t,n){return typeof n=="string"?n:Po(n)}return HP(B,C,null,e)}function CC(e,B){if(e===!1||e===null||typeof e>"u")throw new Error(B)}function RP(){return Math.random().toString(36).substr(2,8)}function kp(e,B){return{usr:e.state,key:e.key,idx:B}}function k1(e,B,C,t){return C===void 0&&(C=null),Ti({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof B=="string"?Pl(B):B,{state:C,key:B&&B.key||t||RP()})}function Po(e){let{pathname:B="/",search:C="",hash:t=""}=e;return C&&C!=="?"&&(B+=C.charAt(0)==="?"?C:"?"+C),t&&t!=="#"&&(B+=t.charAt(0)==="#"?t:"#"+t),B}function Pl(e){let B={};if(e){let C=e.indexOf("#");C>=0&&(B.hash=e.substr(C),e=e.substr(0,C));let t=e.indexOf("?");t>=0&&(B.search=e.substr(t),e=e.substr(0,t)),e&&(B.pathname=e)}return B}function HP(e,B,C,t){t===void 0&&(t={});let{window:n=document.defaultView,v5Compat:r=!1}=t,i=n.history,s=Ut.Pop,a=null,o=c();o==null&&(o=0,i.replaceState(Ti({},i.state,{idx:o}),""));function c(){return(i.state||{idx:null}).idx}function l(){s=Ut.Pop;let g=c(),f=g==null?null:g-o;o=g,a&&a({action:s,location:h.location,delta:f})}function u(g,f){s=Ut.Push;let p=k1(h.location,g,f);C&&C(p,g),o=c()+1;let b=kp(p,o),A=h.createHref(p);try{i.pushState(b,"",A)}catch(y){if(y instanceof DOMException&&y.name==="DataCloneError")throw y;n.location.assign(A)}r&&a&&a({action:s,location:h.location,delta:1})}function m(g,f){s=Ut.Replace;let p=k1(h.location,g,f);C&&C(p,g),o=c();let b=kp(p,o),A=h.createHref(p);i.replaceState(b,"",A),r&&a&&a({action:s,location:h.location,delta:0})}function d(g){let f=n.location.origin!=="null"?n.location.origin:n.location.href,p=typeof g=="string"?g:Po(g);return CC(f,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,f)}let h={get action(){return s},get location(){return e(n,i)},listen(g){if(a)throw new Error("A history only accepts one active listener");return n.addEventListener(Dp,l),a=g,()=>{n.removeEventListener(Dp,l),a=null}},createHref(g){return B(n,g)},createURL:d,encodeLocation(g){let f=d(g);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:u,replace:m,go(g){return i.go(g)}};return h}var Pp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Pp||(Pp={}));function WA(e,B){if(B==="/")return e;if(!e.toLowerCase().startsWith(B.toLowerCase()))return null;let C=B.endsWith("/")?B.length-1:B.length,t=e.charAt(C);return t&&t!=="/"?null:e.slice(C)||"/"}function MP(e,B){B===void 0&&(B="/");let{pathname:C,search:t="",hash:n=""}=typeof e=="string"?Pl(e):e;return{pathname:C?C.startsWith("/")?C:LP(C,B):B,search:TP(t),hash:GP(n)}}function LP(e,B){let C=B.replace(/\/+$/,"").split("/");return e.split("/").forEach(t=>{t===".."?C.length>1&&C.pop():t!=="."&&C.push(t)}),C.length>1?C.join("/"):"/"}function Jc(e,B,C,t){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+B+"` field ["+JSON.stringify(t)+"].  Please separate it out to the ")+("`to."+C+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function jA(e){return e.filter((B,C)=>C===0||B.route.path&&B.route.path.length>0)}function YA(e,B,C,t){t===void 0&&(t=!1);let n;typeof e=="string"?n=Pl(e):(n=Ti({},e),CC(!n.pathname||!n.pathname.includes("?"),Jc("?","pathname","search",n)),CC(!n.pathname||!n.pathname.includes("#"),Jc("#","pathname","hash",n)),CC(!n.search||!n.search.includes("#"),Jc("#","search","hash",n)));let r=e===""||n.pathname==="",i=r?"/":n.pathname,s;if(t||i==null)s=C;else{let l=B.length-1;if(i.startsWith("..")){let u=i.split("/");for(;u[0]==="..";)u.shift(),l-=1;n.pathname=u.join("/")}s=l>=0?B[l]:"/"}let a=MP(n,s),o=i&&i!=="/"&&i.endsWith("/"),c=(r||i===".")&&C.endsWith("/");return!a.pathname.endsWith("/")&&(o||c)&&(a.pathname+="/"),a}const XA=e=>e.join("/").replace(/\/\/+/g,"/"),TP=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,GP=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;/**
* React Router v6.14.2
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/function P1(){return P1=Object.assign?Object.assign.bind():function(e){for(var B=1;B<arguments.length;B++){var C=arguments[B];for(var t in C)Object.prototype.hasOwnProperty.call(C,t)&&(e[t]=C[t])}return e},P1.apply(this,arguments)}const ZA=O.createContext(null),ds=O.createContext(null),Hf=O.createContext(null),Fl=O.createContext({outlet:null,matches:[],isDataRoute:!1});function xP(e,B){let{relative:C}=B===void 0?{}:B;Nl()||CC(!1);let{basename:t,navigator:n}=O.useContext(ds),{hash:r,pathname:i,search:s}=zA(e,{relative:C}),a=i;return t!=="/"&&(a=i==="/"?t:XA([t,i])),n.createHref({pathname:a,search:s,hash:r})}function Nl(){return O.useContext(Hf)!=null}function Mf(){return Nl()||CC(!1),O.useContext(Hf).location}function qA(e){O.useContext(ds).static||O.useLayoutEffect(e)}function KP(){let{isDataRoute:e}=O.useContext(Fl);return e?WP():QP()}function QP(){Nl()||CC(!1);let e=O.useContext(ZA),{basename:B,navigator:C}=O.useContext(ds),{matches:t}=O.useContext(Fl),{pathname:n}=Mf(),r=JSON.stringify(jA(t).map(s=>s.pathnameBase)),i=O.useRef(!1);return qA(()=>{i.current=!0}),O.useCallback(function(s,a){if(a===void 0&&(a={}),!i.current)return;if(typeof s=="number"){C.go(s);return}let o=YA(s,JSON.parse(r),n,a.relative==="path");e==null&&B!=="/"&&(o.pathname=o.pathname==="/"?B:XA([B,o.pathname])),(a.replace?C.replace:C.push)(o,a.state,a)},[B,C,r,n,e])}function zA(e,B){let{relative:C}=B===void 0?{}:B,{matches:t}=O.useContext(Fl),{pathname:n}=Mf(),r=JSON.stringify(jA(t).map(i=>i.pathnameBase));return O.useMemo(()=>YA(e,JSON.parse(r),n,C==="path"),[e,r,n,C])}var F1;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(F1||(F1={}));var N1;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(N1||(N1={}));function JP(e){let B=O.useContext(ZA);return B||CC(!1),B}function UP(e){let B=O.useContext(Fl);return B||CC(!1),B}function VP(e){let B=UP(),C=B.matches[B.matches.length-1];return C.route.id||CC(!1),C.route.id}function WP(){let{router:e}=JP(F1.UseNavigateStable),B=VP(N1.UseNavigateStable),C=O.useRef(!1);return qA(()=>{C.current=!0}),O.useCallback(function(t,n){n===void 0&&(n={}),C.current&&(typeof t=="number"?e.navigate(t):e.navigate(t,P1({fromRouteId:B},n)))},[e,B])}function jP(e){let{basename:B="/",children:C=null,location:t,navigationType:n=Ut.Pop,navigator:r,static:i=!1}=e;Nl()&&CC(!1);let s=B.replace(/^\/*/,"/"),a=O.useMemo(()=>({basename:s,navigator:r,static:i}),[s,r,i]);typeof t=="string"&&(t=Pl(t));let{pathname:o="/",search:c="",hash:l="",state:u=null,key:m="default"}=t,d=O.useMemo(()=>{let h=WA(o,s);return h==null?null:{location:{pathname:h,search:c,hash:l,state:u,key:m},navigationType:n}},[s,o,c,l,u,m,n]);return d==null?null:O.createElement(ds.Provider,{value:a},O.createElement(Hf.Provider,{children:C,value:d}))}var Fp;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Fp||(Fp={}));new Promise(()=>{});/**
* React Router DOM v6.14.2
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/function O1(){return O1=Object.assign?Object.assign.bind():function(e){for(var B=1;B<arguments.length;B++){var C=arguments[B];for(var t in C)Object.prototype.hasOwnProperty.call(C,t)&&(e[t]=C[t])}return e},O1.apply(this,arguments)}function YP(e,B){if(e==null)return{};var C={},t=Object.keys(e),n,r;for(r=0;r<t.length;r++)n=t[r],!(B.indexOf(n)>=0)&&(C[n]=e[n]);return C}function XP(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ZP(e,B){return e.button===0&&(!B||B==="_self")&&!XP(e)}const qP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],zP="startTransition",Np=vD[zP];function _P(e){let{basename:B,children:C,future:t,window:n}=e,r=O.useRef();r.current==null&&(r.current=OP({window:n,v5Compat:!0}));let i=r.current,[s,a]=O.useState({action:i.action,location:i.location}),{v7_startTransition:o}=t||{},c=O.useCallback(l=>{o&&Np?Np(()=>a(l)):a(l)},[a,o]);return O.useLayoutEffect(()=>i.listen(c),[i,c]),O.createElement(jP,{basename:B,children:C,location:s.location,navigationType:s.action,navigator:i})}const $P=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",BF=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,eF=O.forwardRef(function(e,B){let{onClick:C,relative:t,reloadDocument:n,replace:r,state:i,target:s,to:a,preventScrollReset:o}=e,c=YP(e,qP),{basename:l}=O.useContext(ds),u,m=!1;if(typeof a=="string"&&BF.test(a)&&(u=a,$P))try{let f=new URL(window.location.href),p=a.startsWith("//")?new URL(f.protocol+a):new URL(a),b=WA(p.pathname,l);p.origin===f.origin&&b!=null?a=b+p.search+p.hash:m=!0}catch{}let d=xP(a,{relative:t}),h=CF(a,{replace:r,state:i,target:s,preventScrollReset:o,relative:t});function g(f){C&&C(f),f.defaultPrevented||h(f)}return O.createElement("a",O1({},c,{href:u||d,onClick:m||n?C:g,ref:B,target:s}))});var Op;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Op||(Op={}));var Rp;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Rp||(Rp={}));function CF(e,B){let{target:C,replace:t,state:n,preventScrollReset:r,relative:i}=B===void 0?{}:B,s=KP(),a=Mf(),o=zA(e,{relative:i});return O.useCallback(c=>{if(ZP(c,C)){c.preventDefault();let l=t!==void 0?t:Po(a)===Po(o);s(e,{replace:l,state:n,preventScrollReset:r,relative:i})}},[a,s,o,t,n,C,e,r,i])}const Hp={waves:"#F3F4F3","dark-waves":"#9E9A98",grainy:"#AC8B5D",bland:"#917E7A","dark-bland":"#3A3743"},tF=[15,30,45,60,75],nF=1e3;function _A(){document.querySelectorAll(".circle").forEach((e,B)=>{const C=10*Math.sin(Date.now()/nF+B);e.style.transform=`translateY(${C+110}px)`}),requestAnimationFrame(_A)}_A();const Kr=({color:e,position:B})=>D("div",{className:"circle",style:{width:"50px",height:"50px",borderRadius:"50%",background:`radial-gradient(circle, ${Hp[e]}, ${Hp[e]})`,position:"absolute",left:tF[B]+"%",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0), 0 12px 20px 0 rgba(0, 0, 0, 0.5)"}}),rF=()=>z("div",{style:{position:"relative"},children:[D(Kr,{color:"waves",position:0}),D(Kr,{color:"dark-waves",position:1}),D(Kr,{color:"grainy",position:2}),D(Kr,{color:"bland",position:3}),D(Kr,{color:"dark-bland",position:4})]});/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/const Bv=function(e){const B=[];let C=0;for(let t=0;t<e.length;t++){let n=e.charCodeAt(t);n<128?B[C++]=n:n<2048?(B[C++]=n>>6|192,B[C++]=n&63|128):(n&64512)===55296&&t+1<e.length&&(e.charCodeAt(t+1)&64512)===56320?(n=65536+((n&1023)<<10)+(e.charCodeAt(++t)&1023),B[C++]=n>>18|240,B[C++]=n>>12&63|128,B[C++]=n>>6&63|128,B[C++]=n&63|128):(B[C++]=n>>12|224,B[C++]=n>>6&63|128,B[C++]=n&63|128)}return B},iF=function(e){const B=[];let C=0,t=0;for(;C<e.length;){const n=e[C++];if(n<128)B[t++]=String.fromCharCode(n);else if(n>191&&n<224){const r=e[C++];B[t++]=String.fromCharCode((n&31)<<6|r&63)}else if(n>239&&n<365){const r=e[C++],i=e[C++],s=e[C++],a=((n&7)<<18|(r&63)<<12|(i&63)<<6|s&63)-65536;B[t++]=String.fromCharCode(55296+(a>>10)),B[t++]=String.fromCharCode(56320+(a&1023))}else{const r=e[C++],i=e[C++];B[t++]=String.fromCharCode((n&15)<<12|(r&63)<<6|i&63)}}return B.join("")},Lf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,B){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const C=B?this.byteToCharMapWebSafe_:this.byteToCharMap_,t=[];for(let n=0;n<e.length;n+=3){const r=e[n],i=n+1<e.length,s=i?e[n+1]:0,a=n+2<e.length,o=a?e[n+2]:0,c=r>>2,l=(r&3)<<4|s>>4;let u=(s&15)<<2|o>>6,m=o&63;a||(m=64,i||(u=64)),t.push(C[c],C[l],C[u],C[m])}return t.join("")},encodeString(e,B){return this.HAS_NATIVE_SUPPORT&&!B?btoa(e):this.encodeByteArray(Bv(e),B)},decodeString(e,B){return this.HAS_NATIVE_SUPPORT&&!B?atob(e):iF(this.decodeStringToByteArray(e,B))},decodeStringToByteArray(e,B){this.init_();const C=B?this.charToByteMapWebSafe_:this.charToByteMap_,t=[];for(let n=0;n<e.length;){const r=C[e.charAt(n++)],i=n<e.length?C[e.charAt(n)]:0;++n;const s=n<e.length?C[e.charAt(n)]:64;++n;const a=n<e.length?C[e.charAt(n)]:64;if(++n,r==null||i==null||s==null||a==null)throw new sF;const o=r<<2|i>>4;if(t.push(o),s!==64){const c=i<<4&240|s>>2;if(t.push(c),a!==64){const l=s<<6&192|a;t.push(l)}}}return t},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class sF extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ev=function(e){const B=Bv(e);return Lf.encodeByteArray(B,!0)},Fo=function(e){return ev(e).replace(/\./g,"")},No=function(e){try{return Lf.decodeString(e,!0)}catch(B){console.error("base64Decode failed: ",B)}return null};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function aF(e){return Cv(void 0,e)}function Cv(e,B){if(!(B instanceof Object))return B;switch(B.constructor){case Date:const C=B;return new Date(C.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return B}for(const C in B)!B.hasOwnProperty(C)||!oF(C)||(e[C]=Cv(e[C],B[C]));return e}function oF(e){return e!=="__proto__"}/**
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
*/function lF(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
*/const cF=()=>lF().__FIREBASE_DEFAULTS__,uF=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},dF=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const B=e&&No(e[1]);return B&&JSON.parse(B)},Tf=()=>{try{return cF()||uF()||dF()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},tv=e=>{var B,C;return(C=(B=Tf())===null||B===void 0?void 0:B.emulatorHosts)===null||C===void 0?void 0:C[e]},fF=e=>{const B=tv(e);if(!B)return;const C=B.lastIndexOf(":");if(C<=0||C+1===B.length)throw new Error(`Invalid host ${B} with no separate hostname and port!`);const t=parseInt(B.substring(C+1),10);return B[0]==="["?[B.substring(1,C-1),t]:[B.substring(0,C),t]},nv=()=>{var e;return(e=Tf())===null||e===void 0?void 0:e.config},rv=e=>{var B;return(B=Tf())===null||B===void 0?void 0:B[`_${e}`]};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ol{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((B,C)=>{this.resolve=B,this.reject=C})}wrapCallback(B){return(C,t)=>{C?this.reject(C):this.resolve(t),typeof B=="function"&&(this.promise.catch(()=>{}),B.length===1?B(C):B(C,t))}}}/**
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
*/function hF(e,B){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const C={alg:"none",type:"JWT"},t=B||"demo-project",n=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${t}`,aud:t,iat:n,exp:n+3600,auth_time:n,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),s="";return[Fo(JSON.stringify(C)),Fo(JSON.stringify(i)),s].join(".")}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function qB(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qB())}function iv(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function sv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pF(){const e=qB();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function av(){return $A.NODE_ADMIN===!0}function ov(){try{return typeof indexedDB=="object"}catch{return!1}}function lv(){return new Promise((e,B)=>{try{let C=!0;const t="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(t);n.onsuccess=()=>{n.result.close(),C||self.indexedDB.deleteDatabase(t),e(!0)},n.onupgradeneeded=()=>{C=!1},n.onerror=()=>{var r;B(((r=n.error)===null||r===void 0?void 0:r.message)||"")}}catch(C){B(C)}})}function mF(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const gF="FirebaseError";class vC extends Error{constructor(B,C,t){super(C),this.code=B,this.customData=t,this.name=gF,Object.setPrototypeOf(this,vC.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bn.prototype.create)}}class bn{constructor(B,C,t){this.service=B,this.serviceName=C,this.errors=t}create(B,...C){const t=C[0]||{},n=`${this.service}/${B}`,r=this.errors[B],i=r?bF(r,t):"Error",s=`${this.serviceName}: ${i} (${n}).`;return new vC(n,s,t)}}function bF(e,B){return e.replace(AF,(C,t)=>{const n=B[t];return n!=null?String(n):`<${t}?>`})}const AF=/\{\$([^}]+)}/g;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Gi(e){return JSON.parse(e)}function NB(e){return JSON.stringify(e)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const cv=function(e){let B={},C={},t={},n="";try{const r=e.split(".");B=Gi(No(r[0])||""),C=Gi(No(r[1])||""),n=r[2],t=C.d||{},delete C.d}catch{}return{header:B,claims:C,data:t,signature:n}},vF=function(e){const B=cv(e),C=B.claims;return!!C&&typeof C=="object"&&C.hasOwnProperty("iat")},yF=function(e){const B=cv(e).claims;return typeof B=="object"&&B.admin===!0};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function VC(e,B){return Object.prototype.hasOwnProperty.call(e,B)}function ur(e,B){if(Object.prototype.hasOwnProperty.call(e,B))return e[B]}function R1(e){for(const B in e)if(Object.prototype.hasOwnProperty.call(e,B))return!1;return!0}function Oo(e,B,C){const t={};for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=B.call(C,e[n],n,e));return t}function xi(e,B){if(e===B)return!0;const C=Object.keys(e),t=Object.keys(B);for(const n of C){if(!t.includes(n))return!1;const r=e[n],i=B[n];if(Mp(r)&&Mp(i)){if(!xi(r,i))return!1}else if(r!==i)return!1}for(const n of t)if(!C.includes(n))return!1;return!0}function Mp(e){return e!==null&&typeof e=="object"}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Sr(e){const B=[];for(const[C,t]of Object.entries(e))Array.isArray(t)?t.forEach(n=>{B.push(encodeURIComponent(C)+"="+encodeURIComponent(n))}):B.push(encodeURIComponent(C)+"="+encodeURIComponent(t));return B.length?"&"+B.join("&"):""}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class EF{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let B=1;B<this.blockSize;++B)this.pad_[B]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(B,C){C||(C=0);const t=this.W_;if(typeof B=="string")for(let l=0;l<16;l++)t[l]=B.charCodeAt(C)<<24|B.charCodeAt(C+1)<<16|B.charCodeAt(C+2)<<8|B.charCodeAt(C+3),C+=4;else for(let l=0;l<16;l++)t[l]=B[C]<<24|B[C+1]<<16|B[C+2]<<8|B[C+3],C+=4;for(let l=16;l<80;l++){const u=t[l-3]^t[l-8]^t[l-14]^t[l-16];t[l]=(u<<1|u>>>31)&4294967295}let n=this.chain_[0],r=this.chain_[1],i=this.chain_[2],s=this.chain_[3],a=this.chain_[4],o,c;for(let l=0;l<80;l++){l<40?l<20?(o=s^r&(i^s),c=1518500249):(o=r^i^s,c=1859775393):l<60?(o=r&i|s&(r|i),c=2400959708):(o=r^i^s,c=3395469782);const u=(n<<5|n>>>27)+o+a+c+t[l]&4294967295;a=s,s=i,i=(r<<30|r>>>2)&4294967295,r=n,n=u}this.chain_[0]=this.chain_[0]+n&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+i&4294967295,this.chain_[3]=this.chain_[3]+s&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(B,C){if(B==null)return;C===void 0&&(C=B.length);const t=C-this.blockSize;let n=0;const r=this.buf_;let i=this.inbuf_;for(;n<C;){if(i===0)for(;n<=t;)this.compress_(B,n),n+=this.blockSize;if(typeof B=="string"){for(;n<C;)if(r[i]=B.charCodeAt(n),++i,++n,i===this.blockSize){this.compress_(r),i=0;break}}else for(;n<C;)if(r[i]=B[n],++i,++n,i===this.blockSize){this.compress_(r),i=0;break}}this.inbuf_=i,this.total_+=C}digest(){const B=[];let C=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let n=this.blockSize-1;n>=56;n--)this.buf_[n]=C&255,C/=256;this.compress_(this.buf_);let t=0;for(let n=0;n<5;n++)for(let r=24;r>=0;r-=8)B[t]=this.chain_[n]>>r&255,++t;return B}}function IF(e,B){const C=new SF(e,B);return C.subscribe.bind(C)}class SF{constructor(B,C){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=C,this.task.then(()=>{B(this)}).catch(t=>{this.error(t)})}next(B){this.forEachObserver(C=>{C.next(B)})}error(B){this.forEachObserver(C=>{C.error(B)}),this.close(B)}complete(){this.forEachObserver(B=>{B.complete()}),this.close()}subscribe(B,C,t){let n;if(B===void 0&&C===void 0&&t===void 0)throw new Error("Missing Observer.");wF(B,["next","error","complete"])?n=B:n={next:B,error:C,complete:t},n.next===void 0&&(n.next=Uc),n.error===void 0&&(n.error=Uc),n.complete===void 0&&(n.complete=Uc);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch{}}),this.observers.push(n),r}unsubscribeOne(B){this.observers===void 0||this.observers[B]===void 0||(delete this.observers[B],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(B){if(!this.finalized)for(let C=0;C<this.observers.length;C++)this.sendOne(C,B)}sendOne(B,C){this.task.then(()=>{if(this.observers!==void 0&&this.observers[B]!==void 0)try{C(this.observers[B])}catch(t){typeof console<"u"&&console.error&&console.error(t)}})}close(B){this.finalized||(this.finalized=!0,B!==void 0&&(this.finalError=B),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wF(e,B){if(typeof e!="object"||e===null)return!1;for(const C of B)if(C in e&&typeof e[C]=="function")return!0;return!1}function Uc(){}function xf(e,B){return`${e} failed: ${B} argument `}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const DF=function(e){const B=[];let C=0;for(let t=0;t<e.length;t++){let n=e.charCodeAt(t);if(n>=55296&&n<=56319){const r=n-55296;t++,k(t<e.length,"Surrogate pair missing trail surrogate.");const i=e.charCodeAt(t)-56320;n=65536+(r<<10)+i}n<128?B[C++]=n:n<2048?(B[C++]=n>>6|192,B[C++]=n&63|128):n<65536?(B[C++]=n>>12|224,B[C++]=n>>6&63|128,B[C++]=n&63|128):(B[C++]=n>>18|240,B[C++]=n>>12&63|128,B[C++]=n>>6&63|128,B[C++]=n&63|128)}return B},Rl=function(e){let B=0;for(let C=0;C<e.length;C++){const t=e.charCodeAt(C);t<128?B++:t<2048?B+=2:t>=55296&&t<=56319?(B+=4,C++):B+=3}return B};/**
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
*/const kF=1e3,PF=2,FF=4*60*60*1e3,NF=.5;function Lp(e,B=kF,C=PF){const t=B*Math.pow(C,e),n=Math.round(NF*t*(Math.random()-.5)*2);return Math.min(FF,t+n)}/**
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
*/function ge(e){return e&&e._delegate?e._delegate:e}class rC{constructor(B,C,t){this.name=B,this.instanceFactory=C,this.type=t,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(B){return this.instantiationMode=B,this}setMultipleInstances(B){return this.multipleInstances=B,this}setServiceProps(B){return this.serviceProps=B,this}setInstanceCreatedCallback(B){return this.onInstanceCreated=B,this}}/**
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
*/const Gt="[DEFAULT]";/**
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
*/class OF{constructor(B,C){this.name=B,this.container=C,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(B){const C=this.normalizeInstanceIdentifier(B);if(!this.instancesDeferred.has(C)){const t=new Ol;if(this.instancesDeferred.set(C,t),this.isInitialized(C)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:C});n&&t.resolve(n)}catch{}}return this.instancesDeferred.get(C).promise}getImmediate(B){var C;const t=this.normalizeInstanceIdentifier(B==null?void 0:B.identifier),n=(C=B==null?void 0:B.optional)!==null&&C!==void 0?C:!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(n)return null;throw r}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(B){if(B.name!==this.name)throw Error(`Mismatching Component ${B.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=B,!!this.shouldAutoInitialize()){if(HF(B))try{this.getOrInitializeService({instanceIdentifier:Gt})}catch{}for(const[C,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(C);try{const r=this.getOrInitializeService({instanceIdentifier:n});t.resolve(r)}catch{}}}}clearInstance(B=Gt){this.instancesDeferred.delete(B),this.instancesOptions.delete(B),this.instances.delete(B)}async delete(){const B=Array.from(this.instances.values());await Promise.all([...B.filter(C=>"INTERNAL"in C).map(C=>C.INTERNAL.delete()),...B.filter(C=>"_delete"in C).map(C=>C._delete())])}isComponentSet(){return this.component!=null}isInitialized(B=Gt){return this.instances.has(B)}getOptions(B=Gt){return this.instancesOptions.get(B)||{}}initialize(B={}){const{options:C={}}=B,t=this.normalizeInstanceIdentifier(B.instanceIdentifier);if(this.isInitialized(t))throw Error(`${this.name}(${t}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:t,options:C});for(const[r,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(r);t===s&&i.resolve(n)}return n}onInit(B,C){var t;const n=this.normalizeInstanceIdentifier(C),r=(t=this.onInitCallbacks.get(n))!==null&&t!==void 0?t:new Set;r.add(B),this.onInitCallbacks.set(n,r);const i=this.instances.get(n);return i&&B(i,n),()=>{r.delete(B)}}invokeOnInitCallbacks(B,C){const t=this.onInitCallbacks.get(C);if(t)for(const n of t)try{n(B,C)}catch{}}getOrInitializeService({instanceIdentifier:B,options:C={}}){let t=this.instances.get(B);if(!t&&this.component&&(t=this.component.instanceFactory(this.container,{instanceIdentifier:RF(B),options:C}),this.instances.set(B,t),this.instancesOptions.set(B,C),this.invokeOnInitCallbacks(t,B),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,B,t)}catch{}return t||null}normalizeInstanceIdentifier(B=Gt){return this.component?this.component.multipleInstances?B:Gt:B}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RF(e){return e===Gt?void 0:e}function HF(e){return e.instantiationMode==="EAGER"}/**
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
*/class MF{constructor(B){this.name=B,this.providers=new Map}addComponent(B){const C=this.getProvider(B.name);if(C.isComponentSet())throw new Error(`Component ${B.name} has already been registered with ${this.name}`);C.setComponent(B)}addOrOverwriteComponent(B){this.getProvider(B.name).isComponentSet()&&this.providers.delete(B.name),this.addComponent(B)}getProvider(B){if(this.providers.has(B))return this.providers.get(B);const C=new OF(B,this);return this.providers.set(B,C),C}getProviders(){return Array.from(this.providers.values())}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rB;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(rB||(rB={}));const LF={debug:rB.DEBUG,verbose:rB.VERBOSE,info:rB.INFO,warn:rB.WARN,error:rB.ERROR,silent:rB.SILENT},TF=rB.INFO,GF={[rB.DEBUG]:"log",[rB.VERBOSE]:"log",[rB.INFO]:"info",[rB.WARN]:"warn",[rB.ERROR]:"error"},xF=(e,B,...C)=>{if(B<e.logLevel)return;const t=new Date().toISOString(),n=GF[B];if(n)console[n](`[${t}]  ${e.name}:`,...C);else throw new Error(`Attempted to log a message with an invalid logType (value: ${B})`)};class Hl{constructor(B){this.name=B,this._logLevel=TF,this._logHandler=xF,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(B){if(!(B in rB))throw new TypeError(`Invalid value "${B}" assigned to \`logLevel\``);this._logLevel=B}setLogLevel(B){this._logLevel=typeof B=="string"?LF[B]:B}get logHandler(){return this._logHandler}set logHandler(B){if(typeof B!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=B}get userLogHandler(){return this._userLogHandler}set userLogHandler(B){this._userLogHandler=B}debug(...B){this._userLogHandler&&this._userLogHandler(this,rB.DEBUG,...B),this._logHandler(this,rB.DEBUG,...B)}log(...B){this._userLogHandler&&this._userLogHandler(this,rB.VERBOSE,...B),this._logHandler(this,rB.VERBOSE,...B)}info(...B){this._userLogHandler&&this._userLogHandler(this,rB.INFO,...B),this._logHandler(this,rB.INFO,...B)}warn(...B){this._userLogHandler&&this._userLogHandler(this,rB.WARN,...B),this._logHandler(this,rB.WARN,...B)}error(...B){this._userLogHandler&&this._userLogHandler(this,rB.ERROR,...B),this._logHandler(this,rB.ERROR,...B)}}const KF=(e,B)=>B.some(C=>e instanceof C);let Tp,Gp;function QF(){return Tp||(Tp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function JF(){return Gp||(Gp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uv=new WeakMap,H1=new WeakMap,dv=new WeakMap,Vc=new WeakMap,Kf=new WeakMap;function UF(e){const B=new Promise((C,t)=>{const n=()=>{e.removeEventListener("success",r),e.removeEventListener("error",i)},r=()=>{C(mt(e.result)),n()},i=()=>{t(e.error),n()};e.addEventListener("success",r),e.addEventListener("error",i)});return B.then(C=>{C instanceof IDBCursor&&uv.set(C,e)}).catch(()=>{}),Kf.set(B,e),B}function VF(e){if(H1.has(e))return;const B=new Promise((C,t)=>{const n=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",i),e.removeEventListener("abort",i)},r=()=>{C(),n()},i=()=>{t(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",r),e.addEventListener("error",i),e.addEventListener("abort",i)});H1.set(e,B)}let M1={get(e,B,C){if(e instanceof IDBTransaction){if(B==="done")return H1.get(e);if(B==="objectStoreNames")return e.objectStoreNames||dv.get(e);if(B==="store")return C.objectStoreNames[1]?void 0:C.objectStore(C.objectStoreNames[0])}return mt(e[B])},set(e,B,C){return e[B]=C,!0},has(e,B){return e instanceof IDBTransaction&&(B==="done"||B==="store")?!0:B in e}};function WF(e){M1=e(M1)}function jF(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(B,...C){const t=e.call(Wc(this),B,...C);return dv.set(t,B.sort?B.sort():[B]),mt(t)}:JF().includes(e)?function(...B){return e.apply(Wc(this),B),mt(uv.get(this))}:function(...B){return mt(e.apply(Wc(this),B))}}function YF(e){return typeof e=="function"?jF(e):(e instanceof IDBTransaction&&VF(e),KF(e,QF())?new Proxy(e,M1):e)}function mt(e){if(e instanceof IDBRequest)return UF(e);if(Vc.has(e))return Vc.get(e);const B=YF(e);return B!==e&&(Vc.set(e,B),Kf.set(B,e)),B}const Wc=e=>Kf.get(e);function XF(e,B,{blocked:C,upgrade:t,blocking:n,terminated:r}={}){const i=indexedDB.open(e,B),s=mt(i);return t&&i.addEventListener("upgradeneeded",a=>{t(mt(i.result),a.oldVersion,a.newVersion,mt(i.transaction),a)}),C&&i.addEventListener("blocked",a=>C(a.oldVersion,a.newVersion,a)),s.then(a=>{r&&a.addEventListener("close",()=>r()),n&&a.addEventListener("versionchange",o=>n(o.oldVersion,o.newVersion,o))}).catch(()=>{}),s}const ZF=["get","getKey","getAll","getAllKeys","count"],qF=["put","add","delete","clear"],jc=new Map;function xp(e,B){if(!(e instanceof IDBDatabase&&!(B in e)&&typeof B=="string"))return;if(jc.get(B))return jc.get(B);const C=B.replace(/FromIndex$/,""),t=B!==C,n=qF.includes(C);if(!(C in(t?IDBIndex:IDBObjectStore).prototype)||!(n||ZF.includes(C)))return;const r=async function(i,...s){const a=this.transaction(i,n?"readwrite":"readonly");let o=a.store;return t&&(o=o.index(s.shift())),(await Promise.all([o[C](...s),n&&a.done]))[0]};return jc.set(B,r),r}WF(e=>({...e,get:(B,C,t)=>xp(B,C)||e.get(B,C,t),has:(B,C)=>!!xp(B,C)||e.has(B,C)}));/**
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
*/class zF{constructor(B){this.container=B}getPlatformInfoString(){return this.container.getProviders().map(B=>{if(_F(B)){const C=B.getImmediate();return`${C.library}/${C.version}`}else return null}).filter(B=>B).join(" ")}}function _F(e){const B=e.getComponent();return(B==null?void 0:B.type)==="VERSION"}const L1="@firebase/app",Kp="0.9.13";/**
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
*/const sn=new Hl("@firebase/app"),$F="@firebase/app-compat",BN="@firebase/analytics-compat",eN="@firebase/analytics",CN="@firebase/app-check-compat",tN="@firebase/app-check",nN="@firebase/auth",rN="@firebase/auth-compat",iN="@firebase/database",sN="@firebase/database-compat",aN="@firebase/functions",oN="@firebase/functions-compat",lN="@firebase/installations",cN="@firebase/installations-compat",uN="@firebase/messaging",dN="@firebase/messaging-compat",fN="@firebase/performance",hN="@firebase/performance-compat",pN="@firebase/remote-config",mN="@firebase/remote-config-compat",gN="@firebase/storage",bN="@firebase/storage-compat",AN="@firebase/firestore",vN="@firebase/firestore-compat",yN="firebase",EN="9.23.0";/**
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
*/const T1="[DEFAULT]",IN={[L1]:"fire-core",[$F]:"fire-core-compat",[eN]:"fire-analytics",[BN]:"fire-analytics-compat",[tN]:"fire-app-check",[CN]:"fire-app-check-compat",[nN]:"fire-auth",[rN]:"fire-auth-compat",[iN]:"fire-rtdb",[sN]:"fire-rtdb-compat",[aN]:"fire-fn",[oN]:"fire-fn-compat",[lN]:"fire-iid",[cN]:"fire-iid-compat",[uN]:"fire-fcm",[dN]:"fire-fcm-compat",[fN]:"fire-perf",[hN]:"fire-perf-compat",[pN]:"fire-rc",[mN]:"fire-rc-compat",[gN]:"fire-gcs",[bN]:"fire-gcs-compat",[AN]:"fire-fst",[vN]:"fire-fst-compat","fire-js":"fire-js",[yN]:"fire-js-all"};/**
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
*/const Ro=new Map,G1=new Map;function SN(e,B){try{e.container.addComponent(B)}catch(C){sn.debug(`Component ${B.name} failed to register with FirebaseApp ${e.name}`,C)}}function pC(e){const B=e.name;if(G1.has(B))return sn.debug(`There were multiple attempts to register component ${B}.`),!1;G1.set(B,e);for(const C of Ro.values())SN(C,e);return!0}function An(e,B){const C=e.container.getProvider("heartbeat").getImmediate({optional:!0});return C&&C.triggerHeartbeat(),e.container.getProvider(B)}/**
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
*/const wN={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},gt=new bn("app","Firebase",wN);/**
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
*/class DN{constructor(B,C,t){this._isDeleted=!1,this._options=Object.assign({},B),this._config=Object.assign({},C),this._name=C.name,this._automaticDataCollectionEnabled=C.automaticDataCollectionEnabled,this._container=t,this.container.addComponent(new rC("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(B){this.checkDestroyed(),this._automaticDataCollectionEnabled=B}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(B){this._isDeleted=B}checkDestroyed(){if(this.isDeleted)throw gt.create("app-deleted",{appName:this._name})}}/**
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
*/const wr=EN;function Ml(e,B={}){let C=e;typeof B!="object"&&(B={name:B});const t=Object.assign({name:T1,automaticDataCollectionEnabled:!1},B),n=t.name;if(typeof n!="string"||!n)throw gt.create("bad-app-name",{appName:String(n)});if(C||(C=nv()),!C)throw gt.create("no-options");const r=Ro.get(n);if(r){if(xi(C,r.options)&&xi(t,r.config))return r;throw gt.create("duplicate-app",{appName:n})}const i=new MF(n);for(const a of G1.values())i.addComponent(a);const s=new DN(C,t,i);return Ro.set(n,s),s}function Qf(e=T1){const B=Ro.get(e);if(!B&&e===T1&&nv())return Ml();if(!B)throw gt.create("no-app",{appName:e});return B}function xe(e,B,C){var t;let n=(t=IN[e])!==null&&t!==void 0?t:e;C&&(n+=`-${C}`);const r=n.match(/\s|\//),i=B.match(/\s|\//);if(r||i){const s=[`Unable to register library "${n}" with version "${B}":`];r&&s.push(`library name "${n}" contains illegal characters (whitespace or "/")`),r&&i&&s.push("and"),i&&s.push(`version name "${B}" contains illegal characters (whitespace or "/")`),sn.warn(s.join(" "));return}pC(new rC(`${n}-version`,()=>({library:n,version:B}),"VERSION"))}/**
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
*/const kN="firebase-heartbeat-database",PN=1,Ki="firebase-heartbeat-store";let Yc=null;function fv(){return Yc||(Yc=XF(kN,PN,{upgrade:(e,B)=>{switch(B){case 0:e.createObjectStore(Ki)}}}).catch(e=>{throw gt.create("idb-open",{originalErrorMessage:e.message})})),Yc}async function FN(e){try{return await(await fv()).transaction(Ki).objectStore(Ki).get(hv(e))}catch(B){if(B instanceof vC)sn.warn(B.message);else{const C=gt.create("idb-get",{originalErrorMessage:B==null?void 0:B.message});sn.warn(C.message)}}}async function Qp(e,B){try{const C=(await fv()).transaction(Ki,"readwrite");await C.objectStore(Ki).put(B,hv(e)),await C.done}catch(C){if(C instanceof vC)sn.warn(C.message);else{const t=gt.create("idb-set",{originalErrorMessage:C==null?void 0:C.message});sn.warn(t.message)}}}function hv(e){return`${e.name}!${e.options.appId}`}/**
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
*/const NN=1024,ON=30*24*60*60*1e3;class RN{constructor(B){this.container=B,this._heartbeatsCache=null;const C=this.container.getProvider("app").getImmediate();this._storage=new MN(C),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){const B=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),C=Jp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===C||this._heartbeatsCache.heartbeats.some(t=>t.date===C)))return this._heartbeatsCache.heartbeats.push({date:C,agent:B}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(t=>{const n=new Date(t.date).valueOf();return Date.now()-n<=ON}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const B=Jp(),{heartbeatsToSend:C,unsentEntries:t}=HN(this._heartbeatsCache.heartbeats),n=Fo(JSON.stringify({version:2,heartbeats:C}));return this._heartbeatsCache.lastSentHeartbeatDate=B,t.length>0?(this._heartbeatsCache.heartbeats=t,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function Jp(){return new Date().toISOString().substring(0,10)}function HN(e,B=NN){const C=[];let t=e.slice();for(const n of e){const r=C.find(i=>i.agent===n.agent);if(r){if(r.dates.push(n.date),Up(C)>B){r.dates.pop();break}}else if(C.push({agent:n.agent,dates:[n.date]}),Up(C)>B){C.pop();break}t=t.slice(1)}return{heartbeatsToSend:C,unsentEntries:t}}class MN{constructor(B){this.app=B,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ov()?lv().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await FN(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(B){var C;if(await this._canUseIndexedDBPromise){const t=await this.read();return Qp(this.app,{lastSentHeartbeatDate:(C=B.lastSentHeartbeatDate)!==null&&C!==void 0?C:t.lastSentHeartbeatDate,heartbeats:B.heartbeats})}else return}async add(B){var C;if(await this._canUseIndexedDBPromise){const t=await this.read();return Qp(this.app,{lastSentHeartbeatDate:(C=B.lastSentHeartbeatDate)!==null&&C!==void 0?C:t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...B.heartbeats]})}else return}}function Up(e){return Fo(JSON.stringify({version:2,heartbeats:e})).length}/**
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
*/function LN(e){pC(new rC("platform-logger",B=>new zF(B),"PRIVATE")),pC(new rC("heartbeat",B=>new RN(B),"PRIVATE")),xe(L1,Kp,e),xe(L1,Kp,"esm2017"),xe("fire-js","")}LN("");var TN="firebase",GN="9.23.0";/**
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
*/xe(TN,GN,"app");const xN=(e,B)=>B.some(C=>e instanceof C);let Vp,Wp;function KN(){return Vp||(Vp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function QN(){return Wp||(Wp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pv=new WeakMap,x1=new WeakMap,mv=new WeakMap,Xc=new WeakMap,Jf=new WeakMap;function JN(e){const B=new Promise((C,t)=>{const n=()=>{e.removeEventListener("success",r),e.removeEventListener("error",i)},r=()=>{C(bt(e.result)),n()},i=()=>{t(e.error),n()};e.addEventListener("success",r),e.addEventListener("error",i)});return B.then(C=>{C instanceof IDBCursor&&pv.set(C,e)}).catch(()=>{}),Jf.set(B,e),B}function UN(e){if(x1.has(e))return;const B=new Promise((C,t)=>{const n=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",i),e.removeEventListener("abort",i)},r=()=>{C(),n()},i=()=>{t(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",r),e.addEventListener("error",i),e.addEventListener("abort",i)});x1.set(e,B)}let K1={get(e,B,C){if(e instanceof IDBTransaction){if(B==="done")return x1.get(e);if(B==="objectStoreNames")return e.objectStoreNames||mv.get(e);if(B==="store")return C.objectStoreNames[1]?void 0:C.objectStore(C.objectStoreNames[0])}return bt(e[B])},set(e,B,C){return e[B]=C,!0},has(e,B){return e instanceof IDBTransaction&&(B==="done"||B==="store")?!0:B in e}};function VN(e){K1=e(K1)}function WN(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(B,...C){const t=e.call(Zc(this),B,...C);return mv.set(t,B.sort?B.sort():[B]),bt(t)}:QN().includes(e)?function(...B){return e.apply(Zc(this),B),bt(pv.get(this))}:function(...B){return bt(e.apply(Zc(this),B))}}function jN(e){return typeof e=="function"?WN(e):(e instanceof IDBTransaction&&UN(e),xN(e,KN())?new Proxy(e,K1):e)}function bt(e){if(e instanceof IDBRequest)return JN(e);if(Xc.has(e))return Xc.get(e);const B=jN(e);return B!==e&&(Xc.set(e,B),Jf.set(B,e)),B}const Zc=e=>Jf.get(e);function YN(e,B,{blocked:C,upgrade:t,blocking:n,terminated:r}={}){const i=indexedDB.open(e,B),s=bt(i);return t&&i.addEventListener("upgradeneeded",a=>{t(bt(i.result),a.oldVersion,a.newVersion,bt(i.transaction))}),C&&i.addEventListener("blocked",()=>C()),s.then(a=>{r&&a.addEventListener("close",()=>r()),n&&a.addEventListener("versionchange",()=>n())}).catch(()=>{}),s}const XN=["get","getKey","getAll","getAllKeys","count"],ZN=["put","add","delete","clear"],qc=new Map;function jp(e,B){if(!(e instanceof IDBDatabase&&!(B in e)&&typeof B=="string"))return;if(qc.get(B))return qc.get(B);const C=B.replace(/FromIndex$/,""),t=B!==C,n=ZN.includes(C);if(!(C in(t?IDBIndex:IDBObjectStore).prototype)||!(n||XN.includes(C)))return;const r=async function(i,...s){const a=this.transaction(i,n?"readwrite":"readonly");let o=a.store;return t&&(o=o.index(s.shift())),(await Promise.all([o[C](...s),n&&a.done]))[0]};return qc.set(B,r),r}VN(e=>({...e,get:(B,C,t)=>jp(B,C)||e.get(B,C,t),has:(B,C)=>!!jp(B,C)||e.has(B,C)}));const gv="@firebase/installations",Uf="0.6.4";/**
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
*/const bv=1e4,Av=`w:${Uf}`,vv="FIS_v2",qN="https://firebaseinstallations.googleapis.com/v1",zN=60*60*1e3,_N="installations",$N="Installations";/**
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
*/const BO={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},an=new bn(_N,$N,BO);function yv(e){return e instanceof vC&&e.code.includes("request-failed")}/**
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
*/function Ev({projectId:e}){return`${qN}/projects/${e}/installations`}function Iv(e){return{token:e.token,requestStatus:2,expiresIn:CO(e.expiresIn),creationTime:Date.now()}}async function Sv(e,B){const C=(await B.json()).error;return an.create("request-failed",{requestName:e,serverCode:C.code,serverMessage:C.message,serverStatus:C.status})}function wv({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function eO(e,{refreshToken:B}){const C=wv(e);return C.append("Authorization",tO(B)),C}async function Dv(e){const B=await e();return B.status>=500&&B.status<600?e():B}function CO(e){return Number(e.replace("s","000"))}function tO(e){return`${vv} ${e}`}/**
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
*/async function nO({appConfig:e,heartbeatServiceProvider:B},{fid:C}){const t=Ev(e),n=wv(e),r=B.getImmediate({optional:!0});if(r){const o=await r.getHeartbeatsHeader();o&&n.append("x-firebase-client",o)}const i={fid:C,authVersion:vv,appId:e.appId,sdkVersion:Av},s={method:"POST",headers:n,body:JSON.stringify(i)},a=await Dv(()=>fetch(t,s));if(a.ok){const o=await a.json();return{fid:o.fid||C,registrationStatus:2,refreshToken:o.refreshToken,authToken:Iv(o.authToken)}}else throw await Sv("Create Installation",a)}/**
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
*/const Pv=new Map;function Fv(e,B){const C=Ll(e);Nv(C,B),oO(C,B)}function Nv(e,B){const C=Pv.get(e);if(C)for(const t of C)t(B)}function oO(e,B){const C=lO();C&&C.postMessage({key:e,fid:B}),cO()}let Vt=null;function lO(){return!Vt&&"BroadcastChannel"in self&&(Vt=new BroadcastChannel("[Firebase] FID Change"),Vt.onmessage=e=>{Nv(e.data.key,e.data.fid)}),Vt}function cO(){Pv.size===0&&Vt&&(Vt.close(),Vt=null)}/**
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
*/const uO="firebase-installations-database",dO=1,on="firebase-installations-store";let zc=null;function Vf(){return zc||(zc=YN(uO,dO,{upgrade:(e,B)=>{switch(B){case 0:e.createObjectStore(on)}}})),zc}async function Ho(e,B){const C=Ll(e),t=(await Vf()).transaction(on,"readwrite"),n=t.objectStore(on),r=await n.get(C);return await n.put(B,C),await t.done,(!r||r.fid!==B.fid)&&Fv(e,B.fid),B}async function Ov(e){const B=Ll(e),C=(await Vf()).transaction(on,"readwrite");await C.objectStore(on).delete(B),await C.done}async function Tl(e,B){const C=Ll(e),t=(await Vf()).transaction(on,"readwrite"),n=t.objectStore(on),r=await n.get(C),i=B(r);return i===void 0?await n.delete(C):await n.put(i,C),await t.done,i&&(!r||r.fid!==i.fid)&&Fv(e,i.fid),i}/**
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
*/async function Wf(e){let B;const C=await Tl(e.appConfig,t=>{const n=fO(t),r=hO(e,n);return B=r.registrationPromise,r.installationEntry});return C.fid===Q1?{installationEntry:await B}:{installationEntry:C,registrationPromise:B}}function fO(e){const B=e||{fid:sO(),registrationStatus:0};return Rv(B)}function hO(e,B){if(B.registrationStatus===0){if(!navigator.onLine){const n=Promise.reject(an.create("app-offline"));return{installationEntry:B,registrationPromise:n}}const C={fid:B.fid,registrationStatus:1,registrationTime:Date.now()},t=pO(e,C);return{installationEntry:C,registrationPromise:t}}else return B.registrationStatus===1?{installationEntry:B,registrationPromise:mO(e)}:{installationEntry:B}}async function pO(e,B){try{const C=await nO(e,B);return Ho(e.appConfig,C)}catch(C){throw yv(C)&&C.customData.serverCode===409?await Ov(e.appConfig):await Ho(e.appConfig,{fid:B.fid,registrationStatus:0}),C}}async function mO(e){let B=await Yp(e.appConfig);for(;B.registrationStatus===1;)await kv(100),B=await Yp(e.appConfig);if(B.registrationStatus===0){const{installationEntry:C,registrationPromise:t}=await Wf(e);return t||C}return B}function Yp(e){return Tl(e,B=>{if(!B)throw an.create("installation-not-found");return Rv(B)})}function Rv(e){return gO(e)?{fid:e.fid,registrationStatus:0}:e}function gO(e){return e.registrationStatus===1&&e.registrationTime+bv<Date.now()}/**
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
*/async function bO({appConfig:e,heartbeatServiceProvider:B},C){const t=AO(e,C),n=eO(e,C),r=B.getImmediate({optional:!0});if(r){const o=await r.getHeartbeatsHeader();o&&n.append("x-firebase-client",o)}const i={installation:{sdkVersion:Av,appId:e.appId}},s={method:"POST",headers:n,body:JSON.stringify(i)},a=await Dv(()=>fetch(t,s));if(a.ok){const o=await a.json();return Iv(o)}else throw await Sv("Generate Auth Token",a)}function AO(e,{fid:B}){return`${Ev(e)}/${B}/authTokens:generate`}/**
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
*/async function jf(e,B=!1){let C;const t=await Tl(e.appConfig,n=>{if(!Hv(n))throw an.create("not-registered");const r=n.authToken;if(!B&&EO(r))return n;if(r.requestStatus===1)return C=vO(e,B),n;{if(!navigator.onLine)throw an.create("app-offline");const i=SO(n);return C=yO(e,i),i}});return C?await C:t.authToken}async function vO(e,B){let C=await Xp(e.appConfig);for(;C.authToken.requestStatus===1;)await kv(100),C=await Xp(e.appConfig);const t=C.authToken;return t.requestStatus===0?jf(e,B):t}function Xp(e){return Tl(e,B=>{if(!Hv(B))throw an.create("not-registered");const C=B.authToken;return wO(C)?Object.assign(Object.assign({},B),{authToken:{requestStatus:0}}):B})}async function yO(e,B){try{const C=await bO(e,B),t=Object.assign(Object.assign({},B),{authToken:C});return await Ho(e.appConfig,t),C}catch(C){if(yv(C)&&(C.customData.serverCode===401||C.customData.serverCode===404))await Ov(e.appConfig);else{const t=Object.assign(Object.assign({},B),{authToken:{requestStatus:0}});await Ho(e.appConfig,t)}throw C}}function Hv(e){return e!==void 0&&e.registrationStatus===2}function EO(e){return e.requestStatus===2&&!IO(e)}function IO(e){const B=Date.now();return B<e.creationTime||e.creationTime+e.expiresIn<B+zN}function SO(e){const B={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:B})}function wO(e){return e.requestStatus===1&&e.requestTime+bv<Date.now()}/**
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
*/async function DO(e){const B=e,{installationEntry:C,registrationPromise:t}=await Wf(B);return t?t.catch(console.error):jf(B).catch(console.error),C.fid}/**
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
*/async function kO(e,B=!1){const C=e;return await PO(C),(await jf(C,B)).token}async function PO(e){const{registrationPromise:B}=await Wf(e);B&&await B}/**
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
*/function FO(e){if(!e||!e.options)throw _c("App Configuration");if(!e.name)throw _c("App Name");const B=["projectId","apiKey","appId"];for(const C of B)if(!e.options[C])throw _c(C);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function _c(e){return an.create("missing-app-config-values",{valueName:e})}/**
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
*/const Mv="installations",NO="installations-internal",OO=e=>{const B=e.getProvider("app").getImmediate(),C=FO(B),t=An(B,"heartbeat");return{app:B,appConfig:C,heartbeatServiceProvider:t,_delete:()=>Promise.resolve()}},RO=e=>{const B=e.getProvider("app").getImmediate(),C=An(B,Mv).getImmediate();return{getId:()=>DO(C),getToken:t=>kO(C,t)}};function HO(){pC(new rC(Mv,OO,"PUBLIC")),pC(new rC(NO,RO,"PRIVATE"))}HO();xe(gv,Uf);xe(gv,Uf,"esm2017");/**
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
*/const Mo="analytics",MO="firebase_id",LO="origin",TO=60*1e3,GO="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Yf="https://www.googletagmanager.com/gtag/js";/**
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
*/const he=new Hl("@firebase/analytics");/**
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
*/function KO(e){if(!e.startsWith(Yf)){const B=Se.create("invalid-gtag-resource",{gtagURL:e});return he.warn(B.message),""}return e}function Lv(e){return Promise.all(e.map(B=>B.catch(C=>C)))}function QO(e,B){let C;return window.trustedTypes&&(C=window.trustedTypes.createPolicy(e,B)),C}function JO(e,B){const C=QO("firebase-js-sdk-policy",{createScriptURL:KO}),t=document.createElement("script"),n=`${Yf}?l=${e}&id=${B}`;t.src=C?C==null?void 0:C.createScriptURL(n):n,t.async=!0,document.head.appendChild(t)}function UO(e){let B=[];return Array.isArray(window[e])?B=window[e]:window[e]=B,B}async function VO(e,B,C,t,n,r){const i=t[n];try{if(i)await B[i];else{const s=(await Lv(C)).find(a=>a.measurementId===n);s&&await B[s.appId]}}catch(s){he.error(s)}e("config",n,r)}async function WO(e,B,C,t,n){try{let r=[];if(n&&n.send_to){let i=n.send_to;Array.isArray(i)||(i=[i]);const s=await Lv(C);for(const a of i){const o=s.find(l=>l.measurementId===a),c=o&&B[o.appId];if(c)r.push(c);else{r=[];break}}}r.length===0&&(r=Object.values(B)),await Promise.all(r),e("event",t,n||{})}catch(r){he.error(r)}}function jO(e,B,C,t){async function n(r,...i){try{if(r==="event"){const[s,a]=i;await WO(e,B,C,s,a)}else if(r==="config"){const[s,a]=i;await VO(e,B,C,t,s,a)}else if(r==="consent"){const[s]=i;e("consent","update",s)}else if(r==="get"){const[s,a,o]=i;e("get",s,a,o)}else if(r==="set"){const[s]=i;e("set",s)}else e(r,...i)}catch(s){he.error(s)}}return n}function YO(e,B,C,t,n){let r=function(...i){window[t].push(arguments)};return window[n]&&typeof window[n]=="function"&&(r=window[n]),window[n]=jO(r,e,B,C),{gtagCore:r,wrappedGtag:window[n]}}function XO(e){const B=window.document.getElementsByTagName("script");for(const C of Object.values(B))if(C.src&&C.src.includes(Yf)&&C.src.includes(e))return C;return null}/**
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
*/const ZO=30,qO=1e3;class zO{constructor(B={},C=qO){this.throttleMetadata=B,this.intervalMillis=C}getThrottleMetadata(B){return this.throttleMetadata[B]}setThrottleMetadata(B,C){this.throttleMetadata[B]=C}deleteThrottleMetadata(B){delete this.throttleMetadata[B]}}const Tv=new zO;function _O(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function $O(e){var B;const{appId:C,apiKey:t}=e,n={method:"GET",headers:_O(t)},r=GO.replace("{app-id}",C),i=await fetch(r,n);if(i.status!==200&&i.status!==304){let s="";try{const a=await i.json();!((B=a.error)===null||B===void 0)&&B.message&&(s=a.error.message)}catch{}throw Se.create("config-fetch-failed",{httpStatus:i.status,responseMessage:s})}return i.json()}async function B6(e,B=Tv,C){const{appId:t,apiKey:n,measurementId:r}=e.options;if(!t)throw Se.create("no-app-id");if(!n){if(r)return{measurementId:r,appId:t};throw Se.create("no-api-key")}const i=B.getThrottleMetadata(t)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new t6;return setTimeout(async()=>{s.abort()},C!==void 0?C:TO),Gv({appId:t,apiKey:n,measurementId:r},i,s,B)}async function Gv(e,{throttleEndTimeMillis:B,backoffCount:C},t,n=Tv){var r;const{appId:i,measurementId:s}=e;try{await e6(t,B)}catch(a){if(s)return he.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${a==null?void 0:a.message}]`),{appId:i,measurementId:s};throw a}try{const a=await $O(e);return n.deleteThrottleMetadata(i),a}catch(a){const o=a;if(!C6(o)){if(n.deleteThrottleMetadata(i),s)return he.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${o==null?void 0:o.message}]`),{appId:i,measurementId:s};throw a}const c=Number((r=o==null?void 0:o.customData)===null||r===void 0?void 0:r.httpStatus)===503?Lp(C,n.intervalMillis,ZO):Lp(C,n.intervalMillis),l={throttleEndTimeMillis:Date.now()+c,backoffCount:C+1};return n.setThrottleMetadata(i,l),he.debug(`Calling attemptFetch again in ${c} millis`),Gv(e,l,t,n)}}function e6(e,B){return new Promise((C,t)=>{const n=Math.max(B-Date.now(),0),r=setTimeout(C,n);e.addEventListener(()=>{clearTimeout(r),t(Se.create("fetch-throttle",{throttleEndTimeMillis:B}))})})}function C6(e){if(!(e instanceof vC)||!e.customData)return!1;const B=Number(e.customData.httpStatus);return B===429||B===500||B===503||B===504}class t6{constructor(){this.listeners=[]}addEventListener(B){this.listeners.push(B)}abort(){this.listeners.forEach(B=>B())}}async function n6(e,B,C,t,n){if(n&&n.global){e("event",C,t);return}else{const r=await B,i=Object.assign(Object.assign({},t),{send_to:r});e("event",C,i)}}/**
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
*/async function r6(){if(ov())try{await lv()}catch(e){return he.warn(Se.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return he.warn(Se.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function i6(e,B,C,t,n,r,i){var s;const a=B6(e);a.then(m=>{C[m.measurementId]=m.appId,e.options.measurementId&&m.measurementId!==e.options.measurementId&&he.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>he.error(m)),B.push(a);const o=r6().then(m=>{if(m)return t.getId()}),[c,l]=await Promise.all([a,o]);XO(r)||JO(r,c.measurementId),n("js",new Date);const u=(s=i==null?void 0:i.config)!==null&&s!==void 0?s:{};return u[LO]="firebase",u.update=!0,l!=null&&(u[MO]=l),n("config",c.measurementId,u),c.measurementId}/**
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
*/class s6{constructor(B){this.app=B}_delete(){return delete ci[this.app.options.appId],Promise.resolve()}}let ci={},Zp=[];const qp={};let $c="dataLayer",a6="gtag",zp,xv,_p=!1;function o6(){const e=[];if(iv()&&e.push("This is a browser extension environment."),mF()||e.push("Cookies are not available."),e.length>0){const B=e.map((t,n)=>`(${n+1}) ${t}`).join(" "),C=Se.create("invalid-analytics-context",{errorInfo:B});he.warn(C.message)}}function l6(e,B,C){o6();const t=e.options.appId;if(!t)throw Se.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)he.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Se.create("no-api-key");if(ci[t]!=null)throw Se.create("already-exists",{id:t});if(!_p){UO($c);const{wrappedGtag:n,gtagCore:r}=YO(ci,Zp,qp,$c,a6);xv=n,zp=r,_p=!0}return ci[t]=i6(e,Zp,qp,B,zp,$c,C),new s6(e)}function Xf(e=Qf()){e=ge(e);const B=An(e,Mo);return B.isInitialized()?B.getImmediate():c6(e)}function c6(e,B={}){const C=An(e,Mo);if(C.isInitialized()){const t=C.getImmediate();if(xi(B,C.getOptions()))return t;throw Se.create("already-initialized")}return C.initialize({options:B})}function u6(e,B,C,t){e=ge(e),n6(xv,ci[e.app.options.appId],B,C,t).catch(n=>he.error(n))}const $p="@firebase/analytics",Bm="0.10.0";function d6(){pC(new rC(Mo,(B,{options:C})=>{const t=B.getProvider("app").getImmediate(),n=B.getProvider("installations-internal").getImmediate();return l6(t,n,C)},"PUBLIC")),pC(new rC("analytics-internal",e,"PRIVATE")),xe($p,Bm),xe($p,Bm,"esm2017");function e(B){try{const C=B.getProvider(Mo).getImmediate();return{logEvent:(t,n,r)=>u6(C,t,n,r)}}catch(C){throw Se.create("interop-component-reg-failed",{reason:C})}}}d6();function Zf(e,B){var C={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&B.indexOf(t)<0&&(C[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)B.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(C[t[n]]=e[t[n]]);return C}function Kv(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const f6=Kv,Qv=new bn("auth","Firebase",Kv());/**
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
*/const Lo=new Hl("@firebase/auth");function h6(e,...B){Lo.logLevel<=rB.WARN&&Lo.warn(`Auth (${wr}): ${e}`,...B)}function Ya(e,...B){Lo.logLevel<=rB.ERROR&&Lo.error(`Auth (${wr}): ${e}`,...B)}/**
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
*/function mC(e,...B){throw qf(e,...B)}function fC(e,...B){return qf(e,...B)}function Jv(e,B,C){const t=Object.assign(Object.assign({},f6()),{[B]:C});return new bn("auth","Firebase",t).create(B,{appName:e.name})}function p6(e,B,C){const t=C;if(!(B instanceof t))throw t.name!==B.constructor.name&&mC(e,"argument-error"),Jv(e,"argument-error",`Type of ${B.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function qf(e,...B){if(typeof e!="string"){const C=B[0],t=[...B.slice(1)];return t[0]&&(t[0].appName=e.name),e._errorFactory.create(C,...t)}return Qv.create(e,...B)}function U(e,B,...C){if(!e)throw qf(B,...C)}function kC(e){const B="INTERNAL ASSERTION FAILED: "+e;throw Ya(B),new Error(B)}function GC(e,B){e||kC(B)}/**
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
*/class fs{constructor(B,C){this.shortDelay=B,this.longDelay=C,GC(C>B,"Short delay should be less than long delay!"),this.isMobile=Gf()||sv()}get(){return g6()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
*/function zf(e,B){GC(e.emulator,"Emulator should always be set here");const{url:C}=e.emulator;return B?`${C}${B.startsWith("/")?B.slice(1):B}`:C}/**
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
*/class Uv{static initialize(B,C,t){this.fetchImpl=B,C&&(this.headersImpl=C),t&&(this.responseImpl=t)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;kC("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;kC("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;kC("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
*/const v6=new fs(3e4,6e4);function Vv(e,B){return e.tenantId&&!B.tenantId?Object.assign(Object.assign({},B),{tenantId:e.tenantId}):B}async function hs(e,B,C,t,n={}){return Wv(e,n,async()=>{let r={},i={};t&&(B==="GET"?i=t:r={body:JSON.stringify(t)});const s=Sr(Object.assign({key:e.config.apiKey},i)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Uv.fetch()(jv(e,e.config.apiHost,C,s),Object.assign({method:B,headers:a,referrerPolicy:"no-referrer"},r))})}async function Wv(e,B,C){e._canInitEmulator=!1;const t=Object.assign(Object.assign({},A6),B);try{const n=new E6(e),r=await Promise.race([C(),n.promise]);n.clearNetworkTimeout();const i=await r.json();if("needConfirmation"in i)throw ia(e,"account-exists-with-different-credential",i);if(r.ok&&!("errorMessage"in i))return i;{const s=r.ok?i.errorMessage:i.error.message,[a,o]=s.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw ia(e,"credential-already-in-use",i);if(a==="EMAIL_EXISTS")throw ia(e,"email-already-in-use",i);if(a==="USER_DISABLED")throw ia(e,"user-disabled",i);const c=t[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Jv(e,c,o);mC(e,c)}}catch(n){if(n instanceof vC)throw n;mC(e,"network-request-failed",{message:String(n)})}}async function y6(e,B,C,t,n={}){const r=await hs(e,B,C,t,n);return"mfaPendingCredential"in r&&mC(e,"multi-factor-auth-required",{_serverResponse:r}),r}function jv(e,B,C,t){const n=`${B}${C}?${t}`;return e.config.emulator?zf(e.config,n):`${e.config.apiScheme}://${n}`}class E6{constructor(B){this.auth=B,this.timer=null,this.promise=new Promise((C,t)=>{this.timer=setTimeout(()=>t(fC(this.auth,"network-request-failed")),v6.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ia(e,B,C){const t={appName:e.name};C.email&&(t.email=C.email),C.phoneNumber&&(t.phoneNumber=C.phoneNumber);const n=fC(e,B,t);return n.customData._tokenResponse=C,n}/**
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
*/async function I6(e,B){return hs(e,"POST","/v1/accounts:delete",B)}async function S6(e,B){return hs(e,"POST","/v1/accounts:lookup",B)}/**
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
*/function ui(e){if(e)try{const B=new Date(Number(e));if(!isNaN(B.getTime()))return B.toUTCString()}catch{}}async function w6(e,B=!1){const C=ge(e),t=await C.getIdToken(B),n=_f(t);U(n&&n.exp&&n.auth_time&&n.iat,C.auth,"internal-error");const r=typeof n.firebase=="object"?n.firebase:void 0,i=r==null?void 0:r.sign_in_provider;return{claims:n,token:t,authTime:ui(Bu(n.auth_time)),issuedAtTime:ui(Bu(n.iat)),expirationTime:ui(Bu(n.exp)),signInProvider:i||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Bu(e){return Number(e)*1e3}function _f(e){const[B,C,t]=e.split(".");if(B===void 0||C===void 0||t===void 0)return Ya("JWT malformed, contained fewer than 3 sections"),null;try{const n=No(C);return n?JSON.parse(n):(Ya("Failed to decode base64 JWT payload"),null)}catch(n){return Ya("Caught error parsing JWT payload as JSON",n==null?void 0:n.toString()),null}}function D6(e){const B=_f(e);return U(B,"internal-error"),U(typeof B.exp<"u","internal-error"),U(typeof B.iat<"u","internal-error"),Number(B.exp)-Number(B.iat)}/**
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
*/async function Qi(e,B,C=!1){if(C)return B;try{return await B}catch(t){throw t instanceof vC&&k6(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}function k6({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
*/class P6{constructor(B){this.user=B,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(B){var C;if(B){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const t=((C=this.user.stsTokenManager.expirationTime)!==null&&C!==void 0?C:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(B=!1){if(!this.isRunning)return;const C=this.getInterval(B);this.timerId=setTimeout(async()=>{await this.iteration()},C)}async iteration(){try{await this.user.getIdToken(!0)}catch(B){(B==null?void 0:B.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
*/class Yv{constructor(B,C){this.createdAt=B,this.lastLoginAt=C,this._initializeTime()}_initializeTime(){this.lastSignInTime=ui(this.lastLoginAt),this.creationTime=ui(this.createdAt)}_copy(B){this.createdAt=B.createdAt,this.lastLoginAt=B.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
*/async function To(e){var B;const C=e.auth,t=await e.getIdToken(),n=await Qi(e,S6(C,{idToken:t}));U(n==null?void 0:n.users.length,C,"internal-error");const r=n.users[0];e._notifyReloadListener(r);const i=!((B=r.providerUserInfo)===null||B===void 0)&&B.length?O6(r.providerUserInfo):[],s=N6(e.providerData,i),a=e.isAnonymous,o=!(e.email&&r.passwordHash)&&!(s!=null&&s.length),c=a?o:!1,l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new Yv(r.createdAt,r.lastLoginAt),isAnonymous:c};Object.assign(e,l)}async function F6(e){const B=ge(e);await To(B),await B.auth._persistUserIfCurrent(B),B.auth._notifyListenersIfCurrent(B)}function N6(e,B){return[...e.filter(C=>!B.some(t=>t.providerId===C.providerId)),...B]}function O6(e){return e.map(B=>{var{providerId:C}=B,t=Zf(B,["providerId"]);return{providerId:C,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}})}/**
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
*/async function R6(e,B){const C=await Wv(e,{},async()=>{const t=Sr({grant_type:"refresh_token",refresh_token:B}).slice(1),{tokenApiHost:n,apiKey:r}=e.config,i=jv(e,n,"/v1/token",`key=${r}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",Uv.fetch()(i,{method:"POST",headers:s,body:t})});return{accessToken:C.access_token,expiresIn:C.expires_in,refreshToken:C.refresh_token}}/**
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
*/class Ji{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(B){U(B.idToken,"internal-error"),U(typeof B.idToken<"u","internal-error"),U(typeof B.refreshToken<"u","internal-error");const C="expiresIn"in B&&typeof B.expiresIn<"u"?Number(B.expiresIn):D6(B.idToken);this.updateTokensAndExpiration(B.idToken,B.refreshToken,C)}async getToken(B,C=!1){return U(!this.accessToken||this.refreshToken,B,"user-token-expired"),!C&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(B,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(B,C){const{accessToken:t,refreshToken:n,expiresIn:r}=await R6(B,C);this.updateTokensAndExpiration(t,n,Number(r))}updateTokensAndExpiration(B,C,t){this.refreshToken=C||null,this.accessToken=B||null,this.expirationTime=Date.now()+t*1e3}static fromJSON(B,C){const{refreshToken:t,accessToken:n,expirationTime:r}=C,i=new Ji;return t&&(U(typeof t=="string","internal-error",{appName:B}),i.refreshToken=t),n&&(U(typeof n=="string","internal-error",{appName:B}),i.accessToken=n),r&&(U(typeof r=="number","internal-error",{appName:B}),i.expirationTime=r),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(B){this.accessToken=B.accessToken,this.refreshToken=B.refreshToken,this.expirationTime=B.expirationTime}_clone(){return Object.assign(new Ji,this.toJSON())}_performRefresh(){return kC("not implemented")}}/**
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
*/function ZC(e,B){U(typeof e=="string"||typeof e>"u","internal-error",{appName:B})}class $t{constructor(B){var{uid:C,auth:t,stsTokenManager:n}=B,r=Zf(B,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new P6(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=C,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Yv(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(B){const C=await Qi(this,this.stsTokenManager.getToken(this.auth,B));return U(C,this.auth,"internal-error"),this.accessToken!==C&&(this.accessToken=C,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),C}getIdTokenResult(B){return w6(this,B)}reload(){return F6(this)}_assign(B){this!==B&&(U(this.uid===B.uid,this.auth,"internal-error"),this.displayName=B.displayName,this.photoURL=B.photoURL,this.email=B.email,this.emailVerified=B.emailVerified,this.phoneNumber=B.phoneNumber,this.isAnonymous=B.isAnonymous,this.tenantId=B.tenantId,this.providerData=B.providerData.map(C=>Object.assign({},C)),this.metadata._copy(B.metadata),this.stsTokenManager._assign(B.stsTokenManager))}_clone(B){const C=new $t(Object.assign(Object.assign({},this),{auth:B,stsTokenManager:this.stsTokenManager._clone()}));return C.metadata._copy(this.metadata),C}_onReload(B){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=B,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(B){this.reloadListener?this.reloadListener(B):this.reloadUserInfo=B}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(B,C=!1){let t=!1;B.idToken&&B.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(B),t=!0),C&&await To(this),await this.auth._persistUserIfCurrent(this),t&&this.auth._notifyListenersIfCurrent(this)}async delete(){const B=await this.getIdToken();return await Qi(this,I6(this.auth,{idToken:B})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(B=>Object.assign({},B)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(B,C){var t,n,r,i,s,a,o,c;const l=(t=C.displayName)!==null&&t!==void 0?t:void 0,u=(n=C.email)!==null&&n!==void 0?n:void 0,m=(r=C.phoneNumber)!==null&&r!==void 0?r:void 0,d=(i=C.photoURL)!==null&&i!==void 0?i:void 0,h=(s=C.tenantId)!==null&&s!==void 0?s:void 0,g=(a=C._redirectEventId)!==null&&a!==void 0?a:void 0,f=(o=C.createdAt)!==null&&o!==void 0?o:void 0,p=(c=C.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:b,emailVerified:A,isAnonymous:y,providerData:I,stsTokenManager:E}=C;U(b&&E,B,"internal-error");const v=Ji.fromJSON(this.name,E);U(typeof b=="string",B,"internal-error"),ZC(l,B.name),ZC(u,B.name),U(typeof A=="boolean",B,"internal-error"),U(typeof y=="boolean",B,"internal-error"),ZC(m,B.name),ZC(d,B.name),ZC(h,B.name),ZC(g,B.name),ZC(f,B.name),ZC(p,B.name);const w=new $t({uid:b,auth:B,email:u,emailVerified:A,displayName:l,isAnonymous:y,photoURL:d,phoneNumber:m,tenantId:h,stsTokenManager:v,createdAt:f,lastLoginAt:p});return I&&Array.isArray(I)&&(w.providerData=I.map(M=>Object.assign({},M))),g&&(w._redirectEventId=g),w}static async _fromIdTokenResponse(B,C,t=!1){const n=new Ji;n.updateFromServerResponse(C);const r=new $t({uid:C.localId,auth:B,stsTokenManager:n,isAnonymous:t});return await To(r),r}}/**
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
*/const Cm=new Map;function PC(e){GC(e instanceof Function,"Expected a class definition");let B=Cm.get(e);return B?(GC(B instanceof e,"Instance stored in cache mismatched with class"),B):(B=new e,Cm.set(e,B),B)}/**
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
*/class Xv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(B,C){this.storage[B]=C}async _get(B){const C=this.storage[B];return C===void 0?null:C}async _remove(B){delete this.storage[B]}_addListener(B,C){}_removeListener(B,C){}}Xv.type="NONE";const tm=Xv;/**
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
*/function Xa(e,B,C){return`firebase:${e}:${B}:${C}`}class _n{constructor(B,C,t){this.persistence=B,this.auth=C,this.userKey=t;const{config:n,name:r}=this.auth;this.fullUserKey=Xa(this.userKey,n.apiKey,r),this.fullPersistenceKey=Xa("persistence",n.apiKey,r),this.boundEventHandler=C._onStorageEvent.bind(C),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(B){return this.persistence._set(this.fullUserKey,B.toJSON())}async getCurrentUser(){const B=await this.persistence._get(this.fullUserKey);return B?$t._fromJSON(this.auth,B):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(B){if(this.persistence===B)return;const C=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=B,C)return this.setCurrentUser(C)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(B,C,t="authUser"){if(!C.length)return new _n(PC(tm),B,t);const n=(await Promise.all(C.map(async o=>{if(await o._isAvailable())return o}))).filter(o=>o);let r=n[0]||PC(tm);const i=Xa(t,B.config.apiKey,B.name);let s=null;for(const o of C)try{const c=await o._get(i);if(c){const l=$t._fromJSON(B,c);o!==r&&(s=l),r=o;break}}catch{}const a=n.filter(o=>o._shouldAllowMigration);return!r._shouldAllowMigration||!a.length?new _n(r,B,t):(r=a[0],s&&await r._set(i,s.toJSON()),await Promise.all(C.map(async o=>{if(o!==r)try{await o._remove(i)}catch{}})),new _n(r,B,t))}}/**
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
*/function nm(e){const B=e.toLowerCase();if(B.includes("opera/")||B.includes("opr/")||B.includes("opios/"))return"Opera";if(zv(B))return"IEMobile";if(B.includes("msie")||B.includes("trident/"))return"IE";if(B.includes("edge/"))return"Edge";if(Zv(B))return"Firefox";if(B.includes("silk/"))return"Silk";if($v(B))return"Blackberry";if(By(B))return"Webos";if($f(B))return"Safari";if((B.includes("chrome/")||qv(B))&&!B.includes("edge/"))return"Chrome";if(_v(B))return"Android";{const C=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,t=e.match(C);if((t==null?void 0:t.length)===2)return t[1]}return"Other"}function Zv(e=qB()){return/firefox\//i.test(e)}function $f(e=qB()){const B=e.toLowerCase();return B.includes("safari/")&&!B.includes("chrome/")&&!B.includes("crios/")&&!B.includes("android")}function qv(e=qB()){return/crios\//i.test(e)}function zv(e=qB()){return/iemobile/i.test(e)}function _v(e=qB()){return/android/i.test(e)}function $v(e=qB()){return/blackberry/i.test(e)}function By(e=qB()){return/webos/i.test(e)}function Gl(e=qB()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function H6(e=qB()){var B;return Gl(e)&&!!(!((B=window.navigator)===null||B===void 0)&&B.standalone)}function M6(){return pF()&&document.documentMode===10}function ey(e=qB()){return Gl(e)||_v(e)||By(e)||$v(e)||/windows phone/i.test(e)||zv(e)}function L6(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
*/function Cy(e,B=[]){let C;switch(e){case"Browser":C=nm(qB());break;case"Worker":C=`${nm(qB())}-${e}`;break;default:C=e}const t=B.length?B.join(","):"FirebaseCore-web";return`${C}/JsCore/${wr}/${t}`}async function ty(e,B){return hs(e,"GET","/v2/recaptchaConfig",Vv(e,B))}function rm(e){return e!==void 0&&e.enterprise!==void 0}class ny{constructor(B){if(this.siteKey="",this.emailPasswordEnabled=!1,B.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=B.recaptchaKey.split("/")[3],this.emailPasswordEnabled=B.recaptchaEnforcementState.some(C=>C.provider==="EMAIL_PASSWORD_PROVIDER"&&C.enforcementState!=="OFF")}}/**
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
*/function T6(){var e,B;return(B=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&B!==void 0?B:document}function ry(e){return new Promise((B,C)=>{const t=document.createElement("script");t.setAttribute("src",e),t.onload=B,t.onerror=n=>{const r=fC("internal-error");r.customData=n,C(r)},t.type="text/javascript",t.charset="UTF-8",T6().appendChild(t)})}function G6(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const x6="https://www.google.com/recaptcha/enterprise.js?render=",K6="recaptcha-enterprise",Q6="NO_RECAPTCHA";class J6{constructor(B){this.type=K6,this.auth=ps(B)}async verify(B="verify",C=!1){async function t(r){if(!C){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(i,s)=>{ty(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)s(new Error("recaptcha Enterprise site key undefined"));else{const o=new ny(a);return r.tenantId==null?r._agentRecaptchaConfig=o:r._tenantRecaptchaConfigs[r.tenantId]=o,i(o.siteKey)}}).catch(a=>{s(a)})})}function n(r,i,s){const a=window.grecaptcha;rm(a)?a.enterprise.ready(()=>{a.enterprise.execute(r,{action:B}).then(o=>{i(o)}).catch(()=>{i(Q6)})}):s(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,i)=>{t(this.auth).then(s=>{if(!C&&rm(window.grecaptcha))n(s,r,i);else{if(typeof window>"u"){i(new Error("RecaptchaVerifier is only supported in browser"));return}ry(x6+s).then(()=>{n(s,r,i)}).catch(a=>{i(a)})}}).catch(s=>{i(s)})})}}/**
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
*/class U6{constructor(B){this.auth=B,this.queue=[]}pushCallback(B,C){const t=r=>new Promise((i,s)=>{try{const a=B(r);i(a)}catch(a){s(a)}});t.onAbort=C,this.queue.push(t);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(B){if(this.auth.currentUser===B)return;const C=[];try{for(const t of this.queue)await t(B),t.onAbort&&C.push(t.onAbort)}catch(t){C.reverse();for(const n of C)try{n()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:t==null?void 0:t.message})}}}/**
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
*/class V6{constructor(B,C,t,n){this.app=B,this.heartbeatServiceProvider=C,this.appCheckServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new im(this),this.idTokenSubscription=new im(this),this.beforeStateQueue=new U6(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=B.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(B,C){return C&&(this._popupRedirectResolver=PC(C)),this._initializationPromise=this.queue(async()=>{var t,n;if(!this._deleted&&(this.persistenceManager=await _n.create(this,B),!this._deleted)){if(!((t=this._popupRedirectResolver)===null||t===void 0)&&t._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(C),this.lastNotifiedUid=((n=this.currentUser)===null||n===void 0?void 0:n.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const B=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!B)){if(this.currentUser&&B&&this.currentUser.uid===B.uid){this._currentUser._assign(B),await this.currentUser.getIdToken();return}await this._updateCurrentUser(B,!0)}}async initializeCurrentUser(B){var C;const t=await this.assertedPersistence.getCurrentUser();let n=t,r=!1;if(B&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(C=this.redirectUser)===null||C===void 0?void 0:C._redirectEventId,s=n==null?void 0:n._redirectEventId,a=await this.tryRedirectSignIn(B);(!i||i===s)&&a!=null&&a.user&&(n=a.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(i){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(B){let C=null;try{C=await this._popupRedirectResolver._completeRedirectFn(this,B,!0)}catch{await this._setRedirectUser(null)}return C}async reloadAndSetCurrentUserOrClear(B){try{await To(B)}catch(C){if((C==null?void 0:C.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(B)}useDeviceLanguage(){this.languageCode=b6()}async _delete(){this._deleted=!0}async updateCurrentUser(B){const C=B?ge(B):null;return C&&U(C.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(C&&C._clone(this))}async _updateCurrentUser(B,C=!1){if(!this._deleted)return B&&U(this.tenantId===B.tenantId,this,"tenant-id-mismatch"),C||await this.beforeStateQueue.runMiddleware(B),this.queue(async()=>{await this.directlySetCurrentUser(B),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(B){return this.queue(async()=>{await this.assertedPersistence.setPersistence(PC(B))})}async initializeRecaptchaConfig(){const B=await ty(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),C=new ny(B);this.tenantId==null?this._agentRecaptchaConfig=C:this._tenantRecaptchaConfigs[this.tenantId]=C,C.emailPasswordEnabled&&new J6(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(B){this._errorFactory=new bn("auth","Firebase",B())}onAuthStateChanged(B,C,t){return this.registerStateListener(this.authStateSubscription,B,C,t)}beforeAuthStateChanged(B,C){return this.beforeStateQueue.pushCallback(B,C)}onIdTokenChanged(B,C,t){return this.registerStateListener(this.idTokenSubscription,B,C,t)}toJSON(){var B;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(B=this._currentUser)===null||B===void 0?void 0:B.toJSON()}}async _setRedirectUser(B,C){const t=await this.getOrInitRedirectPersistenceManager(C);return B===null?t.removeCurrentUser():t.setCurrentUser(B)}async getOrInitRedirectPersistenceManager(B){if(!this.redirectPersistenceManager){const C=B&&PC(B)||this._popupRedirectResolver;U(C,this,"argument-error"),this.redirectPersistenceManager=await _n.create(this,[PC(C._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(B){var C,t;return this._isInitialized&&await this.queue(async()=>{}),((C=this._currentUser)===null||C===void 0?void 0:C._redirectEventId)===B?this._currentUser:((t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId)===B?this.redirectUser:null}async _persistUserIfCurrent(B){if(B===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(B))}_notifyListenersIfCurrent(B){B===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var B,C;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=(C=(B=this.currentUser)===null||B===void 0?void 0:B.uid)!==null&&C!==void 0?C:null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(B,C,t,n){if(this._deleted)return()=>{};const r=typeof C=="function"?C:C.next.bind(C),i=this._isInitialized?Promise.resolve():this._initializationPromise;return U(i,this,"internal-error"),i.then(()=>r(this.currentUser)),typeof C=="function"?B.addObserver(C,t,n):B.addObserver(C)}async directlySetCurrentUser(B){this.currentUser&&this.currentUser!==B&&this._currentUser._stopProactiveRefresh(),B&&this.isProactiveRefreshEnabled&&B._startProactiveRefresh(),this.currentUser=B,B?await this.assertedPersistence.setCurrentUser(B):await this.assertedPersistence.removeCurrentUser()}queue(B){return this.operations=this.operations.then(B,B),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(B){!B||this.frameworks.includes(B)||(this.frameworks.push(B),this.frameworks.sort(),this.clientVersion=Cy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var B;const C={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(C["X-Firebase-gmpid"]=this.app.options.appId);const t=await((B=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||B===void 0?void 0:B.getHeartbeatsHeader());t&&(C["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(C["X-Firebase-AppCheck"]=n),C}async _getAppCheckToken(){var B;const C=await((B=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||B===void 0?void 0:B.getToken());return C!=null&&C.error&&h6(`Error while retrieving App Check token: ${C.error}`),C==null?void 0:C.token}}function ps(e){return ge(e)}class im{constructor(B){this.auth=B,this.observer=null,this.addObserver=IF(C=>this.observer=C)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
*/function W6(e,B){const C=An(e,"auth");if(C.isInitialized()){const t=C.getImmediate(),n=C.getOptions();if(xi(n,B??{}))return t;mC(t,"already-initialized")}return C.initialize({options:B})}function j6(e,B){const C=(B==null?void 0:B.persistence)||[],t=(Array.isArray(C)?C:[C]).map(PC);B!=null&&B.errorMap&&e._updateErrorMap(B.errorMap),e._initializeWithPersistence(t,B==null?void 0:B.popupRedirectResolver)}function Y6(e,B,C){const t=ps(e);U(t._canInitEmulator,t,"emulator-config-failed"),U(/^https?:\/\//.test(B),t,"invalid-emulator-scheme");const n=!!(C!=null&&C.disableWarnings),r=iy(B),{host:i,port:s}=X6(B),a=s===null?"":`:${s}`;t.config.emulator={url:`${r}//${i}${a}/`},t.settings.appVerificationDisabledForTesting=!0,t.emulatorConfig=Object.freeze({host:i,port:s,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:n})}),n||Z6()}function iy(e){const B=e.indexOf(":");return B<0?"":e.substr(0,B+1)}function X6(e){const B=iy(e),C=/(\/\/)?([^?#/]+)/.exec(e.substr(B.length));if(!C)return{host:"",port:null};const t=C[2].split("@").pop()||"",n=/^(\[[^\]]+\])(:|$)/.exec(t);if(n){const r=n[1];return{host:r,port:sm(t.substr(r.length+1))}}else{const[r,i]=t.split(":");return{host:r,port:sm(i)}}}function sm(e){if(!e)return null;const B=Number(e);return isNaN(B)?null:B}function Z6(){function e(){const B=document.createElement("p"),C=B.style;B.innerText="Running in emulator mode. Do not use with production credentials.",C.position="fixed",C.width="100%",C.backgroundColor="#ffffff",C.border=".1em solid #000000",C.color="#b50000",C.bottom="0px",C.left="0px",C.margin="0px",C.zIndex="10000",C.textAlign="center",B.classList.add("firebase-emulator-warning"),document.body.appendChild(B)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
*/class sy{constructor(B,C){this.providerId=B,this.signInMethod=C}toJSON(){return kC("not implemented")}_getIdTokenResponse(B){return kC("not implemented")}_linkToIdToken(B,C){return kC("not implemented")}_getReauthenticationResolver(B){return kC("not implemented")}}/**
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
*/const q6="http://localhost";class ln extends sy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(B){const C=new ln(B.providerId,B.signInMethod);return B.idToken||B.accessToken?(B.idToken&&(C.idToken=B.idToken),B.accessToken&&(C.accessToken=B.accessToken),B.nonce&&!B.pendingToken&&(C.nonce=B.nonce),B.pendingToken&&(C.pendingToken=B.pendingToken)):B.oauthToken&&B.oauthTokenSecret?(C.accessToken=B.oauthToken,C.secret=B.oauthTokenSecret):mC("argument-error"),C}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(B){const C=typeof B=="string"?JSON.parse(B):B,{providerId:t,signInMethod:n}=C,r=Zf(C,["providerId","signInMethod"]);if(!t||!n)return null;const i=new ln(t,n);return i.idToken=r.idToken||void 0,i.accessToken=r.accessToken||void 0,i.secret=r.secret,i.nonce=r.nonce,i.pendingToken=r.pendingToken||null,i}_getIdTokenResponse(B){const C=this.buildRequest();return $n(B,C)}_linkToIdToken(B,C){const t=this.buildRequest();return t.idToken=C,$n(B,t)}_getReauthenticationResolver(B){const C=this.buildRequest();return C.autoCreate=!1,$n(B,C)}buildRequest(){const B={requestUri:q6,returnSecureToken:!0};if(this.pendingToken)B.pendingToken=this.pendingToken;else{const C={};this.idToken&&(C.id_token=this.idToken),this.accessToken&&(C.access_token=this.accessToken),this.secret&&(C.oauth_token_secret=this.secret),C.providerId=this.providerId,this.nonce&&!this.pendingToken&&(C.nonce=this.nonce),B.postBody=Sr(C)}return B}}/**
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
*/class Bh{constructor(B){this.providerId=B,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(B){this.defaultLanguageCode=B}setCustomParameters(B){return this.customParameters=B,this}getCustomParameters(){return this.customParameters}}/**
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
*/class ms extends Bh{constructor(){super(...arguments),this.scopes=[]}addScope(B){return this.scopes.includes(B)||this.scopes.push(B),this}getScopes(){return[...this.scopes]}}/**
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
*/class Ct extends ms{constructor(){super("facebook.com")}static credential(B){return ln._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.FACEBOOK_SIGN_IN_METHOD,accessToken:B})}static credentialFromResult(B){return Ct.credentialFromTaggedObject(B)}static credentialFromError(B){return Ct.credentialFromTaggedObject(B.customData||{})}static credentialFromTaggedObject({_tokenResponse:B}){if(!B||!("oauthAccessToken"in B)||!B.oauthAccessToken)return null;try{return Ct.credential(B.oauthAccessToken)}catch{return null}}}Ct.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ct.PROVIDER_ID="facebook.com";/**
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
*/class Le extends ms{constructor(){super("google.com"),this.addScope("profile")}static credential(B,C){return ln._fromParams({providerId:Le.PROVIDER_ID,signInMethod:Le.GOOGLE_SIGN_IN_METHOD,idToken:B,accessToken:C})}static credentialFromResult(B){return Le.credentialFromTaggedObject(B)}static credentialFromError(B){return Le.credentialFromTaggedObject(B.customData||{})}static credentialFromTaggedObject({_tokenResponse:B}){if(!B)return null;const{oauthIdToken:C,oauthAccessToken:t}=B;if(!C&&!t)return null;try{return Le.credential(C,t)}catch{return null}}}Le.GOOGLE_SIGN_IN_METHOD="google.com";Le.PROVIDER_ID="google.com";/**
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
*/class tt extends ms{constructor(){super("github.com")}static credential(B){return ln._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.GITHUB_SIGN_IN_METHOD,accessToken:B})}static credentialFromResult(B){return tt.credentialFromTaggedObject(B)}static credentialFromError(B){return tt.credentialFromTaggedObject(B.customData||{})}static credentialFromTaggedObject({_tokenResponse:B}){if(!B||!("oauthAccessToken"in B)||!B.oauthAccessToken)return null;try{return tt.credential(B.oauthAccessToken)}catch{return null}}}tt.GITHUB_SIGN_IN_METHOD="github.com";tt.PROVIDER_ID="github.com";/**
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
*/class nt extends ms{constructor(){super("twitter.com")}static credential(B,C){return ln._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.TWITTER_SIGN_IN_METHOD,oauthToken:B,oauthTokenSecret:C})}static credentialFromResult(B){return nt.credentialFromTaggedObject(B)}static credentialFromError(B){return nt.credentialFromTaggedObject(B.customData||{})}static credentialFromTaggedObject({_tokenResponse:B}){if(!B)return null;const{oauthAccessToken:C,oauthTokenSecret:t}=B;if(!C||!t)return null;try{return nt.credential(C,t)}catch{return null}}}nt.TWITTER_SIGN_IN_METHOD="twitter.com";nt.PROVIDER_ID="twitter.com";/**
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
*/class dr{constructor(B){this.user=B.user,this.providerId=B.providerId,this._tokenResponse=B._tokenResponse,this.operationType=B.operationType}static async _fromIdTokenResponse(B,C,t,n=!1){const r=await $t._fromIdTokenResponse(B,t,n),i=am(t);return new dr({user:r,providerId:i,_tokenResponse:t,operationType:C})}static async _forOperation(B,C,t){await B._updateTokensIfNecessary(t,!0);const n=am(t);return new dr({user:B,providerId:n,_tokenResponse:t,operationType:C})}}function am(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
*/class Go extends vC{constructor(B,C,t,n){var r;super(C.code,C.message),this.operationType=t,this.user=n,Object.setPrototypeOf(this,Go.prototype),this.customData={appName:B.name,tenantId:(r=B.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:C.customData._serverResponse,operationType:t}}static _fromErrorAndOperation(B,C,t,n){return new Go(B,C,t,n)}}function ay(e,B,C,t){return(B==="reauthenticate"?C._getReauthenticationResolver(e):C._getIdTokenResponse(e)).catch(n=>{throw n.code==="auth/multi-factor-auth-required"?Go._fromErrorAndOperation(e,n,B,t):n})}async function z6(e,B,C=!1){const t=await Qi(e,B._linkToIdToken(e.auth,await e.getIdToken()),C);return dr._forOperation(e,"link",t)}/**
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
*/async function _6(e,B,C=!1){const{auth:t}=e,n="reauthenticate";try{const r=await Qi(e,ay(t,n,B,e),C);U(r.idToken,t,"internal-error");const i=_f(r.idToken);U(i,t,"internal-error");const{sub:s}=i;return U(e.uid===s,t,"user-mismatch"),dr._forOperation(e,n,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&mC(t,"user-mismatch"),r}}/**
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
*/async function $6(e,B,C=!1){const t="signIn",n=await ay(e,t,B),r=await dr._fromIdTokenResponse(e,t,n);return C||await e._updateCurrentUser(r.user),r}function BR(e,B,C,t){return ge(e).onIdTokenChanged(B,C,t)}function eR(e,B,C){return ge(e).beforeAuthStateChanged(B,C)}const xo="__sak";/**
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
*/class oy{constructor(B,C){this.storageRetriever=B,this.type=C}_isAvailable(){try{return this.storage?(this.storage.setItem(xo,"1"),this.storage.removeItem(xo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(B,C){return this.storage.setItem(B,JSON.stringify(C)),Promise.resolve()}_get(B){const C=this.storage.getItem(B);return Promise.resolve(C?JSON.parse(C):null)}_remove(B){return this.storage.removeItem(B),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
*/function CR(){const e=qB();return $f(e)||Gl(e)}const tR=1e3,nR=10;class ly extends oy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(B,C)=>this.onStorageEvent(B,C),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=CR()&&L6(),this.fallbackToPolling=ey(),this._shouldAllowMigration=!0}forAllChangedKeys(B){for(const C of Object.keys(this.listeners)){const t=this.storage.getItem(C),n=this.localCache[C];t!==n&&B(C,n,t)}}onStorageEvent(B,C=!1){if(!B.key){this.forAllChangedKeys((i,s,a)=>{this.notifyListeners(i,a)});return}const t=B.key;if(C?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(t);if(B.newValue!==i)B.newValue!==null?this.storage.setItem(t,B.newValue):this.storage.removeItem(t);else if(this.localCache[t]===B.newValue&&!C)return}const n=()=>{const i=this.storage.getItem(t);!C&&this.localCache[t]===i||this.notifyListeners(t,i)},r=this.storage.getItem(t);M6()&&r!==B.newValue&&B.newValue!==B.oldValue?setTimeout(n,nR):n()}notifyListeners(B,C){this.localCache[B]=C;const t=this.listeners[B];if(t)for(const n of Array.from(t))n(C&&JSON.parse(C))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((B,C,t)=>{this.onStorageEvent(new StorageEvent("storage",{key:B,oldValue:C,newValue:t}),!0)})},tR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(B,C){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[B]||(this.listeners[B]=new Set,this.localCache[B]=this.storage.getItem(B)),this.listeners[B].add(C)}_removeListener(B,C){this.listeners[B]&&(this.listeners[B].delete(C),this.listeners[B].size===0&&delete this.listeners[B]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(B,C){await super._set(B,C),this.localCache[B]=JSON.stringify(C)}async _get(B){const C=await super._get(B);return this.localCache[B]=JSON.stringify(C),C}async _remove(B){await super._remove(B),delete this.localCache[B]}}ly.type="LOCAL";const rR=ly;/**
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
*/class cy extends oy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(B,C){}_removeListener(B,C){}}cy.type="SESSION";const uy=cy;/**
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
*/function iR(e){return Promise.all(e.map(async B=>{try{return{fulfilled:!0,value:await B}}catch(C){return{fulfilled:!1,reason:C}}}))}/**
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
*/class xl{constructor(B){this.eventTarget=B,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(B){const C=this.receivers.find(n=>n.isListeningto(B));if(C)return C;const t=new xl(B);return this.receivers.push(t),t}isListeningto(B){return this.eventTarget===B}async handleEvent(B){const C=B,{eventId:t,eventType:n,data:r}=C.data,i=this.handlersMap[n];if(!(i!=null&&i.size))return;C.ports[0].postMessage({status:"ack",eventId:t,eventType:n});const s=Array.from(i).map(async o=>o(C.origin,r)),a=await iR(s);C.ports[0].postMessage({status:"done",eventId:t,eventType:n,response:a})}_subscribe(B,C){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[B]||(this.handlersMap[B]=new Set),this.handlersMap[B].add(C)}_unsubscribe(B,C){this.handlersMap[B]&&C&&this.handlersMap[B].delete(C),(!C||this.handlersMap[B].size===0)&&delete this.handlersMap[B],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xl.receivers=[];/**
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
*/function eh(e="",B=10){let C="";for(let t=0;t<B;t++)C+=Math.floor(Math.random()*10);return e+C}/**
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
*/class sR{constructor(B){this.target=B,this.handlers=new Set}removeMessageHandler(B){B.messageChannel&&(B.messageChannel.port1.removeEventListener("message",B.onMessage),B.messageChannel.port1.close()),this.handlers.delete(B)}async _send(B,C,t=50){const n=typeof MessageChannel<"u"?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let r,i;return new Promise((s,a)=>{const o=eh("",20);n.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},t);i={messageChannel:n,onMessage(l){const u=l;if(u.data.eventId===o)switch(u.data.status){case"ack":clearTimeout(c),r=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),s(u.data.response);break;default:clearTimeout(c),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(i),n.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:B,eventId:o,data:C},[n.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
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
*/function hC(){return window}function aR(e){hC().location.href=e}/**
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
*/function dy(){return typeof hC().WorkerGlobalScope<"u"&&typeof hC().importScripts=="function"}async function oR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lR(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function cR(){return dy()?self:null}/**
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
*/const fy="firebaseLocalStorageDb",uR=1,Ko="firebaseLocalStorage",hy="fbase_key";class gs{constructor(B){this.request=B}toPromise(){return new Promise((B,C)=>{this.request.addEventListener("success",()=>{B(this.request.result)}),this.request.addEventListener("error",()=>{C(this.request.error)})})}}function Kl(e,B){return e.transaction([Ko],B?"readwrite":"readonly").objectStore(Ko)}function dR(){const e=indexedDB.deleteDatabase(fy);return new gs(e).toPromise()}function U1(){const e=indexedDB.open(fy,uR);return new Promise((B,C)=>{e.addEventListener("error",()=>{C(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Ko,{keyPath:hy})}catch(n){C(n)}}),e.addEventListener("success",async()=>{const t=e.result;t.objectStoreNames.contains(Ko)?B(t):(t.close(),await dR(),B(await U1()))})})}async function om(e,B,C){const t=Kl(e,!0).put({[hy]:B,value:C});return new gs(t).toPromise()}async function fR(e,B){const C=Kl(e,!1).get(B),t=await new gs(C).toPromise();return t===void 0?null:t.value}function lm(e,B){const C=Kl(e,!0).delete(B);return new gs(C).toPromise()}const hR=800,pR=3;class py{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await U1(),this.db)}async _withRetries(B){let C=0;for(;;)try{const t=await this._openDb();return await B(t)}catch(t){if(C++>pR)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xl._getInstance(cR()),this.receiver._subscribe("keyChanged",async(B,C)=>({keyProcessed:(await this._poll()).includes(C.key)})),this.receiver._subscribe("ping",async(B,C)=>["keyChanged"])}async initializeSender(){var B,C;if(this.activeServiceWorker=await oR(),!this.activeServiceWorker)return;this.sender=new sR(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&!((B=t[0])===null||B===void 0)&&B.fulfilled&&!((C=t[0])===null||C===void 0)&&C.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(B){if(!(!this.sender||!this.activeServiceWorker||lR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:B},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const B=await U1();return await om(B,xo,"1"),await lm(B,xo),!0}catch{}return!1}async _withPendingWrite(B){this.pendingWrites++;try{await B()}finally{this.pendingWrites--}}async _set(B,C){return this._withPendingWrite(async()=>(await this._withRetries(t=>om(t,B,C)),this.localCache[B]=C,this.notifyServiceWorker(B)))}async _get(B){const C=await this._withRetries(t=>fR(t,B));return this.localCache[B]=C,C}async _remove(B){return this._withPendingWrite(async()=>(await this._withRetries(C=>lm(C,B)),delete this.localCache[B],this.notifyServiceWorker(B)))}async _poll(){const B=await this._withRetries(n=>{const r=Kl(n,!1).getAll();return new gs(r).toPromise()});if(!B)return[];if(this.pendingWrites!==0)return[];const C=[],t=new Set;for(const{fbase_key:n,value:r}of B)t.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(r)&&(this.notifyListeners(n,r),C.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!t.has(n)&&(this.notifyListeners(n,null),C.push(n));return C}notifyListeners(B,C){this.localCache[B]=C;const t=this.listeners[B];if(t)for(const n of Array.from(t))n(C)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(B,C){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[B]||(this.listeners[B]=new Set,this._get(B)),this.listeners[B].add(C)}_removeListener(B,C){this.listeners[B]&&(this.listeners[B].delete(C),this.listeners[B].size===0&&delete this.listeners[B]),Object.keys(this.listeners).length===0&&this.stopPolling()}}py.type="LOCAL";const mR=py;new fs(3e4,6e4);/**
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
*/function my(e,B){return B?PC(B):(U(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
*/class Ch extends sy{constructor(B){super("custom","custom"),this.params=B}_getIdTokenResponse(B){return $n(B,this._buildIdpRequest())}_linkToIdToken(B,C){return $n(B,this._buildIdpRequest(C))}_getReauthenticationResolver(B){return $n(B,this._buildIdpRequest())}_buildIdpRequest(B){const C={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return B&&(C.idToken=B),C}}function gR(e){return $6(e.auth,new Ch(e),e.bypassAuthState)}function bR(e){const{auth:B,user:C}=e;return U(C,B,"internal-error"),_6(C,new Ch(e),e.bypassAuthState)}async function AR(e){const{auth:B,user:C}=e;return U(C,B,"internal-error"),z6(C,new Ch(e),e.bypassAuthState)}/**
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
*/class gy{constructor(B,C,t,n,r=!1){this.auth=B,this.resolver=t,this.user=n,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(C)?C:[C]}execute(){return new Promise(async(B,C)=>{this.pendingPromise={resolve:B,reject:C};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}})}async onAuthEvent(B){const{urlResponse:C,sessionId:t,postBody:n,tenantId:r,error:i,type:s}=B;if(i){this.reject(i);return}const a={auth:this.auth,requestUri:C,sessionId:t,tenantId:r||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(o){this.reject(o)}}onError(B){this.reject(B)}getIdpTask(B){switch(B){case"signInViaPopup":case"signInViaRedirect":return gR;case"linkViaPopup":case"linkViaRedirect":return AR;case"reauthViaPopup":case"reauthViaRedirect":return bR;default:mC(this.auth,"internal-error")}}resolve(B){GC(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(B),this.unregisterAndCleanUp()}reject(B){GC(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(B),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
*/const vR=new fs(2e3,1e4);async function yR(e,B,C){const t=ps(e);p6(e,B,Bh);const n=my(t,C);return new Wt(t,"signInViaPopup",B,n).executeNotNull()}class Wt extends gy{constructor(B,C,t,n,r){super(B,C,n,r),this.provider=t,this.authWindow=null,this.pollId=null,Wt.currentPopupAction&&Wt.currentPopupAction.cancel(),Wt.currentPopupAction=this}async executeNotNull(){const B=await this.execute();return U(B,this.auth,"internal-error"),B}async onExecution(){GC(this.filter.length===1,"Popup operations only handle one event");const B=eh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],B),this.authWindow.associatedEvent=B,this.resolver._originValidation(this.auth).catch(C=>{this.reject(C)}),this.resolver._isIframeWebStorageSupported(this.auth,C=>{C||this.reject(fC(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var B;return((B=this.authWindow)===null||B===void 0?void 0:B.associatedEvent)||null}cancel(){this.reject(fC(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wt.currentPopupAction=null}pollUserCancellation(){const B=()=>{var C,t;if(!((t=(C=this.authWindow)===null||C===void 0?void 0:C.window)===null||t===void 0)&&t.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fC(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(B,vR.get())};B()}}Wt.currentPopupAction=null;/**
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
*/const ER="pendingRedirect",Za=new Map;class IR extends gy{constructor(B,C,t=!1){super(B,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],C,void 0,t),this.eventId=null}async execute(){let B=Za.get(this.auth._key());if(!B){try{const C=await SR(this.resolver,this.auth)?await super.execute():null;B=()=>Promise.resolve(C)}catch(C){B=()=>Promise.reject(C)}Za.set(this.auth._key(),B)}return this.bypassAuthState||Za.set(this.auth._key(),()=>Promise.resolve(null)),B()}async onAuthEvent(B){if(B.type==="signInViaRedirect")return super.onAuthEvent(B);if(B.type==="unknown"){this.resolve(null);return}if(B.eventId){const C=await this.auth._redirectUserForId(B.eventId);if(C)return this.user=C,super.onAuthEvent(B);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function SR(e,B){const C=kR(B),t=DR(e);if(!await t._isAvailable())return!1;const n=await t._get(C)==="true";return await t._remove(C),n}function wR(e,B){Za.set(e._key(),B)}function DR(e){return PC(e._redirectPersistence)}function kR(e){return Xa(ER,e.config.apiKey,e.name)}async function PR(e,B,C=!1){const t=ps(e),n=my(t,B),r=await new IR(t,n,C).execute();return r&&!C&&(delete r.user._redirectEventId,await t._persistUserIfCurrent(r.user),await t._setRedirectUser(null,B)),r}/**
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
*/const FR=10*60*1e3;class NR{constructor(B){this.auth=B,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(B){this.consumers.add(B),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,B)&&(this.sendToConsumer(this.queuedRedirectEvent,B),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(B){this.consumers.delete(B)}onEvent(B){if(this.hasEventBeenHandled(B))return!1;let C=!1;return this.consumers.forEach(t=>{this.isEventForConsumer(B,t)&&(C=!0,this.sendToConsumer(B,t),this.saveEventToCache(B))}),this.hasHandledPotentialRedirect||!OR(B)||(this.hasHandledPotentialRedirect=!0,C||(this.queuedRedirectEvent=B,C=!0)),C}sendToConsumer(B,C){var t;if(B.error&&!by(B)){const n=((t=B.error.code)===null||t===void 0?void 0:t.split("auth/")[1])||"internal-error";C.onError(fC(this.auth,n))}else C.onAuthEvent(B)}isEventForConsumer(B,C){const t=C.eventId===null||!!B.eventId&&B.eventId===C.eventId;return C.filter.includes(B.type)&&t}hasEventBeenHandled(B){return Date.now()-this.lastProcessedEventTime>=FR&&this.cachedEventUids.clear(),this.cachedEventUids.has(cm(B))}saveEventToCache(B){this.cachedEventUids.add(cm(B)),this.lastProcessedEventTime=Date.now()}}function cm(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(B=>B).join("-")}function by({type:e,error:B}){return e==="unknown"&&(B==null?void 0:B.code)==="auth/no-auth-event"}function OR(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return by(e);default:return!1}}/**
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
*/async function RR(e,B={}){return hs(e,"GET","/v1/projects",B)}/**
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
*/const HR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,MR=/^https?/;async function LR(e){if(e.config.emulator)return;const{authorizedDomains:B}=await RR(e);for(const C of B)try{if(TR(C))return}catch{}mC(e,"unauthorized-domain")}function TR(e){const B=J1(),{protocol:C,hostname:t}=new URL(B);if(e.startsWith("chrome-extension://")){const r=new URL(e);return r.hostname===""&&t===""?C==="chrome-extension:"&&e.replace("chrome-extension://","")===B.replace("chrome-extension://",""):C==="chrome-extension:"&&r.hostname===t}if(!MR.test(C))return!1;if(HR.test(e))return t===e;const n=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+n+"|"+n+")$","i").test(t)}/**
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
*/const GR=new fs(3e4,6e4);function um(){const e=hC().___jsl;if(e!=null&&e.H){for(const B of Object.keys(e.H))if(e.H[B].r=e.H[B].r||[],e.H[B].L=e.H[B].L||[],e.H[B].r=[...e.H[B].L],e.CP)for(let C=0;C<e.CP.length;C++)e.CP[C]=null}}function xR(e){return new Promise((B,C)=>{var t,n,r;function i(){um(),gapi.load("gapi.iframes",{callback:()=>{B(gapi.iframes.getContext())},ontimeout:()=>{um(),C(fC(e,"network-request-failed"))},timeout:GR.get()})}if(!((n=(t=hC().gapi)===null||t===void 0?void 0:t.iframes)===null||n===void 0)&&n.Iframe)B(gapi.iframes.getContext());else if(!((r=hC().gapi)===null||r===void 0)&&r.load)i();else{const s=G6("iframefcb");return hC()[s]=()=>{gapi.load?i():C(fC(e,"network-request-failed"))},ry(`https://apis.google.com/js/api.js?onload=${s}`).catch(a=>C(a))}}).catch(B=>{throw qa=null,B})}let qa=null;function KR(e){return qa=qa||xR(e),qa}/**
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
*/const QR=new fs(5e3,15e3),JR="__/auth/iframe",UR="emulator/auth/iframe",VR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jR(e){const B=e.config;U(B.authDomain,e,"auth-domain-config-required");const C=B.emulator?zf(B,UR):`https://${e.config.authDomain}/${JR}`,t={apiKey:B.apiKey,appName:e.name,v:wr},n=WR.get(e.config.apiHost);n&&(t.eid=n);const r=e._getFrameworks();return r.length&&(t.fw=r.join(",")),`${C}?${Sr(t).slice(1)}`}async function YR(e){const B=await KR(e),C=hC().gapi;return U(C,e,"internal-error"),B.open({where:document.body,url:jR(e),messageHandlersFilter:C.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:VR,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=fC(e,"network-request-failed"),s=hC().setTimeout(()=>{r(i)},QR.get());function a(){hC().clearTimeout(s),n(t)}t.ping(a).then(a,()=>{r(i)})}))}/**
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
*/const XR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZR=500,qR=600,zR="_blank",_R="http://localhost";class dm{constructor(B){this.window=B,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $R(e,B,C,t=ZR,n=qR){const r=Math.max((window.screen.availHeight-n)/2,0).toString(),i=Math.max((window.screen.availWidth-t)/2,0).toString();let s="";const a=Object.assign(Object.assign({},XR),{width:t.toString(),height:n.toString(),top:r,left:i}),o=qB().toLowerCase();C&&(s=qv(o)?zR:C),Zv(o)&&(B=B||_R,a.scrollbars="yes");const c=Object.entries(a).reduce((u,[m,d])=>`${u}${m}=${d},`,"");if(H6(o)&&s!=="_self")return B4(B||"",s),new dm(null);const l=window.open(B||"",s,c);U(l,e,"popup-blocked");try{l.focus()}catch{}return new dm(l)}function B4(e,B){const C=document.createElement("a");C.href=e,C.target=B;const t=document.createEvent("MouseEvent");t.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),C.dispatchEvent(t)}/**
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
*/const e4="__/auth/handler",C4="emulator/auth/handler",t4=encodeURIComponent("fac");async function fm(e,B,C,t,n,r){U(e.config.authDomain,e,"auth-domain-config-required"),U(e.config.apiKey,e,"invalid-api-key");const i={apiKey:e.config.apiKey,appName:e.name,authType:C,redirectUrl:t,v:wr,eventId:n};if(B instanceof Bh){B.setDefaultLanguage(e.languageCode),i.providerId=B.providerId||"",R1(B.getCustomParameters())||(i.customParameters=JSON.stringify(B.getCustomParameters()));for(const[c,l]of Object.entries(r||{}))i[c]=l}if(B instanceof ms){const c=B.getScopes().filter(l=>l!=="");c.length>0&&(i.scopes=c.join(","))}e.tenantId&&(i.tid=e.tenantId);const s=i;for(const c of Object.keys(s))s[c]===void 0&&delete s[c];const a=await e._getAppCheckToken(),o=a?`#${t4}=${encodeURIComponent(a)}`:"";return`${n4(e)}?${Sr(s).slice(1)}${o}`}function n4({config:e}){return e.emulator?zf(e,C4):`https://${e.authDomain}/${e4}`}/**
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
*/const eu="webStorageSupport";class r4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=uy,this._completeRedirectFn=PR,this._overrideRedirectResult=wR}async _openPopup(B,C,t,n){var r;GC((r=this.eventManagers[B._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const i=await fm(B,C,t,J1(),n);return $R(B,i,eh())}async _openRedirect(B,C,t,n){await this._originValidation(B);const r=await fm(B,C,t,J1(),n);return aR(r),new Promise(()=>{})}_initialize(B){const C=B._key();if(this.eventManagers[C]){const{manager:n,promise:r}=this.eventManagers[C];return n?Promise.resolve(n):(GC(r,"If manager is not set, promise should be"),r)}const t=this.initAndGetManager(B);return this.eventManagers[C]={promise:t},t.catch(()=>{delete this.eventManagers[C]}),t}async initAndGetManager(B){const C=await YR(B),t=new NR(B);return C.register("authEvent",n=>(U(n==null?void 0:n.authEvent,B,"invalid-auth-event"),{status:t.onEvent(n.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[B._key()]={manager:t},this.iframes[B._key()]=C,t}_isIframeWebStorageSupported(B,C){this.iframes[B._key()].send(eu,{type:eu},t=>{var n;const r=(n=t==null?void 0:t[0])===null||n===void 0?void 0:n[eu];r!==void 0&&C(!!r),mC(B,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(B){const C=B._key();return this.originValidationPromises[C]||(this.originValidationPromises[C]=LR(B)),this.originValidationPromises[C]}get _shouldInitProactively(){return ey()||$f()||Gl()}}const i4=r4;var hm="@firebase/auth",pm="0.23.2";/**
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
*/class s4{constructor(B){this.auth=B,this.internalListeners=new Map}getUid(){var B;return this.assertAuthConfigured(),((B=this.auth.currentUser)===null||B===void 0?void 0:B.uid)||null}async getToken(B){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(B)}:null}addAuthTokenListener(B){if(this.assertAuthConfigured(),this.internalListeners.has(B))return;const C=this.auth.onIdTokenChanged(t=>{B((t==null?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(B,C),this.updateProactiveRefresh()}removeAuthTokenListener(B){this.assertAuthConfigured();const C=this.internalListeners.get(B);C&&(this.internalListeners.delete(B),C(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
*/function a4(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function o4(e){pC(new rC("auth",(B,{options:C})=>{const t=B.getProvider("app").getImmediate(),n=B.getProvider("heartbeat"),r=B.getProvider("app-check-internal"),{apiKey:i,authDomain:s}=t.options;U(i&&!i.includes(":"),"invalid-api-key",{appName:t.name});const a={apiKey:i,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cy(e)},o=new V6(t,n,r,a);return j6(o,C),o},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((B,C,t)=>{B.getProvider("auth-internal").initialize()})),pC(new rC("auth-internal",B=>{const C=ps(B.getProvider("auth").getImmediate());return(t=>new s4(t))(C)},"PRIVATE").setInstantiationMode("EXPLICIT")),xe(hm,pm,a4(e)),xe(hm,pm,"esm2017")}/**
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
*/const l4=5*60,c4=rv("authIdTokenMaxAge")||l4;let mm=null;const u4=e=>async B=>{const C=B&&await B.getIdTokenResult(),t=C&&(new Date().getTime()-Date.parse(C.issuedAtTime))/1e3;if(t&&t>c4)return;const n=C==null?void 0:C.token;mm!==n&&(mm=n,await fetch(e,{method:n?"POST":"DELETE",headers:n?{Authorization:`Bearer ${n}`}:{}}))};function Ay(e=Qf()){const B=An(e,"auth");if(B.isInitialized())return B.getImmediate();const C=W6(e,{popupRedirectResolver:i4,persistence:[mR,rR,uy]}),t=rv("authTokenSyncURL");if(t){const r=u4(t);eR(C,r,()=>r(C.currentUser)),BR(C,i=>r(i))}const n=tv("auth");return n&&Y6(C,`http://${n}`),C}o4("Browser");const gm="@firebase/database",bm="0.14.4";/**
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
*/class f4{constructor(B){this.domStorage_=B,this.prefix_="firebase:"}set(B,C){C==null?this.domStorage_.removeItem(this.prefixedName_(B)):this.domStorage_.setItem(this.prefixedName_(B),NB(C))}get(B){const C=this.domStorage_.getItem(this.prefixedName_(B));return C==null?null:Gi(C)}remove(B){this.domStorage_.removeItem(this.prefixedName_(B))}prefixedName_(B){return this.prefix_+B}toString(){return this.domStorage_.toString()}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class h4{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(B,C){C==null?delete this.cache_[B]:this.cache_[B]=C}get(B){return VC(this.cache_,B)?this.cache_[B]:null}remove(B){delete this.cache_[B]}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const yy=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const B=window[e];return B.setItem("firebase:sentinel","cache"),B.removeItem("firebase:sentinel"),new f4(B)}}catch{}return new h4},jt=yy("localStorage"),V1=yy("sessionStorage");/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Br=new Hl("@firebase/database"),p4=function(){let e=1;return function(){return e++}}(),Ey=function(e){const B=DF(e),C=new EF;C.update(B);const t=C.digest();return Lf.encodeByteArray(t)},bs=function(...e){let B="";for(let C=0;C<e.length;C++){const t=e[C];Array.isArray(t)||t&&typeof t=="object"&&typeof t.length=="number"?B+=bs.apply(null,t):typeof t=="object"?B+=NB(t):B+=t,B+=" "}return B};let Bn=null,Am=!0;const m4=function(e,B){k(!B||e===!0||e===!1,"Can't turn on custom loggers persistently."),e===!0?(Br.logLevel=rB.VERBOSE,Bn=Br.log.bind(Br),B&&V1.set("logging_enabled",!0)):typeof e=="function"?Bn=e:(Bn=null,V1.remove("logging_enabled"))},XB=function(...e){if(Am===!0&&(Am=!1,Bn===null&&V1.get("logging_enabled")===!0&&m4(!0)),Bn){const B=bs.apply(null,e);Bn(B)}},As=function(e){return function(...B){XB(e,...B)}},W1=function(...e){const B="FIREBASE INTERNAL ERROR: "+bs(...e);Br.error(B)},xC=function(...e){const B=`FIREBASE FATAL ERROR: ${bs(...e)}`;throw Br.error(B),new Error(B)},pe=function(...e){const B="FIREBASE WARNING: "+bs(...e);Br.warn(B)},g4=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&pe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Iy=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},b4=function(e){if(document.readyState==="complete")e();else{let B=!1;const C=function(){if(!document.body){setTimeout(C,Math.floor(10));return}B||(B=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",C,!1),window.addEventListener("load",C,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&C()}),window.attachEvent("onload",C))}},fr="[MIN_NAME]",cn="[MAX_NAME]",Dr=function(e,B){if(e===B)return 0;if(e===fr||B===cn)return-1;if(B===fr||e===cn)return 1;{const C=vm(e),t=vm(B);return C!==null?t!==null?C-t===0?e.length-B.length:C-t:-1:t!==null?1:e<B?-1:1}},A4=function(e,B){return e===B?0:e<B?-1:1},Qr=function(e,B){if(B&&e in B)return B[e];throw new Error("Missing required key ("+e+") in object: "+NB(B))},th=function(e){if(typeof e!="object"||e===null)return NB(e);const B=[];for(const t in e)B.push(t);B.sort();let C="{";for(let t=0;t<B.length;t++)t!==0&&(C+=","),C+=NB(B[t]),C+=":",C+=th(e[B[t]]);return C+="}",C},Sy=function(e,B){const C=e.length;if(C<=B)return[e];const t=[];for(let n=0;n<C;n+=B)n+B>C?t.push(e.substring(n,C)):t.push(e.substring(n,n+B));return t};function me(e,B){for(const C in e)e.hasOwnProperty(C)&&B(C,e[C])}const wy=function(e){k(!Iy(e),"Invalid JSON number");const B=11,C=52,t=(1<<B-1)-1;let n,r,i,s,a;e===0?(r=0,i=0,n=1/e===-1/0?1:0):(n=e<0,e=Math.abs(e),e>=Math.pow(2,1-t)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),t),r=s+t,i=Math.round(e*Math.pow(2,C-s)-Math.pow(2,C))):(r=0,i=Math.round(e/Math.pow(2,1-t-C))));const o=[];for(a=C;a;a-=1)o.push(i%2?1:0),i=Math.floor(i/2);for(a=B;a;a-=1)o.push(r%2?1:0),r=Math.floor(r/2);o.push(n?1:0),o.reverse();const c=o.join("");let l="";for(a=0;a<64;a+=8){let u=parseInt(c.substr(a,8),2).toString(16);u.length===1&&(u="0"+u),l=l+u}return l.toLowerCase()},v4=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},y4=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function E4(e,B){let C="Unknown Error";e==="too_big"?C="The data requested exceeds the maximum size that can be accessed with a single request.":e==="permission_denied"?C="Client doesn't have permission to access the desired data.":e==="unavailable"&&(C="The service is unavailable");const t=new Error(e+" at "+B._path.toString()+": "+C);return t.code=e.toUpperCase(),t}const I4=new RegExp("^-?(0*)\\d{1,10}$"),S4=-2147483648,w4=2147483647,vm=function(e){if(I4.test(e)){const B=Number(e);if(B>=S4&&B<=w4)return B}return null},kr=function(e){try{e()}catch(B){setTimeout(()=>{const C=B.stack||"";throw pe("Exception was thrown by user callback.",C),B},Math.floor(0))}},D4=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},di=function(e,B){const C=setTimeout(e,B);return typeof C=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(C):typeof C=="object"&&C.unref&&C.unref(),C};/**
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
*/class k4{constructor(B,C){this.appName_=B,this.appCheckProvider=C,this.appCheck=C==null?void 0:C.getImmediate({optional:!0}),this.appCheck||C==null||C.get().then(t=>this.appCheck=t)}getToken(B){return this.appCheck?this.appCheck.getToken(B):new Promise((C,t)=>{setTimeout(()=>{this.appCheck?this.getToken(B).then(C,t):C(null)},0)})}addTokenChangeListener(B){var C;(C=this.appCheckProvider)===null||C===void 0||C.get().then(t=>t.addTokenListener(B))}notifyForInvalidToken(){pe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class P4{constructor(B,C,t){this.appName_=B,this.firebaseOptions_=C,this.authProvider_=t,this.auth_=null,this.auth_=t.getImmediate({optional:!0}),this.auth_||t.onInit(n=>this.auth_=n)}getToken(B){return this.auth_?this.auth_.getToken(B).catch(C=>C&&C.code==="auth/token-not-initialized"?(XB("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(C)):new Promise((C,t)=>{setTimeout(()=>{this.auth_?this.getToken(B).then(C,t):C(null)},0)})}addTokenChangeListener(B){this.auth_?this.auth_.addAuthTokenListener(B):this.authProvider_.get().then(C=>C.addAuthTokenListener(B))}removeTokenChangeListener(B){this.authProvider_.get().then(C=>C.removeAuthTokenListener(B))}notifyForInvalidToken(){let B='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?B+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?B+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':B+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',pe(B)}}class er{constructor(B){this.accessToken=B}getToken(B){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(B){B(this.accessToken)}removeTokenChangeListener(B){}notifyForInvalidToken(){}}er.OWNER="owner";/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const nh="5",Dy="v",ky="s",Py="r",Fy="f",Ny=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Oy="ls",Ry="p",j1="ac",Hy="websocket",My="long_polling";/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ly{constructor(B,C,t,n,r=!1,i="",s=!1,a=!1){this.secure=C,this.namespace=t,this.webSocketOnly=n,this.nodeAdmin=r,this.persistenceKey=i,this.includeNamespaceInQueryParams=s,this.isUsingEmulator=a,this._host=B.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=jt.get("host:"+B)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(B){B!==this.internalHost&&(this.internalHost=B,this.isCacheableHost()&&jt.set("host:"+this._host,this.internalHost))}toString(){let B=this.toURLString();return this.persistenceKey&&(B+="<"+this.persistenceKey+">"),B}toURLString(){const B=this.secure?"https://":"http://",C=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${B}${this.host}/${C}`}}function F4(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function Ty(e,B,C){k(typeof B=="string","typeof type must == string"),k(typeof C=="object","typeof params must == object");let t;if(B===Hy)t=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(B===My)t=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+B);F4(e)&&(C.ns=e.namespace);const n=[];return me(C,(r,i)=>{n.push(r+"="+i)}),t+n.join("&")}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class N4{constructor(){this.counters_={}}incrementCounter(B,C=1){VC(this.counters_,B)||(this.counters_[B]=0),this.counters_[B]+=C}get(){return aF(this.counters_)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Cu={},tu={};function rh(e){const B=e.toString();return Cu[B]||(Cu[B]=new N4),Cu[B]}function O4(e,B){const C=e.toString();return tu[C]||(tu[C]=B()),tu[C]}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class R4{constructor(B){this.onMessage_=B,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(B,C){this.closeAfterResponse=B,this.onClose=C,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(B,C){for(this.pendingResponses[B]=C;this.pendingResponses[this.currentResponseNum];){const t=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let n=0;n<t.length;++n)t[n]&&kr(()=>{this.onMessage_(t[n])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const ym="start",H4="close",M4="pLPCommand",L4="pRTLPCB",Gy="id",xy="pw",Ky="ser",T4="cb",G4="seg",x4="ts",K4="d",Q4="dframe",Qy=1870,Jy=30,J4=Qy-Jy,U4=25e3,V4=3e4;class Jn{constructor(B,C,t,n,r,i,s){this.connId=B,this.repoInfo=C,this.applicationId=t,this.appCheckToken=n,this.authToken=r,this.transportSessionId=i,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=As(B),this.stats_=rh(C),this.urlFn=a=>(this.appCheckToken&&(a[j1]=this.appCheckToken),Ty(C,My,a))}open(B,C){this.curSegmentNum=0,this.onDisconnect_=C,this.myPacketOrderer=new R4(B),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(V4)),b4(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ih((...r)=>{const[i,s,a,o,c]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,i===ym)this.id=s,this.password=a;else if(i===H4)s?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(s,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+i)},(...r)=>{const[i,s]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(i,s)},()=>{this.onClosed_()},this.urlFn);const t={};t[ym]="t",t[Ky]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(t[T4]=this.scriptTagHolder.uniqueCallbackIdentifier),t[Dy]=nh,this.transportSessionId&&(t[ky]=this.transportSessionId),this.lastSessionId&&(t[Oy]=this.lastSessionId),this.applicationId&&(t[Ry]=this.applicationId),this.appCheckToken&&(t[j1]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ny.test(location.hostname)&&(t[Py]=Fy);const n=this.urlFn(t);this.log_("Connecting via long-poll to "+n),this.scriptTagHolder.addTag(n,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Jn.forceAllow_=!0}static forceDisallow(){Jn.forceDisallow_=!0}static isAvailable(){return Jn.forceAllow_?!0:!Jn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!v4()&&!y4()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(B){const C=NB(B);this.bytesSent+=C.length,this.stats_.incrementCounter("bytes_sent",C.length);const t=ev(C),n=Sy(t,J4);for(let r=0;r<n.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,n.length,n[r]),this.curSegmentNum++}addDisconnectPingFrame(B,C){this.myDisconnFrame=document.createElement("iframe");const t={};t[Q4]="t",t[Gy]=B,t[xy]=C,this.myDisconnFrame.src=this.urlFn(t),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(B){const C=NB(B).length;this.bytesReceived+=C,this.stats_.incrementCounter("bytes_received",C)}}class ih{constructor(B,C,t,n){this.onDisconnect=t,this.urlFn=n,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=p4(),window[M4+this.uniqueCallbackIdentifier]=B,window[L4+this.uniqueCallbackIdentifier]=C,this.myIFrame=ih.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const i="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(s){XB("frame writing exception"),s.stack&&XB(s.stack),XB(s)}}}static createIFrame_(){const B=document.createElement("iframe");if(B.style.display="none",document.body){document.body.appendChild(B);try{B.contentWindow.document||XB("No IE domain setting required")}catch{const C=document.domain;B.src="javascript:void((function(){document.open();document.domain='"+C+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return B.contentDocument?B.doc=B.contentDocument:B.contentWindow?B.doc=B.contentWindow.document:B.document&&(B.doc=B.document),B}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const B=this.onDisconnect;B&&(this.onDisconnect=null,B())}startLongPoll(B,C){for(this.myID=B,this.myPW=C,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const B={};B[Gy]=this.myID,B[xy]=this.myPW,B[Ky]=this.currentSerial;let C=this.urlFn(B),t="",n=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Jy+t.length<=Qy;){const r=this.pendingSegs.shift();t=t+"&"+G4+n+"="+r.seg+"&"+x4+n+"="+r.ts+"&"+K4+n+"="+r.d,n++}return C=C+t,this.addLongPollTag_(C,this.currentSerial),!0}else return!1}enqueueSegment(B,C,t){this.pendingSegs.push({seg:B,ts:C,d:t}),this.alive&&this.newRequest_()}addLongPollTag_(B,C){this.outstandingRequests.add(C);const t=()=>{this.outstandingRequests.delete(C),this.newRequest_()},n=setTimeout(t,Math.floor(U4)),r=()=>{clearTimeout(n),t()};this.addTag(B,r)}addTag(B,C){setTimeout(()=>{try{if(!this.sendNewPolls)return;const t=this.myIFrame.doc.createElement("script");t.type="text/javascript",t.async=!0,t.src=B,t.onload=t.onreadystatechange=function(){const n=t.readyState;(!n||n==="loaded"||n==="complete")&&(t.onload=t.onreadystatechange=null,t.parentNode&&t.parentNode.removeChild(t),C())},t.onerror=()=>{XB("Long-poll script failed to load: "+B),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(t)}catch{}},Math.floor(1))}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const W4=16384,j4=45e3;let Qo=null;typeof MozWebSocket<"u"?Qo=MozWebSocket:typeof WebSocket<"u"&&(Qo=WebSocket);class Ze{constructor(B,C,t,n,r,i,s){this.connId=B,this.applicationId=t,this.appCheckToken=n,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=As(this.connId),this.stats_=rh(C),this.connURL=Ze.connectionURL_(C,i,s,n,t),this.nodeAdmin=C.nodeAdmin}static connectionURL_(B,C,t,n,r){const i={};return i[Dy]=nh,typeof location<"u"&&location.hostname&&Ny.test(location.hostname)&&(i[Py]=Fy),C&&(i[ky]=C),t&&(i[Oy]=t),n&&(i[j1]=n),r&&(i[Ry]=r),Ty(B,Hy,i)}open(B,C){this.onDisconnect=C,this.onMessage=B,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,jt.set("previous_websocket_failure",!0);try{let t;av(),this.mySock=new Qo(this.connURL,[],t)}catch(t){this.log_("Error instantiating WebSocket.");const n=t.message||t.data;n&&this.log_(n),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=t=>{this.handleIncomingFrame(t)},this.mySock.onerror=t=>{this.log_("WebSocket error.  Closing connection.");const n=t.message||t.data;n&&this.log_(n),this.onClosed_()}}start(){}static forceDisallow(){Ze.forceDisallow_=!0}static isAvailable(){let B=!1;if(typeof navigator<"u"&&navigator.userAgent){const C=/Android ([0-9]{0,}\.[0-9]{0,})/,t=navigator.userAgent.match(C);t&&t.length>1&&parseFloat(t[1])<4.4&&(B=!0)}return!B&&Qo!==null&&!Ze.forceDisallow_}static previouslyFailed(){return jt.isInMemoryStorage||jt.get("previous_websocket_failure")===!0}markConnectionHealthy(){jt.remove("previous_websocket_failure")}appendFrame_(B){if(this.frames.push(B),this.frames.length===this.totalFrames){const C=this.frames.join("");this.frames=null;const t=Gi(C);this.onMessage(t)}}handleNewFrameCount_(B){this.totalFrames=B,this.frames=[]}extractFrameCount_(B){if(k(this.frames===null,"We already have a frame buffer"),B.length<=6){const C=Number(B);if(!isNaN(C))return this.handleNewFrameCount_(C),null}return this.handleNewFrameCount_(1),B}handleIncomingFrame(B){if(this.mySock===null)return;const C=B.data;if(this.bytesReceived+=C.length,this.stats_.incrementCounter("bytes_received",C.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(C);else{const t=this.extractFrameCount_(C);t!==null&&this.appendFrame_(t)}}send(B){this.resetKeepAlive();const C=NB(B);this.bytesSent+=C.length,this.stats_.incrementCounter("bytes_sent",C.length);const t=Sy(C,W4);t.length>1&&this.sendString_(String(t.length));for(let n=0;n<t.length;n++)this.sendString_(t[n])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(j4))}sendString_(B){try{this.mySock.send(B)}catch(C){this.log_("Exception thrown from WebSocket.send():",C.message||C.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ze.responsesRequiredToBeHealthy=2;Ze.healthyTimeout=3e4;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ui{constructor(B){this.initTransports_(B)}static get ALL_TRANSPORTS(){return[Jn,Ze]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(B){const C=Ze&&Ze.isAvailable();let t=C&&!Ze.previouslyFailed();if(B.webSocketOnly&&(C||pe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),t=!0),t)this.transports_=[Ze];else{const n=this.transports_=[];for(const r of Ui.ALL_TRANSPORTS)r&&r.isAvailable()&&n.push(r);Ui.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ui.globalTransportInitialized_=!1;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Y4=6e4,X4=5e3,Z4=10*1024,q4=100*1024,nu="t",Em="d",z4="s",Im="r",_4="e",Sm="o",wm="a",Dm="n",km="p",$4="h";class BH{constructor(B,C,t,n,r,i,s,a,o,c){this.id=B,this.repoInfo_=C,this.applicationId_=t,this.appCheckToken_=n,this.authToken_=r,this.onMessage_=i,this.onReady_=s,this.onDisconnect_=a,this.onKill_=o,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=As("c:"+this.id+":"),this.transportManager_=new Ui(C),this.log_("Connection created"),this.start_()}start_(){const B=this.transportManager_.initialTransport();this.conn_=new B(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=B.responsesRequiredToBeHealthy||0;const C=this.connReceiver_(this.conn_),t=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(C,t)},Math.floor(0));const n=B.healthyTimeout||0;n>0&&(this.healthyTimeout_=di(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>q4?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Z4?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(n)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(B){return C=>{B===this.conn_?this.onConnectionLost_(C):B===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(B){return C=>{this.state_!==2&&(B===this.rx_?this.onPrimaryMessageReceived_(C):B===this.secondaryConn_?this.onSecondaryMessageReceived_(C):this.log_("message on old connection"))}}sendRequest(B){const C={t:"d",d:B};this.sendData_(C)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(B){if(nu in B){const C=B[nu];C===wm?this.upgradeIfSecondaryHealthy_():C===Im?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):C===Sm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(B){const C=Qr("t",B),t=Qr("d",B);if(C==="c")this.onSecondaryControl_(t);else if(C==="d")this.pendingDataMessages.push(t);else throw new Error("Unknown protocol layer: "+C)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:km,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:wm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Dm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(B){const C=Qr("t",B),t=Qr("d",B);C==="c"?this.onControl_(t):C==="d"&&this.onDataMessage_(t)}onDataMessage_(B){this.onPrimaryResponse_(),this.onMessage_(B)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(B){const C=Qr(nu,B);if(Em in B){const t=B[Em];if(C===$4){const n=Object.assign({},t);this.repoInfo_.isUsingEmulator&&(n.h=this.repoInfo_.host),this.onHandshake_(n)}else if(C===Dm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let n=0;n<this.pendingDataMessages.length;++n)this.onDataMessage_(this.pendingDataMessages[n]);this.pendingDataMessages=[],this.tryCleanupConnection()}else C===z4?this.onConnectionShutdown_(t):C===Im?this.onReset_(t):C===_4?W1("Server Error: "+t):C===Sm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):W1("Unknown control packet command: "+C)}}onHandshake_(B){const C=B.ts,t=B.v,n=B.h;this.sessionId=B.s,this.repoInfo_.host=n,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,C),nh!==t&&pe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const B=this.transportManager_.upgradeTransport();B&&this.startUpgrade_(B)}startUpgrade_(B){this.secondaryConn_=new B(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=B.responsesRequiredToBeHealthy||0;const C=this.connReceiver_(this.secondaryConn_),t=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(C,t),di(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Y4))}onReset_(B){this.log_("Reset packet received.  New host: "+B),this.repoInfo_.host=B,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(B,C){this.log_("Realtime connection established."),this.conn_=B,this.state_=1,this.onReady_&&(this.onReady_(C,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):di(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(X4))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:km,d:{}}}))}onSecondaryConnectionLost_(){const B=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===B||this.rx_===B)&&this.close()}onConnectionLost_(B){this.conn_=null,!B&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(jt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(B){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(B),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(B){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(B)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Uy{put(B,C,t,n){}merge(B,C,t,n){}refreshAuthToken(B){}refreshAppCheckToken(B){}onDisconnectPut(B,C,t){}onDisconnectMerge(B,C,t){}onDisconnectCancel(B,C){}reportStats(B){}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Vy{constructor(B){this.allowedEvents_=B,this.listeners_={},k(Array.isArray(B)&&B.length>0,"Requires a non-empty array")}trigger(B,...C){if(Array.isArray(this.listeners_[B])){const t=[...this.listeners_[B]];for(let n=0;n<t.length;n++)t[n].callback.apply(t[n].context,C)}}on(B,C,t){this.validateEventType_(B),this.listeners_[B]=this.listeners_[B]||[],this.listeners_[B].push({callback:C,context:t});const n=this.getInitialEvent(B);n&&C.apply(t,n)}off(B,C,t){this.validateEventType_(B);const n=this.listeners_[B]||[];for(let r=0;r<n.length;r++)if(n[r].callback===C&&(!t||t===n[r].context)){n.splice(r,1);return}}validateEventType_(B){k(this.allowedEvents_.find(C=>C===B),"Unknown event: "+B)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Jo extends Vy{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Gf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Jo}getInitialEvent(B){return k(B==="online","Unknown event type: "+B),[this.online_]}currentlyOnline(){return this.online_}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Pm=32,Fm=768;class iB{constructor(B,C){if(C===void 0){this.pieces_=B.split("/");let t=0;for(let n=0;n<this.pieces_.length;n++)this.pieces_[n].length>0&&(this.pieces_[t]=this.pieces_[n],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=B,this.pieceNum_=C}toString(){let B="";for(let C=this.pieceNum_;C<this.pieces_.length;C++)this.pieces_[C]!==""&&(B+="/"+this.pieces_[C]);return B||"/"}}function $(){return new iB("")}function Z(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function St(e){return e.pieces_.length-e.pieceNum_}function aB(e){let B=e.pieceNum_;return B<e.pieces_.length&&B++,new iB(e.pieces_,B)}function Wy(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function eH(e){let B="";for(let C=e.pieceNum_;C<e.pieces_.length;C++)e.pieces_[C]!==""&&(B+="/"+encodeURIComponent(String(e.pieces_[C])));return B||"/"}function jy(e,B=0){return e.pieces_.slice(e.pieceNum_+B)}function Yy(e){if(e.pieceNum_>=e.pieces_.length)return null;const B=[];for(let C=e.pieceNum_;C<e.pieces_.length-1;C++)B.push(e.pieces_[C]);return new iB(B,0)}function OB(e,B){const C=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)C.push(e.pieces_[t]);if(B instanceof iB)for(let t=B.pieceNum_;t<B.pieces_.length;t++)C.push(B.pieces_[t]);else{const t=B.split("/");for(let n=0;n<t.length;n++)t[n].length>0&&C.push(t[n])}return new iB(C,0)}function X(e){return e.pieceNum_>=e.pieces_.length}function ee(e,B){const C=Z(e),t=Z(B);if(C===null)return B;if(C===t)return ee(aB(e),aB(B));throw new Error("INTERNAL ERROR: innerPath ("+B+") is not within outerPath ("+e+")")}function Xy(e,B){if(St(e)!==St(B))return!1;for(let C=e.pieceNum_,t=B.pieceNum_;C<=e.pieces_.length;C++,t++)if(e.pieces_[C]!==B.pieces_[t])return!1;return!0}function qe(e,B){let C=e.pieceNum_,t=B.pieceNum_;if(St(e)>St(B))return!1;for(;C<e.pieces_.length;){if(e.pieces_[C]!==B.pieces_[t])return!1;++C,++t}return!0}class CH{constructor(B,C){this.errorPrefix_=C,this.parts_=jy(B,0),this.byteLength_=Math.max(1,this.parts_.length);for(let t=0;t<this.parts_.length;t++)this.byteLength_+=Rl(this.parts_[t]);Zy(this)}}function tH(e,B){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(B),e.byteLength_+=Rl(B),Zy(e)}function nH(e){const B=e.parts_.pop();e.byteLength_-=Rl(B),e.parts_.length>0&&(e.byteLength_-=1)}function Zy(e){if(e.byteLength_>Fm)throw new Error(e.errorPrefix_+"has a key path longer than "+Fm+" bytes ("+e.byteLength_+").");if(e.parts_.length>Pm)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Pm+") or object contains a cycle "+xt(e))}function xt(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class sh extends Vy{constructor(){super(["visible"]);let B,C;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(C="visibilitychange",B="hidden"):typeof document.mozHidden<"u"?(C="mozvisibilitychange",B="mozHidden"):typeof document.msHidden<"u"?(C="msvisibilitychange",B="msHidden"):typeof document.webkitHidden<"u"&&(C="webkitvisibilitychange",B="webkitHidden")),this.visible_=!0,C&&document.addEventListener(C,()=>{const t=!document[B];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new sh}getInitialEvent(B){return k(B==="visible","Unknown event type: "+B),[this.visible_]}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Jr=1e3,rH=60*5*1e3,Nm=30*1e3,iH=1.3,sH=3e4,aH="server_kill",Om=3;class OC extends Uy{constructor(B,C,t,n,r,i,s,a){if(super(),this.repoInfo_=B,this.applicationId_=C,this.onDataUpdate_=t,this.onConnectStatus_=n,this.onServerInfoUpdate_=r,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.authOverride_=a,this.id=OC.nextPersistentConnectionId_++,this.log_=As("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Jr,this.maxReconnectDelay_=rH,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!av())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");sh.getInstance().on("visible",this.onVisible_,this),B.host.indexOf("fblocal")===-1&&Jo.getInstance().on("online",this.onOnline_,this)}sendRequest(B,C,t){const n=++this.requestNumber_,r={r:n,a:B,b:C};this.log_(NB(r)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),t&&(this.requestCBHash_[n]=t)}get(B){this.initConnection_();const C=new Ol,t={action:"g",request:{p:B._path.toString(),q:B._queryObject},onComplete:r=>{const i=r.d;r.s==="ok"?C.resolve(i):C.reject(i)}};this.outstandingGets_.push(t),this.outstandingGetCount_++;const n=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(n),C.promise}listen(B,C,t,n){this.initConnection_();const r=B._queryIdentifier,i=B._path.toString();this.log_("Listen called for "+i+" "+r),this.listens.has(i)||this.listens.set(i,new Map),k(B._queryParams.isDefault()||!B._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(i).has(r),"listen() called twice for same path/queryId.");const s={onComplete:n,hashFn:C,query:B,tag:t};this.listens.get(i).set(r,s),this.connected_&&this.sendListen_(s)}sendGet_(B){const C=this.outstandingGets_[B];this.sendRequest("g",C.request,t=>{delete this.outstandingGets_[B],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),C.onComplete&&C.onComplete(t)})}sendListen_(B){const C=B.query,t=C._path.toString(),n=C._queryIdentifier;this.log_("Listen on "+t+" for "+n);const r={p:t},i="q";B.tag&&(r.q=C._queryObject,r.t=B.tag),r.h=B.hashFn(),this.sendRequest(i,r,s=>{const a=s.d,o=s.s;OC.warnOnListenWarnings_(a,C),(this.listens.get(t)&&this.listens.get(t).get(n))===B&&(this.log_("listen response",s),o!=="ok"&&this.removeListen_(t,n),B.onComplete&&B.onComplete(o,a))})}static warnOnListenWarnings_(B,C){if(B&&typeof B=="object"&&VC(B,"w")){const t=ur(B,"w");if(Array.isArray(t)&&~t.indexOf("no_index")){const n='".indexOn": "'+C._queryParams.getIndex().toString()+'"',r=C._path.toString();pe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${n} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(B){this.authToken_=B,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(B)}reduceReconnectDelayIfAdminCredential_(B){(B&&B.length===40||yF(B))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Nm)}refreshAppCheckToken(B){this.appCheckToken_=B,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const B=this.authToken_,C=vF(B)?"auth":"gauth",t={cred:B};this.authOverride_===null?t.noauth=!0:typeof this.authOverride_=="object"&&(t.authvar=this.authOverride_),this.sendRequest(C,t,n=>{const r=n.s,i=n.d||"error";this.authToken_===B&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,i))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},B=>{const C=B.s,t=B.d||"error";C==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(C,t)})}unlisten(B,C){const t=B._path.toString(),n=B._queryIdentifier;this.log_("Unlisten called for "+t+" "+n),k(B._queryParams.isDefault()||!B._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(t,n)&&this.connected_&&this.sendUnlisten_(t,n,B._queryObject,C)}sendUnlisten_(B,C,t,n){this.log_("Unlisten on "+B+" for "+C);const r={p:B},i="n";n&&(r.q=t,r.t=n),this.sendRequest(i,r)}onDisconnectPut(B,C,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",B,C,t):this.onDisconnectRequestQueue_.push({pathString:B,action:"o",data:C,onComplete:t})}onDisconnectMerge(B,C,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",B,C,t):this.onDisconnectRequestQueue_.push({pathString:B,action:"om",data:C,onComplete:t})}onDisconnectCancel(B,C){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",B,null,C):this.onDisconnectRequestQueue_.push({pathString:B,action:"oc",data:null,onComplete:C})}sendOnDisconnect_(B,C,t,n){const r={p:C,d:t};this.log_("onDisconnect "+B,r),this.sendRequest(B,r,i=>{n&&setTimeout(()=>{n(i.s,i.d)},Math.floor(0))})}put(B,C,t,n){this.putInternal("p",B,C,t,n)}merge(B,C,t,n){this.putInternal("m",B,C,t,n)}putInternal(B,C,t,n,r){this.initConnection_();const i={p:C,d:t};r!==void 0&&(i.h=r),this.outstandingPuts_.push({action:B,request:i,onComplete:n}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+C)}sendPut_(B){const C=this.outstandingPuts_[B].action,t=this.outstandingPuts_[B].request,n=this.outstandingPuts_[B].onComplete;this.outstandingPuts_[B].queued=this.connected_,this.sendRequest(C,t,r=>{this.log_(C+" response",r),delete this.outstandingPuts_[B],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),n&&n(r.s,r.d)})}reportStats(B){if(this.connected_){const C={c:B};this.log_("reportStats",C),this.sendRequest("s",C,t=>{if(t.s!=="ok"){const n=t.d;this.log_("reportStats","Error sending stats: "+n)}})}}onDataMessage_(B){if("r"in B){this.log_("from server: "+NB(B));const C=B.r,t=this.requestCBHash_[C];t&&(delete this.requestCBHash_[C],t(B.b))}else{if("error"in B)throw"A server-side error has occurred: "+B.error;"a"in B&&this.onDataPush_(B.a,B.b)}}onDataPush_(B,C){this.log_("handleServerMessage",B,C),B==="d"?this.onDataUpdate_(C.p,C.d,!1,C.t):B==="m"?this.onDataUpdate_(C.p,C.d,!0,C.t):B==="c"?this.onListenRevoked_(C.p,C.q):B==="ac"?this.onAuthRevoked_(C.s,C.d):B==="apc"?this.onAppCheckRevoked_(C.s,C.d):B==="sd"?this.onSecurityDebugPacket_(C):W1("Unrecognized action received from server: "+NB(B)+`
Are you using the latest client?`)}onReady_(B,C){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(B),this.lastSessionId=C,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(B){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(B))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(B){B&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Jr,this.realtime_||this.scheduleConnect_(0)),this.visible_=B}onOnline_(B){B?(this.log_("Browser went online."),this.reconnectDelay_=Jr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>sH&&(this.reconnectDelay_=Jr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const B=new Date().getTime()-this.lastConnectionAttemptTime_;let C=Math.max(0,this.reconnectDelay_-B);C=Math.random()*C,this.log_("Trying to reconnect in "+C+"ms"),this.scheduleConnect_(C),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*iH)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const B=this.onDataMessage_.bind(this),C=this.onReady_.bind(this),t=this.onRealtimeDisconnect_.bind(this),n=this.id+":"+OC.nextConnectionId_++,r=this.lastSessionId;let i=!1,s=null;const a=function(){s?s.close():(i=!0,t())},o=function(l){k(s,"sendRequest call when we're not connected not allowed."),s.sendRequest(l)};this.realtime_={close:a,sendRequest:o};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[l,u]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);i?XB("getToken() completed but was canceled"):(XB("getToken() completed. Creating connection."),this.authToken_=l&&l.accessToken,this.appCheckToken_=u&&u.token,s=new BH(n,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,B,C,t,m=>{pe(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(aH)},r))}catch(l){this.log_("Failed to get token: "+l),i||(this.repoInfo_.nodeAdmin&&pe(l),a())}}}interrupt(B){XB("Interrupting connection for reason: "+B),this.interruptReasons_[B]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(B){XB("Resuming connection for reason: "+B),delete this.interruptReasons_[B],R1(this.interruptReasons_)&&(this.reconnectDelay_=Jr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(B){const C=B-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:C})}cancelSentTransactions_(){for(let B=0;B<this.outstandingPuts_.length;B++){const C=this.outstandingPuts_[B];C&&"h"in C.request&&C.queued&&(C.onComplete&&C.onComplete("disconnect"),delete this.outstandingPuts_[B],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(B,C){let t;C?t=C.map(r=>th(r)).join("$"):t="default";const n=this.removeListen_(B,t);n&&n.onComplete&&n.onComplete("permission_denied")}removeListen_(B,C){const t=new iB(B).toString();let n;if(this.listens.has(t)){const r=this.listens.get(t);n=r.get(C),r.delete(C),r.size===0&&this.listens.delete(t)}else n=void 0;return n}onAuthRevoked_(B,C){XB("Auth token revoked: "+B+"/"+C),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(B==="invalid_token"||B==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Om&&(this.reconnectDelay_=Nm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(B,C){XB("App check token revoked: "+B+"/"+C),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(B==="invalid_token"||B==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Om&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(B){this.securityDebugCallback_?this.securityDebugCallback_(B):"msg"in B&&console.log("FIREBASE: "+B.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const B of this.listens.values())for(const C of B.values())this.sendListen_(C);for(let B=0;B<this.outstandingPuts_.length;B++)this.outstandingPuts_[B]&&this.sendPut_(B);for(;this.onDisconnectRequestQueue_.length;){const B=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(B.action,B.pathString,B.data,B.onComplete)}for(let B=0;B<this.outstandingGets_.length;B++)this.outstandingGets_[B]&&this.sendGet_(B)}sendConnectStats_(){const B={};let C="js";B["sdk."+C+"."+vy.replace(/\./g,"-")]=1,Gf()?B["framework.cordova"]=1:sv()&&(B["framework.reactnative"]=1),this.reportStats(B)}shouldReconnect_(){const B=Jo.getInstance().currentlyOnline();return R1(this.interruptReasons_)&&B}}OC.nextPersistentConnectionId_=0;OC.nextConnectionId_=0;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Y{constructor(B,C){this.name=B,this.node=C}static Wrap(B,C){return new Y(B,C)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ql{getCompare(){return this.compare.bind(this)}indexedValueChanged(B,C){const t=new Y(fr,B),n=new Y(fr,C);return this.compare(t,n)!==0}minPost(){return Y.MIN}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let sa;class qy extends Ql{static get __EMPTY_NODE(){return sa}static set __EMPTY_NODE(B){sa=B}compare(B,C){return Dr(B.name,C.name)}isDefinedOn(B){throw Ir("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(B,C){return!1}minPost(){return Y.MIN}maxPost(){return new Y(cn,sa)}makePost(B,C){return k(typeof B=="string","KeyIndex indexValue must always be a string."),new Y(B,sa)}toString(){return".key"}}const Cr=new qy;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class aa{constructor(B,C,t,n,r=null){this.isReverse_=n,this.resultGenerator_=r,this.nodeStack_=[];let i=1;for(;!B.isEmpty();)if(B=B,i=C?t(B.key,C):1,n&&(i*=-1),i<0)this.isReverse_?B=B.left:B=B.right;else if(i===0){this.nodeStack_.push(B);break}else this.nodeStack_.push(B),this.isReverse_?B=B.right:B=B.left}getNext(){if(this.nodeStack_.length===0)return null;let B=this.nodeStack_.pop(),C;if(this.resultGenerator_?C=this.resultGenerator_(B.key,B.value):C={key:B.key,value:B.value},this.isReverse_)for(B=B.left;!B.isEmpty();)this.nodeStack_.push(B),B=B.right;else for(B=B.right;!B.isEmpty();)this.nodeStack_.push(B),B=B.left;return C}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const B=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(B.key,B.value):{key:B.key,value:B.value}}}class GB{constructor(B,C,t,n,r){this.key=B,this.value=C,this.color=t??GB.RED,this.left=n??ce.EMPTY_NODE,this.right=r??ce.EMPTY_NODE}copy(B,C,t,n,r){return new GB(B??this.key,C??this.value,t??this.color,n??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(B){return this.left.inorderTraversal(B)||!!B(this.key,this.value)||this.right.inorderTraversal(B)}reverseTraversal(B){return this.right.reverseTraversal(B)||B(this.key,this.value)||this.left.reverseTraversal(B)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(B,C,t){let n=this;const r=t(B,n.key);return r<0?n=n.copy(null,null,null,n.left.insert(B,C,t),null):r===0?n=n.copy(null,C,null,null,null):n=n.copy(null,null,null,null,n.right.insert(B,C,t)),n.fixUp_()}removeMin_(){if(this.left.isEmpty())return ce.EMPTY_NODE;let B=this;return!B.left.isRed_()&&!B.left.left.isRed_()&&(B=B.moveRedLeft_()),B=B.copy(null,null,null,B.left.removeMin_(),null),B.fixUp_()}remove(B,C){let t,n;if(t=this,C(B,t.key)<0)!t.left.isEmpty()&&!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.remove(B,C),null);else{if(t.left.isRed_()&&(t=t.rotateRight_()),!t.right.isEmpty()&&!t.right.isRed_()&&!t.right.left.isRed_()&&(t=t.moveRedRight_()),C(B,t.key)===0){if(t.right.isEmpty())return ce.EMPTY_NODE;n=t.right.min_(),t=t.copy(n.key,n.value,null,null,t.right.removeMin_())}t=t.copy(null,null,null,null,t.right.remove(B,C))}return t.fixUp_()}isRed_(){return this.color}fixUp_(){let B=this;return B.right.isRed_()&&!B.left.isRed_()&&(B=B.rotateLeft_()),B.left.isRed_()&&B.left.left.isRed_()&&(B=B.rotateRight_()),B.left.isRed_()&&B.right.isRed_()&&(B=B.colorFlip_()),B}moveRedLeft_(){let B=this.colorFlip_();return B.right.left.isRed_()&&(B=B.copy(null,null,null,null,B.right.rotateRight_()),B=B.rotateLeft_(),B=B.colorFlip_()),B}moveRedRight_(){let B=this.colorFlip_();return B.left.left.isRed_()&&(B=B.rotateRight_(),B=B.colorFlip_()),B}rotateLeft_(){const B=this.copy(null,null,GB.RED,null,this.right.left);return this.right.copy(null,null,this.color,B,null)}rotateRight_(){const B=this.copy(null,null,GB.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,B)}colorFlip_(){const B=this.left.copy(null,null,!this.left.color,null,null),C=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,B,C)}checkMaxDepth_(){const B=this.check_();return Math.pow(2,B)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const B=this.left.check_();if(B!==this.right.check_())throw new Error("Black depths differ");return B+(this.isRed_()?0:1)}}GB.RED=!0;GB.BLACK=!1;class oH{copy(B,C,t,n,r){return this}insert(B,C,t){return new GB(B,C,null)}remove(B,C){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(B){return!1}reverseTraversal(B){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ce{constructor(B,C=ce.EMPTY_NODE){this.comparator_=B,this.root_=C}insert(B,C){return new ce(this.comparator_,this.root_.insert(B,C,this.comparator_).copy(null,null,GB.BLACK,null,null))}remove(B){return new ce(this.comparator_,this.root_.remove(B,this.comparator_).copy(null,null,GB.BLACK,null,null))}get(B){let C,t=this.root_;for(;!t.isEmpty();){if(C=this.comparator_(B,t.key),C===0)return t.value;C<0?t=t.left:C>0&&(t=t.right)}return null}getPredecessorKey(B){let C,t=this.root_,n=null;for(;!t.isEmpty();)if(C=this.comparator_(B,t.key),C===0){if(t.left.isEmpty())return n?n.key:null;for(t=t.left;!t.right.isEmpty();)t=t.right;return t.key}else C<0?t=t.left:C>0&&(n=t,t=t.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(B){return this.root_.inorderTraversal(B)}reverseTraversal(B){return this.root_.reverseTraversal(B)}getIterator(B){return new aa(this.root_,null,this.comparator_,!1,B)}getIteratorFrom(B,C){return new aa(this.root_,B,this.comparator_,!1,C)}getReverseIteratorFrom(B,C){return new aa(this.root_,B,this.comparator_,!0,C)}getReverseIterator(B){return new aa(this.root_,null,this.comparator_,!0,B)}}ce.EMPTY_NODE=new oH;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function lH(e,B){return Dr(e.name,B.name)}function ah(e,B){return Dr(e,B)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let Y1;function cH(e){Y1=e}const zy=function(e){return typeof e=="number"?"number:"+wy(e):"string:"+e},_y=function(e){if(e.isLeafNode()){const B=e.val();k(typeof B=="string"||typeof B=="number"||typeof B=="object"&&VC(B,".sv"),"Priority must be a string or number.")}else k(e===Y1||e.isEmpty(),"priority of unexpected type.");k(e===Y1||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let Rm;class LB{constructor(B,C=LB.__childrenNodeConstructor.EMPTY_NODE){this.value_=B,this.priorityNode_=C,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),_y(this.priorityNode_)}static set __childrenNodeConstructor(B){Rm=B}static get __childrenNodeConstructor(){return Rm}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(B){return new LB(this.value_,B)}getImmediateChild(B){return B===".priority"?this.priorityNode_:LB.__childrenNodeConstructor.EMPTY_NODE}getChild(B){return X(B)?this:Z(B)===".priority"?this.priorityNode_:LB.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(B,C){return null}updateImmediateChild(B,C){return B===".priority"?this.updatePriority(C):C.isEmpty()&&B!==".priority"?this:LB.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(B,C).updatePriority(this.priorityNode_)}updateChild(B,C){const t=Z(B);return t===null?C:C.isEmpty()&&t!==".priority"?this:(k(t!==".priority"||St(B)===1,".priority must be the last token in a path"),this.updateImmediateChild(t,LB.__childrenNodeConstructor.EMPTY_NODE.updateChild(aB(B),C)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(B,C){return!1}val(B){return B&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let B="";this.priorityNode_.isEmpty()||(B+="priority:"+zy(this.priorityNode_.val())+":");const C=typeof this.value_;B+=C+":",C==="number"?B+=wy(this.value_):B+=this.value_,this.lazyHash_=Ey(B)}return this.lazyHash_}getValue(){return this.value_}compareTo(B){return B===LB.__childrenNodeConstructor.EMPTY_NODE?1:B instanceof LB.__childrenNodeConstructor?-1:(k(B.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(B))}compareToLeafNode_(B){const C=typeof B.value_,t=typeof this.value_,n=LB.VALUE_TYPE_ORDER.indexOf(C),r=LB.VALUE_TYPE_ORDER.indexOf(t);return k(n>=0,"Unknown leaf type: "+C),k(r>=0,"Unknown leaf type: "+t),n===r?t==="object"?0:this.value_<B.value_?-1:this.value_===B.value_?0:1:r-n}withIndex(){return this}isIndexed(){return!0}equals(B){if(B===this)return!0;if(B.isLeafNode()){const C=B;return this.value_===C.value_&&this.priorityNode_.equals(C.priorityNode_)}else return!1}}LB.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let $y,BE;function uH(e){$y=e}function dH(e){BE=e}class fH extends Ql{compare(B,C){const t=B.node.getPriority(),n=C.node.getPriority(),r=t.compareTo(n);return r===0?Dr(B.name,C.name):r}isDefinedOn(B){return!B.getPriority().isEmpty()}indexedValueChanged(B,C){return!B.getPriority().equals(C.getPriority())}minPost(){return Y.MIN}maxPost(){return new Y(cn,new LB("[PRIORITY-POST]",BE))}makePost(B,C){const t=$y(B);return new Y(C,new LB("[PRIORITY-POST]",t))}toString(){return".priority"}}const SB=new fH;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const hH=Math.log(2);class pH{constructor(B){const C=r=>parseInt(Math.log(r)/hH,10),t=r=>parseInt(Array(r+1).join("1"),2);this.count=C(B+1),this.current_=this.count-1;const n=t(this.count);this.bits_=B+1&n}nextBitIsOne(){const B=!(this.bits_&1<<this.current_);return this.current_--,B}}const Uo=function(e,B,C,t){e.sort(B);const n=function(a,o){const c=o-a;let l,u;if(c===0)return null;if(c===1)return l=e[a],u=C?C(l):l,new GB(u,l.node,GB.BLACK,null,null);{const m=parseInt(c/2,10)+a,d=n(a,m),h=n(m+1,o);return l=e[m],u=C?C(l):l,new GB(u,l.node,GB.BLACK,d,h)}},r=function(a){let o=null,c=null,l=e.length;const u=function(d,h){const g=l-d,f=l;l-=d;const p=n(g+1,f),b=e[g],A=C?C(b):b;m(new GB(A,b.node,h,null,p))},m=function(d){o?(o.left=d,o=d):(c=d,o=d)};for(let d=0;d<a.count;++d){const h=a.nextBitIsOne(),g=Math.pow(2,a.count-(d+1));h?u(g,GB.BLACK):(u(g,GB.BLACK),u(g,GB.RED))}return c},i=new pH(e.length),s=r(i);return new ce(t||B,s)};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let ru;const Sn={};class FC{constructor(B,C){this.indexes_=B,this.indexSet_=C}static get Default(){return k(Sn&&SB,"ChildrenNode.ts has not been loaded"),ru=ru||new FC({".priority":Sn},{".priority":SB}),ru}get(B){const C=ur(this.indexes_,B);if(!C)throw new Error("No index defined for "+B);return C instanceof ce?C:null}hasIndex(B){return VC(this.indexSet_,B.toString())}addIndex(B,C){k(B!==Cr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const t=[];let n=!1;const r=C.getIterator(Y.Wrap);let i=r.getNext();for(;i;)n=n||B.isDefinedOn(i.node),t.push(i),i=r.getNext();let s;n?s=Uo(t,B.getCompare()):s=Sn;const a=B.toString(),o=Object.assign({},this.indexSet_);o[a]=B;const c=Object.assign({},this.indexes_);return c[a]=s,new FC(c,o)}addToIndexes(B,C){const t=Oo(this.indexes_,(n,r)=>{const i=ur(this.indexSet_,r);if(k(i,"Missing index implementation for "+r),n===Sn)if(i.isDefinedOn(B.node)){const s=[],a=C.getIterator(Y.Wrap);let o=a.getNext();for(;o;)o.name!==B.name&&s.push(o),o=a.getNext();return s.push(B),Uo(s,i.getCompare())}else return Sn;else{const s=C.get(B.name);let a=n;return s&&(a=a.remove(new Y(B.name,s))),a.insert(B,B.node)}});return new FC(t,this.indexSet_)}removeFromIndexes(B,C){const t=Oo(this.indexes_,n=>{if(n===Sn)return n;{const r=C.get(B.name);return r?n.remove(new Y(B.name,r)):n}});return new FC(t,this.indexSet_)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let Ur;class K{constructor(B,C,t){this.children_=B,this.priorityNode_=C,this.indexMap_=t,this.lazyHash_=null,this.priorityNode_&&_y(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ur||(Ur=new K(new ce(ah),null,FC.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ur}updatePriority(B){return this.children_.isEmpty()?this:new K(this.children_,B,this.indexMap_)}getImmediateChild(B){if(B===".priority")return this.getPriority();{const C=this.children_.get(B);return C===null?Ur:C}}getChild(B){const C=Z(B);return C===null?this:this.getImmediateChild(C).getChild(aB(B))}hasChild(B){return this.children_.get(B)!==null}updateImmediateChild(B,C){if(k(C,"We should always be passing snapshot nodes"),B===".priority")return this.updatePriority(C);{const t=new Y(B,C);let n,r;C.isEmpty()?(n=this.children_.remove(B),r=this.indexMap_.removeFromIndexes(t,this.children_)):(n=this.children_.insert(B,C),r=this.indexMap_.addToIndexes(t,this.children_));const i=n.isEmpty()?Ur:this.priorityNode_;return new K(n,i,r)}}updateChild(B,C){const t=Z(B);if(t===null)return C;{k(Z(B)!==".priority"||St(B)===1,".priority must be the last token in a path");const n=this.getImmediateChild(t).updateChild(aB(B),C);return this.updateImmediateChild(t,n)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(B){if(this.isEmpty())return null;const C={};let t=0,n=0,r=!0;if(this.forEachChild(SB,(i,s)=>{C[i]=s.val(B),t++,r&&K.INTEGER_REGEXP_.test(i)?n=Math.max(n,Number(i)):r=!1}),!B&&r&&n<2*t){const i=[];for(const s in C)i[s]=C[s];return i}else return B&&!this.getPriority().isEmpty()&&(C[".priority"]=this.getPriority().val()),C}hash(){if(this.lazyHash_===null){let B="";this.getPriority().isEmpty()||(B+="priority:"+zy(this.getPriority().val())+":"),this.forEachChild(SB,(C,t)=>{const n=t.hash();n!==""&&(B+=":"+C+":"+n)}),this.lazyHash_=B===""?"":Ey(B)}return this.lazyHash_}getPredecessorChildName(B,C,t){const n=this.resolveIndex_(t);if(n){const r=n.getPredecessorKey(new Y(B,C));return r?r.name:null}else return this.children_.getPredecessorKey(B)}getFirstChildName(B){const C=this.resolveIndex_(B);if(C){const t=C.minKey();return t&&t.name}else return this.children_.minKey()}getFirstChild(B){const C=this.getFirstChildName(B);return C?new Y(C,this.children_.get(C)):null}getLastChildName(B){const C=this.resolveIndex_(B);if(C){const t=C.maxKey();return t&&t.name}else return this.children_.maxKey()}getLastChild(B){const C=this.getLastChildName(B);return C?new Y(C,this.children_.get(C)):null}forEachChild(B,C){const t=this.resolveIndex_(B);return t?t.inorderTraversal(n=>C(n.name,n.node)):this.children_.inorderTraversal(C)}getIterator(B){return this.getIteratorFrom(B.minPost(),B)}getIteratorFrom(B,C){const t=this.resolveIndex_(C);if(t)return t.getIteratorFrom(B,n=>n);{const n=this.children_.getIteratorFrom(B.name,Y.Wrap);let r=n.peek();for(;r!=null&&C.compare(r,B)<0;)n.getNext(),r=n.peek();return n}}getReverseIterator(B){return this.getReverseIteratorFrom(B.maxPost(),B)}getReverseIteratorFrom(B,C){const t=this.resolveIndex_(C);if(t)return t.getReverseIteratorFrom(B,n=>n);{const n=this.children_.getReverseIteratorFrom(B.name,Y.Wrap);let r=n.peek();for(;r!=null&&C.compare(r,B)>0;)n.getNext(),r=n.peek();return n}}compareTo(B){return this.isEmpty()?B.isEmpty()?0:-1:B.isLeafNode()||B.isEmpty()?1:B===vs?-1:0}withIndex(B){if(B===Cr||this.indexMap_.hasIndex(B))return this;{const C=this.indexMap_.addIndex(B,this.children_);return new K(this.children_,this.priorityNode_,C)}}isIndexed(B){return B===Cr||this.indexMap_.hasIndex(B)}equals(B){if(B===this)return!0;if(B.isLeafNode())return!1;{const C=B;if(this.getPriority().equals(C.getPriority()))if(this.children_.count()===C.children_.count()){const t=this.getIterator(SB),n=C.getIterator(SB);let r=t.getNext(),i=n.getNext();for(;r&&i;){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=t.getNext(),i=n.getNext()}return r===null&&i===null}else return!1;else return!1}}resolveIndex_(B){return B===Cr?null:this.indexMap_.get(B.toString())}}K.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class mH extends K{constructor(){super(new ce(ah),K.EMPTY_NODE,FC.Default)}compareTo(B){return B===this?0:1}equals(B){return B===this}getPriority(){return this}getImmediateChild(B){return K.EMPTY_NODE}isEmpty(){return!1}}const vs=new mH;Object.defineProperties(Y,{MIN:{value:new Y(fr,K.EMPTY_NODE)},MAX:{value:new Y(cn,vs)}});qy.__EMPTY_NODE=K.EMPTY_NODE;LB.__childrenNodeConstructor=K;cH(vs);dH(vs);/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const gH=!0;function xB(e,B=null){if(e===null)return K.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(B=e[".priority"]),k(B===null||typeof B=="string"||typeof B=="number"||typeof B=="object"&&".sv"in B,"Invalid priority type found: "+typeof B),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const C=e;return new LB(C,xB(B))}if(!(e instanceof Array)&&gH){const C=[];let t=!1;if(me(e,(r,i)=>{if(r.substring(0,1)!=="."){const s=xB(i);s.isEmpty()||(t=t||!s.getPriority().isEmpty(),C.push(new Y(r,s)))}}),C.length===0)return K.EMPTY_NODE;const n=Uo(C,lH,r=>r.name,ah);if(t){const r=Uo(C,SB.getCompare());return new K(n,xB(B),new FC({".priority":r},{".priority":SB}))}else return new K(n,xB(B),FC.Default)}else{let C=K.EMPTY_NODE;return me(e,(t,n)=>{if(VC(e,t)&&t.substring(0,1)!=="."){const r=xB(n);(r.isLeafNode()||!r.isEmpty())&&(C=C.updateImmediateChild(t,r))}}),C.updatePriority(xB(B))}}uH(xB);/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class bH extends Ql{constructor(B){super(),this.indexPath_=B,k(!X(B)&&Z(B)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(B){return B.getChild(this.indexPath_)}isDefinedOn(B){return!B.getChild(this.indexPath_).isEmpty()}compare(B,C){const t=this.extractChild(B.node),n=this.extractChild(C.node),r=t.compareTo(n);return r===0?Dr(B.name,C.name):r}makePost(B,C){const t=xB(B),n=K.EMPTY_NODE.updateChild(this.indexPath_,t);return new Y(C,n)}maxPost(){const B=K.EMPTY_NODE.updateChild(this.indexPath_,vs);return new Y(cn,B)}toString(){return jy(this.indexPath_,0).join("/")}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class AH extends Ql{compare(B,C){const t=B.node.compareTo(C.node);return t===0?Dr(B.name,C.name):t}isDefinedOn(B){return!0}indexedValueChanged(B,C){return!B.equals(C)}minPost(){return Y.MIN}maxPost(){return Y.MAX}makePost(B,C){const t=xB(B);return new Y(C,t)}toString(){return".value"}}const vH=new AH;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function eE(e){return{type:"value",snapshotNode:e}}function hr(e,B){return{type:"child_added",snapshotNode:B,childName:e}}function Vi(e,B){return{type:"child_removed",snapshotNode:B,childName:e}}function Wi(e,B,C){return{type:"child_changed",snapshotNode:B,childName:e,oldSnap:C}}function yH(e,B){return{type:"child_moved",snapshotNode:B,childName:e}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class oh{constructor(B){this.index_=B}updateChild(B,C,t,n,r,i){k(B.isIndexed(this.index_),"A node must be indexed if only a child is updated");const s=B.getImmediateChild(C);return s.getChild(n).equals(t.getChild(n))&&s.isEmpty()===t.isEmpty()||(i!=null&&(t.isEmpty()?B.hasChild(C)?i.trackChildChange(Vi(C,s)):k(B.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):s.isEmpty()?i.trackChildChange(hr(C,t)):i.trackChildChange(Wi(C,t,s))),B.isLeafNode()&&t.isEmpty())?B:B.updateImmediateChild(C,t).withIndex(this.index_)}updateFullNode(B,C,t){return t!=null&&(B.isLeafNode()||B.forEachChild(SB,(n,r)=>{C.hasChild(n)||t.trackChildChange(Vi(n,r))}),C.isLeafNode()||C.forEachChild(SB,(n,r)=>{if(B.hasChild(n)){const i=B.getImmediateChild(n);i.equals(r)||t.trackChildChange(Wi(n,r,i))}else t.trackChildChange(hr(n,r))})),C.withIndex(this.index_)}updatePriority(B,C){return B.isEmpty()?K.EMPTY_NODE:B.updatePriority(C)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ji{constructor(B){this.indexedFilter_=new oh(B.getIndex()),this.index_=B.getIndex(),this.startPost_=ji.getStartPost_(B),this.endPost_=ji.getEndPost_(B),this.startIsInclusive_=!B.startAfterSet_,this.endIsInclusive_=!B.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(B){const C=this.startIsInclusive_?this.index_.compare(this.getStartPost(),B)<=0:this.index_.compare(this.getStartPost(),B)<0,t=this.endIsInclusive_?this.index_.compare(B,this.getEndPost())<=0:this.index_.compare(B,this.getEndPost())<0;return C&&t}updateChild(B,C,t,n,r,i){return this.matches(new Y(C,t))||(t=K.EMPTY_NODE),this.indexedFilter_.updateChild(B,C,t,n,r,i)}updateFullNode(B,C,t){C.isLeafNode()&&(C=K.EMPTY_NODE);let n=C.withIndex(this.index_);n=n.updatePriority(K.EMPTY_NODE);const r=this;return C.forEachChild(SB,(i,s)=>{r.matches(new Y(i,s))||(n=n.updateImmediateChild(i,K.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(B,n,t)}updatePriority(B,C){return B}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(B){if(B.hasStart()){const C=B.getIndexStartName();return B.getIndex().makePost(B.getIndexStartValue(),C)}else return B.getIndex().minPost()}static getEndPost_(B){if(B.hasEnd()){const C=B.getIndexEndName();return B.getIndex().makePost(B.getIndexEndValue(),C)}else return B.getIndex().maxPost()}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class EH{constructor(B){this.withinDirectionalStart=C=>this.reverse_?this.withinEndPost(C):this.withinStartPost(C),this.withinDirectionalEnd=C=>this.reverse_?this.withinStartPost(C):this.withinEndPost(C),this.withinStartPost=C=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),C);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=C=>{const t=this.index_.compare(C,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new ji(B),this.index_=B.getIndex(),this.limit_=B.getLimit(),this.reverse_=!B.isViewFromLeft(),this.startIsInclusive_=!B.startAfterSet_,this.endIsInclusive_=!B.endBeforeSet_}updateChild(B,C,t,n,r,i){return this.rangedFilter_.matches(new Y(C,t))||(t=K.EMPTY_NODE),B.getImmediateChild(C).equals(t)?B:B.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(B,C,t,n,r,i):this.fullLimitUpdateChild_(B,C,t,r,i)}updateFullNode(B,C,t){let n;if(C.isLeafNode()||C.isEmpty())n=K.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<C.numChildren()&&C.isIndexed(this.index_)){n=K.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=C.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=C.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let i=0;for(;r.hasNext()&&i<this.limit_;){const s=r.getNext();if(this.withinDirectionalStart(s))if(this.withinDirectionalEnd(s))n=n.updateImmediateChild(s.name,s.node),i++;else break;else continue}}else{n=C.withIndex(this.index_),n=n.updatePriority(K.EMPTY_NODE);let r;this.reverse_?r=n.getReverseIterator(this.index_):r=n.getIterator(this.index_);let i=0;for(;r.hasNext();){const s=r.getNext();i<this.limit_&&this.withinDirectionalStart(s)&&this.withinDirectionalEnd(s)?i++:n=n.updateImmediateChild(s.name,K.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(B,n,t)}updatePriority(B,C){return B}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(B,C,t,n,r){let i;if(this.reverse_){const l=this.index_.getCompare();i=(u,m)=>l(m,u)}else i=this.index_.getCompare();const s=B;k(s.numChildren()===this.limit_,"");const a=new Y(C,t),o=this.reverse_?s.getFirstChild(this.index_):s.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(s.hasChild(C)){const l=s.getImmediateChild(C);let u=n.getChildAfterChild(this.index_,o,this.reverse_);for(;u!=null&&(u.name===C||s.hasChild(u.name));)u=n.getChildAfterChild(this.index_,u,this.reverse_);const m=u==null?1:i(u,a);if(c&&!t.isEmpty()&&m>=0)return r!=null&&r.trackChildChange(Wi(C,t,l)),s.updateImmediateChild(C,t);{r!=null&&r.trackChildChange(Vi(C,l));const d=s.updateImmediateChild(C,K.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(r!=null&&r.trackChildChange(hr(u.name,u.node)),d.updateImmediateChild(u.name,u.node)):d}}else return t.isEmpty()?B:c&&i(o,a)>=0?(r!=null&&(r.trackChildChange(Vi(o.name,o.node)),r.trackChildChange(hr(C,t))),s.updateImmediateChild(C,t).updateImmediateChild(o.name,K.EMPTY_NODE)):B}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class lh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=SB}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:fr}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:cn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===SB}copy(){const B=new lh;return B.limitSet_=this.limitSet_,B.limit_=this.limit_,B.startSet_=this.startSet_,B.startAfterSet_=this.startAfterSet_,B.indexStartValue_=this.indexStartValue_,B.startNameSet_=this.startNameSet_,B.indexStartName_=this.indexStartName_,B.endSet_=this.endSet_,B.endBeforeSet_=this.endBeforeSet_,B.indexEndValue_=this.indexEndValue_,B.endNameSet_=this.endNameSet_,B.indexEndName_=this.indexEndName_,B.index_=this.index_,B.viewFrom_=this.viewFrom_,B}}function IH(e){return e.loadsAllData()?new oh(e.getIndex()):e.hasLimit()?new EH(e):new ji(e)}function Hm(e){const B={};if(e.isDefault())return B;let C;if(e.index_===SB?C="$priority":e.index_===vH?C="$value":e.index_===Cr?C="$key":(k(e.index_ instanceof bH,"Unrecognized index type!"),C=e.index_.toString()),B.orderBy=NB(C),e.startSet_){const t=e.startAfterSet_?"startAfter":"startAt";B[t]=NB(e.indexStartValue_),e.startNameSet_&&(B[t]+=","+NB(e.indexStartName_))}if(e.endSet_){const t=e.endBeforeSet_?"endBefore":"endAt";B[t]=NB(e.indexEndValue_),e.endNameSet_&&(B[t]+=","+NB(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?B.limitToFirst=e.limit_:B.limitToLast=e.limit_),B}function Mm(e){const B={};if(e.startSet_&&(B.sp=e.indexStartValue_,e.startNameSet_&&(B.sn=e.indexStartName_),B.sin=!e.startAfterSet_),e.endSet_&&(B.ep=e.indexEndValue_,e.endNameSet_&&(B.en=e.indexEndName_),B.ein=!e.endBeforeSet_),e.limitSet_){B.l=e.limit_;let C=e.viewFrom_;C===""&&(e.isViewFromLeft()?C="l":C="r"),B.vf=C}return e.index_!==SB&&(B.i=e.index_.toString()),B}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Vo extends Uy{constructor(B,C,t,n){super(),this.repoInfo_=B,this.onDataUpdate_=C,this.authTokenProvider_=t,this.appCheckTokenProvider_=n,this.log_=As("p:rest:"),this.listens_={}}reportStats(B){throw new Error("Method not implemented.")}static getListenId_(B,C){return C!==void 0?"tag$"+C:(k(B._queryParams.isDefault(),"should have a tag if it's not a default query."),B._path.toString())}listen(B,C,t,n){const r=B._path.toString();this.log_("Listen called for "+r+" "+B._queryIdentifier);const i=Vo.getListenId_(B,t),s={};this.listens_[i]=s;const a=Hm(B._queryParams);this.restRequest_(r+".json",a,(o,c)=>{let l=c;if(o===404&&(l=null,o=null),o===null&&this.onDataUpdate_(r,l,!1,t),ur(this.listens_,i)===s){let u;o?o===401?u="permission_denied":u="rest_error:"+o:u="ok",n(u,null)}})}unlisten(B,C){const t=Vo.getListenId_(B,C);delete this.listens_[t]}get(B){const C=Hm(B._queryParams),t=B._path.toString(),n=new Ol;return this.restRequest_(t+".json",C,(r,i)=>{let s=i;r===404&&(s=null,r=null),r===null?(this.onDataUpdate_(t,s,!1,null),n.resolve(s)):n.reject(new Error(s))}),n.promise}refreshAuthToken(B){}restRequest_(B,C={},t){return C.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([n,r])=>{n&&n.accessToken&&(C.auth=n.accessToken),r&&r.token&&(C.ac=r.token);const i=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+B+"?ns="+this.repoInfo_.namespace+Sr(C);this.log_("Sending REST request for "+i);const s=new XMLHttpRequest;s.onreadystatechange=()=>{if(t&&s.readyState===4){this.log_("REST Response for "+i+" received. status:",s.status,"response:",s.responseText);let a=null;if(s.status>=200&&s.status<300){try{a=Gi(s.responseText)}catch{pe("Failed to parse JSON response for "+i+": "+s.responseText)}t(null,a)}else s.status!==401&&s.status!==404&&pe("Got unsuccessful REST response for "+i+" Status: "+s.status),t(s.status);t=null}},s.open("GET",i,!0),s.send()})}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class SH{constructor(){this.rootNode_=K.EMPTY_NODE}getNode(B){return this.rootNode_.getChild(B)}updateSnapshot(B,C){this.rootNode_=this.rootNode_.updateChild(B,C)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Wo(){return{value:null,children:new Map}}function CE(e,B,C){if(X(B))e.value=C,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(B,C);else{const t=Z(B);e.children.has(t)||e.children.set(t,Wo());const n=e.children.get(t);B=aB(B),CE(n,B,C)}}function X1(e,B,C){e.value!==null?C(B,e.value):wH(e,(t,n)=>{const r=new iB(B.toString()+"/"+t);X1(n,r,C)})}function wH(e,B){e.children.forEach((C,t)=>{B(t,C)})}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class DH{constructor(B){this.collection_=B,this.last_=null}get(){const B=this.collection_.get(),C=Object.assign({},B);return this.last_&&me(this.last_,(t,n)=>{C[t]=C[t]-n}),this.last_=B,C}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Lm=10*1e3,kH=30*1e3,PH=5*60*1e3;class FH{constructor(B,C){this.server_=C,this.statsToReport_={},this.statsListener_=new DH(B);const t=Lm+(kH-Lm)*Math.random();di(this.reportStats_.bind(this),Math.floor(t))}reportStats_(){const B=this.statsListener_.get(),C={};let t=!1;me(B,(n,r)=>{r>0&&VC(this.statsToReport_,n)&&(C[n]=r,t=!0)}),t&&this.server_.reportStats(C),di(this.reportStats_.bind(this),Math.floor(Math.random()*2*PH))}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ze;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ze||(ze={}));function tE(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ch(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function uh(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class jo{constructor(B,C,t){this.path=B,this.affectedTree=C,this.revert=t,this.type=ze.ACK_USER_WRITE,this.source=tE()}operationForChild(B){if(X(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const C=this.affectedTree.subtree(new iB(B));return new jo($(),C,this.revert)}}else return k(Z(this.path)===B,"operationForChild called for unrelated child."),new jo(aB(this.path),this.affectedTree,this.revert)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Yi{constructor(B,C){this.source=B,this.path=C,this.type=ze.LISTEN_COMPLETE}operationForChild(B){return X(this.path)?new Yi(this.source,$()):new Yi(this.source,aB(this.path))}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class un{constructor(B,C,t){this.source=B,this.path=C,this.snap=t,this.type=ze.OVERWRITE}operationForChild(B){return X(this.path)?new un(this.source,$(),this.snap.getImmediateChild(B)):new un(this.source,aB(this.path),this.snap)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Xi{constructor(B,C,t){this.source=B,this.path=C,this.children=t,this.type=ze.MERGE}operationForChild(B){if(X(this.path)){const C=this.children.subtree(new iB(B));return C.isEmpty()?null:C.value?new un(this.source,$(),C.value):new Xi(this.source,$(),C)}else return k(Z(this.path)===B,"Can't get a merge for a child not on the path of the operation"),new Xi(this.source,aB(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class wt{constructor(B,C,t){this.node_=B,this.fullyInitialized_=C,this.filtered_=t}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(B){if(X(B))return this.isFullyInitialized()&&!this.filtered_;const C=Z(B);return this.isCompleteForChild(C)}isCompleteForChild(B){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(B)}getNode(){return this.node_}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class NH{constructor(B){this.query_=B,this.index_=this.query_._queryParams.getIndex()}}function OH(e,B,C,t){const n=[],r=[];return B.forEach(i=>{i.type==="child_changed"&&e.index_.indexedValueChanged(i.oldSnap,i.snapshotNode)&&r.push(yH(i.childName,i.snapshotNode))}),Vr(e,n,"child_removed",B,t,C),Vr(e,n,"child_added",B,t,C),Vr(e,n,"child_moved",r,t,C),Vr(e,n,"child_changed",B,t,C),Vr(e,n,"value",B,t,C),n}function Vr(e,B,C,t,n,r){const i=t.filter(s=>s.type===C);i.sort((s,a)=>HH(e,s,a)),i.forEach(s=>{const a=RH(e,s,r);n.forEach(o=>{o.respondsTo(s.type)&&B.push(o.createEvent(a,e.query_))})})}function RH(e,B,C){return B.type==="value"||B.type==="child_removed"||(B.prevName=C.getPredecessorChildName(B.childName,B.snapshotNode,e.index_)),B}function HH(e,B,C){if(B.childName==null||C.childName==null)throw Ir("Should only compare child_ events.");const t=new Y(B.childName,B.snapshotNode),n=new Y(C.childName,C.snapshotNode);return e.index_.compare(t,n)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Jl(e,B){return{eventCache:e,serverCache:B}}function fi(e,B,C,t){return Jl(new wt(B,C,t),e.serverCache)}function nE(e,B,C,t){return Jl(e.eventCache,new wt(B,C,t))}function Yo(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function dn(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let iu;const MH=()=>(iu||(iu=new ce(A4)),iu);class dB{constructor(B,C=MH()){this.value=B,this.children=C}static fromObject(B){let C=new dB(null);return me(B,(t,n)=>{C=C.set(new iB(t),n)}),C}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(B,C){if(this.value!=null&&C(this.value))return{path:$(),value:this.value};if(X(B))return null;{const t=Z(B),n=this.children.get(t);if(n!==null){const r=n.findRootMostMatchingPathAndValue(aB(B),C);return r!=null?{path:OB(new iB(t),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(B){return this.findRootMostMatchingPathAndValue(B,()=>!0)}subtree(B){if(X(B))return this;{const C=Z(B),t=this.children.get(C);return t!==null?t.subtree(aB(B)):new dB(null)}}set(B,C){if(X(B))return new dB(C,this.children);{const t=Z(B),n=(this.children.get(t)||new dB(null)).set(aB(B),C),r=this.children.insert(t,n);return new dB(this.value,r)}}remove(B){if(X(B))return this.children.isEmpty()?new dB(null):new dB(null,this.children);{const C=Z(B),t=this.children.get(C);if(t){const n=t.remove(aB(B));let r;return n.isEmpty()?r=this.children.remove(C):r=this.children.insert(C,n),this.value===null&&r.isEmpty()?new dB(null):new dB(this.value,r)}else return this}}get(B){if(X(B))return this.value;{const C=Z(B),t=this.children.get(C);return t?t.get(aB(B)):null}}setTree(B,C){if(X(B))return C;{const t=Z(B),n=(this.children.get(t)||new dB(null)).setTree(aB(B),C);let r;return n.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,n),new dB(this.value,r)}}fold(B){return this.fold_($(),B)}fold_(B,C){const t={};return this.children.inorderTraversal((n,r)=>{t[n]=r.fold_(OB(B,n),C)}),C(B,this.value,t)}findOnPath(B,C){return this.findOnPath_(B,$(),C)}findOnPath_(B,C,t){const n=this.value?t(C,this.value):!1;if(n)return n;if(X(B))return null;{const r=Z(B),i=this.children.get(r);return i?i.findOnPath_(aB(B),OB(C,r),t):null}}foreachOnPath(B,C){return this.foreachOnPath_(B,$(),C)}foreachOnPath_(B,C,t){if(X(B))return this;{this.value&&t(C,this.value);const n=Z(B),r=this.children.get(n);return r?r.foreachOnPath_(aB(B),OB(C,n),t):new dB(null)}}foreach(B){this.foreach_($(),B)}foreach_(B,C){this.children.inorderTraversal((t,n)=>{n.foreach_(OB(B,t),C)}),this.value&&C(B,this.value)}foreachChild(B){this.children.inorderTraversal((C,t)=>{t.value&&B(C,t.value)})}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class tC{constructor(B){this.writeTree_=B}static empty(){return new tC(new dB(null))}}function hi(e,B,C){if(X(B))return new tC(new dB(C));{const t=e.writeTree_.findRootMostValueAndPath(B);if(t!=null){const n=t.path;let r=t.value;const i=ee(n,B);return r=r.updateChild(i,C),new tC(e.writeTree_.set(n,r))}else{const n=new dB(C),r=e.writeTree_.setTree(B,n);return new tC(r)}}}function Tm(e,B,C){let t=e;return me(C,(n,r)=>{t=hi(t,OB(B,n),r)}),t}function Gm(e,B){if(X(B))return tC.empty();{const C=e.writeTree_.setTree(B,new dB(null));return new tC(C)}}function Z1(e,B){return vn(e,B)!=null}function vn(e,B){const C=e.writeTree_.findRootMostValueAndPath(B);return C!=null?e.writeTree_.get(C.path).getChild(ee(C.path,B)):null}function xm(e){const B=[],C=e.writeTree_.value;return C!=null?C.isLeafNode()||C.forEachChild(SB,(t,n)=>{B.push(new Y(t,n))}):e.writeTree_.children.inorderTraversal((t,n)=>{n.value!=null&&B.push(new Y(t,n.value))}),B}function At(e,B){if(X(B))return e;{const C=vn(e,B);return C!=null?new tC(new dB(C)):new tC(e.writeTree_.subtree(B))}}function q1(e){return e.writeTree_.isEmpty()}function pr(e,B){return rE($(),e.writeTree_,B)}function rE(e,B,C){if(B.value!=null)return C.updateChild(e,B.value);{let t=null;return B.children.inorderTraversal((n,r)=>{n===".priority"?(k(r.value!==null,"Priority writes must always be leaf nodes"),t=r.value):C=rE(OB(e,n),r,C)}),!C.getChild(e).isEmpty()&&t!==null&&(C=C.updateChild(OB(e,".priority"),t)),C}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ul(e,B){return oE(B,e)}function LH(e,B,C,t,n){k(t>e.lastWriteId,"Stacking an older write on top of newer ones"),n===void 0&&(n=!0),e.allWrites.push({path:B,snap:C,writeId:t,visible:n}),n&&(e.visibleWrites=hi(e.visibleWrites,B,C)),e.lastWriteId=t}function TH(e,B){for(let C=0;C<e.allWrites.length;C++){const t=e.allWrites[C];if(t.writeId===B)return t}return null}function GH(e,B){const C=e.allWrites.findIndex(s=>s.writeId===B);k(C>=0,"removeWrite called with nonexistent writeId.");const t=e.allWrites[C];e.allWrites.splice(C,1);let n=t.visible,r=!1,i=e.allWrites.length-1;for(;n&&i>=0;){const s=e.allWrites[i];s.visible&&(i>=C&&xH(s,t.path)?n=!1:qe(t.path,s.path)&&(r=!0)),i--}if(n){if(r)return KH(e),!0;if(t.snap)e.visibleWrites=Gm(e.visibleWrites,t.path);else{const s=t.children;me(s,a=>{e.visibleWrites=Gm(e.visibleWrites,OB(t.path,a))})}return!0}else return!1}function xH(e,B){if(e.snap)return qe(e.path,B);for(const C in e.children)if(e.children.hasOwnProperty(C)&&qe(OB(e.path,C),B))return!0;return!1}function KH(e){e.visibleWrites=iE(e.allWrites,QH,$()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function QH(e){return e.visible}function iE(e,B,C){let t=tC.empty();for(let n=0;n<e.length;++n){const r=e[n];if(B(r)){const i=r.path;let s;if(r.snap)qe(C,i)?(s=ee(C,i),t=hi(t,s,r.snap)):qe(i,C)&&(s=ee(i,C),t=hi(t,$(),r.snap.getChild(s)));else if(r.children){if(qe(C,i))s=ee(C,i),t=Tm(t,s,r.children);else if(qe(i,C))if(s=ee(i,C),X(s))t=Tm(t,$(),r.children);else{const a=ur(r.children,Z(s));if(a){const o=a.getChild(aB(s));t=hi(t,$(),o)}}}else throw Ir("WriteRecord should have .snap or .children")}}return t}function sE(e,B,C,t,n){if(!t&&!n){const r=vn(e.visibleWrites,B);if(r!=null)return r;{const i=At(e.visibleWrites,B);if(q1(i))return C;if(C==null&&!Z1(i,$()))return null;{const s=C||K.EMPTY_NODE;return pr(i,s)}}}else{const r=At(e.visibleWrites,B);if(!n&&q1(r))return C;if(!n&&C==null&&!Z1(r,$()))return null;{const i=function(o){return(o.visible||n)&&(!t||!~t.indexOf(o.writeId))&&(qe(o.path,B)||qe(B,o.path))},s=iE(e.allWrites,i,B),a=C||K.EMPTY_NODE;return pr(s,a)}}}function JH(e,B,C){let t=K.EMPTY_NODE;const n=vn(e.visibleWrites,B);if(n)return n.isLeafNode()||n.forEachChild(SB,(r,i)=>{t=t.updateImmediateChild(r,i)}),t;if(C){const r=At(e.visibleWrites,B);return C.forEachChild(SB,(i,s)=>{const a=pr(At(r,new iB(i)),s);t=t.updateImmediateChild(i,a)}),xm(r).forEach(i=>{t=t.updateImmediateChild(i.name,i.node)}),t}else{const r=At(e.visibleWrites,B);return xm(r).forEach(i=>{t=t.updateImmediateChild(i.name,i.node)}),t}}function UH(e,B,C,t,n){k(t||n,"Either existingEventSnap or existingServerSnap must exist");const r=OB(B,C);if(Z1(e.visibleWrites,r))return null;{const i=At(e.visibleWrites,r);return q1(i)?n.getChild(C):pr(i,n.getChild(C))}}function VH(e,B,C,t){const n=OB(B,C),r=vn(e.visibleWrites,n);if(r!=null)return r;if(t.isCompleteForChild(C)){const i=At(e.visibleWrites,n);return pr(i,t.getNode().getImmediateChild(C))}else return null}function WH(e,B){return vn(e.visibleWrites,B)}function jH(e,B,C,t,n,r,i){let s;const a=At(e.visibleWrites,B),o=vn(a,$());if(o!=null)s=o;else if(C!=null)s=pr(a,C);else return[];if(s=s.withIndex(i),!s.isEmpty()&&!s.isLeafNode()){const c=[],l=i.getCompare(),u=r?s.getReverseIteratorFrom(t,i):s.getIteratorFrom(t,i);let m=u.getNext();for(;m&&c.length<n;)l(m,t)!==0&&c.push(m),m=u.getNext();return c}else return[]}function YH(){return{visibleWrites:tC.empty(),allWrites:[],lastWriteId:-1}}function Xo(e,B,C,t){return sE(e.writeTree,e.treePath,B,C,t)}function dh(e,B){return JH(e.writeTree,e.treePath,B)}function Km(e,B,C,t){return UH(e.writeTree,e.treePath,B,C,t)}function Zo(e,B){return WH(e.writeTree,OB(e.treePath,B))}function XH(e,B,C,t,n,r){return jH(e.writeTree,e.treePath,B,C,t,n,r)}function fh(e,B,C){return VH(e.writeTree,e.treePath,B,C)}function aE(e,B){return oE(OB(e.treePath,B),e.writeTree)}function oE(e,B){return{treePath:e,writeTree:B}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ZH{constructor(){this.changeMap=new Map}trackChildChange(B){const C=B.type,t=B.childName;k(C==="child_added"||C==="child_changed"||C==="child_removed","Only child changes supported for tracking"),k(t!==".priority","Only non-priority child changes can be tracked.");const n=this.changeMap.get(t);if(n){const r=n.type;if(C==="child_added"&&r==="child_removed")this.changeMap.set(t,Wi(t,B.snapshotNode,n.snapshotNode));else if(C==="child_removed"&&r==="child_added")this.changeMap.delete(t);else if(C==="child_removed"&&r==="child_changed")this.changeMap.set(t,Vi(t,n.oldSnap));else if(C==="child_changed"&&r==="child_added")this.changeMap.set(t,hr(t,B.snapshotNode));else if(C==="child_changed"&&r==="child_changed")this.changeMap.set(t,Wi(t,B.snapshotNode,n.oldSnap));else throw Ir("Illegal combination of changes: "+B+" occurred after "+n)}else this.changeMap.set(t,B)}getChanges(){return Array.from(this.changeMap.values())}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class qH{getCompleteChild(B){return null}getChildAfterChild(B,C,t){return null}}const lE=new qH;class hh{constructor(B,C,t=null){this.writes_=B,this.viewCache_=C,this.optCompleteServerCache_=t}getCompleteChild(B){const C=this.viewCache_.eventCache;if(C.isCompleteForChild(B))return C.getNode().getImmediateChild(B);{const t=this.optCompleteServerCache_!=null?new wt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return fh(this.writes_,B,t)}}getChildAfterChild(B,C,t){const n=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:dn(this.viewCache_),r=XH(this.writes_,n,C,1,t,B);return r.length===0?null:r[0]}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function zH(e){return{filter:e}}function _H(e,B){k(B.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),k(B.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function $H(e,B,C,t,n){const r=new ZH;let i,s;if(C.type===ze.OVERWRITE){const o=C;o.source.fromUser?i=z1(e,B,o.path,o.snap,t,n,r):(k(o.source.fromServer,"Unknown source."),s=o.source.tagged||B.serverCache.isFiltered()&&!X(o.path),i=qo(e,B,o.path,o.snap,t,n,s,r))}else if(C.type===ze.MERGE){const o=C;o.source.fromUser?i=eM(e,B,o.path,o.children,t,n,r):(k(o.source.fromServer,"Unknown source."),s=o.source.tagged||B.serverCache.isFiltered(),i=_1(e,B,o.path,o.children,t,n,s,r))}else if(C.type===ze.ACK_USER_WRITE){const o=C;o.revert?i=nM(e,B,o.path,t,n,r):i=CM(e,B,o.path,o.affectedTree,t,n,r)}else if(C.type===ze.LISTEN_COMPLETE)i=tM(e,B,C.path,t,r);else throw Ir("Unknown operation type: "+C.type);const a=r.getChanges();return BM(B,i,a),{viewCache:i,changes:a}}function BM(e,B,C){const t=B.eventCache;if(t.isFullyInitialized()){const n=t.getNode().isLeafNode()||t.getNode().isEmpty(),r=Yo(e);(C.length>0||!e.eventCache.isFullyInitialized()||n&&!t.getNode().equals(r)||!t.getNode().getPriority().equals(r.getPriority()))&&C.push(eE(Yo(B)))}}function cE(e,B,C,t,n,r){const i=B.eventCache;if(Zo(t,C)!=null)return B;{let s,a;if(X(C))if(k(B.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),B.serverCache.isFiltered()){const o=dn(B),c=o instanceof K?o:K.EMPTY_NODE,l=dh(t,c);s=e.filter.updateFullNode(B.eventCache.getNode(),l,r)}else{const o=Xo(t,dn(B));s=e.filter.updateFullNode(B.eventCache.getNode(),o,r)}else{const o=Z(C);if(o===".priority"){k(St(C)===1,"Can't have a priority with additional path components");const c=i.getNode();a=B.serverCache.getNode();const l=Km(t,C,c,a);l!=null?s=e.filter.updatePriority(c,l):s=i.getNode()}else{const c=aB(C);let l;if(i.isCompleteForChild(o)){a=B.serverCache.getNode();const u=Km(t,C,i.getNode(),a);u!=null?l=i.getNode().getImmediateChild(o).updateChild(c,u):l=i.getNode().getImmediateChild(o)}else l=fh(t,o,B.serverCache);l!=null?s=e.filter.updateChild(i.getNode(),o,l,c,n,r):s=i.getNode()}}return fi(B,s,i.isFullyInitialized()||X(C),e.filter.filtersNodes())}}function qo(e,B,C,t,n,r,i,s){const a=B.serverCache;let o;const c=i?e.filter:e.filter.getIndexedFilter();if(X(C))o=c.updateFullNode(a.getNode(),t,null);else if(c.filtersNodes()&&!a.isFiltered()){const m=a.getNode().updateChild(C,t);o=c.updateFullNode(a.getNode(),m,null)}else{const m=Z(C);if(!a.isCompleteForPath(C)&&St(C)>1)return B;const d=aB(C),h=a.getNode().getImmediateChild(m).updateChild(d,t);m===".priority"?o=c.updatePriority(a.getNode(),h):o=c.updateChild(a.getNode(),m,h,d,lE,null)}const l=nE(B,o,a.isFullyInitialized()||X(C),c.filtersNodes()),u=new hh(n,l,r);return cE(e,l,C,n,u,s)}function z1(e,B,C,t,n,r,i){const s=B.eventCache;let a,o;const c=new hh(n,B,r);if(X(C))o=e.filter.updateFullNode(B.eventCache.getNode(),t,i),a=fi(B,o,!0,e.filter.filtersNodes());else{const l=Z(C);if(l===".priority")o=e.filter.updatePriority(B.eventCache.getNode(),t),a=fi(B,o,s.isFullyInitialized(),s.isFiltered());else{const u=aB(C),m=s.getNode().getImmediateChild(l);let d;if(X(u))d=t;else{const h=c.getCompleteChild(l);h!=null?Wy(u)===".priority"&&h.getChild(Yy(u)).isEmpty()?d=h:d=h.updateChild(u,t):d=K.EMPTY_NODE}if(m.equals(d))a=B;else{const h=e.filter.updateChild(s.getNode(),l,d,u,c,i);a=fi(B,h,s.isFullyInitialized(),e.filter.filtersNodes())}}}return a}function Qm(e,B){return e.eventCache.isCompleteForChild(B)}function eM(e,B,C,t,n,r,i){let s=B;return t.foreach((a,o)=>{const c=OB(C,a);Qm(B,Z(c))&&(s=z1(e,s,c,o,n,r,i))}),t.foreach((a,o)=>{const c=OB(C,a);Qm(B,Z(c))||(s=z1(e,s,c,o,n,r,i))}),s}function Jm(e,B,C){return C.foreach((t,n)=>{B=B.updateChild(t,n)}),B}function _1(e,B,C,t,n,r,i,s){if(B.serverCache.getNode().isEmpty()&&!B.serverCache.isFullyInitialized())return B;let a=B,o;X(C)?o=t:o=new dB(null).setTree(C,t);const c=B.serverCache.getNode();return o.children.inorderTraversal((l,u)=>{if(c.hasChild(l)){const m=B.serverCache.getNode().getImmediateChild(l),d=Jm(e,m,u);a=qo(e,a,new iB(l),d,n,r,i,s)}}),o.children.inorderTraversal((l,u)=>{const m=!B.serverCache.isCompleteForChild(l)&&u.value===null;if(!c.hasChild(l)&&!m){const d=B.serverCache.getNode().getImmediateChild(l),h=Jm(e,d,u);a=qo(e,a,new iB(l),h,n,r,i,s)}}),a}function CM(e,B,C,t,n,r,i){if(Zo(n,C)!=null)return B;const s=B.serverCache.isFiltered(),a=B.serverCache;if(t.value!=null){if(X(C)&&a.isFullyInitialized()||a.isCompleteForPath(C))return qo(e,B,C,a.getNode().getChild(C),n,r,s,i);if(X(C)){let o=new dB(null);return a.getNode().forEachChild(Cr,(c,l)=>{o=o.set(new iB(c),l)}),_1(e,B,C,o,n,r,s,i)}else return B}else{let o=new dB(null);return t.foreach((c,l)=>{const u=OB(C,c);a.isCompleteForPath(u)&&(o=o.set(c,a.getNode().getChild(u)))}),_1(e,B,C,o,n,r,s,i)}}function tM(e,B,C,t,n){const r=B.serverCache,i=nE(B,r.getNode(),r.isFullyInitialized()||X(C),r.isFiltered());return cE(e,i,C,t,lE,n)}function nM(e,B,C,t,n,r){let i;if(Zo(t,C)!=null)return B;{const s=new hh(t,B,n),a=B.eventCache.getNode();let o;if(X(C)||Z(C)===".priority"){let c;if(B.serverCache.isFullyInitialized())c=Xo(t,dn(B));else{const l=B.serverCache.getNode();k(l instanceof K,"serverChildren would be complete if leaf node"),c=dh(t,l)}c=c,o=e.filter.updateFullNode(a,c,r)}else{const c=Z(C);let l=fh(t,c,B.serverCache);l==null&&B.serverCache.isCompleteForChild(c)&&(l=a.getImmediateChild(c)),l!=null?o=e.filter.updateChild(a,c,l,aB(C),s,r):B.eventCache.getNode().hasChild(c)?o=e.filter.updateChild(a,c,K.EMPTY_NODE,aB(C),s,r):o=a,o.isEmpty()&&B.serverCache.isFullyInitialized()&&(i=Xo(t,dn(B)),i.isLeafNode()&&(o=e.filter.updateFullNode(o,i,r)))}return i=B.serverCache.isFullyInitialized()||Zo(t,$())!=null,fi(B,o,i,e.filter.filtersNodes())}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class rM{constructor(B,C){this.query_=B,this.eventRegistrations_=[];const t=this.query_._queryParams,n=new oh(t.getIndex()),r=IH(t);this.processor_=zH(r);const i=C.serverCache,s=C.eventCache,a=n.updateFullNode(K.EMPTY_NODE,i.getNode(),null),o=r.updateFullNode(K.EMPTY_NODE,s.getNode(),null),c=new wt(a,i.isFullyInitialized(),n.filtersNodes()),l=new wt(o,s.isFullyInitialized(),r.filtersNodes());this.viewCache_=Jl(l,c),this.eventGenerator_=new NH(this.query_)}get query(){return this.query_}}function iM(e){return e.viewCache_.serverCache.getNode()}function sM(e){return Yo(e.viewCache_)}function aM(e,B){const C=dn(e.viewCache_);return C&&(e.query._queryParams.loadsAllData()||!X(B)&&!C.getImmediateChild(Z(B)).isEmpty())?C.getChild(B):null}function Um(e){return e.eventRegistrations_.length===0}function oM(e,B){e.eventRegistrations_.push(B)}function Vm(e,B,C){const t=[];if(C){k(B==null,"A cancel should cancel all event registrations.");const n=e.query._path;e.eventRegistrations_.forEach(r=>{const i=r.createCancelEvent(C,n);i&&t.push(i)})}if(B){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(!i.matches(B))n.push(i);else if(B.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}e.eventRegistrations_=n}else e.eventRegistrations_=[];return t}function Wm(e,B,C,t){B.type===ze.MERGE&&B.source.queryId!==null&&(k(dn(e.viewCache_),"We should always have a full cache before handling merges"),k(Yo(e.viewCache_),"Missing event cache, even though we have a server cache"));const n=e.viewCache_,r=$H(e.processor_,n,B,C,t);return _H(e.processor_,r.viewCache),k(r.viewCache.serverCache.isFullyInitialized()||!n.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=r.viewCache,uE(e,r.changes,r.viewCache.eventCache.getNode(),null)}function lM(e,B){const C=e.viewCache_.eventCache,t=[];return C.getNode().isLeafNode()||C.getNode().forEachChild(SB,(n,r)=>{t.push(hr(n,r))}),C.isFullyInitialized()&&t.push(eE(C.getNode())),uE(e,t,C.getNode(),B)}function uE(e,B,C,t){const n=t?[t]:e.eventRegistrations_;return OH(e.eventGenerator_,B,C,n)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let zo;class dE{constructor(){this.views=new Map}}function cM(e){k(!zo,"__referenceConstructor has already been defined"),zo=e}function uM(){return k(zo,"Reference.ts has not been loaded"),zo}function dM(e){return e.views.size===0}function ph(e,B,C,t){const n=B.source.queryId;if(n!==null){const r=e.views.get(n);return k(r!=null,"SyncTree gave us an op for an invalid query."),Wm(r,B,C,t)}else{let r=[];for(const i of e.views.values())r=r.concat(Wm(i,B,C,t));return r}}function fE(e,B,C,t,n){const r=B._queryIdentifier,i=e.views.get(r);if(!i){let s=Xo(C,n?t:null),a=!1;s?a=!0:t instanceof K?(s=dh(C,t),a=!1):(s=K.EMPTY_NODE,a=!1);const o=Jl(new wt(s,a,!1),new wt(t,n,!1));return new rM(B,o)}return i}function fM(e,B,C,t,n,r){const i=fE(e,B,t,n,r);return e.views.has(B._queryIdentifier)||e.views.set(B._queryIdentifier,i),oM(i,C),lM(i,C)}function hM(e,B,C,t){const n=B._queryIdentifier,r=[];let i=[];const s=Dt(e);if(n==="default")for(const[a,o]of e.views.entries())i=i.concat(Vm(o,C,t)),Um(o)&&(e.views.delete(a),o.query._queryParams.loadsAllData()||r.push(o.query));else{const a=e.views.get(n);a&&(i=i.concat(Vm(a,C,t)),Um(a)&&(e.views.delete(n),a.query._queryParams.loadsAllData()||r.push(a.query)))}return s&&!Dt(e)&&r.push(new(uM())(B._repo,B._path)),{removed:r,events:i}}function hE(e){const B=[];for(const C of e.views.values())C.query._queryParams.loadsAllData()||B.push(C);return B}function vt(e,B){let C=null;for(const t of e.views.values())C=C||aM(t,B);return C}function pE(e,B){if(B._queryParams.loadsAllData())return Vl(e);{const C=B._queryIdentifier;return e.views.get(C)}}function mE(e,B){return pE(e,B)!=null}function Dt(e){return Vl(e)!=null}function Vl(e){for(const B of e.views.values())if(B.query._queryParams.loadsAllData())return B;return null}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let _o;function pM(e){k(!_o,"__referenceConstructor has already been defined"),_o=e}function mM(){return k(_o,"Reference.ts has not been loaded"),_o}let gM=1;class jm{constructor(B){this.listenProvider_=B,this.syncPointTree_=new dB(null),this.pendingWriteTree_=YH(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function gE(e,B,C,t,n){return LH(e.pendingWriteTree_,B,C,t,n),n?Es(e,new un(tE(),B,C)):[]}function Yt(e,B,C=!1){const t=TH(e.pendingWriteTree_,B);if(GH(e.pendingWriteTree_,B)){let n=new dB(null);return t.snap!=null?n=n.set($(),!0):me(t.children,r=>{n=n.set(new iB(r),!0)}),Es(e,new jo(t.path,n,C))}else return[]}function ys(e,B,C){return Es(e,new un(ch(),B,C))}function bM(e,B,C){const t=dB.fromObject(C);return Es(e,new Xi(ch(),B,t))}function AM(e,B){return Es(e,new Yi(ch(),B))}function vM(e,B,C){const t=gh(e,C);if(t){const n=bh(t),r=n.path,i=n.queryId,s=ee(r,B),a=new Yi(uh(i),s);return Ah(e,r,a)}else return[]}function bE(e,B,C,t,n=!1){const r=B._path,i=e.syncPointTree_.get(r);let s=[];if(i&&(B._queryIdentifier==="default"||mE(i,B))){const a=hM(i,B,C,t);dM(i)&&(e.syncPointTree_=e.syncPointTree_.remove(r));const o=a.removed;if(s=a.events,!n){const c=o.findIndex(u=>u._queryParams.loadsAllData())!==-1,l=e.syncPointTree_.findOnPath(r,(u,m)=>Dt(m));if(c&&!l){const u=e.syncPointTree_.subtree(r);if(!u.isEmpty()){const m=SM(u);for(let d=0;d<m.length;++d){const h=m[d],g=h.query,f=EE(e,h);e.listenProvider_.startListening(pi(g),Zi(e,g),f.hashFn,f.onComplete)}}}!l&&o.length>0&&!t&&(c?e.listenProvider_.stopListening(pi(B),null):o.forEach(u=>{const m=e.queryToTagMap.get(Wl(u));e.listenProvider_.stopListening(pi(u),m)}))}wM(e,o)}return s}function AE(e,B,C,t){const n=gh(e,t);if(n!=null){const r=bh(n),i=r.path,s=r.queryId,a=ee(i,B),o=new un(uh(s),a,C);return Ah(e,i,o)}else return[]}function yM(e,B,C,t){const n=gh(e,t);if(n){const r=bh(n),i=r.path,s=r.queryId,a=ee(i,B),o=dB.fromObject(C),c=new Xi(uh(s),a,o);return Ah(e,i,c)}else return[]}function EM(e,B,C,t=!1){const n=B._path;let r=null,i=!1;e.syncPointTree_.foreachOnPath(n,(u,m)=>{const d=ee(u,n);r=r||vt(m,d),i=i||Dt(m)});let s=e.syncPointTree_.get(n);s?(i=i||Dt(s),r=r||vt(s,$())):(s=new dE,e.syncPointTree_=e.syncPointTree_.set(n,s));let a;r!=null?a=!0:(a=!1,r=K.EMPTY_NODE,e.syncPointTree_.subtree(n).foreachChild((u,m)=>{const d=vt(m,$());d&&(r=r.updateImmediateChild(u,d))}));const o=mE(s,B);if(!o&&!B._queryParams.loadsAllData()){const u=Wl(B);k(!e.queryToTagMap.has(u),"View does not exist, but we have a tag");const m=DM();e.queryToTagMap.set(u,m),e.tagToQueryMap.set(m,u)}const c=Ul(e.pendingWriteTree_,n);let l=fM(s,B,C,c,r,a);if(!o&&!i&&!t){const u=pE(s,B);l=l.concat(kM(e,B,u))}return l}function mh(e,B,C){const t=e.pendingWriteTree_,n=e.syncPointTree_.findOnPath(B,(r,i)=>{const s=ee(r,B),a=vt(i,s);if(a)return a});return sE(t,B,n,C,!0)}function IM(e,B){const C=B._path;let t=null;e.syncPointTree_.foreachOnPath(C,(o,c)=>{const l=ee(o,C);t=t||vt(c,l)});let n=e.syncPointTree_.get(C);n?t=t||vt(n,$()):(n=new dE,e.syncPointTree_=e.syncPointTree_.set(C,n));const r=t!=null,i=r?new wt(t,!0,!1):null,s=Ul(e.pendingWriteTree_,B._path),a=fE(n,B,s,r?i.getNode():K.EMPTY_NODE,r);return sM(a)}function Es(e,B){return vE(B,e.syncPointTree_,null,Ul(e.pendingWriteTree_,$()))}function vE(e,B,C,t){if(X(e.path))return yE(e,B,C,t);{const n=B.get($());C==null&&n!=null&&(C=vt(n,$()));let r=[];const i=Z(e.path),s=e.operationForChild(i),a=B.children.get(i);if(a&&s){const o=C?C.getImmediateChild(i):null,c=aE(t,i);r=r.concat(vE(s,a,o,c))}return n&&(r=r.concat(ph(n,e,t,C))),r}}function yE(e,B,C,t){const n=B.get($());C==null&&n!=null&&(C=vt(n,$()));let r=[];return B.children.inorderTraversal((i,s)=>{const a=C?C.getImmediateChild(i):null,o=aE(t,i),c=e.operationForChild(i);c&&(r=r.concat(yE(c,s,a,o)))}),n&&(r=r.concat(ph(n,e,t,C))),r}function EE(e,B){const C=B.query,t=Zi(e,C);return{hashFn:()=>(iM(B)||K.EMPTY_NODE).hash(),onComplete:n=>{if(n==="ok")return t?vM(e,C._path,t):AM(e,C._path);{const r=E4(n,C);return bE(e,C,null,r)}}}}function Zi(e,B){const C=Wl(B);return e.queryToTagMap.get(C)}function Wl(e){return e._path.toString()+"$"+e._queryIdentifier}function gh(e,B){return e.tagToQueryMap.get(B)}function bh(e){const B=e.indexOf("$");return k(B!==-1&&B<e.length-1,"Bad queryKey."),{queryId:e.substr(B+1),path:new iB(e.substr(0,B))}}function Ah(e,B,C){const t=e.syncPointTree_.get(B);k(t,"Missing sync point for query tag that we're tracking");const n=Ul(e.pendingWriteTree_,B);return ph(t,C,n,null)}function SM(e){return e.fold((B,C,t)=>{if(C&&Dt(C))return[Vl(C)];{let n=[];return C&&(n=hE(C)),me(t,(r,i)=>{n=n.concat(i)}),n}})}function pi(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(mM())(e._repo,e._path):e}function wM(e,B){for(let C=0;C<B.length;++C){const t=B[C];if(!t._queryParams.loadsAllData()){const n=Wl(t),r=e.queryToTagMap.get(n);e.queryToTagMap.delete(n),e.tagToQueryMap.delete(r)}}}function DM(){return gM++}function kM(e,B,C){const t=B._path,n=Zi(e,B),r=EE(e,C),i=e.listenProvider_.startListening(pi(B),n,r.hashFn,r.onComplete),s=e.syncPointTree_.subtree(t);if(n)k(!Dt(s.value),"If we're adding a query, it shouldn't be shadowed");else{const a=s.fold((o,c,l)=>{if(!X(o)&&c&&Dt(c))return[Vl(c).query];{let u=[];return c&&(u=u.concat(hE(c).map(m=>m.query))),me(l,(m,d)=>{u=u.concat(d)}),u}});for(let o=0;o<a.length;++o){const c=a[o];e.listenProvider_.stopListening(pi(c),Zi(e,c))}}return i}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class vh{constructor(B){this.node_=B}getImmediateChild(B){const C=this.node_.getImmediateChild(B);return new vh(C)}node(){return this.node_}}class yh{constructor(B,C){this.syncTree_=B,this.path_=C}getImmediateChild(B){const C=OB(this.path_,B);return new yh(this.syncTree_,C)}node(){return mh(this.syncTree_,this.path_)}}const PM=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},Ym=function(e,B,C){if(!e||typeof e!="object")return e;if(k(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return FM(e[".sv"],B,C);if(typeof e[".sv"]=="object")return NM(e[".sv"],B);k(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},FM=function(e,B,C){switch(e){case"timestamp":return C.timestamp;default:k(!1,"Unexpected server value: "+e)}},NM=function(e,B,C){e.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const t=e.increment;typeof t!="number"&&k(!1,"Unexpected increment value: "+t);const n=B.node();if(k(n!==null&&typeof n<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!n.isLeafNode())return t;const r=n.getValue();return typeof r!="number"?t:r+t},OM=function(e,B,C,t){return Eh(B,new yh(C,e),t)},IE=function(e,B,C){return Eh(e,new vh(B),C)};function Eh(e,B,C){const t=e.getPriority().val(),n=Ym(t,B.getImmediateChild(".priority"),C);let r;if(e.isLeafNode()){const i=e,s=Ym(i.getValue(),B,C);return s!==i.getValue()||n!==i.getPriority().val()?new LB(s,xB(n)):e}else{const i=e;return r=i,n!==i.getPriority().val()&&(r=r.updatePriority(new LB(n))),i.forEachChild(SB,(s,a)=>{const o=Eh(a,B.getImmediateChild(s),C);o!==a&&(r=r.updateImmediateChild(s,o))}),r}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ih{constructor(B="",C=null,t={children:{},childCount:0}){this.name=B,this.parent=C,this.node=t}}function Sh(e,B){let C=B instanceof iB?B:new iB(B),t=e,n=Z(C);for(;n!==null;){const r=ur(t.node.children,n)||{children:{},childCount:0};t=new Ih(n,t,r),C=aB(C),n=Z(C)}return t}function Pr(e){return e.node.value}function SE(e,B){e.node.value=B,$1(e)}function wE(e){return e.node.childCount>0}function RM(e){return Pr(e)===void 0&&!wE(e)}function jl(e,B){me(e.node.children,(C,t)=>{B(new Ih(C,e,t))})}function DE(e,B,C,t){C&&!t&&B(e),jl(e,n=>{DE(n,B,!0,t)}),C&&t&&B(e)}function HM(e,B,C){let t=C?e:e.parent;for(;t!==null;){if(B(t))return!0;t=t.parent}return!1}function Is(e){return new iB(e.parent===null?e.name:Is(e.parent)+"/"+e.name)}function $1(e){e.parent!==null&&MM(e.parent,e.name,e)}function MM(e,B,C){const t=RM(C),n=VC(e.node.children,B);t&&n?(delete e.node.children[B],e.node.childCount--,$1(e)):!t&&!n&&(e.node.children[B]=C.node,e.node.childCount++,$1(e))}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const LM=/[\[\].#$\/\u0000-\u001F\u007F]/,TM=/[\[\].#$\u0000-\u001F\u007F]/,su=10*1024*1024,kE=function(e){return typeof e=="string"&&e.length!==0&&!LM.test(e)},PE=function(e){return typeof e=="string"&&e.length!==0&&!TM.test(e)},GM=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),PE(e)},xM=function(e,B,C,t){t&&B===void 0||wh(xf(e,"value"),B,C)},wh=function(e,B,C){const t=C instanceof iB?new CH(C,e):C;if(B===void 0)throw new Error(e+"contains undefined "+xt(t));if(typeof B=="function")throw new Error(e+"contains a function "+xt(t)+" with contents = "+B.toString());if(Iy(B))throw new Error(e+"contains "+B.toString()+" "+xt(t));if(typeof B=="string"&&B.length>su/3&&Rl(B)>su)throw new Error(e+"contains a string greater than "+su+" utf8 bytes "+xt(t)+" ('"+B.substring(0,50)+"...')");if(B&&typeof B=="object"){let n=!1,r=!1;if(me(B,(i,s)=>{if(i===".value")n=!0;else if(i!==".priority"&&i!==".sv"&&(r=!0,!kE(i)))throw new Error(e+" contains an invalid key ("+i+") "+xt(t)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);tH(t,i),wh(e,s,t),nH(t)}),n&&r)throw new Error(e+' contains ".value" child '+xt(t)+" in addition to actual children.")}},FE=function(e,B,C,t){if(!(t&&C===void 0)&&!PE(C))throw new Error(xf(e,B)+'was an invalid path = "'+C+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},KM=function(e,B,C,t){C&&(C=C.replace(/^\/*\.info(\/|$)/,"/")),FE(e,B,C,t)},QM=function(e,B){if(Z(B)===".info")throw new Error(e+" failed = Can't modify data under /.info/")},JM=function(e,B){const C=B.path.toString();if(typeof B.repoInfo.host!="string"||B.repoInfo.host.length===0||!kE(B.repoInfo.namespace)&&B.repoInfo.host.split(":")[0]!=="localhost"||C.length!==0&&!GM(C))throw new Error(xf(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class UM{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function NE(e,B){let C=null;for(let t=0;t<B.length;t++){const n=B[t],r=n.getPath();C!==null&&!Xy(r,C.path)&&(e.eventLists_.push(C),C=null),C===null&&(C={events:[],path:r}),C.events.push(n)}C&&e.eventLists_.push(C)}function gC(e,B,C){NE(e,C),VM(e,t=>qe(t,B)||qe(B,t))}function VM(e,B){e.recursionDepth_++;let C=!0;for(let t=0;t<e.eventLists_.length;t++){const n=e.eventLists_[t];if(n){const r=n.path;B(r)?(WM(e.eventLists_[t]),e.eventLists_[t]=null):C=!1}}C&&(e.eventLists_=[]),e.recursionDepth_--}function WM(e){for(let B=0;B<e.events.length;B++){const C=e.events[B];if(C!==null){e.events[B]=null;const t=C.getEventRunner();Bn&&XB("event: "+C.toString()),kr(t)}}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const jM="repo_interrupt",YM=25;class XM{constructor(B,C,t,n){this.repoInfo_=B,this.forceRestClient_=C,this.authTokenProvider_=t,this.appCheckProvider_=n,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new UM,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Wo(),this.transactionQueueTree_=new Ih,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ZM(e,B,C){if(e.stats_=rh(e.repoInfo_),e.forceRestClient_||D4())e.server_=new Vo(e.repoInfo_,(t,n,r,i)=>{Xm(e,t,n,r,i)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>Zm(e,!0),0);else{if(typeof C<"u"&&C!==null){if(typeof C!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{NB(C)}catch(t){throw new Error("Invalid authOverride provided: "+t)}}e.persistentConnection_=new OC(e.repoInfo_,B,(t,n,r,i)=>{Xm(e,t,n,r,i)},t=>{Zm(e,t)},t=>{zM(e,t)},e.authTokenProvider_,e.appCheckProvider_,C),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=O4(e.repoInfo_,()=>new FH(e.stats_,e.server_)),e.infoData_=new SH,e.infoSyncTree_=new jm({startListening:(t,n,r,i)=>{let s=[];const a=e.infoData_.getNode(t._path);return a.isEmpty()||(s=ys(e.infoSyncTree_,t._path,a),setTimeout(()=>{i("ok")},0)),s},stopListening:()=>{}}),kh(e,"connected",!1),e.serverSyncTree_=new jm({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,(s,a)=>{const o=i(s,a);gC(e.eventQueue_,t._path,o)}),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function qM(e){const B=e.infoData_.getNode(new iB(".info/serverTimeOffset")).val()||0;return new Date().getTime()+B}function Dh(e){return PM({timestamp:qM(e)})}function Xm(e,B,C,t,n){e.dataUpdateCount++;const r=new iB(B);C=e.interceptServerDataCallback_?e.interceptServerDataCallback_(B,C):C;let i=[];if(n)if(t){const a=Oo(C,o=>xB(o));i=yM(e.serverSyncTree_,r,a,n)}else{const a=xB(C);i=AE(e.serverSyncTree_,r,a,n)}else if(t){const a=Oo(C,o=>xB(o));i=bM(e.serverSyncTree_,r,a)}else{const a=xB(C);i=ys(e.serverSyncTree_,r,a)}let s=r;i.length>0&&(s=Xl(e,r)),gC(e.eventQueue_,s,i)}function Zm(e,B){kh(e,"connected",B),B===!1&&BL(e)}function zM(e,B){me(B,(C,t)=>{kh(e,C,t)})}function kh(e,B,C){const t=new iB("/.info/"+B),n=xB(C);e.infoData_.updateSnapshot(t,n);const r=ys(e.infoSyncTree_,t,n);gC(e.eventQueue_,t,r)}function OE(e){return e.nextWriteId_++}function _M(e,B,C){const t=IM(e.serverSyncTree_,B);return t!=null?Promise.resolve(t):e.server_.get(B).then(n=>{const r=xB(n).withIndex(B._queryParams.getIndex());EM(e.serverSyncTree_,B,C,!0);let i;if(B._queryParams.loadsAllData())i=ys(e.serverSyncTree_,B._path,r);else{const s=Zi(e.serverSyncTree_,B);i=AE(e.serverSyncTree_,B._path,r,s)}return gC(e.eventQueue_,B._path,i),bE(e.serverSyncTree_,B,C,null,!0),r},n=>(Yl(e,"get for query "+NB(B)+" failed: "+n),Promise.reject(new Error(n))))}function $M(e,B,C,t,n){Yl(e,"set",{path:B.toString(),value:C,priority:t});const r=Dh(e),i=xB(C,t),s=mh(e.serverSyncTree_,B),a=IE(i,s,r),o=OE(e),c=gE(e.serverSyncTree_,B,a,o,!0);NE(e.eventQueue_,c),e.server_.put(B.toString(),i.val(!0),(u,m)=>{const d=u==="ok";d||pe("set at "+B+" failed: "+u);const h=Yt(e.serverSyncTree_,o,!d);gC(e.eventQueue_,B,h),CL(e,n,u,m)});const l=TE(e,B);Xl(e,l),gC(e.eventQueue_,l,[])}function BL(e){Yl(e,"onDisconnectEvents");const B=Dh(e),C=Wo();X1(e.onDisconnect_,$(),(n,r)=>{const i=OM(n,r,e.serverSyncTree_,B);CE(C,n,i)});let t=[];X1(C,$(),(n,r)=>{t=t.concat(ys(e.serverSyncTree_,n,r));const i=TE(e,n);Xl(e,i)}),e.onDisconnect_=Wo(),gC(e.eventQueue_,$(),t)}function eL(e){e.persistentConnection_&&e.persistentConnection_.interrupt(jM)}function Yl(e,...B){let C="";e.persistentConnection_&&(C=e.persistentConnection_.id+":"),XB(C,...B)}function CL(e,B,C,t){B&&kr(()=>{if(C==="ok")B(null);else{const n=(C||"error").toUpperCase();let r=n;t&&(r+=": "+t);const i=new Error(r);i.code=n,B(i)}})}function RE(e,B,C){return mh(e.serverSyncTree_,B,C)||K.EMPTY_NODE}function Ph(e,B=e.transactionQueueTree_){if(B||Zl(e,B),Pr(B)){const C=ME(e,B);k(C.length>0,"Sending zero length transaction queue"),C.every(t=>t.status===0)&&tL(e,Is(B),C)}else wE(B)&&jl(B,C=>{Ph(e,C)})}function tL(e,B,C){const t=C.map(o=>o.currentWriteId),n=RE(e,B,t);let r=n;const i=n.hash();for(let o=0;o<C.length;o++){const c=C[o];k(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const l=ee(B,c.path);r=r.updateChild(l,c.currentOutputSnapshotRaw)}const s=r.val(!0),a=B;e.server_.put(a.toString(),s,o=>{Yl(e,"transaction put response",{path:a.toString(),status:o});let c=[];if(o==="ok"){const l=[];for(let u=0;u<C.length;u++)C[u].status=2,c=c.concat(Yt(e.serverSyncTree_,C[u].currentWriteId)),C[u].onComplete&&l.push(()=>C[u].onComplete(null,!0,C[u].currentOutputSnapshotResolved)),C[u].unwatcher();Zl(e,Sh(e.transactionQueueTree_,B)),Ph(e,e.transactionQueueTree_),gC(e.eventQueue_,B,c);for(let u=0;u<l.length;u++)kr(l[u])}else{if(o==="datastale")for(let l=0;l<C.length;l++)C[l].status===3?C[l].status=4:C[l].status=0;else{pe("transaction at "+a.toString()+" failed: "+o);for(let l=0;l<C.length;l++)C[l].status=4,C[l].abortReason=o}Xl(e,B)}},i)}function Xl(e,B){const C=HE(e,B),t=Is(C),n=ME(e,C);return nL(e,n,t),t}function nL(e,B,C){if(B.length===0)return;const t=[];let n=[];const r=B.filter(i=>i.status===0).map(i=>i.currentWriteId);for(let i=0;i<B.length;i++){const s=B[i],a=ee(C,s.path);let o=!1,c;if(k(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),s.status===4)o=!0,c=s.abortReason,n=n.concat(Yt(e.serverSyncTree_,s.currentWriteId,!0));else if(s.status===0)if(s.retryCount>=YM)o=!0,c="maxretry",n=n.concat(Yt(e.serverSyncTree_,s.currentWriteId,!0));else{const l=RE(e,s.path,r);s.currentInputSnapshot=l;const u=B[i].update(l.val());if(u!==void 0){wh("transaction failed: Data returned ",u,s.path);let m=xB(u);typeof u=="object"&&u!=null&&VC(u,".priority")||(m=m.updatePriority(l.getPriority()));const d=s.currentWriteId,h=Dh(e),g=IE(m,l,h);s.currentOutputSnapshotRaw=m,s.currentOutputSnapshotResolved=g,s.currentWriteId=OE(e),r.splice(r.indexOf(d),1),n=n.concat(gE(e.serverSyncTree_,s.path,g,s.currentWriteId,s.applyLocally)),n=n.concat(Yt(e.serverSyncTree_,d,!0))}else o=!0,c="nodata",n=n.concat(Yt(e.serverSyncTree_,s.currentWriteId,!0))}gC(e.eventQueue_,C,n),n=[],o&&(B[i].status=2,function(l){setTimeout(l,Math.floor(0))}(B[i].unwatcher),B[i].onComplete&&(c==="nodata"?t.push(()=>B[i].onComplete(null,!1,B[i].currentInputSnapshot)):t.push(()=>B[i].onComplete(new Error(c),!1,null))))}Zl(e,e.transactionQueueTree_);for(let i=0;i<t.length;i++)kr(t[i]);Ph(e,e.transactionQueueTree_)}function HE(e,B){let C,t=e.transactionQueueTree_;for(C=Z(B);C!==null&&Pr(t)===void 0;)t=Sh(t,C),B=aB(B),C=Z(B);return t}function ME(e,B){const C=[];return LE(e,B,C),C.sort((t,n)=>t.order-n.order),C}function LE(e,B,C){const t=Pr(B);if(t)for(let n=0;n<t.length;n++)C.push(t[n]);jl(B,n=>{LE(e,n,C)})}function Zl(e,B){const C=Pr(B);if(C){let t=0;for(let n=0;n<C.length;n++)C[n].status!==2&&(C[t]=C[n],t++);C.length=t,SE(B,C.length>0?C:void 0)}jl(B,t=>{Zl(e,t)})}function TE(e,B){const C=Is(HE(e,B)),t=Sh(e.transactionQueueTree_,B);return HM(t,n=>{au(e,n)}),au(e,t),DE(t,n=>{au(e,n)}),C}function au(e,B){const C=Pr(B);if(C){const t=[];let n=[],r=-1;for(let i=0;i<C.length;i++)C[i].status===3||(C[i].status===1?(k(r===i-1,"All SENT items should be at beginning of queue."),r=i,C[i].status=3,C[i].abortReason="set"):(k(C[i].status===0,"Unexpected transaction status in abort"),C[i].unwatcher(),n=n.concat(Yt(e.serverSyncTree_,C[i].currentWriteId,!0)),C[i].onComplete&&t.push(C[i].onComplete.bind(null,new Error("set"),!1,null))));r===-1?SE(B,void 0):C.length=r+1,gC(e.eventQueue_,Is(B),n);for(let i=0;i<t.length;i++)kr(t[i])}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function rL(e){let B="";const C=e.split("/");for(let t=0;t<C.length;t++)if(C[t].length>0){let n=C[t];try{n=decodeURIComponent(n.replace(/\+/g," "))}catch{}B+="/"+n}return B}function iL(e){const B={};e.charAt(0)==="?"&&(e=e.substring(1));for(const C of e.split("&")){if(C.length===0)continue;const t=C.split("=");t.length===2?B[decodeURIComponent(t[0])]=decodeURIComponent(t[1]):pe(`Invalid query segment '${C}' in query '${e}'`)}return B}const qm=function(e,B){const C=sL(e),t=C.namespace;C.domain==="firebase.com"&&xC(C.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!t||t==="undefined")&&C.domain!=="localhost"&&xC("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),C.secure||g4();const n=C.scheme==="ws"||C.scheme==="wss";return{repoInfo:new Ly(C.host,C.secure,t,n,B,"",t!==C.subdomain),path:new iB(C.pathString)}},sL=function(e){let B="",C="",t="",n="",r="",i=!0,s="https",a=443;if(typeof e=="string"){let o=e.indexOf("//");o>=0&&(s=e.substring(0,o-1),e=e.substring(o+2));let c=e.indexOf("/");c===-1&&(c=e.length);let l=e.indexOf("?");l===-1&&(l=e.length),B=e.substring(0,Math.min(c,l)),c<l&&(n=rL(e.substring(c,l)));const u=iL(e.substring(Math.min(e.length,l)));o=B.indexOf(":"),o>=0?(i=s==="https"||s==="wss",a=parseInt(B.substring(o+1),10)):o=B.length;const m=B.slice(0,o);if(m.toLowerCase()==="localhost")C="localhost";else if(m.split(".").length<=2)C=m;else{const d=B.indexOf(".");t=B.substring(0,d).toLowerCase(),C=B.substring(d+1),r=t}"ns"in u&&(r=u.ns)}return{host:B,port:a,domain:C,subdomain:t,secure:i,scheme:s,pathString:n,namespace:r}};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class aL{constructor(B,C,t,n){this.eventType=B,this.eventRegistration=C,this.snapshot=t,this.prevName=n}getPath(){const B=this.snapshot.ref;return this.eventType==="value"?B._path:B.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+NB(this.snapshot.exportVal())}}class oL{constructor(B,C,t){this.eventRegistration=B,this.error=C,this.path=t}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class lL{constructor(B,C){this.snapshotCallback=B,this.cancelCallback=C}onValue(B,C){this.snapshotCallback.call(null,B,C)}onCancel(B){return k(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,B)}get hasCancelCallback(){return!!this.cancelCallback}matches(B){return this.snapshotCallback===B.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===B.snapshotCallback.userCallback&&this.snapshotCallback.context===B.snapshotCallback.context}}/**
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
*/class Fh{constructor(B,C,t,n){this._repo=B,this._path=C,this._queryParams=t,this._orderByCalled=n}get key(){return X(this._path)?null:Wy(this._path)}get ref(){return new WC(this._repo,this._path)}get _queryIdentifier(){const B=Mm(this._queryParams),C=th(B);return C==="{}"?"default":C}get _queryObject(){return Mm(this._queryParams)}isEqual(B){if(B=ge(B),!(B instanceof Fh))return!1;const C=this._repo===B._repo,t=Xy(this._path,B._path),n=this._queryIdentifier===B._queryIdentifier;return C&&t&&n}toJSON(){return this.toString()}toString(){return this._repo.toString()+eH(this._path)}}class WC extends Fh{constructor(B,C){super(B,C,new lh,!1)}get parent(){const B=Yy(this._path);return B===null?null:new WC(this._repo,B)}get root(){let B=this;for(;B.parent!==null;)B=B.parent;return B}}class qi{constructor(B,C,t){this._node=B,this.ref=C,this._index=t}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(B){const C=new iB(B),t=Bd(this.ref,B);return new qi(this._node.getChild(C),t,SB)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(B){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(C,t)=>B(new qi(t,Bd(this.ref,C),SB)))}hasChild(B){const C=new iB(B);return!this._node.getChild(C).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function $o(e,B){return e=ge(e),e._checkNotDeleted("ref"),B!==void 0?Bd(e._root,B):e._root}function Bd(e,B){return e=ge(e),Z(e._path)===null?KM("child","path",B,!1):FE("child","path",B,!1),new WC(e._repo,OB(e._path,B))}function ed(e,B){e=ge(e),QM("set",e._path),xM("set",B,e._path,!1);const C=new Ol;return $M(e._repo,e._path,B,null,C.wrapCallback(()=>{})),C.promise}function zi(e){e=ge(e);const B=new lL(()=>{}),C=new Nh(B);return _M(e._repo,e,C).then(t=>new qi(t,new WC(e._repo,e._path),e._queryParams.getIndex()))}class Nh{constructor(B){this.callbackContext=B}respondsTo(B){return B==="value"}createEvent(B,C){const t=C._queryParams.getIndex();return new aL("value",this,new qi(B.snapshotNode,new WC(C._repo,C._path),t))}getEventRunner(B){return B.getEventType()==="cancel"?()=>this.callbackContext.onCancel(B.error):()=>this.callbackContext.onValue(B.snapshot,null)}createCancelEvent(B,C){return this.callbackContext.hasCancelCallback?new oL(this,B,C):null}matches(B){return B instanceof Nh?!B.callbackContext||!this.callbackContext?!0:B.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}cM(WC);pM(WC);/**
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
*/const cL="FIREBASE_DATABASE_EMULATOR_HOST",Cd={};let uL=!1;function dL(e,B,C,t){e.repoInfo_=new Ly(`${B}:${C}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),t&&(e.authTokenProvider_=t)}function fL(e,B,C,t,n){let r=t||e.options.databaseURL;r===void 0&&(e.options.projectId||xC("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),XB("Using default host for project ",e.options.projectId),r=`${e.options.projectId}-default-rtdb.firebaseio.com`);let i=qm(r,n),s=i.repoInfo,a,o;typeof process<"u"&&process.env&&(o=process.env[cL]),o?(a=!0,r=`http://${o}?ns=${s.namespace}`,i=qm(r,n),s=i.repoInfo):a=!i.repoInfo.secure;const c=n&&a?new er(er.OWNER):new P4(e.name,e.options,B);JM("Invalid Firebase Database URL",i),X(i.path)||xC("Database URL must point to the root of a Firebase Database (not including a child path).");const l=pL(s,e,c,new k4(e.name,C));return new mL(l,e)}function hL(e,B){const C=Cd[B];(!C||C[e.key]!==e)&&xC(`Database ${B}(${e.repoInfo_}) has already been deleted.`),eL(e),delete C[e.key]}function pL(e,B,C,t){let n=Cd[B.name];n||(n={},Cd[B.name]=n);let r=n[e.toURLString()];return r&&xC("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new XM(e,uL,C,t),n[e.toURLString()]=r,r}class mL{constructor(B,C){this._repoInternal=B,this.app=C,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ZM(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new WC(this._repo,$())),this._rootInternal}_delete(){return this._rootInternal!==null&&(hL(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(B){this._rootInternal===null&&xC("Cannot call "+B+" on a deleted database.")}}function ql(e=Qf(),B){const C=An(e,"database").getImmediate({identifier:B});if(!C._instanceStarted){const t=fF("database");t&&gL(C,...t)}return C}function gL(e,B,C,t={}){e=ge(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&xC("Cannot call useEmulator() after instance has already been initialized.");const n=e._repoInternal;let r;if(n.repoInfo_.nodeAdmin)t.mockUserToken&&xC('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new er(er.OWNER);else if(t.mockUserToken){const i=typeof t.mockUserToken=="string"?t.mockUserToken:hF(t.mockUserToken,e.app.options.projectId);r=new er(i)}dL(n,B,C,r)}/**
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
`),this.name+": "+this.message+e}};var Mh=nl;nl.default=nl;var Ss={};Ss.isClean=Symbol("isClean");Ss.my=Symbol("my");const u0={colon:": ",indent:"    ",beforeDecl:`
`,beforeRule:`
`,beforeOpen:" ",beforeClose:`
`,beforeComment:`
`,after:`
`,emptyBody:"",commentLeft:" ",commentRight:" ",semicolon:!1};function fV(e){return e[0].toUpperCase()+e.slice(1)}let rd=class{constructor(e){this.builder=e}stringify(e,B){if(!this[e.type])throw new Error("Unknown AST node type "+e.type+". Maybe you need to change PostCSS stringifier.");this[e.type](e,B)}document(e){this.body(e)}root(e){this.body(e),e.raws.after&&this.builder(e.raws.after)}comment(e){let B=this.raw(e,"left","commentLeft"),C=this.raw(e,"right","commentRight");this.builder("/*"+B+e.text+C+"*/",e)}decl(e,B){let C=this.raw(e,"between","colon"),t=e.prop+C+this.rawValue(e,"value");e.important&&(t+=e.raws.important||" !important"),B&&(t+=";"),this.builder(t,e)}rule(e){this.block(e,this.rawValue(e,"selector")),e.raws.ownSemicolon&&this.builder(e.raws.ownSemicolon,e,"end")}atrule(e,B){let C="@"+e.name,t=e.params?this.rawValue(e,"params"):"";if(typeof e.raws.afterName<"u"?C+=e.raws.afterName:t&&(C+=" "),e.nodes)this.block(e,C+t);else{let n=(e.raws.between||"")+(B?";":"");this.builder(C+t+n,e)}}body(e){let B=e.nodes.length-1;for(;B>0&&e.nodes[B].type==="comment";)B-=1;let C=this.raw(e,"semicolon");for(let t=0;t<e.nodes.length;t++){let n=e.nodes[t],r=this.raw(n,"before");r&&this.builder(r),this.stringify(n,B!==t||C)}}block(e,B){let C=this.raw(e,"between","beforeOpen");this.builder(B+C+"{",e,"start");let t;e.nodes&&e.nodes.length?(this.body(e),t=this.raw(e,"after")):t=this.raw(e,"after","emptyBody"),t&&this.builder(t),this.builder("}",e,"end")}raw(e,B,C){let t;if(C||(C=B),B&&(t=e.raws[B],typeof t<"u"))return t;let n=e.parent;if(C==="before"&&(!n||n.type==="root"&&n.first===e||n&&n.type==="document"))return"";if(!n)return u0[C];let r=e.root();if(r.rawCache||(r.rawCache={}),typeof r.rawCache[C]<"u")return r.rawCache[C];if(C==="before"||C==="after")return this.beforeAfter(e,C);{let i="raw"+fV(C);this[i]?t=this[i](r,e):r.walk(s=>{if(t=s.raws[B],typeof t<"u")return!1})}return typeof t>"u"&&(t=u0[C]),r.rawCache[C]=t,t}rawSemicolon(e){let B;return e.walk(C=>{if(C.nodes&&C.nodes.length&&C.last.type==="decl"&&(B=C.raws.semicolon,typeof B<"u"))return!1}),B}rawEmptyBody(e){let B;return e.walk(C=>{if(C.nodes&&C.nodes.length===0&&(B=C.raws.after,typeof B<"u"))return!1}),B}rawIndent(e){if(e.raws.indent)return e.raws.indent;let B;return e.walk(C=>{let t=C.parent;if(t&&t!==e&&t.parent&&t.parent===e&&typeof C.raws.before<"u"){let n=C.raws.before.split(`
`);return B=n[n.length-1],B=B.replace(/\S/g,""),!1}}),B}rawBeforeComment(e,B){let C;return e.walkComments(t=>{if(typeof t.raws.before<"u")return C=t.raws.before,C.includes(`
`)&&(C=C.replace(/[^\n]+$/,"")),!1}),typeof C>"u"?C=this.raw(B,null,"beforeDecl"):C&&(C=C.replace(/\S/g,"")),C}rawBeforeDecl(e,B){let C;return e.walkDecls(t=>{if(typeof t.raws.before<"u")return C=t.raws.before,C.includes(`
`)&&(C=C.replace(/[^\n]+$/,"")),!1}),typeof C>"u"?C=this.raw(B,null,"beforeRule"):C&&(C=C.replace(/\S/g,"")),C}rawBeforeRule(e){let B;return e.walk(C=>{if(C.nodes&&(C.parent!==e||e.first!==C)&&typeof C.raws.before<"u")return B=C.raws.before,B.includes(`
`)&&(B=B.replace(/[^\n]+$/,"")),!1}),B&&(B=B.replace(/\S/g,"")),B}rawBeforeClose(e){let B;return e.walk(C=>{if(C.nodes&&C.nodes.length>0&&typeof C.raws.after<"u")return B=C.raws.after,B.includes(`
`)&&(B=B.replace(/[^\n]+$/,"")),!1}),B&&(B=B.replace(/\S/g,"")),B}rawBeforeOpen(e){let B;return e.walk(C=>{if(C.type!=="decl"&&(B=C.raws.between,typeof B<"u"))return!1}),B}rawColon(e){let B;return e.walkDecls(C=>{if(typeof C.raws.between<"u")return B=C.raws.between.replace(/[^\s:]/g,""),!1}),B}beforeAfter(e,B){let C;e.type==="decl"?C=this.raw(e,null,"beforeDecl"):e.type==="comment"?C=this.raw(e,null,"beforeComment"):B==="before"?C=this.raw(e,null,"beforeRule"):C=this.raw(e,null,"beforeClose");let t=e.parent,n=0;for(;t&&t.type!=="root";)n+=1,t=t.parent;if(C.includes(`
`)){let r=this.raw(e,null,"indent");if(r.length)for(let i=0;i<n;i++)C+=r}return C}rawValue(e,B){let C=e[B],t=e.raws[B];return t&&t.value===C?t.raw:C}};var hS=rd;rd.default=rd;let hV=hS;function id(e,B){new hV(B).stringify(e)}var $l=id;id.default=id;let{isClean:fa,my:pV}=Ss,mV=Mh,gV=hS,bV=$l;function sd(e,B){let C=new e.constructor;for(let t in e){if(!Object.prototype.hasOwnProperty.call(e,t)||t==="proxyCache")continue;let n=e[t],r=typeof n;t==="parent"&&r==="object"?B&&(C[t]=B):t==="source"?C[t]=n:Array.isArray(n)?C[t]=n.map(i=>sd(i,C)):(r==="object"&&n!==null&&(n=sd(n)),C[t]=n)}return C}let ad=class{constructor(e={}){this.raws={},this[fa]=!1,this[pV]=!0;for(let B in e)if(B==="nodes"){this.nodes=[];for(let C of e[B])typeof C.clone=="function"?this.append(C.clone()):this.append(C)}else this[B]=e[B]}error(e,B={}){if(this.source){let{start:C,end:t}=this.rangeBy(B);return this.source.input.error(e,{line:C.line,column:C.column},{line:t.line,column:t.column},B)}return new mV(e)}warn(e,B,C){let t={node:this};for(let n in C)t[n]=C[n];return e.warn(B,t)}remove(){return this.parent&&this.parent.removeChild(this),this.parent=void 0,this}toString(e=bV){e.stringify&&(e=e.stringify);let B="";return e(this,C=>{B+=C}),B}assign(e={}){for(let B in e)this[B]=e[B];return this}clone(e={}){let B=sd(this);for(let C in e)B[C]=e[C];return B}cloneBefore(e={}){let B=this.clone(e);return this.parent.insertBefore(this,B),B}cloneAfter(e={}){let B=this.clone(e);return this.parent.insertAfter(this,B),B}replaceWith(...e){if(this.parent){let B=this,C=!1;for(let t of e)t===this?C=!0:C?(this.parent.insertAfter(B,t),B=t):this.parent.insertBefore(B,t);C||this.remove()}return this}next(){if(!this.parent)return;let e=this.parent.index(this);return this.parent.nodes[e+1]}prev(){if(!this.parent)return;let e=this.parent.index(this);return this.parent.nodes[e-1]}before(e){return this.parent.insertBefore(this,e),this}after(e){return this.parent.insertAfter(this,e),this}root(){let e=this;for(;e.parent&&e.parent.type!=="document";)e=e.parent;return e}raw(e,B){return new gV().raw(this,e,B)}cleanRaws(e){delete this.raws.before,delete this.raws.after,e||delete this.raws.between}toJSON(e,B){let C={},t=B==null;B=B||new Map;let n=0;for(let r in this){if(!Object.prototype.hasOwnProperty.call(this,r)||r==="parent"||r==="proxyCache")continue;let i=this[r];if(Array.isArray(i))C[r]=i.map(s=>typeof s=="object"&&s.toJSON?s.toJSON(null,B):s);else if(typeof i=="object"&&i.toJSON)C[r]=i.toJSON(null,B);else if(r==="source"){let s=B.get(i.input);s==null&&(s=n,B.set(i.input,n),n++),C[r]={inputId:s,start:i.start,end:i.end}}else C[r]=i}return t&&(C.inputs=[...B.keys()].map(r=>r.toJSON())),C}positionInside(e){let B=this.toString(),C=this.source.start.column,t=this.source.start.line;for(let n=0;n<e;n++)B[n]===`
`?(C=1,t+=1):C+=1;return{line:t,column:C}}positionBy(e){let B=this.source.start;if(e.index)B=this.positionInside(e.index);else if(e.word){let C=this.toString().indexOf(e.word);C!==-1&&(B=this.positionInside(C))}return B}rangeBy(e){let B={line:this.source.start.line,column:this.source.start.column},C=this.source.end?{line:this.source.end.line,column:this.source.end.column+1}:{line:B.line,column:B.column+1};if(e.word){let t=this.toString().indexOf(e.word);t!==-1&&(B=this.positionInside(t),C=this.positionInside(t+e.word.length))}else e.start?B={line:e.start.line,column:e.start.column}:e.index&&(B=this.positionInside(e.index)),e.end?C={line:e.end.line,column:e.end.column}:e.endIndex?C=this.positionInside(e.endIndex):e.index&&(C=this.positionInside(e.index+1));return(C.line<B.line||C.line===B.line&&C.column<=B.column)&&(C={line:B.line,column:B.column+1}),{start:B,end:C}}getProxyProcessor(){return{set(e,B,C){return e[B]===C||(e[B]=C,(B==="prop"||B==="value"||B==="name"||B==="params"||B==="important"||B==="text")&&e.markDirty()),!0},get(e,B){return B==="proxyOf"?e:B==="root"?()=>e.root().toProxy():e[B]}}}toProxy(){return this.proxyCache||(this.proxyCache=new Proxy(this,this.getProxyProcessor())),this.proxyCache}addToError(e){if(e.postcssNode=this,e.stack&&this.source&&/\n\s{4}at /.test(e.stack)){let B=this.source;e.stack=e.stack.replace(/\n\s{4}at /,`$&${B.input.from}:${B.start.line}:${B.start.column}$&`)}return e}markDirty(){if(this[fa]){this[fa]=!1;let e=this;for(;e=e.parent;)e[fa]=!1}}get proxyOf(){return this}};var Bc=ad;ad.default=ad;let AV=Bc,od=class extends AV{constructor(e){e&&typeof e.value<"u"&&typeof e.value!="string"&&(e={...e,value:String(e.value)}),super(e),this.type="decl"}get variable(){return this.prop.startsWith("--")||this.prop[0]==="$"}};var ec=od;od.default=od;let vV="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",yV=(e,B=21)=>(C=B)=>{let t="",n=C;for(;n--;)t+=e[Math.random()*e.length|0];return t},EV=(e=21)=>{let B="",C=e;for(;C--;)B+=vV[Math.random()*64|0];return B};const IV=Object.freeze(Object.defineProperty({__proto__:null,customAlphabet:yV,nanoid:EV},Symbol.toStringTag,{value:"Module"})),SV=Mg(IV);let{SourceMapConsumer:d0,SourceMapGenerator:f0}=Je,{existsSync:wV,readFileSync:DV}=Je,{dirname:fu,join:kV}=Je;function PV(e){return Buffer?Buffer.from(e,"base64").toString():window.atob(e)}let ld=class{constructor(e,B){if(B.map===!1)return;this.loadAnnotation(e),this.inline=this.startWith(this.annotation,"data:");let C=B.map?B.map.prev:void 0,t=this.loadMap(B.from,C);!this.mapFile&&B.from&&(this.mapFile=B.from),this.mapFile&&(this.root=fu(this.mapFile)),t&&(this.text=t)}consumer(){return this.consumerCache||(this.consumerCache=new d0(this.text)),this.consumerCache}withContent(){return!!(this.consumer().sourcesContent&&this.consumer().sourcesContent.length>0)}startWith(e,B){return e?e.substr(0,B.length)===B:!1}getAnnotationURL(e){return e.replace(/^\/\*\s*# sourceMappingURL=/,"").trim()}loadAnnotation(e){let B=e.match(/\/\*\s*# sourceMappingURL=/gm);if(!B)return;let C=e.lastIndexOf(B.pop()),t=e.indexOf("*/",C);C>-1&&t>-1&&(this.annotation=this.getAnnotationURL(e.substring(C,t)))}decodeInline(e){let B=/^data:application\/json;charset=utf-?8;base64,/,C=/^data:application\/json;base64,/,t=/^data:application\/json;charset=utf-?8,/,n=/^data:application\/json,/;if(t.test(e)||n.test(e))return decodeURIComponent(e.substr(RegExp.lastMatch.length));if(B.test(e)||C.test(e))return PV(e.substr(RegExp.lastMatch.length));let r=e.match(/data:application\/json;([^,]+),/)[1];throw new Error("Unsupported source map encoding "+r)}loadFile(e){if(this.root=fu(e),wV(e))return this.mapFile=e,DV(e,"utf-8").toString().trim()}loadMap(e,B){if(B===!1)return!1;if(B){if(typeof B=="string")return B;if(typeof B=="function"){let C=B(e);if(C){let t=this.loadFile(C);if(!t)throw new Error("Unable to load previous source map: "+C.toString());return t}}else{if(B instanceof d0)return f0.fromSourceMap(B).toString();if(B instanceof f0)return B.toString();if(this.isMap(B))return JSON.stringify(B);throw new Error("Unsupported previous source map format: "+B.toString())}}else{if(this.inline)return this.decodeInline(this.annotation);if(this.annotation){let C=this.annotation;return e&&(C=kV(fu(e),C)),this.loadFile(C)}}}isMap(e){return typeof e!="object"?!1:typeof e.mappings=="string"||typeof e._mappings=="string"||Array.isArray(e.sections)}};var pS=ld;ld.default=ld;let{SourceMapConsumer:FV,SourceMapGenerator:NV}=Je,{fileURLToPath:h0,pathToFileURL:ha}=Je,{resolve:cd,isAbsolute:ud}=Je,{nanoid:OV}=SV,hu=Je,p0=Mh,RV=pS,pu=Symbol("fromOffsetCache"),HV=Boolean(FV&&NV),m0=Boolean(cd&&ud),rl=class{constructor(e,B={}){if(e===null||typeof e>"u"||typeof e=="object"&&!e.toString)throw new Error(`PostCSS received ${e} instead of CSS string`);if(this.css=e.toString(),this.css[0]==="\uFEFF"||this.css[0]==="￾"?(this.hasBOM=!0,this.css=this.css.slice(1)):this.hasBOM=!1,B.from&&(!m0||/^\w+:\/\//.test(B.from)||ud(B.from)?this.file=B.from:this.file=cd(B.from)),m0&&HV){let C=new RV(this.css,B);if(C.text){this.map=C;let t=C.consumer().file;!this.file&&t&&(this.file=this.mapResolve(t))}}this.file||(this.id="<input css "+OV(6)+">"),this.map&&(this.map.file=this.from)}fromOffset(e){let B,C;if(this[pu])C=this[pu];else{let n=this.css.split(`
`);C=new Array(n.length);let r=0;for(let i=0,s=n.length;i<s;i++)C[i]=r,r+=n[i].length+1;this[pu]=C}B=C[C.length-1];let t=0;if(e>=B)t=C.length-1;else{let n=C.length-2,r;for(;t<n;)if(r=t+(n-t>>1),e<C[r])n=r-1;else if(e>=C[r+1])t=r+1;else{t=r;break}}return{line:t+1,col:e-C[t]+1}}error(e,B,C,t={}){let n,r,i;if(B&&typeof B=="object"){let a=B,o=C;if(typeof a.offset=="number"){let c=this.fromOffset(a.offset);B=c.line,C=c.col}else B=a.line,C=a.column;if(typeof o.offset=="number"){let c=this.fromOffset(o.offset);r=c.line,i=c.col}else r=o.line,i=o.column}else if(!C){let a=this.fromOffset(B);B=a.line,C=a.col}let s=this.origin(B,C,r,i);return s?n=new p0(e,s.endLine===void 0?s.line:{line:s.line,column:s.column},s.endLine===void 0?s.column:{line:s.endLine,column:s.endColumn},s.source,s.file,t.plugin):n=new p0(e,r===void 0?B:{line:B,column:C},r===void 0?C:{line:r,column:i},this.css,this.file,t.plugin),n.input={line:B,column:C,endLine:r,endColumn:i,source:this.css},this.file&&(ha&&(n.input.url=ha(this.file).toString()),n.input.file=this.file),n}origin(e,B,C,t){if(!this.map)return!1;let n=this.map.consumer(),r=n.originalPositionFor({line:e,column:B});if(!r.source)return!1;let i;typeof C=="number"&&(i=n.originalPositionFor({line:C,column:t}));let s;ud(r.source)?s=ha(r.source):s=new URL(r.source,this.map.consumer().sourceRoot||ha(this.map.mapFile));let a={url:s.toString(),line:r.line,column:r.column,endLine:i&&i.line,endColumn:i&&i.column};if(s.protocol==="file:")if(h0)a.file=h0(s);else throw new Error("file: protocol is not available in this PostCSS build");let o=n.sourceContentFor(r.source);return o&&(a.source=o),a}mapResolve(e){return/^\w+:\/\//.test(e)?e:cd(this.map.consumer().sourceRoot||this.map.root||".",e)}get from(){return this.file||this.id}toJSON(){let e={};for(let B of["hasBOM","css","file","id"])this[B]!=null&&(e[B]=this[B]);return this.map&&(e.map={...this.map},e.map.consumerCache&&(e.map.consumerCache=void 0)),e}};var Cc=rl;rl.default=rl;hu&&hu.registerInput&&hu.registerInput(rl);let{SourceMapConsumer:mS,SourceMapGenerator:_a}=Je,{dirname:$a,resolve:gS,relative:bS,sep:AS}=Je,{pathToFileURL:g0}=Je,MV=Cc,LV=Boolean(mS&&_a),TV=Boolean($a&&gS&&bS&&AS),GV=class{constructor(e,B,C,t){this.stringify=e,this.mapOpts=C.map||{},this.root=B,this.opts=C,this.css=t,this.usesFileUrls=!this.mapOpts.from&&this.mapOpts.absolute}isMap(){return typeof this.opts.map<"u"?!!this.opts.map:this.previous().length>0}previous(){if(!this.previousMaps)if(this.previousMaps=[],this.root)this.root.walk(e=>{if(e.source&&e.source.input.map){let B=e.source.input.map;this.previousMaps.includes(B)||this.previousMaps.push(B)}});else{let e=new MV(this.css,this.opts);e.map&&this.previousMaps.push(e.map)}return this.previousMaps}isInline(){if(typeof this.mapOpts.inline<"u")return this.mapOpts.inline;let e=this.mapOpts.annotation;return typeof e<"u"&&e!==!0?!1:this.previous().length?this.previous().some(B=>B.inline):!0}isSourcesContent(){return typeof this.mapOpts.sourcesContent<"u"?this.mapOpts.sourcesContent:this.previous().length?this.previous().some(e=>e.withContent()):!0}clearAnnotation(){if(this.mapOpts.annotation!==!1)if(this.root){let e;for(let B=this.root.nodes.length-1;B>=0;B--)e=this.root.nodes[B],e.type==="comment"&&e.text.indexOf("# sourceMappingURL=")===0&&this.root.removeChild(B)}else this.css&&(this.css=this.css.replace(/(\n)?\/\*#[\S\s]*?\*\/$/gm,""))}setSourcesContent(){let e={};if(this.root)this.root.walk(B=>{if(B.source){let C=B.source.input.from;if(C&&!e[C]){e[C]=!0;let t=this.usesFileUrls?this.toFileUrl(C):this.toUrl(this.path(C));this.map.setSourceContent(t,B.source.input.css)}}});else if(this.css){let B=this.opts.from?this.toUrl(this.path(this.opts.from)):"<no source>";this.map.setSourceContent(B,this.css)}}applyPrevMaps(){for(let e of this.previous()){let B=this.toUrl(this.path(e.file)),C=e.root||$a(e.file),t;this.mapOpts.sourcesContent===!1?(t=new mS(e.text),t.sourcesContent&&(t.sourcesContent=t.sourcesContent.map(()=>null))):t=e.consumer(),this.map.applySourceMap(t,B,this.toUrl(this.path(C)))}}isAnnotation(){return this.isInline()?!0:typeof this.mapOpts.annotation<"u"?this.mapOpts.annotation:this.previous().length?this.previous().some(e=>e.annotation):!0}toBase64(e){return Buffer?Buffer.from(e).toString("base64"):window.btoa(unescape(encodeURIComponent(e)))}addAnnotation(){let e;this.isInline()?e="data:application/json;base64,"+this.toBase64(this.map.toString()):typeof this.mapOpts.annotation=="string"?e=this.mapOpts.annotation:typeof this.mapOpts.annotation=="function"?e=this.mapOpts.annotation(this.opts.to,this.root):e=this.outputFile()+".map";let B=`
`;this.css.includes(`\r
`)&&(B=`\r
`),this.css+=B+"/*# sourceMappingURL="+e+" */"}outputFile(){return this.opts.to?this.path(this.opts.to):this.opts.from?this.path(this.opts.from):"to.css"}generateMap(){if(this.root)this.generateString();else if(this.previous().length===1){let e=this.previous()[0].consumer();e.file=this.outputFile(),this.map=_a.fromSourceMap(e)}else this.map=new _a({file:this.outputFile()}),this.map.addMapping({source:this.opts.from?this.toUrl(this.path(this.opts.from)):"<no source>",generated:{line:1,column:0},original:{line:1,column:0}});return this.isSourcesContent()&&this.setSourcesContent(),this.root&&this.previous().length>0&&this.applyPrevMaps(),this.isAnnotation()&&this.addAnnotation(),this.isInline()?[this.css]:[this.css,this.map]}path(e){if(e.indexOf("<")===0||/^\w+:\/\//.test(e)||this.mapOpts.absolute)return e;let B=this.opts.to?$a(this.opts.to):".";return typeof this.mapOpts.annotation=="string"&&(B=$a(gS(B,this.mapOpts.annotation))),e=bS(B,e),e}toUrl(e){return AS==="\\"&&(e=e.replace(/\\/g,"/")),encodeURI(e).replace(/[#?]/g,encodeURIComponent)}toFileUrl(e){if(g0)return g0(e).toString();throw new Error("`map.absolute` option is not available in this PostCSS build")}sourcePath(e){return this.mapOpts.from?this.toUrl(this.mapOpts.from):this.usesFileUrls?this.toFileUrl(e.source.input.from):this.toUrl(this.path(e.source.input.from))}generateString(){this.css="",this.map=new _a({file:this.outputFile()});let e=1,B=1,C="<no source>",t={source:"",generated:{line:0,column:0},original:{line:0,column:0}},n,r;this.stringify(this.root,(i,s,a)=>{if(this.css+=i,s&&a!=="end"&&(t.generated.line=e,t.generated.column=B-1,s.source&&s.source.start?(t.source=this.sourcePath(s),t.original.line=s.source.start.line,t.original.column=s.source.start.column-1,this.map.addMapping(t)):(t.source=C,t.original.line=1,t.original.column=0,this.map.addMapping(t))),n=i.match(/\n/g),n?(e+=n.length,r=i.lastIndexOf(`
`),B=i.length-r):B+=i.length,s&&a!=="start"){let o=s.parent||{raws:{}};(!(s.type==="decl"||s.type==="atrule"&&!s.nodes)||s!==o.last||o.raws.semicolon)&&(s.source&&s.source.end?(t.source=this.sourcePath(s),t.original.line=s.source.end.line,t.original.column=s.source.end.column-1,t.generated.line=e,t.generated.column=B-2,this.map.addMapping(t)):(t.source=C,t.original.line=1,t.original.column=0,t.generated.line=e,t.generated.column=B-1,this.map.addMapping(t)))}})}generate(){if(this.clearAnnotation(),TV&&LV&&this.isMap())return this.generateMap();{let e="";return this.stringify(this.root,B=>{e+=B}),[e]}}};var vS=GV;let xV=Bc,dd=class extends xV{constructor(e){super(e),this.type="comment"}};var tc=dd;dd.default=dd;let{isClean:yS,my:ES}=Ss,IS=ec,SS=tc,KV=Bc,wS,Lh,Th,DS;function kS(e){return e.map(B=>(B.nodes&&(B.nodes=kS(B.nodes)),delete B.source,B))}function PS(e){if(e[yS]=!1,e.proxyOf.nodes)for(let B of e.proxyOf.nodes)PS(B)}let bC=class extends KV{push(e){return e.parent=this,this.proxyOf.nodes.push(e),this}each(e){if(!this.proxyOf.nodes)return;let B=this.getIterator(),C,t;for(;this.indexes[B]<this.proxyOf.nodes.length&&(C=this.indexes[B],t=e(this.proxyOf.nodes[C],C),t!==!1);)this.indexes[B]+=1;return delete this.indexes[B],t}walk(e){return this.each((B,C)=>{let t;try{t=e(B,C)}catch(n){throw B.addToError(n)}return t!==!1&&B.walk&&(t=B.walk(e)),t})}walkDecls(e,B){return B?e instanceof RegExp?this.walk((C,t)=>{if(C.type==="decl"&&e.test(C.prop))return B(C,t)}):this.walk((C,t)=>{if(C.type==="decl"&&C.prop===e)return B(C,t)}):(B=e,this.walk((C,t)=>{if(C.type==="decl")return B(C,t)}))}walkRules(e,B){return B?e instanceof RegExp?this.walk((C,t)=>{if(C.type==="rule"&&e.test(C.selector))return B(C,t)}):this.walk((C,t)=>{if(C.type==="rule"&&C.selector===e)return B(C,t)}):(B=e,this.walk((C,t)=>{if(C.type==="rule")return B(C,t)}))}walkAtRules(e,B){return B?e instanceof RegExp?this.walk((C,t)=>{if(C.type==="atrule"&&e.test(C.name))return B(C,t)}):this.walk((C,t)=>{if(C.type==="atrule"&&C.name===e)return B(C,t)}):(B=e,this.walk((C,t)=>{if(C.type==="atrule")return B(C,t)}))}walkComments(e){return this.walk((B,C)=>{if(B.type==="comment")return e(B,C)})}append(...e){for(let B of e){let C=this.normalize(B,this.last);for(let t of C)this.proxyOf.nodes.push(t)}return this.markDirty(),this}prepend(...e){e=e.reverse();for(let B of e){let C=this.normalize(B,this.first,"prepend").reverse();for(let t of C)this.proxyOf.nodes.unshift(t);for(let t in this.indexes)this.indexes[t]=this.indexes[t]+C.length}return this.markDirty(),this}cleanRaws(e){if(super.cleanRaws(e),this.nodes)for(let B of this.nodes)B.cleanRaws(e)}insertBefore(e,B){let C=this.index(e),t=C===0?"prepend":!1,n=this.normalize(B,this.proxyOf.nodes[C],t).reverse();C=this.index(e);for(let i of n)this.proxyOf.nodes.splice(C,0,i);let r;for(let i in this.indexes)r=this.indexes[i],C<=r&&(this.indexes[i]=r+n.length);return this.markDirty(),this}insertAfter(e,B){let C=this.index(e),t=this.normalize(B,this.proxyOf.nodes[C]).reverse();C=this.index(e);for(let r of t)this.proxyOf.nodes.splice(C+1,0,r);let n;for(let r in this.indexes)n=this.indexes[r],C<n&&(this.indexes[r]=n+t.length);return this.markDirty(),this}removeChild(e){e=this.index(e),this.proxyOf.nodes[e].parent=void 0,this.proxyOf.nodes.splice(e,1);let B;for(let C in this.indexes)B=this.indexes[C],B>=e&&(this.indexes[C]=B-1);return this.markDirty(),this}removeAll(){for(let e of this.proxyOf.nodes)e.parent=void 0;return this.proxyOf.nodes=[],this.markDirty(),this}replaceValues(e,B,C){return C||(C=B,B={}),this.walkDecls(t=>{B.props&&!B.props.includes(t.prop)||B.fast&&!t.value.includes(B.fast)||(t.value=t.value.replace(e,C))}),this.markDirty(),this}every(e){return this.nodes.every(e)}some(e){return this.nodes.some(e)}index(e){return typeof e=="number"?e:(e.proxyOf&&(e=e.proxyOf),this.proxyOf.nodes.indexOf(e))}get first(){if(this.proxyOf.nodes)return this.proxyOf.nodes[0]}get last(){if(this.proxyOf.nodes)return this.proxyOf.nodes[this.proxyOf.nodes.length-1]}normalize(e,B){if(typeof e=="string")e=kS(wS(e).nodes);else if(Array.isArray(e)){e=e.slice(0);for(let C of e)C.parent&&C.parent.removeChild(C,"ignore")}else if(e.type==="root"&&this.type!=="document"){e=e.nodes.slice(0);for(let C of e)C.parent&&C.parent.removeChild(C,"ignore")}else if(e.type)e=[e];else if(e.prop){if(typeof e.value>"u")throw new Error("Value field is missed in node creation");typeof e.value!="string"&&(e.value=String(e.value)),e=[new IS(e)]}else if(e.selector)e=[new Lh(e)];else if(e.name)e=[new Th(e)];else if(e.text)e=[new SS(e)];else throw new Error("Unknown node type in node creation");return e.map(C=>(C[ES]||bC.rebuild(C),C=C.proxyOf,C.parent&&C.parent.removeChild(C),C[yS]&&PS(C),typeof C.raws.before>"u"&&B&&typeof B.raws.before<"u"&&(C.raws.before=B.raws.before.replace(/\S/g,"")),C.parent=this.proxyOf,C))}getProxyProcessor(){return{set(e,B,C){return e[B]===C||(e[B]=C,(B==="name"||B==="params"||B==="selector")&&e.markDirty()),!0},get(e,B){return B==="proxyOf"?e:e[B]?B==="each"||typeof B=="string"&&B.startsWith("walk")?(...C)=>e[B](...C.map(t=>typeof t=="function"?(n,r)=>t(n.toProxy(),r):t)):B==="every"||B==="some"?C=>e[B]((t,...n)=>C(t.toProxy(),...n)):B==="root"?()=>e.root().toProxy():B==="nodes"?e.nodes.map(C=>C.toProxy()):B==="first"||B==="last"?e[B].toProxy():e[B]:e[B]}}}getIterator(){this.lastEach||(this.lastEach=0),this.indexes||(this.indexes={}),this.lastEach+=1;let e=this.lastEach;return this.indexes[e]=0,e}};bC.registerParse=e=>{wS=e};bC.registerRule=e=>{Lh=e};bC.registerAtRule=e=>{Th=e};bC.registerRoot=e=>{DS=e};var En=bC;bC.default=bC;bC.rebuild=e=>{e.type==="atrule"?Object.setPrototypeOf(e,Th.prototype):e.type==="rule"?Object.setPrototypeOf(e,Lh.prototype):e.type==="decl"?Object.setPrototypeOf(e,IS.prototype):e.type==="comment"?Object.setPrototypeOf(e,SS.prototype):e.type==="root"&&Object.setPrototypeOf(e,DS.prototype),e[ES]=!0,e.nodes&&e.nodes.forEach(B=>{bC.rebuild(B)})};let QV=En,FS,NS,_i=class extends QV{constructor(e){super({type:"document",...e}),this.nodes||(this.nodes=[])}toResult(e={}){return new FS(new NS,this,e).stringify()}};_i.registerLazyResult=e=>{FS=e};_i.registerProcessor=e=>{NS=e};var Gh=_i;_i.default=_i;let fd=class{constructor(e,B={}){if(this.type="warning",this.text=e,B.node&&B.node.source){let C=B.node.rangeBy(B);this.line=C.start.line,this.column=C.start.column,this.endLine=C.end.line,this.endColumn=C.end.column}for(let C in B)this[C]=B[C]}toString(){return this.node?this.node.error(this.text,{plugin:this.plugin,index:this.index,word:this.word}).message:this.plugin?this.plugin+": "+this.text:this.text}};var OS=fd;fd.default=fd;let JV=OS,hd=class{constructor(e,B,C){this.processor=e,this.messages=[],this.root=B,this.opts=C,this.css=void 0,this.map=void 0}toString(){return this.css}warn(e,B={}){B.plugin||this.lastPlugin&&this.lastPlugin.postcssPlugin&&(B.plugin=this.lastPlugin.postcssPlugin);let C=new JV(e,B);return this.messages.push(C),C}warnings(){return this.messages.filter(e=>e.type==="warning")}get content(){return this.css}};var xh=hd;hd.default=hd;const mu="'".charCodeAt(0),b0='"'.charCodeAt(0),pa="\\".charCodeAt(0),A0="/".charCodeAt(0),ma=`
`.charCodeAt(0),jr=" ".charCodeAt(0),ga="\f".charCodeAt(0),ba="	".charCodeAt(0),Aa="\r".charCodeAt(0),UV="[".charCodeAt(0),VV="]".charCodeAt(0),WV="(".charCodeAt(0),jV=")".charCodeAt(0),YV="{".charCodeAt(0),XV="}".charCodeAt(0),ZV=";".charCodeAt(0),qV="*".charCodeAt(0),zV=":".charCodeAt(0),_V="@".charCodeAt(0),va=/[\t\n\f\r "#'()/;[\\\]{}]/g,ya=/[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,$V=/.[\n"'(/\\]/,v0=/[\da-f]/i;var BW=function(e,B={}){let C=e.css.valueOf(),t=B.ignoreErrors,n,r,i,s,a,o,c,l,u,m,d=C.length,h=0,g=[],f=[];function p(){return h}function b(E){throw e.error("Unclosed "+E,h)}function A(){return f.length===0&&h>=d}function y(E){if(f.length)return f.pop();if(h>=d)return;let v=E?E.ignoreUnclosed:!1;switch(n=C.charCodeAt(h),n){case ma:case jr:case ba:case Aa:case ga:{r=h;do r+=1,n=C.charCodeAt(r);while(n===jr||n===ma||n===ba||n===Aa||n===ga);m=["space",C.slice(h,r)],h=r-1;break}case UV:case VV:case YV:case XV:case zV:case ZV:case jV:{let w=String.fromCharCode(n);m=[w,w,h];break}case WV:{if(l=g.length?g.pop()[1]:"",u=C.charCodeAt(h+1),l==="url"&&u!==mu&&u!==b0&&u!==jr&&u!==ma&&u!==ba&&u!==ga&&u!==Aa){r=h;do{if(o=!1,r=C.indexOf(")",r+1),r===-1)if(t||v){r=h;break}else b("bracket");for(c=r;C.charCodeAt(c-1)===pa;)c-=1,o=!o}while(o);m=["brackets",C.slice(h,r+1),h,r],h=r}else r=C.indexOf(")",h+1),s=C.slice(h,r+1),r===-1||$V.test(s)?m=["(","(",h]:(m=["brackets",s,h,r],h=r);break}case mu:case b0:{i=n===mu?"'":'"',r=h;do{if(o=!1,r=C.indexOf(i,r+1),r===-1)if(t||v){r=h+1;break}else b("string");for(c=r;C.charCodeAt(c-1)===pa;)c-=1,o=!o}while(o);m=["string",C.slice(h,r+1),h,r],h=r;break}case _V:{va.lastIndex=h+1,va.test(C),va.lastIndex===0?r=C.length-1:r=va.lastIndex-2,m=["at-word",C.slice(h,r+1),h,r],h=r;break}case pa:{for(r=h,a=!0;C.charCodeAt(r+1)===pa;)r+=1,a=!a;if(n=C.charCodeAt(r+1),a&&n!==A0&&n!==jr&&n!==ma&&n!==ba&&n!==Aa&&n!==ga&&(r+=1,v0.test(C.charAt(r)))){for(;v0.test(C.charAt(r+1));)r+=1;C.charCodeAt(r+1)===jr&&(r+=1)}m=["word",C.slice(h,r+1),h,r],h=r;break}default:{n===A0&&C.charCodeAt(h+1)===qV?(r=C.indexOf("*/",h+2)+1,r===0&&(t||v?r=C.length:b("comment")),m=["comment",C.slice(h,r+1),h,r],h=r):(ya.lastIndex=h+1,ya.test(C),ya.lastIndex===0?r=C.length-1:r=ya.lastIndex-2,m=["word",C.slice(h,r+1),h,r],g.push(m),h=r);break}}return h++,m}function I(E){f.push(E)}return{back:I,nextToken:y,endOfFile:A,position:p}};let RS=En,il=class extends RS{constructor(e){super(e),this.type="atrule"}append(...e){return this.proxyOf.nodes||(this.nodes=[]),super.append(...e)}prepend(...e){return this.proxyOf.nodes||(this.nodes=[]),super.prepend(...e)}};var Kh=il;il.default=il;RS.registerAtRule(il);let HS=En,MS,LS,mr=class extends HS{constructor(e){super(e),this.type="root",this.nodes||(this.nodes=[])}removeChild(e,B){let C=this.index(e);return!B&&C===0&&this.nodes.length>1&&(this.nodes[1].raws.before=this.nodes[C].raws.before),super.removeChild(e)}normalize(e,B,C){let t=super.normalize(e);if(B){if(C==="prepend")this.nodes.length>1?B.raws.before=this.nodes[1].raws.before:delete B.raws.before;else if(this.first!==B)for(let n of t)n.raws.before=B.raws.before}return t}toResult(e={}){return new MS(new LS,this,e).stringify()}};mr.registerLazyResult=e=>{MS=e};mr.registerProcessor=e=>{LS=e};var ws=mr;mr.default=mr;HS.registerRoot(mr);let $i={split(e,B,C){let t=[],n="",r=!1,i=0,s=!1,a="",o=!1;for(let c of e)o?o=!1:c==="\\"?o=!0:s?c===a&&(s=!1):c==='"'||c==="'"?(s=!0,a=c):c==="("?i+=1:c===")"?i>0&&(i-=1):i===0&&B.includes(c)&&(r=!0),r?(n!==""&&t.push(n.trim()),n="",r=!1):n+=c;return(C||n!=="")&&t.push(n.trim()),t},space(e){let B=[" ",`
`,"	"];return $i.split(e,B)},comma(e){return $i.split(e,[","],!0)}};var TS=$i;$i.default=$i;let GS=En,eW=TS,sl=class extends GS{constructor(e){super(e),this.type="rule",this.nodes||(this.nodes=[])}get selectors(){return eW.comma(this.selector)}set selectors(e){let B=this.selector?this.selector.match(/,\s*/):null,C=B?B[0]:","+this.raw("between","beforeOpen");this.selector=e.join(C)}};var Qh=sl;sl.default=sl;GS.registerRule(sl);let CW=ec,tW=BW,nW=tc,rW=Kh,iW=ws,y0=Qh;const E0={empty:!0,space:!0};function sW(e){for(let B=e.length-1;B>=0;B--){let C=e[B],t=C[3]||C[2];if(t)return t}}let aW=class{constructor(e){this.input=e,this.root=new iW,this.current=this.root,this.spaces="",this.semicolon=!1,this.customProperty=!1,this.createTokenizer(),this.root.source={input:e,start:{offset:0,line:1,column:1}}}createTokenizer(){this.tokenizer=tW(this.input)}parse(){let e;for(;!this.tokenizer.endOfFile();)switch(e=this.tokenizer.nextToken(),e[0]){case"space":this.spaces+=e[1];break;case";":this.freeSemicolon(e);break;case"}":this.end(e);break;case"comment":this.comment(e);break;case"at-word":this.atrule(e);break;case"{":this.emptyRule(e);break;default:this.other(e);break}this.endFile()}comment(e){let B=new nW;this.init(B,e[2]),B.source.end=this.getPosition(e[3]||e[2]);let C=e[1].slice(2,-2);if(/^\s*$/.test(C))B.text="",B.raws.left=C,B.raws.right="";else{let t=C.match(/^(\s*)([^]*\S)(\s*)$/);B.text=t[2],B.raws.left=t[1],B.raws.right=t[3]}}emptyRule(e){let B=new y0;this.init(B,e[2]),B.selector="",B.raws.between="",this.current=B}other(e){let B=!1,C=null,t=!1,n=null,r=[],i=e[1].startsWith("--"),s=[],a=e;for(;a;){if(C=a[0],s.push(a),C==="("||C==="[")n||(n=a),r.push(C==="("?")":"]");else if(i&&t&&C==="{")n||(n=a),r.push("}");else if(r.length===0)if(C===";")if(t){this.decl(s,i);return}else break;else if(C==="{"){this.rule(s);return}else if(C==="}"){this.tokenizer.back(s.pop()),B=!0;break}else C===":"&&(t=!0);else C===r[r.length-1]&&(r.pop(),r.length===0&&(n=null));a=this.tokenizer.nextToken()}if(this.tokenizer.endOfFile()&&(B=!0),r.length>0&&this.unclosedBracket(n),B&&t){if(!i)for(;s.length&&(a=s[s.length-1][0],!(a!=="space"&&a!=="comment"));)this.tokenizer.back(s.pop());this.decl(s,i)}else this.unknownWord(s)}rule(e){e.pop();let B=new y0;this.init(B,e[0][2]),B.raws.between=this.spacesAndCommentsFromEnd(e),this.raw(B,"selector",e),this.current=B}decl(e,B){let C=new CW;this.init(C,e[0][2]);let t=e[e.length-1];for(t[0]===";"&&(this.semicolon=!0,e.pop()),C.source.end=this.getPosition(t[3]||t[2]||sW(e));e[0][0]!=="word";)e.length===1&&this.unknownWord(e),C.raws.before+=e.shift()[1];for(C.source.start=this.getPosition(e[0][2]),C.prop="";e.length;){let s=e[0][0];if(s===":"||s==="space"||s==="comment")break;C.prop+=e.shift()[1]}C.raws.between="";let n;for(;e.length;)if(n=e.shift(),n[0]===":"){C.raws.between+=n[1];break}else n[0]==="word"&&/\w/.test(n[1])&&this.unknownWord([n]),C.raws.between+=n[1];(C.prop[0]==="_"||C.prop[0]==="*")&&(C.raws.before+=C.prop[0],C.prop=C.prop.slice(1));let r=[],i;for(;e.length&&(i=e[0][0],!(i!=="space"&&i!=="comment"));)r.push(e.shift());this.precheckMissedSemicolon(e);for(let s=e.length-1;s>=0;s--){if(n=e[s],n[1].toLowerCase()==="!important"){C.important=!0;let a=this.stringFrom(e,s);a=this.spacesFromEnd(e)+a,a!==" !important"&&(C.raws.important=a);break}else if(n[1].toLowerCase()==="important"){let a=e.slice(0),o="";for(let c=s;c>0;c--){let l=a[c][0];if(o.trim().indexOf("!")===0&&l!=="space")break;o=a.pop()[1]+o}o.trim().indexOf("!")===0&&(C.important=!0,C.raws.important=o,e=a)}if(n[0]!=="space"&&n[0]!=="comment")break}e.some(s=>s[0]!=="space"&&s[0]!=="comment")&&(C.raws.between+=r.map(s=>s[1]).join(""),r=[]),this.raw(C,"value",r.concat(e),B),C.value.includes(":")&&!B&&this.checkMissedSemicolon(e)}atrule(e){let B=new rW;B.name=e[1].slice(1),B.name===""&&this.unnamedAtrule(B,e),this.init(B,e[2]);let C,t,n,r=!1,i=!1,s=[],a=[];for(;!this.tokenizer.endOfFile();){if(e=this.tokenizer.nextToken(),C=e[0],C==="("||C==="["?a.push(C==="("?")":"]"):C==="{"&&a.length>0?a.push("}"):C===a[a.length-1]&&a.pop(),a.length===0)if(C===";"){B.source.end=this.getPosition(e[2]),this.semicolon=!0;break}else if(C==="{"){i=!0;break}else if(C==="}"){if(s.length>0){for(n=s.length-1,t=s[n];t&&t[0]==="space";)t=s[--n];t&&(B.source.end=this.getPosition(t[3]||t[2]))}this.end(e);break}else s.push(e);else s.push(e);if(this.tokenizer.endOfFile()){r=!0;break}}B.raws.between=this.spacesAndCommentsFromEnd(s),s.length?(B.raws.afterName=this.spacesAndCommentsFromStart(s),this.raw(B,"params",s),r&&(e=s[s.length-1],B.source.end=this.getPosition(e[3]||e[2]),this.spaces=B.raws.between,B.raws.between="")):(B.raws.afterName="",B.params=""),i&&(B.nodes=[],this.current=B)}end(e){this.current.nodes&&this.current.nodes.length&&(this.current.raws.semicolon=this.semicolon),this.semicolon=!1,this.current.raws.after=(this.current.raws.after||"")+this.spaces,this.spaces="",this.current.parent?(this.current.source.end=this.getPosition(e[2]),this.current=this.current.parent):this.unexpectedClose(e)}endFile(){this.current.parent&&this.unclosedBlock(),this.current.nodes&&this.current.nodes.length&&(this.current.raws.semicolon=this.semicolon),this.current.raws.after=(this.current.raws.after||"")+this.spaces}freeSemicolon(e){if(this.spaces+=e[1],this.current.nodes){let B=this.current.nodes[this.current.nodes.length-1];B&&B.type==="rule"&&!B.raws.ownSemicolon&&(B.raws.ownSemicolon=this.spaces,this.spaces="")}}getPosition(e){let B=this.input.fromOffset(e);return{offset:e,line:B.line,column:B.col}}init(e,B){this.current.push(e),e.source={start:this.getPosition(B),input:this.input},e.raws.before=this.spaces,this.spaces="",e.type!=="comment"&&(this.semicolon=!1)}raw(e,B,C,t){let n,r,i=C.length,s="",a=!0,o,c;for(let l=0;l<i;l+=1)n=C[l],r=n[0],r==="space"&&l===i-1&&!t?a=!1:r==="comment"?(c=C[l-1]?C[l-1][0]:"empty",o=C[l+1]?C[l+1][0]:"empty",!E0[c]&&!E0[o]?s.slice(-1)===","?a=!1:s+=n[1]:a=!1):s+=n[1];if(!a){let l=C.reduce((u,m)=>u+m[1],"");e.raws[B]={value:s,raw:l}}e[B]=s}spacesAndCommentsFromEnd(e){let B,C="";for(;e.length&&(B=e[e.length-1][0],!(B!=="space"&&B!=="comment"));)C=e.pop()[1]+C;return C}spacesAndCommentsFromStart(e){let B,C="";for(;e.length&&(B=e[0][0],!(B!=="space"&&B!=="comment"));)C+=e.shift()[1];return C}spacesFromEnd(e){let B,C="";for(;e.length&&(B=e[e.length-1][0],B==="space");)C=e.pop()[1]+C;return C}stringFrom(e,B){let C="";for(let t=B;t<e.length;t++)C+=e[t][1];return e.splice(B,e.length-B),C}colon(e){let B=0,C,t,n;for(let[r,i]of e.entries()){if(C=i,t=C[0],t==="("&&(B+=1),t===")"&&(B-=1),B===0&&t===":")if(!n)this.doubleColon(C);else{if(n[0]==="word"&&n[1]==="progid")continue;return r}n=C}return!1}unclosedBracket(e){throw this.input.error("Unclosed bracket",{offset:e[2]},{offset:e[2]+1})}unknownWord(e){throw this.input.error("Unknown word",{offset:e[0][2]},{offset:e[0][2]+e[0][1].length})}unexpectedClose(e){throw this.input.error("Unexpected }",{offset:e[2]},{offset:e[2]+1})}unclosedBlock(){let e=this.current.source.start;throw this.input.error("Unclosed block",e.line,e.column)}doubleColon(e){throw this.input.error("Double colon",{offset:e[2]},{offset:e[2]+e[1].length})}unnamedAtrule(e,B){throw this.input.error("At-rule without name",{offset:B[2]},{offset:B[2]+B[1].length})}precheckMissedSemicolon(){}checkMissedSemicolon(e){let B=this.colon(e);if(B===!1)return;let C=0,t;for(let n=B-1;n>=0&&(t=e[n],!(t[0]!=="space"&&(C+=1,C===2)));n--);throw this.input.error("Missed semicolon",t[0]==="word"?t[3]+1:t[2])}};var oW=aW;let lW=En,cW=oW,uW=Cc;function al(e,B){let C=new uW(e,B),t=new cW(C);try{t.parse()}catch(n){throw n}return t.root}var Jh=al;al.default=al;lW.registerParse(al);let{isClean:aC,my:dW}=Ss,fW=vS,hW=$l,pW=En,mW=Gh,I0=xh,gW=Jh,bW=ws;const AW={document:"Document",root:"Root",atrule:"AtRule",rule:"Rule",decl:"Declaration",comment:"Comment"},vW={postcssPlugin:!0,prepare:!0,Once:!0,Document:!0,Root:!0,Declaration:!0,Rule:!0,AtRule:!0,Comment:!0,DeclarationExit:!0,RuleExit:!0,AtRuleExit:!0,CommentExit:!0,RootExit:!0,DocumentExit:!0,OnceExit:!0},yW={postcssPlugin:!0,prepare:!0,Once:!0},gr=0;function Yr(e){return typeof e=="object"&&typeof e.then=="function"}function xS(e){let B=!1,C=AW[e.type];return e.type==="decl"?B=e.prop.toLowerCase():e.type==="atrule"&&(B=e.name.toLowerCase()),B&&e.append?[C,C+"-"+B,gr,C+"Exit",C+"Exit-"+B]:B?[C,C+"-"+B,C+"Exit",C+"Exit-"+B]:e.append?[C,gr,C+"Exit"]:[C,C+"Exit"]}function S0(e){let B;return e.type==="document"?B=["Document",gr,"DocumentExit"]:e.type==="root"?B=["Root",gr,"RootExit"]:B=xS(e),{node:e,events:B,eventIndex:0,visitors:[],visitorIndex:0,iterator:0}}function pd(e){return e[aC]=!1,e.nodes&&e.nodes.forEach(B=>pd(B)),e}let md={},fn=class{constructor(e,B,C){this.stringified=!1,this.processed=!1;let t;if(typeof B=="object"&&B!==null&&(B.type==="root"||B.type==="document"))t=pd(B);else if(B instanceof fn||B instanceof I0)t=pd(B.root),B.map&&(typeof C.map>"u"&&(C.map={}),C.map.inline||(C.map.inline=!1),C.map.prev=B.map);else{let n=gW;C.syntax&&(n=C.syntax.parse),C.parser&&(n=C.parser),n.parse&&(n=n.parse);try{t=n(B,C)}catch(r){this.processed=!0,this.error=r}t&&!t[dW]&&pW.rebuild(t)}this.result=new I0(e,t,C),this.helpers={...md,result:this.result,postcss:md},this.plugins=this.processor.plugins.map(n=>typeof n=="object"&&n.prepare?{...n,...n.prepare(this.result)}:n)}get[Symbol.toStringTag](){return"LazyResult"}get processor(){return this.result.processor}get opts(){return this.result.opts}get css(){return this.stringify().css}get content(){return this.stringify().content}get map(){return this.stringify().map}get root(){return this.sync().root}get messages(){return this.sync().messages}warnings(){return this.sync().warnings()}toString(){return this.css}then(e,B){return this.async().then(e,B)}catch(e){return this.async().catch(e)}finally(e){return this.async().then(e,e)}async(){return this.error?Promise.reject(this.error):this.processed?Promise.resolve(this.result):(this.processing||(this.processing=this.runAsync()),this.processing)}sync(){if(this.error)throw this.error;if(this.processed)return this.result;if(this.processed=!0,this.processing)throw this.getAsyncError();for(let e of this.plugins){let B=this.runOnRoot(e);if(Yr(B))throw this.getAsyncError()}if(this.prepareVisitors(),this.hasListener){let e=this.result.root;for(;!e[aC];)e[aC]=!0,this.walkSync(e);if(this.listeners.OnceExit)if(e.type==="document")for(let B of e.nodes)this.visitSync(this.listeners.OnceExit,B);else this.visitSync(this.listeners.OnceExit,e)}return this.result}stringify(){if(this.error)throw this.error;if(this.stringified)return this.result;this.stringified=!0,this.sync();let e=this.result.opts,B=hW;e.syntax&&(B=e.syntax.stringify),e.stringifier&&(B=e.stringifier),B.stringify&&(B=B.stringify);let C=new fW(B,this.result.root,this.result.opts).generate();return this.result.css=C[0],this.result.map=C[1],this.result}walkSync(e){e[aC]=!0;let B=xS(e);for(let C of B)if(C===gr)e.nodes&&e.each(t=>{t[aC]||this.walkSync(t)});else{let t=this.listeners[C];if(t&&this.visitSync(t,e.toProxy()))return}}visitSync(e,B){for(let[C,t]of e){this.result.lastPlugin=C;let n;try{n=t(B,this.helpers)}catch(r){throw this.handleError(r,B.proxyOf)}if(B.type!=="root"&&B.type!=="document"&&!B.parent)return!0;if(Yr(n))throw this.getAsyncError()}}runOnRoot(e){this.result.lastPlugin=e;try{if(typeof e=="object"&&e.Once){if(this.result.root.type==="document"){let B=this.result.root.nodes.map(C=>e.Once(C,this.helpers));return Yr(B[0])?Promise.all(B):B}return e.Once(this.result.root,this.helpers)}else if(typeof e=="function")return e(this.result.root,this.result)}catch(B){throw this.handleError(B)}}getAsyncError(){throw new Error("Use process(css).then(cb) to work with async plugins")}handleError(e,B){let C=this.result.lastPlugin;try{B&&B.addToError(e),this.error=e,e.name==="CssSyntaxError"&&!e.plugin?(e.plugin=C.postcssPlugin,e.setMessage()):C.postcssVersion}catch(t){console&&console.error&&console.error(t)}return e}async runAsync(){this.plugin=0;for(let e=0;e<this.plugins.length;e++){let B=this.plugins[e],C=this.runOnRoot(B);if(Yr(C))try{await C}catch(t){throw this.handleError(t)}}if(this.prepareVisitors(),this.hasListener){let e=this.result.root;for(;!e[aC];){e[aC]=!0;let B=[S0(e)];for(;B.length>0;){let C=this.visitTick(B);if(Yr(C))try{await C}catch(t){let n=B[B.length-1].node;throw this.handleError(t,n)}}}if(this.listeners.OnceExit)for(let[B,C]of this.listeners.OnceExit){this.result.lastPlugin=B;try{if(e.type==="document"){let t=e.nodes.map(n=>C(n,this.helpers));await Promise.all(t)}else await C(e,this.helpers)}catch(t){throw this.handleError(t)}}}return this.processed=!0,this.stringify()}prepareVisitors(){this.listeners={};let e=(B,C,t)=>{this.listeners[C]||(this.listeners[C]=[]),this.listeners[C].push([B,t])};for(let B of this.plugins)if(typeof B=="object")for(let C in B){if(!vW[C]&&/^[A-Z]/.test(C))throw new Error(`Unknown event ${C} in ${B.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);if(!yW[C])if(typeof B[C]=="object")for(let t in B[C])t==="*"?e(B,C,B[C][t]):e(B,C+"-"+t.toLowerCase(),B[C][t]);else typeof B[C]=="function"&&e(B,C,B[C])}this.hasListener=Object.keys(this.listeners).length>0}visitTick(e){let B=e[e.length-1],{node:C,visitors:t}=B;if(C.type!=="root"&&C.type!=="document"&&!C.parent){e.pop();return}if(t.length>0&&B.visitorIndex<t.length){let[r,i]=t[B.visitorIndex];B.visitorIndex+=1,B.visitorIndex===t.length&&(B.visitors=[],B.visitorIndex=0),this.result.lastPlugin=r;try{return i(C.toProxy(),this.helpers)}catch(s){throw this.handleError(s,C)}}if(B.iterator!==0){let r=B.iterator,i;for(;i=C.nodes[C.indexes[r]];)if(C.indexes[r]+=1,!i[aC]){i[aC]=!0,e.push(S0(i));return}B.iterator=0,delete C.indexes[r]}let n=B.events;for(;B.eventIndex<n.length;){let r=n[B.eventIndex];if(B.eventIndex+=1,r===gr){C.nodes&&C.nodes.length&&(C[aC]=!0,B.iterator=C.getIterator());return}else if(this.listeners[r]){B.visitors=this.listeners[r];return}}e.pop()}};fn.registerPostcss=e=>{md=e};var KS=fn;fn.default=fn;bW.registerLazyResult(fn);mW.registerLazyResult(fn);let EW=vS,IW=$l,SW=Jh;const wW=xh;let gd=class{constructor(e,B,C){B=B.toString(),this.stringified=!1,this._processor=e,this._css=B,this._opts=C,this._map=void 0;let t,n=IW;this.result=new wW(this._processor,t,this._opts),this.result.css=B;let r=this;Object.defineProperty(this.result,"root",{get(){return r.root}});let i=new EW(n,t,this._opts,B);if(i.isMap()){let[s,a]=i.generate();s&&(this.result.css=s),a&&(this.result.map=a)}}get[Symbol.toStringTag](){return"NoWorkResult"}get processor(){return this.result.processor}get opts(){return this.result.opts}get css(){return this.result.css}get content(){return this.result.css}get map(){return this.result.map}get root(){if(this._root)return this._root;let e,B=SW;try{e=B(this._css,this._opts)}catch(C){this.error=C}if(this.error)throw this.error;return this._root=e,e}get messages(){return[]}warnings(){return[]}toString(){return this._css}then(e,B){return this.async().then(e,B)}catch(e){return this.async().catch(e)}finally(e){return this.async().then(e,e)}async(){return this.error?Promise.reject(this.error):Promise.resolve(this.result)}sync(){if(this.error)throw this.error;return this.result}};var DW=gd;gd.default=gd;let kW=DW,PW=KS,FW=Gh,NW=ws,Bs=class{constructor(e=[]){this.version="8.4.21",this.plugins=this.normalize(e)}use(e){return this.plugins=this.plugins.concat(this.normalize([e])),this}process(e,B={}){return this.plugins.length===0&&typeof B.parser>"u"&&typeof B.stringifier>"u"&&typeof B.syntax>"u"?new kW(this,e,B):new PW(this,e,B)}normalize(e){let B=[];for(let C of e)if(C.postcss===!0?C=C():C.postcss&&(C=C.postcss),typeof C=="object"&&Array.isArray(C.plugins))B=B.concat(C.plugins);else if(typeof C=="object"&&C.postcssPlugin)B.push(C);else if(typeof C=="function")B.push(C);else if(!(typeof C=="object"&&(C.parse||C.stringify)))throw new Error(C+" is not a PostCSS plugin");return B}};var OW=Bs;Bs.default=Bs;NW.registerProcessor(Bs);FW.registerProcessor(Bs);let RW=ec,HW=pS,MW=tc,LW=Kh,TW=Cc,GW=ws,xW=Qh;function es(e,B){if(Array.isArray(e))return e.map(n=>es(n));let{inputs:C,...t}=e;if(C){B=[];for(let n of C){let r={...n,__proto__:TW.prototype};r.map&&(r.map={...r.map,__proto__:HW.prototype}),B.push(r)}}if(t.nodes&&(t.nodes=e.nodes.map(n=>es(n,B))),t.source){let{inputId:n,...r}=t.source;t.source=r,n!=null&&(t.source.input=B[n])}if(t.type==="root")return new GW(t);if(t.type==="decl")return new RW(t);if(t.type==="rule")return new xW(t);if(t.type==="comment")return new MW(t);if(t.type==="atrule")return new LW(t);throw new Error("Unknown node type: "+e.type)}var KW=es;es.default=es;let QW=Mh,QS=ec,JW=KS,UW=En,Uh=OW,VW=$l,WW=KW,JS=Gh,jW=OS,US=tc,VS=Kh,YW=xh,XW=Cc,ZW=Jh,qW=TS,WS=Qh,jS=ws,zW=Bc;function tB(...e){return e.length===1&&Array.isArray(e[0])&&(e=e[0]),new Uh(e)}tB.plugin=function(e,B){let C=!1;function t(...r){console&&console.warn&&!C&&(C=!0,console.warn(e+`: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`),{}.LANG&&{}.LANG.startsWith("cn")&&console.warn(e+`: 里面 postcss.plugin 被弃用. 迁移指南:
https://www.w3ctech.com/topic/2226`));let i=B(...r);return i.postcssPlugin=e,i.postcssVersion=new Uh().version,i}let n;return Object.defineProperty(t,"postcss",{get(){return n||(n=t()),n}}),t.process=function(r,i,s){return tB([t(s)]).process(r,i)},t};tB.stringify=VW;tB.parse=ZW;tB.fromJSON=WW;tB.list=qW;tB.comment=e=>new US(e);tB.atRule=e=>new VS(e);tB.decl=e=>new QS(e);tB.rule=e=>new WS(e);tB.root=e=>new jS(e);tB.document=e=>new JS(e);tB.CssSyntaxError=QW;tB.Declaration=QS;tB.Container=UW;tB.Processor=Uh;tB.Document=JS;tB.Comment=US;tB.Warning=jW;tB.AtRule=VS;tB.Result=YW;tB.Input=XW;tB.Rule=WS;tB.Root=jS;tB.Node=zW;JW.registerPostcss(tB);var Ds=tB;tB.default=tB;let{list:bd}=Ds;gB.error=function(e){let B=new Error(e);throw B.autoprefixer=!0,B};gB.uniq=function(e){return[...new Set(e)]};gB.removeNote=function(e){return e.includes(" ")?e.split(" ")[0]:e};gB.escapeRegexp=function(e){return e.replace(/[$()*+-.?[\\\]^{|}]/g,"\\$&")};gB.regexp=function(e,B=!0){return B&&(e=this.escapeRegexp(e)),new RegExp(`(^|[\\s,(])(${e}($|[\\s(,]))`,"gi")};gB.editList=function(e,B){let C=bd.comma(e),t=B(C,[]);if(C===t)return e;let n=e.match(/,\s*/);return n=n?n[0]:", ",t.join(n)};gB.splitSelector=function(e){return bd.comma(e).map(B=>bd.space(B).map(C=>C.split(/(?=\.|#)/g)))};gB.isPureNumber=function(e){return typeof e=="number"?!0:typeof e=="string"?/^[0-9]+$/.test(e):!1};let _W=XE,w0=yn.agents,$W=gB,Bj=class{static prefixes(){if(this.prefixesCache)return this.prefixesCache;this.prefixesCache=[];for(let e in w0)this.prefixesCache.push(`-${w0[e].prefix}-`);return this.prefixesCache=$W.uniq(this.prefixesCache).sort((e,B)=>B.length-e.length),this.prefixesCache}static withPrefix(e){return this.prefixesRegexp||(this.prefixesRegexp=new RegExp(this.prefixes().join("|"))),this.prefixesRegexp.test(e)}constructor(e,B,C,t){this.data=e,this.options=C||{},this.browserslistOpts=t||{},this.selected=this.parse(B)}parse(e){let B={};for(let C in this.browserslistOpts)B[C]=this.browserslistOpts[C];return B.path=this.options.from,_W(e,B)}prefix(e){let[B,C]=e.split(" "),t=this.data[B],n=t.prefix_exceptions&&t.prefix_exceptions[C];return n||(n=t.prefix),`-${n}-`}isSelected(e){return this.selected.includes(e)}};var Vh=Bj,YS={prefix(e){let B=e.match(/^(-\w+-)/);return B?B[0]:""},unprefixed(e){return e.replace(/^-\w+-/,"")}};let ej=Vh,D0=YS,Cj=gB;function Ad(e,B){let C=new e.constructor;for(let t of Object.keys(e||{})){let n=e[t];t==="parent"&&typeof n=="object"?B&&(C[t]=B):t==="source"||t===null?C[t]=n:Array.isArray(n)?C[t]=n.map(r=>Ad(r,C)):t!=="_autoprefixerPrefix"&&t!=="_autoprefixerValues"&&t!=="proxyCache"&&(typeof n=="object"&&n!==null&&(n=Ad(n,C)),C[t]=n)}return C}let XS=class{static hack(e){return this.hacks||(this.hacks={}),e.names.map(B=>(this.hacks[B]=e,this.hacks[B]))}static load(e,B,C){let t=this.hacks&&this.hacks[e];return t?new t(e,B,C):new this(e,B,C)}static clone(e,B){let C=Ad(e);for(let t in B)C[t]=B[t];return C}constructor(e,B,C){this.prefixes=B,this.name=e,this.all=C}parentPrefix(e){let B;return typeof e._autoprefixerPrefix<"u"?B=e._autoprefixerPrefix:e.type==="decl"&&e.prop[0]==="-"?B=D0.prefix(e.prop):e.type==="root"?B=!1:e.type==="rule"&&e.selector.includes(":-")&&/:(-\w+-)/.test(e.selector)?B=e.selector.match(/:(-\w+-)/)[1]:e.type==="atrule"&&e.name[0]==="-"?B=D0.prefix(e.name):B=this.parentPrefix(e.parent),ej.prefixes().includes(B)||(B=!1),e._autoprefixerPrefix=B,e._autoprefixerPrefix}process(e,B){if(!this.check(e))return;let C=this.parentPrefix(e),t=this.prefixes.filter(r=>!C||C===Cj.removeNote(r)),n=[];for(let r of t)this.add(e,r,n.concat([r]),B)&&n.push(r);return n}clone(e,B){return XS.clone(e,B)}};var Wh=XS;let tj=Wh,nj=Vh,k0=gB,rj=class extends tj{check(){return!0}prefixed(e,B){return B+e}normalize(e){return e}otherPrefixes(e,B){for(let C of nj.prefixes())if(C!==B&&e.includes(C))return e.replace(/var\([^)]+\)/,"").includes(C);return!1}set(e,B){return e.prop=this.prefixed(e.prop,B),e}needCascade(e){return e._autoprefixerCascade||(e._autoprefixerCascade=this.all.options.cascade!==!1&&e.raw("before").includes(`
`)),e._autoprefixerCascade}maxPrefixed(e,B){if(B._autoprefixerMax)return B._autoprefixerMax;let C=0;for(let t of e)t=k0.removeNote(t),t.length>C&&(C=t.length);return B._autoprefixerMax=C,B._autoprefixerMax}calcBefore(e,B,C=""){let t=this.maxPrefixed(e,B)-k0.removeNote(C).length,n=B.raw("before");return t>0&&(n+=Array(t).fill(" ").join("")),n}restoreBefore(e){let B=e.raw("before").split(`
`),C=B[B.length-1];this.all.group(e).up(t=>{let n=t.raw("before").split(`
`),r=n[n.length-1];r.length<C.length&&(C=r)}),B[B.length-1]=C,e.raws.before=B.join(`
`)}insert(e,B,C){let t=this.set(this.clone(e),B);if(!(!t||e.parent.some(n=>n.prop===t.prop&&n.value===t.value)))return this.needCascade(e)&&(t.raws.before=this.calcBefore(C,e,B)),e.parent.insertBefore(e,t)}isAlready(e,B){let C=this.all.group(e).up(t=>t.prop===B);return C||(C=this.all.group(e).down(t=>t.prop===B)),C}add(e,B,C,t){let n=this.prefixed(e.prop,B);if(!(this.isAlready(e,n)||this.otherPrefixes(e.value,B)))return this.insert(e,B,C,t)}process(e,B){if(!this.needCascade(e)){super.process(e,B);return}let C=super.process(e,B);!C||!C.length||(this.restoreBefore(e),e.raws.before=this.calcBefore(C,e))}old(e,B){return[this.prefixed(e,B)]}};var J=rj,P0={},ij={get exports(){return P0},set exports(e){P0=e}};/**
* @license Fraction.js v4.2.0 05/03/2022
* https://www.xarg.org/2014/03/rational-numbers-in-javascript/
*
* Copyright (c) 2021, Robert Eisele (robert@xarg.org)
* Dual licensed under the MIT or GPL Version 2 licenses.
**/(function(e,B){(function(C){var t=2e3,n={s:1,n:0,d:1};function r(d,h){if(isNaN(d=parseInt(d,10)))throw m.InvalidParameter;return d*h}function i(d,h){if(h===0)throw m.DivisionByZero;var g=Object.create(m.prototype);g.s=d<0?-1:1,d=d<0?-d:d;var f=u(d,h);return g.n=d/f,g.d=h/f,g}function s(d){for(var h={},g=d,f=2,p=4;p<=g;){for(;g%f===0;)g/=f,h[f]=(h[f]||0)+1;p+=1+2*f++}return g!==d?g>1&&(h[g]=(h[g]||0)+1):h[d]=(h[d]||0)+1,h}var a=function(d,h){var g=0,f=1,p=1,b=0,A=0,y=0,I=1,E=1,v=0,w=1,M=1,j=1,Q=1e7,BB;if(d!=null)if(h!==void 0){if(g=d,f=h,p=g*f,g%1!==0||f%1!==0)throw m.NonIntegerParameter}else switch(typeof d){case"object":{if("d"in d&&"n"in d)g=d.n,f=d.d,"s"in d&&(g*=d.s);else if(0 in d)g=d[0],1 in d&&(f=d[1]);else throw m.InvalidParameter;p=g*f;break}case"number":{if(d<0&&(p=d,d=-d),d%1===0)g=d;else if(d>0){for(d>=1&&(E=Math.pow(10,Math.floor(1+Math.log(d)/Math.LN10)),d/=E);w<=Q&&j<=Q;)if(BB=(v+M)/(w+j),d===BB){w+j<=Q?(g=v+M,f=w+j):j>w?(g=M,f=j):(g=v,f=w);break}else d>BB?(v+=M,w+=j):(M+=v,j+=w),w>Q?(g=M,f=j):(g=v,f=w);g*=E}else(isNaN(d)||isNaN(h))&&(f=g=NaN);break}case"string":{if(w=d.match(/\d+|./g),w===null)throw m.InvalidParameter;if(w[v]==="-"?(p=-1,v++):w[v]==="+"&&v++,w.length===v+1?A=r(w[v++],p):w[v+1]==="."||w[v]==="."?(w[v]!=="."&&(b=r(w[v++],p)),v++,(v+1===w.length||w[v+1]==="("&&w[v+3]===")"||w[v+1]==="'"&&w[v+3]==="'")&&(A=r(w[v],p),I=Math.pow(10,w[v].length),v++),(w[v]==="("&&w[v+2]===")"||w[v]==="'"&&w[v+2]==="'")&&(y=r(w[v+1],p),E=Math.pow(10,w[v+1].length)-1,v+=3)):w[v+1]==="/"||w[v+1]===":"?(A=r(w[v],p),I=r(w[v+2],1),v+=3):w[v+3]==="/"&&w[v+1]===" "&&(b=r(w[v],p),A=r(w[v+2],p),I=r(w[v+4],1),v+=5),w.length<=v){f=I*E,p=g=y+f*b+E*A;break}}default:throw m.InvalidParameter}if(f===0)throw m.DivisionByZero;n.s=p<0?-1:1,n.n=Math.abs(g),n.d=Math.abs(f)};function o(d,h,g){for(var f=1;h>0;d=d*d%g,h>>=1)h&1&&(f=f*d%g);return f}function c(d,h){for(;h%2===0;h/=2);for(;h%5===0;h/=5);if(h===1)return 0;for(var g=10%h,f=1;g!==1;f++)if(g=g*10%h,f>t)return 0;return f}function l(d,h,g){for(var f=1,p=o(10,g,h),b=0;b<300;b++){if(f===p)return b;f=f*10%h,p=p*10%h}return 0}function u(d,h){if(!d)return h;if(!h)return d;for(;;){if(d%=h,!d)return h;if(h%=d,!h)return d}}function m(d,h){if(a(d,h),this instanceof m)d=u(n.d,n.n),this.s=n.s,this.n=n.n/d,this.d=n.d/d;else return i(n.s*n.n,n.d)}m.DivisionByZero=new Error("Division by Zero"),m.InvalidParameter=new Error("Invalid argument"),m.NonIntegerParameter=new Error("Parameters must be integer"),m.prototype={s:1,n:0,d:1,abs:function(){return i(this.n,this.d)},neg:function(){return i(-this.s*this.n,this.d)},add:function(d,h){return a(d,h),i(this.s*this.n*n.d+n.s*this.d*n.n,this.d*n.d)},sub:function(d,h){return a(d,h),i(this.s*this.n*n.d-n.s*this.d*n.n,this.d*n.d)},mul:function(d,h){return a(d,h),i(this.s*n.s*this.n*n.n,this.d*n.d)},div:function(d,h){return a(d,h),i(this.s*n.s*this.n*n.d,this.d*n.n)},clone:function(){return i(this.s*this.n,this.d)},mod:function(d,h){if(isNaN(this.n)||isNaN(this.d))return new m(NaN);if(d===void 0)return i(this.s*this.n%this.d,1);if(a(d,h),n.n===0&&this.d===0)throw m.DivisionByZero;return i(this.s*(n.d*this.n)%(n.n*this.d),n.d*this.d)},gcd:function(d,h){return a(d,h),i(u(n.n,this.n)*u(n.d,this.d),n.d*this.d)},lcm:function(d,h){return a(d,h),n.n===0&&this.n===0?i(0,1):i(n.n*this.n,u(n.n,this.n)*u(n.d,this.d))},ceil:function(d){return d=Math.pow(10,d||0),isNaN(this.n)||isNaN(this.d)?new m(NaN):i(Math.ceil(d*this.s*this.n/this.d),d)},floor:function(d){return d=Math.pow(10,d||0),isNaN(this.n)||isNaN(this.d)?new m(NaN):i(Math.floor(d*this.s*this.n/this.d),d)},round:function(d){return d=Math.pow(10,d||0),isNaN(this.n)||isNaN(this.d)?new m(NaN):i(Math.round(d*this.s*this.n/this.d),d)},inverse:function(){return i(this.s*this.d,this.n)},pow:function(d,h){if(a(d,h),n.d===1)return n.s<0?i(Math.pow(this.s*this.d,n.n),Math.pow(this.n,n.n)):i(Math.pow(this.s*this.n,n.n),Math.pow(this.d,n.n));if(this.s<0)return null;var g=s(this.n),f=s(this.d),p=1,b=1;for(var A in g)if(A!=="1"){if(A==="0"){p=0;break}if(g[A]*=n.n,g[A]%n.d===0)g[A]/=n.d;else return null;p*=Math.pow(A,g[A])}for(var A in f)if(A!=="1"){if(f[A]*=n.n,f[A]%n.d===0)f[A]/=n.d;else return null;b*=Math.pow(A,f[A])}return n.s<0?i(b,p):i(p,b)},equals:function(d,h){return a(d,h),this.s*this.n*n.d===n.s*n.n*this.d},compare:function(d,h){a(d,h);var g=this.s*this.n*n.d-n.s*n.n*this.d;return(0<g)-(g<0)},simplify:function(d){if(isNaN(this.n)||isNaN(this.d))return this;d=d||.001;for(var h=this.abs(),g=h.toContinued(),f=1;f<g.length;f++){for(var p=i(g[f-1],1),b=f-2;b>=0;b--)p=p.inverse().add(g[b]);if(p.sub(h).abs().valueOf()<d)return p.mul(this.s)}return this},divisible:function(d,h){return a(d,h),!(!(n.n*this.d)||this.n*n.d%(n.n*this.d))},valueOf:function(){return this.s*this.n/this.d},toFraction:function(d){var h,g="",f=this.n,p=this.d;return this.s<0&&(g+="-"),p===1?g+=f:(d&&(h=Math.floor(f/p))>0&&(g+=h,g+=" ",f%=p),g+=f,g+="/",g+=p),g},toLatex:function(d){var h,g="",f=this.n,p=this.d;return this.s<0&&(g+="-"),p===1?g+=f:(d&&(h=Math.floor(f/p))>0&&(g+=h,f%=p),g+="\\frac{",g+=f,g+="}{",g+=p,g+="}"),g},toContinued:function(){var d,h=this.n,g=this.d,f=[];if(isNaN(h)||isNaN(g))return f;do f.push(Math.floor(h/g)),d=h%g,h=g,g=d;while(h!==1);return f},toString:function(d){var h=this.n,g=this.d;if(isNaN(h)||isNaN(g))return"NaN";d=d||15;var f=c(h,g),p=l(h,g,f),b=this.s<0?"-":"";if(b+=h/g|0,h%=g,h*=10,h&&(b+="."),f){for(var A=p;A--;)b+=h/g|0,h%=g,h*=10;b+="(";for(var A=f;A--;)b+=h/g|0,h%=g,h*=10;b+=")"}else for(var A=d;h&&A--;)b+=h/g|0,h%=g,h*=10;return b}},Object.defineProperty(m,"__esModule",{value:!0}),m.default=m,m.Fraction=m,e.exports=m})()})(ij);var gu="(".charCodeAt(0),bu=")".charCodeAt(0),Ea="'".charCodeAt(0),Au='"'.charCodeAt(0),vu="\\".charCodeAt(0),Dn="/".charCodeAt(0),yu=",".charCodeAt(0),Eu=":".charCodeAt(0),Ia="*".charCodeAt(0),sj="u".charCodeAt(0),aj="U".charCodeAt(0),oj="+".charCodeAt(0),lj=/^[a-f0-9?-]+$/i,cj=function(e){for(var B=[],C=e,t,n,r,i,s,a,o,c,l=0,u=C.charCodeAt(l),m=C.length,d=[{nodes:B}],h=0,g,f="",p="",b="";l<m;)if(u<=32){t=l;do t+=1,u=C.charCodeAt(t);while(u<=32);i=C.slice(l,t),r=B[B.length-1],u===bu&&h?b=i:r&&r.type==="div"?(r.after=i,r.sourceEndIndex+=i.length):u===yu||u===Eu||u===Dn&&C.charCodeAt(t+1)!==Ia&&(!g||g&&g.type==="function"&&g.value!=="calc")?p=i:B.push({type:"space",sourceIndex:l,sourceEndIndex:t,value:i}),l=t}else if(u===Ea||u===Au){t=l,n=u===Ea?"'":'"',i={type:"string",sourceIndex:l,quote:n};do if(s=!1,t=C.indexOf(n,t+1),~t)for(a=t;C.charCodeAt(a-1)===vu;)a-=1,s=!s;else C+=n,t=C.length-1,i.unclosed=!0;while(s);i.value=C.slice(l+1,t),i.sourceEndIndex=i.unclosed?t:t+1,B.push(i),l=t+1,u=C.charCodeAt(l)}else if(u===Dn&&C.charCodeAt(l+1)===Ia)t=C.indexOf("*/",l),i={type:"comment",sourceIndex:l,sourceEndIndex:t+2},t===-1&&(i.unclosed=!0,t=C.length,i.sourceEndIndex=t),i.value=C.slice(l+2,t),B.push(i),l=t+2,u=C.charCodeAt(l);else if((u===Dn||u===Ia)&&g&&g.type==="function"&&g.value==="calc")i=C[l],B.push({type:"word",sourceIndex:l-p.length,sourceEndIndex:l+i.length,value:i}),l+=1,u=C.charCodeAt(l);else if(u===Dn||u===yu||u===Eu)i=C[l],B.push({type:"div",sourceIndex:l-p.length,sourceEndIndex:l+i.length,value:i,before:p,after:""}),p="",l+=1,u=C.charCodeAt(l);else if(gu===u){t=l;do t+=1,u=C.charCodeAt(t);while(u<=32);if(c=l,i={type:"function",sourceIndex:l-f.length,value:f,before:C.slice(c+1,t)},l=t,f==="url"&&u!==Ea&&u!==Au){t-=1;do if(s=!1,t=C.indexOf(")",t+1),~t)for(a=t;C.charCodeAt(a-1)===vu;)a-=1,s=!s;else C+=")",t=C.length-1,i.unclosed=!0;while(s);o=t;do o-=1,u=C.charCodeAt(o);while(u<=32);c<o?(l!==o+1?i.nodes=[{type:"word",sourceIndex:l,sourceEndIndex:o+1,value:C.slice(l,o+1)}]:i.nodes=[],i.unclosed&&o+1!==t?(i.after="",i.nodes.push({type:"space",sourceIndex:o+1,sourceEndIndex:t,value:C.slice(o+1,t)})):(i.after=C.slice(o+1,t),i.sourceEndIndex=t)):(i.after="",i.nodes=[]),l=t+1,i.sourceEndIndex=i.unclosed?t:l,u=C.charCodeAt(l),B.push(i)}else h+=1,i.after="",i.sourceEndIndex=l+1,B.push(i),d.push(i),B=i.nodes=[],g=i;f=""}else if(bu===u&&h)l+=1,u=C.charCodeAt(l),g.after=b,g.sourceEndIndex+=b.length,b="",h-=1,d[d.length-1].sourceEndIndex=l,d.pop(),g=d[h],B=g.nodes;else{t=l;do u===vu&&(t+=1),t+=1,u=C.charCodeAt(t);while(t<m&&!(u<=32||u===Ea||u===Au||u===yu||u===Eu||u===Dn||u===gu||u===Ia&&g&&g.type==="function"&&g.value==="calc"||u===Dn&&g.type==="function"&&g.value==="calc"||u===bu&&h));i=C.slice(l,t),gu===u?f=i:(sj===i.charCodeAt(0)||aj===i.charCodeAt(0))&&oj===i.charCodeAt(1)&&lj.test(i.slice(2))?B.push({type:"unicode-range",sourceIndex:l,sourceEndIndex:t,value:i}):B.push({type:"word",sourceIndex:l,sourceEndIndex:t,value:i}),l=t}for(l=d.length-1;l;l-=1)d[l].unclosed=!0,d[l].sourceEndIndex=C.length;return d[0].nodes},uj=function e(B,C,t){var n,r,i,s;for(n=0,r=B.length;n<r;n+=1)i=B[n],t||(s=C(i,n,B)),s!==!1&&i.type==="function"&&Array.isArray(i.nodes)&&e(i.nodes,C,t),t&&C(i,n,B)};function F0(e,B){var C=e.type,t=e.value,n,r;return B&&(r=B(e))!==void 0?r:C==="word"||C==="space"?t:C==="string"?(n=e.quote||"",n+t+(e.unclosed?"":n)):C==="comment"?"/*"+t+(e.unclosed?"":"*/"):C==="div"?(e.before||"")+t+(e.after||""):Array.isArray(e.nodes)?(n=ZS(e.nodes,B),C!=="function"?n:t+"("+(e.before||"")+n+(e.after||"")+(e.unclosed?"":")")):t}function ZS(e,B){var C,t;if(Array.isArray(e)){for(C="",t=e.length-1;~t;t-=1)C=F0(e[t],B)+C;return C}return F0(e,B)}var dj=ZS,Iu,N0;function fj(){if(N0)return Iu;N0=1;var e="-".charCodeAt(0),B="+".charCodeAt(0),C=".".charCodeAt(0),t="e".charCodeAt(0),n="E".charCodeAt(0);function r(i){var s=i.charCodeAt(0),a;if(s===B||s===e){if(a=i.charCodeAt(1),a>=48&&a<=57)return!0;var o=i.charCodeAt(2);return a===C&&o>=48&&o<=57}return s===C?(a=i.charCodeAt(1),a>=48&&a<=57):s>=48&&s<=57}return Iu=function(i){var s=0,a=i.length,o,c,l;if(a===0||!r(i))return!1;for(o=i.charCodeAt(s),(o===B||o===e)&&s++;s<a&&(o=i.charCodeAt(s),!(o<48||o>57));)s+=1;if(o=i.charCodeAt(s),c=i.charCodeAt(s+1),o===C&&c>=48&&c<=57)for(s+=2;s<a&&(o=i.charCodeAt(s),!(o<48||o>57));)s+=1;if(o=i.charCodeAt(s),c=i.charCodeAt(s+1),l=i.charCodeAt(s+2),(o===t||o===n)&&(c>=48&&c<=57||(c===B||c===e)&&l>=48&&l<=57))for(s+=c===B||c===e?3:2;s<a&&(o=i.charCodeAt(s),!(o<48||o>57));)s+=1;return{number:i.slice(0,s),unit:i.slice(s)}},Iu}var hj=cj,qS=uj,zS=dj;function kt(e){return this instanceof kt?(this.nodes=hj(e),this):new kt(e)}kt.prototype.toString=function(){return Array.isArray(this.nodes)?zS(this.nodes):""};kt.prototype.walk=function(e,B){return qS(this.nodes,e,B),this};kt.unit=fj();kt.walk=qS;kt.stringify=zS;var jh=kt;let pj=gB,mj=class{constructor(e,B,C,t){this.unprefixed=e,this.prefixed=B,this.string=C||B,this.regexp=t||pj.regexp(B)}check(e){return e.includes(this.string)?!!e.match(this.regexp):!1}};var ks=mj;let gj=Wh,bj=ks,Aj=YS,vj=gB,yj=class extends gj{static save(e,B){let C=B.prop,t=[];for(let n in B._autoprefixerValues){let r=B._autoprefixerValues[n];if(r===B.value)continue;let i,s=Aj.prefix(C);if(s==="-pie-")continue;if(s===n){i=B.value=r,t.push(i);continue}let a=e.prefixed(C,n),o=B.parent;if(!o.every(u=>u.prop!==a)){t.push(i);continue}let c=r.replace(/\s+/," ");if(o.some(u=>u.prop===B.prop&&u.value.replace(/\s+/," ")===c)){t.push(i);continue}let l=this.clone(B,{value:r});i=B.parent.insertBefore(B,l),t.push(i)}return t}check(e){let B=e.value;return B.includes(this.name)?!!B.match(this.regexp()):!1}regexp(){return this.regexpCache||(this.regexpCache=vj.regexp(this.name))}replace(e,B){return e.replace(this.regexp(),`$1${B}$2`)}value(e){return e.raws.value&&e.raws.value.value===e.value?e.raws.value.raw:e.value}add(e,B){e._autoprefixerValues||(e._autoprefixerValues={});let C=e._autoprefixerValues[B]||this.value(e),t;do if(t=C,C=this.replace(C,B),C===!1)return;while(C!==t);e._autoprefixerValues[B]=C}old(e){return new bj(this.name,e+this.name)}};var yC=yj,wB={};let we=jh,br=Ds.list,O0=gB.uniq,Ej=gB.escapeRegexp,vd=gB.splitSelector;function R0(e){return e&&e.length===2&&e[0]==="span"&&parseInt(e[1],10)>0?[!1,parseInt(e[1],10)]:e&&e.length===1&&parseInt(e[0],10)>0?[parseInt(e[0],10),!1]:[!1,!1]}wB.translate=Ij;function Ij(e,B,C){let t=e[B],n=e[C];if(!t)return[!1,!1];let[r,i]=R0(t),[s,a]=R0(n);return r&&!n?[r,!1]:i&&s?[s-i,i]:r&&a?[r,a]:r&&s?[r,s-r]:[!1,!1]}wB.parse=Sj;function Sj(e){let B=we(e.value),C=[],t=0;C[t]=[];for(let n of B.nodes)n.type==="div"?(t+=1,C[t]=[]):n.type==="word"&&C[t].push(n.value);return C}wB.insertDecl=wj;function wj(e,B,C){C&&!e.parent.some(t=>t.prop===`-ms-${B}`)&&e.cloneBefore({prop:`-ms-${B}`,value:C.toString()})}wB.prefixTrackProp=Dj;function Dj({prop:e,prefix:B}){return B+e.replace("template-","")}function kj({nodes:e},{gap:B}){let{count:C,size:t}=e.reduce((n,r)=>(r.type==="div"&&r.value===","?n.key="size":n[n.key].push(we.stringify(r)),n),{key:"count",size:[],count:[]});if(B){t=t.filter(r=>r.trim());let n=[];for(let r=1;r<=C;r++)t.forEach((i,s)=>{(s>0||r>1)&&n.push(B),n.push(i)});return n.join(" ")}return`(${t.join("")})[${C.join("")}]`}wB.prefixTrackValue=yd;function yd({value:e,gap:B}){let C=we(e).nodes.reduce((t,n)=>n.type==="function"&&n.value==="repeat"?t.concat({type:"word",value:kj(n,{gap:B})}):B&&n.type==="space"?t.concat({type:"space",value:" "},{type:"word",value:B},n):t.concat(n),[]);return we.stringify(C)}let Pj=/^\.+$/;function H0(e,B){return{start:e,end:B,span:B-e}}function Fj(e){return e.trim().split(/\s+/g)}wB.parseGridAreas=Yh;function Yh({rows:e,gap:B}){return e.reduce((C,t,n)=>(B.row&&(n*=2),t.trim()===""||Fj(t).forEach((r,i)=>{if(!Pj.test(r))if(B.column&&(i*=2),typeof C[r]>"u")C[r]={column:H0(i+1,i+2),row:H0(n+1,n+2)};else{let{column:s,row:a}=C[r];s.start=Math.min(s.start,i+1),s.end=Math.max(s.end,i+2),s.span=s.end-s.start,a.start=Math.min(a.start,n+1),a.end=Math.max(a.end,n+2),a.span=a.end-a.start}}),C),{})}function Nj(e){return e.type==="word"&&/^\[.+]$/.test(e.value)}function M0(e){return e.areas.length>e.rows.length&&e.rows.push("auto"),e}wB.parseTemplate=Xh;function Xh({decl:e,gap:B}){let C=we(e.value).nodes.reduce((t,n)=>{let{type:r,value:i}=n;return Nj(n)||r==="space"||(r==="string"&&(t=M0(t),t.areas.push(i)),(r==="word"||r==="function")&&t[t.key].push(we.stringify(n)),r==="div"&&i==="/"&&(t.key="columns",t=M0(t))),t},{key:"rows",columns:[],rows:[],areas:[]});return{areas:Yh({rows:C.areas,gap:B}),columns:yd({value:C.columns.join(" "),gap:B.column}),rows:yd({value:C.rows.join(" "),gap:B.row})}}function Sa(e,B=!1,C=!1){let t=[{prop:"-ms-grid-row",value:String(e.row.start)}];return(e.row.span>1||B)&&t.push({prop:"-ms-grid-row-span",value:String(e.row.span)}),t.push({prop:"-ms-grid-column",value:String(e.column.start)}),(e.column.span>1||C)&&t.push({prop:"-ms-grid-column-span",value:String(e.column.span)}),t}function Cs(e){return e.type==="atrule"&&e.name==="media"?e:e.parent?Cs(e.parent):!1}function L0(e,B){return e=e.map(C=>{let t=br.space(C),n=br.comma(C);return t.length>n.length&&(C=t.slice(-1).join("")),C}),e.map(C=>B.map((t,n)=>`${n===0?"":" "}${t} > ${C}`))}function T0(e,B){return e.selectors.some(C=>B.selectors.includes(C))}function Oj(e){let B=[];return e.walkDecls(/grid-template(-areas)?$/,C=>{let t=C.parent,n=Cs(t),r=nc(C),i=_S(C,r),{areas:s}=Xh({decl:C,gap:i||r}),a=Object.keys(s);if(a.length===0)return!0;let o=B.reduce((c,{allAreas:l},u)=>l&&a.some(m=>l.includes(m))?u:c,null);if(o!==null){let{allAreas:c,rules:l}=B[o],u=l.some(h=>h.hasDuplicates===!1&&T0(h,t)),m=!1,d=l.reduce((h,g)=>!g.params&&T0(g,t)?(m=!0,g.duplicateAreaNames):(m||a.forEach(f=>{g.areas[f]&&h.push(f)}),O0(h)),[]);l.forEach(h=>{a.forEach(g=>{let f=h.areas[g];f&&f.row.span!==s[g].row.span&&(s[g].row.updateSpan=!0),f&&f.column.span!==s[g].column.span&&(s[g].column.updateSpan=!0)})}),B[o].allAreas=O0([...c,...a]),B[o].rules.push({hasDuplicates:!u,params:n.params,selectors:t.selectors,node:t,duplicateAreaNames:d,areas:s})}else B.push({allAreas:a,areasCount:0,rules:[{hasDuplicates:!1,duplicateRules:[],params:n.params,selectors:t.selectors,node:t,duplicateAreaNames:[],areas:s}]})}),B}wB.insertAreas=Rj;function Rj(e,B){let C=Oj(e);if(C.length===0)return;let t={};e.walkDecls("grid-area",n=>{let r=n.parent,i=r.first.prop==="-ms-grid-row",s=Cs(r);if(B(n))return;let a=e.index(s||r),o=n.value,c=C.filter(g=>g.allAreas.includes(o))[0];if(!c)return!0;let l=c.allAreas[c.allAreas.length-1],u=br.space(r.selector),m=br.comma(r.selector),d=u.length>1&&u.length>m.length;if(i)return!1;t[l]||(t[l]={});let h=!1;for(let g of c.rules){let f=g.areas[o],p=g.duplicateAreaNames.includes(o);if(!f){let b=t[l].lastRule,A;b?A=e.index(b):A=-1,a>A&&(t[l].lastRule=s||r);continue}if(g.params&&!t[l][g.params]&&(t[l][g.params]=[]),(!g.hasDuplicates||!p)&&!g.params)Sa(f,!1,!1).reverse().forEach(b=>r.prepend(Object.assign(b,{raws:{between:n.raws.between}}))),t[l].lastRule=r,h=!0;else if(g.hasDuplicates&&!g.params&&!d){let b=r.clone();b.removeAll(),Sa(f,f.row.updateSpan,f.column.updateSpan).reverse().forEach(A=>b.prepend(Object.assign(A,{raws:{between:n.raws.between}}))),b.selectors=L0(b.selectors,g.selectors),t[l].lastRule&&t[l].lastRule.after(b),t[l].lastRule=b,h=!0}else if(g.hasDuplicates&&!g.params&&d&&r.selector.includes(g.selectors[0]))r.walkDecls(/-ms-grid-(row|column)/,b=>b.remove()),Sa(f,f.row.updateSpan,f.column.updateSpan).reverse().forEach(b=>r.prepend(Object.assign(b,{raws:{between:n.raws.between}})));else if(g.params){let b=r.clone();b.removeAll(),Sa(f,f.row.updateSpan,f.column.updateSpan).reverse().forEach(A=>b.prepend(Object.assign(A,{raws:{between:n.raws.between}}))),g.hasDuplicates&&p&&(b.selectors=L0(b.selectors,g.selectors)),b.raws=g.node.raws,e.index(g.node.parent)>a?g.node.parent.append(b):t[l][g.params].push(b),h||(t[l].lastRule=s||r)}}}),Object.keys(t).forEach(n=>{let r=t[n],i=r.lastRule;Object.keys(r).reverse().filter(s=>s!=="lastRule").forEach(s=>{r[s].length>0&&i&&(i.after({name:"media",params:s}),i.next().append(r[s]))})})}wB.warnMissedAreas=Hj;function Hj(e,B,C){let t=Object.keys(e);B.root().walkDecls("grid-area",n=>{t=t.filter(r=>r!==n.value)}),t.length>0&&B.warn(C,"Can not find grid areas: "+t.join(", "))}wB.warnTemplateSelectorNotFound=Mj;function Mj(e,B){let C=e.parent,t=e.root(),n=!1,r=br.space(C.selector).filter(i=>i!==">").slice(0,-1);if(r.length>0){let i=!1,s=null;t.walkDecls(/grid-template(-areas)?$/,a=>{let o=a.parent,c=o.selectors,{areas:l}=Xh({decl:a,gap:nc(a)}),u=l[e.value];for(let m of c){if(i)break;i=br.space(m).filter(d=>d!==">").every((d,h)=>d===r[h])}if(i||!u)return!0;s||(s=o.selector),s&&s!==o.selector&&(n=!0)}),!i&&n&&e.warn(B,`Autoprefixer cannot find a grid-template containing the duplicate grid-area "${e.value}" with full selector matching: ${r.join(" ")}`)}}wB.warnIfGridRowColumnExists=Lj;function Lj(e,B){let C=e.parent,t=[];C.walkDecls(/^grid-(row|column)/,n=>{!n.prop.endsWith("-end")&&!n.value.startsWith("span")&&!n.prop.endsWith("-gap")&&t.push(n)}),t.length>0&&t.forEach(n=>{n.warn(B,`You already have a grid-area declaration present in the rule. You should use either grid-area or ${n.prop}, not both`)})}wB.getGridGap=nc;function nc(e){let B={},C=/^(grid-)?((row|column)-)?gap$/;return e.parent.walkDecls(C,({prop:t,value:n})=>{if(/^(grid-)?gap$/.test(t)){let[r,,i]=we(n).nodes;B.row=r&&we.stringify(r),B.column=i?we.stringify(i):B.row}/^(grid-)?row-gap$/.test(t)&&(B.row=n),/^(grid-)?column-gap$/.test(t)&&(B.column=n)}),B}function G0(e){if(!e)return[];let B=we(e),C,t;return B.walk(n=>{n.type==="word"&&/min|max/g.test(n.value)?C=n.value:n.value.includes("px")&&(t=parseInt(n.value.replace(/\D/g,"")))}),[C,t]}function Tj(e,B){let C,t=vd(e),n=vd(B);if(t[0].length<n[0].length)return!1;if(t[0].length>n[0].length){let r=t[0].reduce((i,[s],a)=>{let o=n[0][0][0];return s===o?a:!1},!1);r&&(C=n[0].every((i,s)=>i.every((a,o)=>t[0].slice(r)[s][o]===a)))}else C=n.some(r=>r.every((i,s)=>i.every((a,o)=>t[0][s][o]===a)));return C}wB.inheritGridGap=_S;function _S(e,B){let C=e.parent,t=Cs(C),n=C.root(),r=vd(C.selector);if(Object.keys(B).length>0)return!1;let[i]=G0(t.params),s=r[0],a=Ej(s[s.length-1][0]),o=new RegExp(`(${a}$)|(${a}[,.])`),c;return n.walkRules(o,l=>{let u;if(C.toString()===l.toString())return!1;if(l.walkDecls("grid-gap",d=>u=nc(d)),!u||Object.keys(u).length===0||!Tj(C.selector,l.selector))return!0;let m=Cs(l);if(m){if(G0(m.params)[0]===i)return c=u,!0}else return c=u,!0}),c&&Object.keys(c).length>0?c:!1}wB.warnGridGap=Gj;function Gj({gap:e,hasColumns:B,decl:C,result:t}){let n=e.row&&e.column;!B&&(n||e.column&&!e.row)&&(delete e.column,C.warn(t,"Can not implement grid-gap without grid-template-columns"))}function x0(e){return we(e).nodes.reduce((B,C)=>{if(C.type==="function"&&C.value==="repeat"){let t="count",[n,r]=C.nodes.reduce((i,s)=>s.type==="word"&&t==="count"?(i[0]=Math.abs(parseInt(s.value)),i):s.type==="div"&&s.value===","?(t="value",i):(t==="value"&&(i[1]+=we.stringify(s)),i),[0,""]);if(n)for(let i=0;i<n;i++)B.push(r);return B}return C.type==="space"?B:B.concat(we.stringify(C))},[])}wB.autoplaceGridItems=xj;function xj(e,B,C,t="row"){let{parent:n}=e,r=n.nodes.find(u=>u.prop==="grid-template-rows"),i=x0(r.value),s=x0(e.value),a=i.map((u,m)=>Array.from({length:s.length},(d,h)=>h+m*s.length+1).join(" ")),o=Yh({rows:a,gap:C}),c=Object.keys(o),l=c.map(u=>o[u]);t.includes("column")&&(l=l.sort((u,m)=>u.column.start-m.column.start)),l.reverse().forEach((u,m)=>{let{column:d,row:h}=u,g=n.selectors.map(p=>p+` > *:nth-child(${c.length-m})`).join(", "),f=n.clone().removeAll();f.selector=g,f.append({prop:"-ms-grid-row",value:h.start}),f.append({prop:"-ms-grid-column",value:d.start}),n.after(f)})}let K0=jh,Kj=yC,Qj=wB.insertAreas;const Jj=/(^|[^-])linear-gradient\(\s*(top|left|right|bottom)/i,Uj=/(^|[^-])radial-gradient\(\s*\d+(\w*|%)\s+\d+(\w*|%)\s*,/i,Vj=/(!\s*)?autoprefixer:\s*ignore\s+next/i,Wj=/(!\s*)?autoprefixer\s*grid:\s*(on|off|(no-)?autoplace)/i,jj=["width","height","min-width","max-width","min-height","max-height","inline-size","min-inline-size","max-inline-size","block-size","min-block-size","max-block-size"];function Su(e){return e.parent.some(B=>B.prop==="grid-template"||B.prop==="grid-template-areas")}function Yj(e){let B=e.parent.some(t=>t.prop==="grid-template-rows"),C=e.parent.some(t=>t.prop==="grid-template-columns");return B&&C}let Xj=class{constructor(e){this.prefixes=e}add(e,B){let C=this.prefixes.add["@resolution"],t=this.prefixes.add["@keyframes"],n=this.prefixes.add["@viewport"],r=this.prefixes.add["@supports"];e.walkAtRules(o=>{if(o.name==="keyframes"){if(!this.disabled(o,B))return t&&t.process(o)}else if(o.name==="viewport"){if(!this.disabled(o,B))return n&&n.process(o)}else if(o.name==="supports"){if(this.prefixes.options.supports!==!1&&!this.disabled(o,B))return r.process(o)}else if(o.name==="media"&&o.params.includes("-resolution")&&!this.disabled(o,B))return C&&C.process(o)}),e.walkRules(o=>{if(!this.disabled(o,B))return this.prefixes.add.selectors.map(c=>c.process(o,B))});function i(o){return o.parent.nodes.some(c=>{if(c.type!=="decl")return!1;let l=c.prop==="display"&&/(inline-)?grid/.test(c.value),u=c.prop.startsWith("grid-template"),m=/^grid-([A-z]+-)?gap/.test(c.prop);return l||u||m})}function s(o){return o.parent.some(c=>c.prop==="display"&&/(inline-)?flex/.test(c.value))}let a=this.gridStatus(e,B)&&this.prefixes.add["grid-area"]&&this.prefixes.add["grid-area"].prefixes;return e.walkDecls(o=>{if(this.disabledDecl(o,B))return;let c=o.parent,l=o.prop,u=o.value;if(l==="color-adjust")c.every(d=>d.prop!=="print-color-adjust")&&B.warn("Replace color-adjust to print-color-adjust. The color-adjust shorthand is currently deprecated.",{node:o});else if(l==="grid-row-span"){B.warn("grid-row-span is not part of final Grid Layout. Use grid-row.",{node:o});return}else if(l==="grid-column-span"){B.warn("grid-column-span is not part of final Grid Layout. Use grid-column.",{node:o});return}else if(l==="display"&&u==="box"){B.warn("You should write display: flex by final spec instead of display: box",{node:o});return}else if(l==="text-emphasis-position")(u==="under"||u==="over")&&B.warn("You should use 2 values for text-emphasis-position For example, `under left` instead of just `under`.",{node:o});else if(/^(align|justify|place)-(items|content)$/.test(l)&&s(o))(u==="start"||u==="end")&&B.warn(`${u} value has mixed support, consider using flex-${u} instead`,{node:o});else if(l==="text-decoration-skip"&&u==="ink")B.warn("Replace text-decoration-skip: ink to text-decoration-skip-ink: auto, because spec had been changed",{node:o});else{if(a&&this.gridStatus(o,B))if(o.value==="subgrid"&&B.warn("IE does not support subgrid",{node:o}),/^(align|justify|place)-items$/.test(l)&&i(o)){let d=l.replace("-items","-self");B.warn(`IE does not support ${l} on grid containers. Try using ${d} on child elements instead: ${o.parent.selector} > * { ${d}: ${o.value} }`,{node:o})}else if(/^(align|justify|place)-content$/.test(l)&&i(o))B.warn(`IE does not support ${o.prop} on grid containers`,{node:o});else if(l==="display"&&o.value==="contents"){B.warn("Please do not use display: contents; if you have grid setting enabled",{node:o});return}else if(o.prop==="grid-gap"){let d=this.gridStatus(o,B);d==="autoplace"&&!Yj(o)&&!Su(o)?B.warn("grid-gap only works if grid-template(-areas) is being used or both rows and columns have been declared and cells have not been manually placed inside the explicit grid",{node:o}):(d===!0||d==="no-autoplace")&&!Su(o)&&B.warn("grid-gap only works if grid-template(-areas) is being used",{node:o})}else if(l==="grid-auto-columns"){B.warn("grid-auto-columns is not supported by IE",{node:o});return}else if(l==="grid-auto-rows"){B.warn("grid-auto-rows is not supported by IE",{node:o});return}else if(l==="grid-auto-flow"){let d=c.some(g=>g.prop==="grid-template-rows"),h=c.some(g=>g.prop==="grid-template-columns");Su(o)?B.warn("grid-auto-flow is not supported by IE",{node:o}):u.includes("dense")?B.warn("grid-auto-flow: dense is not supported by IE",{node:o}):!d&&!h&&B.warn("grid-auto-flow works only if grid-template-rows and grid-template-columns are present in the same rule",{node:o});return}else if(u.includes("auto-fit")){B.warn("auto-fit value is not supported by IE",{node:o,word:"auto-fit"});return}else if(u.includes("auto-fill")){B.warn("auto-fill value is not supported by IE",{node:o,word:"auto-fill"});return}else l.startsWith("grid-template")&&u.includes("[")&&B.warn("Autoprefixer currently does not support line names. Try using grid-template-areas instead.",{node:o,word:"["});if(u.includes("radial-gradient"))if(Uj.test(o.value))B.warn("Gradient has outdated direction syntax. New syntax is like `closest-side at 0 0` instead of `0 0, closest-side`.",{node:o});else{let d=K0(u);for(let h of d.nodes)if(h.type==="function"&&h.value==="radial-gradient")for(let g of h.nodes)g.type==="word"&&(g.value==="cover"?B.warn("Gradient has outdated direction syntax. Replace `cover` to `farthest-corner`.",{node:o}):g.value==="contain"&&B.warn("Gradient has outdated direction syntax. Replace `contain` to `closest-side`.",{node:o}))}u.includes("linear-gradient")&&Jj.test(u)&&B.warn("Gradient has outdated direction syntax. New syntax is like `to left` instead of `right`.",{node:o})}jj.includes(o.prop)&&(o.value.includes("-fill-available")||(o.value.includes("fill-available")?B.warn("Replace fill-available to stretch, because spec had been changed",{node:o}):o.value.includes("fill")&&K0(u).nodes.some(d=>d.type==="word"&&d.value==="fill")&&B.warn("Replace fill to stretch, because spec had been changed",{node:o})));let m;if(o.prop==="transition"||o.prop==="transition-property")return this.prefixes.transition.add(o,B);if(o.prop==="align-self"){if(this.displayType(o)!=="grid"&&this.prefixes.options.flexbox!==!1&&(m=this.prefixes.add["align-self"],m&&m.prefixes&&m.process(o)),this.gridStatus(o,B)!==!1&&(m=this.prefixes.add["grid-row-align"],m&&m.prefixes))return m.process(o,B)}else if(o.prop==="justify-self"){if(this.gridStatus(o,B)!==!1&&(m=this.prefixes.add["grid-column-align"],m&&m.prefixes))return m.process(o,B)}else if(o.prop==="place-self"){if(m=this.prefixes.add["place-self"],m&&m.prefixes&&this.gridStatus(o,B)!==!1)return m.process(o,B)}else if(m=this.prefixes.add[o.prop],m&&m.prefixes)return m.process(o,B)}),this.gridStatus(e,B)&&Qj(e,this.disabled),e.walkDecls(o=>{if(this.disabledValue(o,B))return;let c=this.prefixes.unprefixed(o.prop),l=this.prefixes.values("add",c);if(Array.isArray(l))for(let u of l)u.process&&u.process(o,B);Kj.save(this.prefixes,o)})}remove(e,B){let C=this.prefixes.remove["@resolution"];e.walkAtRules((t,n)=>{this.prefixes.remove[`@${t.name}`]?this.disabled(t,B)||t.parent.removeChild(n):t.name==="media"&&t.params.includes("-resolution")&&C&&C.clean(t)});for(let t of this.prefixes.remove.selectors)e.walkRules((n,r)=>{t.check(n)&&(this.disabled(n,B)||n.parent.removeChild(r))});return e.walkDecls((t,n)=>{if(this.disabled(t,B))return;let r=t.parent,i=this.prefixes.unprefixed(t.prop);if((t.prop==="transition"||t.prop==="transition-property")&&this.prefixes.transition.remove(t),this.prefixes.remove[t.prop]&&this.prefixes.remove[t.prop].remove){let s=this.prefixes.group(t).down(a=>this.prefixes.normalize(a.prop)===i);if(i==="flex-flow"&&(s=!0),t.prop==="-webkit-box-orient"){let a={"flex-direction":!0,"flex-flow":!0};if(!t.parent.some(o=>a[o.prop]))return}if(s&&!this.withHackValue(t)){t.raw("before").includes(`
`)&&this.reduceSpaces(t),r.removeChild(n);return}}for(let s of this.prefixes.values("remove",i))if(!(!s.check||!s.check(t.value))&&(i=s.unprefixed,this.prefixes.group(t).down(a=>a.value.includes(i)))){r.removeChild(n);return}})}withHackValue(e){return e.prop==="-webkit-background-clip"&&e.value==="text"}disabledValue(e,B){return this.gridStatus(e,B)===!1&&e.type==="decl"&&e.prop==="display"&&e.value.includes("grid")||this.prefixes.options.flexbox===!1&&e.type==="decl"&&e.prop==="display"&&e.value.includes("flex")||e.type==="decl"&&e.prop==="content"?!0:this.disabled(e,B)}disabledDecl(e,B){if(this.gridStatus(e,B)===!1&&e.type==="decl"&&(e.prop.includes("grid")||e.prop==="justify-items"))return!0;if(this.prefixes.options.flexbox===!1&&e.type==="decl"){let C=["order","justify-content","align-items","align-content"];if(e.prop.includes("flex")||C.includes(e.prop))return!0}return this.disabled(e,B)}disabled(e,B){if(!e)return!1;if(e._autoprefixerDisabled!==void 0)return e._autoprefixerDisabled;if(e.parent){let t=e.prev();if(t&&t.type==="comment"&&Vj.test(t.text))return e._autoprefixerDisabled=!0,e._autoprefixerSelfDisabled=!0,!0}let C=null;if(e.nodes){let t;e.each(n=>{n.type==="comment"&&/(!\s*)?autoprefixer:\s*(off|on)/i.test(n.text)&&(typeof t<"u"?B.warn("Second Autoprefixer control comment was ignored. Autoprefixer applies control comment to whole block, not to next rules.",{node:n}):t=/on/i.test(n.text))}),t!==void 0&&(C=!t)}if(!e.nodes||C===null)if(e.parent){let t=this.disabled(e.parent,B);e.parent._autoprefixerSelfDisabled===!0?C=!1:C=t}else C=!1;return e._autoprefixerDisabled=C,C}reduceSpaces(e){let B=!1;if(this.prefixes.group(e).up(()=>(B=!0,!0)),B)return;let C=e.raw("before").split(`
`),t=C[C.length-1].length,n=!1;this.prefixes.group(e).down(r=>{C=r.raw("before").split(`
`);let i=C.length-1;C[i].length>t&&(n===!1&&(n=C[i].length-t),C[i]=C[i].slice(0,-n),r.raws.before=C.join(`
`))})}displayType(e){for(let B of e.parent.nodes)if(B.prop==="display"){if(B.value.includes("flex"))return"flex";if(B.value.includes("grid"))return"grid"}return!1}gridStatus(e,B){if(!e)return!1;if(e._autoprefixerGridStatus!==void 0)return e._autoprefixerGridStatus;let C=null;if(e.nodes){let t;e.each(n=>{if(n.type==="comment"&&Wj.test(n.text)){let r=/:\s*autoplace/i.test(n.text),i=/no-autoplace/i.test(n.text);typeof t<"u"?B.warn("Second Autoprefixer grid control comment was ignored. Autoprefixer applies control comments to the whole block, not to the next rules.",{node:n}):r?t="autoplace":i?t=!0:t=/on/i.test(n.text)}}),t!==void 0&&(C=t)}if(e.type==="atrule"&&e.name==="supports"){let t=e.params;t.includes("grid")&&t.includes("auto")&&(C=!1)}if(!e.nodes||C===null)if(e.parent){let t=this.gridStatus(e.parent,B);e.parent._autoprefixerSelfDisabled===!0?C=!1:C=t}else typeof this.prefixes.options.grid<"u"?C=this.prefixes.options.grid:typeof{}.AUTOPREFIXER_GRID<"u"?{}.AUTOPREFIXER_GRID==="autoplace"?C="autoplace":C=!0:C=!1;return e._autoprefixerGridStatus=C,C}};var Zj=Xj;let qj=fI,{feature:zj}=yn,Q0=zj(qj);for(let e in Q0.stats){let B=Q0.stats[e];for(let C in B)B[C]}let _j=class{constructor(e,B){this.prefix=B,this.prefixed=e.prefixed(this.prefix),this.regexp=e.regexp(this.prefix),this.prefixeds=e.possible().map(C=>[e.prefixed(C),e.regexp(C)]),this.unprefixed=e.name,this.nameRegexp=e.regexp()}isHack(e){let B=e.parent.index(e)+1,C=e.parent.nodes;for(;B<C.length;){let t=C[B].selector;if(!t)return!0;if(t.includes(this.unprefixed)&&t.match(this.nameRegexp))return!1;let n=!1;for(let[r,i]of this.prefixeds)if(t.includes(r)&&t.match(i)){n=!0;break}if(!n)return!0;B+=1}return!0}check(e){return!(!e.selector.includes(this.prefixed)||!e.selector.match(this.regexp)||this.isHack(e))}};var $j=_j;let{list:B7}=Ds,e7=$j,C7=Wh,t7=Vh,n7=gB,r7=class extends C7{constructor(e,B,C){super(e,B,C),this.regexpCache=new Map}check(e){return e.selector.includes(this.name)?!!e.selector.match(this.regexp()):!1}prefixed(e){return this.name.replace(/^(\W*)/,`$1${e}`)}regexp(e){if(!this.regexpCache.has(e)){let B=e?this.prefixed(e):this.name;this.regexpCache.set(e,new RegExp(`(^|[^:"'=])${n7.escapeRegexp(B)}`,"gi"))}return this.regexpCache.get(e)}possible(){return t7.prefixes()}prefixeds(e){if(e._autoprefixerPrefixeds){if(e._autoprefixerPrefixeds[this.name])return e._autoprefixerPrefixeds}else e._autoprefixerPrefixeds={};let B={};if(e.selector.includes(",")){let C=B7.comma(e.selector).filter(t=>t.includes(this.name));for(let t of this.possible())B[t]=C.map(n=>this.replace(n,t)).join(", ")}else for(let C of this.possible())B[C]=this.replace(e.selector,C);return e._autoprefixerPrefixeds[this.name]=B,e._autoprefixerPrefixeds}already(e,B,C){let t=e.parent.index(e)-1;for(;t>=0;){let n=e.parent.nodes[t];if(n.type!=="rule")return!1;let r=!1;for(let i in B[this.name]){let s=B[this.name][i];if(n.selector===s){if(C===i)return!0;r=!0;break}}if(!r)return!1;t-=1}return!1}replace(e,B){return e.replace(this.regexp(),`$1${this.prefixed(B)}`)}add(e,B){let C=this.prefixeds(e);if(this.already(e,C,B))return;let t=this.clone(e,{selector:C[this.name][B]});e.parent.insertBefore(e,t)}old(e){return new e7(this,e)}};var Fr=r7;let i7=Fr;class $S extends i7{prefixed(B){return B==="-webkit-"?":-webkit-full-screen":B==="-moz-"?":-moz-full-screen":`:${B}fullscreen`}}$S.names=[":fullscreen"];var s7=$S;let a7=Fr;class B3 extends a7{possible(){return super.possible().concat(["-moz- old","-ms- old"])}prefixed(B){return B==="-webkit-"?"::-webkit-input-placeholder":B==="-ms-"?"::-ms-input-placeholder":B==="-ms- old"?":-ms-input-placeholder":B==="-moz- old"?":-moz-placeholder":`::${B}placeholder`}}B3.names=["::placeholder"];var o7=B3;let l7=Fr;class e3 extends l7{prefixed(B){return B==="-ms-"?":-ms-input-placeholder":`:${B}placeholder-shown`}}e3.names=[":placeholder-shown"];var c7=e3;let u7=Fr,d7=gB;class C3 extends u7{constructor(B,C,t){super(B,C,t),this.prefixes&&(this.prefixes=d7.uniq(this.prefixes.map(()=>"-webkit-")))}prefixed(B){return B==="-webkit-"?"::-webkit-file-upload-button":`::${B}file-selector-button`}}C3.names=["::file-selector-button"];var f7=C3,Fe=function(e){let B;return e==="-webkit- 2009"||e==="-moz-"?B=2009:e==="-ms-"?B=2012:e==="-webkit-"&&(B="final"),e==="-webkit- 2009"&&(e="-webkit-"),[B,e]};let J0=Ds.list,U0=Fe,h7=J,rc=class extends h7{prefixed(e,B){let C;return[C,B]=U0(B),C===2009?B+"box-flex":super.prefixed(e,B)}normalize(){return"flex"}set(e,B){let C=U0(B)[0];if(C===2009)return e.value=J0.space(e.value)[0],e.value=rc.oldValues[e.value]||e.value,super.set(e,B);if(C===2012){let t=J0.space(e.value);t.length===3&&t[2]==="0"&&(e.value=t.slice(0,2).concat("0px").join(" "))}return super.set(e,B)}};rc.names=["flex","box-flex"];rc.oldValues={auto:"1",none:"0"};var p7=rc;let V0=Fe,m7=J;class t3 extends m7{prefixed(B,C){let t;return[t,C]=V0(C),t===2009?C+"box-ordinal-group":t===2012?C+"flex-order":super.prefixed(B,C)}normalize(){return"order"}set(B,C){return V0(C)[0]===2009&&/\d/.test(B.value)?(B.value=(parseInt(B.value)+1).toString(),super.set(B,C)):super.set(B,C)}}t3.names=["order","flex-order","box-ordinal-group"];var g7=t3;let b7=J;class n3 extends b7{check(B){let C=B.value;return!C.toLowerCase().includes("alpha(")&&!C.includes("DXImageTransform.Microsoft")&&!C.includes("data:image/svg+xml")}}n3.names=["filter"];var A7=n3;let v7=J,{isPureNumber:y7}=gB;class r3 extends v7{insert(B,C,t,n){if(C!=="-ms-")return super.insert(B,C,t);let r=this.clone(B),i=B.prop.replace(/end$/,"start"),s=C+B.prop.replace(/end$/,"span");if(!B.parent.some(a=>a.prop===s)){if(r.prop=s,B.value.includes("span"))r.value=B.value.replace(/span\s/i,"");else{let a;if(B.parent.walkDecls(i,o=>{a=o}),a)if(y7(a.value)){let o=Number(B.value)-Number(a.value)+"";r.value=o}else return;else B.warn(n,`Can not prefix ${B.prop} (${i} is not found)`)}B.cloneBefore(r)}}}r3.names=["grid-row-end","grid-column-end"];var E7=r3;let I7=J;class i3 extends I7{check(B){return!B.value.split(/\s+/).some(C=>{let t=C.toLowerCase();return t==="reverse"||t==="alternate-reverse"})}}i3.names=["animation","animation-direction"];var S7=i3;let w7=Fe,D7=J;class s3 extends D7{insert(B,C,t){let n;if([n,C]=w7(C),n!==2009)return super.insert(B,C,t);let r=B.value.split(/\s+/).filter(c=>c!=="wrap"&&c!=="nowrap"&&"wrap-reverse");if(r.length===0||B.parent.some(c=>c.prop===C+"box-orient"||c.prop===C+"box-direction"))return;let i=r[0],s=i.includes("row")?"horizontal":"vertical",a=i.includes("reverse")?"reverse":"normal",o=this.clone(B);return o.prop=C+"box-orient",o.value=s,this.needCascade(B)&&(o.raws.before=this.calcBefore(t,B,C)),B.parent.insertBefore(B,o),o=this.clone(B),o.prop=C+"box-direction",o.value=a,this.needCascade(B)&&(o.raws.before=this.calcBefore(t,B,C)),B.parent.insertBefore(B,o)}}s3.names=["flex-flow","box-direction","box-orient"];var k7=s3;let P7=Fe,F7=J;class a3 extends F7{normalize(){return"flex"}prefixed(B,C){let t;return[t,C]=P7(C),t===2009?C+"box-flex":t===2012?C+"flex-positive":super.prefixed(B,C)}}a3.names=["flex-grow","flex-positive"];var N7=a3;let O7=Fe,R7=J;class o3 extends R7{set(B,C){if(O7(C)[0]!==2009)return super.set(B,C)}}o3.names=["flex-wrap"];var H7=o3;let M7=J,kn=wB;class l3 extends M7{insert(B,C,t,n){if(C!=="-ms-")return super.insert(B,C,t);let r=kn.parse(B),[i,s]=kn.translate(r,0,2),[a,o]=kn.translate(r,1,3);[["grid-row",i],["grid-row-span",s],["grid-column",a],["grid-column-span",o]].forEach(([c,l])=>{kn.insertDecl(B,c,l)}),kn.warnTemplateSelectorNotFound(B,n),kn.warnIfGridRowColumnExists(B,n)}}l3.names=["grid-area"];var L7=l3;let T7=J,Xr=wB;class c3 extends T7{insert(B,C,t){if(C!=="-ms-")return super.insert(B,C,t);if(B.parent.some(i=>i.prop==="-ms-grid-row-align"))return;let[[n,r]]=Xr.parse(B);r?(Xr.insertDecl(B,"grid-row-align",n),Xr.insertDecl(B,"grid-column-align",r)):(Xr.insertDecl(B,"grid-row-align",n),Xr.insertDecl(B,"grid-column-align",n))}}c3.names=["place-self"];var G7=c3;let x7=J;class u3 extends x7{check(B){let C=B.value;return!C.includes("/")&&!C.includes("span")}normalize(B){return B.replace("-start","")}prefixed(B,C){let t=super.prefixed(B,C);return C==="-ms-"&&(t=t.replace("-start","")),t}}u3.names=["grid-row-start","grid-column-start"];var K7=u3;let W0=Fe,Q7=J;class Ps extends Q7{check(B){return B.parent&&!B.parent.some(C=>C.prop&&C.prop.startsWith("grid-"))}prefixed(B,C){let t;return[t,C]=W0(C),t===2012?C+"flex-item-align":super.prefixed(B,C)}normalize(){return"align-self"}set(B,C){let t=W0(C)[0];if(t===2012)return B.value=Ps.oldValues[B.value]||B.value,super.set(B,C);if(t==="final")return super.set(B,C)}}Ps.names=["align-self","flex-item-align"];Ps.oldValues={"flex-end":"end","flex-start":"start"};var J7=Ps;let U7=J,V7=gB;class d3 extends U7{constructor(B,C,t){super(B,C,t),this.prefixes&&(this.prefixes=V7.uniq(this.prefixes.map(n=>n==="-ms-"?"-webkit-":n)))}}d3.names=["appearance"];var W7=d3;let j0=Fe,j7=J;class f3 extends j7{normalize(){return"flex-basis"}prefixed(B,C){let t;return[t,C]=j0(C),t===2012?C+"flex-preferred-size":super.prefixed(B,C)}set(B,C){let t;if([t,C]=j0(C),t===2012||t==="final")return super.set(B,C)}}f3.names=["flex-basis","flex-preferred-size"];var Y7=f3;let X7=J;class h3 extends X7{normalize(){return this.name.replace("box-image","border")}prefixed(B,C){let t=super.prefixed(B,C);return C==="-webkit-"&&(t=t.replace("border","box-image")),t}}h3.names=["mask-border","mask-border-source","mask-border-slice","mask-border-width","mask-border-outset","mask-border-repeat","mask-box-image","mask-box-image-source","mask-box-image-slice","mask-box-image-width","mask-box-image-outset","mask-box-image-repeat"];var Z7=h3;let q7=J;class RC extends q7{insert(B,C,t){let n=B.prop==="mask-composite",r;n?r=B.value.split(","):r=B.value.match(RC.regexp)||[],r=r.map(o=>o.trim()).filter(o=>o);let i=r.length,s;if(i&&(s=this.clone(B),s.value=r.map(o=>RC.oldValues[o]||o).join(", "),r.includes("intersect")&&(s.value+=", xor"),s.prop=C+"mask-composite"),n)return i?(this.needCascade(B)&&(s.raws.before=this.calcBefore(t,B,C)),B.parent.insertBefore(B,s)):void 0;let a=this.clone(B);return a.prop=C+a.prop,i&&(a.value=a.value.replace(RC.regexp,"")),this.needCascade(B)&&(a.raws.before=this.calcBefore(t,B,C)),B.parent.insertBefore(B,a),i?(this.needCascade(B)&&(s.raws.before=this.calcBefore(t,B,C)),B.parent.insertBefore(B,s)):B}}RC.names=["mask","mask-composite"];RC.oldValues={add:"source-over",subtract:"source-out",intersect:"source-in",exclude:"xor"};RC.regexp=new RegExp(`\\s+(${Object.keys(RC.oldValues).join("|")})\\b(?!\\))\\s*(?=[,])`,"ig");var z7=RC;let Y0=Fe,_7=J;class Fs extends _7{prefixed(B,C){let t;return[t,C]=Y0(C),t===2009?C+"box-align":t===2012?C+"flex-align":super.prefixed(B,C)}normalize(){return"align-items"}set(B,C){let t=Y0(C)[0];return(t===2009||t===2012)&&(B.value=Fs.oldValues[B.value]||B.value),super.set(B,C)}}Fs.names=["align-items","flex-align","box-align"];Fs.oldValues={"flex-end":"end","flex-start":"start"};var $7=Fs;let BY=J;class p3 extends BY{set(B,C){return C==="-ms-"&&B.value==="contain"&&(B.value="element"),super.set(B,C)}insert(B,C,t){if(!(B.value==="all"&&C==="-ms-"))return super.insert(B,C,t)}}p3.names=["user-select"];var eY=p3;let X0=Fe,CY=J;class m3 extends CY{normalize(){return"flex-shrink"}prefixed(B,C){let t;return[t,C]=X0(C),t===2012?C+"flex-negative":super.prefixed(B,C)}set(B,C){let t;if([t,C]=X0(C),t===2012||t==="final")return super.set(B,C)}}m3.names=["flex-shrink","flex-negative"];var tY=m3;let nY=J;class g3 extends nY{prefixed(B,C){return`${C}column-${B}`}normalize(B){return B.includes("inside")?"break-inside":B.includes("before")?"break-before":"break-after"}set(B,C){return(B.prop==="break-inside"&&B.value==="avoid-column"||B.value==="avoid-page")&&(B.value="avoid"),super.set(B,C)}insert(B,C,t){if(B.prop!=="break-inside")return super.insert(B,C,t);if(!(/region/i.test(B.value)||/page/i.test(B.value)))return super.insert(B,C,t)}}g3.names=["break-inside","page-break-inside","column-break-inside","break-before","page-break-before","column-break-before","break-after","page-break-after","column-break-after"];var rY=g3;let iY=J;class Ns extends iY{insert(B,C,t){if(C==="-ms-"){let n=this.set(this.clone(B),C);this.needCascade(B)&&(n.raws.before=this.calcBefore(t,B,C));let r="ltr";return B.parent.nodes.forEach(i=>{i.prop==="direction"&&(i.value==="rtl"||i.value==="ltr")&&(r=i.value)}),n.value=Ns.msValues[r][B.value]||B.value,B.parent.insertBefore(B,n)}return super.insert(B,C,t)}}Ns.names=["writing-mode"];Ns.msValues={ltr:{"horizontal-tb":"lr-tb","vertical-rl":"tb-rl","vertical-lr":"tb-lr"},rtl:{"horizontal-tb":"rl-tb","vertical-rl":"bt-rl","vertical-lr":"bt-lr"}};var sY=Ns;let aY=J;class b3 extends aY{set(B,C){return B.value=B.value.replace(/\s+fill(\s)/,"$1"),super.set(B,C)}}b3.names=["border-image"];var oY=b3;let Z0=Fe,lY=J;class Os extends lY{prefixed(B,C){let t;return[t,C]=Z0(C),t===2012?C+"flex-line-pack":super.prefixed(B,C)}normalize(){return"align-content"}set(B,C){let t=Z0(C)[0];if(t===2012)return B.value=Os.oldValues[B.value]||B.value,super.set(B,C);if(t==="final")return super.set(B,C)}}Os.names=["align-content","flex-line-pack"];Os.oldValues={"flex-end":"end","flex-start":"start","space-between":"justify","space-around":"distribute"};var cY=Os;let uY=J;class _e extends uY{prefixed(B,C){return C==="-moz-"?C+(_e.toMozilla[B]||B):super.prefixed(B,C)}normalize(B){return _e.toNormal[B]||B}}_e.names=["border-radius"];_e.toMozilla={};_e.toNormal={};for(let e of["top","bottom"])for(let B of["left","right"]){let C=`border-${e}-${B}-radius`,t=`border-radius-${e}${B}`;_e.names.push(C),_e.names.push(t),_e.toMozilla[C]=t,_e.toNormal[t]=C}var dY=_e;let fY=J;class A3 extends fY{prefixed(B,C){return B.includes("-start")?C+B.replace("-block-start","-before"):C+B.replace("-block-end","-after")}normalize(B){return B.includes("-before")?B.replace("-before","-block-start"):B.replace("-after","-block-end")}}A3.names=["border-block-start","border-block-end","margin-block-start","margin-block-end","padding-block-start","padding-block-end","border-before","border-after","margin-before","margin-after","padding-before","padding-after"];var hY=A3;let pY=J,{parseTemplate:mY,warnMissedAreas:gY,getGridGap:bY,warnGridGap:AY,inheritGridGap:vY}=wB;class v3 extends pY{insert(B,C,t,n){if(C!=="-ms-")return super.insert(B,C,t);if(B.parent.some(m=>m.prop==="-ms-grid-rows"))return;let r=bY(B),i=vY(B,r),{rows:s,columns:a,areas:o}=mY({decl:B,gap:i||r}),c=Object.keys(o).length>0,l=Boolean(s),u=Boolean(a);return AY({gap:r,hasColumns:u,decl:B,result:n}),gY(o,B,n),(l&&u||c)&&B.cloneBefore({prop:"-ms-grid-rows",value:s,raws:{}}),u&&B.cloneBefore({prop:"-ms-grid-columns",value:a,raws:{}}),B}}v3.names=["grid-template"];var yY=v3;let EY=J;class y3 extends EY{prefixed(B,C){return C+B.replace("-inline","")}normalize(B){return B.replace(/(margin|padding|border)-(start|end)/,"$1-inline-$2")}}y3.names=["border-inline-start","border-inline-end","margin-inline-start","margin-inline-end","padding-inline-start","padding-inline-end","border-start","border-end","margin-start","margin-end","padding-start","padding-end"];var IY=y3;let SY=J;class E3 extends SY{check(B){return!B.value.includes("flex-")&&B.value!=="baseline"}prefixed(B,C){return C+"grid-row-align"}normalize(){return"align-self"}}E3.names=["grid-row-align"];var wY=E3;let DY=J;class Rs extends DY{keyframeParents(B){let{parent:C}=B;for(;C;){if(C.type==="atrule"&&C.name==="keyframes")return!0;({parent:C}=C)}return!1}contain3d(B){if(B.prop==="transform-origin")return!1;for(let C of Rs.functions3d)if(B.value.includes(`${C}(`))return!0;return!1}set(B,C){return B=super.set(B,C),C==="-ms-"&&(B.value=B.value.replace(/rotatez/gi,"rotate")),B}insert(B,C,t){if(C==="-ms-"){if(!this.contain3d(B)&&!this.keyframeParents(B))return super.insert(B,C,t)}else if(C==="-o-"){if(!this.contain3d(B))return super.insert(B,C,t)}else return super.insert(B,C,t)}}Rs.names=["transform","transform-origin"];Rs.functions3d=["matrix3d","translate3d","translateZ","scale3d","scaleZ","rotate3d","rotateX","rotateY","perspective"];var kY=Rs;let q0=Fe,PY=J;class I3 extends PY{normalize(){return"flex-direction"}insert(B,C,t){let n;if([n,C]=q0(C),n!==2009)return super.insert(B,C,t);if(B.parent.some(o=>o.prop===C+"box-orient"||o.prop===C+"box-direction"))return;let r=B.value,i,s;r==="inherit"||r==="initial"||r==="unset"?(i=r,s=r):(i=r.includes("row")?"horizontal":"vertical",s=r.includes("reverse")?"reverse":"normal");let a=this.clone(B);return a.prop=C+"box-orient",a.value=i,this.needCascade(B)&&(a.raws.before=this.calcBefore(t,B,C)),B.parent.insertBefore(B,a),a=this.clone(B),a.prop=C+"box-direction",a.value=s,this.needCascade(B)&&(a.raws.before=this.calcBefore(t,B,C)),B.parent.insertBefore(B,a)}old(B,C){let t;return[t,C]=q0(C),t===2009?[C+"box-orient",C+"box-direction"]:super.old(B,C)}}I3.names=["flex-direction","box-direction","box-orient"];var FY=I3;let NY=J;class S3 extends NY{check(B){return B.value==="pixelated"}prefixed(B,C){return C==="-ms-"?"-ms-interpolation-mode":super.prefixed(B,C)}set(B,C){return C!=="-ms-"?super.set(B,C):(B.prop="-ms-interpolation-mode",B.value="nearest-neighbor",B)}normalize(){return"image-rendering"}process(B,C){return super.process(B,C)}}S3.names=["image-rendering","interpolation-mode"];var OY=S3;let RY=J,HY=gB;class w3 extends RY{constructor(B,C,t){super(B,C,t),this.prefixes&&(this.prefixes=HY.uniq(this.prefixes.map(n=>n==="-ms-"?"-webkit-":n)))}}w3.names=["backdrop-filter"];var MY=w3;let LY=J,TY=gB;class D3 extends LY{constructor(B,C,t){super(B,C,t),this.prefixes&&(this.prefixes=TY.uniq(this.prefixes.map(n=>n==="-ms-"?"-webkit-":n)))}check(B){return B.value.toLowerCase()==="text"}}D3.names=["background-clip"];var GY=D3;let xY=J;const KY=["none","underline","overline","line-through","blink","inherit","initial","unset"];class k3 extends xY{check(B){return B.value.split(/\s+/).some(C=>!KY.includes(C))}}k3.names=["text-decoration"];var QY=k3;let z0=Fe,JY=J;class Hs extends JY{prefixed(B,C){let t;return[t,C]=z0(C),t===2009?C+"box-pack":t===2012?C+"flex-pack":super.prefixed(B,C)}normalize(){return"justify-content"}set(B,C){let t=z0(C)[0];if(t===2009||t===2012){let n=Hs.oldValues[B.value]||B.value;if(B.value=n,t!==2009||n!=="distribute")return super.set(B,C)}else if(t==="final")return super.set(B,C)}}Hs.names=["justify-content","flex-pack","box-pack"];Hs.oldValues={"flex-end":"end","flex-start":"start","space-between":"justify","space-around":"distribute"};var UY=Hs;let VY=J;class P3 extends VY{set(B,C){let t=B.value.toLowerCase();return C==="-webkit-"&&!t.includes(" ")&&t!=="contain"&&t!=="cover"&&(B.value=B.value+" "+B.value),super.set(B,C)}}P3.names=["background-size"];var WY=P3;let jY=J,wu=wB;class F3 extends jY{insert(B,C,t){if(C!=="-ms-")return super.insert(B,C,t);let n=wu.parse(B),[r,i]=wu.translate(n,0,1);n[0]&&n[0].includes("span")&&(i=n[0].join("").replace(/\D/g,"")),[[B.prop,r],[`${B.prop}-span`,i]].forEach(([s,a])=>{wu.insertDecl(B,s,a)})}}F3.names=["grid-row","grid-column"];var YY=F3;let XY=J,{prefixTrackProp:_0,prefixTrackValue:ZY,autoplaceGridItems:qY,getGridGap:zY,inheritGridGap:_Y}=wB,$Y=Zj;class N3 extends XY{prefixed(B,C){return C==="-ms-"?_0({prop:B,prefix:C}):super.prefixed(B,C)}normalize(B){return B.replace(/^grid-(rows|columns)/,"grid-template-$1")}insert(B,C,t,n){if(C!=="-ms-")return super.insert(B,C,t);let{parent:r,prop:i,value:s}=B,a=i.includes("rows"),o=i.includes("columns"),c=r.some(p=>p.prop==="grid-template"||p.prop==="grid-template-areas");if(c&&a)return!1;let l=new $Y({options:{}}),u=l.gridStatus(r,n),m=zY(B);m=_Y(B,m)||m;let d=a?m.row:m.column;(u==="no-autoplace"||u===!0)&&!c&&(d=null);let h=ZY({value:s,gap:d});B.cloneBefore({prop:_0({prop:i,prefix:C}),value:h});let g=r.nodes.find(p=>p.prop==="grid-auto-flow"),f="row";if(g&&!l.disabled(g,n)&&(f=g.value.trim()),u==="autoplace"){let p=r.nodes.find(b=>b.prop==="grid-template-rows");if(!p&&c)return;if(!p&&!c){B.warn(n,"Autoplacement does not work without grid-template-rows property");return}!r.nodes.find(b=>b.prop==="grid-template-columns")&&!c&&B.warn(n,"Autoplacement does not work without grid-template-columns property"),o&&!c&&qY(B,n,m,f)}}}N3.names=["grid-template-rows","grid-template-columns","grid-rows","grid-columns"];var BX=N3;let eX=J;class O3 extends eX{check(B){return!B.value.includes("flex-")&&B.value!=="baseline"}prefixed(B,C){return C+"grid-column-align"}normalize(){return"justify-self"}}O3.names=["grid-column-align"];var CX=O3;let tX=J;class R3 extends tX{prefixed(B,C){return C==="-moz-"?"color-adjust":C+"print-color-adjust"}normalize(){return"print-color-adjust"}}R3.names=["print-color-adjust","color-adjust"];var nX=R3;let rX=J;class H3 extends rX{prefixed(B,C){return C+"scroll-chaining"}normalize(){return"overscroll-behavior"}set(B,C){return B.value==="auto"?B.value="chained":(B.value==="none"||B.value==="contain")&&(B.value="none"),super.set(B,C)}}H3.names=["overscroll-behavior","scroll-chaining"];var iX=H3;let sX=J,{parseGridAreas:aX,warnMissedAreas:oX,prefixTrackProp:lX,prefixTrackValue:$0,getGridGap:cX,warnGridGap:uX,inheritGridGap:dX}=wB;function fX(e){return e.trim().slice(1,-1).split(/["']\s*["']?/g)}class M3 extends sX{insert(B,C,t,n){if(C!=="-ms-")return super.insert(B,C,t);let r=!1,i=!1,s=B.parent,a=cX(B);a=dX(B,a)||a,s.walkDecls(/-ms-grid-rows/,l=>l.remove()),s.walkDecls(/grid-template-(rows|columns)/,l=>{if(l.prop==="grid-template-rows"){i=!0;let{prop:u,value:m}=l;l.cloneBefore({prop:lX({prop:u,prefix:C}),value:$0({value:m,gap:a.row})})}else r=!0});let o=fX(B.value);r&&!i&&a.row&&o.length>1&&B.cloneBefore({prop:"-ms-grid-rows",value:$0({value:`repeat(${o.length}, auto)`,gap:a.row}),raws:{}}),uX({gap:a,hasColumns:r,decl:B,result:n});let c=aX({rows:o,gap:a});return oX(c,B,n),B}}M3.names=["grid-template-areas"];var hX=M3;let pX=J;class L3 extends pX{set(B,C){return C==="-webkit-"&&(B.value=B.value.replace(/\s*(right|left)\s*/i,"")),super.set(B,C)}}L3.names=["text-emphasis-position"];var mX=L3;let gX=J;class T3 extends gX{set(B,C){return B.prop==="text-decoration-skip-ink"&&B.value==="auto"?(B.prop=C+"text-decoration-skip",B.value="ink",B):super.set(B,C)}}T3.names=["text-decoration-skip-ink","text-decoration-skip"];var bX=T3,AX={wrap:G3,limit:x3,validate:K3,test:Zh,curry:vX,name:Q3};function G3(e,B,C){var t=B-e;return((C-e)%t+t)%t+e}function x3(e,B,C){return Math.max(e,Math.min(B,C))}function K3(e,B,C,t,n){if(!Zh(e,B,C,t,n))throw new Error(C+" is outside of range ["+e+","+B+")");return C}function Zh(e,B,C,t,n){return!(C<e||C>B||n&&C===B||t&&C===e)}function Q3(e,B,C,t){return(C?"(":"[")+e+","+B+(t?")":"]")}function vX(e,B,C,t){var n=Q3.bind(null,e,B,C,t);return{wrap:G3.bind(null,e,B),limit:x3.bind(null,e,B),validate:function(r){return K3(e,B,r,C,t)},test:function(r){return Zh(e,B,r,C,t)},toString:n,name:n}}let Du=jh,yX=AX,EX=ks,IX=yC,SX=gB,Bg=/top|left|right|bottom/gi;class yt extends IX{replace(B,C){let t=Du(B);for(let n of t.nodes){let r=this.name;if(n.type==="function"&&n.value===r)if(n.nodes=this.newDirection(n.nodes),n.nodes=this.normalize(n.nodes,r),C==="-webkit- old"){if(!this.oldWebkit(n))return!1}else n.nodes=this.convertDirection(n.nodes),n.value=C+n.value}return t.toString()}replaceFirst(B,...C){return C.map(t=>t===" "?{type:"space",value:t}:{type:"word",value:t}).concat(B.slice(1))}normalizeUnit(B,C){return`${parseFloat(B)/C*360}deg`}normalize(B,C){if(!B[0])return B;if(/-?\d+(.\d+)?grad/.test(B[0].value))B[0].value=this.normalizeUnit(B[0].value,400);else if(/-?\d+(.\d+)?rad/.test(B[0].value))B[0].value=this.normalizeUnit(B[0].value,2*Math.PI);else if(/-?\d+(.\d+)?turn/.test(B[0].value))B[0].value=this.normalizeUnit(B[0].value,1);else if(B[0].value.includes("deg")){let t=parseFloat(B[0].value);t=yX.wrap(0,360,t),B[0].value=`${t}deg`}if(C==="linear-gradient"||C==="repeating-linear-gradient"){let t=B[0].value;t==="0deg"||t==="0"?B=this.replaceFirst(B,"to"," ","top"):t==="90deg"?B=this.replaceFirst(B,"to"," ","right"):t==="180deg"?B=this.replaceFirst(B,"to"," ","bottom"):t==="270deg"&&(B=this.replaceFirst(B,"to"," ","left"))}return B}newDirection(B){if(B[0].value==="to"||(Bg.lastIndex=0,!Bg.test(B[0].value)))return B;B.unshift({type:"word",value:"to"},{type:"space",value:" "});for(let C=2;C<B.length&&B[C].type!=="div";C++)B[C].type==="word"&&(B[C].value=this.revertDirection(B[C].value));return B}isRadial(B){let C="before";for(let t of B)if(C==="before"&&t.type==="space")C="at";else if(C==="at"&&t.value==="at")C="after";else{if(C==="after"&&t.type==="space")return!0;if(t.type==="div")break;C="before"}return!1}convertDirection(B){return B.length>0&&(B[0].value==="to"?this.fixDirection(B):B[0].value.includes("deg")?this.fixAngle(B):this.isRadial(B)&&this.fixRadial(B)),B}fixDirection(B){B.splice(0,2);for(let C of B){if(C.type==="div")break;C.type==="word"&&(C.value=this.revertDirection(C.value))}}fixAngle(B){let C=B[0].value;C=parseFloat(C),C=Math.abs(450-C)%360,C=this.roundFloat(C,3),B[0].value=`${C}deg`}fixRadial(B){let C=[],t=[],n,r,i,s,a;for(s=0;s<B.length-2;s++)if(n=B[s],r=B[s+1],i=B[s+2],n.type==="space"&&r.value==="at"&&i.type==="space"){a=s+3;break}else C.push(n);let o;for(s=a;s<B.length;s++)if(B[s].type==="div"){o=B[s];break}else t.push(B[s]);B.splice(0,s,...t,o,...C)}revertDirection(B){return yt.directions[B.toLowerCase()]||B}roundFloat(B,C){return parseFloat(B.toFixed(C))}oldWebkit(B){let{nodes:C}=B,t=Du.stringify(B.nodes);if(this.name!=="linear-gradient"||C[0]&&C[0].value.includes("deg")||t.includes("px")||t.includes("-corner")||t.includes("-side"))return!1;let n=[[]];for(let r of C)n[n.length-1].push(r),r.type==="div"&&r.value===","&&n.push([]);this.oldDirection(n),this.colorStops(n),B.nodes=[];for(let r of n)B.nodes=B.nodes.concat(r);return B.nodes.unshift({type:"word",value:"linear"},this.cloneDiv(B.nodes)),B.value="-webkit-gradient",!0}oldDirection(B){let C=this.cloneDiv(B[0]);if(B[0][0].value!=="to")return B.unshift([{type:"word",value:yt.oldDirections.bottom},C]);{let t=[];for(let r of B[0].slice(2))r.type==="word"&&t.push(r.value.toLowerCase());t=t.join(" ");let n=yt.oldDirections[t]||t;return B[0]=[{type:"word",value:n},C],B[0]}}cloneDiv(B){for(let C of B)if(C.type==="div"&&C.value===",")return C;return{type:"div",value:",",after:" "}}colorStops(B){let C=[];for(let t=0;t<B.length;t++){let n,r=B[t],i;if(t===0)continue;let s=Du.stringify(r[0]);r[1]&&r[1].type==="word"?n=r[1].value:r[2]&&r[2].type==="word"&&(n=r[2].value);let a;t===1&&(!n||n==="0%")?a=`from(${s})`:t===B.length-1&&(!n||n==="100%")?a=`to(${s})`:n?a=`color-stop(${n}, ${s})`:a=`color-stop(${s})`;let o=r[r.length-1];B[t]=[{type:"word",value:a}],o.type==="div"&&o.value===","&&(i=B[t].push(o)),C.push(i)}return C}old(B){if(B==="-webkit-"){let C;this.name==="linear-gradient"?C="linear":this.name==="repeating-linear-gradient"?C="repeating-linear":this.name==="repeating-radial-gradient"?C="repeating-radial":C="radial";let t="-gradient",n=SX.regexp(`-webkit-(${C}-gradient|gradient\\(\\s*${C})`,!1);return new EX(this.name,B+this.name,t,n)}else return super.old(B)}add(B,C){let t=B.prop;if(t.includes("mask")){if(C==="-webkit-"||C==="-webkit- old")return super.add(B,C)}else if(t==="list-style"||t==="list-style-image"||t==="content"){if(C==="-webkit-"||C==="-webkit- old")return super.add(B,C)}else return super.add(B,C)}}yt.names=["linear-gradient","repeating-linear-gradient","radial-gradient","repeating-radial-gradient"];yt.directions={top:"bottom",left:"right",bottom:"top",right:"left"};yt.oldDirections={top:"left bottom, left top",left:"right top, left top",bottom:"left top, left bottom",right:"left top, right top","top right":"left bottom, right top","top left":"right bottom, left top","right top":"left bottom, right top","right bottom":"left top, right bottom","bottom right":"left top, right bottom","bottom left":"right top, left bottom","left top":"right bottom, left top","left bottom":"right top, left bottom"};var wX=yt;let DX=ks,kX=yC;function eg(e){return new RegExp(`(^|[\\s,(])(${e}($|[\\s),]))`,"gi")}class J3 extends kX{regexp(){return this.regexpCache||(this.regexpCache=eg(this.name)),this.regexpCache}isStretch(){return this.name==="stretch"||this.name==="fill"||this.name==="fill-available"}replace(B,C){return C==="-moz-"&&this.isStretch()?B.replace(this.regexp(),"$1-moz-available$3"):C==="-webkit-"&&this.isStretch()?B.replace(this.regexp(),"$1-webkit-fill-available$3"):super.replace(B,C)}old(B){let C=B+this.name;return this.isStretch()&&(B==="-moz-"?C="-moz-available":B==="-webkit-"&&(C="-webkit-fill-available")),new DX(this.name,C,C,eg(C))}add(B,C){if(!(B.prop.includes("grid")&&C!=="-webkit-"))return super.add(B,C)}}J3.names=["max-content","min-content","fit-content","fill","fill-available","stretch"];var PX=J3;let Cg=ks,FX=yC;class U3 extends FX{replace(B,C){return C==="-webkit-"?B.replace(this.regexp(),"$1-webkit-optimize-contrast"):C==="-moz-"?B.replace(this.regexp(),"$1-moz-crisp-edges"):super.replace(B,C)}old(B){return B==="-webkit-"?new Cg(this.name,"-webkit-optimize-contrast"):B==="-moz-"?new Cg(this.name,"-moz-crisp-edges"):super.old(B)}}U3.names=["pixelated"];var NX=U3;let OX=yC;class V3 extends OX{replace(B,C){let t=super.replace(B,C);return C==="-webkit-"&&(t=t.replace(/("[^"]+"|'[^']+')(\s+\d+\w)/gi,"url($1)$2")),t}}V3.names=["image-set"];var RX=V3;let HX=Ds.list,MX=yC;class W3 extends MX{replace(B,C){return HX.space(B).map(t=>{if(t.slice(0,+this.name.length+1)!==this.name+"(")return t;let n=t.lastIndexOf(")"),r=t.slice(n+1),i=t.slice(this.name.length+1,n);if(C==="-webkit-"){let s=i.match(/\d*.?\d+%?/);s?(i=i.slice(s[0].length).trim(),i+=`, ${s[0]}`):i+=", 0.5"}return C+this.name+"("+i+")"+r}).join(" ")}}W3.names=["cross-fade"];var LX=W3;let TX=Fe,GX=ks,xX=yC;class j3 extends xX{constructor(B,C){super(B,C),B==="display-flex"&&(this.name="flex")}check(B){return B.prop==="display"&&B.value===this.name}prefixed(B){let C,t;return[C,B]=TX(B),C===2009?this.name==="flex"?t="box":t="inline-box":C===2012?this.name==="flex"?t="flexbox":t="inline-flexbox":C==="final"&&(t=this.name),B+t}replace(B,C){return this.prefixed(C)}old(B){let C=this.prefixed(B);if(C)return new GX(this.name,C)}}j3.names=["display-flex","inline-flex"];var KX=j3;let QX=yC;class Y3 extends QX{constructor(B,C){super(B,C),B==="display-grid"&&(this.name="grid")}check(B){return B.prop==="display"&&B.value===this.name}}Y3.names=["display-grid","inline-grid"];var JX=Y3;let UX=yC;class X3 extends UX{constructor(B,C){super(B,C),B==="filter-function"&&(this.name="filter")}}X3.names=["filter","filter-function"];var VX=X3;let WX=Fr,jX=gB;class Z3 extends WX{constructor(B,C,t){super(B,C,t),this.prefixes&&(this.prefixes=jX.uniq(this.prefixes.map(()=>"-webkit-")))}prefixed(B){return B==="-webkit-"?":-webkit-autofill":`:${B}autofill`}}Z3.names=[":autofill"];var YX=Z3;let V=J,Ms=Fr,Mt=yC,XX=s7,ZX=o7,qX=c7,zX=f7,_X=p7,$X=g7,BZ=A7,eZ=E7,CZ=S7,tZ=k7,nZ=N7,rZ=H7,iZ=L7,sZ=G7,aZ=K7,oZ=J7,lZ=W7,cZ=Y7,uZ=Z7,dZ=z7,fZ=$7,hZ=eY,pZ=tY,mZ=rY,gZ=sY,bZ=oY,AZ=cY,vZ=dY,yZ=hY,EZ=yY,IZ=IY,SZ=wY,wZ=kY,DZ=FY,kZ=OY,PZ=MY,FZ=GY,NZ=QY,OZ=UY,RZ=WY,HZ=YY,MZ=BX,LZ=CX,TZ=nX,GZ=iX,xZ=hX,KZ=mX,QZ=bX,JZ=wX,UZ=PX,VZ=NX,WZ=RX,jZ=LX,YZ=KX,XZ=JX,ZZ=VX,qZ=YX;Ms.hack(qZ);Ms.hack(XX);Ms.hack(ZX);Ms.hack(qX);Ms.hack(zX);V.hack(_X);V.hack($X);V.hack(BZ);V.hack(eZ);V.hack(CZ);V.hack(tZ);V.hack(nZ);V.hack(rZ);V.hack(iZ);V.hack(sZ);V.hack(aZ);V.hack(oZ);V.hack(lZ);V.hack(cZ);V.hack(uZ);V.hack(dZ);V.hack(fZ);V.hack(hZ);V.hack(pZ);V.hack(mZ);V.hack(gZ);V.hack(bZ);V.hack(AZ);V.hack(vZ);V.hack(yZ);V.hack(EZ);V.hack(IZ);V.hack(SZ);V.hack(wZ);V.hack(DZ);V.hack(kZ);V.hack(PZ);V.hack(FZ);V.hack(NZ);V.hack(OZ);V.hack(RZ);V.hack(HZ);V.hack(MZ);V.hack(LZ);V.hack(GZ);V.hack(xZ);V.hack(TZ);V.hack(KZ);V.hack(QZ);Mt.hack(JZ);Mt.hack(UZ);Mt.hack(VZ);Mt.hack(WZ);Mt.hack(jZ);Mt.hack(YZ);Mt.hack(XZ);Mt.hack(ZZ);let zZ=yn.feature;function q3(e,B){return e=e.split(" "),B=B.split(" "),e[0]>B[0]?1:e[0]<B[0]?-1:Math.sign(parseFloat(e[1])-parseFloat(B[1]))}function N(e,B,C){e=zZ(e),C||([C,B]=[B,{}]);let t=B.match||/\sx($|\s)/,n=[];for(let r in e.stats){let i=e.stats[r];for(let s in i)i[s].match(t)&&n.push(r+" "+s)}C(n.sort(q3))}let Ed={};function F(e,B){for(let C of e)Ed[C]=Object.assign({},B)}function Bo(e,B){for(let C of e)Ed[C].browsers=Ed[C].browsers.concat(B.browsers).sort(q3)}let _Z=BI;N(_Z,e=>F(["border-radius","border-top-left-radius","border-top-right-radius","border-bottom-right-radius","border-bottom-left-radius"],{mistakes:["-khtml-","-ms-","-o-"],feature:"border-radius",browsers:e}));let $Z=aI;N($Z,e=>F(["box-shadow"],{mistakes:["-khtml-"],feature:"css-boxshadow",browsers:e}));let Bq=CI;N(Bq,e=>F(["animation","animation-name","animation-duration","animation-delay","animation-direction","animation-fill-mode","animation-iteration-count","animation-play-state","animation-timing-function","@keyframes"],{mistakes:["-khtml-","-ms-"],feature:"css-animation",browsers:e}));let eq=GI;N(eq,e=>F(["transition","transition-property","transition-duration","transition-delay","transition-timing-function"],{mistakes:["-khtml-","-ms-"],browsers:e,feature:"css-transitions"}));let Cq=lS;N(Cq,e=>F(["transform","transform-origin"],{feature:"transforms2d",browsers:e}));let z3=cS;N(z3,e=>(F(["perspective","perspective-origin"],{feature:"transforms3d",browsers:e}),F(["transform-style"],{mistakes:["-ms-","-o-"],browsers:e,feature:"transforms3d"})));N(z3,{match:/y\sx|y\s#2/},e=>F(["backface-visibility"],{mistakes:["-ms-","-o-"],feature:"transforms3d",browsers:e}));let _3=gI;N(_3,{match:/y\sx/},e=>F(["linear-gradient","repeating-linear-gradient","radial-gradient","repeating-radial-gradient"],{props:["background","background-image","border-image","mask","list-style","list-style-image","content","mask-image"],mistakes:["-ms-"],feature:"css-gradients",browsers:e}));N(_3,{match:/a\sx/},e=>(e=e.map(B=>/firefox|op/.test(B)?B:`${B} old`),Bo(["linear-gradient","repeating-linear-gradient","radial-gradient","repeating-radial-gradient"],{feature:"css-gradients",browsers:e})));let tq=QI;N(tq,e=>F(["box-sizing"],{feature:"css3-boxsizing",browsers:e}));let nq=mI;N(nq,e=>F(["filter"],{feature:"css-filters",browsers:e}));let rq=pI;N(rq,e=>F(["filter-function"],{props:["background","background-image","border-image","mask","list-style","list-style-image","content","mask-image"],feature:"css-filter-function",browsers:e}));let iq=iI;N(iq,{match:/y\sx|y\s#2/},e=>F(["backdrop-filter"],{feature:"css-backdrop-filter",browsers:e}));let sq=dI;N(sq,e=>F(["element"],{props:["background","background-image","border-image","mask","list-style","list-style-image","content","mask-image"],feature:"css-element-function",browsers:e}));let aq=tS;N(aq,e=>{F(["columns","column-width","column-gap","column-rule","column-rule-color","column-rule-width","column-count","column-rule-style","column-span","column-fill"],{feature:"multicolumn",browsers:e});let B=e.filter(C=>!/firefox/.test(C));F(["break-before","break-after","break-inside"],{feature:"multicolumn",browsers:B})});let oq=uS;N(oq,e=>F(["user-select"],{mistakes:["-khtml-"],feature:"user-select-none",browsers:e}));let $3=WI;N($3,{match:/a\sx/},e=>{e=e.map(B=>/ie|firefox/.test(B)?B:`${B} 2009`),F(["display-flex","inline-flex"],{props:["display"],feature:"flexbox",browsers:e}),F(["flex","flex-grow","flex-shrink","flex-basis"],{feature:"flexbox",browsers:e}),F(["flex-direction","flex-wrap","flex-flow","justify-content","order","align-items","align-self","align-content"],{feature:"flexbox",browsers:e})});N($3,{match:/y\sx/},e=>{Bo(["display-flex","inline-flex"],{feature:"flexbox",browsers:e}),Bo(["flex","flex-grow","flex-shrink","flex-basis"],{feature:"flexbox",browsers:e}),Bo(["flex-direction","flex-wrap","flex-flow","justify-content","order","align-items","align-self","align-content"],{feature:"flexbox",browsers:e})});let lq=eI;N(lq,e=>F(["calc"],{props:["*"],feature:"calc",browsers:e}));let cq=_E;N(cq,e=>F(["background-origin","background-size"],{feature:"background-img-opts",browsers:e}));let uq=zE;N(uq,e=>F(["background-clip"],{feature:"background-clip-text",browsers:e}));let dq=jI;N(dq,e=>F(["font-feature-settings","font-variant-ligatures","font-language-override"],{feature:"font-feature",browsers:e}));let fq=YI;N(fq,e=>F(["font-kerning"],{feature:"font-kerning",browsers:e}));let hq=$E;N(hq,e=>F(["border-image"],{feature:"border-image",browsers:e}));let pq=NI;N(pq,e=>F(["::selection"],{selector:!0,feature:"css-selection",browsers:e}));let mq=DI;N(mq,e=>{F(["::placeholder"],{selector:!0,feature:"css-placeholder",browsers:e.concat(["ie 10 old","ie 11 old","firefox 18 old"])})});let gq=wI;N(gq,e=>{F([":placeholder-shown"],{selector:!0,feature:"css-placeholder-shown",browsers:e})});let bq=AI;N(bq,e=>F(["hyphens"],{feature:"css-hyphens",browsers:e}));let Bw=XI;N(Bw,e=>F([":fullscreen"],{selector:!0,feature:"fullscreen",browsers:e}));N(Bw,{match:/x(\s#2|$)/},e=>F(["::backdrop"],{selector:!0,feature:"fullscreen",browsers:e}));let Aq=hI;N(Aq,e=>F(["::file-selector-button"],{selector:!0,feature:"file-selector-button",browsers:e}));let vq=rI;N(vq,e=>F([":autofill"],{selector:!0,feature:"css-autofill",browsers:e}));let yq=VI;N(yq,e=>F(["tab-size"],{feature:"css3-tabsize",browsers:e}));let qh=ZI,ic=["width","min-width","max-width","height","min-height","max-height","inline-size","min-inline-size","max-inline-size","block-size","min-block-size","max-block-size","grid","grid-template","grid-template-rows","grid-template-columns","grid-auto-columns","grid-auto-rows"];N(qh,e=>F(["max-content","min-content"],{props:ic,feature:"intrinsic-width",browsers:e}));N(qh,{match:/x|\s#4/},e=>F(["fill","fill-available"],{props:ic,feature:"intrinsic-width",browsers:e}));N(qh,{match:/x|\s#5/},e=>F(["fit-content"],{props:ic,feature:"intrinsic-width",browsers:e}));let Eq=xI;N(Eq,e=>F(["stretch"],{props:ic,feature:"css-width-stretch",browsers:e}));let Iq=UI;N(Iq,e=>F(["zoom-in","zoom-out"],{props:["cursor"],feature:"css3-cursors-newer",browsers:e}));let Sq=JI;N(Sq,e=>F(["grab","grabbing"],{props:["cursor"],feature:"css3-cursors-grab",browsers:e}));let wq=HI;N(wq,e=>F(["sticky"],{props:["position"],feature:"css-sticky",browsers:e}));let Dq=rS;N(Dq,e=>F(["touch-action"],{feature:"pointer",browsers:e}));let kq=iS;N(kq,{match:/x.*#[235]/},e=>F(["text-decoration-skip","text-decoration-skip-ink"],{feature:"text-decoration",browsers:e}));let Pq=eS;N(Pq,e=>F(["text-decoration"],{feature:"text-decoration",browsers:e}));let Fq=$I;N(Fq,e=>F(["text-decoration-color"],{feature:"text-decoration",browsers:e}));let Nq=BS;N(Nq,e=>F(["text-decoration-line"],{feature:"text-decoration",browsers:e}));let Oq=CS;N(Oq,e=>F(["text-decoration-style"],{feature:"text-decoration",browsers:e}));let Rq=oS;N(Rq,e=>F(["text-size-adjust"],{feature:"text-size-adjust",browsers:e}));let Hq=EI;N(Hq,e=>{F(["mask-clip","mask-composite","mask-image","mask-origin","mask-repeat","mask-border-repeat","mask-border-source"],{feature:"css-masks",browsers:e}),F(["mask","mask-position","mask-size","mask-border","mask-border-outset","mask-border-width","mask-border-slice"],{feature:"css-masks",browsers:e})});let Mq=oI;N(Mq,e=>F(["clip-path"],{feature:"css-clip-path",browsers:e}));let Lq=sI;N(Lq,e=>F(["box-decoration-break"],{feature:"css-boxdecorationbreak",browsers:e}));let Tq=nS;N(Tq,e=>F(["object-fit","object-position"],{feature:"object-fit",browsers:e}));let Gq=OI;N(Gq,e=>F(["shape-margin","shape-outside","shape-image-threshold"],{feature:"css-shapes",browsers:e}));let xq=aS;N(xq,e=>F(["text-overflow"],{feature:"text-overflow",browsers:e}));let Kq=uI;N(Kq,e=>F(["@viewport"],{feature:"css-deviceadaptation",browsers:e}));let Qq=II;N(Qq,{match:/( x($| )|a #2)/},e=>F(["@resolution"],{feature:"css-media-resolution",browsers:e}));let Jq=MI;N(Jq,e=>F(["text-align-last"],{feature:"css-text-align-last",browsers:e}));let ew=lI;N(ew,{match:/y x|a x #1/},e=>F(["pixelated"],{props:["image-rendering"],feature:"css-crisp-edges",browsers:e}));N(ew,{match:/a x #2/},e=>F(["image-rendering"],{feature:"css-crisp-edges",browsers:e}));let Cw=yI;N(Cw,e=>F(["border-inline-start","border-inline-end","margin-inline-start","margin-inline-end","padding-inline-start","padding-inline-end"],{feature:"css-logical-props",browsers:e}));N(Cw,{match:/x\s#2/},e=>F(["border-block-start","border-block-end","margin-block-start","margin-block-end","padding-block-start","padding-block-end"],{feature:"css-logical-props",browsers:e}));let Uq=nI;N(Uq,{match:/#2|x/},e=>F(["appearance"],{feature:"css-appearance",browsers:e}));let Vq=RI;N(Vq,e=>F(["scroll-snap-type","scroll-snap-coordinate","scroll-snap-destination","scroll-snap-points-x","scroll-snap-points-y"],{feature:"css-snappoints",browsers:e}));let Wq=FI;N(Wq,e=>F(["flow-into","flow-from","region-fragment"],{feature:"css-regions",browsers:e}));let jq=vI;N(jq,e=>F(["image-set"],{props:["background","background-image","border-image","cursor","mask","mask-image","list-style","list-style-image","content"],feature:"css-image-set",browsers:e}));let Yq=KI;N(Yq,{match:/a|x/},e=>F(["writing-mode"],{feature:"css-writing-mode",browsers:e}));let Xq=cI;N(Xq,e=>F(["cross-fade"],{props:["background","background-image","border-image","mask","list-style","list-style-image","content","mask-image"],feature:"css-cross-fade",browsers:e}));let Zq=PI;N(Zq,e=>F([":read-only",":read-write"],{selector:!0,feature:"css-read-only-write",browsers:e}));let qq=sS;N(qq,e=>F(["text-emphasis","text-emphasis-position","text-emphasis-style","text-emphasis-color"],{feature:"text-emphasis",browsers:e}));let tw=bI;N(tw,e=>{F(["display-grid","inline-grid"],{props:["display"],feature:"css-grid",browsers:e}),F(["grid-template-columns","grid-template-rows","grid-row-start","grid-column-start","grid-row-end","grid-column-end","grid-row","grid-column","grid-area","grid-template","grid-template-areas","place-self"],{feature:"css-grid",browsers:e})});N(tw,{match:/a x/},e=>F(["grid-column-align","grid-row-align"],{feature:"css-grid",browsers:e}));let zq=TI;N(zq,e=>F(["text-spacing"],{feature:"css-text-spacing",browsers:e}));let _q=tI;N(_q,e=>F([":any-link"],{selector:!0,feature:"css-any-link",browsers:e}));let $q=zI;N($q,e=>F(["isolate"],{props:["unicode-bidi"],feature:"css-unicode-bidi",browsers:e}));let Bz=_I;N(Bz,e=>F(["plaintext"],{props:["unicode-bidi"],feature:"css-unicode-bidi",browsers:e}));let ez=qI;N(ez,{match:/y x/},e=>F(["isolate-override"],{props:["unicode-bidi"],feature:"css-unicode-bidi",browsers:e}));let Cz=SI;N(Cz,{match:/a #1/},e=>F(["overscroll-behavior"],{feature:"css-overscroll-behavior",browsers:e}));let tz=LI;N(tz,e=>F(["text-orientation"],{feature:"css-text-orientation",browsers:e}));let nz=kI;N(nz,e=>F(["print-color-adjust","color-adjust"],{feature:"css-print-color-adjust",browsers:e}));let rz=XE;rz.defaults;function tg(e,B){var C=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);B&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),C.push.apply(C,t)}return C}function R(e){for(var B=1;B<arguments.length;B++){var C=arguments[B]!=null?arguments[B]:{};B%2?tg(Object(C),!0).forEach(function(t){HB(e,t,C[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(C)):tg(Object(C)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(C,t))})}return e}function ol(e){return ol=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(B){return typeof B}:function(B){return B&&typeof Symbol=="function"&&B.constructor===Symbol&&B!==Symbol.prototype?"symbol":typeof B},ol(e)}function iz(e,B){if(!(e instanceof B))throw new TypeError("Cannot call a class as a function")}function ng(e,B){for(var C=0;C<B.length;C++){var t=B[C];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function sz(e,B,C){return B&&ng(e.prototype,B),C&&ng(e,C),Object.defineProperty(e,"prototype",{writable:!1}),e}function HB(e,B,C){return B in e?Object.defineProperty(e,B,{value:C,enumerable:!0,configurable:!0,writable:!0}):e[B]=C,e}function zh(e,B){return oz(e)||cz(e,B)||nw(e,B)||dz()}function Ls(e){return az(e)||lz(e)||nw(e)||uz()}function az(e){if(Array.isArray(e))return Id(e)}function oz(e){if(Array.isArray(e))return e}function lz(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function cz(e,B){var C=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(C!=null){var t=[],n=!0,r=!1,i,s;try{for(C=C.call(e);!(n=(i=C.next()).done)&&(t.push(i.value),!(B&&t.length===B));n=!0);}catch(a){r=!0,s=a}finally{try{!n&&C.return!=null&&C.return()}finally{if(r)throw s}}return t}}function nw(e,B){if(e){if(typeof e=="string")return Id(e,B);var C=Object.prototype.toString.call(e).slice(8,-1);if(C==="Object"&&e.constructor&&(C=e.constructor.name),C==="Map"||C==="Set")return Array.from(e);if(C==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C))return Id(e,B)}}function Id(e,B){(B==null||B>e.length)&&(B=e.length);for(var C=0,t=new Array(B);C<B;C++)t[C]=e[C];return t}function uz(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dz(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var rg=function(){},_h={},rw={},iw=null,sw={mark:rg,measure:rg};try{typeof window<"u"&&(_h=window),typeof document<"u"&&(rw=document),typeof MutationObserver<"u"&&(iw=MutationObserver),typeof performance<"u"&&(sw=performance)}catch{}var fz=_h.navigator||{},ig=fz.userAgent,sg=ig===void 0?"":ig,Pt=_h,pB=rw,ag=iw,wa=sw;Pt.document;var jC=!!pB.documentElement&&!!pB.head&&typeof pB.addEventListener=="function"&&typeof pB.createElement=="function",aw=~sg.indexOf("MSIE")||~sg.indexOf("Trident/"),Da,ka,Pa,Fa,Na,KC="___FONT_AWESOME___",Sd=16,ow="fa",lw="svg-inline--fa",hn="data-fa-i2svg",wd="data-fa-pseudo-element",hz="data-fa-pseudo-element-pending",$h="data-prefix",B2="data-icon",og="fontawesome-i2svg",pz="async",mz=["HTML","HEAD","STYLE","SCRIPT"],cw=function(){try{return!0}catch{return!1}}(),fB="classic",IB="sharp",e2=[fB,IB];function Ts(e){return new Proxy(e,{get:function(B,C){return C in B?B[C]:B[fB]}})}var ts=Ts((Da={},HB(Da,fB,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),HB(Da,IB,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Da)),ns=Ts((ka={},HB(ka,fB,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),HB(ka,IB,{solid:"fass",regular:"fasr",light:"fasl"}),ka)),rs=Ts((Pa={},HB(Pa,fB,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),HB(Pa,IB,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Pa)),gz=Ts((Fa={},HB(Fa,fB,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),HB(Fa,IB,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Fa)),bz=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,uw="fa-layers-text",Az=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,vz=Ts((Na={},HB(Na,fB,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),HB(Na,IB,{900:"fass",400:"fasr",300:"fasl"}),Na)),dw=[1,2,3,4,5,6,7,8,9,10],yz=dw.concat([11,12,13,14,15,16,17,18,19,20]),Ez=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Zt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},is=new Set;Object.keys(ns[fB]).map(is.add.bind(is));Object.keys(ns[IB]).map(is.add.bind(is));var Iz=[].concat(e2,Ls(is),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Zt.GROUP,Zt.SWAP_OPACITY,Zt.PRIMARY,Zt.SECONDARY]).concat(dw.map(function(e){return"".concat(e,"x")})).concat(yz.map(function(e){return"w-".concat(e)})),mi=Pt.FontAwesomeConfig||{};function Sz(e){var B=pB.querySelector("script["+e+"]");if(B)return B.getAttribute(e)}function wz(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(pB&&typeof pB.querySelector=="function"){var Dz=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Dz.forEach(function(e){var B=zh(e,2),C=B[0],t=B[1],n=wz(Sz(C));n!=null&&(mi[t]=n)})}var fw={styleDefault:"solid",familyDefault:"classic",cssPrefix:ow,replacementClass:lw,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};mi.familyPrefix&&(mi.cssPrefix=mi.familyPrefix);var Ar=R(R({},fw),mi);Ar.autoReplaceSvg||(Ar.observeMutations=!1);var L={};Object.keys(fw).forEach(function(e){Object.defineProperty(L,e,{enumerable:!0,set:function(B){Ar[e]=B,gi.forEach(function(C){return C(L)})},get:function(){return Ar[e]}})});Object.defineProperty(L,"familyPrefix",{enumerable:!0,set:function(e){Ar.cssPrefix=e,gi.forEach(function(B){return B(L)})},get:function(){return Ar.cssPrefix}});Pt.FontAwesomeConfig=L;var gi=[];function kz(e){return gi.push(e),function(){gi.splice(gi.indexOf(e),1)}}var qC=Sd,cC={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Pz(e){if(!(!e||!jC)){var B=pB.createElement("style");B.setAttribute("type","text/css"),B.innerHTML=e;for(var C=pB.head.childNodes,t=null,n=C.length-1;n>-1;n--){var r=C[n],i=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(t=r)}return pB.head.insertBefore(B,t),e}}var Fz="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ss(){for(var e=12,B="";e-- >0;)B+=Fz[Math.random()*62|0];return B}function Nr(e){for(var B=[],C=(e||[]).length>>>0;C--;)B[C]=e[C];return B}function C2(e){return e.classList?Nr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(B){return B})}function hw(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Nz(e){return Object.keys(e||{}).reduce(function(B,C){return B+"".concat(C,'="').concat(hw(e[C]),'" ')},"").trim()}function sc(e){return Object.keys(e||{}).reduce(function(B,C){return B+"".concat(C,": ").concat(e[C].trim(),";")},"")}function t2(e){return e.size!==cC.size||e.x!==cC.x||e.y!==cC.y||e.rotate!==cC.rotate||e.flipX||e.flipY}function Oz(e){var B=e.transform,C=e.containerWidth,t=e.iconWidth,n={transform:"translate(".concat(C/2," 256)")},r="translate(".concat(B.x*32,", ").concat(B.y*32,") "),i="scale(".concat(B.size/16*(B.flipX?-1:1),", ").concat(B.size/16*(B.flipY?-1:1),") "),s="rotate(".concat(B.rotate," 0 0)"),a={transform:"".concat(r," ").concat(i," ").concat(s)},o={transform:"translate(".concat(t/2*-1," -256)")};return{outer:n,inner:a,path:o}}function Rz(e){var B=e.transform,C=e.width,t=C===void 0?Sd:C,n=e.height,r=n===void 0?Sd:n,i=e.startCentered,s=i===void 0?!1:i,a="";return s&&aw?a+="translate(".concat(B.x/qC-t/2,"em, ").concat(B.y/qC-r/2,"em) "):s?a+="translate(calc(-50% + ".concat(B.x/qC,"em), calc(-50% + ").concat(B.y/qC,"em)) "):a+="translate(".concat(B.x/qC,"em, ").concat(B.y/qC,"em) "),a+="scale(".concat(B.size/qC*(B.flipX?-1:1),", ").concat(B.size/qC*(B.flipY?-1:1),") "),a+="rotate(".concat(B.rotate,"deg) "),a}var Hz=`:root, :host {
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
}`;function pw(){var e=ow,B=lw,C=L.cssPrefix,t=L.replacementClass,n=Hz;if(C!==e||t!==B){var r=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(B),"g");n=n.replace(r,".".concat(C,"-")).replace(i,"--".concat(C,"-")).replace(s,".".concat(t))}return n}var lg=!1;function ku(){L.autoAddCss&&!lg&&(Pz(pw()),lg=!0)}var Mz={mixout:function(){return{dom:{css:pw,insertCss:ku}}},hooks:function(){return{beforeDOMElementCreation:function(){ku()},beforeI2svg:function(){ku()}}}},QC=Pt||{};QC[KC]||(QC[KC]={});QC[KC].styles||(QC[KC].styles={});QC[KC].hooks||(QC[KC].hooks={});QC[KC].shims||(QC[KC].shims=[]);var $e=QC[KC],mw=[],Lz=function e(){pB.removeEventListener("DOMContentLoaded",e),ll=1,mw.map(function(B){return B()})},ll=!1;jC&&(ll=(pB.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(pB.readyState),ll||pB.addEventListener("DOMContentLoaded",Lz));function Tz(e){jC&&(ll?setTimeout(e,0):mw.push(e))}function Gs(e){var B=e.tag,C=e.attributes,t=C===void 0?{}:C,n=e.children,r=n===void 0?[]:n;return typeof e=="string"?hw(e):"<".concat(B," ").concat(Nz(t),">").concat(r.map(Gs).join(""),"</").concat(B,">")}function cg(e,B,C){if(e&&e[B]&&e[B][C])return{prefix:B,iconName:C,icon:e[B][C]}}var Gz=function(e,B){return function(C,t,n,r){return e.call(B,C,t,n,r)}},Pu=function(e,B,C,t){var n=Object.keys(e),r=n.length,i=t!==void 0?Gz(B,t):B,s,a,o;for(C===void 0?(s=1,o=e[n[0]]):(s=0,o=C);s<r;s++)a=n[s],o=i(o,e[a],a,e);return o};function xz(e){for(var B=[],C=0,t=e.length;C<t;){var n=e.charCodeAt(C++);if(n>=55296&&n<=56319&&C<t){var r=e.charCodeAt(C++);(r&64512)==56320?B.push(((n&1023)<<10)+(r&1023)+65536):(B.push(n),C--)}else B.push(n)}return B}function gw(e){var B=xz(e);return B.length===1?B[0].toString(16):null}function Kz(e,B){var C=e.length,t=e.charCodeAt(B),n;return t>=55296&&t<=56319&&C>B+1&&(n=e.charCodeAt(B+1),n>=56320&&n<=57343)?(t-55296)*1024+n-56320+65536:t}function ug(e){return Object.keys(e).reduce(function(B,C){var t=e[C],n=!!t.icon;return n?B[t.iconName]=t.icon:B[C]=t,B},{})}function Dd(e,B){var C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=C.skipHooks,n=t===void 0?!1:t,r=ug(B);typeof $e.hooks.addPack=="function"&&!n?$e.hooks.addPack(e,ug(B)):$e.styles[e]=R(R({},$e.styles[e]||{}),r),e==="fas"&&Dd("fa",B)}var Oa,Ra,Ha,Un=$e.styles,Qz=$e.shims,Jz=(Oa={},HB(Oa,fB,Object.values(rs[fB])),HB(Oa,IB,Object.values(rs[IB])),Oa),n2=null,bw={},Aw={},vw={},yw={},Ew={},Uz=(Ra={},HB(Ra,fB,Object.keys(ts[fB])),HB(Ra,IB,Object.keys(ts[IB])),Ra);function Vz(e){return~Iz.indexOf(e)}function Wz(e,B){var C=B.split("-"),t=C[0],n=C.slice(1).join("-");return t===e&&n!==""&&!Vz(n)?n:null}var Iw=function(){var e=function(t){return Pu(Un,function(n,r,i){return n[i]=Pu(r,t,{}),n},{})};bw=e(function(t,n,r){if(n[3]&&(t[n[3]]=r),n[2]){var i=n[2].filter(function(s){return typeof s=="number"});i.forEach(function(s){t[s.toString(16)]=r})}return t}),Aw=e(function(t,n,r){if(t[r]=r,n[2]){var i=n[2].filter(function(s){return typeof s=="string"});i.forEach(function(s){t[s]=r})}return t}),Ew=e(function(t,n,r){var i=n[2];return t[r]=r,i.forEach(function(s){t[s]=r}),t});var B="far"in Un||L.autoFetchSvg,C=Pu(Qz,function(t,n){var r=n[0],i=n[1],s=n[2];return i==="far"&&!B&&(i="fas"),typeof r=="string"&&(t.names[r]={prefix:i,iconName:s}),typeof r=="number"&&(t.unicodes[r.toString(16)]={prefix:i,iconName:s}),t},{names:{},unicodes:{}});vw=C.names,yw=C.unicodes,n2=ac(L.styleDefault,{family:L.familyDefault})};kz(function(e){n2=ac(e.styleDefault,{family:L.familyDefault})});Iw();function r2(e,B){return(bw[e]||{})[B]}function jz(e,B){return(Aw[e]||{})[B]}function qt(e,B){return(Ew[e]||{})[B]}function Sw(e){return vw[e]||{prefix:null,iconName:null}}function Yz(e){var B=yw[e],C=r2("fas",e);return B||(C?{prefix:"fas",iconName:C}:null)||{prefix:null,iconName:null}}function Ft(){return n2}var i2=function(){return{prefix:null,iconName:null,rest:[]}};function ac(e){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},C=B.family,t=C===void 0?fB:C,n=ts[t][e],r=ns[t][e]||ns[t][n],i=e in $e.styles?e:null;return r||i||null}var dg=(Ha={},HB(Ha,fB,Object.keys(rs[fB])),HB(Ha,IB,Object.keys(rs[IB])),Ha);function oc(e){var B,C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=C.skipLookups,n=t===void 0?!1:t,r=(B={},HB(B,fB,"".concat(L.cssPrefix,"-").concat(fB)),HB(B,IB,"".concat(L.cssPrefix,"-").concat(IB)),B),i=null,s=fB;(e.includes(r[fB])||e.some(function(o){return dg[fB].includes(o)}))&&(s=fB),(e.includes(r[IB])||e.some(function(o){return dg[IB].includes(o)}))&&(s=IB);var a=e.reduce(function(o,c){var l=Wz(L.cssPrefix,c);if(Un[c]?(c=Jz[s].includes(c)?gz[s][c]:c,i=c,o.prefix=c):Uz[s].indexOf(c)>-1?(i=c,o.prefix=ac(c,{family:s})):l?o.iconName=l:c!==L.replacementClass&&c!==r[fB]&&c!==r[IB]&&o.rest.push(c),!n&&o.prefix&&o.iconName){var u=i==="fa"?Sw(o.iconName):{},m=qt(o.prefix,o.iconName);u.prefix&&(i=null),o.iconName=u.iconName||m||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!Un.far&&Un.fas&&!L.autoFetchSvg&&(o.prefix="fas")}return o},i2());return(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(a.prefix="fad"),!a.prefix&&s===IB&&(Un.fass||L.autoFetchSvg)&&(a.prefix="fass",a.iconName=qt(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||i==="fa")&&(a.prefix=Ft()||"fas"),a}var Xz=function(){function e(){iz(this,e),this.definitions={}}return sz(e,[{key:"add",value:function(){for(var B=this,C=arguments.length,t=new Array(C),n=0;n<C;n++)t[n]=arguments[n];var r=t.reduce(this._pullDefinitions,{});Object.keys(r).forEach(function(i){B.definitions[i]=R(R({},B.definitions[i]||{}),r[i]),Dd(i,r[i]);var s=rs[fB][i];s&&Dd(s,r[i]),Iw()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(B,C){var t=C.prefix&&C.iconName&&C.icon?{0:C}:C;return Object.keys(t).map(function(n){var r=t[n],i=r.prefix,s=r.iconName,a=r.icon,o=a[2];B[i]||(B[i]={}),o.length>0&&o.forEach(function(c){typeof c=="string"&&(B[i][c]=a)}),B[i][s]=a}),B}}]),e}(),fg=[],Vn={},tr={},Zz=Object.keys(tr);function qz(e,B){var C=B.mixoutsTo;return fg=e,Vn={},Object.keys(tr).forEach(function(t){Zz.indexOf(t)===-1&&delete tr[t]}),fg.forEach(function(t){var n=t.mixout?t.mixout():{};if(Object.keys(n).forEach(function(i){typeof n[i]=="function"&&(C[i]=n[i]),ol(n[i])==="object"&&Object.keys(n[i]).forEach(function(s){C[i]||(C[i]={}),C[i][s]=n[i][s]})}),t.hooks){var r=t.hooks();Object.keys(r).forEach(function(i){Vn[i]||(Vn[i]=[]),Vn[i].push(r[i])})}t.provides&&t.provides(tr)}),C}function kd(e,B){for(var C=arguments.length,t=new Array(C>2?C-2:0),n=2;n<C;n++)t[n-2]=arguments[n];var r=Vn[e]||[];return r.forEach(function(i){B=i.apply(null,[B].concat(t))}),B}function pn(e){for(var B=arguments.length,C=new Array(B>1?B-1:0),t=1;t<B;t++)C[t-1]=arguments[t];var n=Vn[e]||[];n.forEach(function(r){r.apply(null,C)})}function JC(){var e=arguments[0],B=Array.prototype.slice.call(arguments,1);return tr[e]?tr[e].apply(null,B):void 0}function Pd(e){e.prefix==="fa"&&(e.prefix="fas");var B=e.iconName,C=e.prefix||Ft();if(B)return B=qt(C,B)||B,cg(ww.definitions,C,B)||cg($e.styles,C,B)}var ww=new Xz,zz=function(){L.autoReplaceSvg=!1,L.observeMutations=!1,pn("noAuto")},_z={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return jC?(pn("beforeI2svg",e),JC("pseudoElements2svg",e),JC("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},B=e.autoReplaceSvgRoot;L.autoReplaceSvg===!1&&(L.autoReplaceSvg=!0),L.observeMutations=!0,Tz(function(){B9({autoReplaceSvgRoot:B}),pn("watch",e)})}},$z={icon:function(e){if(e===null)return null;if(ol(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:qt(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var B=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],C=ac(e[0]);return{prefix:C,iconName:qt(C,B)||B}}if(typeof e=="string"&&(e.indexOf("".concat(L.cssPrefix,"-"))>-1||e.match(bz))){var t=oc(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||Ft(),iconName:qt(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){var n=Ft();return{prefix:n,iconName:qt(n,e)||e}}}},Ne={noAuto:zz,config:L,dom:_z,parse:$z,library:ww,findIconDefinition:Pd,toHtml:Gs},B9=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},B=e.autoReplaceSvgRoot,C=B===void 0?pB:B;(Object.keys($e.styles).length>0||L.autoFetchSvg)&&jC&&L.autoReplaceSvg&&Ne.dom.i2svg({node:C})};function lc(e,B){return Object.defineProperty(e,"abstract",{get:B}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(C){return Gs(C)})}}),Object.defineProperty(e,"node",{get:function(){if(jC){var C=pB.createElement("div");return C.innerHTML=e.html,C.children}}}),e}function e9(e){var B=e.children,C=e.main,t=e.mask,n=e.attributes,r=e.styles,i=e.transform;if(t2(i)&&C.found&&!t.found){var s=C.width,a=C.height,o={x:s/a/2,y:.5};n.style=sc(R(R({},r),{},{"transform-origin":"".concat(o.x+i.x/16,"em ").concat(o.y+i.y/16,"em")}))}return[{tag:"svg",attributes:n,children:B}]}function C9(e){var B=e.prefix,C=e.iconName,t=e.children,n=e.attributes,r=e.symbol,i=r===!0?"".concat(B,"-").concat(L.cssPrefix,"-").concat(C):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:R(R({},n),{},{id:i}),children:t}]}]}function s2(e){var B=e.icons,C=B.main,t=B.mask,n=e.prefix,r=e.iconName,i=e.transform,s=e.symbol,a=e.title,o=e.maskId,c=e.titleId,l=e.extra,u=e.watchable,m=u===void 0?!1:u,d=t.found?t:C,h=d.width,g=d.height,f=n==="fak",p=[L.replacementClass,r?"".concat(L.cssPrefix,"-").concat(r):""].filter(function(w){return l.classes.indexOf(w)===-1}).filter(function(w){return w!==""||!!w}).concat(l.classes).join(" "),b={children:[],attributes:R(R({},l.attributes),{},{"data-prefix":n,"data-icon":r,class:p,role:l.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(g)})},A=f&&!~l.classes.indexOf("fa-fw")?{width:"".concat(h/g*16*.0625,"em")}:{};m&&(b.attributes[hn]=""),a&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(c||ss())},children:[a]}),delete b.attributes.title);var y=R(R({},b),{},{prefix:n,iconName:r,main:C,mask:t,maskId:o,transform:i,symbol:s,styles:R(R({},A),l.styles)}),I=t.found&&C.found?JC("generateAbstractMask",y)||{children:[],attributes:{}}:JC("generateAbstractIcon",y)||{children:[],attributes:{}},E=I.children,v=I.attributes;return y.children=E,y.attributes=v,s?C9(y):e9(y)}function hg(e){var B=e.content,C=e.width,t=e.height,n=e.transform,r=e.title,i=e.extra,s=e.watchable,a=s===void 0?!1:s,o=R(R(R({},i.attributes),r?{title:r}:{}),{},{class:i.classes.join(" ")});a&&(o[hn]="");var c=R({},i.styles);t2(n)&&(c.transform=Rz({transform:n,startCentered:!0,width:C,height:t}),c["-webkit-transform"]=c.transform);var l=sc(c);l.length>0&&(o.style=l);var u=[];return u.push({tag:"span",attributes:o,children:[B]}),r&&u.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),u}function t9(e){var B=e.content,C=e.title,t=e.extra,n=R(R(R({},t.attributes),C?{title:C}:{}),{},{class:t.classes.join(" ")}),r=sc(t.styles);r.length>0&&(n.style=r);var i=[];return i.push({tag:"span",attributes:n,children:[B]}),C&&i.push({tag:"span",attributes:{class:"sr-only"},children:[C]}),i}var Fu=$e.styles;function Fd(e){var B=e[0],C=e[1],t=e.slice(4),n=zh(t,1),r=n[0],i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(L.cssPrefix,"-").concat(Zt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(Zt.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(Zt.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:B,height:C,icon:i}}var n9={found:!1,width:512,height:512};function r9(e,B){!cw&&!L.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(B,'" is missing.'))}function Nd(e,B){var C=B;return B==="fa"&&L.styleDefault!==null&&(B=Ft()),new Promise(function(t,n){if(JC("missingIconAbstract"),C==="fa"){var r=Sw(e)||{};e=r.iconName||e,B=r.prefix||B}if(e&&B&&Fu[B]&&Fu[B][e]){var i=Fu[B][e];return t(Fd(i))}r9(e,B),t(R(R({},n9),{},{icon:L.showMissingIcons&&e?JC("missingIconAbstract")||{}:{}}))})}var pg=function(){},Od=L.measurePerformance&&wa&&wa.mark&&wa.measure?wa:{mark:pg,measure:pg},ei='FA "6.4.0"',i9=function(e){return Od.mark("".concat(ei," ").concat(e," begins")),function(){return Dw(e)}},Dw=function(e){Od.mark("".concat(ei," ").concat(e," ends")),Od.measure("".concat(ei," ").concat(e),"".concat(ei," ").concat(e," begins"),"".concat(ei," ").concat(e," ends"))},a2={begin:i9,end:Dw},eo=function(){};function mg(e){var B=e.getAttribute?e.getAttribute(hn):null;return typeof B=="string"}function s9(e){var B=e.getAttribute?e.getAttribute($h):null,C=e.getAttribute?e.getAttribute(B2):null;return B&&C}function a9(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(L.replacementClass)}function o9(){if(L.autoReplaceSvg===!0)return Co.replace;var e=Co[L.autoReplaceSvg];return e||Co.replace}function l9(e){return pB.createElementNS("http://www.w3.org/2000/svg",e)}function c9(e){return pB.createElement(e)}function kw(e){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},C=B.ceFn,t=C===void 0?e.tag==="svg"?l9:c9:C;if(typeof e=="string")return pB.createTextNode(e);var n=t(e.tag);Object.keys(e.attributes||[]).forEach(function(i){n.setAttribute(i,e.attributes[i])});var r=e.children||[];return r.forEach(function(i){n.appendChild(kw(i,{ceFn:t}))}),n}function u9(e){var B=" ".concat(e.outerHTML," ");return B="".concat(B,"Font Awesome fontawesome.com "),B}var Co={replace:function(e){var B=e[0];if(B.parentNode)if(e[1].forEach(function(t){B.parentNode.insertBefore(kw(t),B)}),B.getAttribute(hn)===null&&L.keepOriginalSource){var C=pB.createComment(u9(B));B.parentNode.replaceChild(C,B)}else B.remove()},nest:function(e){var B=e[0],C=e[1];if(~C2(B).indexOf(L.replacementClass))return Co.replace(e);var t=new RegExp("".concat(L.cssPrefix,"-.*"));if(delete C[0].attributes.id,C[0].attributes.class){var n=C[0].attributes.class.split(" ").reduce(function(i,s){return s===L.replacementClass||s.match(t)?i.toSvg.push(s):i.toNode.push(s),i},{toNode:[],toSvg:[]});C[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?B.removeAttribute("class"):B.setAttribute("class",n.toNode.join(" "))}var r=C.map(function(i){return Gs(i)}).join(`
`);B.setAttribute(hn,""),B.innerHTML=r}};function gg(e){e()}function Pw(e,B){var C=typeof B=="function"?B:eo;if(e.length===0)C();else{var t=gg;L.mutateApproach===pz&&(t=Pt.requestAnimationFrame||gg),t(function(){var n=o9(),r=a2.begin("mutate");e.map(n),r(),C()})}}var o2=!1;function Fw(){o2=!0}function Rd(){o2=!1}var cl=null;function bg(e){if(ag&&L.observeMutations){var B=e.treeCallback,C=B===void 0?eo:B,t=e.nodeCallback,n=t===void 0?eo:t,r=e.pseudoElementsCallback,i=r===void 0?eo:r,s=e.observeMutationsRoot,a=s===void 0?pB:s;cl=new ag(function(o){if(!o2){var c=Ft();Nr(o).forEach(function(l){if(l.type==="childList"&&l.addedNodes.length>0&&!mg(l.addedNodes[0])&&(L.searchPseudoElements&&i(l.target),C(l.target)),l.type==="attributes"&&l.target.parentNode&&L.searchPseudoElements&&i(l.target.parentNode),l.type==="attributes"&&mg(l.target)&&~Ez.indexOf(l.attributeName))if(l.attributeName==="class"&&s9(l.target)){var u=oc(C2(l.target)),m=u.prefix,d=u.iconName;l.target.setAttribute($h,m||c),d&&l.target.setAttribute(B2,d)}else a9(l.target)&&n(l.target)})}}),jC&&cl.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function d9(){cl&&cl.disconnect()}function f9(e){var B=e.getAttribute("style"),C=[];return B&&(C=B.split(";").reduce(function(t,n){var r=n.split(":"),i=r[0],s=r.slice(1);return i&&s.length>0&&(t[i]=s.join(":").trim()),t},{})),C}function h9(e){var B=e.getAttribute("data-prefix"),C=e.getAttribute("data-icon"),t=e.innerText!==void 0?e.innerText.trim():"",n=oc(C2(e));return n.prefix||(n.prefix=Ft()),B&&C&&(n.prefix=B,n.iconName=C),n.iconName&&n.prefix||(n.prefix&&t.length>0&&(n.iconName=jz(n.prefix,e.innerText)||r2(n.prefix,gw(e.innerText))),!n.iconName&&L.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=e.firstChild.data)),n}function p9(e){var B=Nr(e.attributes).reduce(function(n,r){return n.name!=="class"&&n.name!=="style"&&(n[r.name]=r.value),n},{}),C=e.getAttribute("title"),t=e.getAttribute("data-fa-title-id");return L.autoA11y&&(C?B["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(t||ss()):(B["aria-hidden"]="true",B.focusable="false")),B}function m9(){return{iconName:null,title:null,titleId:null,prefix:null,transform:cC,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ag(e){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},C=h9(e),t=C.iconName,n=C.prefix,r=C.rest,i=p9(e),s=kd("parseNodeAttributes",{},e),a=B.styleParser?f9(e):[];return R({iconName:t,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:n,transform:cC,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:a,attributes:i}},s)}var g9=$e.styles;function Nw(e){var B=L.autoReplaceSvg==="nest"?Ag(e,{styleParser:!1}):Ag(e);return~B.extra.classes.indexOf(uw)?JC("generateLayersText",e,B):JC("generateSvgReplacementMutation",e,B)}var Nt=new Set;e2.map(function(e){Nt.add("fa-".concat(e))});Object.keys(ts[fB]).map(Nt.add.bind(Nt));Object.keys(ts[IB]).map(Nt.add.bind(Nt));Nt=Ls(Nt);function vg(e){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!jC)return Promise.resolve();var C=pB.documentElement.classList,t=function(c){return C.add("".concat(og,"-").concat(c))},n=function(c){return C.remove("".concat(og,"-").concat(c))},r=L.autoFetchSvg?Nt:e2.map(function(c){return"fa-".concat(c)}).concat(Object.keys(g9));r.includes("fa")||r.push("fa");var i=[".".concat(uw,":not([").concat(hn,"])")].concat(r.map(function(c){return".".concat(c,":not([").concat(hn,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=Nr(e.querySelectorAll(i))}catch{}if(s.length>0)t("pending"),n("complete");else return Promise.resolve();var a=a2.begin("onTree"),o=s.reduce(function(c,l){try{var u=Nw(l);u&&c.push(u)}catch(m){cw||m.name==="MissingIcon"&&console.error(m)}return c},[]);return new Promise(function(c,l){Promise.all(o).then(function(u){Pw(u,function(){t("active"),t("complete"),n("pending"),typeof B=="function"&&B(),a(),c()})}).catch(function(u){a(),l(u)})})}function b9(e){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Nw(e).then(function(C){C&&Pw([C],B)})}function A9(e){return function(B){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=(B||{}).icon?B:Pd(B||{}),n=C.mask;return n&&(n=(n||{}).icon?n:Pd(n||{})),e(t,R(R({},C),{},{mask:n}))}}var v9=function(e){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},C=B.transform,t=C===void 0?cC:C,n=B.symbol,r=n===void 0?!1:n,i=B.mask,s=i===void 0?null:i,a=B.maskId,o=a===void 0?null:a,c=B.title,l=c===void 0?null:c,u=B.titleId,m=u===void 0?null:u,d=B.classes,h=d===void 0?[]:d,g=B.attributes,f=g===void 0?{}:g,p=B.styles,b=p===void 0?{}:p;if(e){var A=e.prefix,y=e.iconName,I=e.icon;return lc(R({type:"icon"},e),function(){return pn("beforeDOMElementCreation",{iconDefinition:e,params:B}),L.autoA11y&&(l?f["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(m||ss()):(f["aria-hidden"]="true",f.focusable="false")),s2({icons:{main:Fd(I),mask:s?Fd(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:y,transform:R(R({},cC),t),symbol:r,title:l,maskId:o,titleId:m,extra:{attributes:f,styles:b,classes:h}})})}},y9={mixout:function(){return{icon:A9(v9)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=vg,e.nodeCallback=b9,e}}},provides:function(e){e.i2svg=function(B){var C=B.node,t=C===void 0?pB:C,n=B.callback,r=n===void 0?function(){}:n;return vg(t,r)},e.generateSvgReplacementMutation=function(B,C){var t=C.iconName,n=C.title,r=C.titleId,i=C.prefix,s=C.transform,a=C.symbol,o=C.mask,c=C.maskId,l=C.extra;return new Promise(function(u,m){Promise.all([Nd(t,i),o.iconName?Nd(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(d){var h=zh(d,2),g=h[0],f=h[1];u([B,s2({icons:{main:g,mask:f},prefix:i,iconName:t,transform:s,symbol:a,maskId:c,title:n,titleId:r,extra:l,watchable:!0})])}).catch(m)})},e.generateAbstractIcon=function(B){var C=B.children,t=B.attributes,n=B.main,r=B.transform,i=B.styles,s=sc(i);s.length>0&&(t.style=s);var a;return t2(r)&&(a=JC("generateAbstractTransformGrouping",{main:n,transform:r,containerWidth:n.width,iconWidth:n.width})),C.push(a||n.icon),{children:C,attributes:t}}}},E9={mixout:function(){return{layer:function(e){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},C=B.classes,t=C===void 0?[]:C;return lc({type:"layer"},function(){pn("beforeDOMElementCreation",{assembler:e,params:B});var n=[];return e(function(r){Array.isArray(r)?r.map(function(i){n=n.concat(i.abstract)}):n=n.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(L.cssPrefix,"-layers")].concat(Ls(t)).join(" ")},children:n}]})}}}},I9={mixout:function(){return{counter:function(e){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},C=B.title,t=C===void 0?null:C,n=B.classes,r=n===void 0?[]:n,i=B.attributes,s=i===void 0?{}:i,a=B.styles,o=a===void 0?{}:a;return lc({type:"counter",content:e},function(){return pn("beforeDOMElementCreation",{content:e,params:B}),t9({content:e.toString(),title:t,extra:{attributes:s,styles:o,classes:["".concat(L.cssPrefix,"-layers-counter")].concat(Ls(r))}})})}}}},S9={mixout:function(){return{text:function(e){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},C=B.transform,t=C===void 0?cC:C,n=B.title,r=n===void 0?null:n,i=B.classes,s=i===void 0?[]:i,a=B.attributes,o=a===void 0?{}:a,c=B.styles,l=c===void 0?{}:c;return lc({type:"text",content:e},function(){return pn("beforeDOMElementCreation",{content:e,params:B}),hg({content:e,transform:R(R({},cC),t),title:r,extra:{attributes:o,styles:l,classes:["".concat(L.cssPrefix,"-layers-text")].concat(Ls(s))}})})}}},provides:function(e){e.generateLayersText=function(B,C){var t=C.title,n=C.transform,r=C.extra,i=null,s=null;if(aw){var a=parseInt(getComputedStyle(B).fontSize,10),o=B.getBoundingClientRect();i=o.width/a,s=o.height/a}return L.autoA11y&&!t&&(r.attributes["aria-hidden"]="true"),Promise.resolve([B,hg({content:B.innerHTML,width:i,height:s,transform:n,title:t,extra:r,watchable:!0})])}}},w9=new RegExp('"',"ug"),yg=[1105920,1112319];function D9(e){var B=e.replace(w9,""),C=Kz(B,0),t=C>=yg[0]&&C<=yg[1],n=B.length===2?B[0]===B[1]:!1;return{value:gw(n?B[0]:B),isSecondary:t||n}}function Eg(e,B){var C="".concat(hz).concat(B.replace(":","-"));return new Promise(function(t,n){if(e.getAttribute(C)!==null)return t();var r=Nr(e.children),i=r.filter(function(E){return E.getAttribute(wd)===B})[0],s=Pt.getComputedStyle(e,B),a=s.getPropertyValue("font-family").match(Az),o=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(i&&!a)return e.removeChild(i),t();if(a&&c!=="none"&&c!==""){var l=s.getPropertyValue("content"),u=~["Sharp"].indexOf(a[2])?IB:fB,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(a[2])?ns[u][a[2].toLowerCase()]:vz[u][o],d=D9(l),h=d.value,g=d.isSecondary,f=a[0].startsWith("FontAwesome"),p=r2(m,h),b=p;if(f){var A=Yz(h);A.iconName&&A.prefix&&(p=A.iconName,m=A.prefix)}if(p&&!g&&(!i||i.getAttribute($h)!==m||i.getAttribute(B2)!==b)){e.setAttribute(C,b),i&&e.removeChild(i);var y=m9(),I=y.extra;I.attributes[wd]=B,Nd(p,m).then(function(E){var v=s2(R(R({},y),{},{icons:{main:E,mask:i2()},prefix:m,iconName:b,extra:I,watchable:!0})),w=pB.createElement("svg");B==="::before"?e.insertBefore(w,e.firstChild):e.appendChild(w),w.outerHTML=v.map(function(M){return Gs(M)}).join(`
`),e.removeAttribute(C),t()}).catch(n)}else t()}else t()})}function k9(e){return Promise.all([Eg(e,"::before"),Eg(e,"::after")])}function P9(e){return e.parentNode!==document.head&&!~mz.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(wd)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ig(e){if(jC)return new Promise(function(B,C){var t=Nr(e.querySelectorAll("*")).filter(P9).map(k9),n=a2.begin("searchPseudoElements");Fw(),Promise.all(t).then(function(){n(),Rd(),B()}).catch(function(){n(),Rd(),C()})})}var F9={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Ig,e}}},provides:function(e){e.pseudoElements2svg=function(B){var C=B.node,t=C===void 0?pB:C;L.searchPseudoElements&&Ig(t)}}},Sg=!1,N9={mixout:function(){return{dom:{unwatch:function(){Fw(),Sg=!0}}}},hooks:function(){return{bootstrap:function(){bg(kd("mutationObserverCallbacks",{}))},noAuto:function(){d9()},watch:function(e){var B=e.observeMutationsRoot;Sg?Rd():bg(kd("mutationObserverCallbacks",{observeMutationsRoot:B}))}}}},wg=function(e){var B={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(C,t){var n=t.toLowerCase().split("-"),r=n[0],i=n.slice(1).join("-");if(r&&i==="h")return C.flipX=!0,C;if(r&&i==="v")return C.flipY=!0,C;if(i=parseFloat(i),isNaN(i))return C;switch(r){case"grow":C.size=C.size+i;break;case"shrink":C.size=C.size-i;break;case"left":C.x=C.x-i;break;case"right":C.x=C.x+i;break;case"up":C.y=C.y-i;break;case"down":C.y=C.y+i;break;case"rotate":C.rotate=C.rotate+i;break}return C},B)},O9={mixout:function(){return{parse:{transform:function(e){return wg(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,B){var C=B.getAttribute("data-fa-transform");return C&&(e.transform=wg(C)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(B){var C=B.main,t=B.transform,n=B.containerWidth,r=B.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(s," ").concat(a," ").concat(o)},l={transform:"translate(".concat(r/2*-1," -256)")},u={outer:i,inner:c,path:l};return{tag:"g",attributes:R({},u.outer),children:[{tag:"g",attributes:R({},u.inner),children:[{tag:C.icon.tag,children:C.icon.children,attributes:R(R({},C.icon.attributes),u.path)}]}]}}}},Nu={x:0,y:0,width:"100%",height:"100%"};function Dg(e){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||B)&&(e.attributes.fill="black"),e}function R9(e){return e.tag==="g"?e.children:[e]}var H9={hooks:function(){return{parseNodeAttributes:function(e,B){var C=B.getAttribute("data-fa-mask"),t=C?oc(C.split(" ").map(function(n){return n.trim()})):i2();return t.prefix||(t.prefix=Ft()),e.mask=t,e.maskId=B.getAttribute("data-fa-mask-id"),e}}},provides:function(e){e.generateAbstractMask=function(B){var C=B.children,t=B.attributes,n=B.main,r=B.mask,i=B.maskId,s=B.transform,a=n.width,o=n.icon,c=r.width,l=r.icon,u=Oz({transform:s,containerWidth:c,iconWidth:a}),m={tag:"rect",attributes:R(R({},Nu),{},{fill:"white"})},d=o.children?{children:o.children.map(Dg)}:{},h={tag:"g",attributes:R({},u.inner),children:[Dg(R({tag:o.tag,attributes:R(R({},o.attributes),u.path)},d))]},g={tag:"g",attributes:R({},u.outer),children:[h]},f="mask-".concat(i||ss()),p="clip-".concat(i||ss()),b={tag:"mask",attributes:R(R({},Nu),{},{id:f,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,g]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:p},children:R9(l)},b]};return C.push(A,{tag:"rect",attributes:R({fill:"currentColor","clip-path":"url(#".concat(p,")"),mask:"url(#".concat(f,")")},Nu)}),{children:C,attributes:t}}}},M9={provides:function(e){var B=!1;Pt.matchMedia&&(B=Pt.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var C=[],t={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};C.push({tag:"path",attributes:R(R({},t),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var r=R(R({},n),{},{attributeName:"opacity"}),i={tag:"circle",attributes:R(R({},t),{},{cx:"256",cy:"364",r:"28"}),children:[]};return B||i.children.push({tag:"animate",attributes:R(R({},n),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:R(R({},r),{},{values:"1;0;1;1;0;1;"})}),C.push(i),C.push({tag:"path",attributes:R(R({},t),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:B?[]:[{tag:"animate",attributes:R(R({},r),{},{values:"1;0;0;0;0;1;"})}]}),B||C.push({tag:"path",attributes:R(R({},t),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:R(R({},r),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:C}}}},L9={hooks:function(){return{parseNodeAttributes:function(e,B){var C=B.getAttribute("data-fa-symbol"),t=C===null?!1:C===""?!0:C;return e.symbol=t,e}}}},T9=[Mz,y9,E9,I9,S9,F9,N9,O9,H9,M9,L9];qz(T9,{mixoutsTo:Ne});Ne.noAuto;Ne.config;Ne.library;Ne.dom;var Hd=Ne.parse;Ne.findIconDefinition;Ne.toHtml;var G9=Ne.icon;Ne.layer;Ne.text;Ne.counter;var x9={prefix:"fas",iconName:"bath",icon:[512,512,[128705,"bathtub"],"f2cd","M96 77.3c0-7.3 5.9-13.3 13.3-13.3c3.5 0 6.9 1.4 9.4 3.9l14.9 14.9C130 91.8 128 101.7 128 112c0 19.9 7.2 38 19.2 52c-5.3 9.2-4 21.1 3.8 29c9.4 9.4 24.6 9.4 33.9 0L289 89c9.4-9.4 9.4-24.6 0-33.9c-7.9-7.9-19.8-9.1-29-3.8C246 39.2 227.9 32 208 32c-10.3 0-20.2 2-29.2 5.5L163.9 22.6C149.4 8.1 129.7 0 109.3 0C66.6 0 32 34.6 32 77.3V256c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H96V77.3zM32 352v16c0 28.4 12.4 54 32 71.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V464H384v16c0 17.7 14.3 32 32 32s32-14.3 32-32V439.6c19.6-17.6 32-43.1 32-71.6V352H32z"]},kg={prefix:"fas",iconName:"ruler",icon:[512,512,[128207],"f545","M177.9 494.1c-18.7 18.7-49.1 18.7-67.9 0L17.9 401.9c-18.7-18.7-18.7-49.1 0-67.9l50.7-50.7 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 50.7-50.7c18.7-18.7 49.1-18.7 67.9 0l92.1 92.1c18.7 18.7 18.7 49.1 0 67.9L177.9 494.1z"]},K9={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},Q9=K9,J9={prefix:"fas",iconName:"bed",icon:[640,512,[128716],"f236","M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"]},U9={prefix:"fas",iconName:"building",icon:[384,512,[127970,61687],"f1ad","M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"]},Pg={prefix:"fas",iconName:"calendar",icon:[448,512,[128197,128198],"f133","M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"]},V9={prefix:"fas",iconName:"dollar-sign",icon:[320,512,[128178,61781,"dollar","usd"],"24","M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"]},W={},W9={get exports(){return W},set exports(e){W=e}},j9="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Y9=j9,X9=Y9;function Ow(){}function Rw(){}Rw.resetWarningCache=Ow;var Z9=function(){function e(t,n,r,i,s,a){if(a!==X9){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}e.isRequired=e;function B(){return e}var C={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:B,element:e,elementType:e,instanceOf:B,node:e,objectOf:B,oneOf:B,oneOfType:B,shape:B,exact:B,checkPropTypes:Rw,resetWarningCache:Ow};return C.PropTypes=C,C};W9.exports=Z9();function Fg(e,B){var C=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);B&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),C.push.apply(C,t)}return C}function at(e){for(var B=1;B<arguments.length;B++){var C=arguments[B]!=null?arguments[B]:{};B%2?Fg(Object(C),!0).forEach(function(t){Wn(e,t,C[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(C)):Fg(Object(C)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(C,t))})}return e}function ul(e){return ul=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(B){return typeof B}:function(B){return B&&typeof Symbol=="function"&&B.constructor===Symbol&&B!==Symbol.prototype?"symbol":typeof B},ul(e)}function Wn(e,B,C){return B in e?Object.defineProperty(e,B,{value:C,enumerable:!0,configurable:!0,writable:!0}):e[B]=C,e}function q9(e,B){if(e==null)return{};var C={},t=Object.keys(e),n,r;for(r=0;r<t.length;r++)n=t[r],!(B.indexOf(n)>=0)&&(C[n]=e[n]);return C}function z9(e,B){if(e==null)return{};var C=q9(e,B),t,n;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],!(B.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(C[t]=e[t])}return C}function Md(e){return _9(e)||$9(e)||B_(e)||e_()}function _9(e){if(Array.isArray(e))return Ld(e)}function $9(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function B_(e,B){if(e){if(typeof e=="string")return Ld(e,B);var C=Object.prototype.toString.call(e).slice(8,-1);if(C==="Object"&&e.constructor&&(C=e.constructor.name),C==="Map"||C==="Set")return Array.from(e);if(C==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C))return Ld(e,B)}}function Ld(e,B){(B==null||B>e.length)&&(B=e.length);for(var C=0,t=new Array(B);C<B;C++)t[C]=e[C];return t}function e_(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C_(e){var B,C=e.beat,t=e.fade,n=e.beatFade,r=e.bounce,i=e.shake,s=e.flash,a=e.spin,o=e.spinPulse,c=e.spinReverse,l=e.pulse,u=e.fixedWidth,m=e.inverse,d=e.border,h=e.listItem,g=e.flip,f=e.size,p=e.rotation,b=e.pull,A=(B={"fa-beat":C,"fa-fade":t,"fa-beat-fade":n,"fa-bounce":r,"fa-shake":i,"fa-flash":s,"fa-spin":a,"fa-spin-reverse":c,"fa-spin-pulse":o,"fa-pulse":l,"fa-fw":u,"fa-inverse":m,"fa-border":d,"fa-li":h,"fa-flip":g===!0,"fa-flip-horizontal":g==="horizontal"||g==="both","fa-flip-vertical":g==="vertical"||g==="both"},Wn(B,"fa-".concat(f),typeof f<"u"&&f!==null),Wn(B,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),Wn(B,"fa-pull-".concat(b),typeof b<"u"&&b!==null),Wn(B,"fa-swap-opacity",e.swapOpacity),B);return Object.keys(A).map(function(y){return A[y]?y:null}).filter(function(y){return y})}function t_(e){return e=e-0,e===e}function Hw(e){return t_(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(B,C){return C?C.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var n_=["style"];function r_(e){return e.charAt(0).toUpperCase()+e.slice(1)}function i_(e){return e.split(";").map(function(B){return B.trim()}).filter(function(B){return B}).reduce(function(B,C){var t=C.indexOf(":"),n=Hw(C.slice(0,t)),r=C.slice(t+1).trim();return n.startsWith("webkit")?B[r_(n)]=r:B[n]=r,B},{})}function Mw(e,B){var C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof B=="string")return B;var t=(B.children||[]).map(function(a){return Mw(e,a)}),n=Object.keys(B.attributes||{}).reduce(function(a,o){var c=B.attributes[o];switch(o){case"class":a.attrs.className=c,delete B.attributes.class;break;case"style":a.attrs.style=i_(c);break;default:o.indexOf("aria-")===0||o.indexOf("data-")===0?a.attrs[o.toLowerCase()]=c:a.attrs[Hw(o)]=c}return a},{attrs:{}}),r=C.style,i=r===void 0?{}:r,s=z9(C,n_);return n.attrs.style=at(at({},n.attrs.style),i),e.apply(void 0,[B.tag,at(at({},n.attrs),s)].concat(Md(t)))}var Lw=!1;try{Lw=!0}catch{}function s_(){if(!Lw&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ng(e){if(e&&ul(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Hd.icon)return Hd.icon(e);if(e===null)return null;if(e&&ul(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Ou(e,B){return Array.isArray(B)&&B.length>0||!Array.isArray(B)&&B?Wn({},e,B):{}}var xs=nr.forwardRef(function(e,B){var C=e.icon,t=e.mask,n=e.symbol,r=e.className,i=e.title,s=e.titleId,a=e.maskId,o=Ng(C),c=Ou("classes",[].concat(Md(C_(e)),Md(r.split(" ")))),l=Ou("transform",typeof e.transform=="string"?Hd.transform(e.transform):e.transform),u=Ou("mask",Ng(t)),m=G9(o,at(at(at(at({},c),l),u),{},{symbol:n,title:i,titleId:s,maskId:a}));if(!m)return s_("Could not find icon",o),null;var d=m.abstract,h={ref:B};return Object.keys(e).forEach(function(g){xs.defaultProps.hasOwnProperty(g)||(h[g]=e[g])}),a_(d[0],h)});xs.displayName="FontAwesomeIcon";xs.propTypes={beat:W.bool,border:W.bool,beatFade:W.bool,bounce:W.bool,className:W.string,fade:W.bool,flash:W.bool,mask:W.oneOfType([W.object,W.array,W.string]),maskId:W.string,fixedWidth:W.bool,inverse:W.bool,flip:W.oneOf([!0,!1,"horizontal","vertical","both"]),icon:W.oneOfType([W.object,W.array,W.string]),listItem:W.bool,pull:W.oneOf(["right","left"]),pulse:W.bool,rotation:W.oneOf([0,90,180,270]),shake:W.bool,size:W.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:W.bool,spinPulse:W.bool,spinReverse:W.bool,symbol:W.oneOfType([W.bool,W.string]),title:W.string,titleId:W.string,transform:W.oneOfType([W.string,W.object]),swapOpacity:W.bool};xs.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var a_=Mw.bind(null,nr.createElement);/*! *****************************************************************************
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
***************************************************************************** */var nB=function(){return nB=Object.assign||function(e){for(var B,C=1,t=arguments.length;C<t;C++){B=arguments[C];for(var n in B)Object.prototype.hasOwnProperty.call(B,n)&&(e[n]=B[n])}return e},nB.apply(this,arguments)};function o_(e,B){var C={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&B.indexOf(t)<0&&(C[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)B.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(C[t[n]]=e[t[n]]);return C}function ve(e,B,C){if(C||arguments.length===2)for(var t=0,n=B.length,r;t<n;t++)(r||!(t in B))&&(r||(r=Array.prototype.slice.call(B,0,t)),r[t]=B[t]);return e.concat(r||B)}var AC=function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},l_={k:1e3,m:1e6,b:1e9},c_=function(e,B){B===void 0&&(B=".");var C=new RegExp("(\\d+("+AC(B)+"\\d*)?)([kmb])$","i"),t=e.match(C);if(t){var n=t[1],r=t[3],i=l_[r.toLowerCase()];return Number(n.replace(B,"."))*i}},u_=function(e,B){B===void 0&&(B=",");var C=new RegExp(AC(B),"g");return e.replace(C,"")},d_=function(e,B){var C=AC(B.join("")),t=new RegExp("[^\\d"+C+"]","gi");return e.replace(t,"")},Ru=function(e){var B=e.value,C=e.groupSeparator,t=C===void 0?",":C,n=e.decimalSeparator,r=n===void 0?".":n,i=e.allowDecimals,s=i===void 0?!0:i,a=e.decimalsLimit,o=a===void 0?2:a,c=e.allowNegativeValue,l=c===void 0?!0:c,u=e.disableAbbreviations,m=u===void 0?!1:u,d=e.prefix,h=d===void 0?"":d,g=e.transformRawValue,f=g===void 0?function(x){return x}:g,p=f(B);if(p==="-")return p;var b=m?[]:["k","m","b"],A=new RegExp("((^|\\D)-\\d)|(-"+AC(h)+")"),y=A.test(p),I=RegExp("(\\d+)-?"+AC(h)).exec(B)||[],E=I[0],v=I[1],w=h?E?p.replace(E,"").concat(v):p.replace(h,""):p,M=u_(w,t),j=d_(M,ve([t,r],b)),Q=j;if(!m){if(b.some(function(x){return x===j.toLowerCase().replace(r,"")}))return"";var BB=c_(j,r);BB&&(Q=String(BB))}var lB=y&&l?"-":"";if(r&&Q.includes(r)){var be=j.split(r),VB=be[0],MB=be[1],P=o&&MB?MB.slice(0,o):MB,G=s?""+r+P:"";return""+lB+VB+G}return""+lB+Q},f_=function(e,B,C){if(C&&e.length>1){if(e.includes(B)){var t=e.split(B),n=t[0],r=t[1];if(r.length>C)return""+n+B+r.slice(0,C)}var i=e.length>C?new RegExp("(\\d+)(\\d{"+C+"})"):new RegExp("(\\d)(\\d+)"),s=e.match(i);if(s){var n=s[1],r=s[2];return""+n+B+r}}return e},Tw=function(e,B){var C=B.groupSeparator,t=C===void 0?",":C,n=B.decimalSeparator,r=n===void 0?".":n,i=new RegExp("\\d([^"+AC(t)+AC(r)+"0-9]+)"),s=e.match(i);return s?s[1]:void 0},Zr=function(e){var B=e.value,C=e.decimalSeparator,t=e.intlConfig,n=e.decimalScale,r=e.prefix,i=r===void 0?"":r,s=e.suffix,a=s===void 0?"":s;if(B===""||B===void 0)return"";if(B==="-")return"-";var o=new RegExp("^\\d?-"+(i?AC(i)+"?":"")+"\\d").test(B),c=C!=="."?h_(B,C,o):B,l={minimumFractionDigits:n||0,maximumFractionDigits:20},u=t?new Intl.NumberFormat(t.locale,t.currency?nB(nB({},l),{style:"currency",currency:t.currency}):l):new Intl.NumberFormat(void 0,l),m=u.formatToParts(Number(c)),d=p_(m,e),h=Tw(d,nB({},e)),g=B.slice(-1)===C?C:"",f=c.match(RegExp("\\d+\\.(\\d+)"))||[],p=f[1];return n===void 0&&p&&C&&(d.includes(C)?d=d.replace(RegExp("(\\d+)("+AC(C)+")(\\d+)","g"),"$1$2"+p):h&&!a?d=d.replace(h,""+C+p+h):d=""+d+C+p),a&&g?""+d+g+a:h&&g?d.replace(h,""+g+h):h&&a?d.replace(h,""+g+a):[d,g,a].join("")},h_=function(e,B,C){var t=e;return B&&B!=="."&&(t=t.replace(RegExp(AC(B),"g"),"."),C&&B==="-"&&(t="-"+t.slice(1))),t},p_=function(e,B){var C=B.prefix,t=B.groupSeparator,n=B.decimalSeparator,r=B.decimalScale,i=B.disableGroupSeparators,s=i===void 0?!1:i;return e.reduce(function(a,o,c){var l=o.type,u=o.value;return c===0&&C?l==="minusSign"?[u,C]:l==="currency"?ve(ve([],a),[C]):[C,u]:l==="currency"?C?a:ve(ve([],a),[u]):l==="group"?s?a:ve(ve([],a),[t!==void 0?t:u]):l==="decimal"?r!==void 0&&r===0?a:ve(ve([],a),[n!==void 0?n:u]):l==="fraction"?ve(ve([],a),[r!==void 0?u.slice(0,r):u]):ve(ve([],a),[u])},[""]).join("")},m_={currencySymbol:"",groupSeparator:"",decimalSeparator:"",prefix:"",suffix:""},g_=function(e){var B=e||{},C=B.locale,t=B.currency,n=C?new Intl.NumberFormat(C,t?{currency:t,style:"currency"}:void 0):new Intl.NumberFormat;return n.formatToParts(1000.1).reduce(function(r,i,s){return i.type==="currency"?s===0?nB(nB({},r),{currencySymbol:i.value,prefix:i.value}):nB(nB({},r),{currencySymbol:i.value,suffix:i.value}):i.type==="group"?nB(nB({},r),{groupSeparator:i.value}):i.type==="decimal"?nB(nB({},r),{decimalSeparator:i.value}):r},m_)},Og=function(e){return RegExp(/\d/,"gi").test(e)},b_=function(e,B,C){if(B===void 0&&(B="."),C===void 0||e===""||e===void 0)return e;if(!e.match(/\d/g))return"";var t=e.split(B),n=t[0],r=t[1];if(C===0)return n;var i=r||"";if(i.length<C)for(;i.length<C;)i+="0";else i=i.slice(0,C);return""+n+B+i},A_=function(e){var B=e.selectionStart,C=e.value,t=e.lastKeyStroke,n=e.stateValue,r=e.groupSeparator,i=B,s=C;if(n&&i){var a=C.split("");return t==="Backspace"&&n[i]===r&&(a.splice(i-1,1),i-=1),t==="Delete"&&n[i]===r&&(a.splice(i,1),i+=1),s=a.join(""),{modifiedValue:s,cursorPosition:i}}return{modifiedValue:s,cursorPosition:B}},Td=O.forwardRef(function(e,B){var C=e.allowDecimals,t=C===void 0?!0:C,n=e.allowNegativeValue,r=n===void 0?!0:n,i=e.id,s=e.name,a=e.className,o=e.customInput,c=e.decimalsLimit,l=e.defaultValue,u=e.disabled,m=u===void 0?!1:u,d=e.maxLength,h=e.value,g=e.onValueChange,f=e.fixedDecimalLength,p=e.placeholder,b=e.decimalScale,A=e.prefix,y=e.suffix,I=e.intlConfig,E=e.step,v=e.min,w=e.max,M=e.disableGroupSeparators,j=M===void 0?!1:M,Q=e.disableAbbreviations,BB=Q===void 0?!1:Q,lB=e.decimalSeparator,be=e.groupSeparator,VB=e.onChange,MB=e.onFocus,P=e.onBlur,G=e.onKeyDown,x=e.onKeyUp,eB=e.transformRawValue,yB=o_(e,["allowDecimals","allowNegativeValue","id","name","className","customInput","decimalsLimit","defaultValue","disabled","maxLength","value","onValueChange","fixedDecimalLength","placeholder","decimalScale","prefix","suffix","intlConfig","step","min","max","disableGroupSeparators","disableAbbreviations","decimalSeparator","groupSeparator","onChange","onFocus","onBlur","onKeyDown","onKeyUp","transformRawValue"]);if(lB&&Og(lB))throw new Error("decimalSeparator cannot be a number");if(be&&Og(be))throw new Error("groupSeparator cannot be a number");var Ue=O.useMemo(function(){return g_(I)},[I]),sB=lB||Ue.decimalSeparator||"",Oe=be||Ue.groupSeparator||"";if(sB&&Oe&&sB===Oe&&j===!1)throw new Error("decimalSeparator cannot be the same as groupSeparator");var zB={decimalSeparator:sB,groupSeparator:Oe,disableGroupSeparators:j,intlConfig:I,prefix:A||Ue.prefix,suffix:y},iC={decimalSeparator:sB,groupSeparator:Oe,allowDecimals:t,decimalsLimit:c||f||2,allowNegativeValue:r,disableAbbreviations:BB,prefix:A||Ue.prefix,transformRawValue:eB},cc=l!=null?Zr(nB(nB({},zB),{decimalScale:b,value:String(l)})):h!=null?Zr(nB(nB({},zB),{decimalScale:b,value:String(h)})):"",l2=O.useState(cc),re=l2[0],Ks=l2[1],c2=O.useState(!1),uc=c2[0],Uw=c2[1],u2=O.useState(0),dc=u2[0],fc=u2[1],d2=O.useState(0),f2=d2[0],Vw=d2[1],h2=O.useState(null),Ww=h2[0],jw=h2[1],YC=O.useRef(null);O.useImperativeHandle(B,function(){return YC.current});var p2=function(PB,ie){Uw(!0);var _B=A_({selectionStart:ie,value:PB,lastKeyStroke:Ww,stateValue:re,groupSeparator:Oe}),se=_B.modifiedValue,Ae=_B.cursorPosition,Re=Ru(nB({value:se},iC));if(!(d&&Re.replace(/-/g,"").length>d)){if(Re===""||Re==="-"||Re===sB){g&&g(void 0,s,{float:null,formatted:"",value:""}),Ks(Re),fc(1);return}var Qs=sB?Re.replace(sB,"."):Re,BD=parseFloat(Qs),hc=Zr(nB({value:Re},zB));if(Ae!=null){var Js=Ae+(hc.length-PB.length);Js=Js<=0?A?A.length:0:Js,fc(Js),Vw(f2+1)}if(Ks(hc),g){var eD={float:BD,formatted:hc,value:Re};g(Re,s,eD)}}},Yw=function(PB){var ie=PB.target,_B=ie.value,se=ie.selectionStart;p2(_B,se),VB&&VB(PB)},Xw=function(PB){return MB&&MB(PB),re?re.length:0},Zw=function(PB){var ie=PB.target.value,_B=Ru(nB({value:ie},iC));if(_B==="-"||_B===sB||!_B){Ks(""),P&&P(PB);return}var se=f_(_B,sB,f),Ae=b_(se,sB,b!==void 0?b:f),Re=parseFloat(Ae.replace(sB,".")),Qs=Zr(nB(nB({},zB),{value:Ae}));g&&g(Ae,s,{float:Re,formatted:Qs,value:Ae}),Ks(Qs),P&&P(PB)},qw=function(PB){var ie=PB.key;if(jw(ie),E&&(ie==="ArrowUp"||ie==="ArrowDown")){PB.preventDefault(),fc(re.length);var _B=parseFloat(h!=null?String(h).replace(sB,"."):Ru(nB({value:re},iC)))||0,se=ie==="ArrowUp"?_B+E:_B-E;if(v!==void 0&&se<v||w!==void 0&&se>w)return;var Ae=String(E).includes(".")?Number(String(E).split(".")[1].length):void 0;p2(String(Ae?se.toFixed(Ae):se).replace(".",sB))}G&&G(PB)},zw=function(PB){var ie=PB.key,_B=PB.currentTarget.selectionStart;if(ie!=="ArrowUp"&&ie!=="ArrowDown"&&re!=="-"){var se=Tw(re,{groupSeparator:Oe,decimalSeparator:sB});if(se&&_B&&_B>re.length-se.length&&YC.current){var Ae=re.length-se.length;YC.current.setSelectionRange(Ae,Ae)}}x&&x(PB)};O.useEffect(function(){uc&&re!=="-"&&YC.current&&document.activeElement===YC.current&&YC.current.setSelectionRange(dc,dc)},[re,dc,YC,uc,f2]);var _w=function(){return h!=null&&re!=="-"&&(!sB||re!==sB)?Zr(nB(nB({},zB),{decimalScale:uc?void 0:b,value:String(h)})):re},m2=nB({type:"text",inputMode:"decimal",id:i,name:s,className:a,onChange:Yw,onBlur:Zw,onFocus:Xw,onKeyDown:qw,onKeyUp:zw,placeholder:p,disabled:m,value:_w(),ref:YC},yB);if(o){var $w=o;return nr.createElement($w,nB({},m2))}return nr.createElement("input",nB({},m2))});Td.displayName="CurrencyInput";const v_={databaseURL:"https://criblytics-default-rtdb.firebaseio.com/",apiKey:"AIzaSyCRv3YXcKBp4caX4SLDf9tOM_jf6-PgKWc",authDomain:"criblytics.firebaseapp.com",projectId:"criblytics",storageBucket:"criblytics.appspot.com",messagingSenderId:"109707951445",appId:"1:109707951445:web:120d9a55b9851e13bd03dc",measurementId:"G-VH1N6MR0RG"},Gw=Ml(v_);Xf(Gw);ql(Gw);const xw=ql(),y_=(e,B,C="animate__")=>new Promise((t,n)=>{const r=`${C}${B}`,i=document.getElementById(e);if(!i){n(`Element with ID '${e}' not found.`);return}i.classList.add(`${C}animated`,r);function s(a){a.stopPropagation(),i.classList.remove(`${C}animated`,r),i.style.display="none",t("Animation ended")}i.addEventListener("animationend",s,{once:!0})});function E_(e){return y_("search","fadeOut"),console.log(e.listing_id),D("div",{children:D(I_,{listing_id:e.listing_id})})}const I_=e=>{const B=e.listing_id,[C,t]=O.useState({}),[n,r]=O.useState(!1),[i,s]=O.useState(!1),a=()=>{r(!n)},o=()=>{s(!i)};O.useEffect(()=>{const l=$o(xw,"properties/"+B);zi(l).then(u=>{u.exists()?t(u.val()):console.log("No data available")}).catch(u=>{console.error(u)})},[]);const c=()=>{window.location.reload()};return z("div",{children:[z("h2",{className:"hover:text-emerald-400 text-3xl my-8 text-emerald-100 cursor-pointer",onClick:a,children:[D("span",{className:`triangle ${n?"open":""}`}),"Key Metrics"]}),n&&D("div",{children:D(w_,{snap:C,listing_id:B})}),z("h2",{className:"hover:text-slate-400 text-3xl my-8 text-slate-100 cursor-pointer",onClick:o,children:[D("span",{className:`triangle ${i?"open":""}`}),"Property Details"]}),i&&z("ul",{className:"flex flex-wrap overflow-auto max-w-lg text-2xl font-medium",children:[Object.entries(C.prop_common).map(([l,u])=>k_(l,u)),D(S_,{snap:C})]}),D("button",{onClick:c,className:"hover:bg-slate-700 rounded-2xl shadow-2xl text-2xl text-dark-waves bg-gradient-to-r bg-slate-500",children:"Home"})]})},S_=e=>{const[B,C]=O.useState([]),[t,n]=O.useState(0),[r,i]=O.useState(!0);O.useEffect(()=>{let o=e.snap;o&&o.photos&&o.photos.length>0&&(C(o.photos),i(!1))},[]);const s=()=>{n(o=>(o-1+B.length)%B.length)},a=()=>{n(o=>(o+1)%B.length)};return D(to,{children:D("div",{className:"border-2 border-grainy justify-center flex-wrap flex",children:r?D("div",{style:{display:"none"},children:B.map((o,c)=>D("img",{src:o.href,alt:`Property ${c+1}`},c))}):z(to,{children:[D("img",{src:B[t].href,className:"p-8 w-full h-96 rounded-2xl shadow-lg",alt:`Property ${t+1}`}),z("div",{className:"flex justify-center my-4 rounded-xl",children:[D("button",{className:"mr-4 bg-grainy rounded-xl shadow-xl",onClick:s,disabled:B.length===1,children:"Previous"}),D("button",{className:"bg-grainy rounded-xl shadow-xl",onClick:a,disabled:B.length===1,children:"Next"})]})]})})})},w_=e=>{let B=e.snap,C=e.listing_id;const t=$o(xw,"properties/"+C+"/rental/");async function n(Q,BB){let lB=(await(await fetch(Q,BB)).json()).data.home_search.results;const be=Object.entries(lB).map(([VB,MB])=>{const{products:P,...G}=MB;return[VB,G]});console.log(be),ed(t,be)}O.useEffect(()=>{console.log(B.prop_common.price+"price"),(async()=>zi(t).then(Q=>{let BB=null;if(Q.exists())BB=Q.val();else{console.log("No data available");try{let VB=B.prop_common.bed,MB=B.prop_common.bath,P=B.prop_common.sqft,G=B.address.city,x=B.address.state;const eB=Math.max(1,VB-1),yB=VB,Ue=Math.max(1,MB-1),sB=MB+1,Oe=Math.max(500,P-750),zB=P+750,iC=`https://us-real-estate.p.rapidapi.com/v2/for-rent?city=${G}&state_code=${x}&limit=42&offset=0&beds_min=${eB}&beds_max=${yB}&baths_min=${Ue}&baths_max=${sB}&expand_search_radius=25&home_size_min=${Oe}&home_size_max=${zB}`;n(iC,{method:"GET",headers:{"X-RapidAPI-Key":"2661057b61msh8e6271d7a1763b6p12ffb0jsnc06db3ad292e","X-RapidAPI-Host":"us-real-estate.p.rapidapi.com"}}),BB=zi(t).then(cc=>{BB=cc.val()})}catch(VB){console.error(VB)}}let lB=0,be=BB.length;Object.entries(BB).map(([VB,MB])=>{MB[0];const P=MB[1];let G=0,x=0,eB=0;P.list_price!==null&&(eB=P.list_price),P.list_price_min!==null&&(G=P.list_price_min),P.list_price_max!==null&&(x=P.list_price_max),G==null&&(G=0),x==null&&(x=0),eB==null&&(eB=(G+x)/2),lB=lB+eB}),lB=lB/be,lB=Math.floor(lB),i(lB),console.log(r+"rent")}).catch(Q=>{console.error(Q)}))()},[]);const[r,i]=O.useState(0),[s,a]=O.useState(B.prop_common.price),[o,c]=O.useState(20),[l,u]=O.useState("6.0"),[m,d]=O.useState(30),h=s,g=o/100*h,f=h-g,p=parseFloat(l)/100/12,b=m*12,A=p===0||p===void 0||p===""?0:f*p*Math.pow(1+p,b)/(Math.pow(1+p,b)-1),y=parseFloat(String(r).replace(/[^0-9.-]+/g,"")),I=12,E=y*I,[v,w]=O.useState(0),M=E-A*I-v*I,j=Q=>parseFloat(Q.replace(/[^0-9.-]+/g,""));return D(to,{children:z("div",{className:"max-w-sm mx-auto",children:[z("div",{className:"p-2",children:[D("div",{className:"grid grid-cols-2 gap-4",children:D("div",{className:"col-span-2",children:D("div",{className:"text-grainy text-2xl font-medium",children:z("div",{className:"flex items-center mb-4",children:[D("span",{className:"w-1/2",children:"List Price: "}),D("div",{className:"w-1/2 overflow-auto font-medium",children:D(Td,{prefix:"$",name:"priceInput",id:"priceInput","data-number-to-fixed":"2","data-number-stepfactor":"100",value:s,placeholder:"",onChange:Q=>{let BB=Q.target.value,lB=j(BB);a(isNaN(lB)?0:lB)},allowDecimals:!0,decimalsLimit:"2",disableAbbreviations:!0})})]})})})}),D("div",{className:"grid grid-cols-2 gap-4",children:D("div",{className:"col-span-2",children:D("div",{className:"text-bland text-2xl font-medium",children:z("div",{className:"flex items-center mb-4",children:[D("span",{className:"w-1/2",children:"Rent Estimate: "}),D("div",{className:"w-1/2 overflow-auto font-medium",children:D(Td,{prefix:"$",name:"priceInput",id:"priceInput","data-number-to-fixed":"2","data-number-stepfactor":"100",value:r,placeholder:"",onChange:Q=>{let BB=Q.target.value,lB=j(BB);i(isNaN(lB)?0:lB)},allowDecimals:!0,decimalsLimit:"2",disableAbbreviations:!0})})]})})})})]}),z("div",{className:"grid grid-cols-2 gap-4",children:[D("div",{className:"col-span-1",children:z("div",{className:"mb-4",children:[z("label",{htmlFor:"downpaymentSlider",className:"text-lg font-medium",children:["Downpayment:",D("br",{})," ",o,"%"]}),D("input",{type:"range",id:"downpaymentSlider",className:"w-full",min:0,max:100,value:o,onChange:Q=>c(parseInt(Q.target.value))})]})}),D("div",{className:"col-span-1",children:z("div",{className:"mb-4",children:[z("label",{className:"font-medium",children:["Loan Term: ",D("br",{}),m," years"]}),D("input",{type:"range",min:15,max:30,className:"w-full",value:m,onChange:Q=>d(parseInt(Q.target.value))})]})})]}),z("div",{className:"grid grid-cols-3 gap-4",children:[D("div",{className:"col-span-1",children:z("div",{className:"mb-4",children:[D("label",{htmlFor:"interestRateInput",className:"font-medium",children:"Interest Rate (%)"}),D("input",{type:"text",id:"interestRateInput",className:"w-full px-2 py-1 rounded border border-gray-300",value:l,onChange:Q=>{const BB=Q.target.value;u(BB)}})]})}),D("div",{className:"col-span-1",children:z("div",{className:"mb-4",children:[D("label",{htmlFor:"monthlyPayment",className:"font-medium",children:"Monthly Payment"}),D("input",{type:"text",id:"monthlyPayment",className:"w-full px-2 py-1 rounded border border-gray-300",value:isNaN(A+v)?"-":(A+v).toLocaleString("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}),readOnly:!0})]})}),D("div",{className:"col-span-1",children:z("div",{className:"mb-4",children:[D("label",{htmlFor:"totalExpensesInput",className:"font-medium",children:"Monthly Expenses"}),D("input",{type:"number",id:"totalExpensesInput",className:"w-full px-2 py-1 rounded border border-gray-300",value:v===0||v===null?0:v,onChange:Q=>w(parseFloat(Q.target.value))})]})})]}),D("div",{className:"flex items-center justify-center",children:D("div",{className:"text-3xl font-medium m-4 p-6 shadow-2xl border-1 rounded-xl bg-slate-800 hover:bg-slate-900",children:z("label",{className:`text-3xl font-medium ${M>=0?"text-green-600":"text-red-600"}`,children:["Annual Income: ",isNaN(M)?"-":M.toLocaleString("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2})]})})})]})})},D_={baths:x9,beds:J9,lot_sqft:kg,sold_date:Pg,sold_price:V9,sqft:kg,stories:U9,type:Q9,year_built:Pg},k_=(e,B)=>{const C=D_[e];if(C==null)return;let t=B;return(e==="sold_date"||e==="year_built")&&(t=new Date(B).getFullYear().toString()),e==="sold_price"&&(t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(B),t=t.substring(1,t.length)),e==="lot_sqft"&&(t="Lot size "+t+" sqft"),e==="sqft"&&(t=t+" sqft"),e==="sold_date"&&(t="Last sold "+t),e==="year_built"&&(t="Built in "+t),e==="type"&&(t=t.replace("_"," "),t=t.charAt(0).toUpperCase()+t.slice(1)),e==="stories"&&(t="Stories "+t),z("li",{className:"text-waves my-4 w-1/2",children:[D(xs,{icon:C})," ",t]},e)},P_={databaseURL:"https://criblytics-default-rtdb.firebaseio.com/",apiKey:"AIzaSyCRv3YXcKBp4caX4SLDf9tOM_jf6-PgKWc",authDomain:"criblytics.firebaseapp.com",projectId:"criblytics",storageBucket:"criblytics.appspot.com",messagingSenderId:"109707951445",appId:"1:109707951445:web:120d9a55b9851e13bd03dc",measurementId:"G-VH1N6MR0RG"},Kw=Ml(P_);Xf(Kw);const Rg=ql(Kw),F_=new Le;F_.setCustomParameters({prompt:"select_account"});Ay();const N_=["AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];function O_(e){const[B,C]=O.useState(""),[t,n]=O.useState(""),[r,i]=O.useState(""),[s,a]=O.useState("false"),[o,c]=O.useState("0"),[l,u]=O.useState(!1),m=()=>{if(e.login){console.log("City: "+B),console.log("State: "+t),console.log("Address: "+r),console.log();let g=e.user,f=g.uid,p=g.email,b=g.displayName;console.log(g),console.log(f),console.log(p),console.log(b),h(B,t,r)}else alert("Please login before continuing")};O.useEffect(()=>{a(!1)});const d={method:"GET",headers:{"X-RapidAPI-Key":"2661057b61msh8e6271d7a1763b6p12ffb0jsnc06db3ad292e","X-RapidAPI-Host":"us-real-estate.p.rapidapi.com"}},h=(g,f,p)=>{if(document.getElementById("search"),g===""||f===""||p==="")alert("Invalid input");else{const b=`${p} ${g} ${f}`,A=encodeURIComponent(b);console.log(A);const y=`https://us-real-estate.p.rapidapi.com/location/suggest?input=${A}`;fetch(y,d).then(I=>I.json()).then(I=>{const E=I.data[0].property_id;console.log(E),c(E);const v=$o(Rg,"properties/"+E);zi(v).then(M=>{if(M.exists()){console.log("Already exists"),u(!0);return}else{console.log("No data available");const j=`https://us-real-estate.p.rapidapi.com/v2/property-detail?property_id=${E}`;fetch(j,d).then(Q=>Q.json()).then(Q=>{console.log(Q);let BB=Q.data.property_detail;delete BB.product_attributes,ed(v,BB),u(!0)}).catch(Q=>console.error(Q))}}).catch(M=>{console.error(M)});const w=$o(Rg,"users/"+e.user.uid+"/history/");zi(w).then(M=>{let j=M.val()||[];j.includes(E)?console.log("listing_id already exists in user history."):(j.push(E),ed(w,j).then(()=>{console.log("Successfully updated user history.")}).catch(Q=>{console.error("Error updating user history:",Q)}))}).catch(M=>{console.error("Error fetching user history:",M)})}).catch(I=>console.error(I))}};return z(to,{children:[z("div",{id:"search",children:[z("div",{className:"p-4 flex content-center justify-center text-center",children:[z("div",{className:"w-1/2 mr-2",children:[D("label",{className:"text-3xl block text-grainy mb-2",children:"City"}),D("input",{className:"px-2 py-2 bg-dark-waves rounded-lg text-dark-bland w-full",type:"text",value:B,onChange:g=>C(g.target.value)})]}),z("div",{className:"w-1/2",children:[D("label",{className:"text-3xl block text-grainy mb-2",children:"State"}),z("select",{className:"px-2 py-3 bg-dark-waves rounded-lg text-dark-bland w-4/5",value:t,onChange:g=>n(g.target.value),children:[D("option",{value:"",children:"Select a state"}),N_.map(g=>D("option",{value:g,children:g},g))]})]})]}),z("div",{className:"p-4 flex flex-col items-center",children:[D("label",{className:"text-3xl block text-grainy mb-2",children:"Address"}),D("div",{className:"w-3/5 mr-2 flex",children:D("input",{className:"px-2 py-2 bg-dark-waves rounded-lg text-dark-bland w-full",type:"text",value:r,onChange:g=>i(g.target.value)})})]}),D("button",{id:"search",onClick:m,className:"active:shadow-none shadow-2xl active:from-black active:to-black focus:bg-black w-1/3 rounded-xl text-wave duration-200 ease-in-out transition my-8 bg-gradient-to-l from-grainy to-bland ",children:"Search"}),D("img",{id:"picture",src:""}),D("div",{id:"details"}),D("div",{id:"description"})]}),l&&D(E_,{listing_id:o})]})}let Hg=0;function R_(){const e=["home","rental","investment"];return D("div",{className:"",children:z(eF,{to:"/About",children:[z("h1",{className:"mx-20 sm:text-5xl text-4xl font-extrabold leading-tighter tracking-tighter mb-24",children:["Crib",D("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-grainy to-bland",children:"lytics."})]}),z("p",{className:"text-2xl text-waves mb-8",children:["Find your dream ",D("span",{className:["#6EE7B7","#FFD166","#06D6A0"][Hg],children:e[Hg]})]})]})})}const H_=({user:e,auth:B,db:C})=>z("div",{className:"flex content-center justify-center gap-16 mt-8 border-b-2 border-grainy pb-6",children:[D("img",{className:" rounded-xl h-16 w-16",src:e.photoURL,alt:""}),D("button",{className:" hover:border-red-500 hover:border-3 p-16 rounded-2xl button signout bg-transparent font-bold py-2 px-4 text-2xl text-waves",onClick:()=>B.signOut(),children:"Sign out"})]}),M_={databaseURL:"https://criblytics-default-rtdb.firebaseio.com/",apiKey:"AIzaSyCRv3YXcKBp4caX4SLDf9tOM_jf6-PgKWc",authDomain:"criblytics.firebaseapp.com",projectId:"criblytics",storageBucket:"criblytics.appspot.com",messagingSenderId:"109707951445",appId:"1:109707951445:web:120d9a55b9851e13bd03dc",measurementId:"G-VH1N6MR0RG"},Qw=Ml(M_);Xf(Qw);const L_=ql(Qw),Jw=new Le;Jw.setCustomParameters({prompt:"select_account"});const Gd=Ay();function T_(){async function e(B,C){var t;try{const n=await yR(B,C),r=Le.credentialFromResult(n).accessToken,i=n.user;console.log(i)}catch(n){n.code,n.message,(t=n.customData)!=null&&t.email,Le.credentialFromError(n)}}return D("button",{id:"signIn",onClick:()=>e(Gd,Jw),className:"px-8 py-4  bg-bland text-3xl font-bold bg-transparent hover:border-green-500 text-wavesfont-semibold hover:text-white rounded-xl",children:"Sign in"})}function G_(){const[e,B]=O.useState(null);O.useState(!1),O.useEffect(()=>{Gd.onAuthStateChanged(n=>{B(n)})},[]);const[C,t]=O.useState(100);return z("div",{children:[z("div",{className:"mt-8 ",children:[D(rF,{}),D(R_,{}),D("section",{children:e?D(H_,{auth:Gd,user:e,db:L_}):D(T_,{})}),D("div",{className:"mt-4 text-xl text-center max-w-l",children:e?D(O_,{user:e,login:!0}):null})]}),D(x_,{indicatorPosition:C})]})}function x_({indicatorPosition:e}){return D("div",{className:"mx-auto w-72 h-8 bg-gradient-to-r from-red-500 to-green-500 mb-6 rounded-lg shadow-2xl"})}function K_(){return console.log({}.DATABASE_URL),D("div",{children:D(G_,{})})}const Q_=Hu.createRoot(document.getElementById("root"));Q_.render(D(nr.StrictMode,{children:D(_P,{children:D(K_,{})})}));