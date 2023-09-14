/* Block - Projects cards scrollable
   ========================================================================== */

import { breakpoints, clientWidth } from "../../../../scripts/variables.js";

export default function addProjectCSEvents() {
  const projectElems = gsap.utils.toArray('.projects-cs-project');
  if (!projectElems.length || clientWidth < breakpoints.lg) {
    return;
  }
  gsap.to(projectElems, {
    scrollTrigger: {
      trigger: '.projects-cs-ctr',
      pin: true,
      scrub: 1,
      start: 'center center',
      end: () => '+=' + (projectElems[0].offsetWidth * projectElems.length)
    },
    xPercent: -100 * (projectElems.length - 2),
    ease: 'none'
  });
}