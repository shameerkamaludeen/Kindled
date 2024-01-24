/* || Block - tm-swiper-cards-resp-ct (Testimonials swiper cards responsive controls top)
   ========================================================================== */

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import '../../../components/animation/anim-gsap/anim-gsap.js';
import '../../../components/miscellaneous/js-opacity-zero/js-opacity-zero.js';
import '../../../components/animation/anim-forward-flip-in-x/anim-forward-flip-in-x.js';


(function () {
  const swiper = new Swiper('.tm-scr-ct-swiper', {
    modules: [Navigation],
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '.tm-scr-ct-swiper-btn-next',
      prevEl: '.tm-scr-ct-swiper-btn-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      1400: {
        slidesPerView: 2,
        spaceBetween: 40
      }
    }
  });
}());