/* || Component - Card lead icon
   ========================================================================== */

import { breakpoints } from '../../../../scripts/variables.js';
import '../../miscellaneous/js-opacity-zero/js-opacity-zero.js';

(function () {
  const cardLeadIconElems = document.querySelectorAll('.card-lead-icon');
  if (cardLeadIconElems.length) {
    if (window.innerWidth < breakpoints.lg) {
      cardLeadIconElems[1].style.setProperty('--animate-delay', '.0s');
      cardLeadIconElems[2].style.setProperty('--animate-delay', '.0s');
    } else {
      cardLeadIconElems[1].style.setProperty('--animate-delay', '.3s');
      cardLeadIconElems[2].style.setProperty('--animate-delay', '.6s');
    }
  }
}());