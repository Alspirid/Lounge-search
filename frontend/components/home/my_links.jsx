import React from 'react';

const MyLinks = (props) => (
  <div className='my-links'>
    <a href='https://www.linkedin.com/in/alspirid/'><img src={window.staticImages[`linkedin`]} /></a>
    <a href='https://github.com/Alspirid'><img src={window.staticImages[`github`]} /></a>
  </div>
);

export default MyLinks;
