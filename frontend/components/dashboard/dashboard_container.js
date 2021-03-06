import React from 'react';
import { connect } from 'react-redux';
import { fetchUser, fetchUsers} from '../../actions/user_actions';
import Dashboard from './dashboard';
import { fetchBookings, deleteBooking, updateBooking } 
from '../../actions/booking_actions';
import { fetchLocations } from '../../actions/location_actions';

const mapStateToProps = state => {
  let currentUserId = state.session.currentUser.id;
  return (
    {
      currentUserId: state.session.currentUser.id,
      currentUser: state.users[currentUserId],
      bookings: Object.values(state.bookings).filter(element =>{
        return element.traveler_id === state.session.currentUser.id;
      }),
      hostings: Object.values(state.bookings).filter(element =>{
        return element.host_id === state.session.currentUser.id;
      }),
      locations: Object.values(state.locations),
    }
  );
};


  const mapDispatchToProps = dispatch => ({
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchBookings: () => dispatch(fetchBookings()),
    deleteBooking: id => dispatch(deleteBooking(id)),
    updateBooking: booking => dispatch(updateBooking(booking)),
    fetchLocations: () => dispatch(fetchLocations()),
  });

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
