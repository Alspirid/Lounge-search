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
    let displayBooking;
    let BookingMessage;
    if (this.props.bookings) {
      BookingMessage = this.props.bookings.length > 0 ? "Bookings:" : 
      "You don't have any plans yet...";
      displayBooking =  (
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
                    index={index} key={index} booking={booking} />
                )}
        </tbody>
      </table>
      );
    } else {
      displayBooking = 'Loading..';
    }
    return (
        <div>
        <h1>Bookings and Hostings</h1>
        <div className='dashboard-bookings'>
          <h2>{BookingMessage}</h2>
          { displayBooking }
        </div>
      </div>

    );
  }
}

export default BookingIndex;
