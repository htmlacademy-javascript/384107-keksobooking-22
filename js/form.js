/* global L:readonly */

import {
  mainMarker,
  map,
  TOKIO_COORDINATES_CENTER
} from './map.js';

import {
  showPopup,
  successPopup,
  errorPopup
} from './popup.js'



const ADDRESS_FLOAT_LENGTH = 5;
const MIN_PRICES = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_ROOMS_COUNT = 100;
const MAX_ROOMS_VALUE = 0;
const MIN_ROOMS_VALUE = 1;
const NOT_FOR_GUESTS_CAPACITY = 3;

const form = document.querySelector('.ad-form');
const formElements = form.querySelectorAll('fieldset');
const inputAddress = form.querySelector('#address');
const housingType = form.querySelector('#type');
const housingPrice = form.querySelector('#price');
const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');
const formTitle = form.querySelector('#title');
const roomNumber = form.querySelector('#room_number');
const capacity = form.querySelector('#capacity');
const capacities = form.querySelectorAll('#capacity option');
const buttonReset = form.querySelector('.ad-form__reset');
const buttonSubmit = form.querySelector('.ad-form__submit');

formTitle.addEventListener('input', () => {
  const titleLength = formTitle.value.length;
  if (titleLength < MIN_TITLE_LENGTH) {
    formTitle.setCustomValidity('Введите еще ' + (MIN_TITLE_LENGTH - titleLength) + ' симв.');
  } else if (titleLength > MAX_TITLE_LENGTH) {
    formTitle.setCustomValidity('Удалите ' + (titleLength - MAX_TITLE_LENGTH) + ' симв.');
  } else {
    formTitle.setCustomValidity('');
  }
  formTitle.reportValidity();
});

housingPrice.addEventListener('input', () => {
  if (housingPrice.validity.rangeOverflow) {
    housingPrice.setCustomValidity('Максимальная стоимость жилья — 1 000 000 руб.');
  } else {
    housingPrice.setCustomValidity('');
  }
});

const setRoomCapacity = () => {
  const roomsCount = Number(roomNumber.value);
  for (let i = 0; i < capacities.length; i++) {
    capacities[i].disabled = false;
  }

  if (roomsCount === MAX_ROOMS_COUNT) {
    for (let i = 0; i < capacities.length -1; i++) {
      capacities[i].disabled = true;
    }
    capacity.value = MAX_ROOMS_VALUE;
  } else {
    capacity.value = MIN_ROOMS_VALUE;
    capacities[NOT_FOR_GUESTS_CAPACITY].disabled = true;

    for (let i = 0; i < capacities.length; i++) {
      if (capacities[i].value > roomNumber.value) {
        capacities[i].disabled = true;
      }
    }
  }
}

const onRoomNumberChange = () => {
  setRoomCapacity();
}

roomNumber.addEventListener('change', onRoomNumberChange);

const onTimeInChange = () => {
  timeOut.value = timeIn.value;
}

const onTimeOutChange = () => {
  timeIn.value = timeOut.value;
}

timeIn.addEventListener('change', onTimeInChange);

timeOut.addEventListener('change', onTimeOutChange);

const setMinPrices = () => {
  const minPrice = MIN_PRICES[housingType.value];
  housingPrice.setAttribute('min', minPrice);
  housingPrice.setAttribute('placeholder', minPrice);
}

const onHousingTypeChange = () => {
  setMinPrices();
}

housingType.addEventListener('change', onHousingTypeChange);

const setAddressValue = (lat, lng) => {
  inputAddress.value = lat.toFixed(ADDRESS_FLOAT_LENGTH) + ', ' + lng.toFixed(ADDRESS_FLOAT_LENGTH);
};

const disableFormElements = (block, elements) => {
  block.classList.add('ad-form--disabled');

  elements.forEach((element) => {
    element.disabled = true;
  });
};

const enableFormElements = (block, elements) => {
  block.classList.remove('ad-form--disabled');

  elements.forEach((element) => {
    element.disabled = false;
  });
};

const formReset = () => {
  form.reset();
  setMinPrices();
  map.panTo(new L.LatLng(TOKIO_COORDINATES_CENTER.lat, TOKIO_COORDINATES_CENTER.lng));
  mainMarker.setLatLng(L.latLng(TOKIO_COORDINATES_CENTER.lat, TOKIO_COORDINATES_CENTER.lng));
  setAddressValue(TOKIO_COORDINATES_CENTER.lat, TOKIO_COORDINATES_CENTER.lng);
}

const setFormSubmit = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);

    fetch (
      'https://22.javascript.pages.academy/keksobooking',
      {
        method: 'POST',
        body: formData,
      },
    )
      .then((response) => {
        if (response.ok) {
          formReset();
          showPopup(successPopup);
        } else {
          showPopup(errorPopup);
        }

      })
      .catch(() => showPopup(errorPopup));
  });
}

buttonReset.addEventListener('click', (evt) => {
  evt.preventDefault();
  formReset();
})

setRoomCapacity();
setMinPrices();
disableFormElements(form, formElements);




export {
  form,
  formElements,
  setAddressValue,
  disableFormElements,
  enableFormElements,
  setFormSubmit,
  buttonSubmit
}
