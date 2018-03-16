import React from 'react';
import LocatonIndexItem from '../locations/location_index_item';

class locationSearchResults extends React.Component {
  render(){
    let locations = this.props.locations;
    let message;
    let locationItems;
    if (locations.length > 0){
      message = '';
      locationItems = locations.map( location =>(
        <LocatonIndexItem key={location.id} location={location} />
      ));
    } else {
      message = 'No results found';
      locationItems = <div></div>;
    }
  return(
    <div className='row location-background'>
      <h1 className='location-slogan'>{ message }</h1>
        <div className='locations'>
          <ul>
            {locationItems}
          </ul>
        </div>
    </div>
  );    
  }
}

export default locationSearchResults; 
