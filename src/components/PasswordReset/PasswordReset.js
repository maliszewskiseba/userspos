import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LOGIN_PAGE } from "../../constants/routeURL";
import { auth } from "../../firebase";
import styled from "styled-components";

import MainNavbarContainer from "../MainNavbar/MainNavbarContainer";

import {
  FormContainer,
  Form,
  FormInput,
  FormButton,
  LinkButton,
} from "../LoginPage/LoginPage.jsx";

const PasswordNotification = styled.div`
  font-family: "Comfortaa", cursive;
  font-size: 24px;
  color: white;
  background-color: #74b9ff;
  border: 1px solid #0984e3;
  border-radius: 4px;
`;

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);
  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    }
  };
  const sendResetEmail = (event) => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmailHasBeenSent(true);
        setTimeout(() => {
          setEmailHasBeenSent(false);
        }, 3000);
      })
      .catch(() => {
        setError("Error resetting password");
      });
  };
  return (
    <>
      <MainNavbarContainer shouldRenderUserIcon={true} />
      <FormContainer>
        <h1 className="text-xl text-center font-bold mb-3">
          Reset your Password
        </h1>

        <Form action="">
          {emailHasBeenSent && (
            <PasswordNotification>
              An email has been sent to you!
            </PasswordNotification>
          )}
          {error !== null && (
            <div className="py-3 bg-red-600 w-full text-white text-center mb-3">
              {error}
            </div>
          )}
          <label htmlFor="userEmail" className="w-full block">
            Email:
          </label>
          <FormInput
            type="email"
            name="userEmail"
            id="userEmail"
            value={email}
            placeholder="Input your email"
            onChange={onChangeHandler}
            className="mb-3 w-full px-1 py-2"
          />
          <FormButton
            className="w-full bg-blue-400 text-white py-3"
            onClick={sendResetEmail}
          >
            Send me a reset link
          </FormButton>
        </Form>
        <LinkButton to={LOGIN_PAGE}>&larr; back to login page</LinkButton>
      </FormContainer>
    </>
  );
};
export default PasswordReset;
