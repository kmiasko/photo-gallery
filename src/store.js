import { createStore, applyMiddleware, compose } from 'redux';
// import { composeWithDevTools } from 'redux-devtools';
import thunk from 'redux-thunk';
import reducer from './reducers/reducer';

const middleware = [thunk];

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */
// const composeEnhancers = composeWithDevTools();


export default function configureStore(initialState) {
  if (__DEV__) {
    const finalCreateStore = composeEnhancers(
      applyMiddleware(...middleware),
    )(createStore);
    return finalCreateStore(reducer, initialState);
  }
  return createStore(reducer,
    applyMiddleware(...middleware),
    initialState
  );
}
