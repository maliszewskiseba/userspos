import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import ReactTooltip from "react-tooltip";
import PropTypes from "prop-types";

import UserBox from "./UserBox/UserBox";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import mainTheme from "../../helpers/mainTheme";
import i18n from "../../i18n";
import reloadIcon from "../../assets/reload_icon.png";
import MainNavbarContainer from "../MainNavbar/MainNavbarContainer.js";
import { UserContext } from "../UserProvider/UserProvider";

const MainpageBox = styled.div`
  width: 100%;
  max-width: ${rem(1200)};
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${rem(14)};
  position: relative;
`;

MainpageBox.defaultProps = { theme: mainTheme };

const ReloadIcon = styled.button`
  position: fixed;
  width: ${rem(30)};
  height: ${rem(30)};
  top: ${rem(15)};
  left: ${rem(15)};
  background: url(${reloadIcon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  z-index: 2;

  &:hover {
    transform: rotate(45deg);
  }
`;

const Mainpage = ({ fetchPosts, usersLoading, postsLoading, users }) => (
  <>
    <MainNavbarContainer shouldRenderUserIcon={true} />
    <MainpageBox>
      <ReloadIcon data-tip data-for="tooltip" onClick={fetchPosts} />
      {usersLoading || postsLoading ? (
        <LoadingSpinner data-test="loader" />
      ) : null}
      {users.length
        ? users.map((user) => (
            <UserBox key={`userKey_${user.id}`} user={user} />
          ))
        : null}
      <ReactTooltip id="tooltip" type="info" effect="float">
        <span>{i18n.t("custom.tooltip")}</span>
      </ReactTooltip>
    </MainpageBox>
  </>
);

Mainpage.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  usersLoading: PropTypes.bool.isRequired,
  postsLoading: PropTypes.bool.isRequired,
};

export default Mainpage;
