import { getPhotosElement } from './data.js';
import { createComment } from './create-comment.js';

const bodyElement = document.body
const bigPictureElement = document.querySelector('.big-picture');
const closeBigPicture = bigPictureElement.querySelector('.big-picture__cancel');



const bigPictureOpenkHandler = (evt) => {
  if (!evt.target.classList.contains('picture__img')) {
    return
  }

  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', popupEscKeydownHandler);
  closeBigPictureModal();

  const image = bigPictureElement.querySelector('.big-picture__img img');
  const likes = bigPictureElement.querySelector('.likes-count');
  const comments = bigPictureElement.querySelector('.comments-count')
  const description = bigPictureElement.querySelector('.social__caption');
  const commentList = bigPictureElement.querySelector('.social__comments');
  const commentCount = bigPictureElement.querySelector('.social__comment-count');
  const commentLoader = bigPictureElement.querySelector('.comments-loader')

  const pictureElementId = evt.target.dataset.imgId;
  const galleryElement = getPhotosElement(pictureElementId);

  image.src = galleryElement.url;
  likes.textContent = galleryElement.likes;
  comments.textContent = galleryElement.comments.length;
  description.textContent = galleryElement.description;

  commentList.innerHTML = '';
  const commentListFragment = document.createDocumentFragment();
  galleryElement.comments.forEach((comment) => {
    const commentElement = createComment(comment);
    commentListFragment.appendChild(commentElement);
  });
  commentList.appendChild(commentListFragment)

  commentCount.classList.add('hidden');
  commentLoader.classList.add('hidden');
};

const bigPictureCloseHandler = () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', popupEscKeydownHandler);
};

const openBigPictureModal = () => {
  const pictureList = document.querySelector('.pictures');
  pictureList.addEventListener('click', bigPictureOpenkHandler);
};

const closeBigPictureModal = () => {
  closeBigPicture.addEventListener('click', bigPictureCloseHandler);
};

const popupEscKeydownHandler = (evt) => {
  if (evt.key === ('Escape' || 'Esc')) {
    evt.preventDefault();
    bigPictureElement.classList.add('hidden');
    bigPictureCloseHandler();
  }
};

export { openBigPictureModal };



