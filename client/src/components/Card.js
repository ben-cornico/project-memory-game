import React, { Component } from 'react';
import heroStr from './HeroTypeImg/str.png';
import heroAgi from './HeroTypeImg/agi.png';
import heroInt from './HeroTypeImg/int.png'

export class Card extends Component {
  constructor(props) {
    super();

    this.state = {
      selected: false,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentWillUnmount() {
    this.setState({
      primaryAttr: []
    })
  }

  handleClick(e) {
    this.setState({
      selected: true,
    });
    
    this.props.onSelectCard(this.state.selected)
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