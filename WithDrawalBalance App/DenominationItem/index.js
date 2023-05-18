// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, denominateBalance} = props
  const {value} = denominationDetails
  const onWithdrawl = () => {
    denominateBalance(value)
  }

  return (
    <li className="denomination-item">
      <button className="button" type="button" onClick={onWithdrawl}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
