import merge from 'lodash/merge';

import { RECEIVE_LOCATION, 
         RECEIVE_LOCATIONS, 
         RECEIVE_SEARCH_RESUTLS 
       } from '../actions/location_actions';

 const LocationReducer = ( state={}, action ) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_LOCATIONS:
      return merge({}, action.locations);
    case RECEIVE_LOCATION:
      return merge({}, state, {[action.location.id]: action.location});
  }
};


export default LocationReducer;
