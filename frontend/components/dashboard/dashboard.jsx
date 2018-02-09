import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.fetchUser(this.props.currentUserId);
  }
  
  componentWillReceiveProps(nextProps) {
    
  }
  
  render() {
    // console.log(this.props.currentUser);
    let display;
    if (this.props.currentUser) {
      this.hostStatus = this.props.currentUser.is_host ? 'Accepting Guests' : 'Not Accepting Guests ';
      display = (
        <div className='row dashboard-background'>    
        <div className='dashboard'>
          <div className='dashboard-left'>
            <ul>
              <li><img src={this.props.currentUser.image_url}></img></li>
              <li><h1>{this.props.currentUser.username}</h1></li>
              <li><p>{this.props.currentUser.about_text}</p></li>
              <li><h3>{this.props.currentUser.email}</h3></li>
              <li><h3>Location: {this.props.currentUser.location.area}</h3></li>              
            </ul>
            <h2>{this.hostStatus}</h2>    
          </div>
          <div className='dashboard-right'>
            <div className='dashboard-locations'>
              <h1>Explore the city's best spots with locals...</h1>
              <div className='dashboard-item'>
                <Link to='/locations/1'><img src='https://italystorie.files.wordpress.com/2015/01/ggbridge_old_coast_guard_station.jpg'></img></Link>
                <Link to='/locations/2'><img src='http://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/VCW_D_SFcity_FishermanWharf_1280x642_sized.jpg'></img></Link>
                <Link to='/locations/3'><img src='https://media-cdn.tripadvisor.com/media/photo-s/06/34/72/78/chinatown.jpg'></img></Link>
              </div>
            </div>
            <div className='dashboard-travel-plans'>
              <h1>My Travel Plans</h1>
                <div className='dashboard-item'>
                  <h2>You don't have any plans yet...</h2>
                </div>

            </div>
          </div>
        </div>
        </div>
      );
    } else {
      display = "Loading";
    }
    
    return(
      <div>
        {display}
      </div>
    );
  }
  
}

export default Dashboard;
