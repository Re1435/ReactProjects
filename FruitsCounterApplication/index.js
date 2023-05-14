// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  onMangoIncrement = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  onBananaIncrement = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  render() {
    const {mangoes, bananas} = this.state

    return (
      <div className="bg-fruits-counter">
        <div className="fruits-counter-container">
          <h1 className="heading">
            Bob ate <span className="fruits-count"> {mangoes} </span> mangoes
            <span className="fruits-count"> {bananas} </span>
            bananas
          </h1>
          <div className="fruits-counter">
            <div className="fruits-img-container">
              <img
                className="fruit-img"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <div className="btn-container">
                <button
                  className="button"
                  type="button"
                  onClick={this.onMangoIncrement}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="fruits-img-container">
              <img
                className="fruit-img"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <div className="btn-container">
                <button
                  className="button"
                  type="button"
                  onClick={this.onBananaIncrement}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter

