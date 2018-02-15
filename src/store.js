import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import { compose, createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';


import reducers from './reducers';

const prepareStore = history => createStore(
  reducers,
  applyMiddleware(logger),
  compose(
    applyMiddleware(reduxThunk),
    applyMiddleware(routerMiddleware(history)),
  ),
);


export default prepareStore;
