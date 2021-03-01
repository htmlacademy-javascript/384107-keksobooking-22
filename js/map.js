import {form, filter, filterInteractiveElements, formInteractiveElements, inputAddress} from './form.js';
import {LENGTH_AFTER_POINT} from './data.js';
const TOKIO_COORDINATES = {
  lat: 35.68950,
  lng: 139.69171,
  scale: 10,
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
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon ({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
})

const mainMarker = L.marker(
  {
    lat: 35.68955,
    lng: 139.69180,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  }
);

mainMarker.addTo(map);

inputAddress.value = (TOKIO_COORDINATES.lat).toFixed(LENGTH_AFTER_POINT) + ', ' + (TOKIO_COORDINATES.lng).toFixed(LENGTH_AFTER_POINT);

mainMarker.on('moveend', (evt) => {
  let coordinates = evt.target.getLatLng();
  inputAddress.value = (coordinates.lat).toFixed(LENGTH_AFTER_POINT) + ', ' + (coordinates.lng).toFixed(LENGTH_AFTER_POINT);
})

