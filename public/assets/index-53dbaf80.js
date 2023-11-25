function iE(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function sE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var vs={},oE={get exports(){return vs},set exports(t){vs=t}},cl={},L={},aE={get exports(){return L},set exports(t){L=t}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qs=Symbol.for("react.element"),lE=Symbol.for("react.portal"),uE=Symbol.for("react.fragment"),cE=Symbol.for("react.strict_mode"),fE=Symbol.for("react.profiler"),dE=Symbol.for("react.provider"),hE=Symbol.for("react.context"),pE=Symbol.for("react.forward_ref"),mE=Symbol.for("react.suspense"),gE=Symbol.for("react.memo"),vE=Symbol.for("react.lazy"),jh=Symbol.iterator;function yE(t){return t===null||typeof t!="object"?null:(t=jh&&t[jh]||t["@@iterator"],typeof t=="function"?t:null)}var lv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},uv=Object.assign,cv={};function Ii(t,e,n){this.props=t,this.context=e,this.refs=cv,this.updater=n||lv}Ii.prototype.isReactComponent={};Ii.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ii.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function fv(){}fv.prototype=Ii.prototype;function Uf(t,e,n){this.props=t,this.context=e,this.refs=cv,this.updater=n||lv}var zf=Uf.prototype=new fv;zf.constructor=Uf;uv(zf,Ii.prototype);zf.isPureReactComponent=!0;var Bh=Array.isArray,dv=Object.prototype.hasOwnProperty,jf={current:null},hv={key:!0,ref:!0,__self:!0,__source:!0};function pv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)dv.call(e,r)&&!hv.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:qs,type:t,key:s,ref:o,props:i,_owner:jf.current}}function _E(t,e){return{$$typeof:qs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Bf(t){return typeof t=="object"&&t!==null&&t.$$typeof===qs}function wE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var $h=/\/+/g;function Ql(t,e){return typeof t=="object"&&t!==null&&t.key!=null?wE(""+t.key):e.toString(36)}function qo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case qs:case lE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ql(o,0):r,Bh(i)?(n="",t!=null&&(n=t.replace($h,"$&/")+"/"),qo(i,e,n,"",function(u){return u})):i!=null&&(Bf(i)&&(i=_E(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace($h,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Bh(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Ql(s,a);o+=qo(s,e,n,l,i)}else if(l=yE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Ql(s,a++),o+=qo(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function _o(t,e,n){if(t==null)return t;var r=[],i=0;return qo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function EE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ze={current:null},Yo={transition:null},SE={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:Yo,ReactCurrentOwner:jf};B.Children={map:_o,forEach:function(t,e,n){_o(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return _o(t,function(){e++}),e},toArray:function(t){return _o(t,function(e){return e})||[]},only:function(t){if(!Bf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};B.Component=Ii;B.Fragment=uE;B.Profiler=fE;B.PureComponent=Uf;B.StrictMode=cE;B.Suspense=mE;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SE;B.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=uv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=jf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)dv.call(e,l)&&!hv.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:qs,type:t.type,key:i,ref:s,props:r,_owner:o}};B.createContext=function(t){return t={$$typeof:hE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:dE,_context:t},t.Consumer=t};B.createElement=pv;B.createFactory=function(t){var e=pv.bind(null,t);return e.type=t,e};B.createRef=function(){return{current:null}};B.forwardRef=function(t){return{$$typeof:pE,render:t}};B.isValidElement=Bf;B.lazy=function(t){return{$$typeof:vE,_payload:{_status:-1,_result:t},_init:EE}};B.memo=function(t,e){return{$$typeof:gE,type:t,compare:e===void 0?null:e}};B.startTransition=function(t){var e=Yo.transition;Yo.transition={};try{t()}finally{Yo.transition=e}};B.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};B.useCallback=function(t,e){return ze.current.useCallback(t,e)};B.useContext=function(t){return ze.current.useContext(t)};B.useDebugValue=function(){};B.useDeferredValue=function(t){return ze.current.useDeferredValue(t)};B.useEffect=function(t,e){return ze.current.useEffect(t,e)};B.useId=function(){return ze.current.useId()};B.useImperativeHandle=function(t,e,n){return ze.current.useImperativeHandle(t,e,n)};B.useInsertionEffect=function(t,e){return ze.current.useInsertionEffect(t,e)};B.useLayoutEffect=function(t,e){return ze.current.useLayoutEffect(t,e)};B.useMemo=function(t,e){return ze.current.useMemo(t,e)};B.useReducer=function(t,e,n){return ze.current.useReducer(t,e,n)};B.useRef=function(t){return ze.current.useRef(t)};B.useState=function(t){return ze.current.useState(t)};B.useSyncExternalStore=function(t,e,n){return ze.current.useSyncExternalStore(t,e,n)};B.useTransition=function(){return ze.current.useTransition()};B.version="18.2.0";(function(t){t.exports=B})(aE);const fl=sE(L),kE=iE({__proto__:null,default:fl},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IE=L,CE=Symbol.for("react.element"),bE=Symbol.for("react.fragment"),TE=Object.prototype.hasOwnProperty,NE=IE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xE={key:!0,ref:!0,__self:!0,__source:!0};function mv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)TE.call(e,r)&&!xE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:CE,type:t,key:s,ref:o,props:i,_owner:NE.current}}cl.Fragment=bE;cl.jsx=mv;cl.jsxs=mv;(function(t){t.exports=cl})(oE);const $f=vs.Fragment,S=vs.jsx,M=vs.jsxs;var Xu={},Ju={},RE={get exports(){return Ju},set exports(t){Ju=t}},tt={},Zu={},AE={get exports(){return Zu},set exports(t){Zu=t}},gv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,U){var j=A.length;A.push(U);e:for(;0<j;){var fe=j-1>>>1,_e=A[fe];if(0<i(_e,U))A[fe]=U,A[j]=_e,j=fe;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var U=A[0],j=A.pop();if(j!==U){A[0]=j;e:for(var fe=0,_e=A.length,vo=_e>>>1;fe<vo;){var qn=2*(fe+1)-1,Yl=A[qn],Yn=qn+1,yo=A[Yn];if(0>i(Yl,j))Yn<_e&&0>i(yo,Yl)?(A[fe]=yo,A[Yn]=j,fe=Yn):(A[fe]=Yl,A[qn]=j,fe=qn);else if(Yn<_e&&0>i(yo,j))A[fe]=yo,A[Yn]=j,fe=Yn;else break e}}return U}function i(A,U){var j=A.sortIndex-U.sortIndex;return j!==0?j:A.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,d=3,g=!1,m=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(A){for(var U=n(u);U!==null;){if(U.callback===null)r(u);else if(U.startTime<=A)r(u),U.sortIndex=U.expirationTime,e(l,U);else break;U=n(u)}}function _(A){if(y=!1,v(A),!m)if(n(l)!==null)m=!0,Li(I);else{var U=n(u);U!==null&&ql(_,U.startTime-A)}}function I(A,U){m=!1,y&&(y=!1,p(P),P=-1),g=!0;var j=d;try{for(v(U),f=n(l);f!==null&&(!(f.expirationTime>U)||A&&!ye());){var fe=f.callback;if(typeof fe=="function"){f.callback=null,d=f.priorityLevel;var _e=fe(f.expirationTime<=U);U=t.unstable_now(),typeof _e=="function"?f.callback=_e:f===n(l)&&r(l),v(U)}else r(l);f=n(l)}if(f!==null)var vo=!0;else{var qn=n(u);qn!==null&&ql(_,qn.startTime-U),vo=!1}return vo}finally{f=null,d=j,g=!1}}var b=!1,N=null,P=-1,T=5,D=-1;function ye(){return!(t.unstable_now()-D<T)}function qe(){if(N!==null){var A=t.unstable_now();D=A;var U=!0;try{U=N(!0,A)}finally{U?mt():(b=!1,N=null)}}else b=!1}var mt;if(typeof h=="function")mt=function(){h(qe)};else if(typeof MessageChannel<"u"){var gt=new MessageChannel,go=gt.port2;gt.port1.onmessage=qe,mt=function(){go.postMessage(null)}}else mt=function(){E(qe,0)};function Li(A){N=A,b||(b=!0,mt())}function ql(A,U){P=E(function(){A(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){m||g||(m=!0,Li(I))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(A){switch(d){case 1:case 2:case 3:var U=3;break;default:U=d}var j=d;d=U;try{return A()}finally{d=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,U){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var j=d;d=A;try{return U()}finally{d=j}},t.unstable_scheduleCallback=function(A,U,j){var fe=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?fe+j:fe):j=fe,A){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=j+_e,A={id:c++,callback:U,priorityLevel:A,startTime:j,expirationTime:_e,sortIndex:-1},j>fe?(A.sortIndex=j,e(u,A),n(l)===null&&A===n(u)&&(y?(p(P),P=-1):y=!0,ql(_,j-fe))):(A.sortIndex=_e,e(l,A),m||g||(m=!0,Li(I))),A},t.unstable_shouldYield=ye,t.unstable_wrapCallback=function(A){var U=d;return function(){var j=d;d=U;try{return A.apply(this,arguments)}finally{d=j}}}})(gv);(function(t){t.exports=gv})(AE);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vv=L,et=Zu;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yv=new Set,ys={};function Nr(t,e){fi(t,e),fi(t+"Capture",e)}function fi(t,e){for(ys[t]=e,t=0;t<e.length;t++)yv.add(e[t])}var en=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ec=Object.prototype.hasOwnProperty,PE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wh={},Hh={};function OE(t){return ec.call(Hh,t)?!0:ec.call(Wh,t)?!1:PE.test(t)?Hh[t]=!0:(Wh[t]=!0,!1)}function DE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function LE(t,e,n,r){if(e===null||typeof e>"u"||DE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function je(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ne[t]=new je(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ne[e]=new je(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ne[t]=new je(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ne[t]=new je(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ne[t]=new je(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ne[t]=new je(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ne[t]=new je(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ne[t]=new je(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ne[t]=new je(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wf=/[\-:]([a-z])/g;function Hf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wf,Hf);Ne[e]=new je(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wf,Hf);Ne[e]=new je(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wf,Hf);Ne[e]=new je(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ne[t]=new je(t,1,!1,t.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ne[t]=new je(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vf(t,e,n,r){var i=Ne.hasOwnProperty(e)?Ne[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(LE(e,n,i,r)&&(n=null),r||i===null?OE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var cn=vv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wo=Symbol.for("react.element"),Mr=Symbol.for("react.portal"),Fr=Symbol.for("react.fragment"),Gf=Symbol.for("react.strict_mode"),tc=Symbol.for("react.profiler"),_v=Symbol.for("react.provider"),wv=Symbol.for("react.context"),Kf=Symbol.for("react.forward_ref"),nc=Symbol.for("react.suspense"),rc=Symbol.for("react.suspense_list"),qf=Symbol.for("react.memo"),vn=Symbol.for("react.lazy"),Ev=Symbol.for("react.offscreen"),Vh=Symbol.iterator;function Mi(t){return t===null||typeof t!="object"?null:(t=Vh&&t[Vh]||t["@@iterator"],typeof t=="function"?t:null)}var le=Object.assign,Xl;function Qi(t){if(Xl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Xl=e&&e[1]||""}return`
`+Xl+t}var Jl=!1;function Zl(t,e){if(!t||Jl)return"";Jl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Jl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qi(t):""}function ME(t){switch(t.tag){case 5:return Qi(t.type);case 16:return Qi("Lazy");case 13:return Qi("Suspense");case 19:return Qi("SuspenseList");case 0:case 2:case 15:return t=Zl(t.type,!1),t;case 11:return t=Zl(t.type.render,!1),t;case 1:return t=Zl(t.type,!0),t;default:return""}}function ic(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Fr:return"Fragment";case Mr:return"Portal";case tc:return"Profiler";case Gf:return"StrictMode";case nc:return"Suspense";case rc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case wv:return(t.displayName||"Context")+".Consumer";case _v:return(t._context.displayName||"Context")+".Provider";case Kf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case qf:return e=t.displayName||null,e!==null?e:ic(t.type)||"Memo";case vn:e=t._payload,t=t._init;try{return ic(t(e))}catch{}}return null}function FE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ic(e);case 8:return e===Gf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function zn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Sv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function UE(t){var e=Sv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Eo(t){t._valueTracker||(t._valueTracker=UE(t))}function kv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Sv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ma(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function sc(t,e){var n=e.checked;return le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Gh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=zn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Iv(t,e){e=e.checked,e!=null&&Vf(t,"checked",e,!1)}function oc(t,e){Iv(t,e);var n=zn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ac(t,e.type,n):e.hasOwnProperty("defaultValue")&&ac(t,e.type,zn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Kh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ac(t,e,n){(e!=="number"||ma(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Xi=Array.isArray;function Zr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+zn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function lc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function qh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(Xi(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:zn(n)}}function Cv(t,e){var n=zn(e.value),r=zn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Yh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function bv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?bv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var So,Tv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(So=So||document.createElement("div"),So.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=So.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function _s(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ts={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zE=["Webkit","ms","Moz","O"];Object.keys(ts).forEach(function(t){zE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ts[e]=ts[t]})});function Nv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ts.hasOwnProperty(t)&&ts[t]?(""+e).trim():e+"px"}function xv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Nv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var jE=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cc(t,e){if(e){if(jE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function fc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dc=null;function Yf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hc=null,ei=null,ti=null;function Qh(t){if(t=Xs(t)){if(typeof hc!="function")throw Error(k(280));var e=t.stateNode;e&&(e=gl(e),hc(t.stateNode,t.type,e))}}function Rv(t){ei?ti?ti.push(t):ti=[t]:ei=t}function Av(){if(ei){var t=ei,e=ti;if(ti=ei=null,Qh(t),e)for(t=0;t<e.length;t++)Qh(e[t])}}function Pv(t,e){return t(e)}function Ov(){}var eu=!1;function Dv(t,e,n){if(eu)return t(e,n);eu=!0;try{return Pv(t,e,n)}finally{eu=!1,(ei!==null||ti!==null)&&(Ov(),Av())}}function ws(t,e){var n=t.stateNode;if(n===null)return null;var r=gl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var pc=!1;if(en)try{var Fi={};Object.defineProperty(Fi,"passive",{get:function(){pc=!0}}),window.addEventListener("test",Fi,Fi),window.removeEventListener("test",Fi,Fi)}catch{pc=!1}function BE(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ns=!1,ga=null,va=!1,mc=null,$E={onError:function(t){ns=!0,ga=t}};function WE(t,e,n,r,i,s,o,a,l){ns=!1,ga=null,BE.apply($E,arguments)}function HE(t,e,n,r,i,s,o,a,l){if(WE.apply(this,arguments),ns){if(ns){var u=ga;ns=!1,ga=null}else throw Error(k(198));va||(va=!0,mc=u)}}function xr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Lv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Xh(t){if(xr(t)!==t)throw Error(k(188))}function VE(t){var e=t.alternate;if(!e){if(e=xr(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Xh(i),t;if(s===r)return Xh(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function Mv(t){return t=VE(t),t!==null?Fv(t):null}function Fv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Fv(t);if(e!==null)return e;t=t.sibling}return null}var Uv=et.unstable_scheduleCallback,Jh=et.unstable_cancelCallback,GE=et.unstable_shouldYield,KE=et.unstable_requestPaint,de=et.unstable_now,qE=et.unstable_getCurrentPriorityLevel,Qf=et.unstable_ImmediatePriority,zv=et.unstable_UserBlockingPriority,ya=et.unstable_NormalPriority,YE=et.unstable_LowPriority,jv=et.unstable_IdlePriority,dl=null,Lt=null;function QE(t){if(Lt&&typeof Lt.onCommitFiberRoot=="function")try{Lt.onCommitFiberRoot(dl,t,void 0,(t.current.flags&128)===128)}catch{}}var It=Math.clz32?Math.clz32:ZE,XE=Math.log,JE=Math.LN2;function ZE(t){return t>>>=0,t===0?32:31-(XE(t)/JE|0)|0}var ko=64,Io=4194304;function Ji(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _a(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ji(a):(s&=o,s!==0&&(r=Ji(s)))}else o=n&~i,o!==0?r=Ji(o):s!==0&&(r=Ji(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-It(e),i=1<<n,r|=t[n],e&=~i;return r}function eS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-It(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=eS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function gc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Bv(){var t=ko;return ko<<=1,!(ko&4194240)&&(ko=64),t}function tu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ys(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-It(e),t[e]=n}function nS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-It(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Xf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-It(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var q=0;function $v(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Wv,Jf,Hv,Vv,Gv,vc=!1,Co=[],Tn=null,Nn=null,xn=null,Es=new Map,Ss=new Map,_n=[],rS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zh(t,e){switch(t){case"focusin":case"focusout":Tn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":Es.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ss.delete(e.pointerId)}}function Ui(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Xs(e),e!==null&&Jf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function iS(t,e,n,r,i){switch(e){case"focusin":return Tn=Ui(Tn,t,e,n,r,i),!0;case"dragenter":return Nn=Ui(Nn,t,e,n,r,i),!0;case"mouseover":return xn=Ui(xn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Es.set(s,Ui(Es.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ss.set(s,Ui(Ss.get(s)||null,t,e,n,r,i)),!0}return!1}function Kv(t){var e=er(t.target);if(e!==null){var n=xr(e);if(n!==null){if(e=n.tag,e===13){if(e=Lv(n),e!==null){t.blockedOn=e,Gv(t.priority,function(){Hv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=yc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);dc=r,n.target.dispatchEvent(r),dc=null}else return e=Xs(n),e!==null&&Jf(e),t.blockedOn=n,!1;e.shift()}return!0}function ep(t,e,n){Qo(t)&&n.delete(e)}function sS(){vc=!1,Tn!==null&&Qo(Tn)&&(Tn=null),Nn!==null&&Qo(Nn)&&(Nn=null),xn!==null&&Qo(xn)&&(xn=null),Es.forEach(ep),Ss.forEach(ep)}function zi(t,e){t.blockedOn===e&&(t.blockedOn=null,vc||(vc=!0,et.unstable_scheduleCallback(et.unstable_NormalPriority,sS)))}function ks(t){function e(i){return zi(i,t)}if(0<Co.length){zi(Co[0],t);for(var n=1;n<Co.length;n++){var r=Co[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Tn!==null&&zi(Tn,t),Nn!==null&&zi(Nn,t),xn!==null&&zi(xn,t),Es.forEach(e),Ss.forEach(e),n=0;n<_n.length;n++)r=_n[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<_n.length&&(n=_n[0],n.blockedOn===null);)Kv(n),n.blockedOn===null&&_n.shift()}var ni=cn.ReactCurrentBatchConfig,wa=!0;function oS(t,e,n,r){var i=q,s=ni.transition;ni.transition=null;try{q=1,Zf(t,e,n,r)}finally{q=i,ni.transition=s}}function aS(t,e,n,r){var i=q,s=ni.transition;ni.transition=null;try{q=4,Zf(t,e,n,r)}finally{q=i,ni.transition=s}}function Zf(t,e,n,r){if(wa){var i=yc(t,e,n,r);if(i===null)fu(t,e,r,Ea,n),Zh(t,r);else if(iS(i,t,e,n,r))r.stopPropagation();else if(Zh(t,r),e&4&&-1<rS.indexOf(t)){for(;i!==null;){var s=Xs(i);if(s!==null&&Wv(s),s=yc(t,e,n,r),s===null&&fu(t,e,r,Ea,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else fu(t,e,r,null,n)}}var Ea=null;function yc(t,e,n,r){if(Ea=null,t=Yf(r),t=er(t),t!==null)if(e=xr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Lv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ea=t,null}function qv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qE()){case Qf:return 1;case zv:return 4;case ya:case YE:return 16;case jv:return 536870912;default:return 16}default:return 16}}var In=null,ed=null,Xo=null;function Yv(){if(Xo)return Xo;var t,e=ed,n=e.length,r,i="value"in In?In.value:In.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Xo=i.slice(t,1<r?1-r:void 0)}function Jo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function bo(){return!0}function tp(){return!1}function nt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?bo:tp,this.isPropagationStopped=tp,this}return le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bo)},persist:function(){},isPersistent:bo}),e}var Ci={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=nt(Ci),Qs=le({},Ci,{view:0,detail:0}),lS=nt(Qs),nu,ru,ji,hl=le({},Qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ji&&(ji&&t.type==="mousemove"?(nu=t.screenX-ji.screenX,ru=t.screenY-ji.screenY):ru=nu=0,ji=t),nu)},movementY:function(t){return"movementY"in t?t.movementY:ru}}),np=nt(hl),uS=le({},hl,{dataTransfer:0}),cS=nt(uS),fS=le({},Qs,{relatedTarget:0}),iu=nt(fS),dS=le({},Ci,{animationName:0,elapsedTime:0,pseudoElement:0}),hS=nt(dS),pS=le({},Ci,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),mS=nt(pS),gS=le({},Ci,{data:0}),rp=nt(gS),vS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_S={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_S[t])?!!e[t]:!1}function nd(){return wS}var ES=le({},Qs,{key:function(t){if(t.key){var e=vS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Jo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?yS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nd,charCode:function(t){return t.type==="keypress"?Jo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Jo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),SS=nt(ES),kS=le({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ip=nt(kS),IS=le({},Qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nd}),CS=nt(IS),bS=le({},Ci,{propertyName:0,elapsedTime:0,pseudoElement:0}),TS=nt(bS),NS=le({},hl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),xS=nt(NS),RS=[9,13,27,32],rd=en&&"CompositionEvent"in window,rs=null;en&&"documentMode"in document&&(rs=document.documentMode);var AS=en&&"TextEvent"in window&&!rs,Qv=en&&(!rd||rs&&8<rs&&11>=rs),sp=String.fromCharCode(32),op=!1;function Xv(t,e){switch(t){case"keyup":return RS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ur=!1;function PS(t,e){switch(t){case"compositionend":return Jv(e);case"keypress":return e.which!==32?null:(op=!0,sp);case"textInput":return t=e.data,t===sp&&op?null:t;default:return null}}function OS(t,e){if(Ur)return t==="compositionend"||!rd&&Xv(t,e)?(t=Yv(),Xo=ed=In=null,Ur=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Qv&&e.locale!=="ko"?null:e.data;default:return null}}var DS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ap(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!DS[t.type]:e==="textarea"}function Zv(t,e,n,r){Rv(r),e=Sa(e,"onChange"),0<e.length&&(n=new td("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var is=null,Is=null;function LS(t){cy(t,0)}function pl(t){var e=Br(t);if(kv(e))return t}function MS(t,e){if(t==="change")return e}var ey=!1;if(en){var su;if(en){var ou="oninput"in document;if(!ou){var lp=document.createElement("div");lp.setAttribute("oninput","return;"),ou=typeof lp.oninput=="function"}su=ou}else su=!1;ey=su&&(!document.documentMode||9<document.documentMode)}function up(){is&&(is.detachEvent("onpropertychange",ty),Is=is=null)}function ty(t){if(t.propertyName==="value"&&pl(Is)){var e=[];Zv(e,Is,t,Yf(t)),Dv(LS,e)}}function FS(t,e,n){t==="focusin"?(up(),is=e,Is=n,is.attachEvent("onpropertychange",ty)):t==="focusout"&&up()}function US(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pl(Is)}function zS(t,e){if(t==="click")return pl(e)}function jS(t,e){if(t==="input"||t==="change")return pl(e)}function BS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Tt=typeof Object.is=="function"?Object.is:BS;function Cs(t,e){if(Tt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ec.call(e,i)||!Tt(t[i],e[i]))return!1}return!0}function cp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fp(t,e){var n=cp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cp(n)}}function ny(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ny(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ry(){for(var t=window,e=ma();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ma(t.document)}return e}function id(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function $S(t){var e=ry(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ny(n.ownerDocument.documentElement,n)){if(r!==null&&id(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=fp(n,s);var o=fp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var WS=en&&"documentMode"in document&&11>=document.documentMode,zr=null,_c=null,ss=null,wc=!1;function dp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wc||zr==null||zr!==ma(r)||(r=zr,"selectionStart"in r&&id(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ss&&Cs(ss,r)||(ss=r,r=Sa(_c,"onSelect"),0<r.length&&(e=new td("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=zr)))}function To(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var jr={animationend:To("Animation","AnimationEnd"),animationiteration:To("Animation","AnimationIteration"),animationstart:To("Animation","AnimationStart"),transitionend:To("Transition","TransitionEnd")},au={},iy={};en&&(iy=document.createElement("div").style,"AnimationEvent"in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),"TransitionEvent"in window||delete jr.transitionend.transition);function ml(t){if(au[t])return au[t];if(!jr[t])return t;var e=jr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in iy)return au[t]=e[n];return t}var sy=ml("animationend"),oy=ml("animationiteration"),ay=ml("animationstart"),ly=ml("transitionend"),uy=new Map,hp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vn(t,e){uy.set(t,e),Nr(e,[t])}for(var lu=0;lu<hp.length;lu++){var uu=hp[lu],HS=uu.toLowerCase(),VS=uu[0].toUpperCase()+uu.slice(1);Vn(HS,"on"+VS)}Vn(sy,"onAnimationEnd");Vn(oy,"onAnimationIteration");Vn(ay,"onAnimationStart");Vn("dblclick","onDoubleClick");Vn("focusin","onFocus");Vn("focusout","onBlur");Vn(ly,"onTransitionEnd");fi("onMouseEnter",["mouseout","mouseover"]);fi("onMouseLeave",["mouseout","mouseover"]);fi("onPointerEnter",["pointerout","pointerover"]);fi("onPointerLeave",["pointerout","pointerover"]);Nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),GS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zi));function pp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,HE(r,e,void 0,t),t.currentTarget=null}function cy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;pp(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;pp(i,a,u),s=l}}}if(va)throw t=mc,va=!1,mc=null,t}function J(t,e){var n=e[Cc];n===void 0&&(n=e[Cc]=new Set);var r=t+"__bubble";n.has(r)||(fy(e,t,2,!1),n.add(r))}function cu(t,e,n){var r=0;e&&(r|=4),fy(n,t,r,e)}var No="_reactListening"+Math.random().toString(36).slice(2);function bs(t){if(!t[No]){t[No]=!0,yv.forEach(function(n){n!=="selectionchange"&&(GS.has(n)||cu(n,!1,t),cu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[No]||(e[No]=!0,cu("selectionchange",!1,e))}}function fy(t,e,n,r){switch(qv(e)){case 1:var i=oS;break;case 4:i=aS;break;default:i=Zf}n=i.bind(null,e,n,t),i=void 0,!pc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function fu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=er(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Dv(function(){var u=s,c=Yf(n),f=[];e:{var d=uy.get(t);if(d!==void 0){var g=td,m=t;switch(t){case"keypress":if(Jo(n)===0)break e;case"keydown":case"keyup":g=SS;break;case"focusin":m="focus",g=iu;break;case"focusout":m="blur",g=iu;break;case"beforeblur":case"afterblur":g=iu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=cS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=CS;break;case sy:case oy:case ay:g=hS;break;case ly:g=TS;break;case"scroll":g=lS;break;case"wheel":g=xS;break;case"copy":case"cut":case"paste":g=mS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ip}var y=(e&4)!==0,E=!y&&t==="scroll",p=y?d!==null?d+"Capture":null:d;y=[];for(var h=u,v;h!==null;){v=h;var _=v.stateNode;if(v.tag===5&&_!==null&&(v=_,p!==null&&(_=ws(h,p),_!=null&&y.push(Ts(h,_,v)))),E)break;h=h.return}0<y.length&&(d=new g(d,m,null,n,c),f.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==dc&&(m=n.relatedTarget||n.fromElement)&&(er(m)||m[tn]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(m=n.relatedTarget||n.toElement,g=u,m=m?er(m):null,m!==null&&(E=xr(m),m!==E||m.tag!==5&&m.tag!==6)&&(m=null)):(g=null,m=u),g!==m)){if(y=np,_="onMouseLeave",p="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(y=ip,_="onPointerLeave",p="onPointerEnter",h="pointer"),E=g==null?d:Br(g),v=m==null?d:Br(m),d=new y(_,h+"leave",g,n,c),d.target=E,d.relatedTarget=v,_=null,er(c)===u&&(y=new y(p,h+"enter",m,n,c),y.target=v,y.relatedTarget=E,_=y),E=_,g&&m)t:{for(y=g,p=m,h=0,v=y;v;v=Dr(v))h++;for(v=0,_=p;_;_=Dr(_))v++;for(;0<h-v;)y=Dr(y),h--;for(;0<v-h;)p=Dr(p),v--;for(;h--;){if(y===p||p!==null&&y===p.alternate)break t;y=Dr(y),p=Dr(p)}y=null}else y=null;g!==null&&mp(f,d,g,y,!1),m!==null&&E!==null&&mp(f,E,m,y,!0)}}e:{if(d=u?Br(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var I=MS;else if(ap(d))if(ey)I=jS;else{I=US;var b=FS}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(I=zS);if(I&&(I=I(t,u))){Zv(f,I,n,c);break e}b&&b(t,d,u),t==="focusout"&&(b=d._wrapperState)&&b.controlled&&d.type==="number"&&ac(d,"number",d.value)}switch(b=u?Br(u):window,t){case"focusin":(ap(b)||b.contentEditable==="true")&&(zr=b,_c=u,ss=null);break;case"focusout":ss=_c=zr=null;break;case"mousedown":wc=!0;break;case"contextmenu":case"mouseup":case"dragend":wc=!1,dp(f,n,c);break;case"selectionchange":if(WS)break;case"keydown":case"keyup":dp(f,n,c)}var N;if(rd)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Ur?Xv(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Qv&&n.locale!=="ko"&&(Ur||P!=="onCompositionStart"?P==="onCompositionEnd"&&Ur&&(N=Yv()):(In=c,ed="value"in In?In.value:In.textContent,Ur=!0)),b=Sa(u,P),0<b.length&&(P=new rp(P,t,null,n,c),f.push({event:P,listeners:b}),N?P.data=N:(N=Jv(n),N!==null&&(P.data=N)))),(N=AS?PS(t,n):OS(t,n))&&(u=Sa(u,"onBeforeInput"),0<u.length&&(c=new rp("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=N))}cy(f,e)})}function Ts(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Sa(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ws(t,n),s!=null&&r.unshift(Ts(t,s,i)),s=ws(t,e),s!=null&&r.push(Ts(t,s,i))),t=t.return}return r}function Dr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function mp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ws(n,s),l!=null&&o.unshift(Ts(n,l,a))):i||(l=ws(n,s),l!=null&&o.push(Ts(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var KS=/\r\n?/g,qS=/\u0000|\uFFFD/g;function gp(t){return(typeof t=="string"?t:""+t).replace(KS,`
`).replace(qS,"")}function xo(t,e,n){if(e=gp(e),gp(t)!==e&&n)throw Error(k(425))}function ka(){}var Ec=null,Sc=null;function kc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ic=typeof setTimeout=="function"?setTimeout:void 0,YS=typeof clearTimeout=="function"?clearTimeout:void 0,vp=typeof Promise=="function"?Promise:void 0,QS=typeof queueMicrotask=="function"?queueMicrotask:typeof vp<"u"?function(t){return vp.resolve(null).then(t).catch(XS)}:Ic;function XS(t){setTimeout(function(){throw t})}function du(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ks(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ks(e)}function Rn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function yp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var bi=Math.random().toString(36).slice(2),At="__reactFiber$"+bi,Ns="__reactProps$"+bi,tn="__reactContainer$"+bi,Cc="__reactEvents$"+bi,JS="__reactListeners$"+bi,ZS="__reactHandles$"+bi;function er(t){var e=t[At];if(e)return e;for(var n=t.parentNode;n;){if(e=n[tn]||n[At]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=yp(t);t!==null;){if(n=t[At])return n;t=yp(t)}return e}t=n,n=t.parentNode}return null}function Xs(t){return t=t[At]||t[tn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Br(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function gl(t){return t[Ns]||null}var bc=[],$r=-1;function Gn(t){return{current:t}}function ne(t){0>$r||(t.current=bc[$r],bc[$r]=null,$r--)}function X(t,e){$r++,bc[$r]=t.current,t.current=e}var jn={},Le=Gn(jn),He=Gn(!1),hr=jn;function di(t,e){var n=t.type.contextTypes;if(!n)return jn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ve(t){return t=t.childContextTypes,t!=null}function Ia(){ne(He),ne(Le)}function _p(t,e,n){if(Le.current!==jn)throw Error(k(168));X(Le,e),X(He,n)}function dy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,FE(t)||"Unknown",i));return le({},n,r)}function Ca(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||jn,hr=Le.current,X(Le,t),X(He,He.current),!0}function wp(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=dy(t,e,hr),r.__reactInternalMemoizedMergedChildContext=t,ne(He),ne(Le),X(Le,t)):ne(He),X(He,n)}var Vt=null,vl=!1,hu=!1;function hy(t){Vt===null?Vt=[t]:Vt.push(t)}function ek(t){vl=!0,hy(t)}function Kn(){if(!hu&&Vt!==null){hu=!0;var t=0,e=q;try{var n=Vt;for(q=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Vt=null,vl=!1}catch(i){throw Vt!==null&&(Vt=Vt.slice(t+1)),Uv(Qf,Kn),i}finally{q=e,hu=!1}}return null}var Wr=[],Hr=0,ba=null,Ta=0,it=[],st=0,pr=null,Gt=1,Kt="";function Qn(t,e){Wr[Hr++]=Ta,Wr[Hr++]=ba,ba=t,Ta=e}function py(t,e,n){it[st++]=Gt,it[st++]=Kt,it[st++]=pr,pr=t;var r=Gt;t=Kt;var i=32-It(r)-1;r&=~(1<<i),n+=1;var s=32-It(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Gt=1<<32-It(e)+i|n<<i|r,Kt=s+t}else Gt=1<<s|n<<i|r,Kt=t}function sd(t){t.return!==null&&(Qn(t,1),py(t,1,0))}function od(t){for(;t===ba;)ba=Wr[--Hr],Wr[Hr]=null,Ta=Wr[--Hr],Wr[Hr]=null;for(;t===pr;)pr=it[--st],it[st]=null,Kt=it[--st],it[st]=null,Gt=it[--st],it[st]=null}var Xe=null,Qe=null,se=!1,wt=null;function my(t,e){var n=at(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ep(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Xe=t,Qe=Rn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Xe=t,Qe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=pr!==null?{id:Gt,overflow:Kt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=at(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Xe=t,Qe=null,!0):!1;default:return!1}}function Tc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Nc(t){if(se){var e=Qe;if(e){var n=e;if(!Ep(t,e)){if(Tc(t))throw Error(k(418));e=Rn(n.nextSibling);var r=Xe;e&&Ep(t,e)?my(r,n):(t.flags=t.flags&-4097|2,se=!1,Xe=t)}}else{if(Tc(t))throw Error(k(418));t.flags=t.flags&-4097|2,se=!1,Xe=t}}}function Sp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Xe=t}function Ro(t){if(t!==Xe)return!1;if(!se)return Sp(t),se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!kc(t.type,t.memoizedProps)),e&&(e=Qe)){if(Tc(t))throw gy(),Error(k(418));for(;e;)my(t,e),e=Rn(e.nextSibling)}if(Sp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Qe=Rn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Qe=null}}else Qe=Xe?Rn(t.stateNode.nextSibling):null;return!0}function gy(){for(var t=Qe;t;)t=Rn(t.nextSibling)}function hi(){Qe=Xe=null,se=!1}function ad(t){wt===null?wt=[t]:wt.push(t)}var tk=cn.ReactCurrentBatchConfig;function yt(t,e){if(t&&t.defaultProps){e=le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Na=Gn(null),xa=null,Vr=null,ld=null;function ud(){ld=Vr=xa=null}function cd(t){var e=Na.current;ne(Na),t._currentValue=e}function xc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ri(t,e){xa=t,ld=Vr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&($e=!0),t.firstContext=null)}function dt(t){var e=t._currentValue;if(ld!==t)if(t={context:t,memoizedValue:e,next:null},Vr===null){if(xa===null)throw Error(k(308));Vr=t,xa.dependencies={lanes:0,firstContext:t}}else Vr=Vr.next=t;return e}var tr=null;function fd(t){tr===null?tr=[t]:tr.push(t)}function vy(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,fd(e)):(n.next=i.next,i.next=n),e.interleaved=n,nn(t,r)}function nn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var yn=!1;function dd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Xt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function An(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,nn(t,n)}return i=r.interleaved,i===null?(e.next=e,fd(r)):(e.next=i.next,i.next=e),r.interleaved=e,nn(t,n)}function Zo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xf(t,n)}}function kp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ra(t,e,n,r){var i=t.updateQueue;yn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,y=a;switch(d=e,g=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){f=m.call(g,f,d);break e}f=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,d=typeof m=="function"?m.call(g,f,d):m,d==null)break e;f=le({},f,d);break e;case 2:yn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);gr|=o,t.lanes=o,t.memoizedState=f}}function Ip(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var _y=new vv.Component().refs;function Rc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var yl={isMounted:function(t){return(t=t._reactInternals)?xr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ue(),i=On(t),s=Xt(r,i);s.payload=e,n!=null&&(s.callback=n),e=An(t,s,i),e!==null&&(Ct(e,t,i,r),Zo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ue(),i=On(t),s=Xt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=An(t,s,i),e!==null&&(Ct(e,t,i,r),Zo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ue(),r=On(t),i=Xt(n,r);i.tag=2,e!=null&&(i.callback=e),e=An(t,i,r),e!==null&&(Ct(e,t,r,n),Zo(e,t,r))}};function Cp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Cs(n,r)||!Cs(i,s):!0}function wy(t,e,n){var r=!1,i=jn,s=e.contextType;return typeof s=="object"&&s!==null?s=dt(s):(i=Ve(e)?hr:Le.current,r=e.contextTypes,s=(r=r!=null)?di(t,i):jn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=yl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function bp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&yl.enqueueReplaceState(e,e.state,null)}function Ac(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=_y,dd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=dt(s):(s=Ve(e)?hr:Le.current,i.context=di(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Rc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&yl.enqueueReplaceState(i,i.state,null),Ra(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Bi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===_y&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function Ao(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Tp(t){var e=t._init;return e(t._payload)}function Ey(t){function e(p,h){if(t){var v=p.deletions;v===null?(p.deletions=[h],p.flags|=16):v.push(h)}}function n(p,h){if(!t)return null;for(;h!==null;)e(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=Dn(p,h),p.index=0,p.sibling=null,p}function s(p,h,v){return p.index=v,t?(v=p.alternate,v!==null?(v=v.index,v<h?(p.flags|=2,h):v):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,h,v,_){return h===null||h.tag!==6?(h=wu(v,p.mode,_),h.return=p,h):(h=i(h,v),h.return=p,h)}function l(p,h,v,_){var I=v.type;return I===Fr?c(p,h,v.props.children,_,v.key):h!==null&&(h.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===vn&&Tp(I)===h.type)?(_=i(h,v.props),_.ref=Bi(p,h,v),_.return=p,_):(_=sa(v.type,v.key,v.props,null,p.mode,_),_.ref=Bi(p,h,v),_.return=p,_)}function u(p,h,v,_){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=Eu(v,p.mode,_),h.return=p,h):(h=i(h,v.children||[]),h.return=p,h)}function c(p,h,v,_,I){return h===null||h.tag!==7?(h=cr(v,p.mode,_,I),h.return=p,h):(h=i(h,v),h.return=p,h)}function f(p,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=wu(""+h,p.mode,v),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case wo:return v=sa(h.type,h.key,h.props,null,p.mode,v),v.ref=Bi(p,null,h),v.return=p,v;case Mr:return h=Eu(h,p.mode,v),h.return=p,h;case vn:var _=h._init;return f(p,_(h._payload),v)}if(Xi(h)||Mi(h))return h=cr(h,p.mode,v,null),h.return=p,h;Ao(p,h)}return null}function d(p,h,v,_){var I=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return I!==null?null:a(p,h,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case wo:return v.key===I?l(p,h,v,_):null;case Mr:return v.key===I?u(p,h,v,_):null;case vn:return I=v._init,d(p,h,I(v._payload),_)}if(Xi(v)||Mi(v))return I!==null?null:c(p,h,v,_,null);Ao(p,v)}return null}function g(p,h,v,_,I){if(typeof _=="string"&&_!==""||typeof _=="number")return p=p.get(v)||null,a(h,p,""+_,I);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case wo:return p=p.get(_.key===null?v:_.key)||null,l(h,p,_,I);case Mr:return p=p.get(_.key===null?v:_.key)||null,u(h,p,_,I);case vn:var b=_._init;return g(p,h,v,b(_._payload),I)}if(Xi(_)||Mi(_))return p=p.get(v)||null,c(h,p,_,I,null);Ao(h,_)}return null}function m(p,h,v,_){for(var I=null,b=null,N=h,P=h=0,T=null;N!==null&&P<v.length;P++){N.index>P?(T=N,N=null):T=N.sibling;var D=d(p,N,v[P],_);if(D===null){N===null&&(N=T);break}t&&N&&D.alternate===null&&e(p,N),h=s(D,h,P),b===null?I=D:b.sibling=D,b=D,N=T}if(P===v.length)return n(p,N),se&&Qn(p,P),I;if(N===null){for(;P<v.length;P++)N=f(p,v[P],_),N!==null&&(h=s(N,h,P),b===null?I=N:b.sibling=N,b=N);return se&&Qn(p,P),I}for(N=r(p,N);P<v.length;P++)T=g(N,p,P,v[P],_),T!==null&&(t&&T.alternate!==null&&N.delete(T.key===null?P:T.key),h=s(T,h,P),b===null?I=T:b.sibling=T,b=T);return t&&N.forEach(function(ye){return e(p,ye)}),se&&Qn(p,P),I}function y(p,h,v,_){var I=Mi(v);if(typeof I!="function")throw Error(k(150));if(v=I.call(v),v==null)throw Error(k(151));for(var b=I=null,N=h,P=h=0,T=null,D=v.next();N!==null&&!D.done;P++,D=v.next()){N.index>P?(T=N,N=null):T=N.sibling;var ye=d(p,N,D.value,_);if(ye===null){N===null&&(N=T);break}t&&N&&ye.alternate===null&&e(p,N),h=s(ye,h,P),b===null?I=ye:b.sibling=ye,b=ye,N=T}if(D.done)return n(p,N),se&&Qn(p,P),I;if(N===null){for(;!D.done;P++,D=v.next())D=f(p,D.value,_),D!==null&&(h=s(D,h,P),b===null?I=D:b.sibling=D,b=D);return se&&Qn(p,P),I}for(N=r(p,N);!D.done;P++,D=v.next())D=g(N,p,P,D.value,_),D!==null&&(t&&D.alternate!==null&&N.delete(D.key===null?P:D.key),h=s(D,h,P),b===null?I=D:b.sibling=D,b=D);return t&&N.forEach(function(qe){return e(p,qe)}),se&&Qn(p,P),I}function E(p,h,v,_){if(typeof v=="object"&&v!==null&&v.type===Fr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case wo:e:{for(var I=v.key,b=h;b!==null;){if(b.key===I){if(I=v.type,I===Fr){if(b.tag===7){n(p,b.sibling),h=i(b,v.props.children),h.return=p,p=h;break e}}else if(b.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===vn&&Tp(I)===b.type){n(p,b.sibling),h=i(b,v.props),h.ref=Bi(p,b,v),h.return=p,p=h;break e}n(p,b);break}else e(p,b);b=b.sibling}v.type===Fr?(h=cr(v.props.children,p.mode,_,v.key),h.return=p,p=h):(_=sa(v.type,v.key,v.props,null,p.mode,_),_.ref=Bi(p,h,v),_.return=p,p=_)}return o(p);case Mr:e:{for(b=v.key;h!==null;){if(h.key===b)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){n(p,h.sibling),h=i(h,v.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else e(p,h);h=h.sibling}h=Eu(v,p.mode,_),h.return=p,p=h}return o(p);case vn:return b=v._init,E(p,h,b(v._payload),_)}if(Xi(v))return m(p,h,v,_);if(Mi(v))return y(p,h,v,_);Ao(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,v),h.return=p,p=h):(n(p,h),h=wu(v,p.mode,_),h.return=p,p=h),o(p)):n(p,h)}return E}var pi=Ey(!0),Sy=Ey(!1),Js={},Mt=Gn(Js),xs=Gn(Js),Rs=Gn(Js);function nr(t){if(t===Js)throw Error(k(174));return t}function hd(t,e){switch(X(Rs,e),X(xs,t),X(Mt,Js),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:uc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=uc(e,t)}ne(Mt),X(Mt,e)}function mi(){ne(Mt),ne(xs),ne(Rs)}function ky(t){nr(Rs.current);var e=nr(Mt.current),n=uc(e,t.type);e!==n&&(X(xs,t),X(Mt,n))}function pd(t){xs.current===t&&(ne(Mt),ne(xs))}var oe=Gn(0);function Aa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var pu=[];function md(){for(var t=0;t<pu.length;t++)pu[t]._workInProgressVersionPrimary=null;pu.length=0}var ea=cn.ReactCurrentDispatcher,mu=cn.ReactCurrentBatchConfig,mr=0,ae=null,me=null,Ee=null,Pa=!1,os=!1,As=0,nk=0;function xe(){throw Error(k(321))}function gd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Tt(t[n],e[n]))return!1;return!0}function vd(t,e,n,r,i,s){if(mr=s,ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ea.current=t===null||t.memoizedState===null?ok:ak,t=n(r,i),os){s=0;do{if(os=!1,As=0,25<=s)throw Error(k(301));s+=1,Ee=me=null,e.updateQueue=null,ea.current=lk,t=n(r,i)}while(os)}if(ea.current=Oa,e=me!==null&&me.next!==null,mr=0,Ee=me=ae=null,Pa=!1,e)throw Error(k(300));return t}function yd(){var t=As!==0;return As=0,t}function Rt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?ae.memoizedState=Ee=t:Ee=Ee.next=t,Ee}function ht(){if(me===null){var t=ae.alternate;t=t!==null?t.memoizedState:null}else t=me.next;var e=Ee===null?ae.memoizedState:Ee.next;if(e!==null)Ee=e,me=t;else{if(t===null)throw Error(k(310));me=t,t={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},Ee===null?ae.memoizedState=Ee=t:Ee=Ee.next=t}return Ee}function Ps(t,e){return typeof e=="function"?e(t):e}function gu(t){var e=ht(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((mr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,ae.lanes|=c,gr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Tt(r,e.memoizedState)||($e=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ae.lanes|=s,gr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function vu(t){var e=ht(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Tt(s,e.memoizedState)||($e=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Iy(){}function Cy(t,e){var n=ae,r=ht(),i=e(),s=!Tt(r.memoizedState,i);if(s&&(r.memoizedState=i,$e=!0),r=r.queue,_d(Ny.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,Os(9,Ty.bind(null,n,r,i,e),void 0,null),Ie===null)throw Error(k(349));mr&30||by(n,e,i)}return i}function by(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ty(t,e,n,r){e.value=n,e.getSnapshot=r,xy(e)&&Ry(t)}function Ny(t,e,n){return n(function(){xy(e)&&Ry(t)})}function xy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Tt(t,n)}catch{return!0}}function Ry(t){var e=nn(t,1);e!==null&&Ct(e,t,1,-1)}function Np(t){var e=Rt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ps,lastRenderedState:t},e.queue=t,t=t.dispatch=sk.bind(null,ae,t),[e.memoizedState,t]}function Os(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Ay(){return ht().memoizedState}function ta(t,e,n,r){var i=Rt();ae.flags|=t,i.memoizedState=Os(1|e,n,void 0,r===void 0?null:r)}function _l(t,e,n,r){var i=ht();r=r===void 0?null:r;var s=void 0;if(me!==null){var o=me.memoizedState;if(s=o.destroy,r!==null&&gd(r,o.deps)){i.memoizedState=Os(e,n,s,r);return}}ae.flags|=t,i.memoizedState=Os(1|e,n,s,r)}function xp(t,e){return ta(8390656,8,t,e)}function _d(t,e){return _l(2048,8,t,e)}function Py(t,e){return _l(4,2,t,e)}function Oy(t,e){return _l(4,4,t,e)}function Dy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ly(t,e,n){return n=n!=null?n.concat([t]):null,_l(4,4,Dy.bind(null,e,t),n)}function wd(){}function My(t,e){var n=ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&gd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Fy(t,e){var n=ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&gd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Uy(t,e,n){return mr&21?(Tt(n,e)||(n=Bv(),ae.lanes|=n,gr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,$e=!0),t.memoizedState=n)}function rk(t,e){var n=q;q=n!==0&&4>n?n:4,t(!0);var r=mu.transition;mu.transition={};try{t(!1),e()}finally{q=n,mu.transition=r}}function zy(){return ht().memoizedState}function ik(t,e,n){var r=On(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},jy(t))By(e,n);else if(n=vy(t,e,n,r),n!==null){var i=Ue();Ct(n,t,r,i),$y(n,e,r)}}function sk(t,e,n){var r=On(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(jy(t))By(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Tt(a,o)){var l=e.interleaved;l===null?(i.next=i,fd(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=vy(t,e,i,r),n!==null&&(i=Ue(),Ct(n,t,r,i),$y(n,e,r))}}function jy(t){var e=t.alternate;return t===ae||e!==null&&e===ae}function By(t,e){os=Pa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function $y(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xf(t,n)}}var Oa={readContext:dt,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},ok={readContext:dt,useCallback:function(t,e){return Rt().memoizedState=[t,e===void 0?null:e],t},useContext:dt,useEffect:xp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ta(4194308,4,Dy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ta(4194308,4,t,e)},useInsertionEffect:function(t,e){return ta(4,2,t,e)},useMemo:function(t,e){var n=Rt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Rt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ik.bind(null,ae,t),[r.memoizedState,t]},useRef:function(t){var e=Rt();return t={current:t},e.memoizedState=t},useState:Np,useDebugValue:wd,useDeferredValue:function(t){return Rt().memoizedState=t},useTransition:function(){var t=Np(!1),e=t[0];return t=rk.bind(null,t[1]),Rt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ae,i=Rt();if(se){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),Ie===null)throw Error(k(349));mr&30||by(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,xp(Ny.bind(null,r,s,t),[t]),r.flags|=2048,Os(9,Ty.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Rt(),e=Ie.identifierPrefix;if(se){var n=Kt,r=Gt;n=(r&~(1<<32-It(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=As++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=nk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ak={readContext:dt,useCallback:My,useContext:dt,useEffect:_d,useImperativeHandle:Ly,useInsertionEffect:Py,useLayoutEffect:Oy,useMemo:Fy,useReducer:gu,useRef:Ay,useState:function(){return gu(Ps)},useDebugValue:wd,useDeferredValue:function(t){var e=ht();return Uy(e,me.memoizedState,t)},useTransition:function(){var t=gu(Ps)[0],e=ht().memoizedState;return[t,e]},useMutableSource:Iy,useSyncExternalStore:Cy,useId:zy,unstable_isNewReconciler:!1},lk={readContext:dt,useCallback:My,useContext:dt,useEffect:_d,useImperativeHandle:Ly,useInsertionEffect:Py,useLayoutEffect:Oy,useMemo:Fy,useReducer:vu,useRef:Ay,useState:function(){return vu(Ps)},useDebugValue:wd,useDeferredValue:function(t){var e=ht();return me===null?e.memoizedState=t:Uy(e,me.memoizedState,t)},useTransition:function(){var t=vu(Ps)[0],e=ht().memoizedState;return[t,e]},useMutableSource:Iy,useSyncExternalStore:Cy,useId:zy,unstable_isNewReconciler:!1};function gi(t,e){try{var n="",r=e;do n+=ME(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function yu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Pc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var uk=typeof WeakMap=="function"?WeakMap:Map;function Wy(t,e,n){n=Xt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){La||(La=!0,$c=r),Pc(t,e)},n}function Hy(t,e,n){n=Xt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Pc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Pc(t,e),typeof r!="function"&&(Pn===null?Pn=new Set([this]):Pn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Rp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new uk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=kk.bind(null,t,e,n),e.then(t,t))}function Ap(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Pp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Xt(-1,1),e.tag=2,An(n,e,1))),n.lanes|=1),t)}var ck=cn.ReactCurrentOwner,$e=!1;function Fe(t,e,n,r){e.child=t===null?Sy(e,null,n,r):pi(e,t.child,n,r)}function Op(t,e,n,r,i){n=n.render;var s=e.ref;return ri(e,i),r=vd(t,e,n,r,s,i),n=yd(),t!==null&&!$e?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,rn(t,e,i)):(se&&n&&sd(e),e.flags|=1,Fe(t,e,r,i),e.child)}function Dp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Nd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Vy(t,e,s,r,i)):(t=sa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Cs,n(o,r)&&t.ref===e.ref)return rn(t,e,i)}return e.flags|=1,t=Dn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Vy(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Cs(s,r)&&t.ref===e.ref)if($e=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&($e=!0);else return e.lanes=t.lanes,rn(t,e,i)}return Oc(t,e,n,r,i)}function Gy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(Kr,Ye),Ye|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,X(Kr,Ye),Ye|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,X(Kr,Ye),Ye|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,X(Kr,Ye),Ye|=r;return Fe(t,e,i,n),e.child}function Ky(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Oc(t,e,n,r,i){var s=Ve(n)?hr:Le.current;return s=di(e,s),ri(e,i),n=vd(t,e,n,r,s,i),r=yd(),t!==null&&!$e?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,rn(t,e,i)):(se&&r&&sd(e),e.flags|=1,Fe(t,e,n,i),e.child)}function Lp(t,e,n,r,i){if(Ve(n)){var s=!0;Ca(e)}else s=!1;if(ri(e,i),e.stateNode===null)na(t,e),wy(e,n,r),Ac(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=dt(u):(u=Ve(n)?hr:Le.current,u=di(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&bp(e,o,r,u),yn=!1;var d=e.memoizedState;o.state=d,Ra(e,r,o,i),l=e.memoizedState,a!==r||d!==l||He.current||yn?(typeof c=="function"&&(Rc(e,n,c,r),l=e.memoizedState),(a=yn||Cp(e,n,a,r,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,yy(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:yt(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=dt(l):(l=Ve(n)?hr:Le.current,l=di(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&bp(e,o,r,l),yn=!1,d=e.memoizedState,o.state=d,Ra(e,r,o,i);var m=e.memoizedState;a!==f||d!==m||He.current||yn?(typeof g=="function"&&(Rc(e,n,g,r),m=e.memoizedState),(u=yn||Cp(e,n,u,r,d,m,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=m),o.props=r,o.state=m,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Dc(t,e,n,r,s,i)}function Dc(t,e,n,r,i,s){Ky(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&wp(e,n,!1),rn(t,e,s);r=e.stateNode,ck.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=pi(e,t.child,null,s),e.child=pi(e,null,a,s)):Fe(t,e,a,s),e.memoizedState=r.state,i&&wp(e,n,!0),e.child}function qy(t){var e=t.stateNode;e.pendingContext?_p(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_p(t,e.context,!1),hd(t,e.containerInfo)}function Mp(t,e,n,r,i){return hi(),ad(i),e.flags|=256,Fe(t,e,n,r),e.child}var Lc={dehydrated:null,treeContext:null,retryLane:0};function Mc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Yy(t,e,n){var r=e.pendingProps,i=oe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),X(oe,i&1),t===null)return Nc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Sl(o,r,0,null),t=cr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Mc(n),e.memoizedState=Lc,t):Ed(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return fk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Dn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Dn(a,s):(s=cr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Mc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Lc,r}return s=t.child,t=s.sibling,r=Dn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ed(t,e){return e=Sl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Po(t,e,n,r){return r!==null&&ad(r),pi(e,t.child,null,n),t=Ed(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function fk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=yu(Error(k(422))),Po(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Sl({mode:"visible",children:r.children},i,0,null),s=cr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&pi(e,t.child,null,o),e.child.memoizedState=Mc(o),e.memoizedState=Lc,s);if(!(e.mode&1))return Po(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=yu(s,r,void 0),Po(t,e,o,r)}if(a=(o&t.childLanes)!==0,$e||a){if(r=Ie,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,nn(t,i),Ct(r,t,i,-1))}return Td(),r=yu(Error(k(421))),Po(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Ik.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Qe=Rn(i.nextSibling),Xe=e,se=!0,wt=null,t!==null&&(it[st++]=Gt,it[st++]=Kt,it[st++]=pr,Gt=t.id,Kt=t.overflow,pr=e),e=Ed(e,r.children),e.flags|=4096,e)}function Fp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),xc(t.return,e,n)}function _u(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Qy(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Fe(t,e,r.children,n),r=oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fp(t,n,e);else if(t.tag===19)Fp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(X(oe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Aa(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),_u(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Aa(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}_u(e,!0,n,null,s);break;case"together":_u(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function na(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function rn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),gr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=Dn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Dn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function dk(t,e,n){switch(e.tag){case 3:qy(e),hi();break;case 5:ky(e);break;case 1:Ve(e.type)&&Ca(e);break;case 4:hd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;X(Na,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(X(oe,oe.current&1),e.flags|=128,null):n&e.child.childLanes?Yy(t,e,n):(X(oe,oe.current&1),t=rn(t,e,n),t!==null?t.sibling:null);X(oe,oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Qy(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(oe,oe.current),r)break;return null;case 22:case 23:return e.lanes=0,Gy(t,e,n)}return rn(t,e,n)}var Xy,Fc,Jy,Zy;Xy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fc=function(){};Jy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,nr(Mt.current);var s=null;switch(n){case"input":i=sc(t,i),r=sc(t,r),s=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),s=[];break;case"textarea":i=lc(t,i),r=lc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ka)}cc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ys.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ys.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&J("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Zy=function(t,e,n,r){n!==r&&(e.flags|=4)};function $i(t,e){if(!se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Re(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function hk(t,e,n){var r=e.pendingProps;switch(od(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(e),null;case 1:return Ve(e.type)&&Ia(),Re(e),null;case 3:return r=e.stateNode,mi(),ne(He),ne(Le),md(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ro(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,wt!==null&&(Vc(wt),wt=null))),Fc(t,e),Re(e),null;case 5:pd(e);var i=nr(Rs.current);if(n=e.type,t!==null&&e.stateNode!=null)Jy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return Re(e),null}if(t=nr(Mt.current),Ro(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[At]=e,r[Ns]=s,t=(e.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(i=0;i<Zi.length;i++)J(Zi[i],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":Gh(r,s),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},J("invalid",r);break;case"textarea":qh(r,s),J("invalid",r)}cc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&xo(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&xo(r.textContent,a,t),i=["children",""+a]):ys.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&J("scroll",r)}switch(n){case"input":Eo(r),Kh(r,s,!0);break;case"textarea":Eo(r),Yh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ka)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=bv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[At]=e,t[Ns]=r,Xy(t,e,!1,!1),e.stateNode=t;e:{switch(o=fc(n,r),n){case"dialog":J("cancel",t),J("close",t),i=r;break;case"iframe":case"object":case"embed":J("load",t),i=r;break;case"video":case"audio":for(i=0;i<Zi.length;i++)J(Zi[i],t);i=r;break;case"source":J("error",t),i=r;break;case"img":case"image":case"link":J("error",t),J("load",t),i=r;break;case"details":J("toggle",t),i=r;break;case"input":Gh(t,r),i=sc(t,r),J("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),J("invalid",t);break;case"textarea":qh(t,r),i=lc(t,r),J("invalid",t);break;default:i=r}cc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?xv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Tv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&_s(t,l):typeof l=="number"&&_s(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ys.hasOwnProperty(s)?l!=null&&s==="onScroll"&&J("scroll",t):l!=null&&Vf(t,s,l,o))}switch(n){case"input":Eo(t),Kh(t,r,!1);break;case"textarea":Eo(t),Yh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+zn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Zr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Zr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ka)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Re(e),null;case 6:if(t&&e.stateNode!=null)Zy(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=nr(Rs.current),nr(Mt.current),Ro(e)){if(r=e.stateNode,n=e.memoizedProps,r[At]=e,(s=r.nodeValue!==n)&&(t=Xe,t!==null))switch(t.tag){case 3:xo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&xo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[At]=e,e.stateNode=r}return Re(e),null;case 13:if(ne(oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(se&&Qe!==null&&e.mode&1&&!(e.flags&128))gy(),hi(),e.flags|=98560,s=!1;else if(s=Ro(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[At]=e}else hi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Re(e),s=!1}else wt!==null&&(Vc(wt),wt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||oe.current&1?ge===0&&(ge=3):Td())),e.updateQueue!==null&&(e.flags|=4),Re(e),null);case 4:return mi(),Fc(t,e),t===null&&bs(e.stateNode.containerInfo),Re(e),null;case 10:return cd(e.type._context),Re(e),null;case 17:return Ve(e.type)&&Ia(),Re(e),null;case 19:if(ne(oe),s=e.memoizedState,s===null)return Re(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)$i(s,!1);else{if(ge!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Aa(t),o!==null){for(e.flags|=128,$i(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return X(oe,oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&de()>vi&&(e.flags|=128,r=!0,$i(s,!1),e.lanes=4194304)}else{if(!r)if(t=Aa(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$i(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!se)return Re(e),null}else 2*de()-s.renderingStartTime>vi&&n!==1073741824&&(e.flags|=128,r=!0,$i(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=de(),e.sibling=null,n=oe.current,X(oe,r?n&1|2:n&1),e):(Re(e),null);case 22:case 23:return bd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ye&1073741824&&(Re(e),e.subtreeFlags&6&&(e.flags|=8192)):Re(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function pk(t,e){switch(od(e),e.tag){case 1:return Ve(e.type)&&Ia(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return mi(),ne(He),ne(Le),md(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return pd(e),null;case 13:if(ne(oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));hi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ne(oe),null;case 4:return mi(),null;case 10:return cd(e.type._context),null;case 22:case 23:return bd(),null;case 24:return null;default:return null}}var Oo=!1,Ae=!1,mk=typeof WeakSet=="function"?WeakSet:Set,R=null;function Gr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(t,e,r)}else n.current=null}function Uc(t,e,n){try{n()}catch(r){ue(t,e,r)}}var Up=!1;function gk(t,e){if(Ec=wa,t=ry(),id(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,d=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)d=f,f=g;for(;;){if(f===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(g=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sc={focusedElem:t,selectionRange:n},wa=!1,R=e;R!==null;)if(e=R,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,R=t;else for(;R!==null;){e=R;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,E=m.memoizedState,p=e.stateNode,h=p.getSnapshotBeforeUpdate(e.elementType===e.type?y:yt(e.type,y),E);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(_){ue(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,R=t;break}R=e.return}return m=Up,Up=!1,m}function as(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Uc(e,n,s)}i=i.next}while(i!==r)}}function wl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function zc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function e_(t){var e=t.alternate;e!==null&&(t.alternate=null,e_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[At],delete e[Ns],delete e[Cc],delete e[JS],delete e[ZS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function t_(t){return t.tag===5||t.tag===3||t.tag===4}function zp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||t_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ka));else if(r!==4&&(t=t.child,t!==null))for(jc(t,e,n),t=t.sibling;t!==null;)jc(t,e,n),t=t.sibling}function Bc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Bc(t,e,n),t=t.sibling;t!==null;)Bc(t,e,n),t=t.sibling}var Ce=null,_t=!1;function hn(t,e,n){for(n=n.child;n!==null;)n_(t,e,n),n=n.sibling}function n_(t,e,n){if(Lt&&typeof Lt.onCommitFiberUnmount=="function")try{Lt.onCommitFiberUnmount(dl,n)}catch{}switch(n.tag){case 5:Ae||Gr(n,e);case 6:var r=Ce,i=_t;Ce=null,hn(t,e,n),Ce=r,_t=i,Ce!==null&&(_t?(t=Ce,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ce.removeChild(n.stateNode));break;case 18:Ce!==null&&(_t?(t=Ce,n=n.stateNode,t.nodeType===8?du(t.parentNode,n):t.nodeType===1&&du(t,n),ks(t)):du(Ce,n.stateNode));break;case 4:r=Ce,i=_t,Ce=n.stateNode.containerInfo,_t=!0,hn(t,e,n),Ce=r,_t=i;break;case 0:case 11:case 14:case 15:if(!Ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Uc(n,e,o),i=i.next}while(i!==r)}hn(t,e,n);break;case 1:if(!Ae&&(Gr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ue(n,e,a)}hn(t,e,n);break;case 21:hn(t,e,n);break;case 22:n.mode&1?(Ae=(r=Ae)||n.memoizedState!==null,hn(t,e,n),Ae=r):hn(t,e,n);break;default:hn(t,e,n)}}function jp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new mk),e.forEach(function(r){var i=Ck.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function vt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ce=a.stateNode,_t=!1;break e;case 3:Ce=a.stateNode.containerInfo,_t=!0;break e;case 4:Ce=a.stateNode.containerInfo,_t=!0;break e}a=a.return}if(Ce===null)throw Error(k(160));n_(s,o,i),Ce=null,_t=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ue(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)r_(e,t),e=e.sibling}function r_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(vt(e,t),xt(t),r&4){try{as(3,t,t.return),wl(3,t)}catch(y){ue(t,t.return,y)}try{as(5,t,t.return)}catch(y){ue(t,t.return,y)}}break;case 1:vt(e,t),xt(t),r&512&&n!==null&&Gr(n,n.return);break;case 5:if(vt(e,t),xt(t),r&512&&n!==null&&Gr(n,n.return),t.flags&32){var i=t.stateNode;try{_s(i,"")}catch(y){ue(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Iv(i,s),fc(a,o);var u=fc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?xv(i,f):c==="dangerouslySetInnerHTML"?Tv(i,f):c==="children"?_s(i,f):Vf(i,c,f,u)}switch(a){case"input":oc(i,s);break;case"textarea":Cv(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Zr(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?Zr(i,!!s.multiple,s.defaultValue,!0):Zr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ns]=s}catch(y){ue(t,t.return,y)}}break;case 6:if(vt(e,t),xt(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){ue(t,t.return,y)}}break;case 3:if(vt(e,t),xt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ks(e.containerInfo)}catch(y){ue(t,t.return,y)}break;case 4:vt(e,t),xt(t);break;case 13:vt(e,t),xt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Id=de())),r&4&&jp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ae=(u=Ae)||c,vt(e,t),Ae=u):vt(e,t),xt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(R=t,c=t.child;c!==null;){for(f=R=c;R!==null;){switch(d=R,g=d.child,d.tag){case 0:case 11:case 14:case 15:as(4,d,d.return);break;case 1:Gr(d,d.return);var m=d.stateNode;if(typeof m.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(y){ue(r,n,y)}}break;case 5:Gr(d,d.return);break;case 22:if(d.memoizedState!==null){$p(f);continue}}g!==null?(g.return=d,R=g):$p(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Nv("display",o))}catch(y){ue(t,t.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){ue(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:vt(e,t),xt(t),r&4&&jp(t);break;case 21:break;default:vt(e,t),xt(t)}}function xt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(t_(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(_s(i,""),r.flags&=-33);var s=zp(t);Bc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=zp(t);jc(t,a,o);break;default:throw Error(k(161))}}catch(l){ue(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function vk(t,e,n){R=t,i_(t)}function i_(t,e,n){for(var r=(t.mode&1)!==0;R!==null;){var i=R,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Oo;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ae;a=Oo;var u=Ae;if(Oo=o,(Ae=l)&&!u)for(R=i;R!==null;)o=R,l=o.child,o.tag===22&&o.memoizedState!==null?Wp(i):l!==null?(l.return=o,R=l):Wp(i);for(;s!==null;)R=s,i_(s),s=s.sibling;R=i,Oo=a,Ae=u}Bp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,R=s):Bp(t)}}function Bp(t){for(;R!==null;){var e=R;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ae||wl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ae)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:yt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ip(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ip(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&ks(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}Ae||e.flags&512&&zc(e)}catch(d){ue(e,e.return,d)}}if(e===t){R=null;break}if(n=e.sibling,n!==null){n.return=e.return,R=n;break}R=e.return}}function $p(t){for(;R!==null;){var e=R;if(e===t){R=null;break}var n=e.sibling;if(n!==null){n.return=e.return,R=n;break}R=e.return}}function Wp(t){for(;R!==null;){var e=R;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{wl(4,e)}catch(l){ue(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ue(e,i,l)}}var s=e.return;try{zc(e)}catch(l){ue(e,s,l)}break;case 5:var o=e.return;try{zc(e)}catch(l){ue(e,o,l)}}}catch(l){ue(e,e.return,l)}if(e===t){R=null;break}var a=e.sibling;if(a!==null){a.return=e.return,R=a;break}R=e.return}}var yk=Math.ceil,Da=cn.ReactCurrentDispatcher,Sd=cn.ReactCurrentOwner,ut=cn.ReactCurrentBatchConfig,G=0,Ie=null,he=null,Te=0,Ye=0,Kr=Gn(0),ge=0,Ds=null,gr=0,El=0,kd=0,ls=null,Be=null,Id=0,vi=1/0,Ht=null,La=!1,$c=null,Pn=null,Do=!1,Cn=null,Ma=0,us=0,Wc=null,ra=-1,ia=0;function Ue(){return G&6?de():ra!==-1?ra:ra=de()}function On(t){return t.mode&1?G&2&&Te!==0?Te&-Te:tk.transition!==null?(ia===0&&(ia=Bv()),ia):(t=q,t!==0||(t=window.event,t=t===void 0?16:qv(t.type)),t):1}function Ct(t,e,n,r){if(50<us)throw us=0,Wc=null,Error(k(185));Ys(t,n,r),(!(G&2)||t!==Ie)&&(t===Ie&&(!(G&2)&&(El|=n),ge===4&&wn(t,Te)),Ge(t,r),n===1&&G===0&&!(e.mode&1)&&(vi=de()+500,vl&&Kn()))}function Ge(t,e){var n=t.callbackNode;tS(t,e);var r=_a(t,t===Ie?Te:0);if(r===0)n!==null&&Jh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Jh(n),e===1)t.tag===0?ek(Hp.bind(null,t)):hy(Hp.bind(null,t)),QS(function(){!(G&6)&&Kn()}),n=null;else{switch($v(r)){case 1:n=Qf;break;case 4:n=zv;break;case 16:n=ya;break;case 536870912:n=jv;break;default:n=ya}n=d_(n,s_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function s_(t,e){if(ra=-1,ia=0,G&6)throw Error(k(327));var n=t.callbackNode;if(ii()&&t.callbackNode!==n)return null;var r=_a(t,t===Ie?Te:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Fa(t,r);else{e=r;var i=G;G|=2;var s=a_();(Ie!==t||Te!==e)&&(Ht=null,vi=de()+500,ur(t,e));do try{Ek();break}catch(a){o_(t,a)}while(1);ud(),Da.current=s,G=i,he!==null?e=0:(Ie=null,Te=0,e=ge)}if(e!==0){if(e===2&&(i=gc(t),i!==0&&(r=i,e=Hc(t,i))),e===1)throw n=Ds,ur(t,0),wn(t,r),Ge(t,de()),n;if(e===6)wn(t,r);else{if(i=t.current.alternate,!(r&30)&&!_k(i)&&(e=Fa(t,r),e===2&&(s=gc(t),s!==0&&(r=s,e=Hc(t,s))),e===1))throw n=Ds,ur(t,0),wn(t,r),Ge(t,de()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:Xn(t,Be,Ht);break;case 3:if(wn(t,r),(r&130023424)===r&&(e=Id+500-de(),10<e)){if(_a(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ue(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ic(Xn.bind(null,t,Be,Ht),e);break}Xn(t,Be,Ht);break;case 4:if(wn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-It(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yk(r/1960))-r,10<r){t.timeoutHandle=Ic(Xn.bind(null,t,Be,Ht),r);break}Xn(t,Be,Ht);break;case 5:Xn(t,Be,Ht);break;default:throw Error(k(329))}}}return Ge(t,de()),t.callbackNode===n?s_.bind(null,t):null}function Hc(t,e){var n=ls;return t.current.memoizedState.isDehydrated&&(ur(t,e).flags|=256),t=Fa(t,e),t!==2&&(e=Be,Be=n,e!==null&&Vc(e)),t}function Vc(t){Be===null?Be=t:Be.push.apply(Be,t)}function _k(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Tt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function wn(t,e){for(e&=~kd,e&=~El,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-It(e),r=1<<n;t[n]=-1,e&=~r}}function Hp(t){if(G&6)throw Error(k(327));ii();var e=_a(t,0);if(!(e&1))return Ge(t,de()),null;var n=Fa(t,e);if(t.tag!==0&&n===2){var r=gc(t);r!==0&&(e=r,n=Hc(t,r))}if(n===1)throw n=Ds,ur(t,0),wn(t,e),Ge(t,de()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Xn(t,Be,Ht),Ge(t,de()),null}function Cd(t,e){var n=G;G|=1;try{return t(e)}finally{G=n,G===0&&(vi=de()+500,vl&&Kn())}}function vr(t){Cn!==null&&Cn.tag===0&&!(G&6)&&ii();var e=G;G|=1;var n=ut.transition,r=q;try{if(ut.transition=null,q=1,t)return t()}finally{q=r,ut.transition=n,G=e,!(G&6)&&Kn()}}function bd(){Ye=Kr.current,ne(Kr)}function ur(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,YS(n)),he!==null)for(n=he.return;n!==null;){var r=n;switch(od(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ia();break;case 3:mi(),ne(He),ne(Le),md();break;case 5:pd(r);break;case 4:mi();break;case 13:ne(oe);break;case 19:ne(oe);break;case 10:cd(r.type._context);break;case 22:case 23:bd()}n=n.return}if(Ie=t,he=t=Dn(t.current,null),Te=Ye=e,ge=0,Ds=null,kd=El=gr=0,Be=ls=null,tr!==null){for(e=0;e<tr.length;e++)if(n=tr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}tr=null}return t}function o_(t,e){do{var n=he;try{if(ud(),ea.current=Oa,Pa){for(var r=ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Pa=!1}if(mr=0,Ee=me=ae=null,os=!1,As=0,Sd.current=null,n===null||n.return===null){ge=1,Ds=e,he=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Te,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Ap(o);if(g!==null){g.flags&=-257,Pp(g,o,a,s,e),g.mode&1&&Rp(s,u,e),e=g,l=u;var m=e.updateQueue;if(m===null){var y=new Set;y.add(l),e.updateQueue=y}else m.add(l);break e}else{if(!(e&1)){Rp(s,u,e),Td();break e}l=Error(k(426))}}else if(se&&a.mode&1){var E=Ap(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Pp(E,o,a,s,e),ad(gi(l,a));break e}}s=l=gi(l,a),ge!==4&&(ge=2),ls===null?ls=[s]:ls.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Wy(s,l,e);kp(s,p);break e;case 1:a=l;var h=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Pn===null||!Pn.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=Hy(s,a,e);kp(s,_);break e}}s=s.return}while(s!==null)}u_(n)}catch(I){e=I,he===n&&n!==null&&(he=n=n.return);continue}break}while(1)}function a_(){var t=Da.current;return Da.current=Oa,t===null?Oa:t}function Td(){(ge===0||ge===3||ge===2)&&(ge=4),Ie===null||!(gr&268435455)&&!(El&268435455)||wn(Ie,Te)}function Fa(t,e){var n=G;G|=2;var r=a_();(Ie!==t||Te!==e)&&(Ht=null,ur(t,e));do try{wk();break}catch(i){o_(t,i)}while(1);if(ud(),G=n,Da.current=r,he!==null)throw Error(k(261));return Ie=null,Te=0,ge}function wk(){for(;he!==null;)l_(he)}function Ek(){for(;he!==null&&!GE();)l_(he)}function l_(t){var e=f_(t.alternate,t,Ye);t.memoizedProps=t.pendingProps,e===null?u_(t):he=e,Sd.current=null}function u_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=pk(n,e),n!==null){n.flags&=32767,he=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ge=6,he=null;return}}else if(n=hk(n,e,Ye),n!==null){he=n;return}if(e=e.sibling,e!==null){he=e;return}he=e=t}while(e!==null);ge===0&&(ge=5)}function Xn(t,e,n){var r=q,i=ut.transition;try{ut.transition=null,q=1,Sk(t,e,n,r)}finally{ut.transition=i,q=r}return null}function Sk(t,e,n,r){do ii();while(Cn!==null);if(G&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(nS(t,s),t===Ie&&(he=Ie=null,Te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Do||(Do=!0,d_(ya,function(){return ii(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ut.transition,ut.transition=null;var o=q;q=1;var a=G;G|=4,Sd.current=null,gk(t,n),r_(n,t),$S(Sc),wa=!!Ec,Sc=Ec=null,t.current=n,vk(n),KE(),G=a,q=o,ut.transition=s}else t.current=n;if(Do&&(Do=!1,Cn=t,Ma=i),s=t.pendingLanes,s===0&&(Pn=null),QE(n.stateNode),Ge(t,de()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(La)throw La=!1,t=$c,$c=null,t;return Ma&1&&t.tag!==0&&ii(),s=t.pendingLanes,s&1?t===Wc?us++:(us=0,Wc=t):us=0,Kn(),null}function ii(){if(Cn!==null){var t=$v(Ma),e=ut.transition,n=q;try{if(ut.transition=null,q=16>t?16:t,Cn===null)var r=!1;else{if(t=Cn,Cn=null,Ma=0,G&6)throw Error(k(331));var i=G;for(G|=4,R=t.current;R!==null;){var s=R,o=s.child;if(R.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(R=u;R!==null;){var c=R;switch(c.tag){case 0:case 11:case 15:as(8,c,s)}var f=c.child;if(f!==null)f.return=c,R=f;else for(;R!==null;){c=R;var d=c.sibling,g=c.return;if(e_(c),c===u){R=null;break}if(d!==null){d.return=g,R=d;break}R=g}}}var m=s.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}R=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,R=o;else e:for(;R!==null;){if(s=R,s.flags&2048)switch(s.tag){case 0:case 11:case 15:as(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,R=p;break e}R=s.return}}var h=t.current;for(R=h;R!==null;){o=R;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,R=v;else e:for(o=h;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:wl(9,a)}}catch(I){ue(a,a.return,I)}if(a===o){R=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,R=_;break e}R=a.return}}if(G=i,Kn(),Lt&&typeof Lt.onPostCommitFiberRoot=="function")try{Lt.onPostCommitFiberRoot(dl,t)}catch{}r=!0}return r}finally{q=n,ut.transition=e}}return!1}function Vp(t,e,n){e=gi(n,e),e=Wy(t,e,1),t=An(t,e,1),e=Ue(),t!==null&&(Ys(t,1,e),Ge(t,e))}function ue(t,e,n){if(t.tag===3)Vp(t,t,n);else for(;e!==null;){if(e.tag===3){Vp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pn===null||!Pn.has(r))){t=gi(n,t),t=Hy(e,t,1),e=An(e,t,1),t=Ue(),e!==null&&(Ys(e,1,t),Ge(e,t));break}}e=e.return}}function kk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ue(),t.pingedLanes|=t.suspendedLanes&n,Ie===t&&(Te&n)===n&&(ge===4||ge===3&&(Te&130023424)===Te&&500>de()-Id?ur(t,0):kd|=n),Ge(t,e)}function c_(t,e){e===0&&(t.mode&1?(e=Io,Io<<=1,!(Io&130023424)&&(Io=4194304)):e=1);var n=Ue();t=nn(t,e),t!==null&&(Ys(t,e,n),Ge(t,n))}function Ik(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),c_(t,n)}function Ck(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),c_(t,n)}var f_;f_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||He.current)$e=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return $e=!1,dk(t,e,n);$e=!!(t.flags&131072)}else $e=!1,se&&e.flags&1048576&&py(e,Ta,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;na(t,e),t=e.pendingProps;var i=di(e,Le.current);ri(e,n),i=vd(null,e,r,t,i,n);var s=yd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ve(r)?(s=!0,Ca(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,dd(e),i.updater=yl,e.stateNode=i,i._reactInternals=e,Ac(e,r,t,n),e=Dc(null,e,r,!0,s,n)):(e.tag=0,se&&s&&sd(e),Fe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(na(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Tk(r),t=yt(r,t),i){case 0:e=Oc(null,e,r,t,n);break e;case 1:e=Lp(null,e,r,t,n);break e;case 11:e=Op(null,e,r,t,n);break e;case 14:e=Dp(null,e,r,yt(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yt(r,i),Oc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yt(r,i),Lp(t,e,r,i,n);case 3:e:{if(qy(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,yy(t,e),Ra(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=gi(Error(k(423)),e),e=Mp(t,e,r,n,i);break e}else if(r!==i){i=gi(Error(k(424)),e),e=Mp(t,e,r,n,i);break e}else for(Qe=Rn(e.stateNode.containerInfo.firstChild),Xe=e,se=!0,wt=null,n=Sy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hi(),r===i){e=rn(t,e,n);break e}Fe(t,e,r,n)}e=e.child}return e;case 5:return ky(e),t===null&&Nc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,kc(r,i)?o=null:s!==null&&kc(r,s)&&(e.flags|=32),Ky(t,e),Fe(t,e,o,n),e.child;case 6:return t===null&&Nc(e),null;case 13:return Yy(t,e,n);case 4:return hd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=pi(e,null,r,n):Fe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yt(r,i),Op(t,e,r,i,n);case 7:return Fe(t,e,e.pendingProps,n),e.child;case 8:return Fe(t,e,e.pendingProps.children,n),e.child;case 12:return Fe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,X(Na,r._currentValue),r._currentValue=o,s!==null)if(Tt(s.value,o)){if(s.children===i.children&&!He.current){e=rn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Xt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),xc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),xc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Fe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ri(e,n),i=dt(i),r=r(i),e.flags|=1,Fe(t,e,r,n),e.child;case 14:return r=e.type,i=yt(r,e.pendingProps),i=yt(r.type,i),Dp(t,e,r,i,n);case 15:return Vy(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yt(r,i),na(t,e),e.tag=1,Ve(r)?(t=!0,Ca(e)):t=!1,ri(e,n),wy(e,r,i),Ac(e,r,i,n),Dc(null,e,r,!0,t,n);case 19:return Qy(t,e,n);case 22:return Gy(t,e,n)}throw Error(k(156,e.tag))};function d_(t,e){return Uv(t,e)}function bk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(t,e,n,r){return new bk(t,e,n,r)}function Nd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Tk(t){if(typeof t=="function")return Nd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kf)return 11;if(t===qf)return 14}return 2}function Dn(t,e){var n=t.alternate;return n===null?(n=at(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function sa(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Nd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Fr:return cr(n.children,i,s,e);case Gf:o=8,i|=8;break;case tc:return t=at(12,n,e,i|2),t.elementType=tc,t.lanes=s,t;case nc:return t=at(13,n,e,i),t.elementType=nc,t.lanes=s,t;case rc:return t=at(19,n,e,i),t.elementType=rc,t.lanes=s,t;case Ev:return Sl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _v:o=10;break e;case wv:o=9;break e;case Kf:o=11;break e;case qf:o=14;break e;case vn:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=at(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function cr(t,e,n,r){return t=at(7,t,r,e),t.lanes=n,t}function Sl(t,e,n,r){return t=at(22,t,r,e),t.elementType=Ev,t.lanes=n,t.stateNode={isHidden:!1},t}function wu(t,e,n){return t=at(6,t,null,e),t.lanes=n,t}function Eu(t,e,n){return e=at(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Nk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tu(0),this.expirationTimes=tu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function xd(t,e,n,r,i,s,o,a,l){return t=new Nk(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=at(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},dd(s),t}function xk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function h_(t){if(!t)return jn;t=t._reactInternals;e:{if(xr(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ve(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(Ve(n))return dy(t,n,e)}return e}function p_(t,e,n,r,i,s,o,a,l){return t=xd(n,r,!0,t,i,s,o,a,l),t.context=h_(null),n=t.current,r=Ue(),i=On(n),s=Xt(r,i),s.callback=e??null,An(n,s,i),t.current.lanes=i,Ys(t,i,r),Ge(t,r),t}function kl(t,e,n,r){var i=e.current,s=Ue(),o=On(i);return n=h_(n),e.context===null?e.context=n:e.pendingContext=n,e=Xt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=An(i,e,o),t!==null&&(Ct(t,i,o,s),Zo(t,i,o)),o}function Ua(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Gp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Rd(t,e){Gp(t,e),(t=t.alternate)&&Gp(t,e)}function Rk(){return null}var m_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ad(t){this._internalRoot=t}Il.prototype.render=Ad.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));kl(t,e,null,null)};Il.prototype.unmount=Ad.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;vr(function(){kl(null,t,null,null)}),e[tn]=null}};function Il(t){this._internalRoot=t}Il.prototype.unstable_scheduleHydration=function(t){if(t){var e=Vv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<_n.length&&e!==0&&e<_n[n].priority;n++);_n.splice(n,0,t),n===0&&Kv(t)}};function Pd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Cl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Kp(){}function Ak(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ua(o);s.call(u)}}var o=p_(e,r,t,0,null,!1,!1,"",Kp);return t._reactRootContainer=o,t[tn]=o.current,bs(t.nodeType===8?t.parentNode:t),vr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ua(l);a.call(u)}}var l=xd(t,0,!1,null,null,!1,!1,"",Kp);return t._reactRootContainer=l,t[tn]=l.current,bs(t.nodeType===8?t.parentNode:t),vr(function(){kl(e,l,n,r)}),l}function bl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ua(o);a.call(l)}}kl(e,o,t,i)}else o=Ak(n,e,t,i,r);return Ua(o)}Wv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ji(e.pendingLanes);n!==0&&(Xf(e,n|1),Ge(e,de()),!(G&6)&&(vi=de()+500,Kn()))}break;case 13:vr(function(){var r=nn(t,1);if(r!==null){var i=Ue();Ct(r,t,1,i)}}),Rd(t,1)}};Jf=function(t){if(t.tag===13){var e=nn(t,134217728);if(e!==null){var n=Ue();Ct(e,t,134217728,n)}Rd(t,134217728)}};Hv=function(t){if(t.tag===13){var e=On(t),n=nn(t,e);if(n!==null){var r=Ue();Ct(n,t,e,r)}Rd(t,e)}};Vv=function(){return q};Gv=function(t,e){var n=q;try{return q=t,e()}finally{q=n}};hc=function(t,e,n){switch(e){case"input":if(oc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=gl(r);if(!i)throw Error(k(90));kv(r),oc(r,i)}}}break;case"textarea":Cv(t,n);break;case"select":e=n.value,e!=null&&Zr(t,!!n.multiple,e,!1)}};Pv=Cd;Ov=vr;var Pk={usingClientEntryPoint:!1,Events:[Xs,Br,gl,Rv,Av,Cd]},Wi={findFiberByHostInstance:er,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ok={bundleType:Wi.bundleType,version:Wi.version,rendererPackageName:Wi.rendererPackageName,rendererConfig:Wi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Mv(t),t===null?null:t.stateNode},findFiberByHostInstance:Wi.findFiberByHostInstance||Rk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lo.isDisabled&&Lo.supportsFiber)try{dl=Lo.inject(Ok),Lt=Lo}catch{}}tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pk;tt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pd(e))throw Error(k(200));return xk(t,e,null,n)};tt.createRoot=function(t,e){if(!Pd(t))throw Error(k(299));var n=!1,r="",i=m_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=xd(t,1,!1,null,null,n,!1,r,i),t[tn]=e.current,bs(t.nodeType===8?t.parentNode:t),new Ad(e)};tt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=Mv(e),t=t===null?null:t.stateNode,t};tt.flushSync=function(t){return vr(t)};tt.hydrate=function(t,e,n){if(!Cl(e))throw Error(k(200));return bl(null,t,e,!0,n)};tt.hydrateRoot=function(t,e,n){if(!Pd(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=m_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=p_(e,null,t,1,n??null,i,!1,s,o),t[tn]=e.current,bs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Il(e)};tt.render=function(t,e,n){if(!Cl(e))throw Error(k(200));return bl(null,t,e,!1,n)};tt.unmountComponentAtNode=function(t){if(!Cl(t))throw Error(k(40));return t._reactRootContainer?(vr(function(){bl(null,null,t,!1,function(){t._reactRootContainer=null,t[tn]=null})}),!0):!1};tt.unstable_batchedUpdates=Cd;tt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Cl(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return bl(t,e,n,!1,r)};tt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=tt})(RE);var qp=Ju;Xu.createRoot=qp.createRoot,Xu.hydrateRoot=qp.hydrateRoot;/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function za(){return za=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},za.apply(this,arguments)}var rr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(rr||(rr={}));const Yp="popstate";function Dk(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Gc("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:v_(i)}return Mk(e,n,null,t)}function g_(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Lk(){return Math.random().toString(36).substr(2,8)}function Qp(t,e){return{usr:t.state,key:t.key,idx:e}}function Gc(t,e,n,r){return n===void 0&&(n=null),za({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?y_(e):e,{state:n,key:e&&e.key||r||Lk()})}function v_(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function y_(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Mk(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=rr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(za({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){a=rr.Pop;let E=c(),p=E==null?null:E-u;u=E,l&&l({action:a,location:y.location,delta:p})}function d(E,p){a=rr.Push;let h=Gc(y.location,E,p);n&&n(h,E),u=c()+1;let v=Qp(h,u),_=y.createHref(h);try{o.pushState(v,"",_)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(_)}s&&l&&l({action:a,location:y.location,delta:1})}function g(E,p){a=rr.Replace;let h=Gc(y.location,E,p);n&&n(h,E),u=c();let v=Qp(h,u),_=y.createHref(h);o.replaceState(v,"",_),s&&l&&l({action:a,location:y.location,delta:0})}function m(E){let p=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof E=="string"?E:v_(E);return g_(p,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,p)}let y={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Yp,f),l=E,()=>{i.removeEventListener(Yp,f),l=null}},createHref(E){return e(i,E)},createURL:m,encodeLocation(E){let p=m(E);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:g,go(E){return o.go(E)}};return y}var Xp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Xp||(Xp={}));function Fk(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const Uk=["post","put","patch","delete"];[...Uk];/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const zk=L.createContext(null),__=L.createContext(null);function jk(){return L.useContext(__)!=null}var Jp;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Jp||(Jp={}));var Zp;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(Zp||(Zp={}));function Bk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=rr.Pop,navigator:s,static:o=!1}=t;jk()&&g_(!1);let a=e.replace(/^\/*/,"/"),l=L.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=y_(r));let{pathname:u="/",search:c="",hash:f="",state:d=null,key:g="default"}=r,m=L.useMemo(()=>{let y=Fk(u,a);return y==null?null:{location:{pathname:y,search:c,hash:f,state:d,key:g},navigationType:i}},[a,u,c,f,d,g,i]);return m==null?null:L.createElement(zk.Provider,{value:l},L.createElement(__.Provider,{children:n,value:m}))}var em;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(em||(em={}));new Promise(()=>{});/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const $k="startTransition",tm=kE[$k];function Wk(t){let{basename:e,children:n,future:r,window:i}=t,s=L.useRef();s.current==null&&(s.current=Dk({window:i,v5Compat:!0}));let o=s.current,[a,l]=L.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=L.useCallback(f=>{u&&tm?tm(()=>l(f)):l(f)},[l,u]);return L.useLayoutEffect(()=>o.listen(c),[o,c]),L.createElement(Bk,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}var nm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(nm||(nm={}));var rm;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(rm||(rm={}));const im={waves:"#F3F4F3","dark-waves":"#9E9A98",grainy:"#AC8B5D",bland:"#917E7A","dark-bland":"#3A3743"},Hk=[15,30,45,60,75],Vk=1e3;function w_(){document.querySelectorAll(".circle").forEach((e,n)=>{const r=10*Math.sin(Date.now()/Vk+n);e.style.transform=`translateY(${r+110}px)`}),requestAnimationFrame(w_)}w_();const Hi=({color:t,position:e})=>S("div",{className:"circle",style:{width:"50px",height:"50px",borderRadius:"50%",background:`radial-gradient(circle, ${im[t]}, ${im[t]})`,position:"absolute",left:Hk[e]+"%",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0), 0 12px 20px 0 rgba(0, 0, 0, 0.5)"}}),Gk=()=>M("div",{style:{position:"relative"},children:[S(Hi,{color:"waves",position:0}),S(Hi,{color:"dark-waves",position:1}),S(Hi,{color:"grainy",position:2}),S(Hi,{color:"bland",position:3}),S(Hi,{color:"dark-bland",position:4})]});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=function(t,e){if(!t)throw Ti(e)},Ti=function(t){return new Error("Firebase Database ("+E_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Kk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Od={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,f=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),r.push(n[c],n[f],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(S_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Kk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new qk;const d=s<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const m=u<<6&192|f;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class qk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const k_=function(t){const e=S_(t);return Od.encodeByteArray(e,!0)},ja=function(t){return k_(t).replace(/\./g,"")},Ba=function(t){try{return Od.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yk(t){return I_(void 0,t)}function I_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Qk(n)||(t[n]=I_(t[n],e[n]));return t}function Qk(t){return t!=="__proto__"}/**
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
 */function Xk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Jk=()=>Xk().__FIREBASE_DEFAULTS__,Zk=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},eI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ba(t[1]);return e&&JSON.parse(e)},Dd=()=>{try{return Jk()||Zk()||eI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},C_=t=>{var e,n;return(n=(e=Dd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},tI=t=>{const e=C_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},b_=()=>{var t;return(t=Dd())===null||t===void 0?void 0:t.config},T_=t=>{var e;return(e=Dd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function nI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ja(JSON.stringify(n)),ja(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Md(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Me())}function N_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function x_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rI(){const t=Me();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function R_(){return E_.NODE_ADMIN===!0}function A_(){try{return typeof indexedDB=="object"}catch{return!1}}function P_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function iI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI="FirebaseError";class Bt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=sI,Object.setPrototypeOf(this,Bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rr.prototype.create)}}class Rr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?oI(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Bt(i,a,r)}}function oI(t,e){return t.replace(aI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const aI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(t){return JSON.parse(t)}function be(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ls(Ba(s[0])||""),n=Ls(Ba(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},lI=function(t){const e=O_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},uI=function(t){const e=O_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function yi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Kc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $a(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Ms(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(sm(s)&&sm(o)){if(!Ms(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function sm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const d=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let f=0;f<80;f++){f<40?f<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):f<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const d=(i<<5|i>>>27)+u+l+c+r[f]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function fI(t,e){const n=new dI(t,e);return n.subscribe.bind(n)}class dI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");hI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Su),i.error===void 0&&(i.error=Su),i.complete===void 0&&(i.complete=Su);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Su(){}function pI(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,C(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Tl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const gI=1e3,vI=2,yI=4*60*60*1e3,_I=.5;function om(t,e=gI,n=vI){const r=e*Math.pow(n,t),i=Math.round(_I*r*(Math.random()-.5)*2);return Math.min(yI,r+i)}/**
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
 */function $t(t){return t&&t._delegate?t._delegate:t}class Nt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Jn="[DEFAULT]";/**
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
 */class wI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ld;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(SI(e))try{this.getOrInitializeService({instanceIdentifier:Jn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Jn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jn){return this.instances.has(e)}getOptions(e=Jn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:EI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Jn){return this.component?this.component.multipleInstances?e:Jn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function EI(t){return t===Jn?void 0:t}function SI(t){return t.instantiationMode==="EAGER"}/**
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
 */class kI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const II={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},CI=Y.INFO,bI={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},TI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=bI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nl{constructor(e){this.name=e,this._logLevel=CI,this._logHandler=TI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?II[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const NI=(t,e)=>e.some(n=>t instanceof n);let am,lm;function xI(){return am||(am=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function RI(){return lm||(lm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const D_=new WeakMap,qc=new WeakMap,L_=new WeakMap,ku=new WeakMap,Fd=new WeakMap;function AI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ln(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&D_.set(n,t)}).catch(()=>{}),Fd.set(e,t),e}function PI(t){if(qc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});qc.set(t,e)}let Yc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||L_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ln(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function OI(t){Yc=t(Yc)}function DI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Iu(this),e,...n);return L_.set(r,e.sort?e.sort():[e]),Ln(r)}:RI().includes(t)?function(...e){return t.apply(Iu(this),e),Ln(D_.get(this))}:function(...e){return Ln(t.apply(Iu(this),e))}}function LI(t){return typeof t=="function"?DI(t):(t instanceof IDBTransaction&&PI(t),NI(t,xI())?new Proxy(t,Yc):t)}function Ln(t){if(t instanceof IDBRequest)return AI(t);if(ku.has(t))return ku.get(t);const e=LI(t);return e!==t&&(ku.set(t,e),Fd.set(e,t)),e}const Iu=t=>Fd.get(t);function MI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ln(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ln(o.result),l.oldVersion,l.newVersion,Ln(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const FI=["get","getKey","getAll","getAllKeys","count"],UI=["put","add","delete","clear"],Cu=new Map;function um(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Cu.get(e))return Cu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=UI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||FI.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Cu.set(e,s),s}OI(t=>({...t,get:(e,n,r)=>um(e,n)||t.get(e,n,r),has:(e,n)=>!!um(e,n)||t.has(e,n)}));/**
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
 */class zI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function jI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qc="@firebase/app",cm="0.9.13";/**
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
 */const yr=new Nl("@firebase/app"),BI="@firebase/app-compat",$I="@firebase/analytics-compat",WI="@firebase/analytics",HI="@firebase/app-check-compat",VI="@firebase/app-check",GI="@firebase/auth",KI="@firebase/auth-compat",qI="@firebase/database",YI="@firebase/database-compat",QI="@firebase/functions",XI="@firebase/functions-compat",JI="@firebase/installations",ZI="@firebase/installations-compat",eC="@firebase/messaging",tC="@firebase/messaging-compat",nC="@firebase/performance",rC="@firebase/performance-compat",iC="@firebase/remote-config",sC="@firebase/remote-config-compat",oC="@firebase/storage",aC="@firebase/storage-compat",lC="@firebase/firestore",uC="@firebase/firestore-compat",cC="firebase",fC="9.23.0";/**
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
 */const Xc="[DEFAULT]",dC={[Qc]:"fire-core",[BI]:"fire-core-compat",[WI]:"fire-analytics",[$I]:"fire-analytics-compat",[VI]:"fire-app-check",[HI]:"fire-app-check-compat",[GI]:"fire-auth",[KI]:"fire-auth-compat",[qI]:"fire-rtdb",[YI]:"fire-rtdb-compat",[QI]:"fire-fn",[XI]:"fire-fn-compat",[JI]:"fire-iid",[ZI]:"fire-iid-compat",[eC]:"fire-fcm",[tC]:"fire-fcm-compat",[nC]:"fire-perf",[rC]:"fire-perf-compat",[iC]:"fire-rc",[sC]:"fire-rc-compat",[oC]:"fire-gcs",[aC]:"fire-gcs-compat",[lC]:"fire-fst",[uC]:"fire-fst-compat","fire-js":"fire-js",[cC]:"fire-js-all"};/**
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
 */const Wa=new Map,Jc=new Map;function hC(t,e){try{t.container.addComponent(e)}catch(n){yr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zt(t){const e=t.name;if(Jc.has(e))return yr.debug(`There were multiple attempts to register component ${e}.`),!1;Jc.set(e,t);for(const n of Wa.values())hC(n,t);return!0}function Ar(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const pC={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Mn=new Rr("app","Firebase",pC);/**
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
 */class mC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mn.create("app-deleted",{appName:this._name})}}/**
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
 */const xi=fC;function Ud(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Xc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Mn.create("bad-app-name",{appName:String(i)});if(n||(n=b_()),!n)throw Mn.create("no-options");const s=Wa.get(i);if(s){if(Ms(n,s.options)&&Ms(r,s.config))return s;throw Mn.create("duplicate-app",{appName:i})}const o=new kI(i);for(const l of Jc.values())o.addComponent(l);const a=new mC(n,r,o);return Wa.set(i,a),a}function zd(t=Xc){const e=Wa.get(t);if(!e&&t===Xc&&b_())return Ud();if(!e)throw Mn.create("no-app",{appName:t});return e}function ct(t,e,n){var r;let i=(r=dC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yr.warn(a.join(" "));return}zt(new Nt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const gC="firebase-heartbeat-database",vC=1,Fs="firebase-heartbeat-store";let bu=null;function M_(){return bu||(bu=MI(gC,vC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Fs)}}}).catch(t=>{throw Mn.create("idb-open",{originalErrorMessage:t.message})})),bu}async function yC(t){try{return await(await M_()).transaction(Fs).objectStore(Fs).get(F_(t))}catch(e){if(e instanceof Bt)yr.warn(e.message);else{const n=Mn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yr.warn(n.message)}}}async function fm(t,e){try{const r=(await M_()).transaction(Fs,"readwrite");await r.objectStore(Fs).put(e,F_(t)),await r.done}catch(n){if(n instanceof Bt)yr.warn(n.message);else{const r=Mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yr.warn(r.message)}}}function F_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const _C=1024,wC=30*24*60*60*1e3;class EC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new kC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=dm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=wC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=dm(),{heartbeatsToSend:n,unsentEntries:r}=SC(this._heartbeatsCache.heartbeats),i=ja(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function dm(){return new Date().toISOString().substring(0,10)}function SC(t,e=_C){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),hm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),hm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class kC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return A_()?P_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await yC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return fm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return fm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function hm(t){return ja(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function IC(t){zt(new Nt("platform-logger",e=>new zI(e),"PRIVATE")),zt(new Nt("heartbeat",e=>new EC(e),"PRIVATE")),ct(Qc,cm,t),ct(Qc,cm,"esm2017"),ct("fire-js","")}IC("");var CC="firebase",bC="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ct(CC,bC,"app");const TC=(t,e)=>e.some(n=>t instanceof n);let pm,mm;function NC(){return pm||(pm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xC(){return mm||(mm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const U_=new WeakMap,Zc=new WeakMap,z_=new WeakMap,Tu=new WeakMap,jd=new WeakMap;function RC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Fn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&U_.set(n,t)}).catch(()=>{}),jd.set(e,t),e}function AC(t){if(Zc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Zc.set(t,e)}let ef={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||z_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function PC(t){ef=t(ef)}function OC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Nu(this),e,...n);return z_.set(r,e.sort?e.sort():[e]),Fn(r)}:xC().includes(t)?function(...e){return t.apply(Nu(this),e),Fn(U_.get(this))}:function(...e){return Fn(t.apply(Nu(this),e))}}function DC(t){return typeof t=="function"?OC(t):(t instanceof IDBTransaction&&AC(t),TC(t,NC())?new Proxy(t,ef):t)}function Fn(t){if(t instanceof IDBRequest)return RC(t);if(Tu.has(t))return Tu.get(t);const e=DC(t);return e!==t&&(Tu.set(t,e),jd.set(e,t)),e}const Nu=t=>jd.get(t);function LC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Fn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Fn(o.result),l.oldVersion,l.newVersion,Fn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const MC=["get","getKey","getAll","getAllKeys","count"],FC=["put","add","delete","clear"],xu=new Map;function gm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xu.get(e))return xu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=FC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||MC.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return xu.set(e,s),s}PC(t=>({...t,get:(e,n,r)=>gm(e,n)||t.get(e,n,r),has:(e,n)=>!!gm(e,n)||t.has(e,n)}));const j_="@firebase/installations",Bd="0.6.4";/**
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
 */const B_=1e4,$_=`w:${Bd}`,W_="FIS_v2",UC="https://firebaseinstallations.googleapis.com/v1",zC=60*60*1e3,jC="installations",BC="Installations";/**
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
 */const $C={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},_r=new Rr(jC,BC,$C);function H_(t){return t instanceof Bt&&t.code.includes("request-failed")}/**
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
 */function V_({projectId:t}){return`${UC}/projects/${t}/installations`}function G_(t){return{token:t.token,requestStatus:2,expiresIn:HC(t.expiresIn),creationTime:Date.now()}}async function K_(t,e){const r=(await e.json()).error;return _r.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function q_({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function WC(t,{refreshToken:e}){const n=q_(t);return n.append("Authorization",VC(e)),n}async function Y_(t){const e=await t();return e.status>=500&&e.status<600?t():e}function HC(t){return Number(t.replace("s","000"))}function VC(t){return`${W_} ${t}`}/**
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
 */async function GC({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=V_(t),i=q_(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:W_,appId:t.appId,sdkVersion:$_},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Y_(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:G_(u.authToken)}}else throw await K_("Create Installation",l)}/**
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
 */function Q_(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function KC(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const qC=/^[cdef][\w-]{21}$/,tf="";function YC(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=QC(t);return qC.test(n)?n:tf}catch{return tf}}function QC(t){return KC(t).substr(0,22)}/**
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
 */function xl(t){return`${t.appName}!${t.appId}`}/**
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
 */const X_=new Map;function J_(t,e){const n=xl(t);Z_(n,e),XC(n,e)}function Z_(t,e){const n=X_.get(t);if(n)for(const r of n)r(e)}function XC(t,e){const n=JC();n&&n.postMessage({key:t,fid:e}),ZC()}let ir=null;function JC(){return!ir&&"BroadcastChannel"in self&&(ir=new BroadcastChannel("[Firebase] FID Change"),ir.onmessage=t=>{Z_(t.data.key,t.data.fid)}),ir}function ZC(){X_.size===0&&ir&&(ir.close(),ir=null)}/**
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
 */const eb="firebase-installations-database",tb=1,wr="firebase-installations-store";let Ru=null;function $d(){return Ru||(Ru=LC(eb,tb,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(wr)}}})),Ru}async function Ha(t,e){const n=xl(t),i=(await $d()).transaction(wr,"readwrite"),s=i.objectStore(wr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&J_(t,e.fid),e}async function e0(t){const e=xl(t),r=(await $d()).transaction(wr,"readwrite");await r.objectStore(wr).delete(e),await r.done}async function Rl(t,e){const n=xl(t),i=(await $d()).transaction(wr,"readwrite"),s=i.objectStore(wr),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&J_(t,a.fid),a}/**
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
 */async function Wd(t){let e;const n=await Rl(t.appConfig,r=>{const i=nb(r),s=rb(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===tf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function nb(t){const e=t||{fid:YC(),registrationStatus:0};return t0(e)}function rb(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(_r.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=ib(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:sb(t)}:{installationEntry:e}}async function ib(t,e){try{const n=await GC(t,e);return Ha(t.appConfig,n)}catch(n){throw H_(n)&&n.customData.serverCode===409?await e0(t.appConfig):await Ha(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function sb(t){let e=await vm(t.appConfig);for(;e.registrationStatus===1;)await Q_(100),e=await vm(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Wd(t);return r||n}return e}function vm(t){return Rl(t,e=>{if(!e)throw _r.create("installation-not-found");return t0(e)})}function t0(t){return ob(t)?{fid:t.fid,registrationStatus:0}:t}function ob(t){return t.registrationStatus===1&&t.registrationTime+B_<Date.now()}/**
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
 */async function ab({appConfig:t,heartbeatServiceProvider:e},n){const r=lb(t,n),i=WC(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:$_,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Y_(()=>fetch(r,a));if(l.ok){const u=await l.json();return G_(u)}else throw await K_("Generate Auth Token",l)}function lb(t,{fid:e}){return`${V_(t)}/${e}/authTokens:generate`}/**
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
 */async function Hd(t,e=!1){let n;const r=await Rl(t.appConfig,s=>{if(!n0(s))throw _r.create("not-registered");const o=s.authToken;if(!e&&fb(o))return s;if(o.requestStatus===1)return n=ub(t,e),s;{if(!navigator.onLine)throw _r.create("app-offline");const a=hb(s);return n=cb(t,a),a}});return n?await n:r.authToken}async function ub(t,e){let n=await ym(t.appConfig);for(;n.authToken.requestStatus===1;)await Q_(100),n=await ym(t.appConfig);const r=n.authToken;return r.requestStatus===0?Hd(t,e):r}function ym(t){return Rl(t,e=>{if(!n0(e))throw _r.create("not-registered");const n=e.authToken;return pb(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function cb(t,e){try{const n=await ab(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Ha(t.appConfig,r),n}catch(n){if(H_(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await e0(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ha(t.appConfig,r)}throw n}}function n0(t){return t!==void 0&&t.registrationStatus===2}function fb(t){return t.requestStatus===2&&!db(t)}function db(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+zC}function hb(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function pb(t){return t.requestStatus===1&&t.requestTime+B_<Date.now()}/**
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
 */async function mb(t){const e=t,{installationEntry:n,registrationPromise:r}=await Wd(e);return r?r.catch(console.error):Hd(e).catch(console.error),n.fid}/**
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
 */async function gb(t,e=!1){const n=t;return await vb(n),(await Hd(n,e)).token}async function vb(t){const{registrationPromise:e}=await Wd(t);e&&await e}/**
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
 */function yb(t){if(!t||!t.options)throw Au("App Configuration");if(!t.name)throw Au("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Au(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Au(t){return _r.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0="installations",_b="installations-internal",wb=t=>{const e=t.getProvider("app").getImmediate(),n=yb(e),r=Ar(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Eb=t=>{const e=t.getProvider("app").getImmediate(),n=Ar(e,r0).getImmediate();return{getId:()=>mb(n),getToken:i=>gb(n,i)}};function Sb(){zt(new Nt(r0,wb,"PUBLIC")),zt(new Nt(_b,Eb,"PRIVATE"))}Sb();ct(j_,Bd);ct(j_,Bd,"esm2017");/**
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
 */const Va="analytics",kb="firebase_id",Ib="origin",Cb=60*1e3,bb="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Vd="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ke=new Nl("@firebase/analytics");/**
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
 */const Tb={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Je=new Rr("analytics","Analytics",Tb);/**
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
 */function Nb(t){if(!t.startsWith(Vd)){const e=Je.create("invalid-gtag-resource",{gtagURL:t});return Ke.warn(e.message),""}return t}function i0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function xb(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Rb(t,e){const n=xb("firebase-js-sdk-policy",{createScriptURL:Nb}),r=document.createElement("script"),i=`${Vd}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Ab(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Pb(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await i0(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){Ke.error(a)}t("config",i,s)}async function Ob(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await i0(n);for(const l of o){const u=a.find(f=>f.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Ke.error(s)}}function Db(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await Ob(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await Pb(t,e,n,r,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Ke.error(a)}}return i}function Lb(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Db(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function Mb(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Vd)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb=30,Ub=1e3;class zb{constructor(e={},n=Ub){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const s0=new zb;function jb(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Bb(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:jb(r)},s=bb.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Je.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function $b(t,e=s0,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Je.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Je.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Vb;return setTimeout(async()=>{a.abort()},n!==void 0?n:Cb),o0({appId:r,apiKey:i,measurementId:s},o,a,e)}async function o0(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=s0){var s;const{appId:o,measurementId:a}=t;try{await Wb(r,e)}catch(l){if(a)return Ke.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await Bb(t);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!Hb(u)){if(i.deleteThrottleMetadata(o),a)return Ke.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?om(n,i.intervalMillis,Fb):om(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,f),Ke.debug(`Calling attemptFetch again in ${c} millis`),o0(t,f,r,i)}}function Wb(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Je.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Hb(t){if(!(t instanceof Bt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Vb{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Gb(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kb(){if(A_())try{await P_()}catch(t){return Ke.warn(Je.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ke.warn(Je.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function qb(t,e,n,r,i,s,o){var a;const l=$b(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&Ke.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Ke.error(g)),e.push(l);const u=Kb().then(g=>{if(g)return r.getId()}),[c,f]=await Promise.all([l,u]);Mb(s)||Rb(s,c.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[Ib]="firebase",d.update=!0,f!=null&&(d[kb]=f),i("config",c.measurementId,d),c.measurementId}/**
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
 */class Yb{constructor(e){this.app=e}_delete(){return delete cs[this.app.options.appId],Promise.resolve()}}let cs={},_m=[];const wm={};let Pu="dataLayer",Qb="gtag",Em,a0,Sm=!1;function Xb(){const t=[];if(N_()&&t.push("This is a browser extension environment."),iI()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Je.create("invalid-analytics-context",{errorInfo:e});Ke.warn(n.message)}}function Jb(t,e,n){Xb();const r=t.options.appId;if(!r)throw Je.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ke.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Je.create("no-api-key");if(cs[r]!=null)throw Je.create("already-exists",{id:r});if(!Sm){Ab(Pu);const{wrappedGtag:s,gtagCore:o}=Lb(cs,_m,wm,Pu,Qb);a0=s,Em=o,Sm=!0}return cs[r]=qb(t,_m,wm,e,Em,Pu,n),new Yb(t)}function l0(t=zd()){t=$t(t);const e=Ar(t,Va);return e.isInitialized()?e.getImmediate():Zb(t)}function Zb(t,e={}){const n=Ar(t,Va);if(n.isInitialized()){const i=n.getImmediate();if(Ms(e,n.getOptions()))return i;throw Je.create("already-initialized")}return n.initialize({options:e})}function eT(t,e,n,r){t=$t(t),Gb(a0,cs[t.app.options.appId],e,n,r).catch(i=>Ke.error(i))}const km="@firebase/analytics",Im="0.10.0";function tT(){zt(new Nt(Va,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return Jb(r,i,n)},"PUBLIC")),zt(new Nt("analytics-internal",t,"PRIVATE")),ct(km,Im),ct(km,Im,"esm2017");function t(e){try{const n=e.getProvider(Va).getImmediate();return{logEvent:(r,i,s)=>eT(n,r,i,s)}}catch(n){throw Je.create("interop-component-reg-failed",{reason:n})}}}tT();function Gd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function u0(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nT=u0,c0=new Rr("auth","Firebase",u0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga=new Nl("@firebase/auth");function rT(t,...e){Ga.logLevel<=Y.WARN&&Ga.warn(`Auth (${xi}): ${t}`,...e)}function oa(t,...e){Ga.logLevel<=Y.ERROR&&Ga.error(`Auth (${xi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t,...e){throw Kd(t,...e)}function Ft(t,...e){return Kd(t,...e)}function f0(t,e,n){const r=Object.assign(Object.assign({},nT()),{[e]:n});return new Rr("auth","Firebase",r).create(e,{appName:t.name})}function iT(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&jt(t,"argument-error"),f0(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Kd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return c0.create(t,...e)}function F(t,e,...n){if(!t)throw Kd(e,...n)}function qt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw oa(e),new Error(e)}function sn(t,e){t||qt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function sT(){return Cm()==="http:"||Cm()==="https:"}function Cm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sT()||N_()||"connection"in navigator)?navigator.onLine:!0}function aT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,n){this.shortDelay=e,this.longDelay=n,sn(n>e,"Short delay should be less than long delay!"),this.isMobile=Md()||x_()}get(){return oT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(t,e){sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT=new Zs(3e4,6e4);function h0(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function eo(t,e,n,r,i={}){return p0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ni(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),d0.fetch()(m0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function p0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},lT),e);try{const i=new fT(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Mo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Mo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Mo(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw f0(t,c,u);jt(t,c)}}catch(i){if(i instanceof Bt)throw i;jt(t,"network-request-failed",{message:String(i)})}}async function cT(t,e,n,r,i={}){const s=await eo(t,e,n,r,i);return"mfaPendingCredential"in s&&jt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function m0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?qd(t.config,i):`${t.config.apiScheme}://${i}`}class fT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ft(this.auth,"network-request-failed")),uT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Mo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ft(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dT(t,e){return eo(t,"POST","/v1/accounts:delete",e)}async function hT(t,e){return eo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pT(t,e=!1){const n=$t(t),r=await n.getIdToken(e),i=Yd(r);F(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:fs(Ou(i.auth_time)),issuedAtTime:fs(Ou(i.iat)),expirationTime:fs(Ou(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ou(t){return Number(t)*1e3}function Yd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return oa("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ba(n);return i?JSON.parse(i):(oa("Failed to decode base64 JWT payload"),null)}catch(i){return oa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function mT(t){const e=Yd(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Us(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Bt&&gT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function gT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fs(this.lastLoginAt),this.creationTime=fs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ka(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Us(t,hT(n,{idToken:r}));F(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?wT(s.providerUserInfo):[],a=_T(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new g0(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function yT(t){const e=$t(t);await Ka(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _T(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function wT(t){return t.map(e=>{var{providerId:n}=e,r=Gd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ET(t,e){const n=await p0(t,{},async()=>{const r=Ni({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=m0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",d0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await ET(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new zs;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(F(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(F(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zs,this.toJSON())}_performRefresh(){return qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class fr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Gd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new g0(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Us(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pT(this,e)}reload(){return yT(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new fr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ka(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Us(this,dT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:_,isAnonymous:I,providerData:b,stsTokenManager:N}=n;F(v&&N,e,"internal-error");const P=zs.fromJSON(this.name,N);F(typeof v=="string",e,"internal-error"),pn(f,e.name),pn(d,e.name),F(typeof _=="boolean",e,"internal-error"),F(typeof I=="boolean",e,"internal-error"),pn(g,e.name),pn(m,e.name),pn(y,e.name),pn(E,e.name),pn(p,e.name),pn(h,e.name);const T=new fr({uid:v,auth:e,email:d,emailVerified:_,displayName:f,isAnonymous:I,photoURL:m,phoneNumber:g,tenantId:y,stsTokenManager:P,createdAt:p,lastLoginAt:h});return b&&Array.isArray(b)&&(T.providerData=b.map(D=>Object.assign({},D))),E&&(T._redirectEventId=E),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new zs;i.updateFromServerResponse(n);const s=new fr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ka(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm=new Map;function Yt(t){sn(t instanceof Function,"Expected a class definition");let e=bm.get(t);return e?(sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,bm.set(t,e),e)}/**
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
 */class v0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}v0.type="NONE";const Tm=v0;/**
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
 */function aa(t,e,n){return`firebase:${t}:${e}:${n}`}class si{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=aa(this.userKey,i.apiKey,s),this.fullPersistenceKey=aa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new si(Yt(Tm),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Yt(Tm);const o=aa(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const f=fr._fromJSON(e,c);u!==s&&(a=f),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new si(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new si(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(w0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(y0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(S0(e))return"Blackberry";if(k0(e))return"Webos";if(Qd(e))return"Safari";if((e.includes("chrome/")||_0(e))&&!e.includes("edge/"))return"Chrome";if(E0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function y0(t=Me()){return/firefox\//i.test(t)}function Qd(t=Me()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _0(t=Me()){return/crios\//i.test(t)}function w0(t=Me()){return/iemobile/i.test(t)}function E0(t=Me()){return/android/i.test(t)}function S0(t=Me()){return/blackberry/i.test(t)}function k0(t=Me()){return/webos/i.test(t)}function Al(t=Me()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ST(t=Me()){var e;return Al(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kT(){return rI()&&document.documentMode===10}function I0(t=Me()){return Al(t)||E0(t)||k0(t)||S0(t)||/windows phone/i.test(t)||w0(t)}function IT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(t,e=[]){let n;switch(t){case"Browser":n=Nm(Me());break;case"Worker":n=`${Nm(Me())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xi}/${r}`}async function b0(t,e){return eo(t,"GET","/v2/recaptchaConfig",h0(t,e))}function xm(t){return t!==void 0&&t.enterprise!==void 0}class T0{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function N0(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ft("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",CT().appendChild(r)})}function bT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const TT="https://www.google.com/recaptcha/enterprise.js?render=",NT="recaptcha-enterprise",xT="NO_RECAPTCHA";class RT{constructor(e){this.type=NT,this.auth=to(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{b0(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new T0(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;xm(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(xT)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&xm(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}N0(TT+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class AT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rm(this),this.idTokenSubscription=new Rm(this),this.beforeStateQueue=new AT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Yt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await si.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ka(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?$t(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Yt(e))})}async initializeRecaptchaConfig(){const e=await b0(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new T0(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new RT(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Rr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Yt(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await si.create(this,[Yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=C0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&rT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function to(t){return $t(t)}class Rm{constructor(e){this.auth=e,this.observer=null,this.addObserver=fI(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OT(t,e){const n=Ar(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ms(s,e??{}))return i;jt(i,"already-initialized")}return n.initialize({options:e})}function DT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Yt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function LT(t,e,n){const r=to(t);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=x0(e),{host:o,port:a}=MT(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||FT()}function x0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function MT(t){const e=x0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Am(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Am(o)}}}function Am(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function FT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qt("not implemented")}_getIdTokenResponse(e){return qt("not implemented")}_linkToIdToken(e,n){return qt("not implemented")}_getReauthenticationResolver(e){return qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oi(t,e){return cT(t,"POST","/v1/accounts:signInWithIdp",h0(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT="http://localhost";class Er extends R0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Er(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Gd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Er(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return oi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,oi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,oi(e,n)}buildRequest(){const e={requestUri:UT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ni(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class no extends Xd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends no{constructor(){super("facebook.com")}static credential(e){return Er._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.FACEBOOK_SIGN_IN_METHOD="facebook.com";En.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends no{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Er._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ot.credential(n,r)}catch{return null}}}ot.GOOGLE_SIGN_IN_METHOD="google.com";ot.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends no{constructor(){super("github.com")}static credential(e){return Er._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sn.credential(e.oauthAccessToken)}catch{return null}}}Sn.GITHUB_SIGN_IN_METHOD="github.com";Sn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends no{constructor(){super("twitter.com")}static credential(e,n){return Er._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return kn.credential(n,r)}catch{return null}}}kn.TWITTER_SIGN_IN_METHOD="twitter.com";kn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await fr._fromIdTokenResponse(e,r,i),o=Pm(r);return new _i({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Pm(r);return new _i({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Pm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa extends Bt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,qa.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new qa(e,n,r,i)}}function A0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?qa._fromErrorAndOperation(t,s,e,r):s})}async function zT(t,e,n=!1){const r=await Us(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _i._forOperation(t,"link",r)}/**
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
 */async function jT(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Us(t,A0(r,i,e,t),n);F(s.idToken,r,"internal-error");const o=Yd(s.idToken);F(o,r,"internal-error");const{sub:a}=o;return F(t.uid===a,r,"user-mismatch"),_i._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&jt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BT(t,e,n=!1){const r="signIn",i=await A0(t,r,e),s=await _i._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function $T(t,e,n,r){return $t(t).onIdTokenChanged(e,n,r)}function WT(t,e,n){return $t(t).beforeAuthStateChanged(e,n)}const Ya="__sak";/**
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
 */class P0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ya,"1"),this.storage.removeItem(Ya),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HT(){const t=Me();return Qd(t)||Al(t)}const VT=1e3,GT=10;class O0 extends P0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=HT()&&IT(),this.fallbackToPolling=I0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);kT()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,GT):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},VT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}O0.type="LOCAL";const KT=O0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0 extends P0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}D0.type="SESSION";const L0=D0;/**
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
 */function qT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Pl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Pl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await qT(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class YT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Jd("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(){return window}function QT(t){Ut().location.href=t}/**
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
 */function M0(){return typeof Ut().WorkerGlobalScope<"u"&&typeof Ut().importScripts=="function"}async function XT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ZT(){return M0()?self:null}/**
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
 */const F0="firebaseLocalStorageDb",eN=1,Qa="firebaseLocalStorage",U0="fbase_key";class ro{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ol(t,e){return t.transaction([Qa],e?"readwrite":"readonly").objectStore(Qa)}function tN(){const t=indexedDB.deleteDatabase(F0);return new ro(t).toPromise()}function rf(){const t=indexedDB.open(F0,eN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Qa,{keyPath:U0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Qa)?e(r):(r.close(),await tN(),e(await rf()))})})}async function Om(t,e,n){const r=Ol(t,!0).put({[U0]:e,value:n});return new ro(r).toPromise()}async function nN(t,e){const n=Ol(t,!1).get(e),r=await new ro(n).toPromise();return r===void 0?null:r.value}function Dm(t,e){const n=Ol(t,!0).delete(e);return new ro(n).toPromise()}const rN=800,iN=3;class z0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>iN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return M0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pl._getInstance(ZT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await XT(),!this.activeServiceWorker)return;this.sender=new YT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rf();return await Om(e,Ya,"1"),await Dm(e,Ya),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Om(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>nN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Dm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ol(i,!1).getAll();return new ro(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}z0.type="LOCAL";const sN=z0;new Zs(3e4,6e4);/**
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
 */function j0(t,e){return e?Yt(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Zd extends R0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return oi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return oi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return oi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function oN(t){return BT(t.auth,new Zd(t),t.bypassAuthState)}function aN(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),jT(n,new Zd(t),t.bypassAuthState)}async function lN(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),zT(n,new Zd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oN;case"linkViaPopup":case"linkViaRedirect":return lN;case"reauthViaPopup":case"reauthViaRedirect":return aN;default:jt(this.auth,"internal-error")}}resolve(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN=new Zs(2e3,1e4);async function cN(t,e,n){const r=to(t);iT(t,e,Xd);const i=j0(r,n);return new sr(r,"signInViaPopup",e,i).executeNotNull()}class sr extends B0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,sr.currentPopupAction&&sr.currentPopupAction.cancel(),sr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){sn(this.filter.length===1,"Popup operations only handle one event");const e=Jd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ft(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ft(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ft(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uN.get())};e()}}sr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN="pendingRedirect",la=new Map;class dN extends B0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=la.get(this.auth._key());if(!e){try{const r=await hN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}la.set(this.auth._key(),e)}return this.bypassAuthState||la.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hN(t,e){const n=gN(e),r=mN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function pN(t,e){la.set(t._key(),e)}function mN(t){return Yt(t._redirectPersistence)}function gN(t){return aa(fN,t.config.apiKey,t.name)}async function vN(t,e,n=!1){const r=to(t),i=j0(r,e),o=await new dN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yN=10*60*1e3;class _N{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!$0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ft(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lm(e))}saveEventToCache(e){this.cachedEventUids.add(Lm(e)),this.lastProcessedEventTime=Date.now()}}function Lm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function $0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function wN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EN(t,e={}){return eo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kN=/^https?/;async function IN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await EN(t);for(const n of e)try{if(CN(n))return}catch{}jt(t,"unauthorized-domain")}function CN(t){const e=nf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!kN.test(n))return!1;if(SN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const bN=new Zs(3e4,6e4);function Mm(){const t=Ut().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function TN(t){return new Promise((e,n)=>{var r,i,s;function o(){Mm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mm(),n(Ft(t,"network-request-failed"))},timeout:bN.get()})}if(!((i=(r=Ut().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ut().gapi)===null||s===void 0)&&s.load)o();else{const a=bT("iframefcb");return Ut()[a]=()=>{gapi.load?o():n(Ft(t,"network-request-failed"))},N0(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ua=null,e})}let ua=null;function NN(t){return ua=ua||TN(t),ua}/**
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
 */const xN=new Zs(5e3,15e3),RN="__/auth/iframe",AN="emulator/auth/iframe",PN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ON=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function DN(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?qd(e,AN):`https://${t.config.authDomain}/${RN}`,r={apiKey:e.apiKey,appName:t.name,v:xi},i=ON.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ni(r).slice(1)}`}async function LN(t){const e=await NN(t),n=Ut().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:DN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:PN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ft(t,"network-request-failed"),a=Ut().setTimeout(()=>{s(o)},xN.get());function l(){Ut().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const MN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},FN=500,UN=600,zN="_blank",jN="http://localhost";class Fm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BN(t,e,n,r=FN,i=UN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},MN),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Me().toLowerCase();n&&(a=_0(u)?zN:n),y0(u)&&(e=e||jN,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[g,m])=>`${d}${g}=${m},`,"");if(ST(u)&&a!=="_self")return $N(e||"",a),new Fm(null);const f=window.open(e||"",a,c);F(f,t,"popup-blocked");try{f.focus()}catch{}return new Fm(f)}function $N(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const WN="__/auth/handler",HN="emulator/auth/handler",VN=encodeURIComponent("fac");async function Um(t,e,n,r,i,s){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:xi,eventId:i};if(e instanceof Xd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Kc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,f]of Object.entries(s||{}))o[c]=f}if(e instanceof no){const c=e.getScopes().filter(f=>f!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${VN}=${encodeURIComponent(l)}`:"";return`${GN(t)}?${Ni(a).slice(1)}${u}`}function GN({config:t}){return t.emulator?qd(t,HN):`https://${t.authDomain}/${WN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du="webStorageSupport";class KN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=L0,this._completeRedirectFn=vN,this._overrideRedirectResult=pN}async _openPopup(e,n,r,i){var s;sn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Um(e,n,r,nf(),i);return BN(e,o,Jd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Um(e,n,r,nf(),i);return QT(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(sn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await LN(e),r=new _N(e);return n.register("authEvent",i=>(F(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Du,{type:Du},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Du];o!==void 0&&n(!!o),jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=IN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return I0()||Qd()||Al()}}const qN=KN;var zm="@firebase/auth",jm="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function XN(t){zt(new Nt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:C0(t)},u=new PT(r,i,s,l);return DT(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),zt(new Nt("auth-internal",e=>{const n=to(e.getProvider("auth").getImmediate());return(r=>new YN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ct(zm,jm,QN(t)),ct(zm,jm,"esm2017")}/**
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
 */const JN=5*60,ZN=T_("authIdTokenMaxAge")||JN;let Bm=null;const ex=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ZN)return;const i=n==null?void 0:n.token;Bm!==i&&(Bm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function tx(t=zd()){const e=Ar(t,"auth");if(e.isInitialized())return e.getImmediate();const n=OT(t,{popupRedirectResolver:qN,persistence:[sN,KT,L0]}),r=T_("authTokenSyncURL");if(r){const s=ex(r);WT(n,s,()=>s(n.currentUser)),$T(n,o=>s(o))}const i=C_("auth");return i&&LT(n,`http://${i}`),n}XN("Browser");const $m="@firebase/database",Wm="0.14.4";/**
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
 */let W0="";function nx(t){W0=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),be(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ls(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return fn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new rx(e)}}catch{}return new ix},or=H0("localStorage"),sf=H0("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=new Nl("@firebase/database"),sx=function(){let t=1;return function(){return t++}}(),V0=function(t){const e=mI(t),n=new cI;n.update(e);const r=n.digest();return Od.encodeByteArray(r)},io=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=io.apply(null,r):typeof r=="object"?e+=be(r):e+=r,e+=" "}return e};let dr=null,Hm=!0;const ox=function(t,e){C(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ai.logLevel=Y.VERBOSE,dr=ai.log.bind(ai),e&&sf.set("logging_enabled",!0)):typeof t=="function"?dr=t:(dr=null,sf.remove("logging_enabled"))},Pe=function(...t){if(Hm===!0&&(Hm=!1,dr===null&&sf.get("logging_enabled")===!0&&ox(!0)),dr){const e=io.apply(null,t);dr(e)}},so=function(t){return function(...e){Pe(t,...e)}},of=function(...t){const e="FIREBASE INTERNAL ERROR: "+io(...t);ai.error(e)},on=function(...t){const e=`FIREBASE FATAL ERROR: ${io(...t)}`;throw ai.error(e),new Error(e)},Ze=function(...t){const e="FIREBASE WARNING: "+io(...t);ai.warn(e)},ax=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ze("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},G0=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},lx=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},wi="[MIN_NAME]",Sr="[MAX_NAME]",Ri=function(t,e){if(t===e)return 0;if(t===wi||e===Sr)return-1;if(e===wi||t===Sr)return 1;{const n=Vm(t),r=Vm(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},ux=function(t,e){return t===e?0:t<e?-1:1},Vi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+be(e))},eh=function(t){if(typeof t!="object"||t===null)return be(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=be(e[r]),n+=":",n+=eh(t[e[r]]);return n+="}",n},K0=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function pt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const q0=function(t){C(!G0(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let f="";for(l=0;l<64;l+=8){let d=parseInt(c.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),f=f+d}return f.toLowerCase()},cx=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},fx=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},dx=new RegExp("^-?(0*)\\d{1,10}$"),hx=-2147483648,px=2147483647,Vm=function(t){if(dx.test(t)){const e=Number(t);if(e>=hx&&e<=px)return e}return null},oo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ze("Exception was thrown by user callback.",n),e},Math.floor(0))}},mx=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ds=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class gx{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ze(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Pe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ze(e)}}class li{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}li.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th="5",Y0="v",Q0="s",X0="r",J0="f",Z0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ew="ls",tw="p",af="ac",nw="websocket",rw="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=or.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&or.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function yx(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function sw(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let r;if(e===nw)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===rw)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);yx(t)&&(n.ns=t.namespace);const i=[];return pt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(){this.counters_={}}incrementCounter(e,n=1){fn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Yk(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu={},Mu={};function nh(t){const e=t.toString();return Lu[e]||(Lu[e]=new _x),Lu[e]}function wx(t,e){const n=t.toString();return Mu[n]||(Mu[n]=e()),Mu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&oo(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm="start",Sx="close",kx="pLPCommand",Ix="pRTLPCB",ow="id",aw="pw",lw="ser",Cx="cb",bx="seg",Tx="ts",Nx="d",xx="dframe",uw=1870,cw=30,Rx=uw-cw,Ax=25e3,Px=3e4;class qr{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=so(e),this.stats_=nh(n),this.urlFn=l=>(this.appCheckToken&&(l[af]=this.appCheckToken),sw(n,rw,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Ex(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Px)),lx(()=>{if(this.isClosed_)return;this.scriptTagHolder=new rh((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Gm)this.id=a,this.password=l;else if(o===Sx)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Gm]="t",r[lw]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Cx]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Y0]=th,this.transportSessionId&&(r[Q0]=this.transportSessionId),this.lastSessionId&&(r[ew]=this.lastSessionId),this.applicationId&&(r[tw]=this.applicationId),this.appCheckToken&&(r[af]=this.appCheckToken),typeof location<"u"&&location.hostname&&Z0.test(location.hostname)&&(r[X0]=J0);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){qr.forceAllow_=!0}static forceDisallow(){qr.forceDisallow_=!0}static isAvailable(){return qr.forceAllow_?!0:!qr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!cx()&&!fx()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=k_(n),i=K0(r,Rx);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[xx]="t",r[ow]=e,r[aw]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=be(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class rh{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=sx(),window[kx+this.uniqueCallbackIdentifier]=e,window[Ix+this.uniqueCallbackIdentifier]=n,this.myIFrame=rh.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Pe("frame writing exception"),a.stack&&Pe(a.stack),Pe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Pe("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ow]=this.myID,e[aw]=this.myPW,e[lw]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+cw+r.length<=uw;){const o=this.pendingSegs.shift();r=r+"&"+bx+i+"="+o.seg+"&"+Tx+i+"="+o.ts+"&"+Nx+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(Ax)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Pe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ox=16384,Dx=45e3;let Xa=null;typeof MozWebSocket<"u"?Xa=MozWebSocket:typeof WebSocket<"u"&&(Xa=WebSocket);class Et{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=so(this.connId),this.stats_=nh(n),this.connURL=Et.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Y0]=th,typeof location<"u"&&location.hostname&&Z0.test(location.hostname)&&(o[X0]=J0),n&&(o[Q0]=n),r&&(o[ew]=r),i&&(o[af]=i),s&&(o[tw]=s),sw(e,nw,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,or.set("previous_websocket_failure",!0);try{let r;R_(),this.mySock=new Xa(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Et.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Xa!==null&&!Et.forceDisallow_}static previouslyFailed(){return or.isInMemoryStorage||or.get("previous_websocket_failure")===!0}markConnectionHealthy(){or.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ls(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=K0(n,Ox);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Dx))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Et.responsesRequiredToBeHealthy=2;Et.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[qr,Et]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Et&&Et.isAvailable();let r=n&&!Et.previouslyFailed();if(e.webSocketOnly&&(n||Ze("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Et];else{const i=this.transports_=[];for(const s of js.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);js.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}js.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lx=6e4,Mx=5e3,Fx=10*1024,Ux=100*1024,Fu="t",Km="d",zx="s",qm="r",jx="e",Ym="o",Qm="a",Xm="n",Jm="p",Bx="h";class $x{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=so("c:"+this.id+":"),this.transportManager_=new js(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ds(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ux?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Fx?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Fu in e){const n=e[Fu];n===Qm?this.upgradeIfSecondaryHealthy_():n===qm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ym&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Vi("t",e),r=Vi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Jm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Qm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Xm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Vi("t",e),r=Vi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Vi(Fu,e);if(Km in e){const r=e[Km];if(n===Bx){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Xm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===zx?this.onConnectionShutdown_(r):n===qm?this.onReset_(r):n===jx?of("Server Error: "+r):n===Ym?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):of("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),th!==r&&Ze("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ds(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Lx))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ds(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Mx))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Jm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(or.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja extends dw{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Md()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ja}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm=32,eg=768;class ie{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Q(){return new ie("")}function H(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Bn(t){return t.pieces_.length-t.pieceNum_}function ee(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ie(t.pieces_,e)}function hw(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Wx(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function pw(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function mw(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ie(e,0)}function ke(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ie)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ie(n,0)}function $(t){return t.pieceNum_>=t.pieces_.length}function lt(t,e){const n=H(t),r=H(e);if(n===null)return e;if(n===r)return lt(ee(t),ee(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function gw(t,e){if(Bn(t)!==Bn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function St(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Bn(t)>Bn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class Hx{constructor(e,n){this.errorPrefix_=n,this.parts_=pw(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Tl(this.parts_[r]);vw(this)}}function Vx(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Tl(e),vw(t)}function Gx(t){const e=t.parts_.pop();t.byteLength_-=Tl(e),t.parts_.length>0&&(t.byteLength_-=1)}function vw(t){if(t.byteLength_>eg)throw new Error(t.errorPrefix_+"has a key path longer than "+eg+" bytes ("+t.byteLength_+").");if(t.parts_.length>Zm)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Zm+") or object contains a cycle "+Zn(t))}function Zn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih extends dw{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new ih}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=1e3,Kx=60*5*1e3,tg=30*1e3,qx=1.3,Yx=3e4,Qx="server_kill",ng=3;class Jt extends fw{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Jt.nextPersistentConnectionId_++,this.log_=so("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Gi,this.maxReconnectDelay_=Kx,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!R_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ih.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ja.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(be(s)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ld,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Jt.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&fn(e,"w")){const r=yi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ze(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||uI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=tg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=lI(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+be(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):of("Unrecognized action received from server: "+be(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Gi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Gi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Yx&&(this.reconnectDelay_=Gi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*qx)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Jt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(f){C(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,d]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Pe("getToken() completed but was canceled"):(Pe("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=d&&d.token,a=new $x(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{Ze(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(Qx)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Ze(f),l())}}}interrupt(e){Pe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Pe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Kc(this.interruptReasons_)&&(this.reconnectDelay_=Gi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>eh(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ie(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Pe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ng&&(this.reconnectDelay_=tg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Pe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ng&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+W0.replace(/\./g,"-")]=1,Md()?e["framework.cordova"]=1:x_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ja.getInstance().currentlyOnline();return Kc(this.interruptReasons_)&&e}}Jt.nextPersistentConnectionId_=0;Jt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new V(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new V(wi,e),i=new V(wi,n);return this.compare(r,i)!==0}minPost(){return V.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fo;class yw extends Dl{static get __EMPTY_NODE(){return Fo}static set __EMPTY_NODE(e){Fo=e}compare(e,n){return Ri(e.name,n.name)}isDefinedOn(e){throw Ti("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return V.MIN}maxPost(){return new V(Sr,Fo)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new V(e,Fo)}toString(){return".key"}}const ui=new yw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Se{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Se.RED,this.left=i??We.EMPTY_NODE,this.right=s??We.EMPTY_NODE}copy(e,n,r,i,s){return new Se(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return We.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return We.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Se.RED=!0;Se.BLACK=!1;class Xx{copy(e,n,r,i,s){return this}insert(e,n,r){return new Se(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class We{constructor(e,n=We.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new We(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Se.BLACK,null,null))}remove(e){return new We(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Se.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Uo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Uo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Uo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Uo(this.root_,null,this.comparator_,!0,e)}}We.EMPTY_NODE=new Xx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jx(t,e){return Ri(t.name,e.name)}function sh(t,e){return Ri(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lf;function Zx(t){lf=t}const _w=function(t){return typeof t=="number"?"number:"+q0(t):"string:"+t},ww=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&fn(e,".sv"),"Priority must be a string or number.")}else C(t===lf||t.isEmpty(),"priority of unexpected type.");C(t===lf||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rg;class we{constructor(e,n=we.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ww(this.priorityNode_)}static set __childrenNodeConstructor(e){rg=e}static get __childrenNodeConstructor(){return rg}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new we(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return $(e)?this:H(e)===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:we.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=H(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(C(r!==".priority"||Bn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,we.__childrenNodeConstructor.EMPTY_NODE.updateChild(ee(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+_w(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=q0(this.value_):e+=this.value_,this.lazyHash_=V0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===we.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof we.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=we.VALUE_TYPE_ORDER.indexOf(n),s=we.VALUE_TYPE_ORDER.indexOf(r);return C(i>=0,"Unknown leaf type: "+n),C(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}we.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ew,Sw;function eR(t){Ew=t}function tR(t){Sw=t}class nR extends Dl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Ri(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return V.MIN}maxPost(){return new V(Sr,new we("[PRIORITY-POST]",Sw))}makePost(e,n){const r=Ew(e);return new V(n,new we("[PRIORITY-POST]",r))}toString(){return".priority"}}const De=new nR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR=Math.log(2);class iR{constructor(e){const n=s=>parseInt(Math.log(s)/rR,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Za=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let f,d;if(c===0)return null;if(c===1)return f=t[l],d=n?n(f):f,new Se(d,f.node,Se.BLACK,null,null);{const g=parseInt(c/2,10)+l,m=i(l,g),y=i(g+1,u);return f=t[g],d=n?n(f):f,new Se(d,f.node,Se.BLACK,m,y)}},s=function(l){let u=null,c=null,f=t.length;const d=function(m,y){const E=f-m,p=f;f-=m;const h=i(E+1,p),v=t[E],_=n?n(v):v;g(new Se(_,v.node,y,null,h))},g=function(m){u?(u.left=m,u=m):(c=m,u=m)};for(let m=0;m<l.count;++m){const y=l.nextBitIsOne(),E=Math.pow(2,l.count-(m+1));y?d(E,Se.BLACK):(d(E,Se.BLACK),d(E,Se.RED))}return c},o=new iR(t.length),a=s(o);return new We(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uu;const Lr={};class Qt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return C(Lr&&De,"ChildrenNode.ts has not been loaded"),Uu=Uu||new Qt({".priority":Lr},{".priority":De}),Uu}get(e){const n=yi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof We?n:null}hasIndex(e){return fn(this.indexSet_,e.toString())}addIndex(e,n){C(e!==ui,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(V.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Za(r,e.getCompare()):a=Lr;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new Qt(c,u)}addToIndexes(e,n){const r=$a(this.indexes_,(i,s)=>{const o=yi(this.indexSet_,s);if(C(o,"Missing index implementation for "+s),i===Lr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(V.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Za(a,o.getCompare())}else return Lr;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new V(e.name,a))),l.insert(e,e.node)}});return new Qt(r,this.indexSet_)}removeFromIndexes(e,n){const r=$a(this.indexes_,i=>{if(i===Lr)return i;{const s=n.get(e.name);return s?i.remove(new V(e.name,s)):i}});return new Qt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ki;class K{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&ww(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ki||(Ki=new K(new We(sh),null,Qt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ki}updatePriority(e){return this.children_.isEmpty()?this:new K(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ki:n}}getChild(e){const n=H(e);return n===null?this:this.getImmediateChild(n).getChild(ee(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new V(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ki:this.priorityNode_;return new K(i,o,s)}}updateChild(e,n){const r=H(e);if(r===null)return n;{C(H(e)!==".priority"||Bn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ee(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(De,(o,a)=>{n[o]=a.val(e),r++,s&&K.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+_w(this.getPriority().val())+":"),this.forEachChild(De,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":V0(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new V(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new V(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new V(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,V.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,V.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ao?-1:0}withIndex(e){if(e===ui||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new K(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ui||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(De),i=n.getIterator(De);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ui?null:this.indexMap_.get(e.toString())}}K.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class sR extends K{constructor(){super(new We(sh),K.EMPTY_NODE,Qt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return K.EMPTY_NODE}isEmpty(){return!1}}const ao=new sR;Object.defineProperties(V,{MIN:{value:new V(wi,K.EMPTY_NODE)},MAX:{value:new V(Sr,ao)}});yw.__EMPTY_NODE=K.EMPTY_NODE;we.__childrenNodeConstructor=K;Zx(ao);tR(ao);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR=!0;function Oe(t,e=null){if(t===null)return K.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new we(n,Oe(e))}if(!(t instanceof Array)&&oR){const n=[];let r=!1;if(pt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Oe(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new V(o,l)))}}),n.length===0)return K.EMPTY_NODE;const s=Za(n,Jx,o=>o.name,sh);if(r){const o=Za(n,De.getCompare());return new K(s,Oe(e),new Qt({".priority":o},{".priority":De}))}else return new K(s,Oe(e),Qt.Default)}else{let n=K.EMPTY_NODE;return pt(t,(r,i)=>{if(fn(t,r)&&r.substring(0,1)!=="."){const s=Oe(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Oe(e))}}eR(Oe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR extends Dl{constructor(e){super(),this.indexPath_=e,C(!$(e)&&H(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Ri(e.name,n.name):s}makePost(e,n){const r=Oe(e),i=K.EMPTY_NODE.updateChild(this.indexPath_,r);return new V(n,i)}maxPost(){const e=K.EMPTY_NODE.updateChild(this.indexPath_,ao);return new V(Sr,e)}toString(){return pw(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR extends Dl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ri(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return V.MIN}maxPost(){return V.MAX}makePost(e,n){const r=Oe(e);return new V(n,r)}toString(){return".value"}}const uR=new lR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cR(t){return{type:"value",snapshotNode:t}}function fR(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function dR(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ig(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function hR(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=De}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:wi}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Sr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===De}copy(){const e=new oh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function sg(t){const e={};if(t.isDefault())return e;let n;if(t.index_===De?n="$priority":t.index_===uR?n="$value":t.index_===ui?n="$key":(C(t.index_ instanceof aR,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=be(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=be(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+be(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=be(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+be(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function og(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==De&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el extends fw{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=so("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=el.getListenId_(e,r),a={};this.listens_[o]=a;const l=sg(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let f=c;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(s,f,!1,r),yi(this.listens_,o)===a){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=el.getListenId_(e,n);delete this.listens_[r]}get(e){const n=sg(e._queryParams),r=e._path.toString(),i=new Ld;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ni(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ls(a.responseText)}catch{Ze("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Ze("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(){this.rootNode_=K.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(){return{value:null,children:new Map}}function kw(t,e,n){if($(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=H(e);t.children.has(r)||t.children.set(r,tl());const i=t.children.get(r);e=ee(e),kw(i,e,n)}}function uf(t,e,n){t.value!==null?n(e,t.value):mR(t,(r,i)=>{const s=new ie(e.toString()+"/"+r);uf(i,s,n)})}function mR(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&pt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag=10*1e3,vR=30*1e3,yR=5*60*1e3;class _R{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new gR(e);const r=ag+(vR-ag)*Math.random();ds(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;pt(e,(i,s)=>{s>0&&fn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ds(this.reportStats_.bind(this),Math.floor(Math.random()*2*yR))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Pt||(Pt={}));function Iw(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Cw(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function bw(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Pt.ACK_USER_WRITE,this.source=Iw()}operationForChild(e){if($(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ie(e));return new nl(Q(),n,this.revert)}}else return C(H(this.path)===e,"operationForChild called for unrelated child."),new nl(ee(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Pt.OVERWRITE}operationForChild(e){return $(this.path)?new kr(this.source,Q(),this.snap.getImmediateChild(e)):new kr(this.source,ee(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Pt.MERGE}operationForChild(e){if($(this.path)){const n=this.children.subtree(new ie(e));return n.isEmpty()?null:n.value?new kr(this.source,Q(),n.value):new Bs(this.source,Q(),n)}else return C(H(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Bs(this.source,ee(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if($(e))return this.isFullyInitialized()&&!this.filtered_;const n=H(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function wR(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(hR(o.childName,o.snapshotNode))}),qi(t,i,"child_removed",e,r,n),qi(t,i,"child_added",e,r,n),qi(t,i,"child_moved",s,r,n),qi(t,i,"child_changed",e,r,n),qi(t,i,"value",e,r,n),i}function qi(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>SR(t,a,l)),o.forEach(a=>{const l=ER(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function ER(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function SR(t,e,n){if(e.childName==null||n.childName==null)throw Ti("Should only compare child_ events.");const r=new V(e.childName,e.snapshotNode),i=new V(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(t,e){return{eventCache:t,serverCache:e}}function hs(t,e,n,r){return Tw(new ah(e,n,r),t.serverCache)}function Nw(t,e,n,r){return Tw(t.eventCache,new ah(e,n,r))}function cf(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ir(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zu;const kR=()=>(zu||(zu=new We(ux)),zu);class Z{constructor(e,n=kR()){this.value=e,this.children=n}static fromObject(e){let n=new Z(null);return pt(e,(r,i)=>{n=n.set(new ie(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Q(),value:this.value};if($(e))return null;{const r=H(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ee(e),n);return s!=null?{path:ke(new ie(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if($(e))return this;{const n=H(e),r=this.children.get(n);return r!==null?r.subtree(ee(e)):new Z(null)}}set(e,n){if($(e))return new Z(n,this.children);{const r=H(e),s=(this.children.get(r)||new Z(null)).set(ee(e),n),o=this.children.insert(r,s);return new Z(this.value,o)}}remove(e){if($(e))return this.children.isEmpty()?new Z(null):new Z(null,this.children);{const n=H(e),r=this.children.get(n);if(r){const i=r.remove(ee(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Z(null):new Z(this.value,s)}else return this}}get(e){if($(e))return this.value;{const n=H(e),r=this.children.get(n);return r?r.get(ee(e)):null}}setTree(e,n){if($(e))return n;{const r=H(e),s=(this.children.get(r)||new Z(null)).setTree(ee(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Z(this.value,o)}}fold(e){return this.fold_(Q(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ke(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Q(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if($(e))return null;{const s=H(e),o=this.children.get(s);return o?o.findOnPath_(ee(e),ke(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Q(),n)}foreachOnPath_(e,n,r){if($(e))return this;{this.value&&r(n,this.value);const i=H(e),s=this.children.get(i);return s?s.foreachOnPath_(ee(e),ke(n,i),r):new Z(null)}}foreach(e){this.foreach_(Q(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ke(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.writeTree_=e}static empty(){return new bt(new Z(null))}}function ps(t,e,n){if($(e))return new bt(new Z(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=lt(i,e);return s=s.updateChild(o,n),new bt(t.writeTree_.set(i,s))}else{const i=new Z(n),s=t.writeTree_.setTree(e,i);return new bt(s)}}}function lg(t,e,n){let r=t;return pt(n,(i,s)=>{r=ps(r,ke(e,i),s)}),r}function ug(t,e){if($(e))return bt.empty();{const n=t.writeTree_.setTree(e,new Z(null));return new bt(n)}}function ff(t,e){return Pr(t,e)!=null}function Pr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(lt(n.path,e)):null}function cg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(De,(r,i)=>{e.push(new V(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new V(r,i.value))}),e}function Un(t,e){if($(e))return t;{const n=Pr(t,e);return n!=null?new bt(new Z(n)):new bt(t.writeTree_.subtree(e))}}function df(t){return t.writeTree_.isEmpty()}function Ei(t,e){return xw(Q(),t.writeTree_,e)}function xw(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(C(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=xw(ke(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ke(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rw(t,e){return Lw(e,t)}function IR(t,e,n,r,i){C(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ps(t.visibleWrites,e,n)),t.lastWriteId=r}function CR(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function bR(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&TR(a,r.path)?i=!1:St(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return NR(t),!0;if(r.snap)t.visibleWrites=ug(t.visibleWrites,r.path);else{const a=r.children;pt(a,l=>{t.visibleWrites=ug(t.visibleWrites,ke(r.path,l))})}return!0}else return!1}function TR(t,e){if(t.snap)return St(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&St(ke(t.path,n),e))return!0;return!1}function NR(t){t.visibleWrites=Aw(t.allWrites,xR,Q()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function xR(t){return t.visible}function Aw(t,e,n){let r=bt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)St(n,o)?(a=lt(n,o),r=ps(r,a,s.snap)):St(o,n)&&(a=lt(o,n),r=ps(r,Q(),s.snap.getChild(a)));else if(s.children){if(St(n,o))a=lt(n,o),r=lg(r,a,s.children);else if(St(o,n))if(a=lt(o,n),$(a))r=lg(r,Q(),s.children);else{const l=yi(s.children,H(a));if(l){const u=l.getChild(ee(a));r=ps(r,Q(),u)}}}else throw Ti("WriteRecord should have .snap or .children")}}return r}function Pw(t,e,n,r,i){if(!r&&!i){const s=Pr(t.visibleWrites,e);if(s!=null)return s;{const o=Un(t.visibleWrites,e);if(df(o))return n;if(n==null&&!ff(o,Q()))return null;{const a=n||K.EMPTY_NODE;return Ei(o,a)}}}else{const s=Un(t.visibleWrites,e);if(!i&&df(s))return n;if(!i&&n==null&&!ff(s,Q()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(St(u.path,e)||St(e,u.path))},a=Aw(t.allWrites,o,e),l=n||K.EMPTY_NODE;return Ei(a,l)}}}function RR(t,e,n){let r=K.EMPTY_NODE;const i=Pr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(De,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Un(t.visibleWrites,e);return n.forEachChild(De,(o,a)=>{const l=Ei(Un(s,new ie(o)),a);r=r.updateImmediateChild(o,l)}),cg(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Un(t.visibleWrites,e);return cg(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function AR(t,e,n,r,i){C(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ke(e,n);if(ff(t.visibleWrites,s))return null;{const o=Un(t.visibleWrites,s);return df(o)?i.getChild(n):Ei(o,i.getChild(n))}}function PR(t,e,n,r){const i=ke(e,n),s=Pr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Un(t.visibleWrites,i);return Ei(o,r.getNode().getImmediateChild(n))}else return null}function OR(t,e){return Pr(t.visibleWrites,e)}function DR(t,e,n,r,i,s,o){let a;const l=Un(t.visibleWrites,e),u=Pr(l,Q());if(u!=null)a=u;else if(n!=null)a=Ei(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],f=o.getCompare(),d=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=d.getNext();for(;g&&c.length<i;)f(g,r)!==0&&c.push(g),g=d.getNext();return c}else return[]}function LR(){return{visibleWrites:bt.empty(),allWrites:[],lastWriteId:-1}}function hf(t,e,n,r){return Pw(t.writeTree,t.treePath,e,n,r)}function Ow(t,e){return RR(t.writeTree,t.treePath,e)}function fg(t,e,n,r){return AR(t.writeTree,t.treePath,e,n,r)}function rl(t,e){return OR(t.writeTree,ke(t.treePath,e))}function MR(t,e,n,r,i,s){return DR(t.writeTree,t.treePath,e,n,r,i,s)}function lh(t,e,n){return PR(t.writeTree,t.treePath,e,n)}function Dw(t,e){return Lw(ke(t.treePath,e),t.writeTree)}function Lw(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ig(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,dR(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,fR(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ig(r,e.snapshotNode,i.oldSnap));else throw Ti("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Mw=new UR;class uh{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ah(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return lh(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ir(this.viewCache_),s=MR(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function zR(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function jR(t,e,n,r,i){const s=new FR;let o,a;if(n.type===Pt.OVERWRITE){const u=n;u.source.fromUser?o=pf(t,e,u.path,u.snap,r,i,s):(C(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!$(u.path),o=il(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===Pt.MERGE){const u=n;u.source.fromUser?o=$R(t,e,u.path,u.children,r,i,s):(C(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=mf(t,e,u.path,u.children,r,i,a,s))}else if(n.type===Pt.ACK_USER_WRITE){const u=n;u.revert?o=VR(t,e,u.path,r,i,s):o=WR(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Pt.LISTEN_COMPLETE)o=HR(t,e,n.path,r,s);else throw Ti("Unknown operation type: "+n.type);const l=s.getChanges();return BR(e,o,l),{viewCache:o,changes:l}}function BR(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=cf(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(cR(cf(e)))}}function Fw(t,e,n,r,i,s){const o=e.eventCache;if(rl(r,n)!=null)return e;{let a,l;if($(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Ir(e),c=u instanceof K?u:K.EMPTY_NODE,f=Ow(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const u=hf(r,Ir(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=H(n);if(u===".priority"){C(Bn(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const f=fg(r,n,c,l);f!=null?a=t.filter.updatePriority(c,f):a=o.getNode()}else{const c=ee(n);let f;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const d=fg(r,n,o.getNode(),l);d!=null?f=o.getNode().getImmediateChild(u).updateChild(c,d):f=o.getNode().getImmediateChild(u)}else f=lh(r,u,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),u,f,c,i,s):a=o.getNode()}}return hs(e,a,o.isFullyInitialized()||$(n),t.filter.filtersNodes())}}function il(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if($(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),g,null)}else{const g=H(n);if(!l.isCompleteForPath(n)&&Bn(n)>1)return e;const m=ee(n),E=l.getNode().getImmediateChild(g).updateChild(m,r);g===".priority"?u=c.updatePriority(l.getNode(),E):u=c.updateChild(l.getNode(),g,E,m,Mw,null)}const f=Nw(e,u,l.isFullyInitialized()||$(n),c.filtersNodes()),d=new uh(i,f,s);return Fw(t,f,n,i,d,a)}function pf(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new uh(i,e,s);if($(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=hs(e,u,!0,t.filter.filtersNodes());else{const f=H(n);if(f===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=hs(e,u,a.isFullyInitialized(),a.isFiltered());else{const d=ee(n),g=a.getNode().getImmediateChild(f);let m;if($(d))m=r;else{const y=c.getCompleteChild(f);y!=null?hw(d)===".priority"&&y.getChild(mw(d)).isEmpty()?m=y:m=y.updateChild(d,r):m=K.EMPTY_NODE}if(g.equals(m))l=e;else{const y=t.filter.updateChild(a.getNode(),f,m,d,c,o);l=hs(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function dg(t,e){return t.eventCache.isCompleteForChild(e)}function $R(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=ke(n,l);dg(e,H(c))&&(a=pf(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=ke(n,l);dg(e,H(c))||(a=pf(t,a,c,u,i,s,o))}),a}function hg(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function mf(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;$(n)?u=r:u=new Z(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((f,d)=>{if(c.hasChild(f)){const g=e.serverCache.getNode().getImmediateChild(f),m=hg(t,g,d);l=il(t,l,new ie(f),m,i,s,o,a)}}),u.children.inorderTraversal((f,d)=>{const g=!e.serverCache.isCompleteForChild(f)&&d.value===null;if(!c.hasChild(f)&&!g){const m=e.serverCache.getNode().getImmediateChild(f),y=hg(t,m,d);l=il(t,l,new ie(f),y,i,s,o,a)}}),l}function WR(t,e,n,r,i,s,o){if(rl(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if($(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return il(t,e,n,l.getNode().getChild(n),i,s,a,o);if($(n)){let u=new Z(null);return l.getNode().forEachChild(ui,(c,f)=>{u=u.set(new ie(c),f)}),mf(t,e,n,u,i,s,a,o)}else return e}else{let u=new Z(null);return r.foreach((c,f)=>{const d=ke(n,c);l.isCompleteForPath(d)&&(u=u.set(c,l.getNode().getChild(d)))}),mf(t,e,n,u,i,s,a,o)}}function HR(t,e,n,r,i){const s=e.serverCache,o=Nw(e,s.getNode(),s.isFullyInitialized()||$(n),s.isFiltered());return Fw(t,o,n,r,Mw,i)}function VR(t,e,n,r,i,s){let o;if(rl(r,n)!=null)return e;{const a=new uh(r,e,i),l=e.eventCache.getNode();let u;if($(n)||H(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=hf(r,Ir(e));else{const f=e.serverCache.getNode();C(f instanceof K,"serverChildren would be complete if leaf node"),c=Ow(r,f)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=H(n);let f=lh(r,c,e.serverCache);f==null&&e.serverCache.isCompleteForChild(c)&&(f=l.getImmediateChild(c)),f!=null?u=t.filter.updateChild(l,c,f,ee(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,K.EMPTY_NODE,ee(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=hf(r,Ir(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||rl(r,Q())!=null,hs(e,u,o,t.filter.filtersNodes())}}function GR(t,e){const n=Ir(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!$(e)&&!n.getImmediateChild(H(e)).isEmpty())?n.getChild(e):null}function pg(t,e,n,r){e.type===Pt.MERGE&&e.source.queryId!==null&&(C(Ir(t.viewCache_),"We should always have a full cache before handling merges"),C(cf(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=jR(t.processor_,i,e,n,r);return zR(t.processor_,s.viewCache),C(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,KR(t,s.changes,s.viewCache.eventCache.getNode(),null)}function KR(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return wR(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mg;function qR(t){C(!mg,"__referenceConstructor has already been defined"),mg=t}function ch(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return C(s!=null,"SyncTree gave us an op for an invalid query."),pg(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(pg(o,e,n,r));return s}}function fh(t,e){let n=null;for(const r of t.views.values())n=n||GR(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gg;function YR(t){C(!gg,"__referenceConstructor has already been defined"),gg=t}class vg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Z(null),this.pendingWriteTree_=LR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function QR(t,e,n,r,i){return IR(t.pendingWriteTree_,e,n,r,i),i?Ml(t,new kr(Iw(),e,n)):[]}function Yr(t,e,n=!1){const r=CR(t.pendingWriteTree_,e);if(bR(t.pendingWriteTree_,e)){let s=new Z(null);return r.snap!=null?s=s.set(Q(),!0):pt(r.children,o=>{s=s.set(new ie(o),!0)}),Ml(t,new nl(r.path,s,n))}else return[]}function Ll(t,e,n){return Ml(t,new kr(Cw(),e,n))}function XR(t,e,n){const r=Z.fromObject(n);return Ml(t,new Bs(Cw(),e,r))}function JR(t,e,n,r){const i=Bw(t,r);if(i!=null){const s=$w(i),o=s.path,a=s.queryId,l=lt(o,e),u=new kr(bw(a),l,n);return Ww(t,o,u)}else return[]}function ZR(t,e,n,r){const i=Bw(t,r);if(i){const s=$w(i),o=s.path,a=s.queryId,l=lt(o,e),u=Z.fromObject(n),c=new Bs(bw(a),l,u);return Ww(t,o,c)}else return[]}function Uw(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=lt(o,e),u=fh(a,l);if(u)return u});return Pw(i,e,s,n,!0)}function Ml(t,e){return zw(e,t.syncPointTree_,null,Rw(t.pendingWriteTree_,Q()))}function zw(t,e,n,r){if($(t.path))return jw(t,e,n,r);{const i=e.get(Q());n==null&&i!=null&&(n=fh(i,Q()));let s=[];const o=H(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=Dw(r,o);s=s.concat(zw(a,l,u,c))}return i&&(s=s.concat(ch(i,t,r,n))),s}}function jw(t,e,n,r){const i=e.get(Q());n==null&&i!=null&&(n=fh(i,Q()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=Dw(r,o),c=t.operationForChild(o);c&&(s=s.concat(jw(c,a,l,u)))}),i&&(s=s.concat(ch(i,t,r,n))),s}function Bw(t,e){return t.tagToQueryMap.get(e)}function $w(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ie(t.substr(0,e))}}function Ww(t,e,n){const r=t.syncPointTree_.get(e);C(r,"Missing sync point for query tag that we're tracking");const i=Rw(t.pendingWriteTree_,e);return ch(r,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new dh(n)}node(){return this.node_}}class hh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ke(this.path_,e);return new hh(this.syncTree_,n)}node(){return Uw(this.syncTree_,this.path_)}}const eA=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},yg=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return tA(t[".sv"],e,n);if(typeof t[".sv"]=="object")return nA(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},tA=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},nA=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&C(!1,"Unexpected increment value: "+r);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},rA=function(t,e,n,r){return ph(e,new hh(n,t),r)},iA=function(t,e,n){return ph(t,new dh(e),n)};function ph(t,e,n){const r=t.getPriority().val(),i=yg(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=yg(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new we(a,Oe(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new we(i))),o.forEachChild(De,(a,l)=>{const u=ph(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function gh(t,e){let n=e instanceof ie?e:new ie(e),r=t,i=H(n);for(;i!==null;){const s=yi(r.node.children,i)||{children:{},childCount:0};r=new mh(i,r,s),n=ee(n),i=H(n)}return r}function Ai(t){return t.node.value}function Hw(t,e){t.node.value=e,gf(t)}function Vw(t){return t.node.childCount>0}function sA(t){return Ai(t)===void 0&&!Vw(t)}function Fl(t,e){pt(t.node.children,(n,r)=>{e(new mh(n,t,r))})}function Gw(t,e,n,r){n&&!r&&e(t),Fl(t,i=>{Gw(i,e,!0,r)}),n&&r&&e(t)}function oA(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function lo(t){return new ie(t.parent===null?t.name:lo(t.parent)+"/"+t.name)}function gf(t){t.parent!==null&&aA(t.parent,t.name,t)}function aA(t,e,n){const r=sA(n),i=fn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,gf(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,gf(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA=/[\[\].#$\/\u0000-\u001F\u007F]/,uA=/[\[\].#$\u0000-\u001F\u007F]/,ju=10*1024*1024,Kw=function(t){return typeof t=="string"&&t.length!==0&&!lA.test(t)},cA=function(t){return typeof t=="string"&&t.length!==0&&!uA.test(t)},fA=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),cA(t)},qw=function(t,e,n){const r=n instanceof ie?new Hx(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Zn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Zn(r)+" with contents = "+e.toString());if(G0(e))throw new Error(t+"contains "+e.toString()+" "+Zn(r));if(typeof e=="string"&&e.length>ju/3&&Tl(e)>ju)throw new Error(t+"contains a string greater than "+ju+" utf8 bytes "+Zn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(pt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Kw(o)))throw new Error(t+" contains an invalid key ("+o+") "+Zn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Vx(r,o),qw(t,a,r),Gx(r)}),i&&s)throw new Error(t+' contains ".value" child '+Zn(r)+" in addition to actual children.")}},dA=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Kw(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!fA(n))throw new Error(pI(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function pA(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!gw(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Or(t,e,n){pA(t,n),mA(t,r=>St(r,e)||St(e,r))}function mA(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(gA(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function gA(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();dr&&Pe("event: "+n.toString()),oo(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA="repo_interrupt",yA=25;class _A{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new hA,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=tl(),this.transactionQueueTree_=new mh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function wA(t,e,n){if(t.stats_=nh(t.repoInfo_),t.forceRestClient_||mx())t.server_=new el(t.repoInfo_,(r,i,s,o)=>{_g(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>wg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{be(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Jt(t.repoInfo_,e,(r,i,s,o)=>{_g(t,r,i,s,o)},r=>{wg(t,r)},r=>{SA(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=wx(t.repoInfo_,()=>new _R(t.stats_,t.server_)),t.infoData_=new pR,t.infoSyncTree_=new vg({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Ll(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),vh(t,"connected",!1),t.serverSyncTree_=new vg({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);Or(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function EA(t){const n=t.infoData_.getNode(new ie(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Yw(t){return eA({timestamp:EA(t)})}function _g(t,e,n,r,i){t.dataUpdateCount++;const s=new ie(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=$a(n,u=>Oe(u));o=ZR(t.serverSyncTree_,s,l,i)}else{const l=Oe(n);o=JR(t.serverSyncTree_,s,l,i)}else if(r){const l=$a(n,u=>Oe(u));o=XR(t.serverSyncTree_,s,l)}else{const l=Oe(n);o=Ll(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=_h(t,s)),Or(t.eventQueue_,a,o)}function wg(t,e){vh(t,"connected",e),e===!1&&IA(t)}function SA(t,e){pt(e,(n,r)=>{vh(t,n,r)})}function vh(t,e,n){const r=new ie("/.info/"+e),i=Oe(n);t.infoData_.updateSnapshot(r,i);const s=Ll(t.infoSyncTree_,r,i);Or(t.eventQueue_,r,s)}function kA(t){return t.nextWriteId_++}function IA(t){Qw(t,"onDisconnectEvents");const e=Yw(t),n=tl();uf(t.onDisconnect_,Q(),(i,s)=>{const o=rA(i,s,t.serverSyncTree_,e);kw(n,i,o)});let r=[];uf(n,Q(),(i,s)=>{r=r.concat(Ll(t.serverSyncTree_,i,s));const o=NA(t,i);_h(t,o)}),t.onDisconnect_=tl(),Or(t.eventQueue_,Q(),r)}function CA(t){t.persistentConnection_&&t.persistentConnection_.interrupt(vA)}function Qw(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Pe(n,...e)}function Xw(t,e,n){return Uw(t.serverSyncTree_,e,n)||K.EMPTY_NODE}function yh(t,e=t.transactionQueueTree_){if(e||Ul(t,e),Ai(e)){const n=Zw(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&bA(t,lo(e),n)}else Vw(e)&&Fl(e,n=>{yh(t,n)})}function bA(t,e,n){const r=n.map(u=>u.currentWriteId),i=Xw(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];C(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const f=lt(e,c.path);s=s.updateChild(f,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Qw(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const f=[];for(let d=0;d<n.length;d++)n[d].status=2,c=c.concat(Yr(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&f.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Ul(t,gh(t.transactionQueueTree_,e)),yh(t,t.transactionQueueTree_),Or(t.eventQueue_,e,c);for(let d=0;d<f.length;d++)oo(f[d])}else{if(u==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Ze("transaction at "+l.toString()+" failed: "+u);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=u}_h(t,e)}},o)}function _h(t,e){const n=Jw(t,e),r=lo(n),i=Zw(t,n);return TA(t,i,r),r}function TA(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=lt(n,l.path);let c=!1,f;if(C(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,f=l.abortReason,i=i.concat(Yr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=yA)c=!0,f="maxretry",i=i.concat(Yr(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Xw(t,l.path,o);l.currentInputSnapshot=d;const g=e[a].update(d.val());if(g!==void 0){qw("transaction failed: Data returned ",g,l.path);let m=Oe(g);typeof g=="object"&&g!=null&&fn(g,".priority")||(m=m.updatePriority(d.getPriority()));const E=l.currentWriteId,p=Yw(t),h=iA(m,d,p);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=h,l.currentWriteId=kA(t),o.splice(o.indexOf(E),1),i=i.concat(QR(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(Yr(t.serverSyncTree_,E,!0))}else c=!0,f="nodata",i=i.concat(Yr(t.serverSyncTree_,l.currentWriteId,!0))}Or(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}Ul(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)oo(r[a]);yh(t,t.transactionQueueTree_)}function Jw(t,e){let n,r=t.transactionQueueTree_;for(n=H(e);n!==null&&Ai(r)===void 0;)r=gh(r,n),e=ee(e),n=H(e);return r}function Zw(t,e){const n=[];return e1(t,e,n),n.sort((r,i)=>r.order-i.order),n}function e1(t,e,n){const r=Ai(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Fl(e,i=>{e1(t,i,n)})}function Ul(t,e){const n=Ai(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Hw(e,n.length>0?n:void 0)}Fl(e,r=>{Ul(t,r)})}function NA(t,e){const n=lo(Jw(t,e)),r=gh(t.transactionQueueTree_,e);return oA(r,i=>{Bu(t,i)}),Bu(t,r),Gw(r,i=>{Bu(t,i)}),n}function Bu(t,e){const n=Ai(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Yr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Hw(e,void 0):n.length=s+1,Or(t.eventQueue_,lo(e),i);for(let o=0;o<r.length;o++)oo(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xA(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function RA(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ze(`Invalid query segment '${n}' in query '${t}'`)}return e}const Eg=function(t,e){const n=AA(t),r=n.namespace;n.domain==="firebase.com"&&on(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&on("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||ax();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new iw(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ie(n.pathString)}},AA=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(c,f)),c<f&&(i=xA(t.substring(c,f)));const d=RA(t.substring(Math.min(t.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const m=e.indexOf(".");r=e.substring(0,m).toLowerCase(),n=e.substring(m+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return $(this._path)?null:hw(this._path)}get ref(){return new Pi(this._repo,this._path)}get _queryIdentifier(){const e=og(this._queryParams),n=eh(e);return n==="{}"?"default":n}get _queryObject(){return og(this._queryParams)}isEqual(e){if(e=$t(e),!(e instanceof wh))return!1;const n=this._repo===e._repo,r=gw(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Wx(this._path)}}class Pi extends wh{constructor(e,n){super(e,n,new oh,!1)}get parent(){const e=mw(this._path);return e===null?null:new Pi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}qR(Pi);YR(Pi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA="FIREBASE_DATABASE_EMULATOR_HOST",vf={};let OA=!1;function DA(t,e,n,r){t.repoInfo_=new iw(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function LA(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||on("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Pe("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Eg(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[PA]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=Eg(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new li(li.OWNER):new vx(t.name,t.options,e);dA("Invalid Firebase Database URL",o),$(o.path)||on("Database URL must point to the root of a Firebase Database (not including a child path).");const f=FA(a,t,c,new gx(t.name,n));return new UA(f,t)}function MA(t,e){const n=vf[e];(!n||n[t.key]!==t)&&on(`Database ${e}(${t.repoInfo_}) has already been deleted.`),CA(t),delete n[t.key]}function FA(t,e,n,r){let i=vf[e.name];i||(i={},vf[e.name]=i);let s=i[t.toURLString()];return s&&on("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new _A(t,OA,n,r),i[t.toURLString()]=s,s}class UA{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(wA(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Pi(this._repo,Q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(MA(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&on("Cannot call "+e+" on a deleted database.")}}function t1(t=zd(),e){const n=Ar(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=tI("database");r&&zA(n,...r)}return n}function zA(t,e,n,r={}){t=$t(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&on("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&on('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new li(li.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:nI(r.mockUserToken,t.app.options.projectId);s=new li(o)}DA(i,e,n,s)}/**
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
 */function jA(t){nx(xi),zt(new Nt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return LA(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),ct($m,Wm,t),ct($m,Wm,"esm2017")}Jt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Jt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};jA();function Sg(t){const[e,n]=L.useState("");L.useEffect(()=>{t.value!=null&&n(i(t.value))},[t.value]);const r=s=>{let o=s.target.value;o=o.replace(/[^0-9.]/g,""),o!==""&&(o=i(o)),n(o);const a=parseFloat(o.replace(/[$,]/g,""));isNaN(a)||t.onChange(a)},i=s=>parseFloat(s).toLocaleString("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:2});return S("input",{className:"w-3/4 text-2xl rounded-lg p-2 text-black bg-dark-waves",type:"text",value:e,onChange:r,placeholder:t.placeholder})}function kg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?kg(Object(n),!0).forEach(function(r){ve(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):kg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function sl(t){return sl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},sl(t)}function BA(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ig(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function $A(t,e,n){return e&&Ig(t.prototype,e),n&&Ig(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function ve(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Eh(t,e){return HA(t)||GA(t,e)||n1(t,e)||qA()}function uo(t){return WA(t)||VA(t)||n1(t)||KA()}function WA(t){if(Array.isArray(t))return yf(t)}function HA(t){if(Array.isArray(t))return t}function VA(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function GA(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function n1(t,e){if(t){if(typeof t=="string")return yf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return yf(t,e)}}function yf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function KA(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qA(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Cg=function(){},Sh={},r1={},i1=null,s1={mark:Cg,measure:Cg};try{typeof window<"u"&&(Sh=window),typeof document<"u"&&(r1=document),typeof MutationObserver<"u"&&(i1=MutationObserver),typeof performance<"u"&&(s1=performance)}catch{}var YA=Sh.navigator||{},bg=YA.userAgent,Tg=bg===void 0?"":bg,$n=Sh,re=r1,Ng=i1,zo=s1;$n.document;var dn=!!re.documentElement&&!!re.head&&typeof re.addEventListener=="function"&&typeof re.createElement=="function",o1=~Tg.indexOf("MSIE")||~Tg.indexOf("Trident/"),jo,Bo,$o,Wo,Ho,an="___FONT_AWESOME___",_f=16,a1="fa",l1="svg-inline--fa",Cr="data-fa-i2svg",wf="data-fa-pseudo-element",QA="data-fa-pseudo-element-pending",kh="data-prefix",Ih="data-icon",xg="fontawesome-i2svg",XA="async",JA=["HTML","HEAD","STYLE","SCRIPT"],u1=function(){try{return!0}catch{return!1}}(),te="classic",ce="sharp",Ch=[te,ce];function co(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[te]}})}var $s=co((jo={},ve(jo,te,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ve(jo,ce,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),jo)),Ws=co((Bo={},ve(Bo,te,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ve(Bo,ce,{solid:"fass",regular:"fasr",light:"fasl"}),Bo)),Hs=co(($o={},ve($o,te,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ve($o,ce,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),$o)),ZA=co((Wo={},ve(Wo,te,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ve(Wo,ce,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Wo)),eP=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,c1="fa-layers-text",tP=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,nP=co((Ho={},ve(Ho,te,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ve(Ho,ce,{900:"fass",400:"fasr",300:"fasl"}),Ho)),f1=[1,2,3,4,5,6,7,8,9,10],rP=f1.concat([11,12,13,14,15,16,17,18,19,20]),iP=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ar={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Vs=new Set;Object.keys(Ws[te]).map(Vs.add.bind(Vs));Object.keys(Ws[ce]).map(Vs.add.bind(Vs));var sP=[].concat(Ch,uo(Vs),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ar.GROUP,ar.SWAP_OPACITY,ar.PRIMARY,ar.SECONDARY]).concat(f1.map(function(t){return"".concat(t,"x")})).concat(rP.map(function(t){return"w-".concat(t)})),ms=$n.FontAwesomeConfig||{};function oP(t){var e=re.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function aP(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(re&&typeof re.querySelector=="function"){var lP=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];lP.forEach(function(t){var e=Eh(t,2),n=e[0],r=e[1],i=aP(oP(n));i!=null&&(ms[r]=i)})}var d1={styleDefault:"solid",familyDefault:"classic",cssPrefix:a1,replacementClass:l1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ms.familyPrefix&&(ms.cssPrefix=ms.familyPrefix);var Si=x(x({},d1),ms);Si.autoReplaceSvg||(Si.observeMutations=!1);var O={};Object.keys(d1).forEach(function(t){Object.defineProperty(O,t,{enumerable:!0,set:function(n){Si[t]=n,gs.forEach(function(r){return r(O)})},get:function(){return Si[t]}})});Object.defineProperty(O,"familyPrefix",{enumerable:!0,set:function(e){Si.cssPrefix=e,gs.forEach(function(n){return n(O)})},get:function(){return Si.cssPrefix}});$n.FontAwesomeConfig=O;var gs=[];function uP(t){return gs.push(t),function(){gs.splice(gs.indexOf(t),1)}}var mn=_f,Ot={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function cP(t){if(!(!t||!dn)){var e=re.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=re.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return re.head.insertBefore(e,r),t}}var fP="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Gs(){for(var t=12,e="";t-- >0;)e+=fP[Math.random()*62|0];return e}function Oi(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function bh(t){return t.classList?Oi(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function h1(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function dP(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(h1(t[n]),'" ')},"").trim()}function zl(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Th(t){return t.size!==Ot.size||t.x!==Ot.x||t.y!==Ot.y||t.rotate!==Ot.rotate||t.flipX||t.flipY}function hP(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function pP(t){var e=t.transform,n=t.width,r=n===void 0?_f:n,i=t.height,s=i===void 0?_f:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&o1?l+="translate(".concat(e.x/mn-r/2,"em, ").concat(e.y/mn-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/mn,"em), calc(-50% + ").concat(e.y/mn,"em)) "):l+="translate(".concat(e.x/mn,"em, ").concat(e.y/mn,"em) "),l+="scale(".concat(e.size/mn*(e.flipX?-1:1),", ").concat(e.size/mn*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var mP=`:root, :host {
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
}`;function p1(){var t=a1,e=l1,n=O.cssPrefix,r=O.replacementClass,i=mP;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Rg=!1;function $u(){O.autoAddCss&&!Rg&&(cP(p1()),Rg=!0)}var gP={mixout:function(){return{dom:{css:p1,insertCss:$u}}},hooks:function(){return{beforeDOMElementCreation:function(){$u()},beforeI2svg:function(){$u()}}}},ln=$n||{};ln[an]||(ln[an]={});ln[an].styles||(ln[an].styles={});ln[an].hooks||(ln[an].hooks={});ln[an].shims||(ln[an].shims=[]);var kt=ln[an],m1=[],vP=function t(){re.removeEventListener("DOMContentLoaded",t),ol=1,m1.map(function(e){return e()})},ol=!1;dn&&(ol=(re.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(re.readyState),ol||re.addEventListener("DOMContentLoaded",vP));function yP(t){dn&&(ol?setTimeout(t,0):m1.push(t))}function fo(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?h1(t):"<".concat(e," ").concat(dP(r),">").concat(s.map(fo).join(""),"</").concat(e,">")}function Ag(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var _P=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Wu=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?_P(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function wP(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Ef(t){var e=wP(t);return e.length===1?e[0].toString(16):null}function EP(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Pg(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Sf(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Pg(e);typeof kt.hooks.addPack=="function"&&!i?kt.hooks.addPack(t,Pg(e)):kt.styles[t]=x(x({},kt.styles[t]||{}),s),t==="fas"&&Sf("fa",e)}var Vo,Go,Ko,Qr=kt.styles,SP=kt.shims,kP=(Vo={},ve(Vo,te,Object.values(Hs[te])),ve(Vo,ce,Object.values(Hs[ce])),Vo),Nh=null,g1={},v1={},y1={},_1={},w1={},IP=(Go={},ve(Go,te,Object.keys($s[te])),ve(Go,ce,Object.keys($s[ce])),Go);function CP(t){return~sP.indexOf(t)}function bP(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!CP(i)?i:null}var E1=function(){var e=function(s){return Wu(Qr,function(o,a,l){return o[l]=Wu(a,s,{}),o},{})};g1=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),v1=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),w1=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Qr||O.autoFetchSvg,r=Wu(SP,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});y1=r.names,_1=r.unicodes,Nh=jl(O.styleDefault,{family:O.familyDefault})};uP(function(t){Nh=jl(t.styleDefault,{family:O.familyDefault})});E1();function xh(t,e){return(g1[t]||{})[e]}function TP(t,e){return(v1[t]||{})[e]}function lr(t,e){return(w1[t]||{})[e]}function S1(t){return y1[t]||{prefix:null,iconName:null}}function NP(t){var e=_1[t],n=xh("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Wn(){return Nh}var Rh=function(){return{prefix:null,iconName:null,rest:[]}};function jl(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?te:n,i=$s[r][t],s=Ws[r][t]||Ws[r][i],o=t in kt.styles?t:null;return s||o||null}var Og=(Ko={},ve(Ko,te,Object.keys(Hs[te])),ve(Ko,ce,Object.keys(Hs[ce])),Ko);function Bl(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},ve(e,te,"".concat(O.cssPrefix,"-").concat(te)),ve(e,ce,"".concat(O.cssPrefix,"-").concat(ce)),e),o=null,a=te;(t.includes(s[te])||t.some(function(u){return Og[te].includes(u)}))&&(a=te),(t.includes(s[ce])||t.some(function(u){return Og[ce].includes(u)}))&&(a=ce);var l=t.reduce(function(u,c){var f=bP(O.cssPrefix,c);if(Qr[c]?(c=kP[a].includes(c)?ZA[a][c]:c,o=c,u.prefix=c):IP[a].indexOf(c)>-1?(o=c,u.prefix=jl(c,{family:a})):f?u.iconName=f:c!==O.replacementClass&&c!==s[te]&&c!==s[ce]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var d=o==="fa"?S1(u.iconName):{},g=lr(u.prefix,u.iconName);d.prefix&&(o=null),u.iconName=d.iconName||g||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!Qr.far&&Qr.fas&&!O.autoFetchSvg&&(u.prefix="fas")}return u},Rh());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===ce&&(Qr.fass||O.autoFetchSvg)&&(l.prefix="fass",l.iconName=lr(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Wn()||"fas"),l}var xP=function(){function t(){BA(this,t),this.definitions={}}return $A(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=x(x({},n.definitions[a]||{}),o[a]),Sf(a,o[a]);var l=Hs[te][a];l&&Sf(l,o[a]),E1()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[a][f]=u)}),n[a][l]=u}),n}}]),t}(),Dg=[],Xr={},ci={},RP=Object.keys(ci);function AP(t,e){var n=e.mixoutsTo;return Dg=t,Xr={},Object.keys(ci).forEach(function(r){RP.indexOf(r)===-1&&delete ci[r]}),Dg.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),sl(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Xr[o]||(Xr[o]=[]),Xr[o].push(s[o])})}r.provides&&r.provides(ci)}),n}function kf(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Xr[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function br(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Xr[t]||[];i.forEach(function(s){s.apply(null,n)})}function un(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ci[t]?ci[t].apply(null,e):void 0}function If(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Wn();if(e)return e=lr(n,e)||e,Ag(k1.definitions,n,e)||Ag(kt.styles,n,e)}var k1=new xP,PP=function(){O.autoReplaceSvg=!1,O.observeMutations=!1,br("noAuto")},OP={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return dn?(br("beforeI2svg",e),un("pseudoElements2svg",e),un("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;O.autoReplaceSvg===!1&&(O.autoReplaceSvg=!0),O.observeMutations=!0,yP(function(){LP({autoReplaceSvgRoot:n}),br("watch",e)})}},DP={icon:function(e){if(e===null)return null;if(sl(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:lr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=jl(e[0]);return{prefix:r,iconName:lr(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(O.cssPrefix,"-"))>-1||e.match(eP))){var i=Bl(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Wn(),iconName:lr(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Wn();return{prefix:s,iconName:lr(s,e)||e}}}},rt={noAuto:PP,config:O,dom:OP,parse:DP,library:k1,findIconDefinition:If,toHtml:fo},LP=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?re:n;(Object.keys(kt.styles).length>0||O.autoFetchSvg)&&dn&&O.autoReplaceSvg&&rt.dom.i2svg({node:r})};function $l(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return fo(r)})}}),Object.defineProperty(t,"node",{get:function(){if(dn){var r=re.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function MP(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Th(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=zl(x(x({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function FP(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(O.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:x(x({},i),{},{id:o}),children:r}]}]}function Ah(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,f=t.extra,d=t.watchable,g=d===void 0?!1:d,m=r.found?r:n,y=m.width,E=m.height,p=i==="fak",h=[O.replacementClass,s?"".concat(O.cssPrefix,"-").concat(s):""].filter(function(T){return f.classes.indexOf(T)===-1}).filter(function(T){return T!==""||!!T}).concat(f.classes).join(" "),v={children:[],attributes:x(x({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:h,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(E)})},_=p&&!~f.classes.indexOf("fa-fw")?{width:"".concat(y/E*16*.0625,"em")}:{};g&&(v.attributes[Cr]=""),l&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(c||Gs())},children:[l]}),delete v.attributes.title);var I=x(x({},v),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:x(x({},_),f.styles)}),b=r.found&&n.found?un("generateAbstractMask",I)||{children:[],attributes:{}}:un("generateAbstractIcon",I)||{children:[],attributes:{}},N=b.children,P=b.attributes;return I.children=N,I.attributes=P,a?FP(I):MP(I)}function Lg(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=x(x(x({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[Cr]="");var c=x({},o.styles);Th(i)&&(c.transform=pP({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=zl(c);f.length>0&&(u.style=f);var d=[];return d.push({tag:"span",attributes:u,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function UP(t){var e=t.content,n=t.title,r=t.extra,i=x(x(x({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=zl(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Hu=kt.styles;function Cf(t){var e=t[0],n=t[1],r=t.slice(4),i=Eh(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(O.cssPrefix,"-").concat(ar.GROUP)},children:[{tag:"path",attributes:{class:"".concat(O.cssPrefix,"-").concat(ar.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(O.cssPrefix,"-").concat(ar.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var zP={found:!1,width:512,height:512};function jP(t,e){!u1&&!O.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function bf(t,e){var n=e;return e==="fa"&&O.styleDefault!==null&&(e=Wn()),new Promise(function(r,i){if(un("missingIconAbstract"),n==="fa"){var s=S1(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Hu[e]&&Hu[e][t]){var o=Hu[e][t];return r(Cf(o))}jP(t,e),r(x(x({},zP),{},{icon:O.showMissingIcons&&t?un("missingIconAbstract")||{}:{}}))})}var Mg=function(){},Tf=O.measurePerformance&&zo&&zo.mark&&zo.measure?zo:{mark:Mg,measure:Mg},es='FA "6.4.2"',BP=function(e){return Tf.mark("".concat(es," ").concat(e," begins")),function(){return I1(e)}},I1=function(e){Tf.mark("".concat(es," ").concat(e," ends")),Tf.measure("".concat(es," ").concat(e),"".concat(es," ").concat(e," begins"),"".concat(es," ").concat(e," ends"))},Ph={begin:BP,end:I1},ca=function(){};function Fg(t){var e=t.getAttribute?t.getAttribute(Cr):null;return typeof e=="string"}function $P(t){var e=t.getAttribute?t.getAttribute(kh):null,n=t.getAttribute?t.getAttribute(Ih):null;return e&&n}function WP(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(O.replacementClass)}function HP(){if(O.autoReplaceSvg===!0)return fa.replace;var t=fa[O.autoReplaceSvg];return t||fa.replace}function VP(t){return re.createElementNS("http://www.w3.org/2000/svg",t)}function GP(t){return re.createElement(t)}function C1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?VP:GP:n;if(typeof t=="string")return re.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(C1(o,{ceFn:r}))}),i}function KP(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var fa={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(C1(i),n)}),n.getAttribute(Cr)===null&&O.keepOriginalSource){var r=re.createComment(KP(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~bh(n).indexOf(O.replacementClass))return fa.replace(e);var i=new RegExp("".concat(O.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===O.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return fo(a)}).join(`
`);n.setAttribute(Cr,""),n.innerHTML=o}};function Ug(t){t()}function b1(t,e){var n=typeof e=="function"?e:ca;if(t.length===0)n();else{var r=Ug;O.mutateApproach===XA&&(r=$n.requestAnimationFrame||Ug),r(function(){var i=HP(),s=Ph.begin("mutate");t.map(i),s(),n()})}}var Oh=!1;function T1(){Oh=!0}function Nf(){Oh=!1}var al=null;function zg(t){if(Ng&&O.observeMutations){var e=t.treeCallback,n=e===void 0?ca:e,r=t.nodeCallback,i=r===void 0?ca:r,s=t.pseudoElementsCallback,o=s===void 0?ca:s,a=t.observeMutationsRoot,l=a===void 0?re:a;al=new Ng(function(u){if(!Oh){var c=Wn();Oi(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Fg(f.addedNodes[0])&&(O.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&O.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Fg(f.target)&&~iP.indexOf(f.attributeName))if(f.attributeName==="class"&&$P(f.target)){var d=Bl(bh(f.target)),g=d.prefix,m=d.iconName;f.target.setAttribute(kh,g||c),m&&f.target.setAttribute(Ih,m)}else WP(f.target)&&i(f.target)})}}),dn&&al.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function qP(){al&&al.disconnect()}function YP(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function QP(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Bl(bh(t));return i.prefix||(i.prefix=Wn()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=TP(i.prefix,t.innerText)||xh(i.prefix,Ef(t.innerText))),!i.iconName&&O.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function XP(t){var e=Oi(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return O.autoA11y&&(n?e["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(r||Gs()):(e["aria-hidden"]="true",e.focusable="false")),e}function JP(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ot,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function jg(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=QP(t),r=n.iconName,i=n.prefix,s=n.rest,o=XP(t),a=kf("parseNodeAttributes",{},t),l=e.styleParser?YP(t):[];return x({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Ot,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var ZP=kt.styles;function N1(t){var e=O.autoReplaceSvg==="nest"?jg(t,{styleParser:!1}):jg(t);return~e.extra.classes.indexOf(c1)?un("generateLayersText",t,e):un("generateSvgReplacementMutation",t,e)}var Hn=new Set;Ch.map(function(t){Hn.add("fa-".concat(t))});Object.keys($s[te]).map(Hn.add.bind(Hn));Object.keys($s[ce]).map(Hn.add.bind(Hn));Hn=uo(Hn);function Bg(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!dn)return Promise.resolve();var n=re.documentElement.classList,r=function(f){return n.add("".concat(xg,"-").concat(f))},i=function(f){return n.remove("".concat(xg,"-").concat(f))},s=O.autoFetchSvg?Hn:Ch.map(function(c){return"fa-".concat(c)}).concat(Object.keys(ZP));s.includes("fa")||s.push("fa");var o=[".".concat(c1,":not([").concat(Cr,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(Cr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Oi(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Ph.begin("onTree"),u=a.reduce(function(c,f){try{var d=N1(f);d&&c.push(d)}catch(g){u1||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(d){b1(d,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(d){l(),f(d)})})}function eO(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;N1(t).then(function(n){n&&b1([n],e)})}function tO(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:If(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:If(i||{})),t(r,x(x({},n),{},{mask:i}))}}var nO=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Ot:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,f=n.title,d=f===void 0?null:f,g=n.titleId,m=g===void 0?null:g,y=n.classes,E=y===void 0?[]:y,p=n.attributes,h=p===void 0?{}:p,v=n.styles,_=v===void 0?{}:v;if(e){var I=e.prefix,b=e.iconName,N=e.icon;return $l(x({type:"icon"},e),function(){return br("beforeDOMElementCreation",{iconDefinition:e,params:n}),O.autoA11y&&(d?h["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(m||Gs()):(h["aria-hidden"]="true",h.focusable="false")),Ah({icons:{main:Cf(N),mask:l?Cf(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:I,iconName:b,transform:x(x({},Ot),i),symbol:o,title:d,maskId:c,titleId:m,extra:{attributes:h,styles:_,classes:E}})})}},rO={mixout:function(){return{icon:tO(nO)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Bg,n.nodeCallback=eO,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?re:r,s=n.callback,o=s===void 0?function(){}:s;return Bg(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,d=r.extra;return new Promise(function(g,m){Promise.all([bf(i,a),c.iconName?bf(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var E=Eh(y,2),p=E[0],h=E[1];g([n,Ah({icons:{main:p,mask:h},prefix:a,iconName:i,transform:l,symbol:u,maskId:f,title:s,titleId:o,extra:d,watchable:!0})])}).catch(m)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=zl(a);l.length>0&&(i.style=l);var u;return Th(o)&&(u=un("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},iO={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return $l({type:"layer"},function(){br("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(O.cssPrefix,"-layers")].concat(uo(s)).join(" ")},children:o}]})}}}},sO={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return $l({type:"counter",content:n},function(){return br("beforeDOMElementCreation",{content:n,params:r}),UP({content:n.toString(),title:s,extra:{attributes:u,styles:f,classes:["".concat(O.cssPrefix,"-layers-counter")].concat(uo(a))}})})}}}},oO={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Ot:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,d=r.styles,g=d===void 0?{}:d;return $l({type:"text",content:n},function(){return br("beforeDOMElementCreation",{content:n,params:r}),Lg({content:n,transform:x(x({},Ot),s),title:a,extra:{attributes:f,styles:g,classes:["".concat(O.cssPrefix,"-layers-text")].concat(uo(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(o1){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return O.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Lg({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},aO=new RegExp('"',"ug"),$g=[1105920,1112319];function lO(t){var e=t.replace(aO,""),n=EP(e,0),r=n>=$g[0]&&n<=$g[1],i=e.length===2?e[0]===e[1]:!1;return{value:Ef(i?e[0]:e),isSecondary:r||i}}function Wg(t,e){var n="".concat(QA).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Oi(t.children),o=s.filter(function(N){return N.getAttribute(wf)===e})[0],a=$n.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(tP),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var f=a.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?ce:te,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ws[d][l[2].toLowerCase()]:nP[d][u],m=lO(f),y=m.value,E=m.isSecondary,p=l[0].startsWith("FontAwesome"),h=xh(g,y),v=h;if(p){var _=NP(y);_.iconName&&_.prefix&&(h=_.iconName,g=_.prefix)}if(h&&!E&&(!o||o.getAttribute(kh)!==g||o.getAttribute(Ih)!==v)){t.setAttribute(n,v),o&&t.removeChild(o);var I=JP(),b=I.extra;b.attributes[wf]=e,bf(h,g).then(function(N){var P=Ah(x(x({},I),{},{icons:{main:N,mask:Rh()},prefix:g,iconName:v,extra:b,watchable:!0})),T=re.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(T,t.firstChild):t.appendChild(T),T.outerHTML=P.map(function(D){return fo(D)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function uO(t){return Promise.all([Wg(t,"::before"),Wg(t,"::after")])}function cO(t){return t.parentNode!==document.head&&!~JA.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(wf)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Hg(t){if(dn)return new Promise(function(e,n){var r=Oi(t.querySelectorAll("*")).filter(cO).map(uO),i=Ph.begin("searchPseudoElements");T1(),Promise.all(r).then(function(){i(),Nf(),e()}).catch(function(){i(),Nf(),n()})})}var fO={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Hg,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?re:r;O.searchPseudoElements&&Hg(i)}}},Vg=!1,dO={mixout:function(){return{dom:{unwatch:function(){T1(),Vg=!0}}}},hooks:function(){return{bootstrap:function(){zg(kf("mutationObserverCallbacks",{}))},noAuto:function(){qP()},watch:function(n){var r=n.observeMutationsRoot;Vg?Nf():zg(kf("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Gg=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},hO={mixout:function(){return{parse:{transform:function(n){return Gg(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Gg(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},d={transform:"translate(".concat(o/2*-1," -256)")},g={outer:a,inner:f,path:d};return{tag:"g",attributes:x({},g.outer),children:[{tag:"g",attributes:x({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:x(x({},r.icon.attributes),g.path)}]}]}}}},Vu={x:0,y:0,width:"100%",height:"100%"};function Kg(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function pO(t){return t.tag==="g"?t.children:[t]}var mO={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Bl(i.split(" ").map(function(o){return o.trim()})):Rh();return s.prefix||(s.prefix=Wn()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,f=o.width,d=o.icon,g=hP({transform:l,containerWidth:f,iconWidth:u}),m={tag:"rect",attributes:x(x({},Vu),{},{fill:"white"})},y=c.children?{children:c.children.map(Kg)}:{},E={tag:"g",attributes:x({},g.inner),children:[Kg(x({tag:c.tag,attributes:x(x({},c.attributes),g.path)},y))]},p={tag:"g",attributes:x({},g.outer),children:[E]},h="mask-".concat(a||Gs()),v="clip-".concat(a||Gs()),_={tag:"mask",attributes:x(x({},Vu),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,p]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:pO(d)},_]};return r.push(I,{tag:"rect",attributes:x({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(h,")")},Vu)}),{children:r,attributes:i}}}},gO={provides:function(e){var n=!1;$n.matchMedia&&(n=$n.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:x(x({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=x(x({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:x(x({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:x(x({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:x(x({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:x(x({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:x(x({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:x(x({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:x(x({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},vO={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},yO=[gP,rO,iO,sO,oO,fO,dO,hO,mO,gO,vO];AP(yO,{mixoutsTo:rt});rt.noAuto;rt.config;rt.library;rt.dom;var xf=rt.parse;rt.findIconDefinition;rt.toHtml;var _O=rt.icon;rt.layer;rt.text;rt.counter;var z={},wO={get exports(){return z},set exports(t){z=t}},EO="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",SO=EO,kO=SO;function x1(){}function R1(){}R1.resetWarningCache=x1;var IO=function(){function t(r,i,s,o,a,l){if(l!==kO){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:R1,resetWarningCache:x1};return n.PropTypes=n,n};wO.exports=IO();function qg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function bn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?qg(Object(n),!0).forEach(function(r){Jr(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):qg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ll(t){return ll=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ll(t)}function Jr(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function CO(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function bO(t,e){if(t==null)return{};var n=CO(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Rf(t){return TO(t)||NO(t)||xO(t)||RO()}function TO(t){if(Array.isArray(t))return Af(t)}function NO(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function xO(t,e){if(t){if(typeof t=="string")return Af(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Af(t,e)}}function Af(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function RO(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function AO(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,f=t.pulse,d=t.fixedWidth,g=t.inverse,m=t.border,y=t.listItem,E=t.flip,p=t.size,h=t.rotation,v=t.pull,_=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":d,"fa-inverse":g,"fa-border":m,"fa-li":y,"fa-flip":E===!0,"fa-flip-horizontal":E==="horizontal"||E==="both","fa-flip-vertical":E==="vertical"||E==="both"},Jr(e,"fa-".concat(p),typeof p<"u"&&p!==null),Jr(e,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),Jr(e,"fa-pull-".concat(v),typeof v<"u"&&v!==null),Jr(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(_).map(function(I){return _[I]?I:null}).filter(function(I){return I})}function PO(t){return t=t-0,t===t}function A1(t){return PO(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var OO=["style"];function DO(t){return t.charAt(0).toUpperCase()+t.slice(1)}function LO(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=A1(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[DO(i)]=s:e[i]=s,e},{})}function P1(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return P1(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=LO(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[A1(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=bO(n,OO);return i.attrs.style=bn(bn({},i.attrs.style),o),t.apply(void 0,[e.tag,bn(bn({},i.attrs),a)].concat(Rf(r)))}var O1=!1;try{O1=!0}catch{}function MO(){if(!O1&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Yg(t){if(t&&ll(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(xf.icon)return xf.icon(t);if(t===null)return null;if(t&&ll(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Gu(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Jr({},t,e):{}}var Tr=fl.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=Yg(n),c=Gu("classes",[].concat(Rf(AO(t)),Rf(s.split(" ")))),f=Gu("transform",typeof t.transform=="string"?xf.transform(t.transform):t.transform),d=Gu("mask",Yg(r)),g=_O(u,bn(bn(bn(bn({},c),f),d),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!g)return MO("Could not find icon",u),null;var m=g.abstract,y={ref:e};return Object.keys(t).forEach(function(E){Tr.defaultProps.hasOwnProperty(E)||(y[E]=t[E])}),FO(m[0],y)});Tr.displayName="FontAwesomeIcon";Tr.propTypes={beat:z.bool,border:z.bool,beatFade:z.bool,bounce:z.bool,className:z.string,fade:z.bool,flash:z.bool,mask:z.oneOfType([z.object,z.array,z.string]),maskId:z.string,fixedWidth:z.bool,inverse:z.bool,flip:z.oneOf([!0,!1,"horizontal","vertical","both"]),icon:z.oneOfType([z.object,z.array,z.string]),listItem:z.bool,pull:z.oneOf(["right","left"]),pulse:z.bool,rotation:z.oneOf([0,90,180,270]),shake:z.bool,size:z.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:z.bool,spinPulse:z.bool,spinReverse:z.bool,symbol:z.oneOfType([z.bool,z.string]),title:z.string,titleId:z.string,transform:z.oneOfType([z.string,z.object]),swapOpacity:z.bool};Tr.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var FO=P1.bind(null,fl.createElement),D1={prefix:"far",iconName:"star",icon:[576,512,[11088,61446],"f005","M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"]},UO={prefix:"far",iconName:"circle-question",icon:[512,512,[62108,"question-circle"],"f059","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},zO=UO,jO={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]};const BO=({properties:t})=>{L.useEffect(()=>{window.scrollTo(0,document.body.clientHeight/2)},[]);const[e,n]=L.useState(0),r=()=>{e<t.length-1?n(g=>g+1):n(0)},i=()=>{e>0?n(g=>g-1):n(t.length-1)};if(!t||t.length===0)return S("p",{children:"No properties available"});const s=t[e];if(!s){alert("Problem retrieving property data");let g=e+1;n(g),console.log(e)}const{address:o={},details:a={},primary_photo:l,rent:u,sold:c}=s,[f,d]=L.useState(!1);return M("div",{className:"carousel-container mb-24",children:[S("button",{onClick:i,className:"text-3xl hover:bg-indigo-500 w-1/2",children:"Prev"}),M("button",{onClick:r,className:"text-3xl hover:bg-indigo-500 w-1/2",children:["Next (",e+1,"/",t.length,")"]}),M("div",{className:"carousel-card",children:[M("div",{className:"flex content-center justify-center",children:[M("div",{className:"flex content-center justify-center tooltip",children:[S(Tr,{icon:zO,className:"opacity-80 mr-4 w-5 h-5 ml-2"}),S("span",{className:"tooltip-text",children:"Add to favorites"})]}),S("a",{onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:S(Tr,{className:"w-12 h-12 cursor-pointer hover:scale-125 duration-150 transform text-yellow-500",icon:f?jO:D1})})]}),S("h2",{className:"font-bold",children:[o.line,o.city,o.state,o.zipcode].filter(Boolean).join(", ")}),s.list_price&&M("p",{className:"text-emerald-300 font-semibold",children:["Price: ",new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(Math.round(s.list_price))]}),M("p",{className:"font-bold",children:[a.beds&&`${a.beds} bd`,a.baths&&` | ${a.baths} ba`,a.sqft&&` | ${a.sqft} sqft`,a.lotSqft&&` | ${Number(a.lotSqft/43560).toFixed(2)} acres`]}),a.yearBuilt&&M("p",{className:"font-semibold",children:["Year Built: ",a.yearBuilt]})]}),S("div",{className:"carousel-card flex justify-center items-center",children:l&&S("img",{src:l.href,alt:"Primary Property",className:"object-cover h-80 w-3/4 rounded-lg shadow-xl"})}),WO(c,s.list_price),$O(u,s.list_price),M("h1",{className:"text-xl text-white text-opacity-80 m-4",children:["Estimated Rent: ",new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(Math.round(u))]}),M("h1",{className:"text-xl text-white text-opacity-80 m-4",children:[o.city,"'s Median Home Value  ",new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(Math.round(c))]})]})},$O=(t,e)=>{const r=t*12/e*100;let i=`${r.toFixed(2)}%`,s="";return r<3?s="text-red-500":r>=3&&r<5?s="text-orange-500":r>=5&&r<=7?s="text-yellow-500":r>7&&(s="text-green-500"),M("p",{className:"text-3xl p-4 m-6 shadow-2xl rounded-xl bg-bland text-white",children:["Rent Yield (ROI): ",S("span",{className:`font-bold ${s}`,children:i})]})},WO=(t,e)=>{const r=t*.75,i=t*(1+.25);let s="market value",o="text-orange-500";return e<r?(s="undervalued",o="text-green-500"):e>i&&(s="overvalued",o="text-red-500"),M("p",{className:"text-3xl p-4 m-6 shadow-2xl rounded-xl bg-indigo-900 text-white",children:["This property is ",S("span",{className:`font-bold ${o}`,children:s})]})},HO=t=>{try{if(!t||Object.keys(t).length===0)throw new Error("No data available to parse.");const{location:{address:e={}}={},description:n={},list_price:r={},primary_photo:i={},rent:s={},sold:o={}}=t;if(!e||!n||!r)throw new Error("Missing critical property information.");const{line:a,city:l,state_code:u,postal_code:c}=e,{beds:f,baths:d,sqft:g,year_built:m,lot_sqft:y}=n;if(!a||!l||!u||!c)throw new Error("Incomplete address information.");if(f===void 0||d===void 0||g===void 0||m===void 0)throw new Error("Incomplete property specifications.");const E={address:{line:a,city:l,state:u,zipcode:c},details:{beds:f,baths:d,sqft:g,yearBuilt:m,lotSqft:y}};return E.list_price=r,E.primary_photo=i,E.rent=s,E.sold=o,E}catch(e){return console.error("Error parsing property data: ",e),null}},VO=t=>{try{if(!t||Object.keys(t).length===0)throw new Error("No data available to parse.");const{list_price_min:e=0,list_price_max:n=0,list_price:r=0}=t;return{list_price:r,list_price_min:e,list_price_max:n}}catch(e){return console.error("Error parsing rental data: ",e),null}},GO=t=>{try{if(!t||Object.keys(t).length===0)throw new Error("No data available to parse.");const{list_price_min:e=0,list_price_max:n=0,list_price:r=0}=t;return{list_price:r,list_price_min:e,list_price_max:n}}catch(e){return console.error("Error parsing rental data: ",e),null}};function L1(t,e){return function(){return t.apply(e,arguments)}}const{toString:KO}=Object.prototype,{getPrototypeOf:Dh}=Object,Wl=(t=>e=>{const n=KO.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Wt=t=>(t=t.toLowerCase(),e=>Wl(e)===t),Hl=t=>e=>typeof e===t,{isArray:Di}=Array,Ks=Hl("undefined");function qO(t){return t!==null&&!Ks(t)&&t.constructor!==null&&!Ks(t.constructor)&&ft(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const M1=Wt("ArrayBuffer");function YO(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&M1(t.buffer),e}const QO=Hl("string"),ft=Hl("function"),F1=Hl("number"),Vl=t=>t!==null&&typeof t=="object",XO=t=>t===!0||t===!1,da=t=>{if(Wl(t)!=="object")return!1;const e=Dh(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},JO=Wt("Date"),ZO=Wt("File"),e2=Wt("Blob"),t2=Wt("FileList"),n2=t=>Vl(t)&&ft(t.pipe),r2=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||ft(t.append)&&((e=Wl(t))==="formdata"||e==="object"&&ft(t.toString)&&t.toString()==="[object FormData]"))},i2=Wt("URLSearchParams"),s2=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ho(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),Di(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(r=0;r<o;r++)a=s[r],e.call(null,t[a],a,t)}}function U1(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const z1=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),j1=t=>!Ks(t)&&t!==z1;function Pf(){const{caseless:t}=j1(this)&&this||{},e={},n=(r,i)=>{const s=t&&U1(e,i)||i;da(e[s])&&da(r)?e[s]=Pf(e[s],r):da(r)?e[s]=Pf({},r):Di(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&ho(arguments[r],n);return e}const o2=(t,e,n,{allOwnKeys:r}={})=>(ho(e,(i,s)=>{n&&ft(i)?t[s]=L1(i,n):t[s]=i},{allOwnKeys:r}),t),a2=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),l2=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},u2=(t,e,n,r)=>{let i,s,o;const a={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Dh(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},c2=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},f2=t=>{if(!t)return null;if(Di(t))return t;let e=t.length;if(!F1(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},d2=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Dh(Uint8Array)),h2=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},p2=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},m2=Wt("HTMLFormElement"),g2=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Qg=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),v2=Wt("RegExp"),B1=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};ho(n,(i,s)=>{let o;(o=e(i,s,t))!==!1&&(r[s]=o||i)}),Object.defineProperties(t,r)},y2=t=>{B1(t,(e,n)=>{if(ft(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(ft(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},_2=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return Di(t)?r(t):r(String(t).split(e)),n},w2=()=>{},E2=(t,e)=>(t=+t,Number.isFinite(t)?t:e),Ku="abcdefghijklmnopqrstuvwxyz",Xg="0123456789",$1={DIGIT:Xg,ALPHA:Ku,ALPHA_DIGIT:Ku+Ku.toUpperCase()+Xg},S2=(t=16,e=$1.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function k2(t){return!!(t&&ft(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const I2=t=>{const e=new Array(10),n=(r,i)=>{if(Vl(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=Di(r)?[]:{};return ho(r,(o,a)=>{const l=n(o,i+1);!Ks(l)&&(s[a]=l)}),e[i]=void 0,s}}return r};return n(t,0)},C2=Wt("AsyncFunction"),b2=t=>t&&(Vl(t)||ft(t))&&ft(t.then)&&ft(t.catch),w={isArray:Di,isArrayBuffer:M1,isBuffer:qO,isFormData:r2,isArrayBufferView:YO,isString:QO,isNumber:F1,isBoolean:XO,isObject:Vl,isPlainObject:da,isUndefined:Ks,isDate:JO,isFile:ZO,isBlob:e2,isRegExp:v2,isFunction:ft,isStream:n2,isURLSearchParams:i2,isTypedArray:d2,isFileList:t2,forEach:ho,merge:Pf,extend:o2,trim:s2,stripBOM:a2,inherits:l2,toFlatObject:u2,kindOf:Wl,kindOfTest:Wt,endsWith:c2,toArray:f2,forEachEntry:h2,matchAll:p2,isHTMLForm:m2,hasOwnProperty:Qg,hasOwnProp:Qg,reduceDescriptors:B1,freezeMethods:y2,toObjectSet:_2,toCamelCase:g2,noop:w2,toFiniteNumber:E2,findKey:U1,global:z1,isContextDefined:j1,ALPHABET:$1,generateString:S2,isSpecCompliantForm:k2,toJSONObject:I2,isAsyncFn:C2,isThenable:b2};function W(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}w.inherits(W,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:w.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const W1=W.prototype,H1={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{H1[t]={value:t}});Object.defineProperties(W,H1);Object.defineProperty(W1,"isAxiosError",{value:!0});W.from=(t,e,n,r,i,s)=>{const o=Object.create(W1);return w.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),W.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const T2=null;function Of(t){return w.isPlainObject(t)||w.isArray(t)}function V1(t){return w.endsWith(t,"[]")?t.slice(0,-2):t}function Jg(t,e,n){return t?t.concat(e).map(function(i,s){return i=V1(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function N2(t){return w.isArray(t)&&!t.some(Of)}const x2=w.toFlatObject(w,{},null,function(e){return/^is[A-Z]/.test(e)});function Gl(t,e,n){if(!w.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=w.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,E){return!w.isUndefined(E[y])});const r=n.metaTokens,i=n.visitor||c,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&w.isSpecCompliantForm(e);if(!w.isFunction(i))throw new TypeError("visitor must be a function");function u(m){if(m===null)return"";if(w.isDate(m))return m.toISOString();if(!l&&w.isBlob(m))throw new W("Blob is not supported. Use a Buffer instead.");return w.isArrayBuffer(m)||w.isTypedArray(m)?l&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function c(m,y,E){let p=m;if(m&&!E&&typeof m=="object"){if(w.endsWith(y,"{}"))y=r?y:y.slice(0,-2),m=JSON.stringify(m);else if(w.isArray(m)&&N2(m)||(w.isFileList(m)||w.endsWith(y,"[]"))&&(p=w.toArray(m)))return y=V1(y),p.forEach(function(v,_){!(w.isUndefined(v)||v===null)&&e.append(o===!0?Jg([y],_,s):o===null?y:y+"[]",u(v))}),!1}return Of(m)?!0:(e.append(Jg(E,y,s),u(m)),!1)}const f=[],d=Object.assign(x2,{defaultVisitor:c,convertValue:u,isVisitable:Of});function g(m,y){if(!w.isUndefined(m)){if(f.indexOf(m)!==-1)throw Error("Circular reference detected in "+y.join("."));f.push(m),w.forEach(m,function(p,h){(!(w.isUndefined(p)||p===null)&&i.call(e,p,w.isString(h)?h.trim():h,y,d))===!0&&g(p,y?y.concat(h):[h])}),f.pop()}}if(!w.isObject(t))throw new TypeError("data must be an object");return g(t),e}function Zg(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Lh(t,e){this._pairs=[],t&&Gl(t,this,e)}const G1=Lh.prototype;G1.append=function(e,n){this._pairs.push([e,n])};G1.toString=function(e){const n=e?function(r){return e.call(this,r,Zg)}:Zg;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function R2(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function K1(t,e,n){if(!e)return t;const r=n&&n.encode||R2,i=n&&n.serialize;let s;if(i?s=i(e,n):s=w.isURLSearchParams(e)?e.toString():new Lh(e,n).toString(r),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class A2{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){w.forEach(this.handlers,function(r){r!==null&&e(r)})}}const ev=A2,q1={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},P2=typeof URLSearchParams<"u"?URLSearchParams:Lh,O2=typeof FormData<"u"?FormData:null,D2=typeof Blob<"u"?Blob:null,L2=(()=>{let t;return typeof navigator<"u"&&((t=navigator.product)==="ReactNative"||t==="NativeScript"||t==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),M2=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Dt={isBrowser:!0,classes:{URLSearchParams:P2,FormData:O2,Blob:D2},isStandardBrowserEnv:L2,isStandardBrowserWebWorkerEnv:M2,protocols:["http","https","file","blob","url","data"]};function F2(t,e){return Gl(t,new Dt.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return Dt.isNode&&w.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function U2(t){return w.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function z2(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function Y1(t){function e(n,r,i,s){let o=n[s++];const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&w.isArray(i)?i.length:o,l?(w.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!a):((!i[o]||!w.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&w.isArray(i[o])&&(i[o]=z2(i[o])),!a)}if(w.isFormData(t)&&w.isFunction(t.entries)){const n={};return w.forEachEntry(t,(r,i)=>{e(U2(r),i,n,0)}),n}return null}function j2(t,e,n){if(w.isString(t))try{return(e||JSON.parse)(t),w.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Mh={transitional:q1,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=w.isObject(e);if(s&&w.isHTMLForm(e)&&(e=new FormData(e)),w.isFormData(e))return i&&i?JSON.stringify(Y1(e)):e;if(w.isArrayBuffer(e)||w.isBuffer(e)||w.isStream(e)||w.isFile(e)||w.isBlob(e))return e;if(w.isArrayBufferView(e))return e.buffer;if(w.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return F2(e,this.formSerializer).toString();if((a=w.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Gl(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),j2(e)):e}],transformResponse:[function(e){const n=this.transitional||Mh.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(e&&w.isString(e)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?W.from(a,W.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Dt.classes.FormData,Blob:Dt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};w.forEach(["delete","get","head","post","put","patch"],t=>{Mh.headers[t]={}});const Fh=Mh,B2=w.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),$2=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||e[n]&&B2[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},tv=Symbol("internals");function Yi(t){return t&&String(t).trim().toLowerCase()}function ha(t){return t===!1||t==null?t:w.isArray(t)?t.map(ha):String(t)}function W2(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const H2=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function qu(t,e,n,r,i){if(w.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!w.isString(e)){if(w.isString(r))return e.indexOf(r)!==-1;if(w.isRegExp(r))return r.test(e)}}function V2(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function G2(t,e){const n=w.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}class Kl{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(a,l,u){const c=Yi(l);if(!c)throw new Error("header name must be a non-empty string");const f=w.findKey(i,c);(!f||i[f]===void 0||u===!0||u===void 0&&i[f]!==!1)&&(i[f||l]=ha(a))}const o=(a,l)=>w.forEach(a,(u,c)=>s(u,c,l));return w.isPlainObject(e)||e instanceof this.constructor?o(e,n):w.isString(e)&&(e=e.trim())&&!H2(e)?o($2(e),n):e!=null&&s(n,e,r),this}get(e,n){if(e=Yi(e),e){const r=w.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return W2(i);if(w.isFunction(n))return n.call(this,i,r);if(w.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Yi(e),e){const r=w.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||qu(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(o){if(o=Yi(o),o){const a=w.findKey(r,o);a&&(!n||qu(r,r[a],a,n))&&(delete r[a],i=!0)}}return w.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||qu(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return w.forEach(this,(i,s)=>{const o=w.findKey(r,s);if(o){n[o]=ha(i),delete n[s];return}const a=e?V2(s):String(s).trim();a!==s&&delete n[s],n[a]=ha(i),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return w.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&w.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[tv]=this[tv]={accessors:{}}).accessors,i=this.prototype;function s(o){const a=Yi(o);r[a]||(G2(i,o),r[a]=!0)}return w.isArray(e)?e.forEach(s):s(e),this}}Kl.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);w.reduceDescriptors(Kl.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});w.freezeMethods(Kl);const Zt=Kl;function Yu(t,e){const n=this||Fh,r=e||n,i=Zt.from(r.headers);let s=r.data;return w.forEach(t,function(a){s=a.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function Q1(t){return!!(t&&t.__CANCEL__)}function po(t,e,n){W.call(this,t??"canceled",W.ERR_CANCELED,e,n),this.name="CanceledError"}w.inherits(po,W,{__CANCEL__:!0});function K2(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new W("Request failed with status code "+n.status,[W.ERR_BAD_REQUEST,W.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const q2=Dt.isStandardBrowserEnv?function(){return{write:function(n,r,i,s,o,a){const l=[];l.push(n+"="+encodeURIComponent(r)),w.isNumber(i)&&l.push("expires="+new Date(i).toGMTString()),w.isString(s)&&l.push("path="+s),w.isString(o)&&l.push("domain="+o),a===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Y2(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Q2(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function X1(t,e){return t&&!Y2(e)?Q2(t,e):e}const X2=Dt.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const a=w.isString(o)?i(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function J2(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Z2(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const u=Date.now(),c=r[s];o||(o=u),n[i]=l,r[i]=u;let f=s,d=0;for(;f!==i;)d+=n[f++],f=f%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),u-o<e)return;const g=c&&u-c;return g?Math.round(d*1e3/g):void 0}}function nv(t,e){let n=0;const r=Z2(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,l=r(a),u=s<=o;n=s;const c={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&u?(o-s)/l:void 0,event:i};c[e?"download":"upload"]=!0,t(c)}}const eD=typeof XMLHttpRequest<"u",tD=eD&&function(t){return new Promise(function(n,r){let i=t.data;const s=Zt.from(t.headers).normalize(),o=t.responseType;let a;function l(){t.cancelToken&&t.cancelToken.unsubscribe(a),t.signal&&t.signal.removeEventListener("abort",a)}let u;w.isFormData(i)&&(Dt.isStandardBrowserEnv||Dt.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.getContentType(/^\s*multipart\/form-data/)?w.isString(u=s.getContentType())&&s.setContentType(u.replace(/^\s*(multipart\/form-data);+/,"$1")):s.setContentType("multipart/form-data"));let c=new XMLHttpRequest;if(t.auth){const m=t.auth.username||"",y=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.set("Authorization","Basic "+btoa(m+":"+y))}const f=X1(t.baseURL,t.url);c.open(t.method.toUpperCase(),K1(f,t.params,t.paramsSerializer),!0),c.timeout=t.timeout;function d(){if(!c)return;const m=Zt.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),E={data:!o||o==="text"||o==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:m,config:t,request:c};K2(function(h){n(h),l()},function(h){r(h),l()},E),c=null}if("onloadend"in c?c.onloadend=d:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(d)},c.onabort=function(){c&&(r(new W("Request aborted",W.ECONNABORTED,t,c)),c=null)},c.onerror=function(){r(new W("Network Error",W.ERR_NETWORK,t,c)),c=null},c.ontimeout=function(){let y=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const E=t.transitional||q1;t.timeoutErrorMessage&&(y=t.timeoutErrorMessage),r(new W(y,E.clarifyTimeoutError?W.ETIMEDOUT:W.ECONNABORTED,t,c)),c=null},Dt.isStandardBrowserEnv){const m=(t.withCredentials||X2(f))&&t.xsrfCookieName&&q2.read(t.xsrfCookieName);m&&s.set(t.xsrfHeaderName,m)}i===void 0&&s.setContentType(null),"setRequestHeader"in c&&w.forEach(s.toJSON(),function(y,E){c.setRequestHeader(E,y)}),w.isUndefined(t.withCredentials)||(c.withCredentials=!!t.withCredentials),o&&o!=="json"&&(c.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&c.addEventListener("progress",nv(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",nv(t.onUploadProgress)),(t.cancelToken||t.signal)&&(a=m=>{c&&(r(!m||m.type?new po(null,t,c):m),c.abort(),c=null)},t.cancelToken&&t.cancelToken.subscribe(a),t.signal&&(t.signal.aborted?a():t.signal.addEventListener("abort",a)));const g=J2(f);if(g&&Dt.protocols.indexOf(g)===-1){r(new W("Unsupported protocol "+g+":",W.ERR_BAD_REQUEST,t));return}c.send(i||null)})},Df={http:T2,xhr:tD};w.forEach(Df,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const rv=t=>`- ${t}`,nD=t=>w.isFunction(t)||t===null||t===!1,J1={getAdapter:t=>{t=w.isArray(t)?t:[t];const{length:e}=t;let n,r;const i={};for(let s=0;s<e;s++){n=t[s];let o;if(r=n,!nD(n)&&(r=Df[(o=String(n)).toLowerCase()],r===void 0))throw new W(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+s]=r}if(!r){const s=Object.entries(i).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(rv).join(`
`):" "+rv(s[0]):"as no adapter specified";throw new W("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Df};function Qu(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new po(null,t)}function iv(t){return Qu(t),t.headers=Zt.from(t.headers),t.data=Yu.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),J1.getAdapter(t.adapter||Fh.adapter)(t).then(function(r){return Qu(t),r.data=Yu.call(t,t.transformResponse,r),r.headers=Zt.from(r.headers),r},function(r){return Q1(r)||(Qu(t),r&&r.response&&(r.response.data=Yu.call(t,t.transformResponse,r.response),r.response.headers=Zt.from(r.response.headers))),Promise.reject(r)})}const sv=t=>t instanceof Zt?t.toJSON():t;function ki(t,e){e=e||{};const n={};function r(u,c,f){return w.isPlainObject(u)&&w.isPlainObject(c)?w.merge.call({caseless:f},u,c):w.isPlainObject(c)?w.merge({},c):w.isArray(c)?c.slice():c}function i(u,c,f){if(w.isUndefined(c)){if(!w.isUndefined(u))return r(void 0,u,f)}else return r(u,c,f)}function s(u,c){if(!w.isUndefined(c))return r(void 0,c)}function o(u,c){if(w.isUndefined(c)){if(!w.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function a(u,c,f){if(f in e)return r(u,c);if(f in t)return r(void 0,u)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(u,c)=>i(sv(u),sv(c),!0)};return w.forEach(Object.keys(Object.assign({},t,e)),function(c){const f=l[c]||i,d=f(t[c],e[c],c);w.isUndefined(d)&&f!==a||(n[c]=d)}),n}const Z1="1.5.1",Uh={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Uh[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const ov={};Uh.transitional=function(e,n,r){function i(s,o){return"[Axios v"+Z1+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,a)=>{if(e===!1)throw new W(i(o," has been removed"+(n?" in "+n:"")),W.ERR_DEPRECATED);return n&&!ov[o]&&(ov[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};function rD(t,e,n){if(typeof t!="object")throw new W("options must be an object",W.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new W("option "+s+" must be "+l,W.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new W("Unknown option "+s,W.ERR_BAD_OPTION)}}const Lf={assertOptions:rD,validators:Uh},gn=Lf.validators;class ul{constructor(e){this.defaults=e,this.interceptors={request:new ev,response:new ev}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=ki(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&Lf.assertOptions(r,{silentJSONParsing:gn.transitional(gn.boolean),forcedJSONParsing:gn.transitional(gn.boolean),clarifyTimeoutError:gn.transitional(gn.boolean)},!1),i!=null&&(w.isFunction(i)?n.paramsSerializer={serialize:i}:Lf.assertOptions(i,{encode:gn.function,serialize:gn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&w.merge(s.common,s[n.method]);s&&w.forEach(["delete","get","head","post","put","patch","common"],m=>{delete s[m]}),n.headers=Zt.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(l=l&&y.synchronous,a.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let c,f=0,d;if(!l){const m=[iv.bind(this),void 0];for(m.unshift.apply(m,a),m.push.apply(m,u),d=m.length,c=Promise.resolve(n);f<d;)c=c.then(m[f++],m[f++]);return c}d=a.length;let g=n;for(f=0;f<d;){const m=a[f++],y=a[f++];try{g=m(g)}catch(E){y.call(this,E);break}}try{c=iv.call(this,g)}catch(m){return Promise.reject(m)}for(f=0,d=u.length;f<d;)c=c.then(u[f++],u[f++]);return c}getUri(e){e=ki(this.defaults,e);const n=X1(e.baseURL,e.url);return K1(n,e.params,e.paramsSerializer)}}w.forEach(["delete","get","head","options"],function(e){ul.prototype[e]=function(n,r){return this.request(ki(r||{},{method:e,url:n,data:(r||{}).data}))}});w.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,a){return this.request(ki(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}ul.prototype[e]=n(),ul.prototype[e+"Form"]=n(!0)});const pa=ul;class zh{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{r.subscribe(a),s=a}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,a){r.reason||(r.reason=new po(s,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new zh(function(i){e=i}),cancel:e}}}const iD=zh;function sD(t){return function(n){return t.apply(null,n)}}function oD(t){return w.isObject(t)&&t.isAxiosError===!0}const Mf={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Mf).forEach(([t,e])=>{Mf[e]=t});const aD=Mf;function eE(t){const e=new pa(t),n=L1(pa.prototype.request,e);return w.extend(n,pa.prototype,e,{allOwnKeys:!0}),w.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return eE(ki(t,i))},n}const pe=eE(Fh);pe.Axios=pa;pe.CanceledError=po;pe.CancelToken=iD;pe.isCancel=Q1;pe.VERSION=Z1;pe.toFormData=Gl;pe.AxiosError=W;pe.Cancel=pe.CanceledError;pe.all=function(e){return Promise.all(e)};pe.spread=sD;pe.isAxiosError=oD;pe.mergeConfig=ki;pe.AxiosHeaders=Zt;pe.formToJSON=t=>Y1(w.isHTMLForm(t)?new FormData(t):t);pe.getAdapter=J1.getAdapter;pe.HttpStatusCode=aD;pe.default=pe;const mo=pe,lD=async(t,e,n,r,i,s)=>{const o={method:"GET",url:"https://us-real-estate.p.rapidapi.com/v3/for-sale",params:{state_code:e,city:t,sort:"newest",offset:"0",limit:"200",price_min:i,price_max:s,beds_min:n,beds_max:n,baths_min:r,baths_max:r},headers:{"X-RapidAPI-Key":"2661057b61msh8e6271d7a1763b6p12ffb0jsnc06db3ad292e","X-RapidAPI-Host":"us-real-estate.p.rapidapi.com"}};try{return(await mo.request(o)).data}catch(a){throw a}},uD=async(t,e,n,r)=>{const i={method:"GET",url:"https://us-real-estate.p.rapidapi.com/v2/for-rent",params:{state_code:e,city:t,sort:"lowest_price",offset:"0",limit:"200",beds_min:n,beds_max:n,baths_min:r,baths_max:r},headers:{"X-RapidAPI-Key":"2661057b61msh8e6271d7a1763b6p12ffb0jsnc06db3ad292e","X-RapidAPI-Host":"us-real-estate.p.rapidapi.com"}};try{const s=await mo.request(i);return console.log(s.data),s.data}catch(s){throw s}},cD=async(t,e,n,r)=>{const i={method:"GET",url:"https://us-real-estate.p.rapidapi.com/sold-homes",params:{state_code:e,city:t,sort:"sold_date",offset:"0",limit:"200",beds_min:n,beds_max:n,baths_min:r,baths_max:r},headers:{"X-RapidAPI-Key":"2661057b61msh8e6271d7a1763b6p12ffb0jsnc06db3ad292e","X-RapidAPI-Host":"us-real-estate.p.rapidapi.com"}};try{const s=await mo.request(i);return console.log(s.data),s.data}catch(s){throw s}};const fD={databaseURL:"https://criblytics-default-rtdb.firebaseio.com/",apiKey:"AIzaSyCRv3YXcKBp4caX4SLDf9tOM_jf6-PgKWc",authDomain:"criblytics.firebaseapp.com",projectId:"criblytics",storageBucket:"criblytics.appspot.com",messagingSenderId:"109707951445",appId:"1:109707951445:web:120d9a55b9851e13bd03dc",measurementId:"G-VH1N6MR0RG"},tE=Ud(fD);l0(tE);t1(tE);const dD=new ot;dD.setCustomParameters({prompt:"select_account"});const hD=["AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];function pD(t){const[e,n]=L.useState("Jupiter"),[r,i]=L.useState("FL"),[s,o]=L.useState(3),[a,l]=L.useState(2),[u,c]=L.useState([]),[f,d]=L.useState(0),[g,m]=L.useState(1e6),[y,E]=L.useState(0),[p,h]=L.useState(0),[v,_]=L.useState(!1);if(v)return S("div",{className:"fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center z-50",children:S("div",{className:"spinner"})});async function I(){_(!0);try{let T=0,D=0;const ye=await uD(e,r,s,a);ye.data&&ye.data.home_search.results.length>0?(T=b(ye.data.home_search.results,VO),console.log(`Average rent: ${T}`),E(T)):(_(!1),alert("We're sorry. There was a problem. Please try again."),console.error("No rental data available"));const qe=await cD(e,r,s,a,f,g);qe.data&&qe.data.results.length>0?(D=b(qe.data.results,GO),console.log(`Average sold: ${D}`),h(D)):(_(!1),console.error("No sold data available"),alert("We're sorry. There was a problem. Please try again."));const mt=await lD(e,r,s,a,f,g);mt.data&&mt.data.home_search.results.length>0?mt.data.home_search.results.forEach(gt=>{gt.rent=T,gt.sold=D;const go=HO(gt);go&&c(Li=>[...Li,go]),_(!1)}):(alert("No property data available"),_(!1),alert("We're sorry. There was a problem. Please try again."))}catch(T){console.error("Error fetching data: ",T)}}function b(T,D){let ye=0,qe=0;return T.forEach(mt=>{const gt=D(mt);gt&&"list_price"in gt&&typeof gt.list_price=="number"&&(ye+=gt.list_price,qe+=1)}),qe>0?ye/qe:0}const N=()=>{c([]),t.login&&I()},P=(T,D)=>{T==="min"?d(D):T==="max"&&m(D)};return M($f,{children:[S("div",{id:"search",children:M("div",{className:"p-4 flex content-center justify-center text-center",children:[M("div",{className:"w-1/4",children:[S("label",{className:"text-3xl block text-grainy mb-2",children:"State"}),M("select",{className:"px-2 py-3 text-2xl bg-dark-waves rounded-lg text-dark-bland w-4/5",value:r,onChange:T=>i(T.target.value),children:[S("option",{value:""}),hD.map(T=>S("option",{value:T,children:T},T))]})]}),M("div",{className:"w-1/4 ml-2",children:[S("label",{className:"text-3xl block text-grainy mb-2",children:"City"}),S("input",{className:"px-2 py-2 bg-dark-waves text-2xl rounded-lg text-dark-bland w-full",type:"text",value:e,onChange:T=>n(T.target.value)})]}),M("div",{className:"w-1/4 ml-2",children:[S("label",{className:"text-3xl block text-grainy mb-2",children:"Beds"}),S("select",{className:"text-2xl px-2 py-3 bg-dark-waves rounded-lg text-dark-bland w-4/5",value:s,onChange:T=>o(T.target.value),children:[1,2,3,4,5].map(T=>S("option",{value:T,children:T},T))})]}),M("div",{className:"w-1/4 ml-2",children:[S("label",{className:"text-3xl block text-grainy mb-2",children:"Baths"}),S("select",{className:"px-2 py-3 text-2xl bg-dark-waves rounded-lg text-dark-bland w-4/5",value:a,onChange:T=>l(T.target.value),children:[1,2,3,4,5].map(T=>S("option",{value:T,children:T},T))})]})]})}),M("div",{className:"flex justify-center items-center space-x-2 w-full",children:[" ",M("div",{className:"flex flex-col items-center w-full",children:[" ",S("label",{htmlFor:"price-min-input",className:"mb-1 text-center text-2xl text-bland",children:"Price Minimum"}),S(Sg,{id:"price-min-input",value:f,onChange:T=>P("min",T),className:"form-input w-full",placeholder:"$0.00"})]}),M("div",{className:"flex flex-col items-center w-full",children:[" ",S("label",{htmlFor:"price-max-input",className:"mb-1 text-center text-2xl text-bland",children:"Price Maximum"}),S(Sg,{id:"price-max-input",value:g,onChange:T=>P("max",T),className:"form-input w-full",placeholder:"$200,000"})]})]}),S("button",{id:"search",onClick:N,className:"active:shadow-none shadow-2xl active:from-black active:to-black focus:bg-black w-1/3 rounded-xl text-wave duration-200 ease-in-out transition my-8 bg-gradient-to-l from-grainy to-bland text-2xl",children:"Search"}),S(BO,{properties:u})]})}let av=0;function mD(){const t=["home","rental","investment"];return M("div",{className:"",children:[S("h1",{className:"mx-20 sm:text-5xl text-4xl font-extrabold leading-tighter tracking-tighter mb-24",children:M("a",{href:"#",onClick:()=>window.location.reload(),children:["Crib",S("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-grainy to-bland",children:"lytics."})]})}),M("p",{className:"text-2xl text-waves mb-8",children:["Find your dream ",S("span",{className:["#6EE7B7","#FFD166","#06D6A0"][av],children:t[av]})]})]})}const gD=async(t,e,n)=>{const r={method:"GET",url:"https://us-real-estate.p.rapidapi.com/location/suggest",params:{input:`${n} ${t} ${e}`},headers:{"X-RapidAPI-Key":"2661057b61msh8e6271d7a1763b6p12ffb0jsnc06db3ad292e","X-RapidAPI-Host":"us-real-estate.p.rapidapi.com"}};try{return(await mo.request(r)).data}catch(i){console.error(i)}},vD=async t=>{const e={method:"GET",url:"https://us-real-estate.p.rapidapi.com/v3/property-detail",params:{property_id:t},headers:{"X-RapidAPI-Key":"2661057b61msh8e6271d7a1763b6p12ffb0jsnc06db3ad292e","X-RapidAPI-Host":"us-real-estate.p.rapidapi.com"}};try{const n=await mo.request(e);return console.log(n.data),n.data}catch(n){throw n}};function yD(t){var a,l,u,c,f,d,g,m,y,E;const[e,n]=L.useState(null),[r,i]=L.useState(!1),[s,o]=L.useState(null);return L.useEffect(()=>{window.scrollTo(0,document.body.clientHeight/3)},[]),L.useEffect(()=>{i(!0);const p=async()=>{try{const h=await vD(t.listing_id);n(h),console.log(h)}catch(h){console.error(h),o(h)}finally{i(!1)}};t.listing_id&&p()},[t.listing_id]),r?S("div",{className:"fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center z-50",children:S("div",{className:"spinner"})}):(window.scrollTo(0,document.body.clientHeight/3),s?S("div",{className:"text-center text-lg text-red-500",children:"Error loading data"}):M("div",{className:"p-4 space-y-4",children:[e&&e.data&&e.data.primary_photo&&S("img",{src:e.data.photos[0].href,alt:"Property",className:"w-1/2 block mx-auto h-auto rounded-lg shadow-md"}),M("div",{className:"grid grid-cols-2 gap-4",children:[((a=e==null?void 0:e.data)==null?void 0:a.price_per_sqft)&&M("div",{className:"p-2 bg-bland rounded-lg text-white",children:[S("p",{className:"text-lg font-semibold",children:"Price per Sqft:"}),M("p",{children:["$",e.data.price_per_sqft]})]}),((l=e==null?void 0:e.data)==null?void 0:l.list_price)&&M("div",{className:"p-2 bg-bland rounded-lg text-white",children:[S("p",{className:"text-lg font-semibold",children:"List Price:"}),M("p",{children:["$",e.data.list_price.toLocaleString()]})]}),((c=(u=e==null?void 0:e.data)==null?void 0:u.description)==null?void 0:c.beds)&&M("div",{className:"p-2 bg-bland rounded-lg text-white",children:[S("p",{className:"text-lg font-semibold",children:"Beds:"}),S("p",{children:e.data.description.beds})]}),((d=(f=e==null?void 0:e.data)==null?void 0:f.description)==null?void 0:d.baths)&&M("div",{className:"p-2 bg-bland rounded-lg text-white",children:[S("p",{className:"text-lg font-semibold",children:"Baths:"}),S("p",{children:e.data.description.baths})]}),((m=(g=e==null?void 0:e.data)==null?void 0:g.description)==null?void 0:m.lot_sqft)&&M("div",{className:"p-2 bg-bland rounded-lg text-white",children:[S("p",{className:"text-lg font-semibold",children:"Lot Size (Sqft):"}),S("p",{children:e.data.description.lot_sqft.toLocaleString()})]}),((E=(y=e==null?void 0:e.data)==null?void 0:y.description)==null?void 0:E.sqft)&&M("div",{className:"p-2 bg-bland rounded-lg text-white",children:[S("p",{className:"text-lg font-semibold",children:"Square Feet:"}),S("p",{children:e.data.description.sqft.toLocaleString()})]})]})]}))}function _D(){const[t,e]=L.useState("1109 NE 5th Pl"),[n,r]=L.useState("Gainesville"),[i,s]=L.useState("FL"),[o,a]=L.useState(""),[l,u]=L.useState(!1),c=["AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];if(l)return S("div",{className:"fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center z-50",children:S("div",{className:"spinner"})});const f=()=>{u(!0),gD(n,i,t).then(d=>{d.data&&d.data.length>0?a(d.data[0].property_id):(u(!1),console.log("No data found"),a("")),u(!1)}).catch(d=>{u(!1),console.error("Error fetching data:",d),a("")}),console.log(t,n,i)};return M("div",{id:"lookup",children:[M("div",{className:"p-4 flex content-center justify-center text-center space-x-4",children:[M("div",{className:"w-1/4",children:[S("label",{className:"text-3xl block text-grainy mb-2",children:"State"}),M("select",{className:"px-2 py-3 text-2xl bg-dark-waves rounded-lg text-dark-bland w-full",value:i,onChange:d=>s(d.target.value),children:[S("option",{value:""}),c.map(d=>S("option",{value:d,children:d},d))]})]}),M("div",{className:"w-1/4",children:[S("label",{className:"text-3xl block text-grainy mb-2",children:"City"}),S("input",{className:"px-2 py-2 bg-dark-waves text-2xl rounded-lg text-dark-bland w-full",type:"text",value:n,onChange:d=>r(d.target.value)})]}),M("div",{className:"w-1/2",children:[S("label",{className:"text-3xl block text-grainy mb-2",children:"Address"}),S("input",{className:"px-2 py-2 bg-dark-waves text-2xl rounded-lg text-dark-bland w-full",type:"text",value:t,onChange:d=>e(d.target.value)})]})]}),S("button",{onClick:f,className:"text-2xl rounded-lg shadow-xl bg-emerald-500",children:"Lookup"}),o&&S(yD,{listing_id:o})]})}const wD={databaseURL:"https://criblytics-default-rtdb.firebaseio.com/",apiKey:"AIzaSyCRv3YXcKBp4caX4SLDf9tOM_jf6-PgKWc",authDomain:"criblytics.firebaseapp.com",projectId:"criblytics",storageBucket:"criblytics.appspot.com",messagingSenderId:"109707951445",appId:"1:109707951445:web:120d9a55b9851e13bd03dc",measurementId:"G-VH1N6MR0RG"},nE=Ud(wD);l0(nE);const ED=t1(nE),rE=new ot;rE.setCustomParameters({prompt:"select_account"});const Ff=tx(),SD=({user:t,auth:e,db:n})=>S($f,{children:M("div",{className:"flex content-center justify-center gap-16 mt-8 border-b-2 border-grainy pb-6",children:[S("img",{className:"rounded-xl h-16 w-16",src:t.photoURL,alt:""}),S("button",{className:"hover:border-red-500 hover:border-3 p-16 rounded-2xl button signout bg-transparent font-bold py-2 px-4 text-2xl text-waves",onClick:()=>e.signOut(),children:"Sign out"}),S(Tr,{onClick:()=>history(),className:"w-16 h-16 text-yellow-400 hover:scale-125 duration-100 transform cursor-pointer",icon:D1})]})});function kD(){async function t(e,n){var r;try{const i=await cN(e,n),o=ot.credentialFromResult(i).accessToken,a=i.user;console.log(a)}catch(i){i.code,i.message,(r=i.customData)!=null&&r.email,ot.credentialFromError(i)}}return S("div",{children:S("button",{className:"login-with-google-btn w-64 h-16 font-medium text-md duration-200 transition-shadow shadow-xl hover:outline outline-2 outline-emerald-600",onClick:()=>t(Ff,rE),children:"Sign in with Google"})})}function ID(){const[t,e]=L.useState(null),[n,r]=L.useState(!1);return L.useEffect(()=>{Ff.onAuthStateChanged(s=>{e(s)})},[]),S("div",{children:M("div",{className:"mt-8 ",children:[S(Gk,{}),S(mD,{}),S("section",{children:t?S(SD,{auth:Ff,user:t,db:ED}):S(kD,{})}),S("div",{className:"mt-4 text-xl text-center max-w-l",children:t?S(i,{toggleVal:n}):null}),t&&(n?S(_D,{}):S(pD,{user:t,login:!0})),t?null:S(CD,{})]})});function i({toggleVal:s}){return M("div",{className:"p-12 toggle-bar justify-center mx-auto",children:[S("button",{className:`bg-indigo-500 text-white px-4 py-2 rounded-l shadow-xl font-bold ${s?"opacity-50":"opacity-100"}`,onClick:()=>r(!1),children:"Area Search"}),S("button",{className:`bg-indigo-500 text-white px-4 py-2 rounded-r shadow-xl font-bold ${s?"opacity-100":"opacity-50"}`,onClick:()=>r(!0),children:"House Lookup"})]})}}function CD(){return M($f,{children:[S("h1",{className:"text-3.5xl p-8 font-sans opacity-90",children:"Real Estate Market Analysis"}),S("div",{className:"mt-8 mx-auto max-w-md text-left border-grainy border-2 p-8 font-sans",children:S("ul",{className:"list-none list-inside space-y-4",children:S("li",{className:"text-2xl leading-snug font-sans font-medium",children:"Identify the top property values in any zip code or city."})})})]})}function bD(){return console.log({}.DATABASE_URL),S("div",{children:S(ID,{})})}const TD=Xu.createRoot(document.getElementById("root"));TD.render(S(fl.StrictMode,{children:S(Wk,{children:S(bD,{})})}));
