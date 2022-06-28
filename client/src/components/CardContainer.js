import React, { Component } from 'react';

export class CardContainer extends Component {
  render() {
    return (
      <div className='card-container'>
        {process.env.icon8_KEY}
      </div>
    )
  }
}

export default CardContainer