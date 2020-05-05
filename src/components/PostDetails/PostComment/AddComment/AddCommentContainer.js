import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastsStore } from 'react-toasts';
import PropTypes from 'prop-types';
import AddComment from './AddComment';

import i18n from '../../../../i18n';
import { validateEmail, validateName, validateBody } from '../../../../helpers/validation';
import { addComment } from '../../../../actions/commentsActions';

// eslint-disable-next-line
class AddCommentContainer extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    onAddComment: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired
  };

  onSubmit = (values, onAddComment, match, closeModal) => {
    values.userId = parseFloat(match.params.userId, 10);
    if (validateEmail(values.email) && validateName(values.name) && validateBody(values.body)) {
      onAddComment(values);
      closeModal();
      ToastsStore.success(i18n.t('comments.addedSuccesfully'));
    }
  };

  render() {
    const { match, onAddComment, closeModal } = this.props;
    return (
      <AddComment
        onSubmit={values => this.onSubmit(values, onAddComment, match, closeModal)}
        closeModal={closeModal}
      />
    );
  }
}

AddCommentContainer.defaultProps = {};

const mapDispatchToProps = dispatch => ({
  onAddComment: (values) => {
    dispatch(addComment(values));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(AddCommentContainer);
