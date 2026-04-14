import React from 'react'
import '../styles/cards.css'

const BalanceCard = () => {
  return (
    <div className='card'>
        <p>Current Balance</p>
        <h2>98750/-</h2>
        <p id='bal-info'>2007/- less than last week</p>
    </div>
  )
}

export default BalanceCard