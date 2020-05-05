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

const initialState = {
  posts: [],
  postsLoading: false,
  postsError: null,
  postSending: false,
  postRemoving: false
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_BEGIN:
      return {
        ...state,
        postsFetchLoading: true,
        postFetchError: null
      };

    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        postsFetchLoading: false,
        posts: action.payload.posts
      };

    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        postsFetchLoading: false,
        posts: []
      };

    case ADD_POST_BEGIN:
      return {
        ...state,
        postSending: true
      };

    case ADD_POST_SUCCESS:
      return {
        ...state,
        postSending: false,
        posts: [
          ...state.posts,
          {
            body: action.payload.post.body,
            id:
              action.payload.post.id === 101 ?
                state.posts[state.posts.length - 1].id + 1
                : action.payload.post.id,
            title: action.payload.post.title,
            userId: action.payload.post.userId
          }
        ]
      };

    case ADD_POST_FAILURE:
      return {
        ...state,
        postSending: false,
        postAddingError: action.payload.error
      };

    case REMOVE_POST_BEGIN:
      return {
        ...state,
        postRemoving: true
      };

    case REMOVE_POST_SUCCESS:
      return {
        ...state,
        postRemoving: false,
        posts: [...state.posts.filter(post => post.id !== action.postId)]
      };

    case REMOVE_POST_FAILURE:
      return {
        ...state,
        postRemoving: false,
        postRemoveError: action.payload.error
      };

    default:
      return state;
  }
}
