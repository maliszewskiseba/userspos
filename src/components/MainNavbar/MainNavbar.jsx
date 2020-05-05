import React, { useContext } from "react";
import { UserContext } from "../UserProvider/UserProvider";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PROFILE_PAGE } from "../../constants/routeURL";
import { logout } from "../../firebase";

import homeIcon from "../../assets/home_icon.png";
import loginIcon from "../../assets/login_icon.png";
import signoutIcon from "../../assets/signout_icon.png";
import userIcon from "../../assets/user_icon.png";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${(props) =>
    props.isWideNavbar || props.shouldBeWide ? "90%" : "70%"};
  margin: 0 auto;
  position: sticky;
  top: 0;
  padding: 50px;
  border: 1px solid rgba(0, 0, 0, 0.03);
  background-color: white;
  z-index: 2;
  border-radius: 8px;
  margin-bottom: 30px;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  box-shadow: 0 0.8px 0px -17px rgba(0, 0, 0, 0.015),
    0 1.8px 0.3px -17px rgba(0, 0, 0, 0.022),
    0 3px 1px -17px rgba(0, 0, 0, 0.027),
    0 4.5px 2.1px -17px rgba(0, 0, 0, 0.031),
    0 6.5px 3.8px -17px rgba(0, 0, 0, 0.035),
    0 9.2px 6.3px -17px rgba(0, 0, 0, 0.039),
    0 13.1px 10.1px -17px rgba(0, 0, 0, 0.043),
    0 19px 15.7px -17px rgba(0, 0, 0, 0.048),
    0 29.3px 25px -17px rgba(0, 0, 0, 0.055),
    0 52px 47px -17px rgba(0, 0, 0, 0.07);
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const UserImage = styled.div`
  display: flex;
  background: ${(props) =>
    props.userPhoto ? `url(${props.userPhoto})` : null};
  background-size: cover;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  cursor: pointer;
  margin-left: auto;
`;
const CustomIcon = styled.div`
  display: flex;
  background: ${(props) =>
    props.homeIcon
      ? `url(${homeIcon})`
      : props.loginIcon
      ? `url(${loginIcon})`
      : null};
  background-size: cover;
  width: 26px;
  height: 26px;
  cursor: pointer;
`;

const NavButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: "Comfortaa", cursive;
  font-size: 24px;
`;

const NavLink = styled(Link)`
  position: relative;
  text-decoration: none;
  border-bottom: 1px solid transparent;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: -30%;
    width: 0px;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.02);
    opacity: 0;
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  &:hover {
    &:after {
      display: block;
      left: 0;
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.3);
      width: 100%;
    }
  }
`;

const UserContainer = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: auto;

  span {
    font-family: "Comfortaa", cursive;
    position: absolute;
    white-space: nowrap;
    right: 20px;
    bottom: 30px;
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    opacity: 0;
  }

  &:hover {
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    span {
      opacity: 1;
    }
  }
`;

const SignoutButton = styled.button`
  width: 25px;
  height: 25px;
  margin-right: 20px;
  background: url(${signoutIcon});
  background-size: cover;
  border: none;
  cursor: pointer;
  outline: none;
  position: relative;

  span {
    position: absolute;
  }
`;

const MainNavbar = ({
  isWideNavbar,
  shouldBeWide,
  shouldRenderHomeButton,
  shouldRenderLoginButton,
  shouldRenderUserIcon,
}) => {
  const user = useContext(UserContext);
  return (
    <NavbarContainer shouldBeWide={shouldBeWide} isWideNavbar={isWideNavbar}>
      {shouldRenderHomeButton && (
        <NavLink
          shouldRenderHomeButton={!user && shouldRenderHomeButton}
          to="/app/mainpage"
        >
          <ButtonContainer>
            <CustomIcon homeIcon />
            <NavButton>Main Page</NavButton>
          </ButtonContainer>
        </NavLink>
      )}
      {!user && shouldRenderLoginButton && (
        <NavLink to="/app/login">
          <ButtonContainer>
            <CustomIcon loginIcon />
            <NavButton>Login </NavButton>
          </ButtonContainer>
        </NavLink>
      )}
      {user && shouldRenderUserIcon && (
        <>
          <UserContainer to={PROFILE_PAGE}>
            <SignoutButton onClick={logout}>
              <span>Wyloguj</span>
            </SignoutButton>
            <UserImage userPhoto={user.photoURL ? user.photoURL : userIcon} />
            <span>Przejdź do profilu</span>
          </UserContainer>
        </>
      )}
    </NavbarContainer>
  );
};
export default MainNavbar;
