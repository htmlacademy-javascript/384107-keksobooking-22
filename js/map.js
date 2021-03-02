/* global L:readonly */
import {
  form,
  filter,
  filterInteractiveElements,
  formInteractiveElements,
  inputAddress
} from './form.js';

import {
  LENGTH_AFTER_POINT,
  ads
} from './data.js';

import {
  createAdPopup
} from './ads.js';

const TOKIO_COORDINATES = {
  lat: 35.68950,
  lng: 139.69171,
  scale: 12,
}

const TOKIO_COORDINATES_CENTER = {
  lat: 35.70843,
  lng: 139.76526,
}

const map = L.map('map-canvas')
  .on('load', () => {
    form.classList.remove('ad-form--disabled');
    filter.classList.remove('ad-form--disabled');

    formInteractiveElements.forEach((element) => {
      element.disabled = false;
    });

    filterInteractiveElements.forEach((element) => {
      element.disabled = false;
    });
  })
  .setView({
    lat: TOKIO_COORDINATES.lat,
    lng: TOKIO_COORDINATES.lng,
  }, TOKIO_COORDINATES.scale);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker({
  lat: TOKIO_COORDINATES_CENTER.lat,
  lng: TOKIO_COORDINATES_CENTER.lng,
}, {
  draggable: true,
  icon: mainPinIcon,
});

mainMarker.addTo(map);

inputAddress.value = (TOKIO_COORDINATES_CENTER.lat).toFixed(LENGTH_AFTER_POINT) + ', ' + (TOKIO_COORDINATES_CENTER.lng).toFixed(LENGTH_AFTER_POINT);

mainMarker.on('moveend', (evt) => {
  let coordinates = evt.target.getLatLng();
  inputAddress.value = (coordinates.lat).toFixed(LENGTH_AFTER_POINT) + ', ' + (coordinates.lng).toFixed(LENGTH_AFTER_POINT);
});

ads.forEach((element) => {
  const icon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [50, 50],
    iconAnchor: [25, 25],
  })
  const marker = L.marker({
    lat: element.location.x,
    lng: element.location.y,
  }, {
    icon,
  })
  marker
    .addTo(map)
    .bindPopup(createAdPopup(element));
});

export {
  map
};
