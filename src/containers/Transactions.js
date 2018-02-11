import { connect } from 'react-redux';
import { getTransactions } from '../actions';
import TransactionList from '../components/TransactionList';

const mapStateToProps = state => ({
  transactions: state.transactions,
});

const mapDispatchToProps = dispatch => ({
  onUpdateClick: () => {
    dispatch(getTransactions());
  },
});

const Transactions = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransactionList);

export default Transactions;
