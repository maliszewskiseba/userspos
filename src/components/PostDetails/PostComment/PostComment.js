import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

import modalStyle from '../../../helpers/modalStyle';
import i18n from '../../../i18n';
import { PostRow } from '../../Userpage/Userpage';
import mainTheme from '../../../helpers/mainTheme';
import AddCommentContainer from './AddComment/AddCommentContainer';
import GenericButton from '../../GenericComponents/GenericButton/GenericButton';

const CommentBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: ${rem(10)};
  box-sizing: border-box;
  position: relative;
`;

const CommentRow = styled(PostRow)`
  padding: ${rem(5)};
  flex-direction: column;
  &:hover {
    transform: none;
  }

  &:after {
    content: none;
  }
`;

const CommentRowHeaderTitle = styled.span`
  font-size: ${({ theme }) => theme.font.sizeNormal};
  font-weight: ${({ theme }) => theme.font.weightBold};
`;

CommentRowHeaderTitle.defaultProps = { theme: mainTheme };

const CommentBody = styled.p`
  font-size: ${({ theme }) => theme.font.sizeSm};
`;

CommentBody.defaultProps = { theme: mainTheme };

const CommentRowHeaderEmail = styled.a`
  font-size: ${({ theme }) => theme.font.sizeSm};
`;
CommentRowHeaderEmail.defaultProps = { theme: mainTheme };

const CommentRowHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const PostComment = ({
 comments, openModal, closeModal, isModalOpen, match 
}) => (
  <CommentBox>
    {comments.map(comment => (
      <CommentRow key={`commentId_${comment.id}`}>
        <CommentRowHeader>
          <CommentRowHeaderTitle>{comment.name}</CommentRowHeaderTitle>
          <CommentRowHeaderEmail href={`mailto:${comment.email}`}>
            {comment.email}
          </CommentRowHeaderEmail>
        </CommentRowHeader>
        <CommentBody>{comment.body}</CommentBody>
      </CommentRow>
    ))}
    <Modal style={modalStyle} isOpen={isModalOpen} onRequestClose={closeModal} ariaHideApp={false}>
      <AddCommentContainer match={match} closeModal={closeModal} />
    </Modal>
    <GenericButton onClickFunc={openModal} width="200px" text={i18n.t('comments.add')} />
  </CommentBox>
);

PostComment.propTypes = {
  comments: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired
};

export default PostComment;
