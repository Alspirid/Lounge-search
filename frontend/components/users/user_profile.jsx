import React from 'react';
import { Link } from 'react-router-dom';
import ReviewFormContainer from '../reviews/review_form_container';

class userProfile extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }
  
  render() {
    let display;
    console.log(this.props);
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
            <ReviewFormContainer />
          </div>
          <div className='profile-booking'>
            
          </div>
        </div>  
      </div>  
      </div>
    );
  }
}

export default userProfile;
