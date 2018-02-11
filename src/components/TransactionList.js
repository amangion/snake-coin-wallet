import React from 'react';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';

const TransactionList = ({ transactions = [], onUpdateClick }) => {
  const items = transactions.map(item => <ListGroupItem key={item}>{item}</ListGroupItem>);
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
