import { uploadFormMessage, downloadMessageErrorData } from './form-modal.js';
import { renderPicturesContent } from './gallery.js';

const SERVER_URL_DOWNLOAD_DATA = 'https://22.javascript.pages.academy/kekstagram/data';
const SERVER_URL_UPLOAD_DATA = 'https://22.javascript.pages.academy/kekstagram';

fetch(SERVER_URL_DOWNLOAD_DATA)
  .then((response) => response.json())
  .then(renderPicturesContent)
  .catch(downloadMessageErrorData);

const setImageRedactorFormSubmit = (onSuccess) => {
  const imageUploadForm = document.querySelector('.img-upload__form');
  imageUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);

    fetch(SERVER_URL_UPLOAD_DATA, {
      method: 'POST',
      body: formData,
    }).then((response) => {
      if (response.ok) {
        onSuccess();
        uploadFormMessage('success');
      } else {
        uploadFormMessage('error');
      }
    }).catch(() => uploadFormMessage('error'));
  });
};

export { setImageRedactorFormSubmit };
