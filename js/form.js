const ADDRESS_FLOAT_LENGTH = 5;
const MIN_PRICES = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

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

roomNumber.addEventListener('change', () => {
  if (roomNumber.value === '1') {
    capacity.options[0].disabled = true;
    capacity.options[1].disabled = true;
    capacity.options[2].selected = true;
    capacity.options[2].disabled = false;
    capacity.options[3].disabled = true;

  } else if (roomNumber.value === '2') {
    capacity.options[0].disabled = true;
    capacity.options[1].selected = true;
    capacity.options[1].disabled = false;
    capacity.options[2].disabled = false;
    capacity.options[3].disabled = true;

  } else if (roomNumber.value === '3') {
    capacity.options[0].disabled = false;
    capacity.options[0].selected = true;
    capacity.options[1].disabled = false;
    capacity.options[2].disabled = false;
    capacity.options[3].disabled = true;
  } else {
    capacity.options[0].disabled = true;
    capacity.options[1].disabled = true;
    capacity.options[2].disabled = true;
    capacity.options[3].selected = true;
    capacity.options[3].disabled = false;
  }
});

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});
timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});

housingType.addEventListener('change', () => {
  const minPrice = MIN_PRICES[housingType.value];
  housingPrice.setAttribute('min', minPrice);
  housingPrice.setAttribute('placeholder', minPrice);
});

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

disableFormElements(form, formElements);

export {
  form,
  formElements,
  setAddressValue,
  disableFormElements,
  enableFormElements
}
