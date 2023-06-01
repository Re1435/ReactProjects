// Write your code here
import {format} from 'date-fns'

import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsStarred} = props
  const {id, userInput, isStarred, userDate} = appointmentDetails
  const appointDate = format(new Date(userDate), 'dd MMMM yyyy, EEEE')

  const onClickStarredIcon = () => {
    toggleIsStarred(id)
  }

  const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <>
      <li className="appointment-item">
        <div className="appointment-details-container">
          <div className="details-container">
            <p className="title">{userInput}</p>
            <button
              className="star-btn"
              type="button"
              onClick={onClickStarredIcon}
              data-testid="star"
            >
              <img src={starImgUrl} className="star-img" alt="star" />
            </button>
          </div>
          <p className="user-date">{appointDate}</p>
        </div>
      </li>
    </>
  )
}

export default AppointmentItem



