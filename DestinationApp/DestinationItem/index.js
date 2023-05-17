// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails
  return (
    <li className="destination-card-container">
      <img className="card-img" alt={name} src={imgUrl} />
      <p className="name-text">{name}</p>
    </li>
  )
}

export default DestinationItem
