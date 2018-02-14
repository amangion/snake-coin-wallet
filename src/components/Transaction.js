import React from 'react';

const Transaction = (porps) => {
  const { from, to, amount } = porps;
  return (
    <div>
      {`${from} -> ${to} ${amount}`}
    </div>
  );
};

export default Transaction;
