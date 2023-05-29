import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, displayOnGallery, isActive} = props
  const {imageUrl, thumbnailUrl, thumbnailAltText} = thumbnailDetails
  const thumbnailClassName = isActive ? 'thumbnail active' : 'thumbnail'
  const onDisplayImg = () => {
    displayOnGallery(imageUrl)
  }

  return (
    <li className="thumbnail-item">
      <button className="display-btn" type="button" onClick={onDisplayImg}>
        <img
          src={thumbnailUrl}
          className={thumbnailClassName}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
