/**
*
* App
*
* This component is the skeleton around the actual pages, and should only
* contain code that should be seen on all pages. (e.g. navigation bar)
*/

import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from 'helpers';
import routes from '../../routes/routes';
import './style.scss';

const App = () => (
  <Router history={history}>
    <Route>{routes}</Route>
  </Router>
);

export default App;
