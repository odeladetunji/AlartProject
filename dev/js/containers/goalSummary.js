import React from 'react'
import PropTypes from 'prop-types'

class GoalSummary extends React.Component {
  render () {
      return(
        <div>
           <div className="goalSummaryHeading">
             <h3>Goal Summary</h3>
           </div>
           <form>
             <div className="coverForSummary">
                 <div className="leftCover">
                   <p>Goal Name</p>
                   <p>Dubai Goal</p>
                 </div>
                 <div className="rightName">
                   <p>Target Amount</p>
                   <p>{'{ N1001020202}'}</p>
                 </div>
             </div>

             <div className="coverForSummary">
                 <div className="leftCover">
                   <p>Start {'{ Date}'}</p>
                   <p>Nov {'{ 24, 2017 }'} </p>
                 </div>
                 <div className="rightName">
                   <p>End {'{ Date }'}</p>
                   <p>July {'{ 30, 2018 }'} </p>
                 </div>
             </div>

             <div className="coverForSummary">
                 <div className="leftCover">
                   <p>Contributions</p>
                   <p>{'{ N 100000 / monthly}'}</p>
                 </div>
                 <div className="rightName">
                   <p>Account to Debit</p>
                   <p>Alat Account</p>
                 </div>
             </div>

             <button>Create Goal</button>
           </form>
        </div>
      )
  }
}

export default GoalSummary;
