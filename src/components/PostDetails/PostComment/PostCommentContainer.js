import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import { fetchComments, addComment } from '../../../actions/commentsActions';
import PostComment from './PostComment';

class PostCommentContainer extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    posts: PropTypes.array.isRequired,
    comments: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    onFetchComments: PropTypes.func.isRequired,
    onAddComment: PropTypes.func.isRequired
  };

  state = { isModalOpen: false };

  componentDidMount() {
    const { onFetchComments } = this.props;
    onFetchComments();
  }

  render() {
    const {
 posts, comments, match, loading, onAddComment 
} = this.props;
    const { isModalOpen } = this.state;

    // eslint-disable-next-line
    const send = match => {
      onAddComment(match);
    };

    const openModal = () => {
      this.setState({ isModalOpen: true });
    };

    const closeModal = () => {
      this.setState({ isModalOpen: false });
    };

    return loading ? (
      <LoadingSpinner />
    ) : (
      <PostComment
        posts={posts}
        send={send}
        comments={comments}
        openModal={openModal}
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        match={match}
      />
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts,
  comments: state.comments.comments,
  loading: state.comments.commentsLoading
});

const mapDispatchToProps = (dispatch, match) => ({
  onFetchComments: () => dispatch(fetchComments(match)),
  onAddComment: () => dispatch(addComment(match))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostCommentContainer);
