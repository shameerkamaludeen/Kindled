/* || Component - Banner roll full width
   ========================================================================== */

   export default function addBannerRFWEvents() {
    const bannerRFWWrapperElem = document.querySelector('.banner-rfw-wr');
  
    if (typeof (bannerRFWWrapperElem) == 'undefined' || bannerRFWWrapperElem == null) {
      return;
    }
  
    let bannerRFWItemsCtrElem = bannerRFWWrapperElem.querySelector('.banner-rfw-items-ctr');
    bannerRFWWrapperElem.appendChild(bannerRFWItemsCtrElem.cloneNode(true));
    bannerRFWItemsCtrElem = bannerRFWWrapperElem.querySelectorAll('.banner-rfw-items-ctr');
  
    // cloning items element to not jerk off the animation
    gsap.to(bannerRFWItemsCtrElem, { xPercent: -100, ease: 'none', duration: 25, repeat: -1 })
  }