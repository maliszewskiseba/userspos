import React, { Component } from "react";
import { connect } from "react-redux";
import PropType from "prop-types";

import { fetchUsers } from "../../actions/userActions";
import { fetchPosts } from "../../actions/postsActions";
import Mainpage from "./Mainpage";
import UserContext from "../UserProvider/UserProvider";

import { getGoogleRedirectInfo } from "../../firebase";

class MainpageContainer extends Component {
  static propTypes = {
    users: PropType.array.isRequired,
    usersLoading: PropType.bool,
    postsLoading: PropType.bool,
    onFetchPosts: PropType.func.isRequired,
    onFetchUsers: PropType.func.isRequired,
  };

  componentDidMount() {
    const { onFetchPosts, onFetchUsers } = this.props;
    onFetchUsers();
    onFetchPosts();
    getGoogleRedirectInfo();
  }

  render() {
    const { usersLoading, users, postsLoading, onFetchPosts } = this.props;
    return (
      <Mainpage
        fetchPosts={onFetchPosts}
        usersLoading={usersLoading}
        postsLoading={postsLoading}
        users={users}
      />
    );
  }
}

MainpageContainer.defaultProps = {
  usersLoading: false,
  postsLoading: false,
};

const mapDispatchToProps = (dispatch) => ({
  onFetchPosts: () => dispatch(fetchPosts()),
  onFetchUsers: () => dispatch(fetchUsers()),
});

const mapStateToProps = (state) => ({
  users: state.users.users,
  usersLoading: state.users.usersLoading,
  postsLoading: state.posts.postsFetchLoading,
  error: state.users.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(MainpageContainer);
