import React, { Component } from 'react';
import Loading from './Loading';

export class CardContainer extends Component {
  constructor(props) {
    super()
    this.state = {
      loading: true,
      level: 1,
      numImg: 1 * 3,
      displayedChar: [],
      chars: []
    }

    this.trimChars = this.trimChars.bind(this)
  }

  async componentDidMount() {
    const res = await fetch(`http://hp-api.herokuapp.com/api/characters`)
    const characters = await res.json();

    // this.setState({
    //   ...this.state,
    //   chars: characters
    // })


    const listChar = this.trimChars(characters);
    this.setState({
      ...this.state,
      chars: listChar
    });
    console.log(this.state)

    // for(let x=1; x<= this.state.numImg; x++) {
    //   let randomNum = Math.floor(Math.random() * 402);
    //   this.setState({
    //     ...this.state,
        
    //     loading: false,
    //     displayedChar: [...this.state.displayedChar, this.state.chars[randomNum]],

    //   })
    // }

    console.log(this.state)
    
  }

  trimChars = (characters) => {
    const listChars = []
      characters.map(char => {
        if(char.image !== "") {
          listChars.push(char)
        }
      })
      return listChars
  }

  loadCards = () => {

  }
  render() {
    return (
      <div className='card-container'>
        {/* {
          this.state.loading || !this.state.displayedChar ? (
            <Loading />
          ) : (
            this.state.displayedChar.map(char => {
              return (
                <div className="card">
                  <img srcSet={char.image} alt="" />
                  <div className="card-name">
                    {char.name}
                  </div>
                </div>
              )
            })
          )
          
        } */}
      </div>
    )
  }
}

export default CardContainer