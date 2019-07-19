import React from 'react'
import PropTypes from 'prop-types'

export default () => {
  return(
    <div>
        <div className='topUpGoal'>
           <h5>Top Up Goal</h5>
           <p id='subheader'>How much would you like to top Up?</p>
            <form>
                <label>How much would you like to top Up</label><br/>
                <input type="text" placeholder='N 1,000,000'/>
                <label>Select account to debit</label><br/>
                <select name="">
                   <option value="">ALat Account (093939333) - N5647484</option>
                </select><br/>
                <button>Top Up Goal</button>
            </form>
        </div>
    </div>
  )
}
