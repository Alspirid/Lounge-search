import React from 'react';
import ReactDOM from 'react-dom';
import SignupContainer from './components/session/signup_container';
import Root from './components/root';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store}/>, root);
  
});
