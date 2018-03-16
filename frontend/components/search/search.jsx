import React from 'react';


class Search extends React.Component {
  
  constructor(props){
    super(props);
    this.state = { searchTerm: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  update(element){
    return(e) => {
      this.setState({[element]: e.target.value});
    };
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.searchLocations(this.state.searchTerm).then(
      () => this.props.history.push('/search')
    );
  }
  
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <input type="search" value=""
        onChange={this.update('searchTerm')}
        onSubmit={this.handleSubmit}
        value={this.state.searchTerm}
        placeholder="Start typing location..." />
      </form>
    );
  }
  
}

export default Search;
