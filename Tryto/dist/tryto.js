!function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e){!function(t,e){var o,n=t,r=e,i=/(^\s*)|(\s*$)/g;(o=function(t){return new o.prototype.init(t)}).prototype={constructor:o,length:0,splice:[].splice,init:function(t){var n=this;if(!t)return this;!function(t){var r=t.toString().replace(i,"");if("string"==typeof t){var u=e.querySelector(r);n.self_=u,n.self_.prototype=o.prototype}else if("function"==typeof t)o.ready(t)}(t);return this}},o.prototype.init.prototype=o.prototype,o.prototype.has=function(t){if(t){t.toString().replace(i,"");var n=this.self_.localName+" "+t,r=e.querySelector(n);return!!r&&(this.selfc_=r,this.selfc_.prototype=o.prototype,this)}return this},o.prototype.test=function(){this.selfc_?console.log("123"):console.log("456"),console.log(this.selfc_)},o.prototype.find=o.prototype.has,o.ready=function(t){r.addEventListener("DOMContentLoaded",function(){t&&t()},!1),r.removeEventListener("DOMContentLoaded",t,!0)},n.$=o}(window,document)}]);