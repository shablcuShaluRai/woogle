import React, { Component } from 'react';
import * as DataApi from './utils/api'
import Result from './Result';
import Search from './Search'
import './App.css';

export default class App extends Component {
  state = {
       results: {
         headings:[],
         discriptions:[],
         urls:[],
         query:''
       }
   }
   arrayCheck(arr){
    return arr instanceof Array && arr.length >0;
   }

   handleSearch(query) {
    DataApi.fetchData(query).then(data => {
      // As we are getting response in stringified array  hence we cant use JSON.parse
      // as we cant use JSON.parse we will have to use eval to parse stringified array (no option left in my knoledge base)
      // eval is dangerous to use, thats  why we have to check for the type and the data required
      // eval can exicute all the string as javascript hence giving a chance to exicute harmful code inside
      // js coming from server
      let arr = eval(data);
      let arrCheck = this.arrayCheck(arr);
      let headingsCheck = arrCheck && this.arrayCheck(arr[1]);
      let discriptionsCheck = headingsCheck && this.arrayCheck(arr[2]);
      let resultsCheck = discriptionsCheck &&   this.arrayCheck(arr[3]);

      if(resultsCheck) {
        let  headings = arr[1];
        let  discriptions = arr[2];
        let  urls = arr[3];
        this.setState({results:{headings,discriptions,urls,query}})
      }else {
        this.setState({results:{query}})
      }
    })
    .catch(e=>console.log('App.js handleSearch', e))
  }

  handleSearch = this.handleSearch.bind(this);

  render() {
        let results = this.state.results ? this.state.results : {};
        return (
               <div className="App">
                 <h1> woogle search </h1>
                 <Search  onSearch={this.handleSearch}/>
                 <Result results={results}/>
               </div>
             );
         }
 }
