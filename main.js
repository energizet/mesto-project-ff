/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t,e,r,n,o={386:(t,e,r)=>{function n(){return fetch("".concat("https://nomoreparties.co/v1/cohort-bac-2","/users/me"),{headers:{authorization:"cca75521-4c65-4f5e-a6aa-a4ca60a56a98"}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){return console.log(t),{}}))}function o(){return fetch("".concat("https://nomoreparties.co/v1/cohort-bac-2","/cards"),{headers:{authorization:"cca75521-4c65-4f5e-a6aa-a4ca60a56a98"}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){return console.log(t),[]}))}function a(t){return fetch("".concat("https://nomoreparties.co/v1/cohort-bac-2","/users/me"),{method:"PATCH",headers:{authorization:"cca75521-4c65-4f5e-a6aa-a4ca60a56a98","Content-Type":"application/json"},body:JSON.stringify({name:t.name,about:t.about})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){return console.log(t)}))}function c(t){return fetch("".concat("https://nomoreparties.co/v1/cohort-bac-2","/users/me/avatar"),{method:"PATCH",headers:{authorization:"cca75521-4c65-4f5e-a6aa-a4ca60a56a98","Content-Type":"application/json"},body:JSON.stringify({avatar:t.avatar})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){return console.log(t)}))}function i(t){return fetch("".concat("https://nomoreparties.co/v1/cohort-bac-2","/cards"),{method:"POST",headers:{authorization:"cca75521-4c65-4f5e-a6aa-a4ca60a56a98","Content-Type":"application/json"},body:JSON.stringify({name:t.name,link:t.link})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){return console.log(t)}))}function u(t){return fetch("".concat("https://nomoreparties.co/v1/cohort-bac-2","/cards/").concat(t._id),{method:"DELETE",headers:{authorization:"cca75521-4c65-4f5e-a6aa-a4ca60a56a98"}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){return console.log(t)}))}function s(t){return fetch("".concat("https://nomoreparties.co/v1/cohort-bac-2","/cards/likes/").concat(t._id),{method:"PUT",headers:{authorization:"cca75521-4c65-4f5e-a6aa-a4ca60a56a98"}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){return console.log(t)}))}function l(t){return fetch("".concat("https://nomoreparties.co/v1/cohort-bac-2","/cards/likes/").concat(t._id),{method:"DELETE",headers:{authorization:"cca75521-4c65-4f5e-a6aa-a4ca60a56a98"}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){return console.log(t)}))}function f(t){return fetch(t,{method:"HEAD"}).then((function(t){var e;return t.ok?null===(e=t.headers.get("content-type"))||void 0===e?void 0:e.startsWith("image/"):Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){return console.log(t)}))}r.d(e,{E$:()=>n,Eg:()=>o,GO:()=>u,TX:()=>l,cd:()=>f,ek:()=>s,gm:()=>i,r7:()=>a,xG:()=>c})},729:(t,e,r)=>{function n(t,e,r){var n=t.cloneNode(!0),o=n.querySelector(".card__title"),a=n.querySelector(".card__image"),c=n.querySelector(".card__delete-button"),i=n.querySelector(".card__like-button");return o.textContent=e.name,a.src=e.link,a.alt=e.name,u(),e.isCanDelete&&c.classList.add("card__delete-button_visible"),a.addEventListener("click",(function(){return r.openCard(e)})),c.addEventListener("click",r.removeCard),i.addEventListener("click",r.like),[n,function(){n.remove()},u];function u(){e.isLike?i.classList.add("card__like-button_is-active"):i.classList.remove("card__like-button_is-active"),i.textContent=e.likeCount}}r.d(e,{z:()=>n})},178:(t,e,r)=>{function n(t){return t.querySelector(".popup__close").addEventListener("click",r),t.addEventListener("mousedown",(function(t){t.currentTarget===t.target&&r()})),function(){return t.classList.add("popup_is-opened"),document.addEventListener("keyup",e),r};function e(t){"Escape"===t.code&&r()}function r(){t.classList.remove("popup_is-opened"),document.removeEventListener("keyup",e)}}r.d(e,{U:()=>n})},26:(t,e,r)=>{r.a(t,(async(t,e)=>{try{var n=r(729),o=r(178),a=r(763),c=r(386);function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function q(){q=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof v?e:v,c=Object.create(a.prototype),i=new A(n||[]);return o(c,"_invoke",{value:L(t,r,i)}),c}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var p="suspendedStart",h="suspendedYield",d="executing",y="completed",m={};function v(){}function _(){}function b(){}var g={};s(g,c,(function(){return this}));var x=Object.getPrototypeOf,S=x&&x(x(T([])));S&&S!==r&&n.call(S,c)&&(g=S);var w=b.prototype=v.prototype=Object.create(g);function k(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,a,c,i){var u=f(t[o],t,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==j(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,c,i)}),(function(t){r("throw",t,c,i)})):e.resolve(l).then((function(t){s.value=t,c(s)}),(function(t){return r("throw",t,c,i)}))}i(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function L(e,r,n){var o=p;return function(a,c){if(o===d)throw Error("Generator is already running");if(o===y){if("throw"===a)throw c;return{value:t,done:!0}}for(n.method=a,n.arg=c;;){var i=n.delegate;if(i){var u=C(i,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=f(e,r,n);if("normal"===s.type){if(o=n.done?y:h,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=y,n.method="throw",n.arg=s.arg)}}}function C(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,C(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=f(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var c=a.arg;return c?c.done?(r[e.resultName]=c.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):c:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(j(e)+" is not iterable")}return _.prototype=b,o(w,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:_,configurable:!0}),_.displayName=s(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},k(E.prototype),s(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var c=new E(l(t,r,n,o),a);return e.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},k(w),s(w,u,"Generator"),s(w,c,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return i.type="throw",i.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var c=this.tryEntries[a],i=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var u=n.call(c,"catchLoc"),s=n.call(c,"finallyLoc");if(u&&s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var c=a?a.completion:{};return c.type=t,c.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}function O(t,e,r,n,o,a,c){try{var i=t[a](c),u=i.value}catch(t){return void r(t)}i.done?e(u):Promise.resolve(u).then(n,o)}function P(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){O(a,n,o,c,i,"next",t)}function i(t){O(a,n,o,c,i,"throw",t)}c(void 0)}))}}function A(t){return N(t)||G(t)||I(t)||T()}function T(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function G(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function N(t){if(Array.isArray(t))return M(t)}function U(t,e){return D(t)||F(t,e)||I(t,e)||z()}function z(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function I(t,e){if(t){if("string"==typeof t)return M(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?M(t,e):void 0}}function M(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function F(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,c,i=[],u=!0,s=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(i.push(n.value),i.length!==e);u=!0);}catch(t){s=!0,o=t}finally{try{if(!u&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(s)throw o}}return i}}function D(t){if(Array.isArray(t))return t}var i=document.querySelector(".profile__title"),u=document.querySelector(".profile__description"),s=document.querySelector(".profile__image"),l=document.querySelector("#card-template").content.querySelector(".card"),f=document.querySelector(".places__list"),p=document.querySelector(".popup_type_image"),h=document.querySelector(".popup_type_edit"),d=document.querySelector(".popup_type_new-card"),y=document.querySelector(".popup_type_avatar"),m=document.querySelector(".popup_type_delete-card"),v=p.querySelector(".popup__caption"),_=p.querySelector(".popup__image"),b=(0,o.U)(p),g=(0,o.U)(h),x=(0,o.U)(d),S=(0,o.U)(y),w=R(),k={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},E=U(await Promise.all([(0,c.E$)(),(0,c.Eg)()]),2),L=E[0],C=E[1];function R(){var t,e,r,n=(0,o.U)(m),a=m.querySelector(".popup__button"),i=a.textContent;return m.querySelector(".popup__form").addEventListener("submit",(function(e){return Y(e,u,t)})),function(o,a){t=n(),e=o,r=a};function u(){return s.apply(this,arguments)}function s(){return(s=P(q().mark((function t(){var n;return q().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.textContent="Сохранение...",t.next=3,(0,c.GO)(e);case 3:if(n=t.sent,a.textContent=i,null!=n){t.next=7;break}return t.abrupt("return");case 7:r();case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}function B(t){s(),t.isCanDelete=t.owner._id===L._id;var e=(0,n.z)(l,t,{removeCard:function(){w(t,a)},like:function(){return u.apply(this,arguments)},openCard:H}),r=U(e,3),o=r[0],a=r[1],i=r[2];return o;function u(){return u=P(q().mark((function e(){var r;return q().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isLike){e.next=6;break}return e.next=3,(0,c.TX)(t);case 3:r=e.sent,e.next=9;break;case 6:return e.next=8,(0,c.ek)(t);case 8:r=e.sent;case 9:if(null!=r){e.next=11;break}return e.abrupt("return");case 11:Object.assign(t,r),s(),i();case 14:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function s(){t.isLike=t.likes.some((function(t){return t._id===L._id})),t.likeCount=t.likes.length}}function H(t){v.textContent=t.name,_.src=t.link,_.alt=t.name,b()}function J(){var t,e=y.querySelector(".popup__input_type_url"),r=y.querySelector(".popup__button"),n=r.textContent,o=y.querySelector(".popup__form");function i(){return u.apply(this,arguments)}function u(){return(u=P(q().mark((function t(){var i,u;return q().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.textContent="Сохранение...",i=e.value,t.next=4,(0,c.cd)(i);case 4:if(!1!==t.sent){t.next=9;break}return(0,a.UM)(o,e,e.dataset.errorMessage,k),r.textContent=n,t.abrupt("return",!1);case 9:return t.next=11,(0,c.xG)({avatar:i});case 11:if(u=t.sent,r.textContent=n,null!=u){t.next=15;break}return t.abrupt("return");case 15:Object.assign(L,u),X();case 17:case"end":return t.stop()}}),t)})))).apply(this,arguments)}o.addEventListener("submit",(function(e){return Y(e,i,t)})),s.addEventListener("click",(function(){o.reset(),(0,a.RC)(y,k),t=S()}))}function $(){var t,e=document.querySelector(".profile__edit-button"),r=h.querySelector(".popup__input_type_name"),n=h.querySelector(".popup__input_type_description"),o=h.querySelector(".popup__button"),i=o.textContent;function u(){return s.apply(this,arguments)}function s(){return(s=P(q().mark((function t(){var e;return q().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o.textContent="Сохранение...",t.next=3,(0,c.r7)({name:r.value,about:n.value});case 3:if(e=t.sent,o.textContent=i,null!=e){t.next=7;break}return t.abrupt("return");case 7:Object.assign(L,e),X();case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}h.querySelector(".popup__form").addEventListener("submit",(function(e){return Y(e,u,t)})),e.addEventListener("click",(function(){r.value=L.name,n.value=L.about,(0,a.RC)(h,k),t=g()}))}function V(){var t,e=document.querySelector(".profile__add-button"),r=d.querySelector(".popup__input_type_card-name"),n=d.querySelector(".popup__input_type_url"),o=d.querySelector(".popup__button"),i=o.textContent,u=d.querySelector(".popup__form");function s(){return l.apply(this,arguments)}function l(){return(l=P(q().mark((function t(){var e,s,l;return q().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o.textContent="Сохранение...",s=n.value,t.next=4,(0,c.cd)(s);case 4:if(t.t1=e=t.sent,t.t0=null!==t.t1,!t.t0){t.next=8;break}t.t0=void 0!==e;case 8:if(!t.t0){t.next=12;break}t.t2=e,t.next=13;break;case 12:t.t2=!1;case 13:if(!1!==t.t2){t.next=18;break}return(0,a.UM)(u,n,n.dataset.errorMessage,k),o.textContent=i,t.abrupt("return",!1);case 18:return t.next=20,(0,c.gm)({name:r.value,link:s});case 20:if(l=t.sent,o.textContent=i,null!=l){t.next=24;break}return t.abrupt("return");case 24:f.prepend(B(l));case 25:case"end":return t.stop()}}),t)})))).apply(this,arguments)}u.addEventListener("submit",(function(e){return Y(e,s,t)})),e.addEventListener("click",(function(){u.reset(),(0,a.RC)(d,k),t=x()}))}function X(){i.textContent=L.name,u.textContent=L.about,s.style.backgroundImage="url('".concat(L.avatar,"')")}function Y(t,e,r){return W.apply(this,arguments)}function W(){return(W=P(q().mark((function t(e,r,n){var o;return q().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.next=3,r();case 3:if(t.t1=o=t.sent,t.t0=null!==t.t1,!t.t0){t.next=7;break}t.t0=void 0!==o;case 7:if(!t.t0){t.next=11;break}t.t2=o,t.next=12;break;case 11:t.t2=!0;case 12:if(!1!==t.t2){t.next=15;break}return t.abrupt("return");case 15:n instanceof Function&&n();case 16:case"end":return t.stop()}}),t)})))).apply(this,arguments)}X(),f.append.apply(f,A(C.map((function(t){return B(t)})))),J(),$(),V(),(0,a.F8)(k),e()}catch(K){e(K)}}),1)},763:(t,e,r)=>{r.d(e,{F8:()=>c,RC:()=>i,UM:()=>n});var n=function(t,e,r,n){var o=t.querySelector(".".concat(e.name,"_error"));e.classList.add(n.inputErrorClass),o.textContent=r,o.classList.add(n.errorClass)},o=function(t,e,r){var n=t.querySelector(".".concat(e.name,"_error"));e.classList.remove(r.inputErrorClass),n.textContent="",n.classList.remove(r.errorClass)},a=function(t,e){var r=Array.from(t.querySelectorAll(e.inputSelector)),a=t.querySelector(e.submitButtonSelector);r.forEach((function(c){c.addEventListener("input",(function(){!function(t,e,r){e.validity.patternMismatch?e.setCustomValidity(e.dataset.errorMessage):e.setCustomValidity(""),e.validity.valid?o(t,e,r):n(t,e,e.validationMessage,r)}(t,c,e),function(t,e){e.disabled=function(t){return t.some((function(t){return!t.validity.valid}))}(t)}(r,a)}))}))};function c(t){Array.from(document.querySelectorAll(t.formSelector)).forEach((function(e){a(e,t)}))}function i(t,e){var r=t.querySelector(e.formSelector),n=Array.from(r.querySelectorAll(e.inputSelector));r.querySelector(e.submitButtonSelector).disabled=!0,n.forEach((function(t){o(r,t,e)}))}}},a={};function c(t){var e=a[t];if(void 0!==e)return e.exports;var r=a[t]={exports:{}};return o[t](r,r.exports,c),r.exports}t="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",e="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=t=>{t&&t.d<1&&(t.d=1,t.forEach((t=>t.r--)),t.forEach((t=>t.r--?t.r++:t())))},c.a=(o,a,c)=>{var i;c&&((i=[]).d=-1);var u,s,l,f=new Set,p=o.exports,h=new Promise(((t,e)=>{l=e,s=t}));h[e]=p,h[t]=t=>(i&&t(i),f.forEach(t),h.catch((t=>{}))),o.exports=h,a((o=>{var a;u=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[t])return o;if(o.then){var a=[];a.d=0,o.then((t=>{c[e]=t,n(a)}),(t=>{c[r]=t,n(a)}));var c={};return c[t]=t=>t(a),c}}var i={};return i[t]=t=>{},i[e]=o,i})))(o);var c=()=>u.map((t=>{if(t[r])throw t[r];return t[e]})),s=new Promise((e=>{(a=()=>e(c)).r=0;var r=t=>t!==i&&!f.has(t)&&(f.add(t),t&&!t.d&&(a.r++,t.push(a)));u.map((e=>e[t](r)))}));return a.r?s:c()}),(t=>(t?l(h[r]=t):s(p),n(i)))),i&&i.d<0&&(i.d=0)},c.d=(t,e)=>{for(var r in e)c.o(e,r)&&!c.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},c.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),c(26)})();