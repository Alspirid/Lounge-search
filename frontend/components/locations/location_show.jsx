import React from 'react';
import { Link } from 'react-router-dom';

class LocationShow extends React.Component {
  
  constructor(props){
    super(props);
  }
  
  componentDidMount(){
    this.props.fetchLocation(this.props.locationId);
  }
  
  render(){
    let display;
    if (this.props.location){
      display = (
        <div className='row location-background '>
          <div className='location-show-image'>
            <img src={this.props.location.image_url}></img>
          </div>
          <div className='location-show'>
            <h1 className='location-title'>{this.props.location.area}</h1>
          </div>
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
