import { getPhotos } from './data.js';

const createPhoto = () => {

  const similarListElement = document.querySelector('.pictures');
  const similarPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const simularPhoto = getPhotos();
  const similarListFragment = document.createDocumentFragment();

  simularPhoto.forEach((url, likes, comments) => {
    const photoElement = similarPhotoTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments;
    similarListFragment.appendChild(photoElement);
  });

  similarListElement.appendChild(similarListFragment);
};

export { createPhoto };
