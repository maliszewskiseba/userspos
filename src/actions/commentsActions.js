import {
  FETCH_COMMENTS_BEGIN,
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_SUCCESS,
  ADD_COMMENT_BEGIN,
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_SUCCESS
} from '../helpers/actionTypes';
import { fetchApi, postApi } from '../constants/api';
import { API_GET_COMMENTS_BY_USER_ID, API_COMMENTS_URL } from '../constants/apiURL';

export const fetchCommentsBegin = () => ({ type: FETCH_COMMENTS_BEGIN });

export const fetchCommentsSuccess = comments => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload: { comments }
});

export const fetchCommentsFailure = error => ({
  type: FETCH_COMMENTS_FAILURE,
  payload: { error }
});

export function fetchComments(match) {
  const { postId } = match.match.params;
  return (dispatch) => {
    fetchApi(
      API_GET_COMMENTS_BY_USER_ID(postId),
      fetchCommentsBegin,
      fetchCommentsSuccess,
      fetchCommentsFailure,
      dispatch
    );
  };
}

export const addCommentBegin = () => ({ type: ADD_COMMENT_BEGIN });

export const addCommentSuccess = comment => ({
  type: ADD_COMMENT_SUCCESS,
  payload: { comment }
});

export const addCommentFailure = error => ({
  type: ADD_COMMENT_FAILURE,
  payload: { error }
});

export function addComment(values) {
  return (dispatch) => {
    postApi(
      values,
      API_COMMENTS_URL,
      addCommentBegin,
      addCommentSuccess,
      addCommentFailure,
      dispatch
    );
  };
}
