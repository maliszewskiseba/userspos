import React, { useContext } from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";

import history from "../history";
import MainpageContainer from "../components/Mainpage/MainpageContainer";
import UserPageContainer from "../components/Userpage/UserpageContainer";
import PostDetailsContainer from "../components/PostDetails/PostDetailsContainer";
import LoginPage from "../components/LoginPage/LoginPageContainer.js";
import SignupPage from "../components/SignUpPage/SignUp";
import PasswordReset from "../components/PasswordReset/PasswordReset";
import ProfilePage from "../components/ProfilePage/ProfilePage.jsx";
import UserContext from "../components/UserProvider/UserProvider";
import {
  DEFAULT_REDIRECT,
  MAIN_PAGE,
  USER_PAGE,
  POST_DETAILS,
  LOGIN_PAGE,
  SIGNUP_PAGE,
  PASSWORD_RESET,
  PROFILE_PAGE,
} from "../constants/routeURL";

const AppRouter = () => {
  const user = useContext(UserContext);

  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path={DEFAULT_REDIRECT}
          render={() => <Redirect to="/app/mainpage" />}
        />
        <Route exact path={MAIN_PAGE} component={MainpageContainer} />
        <Route exact path={USER_PAGE} component={UserPageContainer} />
        <Route exact path={POST_DETAILS} component={PostDetailsContainer} />
        <Route exact path={LOGIN_PAGE} component={LoginPage} />
        <Route exact path={SIGNUP_PAGE} component={SignupPage} />
        <Route exact path={PASSWORD_RESET} component={PasswordReset} />
        <Route exact path={PROFILE_PAGE} component={ProfilePage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
