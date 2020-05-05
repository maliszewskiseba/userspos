import React from 'react';
import PropTypes from 'prop-types';

import ModalComponent from '../../ModalComponent/ModalComponent';
import AddPostForm from './AddPostForm';
import i18n from '../../../i18n';

const AddPost = ({ onSubmit, closeModal }) => (
  <>
    <ModalComponent closeModal={closeModal} title={i18n.t('posts.add')} />
    <AddPostForm onSubmit={onSubmit} closeModal={closeModal} />
  </>
);

AddPost.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default AddPost;
