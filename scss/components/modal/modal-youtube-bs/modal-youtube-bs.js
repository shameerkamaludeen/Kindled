/* || Component - Embed youtube js bs
   ========================================================================== */

// 1. Dependencies
// 'scroll-smoother-gsap' in the 'show.bs.modal' event

import '../../../../scripts/initialize-youtube-api.js';

(function () {
  const modalYoutubeBSElem = document.querySelector('.modal-youtube-bs');
  if (typeof (modalYoutubeBSElem) == 'undefined' || modalYoutubeBSElem == null) {
    return;
  }

  // Player object creating using the iframe tag
  let youTubePlayer;
  window.onYouTubeIframeAPIReady = function () {
    youTubePlayer = new YT.Player('modal-yt-bs-iframe');
  }

  // lock scrolling when model display
  modalYoutubeBSElem.addEventListener('show.bs.modal', () => {
    // if scroll smoother doesn't implemented then require other aproach
    if (typeof (smoother) != 'undefined' && smoother != null) {
      smoother.paused(true);
    };
  });

  // Add 'modal-yt-bs-backdrop' class to modal backdrop element
  modalYoutubeBSElem.addEventListener('shown.bs.modal', () => {
    const bsModalBackdropElem = document.querySelector('.modal-backdrop');
    if (bsModalBackdropElem) {
      bsModalBackdropElem.classList.add('modal-yt-bs-backdrop');
    }
  });

  // Close youtube on modal hide
  modalYoutubeBSElem.addEventListener('hide.bs.modal', () => {
    youTubePlayer.stopVideo();
    if (smoother) smoother.paused(false);
  });
}());