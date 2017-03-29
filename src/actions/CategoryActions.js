import { ADD_CATEGORY, REMOVE_CATEGORY } from '../constants/action-constants';

export const addCategory = category => ({
  type: ADD_CATEGORY,
  payload: category,
});

export const removeCategory = categoryId => ({
  type: REMOVE_CATEGORY,
  payload: categoryId,
});
