import React, { Component, useContext } from "react";
import { withRouter } from "react-router";

import LoginPage from "./LoginPage.jsx";
import UserContext from "../UserProvider/UserProvider";
import { getGoogleRedirectInfo } from "../../firebase";
import { MAIN_PAGE } from "../../constants/routeURL";

class LoginPageContainer extends Component {
  componentDidMount() {
    // getGoogleRedirectInfo() ? console.log(this.props) : null;
    // const ifLogged = getGoogleRedirectInfo();
    // if (ifLogged) {
    //   console.log("ZWROCILO PRAWDE");
    //   console.log(this.props);
    // }
    this.secondFunction();
    console.log(this.props);
    // console.log(isLogged);
  }
  secondFunction = async () => {
    const result = await getGoogleRedirectInfo();
    console.log(result);
    // result ? this.props.history.push(MAIN_PAGE) : null;
    // if (result) {
    //   this.props.history.push(MAIN_PAGE);
    // }
    console.log(result);
  };
  render() {
    return <LoginPage />;
  }
}

export default withRouter(LoginPageContainer);
