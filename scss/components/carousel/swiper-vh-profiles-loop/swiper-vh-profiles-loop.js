/* || Component - swiper vh (veriable height) profiles loop
   ========================================================================== */

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'
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
            spaceBetween: 10,
         },
         768: {
            slidesPerView: 2.5,
            spaceBetween: 20
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
      }
   })
}());