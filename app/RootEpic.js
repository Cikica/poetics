import { combineEpics } from 'redux-observable';

import SaveStoryEpic from './epics/SaveStoryEpic';

export default combineEpics(
  SaveStoryEpic
);
