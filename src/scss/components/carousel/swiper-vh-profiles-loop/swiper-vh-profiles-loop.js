/* || Component - swiper vh (veriable height) profiles loop
   ========================================================================== */

import Swiper from 'swiper';
import '../../image/image-foreground-rt/image-foreground-rt.js';

(function () {
   const swiper = new Swiper('.swiper-vh-profiles-loop', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: {
         576: {
            slidesPerView: 1.5,
            spaceBetween: 30,
         },
         768: {
            slidesPerView: 2.5,
            spaceBetween: 30
         },
         992: {
            slidesPerView: 2.5,
            spaceBetween: 50
         },
         1024: {
            slidesPerView: 3,
            spaceBetween: 50
         },
         1200: {
            slidesPerView: 4,
            spaceBetween: 60,
            centeredSlides: true,
         },
         1500: {
            slidesPerView: 5,
            spaceBetween: 60,
            centeredSlides: true,
         },
      }
   })
}());