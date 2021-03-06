import { isEscEvent } from './util.js';
import { setSizeImage, removeSetSizeImage } from './image-scale.js';
import { addImageEffects, removeImageEffects } from './image-effect.js';
import { stopEvent } from './util.js';
import { setImageRedactorFormSubmit } from './api.js';
import { fileChooser } from './user-photo.js';

const MAX_HASHTAG_LENGTH = 20;
const MAX_HASHTAGS_NUMBER = 5;
const ALLOWED_SYMBOLS = /^[#(?=a-z0-9)a-z0-9]+$/;

const page = document.querySelector('body');
const uploadFileChange = document.querySelector('#upload-file')
const imageEditPopup = document.querySelector('.img-upload__overlay');
const imageEditPopupClose = imageEditPopup.querySelector('#upload-cancel');
const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');
const imageUploadForm = document.querySelector('.img-upload__form');
const uploadImage = imageUploadForm.querySelector('.img-upload__input');
const uploadPreviewPhoto = imageUploadForm.querySelector('.img-upload__preview');

const addPropagation = () => {
  hashtagInput.addEventListener('keydown', stopEvent);
  commentInput.addEventListener('keydown', stopEvent);
};

const removePropagation = () => {
  hashtagInput.removeEventListener('keydown', stopEvent);
  commentInput.removeEventListener('keydown', stopEvent);
};


const validHashtags = () => {
  const hashtags = hashtagInput.value.trim()
    .split(' ')
    .map((hashtag) => {
      return hashtag.toLowerCase();
    });

  hashtags.forEach((hashtag) => {
    if (!hashtagInput.value) {
      hashtagInput.setCustomValidity('');
    } else if (hashtag.length > MAX_HASHTAG_LENGTH) {
      hashtagInput.setCustomValidity(`Хеш-тег должен быть не длинее ${MAX_HASHTAG_LENGTH} символов`);
    } else if (hashtags.length > MAX_HASHTAGS_NUMBER) {
      hashtagInput.setCustomValidity(`Хеш-тегов должно быть не больше ${MAX_HASHTAGS_NUMBER}`);
    } else if (!(hashtag[0] === '#')) {
      hashtagInput.setCustomValidity('Хеш-тег должен начинаться с #');
    } else if (hashtag.length === 1) {
      hashtagInput.setCustomValidity('Хеш-тег не может сосотоять только из #');
    } else if (hashtag.includes('#', 1)) {
      hashtagInput.setCustomValidity('Хеш-теги разделяются пробелами');
    } else if (!ALLOWED_SYMBOLS.test(hashtag)) {
      hashtagInput.setCustomValidity('Хеш-тег не может содержать спецсимволов и знаков пунктуации');
    } else if (hashtags.slice(0, -1).includes(hashtag)) {
      hashtagInput.setCustomValidity('Хеш-теги не могут быть одинаковыми');
    } else {
      hashtagInput.setCustomValidity('');
    }
  });

  hashtagInput.reportValidity();
};

const addValidForm = () => {
  hashtagInput.addEventListener('input', validHashtags);
};

const removeValidForm = () => {
  hashtagInput.removeEventListener('input', validHashtags);
};

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closePopup();
  }
};


const openPopup = () => {
  imageEditPopup.classList.remove('hidden');
  fileChooser();
  page.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
  imageEditPopupClose.addEventListener('click', closePopup);
};

const closePopup = () => {
  imageEditPopup.classList.add('hidden');
  page.classList.remove('modal-open');
  imageEditPopupClose.removeEventListener('click', closePopup);
  document.removeEventListener('keydown', onPopupEscKeydown);
  removeSetSizeImage();
  removeImageEffects();
  removePropagation();
  removeValidForm();
  uploadPreviewPhoto.style = '';
  uploadImage.value = '';
  uploadPreviewPhoto.querySelector('img').src = 'img/upload-default-image.jpg';
  imageUploadForm.reset();
};

const getData = () => {

  uploadFileChange.addEventListener('change', () => {
    openPopup();
    setSizeImage();
    addImageEffects();
    addPropagation();
    addValidForm();
  });
};


const uploadFile = () => {
  setImageRedactorFormSubmit(closePopup);
}

export { getData, uploadFile };



