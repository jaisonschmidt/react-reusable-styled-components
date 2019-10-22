import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Dashboard from '../pages/Dashboard/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={Home} />
    </Switch>
  );
}