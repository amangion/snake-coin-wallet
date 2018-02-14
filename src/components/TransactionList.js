import React from 'react';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import Transaction from './Transaction';

const TransactionList = ({ transactions = [], onUpdateClick }) => {
  const items = transactions.map(item => (
    <ListGroupItem key={item._id}>
      <Transaction {...item} />
    </ListGroupItem>
  ));
  return (
    <div>
      <Button color="info" onClick={() => onUpdateClick()}>Update transactions</Button>{' '}
      <br />
      <ListGroup>
        {items}
      </ListGroup>
    </div>
  );
};

export default TransactionList;
