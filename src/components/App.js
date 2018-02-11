import React, { Component } from 'react';
import TransactionList from './TransactionList';

class App extends Component {
  render() {
    const transactions = [1, 2, 3];

    return (
      <div className="App">
        <TransactionList transactions={transactions} />
      </div>
    );
  }
}

export default App;
