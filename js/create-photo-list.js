import {onPictureClick} from './full-photo.js';

const similarListElement = document.querySelector('.pictures');
const similarPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPhotoList = (pictures) => {
  const similarListFragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const photoElement = similarPhotoTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = picture.url;
    photoElement.querySelector('.picture__likes').textContent = picture.likes;
    photoElement.querySelector('.picture__comments').textContent = picture.comments.length;

    photoElement.addEventListener('click', () => onPictureClick(picture));

    similarListFragment.appendChild(photoElement);
  });

  similarListElement.appendChild(similarListFragment);
};

export { createPhotoList };
