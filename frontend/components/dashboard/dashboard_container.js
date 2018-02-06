import React from 'react';
import { connect } from 'react-redux';
import { fetchUser, fetchUsers} from '../../actions/user_actions';
import Dashboard from './dashboard';

const mapStateToProps = state => {
  let currentUserId = state.session.currentUser.id;
  return (
    {
      currentUserId: state.session.currentUser.id,
      currentUser: state.users[currentUserId],
    }
  );
};


const mapDispatchToProps = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
