import React from 'react';
import ReactDOM from 'react-dom';
import SignupContainer from './components/session/signup_container';
import Root from './components/root';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
  }
  ReactDOM.render(<Root store={store}/>, root);
  
});
 
