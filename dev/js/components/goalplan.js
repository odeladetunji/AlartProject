import React from 'react';
import {Col, Row, sm, xs, lg, md} from 'react-bootstrap';

const goalplans = () => {
  return (
    <div>
        <div className='selectAgoalPlan'>
           <p>{'{ SELECT A GOAL PLAN }'}</p>
        </div>
        <Row>
          <Col xs={12} md={12} lg={4}>
             <div className="depositType">
                 <img src="" alt=""/>
                 <div className="innerCard">
                   <h4>Fixed Goal</h4>
                   <p>Save daily, weekly or monthly towards a target amount,
                     earn {'{ 10% }'} interest {'{ annually.}'} No withdrawals allowed</p>
                 </div>
             </div>
          </Col>
          <Col xs={12} md={12} lg={4}>
            <div className="depositType">
                <img src="" alt=""/>
                <div className="innerCard">
                  <h4>Flexi Goal</h4>
                  <p>Save Daily weekly or monthly towards a target amount, earn {'{ 10% }'} interest.
                  withdraw up to {'{ 50% }'} {'{ of }'} your savings</p>
                </div>
            </div>
          </Col>
          <Col xs={12} md={12} lg={4}>
            <div className="depositType">
                <img src="" alt=""/>
                <div className="innerCard">
                  <h4>Stash</h4>
                  <p>Save whatever you want whenever you want and earn {'{ 10% }'} interest {'{ with }'} the
                  option to withdraw your interest on a monthly basis.</p>
                </div>
            </div>
          </Col>
        </Row>
    </div>
  )
}

export default goalplans;
