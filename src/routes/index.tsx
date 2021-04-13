import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ResendEmail from '../pages/ResendEmail';
import Home from '../pages/Home';
import Editor from '../pages/Editor';
import Profile from '../pages/Profile';
import VerifyAccount from '../pages/VerifyAccount';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/verify-account" component={VerifyAccount} />
      <Route path="/register" component={Register} />
      <Route path="/resend-email" component={ResendEmail} />
      <Route path="/home" component={Home} />
      <Route path="/editor" component={Editor} />
      <Route path="/profile" component={Profile} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
