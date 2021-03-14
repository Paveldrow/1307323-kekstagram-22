const createAvatar = (element) => {
  const avatarElement = document.createElement('img');
  avatarElement.classList.add('social__picture');
  avatarElement.src = element.avatar;
  avatarElement.alt = element.name;
  return avatarElement;
};

export {createAvatar};
