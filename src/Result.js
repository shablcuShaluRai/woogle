import React,{ Component } from 'react';


export default class Result extends Component {

  state = { showIndex :-1 }

    showDesription(index){
      this.setState({showIndex:index})
    }

    showDesription = this.showDesription.bind(this);

    render(){

      let results = this.props.results ? this.props.results:'';
      let description = results && results.discriptions? results.discriptions:'';
      let url = results && results.urls ? results.urls : '';
      let dataNotFound = <h1>{`Data not found for ${results.query}`}</h1>
      let heading = results && results.headings
            ? results.headings.map((head,key) =>
              <div  key={key} onClick={this.showDesription.bind(this, key)}>
                <a href='#'><p className="accordion">{head}</p></a>
                <div>
                {this.state.showIndex === key ?
                  <div>
                    <p>  {description[key]} </p>
                     <a href={url[key]}
                        className="btn-floating btn-tiny waves-effect waves-light grey"
                        target="_blank"
                        rel="noopener noreferrer">
                        <i className="material-icons">{url[key]}</i>
                      </a>

                   </div>
            :''}
               </div>
              </div>
       )
         : dataNotFound;


      return (
       <div className="searchResults">
        {heading}
       </div>
      )
    }
}
