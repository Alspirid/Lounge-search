import {
  RECEIVE_BOOKINGS,
  RECEIVE_BOOKING,
  REMOVE_BOOKING,
  RECEIVE_BOOKING_ERRORS,
  CLEAR_BOOKING_ERRORS
} from '../actions/booking_actions';

import merge from 'lodash/merge';


const _nullBookingErrors = {
  booking_errors: []
};

export default (state = [], action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_BOOKINGS:
      return merge({}, action.bookings);
    case RECEIVE_BOOKING:
      return merge({}, state, {[action.booking.id]: action.booking});
    case REMOVE_BOOKING:
      newState = merge({}, state);
      delete newState[action.booking.id];
      return newState;
    case RECEIVE_BOOKING_ERRORS:
      return merge({}, state, {booking_errors: action.errors});
    case CLEAR_BOOKING_ERRORS:
      return _nullBookingErrors;
    default:
      return state;
  }
};
