const typeOfBuilding = ['palace', 'flat', 'house', 'bungalow'];
const time = ['12:00', '13:00', '14:00'];
const featuresType = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photosLinksArray = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];


const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0) {
    throw Error('Ошибка. Пожалуйста, введите число от 0 и больше');
  }

  if (min >= max) {
    throw Error('Ошибка. Пожалуйста, введите другое значение. Минимальное число должно быть меньше максимального');
  }

  return Math.trunc(Math.random() * (max - min + 1) + min);
}

const getRandomFloatNumber = (min, max, floatLength) => {
  if (min < 0 || max < 0) {
    throw Error('Ошибка. Пожалуйста, введите число от 0 и больше');
  }

  if (min >= max) {
    throw Error('Ошибка. Пожалуйста, введите другое значение. Минимальное число должно быть меньше максимального');
  }

  return Number((Math.random() * (max - min) + min).toFixed(floatLength));
}
getRandomFloatNumber();


const chooseRandomElement = (items) => {
  return items[Math.floor(Math.random() * items.length)];
}

const getRandomAvatarValue = () => {
  const randomAvatarValue = '0' + getRandomNumber(1, 8);
  return 'img/avatars/user' + randomAvatarValue + '.png';
}

const createRandomArray = (array) => {
  const quantityElements = getRandomNumber(0, array.length - 1);
  let newArray = [];

  for (let i = 0; i <= quantityElements; i++) {
    let getRandomArrayElement = array[getRandomNumber(0, array.length - 1)];
    newArray.push(getRandomArrayElement);
  }

  return newArray;
}

// const createLocationObject = () => {
//   return {
//     x: getRandomFloatNumber(35.65000, 35.70000, 5),
//     y: getRandomFloatNumber(139.70000, 139.80000, 5),
//   }
// }
// const location = createLocationObject();

const createAdvertismentObject = () => {
  let locationX = getRandomFloatNumber(35.65000, 35.70000, 5);
  let locationY = getRandomFloatNumber(139.70000, 139.80000, 5);

  return {
    author: {
      avatar: getRandomAvatarValue(1, 8),
    },

    offer: {
      title: 'Лучшее жилье только у нас!',
      address: locationX + ',' + locationY,
      price: getRandomNumber(1000, 100000),
      type: chooseRandomElement(typeOfBuilding),
      rooms: getRandomNumber(1, 5),
      guests: getRandomNumber(1, 4),
      checking: chooseRandomElement(time),
      checkout: chooseRandomElement(time),
      features: createRandomArray(featuresType),
      description: 'Удобное и просторное жилье для гостей из разных стран',
      photos: createRandomArray(photosLinksArray),
    },

    location: {
      x: locationX,
      y: locationY,
    },
  }
}

const creareAdvertismentArray = () => {
  let advertismentArray = [];

  for (let i = 0; i < 10; i++) {
    const newAdvertismentObject = createAdvertismentObject();
    advertismentArray.push(newAdvertismentObject);
  }

  return advertismentArray;
}

creareAdvertismentArray();
