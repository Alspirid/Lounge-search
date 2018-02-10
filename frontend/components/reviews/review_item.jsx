import React from 'react';

const ReviewItem = ({review,author, currentUser}) => {
  let authorName;
  if (author) {
    authorName = author;
  }  else {
    authorName = currentUser.username;
  }
  return(
  <li>
    <div className='profile-review-title'>
      {review.title}
    </div>
    <div className='profile-review-body'>
      {review.body}
    </div>
    <div className='profile-review-author'>- {authorName}</div>
  </li>
);
};


export default ReviewItem;
