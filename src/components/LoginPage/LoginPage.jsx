import React, { useState, useContext } from "react";
import { auth, signInWithGoogle } from "../../firebase";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { PASSWORD_RESET } from "../../constants/routeURL";
import googleIcon from "../../assets/google_icon.png";

import MainNavbarContainer from "../MainNavbar/MainNavbarContainer";
import UserContext from "../UserProvider/UserProvider";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 550px;
  margin: 0 auto;
  font-family: "Comfortaa", cursive;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 12px 5px;
  margin: 10px 0;
  cursor: pointer;
  font-family: "Comfortaa", cursive;

  &:active,
  &:focus {
    border: 1px solid #2ed573;
  }
`;

export const FormError = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 15px 0px;
  border: 1px solid #ff4757;
  border-radius: 4px;
  padding: 10px;
  font-family: "Comfortaa", cursive;
  color: #ff6348;
`;

export const Formheader = styled.h1`
  color: #2f3542;
  font-size: 36px;
`;

export const TextCenter = styled.div`
  display: flex;
  justify-content: center;
  margin: ${(props) => (props.smallTop ? "5px 0" : "25px 0")};
`;

export const FormButton = styled.button`
  width: 50%;
  margin: 0 auto;
  padding: 15px 30px;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  font-family: "Comfortaa", cursive;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #a29bfe;
  border: none;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  color: white;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CustomIcon = styled.div`
  width: 25px;
  height: 25px;
  background: url(${googleIcon});
  background-size: cover;
  margin: 0 2px;
`;

export const LinkButton = styled(Link)`
  padding: 12px;
  display: flex;
  justify-content: center;
  border: 1px solid #74b9ff;
  border-radius: 4px;
  text-decoration: none;
  color: #636e72;
  width: 40%;
  margin: 5px auto;
`;

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const user = useContext(UserContext);

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };

  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      setError(error.message);
      console.error("Error signing in with password and email", error);
    });
  };

  return (
    <>
      <MainNavbarContainer shouldBeWide shouldRenderUserIcon={true} />
      <FormContainer>
        {console.log(user)}
        <Formheader>Log in -></Formheader>
        {error !== null && <FormError>{error}</FormError>}
        <Form className="">
          <label htmlFor="userEmail" className="block">
            Email:
          </label>
          <FormInput
            type="email"
            name="userEmail"
            value={email}
            placeholder="E.g: faruq123@gmail.com"
            id="userEmail"
            onChange={(event) => onChangeHandler(event)}
          />
          <label htmlFor="userPassword" className="block">
            Password:
          </label>
          <FormInput
            type="password"
            name="userPassword"
            value={password}
            placeholder="Your Password"
            id="userPassword"
            onChange={(event) => onChangeHandler(event)}
          />
          <FormButton
            onClick={(event) => {
              signInWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Login
          </FormButton>
        </Form>
        <TextCenter>or</TextCenter>
        <FormButton
          onClick={() => {
            signInWithGoogle();
          }}
        >
          <CustomIcon />
          Login with Google
        </FormButton>
        <TextCenter>Don't have an account?</TextCenter>
        <LinkButton to="signUp">Sign up here</LinkButton>
        <LinkButton to={PASSWORD_RESET}>Forgot Password?</LinkButton>
      </FormContainer>
    </>
  );
};

export default LoginPage;
