/* || Components - Cursor hover scale
   ========================================================================== */

export default function addCHScaleEvents() {
  const cursorElem = document.querySelectorAll('.cursor-hover-scale');
  const cursorScaleElems = document.querySelectorAll('.cursor-hs-scale');

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

  // Mouse cursor scale and animation on hover interactive elems
  for (const cursorScaleElem of cursorScaleElems) {
    let tween = gsap.to(cursorElem, { duration: 0.3, scale: 8, opacity: 0.1, paused: true });
    cursorScaleElem.addEventListener('mousemove', () => {
      tween.play();
    });

    cursorScaleElem.addEventListener('mouseleave', () => {
      tween.reverse();
    });
  }
}