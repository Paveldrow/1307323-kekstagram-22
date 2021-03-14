import { getPhotos } from './data.js';
import { openBigPictureModal} from './picture-modal.js';

const similarListElement = document.querySelector('.pictures');
const similarPhotoTemplate = document.querySelector('#picture').content;
const similarPhotos = getPhotos();
const renderPhotoList = () => {
  const similarListFragment = document.createDocumentFragment();

  similarPhotos.forEach((picture, index) => {
    const photoElement = similarPhotoTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').dataset.imgId = index;
    photoElement.querySelector('.picture__img').src = picture.url;
    photoElement.querySelector('.picture__likes').textContent = picture.likes;
    photoElement.querySelector('.picture__comments').textContent = picture.comments.length;
    similarListFragment.appendChild(photoElement);
  });

  similarListElement.appendChild(similarListFragment);
  openBigPictureModal();
};

export { renderPhotoList };
