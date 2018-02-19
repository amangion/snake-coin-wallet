import React from 'react';

const Transaction = (porps) => {
  const { from, to, amount } = porps;
  return (
    <div>
      {'From '}<b>{from}</b>{' to '}<b>{to}</b>{' Transaction amount:'}<b>{amount}$</b>
    </div>
  );
};

export default Transaction;
