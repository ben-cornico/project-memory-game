import React, { Component } from 'react';
import Data from './Dota2heroes/Data'
import Card from './Card';
import Loading from './Loading'

export class CardContainer extends Component {
  constructor(props) {
    super()
    this.state ={
      heroes: Data,
      cards: [],
      loading: false,
    }


    this.shuffle = this.shuffle.bind(this);
    this.select = this.select.bind(this)
  }

  componentDidMount() {
    this.getDisplay()
  }
  
  shuffle() {
    const arr = this.state.cards;
    arr.sort(() => Math.random() -0.5);
    
    this.setState({
      loading: true,
    })

    setTimeout(() => {
      this.setState({
        cards: arr,
        loading: false,
      })
    }, 450);

  }

  select(card) {
    const indexNum = this.state.cards.findIndex(x => x.name === card.props.name);
    const objCard = this.state.cards[indexNum];
    if(objCard.isSelected) {
      this.props.gameOver()
    } else {
      objCard.isSelected = true;
      this.setState({
        cards: [...this.state.cards, objCard]
      });
      this.props.addScore();
      this.shuffle();
    }
  }



  generateRandom(min, max, exclude) {
    let random;
    while (!random) {
      const x = Math.floor(Math.random() * (max - min + 1)) + min;
      if (exclude.indexOf(x) === -1) random = x;
    }
    return random;
  }

  getDisplay() {
    const arr = []
    const numImg = this.props.level * 3;
    const usedIndex = [];
    const nums = []
    const cardsContainer = []
    for(let x=1; x <= numImg; x++) {
      const randomNum = this.generateRandom(1, 122, usedIndex);
      usedIndex.push(randomNum);
      arr.push({...this.state.heroes[randomNum], selected: false});
      nums.push(randomNum)
    }

    this.setState({
      cards: arr
    })

  }
  render() {
    return (
      <div className='card-container'>
        
        {
         this.state.loading ? (
          <Loading />
         ) : (
            this.state.cards.map((card, index) => {
              return <Card name={card.name} image={card.loc} primaryAttr={card.primaryAttr} onSelectCard={this.select} isSelected={card.selected} key={index}/>
            })
         )
        }
      </div>
    )
  }
}

export default CardContainer