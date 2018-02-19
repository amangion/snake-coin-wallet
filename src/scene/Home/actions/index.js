import axios from 'axios';
import { push } from 'react-router-redux';
import { reset } from 'redux-form';

import ROOT_URL from '../../config';

export const FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS';
export const FETCH_TRANSACTIONS_SUCCESS = 'FETCH_TRANSACTIONS_SUCCESS';
export const FETCH_TRANSACTIONS_FAILURE = 'FETCH_TRANSACTIONS_FAILURE';

export const SEND_PAYMENT = 'SEND_PAYMENT';
export const SEND_PAYMENT_SUCCESS = 'SEND_PAYMENT_SUCCESS';
export const SEND_PAYMENT_FAILURE = 'SEND_PAYMENT_FAILURE';

export const GET_BALANCE = 'GET_BALANCE';
export const GET_BALANCE_SUCCESS = 'GET_BALANCE_SUCCESS';
export const GET_BALANCE_FAILURE = 'GET_BALANCE_FAILURE';

export const showTransactions = data => ({
  type: FETCH_TRANSACTIONS_SUCCESS,
  payload: data,
});

export const fetchTransactions = () => async (dispatch) => {
  dispatch({ type: FETCH_TRANSACTIONS });
  try {
    const response = await axios({
      method: 'get',
      url: `${ROOT_URL}/transactions`,
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
    });

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
    const response = await axios({
      method: 'post',
      url: `${ROOT_URL}/transactions`,
      data,
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
    });

    dispatch([
      sendPaymentSuccess(response.data),
      push('/'),
      reset('send'),
    ]);
  } catch (e) {
    dispatch({ type: SEND_PAYMENT_FAILURE });
  }
};


export const getBalance = data => async (dispatch) => {
  dispatch({ type: GET_BALANCE, data });
  try {
    const response = await axios({
      method: 'post',
      url: `${ROOT_URL}/blocks/balance`,
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
    });

    dispatch({ type: GET_BALANCE_SUCCESS, data: response.data });
  } catch (e) {
    dispatch({ type: GET_BALANCE_FAILURE });
  }
};
