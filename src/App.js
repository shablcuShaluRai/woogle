import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1> woogle search </h1>
      <h2> woogle random search </h2>

         <div>
           <form>
           <input className="search-box-text" type="text" placeholder="Search for something..."/>
           </form>


           <a href="http://en.wikipedia.org/wiki/Special:Random"
           class="waves-effect waves-light btn grey lighten-3 grey-text"
           id='radomBtn'
            target="_blank">I'm Feeling Lucky </a>
         </div>
      </div>

    );
  }
}

export default App;
