import {
  QUANTITY_ADVERTISMENT,
  createAdvertismentArray
} from './data.js';
import {
  numWord
} from './util.js';

const CARD_TEMPLATE = document.querySelector('#card').content;
const MAP_CANVAS = document.querySelector('#map-canvas');
const newCard = CARD_TEMPLATE.cloneNode(true);

const GUEST_VARIATION = [
  'гость',
  'гостя',
  'гостей',
]

const ROOMS_VARIATION = [
  'комната',
  'комнаты',
  'комнат',
];

const PHOTO_SIZE = {
  width: 45,
  height: 45,
}

const AVATAR_SIZE = {
  width: 70,
  height: 70,
}

const createFeaturesElements = (data) => {
  const featureElementsList = newCard.querySelector('.popup__features');
  featureElementsList.textContent = '';

  data.offer.features.forEach((value, index) => {
    let featureElement = document.createElement('li');
    featureElement.classList.add('popup__feature', 'popup__feature--' + data.offer.features[index]);
    featureElementsList.appendChild(featureElement);
  })
  return featureElementsList;
}

const createPhotos = (data) => {
  const photosList = newCard.querySelector('.popup__photos');
  photosList.textContent = '';

  data.offer.photos.forEach((value, i) => {
    let photo = document.createElement('img');
    photo.classList.add('popup__photo');
    photo.src = data.offer.photos[i];
    photo.alt = 'Фотография жилья';
    photo.style.width = PHOTO_SIZE.width + 'px';
    photo.style.height = PHOTO_SIZE.height + 'px';
    photosList.appendChild(photo);
  });

  return photosList
}

const createAds = (data) => {
  if (data.offer.title) {
    const cardTitle = newCard.querySelector('.popup__title');
    cardTitle.textContent = data.offer.title;
  }

  if (data.offer.address) {
    const cardAddress = newCard.querySelector('.popup__text--address');
    cardAddress.textContent = data.offer.address;
  }

  if (data.offer.price) {
    const cardPrice = newCard.querySelector('.popup__text--price');
    cardPrice.textContent = data.offer.price + ' ₽/ночь';
  }

  if (data.offer.type) {
    const cardType = newCard.querySelector('.popup__type');
    cardType.textContent = data.offer.type;
  }

  if (data.offer.rooms && data.offer.guests) {
    const cardRoomsAndGuests = newCard.querySelector('.popup__text--capacity');
    cardRoomsAndGuests.textContent = data.offer.rooms + ' ' + numWord(data.offer.rooms, ROOMS_VARIATION) + ' для ' + data.offer.guests + ' ' + numWord(data.offer.guests, GUEST_VARIATION);
  }

  if (data.offer.checkin && data.offer.checkout) {
    const cardTime = newCard.querySelector('.popup__text--time');
    cardTime.textContent = 'Заезд после ' + data.offer.checkin + ', ' + 'выезд до ' + data.offer.checkout;
  }

  if (data.offer.features) {
    createFeaturesElements(data);
  }

  if (data.offer.description) {
    const cardDescription = newCard.querySelector('.popup__description');
    cardDescription.textContent = data.offer.description;
  }

  if (data.offer.photos) {
    createPhotos(data);
  }

  if (data.author.avatar) {
    const cardAvatar = newCard.querySelector('.popup__avatar');
    cardAvatar.src = data.author.avatar;
    cardAvatar.alt = 'Аватар пользователя';
    cardAvatar.style.width = AVATAR_SIZE.width + 'px';
    cardAvatar.style.height = AVATAR_SIZE.height + 'px';
  }

  return newCard;
}

const adArray = createAdvertismentArray(QUANTITY_ADVERTISMENT);
const adArrayElement = createAds(adArray[0]);
MAP_CANVAS.appendChild(adArrayElement);
