import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { createHashHistory } from 'history';

import { ROUTES } from 'src/utils/constants';
import PrimaryLayout from './PrimaryLayout';

const history = createHashHistory();

const App = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route path={ROUTES.ROOT} component={PrimaryLayout} />
    </Switch>
  </BrowserRouter>
);

export default App;
