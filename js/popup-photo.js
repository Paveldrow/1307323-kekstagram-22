import { isEscEvent } from './util.js';

const bodyElement = document.querySelector('body');
const popup = document.querySelector('.big-picture');
const popupClose = popup.querySelector('.big-picture__cancel');

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closePopup();
  }
};

const openPopup = () => {
  popup.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
  popupClose.addEventListener('click', closePopup);
};

const closePopup = () => {
  popup.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  popupClose.removeEventListener('click', closePopup);
};

export { openPopup, isEscEvent };
