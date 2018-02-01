import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import MainPage from './main.jsx';

export default () => (
  <Switch>
    <Route path='/signup' component={SignupContainer} />
    <Route path='/' component={MainPage} />
  </Switch>
  
);
