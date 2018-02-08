import React from 'react';
import { connect } from 'react-redux';
import { fetchUser, fetchUsers} from '../../actions/user_actions';
import userProfile from './user_profile';

const mapStateToProps = (state, ownProps) => {
  let user;
  let userId;
  let reviews;
  let location;
  const authorId = state.session.currentUser.id;
  if (ownProps.match.path === '/users/:userId'){
    userId = ownProps.match.params.userId;
    user = state.users[ownProps.match.params.userId];
    reviews = Object.values(state.reviews);
  }
  return {userId, user, authorId, reviews};
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(userProfile);
