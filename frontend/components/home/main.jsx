import React from  'react';
import { NavLink } from 'react-router-dom';
import MainInternal from './main_internal';
import WhyJoin from './why_join';
import HowItWorks from './how_it_works';


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
      <WhyJoin />
      <HowItWorks />
    </div>
  
    );
  }
}


export default MainPage;
