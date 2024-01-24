/* || Component - Sticky header top
   ========================================================================== */

(function () {
  const stickyHeaderElem = document.querySelector('.sticky-header-top-anim');
  const navbarTogglerElem = document.querySelector('.navbar-toggler');
  let scrollCheckStatus = true;

  // Return if the component not in the page
  if (typeof (stickyHeaderElem) == 'undefined' || stickyHeaderElem == null) {
    return;
  }

  let lastScrollTop = window.scrollY || document.documentElement.scrollTop;

  // To check whether the scroll event fired due to menu click
  if (typeof (navbarTogglerElem) != 'undefined' && navbarTogglerElem != null) {
    navbarTogglerElem.addEventListener('click', function () {
      scrollCheckStatus = false;
      // The timeout is depend on the transition time of menu
      setTimeout(() => {
        scrollCheckStatus = true;
      }, 400);
    });
  }

  window.addEventListener('scroll', () => {
    if (scrollCheckStatus) {
      var st = window.scrollY || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        // Scrolling down
        animateInStickyHeader(false);
        animateOutStickyHeader(true);
      } else if (st < lastScrollTop) {
        // Scrolling up 
        animateInStickyHeader(true);
        animateOutStickyHeader(false);
      }
      lastScrollTop = st <= 0 ? 0 : st;
    }
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
}());