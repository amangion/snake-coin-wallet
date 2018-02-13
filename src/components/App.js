import React from 'react';
import Transactions from '../containers/Transactions';
import NavBar from './NavBar';
import Footer from './Footer';

const App = () => (
  <div className="container">
    <NavBar />
    <Transactions />
    <Footer />
  </div>
);

export default App;
