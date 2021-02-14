import {
  getRandomNumber,
  getRandomFloatNumber,
  chooseRandomElement,
  createRandomArray,
  mixArray
} from './util.js';


const TYPE_OF_BUILDING = ['palace', 'flat', 'house', 'bungalow'];
const TIME = ['12:00', '13:00', '14:00'];
const FEATURES_TYPE = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOD_LINKS_ARRAY = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
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
const MAX_PRICE = 10000;
const LENGTH_AFTER_POINT = 5;
const QUANTITY_ADVERTISMENT = 10;

const getRandomAvatarValue = () => {
  const randomAvatarValue = '0' + getRandomNumber(MIN_VALUE_IN_AVATAR, MAX_VALUE_IN_AVATAR);
  return 'img/avatars/user' + randomAvatarValue + '.png';
}

const createAdvertismentObject = () => {
  const locationX = getRandomFloatNumber(MIN_COORDINATE_X, MAX_COORDINATE_X, LENGTH_AFTER_POINT);
  const locationY = getRandomFloatNumber(MIN_COORDINATE_Y, MAX_COORDINATE_Y, LENGTH_AFTER_POINT);

  return {
    author: {
      avatar: getRandomAvatarValue(),
    },

    offer: {
      title: 'Лучшее жилье только у нас!',
      address: locationX + ',' + locationY,
      price: getRandomNumber(MIN_PRICE, MAX_PRICE),
      type: chooseRandomElement(TYPE_OF_BUILDING),
      rooms: getRandomNumber(MIN_ROOM, MAX_ROOM),
      guests: getRandomNumber(MIN_GUESTS, MAX_GUESTS),
      checking: chooseRandomElement(TIME),
      checkout: chooseRandomElement(TIME),
      features: mixArray(FEATURES_TYPE).slice(0, getRandomNumber(1, FEATURES_TYPE.length)),
      description: 'Удобное и просторное жилье для гостей из разных стран',
      photos: createRandomArray(PHOTOD_LINKS_ARRAY),
    },

    location: {
      x: locationX,
      y: locationY,
    },
  }
}

const createAdvertismentArray = () => {
  const advertismentArray = [];

  for (let i = 0; i < QUANTITY_ADVERTISMENT; i++) {
    const newAdvertismentObject = createAdvertismentObject();
    advertismentArray.push(newAdvertismentObject);
  }

  return advertismentArray;
}

createAdvertismentArray();

