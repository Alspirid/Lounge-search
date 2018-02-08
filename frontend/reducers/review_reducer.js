import merge from 'lodash/merge';

import {
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW,
} from '../actions/review_actions';

import { RECEIVE_USER } from '../actions/user_actions';


const reviewReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_REVIEWS:
      return merge({}, action.reviews);
    case RECEIVE_REVIEW:
      return merge({}, state, {[action.review.id]: action.review});
    case REMOVE_REVIEW:
      newState = merge({}, state);
      delete newState[action.review.id];
      return newState;
    case RECEIVE_USER:
        return merge({}, state, action.payload.reviews);  
    default:
      return state;
  }
};

export default reviewReducer;
