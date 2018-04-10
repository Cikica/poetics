import { pipe, identity, T, cond, flip, propEq, assoc } from 'ramda';

import WriteActions from './WriteActions';
import WriteState, { visibleText } from './WriteState';

export default (state = new WriteState(), action) => cond([
  [flip(propEq("type", WriteActions.WRITE)), typeText],
  [flip(propEq("type", WriteActions.SAVE)), (state) => {console.log('save'); return state;}],
  [T, identity]
])(state, action);

function typeText (state, action) {
  return assoc(
    'text',
    action.text,
    state
  );
}
