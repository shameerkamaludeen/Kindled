/* || Block - Testimonials slider statistics
   ========================================================================== */

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'

export default function addTMSliderStatEvents() {
  const swiper = new Swiper('.tm-ss-swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}