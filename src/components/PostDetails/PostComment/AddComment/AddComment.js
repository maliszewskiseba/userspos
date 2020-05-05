import React from 'react';
import PropTypes from 'prop-types';

import i18n from '../../../../i18n';
import ModalComponent from '../../../ModalComponent/ModalComponent';
import AddCommentForm from './AddCommentForm';

const AddComment = ({ onSubmit, closeModal }) => (
  <>
    <ModalComponent closeModal={closeModal} title={i18n.t('comments.add')} />
    <AddCommentForm onSubmit={onSubmit} closeModal={closeModal} />
  </>
);

AddComment.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default AddComment;
