import React, { Component } from 'react';

export class CardContainer extends Component {
  constructor(props) {
    super()
    this.state = {
      level: 1,
      numImg: 1 * 3,
      images: null,
    }
  }

  async componentDidMount() {
    const randomPage = Math.floor(Math.random() * 100) + 1;
    const res = await fetch(`https://api-illustrations.icons8.com/api/v2/illustrations?type=illustration&page=${randomPage}&perPage=${this.state.numImg}&token=${process.env.REACT_APP_icon8_KEY}`)
    const img = await res.json();
    this.setState({
      ...this.state,
      images: img.illustrations
    })

  }
  render() {
    return (
      <div className='card-container'>
        {
          this.state.images ? (
            this.state.images.map((image) => {
              return (
                <img src={image.urls.medium.url} alt="" srcset="" />
              )
            })
          ) : (
            <h1>AWAN</h1>
          )
        }
      </div>
    )
  }
}

export default CardContainer