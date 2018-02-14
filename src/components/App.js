import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Transactions from '../containers/Transactions';
import NavBar from './NavBar';
import Footer from './Footer';
import SendPayment from '../containers/SendPayment';

const App = () => (
  <div className="container">
    <NavBar />
    <Switch>
      <Route exact path="/" component={Transactions} />
      <Route path="/send" component={SendPayment} />
    </Switch>
    <Footer />
  </div>
);

export default App;
