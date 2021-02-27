const getRandomNumber = (min, max) => {
  if (min < 0 || min > max || max < 0) {
    throw new Error('Ошибка ввода диапазона чисел')
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const checkTextLength = (text, maxLength) => (text.length <= maxLength);

const getRandomElement = (elements) => (elements[getRandomNumber(0, elements.length - 1)]);

export {getRandomNumber, checkTextLength, getRandomElement};
