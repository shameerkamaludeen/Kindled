/* || Component - Sticky header top
   ========================================================================== */

import { clientHeight, clientWidth } from "../../../../scripts/variables.js";

export default function addHeaderEvents() {
  const stickyHeaderElem = document.querySelector('.sticky-header-top');
  // Return if the component not added
  if (typeof (stickyHeaderElem) == 'undefined' || stickyHeaderElem == null) {
    return;
  }

  let lastScrollY = 0;
  const stickyHeaderElemHeight = stickyHeaderElem.offsetHeight;
  let stickyHTActive = false;
  // Sticky functionality when scrolling
  window.addEventListener('scroll', () => {
    if (window.scrollY <= stickyHeaderElemHeight && stickyHeaderElem.classList.contains('sticky-ht-inactive')) {
      // Reached top
      stickyHeaderElem.classList.remove('sticky-ht-inactive');
      console.log('Reached top');
    } else if (window.scrollY > lastScrollY) {
      // Scrolling up
      if (stickyHeaderElem.classList.contains('sticky-ht-active') && stickyHTActive) {
        if (!stickyHeaderElem.classList.contains('sticky-ht-inactive')) {
          stickyHeaderElem.classList.add('sticky-ht-inactive');
        }
        // There is no timeout require if scrolling down up to viewport or windows height
        if (window.scrollY > clientHeight) {
          setTimeout(() => {
            stickyHeaderElem.classList.remove('sticky-ht-active');
            console.log('scrolling down after viewport');
          }, 500);
        } else {
          stickyHeaderElem.classList.remove('sticky-ht-active');
          console.log('scrolling down before viewport');
        }
        stickyHTActive = false;
      }
    } else if (window.scrollY > clientHeight && !stickyHeaderElem.classList.contains('sticky-ht-active')) {
      // Scrolling down
      stickyHeaderElem.classList.add('sticky-ht-active');
      stickyHTActive = true;
      stickyHeaderElem.classList.remove('sticky-ht-inactive');
      console.log('scrolling up');
    }
    lastScrollY = window.scrollY;
  });
}