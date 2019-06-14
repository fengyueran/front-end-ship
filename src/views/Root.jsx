import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { createHashHistory } from 'history';

import { ROUTES } from 'src/utils/constants';
import PrimaryLayout from './PrimaryLayout';

const history = createHashHistory();

const App = () => (
  <Router history={history}>
    <Switch>
      <Route path={ROUTES.ROOT} component={PrimaryLayout} />
    </Switch>
  </Router>
);

export default App;
