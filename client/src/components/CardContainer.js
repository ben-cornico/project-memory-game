import React, { Component } from 'react';
import Loading from './Loading';

export class CardContainer extends Component {
  constructor(props) {
    super()
    this.state = {
      loading: true,
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
      images: img.illustrations,
      loading: false,
    })

    console.log(this.state)
  }
  render() {
    return (
      <div className='card-container'>
        {
          this.state.loading || this.state.images ? (
            <Loading />
          ) : (
            this.state.images.map(image => {
              return (
                <img srcSet={image.urls.small.url} />
              )
            })
          )
        }
      </div>
    )
  }
}

export default CardContainer