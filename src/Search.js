import React, { Component } from 'react'

export default class Search extends Component{

  state={
    query:'',
    data:[]
  }

  handleChange(event) {
       this.setState({
           query: event.target.value
       });
   }

  handleSubmit(event) {
      let query = this.state.query.trim();
      if (!query) {
          return;
      }
      this.props.onSearch(query)
       event.preventDefault();
   }

   handleReset(){
     this.setState({query:''})
   }

   handleSubmit = this.handleSubmit.bind(this);
   handleChange = this.handleChange.bind(this);
   handleReset = this.handleReset.bind(this);

  render(){
      return(
         <div>
          <input
          className="search-box-text"
          type="text"
          placeholder="Search for something"
          onChange={this.handleChange}
          value={this.state.query}/>
        <button onClick={this.handleReset} className='remove'/>
        <button onClick={this.handleSubmit}
         className="waves-effect waves-light btn grey lighten-3 grey-text">
         Search
         </button>

        <a href="http://en.wikipedia.org/wiki/Special:Random"
        className="waves-effect waves-light btn grey lighten-3 grey-text"
        id='radomBtn'
        target="_blank"
        rel="noopener noreferrer">I'm Feeling Lucky </a>
       </div>

      )

  }
}
