import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { rem } from "polished";
import PropTypes from "prop-types";

import AddPostContainer from "./AddPost/AddPostContainer";
import trashIcon from "../../assets/trash_icon.png";
import backIcon from "../../assets/back_icon.png";
import addIcon from "../../assets/add_icon.png";
import mainTheme from "../../helpers/mainTheme";
import modalStyle from "../../helpers/modalStyle";
import MainNavbarContainer from "../MainNavbar/MainNavbarContainer";

const UserPageBox = styled.div`
  width: 100%;
  max-width: ${rem(1200)};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: ${rem(20)};
  flex-wrap: wrap;
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${rem(14)};
`;
UserPageBox.defaultProps = { theme: mainTheme };

const UserPageRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: ${rem(20)} 0;

  &:last-of-type {
    flex-direction: column;
  }
`;

const UserPageUserPost = styled.div`
  width: 100%;
  margin: ${rem(10)} 0;
  box-sizing: border-box;
  padding: ${rem(5)};
  position: relative;
  cursor: pointer;
  font-family: ${({ theme }) => theme.font.family};
`;

UserPageUserPost.defaultProps = { theme: mainTheme };

export const PostRow = styled.div`
  display: flex;
  flex-direction: row;
  border: ${({ theme }) => theme.border.light};
  box-shadow: ${({ theme }) => theme.shadow.light};
  border-radius: ${rem(5)};
  position: relative;
  margin: ${rem(5)};
  transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    transform: scale(1.035);
  }

  &:after {
    content: "";
    position: absolute;
    width: ${rem(10)};
    height: ${rem(10)};
    border-top: ${({ theme }) => theme.border.normal};
    border-right: ${({ theme }) => theme.border.normal};
    right: ${rem(10)};
    bottom: ${rem(20)};
    transform: rotate(45deg);
  }
`;

PostRow.defaultProps = { theme: mainTheme };

export const UserPageControlButton = styled.button`
  height: ${rem(30)};
  width: ${rem(30)};
  background: ${(props) =>
    props.addButton ? `url(${addIcon})` : `url(${backIcon})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  position: relative;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.standardButton};
  outline: none;

  &:hover {
    transform: scale(1.2);
  }

  &:after {
    content: ${(props) => props.backButton && '"Back"'};
    position: absolute;
    right: ${rem(-30)};
    top: ${rem(7)};
    font-family: ${({ theme }) => theme.font.family};
    font-size: ${({ theme }) => theme.font.sizeSm};
    color: ${({ theme }) => theme.colors.blue};
    font-weight: ${({ theme }) => theme.font.weightBold};
  }
`;

UserPageControlButton.defaultProps = { theme: mainTheme };

export const UserPageUserName = styled.span`
  position: relative;
  font-size: ${({ theme }) => theme.font.sizeBig};

  &:after {
    content: "";
    width: 100%;
    position: absolute;
    border-bottom: ${({ theme }) => theme.border.light};
    bottom: ${rem(5)};
    left: 0;
  }
`;

UserPageUserName.defaultProps = { theme: mainTheme };

export const PostDeleteButton = styled.button`
  width: ${rem(30)};
  border: none;
  outline: none;
  margin: ${rem(5)};
  background: url(${trashIcon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  transition: all 0.15s ease-in;

  &:hover {
    transform: scale(1.3);
    border: ${({ theme }) => theme.border.light};
    border-color: red;
    border-radius: ${rem(5)};
    padding: ${rem(5)};
  }
`;

PostDeleteButton.defaultProps = { theme: mainTheme };

const PostLink = styled(Link)`
  width: calc(100% - ${rem(50)});
  text-decoration: none;
  color: black;
`;

const UserPage = ({
  match,
  user,
  userPosts,
  history,
  openModal,
  closeModal,
  isModalOpen,
  confirmatedRemovePost,
}) => (
  <>
    <MainNavbarContainer shouldBeWide shouldRenderUserIcon={true} />
    <UserPageBox>
      <UserPageRow>
        <UserPageControlButton backButton onClick={history.goBack} />
        <UserPageUserName>{user.name}</UserPageUserName>
        <UserPageControlButton addButton onClick={openModal} />
        <Modal
          style={modalStyle}
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
        >
          <AddPostContainer match={match} closeModal={closeModal} />
        </Modal>
      </UserPageRow>
      <UserPageRow>
        {userPosts.map((post) => (
          <PostRow key={`postId_${post.postId}`}>
            <PostDeleteButton
              onClick={() => confirmatedRemovePost(post.postId)}
            />
            <PostLink to={`/app/user/${user.id}/${post.postId}`}>
              <UserPageUserPost>{post.postTitle}</UserPageUserPost>
            </PostLink>
          </PostRow>
        ))}
      </UserPageRow>
    </UserPageBox>
  </>
);

UserPage.propTypes = {
  match: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  userPosts: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  confirmatedRemovePost: PropTypes.func.isRequired,
};

export default UserPage;
