import {
  getRandomNumber,
  getRandomFloatNumber,
  chooseRandomElement,
  mixArray,
  getRamdomObjectValue
} from './util.js';

const TYPE_OF_BUILDING = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
}

const TIME = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES_TYPE = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOD_LINKS_ARRAY = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const TITLE = [
  'Лучшее жилье только у нас!',
  'Уютное гнездышко для молодежи',
  'Окунитесь в мир Японии',
];

const DESCRIPTION = [
  'Удобное и просторное жилье для гостей из разных стран',
  'С панорамными окнами и видом на Токийские сады',
  'Отличный вариант для тех, кто путешествует с котом',
];

const MIN_VALUE_IN_AVATAR = 1;
const MAX_VALUE_IN_AVATAR = 8;
const MIN_COORDINATE_X = 35.65000;
const MAX_COORDINATE_X = 35.70000;
const MIN_COORDINATE_Y = 139.70000;
const MAX_COORDINATE_Y = 139.80000;
const MIN_ROOM = 1;
const MAX_ROOM = 8;
const MIN_GUESTS = 1;
const MAX_GUESTS = 12;
const MIN_PRICE = 1000;
const MAX_PRICE = 1000000;
const LENGTH_AFTER_POINT = 5;
const QUANTITY_ADVERTISMENT = 10;

const getRandomAvatarValue = () => {
  const randomAvatarValue = '0' + getRandomNumber(MIN_VALUE_IN_AVATAR, MAX_VALUE_IN_AVATAR);
  return 'img/avatars/user' + randomAvatarValue + '.png';
}

export {
  LENGTH_AFTER_POINT
}
