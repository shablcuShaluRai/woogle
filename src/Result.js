import React,{ Component } from 'react';


export default class Result extends Component {

    state = {showIndex :-1}

    showDesription(index){
      this.setState({showIndex:index})
    }

    showDesription = this.showDesription.bind(this);

    render(){
      let results = this.props.results ? this.props.results:'';
      let description = results && results.discriptions? results.discriptions:'';
      let url = results && results.urls ? results.urls : ''
      console.log("shalu rs", this.state);

      let heading = results && results.headings
      ? results.headings.map((head,key) =>
        <div className={this.state.showIndex == key ? "expand" :"normalbar"} key={key} onClick={this.showDesription.bind(this, key)}>
          <p>{head}</p>
          <div>
          <p>
          {this.state.showIndex == key ? <a href={url[key]}
                        className=" grey"
                        target="_blank"
                        rel="noopener noreferrer">{description[key]}
                      </a> :''}

          </p>
          </div>
        </div>
      )
      :<div>Data not found for {results.query}</div>;

      console.log("shalu head", heading);

      return (
       <div className="searchResults">
        {heading}
       </div>
      )
    }
}
