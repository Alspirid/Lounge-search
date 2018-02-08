import React from 'react';
import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions.js';
import reviewForm from './review_form';

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review))
});


export default connect(null,mapDispatchToProps)(reviewForm);
