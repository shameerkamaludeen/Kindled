/* || Component - Anim swipe in tb
   ========================================================================== */

export default function animSwipInTB() {
  const animElems = gsap.utils.toArray('.anim-swipe-in-tb');
  animElems.forEach(animElem => {
    gsap.from(animElem, {
      scrollTrigger: {
        trigger: animElem,
        start: 'top bottom-=100px',
        onEnter: () => { animElem.classList.add('anim-si-tb-animate'); }
      }
    });
  });
}