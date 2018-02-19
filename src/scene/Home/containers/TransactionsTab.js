import { connect } from 'react-redux';
import { fetchTransactions, getBalance } from '../actions';
import TransactionList from '../components/TransactionList';

const mapStateToProps = state => ({
  transactions: state.transactions,
  balance: state.balance,
});

const mapDispatchToProps = dispatch => ({
  onUpdateClick: () => {
    dispatch(fetchTransactions());
    dispatch(getBalance());
  },
  getBalance: () => {
    dispatch(getBalance());
  },
});

const Transactions = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransactionList);

export default Transactions;
