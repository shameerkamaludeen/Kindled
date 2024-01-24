/* || Component - Anim opacity y up
   ========================================================================== */

export default function animOpacityYUp() {
  const animElems = gsap.utils.toArray('.anim-opacity-y-up');
  animElems.forEach(animElem => {
    gsap.from(animElem, {
      scrollTrigger: {
        trigger: animElem,
        start: 'top bottom-=100px'
      },
      y: 100,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.out'
    });
  });
}