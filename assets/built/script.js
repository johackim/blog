!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);function r(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var o=document.querySelectorAll(".kg-gallery-image img"),c=window.location.href.replace("#subscribe","");o.forEach((function(e){var t=e.closest(".kg-gallery-image"),n=e.attributes.width.value/e.attributes.height.value;t.style.flex="".concat(n," 1 0%")}));var s=document.querySelectorAll(".subscribe"),u=document.querySelector(".modal");if(u){var a=document.querySelector(".modal .close");"subscribe"===window.location.hash.substr(1)&&u.classList.remove("invisible"),a.addEventListener("click",(function(){u.classList.add("invisible"),window.history.pushState("","",c)})),[].forEach.call(s,(function(e){e.addEventListener("click",(function(){u.classList.remove("invisible")}))})),document.onkeydown=function(e){27===(e=e||window.event).keyCode&&(u.classList.add("invisible"),window.history.pushState("","",c))}}var l=document.querySelector(".notification"),d=document.querySelector(".notification .close"),f=window.location.search,m=new URLSearchParams(f),y=m.get("action");"subscribe"===y&&(l.classList.remove("hidden"),"true"===m.get("success")?document.querySelector(".notification-subscribe-success").classList.remove("hidden"):document.querySelector(".notification-subscribe-failed").classList.remove("hidden")),"signin"===y&&(l.classList.remove("hidden"),"true"===m.get("success")?document.querySelector(".notification-signin-success").classList.remove("hidden"):document.querySelector(".notification-signin-failed").classList.remove("hidden")),"signup"===y&&(l.classList.remove("hidden"),"true"===m.get("success")?document.querySelector(".notification-signup-success").classList.remove("hidden"):document.querySelector(".notification-signup-failed").classList.remove("hidden")),d.addEventListener("click",(function(){l.classList.add("hidden"),window.history.pushState("","",c)})),"success"===m.get("stripe")&&(document.querySelector(".notification-checkout-success").classList.remove("hidden"),l.classList.remove("hidden"));var b=document.querySelectorAll("article a, main h1");[].forEach.call(b,(function(e){e.innerHTML=e.innerHTML.replace(" ?","&nbsp;?")}));var h=document.querySelector(".menu"),v=document.querySelector("#options-menu");v&&(v.addEventListener("click",(function(){h.classList.toggle("hidden")})),window.addEventListener("click",(function(e){document.querySelector("#options-menu").contains(e.target)||h.classList.add("hidden")}))),fetch("https://store.zapier.com/api/records?secret=GodoRihdRuwd1~").then((function(e){return e.json().then((function(e){var t=e.subscribers;return r(document.querySelectorAll(".subscribers")).forEach((function(e){e.innerHTML=parseInt(t,10)}))}))})),$(document).ready((function(){$(".slider").slick({dots:!0,arrows:!1,adaptiveHeight:!0,autoplay:!0,autoplaySpeed:5e3})}))},function(e,t,n){}]);