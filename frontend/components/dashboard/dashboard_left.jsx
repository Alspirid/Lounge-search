import React from 'react';
import { Link } from 'react-router-dom';

const DashboardLeft = ({currentUser}) => (
  <div className='dashboard-left'>
    <ul>
      <li><img src={currentUser.image_url}></img></li>
      <li><h1>{currentUser.username}</h1></li>
      <li><p>{currentUser.about_text}</p></li>
      <li><h3>{currentUser.email}</h3></li>
      <li><h3>Location: {currentUser.location.area}</h3></li>              
    </ul>
    <h2>{currentUser.is_host ? 'Accepting Guests' : 'Not Accepting Guests '}</h2>    
  </div>
);

export default DashboardLeft;
