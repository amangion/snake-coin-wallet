import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { sendPayment } from '../actions/index';
import SendForm from '../components/SendForm';

const mapStateToProps = state => ({
  token: state.auth.token,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (data) => {
    dispatch(sendPayment(data));
  },
});

const SendPayment = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SendForm);

export default withRouter(SendPayment);
