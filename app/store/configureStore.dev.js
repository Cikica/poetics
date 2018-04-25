import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createHashHistory } from 'history';
import { routerMiddleware, routerActions } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import { forwardToMain, replayActionRenderer, getInitialStateRenderer } from 'electron-redux';
import { createEpicMiddleware } from 'redux-observable';

import RootReducer from './../RootReducer';
import RootEpic from './../RootEpic';


const getEnhancerComposer = () => {
  if ( window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ) {
    return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ ...routerActions });
  }
  return compose;
}

const history = createHashHistory();
const store = createStore(
  RootReducer,
  getInitialStateRenderer(),
  getEnhancerComposer()(
    applyMiddleware(
      forwardToMain,
      thunk,
      createLogger({
        level: 'info',
        collapsed: true
      }),
      routerMiddleware(history),
      createEpicMiddleware(RootEpic)
    )
  )
);

replayActionRenderer(store);

if (module.hot) {
  module.hot.accept('./../RootReducer', () => store.replaceReducer(require('./../RootReducer')));
}

export default { store, history };
