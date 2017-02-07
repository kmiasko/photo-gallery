import { combineReducers } from 'redux';
import category from './category';
import images from './images';

export default combineReducers({
  category,
  images,
});
