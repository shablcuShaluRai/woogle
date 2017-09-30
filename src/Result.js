import React,{ Component } from 'react';


export default class Result extends Component {
    render(){
      let results = this.props.results ? this.props.results:'';
      let description = results && results.discriptions? results.discriptions:'';
      let url = results && results.urls ? results.urls : ''
      console.log("shalu result", results);

      let heading = results && results.headings
      ? results.headings.map((head,key) =>
        <div>
          <p>{head}</p>
          <div>
          <p>
            <a href={url[key]}
              className=" grey"
              target="_blank"
              rel="noopener noreferrer">{description[key]}
            </a>
          </p>
          </div>
        </div>
      )
      :"";

      console.log("shalu head", heading);

      return (
       <div className="searchResults">
        {heading}
       </div>
      )
    }
}
