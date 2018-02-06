import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

// 
const Auth = ({loggedIn, path, exact, component: Component}) => (
  <Route path={path} exact={exact}
    render={ props => (
      loggedIn ? <Redirect to="/dashboard" /> : <Component {...props} />
    )}
  />  
);

const Protected = ({loggedIn, path, exact, component: Component}) => (
  <Route
    path={path}
    exact={exact}
    render={ props => (
      loggedIn ? <Component {...props} /> : <Redirect to='/' />
    )}
  />  
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectRoute = withRouter(connect(mapStateToProps)(Protected));
