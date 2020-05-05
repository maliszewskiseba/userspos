import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import PropTypes from "prop-types";

import i18n from "../../../i18n";
import mainTheme from "../../../helpers/mainTheme";
import GenericButton from "../../GenericComponents/GenericButton/GenericButton";

const UserBoxContainer = styled.div`
  position: relative;
  width: ${rem(250)};
  height: ${rem(300)};
  border: ${({ theme }) => theme.border.light};
  box-sizing: border-box;
  padding: ${rem(10)};
  margin: ${rem(10)};
  border-radius: ${rem(10)};
  display: flex;
  justify-content: start;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.shadow.normal};
`;

UserBoxContainer.defaultProps = { theme: mainTheme };

const UserBoxUserInfo = styled.div`
  width: 100%;
  flex-direction: column;
`;

const UserBoxInfoRow = styled.span`
  display: inline-block;
  width: 100%;
  margin: ${(props) => props.userName && `${rem(10)} 0`};
  font-weight: ${(props) =>
    (props.userName || props.bs) && props.theme.font.weightBold};

  text-decoration: ${(props) =>
    (props.userEmail || props.userPhone || props.userWebsite) && "underline"};

  cursor: ${(props) =>
    (props.userEmail || props.userPhone || props.userWebsite) && "pointer"};
  color: ${(props) =>
    (props.userEmail || props.userPhone || props.userWebsite) &&
    props.theme.colors.blue};
`;
UserBoxInfoRow.defaultProps = { theme: mainTheme };

const UserBoxCompanyInfo = styled.div`
  margin-top: ${rem(10)};
`;

const UserBoxDetailsButton = styled(GenericButton)`
  position: relative;
`;

const UserLink = styled.a.attrs((props) => ({
  target: props.web ? "_blank" : undefined,
}))``;

const UserBoxDetailsPortalBox = styled.div`
  position: absolute;
  bottom: ${rem(30)};
  right: 0;
  width: 100%;
  display: flex;
  justify-content: center;

  a {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    text-decoration: none;
    font-size: ${({ theme }) => theme.font.sizeBig};
  }
`;
UserBoxDetailsPortalBox.defaultProps = { theme: mainTheme };

const UserBox = ({ user }) => (
  <>
    <UserBoxContainer>
      <UserBoxUserInfo>
        <UserBoxInfoRow data-test="user-row" userName>
          <span data-test="user-name">{user.name}</span>
        </UserBoxInfoRow>
        <UserLink href={`mailto:${user.email}`}>
          <UserBoxInfoRow data-test="user-row" userEmail>
            {user.email}
          </UserBoxInfoRow>
        </UserLink>
        <UserBoxInfoRow userPhone>{user.phone}</UserBoxInfoRow>
        <UserLink web href={user.website}>
          <UserBoxInfoRow data-test="user-row" userWebsite>
            {user.website}
          </UserBoxInfoRow>
        </UserLink>
      </UserBoxUserInfo>
      <UserBoxCompanyInfo>
        <UserBoxInfoRow data-test="user-row">
          {user.company.name}
        </UserBoxInfoRow>
        <UserBoxInfoRow data-test="user-row">
          {user.company.catchPhrase}
        </UserBoxInfoRow>
        <UserBoxInfoRow data-test="user-row" bs>
          {user.company.bs}
        </UserBoxInfoRow>
      </UserBoxCompanyInfo>
      <UserBoxDetailsPortalBox>
        <a href={`/app/user/${user.id}`}>
          <UserBoxDetailsButton
            text={i18n.t("custom.details")}
            width="80%"
            fontSize="18px"
          />
        </a>
      </UserBoxDetailsPortalBox>
    </UserBoxContainer>
  </>
);
// UserBox.defaultProps = {
//   user: {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//       name: 'Romaguera-Crona',
//       catchPhrase: 'Multi-layered client-server neural-net',
//       bs: 'harness real-time e-markets'
//     }
//   }
// };
UserBox.propTypes = { user: PropTypes.object.isRequired };

export default UserBox;
