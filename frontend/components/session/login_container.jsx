import Reach from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session';
import Login from './login';


const mapStateToProps = state => {
  if (state.errors){
    return { errors: state.errors };
  } else {
    return {errors: []};
  }
};

const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(login(formUser)),
});

export default connect (mapStateToProps, mapDispatchToProps)(Login);
