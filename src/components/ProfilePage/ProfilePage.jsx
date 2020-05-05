import React, { useContext } from "react";
import { UserContext } from "../UserProvider/UserProvider";
import styled from "styled-components";
import MainNavbarContainer from "../MainNavbar/MainNavbarContainer";

import userIcon from "../../assets/user_icon.png";

const UserProfileContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  flex-direction: column;
  font-family: "Comfortaa", cursive;
  align-items: center;
`;

const UserName = styled.h1``;

const UserImage = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background: ${(props) => (props.src ? `url(${props.src})` : null)};
  background-size: contain;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
`;

const ProfilePage = () => {
  const user = useContext(UserContext);

  return (
    <>
      <MainNavbarContainer shouldBeWide shouldRenderUserIcon={false} />
      <UserProfileContainer>
        {user ? <UserName>{user.displayName}</UserName> : null}
        {user ? <span>{user.email}</span> : null}
        {user ? (
          <UserImage src={user.photoURL ? user.photoURL : userIcon} />
        ) : null}
      </UserProfileContainer>
    </>
  );
};
export default ProfilePage;
