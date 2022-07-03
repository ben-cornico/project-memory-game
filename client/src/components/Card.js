import React, { Component } from 'react'

export class Card extends Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt="" srcset="" />
        <span>{this.props.name}</span>
      </div>
    )
  }
}

export default Card