// Write your code here.
import './index.css'

const BannerApp = props => {
  const {bannerCardDetails} = props
  const {headerText, description, className} = bannerCardDetails

  return (
    <li className={`banner-card ${className}`}>
      <div>
        <h1 className="header-text">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="btn" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerApp
