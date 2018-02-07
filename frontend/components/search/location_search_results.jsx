import React from 'react';
import LocatonIndexItem from '../locations/location_index_item';

class locationSearchResults extends React.Component {
  render(){
    let locations = this.props.locations;
    let locationItems;
    if (locations.length > 0){
      locationItems = locations.map( location =>(
        <LocatonIndexItem key={location.id} location={location} />
      ));
    } else {
      locationItems = <div></div>;
    }
  return(
    <div className='row location-background'>
      <h1 className='location-slogan'>Location search results ...</h1>
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
