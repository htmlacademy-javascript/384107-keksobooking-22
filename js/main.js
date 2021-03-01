import {
  createAdvertismentArray,
  QUANTITY_ADVERTISMENT
} from './data.js';

import {
  mapCanvas,
  createAdPopup
} from'./ads.js'

import './form.js';
import './map.js';
// import '/leaflet/leaflet.js';



const ads = createAdvertismentArray(QUANTITY_ADVERTISMENT);
const adPopup = createAdPopup(ads[0]);
// mapCanvas.appendChild(adPopup);

