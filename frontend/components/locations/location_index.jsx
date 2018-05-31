import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import LocationIndexItem from './location_index_item';

class LocationIndex extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.fetchLocations();
  }
  
  render () {
    let display;
    if (this.props.locations) {
      display = this.props.locations.map( location => 
          <LocationIndexItem key={location.id} location={location} /> );
    } else {
      display = 'Loading ...';
    }
    return (
      <div className='row location-background'>
          <div className='locations'>
            <ul>
              {display}
            </ul>
          </div>
      </div>
    );
  }
  
}

export default LocationIndex;
