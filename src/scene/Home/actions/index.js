import axios from 'axios';

export const FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS';
export const FETCH_TRANSACTIONS_SUCCESS = 'FETCH_TRANSACTIONS_SUCCESS';
export const FETCH_TRANSACTIONS_FAILURE = 'FETCH_TRANSACTIONS_FAILURE';

export const SEND_PAYMENT = 'SEND_PAYMENT';
export const SEND_PAYMENT_SUCCESS = 'SEND_PAYMENT_SUCCESS';
export const SEND_PAYMENT_FAILURE = 'SEND_PAYMENT_FAILURE';

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

export const sendPaymentSuccess = data => ({
  type: SEND_PAYMENT_SUCCESS,
  payload: data,
});

export const sendPayment = data => async (dispatch) => {
  dispatch({ type: SEND_PAYMENT, data });
  try {
    const response = await axios.post(`${ROOT_URL}/transactions`, data);
    dispatch(sendPaymentSuccess(response.data));
  } catch (e) {
    dispatch({ type: SEND_PAYMENT_FAILURE });
  }
};
