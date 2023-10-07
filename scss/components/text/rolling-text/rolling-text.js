/* || Component - Rolling text
   ========================================================================== */

(function () {
  let rollingTextElems = document.querySelectorAll('.rolling-text');

  for (const rtElem of rollingTextElems) {
    // Splitting text
    let rtElemText = rtElem.innerText;
    rtElem.innerHTML = "";

    let rtElemBlock = document.createElement("div");

    for (let rtElemChar of rtElemText) {
      let rtElemLetter = document.createElement("span");
      rtElemLetter.innerText = rtElemChar.trim() === "" ? "\xa0" : rtElemChar;
      rtElemLetter.classList.add('rt-letter');
      rtElemBlock.appendChild(rtElemLetter);
    }
    rtElemBlock.classList.add('rt-block');
    rtElem.appendChild(rtElemBlock);
    rtElem.appendChild(rtElemBlock.cloneNode(true));

    // animation
    let tweens = [];
    const rtElemBlockElems = rtElem.querySelectorAll('.rt-block');
    for (const rtElemBlock of rtElemBlockElems) {
      const rtElemLetterElems = rtElemBlock.querySelectorAll('.rt-letter');
      const tween = gsap.to(rtElemLetterElems, { duration: 0.3, ease: "power1.in", stagger: 0.02, yPercent: -100, paused: true });
      tweens.push(tween);
    }
    rtElem.addEventListener('mouseover', () => {
      for (const tween of tweens) {
        tween.play();
      }
    });

    rtElem.addEventListener('mouseleave', () => {
      for (const tween of tweens) {
        tween.reverse();
      }
    });
  }
}());