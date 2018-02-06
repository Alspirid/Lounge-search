import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const LocationIndexItem = ({location}) => (
  <li className='location-index-item'>
    <Link to={`/locations/${location.id}`}>
      <div className='location-index-item-loc'>
        {location.area}
      </div>  
      <img src={location.image_url}></img>  
      
    </Link> 
  </li>
);

export default LocationIndexItem;
