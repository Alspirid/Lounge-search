import React from 'react';
// import UserPanel from 'user_panel';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
  }
  
  componentDidMount() {
    this.props.fetchUser(this.props.currentUserId);
  }
  
  componentWillReceiveProps(nextProps) {
    
  }
  
  render() {
    console.log(this.props.currentUser);
    
    let display;
    if (this.props.currentUser) {
      display = (
        <div className='dashboard'>
          <h1>Username: {this.props.currentUser.username}</h1>
          <h3> Date of birth: {this.props.currentUser.d_birth}</h3>
          <h3>Location: {this.props.currentUser.location.area}</h3>
          <img src={this.props.currentUser.image_url}></img>
        </div>
      );
    } else {
      display = "Loading";
    }
    
    return(
      <div>
        {display}
      </div>
    );
  }
  
}

export default Dashboard;
