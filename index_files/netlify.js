/*! For license information please see netlify.js.LICENSE.txt */
(()=>{"use strict";var t,e,n,r,o,i=-1,a=function(t){addEventListener("pageshow",(function(e){e.persisted&&(i=e.timeStamp,t(e))}),!0)},c=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},u=function(){var t=c();return t&&t.activationStart||0},s=function(t,e){var n=c(),r="navigate";return i>=0?r="back-forward-cache":n&&(r=document.prerendering||u()>0?"prerender":document.wasDiscarded?"restore":n.type.replace(/_/g,"-")),{name:t,value:void 0===e?-1:e,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},f=function(t,e,n){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var r=new PerformanceObserver((function(t){Promise.resolve().then((function(){e(t.getEntries())}))}));return r.observe(Object.assign({type:t,buffered:!0},n||{})),r}}catch(t){}},l=function(t,e){var n=function n(r){"pagehide"!==r.type&&"hidden"!==document.visibilityState||(t(r),e&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},h=function(t,e,n,r){var o,i;return function(a){e.value>=0&&(a||r)&&((i=e.value-(o||0))||void 0===o)&&(o=e.value,e.delta=i,e.rating=function(t,e){return t>e[1]?"poor":t>e[0]?"needs-improvement":"good"}(e.value,n),t(e))}},d=function(t){requestAnimationFrame((function(){return requestAnimationFrame((function(){return t()}))}))},v=function(t){document.prerendering?addEventListener("prerenderingchange",(function(){return t()}),!0):t()},p=-1,m=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},y=function(t){"hidden"===document.visibilityState&&p>-1&&(p="visibilitychange"===t.type?t.timeStamp:0,w())},g=function(){addEventListener("visibilitychange",y,!0),addEventListener("prerenderingchange",y,!0)},w=function(){removeEventListener("visibilitychange",y,!0),removeEventListener("prerenderingchange",y,!0)},b=function(){return p<0&&(p=m(),g(),a((function(){setTimeout((function(){p=m(),g()}),0)}))),{get firstHiddenTime(){return p}}},E=function(t,e){e=e||{},v((function(){var n,r=[1800,3e3],o=b(),i=s("FCP"),c=f("paint",(function(t){t.forEach((function(t){"first-contentful-paint"===t.name&&(c.disconnect(),t.startTime<o.firstHiddenTime&&(i.value=Math.max(t.startTime-u(),0),i.entries.push(t),n(!0)))}))}));c&&(n=h(t,i,r,e.reportAllChanges),a((function(o){i=s("FCP"),n=h(t,i,r,e.reportAllChanges),d((function(){i.value=performance.now()-o.timeStamp,n(!0)}))})))}))},L=function(t,e){e=e||{},v((function(){var n,r=[.1,.25],o=s("CLS"),i=-1,c=0,u=[],v=function(e){i>-1&&t(e)},p=function(t){t.forEach((function(t){if(!t.hadRecentInput){var e=u[0],r=u[u.length-1];c&&t.startTime-r.startTime<1e3&&t.startTime-e.startTime<5e3?(c+=t.value,u.push(t)):(c=t.value,u=[t]),c>o.value&&(o.value=c,o.entries=u,n())}}))},m=f("layout-shift",p);m&&(n=h(v,o,r,e.reportAllChanges),E((function(t){i=t.value,o.value<0&&(o.value=0,n())})),l((function(){p(m.takeRecords()),n(!0)})),a((function(){c=0,i=-1,o=s("CLS",0),n=h(v,o,r,e.reportAllChanges),d((function(){return n()}))})))}))},O={passive:!0,capture:!0},S=new Date,x=function(r,o){t||(t=o,e=r,n=new Date,j(removeEventListener),T())},T=function(){if(e>=0&&e<n-S){var o={entryType:"first-input",name:t.type,target:t.target,cancelable:t.cancelable,startTime:t.timeStamp,processingStart:t.timeStamp+e};r.forEach((function(t){t(o)})),r=[]}},P=function(t){if(t.cancelable){var e=(t.timeStamp>1e12?new Date:performance.now())-t.timeStamp;"pointerdown"==t.type?function(t,e){var n=function(){x(t,e),o()},r=function(){o()},o=function(){removeEventListener("pointerup",n,O),removeEventListener("pointercancel",r,O)};addEventListener("pointerup",n,O),addEventListener("pointercancel",r,O)}(e,t):x(e,t)}},j=function(t){["mousedown","keydown","touchstart","pointerdown"].forEach((function(e){return t(e,P,O)}))},C=function(n,o){o=o||{},v((function(){var i,c=[100,300],u=b(),d=s("FID"),v=function(t){t.startTime<u.firstHiddenTime&&(d.value=t.processingStart-t.startTime,d.entries.push(t),i(!0))},p=function(t){t.forEach(v)},m=f("first-input",p);i=h(n,d,c,o.reportAllChanges),m&&l((function(){p(m.takeRecords()),m.disconnect()}),!0),m&&a((function(){var a;d=s("FID"),i=h(n,d,c,o.reportAllChanges),r=[],e=-1,t=null,j(addEventListener),a=v,r.push(a),T()}))}))},A=0,k=1/0,_=0,M=function(t){t.forEach((function(t){t.interactionId&&(k=Math.min(k,t.interactionId),_=Math.max(_,t.interactionId),A=_?(_-k)/7+1:0)}))},D=function(){return o?A:performance.interactionCount||0},I=function(){"interactionCount"in performance||o||(o=f("event",M,{type:"event",buffered:!0,durationThreshold:0}))},F=0,N=function(){return D()-F},G=[],H={},W=function(t){var e=G[G.length-1],n=H[t.interactionId];if(n||G.length<10||t.duration>e.latency){if(n)n.entries.push(t),n.latency=Math.max(n.latency,t.duration);else{var r={id:t.interactionId,latency:t.duration,entries:[t]};H[r.id]=r,G.push(r)}G.sort((function(t,e){return e.latency-t.latency})),G.splice(10).forEach((function(t){delete H[t.id]}))}},R=function(t,e){e=e||{},v((function(){var n=[200,500];I();var r,o=s("INP"),i=function(t){t.forEach((function(t){t.interactionId&&W(t),"first-input"===t.entryType&&!G.some((function(e){return e.entries.some((function(e){return t.duration===e.duration&&t.startTime===e.startTime}))}))&&W(t)}));var e,n=(e=Math.min(G.length-1,Math.floor(N()/50)),G[e]);n&&n.latency!==o.value&&(o.value=n.latency,o.entries=n.entries,r())},c=f("event",i,{durationThreshold:e.durationThreshold||40});r=h(t,o,n,e.reportAllChanges),c&&(c.observe({type:"first-input",buffered:!0}),l((function(){i(c.takeRecords()),o.value<0&&N()>0&&(o.value=0,o.entries=[]),r(!0)})),a((function(){G=[],F=D(),o=s("INP"),r=h(t,o,n,e.reportAllChanges)})))}))},q={},z=function(t,e){e=e||{},v((function(){var n,r=[2500,4e3],o=b(),i=s("LCP"),c=function(t){var e=t[t.length-1];if(e){var r=Math.max(e.startTime-u(),0);r<o.firstHiddenTime&&(i.value=r,i.entries=[e],n())}},v=f("largest-contentful-paint",c);if(v){n=h(t,i,r,e.reportAllChanges);var p=function(){q[i.id]||(c(v.takeRecords()),v.disconnect(),q[i.id]=!0,n(!0))};["keydown","click"].forEach((function(t){addEventListener(t,p,{once:!0,capture:!0})})),l(p,!0),a((function(o){i=s("LCP"),n=h(t,i,r,e.reportAllChanges),d((function(){i.value=performance.now()-o.timeStamp,q[i.id]=!0,n(!0)}))}))}}))},B=function t(e){document.prerendering?v((function(){return t(e)})):"complete"!==document.readyState?addEventListener("load",(function(){return t(e)}),!0):setTimeout(e,0)},Y=function(t,e){e=e||{};var n=[800,1800],r=s("TTFB"),o=h(t,r,n,e.reportAllChanges);B((function(){var i=c();if(i){var f=i.responseStart;if(f<=0||f>performance.now())return;r.value=Math.max(f-u(),0),r.entries=[i],o(!0),a((function(){r=s("TTFB",0),(o=h(t,r,n,e.reportAllChanges))(!0)}))}}))};function J(t){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J(t)}var K=["name"];function Q(){Q=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function s(t,e,n,o){var i=e&&e.prototype instanceof h?e:h,a=Object.create(i.prototype),c=new x(o||[]);return r(a,"_invoke",{value:E(t,n,c)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l={};function h(){}function d(){}function v(){}var p={};u(p,i,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(T([])));y&&y!==e&&n.call(y,i)&&(p=y);var g=v.prototype=h.prototype=Object.create(p);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(r,i,a,c){var u=f(t[r],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==J(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return i=i?i.then(r,r):r()}})}function E(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=L(a,n);if(c){if(c===l)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=f(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function L(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),l;var o=f(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,l;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function T(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return d.prototype=v,r(g,"constructor",{value:v,configurable:!0}),r(v,"constructor",{value:d,configurable:!0}),d.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(b.prototype),u(b.prototype,a,(function(){return this})),t.AsyncIterator=b,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new b(s(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(g),u(g,c,"Generator"),u(g,i,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=T,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},t}function U(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function V(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?U(Object(n),!0).forEach((function(e){X(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function X(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==J(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e);if("object"!==J(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"===J(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Z(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function $(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}var tt=function(t){return new Promise((function(e){return setTimeout(e,t)}))},et=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},e=function(e){var n=e.name,r=e.value,o=e.rating,i=e.delta,a=e.navigationType;t({name:n,value:r,rating:o,delta:i,navigationType:a})};L(e),C(e),E(e),z(e),Y(e),R(e)},nt=function(){var t,e,n=window.navigator.userAgent,r=(null===(t=window.navigator)||void 0===t||null===(e=t.userAgentData)||void 0===e?void 0:e.platform)||window.navigator.platform;return["Macintosh","MacIntel","MacPPC","Mac68K","MacOS"].some((function(t){return t.toLowerCase()===r.toLowerCase()}))?"Mac OS":["iPhone","iPad","iPod"].some((function(t){return t.toLowerCase()===r.toLowerCase()}))?"iOS":["Win32","Win64","Windows","WinCE"].some((function(t){return t.toLowerCase()===r.toLowerCase()}))?"Windows":/Android/.test(n)?"Android":/Linux/.test(r)?"Linux":"Other"},rt=function(t){var e=t.size,n=t.browser,r=t.os,o=t.device,i=t.connection,a=t.location,c=t.netlifyData,u=t.vitals,s=[];return i&&s.push({type:"performance",value:i}),Object.keys(u).forEach((function(t){s.push({type:"web-vital",value:u[t]})})),{site_id:c.site_id||"",branch:c.branch||"",context:c.context||"",timestamp_ms:Date.now(),request:{hostname:a.hostname,path:a.pathname},client:{browser:n,os:r,size:e,device:o},events:s}},ot=function(t){fetch("https://ingesteer.services-prod.nsvcs.net/rum_collection",{method:"POST",headers:{authorization:"LHTDx9Hh6rhmGwNuDzFPpNLi2mR","Content-Type":"application/json"},body:JSON.stringify(t)})};!function(){var t,e=(t=Q().mark((function t(){var e,n;return Q().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={},et((function(t){var n=t.name,r=Z(t,K);return e[n]=e[n]||V({name:n},r)})),t.next=4,tt(5e3);case 4:n=rt({size:(void 0,c=window.screen,{width:c.availWidth,height:c.availHeight}),browser:(a=void 0,a=window.navigator.userAgent,a.match(/chrome|chromium|crios/i)?"Chrome":a.match(/firefox|fxios/i)?"Firefox":a.match(/safari/i)?"Safari":a.match(/opr\//i)?"Opera":a.match(/edg/i)?"Edge":"Other"),device:Math.min(window.screen.availWidth,window.screen.availHeight)<768||navigator.userAgent.indexOf("Mobi")>-1?"mobile":"desktop",os:nt(),connection:(void 0,i=performance.getEntriesByType("navigation")[0],i?{ssl:i.requestStart-i.secureConnectionStart,dns:i.domainLookupEnd-i.domainLookupStart,tcp:i.connectEnd-i.connectStart,page_load:i.loadEventStart-i.fetchStart,ttfb:i.responseStart,server_timing:i.serverTiming}:{}),location:(void 0,o=window.location,{protocol:o.protocol,hostname:o.hostname,pathname:o.pathname}),netlifyData:(r=void 0,r=document.querySelector("#netlify-rum-container"),r?{site_id:r.getAttribute("data-netlify-rum-site-id")||"",branch:r.getAttribute("data-netlify-deploy-branch")||"",context:r.getAttribute("data-netlify-deploy-context")||""}:{}),vitals:e}),ot(n);case 6:case"end":return t.stop()}var r,o,i,a,c}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){$(i,r,o,a,c,"next",t)}function c(t){$(i,r,o,a,c,"throw",t)}a(void 0)}))});return function(){return e.apply(this,arguments)}}()()})();