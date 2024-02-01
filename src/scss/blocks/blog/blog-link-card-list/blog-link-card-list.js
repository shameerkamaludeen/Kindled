/* || Block - Blog link card list
   ========================================================================== */

import { breakpoints } from '../../../../scripts/variables.js';
import '../../../components/miscellaneous/js-opacity-zero/js-opacity-zero.js';

(function () {
  const blogCardElems = document.querySelectorAll('.blog-lcl-card');
  if (blogCardElems.length) {
    if (window.innerWidth < breakpoints.lg) {
      blogCardElems[1].style.setProperty('--animate-delay', '.0s');
    } else {
      blogCardElems[1].style.setProperty('--animate-delay', '.3s');
    }
  }
}());