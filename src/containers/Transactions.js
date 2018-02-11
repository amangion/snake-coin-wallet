import { connect } from 'react-redux';
import { fetchTransactions } from '../actions';
import TransactionList from '../components/TransactionList';

const mapStateToProps = state => ({
  transactions: state.transactions,
});

const mapDispatchToProps = dispatch => ({
  onUpdateClick: () => {
    dispatch(fetchTransactions());
  },
});

const Transactions = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransactionList);

export default Transactions;
