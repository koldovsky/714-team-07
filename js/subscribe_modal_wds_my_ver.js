(function () {
  const openModalButtons = document.querySelectorAll('[data-modal-target]');
  const closeModalButtons = document.querySelectorAll('[data-close-button]');
  const overlay = document.getElementById('subscribe__overlay');

  openModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // dataset - gives access to all 'data' attributes as they're JS objects (in camelCase)
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal);
    });
  });
  overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.subscribe__modals.active');
    modals.forEach((modal) => {
      closeModal(modal);
    });
  });
  closeModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // closest - is looking for the closest parent in html tag
      const modal = button.closest('.subscribe__modals');
      closeModal(modal);
    });
  });

  function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
  }

  function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
  }
})();
