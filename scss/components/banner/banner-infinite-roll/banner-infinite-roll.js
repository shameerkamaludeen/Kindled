/* || Component - Banner infinite roll
   ========================================================================== */

(function () {
   const bannerElems = gsap.utils.toArray('.banner-infinite-roll');
   bannerElems.forEach(element => {
      const isClone = element.getAttribute('data-clone') ? true : false;
      const rollSpeed = element.getAttribute('data-roll-speed') ? element.getAttribute('data-roll-speed') : 20;
      const isMultipleRolls = element.getAttribute('data-multiple-rolls') ? true : false;
      if (element.getAttribute('data-mouse-trigger')) {
         const animation = gsap.to(getAnimationElems(element, isClone, isMultipleRolls), {
            xPercent: -100,
            ease: 'none',
            duration: rollSpeed,
            repeat: -1,
            paused: true
         });

         element.addEventListener('mouseenter', () => {
            animation.resume();
         });

         element.addEventListener('mouseleave', () => {
            animation.pause();
         });
      } else if (element.getAttribute('data-scroll-trigger')) {
         gsap.to(getAnimationElems(element, isClone), {
            scrollTrigger: {
               trigger: element,
               toggleActions: "play pause resume pause",
            },
            xPercent: -100,
            ease: 'none',
            duration: rollSpeed,
            repeat: -1
         })
      }
   });

   function getAnimationElems(element, isClone, isMultipleRolls) {
      if (isMultipleRolls && isClone) {
         const rollWrapperElems = element.querySelectorAll('.banner-ir-roll-wr');
         rollWrapperElems.forEach(wrapperElem => {
            const itemsCtrElem = wrapperElem.querySelector('.banner-ir-items-ctr');
            wrapperElem.appendChild(itemsCtrElem.cloneNode(true));
         });
         return element.querySelectorAll('.banner-ir-items-ctr');
      } else if (isClone) {
         const rollWrapperElem = element.querySelector('.banner-ir-roll-wr');
         const itemsCtrElem = element.querySelector('.banner-ir-items-ctr');
         rollWrapperElem.appendChild(itemsCtrElem.cloneNode(true));
         return rollWrapperElem.querySelectorAll('.banner-ir-items-ctr');
      } else {
         return element.querySelectorAll('.banner-ir-items-ctr');
      }
   }
}());