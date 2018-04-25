import { combineEpics } from 'redux-observable';

import SaveEpic from './epics/SaveEpic';

export default combineEpics(
  SaveEpic
);
