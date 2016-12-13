'use strict';

var aboutBlockHeight = document.querySelector(".about__block--text").clientHeight;
var aboutImage = document.querySelector(".about__block--image");

var advantagesBlockHeight = document.querySelector(".advantages__block--text").clientHeight;
var advantagesImage = document.querySelector(".advantages__block--image");

var menu = document.querySelector('.menu');

window.onload = function() {
  aboutImage.style.height = aboutBlockHeight + 'px';
  advantagesImage.style.height = advantagesBlockHeight + 'px';
}

window.onresize = function() {
  var aboutBlockHeightOnresize = document.querySelector(".about__block--text").clientHeight;
  var aboutImageOnresize = document.querySelector(".about__block--image");

  var advantagesBlockHeightOnresize = document.querySelector(".advantages__block--text").clientHeight;
  var advantagesImageOnresize = document.querySelector(".advantages__block--image");

  aboutImageOnresize.style.height = aboutBlockHeightOnresize + 'px';
  advantagesImageOnresize.style.height = advantagesBlockHeightOnresize + 'px';
}

//window.addEventListener('scroll', function(evt) {
  //var scrollFromTop = document.body.scrollTop;

  //if (scrollFromTop > 150) {
  //  menu.classList.add('menu--sticky');
//  } else {
//    menu.classList.remove('menu--sticky');
//  }
//});

$(function(){

  $('.js-set-hvalue').on('click', function(e) {
    var hfiled = $('.hvalue');
    hfiled.val($(this).data('hvalue'));
  });

  new WOW().init();
})

var humburger = document.querySelector(".menu__toggle");

humburger.addEventListener("click", function(event) {
  event.preventDefault();
  humburger.classList.toggle("menu__toggle--opened");
  menu.classList.toggle("menu--opened");
});
