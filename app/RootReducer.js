import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import WriteReducer from './Write/WriteReducer';

const rootReducer = combineReducers({
  write: WriteReducer,
  router,
});

export default rootReducer;
