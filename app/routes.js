import React from 'react';
import { Switch, Route } from 'react-router';

import Write from './Write/Write';

export default () => (
  <Switch>
    <Route path="/" component={Write} />
  </Switch>
);
