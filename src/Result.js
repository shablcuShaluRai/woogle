import React,{ Component } from 'react';
import SingleResult from './SingleResult'

export default class Result extends Component {
    render(){
      var results = this.props.results ? this.props.results:''
      console.log("shalu result", results);

      var heading = results.headings? results.headings.map((head) =><li>{head}</li>):""
      console.log("shalu head", heading);

      var description = results.discriptions? results.discriptions.map((desc) => <li>{desc}</li>):''
      console.log("shalu desc", description);

      var url = results.urls? results.urls.map((url) => <li>{url}</li>) : ''

      console.log("urls", url);


        return (
<div>
<ul>
<p>{heading}</p>
<p>{description}</p>
<p>{url}</p>
</ul>

    </div>
  )
}
}
