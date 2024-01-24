/* || Bloack - Brands img swiper
   ========================================================================== */

import(/* webpackChunkName: "./scripts/swiper" */ 'swiper');
import Swiper from 'swiper';

// init Swiper:
(function () {
  const swiper = new Swiper('.brands-is-swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    breakpoints: {
      576: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 5,
      },
    }
  })
}());