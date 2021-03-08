import {
  // createAdvertismentArray,
  // QUANTITY_ADVERTISMENT
} from './data.js';
import './ads.js';
import {
  map,
  createPopups,
  TOKIO_COORDINATES
} from './map.js';
import {
  form,
  formElements,
  enableFormElements
} from './form.js';
import {
  filter,
  filterElements
} from './filter.js'



fetch('https://22.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((advertisments) => {
    console.log(advertisments);
    createPopups(advertisments);
  });





// const ads = createAdvertismentArray(QUANTITY_ADVERTISMENT);
// createPopups(ads);


map.
  on('load', () => {
    enableFormElements(form, formElements);
    enableFormElements(filter, filterElements);
  })
  .setView({
    lat: TOKIO_COORDINATES.lat,
    lng: TOKIO_COORDINATES.lng,
  }, TOKIO_COORDINATES.scale);


