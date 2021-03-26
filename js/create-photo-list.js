/* global _:readonly */

import { onPictureClick } from './full-photo.js';
import { FILTERS } from './filter.js';

const similarListElement = document.querySelector('.pictures');
const similarPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');
const imgFilter = document.querySelector('.img-filters');
const FILTER_ACTIVE_CLASS = 'img-filters__button--active';
const RENDER_DELAY = 500;

const cleanGallery = () => {
  const pictureItem = similarListElement.querySelectorAll('.picture');
  pictureItem.forEach((element) => {
    element.remove();
  });
}

const renderPicturesContent = (pictures) => {
  createPhotoList(pictures);
  imgFilter.classList.remove('img-filters--inactive');
  const debounced = _.debounce((id) => {
    cleanGallery();
    createPhotoList(FILTERS[id](pictures))
  }, RENDER_DELAY);

  imgFilter.addEventListener('click', (evt) => {
    const targetClassList = evt.target.classList;
    if (!targetClassList.contains('img-filters__button') || targetClassList.contains(FILTER_ACTIVE_CLASS)) {
      return;
    }
    imgFilter.querySelector('.img-filters__button--active').classList.remove(FILTER_ACTIVE_CLASS);
    targetClassList.add(FILTER_ACTIVE_CLASS);
    debounced(evt.target.id);
  });
}

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

export { createPhotoList, renderPicturesContent };
