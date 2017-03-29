/* global navigator, Camera */
import shortid from 'shortid';
import { Map } from 'immutable';
import { hashHistory } from 'react-router';

const options = {
  quality: 100,
  allowEdit: false,
  saveToPhotoAlbum: false,
};

export const takePhoto = () => new Promise((resolve, reject) => {
  if (!navigator.camera) {
    reject(new Error('Camera unavailable'));
  }

  return navigator.camera.getPicture(resolve, reject, options);
});

export const pushImage = (image, list) => {
  const id = shortid.generate();
  return list.push({
    url: image.url,
    category: image.category,
    id,
  });
};

export const removeImage = (id, list) => {
  const idx = list.findIndex(val => val.id === id);
  return list.remove(idx);
};

export const showImage = (image, showing) => {
  return Map({
    image,
    toggle: true,
  });
};

export const hideImage = (showing) => {
  return Map({
    url: null,
    toggle: false,
  });
};

export const selectImage = (imageId, selected) => {
  const idx = selected.findIndex(val => val === imageId);
  if (idx >= 0) {
    return selected.delete(idx);
  }
  return selected.push(imageId);
};
