import React from 'react';
import { Link } from 'react-router-dom';
import ReviewFormContainer from '../reviews/review_form_container';
import ReviewItem from  '../reviews/review_item';

class userProfile extends React.Component {
  constructor(props){
    super(props);
    this.author = window.currentUser.username;
  }
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }
  
  render() {
    let display = <div></div>;
    let reviews = <div>This user doesn't have any reviews yet.</div>;
    
    console.log(this.props);
    if (this.props.reviews.length > 0) {
      reviews = this.props.reviews.map((review,idx) => (
          <ReviewItem author={this.author} key={review.id} review={review}/>
      ));
    }
    if (this.props.user) {
      display = (
          <div className='profile-item'>
            <img src={this.props.user.image_url}></img>
            <h1>{this.props.user.username}</h1>
            <Link to={`/locations/${this.props.user.location.id}`}>
              <h2>{this.props.user.location.area}</h2></Link>
          </div>
      );
    } else {
      display = 'Loading..';
    }
    
    return (
      <div className='row location-background'>
        <div className='profile-container'>
        { display }
        <div className='profile-reviews-container'>
          <div className='profile-review'>
            <h1>Reviews</h1>
            <ul>
            {reviews}
            </ul>
          </div>
          <div className='profile-review-form'>
            <ReviewFormContainer userId={this.props.userId} 
              authorId={this.props.authorId}/>
          </div>
        </div>
        <div className='profile-booking-container'>
          <h1>Bookings</h1>
        </div> 
      </div>
      </div>
    );
  }
}

export default userProfile;
