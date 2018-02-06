import React from 'react';
// import UserPanel from 'user_panel';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
  }
  
  componentDidMount() {
    this.props.fetchUser(this.currentUser.id);
    // console.log(this.props.currentUser);
  }
  
  componentWillReceiveProps(nextProps) {
    
  }
  
  render() {
    return(
      <div className='dashboard'>
        <h1>Username: {this.currentUser.username}</h1>
        <h3> Date of birth: {this.currentUser.d_birth}</h3>
        <h3> Location: {this.currentUser.location.area}</h3>
        <img src={this.currentUser.image_url}></img>
      </div>
    );
  }
  
}

export default Dashboard;
