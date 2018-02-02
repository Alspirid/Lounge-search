import React from  'react';
import { NavLink } from 'react-router-dom';
import MainInternal from './main_internal.js';

class MainPage extends React.Component {
  constructor (props) {
    super(props);
  }
  
  render() {
    return (
      <div className="row">
      
      <div className="main-banner">
        <div className="slogan">
          <h1>Stay with Locals and Meet Travelers</h1>
          <h2>Share Authentic Travel Experiences</h2>
        </div>
      </div>
    </div>
    );
  }
  
}


export default MainPage;
