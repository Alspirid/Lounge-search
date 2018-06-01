import React from 'react';
import { Link } from 'react-router-dom';




class HostingItem extends React.Component {
  constructor(props) {
    super(props);
    this.updateBooking = this.props.updateBooking;
    this.id = this.props.hosting.id;
    this.accepted = this.props.hosting.accepted;
    
    this.action =  this.accepted === 'pending' || 
    this.accepted === 'cancelled' ? 'Confirm' : 'Cancel';
    
    this.update = this.update.bind(this);
    this.deny = this.deny.bind(this);
  }
  
  update() {
      if (this.accepted === 'pending') {
        this.accepted = 'confirmed';
      } else if (this.accepted === 'confirmed') {
        this.accepted = 'cancelled';
      } else {
        this.accepted = 'confirmed';
      }
      this.updateBooking({id: this.id, accepted: this.accepted});
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
    const arrival = this.props.hosting.arrival.slice(5,10);
    const departure = this.props.hosting.departure.slice(5,10);
    this.accepted = this.props.hosting.accepted;    
    this.action =  this.accepted === 'pending' || 
    this.accepted === 'cancelled' ? 'Confirm' : 'Cancel';
    
    return (
      <tr className='booking-item'>
      <td>{this.props.index + 1}</td>
      <td>{this.props.hosting.area}</td>
      <td><Link to={`users/${this.props.hosting.traveler_id}`}>
        traveler</Link></td>
      <td>{arrival}</td>
      <td>{departure}</td>
      <td>{this.accepted}</td>
      <td>
        <button onClick={this.update} 
        className='confirm-booking'>{this.action}</button> 
    </td>
    </tr>
    );
  }
}
  


export default HostingItem;
