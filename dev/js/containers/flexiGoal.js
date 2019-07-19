import React from 'react'
import PropTypes from 'prop-types'

class FlexiGoal extends React.Component {
  render () {
     return(
       <div>
          <div className='flexiGoalContainer'>
            <h6>Flexi Goal</h6>
            <h6>Summer Trip to Africa</h6>
            <h5>Goal Summary</h5>
            <p>You have created <span>{'{ N5950 }'}</span>{'{ of }'} your <span>N6784744</span> goal by saving
            {'{  N5950 }'} monthly</p>
          <div>
             <div>
                <p>Goal Progress</p>
             </div>
             <div>
               <p>{'{ 45% Completed }'}</p>
             </div>
             <div className='forProgressBar'>

             </div>
             <p>{'{ 20,000 of }'}<span>{'{ 6784744 }'}</span></p>
             <p>Amount Saved</p>
             <div className="summaryWidget">
                <div className='firstWidget'>
                  <p>{'{ N25,000}'}</p>
                  <P>Interest Accrued</P>
                </div>
                <div className='secondWidgeth'>
                  <p>{'{ N25, 000}'}</p>
                  <p>Interest Earned</p>
                </div>
                <div className='thirdWidget'>
                  <p>{'{ 12/09/2099 }'}</p>
                  <p>Next Payment</p>
                </div>
             </div>

             <div className='withdrawTopUp'>
               <ul>
                 <li><button>withdraw</button></li>
                 <li><button>Top up Goal</button></li>
               </ul>
             </div>

             <div className='editAndPauseGoal'>
               <ul>
                 <li>Edit</li>
                 <li>Paused Goal</li>
                 <li>Delete</li>
               </ul>
             </div>
          </div>
          </div>
       </div>
     )
  }
}

export default FlexiGoal;
