import React from 'react'
import PropTypes from 'prop-types'

export default () => {
  return (
    <div className='theStash'>
         <h6>Stash</h6>
         <h5>Summer Trip to Africa</h5>
         <p id='stashSummary'>Stash Summary</p>
         <p id='stashDiscription'>You have saved N20,000 and have earned N2,000 in interest</p>

         <label>Goal Progress</label><br/>
         <div>
         </div>

         <div className='row'>
           <div className='col-xs-6'>
              <p>N20,000</p>
              <p>Amount Saved</p>
           </div>
           <div className='col-xs-6'>
              <p>N2,000</p>
              <p>Interest Earned</p>
           </div>
         </div>

         <div className='row '>
             <div className='left'>
                <button>Cash Out</button>
             </div>
             <div className='right'>
               <button>Top Up Stash</button>
             </div>
         </div>
    </div>
  )
}
