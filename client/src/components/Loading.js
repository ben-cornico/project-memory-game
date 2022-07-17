import React, { Component } from 'react';
import SpinnerImg from './img/loader.gif'

export class Loading extends Component {
  render() {
    return (
      <div className="loader-container">
          {this.props.level ? (
            <div className='level'>LEVEL {this.props.level}</div>
          ) : (
            ""
          )}
        <div className='loader'>

        </div>
      </div>

    )
  }
}

export default Loading