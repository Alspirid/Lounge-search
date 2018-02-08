import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import { AuthRoute, ProtectRoute } from '../utils/route_utils';
import LoginContainer from './session/login_container';
import MainPage from './home/main';
import DashboardContainer from './dashboard/dashboard_container';
import LocationContainer from './locations/location_index_container';
import LocationShowContainer from './locations/location_show_container';
import LocationSearchContainer from './search/location_search_container';
import UserContainer from './users/user_container';

export default () => (
  <div>
    <AuthRoute exact path='/' component={NavBarContainer} />
    <Route exact path='/' component={MainPage} />
    <ProtectRoute path='/' component={NavBarContainer} />
    <ProtectRoute exact path='/dashboard' component={DashboardContainer} />
    <ProtectRoute exact path='/locations' component={LocationContainer} />
    <ProtectRoute path="/locations/:locationId" 
      component={LocationShowContainer} />
    <ProtectRoute exact path='/search' component={LocationSearchContainer} />
    <ProtectRoute path="/users/:userId" 
      component={UserContainer} />
  </div>
  
);
    // <ProtectRoute exact path='/search' component={NavBarContainer} />
    //   <ProtectRoute path='/locations' component={NavBarContainer} />
    // <ProtectRoute exact path='/dashboard' component={NavBarContainer} />
