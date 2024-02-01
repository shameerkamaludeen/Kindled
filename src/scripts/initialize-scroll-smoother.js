// Isolated this intialization because both 'Scroll smoother gsap' and 'Scroll 
// to top btn anim' components require this object

import { breakpoints } from "../scripts/variables.js"

(function () {
  if (window.innerWidth < breakpoints.lg) {
    return;
  }

  gsap.registerPlugin(ScrollSmoother);

  window.smoother = ScrollSmoother.create({
    wrapper: 'scroll-smoother-gsap',
    content: '.ss-gsap-content',
    effects: false,
    normalizeScroll: true,
    smooth: 2
  });
}());