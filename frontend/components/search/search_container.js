import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { searchLocations } from '../../actions/location_actions';
import Search from './search';

const mapStateToProps = state => {
  
};

const mapDispatchToProps = dispatch => ({
  searchLocations: searchTerm => dispatch(searchLocations(searchTerm))
});

export default withRouter(connect(null,mapDispatchToProps)(Search));
