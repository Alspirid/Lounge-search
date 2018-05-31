import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import modalStyles from './modal_styles';

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
      modalIsOpen: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.cancel = this.cancel.bind(this);
  }
  
  formatDate(d){
    const year = d.getFullYear();
    const month = (d.getUTCMonth() + 1) < 10 ? "0" + 
    (d.getUTCMonth() + 1) : (date.getUTCMonth() + 1);
    const date = d.getDate() < 10 ? ("0" + d.getDate()) : d.getDate();
    return year + "-" + month + "-" + date;
  }
  
  openModal() { 
    return (e) => {
      this.setState({modalIsOpen: true});
    };
  }

  closeModal(e) {
     e.preventDefault();
     this.props.createBooking(this.state);
     this.setState({
       modalIsOpen: false,
     });
  }
  cancel(e) {
     e.preventDefault();
     this.setState({modalIsOpen: false});
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      modalIsOpen: true,
    });
  }
  
  update(element){
    return (e) => {
      this.setState({[element]: e.target.value});
    };
  }
  
  modalWindow(){
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen} 
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={modalStyles}
          contentLabel="Booking confirmation"
          ariaHideApp={false} >
          <span onClick={this.closeModal} className="modal-close">&times;</span>
          <div className='confirmation-container'>
            <h2>Thank you for booking</h2> 
            <div className='booking-details'>
              <div className='arrival-departure'>
              <p><strong>Arrival:</strong><br/> {this.state.arrival}</p> 
              <p><strong>Departure:</strong><br/>{this.state.departure} </p>
              </div>
              <div className='message'>
                <p><strong>Message to host</strong></p>
                {this.state.description}
              </div>
            </div>  
            <div className='booking-submit'>
              <button onClick={this.cancel} id='cancel'>Cancel</button>
              <button onClick={this.closeModal} id='confirm'>Confirm</button>
            </div>
          </div>  
        </Modal>
      </div>
    );
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
            <textarea placeholder="Message for this host" 
              value={this.state.description}
              onChange={this.update('description')}
               />
          </div>
          <div className='submit-booking'>
            <input type="reset" value="Reset" />
            <input type="submit" value="Submit" />
          </div>
        </form>
        { this.modalWindow() }
      </div>
    );
  }
  
}

export default BookingAction;
  
