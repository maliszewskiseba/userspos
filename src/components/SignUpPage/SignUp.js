import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LOGIN_PAGE } from "../../constants/routeURL";
import { auth, generateUserDocument } from "../../firebase";
import MainNavbarContainer from "../MainNavbar/MainNavbarContainer";

import {
  FormContainer,
  Form,
  FormInput,
  FormError,
  Formheader,
  TextCenter,
  FormButton,
  CustomIcon,
} from "../LoginPage/LoginPage.jsx";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };

  const createUserWithEmailAndPasswordHandler = async (
    event,
    email,
    password
  ) => {
    event.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      generateUserDocument(user, { displayName });
    } catch (error) {
      setError(error.message);
    }

    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  return (
    <>
      <MainNavbarContainer shouldRenderUserIcon={true} />
      <FormContainer>
        <Formheader>Sign Up</Formheader>
        {error !== null && <FormError>{error}</FormError>}
        <Form className="">
          <label htmlFor="displayName" className="block">
            Display Name:
          </label>
          <FormInput
            type="text"
            className="my-1 p-1 w-full "
            name="displayName"
            value={displayName}
            placeholder="E.g: Faruq"
            id="displayName"
            onChange={(event) => onChangeHandler(event)}
          />
          <label htmlFor="userEmail" className="block">
            Email:
          </label>
          <FormInput
            type="email"
            className="my-1 p-1 w-full"
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
            className="mt-1 mb-3 p-1 w-full"
            name="userPassword"
            value={password}
            placeholder="Your Password"
            id="userPassword"
            onChange={(event) => onChangeHandler(event)}
          />
          <FormButton
            className="bg-green-400 hover:bg-green-500 w-full py-2 text-white"
            onClick={(event) => {
              createUserWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Sign up
          </FormButton>
        </Form>
        <TextCenter>
          Already have an account?{" "}
          <Link to={LOGIN_PAGE} className="text-blue-500 hover:text-blue-600">
            Login here
          </Link>
        </TextCenter>
      </FormContainer>
    </>
  );
};
export default SignUp;
