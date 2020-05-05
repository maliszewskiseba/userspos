import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Userpage from "./Userpage";
import { fetchPosts, removePost } from "../../actions/postsActions";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import PageNotFound from "../PageNotFound/PageNotFound";
import i18n from "../../i18n";

class UserpageContainer extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
    users: PropTypes.array,
    loading: PropTypes.bool,
    sending: PropTypes.bool,
    history: PropTypes.object.isRequired,
    removing: PropTypes.bool,
    onRemovePost: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
  };

  state = { modalIsOpen: false };

  render() {
    const {
      history,
      users,
      loading,
      sending,
      removing,
      posts,
      match,
      onRemovePost,
    } = this.props;
    const { modalIsOpen } = this.state;
    const userId = parseFloat(match.params.userId);
    const isUserExist = users.length >= userId;
    const user = isUserExist && users[userId - 1];
    const { confirm } = window;
    const userPosts = [];

    posts.map((post) =>
      parseFloat(post.userId) === parseFloat(match.params.userId)
        ? userPosts.push({
            postTitle: post.title,
            postBody: post.body,
            postId: post.id,
          })
        : null
    );

    const openModal = () => {
      this.setState({ modalIsOpen: true });
    };

    const closeModal = () => {
      this.setState({ modalIsOpen: false });
    };

    const removeValidation = (postId) =>
      confirm(i18n.t("posts.removeConfirm")) ? onRemovePost(postId) : false;
    return (
      <>
        {(loading || sending || removing) && <LoadingSpinner />}
        {isUserExist ? (
          <Userpage
            match={match}
            user={user}
            userPosts={userPosts}
            history={history}
            openModal={openModal}
            closeModal={closeModal}
            isModalOpen={modalIsOpen}
            confirmatedRemovePost={removeValidation}
          />
        ) : (
          <PageNotFound />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users.users,
  posts: state.posts.posts,
  sending: state.posts.postSending,
  removing: state.posts.postRemoving,
  loading: state.posts.postsLoading,
});

UserpageContainer.defaultProps = {
  users: [{}],
  loading: false,
  sending: false,
  removing: false,
};

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  onRemovePost: (postId) => dispatch(removePost(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserpageContainer);
