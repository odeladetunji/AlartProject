import React from 'react'
import PropTypes from 'prop-types'

export default () => {
  return(
    <div className='stashCashOut'>
        <h5>Stash Cashout</h5>
        <p>{ 'I want to cashout this goal' }</p>
        <label>where would you like to widthdraw to?</label><br/>
        <form>
          <select name="" id="">
             <option value=""></option>
          </select><br/>
          <button>Proceed and Checkout</button>
        </form>
    </div>
  )
}
