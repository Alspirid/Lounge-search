import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import LocationIndex from './location_index';

import { fetchLocations, fetchLocation} 
from '../../actions/location_actions.js';

const mapStateToProps = state => {
  return {
    locations: Object.values(state.locations)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchLocations: () => dispatch(fetchLocations()),
  fetchLocation: location => dispatch(fetchLocation(location))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationIndex));
