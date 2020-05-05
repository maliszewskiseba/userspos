import {
  FETCH_USERS_BEGIN,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from '../helpers/actionTypes';
import { API_USERS_URL } from '../constants/apiURL';
import { fetchApi } from '../constants/api';

export const fetchUsersBegin = () => ({ type: FETCH_USERS_BEGIN });

export const fetchUsersSuccess = users => ({
  type: FETCH_USERS_SUCCESS,
  payload: { users }
});

export const fetchUsersFailure = error => ({
  type: FETCH_USERS_FAILURE,
  payload: { error }
});

export function fetchUsers() {
  return (dispatch) => {
    fetchApi(API_USERS_URL, fetchUsersBegin, fetchUsersSuccess, fetchUsersFailure, dispatch);
  };
}
