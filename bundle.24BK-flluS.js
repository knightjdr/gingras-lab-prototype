"use strict";var isVisible=function(e){if(!e)return!1;var n=e.getBoundingClientRect();return Boolean(0<window.getComputedStyle(e).getPropertyValue("opacity")&&(n.height||n.width))},clickListener=function(e){var n=document.querySelector(".navbar__menu");!n.contains(e.target)&&isVisible(n)&&(removeListeners(),n.classList.remove("open"))},escListener=function(e){var n=document.querySelector(".navbar__menu");"Escape"===e.key&&isVisible(n)&&(removeListeners(),n.classList.remove("open"))},addListeners=function(){window.addEventListener("click",clickListener),window.addEventListener("keydown",escListener)},removeListeners=function(){window.removeEventListener("click",clickListener),window.removeEventListener("keydown",escListener)};document.querySelector(".navbar__menu-button").addEventListener("click",function(){var e=document.querySelector(".navbar__menu");e.classList.contains("open")?(removeListeners(),e.classList.remove("open")):(addListeners(),e.classList.add("open"))});