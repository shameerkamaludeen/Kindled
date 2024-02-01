/* Block - portfolio-metro-anim-filter (Portfolio metro animation and filter)
   ========================================================================== */

import '../../../components/animation/anim-gsap/anim-gsap.js';
import '../../../components/animation/anim-swipe-in-lr-zb/anim-swipe-in-lr-zb.js';

(function () {
  const portfolioCtrElem = document.querySelector('.pf-maf-portfolio-ctr');
  if (typeof (portfolioCtrElem) == 'undefined' || portfolioCtrElem == null) {
    return;
  }
  // Initialize Isotop
  let portfolioIso = new Isotope(portfolioCtrElem, {
    itemSelector: '.pf-maf-portfolio-wr',
  });

  // Filter change event
  document.querySelectorAll('.pf-maf-radio').forEach(element => {
    element.addEventListener('change', function () {
      portfolioIso.arrange({ filter: this.value });
      ScrollTrigger.refresh(true);
    });
  });
}());
