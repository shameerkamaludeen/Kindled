/* || Component - Banner roll color change
   ========================================================================== */

export default function addBannerRCCEvents() {
  const bannerRCCWrapperElem = document.querySelector('.banner-rcc-wr');

  if (typeof (bannerRCCWrapperElem) == 'undefined' || bannerRCCWrapperElem == null) {
    return;
  }

  let bannerRCCItemsCtrElem = bannerRCCWrapperElem.querySelectorAll('.banner-rcc-items-ctr');

  // cloning items element to not jerk off the animation
  gsap.to(bannerRCCItemsCtrElem, { xPercent: -100, ease: 'none', duration: 25, repeat: -1 })
}