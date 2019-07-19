import React from 'react'
import PropTypes from 'prop-types'

class CreateAFixedGoal2 extends React.Component {
  render () {
      return(
        <div>
            <div>
               <h3>Create {'{ A FIXED GOAL }'}</h3>
               <p>To achieve you target {'{ of }'} <span></span> by <span></span></p>
                 <div className="centerDiv">
                     <div className="leftDiv">
                        <label>You will have to save</label>
                        <input type="text"/>
                     </div>
                     <div className="rightDiv">
                       <label>How often would you save?</label>
                       <select name="" id="">
                          <option value=""></option>
                          <option value=""></option>
                          <option value=""></option>
                          <option value=""></option>
                          <option value=""></option>
                          <option value=""></option>
                       </select>
                     </div>

                     <label>Select Account to debit</label>
                     <select name="" id="">
                        <option value="Alat account (3232322) - 5608080"></option>
                     </select>

                    <button>Next</button>
                 </div>
            </div>
        </div>
      )
  }
}

export default CreateAFixedGoal2;
