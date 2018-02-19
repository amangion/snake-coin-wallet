import axios from 'axios';
import { push } from 'react-router-redux';
import { reset } from 'redux-form';

import ROOT_URL from '../../config';

export const SING_UP_USER = 'SING_UP_USER';
export const SING_UP_USER_SUCCESS = 'SING_UP_USER_SUCCESS';
export const SING_UP_USER_FAILURE = 'SING_UP_USER_FAILURE';

export const singupUser = data => async (dispatch) => {
  dispatch({ type: SING_UP_USER });
  try {
    const response = await axios.post(`${ROOT_URL}/auth/login`, data);
    sessionStorage.setItem('token', response.data.token);
    dispatch([{ type: SING_UP_USER_SUCCESS, data: response.data }, push('/'), reset('loginForm')]);
  } catch (e) {
    dispatch({ type: SING_UP_USER_FAILURE });
  }
};
