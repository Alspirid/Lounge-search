import React from 'react';
import ReactDOM from 'react-dom';
import SignupContainer from './components/session/signup_container';
import Root from './components/root';
import configureStore from './store/store';
import * as UserAPI from './utils/user_util';
import {fetchLocation, fetchLocations} from './utils/locations_api';

document.addEventListener('DOMContentLoaded', () => {
  
  const root = document.getElementById('root');
  let preloadedState = {};
  window.fetchLocations = fetchLocations;
  window.store = store;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
  }
  const store = configureStore(preloadedState);
  ReactDOM.render(<Root store={store} />, root);
  
});
 
