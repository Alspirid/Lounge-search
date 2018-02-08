import React from 'react';
import { Link } from 'react-router-dom';

class reviewForm extends React.Component {
  
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {title:'', body:''};
  }
  
  update(element){
    return(e) => {
      this.setState({[element]: e.target.value});
    };
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.state);
  }
  
  
  render() {
    return (  
      <div>
      <form onSubmit={this.handleSubmit}>
              <h1>Leave a review</h1>
        <input type='text' value={this.state.title} 
          onChange={this.update('title')}
          placeholder='Title'/>
        <textarea
          value={this.state.body}
          placeholder='Review body'
          onChange={this.update('body')} />
        <input type="submit" value='Submit' />
      </form>
      </div>
    );
  }
  
}

export default reviewForm;
