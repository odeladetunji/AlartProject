import {combineReducers} from 'redux';
import testReducer from './testReducer';

const allReducers = combineReducers({
     testReducer: testReducer
});

export default allReducers;
