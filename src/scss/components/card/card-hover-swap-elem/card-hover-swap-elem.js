/* || Component - Card hover swap elem
   ========================================================================== */

(function () {
  const cardLink = document.querySelectorAll('.card-hse-link');
  cardLink.forEach(element => {
    const linkTextElem = element.querySelector('.card-hse-link-text');
    const cardImgWrElem = element.querySelector('.card-hse-img-wr');
    element.addEventListener('mouseenter', () => {
      linkTextElem.classList.remove('animate__fadeOut');
      linkTextElem.classList.add('animate__fadeInUp');

      cardImgWrElem.classList.remove('animate__zoomIn');
      cardImgWrElem.classList.add('animate__zoomOut');
    });
    element.addEventListener('mouseleave', () => {
      linkTextElem.classList.remove('animate__fadeInUp');
      linkTextElem.classList.add('animate__fadeOut');

      cardImgWrElem.classList.remove('animate__zoomOut');
      cardImgWrElem.classList.add('animate__zoomIn');
    });
  });
}());