/*
 * Koenig Editor - Gallery
 * ------------
 */
var images=document.querySelectorAll(".kg-gallery-image img");images.forEach(function(e){var a=e.closest(".kg-gallery-image"),t=e.attributes.width.value/e.attributes.height.value;a.style.flex=t+" 1 0%"});

/*
 * Reframe
 * ------------
 * Version : 2.2.2
 * Website : dollarshaveclub.github.io/reframe.js
 * Repo    : github.com/dollarshaveclub/reframe.js
 * Author  : Jeff Wainwright (@yowainwright)
 * License : MIT
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.reframe=t()}(this,function(){"use strict";return function(e,t){var i="string"==typeof e?document.querySelectorAll(e):e,n=t||"js-reframe";"length"in i||(i=[i]);for(var r=0;r<i.length;r+=1){var o=i[r];if(-1!==o.className.split(" ").indexOf(n))return;var d=o.getAttribute("height"),f=o.getAttribute("width");if(f.indexOf("%")>-1||o.style.width.indexOf("%")>-1)return;var a=(d||o.offsetHeight)/(f||o.offsetWidth)*100,s=document.createElement("div");s.className=n;var l=s.style;l.position="relative",l.width="100%",l.paddingTop=a+"%";var u=o.style;u.position="absolute",u.width="100%",u.height="100%",u.left="0",u.top="0",o.parentNode.insertBefore(s,o),o.parentNode.removeChild(o),s.appendChild(o)}}});

/* Custom settings for Reframe */
reframe('.kg-embed-card iframe, .post-wrap iframe');