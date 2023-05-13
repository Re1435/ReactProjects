// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {Speed: 0}

  onAccelerate = () => {
    const {Speed} = this.state
    if (Speed < 200) {
      this.setState(prevState => ({Speed: prevState.Speed + 10}))
    }
  }

  onBreak = () => {
    const {Speed} = this.state
    if (Speed > 0) {
      this.setState(prevState => ({Speed: prevState.Speed - 10}))
    }
  }

  render() {
    const {Speed} = this.state
    return (
      <div className="bg-container">
        <div className="mtr-container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
          <h1 className="speed-text">Speed is {Speed}mph</h1>
          <br />
          <p className="limit-text">Min Limit is 0mph, Max Limit is 200mph</p>
          <br />
          <div className="btn-container">
            <button className="btn1" type="button" onClick={this.onAccelerate}>
              Accelerate
            </button>
            <button className="btn2" type="button" onClick={this.onBreak}>
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
