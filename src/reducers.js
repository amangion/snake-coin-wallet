import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import transactions from './scene/Home/reducers';
import authReducer from './scene/Login/reducers';

const wallet = combineReducers({
  transactions,
  form: formReducer,
  routerReducer,
  authReducer,
});

export default wallet;

