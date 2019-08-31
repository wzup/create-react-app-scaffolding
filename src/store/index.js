import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '../reducers';
import config from '../config';

const middlewares = [];

// if (config.env === 'development') {
//   middlewares.push(myThunk, myLogger, sagaMiddleware)
// }

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
