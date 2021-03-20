import { isEscEvent } from './popup-photo.js';
import { setSizeImage, removeSetSizeImage } from './image-scale.js';
import {slider} from './image-effect.js'

const bodyElement = document.querySelector('body');
const uploadFileChange = document.querySelector('#upload-file')
const imageEditPopup = document.querySelector('.img-upload__overlay');
const imageEditPopupClose = imageEditPopup.querySelector('#upload-cancel');

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closePopup();
  }
}


const openPopup = () => {
  imageEditPopup.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  imageEditPopupClose.addEventListener('click', closePopup);
  document.addEventListener('keydown', onPopupEscKeydown);
};

const closePopup = () => {
  imageEditPopup.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  imageEditPopupClose.removeEventListener('click', closePopup);
  document.removeEventListener('keydown', onPopupEscKeydown);
  removeSetSizeImage();
};


const uploadFile = () => {
  uploadFileChange.addEventListener('change', () => {
    openPopup();
    setSizeImage();
    slider ();
  });
};

export { uploadFile };
