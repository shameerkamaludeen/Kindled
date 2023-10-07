/* Block - Projects cards scrollable
   ========================================================================== */

import { breakpoints } from "../../../../scripts/variables.js";

(function () {
  const projectElems = gsap.utils.toArray('.projects-cs-project');
  if (!projectElems.length || window.innerWidth < breakpoints.lg) {
    return;
  }
  gsap.to(projectElems, {
    scrollTrigger: {
      trigger: '.projects-cs-ctr',
      pin: true,
      scrub: 1,
      start: 'center center',
      end: () => '+=' + (projectElems[0].offsetWidth * projectElems.length),
      refreshPriority: 1
    },
    xPercent: -101 * (projectElems.length - 2),
    ease: 'none'
  });
}());