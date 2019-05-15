import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login } from 'containers/Login';
import { Register } from 'containers/Register';
import { MuiTable } from 'containers/MuiTable';

const routes = (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/table" component={MuiTable} />
  </Switch>
);

export default routes;
