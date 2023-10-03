/* || Component - Anim y up delayed
   ========================================================================== */

export default function animYUpDelayed() {
  const animElems = gsap.utils.toArray('.anim-y-up-delayed');
  animElems.forEach(animElem => {
    gsap.from(animElem, {
      scrollTrigger: {
        trigger: animElem,
        start: 'top bottom-=100px'
      },
      y: 200,
      duration: 1,
      ease: 'power2.out',
      delay: 2.5
    });
  });
}