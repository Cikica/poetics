// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import WriteReducer from './WriteArea/WriteReducer';

const rootReducer = combineReducers({
  write: WriteReducer,
  router,
});

export default rootReducer;
