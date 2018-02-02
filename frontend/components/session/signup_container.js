import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';

import Signup from './signup';


const mapStateToProps = state => {
  if (state.errors){
    return { errors: state.errors };
  } else {
    return {errors: []};
  }
};

const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
