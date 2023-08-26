import React from "react";
import { connect } from "react-redux";
import { createPortal } from "react-dom";

import { LoginModal } from "../components/LoginModal/LoginModal";

function Login({ loginType }) {
  return (
    <>{createPortal(<LoginModal loginType={loginType} />, document.body)}</>
  );
}

const mapStateToProps = state => {
  return {
    loginType: state.auth.loginType,
  };
};

export default connect(mapStateToProps)(Login);
