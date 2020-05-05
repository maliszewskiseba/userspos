import {
  FETCH_POSTS_BEGIN,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  ADD_POST_BEGIN,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  REMOVE_POST_BEGIN,
  REMOVE_POST_SUCCESS,
  REMOVE_POST_FAILURE
} from '../helpers/actionTypes';
import { API_REMOVE_POST, API_POSTS_URL } from '../constants/apiURL';
import { fetchApi, postApi } from '../constants/api';

// FETCH POSTS
export const fetchPostsBegin = () => ({ type: FETCH_POSTS_BEGIN });

export const fetchPostsSuccess = posts => ({
  type: FETCH_POSTS_SUCCESS,
  payload: { posts }
});

export const fetchPostsFailure = error => ({
  type: FETCH_POSTS_FAILURE,
  payload: { error }
});

export function fetchPosts() {
  return dispatch =>
    fetchApi(API_POSTS_URL, fetchPostsBegin, fetchPostsSuccess, fetchPostsFailure, dispatch);
}

// REMOVE POST
export const removePostBegin = () => ({ type: REMOVE_POST_BEGIN });

export const removePostSuccess = postId => ({
  type: REMOVE_POST_SUCCESS,
  postId
});

export const removePostFailure = error => ({
  type: REMOVE_POST_FAILURE,
  payload: { error }
});

export const removePost = postId => (dispatch) => {
  dispatch(removePostBegin());
  return fetch(API_REMOVE_POST(postId), { method: 'DELETE' })
    .then(dispatch(removePostSuccess(postId)))
    .catch(error => dispatch(removePostFailure(error)));
};

// ADD POSTS
export const addPostBegin = () => ({ type: ADD_POST_BEGIN });

export const addPostSuccess = post => ({
  type: ADD_POST_SUCCESS,
  payload: { post }
});

export const addPostFailure = error => ({
  type: ADD_POST_FAILURE,
  payload: { error }
});

export const addPost = values => (dispatch) => {
  postApi(values, API_POSTS_URL, addPostBegin, addPostSuccess, addPostFailure, dispatch);
};
