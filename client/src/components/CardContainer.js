import React, { Component } from 'react';
import Loading from './Loading';
import Card from './Card';
import Data from './Dota2heroes/Data'

export class CardContainer extends Component {
  constructor(props) {
    super()
    this.state = {
      
      temp: [],
      loading: true,
      level: 1,
      heroes: Data,
      displayed: [],
      selected: [],
      score: 0,
    }

    console.log(this.state.heroes)
    this.shuffle = this.shuffle.bind(this);
    this.select = this.select.bind(this)
  }

  componentDidMount() {
    this.getDisplay()
  }

  resetSelected() {
    this.setState({
      selected: []
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

  gameOver() {
    alert(`GAME OVER \n SCORE: ${this.state.score}`)
  }

  select(name) {
    const numImg = this.state.level *3
    const arr = this.state.selected;
    const isValid = arr.every(x => x != name);
    if(isValid) {
      this.setState({
        selected: [...this.state.selected, name],
        score: this.state.score + 1
      })

    } else {
      this.gameOver()
    }

  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.score != this.state.score) {
      if(this.state.selected.length === this.state.level * 3) {
        this.setState({
          level: this.state.level + 1
        })
      } else {
        this.shuffle()
      }
    } else if(prevState.level != this.state.level) {
      this.resetSelected()
      this.getDisplay()
    }
  }

  shuffle() {
    
    const arr = this.state.displayed;
    arr.sort(() => Math.random() -0.5);
    
    this.setState({
      loading: true,
    })

    setTimeout(() => {
      this.setState({
        loading: false,
        displayed: arr,
      })
    }, 500);
  }


  getDisplay() {
    const arr = []
    const numImg = this.state.level * 3;
    const usedIndex = [];
    const nums = []
    for(let x=1; x <= numImg; x++) {
      const randomNum = this.generateRandom(1, 122, usedIndex);
      usedIndex.push(randomNum);
      arr.push(this.state.heroes[randomNum]);
      nums.push(randomNum)
    }

    this.setState({
      loading: false,
      displayed: arr,
      temp: nums
    })
  }

  checkIfDuplicateExists(arr) {
    return new Set(arr).size !== arr.length
  }

  importAll(r) {
    let images = {};
    let arr = [];
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });


    //LOOP TO TURN OBJECT INTO ARRAY
    for(const prop in images) {
      let wordSplit = prop.split("_");
      let  joined = wordSplit.join(' ');
      let pngRemove = joined.split(".png");
      pngRemove.pop();
      arr.push({
        name: pngRemove,
        loc: images[prop]
      })
    }
    return arr
  }
  



  render() {
    return (
      <div className='card-container'>
        <p>SCORE: {this.state.score}</p>
        {
          this.state.loading || this.state.displayed.length <= 0 ? (
            <Loading />
          ) : (
            this.state.displayed.map((x, index) => {
              console.log(this.state)
              console.log(x)
              return <Card name={x.name} image={x.loc} primaryAttr={x.primaryAttr} selected={this.select} key={index}/>
            })
          )

          
        }
        {/* {
          this.state.heroes.map((x, index) => {
            return <Card name={x.name} image={x.loc} primaryAttr={x.primaryAttr} selected={this.select} key={index}/>
          })
        } */}
      </div>

      
    )
  }
}

export default CardContainer

