/* || Component - Sticky header top
   ========================================================================== */

export default function addStickyHeaderTopEvents() {
  const stickyHeaderElem = document.querySelector('.sticky-header-top-anim');
  // Return if the component not in the page
  if (typeof (stickyHeaderElem) == 'undefined' || stickyHeaderElem == null) {
    return;
  }

  let lastScrollY = 0;

  window.addEventListener('scroll', () => {
    // Scrolling down
    if (window.scrollY > lastScrollY) {
      animateInStickyHeader(false);
      animateOutStickyHeader(true);
    }
    // Scrolling up 
    else {
      animateInStickyHeader(true);
      animateOutStickyHeader(false);
    }
    lastScrollY = window.scrollY;
  });

  // Pass 'true' for animate in and 'false' for reverse it
  function animateInStickyHeader(state) {
    if (state && !stickyHeaderElem.classList.contains('sticky-hta-animate-in')) {
      stickyHeaderElem.classList.add('sticky-hta-animate-in');
    } else if (!state && stickyHeaderElem.classList.contains('sticky-hta-animate-in')) {
      stickyHeaderElem.classList.remove('sticky-hta-animate-in');
    }
  }

  // Pass 'true' for animate out and 'false' for reverse it
  function animateOutStickyHeader(state) {
    if (state && !stickyHeaderElem.classList.contains('sticky-hta-animate-out')) {
      stickyHeaderElem.classList.add('sticky-hta-animate-out');
    } else if (!state && stickyHeaderElem.classList.contains('sticky-hta-animate-out')) {
      stickyHeaderElem.classList.remove('sticky-hta-animate-out');
    }
  }
}