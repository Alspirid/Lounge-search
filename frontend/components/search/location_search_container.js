import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { searchLocations } from '../../actions/location_actions';
import locationSearchResults from './location_search_results';

const mapStateToProps = state => ({
  locations: Object.values(state.locations)
});

const mapDispatchToProps = dispatch => ({
  searchLocations: searchTerm => dispatch(searchLocations(searchTerm)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(locationSearchResults));
