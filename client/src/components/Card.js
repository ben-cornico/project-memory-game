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
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    switch(this.props.primaryAttr) {
      case 'agi': 
        this.setState({
          primaryAttr: heroAgi
        })
        break;
      
      case 'str':
        this.setState({
          primaryAttr: heroStr
        })
        break;
      case 'int':
        this.setState({
          primaryAttr: heroInt
        })
        break;
    }
  }

  componentWillUnmount() {
    this.setState({
      primaryAttr: []
    })
  }

  handleClick(e) {
    this.props.selected(this.props.name)
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