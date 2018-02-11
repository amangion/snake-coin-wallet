import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const TransactionList = ({ transactions = [] }) => {
  const items = transactions.map(item => <ListGroupItem key={item}>{item}</ListGroupItem>);
  return (<ListGroup>
    {items}
  </ListGroup>);
};

export default TransactionList;
