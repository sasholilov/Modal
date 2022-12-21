'use strict';
const buttons = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const closeModalFunc = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModalFunc = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', openModalFunc);
}

closeModal.addEventListener('click', closeModalFunc);

overlay.addEventListener('click', closeModalFunc);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModalFunc();
  }
});
