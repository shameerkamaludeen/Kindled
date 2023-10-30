/* || Block - Team profiles card anim
   ========================================================================== */

import { breakpoints } from '../../../../scripts/variables.js';
import '../../../components/image/image-foreground-rt/image-foreground-rt.js';
import '../../../components/miscellaneous/js-opacity-zero/js-opacity-zero.js';
import '../../../components/animation/anim-gsap/anim-gsap.js';

(function () {
  const profileElems = document.querySelectorAll('.team-pca-profile');
  if (profileElems.length) {
    if (window.innerWidth < breakpoints.md) {
      profileElems[1].style.setProperty('--animate-delay', '.0s');
      profileElems[2].style.setProperty('--animate-delay', '.0s');
      profileElems[3].style.setProperty('--animate-delay', '.0s');
      profileElems[4].style.setProperty('--animate-delay', '.0s');
      profileElems[5].style.setProperty('--animate-delay', '.0s');
    } else if (window.innerWidth < breakpoints.xl) {
      profileElems[1].style.setProperty('--animate-delay', '.3s');
      profileElems[2].style.setProperty('--animate-delay', '.0s');
      profileElems[3].style.setProperty('--animate-delay', '.3s');
      profileElems[4].style.setProperty('--animate-delay', '.0s');
      profileElems[5].style.setProperty('--animate-delay', '.3s');
    } else {
      profileElems[1].style.setProperty('--animate-delay', '.3s');
      profileElems[2].style.setProperty('--animate-delay', '.6s');
      profileElems[3].style.setProperty('--animate-delay', '.0s');
      profileElems[4].style.setProperty('--animate-delay', '.3s');
      profileElems[5].style.setProperty('--animate-delay', '.6s');
    }
  }
}());



