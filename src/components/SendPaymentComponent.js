import React from 'react';
import SendForm from './SendForm';

const SendPaymentComponent = ({ handleSubmit }) => (
  <SendForm onSubmit={handleSubmit} />
);

export default SendPaymentComponent;
