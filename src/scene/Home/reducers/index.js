import { FETCH_TRANSACTIONS_SUCCESS } from '../actions/index';

const transactions = (state = [], action) => {
  switch (action.type) {
    case FETCH_TRANSACTIONS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default transactions;
