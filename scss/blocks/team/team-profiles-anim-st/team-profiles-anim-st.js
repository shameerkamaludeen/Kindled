/* || Block - Team profile anim st (sticky header)
   ========================================================================== */

import '../../../components/carousel/swiper-vh-profiles-loop/swiper-vh-profiles-loop.js';

(function () {
   const teamProfilesElem = document.querySelector('.team-profiles-anim-st');
   const tittleElem = teamProfilesElem.querySelector('.team-pa-st-tittle');
   ScrollTrigger.create({
      trigger: tittleElem,
      endTrigger: teamProfilesElem,
      start: 'top top',
      end: 'bottom top+=300px',
      pin: true,
      pinSpacing: false,
      onEnter: () => {
         tittleElem.classList.add('team-pa-st-tittle-pinned');
      },
      onLeaveBack: () => {
         tittleElem.classList.remove('team-pa-st-tittle-pinned');
      }
   });
}());