import React from 'react';
import { connect } from 'react-redux';
import { fetchUser, fetchUsers} from '../../actions/user_actions';
import { createBooking } from '../../actions/booking_actions';
import userProfile from './user_profile';

const mapStateToProps = (state, ownProps) => {
  let user;
  let userId;
  let reviews;
  let location;
  let currentUser;
  const author = state.session.currentUser;
  if (ownProps.match.path === '/users/:userId'){
    userId = ownProps.match.params.userId;
    user = state.users[ownProps.match.params.userId];
    reviews = Object.values(state.reviews).filter((element)=>{
      return element.user_id == userId;
    });
    currentUser = state.session.currentUser;
  }
  return {userId, user, author, reviews, currentUser};
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  createBooking: booking => dispatch(createBooking(booking)),
});


export default connect(mapStateToProps, mapDispatchToProps)(userProfile);
