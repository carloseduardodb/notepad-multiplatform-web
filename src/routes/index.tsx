import React from "react";
import { Route, Switch } from "react-router-dom";

import Decision from "../pages/Decision";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Editor from "../pages/Editor";
import Profile from "../pages/Profile";

const Routes: React.FC = () => (
  <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/repository/:repository+" component={Repository} />
  </Switch>
);