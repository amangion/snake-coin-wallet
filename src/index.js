import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import { BrowserRouter, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';

const store = createStore(
  reducers,
  applyMiddleware(logger),
  applyMiddleware(reduxThunk),
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
