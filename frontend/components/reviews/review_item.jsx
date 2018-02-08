import React from 'react';

const ReviewItem = ({review,author}) => (
  <li>
    <div className='profile-review-title'>
      {review.title}
    </div>
    <div className='profile-review-body'>
      {review.body}
    </div>
    <div className='profile-review-author'>{author}</div>
  </li>
);


export default ReviewItem;
