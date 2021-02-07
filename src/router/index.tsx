import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'page/Home';
import Register from 'page/Register';

const Router: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/register" component={Register} />
  </Switch>
);

export default Router;
