/* || Block - Lead parallax bg sp (sides padding)
   ========================================================================== */

import '../../../components/animation/anim-gsap/anim-gsap.js';
import '../../../components/miscellaneous/js-opacity-zero/js-opacity-zero.js';
import '../../../components/animation/anim-forward-flip-in-x/anim-forward-flip-in-x.js';

(function () {
  const parallaxElem = document.querySelector('.lead-pbg-sp-parallax');
  if (typeof (parallaxElem) == 'undefined' || parallaxElem == null) {
    return;
  }

  const parallaxImageElems = parallaxElem.querySelectorAll('.lead-pbg-sp-parallax-img');
  gsap.to(parallaxImageElems, {
    scrollTrigger: {
      trigger: parallaxElem,
      start: 'top bottom',
      end: 'top top',
      scrub: true,
      invalidateOnRefresh: true
    },
    y: () => parallaxImageElems[0].offsetHeight - parallaxElem.offsetHeight,
    ease: 'none'
  })
}());