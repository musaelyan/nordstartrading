'use strict';

var aboutBlockHeight = document.querySelector(".about__block--text").clientHeight;
var aboutImage = document.querySelector(".about__block--image");

var advantagesBlockHeight = document.querySelector(".advantages__block--text").clientHeight;
var advantagesImage = document.querySelector(".advantages__block--image");

console.log(aboutBlockHeight);
console.log(aboutImage);


window.onload = (function() {
  aboutImage.style.height = aboutBlockHeight + 'px';
  advantagesImage.style.height = advantagesBlockHeight + 'px';
})();

window.addEventListener('resize', function(){
  aboutImage.style.height = aboutBlockHeight + 'px';
  advantagesImage.style.height = advantagesBlockHeight + 'px';
}, true);
