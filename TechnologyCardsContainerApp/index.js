// Write your code here.
import './index.css'

const TechnologyCards = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`card-item ${className}`}>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <div className="img-container">
        <img className="card-img" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default TechnologyCards
