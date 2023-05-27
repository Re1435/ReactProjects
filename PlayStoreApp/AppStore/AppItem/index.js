import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <>
      <li className="app-item-container">
        <img src={imageUrl} className="app-item-img" alt={appName} />
        <p className="name">{appName}</p>
      </li>
    </>
  )
}

export default AppItem
