// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  denominateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="app-container">
        <div className="cash-withdrawal-container">
          <div className="profile-details">
            <div className="initial-container">
              <p className="initial-text">S</p>
            </div>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-details">
            <p className="balance-text">Your Balance</p>
            <p className="balance">
              {balance}
              <br />
              <span className="text-in-rupees">In Rupees</span>
            </p>
          </div>
          <p className="withdraw-text">Withdraw</p>
          <p className="denomination">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-list">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                denominationDetails={eachDenomination}
                denominateBalance={this.denominateBalance}
                key={eachDenomination.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

