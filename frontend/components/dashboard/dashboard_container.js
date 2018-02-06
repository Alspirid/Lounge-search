import React from 'react';
import { connect } from 'react-redux';
import { fetchUser, fetchUsers} from '../../actions/user_actions';
import Dashboard from './dashboard';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});


const mapDispatchToProps = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
