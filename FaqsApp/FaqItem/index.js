import './index.css'

const FaqItem = props => {
  const {faqDetails, isFaqOpened} = props
  const {id, questionText, answerText, isOpened} = faqDetails

  const onClickFaq = () => {
    isFaqOpened(id)
  }
  const imgUrl = isOpened
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const altText = isOpened ? 'minus' : 'plus'
  return (
    <li className="faq-item">
      <div className="faq-container">
        <h1 className="faq-qn">{questionText}</h1>
        <button className="faq-btn" type="button" onClick={onClickFaq}>
          <img src={imgUrl} alt={altText} className="faq-img" />
        </button>
      </div>
      {isOpened && (
        <div>
          <hr className="horizontal-line" />
          <p className="faq-ans">{answerText}</p>
        </div>
      )}
    </li>
  )
}

export default FaqItem
