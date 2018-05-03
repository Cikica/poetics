import { propEq } from 'ramda';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

import Story__StoryFile from './../transformers/Story__StoryFile';
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
          Story__StoryFile({
            title: writeState.title,
            text: writeState.text
          })
        )
      )
      .catch(() => Observable.empty())
    )
    .map(saveCompleteAction);
};
