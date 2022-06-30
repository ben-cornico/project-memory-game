import React, { Component } from 'react';
import SpinnerImg from './img/loader.gif'

export class Loading extends Component {
  render() {
    return (
      <div className='loading'>
        <img src={SpinnerImg} alt="" srcset="" />
      </div>
    )
  }
}

export default Loading