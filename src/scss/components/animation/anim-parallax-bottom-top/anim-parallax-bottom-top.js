/* || Component - anim-parallax-bottom-top (Animation parallax bottom top)
   ========================================================================== */

import { breakpoints } from '../../../../scripts/variables.js';

(function () {
  const parallaxElem = document.querySelector('.anim-parallax-bottom-top');
  if (typeof (parallaxElem) == 'undefined' || parallaxElem == null) {
    return;
  }

  // Additional hiehgt required to see the top of the content in bottom to top 
  // parallax animation 
  let additionalHeight = 100;
  if (window.innerWidth >= breakpoints.md) {
    additionalHeight = 300;
  }

  const parallaxContentElem = parallaxElem.querySelectorAll('.anim-pbt-content');
  gsap.to(parallaxContentElem, {
    scrollTrigger: {
      trigger: parallaxElem,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      invalidateOnRefresh: true
    },
    y: () => parallaxContentElem[0].offsetHeight - parallaxElem.offsetHeight + additionalHeight,
    ease: 'none'
  })
}());