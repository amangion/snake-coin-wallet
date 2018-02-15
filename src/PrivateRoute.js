import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRouteContainer extends React.Component {
  render() {
    const {
      isAuthenticated,
      component: Component,
      ...props
    } = this.props;

    const checkAuth = (params) => {
      if (isAuthenticated) {
        return (<Component {...params} />);
      }
      return (
        <Redirect to={{ pathname: '/login', state: { from: params.location } }} />
      );
    };


    return (<Route {...props} render={props => checkAuth(props)} />);
  }
}

const PrivateRoute = connect(state => ({
  isAuthenticated: state.authReducer.isAuthenticated,
}))(PrivateRouteContainer);

export default PrivateRoute;
