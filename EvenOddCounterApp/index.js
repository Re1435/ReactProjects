// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  onIncrement = () => {
    const randInt = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({number: prevState.number + randInt}))
  }

  render() {
    const {number} = this.state
    let text
    if (number % 2 === 1) {
      text = 'Odd'
    } else {
      text = 'Even'
    }
    return (
      <div className="app-container">
        <div className="evenOdd-app-container">
          <h1 className="counter-text">Count {number}</h1>
          <p className="count-text">Count is {text}</p>
          <button className="button" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="random-text">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
