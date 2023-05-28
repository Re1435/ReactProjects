// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    tailsCount: 0,
    headsCount: 0,
    isHeads: true,
  }

  onTossResult = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        headsCount: prevState.headsCount + 1,
        isHeads: true,
      }))
    } else {
      this.setState(prevState => ({
        tailsCount: prevState.tailsCount + 1,
        isHeads: false,
      }))
    }
  }

  render() {
    const {tailsCount, headsCount, isHeads} = this.state
    const headsOrTails = isHeads
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="app-container">
        <div className="tosscoin-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="head-tail-text">Heads (or) Tails</p>
          <img src={headsOrTails} className="toss-coin-img" alt="toss result" />
          <button
            type="button"
            className="toss-coin-btn"
            onClick={this.onTossResult}
          >
            Toss Coin
          </button>
          <div className="counter-container">
            <p className="text">Total: {tailsCount + headsCount}</p>
            <p className="text">Heads: {headsCount}</p>
            <p className="text">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
