import React, { Component } from 'react';
import SpinnerImg from './img/loader.gif'

export class Loading extends Component {
  render() {
    return (
      <div className='loader'>
        {this.props.level ? (
          `LEVEL ${this.props.level}`
        ) : (
          ""
        )}
      </div>
    )
  }
}

export default Loading