import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { transactions, balance } from './scene/Home/reducers/index';

import authReducer from './scene/Login/reducers';

const wallet = combineReducers({
  transactions,
  balance,
  form: formReducer,
  routerReducer,
  auth: authReducer,
});

export default wallet;

