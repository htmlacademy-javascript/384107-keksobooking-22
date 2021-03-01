const form = document.querySelector('.ad-form');
const filter = document.querySelector('.map__filters');
const filterInteractiveElements = filter.querySelectorAll('select, fieldset');
const formInteractiveElements = form.querySelectorAll('fieldset');
const inputAddress = form.querySelector('#address');

//inputAddress.value = (TOKIO_COORDINATES.lat).toFixed(LENGTH_AFTER_POINT) + ', ' + (TOKIO_COORDINATES.lng).toFixed(LENGTH_AFTER_POINT);


const DISABLED_FORM = () => {

  form.classList.add('ad-form--disabled');
  filter.classList.add('ad-form--disabled');

  formInteractiveElements.forEach((element) => {
     element.disabled = true;
  });

  filterInteractiveElements.forEach((element) => {
     element.disabled = true;
  });
}

DISABLED_FORM();


export {form, filter, filterInteractiveElements, formInteractiveElements, inputAddress}


