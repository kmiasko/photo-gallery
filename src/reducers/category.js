import { Map, List } from 'immutable';
import shortid from 'shortid';
import { ADD_CATEGORY, REMOVE_CATEGORY } from '../constants/action-constants';
import { pushCategory, removeCategory } from '../utils/categories-utils';

const arr = ['Test1', 'Test2', 'Test3', 'Test4', 'Test5'];
const cats = arr.map(cat => ({ id: shortid.generate(), category: cat }));

const initialState = new Map({
  list: new List(cats),
});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_CATEGORY:
      return state.set('list', pushCategory(action.payload, state.get('list')));
    case REMOVE_CATEGORY:
      return state.set('list', removeCategory(action.payload, state.get('list')));
    default:
      return state;
  }
}
