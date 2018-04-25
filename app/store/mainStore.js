import { createStore, applyMiddleware, compose } from 'redux';
import { forwardToRenderer, triggerAlias, replayActionMain } from 'electron-redux';

import RootReducer from './../RootReducer';

export default () => {

  let store = createStore(
    RootReducer,
    {},
    applyMiddleware(
      triggerAlias,
      forwardToRenderer,
    ),
  );

  replayActionMain(store);

  return store;

}
