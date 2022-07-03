// import React, { Component } from 'react';
// import Loading from './Loading';
// import Card from './Card'

// export class CardContainer extends Component {
//   constructor(props) {
//     super()
//     this.state = {
//       loading: true,
//       level: 1,
//       numImg: 1*3,
//       displayedChars: [],
//       chars: []
//     }

//     let displayed = []

//   }

//   async componentDidMount() {
//     // await this.loadData().then(data => {
//     //   this.setState({
//     //     chars: this.trimData(data)
//     //   });
//     // });

//     const chars = await this.loadData()
//     const trimData = this.trimData(chars)

//     this.setState({
//       chars: trimData,
//     })

//     const displayedChars = await this.displayChars();
//     await this.get
//     console.log(displayedChars)
//     this.setState({
//       displayedChars: displayedChars,
//       loading: false,
//     })

    
//     console.log(this.state);
//   }

//   getData(data) {
//     return (new Promise((resolve) => {
//       this.setState({

//       })
//     }))
//   }

//   async loadData() {
//     try {
//       const res = await fetch(`http://hp-api.herokuapp.com/api/characters`)
//       const characters = await res.json();
//       return characters
//     } catch(err) {
//       console.error(err)
//     }
//   }

  // trimData(characters) {
  //   const listChars = []
  //     characters.map(char => {
  //       if(char.image !== "") {
  //         listChars.push(char)
  //       }
  //     })
  //     return listChars
  // }


  // displayChars() {
  //   return (new Promise((resolve) => {
  //     const list = []
  //     for(let x=1; x<= this.state.numImg; x++) {
  //       let randomNum = Math.floor(Math.random() * 24);
  //       list.push(this.state.chars[randomNum]);
  //     }
  //     console.log(list)
  //     resolve(list)
  //   }))

  // }
//   render() {
//     return (
//       <div className='card-container'>
//         {/* {
//           this.state.loading || !this.state.displayedChars ? (
//             this.state.displayedChars.map(char => {
//               return (
//                 <Card name={char.name} image={char.image} />
//               )
//             })
//           ) : (
//             <Loading />
//           )
//         } */}

// {this.state.displayedChars.map(char => {
//               return (
//                 <Card name={char.name} image={char.image} />
//               )
//             })}
//       </div>
//     )
//   }
// }

// export default CardContainer

import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import Card from './Card'

function CardContainer() {


  const [chars, setChars] = useState({});
  const [level, setLevel] = useState(1);
  const [displayed, setDisplayed] = useState([])

  const trimData = (data) => {
    const listChars = []
      data.map(char => {
        if(char.image !== "") {
          listChars.push(char)
        }
      })
      return listChars
  }
  const loadData = async () => {
    const res = await fetch(`http://hp-api.herokuapp.com/api/characters`)
    const data = await res.json();
    const listData = trimData(data);

    setChars(listData)
  }



  useEffect(() => {
    const getData = async() => {
      try {
        const res = await fetch(`http://hp-api.herokuapp.com/api/characters`)
        const data = await res.json();
        const listData = trimData(data);

        setChars(listData);
      } catch(err) {
        console.error(err)
      }
    }
    getData()
    console.log(chars)
  }, [])
  
  useEffect(() => {
    const list = []
    const numImg = level * 3;
    for(let x=1; x<= numImg; x++) {
      let randomNum = Math.floor(Math.random() * 24);
      list.push(chars[randomNum]);
    }
    setDisplayed(list)
  }, [chars])
  
  return (
    <div>
      {
        !displayed ?
          <Loading />
         : 

         displayed.map((x => {
          return (
            <Card name={x.name} image={x.image} />
          )
         }))

        
      }

    </div>
  )
}

export default CardContainer