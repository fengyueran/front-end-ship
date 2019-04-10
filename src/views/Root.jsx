import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { createHashHistory } from 'history';

import Home from './Home';

const history = createHashHistory();

const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
);

export default App;
