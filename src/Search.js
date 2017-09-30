import React, { Component } from 'react'
import * as DataApi from './utils/api'


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
    //  alert('you have submitted: ' + this.state.query);
    let query = this.state.query.trim();
      if (!query) {
          return;
      }
      this.props.onSearch(query)
       event.preventDefault();
       this.setState({ query: '' })
   }

   handleSubmit = this.handleSubmit.bind(this);
   handleChange = this.handleChange.bind(this);

render(){
  return(
    <div >
    <form onSubmit={this.handleSubmit}>
  <input className="search-box-text"
  type="text"
  placeholder="Search for something"
  onChange={this.handleChange}
   value={this.state.query}/>
    <input type="submit" value="Submit" />
    </form>

    </div>


  )

  }
}
