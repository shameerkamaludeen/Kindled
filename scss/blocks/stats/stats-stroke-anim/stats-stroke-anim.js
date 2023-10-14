/* || Block - Stats stroke anim
   ========================================================================== */

import { breakpoints } from '../../../../scripts/variables.js';
import '../../../components/miscellaneous/js-opacity-zero/js-opacity-zero.js';

(function () {
  const statCtrElems = document.querySelectorAll('.stats-sa-stat-container');

  if (statCtrElems.length) {
    if (window.innerWidth < breakpoints.md) {
      statCtrElems[1].style.setProperty('--animate-delay', '.0s');
      statCtrElems[2].style.setProperty('--animate-delay', '.0s');
      statCtrElems[3].style.setProperty('--animate-delay', '.0s');
    } else if (window.innerWidth < breakpoints.lg) {
      statCtrElems[1].style.setProperty('--animate-delay', '.3s');
      statCtrElems[2].style.setProperty('--animate-delay', '.0s');
      statCtrElems[3].style.setProperty('--animate-delay', '.3s');
    }
    else {
      statCtrElems[1].style.setProperty('--animate-delay', '.3s');
      statCtrElems[2].style.setProperty('--animate-delay', '.6s');
      statCtrElems[3].style.setProperty('--animate-delay', '.9s');
    }
  }
}());