import React from 'react';
import { Link } from 'react-router-dom';

const HostItem = ({host,redirect}) => (
  <li onClick={redirect}>
      <div className='host-list-item-container'>
      <div className='host-list-item'>
        <div className='user-image'>
          <Link to={`/users/${host.id}`}><img src={host.image_url}></img></Link>
        </div>
        <div className='host-info'>
          <h3>{host.username}</h3>
          <div>{host.email}</div>
        </div>
      </div>  
      
      
      <div className='about_text'>
      <p>{host.about_text}<br></br></p>
        
      </div>
      </div>
  </li>

);

export default HostItem;
// <Link
//   // to={`/users/${host.id}`}>Details</Link>
