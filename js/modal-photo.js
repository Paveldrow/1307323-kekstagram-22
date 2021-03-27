import { openPopup } from './popup-photo.js';
import { createCommentList } from './create-comment-list.js';

const popup = document.querySelector('.big-picture');
const popupImage = popup.querySelector('.big-picture__img').querySelector('img');
const popupLikesCounter = popup.querySelector('.likes-count');
const popupCommentsCounter = popup.querySelector('.comments-count');
const popupDescription = popup.querySelector('.social__caption');
const allCommentsCounter = popup.querySelector('.social__comment-count');
const commentsLoader = popup.querySelector('.comments-loader');

const fullPhoto = (picture) => {
  popupImage.src = picture.url;
  popupLikesCounter.textContent = picture.likes;
  popupCommentsCounter.textContent = picture.comments.length;
  popupDescription.textContent = picture.description;
  createCommentList(picture.comments);
}

const renderModalPicture = (picture) => {
  openPopup();
  fullPhoto(picture);
  allCommentsCounter.classList.add('hidden');
  commentsLoader.classList.add('hidden');
}

export {renderModalPicture}

