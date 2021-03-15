const bodyElement = document.querySelector('body');
const popup = document.querySelector('.big-picture');
const popupClose = popup.querySelector('.big-picture__cancel');

const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc')
};

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closePopup();
  }
};

const openPopup = () => {
  popup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscKeydown);
  bodyElement.classList.add('modal-open');
  popupClose.addEventListener('click', closePopup);
};

const closePopup = () => {
  popup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscKeydown);
  bodyElement.classList.remove('modal-open');
  popupClose, removeEventListener('click', closePopup);
};

export { openPopup };
