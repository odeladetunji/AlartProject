import React from 'react'
import PropTypes from 'prop-types'

class GoalWidthDrawals extends React.Component {
  render () {
      return(
        <div>
           <div className='goalWithdrawals'>
               <h3>Goal WithDrawals</h3>
               <div>
                  <p>Thomas Anderson</p>
                  <p>{'{ N200, 000 }'}</p>
               </div>
               <p>{'{ n.anderson@gmail.com }'}</p>
               <label>how much would you like to withdraw</label>
               <input type="text"/>
               <label>were would you like to withdraw</label>
               <select name="">
                 <option value=""></option>
               </select>
               <button>widthraw</button>
           </div>
        </div>
      )
  }
}

export default GoalWidthDrawals;
