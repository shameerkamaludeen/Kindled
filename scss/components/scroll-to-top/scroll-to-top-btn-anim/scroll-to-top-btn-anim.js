/* || Component - Scroll to top btn anim
   ========================================================================== */

// 1. Dependencies
// scroll-smoother-gsap
// 2. Notes:
// ScrollSmoother object also require in 'scroll-smoother-gsap' component
import { breakpoints } from "../../../../scripts/variables.js";

(function () {
  const scrollBtnElem = document.querySelector('.scroll-to-top-btn-anim');
  if (typeof (scrollBtnElem) == 'undefined' || scrollBtnElem == null || window.innerWidth < breakpoints.lg) {
    return;
  }

  let smoother = ScrollSmoother.create({
    wrapper: 'scroll-smoother-gsap',
    content: '.ss-gsap-content',
    effects: false,
    normalizeScroll: true,
    smooth: 2
  });

  scrollBtnElem.addEventListener('click', () => {
    gsap.to(smoother, {
      scrollTop: smoother.offset("main", "top top"),
      duration: 1
    });
  });

  window.addEventListener('scroll', () => {
    if ((document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight)) {
      if (!scrollBtnElem.classList.contains('scroll-tt-ba-active')) {
        scrollBtnElem.classList.add('scroll-tt-ba-active');
      }
    } else if (scrollBtnElem.classList.contains('scroll-tt-ba-active')) {
      scrollBtnElem.classList.remove('scroll-tt-ba-active');
    }
  });

}());