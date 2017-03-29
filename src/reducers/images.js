import { Map, List } from 'immutable';
import {
  ADD_IMAGE,
  REMOVE_IMAGE,
  SHOW_IMAGE,
  HIDE_IMAGE,
  SELECT_IMAGE,
  CLEAR_SELECTED_IMAGES,
} from '../constants/action-constants';
import { pushImage, removeImage, showImage,
  hideImage, selectImage, checkSelected } from '../utils/camera-utils';

const initialState = Map({
  list: List(),
  selected: List(),
  showing: Map({
    image: null,
    toggle: false,
  }),
});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_IMAGE:
      return state.set('list', pushImage(action.payload, state.get('list')));
    case REMOVE_IMAGE:
      return state.set('list', removeImage(action.payload, state.get('list')));
    case SHOW_IMAGE:
      return state.set('showing', showImage(action.payload, state.get('showing')));
    case HIDE_IMAGE:
      return state.set('showing', hideImage(state.get('showing')));
    case SELECT_IMAGE:
      return state.set('selected', selectImage(action.payload.id, state.get('selected')));
    case CLEAR_SELECTED_IMAGES:
      return state.set('selected', List());
    default:
      return state;
  }
}

