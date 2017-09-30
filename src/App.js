import React, { Component } from 'react';
import * as DataApi from './utils/api'
import Result from './Result';
import Search from './Search'
import './App.css';

class App extends Component {
  state = {
       results: {
         headings:[],
         discriptions:[],
         urls:[]
       }
   }

   handleSearch(query) {
    DataApi.fetchData(query).then(data => {
      // As we are getting response in stringified array  hence we cant use JSON.parse
      // as we cant use JSON.parse we will have to use eval to parse stringified array
      // eval is dangerous to use, thats  why we have to check for the type and the data required
      let arr = eval(data);
      if(arr instanceof Array && arr[1] && (arr[1].length > 0) && arr[2] && (arr[2].length > 0) && arr[3] && (arr[3].length > 0) ) {
        let  headings = arr[1];
        let  discriptions = arr[2];
        let  urls = arr[3];
        this.setState({results:{headings,discriptions,urls}})
      }
    })
  }

  handleSearch = this.handleSearch.bind(this);



  render() {
    let results = this.state.results ? this.state.results : ''
    console.log("heading",results);


    return (
      <div className="App">
         <h1> woogle search </h1>
         <h2> woogle random search </h2>
         <div>
           <a href="http://en.wikipedia.org/wiki/Special:Random"
             className="waves-effect waves-light btn grey lighten-3 grey-text"
             id='radomBtn'
             target="_blank"
             rel="noopener noreferrer">I'm Feeling Lucky </a>
         </div>
         <Search  onSearch={this.handleSearch}/>
         <Result results={this.state.results}/>
     </div>

    );
  }
}

export default App;
