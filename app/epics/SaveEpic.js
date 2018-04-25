import { propEq } from 'ramda';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import WriteActions from './../Write/WriteActions';

export default action$ => {
  return action$
    .filter(propEq('type', WriteActions.SAVE))
    .map(() => {
      console.log('who you');
      return '';
    });
};
