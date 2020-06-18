import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Register from '../pages/Register';
import Edit from '../pages/Edit';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/register" component={Register} />
      <Route path="/edit" component={Edit} />
    </Switch>
  );
}
