import React from 'react';
import { Link } from 'react-router-dom';

const LOCATIONS = {
  1: 'first-location',
};

const DashboardLocations = ({locations}) => {
  
  return (
  <div className='dashboard-locations'>
    <h1>Explore the city's best spots...</h1>
    <div className='dashboard-item'>
      {
        locations.map(location => {
          return <LocationImage 
            key={location.area} 
            id={location.id} 
            link={location.image_url} 
          />;
        })
      }
    </div>
  </div>
  );
};

const LocationImage = ({id,link}) => {
  return (
    <Link to={`/locations/${id}`}>
      <img 
        src={link}
      />  
    </Link>
  );
};




export default DashboardLocations;
