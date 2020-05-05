import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import PropTypes from 'prop-types';

import PostCommentContainer from './PostComment/PostCommentContainer';
import i18n from '../../i18n';
import { UserPageUserName, UserPageControlButton } from '../Userpage/Userpage';
import mainTheme from '../../helpers/mainTheme';
import backIcon from '../../assets/back_icon.png';

const PostDetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({ theme }) => theme.width.max};
  font-family: ${({ theme }) => theme.font.family};
  margin: 0 auto;
  padding: ${rem(20)};
  box-sizing: border-box;
`;

PostDetailsBox.defaultProps = { theme: mainTheme };

const PostDetailsRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;

  &:nth-child(1) {
    span {
      margin: auto;
    }
  }
`;

const PostDetailsUserName = styled(UserPageUserName)`
  &:after {
    bottom: ${rem(-5)};
  }
`;

const PostDetailsBackButton = styled(UserPageControlButton)`
  background: url(${backIcon});
  background-repeat: no-repeat;

  &:after {
    content: 'Back';
    top: ${rem(4)};
  }
`;

const PostDetailsPostBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const PostDetailsPostTitle = styled.h2`
  text-align: center;
`;

const PostDetailsCommentsButton = styled.button`
  width: ${rem(150)};
  border: ${({ theme }) => theme.border.light};
  border-radius: ${rem(5)};
  background-color: transparent;
  cursor: pointer;
  font-family: ${({ theme }) => theme.font.family};
  transition: ${({ theme }) => theme.transition.standardButton};
  outline: none;

  &:hover {
    transform: scale(1.2);
  }
`;

PostDetailsCommentsButton.defaultProps = { theme: mainTheme };

const PostDetailsPostsBody = styled.p``;

const PostDetails = ({
 users, posts, history, match, toggleComments, areCommentsEnabled 
}) => (
  <PostDetailsBox>
    <PostDetailsRow>
      <PostDetailsBackButton onClick={history.goBack} />
      <PostDetailsUserName>{users[match.params.userId - 1].name}</PostDetailsUserName>
    </PostDetailsRow>
    <PostDetailsRow>
      {posts.map(
        post =>
          post.id === parseInt(match.params.postId, 10) && (
            <PostDetailsPostBox key={`postKey_${post.id}`}>
              <PostDetailsPostTitle>{post.title}</PostDetailsPostTitle>
              <PostDetailsPostsBody>{post.body}</PostDetailsPostsBody>
            </PostDetailsPostBox>
          )
      )}
    </PostDetailsRow>
    <PostDetailsRow>
      <PostDetailsCommentsButton onClick={toggleComments}>
        {!areCommentsEnabled ? i18n.t('comments.show') : i18n.t('comments.hide')}
      </PostDetailsCommentsButton>
    </PostDetailsRow>
    {areCommentsEnabled && <PostCommentContainer match={match} />}
  </PostDetailsBox>
);

PostDetails.propTypes = {
  users: PropTypes.array.isRequired,
  posts: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  toggleComments: PropTypes.func.isRequired,
  areCommentsEnabled: PropTypes.bool.isRequired
};

export default PostDetails;
