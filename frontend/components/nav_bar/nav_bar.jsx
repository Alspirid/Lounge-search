import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import loginStyles from './login_form_styles';
import signupStyles from './signup_form_styles';

class NavBar extends React.Component {
  
  constructor(props){
    super(props);
    this.currentUser = this.props.currentUser;
    this.logout = this.props.logout;
    this.state = {
     modalIsOpen: false,
     username: '',
     password: '',
     action: '',
     email: '',
     d_birth: '01/01/2018',
     is_host: false,
     location_id: 1 
   };
   this.openModal = this.openModal.bind(this);
   this.closeModal = this.closeModal.bind(this);
   this.handleLogin = this.handleLogin.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.demoLogin = this.demoLogin.bind(this);
  }
  
  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }
  
  handleLogin(e) {
    e.preventDefault();
    this.props.login(this.state);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state);
  }
  
  componentWillReceiveProps(nextProps) {
   if (nextProps.currentUser) {
     // this.props.history.push('/');
     this.setState({modalIsOpen: false});
     
   } else {
     this.setState({errors: this.props.errors});
   }
 }
 
 demoLogin(e) {
   e.preventDefault();
   this.setState({username:'bob'});
   this.setState({password: 'secret'});
   setTimeout(()=> {
     document.getElementById('login').click();
   },100);
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
  
  openModal(action) { 
    return (e) => {
      this.setState({modalIsOpen: true, action: action});
    };
  }
  
  closeModal() {
     this.setState({modalIsOpen: false});
     this.props.clearErrors();
  }
  
  
  LoginWindow(){
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen} 
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={loginStyles}
          contentLabel="Login Window"
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
              <button onClick={this.demoLogin}>Demo</button>
              <button onClick={this.handleLogin} id='login'>Log In</button>
            </div>  
          </form>
        </Modal>
      </div>
    );
  }

  SignUpWindow() {
  return (
    <Modal
      isOpen={this.state.modalIsOpen} 
      onAfterOpen={this.afterOpenModal}
      onRequestClose={this.closeModal}
      style={signupStyles}
      contentLabel="Signup Window"
      ariaHideApp={false} >
      <span onClick={this.closeModal} className="modal-close">&times;</span>    
    
  
      <form className="modal-form">
        <h1>Please Sign Up</h1> <div className='hr'></div>
        <div className='input'>
          {this.renderErrors()}
        <input id='uname' placeholder='username'
            type="text"
            value={this.state.username}
            onChange={this.handleInput('username')} />
          
        <input type='text' value={this.state.email}
          onChange={this.handleInput('email')} placeholder='email'/>  
        
        <input type="password" id='passw' placeholder='password'
          value={this.state.password}
          onChange={this.handleInput('password')} />
        
        </div>
        <div className='submit'>
          <button onClick={this.handleSubmit} id='login'>Sign Up</button>
        </div>  
      </form>
    </Modal>
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
      <li><button onClick={this.openModal('signup')} 
        className='inverse-menu-btn'>Sign Up</button></li>
      <li><button onClick={this.openModal('login')} className= 'menu-btn'>
        Log In</button></li>
    </div>
  );
  const formType = this.state.action === 'login' ? 
  this.LoginWindow() : this.SignUpWindow();

  return (
    <header>
      { formType }
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




 
