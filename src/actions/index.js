import axios from 'axios';

export const FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS';
export const FETCH_TRANSACTIONS_SUCCESS = 'FETCH_TRANSACTIONS_SUCCESS';
export const FETCH_TRANSACTIONS_FAILURE = 'FETCH_TRANSACTIONS_FAILURE';

const ROOT_URL = 'http://localhost:4040/api';

export const showTransactions = data => ({
  type: FETCH_TRANSACTIONS_SUCCESS,
  payload: data,
});

export const fetchTransactions = () => async (dispatch) => {
  dispatch({ type: FETCH_TRANSACTIONS });
  try {
    const response = await axios.get(`${ROOT_URL}/transactions`);
    dispatch(showTransactions(response.data));
  } catch (e) {
    dispatch({ type: FETCH_TRANSACTIONS_FAILURE });
  }
};
