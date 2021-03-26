const getRandomNumber = (min, max) => {
  if (min < 0 || min > max || max < 0) {
    throw new Error('Ошибка ввода диапазона чисел')
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomUniqNumber = (min, max) => {
  const ids = [];

  return () => {
    let currentValue = getRandomNumber(min, max);
    if (ids.length >= (max - min + 1)) {
      throw new Error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
    }
    while (ids.includes(currentValue)) {
      currentValue = getRandomNumber(min, max);
    }
    ids.push(currentValue);
    return currentValue;
  }
}

const checkTextLength = (text, maxLength) => (text.length <= maxLength);

const getRandomElement = (elements) => (elements[getRandomNumber(0, elements.length - 1)]);

const stopEvent = (evt) => {
  evt.stopPropagation();
};

export { getRandomNumber, getRandomUniqNumber, checkTextLength, getRandomElement, stopEvent };
