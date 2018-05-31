import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import HostingItem from './hosting_item';

class HostingIndex extends React.Component {
  constructor(props){
    super(props);
  }
  
  componentDidMount(){
    
  }
  
  render() {
    let HostingMessage;
    let displayHosting;
    const {updateBooking} = this.props;
    if (this.props.hostings) {
      HostingMessage = this.props.hostings && 
      this.props.hostings.length > 0 ? "Hostings:" : 
      "There are no requests from travelers...";
      displayHosting = (
        <table> 
            <tbody>
              <tr>
                <td>#</td>
                <td>Location</td>
                <td>Traveler</td>
                <td>Arrival</td>
                <td>Departure</td>
                <td>Status</td>
                <td></td>
              </tr>
                  {this.props.hostings.map((hosting,index) =>
                    <HostingItem 
                      updateBooking={updateBooking} 
                      index={index} 
                      key={hosting.id} 
                      hosting={hosting}                       
                      />
                  )}
          </tbody>
        </table>
      );
    } else {
      displayHosting = "Loading";
    }
    
    return (
      <div>
        <div className='dashboard-bookings'>
          <h2>{HostingMessage}</h2>
          { displayHosting }
        </div>
      </div>

    );
  }
}

export default HostingIndex;

    // 
