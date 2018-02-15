import React from 'react';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import Transaction from './Transaction';

class TransactionTab extends React.Component {
  componentDidMount() {
    this.props.onUpdateClick();
  }

  render() {
    const {
      onUpdateClick,
      transactions,
    } = this.props;

    const items = transactions.map(item => (
      <ListGroupItem key={item._id}>
        <Transaction {...item} />
      </ListGroupItem>
    ));
    return (
      <div>
        <Button color="info" onClick={() => onUpdateClick()}>Update transactions</Button>{' '}
        <p />
        <ListGroup>
          {items}
        </ListGroup>
      </div>
    );
  }
}

export default TransactionTab;
