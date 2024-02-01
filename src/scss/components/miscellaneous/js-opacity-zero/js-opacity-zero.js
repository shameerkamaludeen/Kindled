/* || Component - JS opacity zero
   ========================================================================== */

(function () {
  const animateFadeInElems = document.querySelectorAll('[data-js-opacity-zero]');
  animateFadeInElems.forEach(element => {
    element.classList.add('js-opacity-zero');
  });
}());