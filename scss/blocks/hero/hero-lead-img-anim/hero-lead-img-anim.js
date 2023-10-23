/* || Block - Hero lead image animation
   ========================================================================== */

import '../../../components/cursor/cursor-hover-scale/cursor-hover-scale.js';
import '../../../components/modal/modal-youtube-bs/modal-youtube-bs.js';
import '../../../components/animation/anim-gsap/anim-gsap.js';
import '../../../components/animation/anim-slide-in-up/anim-slide-in-up.js';

(function () {
  const cirlceElems = document.querySelectorAll('.hero-lia-circle-img-wr');

  if (!cirlceElems.length) {
    return;
  }

  const cirlceImageElem = cirlceElems[0].querySelectorAll('.hero-lia-circle-img');
  gsap.to(cirlceImageElem, {
    scrollTrigger: {
      trigger: cirlceImageElem[0],
      toggleActions: "play pause resume pause",
    },
    rotation: 360,
    transformOrigin: 'center',
    ease: 'none',
    duration: 18,
    repeat: -1
  });

  let xTo = gsap.quickTo(cirlceElems, 'x', { duration: 0.3, ease: 'power3' });
  let yTo = gsap.quickTo(cirlceElems, 'y', { duration: 0.3, ease: 'power3' });

  function animate(e) {
    const { offsetX: x, offsetY: y } = e,
      { offsetWidth: width, offsetHeight: height } = cirlceElems[0],

      move = 25,
      xMove = x / width * (move * 2) - move,
      yMove = y / height * (move * 2) - move;

    xTo(xMove);
    yTo(yMove);

    if (e.type === 'mouseleave') {
      xTo(0);
      yTo(0);
    };
  }

  cirlceElems[0].addEventListener('mousemove', function (e) {
    animate(e);
  });

  cirlceElems[0].addEventListener('mouseleave', function (e) {
    animate(e);
  });
}());