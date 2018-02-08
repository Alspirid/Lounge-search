import { RECEIVE_USER, RECEIVE_USERS, RECEIVE_REVIEW } 
from '../actions/user_actions';
import merge from 'lodash/merge';

const userReducer =  (state = [], action) => {
  console.log(action);
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      // return merge({}, state, {[action.payload.user.id]: action.payload.user});
      let newState =  merge({}, state, {[action.payload.user.id]: action.payload.user});
      newState.reviews = action.payload.reviews;
      return newState;
      
    case RECEIVE_USERS:
      return action.users;
    default:
      return state;
  }
};

export default userReducer;
