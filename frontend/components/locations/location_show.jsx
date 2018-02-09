import React from 'react';
import { Link } from 'react-router-dom';
import HostItem from './host_item';

class LocationShow extends React.Component {
  
  constructor(props){
    super(props);
  }
  
  componentDidMount(){
    this.props.fetchLocation(this.props.locationId);
  }
  
  render(){
    let display;
    let hosts;
    if (this.props.location){
      if (this.props.location.hosts) {
        hosts = this.props.location.hosts.map(
          host => (<HostItem key={host.id} host={host}/>));
      } else {
        hosts = 'Loading hosts...';
      }
      display = (
        <div className='row location-background '>
          <div className='location-show-image'>
            <img src={this.props.location.image_url}></img>
          </div>
          <div className='location-show'>
            <h1 className='location-title'>{this.props.location.area}</h1>
          </div>
          <h1 className='host-title'>Available hosts</h1>
          <ul className='host-list-container'>
            {hosts}
          </ul>
      </div>  
      );
    } else {
      display = 'Loading...';
    }
    
    return (
      <div>
          {display}
      </div>    
    );
  }
  
}

export default LocationShow;


// {this.props.location.hosts.map(host => (
//   <HostItem host={host}/>
// ))}
