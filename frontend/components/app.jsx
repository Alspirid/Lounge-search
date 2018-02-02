import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import { AuthRoute, ProtectRoute } from '../utils/route_utils';
import LoginContainer from './session/login_container';
import MainPage from './home/main';

export default () => (
  <div>
    <Route path='/' component={NavBarContainer} />
    <MainPage />
    <AuthRoute path='/signup' component={SignupContainer} />
    <AuthRoute path='/login' component={LoginContainer} />
  </div>
  
);
