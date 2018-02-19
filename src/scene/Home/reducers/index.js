import {FETCH_TRANSACTIONS_SUCCESS, GET_BALANCE_SUCCESS} from '../actions/index';

export const transactions = (state = [], action) => {
  switch (action.type) {
    case FETCH_TRANSACTIONS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export const balance = (state = 0, action) => {
  switch (action.type) {
    case GET_BALANCE_SUCCESS:
      return action.data.balance;
    default:
      return state;
  }
};
