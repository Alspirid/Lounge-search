// import { connect } from 'react-redux';
import React from  'react';
import { NavLink } from 'react-router-dom';
import MainInternal from './main_internal.js';

class MainPage extends React.Component {
  constructor (props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <MainInternal />
        <h2>This should be a main component</h2>
         <NavLink to='/signup' >Sign Up</NavLink>
      </div>
    );
  }
  
}


export default MainPage;
