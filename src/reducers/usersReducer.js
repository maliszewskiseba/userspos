import {
  FETCH_USERS_BEGIN,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from '../helpers/actionTypes';

const initialState = {
  users: [],
  usersLoading: false,
  usersError: null
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_BEGIN:
      return {
        ...state,
        usersLoading: true,
        error: null
      };

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        usersLoading: false,
        users: action.payload.users
      };

    case FETCH_USERS_FAILURE:
      return {
        ...state,
        usersLoading: false,
        usersError: action.payload.error,
        users: []
      };

    default:
      return state;
  }
}
