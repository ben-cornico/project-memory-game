import React, { Component } from 'react';
import Loading from './Loading';
import Card from './Card';
import Data from './Dota2heroes/Data'

export class CardContainer extends Component {
  constructor(props) {
    super()
    this.state = {
      loading: true,
      level: 1,
      heroes: this.importAll(require.context('./Dota2heroes', false, /\.(png|jpe?g|svg)$/)),
      temp: Data,
      displayed: [],
    }


    console.log(Data)
  }

  componentDidMount() {
    this.getDisplay()
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
    const numImg = this.state.level * 3;
    const usedIndex = [];
    for(let x=1; x <= numImg; x++) {
      const randomNum = this.generateRandom(1, 125, usedIndex)
      usedIndex.push(randomNum);
      arr.push(this.state.heroes[randomNum]);
    }

    console.log(this.checkIfDuplicateExists(arr))
    this.setState({
      displayed: arr,
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
        <div>
        {
          this.state.displayed.length <= 0 ? (
            <Loading />
          ) : (
            this.state.heroes.map((x) => {
              return <Card name={x.name} image={x.loc} />
            })
          )

          
        }
        </div>

        <div>
          {
            this.state.temp.map(x => {
              return <Card name={x.name} image={x.loc} />
            })
          }
        </div>

      </div>
    )
  }
}

export default CardContainer

