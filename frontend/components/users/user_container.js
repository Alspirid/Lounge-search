import React from 'react';
import { connect } from 'react-redux';
import { fetchUser, fetchUsers} from '../../actions/user_actions';
import userProfile from './user_profile';

const mapStateToProps = (state, ownProps) => {
  let user;
  let userId;
  const authorId = state.session.currentUser.id;
  if (ownProps.match.path === '/users/:userId'){
    userId = ownProps.match.params.userId;
    user = state.users[ownProps.match.params.userId];
  }
  return {userId, user, authorId};
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(userProfile);
