import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import authReducer from '../scene/Login/reducers';
import transactions from '../scene/Home/reducers';

const wallet = combineReducers({
  transactions,
  form: formReducer,
  routerReducer,
  authReducer,
});

export default wallet;
