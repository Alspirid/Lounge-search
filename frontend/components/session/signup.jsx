import React from 'react';

class Signup extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      d_birth: '01/01/2018',
      is_host: false,
      location_id: 1
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state);
  }
  
  componentWillReceiveProps(nextProps) {
   if (nextProps.currentUser) {
     this.props.history.push('/');
   }
 }

 renderErrors() {
   return (
     <ul>
       {
         this.props.errors.map((error,i)=>(
         <li key={`error=${i}`}>
           {error}
         </li>
       ))}
     </ul>
   );
 }
  
  render () {
    return (
      <div>
        <h2>Sign Up</h2>
        {this.renderErrors()}
          <form onSubmit={this.handleSubmit}>
            <label>Username:
              <input type='text' value={this.state.username}
                onChange={this.handleInput('username')} />
            </label>
            <label>Email:
              <input type='text' value={this.state.email}
                onChange={this.handleInput('email')} />
            </label>
            <label>Password:
              <input type='password' value={this.state.password}
                onChange={this.handleInput('password')} />
            </label>
            <input type='submit' />
          </form>

      </div>
    );
  }
}


export default Signup;
