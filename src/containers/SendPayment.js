import { connect } from 'react-redux';
import { sendPayment } from '../actions/index';
import SendPaymentComponent from '../components/SendPaymentComponent';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: (data) => {
    dispatch(sendPayment(data));
  },
});

const SendPayment = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SendPaymentComponent);

export default SendPayment;
