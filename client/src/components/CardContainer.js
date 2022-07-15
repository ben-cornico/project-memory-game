// import React, { Component } from 'react';
// import Loading from './Loading';
// import Card from './Card';
// import Data from './Dota2heroes/Data'
// import ModalNextLevel from './ModalNextLevel';

// export class CardContainer extends Component {
//   constructor(props) {
//     super()
//     this.state = {
//       loading: true,
//       level: 1,
//       heroes: Data,
//       displayed: [],
//       selected: [],
//       score: 0,
//       highestScore: 0,
//       nextLevelModal: false,
//     }
//     const test = "testing lang"

//     this.shuffle = this.shuffle.bind(this);
//     this.select = this.select.bind(this);
//     this.loadNextLevel = this.loadNextLevel.bind(this)
//   }

//   componentDidMount() {
//     this.getDisplay()
//   }

//   resetGame() {
//     this.setState({
//       loading: true,
//       level: 1,
//       displayed: [],
//       selected: [],
//       score: 0,
//     })
//   }

//   resetSelected() {
//     this.setState({
//       selected: [],
//     })
//   }

//   generateRandom(min, max, exclude) {
//     let random;
//     while (!random) {
//       const x = Math.floor(Math.random() * (max - min + 1)) + min;
//       if (exclude.indexOf(x) === -1) random = x;
//     }
//     return random;
//   }

//   gameOver() {
//     if(this.state.score > this.state.highestScore) {
//       this.setState({
//         highestScore: this.state.score,
//       })
//     }
    
//     this.resetGame();
//     this.getDisplay();
//     alert(`GAME OVER \n SCORE: ${this.state.score}`);


//   }

//   select(name) {
//     const arr = this.state.selected;
//     const isValid = arr.every(x => x !== name);
//     if(isValid) {
//       this.setState({
//         selected: [...this.state.selected, name],
//         score: this.state.score + 1
//       })

//     } else {
//       this.gameOver()
//     }

//   }
//   loadNextLevel() {
//     this.setState({
//       nextLevelModal: true,
//     })


//     setTimeout(() => {
//       this.setState({
//         nextLevelModal: false,
//       })
//     }, 1500);

//   }

  
//   componentDidUpdate(prevProps, prevState) {

//     if(prevState.score !== this.state.score) {
//       if(this.state.selected.length === this.state.level * 3) {
//         this.setState({
//           level: this.state.level + 1
//         })
//       } else {
//         this.shuffle()
//       }
//     } else if(prevState.level !== this.state.level) {
//       if(prevState.level < this.state.level) {  
//         this.resetSelected();
//         this.getDisplay();
//         this.loadNextLevel();
//       } else {
//         this.resetGame()
//       }
//     } 
//   }

//   shuffle() {
    
//     const arr = this.state.displayed;
//     arr.sort(() => Math.random() -0.5);
    
//     this.setState({
//       loading: true,
//     })

//     setTimeout(() => {
//       this.setState({
//         loading: false,
//         displayed: arr,
//       })
//     }, 500);
//   }


//   getDisplay() {
//     const arr = []
//     const numImg = this.state.level * 3;
//     const usedIndex = [];
//     const nums = []
//     for(let x=1; x <= numImg; x++) {
//       const randomNum = this.generateRandom(1, 122, usedIndex);
//       usedIndex.push(randomNum);
//       arr.push(this.state.heroes[randomNum]);
//       nums.push(randomNum)
//     }

//     this.setState({
//       loading: false,
//       displayed: arr,
//     })

//   }

//   checkIfDuplicateExists(arr) {
//     return new Set(arr).size !== arr.length
//   }


//   render() {
//     return (

//       <>
//         {this.state.nextLevelModal ? (
//           <ModalNextLevel level={this.state.level}/>
//         ) : (
//           <div className='body'>
//             <div className="container">
//               <div className="score">
//                 <p className="current-score">SCORE: {this.state.score}</p>
//                 <p className="current-level">LEVEL: {this.state.level}</p>
//                 <p className="highest-score">HIGHEST SCORE: {this.state.highestScore}</p>
//               </div>

//               <div className='card-container'>
              
//                 {
//                   this.state.loading || this.state.displayed.length <= 0 ? (
//                     <Loading />
//                   ) : (
//                     this.state.displayed.map((x, index) => {
//                       return <Card name={x.name} image={x.loc} primaryAttr={x.primaryAttr} selected={this.select} key={index}/>
//                     })
//                   )
//                 }

//               </div>
//             </div>
//           </div>
//         )}
//       </>
      
      

      
//     )
//   }
// }

// export default CardContainer

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
    console.log('shuffle')
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

  select(cardStatus) {
    if(!cardStatus) {
      console.log("GOOD CHOICE");
      this.shuffle()
    } else {
      console.log("GAME OVER");
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
      arr.push(this.state.heroes[randomNum]);
      nums.push(randomNum)
    }


    arr.map(x => {
      return cardsContainer.push(<Card name={x.name} image={x.loc} primaryAttr={x.primaryAttr} onSelectCard={this.select} />)
    })

    
    this.setState({
      cards: cardsContainer,
    })

  }
  render() {
    return (
      <div>
        
        {
         this.state.loading ? (
          <Loading />
         ) : (
          this.state.cards
         )
        }
      </div>
    )
  }
}

export default CardContainer