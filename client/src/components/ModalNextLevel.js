import React, { Component } from 'react'

export class ModalNextLevel extends Component {
  render() {
    return (
      <div className='bg-modal'>
        <div className="modal">LEVEL {this.props.level}</div>
      </div>
    )
  }
}

export default ModalNextLevel