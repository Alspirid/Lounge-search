import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout, login, createNewUser, clearErrors } 
from '../../actions/session';

const mapStateToProps = state => {
  if (state.errors) {
    return {
      currentUser: state.session.currentUser,
      errors: state.errors
    };
  } else {
    return {
      currentUser: state.session.currentUser,
      errors: []
    };
  }
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user)),
  createNewUser: (user) => dispatch(createNewUser(user)),
  clearErrors: () => dispatch(clearErrors())
});


export default connect(mapStateToProps,mapDispatchToProps)(NavBar);
