/* globals __PRODUCTION__ */
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { hashHistory } from 'react-router';
import reducer from './reducer';

export default function makeStore(initialState) {
  const createLogger = require('redux-logger');
  const logger = createLogger({
    level: 'info',
    collapsed: true
  });

  const middlewares = [
    routerMiddleware(hashHistory),
    logger
  ];

  const mw = compose(
    applyMiddleware(...middlewares)
  );

  const store = createStore(reducer, initialState, mw);
  window.store = store;

  return store;
}
