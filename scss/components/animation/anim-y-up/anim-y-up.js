/* || Component - Anim y up
   ========================================================================== */

export default function animYUp() {
  const animElems = gsap.utils.toArray('.anim-y-up');
  animElems.forEach(animElem => {
    gsap.from(animElem, {
      scrollTrigger: {
        trigger: animElem,
        start: 'top bottom-=100px'
      },
      y: 200,
      duration: 1,
      ease: 'power2.out'
    });
  });
}