import React, { Component }from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';


class createAFixedGoal extends Component{
  constructor() {
  }

  render(){
     return(
         <div>
            <div>
               <h3>Create a Fixed Goal</h3>
               <p>Save daily, weekly or monthly towards a target amount, earn <span> {'{ 100% interest pa. }'}</span>
                 No withdrawal allowed, you will loose your interest {'{ if }'} you don't meet your target.
              </p>

              <form onSubmit={} className="creatAFixedGoalForm">
                <label>Give your form a label</label>
                <input type="text"/>
                <div className="centerDiv">
                    <div className="leftDiv">
                       <label>When would you like to start</label>
                       <input type="text"/>
                    </div>
                    <div className="rightDiv">
                      <label>When {'{ do }'} you want to achieve {'{ this? }'}</label>
                      <input type="text"/>
                    </div>
                </div>

                <div className="centerDiv">
                    <div className="leftDiv">
                       <label>How much would you like to save</label>
                       <input type="text"/>
                    </div>
                    <div className="rightDiv">
                      <label>How often {'{ do }'} you want to save?</label>
                      <select name="">
                         <option value=""></option>
                         <option value=""></option>
                         <option value=""></option>
                         <option value=""></option>
                         <option value=""></option>
                         <option value=""></option>
                      </select>
                    </div>
                </div>

                 <button>Next</button>
              </form>
            </div>
         </div>
     );
  }
}

export default createAFixedGoal;
