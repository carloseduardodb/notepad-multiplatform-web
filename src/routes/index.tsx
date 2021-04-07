import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Decision from '../pages/Decision';
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
      <Route path="/" exact component={Decision} />
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

/**
 * Olá boa noite, sou o Carlos do setimo periodo de licenciatura em computação! Eu fiz o cadastro pra pagar a disciplina de
 * Lógica Matemática mas vi que os horarios coincidem com educação a distancia,
 * acredito que se manter remoto desta forma eu consigo assistir as aulas gravadas
 * e assim pagar essa dependencia. Será que eu posso fazer isso?
 */
