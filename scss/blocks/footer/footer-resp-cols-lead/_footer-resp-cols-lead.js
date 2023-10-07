/* || Block - Footer responsive cols lead
   ========================================================================== */

(function () {
  const footerElems = document.querySelectorAll('.footer-resp-cols-lead');
  gsap.set(footerElems[0], { yPercent: -50 })
  gsap.to(footerElems, {
    scrollTrigger: {
      trigger: 'main',
      start: 'bottom bottom',
      end: '+=50%',
      scrub: true
    },
    yPercent: 0,
    ease: 'none'
  });
}());