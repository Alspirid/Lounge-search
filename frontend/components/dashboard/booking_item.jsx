import React from 'react';
import { Link } from 'react-router-dom';
require('date-util');



class BookingItem extends React.Component {
  constructor(props) {
    super(props);
    this.deleteBooking = this.props.deleteBooking;
    this.id = this.props.booking.id;
  }
  
  cancel() {
    return (e) => {
      this.deleteBooking(this.props.booking.id);
    };
  }
  
  render(){
    let arrival = '';
    let departure = '';
    if (this.props.booking){
      arrival = this.props.booking.arrival.slice(5,10);
      departure = this.props.booking.departure.slice(5,10);
    }
    return (
      <tr className='booking-item'>
      <td>{this.props.index + 1}</td>
      <td>{this.props.booking.area}</td>
      <td><Link to={`users/${this.props.booking.host_id}`}>
        {this.props.booking.host}</Link></td>
      <td>{arrival}</td>
      <td>{departure}</td>
      <td>{this.props.booking.accepted}</td>
      <td><button onClick={this.cancel()} 
        className='cancel-booking'>Cancel</button></td>
    </tr>
    );
  }
}



export default BookingItem;
