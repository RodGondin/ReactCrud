import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";


import Login from '../pages/Login';
import UserInfo from '../pages/Form';
import Add from '../pages/Add';
import StoreProvider from '../Store/Provider'
import RoutesPrivate from './Private';

const Routes = () => (
  <Router>
    <StoreProvider>
      <Switch>
        <Route exact path="/" component={Login} />
        <RoutesPrivate path="/table" component={UserInfo} />
        <RoutesPrivate path="/create/:id" component={Add} />
        <RoutesPrivate path="/create" component={Add} />
        <Route path="*" component={() => <h1>página não encontrada</h1>} />
      </Switch>
    </StoreProvider>
  </Router>
);

export default Routes;