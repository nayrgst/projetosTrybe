import { combineReducers } from 'redux';
import userReducer from './user';
import wallet from './wallet';

const rootReduce = combineReducers({
  user: userReducer,
  wallet,
});

export default rootReduce;
