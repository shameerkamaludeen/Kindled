/* || Component - Scroll to top btn anim
   ========================================================================== */

(function () {
  const scrollBtnElem = document.querySelector('.scroll-to-top-btn-anim');
  if (typeof (scrollBtnElem) == 'undefined' || scrollBtnElem == null) {
    return;
  }

  scrollBtnElem.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    if ((document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight)) {
      if (!scrollBtnElem.classList.contains('scroll-tt-ba-active')) {
        scrollBtnElem.classList.add('scroll-tt-ba-active');
      }
    } else if (scrollBtnElem.classList.contains('scroll-tt-ba-active')) {
      scrollBtnElem.classList.remove('scroll-tt-ba-active');
    }
  });

}());