import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {
    isTimerRunning: false,
    timerElapsedInSecs: 0,
    timerLimit: 25,
  }

  componentWillUnmount() {
    this.clearTimerInterval()
  }

  clearTimerInterval = () => {
    clearInterval(this.intervalId)
  }

  onDecreaseTimer = () => {
    const {timerLimit} = this.state
    if (timerLimit > 1) {
      this.setState(prevState => ({
        timerLimit: prevState.timerLimit - 1,
      }))
    }
  }

  onIncreaseTimer = () => {
    this.setState(prevState => ({
      timerLimit: prevState.timerLimit + 1,
    }))
  }

  renderTimerLimitController = () => {
    const {timerLimit, timerElapsedInSecs} = this.state
    const isButtonDisabled = timerElapsedInSecs > 0

    return (
      <div className="timer-limit-controller-container">
        <p className="limit-label">Set Timer limit</p>
        <div className="timer-limit-controller">
          <button
            className="limit-controller-btn"
            disabled={isButtonDisabled}
            onClick={this.onDecreaseTimer}
            type="button"
          >
            -
          </button>
          <div className="limit-label-container">
            <p className="limit-value">{timerLimit}</p>
          </div>
          <button
            className="limit-controller-btn"
            disabled={isButtonDisabled}
            onClick={this.onIncreaseTimer}
            type="button"
          >
            +
          </button>
        </div>
      </div>
    )
  }

  onResetTimer = () => {
    this.clearTimerInterval()
    this.setState({
      isTimerRunning: false,
      timerElapsedInSecs: 0,
      timerLimit: 25,
    })
  }

  incrementTimeElapsedInSecs = () => {
    const {timerLimit, timerElapsedInSecs} = this.state
    const isTimerCompleted = timerElapsedInSecs === timerLimit * 60

    if (isTimerCompleted) {
      this.clearTimerInterval()
      this.setState({isTimerRunning: false})
    } else {
      this.setState(prevState => ({
        timerElapsedInSecs: prevState.timerElapsedInSecs + 1,
      }))
    }
  }

  onStartOrPauseTimer = () => {
    const {isTimerRunning, timerElapsedInSecs, timerLimit} = this.state

    const isTimerCompleted = timerElapsedInSecs === timerLimit * 60

    if (isTimerCompleted) {
      this.setState({timerElapsedInSecs: 0})
    }
    if (isTimerRunning) {
      this.clearTimerInterval()
    } else {
      this.intervalId = setInterval(this.incrementTimeElapsedInSecs, 1000)
    }
    this.setState(prevState => ({isTimerRunning: !prevState.isTimerRunning}))
  }

  renderTimerController = () => {
    const {isTimerRunning} = this.state
    const startOrPauseImgUrl = isTimerRunning
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'

    const startOrPauseAltTxt = isTimerRunning ? 'pause icon' : 'play icon'

    return (
      <div className="timer-controller-container">
        <button
          className="timer-controller-btn"
          onClick={this.onStartOrPauseTimer}
          type="button"
        >
          <img
            src={startOrPauseImgUrl}
            alt={startOrPauseAltTxt}
            className="timer-controller-icon"
          />
          <p className="timer-controller-label">
            {isTimerRunning ? 'Pause' : 'Start'}
          </p>
        </button>
        <button
          className="timer-controller-btn"
          onClick={this.onResetTimer}
          type="button"
        >
          <img
            alt="reset icon"
            className="timer-controller-icon"
            src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
          />
          <p className="timer-controller-label">Reset</p>
        </button>
      </div>
    )
  }

  getElapsedSecsInTimeFormat = () => {
    const {timerElapsedInSecs, timerLimit} = this.state
    const totalRemainSecs = timerLimit * 60 - timerElapsedInSecs

    const mins = Math.floor(totalRemainSecs / 60)
    const secs = Math.floor(totalRemainSecs % 60)

    const stringifiedMins = mins > 9 ? mins : `0${mins}`
    const stringifiedSecs = secs > 9 ? secs : `0${secs}`

    return `${stringifiedMins}:${stringifiedSecs}`
  }

  render() {
    const {isTimerRunning} = this.state
    const timerState = isTimerRunning ? 'Running' : 'Paused'

    return (
      <div className="app-container">
        <h1 className="heading">Digital Timer</h1>
        <div className="display-timer-container">
          <div className="digital-timer-container">
            <div className="elapsed-time-container">
              <h1 className="elapsed-time">
                {this.getElapsedSecsInTimeFormat()}
              </h1>
              <p className="timer-state">{timerState}</p>
            </div>
          </div>
          <div className="controls-container">
            {this.renderTimerController()}
            {this.renderTimerLimitController()}
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
