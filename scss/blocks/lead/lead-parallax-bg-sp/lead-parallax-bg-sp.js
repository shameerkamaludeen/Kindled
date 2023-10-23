/* || Block - Lead parallax bg sp (sides padding)
   ========================================================================== */

(function () {
  const parallaxElem = document.querySelector('.lead-pbg-sp-parallax');
  if (typeof (parallaxElem) == 'undefined' || parallaxElem == null) {
    return;
  }

  const parallaxImageElems = parallaxElem.querySelectorAll('.lead-pbg-sp-parallax-img');
  gsap.to(parallaxImageElems, {
    scrollTrigger: {
      trigger: parallaxElem,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      invalidateOnRefresh: true
    },
    y: () => parallaxImageElems[0].offsetHeight - parallaxElem.offsetHeight,
    ease: 'none'
  })
}());