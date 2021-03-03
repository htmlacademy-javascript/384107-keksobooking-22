const ADDRESS_FLOAT_LENGTH = 5;
const MIN_PRICES = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};

const form = document.querySelector('.ad-form');
const formElements = form.querySelectorAll('fieldset');
const inputAddress = form.querySelector('#address');
const housingType = form.querySelector('#type');
const housingPrice = form.querySelector('#price');
const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});
timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
})

housingType.addEventListener('change', () => {
  const minPrice = MIN_PRICES[housingType.value];
  housingPrice.setAttribute('min', minPrice);
  housingPrice.setAttribute('placeholder', minPrice);
})

const setAddressValue = (lat, lng) => {
  inputAddress.value = lat.toFixed(ADDRESS_FLOAT_LENGTH) + ', ' + lng.toFixed(ADDRESS_FLOAT_LENGTH);
}

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
