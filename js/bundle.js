!function(e){var t={};function o(l){if(t[l])return t[l].exports;var n=t[l]={i:l,l:!1,exports:{}};return e[l].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,l){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(o.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(l,n,function(t){return e[t]}.bind(null,n));return l},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){e.exports=o(1)},function(e,t,o){"use strict";o.r(t);o(2);var l=window.innerWidth,n=document.querySelectorAll(".hidden"),d=new Swiper(".swiper__brands",{slidesPerView:"auto",spaceBetween:10,direction:"horizontal",pagination:{el:".swiper-pagination__brands"}}),c=new Swiper(".swiper__view",{slidesPerView:"auto",spaceBetween:10,direction:"horizontal",pagination:{el:".swiper-pagination__view"}}),s=new Swiper(".swiper__prices",{slidesPerView:"auto",spaceBetween:10,direction:"horizontal",pagination:{el:".swiper-pagination__prices"}});if(l>=768){for(var a=0;a<n.length;a++)n[a].classList.remove("hidden");document.querySelector(".description__item-text");d.destroy(),c.destroy(),s.destroy()}var r=[document.querySelector(".mobile__button-close"),document.querySelector(".modal__call-btn_close"),document.querySelector(".modal__feedback-btn_close")];console.log(r.length);var i=document.querySelector(".button__burger"),_=document.querySelector(".button__call"),u=document.querySelector(".button__chat"),m=document.querySelector(".modal__menu"),b=document.querySelector(".modal__call"),L=document.querySelector(".modal__feedback"),p=document.querySelector("body"),v=document.querySelector(".base");i.addEventListener("click",(function(){m.classList.contains("modal__menu-hidden")&&(m.classList.remove("modal__menu-hidden"),p.classList.add("modal__block"),v.classList.add("modal__open"))})),document.querySelector(".mobile__button-close").addEventListener("click",(function(){m.classList.add("modal__menu-hidden"),p.classList.remove("modal__block"),v.classList.remove("modal__open")})),_.addEventListener("click",(function(){b.classList.contains("modal__call-hidden")&&(b.classList.remove("modal__call-hidden"),p.classList.add("modal__block"),v.classList.add("modal__open"))})),document.querySelector(".modal__call-btn_close").addEventListener("click",(function(){b.classList.add("modal__call-hidden"),p.classList.remove("modal__block"),v.classList.remove("modal__open"),document.querySelector(".modal__blur").classList.remove("modal__blur--visible"),m.classList.length<2&&(p.classList.add("modal__block"),v.classList.add("modal__open"))})),u.addEventListener("click",(function(){L.classList.contains("modal__feedback-hidden")&&(L.classList.remove("modal__feedback-hidden"),p.classList.add("modal__block"),v.classList.add("modal__open"))})),document.querySelector(".modal__feedback-btn_close").addEventListener("click",(function(){L.classList.add("modal__feedback-hidden"),p.classList.remove("modal__block"),v.classList.remove("modal__open"),document.querySelector(".modal__blur").classList.remove("modal__blur--visible"),m.classList.length<2&&(p.classList.add("modal__block"),v.classList.add("modal__open"))})),document.querySelector(".mobile__button-call").addEventListener("click",(function(){b.classList.contains("modal__call-hidden")&&(document.querySelector(".modal__blur").classList.add("modal__blur--visible"),b.classList.remove("modal__call-hidden"),p.classList.add("modal__block"),v.classList.add("modal__open"))})),document.querySelector(".mobile__button-chat").addEventListener("click",(function(){L.classList.contains("modal__feedback-hidden")&&(document.querySelector(".modal__blur").classList.add("modal__blur--visible"),L.classList.remove("modal__feedback-hidden"),p.classList.add("modal__block"),v.classList.add("modal__open"))})),document.querySelector(".modal__blur").addEventListener("click",(function(){b.classList.add("modal__call-hidden"),L.classList.add("modal__feedback-hidden"),p.classList.remove("modal__block"),v.classList.remove("modal__open"),document.querySelector(".modal__blur").classList.remove("modal__blur--visible")}));var y=document.querySelector(".repair__btn_show"),f=document.querySelector(".repair__btn_show > span"),S=document.querySelector(".repair__btn_img"),h=document.querySelector(".swiper__brands");y.addEventListener("click",(function(){"Показать все"==f.innerHTML?(f.innerHTML="Скрыть все",S.classList.add("rotate"),h.style.height="100%"):(f.innerHTML="Показать все",S.classList.remove("rotate"),h.style.height="160px")}));var q=document.querySelector(".view_btn"),k=document.querySelector(".view_btn > span"),w=document.querySelector(".view_img"),g=document.querySelector(".swiper__view");q.addEventListener("click",(function(){"Показать все"==k.innerHTML?(k.innerHTML="Скрыть все",w.classList.add("rotate"),g.style.height="100%"):(k.innerHTML="Показать все",w.classList.remove("rotate"),g.style.height="160px")}));var x=document.querySelector(".description__item-btn"),M=document.querySelector(".description__item-btn > span"),E=document.querySelector(".readmore"),H=document.querySelector(".description__overflow");x.addEventListener("click",(function(){"Читать далее"==M.innerHTML?(M.innerHTML="Скрыть все",E.classList.add("rotate"),H.style.maxHeight="100%"):(M.innerHTML="Читать далее",E.classList.remove("rotate"),H.style.maxHeight=768==l?"125px":320==l?"100px":"100%")}))},function(e,t,o){}]);
//# sourceMappingURL=bundle.js.map