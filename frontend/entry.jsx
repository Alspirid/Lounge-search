import React from 'react';
import ReactDOM from 'react-dom';
import SignupContainer from './components/session/signup_container';
import Root from './components/root';
import configureStore from './store/store';
import * as UserAPI from './utils/user_util';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  let preloadedState = undefined;
  window.fetchUsers = UserAPI.fetchUsers;
  window.store = store;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
  }
  ReactDOM.render(<Root store={store}/>, root);
  
});
 
