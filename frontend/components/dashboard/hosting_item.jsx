import React from 'react';
import { Link } from 'react-router-dom';




class HostingItem extends React.Component {
  constructor(props) {
    super(props);
    this.updateBooking = this.props.updateBooking;
    this.deleteBooking = this.props.deleteBooking;
    this.id = this.props.hosting.id;
  }
  
  confirm() {
    const booking = {
      id: this.id,
      accepted: 'confirmed'
    };
    return (e) => {
      this.updateBooking(booking);
    };
  }
  deny() {
    const booking = {
      id: this.id,
      accepted: 'denied'
    };
    return (e) => {
      this.updateBooking(booking);
    };
  }
  
  delete() {
    return (e) => {
      this.deleteBooking(this.id);
    };
  }
  
  render(){
    return (
      <tr className='booking-item'>
      <td>{this.props.index + 1}</td>
      <td>{this.props.hosting.area}</td>
      <td><Link to={`users/${this.props.hosting.traveler_id}`}>
        traveler</Link></td>
      <td>{(this.props.hosting.arrival).slice(0,10)}</td>
      <td>{(this.props.hosting.departure).slice(0,10)}</td>
      <td>{this.props.hosting.accepted}</td>
      <td>
        <button onClick={this.confirm()} 
        className='confirm-booking'>Confirm</button>
      <button onClick={this.deny()} 
        className='confirm-booking'>Deny</button>
      <button onClick={this.delete()} 
          className='confirm-booking'>Delete</button>
    </td>
    </tr>
    );
  }
}



export default HostingItem;
