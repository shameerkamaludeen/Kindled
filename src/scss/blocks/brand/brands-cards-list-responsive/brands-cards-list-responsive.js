/* || Block - Brands card list responsive
   ========================================================================== */

import { breakpoints } from '../../../../scripts/variables.js';
import '../../../components/miscellaneous/js-opacity-zero/js-opacity-zero.js';
import '../../../components/animation/anim-gsap/anim-gsap.js';
import '../../../components/card/card-hover-swap-elem/card-hover-swap-elem.js';

(function () {
  const cardElems = document.querySelectorAll('.card-hover-swap-elem');

  if (!cardElems.length) {
    return;
  }
  if (window.innerWidth < breakpoints.md) {
    cardElems[0].style.setProperty('--animate-delay', '.0s');
    cardElems[1].style.setProperty('--animate-delay', '.2s');
    cardElems[2].style.setProperty('--animate-delay', '.0s');
    cardElems[3].style.setProperty('--animate-delay', '.2s');
    cardElems[4].style.setProperty('--animate-delay', '.0s');
    cardElems[5].style.setProperty('--animate-delay', '.2s');
  }
  else {
    cardElems[0].style.setProperty('--animate-delay', '.0s');
    cardElems[1].style.setProperty('--animate-delay', '.2s');
    cardElems[2].style.setProperty('--animate-delay', '.4s');
    cardElems[3].style.setProperty('--animate-delay', '.0s');
    cardElems[4].style.setProperty('--animate-delay', '.2s');
    cardElems[5].style.setProperty('--animate-delay', '.4s');
  }
}());