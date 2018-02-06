import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import { AuthRoute, ProtectRoute } from '../utils/route_utils';
import LoginContainer from './session/login_container';
import MainPage from './home/main';
import DashboardContainer from './dashboard/dashboard_container';

export default () => (
  <div>
    <AuthRoute path='/' component={NavBarContainer} />
    <Route exact path='/' component={MainPage} />
    <ProtectRoute path='/' component={NavBarContainer} />
    <ProtectRoute exact path='/dashboard' component={DashboardContainer} />
  </div>
  
);
