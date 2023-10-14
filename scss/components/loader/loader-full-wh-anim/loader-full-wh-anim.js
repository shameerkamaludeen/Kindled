/* || Component - loader full wh anim
   ========================================================================== */

import { splitText } from "../../../../scripts/utilities.js";

(function () {
  const splitTextElem = document.querySelector('.loader-fw-ha-st');
  if (typeof (splitTextElem) == 'undefined' || splitTextElem == null) {
    return;
  }
  document.querySelector('.loader-full-wh-anim').classList.remove('d-none');

  splitText(splitTextElem);
  // This is to fix the split and style apply delay 
  splitTextElem.classList.add('loader-fw-ha-st-op-1');

  const loaderTextAnim = gsap.to('.loader-fw-ha-st .st-letter', {
    opacity: 0,
    duration: 1,
    stagger: {
      each: 0.1,
      repeat: -1,
      yoyo: true
    }
  });

  window.addEventListener('load', () => {
    gsap.to('.loader-full-wh-anim', {
      yPercent: -100,
      delay: 2,
      duration: 1,
      ease: 'power3.out',
      onComplete: () => { loaderTextAnim.kill(); }
    });
  });
}());