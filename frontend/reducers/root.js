import { combineReducers } from 'redux';
import sessionReducer from './session';
import errorReducer from './session_errors_reducer';
import userReducer from './user';

export default combineReducers({
  session: sessionReducer,
  errors: errorReducer,
  users: userReducer,
});
