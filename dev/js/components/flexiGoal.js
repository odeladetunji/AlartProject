import React from 'react'
import PropTypes from 'prop-types'

export default () => {
  return(
    <div>
       <div className='flexiGoalContainer'>
         <h6 id='heading'>Flexi Goal</h6>
         <h6 id='subheading'>Summer Trip to Africa</h6>
         <h5>Goal Summary</h5>
         <p id='shortComment'>You have created <span> N5950 </span> of your <span>N6784744</span> goal by saving
           N5950 monthly</p>
       <div>
          <div className='goalProgressD'>
              <div className='left'>
                 <p>Goal Progress</p>
              </div>
              <div className='right'>
                <p>45% Completed </p>
              </div>
          </div>
          <div className='forProgressBar'>

          </div>
          <p id='textBelowProgressBar'> N 20,000 of <span>6784744</span></p>
          <p id='amountSaved'>Amount Saved</p>
          <div className="row summaryWidget">
             <div className='col-sm-4 firstWidget'>
               <p className='subHead'> N25,000 </p>
               <p className='subScript'>Interest Accrued</p>
             </div>
             <div className='col-sm-4 secondWidgeth'>
               <p className='subHead'> N25, 000 </p>
               <p className='subScript'>Interest Earned</p>
             </div>
             <div className='col-sm-4 thirdWidget'>
               <p className='subHead'> 12/09/2099 </p>
               <p className='subScript'>Next Payment</p>
             </div>
          </div>

          <div className='row withdrawTopUp'>
             <div className='col-xs-6 left'>
                 <button>withdraw</button>
             </div>
             <div className='col-xs-6 right'>
                 <button id='rightButton'>Top up Goal</button>
             </div>
          </div>

          <div className='row editAndPauseGoal'>
            <div className='col-sm-4 first'>
               <p>Edit</p>
            </div>
            <div className='col-sm-4 second'>
              <p>Paused Goal</p>
            </div>
            <div className='col-sm-4 third'>
              <p>Delete</p>
            </div>
          </div>
       </div>
       </div>
    </div>
  )
}
