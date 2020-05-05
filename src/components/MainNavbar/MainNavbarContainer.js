import React, { Component } from "react";
import { withRouter } from "react-router";

import MainNavbar from "./MainNavbar.jsx";
import { MAIN_PAGE, LOGIN_PAGE } from "../../constants/routeURL";

class MainNavbarContainer extends Component {
  state = {
    isWideNavbar: false,
    shouldRenderHomeButton: false,
    shouldRenderLoginButton: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.wideNavbarOnScroll);
    this.checkIfRenderHomeButton();
    this.checkIfRenderLoginButton();
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.wideNavbarOnScroll);
  }

  checkIfRenderHomeButton = () => {
    return this.props.location.pathname === MAIN_PAGE
      ? this.setState({ shouldRenderHomeButton: false })
      : this.setState({ shouldRenderHomeButton: true });
  };

  checkIfRenderLoginButton = () => {
    return this.props.location.pathname === LOGIN_PAGE
      ? this.setState({ shouldRenderLoginButton: false })
      : this.setState({ shouldRenderLoginButton: true });
  };

  wideNavbarOnScroll = () => {
    let scrollY = window.scrollY;
    scrollY > 10
      ? this.setState({ isWideNavbar: true })
      : this.setState({ isWideNavbar: false });
  };

  render() {
    const { shouldBeWide, shouldRenderUserIcon } = this.props;
    return (
      <>
        <MainNavbar
          shouldBeWide={shouldBeWide}
          isWideNavbar={this.state.isWideNavbar}
          shouldRenderHomeButton={this.state.shouldRenderHomeButton}
          shouldRenderLoginButton={this.state.shouldRenderLoginButton}
          shouldRenderUserIcon={shouldRenderUserIcon}
        />
      </>
    );
  }
}

export default withRouter(MainNavbarContainer);
