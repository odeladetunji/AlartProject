import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { MdCheckCircle } from 'react-icons/Md';

export default () => {
  return(
    <div>
        <div className='stashContainer'>
             <label id="mdCheckcle"><MdCheckCircle /></label>
             <h6>Fixed Goal Created Successfully</h6>
             <div className='content'>
                 <div className='first'>
                    <p className='phead'>Stash</p>
                    <p className='pBottom'>Status: Completed</p>
                 </div>
                 <div className='second'>
                    <p className='phead'>N100, 0000</p>
                    <p className='pBottom'>Amount Saved</p>
                 </div>
             </div>
        </div>
    </div>
  );
}
