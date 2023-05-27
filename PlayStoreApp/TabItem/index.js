import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onChangeActiveTabId = () => {
    updateActiveTabId(tabId)
  }
  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container">
      <button
        className={`tab-btn ${activeTabClassName}`}
        type="button"
        onClick={onChangeActiveTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
