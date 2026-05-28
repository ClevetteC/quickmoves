(function () {
  var header = document.querySelector('.qm-header');
  if (!header) return;
  function update() {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
})();
