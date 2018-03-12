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
    return (
      <tr className='booking-item'>
      <td>{this.props.index + 1}</td>
      <td>{this.props.booking.area}</td>
      <td>{this.props.booking.host}</td>
      <td>{(this.props.booking.arrival).slice(0,10)}</td>
      <td>{(this.props.booking.departure).slice(0,10)}</td>
      <td>{this.props.booking.accepted}</td>
      <td><button onClick={this.cancel()} 
        className='cancel-booking'>Cancel</button></td>
    </tr>
    );
  }
}



export default BookingItem;
