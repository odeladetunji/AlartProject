import React from 'react'
import PropTypes from 'prop-types'

export default () => {
  return(
     <div>
           <div className='goalSummaryCover'>
              <div className="goalSummaryHeading">
                <h5>Goal Summary</h5>
              </div>
              <div>
                <div className="coverForSummary">
                    <div className="left">
                      <p className='GoalText'>Goal Name</p>
                      <p className='boldedText'>Dubai Goal</p>
                    </div>
                    <div className="right">
                      <p className='GoalText'>Target Amount</p>
                      <p className='boldedText'>N1001020202</p>
                    </div>
                </div>

                <div className="coverForSummary">
                    <div className="left">
                      <p className='GoalText'>Start Date</p>
                      <p className='boldedText'>Nov 24, 2017 </p>
                    </div>
                    <div className="right">
                      <p className='GoalText'>End Date</p>
                      <p className='boldedText'>July 30, 2018 </p>
                    </div>
                </div>

                <div className="coverForSummary">
                    <div className="left">
                      <p className='GoalText'>Contributions</p>
                      <p className='boldedText'>N 100000 / monthly</p>
                    </div>
                    <div className="right">
                      <p className='GoalText'>Account to Debit</p>
                      <p className='boldedText'>Alat Account</p>
                    </div>
                </div>

                <button>Create Goal</button>
              </div>
           </div>
     </div>
  )
}
