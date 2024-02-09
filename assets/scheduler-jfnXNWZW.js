var S={exports:{}},F={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J;function Y(){return J||(J=1,function(r){function P(n,e){var t=n.length;n.push(e);n:for(;0<t;){var i=t-1>>>1,l=n[i];if(0<g(l,e))n[i]=e,n[t]=l,t=i;else break n}}function o(n){return n.length===0?null:n[0]}function _(n){if(n.length===0)return null;var e=n[0],t=n.pop();if(t!==e){n[0]=t;n:for(var i=0,l=n.length,w=l>>>1;i<w;){var v=2*(i+1)-1,R=n[v],d=v+1,I=n[d];if(0>g(R,t))d<l&&0>g(I,R)?(n[i]=I,n[d]=t,i=d):(n[i]=R,n[v]=t,i=v);else if(d<l&&0>g(I,t))n[i]=I,n[d]=t,i=d;else break n}}return e}function g(n,e){var t=n.sortIndex-e.sortIndex;return t!==0?t:n.id-e.id}if(typeof performance=="object"&&typeof performance.now=="function"){var O=performance;r.unstable_now=function(){return O.now()}}else{var N=Date,Q=N.now();r.unstable_now=function(){return N.now()-Q}}var c=[],f=[],U=1,a=null,u=3,m=!1,s=!1,b=!1,j=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(n){for(var e=o(f);e!==null;){if(e.callback===null)_(f);else if(e.startTime<=n)_(f),e.sortIndex=e.expirationTime,P(c,e);else break;e=o(f)}}function E(n){if(b=!1,T(n),!s)if(o(c)!==null)s=!0,L(q);else{var e=o(f);e!==null&&M(E,e.startTime-n)}}function q(n,e){s=!1,b&&(b=!1,B(y),y=-1),m=!0;var t=u;try{for(T(e),a=o(c);a!==null&&(!(a.expirationTime>e)||n&&!G());){var i=a.callback;if(typeof i=="function"){a.callback=null,u=a.priorityLevel;var l=i(a.expirationTime<=e);e=r.unstable_now(),typeof l=="function"?a.callback=l:a===o(c)&&_(c),T(e)}else _(c);a=o(c)}if(a!==null)var w=!0;else{var v=o(f);v!==null&&M(E,v.startTime-e),w=!1}return w}finally{a=null,u=t,m=!1}}var k=!1,p=null,y=-1,z=5,A=-1;function G(){return!(r.unstable_now()-A<z)}function C(){if(p!==null){var n=r.unstable_now();A=n;var e=!0;try{e=p(!0,n)}finally{e?h():(k=!1,p=null)}}else k=!1}var h;if(typeof D=="function")h=function(){D(C)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,W=H.port2;H.port1.onmessage=C,h=function(){W.postMessage(null)}}else h=function(){j(C,0)};function L(n){p=n,k||(k=!0,h())}function M(n,e){y=j(function(){n(r.unstable_now())},e)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(n){n.callback=null},r.unstable_continueExecution=function(){s||m||(s=!0,L(q))},r.unstable_forceFrameRate=function(n){0>n||125<n?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<n?Math.floor(1e3/n):5},r.unstable_getCurrentPriorityLevel=function(){return u},r.unstable_getFirstCallbackNode=function(){return o(c)},r.unstable_next=function(n){switch(u){case 1:case 2:case 3:var e=3;break;default:e=u}var t=u;u=e;try{return n()}finally{u=t}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(n,e){switch(n){case 1:case 2:case 3:case 4:case 5:break;default:n=3}var t=u;u=n;try{return e()}finally{u=t}},r.unstable_scheduleCallback=function(n,e,t){var i=r.unstable_now();switch(typeof t=="object"&&t!==null?(t=t.delay,t=typeof t=="number"&&0<t?i+t:i):t=i,n){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return l=t+l,n={id:U++,callback:e,priorityLevel:n,startTime:t,expirationTime:l,sortIndex:-1},t>i?(n.sortIndex=t,P(f,n),o(c)===null&&n===o(f)&&(b?(B(y),y=-1):b=!0,M(E,t-i))):(n.sortIndex=l,P(c,n),s||m||(s=!0,L(q))),n},r.unstable_shouldYield=G,r.unstable_wrapCallback=function(n){var e=u;return function(){var t=u;u=e;try{return n.apply(this,arguments)}finally{u=t}}}}(F)),F}var K;function V(){return K||(K=1,S.exports=Y()),S.exports}export{V as r};
//# sourceMappingURL=scheduler-jfnXNWZW.js.map
