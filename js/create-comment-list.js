const commentsList = document.querySelector('.social__comments');
const commentTemplate = commentsList.querySelector('.social__comment');

const createCommentList = (comments) => {
  const fragment = document.createDocumentFragment();
  commentsList.innerHTML = '';
  comments.forEach((comment) => {
    const commentElement = commentTemplate.cloneNode(true);
    const commentAvatar = commentElement.querySelector('.social__picture');
    const commentMessage = commentElement.querySelector('.social__text');
    commentAvatar.src = comment.avatar;
    commentAvatar.alt = comment.name;
    commentMessage.textContent = comment.message;
    fragment.appendChild(commentElement);
  });
  commentsList.appendChild(fragment);
};

export {createCommentList};
