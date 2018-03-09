import * as ApiUtil from '../utils/booking_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS';
export const CLEAR_BOOKING_ERRORS = 'CLEAR_BOOKING_ERRORS';

export const receiveBookingErrors = errors => ({
  type: RECEIVE_BOOKING_ERRORS,
  errors
});

export const clearBookingErrors = () => ({
  type: CLEAR_BOOKING_ERRORS
});


export const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings
});

export const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking
});

const removeBooking = booking => ({
  type: REMOVE_BOOKING,
  booking
});

export const fetchBookings = () => dispatch => (
  ApiUtil.fetchBookings().then(bookings => (
    dispatch(receiveBookings(bookings))
  ))
);

export const fetchBooking = id => dispatch => (
  ApiUtil.fetchBooking(id).then(booking => (
    dispatch(receiveBooking(booking))
  ))
);

export const createBooking = booking => dispatch => (
  ApiUtil.createBooking(booking).then(bookingResult => (
    dispatch(receiveBooking(bookingResult))
  ), err => (
    dispatch(receiveBookingErrors(err.responseJSON))
  ))
);

export const updateBooking = booking => dispatch => (
  ApiUtil.updateBooking(booking).then(bookingResult => (
    dispatch(receiveBooking(bookingResult))
  ), err => (
    dispatch(receiveBookingErrors(err.responseJSON))
  ))
);

export const deleteBooking = booking => dispatch => (
  ApiUtil.deleteBooking(booking).then(bookingResult => (
    dispatch(removeBooking(bookingResult))
  ))
);
