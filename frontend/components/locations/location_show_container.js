import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchLocation } 
from '../../actions/location_actions.js';
import LocationShow from './location_show';

const mapStateToProps = (state, ownProps) => {
  let location;
  let locationId;
  if (ownProps.match.path === '/locations/:locationId'){
    locationId = ownProps.match.params.locationId; 
    location = state.locations[ownProps.match.params.locationId];
  }
  return {locationId, location};
};


const mapDispatchToProps = dispatch => ({
  fetchLocation: id => dispatch(fetchLocation(id))
});

export default withRouter(connect(
  mapStateToProps,mapDispatchToProps)(LocationShow));
