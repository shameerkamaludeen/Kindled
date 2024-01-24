/* || Block - Testimonials slider statistics
   ========================================================================== */

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import '../../../components/miscellaneous/js-opacity-zero/js-opacity-zero.js';

// init Swiper:
(function () {
  const swiper = new Swiper('.tm-ss-swiper', {
    modules: [Navigation],
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: ".tm-ss-swiper-btn-next",
      prevEl: ".tm-ss-swiper-btn-prev",
    },
  });
}());