import * as ApiUtil from '../utils/review.js';

export const RECEIVE_REVIEWS ='RECEIVE_REVIEWS';
export const RECEIVE_REVIEW ='RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';


const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

const removeReview = review => ({
  type: REMOVE_REVIEW,
  review
});

export const fetchReviews = () => dispatch => (
  ApiUtil.fetchReviews().then(reviews => (
    dispatch(receiveReviews(reviews))
  ))
);

export const createReview = (review) => dispatch => (
  ApiUtil.createReview(review).then(resultReview => (
    dispatch(receiveReview(resultReview))
  ))
);

export const updateReview = (review) => dispatch => (
  ApiUtil.updateReview(review).then(resultReview => (
    dispatch(receiveReview(resultReview))
  ))
);


export const deleteReview = (review) => dispatch => (
  ApiUtil.removeReview(review).then(resultReview => (
    dispatch(deleteReview(resultReview))
  ))
);
