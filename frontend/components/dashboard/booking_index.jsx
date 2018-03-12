import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BookingItem from './booking_item';

class BookingIndex extends React.Component {
  constructor(props){
    super(props);
  }
  
  componentDidMount(){
    
  }
  
  render() {
    let display;
    if (this.props.bookings) {
      let message = this.props.bookings.length > 0 ? "Active bookings" : 
      "You don't have any plans yet...";
      display =  (
        <div className='dashboard-travel-plans'>
        <h1>My Travel Plans</h1>
        <h2>{message}</h2>
      <div className='dashboard-bookings'>
      <table> 
          <tbody>
            <tr>
              <td>#</td>
              <td>Location</td>
              <td>Host</td>
              <td>Arrival</td>
              <td>Departure</td>
              <td>Status</td>
              <td></td>
            </tr>
                {this.props.bookings.map((booking,index) =>
                  <BookingItem deleteBooking={this.props.deleteBooking} 
                    index={index} key={booking.id} booking={booking} />
                )}
            </tbody>
          </table> </div>  
        </div>
      );
    } else {
      display = 'Loading..';
    }
    return (
      <div>{ display }</div>
    );
  }
}

export default BookingIndex;
          // {this.props.currentUser.bookings};
