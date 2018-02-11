import { combineReducers } from 'redux';
import transactions from './transactions';

const wallet = combineReducers({
  transactions,
});

export default wallet;
