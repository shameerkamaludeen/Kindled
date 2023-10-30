/* || Block - tm-swiper-cards-resp-ct (Testimonials swiper cards responsive controls top)
   ========================================================================== */

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';
import '../../../components/animation/anim-gsap/anim-gsap.js';
import '../../../components/miscellaneous/js-opacity-zero/js-opacity-zero.js';
import '../../../components/animation/anim-forward-flip-in-x/anim-forward-flip-in-x.js';


(function () {
  const swiper = new Swiper('.tm-scr-ct-swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.tm-scr-ct-swiper-btn-next',
      prevEl: '.tm-scr-ct-swiper-btn-prev',
    },
  });
}());