import React from "react";
import { connect } from "react-redux";
import { createPortal } from "react-dom";

import { LoginModal } from "../components/LoginModal/LoginModal";
import { logInAction, toggleSignInType } from "../actions/login";

function Login({ actions, loginType }) {
  return (
    <>
      {createPortal(
        <LoginModal loginType={loginType} actions={actions} />,
        document.body
      )}
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  actions: {
    toggleSignIn: loginType => dispatch(toggleSignInType(loginType)),
    onLoginSuccess: () => dispatch(logInAction()),
  },
});

const mapStateToProps = state => ({
  loginType: state.auth.loginType,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
