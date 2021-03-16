import { getRandomNumber, getRandomElement } from './util.js';

const MAX_PHOTOS = 25;

const descriptions = [
  'Это мой кот',
  'Это друг кота',
  'Кот поел, смотрите',
  'Где-то здесь спрятался кот',
  'Собака убегает от кота',
  'Это мы. Игрушки кота',
  'Кот уходит из дома, ну и ладно еще вернется',
];

const likes = {
  MIN: 15,
  MAX: 200,
};

const comments = {
  MIN: 0,
  MAX: 10,
};

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const names = [
  'Алиса',
  'Елена',
  'Дмитрий',
  'Павел',
  'Виктор',
  'Владимир',
  'Алина',
  'Ольга',
  'Наталья',
  'Анна',
  'Сергей',
];

const getPhotoElement = function (index) {
  return {
    id: index,
    url: `photos/${index}.jpg`,
    description: getRandomElement(descriptions),
    likes: getRandomNumber(likes.MIN, likes.MAX),
    comments: getAllComments(),
  };
};

const getComment = function (index) {
  return {
    id: index,
    avatar: 'img/avatar-' + getRandomNumber(1, 6) + '.svg',
    message: getRandomElement(messages),
    name: getRandomElement(names),
  };
};

const getAllComments = () => {
  const sumComments = getRandomNumber(comments.MIN, comments.MAX);
  return new Array(sumComments).fill(null).map((item, index) => getComment(index + 1));
};

const getPhotos = () => new Array(MAX_PHOTOS).fill(null).map((item, index) => getPhotoElement(index + 1));

export { getPhotos };
