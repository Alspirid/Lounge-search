import React from 'react';
import { Link } from 'react-router-dom';

class reviewForm extends React.Component {
  
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {title:'', body:'', 
      user_id: this.props.userId, author_id: this.props.authorId};
  }
  
  update(element){
    return(e) => {
      this.setState({[element]: e.target.value});
    };
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.state);
    this.setState({title:'', body:''});
  }
  
  
  render() {
    return (  
      <div>
      <form className='modal-form' onSubmit={this.handleSubmit}>
        <h1>Please leave a review</h1>
        <div className='input'>
        <input type='text' value={this.state.title} 
          onChange={this.update('title')}
          placeholder='Title'/>
        <textarea
          value={this.state.body}
          placeholder='Review body'
          onChange={this.update('body')} />
        <div className='submit'>
          <input type="submit" value='Submit' />
        </div>
        </div>
      </form>
      </div>
    );
  }
  
}

export default reviewForm;
