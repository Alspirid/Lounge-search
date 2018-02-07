import * as  APILocation from '../utils/locations_api';

export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';
export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS';
export const RECEIVE_SEARCH_RESUTLS = 'RECEIVE_SEARCH_RESUTLS';



const receiveLocation = location => ({
  type: RECEIVE_LOCATION,
  location
});

const receiveLocations = locations => ({
  type: RECEIVE_LOCATIONS,
  locations
});

export const fetchLocations = () => dispatch => (
  APILocation.fetchLocations().then( locations => ( 
    dispatch(receiveLocations(locations))
  ))
);

export const fetchLocation = id => dispatch => (
  APILocation.fetchLocation(id).then( location => ( 
    dispatch(receiveLocation(location))
  ))
);

export const createLocation = loc => dispatch => (
  APILocation.createLocation(loc).then( location => ( 
    dispatch(receiveLocation(location))
  ))
);

export const searchLocations = searchTerm => dispatch => (
  APILocation.searchLocations(searchTerm).then(
    locations => dispatch(receiveLocations(locations))
  )
);
