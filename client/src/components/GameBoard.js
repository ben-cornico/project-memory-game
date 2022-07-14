import React, { Component } from 'react';
import Data from './Dota2heroes/Data';
import CardContainer from './CardContainer';
import Loading from './Loading'

export class GameBoard extends Component {
    constructor() {
    super()
        this.state = {
            gameStatus: false,
            loading: true,
            level: 1,
            currentScore: 0,
            highestScore: 0,
        }
    }

    componentDidMount() {
        this.setState({
            loading: false,
        })
    }
  generateRandom(min, max, exclude) {
    let random;
    while (!random) {
      const x = Math.floor(Math.random() * (max - min + 1)) + min;
      if (exclude.indexOf(x) === -1) random = x;
    }
    return random;
  }

  render() {
    return (
      <div className='game-board'>
        {
            this.state.loading ? (
                <Loading />
            ) : (
                <CardContainer level={this.state.level} />
            )
        }
      </div>
    )
  }
}

export default GameBoard