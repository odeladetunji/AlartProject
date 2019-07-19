import React from 'react'
import PropTypes from 'prop-types'

class FixedGoalCreatedSuccessfully extends React.Component {
  render () {
      return(
         <div>
              <div className='FixedGoalCreatedSuccessfully'>
                <i></i>
                <h3>Fixed Goal Created Successfully</h3>
                <div className='innerDiv'>
                    <div className='leftDiv'>
                        <p>Flexi Goal</p>
                        <p>Status Running</p>
                    </div>
                    <div className='rightDiv'>
                        <p>N10,00000</p>
                        <p>Amount Saved</p>
                    </div>
                </div>
              </div>
         </div>
      )
  }
}

export default FixedGoalCreatedSuccessfully;
