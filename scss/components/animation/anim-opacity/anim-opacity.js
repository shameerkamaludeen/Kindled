/* || Component - Anim opacity
   ========================================================================== */

export default function animOpacity() {
  const animElems = gsap.utils.toArray('.anim-opacity');
  animElems.forEach(animElem => {
    gsap.from(animElem, {
      scrollTrigger: {
        trigger: animElem,
        start: 'top bottom-=150px'
      },
      opacity: 0,
      duration: 1,
      ease: 'power2.out'
    });
  });
}