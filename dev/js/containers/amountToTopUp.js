import React from 'react'
import PropTypes from 'prop-types'

class AmountToTopUp extends React.Component {
  render () {
      return(
        <div>
            <div>
               <h3>Top Up Goal</h3>
               <p>How much would you like to top Up</p>
               <div>
                  <form action="">
                    <label>How much would you like to top Up</label>
                    <input type="text"/>
                    <label>Select account to debit</label>
                    <select name="">
                       <option value="">{'{ALat Account (093939333) - N5647484}'}</option>
                    </select>
                    <button>Top Up Goal</button>
                  </form>
               </div>
            </div>
        </div>
      )
  }
}

export default ;
