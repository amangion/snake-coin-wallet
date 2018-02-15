import React from 'react';
import { Col, FormGroup, Label, Button } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';

const SendForm = (props) => {
  const {
    handleSubmit,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup row>
        <Label for="to" sm={2}>To</Label>
        <Col sm={10}>
          <Field
            className="form-control"
            name="to"
            id="to"
            component="input"
            type="text"
            placeholder="Enter bitcoin address"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="description" sm={2}>Description</Label>
        <Col sm={10}>
          <Field
            className="form-control"
            name="description"
            id="description"
            component="textarea"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="amount" sm={2}>Amount</Label>
        <Col sm={10}>
          <Field
            className="form-control"
            name="amount"
            id="Amount"
            component="input"
            placeholder="Enter amaunt"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button type="submit">
                Submit
          </Button>
        </Col>
      </FormGroup>
    </form>
  );
};

export default reduxForm({
  form: 'send',
})(SendForm);
