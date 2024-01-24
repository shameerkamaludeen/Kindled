/* || Components - Cursor hover scale
   ========================================================================== */

(function () {
  const cursorElem = document.querySelectorAll('.cursor-hover-scale');
  const cursorScaleElems = document.querySelectorAll('.cursor-hs-scale');
  // Used to check whether animation complete to start another, this require 
  // when multiple cursor scale elements placed in close  
  let isPlayedForward = false;

  if (typeof (cursorElem) == 'undefined' || cursorElem == null) {
    return;
  }

  // Animation effect on mouse follow
  let xTo = gsap.quickTo(cursorElem, 'x', { duration: 0.3, ease: 'power3' });
  let yTo = gsap.quickTo(cursorElem, 'y', { duration: 0.3, ease: 'power3' });

  window.addEventListener('mousemove', e => {
    xTo(e.clientX - 4);
    yTo(e.clientY - 4);
  });


  let tween = gsap.to(cursorElem, {
    duration: 0.3,
    scale: 8,
    opacity: 0.1,
    paused: true
  });

  // Mouse cursor scale and animation on hover interactive elems
  for (const cursorScaleElem of cursorScaleElems) {
    cursorScaleElem.addEventListener('mouseenter', () => {
      if (!isPlayedForward) {
        tween.play();
        isPlayedForward = true;
      }
    });

    cursorScaleElem.addEventListener('mouseleave', () => {
      if (isPlayedForward) {
        tween.reverse();
        isPlayedForward = false;
      } else {
        const interval = setInterval(() => {
          if (isPlayedForward) {
            isPlayedForward = false;
            tween.reverse();
            clearInterval(interval);
          }
        }, 200);
      }
    });
  }
}());