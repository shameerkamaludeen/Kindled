/* || Component - Accordion anim fade in up
   ========================================================================== */

import '../../../components/miscellaneous/js-opacity-zero/js-opacity-zero.js';
import '../../../components/animation/anim-gsap/anim-gsap.js';

(function () {
  const accordionElems = document.querySelectorAll('#accAnimFIU .accordion-item');

  if (accordionElems.length) {
    accordionElems[1].style.setProperty('--animate-delay', '.2s');
    accordionElems[2].style.setProperty('--animate-delay', '.4s');
  }
}());