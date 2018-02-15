import React from 'react';
import { FormGroup, Label, Button, Form } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
  const {
    handleSubmit,
  } = props;
  return (
    <Form className="form-signin" onSubmit={handleSubmit}>
      <h1>Please login</h1>
      <FormGroup>
        <Label for="login" hidden>Login</Label>
        <Field
          className="form-control"
          type="text"
          name="login"
          id="login"
          component="input"
          placeholder="Login"
        />
      </FormGroup>
      {' '}
      <FormGroup>
        <Label for="examplePassword" hidden>Password</Label>
        <Field
          className="form-control"
          type="password"
          name="password"
          id="examplePassword"
          component="input"
          placeholder="Password"
        />
      </FormGroup>
      {' '}
      <Button>Submit</Button>
    </Form>
  );
};

export default reduxForm({
  form: 'loginForm',
})(LoginForm);

