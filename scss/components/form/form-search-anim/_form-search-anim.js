/* Component - Form search anim
  =========================================================================== */

(function () {
  const formSAElem = document.querySelector('.form-search-anim')
  if (typeof (formSAElem) == 'undefined' || formSAElem == null) {
    return;
  }

  const searchElem = formSAElem.querySelector('.form-sa-control-icon-wr-search');
  const closeElem = formSAElem.querySelector('.form-sa-control-icon-wr-close');
  const formElem = formSAElem.querySelector('.form-sa-form');

  searchElem.addEventListener('click', () => {
    searchElem.firstElementChild.classList.toggle('active');
    closeElem.classList.toggle('active');
    formElem.classList.toggle('form-sa-form-active')
  });

  closeElem.addEventListener('click', () => {
    searchElem.firstElementChild.classList.toggle('active');
    closeElem.classList.toggle('active');
    formElem.classList.toggle('form-sa-form-active')
  });
}());