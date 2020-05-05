import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastsStore } from 'react-toasts';
import PropTypes from 'prop-types';
import AddPost from './AddPost';

import { addPost, fetchPosts } from '../../../actions/postsActions';
import { validateTitle, validateBody } from '../../../helpers/validation';
import i18n from '../../../i18n';

// eslint-disable-next-line react/prefer-stateless-function
class AddPostContainer extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    onAddPost: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
  };

  onSubmit = (values, onAddPost, closeModal, match) => {
    values.userId = match.params.userId;
    if (validateTitle(values.title) && validateBody(values.body)) {
      onAddPost(values);
      closeModal();
      ToastsStore.success(i18n.t('posts.addedSuccesfully'));
    }
  };

  render() {
    const { onAddPost, closeModal, match } = this.props;

    return (
      <AddPost
        onSubmit={values => this.onSubmit(values, onAddPost, closeModal, match)}
        closeModal={closeModal}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onAddPost: (values) => {
    dispatch(addPost(values));
  },

  onFetchPost: () => {
    dispatch(fetchPosts());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(AddPostContainer);
