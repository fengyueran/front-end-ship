import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { ROUTES } from 'src/utils/constants';
import PrimaryLayout from './PrimaryLayout';

const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <Switch>
      <Route path={ROUTES.ROOT} component={PrimaryLayout} />
    </Switch>
  </Router>
);

export default App;
