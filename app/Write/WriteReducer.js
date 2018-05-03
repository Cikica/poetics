import { pipe, identity, T, cond, flip, propEq, assoc } from 'ramda';

import WriteActions from './WriteActions';
import WriteState, { visibleText } from './WriteState';

export default (state = new WriteState(), action) => cond([
  [flip(propEq("type", WriteActions.WRITE)), typeText],
  [flip(propEq("type", WriteActions.WRITE_TITLE)), typeTitle],
  [flip(propEq("type", WriteActions.OPEN_COMPLETE)), openStory],
  // [flip(propEq("type", WriteActions.SAVE)), (state) => {console.log('save'); return state;}],
  [T, identity]
])(state, action);

function openStory (state, action) {
  return assoc(
    'text',
    action.payload,
    state
  );
}

function typeTitle (state, action) {
  return assoc(
    'title',
    action.payload,
    state
  );
}

function typeText (state, action) {
  return assoc(
    'text',
    action.payload,
    state
  );
}
