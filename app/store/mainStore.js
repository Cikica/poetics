import { createStore, applyMiddleware, compose } from 'redux';
import { forwardToRenderer, triggerAlias, replayActionMain } from 'electron-redux';

import WriteState from './../Write/WriteState';
import RootReducer from './../RootReducer';

export default () => {

  let store = createStore(
    RootReducer,
    {
      write: new WriteState()
    },
    applyMiddleware(
      triggerAlias,
      forwardToRenderer,
    ),
  );

  replayActionMain(store);

  return store;

}
