import React from 'react';
import { Link } from 'react-router-dom';

const HostItem = ({host}) => (
  <li>
      <div className='user-image'>
        <Link to={`/users/${host.id}`}><img src={host.image_url}></img></Link>
      </div>
      <div className='host-info'>
        <h3>{host.username}</h3>
        <div>{host.email}</div>
      </div>
      <div className='about_text'>
      <p>{host.about_text}<br></br></p>
        <Link
          to={`/users/${host.id}`}>Details</Link>
      </div>
  </li>

);

export default HostItem;
