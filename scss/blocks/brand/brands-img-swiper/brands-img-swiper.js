/* || Bloack - Brands img swiper
   ========================================================================== */
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'

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