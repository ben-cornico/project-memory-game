import React, { Component } from 'react';
import Loading from './Loading';
import Card from './Card'

export class CardContainer extends Component {
  constructor(props) {
    super()
    this.state = {
      loading: true,
      level: 1,
      chars: [],
      displayed: []
    }
  }

  componentDidMount() {
    const loadData = async () => {
      const res = await fetch(`http://hp-api.herokuapp.com/api/characters`);
      const data = await res.json();
      return data;
    }


    loadData().then(res => {
      let list = [];
      res.map(x => {
        if(x.image !== "") {
          list.push(x);
        }
      })
      this.setState({
        chars: list,
      })
    })

    this.loadCards()
  }

  loadCards() {
    
    const numImage = this.state.level * 3;
    for(let x=1; x<= numImage; x++) {
      const randomNum = Math.floor(Math.random() * 24);
      this.setState({
        displayed: [...this.state.displayed, this.state.chars[randomNum]]
      })
    }

    console.log(this.state)
    this.setState({
      loading: false
    })
  }

  render() {
    return (
      <div className='card-container'>
        {
          this.state.loading ? (
            <Loading />
          ) : (
            this.state.displayed.map(x => {
              return (<p>{x.name}</p>)
            })
          )
        }
      </div>
    )
  }
}

export default CardContainer

