'use strict';

const randomNumber = (min, max) => {
  if (min < 0 || min > max || min > max) {
    throw new Error('Ошибка ввода диапазона чисел')
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const checkTextLength = (text, maxLength) => (text.length <= maxLength);

randomNumber(0, 10);
checkTextLength('Text', 15);
