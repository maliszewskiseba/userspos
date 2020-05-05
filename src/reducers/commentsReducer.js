import {
  FETCH_COMMENTS_BEGIN,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_BEGIN,
  ADD_COMMENT_FAILURE
} from '../helpers/actionTypes';

const initialState = {
  comments: [],
  commentsLoading: false,
  commentsError: null
};

export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMMENTS_BEGIN:
      return {
        ...state,
        commentsLoading: true
      };

    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        commentsLoading: false,
        comments: action.payload.comments
      };

    case FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        comments: [],
        commentsError: action.payload.error
      };

    case ADD_COMMENT_BEGIN:
      return {
        ...state,
        commentLoading: true,
        error: null
      };

    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        commentLoading: false,
        comments: [
          ...state.comments,
          {
            name: action.payload.comment.name,
            body: action.payload.comment.body,
            email: action.payload.comment.email,
            userId: action.payload.comment.userId,
            id:
              state.comments.length && state.comments[state.comments.length - 1].id > 500 ?
                state.comments[state.comments.length - 1].id + 1
                : action.payload.comment.id
          }
        ]
      };

    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };

    default:
      return state;
  }
}
