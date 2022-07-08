import React, { Component } from 'react';
import heroStr from './HeroTypeImg/str.png';
import heroAgi from './HeroTypeImg/agi.png';
import heroInt from './HeroTypeImg/int.png'

export class Card extends Component {
  constructor(props) {
    super()
    this.state = {
      primaryAttr: ""
    }

  }

  componentDidMount() {
    if(this.props.primaryAttr === 'agi') {
      this.setState({
        primaryAttr: heroAgi
      })
    } else if(this.props.primaryAttr === 'str'){
      this.setState({
        primaryAttr: heroStr
      })
    } else if(this.props.primaryAttr === 'int') {
      this.setState({
        primaryAttr: heroInt
      })
    }

  }
  render() {
    return (
      <div style={{backgroundImage: `url(${this.props.image})`}} className="hero-card" onClick={this.props.shuffle}>

        <div className="info">
          <img src={this.state.primaryAttr} alt="" />
          <span className='hero-name'>{this.props.name}</span>
        </div>
        
      </div>
    )
  }
}

export default Card