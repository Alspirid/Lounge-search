import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLocations from './dashboard_locations';
import DashboardLeft from './dashboard_left';
import BookingIndex from './booking_index';
import HostingIndex from './hosting_index';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.fetchUser(this.props.currentUserId);
    this.props.fetchBookings();
    this.props.fetchLocations();
  }
  
  componentWillReceiveProps(nextProps) {
    // if (nextProps.bookings) {
    // }
  }
  
  render() {
    let locations;
    if (this.props.locations) {
      locations = this.props.locations;
    }
    let display;
    if (this.props.currentUser) {
      display = (
        <div className='row dashboard-background'>    
        <div className='dashboard'>
          <DashboardLeft currentUser={this.props.currentUser}/>
          <div className='dashboard-right'>
            <div className='dashboard-travel-plans'>
            <BookingIndex deleteBooking={this.props.deleteBooking}
              bookings={this.props.bookings}/>
            <HostingIndex hostings={this.props.hostings}
              updateBooking={this.props.updateBooking}
              deleteBooking={this.props.deleteBooking} 
            />
            </div>
          </div>          
        </div>
        <DashboardLocations locations={locations}/>          
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

//   
