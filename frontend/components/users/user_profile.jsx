import React from 'react';
import { Link } from 'react-router-dom';
import ReviewFormContainer from '../reviews/review_form_container';
import ReviewItem from  '../reviews/review_item';
import BookingAction from './booking_action';

class userProfile extends React.Component {
  constructor(props){
    super(props);
    this.author = this.props.author;
  }
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }
  
  componentWillReceiveProps(nextProps){
    if (this.props.userId !== nextProps.userId ){
      this.props.fetchUser(nextProps.userId);
    } 
 }
  
  render() {
    let display = <div></div>;
    let reviews = <div>This user doesn't have any reviews yet.</div>;
    
    if (this.props.reviews.length > 0) {
      reviews = this.props.reviews.map((review,idx) => (
          <ReviewItem currentUser={this.props.currentUser} 
            author={review.author_name} key={review.id} review={review}/>
      ));
    }
    if (this.props.user) {
      display = (
          <div className='profile-item'>
            <img src={this.props.user.image_url}></img>
            <h1>{this.props.user.username}</h1>
            <Link to={`/locations/${this.props.user.location.id}`}>
              {this.props.user.location.area}</Link>
            <div className='hr'></div>
            <p>{this.props.user.about_text}</p>
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
              authorId={this.props.author.id}/>
          </div>
        </div>
        <div className='profile-booking-container'>
          <h1>Request accommodation</h1>
          <BookingAction traveler_id={this.props.currentUser.id}
            host_id={this.props.userId} 
            createBooking={this.props.createBooking}/>
        </div> 
      </div>
      </div>
    );
  }
}

export default userProfile;
