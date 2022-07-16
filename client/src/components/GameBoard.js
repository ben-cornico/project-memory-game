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
        this.gameOver = this.gameOver.bind(this);
        this.loadNextLevel = this.loadNextLevel.bind(this);
        this.gameStart = this.gameStart.bind(this)
    }

    componentDidMount() {
      this.gameStart();
    }

    componentDidUpdate(prevProps, prevState) {
      if(prevState.currentScore !== this.state.currentScore) {
        const maxScoreLevel = this.state.level * 3;
        if(maxScoreLevel === this.state.currentScore) {
          this.loadNextLevel();
        }
      }
    }

    gameStart() {

      setTimeout(() => {
        this.setState({
          loading: false,
        })
      }, 400);

    }

    loadNextLevel() {
      this.setState({
        loading: true,
        level: this.state.level + 1,
      })

      setTimeout(() => {
        this.setState({
          loading: false,
        })
      }, 450);
    }

    addScore() {
      this.setState({
        currentScore: this.state.currentScore + 1
      })
    }

    gameOver() {
      console.log('GAME OVER')
      console.log(this.state.currentScore);

      if(this.state.currentScore > this.state.highestScore) {
        this.setState({
          highestScore: this.state.currentScore,
          currentScore: 0,
          level: 1,
          loading: true,
        })

        alert("YOU GOT A NEW HIGH SCORE")
        this.gameStart()
      }
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