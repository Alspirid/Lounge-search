import React from 'react';
import { Link } from 'react-router-dom';

const DashboardLocations = (props) => (
  <div className='dashboard-locations'>
    <h1>Explore the city's best spots with locals...</h1>
    <div className='dashboard-item'>
      <Link to='/locations/1'><img src='https://res.cloudinary.com/dgent8r3s/image/upload/v1520227342/presidio.jpg'></img></Link>
      <Link to='/locations/2'><img src='https://res.cloudinary.com/dgent8r3s/image/upload/v1520227342/richmond.jpg'></img></Link>
      <Link to='/locations/3'><img src='https://res.cloudinary.com/dgent8r3s/image/upload/v1520227340/fisherman.jpg'></img></Link>
    </div>
  </div>
);

export default DashboardLocations;
