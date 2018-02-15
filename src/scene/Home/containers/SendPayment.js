import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { push } from 'react-router-redux';
import { reset } from 'redux-form';
import { sendPayment } from '../actions/index';
import SendForm from '../components/SendForm';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (data) => {
    dispatch(push('/'));
    dispatch(sendPayment(data));
    dispatch(reset('send'));
  },
});

const SendPayment = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SendForm);

export default withRouter(SendPayment);
