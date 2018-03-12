import React from 'react';
import { Link } from 'react-router-dom';

class BookingAction extends React.Component {
  constructor(props){
    super(props);
    const today = new Date();
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.state = {
      traveler_id: this.props.traveler_id,
      host_id: this.props.host_id,
      arrival: this.formatDate(today),
      departure: this.formatDate(tomorrow),
      accepted: 'pending',
      description: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  formatDate(d){
    const year = d.getFullYear();
    const month = (d.getUTCMonth() + 1) < 10 ? "0" + 
    (d.getUTCMonth() + 1) : (date.getUTCMonth() + 1);
    const date = d.getDate() < 10 ? ("0" + d.getDate()) : d.getDate();
    return year + "-" + month + "-" + date;
  }
  
  componentDidMount() {
  
    // this.setState({
    //   arrival: today,
    //   departure: tomorrow,
    //   description: '',
    // });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.createBooking(this.state);
    this.setState({
      description: "",
    });
  }
  
  update(element){
    return (e) => {
      this.setState({[element]: e.target.value});
    };
  }
  
  render(){
    return (
      <div className='reservation'>
        <form onSubmit={this.handleSubmit}>
          <div className='datepickers'>
          <label>
            Arrival 
            <input id='arrival' type="date" name="arrival" 
              value={this.state.arrival}
              onChange={this.update('arrival')}    
            />
          </label>
          <label>
            Departure 
            <input id='departure' type="date" name="departure"
              value={this.state.departure} 
              onChange={this.update('departure')}
             />
          </label>
          </div>
          <div className='host-message'>
            <textarea placeholder="Message for host" 
              value={this.state.description}
              onChange={this.update('description')}
               />
          </div>
          <div className='submit-booking'>
            <input type="reset" value="Reset" />
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
  
}

export default BookingAction;
  
