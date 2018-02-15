import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { reset } from 'redux-form';
import LoginForm from '../components/LoginForm';
import { authSuccess } from '../actions/index';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (data) => {
    dispatch(authSuccess(data));
    dispatch(push('/'));
    dispatch(reset('loginForm'));
  },
});

const LoginComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);

export default LoginComponent;
