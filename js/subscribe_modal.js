(function () {
  const btn = document.querySelector('form__button');
  btn.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');
    console.log(path);
  });
})();
