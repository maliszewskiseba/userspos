export const API_COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';
export const API_GET_COMMENTS_BY_USER_ID = postId =>
  `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
export const API_USERS_URL = 'https://jsonplaceholder.typicode.com/users';
export const API_REMOVE_POST = postId => `https://jsonplaceholder.typicode.com/posts/${postId}`;
export const API_POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
