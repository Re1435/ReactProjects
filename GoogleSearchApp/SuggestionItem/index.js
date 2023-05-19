// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestions, displaySuggestion} = props
  const {suggestion} = suggestions
  const onDisplay = () => {
    displaySuggestion(suggestion)
  }

  return (
    <li className="suggestion-item">
      <div>
        <p className="text">{suggestion}</p>
      </div>
      <button className="arrow-btn" type="button" onClick={onDisplay}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow-img"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
