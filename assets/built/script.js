!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);r(1);function n(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var i=document.querySelectorAll(".kg-gallery-image img"),c=window.location.href.replace("#subscribe","");i.forEach((function(e){var t=e.closest(".kg-gallery-image"),r=e.attributes.width.value/e.attributes.height.value;t.style.flex="".concat(r," 1 0%")}));var a=document.querySelectorAll(".subscribe"),u=document.querySelector(".modal"),l=document.querySelector(".modal .close");"subscribe"===window.location.hash.substr(1)&&u.classList.remove("invisible"),l.addEventListener("click",(function(){u.classList.add("invisible"),window.history.pushState("","",c)})),[].forEach.call(a,(function(e){e.addEventListener("click",(function(){u.classList.remove("invisible")}))})),document.onkeydown=function(e){27===(e=e||window.event).keyCode&&(u.classList.add("invisible"),window.history.pushState("","",c))};var s=document.querySelector(".notification"),d=document.querySelector(".notification .close"),f=window.location.search;"subscribe"===new URLSearchParams(f).get("action")&&s.classList.remove("hidden"),d.addEventListener("click",(function(){s.classList.add("hidden"),window.history.pushState("","",c)}));var y=document.querySelectorAll("article a, main h1");[].forEach.call(y,(function(e){e.innerHTML=e.innerHTML.replace(" ?","&nbsp;?")})),fetch("https://store.zapier.com/api/records?secret=GodoRihdRuwd1~").then((function(e){return e.json().then((function(e){var t=e.subscribers;return n(document.querySelectorAll(".subscribers")).forEach((function(e){e.innerHTML=parseInt(t,10)}))}))})),$(document).ready((function(){$(".slider").slick({dots:!0,arrows:!1,adaptiveHeight:!0,autoplay:!0,autoplaySpeed:5e3})}))},function(e,t,r){}]);