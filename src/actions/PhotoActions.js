import { takePhoto } from '../utils/camera-utils';
import {
  TAKE_PHOTO,
  ADD_IMAGE,
  REMOVE_IMAGE,
  SHOW_IMAGE,
  HIDE_IMAGE,
  SELECT_IMAGE,
  CLEAR_SELECTED_IMAGES,
} from '../constants/action-constants';

export const addImage = image => ({
  type: ADD_IMAGE,
  payload: image,
});

export const removeImage = imageId => ({
  type: REMOVE_IMAGE,
  payload: imageId,
});

export const showImage = image => ({
  type: SHOW_IMAGE,
  payload: image,
});

export const hideImage = () => ({
  type: HIDE_IMAGE,
});

export const makePhoto = () => (dispatch) => {
  dispatch({ type: TAKE_PHOTO });
  return takePhoto()
    .then((data) => {
      const ai = addImage({ url: data, category: '' });
      return dispatch(ai);
    });
};

export const selectImage = imageId => ({
  type: SELECT_IMAGE,
  payload: imageId,
});

export const clearSelectedImages = () => ({
  type: CLEAR_SELECTED_IMAGES,
});

export const removeMultipleImages = (selected) => (dispatch) => {
  selected.forEach(id => dispatch(removeImage(id)));
  dispatch(clearSelectedImages());
};

