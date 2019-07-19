import React from 'react'
import PropTypes from 'prop-types'

class  extends React.Component {
  render () {
     return(<div>
                <div>
                     <h3>{'{ Create A Stash}'}</h3>
                     <p>Save whatever you want, earn {'{ 10% interest }'}</p>
                     <form action="">
                       <label>{'{ Give this Stash A Name }'}</label>
                       <input type="text"/>
                       <div className='miniContainer'>
                          <div className='left'>
                            <label>How much would you like to save</label>
                            <input type="text"/>
                          </div>
                          <div className='right'>
                            <label>Cashout interest Monthly</label>
                            <input type="text"/>
                          </div>
                       </div>
                       <label>Select account to Debit</label>
                       <select name="">
                          <option value="Alat Account (02828833) - N23232">{'{ N1131313}'}</option>
                       </select>
                       <button>Create Stash</button>
                     </form>
                </div>
            </div>)
  }
}

export default ;
