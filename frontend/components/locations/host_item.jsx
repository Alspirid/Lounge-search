import React from 'react';

const HostItem = ({host}) => (
  <li>
      <div className='user-image'><img src={host.image_url}></img></div>
      <div className='host-info'>
        <h3>{host.username}</h3>
        <div>{host.email}</div>
      </div>
      <div className='about_text'><p>{host.about_text}</p></div>
  </li>
);

export default HostItem;
