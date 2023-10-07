/* || Component - Banner roll color change
   ========================================================================== */

(function () {
  const bannerRCCWrapperElem = document.querySelector('.banner-rcc-wr');

  if (typeof (bannerRCCWrapperElem) == 'undefined' || bannerRCCWrapperElem == null) {
    return;
  }

  let bannerRCCItemsCtrElem = bannerRCCWrapperElem.querySelectorAll('.banner-rcc-items-ctr');

  gsap.to(bannerRCCItemsCtrElem, {
    scrollTrigger: {
      trigger: '.banner-rcc-wr',
      toggleActions: 'play pause resume pause',
      start: 'top bottom',
      end: 'bottom top'
    },
    xPercent: -100,
    ease: 'none',
    duration: 25,
    repeat: -1
  });
}());