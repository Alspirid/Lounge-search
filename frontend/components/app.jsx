import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import MainPage from './home/main.jsx';
import NavBarContainer from './nav_bar/nav_bar_container';

export default () => (
  <div>
    <Route path='/' component={NavBarContainer} />
    <Route path='/signup' component={SignupContainer} />
  </div>
  
);
// <Route path='/' component={MainPage} />
