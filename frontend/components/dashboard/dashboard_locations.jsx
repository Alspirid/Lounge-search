import React from 'react';
import { Link } from 'react-router-dom';

const DashboardLocations = (props) => (
  <div className='dashboard-locations'>
    <h1>Explore the city's best spots with locals...</h1>
    <div className='dashboard-item'>
      <Link to='/locations/1'><img src='https://italystorie.files.wordpress.com/2015/01/ggbridge_old_coast_guard_station.jpg'></img></Link>
      <Link to='/locations/2'><img src='http://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/VCW_D_SFcity_FishermanWharf_1280x642_sized.jpg'></img></Link>
      <Link to='/locations/3'><img src='https://media-cdn.tripadvisor.com/media/photo-s/06/34/72/78/chinatown.jpg'></img></Link>
    </div>
  </div>
);

export default DashboardLocations;
