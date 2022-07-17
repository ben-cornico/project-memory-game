import React, { Component } from 'react';
import heroStr from './HeroTypeImg/str.png';
import heroAgi from './HeroTypeImg/agi.png';
import heroInt from './HeroTypeImg/int.png'

export class Card extends Component {
  constructor(props) {
    super();


    this.handleClick = this.handleClick.bind(this)
  }


  componentWillUnmount() {
    console.log('card unmount')
  }

  handleClick(e) {
    this.props.onSelectCard(this)
  }



  render() {
    return (
      <div style={{backgroundImage: `url(${this.props.image})`}} className="hero-card" onClick={this.handleClick}>
        <div className="info">
          <img src={this.props.primaryAttr} alt="" />
          <span className='hero-name'>{this.props.name}</span>
        </div>
        
      </div>
    )
  }
}

export default Card