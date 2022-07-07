import React, { Component } from 'react';
import Loading from './Loading';
import Card from './Card'

export class CardContainer extends Component {
  constructor(props) {
    super()
    this.state = {
      loading: true,
      level: 1,
      heroes: this.importAll(require.context('./Dota2heroes', false, /\.(png|jpe?g|svg)$/)),
      displayed: [],
    }
  }

  componentDidMount() {
    this.getDisplay()
  }

  getDisplay() {
    const arr = []
    const numImg = this.state.level * 3;
    for(let x=1; x <= numImg; x++) {
      let randomNum = Math.floor(Math.random() * 125)
      arr.push(this.state.heroes[randomNum])
    }

    this.setState({
      displayed: arr,
    })
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
        {
          this.state.displayed.length <= 0 ? (
            <Loading />
          ) : (
            this.state.displayed.map((x) => {
              return <Card name={x.name} image={x.loc} />
            })
          )
        }
      </div>
    )
  }
}

export default CardContainer

