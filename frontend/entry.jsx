import React from 'react';
import ReactDOM from 'react-dom';
import SignupContainer from './components/session/signup_container';
import Root from './components/root';
import configureStore from './store/store';


import * as bookingAPI from './utils/booking_util';

document.addEventListener('DOMContentLoaded', () => {
  
  const root = document.getElementById('root');
  let preloadedState = {};
  window.createBooking = bookingAPI.createBooking;
  window.deleteBooking = bookingAPI.deleteBooking;
  window.updateBooking = bookingAPI.updateBooking;
  window.fetchBooking = bookingAPI.fetchBooking;
  window.fetchBookings = bookingAPI.fetchBookings;
  
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
  }
  const store = configureStore(preloadedState);
  delete window.currentUser;
  window.store = store;
  ReactDOM.render(<Root store={store} />, root);
  
});
 
