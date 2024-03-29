import {ICON_SIZE, INPUT_LOGIN_CLASS, BASE_PATHNAME} from '../const';
import leaflet from 'leaflet';

export const getIndex = (items, city) => {

  for (let i = 0; i < items.length; i++) {
    if (items[i].city.toLowerCase() === city.toLowerCase()) {
      return i;
    }
  }
};

export const getCityCoord = (hotels, city) => {

  const index = getIndex(hotels, city);

  return hotels[index].coords;
};

export const getActiveIconParams = (width = ICON_SIZE, height = ICON_SIZE) => ({
  iconUrl: BASE_PATHNAME + `/img/pin-active.svg`,
  iconSize: [width, height]
});

export const getIconParams = (width = ICON_SIZE, height = ICON_SIZE) => ({
  iconUrl: BASE_PATHNAME + `/img/pin.svg`,
  iconSize: [width, height]
});

export const getAllOffers = (state) => {
  let arr = [];

  state.hotels.forEach((item) => {
    if (item.hasOwnProperty(`offers`)) {
      arr = [...arr, ...item.offers];
    }
  });

  return arr;
};

export const getCityOffer = (state, id) => {

  return getAllOffers(state).filter((it) => it.hotelId === +id)[0];
};

export const getCityOffers = (state, id) => {
  const city = getCityOffer(state, id).city;

  return getAllOffers(state).filter((it) => it.city === city);
};

export const getNhoods = (offer, items, number) => {

  let arr = [];
  const from = leaflet.latLng(offer.coords);

  arr.push({
    offer,
    length: 0
  });

  for (const it of items) {

    if (it.id !== offer.id) {

      let to = leaflet.latLng(it.coords);

      arr.push({
        offer: it,
        length: from.distanceTo(to)
      });
    }
  }
  arr = arr.sort((prev, next) => prev.length - next.length);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].offer;
  }

  return arr.slice(1, number + 1);
};

export const getLS = (name) => {
  return JSON.parse(localStorage.getItem(name));
};

export const setLS = (name, arr) => {
  return localStorage.setItem(name, JSON.stringify(arr));
};

export const getRandomInt = (max) => {

  return Math.floor(Math.random() * Math.floor(max));
};

export const 	getInputClassName = (inputValue, inputValid) => {

  if (inputValid) return INPUT_LOGIN_CLASS.VALID;

  if (inputValue.length > 0) return INPUT_LOGIN_CLASS.ERROR;

  return ``;
};

export const formatFavoriteList = (arrayOfObject) => {

  let cities = new Set();
  let res = [];

  arrayOfObject.forEach((it) => cities.add(it.city));

  [...cities].map((city) => {
    return res.push({
      city,
      favorites: [...arrayOfObject.filter((obj) => city === obj.city)],
    });
  });

  return res;
};
