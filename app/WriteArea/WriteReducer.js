import { identity, T, cond, flip, propEq } from 'ramda';

import WriteActions from './WriteActions';
import WriteState from './WriteState';

export default (state = new WriteState(), action) => cond([
  [flip(propEq("type", WriteActions.WRITE)), typeText],
  [T, identity]
])(state, action);

function typeText (state, action) {
  return state;
}
