import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import transactions from './transactions';

const wallet = combineReducers({
  transactions,
  form: formReducer,
  routerReducer,
});

export default wallet;
