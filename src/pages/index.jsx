import React from "react";
import { connect } from "react-redux";

import Login from "./Login";
import Feed from "./Feed";

function Home({ isLoggedIn }) {
  return <div className="home">{isLoggedIn ? <Feed /> : <Login />}</div>;
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
  };
};

export default connect(mapStateToProps)(Home);
