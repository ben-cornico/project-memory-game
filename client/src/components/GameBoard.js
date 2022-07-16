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

        this.addScore = this.addScore.bind(this);
        this.gameOver = this.gameOver.bind(this)
    }

    componentDidMount() {
        this.setState({
            loading: false,
        })
    }

    addScore() {
      this.setState({
        currentScore: this.state.currentScore + 1
      })
    }

    gameOver() {
      console.log('GAME OVER')
      console.log(this.state.currentScore)
    }
  render() {
    return (
      <div className='game-board'>
        {
            this.state.loading ? (
                <Loading />
            ) : (
                <CardContainer level={this.state.level} addScore={this.addScore} gameOver={this.gameOver}/>
            )
        }
      </div>
    )
  }
}

export default GameBoard