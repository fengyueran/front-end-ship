import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { createHashHistory } from 'history';

import Home from './Home';
import AnswerPage from './AnswerPage';

const history = createHashHistory();

const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/answer" component={AnswerPage} />
    </Switch>
  </Router>
);

export default App;
