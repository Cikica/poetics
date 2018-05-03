import { propEq } from 'ramda';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

// Api & Actions
import openStory from './../api/openStory';
import WriteActions, { openCompleteAction } from './../Write/WriteActions';

export default (action$, store) => {
  return action$
    .filter(propEq('type', WriteActions.OPEN))
    .map(() => store.getState().write)
    .mergeMap((writeState) =>
      Observable.fromPromise(
        openStory()
      )
      .catch(() => Observable.empty())
    )
    .map(openCompleteAction);
};
