/* || Block - Tm vertical roller cards
   ========================================================================== */

(function () {
  const tmVRCElem = document.querySelector('.tm-vertical-roller-cards')
  if (typeof (tmVRCElem) == 'undefined' || tmVRCElem == null) {
    return;
  }

  const tmVRCWrapperElem = tmVRCElem.querySelector('.tm-vrc-roller-wr');
  let tmVRCCardsCtrElem = tmVRCWrapperElem.querySelector('.tm-vrc-cards-ctr');

  tmVRCWrapperElem.appendChild(tmVRCCardsCtrElem.cloneNode(true));
  tmVRCCardsCtrElem = tmVRCWrapperElem.querySelectorAll('.tm-vrc-cards-ctr');
  const rollSpeed = tmVRCElem.getAttribute('data-roll-speed');

  // cloning items element to not jerk off the animation
  const rollerAnimation = gsap.to(tmVRCCardsCtrElem, {
    scrollTrigger: {
      trigger: tmVRCCardsCtrElem[0],
      toggleActions: "play pause resume pause"
    },
    yPercent: -100,
    ease: 'none',
    duration: rollSpeed,
    repeat: -1
  });

  tmVRCWrapperElem.addEventListener('mouseenter', () => {
    rollerAnimation.pause();
  });

  tmVRCWrapperElem.addEventListener('mouseleave', () => {
    rollerAnimation.resume();
  });
}());