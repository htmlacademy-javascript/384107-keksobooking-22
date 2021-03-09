import {} from './popup.js';
import './ads.js';
import {
  map,
  createPopups,
  TOKIO_COORDINATES
} from './map.js';
import {
  form,
  formElements,
  enableFormElements,
  setFormSubmit
} from './form.js';
import {
  filter,
  filterElements
} from './filter.js'
import {
  showErrorPopup
} from './util.js'

fetch('https://22.javascript.pages.academy/keksobooking/data')
  .then((response) => {
    if(response.ok) {
      return response.json();
    } else {
      showErrorPopup('Не удалось загрузить данные. Обновите страницу');
    }
  })
  .then((advertisments) => {
    createPopups(advertisments);
  })
  .catch(() => showErrorPopup('Не удалось загрузить данные. Обновите страницу'));

map.
  on('load', () => {
    enableFormElements(form, formElements);
    enableFormElements(filter, filterElements);
  })
  .setView({
    lat: TOKIO_COORDINATES.lat,
    lng: TOKIO_COORDINATES.lng,
  }, TOKIO_COORDINATES.scale);


setFormSubmit()
