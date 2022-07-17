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
            levelScore: 0,
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
        const maxLevelScore = this.state.level * 3;
        if(maxLevelScore === this.state.levelScore) {
          this.loadNextLevel();
        }
      }
    }

    gameStart() {

      this.setState({
        currentScore: 0,
        levelScore:0,
        loading: true,
      })


      if(this.state.currentScore > this.state.highestScore) {
        this.setState({
          highestScore: this.state.currentScore,
        })
      }


      this.setState({
        gameStatus: true
      })

      //TIMEOUT FOR LOADING TIME
      setTimeout(() => {
        this.setState({
          loading: false,
        })
      }, 1000);

    }

    gameOver() {
      //STOP THE GAME
      this.setState({
        level: 1,
        gameStatus: false,
      })
    }


    loadNextLevel() {
      this.setState({
        loading: true,
        level: this.state.level + 1,
        levelScore: 0,
      })

      setTimeout(() => {
        this.setState({
          loading: false,
        })
      }, 2000);
    }

    addScore() {
      this.setState({
        levelScore: this.state.levelScore + 1,
        currentScore: this.state.currentScore + 1
      })
    }


  render() {
    return (
      <>
        <div className={this.state.gameStatus ? 'modal-hide' : 'modal-display'}>
          <div className="gameover-modal">

            <p className='title'>GAME OVER</p>
            {
              this.state.currentScore > this.state.highestScore ? (
                <p>You got a new High Score</p>
              ) : (
                ""
              )
            }
            <p className='you-score'>YOUR SCORE: {this.state.currentScore}</p>

            <div className="btn-group">
                <p>Play Again?</p>
                
            <button className="btn-yes" onClick={this.gameStart}>YES</button>
            <button className="btn-no">NO</button>
            </div>
          </div>
        </div>
        <div className='game-board'>

          {
              this.state.loading ? (
                  <Loading level={this.state.level}/>
              ) : (
                <>

                  <div className="score">
                    <p className="current-score">SCORE: {this.state.currentScore}</p>
                    <p className="current-level">LEVEL: {this.state.level}</p>
                    <p className="highest-score">HIGHEST SCORE: {this.state.highestScore}</p>
                  </div>
                  <CardContainer level={this.state.level} addScore={this.addScore} gameOver={this.gameOver}/>
                </>
              )
          }
        </div>
      </>
      
    )
  }
}

export default GameBoard