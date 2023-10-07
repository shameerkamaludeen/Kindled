/* || Component - Anima gsap
   ========================================================================== */

(function () {
  const animElems = gsap.utils.toArray('.anim-gsap');
  animElems.forEach(animElem => {
    const dataAnimation = animElem.getAttribute('data-animation-offset');
    let start = 'top bottom-=150px';
    if (dataAnimation != null && dataAnimation != '') {
      start = 'top bottom-=' + dataAnimation + 'px';
    }

    gsap.from(animElem, {
      scrollTrigger: {
        trigger: animElem,
        start: start,
        onEnter: () => animElem.classList.add(animElem.getAttribute('data-animation'))
      }
    });
  });
}());