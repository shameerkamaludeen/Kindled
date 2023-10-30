/* || Block - services-resp-cnt-img-pin (Services-responsive-content-image-pinning)
   ========================================================================== */

import { breakpoints } from '../../../../scripts/variables.js';

(function () {
  if (window.innerWidth < breakpoints.lg) {
    return;
  }

  gsap.utils.toArray('.sr-cip-service-ctr').forEach((element, index, array) => {
    const contentCtrElems = element.querySelectorAll('.sr-cip-content-ctr');
    gsap.from(contentCtrElems, {
      scrollTrigger: {
        trigger: contentCtrElems[0],
        start: 'top bottom-=100px',
        end: 'top center-=200px',
        scrub: true
      },
      opacity: 0,
      ease: 'none'
    });

    const imageWrapperElem = element.querySelector('.sr-cip-img-wr');
    // Pinning (The condition used to skip the last one from pinning as it is not required)
    if (index < array.length - 1) {
      ScrollTrigger.create({
        trigger: imageWrapperElem,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
      });
    }

    // Skipping disabling of the first one as it is not required
    if (index == 0) {
      ScrollTrigger.create({
        trigger: imageWrapperElem,
        start: 'top top+=1px',
        end: 'bottom top-=1px',
        onLeave: () => {
          gsap.set(imageWrapperElem, { opacity: 0 });
        },
        onEnterBack: () => {
          gsap.set(imageWrapperElem, { opacity: 1 });
        }
      });
    } else {
      gsap.set(imageWrapperElem, { opacity: 0 })
      ScrollTrigger.create({
        trigger: imageWrapperElem,
        start: 'top top+=1px',
        end: 'bottom top-=1px',
        onEnter: () => {
          gsap.set(imageWrapperElem, { opacity: 1 });
        },
        onLeave: () => {
          gsap.set(imageWrapperElem, { opacity: 0 });
        },
        onEnterBack: () => {
          gsap.set(imageWrapperElem, { opacity: 1 });
        },
        onLeaveBack: () => {
          gsap.set(imageWrapperElem, { opacity: 0 });
        }
      });
    }
  });
}());