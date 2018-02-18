import { connect } from 'react-redux';

import LoginForm from '../components/LoginForm';
import { singupUser } from '../actions/index';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(singupUser(data)),
});

const LoginComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);

export default LoginComponent;
