import { combineEpics } from 'redux-observable';

import SaveStoryEpic from './epics/SaveStoryEpic';
import OpenStoryEpic from './epics/OpenStoryEpic';

export default combineEpics(
  SaveStoryEpic,
  OpenStoryEpic
);
