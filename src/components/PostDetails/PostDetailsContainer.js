import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PostDetails from './PostDetails';

class PostDetailsContainer extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
    posts: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  state = { commentsEnabled: false };

  render() {
    const { users, posts, match, history } = this.props;
    const { commentsEnabled } = this.state;

    const toggleComments = () => {
      this.setState({ commentsEnabled: !commentsEnabled });
    };

    return (
      <PostDetails
        users={users}
        posts={posts}
        history={history}
        match={match}
        toggleComments={toggleComments}
        areCommentsEnabled={commentsEnabled}
      />
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
  posts: state.posts.posts
});

export default connect(
  mapStateToProps,
  null
)(PostDetailsContainer);
