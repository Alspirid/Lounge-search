// import { connect } from 'react-redux';
import React from  'react';
import { NavLink } from 'react-router-dom';
import NavBar from './nav_bar.js';

class MainPage extends React.Component {
  constructor (props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <NavBar />
        <h2>This should be a main component</h2>
         <NavLink to='/signup' >Sign Up</NavLink>
      </div>
    );
  }
  
}


export default MainPage;
