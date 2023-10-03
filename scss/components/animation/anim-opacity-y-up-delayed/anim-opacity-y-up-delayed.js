/* || Component - Anim opacity y up delayed
   ========================================================================== */

export default function animOpacityYUpDelayed() {
  const animElems = gsap.utils.toArray('.anim-opacity-y-up-delayed');
  animElems.forEach(animElem => {
    gsap.from(animElem, {
      scrollTrigger: {
        trigger: animElem,
        start: 'top bottom-=100px'
      },
      y: 100,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.out',
      delay: 2.5
    });
  });
}