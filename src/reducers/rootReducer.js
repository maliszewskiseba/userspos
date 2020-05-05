import { combineReducers } from 'redux';

import users from './usersReducer';
import posts from './postsReducer';
import comments from './commentsReducer';

export default combineReducers({
  users,
  posts,
  comments
});
