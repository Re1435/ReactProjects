// Write your code here
import {Component} from 'react'

import {v4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {
    appointmentsList: [],
    userInput: '',
    userDate: '',
    isFilterActive: false,
  }

  toggleIsStarred = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(each => {
        if (each.id === id) {
          return {...each, isStarred: !each.isStarred}
        }
        return each
      }),
    }))
  }

  onChangeTitle = event => {
    this.setState({userInput: event.target.value})
  }

  onChangeDate = event => {
    this.setState({userDate: event.target.value})
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {userInput, userDate} = this.state

    const newAppointment = {
      id: v4(),
      userInput,
      userDate,
      isStarred: false,
    }

    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      userInput: '',
      userDate: '',
    }))
  }

  onFilter = () => {
    const {isFilterActive} = this.state
    this.setState({isFilterActive: !isFilterActive})
  }

  getFilteredAppoints = () => {
    const {appointmentsList, isFilterActive} = this.state

    if (isFilterActive) {
      return appointmentsList.filter(each => each.isStarred === true)
    }
    return appointmentsList
  }

  render() {
    const {userInput, userDate, isFilterActive} = this.state
    const filterClassName = isFilterActive ? 'filter-filled' : 'filter-empty'
    const filteredAppointmentsList = this.getFilteredAppoints()
    return (
      <div className="app-container">
        <div className="appointment-container">
          <div className="form-container">
            <div>
              <h1 className="heading">Add Appointment</h1>
              <form className="form" onSubmit={this.onAddAppointment}>
                <div className="title-container">
                  <label htmlFor="title">TITLE</label>
                  <input
                    type="text"
                    value={userInput}
                    onChange={this.onChangeTitle}
                    placeholder="Title"
                    className="user-input"
                    id="title"
                  />
                </div>
                <div className="date-container">
                  <label htmlFor="date">DATE</label>
                  <input
                    type="date"
                    onChange={this.onChangeDate}
                    value={userDate}
                    className="date-input"
                    id="date"
                  />
                </div>
                <button className="add-btn" type="submit">
                  Add
                </button>
              </form>
            </div>
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="appointments-img"
              />
            </div>
          </div>
          <hr className="hr-line" />
          <div className="appointments-list-container">
            <h1 className="appointments-heading">Appointments</h1>
            <button
              className={`filter-style ${filterClassName}`}
              type="button"
              onClick={this.onFilter}
            >
              Starred
            </button>
          </div>
          <ul className="appointments-list">
            {filteredAppointmentsList.map(eachAppointment => (
              <AppointmentItem
                key={eachAppointment.id}
                appointmentDetails={eachAppointment}
                toggleIsStarred={this.toggleIsStarred}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
