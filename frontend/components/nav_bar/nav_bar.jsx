import React from 'react';
import { Link } from 'react-router-dom';

export default({currentUser, logout}) => {
    const display = currentUser ? (
      <div>
        <p>Hello, {currentUser.username}</p>
        <button className='menu-btn' onClick={logout}>Log Out</button>
      </div>
    ) : (
    <div>
      <li><a href="#" className="menu-btn">Demo</a></li>
      <li><a href="#/signup" className='menu-btn' >Sign Up</a></li>
      <li><a href="#/login" className= 'menu-btn' >Log In</a></li>
    </div>
  );
  return (
    <header>
      <div className='row'>
        <div className='container-menu sticky'>
          <div className="menu-text">
            <ul className='main-nav'>
              {display}
          </ul>
        </div>
      </div>
      </div>
    </header>
  );
};
 
