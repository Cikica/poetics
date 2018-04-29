import { propEq } from 'ramda';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

// Api & Actions
import saveStory from './../api/saveStory';
import WriteActions, { saveCompleteAction } from './../Write/WriteActions';

export default (action$, store) => {
  return action$
    .filter(propEq('type', WriteActions.SAVE))
    .map(() => store.getState().write)
    .mergeMap((writeState) =>
      Observable.fromPromise(
        saveStory(
          writeState.title,
          writeState.text
        )
      )
      .catch(() => Observable.empty())
    )
    .map(saveCompleteAction);
};
