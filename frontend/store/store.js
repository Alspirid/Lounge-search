import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import rootReducer from '../reducers/root';
import thunk from 'redux-thunk';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  // must use 'require' (import only allowed at top of file)
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

export default (preloadedState = {}) => createStore(
  rootReducer, preloadedState,
  applyMiddleware(...middlewares)
  // applyMiddleware(thunk, logger)
);
