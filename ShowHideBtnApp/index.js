import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstHidden: false, isLastHidden: false}

  firstnameShowHideBtn = () => {
    this.setState(prevState => ({isFirstHidden: !prevState.isFirstHidden}))
  }

  lastnameShowHideBtn = () => {
    this.setState(prevState => ({isLastHidden: !prevState.isLastHidden}))
  }

  render() {
    const {isFirstHidden, isLastHidden} = this.state

    return (
      <div className="banner-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-container">
          <div className="btn-container">
            <button
              className="button"
              type="button"
              onClick={this.firstnameShowHideBtn}
            >
              Show/Hide Firstname
            </button>
            {isFirstHidden && <p className="name-txt">Joe</p>}
          </div>
          <div className="btn-container">
            <button
              className="button"
              type="button"
              onClick={this.lastnameShowHideBtn}
            >
              Show/Hide Lastname
            </button>
            {isLastHidden && <p className="name-txt">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide