// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: 1}

  onBtnClicked = () => {
    const {isSubscribed} = this.state
    if (isSubscribed) {
      this.setState(prevState => ({isSubscribed: prevState.isSubscribed - 1}))
    } else {
      this.setState(prevState => ({isSubscribed: prevState.isSubscribed + 1}))
    }
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="text">Thank you! Happy Learning</p>
        <button className="button" type="button" onClick={this.onBtnClicked}>
          {isSubscribed ? 'Subscribe' : 'Subscribed'}
        </button>
      </div>
    )
  }
}

export default Welcome


