import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  constructor(props) {
    super(props)
    const {faqsList} = this.props
    this.state = {
      faqList: faqsList,
    }
  }

  isFaqOpened = id => {
    this.setState(prevState => ({
      faqList: prevState.faqList.map(eachFaq => {
        if (eachFaq.id === id) {
          return {...eachFaq, isOpened: !eachFaq.isOpened}
        }
        return eachFaq
      }),
    }))
  }

  render() {
    const {faqList} = this.state
    return (
      <div className="app-container">
        <div className="faqs-container">
          <h1 className="heading">FAQs</h1>
          <ul className="faqs-list">
            {faqList.map(eachFaq => (
              <FaqItem
                key={eachFaq.id}
                faqDetails={eachFaq}
                isFaqOpened={this.isFaqOpened}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
