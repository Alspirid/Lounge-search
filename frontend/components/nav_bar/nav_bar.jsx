import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import customStyles from './modal_style';

class NavBar extends React.Component {
  
  constructor(props){
    super(props);
    this.currentUser = this.props.currentUser;
    this.logout = this.props.logout;
    this.state = {
     modalIsOpen: false,
     username: '',
     password: ''
   };
   this.openModal = this.openModal.bind(this);
   this.closeModal = this.closeModal.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.demoLogin = this.demoLogin.bind(this);
  }
  
  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }
  
  componentWillReceiveProps(nextProps) {
   if (nextProps.currentUser) {
     // this.props.history.push('/');
     this.setState({modalIsOpen: false});
   } else {
     this.setState({errors: this.props.errors});
     console.log(this.props.errors);
   }
 }
 
 demoLogin(e) {
   e.preventDefault();
   document.getElementById('uname').value = 'bob';
   document.getElementById('passw').value = 'secret';
   this.handleSubmit();
 }
 
 renderErrors() {
   return (
     <ul className='error'>
       {
         this.props.errors.map((error,i)=>(
         <li key={`error=${i}`}>
           {error}
         </li>
       ))}
     </ul>
   );
 }
  
  openModal() {
     this.setState({modalIsOpen: true});
  }
  
  closeModal() {
     this.setState({modalIsOpen: false});
  }
  
  renderLoginWindow(){
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false} >
          <span onClick={this.closeModal} className="modal-close">&times;</span>
          <form className="modal-form">
            <h1>Please sign in to continue</h1> <div className='hr'></div>
            <div className='input'>
              {this.renderErrors()}
              <input id='uname' placeholder='username'
                type="text"
                value={this.state.username}
                onChange={this.handleInput('username')} />
            <input type="password" id='passw' placeholder='password'
              value={this.state.password}
              onChange={this.handleInput('password')} />
            </div>
            <div className='submit'>
              <button onClick={this.demoLogin} 
                className="inverse-menu-btn">Demo</button>
              <button className="inverse-menu-btn"
                onClick={this.handleSubmit}>Log In</button>
            </div>  
          </form>
        </Modal>
      </div>
    );
  }

  
  render() {
    const display = this.props.currentUser ? (
      <div>
        <p className='current-user'>Hello, {this.props.currentUser.username}</p>
        <button onClick={this.logout} className="menu-btn">Logout</button>
      </div>
    ) : (
    <div>
      <li><button className='inverse-menu-btn' >Sign Up</button></li>
      <li><button onClick={this.openModal} className= 'menu-btn'>Log In</button></li>
    </div>
  );
  return (
    <header>
      {this.renderLoginWindow()}
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
  }
}

export default NavBar;




 
