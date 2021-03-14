import { createAvatar } from './create-avatar.js';
import { createMessage } from './create-message.js';

const createComment = (element) => {
  const commentElement = document.createElement('li');
  commentElement.classList.add('social__comment');
  commentElement.appendChild(createAvatar(element));
  commentElement.appendChild(createMessage(element));
  return commentElement;
};

export {createComment}
;
