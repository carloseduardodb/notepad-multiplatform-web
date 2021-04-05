import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Decision from '../pages/Decision';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ResendEmail from '../pages/ResendEmail';
import Home from '../pages/Home';
import Editor from '../pages/Editor';
import Profile from '../pages/Profile';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Decision} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/resend-email" component={ResendEmail} />
      <Route path="/home" component={Home} />
      <Route path="/editor" component={Editor} />
      <Route path="/profile" component={Profile} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
