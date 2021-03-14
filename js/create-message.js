const createMessage = (element) => {
  const messageElement = document.createElement('p');
  messageElement.classList.add('social__text');
  messageElement.textContent = element.message;
  return messageElement;
};

export {createMessage};
