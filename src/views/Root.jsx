import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { createHashHistory } from 'history';

import { ROUTES } from 'src/utils/constants';
import Home from './Home';
import AnswerPage from './AnswerPage';

const history = createHashHistory();

const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact path={ROUTES.ROOT} component={Home} />
      <Route path={ROUTES.ANSWER} component={AnswerPage} />
    </Switch>
  </Router>
);

export default App;
