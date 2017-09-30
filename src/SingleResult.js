import React from 'react';
import App from './App'

export default class SingleResult extends React.Component {
    render() {
      const result = this.props.result
        return (
            <a href={result.url} className="single-result" target="_blank">
                <div>
                    <h3>{result.title}</h3>
                    <p>{result.description}</p>
                </div>
            </a>
        )
    }
}
