import React from 'react';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import Transaction from './Transaction';

class TransactionTab extends React.Component {
  componentDidMount() {
    this.props.onUpdateClick();
    this.props.getBalance();
  }

  render() {
    const {
      onUpdateClick,
      transactions,
      balance,
      currentUser
    } = this.props;

    const items = transactions.map(item => (
      <ListGroupItem key={item._id}>
        <Transaction {...item} />
      </ListGroupItem>
    ));
    return (
      <div>
        <div className="transactionListHeader">
          <span>User: <b>{currentUser}</b> Current balance: <b>{balance}$</b></span>
          <Button className="updateButton" color="info" onClick={() => onUpdateClick()}>Update transactions</Button>{' '}
        </div>
        <p />
        <ListGroup>
          {items}
        </ListGroup>
      </div>
    );
  }
}

export default TransactionTab;
