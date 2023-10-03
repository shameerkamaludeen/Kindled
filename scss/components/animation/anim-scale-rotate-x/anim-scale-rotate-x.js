/* || Component - Anim scale rotate x
   ========================================================================== */

export default function animScaleRotateX() {
  const animElems = gsap.utils.toArray('.anim-scale-rotate-x');
  animElems.forEach(animElem => {
    gsap.from(animElem, {
      scrollTrigger: {
        trigger: animElem,
        start: 'top bottom-=100px'
      },
      rotateX: -90,
      scale: 0.8,
      duration: 1,
      ease: 'power2.out'
    });
  });
}